var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { ActionFactory } from "../domain/action";
import { ProdRuleFactory } from "../domain/prodRules";
import PersistanceHandler from "../persistance/persistance";
import ProdRulesView from "./prodRulesView";
prepareProdRules();
var addButton = document.getElementById("addRuleButton");
var editButton = document.getElementById("editRuleButton");
function prepareProdRules() {
    prepareForm();
    prepareProdRuleTable();
    prepareAddRuleButton();
}
function prepareForm() {
    var multipleChoiceFields = getMultipleChoiceFields();
    var selectElement;
    var myDict;
    for (var elemID in multipleChoiceFields) {
        selectElement = document.getElementById(elemID);
        myDict = multipleChoiceFields[elemID];
        for (var key in multipleChoiceFields[elemID]) {
            var optionElement = document.createElement("option");
            optionElement.value = key;
            optionElement.textContent = myDict[key];
            selectElement.appendChild(optionElement);
        }
    }
}
function getMultipleChoiceFields() {
    return {
        actionCondition: {
            ALWAYS: "always",
            WORK: "during my work times",
            GOALS: "while my goals are not reached (WIP)",
        },
        actiontype: {
            REDIRECT: "redirect me to",
            POPUP: "show a popup with the following text",
            FRAME: "frame the unproductive page in the following color",
            LOG: "log my visit only (WIP)",
        },
        enumactiondelay: {
            0: "immediately",
            30000: "30 seconds",
            300000: "5 minutes",
            1200000: "20 minutes",
        },
    };
}
function prepareProdRuleTable() {
    return __awaiter(this, void 0, void 0, function () {
        var ruleList;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, PersistanceHandler.getAllRules()];
                case 1:
                    ruleList = _a.sent();
                    if (!ruleList || ruleList.length == 0 || Object.keys(ruleList).length == 0) {
                        addDemoRule();
                    }
                    else {
                        Object.keys(ruleList).forEach(function (unproductiveSite) {
                            var ruleIndex = 0;
                            ruleList[unproductiveSite].forEach(function (rule) {
                                addToProdTable(rule, ruleIndex);
                                ruleIndex++;
                            });
                        });
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function addDemoRule() {
    var demoURL = "demoUnproductiveSite.com";
    var demoAction = ActionFactory.createAction("POPUP", "Do you really want to spend time on this site?");
    var demoRule = ProdRuleFactory.createRule(demoURL, demoAction);
    ProdRulesView.addEntryToTable(demoRule, "demo");
}
function prepareAddRuleButton() {
    var addButton = document.getElementById("addRuleButton");
    addButton.addEventListener("click", function (e) {
        addRuleFromForm();
    }, false);
}
function addRuleFromForm() {
    return __awaiter(this, void 0, void 0, function () {
        var formData, actionDelay, actionCondition, actionType, ruleID, newAction, newEntry, ruleIndex;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    formData = ProdRulesView.getFormData();
                    actionDelay = formData.delay;
                    actionCondition = formData.condition;
                    actionType = formData.actiontype;
                    ruleID = formData.ruleID;
                    newAction = ActionFactory.createAction(formData.actiontype, formData.targetVal);
                    newEntry = ProdRuleFactory.createRule(formData.actionsource, newAction, formData.condition, formData.delay);
                    if (!(formData.actionsource && actionType && formData.targetVal)) return [3 /*break*/, 2];
                    return [4 /*yield*/, PersistanceHandler.addRule(newEntry)];
                case 1:
                    ruleIndex = _a.sent();
                    addToProdTable(newEntry, ruleIndex);
                    _a.label = 2;
                case 2:
                    /*} else {
                      const id_elems = _deconstructID(ruleID);
                      PersistanceHandler.updateRule(
                        id_elems["badSite"],
                        id_elems["index"],
                        newEntry
                      );
                    }
                    */
                    ProdRulesView.clearForm();
                    return [2 /*return*/];
            }
        });
    });
}
function addToProdTable(prodRule, ruleIndex) {
    var ruleID = _getRowID(prodRule.source, ruleIndex);
    var actionButtons = ProdRulesView.addEntryToTable(prodRule, ruleID);
    actionButtons["edit"].addEventListener("click", function (e) {
        prepareToEdit(prodRule, ruleIndex);
    });
    actionButtons["delete"].addEventListener("click", function (e) {
        deleteEntry(prodRule.source, ruleIndex);
    }, false);
}
function prepareToEdit(prodRule, ruleIndex) {
    var ruleID = _getRowID(prodRule.source, ruleIndex);
    ProdRulesView.setFormValues(prodRule, ruleID);
}
function deleteEntry(unproductiveSite, ruleIndex) {
    var ruleID = _getRowID(unproductiveSite, ruleIndex);
    PersistanceHandler.deleteRule(unproductiveSite, ruleIndex);
    ProdRulesView.removeFromTable(ruleID);
}
function _getRowID(unproductiveSite, ruleIndex) {
    var rowID = "".concat(unproductiveSite, "-").concat(ruleIndex);
    return rowID;
}
function _deconstructID(ruleID) {
    var id_array = ruleID.split("-");
    return {
        badSite: id_array[0],
        index: id_array[1],
    };
}
//# sourceMappingURL=prodRulesController.js.map