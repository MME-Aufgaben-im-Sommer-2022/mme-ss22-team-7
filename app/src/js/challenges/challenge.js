class Challenge {
  constructor(
    tid,
    name,
    description,
    length,
    completed,
    Uid,
    startDate,
    endDate,
    scoreValue
  ) {
    this.tid = tid;
    this.name = name;
    this.description = description;
    this.length = length;
    this.completed = completed;
    this.Uid = Uid;
    this.startDate = startDate;
    this.endDate = endDate;
    this.scoreValue = scoreValue;

    Object.freeze(this);
  }

  static fromObject(object) {
    console.log("fromObject - Challenge");
    return new Challenge(
      object.tid,
      object.description,
      object.length,
      object.completed,
      object.Uid,
      object.startDate,
      object.startDate,
      object.endDate,
      object.scoreValue
    );
  }
}

export default Challenge;
