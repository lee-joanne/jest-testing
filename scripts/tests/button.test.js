/**
 * @jest-environment jsdom
 */

const expectExport = require("expect");
const buttonClick = require("../button");

beforeEach(() => {
    document.body.innerHTML = "<p id='par'></p>"
});
// creates mock dom as cannot import HTML elements onto test cases

describe("DOM tests", () => {
    test("expects p content to change", () => {
        buttonClick();
        expectExport(document.getElementById("par").innerHTML).toEqual("You Clicked");
    });
});