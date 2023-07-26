
interface BlockItem {
  body: string,
  nav: HTMLButtonElement,
  name: string
}

const wtButton = document.getElementById("WTnav") as HTMLButtonElement
const prButton = document.getElementById("PRnav") as HTMLButtonElement
const _activePrototype = document.getElementById("prototypeNavActive") as HTMLElement
const _inactivePrototype = document.getElementById("prototypeNavInactive") as HTMLElement
const activeHTML = _activePrototype.className
const inactiveHTML = _inactivePrototype.className

const blockElements: { [key: string]: BlockItem } = {
  prodrules: { body: "rulesBody", nav: prButton, name: "Productivity Rules" },
  worktimes: { body: "worktimeBody", nav: wtButton, name: "Work Times" }
}

loadOptionsPage()

function loadOptionsPage() {
  initializeButtons()
  const winHash = window.location.hash
  for (let blockElem in blockElements) {
    if (winHash.includes(blockElem)) {
      selectElem(blockElements[blockElem])
    }
  }
}

function initializeButtons() {
  let button: HTMLButtonElement
  for (let blockElem in blockElements) {
    console.log(blockElem)
    console.log(blockElements[blockElem])
    button = blockElements[blockElem]["nav"]
    button.addEventListener("click", (e) => {
      selectElem(blockElements[blockElem])
    })
  }
}

function selectElem(elem: BlockItem) {
  deactivateAllButtons()
  elem.nav.className = activeHTML
  selectBody(elem)
}

function deactivateAllButtons() {
  for (let elem in blockElements) {
    blockElements[elem].nav.className = inactiveHTML
  }
}

function selectBody(bodyItem: BlockItem) {
  hideAll()
  makeVisible(bodyItem)
}

function hideAll() {
  for (let elem in blockElements) {
    makeInvisible(blockElements[elem])
  }
}

function makeVisible(active: BlockItem) {

  const activeBody = document.getElementById(active.body) as HTMLElement
  activeBody.classList.remove("hidden")

}

function makeInvisible(item: any) {
  const activeBody = document.getElementById(item.body) as HTMLElement
  activeBody.classList.add("hidden")
}