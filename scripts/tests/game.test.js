/**
 * @jest-environment jsdom
 */

const {
    game,
    newGame,
    addTurn,
    lightsOn,
    showTurns,
} = require("../game")

beforeEach(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
    // built in way to load html file, run this before each test
});

// before all runs before all tests
// before each runs before each test 

describe("game object contains correct keys", () => {
    test("score key exists", () => {
        expect("score" in game).toBe(true);
    });
    test("current game key exists", () => {
        expect("currentGame" in game).toBe(true);
    });
    test("player moves key exists", () => {
        expect("playerMoves" in game).toBe(true);
    });
    test("choices key exists", () => {
        expect("choices" in game).toBe(true);
        // jest keyword 'in' checks for key in object
    });
    test("turn number key exists", () => {
        expect("turnNumber" in game).toBe(true);
    });
    test("choices contain the correct ids", () => {
        expect(game.choices).toEqual(["button1", "button2", "button3", "button4"])
    })
});

describe("newGame works correctly", () => {
    beforeAll(() => {
        // set the conditions before the test
        game.score = 42;
        game.playerMoves = ["button1", "button2"];
        game.currentGame = ["button1", "button2"];
        document.getElementById("score").innerHTML = '42';
        newGame();
    });
    test("should set game score to zero", () => {
        expect(game.score).toEqual(0);
    });
    test("should be one move in the computer's game", () => {
        expect(game.currentGame.length).toBe(1);
    })
    test("should set player moves to empty", () => {
        expect(game.playerMoves.length).toBe(0);
    });
    test("should set have score display as zero", () => {
        expect(score.innerHTML).toBe('0');
    });
});

describe("gameplay works correctly", () => {
    beforeEach(() => {
        game.score = 0;
        game.currentGame = [];
        game.playerMoves = [];
        addTurn(); // function called, length is now 1
    });
    afterEach(() => {
        game.score = 0;
        game.currentGame = [];
        game.playerMoves = [];
    })
    test("addTurn adds a new turn to the game", () => {
        addTurn(); // call function again to add another round for it to be 2
        expect(game.currentGame.length).toBe(2);
    });
    test("should add correct class to light up the buttons", () => {
        let button = document.getElementById(game.currentGame[0]);
        lightsOn(game.currentGame[0]);
        expect(button.classList).toContain("light")
    });
    test("showTurns should update game.TurnNumber", () => {
        game.turnNumber = 42;
        showTurns();
        expect(game.turnNumber).toBe(0);
    })
});