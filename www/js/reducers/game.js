const initialState = (previousState = {}) => {
  return {
    score: 0,
    running: true,
    highScores: previousState.highScores || [1000, 800, 400]
  }
}

const addHighScore = (state) => {
  const newHighScores = state.highScores.slice(0).concat(state.score);
  return newHighScores.sort((b, a) => parseInt(a) - parseInt(b)).slice(0, 5);
}

const game = (state = initialState(), action) => {
  switch(action.type) {
    case 'RESTART':
      return initialState(state);
    case 'GAMEOVER':
      return {
        ...state,
        running: false,
        highScores: addHighScore(state)
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
