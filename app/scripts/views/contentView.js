define(['jquery', 'underscore', 'backbone', 'text!templates/content.html', 'text!locale/content.json'],
    function($, _, Backbone, template, content) {
        'use strict';

        var ContentView = Backbone.View.extend({

            el: '#main',

            events: {},

            initialize: function(options) {
                this.language = (options && options.language) || 'en-us';

                this.render();
            },

            render: function() {
                this.template = _.template(template, {
                    content: JSON.parse(content)
                });

                this.$el.html(this.template);
                return this;
            }
        });

        return ContentView;
    });