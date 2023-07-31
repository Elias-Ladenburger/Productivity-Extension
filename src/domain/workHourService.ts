import PersistanceHandler from "../persistance/persistance"
import WorkTimeRepository from "./workTimeRepo"
import WorkTime from "./workinghours"

export const WorkTimeService = {

    isWorkingTime: async (now: Date = new Date()) => {
        const working_hours = await WorkTimeRepository.getAll()
        const weekday = now.getDay()

        console.log("now is: ")
        console.log(`${now.getDay()} ${now.getHours()}:${now.getMinutes()}`)

        if (weekday in working_hours) {
            for (let i = 0; i < working_hours[weekday].length; i++) {
                let wt: WorkTime = working_hours[weekday][i]

                console.log("compare against: ")
                console.log(`${wt.weekday} ${wt.startHour}:${wt.startMinutes} to ${wt.endHour}:${wt.endMinutes}`)

                if (weekday == wt.weekday) {
                    const currentHour: number = now.getHours();
                    const currentMinute: number = now.getMinutes();

                    console.log("is correct weekday!")
                    console.log(`${currentHour} > ${wt.startHour}: ${currentHour > wt.startHour}`)
                    console.log(`${wt.startMinutes} < ${currentMinute}: ${wt.startMinutes < currentMinute}`)

                    if (
                        (currentHour > wt.startHour ||
                            (currentHour === wt.startHour &&
                                currentMinute >= wt.startMinutes))) {

                        console.log("Work time has begun!")

                        if (currentHour < wt.endHour ||
                            (currentHour === wt.endHour && currentMinute <= wt.endMinutes)) {
                            console.log("Work time has not ended!")

                            return true

                        }
                    }
                }

                return false;
            }

        }
    },

    currentWorkingTime: async (now: Date = new Date()) => {
        const working_hours = await WorkTimeRepository.getAll()


    }
}

export default WorkTimeService