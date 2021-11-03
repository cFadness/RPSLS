"use strict"

const {Player} = require("./player")

class AI extends Player{
    constructor(aName, isWinner, randomInput){
        super(gestures, points, aName, isWinner)
        this.randomInput = randomInput
    }
    aiPickGesture(){
        pickGesture()
        gesture = Math.floor(Math.random() * 5)+1
    }
}

module.exports = {
    AI:AI
}