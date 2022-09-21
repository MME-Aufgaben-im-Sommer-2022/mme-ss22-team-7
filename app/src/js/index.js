import { initInputs } from "./entries/entryData.js";
import Challenges from "./challenges/challenges.js";
import api from "./database/database.js";

// challenges.js wird angesprochen
const listChallenges = document.querySelector(".active_container");
const listOpenChallenges = document.querySelector(".open_container");
const challenges = new Challenges(listChallenges, true);
const challengesOpen = new Challenges(listOpenChallenges, false);
const client = new Appwrite.Client();

client
  .setEndpoint("https://appwrite.software-engineering.education/v1") // Your API Endpoint
  .setProject("6311ed55783449414806"); // Your project ID

const databases = new Appwrite.Databases(client);

const promise = databases.listDocuments(
  "[6311ece9c6ebefc4b0f0]",
  "[6311ed940fc46037cbac]"
);

promise.then(
  function (response) {
    console.log(response); // Success
  },
  function (error) {
    console.log(error); // Failure
  }
);

var score = 0;
const entryButton = document.querySelector(".new-entry-button"),
  scoreEl = document.querySelector(".score"),
  entriesPopUp = document.querySelector(".overlay-entries"),
  hamburger = document.querySelector("#burger-menu-open"),
  closeIcon = document.querySelector("#burger-menu-close"),
  loginPopUp = document.querySelector(".login-popUp"),
  registerPopUp = document.querySelector(".register-popUp"),
  entryPopUp = document.querySelector(".entry-popUp"),
  loginButtonEl = document.querySelector("#login-button"),
  registerButtonEl = document.querySelector("#register-button"),
  loginCloseEl = document.querySelector("#sign-in"),
  registerCloseEl = document.querySelector("#create-account"),
  websiteEl = document.querySelector("#website"),
  profile = document.querySelector(".profile-container");

entryButton.addEventListener("click", onPopUp);
hamburger.addEventListener("click", toggleMenu);
closeIcon.addEventListener("click", toggleMenu);

entryPopUp.style.display="none";

let login = "none";
handleLoginPopup();

function onEntrySave() {
  entryPopUp.style.display="none";
  websiteEl.classList.remove("website-hidden");
  updateScore();
}

function onPopUp() {
  entryPopUp.style.display="block";
  websiteEl.classList.add("website-hidden");
  let saveButtonEl = document.querySelector("#save-button"),
  inputs = initInputs();
  saveButtonEl.addEventListener("click", onEntrySave);
}

function updateScore() {
  //ab hier Datanbank nötig
  //TODO implement score-calculation / fetch and update database
  scoreEl.innerHTML = score;
  console.log(score);
}

function toggleMenu() {
  if (profile.classList.contains("showMenu")) {
    profile.classList.remove("showMenu");
    closeIcon.style.display = "none";
  } else {
    profile.classList.add("showMenu");
    closeIcon.style.display = "block";
  }
}

function handleLoginPopup() {
  loginPopUp.style.display = "block";
  registerPopUp.style.display = "none";
  login = "login";
  loginButtonEl.addEventListener("click", onLoginSwitch);
  registerButtonEl.addEventListener("click", onLoginSwitch);
  loginCloseEl.addEventListener("click", onLoginClose);
  registerCloseEl.addEventListener("click", onRegisterClose);
}

function onLoginSwitch() {
  if (login === "login") {
    loginPopUp.style.display = "none";
    registerPopUp.style.display = "block";
    login = "register";
  } else if (login === "register") {
    loginPopUp.style.display = "block";
    registerPopUp.style.display = "none";
    login = "login";
  }
}

function onLoginClose() {
  login = "none";
  loginPopUp.style.display = "none";
  registerPopUp.style.display = "none";
  websiteEl.classList.remove("website-hidden");
}

function onRegisterClose() {
  login = "none";
  loginPopUp.style.display = "none";
  registerPopUp.style.display = "none";
  websiteEl.classList.remove("website-hidden");
}

// Register User
/*api.createAccount("test@tes23t.com", "test123334", "peteaar").then(function (response) {
  console.log(response);
}, function (error) {
  console.log(error);
});*/

// const hamburger = document.querySelector("#burger-menu"),
//   closeIcon = document.querySelector("#x-burger-menu"),
//   profile = document.querySelector(".profile-container"),

//hamburger.addEventListener("click", toggleMenu);
//closeIcon.addEventListener("click", toggleMenu);

// function toggleMenu() {
//   if (profile.classList.contains("showMenu")) {
//     profile.classList.remove("showMenu");
//     closeIcon.style.display = "none";
//   } else {
//     profile.classList.add("showMenu");
//     closeIcon.style.display = "block";
//   }
// }
