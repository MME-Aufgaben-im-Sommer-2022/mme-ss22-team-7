// Init your Web SDK
const client = new Client();

client
  .setEndpoint("http://localhost/v1") // Your Appwrite Endpoint
  .setProject("455x34dfkj"); // Your project ID

const account = new Account(client);

// Register User
account.create("unique()", "me@example.com", "password", "Jane Doe").then(
  (response) => {
    console.log(response);
  },
  (error) => {
    console.log(error);
  }
);

/**
 * für das database / appwrite Problem irrelevanter Code
 */

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

function init() {
  console.log("### Starting MME Project ###"); // eslint-disable-line no-console
}

init();
