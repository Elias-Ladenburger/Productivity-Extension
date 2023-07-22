
interface BlockItem {
  body: string,
  nav: string,
  name: string
}

const blockElements: { [key: string]: BlockItem } = {
  prodrules: { body: "rulesBody", nav: "rulesNav", name: "Productivity Rules" },
  worktimes: { body: "worktimeBody", nav: "worktimenav", name: "Work Times" }
}

const inactiveButton = document.getElementById("inactiveButton") as HTMLButtonElement
const activeButton = document.getElementById("activeButton") as HTMLButtonElement
const commonHTML = "h-14 rounded-t-md px-2 "
const activeHTML = "bg-white font-bold"
const inactiveHTML = "bg-bgGrey100 hover:bg-bgGrey500"

handleInactiveClick()

function handleInactiveClick() {

  inactiveButton.addEventListener("click", (e) => {
    e.preventDefault()
    inactiveButton.className = commonHTML + activeHTML
    activeButton.className = commonHTML + inactiveHTML
    selectBody(blockElements.worktimes)
  })

  activeButton.addEventListener("click", (e) => {
    e.preventDefault()
    activeButton.className = commonHTML + activeHTML
    inactiveButton.className = commonHTML + inactiveHTML
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