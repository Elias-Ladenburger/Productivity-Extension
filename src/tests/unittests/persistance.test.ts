import PersistanceHandler from "../../persistance/persistance"

describe("Persistance", function () {
    let persHandler = new PersistanceHandler("test")

    test("should write", async function () {
        const testColl = { 1: "some test" }

        await persHandler.setAll(testColl)
        let resultsColl = await persHandler.getAll()
        console.log(resultsColl)
        expect(resultsColl[1]).toEqual("some test")
    })
})