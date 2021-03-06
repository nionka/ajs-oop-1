export default class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.level = 1;
    this.health = 100;
    this.attack = null;
    this.defence = null;
  }

  set name(value) {
    if (typeof value === 'string' && value.length >= 2 && value.length <= 10) {
      this.name1 = value;
    } else {
      throw new Error('Имя задано не правильно');
    }
  }

  get name() {
    return this.name1;
  }

  set type(value) {
    const heroes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

    if (typeof value === 'string' && heroes.includes(value)) {
      this.type1 = value;
    } else {
      throw new Error('Не правильно задан тип!');
    }
  }

  get type() {
    return this.type1;
  }
}
