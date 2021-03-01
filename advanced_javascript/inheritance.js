class Character {
  #age = 54; //private
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
  }
  attack() {
    return `attack with ${this.weapon}`;
  }
  introduce() {
    return `hello i am ${this.#age}`;
  }
}

class Elf extends Character {
  constructor(name, weapon, type) {
    super(name, weapon);
    this.type = type;
  }
  attack() {
    return `whooooooa`;
  }
}

class Ogre extends Character {
  constructor(name, weapon, color) {
    super(name, weapon);
    this.color = color;
  }
  makeFort() {
    return `strongest fort in the world made`;
  }
}

const dolby = new Elf("Dolby", "cloth", "house");
console.log(dolby.attack());

const shrek = new Ogre("shrek", "club", "green");
console.log(shrek.makeFort());
