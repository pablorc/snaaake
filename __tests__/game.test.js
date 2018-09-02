import { game } from '../www/js/reducers/game.js';

test('EAT adds 100 points to score', () => {
  const stateBefore = {
    score: 200,
    highScores: []

  }
  const action = {
    type: 'EAT'
  }
  const scoreAfter = 300

  expect(game(stateBefore, action).score).toEqual(scoreAfter);
});

describe('on GAMEOVER action', () => {
  test('The game is finished', () => {
    const stateBefore = {
      running: true,
      highScores: []
    }
    const action = {
      type: 'GAMEOVER'
    }
    const runningAfter = false;

    expect(game(stateBefore, action).running).toEqual(runningAfter);
  });

  test('It does not increment the score', () => {
    const stateBefore = {
      score: 200,
      running: true,
      highScores: []

    }
    const action = {
      type: 'GAMEOVER'
    }

    const scoreAfter = 200;

    expect(game(stateBefore, action).score).toEqual(scoreAfter);
  });

  test('Adds the score to the high scores', () => {
    const stateBefore = {
      score: 200,
      running: true,
      highScores: []
    }
    const action = {
      type: 'SAVE_HIGHSCORE',
      name: 'DTC'
    }
    const highScoresAfter = [['DTC', 200]]

      expect(game(stateBefore, action).highScores).toEqual(highScoresAfter);
  });

  test('Does not add the score to the high scores if is less than all of them', () => {
    const highScores =  [['DOG', 1000],['POR', 1000],['ARA', 1000]];
    const stateBefore = {
      score: 200,
      running: true,
      highScores
    }
    const action = {
      type: 'SAVE_HIGHSCORE',
      name: 'DTC'
    }
    expect(game(stateBefore, action).highScores).toEqual(highScores);
  });

  test('Does not add the score to the high scores if it is 0', () => {
    const highScores =  [['DOG', 1000],['POR', 1000],['ARA', 1000]];
    const stateBefore = {
      score: 0,
      running: true,
      highScores
    }
    const action = {
      type: 'SAVE_HIGHSCORE',
      name: 'DTC'
    }
    expect(game(stateBefore, action).highScores).toEqual(highScores);
  });

  test('Does not add the score twice', () => {
    const highScores =  [['DOG', 1000],['POR', 1000],['ARA', 1000]];
    const stateBefore = {
      score: 1000,
      running: true,
      highScores
    }
    const action = {
      type: 'SAVE_HIGHSCORE',
      name: 'DTC'
    }
    const highsScoresAfterFirst = game(stateBefore, action).highScores;

    expect(game(stateBefore, action).highScores).toEqual(highsScoresAfterFirst);
  });
});
