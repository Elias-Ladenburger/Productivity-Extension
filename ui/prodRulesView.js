const ProdRulesView = {
  addEntryToTable: (prodRule, ruleID) => {
    const tableID = "productionRuleTable";
    let settingsTable = document.getElementById(tableID);

    let newRow = settingsTable.insertRow(-1);
    let ruleCell = newRow.insertCell(0);
    let actionsCell = newRow.insertCell(1);

    newRow.id = ruleID;
    ruleCell.innerHTML = _formatString(prodRule);
    ruleCell.setAttribute("class", "px-2");
    actionsCell.innerHTML = `<button id="${tableID}_edit_${ruleID}" class="rounded-lg border-white bg-navy text-white hover:bg-blueRoyal px-2 mx-1 text-center">edit</button>
  <button id="${tableID}_delete_${ruleID}" class="rounded-lg border-white bg-navy text-white hover:bg-blueRoyal px-2 mx-1 text-center">delete</button>`;

    const deleteButton = document.getElementById(`${tableID}_delete_${ruleID}`);
    const editButton = document.getElementById(`${tableID}_edit_${ruleID}`);
    return { edit: editButton, delete: deleteButton, entry: ruleCell };
  },

  removeFromTable: (ruleID) => {
    let toDelete = document.getElementById(ruleID)
    toDelete.remove();
    console.log(`Removing rule for ${ruleID}!`);
  },

  toggleEditForm: () => {
    let myFields = _getFormFields();
    myFields.actionsource = prodRule.source
    myFields.actiontype = prodRule.action.type
    myFields.condition = prodRule.condition
    myFields.delay = prodRule.delay
  },

  getFormData: () => {
    let myFields = _getFormFields();
    let formData = [];
    for (let elemID in myFields) {
      formData[elemID] = myFields[elemID].value;
    }
    return formData;
  },

  getFormFields: _getFormFields,

  clearForm: () => {
    document.getElementById("rulesForm").reset();
  }
};

function _formatString(entry) {
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
    const choiceFields = getMultipleChoiceFields()
    const conditionStr = choiceFields.actioncondition[prodRule.condition]
    const delayStr = msToTime(prodRule.delay)
  const resultsStr =  `<em class="text-lg">${prodRule.source}</em> <br><b>${
    conditionStr
  }</b> when I visit <b>${prodRule.source}</b> then <b>${
    delayStr
  } ${myAction.toString()}</b>`;

  return resultsStr
}

function _getFormFields() {
  const formFields = {
    actionsource: document.getElementById("actionsource"),
    actiontype: document.getElementById("actiontype"),
    targetVal: document.getElementById("targetvalue"),
    condition: document.getElementById("actioncondition"),
    delay: document.getElementById("actiondelay"),
    ruleID: document.getElementById("ruleID"),
  };
  return formFields;
}
