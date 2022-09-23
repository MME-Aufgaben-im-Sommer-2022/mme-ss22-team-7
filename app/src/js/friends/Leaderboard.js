/* eslint-env browser */
import api from '../database/database.js';
import { userDocument, userID } from '../index.js';
import Friend from './Friend.js';




const friendLeaderboardTemplate = document.querySelector(
    "#leaderboard-template").innerHTML.trim(),
  leaderboardList = document.querySelector(".leaderboard-list");



function addToLeaderboard(friend) {
  let leaderboard = new Leaderboard(friend);
  leaderboardList.appendChild(leaderboard.getElement());
  sortList();

}

function updateLeaderboardList() {
  leaderboardList.querySelector("[data-id=\"" + userID + "\"]").remove();
  addToLeaderboard(new Friend(userDocument));
  sortList();
}

function sortList() {
  [...leaderboardList.children]
  .sort((a, b) => a.id < b.id ? 1 : -1)
    .forEach(node => leaderboardList.appendChild(node));
}

class Leaderboard {

  constructor(friend) {
    this.friend = friend;
    this.el = Leaderboard.createFriendElement();
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
  getScore() {
    return this.score;
  }
  deleteElement() {}
  //sort list

  static createFriendElement() {
    let el = document.createElement("div");
    el.innerHTML = friendLeaderboardTemplate;
    return el.firstChild;
  }

}

export default Leaderboard;
export { addToLeaderboard, updateLeaderboardList };