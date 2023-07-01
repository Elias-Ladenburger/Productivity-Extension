const ProdRulesView = {
  addEntryToTable: (prodRule, ruleIndex) => {
    const tableID = "productionRuleTable";
    let settingsTable = document.getElementById(tableID);

    let newRow = settingsTable.insertRow(-1);
    let ruleCell = newRow.insertCell(0);
    let actionsCell = newRow.insertCell(1);

    const prodID = _getRowID(prodRule.source, ruleIndex);
    newRow.id = prodID;
    ruleCell.innerHTML = _formatString(prodRule);
    ruleCell.setAttribute("class", "px-2");
    actionsCell.innerHTML = `<button id="${tableID}_edit_${prodID}" class="rounded-lg border-white bg-navy text-white hover:bg-blueRoyal px-2 mx-1 text-center">edit</button>
  <button id="${tableID}_delete_${prodID}" class="rounded-lg border-white bg-navy text-white hover:bg-blueRoyal px-2 mx-1 text-center">delete</button>`;

    const deleteButton = document.getElementById(`${tableID}_delete_${prodID}`);
    const editButton = document.getElementById(`${tableID}_edit_${prodID}`);
    return { edit: editButton, delete: deleteButton, entry: ruleCell };
  },

  removeFromTable: (unproductiveSite, ruleIndex) => {
    const rowID = _getRowID(unproductiveSite, ruleIndex);
    let toDelete = document.getElementById(rowID);
    toDelete.remove();
    console.log(`Removing rule for ${rowID}!`);
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
  },

  getRowID: _getRowID

};

function _getRowID(unproductiveSite, ruleIndex) {
  const rowID = `${unproductiveSite}-${ruleIndex}`;
  return rowID;
}

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
    _id: document.getElementById("ruleID"),
  };
  return formFields;
}
