import { initInputs } from "./entries/entryData.js";
import api from "./database/database.js";
import { Server } from "./utils/config.js";


console.log("start");
var score = 0,
  transportScore = 60,
  foodScore = 10,
  otherScore = 40,
  userData = null;
const
  entryButton = document.querySelector(".new-entry-button"),
  scoreEl = document.querySelector(".score"),
  transportScoreEl = document.querySelector(".transport-score"),
  foodScoreEl = document.querySelector(".food-score"),
  otherScoreEl = document.querySelector(".others-score"),
  entriesPopUp = document.querySelector(".overlay-entries"),
  hamburger = document.querySelector("#burger-menu-open"),
  closeIcon = document.querySelector("#burger-menu-close"),
  loginPopUp = document.querySelector(".login-popUp"),
  registerPopUp = document.querySelector(".register-popUp"),
  loginButtonEl = document.querySelector("#login-button"),
  registerButtonEl = document.querySelector("#register-button"),
  loginCloseEl = document.querySelector("#sign-in"),
  registerCloseEl = document.querySelector("#create-account"),
  websiteEl = document.querySelector("#website"),
  profile = document.querySelector(".profile-container"),
  emailR = document.getElementById('emailR'),
  passwordR = document.getElementById('passwordR'),
  usernameR = document.getElementById('usernameR'),
  email = document.getElementById('email'),
  password = document.getElementById('password');

entryButton.addEventListener("click", toggleEntries);
hamburger.addEventListener("click", toggleMenu);
closeIcon.addEventListener("click", toggleMenu);

let login = "none";
checkForSession();
handleLoginPopup();


function toggleEntries() {
  if (entriesPopUp.classList.contains("showMenu")) {
    entriesPopUp.classList.remove("showMenu");
    entriesPopUp.style.display = "none";
  } else {
    entriesPopUp.classList.add("showMenu");
    entriesPopUp.style.display = "block";
    onPopUp();
  }
}

function onEntrySave() {
  entriesPopUp.classList.remove("showMenu");
  updateScore();
}

function onPopUp() {
  let iframe = document.querySelector(".popUp").contentWindow,
    saveButtonEl = iframe.document.querySelector("#save-button"),
    inputs = initInputs(iframe);
  saveButtonEl.addEventListener("click", onEntrySave);
}
//function to get current time

function updateScore() {
  score += 10;
  api.createEntry({ Name: "car", CO2: score, UserID: userData.$id }, "", "")
    .then(response => {
      console.log(response);
      updateDBScore();
    }, error => {
      console.log(error);
    });
  //TODO: implement score-calculation 
  scoreEl.innerHTML = score;
  transportScoreEl.innerHTML = transportScore;
  foodScoreEl.innerHTML = foodScore;
  otherScoreEl.innerHTML = otherScore;
  console.log(score);
}

function updateDBScore() {
  api.updateUserCl(userData.$id, { Score: score, TransportScore: transportScore,
    FoodScore: foodScore, OtherScore: otherScore }, "", "");
}
function initData(){
  console.log(userData.$id +" init data");
  api.myDocument(userData.$id).then(response => {
    console.log(response);
    score = response.Score;
    transportScore = response.TransportScore;
    foodScore = response.FoodScore;
    otherScore = response.OtherScore;
    scoreEl.innerHTML = score;
    transportScoreEl.innerHTML = transportScore;
    foodScoreEl.innerHTML = foodScore;
    otherScoreEl.innerHTML = otherScore;
  }, error => {
    console.log(error);
  });
}

//popUp lieber über html/css? iframe noch mit bugs
function toggleMenu() {
  if (profile.classList.contains("showMenu")) {
    profile.classList.remove("showMenu");
    closeIcon.style.display = "none";
  } else {
    profile.classList.add("showMenu");
    closeIcon.style.display = "block";
  }
}
//closes the login pop up if there is a active user session
function checkForSession() {
  api.getAccount().then(response => {
    console.log(response);
    userData = response;
    onLoginClose();
  }, error => {});
}




function handleLoginPopup() {
  loginPopUp.style.display = "block";
  registerPopUp.style.display = "none";
  login = "login";
  loginButtonEl.addEventListener("click", onLoginSwitch);
  registerButtonEl.addEventListener("click", onLoginSwitch);
  loginCloseEl.addEventListener("click", createUserSession);
  registerCloseEl.addEventListener("click", createAccount);
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
//creates a new user session
function createUserSession() {
  let el = email.value,
    pw = password.value;
  email.value = "";
  password.value = "";
  api.createSession(el,
    pw).then(response => {
    userData = response;
    console.log(response);
    onLoginClose();
  }, error => {
    console.log(error);
  });
  console.log("no response");
}

function onLoginClose() {
  login = "none";
  loginPopUp.style.display = "none";
  registerPopUp.style.display = "none";
  websiteEl.classList.remove("website-hidden");
  initData();
}
//creates a new user account
function createAccount() {
  console.log("create account");
  let el = emailR.value,
    pw = passwordR.value,
    un = usernameR.value;
  emailR.value = "";
  passwordR.value = "";
  usernameR.value = "";
  api.createAccount(el, pw, un)
    .then(function(response) {
      console.log(response);
      userData = response;
      onRegisterClose(el, pw, );
    }, function(error) {
      console.log(error);
    });
}
//closes register popUp and creates session
function onRegisterClose(el, pw) {
  login = "none";
  loginPopUp.style.display = "none";
  registerPopUp.style.display = "none";
  websiteEl.classList.remove("website-hidden");
  api.createSession(el,
    pw).then(response => {
    console.log(response);
    createUserDocument();
  }, error => {
    console.log(error);
  });
  initData();
}
//creates a user document in the user collection
function createUserDocument() {
  console.log(userData.$id);
  api.createUserDocument(userData.$id, {
      UserName: userData.name,
      email: userData.email
    }, "", "")
    .then(response => {
      console.log(response);
    }, error => {
      console.log(error);
    });
}



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