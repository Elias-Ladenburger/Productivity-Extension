"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
function getRuleFromJSON(entry) {
    let myRule = new ProdRule(entry.source, createAction(entry.action.type, entry.action.targetvalue), entry.condition, entry.delay);
    return myRule;
}
class ProdRule {
    constructor(badWebsite, action = { type: ActionType.FRAME, targetValue: "red" }, condition = ActionCondition.ALWAYS, delay = 0) {
        this.source = badWebsite;
        this.delay = delay;
        this.condition = condition;
        if (action instanceof Action) {
            this.action = action;
        }
        else {
            let tmpType = action.type;
            let tmpVal = action.targetValue;
            this.action = new Action(tmpType, tmpVal);
        }
    }
    applyRule() {
        window.addEventListener("load", function () {
            setTimeout(() => {
                this.action.performAction();
            }, this.delay);
        });
    }
    toString() {
        const delayStr = getDelayStr(this.delay);
        return `${this.condition} when I visit ${this.source} then ${delayStr} ${this.action.toString()}`;
    }
}
const ActionFactory = {
    createAction(type, targetValue) {
        switch (type) {
            case ActionType.FRAME:
                return new FrameAction(targetValue);
            case ActionType.REDIRECT:
                return new RedirectAction(targetValue);
            case ActionType.POPUP:
                return new PopupAction(targetValue);
            default:
                throw "Unknown action type! Must be defined in the ActionType Enum.";
        }
    }
};
class Action {
    constructor(targetValue = "") {
        this.targetValue = targetValue;
    }
    performAction() {
        return;
    }
    toString() {
        return `apply a rule!`;
    }
}
class FrameAction extends Action {
    constructor(frameColor) {
        super(frameColor);
        this.type = ActionType.FRAME;
    }
    performAction() {
        alert(`This site is unproductive! Framing this site in ${this.targetValue}.`);
        document.body.style.border = `10px solid ${this.targetValue}`;
    }
    toString() {
        return `frame the site in ${this.targetValue}`;
    }
}
class PopupAction extends Action {
    constructor(popupText) {
        super(popupText);
        this.type = ActionType.POPUP;
    }
    performAction() {
        if (!this.targetValue) {
            this.targetValue = "Do you truly want to spend more time on this site?";
        }
        alert(this.targetValue);
    }
    toString() {
        return `show a popup that says: \n '${this.targetValue}'`;
    }
}
class RedirectAction extends Action {
    constructor(redirectTo) {
        super(redirectTo);
        this.type = ActionType.REDIRECT;
    }
    performAction() {
        alert(`This site is unproductive! Redirecting to ${this.targetValue}.`);
        let targetValue = this.targetValue.startsWith("http")
            ? this.targetValue
            : `https://${this.targetValue}`;
        window.location.href = targetValue;
    }
    toString() {
        return `redirect to ${this.targetValue}`;
    }
}
const ActionType = {
    REDIRECT: "REDIRECT",
    POPUP: "POPUP",
    FRAME: "FRAME",
    LOG: "LOG",
};
const ActionCondition = {
    ALWAYS: "ALWAYS",
    WORK: "WORK",
    GOAL: "GOAL",
};
function getDelayStr(miliseconds) {
    if (miliseconds == 0) {
        return "immediately";
    }
    let seconds = (miliseconds / 1000).toFixed(1);
    let minutes = (miliseconds / (1000 * 60)).toFixed(1);
    let hours = (miliseconds / (1000 * 60 * 60)).toFixed(1);
    let days = (miliseconds / (1000 * 60 * 60 * 24)).toFixed(1);
    if (seconds < 60)
        return seconds + " seconds";
    else if (minutes < 60)
        return minutes + " minutes";
    else if (hours < 24)
        return hours + " hours";
    else
        return days + " days";
}
var _WorkTime_instances, _WorkTime_parseHour, _WorkTime_parseMinutes;
class WorkTime {
    constructor(starttime, endtime, weekday, is_active = true) {
        _WorkTime_instances.add(this);
        this.startTime = starttime;
        this.endTime = endtime;
        this.weekday = weekday;
        this.is_active = is_active;
    }
    toggleActive() {
        this.is_active = this.is_active == false;
    }
    get startTime() {
        return this.startHour + ":" + this.startMinutes;
    }
    set startTime(timeValue) {
        this.startHour = __classPrivateFieldGet(this, _WorkTime_instances, "m", _WorkTime_parseHour).call(this, timeValue);
        this.startMinutes = __classPrivateFieldGet(this, _WorkTime_instances, "m", _WorkTime_parseMinutes).call(this, timeValue);
    }
    get endTime() {
        return this.endHour + ":" + this.endMinutes;
    }
    set endTime(timeValue) {
        this.endHour = __classPrivateFieldGet(this, _WorkTime_instances, "m", _WorkTime_parseHour).call(this, timeValue);
        this.endMinutes = __classPrivateFieldGet(this, _WorkTime_instances, "m", _WorkTime_parseMinutes).call(this, timeValue);
    }
    isWorkTime(currentTime = "") {
        if (currentTime == "") {
            currentTime = new Date();
        }
        else {
            currentTime = new Date(currentTime);
        }
        if (currentTime.getDay() == this.weekday) {
            const currentHour = currentTime.getHours();
            const currentMinute = currentTime.getMinutes();
            if ((currentHour > this.startHour ||
                (currentHour === this.startHour &&
                    currentMinute >= this.startMinutes)) &&
                (currentHour < this.endHour ||
                    (currentHour === this.endHour && currentMinute <= this.endMinutes))) {
                return true;
            }
        }
        return false;
    }
}
_WorkTime_instances = new WeakSet(), _WorkTime_parseHour = function _WorkTime_parseHour(timeValue) {
    let normalizedTime = new Date(timeValue);
    let hours = normalizedTime.getHours();
    return hours;
}, _WorkTime_parseMinutes = function _WorkTime_parseMinutes(timeValue) {
    let normalizedTime = new Date(timeValue);
    let minutes = normalizedTime.getMinutes();
    return minutes;
};
applyRule();
async function applyRule() {
    let currentURL = window.location.href;
    if (await checkIfRule(currentURL)) {
        const rulesForThisSite = await getRules(currentURL);
        rulesForThisSite.forEach((myRule) => {
            console.log(`executing rule: "${myRule}"`);
            console.log(myRule);
            myRule.applyRule();
        });
    }
}
async function checkIfRule(siteToCheck) {
    const ruleList = await PersistanceHandler.getAllRules();
    let siteHasRule = false;
    if (ruleList) {
        Object.keys(ruleList).forEach((badSite) => {
            if (siteToCheck.includes(badSite)) {
                siteHasRule = true;
            }
        });
        return siteHasRule;
    }
}
async function getRules(originURL) {
    const ruleList = await PersistanceHandler.getAllRules();
    let applicableRules = Object.keys(ruleList).forEach((badSite) => {
        let applicableRules = [];
        if (originURL.includes(ruleList[badSite])) {
            ruleList[badSite].forEach((myRule) => {
                applicableRules.push(myRule);
            });
        }
        return applicableRules;
    });
    let rulesForThisSite = typeof applicableRules == "undefined" ? [] : applicableRules;
    return rulesForThisSite;
}
/**
 * When the popup loads, inject a content script into the active tab,
 * and add a click handler.
 * If we couldn't inject the script, handle the error.
 */
window.addEventListener("load", function (e) {
    console.log("loaded!");
    document.getElementById("settingsButton").addEventListener("click", function (e) {
        chrome.runtime.openOptionsPage();
        close();
    }, false);
}, false);
/**
 * There was an error executing the script.
 * Display the popup's error message, and hide the normal UI.
 */
function reportExecuteScriptError(error) {
    document.querySelector("#popup-content").classList.add("hidden");
    document.querySelector("#error-content").classList.remove("hidden");
    console.error(`Failed to execute prod_booster content script: ${error.message}`);
}
prepareAll();
function prepareAll() {
    prepareWorkHourTable();
    prepareAddWorkTimeButton();
}
async function prepareWorkHourTable() {
    const workTimes = await PersistanceHandler.getAllWorkTimes();
    if (!workTimes || workTimes.length == 0) {
        addDemoWorkTime();
    }
    else {
        workTimes.forEach((workTime) => {
            addToWorkTimeTable(workTime);
        });
    }
}
function addToWorkTimeTable(entry) {
    const tableName = "worktimeTable";
}
function addDemoWorkTime() { }
function prepareAddWorkTimeButton() {
}
prepareAll();
addButton = document.getElementById("addRuleButton");
editButton = document.getElementById("editRuleButton");
function prepareAll() {
    prepareForm();
    prepareProdRuleTable();
    prepareAddRuleButton();
}
function prepareForm() {
    const multipleChoiceFields = getMultipleChoiceFields();
    let selectElement;
    let myDict;
    for (let elemID in multipleChoiceFields) {
        selectElement = document.getElementById(elemID);
        myDict = multipleChoiceFields[elemID];
        for (let key in multipleChoiceFields[elemID]) {
            let optionElement = document.createElement("option");
            optionElement.value = key;
            optionElement.textContent = myDict[key];
            selectElement.appendChild(optionElement);
        }
    }
}
function getMultipleChoiceFields() {
    const myEnum = {
        actioncondition: {
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
    return myEnum;
}
async function prepareProdRuleTable() {
    const ruleList = await PersistanceHandler.getAllRules();
    if (!ruleList || ruleList.length == 0 || Object.keys(ruleList).length == 0) {
        addDemoRule();
    }
    else {
        Object.keys(ruleList).forEach((unproductiveSite) => {
            let ruleIndex = 0;
            ruleList[unproductiveSite].forEach((rule) => {
                addToProdTable(rule, ruleIndex);
                ruleIndex++;
            });
        });
    }
}
function addDemoRule() {
    const demoURL = "demoUnproductiveSite.com";
    let demoRule = new ProdRule(demoURL, new RedirectAction("productiveURL.com"));
    ProdRulesView.addEntryToTable(demoRule, 0);
}
function prepareAddRuleButton() {
    addButton.addEventListener("click", function (e) {
        addRuleFromForm();
    }, false);
}
function addRuleFromForm() {
    const formData = ProdRulesView.getFormData();
    let actionDelay = formData.delay;
    let actionCondition = formData.condition;
    let actionType = formData.actiontype;
    let ruleID = formData.ruleID;
    let newEntry = new ProdRule(formData.actionsource, ActionFactory.createAction(actionType, formData.targetVal), actionCondition, actionDelay);
    if (ruleID == "NEW") {
        if (formData.actionsource && actionType && formData.targetVal) {
            const ruleIndex = PersistanceHandler.addRule(newEntry);
            addToProdTable(newEntry, ruleIndex);
        }
    }
    else {
        const id_elems = _deconstructID(ruleID);
        PersistanceHandler.updateRule(id_elems["badSite"], id_elems["index"], newEntry);
    }
    ProdRulesView.clearForm();
}
function addToProdTable(prodRule, ruleIndex) {
    const actionButtons = ProdRulesView.addEntryToTable(prodRule, ruleIndex);
    actionButtons["edit"].addEventListener("click", function (e) {
        prepareToEdit(prodRule, ruleIndex);
    });
    actionButtons["delete"].addEventListener("click", function (e) {
        deleteEntry(prodRule.source, ruleIndex);
    }, false);
}
function prepareToEdit(prodRule, ruleIndex) {
    let myFields = ProdRulesView.getFormFields();
    console.log(prodRule.action);
    console.log(prodRule.delay);
    console.log(prodRule.condition);
    myFields.actionsource.value = prodRule.source;
    myFields.targetVal.value = prodRule.action.targetValue;
    myFields.actiontype.value = prodRule.action.type;
    myFields.condition.value = prodRule.condition;
    myFields._id.value = _getRowID(prodRule.source, ruleIndex);
    myFields.delay.value = prodRule.delay || msToTime(prodRule.delay);
}
function deleteEntry(unproductiveSite, ruleIndex) {
    const ruleID = _getRowID(unproductiveSite, ruleIndex);
    PersistanceHandler.deleteRule(unproductiveSite, ruleIndex);
    ProdRulesView.removeFromTable(unproductiveSite, ruleID);
}
function msToTime(miliseconds) {
    if (miliseconds == 0)
        return "immediately";
    let seconds = (miliseconds / 1000).toFixed(1);
    let minutes = (miliseconds / (1000 * 60)).toFixed(1);
    let hours = (miliseconds / (1000 * 60 * 60)).toFixed(1);
    let days = (miliseconds / (1000 * 60 * 60 * 24)).toFixed(1);
    if (seconds < 60)
        return "after " + seconds + " Sec";
    else if (minutes < 60)
        return "after " + minutes + " Min";
    else if (hours < 24)
        return "after " + hours + " Hrs";
    else
        return "after " + days + " Days";
}
function _getRowID(unproductiveSite, ruleIndex) {
    const rowID = `${unproductiveSite}-${ruleIndex}`;
    return rowID;
}
function _deconstructID(ruleID) {
    const id_array = ruleID.split("-");
    return {
        badSite: id_array[0],
        index: id_array[1],
    };
}
const ProdRulesView = {
    addEntryToTable: (prodRule, ruleID) => {
        const tableID = "productionRuleTable";
        let settingsTable = document.getElementById(tableID);
        let newRow = settingsTable.insertRow(-1);
        let ruleCell = newRow.insertCell(0);
        let actionsCell = newRow.insertCell(1);
        newRow.id = ruleID;
        ruleCell.innerHTML = _formatString(prodRule);
        ruleCell.setAttribute("class", "px-2");
        actionsCell.innerHTML = `<button id="${tableID}_edit_${ruleID}" class="rounded-lg border-white bg-navy text-white hover:bg-blueRoyal px-2 mx-1 text-center">edit</button>
  <button id="${tableID}_delete_${ruleID}" class="rounded-lg border-white bg-navy text-white hover:bg-blueRoyal px-2 mx-1 text-center">delete</button>`;
        const deleteButton = document.getElementById(`${tableID}_delete_${ruleID}`);
        const editButton = document.getElementById(`${tableID}_edit_${ruleID}`);
        return { edit: editButton, delete: deleteButton, entry: ruleCell };
    },
    removeFromTable: (ruleID) => {
        let toDelete = document.getElementById(ruleID);
        toDelete.remove();
        console.log(`Removing rule for ${ruleID}!`);
    },
    toggleEditForm: () => {
        let myFields = _getFormFields();
        myFields.actionsource = prodRule.source;
        myFields.actiontype = prodRule.action.type;
        myFields.condition = prodRule.condition;
        myFields.delay = prodRule.delay;
    },
    getFormData: () => {
        let myFields = _getFormFields();
        let formData = [];
        for (let elemID in myFields) {
            formData[elemID] = myFields[elemID].value;
        }
        return formData;
    },
    getFormFields: _getFormFields,
    clearForm: () => {
        document.getElementById("rulesForm").reset();
    }
};
function _formatString(entry) {
    const myAction = ActionFactory.createAction(entry.action.type, entry.action.targetValue);
    const prodRule = new ProdRule(entry.source, myAction, entry.condition, entry.delay);
    const choiceFields = getMultipleChoiceFields();
    const conditionStr = choiceFields.actioncondition[prodRule.condition];
    const delayStr = msToTime(prodRule.delay);
    const resultsStr = `<em class="text-lg">${prodRule.source}</em> <br><b>${conditionStr}</b> when I visit <b>${prodRule.source}</b> then <b>${delayStr} ${myAction.toString()}</b>`;
    return resultsStr;
}
function _getFormFields() {
    const formFields = {
        actionsource: document.getElementById("actionsource"),
        actiontype: document.getElementById("actiontype"),
        targetVal: document.getElementById("targetvalue"),
        condition: document.getElementById("actioncondition"),
        delay: document.getElementById("actiondelay"),
        ruleID: document.getElementById("ruleID"),
    };
    return formFields;
}
prepareAll();
function prepareAll() {
    prepareWorkHourTable();
    prepareAddWorkTimeButton();
}
async function prepareWorkHourTable() {
    const workTimes = await PersistanceHandler.getAllWorkTimes();
    if (!workTimes || workTimes.length == 0) {
        addDemoWorkTime();
    }
    else {
        workTimes.forEach((workTime) => {
            addToWorkTimeTable(workTime);
        });
    }
}
function addToWorkTimeTable(entry) {
    const tableName = "worktimeTable";
}
function addDemoWorkTime() { }
function prepareAddWorkTimeButton() { }
