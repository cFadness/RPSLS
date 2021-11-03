"use strict"
const prompt = require("prompt-sync")()
const {Player} = require("./player")

class AI extends Player{
    constructor(){
        console.log("Please enter your name.")
        let aiName = prompt()
        super(aiName)
        
    }
    pickGesture(){
        let randomInput = Math.floor(Math.random() * 5)
        let gesture = this.gestures[randomInput]
        return gesture

    }
}

module.exports = {
    AI:AI
}