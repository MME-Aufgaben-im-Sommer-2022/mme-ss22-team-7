import {initInputs} from "./entries/entryData.js";

console.log("start");
var score = 0;
const entryButton = document.querySelector(".new-entry-button"),
<<<<<<< Updated upstream
  scoreEl = document.querySelector(".score"),
  entriesPopUp = document.querySelector(".overlay-entries"),
  hamburger = document.querySelector("#burger-menu-open"),
  closeIcon = document.querySelector("#burger-menu-close"),
  profile = document.querySelector(".profile-container");

entryButton.addEventListener("click", toggleEntries);
hamburger.addEventListener("click", toggleMenu);
closeIcon.addEventListener("click", toggleMenu);


=======
scoreEl = document.querySelector(".score"),
entriesPopUp = document.querySelector(".overlay-entries"),
loginPopUp = document.querySelector(".overlay-login");
entryButton.addEventListener("click", toggleEntries);
let login = "none";
handleLoginPopup();
>>>>>>> Stashed changes

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

<<<<<<< Updated upstream
function toggleMenu() {
  if (profile.classList.contains("showMenu")) {
    profile.classList.remove("showMenu");
    closeIcon.style.display = "none";
  } else {
    profile.classList.add("showMenu");
    closeIcon.style.display = "block";
  }
}
=======
function handleLoginPopup(){
  loginPopUp.classList.add("showMenu");
  //loginPopUp.style.display = "block";
  //checkLogInVar();
  //setUpClosing();
}

//TODO
function checkLogInVar(){
  let iframe = document.querySelector(".popUp-login").contentWindow;
  if(iframe.document.querySelector("#login") != null){
    login = "login";
  }else if(iframe.document.querySelector("#register") != null){
    login = "register";
  }else{
    login = "none";
  }
  console.log(login);
}

function onLoginClose(){
  console.log("closing login");
  loginPopUp.classList.remove("showMenu");
  loginPopUp.style.display = "none";
}

function setUpClosing(){
  let iframe = document.querySelector(".popUp-login").contentWindow,
  closeLoginEl = iframe.document.querySelector("#sign-in"),
  closeRegisterEl = iframe.document.querySelector("#create-account");
  if(closeLoginEl != null){
    closeLoginEl.addEventListener("click", onLoginClose);
  }
  if(closeRegisterEl != null){
    closeRegisterEl.addEventListener("click", onLoginClose);
  }
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
>>>>>>> Stashed changes
