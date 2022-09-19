import { Observable, Event } from "../utils/Observable.js";

/**
 * ChallengeView repräsentiert einzelne Challenges und erstellt diese passend zu der jeweiligen Art
 */

class ChallengeView extends Observable {
  constructor(bool) {
    super();

    if (bool) {
      const element = ChallengeView.elementFromTemplate(true);
      this.element = element;

      this.nameLabel = element.querySelector('[name="name"]');
      this.lengthLabel = element.querySelector('[name="length"]');
      this.pointsLabel = element.querySelector('[name="points"]');
      this.approveButtonLabel = element.querySelector('[name="approve"]');
      this.declineButtonLabel = element.querySelector('[name="decline"]');
    } else {
      const element = ChallengeView.elementFromTemplate(false);
      this.element = element;

      this.nameLabel = element.querySelector('[name="name"]');
      this.lengthLabel = element.querySelector('[name="length"]');
      this.pointsLabel = element.querySelector('[name="points"]');
      this.approveButtonLabel = element.querySelector('[name="accept"]');
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
    if (bool) {
      element.innerHTML = ChallengeView.templateActive;
    } else {
      element.innerHTML = ChallengeView.templateOpen;
    }

    return element.querySelector("li");
  }

  // for active challenges
  set challenge(value) {
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
    this._challenge = value;

    this.nameLabel.innerHTML = `${value.name}`;
    this.lengthLabel.innerHTML = `${value.length}`;
    this.pointsLabel.innerHTML = `${value.scoreValue}`;
    this.approveButtonLabel.innerHTML = `Akzeptieren`;
  }

  get challengeOpen() {
    return this._challenge;
  }

  // differentiating active and open challenges prob. in here
  initListeners() {
    console.log("in initListeners");
  }
}

export default ChallengeView;
