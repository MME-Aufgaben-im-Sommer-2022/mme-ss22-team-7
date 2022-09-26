import { randColor } from "./utils/config.js";
var options= {day: 'numeric', month: 'numeric',year:""};
const chartEl = document.getElementById("diagram-canvas").getContext("2d");
var maxElements = 9;
//source https://bobbyhadz.com/blog/javascript-get-dates-for-past-7-days
const past10Days = [...Array(7).keys()].map(index => {
    var date = new Date();
    date.setDate(date.getDate()-7 + index);
    date =date.toLocaleDateString(options);
    console.log(date);
    return date;
  });
const data = {
  labels: past10Days,
  datasets: [
  ]
};
const config = {
    type: 'line',
    data: data,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'C02 Score History'
        }
      }
},};

const chart = new Chart(chartEl, config);

export function addDataset(userName, score){
    if(maxElements>0){
        maxElements--;
        const newDataset ={
            label: userName,
            borderColor: randColor(),
            data: score,
        }
        chart.data.datasets.push(newDataset);
        chart.update();
    }
      
      }


