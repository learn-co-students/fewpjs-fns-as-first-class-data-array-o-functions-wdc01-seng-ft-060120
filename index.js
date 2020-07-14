
function wakeDog(dogName, dogBreed) {
    const message = `Wake ${dogName} the ${dogBreed}`;
    console.log(message);
    return message;
}

function leashDog(dogName, dogBreed) {
    const message = `Leash ${dogName} the ${dogBreed}`;
    console.log(message);
    return message;   
}

function walkToPark(dogName, dogBreed) {
    const message = `Walk to the park with ${dogName} the ${dogBreed}`;
    console.log(message);
    return message;
}

function throwFrisbee(dogName, dogBreed) {
    const message = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    console.log(message);
    return message;
}

function walkHome(dogName, dogBreed) {
    const message = `Walk home with ${dogName} the ${dogBreed}`;
    console.log(message);
    return message;
}

function unleashDog(dogName, dogBreed) {
    const message = `Unleash ${dogName} the ${dogBreed}`
    console.log(message);
    return message;
}

const routine = [
    wakeDog,
    leashDog,
    walkToPark,
    throwFrisbee,
    walkHome,
    unleashDog
];

function exerciseDog(dogName, dogBreed) {
    const messages = [];
    for (let i=0; i<routine.length; i++){
        messages.push(routine[i](dogName, dogBreed));
    }
    return messages;
}
