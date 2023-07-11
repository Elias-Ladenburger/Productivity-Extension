import { ProdRule } from "../domain/prodRules";

const ruleDBName = "productivityRules";
interface RuleList {
  [key: string]: ProdRule[]
}



async function getAllRules() {
  let ruleList = await chrome.storage.local.get(ruleDBName);
  let resultList: {[key: string]: any} = typeof ruleList === "undefined" ? {} : ruleList;
  if (ruleDBName in ruleList) {
    return ruleList[ruleDBName];
  }
  return resultList;
}

async function getRulesByURL(originURL: string) {
  const ruleList = await getAllRules();
  let applicableRules: ProdRule[] = []
  Object.keys(ruleList).forEach((badSite) => {
    if (originURL.includes(badSite)) {
      for(let rule of ruleList[badSite]){
        applicableRules.push(rule);
      }
    }
    return applicableRules;
  });
  return applicableRules;
}


async function addRule(myNewRule: ProdRule) {
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

async function updateRule(badSite: string, index: number, updatedRule: ProdRule) {
  // let ruleList = await getAllRules();
  await deleteRule(badSite, index);
  return addRule(updatedRule);
}

async function deleteRule(badSite:string, index: number) {
  let ruleList = await getAllRules();
  ruleList[badSite].splice(index, 1);
  if(ruleList[badSite].length == 0){
    delete ruleList[badSite]
  }
  setRuleList(ruleList);
}

function setRuleList(ruleList: RuleList) {
  chrome.storage.local.set({ productivityRules: ruleList });
}

const ProdRuleRepository = {
  getAllRules: getAllRules,
  getRulesByURL: getRulesByURL,
  addRule: addRule,
  deleteRule: deleteRule,
  updateRule: updateRule,
};


export default ProdRuleRepository