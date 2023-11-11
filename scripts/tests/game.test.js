/**
 * @jest-environment jsdom
 */

const {
    game,
    newGame,
    showScore
} = require("../game")

beforeEach(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
    // built in way to load html file, run this before each test
});

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
    test("should set currentgame to empty", () => {
        expect(game.currentGame.length).toEqual(0);
    });
    test("should set player moves to empty", () => {
        expect(game.playerMoves.length).toBe(0);
    });
    test("should set have score display as zero", () => {
        expect(score.innerHTML).toBe('0');
    });
});