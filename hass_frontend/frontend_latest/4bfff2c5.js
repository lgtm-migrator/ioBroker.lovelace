/*! For license information please see 4bfff2c5.js.LICENSE.txt */
"use strict";(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[5482],{63207:(e,t,n)=>{n(65660),n(15112);var i=n(9672),r=n(87156),s=n(50856),o=n(94604);(0,i.k)({_template:s.d`
    <style>
      :host {
        @apply --layout-inline;
        @apply --layout-center-center;
        position: relative;

        vertical-align: middle;

        fill: var(--iron-icon-fill-color, currentcolor);
        stroke: var(--iron-icon-stroke-color, none);

        width: var(--iron-icon-width, 24px);
        height: var(--iron-icon-height, 24px);
        @apply --iron-icon;
      }

      :host([hidden]) {
        display: none;
      }
    </style>
`,is:"iron-icon",properties:{icon:{type:String},theme:{type:String},src:{type:String},_meta:{value:o.XY.create("iron-meta",{type:"iconset"})}},observers:["_updateIcon(_meta, isAttached)","_updateIcon(theme, isAttached)","_srcChanged(src, isAttached)","_iconChanged(icon, isAttached)"],_DEFAULT_ICONSET:"icons",_iconChanged:function(e){var t=(e||"").split(":");this._iconName=t.pop(),this._iconsetName=t.pop()||this._DEFAULT_ICONSET,this._updateIcon()},_srcChanged:function(e){this._updateIcon()},_usesIconset:function(){return this.icon||!this.src},_updateIcon:function(){this._usesIconset()?(this._img&&this._img.parentNode&&(0,r.vz)(this.root).removeChild(this._img),""===this._iconName?this._iconset&&this._iconset.removeIcon(this):this._iconsetName&&this._meta&&(this._iconset=this._meta.byKey(this._iconsetName),this._iconset?(this._iconset.applyIcon(this,this._iconName,this.theme),this.unlisten(window,"iron-iconset-added","_updateIcon")):this.listen(window,"iron-iconset-added","_updateIcon"))):(this._iconset&&this._iconset.removeIcon(this),this._img||(this._img=document.createElement("img"),this._img.style.width="100%",this._img.style.height="100%",this._img.draggable=!1),this._img.src=this.src,(0,r.vz)(this.root).appendChild(this._img))}})},15112:(e,t,n)=>{n.d(t,{P:()=>r});n(94604);var i=n(9672);class r{constructor(e){r[" "](e),this.type=e&&e.type||"default",this.key=e&&e.key,e&&"value"in e&&(this.value=e.value)}get value(){var e=this.type,t=this.key;if(e&&t)return r.types[e]&&r.types[e][t]}set value(e){var t=this.type,n=this.key;t&&n&&(t=r.types[t]=r.types[t]||{},null==e?delete t[n]:t[n]=e)}get list(){if(this.type){var e=r.types[this.type];return e?Object.keys(e).map((function(e){return s[this.type][e]}),this):[]}}byKey(e){return this.key=e,this.value}}r[" "]=function(){},r.types={};var s=r.types;(0,i.k)({is:"iron-meta",properties:{type:{type:String,value:"default"},key:{type:String},value:{type:String,notify:!0},self:{type:Boolean,observer:"_selfChanged"},__meta:{type:Boolean,computed:"__computeMeta(type, key, value)"}},hostAttributes:{hidden:!0},__computeMeta:function(e,t,n){var i=new r({type:e,key:t});return void 0!==n&&n!==i.value?i.value=n:this.value!==i.value&&(this.value=i.value),i},get list(){return this.__meta&&this.__meta.list},_selfChanged:function(e){e&&(this.value=this)},byKey:function(e){return new r({type:this.type,key:e}).value}})},23682:(e,t,n)=>{function i(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}n.d(t,{Z:()=>i})},90394:(e,t,n)=>{function i(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}n.d(t,{Z:()=>i})},59699:(e,t,n)=>{n.d(t,{Z:()=>a});var i=n(90394),r=n(39244),s=n(23682),o=36e5;function a(e,t){(0,s.Z)(2,arguments);var n=(0,i.Z)(t);return(0,r.Z)(e,n*o)}},39244:(e,t,n)=>{n.d(t,{Z:()=>o});var i=n(90394),r=n(34327),s=n(23682);function o(e,t){(0,s.Z)(2,arguments);var n=(0,r.Z)(e).getTime(),o=(0,i.Z)(t);return new Date(n+o)}},4535:(e,t,n)=>{n.d(t,{Z:()=>l});var i=n(34327);function r(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}var s=n(59429),o=n(23682),a=864e5;function u(e,t){(0,o.Z)(2,arguments);var n=(0,s.Z)(e),i=(0,s.Z)(t),u=n.getTime()-r(n),c=i.getTime()-r(i);return Math.round((u-c)/a)}function c(e,t){var n=e.getFullYear()-t.getFullYear()||e.getMonth()-t.getMonth()||e.getDate()-t.getDate()||e.getHours()-t.getHours()||e.getMinutes()-t.getMinutes()||e.getSeconds()-t.getSeconds()||e.getMilliseconds()-t.getMilliseconds();return n<0?-1:n>0?1:n}function l(e,t){(0,o.Z)(2,arguments);var n=(0,i.Z)(e),r=(0,i.Z)(t),s=c(n,r),a=Math.abs(u(n,r));n.setDate(n.getDate()-s*a);var l=Number(c(n,r)===-s),h=s*(a-l);return 0===h?0:h}},93752:(e,t,n)=>{n.d(t,{Z:()=>s});var i=n(34327),r=n(23682);function s(e){(0,r.Z)(1,arguments);var t=(0,i.Z)(e);return t.setHours(23,59,59,999),t}},70390:(e,t,n)=>{n.d(t,{Z:()=>r});var i=n(93752);function r(){return(0,i.Z)(Date.now())}},47538:(e,t,n)=>{function i(){var e=new Date,t=e.getFullYear(),n=e.getMonth(),i=e.getDate(),r=new Date(0);return r.setFullYear(t,n,i-1),r.setHours(23,59,59,999),r}n.d(t,{Z:()=>i})},59429:(e,t,n)=>{n.d(t,{Z:()=>s});var i=n(34327),r=n(23682);function s(e){(0,r.Z)(1,arguments);var t=(0,i.Z)(e);return t.setHours(0,0,0,0),t}},27088:(e,t,n)=>{n.d(t,{Z:()=>r});var i=n(59429);function r(){return(0,i.Z)(Date.now())}},83008:(e,t,n)=>{function i(){var e=new Date,t=e.getFullYear(),n=e.getMonth(),i=e.getDate(),r=new Date(0);return r.setFullYear(t,n,i-1),r.setHours(0,0,0,0),r}n.d(t,{Z:()=>i})},34327:(e,t,n)=>{n.d(t,{Z:()=>r});var i=n(23682);function r(e){(0,i.Z)(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}},21560:(e,t,n)=>{n.d(t,{ZH:()=>l,MT:()=>s,U2:()=>u,RV:()=>r,t8:()=>c});const i=function(){if(!(!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent))||!indexedDB.databases)return Promise.resolve();let e;return new Promise((t=>{const n=()=>indexedDB.databases().finally(t);e=setInterval(n,100),n()})).finally((()=>clearInterval(e)))};function r(e){return new Promise(((t,n)=>{e.oncomplete=e.onsuccess=()=>t(e.result),e.onabort=e.onerror=()=>n(e.error)}))}function s(e,t){const n=i().then((()=>{const n=indexedDB.open(e);return n.onupgradeneeded=()=>n.result.createObjectStore(t),r(n)}));return(e,i)=>n.then((n=>i(n.transaction(t,e).objectStore(t))))}let o;function a(){return o||(o=s("keyval-store","keyval")),o}function u(e,t=a()){return t("readonly",(t=>r(t.get(e))))}function c(e,t,n=a()){return n("readwrite",(n=>(n.put(t,e),r(n.transaction))))}function l(e=a()){return e("readwrite",(e=>(e.clear(),r(e.transaction))))}}}]);
//# sourceMappingURL=4bfff2c5.js.map