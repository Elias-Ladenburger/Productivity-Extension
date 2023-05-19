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
      let demoRule = new ProdRule("*.facebook.com", new Action(ActionType.REDIRECT, "jamesclear.com/atomic-habits"));
      addToTable(demoRule);
    } else {
      allBlacklisted.forEach((blacklisted) => {
        addToTable(blacklisted["bad"], blacklisted["entry"]);
      });
    }
  });
}

function addEntry() {
  let actionSource = document.getElementById("actionsource");
  let selectedType = document.getElementById("actiontype");
  let targetVal = document.getElementById("targetvalue");
  let selectedCondition = document.getElementById("actioncondition");
  let selectedFrequency = document.getElementById("actionfrequency");

  let actionFrequency = ActionFrequency[selectedFrequency.value];
  let actionCondition = ActionCondition[selectedCondition.value];
  let actionType = ActionType[selectedType.value];

  let newEntry = new ProdRule(
    actionSource.value,
    new Action(actionType, targetVal.value),
    actionCondition,
    actionFrequency
  );

  console.log(
    `
  source value: ${actionSource.value};
  selected type: ${actionType};
  target value: ${targetVal.value};
  condition: ${actionCondition};
  frequency: ${actionFrequency};
  ${newEntry.stringify()}
  `
  );

  if (actionSource && actionType && targetVal.value) {
    addBlacklist(newEntry);
    addToTable(actionSource.value, targetVal.value);
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

  let prodID = prodRule.source
  newRow.id = prodID;
  ruleCell.innerHTML = prodRule.toString();
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

function removeFromTable(prodID) {
  deleteBlacklist(prodID);
  let toDelete = document.getElementById(prodID);
  toDelete.remove();
  console.log(`Removing rule for ${prodID}!`);
}
