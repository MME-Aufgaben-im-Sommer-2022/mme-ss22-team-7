import { addDataset } from "../Charts.js";
import { userListDocument, userDocument,userID } from "../../index.js";
import api from '../database/database.js';
import FriendView from "./FriendView.js";
import Leaderboard,{addToLeaderboard} from "./Leaderboard.js";
const S_PER_DAY = 86400,
friendList = document.querySelector(".friend-list"),
today = Math.floor(Date.now() / 1000);

export function onAddFriend(friend) {
  userListDocument.documents.forEach(element => {
    if (element.email == friend) {
      if (!userDocument.Friends.includes(friend)) {
        userDocument.Friends.push(friend);
        element.Friends.push(userDocument.email);
        addToFriendList(element);
        api.updateUserCl(userID, { Friends: userDocument.Friends }).then(
          response => {
            console.log(response);
          }, error => {
            console.log(error);
          });
        api.updateUserCl(element.$id, { Friends: element.Friends }).then(
          response => {
            console.log(response);
          }, error => {
            console.log(error);
          });
      }
    }
  });
}
export function fillFriendList() {
  userDocument.Friends.forEach(friend => {
    userListDocument.documents.forEach(element => {
      if (element.email == friend) {
        addToFriendList(element);
      }
    });
  });
}

function addToFriendList(data) {
  let newFriend = new Friend(data),
  friendView = new FriendView(newFriend);
  addToLeaderboard(newFriend);
  friendList.appendChild(friendView.getElement());
}


  function fillScoreHistory(data) {
    let scoreHistory = data.ScoreHistory;
    let dateDif = Math.floor((today-data.LastLogin)/S_PER_DAY);
     for (let index = 0; index < dateDif; index++) {
       scoreHistory.push(data.Score-5*index);
       //vllt abbau von punkten über zeit?
       console.log(scoreHistory);
     }return scoreHistory;
    }
  

class Friend {
  //vllt noch mit mehr daten erweitern zum vergleichen im Graphen
  constructor(data) {
    this.id = data.$id;
    this.name = data.UserName;
    this.email = data.email;
    this.score = data.Score;
    this.lastLogin = data.LastLogin;
    this.scoreHistory = data.ScoreHistory;
    //this.scoreHistory = fillScoreHistory(data);
    addDataset(this.name, this.scoreHistory);
  }
  setScore(score) {
    this.score = score;
  }


}

export default Friend;