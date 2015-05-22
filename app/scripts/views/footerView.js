define(['jquery', 'underscore', 'backbone', 'text!templates/footer.html', 'text!locale/footer.json'],
    function($, _, Backbone, template, content) {
        'use strict';

        var FooterView = Backbone.View.extend({

            el: 'footer',

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

        return FooterView;
    });