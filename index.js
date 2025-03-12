function sayHi() {
  console.log("Hello World!");
}
sayHi();

function sayHi(name) {
  console.log("Hello " + name);
}
sayHi("Ash");

// Anonymous function -- A function with the function keyword followed by parenhesis
const hiVic = function () {
  console.log("Hi Vic");
};
hiVic();

// Hoisting --- the ability to call out a function before creating it is reserved to standard functions. functions with function name following them

const doMath = function (number, number1) {
  console.log(number * number1);
};
doMath(5, 6);
doMath(2, 2);

// ends a function 2. returns some value to us
const doMaths = function (number2, number3) {
  return number2 * number3;
};
console.log(doMaths(3, 4));

let sixBySix = doMaths(2, 2);
console.log(sixBySix);

function greeting() {
  console.log("Hello Edna");
}
greeting();

function greetings(Hi) {
  console.log("Hi Edna");
}
greetings();

function greet(name) {
  return "Hi " + name;
}
let name = "Edna";
console.log(greet(name));

function findThem(name) {
  return "Where is " + name;
}
console.log(findThem(name));

function findHer() {
  return "Where is " + name;
}
console.log(findHer(name));

const findingHer = findHer(name) + " " + "Where did she go?";
console.log(findingHer);
