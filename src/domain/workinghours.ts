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

  #parseHour(timeValue: Date): number {
    let normalizedTime = new Date(timeValue);
    let hours = normalizedTime.getHours();
    return hours;
  }

  #parseMinutes(timeValue: Date): number {
    let normalizedTime = new Date(timeValue);
    let minutes = normalizedTime.getMinutes();
    return minutes;
  }

  get startTime(): string {
    return this.startHour + ":" + this.startMinutes;
  }

  set startTime(timeValue: Date) {
    this.startHour = this.#parseHour(timeValue);
    this.startMinutes = this.#parseMinutes(timeValue);
  }

  get endTime(): string {
    return this.endHour + ":" + this.endMinutes;
  }

  set endTime(timeValue: Date) {
    this.endHour = this.#parseHour(timeValue);
    this.endMinutes = this.#parseMinutes(timeValue);
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
