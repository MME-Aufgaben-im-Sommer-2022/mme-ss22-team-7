import { Observable, Event } from "../utils/Observable.js";

class ChallengeView extends Observable {
  constructor(bool) {
    super();

    if (bool) {
      const element = ChallengeView.elementFromTemplate(true);
      this.element = element;

      this.nameLabel = element.querySelector(".name");
      this.lengthLabel = element.querySelector(".length");
      this.pointsLabel = element.querySelector(".scoreValue");
      this.approveButtonLabel = element.querySelector(".approve");
      this.declineButtonLabel = element.querySelector(".decline");
    } else {
      const element = ChallengeView.elementFromTemplate(false);
      this.element = element;

      this.nameLabel = element.querySelector(".name");
      this.lengthLabel = element.querySelector(".length");
      this.pointsLabel = element.querySelector(".scoreValue");
      this.approveButtonLabel = element.querySelector(".accept");
    }

    // listeners also devided into active nad open?
    this.initListeners();
  }

  static get templateActive() {
    return document
      .querySelector("#challenge-widget-template")
      .innerHTML.trim();
  }

  static get templateOpen() {
    return document
      .querySelector("#challenge-widget-template-open")
      .innerHTML.trim();
  }

  static elementFromTemplate(bool) {
    const element = document.createElement("div");
    console.log(ChallengeView.templateActive);
    if (bool) {
      element.innerHTML = ChallengeView.templateActive;
    } else {
      element.innerHTML = ChallengeView.templateOpen;
    }
    console.log(element);

    return element.querySelector("li");
  }

  // for active challenges
  set challenge(value) {
    console.log(value);
    this._challenge = value;

    this.nameLabel.innerHTML = `${value.name}`;
    this.lengthLabel.innerHTML = `${value.length}`;
    this.pointsLabel.innerHTML = `${value.scoreValue}`;
    this.approveButtonLabel.innerHTML = `Abschließen`;
    this.declineButtonLabel.innerHTML = `Abbrechen`;
  }

  get challenge() {
    return this._challenge;
  }

  // for open challenges
  set challengeOpen(value) {
    console.log(value);
    this._challenge = value;

    this.nameLabel.innerHTML = `${value.name}`;
    this.lengthLabel.innerHTML = `${value.length}`;
    this.pointsLabel.innerHTML = `${value.scoreValue}`;
    this.approveButtonLabel.innerHTML = `Akzeptieren`;
  }

  get challengeOpen() {
    return this._challenge;
  }

  // differentiating active and open challenges prob. n here
  initListeners() {
    console.log("in initListeners");
  }
}

export default ChallengeView;
