// const hamburger = document.querySelector("#burger-menu"),
//   closeIcon = document.querySelector("#x-burger-menu"),
//   profile = document.querySelector(".profile-container"),


const entryButton = document.querySelector(".new-entry-button"),
  entriesPopUp = document.querySelector(".overlay-entries");


//hamburger.addEventListener("click", toggleMenu);
//closeIcon.addEventListener("click", toggleMenu);
entryButton.addEventListener("click", toggleEntries);

// function toggleMenu() {
//   if (profile.classList.contains("showMenu")) {
//     profile.classList.remove("showMenu");
//     closeIcon.style.display = "none";
//   } else {
//     profile.classList.add("showMenu");
//     closeIcon.style.display = "block";
//   }
// }

function toggleEntries() {
  if (entriesPopUp.classList.contains("showMenu")) {
    entriesPopUp.classList.remove("showMenu");
    entriesPopUp.style.display = "none";
  } else {
    entriesPopUp.classList.add("showMenu");
    entriesPopUp.style.display = "block";
  }
}

const client = new Client();
client
    .setEndpoint('https://appwrite.software-engineering.education/v1')
    .setProject('62ed22f3b5f7f7c609a8');
    
const account = new Account(client);

    // Register User
   
function init() {
  console.log("appwrite");
  account.create('23423423', 'me@example.com', 'password', 'Jane Doe')
  .then(function (response) {
      console.log(response);
  }, function (error) {
      console.log(error);
  });
  console.log("### Starting MME Project ###"); // eslint-disable-line no-console
}

init();
