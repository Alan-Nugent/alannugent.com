define(['jquery', 'underscore', 'backbone', 'text!templates/header.html', 'text!locale/header.json'],
    function($, _, Backbone, template, content) {
        'use strict';

        var HeaderView = Backbone.View.extend({

            el: 'header',

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

        return HeaderView;
    });