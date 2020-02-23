let verifyEquals = require('../../assets/verify-equals');

// Problem 9
// ---------
// Make this function return the longest word in the input string. If the input string is empty then return an empty string.
// If multiple words have the same length, return the last one that matches.

// Example
//   f("hey hello morning") returns "morning"

// HINTS: 
//    - You'll need to use the split string method
//    - A for loop might be helpful


function f(str) {
    const words = str.split();
    let longest = '';

    for (let i = 0; i < words.length; i++) {
        if (longest.length <= words[i].length) longest = words[i];
    }
    return longest;
}

// max.map is not a function...
// function f(str) {
// let max = str[0].length;
// max.map(v => max = Math.max(max, v.length));
// let result = str.filter(v => v.length == max);
// return result;
// }

// Test cases
let inputs = [['go fuck yourself'], ["this is really"], ["hard to understand"], ["I feel hopeless"], ['plise help']];
let outputs = ['yourself', "really", "understand", "hopeless", 'plise'];


// STOP -----------------------------------------------------------------
// No code changes below. This is the actual test that will run your test cases and validate your function.
function runTest(i) {
    if (i >= inputs.length) throw new Error('You do not have enough test cases');
    let expected = outputs[i];
    let actual = f(inputs[i]);
    verifyEquals(expected, actual);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);

console.log('All tests passed for ' + __filename);
