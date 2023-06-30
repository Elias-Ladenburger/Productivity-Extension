const ruleDBName = "productivityRules";

async function getAllRules() {
  let ruleList = await chrome.storage.local.get(ruleDBName);
  let resultList = typeof ruleList === "undefined" ? [] : ruleList;
  if (ruleDBName in ruleList) {
    return ruleList[ruleDBName];
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
  setRuleList(ruleList);
  return (ruleList[targetWebsite].length - 1)
}

async function updateRule(badSite, index, updatedRule) {
  let ruleList = await getAllRules();

  await deleteRule(badSite, index);
  return addRule(updatedRule);
}

async function deleteRule(badSite, index) {
  let ruleList = await getAllRules();
  ruleList[badSite].splice(index, 1);
  if(ruleList[badSite].length == 0){
    delete ruleList[badSite]
  }
  setRuleList(ruleList);
}

function setRuleList(ruleList) {
  chrome.storage.local.set({ productivityRules: ruleList });
}

const PersistanceHandler = {
  getAllRules: getAllRules,
  addRule: addRule,
  deleteRule: deleteRule,
  updateRule: updateRule,
};
