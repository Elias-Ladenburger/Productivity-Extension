

export function msToTime(miliseconds: number) {
  if (miliseconds == 0) return "immediately";
  let seconds = (miliseconds / 1000);
  let minutes = (miliseconds / (1000 * 60));
  let hours = (miliseconds / (1000 * 60 * 60));
  let days = (miliseconds / (1000 * 60 * 60 * 24));
  if (seconds < 60) return "after " + seconds + " Sec";
  else if (minutes < 60) return "after " +  minutes + " Min";
  else if (hours < 24) return "after " + hours + " Hrs";
  else return "after " + days + " Days";
}

export function getStringsForEnums(): {[key:string]: {[key:string] : string}} {
  return {
    rulecondition: {
      ALWAYS: "always",
      WORK: "during my work times",
      GOALS: "while my goals are not reached (WIP)",
    },

    actiontype: {
      REDIRECT: "redirect me to",
      POPUP: "show a popup with the following text",
      FRAME: "frame the unproductive page in the following color",
      LOG: "log my visit only (WIP)",
    },

    actiondelay: {
      0: "immediately",
      30000: "after 30 seconds",
      300000: "after 5 minutes",
      1200000: "after 20 minutes",
    },
  };
}

