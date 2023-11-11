let game = {
    score: 0,
    currentGame: [],
    playerMoves: [],
    choices: ['button1', 'button2', 'button3', 'button4'],
    turnNumber: 0,
};

const newGame = () => {
    console.log("new game")
    game.score = 0;
    game.playerMoves = [];
    game.currentGame = [];
    showScore();
    addTurn();
};

const addTurn = () => {
    game.playerMoves = [];
    let randomChoice = game.choices[Math.floor(Math.random() * game.choices.length)]
    game.currentGame.push(randomChoice);
    showTurns();
};

const showScore = () => {
    document.getElementById("score").innerHTML = game.score
};

const lightsOn = (circ) => {
    document.getElementById(circ).classList.add("light");
    setTimeout(() => {
        document.getElementById(circ).classList.remove("light");
    }, 400);
}

const showTurns = () => {
    game.turnNumber = 0;
    let turns = setInterval(() => {
        lightsOn(game.currentGame[game.turnNumber]) // for the first turn, the currentGame index is at 0, so we're getting the first value, as the first turn
        game.turnNumber++; //increase the turn number
        if (game.turnNumber >= game.currentGame.length) {
            clearInterval(turns);
        }
    }, 800)
}

module.exports = {
    // exporting more than one function in this file
    game,
    newGame,
    showScore,
    addTurn,
    lightsOn,
    showTurns
}