import {getStringsForEnums, msToTime} from "../helpers/helpers"
import { ProdRule } from "../domain/prodRules"

export function _formatString(prodRule: ProdRule) {
    const enumStrings = getStringsForEnums()
    const conditionStr = enumStrings.rulecondition[prodRule.condition]
    const actionStr = enumStrings.actiontype[prodRule.action.type]
    const delayStr = enumStrings.actiontype[prodRule.delay] || msToTime(prodRule.delay).toLowerCase()

    const resultsStr = `<em class="text-lg">${prodRule.source}</em> <br><b>${conditionStr
        }</b> when I visit <b>${prodRule.source}</b> then <b>${delayStr} 
  ${actionStr} <em>${prodRule.action.targetValue}</em></b>`;

    return resultsStr
}