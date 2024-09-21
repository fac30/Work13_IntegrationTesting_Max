const { equal, notEqual, test } = require("./test-helpers.js");
const { calculate } = require("./index.js");

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