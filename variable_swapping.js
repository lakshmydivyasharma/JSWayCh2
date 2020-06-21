// Variable swapping
// Observe the following program.

let number1 = 5;
let number2 = 3;

// TODO: type your code here (and nowhere else!)

console.log(number1); // Should show 3
console.log(number2); // Should show 5

// Add the necessary code to swap the values of variables number1 and number2.

let temp;
temp = number1;
number1 = number2;
number2 = temp;

// At the first step, temp is assigned with the value of a. Then a variable is assigned with the value of b. Finally, the variable b is assigned with the value of temp (having the initial value of a).

// The swapping of variables using a temporary variable works with any value type, like numbers, strings, booleans, objects.

// The downside of this approach is the need for a specialized temporary variable, plus the swapping happens in 3 statements.