const modeToggle = document.getElementById("toggle-switch");
const modeText = document.querySelector(".toggle-text");
const body = document.body;

let isDarkMode = false;

function setDarkMode() {
  isDarkMode = true;
  body.classList.remove("light-mode");
  body.classList.add("dark-mode");
  modeText.textContent = "LIGHT";
  localStorage.setItem("mode", "dark");
}

function setLightMode() {
  isDarkMode = false;
  body.classList.remove("dark-mode");
  body.classList.add("light-mode");
  modeText.textContent = "DARK";
  localStorage.setItem("mode", "light");
}

function toggleMode() {
  isDarkMode ? setLightMode() : setDarkMode();
}

function loadModeFromStorage() {
  const mode = localStorage.getItem("mode");
  if (mode === "dark") {
    setDarkMode();
  } else {
    setLightMode();
  }
}

modeToggle.addEventListener("click", toggleMode);
loadModeFromStorage();
