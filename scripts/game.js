let game = {
    score: 0,
    currentGame: [],
    playerMoves: [],
    choices: ['button1', 'button2', 'button3', 'button4'],
}

const newGame = () => {
    game.score = 0;
    game.playerMoves = [];
    game.currentGame = [];
    showScore();
    // addTurn();
}

const showScore = () => {
    document.getElementById("score").innerHTML = game.score
}

module.exports = {
    // exporting more than one function in this file
    game,
    newGame,
    showScore
}