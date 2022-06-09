// Code your solution in this file!
function distanceFromHqInBlocks(customerStreet) {
    return Math.abs(42-customerStreet);
}

/*
function distanceFromHqInFeet(customerStreet) {
    return (264 * Math.abs(42-customerStreet));
}
*/

function distanceFromHqInFeet(customerStreet) {
    return 264 * distanceFromHqInBlocks(customerStreet);
} 


function distanceTravelledInFeet(start, destination) {
    return Math.abs(264 * (start - destination));
}


/*
function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) <= 400) {
        return 0
    } else if (distanceTravelledInFeet(start, destination) <= 2000) {
        return (distanceTravelledInFeet(start, destination) - 400) * .02
    } else if (distanceTravelledInFeet(start, destination) <= 2500) {
        return 25
    } else {
        return 'cannot travel that far';
    }
}
*/

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
    if (distance <= 400) {
        return 0;
    } else if (distance <= 2000) {
        return (distance - 400) * .02;
    } else if (distance <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}