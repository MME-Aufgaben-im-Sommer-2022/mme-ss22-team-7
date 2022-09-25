import { initInputs } from "./entries/entryData.js";
import Challenges from "./challenges/challenges.js";
import { getEntryData } from "./entries/entry.js";
import api from "./database/database.js";
import { Server } from "./utils/config.js";
import Friend, { onAddFriend, fillFriendList } from "./friends/Friend.js";
import FriendView from "./friends/FriendView.js";
import Leaderboard from "./friends/Leaderboard.js";
import { onCreateAccount } from "./Login/SignUp.js";
import {
  updateLeaderboardList,
  addToLeaderboard
} from "./friends/Leaderboard.js";


// challenges.js wird angesprochen
const listChallenges = document.querySelector(".active_container");
const listOpenChallenges = document.querySelector(".open_container");
const challenges = new Challenges(listChallenges, true);
const challengesOpen = new Challenges(listOpenChallenges, false);


var score = 0,
  today = Math.floor(Date.now() / 1000),
  transportScore = 60,
  foodScore = 10,
  otherScore = 40,
  userID = "",
  scoreHistory = [],
  friendArray = [],
  userData = null,
  userDocument = null,
  userListDocument = null;
const logoutButton = document.querySelector(".logout-button"),
  S_PER_DAY = 86400,
  entryButton = document.querySelector(".new-entry-button"),
  addFriendButton = document.getElementById("add-friend-button"),
  friendInput = document.getElementById("add-friend-input"),
  scoreEl = document.querySelector(".score"),
  transportScoreEl = document.querySelector(".transport-score"),
  foodScoreEl = document.querySelector(".food-score"),
  otherScoreEl = document.querySelector(".others-score"),
  entriesPopUp = document.querySelector(".overlay-entries"),
  hamburger = document.querySelector("#burger-menu-open"),
  closeIcon = document.querySelector("#burger-menu-close"),
  loginPopUp = document.querySelector(".login-popUp"),
  registerPopUp = document.querySelector(".register-popUp"),
  entryPopUp = document.querySelector(".entry-popUp"),
  loginButtonEl = document.querySelector("#login-button"),
  registerButtonEl = document.querySelector("#register-button"),
  loginCloseEl = document.querySelector("#sign-in"),
  registerCloseEl = document.querySelector("#create-account"),
  websiteEl = document.querySelector("#website"),
  profile = document.querySelector(".profile-container"),
  emailR = document.getElementById('emailR'),
  passwordR = document.getElementById('passwordR'),
  usernameR = document.getElementById('usernameR'),
  email = document.getElementById('email'),
  profileNameEl = document.getElementById('profile-name'),
  profilePic = document.getElementById('profile-img'),
  password = document.getElementById('password');


entryButton.addEventListener("click", onPopUp);
logoutButton.addEventListener("click", onLogout);
addFriendButton.addEventListener("click", addFriend);
hamburger.addEventListener("click", toggleMenu);
closeIcon.addEventListener("click", toggleMenu);





entryPopUp.style.display = "none";
const inputs = initInputs();

let login = "none";
//checks if the user has an active session
checkForSession();
handleLoginPopup();

function onEntrySave() {
  let entryData = getEntryData();
  handleEntryData(entryData);
  entryPopUp.style.display = "none";
  websiteEl.classList.remove("website-hidden");
}

function onPopUp() {
  entryPopUp.style.display = "block";
  websiteEl.classList.add("website-hidden");
  let saveButtonEl = document.querySelector("#save-button");
  saveButtonEl.addEventListener("click", onEntrySave);
}

function updateScore(val) {
  score += val;
  scoreEl.innerHTML = score;
  transportScoreEl.innerHTML = transportScore;
  foodScoreEl.innerHTML = foodScore;
  otherScoreEl.innerHTML = otherScore;
  scoreEl.innerHTML = score;
  console.log(score);
  updateDBScore();
  updateLeaderboardList(userID, score);
}

function updateDBScore() {
  api.updateUserCl(userData.$id, {
    Score: score,
    TransportScore: transportScore,
    FoodScore: foodScore,
    OtherScore: otherScore,
    LastLogin: today,
    ScoreHistory: userDocument.ScoreHistory
  }, "", "").then(response => { console.log(response) }, error => {
    console.log(error);
  });
}

function initData() {
  api.myDocument(userID).then(response => {
    userDocument = response;
    setScoreHistory(userDocument);
    fillHTML(userDocument);
    getEntries();
    getUsers();
  }, error => {
    console.log(error);
  });
}

function fillHTML(response) {
  profileNameEl.innerHTML = userDocument.UserName;
  score = response.Score;
  transportScore = response.TransportScore;
  foodScore = response.FoodScore;
  otherScore = response.OtherScore;
  scoreEl.innerHTML = score;
  transportScoreEl.innerHTML = transportScore;
  foodScoreEl.innerHTML = foodScore;
  otherScoreEl.innerHTML = otherScore;
}

function getEntries() {
  api.getEntryDocuments().then(response => {
    console.log(response);
    initEntries(response);
  }, error => {
    console.log(error);
  });
}

function getUsers() {
  api.getUserListDocuments().then(response => {
    console.log(response);
    userListDocument = response;
    fillFriendList();
  }, error => {
    console.log(error);
  });
}


//array with all entry documents of user
function initEntries(entries) {
  console.log(entries); //TODO: show entries in history
}

function deleteEntry(id, score) {
  api.deleteEntry(id).then(response => {
    console.log(response);
    updateScore(-score);
  }, error => {
    console.log(error);
  });
}

function toggleMenu() {
  if (profile.classList.contains("showMenu")) {
    profile.classList.remove("showMenu");
    closeIcon.style.display = "none";
  } else {
    profile.classList.add("showMenu");
    closeIcon.style.display = "block";
  }
}

function checkForSession() {
  api.getAccount().then(response => {
    console.log(response);
    userData = response;
    userID = response.$id;
    onLoginClose();
  }, error => {});
}

function handleEntryData(entryData) {
  let val = 0;
  //TODO: Eingabe "0" bei Fahrzeugen blockieren!
  entryData.forEach(el => {
    console.log(el.value, el.name);
    val += 20;
    //TODO:el.value ist string, mit score verbinden und zu string machen
    api.createEntry({ Name: el.el, CO2: 40 })
      .then(response => {
        console.log(response);
        //create score entry
      }, error => {
        console.log(error);
      });
    updateScore(val);
  });

  console.log(entryData);
}

function handleLoginPopup() {
  loginPopUp.style.display = "block";
  registerPopUp.style.display = "none";
  login = "login";
  loginButtonEl.addEventListener("click", onLoginSwitch);
  registerButtonEl.addEventListener("click", onLoginSwitch);
  loginCloseEl.addEventListener("click", createUserSession);
  registerCloseEl.addEventListener("click", createAccount);
}

function onLoginSwitch() {
  if (login === "login") {
    loginPopUp.style.display = "none";
    registerPopUp.style.display = "block";
    login = "register";
  } else if (login === "register") {
    loginPopUp.style.display = "block";
    registerPopUp.style.display = "none";
    login = "login";
  }
}

//creates a new user session
function createUserSession() {
  let el = email.value,
    pw = password.value;
  email.value = "";
  password.value = "";
  api.createSession(el,
    pw).then(response => {
    console.log(response);
    onLoginClose();
  }, error => {
    console.log(error);
  });
}

function onLoginClose() {
  login = "none";
  loginPopUp.style.display = "none";
  registerPopUp.style.display = "none";
  websiteEl.classList.remove("website-hidden");
  userData = api.getAccount().then(response => {
    userData = response;
    userID = userData.$id;
    console.log(response);
    initData();
  }, error => {
    console.log(error);
  });
}

//creates a new user account
function createAccount() {
  console.log("create account");
  let el = emailR.value,
    pw = passwordR.value,
    un = usernameR.value;
  emailR.value = "";
  passwordR.value = "";
  usernameR.value = "";
  api.createAccount(el, pw, un).then(function(response) {
    console.log(response);
    userData = response;
    userID = userData.$id;
    onRegisterClose(el, pw, );
  }, function(error) {
    console.log(error);
  });
}

//closes register popUp and creates session
function onRegisterClose(el, pw) {
  login = "none";
  loginPopUp.style.display = "none";
  registerPopUp.style.display = "none";
  websiteEl.classList.remove("website-hidden");
  api.createSession(el,
    pw).then(response => {
    console.log(response);
    createUserDocument();
    getUsers();
  }, error => {
    console.log(error);
  });
}

//creates a user document in the user collection
function createUserDocument() {
  console.log(userData.$id);
  api.createUserDocument(userData.$id, {
      UserName: userData.name,
      email: userData.email
    }, "", "")
    .then(response => {
      console.log(response);
    }, error => {
      console.log(error);
    });
}

function onLogout() {
  api.deleteCurrentSession().then(response => {
    console.log(response);
    window.location.reload();
  }, error => {
    console.log(error);
  });
}

function addFriend() {
  let friend = friendInput.value;
  friendInput.value = "";
  onAddFriend(friend);
}

function setScoreHistory() {
  let dateDif = Math.floor((today - userDocument.LastLogin) / S_PER_DAY);
  for (let index = 0; index < dateDif; index++) {
    userDocument.ScoreHistory.push(userDocument.Score - 5 * index);
    //vllt abbau von punkten über zeit?
  }
  console.log(scoreHistory);
  addToLeaderboard(new Friend(userDocument));
  updateDBScore();
}





//doesnt work yet
/* profilePic.addEventListener("change", function(event) {
  image.src = URL.createObjectURL(event.target.files[0]);
  console.log("image loaded"+"image.src");
}); */



// const hamburger = document.querySelector("#burger-menu"),
//   closeIcon = document.querySelector("#x-burger-menu"),
//   profile = document.querySelector(".profile-container"),

//hamburger.addEventListener("click", toggleMenu);
//closeIcon.addEventListener("click", toggleMenu);

// function toggleMenu() {
//   if (profile.classList.contains("showMenu")) {
//     profile.classList.remove("showMenu");
//     closeIcon.style.display = "none";
//   } else {
//     profile.classList.add("showMenu");
//     closeIcon.style.display = "block";
//   }
// }
export { userID, userDocument, userListDocument };