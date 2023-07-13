import { ActionFactory } from "../../domain/action";
import ProdRuleRepository from "../../domain/prodRuleRepo";
import prodRuleRepo from "../../domain/prodRuleRepo";
import { ProdRuleFactory } from "../../domain/prodRules";
 
global.chrome.storage.local.get = async () => {return Promise<{[key:string]: any}>}
global.chrome.storage.local.set = async (items: { [key: string]: any; }) => {}

describe("ProdRuleRepo", function () {
    
  test("should retrieve empty object when empty", async function () {
    const allRules = await ProdRuleRepository.getAllRules()
    expect(allRules).toEqual({});
  });

  test("should retrieve empty object when empty", async function () {
    const action = ActionFactory.createAction("FRAME", "red")
    const rule = ProdRuleFactory.createRule("bad", action, "WORK", 0)
    const ruleIdx = await ProdRuleRepository.addRule(rule)
    expect(ruleIdx).toEqual(0);
  });
});
