import { sortHeroes } from '../sort.js';

test('should sort heroes by health in descending order', () => {
  const input = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];

  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  expect(sortHeroes(input)).toEqual(expected);
  // expect(sortHeroes(input)).toBe(expected);  // не будет работать
});
