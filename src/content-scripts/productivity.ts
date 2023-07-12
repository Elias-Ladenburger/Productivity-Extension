import { ActionFactory } from "../domain/action"
import { ProdRule, ProdRuleService } from "../domain/prodRules" 
import ProdRuleRepository from "../domain/prodRuleRepo"

applyRules();

export default async function applyRules() {
  let currentURL: string = window.location.href;
  console.log("checking for productivity rules...")

  const rulesForThisSite: ProdRule[] = await ProdRuleRepository.getRulesByURL(currentURL);

  rulesForThisSite.forEach((myRule: ProdRule) => {
    ProdRuleService.applyRule(myRule)
  });
}
