//Immutability
const obj = { name: "jinho" };
function clone(obj) {
  return { ...obj }; //this is pure
}

function updateName(obj) {
  const obj2 = clone(obj);
  obj2.name = "Nana";
  return obj2;
}

console.log(updateName(obj));
console.log(obj);

//structural sharing
//memory is fairly cheap
