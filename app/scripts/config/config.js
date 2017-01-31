require.config({
    paths: {
        jquery: '../bower_components/jquery/dist/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/lodash/dist/lodash',
        bootstrap: '../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap',
        jasny: '../bower_components/jasny-bootstrap/dist/js/jasny-bootstrap',
        text: '../bower_components/requirejs-text/text',
        jasny: '../bower_components/jasny-bootstrap/dist/js/jasny-bootstrap',

        headerView: '../scripts/views/headerView',
        footerView: '../scripts/views/footerView',
        menuView: '../scripts/views/menuView'
    },
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        },
        jasny: {
            deps: ['jquery']
        }

    }
});