Snake = Backbone.Model.extend({
  initialize: function(attrs){
    this.set("size", 3);
    this.listenTo(attrs.timer, "ticktack", this.move_it);
  },

  move_it: function(){
  }
});

