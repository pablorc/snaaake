const initialState = (previousState = {}) => {
  return {
    score: 0,
    running: false,
    justLanded: true,
    highScores: previousState.highScores || [['PBL', 0]],
    savedHighScore: false,
  }
}

const addHighScore = (state, name) => {
  if (state.score === 0) {
    return state.highScores;
  }

  name = name == '' ? '???' : name;

  const newScore = [name, state.score];

  const newHighScores = state.highScores.slice(0).concat([newScore]);
  const result = newHighScores.sort((b, a) => parseInt(a[1]) - parseInt(b[1])).slice(0, 3);
  return result;
}

const game = (state = initialState(), action) => {
  switch(action.type) {
    case 'SET_GLOBAL_HIGHSCORES':
      return {
        ...state,
        globalHighScores: action.highscores
      }
    case 'RESTART':
      return {
        ...initialState(state),
        justLanded: false,
        running: true
      };
    case 'GAMEOVER':
      return {
        ...state,
        running: false,
      };
    case 'SAVE_HIGHSCORE':
      return {
        ...state,
        highScores: state.savedHighScore ? state.highScores : addHighScore(state, action.name),
        savedHighScore: true
      }
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
