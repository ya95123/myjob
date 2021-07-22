const runnerFrame = document.querySelector(".runnerFrame")
const sunSpotLine = document.querySelector(".sunSpotLine")
const btnMenu = document.querySelector(".btn-menu")

const suns = document.querySelectorAll(".sun")
const items = document.querySelectorAll(".item")

// parallex
const parallaxSunIndex = new Parallax(suns[0])
const parallaxSunResult = new Parallax(suns[1])
const parallexRunnerFrame = new Parallax(runnerFrame)

const isSpotLine = () => {
  sunSpotLine.classList.toggle("show9")
}

const menuIn = () => {
  let second = 0
  items.forEach(item => {
    if (item.getAttribute("class").includes("none")) return

    setTimeout(() => {
      item.classList.toggle("item-in")
    }, second)
    second += 100
  })
}

// hover runner + spotLine
runnerFrame.addEventListener("mouseover", isSpotLine, false)
runnerFrame.addEventListener("mouseout", isSpotLine, false)
btnMenu.addEventListener("mouseover", isSpotLine, false)
btnMenu.addEventListener("mouseout", isSpotLine, false)
btnMenu.addEventListener("click", menuIn, false)