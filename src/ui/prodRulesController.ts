import { ActionFactory, ActionType } from "../domain/action";
import { ProdRule, ProdRuleFactory, RuleCondition } from "../domain/prodRules";
import { getStringsForEnums } from "../helpers/helpers";
import PersistanceHandler from "../persistance/persistance";
import ProdRulesView from "./prodRulesView";

prepareProdRules();
const addButton = document.getElementById("addRuleButton");
const editButton = document.getElementById("editRuleButton");

function prepareProdRules() {
  console.log("preparing form!")
  prepareForm();
  prepareProdRuleTable();
  prepareAddRuleButton();
}

function prepareForm() {
  const multipleChoiceFields = getStringsForEnums();
  let selectElement;
  let myDict;
  for (let elemID in multipleChoiceFields) {
    selectElement = document.getElementById(elemID);
    myDict = multipleChoiceFields[elemID];
    for (let key in multipleChoiceFields[elemID]) {
      let optionElement = document.createElement("option");
      optionElement.value = key;
      optionElement.textContent = myDict[key];
      selectElement.appendChild(optionElement);
    }
  }
}

async function prepareProdRuleTable() {
  const ruleList = await PersistanceHandler.getAllRules();
  if (!ruleList || ruleList.length == 0 || Object.keys(ruleList).length == 0) {
    addDemoRule();
  } else {
    Object.keys(ruleList).forEach((unproductiveSite) => {
      let ruleIndex = 0;
      ruleList[unproductiveSite].forEach((rule: ProdRule) => {
        addToProdTable(rule, ruleIndex);
        ruleIndex++;
      });
    });
  }
}

function addDemoRule() {
  const demoURL = "demoUnproductiveSite.com";
  const demoAction = ActionFactory.createAction("POPUP", "Do you really want to spend time on this site?")
  const demoRule = ProdRuleFactory.createRule(demoURL, demoAction)

  ProdRulesView.addEntryToTable(demoRule, "demo");
}

function prepareAddRuleButton() {
  let addButton = document.getElementById("addRuleButton");
  addButton.addEventListener(
    "click",
    function (e) {
        console.log("Adding new rule:")
      addRuleFromForm();
    },
    false
  );
}

async function addRuleFromForm() {
  const formData = ProdRulesView.getFormData();

  const actionsource = formData.actionsource
  const targetVal = formData.targetVal
  const actionDelay = formData.delay;
  const actionCondition = formData.condition;
  const actionType = formData.actiontype;
  const ruleID: string = formData.ruleID as string;

  let newAction = ActionFactory.createAction(actionType, targetVal)
  let newEntry = ProdRuleFactory.createRule(actionsource, newAction, actionCondition, actionDelay)
  console.log(newEntry)

  if (actionsource && actionType && targetVal) {
    if(ruleID == IDHandler.STANDARD_ID()){
      const ruleIndex = await PersistanceHandler.addRule(newEntry);
      addToProdTable(newEntry, ruleIndex);
    }
    else {
      const id_elems = IDHandler.deconstructID(ruleID);
      PersistanceHandler.updateRule(
        id_elems["badSite"],
        id_elems["index"],
        newEntry
      );
    }
    }
  ProdRulesView.clearForm();
}

function addToProdTable(prodRule: ProdRule, ruleIndex: number) {
  const ruleID = IDHandler.getRowID(prodRule.source, ruleIndex)
  const actionButtons = ProdRulesView.addEntryToTable(prodRule, ruleID);
  actionButtons["edit"].addEventListener("click", function (e) {
    prepareToEdit(prodRule, ruleIndex);
  });

  actionButtons["delete"].addEventListener(
    "click",
    function (e) {
      deleteEntry(prodRule.source, ruleIndex);
    },
    false
  );
}

function prepareToEdit(prodRule: ProdRule, ruleIndex: number) {
  const ruleID = IDHandler.getRowID(prodRule.source, ruleIndex)
  ProdRulesView.setFormValues(prodRule, ruleID);
}

function deleteEntry(unproductiveSite: string, ruleIndex: number) {
  const ruleID = IDHandler.getRowID(unproductiveSite, ruleIndex);
  PersistanceHandler.deleteRule(unproductiveSite, ruleIndex);
  ProdRulesView.removeFromTable(ruleID);
}


const IDHandler = {
getRowID: (unproductiveSite: string, ruleIndex: number) => {
  const rowID = `${unproductiveSite}-${ruleIndex}`;
  return rowID;
},

deconstructID: (ruleID: string) => {
  const id_array = ruleID.split("-");
  return {
    badSite: id_array[0],
    index: +id_array[1],
  };
},

STANDARD_ID: (): string => {return "NEW"}
}



const ProdRulesController = {
  deleteEntry: deleteEntry,
  prepareToEdit: prepareToEdit,
  addToProdTable: addToProdTable,
  addRuleFromForm: addRuleFromForm,
  getStringsForEnums: getStringsForEnums
}

export default ProdRulesController