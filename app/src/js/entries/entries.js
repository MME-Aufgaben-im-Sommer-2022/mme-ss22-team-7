import {initInputs} from "./entryData.js";

console.log("EntryPage loaded");
initEntryPage();

function initEntryPage(){
    if(document.querySelector("#car-km-field") != null){
    let inputs = initInputs();
    }
}

export {initEntryPage};