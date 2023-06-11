describe('A Production Rule', function() {
  beforeEach(function() {
    badWebsite = "*.unproductive.com"
    condition = ActionCondition.ALWAYS
    delay = 0
  });

  describe('with Redirect Actions', function () {
    it('should be creatable with condition "always" and delay "0"', function () {
      let action = new RedirectAction("https://productiveHabits.com")
      let rule =  new ProdRule(badWebsite, action, condition, delay)
      expect(rule.delay).toEqual(0);
      expect(rule.condition).toEqual(ActionCondition.ALWAYS);
      expect(rule.action).toEqual(action);
      console.log(`created redirect rule: ${rule.toString()}`)
    });
    it('should be creatable with condition "work" and delay "0"', function () {
      let action = new RedirectAction("https://productiveHabits.com")
      condition = ActionCondition.WORK
      let rule =  new ProdRule(badWebsite, action, condition, delay)
      expect(rule.delay).toEqual(0);
      expect(rule.condition).toEqual(ActionCondition.WORK);
      expect(rule.action).toEqual(action);
      console.log(`created redirect rule: ${rule.toString()}`)
    });
    it('should be creatable with condition "goals" and delay "0"', function () {
      let action = new RedirectAction("https://productiveHabits.com")
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
    it('should be creatable with condition "Always" and delay "0"', function () {
      let action = new FrameAction("red")
      let condition = ActionCondition.ALWAYS
      let delay = 0
      let rule = new ProdRule(badWebsite, action, condition, delay)
      expect(rule.delay).toEqual(delay);
      expect(rule.condition).toEqual(condition);
      expect(rule.action).toEqual(action);
      console.log(`created framing rule: ${rule.toString()}`)
    });
        it('should be creatable with condition "Work" and delay "0"', function () {
      let action = new FrameAction("red")
      let condition = ActionCondition.WORK
      let delay = 0
      let rule = new ProdRule(badWebsite, action, condition, delay)
      expect(rule.delay).toEqual(delay);
      expect(rule.condition).toEqual(condition);
      expect(rule.action).toEqual(action);
      console.log(`created framing rule: ${rule.toString()}`)
        });
        it('should be creatable with condition "Goal" and delay "0"', function () {
      let action = new FrameAction("red")
      let condition = ActionCondition.GOAL
      let delay = 0
      let rule = new ProdRule(badWebsite, action, condition, delay)
      expect(rule.delay).toEqual(delay);
      expect(rule.condition).toEqual(condition);
      expect(rule.action).toEqual(action);
      console.log(`created framing rule: ${rule.toString()}`)
        });
            it('should be creatable with condition "ALWAYS" and delay "30000"', function () {
      let action = new FrameAction("red")
      let condition = ActionCondition.GOAL
      let delay = ActionDelay[30000]
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
      let action = new PopupAction(popupText)
      let condition = ActionCondition.ALWAYS
      let delay = 0
      let rule =  new ProdRule(badWebsite, action, condition, delay)
      expect(rule.delay).toEqual(delay);
      expect(rule.condition).toEqual(condition);
      expect(rule.action).toEqual(action);
      console.log(`created popup rule: ${rule.toString()}`)
});
    it('should be creatable with condition "Work" and delay "0"', function () {
      let popupText = "Do you really want to spend more time on this site?"
      let action = new PopupAction(popupText)
      let condition = ActionCondition.WORK
      let delay = 0
      let rule =  new ProdRule(badWebsite, action, condition, delay)
      expect(rule.delay).toEqual(delay);
      expect(rule.condition).toEqual(condition);
      expect(rule.action).toEqual(action);
      console.log(`created popup rule: ${rule.toString()}`)
    });
    it('should be creatable with condition "Goal" and delay "0"', function () {
      let popupText = "Do you really want to spend more time on this site?"
      let action = new PopupAction(popupText)
      let condition = ActionCondition.GOAL
      let delay = 0
      let rule =  new ProdRule(badWebsite, action, condition, delay)
      expect(rule.delay).toEqual(delay);
      expect(rule.condition).toEqual(condition);
      expect(rule.action).toEqual(action);
      console.log(`created popup rule: ${rule.toString()}`)
    });
        it('should be creatable with condition "Always" and delay "30000"', function () {
      let popupText = "Do you really want to spend more time on this site?"
      let action = new PopupAction(popupText)
      let condition = ActionCondition.ALWAYS
      let delay = ActionDelay[30000]
      let rule = new ProdRule(badWebsite, action, condition, delay)
      expect(rule.delay).toEqual(delay);
      expect(rule.condition).toEqual(condition);
      expect(rule.action).toEqual(action);
      console.log(`created framing rule: ${rule.toString()}`)
  });
  });
  
  
  
});
