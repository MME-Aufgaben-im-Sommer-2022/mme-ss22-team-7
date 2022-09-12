function initInputs(el){
    let inputs = {
        //transport
        carEl : el.document.querySelector("#car-km-field"),
        publicTransEl : el.document.querySelector("#public-transport-km-field"),
        planeEl : el.document.querySelector("#plane-hours-field"),
        cruiseShipEl : el.document.querySelector("#cruise-ship-weeks-field"),
    
        //food
        vegEl_20 : el.document.querySelector("#veg-seas-20"),
        vegEl_40 : el.document.querySelector("#veg-seas-40"),
        vegEl_60 : el.document.querySelector("#veg-seas-60"),
        vegEl_80 : el.document.querySelector("#veg-seas-80"),
        vegEl_100 : el.document.querySelector("#veg-seas-100"),
    
        restaurantEl_20 : el.document.querySelector("#restaurant-food-20"),
        restaurantEl_40 : el.document.querySelector("#restaurant-food-40"),
        restaurantEl_60 : el.document.querySelector("#restaurant-food-60"),
        restaurantEl_80 : el.document.querySelector("#restaurant-food-80"),
        restaurantEl_100 : el.document.querySelector("#restaurant-food-100"),
    
        //other
        clothesEl_50 : el.document.querySelector("#clothes-50"),
        clothesEl_100 : el.document.querySelector("#clothes-100"),
        clothesEl_200 : el.document.querySelector("#clothes-200"),
        clothesEl_300 : el.document.querySelector("#clothes-300"),
    
        cultureEl_50 : el.document.querySelector("#culture-50"),
        cultureEl_100 : el.document.querySelector("#culture-100"),
        cultureEl_200 : el.document.querySelector("#culture-200"),
        cultureEl_350 : el.document.querySelector("#culture-350"),
        cultureEl_600 : el.document.querySelector("#culture-600"),
    
        houseDeviceEl_30 : el.document.querySelector("#household-devices-30"),
        houseDeviceEl_50 : el.document.querySelector("#household-devices-50"),
        houseDeviceEl_200 : el.document.querySelector("#household-devices-200"),
        houseDeviceEl_300 : el.document.querySelector("#household-devices-300"),
        houseDeviceEl_400 : el.document.querySelector("#household-devices-400"), 
    };

    //scores
    inputs.carEl.score = -0.1; //score per km
    inputs.publicTransEl.score = -0.01; //score per km
    inputs.planeEl.score = -36,24; //score per hour
    inputs.cruiseShipEl.score = -119; //score per week

    //TODO
    inputs.vegEl_20.score = 0; //score per %
    inputs.vegEl_40.score = 0; //score per %
    inputs.vegEl_60.score = 0; //score per %
    inputs.vegEl_80.score = 0; //score per %
    inputs.vegEl_100.score = 0; //score per %
    
    inputs.restaurantEl_20.score = -15; //score per €
    inputs.restaurantEl_40.score = -30; //score per €
    inputs.restaurantEl_60.score = -45; //score per €
    inputs.restaurantEl_80.score = -60; //score per €
    inputs.restaurantEl_100.score = -80; //score per €

    inputs.clothesEl_50.score = -20; //score per €
    inputs.clothesEl_100.score = -45; //score per €
    inputs.clothesEl_200.score = -70; //score per €
    inputs.clothesEl_300.score = -120; //score per €

    inputs.cultureEl_50.score = -10; //score per €
    inputs.cultureEl_100.score = -20; //score per €
    inputs.cultureEl_200.score = -40; //score per €
    inputs.cultureEl_350.score = -60; //score per €
    inputs.cultureEl_600.score = -127; //score per €

    inputs.houseDeviceEl_30.score = -20; //score per €
    inputs.houseDeviceEl_50.score = -35; //score per €
    inputs.houseDeviceEl_200.score = -160; //score per €
    inputs.houseDeviceEl_300.score = -225; //score per €
    inputs.houseDeviceEl_400.score = -316; //score per €

    return inputs;
}

export { initInputs };