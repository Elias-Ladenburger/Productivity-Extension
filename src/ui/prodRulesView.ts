import { doc } from "prettier";
import { ActionFactory } from "../domain/action";
import { ProdRule, ProdRuleFactory } from "../domain/prodRules";
import { getStringsForEnums, msToTime } from "../helpers/helpers";
import * as Controller from "./prodRulesController";
import { _formatString } from "./common"

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
  _container: HTMLElement
  fields: HTMLElement[]


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
    this._container = document.getElementById("ruleForm") as HTMLElement
    this.fields = [this.actionsource, this.actiontype, this.condition, this.delay, this.targetVal, this.ruleID]
  }


  toStart() {
    this.actionsource.value = ""
    this.actiontype.selectedIndex = 0
    this.targetVal.value = ""
    this.condition.selectedIndex = 0
    this.delay.selectedIndex = 0
    this.setEditMode(false)
    this.hide()
  }

  getValues() {
    return {
      "actionsource": this.actionsource.value,
      "actiontype": this.actiontype.value || "",
      "targetVal": this.targetVal.value,
      "condition": this.condition.value,
      "delay": parseInt(this.delay.value),
      "ruleID": this.ruleID.value
    }
  }

  show() {
    this._container.classList.remove("hidden")
  }

  hide() {
    this._container.classList.add("hidden")
  }

  setEditMode(editing: boolean) {
    if (editing) {
      this._title.innerHTML = "Edit Rule"
      this._button.innerHTML = "Save Changes"
      this._toggleBorders("border-primary", "border-bgGrey100")
      this.show()
    }
    else {
      this.ruleID.value = "NEW"
      this._title.innerHTML = "Add a Productivity Rule"
      this._button.innerHTML = "Add Rule"
      this._toggleBorders("border-bgGrey100", "border-primary")
    }

  }

  _toggleBorders(oldBorder: string, newBorder: string) {
    this.fields.forEach((field) => {
      field.classList.add(newBorder)
      field.classList.remove(oldBorder)
    })
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
  form: () => { return new RuleForm() },

  addEntry: ProdTable.addEntry,
  clearEntries: ProdTable.clear,
  removeEntry: ProdTable.removeRule,

  showForm: () => { const ruleForm = new RuleForm(); ruleForm.show() },
  hideForm: () => { const ruleForm = new RuleForm(); ruleForm.hide() },


  setFormEditMode: (editing: boolean) => {
    const ruleForm = new RuleForm()
    ruleForm.setEditMode(editing)
  },

  getFormData: () => { const ruleForm = new RuleForm(); return ruleForm.getValues() },

  clearForm: () => {
    const ruleForm = new RuleForm();
    ruleForm.toStart()
    ProdRulesView.applyTableFormat()
  },

  setFormValues(formValues: ProdRule, ruleID: string, showValueField: boolean) {
    const ruleForm = new RuleForm()
    ruleForm.toStart()
    ruleForm.actionsource.value = formValues.source
    ruleForm.actiontype.value = formValues.action.type
    if (showValueField) {
      ruleForm.targetVal.classList.remove("hidden")
      ruleForm.targetVal.value = formValues.action.targetValue
    }
    else {
      ruleForm.targetVal.classList.add("hidden")
    }
    ruleForm.condition.value = formValues.condition
    ruleForm.delay.value = formValues.delay.toString()
    ruleForm.ruleID.value = ruleID

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

export default ProdRulesView