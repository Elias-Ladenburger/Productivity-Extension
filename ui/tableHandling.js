prepareAll();

function prepareAll() {
  prepareTable();

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
    console.log(allBlacklisted);
    if (!allBlacklisted || (allBlacklisted && !allBlacklisted.length)) {
      addToTable("*.facebook.com", "jamesclear.com/atomic-habits");
    } else {
      allBlacklisted.forEach((blacklisted) => {
        addToTable(blacklisted["bad"], blacklisted["good"]);
      });
    }
  });
}

function addEntry() {
  let source = document.getElementById("badSiteInput");
  let actiontype = document.getElementById("actiontype");
  let targetval = document.getElementById("targetvalue");
  let actioncondition = document.getElementById("actioncondition");
  let actionfrequency = document.getElementById("actionfrequency");

  let action = Action(source.value, actiontype.value, targetval.value);

  if (source && actiontype && targetvalue) {
    addBlacklist(action);
    addToTable(source.value, targetval.value);
    source.value = "";
    targetval.value = "";
    actioncondition = "";
    actiontype = "";
  }
}

function addToTable(badSite, goodAction) {
  let settingsTable = document.getElementById("settingsTable");
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
  let addButton = document.getElementById(`delete_${badSite}`);
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
