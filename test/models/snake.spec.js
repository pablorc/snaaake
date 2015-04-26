/*global beforeEach, describe, it, assert, expect  */
(function () {

  'use strict';

  describe('Snake Model', function () {

    beforeEach(function () {
      this.timerModel = new ShakeTheSnake.Models.Timer();
      this.boardModel = new ShakeTheSnake.Models.Board();
      this.snakeModel = new ShakeTheSnake.Models.Snake({
        timer: this.timerModel,
        board: this.boardModel
      });
    });

    describe("initialization", function(){
      it("should be able to be created", function(){
        var timer = new ShakeTheSnake.Models.Timer();
        chai.expect(new ShakeTheSnake.Models.Snake({
          timer: timer,
          board: new ShakeTheSnake.Models.Board()
        })).to.be.a('object');
      });

      it("should assign properly the timer", function(){
        var timer = new ShakeTheSnake.Models.Timer();
        var snake = new ShakeTheSnake.Models.Snake({
          timer: timer,
          board: new ShakeTheSnake.Models.Board()
        });
        chai.expect(snake.get("timer")).to.eql(timer);
      });

      it("should move when the timer tells it", function(){
        var timer = new ShakeTheSnake.Models.Timer();
        var snake = new ShakeTheSnake.Models.Snake({
          timer: timer,
          board: new ShakeTheSnake.Models.Board()
        });
        var spy = sinon.spy(snake, "move_it");
        timer.tick();
        chai.expect(spy).to.be.called;
      })
    });

    describe(".move", function(){
      it("should move itself to the next coords", function(){
        var board = new ShakeTheSnake.Models.Board();
        var stub = sinon.stub(board, "move")
        stub.withArgs([0,0], "up").returns([4,4]);
        var snake = new ShakeTheSnake.Models.Snake({
          timer: new ShakeTheSnake.Models.Timer(),
          board: board
        });

        snake.move_it();
        chai.expect(snake.get("coords")).to.be.eql([4,4])
      });

    });


  });

})();
