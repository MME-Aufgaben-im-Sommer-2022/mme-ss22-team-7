/**
 * challenge.js bastelt aus dem datenobjekt eine verwendbare Instanz einer Challenge (wird dann in ChallengeView weiterverwendet)
 */

class Challenge {
  constructor(
    tid,
    name,
    length,
    completed,
    Uid,
    startDate,
    endDate,
    scoreValue,
    active
  ) {
    this.tid = tid;
    this.name = name;
    this.length = length;
    this.completed = completed;
    this.Uid = Uid;
    this.startDate = startDate;
    this.endDate = endDate;
    this.scoreValue = scoreValue;
    this.active = active;

    Object.freeze(this);
  }

  static fromObject(object) {
    return new Challenge(
      object.tid,
      object.name,
      object.length,
      object.completed,
      object.Uid,
      object.startDate,
      object.endDate,
      object.scoreValue,
      object.active
    );
  }
}

export default Challenge;
