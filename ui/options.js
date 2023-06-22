
// Time Picker
const timePicker = document.getElementById("timepicker_from");

// Set the current time as the default value
const currentTime = new Date().toLocaleTimeString(navigator.language, {
  hour: "2-digit",
  minute: "2-digit",
});
timePicker.value = currentTime;


const fp_from = flatpickr("#timepicker_to", {enable_time: true, noCalendar: true, dateFormat: "H:i", time_24hr: true});
const fp_to = flatpickr("#timepicker_from", {
  enable_time: true,
  noCalendar: true,
  dateFormat: "H:i",
  time_24hr: true,
});
