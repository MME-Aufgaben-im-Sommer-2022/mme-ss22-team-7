import Challenge from "./challenge.js";
import ChallengeView from "./challengeView.js";

/**
 * challenges.js erstellt für alle challenges eine card und kümmert sich um alles generelle
 */

let activeChallenges = [
    {
      tid: "aaa",
      name: "aone ja und so soll die challenge gemacht werden ( zusätzliche Erklärung) mehr text mehr text mehr text ",
      length: 4,
      completed: false,
      Uid: "u273942947329",
      startDate: 40922,
      endDate: 110922,
      scoreValue: 13,
      active: true,
    },
    {
      tid: "bbb",
      name: "bone",
      length: 4,
      completed: false,
      Uid: "u273942947329",
      startDate: 40922,
      endDate: 110922,
      scoreValue: 13,
      active: true,
    },
    {
      tid: "ccc",
      name: "cone",
      length: 4,
      completed: false,
      Uid: "u273942947329",
      startDate: 40922,
      endDate: 110922,
      scoreValue: 13,
      active: true,
    },
    {
      tid: "aaa",
      name: "aone",
      length: 4,
      completed: false,
      Uid: "u273942947329",
      startDate: 40922,
      endDate: 110922,
      scoreValue: 13,
      active: true,
    },
    {
      tid: "bbb",
      name: "bone",
      length: 4,
      completed: false,
      Uid: "u273942947329",
      startDate: 40922,
      endDate: 110922,
      scoreValue: 13,
      active: true,
    },
    {
      tid: "ccc",
      name: "cone",
      length: 4,
      completed: false,
      Uid: "u273942947329",
      startDate: 40922,
      endDate: 110922,
      scoreValue: 13,
      active: true,
    },
    {
      tid: "aaa",
      name: "aone",
      length: 4,
      completed: false,
      Uid: "u273942947329",
      startDate: 40922,
      endDate: 110922,
      scoreValue: 13,
      active: true,
    },
    {
      tid: "bbb",
      name: "bone",
      length: 4,
      completed: false,
      Uid: "u273942947329",
      startDate: 40922,
      endDate: 110922,
      scoreValue: 13,
      active: true,
    },
    {
      tid: "ccc",
      name: "cone",
      length: 4,
      completed: false,
      Uid: "u273942947329",
      startDate: 40922,
      endDate: 110922,
      scoreValue: 13,
      active: true,
    },
    {
      tid: "aaa",
      name: "aone",
      length: 4,
      completed: false,
      Uid: "u273942947329",
      startDate: 40922,
      endDate: 110922,
      scoreValue: 13,
      active: true,
    },
    {
      tid: "bbb",
      name: "bone",
      length: 4,
      completed: false,
      Uid: "u273942947329",
      startDate: 40922,
      endDate: 110922,
      scoreValue: 13,
      active: true,
    },
    {
      tid: "ccc",
      name: "cone",
      length: 4,
      completed: false,
      Uid: "u273942947329",
      startDate: 40922,
      endDate: 110922,
      scoreValue: 13,
      active: true,
    },
    {
      tid: "aaa",
      name: "aone",
      length: 4,
      completed: false,
      Uid: "u273942947329",
      startDate: 40922,
      endDate: 110922,
      scoreValue: 13,
      active: true,
    },
    {
      tid: "bbb",
      name: "bone",
      length: 4,
      completed: false,
      Uid: "u273942947329",
      startDate: 40922,
      endDate: 110922,
      scoreValue: 13,
      active: true,
    },
    {
      tid: "ccc",
      name: "cone",
      length: 4,
      completed: false,
      Uid: "u273942947329",
      startDate: 40922,
      endDate: 110922,
      scoreValue: 13,
      active: true,
    },
  ],
  openChallenges = [
    {
      tid: "aaa",
      name: "aOpen",
      length: 4,
      completed: false,
      Uid: "u273942947329",
      startDate: 40922,
      endDate: 110922,
      scoreValue: 13,
      active: false,
    },
    {
      tid: "bbb",
      name: "bOpen",
      length: 4,
      completed: false,
      Uid: "u273942947329",
      startDate: 40922,
      endDate: 110922,
      scoreValue: 13,
      active: false,
    },
    {
      tid: "ccc",
      name: "cOpen",
      length: 4,
      completed: false,
      Uid: "u273942947329",
      startDate: 40922,
      endDate: 110922,
      scoreValue: 13,
      active: false,
    },
  ];

class Challenges {
  constructor(listA, bool) {
    this.listA = listA;
    this.ChallengeViews = [];
    console.log(bool);

    if (bool) {
      // backend aktive Challenges holen
      this.populateChallenges(activeChallenges);
    } else {
      // offene Challenges holen
      this.populateChallenges(openChallenges);
    }
  }

  populateChallenges(challenges) {
    // creating a challengeItem
    challenges.forEach((challenge) =>
      this.addChallenge(Challenge.fromObject(challenge))
    );
  }

  addChallenge(challenge) {
    const ChallengeViews = this.ChallengeViews;
    /**
     *  WICHTIG!!
     *   need to compute weather the Challenge is active or inactive ( list active challenges vs all challenges )
     *  */
    let challengeActtive = false;
    const challengeView = new ChallengeView(challengeActtive);
    challengeView.addEventListener("decline", (event) =>
      this.declineChallenge(challenge)
    );
    if (challengeActtive) {
      challengeView.challenge = challenge;
    } else {
      challengeView.challengeOpen = challenge;
    }
    ChallengeViews.push(challengeView);
    // is challengeView.element right? the element?
    this.listA.appendChild(challengeView.element);
  }

  /**
   *
   * alles abwärts vermutlich irgendwann in challengeView
   */

  declineChallenge(challenge) {
    // sort challenge back into open challenges
    console.log("got to decline: " + challenge);
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
