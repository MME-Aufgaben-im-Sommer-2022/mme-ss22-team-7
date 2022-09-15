import Observable from "../utils/Observable";

var openChallenges = [
{
    id: "abc123",
    name: "nameone",
    length: 3,
}, 
{
    id: "aaaaa",
    name: "nametwo",
    length: 2,
}, 
{
    id: "bbbbb",
    name: "namethree",
    length: 1,
}, 
],

 activeChallenges = [
    {
        id: "ccccc",
        name: "aone",
        length: 4,
    }, 
    {
        id: "ddddd",
        name: "atwo",
        length: 5,
    }, 
    {
        id: "eeee",
        name: "athree",
        length: 6,
    }, 
    ],

finishedChallenges = [

];

const listActive = document.querySelector('#active-challenges');

activeChallenges.forEach(element => {
    const activeElement = document.createElement('div');
    // find better way to create content of div,
    // also how to style that dv and its content?
    activeElement.innerHTML = element.name;
    listActive.appendChild(activeElement);
});

openChallenges.forEach(element => {
    const openElement = document.createElement('div');
    // find better way to create content of div,
    // also how to style that dv and its content?
    openElement.innerHTML = element.name;
    listActive.appendChild(openElement);
});

// function when finishing challenge 
function finishChallenge (challenge) {
    activeChallenges.forEach(element => {
        if (element.id === challenge.id) {
            activeChallenges.splice(activeChallenges[element - 1], 0);
        }
    });
    finishedChallenges.appendChild(challenge);
    // add score related to the challenge to the users score
}


//die drei Methoden maybe unnötig
//Start einer Challenge
//Listener kann nicht zugegriffen werden
function buttonIsClicked(){
    startButton = document.querySelector(".btn");
    startButton.addEventListener("click", onChallengeStart);
    console.log("klick geht");
}

function createStartDate(){
    //Datum des Challenge Starts
}

function onChallengeStart(){
    let name = document.querySelector(".name").value;
    let length = document.querySelector(".length").value;
    let points = document.querySelector(".points").value;
    let date = createStartDate();
    challenge = new Challenge(name, null, length, date, points, true);
    challenge.activateChallenge();
}



class Challenge extends Observable{

    //desription aus db löschen!!
    constructor(name,description,length,startDate,points,status="deactivated",challengeID){
        super();
        this.name = name;
       // this.description = description;
        this.length = length;
        this.startDate = startDate;
        this.points = points;
        this.status = status;
        this.challengeID = challengeID;
    }

    activateChallenge(){
        this.status = "active";
        this.notifyAll(new Event("activate",this));
        console.log("challenge ist ab jetzt aktiv");
    }
    deactivateChallenge(){
        this.status = "deactivated";
        this.notifyAll(new Event("deactivate",this));
    }
    // when challengeLength is 0, the challenge can be completed
    completeChallenge(){
        if(this.challengeLengthLeft() === 0){
        this.status = "completed";
        this.notifyAll(new Event("complete",this));
    }
}
    challengeLengthLeft(){
        return this.length - (Date.now() - this.startDate);
    }
}
