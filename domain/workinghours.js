class WorkTime {

  constructor(
    starttime,
    endtime,
    weekday,
    is_active = true
  ) {
    this.starttime = this.#parseTime(starttime);
    this.endtime = this.#parseTime(endtime);
    this.weekday = week_day;
    this.is_active = is_active
  }

  toggleActive () {
    this.is_active = (this.is_active == false)
  }

  #parseTime(timeValue){
    let normalizedTime = new Date(timeValue)
    let hours = normalizedTime.getHours()
    let mins = normalizedTime.getMinutes()
    return hours + ":" + mins

  }  
}