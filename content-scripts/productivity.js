applyRule();

function applyRule() {
  let currentURL = window.location.href;

  checkIfRule(currentURL).then((siteHasRule) => {
    if (siteHasRule) {
      getRule(currentURL).then((myRule) => {
        console.log(`executing rule: "${myRule}"`);
        console.log(myRule);
        myRule.applyRule();
      });
    }
  });
}

function checkIfRule(siteToCheck) {
  return PersistanceHandler.getAllRules().then((ruleList) => {
    let siteHasRule = false;

    if (ruleList) {
      ruleList.forEach((ruleListed) => {
        if (siteToCheck.includes(ruleListed["bad"])) {
          siteHasRule = true;
        }
      });
    }
    return siteHasRule;
  });
}

function getRule(originURL) {
  return PersistanceHandler.getAllRules().then((ruleList) => {
    let myRule = new ProdRule("undefined");
    ruleList.forEach((ruleListed) => {
      if (originURL.includes(ruleListed["bad"])) {
        let entry = ruleListed["entry"];
        myRule = getRuleFromJSON(entry);
        return myRule;
      }
    });
    return myRule;
  });
}
