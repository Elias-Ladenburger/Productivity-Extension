
/*
Just draw a border round the document.body.
*/
document.body.style.border = "2px solid red";
applyBlacklist();
// Simulate an HTTP redirect:
//window.location.replace("http://www.w3schools.com");

// Simulate a mouse click:
//window.location.href = "http://www.w3schools.com";

function applyBlacklist() {
    let currentURL = window.location.href;
    if(isBlacklisted(currentURL)){
        let newURL = getAction(currentURL)
        console.log(currentURL + " is blacklisted! Redirecting to " + newURL);
        window.location.href = newURL;
    }
}

function isBlacklisted(siteToCheck) {
    return getAllBlacklisted().then(
        (blacklist) => {
            let isSiteBlacklisted = false;
            blacklist.forEach((blacklisted) => {
                if(blacklisted["bad"] == siteToCheck){
                    isSiteBlacklisted = true;
                }
            })
            return isSiteBlacklisted;
        }
    )
  }

  function getAction(originURL) {
    return getAllBlacklisted().then(
        (blacklist) => {
            let action = originURL;
            blacklist.forEach(
                (blacklisted) => {
                    if(blacklisted["bad"] == originURL){
                        action = blacklisted["good"];
                    }
                }
            );
            return action;
        }
    )
  }