
//Final values
//Observe the following program and try to predict the final values of its variables.


let a = 2;
a -= 1;
a++;
let b = 8;
b += 2;


const c = a + b * b; // 2 + 10 * 10
const d = a * b + b; // 2 * 10 + 10
const e = a * (b + b); // 2 * (10 + 10)
const f = a * b / a; // 2 * 10 / 2
const g = b / a * a; // 10 / 2 * 2
console.log(a, b, c, d, e, f, g)
