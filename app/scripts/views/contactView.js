/*global define*/

define(['jquery', 'underscore', 'backbone', 'text!templates/contact.html', 'text!locale/contact.json'],
    function($, _, Backbone, template, content) {
        'use strict';

        var ContactView = Backbone.View.extend({

            el: 'main',

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

        return ContactView;
    });