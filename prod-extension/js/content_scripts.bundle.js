"use strict";
var MyLibrary;
(self["webpackChunkMyLibrary"] = self["webpackChunkMyLibrary"] || []).push([["content_scripts"],{

/***/ "./src/content-scripts/productivity.ts":
/*!*********************************************!*\
  !*** ./src/content-scripts/productivity.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _persistance_persistance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../persistance/persistance */ "./src/persistance/persistance.ts");
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

applyRule();
console.log("checking for rules...");
function applyRule() {
    return __awaiter(this, void 0, void 0, function () {
        var currentURL, rulesForThisSite, _i, rulesForThisSite_1, rule;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    currentURL = window.location.href;
                    console.log("checking for rules...");
                    return [4 /*yield*/, checkIfRule(currentURL)];
                case 1:
                    if (!_a.sent()) return [3 /*break*/, 3];
                    return [4 /*yield*/, getRules(currentURL)];
                case 2:
                    rulesForThisSite = _a.sent();
                    console.log(rulesForThisSite);
                    for (_i = 0, rulesForThisSite_1 = rulesForThisSite; _i < rulesForThisSite_1.length; _i++) {
                        rule = rulesForThisSite_1[_i];
                        console.log(rule);
                        rule.applyRule();
                    }
                    rulesForThisSite.forEach(function (myRule) {
                        console.log(myRule);
                        myRule.applyRule();
                    });
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    });
}
function checkIfRule(siteToCheck) {
    return __awaiter(this, void 0, void 0, function () {
        var ruleList, siteHasRule;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, _persistance_persistance__WEBPACK_IMPORTED_MODULE_0__["default"].getAllRules()];
                case 1:
                    ruleList = _a.sent();
                    siteHasRule = false;
                    if (ruleList) {
                        Object.keys(ruleList).forEach(function (badSite) {
                            if (siteToCheck.includes(badSite)) {
                                siteHasRule = true;
                            }
                        });
                        return [2 /*return*/, siteHasRule];
                    }
                    return [2 /*return*/];
            }
        });
    });
}
function getRules(originURL) {
    return __awaiter(this, void 0, void 0, function () {
        var ruleList, applicableRules;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, _persistance_persistance__WEBPACK_IMPORTED_MODULE_0__["default"].getAllRules()];
                case 1:
                    ruleList = _a.sent();
                    applicableRules = [];
                    Object.keys(ruleList).forEach(function (badSite) {
                        console.log("checking rules: is ".concat(badSite, " in ").concat(originURL, " "));
                        if (originURL.includes(badSite)) {
                            console.log(ruleList[badSite]);
                            for (var _i = 0, _a = ruleList[badSite]; _i < _a.length; _i++) {
                                var rule = _a[_i];
                                applicableRules.push(rule);
                            }
                        }
                        return applicableRules;
                    });
                    console.log("rules for this site: ");
                    console.log(applicableRules);
                    return [2 /*return*/, applicableRules];
            }
        });
    });
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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/content-scripts/productivity.ts"));
/******/ (MyLibrary = typeof MyLibrary === "undefined" ? {} : MyLibrary).content_scripts = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O29CQUE5QixRQUFRLEdBQUcsU0FBbUI7b0JBQ2xDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUNuQyxJQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFDO3dCQUMvQixPQUFPLFFBQVEsQ0FBQyxPQUFPLENBQUM7cUJBQ3pCO29CQUNELFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7Ozs7Q0FDdkI7QUFFRCxTQUFTLFdBQVcsQ0FBQyxRQUFrQjtJQUNyQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO0FBQzVELENBQUM7QUFFRCxJQUFNLGtCQUFrQixHQUFHO0lBQ3pCLFdBQVcsRUFBRSxXQUFXO0lBQ3hCLE9BQU8sRUFBRSxPQUFPO0lBQ2hCLFVBQVUsRUFBRSxVQUFVO0lBQ3RCLFVBQVUsRUFBRSxVQUFVO0NBQ3ZCLENBQUM7QUFHRixpRUFBZSxrQkFBa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NeUxpYnJhcnkvLi9zcmMvY29udGVudC1zY3JpcHRzL3Byb2R1Y3Rpdml0eS50cyIsIndlYnBhY2s6Ly9NeUxpYnJhcnkvLi9zcmMvcGVyc2lzdGFuY2UvcGVyc2lzdGFuY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uRmFjdG9yeSB9IGZyb20gXCIuLi9kb21haW4vYWN0aW9uXCJcclxuaW1wb3J0IHsgUHJvZFJ1bGUsIFByb2RSdWxlRmFjdG9yeSB9IGZyb20gXCIuLi9kb21haW4vcHJvZFJ1bGVzXCIgXHJcbmltcG9ydCBQZXJzaXN0YW5jZUhhbmRsZXIgZnJvbSBcIi4uL3BlcnNpc3RhbmNlL3BlcnNpc3RhbmNlXCJcclxuXHJcbmFwcGx5UnVsZSgpO1xyXG5cclxuY29uc29sZS5sb2coXCJjaGVja2luZyBmb3IgcnVsZXMuLi5cIilcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGFwcGx5UnVsZSgpIHtcclxuICBsZXQgY3VycmVudFVSTDogc3RyaW5nID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcbiAgY29uc29sZS5sb2coXCJjaGVja2luZyBmb3IgcnVsZXMuLi5cIilcclxuXHJcbiAgaWYgKGF3YWl0IGNoZWNrSWZSdWxlKGN1cnJlbnRVUkwpKSB7XHJcbiAgICBjb25zdCBydWxlc0ZvclRoaXNTaXRlID0gYXdhaXQgZ2V0UnVsZXMoY3VycmVudFVSTCk7XHJcbiAgICBjb25zb2xlLmxvZyhydWxlc0ZvclRoaXNTaXRlKVxyXG5cclxuICAgIGZvcihsZXQgcnVsZSBvZiBydWxlc0ZvclRoaXNTaXRlKXtcclxuICAgICAgY29uc29sZS5sb2cocnVsZSlcclxuICAgICAgcnVsZS5hcHBseVJ1bGUoKVxyXG4gICAgfVxyXG4gICAgcnVsZXNGb3JUaGlzU2l0ZS5mb3JFYWNoKChteVJ1bGUpID0+IHtcclxuICAgICAgY29uc29sZS5sb2cobXlSdWxlKTtcclxuICAgICAgbXlSdWxlLmFwcGx5UnVsZSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBjaGVja0lmUnVsZShzaXRlVG9DaGVjazogc3RyaW5nKSB7XHJcbiAgY29uc3QgcnVsZUxpc3QgPSBhd2FpdCBQZXJzaXN0YW5jZUhhbmRsZXIuZ2V0QWxsUnVsZXMoKTtcclxuICBsZXQgc2l0ZUhhc1J1bGUgPSBmYWxzZTtcclxuXHJcbiAgaWYgKHJ1bGVMaXN0KSB7XHJcbiAgICBPYmplY3Qua2V5cyhydWxlTGlzdCkuZm9yRWFjaCgoYmFkU2l0ZSkgPT4ge1xyXG4gICAgICBpZiAoc2l0ZVRvQ2hlY2suaW5jbHVkZXMoYmFkU2l0ZSkpIHtcclxuICAgICAgICBzaXRlSGFzUnVsZSA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHNpdGVIYXNSdWxlO1xyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0UnVsZXMob3JpZ2luVVJMOiBzdHJpbmcpIHtcclxuICBjb25zdCBydWxlTGlzdCA9IGF3YWl0IFBlcnNpc3RhbmNlSGFuZGxlci5nZXRBbGxSdWxlcygpO1xyXG4gIGxldCBhcHBsaWNhYmxlUnVsZXM6IFByb2RSdWxlW10gPSBbXVxyXG4gIE9iamVjdC5rZXlzKHJ1bGVMaXN0KS5mb3JFYWNoKChiYWRTaXRlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhgY2hlY2tpbmcgcnVsZXM6IGlzICR7YmFkU2l0ZX0gaW4gJHtvcmlnaW5VUkx9IGApXHJcbiAgICBpZiAob3JpZ2luVVJMLmluY2x1ZGVzKGJhZFNpdGUpKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJ1bGVMaXN0W2JhZFNpdGVdKVxyXG4gICAgICBmb3IobGV0IHJ1bGUgb2YgcnVsZUxpc3RbYmFkU2l0ZV0pe1xyXG4gICAgICAgIGFwcGxpY2FibGVSdWxlcy5wdXNoKHJ1bGUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXBwbGljYWJsZVJ1bGVzO1xyXG4gIH0pO1xyXG4gIGNvbnNvbGUubG9nKFwicnVsZXMgZm9yIHRoaXMgc2l0ZTogXCIpO1xyXG4gIGNvbnNvbGUubG9nKGFwcGxpY2FibGVSdWxlcyk7XHJcbiAgcmV0dXJuIGFwcGxpY2FibGVSdWxlcztcclxufVxyXG4iLCJpbXBvcnQgeyBQcm9kUnVsZSB9IGZyb20gXCIuLi9kb21haW4vcHJvZFJ1bGVzXCI7XHJcblxyXG5jb25zdCBydWxlREJOYW1lID0gXCJwcm9kdWN0aXZpdHlSdWxlc1wiO1xyXG5pbnRlcmZhY2UgUnVsZUxpc3Qge1xyXG4gIFtrZXk6IHN0cmluZ106IFByb2RSdWxlW11cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0QWxsUnVsZXMoKSB7XHJcbiAgbGV0IHJ1bGVMaXN0ID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHJ1bGVEQk5hbWUpO1xyXG4gIGxldCByZXN1bHRMaXN0OiB7W2tleTogc3RyaW5nXTogYW55fSA9IHR5cGVvZiBydWxlTGlzdCA9PT0gXCJ1bmRlZmluZWRcIiA/IHt9IDogcnVsZUxpc3Q7XHJcbiAgaWYgKHJ1bGVEQk5hbWUgaW4gcnVsZUxpc3QpIHtcclxuICAgIHJldHVybiBydWxlTGlzdFtydWxlREJOYW1lXTtcclxuICB9XHJcbiAgcmV0dXJuIHJlc3VsdExpc3Q7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGFkZFJ1bGUobXlOZXdSdWxlOiBQcm9kUnVsZSkge1xyXG4gIGNvbnN0IHJ1bGVMaXN0ID0gYXdhaXQgZ2V0QWxsUnVsZXMoKTtcclxuICBjb25zdCB0YXJnZXRXZWJzaXRlID0gbXlOZXdSdWxlLnNvdXJjZTtcclxuXHJcbiAgaWYgKHRhcmdldFdlYnNpdGUgaW4gcnVsZUxpc3QpIHtcclxuICAgIHJ1bGVMaXN0W3RhcmdldFdlYnNpdGVdLnB1c2gobXlOZXdSdWxlKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcnVsZUxpc3RbdGFyZ2V0V2Vic2l0ZV0gPSBbbXlOZXdSdWxlXTtcclxuICB9XHJcbiAgc2V0UnVsZUxpc3QocnVsZUxpc3QpO1xyXG4gIHJldHVybiAocnVsZUxpc3RbdGFyZ2V0V2Vic2l0ZV0ubGVuZ3RoIC0gMSlcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gdXBkYXRlUnVsZShiYWRTaXRlOiBzdHJpbmcsIGluZGV4OiBudW1iZXIsIHVwZGF0ZWRSdWxlOiBQcm9kUnVsZSkge1xyXG4gIC8vIGxldCBydWxlTGlzdCA9IGF3YWl0IGdldEFsbFJ1bGVzKCk7XHJcbiAgYXdhaXQgZGVsZXRlUnVsZShiYWRTaXRlLCBpbmRleCk7XHJcbiAgcmV0dXJuIGFkZFJ1bGUodXBkYXRlZFJ1bGUpO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBkZWxldGVSdWxlKGJhZFNpdGU6c3RyaW5nLCBpbmRleDogbnVtYmVyKSB7XHJcbiAgbGV0IHJ1bGVMaXN0ID0gYXdhaXQgZ2V0QWxsUnVsZXMoKTtcclxuICBydWxlTGlzdFtiYWRTaXRlXS5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gIGlmKHJ1bGVMaXN0W2JhZFNpdGVdLmxlbmd0aCA9PSAwKXtcclxuICAgIGRlbGV0ZSBydWxlTGlzdFtiYWRTaXRlXVxyXG4gIH1cclxuICBzZXRSdWxlTGlzdChydWxlTGlzdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFJ1bGVMaXN0KHJ1bGVMaXN0OiBSdWxlTGlzdCkge1xyXG4gIGNocm9tZS5zdG9yYWdlLmxvY2FsLnNldCh7IHByb2R1Y3Rpdml0eVJ1bGVzOiBydWxlTGlzdCB9KTtcclxufVxyXG5cclxuY29uc3QgUGVyc2lzdGFuY2VIYW5kbGVyID0ge1xyXG4gIGdldEFsbFJ1bGVzOiBnZXRBbGxSdWxlcyxcclxuICBhZGRSdWxlOiBhZGRSdWxlLFxyXG4gIGRlbGV0ZVJ1bGU6IGRlbGV0ZVJ1bGUsXHJcbiAgdXBkYXRlUnVsZTogdXBkYXRlUnVsZSxcclxufTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBQZXJzaXN0YW5jZUhhbmRsZXIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=