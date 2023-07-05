"use strict";
var MyLibrary;
(self["webpackChunkMyLibrary"] = self["webpackChunkMyLibrary"] || []).push([["options"],{

/***/ "./src/domain/action.ts":
/*!******************************!*\
  !*** ./src/domain/action.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Action: () => (/* binding */ Action),
/* harmony export */   ActionFactory: () => (/* binding */ ActionFactory),
/* harmony export */   ActionType: () => (/* binding */ ActionType),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var __extends = (undefined && undefined.__extends) || (function () {
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
var Action = /** @class */ (function () {
    function Action(targetValue) {
        if (targetValue === void 0) { targetValue = ""; }
        this.type = ActionType.LOG;
        this.targetValue = targetValue;
    }
    Action.prototype.performAction = function () {
        return;
    };
    Action.prototype.toString = function () {
        return "apply a rule!";
    };
    return Action;
}());
var FrameAction = /** @class */ (function (_super) {
    __extends(FrameAction, _super);
    function FrameAction(frameColor) {
        var _this = _super.call(this, frameColor) || this;
        _this.type = ActionType.FRAME;
        return _this;
    }
    FrameAction.prototype.performAction = function () {
        alert("This site is unproductive! Framing this site in ".concat(this.targetValue, "."));
        document.body.style.border = "10px solid ".concat(this.targetValue);
    };
    FrameAction.prototype.toString = function () {
        return "frame the site in ".concat(this.targetValue);
    };
    return FrameAction;
}(Action));
var PopupAction = /** @class */ (function (_super) {
    __extends(PopupAction, _super);
    function PopupAction(popupText) {
        var _this = _super.call(this, popupText) || this;
        _this.type = ActionType.POPUP;
        return _this;
    }
    PopupAction.prototype.performAction = function () {
        if (!this.targetValue) {
            this.targetValue = "Do you truly want to spend more time on this site?";
        }
        alert(this.targetValue);
    };
    PopupAction.prototype.toString = function () {
        return "show a popup that says: \n '".concat(this.targetValue, "'");
    };
    return PopupAction;
}(Action));
var RedirectAction = /** @class */ (function (_super) {
    __extends(RedirectAction, _super);
    function RedirectAction(redirectTo) {
        var _this = _super.call(this, redirectTo) || this;
        _this.type = ActionType.REDIRECT;
        return _this;
    }
    RedirectAction.prototype.performAction = function () {
        alert("This site is unproductive! Redirecting to ".concat(this.targetValue, "."));
        var targetValue = this.targetValue.startsWith("http")
            ? this.targetValue
            : "https://".concat(this.targetValue);
        window.location.href = targetValue;
    };
    RedirectAction.prototype.toString = function () {
        return "redirect to ".concat(this.targetValue);
    };
    return RedirectAction;
}(Action));
var ActionType;
(function (ActionType) {
    ActionType["REDIRECT"] = "REDIRECT";
    ActionType["POPUP"] = "POPUP";
    ActionType["FRAME"] = "FRAME";
    ActionType["LOG"] = "LOG";
})(ActionType || (ActionType = {}));
;
var ActionFactory = {
    createAction: function (type, targetValue) {
        switch (type.toUpperCase()) {
            case ActionType.FRAME:
                return new FrameAction(targetValue);
            case ActionType.REDIRECT:
                return new RedirectAction(targetValue);
            case ActionType.POPUP:
                return new PopupAction(targetValue);
            default:
                throw "Unknown action type! Must be defined in the ActionType Enum.";
        }
    },
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Action);


/***/ }),

/***/ "./src/domain/prodRules.ts":
/*!*********************************!*\
  !*** ./src/domain/prodRules.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProdRule: () => (/* binding */ ProdRule),
/* harmony export */   ProdRuleFactory: () => (/* binding */ ProdRuleFactory),
/* harmony export */   RuleCondition: () => (/* binding */ RuleCondition)
/* harmony export */ });
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action */ "./src/domain/action.ts");
/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/helpers */ "./src/helpers/helpers.ts");


var ProdRule = /** @class */ (function () {
    function ProdRule(badWebsite, action, condition, delay) {
        if (action === void 0) { action = { type: _action__WEBPACK_IMPORTED_MODULE_0__.ActionType.FRAME, targetValue: "red" }; }
        if (condition === void 0) { condition = RuleCondition.ALWAYS; }
        if (delay === void 0) { delay = 0; }
        this.source = badWebsite;
        this.delay = delay;
        this.condition = condition;
        if (action instanceof _action__WEBPACK_IMPORTED_MODULE_0__.Action) {
            this.action = action;
        }
        else {
            var tmpType = action.type;
            var tmpVal = action.targetValue;
            this.action = _action__WEBPACK_IMPORTED_MODULE_0__.ActionFactory.createAction(tmpType, tmpVal);
        }
    }
    ProdRule.prototype.applyRule = function () {
        var _this = this;
        setTimeout(function () {
            _this.action.performAction();
        }, this.delay);
    };
    ProdRule.prototype.toString = function () {
        var delayStr = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_1__.msToTime)(this.delay);
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
        var action = _action__WEBPACK_IMPORTED_MODULE_0__.ActionFactory.createAction(entry.action.type, entry.action.targetvalue);
        return this.createRule(entry.source, action, entry.condition, entry.delay);
    },
};
var RuleCondition;
(function (RuleCondition) {
    RuleCondition["ALWAYS"] = "ALWAYS";
    RuleCondition["WORK"] = "WORK";
    RuleCondition["GOAL"] = "GOAL";
})(RuleCondition || (RuleCondition = {}));



/***/ }),

/***/ "./src/helpers/helpers.ts":
/*!********************************!*\
  !*** ./src/helpers/helpers.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   msToTime: () => (/* binding */ msToTime)
/* harmony export */ });
function msToTime(miliseconds) {
    if (miliseconds == 0)
        return "immediately";
    var seconds = (miliseconds / 1000);
    var minutes = (miliseconds / (1000 * 60));
    var hours = (miliseconds / (1000 * 60 * 60));
    var days = (miliseconds / (1000 * 60 * 60 * 24));
    if (seconds < 60)
        return "after " + seconds + " Sec";
    else if (minutes < 60)
        return "after " + minutes + " Min";
    else if (hours < 24)
        return "after " + hours + " Hrs";
    else
        return "after " + days + " Days";
}


/***/ }),

/***/ "./src/options/prodRulesController.ts":
/*!********************************************!*\
  !*** ./src/options/prodRulesController.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _domain_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domain/action */ "./src/domain/action.ts");
/* harmony import */ var _domain_prodRules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../domain/prodRules */ "./src/domain/prodRules.ts");
/* harmony import */ var _persistance_persistance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../persistance/persistance */ "./src/persistance/persistance.ts");
/* harmony import */ var _prodRulesView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prodRulesView */ "./src/options/prodRulesView.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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




prepareProdRules();
var addButton = document.getElementById("addRuleButton");
var editButton = document.getElementById("editRuleButton");
function prepareProdRules() {
    console.log("preparing form!");
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
        rulecondition: {
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
        actiondelay: {
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
                case 0: return [4 /*yield*/, _persistance_persistance__WEBPACK_IMPORTED_MODULE_2__["default"].getAllRules()];
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
    var demoAction = _domain_action__WEBPACK_IMPORTED_MODULE_0__.ActionFactory.createAction("POPUP", "Do you really want to spend time on this site?");
    var demoRule = _domain_prodRules__WEBPACK_IMPORTED_MODULE_1__.ProdRuleFactory.createRule(demoURL, demoAction);
    _prodRulesView__WEBPACK_IMPORTED_MODULE_3__["default"].addEntryToTable(demoRule, "demo");
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
                    formData = _prodRulesView__WEBPACK_IMPORTED_MODULE_3__["default"].getFormData();
                    actionDelay = formData.delay;
                    actionCondition = formData.condition;
                    actionType = formData.actiontype;
                    ruleID = formData.ruleID;
                    newAction = _domain_action__WEBPACK_IMPORTED_MODULE_0__.ActionFactory.createAction(formData.actiontype, formData.targetVal);
                    newEntry = _domain_prodRules__WEBPACK_IMPORTED_MODULE_1__.ProdRuleFactory.createRule(formData.actionsource, newAction, formData.condition, formData.delay);
                    if (!(formData.actionsource && actionType && formData.targetVal)) return [3 /*break*/, 2];
                    return [4 /*yield*/, _persistance_persistance__WEBPACK_IMPORTED_MODULE_2__["default"].addRule(newEntry)];
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
                    _prodRulesView__WEBPACK_IMPORTED_MODULE_3__["default"].clearForm();
                    return [2 /*return*/];
            }
        });
    });
}
function addToProdTable(prodRule, ruleIndex) {
    var ruleID = _getRowID(prodRule.source, ruleIndex);
    var actionButtons = _prodRulesView__WEBPACK_IMPORTED_MODULE_3__["default"].addEntryToTable(prodRule, ruleID);
    actionButtons["edit"].addEventListener("click", function (e) {
        prepareToEdit(prodRule, ruleIndex);
    });
    actionButtons["delete"].addEventListener("click", function (e) {
        deleteEntry(prodRule.source, ruleIndex);
    }, false);
}
function prepareToEdit(prodRule, ruleIndex) {
    var ruleID = _getRowID(prodRule.source, ruleIndex);
    _prodRulesView__WEBPACK_IMPORTED_MODULE_3__["default"].setFormValues(prodRule, ruleID);
}
function deleteEntry(unproductiveSite, ruleIndex) {
    var ruleID = _getRowID(unproductiveSite, ruleIndex);
    _persistance_persistance__WEBPACK_IMPORTED_MODULE_2__["default"].deleteRule(unproductiveSite, ruleIndex);
    _prodRulesView__WEBPACK_IMPORTED_MODULE_3__["default"].removeFromTable(ruleID);
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


/***/ }),

/***/ "./src/options/prodRulesView.ts":
/*!**************************************!*\
  !*** ./src/options/prodRulesView.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/helpers */ "./src/helpers/helpers.ts");
var __extends = (undefined && undefined.__extends) || (function () {
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
    var conditionStr = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.msToTime)(prodRule.delay);
    var delayStr = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.msToTime)(prodRule.delay);
    var resultsStr = "<em class=\"text-lg\">".concat(prodRule.source, "</em> <br><b>").concat(conditionStr, "</b> when I visit <b>").concat(prodRule.source, "</b> then <b>").concat(delayStr, " ").concat(prodRule.action.toString(), "</b>");
    return resultsStr;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProdRulesView);


/***/ }),

/***/ "./src/persistance/persistance.ts":
/*!****************************************!*\
  !*** ./src/persistance/persistance.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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
var ruleDBName = "productivityRules";
function getAllRules() {
    return __awaiter(this, void 0, void 0, function () {
        var ruleList, resultList;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, chrome.storage.local.get(ruleDBName)];
                case 1:
                    ruleList = _a.sent();
                    resultList = typeof ruleList === "undefined" ? {} : ruleList;
                    if (ruleDBName in ruleList) {
                        return [2 /*return*/, ruleList[ruleDBName]];
                    }
                    return [2 /*return*/, resultList];
            }
        });
    });
}
function addRule(myNewRule) {
    return __awaiter(this, void 0, void 0, function () {
        var ruleList, targetWebsite;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getAllRules()];
                case 1:
                    ruleList = _a.sent();
                    targetWebsite = myNewRule.source;
                    if (targetWebsite in ruleList) {
                        ruleList[targetWebsite].push(myNewRule);
                    }
                    else {
                        ruleList[targetWebsite] = [myNewRule];
                    }
                    setRuleList(ruleList);
                    return [2 /*return*/, (ruleList[targetWebsite].length - 1)];
            }
        });
    });
}
function updateRule(badSite, index, updatedRule) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: 
                // let ruleList = await getAllRules();
                return [4 /*yield*/, deleteRule(badSite, index)];
                case 1:
                    // let ruleList = await getAllRules();
                    _a.sent();
                    return [2 /*return*/, addRule(updatedRule)];
            }
        });
    });
}
function deleteRule(badSite, index) {
    return __awaiter(this, void 0, void 0, function () {
        var ruleList;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getAllRules()];
                case 1:
                    ruleList = _a.sent();
                    ruleList[badSite].splice(index, 1);
                    if (ruleList[badSite].length == 0) {
                        delete ruleList[badSite];
                    }
                    setRuleList(ruleList);
                    return [2 /*return*/];
            }
        });
    });
}
function setRuleList(ruleList) {
    chrome.storage.local.set({ productivityRules: ruleList });
}
var PersistanceHandler = {
    getAllRules: getAllRules,
    addRule: addRule,
    deleteRule: deleteRule,
    updateRule: updateRule,
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PersistanceHandler);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/options/prodRulesController.ts"), __webpack_exec__("./src/options/prodRulesView.ts"));
/******/ (MyLibrary = typeof MyLibrary === "undefined" ? {} : MyLibrary).options = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TyxPQUFPLENBQUMsV0FBVyxDQUFDLEVBQUM7Ozs7Q0FDN0I7QUFFRCxTQUFlLFVBQVUsQ0FBQyxPQUFjLEVBQUUsS0FBYTs7Ozs7d0JBQ3RDLHFCQUFNLFdBQVcsRUFBRTs7b0JBQTlCLFFBQVEsR0FBRyxTQUFtQjtvQkFDbEMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ25DLElBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUM7d0JBQy9CLE9BQU8sUUFBUSxDQUFDLE9BQU8sQ0FBQztxQkFDekI7b0JBQ0QsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDOzs7OztDQUN2QjtBQUVELFNBQVMsV0FBVyxDQUFDLFFBQWtCO0lBQ3JDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7QUFDNUQsQ0FBQztBQUVELElBQU0sa0JBQWtCLEdBQUc7SUFDekIsV0FBVyxFQUFFLFdBQVc7SUFDeEIsT0FBTyxFQUFFLE9BQU87SUFDaEIsVUFBVSxFQUFFLFVBQVU7SUFDdEIsVUFBVSxFQUFFLFVBQVU7Q0FDdkIsQ0FBQztBQUdGLGlFQUFlLGtCQUFrQiIsInNvdXJjZXMiOlsid2VicGFjazovL015TGlicmFyeS8uL3NyYy9kb21haW4vYWN0aW9uLnRzIiwid2VicGFjazovL015TGlicmFyeS8uL3NyYy9kb21haW4vcHJvZFJ1bGVzLnRzIiwid2VicGFjazovL015TGlicmFyeS8uL3NyYy9oZWxwZXJzL2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vTXlMaWJyYXJ5Ly4vc3JjL29wdGlvbnMvcHJvZFJ1bGVzQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9NeUxpYnJhcnkvLi9zcmMvb3B0aW9ucy9wcm9kUnVsZXNWaWV3LnRzIiwid2VicGFjazovL015TGlicmFyeS8uL3NyYy9wZXJzaXN0YW5jZS9wZXJzaXN0YW5jZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBY3Rpb24ge1xyXG4gIHRhcmdldFZhbHVlOiBzdHJpbmc7XHJcbiAgdHlwZTogQWN0aW9uVHlwZSA9IEFjdGlvblR5cGUuTE9HXHJcbiAgY29uc3RydWN0b3IodGFyZ2V0VmFsdWU6IHN0cmluZyA9IFwiXCIpIHtcclxuICAgIHRoaXMudGFyZ2V0VmFsdWUgPSB0YXJnZXRWYWx1ZTtcclxuICB9XHJcblxyXG4gIHBlcmZvcm1BY3Rpb24oKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIHRvU3RyaW5nKCkge1xyXG4gICAgcmV0dXJuIGBhcHBseSBhIHJ1bGUhYDtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIEZyYW1lQWN0aW9uIGV4dGVuZHMgQWN0aW9uIHtcclxuICAgdHlwZTogQWN0aW9uVHlwZTtcclxuICBjb25zdHJ1Y3RvcihmcmFtZUNvbG9yOiBzdHJpbmcpIHtcclxuICAgIHN1cGVyKGZyYW1lQ29sb3IpO1xyXG4gICAgdGhpcy50eXBlID0gQWN0aW9uVHlwZS5GUkFNRTtcclxuICB9XHJcblxyXG4gICBwZXJmb3JtQWN0aW9uKCkge1xyXG4gICAgYWxlcnQoXHJcbiAgICAgIGBUaGlzIHNpdGUgaXMgdW5wcm9kdWN0aXZlISBGcmFtaW5nIHRoaXMgc2l0ZSBpbiAke3RoaXMudGFyZ2V0VmFsdWV9LmBcclxuICAgICk7XHJcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJvcmRlciA9IGAxMHB4IHNvbGlkICR7dGhpcy50YXJnZXRWYWx1ZX1gO1xyXG4gIH1cclxuXHJcbiAgIHRvU3RyaW5nKCkge1xyXG4gICAgcmV0dXJuIGBmcmFtZSB0aGUgc2l0ZSBpbiAke3RoaXMudGFyZ2V0VmFsdWV9YDtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIFBvcHVwQWN0aW9uIGV4dGVuZHMgQWN0aW9uIHtcclxuICAgdHlwZTogQWN0aW9uVHlwZTtcclxuICBjb25zdHJ1Y3Rvcihwb3B1cFRleHQ6IHN0cmluZykge1xyXG4gICAgc3VwZXIocG9wdXBUZXh0KTtcclxuICAgIHRoaXMudHlwZSA9IEFjdGlvblR5cGUuUE9QVVA7XHJcbiAgfVxyXG4gICBwZXJmb3JtQWN0aW9uKCkge1xyXG4gICAgaWYgKCF0aGlzLnRhcmdldFZhbHVlKSB7XHJcbiAgICAgIHRoaXMudGFyZ2V0VmFsdWUgPSBcIkRvIHlvdSB0cnVseSB3YW50IHRvIHNwZW5kIG1vcmUgdGltZSBvbiB0aGlzIHNpdGU/XCI7XHJcbiAgICB9XHJcbiAgICBhbGVydCh0aGlzLnRhcmdldFZhbHVlKTtcclxuICB9XHJcbiAgIHRvU3RyaW5nKCkge1xyXG4gICAgcmV0dXJuIGBzaG93IGEgcG9wdXAgdGhhdCBzYXlzOiBcXG4gJyR7dGhpcy50YXJnZXRWYWx1ZX0nYDtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIFJlZGlyZWN0QWN0aW9uIGV4dGVuZHMgQWN0aW9uIHtcclxuICAgdHlwZTogQWN0aW9uVHlwZTtcclxuICBjb25zdHJ1Y3RvcihyZWRpcmVjdFRvOiBzdHJpbmcpIHtcclxuICAgIHN1cGVyKHJlZGlyZWN0VG8pO1xyXG4gICAgdGhpcy50eXBlID0gQWN0aW9uVHlwZS5SRURJUkVDVDtcclxuICB9XHJcbiAgIHBlcmZvcm1BY3Rpb24oKSB7XHJcbiAgICBhbGVydChgVGhpcyBzaXRlIGlzIHVucHJvZHVjdGl2ZSEgUmVkaXJlY3RpbmcgdG8gJHt0aGlzLnRhcmdldFZhbHVlfS5gKTtcclxuICAgIGxldCB0YXJnZXRWYWx1ZSA9IHRoaXMudGFyZ2V0VmFsdWUuc3RhcnRzV2l0aChcImh0dHBcIilcclxuICAgICAgPyB0aGlzLnRhcmdldFZhbHVlXHJcbiAgICAgIDogYGh0dHBzOi8vJHt0aGlzLnRhcmdldFZhbHVlfWA7XHJcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHRhcmdldFZhbHVlO1xyXG4gIH1cclxuICAgdG9TdHJpbmcoKSB7XHJcbiAgICByZXR1cm4gYHJlZGlyZWN0IHRvICR7dGhpcy50YXJnZXRWYWx1ZX1gO1xyXG4gIH1cclxufVxyXG5cclxuZW51bSBBY3Rpb25UeXBlIHtcclxuICBSRURJUkVDVCA9IFwiUkVESVJFQ1RcIixcclxuICBQT1BVUCA9IFwiUE9QVVBcIixcclxuICBGUkFNRSA9IFwiRlJBTUVcIixcclxuICBMT0cgPSBcIkxPR1wiLFxyXG59O1xyXG5cclxuY29uc3QgQWN0aW9uRmFjdG9yeSA9IHtcclxuICBjcmVhdGVBY3Rpb24odHlwZTogc3RyaW5nLCB0YXJnZXRWYWx1ZTogc3RyaW5nKTogQWN0aW9uIHtcclxuICAgIHN3aXRjaCAodHlwZS50b1VwcGVyQ2FzZSgpKSB7XHJcbiAgICAgIGNhc2UgQWN0aW9uVHlwZS5GUkFNRTpcclxuICAgICAgICByZXR1cm4gbmV3IEZyYW1lQWN0aW9uKHRhcmdldFZhbHVlKTtcclxuICAgICAgY2FzZSBBY3Rpb25UeXBlLlJFRElSRUNUOlxyXG4gICAgICAgIHJldHVybiBuZXcgUmVkaXJlY3RBY3Rpb24odGFyZ2V0VmFsdWUpO1xyXG4gICAgICBjYXNlIEFjdGlvblR5cGUuUE9QVVA6XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQb3B1cEFjdGlvbih0YXJnZXRWYWx1ZSk7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgdGhyb3cgXCJVbmtub3duIGFjdGlvbiB0eXBlISBNdXN0IGJlIGRlZmluZWQgaW4gdGhlIEFjdGlvblR5cGUgRW51bS5cIjtcclxuICAgIH1cclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IHsgQWN0aW9uLCBBY3Rpb25GYWN0b3J5LCBBY3Rpb25UeXBlIH07XHJcbmV4cG9ydCBkZWZhdWx0IEFjdGlvbiIsImltcG9ydCB7IEFjdGlvbiwgQWN0aW9uVHlwZSwgQWN0aW9uRmFjdG9yeSB9IGZyb20gXCIuL2FjdGlvblwiXG5pbXBvcnQge21zVG9UaW1lIH0gZnJvbSBcIi4uL2hlbHBlcnMvaGVscGVyc1wiXG5cbmNsYXNzIFByb2RSdWxlIHtcbiAgc291cmNlOiBzdHJpbmdcbiAgYWN0aW9uOiBBY3Rpb25cbiAgY29uZGl0aW9uOiBSdWxlQ29uZGl0aW9uXG4gIGRlbGF5OiBudW1iZXJcbiAgY29uc3RydWN0b3IoXG4gICAgYmFkV2Vic2l0ZTogc3RyaW5nLFxuICAgIGFjdGlvbiA9IHsgdHlwZTogQWN0aW9uVHlwZS5GUkFNRSwgdGFyZ2V0VmFsdWU6IFwicmVkXCIgfSxcbiAgICBjb25kaXRpb24gPSBSdWxlQ29uZGl0aW9uLkFMV0FZUyxcbiAgICBkZWxheTogbnVtYmVyID0gMFxuICApIHtcbiAgICB0aGlzLnNvdXJjZSA9IGJhZFdlYnNpdGU7XG4gICAgdGhpcy5kZWxheSA9IGRlbGF5O1xuICAgIHRoaXMuY29uZGl0aW9uID0gY29uZGl0aW9uO1xuICAgIGlmIChhY3Rpb24gaW5zdGFuY2VvZiBBY3Rpb24pIHtcbiAgICAgIHRoaXMuYWN0aW9uID0gYWN0aW9uO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgdG1wVHlwZSA9IGFjdGlvbi50eXBlO1xuICAgICAgbGV0IHRtcFZhbCA9IGFjdGlvbi50YXJnZXRWYWx1ZTtcbiAgICAgIHRoaXMuYWN0aW9uID0gQWN0aW9uRmFjdG9yeS5jcmVhdGVBY3Rpb24odG1wVHlwZSwgdG1wVmFsKTtcbiAgICB9XG4gIH1cblxuICBhcHBseVJ1bGUoKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5hY3Rpb24ucGVyZm9ybUFjdGlvbigpO1xuICAgICAgfSwgdGhpcy5kZWxheSk7XG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICBjb25zdCBkZWxheVN0ciA9IG1zVG9UaW1lKHRoaXMuZGVsYXkpO1xuICAgIHJldHVybiBgJHt0aGlzLmNvbmRpdGlvbn0gd2hlbiBJIHZpc2l0ICR7XG4gICAgICB0aGlzLnNvdXJjZVxuICAgIH0gdGhlbiAke2RlbGF5U3RyfSAke3RoaXMuYWN0aW9uLnRvU3RyaW5nKCl9YDtcbiAgfVxufVxuXG5jb25zdCBQcm9kUnVsZUZhY3RvcnkgPSB7XG4gIGNyZWF0ZVJ1bGUoYmFkV2Vic2l0ZTogc3RyaW5nLCBhY3Rpb246IEFjdGlvbiwgY29uZGl0aW9uOiBzdHJpbmcgPSBcIkFMV0FZU1wiLCBkZWxheTogbnVtYmVyID0gMCk6IFByb2RSdWxlIHtcbiAgICB0cnkge1xuICAgICAgY29uZGl0aW9uID0gY29uZGl0aW9uLnRvVXBwZXJDYXNlKClcbiAgICAgIGlmKE9iamVjdC5rZXlzKFJ1bGVDb25kaXRpb24pLmluY2x1ZGVzKGNvbmRpdGlvbikpe1xuICAgICAgICBjb25zdCBub3JtYWxpemVkQ29uZDogUnVsZUNvbmRpdGlvbiA9IFJ1bGVDb25kaXRpb25bY29uZGl0aW9uIGFzIGtleW9mIHR5cGVvZiBSdWxlQ29uZGl0aW9uXVxuICAgICAgICByZXR1cm4gbmV3IFByb2RSdWxlKGJhZFdlYnNpdGUsIGFjdGlvbiwgbm9ybWFsaXplZENvbmQsIGRlbGF5KTtcbiAgICAgIH1cbiAgICB9XG4gICAgY2F0Y2goZSkge1xuICAgICAgdGhyb3cgZVxuICAgICAgY29uc29sZS5sb2coZSlcbiAgICB9XG5cblxuXG4gIH0sXG4gIGNyZWF0ZVJ1bGVGcm9tSlNPTihlbnRyeTogYW55KSB7XG4gICAgY29uc3QgYWN0aW9uID0gQWN0aW9uRmFjdG9yeS5jcmVhdGVBY3Rpb24oZW50cnkuYWN0aW9uLnR5cGUsIGVudHJ5LmFjdGlvbi50YXJnZXR2YWx1ZSlcblxuICAgIHJldHVybiB0aGlzLmNyZWF0ZVJ1bGUoZW50cnkuc291cmNlLCBhY3Rpb24sIGVudHJ5LmNvbmRpdGlvbiwgZW50cnkuZGVsYXkpXG4gIH0sXG59O1xuXG5lbnVtIFJ1bGVDb25kaXRpb24ge1xuICBBTFdBWVMgPSBcIkFMV0FZU1wiLFxuICBXT1JLID0gXCJXT1JLXCIsXG4gIEdPQUwgPSBcIkdPQUxcIixcbn1cblxuZXhwb3J0IHtQcm9kUnVsZSwgUnVsZUNvbmRpdGlvbiwgUHJvZFJ1bGVGYWN0b3J5IH0iLCJcblxuZXhwb3J0IGZ1bmN0aW9uIG1zVG9UaW1lKG1pbGlzZWNvbmRzOiBudW1iZXIpIHtcbiAgaWYgKG1pbGlzZWNvbmRzID09IDApIHJldHVybiBcImltbWVkaWF0ZWx5XCI7XG4gIGxldCBzZWNvbmRzID0gKG1pbGlzZWNvbmRzIC8gMTAwMCk7XG4gIGxldCBtaW51dGVzID0gKG1pbGlzZWNvbmRzIC8gKDEwMDAgKiA2MCkpO1xuICBsZXQgaG91cnMgPSAobWlsaXNlY29uZHMgLyAoMTAwMCAqIDYwICogNjApKTtcbiAgbGV0IGRheXMgPSAobWlsaXNlY29uZHMgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xuICBpZiAoc2Vjb25kcyA8IDYwKSByZXR1cm4gXCJhZnRlciBcIiArIHNlY29uZHMgKyBcIiBTZWNcIjtcbiAgZWxzZSBpZiAobWludXRlcyA8IDYwKSByZXR1cm4gXCJhZnRlciBcIiArICBtaW51dGVzICsgXCIgTWluXCI7XG4gIGVsc2UgaWYgKGhvdXJzIDwgMjQpIHJldHVybiBcImFmdGVyIFwiICsgaG91cnMgKyBcIiBIcnNcIjtcbiAgZWxzZSByZXR1cm4gXCJhZnRlciBcIiArIGRheXMgKyBcIiBEYXlzXCI7XG59IiwiaW1wb3J0IHsgQWN0aW9uRmFjdG9yeSwgQWN0aW9uVHlwZSB9IGZyb20gXCIuLi9kb21haW4vYWN0aW9uXCI7XG5pbXBvcnQgeyBQcm9kUnVsZSwgUHJvZFJ1bGVGYWN0b3J5LCBSdWxlQ29uZGl0aW9uIH0gZnJvbSBcIi4uL2RvbWFpbi9wcm9kUnVsZXNcIjtcbmltcG9ydCBQZXJzaXN0YW5jZUhhbmRsZXIgZnJvbSBcIi4uL3BlcnNpc3RhbmNlL3BlcnNpc3RhbmNlXCI7XG5pbXBvcnQgUHJvZFJ1bGVzVmlldyBmcm9tIFwiLi9wcm9kUnVsZXNWaWV3XCI7XG5cbnByZXBhcmVQcm9kUnVsZXMoKTtcbmNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkUnVsZUJ1dHRvblwiKTtcbmNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVkaXRSdWxlQnV0dG9uXCIpO1xuXG5mdW5jdGlvbiBwcmVwYXJlUHJvZFJ1bGVzKCkge1xuICBjb25zb2xlLmxvZyhcInByZXBhcmluZyBmb3JtIVwiKVxuICBwcmVwYXJlRm9ybSgpO1xuICBwcmVwYXJlUHJvZFJ1bGVUYWJsZSgpO1xuICBwcmVwYXJlQWRkUnVsZUJ1dHRvbigpO1xufVxuXG5mdW5jdGlvbiBwcmVwYXJlRm9ybSgpIHtcbiAgY29uc3QgbXVsdGlwbGVDaG9pY2VGaWVsZHMgPSBnZXRNdWx0aXBsZUNob2ljZUZpZWxkcygpO1xuICBsZXQgc2VsZWN0RWxlbWVudDtcbiAgbGV0IG15RGljdDtcbiAgZm9yIChsZXQgZWxlbUlEIGluIG11bHRpcGxlQ2hvaWNlRmllbGRzKSB7XG4gICAgc2VsZWN0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1JRCk7XG4gICAgbXlEaWN0ID0gbXVsdGlwbGVDaG9pY2VGaWVsZHNbZWxlbUlEXTtcbiAgICBmb3IgKGxldCBrZXkgaW4gbXVsdGlwbGVDaG9pY2VGaWVsZHNbZWxlbUlEXSkge1xuICAgICAgbGV0IG9wdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgb3B0aW9uRWxlbWVudC52YWx1ZSA9IGtleTtcbiAgICAgIG9wdGlvbkVsZW1lbnQudGV4dENvbnRlbnQgPSBteURpY3Rba2V5XTtcbiAgICAgIHNlbGVjdEVsZW1lbnQuYXBwZW5kQ2hpbGQob3B0aW9uRWxlbWVudCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldE11bHRpcGxlQ2hvaWNlRmllbGRzKCk6IHtba2V5OnN0cmluZ106IHtba2V5OnN0cmluZ10gOiBzdHJpbmd9fSB7XG4gIHJldHVybiB7XG4gICAgcnVsZWNvbmRpdGlvbjoge1xuICAgICAgQUxXQVlTOiBcImFsd2F5c1wiLFxuICAgICAgV09SSzogXCJkdXJpbmcgbXkgd29yayB0aW1lc1wiLFxuICAgICAgR09BTFM6IFwid2hpbGUgbXkgZ29hbHMgYXJlIG5vdCByZWFjaGVkIChXSVApXCIsXG4gICAgfSxcblxuICAgIGFjdGlvbnR5cGU6IHtcbiAgICAgIFJFRElSRUNUOiBcInJlZGlyZWN0IG1lIHRvXCIsXG4gICAgICBQT1BVUDogXCJzaG93IGEgcG9wdXAgd2l0aCB0aGUgZm9sbG93aW5nIHRleHRcIixcbiAgICAgIEZSQU1FOiBcImZyYW1lIHRoZSB1bnByb2R1Y3RpdmUgcGFnZSBpbiB0aGUgZm9sbG93aW5nIGNvbG9yXCIsXG4gICAgICBMT0c6IFwibG9nIG15IHZpc2l0IG9ubHkgKFdJUClcIixcbiAgICB9LFxuXG4gICAgYWN0aW9uZGVsYXk6IHtcbiAgICAgIDA6IFwiaW1tZWRpYXRlbHlcIixcbiAgICAgIDMwMDAwOiBcIjMwIHNlY29uZHNcIixcbiAgICAgIDMwMDAwMDogXCI1IG1pbnV0ZXNcIixcbiAgICAgIDEyMDAwMDA6IFwiMjAgbWludXRlc1wiLFxuICAgIH0sXG4gIH07XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHByZXBhcmVQcm9kUnVsZVRhYmxlKCkge1xuICBjb25zdCBydWxlTGlzdCA9IGF3YWl0IFBlcnNpc3RhbmNlSGFuZGxlci5nZXRBbGxSdWxlcygpO1xuICBpZiAoIXJ1bGVMaXN0IHx8IHJ1bGVMaXN0Lmxlbmd0aCA9PSAwIHx8IE9iamVjdC5rZXlzKHJ1bGVMaXN0KS5sZW5ndGggPT0gMCkge1xuICAgIGFkZERlbW9SdWxlKCk7XG4gIH0gZWxzZSB7XG4gICAgT2JqZWN0LmtleXMocnVsZUxpc3QpLmZvckVhY2goKHVucHJvZHVjdGl2ZVNpdGUpID0+IHtcbiAgICAgIGxldCBydWxlSW5kZXggPSAwO1xuICAgICAgcnVsZUxpc3RbdW5wcm9kdWN0aXZlU2l0ZV0uZm9yRWFjaCgocnVsZTogUHJvZFJ1bGUpID0+IHtcbiAgICAgICAgYWRkVG9Qcm9kVGFibGUocnVsZSwgcnVsZUluZGV4KTtcbiAgICAgICAgcnVsZUluZGV4Kys7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGREZW1vUnVsZSgpIHtcbiAgY29uc3QgZGVtb1VSTCA9IFwiZGVtb1VucHJvZHVjdGl2ZVNpdGUuY29tXCI7XG4gIGNvbnN0IGRlbW9BY3Rpb24gPSBBY3Rpb25GYWN0b3J5LmNyZWF0ZUFjdGlvbihcIlBPUFVQXCIsIFwiRG8geW91IHJlYWxseSB3YW50IHRvIHNwZW5kIHRpbWUgb24gdGhpcyBzaXRlP1wiKVxuICBjb25zdCBkZW1vUnVsZSA9IFByb2RSdWxlRmFjdG9yeS5jcmVhdGVSdWxlKGRlbW9VUkwsIGRlbW9BY3Rpb24pXG5cbiAgUHJvZFJ1bGVzVmlldy5hZGRFbnRyeVRvVGFibGUoZGVtb1J1bGUsIFwiZGVtb1wiKTtcbn1cblxuZnVuY3Rpb24gcHJlcGFyZUFkZFJ1bGVCdXR0b24oKSB7XG4gIGxldCBhZGRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFJ1bGVCdXR0b25cIik7XG4gIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFxuICAgIFwiY2xpY2tcIixcbiAgICBmdW5jdGlvbiAoZSkge1xuICAgICAgYWRkUnVsZUZyb21Gb3JtKCk7XG4gICAgfSxcbiAgICBmYWxzZVxuICApO1xufVxuXG5hc3luYyBmdW5jdGlvbiBhZGRSdWxlRnJvbUZvcm0oKSB7XG4gIGNvbnN0IGZvcm1EYXRhID0gUHJvZFJ1bGVzVmlldy5nZXRGb3JtRGF0YSgpO1xuXG4gIGxldCBhY3Rpb25EZWxheSA9IGZvcm1EYXRhLmRlbGF5O1xuICBsZXQgYWN0aW9uQ29uZGl0aW9uID0gZm9ybURhdGEuY29uZGl0aW9uO1xuICBsZXQgYWN0aW9uVHlwZSA9IGZvcm1EYXRhLmFjdGlvbnR5cGU7XG4gIGxldCBydWxlSUQgPSBmb3JtRGF0YS5ydWxlSUQ7XG5cbiAgbGV0IG5ld0FjdGlvbiA9IEFjdGlvbkZhY3RvcnkuY3JlYXRlQWN0aW9uKGZvcm1EYXRhLmFjdGlvbnR5cGUsIGZvcm1EYXRhLnRhcmdldFZhbClcbiAgbGV0IG5ld0VudHJ5ID0gUHJvZFJ1bGVGYWN0b3J5LmNyZWF0ZVJ1bGUoZm9ybURhdGEuYWN0aW9uc291cmNlLCBuZXdBY3Rpb24sIGZvcm1EYXRhLmNvbmRpdGlvbiwgZm9ybURhdGEuZGVsYXkpXG5cbiAgaWYgKGZvcm1EYXRhLmFjdGlvbnNvdXJjZSAmJiBhY3Rpb25UeXBlICYmIGZvcm1EYXRhLnRhcmdldFZhbCkge1xuICAgICAgY29uc3QgcnVsZUluZGV4ID0gYXdhaXQgUGVyc2lzdGFuY2VIYW5kbGVyLmFkZFJ1bGUobmV3RW50cnkpO1xuICAgICAgYWRkVG9Qcm9kVGFibGUobmV3RW50cnksIHJ1bGVJbmRleCk7XG4gICAgfVxuICAvKn0gZWxzZSB7XG4gICAgY29uc3QgaWRfZWxlbXMgPSBfZGVjb25zdHJ1Y3RJRChydWxlSUQpO1xuICAgIFBlcnNpc3RhbmNlSGFuZGxlci51cGRhdGVSdWxlKFxuICAgICAgaWRfZWxlbXNbXCJiYWRTaXRlXCJdLFxuICAgICAgaWRfZWxlbXNbXCJpbmRleFwiXSxcbiAgICAgIG5ld0VudHJ5XG4gICAgKTtcbiAgfVxuICAqL1xuICBQcm9kUnVsZXNWaWV3LmNsZWFyRm9ybSgpO1xufVxuXG5mdW5jdGlvbiBhZGRUb1Byb2RUYWJsZShwcm9kUnVsZTogUHJvZFJ1bGUsIHJ1bGVJbmRleDogbnVtYmVyKSB7XG4gIGNvbnN0IHJ1bGVJRCA9IF9nZXRSb3dJRChwcm9kUnVsZS5zb3VyY2UsIHJ1bGVJbmRleClcbiAgY29uc3QgYWN0aW9uQnV0dG9ucyA9IFByb2RSdWxlc1ZpZXcuYWRkRW50cnlUb1RhYmxlKHByb2RSdWxlLCBydWxlSUQpO1xuICBhY3Rpb25CdXR0b25zW1wiZWRpdFwiXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICBwcmVwYXJlVG9FZGl0KHByb2RSdWxlLCBydWxlSW5kZXgpO1xuICB9KTtcblxuICBhY3Rpb25CdXR0b25zW1wiZGVsZXRlXCJdLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgXCJjbGlja1wiLFxuICAgIGZ1bmN0aW9uIChlKSB7XG4gICAgICBkZWxldGVFbnRyeShwcm9kUnVsZS5zb3VyY2UsIHJ1bGVJbmRleCk7XG4gICAgfSxcbiAgICBmYWxzZVxuICApO1xufVxuXG5mdW5jdGlvbiBwcmVwYXJlVG9FZGl0KHByb2RSdWxlOiBQcm9kUnVsZSwgcnVsZUluZGV4OiBudW1iZXIpIHtcbiAgY29uc3QgcnVsZUlEID0gX2dldFJvd0lEKHByb2RSdWxlLnNvdXJjZSwgcnVsZUluZGV4KVxuICBQcm9kUnVsZXNWaWV3LnNldEZvcm1WYWx1ZXMocHJvZFJ1bGUsIHJ1bGVJRCk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZUVudHJ5KHVucHJvZHVjdGl2ZVNpdGU6IHN0cmluZywgcnVsZUluZGV4OiBudW1iZXIpIHtcbiAgY29uc3QgcnVsZUlEID0gX2dldFJvd0lEKHVucHJvZHVjdGl2ZVNpdGUsIHJ1bGVJbmRleCk7XG4gIFBlcnNpc3RhbmNlSGFuZGxlci5kZWxldGVSdWxlKHVucHJvZHVjdGl2ZVNpdGUsIHJ1bGVJbmRleCk7XG4gIFByb2RSdWxlc1ZpZXcucmVtb3ZlRnJvbVRhYmxlKHJ1bGVJRCk7XG59XG5cbmZ1bmN0aW9uIF9nZXRSb3dJRCh1bnByb2R1Y3RpdmVTaXRlOiBzdHJpbmcsIHJ1bGVJbmRleDogbnVtYmVyKSB7XG4gIGNvbnN0IHJvd0lEID0gYCR7dW5wcm9kdWN0aXZlU2l0ZX0tJHtydWxlSW5kZXh9YDtcbiAgcmV0dXJuIHJvd0lEO1xufVxuXG5mdW5jdGlvbiBfZGVjb25zdHJ1Y3RJRChydWxlSUQ6IHN0cmluZykge1xuICBjb25zdCBpZF9hcnJheSA9IHJ1bGVJRC5zcGxpdChcIi1cIik7XG4gIHJldHVybiB7XG4gICAgYmFkU2l0ZTogaWRfYXJyYXlbMF0sXG4gICAgaW5kZXg6IGlkX2FycmF5WzFdLFxuICB9O1xufVxuIiwiaW1wb3J0IHsgQWN0aW9uRmFjdG9yeSB9IGZyb20gXCIuLi9kb21haW4vYWN0aW9uXCI7XG5pbXBvcnQgeyBQcm9kUnVsZSB9IGZyb20gXCIuLi9kb21haW4vcHJvZFJ1bGVzXCI7XG5pbXBvcnQgeyBtc1RvVGltZSB9IGZyb20gXCIuLi9oZWxwZXJzL2hlbHBlcnNcIjtcbmltcG9ydCAqIGFzIENvbnRyb2xsZXIgZnJvbSBcIi4vcHJvZFJ1bGVzQ29udHJvbGxlclwiO1xuXG5jbGFzcyBSdWxlRm9ybSBleHRlbmRzIEhUTUxGb3JtQ29udHJvbHNDb2xsZWN0aW9uIHtcbiAgICBhY3Rpb25zb3VyY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFjdGlvbnNvdXJjZVwiKSBhcyBIVE1MSW5wdXRFbGVtZW50XG4gIGFjdGlvbnR5cGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFjdGlvbnR5cGVcIikgYXMgSFRNTFNlbGVjdEVsZW1lbnRcbiAgdGFyZ2V0VmFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXJnZXR2YWx1ZVwiKSBhcyBIVE1MSW5wdXRFbGVtZW50XG4gIGNvbmRpdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWN0aW9uY29uZGl0aW9uXCIpIGFzIEhUTUxTZWxlY3RFbGVtZW50XG4gIGRlbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhY3Rpb25kZWxheVwiKSBhcyBIVE1MU2VsZWN0RWxlbWVudFxuICBydWxlSUQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJ1bGVJRFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50XG5cbiAgICByZXNldCgpe1xuICAgICAgdGhpcy5hY3Rpb25zb3VyY2UudmFsdWUgPSBcIlwiXG4gICAgICB0aGlzLmFjdGlvbnR5cGUuc2VsZWN0ZWRJbmRleCA9IDBcbiAgICAgIHRoaXMudGFyZ2V0VmFsLnZhbHVlID0gXCJcIlxuICAgICAgdGhpcy5jb25kaXRpb24uc2VsZWN0ZWRJbmRleCA9IDBcbiAgICAgIHRoaXMuZGVsYXkuc2VsZWN0ZWRJbmRleCA9IDBcbiAgICAgIHRoaXMucnVsZUlELnZhbHVlID0gXCJORVdcIlxuICAgIH1cblxuICAgIGdldFZhbHVlcygpe1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgXCJhY3Rpb25zb3VyY2VcIjogdGhpcy5hY3Rpb25zb3VyY2UudmFsdWUsXG4gICAgICAgIFwiYWN0aW9udHlwZVwiOiB0aGlzLmFjdGlvbnR5cGUudmFsdWUsXG4gICAgICAgIFwidGFyZ2V0VmFsXCI6IHRoaXMudGFyZ2V0VmFsLnZhbHVlLFxuICAgICAgICBcImNvbmRpdGlvblwiOiB0aGlzLmNvbmRpdGlvbi52YWx1ZSxcbiAgICAgICAgXCJkZWxheVwiOiBwYXJzZUludCh0aGlzLmRlbGF5LnZhbHVlKSxcbiAgICAgICAgXCJydWxlSURcIjogdGhpcy5ydWxlSUQudmFsdWVcbiAgICAgIH1cbiAgICB9XG59XG5cbmNvbnN0IFByb2RSdWxlc1ZpZXcgPSB7XG4gIGFkZEVudHJ5VG9UYWJsZTogKHByb2RSdWxlOiBQcm9kUnVsZSwgcnVsZUlEOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCB0YWJsZUlEID0gXCJwcm9kdWN0aW9uUnVsZVRhYmxlXCI7XG4gICAgbGV0IHNldHRpbmdzVGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YWJsZUlEKSBhcyBIVE1MVGFibGVFbGVtZW50O1xuICAgIFxuICAgICAgbGV0IG5ld1JvdyA9IHNldHRpbmdzVGFibGUuaW5zZXJ0Um93KC0xKTtcbiAgICAgIGxldCBydWxlQ2VsbCA9IG5ld1Jvdy5pbnNlcnRDZWxsKDApO1xuICAgICAgbGV0IGFjdGlvbnNDZWxsID0gbmV3Um93Lmluc2VydENlbGwoMSk7XG5cbiAgICAgIG5ld1Jvdy5pZCA9IHJ1bGVJRDtcbiAgICAgIHJ1bGVDZWxsLmlubmVySFRNTCA9IF9mb3JtYXRTdHJpbmcocHJvZFJ1bGUpO1xuICAgICAgcnVsZUNlbGwuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJweC0yXCIpO1xuICAgICAgYWN0aW9uc0NlbGwuaW5uZXJIVE1MID0gYDxidXR0b24gaWQ9XCIke3RhYmxlSUR9X2VkaXRfJHtydWxlSUR9XCIgY2xhc3M9XCJyb3VuZGVkLWxnIGJvcmRlci13aGl0ZSBiZy1uYXZ5IHRleHQtd2hpdGUgaG92ZXI6YmctYmx1ZVJveWFsIHB4LTIgbXgtMSB0ZXh0LWNlbnRlclwiPmVkaXQ8L2J1dHRvbj5cbiAgICA8YnV0dG9uIGlkPVwiJHt0YWJsZUlEfV9kZWxldGVfJHtydWxlSUR9XCIgY2xhc3M9XCJyb3VuZGVkLWxnIGJvcmRlci13aGl0ZSBiZy1uYXZ5IHRleHQtd2hpdGUgaG92ZXI6YmctYmx1ZVJveWFsIHB4LTIgbXgtMSB0ZXh0LWNlbnRlclwiPmRlbGV0ZTwvYnV0dG9uPmA7XG5cbiAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3RhYmxlSUR9X2RlbGV0ZV8ke3J1bGVJRH1gKTtcbiAgICAgIGNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt0YWJsZUlEfV9lZGl0XyR7cnVsZUlEfWApO1xuICAgICAgcmV0dXJuIHsgZWRpdDogZWRpdEJ1dHRvbiwgZGVsZXRlOiBkZWxldGVCdXR0b24sIGVudHJ5OiBydWxlQ2VsbCB9O1xuICB9LFxuXG4gIHJlbW92ZUZyb21UYWJsZTogKHJ1bGVJRDpzdHJpbmcpID0+IHtcbiAgICBsZXQgdG9EZWxldGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChydWxlSUQpXG4gICAgdG9EZWxldGUucmVtb3ZlKCk7XG4gICAgY29uc29sZS5sb2coYFJlbW92aW5nIHJ1bGUgZm9yICR7cnVsZUlEfSFgKTtcbiAgfSxcblxuICBnZXRGb3JtRGF0YTogKCkgPT4ge1xuICAgIGxldCBteUZvcm0gPSBuZXcgUnVsZUZvcm0oKVxuICAgIHJldHVybiBteUZvcm0uZ2V0VmFsdWVzKCk7XG4gIH0sXG5cbiAgY2xlYXJGb3JtOiAoKSA9PiB7XG4gICAgY29uc3QgZm9ybSA9IG5ldyBSdWxlRm9ybSgpXG4gICAgZm9ybS5yZXNldCgpXG4gIH0sXG4gIHNldEZvcm1WYWx1ZXMoZm9ybVZhbHVlczogUHJvZFJ1bGUsIHJ1bGVJRDogc3RyaW5nKSB7XG4gICAgbGV0IG15Rm9ybSA9IG5ldyBSdWxlRm9ybSgpXG4gICAgbXlGb3JtLmFjdGlvbnNvdXJjZS52YWx1ZSA9IGZvcm1WYWx1ZXMuc291cmNlXG4gICAgXG4gIH1cbn07XG5cbmZ1bmN0aW9uIF9mb3JtYXRTdHJpbmcocHJvZFJ1bGU6IFByb2RSdWxlKSB7XG4gICAgY29uc3QgY29uZGl0aW9uU3RyID0gbXNUb1RpbWUocHJvZFJ1bGUuZGVsYXkpXG4gICAgY29uc3QgZGVsYXlTdHIgPSBtc1RvVGltZShwcm9kUnVsZS5kZWxheSlcbiAgY29uc3QgcmVzdWx0c1N0ciA9ICBgPGVtIGNsYXNzPVwidGV4dC1sZ1wiPiR7cHJvZFJ1bGUuc291cmNlfTwvZW0+IDxicj48Yj4ke1xuICAgIGNvbmRpdGlvblN0clxuICB9PC9iPiB3aGVuIEkgdmlzaXQgPGI+JHtwcm9kUnVsZS5zb3VyY2V9PC9iPiB0aGVuIDxiPiR7XG4gICAgZGVsYXlTdHJcbiAgfSAke3Byb2RSdWxlLmFjdGlvbi50b1N0cmluZygpfTwvYj5gO1xuXG4gIHJldHVybiByZXN1bHRzU3RyXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2RSdWxlc1ZpZXciLCJpbXBvcnQgeyBQcm9kUnVsZSB9IGZyb20gXCIuLi9kb21haW4vcHJvZFJ1bGVzXCI7XHJcblxyXG5jb25zdCBydWxlREJOYW1lID0gXCJwcm9kdWN0aXZpdHlSdWxlc1wiO1xyXG5pbnRlcmZhY2UgUnVsZUxpc3Qge1xyXG4gIFtrZXk6IHN0cmluZ106IFByb2RSdWxlW11cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0QWxsUnVsZXMoKSB7XHJcbiAgbGV0IHJ1bGVMaXN0ID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHJ1bGVEQk5hbWUpO1xyXG4gIGxldCByZXN1bHRMaXN0OiB7W2tleTogc3RyaW5nXTogYW55fSA9IHR5cGVvZiBydWxlTGlzdCA9PT0gXCJ1bmRlZmluZWRcIiA/IHt9IDogcnVsZUxpc3Q7XHJcbiAgaWYgKHJ1bGVEQk5hbWUgaW4gcnVsZUxpc3QpIHtcclxuICAgIHJldHVybiBydWxlTGlzdFtydWxlREJOYW1lXTtcclxuICB9XHJcbiAgcmV0dXJuIHJlc3VsdExpc3Q7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGFkZFJ1bGUobXlOZXdSdWxlOiBQcm9kUnVsZSkge1xyXG4gIGNvbnN0IHJ1bGVMaXN0ID0gYXdhaXQgZ2V0QWxsUnVsZXMoKTtcclxuICBjb25zdCB0YXJnZXRXZWJzaXRlID0gbXlOZXdSdWxlLnNvdXJjZTtcclxuXHJcbiAgaWYgKHRhcmdldFdlYnNpdGUgaW4gcnVsZUxpc3QpIHtcclxuICAgIHJ1bGVMaXN0W3RhcmdldFdlYnNpdGVdLnB1c2gobXlOZXdSdWxlKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcnVsZUxpc3RbdGFyZ2V0V2Vic2l0ZV0gPSBbbXlOZXdSdWxlXTtcclxuICB9XHJcbiAgc2V0UnVsZUxpc3QocnVsZUxpc3QpO1xyXG4gIHJldHVybiAocnVsZUxpc3RbdGFyZ2V0V2Vic2l0ZV0ubGVuZ3RoIC0gMSlcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gdXBkYXRlUnVsZShiYWRTaXRlOiBzdHJpbmcsIGluZGV4OiBudW1iZXIsIHVwZGF0ZWRSdWxlOiBQcm9kUnVsZSkge1xyXG4gIC8vIGxldCBydWxlTGlzdCA9IGF3YWl0IGdldEFsbFJ1bGVzKCk7XHJcblxyXG4gIGF3YWl0IGRlbGV0ZVJ1bGUoYmFkU2l0ZSwgaW5kZXgpO1xyXG4gIHJldHVybiBhZGRSdWxlKHVwZGF0ZWRSdWxlKTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZGVsZXRlUnVsZShiYWRTaXRlOnN0cmluZywgaW5kZXg6IG51bWJlcikge1xyXG4gIGxldCBydWxlTGlzdCA9IGF3YWl0IGdldEFsbFJ1bGVzKCk7XHJcbiAgcnVsZUxpc3RbYmFkU2l0ZV0uc3BsaWNlKGluZGV4LCAxKTtcclxuICBpZihydWxlTGlzdFtiYWRTaXRlXS5sZW5ndGggPT0gMCl7XHJcbiAgICBkZWxldGUgcnVsZUxpc3RbYmFkU2l0ZV1cclxuICB9XHJcbiAgc2V0UnVsZUxpc3QocnVsZUxpc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRSdWxlTGlzdChydWxlTGlzdDogUnVsZUxpc3QpIHtcclxuICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBwcm9kdWN0aXZpdHlSdWxlczogcnVsZUxpc3QgfSk7XHJcbn1cclxuXHJcbmNvbnN0IFBlcnNpc3RhbmNlSGFuZGxlciA9IHtcclxuICBnZXRBbGxSdWxlczogZ2V0QWxsUnVsZXMsXHJcbiAgYWRkUnVsZTogYWRkUnVsZSxcclxuICBkZWxldGVSdWxlOiBkZWxldGVSdWxlLFxyXG4gIHVwZGF0ZVJ1bGU6IHVwZGF0ZVJ1bGUsXHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGVyc2lzdGFuY2VIYW5kbGVyIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9