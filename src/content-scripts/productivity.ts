import { ActionFactory } from "../domain/action"
import { ProdRule, ProdRuleService, RuleCondition } from "../domain/prodRules"
import ProdRuleRepository from "../domain/prodRuleRepo"
import WorkTimeRepository from "../domain/workTimeRepo";
import WorkTimeService from "../domain/workHourService";

applyRules();

export default async function applyRules() {
  let currentURL: string = window.location.href;

  console.log("checking if is working time...")
  const is_work_time = await WorkTimeService.isWorkingTime()
  console.log(`Is work time: ${is_work_time}`)

  console.log("checking for productivity rules...")
  const rulesForThisSite: ProdRule[] = await ProdRuleRepository.getRulesByURL(currentURL);

  rulesForThisSite.forEach((myRule: ProdRule) => {
    if ((myRule.condition == RuleCondition.WORK && is_work_time) || myRule.condition != RuleCondition.WORK) {
      ProdRuleService.applyRule(myRule)
    }
  });
}
