require("./helpers");


describe("Board", function(){

  describe("initialization", function(){
    it("should have rows", function(){
      chai.expect(new Board().get("rows")).to.be.greaterThan(0);
    });

    it("should have columns", function(){
      chai.expect(new Board().get("cols")).to.be.greaterThan(0);
    });
  });

  describe("move", function(){
    describe("for moving down", function(){
      it("should return the same value of column", function(){
        chai.expect(new Board().move([5,5], "down")[0]).to.be.eql(5);
      });

      it("should return the next value of row", function(){
        chai.expect(new Board().move([5,5], "down")[1]).to.be.eql(6);
      });
    });

    describe("for moving up", function(){
      it("should return the same value of column", function(){
        chai.expect(new Board().move([5,5], "up")[0]).to.be.eql(5);
      });

      it("should return the previous value of row", function(){
        chai.expect(new Board().move([5,5], "up")[1]).to.be.eql(4);
      });
    });

    describe("for moving left", function(){
      it("should return the same value of row", function(){
        chai.expect(new Board().move([5,5], "left")[1]).to.be.eql(5);
      });

      it("should return the previous value of column", function(){
        chai.expect(new Board().move([5,5], "left")[0]).to.be.eql(4);
      });
    });

    describe("for moving right", function(){
      it("should return the same value of row", function(){
        chai.expect(new Board().move([5,5], "right")[0]).to.be.eql(5);
      });

      it("should return the next value of column", function(){
        chai.expect(new Board().move([5,5], "right")[1]).to.be.eql(6);
      });
    });

  });
});

