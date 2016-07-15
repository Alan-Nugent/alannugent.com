 'jasny', /*global requjasny, ire*/
 	'use strict';
 require(['config/config'], function() {
 	'use strict';
 	require(['jquery', 'backbone', 'bootstrap', 'jasny', 'helpers/constants', 'router/router', 'helpers/helper', 'headerView', 'menuView', 'footerView'],
 		function($, Backbone, bootstrap, jasny, Constants, Router, Helper, HeaderView, MenuView, FooterView) {
 			var language = Constants.en;
 			new HeaderView();
 			new FooterView();
 			new MenuView();
 			var router = new Router({
 				language: language
 			});

 			Backbone.history.start();

 			//Helper.screenWidthDetection();
 		});
 })