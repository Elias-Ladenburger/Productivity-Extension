import { WorkTimeFactory, WorkTime } from "../domain/workinghours"
import WorkTimeView from "./workTimeView"
import WorkTimeRepository from "../domain/workTimeRepo"
import { IDHandler } from "../helpers/helpers";

prepareWorkTimes();

function prepareWorkTimes() {
  prepareWTForm();
  prepareWorkHourTable();
  prepareSaveWorkTimeButton();
}

function prepareWTForm() {
  WorkTimeView.clearForm()
}

async function prepareWorkHourTable() {
  const workTimes = await WorkTimeRepository.getAll();
  if (!workTimes || Object.keys(workTimes).length == 0) {
    WorkTimeView.showOnboarding()
  } else {
    let wtID: string
    for (let weekday in workTimes) {
      for (let i = 0; i < workTimes[weekday].length; i++) {
        wtID = `${weekday}-${i}`
        addToWorkTimeTable(workTimes[weekday][i], wtID)
      }


    }
  }
}

function addToWorkTimeTable(entry: WorkTime, wtID: string) {
  const actionButtons = WorkTimeView.addEntry(entry, wtID)
  const deleteButton = actionButtons["delete"] as HTMLButtonElement

  deleteButton.addEventListener(
    "click",
    function (e) {
      e.preventDefault()
      deleteEntry(wtID);
    },
    false
  );
}

function prepareSaveWorkTimeButton() {

  const saveWTButton = document.getElementById("saveWTButton") as HTMLButtonElement
  saveWTButton.addEventListener("click", (e) => {
    e.preventDefault()
    addWTfromForm()
    window.location.reload()
  })
}

async function addWTfromForm() {
  let wtData = WorkTimeView.getFormData()
  const newWT = WorkTimeFactory.createWorkTimeFromStrings(wtData.starttime, wtData.endtime, wtData.weekday)
  let wtID = wtData.worktimeID
  let idx: number
  if (wtID == IDHandler.STANDARD_ID) {
    idx = await WorkTimeRepository.addWorkTime(newWT)
    wtID = `${wtData.weekday}-${idx}`
  }
  else {
    const deconstructed = IDHandler.deconstructID(wtID)
    idx = ("index" in deconstructed) ? deconstructed.index : 0
  }
  addToWorkTimeTable(newWT, wtID)
  WorkTimeView.clearForm()
}

function deleteEntry(wtID: string) {
  const decID = IDHandler.deconstructID(wtID)
  const weekday = Number(decID.collectionID)
  const index = decID.index
  WorkTimeRepository.deleteOne(weekday, index)
  WorkTimeView.removeEntry(wtID)
  window.location.reload()
}