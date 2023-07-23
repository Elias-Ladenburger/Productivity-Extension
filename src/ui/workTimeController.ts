import { WorkTimeFactory } from "../domain/workinghours"

prepareWorkTimes();

function prepareWorkTimes() {
  prepareWorkHourTable();
  prepareAddWorkTimeButton();
}

async function prepareWorkHourTable() {
  const workTimes = [""] // await PersistanceHandler.getAllWorkTimes();
  if (!workTimes || workTimes.length == 0) {
    addDemoWorkTime();
  } else {
    workTimes.forEach((workTime: any) => {
      addToWorkTimeTable(workTime);
    });
  }
}

function addToWorkTimeTable(entry: any) {
  const tableName = "worktimeTable"
}

function addDemoWorkTime() {
  let now = new Date()
  let demoWorkTime = WorkTimeFactory.createWorkTime(now, now, now.getDay())
  WorkTimeView.addEntry(demoWorkTime)
}

function prepareAddWorkTimeButton() {
  throw new Error("Function not implemented.");
}
