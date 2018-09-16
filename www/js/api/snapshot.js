let position = 0;
const gameCode = window.crypto.getRandomValues(new Uint32Array)[1];

const saveSnapshot = (state) => {
  if(!state.game.recordable) return;

  const url = 'http://localhost:3000/snapshots'
  const data = {
    snapshot: {
      position,
      game_code: gameCode,
      state
    }
  }

  fetch(url, {
    method: 'POST',
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    });
  position++;
};

export { saveSnapshot };