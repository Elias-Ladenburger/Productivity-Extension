import PersistanceHandler from "../persistance/persistance"
import WorkTimeRepository from "./workTimeRepo"
import WorkTime from "./workinghours"

export const WorkTimeService = {

    isWorkingTime: async () => {
        let now = new Date()
        const working_hours = await WorkTimeRepository.getAll()
        const weekday = now.getDay()

        if (weekday in working_hours) {
            for (let i = 0; i < working_hours[weekday].length; i++) {
                let wt = working_hours[weekday][i]
                if (weekday == wt.weekday) {
                    const currentHour = now.getHours();
                    const currentMinute = now.getMinutes();

                    if (
                        (currentHour > wt.startHour ||
                            (currentHour === wt.startHour &&
                                currentMinute >= wt.startMinutes)) &&
                        (currentHour < wt.endHour ||
                            (currentHour === wt.endHour && currentMinute <= wt.endMinutes))
                    ) {
                        return true;
                    }
                }

                return false;
            }

        }
    },

}

export default WorkTimeService