/*global require*/
'use strict';
require(['config/config'], function() {
    'use strict';
    require(['jquery', 'backbone', 'bootstrap', 'helpers/constants', 'routers/router'],
        function($, Backbone, bootstrap, Constants, Router) {
            var language = Constants.en;

            var router = new Router({
                language: language
            });

            Backbone.history.start();


        });
})