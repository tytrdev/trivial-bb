/*global TriviaL, Backbone, JST*/

TriviaL.Views = TriviaL.Views || {};

(function () {
    'use strict';

    TriviaL.Views.Event = Backbone.View.extend({

        el: '#view',

        template: JST['app/scripts/templates/event.ejs'],

        events: {},

        initialize: function (id) {
            this.model = new TriviaL.Models.Event(id);
            this.model.fetch();

            this.model.on('sync', function() {
                this.render();
            }, this);
        },

        render: function () {
            console.log(this.model.toJSON());
            this.$el.html(this.template(this.model.toJSON()));
        }

    });

})();
