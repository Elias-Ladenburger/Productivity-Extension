applyBlacklist();

function applyBlacklist() {
  let currentURL = window.location.href;

  isBlacklisted(currentURL).then((isSiteBlacklisted) => {
    if (isSiteBlacklisted) {
      getRule(currentURL).then((myRule) => {
        console.log(`executing rule: "${myRule}"`);
        console.log(myRule);
        myRule.action.performAction();
      });
    }
  });
}

function isBlacklisted(siteToCheck) {
  return getAllBlacklisted().then((blacklist) => {
    let isSiteBlacklisted = false;

    if (blacklist) {
      blacklist.forEach((blacklisted) => {
        if (siteToCheck.includes(blacklisted["bad"])) {
          isSiteBlacklisted = true;
        }
      });
    }
    return isSiteBlacklisted;
  });
}

function getRule(originURL) {
  return getAllBlacklisted().then((blacklist) => {
    let myRule = new ProdRule("undefined");
    blacklist.forEach((blacklisted) => {
      if (originURL.includes(blacklisted["bad"])) {
        let entry = blacklisted["entry"];
        myRule = getRuleFromJSON(entry);
        return myRule;
      }
    });
    return myRule;
  });
}
