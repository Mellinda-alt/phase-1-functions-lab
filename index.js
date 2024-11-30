// Code your solution in this file!

function distanceFromHqInBlocks(locationPoint) {
    if (locationPoint < 42) {
        return 42 - locationPoint;
        
    } else {
        return locationPoint - 42;
    }
    
}

function distanceFromHqInFeet(locationPoint) {
    const block = distanceFromHqInBlocks(locationPoint);
    const feetLong = 264;
    return block * feetLong;
}

function distanceTravelledInFeet(start, destination) {
    const travel = Math.abs(start - destination) * 264;
    return travel;
}


function calculatesFarePrice(start, destination) {
    const travel = Math.abs(start - destination) * 264;

    if (travel > 2500) {
        return 'cannot travel that far';
    } else if (travel > 2000) {
        return 25;
    } else if (travel > 400) {
        return (travel - 400) * 0.02;
    } else {
        return 0;
    }
    
}
