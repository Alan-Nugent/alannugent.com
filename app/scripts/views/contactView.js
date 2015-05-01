/*global define*/

define(['jquery', 'underscore', 'backbone', 'text!templates/about.html', 'text!locale/contact.json', 'text!locale/contact-es.json'],
    function($, _, Backbone, template, content, contentES) {
        'use strict';

        var AboutView = Backbone.View.extend({

            el: 'main',

            id: '',

            className: '',

            events: {},

            model: '',

            initialize: function(options) {
                this.language = (options && options.language) || 'en-us';

                this.render();
            },

            render: function() {
                this.template = _.template(template, {
                    content: JSON.parse((this.language == 'en_us') ? content : contentES)
                });

                this.$el.html(this.template);
                return this;
            }
        });

        return AboutView;
    });