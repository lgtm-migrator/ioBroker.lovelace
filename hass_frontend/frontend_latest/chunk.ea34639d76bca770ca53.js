(self.webpackChunkhome_assistant_frontend=self.webpackChunkhome_assistant_frontend||[]).push([[1960],{51960:(e,t,s)=>{"use strict";s.d(t,{AR:()=>y});var i=s(94707);class n{constructor(e){this._createElementFn=null,this._updateElementFn=null,this._recycleElementFn=null,this._elementKeyFn=null,this._items=[],this._totalItems=null,this._needsReset=!1,this._needsRemeasure=!1,this._active=new Map,this._prevActive=new Map,this._keyToChild=new Map,this._childToKey=new WeakMap,this._indexToMeasure={},this.__incremental=!1,this._measureCallback=null,this._num=1/0,this._first=0,this._last=0,this._prevFirst=0,this._prevLast=0,this._pendingRender=null,this._container=null,this._ordered=[],e&&Object.assign(this,e)}get container(){return this._container}set container(e){e!==this._container&&(this._container&&this._ordered.forEach((e=>this._removeChild(e))),this._container=e,e?this._ordered.forEach((e=>this._insertBefore(e,null))):(this._ordered.length=0,this._active.clear(),this._prevActive.clear()),this.requestReset())}get createElement(){return this._createElementFn}set createElement(e){e!==this._createElementFn&&(this._createElementFn=e,this._keyToChild.clear(),this.requestReset())}get updateElement(){return this._updateElementFn}set updateElement(e){e!==this._updateElementFn&&(this._updateElementFn=e,this.requestReset())}get recycleElement(){return this._recycleElementFn}set recycleElement(e){e!==this._recycleElementFn&&(this._recycleElementFn=e,this.requestReset())}get elementKey(){return this._elementKeyFn}set elementKey(e){e!==this._elementKeyFn&&(this._elementKeyFn=e,this._keyToChild.clear(),this.requestReset())}get first(){return this._first}set first(e){if("number"!=typeof e)throw new Error("New value must be a number.");const t=Math.max(0,Math.min(e,this.totalItems-this._num));t!==this._first&&(this._first=t,this._scheduleRender())}get num(){return this._num}set num(e){if("number"!=typeof e)throw new Error("New value must be a number.");e!==this._num&&(this._num=e,this.first=this._first,this._scheduleRender())}get items(){return this._items}set items(e){e!==this._items&&Array.isArray(e)&&(this._items=e,this.requestReset())}get totalItems(){return null===this._totalItems?this._items.length:this._totalItems}set totalItems(e){if("number"!=typeof e&&null!==e)throw new Error("New value must be a number.");e!==this._totalItems&&(this._totalItems=e,this.first=this._first,this.requestReset())}get _incremental(){return this.__incremental}set _incremental(e){e!==this.__incremental&&(this.__incremental=e,this._scheduleRender())}requestRemeasure(){this._needsRemeasure=!0,this._scheduleRender()}_shouldRender(){return Boolean(this.container&&this.createElement)}async _scheduleRender(){this._pendingRender||(this._pendingRender=!0,await Promise.resolve(),this._pendingRender=!1,this._shouldRender()&&this._render())}requestReset(){this._needsReset=!0,this._scheduleRender()}get _toMeasure(){return this._ordered.reduce(((e,t,s)=>{const i=this._first+s;return(this._needsReset||this._needsRemeasure||i<this._prevFirst||i>this._prevLast)&&(e.indices.push(i),e.children.push(t)),e}),{indices:[],children:[]})}async _measureChildren({indices:e,children:t}){await new Promise((e=>{requestAnimationFrame(e)}));const s=t.map((e=>this._measureChild(e))).reduce(((t,s,i)=>(t[e[i]]=this._indexToMeasure[e[i]]=s,t)),{});this._measureCallback(s)}async _render(){const e=this._first!==this._prevFirst||this._num!==this._prevNum;(e||this._needsReset)&&(this._last=this._first+Math.min(this._num,this.totalItems-this._first)-1,(this._num||this._prevNum)&&(this._needsReset?this._reset(this._first,this._last):(this._discardHead(),this._discardTail(),this._addHead(),this._addTail()))),(this._needsRemeasure||this._needsReset)&&(this._indexToMeasure={});const t=this._num>0&&this._measureCallback&&(e||this._needsRemeasure||this._needsReset)?this._toMeasure:null;this._incremental||(this._prevActive.forEach(((e,t)=>this._unassignChild(t,e))),this._prevActive.clear()),this._prevFirst=this._first,this._prevLast=this._last,this._prevNum=this._num,this._needsReset=!1,this._needsRemeasure=!1,this._didRender(),t&&await this._measureChildren(t)}_didRender(){}_discardHead(){const e=this._ordered;for(let t=this._prevFirst;e.length&&t<this._first;t++)this._unassignChild(e.shift(),t)}_discardTail(){const e=this._ordered;for(let t=this._prevLast;e.length&&t>this._last;t--)this._unassignChild(e.pop(),t)}_addHead(){const e=this._first;for(let t=Math.min(this._last,this._prevFirst-1);t>=e;t--){const e=this._assignChild(t);this._insertBefore(e,this._firstChild),this.updateElement&&this.updateElement(e,this._items[t],t),this._ordered.unshift(e)}}_addTail(){const e=Math.max(this._first,this._prevLast+1),t=this._last;for(let s=e;s<=t;s++){const e=this._assignChild(s);this._insertBefore(e,null),this.updateElement&&this.updateElement(e,this._items[s],s),this._ordered.push(e)}}_reset(e,t){const s=this._active;this._active=this._prevActive,this._prevActive=s,this._ordered.length=0;let i=this._firstChild;for(let s=e;s<=t;s++){const e=this._assignChild(s);this._ordered.push(e),i?i===this._node(e)?i=this._nextSibling(e):this._insertBefore(e,i):this._childIsAttached(e)||this._insertBefore(e,null),this.updateElement&&this.updateElement(e,this._items[s],s)}}_assignChild(e){const t=this.elementKey?this.elementKey(e):e;let s;return(s=this._keyToChild.get(t))?this._prevActive.delete(s):(s=this.createElement(this._items[e],e),this._keyToChild.set(t,s),this._childToKey.set(s,t)),this._showChild(s),this._active.set(s,e),s}_unassignChild(e,t){if(this._hideChild(e),this._incremental)this._active.delete(e),this._prevActive.set(e,t);else{const s=this._childToKey.get(e);this._childToKey.delete(e),this._keyToChild.delete(s),this._active.delete(e),this.recycleElement?this.recycleElement(e,t):this._node(e).parentNode&&this._removeChild(e)}}get _firstChild(){return this._ordered.length&&this._childIsAttached(this._ordered[0])?this._node(this._ordered[0]):null}_node(e){return e}_nextSibling(e){return e.nextSibling}_insertBefore(e,t){this._container.insertBefore(e,t)}_removeChild(e){e.parentNode.removeChild(e)}_childIsAttached(e){const t=this._node(e);return t&&t.parentNode===this._container}_hideChild(e){e instanceof HTMLElement&&(e.style.display="none")}_showChild(e){e instanceof HTMLElement&&(e.style.display=null)}_measureChild(e){const{width:t,height:s}=e.getBoundingClientRect();return Object.assign({width:t,height:s},function(e){const t=window.getComputedStyle(e);return{marginTop:r(t.marginTop),marginRight:r(t.marginRight),marginBottom:r(t.marginBottom),marginLeft:r(t.marginLeft)}}(e))}}function r(e){const t=e?parseFloat(e):NaN;return Number.isNaN(t)?0:t}const h=e=>class extends e{constructor(e){const{part:t,renderItem:s,useShadowDOM:i,layout:n}=e,r=t.startNode.parentNode;super({container:r,scrollTarget:e.scrollTarget||r,useShadowDOM:i,layout:n}),this._pool=[],this._renderItem=s,this._hostPart=t}createElement(){return this._pool.pop()||new i.nt(this._hostPart.options)}updateElement(e,t,s){e.setValue(this._renderItem(t,s)),e.commit()}recycleElement(e){this._pool.push(e)}get _kids(){return this._ordered.map((e=>e.startNode.nextElementSibling))}_node(e){return e.startNode}_nextSibling(e){return e.endNode.nextSibling}_insertBefore(e,t){if(null===t&&(t=this._hostPart.endNode),this._childIsAttached(e)){const s=e.endNode.nextSibling;if(t!==e.startNode&&t!==s)for(let i=e.startNode;i!==s;){const e=i.nextSibling;super._insertBefore(i,t),i=e}}else e.startNode=(0,i.IW)(),e.endNode=(0,i.IW)(),super._insertBefore(e.startNode,t),super._insertBefore(e.endNode,t)}_hideChild(e){let t=e.startNode;for(;t&&t!==e.endNode;)super._hideChild(t),t=t.nextSibling}_showChild(e){let t=e.startNode;for(;t&&t!==e.endNode;)super._showChild(t),t=t.nextSibling}_measureChild(e){return super._measureChild(e.startNode.nextElementSibling)}};class l extends(h(n)){}const o=new WeakMap;(0,i.XM)((e=>async t=>{let s=o.get(t);s||(t.startNode.isConnected||await Promise.resolve(),s=new l({part:t,renderItem:e.renderItem}),o.set(t,s));const{first:i,num:n,totalItems:r}=e;Object.assign(s,{first:i,num:n,totalItems:r})}));let a;async function _(){return a||async function(){a=window.ResizeObserver;try{new a((function(){}))}catch(e){a=(await s.e(8800).then(s.bind(s,88800))).default}return a}()}const d="uni-virtualizer-host";let c=null;function u(e,t){return`\n    ${e} {\n      display: block;\n      position: relative;\n      contain: strict;\n      height: 150px;\n      overflow: auto;\n    }\n    ${t} {\n      box-sizing: border-box;\n    }`}class m extends Event{constructor(e,t){super(e,t),this._first=Math.floor(t.first||0),this._last=Math.floor(t.last||0),this._firstVisible=Math.floor(t.firstVisible||0),this._lastVisible=Math.floor(t.lastVisible||0)}get first(){return this._first}get last(){return this._last}get firstVisible(){return this._firstVisible}get lastVisible(){return this._lastVisible}}class p extends n{constructor(e){super({}),this._needsUpdateView=!1,this._layout=null,this._lazyLoadDefaultLayout=!0,this._scrollTarget=null,this._sizer=null,this._scrollSize=null,this._scrollErr=null,this._childrenPos=null,this._containerElement=null,this._containerInlineStyle=null,this._containerStylesheet=null,this._useShadowDOM=!0,this._containerSize=null,this._containerRO=null,this._childrenRO=null,this._skipNextChildrenSizeChanged=!1,this._scrollToIndex=null,this._num=0,this._first=-1,this._last=-1,this._prevFirst=-1,this._prevLast=-1,e&&Object.assign(this,e)}get container(){return super.container}set container(e){super.container=e,this._initResizeObservers().then((()=>{const t=this._containerElement,s=e&&e.nodeType===Node.DOCUMENT_FRAGMENT_NODE?e.host:e;t!==s&&(this._containerRO.disconnect(),this._containerSize=null,t?(this._containerInlineStyle?t.setAttribute("style",this._containerInlineStyle):t.removeAttribute("style"),this._containerInlineStyle=null,t===this._scrollTarget&&(t.removeEventListener("scroll",this,{passive:!0}),this._sizer&&this._sizer.remove())):addEventListener("scroll",this,{passive:!0}),this._containerElement=s,s&&(this._containerInlineStyle=s.getAttribute("style")||null,this._applyContainerStyles(),s===this._scrollTarget&&(this._sizer=this._sizer||this._createContainerSizer(),this._container.prepend(this._sizer)),this._scheduleUpdateView(),this._containerRO.observe(s)))}))}get layout(){return this._layout}set layout(e){e!==this._layout&&(this._layout&&(this._measureCallback=null,this._layout.removeEventListener("scrollsizechange",this),this._layout.removeEventListener("scrollerrorchange",this),this._layout.removeEventListener("itempositionchange",this),this._layout.removeEventListener("rangechange",this),this._containerElement&&this._sizeContainer(void 0)),this._layout=e,this._layout&&("function"==typeof this._layout.updateItemSizes&&(this._measureCallback=this._layout.updateItemSizes.bind(this._layout),this.requestRemeasure()),this._layout.addEventListener("scrollsizechange",this),this._layout.addEventListener("scrollerrorchange",this),this._layout.addEventListener("itempositionchange",this),this._layout.addEventListener("rangechange",this),this._scheduleUpdateView()))}get scrollTarget(){return this._scrollTarget}set scrollTarget(e){e===window&&(e=null),this._scrollTarget!==e&&(this._scrollTarget&&(this._scrollTarget.removeEventListener("scroll",this,{passive:!0}),this._sizer&&this._scrollTarget===this._containerElement&&this._sizer.remove()),this._scrollTarget=e,e&&(e.addEventListener("scroll",this,{passive:!0}),e===this._containerElement&&(this._sizer=this._sizer||this._createContainerSizer(),this._container.prepend(this._sizer))))}get useShadowDOM(){return this._useShadowDOM}set useShadowDOM(e){this._useShadowDOM!==e&&(this._useShadowDOM=Boolean(e),this._containerStylesheet&&(this._containerStylesheet.parentElement.removeChild(this._containerStylesheet),this._containerStylesheet=null),this._applyContainerStyles())}set scrollToIndex(e){this._scrollToIndex=e,this._scheduleUpdateView()}async _render(){if(!this._lazyLoadDefaultLayout||this._layout){for(this._childrenRO.disconnect(),this._layout.totalItems=this.totalItems,this._needsUpdateView&&(this._needsUpdateView=!1,this._updateView()),null!==this._scrollToIndex&&(this._layout.scrollToIndex(this._scrollToIndex.index,this._scrollToIndex.position),this._scrollToIndex=null),this._layout.reflowIfNeeded();this._pendingRender&&(this._pendingRender=!1),this._sizeContainer(this._scrollSize),this._scrollErr&&(this._correctScrollError(this._scrollErr),this._scrollErr=null),await super._render(),this._layout.reflowIfNeeded(),this._pendingRender;);this._skipNextChildrenSizeChanged=!0,this._kids.forEach((e=>this._childrenRO.observe(e)))}else{this._lazyLoadDefaultLayout=!1;const{Layout1d:e}=await s.e(7690).then(s.bind(s,57690));this.layout=new e({})}}_didRender(){this._childrenPos&&(this._positionChildren(this._childrenPos),this._childrenPos=null)}handleEvent(e){switch(e.type){case"scroll":this._scrollTarget&&e.target!==this._scrollTarget||this._scheduleUpdateView();break;case"scrollsizechange":this._scrollSize=e.detail,this._scheduleRender();break;case"scrollerrorchange":this._scrollErr=e.detail,this._scheduleRender();break;case"itempositionchange":this._childrenPos=e.detail,this._scheduleRender();break;case"rangechange":this._adjustRange(e.detail);break;default:console.warn("event not handled",e)}}async _initResizeObservers(){if(null===this._containerRO){const e=await _();this._containerRO=new e((e=>this._containerSizeChanged(e[0].contentRect))),this._childrenRO=new e((()=>this._childrenSizeChanged()))}}_applyContainerStyles(){if(this._useShadowDOM){if(null===this._containerStylesheet){(this._containerStylesheet=document.createElement("style")).textContent=u(":host","::slotted(*)")}const e=this._containerElement.shadowRoot||this._containerElement.attachShadow({mode:"open"}),t=e.querySelector("slot:not([name])");e.appendChild(this._containerStylesheet),t||e.appendChild(document.createElement("slot"))}else c||(c=document.createElement("style"),c.textContent=u(`.${d}`,`.${d} > *`),document.head.appendChild(c)),this._containerElement&&this._containerElement.classList.add(d)}_createContainerSizer(){const e=document.createElement("div");return Object.assign(e.style,{position:"absolute",margin:"-2px 0 0 0",padding:0,visibility:"hidden",fontSize:"2px"}),e.innerHTML="&nbsp;",e}get _kids(){return this._ordered}_scheduleUpdateView(){this._needsUpdateView=!0,this._scheduleRender()}_updateView(){let e,t,s,i;if(this._scrollTarget===this._containerElement)e=this._containerSize.width,t=this._containerSize.height,i=this._containerElement.scrollLeft,s=this._containerElement.scrollTop;else{const n=this._containerElement.getBoundingClientRect(),r=this._scrollTarget?this._scrollTarget.getBoundingClientRect():{top:n.top+scrollY,left:n.left+scrollX,width:innerWidth,height:innerHeight},h=r.width,l=r.height,o=Math.max(0,Math.min(h,n.left-r.left)),a=Math.max(0,Math.min(l,n.top-r.top));e=("vertical"===this._layout.direction?Math.max(0,Math.min(h,n.right-r.left)):h)-o,t=("vertical"===this._layout.direction?l:Math.max(0,Math.min(l,n.bottom-r.top)))-a,i=Math.max(0,-(n.left-r.left)),s=Math.max(0,-(n.top-r.top))}this._layout.viewportSize={width:e,height:t},this._layout.viewportScroll={top:s,left:i}}_sizeContainer(e){if(this._scrollTarget===this._containerElement){const t=e&&e.width?e.width-1:0,s=e&&e.height?e.height-1:0;this._sizer.style.transform=`translate(${t}px, ${s}px)`}else{const t=this._containerElement.style;t.minWidth=e&&e.width?e.width+"px":null,t.minHeight=e&&e.height?e.height+"px":null}}_positionChildren(e){const t=this._kids;Object.keys(e).forEach((s=>{const i=s-this._first,n=t[i];if(n){const{top:t,left:i}=e[s];n.style.position="absolute",n.style.transform=`translate(${i}px, ${t}px)`}}))}_adjustRange(e){this.num=e.num,this.first=e.first;const t=this._firstVisible!==e.firstVisible||this._lastVisible!==e.lastVisible;this._firstVisible=e.firstVisible,this._lastVisible=e.lastVisible,this._incremental=!e.stable,e.remeasure?this.requestRemeasure():(e.stable||t)&&this._notifyRange()}_shouldRender(){if(!super._shouldRender()||!this._containerElement||!this._layout&&!this._lazyLoadDefaultLayout)return!1;if(null===this._containerSize){const{width:e,height:t}=this._containerElement.getBoundingClientRect();this._containerSize={width:e,height:t}}return this._containerSize.width>0||this._containerSize.height>0}_correctScrollError(e){this._scrollTarget?(this._scrollTarget.scrollTop-=e.top,this._scrollTarget.scrollLeft-=e.left):window.scroll(window.scrollX-e.left,window.scrollY-e.top)}_notifyRange(){const{first:e,num:t}=this,s=e+t-1;this._container.dispatchEvent(new m("rangechange",{first:e,last:s,firstVisible:this._firstVisible,lastVisible:this._lastVisible}))}_containerSizeChanged(e){const{width:t,height:s}=e;this._containerSize={width:t,height:s},this._scheduleUpdateView()}_childrenSizeChanged(){this._skipNextChildrenSizeChanged?this._skipNextChildrenSizeChanged=!1:this.requestRemeasure()}}class g extends(h(p)){}const f=new WeakMap,y=(0,i.XM)((e=>async t=>{let s=f.get(t);if(!s){t.startNode.isConnected||await Promise.resolve();const{renderItem:i,layout:n,scrollTarget:r,useShadowDOM:h}=e;s=new g({part:t,renderItem:i,layout:n,scrollTarget:r,useShadowDOM:h}),f.set(t,s)}Object.assign(s,{items:e.items,totalItems:void 0===e.totalItems?null:e.totalItems,scrollToIndex:void 0===e.scrollToIndex?null:e.scrollToIndex})}));var v=s(87480),w=s(15652);let E=class extends w.oi{constructor(){super(),this.renderRoot=this}get renderItem(){return this._renderItem}set renderItem(e){e!==this.renderItem&&(this._renderItem=e,this.requestUpdate())}async scrollToIndex(e,t="start"){this._scrollToIndex={index:e,position:t},this.requestUpdate(),await this.updateComplete,this._scrollToIndex=null}render(){return w.dy`${y({items:this.items,renderItem:this._renderItem,scrollTarget:this.scrollTarget,scrollToIndex:this._scrollToIndex,useShadowDOM:!0})}`}};v.gn([(0,w.Cb)()],E.prototype,"_renderItem",void 0),v.gn([(0,w.Cb)()],E.prototype,"items",void 0),v.gn([(0,w.Cb)()],E.prototype,"scrollTarget",void 0),E=v.gn([(0,w.Mo)("lit-virtualizer")],E)}}]);
//# sourceMappingURL=chunk.ea34639d76bca770ca53.js.map