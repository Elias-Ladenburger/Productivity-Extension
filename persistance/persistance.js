const ruleDBName = "productivityRules";

function getAllRules() {
  return chrome.storage.local.get(ruleDBName).then((allRules) => {
    if (!allRules | (typeof allRules == "undefined") | (allRules == {})) {
      return [];
    } else {
      return allRules[ruleDBName];
    }
  });
}

function addRule(myNewRule) {
  return getAllRules().then((prodRules) => {
    let ruleList = typeof prodRules === "undefined" ? [] : prodRules;
    const targetWebsite = myNewRule.source;
    if (targetWebsite in ruleList) {
      ruleList[targetWebsite].push(myNewRule);
    } else {
      ruleList[targetWebsite] = [myNewRule];
    }
    return setRuleList(ruleList);
  });
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
  let allRules = {};
  allRules[ruleDBName] = ruleList;
  return chrome.storage.local.set(allRules);
}

const PersistanceHandler = {
  getAllRules: getAllRules,
  addRule: addRule,
  deleteRule: deleteRule,
};
