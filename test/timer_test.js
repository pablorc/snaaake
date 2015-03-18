require("./helpers");

describe("Timer", function(){

  describe("initialization", function(){
    it("should be able to be created", function(){
      chai.expect(new Timer()).to.be.a('object');
    });
  });

  describe(".start", function(){
    beforeEach(function(){
      this.clock = sinon.useFakeTimers();
    });

    afterEach(function(){
      this.clock.restore();
    });

    it("should assign the tick function to setTimeout", function(){
      timer = new Timer();
      var spy = sinon.spy(timer, "tick")
      timer.start();
      this.clock.tick(timer.step);
      chai.expect(spy).to.be.called;
    });

    it("should not call the function before the time defined in the step variable", function(){
      timer = new Timer();
      var spy = sinon.spy(timer, "tick")
      timer.start();
      this.clock.tick(timer.step - 1);
      chai.expect(spy).to.be.called;
    });
  });

  describe(".tick", function(){
    it("should trigger an event", function(){
      timer = new Timer();
      var spy = sinon.spy(timer, "trigger");
      timer.tick();
      chai.expect(spy).to.be.called;
    });
  });
});
