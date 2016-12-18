(function(){var t=function(t,n){function e(){this.constructor=t}for(var s in n)i.call(n,s)&&(t[s]=n[s]);return e.prototype=n.prototype,t.prototype=new e,t.__super__=n.prototype,t},i={}.hasOwnProperty,n=function(t,i){return function(){return t.apply(i,arguments)}};this.Animator=function(){function t(t){this.options=t,this.fixedOnTop=new AnimationFixedOnTop(this.options.fixedOnTop),this.inView=new AnimationInView(this.options.inView),this.fadeIn=new AnimationFadeIn(this.options.fadeIn)}return t}(),this.Animation=function(){function t(t){var i,n,e,s,o,h,c,r;for(this.options=t,this.animatedElements=[],h=$(this.options.selector),s=0,o=h.length;s<o;s++){e=h[s],i=$(e),this.animatedElements.push(i),i.options=$.extend(!0,{},this.options),c=i.data();for(n in c)r=c[n],n in this.options&&(i.options[n]=r)}}return t}(),this.AnimationFadeIn=function(i){function n(t){var i,e,s,o,h;for(this.options=t,n.__super__.constructor.call(this,this.options),h=this.animatedElements,e=function(t){return setTimeout(function(){return t.animate({opacity:1},t.options.speed)},t.options.wait)},s=0,o=h.length;s<o;s++)i=h[s],e(i)}return t(n,i),n}(Animation),this.AnimationInView=function(){function t(t){this.options=t,this.checkAnimatedElemets=n(this.checkAnimatedElemets,this),this.setupAnimations=n(this.setupAnimations,this),this.animatedElements=$(this.options.selector),this.setupAnimations()}return t.prototype.setupAnimations=function(){return this.animatedElements.css(this.options.css),$(window).bind("scroll",this.checkAnimatedElemets),$(window).bind("resize",this.checkAnimatedElemets),this.checkAnimatedElemets()},t.prototype.checkAnimatedElemets=function(){var t;return t=$(window).scrollTop()+$(window).height(),this.animatedElements.each(function(i){return function(n,e){var s;if(s=$(e),t+i.options.offsetTop>s.offset().top)return s.animate({opacity:1,top:0},i.options.speed)}}(this))},t}(),this.AnimationFixedOnTop=function(){function t(t){this.options=t,this.checkAnimatedElemets=n(this.checkAnimatedElemets,this),this.checkUndoAnimatedElemets=n(this.checkUndoAnimatedElemets,this),this.setupAnimations=n(this.setupAnimations,this),this.animatedElements=$(this.options.selector),this.undoElements=[],this.setupAnimations()}return t.prototype.setupAnimations=function(){return $(window).bind("scroll",this.checkAnimatedElemets),$(window).bind("resize",this.checkAnimatedElemets),this.checkAnimatedElemets()},t.prototype.checkUndoAnimatedElemets=function(){var t,i,n,e,s,o,h,c,r,a;for(a=$(window).scrollTop(),n=[],c=this.undoElements,i=e=0,o=c.length;e<o;i=++e)t=c[i],a<t.top&&(t.el.css(t.css),t.el.removeClass("fixed"),n.push(i));for(r=[],s=0,h=n.length;s<h;s++)i=n[s],r.push(this.undoElements.slice(i,1));return r},t.prototype.checkAnimatedElemets=function(){var t;return this.checkUndoAnimatedElemets(),t=$(window).scrollTop(),this.animatedElements.each(function(i){return function(n,e){var s,o;if(s=$(e),"fixed"!==s.css("position"))return o=s.offset(),t>o.top?(i.undoElements.push({el:s,top:o.top,css:{position:s.css("position"),left:s.css("left")}}),s.css({position:"fixed",top:0,left:o.left}),s.addClass("fixed")):void 0}}(this))},t}()}).call(this);