import Challenge from "./challenge.js";
import ChallengeView from "./challengeView.js";
import api from "../database/database.js";
import { userDocs } from "../index.js";

/**
 * challenges.js erstellt für alle challenges eine card und kümmert sich um alles generelle
 */

//erneuert die openChallenge und activeChallenge array DB Einträge
function changeChallengeState(activeChallenges, completedChallenges) {
  api.updateChallenges(activeChallenges, completedChallenges).then(
    (response) => {
      console.log(response);
    },
    (error) => {
      console.log(error);
    }
  );
}

class Challenges {
  constructor(
    listOpen,
    listActive,
    listChallengesUiOpen,
    listChallengesUiActive,
    listChallengesUiCompleted
  ) {
    this.listOpen = listOpen;
    this.listActive = listActive;
    this.listChallengesUiOpen = listChallengesUiOpen;
    this.listChallengesUiActive = listChallengesUiActive;
    this.listChallengesUiCompleted = listChallengesUiCompleted;
    this.ChallengeViews = [];

    // this.activeChallenges = [];
    // this.openChallenges = [];

    this.populateChallenges(this.listChallengesUiOpen, false);

    this.populateChallenges(this.listChallengesUiActive, true);
  }

  populateChallenges(challenges, bool) {
    // creating a challengeItem
    console.log(" populate Challenges: " + bool);
    console.log(challenges);
    console.log(challenges.length);
    if (challenges.length > 0) {
      console.log("creating Challenge");
      challenges.forEach((challenge) =>
        this.addChallenge(Challenge.fromObject(challenge), bool)
      );
    }
  }

  /**
   * hoffentlich nicht mehr nötig
   */

  computeActiveChallenges() {
    // geting the active user challenges
    console.log("getting active Chalenges: ");
    let validActiveIds = [];
    this.listChallengesUiActive.forEach((element) => {
      validActiveIds.push(element.$id);
    });
    return validActiveIds;
  }

  //hollt liste aller challenges aus der datenbank
  // hoffentlich nicht mehr nötig
  getOpenChallenges() {
    console.log("getting open challenges ");

    api.getChallengeDocuments().then(
      (response) => {
        //sortieren nach den relevanten Challenges
        this.openChallenges = this.cleanChallenges(response);
        console.log(this.openChallenges);
        this.populateChallenges(this.openChallenges);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  addChallenge(challenge, bool) {
    const ChallengeViews = this.ChallengeViews;
    /**
     *  WICHTIG!!
     *   need to compute weather the Challenge is active or inactive ( list active challenges vs all challenges )
     *  */
    const challengeView = new ChallengeView(bool);

    if (bool) {
      challengeView.addEventListener("decline", (event) =>
        this.declineChallenge(challenge)
      );
      challengeView.challenge = challenge;
      ChallengeViews.push(challengeView);
      this.listActive.appendChild(challengeView.element);
    } else {
      challengeView.addEventListener("accept", (event) =>
        this.acceptChallenge(challenge)
      );
      challengeView.challengeOpen = challenge;
      ChallengeViews.push(challengeView);
      this.listOpen.appendChild(challengeView.element);
    }
  }

  /**
   *
   * alles abwärts vermutlich irgendwann in challengeView??
   */

  declineChallenge(challenge) {
    // sort challenge back into open challenges
    console.log("got to decline: ");
    console.log(challenge);
    const ChallengeViews = this.ChallengeViews;
    const index = ChallengeViews.findIndex(
      (challengeView) =>
        challengeView.challenge.challengeName === challenge.challengeName
    );
    if (index < 0) return;

    ChallengeViews[index].remove();
    this.ChallengeViews.splice(index, 1);

    const indexActive = this.listChallengesUiActive.findIndex(
      (item) => item.challengeName == challenge.challengeName
    );
    if (indexActive < 0) return;

    this.listChallengesUiActive.splice(indexActive, 1);

    this.listChallengesUiOpen.push(challenge);

    changeChallengeState(
      this.computeActiveChallenges(this.listChallengesUiActive),
      this.listChallengesUiCompleted
    );

    let tempArrChallenge = [];
    tempArrChallenge.push(challenge);
    this.populateChallenges(tempArrChallenge, false);
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

  acceptChallenge(challenge) {
    const ChallengeViews = this.ChallengeViews;
    const index = ChallengeViews.findIndex(
      (challengeView) =>
        challengeView.challenge.challengeName === challenge.challengeName
    );
    if (index < 0) return;

    ChallengeViews[index].remove();
    this.ChallengeViews.splice(index, 1);

    const indexOpen = this.listChallengesUiOpen.findIndex(
      (item) => item.challengeName == challenge.challengeName
    );
    if (indexOpen < 0) return;

    this.listChallengesUiOpen.splice(indexOpen, 1);

    this.listChallengesUiActive.push(challenge);

    changeChallengeState(
      this.computeActiveChallenges(this.listChallengesUiActive),
      this.listChallengesUiCompleted
    );

    let tempArrChallenge = [];
    tempArrChallenge.push(challenge);
    this.populateChallenges(tempArrChallenge, true);
  }

  deleteChallenge(index, newActive) {
    // deleting challenge from database
    // const ChallengeViews = this.ChallengeViews;

    api.getChallengeDocuments().then(
      (response) => {
        const result = response.documents;
        result.slice(index, 1);
        console.log("this is the result from getChallengeDocs");
        console.log(result);
        // secon parameter should be completed challenges!!
        changeChallengeState(newActive, result);
        console.log("should be after updated successfully");

        //is this.list right here?
        const challengesOpen = new Challenges(this.list, false);

        const challenges = new Challenges(this.list, true);
      },
      (error) => {
        console.log(error);
      }
    );
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
