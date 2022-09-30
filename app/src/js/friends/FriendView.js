/* eslint-env browser */
import api from '../database/database.js';
import { userDocument, userID } from '../index.js';


const friendListTemplate = document.querySelector("#friend-template").innerHTML
  .trim(),
  leaderboardList = document.querySelector(".leaderboard-list");
//const friendLeaderboardTemplate = document.querySelector("#friend-leaderboard-template").innerHTML.trim();


class FriendView {

  constructor(friend) {
    this.friend = friend;
    this.el = FriendView.createFriendElement();
    this.el.setAttribute("data-id", this.friend.id);
    this.friendButton = this.el.querySelector('.friend-button');
    this.friendButton.addEventListener("click", this.onDelete.bind(this));
    this.textInput = this.el.querySelector(".friend-name");
    this.textInput.innerHTML = this.friend.name;
  }
  getElement() {
    return this.el;
  }
  onDelete() {
    console.log("delete");
    this.el.remove();
    leaderboardList.querySelector("[data-id=\"" + this.friend.id + "\"]")
      .remove();
    console.log(this.friend.id);
    let index = userDocument.Friends.indexOf(this.friend.email);
    userDocument.Friends.splice(index, 1);
    api.updateUserCl(userID, userDocument).then(response => {
      console.log(response);
    }, error => {
      console.log(error);
    });
  }

  static createFriendElement() {
    let el = document.createElement("div");
    el.innerHTML = friendListTemplate;
    return el.firstChild;
  }

}

export default FriendView;