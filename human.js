"use strict"

const Player = require("./player")

class Human extends Player{
    constructor(aName, isWinner, manualInput){
        super(gestures, points, aName, isWinner)
        this.manualInput = manualInput
    }
}

module.exports = Human