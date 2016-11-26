import { snake } from '../www/js/reducers';

test('Gets initial state', () => {
  expect(snake(undefined, {}))
    .toEqual({
      position: [[1,1], [1,2]],
      head: 'right'
    });
});
