

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