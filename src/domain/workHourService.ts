import PersistanceHandler from "../persistance/persistance"
import WorkTimeRepository from "./workTimeRepo"
import WorkTime from "./workinghours"

export const WorkTimeService = {

    isWorkingTime: async (now: Date = new Date()) => {

        const is_work_time = await WorkTimeService.currentWorkingTime()
        if (is_work_time == null || !is_work_time) {
            return false
        }
        return true
    },

    currentWorkingTime: async (now: Date = new Date()): Promise<WorkTime | null> => {
        const working_hours = await WorkTimeRepository.getAll()
        const weekday = now.getDay()

        if (weekday in working_hours) {

            for (let startime in working_hours[weekday]) {
                let wt: WorkTime = working_hours[weekday][startime]

                if (hasWTbegun(now, wt) && !hasWTended(now, wt)) {
                    return wt
                }
            }
        }

        return null

    },

    nextWTtoday: async (now: Date = new Date()): Promise<WorkTime | null> => {
        const allWT = await WorkTimeRepository.getAll()
        const today = now.getDay()

        if (await WorkTimeService.isWorkingTime()) {
            return WorkTimeService.currentWorkingTime()
        }
        if (today in allWT) {
            for (let starttime in allWT[today]) {
                let wt = allWT[today][starttime]
                if (!hasWTbegun(now, wt)) {
                    if (!hasWTended(now, wt)) {
                        return wt
                    }
                }
            }
        }
        return null
    }
}


function hasWTbegun(now: Date, wt: WorkTime) {
    const currentHour: number = now.getHours();
    const currentMinute: number = now.getMinutes();

    if (
        (currentHour > wt.startHour ||
            (currentHour === wt.startHour &&
                currentMinute >= wt.startMinutes))) {
        return true
    }
    return false
}

function hasWTended(now: Date, wt: WorkTime) {
    const currentHour: number = now.getHours();
    const currentMinute: number = now.getMinutes();

    if (currentHour > wt.endHour ||
        (currentHour === wt.endHour && currentMinute >= wt.endMinutes)) {
        return true
    }
    return false
}


export default WorkTimeService
