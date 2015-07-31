/*global TriviaL, Backbone, JST*/

TriviaL.Views = TriviaL.Views || {};

(function () {
    'use strict';

    TriviaL.Views.Dashboard = Backbone.View.extend({

        el: '#view',

        nav: "#dashboard-links",

        main: "#dashboard-page",

        template: JST['app/scripts/templates/dashboard.ejs'],

        addTemplate: JST['app/scripts/templates/addEvent.ejs'],

        events: {
          'click #dashboard': 'dashboard',
          'click #add': 'addEventView',
          'submit #new-event': 'submitNewEvent',
          'click #delete': 'deleteEvent',
          'click #select-date': 'pickDate',
          'click #select-time': 'pickTime'
        },

        initialize: function () {
            //listenTo(this.model, 'change', this.render);
            this.render();
        },

        render: function () {
            this.$el.html(this.template(/*this.model.toJSON()*/));
            return this;
        },

        /* Event functions */
        pickDate: function() {
          $('.datepicker').pickadate(
            {
              closeOnSelect: true,
              closeOnClear: true,
            }
          );
        },

        pickTime: function() {
          $('.timepicker').pickatime(
            {
              min: '8:00AM'
            }
          );
        },

        dashboard: function() {
          this.setActive('dashboard');
          $(this.main).html(this.render());
        },

        addEventView: function() {
          this.setActive('add');
          $(this.main).html(this.addTemplate());
        },

        submitNewEvent: function() {
          var data = this._getNewEventData();
          var event = new TriviaL.Models.Event(data);
          console.log(event);
          return false;
        },

        _getNewEventData: function() {
          var input = {
            name: $("#event-name").val(),
            address: $("#event-address").val(),
            city: $("#event-city").val(),
            state: $("#event-state").val(),
            zip: $("#event-zip").val(),
            date: $("#select-date").val(),
            time: $("#select-time").val()
          }
          return input;
        },

        deleteEvent: function() {
          this.setActive('delete');
          console.log("Delete");
        },

        //Sets clicked link as active.
        setActive: function(id) {
          var links = $(this.nav).children('a');
          $.each(links,function(index,val){
            $("#"+val.id).removeClass('active');
          });
        $("#"+id).addClass('active');
        }

    });

})();