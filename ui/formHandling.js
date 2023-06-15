prepareForm();

function prepareForm() {
  const condition = {
    ALWAYS: "always",
    WORK: "during my work times",
    GOALS: "while my goals are not reached (WIP)"
  }

  const types = {
    REDIRECT: "redirect me to",
    POPUP: "show a popup with the following text",
    FRAME: "frame the unproductive page in the following color",
    LOG: "log my visit only (WIP)"
  }

  const delays = {
    IMMEDIATE: "immediately",
    HALFMINUTE: "30 seconds",
    MINUTES: "5 minutes",
    HALFHOUR: "20 minutes"
    }


  const multipleChoiceFields = [
    { name: "actioncondition", myDict: condition },
    { name: "actiontype", myDict: types },
    {
      name: "actiondelay",
      myDict: delays,
    },
  ];
  let selectElement;
  let myDict;
  for (let elemID in multipleChoiceFields) {
    selectElement = document.getElementById(multipleChoiceFields[elemID].name);
    myDict = multipleChoiceFields[elemID].myDict;
    for (let key in multipleChoiceFields[elemID].myDict) {
      let optionElement = document.createElement("option");
      optionElement.value = key;
      optionElement.textContent = myDict[key];
      selectElement.appendChild(optionElement);
    }
  }
}
