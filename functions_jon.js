let jonSnowHealth = 100
//let jonSnowHealthString = String(jonSnowHealth)
//let jonSnowHealthString = toString(jonSnowHealth)
//let jonSnowHealthString = jonSnowHealth + ''
//let jonSnowBool = Boolean(jonSnowHealth)
//console.log(typeof jonSnowHealthString)
//console.log(jonSnowBool)

let theWinnerIs = 'Jamie is the winner'
console.log(theWinnerIs)

//Replace Jamie with Jon
let newWinnerIs = theWinnerIs.replace('Jamie','Jon')
console.log(newWinnerIs)

//Confirm if new string has been changed
if(newWinnerIs.includes('Jon')){
    console.log('Jon replaced successfully')
}

//Convert string to kebab-case   
let newWinnerLower = newWinnerIs.toLowerCase()
let newWinnerSplit = newWinnerLower.split(' ')
let newWinnerKebab = newWinnerSplit.join('-')
console.log(newWinnerKebab)

//Create a simple function to see if jon is alive or not

function isJonAlive(){
    if(jonSnowHealth > 0){
        console.log('jon is alive');
    } else{
        console.log('RIP jon snow');
    }
}

//isJonAlive()

//Create a funtion that can be used every time Jon is attacked

function surpriseAttack(attack){
    jonSnowHealth -= attack
    isJonAlive()
    console.log(`Jon has ${jonSnowHealth} remaining`)
}

surpriseAttack(20)
surpriseAttack(20)
surpriseAttack(20)
surpriseAttack(20)
surpriseAttack(20)

//Create a function that will allow two people to greet each other
//Parameters are place holders
//function greeting(person1,person2){
//    console.log(`${person1} says hello to ${person2}`)
//}

//arrow function
const greeting = (person1,person2) => console.log(`${person1} says hi to ${person2}`)

//When you invoke a function you pass the actual values
greeting('Jon', 'Sansa')

//Let create a fuction that represents a diceRoll and returns a value to the call location
function diceRoll(){
    //posible values in a 6 side dice
    let possibleRoles = [1,2,3,4,5,6]
    //randomise an index for a random value from the possibleRoles
    //(Math.floor rounds downs the integer /  the opposite is math.field / Math.random returns a number between zero to 0.99 not including 1)
    let randomNumber = Math.floor(Math.random()* possibleRoles.length)
    return possibleRoles[randomNumber]
}

let firstRoll = diceRoll();
let secondRoll = diceRoll();

console.log(firstRoll);
console.log(secondRoll);

function diceMultiplier(){
    let firstRoll = diceRoll();
    let secondRoll = diceRoll();
    console.log(firstRoll);
    console.log(secondRoll);
    return firstRoll * secondRoll
}

let multipliedValue = diceMultiplier()
console.log(multipliedValue)