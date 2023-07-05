class WorkTime {
  weekday: number
  is_active: boolean
  startHour: number;
  startMinutes: number;
  endHour: number;
  endMinutes: number;
  constructor(starttime: Date, endtime: Date, weekday: number, is_active = true) {
    this.startTime = starttime;
    this.endTime = endtime;
    this.weekday = weekday;
    this.is_active = is_active;
  }

  toggleActive() {
    this.is_active = this.is_active == false;
  }

  _parseHour(timeValue: Date): number {
    let normalizedTime = new Date(timeValue);
    let hours = normalizedTime.getHours();
    return hours;
  }

  _parseMinutes(timeValue: Date): number {
    let normalizedTime = new Date(timeValue);
    let minutes = normalizedTime.getMinutes();
    return minutes;
  }

  get startTime(): Date {
    let startDate = new Date()
    startDate.setHours(this.startHour)
    startDate.setMinutes(this.startMinutes) 
    return startDate
  }

  set startTime(timeValue: Date) {
    this.startHour = this._parseHour(timeValue);
    this.startMinutes = this._parseMinutes(timeValue);
  }

  get endTime(): Date {
    let endDate = new Date()
    endDate.setHours(this.endHour)
    endDate.setMinutes(this.endMinutes) 
    return endDate  }

  set endTime(timeValue: Date) {
    this.endHour = this._parseHour(timeValue);
    this.endMinutes = this._parseMinutes(timeValue);
  }

  isWorkTime(currentTime = new Date()) {
    currentTime = new Date(currentTime);
    if (currentTime.getDay() == this.weekday) {
      const currentHour = currentTime.getHours();
      const currentMinute = currentTime.getMinutes();

      if (
        (currentHour > this.startHour ||
          (currentHour === this.startHour &&
            currentMinute >= this.startMinutes)) &&
        (currentHour < this.endHour ||
          (currentHour === this.endHour && currentMinute <= this.endMinutes))
      ) {
        return true;
      }
    }

    return false;
  }
}
