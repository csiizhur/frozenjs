!function(a){function b(){return"#"+("00000"+(16777216*Math.random()<<0).toString(16)).slice(-6)}function c(){return[20*Math.random()-10,20*Math.random()-10]}function d(a){var b=a.css("position");return"relative"===b||"fixed"===b||"absolute"===b?!0:!1}function e(a){a.preventDefault()}function f(b){var c=this;return a.isArray(c)&&a(this).length||(c=a("body")),c.each(function(){var d=a(this),e=d.data("fz.cover");e||d.data("fz.cover",e=new h(this,a.extend({},g,"object"==typeof b&&b,d.data()))),"string"==typeof b&&e[b].call(c)})}var g={trigger:null,dismiss:null,duration:1e3,startPos:"source",offset:[0,0],expandAxis:"y",isFloat:!0,zIndex:999,callback:function(){}},h=function(b,c){this.element=a(b),this.trigger=a(c.trigger),this.dismiss=a(c.dismiss),this.option=c,this.initMask(),this.render(),this._isShown=!1,this._isDismiss=!1,this._bindTrigger(),this.position||(this.position={},this.position.screenWidth=document.documentElement.clientWidth,this.position.screenHeight=document.documentElement.clientHeight)};h.prototype={initMask:function(){this._mask=a("<div></div>"),this._mask.css({position:"absolute",top:0,left:0,width:100,height:100,"z-index":-1,"-webkit-transform":"scale(0)"})},render:function(){this._mask.appendTo(this.element),d(this.element)||this.element.css({position:"relative",overflow:"hidden"})},setConfig:function(b){return this._isShown||(b=a.extend(b,this.currentTrigger.data()),this.currentOption=b),this},show:function(a){var d=this,e=this.currentOption;if(!this._isShown&&(this.currentTrigger||a)){a&&(this.currentTrigger=a),e.callback("show",d),this._preventDefault(),d._isDismiss=!1,this._isShown=!0;var f=c(),g=2;e.isFloat&&(this._floatTrigger(),this.currentTrigger.css({zIndex:e.zIndex+1}));var h=this._getMaskPos(e.startPos,e.expandAxis),i="x"==e.expandAxis?"scale(0,1)":"y"==e.expandAxis?"scale(1,0)":"scale(0,0)";this._mask.css({left:h[0]+e.offset[0],top:h[1]+e.offset[1],background:e.background?e.background:b(),"z-index":e.zIndex,"-webkit-transform":i+" skew("+f[0]+"deg,"+f[1]+"deg)"}),this._aniMask(e.duration,e.offset,g)}return this},hide:function(a){var b=this;b.option.callback("hide",b),this._isShown&&(this._isDismiss=!0,this._mask.css({"-webkit-transform":this._originTransform}))},hidden:function(){this._isShown=!1,this._isDismiss=!1,this._mask.css({"-webkit-transition":"none"}),this._relaseDefault(),this.currentTrigger.css(this._triggerOriginCss)},_bindTrigger:function(){var b=this;this.trigger.on("tap",function(){return b._isShown||(b.currentTrigger=a(this)),b.setConfig(a.extend({},a(this).data(),b.option)).show(a(this)),!1}),this.dismiss.on("tap",function(){return b.dismiss=a(this),b.hide(),!1}),this._mask[0].addEventListener("webkitTransitionEnd",function(){b._isShown&&!b._isDismiss?b.option.callback("shown",b):(b.hidden(),b.option.callback("hidden",b))},!1)},_preventDefault:function(){document.addEventListener("mousewheel",e,!1),document.body.addEventListener("touchmove",e,!1),document.documentElement.addEventListener("touchmove",e,!1)},_relaseDefault:function(){document.removeEventListener("mousewheel",e,!1),document.body.removeEventListener("touchmove",e,!1),document.documentElement.removeEventListener("touchmove",e,!1)},_floatTrigger:function(){this._triggerOriginCss={position:this.currentTrigger.css("position"),"z-index":this.currentTrigger.css("z-index")},d(this.currentTrigger)||this.currentTrigger.css({position:"relative"})},_getMaskPos:function(a,b){this.position||(this.position={},this.position.screenWidth=document.documentElement.clientWidth,this.position.screenHeight=document.documentElement.clientHeight),"x"==b?this._mask.css({height:this.position.screenHeight}):"y"==b&&this._mask.css({width:this.position.screenWidth}),this.position.scrollTop=document.body.scrollTop,this.position.scrollLeft=document.body.scrollLeft,this.position.offsetTop=this.element.offset().top,this.position.offsetLeft=this.element.offset().left,this.position.triggerLeft=this.currentTrigger.offset().left,this.position.triggerTop=this.currentTrigger.offset().top,this.position.triggerHeight=this.currentTrigger.height(),this.position.triggerWidth=this.currentTrigger.width();var c=parseInt(this._mask.css("width")),d=parseInt(this._mask.css("height")),e=this.position.scrollLeft-this.position.offsetLeft+this.position.screenWidth/2-c/2,f=0;return"top"==a?f=this.position.scrollTop-this.position.offsetTop-d/2:"bottom"==a?f=this.position.scrollTop-this.position.offsetTop+this.position.screenHeight-d/2:"center"==a?f=this.position.scrollTop-this.position.offsetTop+this.position.screenHeight/2-d/2:(e=this.position.triggerLeft-this.position.offsetLeft+this.position.triggerWidth/2-c/2,f=this.position.triggerTop-this.position.offsetTop+this.position.triggerHeight/2-d/2),[e,f]},_aniMask:function(a,b,c){var d=this;this._originTransform=this._mask.css("-webkit-transform");var e=Math.ceil(this.position.screenWidth/parseInt(this._mask.css("width")))*c,f=Math.ceil(this.position.screenHeight/parseInt(this._mask.css("height")))*c;setTimeout(function(){d._mask.css({"-webkit-transition":"all "+a+"ms","-webkit-transform":"scale("+e+","+f+") skew(0deg,0deg)"})},200)}},a.fn.cover=a.cover=f}(window.Zepto);