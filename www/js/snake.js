Snake = Backbone.Model.extend({
  initialize: function(attrs){
    this.set("size", 3);
  },

  parse: function(attrs){
    this.timer = attrs.timer;
    return _(attrs).omit("timer");
  }
});

