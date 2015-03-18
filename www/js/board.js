Board = Backbone.Model.extend({

  defaults: {
    rows: 10,
    cols: 10
  },

  move: function(coords, direction){
    switch(direction){
      case "up":
        return [coords[0], coords[1]-1];
        break;
      case "down":
        return [coords[0], coords[1]+1];
        break;
      case "left":
        return [coords[0]-1, coords[1]];
        break;
      case "right":
        return [coords[0], coords[1]+1];
        break;
      default: 
        return coords;
    }
  }

});

