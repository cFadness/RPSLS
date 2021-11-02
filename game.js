"use strict";

class Game {
    constructor(rules, theGestures, gameName) {
        this.rules = rules;
        this.theGestures = theGestures;
        this.gameName = gameName;
    }

    beginGame() {
    console.log(`This game is called ${this.gameName}. The rules of the game. 
    Each player will input either "rock" "scissors" "paper" "lizard" "spock".
    Rock crushes Scissors  
    Scissors cuts Paper 
    Paper covers Rock 
    Rock crushes Lizard 
    Lizard poisons Spock 
    Spock smashes Scissors 
    Scissors decapitates Lizard 
    Lizard eats Paper 
    Paper disproves Spock 
    Spock vaporizes Rock
    The winner of each round is awarded 1 point, the first player to reach 2 points wins the game`)
    }
    playType() {
    let x = true
    while(x === true){
        userInput = prompt("Press 1 for singleplayer or press 2 for multiplayer");
        if(userInput == 1){
            x = false
            // enter singleplayer function
        }
        else if(userInput == 2){
            // enter multiplayer function
            x = false
        }
        else{
            console.log("Error! Invalid option.")
        }
        }
    }
}

module.exports = Game;