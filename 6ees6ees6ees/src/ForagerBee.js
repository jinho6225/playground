class ForagerBee extends Bee {
  // TODO..
  constructor(color, food, eat) {
    super(color, food, eat);
    this.age = 10;
    this.job = "find pollen";
    this.canFly = true;
    this.treasureChest = [];
  }

  forage(treasure) {
    this.treasureChest.push(treasure);
  }
}
