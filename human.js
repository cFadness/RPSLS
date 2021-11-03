"use strict"

const prompt = require("prompt-sync")()
const {Player} = require("./player")

class Human extends Player{
    constructor(){
        console.log("Please enter your name.")
        let humanName = prompt()
        super(humanName)
        this.manualInput = manualInput
    }
    humanPickGesture(){
        pickGesture()
        gesture = prompt()
    }
}

module.exports = {
    Human:Human
}