import { TimeHandler, getStringsForEnums, msToTime } from "../helpers/helpers"
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

export const Validator = {
    NO_VALUE: "No value",
    OUT_OF_RANGE: "Out of range",
    INCORRECT_VALUE: "incorrect format",

    validateSelect: (selectField: HTMLSelectElement, lowerBound = 0, upperBound = 0) => {
        if (upperBound == 0) {
            upperBound = selectField.children.length - 1
        }

        if (selectField.selectedIndex >= lowerBound && selectField.selectedIndex <= upperBound) {
            return true
        }
        return false
    },

    validateInput: (stringInput: string, required = true) => {
        if (required && (typeof stringInput == "undefined" || stringInput == "")) {
            return new Error(Validator.NO_VALUE)
        }
        return true
    },

    validateTime: (timeString: string, minTime = "00:00", maxTime = "24:00") => {
        if (Validator.validateInput(timeString)) {
            if (!timeString.includes(":")) {
                return new Error(Validator.INCORRECT_VALUE)
            }

            let times = timeString.split(":")
            if (!(times.length = 2)) {
                return new Error(Validator.INCORRECT_VALUE)
            }

            if (TimeHandler.isEarlierByString(minTime, timeString) && TimeHandler.isEarlierByString(timeString, maxTime)) {
                return true
            }

        }
    }
}