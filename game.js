"use strict";

const prompt = require("prompt-sync")()
const {Human} = require("./human")
const {AI} = require("./ai")

class Game {
    constructor() {
        this.playerOne
        this.playerTwo
    }

    beginGame() {
        console.log(`This game is called ${this.gameName}. The rules of the game:

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
            let userInput = prompt("Press 1 for singleplayer or press 2 for multiplayer");
            if(userInput == 1){
                x = false
                this.playerOne = new Human()
                this.playerTwo = new AI()
            }
            else if(userInput == 2){
                x = false
                this.playerOne = new Human()
                this.playerTwo = new Human()
            }
            else{
                console.log("Error! Invalid option.")
            }
        }
    }
    throwHands(){
        console.log("FIGHT FIGHT FIGHT!")
        while(this.playerOne.points < 2 && this.playerTwo.points < 2){
            console.log(`${this.playerOne.aName}, choose your gesture.`)
        }
    }
}

module.exports = Game;