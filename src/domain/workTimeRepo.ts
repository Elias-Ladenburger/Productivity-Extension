import PersistanceHandler from "../persistance/persistance"
import WorkTime from "./workinghours"


const dbName = "workTimes"
const persHandler = new PersistanceHandler(dbName)
interface WTlist {
    [key: number]: WorkTime[]
}

const WorkTimeRepository = {

    getAll: async (): Promise<WTlist> => {
        let workTimes = await persHandler.getAll()
        if (dbName in workTimes) {
            return workTimes[dbName]
        }
        return workTimes
    },

    setWorkTimes: (timelist: WTlist) => {
        persHandler.setAll(timelist)
    },

    addWorkTime: async (workTime: WorkTime) => {
        const timelist = await WorkTimeRepository.getAll();
        const weekday = workTime.weekday

        if (weekday in timelist) {
            timelist[weekday].push(workTime);
        } else {
            timelist[weekday] = [workTime];
        }
        WorkTimeRepository.setWorkTimes(timelist);
        return (timelist[weekday].length - 1)
    },

    deleteOne: async (weekday: number, index: number) => {
        let allWTs = await WorkTimeRepository.getAll()
        allWTs[weekday].splice(index, 1);
        if (allWTs[weekday].length == 0) {
            delete allWTs[weekday]
        }
        WorkTimeRepository.setWorkTimes(allWTs);
    },

    _clear: () => {
        persHandler.setAll({})
    }
}

export default WorkTimeRepository