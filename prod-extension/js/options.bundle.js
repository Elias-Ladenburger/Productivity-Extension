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


/***/ }),

/***/ "./src/ui/prodRulesController.ts":
/*!***************************************!*\
  !*** ./src/ui/prodRulesController.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _domain_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domain/action */ "./src/domain/action.ts");
/* harmony import */ var _domain_prodRules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../domain/prodRules */ "./src/domain/prodRules.ts");
/* harmony import */ var _persistance_persistance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../persistance/persistance */ "./src/persistance/persistance.ts");
/* harmony import */ var _prodRulesView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prodRulesView */ "./src/ui/prodRulesView.ts");
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
    var multipleChoiceFields = getStringsForEnums();
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
function getStringsForEnums() {
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
            30000: "after 30 seconds",
            300000: "after 5 minutes",
            1200000: "after 20 minutes",
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
        console.log("Adding new rule:");
        addRuleFromForm();
    }, false);
}
function addRuleFromForm() {
    return __awaiter(this, void 0, void 0, function () {
        var formData, actionsource, targetVal, actionDelay, actionCondition, actionType, ruleID, newAction, newEntry, ruleIndex;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    formData = _prodRulesView__WEBPACK_IMPORTED_MODULE_3__["default"].getFormData();
                    actionsource = formData.actionsource;
                    targetVal = formData.targetVal;
                    actionDelay = formData.delay;
                    actionCondition = formData.condition;
                    actionType = formData.actiontype;
                    ruleID = formData.ruleID;
                    newAction = _domain_action__WEBPACK_IMPORTED_MODULE_0__.ActionFactory.createAction(actionType, targetVal);
                    newEntry = _domain_prodRules__WEBPACK_IMPORTED_MODULE_1__.ProdRuleFactory.createRule(actionsource, newAction, actionCondition, actionDelay);
                    console.log(newEntry);
                    if (!(actionsource && actionType && targetVal)) return [3 /*break*/, 2];
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
var ProdRulesController = {
    deleteEntry: deleteEntry,
    prepareToEdit: prepareToEdit,
    addToProdTable: addToProdTable,
    addRuleFromForm: addRuleFromForm,
    getStringsForEnums: getStringsForEnums
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProdRulesController);


/***/ }),

/***/ "./src/ui/prodRulesView.ts":
/*!*********************************!*\
  !*** ./src/ui/prodRulesView.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/helpers */ "./src/helpers/helpers.ts");

var RuleForm = /** @class */ (function () {
    function RuleForm() {
        this.actionsource = document.getElementById("actionsource");
        this.actiontype = document.getElementById("actiontype");
        this.targetVal = document.getElementById("targetvalue");
        this.condition = document.getElementById("rulecondition");
        this.delay = document.getElementById("actiondelay");
        this.ruleID = document.getElementById("ruleID");
    }
    RuleForm.prototype.toStart = function () {
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
}());
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
        form.toStart();
    },
    setFormValues: function (formValues, ruleID) {
        var myForm = new RuleForm();
        myForm.actionsource.value = formValues.source;
        myForm.actiontype.value = formValues.action.type;
        myForm.targetVal.value = formValues.action.targetValue;
        myForm.condition.value = formValues.condition;
        myForm.delay.value = formValues.delay.toString();
    }
};
function _formatString(prodRule) {
    var conditionStr = prodRule.condition.toLowerCase();
    var delayStr = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.msToTime)(prodRule.delay);
    var resultsStr = "<em class=\"text-lg\">".concat(prodRule.source, "</em> <br><b>").concat(conditionStr, "</b> when I visit <b>").concat(prodRule.source, "</b> then <b>").concat(delayStr, " ").concat(prodRule.action.type, " ").concat(prodRule.action.targetValue, "</b>");
    return resultsStr;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProdRulesView);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/ui/prodRulesController.ts"));
/******/ (MyLibrary = typeof MyLibrary === "undefined" ? {} : MyLibrary).options = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsTUFBTSwwQkFDeEQsWUFBWSxrQ0FDVSxRQUFRLENBQUMsTUFBTSwwQkFDckMsUUFBUSxjQUNOLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxjQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsV0FBVyxTQUFNLENBQUM7SUFFOUQsT0FBTyxVQUFVO0FBQ25CLENBQUM7QUFFRCxpRUFBZSxhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vTXlMaWJyYXJ5Ly4vc3JjL2RvbWFpbi9hY3Rpb24udHMiLCJ3ZWJwYWNrOi8vTXlMaWJyYXJ5Ly4vc3JjL2RvbWFpbi9wcm9kUnVsZXMudHMiLCJ3ZWJwYWNrOi8vTXlMaWJyYXJ5Ly4vc3JjL2hlbHBlcnMvaGVscGVycy50cyIsIndlYnBhY2s6Ly9NeUxpYnJhcnkvLi9zcmMvcGVyc2lzdGFuY2UvcGVyc2lzdGFuY2UudHMiLCJ3ZWJwYWNrOi8vTXlMaWJyYXJ5Ly4vc3JjL3VpL3Byb2RSdWxlc0NvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vTXlMaWJyYXJ5Ly4vc3JjL3VpL3Byb2RSdWxlc1ZpZXcudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQWN0aW9uIHtcclxuICB0YXJnZXRWYWx1ZTogc3RyaW5nO1xyXG4gIHR5cGU6IEFjdGlvblR5cGUgPSBBY3Rpb25UeXBlLkxPR1xyXG4gIGNvbnN0cnVjdG9yKHRhcmdldFZhbHVlOiBzdHJpbmcgPSBcIlwiKSB7XHJcbiAgICB0aGlzLnRhcmdldFZhbHVlID0gdGFyZ2V0VmFsdWU7XHJcbiAgfVxyXG5cclxuICBwZXJmb3JtQWN0aW9uKCkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICB0b1N0cmluZygpIHtcclxuICAgIHJldHVybiBgYXBwbHkgYSBydWxlIWA7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBGcmFtZUFjdGlvbiBleHRlbmRzIEFjdGlvbiB7XHJcbiAgIHR5cGU6IEFjdGlvblR5cGU7XHJcbiAgY29uc3RydWN0b3IoZnJhbWVDb2xvcjogc3RyaW5nKSB7XHJcbiAgICBzdXBlcihmcmFtZUNvbG9yKTtcclxuICAgIHRoaXMudHlwZSA9IEFjdGlvblR5cGUuRlJBTUU7XHJcbiAgfVxyXG5cclxuICAgcGVyZm9ybUFjdGlvbigpIHtcclxuICAgIGFsZXJ0KFxyXG4gICAgICBgVGhpcyBzaXRlIGlzIHVucHJvZHVjdGl2ZSEgRnJhbWluZyB0aGlzIHNpdGUgaW4gJHt0aGlzLnRhcmdldFZhbHVlfS5gXHJcbiAgICApO1xyXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5ib3JkZXIgPSBgMTBweCBzb2xpZCAke3RoaXMudGFyZ2V0VmFsdWV9YDtcclxuICB9XHJcblxyXG4gICB0b1N0cmluZygpIHtcclxuICAgIHJldHVybiBgZnJhbWUgdGhlIHNpdGUgaW4gJHt0aGlzLnRhcmdldFZhbHVlfWA7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBQb3B1cEFjdGlvbiBleHRlbmRzIEFjdGlvbiB7XHJcbiAgIHR5cGU6IEFjdGlvblR5cGU7XHJcbiAgY29uc3RydWN0b3IocG9wdXBUZXh0OiBzdHJpbmcpIHtcclxuICAgIHN1cGVyKHBvcHVwVGV4dCk7XHJcbiAgICB0aGlzLnR5cGUgPSBBY3Rpb25UeXBlLlBPUFVQO1xyXG4gIH1cclxuICAgcGVyZm9ybUFjdGlvbigpIHtcclxuICAgIGlmICghdGhpcy50YXJnZXRWYWx1ZSkge1xyXG4gICAgICB0aGlzLnRhcmdldFZhbHVlID0gXCJEbyB5b3UgdHJ1bHkgd2FudCB0byBzcGVuZCBtb3JlIHRpbWUgb24gdGhpcyBzaXRlP1wiO1xyXG4gICAgfVxyXG4gICAgYWxlcnQodGhpcy50YXJnZXRWYWx1ZSk7XHJcbiAgfVxyXG4gICB0b1N0cmluZygpIHtcclxuICAgIHJldHVybiBgc2hvdyBhIHBvcHVwIHRoYXQgc2F5czogXFxuICcke3RoaXMudGFyZ2V0VmFsdWV9J2A7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBSZWRpcmVjdEFjdGlvbiBleHRlbmRzIEFjdGlvbiB7XHJcbiAgIHR5cGU6IEFjdGlvblR5cGU7XHJcbiAgY29uc3RydWN0b3IocmVkaXJlY3RUbzogc3RyaW5nKSB7XHJcbiAgICBzdXBlcihyZWRpcmVjdFRvKTtcclxuICAgIHRoaXMudHlwZSA9IEFjdGlvblR5cGUuUkVESVJFQ1Q7XHJcbiAgfVxyXG4gICBwZXJmb3JtQWN0aW9uKCkge1xyXG4gICAgYWxlcnQoYFRoaXMgc2l0ZSBpcyB1bnByb2R1Y3RpdmUhIFJlZGlyZWN0aW5nIHRvICR7dGhpcy50YXJnZXRWYWx1ZX0uYCk7XHJcbiAgICBsZXQgdGFyZ2V0VmFsdWUgPSB0aGlzLnRhcmdldFZhbHVlLnN0YXJ0c1dpdGgoXCJodHRwXCIpXHJcbiAgICAgID8gdGhpcy50YXJnZXRWYWx1ZVxyXG4gICAgICA6IGBodHRwczovLyR7dGhpcy50YXJnZXRWYWx1ZX1gO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB0YXJnZXRWYWx1ZTtcclxuICB9XHJcbiAgIHRvU3RyaW5nKCkge1xyXG4gICAgcmV0dXJuIGByZWRpcmVjdCB0byAke3RoaXMudGFyZ2V0VmFsdWV9YDtcclxuICB9XHJcbn1cclxuXHJcbmVudW0gQWN0aW9uVHlwZSB7XHJcbiAgUkVESVJFQ1QgPSBcIlJFRElSRUNUXCIsXHJcbiAgUE9QVVAgPSBcIlBPUFVQXCIsXHJcbiAgRlJBTUUgPSBcIkZSQU1FXCIsXHJcbiAgTE9HID0gXCJMT0dcIixcclxufTtcclxuXHJcbmNvbnN0IEFjdGlvbkZhY3RvcnkgPSB7XHJcbiAgY3JlYXRlQWN0aW9uKHR5cGU6IHN0cmluZywgdGFyZ2V0VmFsdWU6IHN0cmluZyk6IEFjdGlvbiB7XHJcbiAgICBzd2l0Y2ggKHR5cGUudG9VcHBlckNhc2UoKSkge1xyXG4gICAgICBjYXNlIEFjdGlvblR5cGUuRlJBTUU6XHJcbiAgICAgICAgcmV0dXJuIG5ldyBGcmFtZUFjdGlvbih0YXJnZXRWYWx1ZSk7XHJcbiAgICAgIGNhc2UgQWN0aW9uVHlwZS5SRURJUkVDVDpcclxuICAgICAgICByZXR1cm4gbmV3IFJlZGlyZWN0QWN0aW9uKHRhcmdldFZhbHVlKTtcclxuICAgICAgY2FzZSBBY3Rpb25UeXBlLlBPUFVQOlxyXG4gICAgICAgIHJldHVybiBuZXcgUG9wdXBBY3Rpb24odGFyZ2V0VmFsdWUpO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHRocm93IFwiVW5rbm93biBhY3Rpb24gdHlwZSEgTXVzdCBiZSBkZWZpbmVkIGluIHRoZSBBY3Rpb25UeXBlIEVudW0uXCI7XHJcbiAgICB9XHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCB7IEFjdGlvbiwgQWN0aW9uRmFjdG9yeSwgQWN0aW9uVHlwZSB9O1xyXG5leHBvcnQgZGVmYXVsdCBBY3Rpb24iLCJpbXBvcnQgeyBBY3Rpb24sIEFjdGlvblR5cGUsIEFjdGlvbkZhY3RvcnkgfSBmcm9tIFwiLi9hY3Rpb25cIlxuaW1wb3J0IHttc1RvVGltZSB9IGZyb20gXCIuLi9oZWxwZXJzL2hlbHBlcnNcIlxuXG5jbGFzcyBQcm9kUnVsZSB7XG4gIHNvdXJjZTogc3RyaW5nXG4gIGFjdGlvbjogQWN0aW9uXG4gIGNvbmRpdGlvbjogUnVsZUNvbmRpdGlvblxuICBkZWxheTogbnVtYmVyXG4gIGNvbnN0cnVjdG9yKFxuICAgIGJhZFdlYnNpdGU6IHN0cmluZyxcbiAgICBhY3Rpb24gPSB7IHR5cGU6IEFjdGlvblR5cGUuRlJBTUUsIHRhcmdldFZhbHVlOiBcInJlZFwiIH0sXG4gICAgY29uZGl0aW9uID0gUnVsZUNvbmRpdGlvbi5BTFdBWVMsXG4gICAgZGVsYXk6IG51bWJlciA9IDBcbiAgKSB7XG4gICAgdGhpcy5zb3VyY2UgPSBiYWRXZWJzaXRlO1xuICAgIHRoaXMuZGVsYXkgPSBkZWxheTtcbiAgICB0aGlzLmNvbmRpdGlvbiA9IGNvbmRpdGlvbjtcbiAgICBpZiAoYWN0aW9uIGluc3RhbmNlb2YgQWN0aW9uKSB7XG4gICAgICB0aGlzLmFjdGlvbiA9IGFjdGlvbjtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHRtcFR5cGUgPSBhY3Rpb24udHlwZTtcbiAgICAgIGxldCB0bXBWYWwgPSBhY3Rpb24udGFyZ2V0VmFsdWU7XG4gICAgICB0aGlzLmFjdGlvbiA9IEFjdGlvbkZhY3RvcnkuY3JlYXRlQWN0aW9uKHRtcFR5cGUsIHRtcFZhbCk7XG4gICAgfVxuICB9XG5cbiAgYXBwbHlSdWxlKCkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuYWN0aW9uLnBlcmZvcm1BY3Rpb24oKTtcbiAgICAgIH0sIHRoaXMuZGVsYXkpO1xuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgY29uc3QgZGVsYXlTdHIgPSBtc1RvVGltZSh0aGlzLmRlbGF5KTtcbiAgICByZXR1cm4gYCR7dGhpcy5jb25kaXRpb259IHdoZW4gSSB2aXNpdCAke1xuICAgICAgdGhpcy5zb3VyY2VcbiAgICB9IHRoZW4gJHtkZWxheVN0cn0gJHt0aGlzLmFjdGlvbi50b1N0cmluZygpfWA7XG4gIH1cbn1cblxuY29uc3QgUHJvZFJ1bGVGYWN0b3J5ID0ge1xuICBjcmVhdGVSdWxlKGJhZFdlYnNpdGU6IHN0cmluZywgYWN0aW9uOiBBY3Rpb24sIGNvbmRpdGlvbjogc3RyaW5nID0gXCJBTFdBWVNcIiwgZGVsYXk6IG51bWJlciA9IDApOiBQcm9kUnVsZSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbmRpdGlvbiA9IGNvbmRpdGlvbi50b1VwcGVyQ2FzZSgpXG4gICAgICBpZihPYmplY3Qua2V5cyhSdWxlQ29uZGl0aW9uKS5pbmNsdWRlcyhjb25kaXRpb24pKXtcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZENvbmQ6IFJ1bGVDb25kaXRpb24gPSBSdWxlQ29uZGl0aW9uW2NvbmRpdGlvbiBhcyBrZXlvZiB0eXBlb2YgUnVsZUNvbmRpdGlvbl1cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9kUnVsZShiYWRXZWJzaXRlLCBhY3Rpb24sIG5vcm1hbGl6ZWRDb25kLCBkZWxheSk7XG4gICAgICB9XG4gICAgfVxuICAgIGNhdGNoKGUpIHtcbiAgICAgIHRocm93IGVcbiAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgfVxuXG5cblxuICB9LFxuICBjcmVhdGVSdWxlRnJvbUpTT04oZW50cnk6IGFueSkge1xuICAgIGNvbnN0IGFjdGlvbiA9IEFjdGlvbkZhY3RvcnkuY3JlYXRlQWN0aW9uKGVudHJ5LmFjdGlvbi50eXBlLCBlbnRyeS5hY3Rpb24udGFyZ2V0dmFsdWUpXG5cbiAgICByZXR1cm4gdGhpcy5jcmVhdGVSdWxlKGVudHJ5LnNvdXJjZSwgYWN0aW9uLCBlbnRyeS5jb25kaXRpb24sIGVudHJ5LmRlbGF5KVxuICB9LFxufTtcblxuZW51bSBSdWxlQ29uZGl0aW9uIHtcbiAgQUxXQVlTID0gXCJBTFdBWVNcIixcbiAgV09SSyA9IFwiV09SS1wiLFxuICBHT0FMID0gXCJHT0FMXCIsXG59XG5cbmV4cG9ydCB7UHJvZFJ1bGUsIFJ1bGVDb25kaXRpb24sIFByb2RSdWxlRmFjdG9yeSB9IiwiXG5cbmV4cG9ydCBmdW5jdGlvbiBtc1RvVGltZShtaWxpc2Vjb25kczogbnVtYmVyKSB7XG4gIGlmIChtaWxpc2Vjb25kcyA9PSAwKSByZXR1cm4gXCJpbW1lZGlhdGVseVwiO1xuICBsZXQgc2Vjb25kcyA9IChtaWxpc2Vjb25kcyAvIDEwMDApO1xuICBsZXQgbWludXRlcyA9IChtaWxpc2Vjb25kcyAvICgxMDAwICogNjApKTtcbiAgbGV0IGhvdXJzID0gKG1pbGlzZWNvbmRzIC8gKDEwMDAgKiA2MCAqIDYwKSk7XG4gIGxldCBkYXlzID0gKG1pbGlzZWNvbmRzIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcbiAgaWYgKHNlY29uZHMgPCA2MCkgcmV0dXJuIFwiYWZ0ZXIgXCIgKyBzZWNvbmRzICsgXCIgU2VjXCI7XG4gIGVsc2UgaWYgKG1pbnV0ZXMgPCA2MCkgcmV0dXJuIFwiYWZ0ZXIgXCIgKyAgbWludXRlcyArIFwiIE1pblwiO1xuICBlbHNlIGlmIChob3VycyA8IDI0KSByZXR1cm4gXCJhZnRlciBcIiArIGhvdXJzICsgXCIgSHJzXCI7XG4gIGVsc2UgcmV0dXJuIFwiYWZ0ZXIgXCIgKyBkYXlzICsgXCIgRGF5c1wiO1xufSIsImltcG9ydCB7IFByb2RSdWxlIH0gZnJvbSBcIi4uL2RvbWFpbi9wcm9kUnVsZXNcIjtcclxuXHJcbmNvbnN0IHJ1bGVEQk5hbWUgPSBcInByb2R1Y3Rpdml0eVJ1bGVzXCI7XHJcbmludGVyZmFjZSBSdWxlTGlzdCB7XHJcbiAgW2tleTogc3RyaW5nXTogUHJvZFJ1bGVbXVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRBbGxSdWxlcygpIHtcclxuICBsZXQgcnVsZUxpc3QgPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQocnVsZURCTmFtZSk7XHJcbiAgbGV0IHJlc3VsdExpc3Q6IHtba2V5OiBzdHJpbmddOiBhbnl9ID0gdHlwZW9mIHJ1bGVMaXN0ID09PSBcInVuZGVmaW5lZFwiID8ge30gOiBydWxlTGlzdDtcclxuICBpZiAocnVsZURCTmFtZSBpbiBydWxlTGlzdCkge1xyXG4gICAgcmV0dXJuIHJ1bGVMaXN0W3J1bGVEQk5hbWVdO1xyXG4gIH1cclxuICByZXR1cm4gcmVzdWx0TGlzdDtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gYWRkUnVsZShteU5ld1J1bGU6IFByb2RSdWxlKSB7XHJcbiAgY29uc3QgcnVsZUxpc3QgPSBhd2FpdCBnZXRBbGxSdWxlcygpO1xyXG4gIGNvbnN0IHRhcmdldFdlYnNpdGUgPSBteU5ld1J1bGUuc291cmNlO1xyXG5cclxuICBpZiAodGFyZ2V0V2Vic2l0ZSBpbiBydWxlTGlzdCkge1xyXG4gICAgcnVsZUxpc3RbdGFyZ2V0V2Vic2l0ZV0ucHVzaChteU5ld1J1bGUpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBydWxlTGlzdFt0YXJnZXRXZWJzaXRlXSA9IFtteU5ld1J1bGVdO1xyXG4gIH1cclxuICBzZXRSdWxlTGlzdChydWxlTGlzdCk7XHJcbiAgcmV0dXJuIChydWxlTGlzdFt0YXJnZXRXZWJzaXRlXS5sZW5ndGggLSAxKVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiB1cGRhdGVSdWxlKGJhZFNpdGU6IHN0cmluZywgaW5kZXg6IG51bWJlciwgdXBkYXRlZFJ1bGU6IFByb2RSdWxlKSB7XHJcbiAgLy8gbGV0IHJ1bGVMaXN0ID0gYXdhaXQgZ2V0QWxsUnVsZXMoKTtcclxuXHJcbiAgYXdhaXQgZGVsZXRlUnVsZShiYWRTaXRlLCBpbmRleCk7XHJcbiAgcmV0dXJuIGFkZFJ1bGUodXBkYXRlZFJ1bGUpO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBkZWxldGVSdWxlKGJhZFNpdGU6c3RyaW5nLCBpbmRleDogbnVtYmVyKSB7XHJcbiAgbGV0IHJ1bGVMaXN0ID0gYXdhaXQgZ2V0QWxsUnVsZXMoKTtcclxuICBydWxlTGlzdFtiYWRTaXRlXS5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gIGlmKHJ1bGVMaXN0W2JhZFNpdGVdLmxlbmd0aCA9PSAwKXtcclxuICAgIGRlbGV0ZSBydWxlTGlzdFtiYWRTaXRlXVxyXG4gIH1cclxuICBzZXRSdWxlTGlzdChydWxlTGlzdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFJ1bGVMaXN0KHJ1bGVMaXN0OiBSdWxlTGlzdCkge1xyXG4gIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IHByb2R1Y3Rpdml0eVJ1bGVzOiBydWxlTGlzdCB9KTtcclxufVxyXG5cclxuY29uc3QgUGVyc2lzdGFuY2VIYW5kbGVyID0ge1xyXG4gIGdldEFsbFJ1bGVzOiBnZXRBbGxSdWxlcyxcclxuICBhZGRSdWxlOiBhZGRSdWxlLFxyXG4gIGRlbGV0ZVJ1bGU6IGRlbGV0ZVJ1bGUsXHJcbiAgdXBkYXRlUnVsZTogdXBkYXRlUnVsZSxcclxufTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBQZXJzaXN0YW5jZUhhbmRsZXIiLCJpbXBvcnQgeyBBY3Rpb25GYWN0b3J5LCBBY3Rpb25UeXBlIH0gZnJvbSBcIi4uL2RvbWFpbi9hY3Rpb25cIjtcbmltcG9ydCB7IFByb2RSdWxlLCBQcm9kUnVsZUZhY3RvcnksIFJ1bGVDb25kaXRpb24gfSBmcm9tIFwiLi4vZG9tYWluL3Byb2RSdWxlc1wiO1xuaW1wb3J0IFBlcnNpc3RhbmNlSGFuZGxlciBmcm9tIFwiLi4vcGVyc2lzdGFuY2UvcGVyc2lzdGFuY2VcIjtcbmltcG9ydCBQcm9kUnVsZXNWaWV3IGZyb20gXCIuL3Byb2RSdWxlc1ZpZXdcIjtcblxucHJlcGFyZVByb2RSdWxlcygpO1xuY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRSdWxlQnV0dG9uXCIpO1xuY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWRpdFJ1bGVCdXR0b25cIik7XG5cbmZ1bmN0aW9uIHByZXBhcmVQcm9kUnVsZXMoKSB7XG4gIGNvbnNvbGUubG9nKFwicHJlcGFyaW5nIGZvcm0hXCIpXG4gIHByZXBhcmVGb3JtKCk7XG4gIHByZXBhcmVQcm9kUnVsZVRhYmxlKCk7XG4gIHByZXBhcmVBZGRSdWxlQnV0dG9uKCk7XG59XG5cbmZ1bmN0aW9uIHByZXBhcmVGb3JtKCkge1xuICBjb25zdCBtdWx0aXBsZUNob2ljZUZpZWxkcyA9IGdldFN0cmluZ3NGb3JFbnVtcygpO1xuICBsZXQgc2VsZWN0RWxlbWVudDtcbiAgbGV0IG15RGljdDtcbiAgZm9yIChsZXQgZWxlbUlEIGluIG11bHRpcGxlQ2hvaWNlRmllbGRzKSB7XG4gICAgc2VsZWN0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1JRCk7XG4gICAgbXlEaWN0ID0gbXVsdGlwbGVDaG9pY2VGaWVsZHNbZWxlbUlEXTtcbiAgICBmb3IgKGxldCBrZXkgaW4gbXVsdGlwbGVDaG9pY2VGaWVsZHNbZWxlbUlEXSkge1xuICAgICAgbGV0IG9wdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgb3B0aW9uRWxlbWVudC52YWx1ZSA9IGtleTtcbiAgICAgIG9wdGlvbkVsZW1lbnQudGV4dENvbnRlbnQgPSBteURpY3Rba2V5XTtcbiAgICAgIHNlbGVjdEVsZW1lbnQuYXBwZW5kQ2hpbGQob3B0aW9uRWxlbWVudCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldFN0cmluZ3NGb3JFbnVtcygpOiB7W2tleTpzdHJpbmddOiB7W2tleTpzdHJpbmddIDogc3RyaW5nfX0ge1xuICByZXR1cm4ge1xuICAgIHJ1bGVjb25kaXRpb246IHtcbiAgICAgIEFMV0FZUzogXCJhbHdheXNcIixcbiAgICAgIFdPUks6IFwiZHVyaW5nIG15IHdvcmsgdGltZXNcIixcbiAgICAgIEdPQUxTOiBcIndoaWxlIG15IGdvYWxzIGFyZSBub3QgcmVhY2hlZCAoV0lQKVwiLFxuICAgIH0sXG5cbiAgICBhY3Rpb250eXBlOiB7XG4gICAgICBSRURJUkVDVDogXCJyZWRpcmVjdCBtZSB0b1wiLFxuICAgICAgUE9QVVA6IFwic2hvdyBhIHBvcHVwIHdpdGggdGhlIGZvbGxvd2luZyB0ZXh0XCIsXG4gICAgICBGUkFNRTogXCJmcmFtZSB0aGUgdW5wcm9kdWN0aXZlIHBhZ2UgaW4gdGhlIGZvbGxvd2luZyBjb2xvclwiLFxuICAgICAgTE9HOiBcImxvZyBteSB2aXNpdCBvbmx5IChXSVApXCIsXG4gICAgfSxcblxuICAgIGFjdGlvbmRlbGF5OiB7XG4gICAgICAwOiBcImltbWVkaWF0ZWx5XCIsXG4gICAgICAzMDAwMDogXCJhZnRlciAzMCBzZWNvbmRzXCIsXG4gICAgICAzMDAwMDA6IFwiYWZ0ZXIgNSBtaW51dGVzXCIsXG4gICAgICAxMjAwMDAwOiBcImFmdGVyIDIwIG1pbnV0ZXNcIixcbiAgICB9LFxuICB9O1xufVxuXG5hc3luYyBmdW5jdGlvbiBwcmVwYXJlUHJvZFJ1bGVUYWJsZSgpIHtcbiAgY29uc3QgcnVsZUxpc3QgPSBhd2FpdCBQZXJzaXN0YW5jZUhhbmRsZXIuZ2V0QWxsUnVsZXMoKTtcbiAgaWYgKCFydWxlTGlzdCB8fCBydWxlTGlzdC5sZW5ndGggPT0gMCB8fCBPYmplY3Qua2V5cyhydWxlTGlzdCkubGVuZ3RoID09IDApIHtcbiAgICBhZGREZW1vUnVsZSgpO1xuICB9IGVsc2Uge1xuICAgIE9iamVjdC5rZXlzKHJ1bGVMaXN0KS5mb3JFYWNoKCh1bnByb2R1Y3RpdmVTaXRlKSA9PiB7XG4gICAgICBsZXQgcnVsZUluZGV4ID0gMDtcbiAgICAgIHJ1bGVMaXN0W3VucHJvZHVjdGl2ZVNpdGVdLmZvckVhY2goKHJ1bGU6IFByb2RSdWxlKSA9PiB7XG4gICAgICAgIGFkZFRvUHJvZFRhYmxlKHJ1bGUsIHJ1bGVJbmRleCk7XG4gICAgICAgIHJ1bGVJbmRleCsrO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkRGVtb1J1bGUoKSB7XG4gIGNvbnN0IGRlbW9VUkwgPSBcImRlbW9VbnByb2R1Y3RpdmVTaXRlLmNvbVwiO1xuICBjb25zdCBkZW1vQWN0aW9uID0gQWN0aW9uRmFjdG9yeS5jcmVhdGVBY3Rpb24oXCJQT1BVUFwiLCBcIkRvIHlvdSByZWFsbHkgd2FudCB0byBzcGVuZCB0aW1lIG9uIHRoaXMgc2l0ZT9cIilcbiAgY29uc3QgZGVtb1J1bGUgPSBQcm9kUnVsZUZhY3RvcnkuY3JlYXRlUnVsZShkZW1vVVJMLCBkZW1vQWN0aW9uKVxuXG4gIFByb2RSdWxlc1ZpZXcuYWRkRW50cnlUb1RhYmxlKGRlbW9SdWxlLCBcImRlbW9cIik7XG59XG5cbmZ1bmN0aW9uIHByZXBhcmVBZGRSdWxlQnV0dG9uKCkge1xuICBsZXQgYWRkQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRSdWxlQnV0dG9uXCIpO1xuICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICBcImNsaWNrXCIsXG4gICAgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJBZGRpbmcgbmV3IHJ1bGU6XCIpXG4gICAgICBhZGRSdWxlRnJvbUZvcm0oKTtcbiAgICB9LFxuICAgIGZhbHNlXG4gICk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGFkZFJ1bGVGcm9tRm9ybSgpIHtcbiAgY29uc3QgZm9ybURhdGEgPSBQcm9kUnVsZXNWaWV3LmdldEZvcm1EYXRhKCk7XG5cbiAgY29uc3QgYWN0aW9uc291cmNlID0gZm9ybURhdGEuYWN0aW9uc291cmNlXG4gIGNvbnN0IHRhcmdldFZhbCA9IGZvcm1EYXRhLnRhcmdldFZhbFxuICBjb25zdCBhY3Rpb25EZWxheSA9IGZvcm1EYXRhLmRlbGF5O1xuICBjb25zdCBhY3Rpb25Db25kaXRpb24gPSBmb3JtRGF0YS5jb25kaXRpb247XG4gIGNvbnN0IGFjdGlvblR5cGUgPSBmb3JtRGF0YS5hY3Rpb250eXBlO1xuICBjb25zdCBydWxlSUQgPSBmb3JtRGF0YS5ydWxlSUQ7XG5cbiAgbGV0IG5ld0FjdGlvbiA9IEFjdGlvbkZhY3RvcnkuY3JlYXRlQWN0aW9uKGFjdGlvblR5cGUsIHRhcmdldFZhbClcbiAgbGV0IG5ld0VudHJ5ID0gUHJvZFJ1bGVGYWN0b3J5LmNyZWF0ZVJ1bGUoYWN0aW9uc291cmNlLCBuZXdBY3Rpb24sIGFjdGlvbkNvbmRpdGlvbiwgYWN0aW9uRGVsYXkpXG4gIGNvbnNvbGUubG9nKG5ld0VudHJ5KVxuXG4gIGlmIChhY3Rpb25zb3VyY2UgJiYgYWN0aW9uVHlwZSAmJiB0YXJnZXRWYWwpIHtcbiAgICAgIGNvbnN0IHJ1bGVJbmRleCA9IGF3YWl0IFBlcnNpc3RhbmNlSGFuZGxlci5hZGRSdWxlKG5ld0VudHJ5KTtcbiAgICAgIGFkZFRvUHJvZFRhYmxlKG5ld0VudHJ5LCBydWxlSW5kZXgpO1xuICAgIH1cbiAgLyp9IGVsc2Uge1xuICAgIGNvbnN0IGlkX2VsZW1zID0gX2RlY29uc3RydWN0SUQocnVsZUlEKTtcbiAgICBQZXJzaXN0YW5jZUhhbmRsZXIudXBkYXRlUnVsZShcbiAgICAgIGlkX2VsZW1zW1wiYmFkU2l0ZVwiXSxcbiAgICAgIGlkX2VsZW1zW1wiaW5kZXhcIl0sXG4gICAgICBuZXdFbnRyeVxuICAgICk7XG4gIH1cbiAgKi9cbiAgUHJvZFJ1bGVzVmlldy5jbGVhckZvcm0oKTtcbn1cblxuZnVuY3Rpb24gYWRkVG9Qcm9kVGFibGUocHJvZFJ1bGU6IFByb2RSdWxlLCBydWxlSW5kZXg6IG51bWJlcikge1xuICBjb25zdCBydWxlSUQgPSBfZ2V0Um93SUQocHJvZFJ1bGUuc291cmNlLCBydWxlSW5kZXgpXG4gIGNvbnN0IGFjdGlvbkJ1dHRvbnMgPSBQcm9kUnVsZXNWaWV3LmFkZEVudHJ5VG9UYWJsZShwcm9kUnVsZSwgcnVsZUlEKTtcbiAgYWN0aW9uQnV0dG9uc1tcImVkaXRcIl0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgcHJlcGFyZVRvRWRpdChwcm9kUnVsZSwgcnVsZUluZGV4KTtcbiAgfSk7XG5cbiAgYWN0aW9uQnV0dG9uc1tcImRlbGV0ZVwiXS5hZGRFdmVudExpc3RlbmVyKFxuICAgIFwiY2xpY2tcIixcbiAgICBmdW5jdGlvbiAoZSkge1xuICAgICAgZGVsZXRlRW50cnkocHJvZFJ1bGUuc291cmNlLCBydWxlSW5kZXgpO1xuICAgIH0sXG4gICAgZmFsc2VcbiAgKTtcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVRvRWRpdChwcm9kUnVsZTogUHJvZFJ1bGUsIHJ1bGVJbmRleDogbnVtYmVyKSB7XG4gIGNvbnN0IHJ1bGVJRCA9IF9nZXRSb3dJRChwcm9kUnVsZS5zb3VyY2UsIHJ1bGVJbmRleClcbiAgUHJvZFJ1bGVzVmlldy5zZXRGb3JtVmFsdWVzKHByb2RSdWxlLCBydWxlSUQpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVFbnRyeSh1bnByb2R1Y3RpdmVTaXRlOiBzdHJpbmcsIHJ1bGVJbmRleDogbnVtYmVyKSB7XG4gIGNvbnN0IHJ1bGVJRCA9IF9nZXRSb3dJRCh1bnByb2R1Y3RpdmVTaXRlLCBydWxlSW5kZXgpO1xuICBQZXJzaXN0YW5jZUhhbmRsZXIuZGVsZXRlUnVsZSh1bnByb2R1Y3RpdmVTaXRlLCBydWxlSW5kZXgpO1xuICBQcm9kUnVsZXNWaWV3LnJlbW92ZUZyb21UYWJsZShydWxlSUQpO1xufVxuXG5mdW5jdGlvbiBfZ2V0Um93SUQodW5wcm9kdWN0aXZlU2l0ZTogc3RyaW5nLCBydWxlSW5kZXg6IG51bWJlcikge1xuICBjb25zdCByb3dJRCA9IGAke3VucHJvZHVjdGl2ZVNpdGV9LSR7cnVsZUluZGV4fWA7XG4gIHJldHVybiByb3dJRDtcbn1cblxuZnVuY3Rpb24gX2RlY29uc3RydWN0SUQocnVsZUlEOiBzdHJpbmcpIHtcbiAgY29uc3QgaWRfYXJyYXkgPSBydWxlSUQuc3BsaXQoXCItXCIpO1xuICByZXR1cm4ge1xuICAgIGJhZFNpdGU6IGlkX2FycmF5WzBdLFxuICAgIGluZGV4OiBpZF9hcnJheVsxXSxcbiAgfTtcbn1cblxuXG5jb25zdCBQcm9kUnVsZXNDb250cm9sbGVyID0ge1xuICBkZWxldGVFbnRyeTogZGVsZXRlRW50cnksXG4gIHByZXBhcmVUb0VkaXQ6IHByZXBhcmVUb0VkaXQsXG4gIGFkZFRvUHJvZFRhYmxlOiBhZGRUb1Byb2RUYWJsZSxcbiAgYWRkUnVsZUZyb21Gb3JtOiBhZGRSdWxlRnJvbUZvcm0sXG4gIGdldFN0cmluZ3NGb3JFbnVtczogZ2V0U3RyaW5nc0ZvckVudW1zXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2RSdWxlc0NvbnRyb2xsZXIiLCJpbXBvcnQgeyBBY3Rpb25GYWN0b3J5IH0gZnJvbSBcIi4uL2RvbWFpbi9hY3Rpb25cIjtcbmltcG9ydCB7IFByb2RSdWxlIH0gZnJvbSBcIi4uL2RvbWFpbi9wcm9kUnVsZXNcIjtcbmltcG9ydCB7IG1zVG9UaW1lIH0gZnJvbSBcIi4uL2hlbHBlcnMvaGVscGVyc1wiO1xuaW1wb3J0ICogYXMgQ29udHJvbGxlciBmcm9tIFwiLi9wcm9kUnVsZXNDb250cm9sbGVyXCI7XG5cbmNsYXNzIFJ1bGVGb3JtIHtcbiAgICBhY3Rpb25zb3VyY2U6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgYWN0aW9udHlwZTogSFRNTFNlbGVjdEVsZW1lbnQ7XG4gICAgdGFyZ2V0VmFsOiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGNvbmRpdGlvbjogSFRNTFNlbGVjdEVsZW1lbnQ7XG4gICAgZGVsYXk6IEhUTUxTZWxlY3RFbGVtZW50O1xuICAgIHJ1bGVJRDogSFRNTElucHV0RWxlbWVudDtcblxuXG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgIHRoaXMuYWN0aW9uc291cmNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhY3Rpb25zb3VyY2VcIikgYXMgSFRNTElucHV0RWxlbWVudFxuICAgICAgdGhpcy5hY3Rpb250eXBlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhY3Rpb250eXBlXCIpIGFzIEhUTUxTZWxlY3RFbGVtZW50XG4gICAgICB0aGlzLnRhcmdldFZhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFyZ2V0dmFsdWVcIikgYXMgSFRNTElucHV0RWxlbWVudFxuICAgICAgdGhpcy5jb25kaXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJ1bGVjb25kaXRpb25cIikgYXMgSFRNTFNlbGVjdEVsZW1lbnRcbiAgICAgIHRoaXMuZGVsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFjdGlvbmRlbGF5XCIpIGFzIEhUTUxTZWxlY3RFbGVtZW50XG4gICAgICB0aGlzLnJ1bGVJRCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicnVsZUlEXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQgICAgfVxuXG5cbiAgICB0b1N0YXJ0KCl7XG4gICAgICB0aGlzLmFjdGlvbnNvdXJjZS52YWx1ZSA9IFwiXCJcbiAgICAgIHRoaXMuYWN0aW9udHlwZS5zZWxlY3RlZEluZGV4ID0gMFxuICAgICAgdGhpcy50YXJnZXRWYWwudmFsdWUgPSBcIlwiXG4gICAgICB0aGlzLmNvbmRpdGlvbi5zZWxlY3RlZEluZGV4ID0gMFxuICAgICAgdGhpcy5kZWxheS5zZWxlY3RlZEluZGV4ID0gMFxuICAgICAgdGhpcy5ydWxlSUQudmFsdWUgPSBcIk5FV1wiXG4gICAgfVxuXG4gICAgZ2V0VmFsdWVzKCl7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBcImFjdGlvbnNvdXJjZVwiOiB0aGlzLmFjdGlvbnNvdXJjZS52YWx1ZSxcbiAgICAgICAgXCJhY3Rpb250eXBlXCI6IHRoaXMuYWN0aW9udHlwZS52YWx1ZSxcbiAgICAgICAgXCJ0YXJnZXRWYWxcIjogdGhpcy50YXJnZXRWYWwudmFsdWUsXG4gICAgICAgIFwiY29uZGl0aW9uXCI6IHRoaXMuY29uZGl0aW9uLnZhbHVlLFxuICAgICAgICBcImRlbGF5XCI6IHBhcnNlSW50KHRoaXMuZGVsYXkudmFsdWUpLFxuICAgICAgICBcInJ1bGVJRFwiOiB0aGlzLnJ1bGVJRC52YWx1ZVxuICAgICAgfVxuICAgIH1cbn1cblxuY29uc3QgUHJvZFJ1bGVzVmlldyA9IHtcbiAgYWRkRW50cnlUb1RhYmxlOiAocHJvZFJ1bGU6IFByb2RSdWxlLCBydWxlSUQ6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IHRhYmxlSUQgPSBcInByb2R1Y3Rpb25SdWxlVGFibGVcIjtcbiAgICBsZXQgc2V0dGluZ3NUYWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhYmxlSUQpIGFzIEhUTUxUYWJsZUVsZW1lbnQ7XG4gICAgXG4gICAgICBsZXQgbmV3Um93ID0gc2V0dGluZ3NUYWJsZS5pbnNlcnRSb3coLTEpO1xuICAgICAgbGV0IHJ1bGVDZWxsID0gbmV3Um93Lmluc2VydENlbGwoMCk7XG4gICAgICBsZXQgYWN0aW9uc0NlbGwgPSBuZXdSb3cuaW5zZXJ0Q2VsbCgxKTtcblxuICAgICAgbmV3Um93LmlkID0gcnVsZUlEO1xuICAgICAgcnVsZUNlbGwuaW5uZXJIVE1MID0gX2Zvcm1hdFN0cmluZyhwcm9kUnVsZSk7XG4gICAgICBydWxlQ2VsbC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInB4LTJcIik7XG4gICAgICBhY3Rpb25zQ2VsbC5pbm5lckhUTUwgPSBgPGJ1dHRvbiBpZD1cIiR7dGFibGVJRH1fZWRpdF8ke3J1bGVJRH1cIiBjbGFzcz1cInJvdW5kZWQtbGcgYm9yZGVyLXdoaXRlIGJnLW5hdnkgdGV4dC13aGl0ZSBob3ZlcjpiZy1ibHVlUm95YWwgcHgtMiBteC0xIHRleHQtY2VudGVyXCI+ZWRpdDwvYnV0dG9uPlxuICAgIDxidXR0b24gaWQ9XCIke3RhYmxlSUR9X2RlbGV0ZV8ke3J1bGVJRH1cIiBjbGFzcz1cInJvdW5kZWQtbGcgYm9yZGVyLXdoaXRlIGJnLW5hdnkgdGV4dC13aGl0ZSBob3ZlcjpiZy1ibHVlUm95YWwgcHgtMiBteC0xIHRleHQtY2VudGVyXCI+ZGVsZXRlPC9idXR0b24+YDtcblxuICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dGFibGVJRH1fZGVsZXRlXyR7cnVsZUlEfWApO1xuICAgICAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3RhYmxlSUR9X2VkaXRfJHtydWxlSUR9YCk7XG4gICAgICByZXR1cm4geyBlZGl0OiBlZGl0QnV0dG9uLCBkZWxldGU6IGRlbGV0ZUJ1dHRvbiwgZW50cnk6IHJ1bGVDZWxsIH07XG4gIH0sXG5cbiAgcmVtb3ZlRnJvbVRhYmxlOiAocnVsZUlEOnN0cmluZykgPT4ge1xuICAgIGxldCB0b0RlbGV0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHJ1bGVJRClcbiAgICB0b0RlbGV0ZS5yZW1vdmUoKTtcbiAgICBjb25zb2xlLmxvZyhgUmVtb3ZpbmcgcnVsZSBmb3IgJHtydWxlSUR9IWApO1xuICB9LFxuXG4gIGdldEZvcm1EYXRhOiAoKSA9PiB7XG4gICAgbGV0IG15Rm9ybSA9IG5ldyBSdWxlRm9ybSgpXG4gICAgcmV0dXJuIG15Rm9ybS5nZXRWYWx1ZXMoKTtcbiAgfSxcblxuICBjbGVhckZvcm06ICgpID0+IHtcbiAgICBjb25zdCBmb3JtID0gbmV3IFJ1bGVGb3JtKClcbiAgICBmb3JtLnRvU3RhcnQoKVxuICB9LFxuICBzZXRGb3JtVmFsdWVzKGZvcm1WYWx1ZXM6IFByb2RSdWxlLCBydWxlSUQ6IHN0cmluZykge1xuICAgIGxldCBteUZvcm0gPSBuZXcgUnVsZUZvcm0oKVxuICAgIG15Rm9ybS5hY3Rpb25zb3VyY2UudmFsdWUgPSBmb3JtVmFsdWVzLnNvdXJjZVxuICAgIG15Rm9ybS5hY3Rpb250eXBlLnZhbHVlID0gZm9ybVZhbHVlcy5hY3Rpb24udHlwZVxuICAgIG15Rm9ybS50YXJnZXRWYWwudmFsdWUgPSBmb3JtVmFsdWVzLmFjdGlvbi50YXJnZXRWYWx1ZSAgXG4gICAgbXlGb3JtLmNvbmRpdGlvbi52YWx1ZSA9IGZvcm1WYWx1ZXMuY29uZGl0aW9uXG4gICAgbXlGb3JtLmRlbGF5LnZhbHVlID0gZm9ybVZhbHVlcy5kZWxheS50b1N0cmluZygpXG4gICAgXG4gIH1cbn07XG5cbmZ1bmN0aW9uIF9mb3JtYXRTdHJpbmcocHJvZFJ1bGU6IFByb2RSdWxlKSB7XG4gICAgY29uc3QgY29uZGl0aW9uU3RyID0gcHJvZFJ1bGUuY29uZGl0aW9uLnRvTG93ZXJDYXNlKClcbiAgICBjb25zdCBkZWxheVN0ciA9IG1zVG9UaW1lKHByb2RSdWxlLmRlbGF5KVxuXG4gIGNvbnN0IHJlc3VsdHNTdHIgPSAgYDxlbSBjbGFzcz1cInRleHQtbGdcIj4ke3Byb2RSdWxlLnNvdXJjZX08L2VtPiA8YnI+PGI+JHtcbiAgICBjb25kaXRpb25TdHJcbiAgfTwvYj4gd2hlbiBJIHZpc2l0IDxiPiR7cHJvZFJ1bGUuc291cmNlfTwvYj4gdGhlbiA8Yj4ke1xuICAgIGRlbGF5U3RyXG4gIH0gJHtwcm9kUnVsZS5hY3Rpb24udHlwZX0gJHtwcm9kUnVsZS5hY3Rpb24udGFyZ2V0VmFsdWV9PC9iPmA7XG5cbiAgcmV0dXJuIHJlc3VsdHNTdHJcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZFJ1bGVzVmlldyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==