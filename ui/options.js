function addBlacklist(toBlacklistURL, toRedirectURL) {
  browser.storage.local.get("blacklist").then((elem) => {
    let blacklist = typeof(elem) == "undefined" ? [] : elem;    
    blacklist[toBlacklistURL] = toRedirectURL
    browser.storage.local.set({ blacklist: blacklist });
  });
}

function prepareTable() {
  let settingsTable = document.getElementById("settingsTable");
  getAllBlacklisted.then((allBlacklisted) => {
    allBlacklisted.forEach((blacklisted) => {
      let newRow = settingsTable.insertRow(-1);
      let blacklistedCell = newRow.insertCell(0);
      let redirectCell = newRow.insertCell(1);
      let actionsCell = newRow.insertCell(2);

      blacklistedCell.innerHTML = blacklisted["bad"];
      redirectCell.innerHTML = blacklisted["good"];
      actionsCell.innerHTML = "edit";
    });
  });
}

function getAllBlacklisted() {
  return browser.storage.local.get("blacklist").then((allBlacklisted) => {
    if (allBlacklisted === undefined) {
      return {};
    } else {
      return allBlacklisted["blacklist"];
    }
  });
}
