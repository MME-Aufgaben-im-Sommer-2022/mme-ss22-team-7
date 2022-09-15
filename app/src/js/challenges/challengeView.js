import { Observable, Event } from "../utils/Observable.js";
//import challengeHTML from "../../html/challenges.html";

class ChallengeView extends Observable {
  constructor() {
    super();

    const element = ChallengeView.elementFromTemplate();
    this.element = element;

    this.nameLabel = element.querySelector(".name");
    this.lengthLabel = element.querySelector(".length");
    this.pointsLabel = element.querySelector(".points");
    //this.descriptionLabel = element.querySelector(".description");
    this.approveButtonLabel = element.querySelector(".approve");
    this.declineButtonLabel = element.querySelector(".decline");

    this.initListeners();
  }

  static get templateActive() {
    return document
      .querySelector("#challenge-widget-template")
      .innerHTML.trim();
  }

  static elementFromTemplate() {
    console.log("element from template");
    const element = document.createElement("div");
    console.log(ChallengeView.templateActive);
    element.innerHTML = ChallengeView.templateActive;
    console.log(element);

    return element.querySelector("li");
  }

  set challenge(value) {
    console.log("in challenge:");
    console.log(value);
    this._challenge = value;

    this.nameLabel.innerHTML = `${value.name}`;
    this.lengthLabel.innerHTML = `${value.length}`;
    this.pointsLabel.innerHTML = `${value.points}`;
    //this.descriptionLabel.innerHTML = `${value.description}`;
    this.approveButtonLabel.innerHTML = `${value.approveButton}`;
    this.declineButtonLabel.innerHTML = `${value.declineButton}`;
  }

  get challenge() {
    return this._challenge;
  }

  initListeners() {
    console.log("in initListeners");
  }
}

export default ChallengeView;
