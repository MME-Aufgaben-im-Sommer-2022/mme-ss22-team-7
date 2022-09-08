import Observable from "../utils/Observable";
//import {initInputs} from "resources/js/entries/entryData.js";
import {initInputs} from "./entryData.js"


function initEntry(){
    let entryEl = document.querySelector("#entry-popup"),
    entry = new Entry(entryEl);
    initInputs(entry);
    //initEvents(entry);
}




class EntryView extends Observable{
    constructor(entry){
        this.entry = entry;

    }
    
}