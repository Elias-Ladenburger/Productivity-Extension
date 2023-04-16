
let addButton = document.getElementById("blacklistButton");
addButton.addEventListener(
  "click",
  function (e) {
    addEntry();
  },
  false
);
prepareTable();

function prepareTable() {
  let settingsTable = document.getElementById("settingsTable");
  getAllBlacklisted().then((allBlacklisted) => {
    allBlacklisted.forEach((blacklisted) => {
      addToTable(blacklisted["bad"], blacklisted["good"]);
    });
  });
}

function addEntry() {
  let badSite = document.getElementById("badSiteInput");
  let goodAction = document.getElementById("goodActionInput");
  addToTable(badSite.value, goodAction.value);
  addBlacklist(badSite.value, goodAction.value);
  badSite.value = "";
  goodAction.value = "";
}

function addToTable(badSite, goodAction) {
  let newRow = settingsTable.insertRow(-1);
  let blacklistedCell = newRow.insertCell(0);
  let redirectCell = newRow.insertCell(1);
  let actionsCell = newRow.insertCell(2);

  newRow.id = badSite;
  blacklistedCell.innerHTML = badSite;
  redirectCell.innerHTML = goodAction;
  actionsCell.innerHTML = `<button id="edit_${badSite}">edit</button><button id="delete_${badSite}">delete</button>`;
  addButton = document.getElementById(`delete_${badSite}`);
  addButton.addEventListener(
    "click",
    function (e) {
      removeFromTable(badSite);
    },
    false
  );
}

function removeFromTable(badSite) {
  deleteBlacklist(badSite);
  let toDelete = document.getElementById(badSite);
  toDelete.remove();
  console.log(`Removing rule for ${badSite}!`);
  prepareTable();
}
