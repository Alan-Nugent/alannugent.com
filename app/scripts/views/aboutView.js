define(['jquery', 'underscore', 'backbone', 'text!templates/about.html', 'text!locale/about.json'],
    function($, _, Backbone, template, content) {
        'use strict';

        var AboutView = Backbone.View.extend({

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

                console.log('about');
                return this;
            }
        });

        return AboutView;
    });