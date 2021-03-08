//no side effects
//input -> output

const array = [1, 2, 3];
function mutateArray(arr) {
  arr.pop();
}

function mutateArray2(arr) {
  arr.forEach((item) => {
    arr.push(1);
  });
}

mutateArray(array);
console.log(array); // [1,2] this function has side effects
//that function modify anything outsite of itself

mutateArray(array);
console.log(array); // [1] this function modified anything outside of itself

mutateArray2(array);
console.log(array); // [1,1] this function modified anything outside of itself

const array2 = [1, 2, 3];
function removeLastItem(arr) {
  const newArray = [].concat(arr);
  newArray.pop();
  return newArray;
}

console.log(removeLastItem(array2)); //[1,2]  it's new data from inside of this function.
//we are not modifying anything from out side
//it's not affect the outside world
console.log(array2); // [1,2,3] global state(variable) is still same

function multiplyBy2(arr) {
  return arr.map((item) => item * 2);
} // it doesn't affect anything in the outside world just to confirm this
console.log(mutiplyBy3(array2)); // [2,4,6]

// no side effects

function a() {
  console.log("hi");
} // it's not pure function because of console.log
// It's logging something to the output of the browser.
// It's modifying something outside of itself.
// But when we call this while we're out putting something out here so that function has side effects.

/**
the goal of functional programming is not to make everything pure functions.
The goal is to minimize side effects.
 */

/**
a perfect function should do one task and one task only.
We don't want a massive function.

A simple function that we can test that does one thing really well that function should have a return
statement every function should return something from it.

Because when we give it an input we expect an output every function should be pure which we've talked
about and that also means having no shared state with other functions and immutable state where we can
modified some of the state within our functions but we always return whatever we get such as an input
we always return a new copy of that output.

We never just modify our global state functions are also going to be composing all something that we're
really going to dive deep into later on.

And most importantly we want to make functions predictable if we understand with 100 percent certainty
what our functions do it makes our code predictable.

Functional programming at the end of the day is just about making your code predictable.
  */
