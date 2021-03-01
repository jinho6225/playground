//Procedural => OOP

// const elf = {
//   name: "Orwell",
//   weapon: "bow",
//   attack() {
//     return "attack with " + elf.weapon;
//   },
// };

// elf.name;

//factory function
function createElf(name, weapon) {
  return {
    name,
    weapon,
    attack() {
      return "attack with " + weapon;
    },
  };
}

// Object.create()
// const elfFunctions = {
//   attack() {
//     return "attack with " + this.weapon;
//   },
// };

// function createElf(name, weapon) {
//   let newElf = Object.create(elfFunctions);
//   newElf.name = name;
//   newElf.weapon = weapon;
//   return newElf;
// }

// const peter = createElf("Peter", "stones");
// console.log(peter.attack());
// const sam = createElf("Sam", "fire");
// console.log(sam.attack());

// Constructor Functions
// function Elf(name, weapon) {
//   this.name = name;
//   this.weapon = weapon;
// }

// Elf.prototype.attack = function () {
//   return "attack with " + this.weapon;
// };

// const peter2 = new Elf("Peter", "stone");
// const sam2 = new Elf("Sam", "fire");
// console.log(peter2.attack());
// console.log(sam2.attack());

//ES6 Class <= syntatical sugar
class Elf {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }

  attack() {
    return "attack with " + this.weapon;
  }
}

const peter = new Elf("Peter", "stone"); //peter is instance of Elf
console.log(peter instanceof Elf); // true
console.log(Elf instanceof peter); // false

const sam2 = new Elf("Sam", "fire");
console.log(peter.attack());
console.log(sam2.attack());
