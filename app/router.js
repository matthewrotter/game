define([
  // Application.
  "app",

  "modules/hex",
  "modules/oval"
],

function(app, Hex, Oval) {

  // Defining the application router, you can attach sub routers here.
  var Router = Backbone.Router.extend({
    routes: {
      "": "index",
      "!/oval": "index",
      "!/hex": "hex",
    },

    index: function() {
      Oval.initialize();
    },

    hex: function() {
      Hex.initialize();
    }
  });

  return Router;

});
