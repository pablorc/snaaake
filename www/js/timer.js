var Backbone = require('../../bower_components/backbone/backbone.js');

Timer = Backbone.Model.extend({

  step: 500,

  start: function(){
    var that = this;
    setInterval(function(){
      that.tick();
    }, this.step);
  },

  tick: function(){
    this.trigger("ticktack");
  }
});
