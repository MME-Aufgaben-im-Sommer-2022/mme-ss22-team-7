import {initEntryPage} from "./entries/entries.js";


console.log("start");
const entryButton = document.querySelector(".new-entry-button"),
entriesPopUp = document.querySelector(".overlay-entries");
//new entry Button
entryButton.addEventListener("click", toggleEntries);

function toggleEntries() {
  if (entriesPopUp.classList.contains("showMenu")) {
    entriesPopUp.classList.remove("showMenu");
    entriesPopUp.style.display = "none";
  } else {
    entriesPopUp.classList.add("showMenu");
    entriesPopUp.style.display = "block";
    let iframe = document.querySelector(".popUp"),
    safeButtonEl = iframe.contentWindow.document.querySelector("#save-button");
    //saveButton
    safeButtonEl.addEventListener("click", onEntrySave);
    initEntryPage();
  }
}

function onEntrySave(){
  entriesPopUp.classList.remove("showMenu");
}


function init() {
  console.log("### Starting MME Project ###"); // eslint-disable-line no-console
  //ausführen vom weiteren Code funktioniert manchmal nicht wegen "favico.icon" Fehler
  //EntryView.init();
  //entriesPopUp.addEventListener("saved", onEntrySave);
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