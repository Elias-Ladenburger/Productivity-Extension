

class PersistanceHandler {
    dbName: string

    constructor(dbName: string){
        this.dbName = dbName
    }
    
    async getAll() {
        let storedValues = await chrome.storage.local.get(this.dbName);
        let resultList: {[key: string]: any} = typeof storedValues === "undefined" ? {} : storedValues;
        if (this.dbName in storedValues) {
            return storedValues[this.dbName];
        }
        return resultList;
    }

    async findOne() {

    }
    async updateOne() {

    }
    async deleteOne () {

    }
}

export default PersistanceHandler
export {PersistanceHandler}