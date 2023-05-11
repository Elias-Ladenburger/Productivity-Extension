/*
Just draw a border round the document.body.
*/
applyBlacklist();

// Simulate an HTTP redirect:
//window.location.replace("http://www.w3schools.com");

// Simulate a mouse click:
//window.location.href = "http://www.w3schools.com";

function applyBlacklist() {
  let currentURL = window.location.href;

  isBlacklisted(currentURL).then((isSiteBlacklisted) => {
    if (isSiteBlacklisted) {
      getAction(currentURL).then((newURL) => {
        performAction(newURL);
        //document.body.style.border = "2px solid red";
      });
    }
  });
}

function isBlacklisted(siteToCheck) {
  return getAllBlacklisted().then((blacklist) => {
    let isSiteBlacklisted = false;

    if (blacklist) {
      blacklist.forEach((blacklisted) => {
        if (siteToCheck.includes(blacklisted["bad"])) {
          isSiteBlacklisted = true;
        }
      });
    }
    return isSiteBlacklisted;
  });
}

function getAction(originURL) {
  return getAllBlacklisted().then((blacklist) => {
    let action = originURL;
    blacklist.forEach((blacklisted) => {
      if (originURL.includes(blacklisted["bad"])) {
        action = parseAction(blacklisted["good"]);
      }
    });
    return action;
  });
}

function parseAction(actionString) {
  if (actionString.startsWith("http")) {
    return actionString;
  } else {
    newString = "https://" + actionString;
    return newString;
  }
}

function performAction(newURL) {
  window.addEventListener("load", function () {
    // Wait 5 minutes (300000 milliseconds) before showing the popup
    setTimeout(function () {
      // Show the popup
      alert("Do you truly want to spend more time on this site?");
    }, 3000);
    this.setTimeout(function () {
      alert("This site is blacklisted! Redirecting to " + newURL);
      window.location.href = newURL;
    }, 3000);
  });
}
