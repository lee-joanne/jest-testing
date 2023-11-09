/**
 * @jest-environment jsdom
 */

const expectExport = require("expect");
const buttonClick = require("../button");

// beforeEach(() => {
//     document.body.innerHTML = "<p id='par'></p>"
// });
// creates mock dom as cannot import HTML elements onto test cases

beforeEach(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
    // built in way to load html file
})

describe("DOM tests", () => {
    test("expects p content to change", () => {
        buttonClick();
        expectExport(document.getElementById("par").innerHTML).toEqual("You Clicked");
    });
    test("h1 should exist", () => {
        expect(document.getElementsByTagName("h1").length).toBe(1);
    })
});