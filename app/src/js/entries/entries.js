import Observable from "../utils/Observable.js";
import {initInputs} from "./entryData.js";

console.log("EntryPage loaded");
initEntryPage();

function initEntryPage(){
    if(document.querySelector("#car-km-field") != null){
    //let entryEl = document.querySelector("#entry-popup");
    console.log("initInputs");
    let inputs = initInputs();
    console.log("saveBtn");
    saveBtn();
    }
}


function saveBtn(){
    console.log("methode savebtn");

    let saveBtnEl = document.querySelector("#save-button");
    saveBtnEl.addEventListener("click", onSaveBtnClick);
}

function onSaveBtnClick(){
    console.log("methode onSaveClick");

    console.log("Saved -> null");
    let event = new Event("saved", null);

    console.log("notifyAll funktioniert!!");
    view.notifyAll(event);
}

class EntryView extends Observable{

    init(){
        console.log("init");
    }
}

let view = new EntryView();
console.log("new EntryView erstellt");

export default EntryView;
export {initEntryPage};