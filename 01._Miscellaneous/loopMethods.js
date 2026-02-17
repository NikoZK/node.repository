// .forEach .map .filter .reduce .sort .find .indexOf

// rule 1: Use loop methods whenever possible
// rule 3: only use for loops in JavaScript for finger counting
// rule 3: Ue map over forEach if you need the data afterwards

// task: double the numbers
const numbers = [1, 2, 3, 4, 5]

const doubled = numbers.map((number) => { // .map maps 1:1 to a new array
    return number * 2
})

console.log(doubled)



//Make all the difficulty levels of the balloon animals 3.0 except for Koala
const balloonAnimals = [
    { type : "Koala", difficulty: 5.0 },
    { type: "Dog", difficulty: 2.5 },
    { type: "Giraffe", difficulty: 1.5,},
]


const sameDifficultyBalloonAnimals = balloonAnimals.map((ballonAnimal) => {
    if (ballonAnimal.type !=='Koala') {
        ballonAnimal.difficulty = 3.0
    }
    return ballonAnimal
})

console.log(sameDifficultyBalloonAnimals)

// oneline with ternary statement - condition ? if true : if false
const sameDifficultyBalloonAnimalsTernary = balloonAnimals.map((balloonAnimal) => ({
    difficulty: balloonAnimals.type !== 'Koala' ? 3.0 : balloonAnimal.difficulty,
    ...balloonAnimal
}))
console.log(sameDifficultyBalloonAnimalsTernary)

numbers.map((element, index, originalArray) => console.log(element, index, originalArray))