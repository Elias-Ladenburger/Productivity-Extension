import { doc } from "prettier";

class Action {
  targetValue: string;
  type: ActionType = ActionType.LOG
  constructor(targetValue: string = "") {
    this.targetValue = targetValue;
  }

  performAction() {
    let prodID = "prodbooster-alert"
    let prodElem = document.getElementById(prodID)
    if (prodElem == null || typeof prodElem == "undefined") {
      let newNode = document.createElement("p")
      newNode.style.color = "red"
      newNode.style.fontSize = "36px"
      newNode.style.textAlign = "center"
      newNode.innerHTML = "This site is unproductive"
      newNode.id = "prodbooster-alert"
      document.body.insertBefore(newNode, document.body.firstChild)
    }
  }
}

class FrameAction extends Action {
  type: ActionType;
  constructor(frameColor: string = "") {
    super(frameColor);
    this.type = ActionType.FRAME;
  }

  performAction() {
    super.performAction()
    document.body.style.border = `20px solid red`;
  }

  toString() {
    return `frame the site in red`;
  }
}

class PopupAction extends FrameAction {
  type: ActionType;
  constructor(popupText: string = "") {
    super(popupText);
    this.type = ActionType.POPUP;
  }

  performAction() {
    super.performAction()
    if (!this.targetValue) {
      this.targetValue = "Do you truly want to spend more time on this site?";
    }
    alert(this.targetValue);
  }

  toString() {
    return `show a popup that says: \n 'Do you really want to spend more time on this site?'`;
  }
}

class RedirectAction extends Action {
  type: ActionType;
  constructor(redirectTo: string) {
    super(redirectTo);
    this.type = ActionType.REDIRECT;
  }
  performAction() {
    alert(`This site is unproductive! Redirecting to ${this.targetValue}.`);
    let targetValue = this.targetValue.startsWith("http")
      ? this.targetValue
      : `https://${this.targetValue}`;
    window.location.href = targetValue.toLowerCase();
  }
  toString() {
    return `redirect to ${this.targetValue}`;
  }
}

enum ActionType {
  REDIRECT = "REDIRECT",
  POPUP = "POPUP",
  FRAME = "FRAME",
  LOG = "LOG",
};

const ActionFactory = {
  createAction(type: string, targetValue: string): Action {
    switch (type.toUpperCase()) {
      case ActionType.FRAME:
        return new FrameAction();
      case ActionType.REDIRECT:
        return new RedirectAction(targetValue);
      case ActionType.POPUP:
        return new PopupAction(targetValue);
      default:
        throw "Unknown action type! Must be defined in the ActionType Enum.";
    }
  },
};

export { Action, ActionFactory, ActionType };
export default Action