import Observable from "../utils/Observable";
//import {initInputs} from "resources/js/entries/entryData.js";
import {initInputs} from "./entryData.js"


function initEntry(){
    let entryEl = document.querySelector("#entry-popup"),
    inputs = initInputs();
    //initEvents();
}

function saveBtn(){
    let saveBtnEl = document.querySelector("#save-button");
    saveBtnEl.addEventListener("click", onSaveBtnClick);
}

function onSaveBtnClick(){
    console.log("Saved");
}
