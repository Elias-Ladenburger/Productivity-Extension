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
import PersistanceHandler from "../persistance/persistance";
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
                case 0: return [4 /*yield*/, PersistanceHandler.getAllRules()];
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
                case 0: return [4 /*yield*/, PersistanceHandler.getAllRules()];
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
//# sourceMappingURL=productivity.js.map