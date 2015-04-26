/*global ShakeTheSnake, Backbone*/

ShakeTheSnake.Models = ShakeTheSnake.Models || {};

(function () {
    'use strict';

    ShakeTheSnake.Models.Board = Backbone.Model.extend({

        url: '',

        initialize: function() {
        },

        defaults: {
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
