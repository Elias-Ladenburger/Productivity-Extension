
interface BlockItem {
  body: string, 
  nav: string
}

const blockElements = {rules: {body: "rulesBody", nav: "rulesNav"}, worktimes: {body: "worktimebody", nav: "worktimenav"}}

function toggleBody(bodyName: string, make_visible: boolean) {


}

function hideAll() {
  for(let elem in blockElements) {

  }
    
  }

  function makeVisible(active: BlockItem) {

  const ruleBody = document.getElementById(active.body) as HTMLElement 
  ruleBody.style.visibility = "visible"

  const navItem = document.getElementById(active.nav) as HTMLElement
  navItem.classList.add("bg-white")
  navItem.classList.remove("bg-BGred100")
  }

  function makeInvisible(item: any) {
      const ruleBody = document.getElementById(item.body) as HTMLElement 
  ruleBody.style.visibility = "hidden"

  const navItem = document.getElementById(item.nav) as HTMLElement
  navItem.classList.add("bg-BGred100")
  navItem.classList.remove("bg-white")
  }