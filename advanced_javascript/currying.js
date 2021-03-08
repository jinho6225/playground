// currying

const multiply = (a, b) => a * b;

console.log(multiply(3, 4));

const curriedMultiply = (a) => (b) => a * b; // closure
//function that takes another parameter and that is going to multiply A times B because of closures we
// have access inside of the B function to the a variable
console.log(curriedMultiply(3)(4));

const curriedMultiplyBy5 = curriedMultiply(5);
console.log(curriedMultiplyBy5(6));
console.log(curriedMultiplyBy5(8));
