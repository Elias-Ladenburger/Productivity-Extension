function addBlacklist(toBlacklistURL, toRedirectURL) {
  getAllBlacklisted().then(
      (blacklistedStorage) => {
          let blacklist = typeof(blacklistedStorage) == "undefined" ? [] : blacklistedStorage;
          blacklist.push({"bad":toBlacklistURL, "good": toRedirectURL});
          setBlacklist(blacklist);
      }
  )
}

function deleteBlacklist(toRemove) {
  getAllBlacklisted().then(
    (blacklistedStorage) => {
      let newBlacklisted = blacklistedStorage.filter((myURL) => {
        return myURL["bad"] != toRemove;
      })
      setBlacklist(newBlacklisted);
    }
  )
}

function getAllBlacklisted() {
  return browser.storage.local.get("blacklist").then(
    (allBlacklisted) => {
      if (typeof(allBlacklisted) == "undefined") {
        return [];
      } else {
        return allBlacklisted["blacklist"];
      }
    });
}

function setBlacklist(blacklist) {
  browser.storage.local.set({"blacklist": blacklist});
}