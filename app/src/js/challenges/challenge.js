/**
 * challenge.js bastelt aus dem datenobjekt eine verwendbare Instanz einer Challenge (wird dann in ChallengeView weiterverwendet)
 */

class Challenge {
  constructor(tid, name, length, scoreValue) {
    this.tid = tid;
    this.name = name;
    this.length = length;
    this.scoreValue = scoreValue;

    Object.freeze(this);
  }

  static fromObject(object) {
    return new Challenge(
      object.tid,
      object.name,
      object.length,
      object.scoreValue
    );
  }
}

export default Challenge;
