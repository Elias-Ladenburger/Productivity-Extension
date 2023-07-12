import ProdRuleRepository from "../../domain/prodRuleRepo";
import prodRuleRepo from "../../domain/prodRuleRepo";
 
global.chrome.storage.local = {
        async set(items: { [key: string]: any; }) {},
        async get() {return Promise<{[key:string]: any}>},
        async clear(){},
        async remove(){},
        QUOTA_BYTES: 12,
        async setAccessLevel(){},
        async getBytesInUse() {return 11},

}

describe("ProdRuleRepo", function () {
    


  test("should retrieve all ProdRules", async function () {
    const allRules = await ProdRuleRepository.getAllRules()
    expect(allRules).toBe([]);
  });
});
