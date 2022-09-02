import Entry from "resources/js/entries.js";
import Observable from "./utils/Observable";


function initEntry(){
    let entryEl = document.querySelector("#entry-popup");
    entry = new Entry(entryEl);
    initInputs(entry);
    initEvents(entry);
}
function initInputs(entry){
entry.inputs = {
    //transport
    carEl : entry.el.querySelector("#car-km-field"),
    busEl : entry.el.querySelector("#bus-km-field"),
    longTransEl : entry.el.querySelector("#long-distance-transport-km-field"),
    publicTransEl : entry.el.querySelector("#public-transport-km-field"),
    noneTransEl : entry.el.querySelector("#default-km-field"),

    //food


    //other
    
};
}



class EntryView extends Observable{
    constructor(entry){
        this.entry = entry;

    }
    
}