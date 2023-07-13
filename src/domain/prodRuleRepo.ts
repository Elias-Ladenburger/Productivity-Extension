import { ProdRule } from "./prodRules";
import PersistanceHandler from "../persistance/persistance"
import { ProdRuleFactory } from "./prodRules";

const ruleDBName = "productivityRules";
interface RuleList {
  [key: string]: ProdRule[]
}

const persHandler = new PersistanceHandler(ruleDBName)

async function getAllRules() {
  const storedRules = await persHandler.getAll()
  let ruleList: RuleList = {}
  Object.keys(storedRules).forEach((badSite) => {
    let rulesForThisSite = storedRules[badSite]
    ruleList[badSite] = []
    rulesForThisSite.forEach((ruleData: any) => {
      let newRule = ProdRuleFactory.createRule(badSite, ruleData.action, ruleData.condition, ruleData.delay)
      ruleList[badSite].push(newRule)
    })
  })
  return ruleList
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