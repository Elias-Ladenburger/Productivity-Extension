function getAllBlacklisted() {
  return chrome.storage.local.get("blacklist").then((allBlacklisted) => {
    if (typeof allBlacklisted == "undefined") {
      return [];
    } else {
      return allBlacklisted["blacklist"];
    }
  });
}

 function addBlacklist(entry) {
  getAllBlacklisted().then((blacklistedStorage) => {
    let blacklist =
      typeof blacklistedStorage == "undefined" ? [] : blacklistedStorage;
    blacklist.push({ bad: entry.source, entry: JSON.stringify(entry) });
    setBlacklist(blacklist);
  });
}

 function deleteBlacklist(toRemove) {
  getAllBlacklisted().then((blacklistedStorage) => {
    let newBlacklisted = blacklistedStorage.filter((myURL) => {
      return myURL["bad"] != toRemove;
    });
    setBlacklist(newBlacklisted);
  });
}

function setBlacklist(blacklist) {
  chrome.storage.local.set({ blacklist: blacklist });
}
