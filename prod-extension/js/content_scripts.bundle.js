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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/content-scripts/productivity.ts"));
/******/ (MyLibrary = typeof MyLibrary === "undefined" ? {} : MyLibrary).content_scripts = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FBRyxTQUFtQjtvQkFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQztvQkFDcEMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ25DLElBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUM7d0JBQy9CLE9BQU8sUUFBUSxDQUFDLE9BQU8sQ0FBQztxQkFDekI7b0JBQ0QsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDOzs7OztDQUN2QjtBQUVELFNBQVMsV0FBVyxDQUFDLFFBQWtCO0lBQ3JDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7QUFDNUQsQ0FBQztBQUVELElBQU0sa0JBQWtCLEdBQUc7SUFDekIsV0FBVyxFQUFFLFdBQVc7SUFDeEIsT0FBTyxFQUFFLE9BQU87SUFDaEIsVUFBVSxFQUFFLFVBQVU7SUFDdEIsVUFBVSxFQUFFLFVBQVU7Q0FDdkIsQ0FBQztBQUdGLGlFQUFlLGtCQUFrQiIsInNvdXJjZXMiOlsid2VicGFjazovL015TGlicmFyeS8uL3NyYy9jb250ZW50LXNjcmlwdHMvcHJvZHVjdGl2aXR5LnRzIiwid2VicGFjazovL015TGlicmFyeS8uL3NyYy9wZXJzaXN0YW5jZS9wZXJzaXN0YW5jZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb25GYWN0b3J5IH0gZnJvbSBcIi4uL2RvbWFpbi9hY3Rpb25cIlxyXG5pbXBvcnQgeyBQcm9kUnVsZSwgUHJvZFJ1bGVGYWN0b3J5IH0gZnJvbSBcIi4uL2RvbWFpbi9wcm9kUnVsZXNcIiBcclxuaW1wb3J0IFBlcnNpc3RhbmNlSGFuZGxlciBmcm9tIFwiLi4vcGVyc2lzdGFuY2UvcGVyc2lzdGFuY2VcIlxyXG5cclxuYXBwbHlSdWxlKCk7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBhcHBseVJ1bGUoKSB7XHJcbiAgbGV0IGN1cnJlbnRVUkw6IHN0cmluZyA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xyXG4gIGNvbnNvbGUubG9nKFwiY2hlY2tpbmcgZm9yIHJ1bGVzLi4uXCIpXHJcblxyXG4gIGlmIChhd2FpdCBjaGVja0lmUnVsZShjdXJyZW50VVJMKSkge1xyXG4gICAgY29uc3QgcnVsZXNGb3JUaGlzU2l0ZSA9IGF3YWl0IGdldFJ1bGVzKGN1cnJlbnRVUkwpO1xyXG4gICAgY29uc29sZS5sb2cocnVsZXNGb3JUaGlzU2l0ZSlcclxuXHJcbiAgICBmb3IobGV0IHJ1bGUgb2YgcnVsZXNGb3JUaGlzU2l0ZSl7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJ1bGUpXHJcbiAgICAgIHJ1bGUuYXBwbHlSdWxlKClcclxuICAgIH1cclxuICAgIHJ1bGVzRm9yVGhpc1NpdGUuZm9yRWFjaCgobXlSdWxlKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKG15UnVsZSk7XHJcbiAgICAgIG15UnVsZS5hcHBseVJ1bGUoKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gY2hlY2tJZlJ1bGUoc2l0ZVRvQ2hlY2s6IHN0cmluZykge1xyXG4gIGNvbnN0IHJ1bGVMaXN0ID0gYXdhaXQgUGVyc2lzdGFuY2VIYW5kbGVyLmdldEFsbFJ1bGVzKCk7XHJcbiAgbGV0IHNpdGVIYXNSdWxlID0gZmFsc2U7XHJcblxyXG4gIGlmIChydWxlTGlzdCkge1xyXG4gICAgT2JqZWN0LmtleXMocnVsZUxpc3QpLmZvckVhY2goKGJhZFNpdGUpID0+IHtcclxuICAgICAgaWYgKHNpdGVUb0NoZWNrLmluY2x1ZGVzKGJhZFNpdGUpKSB7XHJcbiAgICAgICAgc2l0ZUhhc1J1bGUgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBzaXRlSGFzUnVsZTtcclxuICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldFJ1bGVzKG9yaWdpblVSTDogc3RyaW5nKSB7XHJcbiAgY29uc3QgcnVsZUxpc3QgPSBhd2FpdCBQZXJzaXN0YW5jZUhhbmRsZXIuZ2V0QWxsUnVsZXMoKTtcclxuICBsZXQgYXBwbGljYWJsZVJ1bGVzOiBQcm9kUnVsZVtdID0gW11cclxuICBPYmplY3Qua2V5cyhydWxlTGlzdCkuZm9yRWFjaCgoYmFkU2l0ZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coYGNoZWNraW5nIHJ1bGVzOiBpcyAke2JhZFNpdGV9IGluICR7b3JpZ2luVVJMfSBgKVxyXG4gICAgaWYgKG9yaWdpblVSTC5pbmNsdWRlcyhiYWRTaXRlKSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhydWxlTGlzdFtiYWRTaXRlXSlcclxuICAgICAgZm9yKGxldCBydWxlIG9mIHJ1bGVMaXN0W2JhZFNpdGVdKXtcclxuICAgICAgICBhcHBsaWNhYmxlUnVsZXMucHVzaChydWxlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFwcGxpY2FibGVSdWxlcztcclxuICB9KTtcclxuICBjb25zb2xlLmxvZyhcInJ1bGVzIGZvciB0aGlzIHNpdGU6IFwiKTtcclxuICBjb25zb2xlLmxvZyhhcHBsaWNhYmxlUnVsZXMpO1xyXG4gIHJldHVybiBhcHBsaWNhYmxlUnVsZXM7XHJcbn1cclxuIiwiaW1wb3J0IHsgUHJvZFJ1bGUgfSBmcm9tIFwiLi4vZG9tYWluL3Byb2RSdWxlc1wiO1xyXG5cclxuY29uc3QgcnVsZURCTmFtZSA9IFwicHJvZHVjdGl2aXR5UnVsZXNcIjtcclxuaW50ZXJmYWNlIFJ1bGVMaXN0IHtcclxuICBba2V5OiBzdHJpbmddOiBQcm9kUnVsZVtdXHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGdldEFsbFJ1bGVzKCkge1xyXG4gIGxldCBydWxlTGlzdCA9IGF3YWl0IGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChydWxlREJOYW1lKTtcclxuICBsZXQgcmVzdWx0TGlzdDoge1trZXk6IHN0cmluZ106IGFueX0gPSB0eXBlb2YgcnVsZUxpc3QgPT09IFwidW5kZWZpbmVkXCIgPyB7fSA6IHJ1bGVMaXN0O1xyXG4gIGlmIChydWxlREJOYW1lIGluIHJ1bGVMaXN0KSB7XHJcbiAgICByZXR1cm4gcnVsZUxpc3RbcnVsZURCTmFtZV07XHJcbiAgfVxyXG4gIHJldHVybiByZXN1bHRMaXN0O1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBhZGRSdWxlKG15TmV3UnVsZTogUHJvZFJ1bGUpIHtcclxuICBjb25zdCBydWxlTGlzdCA9IGF3YWl0IGdldEFsbFJ1bGVzKCk7XHJcbiAgY29uc3QgdGFyZ2V0V2Vic2l0ZSA9IG15TmV3UnVsZS5zb3VyY2U7XHJcblxyXG4gIGlmICh0YXJnZXRXZWJzaXRlIGluIHJ1bGVMaXN0KSB7XHJcbiAgICBydWxlTGlzdFt0YXJnZXRXZWJzaXRlXS5wdXNoKG15TmV3UnVsZSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJ1bGVMaXN0W3RhcmdldFdlYnNpdGVdID0gW215TmV3UnVsZV07XHJcbiAgfVxyXG4gIHNldFJ1bGVMaXN0KHJ1bGVMaXN0KTtcclxuICByZXR1cm4gKHJ1bGVMaXN0W3RhcmdldFdlYnNpdGVdLmxlbmd0aCAtIDEpXHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVJ1bGUoYmFkU2l0ZTogc3RyaW5nLCBpbmRleDogbnVtYmVyLCB1cGRhdGVkUnVsZTogUHJvZFJ1bGUpIHtcclxuICAvLyBsZXQgcnVsZUxpc3QgPSBhd2FpdCBnZXRBbGxSdWxlcygpO1xyXG4gIGNvbnNvbGUubG9nKFwiZXhlY3V0aW5nIFVwZGF0ZVJ1bGUhXCIpXHJcbiAgYXdhaXQgZGVsZXRlUnVsZShiYWRTaXRlLCBpbmRleCk7XHJcbiAgcmV0dXJuIGFkZFJ1bGUodXBkYXRlZFJ1bGUpO1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBkZWxldGVSdWxlKGJhZFNpdGU6c3RyaW5nLCBpbmRleDogbnVtYmVyKSB7XHJcbiAgbGV0IHJ1bGVMaXN0ID0gYXdhaXQgZ2V0QWxsUnVsZXMoKTtcclxuICBjb25zb2xlLmxvZyhcImV4ZWN1dGluZyBkZWxldGVSdWxlIVwiKVxyXG4gIHJ1bGVMaXN0W2JhZFNpdGVdLnNwbGljZShpbmRleCwgMSk7XHJcbiAgaWYocnVsZUxpc3RbYmFkU2l0ZV0ubGVuZ3RoID09IDApe1xyXG4gICAgZGVsZXRlIHJ1bGVMaXN0W2JhZFNpdGVdXHJcbiAgfVxyXG4gIHNldFJ1bGVMaXN0KHJ1bGVMaXN0KTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0UnVsZUxpc3QocnVsZUxpc3Q6IFJ1bGVMaXN0KSB7XHJcbiAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsgcHJvZHVjdGl2aXR5UnVsZXM6IHJ1bGVMaXN0IH0pO1xyXG59XHJcblxyXG5jb25zdCBQZXJzaXN0YW5jZUhhbmRsZXIgPSB7XHJcbiAgZ2V0QWxsUnVsZXM6IGdldEFsbFJ1bGVzLFxyXG4gIGFkZFJ1bGU6IGFkZFJ1bGUsXHJcbiAgZGVsZXRlUnVsZTogZGVsZXRlUnVsZSxcclxuICB1cGRhdGVSdWxlOiB1cGRhdGVSdWxlLFxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBlcnNpc3RhbmNlSGFuZGxlciJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==