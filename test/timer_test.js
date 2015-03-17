var assert = require("chai");
Backbone = require("underscore");
require("backbone");
require("../www/js/timer.js");

describe("Timer", function(){
  it("should be able to be created", function(){
    expect(new Timer()).to.be.a('object');
  });
});
