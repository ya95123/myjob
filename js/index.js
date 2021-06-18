const suns = document.querySelectorAll(".sun")
const runnerFrame = document.querySelector(".runnerFrame")
const sunSpotLine = document.querySelector(".sunSpotLine")
const btnMenu = document.querySelector(".btn-menu")

// parallex
const parallaxSunIndex = new Parallax(suns[0])
const parallaxSunResult = new Parallax(suns[1])
const parallexRunnerFrame = new Parallax(runnerFrame)

const isSpotLine = () => {
  sunSpotLine.classList.toggle("show9")
}

// hover runner + spotLine
runnerFrame.addEventListener("mouseover", isSpotLine, false)
runnerFrame.addEventListener("mouseout", isSpotLine, false)
btnMenu.addEventListener("mouseover", isSpotLine, false)
btnMenu.addEventListener("mouseout", isSpotLine, false)