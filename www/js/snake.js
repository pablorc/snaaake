Snake = Backbone.Model.extend({
  initialize: function(attrs){
    this.set("size", 3);
    this.listenTo(timer, "ticktack", this.move_it);
  },

  parse: function(attrs){
    this.timer = attrs.timer;
    return _(attrs).omit("timer");
  },

  move_it: function(){
  }
});

