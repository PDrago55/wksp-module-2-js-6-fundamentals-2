// Given the following functions, answer the questions below.

function square(x) {
    return x * x;
}

function decrement(x) {
    return x - 1;
}

function duplicateString(x) {
    return x.concat(x);
}

function reverseString(str) {
    const splitString = str.split(""); // var splitString = "hello".split("");
    const reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    return reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join(""); 
}

// Expand each of the following and get the result of the expression
// Q1
function decrement(x) {
    return 3 - 1;
}

function square(x) {
    return 2 * 2;
}

function decrement(x) {
    return 4 - 1;
}

function square(x) {
    return 3 * 3;
}

square(decrement(square(decrement(3))));
console.log(x) /// which is 9//



// Q2
function square(x) {
    return 3 * 3;
}

function square(x) {
    return 9 * 9;
}

function decrement(x) {
    return 81 - 1;
}

function decrement(x) {
    return 80 - 1;
}
decrement(decrement(square(square(3))));
console.log(x) /// which is 79//



// Q3

duplicateString(reverseString("hello"));

console.log(x); //"ollehhello"

function duplicateString("olleh") {
    return x.concat(x);
}

function reverseString("hello") {
    const splitString = str.split(""); // var splitString = "hello".split("");
    const reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    return reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join(""); 
}
//result olleh

// Q4
reverseString(duplicateString(duplicateString("foo")));

function duplicateString(x) {
    return x.concat("foo");
}
//"foofoo"

// "foofoofoofoo"

function reverseString(str) {
    const splitString = str.split(""); // var splitString = "hello".split("");
    const reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    return reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join(""); 
}

// result "oofoofoofoof"
