
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

handleInactiveClick()

function handleInactiveClick() {

  inactiveButton.addEventListener("click", (e) => {
    e.preventDefault()


    let oldValue = activeButton.value
    const oldConf = blockElements[oldValue]
    let newValue = inactiveButton.value
    const newConf = blockElements[newValue]
    populateButton(inactiveButton, oldConf, oldValue)
    populateButton(activeButton, newConf, newValue)
    selectBody(newConf)
  })

}

function populateButton(button: HTMLButtonElement, conf: BlockItem, value: string) {
  button.value = value
  button.innerHTML = conf.name
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