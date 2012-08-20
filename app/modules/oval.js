define([
  "app",
  "jquery",
  "lodash",
  "backbone",

  "text!templates/oval.html"
],

function(app, $, _, Backbone, tmpl) {

  var Oval = app.module();

  Oval.initialize = function() {
    var main = new Oval.Views.Main();
    $('#main').html(main.render().el);
  };

  Oval.Views.Main = Backbone.View.extend({
    tagName: 'div',

    template: _.template(tmpl),

    events: {
      'mouseover .grid .middle' : 'hover',
      'mouseout .grid .middle' : 'unhover'
    },

    initialize: function() {
      // this.model.on('change', this.render, this);
    },

    render: function() {
      // this.$el.html(this.template(this.model.toJSON()));
      this.$el.html(this.template());
      return this;
    },

    hover: function(e) {
      console.log( $(e.target));
      // $(e.target).css('border', '1px solid yellow');
      $(e.target).addClass('highlight');
      $(e.target).text('howdy');
    },


    unhover: function(e) {
      console.log( $(e.target));
      $(e.target).removeClass('highlight');
      $(e.target).text('');
    }
  });

  return Oval;

});
