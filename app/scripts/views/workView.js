/*global define*/

define(['jquery', 'underscore', 'backbone', 'text!templates/work.html', 'text!locale/work.json', 'text!locale/work-es.json'],
    function($, _, Backbone, template, content, contentES) {
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
                    content: JSON.parse((this.language == 'en_us') ? content : contentES)
                });

                this.$el.html(this.template);
                return this;
            }
        });

        return WorkView;
    });