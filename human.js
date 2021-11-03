"use strict"

const prompt = require("prompt-sync")()
const {Player} = require("./player")

class Human extends Player{
    constructor(){
        console.log("Please enter your name.")
        let humanName = prompt()
        super(humanName)
    }
    pickGesture(){
        let x = true
        let userInput
        let gesture
        while (x){
            userInput = prompt()
            gesture = this.gestures[parseInt(userInput)-1]
        if(gesture == "Rock" ||gesture == "Paper" ||gesture == "Scissors" ||gesture == "Lizard" ||gesture == "Spock"){
            x = false 
            return gesture  
             
        }
        else {
            console.log("Invalid entry.")
        }
    }
}
}

module.exports = {
    Human:Human
}