prepareForm();

function prepareForm() {
  const multipleChoiceFields = [
    { name: "actioncondition", myDict: ActionCondition },
    { name: "actiontype", myDict: ActionType },
    {
      name: "actiondelay",
      myDict: {
        0: "immediately",
        30000: "after 30 seconds",
        MINUTE: "after one minute",
        HALFHOUR: "every 30 minutes",
        HOUR: "every hour",
      },
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
