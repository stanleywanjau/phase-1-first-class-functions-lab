// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
 const returnFirstTwoDrivers = function(){
    let firstDrivers=drivers.slice(0,2);
     return firstDrivers;
}

const returnLastTwoDrivers = function(){
    let lastDrivers=drivers.slice(2,);
    return lastDrivers;
}

const selectingDrivers = [returnFirstTwoDrivers , returnLastTwoDrivers]
   function createFareMultiplier(fare){
    return function fareMultiplier(){
        return fare * fare;
   }
}

const fareDoubler = function(fare){
    return fare * 2;
}

const fareTripler = function(fare){
    return fare * 3;
}

function selectDifferentDrivers(drivers,selectingDrivers){
    return selectingDrivers(drivers);
}