require("./helpers");

describe("Snake", function(){

  describe("initialization", function(){
    it("should be able to be created", function(){
      timer = new Timer();
      chai.expect(new Snake(timer, {
        parse: true
      })).to.be.a('object');
    });
  });
});

