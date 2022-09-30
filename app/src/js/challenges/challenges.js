import Challenge from "./challenge.js";
import ChallengeView from "./challengeView.js";
import api from "../database/database.js";
import { updateScore } from "../../index.js";

/**
 * challenges.js erstellt für alle challenges eine card und kümmert sich um alles generelle
 */

class Challenges {
  constructor(
    listOpen,
    listActive,
    listChallengesUiOpen,
    listChallengesUiActive,
    listActiveChallengesTime,
    listChallengesUiCompleted
  ) {
    this.listOpen = listOpen;
    this.listActive = listActive;
    this.listChallengesUiOpen = listChallengesUiOpen;
    this.listChallengesUiActive = listChallengesUiActive;
    this.listActiveChallengesTime = listActiveChallengesTime;
    this.listChallengesUiCompleted = listChallengesUiCompleted;
    this.ChallengeViews = [];

    this.populateChallenges(this.listChallengesUiOpen, false);

    this.populateChallenges(this.listChallengesUiActive, true);
  }

  populateChallenges(challenges, bool) {
    if (challenges.length > 0) {
      challenges.forEach((challenge) =>
        this.addChallenge(Challenge.fromObject(challenge), bool)
      );
    }
  }

  computeActiveChallenges() {
    let validActiveIds = [];
    this.listChallengesUiActive.forEach((element) => {
      validActiveIds.push(element.$id);
    });
    return validActiveIds;
  }

  getOpenChallenges() {
    api.getChallengeDocuments().then(
      (response) => {
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

    const challengeView = new ChallengeView(bool);

    if (bool) {
      if (this.approveChallenge(challenge)) {
        challengeView.giveChallengeGreenButton();
      }

      challengeView.addEventListener("decline", (event) =>
        this.declineChallenge(challenge)
      );
      challengeView.addEventListener("approve", (event) =>
        this.finishChallenge(challenge)
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

  declineChallenge(challenge) {
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
    this.listActiveChallengesTime.splice(indexActive, 1);

    this.listChallengesUiOpen.push(challenge);

    this.changeChallengeState(
      this.computeActiveChallenges(this.listChallengesUiActive),
      this.listActiveChallengesTime,
      this.listChallengesUiCompleted
    );

    let tempArrChallenge = [];
    tempArrChallenge.push(challenge);
    this.populateChallenges(tempArrChallenge, false);
  }

  approveChallenge(challenge) {
    const indexTimeStamp = this.listChallengesUiActive.findIndex(
      (item) => item.challengeName == challenge.challengeName
    );
    if (indexTimeStamp < 0) return;

    const timeDuration = this.listActiveChallengesTime[indexTimeStamp];

    let challengeLengthMil = challenge.Length * 24 * 24 * 60 * 1000;

    let goalTime = Math.floor(challengeLengthMil + timeDuration);

    if (Date.now() > goalTime) {
      return true;
    } else false;
  }

  finishChallenge(challenge) {
    const ChallengeViews = this.ChallengeViews;

    const index = ChallengeViews.findIndex(
      (challengeView) =>
        challengeView.challenge.challengeName === challenge.challengeName
    );
    if (index < 0) return;

    console.log(this.listChallengesUiCompleted);

    if (this.approveChallenge(challenge)) {
      ChallengeViews[index].remove();
      this.ChallengeViews.splice(index, 1);

      const indexItem = this.listChallengesUiActive.findIndex(
        (item) => item.challengeName == challenge.challengeName
      );

      this.listChallengesUiActive.splice(indexItem, 1);
      this.listActiveChallengesTime.splice(indexItem, 1);

      this.listChallengesUiCompleted.push(challenge);

      console.log(this.listActiveChallengesTime);

      this.changeChallengeState(
        this.computeActiveChallenges(this.listChallengesUiActive),
        this.listActiveChallengesTime,
        this.computeActiveChallenges(this.listActiveChallengesTime)
      );

      updateScore(challenge.Score);
    } else {
      console.log("time hase not run out for this challenge ");
      return;
    }
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

    let timeNow = Date.now();
    console.log(timeNow);

    this.listActiveChallengesTime.push(timeNow);
    this.listChallengesUiActive.push(challenge);

    console.log(this.listActiveChallengesTime);

    this.changeChallengeState(
      this.computeActiveChallenges(this.listChallengesUiActive),
      this.listActiveChallengesTime,
      this.listChallengesUiCompleted
    );

    let tempArrChallenge = [];
    tempArrChallenge.push(challenge);
    this.populateChallenges(tempArrChallenge, true);
  }

  // verändert den status der aktiven und abgeschlossenen Challenges im backend
  changeChallengeState(activeChallenges, challengesTimes, completedChallenges) {
    console.log(activeChallenges);
    api
      .updateChallenges(activeChallenges, challengesTimes, completedChallenges)
      .then(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
  }
}

export default Challenges;
