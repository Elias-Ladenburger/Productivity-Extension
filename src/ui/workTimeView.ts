import WorkTime from "../domain/workinghours"
import { TimeHandler } from "../helpers/helpers"


const WTtable = {
    tableID: "worktimeTable",

    getBody: () => {
        const wtTable = document.getElementById(WTtable.tableID) as HTMLTableElement
        const body = wtTable.tBodies[0]
        return body
    },

    addEntry: (wt: WorkTime, wtID: string) => {
        const wtTable = WTtable.getBody();
        let newRow = wtTable.insertRow(-1);
        let weekdayCell = newRow.insertCell(0);
        let startTimeCell = newRow.insertCell(1);
        let endTimeCell = newRow.insertCell(2)
        let actionsCell = newRow.insertCell(3);

        newRow.id = wtID;

        weekdayCell.innerHTML = TimeHandler.WEEKDAYS(wt.weekday);

        startTimeCell.innerHTML = TimeHandler.timeToStr(wt.startHour) + ":" + TimeHandler.timeToStr(wt.startMinutes)
        endTimeCell.innerHTML = TimeHandler.timeToStr(wt.endHour) + ":" + TimeHandler.timeToStr(wt.endMinutes)

        const deleteButtonPrototype = document.getElementById("prototypeDeleteButton") as HTMLButtonElement


        let deleteButton = deleteButtonPrototype.cloneNode(true) as HTMLButtonElement
        deleteButton.id = `${WTtable.tableID}_delete_${wtID}`

        actionsCell.insertBefore(deleteButton, null)

        return { delete: deleteButton, entry: newRow };

    },
    removeEntry: (wtID: string) => {
        let toDelete = document.getElementById(wtID) as HTMLTableElement;
        toDelete.remove();
        console.log(`Removing rule for ${wtID}!`);
    },
    clear: () => { }
}

class WorkTimeForm {
    endtime: HTMLInputElement;
    weekday: HTMLSelectElement;
    starttime: HTMLInputElement;
    worktimeID: HTMLInputElement;
    _title: HTMLTitleElement;
    _button: HTMLButtonElement


    constructor() {
        this.weekday = document.getElementById("weekday") as HTMLSelectElement
        this.starttime = document.getElementById("starttime") as HTMLInputElement
        this.endtime = document.getElementById("endtime") as HTMLInputElement
        this.worktimeID = document.getElementById("wtID") as HTMLInputElement
        this._button = document.getElementById("saveWTButton") as HTMLButtonElement
        this._title = document.getElementById("wtFormTitle") as HTMLTitleElement
    }


    toStart() {
        let now = new Date()
        this.starttime.value = `08:00`
        this.endtime.value = `17:00`
        this.weekday.value = String(now.getDay())
        this.worktimeID.value = "NEW"
    }

    getValues() {
        return {
            weekday: Number(this.weekday.value),
            starttime: this.starttime.value,
            endtime: this.endtime.value,
            worktimeID: this.worktimeID.value
        }
    }
}

const WorkTimeView = {
    addEntry: WTtable.addEntry,
    clearEntries: WTtable.clear,
    removeEntry: WTtable.removeEntry,

    getFormData: () => {
        let myForm = new WorkTimeForm()
        return myForm.getValues();
    },

    clearForm: () => {
        const form = new WorkTimeForm()
        form.toStart()
    },

    setFormValues(formValues: WorkTime, wtID: string) {
        let myForm = new WorkTimeForm()
        myForm.weekday.value = String(formValues.weekday)
        myForm.starttime.value = TimeHandler.timeToStr(formValues.startHour) + ":" + TimeHandler.timeToStr(formValues.startMinutes)
        myForm.endtime.value = TimeHandler.timeToStr(formValues.endHour) + ":" + TimeHandler.timeToStr(formValues.endMinutes)
        myForm.worktimeID.value = wtID
    },

    showOnboarding: () => {
        const table = WTtable.getBody()
        const row = table.insertRow()
        const cell = row.insertCell()
        cell.innerHTML = "No work times scheduled yet"
        cell.id = "demo"
    }
}

export default WorkTimeView