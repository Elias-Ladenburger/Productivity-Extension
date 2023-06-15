describe("The persistance API", function () {
  beforeEach(function () {
    chrome.storage.local.clear();
    console.log("Running test...");
  });

  it("should allow adding a new rule", function () {
    const badWebsite = "unproductiveURL.com";
    const action = ActionFactory.createAction(
      ActionType.REDIRECT,
      "https://productiveHabits.com"
    );
    const condition = ActionCondition.WORK;
    const delay = 0;
    const rule = new ProdRule(badWebsite, action, condition, delay);
    PersistanceHandler.addRule(rule);

    const persistedRules = chrome.storage.local
      .get("productivityRules")
      .then((result) => {
        console.log(result);
        return result;
      });
    expect(persistedRules).not.toBe(undefined);
    expect(persistedRules).not.toBe({});
    expect(persistedRules).not.toBe([]);
    expect(persistedRules.length).not.toBe(0);
  });
});
