prepareAll();

function prepareAll() {
  prepareTable();

  let addButton = document.getElementById("blacklistButton");
  addButton.addEventListener(
    "click",
    function (e) {
      addEntry();
    },
    false
  );
}

function prepareTable() {
  getAllBlacklisted().then((allBlacklisted) => {
    console.log(allBlacklisted);
    if (!allBlacklisted || (allBlacklisted && !allBlacklisted.length)) {
      addDemoRule();
    } else {
      allBlacklisted.forEach((blacklisted) => {
        addToTable(blacklisted["entry"]);
      });
    }
  });
}

function addDemoRule() {
  let demoRule = new ProdRule(
    "UnproductiveSite.com",
    new Action(ActionType.REDIRECT, "productiveurl.com")
  );
  addToTable(demoRule);
  let demoRow = document.getElementById("UnproductiveSite.com");
  let demoAttrs = demoRow.getAttribute("class");
  demoAttrs = demoAttrs + " text-darkGrey";
  demoRow.setAttribute("class", demoAttrs);
}

function addEntry() {
  let actionSource = document.getElementById("actionsource");
  let selectedType = document.getElementById("actiontype");
  let targetVal = document.getElementById("targetvalue");
  let selectedCondition = document.getElementById("actioncondition");
  let selectedDelay = document.getElementById("actiondelay");

  let actionDelay = actionDelay[selectedDelay.value];
  let actionCondition = ActionCondition[selectedCondition.value];
  let actionType = ActionType[selectedType.value];

  let newEntry = new ProdRule(
    actionSource.value,
    new Action(actionType, targetVal.value),
    actionCondition,
    actionDelay
  );

  if (actionSource && actionType && targetVal.value) {
    addBlacklist(newEntry);
    addToTable(newEntry);
    actionSource.value = "";
    targetVal.value = "";
    selectedCondition = "";
    selectedType = "";
  }
}

function addToTable(prodRule) {
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
  const myAction = new Action(entry.action.type, entry.action.targetValue);
  const prodRule = new ProdRule(
    entry.source,
    myAction,
    entry.condition,
    entry.delay
  );
  return `<em class="text-lg">${prodRule.source}</em> <br><b>${prodRule.condition}</b> when I visit <b>${prodRule.source}</b> then <b>${prodRule.delay} ${myAction.type} ${myAction.targetValue}</b>`;
}

function removeFromTable(prodID) {
  deleteBlacklist(prodID);
  let toDelete = document.getElementById(prodID);
  toDelete.remove();
  console.log(`Removing rule for ${prodID}!`);
}
