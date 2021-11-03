"use strict";

class Player {
    constructor(aName){
        this.gestures = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
        this.points = 0;
        this.aName = aName;

    }
    pickGesture(){
        console.log(`Pick a gesture ${this.gestures}. Type '1' for Rock \n Type '2' for Paper \n Type '3' for Scissors \n Type '4' for Lizard \n Type '5' for Spock`)
    }
}

module.exports = {
    Player:Player
}