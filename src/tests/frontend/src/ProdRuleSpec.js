describe("A Production Rule", function () {
  beforeEach(function () {
    badWebsite = "*.unproductive.com";
    condition = ActionCondition.ALWAYS;
    delay = 0;
  });

  describe("with Redirect Actions", function () {
    it("should be creatable", function () {
      let action = ActionFactory.createAction(
        ActionType.REDIRECT,
        "https://productiveHabits.com"
      );
      let rule = new ProdRule(badWebsite, action, condition, delay);
      expect(rule.delay).toEqual(0);
      expect(rule.condition).toEqual(ActionCondition.ALWAYS);
      expect(rule.action).toEqual(action);
    });
    it('should be creatable with condition "goals" and no delay', function () {
      let action = ActionFactory.createAction(
        ActionType.REDIRECT,
        "https://productiveHabits.com"
      );
      let condition = ActionCondition.GOAL;
      let delay = 0;
      let rule = new ProdRule(badWebsite, action, condition, delay);
      expect(rule.delay).toEqual(0);
      expect(rule.condition).toEqual(ActionCondition.GOAL);
      expect(rule.action).toEqual(action);
    });
  });

  describe("with Framing Actions", function () {
    it('should be creatable with condition "Always" and no delay', function () {
      let action = ActionFactory.createAction(ActionType.FRAME, "red");
      let condition = ActionCondition.ALWAYS;
      let delay = 0;
      let rule = new ProdRule(badWebsite, action, condition, delay);
      expect(rule.delay).toEqual(delay);
      expect(rule.condition).toEqual(condition);
      expect(rule.action).toEqual(action);
    });
    it('should be creatable with condition "Work" and no delay', function () {
      let action = ActionFactory.createAction(ActionType.FRAME, "red");
      let condition = ActionCondition.WORK;
      let delay = 0;
      let rule = new ProdRule(badWebsite, action, condition, delay);
      expect(rule.delay).toEqual(delay);
      expect(rule.condition).toEqual(condition);
      expect(rule.action).toEqual(action);
    });
    it('should be creatable with condition "Goal" and no delay', function () {
      let action = ActionFactory.createAction(ActionType.FRAME, "red");
      let condition = ActionCondition.GOAL;
      let delay = 0;
      let rule = new ProdRule(badWebsite, action, condition, delay);
      expect(rule.delay).toEqual(delay);
      expect(rule.condition).toEqual(condition);
      expect(rule.action).toEqual(action);
    });
    it('should be creatable with condition "ALWAYS" and 30s delay', function () {
      let action = ActionFactory.createAction(ActionType.FRAME, "red");
      let condition = ActionCondition.GOAL;
      let delay = ActionDelay.HALFMINUTE;
      let rule = new ProdRule(badWebsite, action, condition, delay);
      expect(rule.delay).toEqual(delay);
      expect(rule.condition).toEqual(condition);
      expect(rule.action).toEqual(action);
    });
  });
  describe("with Popup Actions", function () {
    it("should be creatable", function () {
      let popupText = "Do you really want to spend more time on this site?";
      let action = ActionFactory.createAction(ActionType.POPUP, popupText);
      let condition = ActionCondition.ALWAYS;
      let delay = 0;
      let rule = new ProdRule(badWebsite, action, condition, delay);
      expect(rule.delay).toEqual(delay);
      expect(rule.condition).toEqual(condition);
      expect(rule.action).toEqual(action);
    });
    it('should be creatable with condition "Work" and no delay', function () {
      let popupText = "Do you really want to spend more time on this site?";
      let action = ActionFactory.createAction(ActionType.POPUP, popupText);
      let condition = ActionCondition.WORK;
      let delay = 0;
      let rule = new ProdRule(badWebsite, action, condition, delay);
      expect(rule.delay).toEqual(delay);
      expect(rule.condition).toEqual(condition);
      expect(rule.action).toEqual(action);
    });
    it("should be applicable on a website after 5 seconds", function () {
      let action = ActionFactory.createAction(
        ActionType.POPUP,
        "Are you sure you want to stay on this site?"
      );
      condition = ActionCondition.ALWAYS;
      delay = 5000;
      let rule = new ProdRule(badWebsite, action, condition, delay);
      console.log(rule.toString());
      setTimeout(function () {
        rule.action.performAction();
      }, rule.delay);
    });

    it('should be creatable with condition "Goal" and no delay', function () {
      let popupText = "Do you really want to spend more time on this site?";
      let action = ActionFactory.createAction(ActionType.POPUP, popupText);
      let condition = ActionCondition.GOAL;
      let delay = 0;
      let rule = new ProdRule(badWebsite, action, condition, delay);
      expect(rule.delay).toEqual(delay);
      expect(rule.condition).toEqual(condition);
      expect(rule.action).toEqual(action);
    });
    it('should be creatable with condition "Always" and 30s delay', function () {
      let popupText = "Do you really want to spend more time on this site?";
      let action = ActionFactory.createAction(ActionType.POPUP, popupText);
      let condition = ActionCondition.ALWAYS;
      let delay = ActionDelay.HALFMINUTE;
      let rule = new ProdRule(badWebsite, action, condition, delay);
      expect(rule.delay).toEqual(delay);
      expect(rule.condition).toEqual(condition);
      expect(rule.action).toEqual(action);
    });
  });
});
