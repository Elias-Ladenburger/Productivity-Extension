import { WorkTimeFactory, WorkTime } from "../domain/workinghours"
import WorkTimeView from "./workTimeView"
import WorkTimeRepository from "../domain/workTimeRepo"
import { IDHandler } from "../helpers/helpers";
import { Validator } from "./common";

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
      for (let timeID in workTimes[weekday]) {
        wtID = `${weekday}-${timeID}`
        let wt = workTimes[weekday][timeID]
        console.log(wtID)
        console.log(wt)
        addToWorkTimeTable(wt, wtID)
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
    try {
      validateFormInput()
      addWTfromForm()
      window.location.reload()
    }
    catch (err) {
      const errorMessage = (err as Error).message
      WorkTimeView.showFormErrors(errorMessage)
    }

  })
}

function validateFormInput() {
  const formData = WorkTimeView.getFormData()
  console.log("starting validation")
  Validator.validateTime(formData.starttime)
  console.log("start time validated")
  Validator.validateTime(formData.endtime)
  console.log("end time validated")
  Validator.validateTime(formData.starttime, "00:00", formData.endtime)
  console.log("start time before end time")
}

async function addWTfromForm() {
  let wtData = WorkTimeView.getFormData()
  const newWT = WorkTimeFactory.createWorkTimeFromStrings(wtData.starttime, wtData.endtime, wtData.weekday)
  let wtID = wtData.worktimeID
  let idx: string
  if (wtID == IDHandler.STANDARD_ID) {
    idx = await WorkTimeRepository.addWorkTime(newWT)
    wtID = `${wtData.weekday}-${idx}`
  }
  else {
    const deconstructed = IDHandler.deconstructID(wtID)
    idx = ("index" in deconstructed) ? deconstructed.index : "NEW"
  }
  addToWorkTimeTable(newWT, wtID)
  WorkTimeView.clearForm()
}

function deleteEntry(wtID: string) {
  const decID = IDHandler.deconstructID(wtID)
  const weekday = Number(decID.collectionID)
  const index = decID.index + "-" + decID.whole_array[2]
  WorkTimeRepository.deleteOne(weekday, index)
  WorkTimeView.removeEntry(wtID)
  window.location.reload()
}