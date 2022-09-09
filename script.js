//trying to make game more modular with functions

class Ship {
    constructor(hull, firepower, accuracy){
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
        isDefeated: false;
    }
}
//creation of aliens, not sure can make work, will try
function randomInt(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  function createAlienShip() {
    let hull = randomInt(3, 6)
    let firepower = randomInt(2, 4)
    let accuracy = (randomInt(6, 8)) / 10
    return new Ship(hull, firepower, accuracy)
    }
  function createAlienArray(numShips) {
    let arr = []
      for (let i = 0; i < numShips; i++) {
        arr.push(createAlienShip())
      }
    return arr;
    }
  let alienArray = createAlienArray(6)


  //player attack function
function playerAttack(enemy) {
            if (Math.random() < this.accuracy) {    //if the player attacks and alien dies so we shift first ship from the alienarray and move on to the next ship
                enemy.hull -= this.firepower
                checkAlienStats(enemy)
                setTimeout(() => {
                    alert('You defeated the enemy')
                        alienArray.shift()
                        newBattle(alienArray)
                }, '1000')
            //     console.log('Direct hit on enemy!')                             ///////We can add this later////
            //     console.log("Alien Hull: " + enemy.hull)
            // } else {
            //     console.log('Enemy evaded! Brace for impact')
            // } if (enemy.hull <= 0 ){
            //     enemy.isDefeated = true;
            // }
            }else{  
                alert('Direct hit on enemy!')                 ///if the alien still survives then thet attack the player
                alienAttack(enemy)
                }
                                          ///if we dont hit the alien at all and miss the shot completly they attack us
            else {
                alert('Enemy evaded. Brace for impact')
                alienAttack(enemy)
        }
    }
//alien attack function
function alienAttack(enemy) {
    if (Math.random() < this.accuracy) {
        enemy.hull -= this.firepower
        checkPlayerStats()

        setTimeout(() => {
            alert('Your ship has been destroyed! Game Over')
                newBattle(a)
        }, '1000')

        } 
        else {
            alert('You have been hit! USSHW Hull: ' + enemy.hull)
        } 
        else {
            alert('Enemy missed! Prepare to fire!')
            playerAttack(enemy)
        }
    }

//creating player ship
const USSHW = new Ship (20, 5, .7)
//create alien ship, one for testing
const alienShipOne = new Ship (6, 4, .8)


///////////////////////////
//// Gameplay
///////////////////////////


// give html time to load
setTimeout(() => {
    let startMessage = window.confirm('The fate of Earth is in your hands. Are you ready?');
    if (startMessage) {
        startGame()
    }
}, '3000');


// function for starting the game
function startGame () {
    // start battle function
    if (confirm('Prepare for battle')) {
        battle()
    }
    // else when player cancels
    else {
        confirm('Mission Failed')
    }
}



function battle(enemy){ // in both battle and new battle functions player attacks the enemy
    playerAttack(alienArray[0])   
}

function newBattle(){
    if(alienArray.length != 0){
        checkPlayerStats(alienArray[0])
        setTimeout(() => {
            if (confirm('More enemies are on the way. Do you want to continue attacking?')){
                battle(enemy)
            }else {
                confirm('Mission failed. You lose!')
            }
        }, '1000')
    }else {
        alert('You defeated all the alienships! You win!')   //to do: give the user another chance to play again???
    }
}


//how to end the game
if (alienArray.length === 0 ){
    //gameover
    console.log('Mission Complete!')
}



//function to check player stats
function checkPlayerStats(enemy){
    playerStats.innerHTML = `Hull: ${USSHW.hull}<br>Firepower: ${USSHW.firepower}<br>Accuracy: ${USSHW.accuracy}`
}
//function to check enemy stats
function checkAlienStats(){
    enemyStats.innerHTML = `Hull: ${USSHW.hull}<br>Firepower: ${USSHW.firepower}<br>Accuracy: ${USSHW.accuracy}`
}