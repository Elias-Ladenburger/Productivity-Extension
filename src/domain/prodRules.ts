import { Action, ActionType, ActionFactory } from "./action"
import {msToTime } from "../helpers/helpers"

class ProdRule {
  source: string
  action: Action
  condition: RuleCondition
  delay: number
  constructor(
    badWebsite: string,
    action = { type: ActionType.FRAME, targetValue: "red" },
    condition = RuleCondition.ALWAYS,
    delay: number = 0
  ) {
    this.source = badWebsite;
    this.delay = delay;
    this.condition = condition;
    if (action instanceof Action) {
      this.action = action;
    } else {
      let tmpType = action.type;
      let tmpVal = action.targetValue;
      this.action = ActionFactory.createAction(tmpType, tmpVal);
    }
  }

  toString() {
    const delayStr = msToTime(this.delay);
    return `${this.condition} when I visit ${
      this.source
    } then ${delayStr} ${this.action.toString()}`;
  }
}


const ProdRuleFactory = {
  createRule(badWebsite: string, action: Action, condition: string = "ALWAYS", delay: number = 0): ProdRule | undefined {
    try {
      condition = condition.toUpperCase()
      if(Object.keys(RuleCondition).includes(condition)){
        const normalizedCond: RuleCondition = RuleCondition[condition as keyof typeof RuleCondition]
        return new ProdRule(badWebsite, action, normalizedCond, delay);
      }
    }
    catch(e) {
      throw e
      console.log(e)
    }
  },
  createRuleFromJSON(entry: any) {
    const action = ActionFactory.createAction(entry.action.type, entry.action.targetvalue)

    return this.createRule(entry.source, action, entry.condition, entry.delay)
  },
};

enum RuleCondition {
  ALWAYS = "ALWAYS",
  WORK = "WORK",
  GOAL = "GOAL",
}

const ProdRuleService = {
  applyRule: (rule: ProdRule) => {
    const action = ActionFactory.createAction(rule.action.type, rule.action.targetValue)

    // if is working time:

    setTimeout(() => {
      action.performAction();
    }, rule.delay);
  }
}

export {ProdRule, RuleCondition, ProdRuleFactory, ProdRuleService }