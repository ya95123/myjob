const runnerFrame = document.querySelector(".runnerFrame")
const sunSpotLine = document.querySelector(".sunSpotLine")
const btnMenu = document.querySelector(".btn-menu")
const framePhone = document.querySelector(".frame-phone")

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
  // 手機版
  // frame-phone
  framePhone.classList.toggle("frame-phone-in")
  if (window.innerWidth <= 600) {
    // item
    items.forEach(item => {
      if (item.getAttribute("class").includes("none")) return
      item.classList.toggle("item-in")
    })
    return
  }

  // pc、pad
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