(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[7071],{45890:function(e,t,r){"use strict";function n(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  ha-switch {\n    padding: 16px 6px;\n  }\n  .side-by-side {\n    display: flex;\n  }\n  .side-by-side > * {\n    flex: 1;\n    padding-right: 8px;\n  }\n  .side-by-side > *:last-child {\n    flex: 1;\n    padding-right: 0;\n  }\n  .suffix {\n    margin: 0 8px;\n  }\n"]);return n=function(){return e},e}r.d(t,{A:function(){return i}});var i=(0,r(15652).iv)(n())},87071:function(e,t,r){"use strict";r.r(t),r.d(t,{HuiGraphFooterEditor:function(){return O}});r(8878),r(30879);var n=r(15652),i=r(4268),o=r(47181),a=(r(74535),r(83927),r(43709),r(48626)),s=r(45890);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(){var e=f(['\n      <div class="card-config">\n        <ha-entity-picker\n          allow-custom-entity\n          .label="'," (",')"\n          .hass=',"\n          .value=","\n          .configValue=","\n          .includeDomains=","\n          @change=",'\n        ></ha-entity-picker>\n        <div class="side-by-side">\n          <ha-formfield\n            label=',"\n          >\n            <ha-switch\n              .checked=","\n              .configValue=","\n              @change=",'\n            ></ha-switch>\n          </ha-formfield>\n          <paper-input\n            type="number"\n            .label="'," (",')"\n            .value=',"\n            .configValue=","\n            @value-changed=","\n          ></paper-input>\n        </div>\n      </div>\n    "]);return l=function(){return e},e}function u(){var e=f([""]);return u=function(){return e},e}function f(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=v(e);if(t){var i=v(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return y(this,r)}}function y(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?m(e):t}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(){_=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(r){t.forEach((function(t){t.kind===r&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var r=e.prototype;["method","field"].forEach((function(n){t.forEach((function(t){var i=t.placement;if(t.kind===n&&("static"===i||"prototype"===i)){var o="static"===i?e:r;this.defineClassElement(o,t)}}),this)}),this)},defineClassElement:function(e,t){var r=t.descriptor;if("field"===t.kind){var n=t.initializer;r={enumerable:r.enumerable,writable:r.writable,configurable:r.configurable,value:void 0===n?void 0:n.call(e)}}Object.defineProperty(e,t.key,r)},decorateClass:function(e,t){var r=[],n=[],i={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,i)}),this),e.forEach((function(e){if(!w(e))return r.push(e);var t=this.decorateElement(e,i);r.push(t.element),r.push.apply(r,t.extras),n.push.apply(n,t.finishers)}),this),!t)return{elements:r,finishers:n};var o=this.decorateConstructor(r,t);return n.push.apply(n,o.finishers),o.finishers=n,o},addElementPlacement:function(e,t,r){var n=t[e.placement];if(!r&&-1!==n.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");n.push(e.key)},decorateElement:function(e,t){for(var r=[],n=[],i=e.decorators,o=i.length-1;o>=0;o--){var a=t[e.placement];a.splice(a.indexOf(e.key),1);var s=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,i[o])(s)||s);e=c.element,this.addElementPlacement(e,t),c.finisher&&n.push(c.finisher);var l=c.extras;if(l){for(var u=0;u<l.length;u++)this.addElementPlacement(l[u],t);r.push.apply(r,l)}}return{element:e,finishers:n,extras:r}},decorateConstructor:function(e,t){for(var r=[],n=t.length-1;n>=0;n--){var i=this.fromClassDescriptor(e),o=this.toClassDescriptor((0,t[n])(i)||i);if(void 0!==o.finisher&&r.push(o.finisher),void 0!==o.elements){e=o.elements;for(var a=0;a<e.length-1;a++)for(var s=a+1;s<e.length;s++)if(e[a].key===e[s].key&&e[a].placement===e[s].placement)throw new TypeError("Duplicated element ("+e[a].key+")")}}return{elements:e,finishers:r}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return E(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?E(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var r=Z(e.key),n=String(e.placement);if("static"!==n&&"prototype"!==n&&"own"!==n)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+n+'"');var i=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var o={kind:t,key:r,placement:n,descriptor:Object.assign({},i)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(i,"get","The property descriptor of a field descriptor"),this.disallowProperty(i,"set","The property descriptor of a field descriptor"),this.disallowProperty(i,"value","The property descriptor of a field descriptor"),o.initializer=e.initializer),o},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:k(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var r=k(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:r}},runClassFinishers:function(e,t){for(var r=0;r<t.length;r++){var n=(0,t[r])(e);if(void 0!==n){if("function"!=typeof n)throw new TypeError("Finishers must return a constructor.");e=n}}return e},disallowProperty:function(e,t,r){if(void 0!==e[t])throw new TypeError(r+" can't have a ."+t+" property.")}};return e}function g(e){var t,r=Z(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var n={kind:"field"===e.kind?"field":"method",key:r,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(n.decorators=e.decorators),"field"===e.kind&&(n.initializer=e.value),n}function b(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function w(e){return e.decorators&&e.decorators.length}function j(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function k(e,t){var r=e[t];if(void 0!==r&&"function"!=typeof r)throw new TypeError("Expected '"+t+"' to be a function");return r}function Z(e){var t=function(e,t){if("object"!==c(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===c(t)?t:String(t)}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var R=["sensor"],O=function(e,t,r,n){var i=_();if(n)for(var o=0;o<n.length;o++)i=n[o](i);var a=t((function(e){i.initializeInstanceElements(e,s.elements)}),r),s=i.decorateClass(function(e){for(var t=[],r=function(e){return"method"===e.kind&&e.key===o.key&&e.placement===o.placement},n=0;n<e.length;n++){var i,o=e[n];if("method"===o.kind&&(i=t.find(r)))if(j(o.descriptor)||j(i.descriptor)){if(w(o)||w(i))throw new ReferenceError("Duplicated methods ("+o.key+") can't be decorated.");i.descriptor=o.descriptor}else{if(w(o)){if(w(i))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+o.key+").");i.decorators=o.decorators}b(o,i)}else t.push(o)}return t}(a.d.map(g)),e);return i.initializeClassElements(a.F,s.elements),i.runClassFinishers(a.F,s.finishers)}([(0,n.Mo)("hui-graph-footer-editor")],(function(e,t){return{F:function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(n,t);var r=h(n);function n(){var t;d(this,n);for(var i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];return t=r.call.apply(r,[this].concat(o)),e(m(t)),t}return n}(t),d:[{kind:"field",decorators:[(0,n.Cb)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,n.sz)()],key:"_config",value:void 0},{kind:"method",key:"setConfig",value:function(e){(0,i.hu)(e,a.gg),this._config=e}},{kind:"get",key:"_entity",value:function(){return this._config.entity||""}},{kind:"get",key:"_detail",value:function(){var e;return null!==(e=this._config.detail)&&void 0!==e?e:1}},{kind:"get",key:"_hours_to_show",value:function(){return this._config.hours_to_show||24}},{kind:"method",key:"render",value:function(){return this.hass&&this._config?(0,n.dy)(l(),this.hass.localize("ui.panel.lovelace.editor.card.generic.entity"),this.hass.localize("ui.panel.lovelace.editor.card.config.required"),this.hass,this._entity,"entity",R,this._valueChanged,this.hass.localize("ui.panel.lovelace.editor.card.sensor.show_more_detail"),2===this._detail,"detail",this._change,this.hass.localize("ui.panel.lovelace.editor.card.generic.hours_to_show"),this.hass.localize("ui.panel.lovelace.editor.card.config.optional"),this._hours_to_show,"hours_to_show",this._valueChanged):(0,n.dy)(u())}},{kind:"method",key:"_change",value:function(e){if(this._config&&this.hass){var t=e.target.checked?2:1;this._detail!==t&&(this._config=Object.assign({},this._config,{detail:t}),(0,o.B)(this,"config-changed",{config:this._config}))}}},{kind:"method",key:"_valueChanged",value:function(e){if(this._config&&this.hass){var t=e.target;if(this["_".concat(t.configValue)]!==t.value){if(t.configValue)if(""===t.value||"number"===t.type&&isNaN(Number(t.value)))this._config=Object.assign({},this._config),delete this._config[t.configValue];else{var r=t.value;"number"===t.type&&(r=Number(r)),this._config=Object.assign({},this._config,function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}({},t.configValue,r))}(0,o.B)(this,"config-changed",{config:this._config})}}}},{kind:"get",static:!0,key:"styles",value:function(){return s.A}}]}}),n.oi)},51598:function(e,t,r){"use strict";r.d(t,{fJ:function(){return i},KA:function(){return b}});var n=r(4268),i=(0,n.D8)((function(e,t){return t.branch[0][t.path[0]]&&l[t.branch[0][t.path[0]].action]||u})),o=(0,n.Ry)({user:(0,n.Z_)()}),a=(0,n.G0)([(0,n.O7)(),(0,n.Ry)({text:(0,n.jt)((0,n.Z_)()),excemptions:(0,n.jt)((0,n.IX)(o))})]),s=(0,n.Ry)({action:(0,n.i0)("url"),url_path:(0,n.Z_)(),confirmation:(0,n.jt)(a)}),c=(0,n.Ry)({action:(0,n.i0)("call-service"),service:(0,n.Z_)(),service_data:(0,n.jt)((0,n.Ry)()),target:(0,n.jt)((0,n.Ry)({entity_id:(0,n.jt)((0,n.G0)([(0,n.Z_)(),(0,n.IX)((0,n.Z_)())])),device_id:(0,n.jt)((0,n.G0)([(0,n.Z_)(),(0,n.IX)((0,n.Z_)())])),area_id:(0,n.jt)((0,n.G0)([(0,n.Z_)(),(0,n.IX)((0,n.Z_)())]))})),confirmation:(0,n.jt)(a)}),l={url:s,navigate:(0,n.Ry)({action:(0,n.i0)("navigate"),navigation_path:(0,n.Z_)(),confirmation:(0,n.jt)(a)}),"call-service":c},u=(0,n.Ry)({action:(0,n.kE)(["none","toggle","more-info","call-service","url","navigate"]),confirmation:(0,n.jt)(a)}),f=(0,n.Ry)({type:(0,n.Z_)(),name:(0,n.Z_)(),action_name:(0,n.jt)((0,n.Z_)()),tap_action:i,hold_action:(0,n.jt)(i),double_tap_action:(0,n.jt)(i)}),d=(0,n.Ry)({type:(0,n.Z_)(),view:(0,n.G0)([(0,n.Z_)(),(0,n.Rx)()]),dashboard:(0,n.jt)((0,n.Z_)()),name:(0,n.jt)((0,n.Z_)()),icon:(0,n.jt)((0,n.Z_)()),hide_if_unavailable:(0,n.jt)((0,n.O7)())}),p=(0,n.Ry)({type:(0,n.Z_)(),name:(0,n.Z_)(),service:(0,n.Z_)(),icon:(0,n.jt)((0,n.Z_)()),action_name:(0,n.jt)((0,n.Z_)()),service_data:(0,n.jt)((0,n.Yj)())}),h=(0,n.Ry)({type:(0,n.Z_)(),row:(0,n.Yj)(),conditions:(0,n.IX)((0,n.Ry)({entity:(0,n.Z_)(),state:(0,n.jt)((0,n.Z_)()),state_not:(0,n.jt)((0,n.Z_)())}))}),y=(0,n.Ry)({type:(0,n.Z_)(),style:(0,n.jt)((0,n.Yj)())}),m=(0,n.Ry)({type:(0,n.Z_)(),label:(0,n.jt)((0,n.Z_)())}),v=(0,n.Ry)({type:(0,n.Z_)(),url:(0,n.Z_)(),name:(0,n.jt)((0,n.Z_)()),icon:(0,n.jt)((0,n.Z_)())}),_=(0,n.Ry)({type:(0,n.Z_)(),entities:(0,n.IX)((0,n.G0)([(0,n.Ry)({entity:(0,n.Z_)(),icon:(0,n.jt)((0,n.Z_)()),image:(0,n.jt)((0,n.Z_)()),name:(0,n.jt)((0,n.Z_)())}),(0,n.Z_)()]))}),g=(0,n.Ry)({type:(0,n.Z_)(),entity:(0,n.Z_)(),attribute:(0,n.Z_)(),prefix:(0,n.jt)((0,n.Z_)()),suffix:(0,n.jt)((0,n.Z_)()),name:(0,n.jt)((0,n.Z_)())}),b=(0,n.G0)([(0,n.Ry)({entity:(0,n.Z_)(),name:(0,n.jt)((0,n.Z_)()),icon:(0,n.jt)((0,n.Z_)()),image:(0,n.jt)((0,n.Z_)()),secondary_info:(0,n.jt)((0,n.Z_)()),format:(0,n.jt)((0,n.Z_)()),state_color:(0,n.jt)((0,n.O7)()),tap_action:(0,n.jt)(i),hold_action:(0,n.jt)(i),double_tap_action:(0,n.jt)(i)}),(0,n.Z_)(),f,d,h,y,m,v,_,g,p])},48626:function(e,t,r){"use strict";r.d(t,{gg:function(){return s},ds:function(){return c}});var n=r(4268),i=r(51598),o=(0,n.Ry)({type:(0,n.Z_)(),image:(0,n.Z_)(),tap_action:(0,n.jt)(i.fJ),hold_action:(0,n.jt)(i.fJ),double_tap_action:(0,n.jt)(i.fJ)}),a=(0,n.Ry)({type:(0,n.Z_)(),entities:(0,n.IX)(i.KA)}),s=(0,n.Ry)({type:(0,n.Z_)(),entity:(0,n.Z_)(),detail:(0,n.jt)((0,n.Rx)()),hours_to_show:(0,n.jt)((0,n.Rx)())}),c=(0,n.G0)([o,a,s])}}]);
//# sourceMappingURL=chunk.3c41609f2e855ab97f5c.js.map