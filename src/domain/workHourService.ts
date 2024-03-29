import { TimeHandler } from "../helpers/helpers"
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

                const hasBegun = TimeHandler.isEarlierByHoursMinutes(wt.startHour, wt.endMinutes, now.getHours(), now.getMinutes())
                const hasNotEnded = TimeHandler.isEarlierByHoursMinutes(now.getHours(), now.getMinutes(), wt.endHour, wt.endMinutes)

                if (hasBegun && hasNotEnded) {
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
                const hasBegun = TimeHandler.isEarlierByHoursMinutes(wt.startHour, wt.endMinutes, now.getHours(), now.getMinutes())
                const hasNotEnded = TimeHandler.isEarlierByHoursMinutes(now.getHours(), now.getMinutes(), wt.endHour, wt.endMinutes)

                if (!hasBegun) {
                    if (hasNotEnded) {
                        return wt
                    }
                }
            }
        }
        return null
    }
}


export default WorkTimeService
