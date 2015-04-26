/*global beforeEach, describe, it, assert, expect  */
(function () {

  'use strict';

  describe('Snake Model', function () {

    beforeEach(function () {
      this.snakeModel = new ShakeTheSnake.Models.Snake();
    });

    describe("initialization", function(){
      it("should be able to be created", function(){
        timer = new Timer();
        chai.expect(new ShakeTheSnake.Models.Snake({
          timer: timer,
          board: new Board()
        })).to.be.a('object');
      });

      it("should assign properly the timer", function(){
        var timer = new Timer();
        var Snake = new ShakeTheSnake.Models.Snake({
          timer: timer,
          board: new Board()
        });
        chai.expect(snake.get("timer")).to.eql(timer);
      });

      it("should move when the timer tells it", function(){
        var timer = new Timer();
        var snake = new ShakeTheSnake.Models.Snake({
          timer: timer,
          board: new Board()
        });
        var spy = sinon.spy(snake, "move_it");
        timer.tick();
        chai.expect(spy).to.be.called;
      })
    });

    describe(".move", function(){
      it("should move itself to the next coords", function(){
        var board = new Board();
        var stub = sinon.stub(board, "move")
        stub.withArgs([0,0], "up").returns([4,4]);
        var snake = new ShakeTheSnake.Models.Snake({
          timer: new Timer(),
          board: board
        });

        snake.move_it();
        chai.expect(snake.get("coords")).to.be.eql([4,4])
      });

    });


  });

})();
