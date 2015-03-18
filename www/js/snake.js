Snake = Backbone.Model.extend({
  
  defaults: {
    size: 1,
    coords: [0,0],
    direction: "up"
  },

  initialize: function(attrs){
    this.listenTo(attrs.timer, "ticktack", this.move_it);
    attrs.board.addSnake(this);
  },

  move_it: function(){
    var new_coords = this.get("board").move(this.get("coords"), this.get("direction"));
    this.set("coords", new_coords);
  }
});

