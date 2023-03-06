export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(hero) {
    if (!this.members.has(hero)) {
      this.members.add(hero);
    } else {
      throw new Error('Попытка добавить персонажа второй раз');
    }
  }

  addAll(...charactersList) {
    for (const obj of charactersList) {
      this.members.add(obj);
    }
  }

  toArray() {
    return [...this.members];
  }
}
