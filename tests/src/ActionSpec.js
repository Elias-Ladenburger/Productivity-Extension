describe('A Production Rule', function() {
  beforeEach(function() {
    badWebsite = "*.unproductive.com"
    condition = ActionCondition.ALWAYS
    delay = 0
  });

  describe('with Redirect Actions', function () {
    it('should be creatable with condition "always" and no delay', function () {
      let action = ActionFactory.createAction(ActionType.REDIRECT, "https://productiveHabits.com")
      let rule =  new ProdRule(badWebsite, action, condition, delay)
      expect(rule.delay).toEqual(0);
      expect(rule.condition).toEqual(ActionCondition.ALWAYS);
      expect(rule.action).toEqual(action);
      console.log(`created redirect rule: ${rule.toString()}`)
    });
    it('should be creatable with condition "work" and no delay', function () {
      let action = ActionFactory.createAction(ActionType.REDIRECT, "https://productiveHabits.com")
      condition = ActionCondition.WORK
      let rule =  new ProdRule(badWebsite, action, condition, delay)
      expect(rule.delay).toEqual(0);
      expect(rule.condition).toEqual(ActionCondition.WORK);
      expect(rule.action).toEqual(action);
      console.log(`created redirect rule: ${rule.toString()}`)
    });
    it('should be creatable with condition "goals" and no delay', function () {
      let action = ActionFactory.createAction(ActionType.REDIRECT, "https://productiveHabits.com")
      let condition = ActionCondition.GOAL
      let delay = 0
      let rule =  new ProdRule(badWebsite, action, condition, delay)
      expect(rule.delay).toEqual(0);
      expect(rule.condition).toEqual(ActionCondition.GOAL);
      expect(rule.action).toEqual(action);
      console.log(`created redirect rule: ${rule.toString()}`)
    });
  })
  
  describe('with Framing Actions', function () {
    it('should be creatable with condition "Always" and no delay', function () {
      let action = ActionFactory.createAction(ActionType.FRAME, "red")
      let condition = ActionCondition.ALWAYS
      let delay = 0
      let rule = new ProdRule(badWebsite, action, condition, delay)
      expect(rule.delay).toEqual(delay);
      expect(rule.condition).toEqual(condition);
      expect(rule.action).toEqual(action);
      console.log(`created framing rule: ${rule.toString()}`)
    });
        it('should be creatable with condition "Work" and no delay', function () {
      let action = ActionFactory.createAction(ActionType.FRAME, "red")
      let condition = ActionCondition.WORK
      let delay = 0
      let rule = new ProdRule(badWebsite, action, condition, delay)
      expect(rule.delay).toEqual(delay);
      expect(rule.condition).toEqual(condition);
      expect(rule.action).toEqual(action);
      console.log(`created framing rule: ${rule.toString()}`)
        });
        it('should be creatable with condition "Goal" and no delay', function () {
      let action = ActionFactory.createAction(ActionType.FRAME, "red")
      let condition = ActionCondition.GOAL
      let delay = 0
      let rule = new ProdRule(badWebsite, action, condition, delay)
      expect(rule.delay).toEqual(delay);
      expect(rule.condition).toEqual(condition);
      expect(rule.action).toEqual(action);
      console.log(`created framing rule: ${rule.toString()}`)
        });
            it('should be creatable with condition "ALWAYS" and 30s delay', function () {
      let action = ActionFactory.createAction(ActionType.FRAME, "red")
      let condition = ActionCondition.GOAL
      let delay = ActionDelay.HALFMINUTE
      let rule = new ProdRule(badWebsite, action, condition, delay)
      expect(rule.delay).toEqual(delay);
      expect(rule.condition).toEqual(condition);
      expect(rule.action).toEqual(action);
      console.log(`created framing rule: ${rule.toString()}`)
  });
  })
  describe('with Popup Actions', function () {
it('should be creatable', function () {
      let popupText = "Do you really want to spend more time on this site?"
      let action = ActionFactory.createAction(ActionType.POPUP, popupText)
      let condition = ActionCondition.ALWAYS
      let delay = 0
      let rule =  new ProdRule(badWebsite, action, condition, delay)
      expect(rule.delay).toEqual(delay);
      expect(rule.condition).toEqual(condition);
      expect(rule.action).toEqual(action);
      console.log(`created popup rule: ${rule.toString()}`)
});
    it('should be creatable with condition "Work" and no delay', function () {
      let popupText = "Do you really want to spend more time on this site?"
      let action = ActionFactory.createAction(ActionType.POPUP, popupText)
      let condition = ActionCondition.WORK
      let delay = 0
      let rule =  new ProdRule(badWebsite, action, condition, delay)
      expect(rule.delay).toEqual(delay);
      expect(rule.condition).toEqual(condition);
      expect(rule.action).toEqual(action);
      console.log(`created popup rule: ${rule.toString()}`)
    });
    it('should be creatable with condition "Goal" and no delay', function () {
      let popupText = "Do you really want to spend more time on this site?"
      let action = ActionFactory.createAction(ActionType.POPUP, popupText)
      let condition = ActionCondition.GOAL
      let delay = 0
      let rule =  new ProdRule(badWebsite, action, condition, delay)
      expect(rule.delay).toEqual(delay);
      expect(rule.condition).toEqual(condition);
      expect(rule.action).toEqual(action);
      console.log(`created popup rule: ${rule.toString()}`)
    });
        it('should be creatable with condition "Always" and 30s delay', function () {
      let popupText = "Do you really want to spend more time on this site?"
      let action = ActionFactory.createAction(ActionType.POPUP, popupText)
      let condition = ActionCondition.ALWAYS
      let delay = ActionDelay.HALFMINUTE
      let rule = new ProdRule(badWebsite, action, condition, delay)
      expect(rule.delay).toEqual(delay);
      expect(rule.condition).toEqual(condition);
      expect(rule.action).toEqual(action);
      console.log(`created framing rule: ${rule.toString()}`)
  });
  });
  
});

describe('Action Factory', function () {
  it('should create Popup Actions', function () {
    let action = ActionFactory.createAction(ActionType.POPUP, "some text!")
    expect(action).toBeInstanceOf(PopupAction)
    console.log(action.toString())
  })
  it('should create Redirect Actions', function () {
    let action = ActionFactory.createAction(ActionType.REDIRECT, "some text!")
    expect(action).toBeInstanceOf(RedirectAction)
    console.log(action.toString())
  })
  it('should create Frame Actions', function () {
    let action = ActionFactory.createAction(ActionType.FRAME, "red")
    expect(action).toBeInstanceOf(FrameAction)
    console.log(action.toString())
  })
})
