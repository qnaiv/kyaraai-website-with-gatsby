(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"+nFm":function(t,e,n){},Kv0X:function(t,e,n){"use strict";n("+nFm")},k9Na:function(t,e,n){"use strict";n("q9el")},ma8I:function(t,e,n){"use strict";n.r(e);var o,r=n("G0B5"),i=(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),a=function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i(e,t),a([Object(r.b)({required:!0})],e.prototype,"tags",void 0),e=a([r.a],e)}(r.c),s=(n("k9Na"),n("KHd+")),l=Object(s.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.tags,(function(e,o){return n("span",{key:o,staticClass:"tag",style:{backgroundColor:e.colorCode}},[t._v("\n    "+t._s(e.tagName)+"\n  ")])})),0)}),[],!1,null,"7fbbf305",null).exports,u=function(){var t=function(e,n){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(e,n)};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),f=function(t,e,n,o){var r,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(a=(i<3?r(a):i>3?r(e,n,a):r(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a},p=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return u(e,t),e.prototype.isLoaded=function(){return this.$page&&this.$page.allNews},e.prototype.getTagInfoList=function(t){var e=[];return t.forEach((function(t){var n="gray";"告知"===t&&(n="#e9a5b8"),"記録"===t&&(n="#8aaec7"),e.push({tagName:t,colorCode:n})})),e},e=f([Object(r.a)({components:{Tags:l}})],e)}(r.c),d=(n("Kv0X"),null),y=Object(s.a)(p,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isLoaded()?n("Layout",[n("h2",{staticClass:"list-title mb-2"},[t._v("News")]),n("ClientOnly",[n("div",{directives:[{name:"masonry",rawName:"v-masonry"}],attrs:{"transition-duration":"0.3s","item-selector":".item",gutter:".gutter-item"}},t._l(t.$page.allNews.edges,(function(e,o){return n("div",{key:o},[n("div",{staticClass:"gutter-item"}),n("div",{directives:[{name:"masonry-tile",rawName:"v-masonry-tile"}],staticClass:"item"},[n("g-link",{attrs:{to:"/news/"+e.node.id}},[n("g-image",{staticClass:"news-thumbnail",attrs:{src:e.node.thumbnail,immediate:!0}}),n("div",{staticClass:"card-content"},[n("p",{staticClass:"title is-6"},[t._v(" "+t._s(e.node.title))]),n("p",{staticClass:"subtitle is-6 mb-1"},[t._v(" "+t._s(e.node.subtitle))]),n("Tags",{attrs:{tags:t.getTagInfoList(e.node.tags)}})],1)],1)],1)])})),0)])],1):t._e()}),[],!1,null,"3de0baf1",null);"function"==typeof d&&d(y);e.default=y.exports},q9el:function(t,e,n){}}]);