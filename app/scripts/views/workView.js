/*global define*/

define(['jquery', 'underscore', 'backbone', 'text!templates/work.html', 'text!locale/work.json'],
    function($, _, Backbone, template, content) {
        'use strict';

        var WorkView = Backbone.View.extend({

            el: '#main',

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
                    content: JSON.parse(content)
                });

                this.$el.html(this.template);
                return this;
            }
        });

        return WorkView;
    });