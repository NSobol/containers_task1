import { expect, test } from '@jest/globals';
import Character from '../Character';
import Team from '../app';

test('Добавление персонажа в команду', () => {
  const expected = {
    name: 'Dmitriy',
    level: 10,
  };

  const teams = new Team();
  teams.add(new Character('Dmitriy', 10));
  expect([...teams.members][0]).toEqual(expected);
});

test('Повторное добавление персонажа в команду', () => {
  expect(() => {
    const teams = new Team();
    const person = new Character('Dmitriy', 10);
    teams.add(person);
    teams.add(person);
  }).toThrowError(
    new Error('Tакой персонаж уже существует в команде!'),
  );
});

test('Добавление нескольких персонажей в команду', () => {
  const expected = [
    {
      name: 'Dmitriy',
      level: 10,
    },
    {
      name: 'Yuri',
      level: 15,
    },
  ];
  const teams = new Team();
  const person1 = new Character('Dmitriy', 10);
  const person2 = new Character('Yuri', 15);
  teams.addAll(person1, person2);
  expect([...teams.members]).toEqual(expected);
});

test('Тестирование преобразования в массив', () => {
  const expected = [
    {
      name: 'Dmitriy',
      level: 10,
    },
    {
      name: 'Yuri',
      level: 15,
    },
  ];
  const teams = new Team();
  const person1 = new Character('Dmitriy', 10);
  const person2 = new Character('Yuri', 15);
  teams.addAll(person1, person2);
  expect(teams.toArray()).toEqual(expected);
});