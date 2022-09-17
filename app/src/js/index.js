import {initInputs} from "./entries/entryData.js";
import api from "./database/database.js";


console.log("start");
var score = 0;
const entryButton = document.querySelector(".new-entry-button"),
  scoreEl = document.querySelector(".score"),
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
  profile = document.querySelector(".profile-container");

entryButton.addEventListener("click", toggleEntries);
hamburger.addEventListener("click", toggleMenu);
closeIcon.addEventListener("click", toggleMenu);

let login = "none";
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

function onEntrySave(){
  entriesPopUp.classList.remove("showMenu");
  updateScore();
}

function onPopUp(){
  let iframe = document.querySelector(".popUp").contentWindow,
  saveButtonEl = iframe.document.querySelector("#save-button"),
  inputs = initInputs(iframe);
  saveButtonEl.addEventListener("click", onEntrySave);
}

function updateScore(){
  //ab hier Datanbank nötig
 //TODO implement score-calculation / fetch and update database
  scoreEl.innerHTML = score;
  console.log(score);
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




function handleLoginPopup(){
  loginPopUp.style.display = "block";
  registerPopUp.style.display = "none";
  login = "login";
  loginButtonEl.addEventListener("click", onLoginSwitch);
  registerButtonEl.addEventListener("click", onLoginSwitch);
  loginCloseEl.addEventListener("click", createUserSession);
  registerCloseEl.addEventListener("click", createAccount);
}

function onLoginSwitch(){
  if(login === "login"){
    loginPopUp.style.display = "none";
    registerPopUp.style.display = "block";
    login = "register";
  }else if(login === "register"){
    loginPopUp.style.display = "block";
    registerPopUp.style.display = "none";
    login = "login";
  }
}
function createUserSession(){
  console.log("login close");
  api.createSession(document.getElementById('email').value,
  document.getElementById('password').value)
  /* .then(function (response) {
     console.log(response);
     alert("Login successful");
     onLoginClose();
  }, function (error) {
    alert("Invalid input!");
    console.log(error);
  }) */; 
}
function onLoginClose(){
  console.log("login close");
  login = "none";
  loginPopUp.style.display = "none";
  registerPopUp.style.display = "none";
  websiteEl.classList.remove("website-hidden");
}
function createAccount(){
   api.createAccount(document.getElementById('emailR').value,
  document.getElementById('passwordR').value, 
  document.getElementById('usernameR').value)
  .then(function (response) {
     console.log(response);
     alert("Account created");
     onRegisterClose();
  }, function (error) {
    alert("Invalid input!");
    console.log(error);
  }); 
} 
function onRegisterClose(){
  console.log("register close");
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
