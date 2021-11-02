"use strict";

class Player {
    constructor(aName, isWinner){
        this.gestures = ["Rock", "Paper", "Scissors", "Lizards", "Spock"];
        this.points = 0;
        this.aName = aName;
        this.isWinner = isWinner;

    }
}

module.exports = Player;