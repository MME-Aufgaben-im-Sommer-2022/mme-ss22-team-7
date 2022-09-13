import {initInputs} from "./entries/entryData.js";

console.log("start");
var score = 0;
const entryButton = document.querySelector(".new-entry-button"),
  scoreEl = document.querySelector(".score"),
  entriesPopUp = document.querySelector(".overlay-entries"),
  hamburger = document.querySelector("#burger-menu-open"),
  closeIcon = document.querySelector("#burger-menu-close"),
  profile = document.querySelector(".profile-container");

entryButton.addEventListener("click", toggleEntries);
hamburger.addEventListener("click", toggleMenu);
closeIcon.addEventListener("click", toggleMenu);



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

function toggleMenu() {
  if (profile.classList.contains("showMenu")) {
    profile.classList.remove("showMenu");
    closeIcon.style.display = "none";
  } else {
    profile.classList.add("showMenu");
    closeIcon.style.display = "block";
  }
}