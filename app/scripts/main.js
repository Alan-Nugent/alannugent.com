/*global require*/
'use strict';
require(['config/config'], function() {
	'use strict';
	require(['jquery', 'backbone', 'bootstrap', 'helpers/constants', 'router/router', 'helpers/helper', 'headerView', 'footerView'],
		function($, Backbone, bootstrap, Constants, Router, Helper, HeaderView, FooterView) {
			var language = Constants.en;
			new HeaderView();
			new FooterView();
			var router = new Router({
				language: language
			});

			Backbone.history.start();


		});
})