/**
 * challenge.js bastelt aus dem datenobjekt eine verwendbare Instanz einer Challenge (wird dann in ChallengeView weiterverwendet)
 */

class Challenge {
  constructor(tid, name, scoreValue, length) {
    this.tid = tid;
    this.name = name;
    this.scoreValue = scoreValue;

    this.length = length;

    Object.freeze(this);
  }

  static fromObject(object) {
    return new Challenge(
      object.tid,
      object.name,
      object.scoreValue,
      object.length
    );
  }
}

export default Challenge;
