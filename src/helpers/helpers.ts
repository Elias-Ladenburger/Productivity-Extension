

export function msToTime(miliseconds: number) {
  if (miliseconds == 0) return "immediately";
  let seconds = (miliseconds / 1000);
  let minutes = (miliseconds / (1000 * 60));
  let hours = (miliseconds / (1000 * 60 * 60));
  let days = (miliseconds / (1000 * 60 * 60 * 24));
  if (seconds < 60) return "after " + seconds + " Sec";
  else if (minutes < 60) return "after " + minutes + " Min";
  else if (hours < 24) return "after " + hours + " Hrs";
  else return "after " + days + " Days";
}

export const IDHandler = {
  getRowID: (collectionID: string | number, ruleIndex: number) => {
    const rowID = `${collectionID}-${ruleIndex}`;
    return rowID;
  },

  deconstructID: (entryID: string) => {
    const id_array = entryID.split("-");
    return {
      collectionID: id_array[0],
      index: id_array[1],
      whole_array: id_array
    };
  },
  STANDARD_ID: "NEW"
}

export function getStringsForEnums(): { [key: string]: { [key: string]: string } } {
  return {
    rulecondition: {
      ALWAYS: "Always",
      WORK: "While working"
    },

    actiontype: {
      REDIRECT: "redirect me to",
      POPUP: "show a popup",
      FRAME: "color the frame red",
    },

    actiondelay: {
      300000: "after 5 minutes",
      30000: "after 30 seconds",
      0: "immediately",
      1200000: "after 20 minutes",
    },
  };
}

export const TimeHandler = {
  timeToStr: (time: number) => {
    return time < 10 ? "0" + time : time
  },
  WEEKDAYS: (wd: number): string => {
    const weekdays: { [key: number]: string } = {
      1: "Monday",
      2: "Tuesday",
      3: "Wednesday",
      4: "Thursday",
      5: "Friday",
      6: "Saturday",
      0: "Sunday"
    }
    return weekdays[wd]
  },

  isEarlierByString(timeA: string, timeB: String, isSameAllowed = true) {
    const hoursA = Number(timeA.split(":")[0])
    const minsA = Number(timeA.split(":")[1])
    const hoursB = Number(timeB.split(":")[0])
    const minsB = Number(timeB.split(":")[1])

    return TimeHandler.isEarlierByHoursMinutes(hoursA, minsA, hoursB, minsB, isSameAllowed)

  },

  isEarlierByDate(timeA: Date, timeB: Date, isSameAllowed = true) {
    const hoursA = timeA.getHours()
    const minsA = timeA.getMinutes()

    const hoursB = timeB.getHours()
    const minsB = timeB.getMinutes()

    return TimeHandler.isEarlierByHoursMinutes(hoursA, minsA, hoursB, minsB, isSameAllowed)
  },

  isEarlierByHoursMinutes(hoursA: number, minsA: number, hoursB: number, minsB: number, isSameAllowed = true) {
    if (hoursA > hoursB) {
      return false
    }
    if (hoursA == hoursB) {
      if (minsA > minsB) {
        return false
      }
      if (minsA == minsB) {
        return isSameAllowed
      }
    }

    return true
  }

}
