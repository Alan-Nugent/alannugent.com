define(['jquery', 'underscore', 'backbone', 'text!templates/menu.html', 'text!locale/menu.json'],
    function($, _, Backbone, template, content) {
        'use strict';

        var menuView = Backbone.View.extend({

            el: '#menu',

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

                $('#myNavmenu a').on('click', function() {
                    $('#myNavmenu').offcanvas('hide');
                })


                return this;
            }
        });

        return menuView;
    });