(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[851],{25516:function(e,t,n){"use strict";n.d(t,{i:function(){return r}});var r=function(e){return function(t){return{kind:"method",placement:"prototype",key:t.key,descriptor:{set:function(e){this["__".concat(String(t.key))]=e},get:function(){return this["__".concat(String(t.key))]},enumerable:!0,configurable:!0},finisher:function(n){var r=n.prototype.connectedCallback;n.prototype.connectedCallback=function(){if(r.call(this),this[t.key]){var n=this.renderRoot.querySelector(e);if(!n)return;n.scrollTop=this[t.key]}}}}}}},8436:function(e,t,n){"use strict";n.r(t),n.d(t,{HuiLogbookCard:function(){return U}});var r=n(15652),i=n(81471),o=n(7323),s=n(62877),a=n(22311),c=n(8330),l=(n(22098),n(31206),n(55422)),u=(n(97740),n(15688)),f=n(90271);n(75502);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(){var e=w(["\n        ha-card {\n          height: 100%;\n          display: flex;\n          flex-direction: column;\n          justify-content: space-between;\n        }\n\n        .content {\n          padding: 0 16px 16px;\n        }\n\n        .no-header .content {\n          padding-top: 16px;\n        }\n\n        .no-entries {\n          text-align: center;\n          padding: 16px;\n          color: var(--secondary-text-color);\n        }\n\n        ha-logbook {\n          height: 385px;\n          overflow: auto;\n          display: block;\n        }\n\n        ha-circular-progress {\n          display: flex;\n          justify-content: center;\n        }\n      "]);return h=function(){return e},e}function p(e){return function(e){if(Array.isArray(e))return F(e)}(e)||N(e)||L(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(){var e=w(['\n                <div class="no-entries">\n                  ',"\n                </div>\n              "]);return m=function(){return e},e}function y(){var e=w(["\n                <ha-logbook\n                  narrow\n                  relative-time\n                  virtualize\n                  .hass=","\n                  .entries=","\n                  .userIdToName=","\n                ></ha-logbook>\n              "]);return y=function(){return e},e}function v(){var e=w(["\n                <ha-circular-progress\n                  active\n                  alt=","\n                ></ha-circular-progress>\n              "]);return v=function(){return e},e}function g(){var e=w(["\n      <ha-card\n        .header=","\n        class=",'\n      >\n        <div class="content">\n          ',"\n        </div>\n      </ha-card>\n    "]);return g=function(){return e},e}function b(){var e=w(["\n        <hui-warning>\n          ","</hui-warning\n        >\n      "]);return b=function(){return e},e}function k(){var e=w([""]);return k=function(){return e},e}function w(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function _(e,t,n,r,i,o,s){try{var a=e[o](s),c=a.value}catch(l){return void n(l)}a.done?t(c):Promise.resolve(c).then(r,i)}function E(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var o=e.apply(t,n);function s(e){_(o,r,i,s,a,"next",e)}function a(e){_(o,r,i,s,a,"throw",e)}s(void 0)}))}}function S(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function D(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=M(e);if(t){var i=M(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return x(this,n)}}function x(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?O(e):t}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(){j=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(n){t.forEach((function(t){t.kind===n&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var n=e.prototype;["method","field"].forEach((function(r){t.forEach((function(t){var i=t.placement;if(t.kind===r&&("static"===i||"prototype"===i)){var o="static"===i?e:n;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var n=t.descriptor;if("field"===t.kind){var r=t.initializer;n={enumerable:n.enumerable,writable:n.writable,configurable:n.configurable,value:void 0===r?void 0:r.call(e)}}Object.defineProperty(e,t.key,n)},decorateClass:function(e,t){var n=[],r=[],i={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,i)}),this),e.forEach((function(e){if(!z(e))return n.push(e);var t=this.decorateElement(e,i);n.push(t.element),n.push.apply(n,t.extras),r.push.apply(r,t.finishers)}),this),!t)return{elements:n,finishers:r};var o=this.decorateConstructor(n,t);return r.push.apply(r,o.finishers),o.finishers=r,o},addElementPlacement:function(e,t,n){var r=t[e.placement];if(!n&&-1!==r.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");r.push(e.key)},decorateElement:function(e,t){for(var n=[],r=[],i=e.decorators,o=i.length-1;o>=0;o--){var s=t[e.placement];s.splice(s.indexOf(e.key),1);var a=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,i[o])(a)||a);e=c.element,this.addElementPlacement(e,t),c.finisher&&r.push(c.finisher);var l=c.extras;if(l){for(var u=0;u<l.length;u++)this.addElementPlacement(l[u],t);n.push.apply(n,l)}}return{element:e,finishers:r,extras:n}},decorateConstructor:function(e,t){for(var n=[],r=t.length-1;r>=0;r--){var i=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[r])(i)||i);if(void 0!==o.finisher&&n.push(o.finisher),void 0!==o.elements){e=o.elements;for(var s=0;s<e.length-1;s++)for(var a=s+1;a<e.length;a++)if(e[s].key===e[a].key&&e[s].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[s].key+")")}}return{elements:e,finishers:n}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||N(t)||L(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var n=I(e.key),r=String(e.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var i=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:n,placement:r,descriptor:Object.assign({},i)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(i,"get","The property descriptor of a field descriptor"),this.disallowProperty(i,"set","The property descriptor of a field descriptor"),this.disallowProperty(i,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:R(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var n=R(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:n}},runClassFinishers:function(e,t){for(var n=0;n<t.length;n++){var r=(0,t[n])(e);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");e=r}}return e},disallowProperty:function(e,t,n){if(void 0!==e[t])throw new TypeError(n+" can't have a ."+t+" property.")}};return e}function C(e){var t,n=I(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===e.kind?"field":"method",key:n,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(r.decorators=e.decorators),"field"===e.kind&&(r.initializer=e.value),r}function A(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function z(e){return e.decorators&&e.decorators.length}function T(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function R(e,t){var n=e[t];if(void 0!==n&&"function"!=typeof n)throw new TypeError("Expected '"+t+"' to be a function");return n}function I(e){var t=function(e,t){if("object"!==d(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==d(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===d(t)?t:String(t)}function L(e,t){if(e){if("string"==typeof e)return F(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?F(e,t):void 0}}function F(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function N(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function G(e,t,n){return(G="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=M(e)););return e}(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n):i.value}})(e,t,n||e)}function M(e){return(M=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var U=function(e,t,n,r){var i=j();if(r)for(var o=0;o<r.length;o++)i=r[o](i);var s=t((function(e){i.initializeInstanceElements(e,a.elements)}),n),a=i.decorateClass(function(e){for(var t=[],n=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},r=0;r<e.length;r++){var i,o=e[r];if("method"===o.kind&&(i=t.find(n)))if(T(o.descriptor)||T(i.descriptor)){if(z(o)||z(i))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");i.descriptor=o.descriptor}else{if(z(o)){if(z(i))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");i.decorators=o.decorators}A(o,i)}else t.push(o)}return t}(s.d.map(C)),e);return i.initializeClassElements(s.F,a.elements),i.runClassFinishers(s.F,a.finishers)}([(0,r.Mo)("hui-logbook-card")],(function(e,t){var d,w,_=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(r,t);var n=D(r);function r(){var t;S(this,r);for(var i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return t=n.call.apply(n,[this].concat(o)),e(O(t)),t}return r}(t);return{F:_,d:[{kind:"method",static:!0,key:"getConfigElement",value:(w=E(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(5009),n.e(2955),n.e(8161),n.e(9543),n.e(8374),n.e(4268),n.e(3098),n.e(6087),n.e(873),n.e(4535),n.e(6902),n.e(5703),n.e(4237)]).then(n.bind(n,74237));case 2:return e.abrupt("return",document.createElement("hui-logbook-card-editor"));case 3:case"end":return e.stop()}}),e)}))),function(){return w.apply(this,arguments)})},{kind:"method",static:!0,key:"getStubConfig",value:function(e,t,n){return{entities:(0,u.j)(e,3,t,n,["light","switch"])}}},{kind:"field",decorators:[(0,r.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,r.sz)()],key:"_config",value:void 0},{kind:"field",decorators:[(0,r.sz)()],key:"_logbookEntries",value:void 0},{kind:"field",decorators:[(0,r.sz)()],key:"_persons",value:function(){return{}}},{kind:"field",decorators:[(0,r.sz)()],key:"_configEntities",value:void 0},{kind:"field",key:"_lastLogbookDate",value:void 0},{kind:"field",key:"_throttleGetLogbookEntries",value:function(){var e=this;return(0,c.P)((function(){e._getLogBookData()}),1e4)}},{kind:"method",key:"getCardSize",value:function(){var e;return 9+((null===(e=this._config)||void 0===e?void 0:e.title)?1:0)}},{kind:"method",key:"setConfig",value:function(e){if(!e.entities.length)throw new Error("Entities must be specified");this._configEntities=(0,f.A)(e.entities),this._config=Object.assign({hours_to_show:24},e)}},{kind:"method",key:"shouldUpdate",value:function(e){if(e.has("_config")||e.has("_persons")||e.has("_logbookEntries"))return!0;var t=e.get("hass");if(!this._configEntities||!t||t.themes!==this.hass.themes||t.locale!==this.hass.locale)return!0;var n,r=function(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=L(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,a=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return s=e.done,e},e:function(e){a=!0,o=e},f:function(){try{s||null==n.return||n.return()}finally{if(a)throw o}}}}(this._configEntities);try{for(r.s();!(n=r.n()).done;){var i=n.value;if(t.states[i.entity]!==this.hass.states[i.entity])return!0}}catch(o){r.e(o)}finally{r.f()}return!1}},{kind:"method",key:"firstUpdated",value:function(){this._fetchPersonNames()}},{kind:"method",key:"updated",value:function(e){var t=this;if(G(M(_.prototype),"updated",this).call(this,e),this._config&&this.hass){var n=e.has("_config"),r=e.has("hass"),i=e.get("hass"),o=e.get("_config");if((r&&(null==i?void 0:i.themes)!==this.hass.themes||n&&(null==o?void 0:o.theme)!==this._config.theme)&&(0,s.R)(this,this.hass.themes,this._config.theme),!n||(null==o?void 0:o.entities)===this._config.entities&&(null==o?void 0:o.hours_to_show)===this._config.hours_to_show)i&&this._configEntities.some((function(e){return i.states[e.entity]!==t.hass.states[e.entity]}))&&setTimeout(this._throttleGetLogbookEntries,1e3);else{if(this._logbookEntries=void 0,this._lastLogbookDate=void 0,!this._configEntities)return;this._throttleGetLogbookEntries()}}}},{kind:"method",key:"render",value:function(){return this.hass&&this._config?(0,o.p)(this.hass,"logbook")?(0,r.dy)(g(),this._config.title,(0,i.$)({"no-header":!this._config.title}),this._logbookEntries?this._logbookEntries.length?(0,r.dy)(y(),this.hass,this._logbookEntries,this._persons):(0,r.dy)(m(),this.hass.localize("ui.components.logbook.entries_not_found")):(0,r.dy)(v(),this.hass.localize("ui.common.loading"))):(0,r.dy)(b(),this.hass.localize("ui.components.logbook.component_not_loaded")):(0,r.dy)(k())}},{kind:"method",key:"_getLogBookData",value:(d=E(regeneratorRuntime.mark((function e(){var t,n,r,i,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.hass&&this._config&&(0,o.p)(this.hass,"logbook")){e.next=2;break}return e.abrupt("return");case 2:return t=new Date((new Date).getTime()-60*this._config.hours_to_show*60*1e3),n=this._lastLogbookDate||t,r=new Date,e.next=7,(0,l.rM)(this.hass,n.toISOString(),r.toISOString(),this._configEntities.map((function(e){return e.entity})).toString(),!0);case 7:i=e.sent,s=this._logbookEntries?[].concat(p(i),p(this._logbookEntries)):i,this._logbookEntries=s.filter((function(e){return new Date(e.when)>t})),this._lastLogbookDate=r;case 11:case"end":return e.stop()}}),e,this)}))),function(){return d.apply(this,arguments)})},{kind:"method",key:"_fetchPersonNames",value:function(){var e=this;this.hass&&Object.values(this.hass.states).forEach((function(t){t.attributes.user_id&&"person"===(0,a.N)(t)&&(e._persons[t.attributes.user_id]=t.attributes.friendly_name)}))}},{kind:"get",static:!0,key:"styles",value:function(){return[(0,r.iv)(h())]}}]}}),r.oi)}}]);
//# sourceMappingURL=chunk.45713f6aaf4b7ec70a83.js.map