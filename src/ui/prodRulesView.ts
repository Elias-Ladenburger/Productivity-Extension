import { doc } from "prettier";
import { ActionFactory } from "../domain/action";
import { ProdRule, ProdRuleFactory } from "../domain/prodRules";
import { getStringsForEnums, msToTime } from "../helpers/helpers";
import * as Controller from "./prodRulesController";

class RuleForm {
  actionsource: HTMLInputElement;
  actiontype: HTMLSelectElement;
  targetVal: HTMLInputElement;
  condition: HTMLSelectElement;
  delay: HTMLSelectElement;
  ruleID: HTMLInputElement;
  _title: HTMLTitleElement;
  _button: HTMLButtonElement
  _cancelButton: HTMLButtonElement


  constructor() {
    this.actionsource = document.getElementById("actionsource") as HTMLInputElement
    this.actiontype = document.getElementById("actiontype") as HTMLSelectElement
    this.targetVal = document.getElementById("targetvalue") as HTMLInputElement
    this.condition = document.getElementById("rulecondition") as HTMLSelectElement
    this.delay = document.getElementById("actiondelay") as HTMLSelectElement
    this.ruleID = document.getElementById("ruleID") as HTMLInputElement
    this._button = document.getElementById("saveRuleButton") as HTMLButtonElement
    this._cancelButton = document.getElementById("cancelRuleButton") as HTMLButtonElement
    this._title = document.getElementById("ruleFormTitle") as HTMLTitleElement
  }


  toStart() {
    this.actionsource.value = ""
    this.actiontype.selectedIndex = 0
    this.targetVal.value = ""
    this.condition.selectedIndex = 0
    this.delay.selectedIndex = 0
    this.setEditMode(false)
  }

  getValues() {
    return {
      "actionsource": this.actionsource.value,
      "actiontype": this.actiontype.value,
      "targetVal": this.targetVal.value,
      "condition": this.condition.value,
      "delay": parseInt(this.delay.value),
      "ruleID": this.ruleID.value
    }
  }

  setEditMode(editing: boolean) {
    if (editing) {
      this._title.innerHTML = "Edit Rule"
      this._button.innerHTML = "Save Changes"
      this._cancelButton.classList.toggle("hidden")
    }
    else {
      this.ruleID.value = "NEW"
      this._title.innerHTML = "Add a Productivity Rule"
      this._button.innerHTML = "Add Rule"
      this._cancelButton.classList.toggle("hidden")
    }

  }
}

const ProdTable = {
  tableID: "productionRuleTable",

  getTable: () => {
    const prodTable = document.getElementById(ProdTable.tableID) as HTMLTableElement
    return prodTable
  },

  getBody: () => {
    const prodTable = ProdTable.getTable()
    const body = prodTable.tBodies[0]
    return body
  },

  addEntry: (prodRule: ProdRule, ruleID: string) => {
    const prodTable = ProdTable.getBody();
    let newRow = prodTable.insertRow(-1);
    let ruleCell = newRow.insertCell(0);
    let actionsCell = newRow.insertCell(1);

    newRow.id = ruleID;
    ruleCell.innerHTML = _formatString(prodRule);
    ruleCell.setAttribute("class", "px-2 ");
    const editButtonPrototype = document.getElementById("prototypeEditButton") as HTMLButtonElement
    const deleteButtonPrototype = document.getElementById("prototypeDeleteButton") as HTMLButtonElement

    let editButton = editButtonPrototype.cloneNode(true) as HTMLButtonElement
    editButton.id = ProdTable.tableID + "_edit_" + ruleID

    let deleteButton = deleteButtonPrototype.cloneNode(true) as HTMLButtonElement
    deleteButton.id = `${ProdTable.tableID}_delete_${ruleID}`

    actionsCell.insertBefore(editButton, null)
    actionsCell.insertBefore(deleteButton, null)

    return { edit: editButton, delete: deleteButton, entry: ruleCell };
  },

  removeRule: (ruleID: string) => {
    let toDelete = document.getElementById(ruleID) as HTMLTableElement;
    toDelete.remove();
    console.log(`Removing rule for ${ruleID}!`);
  },

  clear: () => {
    const prodTable = document.getElementById(ProdTable.tableID) as HTMLTableElement
    const oldBody = prodTable.tBodies[0]
    const newBody = document.createElement('tbody');
    prodTable.replaceChild(newBody, oldBody)
  }

}

const ProdRulesView = {

  addEntry: ProdTable.addEntry,
  clearEntries: ProdTable.clear,
  removeEntry: ProdTable.removeRule,

  isFormEditMode: (editMode: boolean) => {
    let myForm = new RuleForm()
    myForm.setEditMode(editMode)
  },

  getFormData: () => {
    let myForm = new RuleForm()
    return myForm.getValues();
  },

  clearForm: () => {
    const form = new RuleForm()
    form.toStart()
    ProdRulesView.applyTableFormat()
  },

  setFormValues(formValues: ProdRule, ruleID: string) {
    let myForm = new RuleForm()
    myForm.actionsource.value = formValues.source
    myForm.actiontype.value = formValues.action.type
    myForm.targetVal.value = formValues.action.targetValue
    myForm.condition.value = formValues.condition
    myForm.delay.value = formValues.delay.toString()
    myForm.ruleID.value = ruleID

  },

  highlightRow: (rowID: string, mode: string = "standard") => {
    ProdRulesView.applyTableFormat("inactive")
    const formatPrototype = document.getElementById(`${mode}_row`) as HTMLElement
    const formatting = formatPrototype.className
    const formattedRow = document.getElementById(rowID) as HTMLElement
    formattedRow.className = formatting
  },

  applyTableFormat: (mode: string = "standard") => {
    const table = ProdTable.getTable()

    for (let i = 0, row; row = table.rows[i]; i++) {
      const standardFormat = document.getElementById(`${mode}_row`) as HTMLElement
      const formatting = standardFormat.className
      row.className = formatting
    }
  },

  showOnboarding: () => {
    const row = ProdTable.getBody().insertRow()
    const cell = row.insertCell()
    cell.innerHTML = "No productivity rule created yet"
    cell.id = "demo"
  }
};

function _formatString(prodRule: ProdRule) {
  const enumStrings = getStringsForEnums()
  const conditionStr = enumStrings.rulecondition[prodRule.condition]
  const actionStr = enumStrings.actiontype[prodRule.action.type]
  const delayStr = enumStrings.actiontype[prodRule.delay] || msToTime(prodRule.delay).toLowerCase()

  const resultsStr = `<em class="text-lg">${prodRule.source}</em> <br><b>${conditionStr
    }</b> when I visit <b>${prodRule.source}</b> then <b>${delayStr} 
  ${actionStr}: <em>${prodRule.action.targetValue}</em></b>`;

  return resultsStr
}

export default ProdRulesView