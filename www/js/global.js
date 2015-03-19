//Dependencies
_ = require('../../bower_components/underscore/underscore.js');
Backbone = require('../../bower_components/backbone/backbone.js');

//Models
require("./timer");
require("./snake");
require("./board");

//Views

(function(){
  var timer = new Timer();
  var board = new Board();
  var snake = new Snake({
    timer: timer,
    board: board
  });

  console.log(timer, board, snake);
})();
