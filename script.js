const themeButton = document.querySelector(".theme-button")
const html = document.querySelector("html")

let theme = localStorage.getItem("theme") || null
if (theme) {
  html.dataset.theme = theme
}

function updateTheme() {
  html.dataset.theme = theme
  localStorage.setItem("theme", theme)
}

function themeButtonClick() {
  if (theme) {
    theme = theme == "Dark" ? "Light" : "Dark"
    updateTheme()
  } else {
    const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches
    theme = darkMode ? "Light" : "Dark"
    updateTheme()
  }
}

themeButton.addEventListener("click", themeButtonClick)
