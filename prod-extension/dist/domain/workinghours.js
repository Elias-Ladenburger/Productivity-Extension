"use strict";
var WorkTime = /** @class */ (function () {
    function WorkTime(starttime, endtime, weekday, is_active) {
        if (is_active === void 0) { is_active = true; }
        this.startTime = starttime;
        this.endTime = endtime;
        this.weekday = weekday;
        this.is_active = is_active;
    }
    WorkTime.prototype.toggleActive = function () {
        this.is_active = this.is_active == false;
    };
    WorkTime.prototype._parseHour = function (timeValue) {
        var normalizedTime = new Date(timeValue);
        var hours = normalizedTime.getHours();
        return hours;
    };
    WorkTime.prototype._parseMinutes = function (timeValue) {
        var normalizedTime = new Date(timeValue);
        var minutes = normalizedTime.getMinutes();
        return minutes;
    };
    Object.defineProperty(WorkTime.prototype, "startTime", {
        get: function () {
            var startDate = new Date();
            startDate.setHours(this.startHour);
            startDate.setMinutes(this.startMinutes);
            return startDate;
        },
        set: function (timeValue) {
            this.startHour = this._parseHour(timeValue);
            this.startMinutes = this._parseMinutes(timeValue);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WorkTime.prototype, "endTime", {
        get: function () {
            var endDate = new Date();
            endDate.setHours(this.endHour);
            endDate.setMinutes(this.endMinutes);
            return endDate;
        },
        set: function (timeValue) {
            this.endHour = this._parseHour(timeValue);
            this.endMinutes = this._parseMinutes(timeValue);
        },
        enumerable: false,
        configurable: true
    });
    WorkTime.prototype.isWorkTime = function (currentTime) {
        if (currentTime === void 0) { currentTime = new Date(); }
        currentTime = new Date(currentTime);
        if (currentTime.getDay() == this.weekday) {
            var currentHour = currentTime.getHours();
            var currentMinute = currentTime.getMinutes();
            if ((currentHour > this.startHour ||
                (currentHour === this.startHour &&
                    currentMinute >= this.startMinutes)) &&
                (currentHour < this.endHour ||
                    (currentHour === this.endHour && currentMinute <= this.endMinutes))) {
                return true;
            }
        }
        return false;
    };
    return WorkTime;
}());
//# sourceMappingURL=workinghours.js.map