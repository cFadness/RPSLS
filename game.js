"use strict";

const prompt = require("prompt-sync")()
const {Human} = require("./human")
const {AI} = require("./ai")

class Game {
    constructor(aName) {
        this.playerOne
        this.playerTwo
        this.aName = aName
     
    }

    beginGame() {
        console.log(`This game is called ${this.aName}. The rules of the game:

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
        let playerOneChoice
        let playerTwoChoice
        while(this.playerOne.points < 2 && this.playerTwo.points < 2){
            console.log(`${this.playerOne.aName} Pick a gesture. \n Type '1' for Rock \n Type '2' for Paper \n Type '3' for Scissors \n Type '4' for Lizard \n Type '5' for Spock`)
            playerOneChoice = this.playerOne.pickGesture()
            console.log(`${this.playerTwo.aName} Pick a gesture. \n Type '1' for Rock \n Type '2' for Paper \n Type '3' for Scissors \n Type '4' for Lizard \n Type '5' for Spock`) // Maybe change numbers for options.
            playerTwoChoice = this.playerTwo.pickGesture()
            if(playerOneChoice == "Rock" && (playerTwoChoice == "Scissors" || playerTwoChoice == "Lizard")){
                this.playerOne.points += 1
                console.log( `${this.playerOne.aName} has chosen ${playerOneChoice}. ${this.playerTwo.aName} has chosen ${playerTwoChoice}.`) // change out playerChoice with property. Change strings to properties
                console.log(`${this.playerOne.aName} now has ${this.playerOne.points} point(s)`)
            }
            else if(playerOneChoice == "Scissors" && (playerTwoChoice == "Paper" || playerTwoChoice == "Lizard")){
                this.playerOne.points += 1
                console.log( `${this.playerOne.aName} has chosen ${playerOneChoice}. ${this.playerTwo.aName} has chosen ${playerTwoChoice}.`)
                console.log(`${this.playerOne.aName} now has ${this.playerOne.points} point(s)`)
            }
            else if(playerOneChoice == "Paper" && (playerTwoChoice == "Rock" || playerTwoChoice == "Spock")){
                this.playerOne.points += 1
                console.log( `${this.playerOne.aName} has chosen ${playerOneChoice}. ${this.playerTwo.aName} has chosen ${playerTwoChoice}.`)
                console.log(`${this.playerOne.aName} now has ${this.playerOne.points} point(s)`)
            }
            else if(playerOneChoice == "Lizard" && (playerTwoChoice == "Spock" || playerTwoChoice == "Paper")){
                this.playerOne.points += 1
                console.log( `${this.playerOne.aName} has chosen ${playerOneChoice}. ${this.playerTwo.aName} has chosen ${playerTwoChoice}.`)
                console.log(`${this.playerOne.aName} now has ${this.playerOne.points} point(s)`)
            }
            else if(playerOneChoice == "Spock" && (playerTwoChoice == "Scissors" || playerTwoChoice == "Rock")){
                this.playerOne.points += 1
                console.log( `${this.playerOne.aName} has chosen ${playerOneChoice}. ${this.playerTwo.aName} has chosen ${playerTwoChoice}.`)
                console.log(`${this.playerOne.aName} now has ${this.playerOne.points} point(s)`)
            }
            else if(playerTwoChoice == "Rock" && (playerOneChoice == "Scissors" || playerOneChoice == "Lizard")){
                this.playerTwo.points += 1
                console.log( `${this.playerOne.aName} has chosen ${playerOneChoice}. ${this.playerTwo.aName} has chosen ${playerTwoChoice}.`)
                console.log(`${this.playerTwo.aName} now has ${this.playerTwo.points} point(s)`)
            }
            else if(playerTwoChoice == "Scissors" && (playerOneChoice == "Paper" || playerOneChoice == "Lizard")){
                this.playerTwo.points += 1
                console.log( `${this.playerOne.aName} has chosen ${playerOneChoice}. ${this.playerTwo.aName} has chosen ${playerTwoChoice}.`)
                console.log(`${this.playerTwo.aName} now has ${this.playerTwo.points} point(s)`)
            }
            else if(playerTwoChoice == "Paper" && (playerOneChoice == "Rock" || playerOneChoice == "Spock")){
                this.playerTwo.points += 1
                console.log( `${this.playerOne.aName} has chosen ${playerOneChoice}. ${this.playerTwo.aName} has chosen ${playerTwoChoice}.`)
                console.log(`${this.playerTwo.aName} now has ${this.playerTwo.points} point(s)`)
            }
            else if(playerTwoChoice == "Lizard" && (playerOneChoice == "Spock" || playerOneChoice == "Paper")){
                this.playerTwo.points += 1
                console.log( `${this.playerOne.aName} has chosen ${playerOneChoice}. ${this.playerTwo.aName} has chosen ${playerTwoChoice}.`)
                console.log(`${this.playerTwo.aName} now has ${this.playerTwo.points} point(s)`)
            }
            else if(playerTwoChoice == "Spock" && (playerOneChoice == "Scissors" || playerOneChoice == "Rock")){
                this.playerTwo.points += 1
                console.log( `${this.playerOne.aName} has chosen ${playerOneChoice}. ${this.playerTwo.aName} has chosen ${playerTwoChoice}.`)
                console.log(`${this.playerTwo.aName} now has ${this.playerTwo.points} point(s)`)
            }
            else{
                console.log( `${this.playerOne.aName} has chosen ${playerOneChoice}. ${this.playerTwo.aName} has chosen ${playerTwoChoice}.`)
                console.log("Draw! No points awarded to either player.")
            }
            
        }
    }
    declareWinner() {
        if(this.playerOne.points == 2){
            console.log(`${this.playerOne.aName} Winner winner chicken dinner!`)
        }
        else {
            console.log(`${this.playerTwo.aName} Winner winner chicken dinner!`)
        }
    }
    runGame() {
        this.beginGame();
        this.playType();
        this.throwHands();
        this.declareWinner();
    }
}

module.exports = {
    Game: Game
}