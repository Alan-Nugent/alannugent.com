/*global define*/

define(['jquery', 'underscore', 'backbone', 'text!templates/contact.html', 'text!locale/contact.json', 'helpers/helper'],
    function($, _, Backbone, template, content, Helper) {
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
                var s = '<n uers="znvygb:nyna@nynaahtrag.pbz?fhowrpg=Pbagnpg sebz Nynaahtrag.pbz" pynff="sn sn-rairybcr-bcra-b sn-3k" gnetrg="_oynax"><fcna>nyna@nynaahtrag.pbz</fcna></n>';
                _.delay(function() {
                    Helper.emailRot(s);
                }, 0);
                this.$el.html(this.template);
                return this;
            }
        });

        return ContactView;
    });