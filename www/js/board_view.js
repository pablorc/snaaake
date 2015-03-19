BoardView = Backbone.View.extend({

  tagName: "table",
  className: "board", 

  buildRows: function(){
    var that = this;

    return _(new Array(this.model.get("size"))).map(function(){
      return new RowView({model: that.model});
    });
  },

  rows: function(){
    this._rows = this._rows || this.buildRows();
    return this._rows;
  }
  
  render: function(){
    this.$el.html(JST["board"]());

  }
});


