class Friend {
  //vllt noch mit mehr daten erweitern zum vergleichen im Graphen
  constructor(data) {
    this.id = data.$id;
    this.name = data.UserName;
    this.email = data.email;
    this.score = data.Score;
    //this.picture = picture;
  }
  setScore(score) {
    this.score = score;
  }


}

export default Friend;