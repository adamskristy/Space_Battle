//start with ship class with default properties
//create player ship and alien ship
//randomize alien ship properties
//create alien array (6)
//pull aliens out of array
//attack method decrease ship properties
//list stats?
//continue or end game


// QUESTIONS
//determine whose shooting?
//how to start game
//better idea for prompt?

// basic ship template for both player alien
class Ship {
    //all ships will have all properties and ability to shoot
    constructor(hull, firepower, accuracy){
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
        // isAlive = true;
    }
    shoot(){
        let enemy = this.findTarget()
        if(enemy){ //if there is an enemy, so ship actually shoots at
            if (Math.random() < this.accuracy) {
                enemy.hull -= this.firepower
                console.log('Direct Hit!')
                console.log(`Enemy Hull ${alienShipOne.hull}`)
            } else {
                console.log('Enemy evaded!')
            } if (enemy.hull <= 0 ){
                this.defeatShip()
            }
        }
    }
    checkStats(){

    }
}

class playerShip extends Ship {
    //if enemies still in array, take out one
    findTarget(){
        if (alienArray.length > 0) {
            let enemy = alienArray.pop() //removes last alien?
                return enemy;
        }
    }
    defeatShip(){
       //if player does not continue game
       // change to if hull is less than 0?
        if(!confirm('The enemy has been destroyed. Continue?')){
            gameOver = true;
            console.log('Retreat!')
        }
    }
}


class alienShip extends Ship {
    findTarget() {
        let enemy = USSHW;
        return enemy;
    }
    //hopefully overrides original shoot method to customize for alien
    shoot(){
        let enemy = this.findTarget()
        if(enemy){ //if there is an enemy, so ship actually shoots at
            if (Math.random() < this.accuracy) {
                enemy.hull -= this.firepower
                console.log('You have been hit!')
                console.log(`Enemy Hull ${USSHW.hull}`)
            } else {
                console.log('That was a close call')
            } if (enemy.hull <= 0 ){
                this.defeatShip()
            }
        }
    }
    defeatShip(){
        gameOver = true;
        console.log('Your ship has been destroyed!')
    }
    
}

//old player ship
// class playerShip extends Ship{
//     attack(){
//         //check is aliens available
//         if (enemyArray.length > 0) {
//         //if enemies still in array will take one out
//             let enemy = enemyArray.pop()
//             //if accuracy within range
//             if (Math.random() < this.accuracy) {
//             //decrement hull by firepower amount
//             enemy.hull -= this.firepower
//             console.log("Direct Hit!")
//             } else {
//             console.log('Enemy Evaded!')
//             }
//             if (enemy.hull <= 0) {
//             console.log('Enemy Ship Destroyed!')
//             }
//         }
//     }
// }


//function to randomize properties
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min))
}
//create new alien ships with random properties
const createAlienShip = function(){
    const hull = randomInt(3, 6)
    const firepower = randomInt(2, 4)
    const accuracy = randomInt (6, 8) / 10
    return new alienShip(hull, firepower, accuracy)
}
//function to create alien array
const createAlienArray = function(numShips) {
    const arr = []
    for (let i = 0; i < numShips; i++) {
        arr.push(createAlienShip())
    }
    return arr;
}

// //creates alien ship with random properties and array object
//     alienArray(n){
//         let enemyArray = new Array
//         for(let i = 0; i < n; i++){
//         const hull = Math.floor(Math.random() * (7 - 3) + 3)
//         const firepower = Math.floor(Math.random() * (5 - 2) + 2)
//         const accuracy = Math.floor(Math.random() * (9 - 6) + 6) / 10
//         const alienShip = new Ship(hull, firepower, accuracy)
//         enemyArray.push(alienShip)
//     }
//     return enemyArray
// }

//creating new alien array with 6 ships
const alienArray = createAlienArray(6);

// console.log(alienArray[0])
// //{hull: 0, firepower: 1, accuracy: 0}
// console.log(alienArray[1])
// //{hull: 1, firepower: 0, accuracy: 0.1}
// console.log(alienArray[2])
// //{hull: 2, firepower: 1, accuracy: 0.1}
// console.log(alienArray[3])
// //{hull: 2, firepower: 0, accuracy: 0.1}
// console.log(alienArray[4])
// //{hull: 1, firepower: 0, accuracy: 0}
// console.log(alienArray[5])
// //{hull: 2, firepower: 0, accuracy: 0}

//creating player ship
const USSHW = new playerShip (20, 5, .7)


// start game prompt
setTimeout(() => {
    let startMessage = window.confirm('The fate of Earth is in your hands. Are you ready?');
    if (startMessage) {
        startGame()
    }
}, '5000');

// function for starting the game
function startGame () {    
    // start battle function
    if (confirm('Prepare for battle')) {
        gameOn()
    }
    // else when player cancels
    else {
        confirm('Mission Failed')
    }
}


//ending conditions: player dies, alien dies, retreat
let gameOver = false; 

function gameOn(){
    while(gameOver == false){
        USSHW.shoot() //player shoots
        //insert prompt that tells if alien alive or dead
        if(alienArray.length > 0){ //if alien array is more than zero
            alienArray[0].shoot() // first alien shoots?
        } else if (gameOver == true) {
            //determine which gameOver
            //message prompt
        }
    }
}


//if alien array = 0, then player wins the game



//prompt starts game
//player clicks yes and automatically shoots
//prompt with information
    //whether alien survived or died
//click prompt to either shoot alien, be shot, or leave game

//add function to check stats?
//function needs to pull alien out of array and have that alien shoot



