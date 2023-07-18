import PersistanceHandler from "../persistance/persistance"


const dbName = "workTimes"
const persHandler = new PersistanceHandler(dbName)

const WorkTimeRepository = {
    setWorkTime: async () => {
        let workTimes = await persHandler.getAll()
        if(!workTimes || Object.keys(workTimes).length == 0){
            return false
        }
    }
}