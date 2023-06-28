prepareAll();

function prepareAll() {
  prepareProdRuleTable();
  prepareWorkHourTable();
  prepareAddRuleButton();
}

async function prepareProdRuleTable() {
  const ruleList = await PersistanceHandler.getAllRules();
  console.log(ruleList);
  if (!ruleList || ruleList.length == 0) {
    addDemoRule();
  } else {
    Object.keys(ruleList).forEach((badSite) => {
      ruleList[badSite].forEach((rule) => {
        addToProdTable(rule);
      });
    });
  }
}

function prepareAddRuleButton() {
  let addButton = document.getElementById("addRuleButton");
  addButton.addEventListener(
    "click",
    function (e) {
      addProdRule();
    },
    false
  );
}

function addDemoRule() {
  const demoURL = "demoUnproductiveSite.com";
  let demoRule = new ProdRule(demoURL, new RedirectAction("productiveURL.com"));
  addToProdTable(demoRule);
  let demoRow = document.getElementById(demoURL);
  let demoAttrs = demoRow.getAttribute("class");
  demoAttrs = demoAttrs + " text-darkGrey";
  demoRow.setAttribute("class", demoAttrs);
}

function addProdRule() {
  let actionSource = document.getElementById("actionsource");
  let selectedType = document.getElementById("actiontype");
  let targetVal = document.getElementById("targetvalue");
  let selectedCondition = document.getElementById("actioncondition");
  let selectedDelay = document.getElementById("actiondelay");

  let actionDelay = ActionDelay[selectedDelay.value];
  let actionCondition = ActionCondition[selectedCondition.value];
  let actionType = ActionType[selectedType.value];

  let newEntry = new ProdRule(
    actionSource.value,
    ActionFactory.createAction(actionType, targetVal.value),
    actionCondition,
    actionDelay
  );

  if (actionSource && actionType && targetVal.value) {
    PersistanceHandler.addRule(newEntry);
    addToProdTable(newEntry);
    actionSource.value = "";
    targetVal.value = "";
    selectedCondition = "";
    selectedType = "";
  }
}

function addToProdTable(prodRule) {
  let settingsTable = document.getElementById("settingsTable");
  let newRow = settingsTable.insertRow(-1);
  let ruleCell = newRow.insertCell(0);
  let actionsCell = newRow.insertCell(1);

  let prodID = prodRule.source;
  newRow.id = prodID;
  ruleCell.innerHTML = formatString(prodRule);
  ruleCell.setAttribute("class", "px-2");
  actionsCell.innerHTML = `<button id="edit_${prodID}" class="rounded-lg border-white bg-navy text-white hover:bg-blueRoyal px-2 mx-1 text-center">edit</button>
  <button id="delete_${prodID}" class="rounded-lg border-white bg-navy text-white hover:bg-blueRoyal px-2 mx-1 text-center">delete</button>`;
  let addButton = document.getElementById(`delete_${prodID}`);
  addButton.addEventListener(
    "click",
    function (e) {
      removeFromTable(prodID);
    },
    false
  );
}

function formatString(entry) {
  const myAction = ActionFactory.createAction(
    entry.action.type,
    entry.action.targetValue
  );
  const prodRule = new ProdRule(
    entry.source,
    myAction,
    entry.condition,
    entry.delay
  );
  return `<em class="text-lg">${prodRule.source}</em> <br><b>${
    prodRule.condition
  }</b> when I visit <b>${prodRule.source}</b> then <b>${
    prodRule.delay
  } ${myAction.toString()}</b>`;
}

function removeFromTable(prodID) {
  deleteBlacklist(prodID);
  let toDelete = document.getElementById(prodID);
  toDelete.remove();
  console.log(`Removing rule for ${prodID}!`);
}
