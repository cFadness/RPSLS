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
        while (x){
            userInput = prompt()
            this.gesture = this.gestures[parseInt(userInput)-1]
        if(this.gesture == this.gestures[0] || this.gesture == this.gestures[1] || this.gesture == this.gestures[2] || this.gesture == this.gestures[3] || this.gesture == this.gestures[4]){ // loop?
            x = false       
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