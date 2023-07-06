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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDbkMsSUFBRyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBQzt3QkFDL0IsT0FBTyxRQUFRLENBQUMsT0FBTyxDQUFDO3FCQUN6QjtvQkFDRCxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7Ozs7O0NBQ3ZCO0FBRUQsU0FBUyxXQUFXLENBQUMsUUFBa0I7SUFDckMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztBQUM1RCxDQUFDO0FBRUQsSUFBTSxrQkFBa0IsR0FBRztJQUN6QixXQUFXLEVBQUUsV0FBVztJQUN4QixPQUFPLEVBQUUsT0FBTztJQUNoQixVQUFVLEVBQUUsVUFBVTtJQUN0QixVQUFVLEVBQUUsVUFBVTtDQUN2QixDQUFDO0FBR0YsaUVBQWUsa0JBQWtCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vTXlMaWJyYXJ5Ly4vc3JjL2NvbnRlbnQtc2NyaXB0cy9wcm9kdWN0aXZpdHkudHMiLCJ3ZWJwYWNrOi8vTXlMaWJyYXJ5Ly4vc3JjL3BlcnNpc3RhbmNlL3BlcnNpc3RhbmNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbkZhY3RvcnkgfSBmcm9tIFwiLi4vZG9tYWluL2FjdGlvblwiXHJcbmltcG9ydCB7IFByb2RSdWxlLCBQcm9kUnVsZUZhY3RvcnkgfSBmcm9tIFwiLi4vZG9tYWluL3Byb2RSdWxlc1wiIFxyXG5pbXBvcnQgUGVyc2lzdGFuY2VIYW5kbGVyIGZyb20gXCIuLi9wZXJzaXN0YW5jZS9wZXJzaXN0YW5jZVwiXHJcblxyXG5hcHBseVJ1bGUoKTtcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGFwcGx5UnVsZSgpIHtcclxuICBsZXQgY3VycmVudFVSTDogc3RyaW5nID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XHJcbiAgY29uc29sZS5sb2coXCJjaGVja2luZyBmb3IgcnVsZXMuLi5cIilcclxuXHJcbiAgaWYgKGF3YWl0IGNoZWNrSWZSdWxlKGN1cnJlbnRVUkwpKSB7XHJcbiAgICBjb25zdCBydWxlc0ZvclRoaXNTaXRlID0gYXdhaXQgZ2V0UnVsZXMoY3VycmVudFVSTCk7XHJcbiAgICBjb25zb2xlLmxvZyhydWxlc0ZvclRoaXNTaXRlKVxyXG5cclxuICAgIGZvcihsZXQgcnVsZSBvZiBydWxlc0ZvclRoaXNTaXRlKXtcclxuICAgICAgY29uc29sZS5sb2cocnVsZSlcclxuICAgICAgcnVsZS5hcHBseVJ1bGUoKVxyXG4gICAgfVxyXG4gICAgcnVsZXNGb3JUaGlzU2l0ZS5mb3JFYWNoKChteVJ1bGUpID0+IHtcclxuICAgICAgY29uc29sZS5sb2cobXlSdWxlKTtcclxuICAgICAgbXlSdWxlLmFwcGx5UnVsZSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBjaGVja0lmUnVsZShzaXRlVG9DaGVjazogc3RyaW5nKSB7XHJcbiAgY29uc3QgcnVsZUxpc3QgPSBhd2FpdCBQZXJzaXN0YW5jZUhhbmRsZXIuZ2V0QWxsUnVsZXMoKTtcclxuICBsZXQgc2l0ZUhhc1J1bGUgPSBmYWxzZTtcclxuXHJcbiAgaWYgKHJ1bGVMaXN0KSB7XHJcbiAgICBPYmplY3Qua2V5cyhydWxlTGlzdCkuZm9yRWFjaCgoYmFkU2l0ZSkgPT4ge1xyXG4gICAgICBpZiAoc2l0ZVRvQ2hlY2suaW5jbHVkZXMoYmFkU2l0ZSkpIHtcclxuICAgICAgICBzaXRlSGFzUnVsZSA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHNpdGVIYXNSdWxlO1xyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0UnVsZXMob3JpZ2luVVJMOiBzdHJpbmcpIHtcclxuICBjb25zdCBydWxlTGlzdCA9IGF3YWl0IFBlcnNpc3RhbmNlSGFuZGxlci5nZXRBbGxSdWxlcygpO1xyXG4gIGxldCBhcHBsaWNhYmxlUnVsZXM6IFByb2RSdWxlW10gPSBbXVxyXG4gIE9iamVjdC5rZXlzKHJ1bGVMaXN0KS5mb3JFYWNoKChiYWRTaXRlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhgY2hlY2tpbmcgcnVsZXM6IGlzICR7YmFkU2l0ZX0gaW4gJHtvcmlnaW5VUkx9IGApXHJcbiAgICBpZiAob3JpZ2luVVJMLmluY2x1ZGVzKGJhZFNpdGUpKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJ1bGVMaXN0W2JhZFNpdGVdKVxyXG4gICAgICBmb3IobGV0IHJ1bGUgb2YgcnVsZUxpc3RbYmFkU2l0ZV0pe1xyXG4gICAgICAgIGFwcGxpY2FibGVSdWxlcy5wdXNoKHJ1bGUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXBwbGljYWJsZVJ1bGVzO1xyXG4gIH0pO1xyXG4gIGNvbnNvbGUubG9nKFwicnVsZXMgZm9yIHRoaXMgc2l0ZTogXCIpO1xyXG4gIGNvbnNvbGUubG9nKGFwcGxpY2FibGVSdWxlcyk7XHJcbiAgcmV0dXJuIGFwcGxpY2FibGVSdWxlcztcclxufVxyXG4iLCJpbXBvcnQgeyBQcm9kUnVsZSB9IGZyb20gXCIuLi9kb21haW4vcHJvZFJ1bGVzXCI7XHJcblxyXG5jb25zdCBydWxlREJOYW1lID0gXCJwcm9kdWN0aXZpdHlSdWxlc1wiO1xyXG5pbnRlcmZhY2UgUnVsZUxpc3Qge1xyXG4gIFtrZXk6IHN0cmluZ106IFByb2RSdWxlW11cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZ2V0QWxsUnVsZXMoKSB7XHJcbiAgbGV0IHJ1bGVMaXN0ID0gYXdhaXQgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KHJ1bGVEQk5hbWUpO1xyXG4gIGxldCByZXN1bHRMaXN0OiB7W2tleTogc3RyaW5nXTogYW55fSA9IHR5cGVvZiBydWxlTGlzdCA9PT0gXCJ1bmRlZmluZWRcIiA/IHt9IDogcnVsZUxpc3Q7XHJcbiAgaWYgKHJ1bGVEQk5hbWUgaW4gcnVsZUxpc3QpIHtcclxuICAgIHJldHVybiBydWxlTGlzdFtydWxlREJOYW1lXTtcclxuICB9XHJcbiAgcmV0dXJuIHJlc3VsdExpc3Q7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGFkZFJ1bGUobXlOZXdSdWxlOiBQcm9kUnVsZSkge1xyXG4gIGNvbnN0IHJ1bGVMaXN0ID0gYXdhaXQgZ2V0QWxsUnVsZXMoKTtcclxuICBjb25zdCB0YXJnZXRXZWJzaXRlID0gbXlOZXdSdWxlLnNvdXJjZTtcclxuXHJcbiAgaWYgKHRhcmdldFdlYnNpdGUgaW4gcnVsZUxpc3QpIHtcclxuICAgIHJ1bGVMaXN0W3RhcmdldFdlYnNpdGVdLnB1c2gobXlOZXdSdWxlKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcnVsZUxpc3RbdGFyZ2V0V2Vic2l0ZV0gPSBbbXlOZXdSdWxlXTtcclxuICB9XHJcbiAgc2V0UnVsZUxpc3QocnVsZUxpc3QpO1xyXG4gIHJldHVybiAocnVsZUxpc3RbdGFyZ2V0V2Vic2l0ZV0ubGVuZ3RoIC0gMSlcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gdXBkYXRlUnVsZShiYWRTaXRlOiBzdHJpbmcsIGluZGV4OiBudW1iZXIsIHVwZGF0ZWRSdWxlOiBQcm9kUnVsZSkge1xyXG4gIC8vIGxldCBydWxlTGlzdCA9IGF3YWl0IGdldEFsbFJ1bGVzKCk7XHJcblxyXG4gIGF3YWl0IGRlbGV0ZVJ1bGUoYmFkU2l0ZSwgaW5kZXgpO1xyXG4gIHJldHVybiBhZGRSdWxlKHVwZGF0ZWRSdWxlKTtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZGVsZXRlUnVsZShiYWRTaXRlOnN0cmluZywgaW5kZXg6IG51bWJlcikge1xyXG4gIGxldCBydWxlTGlzdCA9IGF3YWl0IGdldEFsbFJ1bGVzKCk7XHJcbiAgcnVsZUxpc3RbYmFkU2l0ZV0uc3BsaWNlKGluZGV4LCAxKTtcclxuICBpZihydWxlTGlzdFtiYWRTaXRlXS5sZW5ndGggPT0gMCl7XHJcbiAgICBkZWxldGUgcnVsZUxpc3RbYmFkU2l0ZV1cclxuICB9XHJcbiAgc2V0UnVsZUxpc3QocnVsZUxpc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRSdWxlTGlzdChydWxlTGlzdDogUnVsZUxpc3QpIHtcclxuICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5zZXQoeyBwcm9kdWN0aXZpdHlSdWxlczogcnVsZUxpc3QgfSk7XHJcbn1cclxuXHJcbmNvbnN0IFBlcnNpc3RhbmNlSGFuZGxlciA9IHtcclxuICBnZXRBbGxSdWxlczogZ2V0QWxsUnVsZXMsXHJcbiAgYWRkUnVsZTogYWRkUnVsZSxcclxuICBkZWxldGVSdWxlOiBkZWxldGVSdWxlLFxyXG4gIHVwZGF0ZVJ1bGU6IHVwZGF0ZVJ1bGUsXHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGVyc2lzdGFuY2VIYW5kbGVyIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9