define(["jquery", "backbone", "helpers/constants"],

    function($, Backbone, Constants) {
        'use strict';

        var assetsVersion = '3.4.1';
        var bsVersion = '3.3.1';
        var jqueryUIVersion = '1.10.4';
        var jqueryVersion = '1.11.2';

        var Helper = {
            getJSONFile: function(location) {
                var response;

                $.ajax({
                    async: false,
                    datatype: 'json',
                    url: location,
                    success: function(data) {
                        response = data;
                    },
                    error: function(jqXHR, status, errorThrown) {
                        throw new Error('JSON could not be loaded: ' + location + ' (status: ' + status + ', message: ' + errorThrown.message + ')')
                    }

                })
                return (typeof response == 'object') ? response : JSON.parse(response);
            },

            getFile: function(location) {
                var response;

                $.ajax({
                    async: false,
                    url: location,
                    success: function(data) {
                        response = data;
                    },
                    error: function(jqXHR, status, errorThrown) {
                        throw new Error('File could not be loaded: ' + location + ' (status: ' + status + ', message: ' + errorThrown.message + ')')
                    }

                })
                return response
            },

            getTemplateLocation: function(name) {
                var path = Constants.markupLocation + name + ".html";
                return path
            },

            getContentLocation: function(locale, name) {
                var path = Constants.contentLocation + locale + name + ".json";
                return path
            },

            getCobrandLocation: function() {
                return Constants.cobrandLocation;
            },

            buildURL: function() {
                var currUrl;

                if (String(window.location).indexOf("#") >= 0) {
                    currUrl = window.location.pathname + (window.location.hash).replace("#", "?");
                } else {
                    currUrl = window.location.pathname + window.location.search;
                }
                currUrl = currUrl.replace(/&/g, "$");
                return currUrl;
            },

            setMetaContent: function(pageName) {
                var metaContent = Constants[pageName + "MetaContent"];
                if (metaContent && metaContent.length > 0) {
                    $('meta[name=description]').attr('content', metaContent);
                }
            },
            //commented out to keep from blindly calling focus to the main content section
            scrollToTop: function() {
                var target = $('body');
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 300);

            },

            scrollToElement: function(element) {
                var scrollSection = $(element);
                $('body,html').animate({
                    scrollTop: scrollSection.offset().top - 80
                }, 100);
                scrollSection.focus();
            },
            GlobalFunctions: function() {
                $(function() {
                    //add version to all instances in site
                    $('.AssetsVersion').text(assetsVersion);
                    $('.BSVersion').text(bsVersion);
                    $('.JqueryUIVersion').text(jqueryUIVersion);
                    $('.JqueryVersion').text(jqueryVersion);

                    // Make links with the button role respond to the Space key (expected behavior for buttons)
                    $('a[role=button], button').off('keydown').on('keydown', function(e) {
                        if (e.which === 32) {
                            $(this).trigger('click');
                            e.stopPropagation();
                            e.preventDefault();
                        }

                        return true;
                    });
                });
                this.jumpLink();
            },

            updateTitle: function() {
                var pageTitle = ($('h1').text() == 'Assets Framework') ? 'Home' : $('h1').text();
                document.title = 'Assets Framework | ' + pageTitle;
            },

            closeModal: function() {
                if ($('.contentWrap').length > 0) {
                    $('.contentWrap.ui-dialog-content').A11ydialog("destroy");
                }
            },

            GoogleGTM: function() {
                $(function(w, d, s, l, i) {
                    w[l] = w[l] || [];
                    w[l].push({
                        'gtm.start': new Date().getTime(),
                        event: 'gtm.js'
                    });
                    var f = d.getElementsByTagName(s)[0],
                        j = d.createElement(s),
                        dl = l != 'dataLayer' ? '&l=' + l : '';
                    j.async = true;
                    j.src =
                        '//www.googletagmanager.com/gtm.js?id=' + i + dl;
                    f.parentNode.insertBefore(j, f);
                }(window, document, 'script', 'dataLayer', GTMContainerID));
            },
            jumpLink: function(e) {
                $('.jumpLink').each(function() {
                    var focusedElement = $(this).attr('href');
                    //set a tabindex of -1 to make the element focusable for the skip nav but is not focusable for tabbing on page, this is only needed if the target is not a normally focusable element like a div container.
                    $(focusedElement).attr('tabindex', '-1');
                }).on('click', function(event) {
                    var focusedElement = $(this).attr('href');

                    //prevent the hash and element id to show in url
                    event.preventDefault();
                    // set focus to element for skip nav
                    $(focusedElement).focus();
                });
            }
        }

        return Helper;
    });