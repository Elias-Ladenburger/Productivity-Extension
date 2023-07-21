import PersistanceHandler from "../persistance/persistance"
import WorkTime from "./workinghours"


const dbName = "workTimes"
const persHandler = new PersistanceHandler(dbName)

const WorkTimeRepository = {

    getAll: async () => {
        let workTimes = await persHandler.getAll()
        if (!workTimes || Object.keys(workTimes).length == 0) {
            return {}
        }
        return workTimes[dbName]
    },

    setWorkTimes: (timelist: {[key: number]: WorkTime[]}) => {
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
    }
}