const initialState = {
  score: 0,
  running: true,
  highScores: []
}

const addHighScore = (state) => {
  const newHighScores = state.highScores.slice(0).concat(state.score);
  return newHighScores.sort((b, a) => parseInt(a) - parseInt(b)).slice(0, 5);
}

const game = (state = initialState, action) => {
  switch(action.type) {
    case 'RESTART':
      return initialState;
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
