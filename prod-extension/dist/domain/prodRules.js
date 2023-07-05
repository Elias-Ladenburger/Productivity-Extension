import { Action, ActionType, ActionFactory } from "./action";
import { msToTime } from "../helpers/helpers";
var ProdRule = /** @class */ (function () {
    function ProdRule(badWebsite, action, condition, delay) {
        if (action === void 0) { action = { type: ActionType.FRAME, targetValue: "red" }; }
        if (condition === void 0) { condition = RuleCondition.ALWAYS; }
        if (delay === void 0) { delay = 0; }
        this.source = badWebsite;
        this.delay = delay;
        this.condition = condition;
        if (action instanceof Action) {
            this.action = action;
        }
        else {
            var tmpType = action.type;
            var tmpVal = action.targetValue;
            this.action = ActionFactory.createAction(tmpType, tmpVal);
        }
    }
    ProdRule.prototype.applyRule = function () {
        var _this = this;
        setTimeout(function () {
            _this.action.performAction();
        }, this.delay);
    };
    ProdRule.prototype.toString = function () {
        var delayStr = msToTime(this.delay);
        return "".concat(this.condition, " when I visit ").concat(this.source, " then ").concat(delayStr, " ").concat(this.action.toString());
    };
    return ProdRule;
}());
var ProdRuleFactory = {
    createRule: function (badWebsite, action, condition, delay) {
        if (condition === void 0) { condition = "ALWAYS"; }
        if (delay === void 0) { delay = 0; }
        try {
            condition = condition.toUpperCase();
            if (Object.keys(RuleCondition).includes(condition)) {
                var normalizedCond = RuleCondition[condition];
                return new ProdRule(badWebsite, action, normalizedCond, delay);
            }
        }
        catch (e) {
            throw e;
            console.log(e);
        }
    },
    createRuleFromJSON: function (entry) {
        var action = ActionFactory.createAction(entry.action.type, entry.action.targetvalue);
        return this.createRule(entry.source, action, entry.condition, entry.delay);
    },
};
var RuleCondition;
(function (RuleCondition) {
    RuleCondition["ALWAYS"] = "ALWAYS";
    RuleCondition["WORK"] = "WORK";
    RuleCondition["GOAL"] = "GOAL";
})(RuleCondition || (RuleCondition = {}));
export { ProdRule, RuleCondition, ProdRuleFactory };
//# sourceMappingURL=prodRules.js.map