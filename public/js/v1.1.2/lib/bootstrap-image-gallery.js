!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery","blueImpGallery"],t):t(window.jQuery,window.blueimp.Gallery)}(function(t,o){"use strict";t.extend(o.prototype.options,{useBootstrapModal:!0});var e=o.prototype.close,i=o.prototype.imageFactory,n=o.prototype.videoFactory,r=o.prototype.textFactory;t.extend(o.prototype,{modalFactory:function(o,e,i,n){if(!this.options.useBootstrapModal||i)return n.call(this,o,e,i);var r=this,a=t(this.container).children(".modal"),c=a.clone().css("display","block").on("click",function(t){if(t.target===c[0]||t.target===c.children()[0]){t.preventDefault();t.stopPropagation();r.close()}}),l=n.call(this,o,function(t){e({type:t.type,target:c[0]});c.addClass("in")},i);c.find(".modal-title").text(l.title||String.fromCharCode(160));c.find(".modal-body").append(l);return c[0]},imageFactory:function(t,o,e){return this.modalFactory(t,o,e,i)},videoFactory:function(t,o,e){return this.modalFactory(t,o,e,n)},textFactory:function(t,o,e){return this.modalFactory(t,o,e,r)},close:function(){this.container.find(".modal").removeClass("in");e.call(this)}})});
//# sourceMappingURL=bootstrap-image-gallery.js.map