app.models.Photo = Backbone.Model.extend(_.extend({
  urlRoot : "/photos",

  initialize : function() {},

}, app.models.formatDateMixin));
