import Team from "../app";

class Character {
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }
}

const hero = new Character("Vasya", "Swordsman");
const hero1 = new Character("Vasya1", "Swordsman1");
const hero2 = new Character("Vasya2", "Swordsman2");
const linkHero = hero;


test("Test Error - дублирование персонажа", () => {
  const comandos = new Team();
  comandos.add(hero1);
  expect(() => {
    comandos.add(hero1);
  }).toThrow(Error);
});

test("Test Error", () => {
  const comandos = new Team();
  expect(() => {
    comandos.add(hero1);
    comandos.add(hero);
  }).not.toThrow(Error);
});

test("Test Error", () => {
  const comandos = new Team();
  comandos.add(hero);
  expect(() => {
    comandos.add(linkHero);
  }).toThrow(Error);
});

test("Test addAll and convert", () => {
  const comandos = new Team();
  comandos.addAll(hero, hero1);
  expect(comandos.toArray()).toEqual([hero, hero1]);
});

test('Тест дублированния в массиве', () => {
  const comandos = new Team();
  comandos.addAll(hero, linkHero, hero1, hero2);
  expect(comandos.toArray()).toEqual([hero, hero1, hero2])
})