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
                    console.log("executing UpdateRule!");
                    return [4 /*yield*/, deleteRule(badSite, index)];
                case 1:
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
                    console.log("executing deleteRule!");
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
        e.preventDefault();
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
                    console.log("Adding new entry:");
                    console.log(newEntry);
                    if (!(actionsource && actionType && targetVal)) return [3 /*break*/, 4];
                    console.log("ruleID is ".concat(ruleID, "!"));
                    if (!(ruleID == IDHandler.STANDARD_ID || ruleID == "")) return [3 /*break*/, 2];
                    console.log("new ID!");
                    return [4 /*yield*/, _persistance_persistance__WEBPACK_IMPORTED_MODULE_3__["default"].addRule(newEntry)];
                case 1:
                    ruleIndex = _a.sent();
                    addToProdTable(newEntry, ruleIndex);
                    return [3 /*break*/, 4];
                case 2:
                    console.log("existing id!");
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
    getBody: function () {
        var prodTable = document.getElementById(ProdTable.tableID);
        var body = prodTable.tBodies[0];
        return body;
    },
    addEntry: function (prodRule, ruleID) {
        var prodTable = ProdTable.getBody();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RTtRQUMzQixNQUFNLENBQUMsWUFBWSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUMsTUFBTTtRQUM3QyxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUk7UUFDaEQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxXQUFXO1FBQ3RELE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxTQUFTO1FBQzdDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFO1FBQ2hELE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLE1BQU07SUFFOUIsQ0FBQztDQUNGLENBQUM7QUFFRixTQUFTLGFBQWEsQ0FBQyxRQUFrQjtJQUNyQyxJQUFNLFdBQVcsR0FBRyxvRUFBa0IsRUFBRTtJQUN4QyxJQUFNLFlBQVksR0FBRyxXQUFXLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUM7SUFDbEUsSUFBTSxTQUFTLEdBQUcsV0FBVyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztJQUM5RCxJQUFNLFFBQVEsR0FBRyxXQUFXLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSwwREFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7SUFFckYsSUFBTSxVQUFVLEdBQUksZ0NBQXVCLFFBQVEsQ0FBQyxNQUFNLDBCQUN4RCxZQUFZLGtDQUNVLFFBQVEsQ0FBQyxNQUFNLDBCQUFnQixRQUFRLGtCQUM3RCxTQUFTLG1CQUFTLFFBQVEsQ0FBQyxNQUFNLENBQUMsV0FBVyxjQUFXLENBQUM7SUFFM0QsT0FBTyxVQUFVO0FBQ25CLENBQUM7QUFFRCxpRUFBZSxhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vTXlMaWJyYXJ5Ly4vc3JjL2RvbWFpbi9hY3Rpb24udHMiLCJ3ZWJwYWNrOi8vTXlMaWJyYXJ5Ly4vc3JjL2RvbWFpbi9wcm9kUnVsZXMudHMiLCJ3ZWJwYWNrOi8vTXlMaWJyYXJ5Ly4vc3JjL2hlbHBlcnMvaGVscGVycy50cyIsIndlYnBhY2s6Ly9NeUxpYnJhcnkvLi9zcmMvcGVyc2lzdGFuY2UvcGVyc2lzdGFuY2UudHMiLCJ3ZWJwYWNrOi8vTXlMaWJyYXJ5Ly4vc3JjL3VpL3Byb2RSdWxlc0NvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vTXlMaWJyYXJ5Ly4vc3JjL3VpL3Byb2RSdWxlc1ZpZXcudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQWN0aW9uIHtcclxuICB0YXJnZXRWYWx1ZTogc3RyaW5nO1xyXG4gIHR5cGU6IEFjdGlvblR5cGUgPSBBY3Rpb25UeXBlLkxPR1xyXG4gIGNvbnN0cnVjdG9yKHRhcmdldFZhbHVlOiBzdHJpbmcgPSBcIlwiKSB7XHJcbiAgICB0aGlzLnRhcmdldFZhbHVlID0gdGFyZ2V0VmFsdWU7XHJcbiAgfVxyXG5cclxuICBwZXJmb3JtQWN0aW9uKCkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICB0b1N0cmluZygpIHtcclxuICAgIHJldHVybiBgYXBwbHkgYSBydWxlIWA7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBGcmFtZUFjdGlvbiBleHRlbmRzIEFjdGlvbiB7XHJcbiAgIHR5cGU6IEFjdGlvblR5cGU7XHJcbiAgY29uc3RydWN0b3IoZnJhbWVDb2xvcjogc3RyaW5nKSB7XHJcbiAgICBzdXBlcihmcmFtZUNvbG9yKTtcclxuICAgIHRoaXMudHlwZSA9IEFjdGlvblR5cGUuRlJBTUU7XHJcbiAgfVxyXG5cclxuICAgcGVyZm9ybUFjdGlvbigpIHtcclxuICAgIGFsZXJ0KFxyXG4gICAgICBgVGhpcyBzaXRlIGlzIHVucHJvZHVjdGl2ZSEgRnJhbWluZyB0aGlzIHNpdGUgaW4gJHt0aGlzLnRhcmdldFZhbHVlfS5gXHJcbiAgICApO1xyXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5ib3JkZXIgPSBgMTBweCBzb2xpZCAke3RoaXMudGFyZ2V0VmFsdWV9YDtcclxuICB9XHJcblxyXG4gICB0b1N0cmluZygpIHtcclxuICAgIHJldHVybiBgZnJhbWUgdGhlIHNpdGUgaW4gJHt0aGlzLnRhcmdldFZhbHVlfWA7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBQb3B1cEFjdGlvbiBleHRlbmRzIEFjdGlvbiB7XHJcbiAgIHR5cGU6IEFjdGlvblR5cGU7XHJcbiAgY29uc3RydWN0b3IocG9wdXBUZXh0OiBzdHJpbmcpIHtcclxuICAgIHN1cGVyKHBvcHVwVGV4dCk7XHJcbiAgICB0aGlzLnR5cGUgPSBBY3Rpb25UeXBlLlBPUFVQO1xyXG4gIH1cclxuICAgcGVyZm9ybUFjdGlvbigpIHtcclxuICAgIGlmICghdGhpcy50YXJnZXRWYWx1ZSkge1xyXG4gICAgICB0aGlzLnRhcmdldFZhbHVlID0gXCJEbyB5b3UgdHJ1bHkgd2FudCB0byBzcGVuZCBtb3JlIHRpbWUgb24gdGhpcyBzaXRlP1wiO1xyXG4gICAgfVxyXG4gICAgYWxlcnQodGhpcy50YXJnZXRWYWx1ZSk7XHJcbiAgfVxyXG4gICB0b1N0cmluZygpIHtcclxuICAgIHJldHVybiBgc2hvdyBhIHBvcHVwIHRoYXQgc2F5czogXFxuICcke3RoaXMudGFyZ2V0VmFsdWV9J2A7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBSZWRpcmVjdEFjdGlvbiBleHRlbmRzIEFjdGlvbiB7XHJcbiAgIHR5cGU6IEFjdGlvblR5cGU7XHJcbiAgY29uc3RydWN0b3IocmVkaXJlY3RUbzogc3RyaW5nKSB7XHJcbiAgICBzdXBlcihyZWRpcmVjdFRvKTtcclxuICAgIHRoaXMudHlwZSA9IEFjdGlvblR5cGUuUkVESVJFQ1Q7XHJcbiAgfVxyXG4gICBwZXJmb3JtQWN0aW9uKCkge1xyXG4gICAgYWxlcnQoYFRoaXMgc2l0ZSBpcyB1bnByb2R1Y3RpdmUhIFJlZGlyZWN0aW5nIHRvICR7dGhpcy50YXJnZXRWYWx1ZX0uYCk7XHJcbiAgICBsZXQgdGFyZ2V0VmFsdWUgPSB0aGlzLnRhcmdldFZhbHVlLnN0YXJ0c1dpdGgoXCJodHRwXCIpXHJcbiAgICAgID8gdGhpcy50YXJnZXRWYWx1ZVxyXG4gICAgICA6IGBodHRwczovLyR7dGhpcy50YXJnZXRWYWx1ZX1gO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB0YXJnZXRWYWx1ZTtcclxuICB9XHJcbiAgIHRvU3RyaW5nKCkge1xyXG4gICAgcmV0dXJuIGByZWRpcmVjdCB0byAke3RoaXMudGFyZ2V0VmFsdWV9YDtcclxuICB9XHJcbn1cclxuXHJcbmVudW0gQWN0aW9uVHlwZSB7XHJcbiAgUkVESVJFQ1QgPSBcIlJFRElSRUNUXCIsXHJcbiAgUE9QVVAgPSBcIlBPUFVQXCIsXHJcbiAgRlJBTUUgPSBcIkZSQU1FXCIsXHJcbiAgTE9HID0gXCJMT0dcIixcclxufTtcclxuXHJcbmNvbnN0IEFjdGlvbkZhY3RvcnkgPSB7XHJcbiAgY3JlYXRlQWN0aW9uKHR5cGU6IHN0cmluZywgdGFyZ2V0VmFsdWU6IHN0cmluZyk6IEFjdGlvbiB7XHJcbiAgICBzd2l0Y2ggKHR5cGUudG9VcHBlckNhc2UoKSkge1xyXG4gICAgICBjYXNlIEFjdGlvblR5cGUuRlJBTUU6XHJcbiAgICAgICAgcmV0dXJuIG5ldyBGcmFtZUFjdGlvbih0YXJnZXRWYWx1ZSk7XHJcbiAgICAgIGNhc2UgQWN0aW9uVHlwZS5SRURJUkVDVDpcclxuICAgICAgICByZXR1cm4gbmV3IFJlZGlyZWN0QWN0aW9uKHRhcmdldFZhbHVlKTtcclxuICAgICAgY2FzZSBBY3Rpb25UeXBlLlBPUFVQOlxyXG4gICAgICAgIHJldHVybiBuZXcgUG9wdXBBY3Rpb24odGFyZ2V0VmFsdWUpO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHRocm93IFwiVW5rbm93biBhY3Rpb24gdHlwZSEgTXVzdCBiZSBkZWZpbmVkIGluIHRoZSBBY3Rpb25UeXBlIEVudW0uXCI7XHJcbiAgICB9XHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCB7IEFjdGlvbiwgQWN0aW9uRmFjdG9yeSwgQWN0aW9uVHlwZSB9O1xyXG5leHBvcnQgZGVmYXVsdCBBY3Rpb24iLCJpbXBvcnQgeyBBY3Rpb24sIEFjdGlvblR5cGUsIEFjdGlvbkZhY3RvcnkgfSBmcm9tIFwiLi9hY3Rpb25cIlxuaW1wb3J0IHttc1RvVGltZSB9IGZyb20gXCIuLi9oZWxwZXJzL2hlbHBlcnNcIlxuXG5jbGFzcyBQcm9kUnVsZSB7XG4gIHNvdXJjZTogc3RyaW5nXG4gIGFjdGlvbjogQWN0aW9uXG4gIGNvbmRpdGlvbjogUnVsZUNvbmRpdGlvblxuICBkZWxheTogbnVtYmVyXG4gIGNvbnN0cnVjdG9yKFxuICAgIGJhZFdlYnNpdGU6IHN0cmluZyxcbiAgICBhY3Rpb24gPSB7IHR5cGU6IEFjdGlvblR5cGUuRlJBTUUsIHRhcmdldFZhbHVlOiBcInJlZFwiIH0sXG4gICAgY29uZGl0aW9uID0gUnVsZUNvbmRpdGlvbi5BTFdBWVMsXG4gICAgZGVsYXk6IG51bWJlciA9IDBcbiAgKSB7XG4gICAgdGhpcy5zb3VyY2UgPSBiYWRXZWJzaXRlO1xuICAgIHRoaXMuZGVsYXkgPSBkZWxheTtcbiAgICB0aGlzLmNvbmRpdGlvbiA9IGNvbmRpdGlvbjtcbiAgICBpZiAoYWN0aW9uIGluc3RhbmNlb2YgQWN0aW9uKSB7XG4gICAgICB0aGlzLmFjdGlvbiA9IGFjdGlvbjtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHRtcFR5cGUgPSBhY3Rpb24udHlwZTtcbiAgICAgIGxldCB0bXBWYWwgPSBhY3Rpb24udGFyZ2V0VmFsdWU7XG4gICAgICB0aGlzLmFjdGlvbiA9IEFjdGlvbkZhY3RvcnkuY3JlYXRlQWN0aW9uKHRtcFR5cGUsIHRtcFZhbCk7XG4gICAgfVxuICB9XG5cbiAgYXBwbHlSdWxlKCkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuYWN0aW9uLnBlcmZvcm1BY3Rpb24oKTtcbiAgICAgIH0sIHRoaXMuZGVsYXkpO1xuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgY29uc3QgZGVsYXlTdHIgPSBtc1RvVGltZSh0aGlzLmRlbGF5KTtcbiAgICByZXR1cm4gYCR7dGhpcy5jb25kaXRpb259IHdoZW4gSSB2aXNpdCAke1xuICAgICAgdGhpcy5zb3VyY2VcbiAgICB9IHRoZW4gJHtkZWxheVN0cn0gJHt0aGlzLmFjdGlvbi50b1N0cmluZygpfWA7XG4gIH1cbn1cblxuY29uc3QgUHJvZFJ1bGVGYWN0b3J5ID0ge1xuICBjcmVhdGVSdWxlKGJhZFdlYnNpdGU6IHN0cmluZywgYWN0aW9uOiBBY3Rpb24sIGNvbmRpdGlvbjogc3RyaW5nID0gXCJBTFdBWVNcIiwgZGVsYXk6IG51bWJlciA9IDApOiBQcm9kUnVsZSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbmRpdGlvbiA9IGNvbmRpdGlvbi50b1VwcGVyQ2FzZSgpXG4gICAgICBpZihPYmplY3Qua2V5cyhSdWxlQ29uZGl0aW9uKS5pbmNsdWRlcyhjb25kaXRpb24pKXtcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZENvbmQ6IFJ1bGVDb25kaXRpb24gPSBSdWxlQ29uZGl0aW9uW2NvbmRpdGlvbiBhcyBrZXlvZiB0eXBlb2YgUnVsZUNvbmRpdGlvbl1cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9kUnVsZShiYWRXZWJzaXRlLCBhY3Rpb24sIG5vcm1hbGl6ZWRDb25kLCBkZWxheSk7XG4gICAgICB9XG4gICAgfVxuICAgIGNhdGNoKGUpIHtcbiAgICAgIHRocm93IGVcbiAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgfVxuXG5cblxuICB9LFxuICBjcmVhdGVSdWxlRnJvbUpTT04oZW50cnk6IGFueSkge1xuICAgIGNvbnN0IGFjdGlvbiA9IEFjdGlvbkZhY3RvcnkuY3JlYXRlQWN0aW9uKGVudHJ5LmFjdGlvbi50eXBlLCBlbnRyeS5hY3Rpb24udGFyZ2V0dmFsdWUpXG5cbiAgICByZXR1cm4gdGhpcy5jcmVhdGVSdWxlKGVudHJ5LnNvdXJjZSwgYWN0aW9uLCBlbnRyeS5jb25kaXRpb24sIGVudHJ5LmRlbGF5KVxuICB9LFxufTtcblxuZW51bSBSdWxlQ29uZGl0aW9uIHtcbiAgQUxXQVlTID0gXCJBTFdBWVNcIixcbiAgV09SSyA9IFwiV09SS1wiLFxuICBHT0FMID0gXCJHT0FMXCIsXG59XG5cbmV4cG9ydCB7UHJvZFJ1bGUsIFJ1bGVDb25kaXRpb24sIFByb2RSdWxlRmFjdG9yeSB9IiwiXG5cbmV4cG9ydCBmdW5jdGlvbiBtc1RvVGltZShtaWxpc2Vjb25kczogbnVtYmVyKSB7XG4gIGlmIChtaWxpc2Vjb25kcyA9PSAwKSByZXR1cm4gXCJpbW1lZGlhdGVseVwiO1xuICBsZXQgc2Vjb25kcyA9IChtaWxpc2Vjb25kcyAvIDEwMDApO1xuICBsZXQgbWludXRlcyA9IChtaWxpc2Vjb25kcyAvICgxMDAwICogNjApKTtcbiAgbGV0IGhvdXJzID0gKG1pbGlzZWNvbmRzIC8gKDEwMDAgKiA2MCAqIDYwKSk7XG4gIGxldCBkYXlzID0gKG1pbGlzZWNvbmRzIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcbiAgaWYgKHNlY29uZHMgPCA2MCkgcmV0dXJuIFwiYWZ0ZXIgXCIgKyBzZWNvbmRzICsgXCIgU2VjXCI7XG4gIGVsc2UgaWYgKG1pbnV0ZXMgPCA2MCkgcmV0dXJuIFwiYWZ0ZXIgXCIgKyAgbWludXRlcyArIFwiIE1pblwiO1xuICBlbHNlIGlmIChob3VycyA8IDI0KSByZXR1cm4gXCJhZnRlciBcIiArIGhvdXJzICsgXCIgSHJzXCI7XG4gIGVsc2UgcmV0dXJuIFwiYWZ0ZXIgXCIgKyBkYXlzICsgXCIgRGF5c1wiO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RyaW5nc0ZvckVudW1zKCk6IHtba2V5OnN0cmluZ106IHtba2V5OnN0cmluZ10gOiBzdHJpbmd9fSB7XG4gIHJldHVybiB7XG4gICAgcnVsZWNvbmRpdGlvbjoge1xuICAgICAgQUxXQVlTOiBcImFsd2F5c1wiLFxuICAgICAgV09SSzogXCJkdXJpbmcgbXkgd29yayB0aW1lc1wiLFxuICAgICAgR09BTFM6IFwid2hpbGUgbXkgZ29hbHMgYXJlIG5vdCByZWFjaGVkIChXSVApXCIsXG4gICAgfSxcblxuICAgIGFjdGlvbnR5cGU6IHtcbiAgICAgIFJFRElSRUNUOiBcInJlZGlyZWN0IG1lIHRvXCIsXG4gICAgICBQT1BVUDogXCJzaG93IGEgcG9wdXAgd2l0aCB0aGUgZm9sbG93aW5nIHRleHRcIixcbiAgICAgIEZSQU1FOiBcImZyYW1lIHRoZSB1bnByb2R1Y3RpdmUgcGFnZSBpbiB0aGUgZm9sbG93aW5nIGNvbG9yXCIsXG4gICAgICBMT0c6IFwibG9nIG15IHZpc2l0IG9ubHkgKFdJUClcIixcbiAgICB9LFxuXG4gICAgYWN0aW9uZGVsYXk6IHtcbiAgICAgIDA6IFwiaW1tZWRpYXRlbHlcIixcbiAgICAgIDMwMDAwOiBcImFmdGVyIDMwIHNlY29uZHNcIixcbiAgICAgIDMwMDAwMDogXCJhZnRlciA1IG1pbnV0ZXNcIixcbiAgICAgIDEyMDAwMDA6IFwiYWZ0ZXIgMjAgbWludXRlc1wiLFxuICAgIH0sXG4gIH07XG59XG5cbiIsImltcG9ydCB7IFByb2RSdWxlIH0gZnJvbSBcIi4uL2RvbWFpbi9wcm9kUnVsZXNcIjtcclxuXHJcbmNvbnN0IHJ1bGVEQk5hbWUgPSBcInByb2R1Y3Rpdml0eVJ1bGVzXCI7XHJcbmludGVyZmFjZSBSdWxlTGlzdCB7XHJcbiAgW2tleTogc3RyaW5nXTogUHJvZFJ1bGVbXVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBnZXRBbGxSdWxlcygpIHtcclxuICBsZXQgcnVsZUxpc3QgPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQocnVsZURCTmFtZSk7XHJcbiAgbGV0IHJlc3VsdExpc3Q6IHtba2V5OiBzdHJpbmddOiBhbnl9ID0gdHlwZW9mIHJ1bGVMaXN0ID09PSBcInVuZGVmaW5lZFwiID8ge30gOiBydWxlTGlzdDtcclxuICBpZiAocnVsZURCTmFtZSBpbiBydWxlTGlzdCkge1xyXG4gICAgcmV0dXJuIHJ1bGVMaXN0W3J1bGVEQk5hbWVdO1xyXG4gIH1cclxuICByZXR1cm4gcmVzdWx0TGlzdDtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gYWRkUnVsZShteU5ld1J1bGU6IFByb2RSdWxlKSB7XHJcbiAgY29uc3QgcnVsZUxpc3QgPSBhd2FpdCBnZXRBbGxSdWxlcygpO1xyXG4gIGNvbnN0IHRhcmdldFdlYnNpdGUgPSBteU5ld1J1bGUuc291cmNlO1xyXG5cclxuICBpZiAodGFyZ2V0V2Vic2l0ZSBpbiBydWxlTGlzdCkge1xyXG4gICAgcnVsZUxpc3RbdGFyZ2V0V2Vic2l0ZV0ucHVzaChteU5ld1J1bGUpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBydWxlTGlzdFt0YXJnZXRXZWJzaXRlXSA9IFtteU5ld1J1bGVdO1xyXG4gIH1cclxuICBzZXRSdWxlTGlzdChydWxlTGlzdCk7XHJcbiAgcmV0dXJuIChydWxlTGlzdFt0YXJnZXRXZWJzaXRlXS5sZW5ndGggLSAxKVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiB1cGRhdGVSdWxlKGJhZFNpdGU6IHN0cmluZywgaW5kZXg6IG51bWJlciwgdXBkYXRlZFJ1bGU6IFByb2RSdWxlKSB7XHJcbiAgLy8gbGV0IHJ1bGVMaXN0ID0gYXdhaXQgZ2V0QWxsUnVsZXMoKTtcclxuICBjb25zb2xlLmxvZyhcImV4ZWN1dGluZyBVcGRhdGVSdWxlIVwiKVxyXG4gIGF3YWl0IGRlbGV0ZVJ1bGUoYmFkU2l0ZSwgaW5kZXgpO1xyXG4gIHJldHVybiBhZGRSdWxlKHVwZGF0ZWRSdWxlKTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZGVsZXRlUnVsZShiYWRTaXRlOnN0cmluZywgaW5kZXg6IG51bWJlcikge1xyXG4gIGxldCBydWxlTGlzdCA9IGF3YWl0IGdldEFsbFJ1bGVzKCk7XHJcbiAgY29uc29sZS5sb2coXCJleGVjdXRpbmcgZGVsZXRlUnVsZSFcIilcclxuICBydWxlTGlzdFtiYWRTaXRlXS5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gIGlmKHJ1bGVMaXN0W2JhZFNpdGVdLmxlbmd0aCA9PSAwKXtcclxuICAgIGRlbGV0ZSBydWxlTGlzdFtiYWRTaXRlXVxyXG4gIH1cclxuICBzZXRSdWxlTGlzdChydWxlTGlzdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFJ1bGVMaXN0KHJ1bGVMaXN0OiBSdWxlTGlzdCkge1xyXG4gIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IHByb2R1Y3Rpdml0eVJ1bGVzOiBydWxlTGlzdCB9KTtcclxufVxyXG5cclxuY29uc3QgUGVyc2lzdGFuY2VIYW5kbGVyID0ge1xyXG4gIGdldEFsbFJ1bGVzOiBnZXRBbGxSdWxlcyxcclxuICBhZGRSdWxlOiBhZGRSdWxlLFxyXG4gIGRlbGV0ZVJ1bGU6IGRlbGV0ZVJ1bGUsXHJcbiAgdXBkYXRlUnVsZTogdXBkYXRlUnVsZSxcclxufTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBQZXJzaXN0YW5jZUhhbmRsZXIiLCJpbXBvcnQgeyBBY3Rpb25GYWN0b3J5LCBBY3Rpb25UeXBlIH0gZnJvbSBcIi4uL2RvbWFpbi9hY3Rpb25cIjtcbmltcG9ydCB7IFByb2RSdWxlLCBQcm9kUnVsZUZhY3RvcnksIFJ1bGVDb25kaXRpb24gfSBmcm9tIFwiLi4vZG9tYWluL3Byb2RSdWxlc1wiO1xuaW1wb3J0IHsgZ2V0U3RyaW5nc0ZvckVudW1zIH0gZnJvbSBcIi4uL2hlbHBlcnMvaGVscGVyc1wiO1xuaW1wb3J0IFBlcnNpc3RhbmNlSGFuZGxlciBmcm9tIFwiLi4vcGVyc2lzdGFuY2UvcGVyc2lzdGFuY2VcIjtcbmltcG9ydCBQcm9kUnVsZXNWaWV3IGZyb20gXCIuL3Byb2RSdWxlc1ZpZXdcIjtcblxucHJlcGFyZVByb2RSdWxlcygpO1xuY29uc3QgYWRkQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRSdWxlQnV0dG9uXCIpO1xuY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW5jZWxSdWxlQnV0dG9uXCIpO1xuXG5mdW5jdGlvbiBwcmVwYXJlUHJvZFJ1bGVzKCkge1xuICBjb25zb2xlLmxvZyhcInByZXBhcmluZyBmb3JtIVwiKVxuICBwcmVwYXJlRm9ybSgpO1xuICBwcmVwYXJlUHJvZFJ1bGVUYWJsZSgpO1xuICBwcmVwYXJlQWRkUnVsZUJ1dHRvbigpO1xuICBwcmVwYXJlQ2FuY2VsQnV0dG9uKCk7XG59XG5cbmZ1bmN0aW9uIHByZXBhcmVGb3JtKCkge1xuICBjb25zdCBtdWx0aXBsZUNob2ljZUZpZWxkcyA9IGdldFN0cmluZ3NGb3JFbnVtcygpO1xuICBsZXQgc2VsZWN0RWxlbWVudDtcbiAgbGV0IG15RGljdDtcbiAgZm9yIChsZXQgZWxlbUlEIGluIG11bHRpcGxlQ2hvaWNlRmllbGRzKSB7XG4gICAgc2VsZWN0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1JRCk7XG4gICAgbXlEaWN0ID0gbXVsdGlwbGVDaG9pY2VGaWVsZHNbZWxlbUlEXTtcbiAgICBmb3IgKGxldCBrZXkgaW4gbXVsdGlwbGVDaG9pY2VGaWVsZHNbZWxlbUlEXSkge1xuICAgICAgbGV0IG9wdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgb3B0aW9uRWxlbWVudC52YWx1ZSA9IGtleTtcbiAgICAgIG9wdGlvbkVsZW1lbnQudGV4dENvbnRlbnQgPSBteURpY3Rba2V5XTtcbiAgICAgIHNlbGVjdEVsZW1lbnQuYXBwZW5kQ2hpbGQob3B0aW9uRWxlbWVudCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHByZXBhcmVDYW5jZWxCdXR0b24oKXtcbmNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FuY2VsUnVsZUJ1dHRvblwiKTtcblxuICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICBcImNsaWNrXCIsXG4gICAgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgUHJvZFJ1bGVzVmlldy5jbGVhckZvcm0oKTtcbiAgICB9LFxuICAgIGZhbHNlXG4gICk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHByZXBhcmVQcm9kUnVsZVRhYmxlKCkge1xuICBjb25zdCBydWxlTGlzdCA9IGF3YWl0IFBlcnNpc3RhbmNlSGFuZGxlci5nZXRBbGxSdWxlcygpO1xuICBpZiAoIXJ1bGVMaXN0IHx8IHJ1bGVMaXN0Lmxlbmd0aCA9PSAwIHx8IE9iamVjdC5rZXlzKHJ1bGVMaXN0KS5sZW5ndGggPT0gMCkge1xuICAgIGFkZERlbW9SdWxlKCk7XG4gIH0gZWxzZSB7XG4gICAgT2JqZWN0LmtleXMocnVsZUxpc3QpLmZvckVhY2goKHVucHJvZHVjdGl2ZVNpdGUpID0+IHtcbiAgICAgIGxldCBydWxlSW5kZXggPSAwO1xuICAgICAgcnVsZUxpc3RbdW5wcm9kdWN0aXZlU2l0ZV0uZm9yRWFjaCgocnVsZTogUHJvZFJ1bGUpID0+IHtcbiAgICAgICAgYWRkVG9Qcm9kVGFibGUocnVsZSwgcnVsZUluZGV4KTtcbiAgICAgICAgcnVsZUluZGV4Kys7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGREZW1vUnVsZSgpIHtcbiAgY29uc3QgZGVtb1VSTCA9IFwiZGVtb1VucHJvZHVjdGl2ZVNpdGUuY29tXCI7XG4gIGNvbnN0IGRlbW9BY3Rpb24gPSBBY3Rpb25GYWN0b3J5LmNyZWF0ZUFjdGlvbihcIlBPUFVQXCIsIFwiRG8geW91IHJlYWxseSB3YW50IHRvIHNwZW5kIHRpbWUgb24gdGhpcyBzaXRlP1wiKVxuICBjb25zdCBkZW1vUnVsZSA9IFByb2RSdWxlRmFjdG9yeS5jcmVhdGVSdWxlKGRlbW9VUkwsIGRlbW9BY3Rpb24pXG5cbiAgUHJvZFJ1bGVzVmlldy5hZGRFbnRyeVRvVGFibGUoZGVtb1J1bGUsIFwiZGVtb1wiKTtcbn1cblxuZnVuY3Rpb24gcHJlcGFyZUFkZFJ1bGVCdXR0b24oKSB7XG4gIGxldCBhZGRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFJ1bGVCdXR0b25cIik7XG4gIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFxuICAgIFwiY2xpY2tcIixcbiAgICBmdW5jdGlvbiAoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBhZGRSdWxlRnJvbUZvcm0oKTtcbiAgICB9LFxuICAgIGZhbHNlXG4gICk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGFkZFJ1bGVGcm9tRm9ybSgpIHtcbiAgY29uc3QgZm9ybURhdGEgPSBQcm9kUnVsZXNWaWV3LmdldEZvcm1EYXRhKCk7XG5cbiAgY29uc3QgYWN0aW9uc291cmNlID0gZm9ybURhdGEuYWN0aW9uc291cmNlXG4gIGNvbnN0IHRhcmdldFZhbCA9IGZvcm1EYXRhLnRhcmdldFZhbFxuICBjb25zdCBhY3Rpb25EZWxheSA9IGZvcm1EYXRhLmRlbGF5O1xuICBjb25zdCBhY3Rpb25Db25kaXRpb24gPSBmb3JtRGF0YS5jb25kaXRpb247XG4gIGNvbnN0IGFjdGlvblR5cGUgPSBmb3JtRGF0YS5hY3Rpb250eXBlO1xuICBjb25zdCBydWxlSUQ6IHN0cmluZyA9IGZvcm1EYXRhLnJ1bGVJRCBhcyBzdHJpbmc7XG5cbiAgbGV0IG5ld0FjdGlvbiA9IEFjdGlvbkZhY3RvcnkuY3JlYXRlQWN0aW9uKGFjdGlvblR5cGUsIHRhcmdldFZhbClcbiAgbGV0IG5ld0VudHJ5ID0gUHJvZFJ1bGVGYWN0b3J5LmNyZWF0ZVJ1bGUoYWN0aW9uc291cmNlLCBuZXdBY3Rpb24sIGFjdGlvbkNvbmRpdGlvbiwgYWN0aW9uRGVsYXkpXG4gIGNvbnNvbGUubG9nKFwiQWRkaW5nIG5ldyBlbnRyeTpcIilcbiAgY29uc29sZS5sb2cobmV3RW50cnkpXG5cbiAgaWYgKGFjdGlvbnNvdXJjZSAmJiBhY3Rpb25UeXBlICYmIHRhcmdldFZhbCkge1xuICAgIGNvbnNvbGUubG9nKGBydWxlSUQgaXMgJHtydWxlSUR9IWAgKVxuICAgIGlmKHJ1bGVJRCA9PSBJREhhbmRsZXIuU1RBTkRBUkRfSUQgfHwgcnVsZUlEID09IFwiXCIpe1xuICAgICAgY29uc29sZS5sb2coYG5ldyBJRCFgIClcbiAgICAgIGNvbnN0IHJ1bGVJbmRleCA9IGF3YWl0IFBlcnNpc3RhbmNlSGFuZGxlci5hZGRSdWxlKG5ld0VudHJ5KTtcbiAgICAgIGFkZFRvUHJvZFRhYmxlKG5ld0VudHJ5LCBydWxlSW5kZXgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiZXhpc3RpbmcgaWQhXCIpXG4gICAgICBjb25zdCBpZF9lbGVtcyA9IElESGFuZGxlci5kZWNvbnN0cnVjdElEKHJ1bGVJRCk7XG4gICAgICBhd2FpdCBQZXJzaXN0YW5jZUhhbmRsZXIudXBkYXRlUnVsZShcbiAgICAgICAgaWRfZWxlbXNbXCJiYWRTaXRlXCJdLFxuICAgICAgICBpZF9lbGVtc1tcImluZGV4XCJdLFxuICAgICAgICBuZXdFbnRyeVxuICAgICAgKTtcbiAgICB9XG4gICAgfVxuICBQcm9kUnVsZXNWaWV3LmNsZWFyRm9ybSgpO1xuICBQcm9kUnVsZXNWaWV3LmNsZWFyVGFibGUoKTtcbiAgcHJlcGFyZVByb2RSdWxlVGFibGUoKTtcbn1cblxuZnVuY3Rpb24gYWRkVG9Qcm9kVGFibGUocHJvZFJ1bGU6IFByb2RSdWxlLCBydWxlSW5kZXg6IG51bWJlcikge1xuICBjb25zdCBydWxlSUQgPSBJREhhbmRsZXIuZ2V0Um93SUQocHJvZFJ1bGUuc291cmNlLCBydWxlSW5kZXgpXG4gIGNvbnN0IGFjdGlvbkJ1dHRvbnMgPSBQcm9kUnVsZXNWaWV3LmFkZEVudHJ5VG9UYWJsZShwcm9kUnVsZSwgcnVsZUlEKTtcbiAgYWN0aW9uQnV0dG9uc1tcImVkaXRcIl0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgcHJlcGFyZVRvRWRpdChwcm9kUnVsZSwgcnVsZUluZGV4KTtcbiAgfSk7XG5cbiAgYWN0aW9uQnV0dG9uc1tcImRlbGV0ZVwiXS5hZGRFdmVudExpc3RlbmVyKFxuICAgIFwiY2xpY2tcIixcbiAgICBmdW5jdGlvbiAoZSkge1xuICAgICAgZGVsZXRlRW50cnkocHJvZFJ1bGUuc291cmNlLCBydWxlSW5kZXgpO1xuICAgIH0sXG4gICAgZmFsc2VcbiAgKTtcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVRvRWRpdChwcm9kUnVsZTogUHJvZFJ1bGUsIHJ1bGVJbmRleDogbnVtYmVyKSB7XG4gIGNvbnN0IHJ1bGVJRCA9IElESGFuZGxlci5nZXRSb3dJRChwcm9kUnVsZS5zb3VyY2UsIHJ1bGVJbmRleClcbiAgUHJvZFJ1bGVzVmlldy5zZXRGb3JtVmFsdWVzKHByb2RSdWxlLCBydWxlSUQpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVFbnRyeSh1bnByb2R1Y3RpdmVTaXRlOiBzdHJpbmcsIHJ1bGVJbmRleDogbnVtYmVyKSB7XG4gIGNvbnN0IHJ1bGVJRCA9IElESGFuZGxlci5nZXRSb3dJRCh1bnByb2R1Y3RpdmVTaXRlLCBydWxlSW5kZXgpO1xuICBQZXJzaXN0YW5jZUhhbmRsZXIuZGVsZXRlUnVsZSh1bnByb2R1Y3RpdmVTaXRlLCBydWxlSW5kZXgpO1xuICBQcm9kUnVsZXNWaWV3LnJlbW92ZUZyb21UYWJsZShydWxlSUQpO1xufVxuXG5cbmNvbnN0IElESGFuZGxlciA9IHtcbmdldFJvd0lEOiAodW5wcm9kdWN0aXZlU2l0ZTogc3RyaW5nLCBydWxlSW5kZXg6IG51bWJlcikgPT4ge1xuICBjb25zdCByb3dJRCA9IGAke3VucHJvZHVjdGl2ZVNpdGV9LSR7cnVsZUluZGV4fWA7XG4gIHJldHVybiByb3dJRDtcbn0sXG5cbmRlY29uc3RydWN0SUQ6IChydWxlSUQ6IHN0cmluZykgPT4ge1xuICBjb25zdCBpZF9hcnJheSA9IHJ1bGVJRC5zcGxpdChcIi1cIik7XG4gIHJldHVybiB7XG4gICAgYmFkU2l0ZTogaWRfYXJyYXlbMF0sXG4gICAgaW5kZXg6ICtpZF9hcnJheVsxXSxcbiAgfTtcbn0sXG5cblNUQU5EQVJEX0lEOiBcIk5FV1wiXG59XG5cblxuXG5jb25zdCBQcm9kUnVsZXNDb250cm9sbGVyID0ge1xuICBkZWxldGVFbnRyeTogZGVsZXRlRW50cnksXG4gIHByZXBhcmVUb0VkaXQ6IHByZXBhcmVUb0VkaXQsXG4gIGFkZFRvUHJvZFRhYmxlOiBhZGRUb1Byb2RUYWJsZSxcbiAgYWRkUnVsZUZyb21Gb3JtOiBhZGRSdWxlRnJvbUZvcm0sXG4gIGdldFN0cmluZ3NGb3JFbnVtczogZ2V0U3RyaW5nc0ZvckVudW1zXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2RSdWxlc0NvbnRyb2xsZXIiLCJpbXBvcnQgeyBBY3Rpb25GYWN0b3J5IH0gZnJvbSBcIi4uL2RvbWFpbi9hY3Rpb25cIjtcbmltcG9ydCB7IFByb2RSdWxlIH0gZnJvbSBcIi4uL2RvbWFpbi9wcm9kUnVsZXNcIjtcbmltcG9ydCB7IGdldFN0cmluZ3NGb3JFbnVtcywgbXNUb1RpbWUgfSBmcm9tIFwiLi4vaGVscGVycy9oZWxwZXJzXCI7XG5pbXBvcnQgKiBhcyBDb250cm9sbGVyIGZyb20gXCIuL3Byb2RSdWxlc0NvbnRyb2xsZXJcIjtcblxuY2xhc3MgUnVsZUZvcm0ge1xuICAgIGFjdGlvbnNvdXJjZTogSFRNTElucHV0RWxlbWVudDtcbiAgICBhY3Rpb250eXBlOiBIVE1MU2VsZWN0RWxlbWVudDtcbiAgICB0YXJnZXRWYWw6IEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgY29uZGl0aW9uOiBIVE1MU2VsZWN0RWxlbWVudDtcbiAgICBkZWxheTogSFRNTFNlbGVjdEVsZW1lbnQ7XG4gICAgcnVsZUlEOiBIVE1MSW5wdXRFbGVtZW50O1xuXG5cbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgdGhpcy5hY3Rpb25zb3VyY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFjdGlvbnNvdXJjZVwiKSBhcyBIVE1MSW5wdXRFbGVtZW50XG4gICAgICB0aGlzLmFjdGlvbnR5cGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFjdGlvbnR5cGVcIikgYXMgSFRNTFNlbGVjdEVsZW1lbnRcbiAgICAgIHRoaXMudGFyZ2V0VmFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXJnZXR2YWx1ZVwiKSBhcyBIVE1MSW5wdXRFbGVtZW50XG4gICAgICB0aGlzLmNvbmRpdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicnVsZWNvbmRpdGlvblwiKSBhcyBIVE1MU2VsZWN0RWxlbWVudFxuICAgICAgdGhpcy5kZWxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWN0aW9uZGVsYXlcIikgYXMgSFRNTFNlbGVjdEVsZW1lbnRcbiAgICAgIHRoaXMucnVsZUlEID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJydWxlSURcIikgYXMgSFRNTElucHV0RWxlbWVudCAgICB9XG5cblxuICAgIHRvU3RhcnQoKXtcbiAgICAgIHRoaXMuYWN0aW9uc291cmNlLnZhbHVlID0gXCJcIlxuICAgICAgdGhpcy5hY3Rpb250eXBlLnNlbGVjdGVkSW5kZXggPSAwXG4gICAgICB0aGlzLnRhcmdldFZhbC52YWx1ZSA9IFwiXCJcbiAgICAgIHRoaXMuY29uZGl0aW9uLnNlbGVjdGVkSW5kZXggPSAwXG4gICAgICB0aGlzLmRlbGF5LnNlbGVjdGVkSW5kZXggPSAwXG4gICAgICB0aGlzLnJ1bGVJRC52YWx1ZSA9IFwiTkVXXCJcbiAgICB9XG5cbiAgICBnZXRWYWx1ZXMoKXtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIFwiYWN0aW9uc291cmNlXCI6IHRoaXMuYWN0aW9uc291cmNlLnZhbHVlLFxuICAgICAgICBcImFjdGlvbnR5cGVcIjogdGhpcy5hY3Rpb250eXBlLnZhbHVlLFxuICAgICAgICBcInRhcmdldFZhbFwiOiB0aGlzLnRhcmdldFZhbC52YWx1ZSxcbiAgICAgICAgXCJjb25kaXRpb25cIjogdGhpcy5jb25kaXRpb24udmFsdWUsXG4gICAgICAgIFwiZGVsYXlcIjogcGFyc2VJbnQodGhpcy5kZWxheS52YWx1ZSksXG4gICAgICAgIFwicnVsZUlEXCI6IHRoaXMucnVsZUlELnZhbHVlXG4gICAgICB9XG4gICAgfVxufVxuXG5jb25zdCBQcm9kVGFibGUgPSB7XG4gIHRhYmxlSUQ6IFwicHJvZHVjdGlvblJ1bGVUYWJsZVwiLFxuXG4gIGdldEJvZHk6ICgpID0+IHtcbiAgICBjb25zdCBwcm9kVGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChQcm9kVGFibGUudGFibGVJRCkgYXMgSFRNTFRhYmxlRWxlbWVudFxuICAgIGNvbnN0IGJvZHkgPSBwcm9kVGFibGUudEJvZGllc1swXVxuICAgIHJldHVybiBib2R5XG4gIH0sXG5cbiAgYWRkRW50cnk6IChwcm9kUnVsZTogUHJvZFJ1bGUsIHJ1bGVJRDogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBwcm9kVGFibGUgPSBQcm9kVGFibGUuZ2V0Qm9keSgpO1xuICAgICAgbGV0IG5ld1JvdyA9IHByb2RUYWJsZS5pbnNlcnRSb3coLTEpO1xuICAgICAgbGV0IHJ1bGVDZWxsID0gbmV3Um93Lmluc2VydENlbGwoMCk7XG4gICAgICBsZXQgYWN0aW9uc0NlbGwgPSBuZXdSb3cuaW5zZXJ0Q2VsbCgxKTtcblxuICAgICAgbmV3Um93LmlkID0gcnVsZUlEO1xuICAgICAgcnVsZUNlbGwuaW5uZXJIVE1MID0gX2Zvcm1hdFN0cmluZyhwcm9kUnVsZSk7XG4gICAgICBydWxlQ2VsbC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInB4LTJcIik7XG4gICAgICBhY3Rpb25zQ2VsbC5pbm5lckhUTUwgPSBgPGJ1dHRvbiBpZD1cIiR7UHJvZFRhYmxlLnRhYmxlSUR9X2VkaXRfJHtydWxlSUR9XCIgY2xhc3M9XCJyb3VuZGVkLWxnIGJvcmRlci13aGl0ZSBiZy1uYXZ5IHRleHQtd2hpdGUgaG92ZXI6YmctYmx1ZVJveWFsIHB4LTIgbXgtMSB0ZXh0LWNlbnRlclwiPmVkaXQ8L2J1dHRvbj5cbiAgICA8YnV0dG9uIGlkPVwiJHtQcm9kVGFibGUudGFibGVJRH1fZGVsZXRlXyR7cnVsZUlEfVwiIGNsYXNzPVwicm91bmRlZC1sZyBib3JkZXItd2hpdGUgYmctbmF2eSB0ZXh0LXdoaXRlIGhvdmVyOmJnLWJsdWVSb3lhbCBweC0yIG14LTEgdGV4dC1jZW50ZXJcIj5kZWxldGU8L2J1dHRvbj5gO1xuXG4gICAgICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtQcm9kVGFibGUudGFibGVJRH1fZGVsZXRlXyR7cnVsZUlEfWApO1xuICAgICAgY29uc3QgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke1Byb2RUYWJsZS50YWJsZUlEfV9lZGl0XyR7cnVsZUlEfWApO1xuICAgICAgcmV0dXJuIHsgZWRpdDogZWRpdEJ1dHRvbiwgZGVsZXRlOiBkZWxldGVCdXR0b24sIGVudHJ5OiBydWxlQ2VsbCB9O1xuICB9LFxuXG4gIHJlbW92ZVJ1bGU6IChydWxlSUQ6c3RyaW5nKSA9PiB7XG4gICAgbGV0IHRvRGVsZXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocnVsZUlEKVxuICAgIHRvRGVsZXRlLnJlbW92ZSgpO1xuICAgIGNvbnNvbGUubG9nKGBSZW1vdmluZyBydWxlIGZvciAke3J1bGVJRH0hYCk7XG4gIH0sXG5cbiAgICBjbGVhcjogKCkgPT4ge1xuICAgICAgY29uc3QgcHJvZFRhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoUHJvZFRhYmxlLnRhYmxlSUQpIGFzIEhUTUxUYWJsZUVsZW1lbnRcbiAgICAgIGNvbnN0IG9sZEJvZHkgPSBwcm9kVGFibGUudEJvZGllc1swXVxuICAgICAgY29uc3QgbmV3Qm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rib2R5Jyk7XG4gICAgICBwcm9kVGFibGUucmVwbGFjZUNoaWxkKG5ld0JvZHksIG9sZEJvZHkpXG4gIH1cblxufVxuXG5jb25zdCBQcm9kUnVsZXNWaWV3ID0ge1xuXG4gIGFkZEVudHJ5VG9UYWJsZTogUHJvZFRhYmxlLmFkZEVudHJ5LFxuICBjbGVhclRhYmxlOiBQcm9kVGFibGUuY2xlYXIsXG4gIHJlbW92ZUZyb21UYWJsZTogUHJvZFRhYmxlLnJlbW92ZVJ1bGUsXG4gIFxuXG5cbiAgZ2V0Rm9ybURhdGE6ICgpID0+IHtcbiAgICBsZXQgbXlGb3JtID0gbmV3IFJ1bGVGb3JtKClcbiAgICByZXR1cm4gbXlGb3JtLmdldFZhbHVlcygpO1xuICB9LFxuXG4gIGNsZWFyRm9ybTogKCkgPT4ge1xuICAgIGNvbnN0IGZvcm0gPSBuZXcgUnVsZUZvcm0oKVxuICAgIGZvcm0udG9TdGFydCgpXG4gIH0sXG5cbiAgc2V0Rm9ybVZhbHVlcyhmb3JtVmFsdWVzOiBQcm9kUnVsZSwgcnVsZUlEOiBzdHJpbmcpIHtcbiAgICBsZXQgbXlGb3JtID0gbmV3IFJ1bGVGb3JtKClcbiAgICBteUZvcm0uYWN0aW9uc291cmNlLnZhbHVlID0gZm9ybVZhbHVlcy5zb3VyY2VcbiAgICBteUZvcm0uYWN0aW9udHlwZS52YWx1ZSA9IGZvcm1WYWx1ZXMuYWN0aW9uLnR5cGVcbiAgICBteUZvcm0udGFyZ2V0VmFsLnZhbHVlID0gZm9ybVZhbHVlcy5hY3Rpb24udGFyZ2V0VmFsdWUgIFxuICAgIG15Rm9ybS5jb25kaXRpb24udmFsdWUgPSBmb3JtVmFsdWVzLmNvbmRpdGlvblxuICAgIG15Rm9ybS5kZWxheS52YWx1ZSA9IGZvcm1WYWx1ZXMuZGVsYXkudG9TdHJpbmcoKVxuICAgIG15Rm9ybS5ydWxlSUQudmFsdWUgPSBydWxlSURcbiAgICBcbiAgfVxufTtcblxuZnVuY3Rpb24gX2Zvcm1hdFN0cmluZyhwcm9kUnVsZTogUHJvZFJ1bGUpIHtcbiAgICBjb25zdCBlbnVtU3RyaW5ncyA9IGdldFN0cmluZ3NGb3JFbnVtcygpXG4gICAgY29uc3QgY29uZGl0aW9uU3RyID0gZW51bVN0cmluZ3MucnVsZWNvbmRpdGlvbltwcm9kUnVsZS5jb25kaXRpb25dXG4gICAgY29uc3QgYWN0aW9uU3RyID0gZW51bVN0cmluZ3MuYWN0aW9udHlwZVtwcm9kUnVsZS5hY3Rpb24udHlwZV1cbiAgICBjb25zdCBkZWxheVN0ciA9IGVudW1TdHJpbmdzLmFjdGlvbnR5cGVbcHJvZFJ1bGUuZGVsYXldIHx8IG1zVG9UaW1lKHByb2RSdWxlLmRlbGF5KVxuXG4gIGNvbnN0IHJlc3VsdHNTdHIgPSAgYDxlbSBjbGFzcz1cInRleHQtbGdcIj4ke3Byb2RSdWxlLnNvdXJjZX08L2VtPiA8YnI+PGI+JHtcbiAgICBjb25kaXRpb25TdHJcbiAgfTwvYj4gd2hlbiBJIHZpc2l0IDxiPiR7cHJvZFJ1bGUuc291cmNlfTwvYj4gdGhlbiA8Yj4ke2RlbGF5U3RyfSBcbiAgJHthY3Rpb25TdHJ9OiA8ZW0+JHtwcm9kUnVsZS5hY3Rpb24udGFyZ2V0VmFsdWV9PC9lbT48L2I+YDtcblxuICByZXR1cm4gcmVzdWx0c1N0clxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9kUnVsZXNWaWV3Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9