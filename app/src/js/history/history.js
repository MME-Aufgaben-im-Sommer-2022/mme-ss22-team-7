/* eslint-env browser */
import api from '../database/database.js';
import { userDocument, userID } from '../index.js';




var history=[];
const entryHistoryTemplate = document.querySelector("#history-template").innerHTML.trim(),
  historyListEl = document.querySelector(".history-list");


 function addChallengeToHistory(entry) {
  let historyEntry = new History(entry,false);
  historyListEl.appendChild(historyEntry.getElement());
  history.push(historyEntry);
}
function addEntryToHistory(entry) {
    let historyEntry = new History(entry,true);
    historyListEl.appendChild(historyEntry.getElement());
    history.push(historyEntry);
  }

function deleteEntry(id){
    api.deleteEntryDocument(id).then(response => {
      console.log(response);
    }, error => {
      console.log(error);
    });
  }

function deleteChallenge(){
}

class History {

  constructor(entry, isEntry) {
    this.entry = entry;
    this.id= entry.$id;
    this.isEntry = isEntry;
    this.el = History.createHistoryElement();
    this.el.setAttribute("data-id", this.entry.$id);
    this.name = this.el.querySelector(".history-name");
    this.button = this.el.querySelector('.history-button');
    this.button.addEventListener("click", this.onDelete.bind(this));
    this.name.innerHTML = this.entry.Name;
    this.score = this.el.querySelector(".history-value")
    this.score.innerHTML = this.entry.CO2;
  }
  getID() {
    return this.entry.id;
  }
  getElement() {
    return this.el;
  }
  changeScore(score) {
    this.el.setAttribute("id", score);
    this.score.innerHTML = score;}
    onDelete() {
        this.el.remove();
        if(this.isEntry){deleteEntry(this.id);
        }else{deleteChallenge(this.id);}
    }
  static createHistoryElement() {
    let el = document.createElement("div");
    el.innerHTML = entryHistoryTemplate;
    return el.firstChild;
  }

}

export default History;
export { addChallengeToHistory, addEntryToHistory};