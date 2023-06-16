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

describe("The PersistanceHandler", function () {
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
  const persistedRules = await chrome.storage.local.get(ruleDBName);
  console.log(persistedRules);
  expect(persistedRules[ruleDBName][badWebsite].length).toBe(1);
});

it("should allow deleting an existing rule", async function () {
  const newRule = await PersistanceHandler.addRule(rule);
  const persistedRules = await chrome.storage.local.get(ruleDBName);
  console.log(persistedRules);
  expect(persistedRules[ruleDBName][badWebsite].length).toBe(1);
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