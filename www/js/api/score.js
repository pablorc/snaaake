const saveHighscoreIntoGlobal = (name, value) => {
  const url = 'http://localhost:3000/scores';
  const data = {
    score: {
      value: value,
      author: name == '' ? '???' : name
    }
  };

  return (dispatch) => {
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(function(data) {
      dispatch({
        type: 'SET_HIGHSCORES',
        highscores: data.highscores
      })
    })
  };
};

export { saveHighscoreIntoGlobal };