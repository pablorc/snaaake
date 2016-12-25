'use strict';

const newFruit = () => {
  return {
    x: Math.floor(Math.random() * 29),
    y: Math.floor(Math.random() * 29)
  };
}

const food = (state = newFruit(), action) =>  {
  switch(action.type) {
    case 'RESTART':
      return newFruit();
    case 'EAT':
      return newFruit();
    default:
      return state;
  }
}

export { food };

