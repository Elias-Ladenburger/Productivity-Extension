prepareAll();

function prepareAll() {
  // prepareTable();

  let addButton = document.getElementById("blacklistButton");
  addButton.addEventListener(
    "click",
    function (e) {
      addEntry();
    },
    false
  );
}

function prepareTable() {
  getAllBlacklisted().then((allBlacklisted) => {
    allBlacklisted.forEach((blacklisted) => {
      addToTable(blacklisted["bad"], blacklisted["good"]);
    });
  });
}

function addEntry() {
  let badSite = document.getElementById("badSiteInput");
  let goodAction = document.getElementById("goodActionInput");
  if (badSite && goodAction) {
    addBlacklist(badSite.value, goodAction.value);
    addToTable(badSite.value, goodAction.value);
    badSite.value = "";
    goodAction.value = "";
  }
}

function addToTable(badSite, goodAction) {
  let newRow = settingsTable.insertRow(-1);
  let blacklistedCell = newRow.insertCell(0);
  let redirectCell = newRow.insertCell(1);
  let actionsCell = newRow.insertCell(2);

  newRow.id = badSite;
  blacklistedCell.innerHTML = badSite;
  blacklistedCell.setAttribute("class", "px-2");
  redirectCell.innerHTML = goodAction;
  redirectCell.setAttribute("class", "px-2");
  actionsCell.innerHTML = `<button id="edit_${badSite}" class="rounded-lg border-white bg-navy text-white hover:bg-blueRoyal px-2 mx-1 text-center">edit</button>
  <button id="delete_${badSite}" class="rounded-lg border-white bg-navy text-white hover:bg-blueRoyal px-2 mx-1 text-center">delete</button>`;
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
  //prepareTable();
}
