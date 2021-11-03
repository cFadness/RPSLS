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
        let userInput = prompt()
        let gesture = this.gestures[parseInt(userInput)-1]
        return gesture
    }
}

module.exports = {
    Human:Human
}