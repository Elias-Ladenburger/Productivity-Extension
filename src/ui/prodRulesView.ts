import { ActionFactory } from "../domain/action";
import { ProdRule } from "../domain/prodRules";
import { getStringsForEnums, msToTime } from "../helpers/helpers";
import * as Controller from "./prodRulesController";

class RuleForm {
    actionsource: HTMLInputElement;
    actiontype: HTMLSelectElement;
    targetVal: HTMLInputElement;
    condition: HTMLSelectElement;
    delay: HTMLSelectElement;
    ruleID: HTMLInputElement;


    constructor(){
      this.actionsource = document.getElementById("actionsource") as HTMLInputElement
      this.actiontype = document.getElementById("actiontype") as HTMLSelectElement
      this.targetVal = document.getElementById("targetvalue") as HTMLInputElement
      this.condition = document.getElementById("rulecondition") as HTMLSelectElement
      this.delay = document.getElementById("actiondelay") as HTMLSelectElement
      this.ruleID = document.getElementById("ruleID") as HTMLInputElement    }


    toStart(){
      this.actionsource.value = ""
      this.actiontype.selectedIndex = 0
      this.targetVal.value = ""
      this.condition.selectedIndex = 0
      this.delay.selectedIndex = 0
      this.ruleID.value = "NEW"
    }

    getValues(){
      return {
        "actionsource": this.actionsource.value,
        "actiontype": this.actiontype.value,
        "targetVal": this.targetVal.value,
        "condition": this.condition.value,
        "delay": parseInt(this.delay.value),
        "ruleID": this.ruleID.value
      }
    }
}

const ProdTable = {
  tableID: "productionRuleTable",

  addEntry: (prodRule: ProdRule, ruleID: string) => {
      const prodTable = document.getElementById(ProdTable.tableID) as HTMLTableElement
      let newRow = prodTable.insertRow(-1);
      let ruleCell = newRow.insertCell(0);
      let actionsCell = newRow.insertCell(1);

      newRow.id = ruleID;
      ruleCell.innerHTML = _formatString(prodRule);
      ruleCell.setAttribute("class", "px-2");
      actionsCell.innerHTML = `<button id="${ProdTable.tableID}_edit_${ruleID}" class="rounded-lg border-white bg-navy text-white hover:bg-blueRoyal px-2 mx-1 text-center">edit</button>
    <button id="${ProdTable.tableID}_delete_${ruleID}" class="rounded-lg border-white bg-navy text-white hover:bg-blueRoyal px-2 mx-1 text-center">delete</button>`;

      const deleteButton = document.getElementById(`${ProdTable.tableID}_delete_${ruleID}`);
      const editButton = document.getElementById(`${ProdTable.tableID}_edit_${ruleID}`);
      return { edit: editButton, delete: deleteButton, entry: ruleCell };
  },

  removeRule: (ruleID:string) => {
    let toDelete = document.getElementById(ruleID)
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

  addEntryToTable: ProdTable.addEntry,
  clearTable: ProdTable.clear,
  removeFromTable: ProdTable.removeRule,
  


  getFormData: () => {
    let myForm = new RuleForm()
    return myForm.getValues();
  },

  clearForm: () => {
    const form = new RuleForm()
    form.toStart()
  },

  setFormValues(formValues: ProdRule, ruleID: string) {
    let myForm = new RuleForm()
    myForm.actionsource.value = formValues.source
    myForm.actiontype.value = formValues.action.type
    myForm.targetVal.value = formValues.action.targetValue  
    myForm.condition.value = formValues.condition
    myForm.delay.value = formValues.delay.toString()
    myForm.ruleID.value = ruleID
    
  }
};

function _formatString(prodRule: ProdRule) {
    const enumStrings = getStringsForEnums()
    const conditionStr = enumStrings.rulecondition[prodRule.condition]
    const actionStr = enumStrings.actiontype[prodRule.action.type]
    const delayStr = enumStrings.actiontype[prodRule.delay] || msToTime(prodRule.delay)

  const resultsStr =  `<em class="text-lg">${prodRule.source}</em> <br><b>${
    conditionStr
  }</b> when I visit <b>${prodRule.source}</b> then <b>${delayStr} 
  ${actionStr}: <em>${prodRule.action.targetValue}</em></b>`;

  return resultsStr
}

export default ProdRulesView