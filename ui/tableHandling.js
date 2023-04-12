// import {getAllBlacklisted, addBlacklist} from "./options.js";

let addButton = document.getElementById("blacklistButton");
addButton.addEventListener("click", function(e){
    addEntry();
  }, false);
prepareTable();


function prepareTable() {
    let settingsTable = document.getElementById("settingsTable");
    getAllBlacklisted().then(
        (allBlacklisted) => {
            console.log(allBlacklisted)
            if(typeof(allBlacklisted) == "object") {
                Object.keys(allBlacklisted).foreach(function (badSite) {
                    addToTable(badSite, allBlacklisted[badSite]);
                });
            }
        });
  }

function addEntry(){
    let badSite = document.getElementById("badSiteInput");
    let goodAction = document.getElementById("goodActionInput");
    addToTable(badSite.value, goodAction.value);
    badSite.value="";
    goodAction.value="";
}

function addToTable(badSite, goodAction) {
    addBlacklist(badSite, goodAction);

    let newRow = settingsTable.insertRow(-1);
    let blacklistedCell = newRow.insertCell(0);
    let redirectCell = newRow.insertCell(1);
    let actionsCell = newRow.insertCell(2);
  
    newRow.id = badSite
    blacklistedCell.innerHTML = badSite;
    redirectCell.innerHTML = goodAction;
    actionsCell.innerHTML = "edit";
}

function removeFromTable(badSite) {
    let toDelete = document.getElementById(badSite);
    toDelete.parentnode.removeChild(toDelete);
}

function addBlacklist(toBlacklistURL, toRedirectURL) {
    getAllBlacklisted().then(
        (blacklistedStorage) => {
            let blacklist = typeof(blacklistedStorage) == "undefined" ? [] : blacklistedStorage;
            blacklist[toBlacklistURL] = toRedirectURL;
            browser.storage.local.set({"blacklist": blacklist});
        }
    )
  }
  
function getAllBlacklisted() {
    return browser.storage.local.get("blacklist").then(
      (allBlacklisted) => {
        if (typeof(allBlacklisted) == "undefined") {
          return {};
        } else {
          return allBlacklisted["blacklist"];
        }
      });
  }