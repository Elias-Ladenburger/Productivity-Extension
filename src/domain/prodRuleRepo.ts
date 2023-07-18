import { ProdRule } from "./prodRules";
import PersistanceHandler from "../persistance/persistance"
import { ProdRuleFactory } from "./prodRules";

const ruleDBName = "productivityRules";
interface RuleList {
  [key: string]: ProdRule[]
}

const persHandler = new PersistanceHandler(ruleDBName)


const ProdRuleRepository = {
  
  getAllRules: async () => {
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
  },

  getRulesByURL: async (originURL: string) => {
    const ruleList = await ProdRuleRepository.getAllRules();
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
  },

  addRule: async (myNewRule: ProdRule) => {
    const ruleList = await ProdRuleRepository.getAllRules();
    const targetWebsite = myNewRule.source;

    if (targetWebsite in ruleList) {
      ruleList[targetWebsite].push(myNewRule);
    } else {
      ruleList[targetWebsite] = [myNewRule];
    }
    ProdRuleRepository.setRuleList(ruleList);
    return (ruleList[targetWebsite].length - 1)
  },

  updateRule: async (badSite: string, index: number, updatedRule: ProdRule) => {
    // let ruleList = await getAllRules();
    await ProdRuleRepository.deleteRule(badSite, index);
    return ProdRuleRepository.addRule(updatedRule);
  },

  deleteRule: async (badSite:string, index: number) => {
    let ruleList = await ProdRuleRepository.getAllRules();
    ruleList[badSite].splice(index, 1);
    if(ruleList[badSite].length == 0){
      delete ruleList[badSite]
    }
    ProdRuleRepository.setRuleList(ruleList);
  },

  setRuleList: (ruleList: RuleList) => {
    chrome.storage.local.set({ productivityRules: ruleList });
  }

}

export default ProdRuleRepository