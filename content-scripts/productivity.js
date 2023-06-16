applyRule();

async function applyRule() {
  let currentURL = window.location.href;

  if (await checkIfRule(currentURL)) {
    const rulesForThisSite = await getRules(currentURL);
    rulesForThisSite.forEach((myRule) => {
      console.log(`executing rule: "${myRule}"`);
      console.log(myRule);
      myRule.applyRule();
    });
  }
}

async function checkIfRule(siteToCheck) {
  const ruleList = await PersistanceHandler.getAllRules();
  let siteHasRule = false;

  if (ruleList) {
    Object.keys(ruleList).forEach((badSite) => {
      if (siteToCheck.includes(badSite)) {
        siteHasRule = true;
      }
    });
    return siteHasRule;
  }
}

async function getRules(originURL) {
  const ruleList = await PersistanceHandler.getAllRules();
  let applicableRules = Object.keys(ruleList).forEach((badSite) => {
    let applicableRules = [];
    if (originURL.includes(ruleList[badSite])) {
      ruleList[badSite].forEach((myRule) => {
        applicableRules.push(myRule);
      });
    }
    return applicableRules;
  });
  let rulesForThisSite = typeof applicableRules == "undefined" ? [] : applicableRules;
  return rulesForThisSite;
}
