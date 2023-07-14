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

/***/ "./src/domain/prodRuleRepo.ts":
/*!************************************!*\
  !*** ./src/domain/prodRuleRepo.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _persistance_persistance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../persistance/persistance */ "./src/persistance/persistance.ts");
/* harmony import */ var _prodRules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prodRules */ "./src/domain/prodRules.ts");
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
var persHandler = new _persistance_persistance__WEBPACK_IMPORTED_MODULE_0__["default"](ruleDBName);
function getAllRules() {
    return __awaiter(this, void 0, void 0, function () {
        var storedRules, ruleList;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, persHandler.getAll()];
                case 1:
                    storedRules = _a.sent();
                    ruleList = {};
                    Object.keys(storedRules).forEach(function (badSite) {
                        var rulesForThisSite = storedRules[badSite];
                        ruleList[badSite] = [];
                        rulesForThisSite.forEach(function (ruleData) {
                            var newRule = _prodRules__WEBPACK_IMPORTED_MODULE_1__.ProdRuleFactory.createRule(badSite, ruleData.action, ruleData.condition, ruleData.delay);
                            ruleList[badSite].push(newRule);
                        });
                    });
                    return [2 /*return*/, ruleList];
            }
        });
    });
}
function getRulesByURL(originURL) {
    return __awaiter(this, void 0, void 0, function () {
        var ruleList, applicableRules;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, getAllRules()];
                case 1:
                    ruleList = _a.sent();
                    applicableRules = [];
                    Object.keys(ruleList).forEach(function (badSite) {
                        if (originURL.includes(badSite)) {
                            for (var _i = 0, _a = ruleList[badSite]; _i < _a.length; _i++) {
                                var rule = _a[_i];
                                applicableRules.push(rule);
                            }
                        }
                        return applicableRules;
                    });
                    return [2 /*return*/, applicableRules];
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
var ProdRuleRepository = {
    getAllRules: getAllRules,
    getRulesByURL: getRulesByURL,
    addRule: addRule,
    deleteRule: deleteRule,
    updateRule: updateRule,
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProdRuleRepository);


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
/* harmony export */   ProdRuleService: () => (/* binding */ ProdRuleService),
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
var ProdRuleService = {
    applyRule: function (rule) {
        var action = _action__WEBPACK_IMPORTED_MODULE_0__.ActionFactory.createAction(rule.action.type, rule.action.targetValue);
        setTimeout(function () {
            action.performAction();
        }, rule.delay);
    }
};



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
/* harmony export */   PersistanceHandler: () => (/* binding */ PersistanceHandler),
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
var PersistanceHandler = /** @class */ (function () {
    function PersistanceHandler(dbName) {
        this.dbName = dbName;
    }
    PersistanceHandler.prototype.getAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var storedValues, resultList;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, chrome.storage.local.get(this.dbName)];
                    case 1:
                        storedValues = _a.sent();
                        resultList = typeof storedValues === "undefined" ? {} : storedValues;
                        if (this.dbName in storedValues) {
                            return [2 /*return*/, storedValues[this.dbName]];
                        }
                        return [2 /*return*/, resultList];
                }
            });
        });
    };
    PersistanceHandler.prototype.findOne = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    PersistanceHandler.prototype.updateOne = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    PersistanceHandler.prototype.deleteOne = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    return PersistanceHandler;
}());
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
/* harmony import */ var _domain_prodRuleRepo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../domain/prodRuleRepo */ "./src/domain/prodRuleRepo.ts");
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
function prepareProdRules() {
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
                case 0: return [4 /*yield*/, _domain_prodRuleRepo__WEBPACK_IMPORTED_MODULE_3__["default"].getAllRules()];
                case 1:
                    ruleList = _a.sent();
                    if (!ruleList || Object.keys(ruleList).length == 0 || Object.keys(ruleList).length == 0) {
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
                    if (!(actionsource && actionType && targetVal)) return [3 /*break*/, 4];
                    if (!(ruleID == IDHandler.STANDARD_ID || ruleID == "")) return [3 /*break*/, 2];
                    return [4 /*yield*/, _domain_prodRuleRepo__WEBPACK_IMPORTED_MODULE_3__["default"].addRule(newEntry)];
                case 1:
                    ruleIndex = _a.sent();
                    console.log("Creating new rule: ".concat(newEntry));
                    addToProdTable(newEntry, ruleIndex);
                    return [3 /*break*/, 4];
                case 2:
                    console.log("Updating rule to be: ".concat(newEntry));
                    id_elems = IDHandler.deconstructID(ruleID);
                    return [4 /*yield*/, _domain_prodRuleRepo__WEBPACK_IMPORTED_MODULE_3__["default"].updateRule(id_elems["badSite"], id_elems["index"], newEntry)];
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
    var editButton = actionButtons["edit"];
    var deleteButton = actionButtons["delete"];
    editButton.addEventListener("click", function (e) {
        e.preventDefault();
        prepareToEdit(prodRule, ruleIndex);
    });
    deleteButton.addEventListener("click", function (e) {
        deleteEntry(prodRule.source, ruleIndex);
    }, false);
}
function prepareToEdit(prodRule, ruleIndex) {
    var ruleID = IDHandler.getRowID(prodRule.source, ruleIndex);
    _prodRulesView__WEBPACK_IMPORTED_MODULE_4__["default"].setFormValues(prodRule, ruleID);
}
function deleteEntry(unproductiveSite, ruleIndex) {
    var ruleID = IDHandler.getRowID(unproductiveSite, ruleIndex);
    _domain_prodRuleRepo__WEBPACK_IMPORTED_MODULE_3__["default"].deleteRule(unproductiveSite, ruleIndex);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9ucy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUdFLGdCQUFZLFdBQXdCO1FBQXhCLDhDQUF3QjtRQURwQyxTQUFJLEdBQWUsVUFBVSxDQUFDLEdBQUc7UUFFL0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDakMsQ0FBQztJQUdILGFBQUM7QUFBRCxDQUFDO0FBRUQ7SUFBMEIsK0JBQU07SUFFOUIscUJBQVksVUFBa0I7UUFBOUIsWUFDRSxrQkFBTSxVQUFVLENBQUMsU0FFbEI7UUFEQyxLQUFJLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUM7O0lBQy9CLENBQUM7SUFFQSxtQ0FBYSxHQUFiO1FBQ0MsS0FBSyxDQUNILDBEQUFtRCxJQUFJLENBQUMsV0FBVyxNQUFHLENBQ3ZFLENBQUM7UUFDRixRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcscUJBQWMsSUFBSSxDQUFDLFdBQVcsQ0FBRSxDQUFDO0lBQ2hFLENBQUM7SUFFQSw4QkFBUSxHQUFSO1FBQ0MsT0FBTyw0QkFBcUIsSUFBSSxDQUFDLFdBQVcsQ0FBRSxDQUFDO0lBQ2pELENBQUM7SUFDSCxrQkFBQztBQUFELENBQUMsQ0FqQnlCLE1BQU0sR0FpQi9CO0FBRUQ7SUFBMEIsK0JBQU07SUFFOUIscUJBQVksU0FBaUI7UUFBN0IsWUFDRSxrQkFBTSxTQUFTLENBQUMsU0FFakI7UUFEQyxLQUFJLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUM7O0lBQy9CLENBQUM7SUFDQSxtQ0FBYSxHQUFiO1FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDckIsSUFBSSxDQUFDLFdBQVcsR0FBRyxvREFBb0QsQ0FBQztTQUN6RTtRQUNELEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNBLDhCQUFRLEdBQVI7UUFDQyxPQUFPLHNDQUErQixJQUFJLENBQUMsV0FBVyxNQUFHLENBQUM7SUFDNUQsQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FBQyxDQWZ5QixNQUFNLEdBZS9CO0FBRUQ7SUFBNkIsa0NBQU07SUFFakMsd0JBQVksVUFBa0I7UUFBOUIsWUFDRSxrQkFBTSxVQUFVLENBQUMsU0FFbEI7UUFEQyxLQUFJLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQyxRQUFRLENBQUM7O0lBQ2xDLENBQUM7SUFDQSxzQ0FBYSxHQUFiO1FBQ0MsS0FBSyxDQUFDLG9EQUE2QyxJQUFJLENBQUMsV0FBVyxNQUFHLENBQUMsQ0FBQztRQUN4RSxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7WUFDbkQsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXO1lBQ2xCLENBQUMsQ0FBQyxrQkFBVyxJQUFJLENBQUMsV0FBVyxDQUFFLENBQUM7UUFDbEMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDO0lBQ3JDLENBQUM7SUFDQSxpQ0FBUSxHQUFSO1FBQ0MsT0FBTyxzQkFBZSxJQUFJLENBQUMsV0FBVyxDQUFFLENBQUM7SUFDM0MsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxDQWhCNEIsTUFBTSxHQWdCbEM7QUFFRCxJQUFLLFVBS0o7QUFMRCxXQUFLLFVBQVU7SUFDYixtQ0FBcUI7SUFDckIsNkJBQWU7SUFDZiw2QkFBZTtJQUNmLHlCQUFXO0FBQ2IsQ0FBQyxFQUxJLFVBQVUsS0FBVixVQUFVLFFBS2Q7QUFBQSxDQUFDO0FBRUYsSUFBTSxhQUFhLEdBQUc7SUFDcEIsWUFBWSxZQUFDLElBQVksRUFBRSxXQUFtQjtRQUM1QyxRQUFRLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRTtZQUMxQixLQUFLLFVBQVUsQ0FBQyxLQUFLO2dCQUNuQixPQUFPLElBQUksV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3RDLEtBQUssVUFBVSxDQUFDLFFBQVE7Z0JBQ3RCLE9BQU8sSUFBSSxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDekMsS0FBSyxVQUFVLENBQUMsS0FBSztnQkFDbkIsT0FBTyxJQUFJLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUN0QztnQkFDRSxNQUFNLDhEQUE4RCxDQUFDO1NBQ3hFO0lBQ0gsQ0FBQztDQUNGLENBQUM7QUFFMkM7QUFDN0MsaUVBQWUsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0RnNDO0FBQ2I7QUFFOUMsSUFBTSxVQUFVLEdBQUcsbUJBQW1CLENBQUM7QUFLdkMsSUFBTSxXQUFXLEdBQUcsSUFBSSxnRUFBa0IsQ0FBQyxVQUFVLENBQUM7QUFFdEQsU0FBZSxXQUFXOzs7Ozt3QkFDSixxQkFBTSxXQUFXLENBQUMsTUFBTSxFQUFFOztvQkFBeEMsV0FBVyxHQUFHLFNBQTBCO29CQUMxQyxRQUFRLEdBQWEsRUFBRTtvQkFDM0IsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxPQUFPO3dCQUN2QyxJQUFJLGdCQUFnQixHQUFHLFdBQVcsQ0FBQyxPQUFPLENBQUM7d0JBQzNDLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFO3dCQUN0QixnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsVUFBQyxRQUFhOzRCQUNyQyxJQUFJLE9BQU8sR0FBRyx1REFBZSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUM7NEJBQ3RHLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO3dCQUNqQyxDQUFDLENBQUM7b0JBQ0osQ0FBQyxDQUFDO29CQUNGLHNCQUFPLFFBQVE7Ozs7Q0FDaEI7QUFFRCxTQUFlLGFBQWEsQ0FBQyxTQUFpQjs7Ozs7d0JBQzNCLHFCQUFNLFdBQVcsRUFBRTs7b0JBQTlCLFFBQVEsR0FBRyxTQUFtQjtvQkFDaEMsZUFBZSxHQUFlLEVBQUU7b0JBQ3BDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsT0FBTzt3QkFDcEMsSUFBSSxTQUFTLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFOzRCQUMvQixLQUFnQixVQUFpQixFQUFqQixhQUFRLENBQUMsT0FBTyxDQUFDLEVBQWpCLGNBQWlCLEVBQWpCLElBQWlCLEVBQUM7Z0NBQTlCLElBQUksSUFBSTtnQ0FDVixlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDOzZCQUM1Qjt5QkFDRjt3QkFDRCxPQUFPLGVBQWUsQ0FBQztvQkFDekIsQ0FBQyxDQUFDLENBQUM7b0JBQ0gsc0JBQU8sZUFBZSxFQUFDOzs7O0NBQ3hCO0FBR0QsU0FBZSxPQUFPLENBQUMsU0FBbUI7Ozs7O3dCQUN2QixxQkFBTSxXQUFXLEVBQUU7O29CQUE5QixRQUFRLEdBQUcsU0FBbUI7b0JBQzlCLGFBQWEsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDO29CQUV2QyxJQUFJLGFBQWEsSUFBSSxRQUFRLEVBQUU7d0JBQzdCLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7cUJBQ3pDO3lCQUFNO3dCQUNMLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO3FCQUN2QztvQkFDRCxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ3RCLHNCQUFPLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7Ozs7Q0FDNUM7QUFFRCxTQUFlLFVBQVUsQ0FBQyxPQUFlLEVBQUUsS0FBYSxFQUFFLFdBQXFCOzs7OztnQkFDN0Usc0NBQXNDO2dCQUN0QyxxQkFBTSxVQUFVLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQzs7b0JBRGhDLHNDQUFzQztvQkFDdEMsU0FBZ0MsQ0FBQztvQkFDakMsc0JBQU8sT0FBTyxDQUFDLFdBQVcsQ0FBQyxFQUFDOzs7O0NBQzdCO0FBRUQsU0FBZSxVQUFVLENBQUMsT0FBYyxFQUFFLEtBQWE7Ozs7O3dCQUN0QyxxQkFBTSxXQUFXLEVBQUU7O29CQUE5QixRQUFRLEdBQUcsU0FBbUI7b0JBQ2xDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUNuQyxJQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFDO3dCQUMvQixPQUFPLFFBQVEsQ0FBQyxPQUFPLENBQUM7cUJBQ3pCO29CQUNELFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7Ozs7Q0FDdkI7QUFFRCxTQUFTLFdBQVcsQ0FBQyxRQUFrQjtJQUNyQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO0FBQzVELENBQUM7QUFFRCxJQUFNLGtCQUFrQixHQUFHO0lBQ3pCLFdBQVcsRUFBRSxXQUFXO0lBQ3hCLGFBQWEsRUFBRSxhQUFhO0lBQzVCLE9BQU8sRUFBRSxPQUFPO0lBQ2hCLFVBQVUsRUFBRSxVQUFVO0lBQ3RCLFVBQVUsRUFBRSxVQUFVO0NBQ3ZCLENBQUM7QUFHRixpRUFBZSxrQkFBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakYyQjtBQUNoQjtBQUU1QztJQUtFLGtCQUNFLFVBQWtCLEVBQ2xCLE1BQXVELEVBQ3ZELFNBQWdDLEVBQ2hDLEtBQWlCO1FBRmpCLG9DQUFXLElBQUksRUFBRSwrQ0FBVSxDQUFDLEtBQUssRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFO1FBQ3ZELHdDQUFZLGFBQWEsQ0FBQyxNQUFNO1FBQ2hDLGlDQUFpQjtRQUVqQixJQUFJLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQztRQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUMzQixJQUFJLE1BQU0sWUFBWSwyQ0FBTSxFQUFFO1lBQzVCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1NBQ3RCO2FBQU07WUFDTCxJQUFJLE9BQU8sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQzFCLElBQUksTUFBTSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7WUFDaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxrREFBYSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDM0Q7SUFDSCxDQUFDO0lBRUQsMkJBQVEsR0FBUjtRQUNFLElBQU0sUUFBUSxHQUFHLDBEQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RDLE9BQU8sVUFBRyxJQUFJLENBQUMsU0FBUywyQkFDdEIsSUFBSSxDQUFDLE1BQU0sbUJBQ0osUUFBUSxjQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUUsQ0FBQztJQUNoRCxDQUFDO0lBQ0gsZUFBQztBQUFELENBQUM7QUFHRCxJQUFNLGVBQWUsR0FBRztJQUN0QixVQUFVLFlBQUMsVUFBa0IsRUFBRSxNQUFjLEVBQUUsU0FBNEIsRUFBRSxLQUFpQjtRQUEvQyxnREFBNEI7UUFBRSxpQ0FBaUI7UUFDNUYsSUFBSTtZQUNGLFNBQVMsR0FBRyxTQUFTLENBQUMsV0FBVyxFQUFFO1lBQ25DLElBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQUM7Z0JBQ2hELElBQU0sY0FBYyxHQUFrQixhQUFhLENBQUMsU0FBdUMsQ0FBQztnQkFDNUYsT0FBTyxJQUFJLFFBQVEsQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FBQzthQUNoRTtTQUNGO1FBQ0QsT0FBTSxDQUFDLEVBQUU7WUFDUCxNQUFNLENBQUM7WUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNmO0lBQ0gsQ0FBQztJQUNELGtCQUFrQixZQUFDLEtBQVU7UUFDM0IsSUFBTSxNQUFNLEdBQUcsa0RBQWEsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFFdEYsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQztJQUM1RSxDQUFDO0NBQ0YsQ0FBQztBQUVGLElBQUssYUFJSjtBQUpELFdBQUssYUFBYTtJQUNoQixrQ0FBaUI7SUFDakIsOEJBQWE7SUFDYiw4QkFBYTtBQUNmLENBQUMsRUFKSSxhQUFhLEtBQWIsYUFBYSxRQUlqQjtBQUVELElBQU0sZUFBZSxHQUFHO0lBQ3RCLFNBQVMsRUFBRSxVQUFDLElBQWM7UUFDeEIsSUFBTSxNQUFNLEdBQUcsa0RBQWEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFDcEYsVUFBVSxDQUFDO1lBQ1QsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3pCLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakIsQ0FBQztDQUNGO0FBRWtFOzs7Ozs7Ozs7Ozs7Ozs7O0FDckU1RCxTQUFTLFFBQVEsQ0FBQyxXQUFtQjtJQUMxQyxJQUFJLFdBQVcsSUFBSSxDQUFDO1FBQUUsT0FBTyxhQUFhLENBQUM7SUFDM0MsSUFBSSxPQUFPLEdBQUcsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFDbkMsSUFBSSxPQUFPLEdBQUcsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMxQyxJQUFJLEtBQUssR0FBRyxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM3QyxJQUFJLElBQUksR0FBRyxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDakQsSUFBSSxPQUFPLEdBQUcsRUFBRTtRQUFFLE9BQU8sUUFBUSxHQUFHLE9BQU8sR0FBRyxNQUFNLENBQUM7U0FDaEQsSUFBSSxPQUFPLEdBQUcsRUFBRTtRQUFFLE9BQU8sUUFBUSxHQUFJLE9BQU8sR0FBRyxNQUFNLENBQUM7U0FDdEQsSUFBSSxLQUFLLEdBQUcsRUFBRTtRQUFFLE9BQU8sUUFBUSxHQUFHLEtBQUssR0FBRyxNQUFNLENBQUM7O1FBQ2pELE9BQU8sUUFBUSxHQUFHLElBQUksR0FBRyxPQUFPLENBQUM7QUFDeEMsQ0FBQztBQUVNLFNBQVMsa0JBQWtCO0lBQ2hDLE9BQU87UUFDTCxhQUFhLEVBQUU7WUFDYixNQUFNLEVBQUUsUUFBUTtZQUNoQixJQUFJLEVBQUUsc0JBQXNCO1lBQzVCLEtBQUssRUFBRSxzQ0FBc0M7U0FDOUM7UUFFRCxVQUFVLEVBQUU7WUFDVixRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLEtBQUssRUFBRSxzQ0FBc0M7WUFDN0MsS0FBSyxFQUFFLG9EQUFvRDtZQUMzRCxHQUFHLEVBQUUseUJBQXlCO1NBQy9CO1FBRUQsV0FBVyxFQUFFO1lBQ1gsQ0FBQyxFQUFFLGFBQWE7WUFDaEIsS0FBSyxFQUFFLGtCQUFrQjtZQUN6QixNQUFNLEVBQUUsaUJBQWlCO1lBQ3pCLE9BQU8sRUFBRSxrQkFBa0I7U0FDNUI7S0FDRixDQUFDO0FBQ0osQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDRDtJQUdJLDRCQUFZLE1BQWM7UUFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNO0lBQ3hCLENBQUM7SUFFSyxtQ0FBTSxHQUFaOzs7Ozs0QkFDdUIscUJBQU0sTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7O3dCQUExRCxZQUFZLEdBQUcsU0FBMkM7d0JBQzFELFVBQVUsR0FBeUIsT0FBTyxZQUFZLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQzt3QkFDL0YsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLFlBQVksRUFBRTs0QkFDN0Isc0JBQU8sWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBQzt5QkFDcEM7d0JBQ0Qsc0JBQU8sVUFBVSxFQUFDOzs7O0tBQ3JCO0lBRUssb0NBQU8sR0FBYjs7Ozs7O0tBRUM7SUFDSyxzQ0FBUyxHQUFmOzs7Ozs7S0FFQztJQUNLLHNDQUFTLEdBQWY7Ozs7OztLQUVDO0lBQ0wseUJBQUM7QUFBRCxDQUFDO0FBRUQsaUVBQWUsa0JBQWtCO0FBQ047Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUJrQztBQUNrQjtBQUN2QjtBQUNBO0FBQ1o7QUFFNUMsZ0JBQWdCLEVBQUUsQ0FBQztBQUVuQixTQUFTLGdCQUFnQjtJQUN2QixXQUFXLEVBQUUsQ0FBQztJQUNkLG9CQUFvQixFQUFFLENBQUM7SUFDdkIsb0JBQW9CLEVBQUUsQ0FBQztJQUN2QixtQkFBbUIsRUFBRSxDQUFDO0FBQ3hCLENBQUM7QUFFRCxTQUFTLFdBQVc7SUFDbEIsSUFBTSxvQkFBb0IsR0FBRyxvRUFBa0IsRUFBRSxDQUFDO0lBQ2xELElBQUksYUFBYSxDQUFDO0lBQ2xCLElBQUksTUFBTSxDQUFDO0lBQ1gsS0FBSyxJQUFJLE1BQU0sSUFBSSxvQkFBb0IsRUFBRTtRQUN2QyxhQUFhLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoRCxNQUFNLEdBQUcsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEMsS0FBSyxJQUFJLEdBQUcsSUFBSSxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUM1QyxJQUFJLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3JELGFBQWEsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1lBQzFCLGFBQWEsQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3hDLGFBQWEsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDMUM7S0FDRjtBQUNILENBQUM7QUFFRCxTQUFTLG1CQUFtQjtJQUM1QixJQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFzQixDQUFDO0lBRXBGLFlBQVksQ0FBQyxnQkFBZ0IsQ0FDM0IsT0FBTyxFQUNQLFVBQVUsQ0FBQztRQUNULENBQUMsQ0FBQyxjQUFjLEVBQUU7UUFDbEIsc0RBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUM1QixDQUFDLEVBQ0QsS0FBSyxDQUNOLENBQUM7QUFDSixDQUFDO0FBRUQsU0FBZSxvQkFBb0I7Ozs7O3dCQUNoQixxQkFBTSw0REFBa0IsQ0FBQyxXQUFXLEVBQUU7O29CQUFqRCxRQUFRLEdBQUcsU0FBc0M7b0JBQ3ZELElBQUksQ0FBQyxRQUFRLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTt3QkFDdkYsV0FBVyxFQUFFLENBQUM7cUJBQ2Y7eUJBQU07d0JBQ0wsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxnQkFBZ0I7NEJBQzdDLElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQzs0QkFDbEIsUUFBUSxDQUFDLGdCQUFnQixDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBYztnQ0FDaEQsY0FBYyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztnQ0FDaEMsU0FBUyxFQUFFLENBQUM7NEJBQ2QsQ0FBQyxDQUFDLENBQUM7d0JBQ0wsQ0FBQyxDQUFDLENBQUM7cUJBQ0o7Ozs7O0NBQ0Y7QUFFRCxTQUFTLFdBQVc7SUFDbEIsSUFBTSxPQUFPLEdBQUcsMEJBQTBCLENBQUM7SUFDM0MsSUFBTSxVQUFVLEdBQUcseURBQWEsQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLGdEQUFnRCxDQUFDO0lBQ3hHLElBQU0sUUFBUSxHQUFHLDhEQUFlLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUM7SUFFaEUsc0RBQWEsQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ2xELENBQUM7QUFFRCxTQUFTLG9CQUFvQjtJQUMzQixJQUFJLFNBQVMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBc0IsQ0FBQztJQUM5RSxTQUFTLENBQUMsZ0JBQWdCLENBQ3hCLE9BQU8sRUFDUCxVQUFVLENBQUM7UUFDVCxDQUFDLENBQUMsY0FBYyxFQUFFO1FBQ2xCLGVBQWUsRUFBRSxDQUFDO0lBQ3BCLENBQUMsRUFDRCxLQUFLLENBQ04sQ0FBQztBQUNKLENBQUM7QUFFRCxTQUFlLGVBQWU7Ozs7OztvQkFDdEIsUUFBUSxHQUFHLHNEQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7b0JBRXZDLFlBQVksR0FBRyxRQUFRLENBQUMsWUFBWTtvQkFDcEMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxTQUFTO29CQUM5QixXQUFXLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQztvQkFDN0IsZUFBZSxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUM7b0JBQ3JDLFVBQVUsR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDO29CQUNqQyxNQUFNLEdBQVcsUUFBUSxDQUFDLE1BQWdCLENBQUM7b0JBRTdDLFNBQVMsR0FBRyx5REFBYSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsU0FBUyxDQUFDO29CQUM3RCxRQUFRLEdBQUcsOERBQWUsQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsV0FBVyxDQUFDO3lCQUU1RixhQUFZLElBQUksVUFBVSxJQUFJLFNBQVMsR0FBdkMsd0JBQXVDO3lCQUN0QyxPQUFNLElBQUksU0FBUyxDQUFDLFdBQVcsSUFBSSxNQUFNLElBQUksRUFBRSxHQUEvQyx3QkFBK0M7b0JBQzlCLHFCQUFNLDREQUFrQixDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUM7O29CQUF0RCxTQUFTLEdBQUcsU0FBMEM7b0JBQzVELE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQXNCLFFBQVEsQ0FBRSxDQUFDO29CQUM3QyxjQUFjLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDOzs7b0JBR3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0JBQXdCLFFBQVEsQ0FBRSxDQUFDO29CQUN6QyxRQUFRLEdBQUcsU0FBUyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDakQscUJBQU0sNERBQWtCLENBQUMsVUFBVSxDQUNqQyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQ25CLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFDakIsUUFBUSxDQUNUOztvQkFKRCxTQUlDLENBQUM7OztvQkFHTixzREFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDO29CQUMxQixzREFBYSxDQUFDLFVBQVUsRUFBRSxDQUFDO29CQUMzQixvQkFBb0IsRUFBRSxDQUFDOzs7OztDQUN4QjtBQUVELFNBQVMsY0FBYyxDQUFDLFFBQWtCLEVBQUUsU0FBaUI7SUFDM0QsSUFBTSxNQUFNLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQztJQUM3RCxJQUFNLGFBQWEsR0FBRyxzREFBYSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDdEUsSUFBTSxVQUFVLEdBQUcsYUFBYSxDQUFDLE1BQU0sQ0FBc0I7SUFDN0QsSUFBTSxZQUFZLEdBQUcsYUFBYSxDQUFDLFFBQVEsQ0FBc0I7SUFDakUsVUFBVSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUM7UUFDOUMsQ0FBQyxDQUFDLGNBQWMsRUFBRTtRQUNsQixhQUFhLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3JDLENBQUMsQ0FBQyxDQUFDO0lBRUgsWUFBWSxDQUFDLGdCQUFnQixDQUMzQixPQUFPLEVBQ1AsVUFBVSxDQUFDO1FBQ1QsV0FBVyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDMUMsQ0FBQyxFQUNELEtBQUssQ0FDTixDQUFDO0FBQ0osQ0FBQztBQUVELFNBQVMsYUFBYSxDQUFDLFFBQWtCLEVBQUUsU0FBaUI7SUFDMUQsSUFBTSxNQUFNLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQztJQUM3RCxzREFBYSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDaEQsQ0FBQztBQUVELFNBQVMsV0FBVyxDQUFDLGdCQUF3QixFQUFFLFNBQWlCO0lBQzlELElBQU0sTUFBTSxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDL0QsNERBQWtCLENBQUMsVUFBVSxDQUFDLGdCQUFnQixFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQzNELHNEQUFhLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3hDLENBQUM7QUFHRCxJQUFNLFNBQVMsR0FBRztJQUNsQixRQUFRLEVBQUUsVUFBQyxnQkFBd0IsRUFBRSxTQUFpQjtRQUNwRCxJQUFNLEtBQUssR0FBRyxVQUFHLGdCQUFnQixjQUFJLFNBQVMsQ0FBRSxDQUFDO1FBQ2pELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVELGFBQWEsRUFBRSxVQUFDLE1BQWM7UUFDNUIsSUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQyxPQUFPO1lBQ0wsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDcEIsS0FBSyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztTQUNwQixDQUFDO0lBQ0osQ0FBQztJQUVELFdBQVcsRUFBRSxLQUFLO0NBQ2pCO0FBSUQsSUFBTSxtQkFBbUIsR0FBRztJQUMxQixXQUFXLEVBQUUsV0FBVztJQUN4QixhQUFhLEVBQUUsYUFBYTtJQUM1QixjQUFjLEVBQUUsY0FBYztJQUM5QixlQUFlLEVBQUUsZUFBZTtJQUNoQyxrQkFBa0IsRUFBRSxnRUFBa0I7Q0FDdkM7QUFFRCxpRUFBZSxtQkFBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6S2dDO0FBR2xFO0lBU0k7UUFDRSxJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFxQjtRQUMvRSxJQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFzQjtRQUM1RSxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFxQjtRQUMzRSxJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFzQjtRQUM5RSxJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFzQjtRQUN4RSxJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFxQjtJQUFJLENBQUM7SUFHMUUsMEJBQU8sR0FBUDtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxHQUFHLEVBQUU7UUFDNUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEdBQUcsQ0FBQztRQUNqQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxFQUFFO1FBQ3pCLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxHQUFHLENBQUM7UUFDaEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEdBQUcsQ0FBQztRQUM1QixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxLQUFLO0lBQzNCLENBQUM7SUFFRCw0QkFBUyxHQUFUO1FBQ0UsT0FBTztZQUNMLGNBQWMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUs7WUFDdkMsWUFBWSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSztZQUNuQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLO1lBQ2pDLFdBQVcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUs7WUFDakMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztZQUNuQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLO1NBQzVCO0lBQ0gsQ0FBQztJQUNMLGVBQUM7QUFBRCxDQUFDO0FBRUQsSUFBTSxTQUFTLEdBQUc7SUFDaEIsT0FBTyxFQUFFLHFCQUFxQjtJQUU5QixPQUFPLEVBQUU7UUFDUCxJQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQXFCO1FBQ2hGLElBQU0sSUFBSSxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLE9BQU8sSUFBSTtJQUNiLENBQUM7SUFFRCxRQUFRLEVBQUUsVUFBQyxRQUFrQixFQUFFLE1BQWM7UUFDekMsSUFBTSxTQUFTLEdBQUcsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3RDLElBQUksTUFBTSxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQyxJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLElBQUksV0FBVyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFdkMsTUFBTSxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUM7UUFDbkIsUUFBUSxDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDN0MsUUFBUSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDdkMsV0FBVyxDQUFDLFNBQVMsR0FBRyx1QkFBZSxTQUFTLENBQUMsT0FBTyxtQkFBUyxNQUFNLDhJQUMzRCxTQUFTLENBQUMsT0FBTyxxQkFBVyxNQUFNLHFIQUErRyxDQUFDO1FBRTlKLElBQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBRyxTQUFTLENBQUMsT0FBTyxxQkFBVyxNQUFNLENBQUUsQ0FBQyxDQUFDO1FBQ3RGLElBQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsVUFBRyxTQUFTLENBQUMsT0FBTyxtQkFBUyxNQUFNLENBQUUsQ0FBQyxDQUFDO1FBQ2xGLE9BQU8sRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxDQUFDO0lBQ3ZFLENBQUM7SUFFRCxVQUFVLEVBQUUsVUFBQyxNQUFhO1FBQ3hCLElBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDO1FBQzlDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUFxQixNQUFNLE1BQUcsQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFQyxLQUFLLEVBQUU7UUFDTCxJQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQXFCO1FBQ2hGLElBQU0sT0FBTyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLElBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDaEQsU0FBUyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDO0lBQzVDLENBQUM7Q0FFRjtBQUVELElBQU0sYUFBYSxHQUFHO0lBRXBCLGVBQWUsRUFBRSxTQUFTLENBQUMsUUFBUTtJQUNuQyxVQUFVLEVBQUUsU0FBUyxDQUFDLEtBQUs7SUFDM0IsZUFBZSxFQUFFLFNBQVMsQ0FBQyxVQUFVO0lBSXJDLFdBQVcsRUFBRTtRQUNYLElBQUksTUFBTSxHQUFHLElBQUksUUFBUSxFQUFFO1FBQzNCLE9BQU8sTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCxTQUFTLEVBQUU7UUFDVCxJQUFNLElBQUksR0FBRyxJQUFJLFFBQVEsRUFBRTtRQUMzQixJQUFJLENBQUMsT0FBTyxFQUFFO0lBQ2hCLENBQUM7SUFFRCxhQUFhLFlBQUMsVUFBb0IsRUFBRSxNQUFjO1FBQ2hELElBQUksTUFBTSxHQUFHLElBQUksUUFBUSxFQUFFO1FBQzNCLE1BQU0sQ0FBQyxZQUFZLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxNQUFNO1FBQzdDLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSTtRQUNoRCxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLFdBQVc7UUFDdEQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLFNBQVM7UUFDN0MsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUU7UUFDaEQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsTUFBTTtJQUU5QixDQUFDO0NBQ0YsQ0FBQztBQUVGLFNBQVMsYUFBYSxDQUFDLFFBQWtCO0lBQ3JDLElBQU0sV0FBVyxHQUFHLG9FQUFrQixFQUFFO0lBQ3hDLElBQU0sWUFBWSxHQUFHLFdBQVcsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQztJQUNsRSxJQUFNLFNBQVMsR0FBRyxXQUFXLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQzlELElBQU0sUUFBUSxHQUFHLFdBQVcsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLDBEQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztJQUVyRixJQUFNLFVBQVUsR0FBSSxnQ0FBdUIsUUFBUSxDQUFDLE1BQU0sMEJBQ3hELFlBQVksa0NBQ1UsUUFBUSxDQUFDLE1BQU0sMEJBQWdCLFFBQVEsa0JBQzdELFNBQVMsbUJBQVMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxXQUFXLGNBQVcsQ0FBQztJQUUzRCxPQUFPLFVBQVU7QUFDbkIsQ0FBQztBQUVELGlFQUFlLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NeUxpYnJhcnkvLi9zcmMvZG9tYWluL2FjdGlvbi50cyIsIndlYnBhY2s6Ly9NeUxpYnJhcnkvLi9zcmMvZG9tYWluL3Byb2RSdWxlUmVwby50cyIsIndlYnBhY2s6Ly9NeUxpYnJhcnkvLi9zcmMvZG9tYWluL3Byb2RSdWxlcy50cyIsIndlYnBhY2s6Ly9NeUxpYnJhcnkvLi9zcmMvaGVscGVycy9oZWxwZXJzLnRzIiwid2VicGFjazovL015TGlicmFyeS8uL3NyYy9wZXJzaXN0YW5jZS9wZXJzaXN0YW5jZS50cyIsIndlYnBhY2s6Ly9NeUxpYnJhcnkvLi9zcmMvdWkvcHJvZFJ1bGVzQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9NeUxpYnJhcnkvLi9zcmMvdWkvcHJvZFJ1bGVzVmlldy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJhYnN0cmFjdCBjbGFzcyBBY3Rpb24ge1xyXG4gIHRhcmdldFZhbHVlOiBzdHJpbmc7XHJcbiAgdHlwZTogQWN0aW9uVHlwZSA9IEFjdGlvblR5cGUuTE9HXHJcbiAgY29uc3RydWN0b3IodGFyZ2V0VmFsdWU6IHN0cmluZyA9IFwiXCIpIHtcclxuICAgIHRoaXMudGFyZ2V0VmFsdWUgPSB0YXJnZXRWYWx1ZTtcclxuICB9XHJcblxyXG4gIGFic3RyYWN0IHBlcmZvcm1BY3Rpb24oKTogdm9pZFxyXG59XHJcblxyXG5jbGFzcyBGcmFtZUFjdGlvbiBleHRlbmRzIEFjdGlvbiB7XHJcbiAgIHR5cGU6IEFjdGlvblR5cGU7XHJcbiAgY29uc3RydWN0b3IoZnJhbWVDb2xvcjogc3RyaW5nKSB7XHJcbiAgICBzdXBlcihmcmFtZUNvbG9yKTtcclxuICAgIHRoaXMudHlwZSA9IEFjdGlvblR5cGUuRlJBTUU7XHJcbiAgfVxyXG5cclxuICAgcGVyZm9ybUFjdGlvbigpIHtcclxuICAgIGFsZXJ0KFxyXG4gICAgICBgVGhpcyBzaXRlIGlzIHVucHJvZHVjdGl2ZSEgRnJhbWluZyB0aGlzIHNpdGUgaW4gJHt0aGlzLnRhcmdldFZhbHVlfS5gXHJcbiAgICApO1xyXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5ib3JkZXIgPSBgMTBweCBzb2xpZCAke3RoaXMudGFyZ2V0VmFsdWV9YDtcclxuICB9XHJcblxyXG4gICB0b1N0cmluZygpIHtcclxuICAgIHJldHVybiBgZnJhbWUgdGhlIHNpdGUgaW4gJHt0aGlzLnRhcmdldFZhbHVlfWA7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBQb3B1cEFjdGlvbiBleHRlbmRzIEFjdGlvbiB7XHJcbiAgIHR5cGU6IEFjdGlvblR5cGU7XHJcbiAgY29uc3RydWN0b3IocG9wdXBUZXh0OiBzdHJpbmcpIHtcclxuICAgIHN1cGVyKHBvcHVwVGV4dCk7XHJcbiAgICB0aGlzLnR5cGUgPSBBY3Rpb25UeXBlLlBPUFVQO1xyXG4gIH1cclxuICAgcGVyZm9ybUFjdGlvbigpIHtcclxuICAgIGlmICghdGhpcy50YXJnZXRWYWx1ZSkge1xyXG4gICAgICB0aGlzLnRhcmdldFZhbHVlID0gXCJEbyB5b3UgdHJ1bHkgd2FudCB0byBzcGVuZCBtb3JlIHRpbWUgb24gdGhpcyBzaXRlP1wiO1xyXG4gICAgfVxyXG4gICAgYWxlcnQodGhpcy50YXJnZXRWYWx1ZSk7XHJcbiAgfVxyXG4gICB0b1N0cmluZygpIHtcclxuICAgIHJldHVybiBgc2hvdyBhIHBvcHVwIHRoYXQgc2F5czogXFxuICcke3RoaXMudGFyZ2V0VmFsdWV9J2A7XHJcbiAgfVxyXG59XHJcblxyXG5jbGFzcyBSZWRpcmVjdEFjdGlvbiBleHRlbmRzIEFjdGlvbiB7XHJcbiAgIHR5cGU6IEFjdGlvblR5cGU7XHJcbiAgY29uc3RydWN0b3IocmVkaXJlY3RUbzogc3RyaW5nKSB7XHJcbiAgICBzdXBlcihyZWRpcmVjdFRvKTtcclxuICAgIHRoaXMudHlwZSA9IEFjdGlvblR5cGUuUkVESVJFQ1Q7XHJcbiAgfVxyXG4gICBwZXJmb3JtQWN0aW9uKCkge1xyXG4gICAgYWxlcnQoYFRoaXMgc2l0ZSBpcyB1bnByb2R1Y3RpdmUhIFJlZGlyZWN0aW5nIHRvICR7dGhpcy50YXJnZXRWYWx1ZX0uYCk7XHJcbiAgICBsZXQgdGFyZ2V0VmFsdWUgPSB0aGlzLnRhcmdldFZhbHVlLnN0YXJ0c1dpdGgoXCJodHRwXCIpXHJcbiAgICAgID8gdGhpcy50YXJnZXRWYWx1ZVxyXG4gICAgICA6IGBodHRwczovLyR7dGhpcy50YXJnZXRWYWx1ZX1gO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB0YXJnZXRWYWx1ZTtcclxuICB9XHJcbiAgIHRvU3RyaW5nKCkge1xyXG4gICAgcmV0dXJuIGByZWRpcmVjdCB0byAke3RoaXMudGFyZ2V0VmFsdWV9YDtcclxuICB9XHJcbn1cclxuXHJcbmVudW0gQWN0aW9uVHlwZSB7XHJcbiAgUkVESVJFQ1QgPSBcIlJFRElSRUNUXCIsXHJcbiAgUE9QVVAgPSBcIlBPUFVQXCIsXHJcbiAgRlJBTUUgPSBcIkZSQU1FXCIsXHJcbiAgTE9HID0gXCJMT0dcIixcclxufTtcclxuXHJcbmNvbnN0IEFjdGlvbkZhY3RvcnkgPSB7XHJcbiAgY3JlYXRlQWN0aW9uKHR5cGU6IHN0cmluZywgdGFyZ2V0VmFsdWU6IHN0cmluZyk6IEFjdGlvbiB7XHJcbiAgICBzd2l0Y2ggKHR5cGUudG9VcHBlckNhc2UoKSkge1xyXG4gICAgICBjYXNlIEFjdGlvblR5cGUuRlJBTUU6XHJcbiAgICAgICAgcmV0dXJuIG5ldyBGcmFtZUFjdGlvbih0YXJnZXRWYWx1ZSk7XHJcbiAgICAgIGNhc2UgQWN0aW9uVHlwZS5SRURJUkVDVDpcclxuICAgICAgICByZXR1cm4gbmV3IFJlZGlyZWN0QWN0aW9uKHRhcmdldFZhbHVlKTtcclxuICAgICAgY2FzZSBBY3Rpb25UeXBlLlBPUFVQOlxyXG4gICAgICAgIHJldHVybiBuZXcgUG9wdXBBY3Rpb24odGFyZ2V0VmFsdWUpO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHRocm93IFwiVW5rbm93biBhY3Rpb24gdHlwZSEgTXVzdCBiZSBkZWZpbmVkIGluIHRoZSBBY3Rpb25UeXBlIEVudW0uXCI7XHJcbiAgICB9XHJcbiAgfSxcclxufTtcclxuXHJcbmV4cG9ydCB7IEFjdGlvbiwgQWN0aW9uRmFjdG9yeSwgQWN0aW9uVHlwZSB9O1xyXG5leHBvcnQgZGVmYXVsdCBBY3Rpb24iLCJpbXBvcnQgeyBQcm9kUnVsZSB9IGZyb20gXCIuL3Byb2RSdWxlc1wiO1xyXG5pbXBvcnQgUGVyc2lzdGFuY2VIYW5kbGVyIGZyb20gXCIuLi9wZXJzaXN0YW5jZS9wZXJzaXN0YW5jZVwiXHJcbmltcG9ydCB7IFByb2RSdWxlRmFjdG9yeSB9IGZyb20gXCIuL3Byb2RSdWxlc1wiO1xyXG5cclxuY29uc3QgcnVsZURCTmFtZSA9IFwicHJvZHVjdGl2aXR5UnVsZXNcIjtcclxuaW50ZXJmYWNlIFJ1bGVMaXN0IHtcclxuICBba2V5OiBzdHJpbmddOiBQcm9kUnVsZVtdXHJcbn1cclxuXHJcbmNvbnN0IHBlcnNIYW5kbGVyID0gbmV3IFBlcnNpc3RhbmNlSGFuZGxlcihydWxlREJOYW1lKVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0QWxsUnVsZXMoKSB7XHJcbiAgY29uc3Qgc3RvcmVkUnVsZXMgPSBhd2FpdCBwZXJzSGFuZGxlci5nZXRBbGwoKVxyXG4gIGxldCBydWxlTGlzdDogUnVsZUxpc3QgPSB7fVxyXG4gIE9iamVjdC5rZXlzKHN0b3JlZFJ1bGVzKS5mb3JFYWNoKChiYWRTaXRlKSA9PiB7XHJcbiAgICBsZXQgcnVsZXNGb3JUaGlzU2l0ZSA9IHN0b3JlZFJ1bGVzW2JhZFNpdGVdXHJcbiAgICBydWxlTGlzdFtiYWRTaXRlXSA9IFtdXHJcbiAgICBydWxlc0ZvclRoaXNTaXRlLmZvckVhY2goKHJ1bGVEYXRhOiBhbnkpID0+IHtcclxuICAgICAgbGV0IG5ld1J1bGUgPSBQcm9kUnVsZUZhY3RvcnkuY3JlYXRlUnVsZShiYWRTaXRlLCBydWxlRGF0YS5hY3Rpb24sIHJ1bGVEYXRhLmNvbmRpdGlvbiwgcnVsZURhdGEuZGVsYXkpXHJcbiAgICAgIHJ1bGVMaXN0W2JhZFNpdGVdLnB1c2gobmV3UnVsZSlcclxuICAgIH0pXHJcbiAgfSlcclxuICByZXR1cm4gcnVsZUxpc3RcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0UnVsZXNCeVVSTChvcmlnaW5VUkw6IHN0cmluZykge1xyXG4gIGNvbnN0IHJ1bGVMaXN0ID0gYXdhaXQgZ2V0QWxsUnVsZXMoKTtcclxuICBsZXQgYXBwbGljYWJsZVJ1bGVzOiBQcm9kUnVsZVtdID0gW11cclxuICBPYmplY3Qua2V5cyhydWxlTGlzdCkuZm9yRWFjaCgoYmFkU2l0ZSkgPT4ge1xyXG4gICAgaWYgKG9yaWdpblVSTC5pbmNsdWRlcyhiYWRTaXRlKSkge1xyXG4gICAgICBmb3IobGV0IHJ1bGUgb2YgcnVsZUxpc3RbYmFkU2l0ZV0pe1xyXG4gICAgICAgIGFwcGxpY2FibGVSdWxlcy5wdXNoKHJ1bGUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXBwbGljYWJsZVJ1bGVzO1xyXG4gIH0pO1xyXG4gIHJldHVybiBhcHBsaWNhYmxlUnVsZXM7XHJcbn1cclxuXHJcblxyXG5hc3luYyBmdW5jdGlvbiBhZGRSdWxlKG15TmV3UnVsZTogUHJvZFJ1bGUpIHtcclxuICBjb25zdCBydWxlTGlzdCA9IGF3YWl0IGdldEFsbFJ1bGVzKCk7XHJcbiAgY29uc3QgdGFyZ2V0V2Vic2l0ZSA9IG15TmV3UnVsZS5zb3VyY2U7XHJcblxyXG4gIGlmICh0YXJnZXRXZWJzaXRlIGluIHJ1bGVMaXN0KSB7XHJcbiAgICBydWxlTGlzdFt0YXJnZXRXZWJzaXRlXS5wdXNoKG15TmV3UnVsZSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJ1bGVMaXN0W3RhcmdldFdlYnNpdGVdID0gW215TmV3UnVsZV07XHJcbiAgfVxyXG4gIHNldFJ1bGVMaXN0KHJ1bGVMaXN0KTtcclxuICByZXR1cm4gKHJ1bGVMaXN0W3RhcmdldFdlYnNpdGVdLmxlbmd0aCAtIDEpXHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVJ1bGUoYmFkU2l0ZTogc3RyaW5nLCBpbmRleDogbnVtYmVyLCB1cGRhdGVkUnVsZTogUHJvZFJ1bGUpIHtcclxuICAvLyBsZXQgcnVsZUxpc3QgPSBhd2FpdCBnZXRBbGxSdWxlcygpO1xyXG4gIGF3YWl0IGRlbGV0ZVJ1bGUoYmFkU2l0ZSwgaW5kZXgpO1xyXG4gIHJldHVybiBhZGRSdWxlKHVwZGF0ZWRSdWxlKTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZGVsZXRlUnVsZShiYWRTaXRlOnN0cmluZywgaW5kZXg6IG51bWJlcikge1xyXG4gIGxldCBydWxlTGlzdCA9IGF3YWl0IGdldEFsbFJ1bGVzKCk7XHJcbiAgcnVsZUxpc3RbYmFkU2l0ZV0uc3BsaWNlKGluZGV4LCAxKTtcclxuICBpZihydWxlTGlzdFtiYWRTaXRlXS5sZW5ndGggPT0gMCl7XHJcbiAgICBkZWxldGUgcnVsZUxpc3RbYmFkU2l0ZV1cclxuICB9XHJcbiAgc2V0UnVsZUxpc3QocnVsZUxpc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRSdWxlTGlzdChydWxlTGlzdDogUnVsZUxpc3QpIHtcclxuICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBwcm9kdWN0aXZpdHlSdWxlczogcnVsZUxpc3QgfSk7XHJcbn1cclxuXHJcbmNvbnN0IFByb2RSdWxlUmVwb3NpdG9yeSA9IHtcclxuICBnZXRBbGxSdWxlczogZ2V0QWxsUnVsZXMsXHJcbiAgZ2V0UnVsZXNCeVVSTDogZ2V0UnVsZXNCeVVSTCxcclxuICBhZGRSdWxlOiBhZGRSdWxlLFxyXG4gIGRlbGV0ZVJ1bGU6IGRlbGV0ZVJ1bGUsXHJcbiAgdXBkYXRlUnVsZTogdXBkYXRlUnVsZSxcclxufTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kUnVsZVJlcG9zaXRvcnkiLCJpbXBvcnQgeyBBY3Rpb24sIEFjdGlvblR5cGUsIEFjdGlvbkZhY3RvcnkgfSBmcm9tIFwiLi9hY3Rpb25cIlxuaW1wb3J0IHttc1RvVGltZSB9IGZyb20gXCIuLi9oZWxwZXJzL2hlbHBlcnNcIlxuXG5jbGFzcyBQcm9kUnVsZSB7XG4gIHNvdXJjZTogc3RyaW5nXG4gIGFjdGlvbjogQWN0aW9uXG4gIGNvbmRpdGlvbjogUnVsZUNvbmRpdGlvblxuICBkZWxheTogbnVtYmVyXG4gIGNvbnN0cnVjdG9yKFxuICAgIGJhZFdlYnNpdGU6IHN0cmluZyxcbiAgICBhY3Rpb24gPSB7IHR5cGU6IEFjdGlvblR5cGUuRlJBTUUsIHRhcmdldFZhbHVlOiBcInJlZFwiIH0sXG4gICAgY29uZGl0aW9uID0gUnVsZUNvbmRpdGlvbi5BTFdBWVMsXG4gICAgZGVsYXk6IG51bWJlciA9IDBcbiAgKSB7XG4gICAgdGhpcy5zb3VyY2UgPSBiYWRXZWJzaXRlO1xuICAgIHRoaXMuZGVsYXkgPSBkZWxheTtcbiAgICB0aGlzLmNvbmRpdGlvbiA9IGNvbmRpdGlvbjtcbiAgICBpZiAoYWN0aW9uIGluc3RhbmNlb2YgQWN0aW9uKSB7XG4gICAgICB0aGlzLmFjdGlvbiA9IGFjdGlvbjtcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IHRtcFR5cGUgPSBhY3Rpb24udHlwZTtcbiAgICAgIGxldCB0bXBWYWwgPSBhY3Rpb24udGFyZ2V0VmFsdWU7XG4gICAgICB0aGlzLmFjdGlvbiA9IEFjdGlvbkZhY3RvcnkuY3JlYXRlQWN0aW9uKHRtcFR5cGUsIHRtcFZhbCk7XG4gICAgfVxuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgY29uc3QgZGVsYXlTdHIgPSBtc1RvVGltZSh0aGlzLmRlbGF5KTtcbiAgICByZXR1cm4gYCR7dGhpcy5jb25kaXRpb259IHdoZW4gSSB2aXNpdCAke1xuICAgICAgdGhpcy5zb3VyY2VcbiAgICB9IHRoZW4gJHtkZWxheVN0cn0gJHt0aGlzLmFjdGlvbi50b1N0cmluZygpfWA7XG4gIH1cbn1cblxuXG5jb25zdCBQcm9kUnVsZUZhY3RvcnkgPSB7XG4gIGNyZWF0ZVJ1bGUoYmFkV2Vic2l0ZTogc3RyaW5nLCBhY3Rpb246IEFjdGlvbiwgY29uZGl0aW9uOiBzdHJpbmcgPSBcIkFMV0FZU1wiLCBkZWxheTogbnVtYmVyID0gMCk6IFByb2RSdWxlIHtcbiAgICB0cnkge1xuICAgICAgY29uZGl0aW9uID0gY29uZGl0aW9uLnRvVXBwZXJDYXNlKClcbiAgICAgIGlmKE9iamVjdC5rZXlzKFJ1bGVDb25kaXRpb24pLmluY2x1ZGVzKGNvbmRpdGlvbikpe1xuICAgICAgICBjb25zdCBub3JtYWxpemVkQ29uZDogUnVsZUNvbmRpdGlvbiA9IFJ1bGVDb25kaXRpb25bY29uZGl0aW9uIGFzIGtleW9mIHR5cGVvZiBSdWxlQ29uZGl0aW9uXVxuICAgICAgICByZXR1cm4gbmV3IFByb2RSdWxlKGJhZFdlYnNpdGUsIGFjdGlvbiwgbm9ybWFsaXplZENvbmQsIGRlbGF5KTtcbiAgICAgIH1cbiAgICB9XG4gICAgY2F0Y2goZSkge1xuICAgICAgdGhyb3cgZVxuICAgICAgY29uc29sZS5sb2coZSlcbiAgICB9XG4gIH0sXG4gIGNyZWF0ZVJ1bGVGcm9tSlNPTihlbnRyeTogYW55KSB7XG4gICAgY29uc3QgYWN0aW9uID0gQWN0aW9uRmFjdG9yeS5jcmVhdGVBY3Rpb24oZW50cnkuYWN0aW9uLnR5cGUsIGVudHJ5LmFjdGlvbi50YXJnZXR2YWx1ZSlcblxuICAgIHJldHVybiB0aGlzLmNyZWF0ZVJ1bGUoZW50cnkuc291cmNlLCBhY3Rpb24sIGVudHJ5LmNvbmRpdGlvbiwgZW50cnkuZGVsYXkpXG4gIH0sXG59O1xuXG5lbnVtIFJ1bGVDb25kaXRpb24ge1xuICBBTFdBWVMgPSBcIkFMV0FZU1wiLFxuICBXT1JLID0gXCJXT1JLXCIsXG4gIEdPQUwgPSBcIkdPQUxcIixcbn1cblxuY29uc3QgUHJvZFJ1bGVTZXJ2aWNlID0ge1xuICBhcHBseVJ1bGU6IChydWxlOiBQcm9kUnVsZSkgPT4ge1xuICAgIGNvbnN0IGFjdGlvbiA9IEFjdGlvbkZhY3RvcnkuY3JlYXRlQWN0aW9uKHJ1bGUuYWN0aW9uLnR5cGUsIHJ1bGUuYWN0aW9uLnRhcmdldFZhbHVlKVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgYWN0aW9uLnBlcmZvcm1BY3Rpb24oKTtcbiAgICB9LCBydWxlLmRlbGF5KTtcbiAgfVxufVxuXG5leHBvcnQge1Byb2RSdWxlLCBSdWxlQ29uZGl0aW9uLCBQcm9kUnVsZUZhY3RvcnksIFByb2RSdWxlU2VydmljZSB9IiwiXG5cbmV4cG9ydCBmdW5jdGlvbiBtc1RvVGltZShtaWxpc2Vjb25kczogbnVtYmVyKSB7XG4gIGlmIChtaWxpc2Vjb25kcyA9PSAwKSByZXR1cm4gXCJpbW1lZGlhdGVseVwiO1xuICBsZXQgc2Vjb25kcyA9IChtaWxpc2Vjb25kcyAvIDEwMDApO1xuICBsZXQgbWludXRlcyA9IChtaWxpc2Vjb25kcyAvICgxMDAwICogNjApKTtcbiAgbGV0IGhvdXJzID0gKG1pbGlzZWNvbmRzIC8gKDEwMDAgKiA2MCAqIDYwKSk7XG4gIGxldCBkYXlzID0gKG1pbGlzZWNvbmRzIC8gKDEwMDAgKiA2MCAqIDYwICogMjQpKTtcbiAgaWYgKHNlY29uZHMgPCA2MCkgcmV0dXJuIFwiYWZ0ZXIgXCIgKyBzZWNvbmRzICsgXCIgU2VjXCI7XG4gIGVsc2UgaWYgKG1pbnV0ZXMgPCA2MCkgcmV0dXJuIFwiYWZ0ZXIgXCIgKyAgbWludXRlcyArIFwiIE1pblwiO1xuICBlbHNlIGlmIChob3VycyA8IDI0KSByZXR1cm4gXCJhZnRlciBcIiArIGhvdXJzICsgXCIgSHJzXCI7XG4gIGVsc2UgcmV0dXJuIFwiYWZ0ZXIgXCIgKyBkYXlzICsgXCIgRGF5c1wiO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3RyaW5nc0ZvckVudW1zKCk6IHtba2V5OnN0cmluZ106IHtba2V5OnN0cmluZ10gOiBzdHJpbmd9fSB7XG4gIHJldHVybiB7XG4gICAgcnVsZWNvbmRpdGlvbjoge1xuICAgICAgQUxXQVlTOiBcImFsd2F5c1wiLFxuICAgICAgV09SSzogXCJkdXJpbmcgbXkgd29yayB0aW1lc1wiLFxuICAgICAgR09BTFM6IFwid2hpbGUgbXkgZ29hbHMgYXJlIG5vdCByZWFjaGVkIChXSVApXCIsXG4gICAgfSxcblxuICAgIGFjdGlvbnR5cGU6IHtcbiAgICAgIFJFRElSRUNUOiBcInJlZGlyZWN0IG1lIHRvXCIsXG4gICAgICBQT1BVUDogXCJzaG93IGEgcG9wdXAgd2l0aCB0aGUgZm9sbG93aW5nIHRleHRcIixcbiAgICAgIEZSQU1FOiBcImZyYW1lIHRoZSB1bnByb2R1Y3RpdmUgcGFnZSBpbiB0aGUgZm9sbG93aW5nIGNvbG9yXCIsXG4gICAgICBMT0c6IFwibG9nIG15IHZpc2l0IG9ubHkgKFdJUClcIixcbiAgICB9LFxuXG4gICAgYWN0aW9uZGVsYXk6IHtcbiAgICAgIDA6IFwiaW1tZWRpYXRlbHlcIixcbiAgICAgIDMwMDAwOiBcImFmdGVyIDMwIHNlY29uZHNcIixcbiAgICAgIDMwMDAwMDogXCJhZnRlciA1IG1pbnV0ZXNcIixcbiAgICAgIDEyMDAwMDA6IFwiYWZ0ZXIgMjAgbWludXRlc1wiLFxuICAgIH0sXG4gIH07XG59XG5cbiIsIlxuXG5jbGFzcyBQZXJzaXN0YW5jZUhhbmRsZXIge1xuICAgIGRiTmFtZTogc3RyaW5nXG5cbiAgICBjb25zdHJ1Y3RvcihkYk5hbWU6IHN0cmluZyl7XG4gICAgICAgIHRoaXMuZGJOYW1lID0gZGJOYW1lXG4gICAgfVxuICAgIFxuICAgIGFzeW5jIGdldEFsbCgpIHtcbiAgICAgICAgbGV0IHN0b3JlZFZhbHVlcyA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldCh0aGlzLmRiTmFtZSk7XG4gICAgICAgIGxldCByZXN1bHRMaXN0OiB7W2tleTogc3RyaW5nXTogYW55fSA9IHR5cGVvZiBzdG9yZWRWYWx1ZXMgPT09IFwidW5kZWZpbmVkXCIgPyB7fSA6IHN0b3JlZFZhbHVlcztcbiAgICAgICAgaWYgKHRoaXMuZGJOYW1lIGluIHN0b3JlZFZhbHVlcykge1xuICAgICAgICAgICAgcmV0dXJuIHN0b3JlZFZhbHVlc1t0aGlzLmRiTmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdExpc3Q7XG4gICAgfVxuXG4gICAgYXN5bmMgZmluZE9uZSgpIHtcblxuICAgIH1cbiAgICBhc3luYyB1cGRhdGVPbmUoKSB7XG5cbiAgICB9XG4gICAgYXN5bmMgZGVsZXRlT25lICgpIHtcblxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGVyc2lzdGFuY2VIYW5kbGVyXG5leHBvcnQge1BlcnNpc3RhbmNlSGFuZGxlcn0iLCJpbXBvcnQgeyBBY3Rpb25GYWN0b3J5LCBBY3Rpb25UeXBlIH0gZnJvbSBcIi4uL2RvbWFpbi9hY3Rpb25cIjtcbmltcG9ydCB7IFByb2RSdWxlLCBQcm9kUnVsZUZhY3RvcnksIFJ1bGVDb25kaXRpb24gfSBmcm9tIFwiLi4vZG9tYWluL3Byb2RSdWxlc1wiO1xuaW1wb3J0IHsgZ2V0U3RyaW5nc0ZvckVudW1zIH0gZnJvbSBcIi4uL2hlbHBlcnMvaGVscGVyc1wiO1xuaW1wb3J0IFBlcnNpc3RhbmNlSGFuZGxlciBmcm9tIFwiLi4vZG9tYWluL3Byb2RSdWxlUmVwb1wiO1xuaW1wb3J0IFByb2RSdWxlc1ZpZXcgZnJvbSBcIi4vcHJvZFJ1bGVzVmlld1wiO1xuXG5wcmVwYXJlUHJvZFJ1bGVzKCk7XG5cbmZ1bmN0aW9uIHByZXBhcmVQcm9kUnVsZXMoKSB7XG4gIHByZXBhcmVGb3JtKCk7XG4gIHByZXBhcmVQcm9kUnVsZVRhYmxlKCk7XG4gIHByZXBhcmVBZGRSdWxlQnV0dG9uKCk7XG4gIHByZXBhcmVDYW5jZWxCdXR0b24oKTtcbn1cblxuZnVuY3Rpb24gcHJlcGFyZUZvcm0oKSB7XG4gIGNvbnN0IG11bHRpcGxlQ2hvaWNlRmllbGRzID0gZ2V0U3RyaW5nc0ZvckVudW1zKCk7XG4gIGxldCBzZWxlY3RFbGVtZW50O1xuICBsZXQgbXlEaWN0O1xuICBmb3IgKGxldCBlbGVtSUQgaW4gbXVsdGlwbGVDaG9pY2VGaWVsZHMpIHtcbiAgICBzZWxlY3RFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbUlEKTtcbiAgICBteURpY3QgPSBtdWx0aXBsZUNob2ljZUZpZWxkc1tlbGVtSURdO1xuICAgIGZvciAobGV0IGtleSBpbiBtdWx0aXBsZUNob2ljZUZpZWxkc1tlbGVtSURdKSB7XG4gICAgICBsZXQgb3B0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICBvcHRpb25FbGVtZW50LnZhbHVlID0ga2V5O1xuICAgICAgb3B0aW9uRWxlbWVudC50ZXh0Q29udGVudCA9IG15RGljdFtrZXldO1xuICAgICAgc2VsZWN0RWxlbWVudC5hcHBlbmRDaGlsZChvcHRpb25FbGVtZW50KTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJlcGFyZUNhbmNlbEJ1dHRvbigpe1xuY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW5jZWxSdWxlQnV0dG9uXCIpIGFzIEhUTUxCdXR0b25FbGVtZW50O1xuXG4gIGNhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFxuICAgIFwiY2xpY2tcIixcbiAgICBmdW5jdGlvbiAoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBQcm9kUnVsZXNWaWV3LmNsZWFyRm9ybSgpO1xuICAgIH0sXG4gICAgZmFsc2VcbiAgKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gcHJlcGFyZVByb2RSdWxlVGFibGUoKSB7XG4gIGNvbnN0IHJ1bGVMaXN0ID0gYXdhaXQgUGVyc2lzdGFuY2VIYW5kbGVyLmdldEFsbFJ1bGVzKCk7XG4gIGlmICghcnVsZUxpc3QgfHwgT2JqZWN0LmtleXMocnVsZUxpc3QpLmxlbmd0aCA9PSAwIHx8IE9iamVjdC5rZXlzKHJ1bGVMaXN0KS5sZW5ndGggPT0gMCkge1xuICAgIGFkZERlbW9SdWxlKCk7XG4gIH0gZWxzZSB7XG4gICAgT2JqZWN0LmtleXMocnVsZUxpc3QpLmZvckVhY2goKHVucHJvZHVjdGl2ZVNpdGUpID0+IHtcbiAgICAgIGxldCBydWxlSW5kZXggPSAwO1xuICAgICAgcnVsZUxpc3RbdW5wcm9kdWN0aXZlU2l0ZV0uZm9yRWFjaCgocnVsZTogUHJvZFJ1bGUpID0+IHtcbiAgICAgICAgYWRkVG9Qcm9kVGFibGUocnVsZSwgcnVsZUluZGV4KTtcbiAgICAgICAgcnVsZUluZGV4Kys7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGREZW1vUnVsZSgpIHtcbiAgY29uc3QgZGVtb1VSTCA9IFwiZGVtb1VucHJvZHVjdGl2ZVNpdGUuY29tXCI7XG4gIGNvbnN0IGRlbW9BY3Rpb24gPSBBY3Rpb25GYWN0b3J5LmNyZWF0ZUFjdGlvbihcIlBPUFVQXCIsIFwiRG8geW91IHJlYWxseSB3YW50IHRvIHNwZW5kIHRpbWUgb24gdGhpcyBzaXRlP1wiKVxuICBjb25zdCBkZW1vUnVsZSA9IFByb2RSdWxlRmFjdG9yeS5jcmVhdGVSdWxlKGRlbW9VUkwsIGRlbW9BY3Rpb24pXG5cbiAgUHJvZFJ1bGVzVmlldy5hZGRFbnRyeVRvVGFibGUoZGVtb1J1bGUsIFwiZGVtb1wiKTtcbn1cblxuZnVuY3Rpb24gcHJlcGFyZUFkZFJ1bGVCdXR0b24oKSB7XG4gIGxldCBhZGRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFJ1bGVCdXR0b25cIikgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XG4gIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFxuICAgIFwiY2xpY2tcIixcbiAgICBmdW5jdGlvbiAoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICBhZGRSdWxlRnJvbUZvcm0oKTtcbiAgICB9LFxuICAgIGZhbHNlXG4gICk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGFkZFJ1bGVGcm9tRm9ybSgpIHtcbiAgY29uc3QgZm9ybURhdGEgPSBQcm9kUnVsZXNWaWV3LmdldEZvcm1EYXRhKCk7XG5cbiAgY29uc3QgYWN0aW9uc291cmNlID0gZm9ybURhdGEuYWN0aW9uc291cmNlXG4gIGNvbnN0IHRhcmdldFZhbCA9IGZvcm1EYXRhLnRhcmdldFZhbFxuICBjb25zdCBhY3Rpb25EZWxheSA9IGZvcm1EYXRhLmRlbGF5O1xuICBjb25zdCBhY3Rpb25Db25kaXRpb24gPSBmb3JtRGF0YS5jb25kaXRpb247XG4gIGNvbnN0IGFjdGlvblR5cGUgPSBmb3JtRGF0YS5hY3Rpb250eXBlO1xuICBjb25zdCBydWxlSUQ6IHN0cmluZyA9IGZvcm1EYXRhLnJ1bGVJRCBhcyBzdHJpbmc7XG5cbiAgbGV0IG5ld0FjdGlvbiA9IEFjdGlvbkZhY3RvcnkuY3JlYXRlQWN0aW9uKGFjdGlvblR5cGUsIHRhcmdldFZhbClcbiAgbGV0IG5ld0VudHJ5ID0gUHJvZFJ1bGVGYWN0b3J5LmNyZWF0ZVJ1bGUoYWN0aW9uc291cmNlLCBuZXdBY3Rpb24sIGFjdGlvbkNvbmRpdGlvbiwgYWN0aW9uRGVsYXkpXG5cbiAgaWYgKGFjdGlvbnNvdXJjZSAmJiBhY3Rpb25UeXBlICYmIHRhcmdldFZhbCkge1xuICAgIGlmKHJ1bGVJRCA9PSBJREhhbmRsZXIuU1RBTkRBUkRfSUQgfHwgcnVsZUlEID09IFwiXCIpe1xuICAgICAgY29uc3QgcnVsZUluZGV4ID0gYXdhaXQgUGVyc2lzdGFuY2VIYW5kbGVyLmFkZFJ1bGUobmV3RW50cnkpO1xuICAgICAgY29uc29sZS5sb2coYENyZWF0aW5nIG5ldyBydWxlOiAke25ld0VudHJ5fWApXG4gICAgICBhZGRUb1Byb2RUYWJsZShuZXdFbnRyeSwgcnVsZUluZGV4KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhgVXBkYXRpbmcgcnVsZSB0byBiZTogJHtuZXdFbnRyeX1gKVxuICAgICAgY29uc3QgaWRfZWxlbXMgPSBJREhhbmRsZXIuZGVjb25zdHJ1Y3RJRChydWxlSUQpO1xuICAgICAgYXdhaXQgUGVyc2lzdGFuY2VIYW5kbGVyLnVwZGF0ZVJ1bGUoXG4gICAgICAgIGlkX2VsZW1zW1wiYmFkU2l0ZVwiXSxcbiAgICAgICAgaWRfZWxlbXNbXCJpbmRleFwiXSxcbiAgICAgICAgbmV3RW50cnlcbiAgICAgICk7XG4gICAgfVxuICAgIH1cbiAgUHJvZFJ1bGVzVmlldy5jbGVhckZvcm0oKTtcbiAgUHJvZFJ1bGVzVmlldy5jbGVhclRhYmxlKCk7XG4gIHByZXBhcmVQcm9kUnVsZVRhYmxlKCk7XG59XG5cbmZ1bmN0aW9uIGFkZFRvUHJvZFRhYmxlKHByb2RSdWxlOiBQcm9kUnVsZSwgcnVsZUluZGV4OiBudW1iZXIpIHtcbiAgY29uc3QgcnVsZUlEID0gSURIYW5kbGVyLmdldFJvd0lEKHByb2RSdWxlLnNvdXJjZSwgcnVsZUluZGV4KVxuICBjb25zdCBhY3Rpb25CdXR0b25zID0gUHJvZFJ1bGVzVmlldy5hZGRFbnRyeVRvVGFibGUocHJvZFJ1bGUsIHJ1bGVJRCk7XG4gIGNvbnN0IGVkaXRCdXR0b24gPSBhY3Rpb25CdXR0b25zW1wiZWRpdFwiXSBhcyBIVE1MQnV0dG9uRWxlbWVudFxuICBjb25zdCBkZWxldGVCdXR0b24gPSBhY3Rpb25CdXR0b25zW1wiZGVsZXRlXCJdIGFzIEhUTUxCdXR0b25FbGVtZW50XG4gIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgcHJlcGFyZVRvRWRpdChwcm9kUnVsZSwgcnVsZUluZGV4KTtcbiAgfSk7XG5cbiAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgXCJjbGlja1wiLFxuICAgIGZ1bmN0aW9uIChlKSB7XG4gICAgICBkZWxldGVFbnRyeShwcm9kUnVsZS5zb3VyY2UsIHJ1bGVJbmRleCk7XG4gICAgfSxcbiAgICBmYWxzZVxuICApO1xufVxuXG5mdW5jdGlvbiBwcmVwYXJlVG9FZGl0KHByb2RSdWxlOiBQcm9kUnVsZSwgcnVsZUluZGV4OiBudW1iZXIpIHtcbiAgY29uc3QgcnVsZUlEID0gSURIYW5kbGVyLmdldFJvd0lEKHByb2RSdWxlLnNvdXJjZSwgcnVsZUluZGV4KVxuICBQcm9kUnVsZXNWaWV3LnNldEZvcm1WYWx1ZXMocHJvZFJ1bGUsIHJ1bGVJRCk7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZUVudHJ5KHVucHJvZHVjdGl2ZVNpdGU6IHN0cmluZywgcnVsZUluZGV4OiBudW1iZXIpIHtcbiAgY29uc3QgcnVsZUlEID0gSURIYW5kbGVyLmdldFJvd0lEKHVucHJvZHVjdGl2ZVNpdGUsIHJ1bGVJbmRleCk7XG4gIFBlcnNpc3RhbmNlSGFuZGxlci5kZWxldGVSdWxlKHVucHJvZHVjdGl2ZVNpdGUsIHJ1bGVJbmRleCk7XG4gIFByb2RSdWxlc1ZpZXcucmVtb3ZlRnJvbVRhYmxlKHJ1bGVJRCk7XG59XG5cblxuY29uc3QgSURIYW5kbGVyID0ge1xuZ2V0Um93SUQ6ICh1bnByb2R1Y3RpdmVTaXRlOiBzdHJpbmcsIHJ1bGVJbmRleDogbnVtYmVyKSA9PiB7XG4gIGNvbnN0IHJvd0lEID0gYCR7dW5wcm9kdWN0aXZlU2l0ZX0tJHtydWxlSW5kZXh9YDtcbiAgcmV0dXJuIHJvd0lEO1xufSxcblxuZGVjb25zdHJ1Y3RJRDogKHJ1bGVJRDogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IGlkX2FycmF5ID0gcnVsZUlELnNwbGl0KFwiLVwiKTtcbiAgcmV0dXJuIHtcbiAgICBiYWRTaXRlOiBpZF9hcnJheVswXSxcbiAgICBpbmRleDogK2lkX2FycmF5WzFdLFxuICB9O1xufSxcblxuU1RBTkRBUkRfSUQ6IFwiTkVXXCJcbn1cblxuXG5cbmNvbnN0IFByb2RSdWxlc0NvbnRyb2xsZXIgPSB7XG4gIGRlbGV0ZUVudHJ5OiBkZWxldGVFbnRyeSxcbiAgcHJlcGFyZVRvRWRpdDogcHJlcGFyZVRvRWRpdCxcbiAgYWRkVG9Qcm9kVGFibGU6IGFkZFRvUHJvZFRhYmxlLFxuICBhZGRSdWxlRnJvbUZvcm06IGFkZFJ1bGVGcm9tRm9ybSxcbiAgZ2V0U3RyaW5nc0ZvckVudW1zOiBnZXRTdHJpbmdzRm9yRW51bXNcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZFJ1bGVzQ29udHJvbGxlciIsImltcG9ydCB7IEFjdGlvbkZhY3RvcnkgfSBmcm9tIFwiLi4vZG9tYWluL2FjdGlvblwiO1xuaW1wb3J0IHsgUHJvZFJ1bGUgfSBmcm9tIFwiLi4vZG9tYWluL3Byb2RSdWxlc1wiO1xuaW1wb3J0IHsgZ2V0U3RyaW5nc0ZvckVudW1zLCBtc1RvVGltZSB9IGZyb20gXCIuLi9oZWxwZXJzL2hlbHBlcnNcIjtcbmltcG9ydCAqIGFzIENvbnRyb2xsZXIgZnJvbSBcIi4vcHJvZFJ1bGVzQ29udHJvbGxlclwiO1xuXG5jbGFzcyBSdWxlRm9ybSB7XG4gICAgYWN0aW9uc291cmNlOiBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGFjdGlvbnR5cGU6IEhUTUxTZWxlY3RFbGVtZW50O1xuICAgIHRhcmdldFZhbDogSFRNTElucHV0RWxlbWVudDtcbiAgICBjb25kaXRpb246IEhUTUxTZWxlY3RFbGVtZW50O1xuICAgIGRlbGF5OiBIVE1MU2VsZWN0RWxlbWVudDtcbiAgICBydWxlSUQ6IEhUTUxJbnB1dEVsZW1lbnQ7XG5cblxuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICB0aGlzLmFjdGlvbnNvdXJjZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWN0aW9uc291cmNlXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnRcbiAgICAgIHRoaXMuYWN0aW9udHlwZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWN0aW9udHlwZVwiKSBhcyBIVE1MU2VsZWN0RWxlbWVudFxuICAgICAgdGhpcy50YXJnZXRWYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhcmdldHZhbHVlXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnRcbiAgICAgIHRoaXMuY29uZGl0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJydWxlY29uZGl0aW9uXCIpIGFzIEhUTUxTZWxlY3RFbGVtZW50XG4gICAgICB0aGlzLmRlbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhY3Rpb25kZWxheVwiKSBhcyBIVE1MU2VsZWN0RWxlbWVudFxuICAgICAgdGhpcy5ydWxlSUQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJ1bGVJRFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50ICAgIH1cblxuXG4gICAgdG9TdGFydCgpe1xuICAgICAgdGhpcy5hY3Rpb25zb3VyY2UudmFsdWUgPSBcIlwiXG4gICAgICB0aGlzLmFjdGlvbnR5cGUuc2VsZWN0ZWRJbmRleCA9IDBcbiAgICAgIHRoaXMudGFyZ2V0VmFsLnZhbHVlID0gXCJcIlxuICAgICAgdGhpcy5jb25kaXRpb24uc2VsZWN0ZWRJbmRleCA9IDBcbiAgICAgIHRoaXMuZGVsYXkuc2VsZWN0ZWRJbmRleCA9IDBcbiAgICAgIHRoaXMucnVsZUlELnZhbHVlID0gXCJORVdcIlxuICAgIH1cblxuICAgIGdldFZhbHVlcygpe1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgXCJhY3Rpb25zb3VyY2VcIjogdGhpcy5hY3Rpb25zb3VyY2UudmFsdWUsXG4gICAgICAgIFwiYWN0aW9udHlwZVwiOiB0aGlzLmFjdGlvbnR5cGUudmFsdWUsXG4gICAgICAgIFwidGFyZ2V0VmFsXCI6IHRoaXMudGFyZ2V0VmFsLnZhbHVlLFxuICAgICAgICBcImNvbmRpdGlvblwiOiB0aGlzLmNvbmRpdGlvbi52YWx1ZSxcbiAgICAgICAgXCJkZWxheVwiOiBwYXJzZUludCh0aGlzLmRlbGF5LnZhbHVlKSxcbiAgICAgICAgXCJydWxlSURcIjogdGhpcy5ydWxlSUQudmFsdWVcbiAgICAgIH1cbiAgICB9XG59XG5cbmNvbnN0IFByb2RUYWJsZSA9IHtcbiAgdGFibGVJRDogXCJwcm9kdWN0aW9uUnVsZVRhYmxlXCIsXG5cbiAgZ2V0Qm9keTogKCkgPT4ge1xuICAgIGNvbnN0IHByb2RUYWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFByb2RUYWJsZS50YWJsZUlEKSBhcyBIVE1MVGFibGVFbGVtZW50XG4gICAgY29uc3QgYm9keSA9IHByb2RUYWJsZS50Qm9kaWVzWzBdXG4gICAgcmV0dXJuIGJvZHlcbiAgfSxcblxuICBhZGRFbnRyeTogKHByb2RSdWxlOiBQcm9kUnVsZSwgcnVsZUlEOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IHByb2RUYWJsZSA9IFByb2RUYWJsZS5nZXRCb2R5KCk7XG4gICAgICBsZXQgbmV3Um93ID0gcHJvZFRhYmxlLmluc2VydFJvdygtMSk7XG4gICAgICBsZXQgcnVsZUNlbGwgPSBuZXdSb3cuaW5zZXJ0Q2VsbCgwKTtcbiAgICAgIGxldCBhY3Rpb25zQ2VsbCA9IG5ld1Jvdy5pbnNlcnRDZWxsKDEpO1xuXG4gICAgICBuZXdSb3cuaWQgPSBydWxlSUQ7XG4gICAgICBydWxlQ2VsbC5pbm5lckhUTUwgPSBfZm9ybWF0U3RyaW5nKHByb2RSdWxlKTtcbiAgICAgIHJ1bGVDZWxsLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwicHgtMlwiKTtcbiAgICAgIGFjdGlvbnNDZWxsLmlubmVySFRNTCA9IGA8YnV0dG9uIGlkPVwiJHtQcm9kVGFibGUudGFibGVJRH1fZWRpdF8ke3J1bGVJRH1cIiBjbGFzcz1cInJvdW5kZWQtbGcgYm9yZGVyLXdoaXRlIGJnLW5hdnkgdGV4dC13aGl0ZSBob3ZlcjpiZy1ibHVlUm95YWwgcHgtMiBteC0xIHRleHQtY2VudGVyXCI+ZWRpdDwvYnV0dG9uPlxuICAgIDxidXR0b24gaWQ9XCIke1Byb2RUYWJsZS50YWJsZUlEfV9kZWxldGVfJHtydWxlSUR9XCIgY2xhc3M9XCJyb3VuZGVkLWxnIGJvcmRlci13aGl0ZSBiZy1uYXZ5IHRleHQtd2hpdGUgaG92ZXI6YmctYmx1ZVJveWFsIHB4LTIgbXgtMSB0ZXh0LWNlbnRlclwiPmRlbGV0ZTwvYnV0dG9uPmA7XG5cbiAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke1Byb2RUYWJsZS50YWJsZUlEfV9kZWxldGVfJHtydWxlSUR9YCk7XG4gICAgICBjb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7UHJvZFRhYmxlLnRhYmxlSUR9X2VkaXRfJHtydWxlSUR9YCk7XG4gICAgICByZXR1cm4geyBlZGl0OiBlZGl0QnV0dG9uLCBkZWxldGU6IGRlbGV0ZUJ1dHRvbiwgZW50cnk6IHJ1bGVDZWxsIH07XG4gIH0sXG5cbiAgcmVtb3ZlUnVsZTogKHJ1bGVJRDpzdHJpbmcpID0+IHtcbiAgICBsZXQgdG9EZWxldGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChydWxlSUQpXG4gICAgdG9EZWxldGUucmVtb3ZlKCk7XG4gICAgY29uc29sZS5sb2coYFJlbW92aW5nIHJ1bGUgZm9yICR7cnVsZUlEfSFgKTtcbiAgfSxcblxuICAgIGNsZWFyOiAoKSA9PiB7XG4gICAgICBjb25zdCBwcm9kVGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChQcm9kVGFibGUudGFibGVJRCkgYXMgSFRNTFRhYmxlRWxlbWVudFxuICAgICAgY29uc3Qgb2xkQm9keSA9IHByb2RUYWJsZS50Qm9kaWVzWzBdXG4gICAgICBjb25zdCBuZXdCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGJvZHknKTtcbiAgICAgIHByb2RUYWJsZS5yZXBsYWNlQ2hpbGQobmV3Qm9keSwgb2xkQm9keSlcbiAgfVxuXG59XG5cbmNvbnN0IFByb2RSdWxlc1ZpZXcgPSB7XG5cbiAgYWRkRW50cnlUb1RhYmxlOiBQcm9kVGFibGUuYWRkRW50cnksXG4gIGNsZWFyVGFibGU6IFByb2RUYWJsZS5jbGVhcixcbiAgcmVtb3ZlRnJvbVRhYmxlOiBQcm9kVGFibGUucmVtb3ZlUnVsZSxcbiAgXG5cblxuICBnZXRGb3JtRGF0YTogKCkgPT4ge1xuICAgIGxldCBteUZvcm0gPSBuZXcgUnVsZUZvcm0oKVxuICAgIHJldHVybiBteUZvcm0uZ2V0VmFsdWVzKCk7XG4gIH0sXG5cbiAgY2xlYXJGb3JtOiAoKSA9PiB7XG4gICAgY29uc3QgZm9ybSA9IG5ldyBSdWxlRm9ybSgpXG4gICAgZm9ybS50b1N0YXJ0KClcbiAgfSxcblxuICBzZXRGb3JtVmFsdWVzKGZvcm1WYWx1ZXM6IFByb2RSdWxlLCBydWxlSUQ6IHN0cmluZykge1xuICAgIGxldCBteUZvcm0gPSBuZXcgUnVsZUZvcm0oKVxuICAgIG15Rm9ybS5hY3Rpb25zb3VyY2UudmFsdWUgPSBmb3JtVmFsdWVzLnNvdXJjZVxuICAgIG15Rm9ybS5hY3Rpb250eXBlLnZhbHVlID0gZm9ybVZhbHVlcy5hY3Rpb24udHlwZVxuICAgIG15Rm9ybS50YXJnZXRWYWwudmFsdWUgPSBmb3JtVmFsdWVzLmFjdGlvbi50YXJnZXRWYWx1ZSAgXG4gICAgbXlGb3JtLmNvbmRpdGlvbi52YWx1ZSA9IGZvcm1WYWx1ZXMuY29uZGl0aW9uXG4gICAgbXlGb3JtLmRlbGF5LnZhbHVlID0gZm9ybVZhbHVlcy5kZWxheS50b1N0cmluZygpXG4gICAgbXlGb3JtLnJ1bGVJRC52YWx1ZSA9IHJ1bGVJRFxuICAgIFxuICB9XG59O1xuXG5mdW5jdGlvbiBfZm9ybWF0U3RyaW5nKHByb2RSdWxlOiBQcm9kUnVsZSkge1xuICAgIGNvbnN0IGVudW1TdHJpbmdzID0gZ2V0U3RyaW5nc0ZvckVudW1zKClcbiAgICBjb25zdCBjb25kaXRpb25TdHIgPSBlbnVtU3RyaW5ncy5ydWxlY29uZGl0aW9uW3Byb2RSdWxlLmNvbmRpdGlvbl1cbiAgICBjb25zdCBhY3Rpb25TdHIgPSBlbnVtU3RyaW5ncy5hY3Rpb250eXBlW3Byb2RSdWxlLmFjdGlvbi50eXBlXVxuICAgIGNvbnN0IGRlbGF5U3RyID0gZW51bVN0cmluZ3MuYWN0aW9udHlwZVtwcm9kUnVsZS5kZWxheV0gfHwgbXNUb1RpbWUocHJvZFJ1bGUuZGVsYXkpXG5cbiAgY29uc3QgcmVzdWx0c1N0ciA9ICBgPGVtIGNsYXNzPVwidGV4dC1sZ1wiPiR7cHJvZFJ1bGUuc291cmNlfTwvZW0+IDxicj48Yj4ke1xuICAgIGNvbmRpdGlvblN0clxuICB9PC9iPiB3aGVuIEkgdmlzaXQgPGI+JHtwcm9kUnVsZS5zb3VyY2V9PC9iPiB0aGVuIDxiPiR7ZGVsYXlTdHJ9IFxuICAke2FjdGlvblN0cn06IDxlbT4ke3Byb2RSdWxlLmFjdGlvbi50YXJnZXRWYWx1ZX08L2VtPjwvYj5gO1xuXG4gIHJldHVybiByZXN1bHRzU3RyXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2RSdWxlc1ZpZXciXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=