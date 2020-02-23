let verifyEquals = require('../../assets/verify-equals');

// Problem 11
// ----------
// Make this function return the sum of all the numbers in the input array.
// If any element in the array is not a number, skip it. If the array is empty, return zero.

function f(input){
    if (input.length === 0) return 0;
    return input.reduce((acc, curr) => (typeof curr === 'number' ? acc + curr : acc), 0);
}



// function f(arr) {
//     let sum = arr.reduce(function(a, b){
//         return a + b;
//         console.log(sum);
//     }) 
// }

// Test cases
let inputs = [1, 3, 4, 8, "ten"];
let outputs = [16];

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
