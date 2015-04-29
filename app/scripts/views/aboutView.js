/*global define*/

define(['jquery', 'underscore', 'backbone', 'text!templates/about.html'],
    function($, _, Backbone, template) {
        'use strict';

        var AboutView = Backbone.View.extend({

            el: 'main',

            id: '',

            className: '',

            events: {},

            model: '',

            initialize: function() {
                this.language = (options && options.language) || 'en-us';

                this.render();
            },

            render: function() {
                this.template = _.template(template, {
                    content: JSON.pars((this.language == 'en_us') ? content : contentES)
                });

                this.$el.html(this.template);
                return this;
            }
        });

        return AboutView;
    });