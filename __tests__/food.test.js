import { food } from '../www/js/reducers/food';

test('Create a new food', () => {
  expect(food(undefined, {}).x).toBeDefined()
  expect(food(undefined, {}).y).toBeDefined()
});

test('EAT creates a new food', () => {
  const stateBefore = {
    x: -3,
    y: -3
  };
  const action = {
    type: 'EAT'
  }

  expect(food(stateBefore, action).x).toBeGreaterThanOrEqual(0);
  expect(food(stateBefore, action).y).toBeGreaterThanOrEqual(0);
});
