class WorkTime {
  starttime: string
  endtime: string
  weekDay: number
  is_active = true

  constructor(
    starttime: string,
    endtime: string,
    week_day: number,
    is_active: boolean = true
  ) {
    this.starttime = this.#parseTime(starttime);
    this.endtime = this.#parseTime(endtime);
    this.weekDay = week_day;
    this.is_active = is_active
  }

  toggleActive () {
    this.is_active = (this.is_active == false)
  }

  #parseTime(timeValue: string){
    let normalizedTime = new Date(timeValue)
    let hours = normalizedTime.getHours()
    let mins = normalizedTime.getMinutes()
    return hours + ":" + mins

  }  
}