const initialState = {
  score: 0,
  running: true
}

const game = (state = initialState, action) => {
  switch(action.type) {
    case 'RESTART':
      return initialState;
    case 'GAMEOVER':
      return {
        ...state,
        running: false
      };
    case 'EAT':
      return {
        ...state,
        score: state.score + 100
      };
    default:
      return state;
  }
}

export { game };
