"use strict"

const Player = require("./player")

class AI extends Player{
    constructor(aName, isWinner, randomInput){
        super(gestures, points, aName, isWinner)
        this.randomInput = randomInput
    }
}

module.exports = AI