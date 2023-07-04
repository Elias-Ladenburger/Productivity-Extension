import { ActionFactory } from "../domain/action";
import { ProdRule } from "../domain/prodRules";
import { msToTime } from "../helpers/helpers";
import * as Controller from "./prodRulesController.ts";

class RuleForm extends HTMLFormControlsCollection {
    actionsource = document.getElementById("actionsource") as HTMLInputElement
  actiontype = document.getElementById("actiontype") as HTMLSelectElement
  targetVal = document.getElementById("targetvalue") as HTMLInputElement
  condition = document.getElementById("actioncondition") as HTMLSelectElement
  delay = document.getElementById("actiondelay") as HTMLSelectElement
  ruleID = document.getElementById("ruleID") as HTMLInputElement

    reset(){
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

const ProdRulesView = {
  addEntryToTable: (prodRule: ProdRule, ruleID: string) => {
    const tableID = "productionRuleTable";
    let settingsTable = document.getElementById(tableID) as HTMLTableElement;
    
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

  removeFromTable: (ruleID:string) => {
    let toDelete = document.getElementById(ruleID)
    toDelete.remove();
    console.log(`Removing rule for ${ruleID}!`);
  },

  getFormData: () => {
    let myForm = new RuleForm()
    return myForm.getValues();
  },

  clearForm: () => {
    const form = new RuleForm()
    form.reset()
  },
  setFormValues(formValues: ProdRule, ruleID: string) {
    let myForm = new RuleForm()
    myForm.actionsource.value = formValues.source
    
  }
};

function _formatString(prodRule: ProdRule) {
    const conditionStr = msToTime(prodRule.delay)
    const delayStr = msToTime(prodRule.delay)
  const resultsStr =  `<em class="text-lg">${prodRule.source}</em> <br><b>${
    conditionStr
  }</b> when I visit <b>${prodRule.source}</b> then <b>${
    delayStr
  } ${prodRule.action.toString()}</b>`;

  return resultsStr
}

export default ProdRulesView