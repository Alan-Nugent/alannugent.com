define(["jquery","underscore","backbone","text!templates/about.html","text!locale/about.json"],function(e,t,n,r,i){"use strict";var s=n.View.extend({el:"#main",events:{},initialize:function(e){this.language=e&&e.language||"en-us",this.render()},render:function(){return this.template=t.template(r,{content:JSON.parse(i)}),this.$el.html(this.template),console.log("about"),this}});return s});