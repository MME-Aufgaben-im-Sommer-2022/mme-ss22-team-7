// diese hier

import Challenge from "./challenge.js";
import ChallengeView from "./challengeView.js";

let activeChallenges = [
  {
    tid: "aaa",
    name: "aone",
    description: "",
    length: 4,
    completed: false,
    Uid: "u273942947329",
    startDate: 40922,
    endDate: 110922,
    scoreValue: 13,
  },
  {
    tid: "bbb",
    name: "bone",
    description: "",
    length: 4,
    completed: false,
    Uid: "u273942947329",
    startDate: 40922,
    endDate: 110922,
    scoreValue: 13,
  },
  {
    tid: "ccc",
    name: "cone",
    description: "",
    length: 4,
    completed: false,
    Uid: "u273942947329",
    startDate: 40922,
    endDate: 110922,
    scoreValue: 13,
  },
];

class Challenges {
  constructor(listA) {
    this.listA = listA;
    this.ChallengeViews = [];

    this.populateActiveChallenges(activeChallenges);
  }

  populateActiveChallenges(challenges) {
    //load data from backend

    // creating a challengeItem
    challenges.forEach((challenge) =>
      this.addChallenge(Challenge.fromObject(challenge))
    );
  }

  addChallenge(challenge) {
    const ChallengeViews = this.ChallengeViews;
    const challengeView = new ChallengeView();
    challengeView.addEventListener("decline", (event) =>
      this.declineChallenge(challenge)
    );

    challengeView.challenge = challenge;
    ChallengeViews.push(challengeView);
    // is challengeView.element right? the element?
    this.listA.appendChild(challengeView.element);
  }

  declineChallenge(challenge) {
    // sort challenge back into open challenges
    console.log(challenge);
  }

  finishChallenge(challenge) {
    activeChallenges.forEach((element) => {
      if (element.id === challenge.id) {
        // remove challenge from active Challenges in backend
        activeChallenges.splice(activeChallenges[element - 1], 0);
      }
    });
    // add score related to the challenge to the users score
  }

  activateChallenge() {
    this.status = "active";
    this.notifyAll(new Event("activate", this));
  }
  deactivateChallenge() {
    this.status = "deactivated";
    this.notifyAll(new Event("deactivate", this));
  }
  // when challengeLength is 0, the challenge can be completed
  completeChallenge() {
    if (this.challengeLengthLeft() === 0) {
      this.status = "completed";
      this.notifyAll(new Event("complete", this));
    }
  }
  challengeLengthLeft() {
    return this.length - (Date.now() - this.startDate);
  }
}

export default Challenges;
