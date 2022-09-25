export const Server = {
    endpoint:'https://appwrite.software-engineering.education/v1',
    project:'62ed22f3b5f7f7c609a8',
    databaseID:'6311ece9c6ebefc4b0f0', //greenbookDB
    userCol:'6311ed55783449414806',//Users
    challengesCol:'6311ed940fc46037cbac',//Challenges
    entriesCol:'63149d16cfc64429e974', //Entries
    storage:"632df784dc50c6e9ec45", //Storage
};

export function randColor () {
    let color = colors[Math.floor(Math.random()*colors.length)];
    colors.splice(colors.indexOf(color), 1);
    return color;
    
}

const colors = [
    '#4dc9f6',
    '#f67019',
    '#f53794',
    '#537bc4',
    '#acc236',
    '#166a8f',
    '#00a950',
    '#58595b',
    '#8549ba'
  ];