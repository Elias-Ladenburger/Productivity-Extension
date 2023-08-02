import { TimeHandler } from "../helpers/helpers"
import PersistanceHandler from "../persistance/persistance"
import WorkTime from "./workinghours"


const dbName = "workTimes"
const persHandler = new PersistanceHandler(dbName)
interface WTlist {
    [key: number]: { [key: string]: WorkTime }
}

const WorkTimeRepository = {

    getAll: async (): Promise<WTlist> => {
        let workTimes = await persHandler.getAll()
        if (typeof workTimes == "undefined") {
            console.log("could not load work times!")
            return {}
        }
        if (dbName in workTimes) {
            return workTimes[dbName]
        }
        return workTimes
    },

    setWorkTimes: (timelist: WTlist) => {
        persHandler.setAll(timelist)
    },

    addWorkTime: async (wt: WorkTime) => {
        const timelist = await WorkTimeRepository.getAll();
        const weekday = wt.weekday

        let insertStr = wt.startHour + "-" + wt.startMinutes
        if(!(weekday in timelist)){
            timelist[weekday] = {}
        }
        timelist[weekday][insertStr] = wt;
        console.log("Timelist now looks like: ")
        console.log(timelist)
        WorkTimeRepository.setWorkTimes(timelist);
        return insertStr
    },

    deleteOne: async (weekday: number, indexStr: string) => {
        let allWTs = await WorkTimeRepository.getAll()

        console.log(`deleting ${weekday}-${indexStr}`)
        console.log(allWTs[weekday][indexStr])

        delete allWTs[weekday][indexStr]
        if (Object.keys(allWTs[weekday]).length == 0) {
            delete allWTs[weekday]
        }
        WorkTimeRepository.setWorkTimes(allWTs);
    },

    _clear: () => {
        persHandler.setAll({})
    }
}

export default WorkTimeRepository