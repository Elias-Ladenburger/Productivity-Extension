class WorkTime {
  constructor(starttime, endtime, weekday, is_active = true) {
    this.startTime = starttime;
    this.endTime = endtime;
    this.weekday = weekday;
    this.is_active = is_active;
  }

  toggleActive() {
    this.is_active = this.is_active == false;
  }

  #parseHour(timeValue) {
    let normalizedTime = new Date(timeValue);
    let hours = normalizedTime.getHours();
    return hours;
  }

  #parseMinutes(timeValue) {
    let normalizedTime = new Date(timeValue);
    let minutes = normalizedTime.getMinutes();
    return minutes;
  }

  get startTime() {
    return this.startHour + ":" + this.startMinutes;
  }

  set startTime(timeValue) {
    this.startHour = this.#parseHour(timeValue);
    this.startMinutes = this.#parseMinutes(timeValue);
  }

  get endTime() {
    return this.endHour + ":" + this.endMinutes;
  }

  set endTime(timeValue) {
    this.endHour = this.#parseHour(timeValue);
    this.endMinutes = this.#parseMinutes(timeValue);
  }

  isWorkTime(currentTime = "") {
    if (currentTime == "") {
      currentTime = new Date();
    } else {
      currentTime = new Date(currentTime);
    }
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
