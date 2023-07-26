
interface BlockItem {
  body: string,
  nav: string,
  name: string
}

const blockElements: { [key: string]: BlockItem } = {
  prodrules: { body: "rulesBody", nav: "rulesNav", name: "Productivity Rules" },
  worktimes: { body: "worktimeBody", nav: "worktimenav", name: "Work Times" }
}

const inactiveButton = document.getElementById("WTnav") as HTMLButtonElement
const activeButton = document.getElementById("PRnav") as HTMLButtonElement
const _activePrototype = document.getElementById("prototypeNavActive") as HTMLElement 
const _inactivePrototype = document.getElementById("prototypeNavInactive") as HTMLElement
const activeHTML = _activePrototype.className
const inactiveHTML = _inactivePrototype.className


handleInactiveClick()

function handleInactiveClick() {

  inactiveButton.addEventListener("click", (e) => {
    inactiveButton.className = activeHTML
    activeButton.className = inactiveHTML
    selectBody(blockElements.worktimes)
  })

  activeButton.addEventListener("click", (e) => {
    activeButton.className = activeHTML
    inactiveButton.className = inactiveHTML
    selectBody(blockElements.prodrules)
  })

}

function toggleButtons() {
  inactiveButton.classList.toggle(activeHTML)
  inactiveButton.classList.toggle(inactiveHTML)
  activeButton.classList.toggle(activeHTML)
  activeButton.classList.toggle(inactiveHTML)
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