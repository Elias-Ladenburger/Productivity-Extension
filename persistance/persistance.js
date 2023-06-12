const PersistanceHandler = {
  getAllRules() {
    return chrome.storage.local.get("productivityRules").then((allRules) => {
      if ("ruleList" in allRules) {
        return allRules["ruleList"];
      } else {
        return [];
      }
    });
  },

  addRule(entry) {
    getAllRules().then((prodRules) => {
      let ruleList =
        typeof prodRules == "undefined" ? [] : prodRules;
      ruleList.push({ bad: entry.source, entry: entry });
      setRuleList(ruleList);
    });
  },

  deleteRule(toRemove) {
    getAllRules().then((prodRules) => {
      let newruleList = prodRules.filter((myURL) => {
        return myURL["bad"] != toRemove;
      });
      setRuleList(newruleList);
    });
  },

  updateRule(updatedRule) {

  },

  setRuleList(ruleList) {
    chrome.storage.local.set({ ruleList: ruleList });
  }
}


