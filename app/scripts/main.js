/*global require*/
'use strict';
require(['config/config'], function() {
    'use strict';
    require(['jquery', 'backbone', 'bootstrap', 'helpers/constants', 'router/router', 'helpers/helper'],
        function($, Backbone, bootstrap, Constants, Router, Helper) {
            var language = Constants.en;

            var router = new Router({
                language: language
            });

            Backbone.history.start();


        });
})