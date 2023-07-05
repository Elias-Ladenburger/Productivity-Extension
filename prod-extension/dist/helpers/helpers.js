export function msToTime(miliseconds) {
    if (miliseconds == 0)
        return "immediately";
    var seconds = (miliseconds / 1000);
    var minutes = (miliseconds / (1000 * 60));
    var hours = (miliseconds / (1000 * 60 * 60));
    var days = (miliseconds / (1000 * 60 * 60 * 24));
    if (seconds < 60)
        return "after " + seconds + " Sec";
    else if (minutes < 60)
        return "after " + minutes + " Min";
    else if (hours < 24)
        return "after " + hours + " Hrs";
    else
        return "after " + days + " Days";
}
//# sourceMappingURL=helpers.js.map