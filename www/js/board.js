Board = Backbone.Model.extend({

  defaults: {
    rows: 10,
    cols: 10
  },

  move: function(coords, direction){
    switch(direction){
      case "up":
        return [coords[0], coords[1]-1];
      case "down":
        return [coords[0], coords[1]+1];
      case "left":
        return [coords[0]-1, coords[1]];
      case "right":
        return [coords[0], coords[1]+1];
      default: 
        return coords;
    }
  },

  addSnake: function(snake){
    this.listenTo(snake, "change:coords", this.validateMovement);
  },

  validateMovement: function(){
  }

});

