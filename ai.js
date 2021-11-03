"use strict"

const {Player} = require("./player")

class AI extends Player{
    constructor(aName, isWinner, randomInput){
        super(gestures, points, aName, isWinner)
        this.randomInput = randomInput
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