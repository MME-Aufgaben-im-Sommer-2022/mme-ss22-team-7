import api from '../database/database.js';
var  today = Math.floor(Date.now() / 1000);
var userData, userID;
export function onCreateAccount(el,pw,un){
    api.createAccount(el, pw, un).then(function(response) {
        console.log(response);
        userData = response;
        userID = userData.$id;
      }, function(error) {
        console.log(error);
      });
    api.createSession(el,
        pw).then(response => {
        console.log(response);
        createUserDocument();
      }, error => {
        console.log(error);
      });
      
}
//creates a user document in the user collection
function createUserDocument(userData) {
    api.createUserDocument(userData.$id, {
        UserName: userData.name,
        email: userData.email,
        LastLogin: today
      }, "", "")
      .then(response => {
        console.log(response);
      }, error => {
        console.log(error);
      });
  }