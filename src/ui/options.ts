import PersistanceHandler from "../persistance/prodRuleRepo";

prepareAll();

function prepareAll() {
  prepareWorkHourTable();
  prepareAddWorkTimeButton();
}



async function prepareWorkHourTable(){
  const workTimes = [""] // await PersistanceHandler.getAllWorkTimes();
  if (!workTimes || workTimes.length == 0) {
    addDemoWorkTime();
  } else {
      workTimes.forEach((workTime: any) => {
        addToWorkTimeTable(workTime);
      });
  }
}

function addToWorkTimeTable(entry: any){
  const tableName = "worktimeTable"
}

function addDemoWorkTime() {}

function prepareAddWorkTimeButton() {

}

