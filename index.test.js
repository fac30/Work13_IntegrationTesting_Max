/* const { equal, notEqual, test } = require("./test-helpers.js");
const { calculate } = require("./index.js"); */

function testCalculate(a, sign, b, expected, message) {
    const result = calculate(a, sign, b);
    equal(result, expected, message);
}

// 2 + 2 = 4
test("Testing that calculate works correctly with 2 + 2: ", () => testCalculate(2, "+", 2, 4, "2 + 2 should equal to 4."));

// 8 - 2 = 6
test("Testing that calculate works correctly with 8 - 2: ", () => testCalculate(8, "-", 2, 6, "8 - 2 should equal to 6."));

// 8 / 2 = 4
test("Testing that calculate works correctly with 8 / 2: ", () => testCalculate(8, "/", 2, 4, "8 - 2 should equal to 4."));

// 8 * 2 = 16
test("Testing that calculate works correctly with 8 * 2: ", () => testCalculate(8, "*", 2, 16, "8 * 2 should equal to 16."));

// takes strings
test("Testing that calculate works correctly with 2 + 2 as strings: ", () => testCalculate("2", "+", "2", 4, "2 + 2 should equal to 4."));

// takes strings
test("Testing that calculate works correctly with 2 + 2 as strings: ", () => testCalculate("2", "+", "2", 4, "2 + 2 should equal to 4."));

// DOM test
test("Testing that the calculator browser UI works: ", () => {
    const a = document.querySelector("#a");
    a.value = 2;
    const sign = document.querySelector("#sign");
    sign.value = "+";
    const b = document.querySelector("#b");
    b.value = 2;
    const submitButton = document.querySelector("button[type='submit']");
    submitButton.click();
    const result = document.querySelector("#result");
    equal(parseFloat(result.textContent), 4);
    result.textContent = "";
})

