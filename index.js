"use strict"

const prompt = require("prompt-sync")()
const {Game} = require("./game");

let rpsls = new Game("RPSLS");
rpsls.runGame();

