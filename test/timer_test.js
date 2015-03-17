var chai = require("chai");
require("../www/js/timer");

describe("Timer", function(){
  it("should be able to be created", function(){
    chai.expect(new Timer()).to.be.a('object');
  });
});
