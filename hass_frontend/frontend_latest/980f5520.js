"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[95396],{95396:(e,t,i)=>{i.a(e,(async e=>{i.r(t),i.d(t,{HuiStatisticsGraphCard:()=>E});var r=i(37500),n=i(26767),s=i(5701),o=i(17717),a=i(228),c=(i(22098),i(5372)),l=i(53658),d=i(90271),f=i(58763),h=e([f,c]);function u(){u=function(){return e};var e={elementsDefinitionOrder:[["method"],["field"]],initializeInstanceElements:function(e,t){["method","field"].forEach((function(i){t.forEach((function(t){t.kind===i&&"own"===t.placement&&this.defineClassElement(e,t)}),this)}),this)},initializeClassElements:function(e,t){var i=e.prototype;["method","field"].forEach((function(r){t.forEach((function(t){var n=t.placement;if(t.kind===r&&("static"===n||"prototype"===n)){var s="static"===n?e:i;this.defineClassElement(s,t)}}),this)}),this)},defineClassElement:function(e,t){var i=t.descriptor;if("field"===t.kind){var r=t.initializer;i={enumerable:i.enumerable,writable:i.writable,configurable:i.configurable,value:void 0===r?void 0:r.call(e)}}Object.defineProperty(e,t.key,i)},decorateClass:function(e,t){var i=[],r=[],n={static:[],prototype:[],own:[]};if(e.forEach((function(e){this.addElementPlacement(e,n)}),this),e.forEach((function(e){if(!y(e))return i.push(e);var t=this.decorateElement(e,n);i.push(t.element),i.push.apply(i,t.extras),r.push.apply(r,t.finishers)}),this),!t)return{elements:i,finishers:r};var s=this.decorateConstructor(i,t);return r.push.apply(r,s.finishers),s.finishers=r,s},addElementPlacement:function(e,t,i){var r=t[e.placement];if(!i&&-1!==r.indexOf(e.key))throw new TypeError("Duplicated element ("+e.key+")");r.push(e.key)},decorateElement:function(e,t){for(var i=[],r=[],n=e.decorators,s=n.length-1;s>=0;s--){var o=t[e.placement];o.splice(o.indexOf(e.key),1);var a=this.fromElementDescriptor(e),c=this.toElementFinisherExtras((0,n[s])(a)||a);e=c.element,this.addElementPlacement(e,t),c.finisher&&r.push(c.finisher);var l=c.extras;if(l){for(var d=0;d<l.length;d++)this.addElementPlacement(l[d],t);i.push.apply(i,l)}}return{element:e,finishers:r,extras:i}},decorateConstructor:function(e,t){for(var i=[],r=t.length-1;r>=0;r--){var n=this.fromClassDescriptor(e),s=this.toClassDescriptor((0,t[r])(n)||n);if(void 0!==s.finisher&&i.push(s.finisher),void 0!==s.elements){e=s.elements;for(var o=0;o<e.length-1;o++)for(var a=o+1;a<e.length;a++)if(e[o].key===e[a].key&&e[o].placement===e[a].placement)throw new TypeError("Duplicated element ("+e[o].key+")")}}return{elements:e,finishers:i}},fromElementDescriptor:function(e){var t={kind:e.kind,key:e.key,placement:e.placement,descriptor:e.descriptor};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),"field"===e.kind&&(t.initializer=e.initializer),t},toElementDescriptors:function(e){var t;if(void 0!==e)return(t=e,function(e){if(Array.isArray(e))return e}(t)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||function(e,t){if(e){if("string"==typeof e)return w(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?w(e,t):void 0}}(t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){var t=this.toElementDescriptor(e);return this.disallowProperty(e,"finisher","An element descriptor"),this.disallowProperty(e,"extras","An element descriptor"),t}),this)},toElementDescriptor:function(e){var t=String(e.kind);if("method"!==t&&"field"!==t)throw new TypeError('An element descriptor\'s .kind property must be either "method" or "field", but a decorator created an element descriptor with .kind "'+t+'"');var i=k(e.key),r=String(e.placement);if("static"!==r&&"prototype"!==r&&"own"!==r)throw new TypeError('An element descriptor\'s .placement property must be one of "static", "prototype" or "own", but a decorator created an element descriptor with .placement "'+r+'"');var n=e.descriptor;this.disallowProperty(e,"elements","An element descriptor");var s={kind:t,key:i,placement:r,descriptor:Object.assign({},n)};return"field"!==t?this.disallowProperty(e,"initializer","A method descriptor"):(this.disallowProperty(n,"get","The property descriptor of a field descriptor"),this.disallowProperty(n,"set","The property descriptor of a field descriptor"),this.disallowProperty(n,"value","The property descriptor of a field descriptor"),s.initializer=e.initializer),s},toElementFinisherExtras:function(e){return{element:this.toElementDescriptor(e),finisher:g(e,"finisher"),extras:this.toElementDescriptors(e.extras)}},fromClassDescriptor:function(e){var t={kind:"class",elements:e.map(this.fromElementDescriptor,this)};return Object.defineProperty(t,Symbol.toStringTag,{value:"Descriptor",configurable:!0}),t},toClassDescriptor:function(e){var t=String(e.kind);if("class"!==t)throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator created a class descriptor with .kind "'+t+'"');this.disallowProperty(e,"key","A class descriptor"),this.disallowProperty(e,"placement","A class descriptor"),this.disallowProperty(e,"descriptor","A class descriptor"),this.disallowProperty(e,"initializer","A class descriptor"),this.disallowProperty(e,"extras","A class descriptor");var i=g(e,"finisher");return{elements:this.toElementDescriptors(e.elements),finisher:i}},runClassFinishers:function(e,t){for(var i=0;i<t.length;i++){var r=(0,t[i])(e);if(void 0!==r){if("function"!=typeof r)throw new TypeError("Finishers must return a constructor.");e=r}}return e},disallowProperty:function(e,t,i){if(void 0!==e[t])throw new TypeError(i+" can't have a ."+t+" property.")}};return e}function p(e){var t,i=k(e.key);"method"===e.kind?t={value:e.value,writable:!0,configurable:!0,enumerable:!1}:"get"===e.kind?t={get:e.value,configurable:!0,enumerable:!1}:"set"===e.kind?t={set:e.value,configurable:!0,enumerable:!1}:"field"===e.kind&&(t={configurable:!0,writable:!0,enumerable:!0});var r={kind:"field"===e.kind?"field":"method",key:i,placement:e.static?"static":"field"===e.kind?"own":"prototype",descriptor:t};return e.decorators&&(r.decorators=e.decorators),"field"===e.kind&&(r.initializer=e.value),r}function m(e,t){void 0!==e.descriptor.get?t.descriptor.get=e.descriptor.get:t.descriptor.set=e.descriptor.set}function y(e){return e.decorators&&e.decorators.length}function v(e){return void 0!==e&&!(void 0===e.value&&void 0===e.writable)}function g(e,t){var i=e[t];if(void 0!==i&&"function"!=typeof i)throw new TypeError("Expected '"+t+"' to be a function");return i}function k(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}function _(e,t,i){return _="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,i){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=b(e)););return e}(e,t);if(r){var n=Object.getOwnPropertyDescriptor(r,t);return n.get?n.get.call(i):n.value}},_(e,t,i||e)}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}[f,c]=h.then?await h:h;let E=function(e,t,i,r){var n=u();if(r)for(var s=0;s<r.length;s++)n=r[s](n);var o=t((function(e){n.initializeInstanceElements(e,a.elements)}),i),a=n.decorateClass(function(e){for(var t=[],i=function(e){return"method"===e.kind&&e.key===s.key&&e.placement===s.placement},r=0;r<e.length;r++){var n,s=e[r];if("method"===s.kind&&(n=t.find(i)))if(v(s.descriptor)||v(n.descriptor)){if(y(s)||y(n))throw new ReferenceError("Duplicated methods ("+s.key+") can't be decorated.");n.descriptor=s.descriptor}else{if(y(s)){if(y(n))throw new ReferenceError("Decorators can't be placed on different accessors with for the same property ("+s.key+").");n.decorators=s.decorators}m(s,n)}else t.push(s)}return t}(o.d.map(p)),e);return n.initializeClassElements(o.F,a.elements),n.runClassFinishers(o.F,a.finishers)}([(0,n.M)("hui-statistics-graph-card")],(function(e,t){class n extends t{constructor(...t){super(...t),e(this)}}return{F:n,d:[{kind:"method",static:!0,key:"getConfigElement",value:async function(){return await Promise.all([i.e(78161),i.e(14409),i.e(28055),i.e(54040),i.e(69505),i.e(41248),i.e(85143),i.e(33762),i.e(12581)]).then(i.bind(i,86943)),document.createElement("hui-statistics-graph-card-editor")}},{kind:"method",static:!0,key:"getStubConfig",value:function(){return{type:"statistics-graph",entities:[]}}},{kind:"field",decorators:[(0,s.C)({attribute:!1})],key:"hass",value:void 0},{kind:"field",decorators:[(0,o.S)()],key:"_statistics",value:void 0},{kind:"field",decorators:[(0,o.S)()],key:"_config",value:void 0},{kind:"field",key:"_entities",value:()=>[]},{kind:"field",key:"_names",value:()=>({})},{kind:"field",key:"_fetching",value:()=>!1},{kind:"field",key:"_interval",value:void 0},{kind:"method",key:"disconnectedCallback",value:function(){_(b(n.prototype),"disconnectedCallback",this).call(this),this._interval&&(clearInterval(this._interval),this._interval=void 0)}},{kind:"method",key:"connectedCallback",value:function(){_(b(n.prototype),"connectedCallback",this).call(this),this.hasUpdated&&(this._getStatistics(),clearInterval(this._interval),this._interval=window.setInterval((()=>this._getStatistics()),36e5))}},{kind:"method",key:"getCardSize",value:function(){var e,t;return null!==(e=this._config)&&void 0!==e&&e.title?2:0+2*((null===(t=this._entities)||void 0===t?void 0:t.length)||1)}},{kind:"method",key:"setConfig",value:function(e){if(!e.entities||!Array.isArray(e.entities))throw new Error("Entities need to be an array");if(!e.entities.length)throw new Error("You must include at least one entity");const t=e.entities?(0,d.A)(e.entities,!1):[];this._entities=[],t.forEach((e=>{this._entities.push(e.entity),e.name&&(this._names[e.entity]=e.name)})),"string"==typeof e.stat_types?this._config={...e,stat_types:[e.stat_types]}:e.stat_types?this._config=e:this._config={...e,stat_types:["sum","min","max","mean"]}}},{kind:"method",key:"shouldUpdate",value:function(e){return!!e.has("_statistics")||(0,l.W)(this,e)}},{kind:"method",key:"willUpdate",value:function(e){if(_(b(n.prototype),"willUpdate",this).call(this,e),!this._config||!e.has("_config"))return;const t=e.get("_config");(null==t?void 0:t.entities)===this._config.entities&&(null==t?void 0:t.days_to_show)===this._config.days_to_show||(this._getStatistics(),clearInterval(this._interval),this._interval=window.setInterval((()=>this._getStatistics()),36e5))}},{kind:"method",key:"render",value:function(){return this.hass&&this._config?r.dy`
      <ha-card .header=${this._config.title}>
        <div
          class="content ${(0,a.$)({"has-header":!!this._config.title})}"
        >
          <statistics-chart
            .hass=${this.hass}
            .isLoadingData=${!this._statistics}
            .statisticsData=${this._statistics}
            .chartType=${this._config.chart_type||"line"}
            .statTypes=${this._config.stat_types}
            .names=${this._names}
          ></statistics-chart>
        </div>
      </ha-card>
    `:r.dy``}},{kind:"method",key:"_getStatistics",value:async function(){if(this._fetching)return;const e=new Date;e.setTime(e.getTime()-36e5*(24*(this._config.days_to_show||30)+1)),this._fetching=!0;try{this._statistics=await(0,f.dL)(this.hass,e,void 0,this._entities)}finally{this._fetching=!1}}},{kind:"get",static:!0,key:"styles",value:function(){return r.iv`
      ha-card {
        height: 100%;
      }
      .content {
        padding: 16px;
      }
      .has-header {
        padding-top: 0;
      }
    `}}]}}),r.oi)}))}}]);
//# sourceMappingURL=980f5520.js.map