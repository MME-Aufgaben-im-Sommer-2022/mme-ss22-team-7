import Entry from "resources/js/entries.js";
import Observable from "./utils/Observable";


function initEntry(){
    let entryEl = document.querySelector("#entry-popup"),
    entry = new Entry(entryEl);
    initInputs(entry);
    initEvents(entry);
}
function initInputs(entry){
entry.inputs = {
    //transport
    carEl = entry.el.querySelector("#car-km-field"),
    publicTransEl = entry.el.querySelector("#public-transport-km-field"),
    planeEl = entry.el.querySelector("#plane-hours-field"),
    cruiseShipEl = entry.el.querySelector("#cruise-ship-weeks-field"),

    //food
    vegEl_20 = entry.el.querySelector("#veg-seas-20"),
    vegEl_40 = entry.el.querySelector("#veg-seas-40"),
    vegEl_60 = entry.el.querySelector("#veg-seas-60"),
    vegEl_80 = entry.el.querySelector("#veg-seas-80"),
    vegEl_100 = entry.el.querySelector("#veg-seas-100"),

    restaurantEl_20 = entry.el.querySelector("#restaurant-food-20"),
    restaurantEl_40 = entry.el.querySelector("#restaurant-food-40"),
    restaurantEl_60 = entry.el.querySelector("#restaurant-food-60"),
    restaurantEl_80 = entry.el.querySelector("#restaurant-food-80"),
    restaurantEl_100 = entry.el.querySelector("#restaurant-food-100"),

    //other
    clothesEl_50 = entry.el.querySelector("#clothes-50"),
    clothesEl_100 = entry.el.querySelector("#clothes-100"),
    clothesEl_200 = entry.el.querySelector("#clothes-200"),
    clothesEl_300 = entry.el.querySelector("#clothes-300"),

    cultureEl_50 = entry.el.querySelector("#culture-50"),
    cultureEl_100 = entry.el.querySelector("#culture-100"),
    cultureEl_200 = entry.el.querySelector("#culture-200"),
    cultureEl_300 = entry.el.querySelector("#culture-300"),
    cultureEl_600 = entry.el.querySelector("#culture-600"),

    houseDeviceEl_30 = entry.el.querySelector("#household-devices-30"),
    houseDeviceEl_50 = entry.el.querySelector("#household-devices-50"),
    houseDeviceEl_200 = entry.el.querySelector("#household-devices-200"),
    houseDeviceEl_300 = entry.el.querySelector("#household-devices-300"),
    houseDeviceEl_400 = entry.el.querySelector("#household-devices-400"),





    
    
};
}



class EntryView extends Observable{
    constructor(entry){
        this.entry = entry;

    }
    
}