/*!
 * modernizr v3.3.1
 * Build http://modernizr.com/download?-ambientlight-applicationcache-audioloop-dontmin
 *
 * Copyright (c)
 *  Faruk Ates
 *  Paul Irish
 *  Alex Sexton
 *  Ryan Seddon
 *  Patrick Kettner
 *  Stu Cox
 *  Richard Herrera

 * MIT License
 */

/*!
{
  "name": "Ambient Light Events",
  "property": "ambientlight",
  "notes": [{
    "name": "W3C Ambient Light Events",
    "href": "https://www.w3.org/TR/ambient-light/"
  }]
}
!*/

/*!
{
  "name": "Application Cache",
  "property": "applicationcache",
  "caniuse": "offline-apps",
  "tags": ["storage", "offline"],
  "notes": [{
    "name": "MDN documentation",
    "href": "https://developer.mozilla.org/en/docs/HTML/Using_the_application_cache"
  }],
  "polyfills": ["html5gears"]
}
!*/

/*!
{
  "name": "Audio Loop Attribute",
  "property": "audioloop",
  "tags": ["audio", "media"]
}
!*/

(function(e,t,n){function u(e,t){return typeof e===t}function a(){var e,t,n,i,a,f,l;for(var c in r)if(r.hasOwnProperty(c)){e=[],t=r[c];if(t.name){e.push(t.name.toLowerCase());if(t.options&&t.options.aliases&&t.options.aliases.length)for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase())}i=u(t.fn,"function")?t.fn():t.fn;for(a=0;a<e.length;a++)f=e[a],l=f.split("."),l.length===1?s[l[0]]=i:(s[l[0]]&&!(s[l[0]]instanceof Boolean)&&(s[l[0]]=new Boolean(s[l[0]])),s[l[0]][l[1]]=i),o.push((i?"":"no-")+l.join("-"))}}function c(){return typeof t.createElement!="function"?t.createElement(arguments[0]):l?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}var r=[],i={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){r.push({name:e,fn:t,options:n})},addAsyncTest:function(e){r.push({name:null,fn:e})}},s=function(){};s.prototype=i,s=new s;var o=[],f=t.documentElement,l=f.nodeName.toLowerCase()==="svg",h=function(){function r(t,r){var i;if(!t)return!1;if(!r||typeof r=="string")r=c(r||"div");return t="on"+t,i=t in r,!i&&e&&(r.setAttribute||(r=c("div")),r.setAttribute(t,""),i=typeof r[t]=="function",r[t]!==n&&(r[t]=n),r.removeAttribute(t)),i}var e=!("onblur"in t.documentElement);return r}();i.hasEvent=h,s.addTest("ambientlight",h("devicelight",e)),s.addTest("applicationcache","applicationCache"in e),s.addTest("audioloop","loop"in c("audio")),a(),delete i.addTest,delete i.addAsyncTest;for(var p=0;p<s._q.length;p++)s._q[p]();e.Modernizr=s})(window,document);