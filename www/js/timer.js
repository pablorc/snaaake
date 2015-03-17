Timer = Backbone.Model.extend({
  initialize: function(){
    this.installMetronome();
  },

  installMetronome: function(){
    var that = this;
    setInterval(function(){
      that.tick();
    }, 500);
  },

  tick: function(){
    console.log("TICK");
    this.trigger("ticktack");
  }
});

module.exports = Timer;
