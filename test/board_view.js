require('./helpers');

describe("BoardView", function(){
  describe(".buildRows", function(){
    it("should create an array", function(){
      var board = new Board();
      var boardView = new BoardView({
        model: board,
        size : 4
      });
      chai.expect(boardView.buildRows()).to.be.instanceof(Array);
    });

    it("should return an array of Rowviews");
    it("should return an array with the same number of elements as the board's size");
  });
});
