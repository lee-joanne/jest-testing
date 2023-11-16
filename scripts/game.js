let game = {
    score: 0,
    currentGame: [],
    playerMoves: [],
    choices: ['button1', 'button2', 'button3', 'button4'],
    turnNumber: 0,
}; // initialize the game object

function newGame() {
    game.currentGame = []; // empty current game
    game.playerMoves = []; // empty player moves
    game.score = 0; // score

    for (let circle of document.getElementsByClassName("circle")) { // sets up event listeners for users to click when addTurn called
        if (circle.getAttribute("data-listener") !== "true") {
            circle.addEventListener("click", (e) => {
                if (game.currentGame.length > 0 && !game.turnInProgress) { // makes sure users does not click buttons until game length bigger than 1 and turn not in progress
                    let move = e.target.getAttribute("id");
                    game.lastButton = move;
                    game.playerMoves.push(move);
                    lightsOn(move); // turn on the lights with each player's move
                    playerTurn(); // check to see if player move is correct
                }
            });
            circle.setAttribute("data-listener", "true"); // set data listeners to true
        }
    }
    showScore();
    addTurn();
}

const playerTurn = () => {
    let i = game.playerMoves.length - 1;
    if (game.currentGame[i] === game.playerMoves[i]) {
        if (game.currentGame.length == game.playerMoves.length) {
            game.score++;
            showScore();
            addTurn();
        }
    } else {
        alert("Wrong move!");
        newGame();
    }
};

const addTurn = () => {
    game.playerMoves = []; // empty player moves
    let randomChoice = game.choices[Math.floor(Math.random() * game.choices.length)] // randomize choices
    game.currentGame.push(randomChoice); // add choices to the current game
    showTurns(); // show turns
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
    game.turnInProgress = true; // computer is going, turn in progress true
    game.turnNumber = 0;
    let turns = setInterval(() => {
        lightsOn(game.currentGame[game.turnNumber]) // for the first turn, the currentGame index is at 0, so we're getting the first value, as the first turn
        game.turnNumber++; //increase the turn number
        if (game.turnNumber >= game.currentGame.length) { // when turns are completed
            clearInterval(turns);
            game.turnInProgress = false; // let player make their turns
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
    showTurns,
    playerTurn
}