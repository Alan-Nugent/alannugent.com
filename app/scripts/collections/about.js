/*global define*

define([
    'underscore',
    'backbone',
    'models/about'
], function (_, Backbone, AboutModel) {
    'use strict';

    var AboutCollection = Backbone.Collection.extend({
        model: AboutModel
    });

    return AboutCollection;
});
*/