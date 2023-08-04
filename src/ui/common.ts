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
    NO_VALUE: "Incorrect or missing value",
    OUT_OF_RANGE: "Out of range",
    INCORRECT_VALUE: "Incorrect format",

    validateSelect: (selectField: HTMLSelectElement, lowerBound = 0, upperBound = 0) => {
        if (upperBound == 0) {
            upperBound = selectField.children.length - 1
        }

        if (selectField.selectedIndex >= lowerBound && selectField.selectedIndex <= upperBound) {
            return true
        }
        throw new Error(Validator.OUT_OF_RANGE)
    },

    validateInput: (stringInput: string, required = true) => {
        if (required && (typeof stringInput == "undefined" || stringInput == "")) {
            throw new Error(Validator.NO_VALUE)
        }
        return true
    },

    validateTime: (timeString: string, minTime = "00:00", maxTime = "24:00") => {
        if (Validator.validateInput(timeString)) {
            const timeRegex = new RegExp("^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$")
            const isFormatValid = timeRegex.test(timeString.trim())
            if (isFormatValid) {
                if (TimeHandler.isEarlierByString(minTime, timeString) && TimeHandler.isEarlierByString(timeString, maxTime)) {
                    return true
                }
                else {
                    throw new Error("Start time must be before end time")
                }
            }

            else {
                throw new Error("Time is not in correct format")
            }
        }
        return Validator.validateInput(timeString)
    }
}