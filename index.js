// Code your solution in this file!
let streetHQ = 42

function distanceFromHqInBlocks(pickUpLocation) {
    if (pickUpLocation >= 42) {
        return pickUpLocation - streetHQ;
    } else if (pickUpLocation <= 42) {
        return streetHQ - pickUpLocation
    }
}

function distanceFromHqInFeet(pickUpLocation){
    if (pickUpLocation >= 42) {
        return (pickUpLocation - streetHQ) * 264;
    } else if (pickUpLocation <= 42) {
        return (streetHQ - pickUpLocation) * 264;
    }
}

function distanceTravelledInFeet(start, end) {
    if (start >= end) {
        return (start - end) * 264;
    } else if (start <= end) {
        return (end - start) * 264;
    }
}

function calculatesFarePrice(start, end){
    const distance = distanceTravelledInFeet(start, end)
    if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance < 2000) {
        return .02 * (distance - 400);
    } else if (distance > 2000 && distance < 2500){
        return 25;
    } else {
        return 'cannot travel that far';
    }
}