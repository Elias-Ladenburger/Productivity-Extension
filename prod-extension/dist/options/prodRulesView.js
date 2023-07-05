var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { msToTime } from "../helpers/helpers";
var RuleForm = /** @class */ (function (_super) {
    __extends(RuleForm, _super);
    function RuleForm() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.actionsource = document.getElementById("actionsource");
        _this.actiontype = document.getElementById("actiontype");
        _this.targetVal = document.getElementById("targetvalue");
        _this.condition = document.getElementById("actioncondition");
        _this.delay = document.getElementById("actiondelay");
        _this.ruleID = document.getElementById("ruleID");
        return _this;
    }
    RuleForm.prototype.reset = function () {
        this.actionsource.value = "";
        this.actiontype.selectedIndex = 0;
        this.targetVal.value = "";
        this.condition.selectedIndex = 0;
        this.delay.selectedIndex = 0;
        this.ruleID.value = "NEW";
    };
    RuleForm.prototype.getValues = function () {
        return {
            "actionsource": this.actionsource.value,
            "actiontype": this.actiontype.value,
            "targetVal": this.targetVal.value,
            "condition": this.condition.value,
            "delay": parseInt(this.delay.value),
            "ruleID": this.ruleID.value
        };
    };
    return RuleForm;
}(HTMLFormControlsCollection));
var ProdRulesView = {
    addEntryToTable: function (prodRule, ruleID) {
        var tableID = "productionRuleTable";
        var settingsTable = document.getElementById(tableID);
        var newRow = settingsTable.insertRow(-1);
        var ruleCell = newRow.insertCell(0);
        var actionsCell = newRow.insertCell(1);
        newRow.id = ruleID;
        ruleCell.innerHTML = _formatString(prodRule);
        ruleCell.setAttribute("class", "px-2");
        actionsCell.innerHTML = "<button id=\"".concat(tableID, "_edit_").concat(ruleID, "\" class=\"rounded-lg border-white bg-navy text-white hover:bg-blueRoyal px-2 mx-1 text-center\">edit</button>\n    <button id=\"").concat(tableID, "_delete_").concat(ruleID, "\" class=\"rounded-lg border-white bg-navy text-white hover:bg-blueRoyal px-2 mx-1 text-center\">delete</button>");
        var deleteButton = document.getElementById("".concat(tableID, "_delete_").concat(ruleID));
        var editButton = document.getElementById("".concat(tableID, "_edit_").concat(ruleID));
        return { edit: editButton, delete: deleteButton, entry: ruleCell };
    },
    removeFromTable: function (ruleID) {
        var toDelete = document.getElementById(ruleID);
        toDelete.remove();
        console.log("Removing rule for ".concat(ruleID, "!"));
    },
    getFormData: function () {
        var myForm = new RuleForm();
        return myForm.getValues();
    },
    clearForm: function () {
        var form = new RuleForm();
        form.reset();
    },
    setFormValues: function (formValues, ruleID) {
        var myForm = new RuleForm();
        myForm.actionsource.value = formValues.source;
    }
};
function _formatString(prodRule) {
    var conditionStr = msToTime(prodRule.delay);
    var delayStr = msToTime(prodRule.delay);
    var resultsStr = "<em class=\"text-lg\">".concat(prodRule.source, "</em> <br><b>").concat(conditionStr, "</b> when I visit <b>").concat(prodRule.source, "</b> then <b>").concat(delayStr, " ").concat(prodRule.action.toString(), "</b>");
    return resultsStr;
}
export default ProdRulesView;
//# sourceMappingURL=prodRulesView.js.map