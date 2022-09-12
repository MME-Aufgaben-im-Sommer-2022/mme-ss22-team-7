import {initEntryPage} from "./entries/entries.js";
import {initInputs} from "./entries/entryData.js";


console.log("start");
const entryButton = document.querySelector(".new-entry-button"),
entriesPopUp = document.querySelector(".overlay-entries");
//new entry Button
entryButton.addEventListener("click", toggleEntries);

function toggleEntries() {
  //popup
  if (entriesPopUp.classList.contains("showMenu")) {
    entriesPopUp.classList.remove("showMenu");
    entriesPopUp.style.display = "none";
  } else {
    entriesPopUp.classList.add("showMenu");
    entriesPopUp.style.display = "block";
    let iframe = document.querySelector(".popUp"),
    saveButtonEl = iframe.contentWindow.document.querySelector("#save-button"),
    inputs = initInputs(iframe.contentWindow);
    console.log(inputs.carEl.score);
    saveButtonEl.addEventListener("click", onEntrySave);
    initEntryPage();
  }
}

function onEntrySave(){
  entriesPopUp.classList.remove("showMenu");
}


function init() {
  console.log("### Starting MME Project ###"); // eslint-disable-line no-console
}

init();







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