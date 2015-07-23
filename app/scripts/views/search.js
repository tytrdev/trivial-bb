/*global TriviaL, Backbone, JST*/

TriviaL.Views = TriviaL.Views || {};

(function () {
    'use strict';

    TriviaL.Views.Search = Backbone.View.extend({

        el: '#view',

        template: JST['app/scripts/templates/search.ejs'],

        //tagName: 'search-main',

        //id: '',

        //className: '',

        events: {
          "submit": "search"
        },

        search: function(e) {
          var query = $("input[name='search-query']").val();
          return false;
        },

        initialize: function () {
            //this.listenTo(this.model, 'change', this.render);
            this.render();
        },

        render: function () {
            this.$el.html(this.template(/*this.model.toJSON()*/));
            return this;
        }

    });

})();
