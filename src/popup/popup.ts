import { ProdRule, ProdRuleFactory } from "../domain/prodRules"
import ProdRuleRepository from "../domain/prodRuleRepo"
import { _formatString } from "../ui/common"
import WorkTimeService from "../domain/workHourService"
import { TimeHandler } from "../helpers/helpers"
import WorkTime from "../domain/workinghours"

/**
 * When the popup loads, inject a content script into the active tab,
 * and add a click handler.
 * If we couldn't inject the script, handle the error.
 */

window.addEventListener("load",
  function (e) {
    console.log("loaded popup!")
    preparePopup()
  }
  , false)

function preparePopup() {
  loadRules()
  addEventListeners()
  showNextWT()
}

async function loadRules() {
  const activeTab = await getCurrentTab()
  let currentURL: string = activeTab.url || "";

  if (currentURL == "") {
    return
  }

  const rulesForThisSite: ProdRule[] = await ProdRuleRepository.getRulesByURL(currentURL)

  if (typeof rulesForThisSite != "undefined" && rulesForThisSite.length > 0) {
    let pageStatus = document.getElementById("pageStatus") as HTMLElement
    pageStatus.innerHTML = String(rulesForThisSite.length) + " rules"
  }
}

function addEventListeners() {
  document.getElementById("settingsButton")?.addEventListener(
    "click",
    function (e) {
      chrome.runtime.openOptionsPage()
      close()
    },
    false
  )

  document.getElementById("addRuleButton")?.addEventListener(
    "click",
    function (e) {
      chrome.runtime.openOptionsPage(() => {
        window.location.hash = "#prodrules"
      })
      close()
    }
  )

  document.getElementById("editWTbutton")?.addEventListener(
    "click",
    function (e) {
      chrome.runtime.openOptionsPage(() => {
        window.location.hash = "#worktimes"
      })
      close()
    }
  )
}

async function getCurrentTab() {
  let queryOptions = { active: true, currentWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions);
  return tab;
}

async function showNextWT() {
  let wtStatus = document.getElementById("wtStatus") as HTMLElement

  if (await WorkTimeService.isWorkingTime()) {
    wtStatus.innerHTML = "Currently working"
    let currentWT = await WorkTimeService.currentWorkingTime() as WorkTime
    let wtEnd = document.getElementById("wtEnd") as HTMLElement
    let innerString = `${TimeHandler.timeToStr(currentWT.endHour)}:${TimeHandler.timeToStr(currentWT.endMinutes)}`
    wtEnd.innerHTML = innerString
  }
  else {
    wtStatus.innerHTML = "On a break"
    let endText = document.getElementById("endTime") as HTMLElement
    endText.classList.add("hidden")
  }
}