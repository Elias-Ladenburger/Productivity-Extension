import { ActionCondition, ActionType } from "../common/action.js";

prepareForm();

function prepareForm() {
  const multipleChoiceFields = [
    { name: "actioncondition", myDict: ActionCondition },
    {
      name: "actiontype",
      myDict: ActionType,
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
