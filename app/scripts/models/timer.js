/*global ShakeTheSnake, Backbone*/

ShakeTheSnake.Models = ShakeTheSnake.Models || {};

(function () {
    'use strict';

    ShakeTheSnake.Models.Timer = Backbone.Model.extend({

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

})();
