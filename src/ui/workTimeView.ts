import WorkTime from "../domain/workinghours"


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
        weekdayCell.innerHTML = wt.weekdayAsString;
        startTimeCell.innerHTML = `${wt.startHour}:${wt.startMinutes}`
        endTimeCell.innerHTML = `${wt.endHour}:${wt.endMinutes}` 

        const editButtonPrototype = document.getElementById("prototypeEditButton") as HTMLButtonElement
        const deleteButtonPrototype = document.getElementById("prototypeDeleteButton") as HTMLButtonElement

        let editButton = editButtonPrototype.cloneNode(true) as HTMLButtonElement
        editButton.id = WTtable.tableID + "_edit_" + wtID


        let deleteButton = deleteButtonPrototype.cloneNode(true) as HTMLButtonElement
        deleteButton.id = `${WTtable.tableID}_delete_${wtID}`

        actionsCell.insertBefore(editButton, null)
        actionsCell.insertBefore(deleteButton, null)

        return { edit: editButton, delete: deleteButton, entry: newRow };

    },
    removeEntry: (wtID: string) => { },
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
        this.starttime.value = now.getHours() + ":00"
        this.endtime.value = `${now.getHours() + 4}` + ":00"
        this.weekday.selectedIndex = now.getDay()
        this.setEditMode(false)
    }

    getValues() {
        return {
            weekday: this.weekday.selectedIndex,
            starttime: this.starttime.value,
            endtime: this.endtime.value,
            worktimeID: this.worktimeID.value
        }
    }

    setEditMode(editing: boolean) {
        if (editing) {
            this._title.innerHTML = "Edit working hours"
            this._button.innerHTML = "Save Changes"
        }
        else {
            this.worktimeID.value = "NEW"
            this._title.innerHTML = "Schedule Working Hours"
            this._button.innerHTML = "Add work hours"
        }

    }
}

const WorkTimeView = {
    addEntry: WTtable.addEntry,
    clearEntries: WTtable.clear,
    removeEntry: WTtable.removeEntry,

    isFormEditMode: (editMode: boolean) => {
        let myForm = new WorkTimeForm()
        myForm.setEditMode(editMode)
    },

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
        myForm.weekday.selectedIndex = formValues.weekday
        myForm.starttime.value = formValues.startHour + ":" + formValues.startMinutes
        myForm.endtime.value = formValues.endHour + ":" + formValues.endMinutes
        myForm.worktimeID.value = wtID
    }
}

export default WorkTimeView