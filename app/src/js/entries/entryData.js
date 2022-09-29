function initInputs(){

    let inputs = {

        vegEl: {},
        restEl: {},
        clothesEl: {},
        cultureEl: {},
        houseDeviceEl: {},

        //transport
        carEl : document.querySelector("#car-km-field"),
        publicTransEl : document.querySelector("#public-transport-km-field"),
        planeEl : document.querySelector("#plane-hours-field"),
        cruiseShipEl : document.querySelector("#cruise-ship-weeks-field"),
    
        //food
        vegEl_20 : document.querySelector("#veg-seas-20"),
        vegEl_40 : document.querySelector("#veg-seas-40"),
        vegEl_60 : document.querySelector("#veg-seas-60"),
        vegEl_80 : document.querySelector("#veg-seas-80"),
        vegEl_100 : document.querySelector("#veg-seas-100"),
    
        restaurantEl_20 : document.querySelector("#restaurant-food-20"),
        restaurantEl_40 : document.querySelector("#restaurant-food-40"),
        restaurantEl_60 : document.querySelector("#restaurant-food-60"),
        restaurantEl_80 : document.querySelector("#restaurant-food-80"),
        restaurantEl_100 : document.querySelector("#restaurant-food-100"),
    
        //other
        clothesEl_50 : document.querySelector("#clothes-50"),
        clothesEl_100 : document.querySelector("#clothes-100"),
        clothesEl_200 : document.querySelector("#clothes-200"),
        clothesEl_300 : document.querySelector("#clothes-300"),
    
        cultureEl_50 : document.querySelector("#culture-50"),
        cultureEl_100 : document.querySelector("#culture-100"),
        cultureEl_200 : document.querySelector("#culture-200"),
        cultureEl_350 : document.querySelector("#culture-350"),
        cultureEl_600 : document.querySelector("#culture-600"),
    
        houseDeviceEl_30 : document.querySelector("#household-devices-30"),
        houseDeviceEl_50 : document.querySelector("#household-devices-50"),
        houseDeviceEl_200 : document.querySelector("#household-devices-200"),
        houseDeviceEl_300 : document.querySelector("#household-devices-300"),
        houseDeviceEl_400 : document.querySelector("#household-devices-400"), 
    };

    //scores for radio-buttons
    inputs.vegEl.scores = [-10, -20, -30, -40, -50];
    inputs.restEl.scores = [-15, -30, -45, -60, -80];
    inputs.clothesEl.scores = [-20, -45, -70, -120, -145];
    inputs.cultureEl.scores = [-10, -20, -40, -60, -127];
    inputs.houseDeviceEl.scores = [-20, -35, -160, -225, -316];

    //scores for transport
    inputs.carEl.score = -0.1; //score per km
    inputs.publicTransEl.score = -0.01; //score per km
    inputs.planeEl.score = -36,24; //score per hour
    inputs.cruiseShipEl.score = -119; //score per week

    return inputs;
}

export { initInputs };