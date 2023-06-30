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
      IMMEDIATE: "immediately",
      HALFMINUTE: "30 seconds",
      MINUTES: "5 minutes",
      HALFHOUR: "20 minutes",
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

  let actionDelay = ActionDelay[formData.delay];
  let actionCondition = ActionCondition[formData.condition];
  let actionType = ActionType[formData.actiontype];

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
    prepareToEdit(prodRule.source, ruleIndex);
  });

  actionButtons["delete"].addEventListener(
    "click",
    function (e) {
      deleteEntry(prodRule.source, ruleIndex);
    },
    false
  );
}

function deleteEntry(unproductiveSite, ruleIndex) {
  PersistanceHandler.deleteRule(unproductiveSite, ruleIndex);
  ProdRulesView.removeFromTable(unproductiveSite, ruleIndex);
}
