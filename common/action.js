function getRuleFromJSON(entry) {
  let myRule = new ProdRule(
    entry.source,
    entry.action,
    entry.condition,
    entry.frequency
  );
  return myRule;
}

class ProdRule {
  constructor(
    badWebsite,
    action = { type: ActionType.FRAME, targetValue: "red" },
    condition = ActionCondition.ALWAYS,
    frequency = ActionFrequency.MINUTE
  ) {
    this.source = badWebsite;
    this.frequency = frequency;
    this.condition = condition;
    if (action instanceof Action) {
      this.action = action;
    } else {
      let tmpType = action.type;
      let tmpVal = action.targetValue;
      this.action = new Action(tmpType, tmpVal);
    }
  }

  enhanceProductivity() {
    window.addEventListener("load", function () {
      setTimeout(function () {
        this.action.performAction();
      }, this.frequency.duration);
    });
  }

  toString() {
    return `${this.condition} when I visit ${this.source} then ${
      this.frequency.name
    } ${this.action.toString()}`;
  }
}

class Action {
  constructor(type = ActionType.FRAME, targetValue = "") {
    this.type = type;
    this.targetValue = targetValue;
  }

  performAction() {
    switch (this.type) {
      case ActionType.FRAME:
        alert(
          `This site is unproductive! Framing this site in ${this.targetValue}.`
        );
        document.body.style.border = `5px solid ${this.targetValue}`;
        break;
      case ActionType.REDIRECT:
        alert(`This site is unproductive! Redirecting to ${this.targetValue}.`);
        let targetValue = this.targetValue.startsWith("http")
          ? this.targetValue
          : `https://${this.targetValue}`;
        window.location.href = targetValue;
        break;
      case ActionType.POPUP:
        alert("Do you truly want to spend more time on this site?");
        break;
      case ActionType.LOG:
        console.log(
          "not logging any productivity data at the moment. This feature is WIP."
        );
        break;
      default:
        console.log(
          "Unknown or invalid action type. Will not perform any productivity enahancing action."
        );
    }
  }

  toString() {
    return `${this.type} ${this.targetValue}`;
  }
}

const ActionType = {
  REDIRECT: "redirect to",
  POPUP: "show a popup",
  FRAME: "frame this site",
  LOG: "simply log this visit (WIP)",
};

const ActionFrequency = {
  IMMEDIATE: { name: "immediately", duration: 0 },
  SECONDS: { name: "after 5 seconds", duration: 5000 },
  MINUTE: { name: "after one minute", duration: 6000 },
  HALFHOUR: { name: "every 30 minutes", duration: 180000 },
  HOUR: { name: "every hour", duration: 360000 },
};

const ActionCondition = {
  ALWAYS: "Always",
  WORK: "While working",
  GOAL: "While my daily goal is not reached",
};
