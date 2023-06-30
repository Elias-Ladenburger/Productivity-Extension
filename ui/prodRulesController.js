prepareAll();

function prepareAll() {
  prepareForm();
  prepareProdRuleTable();
  prepareAddRuleButton();
}

function prepareForm() {
  const multipleChoiceFields = getMultipleChoiceFields();
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

function getMultipleChoiceFields() {
  const myEnum = {
    actioncondition: {
      ALWAYS: "always",
      WORK: "during my work times",
      GOALS: "while my goals are not reached (WIP)",
    },

    actiontype: {
      REDIRECT: "redirect me to",
      POPUP: "show a popup with the following text",
      FRAME: "frame the unproductive page in the following color",
      LOG: "log my visit only (WIP)",
    },

    actiondelay: {
      0: "immediately",
      30000: "30 seconds",
      300000: "5 minutes",
      1200000: "20 minutes",
    },
  };
  return myEnum;
}

async function prepareProdRuleTable() {
  const ruleList = await PersistanceHandler.getAllRules();
  if (!ruleList || ruleList.length == 0 || Object.keys(ruleList).length == 0) {
    addDemoRule();
  } else {
    Object.keys(ruleList).forEach((unproductiveSite) => {
      let ruleIndex = 0;
      ruleList[unproductiveSite].forEach((rule) => {
        addToProdTable(rule, ruleIndex);
        ruleIndex++;
      });
    });
  }
}

function addDemoRule() {
  const demoURL = "demoUnproductiveSite.com";
  let demoRule = new ProdRule(demoURL, new RedirectAction("productiveURL.com"));
  ProdRulesView.addEntryToTable(demoRule, 0);
}

function prepareAddRuleButton() {
  let addButton = document.getElementById("addRuleButton");
  addButton.addEventListener(
    "click",
    function (e) {
      addRuleFromForm();
    },
    false
  );
}

function addRuleFromForm() {
  const formData = ProdRulesView.getFormData();

  let actionDelay = formData.delay;
  let actionCondition = formData.condition;
  let actionType = formData.actiontype;

  let newEntry = new ProdRule(
    formData.actionsource,
    ActionFactory.createAction(actionType, formData.targetVal),
    actionCondition,
    actionDelay
  );

  if (formData.actionsource && actionType && formData.targetVal) {
    const ruleIndex = PersistanceHandler.addRule(newEntry);
    addToProdTable(newEntry, ruleIndex);
    ProdRulesView.clearForm();
  }
}

function addToProdTable(prodRule, ruleIndex) {
  const actionButtons = ProdRulesView.addEntryToTable(prodRule, ruleIndex);
  actionButtons["edit"].addEventListener("click", function (e) {
    prepareToEdit(prodRule);
  });

  actionButtons["delete"].addEventListener(
    "click",
    function (e) {
      deleteEntry(prodRule.source, ruleIndex);
    },
    false
  );
}

function prepareToEdit(prodRule) {
  let myFields = ProdRulesView.getFormFields();
  const choiceFields = getMultipleChoiceFields();
  console.log(prodRule.action.type);
  console.log(prodRule.delay);
  console.log(prodRule.condition);

  myFields.actionsource.value = prodRule.source;
  myFields.targetVal.value = prodRule.targetVal;
  myFields.actiontype.value = prodRule.action.type;
  myFields.condition.value = prodRule.condition;
  myFields.delay.value = prodRule.delay || msToTime(prodRule.delay);
}

function deleteEntry(unproductiveSite, ruleIndex) {
  PersistanceHandler.deleteRule(unproductiveSite, ruleIndex);
  ProdRulesView.removeFromTable(unproductiveSite, ruleIndex);
}

function msToTime(miliseconds) {
  if(miliseconds == 0) return "immediately"
  let seconds = (miliseconds / 1000).toFixed(1);
  let minutes = (miliseconds / (1000 * 60)).toFixed(1);
  let hours = (miliseconds / (1000 * 60 * 60)).toFixed(1);
  let days = (miliseconds / (1000 * 60 * 60 * 24)).toFixed(1);
  if (seconds < 60) return "after " + seconds + " Sec";
  else if (minutes < 60) return "after " + minutes + " Min";
  else if (hours < 24) return "after " + hours + " Hrs";
  else return "after " + days + " Days";
}
