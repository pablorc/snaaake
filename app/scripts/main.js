/*global ShakeTheSnake, $*/


window.ShakeTheSnake = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function () {
    'use strict';

    var board = new ShakeTheSnake.Models.Board();
    var timer = new ShakeTheSnake.Models.Timer();
    var snake = new ShakeTheSnake.Models.Snake({
      board: board,
      timer: timer
    });
    console.log(board, timer, snake);
  }
};

$(document).ready(function () {
  'use strict';
  ShakeTheSnake.init();
});
