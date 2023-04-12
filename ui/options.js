export function addBlacklist(toBlacklistURL, toRedirectURL) {
  let blacklistedStorage = getAllBlacklisted();
  blacklistedStorage.then((blacklist) => {
    blacklist["blacklist"][toBlacklistURL] = toRedirectURL
    browser.storage.local.set(blacklist);
  })
}

export function getAllBlacklisted() {
  return browser.storage.local.get("blacklist").then(
    (allBlacklisted) => {
      if (typeof(allBlacklisted) == "undefined") {
        return {};
      } else {
        return allBlacklisted["blacklist"];
      }
    });
}

