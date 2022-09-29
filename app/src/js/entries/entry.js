import { initInputs } from "./entries/entryData.js";

const inputs = initInputs();

function getEntryData(){
    let entryArray = [];

    //question 1
    
    if(document.querySelector("#car-km-field").value != ""){
        let obj = {
            name : "car",
            question : 1,
            el : "#car-km-field",
            value : parseFloat(document.querySelector("#car-km-field").value) * inputs.carEl.score
        };
        entryArray.push(obj);
        document.querySelector("#car-km-field").value = "";
    }
    
    if(document.querySelector("#public-transport-km-field").value != ""){
        let obj = {
            name : "public transport",
            question : 1,
            el : "#public-transport-km-field",
            value : parseFloat(document.querySelector("#public-transport-km-field").value) * inputs.publicTransEl.score
        };
        entryArray.push(obj);
        document.querySelector("#public-transport-km-field").value = "";
    }
    
    if(document.querySelector("#plane-hours-field").value != ""){
        let obj = {
            name : "plane",
            question : 1,
            el : "#plane-hours-field",
            value : parseFloat(document.querySelector("#plane-hours-field").value) * inputs.planeEl.score
        };
        entryArray.push(obj);
        document.querySelector("#plane-hours-field").value = "";
    }
    
    if(document.querySelector("#cruise-ship-weeks-field").value != ""){
        let obj = {
            name : "cruise ship",
            question : 1,
            el : "#cruise-ship-weeks-field",
            value : parseFloat(document.querySelector("#cruise-ship-weeks-field").value) * inputs.cruiseShipEl.score
        };
        entryArray.push(obj);
        document.querySelector("#cruise-ship-weeks-field").value = "";
    }
    
    //question 2
    if(document.querySelector('input[name="veg-seas"]:checked') != null){
        if(document.querySelector('input[name="veg-seas"]:checked').value != null){
            let index = parseInt(document.querySelector('input[name="veg-seas"]:checked').value);
            let value = inputs.vegEl.scores[index];
            let obj = {
                name : "seasonal vegetables",
                question : 2,
                el : document.querySelector('input[name="veg-seas"]:checked'),
                value : value
            };
            entryArray.push(obj);
            document.querySelector('input[name="veg-seas"]:checked').checked = false;
        }
    }
    //question 3
    if(document.querySelector('input[name="restaurant-food"]:checked') != null){
        if(document.querySelector('input[name="restaurant-food"]:checked').value != null){
            let obj = {
                name : "restaurant food",
                question : 3,
                el : document.querySelector('input[name="restaurant-food"]:checked'),
                value : document.querySelector('input[name="restaurant-food"]:checked').value
            };
            entryArray.push(obj);
            document.querySelector('input[name="restaurant-food"]:checked').checked = false;
        }
    }
    //question 4
    if(document.querySelector('input[name="clothes"]:checked') != null){
        if(document.querySelector('input[name="clothes"]:checked').value != null){
            let obj = {
                name : "clothes",
                question : 4,
                el : document.querySelector('input[name="clothes"]:checked'),
                value : document.querySelector('input[name="clothes"]:checked').value
            };
            entryArray.push(obj);
            document.querySelector('input[name="clothes"]:checked').checked = false;
        }
    }
    //question 5
    if(document.querySelector('input[name="culture"]:checked') != null){
        if(document.querySelector('input[name="culture"]:checked').value != null){
            let obj = {
                name : "culture",
                question : 5,
                el : document.querySelector('input[name="culture"]:checked'),
                value : document.querySelector('input[name="culture"]:checked').value
            };
            entryArray.push(obj);
            document.querySelector('input[name="culture"]:checked').checked = false;
        }
    }
    //question 6
    if(document.querySelector('input[name="household-devices"]:checked') != null){
        if(document.querySelector('input[name="household-devices"]:checked').value != null){
            let obj = {
                name : "household devices",
                question : 6,
                el : document.querySelector('input[name="household-devices"]:checked'),
                value : document.querySelector('input[name="household-devices"]:checked').value
            };
            entryArray.push(obj);
            document.querySelector('input[name="household-devices"]:checked').checked = false;
        }
    }

    return entryArray;
}

export {getEntryData};