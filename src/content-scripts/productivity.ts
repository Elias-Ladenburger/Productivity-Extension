import { ActionFactory } from "../domain/action.ts"
import { ProdRule, ProdRuleFactory } from "../domain/prodRules.ts" 
import PersistanceHandler from "../persistance/persistance.ts"

applyRule();

async function applyRule() {
  let currentURL: string = window.location.href;
  console.log("checking for rules...")

  if (await checkIfRule(currentURL)) {
    const rulesForThisSite = await getRules(currentURL);
    console.log(rulesForThisSite)

    for(let rule of rulesForThisSite){
      console.log(rule)
      rule.applyRule()
    }
    rulesForThisSite.forEach((myRule) => {
      console.log(myRule);
      myRule.applyRule();
    });
  }
}

async function checkIfRule(siteToCheck: string) {
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

async function getRules(originURL: string) {
  const ruleList = await PersistanceHandler.getAllRules();
  let applicableRules: ProdRule[] = []
  Object.keys(ruleList).forEach((badSite) => {
    console.log(`checking rules: is ${badSite} in ${originURL} `)
    if (originURL.includes(badSite)) {
      console.log(ruleList[badSite])
      for(let rule of ruleList[badSite]){
        applicableRules.push(rule);
      }
    }
    return applicableRules;
  });
  console.log("rules for this site: ");
  console.log(applicableRules);
  return applicableRules;
}
