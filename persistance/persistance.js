const ruleDBName = "productivityRules";

async function getAllRules() {
  let ruleList = await chrome.storage.local.get(ruleDBName);
  let resultList = typeof ruleList === "undefined" ? [] : ruleList;
  if(ruleDBName in ruleList){
    return ruleList[ruleDBName]
  }
  return resultList;
}

async function addRule(myNewRule) {
  const ruleList = await getAllRules();
  const targetWebsite = myNewRule.source;

  if (targetWebsite in ruleList) {
    ruleList[targetWebsite].push(myNewRule);
  } else {
    ruleList[targetWebsite] = [myNewRule];
  }
  return setRuleList(ruleList);
}

function deleteRule(ruleToRemove) {
  getAllRules().then((prodRules) => {
    let newruleList = prodRules.filter((myURL) => {
      return myURL["bad"] != ruleToRemove;
    });
    setRuleList(newruleList);
  });
}

function setRuleList(ruleList) {
  chrome.storage.local.set({ productivityRules: ruleList });
}

const PersistanceHandler = {
  getAllRules: getAllRules,
  addRule: addRule,
  deleteRule: deleteRule,
};
