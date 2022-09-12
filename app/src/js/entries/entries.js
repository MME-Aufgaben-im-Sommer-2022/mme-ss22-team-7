import Observable from "../utils/Observable";
//import {initInputs} from "resources/js/entries/entryData.js";
import {initInputs} from "./entryData.js";
import {Server} from "../utils/config.js";

function initEntry(){
    let entryEl = document.querySelector("#entry-popup"),
    entry = new Entry(entryEl);
    initInputs(entry);
    //initEvents(entry);
}
//creates new database Entry of entry
const promise = database.createDocument(Server.entriesCollectionID, 'unique()', {
    //CO2Value , UserID , DateCreated, entrieNames(Array);
});

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});



class EntryView extends Observable{
    constructor(entry){
        this.entry = entry;

    }
    
}