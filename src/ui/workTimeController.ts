import { WorkTimeFactory, WorkTime } from "../domain/workinghours"
import WorkTimeView from "./workTimeView"
import WorkTimeRepository from "../domain/workTimeRepo"
import { IDHandler } from "../helpers/helpers";

prepareWorkTimes();

function prepareWorkTimes() {
  prepareWorkHourTable();
  prepareSaveWorkTimeButton();
}

async function prepareWorkHourTable() {
  WorkTimeView.clearForm()
  const workTimes = await WorkTimeRepository.getAll();
  if (!workTimes || Object.keys(workTimes).length == 0) {
    addDemoWorkTime();
  } else {
    let index: number
    let wtID: string
    for (let weekday = 0; weekday < 7; weekday++) {
      index = 0
      workTimes[weekday].forEach((workTime: WorkTime) => {
        wtID = `${weekday}-${index}`
        addToWorkTimeTable(workTime, wtID)
        index++
      });
    }
  }
}

function addToWorkTimeTable(entry: WorkTime, wtID: string) {
  WorkTimeView.addEntry(entry, wtID)
}

function addDemoWorkTime() {
  let start = new Date()
  let end = new Date()
  end.setHours(start.getHours() + 4)
  let demoWorkTime = WorkTimeFactory.createWorkTime(start, end, start.getDay())
  WorkTimeView.addEntry(demoWorkTime, "DEMO")
}

function prepareSaveWorkTimeButton() {

  const saveWTButton = document.getElementById("saveWTButton") as HTMLButtonElement
  saveWTButton.addEventListener("click", (e) => {
    e.preventDefault()
    addWTfromForm()
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
  else{
    const deconstructed = IDHandler.deconstructID(wtID)
    idx = ("index" in deconstructed) ? deconstructed.index : 0
  }

  const actionButtons = WorkTimeView.addEntry(newWT, wtID)
  const editButton = actionButtons["edit"] as HTMLButtonElement
  const deleteButton = actionButtons["delete"] as HTMLButtonElement
  editButton.addEventListener("click", function (e) {
    e.preventDefault()
    prepareToEdit(newWT, wtID);
  });

  deleteButton.addEventListener(
    "click",
    function (e) {
      deleteEntry(wtData.weekday, idx);
    },
    false
  );

  WorkTimeView.clearForm()
}

function prepareToEdit(entry: WorkTime, entryID: string){
  WorkTimeView.setFormValues(entry, entryID)
  WorkTimeView.isFormEditMode(true)
}

function deleteEntry(weekday: number, index: number){
  const entryID = IDHandler.getRowID(weekday, index)
  WorkTimeRepository.deleteOne(weekday, index)
  WorkTimeView.removeEntry(entryID)
}