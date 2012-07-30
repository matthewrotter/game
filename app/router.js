define([
  // Application.
  "app",

  "modules/start"
],

function(app, Start) {

  // Defining the application router, you can attach sub routers here.
  var Router = Backbone.Router.extend({
    routes: {
      "": "index"
    },

    index: function() {
      Start.initialize();
    }
  });

  return Router;

});
