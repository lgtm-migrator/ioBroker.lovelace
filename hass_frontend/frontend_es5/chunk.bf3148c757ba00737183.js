(self.webpackJsonp=self.webpackJsonp||[]).push([[81],{378:function(t,e,n){"use strict";n.r(e);var s,i,r=n(91),a=n(282),o=n(256),c=n(281);n.d(e,"CastManager",function(){return u}),n.d(e,"getCastManager",function(){return h});var u=function(){function t(t){var e=this;this._eventListeners={},this.auth=t;var n=this.castContext;n.setOptions({receiverApplicationId:a.a,autoJoinPolicy:chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED}),n.addEventListener(cast.framework.CastContextEventType.SESSION_STATE_CHANGED,function(t){return e._sessionStateChanged(t)}),n.addEventListener(cast.framework.CastContextEventType.CAST_STATE_CHANGED,function(t){return e._castStateChanged(t)})}return t.prototype.addEventListener=function(t,e){var n=this;return t in this._eventListeners||(this._eventListeners[t]=[]),this._eventListeners[t].push(e),function(){n._eventListeners[t].splice(n._eventListeners[t].indexOf(e))}},Object.defineProperty(t.prototype,"castConnectedToOurHass",{get:function(){return void 0!==this.status&&void 0!==this.auth&&this.status.connected&&(this.status.hassUrl===this.auth.data.hassUrl||a.b&&this.status.hassUrl===o.b)},enumerable:!0,configurable:!0}),t.prototype.sendMessage=function(t){this.castSession.sendMessage(a.c,t)},Object.defineProperty(t.prototype,"castState",{get:function(){return this.castContext.getCastState()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"castContext",{get:function(){return cast.framework.CastContext.getInstance()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"castSession",{get:function(){return this.castContext.getCurrentSession()},enumerable:!0,configurable:!0}),t.prototype.requestSession=function(){return this.castContext.requestSession()},t.prototype._fireEvent=function(t){for(var e=0,n=this._eventListeners[t]||[];e<n.length;e++){(0,n[e])()}},t.prototype._receiveMessage=function(t){"receiver_status"===t.type&&(this.status=t,this._fireEvent("connection-changed"))},t.prototype._sessionStateChanged=function(t){"SESSION_STARTED"===t.sessionState||"SESSION_RESUMED"===t.sessionState?(this.auth?Object(c.a)(this,this.auth):this.sendMessage({type:"get_status"}),this._attachMessageListener()):"SESSION_ENDED"===t.sessionState&&(this.status=void 0,this._fireEvent("connection-changed"))},t.prototype._castStateChanged=function(t){this._fireEvent("state-changed")},t.prototype._attachMessageListener=function(){var t=this;this.castSession.addMessageListener(a.c,function(e,n){return t._receiveMessage(JSON.parse(n))})},t}(),h=function(t){return i||(i=function(){if(s)return s;s=new Promise(function(t){window.__onGCastApiAvailable=t});var t=document.createElement("div");return t.id="cast",document.body.append(t),Object(r.b)("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1"),s}().then(function(e){if(!e)throw new Error("No Cast API available");return new u(t)})),i}}}]);
//# sourceMappingURL=chunk.bf3148c757ba00737183.js.map