/* eslint-env browser */
import api from '../database/database.js';
import { userDocument, userID } from '../index.js';
import Friend from './Friend.js';



var leaderboard=[];
const friendLeaderboardTemplate = document.querySelector("#leaderboard-template").innerHTML.trim(),
  leaderboardListEl = document.querySelector(".leaderboard-list");



function addToLeaderboard(friend) {
  let leaderboardEntry = new Leaderboard(friend);
  leaderboardListEl.appendChild(leaderboardEntry.getElement());
  leaderboard.push(leaderboardEntry);
  sortList();
}

function updateLeaderboardList(id, score) {
  let userObj = leaderboard.find(x => x.id === id);
  userObj.changeScore(score);
  sortList();
}

function sortList() {
  [...leaderboardListEl.children]
  .sort(function compareFn(a,b){
    if(parseInt(a.id)<parseInt(b.id))return 1;
    if(parseInt(a.id)>parseInt(b.id))return -1;
    return 0;}).forEach(node => leaderboardListEl.appendChild(node));
  }
 

class Leaderboard {

  constructor(friend) {
    this.friend = friend;
    this.id=friend.id;
    this.el = Leaderboard.createLeaderboardElement();
    this.el.setAttribute("data-id", this.friend.id);
    this.el.setAttribute("id", this.friend.score);
    this.el.setAttribute("name", this.friend.id);
    this.name = this.el.querySelector(".leaderboard-name");
    this.name.innerHTML = this.friend.name;
    this.score = this.el.querySelector(".leaderboard-value")
    this.score.innerHTML = this.friend.score;

  }
  getID() {
    return this.friend.id;
  }
  getElement() {
    return this.el;
  }
  getScore(score) {
    return this.score;
  }
  changeScore(score) {
    this.el.setAttribute("id", score);
    this.score.innerHTML = score;}
  deleteElement() {}
  //sort list

  static createLeaderboardElement() {
    let el = document.createElement("div");
    el.innerHTML = friendLeaderboardTemplate;
    return el.firstChild;
  }

}

export default Leaderboard;
export { addToLeaderboard, updateLeaderboardList };