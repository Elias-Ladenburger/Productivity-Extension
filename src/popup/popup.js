/**
 * When the popup loads, inject a content script into the active tab,
 * and add a click handler.
 * If we couldn't inject the script, handle the error.
 */

window.addEventListener("load", 
function (e) {
  console.log("loaded!");
  document.getElementById("settingsButton").addEventListener(
    "click",
    function (e) {
      chrome.runtime.openOptionsPage();
      close();
    },
    false
  );
}
,false) 


/**
 * There was an error executing the script.
 * Display the popup's error message, and hide the normal UI.
 */
function reportExecuteScriptError(error) {
  document.querySelector("#popup-content").classList.add("hidden");
  document.querySelector("#error-content").classList.remove("hidden");
  console.error(
    `Failed to execute prod_booster content script: ${error.message}`
  );
}
