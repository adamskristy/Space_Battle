//testing with one alien ship

// basic ship template for both player alien
class Ship {
    //all ships will have all properties and ability to shoot
    constructor(hull, firepower, accuracy){
        this.hull = hull;
        this.firepower = firepower;
        this.accuracy = accuracy;
        isDefeated: false;
    }
    shoot(){
        let enemy;
        if(enemy){
            if (Math.random() < this.accuracy) {
                enemy.hull -= this.firepower
                console.log('Hit!')
            } else {
                console.log('Miss!')
            } if (enemy.hull <= 0 ){
                this.defeatShip()
            }
        }
    }
    checkStats(){
        if(enemy){
            //comeback to this
        }
    }
}

class playerShip extends Ship {
    shoot(){
        let enemy = alienShipOne; //caling before initialized...will work or not?
        if(enemy){
            if (Math.random() < this.accuracy) {
                enemy.hull -= this.firepower
                console.log('Direct hit on enemy!')
                console.log("Alien Hull: " + enemy.hull)
            } else {
                console.log('Enemy evaded! Brace for impact')
            } if (enemy.hull <= 0 ){
                enemy.isDefeated = true;
            }
        }
        
    } 
    defeatShip(){
        enemy.isDefeated = true;
        console.log('The enemy has been destroyed. Continue?')
    }
}


class alienShip extends Ship {
      //hopefully overrides original shoot method to customize for alien
    shoot(){
        let enemy = USSHW;
            if (Math.random() < this.accuracy) {
                enemy.hull -= this.firepower
                console.log('You have been hit!')
                console.log("USSHW Hull: " + enemy.hull)
            } else {
                console.log('Enemy missed! Prepare to fire!')
            } if (enemy.hull <= 0 ){
                enemy.isDefeated = true;
            }
        }
        defeatShip(){
            enemy.isDefeated = true;
            console.log('Your ship has been destroyed! Game Over')
        }
    }
    
    

//creating player ship
const USSHW = new playerShip (20, 5, .7)

//create alien ship
const alienShipOne = new alienShip (6, 4, .8)



// start game prompt
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
    while(USSHW.hull > 0 && alienShipOne.hull > 0){
        USSHW.shoot() //player shoots
        if(alienShipOne.hull > 0) {
        //if alien is still alive
        // confirm('Enemy survived. Brace for impact')
        // alien shoots
        alienShipOne.shoot()
        // if player dies
            if(USSHW.hull <= 0) {
            console.log('Your ship has been destroyed. Mission Failed!')
            // alienShipOne.defeatShip()
            gameOver = true; // break loop?

            }
        }
        //if alien dies
        else if (alienShipOne.hull <= 0 ){
            console.log('Mission Complete')
            // USSHW.defeatShip()
            gameOver = true;// break loop
        }
    }
}


//prompt starts game
//player clicks yes and automatically shoots
//prompt with information
    //whether alien survived or died
//click prompt to either shoot alien, be shot, or leave game

//function needs to pull alien out of array and have that alien shoot
//function to start game
//functiont to shoot
//function to check stats