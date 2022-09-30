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
      this.initActiveListeners();
    } else {
      const element = ChallengeView.elementFromTemplate(false);
      this.element = element;

      this.nameLabel = element.querySelector('[name="name"]');
      this.lengthLabel = element.querySelector('[name="length"]');
      this.pointsLabel = element.querySelector('[name="points"]');
      this.acceptButtonLabel = element.querySelector('[name="accept"]');
      this.initOpenListeners();
    }
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

    this.nameLabel.innerHTML = `${value.challengeName}`;
    this.lengthLabel.innerHTML = `${value.Length}`;
    this.pointsLabel.innerHTML = `${value.Score}`;
    this.approveButtonLabel.innerHTML = `Abschließen`;
    this.declineButtonLabel.innerHTML = `Abbrechen`;
  }

  get challenge() {
    return this._challenge;
  }

  // for open challenges
  set challengeOpen(value) {
    this._challenge = value;

    this.nameLabel.innerHTML = `${value.challengeName}`;
    this.lengthLabel.innerHTML = `${value.Length}`;
    this.pointsLabel.innerHTML = `${value.Score}`;
    this.acceptButtonLabel.innerHTML = `Akzeptieren`;
  }

  get challengeOpen() {
    return this._challenge;
  }

  giveChallengeGreenButton() {
    console.log("giving challenge green button ");
    this.approveButtonLabel.classList.add("background-approve");
  }

  // differentiating active and open challenges prob. in here
  initOpenListeners() {
    this.acceptButtonLabel.addEventListener("click", this.onAccept.bind(this));
  }

  initActiveListeners() {
    this.declineButtonLabel.addEventListener(
      "click",
      this.onDecline.bind(this)
    );
    this.approveButtonLabel.addEventListener(
      "click",
      this.onApprove.bind(this)
    );
  }

  onAccept() {
    const event = new Event("accept", this);
    this.notifyAll(event);
  }

  onDecline() {
    const event = new Event("decline", this);
    this.notifyAll(event);
  }

  onApprove() {
    const event = new Event("approve", this);
    this.notifyAll(event);
  }

  remove() {
    this.element.remove();
  }
}

export default ChallengeView;
