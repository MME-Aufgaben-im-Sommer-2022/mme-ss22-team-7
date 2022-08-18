const hamburger = document.querySelector("#burger-menu");
const closeIcon = document.querySelector("#x-burger-menu");
const profile = document.querySelector(".profile-container");

function toggleMenu() {
  if (profile.classList.contains("showMenu")) {
    profile.classList.remove("showMenu");
    closeIcon.style.display = "none";
  } else {
    profile.classList.add("showMenu");
    closeIcon.style.display = "block";
  }
}

hamburger.addEventListener("click", toggleMenu);
closeIcon.addEventListener("click", toggleMenu);

function init() {
  console.log("### Starting MME Project ###"); // eslint-disable-line no-console
}

//const feather = require("feather-icons");

init();
