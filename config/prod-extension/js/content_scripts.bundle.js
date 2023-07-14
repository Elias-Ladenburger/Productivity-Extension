"use strict";
var MyLibrary;
(self["webpackChunkMyLibrary"] = self["webpackChunkMyLibrary"] || []).push([["content_scripts"],{

/***/ "./src/content-scripts/productivity.ts":
/*!*********************************************!*\
  !*** ./src/content-scripts/productivity.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ applyRules)
/* harmony export */ });
/* harmony import */ var _domain_prodRules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domain/prodRules */ "./src/domain/prodRules.ts");
/* harmony import */ var _domain_prodRuleRepo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../domain/prodRuleRepo */ "./src/domain/prodRuleRepo.ts");
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


applyRules();
function applyRules() {
    return __awaiter(this, void 0, void 0, function () {
        var currentURL, rulesForThisSite;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    currentURL = window.location.href;
                    console.log("checking for productivity rules...");
                    return [4 /*yield*/, _domain_prodRuleRepo__WEBPACK_IMPORTED_MODULE_1__["default"].getRulesByURL(currentURL)];
                case 1:
                    rulesForThisSite = _a.sent();
                    rulesForThisSite.forEach(function (myRule) {
                        _domain_prodRules__WEBPACK_IMPORTED_MODULE_0__.ProdRuleService.applyRule(myRule);
                    });
                    return [2 /*return*/];
            }
        });
    });
}


/***/ }),

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



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/content-scripts/productivity.ts"));
/******/ (MyLibrary = typeof MyLibrary === "undefined" ? {} : MyLibrary).content_scripts = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBeUI7U0FDL0I7UUFFRCxXQUFXLEVBQUU7WUFDWCxDQUFDLEVBQUUsYUFBYTtZQUNoQixLQUFLLEVBQUUsa0JBQWtCO1lBQ3pCLE1BQU0sRUFBRSxpQkFBaUI7WUFDekIsT0FBTyxFQUFFLGtCQUFrQjtTQUM1QjtLQUNGLENBQUM7QUFDSixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbENEO0lBR0ksNEJBQVksTUFBYztRQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU07SUFDeEIsQ0FBQztJQUVLLG1DQUFNLEdBQVo7Ozs7OzRCQUN1QixxQkFBTSxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQzs7d0JBQTFELFlBQVksR0FBRyxTQUEyQzt3QkFDMUQsVUFBVSxHQUF5QixPQUFPLFlBQVksS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO3dCQUMvRixJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksWUFBWSxFQUFFOzRCQUM3QixzQkFBTyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFDO3lCQUNwQzt3QkFDRCxzQkFBTyxVQUFVLEVBQUM7Ozs7S0FDckI7SUFFSyxvQ0FBTyxHQUFiOzs7Ozs7S0FFQztJQUNLLHNDQUFTLEdBQWY7Ozs7OztLQUVDO0lBQ0ssc0NBQVMsR0FBZjs7Ozs7O0tBRUM7SUFDTCx5QkFBQztBQUFELENBQUM7QUFFRCxpRUFBZSxrQkFBa0I7QUFDTiIsInNvdXJjZXMiOlsid2VicGFjazovL015TGlicmFyeS8uL3NyYy9jb250ZW50LXNjcmlwdHMvcHJvZHVjdGl2aXR5LnRzIiwid2VicGFjazovL015TGlicmFyeS8uL3NyYy9kb21haW4vYWN0aW9uLnRzIiwid2VicGFjazovL015TGlicmFyeS8uL3NyYy9kb21haW4vcHJvZFJ1bGVSZXBvLnRzIiwid2VicGFjazovL015TGlicmFyeS8uL3NyYy9kb21haW4vcHJvZFJ1bGVzLnRzIiwid2VicGFjazovL015TGlicmFyeS8uL3NyYy9oZWxwZXJzL2hlbHBlcnMudHMiLCJ3ZWJwYWNrOi8vTXlMaWJyYXJ5Ly4vc3JjL3BlcnNpc3RhbmNlL3BlcnNpc3RhbmNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbkZhY3RvcnkgfSBmcm9tIFwiLi4vZG9tYWluL2FjdGlvblwiXHJcbmltcG9ydCB7IFByb2RSdWxlLCBQcm9kUnVsZVNlcnZpY2UgfSBmcm9tIFwiLi4vZG9tYWluL3Byb2RSdWxlc1wiIFxyXG5pbXBvcnQgUHJvZFJ1bGVSZXBvc2l0b3J5IGZyb20gXCIuLi9kb21haW4vcHJvZFJ1bGVSZXBvXCJcclxuXHJcbmFwcGx5UnVsZXMoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGFwcGx5UnVsZXMoKSB7XHJcbiAgbGV0IGN1cnJlbnRVUkw6IHN0cmluZyA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG4gIGNvbnNvbGUubG9nKFwiY2hlY2tpbmcgZm9yIHByb2R1Y3Rpdml0eSBydWxlcy4uLlwiKVxyXG5cclxuICBjb25zdCBydWxlc0ZvclRoaXNTaXRlOiBQcm9kUnVsZVtdID0gYXdhaXQgUHJvZFJ1bGVSZXBvc2l0b3J5LmdldFJ1bGVzQnlVUkwoY3VycmVudFVSTCk7XHJcblxyXG4gIHJ1bGVzRm9yVGhpc1NpdGUuZm9yRWFjaCgobXlSdWxlOiBQcm9kUnVsZSkgPT4ge1xyXG4gICAgUHJvZFJ1bGVTZXJ2aWNlLmFwcGx5UnVsZShteVJ1bGUpXHJcbiAgfSk7XHJcbn1cclxuIiwiYWJzdHJhY3QgY2xhc3MgQWN0aW9uIHtcclxuICB0YXJnZXRWYWx1ZTogc3RyaW5nO1xyXG4gIHR5cGU6IEFjdGlvblR5cGUgPSBBY3Rpb25UeXBlLkxPR1xyXG4gIGNvbnN0cnVjdG9yKHRhcmdldFZhbHVlOiBzdHJpbmcgPSBcIlwiKSB7XHJcbiAgICB0aGlzLnRhcmdldFZhbHVlID0gdGFyZ2V0VmFsdWU7XHJcbiAgfVxyXG5cclxuICBhYnN0cmFjdCBwZXJmb3JtQWN0aW9uKCk6IHZvaWRcclxufVxyXG5cclxuY2xhc3MgRnJhbWVBY3Rpb24gZXh0ZW5kcyBBY3Rpb24ge1xyXG4gICB0eXBlOiBBY3Rpb25UeXBlO1xyXG4gIGNvbnN0cnVjdG9yKGZyYW1lQ29sb3I6IHN0cmluZykge1xyXG4gICAgc3VwZXIoZnJhbWVDb2xvcik7XHJcbiAgICB0aGlzLnR5cGUgPSBBY3Rpb25UeXBlLkZSQU1FO1xyXG4gIH1cclxuXHJcbiAgIHBlcmZvcm1BY3Rpb24oKSB7XHJcbiAgICBhbGVydChcclxuICAgICAgYFRoaXMgc2l0ZSBpcyB1bnByb2R1Y3RpdmUhIEZyYW1pbmcgdGhpcyBzaXRlIGluICR7dGhpcy50YXJnZXRWYWx1ZX0uYFxyXG4gICAgKTtcclxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYm9yZGVyID0gYDEwcHggc29saWQgJHt0aGlzLnRhcmdldFZhbHVlfWA7XHJcbiAgfVxyXG5cclxuICAgdG9TdHJpbmcoKSB7XHJcbiAgICByZXR1cm4gYGZyYW1lIHRoZSBzaXRlIGluICR7dGhpcy50YXJnZXRWYWx1ZX1gO1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgUG9wdXBBY3Rpb24gZXh0ZW5kcyBBY3Rpb24ge1xyXG4gICB0eXBlOiBBY3Rpb25UeXBlO1xyXG4gIGNvbnN0cnVjdG9yKHBvcHVwVGV4dDogc3RyaW5nKSB7XHJcbiAgICBzdXBlcihwb3B1cFRleHQpO1xyXG4gICAgdGhpcy50eXBlID0gQWN0aW9uVHlwZS5QT1BVUDtcclxuICB9XHJcbiAgIHBlcmZvcm1BY3Rpb24oKSB7XHJcbiAgICBpZiAoIXRoaXMudGFyZ2V0VmFsdWUpIHtcclxuICAgICAgdGhpcy50YXJnZXRWYWx1ZSA9IFwiRG8geW91IHRydWx5IHdhbnQgdG8gc3BlbmQgbW9yZSB0aW1lIG9uIHRoaXMgc2l0ZT9cIjtcclxuICAgIH1cclxuICAgIGFsZXJ0KHRoaXMudGFyZ2V0VmFsdWUpO1xyXG4gIH1cclxuICAgdG9TdHJpbmcoKSB7XHJcbiAgICByZXR1cm4gYHNob3cgYSBwb3B1cCB0aGF0IHNheXM6IFxcbiAnJHt0aGlzLnRhcmdldFZhbHVlfSdgO1xyXG4gIH1cclxufVxyXG5cclxuY2xhc3MgUmVkaXJlY3RBY3Rpb24gZXh0ZW5kcyBBY3Rpb24ge1xyXG4gICB0eXBlOiBBY3Rpb25UeXBlO1xyXG4gIGNvbnN0cnVjdG9yKHJlZGlyZWN0VG86IHN0cmluZykge1xyXG4gICAgc3VwZXIocmVkaXJlY3RUbyk7XHJcbiAgICB0aGlzLnR5cGUgPSBBY3Rpb25UeXBlLlJFRElSRUNUO1xyXG4gIH1cclxuICAgcGVyZm9ybUFjdGlvbigpIHtcclxuICAgIGFsZXJ0KGBUaGlzIHNpdGUgaXMgdW5wcm9kdWN0aXZlISBSZWRpcmVjdGluZyB0byAke3RoaXMudGFyZ2V0VmFsdWV9LmApO1xyXG4gICAgbGV0IHRhcmdldFZhbHVlID0gdGhpcy50YXJnZXRWYWx1ZS5zdGFydHNXaXRoKFwiaHR0cFwiKVxyXG4gICAgICA/IHRoaXMudGFyZ2V0VmFsdWVcclxuICAgICAgOiBgaHR0cHM6Ly8ke3RoaXMudGFyZ2V0VmFsdWV9YDtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdGFyZ2V0VmFsdWU7XHJcbiAgfVxyXG4gICB0b1N0cmluZygpIHtcclxuICAgIHJldHVybiBgcmVkaXJlY3QgdG8gJHt0aGlzLnRhcmdldFZhbHVlfWA7XHJcbiAgfVxyXG59XHJcblxyXG5lbnVtIEFjdGlvblR5cGUge1xyXG4gIFJFRElSRUNUID0gXCJSRURJUkVDVFwiLFxyXG4gIFBPUFVQID0gXCJQT1BVUFwiLFxyXG4gIEZSQU1FID0gXCJGUkFNRVwiLFxyXG4gIExPRyA9IFwiTE9HXCIsXHJcbn07XHJcblxyXG5jb25zdCBBY3Rpb25GYWN0b3J5ID0ge1xyXG4gIGNyZWF0ZUFjdGlvbih0eXBlOiBzdHJpbmcsIHRhcmdldFZhbHVlOiBzdHJpbmcpOiBBY3Rpb24ge1xyXG4gICAgc3dpdGNoICh0eXBlLnRvVXBwZXJDYXNlKCkpIHtcclxuICAgICAgY2FzZSBBY3Rpb25UeXBlLkZSQU1FOlxyXG4gICAgICAgIHJldHVybiBuZXcgRnJhbWVBY3Rpb24odGFyZ2V0VmFsdWUpO1xyXG4gICAgICBjYXNlIEFjdGlvblR5cGUuUkVESVJFQ1Q6XHJcbiAgICAgICAgcmV0dXJuIG5ldyBSZWRpcmVjdEFjdGlvbih0YXJnZXRWYWx1ZSk7XHJcbiAgICAgIGNhc2UgQWN0aW9uVHlwZS5QT1BVUDpcclxuICAgICAgICByZXR1cm4gbmV3IFBvcHVwQWN0aW9uKHRhcmdldFZhbHVlKTtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICB0aHJvdyBcIlVua25vd24gYWN0aW9uIHR5cGUhIE11c3QgYmUgZGVmaW5lZCBpbiB0aGUgQWN0aW9uVHlwZSBFbnVtLlwiO1xyXG4gICAgfVxyXG4gIH0sXHJcbn07XHJcblxyXG5leHBvcnQgeyBBY3Rpb24sIEFjdGlvbkZhY3RvcnksIEFjdGlvblR5cGUgfTtcclxuZXhwb3J0IGRlZmF1bHQgQWN0aW9uIiwiaW1wb3J0IHsgUHJvZFJ1bGUgfSBmcm9tIFwiLi9wcm9kUnVsZXNcIjtcclxuaW1wb3J0IFBlcnNpc3RhbmNlSGFuZGxlciBmcm9tIFwiLi4vcGVyc2lzdGFuY2UvcGVyc2lzdGFuY2VcIlxyXG5pbXBvcnQgeyBQcm9kUnVsZUZhY3RvcnkgfSBmcm9tIFwiLi9wcm9kUnVsZXNcIjtcclxuXHJcbmNvbnN0IHJ1bGVEQk5hbWUgPSBcInByb2R1Y3Rpdml0eVJ1bGVzXCI7XHJcbmludGVyZmFjZSBSdWxlTGlzdCB7XHJcbiAgW2tleTogc3RyaW5nXTogUHJvZFJ1bGVbXVxyXG59XHJcblxyXG5jb25zdCBwZXJzSGFuZGxlciA9IG5ldyBQZXJzaXN0YW5jZUhhbmRsZXIocnVsZURCTmFtZSlcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldEFsbFJ1bGVzKCkge1xyXG4gIGNvbnN0IHN0b3JlZFJ1bGVzID0gYXdhaXQgcGVyc0hhbmRsZXIuZ2V0QWxsKClcclxuICBsZXQgcnVsZUxpc3Q6IFJ1bGVMaXN0ID0ge31cclxuICBPYmplY3Qua2V5cyhzdG9yZWRSdWxlcykuZm9yRWFjaCgoYmFkU2l0ZSkgPT4ge1xyXG4gICAgbGV0IHJ1bGVzRm9yVGhpc1NpdGUgPSBzdG9yZWRSdWxlc1tiYWRTaXRlXVxyXG4gICAgcnVsZUxpc3RbYmFkU2l0ZV0gPSBbXVxyXG4gICAgcnVsZXNGb3JUaGlzU2l0ZS5mb3JFYWNoKChydWxlRGF0YTogYW55KSA9PiB7XHJcbiAgICAgIGxldCBuZXdSdWxlID0gUHJvZFJ1bGVGYWN0b3J5LmNyZWF0ZVJ1bGUoYmFkU2l0ZSwgcnVsZURhdGEuYWN0aW9uLCBydWxlRGF0YS5jb25kaXRpb24sIHJ1bGVEYXRhLmRlbGF5KVxyXG4gICAgICBydWxlTGlzdFtiYWRTaXRlXS5wdXNoKG5ld1J1bGUpXHJcbiAgICB9KVxyXG4gIH0pXHJcbiAgcmV0dXJuIHJ1bGVMaXN0XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldFJ1bGVzQnlVUkwob3JpZ2luVVJMOiBzdHJpbmcpIHtcclxuICBjb25zdCBydWxlTGlzdCA9IGF3YWl0IGdldEFsbFJ1bGVzKCk7XHJcbiAgbGV0IGFwcGxpY2FibGVSdWxlczogUHJvZFJ1bGVbXSA9IFtdXHJcbiAgT2JqZWN0LmtleXMocnVsZUxpc3QpLmZvckVhY2goKGJhZFNpdGUpID0+IHtcclxuICAgIGlmIChvcmlnaW5VUkwuaW5jbHVkZXMoYmFkU2l0ZSkpIHtcclxuICAgICAgZm9yKGxldCBydWxlIG9mIHJ1bGVMaXN0W2JhZFNpdGVdKXtcclxuICAgICAgICBhcHBsaWNhYmxlUnVsZXMucHVzaChydWxlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFwcGxpY2FibGVSdWxlcztcclxuICB9KTtcclxuICByZXR1cm4gYXBwbGljYWJsZVJ1bGVzO1xyXG59XHJcblxyXG5cclxuYXN5bmMgZnVuY3Rpb24gYWRkUnVsZShteU5ld1J1bGU6IFByb2RSdWxlKSB7XHJcbiAgY29uc3QgcnVsZUxpc3QgPSBhd2FpdCBnZXRBbGxSdWxlcygpO1xyXG4gIGNvbnN0IHRhcmdldFdlYnNpdGUgPSBteU5ld1J1bGUuc291cmNlO1xyXG5cclxuICBpZiAodGFyZ2V0V2Vic2l0ZSBpbiBydWxlTGlzdCkge1xyXG4gICAgcnVsZUxpc3RbdGFyZ2V0V2Vic2l0ZV0ucHVzaChteU5ld1J1bGUpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBydWxlTGlzdFt0YXJnZXRXZWJzaXRlXSA9IFtteU5ld1J1bGVdO1xyXG4gIH1cclxuICBzZXRSdWxlTGlzdChydWxlTGlzdCk7XHJcbiAgcmV0dXJuIChydWxlTGlzdFt0YXJnZXRXZWJzaXRlXS5sZW5ndGggLSAxKVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiB1cGRhdGVSdWxlKGJhZFNpdGU6IHN0cmluZywgaW5kZXg6IG51bWJlciwgdXBkYXRlZFJ1bGU6IFByb2RSdWxlKSB7XHJcbiAgLy8gbGV0IHJ1bGVMaXN0ID0gYXdhaXQgZ2V0QWxsUnVsZXMoKTtcclxuICBhd2FpdCBkZWxldGVSdWxlKGJhZFNpdGUsIGluZGV4KTtcclxuICByZXR1cm4gYWRkUnVsZSh1cGRhdGVkUnVsZSk7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVJ1bGUoYmFkU2l0ZTpzdHJpbmcsIGluZGV4OiBudW1iZXIpIHtcclxuICBsZXQgcnVsZUxpc3QgPSBhd2FpdCBnZXRBbGxSdWxlcygpO1xyXG4gIHJ1bGVMaXN0W2JhZFNpdGVdLnNwbGljZShpbmRleCwgMSk7XHJcbiAgaWYocnVsZUxpc3RbYmFkU2l0ZV0ubGVuZ3RoID09IDApe1xyXG4gICAgZGVsZXRlIHJ1bGVMaXN0W2JhZFNpdGVdXHJcbiAgfVxyXG4gIHNldFJ1bGVMaXN0KHJ1bGVMaXN0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0UnVsZUxpc3QocnVsZUxpc3Q6IFJ1bGVMaXN0KSB7XHJcbiAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgcHJvZHVjdGl2aXR5UnVsZXM6IHJ1bGVMaXN0IH0pO1xyXG59XHJcblxyXG5jb25zdCBQcm9kUnVsZVJlcG9zaXRvcnkgPSB7XHJcbiAgZ2V0QWxsUnVsZXM6IGdldEFsbFJ1bGVzLFxyXG4gIGdldFJ1bGVzQnlVUkw6IGdldFJ1bGVzQnlVUkwsXHJcbiAgYWRkUnVsZTogYWRkUnVsZSxcclxuICBkZWxldGVSdWxlOiBkZWxldGVSdWxlLFxyXG4gIHVwZGF0ZVJ1bGU6IHVwZGF0ZVJ1bGUsXHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZFJ1bGVSZXBvc2l0b3J5IiwiaW1wb3J0IHsgQWN0aW9uLCBBY3Rpb25UeXBlLCBBY3Rpb25GYWN0b3J5IH0gZnJvbSBcIi4vYWN0aW9uXCJcbmltcG9ydCB7bXNUb1RpbWUgfSBmcm9tIFwiLi4vaGVscGVycy9oZWxwZXJzXCJcblxuY2xhc3MgUHJvZFJ1bGUge1xuICBzb3VyY2U6IHN0cmluZ1xuICBhY3Rpb246IEFjdGlvblxuICBjb25kaXRpb246IFJ1bGVDb25kaXRpb25cbiAgZGVsYXk6IG51bWJlclxuICBjb25zdHJ1Y3RvcihcbiAgICBiYWRXZWJzaXRlOiBzdHJpbmcsXG4gICAgYWN0aW9uID0geyB0eXBlOiBBY3Rpb25UeXBlLkZSQU1FLCB0YXJnZXRWYWx1ZTogXCJyZWRcIiB9LFxuICAgIGNvbmRpdGlvbiA9IFJ1bGVDb25kaXRpb24uQUxXQVlTLFxuICAgIGRlbGF5OiBudW1iZXIgPSAwXG4gICkge1xuICAgIHRoaXMuc291cmNlID0gYmFkV2Vic2l0ZTtcbiAgICB0aGlzLmRlbGF5ID0gZGVsYXk7XG4gICAgdGhpcy5jb25kaXRpb24gPSBjb25kaXRpb247XG4gICAgaWYgKGFjdGlvbiBpbnN0YW5jZW9mIEFjdGlvbikge1xuICAgICAgdGhpcy5hY3Rpb24gPSBhY3Rpb247XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCB0bXBUeXBlID0gYWN0aW9uLnR5cGU7XG4gICAgICBsZXQgdG1wVmFsID0gYWN0aW9uLnRhcmdldFZhbHVlO1xuICAgICAgdGhpcy5hY3Rpb24gPSBBY3Rpb25GYWN0b3J5LmNyZWF0ZUFjdGlvbih0bXBUeXBlLCB0bXBWYWwpO1xuICAgIH1cbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIGNvbnN0IGRlbGF5U3RyID0gbXNUb1RpbWUodGhpcy5kZWxheSk7XG4gICAgcmV0dXJuIGAke3RoaXMuY29uZGl0aW9ufSB3aGVuIEkgdmlzaXQgJHtcbiAgICAgIHRoaXMuc291cmNlXG4gICAgfSB0aGVuICR7ZGVsYXlTdHJ9ICR7dGhpcy5hY3Rpb24udG9TdHJpbmcoKX1gO1xuICB9XG59XG5cblxuY29uc3QgUHJvZFJ1bGVGYWN0b3J5ID0ge1xuICBjcmVhdGVSdWxlKGJhZFdlYnNpdGU6IHN0cmluZywgYWN0aW9uOiBBY3Rpb24sIGNvbmRpdGlvbjogc3RyaW5nID0gXCJBTFdBWVNcIiwgZGVsYXk6IG51bWJlciA9IDApOiBQcm9kUnVsZSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbmRpdGlvbiA9IGNvbmRpdGlvbi50b1VwcGVyQ2FzZSgpXG4gICAgICBpZihPYmplY3Qua2V5cyhSdWxlQ29uZGl0aW9uKS5pbmNsdWRlcyhjb25kaXRpb24pKXtcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZENvbmQ6IFJ1bGVDb25kaXRpb24gPSBSdWxlQ29uZGl0aW9uW2NvbmRpdGlvbiBhcyBrZXlvZiB0eXBlb2YgUnVsZUNvbmRpdGlvbl1cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9kUnVsZShiYWRXZWJzaXRlLCBhY3Rpb24sIG5vcm1hbGl6ZWRDb25kLCBkZWxheSk7XG4gICAgICB9XG4gICAgfVxuICAgIGNhdGNoKGUpIHtcbiAgICAgIHRocm93IGVcbiAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgfVxuICB9LFxuICBjcmVhdGVSdWxlRnJvbUpTT04oZW50cnk6IGFueSkge1xuICAgIGNvbnN0IGFjdGlvbiA9IEFjdGlvbkZhY3RvcnkuY3JlYXRlQWN0aW9uKGVudHJ5LmFjdGlvbi50eXBlLCBlbnRyeS5hY3Rpb24udGFyZ2V0dmFsdWUpXG5cbiAgICByZXR1cm4gdGhpcy5jcmVhdGVSdWxlKGVudHJ5LnNvdXJjZSwgYWN0aW9uLCBlbnRyeS5jb25kaXRpb24sIGVudHJ5LmRlbGF5KVxuICB9LFxufTtcblxuZW51bSBSdWxlQ29uZGl0aW9uIHtcbiAgQUxXQVlTID0gXCJBTFdBWVNcIixcbiAgV09SSyA9IFwiV09SS1wiLFxuICBHT0FMID0gXCJHT0FMXCIsXG59XG5cbmNvbnN0IFByb2RSdWxlU2VydmljZSA9IHtcbiAgYXBwbHlSdWxlOiAocnVsZTogUHJvZFJ1bGUpID0+IHtcbiAgICBjb25zdCBhY3Rpb24gPSBBY3Rpb25GYWN0b3J5LmNyZWF0ZUFjdGlvbihydWxlLmFjdGlvbi50eXBlLCBydWxlLmFjdGlvbi50YXJnZXRWYWx1ZSlcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGFjdGlvbi5wZXJmb3JtQWN0aW9uKCk7XG4gICAgfSwgcnVsZS5kZWxheSk7XG4gIH1cbn1cblxuZXhwb3J0IHtQcm9kUnVsZSwgUnVsZUNvbmRpdGlvbiwgUHJvZFJ1bGVGYWN0b3J5LCBQcm9kUnVsZVNlcnZpY2UgfSIsIlxuXG5leHBvcnQgZnVuY3Rpb24gbXNUb1RpbWUobWlsaXNlY29uZHM6IG51bWJlcikge1xuICBpZiAobWlsaXNlY29uZHMgPT0gMCkgcmV0dXJuIFwiaW1tZWRpYXRlbHlcIjtcbiAgbGV0IHNlY29uZHMgPSAobWlsaXNlY29uZHMgLyAxMDAwKTtcbiAgbGV0IG1pbnV0ZXMgPSAobWlsaXNlY29uZHMgLyAoMTAwMCAqIDYwKSk7XG4gIGxldCBob3VycyA9IChtaWxpc2Vjb25kcyAvICgxMDAwICogNjAgKiA2MCkpO1xuICBsZXQgZGF5cyA9IChtaWxpc2Vjb25kcyAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XG4gIGlmIChzZWNvbmRzIDwgNjApIHJldHVybiBcImFmdGVyIFwiICsgc2Vjb25kcyArIFwiIFNlY1wiO1xuICBlbHNlIGlmIChtaW51dGVzIDwgNjApIHJldHVybiBcImFmdGVyIFwiICsgIG1pbnV0ZXMgKyBcIiBNaW5cIjtcbiAgZWxzZSBpZiAoaG91cnMgPCAyNCkgcmV0dXJuIFwiYWZ0ZXIgXCIgKyBob3VycyArIFwiIEhyc1wiO1xuICBlbHNlIHJldHVybiBcImFmdGVyIFwiICsgZGF5cyArIFwiIERheXNcIjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0cmluZ3NGb3JFbnVtcygpOiB7W2tleTpzdHJpbmddOiB7W2tleTpzdHJpbmddIDogc3RyaW5nfX0ge1xuICByZXR1cm4ge1xuICAgIHJ1bGVjb25kaXRpb246IHtcbiAgICAgIEFMV0FZUzogXCJhbHdheXNcIixcbiAgICAgIFdPUks6IFwiZHVyaW5nIG15IHdvcmsgdGltZXNcIixcbiAgICAgIEdPQUxTOiBcIndoaWxlIG15IGdvYWxzIGFyZSBub3QgcmVhY2hlZCAoV0lQKVwiLFxuICAgIH0sXG5cbiAgICBhY3Rpb250eXBlOiB7XG4gICAgICBSRURJUkVDVDogXCJyZWRpcmVjdCBtZSB0b1wiLFxuICAgICAgUE9QVVA6IFwic2hvdyBhIHBvcHVwIHdpdGggdGhlIGZvbGxvd2luZyB0ZXh0XCIsXG4gICAgICBGUkFNRTogXCJmcmFtZSB0aGUgdW5wcm9kdWN0aXZlIHBhZ2UgaW4gdGhlIGZvbGxvd2luZyBjb2xvclwiLFxuICAgICAgTE9HOiBcImxvZyBteSB2aXNpdCBvbmx5IChXSVApXCIsXG4gICAgfSxcblxuICAgIGFjdGlvbmRlbGF5OiB7XG4gICAgICAwOiBcImltbWVkaWF0ZWx5XCIsXG4gICAgICAzMDAwMDogXCJhZnRlciAzMCBzZWNvbmRzXCIsXG4gICAgICAzMDAwMDA6IFwiYWZ0ZXIgNSBtaW51dGVzXCIsXG4gICAgICAxMjAwMDAwOiBcImFmdGVyIDIwIG1pbnV0ZXNcIixcbiAgICB9LFxuICB9O1xufVxuXG4iLCJcblxuY2xhc3MgUGVyc2lzdGFuY2VIYW5kbGVyIHtcbiAgICBkYk5hbWU6IHN0cmluZ1xuXG4gICAgY29uc3RydWN0b3IoZGJOYW1lOiBzdHJpbmcpe1xuICAgICAgICB0aGlzLmRiTmFtZSA9IGRiTmFtZVxuICAgIH1cbiAgICBcbiAgICBhc3luYyBnZXRBbGwoKSB7XG4gICAgICAgIGxldCBzdG9yZWRWYWx1ZXMgPSBhd2FpdCBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQodGhpcy5kYk5hbWUpO1xuICAgICAgICBsZXQgcmVzdWx0TGlzdDoge1trZXk6IHN0cmluZ106IGFueX0gPSB0eXBlb2Ygc3RvcmVkVmFsdWVzID09PSBcInVuZGVmaW5lZFwiID8ge30gOiBzdG9yZWRWYWx1ZXM7XG4gICAgICAgIGlmICh0aGlzLmRiTmFtZSBpbiBzdG9yZWRWYWx1ZXMpIHtcbiAgICAgICAgICAgIHJldHVybiBzdG9yZWRWYWx1ZXNbdGhpcy5kYk5hbWVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRMaXN0O1xuICAgIH1cblxuICAgIGFzeW5jIGZpbmRPbmUoKSB7XG5cbiAgICB9XG4gICAgYXN5bmMgdXBkYXRlT25lKCkge1xuXG4gICAgfVxuICAgIGFzeW5jIGRlbGV0ZU9uZSAoKSB7XG5cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBlcnNpc3RhbmNlSGFuZGxlclxuZXhwb3J0IHtQZXJzaXN0YW5jZUhhbmRsZXJ9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9