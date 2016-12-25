const initialScore = {
  score: 0
}

const score = (state = initialScore, action) => {
  switch(action.type) {
    case 'RESTART':
      return initialScore;
    case 'EAT':
      return {
        ...state,
        score: state.score + 100
      };
    default:
      return state;
  }
}

export { score };
