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
/* harmony export */   getStringsForEnums: () => (/* binding */ getStringsForEnums),
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
/* harmony import */ var _helpers_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/helpers */ "./src/helpers/helpers.ts");
/* harmony import */ var _persistance_persistance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../persistance/persistance */ "./src/persistance/persistance.ts");
/* harmony import */ var _prodRulesView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./prodRulesView */ "./src/ui/prodRulesView.ts");
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
var cancelButton = document.getElementById("cancelRuleButton");
function prepareProdRules() {
    console.log("preparing form!");
    prepareForm();
    prepareProdRuleTable();
    prepareAddRuleButton();
    prepareCancelButton();
}
function prepareForm() {
    var multipleChoiceFields = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_2__.getStringsForEnums)();
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
function prepareCancelButton() {
    var cancelButton = document.getElementById("cancelRuleButton");
    cancelButton.addEventListener("click", function (e) {
        e.preventDefault();
        _prodRulesView__WEBPACK_IMPORTED_MODULE_4__["default"].clearForm();
    }, false);
}
function prepareProdRuleTable() {
    return __awaiter(this, void 0, void 0, function () {
        var ruleList;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, _persistance_persistance__WEBPACK_IMPORTED_MODULE_3__["default"].getAllRules()];
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
    _prodRulesView__WEBPACK_IMPORTED_MODULE_4__["default"].addEntryToTable(demoRule, "demo");
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
        var formData, actionsource, targetVal, actionDelay, actionCondition, actionType, ruleID, newAction, newEntry, ruleIndex, id_elems;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    formData = _prodRulesView__WEBPACK_IMPORTED_MODULE_4__["default"].getFormData();
                    actionsource = formData.actionsource;
                    targetVal = formData.targetVal;
                    actionDelay = formData.delay;
                    actionCondition = formData.condition;
                    actionType = formData.actiontype;
                    ruleID = formData.ruleID;
                    newAction = _domain_action__WEBPACK_IMPORTED_MODULE_0__.ActionFactory.createAction(actionType, targetVal);
                    newEntry = _domain_prodRules__WEBPACK_IMPORTED_MODULE_1__.ProdRuleFactory.createRule(actionsource, newAction, actionCondition, actionDelay);
                    console.log(newEntry);
                    if (!(actionsource && actionType && targetVal)) return [3 /*break*/, 4];
                    if (!(ruleID == IDHandler.STANDARD_ID)) return [3 /*break*/, 2];
                    return [4 /*yield*/, _persistance_persistance__WEBPACK_IMPORTED_MODULE_3__["default"].addRule(newEntry)];
                case 1:
                    ruleIndex = _a.sent();
                    addToProdTable(newEntry, ruleIndex);
                    return [3 /*break*/, 4];
                case 2:
                    id_elems = IDHandler.deconstructID(ruleID);
                    return [4 /*yield*/, _persistance_persistance__WEBPACK_IMPORTED_MODULE_3__["default"].updateRule(id_elems["badSite"], id_elems["index"], newEntry)];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    _prodRulesView__WEBPACK_IMPORTED_MODULE_4__["default"].clearForm();
                    _prodRulesView__WEBPACK_IMPORTED_MODULE_4__["default"].clearTable();
                    prepareProdRuleTable();
                    return [2 /*return*/];
            }
        });
    });
}
function addToProdTable(prodRule, ruleIndex) {
    var ruleID = IDHandler.getRowID(prodRule.source, ruleIndex);
    var actionButtons = _prodRulesView__WEBPACK_IMPORTED_MODULE_4__["default"].addEntryToTable(prodRule, ruleID);
    actionButtons["edit"].addEventListener("click", function (e) {
        e.preventDefault();
        prepareToEdit(prodRule, ruleIndex);
    });
    actionButtons["delete"].addEventListener("click", function (e) {
        deleteEntry(prodRule.source, ruleIndex);
    }, false);
}
function prepareToEdit(prodRule, ruleIndex) {
    var ruleID = IDHandler.getRowID(prodRule.source, ruleIndex);
    _prodRulesView__WEBPACK_IMPORTED_MODULE_4__["default"].setFormValues(prodRule, ruleID);
}
function deleteEntry(unproductiveSite, ruleIndex) {
    var ruleID = IDHandler.getRowID(unproductiveSite, ruleIndex);
    _persistance_persistance__WEBPACK_IMPORTED_MODULE_3__["default"].deleteRule(unproductiveSite, ruleIndex);
    _prodRulesView__WEBPACK_IMPORTED_MODULE_4__["default"].removeFromTable(ruleID);
}
var IDHandler = {
    getRowID: function (unproductiveSite, ruleIndex) {
        var rowID = "".concat(unproductiveSite, "-").concat(ruleIndex);
        return rowID;
    },
    deconstructID: function (ruleID) {
        var id_array = ruleID.split("-");
        return {
            badSite: id_array[0],
            index: +id_array[1],
        };
    },
    STANDARD_ID: "NEW"
};
var ProdRulesController = {
    deleteEntry: deleteEntry,
    prepareToEdit: prepareToEdit,
    addToProdTable: addToProdTable,
    addRuleFromForm: addRuleFromForm,
    getStringsForEnums: _helpers_helpers__WEBPACK_IMPORTED_MODULE_2__.getStringsForEnums
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
var ProdTable = {
    tableID: "productionRuleTable",
    addEntry: function (prodRule, ruleID) {
        var prodTable = document.getElementById(ProdTable.tableID);
        var newRow = prodTable.insertRow(-1);
        var ruleCell = newRow.insertCell(0);
        var actionsCell = newRow.insertCell(1);
        newRow.id = ruleID;
        ruleCell.innerHTML = _formatString(prodRule);
        ruleCell.setAttribute("class", "px-2");
        actionsCell.innerHTML = "<button id=\"".concat(ProdTable.tableID, "_edit_").concat(ruleID, "\" class=\"rounded-lg border-white bg-navy text-white hover:bg-blueRoyal px-2 mx-1 text-center\">edit</button>\n    <button id=\"").concat(ProdTable.tableID, "_delete_").concat(ruleID, "\" class=\"rounded-lg border-white bg-navy text-white hover:bg-blueRoyal px-2 mx-1 text-center\">delete</button>");
        var deleteButton = document.getElementById("".concat(ProdTable.tableID, "_delete_").concat(ruleID));
        var editButton = document.getElementById("".concat(ProdTable.tableID, "_edit_").concat(ruleID));
        return { edit: editButton, delete: deleteButton, entry: ruleCell };
    },
    removeRule: function (ruleID) {
        var toDelete = document.getElementById(ruleID);
        toDelete.remove();
        console.log("Removing rule for ".concat(ruleID, "!"));
    },
    clear: function () {
        var prodTable = document.getElementById(ProdTable.tableID);
        var oldBody = prodTable.tBodies[0];
        var newBody = document.createElement('tbody');
        prodTable.replaceChild(newBody, oldBody);
    }
};
var ProdRulesView = {
    addEntryToTable: ProdTable.addEntry,
    clearTable: ProdTable.clear,
    removeFromTable: ProdTable.removeRule,
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
        myForm.ruleID.value = ruleID;
    }
};
function _formatString(prodRule) {
    var enumStrings = (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.getStringsForEnums)();
    var conditionStr = enumStrings.rulecondition[prodRule.condition];
    var actionStr = enumStrings.actiontype[prodRule.action.type];
    var delayStr = enumStrings.actiontype[prodRule.delay] || (0,_helpers_helpers__WEBPACK_IMPORTED_MODULE_0__.msToTime)(prodRule.delay);
    var resultsStr = "<em class=\"text-lg\">".concat(prodRule.source, "</em> <br><b>").concat(conditionStr, "</b> when I visit <b>").concat(prodRule.source, "</b> then <b>").concat(delayStr, " \n  ").concat(actionStr, ": <em>").concat(prodRule.action.targetValue, "</em></b>");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9ucy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUdFLGdCQUFZLFdBQXdCO1FBQXhCLDhDQUF3QjtRQURwQyxTQUFJLEdBQWUsVUFBVSxDQUFDLEdBQUc7UUFFL0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDakMsQ0FBQztJQUVELDhCQUFhLEdBQWI7UUFDRSxPQUFPO0lBQ1QsQ0FBQztJQUNELHlCQUFRLEdBQVI7UUFDRSxPQUFPLGVBQWUsQ0FBQztJQUN6QixDQUFDO0lBQ0gsYUFBQztBQUFELENBQUM7QUFFRDtJQUEwQiwrQkFBTTtJQUU5QixxQkFBWSxVQUFrQjtRQUE5QixZQUNFLGtCQUFNLFVBQVUsQ0FBQyxTQUVsQjtRQURDLEtBQUksQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQzs7SUFDL0IsQ0FBQztJQUVBLG1DQUFhLEdBQWI7UUFDQyxLQUFLLENBQ0gsMERBQW1ELElBQUksQ0FBQyxXQUFXLE1BQUcsQ0FDdkUsQ0FBQztRQUNGLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxxQkFBYyxJQUFJLENBQUMsV0FBVyxDQUFFLENBQUM7SUFDaEUsQ0FBQztJQUVBLDhCQUFRLEdBQVI7UUFDQyxPQUFPLDRCQUFxQixJQUFJLENBQUMsV0FBVyxDQUFFLENBQUM7SUFDakQsQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FBQyxDQWpCeUIsTUFBTSxHQWlCL0I7QUFFRDtJQUEwQiwrQkFBTTtJQUU5QixxQkFBWSxTQUFpQjtRQUE3QixZQUNFLGtCQUFNLFNBQVMsQ0FBQyxTQUVqQjtRQURDLEtBQUksQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQzs7SUFDL0IsQ0FBQztJQUNBLG1DQUFhLEdBQWI7UUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNyQixJQUFJLENBQUMsV0FBVyxHQUFHLG9EQUFvRCxDQUFDO1NBQ3pFO1FBQ0QsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0EsOEJBQVEsR0FBUjtRQUNDLE9BQU8sc0NBQStCLElBQUksQ0FBQyxXQUFXLE1BQUcsQ0FBQztJQUM1RCxDQUFDO0lBQ0gsa0JBQUM7QUFBRCxDQUFDLENBZnlCLE1BQU0sR0FlL0I7QUFFRDtJQUE2QixrQ0FBTTtJQUVqQyx3QkFBWSxVQUFrQjtRQUE5QixZQUNFLGtCQUFNLFVBQVUsQ0FBQyxTQUVsQjtRQURDLEtBQUksQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDLFFBQVEsQ0FBQzs7SUFDbEMsQ0FBQztJQUNBLHNDQUFhLEdBQWI7UUFDQyxLQUFLLENBQUMsb0RBQTZDLElBQUksQ0FBQyxXQUFXLE1BQUcsQ0FBQyxDQUFDO1FBQ3hFLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztZQUNuRCxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVc7WUFDbEIsQ0FBQyxDQUFDLGtCQUFXLElBQUksQ0FBQyxXQUFXLENBQUUsQ0FBQztRQUNsQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxXQUFXLENBQUM7SUFDckMsQ0FBQztJQUNBLGlDQUFRLEdBQVI7UUFDQyxPQUFPLHNCQUFlLElBQUksQ0FBQyxXQUFXLENBQUUsQ0FBQztJQUMzQyxDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLENBaEI0QixNQUFNLEdBZ0JsQztBQUVELElBQUssVUFLSjtBQUxELFdBQUssVUFBVTtJQUNiLG1DQUFxQjtJQUNyQiw2QkFBZTtJQUNmLDZCQUFlO0lBQ2YseUJBQVc7QUFDYixDQUFDLEVBTEksVUFBVSxLQUFWLFVBQVUsUUFLZDtBQUFBLENBQUM7QUFFRixJQUFNLGFBQWEsR0FBRztJQUNwQixZQUFZLFlBQUMsSUFBWSxFQUFFLFdBQW1CO1FBQzVDLFFBQVEsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFO1lBQzFCLEtBQUssVUFBVSxDQUFDLEtBQUs7Z0JBQ25CLE9BQU8sSUFBSSxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDdEMsS0FBSyxVQUFVLENBQUMsUUFBUTtnQkFDdEIsT0FBTyxJQUFJLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUN6QyxLQUFLLFVBQVUsQ0FBQyxLQUFLO2dCQUNuQixPQUFPLElBQUksV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3RDO2dCQUNFLE1BQU0sOERBQThELENBQUM7U0FDeEU7SUFDSCxDQUFDO0NBQ0YsQ0FBQztBQUUyQztBQUM3QyxpRUFBZSxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUZ1QztBQUNoQjtBQUU1QztJQUtFLGtCQUNFLFVBQWtCLEVBQ2xCLE1BQXVELEVBQ3ZELFNBQWdDLEVBQ2hDLEtBQWlCO1FBRmpCLG9DQUFXLElBQUksRUFBRSwrQ0FBVSxDQUFDLEtBQUssRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFO1FBQ3ZELHdDQUFZLGFBQWEsQ0FBQyxNQUFNO1FBQ2hDLGlDQUFpQjtRQUVqQixJQUFJLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQztRQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLE1BQU0sWUFBWSwyQ0FBTSxFQUFFO1lBQzVCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1NBQ3RCO2FBQU07WUFDTCxJQUFJLE9BQU8sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQzFCLElBQUksTUFBTSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7WUFDaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxrREFBYSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDM0Q7SUFDSCxDQUFDO0lBRUQsNEJBQVMsR0FBVDtRQUFBLGlCQUlDO1FBSEcsVUFBVSxDQUFDO1lBQ1QsS0FBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUM5QixDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25CLENBQUM7SUFFRCwyQkFBUSxHQUFSO1FBQ0UsSUFBTSxRQUFRLEdBQUcsMERBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEMsT0FBTyxVQUFHLElBQUksQ0FBQyxTQUFTLDJCQUN0QixJQUFJLENBQUMsTUFBTSxtQkFDSixRQUFRLGNBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBRSxDQUFDO0lBQ2hELENBQUM7SUFDSCxlQUFDO0FBQUQsQ0FBQztBQUVELElBQU0sZUFBZSxHQUFHO0lBQ3RCLFVBQVUsWUFBQyxVQUFrQixFQUFFLE1BQWMsRUFBRSxTQUE0QixFQUFFLEtBQWlCO1FBQS9DLGdEQUE0QjtRQUFFLGlDQUFpQjtRQUM1RixJQUFJO1lBQ0YsU0FBUyxHQUFHLFNBQVMsQ0FBQyxXQUFXLEVBQUU7WUFDbkMsSUFBRyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBQztnQkFDaEQsSUFBTSxjQUFjLEdBQWtCLGFBQWEsQ0FBQyxTQUF1QyxDQUFDO2dCQUM1RixPQUFPLElBQUksUUFBUSxDQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQ2hFO1NBQ0Y7UUFDRCxPQUFNLENBQUMsRUFBRTtZQUNQLE1BQU0sQ0FBQztZQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ2Y7SUFJSCxDQUFDO0lBQ0Qsa0JBQWtCLFlBQUMsS0FBVTtRQUMzQixJQUFNLE1BQU0sR0FBRyxrREFBYSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUV0RixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDO0lBQzVFLENBQUM7Q0FDRixDQUFDO0FBRUYsSUFBSyxhQUlKO0FBSkQsV0FBSyxhQUFhO0lBQ2hCLGtDQUFpQjtJQUNqQiw4QkFBYTtJQUNiLDhCQUFhO0FBQ2YsQ0FBQyxFQUpJLGFBQWEsS0FBYixhQUFhLFFBSWpCO0FBRWlEOzs7Ozs7Ozs7Ozs7Ozs7O0FDcEUzQyxTQUFTLFFBQVEsQ0FBQyxXQUFtQjtJQUMxQyxJQUFJLFdBQVcsSUFBSSxDQUFDO1FBQUUsT0FBTyxhQUFhLENBQUM7SUFDM0MsSUFBSSxPQUFPLEdBQUcsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDbkMsSUFBSSxPQUFPLEdBQUcsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMxQyxJQUFJLEtBQUssR0FBRyxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM3QyxJQUFJLElBQUksR0FBRyxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDakQsSUFBSSxPQUFPLEdBQUcsRUFBRTtRQUFFLE9BQU8sUUFBUSxHQUFHLE9BQU8sR0FBRyxNQUFNLENBQUM7U0FDaEQsSUFBSSxPQUFPLEdBQUcsRUFBRTtRQUFFLE9BQU8sUUFBUSxHQUFJLE9BQU8sR0FBRyxNQUFNLENBQUM7U0FDdEQsSUFBSSxLQUFLLEdBQUcsRUFBRTtRQUFFLE9BQU8sUUFBUSxHQUFHLEtBQUssR0FBRyxNQUFNLENBQUM7O1FBQ2pELE9BQU8sUUFBUSxHQUFHLElBQUksR0FBRyxPQUFPLENBQUM7QUFDeEMsQ0FBQztBQUVNLFNBQVMsa0JBQWtCO0lBQ2hDLE9BQU87UUFDTCxhQUFhLEVBQUU7WUFDYixNQUFNLEVBQUUsUUFBUTtZQUNoQixJQUFJLEVBQUUsc0JBQXNCO1lBQzVCLEtBQUssRUFBRSxzQ0FBc0M7U0FDOUM7UUFFRCxVQUFVLEVBQUU7WUFDVixRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLEtBQUssRUFBRSxzQ0FBc0M7WUFDN0MsS0FBSyxFQUFFLG9EQUFvRDtZQUMzRCxHQUFHLEVBQUUseUJBQXlCO1NBQy9CO1FBRUQsV0FBVyxFQUFFO1lBQ1gsQ0FBQyxFQUFFLGFBQWE7WUFDaEIsS0FBSyxFQUFFLGtCQUFrQjtZQUN6QixNQUFNLEVBQUUsaUJBQWlCO1lBQ3pCLE9BQU8sRUFBRSxrQkFBa0I7U0FDNUI7S0FDRixDQUFDO0FBQ0osQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbENELElBQU0sVUFBVSxHQUFHLG1CQUFtQixDQUFDO0FBS3ZDLFNBQWUsV0FBVzs7Ozs7d0JBQ1QscUJBQU0sTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQzs7b0JBQXJELFFBQVEsR0FBRyxTQUEwQztvQkFDckQsVUFBVSxHQUF5QixPQUFPLFFBQVEsS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO29CQUN2RixJQUFJLFVBQVUsSUFBSSxRQUFRLEVBQUU7d0JBQzFCLHNCQUFPLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBQztxQkFDN0I7b0JBQ0Qsc0JBQU8sVUFBVSxFQUFDOzs7O0NBQ25CO0FBRUQsU0FBZSxPQUFPLENBQUMsU0FBbUI7Ozs7O3dCQUN2QixxQkFBTSxXQUFXLEVBQUU7O29CQUE5QixRQUFRLEdBQUcsU0FBbUI7b0JBQzlCLGFBQWEsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDO29CQUV2QyxJQUFJLGFBQWEsSUFBSSxRQUFRLEVBQUU7d0JBQzdCLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7cUJBQ3pDO3lCQUFNO3dCQUNMLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO3FCQUN2QztvQkFDRCxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ3RCLHNCQUFPLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7Ozs7Q0FDNUM7QUFFRCxTQUFlLFVBQVUsQ0FBQyxPQUFlLEVBQUUsS0FBYSxFQUFFLFdBQXFCOzs7OztnQkFDN0Usc0NBQXNDO2dCQUV0QyxxQkFBTSxVQUFVLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQzs7b0JBRmhDLHNDQUFzQztvQkFFdEMsU0FBZ0MsQ0FBQztvQkFDakMsc0JBQU8sT0FBTyxDQUFDLFdBQVcsQ0FBQyxFQUFDOzs7O0NBQzdCO0FBRUQsU0FBZSxVQUFVLENBQUMsT0FBYyxFQUFFLEtBQWE7Ozs7O3dCQUN0QyxxQkFBTSxXQUFXLEVBQUU7O29CQUE5QixRQUFRLEdBQUcsU0FBbUI7b0JBQ2xDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUNuQyxJQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFDO3dCQUMvQixPQUFPLFFBQVEsQ0FBQyxPQUFPLENBQUM7cUJBQ3pCO29CQUNELFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7Ozs7Q0FDdkI7QUFFRCxTQUFTLFdBQVcsQ0FBQyxRQUFrQjtJQUNyQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO0FBQzVELENBQUM7QUFFRCxJQUFNLGtCQUFrQixHQUFHO0lBQ3pCLFdBQVcsRUFBRSxXQUFXO0lBQ3hCLE9BQU8sRUFBRSxPQUFPO0lBQ2hCLFVBQVUsRUFBRSxVQUFVO0lBQ3RCLFVBQVUsRUFBRSxVQUFVO0NBQ3ZCLENBQUM7QUFHRixpRUFBZSxrQkFBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekQ0QjtBQUNrQjtBQUN2QjtBQUNJO0FBQ2hCO0FBRTVDLGdCQUFnQixFQUFFLENBQUM7QUFDbkIsSUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUMzRCxJQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFFakUsU0FBUyxnQkFBZ0I7SUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQztJQUM5QixXQUFXLEVBQUUsQ0FBQztJQUNkLG9CQUFvQixFQUFFLENBQUM7SUFDdkIsb0JBQW9CLEVBQUUsQ0FBQztJQUN2QixtQkFBbUIsRUFBRSxDQUFDO0FBQ3hCLENBQUM7QUFFRCxTQUFTLFdBQVc7SUFDbEIsSUFBTSxvQkFBb0IsR0FBRyxvRUFBa0IsRUFBRSxDQUFDO0lBQ2xELElBQUksYUFBYSxDQUFDO0lBQ2xCLElBQUksTUFBTSxDQUFDO0lBQ1gsS0FBSyxJQUFJLE1BQU0sSUFBSSxvQkFBb0IsRUFBRTtRQUN2QyxhQUFhLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoRCxNQUFNLEdBQUcsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEMsS0FBSyxJQUFJLEdBQUcsSUFBSSxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUM1QyxJQUFJLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3JELGFBQWEsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1lBQzFCLGFBQWEsQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3hDLGFBQWEsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDMUM7S0FDRjtBQUNILENBQUM7QUFFRCxTQUFTLG1CQUFtQjtJQUM1QixJQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFFL0QsWUFBWSxDQUFDLGdCQUFnQixDQUMzQixPQUFPLEVBQ1AsVUFBVSxDQUFDO1FBQ1QsQ0FBQyxDQUFDLGNBQWMsRUFBRTtRQUNsQixzREFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQzVCLENBQUMsRUFDRCxLQUFLLENBQ04sQ0FBQztBQUNKLENBQUM7QUFFRCxTQUFlLG9CQUFvQjs7Ozs7d0JBQ2hCLHFCQUFNLGdFQUFrQixDQUFDLFdBQVcsRUFBRTs7b0JBQWpELFFBQVEsR0FBRyxTQUFzQztvQkFDdkQsSUFBSSxDQUFDLFFBQVEsSUFBSSxRQUFRLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7d0JBQzFFLFdBQVcsRUFBRSxDQUFDO3FCQUNmO3lCQUFNO3dCQUNMLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsZ0JBQWdCOzRCQUM3QyxJQUFJLFNBQVMsR0FBRyxDQUFDLENBQUM7NEJBQ2xCLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQWM7Z0NBQ2hELGNBQWMsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7Z0NBQ2hDLFNBQVMsRUFBRSxDQUFDOzRCQUNkLENBQUMsQ0FBQyxDQUFDO3dCQUNMLENBQUMsQ0FBQyxDQUFDO3FCQUNKOzs7OztDQUNGO0FBRUQsU0FBUyxXQUFXO0lBQ2xCLElBQU0sT0FBTyxHQUFHLDBCQUEwQixDQUFDO0lBQzNDLElBQU0sVUFBVSxHQUFHLHlEQUFhLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxnREFBZ0QsQ0FBQztJQUN4RyxJQUFNLFFBQVEsR0FBRyw4REFBZSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDO0lBRWhFLHNEQUFhLENBQUMsZUFBZSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUNsRCxDQUFDO0FBRUQsU0FBUyxvQkFBb0I7SUFDM0IsSUFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUN6RCxTQUFTLENBQUMsZ0JBQWdCLENBQ3hCLE9BQU8sRUFDUCxVQUFVLENBQUM7UUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDO1FBQ2pDLGVBQWUsRUFBRSxDQUFDO0lBQ3BCLENBQUMsRUFDRCxLQUFLLENBQ04sQ0FBQztBQUNKLENBQUM7QUFFRCxTQUFlLGVBQWU7Ozs7OztvQkFDdEIsUUFBUSxHQUFHLHNEQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7b0JBRXZDLFlBQVksR0FBRyxRQUFRLENBQUMsWUFBWTtvQkFDcEMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxTQUFTO29CQUM5QixXQUFXLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQztvQkFDN0IsZUFBZSxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUM7b0JBQ3JDLFVBQVUsR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDO29CQUNqQyxNQUFNLEdBQVcsUUFBUSxDQUFDLE1BQWdCLENBQUM7b0JBRTdDLFNBQVMsR0FBRyx5REFBYSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsU0FBUyxDQUFDO29CQUM3RCxRQUFRLEdBQUcsOERBQWUsQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsV0FBVyxDQUFDO29CQUNoRyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQzt5QkFFakIsYUFBWSxJQUFJLFVBQVUsSUFBSSxTQUFTLEdBQXZDLHdCQUF1Qzt5QkFDdEMsT0FBTSxJQUFJLFNBQVMsQ0FBQyxXQUFXLEdBQS9CLHdCQUErQjtvQkFDZCxxQkFBTSxnRUFBa0IsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDOztvQkFBdEQsU0FBUyxHQUFHLFNBQTBDO29CQUM1RCxjQUFjLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDOzs7b0JBRzlCLFFBQVEsR0FBRyxTQUFTLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUNqRCxxQkFBTSxnRUFBa0IsQ0FBQyxVQUFVLENBQ2pDLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFDbkIsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUNqQixRQUFRLENBQ1Q7O29CQUpELFNBSUMsQ0FBQzs7O29CQUdOLHNEQUFhLENBQUMsU0FBUyxFQUFFLENBQUM7b0JBQzFCLHNEQUFhLENBQUMsVUFBVSxFQUFFLENBQUM7b0JBQzNCLG9CQUFvQixFQUFFLENBQUM7Ozs7O0NBQ3hCO0FBRUQsU0FBUyxjQUFjLENBQUMsUUFBa0IsRUFBRSxTQUFpQjtJQUMzRCxJQUFNLE1BQU0sR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDO0lBQzdELElBQU0sYUFBYSxHQUFHLHNEQUFhLENBQUMsZUFBZSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUN0RSxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQztRQUN6RCxDQUFDLENBQUMsY0FBYyxFQUFFO1FBQ2xCLGFBQWEsQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDckMsQ0FBQyxDQUFDLENBQUM7SUFFSCxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsZ0JBQWdCLENBQ3RDLE9BQU8sRUFDUCxVQUFVLENBQUM7UUFDVCxXQUFXLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQztJQUMxQyxDQUFDLEVBQ0QsS0FBSyxDQUNOLENBQUM7QUFDSixDQUFDO0FBRUQsU0FBUyxhQUFhLENBQUMsUUFBa0IsRUFBRSxTQUFpQjtJQUMxRCxJQUFNLE1BQU0sR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDO0lBQzdELHNEQUFhLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUNoRCxDQUFDO0FBRUQsU0FBUyxXQUFXLENBQUMsZ0JBQXdCLEVBQUUsU0FBaUI7SUFDOUQsSUFBTSxNQUFNLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUMvRCxnRUFBa0IsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDM0Qsc0RBQWEsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDeEMsQ0FBQztBQUdELElBQU0sU0FBUyxHQUFHO0lBQ2xCLFFBQVEsRUFBRSxVQUFDLGdCQUF3QixFQUFFLFNBQWlCO1FBQ3BELElBQU0sS0FBSyxHQUFHLFVBQUcsZ0JBQWdCLGNBQUksU0FBUyxDQUFFLENBQUM7UUFDakQsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsYUFBYSxFQUFFLFVBQUMsTUFBYztRQUM1QixJQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25DLE9BQU87WUFDTCxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNwQixLQUFLLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1NBQ3BCLENBQUM7SUFDSixDQUFDO0lBRUQsV0FBVyxFQUFFLEtBQUs7Q0FDakI7QUFJRCxJQUFNLG1CQUFtQixHQUFHO0lBQzFCLFdBQVcsRUFBRSxXQUFXO0lBQ3hCLGFBQWEsRUFBRSxhQUFhO0lBQzVCLGNBQWMsRUFBRSxjQUFjO0lBQzlCLGVBQWUsRUFBRSxlQUFlO0lBQ2hDLGtCQUFrQixFQUFFLGdFQUFrQjtDQUN2QztBQUVELGlFQUFlLG1CQUFtQjs7Ozs7Ozs7Ozs7Ozs7OztBQ3pLZ0M7QUFHbEU7SUFTSTtRQUNFLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQXFCO1FBQy9FLElBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQXNCO1FBQzVFLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQXFCO1FBQzNFLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQXNCO1FBQzlFLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQXNCO1FBQ3hFLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQXFCO0lBQUksQ0FBQztJQUcxRSwwQkFBTyxHQUFQO1FBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEdBQUcsRUFBRTtRQUM1QixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsR0FBRyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLEVBQUU7UUFDekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEdBQUcsQ0FBQztRQUNoQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsR0FBRyxDQUFDO1FBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLEtBQUs7SUFDM0IsQ0FBQztJQUVELDRCQUFTLEdBQVQ7UUFDRSxPQUFPO1lBQ0wsY0FBYyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSztZQUN2QyxZQUFZLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLO1lBQ25DLFdBQVcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUs7WUFDakMsV0FBVyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSztZQUNqQyxPQUFPLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1lBQ25DLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7U0FDNUI7SUFDSCxDQUFDO0lBQ0wsZUFBQztBQUFELENBQUM7QUFFRCxJQUFNLFNBQVMsR0FBRztJQUNoQixPQUFPLEVBQUUscUJBQXFCO0lBRTlCLFFBQVEsRUFBRSxVQUFDLFFBQWtCLEVBQUUsTUFBYztRQUN6QyxJQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQXFCO1FBQ2hGLElBQUksTUFBTSxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQyxJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLElBQUksV0FBVyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFdkMsTUFBTSxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUM7UUFDbkIsUUFBUSxDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDN0MsUUFBUSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDdkMsV0FBVyxDQUFDLFNBQVMsR0FBRyx1QkFBZSxTQUFTLENBQUMsT0FBTyxtQkFBUyxNQUFNLDhJQUMzRCxTQUFTLENBQUMsT0FBTyxxQkFBVyxNQUFNLHFIQUErRyxDQUFDO1FBRTlKLElBQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBRyxTQUFTLENBQUMsT0FBTyxxQkFBVyxNQUFNLENBQUUsQ0FBQyxDQUFDO1FBQ3RGLElBQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBRyxTQUFTLENBQUMsT0FBTyxtQkFBUyxNQUFNLENBQUUsQ0FBQyxDQUFDO1FBQ2xGLE9BQU8sRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxDQUFDO0lBQ3ZFLENBQUM7SUFFRCxVQUFVLEVBQUUsVUFBQyxNQUFhO1FBQ3hCLElBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDO1FBQzlDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUFxQixNQUFNLE1BQUcsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFQyxLQUFLLEVBQUU7UUFDTCxJQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQXFCO1FBQ2hGLElBQU0sT0FBTyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLElBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDaEQsU0FBUyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDO0lBQzVDLENBQUM7Q0FFRjtBQUVELElBQU0sYUFBYSxHQUFHO0lBRXBCLGVBQWUsRUFBRSxTQUFTLENBQUMsUUFBUTtJQUNuQyxVQUFVLEVBQUUsU0FBUyxDQUFDLEtBQUs7SUFDM0IsZUFBZSxFQUFFLFNBQVMsQ0FBQyxVQUFVO0lBSXJDLFdBQVcsRUFBRTtRQUNYLElBQUksTUFBTSxHQUFHLElBQUksUUFBUSxFQUFFO1FBQzNCLE9BQU8sTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCxTQUFTLEVBQUU7UUFDVCxJQUFNLElBQUksR0FBRyxJQUFJLFFBQVEsRUFBRTtRQUMzQixJQUFJLENBQUMsT0FBTyxFQUFFO0lBQ2hCLENBQUM7SUFFRCxhQUFhLFlBQUMsVUFBb0IsRUFBRSxNQUFjO1FBQ2hELElBQUksTUFBTSxHQUFHLElBQUksUUFBUSxFQUFFO1FBQzNCLE1BQU0sQ0FBQyxZQUFZLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxNQUFNO1FBQzdDLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSTtRQUNoRCxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLFdBQVc7UUFDdEQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLFNBQVM7UUFDN0MsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUU7UUFDaEQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsTUFBTTtJQUU5QixDQUFDO0NBQ0YsQ0FBQztBQUVGLFNBQVMsYUFBYSxDQUFDLFFBQWtCO0lBQ3JDLElBQU0sV0FBVyxHQUFHLG9FQUFrQixFQUFFO0lBQ3hDLElBQU0sWUFBWSxHQUFHLFdBQVcsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQztJQUNsRSxJQUFNLFNBQVMsR0FBRyxXQUFXLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQzlELElBQU0sUUFBUSxHQUFHLFdBQVcsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLDBEQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztJQUVyRixJQUFNLFVBQVUsR0FBSSxnQ0FBdUIsUUFBUSxDQUFDLE1BQU0sMEJBQ3hELFlBQVksa0NBQ1UsUUFBUSxDQUFDLE1BQU0sMEJBQWdCLFFBQVEsa0JBQzdELFNBQVMsbUJBQVMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxXQUFXLGNBQVcsQ0FBQztJQUUzRCxPQUFPLFVBQVU7QUFDbkIsQ0FBQztBQUVELGlFQUFlLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NeUxpYnJhcnkvLi9zcmMvZG9tYWluL2FjdGlvbi50cyIsIndlYnBhY2s6Ly9NeUxpYnJhcnkvLi9zcmMvZG9tYWluL3Byb2RSdWxlcy50cyIsIndlYnBhY2s6Ly9NeUxpYnJhcnkvLi9zcmMvaGVscGVycy9oZWxwZXJzLnRzIiwid2VicGFjazovL015TGlicmFyeS8uL3NyYy9wZXJzaXN0YW5jZS9wZXJzaXN0YW5jZS50cyIsIndlYnBhY2s6Ly9NeUxpYnJhcnkvLi9zcmMvdWkvcHJvZFJ1bGVzQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9NeUxpYnJhcnkvLi9zcmMvdWkvcHJvZFJ1bGVzVmlldy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBY3Rpb24ge1xyXG4gIHRhcmdldFZhbHVlOiBzdHJpbmc7XHJcbiAgdHlwZTogQWN0aW9uVHlwZSA9IEFjdGlvblR5cGUuTE9HXHJcbiAgY29uc3RydWN0b3IodGFyZ2V0VmFsdWU6IHN0cmluZyA9IFwiXCIpIHtcclxuICAgIHRoaXMudGFyZ2V0VmFsdWUgPSB0YXJnZXRWYWx1ZTtcclxuICB9XHJcblxyXG4gIHBlcmZvcm1BY3Rpb24oKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIHRvU3RyaW5nKCkge1xyXG4gICAgcmV0dXJuIGBhcHBseSBhIHJ1bGUhYDtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIEZyYW1lQWN0aW9uIGV4dGVuZHMgQWN0aW9uIHtcclxuICAgdHlwZTogQWN0aW9uVHlwZTtcclxuICBjb25zdHJ1Y3RvcihmcmFtZUNvbG9yOiBzdHJpbmcpIHtcclxuICAgIHN1cGVyKGZyYW1lQ29sb3IpO1xyXG4gICAgdGhpcy50eXBlID0gQWN0aW9uVHlwZS5GUkFNRTtcclxuICB9XHJcblxyXG4gICBwZXJmb3JtQWN0aW9uKCkge1xyXG4gICAgYWxlcnQoXHJcbiAgICAgIGBUaGlzIHNpdGUgaXMgdW5wcm9kdWN0aXZlISBGcmFtaW5nIHRoaXMgc2l0ZSBpbiAke3RoaXMudGFyZ2V0VmFsdWV9LmBcclxuICAgICk7XHJcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJvcmRlciA9IGAxMHB4IHNvbGlkICR7dGhpcy50YXJnZXRWYWx1ZX1gO1xyXG4gIH1cclxuXHJcbiAgIHRvU3RyaW5nKCkge1xyXG4gICAgcmV0dXJuIGBmcmFtZSB0aGUgc2l0ZSBpbiAke3RoaXMudGFyZ2V0VmFsdWV9YDtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIFBvcHVwQWN0aW9uIGV4dGVuZHMgQWN0aW9uIHtcclxuICAgdHlwZTogQWN0aW9uVHlwZTtcclxuICBjb25zdHJ1Y3Rvcihwb3B1cFRleHQ6IHN0cmluZykge1xyXG4gICAgc3VwZXIocG9wdXBUZXh0KTtcclxuICAgIHRoaXMudHlwZSA9IEFjdGlvblR5cGUuUE9QVVA7XHJcbiAgfVxyXG4gICBwZXJmb3JtQWN0aW9uKCkge1xyXG4gICAgaWYgKCF0aGlzLnRhcmdldFZhbHVlKSB7XHJcbiAgICAgIHRoaXMudGFyZ2V0VmFsdWUgPSBcIkRvIHlvdSB0cnVseSB3YW50IHRvIHNwZW5kIG1vcmUgdGltZSBvbiB0aGlzIHNpdGU/XCI7XHJcbiAgICB9XHJcbiAgICBhbGVydCh0aGlzLnRhcmdldFZhbHVlKTtcclxuICB9XHJcbiAgIHRvU3RyaW5nKCkge1xyXG4gICAgcmV0dXJuIGBzaG93IGEgcG9wdXAgdGhhdCBzYXlzOiBcXG4gJyR7dGhpcy50YXJnZXRWYWx1ZX0nYDtcclxuICB9XHJcbn1cclxuXHJcbmNsYXNzIFJlZGlyZWN0QWN0aW9uIGV4dGVuZHMgQWN0aW9uIHtcclxuICAgdHlwZTogQWN0aW9uVHlwZTtcclxuICBjb25zdHJ1Y3RvcihyZWRpcmVjdFRvOiBzdHJpbmcpIHtcclxuICAgIHN1cGVyKHJlZGlyZWN0VG8pO1xyXG4gICAgdGhpcy50eXBlID0gQWN0aW9uVHlwZS5SRURJUkVDVDtcclxuICB9XHJcbiAgIHBlcmZvcm1BY3Rpb24oKSB7XHJcbiAgICBhbGVydChgVGhpcyBzaXRlIGlzIHVucHJvZHVjdGl2ZSEgUmVkaXJlY3RpbmcgdG8gJHt0aGlzLnRhcmdldFZhbHVlfS5gKTtcclxuICAgIGxldCB0YXJnZXRWYWx1ZSA9IHRoaXMudGFyZ2V0VmFsdWUuc3RhcnRzV2l0aChcImh0dHBcIilcclxuICAgICAgPyB0aGlzLnRhcmdldFZhbHVlXHJcbiAgICAgIDogYGh0dHBzOi8vJHt0aGlzLnRhcmdldFZhbHVlfWA7XHJcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHRhcmdldFZhbHVlO1xyXG4gIH1cclxuICAgdG9TdHJpbmcoKSB7XHJcbiAgICByZXR1cm4gYHJlZGlyZWN0IHRvICR7dGhpcy50YXJnZXRWYWx1ZX1gO1xyXG4gIH1cclxufVxyXG5cclxuZW51bSBBY3Rpb25UeXBlIHtcclxuICBSRURJUkVDVCA9IFwiUkVESVJFQ1RcIixcclxuICBQT1BVUCA9IFwiUE9QVVBcIixcclxuICBGUkFNRSA9IFwiRlJBTUVcIixcclxuICBMT0cgPSBcIkxPR1wiLFxyXG59O1xyXG5cclxuY29uc3QgQWN0aW9uRmFjdG9yeSA9IHtcclxuICBjcmVhdGVBY3Rpb24odHlwZTogc3RyaW5nLCB0YXJnZXRWYWx1ZTogc3RyaW5nKTogQWN0aW9uIHtcclxuICAgIHN3aXRjaCAodHlwZS50b1VwcGVyQ2FzZSgpKSB7XHJcbiAgICAgIGNhc2UgQWN0aW9uVHlwZS5GUkFNRTpcclxuICAgICAgICByZXR1cm4gbmV3IEZyYW1lQWN0aW9uKHRhcmdldFZhbHVlKTtcclxuICAgICAgY2FzZSBBY3Rpb25UeXBlLlJFRElSRUNUOlxyXG4gICAgICAgIHJldHVybiBuZXcgUmVkaXJlY3RBY3Rpb24odGFyZ2V0VmFsdWUpO1xyXG4gICAgICBjYXNlIEFjdGlvblR5cGUuUE9QVVA6XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQb3B1cEFjdGlvbih0YXJnZXRWYWx1ZSk7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgdGhyb3cgXCJVbmtub3duIGFjdGlvbiB0eXBlISBNdXN0IGJlIGRlZmluZWQgaW4gdGhlIEFjdGlvblR5cGUgRW51bS5cIjtcclxuICAgIH1cclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IHsgQWN0aW9uLCBBY3Rpb25GYWN0b3J5LCBBY3Rpb25UeXBlIH07XHJcbmV4cG9ydCBkZWZhdWx0IEFjdGlvbiIsImltcG9ydCB7IEFjdGlvbiwgQWN0aW9uVHlwZSwgQWN0aW9uRmFjdG9yeSB9IGZyb20gXCIuL2FjdGlvblwiXG5pbXBvcnQge21zVG9UaW1lIH0gZnJvbSBcIi4uL2hlbHBlcnMvaGVscGVyc1wiXG5cbmNsYXNzIFByb2RSdWxlIHtcbiAgc291cmNlOiBzdHJpbmdcbiAgYWN0aW9uOiBBY3Rpb25cbiAgY29uZGl0aW9uOiBSdWxlQ29uZGl0aW9uXG4gIGRlbGF5OiBudW1iZXJcbiAgY29uc3RydWN0b3IoXG4gICAgYmFkV2Vic2l0ZTogc3RyaW5nLFxuICAgIGFjdGlvbiA9IHsgdHlwZTogQWN0aW9uVHlwZS5GUkFNRSwgdGFyZ2V0VmFsdWU6IFwicmVkXCIgfSxcbiAgICBjb25kaXRpb24gPSBSdWxlQ29uZGl0aW9uLkFMV0FZUyxcbiAgICBkZWxheTogbnVtYmVyID0gMFxuICApIHtcbiAgICB0aGlzLnNvdXJjZSA9IGJhZFdlYnNpdGU7XG4gICAgdGhpcy5kZWxheSA9IGRlbGF5O1xuICAgIHRoaXMuY29uZGl0aW9uID0gY29uZGl0aW9uO1xuICAgIGlmIChhY3Rpb24gaW5zdGFuY2VvZiBBY3Rpb24pIHtcbiAgICAgIHRoaXMuYWN0aW9uID0gYWN0aW9uO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgdG1wVHlwZSA9IGFjdGlvbi50eXBlO1xuICAgICAgbGV0IHRtcFZhbCA9IGFjdGlvbi50YXJnZXRWYWx1ZTtcbiAgICAgIHRoaXMuYWN0aW9uID0gQWN0aW9uRmFjdG9yeS5jcmVhdGVBY3Rpb24odG1wVHlwZSwgdG1wVmFsKTtcbiAgICB9XG4gIH1cblxuICBhcHBseVJ1bGUoKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5hY3Rpb24ucGVyZm9ybUFjdGlvbigpO1xuICAgICAgfSwgdGhpcy5kZWxheSk7XG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICBjb25zdCBkZWxheVN0ciA9IG1zVG9UaW1lKHRoaXMuZGVsYXkpO1xuICAgIHJldHVybiBgJHt0aGlzLmNvbmRpdGlvbn0gd2hlbiBJIHZpc2l0ICR7XG4gICAgICB0aGlzLnNvdXJjZVxuICAgIH0gdGhlbiAke2RlbGF5U3RyfSAke3RoaXMuYWN0aW9uLnRvU3RyaW5nKCl9YDtcbiAgfVxufVxuXG5jb25zdCBQcm9kUnVsZUZhY3RvcnkgPSB7XG4gIGNyZWF0ZVJ1bGUoYmFkV2Vic2l0ZTogc3RyaW5nLCBhY3Rpb246IEFjdGlvbiwgY29uZGl0aW9uOiBzdHJpbmcgPSBcIkFMV0FZU1wiLCBkZWxheTogbnVtYmVyID0gMCk6IFByb2RSdWxlIHtcbiAgICB0cnkge1xuICAgICAgY29uZGl0aW9uID0gY29uZGl0aW9uLnRvVXBwZXJDYXNlKClcbiAgICAgIGlmKE9iamVjdC5rZXlzKFJ1bGVDb25kaXRpb24pLmluY2x1ZGVzKGNvbmRpdGlvbikpe1xuICAgICAgICBjb25zdCBub3JtYWxpemVkQ29uZDogUnVsZUNvbmRpdGlvbiA9IFJ1bGVDb25kaXRpb25bY29uZGl0aW9uIGFzIGtleW9mIHR5cGVvZiBSdWxlQ29uZGl0aW9uXVxuICAgICAgICByZXR1cm4gbmV3IFByb2RSdWxlKGJhZFdlYnNpdGUsIGFjdGlvbiwgbm9ybWFsaXplZENvbmQsIGRlbGF5KTtcbiAgICAgIH1cbiAgICB9XG4gICAgY2F0Y2goZSkge1xuICAgICAgdGhyb3cgZVxuICAgICAgY29uc29sZS5sb2coZSlcbiAgICB9XG5cblxuXG4gIH0sXG4gIGNyZWF0ZVJ1bGVGcm9tSlNPTihlbnRyeTogYW55KSB7XG4gICAgY29uc3QgYWN0aW9uID0gQWN0aW9uRmFjdG9yeS5jcmVhdGVBY3Rpb24oZW50cnkuYWN0aW9uLnR5cGUsIGVudHJ5LmFjdGlvbi50YXJnZXR2YWx1ZSlcblxuICAgIHJldHVybiB0aGlzLmNyZWF0ZVJ1bGUoZW50cnkuc291cmNlLCBhY3Rpb24sIGVudHJ5LmNvbmRpdGlvbiwgZW50cnkuZGVsYXkpXG4gIH0sXG59O1xuXG5lbnVtIFJ1bGVDb25kaXRpb24ge1xuICBBTFdBWVMgPSBcIkFMV0FZU1wiLFxuICBXT1JLID0gXCJXT1JLXCIsXG4gIEdPQUwgPSBcIkdPQUxcIixcbn1cblxuZXhwb3J0IHtQcm9kUnVsZSwgUnVsZUNvbmRpdGlvbiwgUHJvZFJ1bGVGYWN0b3J5IH0iLCJcblxuZXhwb3J0IGZ1bmN0aW9uIG1zVG9UaW1lKG1pbGlzZWNvbmRzOiBudW1iZXIpIHtcbiAgaWYgKG1pbGlzZWNvbmRzID09IDApIHJldHVybiBcImltbWVkaWF0ZWx5XCI7XG4gIGxldCBzZWNvbmRzID0gKG1pbGlzZWNvbmRzIC8gMTAwMCk7XG4gIGxldCBtaW51dGVzID0gKG1pbGlzZWNvbmRzIC8gKDEwMDAgKiA2MCkpO1xuICBsZXQgaG91cnMgPSAobWlsaXNlY29uZHMgLyAoMTAwMCAqIDYwICogNjApKTtcbiAgbGV0IGRheXMgPSAobWlsaXNlY29uZHMgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkpO1xuICBpZiAoc2Vjb25kcyA8IDYwKSByZXR1cm4gXCJhZnRlciBcIiArIHNlY29uZHMgKyBcIiBTZWNcIjtcbiAgZWxzZSBpZiAobWludXRlcyA8IDYwKSByZXR1cm4gXCJhZnRlciBcIiArICBtaW51dGVzICsgXCIgTWluXCI7XG4gIGVsc2UgaWYgKGhvdXJzIDwgMjQpIHJldHVybiBcImFmdGVyIFwiICsgaG91cnMgKyBcIiBIcnNcIjtcbiAgZWxzZSByZXR1cm4gXCJhZnRlciBcIiArIGRheXMgKyBcIiBEYXlzXCI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdHJpbmdzRm9yRW51bXMoKToge1trZXk6c3RyaW5nXToge1trZXk6c3RyaW5nXSA6IHN0cmluZ319IHtcbiAgcmV0dXJuIHtcbiAgICBydWxlY29uZGl0aW9uOiB7XG4gICAgICBBTFdBWVM6IFwiYWx3YXlzXCIsXG4gICAgICBXT1JLOiBcImR1cmluZyBteSB3b3JrIHRpbWVzXCIsXG4gICAgICBHT0FMUzogXCJ3aGlsZSBteSBnb2FscyBhcmUgbm90IHJlYWNoZWQgKFdJUClcIixcbiAgICB9LFxuXG4gICAgYWN0aW9udHlwZToge1xuICAgICAgUkVESVJFQ1Q6IFwicmVkaXJlY3QgbWUgdG9cIixcbiAgICAgIFBPUFVQOiBcInNob3cgYSBwb3B1cCB3aXRoIHRoZSBmb2xsb3dpbmcgdGV4dFwiLFxuICAgICAgRlJBTUU6IFwiZnJhbWUgdGhlIHVucHJvZHVjdGl2ZSBwYWdlIGluIHRoZSBmb2xsb3dpbmcgY29sb3JcIixcbiAgICAgIExPRzogXCJsb2cgbXkgdmlzaXQgb25seSAoV0lQKVwiLFxuICAgIH0sXG5cbiAgICBhY3Rpb25kZWxheToge1xuICAgICAgMDogXCJpbW1lZGlhdGVseVwiLFxuICAgICAgMzAwMDA6IFwiYWZ0ZXIgMzAgc2Vjb25kc1wiLFxuICAgICAgMzAwMDAwOiBcImFmdGVyIDUgbWludXRlc1wiLFxuICAgICAgMTIwMDAwMDogXCJhZnRlciAyMCBtaW51dGVzXCIsXG4gICAgfSxcbiAgfTtcbn1cblxuIiwiaW1wb3J0IHsgUHJvZFJ1bGUgfSBmcm9tIFwiLi4vZG9tYWluL3Byb2RSdWxlc1wiO1xyXG5cclxuY29uc3QgcnVsZURCTmFtZSA9IFwicHJvZHVjdGl2aXR5UnVsZXNcIjtcclxuaW50ZXJmYWNlIFJ1bGVMaXN0IHtcclxuICBba2V5OiBzdHJpbmddOiBQcm9kUnVsZVtdXHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldEFsbFJ1bGVzKCkge1xyXG4gIGxldCBydWxlTGlzdCA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChydWxlREJOYW1lKTtcclxuICBsZXQgcmVzdWx0TGlzdDoge1trZXk6IHN0cmluZ106IGFueX0gPSB0eXBlb2YgcnVsZUxpc3QgPT09IFwidW5kZWZpbmVkXCIgPyB7fSA6IHJ1bGVMaXN0O1xyXG4gIGlmIChydWxlREJOYW1lIGluIHJ1bGVMaXN0KSB7XHJcbiAgICByZXR1cm4gcnVsZUxpc3RbcnVsZURCTmFtZV07XHJcbiAgfVxyXG4gIHJldHVybiByZXN1bHRMaXN0O1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBhZGRSdWxlKG15TmV3UnVsZTogUHJvZFJ1bGUpIHtcclxuICBjb25zdCBydWxlTGlzdCA9IGF3YWl0IGdldEFsbFJ1bGVzKCk7XHJcbiAgY29uc3QgdGFyZ2V0V2Vic2l0ZSA9IG15TmV3UnVsZS5zb3VyY2U7XHJcblxyXG4gIGlmICh0YXJnZXRXZWJzaXRlIGluIHJ1bGVMaXN0KSB7XHJcbiAgICBydWxlTGlzdFt0YXJnZXRXZWJzaXRlXS5wdXNoKG15TmV3UnVsZSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJ1bGVMaXN0W3RhcmdldFdlYnNpdGVdID0gW215TmV3UnVsZV07XHJcbiAgfVxyXG4gIHNldFJ1bGVMaXN0KHJ1bGVMaXN0KTtcclxuICByZXR1cm4gKHJ1bGVMaXN0W3RhcmdldFdlYnNpdGVdLmxlbmd0aCAtIDEpXHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVJ1bGUoYmFkU2l0ZTogc3RyaW5nLCBpbmRleDogbnVtYmVyLCB1cGRhdGVkUnVsZTogUHJvZFJ1bGUpIHtcclxuICAvLyBsZXQgcnVsZUxpc3QgPSBhd2FpdCBnZXRBbGxSdWxlcygpO1xyXG5cclxuICBhd2FpdCBkZWxldGVSdWxlKGJhZFNpdGUsIGluZGV4KTtcclxuICByZXR1cm4gYWRkUnVsZSh1cGRhdGVkUnVsZSk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVJ1bGUoYmFkU2l0ZTpzdHJpbmcsIGluZGV4OiBudW1iZXIpIHtcclxuICBsZXQgcnVsZUxpc3QgPSBhd2FpdCBnZXRBbGxSdWxlcygpO1xyXG4gIHJ1bGVMaXN0W2JhZFNpdGVdLnNwbGljZShpbmRleCwgMSk7XHJcbiAgaWYocnVsZUxpc3RbYmFkU2l0ZV0ubGVuZ3RoID09IDApe1xyXG4gICAgZGVsZXRlIHJ1bGVMaXN0W2JhZFNpdGVdXHJcbiAgfVxyXG4gIHNldFJ1bGVMaXN0KHJ1bGVMaXN0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0UnVsZUxpc3QocnVsZUxpc3Q6IFJ1bGVMaXN0KSB7XHJcbiAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgcHJvZHVjdGl2aXR5UnVsZXM6IHJ1bGVMaXN0IH0pO1xyXG59XHJcblxyXG5jb25zdCBQZXJzaXN0YW5jZUhhbmRsZXIgPSB7XHJcbiAgZ2V0QWxsUnVsZXM6IGdldEFsbFJ1bGVzLFxyXG4gIGFkZFJ1bGU6IGFkZFJ1bGUsXHJcbiAgZGVsZXRlUnVsZTogZGVsZXRlUnVsZSxcclxuICB1cGRhdGVSdWxlOiB1cGRhdGVSdWxlLFxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBlcnNpc3RhbmNlSGFuZGxlciIsImltcG9ydCB7IEFjdGlvbkZhY3RvcnksIEFjdGlvblR5cGUgfSBmcm9tIFwiLi4vZG9tYWluL2FjdGlvblwiO1xuaW1wb3J0IHsgUHJvZFJ1bGUsIFByb2RSdWxlRmFjdG9yeSwgUnVsZUNvbmRpdGlvbiB9IGZyb20gXCIuLi9kb21haW4vcHJvZFJ1bGVzXCI7XG5pbXBvcnQgeyBnZXRTdHJpbmdzRm9yRW51bXMgfSBmcm9tIFwiLi4vaGVscGVycy9oZWxwZXJzXCI7XG5pbXBvcnQgUGVyc2lzdGFuY2VIYW5kbGVyIGZyb20gXCIuLi9wZXJzaXN0YW5jZS9wZXJzaXN0YW5jZVwiO1xuaW1wb3J0IFByb2RSdWxlc1ZpZXcgZnJvbSBcIi4vcHJvZFJ1bGVzVmlld1wiO1xuXG5wcmVwYXJlUHJvZFJ1bGVzKCk7XG5jb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFJ1bGVCdXR0b25cIik7XG5jb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbmNlbFJ1bGVCdXR0b25cIik7XG5cbmZ1bmN0aW9uIHByZXBhcmVQcm9kUnVsZXMoKSB7XG4gIGNvbnNvbGUubG9nKFwicHJlcGFyaW5nIGZvcm0hXCIpXG4gIHByZXBhcmVGb3JtKCk7XG4gIHByZXBhcmVQcm9kUnVsZVRhYmxlKCk7XG4gIHByZXBhcmVBZGRSdWxlQnV0dG9uKCk7XG4gIHByZXBhcmVDYW5jZWxCdXR0b24oKTtcbn1cblxuZnVuY3Rpb24gcHJlcGFyZUZvcm0oKSB7XG4gIGNvbnN0IG11bHRpcGxlQ2hvaWNlRmllbGRzID0gZ2V0U3RyaW5nc0ZvckVudW1zKCk7XG4gIGxldCBzZWxlY3RFbGVtZW50O1xuICBsZXQgbXlEaWN0O1xuICBmb3IgKGxldCBlbGVtSUQgaW4gbXVsdGlwbGVDaG9pY2VGaWVsZHMpIHtcbiAgICBzZWxlY3RFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbUlEKTtcbiAgICBteURpY3QgPSBtdWx0aXBsZUNob2ljZUZpZWxkc1tlbGVtSURdO1xuICAgIGZvciAobGV0IGtleSBpbiBtdWx0aXBsZUNob2ljZUZpZWxkc1tlbGVtSURdKSB7XG4gICAgICBsZXQgb3B0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICBvcHRpb25FbGVtZW50LnZhbHVlID0ga2V5O1xuICAgICAgb3B0aW9uRWxlbWVudC50ZXh0Q29udGVudCA9IG15RGljdFtrZXldO1xuICAgICAgc2VsZWN0RWxlbWVudC5hcHBlbmRDaGlsZChvcHRpb25FbGVtZW50KTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJlcGFyZUNhbmNlbEJ1dHRvbigpe1xuY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW5jZWxSdWxlQnV0dG9uXCIpO1xuXG4gIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFxuICAgIFwiY2xpY2tcIixcbiAgICBmdW5jdGlvbiAoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBQcm9kUnVsZXNWaWV3LmNsZWFyRm9ybSgpO1xuICAgIH0sXG4gICAgZmFsc2VcbiAgKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gcHJlcGFyZVByb2RSdWxlVGFibGUoKSB7XG4gIGNvbnN0IHJ1bGVMaXN0ID0gYXdhaXQgUGVyc2lzdGFuY2VIYW5kbGVyLmdldEFsbFJ1bGVzKCk7XG4gIGlmICghcnVsZUxpc3QgfHwgcnVsZUxpc3QubGVuZ3RoID09IDAgfHwgT2JqZWN0LmtleXMocnVsZUxpc3QpLmxlbmd0aCA9PSAwKSB7XG4gICAgYWRkRGVtb1J1bGUoKTtcbiAgfSBlbHNlIHtcbiAgICBPYmplY3Qua2V5cyhydWxlTGlzdCkuZm9yRWFjaCgodW5wcm9kdWN0aXZlU2l0ZSkgPT4ge1xuICAgICAgbGV0IHJ1bGVJbmRleCA9IDA7XG4gICAgICBydWxlTGlzdFt1bnByb2R1Y3RpdmVTaXRlXS5mb3JFYWNoKChydWxlOiBQcm9kUnVsZSkgPT4ge1xuICAgICAgICBhZGRUb1Byb2RUYWJsZShydWxlLCBydWxlSW5kZXgpO1xuICAgICAgICBydWxlSW5kZXgrKztcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZERlbW9SdWxlKCkge1xuICBjb25zdCBkZW1vVVJMID0gXCJkZW1vVW5wcm9kdWN0aXZlU2l0ZS5jb21cIjtcbiAgY29uc3QgZGVtb0FjdGlvbiA9IEFjdGlvbkZhY3RvcnkuY3JlYXRlQWN0aW9uKFwiUE9QVVBcIiwgXCJEbyB5b3UgcmVhbGx5IHdhbnQgdG8gc3BlbmQgdGltZSBvbiB0aGlzIHNpdGU/XCIpXG4gIGNvbnN0IGRlbW9SdWxlID0gUHJvZFJ1bGVGYWN0b3J5LmNyZWF0ZVJ1bGUoZGVtb1VSTCwgZGVtb0FjdGlvbilcblxuICBQcm9kUnVsZXNWaWV3LmFkZEVudHJ5VG9UYWJsZShkZW1vUnVsZSwgXCJkZW1vXCIpO1xufVxuXG5mdW5jdGlvbiBwcmVwYXJlQWRkUnVsZUJ1dHRvbigpIHtcbiAgbGV0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkUnVsZUJ1dHRvblwiKTtcbiAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgXCJjbGlja1wiLFxuICAgIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQWRkaW5nIG5ldyBydWxlOlwiKVxuICAgICAgYWRkUnVsZUZyb21Gb3JtKCk7XG4gICAgfSxcbiAgICBmYWxzZVxuICApO1xufVxuXG5hc3luYyBmdW5jdGlvbiBhZGRSdWxlRnJvbUZvcm0oKSB7XG4gIGNvbnN0IGZvcm1EYXRhID0gUHJvZFJ1bGVzVmlldy5nZXRGb3JtRGF0YSgpO1xuXG4gIGNvbnN0IGFjdGlvbnNvdXJjZSA9IGZvcm1EYXRhLmFjdGlvbnNvdXJjZVxuICBjb25zdCB0YXJnZXRWYWwgPSBmb3JtRGF0YS50YXJnZXRWYWxcbiAgY29uc3QgYWN0aW9uRGVsYXkgPSBmb3JtRGF0YS5kZWxheTtcbiAgY29uc3QgYWN0aW9uQ29uZGl0aW9uID0gZm9ybURhdGEuY29uZGl0aW9uO1xuICBjb25zdCBhY3Rpb25UeXBlID0gZm9ybURhdGEuYWN0aW9udHlwZTtcbiAgY29uc3QgcnVsZUlEOiBzdHJpbmcgPSBmb3JtRGF0YS5ydWxlSUQgYXMgc3RyaW5nO1xuXG4gIGxldCBuZXdBY3Rpb24gPSBBY3Rpb25GYWN0b3J5LmNyZWF0ZUFjdGlvbihhY3Rpb25UeXBlLCB0YXJnZXRWYWwpXG4gIGxldCBuZXdFbnRyeSA9IFByb2RSdWxlRmFjdG9yeS5jcmVhdGVSdWxlKGFjdGlvbnNvdXJjZSwgbmV3QWN0aW9uLCBhY3Rpb25Db25kaXRpb24sIGFjdGlvbkRlbGF5KVxuICBjb25zb2xlLmxvZyhuZXdFbnRyeSlcblxuICBpZiAoYWN0aW9uc291cmNlICYmIGFjdGlvblR5cGUgJiYgdGFyZ2V0VmFsKSB7XG4gICAgaWYocnVsZUlEID09IElESGFuZGxlci5TVEFOREFSRF9JRCl7XG4gICAgICBjb25zdCBydWxlSW5kZXggPSBhd2FpdCBQZXJzaXN0YW5jZUhhbmRsZXIuYWRkUnVsZShuZXdFbnRyeSk7XG4gICAgICBhZGRUb1Byb2RUYWJsZShuZXdFbnRyeSwgcnVsZUluZGV4KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBjb25zdCBpZF9lbGVtcyA9IElESGFuZGxlci5kZWNvbnN0cnVjdElEKHJ1bGVJRCk7XG4gICAgICBhd2FpdCBQZXJzaXN0YW5jZUhhbmRsZXIudXBkYXRlUnVsZShcbiAgICAgICAgaWRfZWxlbXNbXCJiYWRTaXRlXCJdLFxuICAgICAgICBpZF9lbGVtc1tcImluZGV4XCJdLFxuICAgICAgICBuZXdFbnRyeVxuICAgICAgKTtcbiAgICB9XG4gICAgfVxuICBQcm9kUnVsZXNWaWV3LmNsZWFyRm9ybSgpO1xuICBQcm9kUnVsZXNWaWV3LmNsZWFyVGFibGUoKTtcbiAgcHJlcGFyZVByb2RSdWxlVGFibGUoKTtcbn1cblxuZnVuY3Rpb24gYWRkVG9Qcm9kVGFibGUocHJvZFJ1bGU6IFByb2RSdWxlLCBydWxlSW5kZXg6IG51bWJlcikge1xuICBjb25zdCBydWxlSUQgPSBJREhhbmRsZXIuZ2V0Um93SUQocHJvZFJ1bGUuc291cmNlLCBydWxlSW5kZXgpXG4gIGNvbnN0IGFjdGlvbkJ1dHRvbnMgPSBQcm9kUnVsZXNWaWV3LmFkZEVudHJ5VG9UYWJsZShwcm9kUnVsZSwgcnVsZUlEKTtcbiAgYWN0aW9uQnV0dG9uc1tcImVkaXRcIl0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgcHJlcGFyZVRvRWRpdChwcm9kUnVsZSwgcnVsZUluZGV4KTtcbiAgfSk7XG5cbiAgYWN0aW9uQnV0dG9uc1tcImRlbGV0ZVwiXS5hZGRFdmVudExpc3RlbmVyKFxuICAgIFwiY2xpY2tcIixcbiAgICBmdW5jdGlvbiAoZSkge1xuICAgICAgZGVsZXRlRW50cnkocHJvZFJ1bGUuc291cmNlLCBydWxlSW5kZXgpO1xuICAgIH0sXG4gICAgZmFsc2VcbiAgKTtcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVRvRWRpdChwcm9kUnVsZTogUHJvZFJ1bGUsIHJ1bGVJbmRleDogbnVtYmVyKSB7XG4gIGNvbnN0IHJ1bGVJRCA9IElESGFuZGxlci5nZXRSb3dJRChwcm9kUnVsZS5zb3VyY2UsIHJ1bGVJbmRleClcbiAgUHJvZFJ1bGVzVmlldy5zZXRGb3JtVmFsdWVzKHByb2RSdWxlLCBydWxlSUQpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVFbnRyeSh1bnByb2R1Y3RpdmVTaXRlOiBzdHJpbmcsIHJ1bGVJbmRleDogbnVtYmVyKSB7XG4gIGNvbnN0IHJ1bGVJRCA9IElESGFuZGxlci5nZXRSb3dJRCh1bnByb2R1Y3RpdmVTaXRlLCBydWxlSW5kZXgpO1xuICBQZXJzaXN0YW5jZUhhbmRsZXIuZGVsZXRlUnVsZSh1bnByb2R1Y3RpdmVTaXRlLCBydWxlSW5kZXgpO1xuICBQcm9kUnVsZXNWaWV3LnJlbW92ZUZyb21UYWJsZShydWxlSUQpO1xufVxuXG5cbmNvbnN0IElESGFuZGxlciA9IHtcbmdldFJvd0lEOiAodW5wcm9kdWN0aXZlU2l0ZTogc3RyaW5nLCBydWxlSW5kZXg6IG51bWJlcikgPT4ge1xuICBjb25zdCByb3dJRCA9IGAke3VucHJvZHVjdGl2ZVNpdGV9LSR7cnVsZUluZGV4fWA7XG4gIHJldHVybiByb3dJRDtcbn0sXG5cbmRlY29uc3RydWN0SUQ6IChydWxlSUQ6IHN0cmluZykgPT4ge1xuICBjb25zdCBpZF9hcnJheSA9IHJ1bGVJRC5zcGxpdChcIi1cIik7XG4gIHJldHVybiB7XG4gICAgYmFkU2l0ZTogaWRfYXJyYXlbMF0sXG4gICAgaW5kZXg6ICtpZF9hcnJheVsxXSxcbiAgfTtcbn0sXG5cblNUQU5EQVJEX0lEOiBcIk5FV1wiXG59XG5cblxuXG5jb25zdCBQcm9kUnVsZXNDb250cm9sbGVyID0ge1xuICBkZWxldGVFbnRyeTogZGVsZXRlRW50cnksXG4gIHByZXBhcmVUb0VkaXQ6IHByZXBhcmVUb0VkaXQsXG4gIGFkZFRvUHJvZFRhYmxlOiBhZGRUb1Byb2RUYWJsZSxcbiAgYWRkUnVsZUZyb21Gb3JtOiBhZGRSdWxlRnJvbUZvcm0sXG4gIGdldFN0cmluZ3NGb3JFbnVtczogZ2V0U3RyaW5nc0ZvckVudW1zXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2RSdWxlc0NvbnRyb2xsZXIiLCJpbXBvcnQgeyBBY3Rpb25GYWN0b3J5IH0gZnJvbSBcIi4uL2RvbWFpbi9hY3Rpb25cIjtcbmltcG9ydCB7IFByb2RSdWxlIH0gZnJvbSBcIi4uL2RvbWFpbi9wcm9kUnVsZXNcIjtcbmltcG9ydCB7IGdldFN0cmluZ3NGb3JFbnVtcywgbXNUb1RpbWUgfSBmcm9tIFwiLi4vaGVscGVycy9oZWxwZXJzXCI7XG5pbXBvcnQgKiBhcyBDb250cm9sbGVyIGZyb20gXCIuL3Byb2RSdWxlc0NvbnRyb2xsZXJcIjtcblxuY2xhc3MgUnVsZUZvcm0ge1xuICAgIGFjdGlvbnNvdXJjZTogSFRNTElucHV0RWxlbWVudDtcbiAgICBhY3Rpb250eXBlOiBIVE1MU2VsZWN0RWxlbWVudDtcbiAgICB0YXJnZXRWYWw6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgY29uZGl0aW9uOiBIVE1MU2VsZWN0RWxlbWVudDtcbiAgICBkZWxheTogSFRNTFNlbGVjdEVsZW1lbnQ7XG4gICAgcnVsZUlEOiBIVE1MSW5wdXRFbGVtZW50O1xuXG5cbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgdGhpcy5hY3Rpb25zb3VyY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFjdGlvbnNvdXJjZVwiKSBhcyBIVE1MSW5wdXRFbGVtZW50XG4gICAgICB0aGlzLmFjdGlvbnR5cGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFjdGlvbnR5cGVcIikgYXMgSFRNTFNlbGVjdEVsZW1lbnRcbiAgICAgIHRoaXMudGFyZ2V0VmFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXJnZXR2YWx1ZVwiKSBhcyBIVE1MSW5wdXRFbGVtZW50XG4gICAgICB0aGlzLmNvbmRpdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicnVsZWNvbmRpdGlvblwiKSBhcyBIVE1MU2VsZWN0RWxlbWVudFxuICAgICAgdGhpcy5kZWxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWN0aW9uZGVsYXlcIikgYXMgSFRNTFNlbGVjdEVsZW1lbnRcbiAgICAgIHRoaXMucnVsZUlEID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJydWxlSURcIikgYXMgSFRNTElucHV0RWxlbWVudCAgICB9XG5cblxuICAgIHRvU3RhcnQoKXtcbiAgICAgIHRoaXMuYWN0aW9uc291cmNlLnZhbHVlID0gXCJcIlxuICAgICAgdGhpcy5hY3Rpb250eXBlLnNlbGVjdGVkSW5kZXggPSAwXG4gICAgICB0aGlzLnRhcmdldFZhbC52YWx1ZSA9IFwiXCJcbiAgICAgIHRoaXMuY29uZGl0aW9uLnNlbGVjdGVkSW5kZXggPSAwXG4gICAgICB0aGlzLmRlbGF5LnNlbGVjdGVkSW5kZXggPSAwXG4gICAgICB0aGlzLnJ1bGVJRC52YWx1ZSA9IFwiTkVXXCJcbiAgICB9XG5cbiAgICBnZXRWYWx1ZXMoKXtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIFwiYWN0aW9uc291cmNlXCI6IHRoaXMuYWN0aW9uc291cmNlLnZhbHVlLFxuICAgICAgICBcImFjdGlvbnR5cGVcIjogdGhpcy5hY3Rpb250eXBlLnZhbHVlLFxuICAgICAgICBcInRhcmdldFZhbFwiOiB0aGlzLnRhcmdldFZhbC52YWx1ZSxcbiAgICAgICAgXCJjb25kaXRpb25cIjogdGhpcy5jb25kaXRpb24udmFsdWUsXG4gICAgICAgIFwiZGVsYXlcIjogcGFyc2VJbnQodGhpcy5kZWxheS52YWx1ZSksXG4gICAgICAgIFwicnVsZUlEXCI6IHRoaXMucnVsZUlELnZhbHVlXG4gICAgICB9XG4gICAgfVxufVxuXG5jb25zdCBQcm9kVGFibGUgPSB7XG4gIHRhYmxlSUQ6IFwicHJvZHVjdGlvblJ1bGVUYWJsZVwiLFxuXG4gIGFkZEVudHJ5OiAocHJvZFJ1bGU6IFByb2RSdWxlLCBydWxlSUQ6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgcHJvZFRhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoUHJvZFRhYmxlLnRhYmxlSUQpIGFzIEhUTUxUYWJsZUVsZW1lbnRcbiAgICAgIGxldCBuZXdSb3cgPSBwcm9kVGFibGUuaW5zZXJ0Um93KC0xKTtcbiAgICAgIGxldCBydWxlQ2VsbCA9IG5ld1Jvdy5pbnNlcnRDZWxsKDApO1xuICAgICAgbGV0IGFjdGlvbnNDZWxsID0gbmV3Um93Lmluc2VydENlbGwoMSk7XG5cbiAgICAgIG5ld1Jvdy5pZCA9IHJ1bGVJRDtcbiAgICAgIHJ1bGVDZWxsLmlubmVySFRNTCA9IF9mb3JtYXRTdHJpbmcocHJvZFJ1bGUpO1xuICAgICAgcnVsZUNlbGwuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJweC0yXCIpO1xuICAgICAgYWN0aW9uc0NlbGwuaW5uZXJIVE1MID0gYDxidXR0b24gaWQ9XCIke1Byb2RUYWJsZS50YWJsZUlEfV9lZGl0XyR7cnVsZUlEfVwiIGNsYXNzPVwicm91bmRlZC1sZyBib3JkZXItd2hpdGUgYmctbmF2eSB0ZXh0LXdoaXRlIGhvdmVyOmJnLWJsdWVSb3lhbCBweC0yIG14LTEgdGV4dC1jZW50ZXJcIj5lZGl0PC9idXR0b24+XG4gICAgPGJ1dHRvbiBpZD1cIiR7UHJvZFRhYmxlLnRhYmxlSUR9X2RlbGV0ZV8ke3J1bGVJRH1cIiBjbGFzcz1cInJvdW5kZWQtbGcgYm9yZGVyLXdoaXRlIGJnLW5hdnkgdGV4dC13aGl0ZSBob3ZlcjpiZy1ibHVlUm95YWwgcHgtMiBteC0xIHRleHQtY2VudGVyXCI+ZGVsZXRlPC9idXR0b24+YDtcblxuICAgICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7UHJvZFRhYmxlLnRhYmxlSUR9X2RlbGV0ZV8ke3J1bGVJRH1gKTtcbiAgICAgIGNvbnN0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtQcm9kVGFibGUudGFibGVJRH1fZWRpdF8ke3J1bGVJRH1gKTtcbiAgICAgIHJldHVybiB7IGVkaXQ6IGVkaXRCdXR0b24sIGRlbGV0ZTogZGVsZXRlQnV0dG9uLCBlbnRyeTogcnVsZUNlbGwgfTtcbiAgfSxcblxuICByZW1vdmVSdWxlOiAocnVsZUlEOnN0cmluZykgPT4ge1xuICAgIGxldCB0b0RlbGV0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHJ1bGVJRClcbiAgICB0b0RlbGV0ZS5yZW1vdmUoKTtcbiAgICBjb25zb2xlLmxvZyhgUmVtb3ZpbmcgcnVsZSBmb3IgJHtydWxlSUR9IWApO1xuICB9LFxuXG4gICAgY2xlYXI6ICgpID0+IHtcbiAgICAgIGNvbnN0IHByb2RUYWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFByb2RUYWJsZS50YWJsZUlEKSBhcyBIVE1MVGFibGVFbGVtZW50XG4gICAgICBjb25zdCBvbGRCb2R5ID0gcHJvZFRhYmxlLnRCb2RpZXNbMF1cbiAgICAgIGNvbnN0IG5ld0JvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0Ym9keScpO1xuICAgICAgcHJvZFRhYmxlLnJlcGxhY2VDaGlsZChuZXdCb2R5LCBvbGRCb2R5KVxuICB9XG5cbn1cblxuY29uc3QgUHJvZFJ1bGVzVmlldyA9IHtcblxuICBhZGRFbnRyeVRvVGFibGU6IFByb2RUYWJsZS5hZGRFbnRyeSxcbiAgY2xlYXJUYWJsZTogUHJvZFRhYmxlLmNsZWFyLFxuICByZW1vdmVGcm9tVGFibGU6IFByb2RUYWJsZS5yZW1vdmVSdWxlLFxuICBcblxuXG4gIGdldEZvcm1EYXRhOiAoKSA9PiB7XG4gICAgbGV0IG15Rm9ybSA9IG5ldyBSdWxlRm9ybSgpXG4gICAgcmV0dXJuIG15Rm9ybS5nZXRWYWx1ZXMoKTtcbiAgfSxcblxuICBjbGVhckZvcm06ICgpID0+IHtcbiAgICBjb25zdCBmb3JtID0gbmV3IFJ1bGVGb3JtKClcbiAgICBmb3JtLnRvU3RhcnQoKVxuICB9LFxuXG4gIHNldEZvcm1WYWx1ZXMoZm9ybVZhbHVlczogUHJvZFJ1bGUsIHJ1bGVJRDogc3RyaW5nKSB7XG4gICAgbGV0IG15Rm9ybSA9IG5ldyBSdWxlRm9ybSgpXG4gICAgbXlGb3JtLmFjdGlvbnNvdXJjZS52YWx1ZSA9IGZvcm1WYWx1ZXMuc291cmNlXG4gICAgbXlGb3JtLmFjdGlvbnR5cGUudmFsdWUgPSBmb3JtVmFsdWVzLmFjdGlvbi50eXBlXG4gICAgbXlGb3JtLnRhcmdldFZhbC52YWx1ZSA9IGZvcm1WYWx1ZXMuYWN0aW9uLnRhcmdldFZhbHVlICBcbiAgICBteUZvcm0uY29uZGl0aW9uLnZhbHVlID0gZm9ybVZhbHVlcy5jb25kaXRpb25cbiAgICBteUZvcm0uZGVsYXkudmFsdWUgPSBmb3JtVmFsdWVzLmRlbGF5LnRvU3RyaW5nKClcbiAgICBteUZvcm0ucnVsZUlELnZhbHVlID0gcnVsZUlEXG4gICAgXG4gIH1cbn07XG5cbmZ1bmN0aW9uIF9mb3JtYXRTdHJpbmcocHJvZFJ1bGU6IFByb2RSdWxlKSB7XG4gICAgY29uc3QgZW51bVN0cmluZ3MgPSBnZXRTdHJpbmdzRm9yRW51bXMoKVxuICAgIGNvbnN0IGNvbmRpdGlvblN0ciA9IGVudW1TdHJpbmdzLnJ1bGVjb25kaXRpb25bcHJvZFJ1bGUuY29uZGl0aW9uXVxuICAgIGNvbnN0IGFjdGlvblN0ciA9IGVudW1TdHJpbmdzLmFjdGlvbnR5cGVbcHJvZFJ1bGUuYWN0aW9uLnR5cGVdXG4gICAgY29uc3QgZGVsYXlTdHIgPSBlbnVtU3RyaW5ncy5hY3Rpb250eXBlW3Byb2RSdWxlLmRlbGF5XSB8fCBtc1RvVGltZShwcm9kUnVsZS5kZWxheSlcblxuICBjb25zdCByZXN1bHRzU3RyID0gIGA8ZW0gY2xhc3M9XCJ0ZXh0LWxnXCI+JHtwcm9kUnVsZS5zb3VyY2V9PC9lbT4gPGJyPjxiPiR7XG4gICAgY29uZGl0aW9uU3RyXG4gIH08L2I+IHdoZW4gSSB2aXNpdCA8Yj4ke3Byb2RSdWxlLnNvdXJjZX08L2I+IHRoZW4gPGI+JHtkZWxheVN0cn0gXG4gICR7YWN0aW9uU3RyfTogPGVtPiR7cHJvZFJ1bGUuYWN0aW9uLnRhcmdldFZhbHVlfTwvZW0+PC9iPmA7XG5cbiAgcmV0dXJuIHJlc3VsdHNTdHJcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZFJ1bGVzVmlldyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==