//hoisting
console.log(getRandomInt(0, 10))

//JavaScript: functions as first-class citizens

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min)
}

//Anonymous function
const getRandomIntAnonumousFunction = function(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min)
};

//Arrow function =>
const getRandomIntArrowFunction = (min, max) => {
    return Math.floor(Math.random() * (max + 1 - min) + min)
};

//JavaScript: functions as first-class citizens

//A callback function is a function that is passed as an argument to another function
function genericActionPerformer(name, action) { // (string, function refrence)
    return action(name);
}

//task: eat, Valdemar
//create a callback function and use the genericActionPerformer to
//console.log Valdemar is eating

function eatingAction(name) {
    return `${name} is eating`;
}
console.log(genericActionPerformer('Valdemar', eatingAction))

// task, run, Sidi
//declare an anonympus function called runningAction
//make it return ´sidi is running´
//console.log it

const runningAction = (name) => {
    return `${name} is running`
}
console.log(genericActionPerformer('sidi', runningAction))

// task: extra challenge
//In a single line below write
//Kristian is laughing

console.log(genericActionPerformer('Kristian ', (name) => `${name}` + "is laughing"))