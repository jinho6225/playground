//Procedural => => FP

//pure function
//no side effects
//input => output

const array = [1, 2, 3];
function mutateArray(arr) {
  arr.pop();
} // this function has side effects
//they mutate global state from inside function

function mutateArray2(arr) {
  arr.forEach((item) => {
    arr.push(1);
  });
} // this function has side effects
//they mutate global state from inside function

mutateArray(array);
mutateArray2(array);

console.log(array);

function a(num1, num2) {
  return num1 + num2;
}

function b(num) {
  return num * 2;
}

console.log(b(a(3, 4)));

/**
 * side effects
 *
 * console.log
 *
 */

//FP goal
//minimize side effects
//pure function is not possible 100%

//perfect function (FP)
// 1task
// return statement
// pure
// no shared state
// immutable state
// composable
// predictable

//Idempotence

//Imperative vs Declarative

//Imperative
for (let i = 0; i < 1000; i++) {
  console.log(i);
}
//Declarative
[1, 2, 3].forEach((item) => console.log(item));
