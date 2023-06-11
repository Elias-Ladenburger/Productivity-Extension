function getRuleFromJSON(entry) {
  let myRule = new ProdRule(
    entry.source,
    entry.action,
    entry.condition,
    entry.delay
  );
  return myRule;
}

class ProdRule {
  constructor(
    badWebsite,
    action = { type: ActionType.FRAME, targetValue: "red" },
    condition = ActionCondition.ALWAYS,
    delay = 0
  ) {
    this.source = badWebsite;
    this.delay = delay;
    this.condition = condition;
    if (action instanceof Action) {
      this.action = action;
    } else {
      let tmpType = action.type;
      let tmpVal = action.targetValue;
      this.action = new Action(tmpType, tmpVal);
    }
  }

  applyRule() {
    window.addEventListener("load", function () {
      setTimeout(function () {
        this.action.performAction();
      }, this.delay);
    });
  }

  toString() {
    const delayStr = ActionDelay[this.delay] || `after ${this.delay} miliseconds`;
    return `${this.condition} when I visit ${
      this.source
    } then ${delayStr} ${this.action.toString()}`;
  }
}

class Action {
  constructor(targetValue = "") {
    this.targetValue = targetValue;
  }

  performAction() {
    return;
  }
  toString() {
    return `apply a rule!`;
  }
}

class FrameAction extends Action {
  constructor(frameColor) {
    super(frameColor);
  }

  performAction() {
    alert(
      `This site is unproductive! Framing this site in ${this.targetValue}.`
    );
    document.body.style.border = `10px solid ${this.targetValue}`;
  }

  toString() {
    return `frame the site in ${this.targetValue}`;
  }
}

class PopupAction extends Action {
  constructor(popupText) {
    super(popupText);
  }
  performAction() {
    if (!this.targetValue) {
      this.targetValue = "Do you truly want to spend more time on this site?";
    }
    alert(this.targetValue);
  }
  toString() {
    return `show a popup that says: \n '${this.targetValue}'`;
  }
}

class RedirectAction extends Action {
  constructor(redirectTo) {
    super(redirectTo);
  }
  performAction() {
    alert(`This site is unproductive! Redirecting to ${this.targetValue}.`);
    let targetValue = this.targetValue.startsWith("http")
      ? this.targetValue
      : `https://${this.targetValue}`;
    window.location.href = targetValue;
  }
  toString() {
    return `redirect to ${this.targetValue}`;
  }
}

const ActionType = {
  REDIRECT: "redirect to",
  POPUP: "show a popup",
  FRAME: "frame this site",
  LOG: "simply log this visit (WIP)",
};

const ActionCondition = {
  ALWAYS: "Always",
  WORK: "While working",
  GOAL: "While my daily goal is not reached",
};

const ActionDelay = {
  0: "immediately",
  30000: "after 30 seconds",
  300000: "after 5 minutes",
  1200000: "after 20 minutes",
};
