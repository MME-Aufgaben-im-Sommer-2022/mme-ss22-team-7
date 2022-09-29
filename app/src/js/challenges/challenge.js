/**
 * challenge.js bastelt aus dem datenobjekt eine verwendbare Instanz einer Challenge (wird dann in ChallengeView weiterverwendet)
 */

class Challenge {
  constructor(challengeName, Score, Length, $id) {
    this.challengeName = challengeName;
    this.Score = Score;
    this.Length = Length;
    this.$id = $id;
    Object.freeze(this);
  }

  static fromObject(object) {
    return new Challenge(
      object.challengeName,
      object.Score,
      object.Length,
      object.$id
    );
  }
}

export default Challenge;
