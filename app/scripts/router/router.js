/*global define*/

define(['jquery', 'backbone', 'views/aboutView'],
    function($, Backbone, AboutView) {
        var Router = Backbone.Router.extend({
            //run routerChanged() on page change
            initialize: function() {
                this.listenTo(this, 'route', this.routerChanged);
            },
            //All pages listed here
            routes: {
                '': 'index',
                'about': 'about',
                '*action': 'error404'
            },

            error404: function() {
                $('#main').html('Page Not Found')
            },
            index: function() {
                this.contentView = new ContentView();
            },
            about: function() {
                this.aboutView = new AboutView();
            },
            contact: function() {
                this.contactView = new ContactView();
            },
            work: function() {
                this.workView = new WorkView();
            },
            routerChanged: function(e) {
                //add functions here to run on page load and change
            }

        });

        return Router;
    });