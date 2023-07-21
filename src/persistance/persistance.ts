

interface Collection {
    [key: string]: any[]
}
class PersistanceHandler {
    dbName: string

    constructor(dbName: string) {
        this.dbName = dbName
    }

    async getAll() {
        let storedValues = await chrome.storage.local.get(this.dbName);
        let resultList: { [key: string]: any } = typeof storedValues === "undefined" ? {} : storedValues;
        if (this.dbName in storedValues) {
            return storedValues[this.dbName];
        }
        return resultList;
    }

    async setAll(collection: any) {
        if (collection[this.dbName]) {
            await chrome.storage.local.set(collection)
        }
        else {
            let newColl: Collection = {}
            newColl[this.dbName] = collection
            await chrome.storage.local.set(newColl);
        }
    }
}

export default PersistanceHandler
export { PersistanceHandler }