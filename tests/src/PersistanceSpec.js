function createMockRule() {
  const badWebsite = "unproductiveURL.com";
  const action = ActionFactory.createAction(
    ActionType.REDIRECT,
    "https://productiveHabits.com"
  );
  const condition = ActionCondition.ALWAYS;
  const delay = 0;
  const rule = new ProdRule(badWebsite, action, condition, delay);
  return rule;
}

describe("The Persistance Handler", function () {
  beforeEach(function () {
    chrome.storage.local.clear();
    console.log("Running test...");
    rule = createMockRule();
    badWebsite = "unproductiveURL.com";
  });

  it("should allow adding a new rule", async function () {
    const newRule = await PersistanceHandler.addRule(rule);
    const persistedRules = await chrome.storage.local.get(ruleDBName);
    console.log(persistedRules);
    expect(persistedRules[ruleDBName][badWebsite].length).toBe(1);
  });

  it("should allow editing an existing rule", async function () {
    const newRule = await PersistanceHandler.addRule(rule);

    const changedRule = new ProdRule(
      "changed Site",
      ActionFactory.createAction("frame", "blue")
    );
    await PersistanceHandler.updateRule(badWebsite, 0, changedRule);

    const persistedRules = await chrome.storage.local.get(ruleDBName);

    console.log(persistedRules);
    expect(persistedRules[ruleDBName]["changed Site"][0].source).toBe(
      "changed Site"
    );
  });

  it("should allow deleting an existing rule", async function () {
    const newRule = await PersistanceHandler.addRule(rule);
    await PersistanceHandler.deleteRule(badWebsite, 0)
    const persistedRules = await chrome.storage.local.get(ruleDBName);
    console.log(persistedRules);
    expect(typeof persistedRules[ruleDBName][badWebsite]).toBe("undefined");
  });
});

/*
describe("The Chrome persistance API", function () {
  it("should allow direct manipulation", async function () {
    chrome.storage.local.clear();
    console.log("Running test...");
    rule = createMockRule();
    badWebsite = "unproductiveURL.com";

    chrome.storage.local.set({
      productivityRules: { "unproductiveURL.com": [rule] },
    });
    const persistedRules = await chrome.storage.local.get(ruleDBName);
    console.log(persistedRules[ruleDBName]);
    expect(persistedRules[ruleDBName][badWebsite].length).toBe(1);
  });
});
*/
