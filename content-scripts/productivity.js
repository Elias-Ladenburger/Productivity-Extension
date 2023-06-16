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
      Object.keys(ruleList).forEach(function(badSite) {
        if (siteToCheck.includes(badSite)) {
          siteHasRule = true;
        }
      });
    }
    return siteHasRule;
  });
}

function getRule(originURL) {
  return PersistanceHandler.getAllRules().then((ruleList) => {
    let applicableRules = [];
      Object.keys(ruleList).forEach((badSite) => {
        if (originURL.includes(ruleList[badSite])) {
          ruleList[badSite].forEach((myRule) => {
            applicableRules.push(myRule);
          })          
        }
        return applicableRules;
      });
    return myRule;
  });
}
