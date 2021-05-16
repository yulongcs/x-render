(window.webpackJsonp=window.webpackJsonp||[]).push([[36,9],{"0zqC":function(En,ln,n){"use strict";n.r(ln);var x=n("tJVT"),e=n("q1tI"),v=n.n(e),V=n("wx14"),de=n("rePB"),L=n("ODXe"),Xe=n("U8pU"),De=n("Ff2n"),ve=n("VTBJ"),zn=n("TSYQ"),Pe=n.n(zn),on=n("Zm9Q"),Tn=n("5Z9U"),Rn=n("6cGi"),vn=n("KQm4"),Ye=n("wgJM"),Ln=n("t23M");function wn(t){var r=Object(e.useRef)(),o=Object(e.useRef)(!1);function g(){for(var b=arguments.length,h=new Array(b),C=0;C<b;C++)h[C]=arguments[C];o.current||(Ye.a.cancel(r.current),r.current=Object(Ye.a)(function(){t.apply(void 0,h)}))}return Object(e.useEffect)(function(){return function(){o.current=!0,Ye.a.cancel(r.current)}},[]),g}function Dn(t){var r=Object(e.useRef)([]),o=Object(e.useState)({}),g=Object(L.a)(o,2),b=g[1],h=Object(e.useRef)(typeof t=="function"?t():t),C=wn(function(){var W=h.current;r.current.forEach(function(K){W=K(W)}),r.current=[],h.current=W,b({})});function O(W){r.current.push(W),C()}return[h.current,O]}var we=n("4IlW");function qn(t,r){var o,g=t.prefixCls,b=t.id,h=t.active,C=t.rtl,O=t.tab,W=O.key,K=O.tab,$=O.disabled,G=O.closeIcon,J=t.tabBarGutter,se=t.tabPosition,X=t.closable,Q=t.renderWrapper,ie=t.removeAriaLabel,z=t.editable,q=t.onClick,ae=t.onRemove,Y=t.onFocus,le="".concat(g,"-tab");e.useEffect(function(){return ae},[]);var k={};se==="top"||se==="bottom"?k[C?"marginLeft":"marginRight"]=J:k.marginBottom=J;var Ee=z&&X!==!1&&!$;function ne(re){$||q(re)}function ce(re){re.preventDefault(),re.stopPropagation(),z.onEdit("remove",{key:W,event:re})}var me=e.createElement("div",{key:W,ref:r,className:Pe()(le,(o={},Object(de.a)(o,"".concat(le,"-with-remove"),Ee),Object(de.a)(o,"".concat(le,"-active"),h),Object(de.a)(o,"".concat(le,"-disabled"),$),o)),style:k,onClick:ne},e.createElement("div",{role:"tab","aria-selected":h,id:b&&"".concat(b,"-tab-").concat(W),className:"".concat(le,"-btn"),"aria-controls":b&&"".concat(b,"-panel-").concat(W),"aria-disabled":$,tabIndex:$?null:0,onClick:function(H){H.stopPropagation(),ne(H)},onKeyDown:function(H){[we.a.SPACE,we.a.ENTER].includes(H.which)&&(H.preventDefault(),ne(H))},onFocus:Y},K),Ee&&e.createElement("button",{type:"button","aria-label":ie||"remove",tabIndex:0,className:"".concat(le,"-remove"),onClick:function(H){H.stopPropagation(),ce(H)}},G||z.removeIcon||"\xD7"));return Q&&(me=Q(me)),me}var $n=e.forwardRef(qn),rt={width:0,height:0,left:0,top:0};function M(t,r,o){return Object(e.useMemo)(function(){for(var g,b=new Map,h=r.get((g=t[0])===null||g===void 0?void 0:g.key)||rt,C=h.left+h.width,O=0;O<t.length;O+=1){var W=t[O].key,K=r.get(W);if(!K){var $;K=r.get(($=t[O-1])===null||$===void 0?void 0:$.key)||rt}var G=b.get(W)||Object(ve.a)({},K);G.right=C-G.left-G.width,b.set(W,G)}return b},[t.map(function(g){return g.key}).join("_"),r,o])}var I={width:0,height:0,left:0,top:0,right:0};function T(t,r,o,g,b){var h=b.tabs,C=b.tabPosition,O=b.rtl,W,K,$;["top","bottom"].includes(C)?(W="width",K=O?"right":"left",$=Math.abs(r.left)):(W="height",K="top",$=-r.top);var G=r[W],J=o[W],se=g[W],X=G;return J+se>G&&(X=G-se),Object(e.useMemo)(function(){if(!h.length)return[0,0];for(var Q=h.length,ie=Q,z=0;z<Q;z+=1){var q=t.get(h[z].key)||I;if(q[K]+q[W]>$+X){ie=z-1;break}}for(var ae=0,Y=Q-1;Y>=0;Y-=1){var le=t.get(h[Y].key)||I;if(le[K]<$){ae=Y+1;break}}return[ae,ie]},[t,$,X,C,h.map(function(Q){return Q.key}).join("_"),O])}var f=n("Gytx"),l=n.n(f),y=n("Kwbf");function F(t,r){var o=t.prefixCls,g=t.invalidate,b=t.item,h=t.renderItem,C=t.responsive,O=t.registerSize,W=t.itemKey,K=t.className,$=t.style,G=t.children,J=t.display,se=t.order,X=t.component,Q=X===void 0?"div":X,ie=Object(De.a)(t,["prefixCls","invalidate","item","renderItem","responsive","registerSize","itemKey","className","style","children","display","order","component"]),z=C&&!J;function q(Ee){O(W,Ee)}e.useEffect(function(){return function(){q(null)}},[]);var ae=h&&b!==void 0?h(b):G,Y;g||(Y={opacity:z?0:1,height:z?0:void 0,overflowY:z?"hidden":void 0,order:C?se:void 0,pointerEvents:z?"none":void 0});var le={};z&&(le["aria-hidden"]=!0);var k=e.createElement(Q,Object(V.a)({className:Pe()(!g&&o,K),style:Object(ve.a)(Object(ve.a)({},Y),$)},le,ie,{ref:r}),ae);return C&&(k=e.createElement(Ln.default,{onResize:function(ne){var ce=ne.offsetWidth;q(ce)}},k)),k}var R=e.forwardRef(F);R.displayName="Item";var u=R;function i(){var t=Object(e.useState)({}),r=Object(L.a)(t,2),o=r[1],g=Object(e.useRef)([]),b=Object(e.useRef)(!1),h=0,C=0;Object(e.useEffect)(function(){return function(){b.current=!0}},[]);function O(W){var K=h;h+=1,g.current.length<K+1&&(g.current[K]=W);var $=g.current[K];function G(J){g.current[K]=typeof J=="function"?J(g.current[K]):J,Ye.a.cancel(C),C=Object(Ye.a)(function(){b.current||o({})})}return[$,G]}return O}var E=function(r,o){var g=e.useContext(D);if(!g){var b=r.component,h=b===void 0?"div":b,C=Object(De.a)(r,["component"]);return e.createElement(h,Object(V.a)({},C,{ref:o}))}var O=g.className,W=Object(De.a)(g,["className"]),K=r.className,$=Object(De.a)(r,["className"]);return e.createElement(D.Provider,{value:null},e.createElement(u,Object(V.a)({ref:o,className:Pe()(O,K)},W,$)))},N=e.forwardRef(E);N.displayName="RawItem";var B=N,D=e.createContext(null),s="responsive",j="invalidate";function d(t){return"+ ".concat(t.length," ...")}function a(t,r){var o=t.prefixCls,g=o===void 0?"rc-overflow":o,b=t.data,h=b===void 0?[]:b,C=t.renderItem,O=t.renderRawItem,W=t.itemKey,K=t.itemWidth,$=K===void 0?10:K,G=t.ssr,J=t.style,se=t.className,X=t.maxCount,Q=t.renderRest,ie=t.renderRawRest,z=t.suffix,q=t.component,ae=q===void 0?"div":q,Y=t.itemComponent,le=t.onVisibleChange,k=Object(De.a)(t,["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"]),Ee=i(),ne=G==="full",ce=Ee(null),me=Object(L.a)(ce,2),re=me[0],H=me[1],oe=re||0,ye=Ee(new Map),he=Object(L.a)(ye,2),Oe=he[0],Ke=he[1],be=Ee(0),Fe=Object(L.a)(be,2),Me=Fe[0],Ie=Fe[1],je=Ee(0),Ae=Object(L.a)(je,2),$e=Ae[0],_e=Ae[1],Ve=Ee(0),ze=Object(L.a)(Ve,2),Qe=ze[0],Le=ze[1],Pn=Object(e.useState)(null),an=Object(L.a)(Pn,2),Ze=an[0],dn=an[1],bn=Object(e.useState)(null),Cn=Object(L.a)(bn,2),Be=Cn[0],He=Cn[1],en=e.useMemo(function(){return Be===null&&ne?Number.MAX_SAFE_INTEGER:Be||0},[Be,re]),ke=Object(e.useState)(!1),Wn=Object(L.a)(ke,2),Jn=Wn[0],Kn=Wn[1],rn="".concat(g,"-item"),An=Math.max(Me,$e),cn=h.length&&X===s,jn=X===j,nn=cn||typeof X=="number"&&h.length>X,un=Object(e.useMemo)(function(){var pe=h;return cn?re===null&&ne?pe=h:pe=h.slice(0,Math.min(h.length,oe/$)):typeof X=="number"&&(pe=h.slice(0,X)),pe},[h,$,re,X,cn]),Bn=Object(e.useMemo)(function(){return cn?h.slice(en+1):h.slice(un.length)},[h,un,cn,en]),fn=Object(e.useCallback)(function(pe,Re){var Te;return typeof W=="function"?W(pe):(Te=W&&(pe==null?void 0:pe[W]))!==null&&Te!==void 0?Te:Re},[W]),qe=Object(e.useCallback)(C||function(pe){return pe},[C]);function xe(pe,Re){He(pe),Re||(Kn(pe<h.length-1),le==null||le(pe))}function Gn(pe,Re){H(Re.clientWidth)}function Hn(pe,Re){Ke(function(Te){var tn=new Map(Te);return Re===null?tn.delete(pe):tn.set(pe,Re),tn})}function nt(pe,Re){_e(Re),Ie($e)}function Fn(pe,Re){Le(Re)}function yn(pe){return Oe.get(fn(un[pe],pe))}e.useLayoutEffect(function(){if(oe&&An&&un){var pe=Qe,Re=un.length,Te=Re-1;if(!Re){xe(0),dn(null);return}for(var tn=0;tn<Re;tn+=1){var Yn=yn(tn);if(Yn===void 0){xe(tn-1,!0);break}if(pe+=Yn,tn===Te-1&&pe+yn(Te)<=oe){xe(Te),dn(null);break}else if(pe+An>oe){xe(tn-1),dn(pe-Yn-Qe+$e);break}else if(tn===Te){xe(Te),dn(pe-Qe);break}}z&&yn(0)+Qe>oe&&dn(null)}},[oe,Oe,$e,Qe,fn,un]);var xn=Jn&&!!Bn.length,On={};Ze!==null&&cn&&(On={position:"absolute",left:Ze,top:0});var pn={prefixCls:rn,responsive:cn,component:Y,invalidate:jn},Xn=O?function(pe,Re){var Te=fn(pe,Re);return e.createElement(D.Provider,{key:Te,value:Object(ve.a)(Object(ve.a)({},pn),{},{order:Re,item:pe,itemKey:Te,registerSize:Hn,display:Re<=en})},O(pe,Re))}:function(pe,Re){var Te=fn(pe,Re);return e.createElement(u,Object(V.a)({},pn,{order:Re,key:Te,item:pe,renderItem:qe,itemKey:Te,registerSize:Hn,display:Re<=en}))},In,Qn={order:xn?en:Number.MAX_SAFE_INTEGER,className:"".concat(rn,"-rest"),registerSize:nt,display:xn};if(ie)ie&&(In=e.createElement(D.Provider,{value:Object(ve.a)(Object(ve.a)({},pn),Qn)},ie(Bn)));else{var mn=Q||d;In=e.createElement(u,Object(V.a)({},pn,Qn),typeof mn=="function"?mn(Bn):mn)}var Nn=e.createElement(ae,Object(V.a)({className:Pe()(!jn&&g,se),style:J,ref:r},k),un.map(Xn),nn?In:null,z&&e.createElement(u,Object(V.a)({},pn,{order:en,className:"".concat(rn,"-suffix"),registerSize:Fn,display:!0,style:On}),z));return cn&&(Nn=e.createElement(Ln.default,{onResize:Gn},Nn)),Nn}var p=e.forwardRef(a);p.displayName="Overflow",p.Item=B,p.RESPONSIVE=s,p.INVALIDATE=j;var m=p,S=m,w=n("1OyB"),U=n("vuIU"),_=n("Ji7U"),ue=n("LK+K"),ge=n("bT9E"),hn=n("YrtM"),We=e.createContext(null);function Ne(t,r){var o=Object(ve.a)({},t);return Object.keys(r).forEach(function(g){var b=r[g];b!==void 0&&(o[g]=b)}),o}function Sn(t){var r=t.children,o=t.locked,g=Object(De.a)(t,["children","locked"]),b=e.useContext(We),h=Object(hn.a)(function(){return Ne(b,g)},[b,g],function(C,O){return!o&&(C[0]!==O[0]||!l()(C[1],O[1]))});return e.createElement(We.Provider,{value:h},r)}function ut(t,r,o,g){var b=e.useContext(We),h=b.activeKey,C=b.onActive,O=b.onInactive,W={active:h===t};return r||(W.onMouseEnter=function(K){o==null||o({key:t,domEvent:K}),C(t)},W.onMouseLeave=function(K){g==null||g({key:t,domEvent:K}),O(t)}),W}function _n(t){var r=t.item,o=Object(De.a)(t,["item"]);return Object.defineProperty(o,"item",{get:function(){return Object(y.a)(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),r}}),o}function c(t){var r=t.icon,o=t.props,g=t.children,b;return typeof r=="function"?b=e.createElement(r,Object(ve.a)({},o)):b=r,b||g||null}function P(t){var r=e.useContext(We),o=r.mode,g=r.rtl,b=r.inlineIndent;if(o!=="inline")return null;var h=t;return g?{paddingRight:h*b}:{paddingLeft:h*b}}var A=[],fe=e.createContext(null);function ee(){return e.useContext(fe)}var Se=e.createContext(A);function Ue(t){var r=e.useContext(Se);return e.useMemo(function(){return t!==void 0?[].concat(Object(vn.a)(r),[t]):r},[r,t])}var Ge=e.createContext(null),zt=e.createContext(null);function Jt(t,r){return t===void 0?null:"".concat(t,"-").concat(r)}function Gt(t){var r=e.useContext(zt);return Jt(r,t)}var Ea=function(t){Object(_.a)(o,t);var r=Object(ue.a)(o);function o(){return Object(w.a)(this,o),r.apply(this,arguments)}return Object(U.a)(o,[{key:"render",value:function(){var b=this.props,h=b.title,C=b.attribute,O=b.elementRef,W=Object(De.a)(b,["title","attribute","elementRef"]),K=Object(ge.a)(W,["eventKey"]);return Object(y.a)(!C,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),e.createElement(S.Item,Object(V.a)({},C,{title:typeof h=="string"?h:void 0},K,{ref:O}))}}]),o}(e.Component),ba=function(r){var o,g=r.style,b=r.className,h=r.eventKey,C=r.disabled,O=r.itemIcon,W=r.children,K=r.role,$=r.onMouseEnter,G=r.onMouseLeave,J=r.onClick,se=r.onKeyDown,X=r.onFocus,Q=Object(De.a)(r,["style","className","eventKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"]),ie=Gt(h),z=e.useContext(We),q=z.prefixCls,ae=z.onItemClick,Y=z.disabled,le=z.overflowDisabled,k=z.itemIcon,Ee=z.selectedKeys,ne=z.onActive,ce="".concat(q,"-item"),me=e.useRef(),re=e.useRef(),H=Y||C,oe=Ue(h),ye=function(Ve){return{key:h,keyPath:oe,item:me.current,domEvent:Ve}},he=O||k,Oe=ut(h,H,$,G),Ke=Oe.active,be=Object(De.a)(Oe,["active"]),Fe=Ee.includes(h),Me=P(oe.length),Ie=function(Ve){if(!H){var ze=ye(Ve);J==null||J(_n(ze)),ae(ze)}},je=function(Ve){if(se==null||se(Ve),Ve.which===we.a.ENTER){var ze=ye(Ve);J==null||J(_n(ze)),ae(ze)}},Ae=function(Ve){ne(h),X==null||X(Ve)},$e={};return r.role==="option"&&($e["aria-selected"]=Fe),e.createElement(Ea,Object(V.a)({ref:me,elementRef:re,role:K===null?"none":K||"menuitem",tabIndex:C?null:-1,"data-menu-id":le&&ie?null:ie},Q,be,$e,{component:"li","aria-disabled":C,style:Object(ve.a)(Object(ve.a)({},Me),g),className:Pe()(ce,(o={},Object(de.a)(o,"".concat(ce,"-active"),Ke),Object(de.a)(o,"".concat(ce,"-selected"),Fe),Object(de.a)(o,"".concat(ce,"-disabled"),H),o),b),onClick:Ie,onKeyDown:je,onFocus:Ae}),W,e.createElement(c,{props:Object(ve.a)(Object(ve.a)({},r),{},{isSelected:Fe}),icon:he}))};function Ca(t){var r=t.eventKey,o=ee(),g=Ue(r);return e.useEffect(function(){if(o)return o.registerPath(r,g),function(){o.unregisterPath(r,g)}},[g]),o?null:e.createElement(ba,t)}var St=Ca;function Pt(t,r){return Object(on.a)(t).map(function(o,g){if(e.isValidElement(o)){var b=o.key;return b==null&&(b="tmp_key-".concat([].concat(Object(vn.a)(r),[g]).join("-"))),e.cloneElement(o,{key:b,eventKey:b})}return o})}function et(t){var r=e.useRef(t);r.current=t;var o=e.useCallback(function(){for(var g,b=arguments.length,h=new Array(b),C=0;C<b;C++)h[C]=arguments[C];return(g=r.current)===null||g===void 0?void 0:g.call.apply(g,[r].concat(h))},[]);return t?o:void 0}var Fa=function(r,o){var g=r.className,b=r.children,h=Object(De.a)(r,["className","children"]),C=e.useContext(We),O=C.prefixCls,W=C.mode;return e.createElement("ul",Object(V.a)({className:Pe()(O,"".concat(O,"-sub"),"".concat(O,"-").concat(W==="inline"?"inline":"vertical"),g)},h,{"data-menu-list":!0,ref:o}),b)},Ht=e.forwardRef(Fa);Ht.displayName="SubMenuList";var xt=Ht,Oa=n("uciX"),Vn={adjustX:1,adjustY:1},Xt={topLeft:{points:["bl","tl"],overflow:Vn,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Vn,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:Vn,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:Vn,offset:[4,0]}},Ra={topLeft:{points:["bl","tl"],overflow:Vn,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Vn,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:Vn,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:Vn,offset:[4,0]}},fr=Xt;function Qt(t,r,o){if(r)return r;if(o)return o[t]||o.other}var Da={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function Sa(t){var r=t.prefixCls,o=t.visible,g=t.children,b=t.popup,h=t.popupClassName,C=t.popupOffset,O=t.disabled,W=t.mode,K=t.onVisibleChange,$=e.useContext(We),G=$.getPopupContainer,J=$.rtl,se=$.subMenuOpenDelay,X=$.subMenuCloseDelay,Q=$.builtinPlacements,ie=$.triggerSubMenuAction,z=$.forceSubMenuRender,q=$.motion,ae=$.defaultMotions,Y=e.useState(!1),le=Object(L.a)(Y,2),k=le[0],Ee=le[1],ne=J?Object(ve.a)(Object(ve.a)({},Ra),Q):Object(ve.a)(Object(ve.a)({},Xt),Q),ce=Da[W],me=Qt(W,q,ae),re=Object(ve.a)(Object(ve.a)({},me),{},{leavedClassName:"".concat(r,"-hidden"),removeOnLeave:!1,motionAppear:!0}),H=e.useRef();return e.useEffect(function(){return H.current=Object(Ye.a)(function(){Ee(o)}),function(){Ye.a.cancel(H.current)}},[o]),e.createElement(Oa.a,{prefixCls:r,popupClassName:Pe()("".concat(r,"-popup"),Object(de.a)({},"".concat(r,"-rtl"),J),h),stretch:W==="horizontal"?"minWidth":null,getPopupContainer:G,builtinPlacements:ne,popupPlacement:ce,popupVisible:k,popup:b,popupAlign:C&&{offset:C},action:O?[]:[ie],mouseEnterDelay:se,mouseLeaveDelay:X,onPopupVisibleChange:K,forceRender:z,popupMotion:re},g)}var Pa=n("8XRh");function Aa(t){var r=t.id,o=t.open,g=t.keyPath,b=t.children,h="inline",C=e.useContext(We),O=C.prefixCls,W=C.forceSubMenuRender,K=C.motion,$=C.defaultMotions,G=C.mode,J=e.useRef(!1);J.current=G===h;var se=e.useState(!J.current),X=Object(L.a)(se,2),Q=X[0],ie=X[1],z=J.current?o:!1;e.useEffect(function(){J.current&&ie(!1)},[G]);var q=Object(ve.a)({},Qt(h,K,$));g.length>1&&(q.motionAppear=!1);var ae=q.onVisibleChanged;return q.onVisibleChanged=function(Y){return!J.current&&!Y&&ie(!0),ae==null?void 0:ae(Y)},Q?null:e.createElement(Sn,{mode:h,locked:!J.current},e.createElement(Pa.default,Object(V.a)({visible:z},q,{forceRender:W,removeOnLeave:!1,leavedClassName:"".concat(O,"-hidden")}),function(Y){var le=Y.className,k=Y.style;return e.createElement(xt,{id:r,className:le,style:k},b)}))}var ja=function(r){var o,g=r.style,b=r.className,h=r.title,C=r.eventKey,O=r.disabled,W=r.internalPopupClose,K=r.children,$=r.itemIcon,G=r.expandIcon,J=r.popupClassName,se=r.popupOffset,X=r.onClick,Q=r.onMouseEnter,ie=r.onMouseLeave,z=r.onTitleClick,q=r.onTitleMouseEnter,ae=r.onTitleMouseLeave,Y=Object(De.a)(r,["style","className","title","eventKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"]),le=Gt(C),k=e.useContext(We),Ee=k.prefixCls,ne=k.mode,ce=k.openKeys,me=k.disabled,re=k.overflowDisabled,H=k.activeKey,oe=k.selectedKeys,ye=k.itemIcon,he=k.expandIcon,Oe=k.onItemClick,Ke=k.onOpenChange,be=k.onActive,Fe=e.useContext(Ge),Me=Fe.isSubPathKey,Ie=Ue(),je="".concat(Ee,"-submenu"),Ae=me||O,$e=e.useRef(),_e=e.useRef(),Ve=$||ye,ze=G||he,Qe=ce.includes(C),Le=!re&&Qe,Pn=Me(oe,C),an=ut(C,Ae,q,ae),Ze=an.active,dn=Object(De.a)(an,["active"]),bn=e.useState(!1),Cn=Object(L.a)(bn,2),Be=Cn[0],He=Cn[1],en=function(xe){Ae||He(xe)},ke=function(xe){en(!0),Q==null||Q({key:C,domEvent:xe})},Wn=function(xe){en(!1),ie==null||ie({key:C,domEvent:xe})},Jn=e.useMemo(function(){return Ze||(ne!=="inline"?Be||Me([H],C):!1)},[ne,Ze,H,Be,C,Me]),Kn=P(Ie.length),rn=function(xe){Ae||(z==null||z({key:C,domEvent:xe}),ne==="inline"&&Ke(C,!Qe))},An=et(function(qe){X==null||X(_n(qe)),Oe(qe)}),cn=function(xe){ne!=="inline"&&Ke(C,xe)},jn=function(){be(C)},nn=le&&"".concat(le,"-popup"),un=e.createElement("div",Object(V.a)({role:"menuitem",style:Kn,className:"".concat(je,"-title"),tabIndex:Ae?null:-1,ref:$e,title:typeof h=="string"?h:null,"data-menu-id":re&&le?null:le,"aria-expanded":Le,"aria-haspopup":!0,"aria-controls":nn,"aria-disabled":Ae,onClick:rn,onFocus:jn},dn),h,e.createElement(c,{icon:ne!=="horizontal"?ze:null,props:Object(ve.a)(Object(ve.a)({},r),{},{isOpen:Le,isSubMenu:!0})},e.createElement("i",{className:"".concat(je,"-arrow")}))),Bn=e.useRef(ne);if(ne!=="inline"&&(Bn.current=Ie.length>1?"vertical":ne),!re){var fn=Bn.current;un=e.createElement(Sa,{mode:fn,prefixCls:je,visible:!W&&Le&&ne!=="inline",popupClassName:J,popupOffset:se,popup:e.createElement(Sn,{mode:fn},e.createElement(xt,{id:nn,ref:_e},K)),disabled:Ae,onVisibleChange:cn},un)}return e.createElement(Sn,{onItemClick:An,mode:ne==="horizontal"?"vertical":ne,itemIcon:Ve,expandIcon:ze},e.createElement(S.Item,Object(V.a)({role:"none"},Y,{component:"li",style:g,className:Pe()(je,"".concat(je,"-").concat(ne),b,(o={},Object(de.a)(o,"".concat(je,"-open"),Le),Object(de.a)(o,"".concat(je,"-active"),Jn),Object(de.a)(o,"".concat(je,"-selected"),Pn),Object(de.a)(o,"".concat(je,"-disabled"),Ae),o)),onMouseEnter:ke,onMouseLeave:Wn}),un,!re&&e.createElement(Aa,{id:nn,open:Le,keyPath:Ie},K)))};function Yt(t){var r=t.eventKey,o=t.children,g=Ue(r),b=Pt(o,g),h=ee();e.useEffect(function(){if(h)return h.registerPath(r,g),function(){h.unregisterPath(r,g)}},[g]);var C;return h?C=b:C=e.createElement(ja,t,b),e.createElement(Se.Provider,{value:g},C)}var Ba=n("x/xZ");function Zt(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Object(Ba.a)(t)){var o=t.nodeName.toLowerCase(),g=["input","select","textarea","button"].includes(o)||t.isContentEditable||o==="a"&&!!t.getAttribute("href"),b=t.getAttribute("tabindex"),h=Number(b),C=null;return b&&!Number.isNaN(h)?C=h:g&&C===null&&(C=0),g&&t.disabled&&(C=null),C!==null&&(C>=0||r&&C<0)}return!1}function kt(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,o=Object(vn.a)(t.querySelectorAll("*")).filter(function(g){return Zt(g,r)});return Zt(t,r)&&o.unshift(t),o}var mt=null;function pr(){mt=document.activeElement}function vr(){mt=null}function hr(){if(mt)try{mt.focus()}catch(t){}}function gr(t,r){if(r.keyCode===9){var o=kt(t),g=o[r.shiftKey?0:o.length-1],b=g===document.activeElement||t===document.activeElement;if(b){var h=o[r.shiftKey?o.length-1:0];h.focus(),r.preventDefault()}}}var At=we.a.LEFT,jt=we.a.RIGHT,Bt=we.a.UP,ft=we.a.DOWN,pt=we.a.ENTER,qt=we.a.ESC,_t=[Bt,ft,At,jt];function Ia(t,r,o,g){var b,h,C,O,W="prev",K="next",$="children",G="parent";if(t==="inline"&&g===pt)return{inlineTrigger:!0};var J=(b={},Object(de.a)(b,Bt,W),Object(de.a)(b,ft,K),b),se=(h={},Object(de.a)(h,At,o?K:W),Object(de.a)(h,jt,o?W:K),Object(de.a)(h,ft,$),Object(de.a)(h,pt,$),h),X=(C={},Object(de.a)(C,Bt,W),Object(de.a)(C,ft,K),Object(de.a)(C,pt,$),Object(de.a)(C,qt,G),Object(de.a)(C,At,o?$:G),Object(de.a)(C,jt,o?G:$),C),Q={inline:J,horizontal:se,vertical:X,inlineSub:J,horizontalSub:X,verticalSub:X},ie=(O=Q["".concat(t).concat(r?"":"Sub")])===null||O===void 0?void 0:O[g];switch(ie){case W:return{offset:-1,sibling:!0};case K:return{offset:1,sibling:!0};case G:return{offset:-1,sibling:!1};case $:return{offset:1,sibling:!1};default:return null}}function Na(t){for(var r=t;r;){if(r.getAttribute("data-menu-list"))return r;r=r.parentElement}return null}function Ma(t,r){for(var o=t||document.activeElement;o;){if(r.has(o))return o;o=o.parentElement}return null}function Ta(t,r){var o=kt(t,!0);return o.filter(function(g){return r.has(g)})}function ea(t,r,o){var g=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!t)return null;var b=Ta(t,r),h=b.length,C=b.findIndex(function(O){return o===O});return g<0?C===-1?C=h-1:C-=1:g>0&&(C+=1),C=(C+h)%h,b[C]}function wa(t,r,o,g,b,h,C,O,W,K){var $=e.useRef(),G=e.useRef();G.current=r;var J=function(){Ye.a.cancel($.current)};return e.useEffect(function(){return function(){J()}},[]),function(se){var X=se.which;if([].concat(_t,[pt,qt]).includes(X)){var Q,ie,z,q=function(){Q=new Set,ie=new Map,z=new Map;var ye=h();return ye.forEach(function(he){var Oe=document.querySelector("[data-menu-id='".concat(Jt(g,he),"']"));Oe&&(Q.add(Oe),z.set(Oe,he),ie.set(he,Oe))}),Q};q();var ae=ie.get(r),Y=Ma(ae,Q),le=z.get(Y),k=Ia(t,C(le,!0).length===1,o,X);if(!k)return;_t.includes(X)&&se.preventDefault();var Ee=function(ye){if(ye){var he=ye,Oe=ye.querySelector("a");(Oe==null?void 0:Oe.getAttribute("href"))&&(he=Oe);var Ke=z.get(ye);O(Ke),J(),$.current=Object(Ye.a)(function(){G.current===Ke&&he.focus()})}};if(k.sibling||!Y){var ne;!Y||t==="inline"?ne=b.current:ne=Na(Y);var ce=ea(ne,Q,Y,k.offset);Ee(ce)}else if(k.inlineTrigger)W(le);else if(k.offset>0)W(le,!0),J(),$.current=Object(Ye.a)(function(){q();var oe=Y.getAttribute("aria-controls"),ye=document.getElementById(oe),he=ea(ye,Q);Ee(he)},5);else if(k.offset<0){var me=C(le,!0),re=me[me.length-2],H=ie.get(re);W(re,!1),Ee(H)}}K==null||K(se)}}var Wa=Math.random().toFixed(5).toString().slice(2),na=0;function Ka(t){var r=Object(Rn.a)(t,{value:t}),o=Object(L.a)(r,2),g=o[0],b=o[1];return e.useEffect(function(){na+=1;var h="".concat(Wa,"-").concat(na);b("rc-menu-uuid-".concat(h))},[]),g}var yr=n("p8sG");function La(t){Promise.resolve().then(t)}var It="__RC_UTIL_PATH_SPLIT__",ta=function(r){return r.join(It)},$a=function(r){return r.split(It)},Nt="rc-menu-more";function Va(){var t=e.useState({}),r=Object(L.a)(t,2),o=r[1],g=Object(e.useRef)(new Map),b=Object(e.useRef)(new Map),h=e.useState([]),C=Object(L.a)(h,2),O=C[0],W=C[1],K=Object(e.useRef)(0),$=Object(e.useCallback)(function(z,q){var ae=ta(q);b.current.set(ae,z),g.current.set(z,ae),K.current+=1;var Y=K.current;La(function(){Y===K.current&&o({})})},[]),G=Object(e.useCallback)(function(z,q){var ae=ta(q);b.current.delete(ae),g.current.delete(z)},[]),J=Object(e.useCallback)(function(z){W(z)},[]),se=Object(e.useCallback)(function(z,q){var ae=g.current.get(z)||"",Y=$a(ae);return q&&O.includes(Y[0])&&Y.unshift(Nt),Y},[O]),X=Object(e.useCallback)(function(z,q){return z.some(function(ae){var Y=se(ae,!0);return Y.includes(q)})},[se]),Q=function(){var q=Object(vn.a)(g.current.keys());return O.length&&q.push(Nt),q},ie=Object(e.useCallback)(function(z){var q="".concat(g.current.get(z)).concat(It),ae=new Set;return Object(vn.a)(b.current.keys()).forEach(function(Y){Y.startsWith(q)&&ae.add(b.current.get(Y))}),ae},[]);return{registerPath:$,unregisterPath:G,refreshOverflowKeys:J,isSubPathKey:X,getKeyPath:se,getKeys:Q,getSubPathKeys:ie}}var vt=[],Ua=function(r){var o,g,b=r.prefixCls,h=b===void 0?"rc-menu":b,C=r.style,O=r.className,W=r.tabIndex,K=W===void 0?0:W,$=r.children,G=r.direction,J=r.id,se=r.mode,X=se===void 0?"vertical":se,Q=r.inlineCollapsed,ie=r.disabled,z=r.disabledOverflow,q=r.subMenuOpenDelay,ae=q===void 0?.1:q,Y=r.subMenuCloseDelay,le=Y===void 0?.1:Y,k=r.forceSubMenuRender,Ee=r.defaultOpenKeys,ne=r.openKeys,ce=r.activeKey,me=r.defaultActiveFirst,re=r.selectable,H=re===void 0?!0:re,oe=r.multiple,ye=oe===void 0?!1:oe,he=r.defaultSelectedKeys,Oe=r.selectedKeys,Ke=r.onSelect,be=r.onDeselect,Fe=r.inlineIndent,Me=Fe===void 0?24:Fe,Ie=r.motion,je=r.defaultMotions,Ae=r.triggerSubMenuAction,$e=Ae===void 0?"hover":Ae,_e=r.builtinPlacements,Ve=r.itemIcon,ze=r.expandIcon,Qe=r.overflowedIndicator,Le=Qe===void 0?"...":Qe,Pn=r.getPopupContainer,an=r.onClick,Ze=r.onOpenChange,dn=r.onKeyDown,bn=r.openAnimation,Cn=r.openTransitionName,Be=Object(De.a)(r,["prefixCls","style","className","tabIndex","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName"]),He=Pt($,vt),en=e.useState(!1),ke=Object(L.a)(en,2),Wn=ke[0],Jn=ke[1],Kn=e.useRef(),rn=Ka(J),An=G==="rtl",cn=e.useMemo(function(){return X==="inline"&&Q?["vertical",Q]:[X,!1]},[X,Q]),jn=Object(L.a)(cn,2),nn=jn[0],un=jn[1],Bn=e.useState(0),fn=Object(L.a)(Bn,2),qe=fn[0],xe=fn[1],Gn=qe>=He.length-1||nn!=="horizontal"||z,Hn=Object(Rn.a)(Ee,{value:ne,postState:function(Z){return Z||vt}}),nt=Object(L.a)(Hn,2),Fn=nt[0],yn=nt[1],xn=e.useState(Fn),On=Object(L.a)(xn,2),pn=On[0],Xn=On[1],In=nn==="inline",Qn=e.useRef(!1);e.useEffect(function(){In&&Xn(Fn)},[Fn]),e.useEffect(function(){if(!Qn.current){Qn.current=!0;return}if(In)yn(pn);else{var te=[];yn(te),Ze==null||Ze(te)}},[In]);var mn=Va(),Nn=mn.registerPath,pe=mn.unregisterPath,Re=mn.refreshOverflowKeys,Te=mn.isSubPathKey,tn=mn.getKeyPath,Yn=mn.getKeys,gt=mn.getSubPathKeys,Wt=e.useMemo(function(){return{registerPath:Nn,unregisterPath:pe}},[Nn,pe]),Kt=e.useMemo(function(){return{isSubPathKey:Te}},[Te]);e.useEffect(function(){Re(Gn?vt:He.slice(qe+1).map(function(te){return te.key}))},[qe,Gn]);var Lt=Object(Rn.a)(ce||me&&((o=He[0])===null||o===void 0?void 0:o.key),{value:ce}),tt=Object(L.a)(Lt,2),yt=tt[0],lt=tt[1],Et=et(function(te){lt(te)}),$t=et(function(){lt(void 0)}),bt=Object(Rn.a)(he||[],{value:Oe,postState:function(Z){return Array.isArray(Z)?Z:Z==null?vt:[Z]}}),Ct=Object(L.a)(bt,2),at=Ct[0],Mn=Ct[1],Ft=function(Z){if(!!H){var Ce=Z.key,Je=at.includes(Ce),sn;Je?sn=at.filter(function(kn){return kn!==Ce}):ye?sn=[].concat(Object(vn.a)(at),[Ce]):sn=[Ce],Mn(sn);var Un=Object(ve.a)(Object(ve.a)({},Z),{},{selectedKeys:sn});Je?be==null||be(Un):Ke==null||Ke(Un)}},Ot=et(function(te){an==null||an(_n(te)),Ft(te)}),it=et(function(te,Z){var Ce=Fn.filter(function(sn){return sn!==te});if(Z)Ce.push(te);else if(nn!=="inline"){var Je=gt(te);Ce=Ce.filter(function(sn){return!Je.has(sn)})}l()(Fn,Ce)||(yn(Ce),Ze==null||Ze(Ce))}),Zn=et(Pn),ot=function(Z,Ce){var Je=Ce!=null?Ce:!Fn.includes(Z);it(Z,Je)},dt=wa(nn,yt,An,rn,Kn,Yn,tn,lt,ot,dn);e.useEffect(function(){Jn(!0)},[]);var Rt=nn!=="horizontal"||z?He:He.map(function(te,Z){return e.createElement(Sn,{key:te.key,overflowDisabled:Z>qe},te)}),Dt=e.createElement(S,Object(V.a)({id:J,ref:Kn,prefixCls:"".concat(h,"-overflow"),component:"ul",itemComponent:St,className:Pe()(h,"".concat(h,"-root"),"".concat(h,"-").concat(nn),O,(g={},Object(de.a)(g,"".concat(h,"-inline-collapsed"),un),Object(de.a)(g,"".concat(h,"-rtl"),An),g)),dir:G,style:C,role:"menu",tabIndex:K,data:Rt,renderRawItem:function(Z){return Z},renderRawRest:function(Z){var Ce=Z.length,Je=Ce?He.slice(-Ce):null;return e.createElement(Yt,{eventKey:Nt,title:Le,disabled:Gn,internalPopupClose:Ce===0},Je)},maxCount:nn!=="horizontal"||z?S.INVALIDATE:S.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(Z){xe(Z)},onKeyDown:dt},Be));return e.createElement(zt.Provider,{value:rn},e.createElement(Sn,{prefixCls:h,mode:nn,openKeys:Fn,rtl:An,disabled:ie,motion:Wn?Ie:null,defaultMotions:Wn?je:null,activeKey:yt,onActive:Et,onInactive:$t,selectedKeys:at,inlineIndent:Me,subMenuOpenDelay:ae,subMenuCloseDelay:le,forceSubMenuRender:k,builtinPlacements:_e,triggerSubMenuAction:$e,getPopupContainer:Zn,itemIcon:Ve,expandIcon:ze,onItemClick:Ot,onOpenChange:it},e.createElement(Ge.Provider,{value:Kt},Dt),e.createElement(fe.Provider,{value:Wt},He)))},za=Ua,Ja=function(r){var o=r.className,g=r.title,b=r.eventKey,h=r.children,C=Object(De.a)(r,["className","title","eventKey","children"]),O=e.useContext(We),W=O.prefixCls,K="".concat(W,"-item-group");return e.createElement("li",Object(V.a)({},C,{onClick:function(G){return G.stopPropagation()},className:Pe()(K,o)}),e.createElement("div",{className:"".concat(K,"-title"),title:typeof g=="string"?g:void 0},g),e.createElement("ul",{className:"".concat(K,"-list")},h))};function Ga(t){var r=t.children,o=Object(De.a)(t,["children"]),g=Ue(o.eventKey),b=Pt(r,g),h=ee();return h?b:e.createElement(Ja,o,b)}function Ha(t){var r=t.className,o=t.style,g=e.useContext(We),b=g.prefixCls,h=ee();return h?null:e.createElement("li",{className:Pe()("".concat(b,"-item-divider"),r),style:o})}var st=za;st.Item=St,st.SubMenu=Yt,st.ItemGroup=Ga,st.Divider=Ha;var xa=st,Xa=n("eDIo");function Qa(t,r){var o=t.prefixCls,g=t.editable,b=t.locale,h=t.style;return!g||g.showAdd===!1?null:e.createElement("button",{ref:r,type:"button",className:"".concat(o,"-nav-add"),style:h,"aria-label":(b==null?void 0:b.addAriaLabel)||"Add tab",onClick:function(O){g.onEdit("add",{event:O})}},g.addIcon||"+")}var aa=e.forwardRef(Qa);function Ya(t,r){var o=t.prefixCls,g=t.id,b=t.tabs,h=t.locale,C=t.mobile,O=t.moreIcon,W=O===void 0?"More":O,K=t.moreTransitionName,$=t.style,G=t.className,J=t.editable,se=t.tabBarGutter,X=t.rtl,Q=t.onTabClick,ie=Object(e.useState)(!1),z=Object(L.a)(ie,2),q=z[0],ae=z[1],Y=Object(e.useState)(null),le=Object(L.a)(Y,2),k=le[0],Ee=le[1],ne="".concat(g,"-more-popup"),ce="".concat(o,"-dropdown"),me=k!==null?"".concat(ne,"-").concat(k):null,re=h==null?void 0:h.dropdownAriaLabel,H=e.createElement(xa,{onClick:function(Fe){var Me=Fe.key,Ie=Fe.domEvent;Q(Me,Ie),ae(!1)},id:ne,tabIndex:-1,role:"listbox","aria-activedescendant":me,selectedKeys:[k],"aria-label":re!==void 0?re:"expanded dropdown"},b.map(function(be){return e.createElement(St,{key:be.key,id:"".concat(ne,"-").concat(be.key),role:"option","aria-controls":g&&"".concat(g,"-panel-").concat(be.key),disabled:be.disabled},be.tab)}));function oe(be){for(var Fe=b.filter(function($e){return!$e.disabled}),Me=Fe.findIndex(function($e){return $e.key===k})||0,Ie=Fe.length,je=0;je<Ie;je+=1){Me=(Me+be+Ie)%Ie;var Ae=Fe[Me];if(!Ae.disabled){Ee(Ae.key);return}}}function ye(be){var Fe=be.which;if(!q){[we.a.DOWN,we.a.SPACE,we.a.ENTER].includes(Fe)&&(ae(!0),be.preventDefault());return}switch(Fe){case we.a.UP:oe(-1),be.preventDefault();break;case we.a.DOWN:oe(1),be.preventDefault();break;case we.a.ESC:ae(!1);break;case we.a.SPACE:case we.a.ENTER:k!==null&&Q(k,be);break}}Object(e.useEffect)(function(){var be=document.getElementById(me);be&&be.scrollIntoView&&be.scrollIntoView(!1)},[k]),Object(e.useEffect)(function(){q||Ee(null)},[q]);var he=Object(de.a)({},X?"marginLeft":"marginRight",se);b.length||(he.visibility="hidden",he.order=1);var Oe=Pe()(Object(de.a)({},"".concat(ce,"-rtl"),X)),Ke=C?null:e.createElement(Xa.default,{prefixCls:ce,overlay:H,trigger:["hover"],visible:q,transitionName:K,onVisibleChange:ae,overlayClassName:Oe,mouseEnterDelay:.1,mouseLeaveDelay:.1},e.createElement("button",{type:"button",className:"".concat(o,"-nav-more"),style:he,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":ne,id:"".concat(g,"-more"),"aria-expanded":q,onKeyDown:ye},W));return e.createElement("div",{className:Pe()("".concat(o,"-nav-operations"),G),style:$,ref:r},Ke,e.createElement(aa,{prefixCls:o,locale:h,editable:J}))}var Za=e.forwardRef(Ya),Mt=Object(e.createContext)(null),ka=.1,ra=.01,ht=20,ua=Math.pow(.995,ht);function qa(t,r){var o=Object(e.useState)(),g=Object(L.a)(o,2),b=g[0],h=g[1],C=Object(e.useState)(0),O=Object(L.a)(C,2),W=O[0],K=O[1],$=Object(e.useState)(0),G=Object(L.a)($,2),J=G[0],se=G[1],X=Object(e.useState)(),Q=Object(L.a)(X,2),ie=Q[0],z=Q[1],q=Object(e.useRef)();function ae(ce){var me=ce.touches[0],re=me.screenX,H=me.screenY;h({x:re,y:H}),window.clearInterval(q.current)}function Y(ce){if(!!b){ce.preventDefault();var me=ce.touches[0],re=me.screenX,H=me.screenY;h({x:re,y:H});var oe=re-b.x,ye=H-b.y;r(oe,ye);var he=Date.now();K(he),se(he-W),z({x:oe,y:ye})}}function le(){if(!!b&&(h(null),z(null),ie)){var ce=ie.x/J,me=ie.y/J,re=Math.abs(ce),H=Math.abs(me);if(Math.max(re,H)<ka)return;var oe=ce,ye=me;q.current=window.setInterval(function(){if(Math.abs(oe)<ra&&Math.abs(ye)<ra){window.clearInterval(q.current);return}oe*=ua,ye*=ua,r(oe*ht,ye*ht)},ht)}}var k=Object(e.useRef)();function Ee(ce){var me=ce.deltaX,re=ce.deltaY,H=0,oe=Math.abs(me),ye=Math.abs(re);oe===ye?H=k.current==="x"?me:re:oe>ye?(H=me,k.current="x"):(H=re,k.current="y"),r(-H,-H)&&ce.preventDefault()}var ne=Object(e.useRef)(null);ne.current={onTouchStart:ae,onTouchMove:Y,onTouchEnd:le,onWheel:Ee},e.useEffect(function(){function ce(oe){ne.current.onTouchStart(oe)}function me(oe){ne.current.onTouchMove(oe)}function re(oe){ne.current.onTouchEnd(oe)}function H(oe){ne.current.onWheel(oe)}return document.addEventListener("touchmove",me,{passive:!1}),document.addEventListener("touchend",re,{passive:!1}),t.current.addEventListener("touchstart",ce,{passive:!1}),t.current.addEventListener("wheel",H),function(){document.removeEventListener("touchmove",me),document.removeEventListener("touchend",re)}},[])}function _a(){var t=Object(e.useRef)(new Map);function r(g){return t.current.has(g)||t.current.set(g,e.createRef()),t.current.get(g)}function o(g){t.current.delete(g)}return[r,o]}function sa(t,r){var o=e.useRef(t),g=e.useState({}),b=Object(L.a)(g,2),h=b[1];function C(O){var W=typeof O=="function"?O(o.current):O;W!==o.current&&r(W,o.current),o.current=W,h({})}return[o.current,C]}var la=function(r){var o=r.position,g=r.prefixCls,b=r.extra;if(!b)return null;var h,C=b;return o==="right"&&(h=C.right||!C.left&&C||null),o==="left"&&(h=C.left||null),h?e.createElement("div",{className:"".concat(g,"-extra-content")},h):null};function er(t,r){var o,g=e.useContext(Mt),b=g.prefixCls,h=g.tabs,C=t.className,O=t.style,W=t.id,K=t.animated,$=t.activeKey,G=t.rtl,J=t.extra,se=t.editable,X=t.locale,Q=t.tabPosition,ie=t.tabBarGutter,z=t.children,q=t.onTabClick,ae=t.onTabScroll,Y=Object(e.useRef)(),le=Object(e.useRef)(),k=Object(e.useRef)(),Ee=Object(e.useRef)(),ne=_a(),ce=Object(L.a)(ne,2),me=ce[0],re=ce[1],H=Q==="top"||Q==="bottom",oe=sa(0,function(te,Z){H&&ae&&ae({direction:te>Z?"left":"right"})}),ye=Object(L.a)(oe,2),he=ye[0],Oe=ye[1],Ke=sa(0,function(te,Z){!H&&ae&&ae({direction:te>Z?"top":"bottom"})}),be=Object(L.a)(Ke,2),Fe=be[0],Me=be[1],Ie=Object(e.useState)(0),je=Object(L.a)(Ie,2),Ae=je[0],$e=je[1],_e=Object(e.useState)(0),Ve=Object(L.a)(_e,2),ze=Ve[0],Qe=Ve[1],Le=Object(e.useState)(0),Pn=Object(L.a)(Le,2),an=Pn[0],Ze=Pn[1],dn=Object(e.useState)(0),bn=Object(L.a)(dn,2),Cn=bn[0],Be=bn[1],He=Object(e.useState)(null),en=Object(L.a)(He,2),ke=en[0],Wn=en[1],Jn=Object(e.useState)(null),Kn=Object(L.a)(Jn,2),rn=Kn[0],An=Kn[1],cn=Object(e.useState)(0),jn=Object(L.a)(cn,2),nn=jn[0],un=jn[1],Bn=Object(e.useState)(0),fn=Object(L.a)(Bn,2),qe=fn[0],xe=fn[1],Gn=Dn(new Map),Hn=Object(L.a)(Gn,2),nt=Hn[0],Fn=Hn[1],yn=M(h,nt,Ae),xn="".concat(b,"-nav-operations-hidden"),On=0,pn=0;H?G?(On=0,pn=Math.max(0,Ae-ke)):(On=Math.min(0,ke-Ae),pn=0):(On=Math.min(0,rn-ze),pn=0);function Xn(te){return te<On?On:te>pn?pn:te}var In=Object(e.useRef)(),Qn=Object(e.useState)(),mn=Object(L.a)(Qn,2),Nn=mn[0],pe=mn[1];function Re(){pe(Date.now())}function Te(){window.clearTimeout(In.current)}qa(Y,function(te,Z){function Ce(Je,sn){Je(function(Un){var kn=Xn(Un+sn);return kn})}if(H){if(ke>=Ae)return!1;Ce(Oe,te)}else{if(rn>=ze)return!1;Ce(Me,Z)}return Te(),Re(),!0}),Object(e.useEffect)(function(){return Te(),Nn&&(In.current=window.setTimeout(function(){pe(0)},100)),Te},[Nn]);function tn(){var te=arguments.length>0&&arguments[0]!==void 0?arguments[0]:$,Z=yn.get(te)||{width:0,height:0,left:0,right:0,top:0};if(H){var Ce=he;G?Z.right<he?Ce=Z.right:Z.right+Z.width>he+ke&&(Ce=Z.right+Z.width-ke):Z.left<-he?Ce=-Z.left:Z.left+Z.width>-he+ke&&(Ce=-(Z.left+Z.width-ke)),Me(0),Oe(Xn(Ce))}else{var Je=Fe;Z.top<-Fe?Je=-Z.top:Z.top+Z.height>-Fe+rn&&(Je=-(Z.top+Z.height-rn)),Oe(0),Me(Xn(Je))}}var Yn=T(yn,{width:ke,height:rn,left:he,top:Fe},{width:an,height:Cn},{width:nn,height:qe},Object(ve.a)(Object(ve.a)({},t),{},{tabs:h})),gt=Object(L.a)(Yn,2),Wt=gt[0],Kt=gt[1],Lt=h.map(function(te){var Z=te.key;return e.createElement($n,{id:W,prefixCls:b,key:Z,rtl:G,tab:te,closable:te.closable,editable:se,active:Z===$,tabPosition:Q,tabBarGutter:ie,renderWrapper:z,removeAriaLabel:X==null?void 0:X.removeAriaLabel,ref:me(Z),onClick:function(Je){q(Z,Je)},onRemove:function(){re(Z)},onFocus:function(){tn(Z),Re(),G||(Y.current.scrollLeft=0),Y.current.scrollTop=0}})}),tt=wn(function(){var te,Z,Ce,Je,sn,Un,kn,Vt,Ut,ir=((te=Y.current)===null||te===void 0?void 0:te.offsetWidth)||0,or=((Z=Y.current)===null||Z===void 0?void 0:Z.offsetHeight)||0,ma=((Ce=Ee.current)===null||Ce===void 0?void 0:Ce.offsetWidth)||0,fa=((Je=Ee.current)===null||Je===void 0?void 0:Je.offsetHeight)||0,dr=((sn=k.current)===null||sn===void 0?void 0:sn.offsetWidth)||0,cr=((Un=k.current)===null||Un===void 0?void 0:Un.offsetHeight)||0;Wn(ir),An(or),un(ma),xe(fa);var pa=(((kn=le.current)===null||kn===void 0?void 0:kn.offsetWidth)||0)-ma,va=(((Vt=le.current)===null||Vt===void 0?void 0:Vt.offsetHeight)||0)-fa;$e(pa),Qe(va);var ha=(Ut=k.current)===null||Ut===void 0?void 0:Ut.className.includes(xn);Ze(pa-(ha?0:dr)),Be(va-(ha?0:cr)),Fn(function(){var ga=new Map;return h.forEach(function(mr){var ya=mr.key,ct=me(ya).current;ct&&ga.set(ya,{width:ct.offsetWidth,height:ct.offsetHeight,left:ct.offsetLeft,top:ct.offsetTop})}),ga})}),yt=h.slice(0,Wt),lt=h.slice(Kt+1),Et=[].concat(Object(vn.a)(yt),Object(vn.a)(lt)),$t=Object(e.useState)(),bt=Object(L.a)($t,2),Ct=bt[0],at=bt[1],Mn=yn.get($),Ft=Object(e.useRef)();function Ot(){Ye.a.cancel(Ft.current)}Object(e.useEffect)(function(){var te={};return Mn&&(H?(G?te.right=Mn.right:te.left=Mn.left,te.width=Mn.width):(te.top=Mn.top,te.height=Mn.height)),Ot(),Ft.current=Object(Ye.a)(function(){at(te)}),Ot},[Mn,H,G]),Object(e.useEffect)(function(){tn()},[$,Mn,yn,H]),Object(e.useEffect)(function(){tt()},[G,ie,$,h.map(function(te){return te.key}).join("_")]);var it=!!Et.length,Zn="".concat(b,"-nav-wrap"),ot,dt,Rt,Dt;return H?G?(dt=he>0,ot=he+ke<Ae):(ot=he<0,dt=-he+ke<Ae):(Rt=Fe<0,Dt=-Fe+rn<ze),e.createElement("div",{ref:r,role:"tablist",className:Pe()("".concat(b,"-nav"),C),style:O,onKeyDown:function(){Re()}},e.createElement(la,{position:"left",extra:J,prefixCls:b}),e.createElement(Ln.default,{onResize:tt},e.createElement("div",{className:Pe()(Zn,(o={},Object(de.a)(o,"".concat(Zn,"-ping-left"),ot),Object(de.a)(o,"".concat(Zn,"-ping-right"),dt),Object(de.a)(o,"".concat(Zn,"-ping-top"),Rt),Object(de.a)(o,"".concat(Zn,"-ping-bottom"),Dt),o)),ref:Y},e.createElement(Ln.default,{onResize:tt},e.createElement("div",{ref:le,className:"".concat(b,"-nav-list"),style:{transform:"translate(".concat(he,"px, ").concat(Fe,"px)"),transition:Nn?"none":void 0}},Lt,e.createElement(aa,{ref:Ee,prefixCls:b,locale:X,editable:se,style:{visibility:it?"hidden":null}}),e.createElement("div",{className:Pe()("".concat(b,"-ink-bar"),Object(de.a)({},"".concat(b,"-ink-bar-animated"),K.inkBar)),style:Ct}))))),e.createElement(Za,Object(V.a)({},t,{ref:k,prefixCls:b,tabs:Et,className:!it&&xn})),e.createElement(la,{position:"right",extra:J,prefixCls:b}))}var ia=e.forwardRef(er);function nr(t){var r=t.id,o=t.activeKey,g=t.animated,b=t.tabPosition,h=t.rtl,C=t.destroyInactiveTabPane,O=e.useContext(Mt),W=O.prefixCls,K=O.tabs,$=g.tabPane,G=K.findIndex(function(J){return J.key===o});return e.createElement("div",{className:Pe()("".concat(W,"-content-holder"))},e.createElement("div",{className:Pe()("".concat(W,"-content"),"".concat(W,"-content-").concat(b),Object(de.a)({},"".concat(W,"-content-animated"),$)),style:G&&$?Object(de.a)({},h?"marginRight":"marginLeft","-".concat(G,"00%")):null},K.map(function(J){return e.cloneElement(J.node,{key:J.key,prefixCls:W,tabKey:J.key,id:r,animated:$,active:J.key===o,destroyInactiveTabPane:C})})))}function oa(t){var r=t.prefixCls,o=t.forceRender,g=t.className,b=t.style,h=t.id,C=t.active,O=t.animated,W=t.destroyInactiveTabPane,K=t.tabKey,$=t.children,G=e.useState(o),J=Object(L.a)(G,2),se=J[0],X=J[1];e.useEffect(function(){C?X(!0):W&&X(!1)},[C,W]);var Q={};return C||(O?(Q.visibility="hidden",Q.height=0,Q.overflowY="hidden"):Q.display="none"),e.createElement("div",{id:h&&"".concat(h,"-panel-").concat(K),role:"tabpanel",tabIndex:C?0:-1,"aria-labelledby":h&&"".concat(h,"-tab-").concat(K),"aria-hidden":!C,style:Object(ve.a)(Object(ve.a)({},Q),b),className:Pe()("".concat(r,"-tabpane"),C&&"".concat(r,"-tabpane-active"),g)},(C||se||o)&&$)}var da=0;function tr(t){return Object(on.a)(t).map(function(r){if(e.isValidElement(r)){var o=r.key!==void 0?String(r.key):void 0;return Object(ve.a)(Object(ve.a)({key:o},r.props),{},{node:r})}return null}).filter(function(r){return r})}function ar(t,r){var o,g=t.id,b=t.prefixCls,h=b===void 0?"rc-tabs":b,C=t.className,O=t.children,W=t.direction,K=t.activeKey,$=t.defaultActiveKey,G=t.editable,J=t.animated,se=J===void 0?{inkBar:!0,tabPane:!1}:J,X=t.tabPosition,Q=X===void 0?"top":X,ie=t.tabBarGutter,z=t.tabBarStyle,q=t.tabBarExtraContent,ae=t.locale,Y=t.moreIcon,le=t.moreTransitionName,k=t.destroyInactiveTabPane,Ee=t.renderTabBar,ne=t.onChange,ce=t.onTabClick,me=t.onTabScroll,re=Object(De.a)(t,["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"]),H=tr(O),oe=W==="rtl",ye;se===!1?ye={inkBar:!1,tabPane:!1}:se===!0?ye={inkBar:!0,tabPane:!0}:ye=Object(ve.a)({inkBar:!0,tabPane:!1},Object(Xe.a)(se)==="object"?se:{});var he=Object(e.useState)(!1),Oe=Object(L.a)(he,2),Ke=Oe[0],be=Oe[1];Object(e.useEffect)(function(){be(Object(Tn.a)())},[]);var Fe=Object(Rn.a)(function(){var Be;return(Be=H[0])===null||Be===void 0?void 0:Be.key},{value:K,defaultValue:$}),Me=Object(L.a)(Fe,2),Ie=Me[0],je=Me[1],Ae=Object(e.useState)(function(){return H.findIndex(function(Be){return Be.key===Ie})}),$e=Object(L.a)(Ae,2),_e=$e[0],Ve=$e[1];Object(e.useEffect)(function(){var Be=H.findIndex(function(en){return en.key===Ie});if(Be===-1){var He;Be=Math.max(0,Math.min(_e,H.length-1)),je((He=H[Be])===null||He===void 0?void 0:He.key)}Ve(Be)},[H.map(function(Be){return Be.key}).join("_"),Ie,_e]);var ze=Object(Rn.a)(null,{value:g}),Qe=Object(L.a)(ze,2),Le=Qe[0],Pn=Qe[1],an=Q;Ke&&!["left","right"].includes(Q)&&(an="top"),Object(e.useEffect)(function(){g||(Pn("rc-tabs-".concat(da)),da+=1)},[]);function Ze(Be,He){ce==null||ce(Be,He),je(Be),ne==null||ne(Be)}var dn={id:Le,activeKey:Ie,animated:ye,tabPosition:an,rtl:oe,mobile:Ke},bn,Cn=Object(ve.a)(Object(ve.a)({},dn),{},{editable:G,locale:ae,moreIcon:Y,moreTransitionName:le,tabBarGutter:ie,onTabClick:Ze,onTabScroll:me,extra:q,style:z,panes:O});return Ee?bn=Ee(Cn,ia):bn=e.createElement(ia,Cn),e.createElement(Mt.Provider,{value:{tabs:H,prefixCls:h}},e.createElement("div",Object(V.a)({ref:r,id:g,className:Pe()(h,"".concat(h,"-").concat(an),(o={},Object(de.a)(o,"".concat(h,"-mobile"),Ke),Object(de.a)(o,"".concat(h,"-editable"),G),Object(de.a)(o,"".concat(h,"-rtl"),oe),o),C)},re),bn,e.createElement(nr,Object(V.a)({destroyInactiveTabPane:k},dn,{animated:ye}))))}var ca=e.forwardRef(ar);ca.TabPane=oa;var rr=ca,ur=rr,Tt=n("MZF8"),gn=n("dEAq"),sr=n("ZpkN"),Er=n("TIsu");function wt(t,r){var o,g=(o=t.match(/\.(\w+)$/))===null||o===void 0?void 0:o[1];return g||(g=r.tsx?"tsx":"jsx"),g}var lr=t=>{var r,o,g,b=Object(e.useRef)(),h=Object(e.useContext)(gn.context),C=h.locale,O=Object(gn.useLocaleProps)(C,t),W=Object(gn.useDemoUrl)(O.identifier),K=O.demoUrl||W,$=(Tt.a===null||Tt.a===void 0?void 0:Tt.a.location.hash)==="#".concat(O.identifier),G=Object.keys(O.sources).length===1,J=Object(gn.useCodeSandbox)((r=O.hideActions)!==null&&r!==void 0&&r.includes("CSB")?null:O),se=Object(gn.useRiddle)((o=O.hideActions)!==null&&o!==void 0&&o.includes("RIDDLE")?null:O),X=Object(gn.useMotions)(O.motions||[],b.current),Q=Object(x.default)(X,2),ie=Q[0],z=Q[1],q=Object(gn.useCopy)(),ae=Object(x.default)(q,2),Y=ae[0],le=ae[1],k=Object(e.useState)("_"),Ee=Object(x.default)(k,2),ne=Ee[0],ce=Ee[1],me=Object(e.useState)(wt(ne,O.sources[ne])),re=Object(x.default)(me,2),H=re[0],oe=re[1],ye=Object(e.useState)(Boolean(O.defaultShowCode)),he=Object(x.default)(ye,2),Oe=he[0],Ke=he[1],be=Object(e.useState)(Math.random()),Fe=Object(x.default)(be,2),Me=Fe[0],Ie=Fe[1],je=O.sources[ne][H]||O.sources[ne].content,Ae=Object(gn.useTSPlaygroundUrl)(C,je),$e=Object(e.useRef)(),_e=Object(gn.usePrefersColor)(),Ve=Object(x.default)(_e,1),ze=Ve[0];Object(e.useEffect)(()=>{Ie(Math.random())},[ze]);function Qe(Le){ce(Le),oe(wt(Le,O.sources[Le]))}return v.a.createElement("div",{style:O.style,className:[O.className,"__dumi-default-previewer",$?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:O.identifier,"data-debug":O.debug||void 0,"data-iframe":O.iframe||void 0},O.iframe&&v.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),v.a.createElement("div",{ref:b,className:"__dumi-default-previewer-demo",style:{transform:O.transform?"translate(0, 0)":void 0,padding:O.compact||O.iframe&&O.compact!==!1?"0":void 0,background:O.background}},O.iframe?v.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(O.iframe).replace(/(\d)$/,"$1px")},key:Me,src:K,ref:$e}):O.children),v.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":O.title},O.title&&v.a.createElement(gn.AnchorLink,{to:"#".concat(O.identifier)},O.title),O.description&&v.a.createElement("div",{dangerouslySetInnerHTML:{__html:O.description}})),v.a.createElement("div",{className:"__dumi-default-previewer-actions"},J&&v.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:J}),se&&v.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:se}),O.motions&&v.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:z,onClick:()=>ie()}),O.iframe&&v.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:()=>Ie(Math.random())}),!((g=O.hideActions)!==null&&g!==void 0&&g.includes("EXTERNAL"))&&v.a.createElement(gn.Link,{target:"_blank",to:K},v.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),v.a.createElement("span",null),v.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":le,onClick:()=>Y(je)}),H==="tsx"&&Oe&&v.a.createElement(gn.Link,{target:"_blank",to:Ae},v.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),v.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(Oe?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:()=>Ke(!Oe)})),Oe&&v.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!G&&v.a.createElement(ur,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xB7\xB7\xB7",defaultActiveKey:ne,onChange:Qe},Object.keys(O.sources).map(Le=>v.a.createElement(oa,{tab:Le==="_"?"index.".concat(wt(Le,O.sources[Le])):Le,key:Le}))),v.a.createElement("div",{className:"__dumi-default-previewer-source"},v.a.createElement(sr.a,{code:je,lang:H,showCopy:!1}))))},br=ln.default=lr},"80pN":function(En,ln,n){"use strict";(function(x){/** @license React v16.14.0
* react-dom-test-utils.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var e=n("MgzW"),v=n("q1tI"),V=n("i8i4"),de=n("QCnb");function L(c){for(var P="https://reactjs.org/docs/error-decoder.html?invariant="+c,A=1;A<arguments.length;A++)P+="&args[]="+encodeURIComponent(arguments[A]);return"Minified React error #"+c+"; visit "+P+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Xe=v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;Xe.hasOwnProperty("ReactCurrentDispatcher")||(Xe.ReactCurrentDispatcher={current:null}),Xe.hasOwnProperty("ReactCurrentBatchConfig")||(Xe.ReactCurrentBatchConfig={suspense:null});function De(c){var P=c,A=c;if(c.alternate)for(;P.return;)P=P.return;else{c=P;do P=c,(P.effectTag&1026)!=0&&(A=P.return),c=P.return;while(c)}return P.tag===3?A:null}function ve(c){if(De(c)!==c)throw Error(L(188))}function zn(c){var P=c.alternate;if(!P){if(P=De(c),P===null)throw Error(L(188));return P!==c?null:c}for(var A=c,fe=P;;){var ee=A.return;if(ee===null)break;var Se=ee.alternate;if(Se===null){if(fe=ee.return,fe!==null){A=fe;continue}break}if(ee.child===Se.child){for(Se=ee.child;Se;){if(Se===A)return ve(ee),c;if(Se===fe)return ve(ee),P;Se=Se.sibling}throw Error(L(188))}if(A.return!==fe.return)A=ee,fe=Se;else{for(var Ue=!1,Ge=ee.child;Ge;){if(Ge===A){Ue=!0,A=ee,fe=Se;break}if(Ge===fe){Ue=!0,fe=ee,A=Se;break}Ge=Ge.sibling}if(!Ue){for(Ge=Se.child;Ge;){if(Ge===A){Ue=!0,A=Se,fe=ee;break}if(Ge===fe){Ue=!0,fe=Se,A=ee;break}Ge=Ge.sibling}if(!Ue)throw Error(L(189))}}if(A.alternate!==fe)throw Error(L(190))}if(A.tag!==3)throw Error(L(188));return A.stateNode.current===A?c:P}function Pe(){return!0}function on(){return!1}function Tn(c,P,A,fe){this.dispatchConfig=c,this._targetInst=P,this.nativeEvent=A,c=this.constructor.Interface;for(var ee in c)c.hasOwnProperty(ee)&&((P=c[ee])?this[ee]=P(A):ee==="target"?this.target=fe:this[ee]=A[ee]);return this.isDefaultPrevented=(A.defaultPrevented!=null?A.defaultPrevented:A.returnValue===!1)?Pe:on,this.isPropagationStopped=on,this}e(Tn.prototype,{preventDefault:function(){this.defaultPrevented=!0;var c=this.nativeEvent;c&&(c.preventDefault?c.preventDefault():typeof c.returnValue!="unknown"&&(c.returnValue=!1),this.isDefaultPrevented=Pe)},stopPropagation:function(){var c=this.nativeEvent;c&&(c.stopPropagation?c.stopPropagation():typeof c.cancelBubble!="unknown"&&(c.cancelBubble=!0),this.isPropagationStopped=Pe)},persist:function(){this.isPersistent=Pe},isPersistent:on,destructor:function(){var c=this.constructor.Interface,P;for(P in c)this[P]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=on,this._dispatchInstances=this._dispatchListeners=null}}),Tn.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(c){return c.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null},Tn.extend=function(c){function P(){}function A(){return fe.apply(this,arguments)}var fe=this;P.prototype=fe.prototype;var ee=new P;return e(ee,A.prototype),A.prototype=ee,A.prototype.constructor=A,A.Interface=e({},fe.Interface,c),A.extend=fe.extend,Ye(A),A},Ye(Tn);function Rn(c,P,A,fe){if(this.eventPool.length){var ee=this.eventPool.pop();return this.call(ee,c,P,A,fe),ee}return new this(c,P,A,fe)}function vn(c){if(!(c instanceof this))throw Error(L(279));c.destructor(),10>this.eventPool.length&&this.eventPool.push(c)}function Ye(c){c.eventPool=[],c.getPooled=Rn,c.release=vn}var Ln=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined");function wn(c,P){var A={};return A[c.toLowerCase()]=P.toLowerCase(),A["Webkit"+c]="webkit"+P,A["Moz"+c]="moz"+P,A}var Dn={animationend:wn("Animation","AnimationEnd"),animationiteration:wn("Animation","AnimationIteration"),animationstart:wn("Animation","AnimationStart"),transitionend:wn("Transition","TransitionEnd")},we={},qn={};Ln&&(qn=document.createElement("div").style,"AnimationEvent"in window||(delete Dn.animationend.animation,delete Dn.animationiteration.animation,delete Dn.animationstart.animation),"TransitionEvent"in window||delete Dn.transitionend.transition);function $n(c){if(we[c])return we[c];if(!Dn[c])return c;var P=Dn[c],A;for(A in P)if(P.hasOwnProperty(A)&&A in qn)return we[c]=P[A];return c}var rt=$n("animationend"),M=$n("animationiteration"),I=$n("animationstart"),T=$n("transitionend"),f=null;function l(c){if(f===null)try{var P=("require"+Math.random()).slice(0,7);f=(x&&x[P])("timers").setImmediate}catch(A){f=function(fe){var ee=new MessageChannel;ee.port1.onmessage=fe,ee.port2.postMessage(void 0)}}return f(c)}var y=V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,F=y[11],R=y[12],u=V.unstable_batchedUpdates,i=Xe.IsSomeRendererActing,E=typeof de.unstable_flushAllWithoutAsserting=="function",N=de.unstable_flushAllWithoutAsserting||function(){for(var c=!1;F();)c=!0;return c};function B(c){try{N(),l(function(){N()?B(c):c()})}catch(P){c(P)}}var D=0,s=!1,j=V.findDOMNode,d=V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,a=d[0],p=d[4],m=d[5],S=d[6],w=d[7],U=d[8],_=d[9],ue=d[10];function ge(){}function hn(c,P){if(!c)return[];if(c=zn(c),!c)return[];for(var A=c,fe=[];;){if(A.tag===5||A.tag===6||A.tag===1||A.tag===0){var ee=A.stateNode;P(ee)&&fe.push(ee)}if(A.child)A.child.return=A,A=A.child;else{if(A===c)return fe;for(;!A.sibling;){if(!A.return||A.return===c)return fe;A=A.return}A.sibling.return=A.return,A=A.sibling}}}function We(c,P){if(c&&!c._reactInternalFiber){var A=""+c;throw c=Array.isArray(c)?"an array":c&&c.nodeType===1&&c.tagName?"a DOM node":A==="[object Object]"?"object with keys {"+Object.keys(c).join(", ")+"}":A,Error(L(286,P,c))}}var Ne={renderIntoDocument:function(c){var P=document.createElement("div");return V.render(c,P)},isElement:function(c){return v.isValidElement(c)},isElementOfType:function(c,P){return v.isValidElement(c)&&c.type===P},isDOMComponent:function(c){return!(!c||c.nodeType!==1||!c.tagName)},isDOMComponentElement:function(c){return!!(c&&v.isValidElement(c)&&c.tagName)},isCompositeComponent:function(c){return Ne.isDOMComponent(c)?!1:c!=null&&typeof c.render=="function"&&typeof c.setState=="function"},isCompositeComponentWithType:function(c,P){return Ne.isCompositeComponent(c)?c._reactInternalFiber.type===P:!1},findAllInRenderedTree:function(c,P){return We(c,"findAllInRenderedTree"),c?hn(c._reactInternalFiber,P):[]},scryRenderedDOMComponentsWithClass:function(c,P){return We(c,"scryRenderedDOMComponentsWithClass"),Ne.findAllInRenderedTree(c,function(A){if(Ne.isDOMComponent(A)){var fe=A.className;typeof fe!="string"&&(fe=A.getAttribute("class")||"");var ee=fe.split(/\s+/);if(!Array.isArray(P)){if(P===void 0)throw Error(L(11));P=P.split(/\s+/)}return P.every(function(Se){return ee.indexOf(Se)!==-1})}return!1})},findRenderedDOMComponentWithClass:function(c,P){if(We(c,"findRenderedDOMComponentWithClass"),c=Ne.scryRenderedDOMComponentsWithClass(c,P),c.length!==1)throw Error("Did not find exactly one match (found: "+c.length+") for class:"+P);return c[0]},scryRenderedDOMComponentsWithTag:function(c,P){return We(c,"scryRenderedDOMComponentsWithTag"),Ne.findAllInRenderedTree(c,function(A){return Ne.isDOMComponent(A)&&A.tagName.toUpperCase()===P.toUpperCase()})},findRenderedDOMComponentWithTag:function(c,P){if(We(c,"findRenderedDOMComponentWithTag"),c=Ne.scryRenderedDOMComponentsWithTag(c,P),c.length!==1)throw Error("Did not find exactly one match (found: "+c.length+") for tag:"+P);return c[0]},scryRenderedComponentsWithType:function(c,P){return We(c,"scryRenderedComponentsWithType"),Ne.findAllInRenderedTree(c,function(A){return Ne.isCompositeComponentWithType(A,P)})},findRenderedComponentWithType:function(c,P){if(We(c,"findRenderedComponentWithType"),c=Ne.scryRenderedComponentsWithType(c,P),c.length!==1)throw Error("Did not find exactly one match (found: "+c.length+") for componentType:"+P);return c[0]},mockComponent:function(c,P){return P=P||c.mockTagName||"div",c.prototype.render.mockImplementation(function(){return v.createElement(P,null,this.props.children)}),this},nativeTouchData:function(c,P){return{touches:[{pageX:c,pageY:P}]}},Simulate:null,SimulateNative:{},act:function(c){function P(){D--,i.current=A,R.current=fe}s===!1&&(s=!0,console.error("act(...) is not supported in production builds of React, and might not behave as expected.")),D++;var A=i.current,fe=R.current;i.current=!0,R.current=!0;try{var ee=u(c)}catch(Se){throw P(),Se}if(ee!==null&&typeof ee=="object"&&typeof ee.then=="function")return{then:function(Se,Ue){ee.then(function(){1<D||E===!0&&A===!0?(P(),Se()):B(function(Ge){P(),Ge?Ue(Ge):Se()})},function(Ge){P(),Ue(Ge)})}};try{D!==1||E!==!1&&A!==!1||N(),P()}catch(Se){throw P(),Se}return{then:function(Se){Se()}}}};function Sn(c){return function(P,A){if(v.isValidElement(P))throw Error(L(228));if(Ne.isCompositeComponent(P))throw Error(L(229));var fe=p[c],ee=new ge;ee.target=P,ee.type=c.toLowerCase();var Se=a(P),Ue=new Tn(fe,Se,ee,P);Ue.persist(),e(Ue,A),fe.phasedRegistrationNames?m(Ue):S(Ue),V.unstable_batchedUpdates(function(){w(P),ue(Ue)}),U()}}Ne.Simulate={};for(var ut in p)Ne.Simulate[ut]=Sn(ut);function _n(c,P){return function(A,fe){var ee=new ge(c);e(ee,fe),Ne.isDOMComponent(A)?(A=j(A),ee.target=A,_(P,1,document,ee)):A.tagName&&(ee.target=A,_(P,1,document,ee))}}[["abort","abort"],[rt,"animationEnd"],[M,"animationIteration"],[I,"animationStart"],["blur","blur"],["canplaythrough","canPlayThrough"],["canplay","canPlay"],["cancel","cancel"],["change","change"],["click","click"],["close","close"],["compositionend","compositionEnd"],["compositionstart","compositionStart"],["compositionupdate","compositionUpdate"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["dragstart","dragStart"],["drag","drag"],["drop","drop"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],["ended","ended"],["error","error"],["focus","focus"],["input","input"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["loadstart","loadStart"],["loadstart","loadStart"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["mousedown","mouseDown"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["playing","playing"],["progress","progress"],["ratechange","rateChange"],["scroll","scroll"],["seeked","seeked"],["seeking","seeking"],["selectionchange","selectionChange"],["stalled","stalled"],["suspend","suspend"],["textInput","textInput"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchmove","touchMove"],["touchstart","touchStart"],[T,"transitionEnd"],["volumechange","volumeChange"],["waiting","waiting"],["wheel","wheel"]].forEach(function(c){var P=c[1];Ne.SimulateNative[P]=_n(P,c[0])}),x.exports=Ne.default||Ne}).call(this,n("hOG+")(En))},JjdP:function(En,ln,n){"use strict";n.r(ln);var x=n("9og8"),e=n("WmNS"),v=n.n(e),V=n("LtsZ"),de=`import React, { useRef } from 'react';
import { CardList, Search, TableContainer, useTable } from 'card-render';
import {
  PlusOutlined,
  EllipsisOutlined,
  SettingOutlined,
  EditOutlined,
} from '@ant-design/icons';
import { Button } from 'antd';
import request from 'umi-request';

// \u53EF\u4EE5\u4F7F\u7528schema\u7F16\u8F91\u5668\u914D\u7F6E https://form-render.github.io/schema-generator/
const schema = {
  type: 'object',
  properties: {
    created_at: {
      title: '\u521B\u5EFA\u65F6\u95F4',
      type: 'string',
      format: 'date',
      'ui:width': '25%',
    },
  },
};

// \u914D\u7F6E\u5B8C\u5168\u900F\u4F20antd table
const columns = [
  {
    title: '\u6807\u9898',
    dataIndex: 'title',
  },
  {
    title: '\u72B6\u6001',
    dataIndex: 'state',
    enum: {
      open: '\u672A\u89E3\u51B3',
      closed: '\u5DF2\u89E3\u51B3',
    },
  },
  {
    title: '\u521B\u5EFA\u65F6\u95F4',
    key: 'since',
    dataIndex: 'created_at',
    valueType: 'date',
  },
  {
    title: '\u64CD\u4F5C',
    render: row => (
      <a
        href="https://x-render.gitee.io/form-render/"
        target="_blank"
        rel="noopener noreferrer"
      >
        \u67E5\u770B
      </a>
    ),
  },
];

const searchApi = params => {
  params.pageSize = 2;
  return request
    .get(
      'https://www.fastmock.site/mock/62ab96ff94bc013592db1f67667e9c76/getTableList/api/getCardList',
      { params }
    )
    .then(res => {
      console.log('response:', res);
      if (res && res.data) {
        return {
          rows: res.data,
          total: res.data.length,
          pageSize: res.data.pageSize || 2,
        }; // \u6CE8\u610F\u4E00\u5B9A\u8981\u8FD4\u56DE rows \u548C total
      }
    })
    .catch(e => console.log('Oops, error', e));
};

const searchArr = [
  {
    name: '\u6211\u7684\u6570\u636E',
    api: searchApi,
  },
  {
    name: '\u5168\u90E8\u6570\u636E',
    api: searchApi,
  },
];

// const cardRenderOptions = {
//   type: 'default',
//   header: {
//     title: 'title',
//     extra: (card, index) => (
//       <a
//         onClick={e => {
//           e.stopPropagation();
//         }}
//       >
//         action
//       </a>
//     ),
//   },
//   content: {
//     description: 'description',
//     list: ['creator', 'createTime'],
//     remark: 'remark',
//   },
// };

const cardRenderOptions = {
  type: 'image',
  cover: 'imgUrl',
  // cover: {
  //   dataIndex: 'imgUrl',
  //   width: 100,
  //   height: 100
  // },
  header: {
    title: (card, index) => card.title,
  },
  content: {
    description: (card, index) => card.description,
    // list: ['creator', 'createTime'],
    list: [
      {
        title: '\u521B\u5EFA\u4EBA',
        render: card => card.creator,
      },
      {
        title: '\u521B\u5EFA\u65F6\u95F4',
        dataIndex: 'createTime',
      },
    ],
    remark: 'remark',
  },
  footer: (card, idx) => [
    <SettingOutlined key="setting" />,
    <EditOutlined key="edit" />,
    <EllipsisOutlined key="ellipsis" />,
  ],
};

const Demo = () => {
  const tableRef = useRef();
  return (
    <div style={{ background: 'rgb(245,245,245)' }}>
      <TableContainer ref={tableRef} searchApi={searchArr}>
        <Search schema={schema} />
        <CardList
          // onCardClick={(item, idx) => alert(JSON.stringify(item))}
          cardRender={cardRenderOptions}
          paginationOptions={{ size: 'small' }}
          toolbarRender={() => [
            <Button
              key="primary"
              type="primary"
              onClick={() => alert('table-render\uFF01')}
            >
              <PlusOutlined />
              \u521B\u5EFA
            </Button>,
          ]}
          toolbarAction
        />
      </TableContainer>
    </div>
  );
};

export default Demo;`,L=`import React from 'react';
import FormRender, { useForm } from 'form-render';

const Demo = props => {
  const form = useForm();
  return <FormRender form={form} {...props} />;
};

export default Demo;`,Xe=`export const delay = ms => new Promise(res => setTimeout(res, ms));

export const fakeApi = (url, data) => {
  console.group('request:', url);
  console.log('params:', data);
  console.groupEnd();
  return delay(500);
};`,De=`import React from 'react';
import FormRender, { useForm } from 'form-render';

const Demo = ({ schema }) => {
  const form = useForm();
  return (
    <div>
      <FormRender form={form} schema={schema} />
    </div>
  );
};

export default Demo;`,ve=`export const basic = {
  labelWidth: 130,
  type: 'object',
  properties: {
    url: {
      title: 'url\u8F93\u5165\u6846',
      placeholder: '//www.taobao.com',
      type: 'string',
      format: 'url',
      required: true,
    },
    email: {
      title: 'email\u8F93\u5165\u6846',
      type: 'string',
      format: 'email',
    },
    string: {
      title: '\u6B63\u5219\u6821\u9A8C\u5B57\u7B26\u4E32',
      description: 'a-z',
      type: 'string',
      hidden: false,
      disabled: true,
    },
  },
};

export const expression = {
  type: 'object',
  properties: {
    input: {
      title: '{{formData.config.title || "\u8F93\u5165\u6846"}}',
      type: 'string',
      placeholder: '{{formData.config.placeholder}}',
      props: {
        size: '{{formData.config.size}}',
      },
      hidden: '{{formData.config.hidden === true}}',
      readOnly: '{{formData.config.readOnly === true}}',
      disabled: '{{formData.config.disabled === true}}',
    },
    rate: {
      title: 'rate',
      type: 'number',
      widget: 'rate',
    },
    config: {
      title: '\u914D\u7F6E',
      type: 'object',
      properties: {
        title: {
          title: 'title',
          type: 'string',
        },
        placeholder: {
          title: 'placeholder',
          type: 'string',
        },
        size: {
          title: 'input\u5927\u5C0F',
          type: 'string',
          enum: ['large', 'middle', 'small'],
          enumNames: ['\u5927', '\u4E2D', '\u5C0F'],
          widget: 'radio',
        },
        hidden: {
          title: '\u662F\u5426\u9690\u85CF',
          type: 'boolean',
        },
        readOnly: {
          title: '\u662F\u5426\u53EA\u8BFB',
          type: 'boolean',
        },
        disabled: {
          title: '\u662F\u5426\u7F6E\u7070',
          type: 'boolean',
        },
      },
    },
  },
  required: [],
};`,zn=`import React, { Component } from 'react';
// import GithubCorner from 'react-github-corner';
import Demo from './main';
import { Radio, Select, Switch, Slider } from 'antd';
import './index.css';

const Option = Select.Option;
class Root extends Component {
  state = {
    schemaName: 'simplest',
    column: 1,
    displayType: 'column',
    readOnly: false,
    labelWidth: 110,
  };

  onColumnNumberChange = value => {
    this.setState({ column: value });
  };

  onDisplayChange = value => {
    this.setState({
      displayType: value,
      showDescIcon: value === 'row',
    });
  };

  onReadOnlyChange = value => this.setState({ readOnly: value });

  onSchemaChange = e => {
    this.setState({ schemaName: e.target.value });
  };

  onLabelWidthChange = value => {
    this.setState({ labelWidth: value });
  };

  render() {
    const { showDescIcon, readOnly, labelWidth } = this.state;
    return (
      <div className="fr-playground">
        {/* <GithubCorner
          href="https://github.com/alibaba/form-render"
          bannerColor="#F6C14F"
          className="absolute top-0 right-0 z-999"
        /> */}
        {/* <a href="/" className="f6 absolute top-1 right-1 z-999">
          \u56DE\u4E3B\u9875
        </a> */}
        <div className="w-100 flex setting-container">
          <Radio.Group
            name="schemaName"
            defaultValue="simplest"
            className="w-50 flex items-center flex-wrap z-999"
            onChange={this.onSchemaChange}
          >
            <Radio value="simplest">\u6700\u7B80\u6837\u4F8B</Radio>
            <Radio value="basic">\u57FA\u7840\u63A7\u4EF6</Radio>
            <Radio value="format">\u6821\u9A8C</Radio>
            <Radio value="new-feature">\u65B0\u529F\u80FD</Radio>
            <Radio value="function">\u590D\u6742\u8054\u52A8</Radio>
            <Radio value="input">\u4E2A\u6027\u8F93\u5165\u6846</Radio>
            <Radio value="select">\u4E2A\u6027\u9009\u62E9\u6846</Radio>
            <Radio value="demo">\u5B8C\u6574\u4F8B\u5B50</Radio>
          </Radio.Group>
          <div className="w-50 flex items-center flex-wrap z-999">
            <Select
              style={{ marginRight: 8, marginLeft: 24 }}
              onChange={this.onColumnNumberChange}
              defaultValue="1"
            >
              <Option value="1">\u4E00\u884C\u4E00\u5217</Option>
              <Option value="2">\u4E00\u884C\u4E8C\u5217</Option>
              <Option value="3">\u4E00\u884C\u4E09\u5217</Option>
            </Select>
            <Select
              style={{ marginRight: 8 }}
              onChange={this.onDisplayChange}
              defaultValue="column"
            >
              <Option value="column">\u4E0A\u4E0B\u6392\u5217</Option>
              <Option value="row">\u5DE6\u53F3\u6392\u5217</Option>
            </Select>
            <Switch
              style={{ marginRight: 8 }}
              checkedChildren="\u7F16\u8F91"
              onChange={this.onReadOnlyChange}
              unCheckedChildren="\u53EA\u8BFB"
              checked={readOnly}
            />
            <div style={{ width: 70 }}>\u6807\u7B7E\u5BBD\u5EA6\uFF1A</div>
            <Slider
              style={{ width: 80 }}
              max={200}
              min={20}
              value={labelWidth}
              onChange={this.onLabelWidthChange}
            />
          </div>
        </div>
        <Demo {...this.state} />
      </div>
    );
  }
}

export default Root;`,Pe=`import React, { useState, useEffect } from 'react';
import deepEqual from 'deep-equal';
import parseJson from 'json-parse-better-errors';
import FormRender, { useForm } from 'form-render';
import DefaultSchema from './json/simplest.json';
import { Tabs } from 'antd';
import AsyncSelect from './customized/AsyncSelect';
import CodeBlock from './monaco';
const { TabPane } = Tabs;

// help functions
const schema2str = obj => JSON.stringify(obj, null, 2) || '';

const Demo = ({ schemaName, theme, ...formProps }) => {
  const [schemaStr, set1] = useState(() => schema2str(DefaultSchema.schema));
  const [error, set2] = useState('');

  useEffect(() => {
    const schema = require(\`./json/\${schemaName}.json\`);
    set1(schema2str(schema.schema));
  }, [schemaName]);

  const tryParse = schemaStr => {
    let schema = {};
    try {
      schema = parseJson(schemaStr);
      if (typeof schema !== 'object') {
        set2('schema\u975E\u6B63\u786Ejson');
        return;
      }
      set2('');
      return schema;
    } catch (error) {
      set2(String(error));
    }
  };

  const handleCodeChange = schemaStr => {
    set1(schemaStr);
    tryParse(schemaStr);
  };

  let schema = {};
  try {
    schema = parseJson(schemaStr);
  } catch (error) {
    console.log(error);
  }

  const form = useForm();

  return (
    <div className="flex-auto flex">
      <div className="w-50 h-100 pl2 flex flex-column">
        <Tabs
          defaultActiveKey="1"
          onChange={() => {}}
          className="flex flex-column"
          style={{ overflow: 'auto' }}
        >
          <TabPane tab="Schema" key="1">
            <CodeBlock value={schemaStr} onChange={handleCodeChange} />
          </TabPane>
          <TabPane tab="Data" key="2">
            <CodeBlock value={schema2str(form.getValues())} readOnly />
          </TabPane>
        </Tabs>
      </div>
      <div className="w-50 h-100 flex flex-column pa2">
        <div
          className="h-100 overflow-auto pa3 pt4 flex-auto"
          style={{ borderLeft: '1px solid #ddd' }}
        >
          {error ? (
            <div>{error}</div>
          ) : (
            <FormRender
              form={form}
              schema={schema}
              {...formProps}
              widgets={{ asyncSelect: AsyncSelect }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Demo;`,on=`{
  "schema": {
    "type": "object",
    "properties": {
      "string": {
        "title": "\u5B57\u7B26\u4E32",
        "type": "string",
        "required": true
      },
      "select": {
        "title": "\u5355\u9009",
        "type": "string",
        "enum": ["a", "b", "c"],
        "enumNames": ["\u9009\u98791", "\u9009\u98792", "\u9009\u98793"],
        "widget": "radio"
      }
    }
  }
}`,Tn=`import { Select } from 'antd';
import jsonp from 'fetch-jsonp';
import querystring from 'querystring';
const { Option } = Select;

let timeout;
let currentValue;

function fetch(value, callback) {
  if (timeout) {
    clearTimeout(timeout);
    timeout = null;
  }
  currentValue = value;

  function fake() {
    const str = querystring.encode({
      code: 'utf-8',
      q: value,
    });
    jsonp(\`https://suggest.taobao.com/sug?\${str}\`)
      .then(response => response.json())
      .then(d => {
        if (currentValue === value) {
          const { result } = d;
          const data = [];
          result.forEach(r => {
            data.push({
              value: r[0],
              text: r[0],
            });
          });
          callback(data);
        }
      });
  }

  timeout = setTimeout(fake, 300);
}

class SearchInput extends React.Component {
  state = {
    data: [],
  };

  handleSearch = value => {
    if (value) {
      fetch(value, data => this.setState({ data }));
    } else {
      this.setState({ data: [] });
    }
  };

  handleChange = value => {
    const { onChange, name } = this.props;
    onChange(name, value);
  };

  render() {
    const { value, options: uiOptions } = this.props;
    const options = this.state.data.map(d => (
      <Option key={d.value}>{d.text}</Option>
    ));
    return (
      <Select
        {...uiOptions}
        style={{ width: '100%' }}
        showSearch
        value={value || undefined}
        defaultActiveFirstOption={false}
        showArrow={false}
        filterOption={false}
        onSearch={this.handleSearch}
        onChange={this.handleChange}
        notFoundContent={null}
      >
        {options}
      </Select>
    );
  }
}

export default SearchInput;`,Rn=`import React from 'react';
import Editor from 'react-simple-code-editor';
import { languages, highlight } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import './theme.css';

const Demo = ({ value, onChange }) => {
  return (
    <Editor
      value={value}
      onValueChange={onChange}
      highlight={code => highlight(code, languages.js)}
      padding={10}
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: 16,
      }}
    />
  );
};

export default Demo;`,vn=`/* PrismJS 1.16.0
https://prismjs.com/download.html#themes=prism&languages=markup+css+clike+javascript+graphql+jsx+regex */
/**
 * prism.js default theme for JavaScript, CSS and HTML
 * Based on dabblet (http://dabblet.com)
 * @author Lea Verou
 */

code[class*='language-'],
pre[class*='language-'] {
  color: black;
  background: none;
  text-shadow: 0 1px white;
  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  font-size: 1em;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  line-height: 1.5;

  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;

  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
}

pre[class*='language-']::-moz-selection,
pre[class*='language-'] ::-moz-selection,
code[class*='language-']::-moz-selection,
code[class*='language-'] ::-moz-selection {
  text-shadow: none;
  background: #b3d4fc;
}

pre[class*='language-']::selection,
pre[class*='language-'] ::selection,
code[class*='language-']::selection,
code[class*='language-'] ::selection {
  text-shadow: none;
  background: #b3d4fc;
}

@media print {
  code[class*='language-'],
  pre[class*='language-'] {
    text-shadow: none;
  }
}

/* Code blocks */
pre[class*='language-'] {
  padding: 1em;
  margin: 0.5em 0;
  overflow: auto;
}

:not(pre) > code[class*='language-'],
pre[class*='language-'] {
  background: #f5f2f0;
}

/* Inline code */
:not(pre) > code[class*='language-'] {
  padding: 0.1em;
  border-radius: 0.3em;
  white-space: normal;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
  color: slategray;
}

.token.punctuation {
  color: #999;
}

.namespace {
  opacity: 0.7;
}

.token.property,
.token.tag,
.token.boolean,
.token.number,
.token.constant,
.token.symbol,
.token.deleted {
  color: #905;
}

.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.builtin,
.token.inserted {
  color: #690;
}

.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string {
  color: #9a6e3a;
  background: hsla(0, 0%, 100%, 0.5);
}

.token.atrule,
.token.attr-value,
.token.keyword {
  color: #07a;
}

.token.function,
.token.class-name {
  color: #dd4a68;
}

.token.regex,
.token.important,
.token.variable {
  color: #e90;
}

.token.important,
.token.bold {
  font-weight: bold;
}
.token.italic {
  font-style: italic;
}

.token.entity {
  cursor: help;
}`,Ye=`.markdown p {
  color: #454d64 !important;
  font-size: 15px !important;
  line-height: 1.60625 !important;
}

.markdown ol,
.markdown ul {
  list-style: initial !important;
}

.hidden {
  display: none;
}

.npm__react-simple-code-editor__textarea {
  outline: none;
}

.b {
  font-weight: bold;
}

.pa0 {
  padding: 0;
}
.pa1 {
  padding: 0.25rem;
}
.pa2 {
  padding: 0.5rem;
}
.pa3 {
  padding: 1rem;
}
.pa4 {
  padding: 2rem;
}
.pa5 {
  padding: 4rem;
}
.pl0 {
  padding-left: 0;
}
.pt1 {
  padding-top: 0.25rem;
}
.pt2 {
  padding-top: 0.5rem;
}
.pt3 {
  padding-top: 1rem;
}
.pt4 {
  padding-top: 2rem;
}
.pt5 {
  padding-top: 4rem;
}
.pl2 {
  padding-left: 0.5rem;
}
.pb2 {
  padding-bottom: 0.5rem;
}
.overflow-auto {
  overflow: auto;
}
.h-100 {
  height: 100%;
}
.vh-100 {
  height: 100vh;
}
.relative {
  position: relative;
}
.absolute {
  position: absolute;
}
.top-0 {
  top: 0;
}
.right-0 {
  right: 0;
}
.w-50 {
  width: 50%;
}
.w-100 {
  width: 100%;
}
.flex {
  display: flex;
}
.flex-auto {
  flex: 1 1 auto;
  min-width: 0; /* 1 */
  min-height: 0; /* 1 */
}
.flex-column {
  flex-direction: column;
}
.items-center {
  align-items: center;
}
.flex-wrap {
  flex-wrap: wrap;
}
.z-999 {
  z-index: 999;
}

.fr-playground {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 0;
  height: 100vh;
}

.fr-playground .setting-container {
  border-bottom: 1px solid #ccc;
  padding: 0 12px 12px;
}

.__dumi-default-previewer-demo {
  padding: 24px;
}`,Ln=`import React from 'react';
import { Table, Search, TableProvider, useTable } from 'table-render';
import { Tag, Space, Menu, message, Tooltip, Button } from 'antd';
import { PlusOutlined, InfoCircleOutlined } from '@ant-design/icons';
import request from 'umi-request';

const schema = {
  type: 'object',
  properties: {
    state: {
      title: '\u9152\u5E97\u72B6\u6001',
      type: 'string',
      enum: ['open', 'closed'],
      enumNames: ['\u8425\u4E1A\u4E2D', '\u5DF2\u6253\u70CA'],
      'ui:width': '25%',
      widget: 'select',
    },
    labels: {
      title: '\u9152\u5E97\u661F\u7EA7',
      type: 'string',
      width: '25%',
    },
    created_at: {
      title: '\u6210\u7ACB\u65F6\u95F4',
      type: 'string',
      format: 'date',
      width: '25%',
    },
  },
  'ui:labelWidth': 80,
};

const Demo = () => {
  return (
    <TableProvider>
      <TableBody />
    </TableProvider>
  );
};

const TableBody = () => {
  const { refresh, tableState }: any = useTable();

  const searchApi = params => {
    console.log('params >>> ', params);
    return request
      .get(
        'https://www.fastmock.site/mock/62ab96ff94bc013592db1f67667e9c76/getTableList/api/basic',
        { params }
      )
      .then(res => {
        // console.log('response:', res);
        if (res && res.data) {
          return {
            rows: res.data,
            total: res.data.length,
            extraData: res.status,
          }; // \u6CE8\u610F\u4E00\u5B9A\u8981\u8FD4\u56DE rows \u548C total
        }
      })
      .catch(e => console.log('Oops, error', e));
  };

  // \u914D\u7F6E\u5B8C\u5168\u900F\u4F20antd table
  const columns = [
    {
      title: '\u9152\u5E97\u540D\u79F0',
      dataIndex: 'title',
      valueType: 'text',
      width: '20%',
    },
    {
      title: '\u9152\u5E97\u5730\u5740',
      dataIndex: 'address',
      ellipsis: true,
      copyable: true,
      valueType: 'text',
      width: '25%',
    },
    {
      title: (
        <>
          \u9152\u5E97\u72B6\u6001
          <Tooltip placement="top" title="\u4F7F\u7528valueType">
            <InfoCircleOutlined style={{ marginLeft: 6 }} />
          </Tooltip>
        </>
      ),
      enum: {
        open: '\u8425\u4E1A\u4E2D',
        closed: '\u5DF2\u6253\u70CA',
      },
      dataIndex: 'state',
    },
    {
      title: '\u9152\u5E97\u661F\u7EA7',
      dataIndex: 'labels',
      render: (_, row) => (
        <Space>
          {row.labels.map(({ name, color }) => (
            <Tag color={color} key={name}>
              {name}
            </Tag>
          ))}
        </Space>
      ),
    },

    {
      title: '\u9152\u5E97GMV',
      key: 'money',
      dataIndex: 'money',
      valueType: 'money',
    },
    {
      title: '\u6210\u7ACB\u65F6\u95F4',
      key: 'created_at',
      dataIndex: 'created_at',
      valueType: 'date',
    },
    {
      title: '\u64CD\u4F5C',
      render: row => (
        <Space>
          <a target="_blank" key="1">
            <div
              onClick={() => {
                message.success('\u9884\u8BA2\u6210\u529F');
              }}
            >
              \u9884\u8BA2
            </div>
          </a>
        </Space>
      ),
    },
  ];

  const menu = (
    <Menu>
      <Menu.Item>
        <div onClick={() => message.success('\u590D\u5236\u6210\u529F\uFF01')}>\u590D\u5236</div>
      </Menu.Item>
      <Menu.Item>
        <div onClick={() => message.warning('\u786E\u5B9A\u5220\u9664\u5417\uFF1F')}>\u5220\u9664</div>
      </Menu.Item>
    </Menu>
  );

  const showData = () => {
    refresh(null, { extra: 1 });
  };

  return (
    <div style={{ background: 'rgb(245,245,245)' }}>
      <Search
        schema={schema}
        displayType="row"
        onSearch={search => console.log('onSearch', search)}
        afterSearch={params => console.log('afterSearch', params)}
        api={[
          {
            name: '\u5168\u90E8\u6570\u636E',
            api: searchApi,
          },
          {
            name: '\u6211\u7684\u6570\u636E',
            api: searchApi,
          },
        ]}
      />
      <Table
        // size="small"
        columns={columns}
        // headerTitle="\u9AD8\u7EA7\u8868\u5355"
        rowKey="id"
        toolbarRender={() => [
          <Button key="show" onClick={showData}>
            \u67E5\u770B\u65E5\u5FD7
          </Button>,
          <Button key="out" onClick={showData}>
            \u5BFC\u51FA\u6570\u636E
          </Button>,
          <Button
            key="primary"
            type="primary"
            onClick={() => alert('table-render\uFF01')}
          >
            <PlusOutlined />
            \u521B\u5EFA
          </Button>,
        ]}
        toolbarAction
      />
    </div>
  );
};

export default Demo;`,wn=`import React, { useState, useRef } from 'react';
import Generator from 'fr-generator';
import { Button, Modal, Input } from 'antd';
const { TextArea } = Input;

const defaultValue = {
  type: 'object',
  properties: {
    inputName: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
    },
  },
};

const templates = [
  {
    text: '\u6A21\u677F1',
    name: 'something',
    schema: {
      title: '\u5BF9\u8C61',
      description: '\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B',
      type: 'object',
      properties: {
        inputName: {
          title: '\u7B80\u5355\u8F93\u5165\u6846',
          type: 'string',
        },
        selectName: {
          title: '\u5355\u9009',
          type: 'string',
          enum: ['a', 'b', 'c'],
          enumNames: ['\u65E9', '\u4E2D', '\u665A'],
        },
        dateName: {
          title: '\u65F6\u95F4\u9009\u62E9',
          type: 'string',
          format: 'date',
        },
      },
    },
  },
];

const Demo = () => {
  const [show, setShow] = useState(false);
  const [schema, setSchema] = useState(() => defaultValue);
  const genRef = useRef(); // class\u7EC4\u4EF6\u7528 React.createRef()

  const toggle = () => setShow(o => !o);

  const handleOk = () => {
    const value = genRef.current && genRef.current.getValue();
    setSchema(value);
    toggle();
  };

  return (
    <div>
      <Button type="primary" onClick={toggle} style={{ marginBottom: 12 }}>
        \u914D\u7F6Eschema
      </Button>
      <Modal
        visible={show}
        onCancel={toggle}
        onOk={handleOk}
        okText="\u4FDD\u5B58"
        cancelText="\u5173\u95ED"
        width="90%"
        bodyStyle={{ height: '70vh' }}
      >
        <Generator ref={genRef} defaultValue={schema} templates={templates} />
      </Modal>
      <TextArea
        autoSize
        value={JSON.stringify(schema, null, 2)}
        onChange={() => {}}
      />
    </div>
  );
};

export default Demo;`,Dn=`import React, { useState, useRef } from 'react';
import Generator, { fromFormily, toFormily } from 'fr-generator';
import { Button, Modal, Input } from 'antd';
const { TextArea } = Input;

const defaultValue = {
  type: 'object',
  properties: {
    array: {
      key: 'array',
      type: 'array',
      name: 'array',
      title: 'Name',
      'x-component': 'arraytable',
      items: {
        type: 'object',
        properties: {
          aa: {
            key: 'aa',
            type: 'string',
            name: 'aa',
            title: '\u63A7\u5236\u76F8\u90BB\u5B57\u6BB5\u663E\u793A\u9690\u85CF',
            enum: [
              {
                label: '\u663E\u793A',
                value: true,
              },
              {
                label: '\u9690\u85CF',
                value: false,
              },
            ],
            'x-component': 'input',
          },
          bb: {
            key: 'bb',
            type: 'string',
            name: 'bb',
            title: 'BB',
            'x-component': 'input',
          },
        },
      },
    },
    cc: {
      key: 'cc',
      type: 'string',
      name: 'cc',
      title: 'CC',
      'x-component': 'input',
      'x-component-props': { min: 1 },
    },
  },
};

const Demo = () => {
  const [show, setShow] = useState(false);
  const [schema, setSchema] = useState(() => defaultValue);
  const genRef = useRef(); // class\u7EC4\u4EF6\u7528 React.createRef()

  const toggle = () => setShow(o => !o);

  const handleOk = () => {
    const value = genRef.current && genRef.current.getValue();
    setSchema(value);
    toggle();
  };

  return (
    <div>
      <Button type="primary" onClick={toggle} style={{ marginBottom: 12 }}>
        \u914D\u7F6Eschema
      </Button>
      <Modal
        visible={show}
        onCancel={toggle}
        onOk={handleOk}
        okText="\u4FDD\u5B58"
        cancelText="\u5173\u95ED"
        width="90%"
        bodyStyle={{ height: '70vh' }}
      >
        <Generator
          ref={genRef}
          defaultValue={schema}
          transformer={{
            from: fromFormily,
            to: toFormily,
          }}
        />
      </Modal>
      <TextArea
        autoSize
        value={JSON.stringify(schema, null, 2)}
        onChange={() => {}}
      />
    </div>
  );
};

// const b = {
//   schema: {
//     type: 'object',
//     properties: {
//       array: {
//         type: 'array',
//         title: 'Name',
//         items: {
//           type: 'object',
//           properties: {
//             aa: {
//               type: 'string',
//               title: '\u63A7\u5236\u76F8\u90BB\u5B57\u6BB5\u663E\u793A\u9690\u85CF',
//               enum: [true, false],
//               'ui:widget': 'input',
//               enumNames: ['\u663E\u793A', '\u9690\u85CF'],
//             },
//             bb: { type: 'string', title: 'BB', 'ui:widget': 'input' },
//           },
//         },
//       },
//       cc: {
//         type: 'string',
//         title: 'CC',
//         'ui:widget': 'input',
//         'ui:options': { min: 1 },
//       },
//     },
//   },
// };

// console.log(toFormily(b));

export default Demo;`,we=`import React from 'react';
import Generator, {
  defaultSettings,
  defaultCommonSettings,
  defaultGlobalSettings,
} from 'fr-generator';

const NewWidget = ({ value = 0, onChange }) => (
  <button onClick={() => onChange(value + 1)}>{value}</button>
);

const Demo = () => {
  console.log(defaultSettings, defaultCommonSettings, defaultGlobalSettings);

  return (
    <div style={{ height: '50vh' }}>
      <Generator
        widgets={{ NewWidget }}
        settings={[
          {
            title: '\u4E2A\u4EBA\u4FE1\u606F',
            widgets: [
              {
                text: '\u8BA1\u6570\u5668',
                name: 'asyncSelect',
                schema: {
                  title: '\u8BA1\u6570\u5668',
                  type: 'number',
                  widget: 'NewWidget',
                },
                setting: {
                  api: { title: 'api', type: 'string' },
                },
              },
              {
                text: 'object',
                name: 'object',
                schema: {
                  title: '\u5BF9\u8C61',
                  type: 'object',
                  properties: {},
                },
                setting: {},
              },
              {
                text: '\u59D3\u540D',
                name: 'name',
                schema: {
                  title: '\u8F93\u5165\u6846',
                  type: 'string',
                },
                setting: {
                  maxLength: { title: '\u6700\u957F\u5B57\u6570', type: 'number' },
                },
              },
            ],
          },
        ]}
        commonSettings={{
          description: {
            title: '\u81EA\u5B9A\u4E49\u5171\u901A\u7528\u7684\u5165\u53C2',
            type: 'string',
          },
        }}
      />
    </div>
  );
};

export default Demo;`,qn=`import React, { useState, useRef } from 'react';
import { useHistory } from 'umi';
import Generator, { toFormily, fromFormily } from 'fr-generator';
import './index.less';

const Demo = () => {
  const ref = useRef();
  const { location, replace } = useHistory();
  const [isFormily, setIsFormily] = useState(location.query.type === 'formily');

  const goToFrPlayground = () => {
    ref.current.copyValue();
    window.open('/playground');
  };

  const switchMode = () => {
    if (isFormily) {
      setIsFormily(false);
      replace('/tools/generator/playground');
    } else {
      setIsFormily(true);
      replace('/tools/generator/playground?type=formily');
    }
  };

  return (
    <div className="fr-generator-playground" style={{ height: '80vh' }}>
      <Generator
        ref={ref}
        transformer={isFormily && { to: toFormily, from: fromFormily }}
        extraButtons={[
          { text: '\u53BBplayground\u9A8C\u8BC1', onClick: goToFrPlayground },
          {
            text: 'Formily',
            shape: 'round',
            type: isFormily && 'primary',
            onClick: switchMode,
          }
        ]}
        onChange={data => console.log('data:change', data)}
        onSchemaChange={schema => console.log('schema:change', schema)}
      />
    </div>
  );
};

export default Demo;`,$n=`.fr-generator-playground {
  margin: 0 -24px;

  .hide-demo {
    display: none;
  }
}`,rt=ln.default={"guide-card":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(v.a.mark(function T(){return v.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(20)]).then(n.bind(null,"oLxE"));case 2:return l.abrupt("return",l.sent.default);case 3:case"end":return l.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:de}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"card-render":{version:"0.1.2"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"0.x"}},identifier:"guide-card"}},"chart-render-demo":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(v.a.mark(function T(){var f,l,y,F,R,u,i;return v.a.wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return u=function(D,s){if(!s&&D&&D.__esModule)return D;if(D===null||typeof D!="object"&&typeof D!="function")return{default:D};var j=R(s);if(j&&j.has(D))return j.get(D);var d={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var p in D)if(p!=="default"&&Object.prototype.hasOwnProperty.call(D,p)){var m=a?Object.getOwnPropertyDescriptor(D,p):null;m&&(m.get||m.set)?Object.defineProperty(d,p,m):d[p]=D[p]}return d.default=D,j&&j.set(D,d),d},R=function(D){if(typeof WeakMap!="function")return null;var s=new WeakMap,j=new WeakMap;return(R=function(a){return a?j:s})(D)},f=n("K+nK"),N.t0=f,N.next=6,Promise.resolve().then(n.bind(null,"tJVT"));case 6:return N.t1=N.sent,l=(0,N.t0)(N.t1),N.t2=u,N.next=11,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 11:return N.t3=N.sent,y=(0,N.t2)(N.t3),N.next=15,Promise.all([n.e(0),n.e(2),n.e(6),n.e(7)]).then(n.bind(null,"36SN"));case 15:return F=N.sent,i=function(){var D=(0,y.useState)("Line"),s=(0,l.default)(D,2),j=s[0],d=s[1],a={Line:F.Line,Column:F.Column,PivotTable:F.PivotTable}[j];return y.default.createElement("div",null,y.default.createElement("div",{style:{marginBottom:10}},y.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return d("Line")}},"\u6298\u7EBF\u56FE"),y.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return d("Column")}},"\u67F1\u72B6\u56FE"),y.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return d("PivotTable")}},"\u4EA4\u53C9\u8868")),y.default.createElement(a,{meta:[{id:"date",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF",isDim:!1},{id:"uv",name:"\u8BBF\u5BA2\u6570",isDim:!1}],data:[{date:"20200101",pv:100,uv:50},{date:"20200102",pv:120,uv:60},{date:"20200103",pv:140,uv:70},{date:"20200104",pv:160,uv:80}]}))},N.abrupt("return",i);case 18:case"end":return N.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
import { Line, Column, PivotTable, } from 'chart-render';

export default () => {
  const [component, setComponent] = useState('Line');
  const ChartRender = { Line, Column, PivotTable }[component];

  return (
    <div>
      <div style={{ marginBottom: 10 }}>
        <button
          style={{ marginRight: 10 }}
          className="ant-btn ant-btn-primary"
          onClick={() => setComponent('Line')}
        >
          \u6298\u7EBF\u56FE
        </button>
        <button
          style={{ marginRight: 10 }}
          className="ant-btn ant-btn-primary"
          onClick={() => setComponent('Column')}
        >
          \u67F1\u72B6\u56FE
        </button>
        <button
          style={{ marginRight: 10 }}
          className="ant-btn ant-btn-primary"
          onClick={() => setComponent('PivotTable')}
        >
          \u4EA4\u53C9\u8868
        </button>
      </div>
      
      <ChartRender
        meta={[
          { id: 'date', name: '\u65E5\u671F', isDim: true },
          { id: 'pv', name: '\u8BBF\u95EE\u91CF', isDim: false },
          { id: 'uv', name: '\u8BBF\u5BA2\u6570', isDim: false },
        ]}
        data={[
          { date: '20200101', pv: 100, uv: 50 },
          { date: '20200102', pv: 120, uv: 60 },
          { date: '20200103', pv: 140, uv: 70 },
          { date: '20200104', pv: 160, uv: 80 },
        ]}
      />
      
    </div>
  );
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"chart-render-demo"}},"column-demo":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(v.a.mark(function T(){var f,l,y,F;return v.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return f=n("K+nK"),u.t0=f,u.next=4,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,l=(0,u.t0)(u.t1),u.next=8,Promise.all([n.e(0),n.e(2),n.e(6),n.e(7)]).then(n.bind(null,"36SN"));case 8:return y=u.sent,F=function(){return l.default.createElement(y.Column,{meta:[{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{pv:50,uv:20}]})},u.abrupt("return",F);case 11:case"end":return u.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: "pv", name: "\u8BBF\u95EE\u91CF" },
      { id: "uv", name: "\u8BBF\u5BA2\u6570" },
    ]}
    data={[
      { pv: 50, uv: 20 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo"}},"column-demo-1":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(v.a.mark(function T(){var f,l,y,F;return v.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return f=n("K+nK"),u.t0=f,u.next=4,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,l=(0,u.t0)(u.t1),u.next=8,Promise.all([n.e(0),n.e(2),n.e(6),n.e(7)]).then(n.bind(null,"36SN"));case 8:return y=u.sent,F=function(){return l.default.createElement(y.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},u.abrupt("return",F);case 11:case"end":return u.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: "ds", name: "\u65E5\u671F", isDim: true },
      { id: "uv", name: "\u8BBF\u5BA2\u6570" },
    ]}
    data={[
      { ds: "2020-12-31", uv: 20 },
      { ds: "2021-01-01", uv: 21 },
      { ds: "2021-01-02", uv: 15 },
      { ds: "2021-01-03", uv: 40 },
      { ds: "2021-01-04", uv: 31 },
      { ds: "2021-01-05", uv: 32 },
      { ds: "2021-01-06", uv: 30 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-1"}},"column-demo-2":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(v.a.mark(function T(){var f,l,y,F;return v.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return f=n("K+nK"),u.t0=f,u.next=4,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,l=(0,u.t0)(u.t1),u.next=8,Promise.all([n.e(0),n.e(2),n.e(6),n.e(7)]).then(n.bind(null,"36SN"));case 8:return y=u.sent,F=function(){return l.default.createElement(y.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},u.abrupt("return",F);case 11:case"end":return u.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: "ds", name: "\u65E5\u671F", isDim: true },
      { id: "page", name: "\u9875\u9762\u540D\u79F0", isDim: true },
      { id: "uv", name: "\u8BBF\u5BA2\u6570" },
    ]}
    data={[
      { ds: "2020-12-31", page: "\u767B\u5F55\u9875", uv: 20 },
      { ds: "2020-12-31", page: "\u9996\u9875", uv: 120 },
      { ds: "2021-01-01", page: "\u767B\u5F55\u9875", uv: 21 },
      { ds: "2021-01-01", page: "\u9996\u9875", uv: 121 },
      { ds: "2021-01-02", page: "\u767B\u5F55\u9875", uv: 15 },
      { ds: "2021-01-02", page: "\u9996\u9875", uv: 115 },
      { ds: "2021-01-03", page: "\u767B\u5F55\u9875", uv: 40 },
      { ds: "2021-01-03", page: "\u9996\u9875", uv: 140 },
      { ds: "2021-01-04", page: "\u767B\u5F55\u9875", uv: 31 },
      { ds: "2021-01-04", page: "\u9996\u9875", uv: 131 },
      { ds: "2021-01-05", page: "\u767B\u5F55\u9875", uv: 32 },
      { ds: "2021-01-05", page: "\u9996\u9875", uv: 132 },
      { ds: "2021-01-06", page: "\u767B\u5F55\u9875", uv: 30 },
      { ds: "2021-01-06", page: "\u9996\u9875", uv: 130 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-2"}},"column-demo-3":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(v.a.mark(function T(){var f,l,y,F;return v.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return f=n("K+nK"),u.t0=f,u.next=4,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,l=(0,u.t0)(u.t1),u.next=8,Promise.all([n.e(0),n.e(2),n.e(6),n.e(7)]).then(n.bind(null,"36SN"));case 8:return y=u.sent,F=function(){return l.default.createElement(y.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},u.abrupt("return",F);case 11:case"end":return u.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: "ds", name: "\u65E5\u671F", "isDim": true },
      { id: "pv", name: "\u8BBF\u95EE\u91CF" },
      { id: "uv", name: "\u8BBF\u5BA2\u6570" }
    ]}
    data={[
      { ds: "2020-12-31", pv: 50, uv: 20 },
      { ds: "2021-01-01", pv: 76, uv: 21 },
      { ds: "2021-01-02", pv: 46, uv: 15 },
      { ds: "2021-01-03", pv: 89, uv: 40 },
      { ds: "2021-01-04", pv: 66, uv: 31 },
      { ds: "2021-01-05", pv: 46, uv: 32 },
      { ds: "2021-01-06", pv: 45, uv: 30 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-3"}},"column-demo-4":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(v.a.mark(function T(){var f,l,y,F;return v.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return f=n("K+nK"),u.t0=f,u.next=4,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,l=(0,u.t0)(u.t1),u.next=8,Promise.all([n.e(0),n.e(2),n.e(6),n.e(7)]).then(n.bind(null,"36SN"));case 8:return y=u.sent,F=function(){return l.default.createElement(y.Column,{inverted:!0,label:{position:"middle",layout:[{type:"interval-adjust-position"},{type:"interval-hide-overlap"},{type:"adjust-color"}]},meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},u.abrupt("return",F);case 11:case"end":return u.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    inverted
    label={{
      position: 'middle',
      layout: [
        { type: 'interval-adjust-position' },
        { type: 'interval-hide-overlap' },
        { type: 'adjust-color' },
      ],
    }}
    meta={[
      { id: "ds", name: "\u65E5\u671F", "isDim": true },
      { id: "pv", name: "\u8BBF\u95EE\u91CF" },
      { id: "uv", name: "\u8BBF\u5BA2\u6570" }
    ]}
    data={[
      { ds: "2020-12-31", pv: 50, uv: 20 },
      { ds: "2021-01-01", pv: 76, uv: 21 },
      { ds: "2021-01-02", pv: 46, uv: 15 },
      { ds: "2021-01-03", pv: 89, uv: 40 },
      { ds: "2021-01-04", pv: 66, uv: 31 },
      { ds: "2021-01-05", pv: 46, uv: 32 },
      { ds: "2021-01-06", pv: 45, uv: 30 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-4"}},"line-demo":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(v.a.mark(function T(){var f,l,y,F;return v.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return f=n("K+nK"),u.t0=f,u.next=4,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,l=(0,u.t0)(u.t1),u.next=8,Promise.all([n.e(0),n.e(2),n.e(6),n.e(7)]).then(n.bind(null,"36SN"));case 8:return y=u.sent,F=function(){return l.default.createElement(y.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},u.abrupt("return",F);case 11:case"end":return u.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Line } from 'chart-render';

export default () => (
  <Line
    meta={[
      { id: "ds", name: "\u65E5\u671F", isDim: true },
      { id: "uv", name: "\u8BBF\u5BA2\u6570" },
    ]}
    data={[
      { ds: "2020-12-31", uv: 20 },
      { ds: "2021-01-01", uv: 21 },
      { ds: "2021-01-02", uv: 15 },
      { ds: "2021-01-03", uv: 40 },
      { ds: "2021-01-04", uv: 31 },
      { ds: "2021-01-05", uv: 32 },
      { ds: "2021-01-06", uv: 30 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo"}},"line-demo-1":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(v.a.mark(function T(){var f,l,y,F;return v.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return f=n("K+nK"),u.t0=f,u.next=4,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,l=(0,u.t0)(u.t1),u.next=8,Promise.all([n.e(0),n.e(2),n.e(6),n.e(7)]).then(n.bind(null,"36SN"));case 8:return y=u.sent,F=function(){return l.default.createElement(y.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},u.abrupt("return",F);case 11:case"end":return u.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Line } from 'chart-render';

export default () => (
  <Line
    meta={[
      { id: "ds", name: "\u65E5\u671F", isDim: true },
      { id: "page", name: "\u9875\u9762\u540D\u79F0", isDim: true },
      { id: "uv", name: "\u8BBF\u5BA2\u6570" },
    ]}
    data={[
      { ds: "2020-12-31", page: "\u767B\u5F55\u9875", uv: 20 },
      { ds: "2020-12-31", page: "\u9996\u9875", uv: 120 },
      { ds: "2021-01-01", page: "\u767B\u5F55\u9875", uv: 21 },
      { ds: "2021-01-01", page: "\u9996\u9875", uv: 121 },
      { ds: "2021-01-02", page: "\u767B\u5F55\u9875", uv: 15 },
      { ds: "2021-01-02", page: "\u9996\u9875", uv: 115 },
      { ds: "2021-01-03", page: "\u767B\u5F55\u9875", uv: 40 },
      { ds: "2021-01-03", page: "\u9996\u9875", uv: 140 },
      { ds: "2021-01-04", page: "\u767B\u5F55\u9875", uv: 31 },
      { ds: "2021-01-04", page: "\u9996\u9875", uv: 131 },
      { ds: "2021-01-05", page: "\u767B\u5F55\u9875", uv: 32 },
      { ds: "2021-01-05", page: "\u9996\u9875", uv: 132 },
      { ds: "2021-01-06", page: "\u767B\u5F55\u9875", uv: 30 },
      { ds: "2021-01-06", page: "\u9996\u9875", uv: 130 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-1"}},"line-demo-2":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(v.a.mark(function T(){var f,l,y,F;return v.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return f=n("K+nK"),u.t0=f,u.next=4,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,l=(0,u.t0)(u.t1),u.next=8,Promise.all([n.e(0),n.e(2),n.e(6),n.e(7)]).then(n.bind(null,"36SN"));case 8:return y=u.sent,F=function(){return l.default.createElement(y.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"},{id:"pv",name:"\u8BBF\u95EE\u91CF"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20,pv:120},{ds:"2020-12-31",page:"\u9996\u9875",uv:120,pv:1120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21,pv:121},{ds:"2021-01-01",page:"\u9996\u9875",uv:121,pv:1121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15,pv:115},{ds:"2021-01-02",page:"\u9996\u9875",uv:115,pv:1115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40,pv:140},{ds:"2021-01-03",page:"\u9996\u9875",uv:140,pv:1140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31,pv:131},{ds:"2021-01-04",page:"\u9996\u9875",uv:131,pv:1131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32,pv:132},{ds:"2021-01-05",page:"\u9996\u9875",uv:132,pv:1132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30,pv:130},{ds:"2021-01-06",page:"\u9996\u9875",uv:130,pv:1130}]})},u.abrupt("return",F);case 11:case"end":return u.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Line } from 'chart-render';

export default () => (
  <Line
    meta={[
      { id: "ds", name: "\u65E5\u671F", isDim: true },
      { id: "page", name: "\u9875\u9762\u540D\u79F0", isDim: true },
      { id: "uv", name: "\u8BBF\u5BA2\u6570" },
      { id: "pv", name: "\u8BBF\u95EE\u91CF" },
    ]}
    data={[
      { ds: "2020-12-31", page: "\u767B\u5F55\u9875", uv: 20, pv: 120 },
      { ds: "2020-12-31", page: "\u9996\u9875", uv: 120, pv: 1120 },
      { ds: "2021-01-01", page: "\u767B\u5F55\u9875", uv: 21, pv: 121 },
      { ds: "2021-01-01", page: "\u9996\u9875", uv: 121, pv: 1121 },
      { ds: "2021-01-02", page: "\u767B\u5F55\u9875", uv: 15, pv: 115 },
      { ds: "2021-01-02", page: "\u9996\u9875", uv: 115, pv: 1115 },
      { ds: "2021-01-03", page: "\u767B\u5F55\u9875", uv: 40, pv: 140 },
      { ds: "2021-01-03", page: "\u9996\u9875", uv: 140, pv: 1140 },
      { ds: "2021-01-04", page: "\u767B\u5F55\u9875", uv: 31, pv: 131 },
      { ds: "2021-01-04", page: "\u9996\u9875", uv: 131, pv: 1131 },
      { ds: "2021-01-05", page: "\u767B\u5F55\u9875", uv: 32, pv: 132 },
      { ds: "2021-01-05", page: "\u9996\u9875", uv: 132, pv: 1132 },
      { ds: "2021-01-06", page: "\u767B\u5F55\u9875", uv: 30, pv: 130 },
      { ds: "2021-01-06", page: "\u9996\u9875", uv: 130, pv: 1130 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-2"}},"line-demo-3":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(v.a.mark(function T(){var f,l,y,F;return v.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return f=n("K+nK"),u.t0=f,u.next=4,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,l=(0,u.t0)(u.t1),u.next=8,Promise.all([n.e(0),n.e(2),n.e(6),n.e(7)]).then(n.bind(null,"36SN"));case 8:return y=u.sent,F=function(){return l.default.createElement(y.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},u.abrupt("return",F);case 11:case"end":return u.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Line } from 'chart-render';

export default () => (
  <Line
    meta={[
      { id: "ds", name: "\u65E5\u671F", "isDim": true },
      { id: "pv", name: "\u8BBF\u95EE\u91CF" },
      { id: "uv", name: "\u8BBF\u5BA2\u6570" }
    ]}
    data={[
      { ds: "2020-12-31", pv: 50, uv: 20 },
      { ds: "2021-01-01", pv: 76, uv: 21 },
      { ds: "2021-01-02", pv: 46, uv: 15 },
      { ds: "2021-01-03", pv: 89, uv: 40 },
      { ds: "2021-01-04", pv: 66, uv: 31 },
      { ds: "2021-01-05", pv: 46, uv: 32 },
      { ds: "2021-01-06", pv: 45, uv: 30 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-3"}},"line-demo-4":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(v.a.mark(function T(){var f,l,y,F;return v.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return f=n("K+nK"),u.t0=f,u.next=4,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,l=(0,u.t0)(u.t1),u.next=8,Promise.all([n.e(0),n.e(2),n.e(6),n.e(7)]).then(n.bind(null,"36SN"));case 8:return y=u.sent,F=function(){return l.default.createElement(y.Line,{withArea:!0,isStack:!0,isPercent:!0,meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},u.abrupt("return",F);case 11:case"end":return u.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Line } from 'chart-render';

export default () => (
  <Line
    withArea // \u5F00\u542F\u9762\u79EF\u56FE
    isStack // \u5806\u53E0\u5C55\u793A
    isPercent // \u767E\u5206\u6BD4\u9762\u79EF\u56FE
    meta={[
      { id: "ds", name: "\u65E5\u671F", "isDim": true },
      { id: "pv", name: "\u8BBF\u95EE\u91CF" },
      { id: "uv", name: "\u8BBF\u5BA2\u6570" }
    ]}
    data={[
      { ds: "2020-12-31", pv: 50, uv: 20 },
      { ds: "2021-01-01", pv: 76, uv: 21 },
      { ds: "2021-01-02", pv: 46, uv: 15 },
      { ds: "2021-01-03", pv: 89, uv: 40 },
      { ds: "2021-01-04", pv: 66, uv: 31 },
      { ds: "2021-01-05", pv: 46, uv: 32 },
      { ds: "2021-01-06", pv: 45, uv: 30 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-4"}},"pivot-table-demo":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(v.a.mark(function T(){var f,l,y,F;return v.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return f=n("K+nK"),u.t0=f,u.next=4,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,l=(0,u.t0)(u.t1),u.next=8,Promise.all([n.e(0),n.e(2),n.e(6),n.e(7)]).then(n.bind(null,"36SN"));case 8:return y=u.sent,F=function(){return l.default.createElement(y.PivotTable,{style:{maxHeight:400,overflow:"auto"},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},u.abrupt("return",F);case 11:case"end":return u.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { PivotTable } from 'chart-render';

export default () => (
  <PivotTable
    style={{ maxHeight: 400, overflow: 'auto' }}
    meta={[
      { id: 'subs', name: '\u5B50\u516C\u53F8', isDim: true, isRate: false },
      { id: 'shop', name: '\u95E8\u5E97', isDim: true, isRate: false },
      { id: 'season', name: '\u5B63\u5EA6', isDim: true, isRate: false },
      { id: 'month', name: '\u6708\u4EFD', isDim: true, isRate: false },
      { id: 'valueA', name: '\u6307\u6807A', isDim: false, isRate: false },
      { id: 'valueB', name: '\u6307\u6807B', isDim: false, isRate: true },
    ]}
    data={[
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u5927\u5B81\u5E97', season: '\u4E00\u5B63\u5EA6', month: '2022-01', valueA: 782, valueB: 0.566 },
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u5927\u5B81\u5E97', season: '\u4E00\u5B63\u5EA6', month: '2022-02', valueA: 856, valueB: 0.403 },
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u5927\u5B81\u5E97', season: '\u4E00\u5B63\u5EA6', month: '2022-03', valueA: 886, valueB: 0.555 },
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u5927\u5B81\u5E97', season: '\u4E8C\u5B63\u5EA6', month: '2022-04', valueA: 555, valueB: 0.444 },
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u5927\u5B81\u5E97', season: '\u4E8C\u5B63\u5EA6', month: '2022-05', valueA: 444, valueB: 0.333 },
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97', season: '\u4E00\u5B63\u5EA6', month: '2022-01', valueA: 922, valueB: 0.778 },
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97', season: '\u4E00\u5B63\u5EA6', month: '2022-02', valueA: 888, valueB: 0.887 },
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97', season: '\u4E00\u5B63\u5EA6', month: '2022-03', valueA: 879, valueB: 0.870 },
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97', season: '\u4E8C\u5B63\u5EA6', month: '2022-04', valueA: 800, valueB: 0.723 },
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97', season: '\u4E8C\u5B63\u5EA6', month: '2022-05', valueA: 813, valueB: 0.789 },
      { subs: '\u6D59\u6C5F\u5B50\u516C\u53F8', shop: '\u4EB2\u6A59\u91CC', season: '\u4E00\u5B63\u5EA6', month: '2022-01', valueA: 500, valueB: 0.463 },
      { subs: '\u6D59\u6C5F\u5B50\u516C\u53F8', shop: '\u4EB2\u6A59\u91CC', season: '\u4E00\u5B63\u5EA6', month: '2022-02', valueA: 833, valueB: 0.456 },
      { subs: '\u6D59\u6C5F\u5B50\u516C\u53F8', shop: '\u4EB2\u6A59\u91CC', season: '\u4E00\u5B63\u5EA6', month: '2022-03', valueA: 821, valueB: 0.442 },
      { subs: '\u6D59\u6C5F\u5B50\u516C\u53F8', shop: '\u4EB2\u6A59\u91CC', season: '\u4E8C\u5B63\u5EA6', month: '2022-04', valueA: 834, valueB: 0.456 },
      { subs: '\u6D59\u6C5F\u5B50\u516C\u53F8', shop: '\u4EB2\u6A59\u91CC', season: '\u4E8C\u5B63\u5EA6', month: '2022-05', valueA: 803, valueB: 0.700 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo"}},"pivot-table-demo-1":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(v.a.mark(function T(){var f,l,y,F;return v.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return f=n("K+nK"),u.t0=f,u.next=4,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,l=(0,u.t0)(u.t1),u.next=8,Promise.all([n.e(0),n.e(2),n.e(6),n.e(7)]).then(n.bind(null,"36SN"));case 8:return y=u.sent,F=function(){return l.default.createElement(y.PivotTable,{style:{maxHeight:400,overflow:"auto"},cellRender:function(N,B,D){return l.default.createElement("div",null,l.default.createElement("p",null,"\u53C2\u6570\u8868\uFF1A"),l.default.createElement("p",{style:{color:["red","orange","yellow","green","blue"][Object.keys(B).length]}},N),l.default.createElement("p",null,JSON.stringify(B)),l.default.createElement("p",null,JSON.stringify(D)))},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},u.abrupt("return",F);case 11:case"end":return u.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { PivotTable } from 'chart-render';

export default () => (
  <PivotTable
    style={{ maxHeight: 400, overflow: 'auto' }}
    cellRender={(val, dimRecord, indId) => (
      <div>
        <p>\u53C2\u6570\u8868\uFF1A</p>
        <p style={{
          color: ['red', 'orange', 'yellow', 'green', 'blue'][Object.keys(dimRecord).length],
        }}>{val}</p>
        <p>{JSON.stringify(dimRecord)}</p>
        <p>{JSON.stringify(indId)}</p>
      </div>
    )}
    meta={[
      { id: 'subs', name: '\u5B50\u516C\u53F8', isDim: true, isRate: false },
      { id: 'shop', name: '\u95E8\u5E97', isDim: true, isRate: false },
      { id: 'season', name: '\u5B63\u5EA6', isDim: true, isRate: false },
      { id: 'month', name: '\u6708\u4EFD', isDim: true, isRate: false },
      { id: 'valueA', name: '\u6307\u6807A', isDim: false, isRate: false },
      { id: 'valueB', name: '\u6307\u6807B', isDim: false, isRate: true },
    ]}
    data={[
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u5927\u5B81\u5E97', season: '\u4E00\u5B63\u5EA6', month: '2022-01', valueA: 782, valueB: 0.566 },
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u5927\u5B81\u5E97', season: '\u4E00\u5B63\u5EA6', month: '2022-02', valueA: 856, valueB: 0.403 },
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u5927\u5B81\u5E97', season: '\u4E00\u5B63\u5EA6', month: '2022-03', valueA: 886, valueB: 0.555 },
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u5927\u5B81\u5E97', season: '\u4E8C\u5B63\u5EA6', month: '2022-04', valueA: 555, valueB: 0.444 },
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u5927\u5B81\u5E97', season: '\u4E8C\u5B63\u5EA6', month: '2022-05', valueA: 444, valueB: 0.333 },
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97', season: '\u4E00\u5B63\u5EA6', month: '2022-01', valueA: 922, valueB: 0.778 },
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97', season: '\u4E00\u5B63\u5EA6', month: '2022-02', valueA: 888, valueB: 0.887 },
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97', season: '\u4E00\u5B63\u5EA6', month: '2022-03', valueA: 879, valueB: 0.870 },
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97', season: '\u4E8C\u5B63\u5EA6', month: '2022-04', valueA: 800, valueB: 0.723 },
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97', season: '\u4E8C\u5B63\u5EA6', month: '2022-05', valueA: 813, valueB: 0.789 },
      { subs: '\u6D59\u6C5F\u5B50\u516C\u53F8', shop: '\u4EB2\u6A59\u91CC', season: '\u4E00\u5B63\u5EA6', month: '2022-01', valueA: 500, valueB: 0.463 },
      { subs: '\u6D59\u6C5F\u5B50\u516C\u53F8', shop: '\u4EB2\u6A59\u91CC', season: '\u4E00\u5B63\u5EA6', month: '2022-02', valueA: 833, valueB: 0.456 },
      { subs: '\u6D59\u6C5F\u5B50\u516C\u53F8', shop: '\u4EB2\u6A59\u91CC', season: '\u4E00\u5B63\u5EA6', month: '2022-03', valueA: 821, valueB: 0.442 },
      { subs: '\u6D59\u6C5F\u5B50\u516C\u53F8', shop: '\u4EB2\u6A59\u91CC', season: '\u4E8C\u5B63\u5EA6', month: '2022-04', valueA: 834, valueB: 0.456 },
      { subs: '\u6D59\u6C5F\u5B50\u516C\u53F8', shop: '\u4EB2\u6A59\u91CC', season: '\u4E8C\u5B63\u5EA6', month: '2022-05', valueA: 803, valueB: 0.700 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-1"}},"pivot-table-demo-2":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(v.a.mark(function T(){var f,l,y,F,R,u,i;return v.a.wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return u=function(D,s){if(!s&&D&&D.__esModule)return D;if(D===null||typeof D!="object"&&typeof D!="function")return{default:D};var j=R(s);if(j&&j.has(D))return j.get(D);var d={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var p in D)if(p!=="default"&&Object.prototype.hasOwnProperty.call(D,p)){var m=a?Object.getOwnPropertyDescriptor(D,p):null;m&&(m.get||m.set)?Object.defineProperty(d,p,m):d[p]=D[p]}return d.default=D,j&&j.set(D,d),d},R=function(D){if(typeof WeakMap!="function")return null;var s=new WeakMap,j=new WeakMap;return(R=function(a){return a?j:s})(D)},f=n("K+nK"),N.t0=f,N.next=6,Promise.resolve().then(n.bind(null,"tJVT"));case 6:return N.t1=N.sent,l=(0,N.t0)(N.t1),N.t2=u,N.next=11,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 11:return N.t3=N.sent,y=(0,N.t2)(N.t3),N.next=15,Promise.all([n.e(0),n.e(2),n.e(6),n.e(7)]).then(n.bind(null,"36SN"));case 15:return F=N.sent,i=function(){var D=(0,y.useState)(!1),s=(0,l.default)(D,2),j=s[0],d=s[1];return y.default.createElement(y.default.Fragment,null,y.default.createElement("label",null,"\u53EF\u5C55\u5F00/\u6536\u7F29\uFF1A",y.default.createElement("input",{type:"checkbox",value:j,onChange:function(){return d(!j)}})),y.default.createElement(F.PivotTable,{leftExpandable:j,showSubtotal:!1,meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]}))},N.abrupt("return",i);case 18:case"end":return N.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
import { PivotTable } from 'chart-render';

export default () => {
  const [expandable, setExpandable] = useState(false);

  return (
    <>
      <label>\u53EF\u5C55\u5F00/\u6536\u7F29\uFF1A<input type="checkbox" value={expandable} onChange={() => setExpandable(!expandable)} /></label>
      <PivotTable
        leftExpandable={expandable}
        showSubtotal={false}
        meta={[
          { id: 'subs', name: '\u5B50\u516C\u53F8', isDim: true, isRate: false },
          { id: 'shop', name: '\u95E8\u5E97', isDim: true, isRate: false },
          { id: 'season', name: '\u5B63\u5EA6', isDim: true, isRate: false },
          { id: 'month', name: '\u6708\u4EFD', isDim: true, isRate: false },
          { id: 'valueA', name: '\u6307\u6807A', isDim: false, isRate: false },
          { id: 'valueB', name: '\u6307\u6807B', isDim: false, isRate: true },
        ]}
        data={[
          { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u5927\u5B81\u5E97', season: '\u4E00\u5B63\u5EA6', month: '2022-01', valueA: 782, valueB: 0.566 },
          { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u5927\u5B81\u5E97', season: '\u4E00\u5B63\u5EA6', month: '2022-02', valueA: 856, valueB: 0.403 },
          { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u5927\u5B81\u5E97', season: '\u4E00\u5B63\u5EA6', month: '2022-03', valueA: 886, valueB: 0.555 },
          { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u5927\u5B81\u5E97', season: '\u4E8C\u5B63\u5EA6', month: '2022-04', valueA: 555, valueB: 0.444 },
          { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u5927\u5B81\u5E97', season: '\u4E8C\u5B63\u5EA6', month: '2022-05', valueA: 444, valueB: 0.333 },
          { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97', season: '\u4E00\u5B63\u5EA6', month: '2022-01', valueA: 922, valueB: 0.778 },
          { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97', season: '\u4E00\u5B63\u5EA6', month: '2022-02', valueA: 888, valueB: 0.887 },
          { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97', season: '\u4E00\u5B63\u5EA6', month: '2022-03', valueA: 879, valueB: 0.870 },
          { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97', season: '\u4E8C\u5B63\u5EA6', month: '2022-04', valueA: 800, valueB: 0.723 },
          { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97', season: '\u4E8C\u5B63\u5EA6', month: '2022-05', valueA: 813, valueB: 0.789 },
          { subs: '\u6D59\u6C5F\u5B50\u516C\u53F8', shop: '\u4EB2\u6A59\u91CC', season: '\u4E00\u5B63\u5EA6', month: '2022-01', valueA: 500, valueB: 0.463 },
          { subs: '\u6D59\u6C5F\u5B50\u516C\u53F8', shop: '\u4EB2\u6A59\u91CC', season: '\u4E00\u5B63\u5EA6', month: '2022-02', valueA: 833, valueB: 0.456 },
          { subs: '\u6D59\u6C5F\u5B50\u516C\u53F8', shop: '\u4EB2\u6A59\u91CC', season: '\u4E00\u5B63\u5EA6', month: '2022-03', valueA: 821, valueB: 0.442 },
          { subs: '\u6D59\u6C5F\u5B50\u516C\u53F8', shop: '\u4EB2\u6A59\u91CC', season: '\u4E8C\u5B63\u5EA6', month: '2022-04', valueA: 834, valueB: 0.456 },
          { subs: '\u6D59\u6C5F\u5B50\u516C\u53F8', shop: '\u4EB2\u6A59\u91CC', season: '\u4E8C\u5B63\u5EA6', month: '2022-05', valueA: 803, valueB: 0.700 },
        ]}
      />
    </>
  );
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-2"}},"form-render-demo":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(v.a.mark(function T(){var f,l,y,F,R,u,i,E,N,B,D,s,j,d;return v.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return D=function(S,w){if(!w&&S&&S.__esModule)return S;if(S===null||typeof S!="object"&&typeof S!="function")return{default:S};var U=B(w);if(U&&U.has(S))return U.get(S);var _={},ue=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ge in S)if(ge!=="default"&&Object.prototype.hasOwnProperty.call(S,ge)){var hn=ue?Object.getOwnPropertyDescriptor(S,ge):null;hn&&(hn.get||hn.set)?Object.defineProperty(_,ge,hn):_[ge]=S[ge]}return _.default=S,U&&U.set(S,_),_},B=function(S){if(typeof WeakMap!="function")return null;var w=new WeakMap,U=new WeakMap;return(B=function(ue){return ue?U:w})(S)},f=n("K+nK"),p.next=5,n.e(3).then(n.t.bind(null,"MaXC",7));case 5:return p.t0=f,p.next=8,n.e(12).then(n.t.bind(null,"4IMT",7));case 8:return p.t1=p.sent,l=(0,p.t0)(p.t1),p.t2=f,p.next=13,n.e(62).then(n.bind(null,"fWQN"));case 13:return p.t3=p.sent,y=(0,p.t2)(p.t3),p.t4=f,p.next=18,n.e(63).then(n.bind(null,"mtLc"));case 18:return p.t5=p.sent,F=(0,p.t4)(p.t5),p.t6=f,p.next=23,n.e(65).then(n.bind(null,"yKVA"));case 23:return p.t7=p.sent,R=(0,p.t6)(p.t7),p.t8=f,p.next=28,n.e(59).then(n.bind(null,"879j"));case 28:return p.t9=p.sent,u=(0,p.t8)(p.t9),p.t10=f,p.next=33,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 33:return p.t11=p.sent,i=(0,p.t10)(p.t11),p.next=37,Promise.all([n.e(0),n.e(1),n.e(2),n.e(10),n.e(11)]).then(n.bind(null,"gdfu"));case 37:return E=p.sent,p.t12=D,p.next=41,Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(8)]).then(n.bind(null,"refC"));case 41:return p.t13=p.sent,N=(0,p.t12)(p.t13),s={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},j=function(m){(0,R.default)(w,m);var S=(0,u.default)(w);function w(){return(0,y.default)(this,w),S.apply(this,arguments)}return(0,F.default)(w,[{key:"render",value:function(){var _=this.props.form;return i.default.createElement("div",null,i.default.createElement(N.default,{form:_,schema:s}),i.default.createElement(l.default,{type:"primary",onClick:_.submit},"\u63D0\u4EA4"))}}]),w}(i.default.Component),d=(0,N.connectForm)(j),p.abrupt("return",d);case 47:case"end":return p.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Button } from 'antd';
import FormRender, { connectForm } from 'form-render';
// import 'antd/dist/antd.css';    \u5982\u679C\u9879\u76EE\u6CA1\u6709\u5BF9antd\u3001less\u505A\u4EFB\u4F55\u914D\u7F6E\u7684\u8BDD\uFF0C\u9700\u8981\u52A0\u4E0A

const schema = {
  type: 'object',
  properties: {
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
    },
    select1: {
      title: '\u5355\u9009',
      type: 'string',
      enum: ['a', 'b', 'c'],
      enumNames: ['\u65E9', '\u4E2D', '\u665A'],
    },
  },
};

class Demo extends React.Component {
  render() {
    const { form } = this.props;
    return (
      <div>
        <FormRender form={form} schema={schema} />
        <Button type="primary" onClick={form.submit}>
          \u63D0\u4EA4
        </Button>
      </div>
    );
  }
}

export default connectForm(Demo);`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo"}},"form-render-demo-1":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(v.a.mark(function T(){var f,l,y,F,R,u,i,E,N,B;return v.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return i=function(d,a){if(!a&&d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var p=u(a);if(p&&p.has(d))return p.get(d);var m={},S=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var w in d)if(w!=="default"&&Object.prototype.hasOwnProperty.call(d,w)){var U=S?Object.getOwnPropertyDescriptor(d,w):null;U&&(U.get||U.set)?Object.defineProperty(m,w,U):m[w]=d[w]}return m.default=d,p&&p.set(d,m),m},u=function(d){if(typeof WeakMap!="function")return null;var a=new WeakMap,p=new WeakMap;return(u=function(S){return S?p:a})(d)},f=n("K+nK"),s.next=5,n.e(3).then(n.t.bind(null,"MaXC",7));case 5:return s.t0=f,s.next=8,n.e(12).then(n.t.bind(null,"4IMT",7));case 8:return s.t1=s.sent,l=(0,s.t0)(s.t1),s.t2=f,s.next=13,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 13:return s.t3=s.sent,y=(0,s.t2)(s.t3),s.next=17,Promise.all([n.e(0),n.e(1),n.e(2),n.e(10),n.e(11)]).then(n.bind(null,"gdfu"));case 17:return F=s.sent,s.t4=i,s.next=21,Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(8)]).then(n.bind(null,"refC"));case 21:return s.t5=s.sent,R=(0,s.t4)(s.t5),E={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},N=function(){var d=(0,R.useForm)();return y.default.createElement("div",null,y.default.createElement(R.default,{form:d,schema:E}),y.default.createElement(l.default,{type:"primary",onClick:d.submit},"\u63D0\u4EA4"))},B=N,s.abrupt("return",B);case 27:case"end":return s.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Button } from 'antd';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',
  properties: {
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
    },
    select1: {
      title: '\u5355\u9009',
      type: 'string',
      enum: ['a', 'b', 'c'],
      enumNames: ['\u65E9', '\u4E2D', '\u665A'],
    },
  },
};

const Demo = () => {
  const form = useForm();
  return (
    <div>
      <FormRender form={form} schema={schema} />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4
      </Button>
    </div>
  );
};

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo-1"}},"form-render-demo-2":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(v.a.mark(function T(){var f,l,y,F,R,u,i,E,N,B;return v.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return i=function(d,a){if(!a&&d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var p=u(a);if(p&&p.has(d))return p.get(d);var m={},S=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var w in d)if(w!=="default"&&Object.prototype.hasOwnProperty.call(d,w)){var U=S?Object.getOwnPropertyDescriptor(d,w):null;U&&(U.get||U.set)?Object.defineProperty(m,w,U):m[w]=d[w]}return m.default=d,p&&p.set(d,m),m},u=function(d){if(typeof WeakMap!="function")return null;var a=new WeakMap,p=new WeakMap;return(u=function(S){return S?p:a})(d)},f=n("K+nK"),s.next=5,n.e(3).then(n.t.bind(null,"MaXC",7));case 5:return s.t0=f,s.next=8,n.e(12).then(n.t.bind(null,"4IMT",7));case 8:return s.t1=s.sent,l=(0,s.t0)(s.t1),s.t2=f,s.next=13,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 13:return s.t3=s.sent,y=(0,s.t2)(s.t3),s.next=17,Promise.all([n.e(0),n.e(1),n.e(2),n.e(10),n.e(11)]).then(n.bind(null,"gdfu"));case 17:return F=s.sent,s.t4=i,s.next=21,Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(8)]).then(n.bind(null,"refC"));case 21:return s.t5=s.sent,R=(0,s.t4)(s.t5),E={displayType:"row",labelWidth:60,type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F",type:"range",format:"date"},siteUrl:{title:"\u7F51\u5740",type:"string",placeholder:"\u6B64\u5904\u5FC5\u586B",required:!0,props:{addonBefore:"https://",addonAfter:".com"}}}},N=function(){var d=(0,R.useForm)(),a=function(m,S){S.length>0?alert("errors:"+JSON.stringify(S)):alert("formData:"+JSON.stringify(m,null,2))};return y.default.createElement("div",null,y.default.createElement(R.default,{form:d,schema:E,onFinish:a}),y.default.createElement(l.default,{type:"primary",onClick:d.submit},"\u63D0\u4EA4"))},B=N,s.abrupt("return",B);case 27:case"end":return s.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Button } from 'antd';
import FormRender, { useForm } from 'form-render';

const schema = {
  displayType: 'row',
  labelWidth: 60,
  type: 'object',
  properties: {
    dateRange: {
      bind: ['startDate', 'endDate'],
      title: '\u65E5\u671F',
      type: 'range',
      format: 'date',
    },
    siteUrl: {
      title: '\u7F51\u5740',
      type: 'string',
      placeholder: '\u6B64\u5904\u5FC5\u586B',
      required: true,
      props: {
        addonBefore: 'https://',
        addonAfter: '.com',
      },
    },
  },
};

const Demo = () => {
  const form = useForm();
  const onFinish = (formData, errors) => {
    if (errors.length > 0) {
      alert('errors:' + JSON.stringify(errors));
    } else {
      alert('formData:' + JSON.stringify(formData, null, 2));
    }
  };

  return (
    <div>
      <FormRender form={form} schema={schema} onFinish={onFinish} />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4
      </Button>
    </div>
  );
};

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-demo-2"}},"migrate-demo":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(v.a.mark(function T(){var f,l,y,F,R,u,i,E;return v.a.wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return i=function(){var s=(0,y.useForm)(),j=function(a,p){p.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(p))):alert(JSON.stringify(a))};return l.default.createElement("div",null,l.default.createElement(y.default,{form:s,schema:u,onFinish:j}),l.default.createElement("button",{onClick:s.submit},"\u63D0\u4EA4"))},R=function(s,j){if(!j&&s&&s.__esModule)return s;if(s===null||typeof s!="object"&&typeof s!="function")return{default:s};var d=F(j);if(d&&d.has(s))return d.get(s);var a={},p=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var m in s)if(m!=="default"&&Object.prototype.hasOwnProperty.call(s,m)){var S=p?Object.getOwnPropertyDescriptor(s,m):null;S&&(S.get||S.set)?Object.defineProperty(a,m,S):a[m]=s[m]}return a.default=s,d&&d.set(s,a),a},F=function(s){if(typeof WeakMap!="function")return null;var j=new WeakMap,d=new WeakMap;return(F=function(p){return p?d:j})(s)},f=n("K+nK"),B.t0=f,B.next=7,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 7:return B.t1=B.sent,l=(0,B.t0)(B.t1),B.t2=R,B.next=12,Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(8)]).then(n.bind(null,"refC"));case 12:return B.t3=B.sent,y=(0,B.t2)(B.t3),u={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}},E=i,B.abrupt("return",E);case 17:case"end":return B.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FormRender, { useForm } from 'form-render'; // 1. \u6539 import

const schema = {
  type: 'object',
  properties: {
    string: {
      title: '\u5B57\u7B26\u4E32',
      type: 'string',
      required: true,
    },
  },
};

function Demo() {
  const form = useForm(); // 2. \u83B7\u53D6 form \u5B9E\u4F8B\uFF0C\u73B0\u5728\u6240\u6709\u8868\u5355\u65B9\u6CD5\u90FD\u6302\u5728\u4E0A\u9762
  // 3 onSubmit \u7684\u5165\u53C2
  const onSubmit = (formData, valid) => {
    if (valid.length > 0) {
      alert(\`\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A\${JSON.stringify(valid)}\`);
    } else {
      alert(JSON.stringify(formData));
    }
  };
  return (
    <div>
      <FormRender
        form={form} // 4 \u8865\u4E0A
        schema={schema}
        onFinish={onSubmit} // 5. \u8865\u4E0A
        // formData={formData} // 6. \u5E72\u6389
        // onChange={setData}
        // onValidate={setValid}
      />
      <button onClick={form.submit}>\u63D0\u4EA4</button>
    </div>
  );
}
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate-demo"}},"display-demo":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(v.a.mark(function T(){var f,l,y,F,R;return v.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=n("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,l=(0,i.t0)(i.t1),i.t2=f,i.next=9,Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(13)]).then(n.bind(null,"bQjt"));case 9:return i.t3=i.sent,y=(0,i.t2)(i.t3),F=function(N){return{type:"object",displayType:N,properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},objectName:{title:"\u5BF9\u8C61",bind:"obj",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},R=function(){return l.default.createElement("div",null,l.default.createElement("h2",null,"display: row"),l.default.createElement(y.default,{schema:F("row")}),l.default.createElement("h2",null,"display: column"),l.default.createElement(y.default,{schema:F("column")}))},i.abrupt("return",R);case 14:case"end":return i.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = displayType => ({
  type: 'object',
  displayType: displayType,
  properties: {
    range1: {
      title: '\u65E5\u671F',
      type: 'range',
      format: 'date',
    },
    objectName: {
      title: '\u5BF9\u8C61',
      bind: 'obj',
      description: '\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B',
      type: 'object',
      properties: {
        input1: {
          title: '\u7B80\u5355\u8F93\u5165\u6846',
          type: 'string',
          required: true,
        },
        select1: {
          title: '\u5355\u9009',
          type: 'string',
          enum: ['a', 'b', 'c'],
          enumNames: ['\u65E9', '\u4E2D', '\u665A'],
        },
      },
    },
  },
});

export default () => (
  <div>
    <h2>display: row</h2>
    <Form schema={schema('row')} />
    <h2>display: column</h2>
    <Form schema={schema('column')} />
  </div>
);`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo"}},"display-demo-1":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(v.a.mark(function T(){var f,l,y,F,R;return v.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=n("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,l=(0,i.t0)(i.t1),i.t2=f,i.next=9,Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(13)]).then(n.bind(null,"bQjt"));case 9:return i.t3=i.sent,y=(0,i.t2)(i.t3),F={type:"object",displayType:"inline",properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},R=function(){return l.default.createElement(y.default,{schema:F})},i.abrupt("return",R);case 14:case"end":return i.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  displayType: 'inline',
  properties: {
    range1: {
      title: '\u65E5\u671F',
      type: 'range',
      format: 'date',
    },
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
    },
    select1: {
      title: '\u5355\u9009',
      type: 'string',
      enum: ['a', 'b', 'c'],
      enumNames: ['\u65E9', '\u4E2D', '\u665A'],
    },
  },
};

export default () => <Form schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-1"}},"display-demo-2":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(v.a.mark(function T(){var f,l,y,F,R;return v.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=n("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,l=(0,i.t0)(i.t1),i.t2=f,i.next=9,Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(13)]).then(n.bind(null,"bQjt"));case 9:return i.t3=i.sent,y=(0,i.t2)(i.t3),F={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0},check:{title:"box",type:"boolean",default:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},R=function(){return l.default.createElement(y.default,{readOnly:!0,schema:F})},i.abrupt("return",R);case 14:case"end":return i.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  displayType: 'row',
  properties: {
    aa: {
      title: '\u5BF9\u8C61',
      type: 'object',
      properties: {
        input1: {
          title: '\u7B80\u5355\u8F93\u5165\u6846',
          type: 'string',
          default: 'hello world',
          required: true,
        },
        check: {
          title: 'box',
          type: 'boolean',
          default: true,
        },
        select1: {
          title: '\u5355\u9009',
          type: 'string',
          enum: ['a', 'b', 'c'],
          enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          default: 'a',
        },
      },
    },
  },
};

export default () => <Form readOnly schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-2"}},"display-demo-3":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(v.a.mark(function T(){var f,l,y,F,R;return v.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=n("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,l=(0,i.t0)(i.t1),i.t2=f,i.next=9,Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(13)]).then(n.bind(null,"bQjt"));case 9:return i.t3=i.sent,y=(0,i.t2)(i.t3),F={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0,width:"50%"},check:{title:"box",type:"boolean",default:!0,width:"50%",labelWidth:6},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},R=function(){return l.default.createElement(y.default,{labelWidth:"200",schema:F})},i.abrupt("return",R);case 14:case"end":return i.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  displayType: 'row',
  properties: {
    aa: {
      title: '\u5BF9\u8C61',
      type: 'object',
      properties: {
        input1: {
          title: '\u7B80\u5355\u8F93\u5165\u6846',
          type: 'string',
          default: 'hello world',
          required: true,
          width: '50%',
        },
        check: {
          title: 'box',
          type: 'boolean',
          default: true,
          width: '50%',
          labelWidth: 6,
        },
        select1: {
          title: '\u5355\u9009',
          type: 'string',
          enum: ['a', 'b', 'c'],
          enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          default: 'a',
        },
      },
    },
  },
};

export default () => <Form labelWidth="200" schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-3"}},"display-demo-4":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(v.a.mark(function T(){var f,l,y,F,R,u;return v.a.wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return f=n("K+nK"),E.t0=f,E.next=4,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 4:return E.t1=E.sent,l=(0,E.t0)(E.t1),E.t2=f,E.next=9,Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(13)]).then(n.bind(null,"bQjt"));case 9:return E.t3=E.sent,y=(0,E.t2)(E.t3),F={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},R=function(){return l.default.createElement(y.default,{schema:F})},u=R,E.abrupt("return",u);case 15:case"end":return E.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      // widget: 'list0',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          },
          obj: {
            title: '\u5BF9\u8C61',
            type: 'object',
            properties: {
              input1: {
                title: '\u7B80\u5355\u8F93\u5165\u6846',
                type: 'string',
                required: true,
              },
              select1: {
                title: '\u5355\u9009',
                type: 'string',
                enum: ['a', 'b', 'c'],
                enumNames: ['\u65E9', '\u4E2D', '\u665A'],
              },
            },
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-4"}},"display-demo-5":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(v.a.mark(function T(){var f,l,y,F,R,u;return v.a.wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return f=n("K+nK"),E.t0=f,E.next=4,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 4:return E.t1=E.sent,l=(0,E.t0)(E.t1),E.t2=f,E.next=9,Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(13)]).then(n.bind(null,"bQjt"));case 9:return E.t3=E.sent,y=(0,E.t2)(E.t3),F={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},R=function(){return l.default.createElement(y.default,{schema:F})},u=R,E.abrupt("return",u);case 15:case"end":return E.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      widget: 'list1',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-5"}},"display-demo-6":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(v.a.mark(function T(){var f,l,y,F,R,u;return v.a.wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return f=n("K+nK"),E.t0=f,E.next=4,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 4:return E.t1=E.sent,l=(0,E.t0)(E.t1),E.t2=f,E.next=9,Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(13)]).then(n.bind(null,"bQjt"));case 9:return E.t3=E.sent,y=(0,E.t2)(E.t3),F={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},R=function(){return l.default.createElement(y.default,{schema:F})},u=R,E.abrupt("return",u);case 15:case"end":return E.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      widget: 'list2',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          input2: {
            title: '\u7B80\u5355\u8F93\u5165\u68462',
            type: 'string',
          },
          input3: {
            title: '\u7B80\u5355\u8F93\u5165\u68463',
            type: 'string',
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
            widget: 'select',
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-6"}},"display-demo-7":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(v.a.mark(function T(){var f,l,y,F,R,u;return v.a.wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return f=n("K+nK"),E.t0=f,E.next=4,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 4:return E.t1=E.sent,l=(0,E.t0)(E.t1),E.t2=f,E.next=9,Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(13)]).then(n.bind(null,"bQjt"));case 9:return E.t3=E.sent,y=(0,E.t2)(E.t3),F={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},R=function(){return l.default.createElement(y.default,{schema:F})},u=R,E.abrupt("return",u);case 15:case"end":return E.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      widget: 'list3',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          },
          listName2: {
            title: '\u5BF9\u8C61\u6570\u7EC4',
            description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
            type: 'array',
            widget: 'list1',
            items: {
              type: 'object',
              properties: {
                input1: {
                  title: '\u7B80\u5355\u8F93\u5165\u6846',
                  type: 'string',
                  required: true,
                },
                select1: {
                  title: '\u5355\u9009',
                  type: 'string',
                  enum: ['a', 'b', 'c'],
                  enumNames: ['\u65E9', '\u4E2D', '\u665A'],
                },
              },
            },
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-7"}},"form-methods-demo":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(v.a.mark(function T(){var f,l,y,F,R,u,i,E,N,B,D,s,j;return v.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return D=function(m,S){if(!S&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var w=B(S);if(w&&w.has(m))return w.get(m);var U={},_=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ue in m)if(ue!=="default"&&Object.prototype.hasOwnProperty.call(m,ue)){var ge=_?Object.getOwnPropertyDescriptor(m,ue):null;ge&&(ge.get||ge.set)?Object.defineProperty(U,ue,ge):U[ue]=m[ue]}return U.default=m,w&&w.set(m,U),U},B=function(m){if(typeof WeakMap!="function")return null;var S=new WeakMap,w=new WeakMap;return(B=function(_){return _?w:S})(m)},f=n("K+nK"),a.next=5,n.e(17).then(n.t.bind(null,"lfLe",7));case 5:return a.t0=f,a.next=8,n.e(18).then(n.t.bind(null,"Cp9S",7));case 8:return a.t1=a.sent,l=(0,a.t0)(a.t1),a.next=12,n.e(3).then(n.t.bind(null,"MaXC",7));case 12:return a.t2=f,a.next=15,n.e(12).then(n.t.bind(null,"4IMT",7));case 15:return a.t3=a.sent,y=(0,a.t2)(a.t3),a.next=19,n.e(14).then(n.t.bind(null,"tL+A",7));case 19:return a.t4=f,a.next=22,Promise.resolve().then(n.t.bind(null,"QpBz",7));case 22:return a.t5=a.sent,F=(0,a.t4)(a.t5),a.t6=f,a.next=27,Promise.resolve().then(n.bind(null,"tJVT"));case 27:return a.t7=a.sent,R=(0,a.t6)(a.t7),a.t8=D,a.next=32,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 32:return a.t9=a.sent,u=(0,a.t8)(a.t9),a.next=36,Promise.all([n.e(0),n.e(1),n.e(2),n.e(10),n.e(11)]).then(n.bind(null,"gdfu"));case 36:return i=a.sent,a.t10=D,a.next=40,Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(8)]).then(n.bind(null,"refC"));case 40:return a.t11=a.sent,E=(0,a.t10)(a.t11),a.next=44,n.e(15).then(n.bind(null,"OH0R"));case 44:return N=a.sent,s=function(){var m=(0,E.useForm)(),S=(0,u.useState)({}),w=(0,R.default)(S,2),U=w[0],_=w[1],ue=function(){(0,N.fakeApi)("xxx/getForm").then(function(We){m.setValues({input1:"hello world",select1:"c"})})};(0,u.useEffect)(function(){(0,N.delay)(1e3).then(function(hn){_({type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}})})},[]);var ge=function(We,Ne){Ne.length>0?F.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(Ne.map(function(Sn){return Sn.name}))):(0,N.fakeApi)("xxx/submit",We).then(function(Sn){return F.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})};return u.default.createElement("div",{style:{width:"400px"}},u.default.createElement(E.default,{form:m,schema:U,onFinish:ge}),u.default.createElement(l.default,null,u.default.createElement(y.default,{onClick:ue},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),u.default.createElement(y.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},j=s,a.abrupt("return",j);case 48:case"end":return a.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
import { Button, Space, message } from 'antd';
import FormRender, { useForm } from 'form-render';
import { fakeApi, delay } from './utils';

const Demo = () => {
  const form = useForm();
  const [schema, setSchema] = useState({});

  const getRemoteData = () => {
    fakeApi('xxx/getForm').then(_ => {
      form.setValues({ input1: 'hello world', select1: 'c' });
    });
  };

  useEffect(() => {
    // \u5F02\u6B65\u52A0\u8F7D\u8868\u5355
    delay(1000).then(_ => {
      setSchema({
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          },
        },
      });
    });
  }, []);

  const onFinish = (data, errors) => {
    if (errors.length > 0) {
      message.error(
        '\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A' + JSON.stringify(errors.map(item => item.name))
      );
    } else {
      fakeApi('xxx/submit', data).then(_ => message.success('\u63D0\u4EA4\u6210\u529F\uFF01'));
    }
  };

  return (
    <div style={{ width: '400px' }}>
      <FormRender form={form} schema={schema} onFinish={onFinish} />
      <Space>
        <Button onClick={getRemoteData}>\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E</Button>
        <Button type="primary" onClick={form.submit}>
          \u63D0\u4EA4\uFF08\u89C1console\uFF09
        </Button>
      </Space>
    </div>
  );
};

export default Demo;`},"utils/index.js":{import:"./utils",content:Xe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo"}},"form-methods-demo-1":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(v.a.mark(function T(){var f,l,y,F,R,u,i,E,N,B,D,s,j;return v.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return B=function(m,S){if(!S&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var w=N(S);if(w&&w.has(m))return w.get(m);var U={},_=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ue in m)if(ue!=="default"&&Object.prototype.hasOwnProperty.call(m,ue)){var ge=_?Object.getOwnPropertyDescriptor(m,ue):null;ge&&(ge.get||ge.set)?Object.defineProperty(U,ue,ge):U[ue]=m[ue]}return U.default=m,w&&w.set(m,U),U},N=function(m){if(typeof WeakMap!="function")return null;var S=new WeakMap,w=new WeakMap;return(N=function(_){return _?w:S})(m)},f=n("K+nK"),a.next=5,n.e(3).then(n.t.bind(null,"MaXC",7));case 5:return a.t0=f,a.next=8,n.e(12).then(n.t.bind(null,"4IMT",7));case 8:return a.t1=a.sent,l=(0,a.t0)(a.t1),a.t2=f,a.next=13,Promise.resolve().then(n.bind(null,"PpiC"));case 13:return a.t3=a.sent,y=(0,a.t2)(a.t3),a.next=17,n.e(14).then(n.t.bind(null,"tL+A",7));case 17:return a.t4=f,a.next=20,Promise.resolve().then(n.t.bind(null,"QpBz",7));case 20:return a.t5=a.sent,F=(0,a.t4)(a.t5),a.t6=f,a.next=25,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 25:return a.t7=a.sent,R=(0,a.t6)(a.t7),a.next=29,Promise.all([n.e(0),n.e(1),n.e(2),n.e(10),n.e(11)]).then(n.bind(null,"gdfu"));case 29:return u=a.sent,a.t8=B,a.next=33,Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(8)]).then(n.bind(null,"refC"));case 33:return a.t9=a.sent,i=(0,a.t8)(a.t9),a.next=37,n.e(15).then(n.bind(null,"OH0R"));case 37:return E=a.sent,D={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},s=function(){var m=(0,i.useForm)(),S=function(_,ue){ue.length>0?F.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(ue.map(function(ge){return ge.name}))):(0,E.fakeApi)("xxx/submit",_).then(function(ge){return F.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},w=function(_){var ue=_.data,ge=_.errors,hn=_.schema,We=(0,y.default)(_,["data","errors","schema"]);return(0,E.fakeApi)("xxx/validation").then(function(Ne){return{name:"select1",error:["\u5916\u90E8\u6821\u9A8C\u9519\u8BEF"]}})};return R.default.createElement("div",{style:{width:"400px"}},R.default.createElement(i.default,{form:m,schema:D,beforeFinish:w,onFinish:S}),R.default.createElement(l.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},j=s,a.abrupt("return",j);case 42:case"end":return a.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Button, message } from 'antd';
import FormRender, { useForm } from 'form-render';
import { fakeApi } from './utils';

const schema = {
  type: 'object',
  properties: {
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
    },
    select1: {
      title: '\u5355\u9009',
      type: 'string',
      enum: ['a', 'b', 'c'],
      enumNames: ['\u65E9', '\u4E2D', '\u665A'],
    },
  },
};

const Demo = () => {
  const form = useForm();

  const onFinish = (data, errors) => {
    if (errors.length > 0) {
      message.error(
        '\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A' + JSON.stringify(errors.map(item => item.name))
      );
    } else {
      fakeApi('xxx/submit', data).then(_ => message.success('\u63D0\u4EA4\u6210\u529F\uFF01'));
    }
  };

  // \u670D\u52A1\u7AEF\u6821\u9A8C\u5728\u8FD9\u91CC\u505A
  const beforeFinish = ({ data, errors, schema, ...rest }) => {
    return fakeApi('xxx/validation').then(_ => {
      return { name: 'select1', error: ['\u5916\u90E8\u6821\u9A8C\u9519\u8BEF'] };
    });
  };

  return (
    <div style={{ width: '400px' }}>
      <FormRender
        form={form}
        schema={schema}
        beforeFinish={beforeFinish}
        onFinish={onFinish}
      />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4\uFF08\u89C1console\uFF09
      </Button>
    </div>
  );
};

export default Demo;`},"utils/index.js":{import:"./utils",content:Xe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-1"}},"form-methods-demo-2":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(v.a.mark(function T(){var f,l,y,F,R,u,i,E,N,B,D,s,j;return v.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return B=function(m,S){if(!S&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var w=N(S);if(w&&w.has(m))return w.get(m);var U={},_=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ue in m)if(ue!=="default"&&Object.prototype.hasOwnProperty.call(m,ue)){var ge=_?Object.getOwnPropertyDescriptor(m,ue):null;ge&&(ge.get||ge.set)?Object.defineProperty(U,ue,ge):U[ue]=m[ue]}return U.default=m,w&&w.set(m,U),U},N=function(m){if(typeof WeakMap!="function")return null;var S=new WeakMap,w=new WeakMap;return(N=function(_){return _?w:S})(m)},f=n("K+nK"),a.next=5,n.e(17).then(n.t.bind(null,"lfLe",7));case 5:return a.t0=f,a.next=8,n.e(18).then(n.t.bind(null,"Cp9S",7));case 8:return a.t1=a.sent,l=(0,a.t0)(a.t1),a.next=12,n.e(3).then(n.t.bind(null,"MaXC",7));case 12:return a.t2=f,a.next=15,n.e(12).then(n.t.bind(null,"4IMT",7));case 15:return a.t3=a.sent,y=(0,a.t2)(a.t3),a.next=19,n.e(14).then(n.t.bind(null,"tL+A",7));case 19:return a.t4=f,a.next=22,Promise.resolve().then(n.t.bind(null,"QpBz",7));case 22:return a.t5=a.sent,F=(0,a.t4)(a.t5),a.t6=f,a.next=27,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 27:return a.t7=a.sent,R=(0,a.t6)(a.t7),a.next=31,Promise.all([n.e(0),n.e(1),n.e(2),n.e(10),n.e(11)]).then(n.bind(null,"gdfu"));case 31:return u=a.sent,a.t8=B,a.next=35,Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(8)]).then(n.bind(null,"refC"));case 35:return a.t9=a.sent,i=(0,a.t8)(a.t9),a.next=39,n.e(15).then(n.bind(null,"OH0R"));case 39:return E=a.sent,D={type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F\u8303\u56F4",type:"range",format:"date"}}},s=function(){var m=(0,i.useForm)(),S=function(_,ue){ue.length>0?F.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(ue.map(function(ge){return ge.name}))):(0,E.fakeApi)("xxx/submit",_).then(function(ge){return F.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},w=function(){(0,E.fakeApi)("xxx/getForm").then(function(_){m.setValues({startDate:"2020-04-04",endDate:"2020-04-24"})})};return R.default.createElement("div",{style:{width:"400px"}},R.default.createElement(i.default,{form:m,schema:D,onFinish:S}),R.default.createElement(l.default,null,R.default.createElement(y.default,{onClick:w},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),R.default.createElement(y.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},j=s,a.abrupt("return",j);case 44:case"end":return a.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Button, message, Space } from 'antd';
import FormRender, { useForm } from 'form-render';
import { fakeApi } from './utils';

const schema = {
  type: 'object',
  properties: {
    dateRange: {
      bind: ['startDate', 'endDate'],
      title: '\u65E5\u671F\u8303\u56F4',
      type: 'range',
      format: 'date',
    },
  },
};

const Demo = () => {
  const form = useForm();

  const onFinish = (data, errors) => {
    if (errors.length > 0) {
      message.error(
        '\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A' + JSON.stringify(errors.map(item => item.name))
      );
    } else {
      fakeApi('xxx/submit', data).then(_ => message.success('\u63D0\u4EA4\u6210\u529F\uFF01'));
    }
  };

  const getRemoteData = () => {
    fakeApi('xxx/getForm').then(_ => {
      form.setValues({ startDate: '2020-04-04', endDate: '2020-04-24' });
    });
  };

  return (
    <div style={{ width: '400px' }}>
      <FormRender form={form} schema={schema} onFinish={onFinish} />
      <Space>
        <Button onClick={getRemoteData}>\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E</Button>
        <Button type="primary" onClick={form.submit}>
          \u63D0\u4EA4\uFF08\u89C1console\uFF09
        </Button>
      </Space>
    </div>
  );
};

export default Demo;`},"utils/index.js":{import:"./utils",content:Xe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-2"}},"form-methods-demo-3":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(v.a.mark(function T(){var f,l,y,F,R,u,i,E,N,B,D,s;return v.a.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return N=function(p,m){if(!m&&p&&p.__esModule)return p;if(p===null||typeof p!="object"&&typeof p!="function")return{default:p};var S=E(m);if(S&&S.has(p))return S.get(p);var w={},U=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var _ in p)if(_!=="default"&&Object.prototype.hasOwnProperty.call(p,_)){var ue=U?Object.getOwnPropertyDescriptor(p,_):null;ue&&(ue.get||ue.set)?Object.defineProperty(w,_,ue):w[_]=p[_]}return w.default=p,S&&S.set(p,w),w},E=function(p){if(typeof WeakMap!="function")return null;var m=new WeakMap,S=new WeakMap;return(E=function(U){return U?S:m})(p)},f=n("K+nK"),d.next=5,n.e(3).then(n.t.bind(null,"MaXC",7));case 5:return d.t0=f,d.next=8,n.e(12).then(n.t.bind(null,"4IMT",7));case 8:return d.t1=d.sent,l=(0,d.t0)(d.t1),d.next=12,n.e(14).then(n.t.bind(null,"tL+A",7));case 12:return d.t2=f,d.next=15,Promise.resolve().then(n.t.bind(null,"QpBz",7));case 15:return d.t3=d.sent,y=(0,d.t2)(d.t3),d.t4=N,d.next=20,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 20:return d.t5=d.sent,F=(0,d.t4)(d.t5),d.next=24,Promise.all([n.e(0),n.e(1),n.e(2),n.e(10),n.e(11)]).then(n.bind(null,"gdfu"));case 24:return R=d.sent,d.t6=N,d.next=28,Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(8)]).then(n.bind(null,"refC"));case 28:return d.t7=d.sent,u=(0,d.t6)(d.t7),d.next=32,n.e(15).then(n.bind(null,"OH0R"));case 32:return i=d.sent,B={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select1:{title:"\u5355\u9009",type:"string",widget:"select"}}}}},D=function(){var p=(0,u.useForm)(),m=function(){p.setSchemaByPath("obj1.select1",{enum:["nouth","south","east","west"],enumNames:["\u4E1C","\u5357","\u897F","\u5317"]})},S=function(U,_){_.length>0?y.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(_.map(function(ue){return ue.name}))):y.default.info(JSON.stringify(U))};return F.default.createElement("div",{style:{width:"400px"}},F.default.createElement(u.default,{form:p,schema:B,onMount:m,onFinish:S}),F.default.createElement(l.default,{type:"primary",onClick:p.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},s=D,d.abrupt("return",s);case 37:case"end":return d.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
import { Button, message } from 'antd';
import FormRender, { useForm } from 'form-render';
import { fakeApi } from './utils';

const schema = {
  type: 'object',
  properties: {
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
    },
    obj1: {
      title: '\u5BF9\u8C61',
      description: '\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B',
      type: 'object',
      properties: {
        select1: {
          title: '\u5355\u9009',
          type: 'string',
          widget: 'select',
        },
      },
    },
  },
};

const Demo = () => {
  const form = useForm();

  const onMount = () => {
    form.setSchemaByPath('obj1.select1', {
      enum: ['nouth', 'south', 'east', 'west'],
      enumNames: ['\u4E1C', '\u5357', '\u897F', '\u5317'],
    });
  };

  const onFinish = (data, errors) => {
    if (errors.length > 0) {
      message.error(
        '\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A' + JSON.stringify(errors.map(item => item.name))
      );
    } else {
      message.info(JSON.stringify(data));
    }
  };

  return (
    <div style={{ width: '400px' }}>
      <FormRender
        form={form}
        schema={schema}
        onMount={onMount}
        onFinish={onFinish}
      />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4\uFF08\u89C1console\uFF09
      </Button>
    </div>
  );
};

export default Demo;`},"utils/index.js":{import:"./utils",content:Xe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-3"}},"function-demo":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(v.a.mark(function T(){var f,l,y,F,R,u,i,E;return v.a.wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return R=function(s,j){if(!j&&s&&s.__esModule)return s;if(s===null||typeof s!="object"&&typeof s!="function")return{default:s};var d=F(j);if(d&&d.has(s))return d.get(s);var a={},p=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var m in s)if(m!=="default"&&Object.prototype.hasOwnProperty.call(s,m)){var S=p?Object.getOwnPropertyDescriptor(s,m):null;S&&(S.get||S.set)?Object.defineProperty(a,m,S):a[m]=s[m]}return a.default=s,d&&d.set(s,a),a},F=function(s){if(typeof WeakMap!="function")return null;var j=new WeakMap,d=new WeakMap;return(F=function(p){return p?d:j})(s)},f=n("K+nK"),B.t0=f,B.next=6,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 6:return B.t1=B.sent,l=(0,B.t0)(B.t1),B.t2=R,B.next=11,Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(8)]).then(n.bind(null,"refC"));case 11:return B.t3=B.sent,y=(0,B.t2)(B.t3),u={type:"object",properties:{select1:{title:"\u5355\u9009",description:"\u5C1D\u8BD5\u9009\u62E9\u201C\u663E\u793A\u8F93\u5165\u6846\u201D",type:"string",enum:["a","b"],enumNames:["\u9690\u85CF\u8F93\u5165\u6846","\u663E\u793A\u8F93\u5165\u6846"],disabled:"{{rootValue.input1.length > 5}}",default:"a"},input1:{title:"\u8F93\u5165\u6846",description:"\u5C1D\u8BD5\u8F93\u5165\u8D85\u8FC75\u4E2A\u5B57\u7B26",type:"string",hidden:'{{formData.select1 == "a"}}'}}},i=function(){var s=(0,y.useForm)();return l.default.createElement(y.default,{form:s,schema:u})},E=i,B.abrupt("return",E);case 17:case"end":return B.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',
  properties: {
    select1: {
      title: '\u5355\u9009',
      description: '\u5C1D\u8BD5\u9009\u62E9\u201C\u663E\u793A\u8F93\u5165\u6846\u201D',
      type: 'string',
      enum: ['a', 'b'],
      enumNames: ['\u9690\u85CF\u8F93\u5165\u6846', '\u663E\u793A\u8F93\u5165\u6846'],
      disabled: '{{rootValue.input1.length > 5}}',
      default: 'a',
    },
    input1: {
      title: '\u8F93\u5165\u6846',
      description: '\u5C1D\u8BD5\u8F93\u5165\u8D85\u8FC75\u4E2A\u5B57\u7B26',
      type: 'string',
      hidden: '{{formData.select1 == "a"}}',
    },
  },
};

const Demo1 = () => {
  const form = useForm();
  return <FormRender form={form} schema={schema} />;
};

export default Demo1;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo"}},"function-demo-1":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(v.a.mark(function T(){var f,l,y,F,R;return v.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=n("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,l=(0,i.t0)(i.t1),i.t2=f,i.next=9,Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(16)]).then(n.bind(null,"c2mQ"));case 9:return i.t3=i.sent,y=(0,i.t2)(i.t3),i.next=13,n.e(19).then(n.bind(null,"8iYR"));case 13:return F=i.sent,R=function(){return l.default.createElement(y.default,{schema:F.expression})},i.abrupt("return",R);case 16:case"end":return i.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { expression } from '../json/schema';

export default () => <FR schema={expression} />;`},"demo/FR.jsx":{import:"../demo/FR",content:De},"json/schema.js":{import:"../json/schema",content:ve}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo-1"}},"lifeCycle-demo":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(v.a.mark(function T(){var f,l,y,F,R,u,i,E,N;return v.a.wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return R=function(j,d){if(!d&&j&&j.__esModule)return j;if(j===null||typeof j!="object"&&typeof j!="function")return{default:j};var a=F(d);if(a&&a.has(j))return a.get(j);var p={},m=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var S in j)if(S!=="default"&&Object.prototype.hasOwnProperty.call(j,S)){var w=m?Object.getOwnPropertyDescriptor(j,S):null;w&&(w.get||w.set)?Object.defineProperty(p,S,w):p[S]=j[S]}return p.default=j,a&&a.set(j,p),p},F=function(j){if(typeof WeakMap!="function")return null;var d=new WeakMap,a=new WeakMap;return(F=function(m){return m?a:d})(j)},D.t0=R,D.next=5,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 5:return D.t1=D.sent,f=(0,D.t0)(D.t1),D.next=9,Promise.all([n.e(0),n.e(1),n.e(2),n.e(10),n.e(11)]).then(n.bind(null,"gdfu"));case 9:return l=D.sent,D.t2=R,D.next=13,Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(8)]).then(n.bind(null,"refC"));case 13:return D.t3=D.sent,y=(0,D.t2)(D.t3),u=function(j){return new Promise(function(d){return setTimeout(d,j)})},i={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u4E0B\u62C9\u9009\u6846",description:"\u52A0\u8F7D\u4E2D...",type:"string",enum:[],widget:"select"}}},E=function(){var j=(0,y.useForm)(),d=function(){j.setValues({input1:"hello world"}),u(3e3).then(function(p){j.setSchemaByPath("select1",{description:"",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]})})};return f.default.createElement(y.default,{form:j,schema:i,onMount:d})},N=E,D.abrupt("return",N);case 20:case"end":return D.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
import { Button } from 'antd';
import FormRender, { useForm } from 'form-render';

const delay = ms => new Promise(res => setTimeout(res, ms));

const schema = {
  type: 'object',
  properties: {
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
    },
    select1: {
      title: '\u4E0B\u62C9\u9009\u6846',
      description: '\u52A0\u8F7D\u4E2D...',
      type: 'string',
      enum: [],
      widget: 'select',
    },
  },
};

const Demo = () => {
  const form = useForm();

  const onMount = () => {
    form.setValues({ input1: 'hello world' });

    delay(3000).then(_ => {
      form.setSchemaByPath('select1', {
        description: '',
        enum: ['a', 'b', 'c'],
        enumNames: ['\u65E9', '\u4E2D', '\u665A'],
      });
    });
  };

  return <FormRender form={form} schema={schema} onMount={onMount} />;
};

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"lifeCycle-demo"}},"watch-demo":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(v.a.mark(function T(){var f,l,y,F,R,u,i,E;return v.a.wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return R=function(s,j){if(!j&&s&&s.__esModule)return s;if(s===null||typeof s!="object"&&typeof s!="function")return{default:s};var d=F(j);if(d&&d.has(s))return d.get(s);var a={},p=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var m in s)if(m!=="default"&&Object.prototype.hasOwnProperty.call(s,m)){var S=p?Object.getOwnPropertyDescriptor(s,m):null;S&&(S.get||S.set)?Object.defineProperty(a,m,S):a[m]=s[m]}return a.default=s,d&&d.set(s,a),a},F=function(s){if(typeof WeakMap!="function")return null;var j=new WeakMap,d=new WeakMap;return(F=function(p){return p?d:j})(s)},B.t0=R,B.next=5,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 5:return B.t1=B.sent,f=(0,B.t0)(B.t1),B.next=9,Promise.all([n.e(0),n.e(1),n.e(2),n.e(10),n.e(11)]).then(n.bind(null,"gdfu"));case 9:return l=B.sent,B.t2=R,B.next=13,Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(8)]).then(n.bind(null,"refC"));case 13:return B.t3=B.sent,y=(0,B.t2)(B.t3),u={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"}}},i=function(){var s=(0,y.useForm)(),j={"#":function(a){console.log("\u8868\u5355\u7684\u65F6\u65F6\u6570\u636E\u4E3A\uFF1A",a)},input1:function(a){s.setValueByPath("input2",a)}};return f.default.createElement(y.default,{form:s,schema:u,watch:j})},E=i,B.abrupt("return",E);case 19:case"end":return B.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
import { Button } from 'antd';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',
  properties: {
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
      placeholder: '\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165',
    },
    input2: {
      title: '\u7B80\u5355\u8F93\u5165\u68462',
      type: 'string',
    },
  },
};

const Demo = () => {
  const form = useForm();

  const watch = {
    // # \u4E3A\u5168\u5C40
    '#': val => {
      console.log('\u8868\u5355\u7684\u65F6\u65F6\u6570\u636E\u4E3A\uFF1A', val);
    },
    input1: val => {
      form.setValueByPath('input2', val);
    },
  };

  return <FormRender form={form} schema={schema} watch={watch} />;
};

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo"}},"watch-demo-1":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(v.a.mark(function T(){var f,l,y,F,R,u,i,E,N,B;return v.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return i=function(d,a){if(!a&&d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var p=u(a);if(p&&p.has(d))return p.get(d);var m={},S=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var w in d)if(w!=="default"&&Object.prototype.hasOwnProperty.call(d,w)){var U=S?Object.getOwnPropertyDescriptor(d,w):null;U&&(U.get||U.set)?Object.defineProperty(m,w,U):m[w]=d[w]}return m.default=d,p&&p.set(d,m),m},u=function(d){if(typeof WeakMap!="function")return null;var a=new WeakMap,p=new WeakMap;return(u=function(S){return S?p:a})(d)},f=n("K+nK"),s.next=5,n.e(3).then(n.t.bind(null,"MaXC",7));case 5:return s.t0=f,s.next=8,n.e(12).then(n.t.bind(null,"4IMT",7));case 8:return s.t1=s.sent,l=(0,s.t0)(s.t1),s.t2=i,s.next=13,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 13:return s.t3=s.sent,y=(0,s.t2)(s.t3),s.next=17,Promise.all([n.e(0),n.e(1),n.e(2),n.e(10),n.e(11)]).then(n.bind(null,"gdfu"));case 17:return F=s.sent,s.t4=i,s.next=21,Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(8)]).then(n.bind(null,"refC"));case 21:return s.t5=s.sent,R=(0,s.t4)(s.t5),E={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"radio"}}}}},N=function(){var d=(0,R.useForm)(),a=function(S,w){w.length>0?alert("errorFields:"+JSON.stringify(w)):alert("formData:"+JSON.stringify(S,null,2))},p={input1:function(S){S.length>2?d.setSchemaByPath("obj1.select",function(w){var U=w.enumNames;return{enumNames:U.map(function(_){return _+"a"})}}):d.setSchemaByPath("obj1.select",{enumNames:["\u65E9","\u4E2D","\u665A"]})}};return y.default.createElement("div",null,y.default.createElement(R.default,{form:d,schema:E,onFinish:a,watch:p}),y.default.createElement(l.default,{type:"",style:{marginRight:8},onClick:function(){return d.setSchemaByPath("input2",{title:"\u7F16\u8F91\u6846",format:"textarea"})}},"\u5C06 input \u6539\u4E3A textarea"),y.default.createElement(l.default,{type:"primary",onClick:d.submit},"\u63D0\u4EA4"))},B=N,s.abrupt("return",B);case 27:case"end":return s.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
import { Button } from 'antd';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',
  properties: {
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
      placeholder: '\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165',
    },
    input2: {
      title: '\u7B80\u5355\u8F93\u5165\u68462',
      type: 'string',
    },
    obj1: {
      title: '\u5BF9\u8C61',
      description: '\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B',
      type: 'object',
      properties: {
        select: {
          title: '\u5355\u9009',
          type: 'string',
          enum: ['a', 'b', 'c'],
          enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          widget: 'radio',
        },
      },
    },
  },
};

const Demo = () => {
  const form = useForm();
  const onFinish = (formData, errorFields) => {
    if (errorFields.length > 0) {
      alert('errorFields:' + JSON.stringify(errorFields));
    } else {
      alert('formData:' + JSON.stringify(formData, null, 2));
    }
  };

  const watch = {
    input1: val => {
      if (val.length > 2) {
        form.setSchemaByPath('obj1.select', ({ enumNames }) => {
          return {
            enumNames: enumNames.map(item => item + 'a'),
          };
        });
      } else {
        form.setSchemaByPath('obj1.select', { enumNames: ['\u65E9', '\u4E2D', '\u665A'] });
      }
    },
  };

  return (
    <div>
      <FormRender
        form={form}
        schema={schema}
        onFinish={onFinish}
        watch={watch}
      />
      <Button
        type=""
        style={{ marginRight: 8 }}
        onClick={() =>
          form.setSchemaByPath('input2', {
            title: '\u7F16\u8F91\u6846',
            format: 'textarea',
          })
        }
      >
        \u5C06 input \u6539\u4E3A textarea
      </Button>
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4
      </Button>
    </div>
  );
};

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo-1"}},"widget-demo":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(v.a.mark(function T(){var f,l,y,F,R,u,i,E,N,B,D,s,j;return v.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return N=function(m,S){if(!S&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var w=E(S);if(w&&w.has(m))return w.get(m);var U={},_=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ue in m)if(ue!=="default"&&Object.prototype.hasOwnProperty.call(m,ue)){var ge=_?Object.getOwnPropertyDescriptor(m,ue):null;ge&&(ge.get||ge.set)?Object.defineProperty(U,ue,ge):U[ue]=m[ue]}return U.default=m,w&&w.set(m,U),U},E=function(m){if(typeof WeakMap!="function")return null;var S=new WeakMap,w=new WeakMap;return(E=function(_){return _?w:S})(m)},f=n("K+nK"),a.next=5,n.e(3).then(n.t.bind(null,"MaXC",7));case 5:return a.t0=f,a.next=8,n.e(12).then(n.t.bind(null,"4IMT",7));case 8:return a.t1=a.sent,l=(0,a.t0)(a.t1),a.next=12,Promise.all([n.e(3),n.e(60)]).then(n.t.bind(null,"cUip",7));case 12:return a.t2=f,a.next=15,Promise.all([n.e(0),n.e(12),n.e(58),n.e(61)]).then(n.t.bind(null,"iJl9",7));case 15:return a.t3=a.sent,y=(0,a.t2)(a.t3),a.t4=f,a.next=20,n.e(64).then(n.bind(null,"0Owb"));case 20:return a.t5=a.sent,F=(0,a.t4)(a.t5),a.t6=N,a.next=25,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 25:return a.t7=a.sent,R=(0,a.t6)(a.t7),a.next=29,Promise.all([n.e(0),n.e(1),n.e(2),n.e(10),n.e(11)]).then(n.bind(null,"gdfu"));case 29:return u=a.sent,a.t8=N,a.next=33,Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(8)]).then(n.bind(null,"refC"));case 33:return a.t9=a.sent,i=(0,a.t8)(a.t9),B={type:"object",properties:{string:{title:"\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6",type:"string",widget:"site"},select:{title:"\u5355\u9009",type:"number",enum:[1,2,3],enumNames:["\u9009\u98791","\u9009\u98792","\u9009\u98793"]}}},D=function(m){return R.default.createElement(y.default,(0,F.default)({addonBefore:"http://",addonAfter:".com"},m))},s=function(){var m=(0,i.useForm)(),S=function(){};return R.default.createElement("div",null,R.default.createElement(i.default,{form:m,schema:B,widgets:{site:D},onFinish:function(U){return alert(JSON.stringify(U,null,2))}}),R.default.createElement(l.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4"))},j=s,a.abrupt("return",j);case 40:case"end":return a.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
import { Input, Button } from 'antd';
import Form, { useForm } from 'form-render';

const schema = {
  type: 'object',
  properties: {
    string: {
      title: '\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6',
      type: 'string',
      widget: 'site',
    },
    select: {
      title: '\u5355\u9009',
      type: 'number',
      enum: [1, 2, 3],
      enumNames: ['\u9009\u98791', '\u9009\u98792', '\u9009\u98793'],
    },
  },
};

const SiteInput = props => {
  return <Input addonBefore="http://" addonAfter=".com" {...props} />;
};

const Demo = () => {
  const form = useForm();
  const handleSubmit = () => {};
  return (
    <div>
      <Form
        form={form}
        schema={schema}
        widgets={{ site: SiteInput }}
        onFinish={formData => alert(JSON.stringify(formData, null, 2))}
      />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4
      </Button>
    </div>
  );
};

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},identifier:"widget-demo"}},"schema-demo":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(v.a.mark(function T(){var f,l,y,F,R;return v.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=n("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,l=(0,i.t0)(i.t1),i.t2=f,i.next=9,Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(16)]).then(n.bind(null,"c2mQ"));case 9:return i.t3=i.sent,y=(0,i.t2)(i.t3),i.next=13,n.e(19).then(n.bind(null,"8iYR"));case 13:return F=i.sent,R=function(){return l.default.createElement(y.default,{schema:F.basic})},i.abrupt("return",R);case 16:case"end":return i.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { basic } from '../json/schema';

export default () => <FR schema={basic} />;`},"demo/FR.jsx":{import:"../demo/FR",content:De},"json/schema.js":{import:"../json/schema",content:ve}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo"}},"docs-playground":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(v.a.mark(function T(){return v.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(20)]).then(n.bind(null,"BASV"));case 2:return l.abrupt("return",l.sent.default);case 3:case"end":return l.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:zn},"main.js":{import:"./main",content:Pe},"json/simplest.json":{import:"./json/simplest.json",content:on},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:Tn},"monaco/index.js":{import:"./monaco",content:Rn},"theme.css":{import:"./theme.css",content:vn},"index.css":{import:"./index.css",content:Ye}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:"^16.0.0"},"react-dom":{version:"^16.0.0"},"deep-equal":{version:"2.0.5"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.3.2"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-simple-code-editor":{version:"0.11.0"},prismjs:{version:"1.23.0"}},identifier:"docs-playground"}},"table-render-advanced":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(v.a.mark(function T(){return v.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(20)]).then(n.bind(null,"7ZP+"));case 2:return l.abrupt("return",l.sent.default);case 3:case"end":return l.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{tsx:Ln}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.0"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"1.x"}},transform:!0,defaultShowCode:!0,identifier:"table-render-advanced"}},"table-render-demo":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(v.a.mark(function T(){var f,l,y,F,R,u,i,E,N;return v.a.wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return f=n("K+nK"),D.t0=f,D.next=4,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 4:return D.t1=D.sent,l=(0,D.t0)(D.t1),D.next=8,Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(57)]).then(n.bind(null,"P2DI"));case 8:for(y=D.sent,F=[],R=0;R<6;R++)F.push({id:R.toString(),title:"\u6807\u9898".concat(R+1),created_at:new Date().getTime()});return u={type:"object",properties:{string:{title:"\u6807\u9898",type:"string","ui:width":"30%"},created_at:{title:"\u521B\u5EFA\u65F6\u95F4",type:"string",format:"date","ui:width":"30%"}}},i=[{title:"\u6807\u9898",dataIndex:"title"},{title:"\u521B\u5EFA\u65F6\u95F4",key:"since",dataIndex:"created_at",valueType:"date"},{title:"\u64CD\u4F5C",render:function(j,d){return l.default.createElement("a",{onClick:function(){return alert(j.title)}},"\u7F16\u8F91")}}],E=function(){var j=function(){return{rows:F,total:F.length}};return l.default.createElement(y.TableProvider,null,l.default.createElement(y.Search,{schema:u,api:j}),l.default.createElement(y.Table,{headerTitle:"\u6700\u7B80\u8868\u683C",columns:i,rowKey:"id"}))},N=E,D.abrupt("return",N);case 16:case"end":return D.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Table, Search, TableProvider } from 'table-render';

const dataSource = [];
for (let i = 0; i < 6; i++) {
  dataSource.push({
    id: i.toString(),
    title: \`\u6807\u9898\${i + 1}\`,
    created_at: new Date().getTime(),
  });
}

// \u8BE6\u7EC6\u53EF\u89C1 form-render \u7684\u4F7F\u7528
const schema = {
  type: 'object',
  properties: {
    string: {
      title: '\u6807\u9898',
      type: 'string',
      'ui:width': '30%',
    },
    created_at: {
      title: '\u521B\u5EFA\u65F6\u95F4',
      type: 'string',
      format: 'date',
      'ui:width': '30%',
    },
  },
};

// \u914D\u7F6E\u5B8C\u5168\u900F\u4F20 antd table
const columns = [
  {
    title: '\u6807\u9898',
    dataIndex: 'title',
  },
  {
    title: '\u521B\u5EFA\u65F6\u95F4',
    key: 'since',
    dataIndex: 'created_at',
    valueType: 'date',
  },
  {
    title: '\u64CD\u4F5C',
    render: (row, record) => <a onClick={() => alert(row.title)}>\u7F16\u8F91</a>,
  },
];

const Wrapper = () => {
  const searchApi = () => {
    return {
      rows: dataSource,
      total: dataSource.length,
    };
  };
  return (
    <TableProvider>
      <Search schema={schema} api={searchApi} />
      <Table headerTitle="\u6700\u7B80\u8868\u683C" columns={columns} rowKey="id" />
    </TableProvider>
  );
};

export default Wrapper;`}},dependencies:{react:{version:">=16.8.0"},"table-render":{version:"1.1.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.x"}},transform:!0,defaultShowCode:!0,identifier:"table-render-demo"}},"generator-demo":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(v.a.mark(function T(){var f,l,y,F,R,u;return v.a.wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return f=n("K+nK"),E.t0=f,E.next=4,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 4:return E.t1=E.sent,l=(0,E.t0)(E.t1),E.t2=f,E.next=9,Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(56)]).then(n.bind(null,"nYSz"));case 9:return E.t3=E.sent,y=(0,E.t2)(E.t3),F={type:"object",properties:{inputName:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string"}}},R=function(){return l.default.createElement("div",{style:{height:"80vh"}},l.default.createElement(y.default,{defaultValue:F}))},u=R,E.abrupt("return",u);case 15:case"end":return E.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Generator from 'fr-generator';

const defaultValue = {
  type: 'object',
  properties: {
    inputName: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
    },
  },
};

const Demo = () => {
  return (
    <div style={{ height: '80vh' }}>
      <Generator defaultValue={defaultValue} />
    </div>
  );
};

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.0.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"generator-demo"}},"generator-modal":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(v.a.mark(function T(){return v.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(20)]).then(n.bind(null,"PPgD"));case 2:return l.abrupt("return",l.sent.default);case 3:case"end":return l.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:wn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.0.2"},"react-dom":{version:">=16.9.0"}},identifier:"generator-modal"}},"generator-transformer":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(v.a.mark(function T(){return v.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(20)]).then(n.bind(null,"jktF"));case 2:return l.abrupt("return",l.sent.default);case 3:case"end":return l.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:Dn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.0.2"},"react-dom":{version:">=16.9.0"}},identifier:"generator-transformer"}},"generator-settings":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(v.a.mark(function T(){return v.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(20)]).then(n.bind(null,"M63W"));case 2:return l.abrupt("return",l.sent.default);case 3:case"end":return l.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:we}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.0.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-settings"}},"generator-playground":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(v.a.mark(function T(){return v.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(20)]).then(n.bind(null,"TYW4"));case 2:return l.abrupt("return",l.sent.default);case 3:case"end":return l.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:qn},"index.less":{import:"./index.less",content:$n}},dependencies:{react:{version:">=16.8.0"},umi:{version:"3.4.20"},"fr-generator":{version:"2.0.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-playground"}}}},TIsu:function(En,ln,n){},"TN5+":function(En,ln,n){"use strict";var x=n("0Owb"),e=n("q1tI"),v=n.n(e),V=n("kERV"),de=n.n(V);ln.a=L=>v.a.createElement("div",Object(x.default)({className:"__dumi-default-alert"},L))},Zs1V:function(En){En.exports=JSON.parse("{}")},kERV:function(En,ln,n){},p8sG:function(En,ln,n){"use strict";En.exports=n("80pN")},"unS/":function(En,ln,n){"use strict";n.r(ln);var x=n("q1tI"),e=n.n(x),v=n("dEAq"),V=n.n(v),de=n("TN5+"),L=n("0zqC"),Xe=n("ZpkN"),De=n("JjdP"),ve=e.a.memo(De.default["form-render-demo"].component),zn=e.a.memo(De.default["form-render-demo-1"].component),Pe=e.a.memo(De.default["form-render-demo-2"].component);ln.default=on=>(e.a.useEffect(()=>{on!=null&&on.location.hash&&v.AnchorLink.scrollToAnchor(decodeURIComponent(on.location.hash.slice(1)))},[]),e.a.createElement(e.a.Fragment,null,e.a.createElement(e.a.Fragment,null,e.a.createElement("div",{className:"markdown"},e.a.createElement("div",{style:{display:"flex",alignItems:"center",marginBottom:"24px"}},e.a.createElement("img",{src:"https://img.alicdn.com/tfs/TB17UtINiLaK1RjSZFxXXamPFXa-606-643.png",alt:"logo",width:"48px"}),e.a.createElement("span",{style:{fontSize:"30px",fontWeight:"600",display:"inline-block",marginLeft:"12px"}},"FormRender")),e.a.createElement("p",{style:{display:"flex",justifyContent:"space-between",width:"440px"}},e.a.createElement(v.Link,{to:"https://www.npmjs.com/package/form-render?_blank"},e.a.createElement("img",{alt:"npm",src:"https://img.shields.io/npm/v/form-render.svg?maxAge=3600&style=flat-square"})),e.a.createElement(v.Link,{to:"https://npmjs.org/package/form-render"},e.a.createElement("img",{alt:"NPM downloads",src:"https://img.shields.io/npm/dm/form-render.svg?style=flat-square"})),e.a.createElement(v.Link,{to:"https://npmjs.org/package/form-render"},e.a.createElement("img",{alt:"NPM all downloads",src:"https://img.shields.io/npm/dt/form-render.svg?style=flat-square"})),e.a.createElement("a",null,e.a.createElement("img",{alt:"PRs Welcome",src:"https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square"}))),e.a.createElement("blockquote",null,e.a.createElement("p",null,"\u4E00\u7AD9\u5F0F\u4E2D\u540E\u53F0",e.a.createElement("strong",null,"\u8868\u5355\u89E3\u51B3\u65B9\u6848"))),e.a.createElement("p",null,"FormRender 1.0 \u662F\u4E0B\u4E00\u4EE3\u7684 ",e.a.createElement("code",null,"React.js")," \u8868\u5355\u89E3\u51B3\u65B9\u6848\u3002\u9879\u76EE\u4ECE\u5185\u6838\u7EA7\u522B\u8FDB\u884C\u4E86\u91CD\u5199\uFF0C\u4E3A\u4E86\u80FD\u5207\u5B9E\u627F\u63A5\u65E5\u76CA\u590D\u6742\u7684\u8868\u5355\u573A\u666F\u9700\u6C42\u3002\u6211\u4EEC\u7684\u76EE\u6807\u662F\u4EE5\u5F3A\u5927\u7684\u6269\u5C55\u80FD\u529B\u5BF9\u8868\u5355\u573A\u666F 100%\u7684\u8986\u76D6\u652F\u6301\uFF0C\u540C\u65F6\u4FDD\u6301\u5F00\u53D1\u8005\u80FD\u5FEB\u901F\u4E0A\u624B\uFF0C\u5E76\u4EE5\u8868\u5355\u7F16\u8F91\u5668\u3001\u63D2\u4EF6\u3001\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7B49\u4E00\u7CFB\u5217\u5468\u8FB9\u4EA7\u54C1\u5E26\u6765\u6781\u81F4\u7684\u5F00\u53D1\u4F53\u9A8C\u3002\u5728\u5F00\u53D1 1.0 \u7684\u9053\u8DEF\u4E0A\uFF0C\u6211\u4EEC\u505A\u4E86\u4E00\u7CFB\u5217\u7684\u53D6\u820D\uFF0C\u8BE6\u89C1",e.a.createElement(v.Link,{to:"/form-render/migrate"},"0.x - 1.0 \u8FC1\u79FB\u6587\u6863")),e.a.createElement(de.a,null,e.a.createElement("span",null,"FormRender \u5DF2\u5347\u7EA7\u5230 v1.x \u7248\u672C\uFF0C\u5E76\u5BF9\u5916\u63D0\u4F9B\u4E2D\u540E\u53F0\u5F00\u7BB1\u5373\u7528 XRender \u8868\u5355 / \u8868\u683C / \u56FE\u8868\u65B9\u6848\uFF0C\u5982\u9700\u4F7F\u7528\u8001\u7248\u672C(v0.x)\uFF0C\u8BF7\u70B9\u51FB\u53F3\u4E0A\u89D2 ",e.a.createElement(v.Link,{to:"http://x-components.gitee.io/form-render/",target:"_blank_"}," \u65E7\u6587\u6863 "))),e.a.createElement("h2",{id:"\u5B89\u88C5"},e.a.createElement(v.AnchorLink,{to:"#\u5B89\u88C5","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u5B89\u88C5"),e.a.createElement("p",null,"FormRender \u4F9D\u8D56 ant design\uFF0C\u5355\u72EC\u4F7F\u7528\u4E0D\u8981\u5FD8\u8BB0\u540C\u65F6\u5B89\u88C5 ",e.a.createElement("code",null,"antd")),e.a.createElement(Xe.a,{code:"npm i form-render --save",lang:"shell"}),e.a.createElement("h2",{id:"\u4F7F\u7528"},e.a.createElement(v.AnchorLink,{to:"#\u4F7F\u7528","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u4F7F\u7528"),e.a.createElement("p",null,e.a.createElement("strong",null,"\u6700\u7B80\u4F7F\u7528 demo\uFF1A"))),e.a.createElement(L.default,De.default["form-render-demo"].previewerProps,e.a.createElement(ve,null)),e.a.createElement("div",{className:"markdown"},e.a.createElement("p",null,e.a.createElement("strong",null,"\u5BF9\u4E8E\u51FD\u6570\u7EC4\u4EF6\uFF0CFormRender \u63D0\u4F9B\u4E86 ",e.a.createElement("code",null,"useForm")," hooks, \u4E66\u5199\u66F4\u4E3A\u7075\u6D3B"))),e.a.createElement(L.default,De.default["form-render-demo-1"].previewerProps,e.a.createElement(zn,null)),e.a.createElement("div",{className:"markdown"},e.a.createElement("p",null,e.a.createElement("strong",null,"\u6362\u4E00\u4E2A\u66F4\u590D\u6742\u4E00\u70B9\u7684 schema\uFF0C\u6211\u4EEC\u652F\u6301\u6570\u636E\u7ED1\u5B9A\u3001antd \u7684 props \u900F\u4F20\u7B49\u4E00\u7CFB\u5217\u529F\u80FD\uFF1A"))),e.a.createElement(L.default,De.default["form-render-demo-2"].previewerProps,e.a.createElement(Pe,null)),e.a.createElement("div",{className:"markdown"},e.a.createElement("p",null,e.a.createElement("strong",null,"\u4ECE demo \u4E2D\u6211\u4EEC\u4E0D\u96BE\u53D1\u73B0 FormRender \u7684\u4E00\u4E9B\u8BBE\u8BA1\uFF1A")),e.a.createElement("ol",null,e.a.createElement("li",null,"\u4EE5 schema \u6765\u63CF\u8FF0\u8868\u5355\u5C55\u793A\uFF0C\u63D0\u4EA4\u65B9\u5F0F\u4E0E antd v4 \u7684\u65B9\u5F0F\u7C7B\u4F3C"),e.a.createElement("li",null,"schema \u4EE5\u56FD\u9645\u6807\u51C6\u7684 JSON schema \u4E3A\u57FA\u7840\uFF0C\u540C\u65F6\u80FD\u591F\u65B9\u4FBF\u4F7F\u7528\u4EFB\u4F55 antd \u7684 props"),e.a.createElement("li",null,"\u901A\u8FC7 bind \u5B57\u6BB5\uFF0C\u6211\u4EEC\u5141\u8BB8\u6570\u636E\u7684\u53CC\u5411\u7ED1\u5B9A\uFF0C\u6570\u636E\u5C55\u793A\u548C\u771F\u5B9E\u63D0\u4EA4\u7684\u6570\u636E\u53EF\u4EE5\u6839\u636E\u5F00\u53D1\u9700\u6C42\u4E0D\u540C\uFF08\u4F8B\u5982\u4ECE\u670D\u52A1\u7AEF\u63A5\u53E3\u62FF\u5230\u4E0D\u89C4\u5219\u6570\u636E\u65F6\uFF0C\u4E5F\u80FD\u76F4\u63A5\u4F7F\u7528\uFF09"),e.a.createElement("li",null,"\u53EF\u4EE5\u901A\u8FC7",e.a.createElement("code",null,"displayType"),",",e.a.createElement("code",null,"labelWidth"),"\u7B49\u5B57\u6BB5\u8F7B\u6613\u4FEE\u6539\u5C55\u793A")),e.a.createElement("h2",{id:"\u9AD8\u7EA7\u7528\u6CD5"},e.a.createElement(v.AnchorLink,{to:"#\u9AD8\u7EA7\u7528\u6CD5","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u9AD8\u7EA7\u7528\u6CD5"),e.a.createElement("ul",null,e.a.createElement("li",null,e.a.createElement("p",null,e.a.createElement(v.Link,{to:"/form-render/advanced/function"},"\u5982\u4F55\u5199\u8868\u5355\u95F4\u7684\u7B80\u5355\u8054\u52A8\u5173\u7CFB\uFF1F"))),e.a.createElement("li",null,e.a.createElement("p",null,e.a.createElement(v.Link,{to:"/form-render/advanced/watch"},"\u5982\u4F55\u901A\u8FC7\u76D1\u542C\u5B9E\u73B0\u590D\u6742\u8054\u52A8\uFF1F"))),e.a.createElement("li",null,e.a.createElement("p",null,e.a.createElement(v.Link,{to:"/form-render/advanced/widget"},"\u5982\u4F55\u7528\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u5B8C\u6210\u5B9A\u5236\u5143\u7D20\u7684\u5C55\u793A\uFF1F"))),e.a.createElement("li",null,e.a.createElement("p",null,e.a.createElement(v.Link,{to:"/form-render/advanced/form-methods"},"\u5982\u4F55\u5199\u4E00\u4E2A\u5B8C\u6574\u7684\u670D\u52A1\u7AEF\u6570\u636E\u8868\u5355\u52A0\u8F7D\u548C\u63D0\u4EA4\uFF1F"))),e.a.createElement("li",null,e.a.createElement("p",null,"\u60F3\u8981\u4E00\u4E2A\u591A\u9009\u7EC4\u4EF6\uFF0C\u8BE5\u600E\u4E48\u5199\u5B83\u7684 schema\uFF1F"),e.a.createElement("p",null,"\u5F88\u591A\u540C\u5B66\u9605\u8BFB schema \u6587\u6863\u7684\u76EE\u7684\u53EA\u662F\u5982\u6B64\uFF0C\u5EFA\u8BAE\u6253\u5F00 ",e.a.createElement(v.Link,{to:"/playground"},"playground"),", \u70B9\u51FB\u201C\u57FA\u7840\u63A7\u4EF6\u201D\u3002\u8FD9\u91CC\u6709\u6240\u6709 FormRender \u652F\u6301\u7684\u5C55\u793A\u4EE5\u53CA\u5BF9\u4E8E\u7684 schema")),e.a.createElement("li",null,e.a.createElement("p",null,e.a.createElement(v.Link,{to:"/form-render/faq"},"\u5176\u4ED6\u5E38\u89C1\u95EE\u9898 FAQ")))),e.a.createElement("h2",{id:"\u7EC4\u4EF6-props"},e.a.createElement(v.AnchorLink,{to:"#\u7EC4\u4EF6-props","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u7EC4\u4EF6 Props"),e.a.createElement(Xe.a,{code:"import Form, { useForm, connectForm } from 'form-render';",lang:"js"}),e.a.createElement("h3",{id:"form--\u5E38\u7528-props"},e.a.createElement(v.AnchorLink,{to:"#form--\u5E38\u7528-props","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"<Form /> (\u5E38\u7528 props)"),e.a.createElement("table",null,e.a.createElement("thead",null,e.a.createElement("tr",null,e.a.createElement("th",null,"\u53C2\u6570"),e.a.createElement("th",null,"\u63CF\u8FF0"),e.a.createElement("th",null,"\u7C7B\u578B"),e.a.createElement("th",null,"\u662F\u5426\u5FC5\u586B"),e.a.createElement("th",null,"\u9ED8\u8BA4\u503C"))),e.a.createElement("tbody",null,e.a.createElement("tr",null,e.a.createElement("td",null,"schema"),e.a.createElement("td",null,"\u63CF\u8FF0\u8868\u5355\u7684 schema\uFF0C\u8BE6\u89C1"),e.a.createElement("td",null,e.a.createElement("code",null,"object")),e.a.createElement("td",null,"\u662F"),e.a.createElement("td",null)),e.a.createElement("tr",null,e.a.createElement("td",null,"form"),e.a.createElement("td",null,e.a.createElement("code",null,"useForm"),"\u521B\u5EFA\u7684\u8868\u5355\u5B9E\u4F8B\uFF0C\u4E0E Form \u4E00\u5BF9\u4E00\u7ED1\u5B9A"),e.a.createElement("td",null,e.a.createElement("code",null,"FormInstance")),e.a.createElement("td",null,"\u662F"),e.a.createElement("td",null)),e.a.createElement("tr",null,e.a.createElement("td",null,"onFinish"),e.a.createElement("td",null,"\u63D0\u4EA4\u540E\u7684\u56DE\u8C03\uFF0C\u6267\u884C form.submit() \u540E\u89E6\u53D1"),e.a.createElement("td",null,e.a.createElement("code",null,"(data, errors: Error[]) => void")),e.a.createElement("td",null,"\u5426"),e.a.createElement("td",null,"() => ","{","}")),e.a.createElement("tr",null,e.a.createElement("td",null,"beforeFinish"),e.a.createElement("td",null,"\u5728 onFinish \u524D\u89E6\u53D1\uFF0C\u4E00\u822C\u7528\u4E8E\u5916\u90E8\u6821\u9A8C\u903B\u8F91\u7684\u56DE\u586B\uFF0C\u5165\u53C2\u662F\u4E2A\u5BF9\u8C61\uFF0C\u4FBF\u4E8E\u6269\u5C55"),e.a.createElement("td",null,"`(","{"," data, errors, schema, ...rest ","}",") => Error[]"),e.a.createElement("td",null,"Promise<Error[]>`"),e.a.createElement("td",null,"\u5426")),e.a.createElement("tr",null,e.a.createElement("td",null,"onMount"),e.a.createElement("td",null,"\u8868\u5355\u9996\u6B21\u52A0\u8F7D\u65F6\u89E6\u53D1\uFF0C\u8BE6\u89C1",e.a.createElement(v.Link,{to:"/form-render/advanced/life-cycle"},"\u751F\u547D\u5468\u671F")),e.a.createElement("td",null,e.a.createElement("code",null,"() => void")),e.a.createElement("td",null,"\u5426"),e.a.createElement("td",null,"() => ","{","}")),e.a.createElement("tr",null,e.a.createElement("td",null,"displayType"),e.a.createElement("td",null,"\u8868\u5355\u5143\u7D20\u4E0E label \u540C\u884C or \u5206\u4E24\u884C\u5C55\u793A, inline \u5219\u6574\u4E2A\u5C55\u793A\u81EA\u7136\u987A\u6392"),e.a.createElement("td",null,e.a.createElement("code",null,"string('column' / 'row' / 'inline')")),e.a.createElement("td",null,"\u5426"),e.a.createElement("td",null,"'column'")),e.a.createElement("tr",null,e.a.createElement("td",null,"widgets"),e.a.createElement("td",null,"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\uFF0C\u5F53\u5185\u7F6E\u7EC4\u4EF6\u65E0\u6CD5\u6EE1\u8DB3\u65F6\u4F7F\u7528"),e.a.createElement("td",null,e.a.createElement("code",null,"object")),e.a.createElement("td",null,"\u5426"),e.a.createElement("td",null,"{","}")),e.a.createElement("tr",null,e.a.createElement("td",null,"watch"),e.a.createElement("td",null,"\u7C7B\u4F3C\u4E8E vue \u7684 watch \u7684\u7528\u6CD5\uFF0C\u8BE6\u89C1",e.a.createElement(v.Link,{to:"/form-render/advanced/watch"},"\u8868\u5355\u76D1\u542C & \u56DE\u8C03")),e.a.createElement("td",null,e.a.createElement("code",null,"object")),e.a.createElement("td",null,"\u5426"),e.a.createElement("td",null,"{","}")))),e.a.createElement("p",null,"\u6CE8 1\uFF1A"),e.a.createElement("h3",{id:"form--\u4E0D\u5E38\u7528-props"},e.a.createElement(v.AnchorLink,{to:"#form--\u4E0D\u5E38\u7528-props","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"<Form /> (\u4E0D\u5E38\u7528 props)"),e.a.createElement("table",null,e.a.createElement("thead",null,e.a.createElement("tr",null,e.a.createElement("th",null,"\u53C2\u6570"),e.a.createElement("th",null,"\u63CF\u8FF0"),e.a.createElement("th",null,"\u7C7B\u578B"),e.a.createElement("th",null,"\u9ED8\u8BA4\u503C"))),e.a.createElement("tbody",null,e.a.createElement("tr",null,e.a.createElement("td",null,"column"),e.a.createElement("td",null,"\u4E00\u884C\u5C55\u793A\u591A\u5C11\u5217"),e.a.createElement("td",null,e.a.createElement("code",null,"number")),e.a.createElement("td",null,"1")),e.a.createElement("tr",null,e.a.createElement("td",null,"mapping"),e.a.createElement("td",null,"schema \u4E0E\u7EC4\u4EF6\u7684\u6620\u5C04\u5173\u7CFB\u8868\uFF0C\u5F53\u5185\u7F6E\u7684\u8868\u4E0D\u6EE1\u8DB3\u65F6\u4F7F\u7528"),e.a.createElement("td",null,e.a.createElement("code",null,"object")),e.a.createElement("td",null,"{","}")),e.a.createElement("tr",null,e.a.createElement("td",null,"debug"),e.a.createElement("td",null,"\u5F00\u542F debug \u6A21\u5F0F\uFF0C\u65F6\u65F6\u663E\u793A\u8868\u5355\u5185\u90E8\u72B6\u6001"),e.a.createElement("td",null,e.a.createElement("code",null,"boolean")),e.a.createElement("td",null,"false")),e.a.createElement("tr",null,e.a.createElement("td",null,"debugCss"),e.a.createElement("td",null,"\u7528\u4E8E css \u95EE\u9898\u7684\u8C03\u6574\uFF0C\u663E\u793A css \u5E03\u5C40\u63D0\u793A\u7EBF"),e.a.createElement("td",null,e.a.createElement("code",null,"boolean")),e.a.createElement("td",null,"false")),e.a.createElement("tr",null,e.a.createElement("td",null,"locale"),e.a.createElement("td",null,"\u5C55\u793A\u8BED\u8A00\uFF0C\u76EE\u524D\u53EA\u652F\u6301\u4E2D\u6587\u3001\u82F1\u6587"),e.a.createElement("td",null,e.a.createElement("code",null,"string('cn'/'en')")),e.a.createElement("td",null,"'cn'")),e.a.createElement("tr",null,e.a.createElement("td",null,"configProvider"),e.a.createElement("td",null,"antd \u7684 configProvider\uFF0C\u914D\u7F6E\u900F\u4F20"),e.a.createElement("td",null,e.a.createElement("code",null,"object")),e.a.createElement("td",null,"-")),e.a.createElement("tr",null,e.a.createElement("td",null,"debounceInput"),e.a.createElement("td",null,"\u662F\u5426\u5F00\u542F\u8F93\u5165\u65F6\u4F7F\u7528\u5FEB\u7167\u6A21\u5F0F\u3002\u4EC5\u5EFA\u8BAE\u5728\u8868\u5355\u5DE8\u5927\u4E14\u8868\u8FBE\u5F0F\u975E\u5E38\u591A\u65F6\u5F00\u542F"),e.a.createElement("td",null,e.a.createElement("code",null,"boolean")),e.a.createElement("td",null,"false")),e.a.createElement("tr",null,e.a.createElement("td",null,"validateMessages"),e.a.createElement("td",null,"\u4FEE\u6539\u9ED8\u8BA4\u7684\u6821\u9A8C\u63D0\u793A\u4FE1\u606F\u3002\u8BE6\u89C1\u4E0B"),e.a.createElement("td",null,e.a.createElement("code",null,"object")),e.a.createElement("td",null,"{","}")))),e.a.createElement("h4",{id:"validatemessages"},e.a.createElement(v.AnchorLink,{to:"#validatemessages","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"validateMessages"),e.a.createElement("p",null,e.a.createElement("code",null,"Form")," \u4E3A\u9A8C\u8BC1\u63D0\u4F9B\u4E86",e.a.createElement(v.Link,{to:"https://github.com/alibaba/x-render/blob/master/packages/form-render/src/validateMessageCN.js"},"\u9ED8\u8BA4\u7684\u9519\u8BEF\u63D0\u793A\u4FE1\u606F"),"\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7\u914D\u7F6E ",e.a.createElement("code",null,"validateMessages")," \u5C5E\u6027\uFF0C\u4FEE\u6539\u5BF9\u5E94\u7684\u63D0\u793A\u6A21\u677F\u3002\u4E00\u79CD\u5E38\u89C1\u7684\u4F7F\u7528\u65B9\u5F0F\uFF0C\u662F\u914D\u7F6E\u56FD\u9645\u5316\u63D0\u793A\u4FE1\u606F\uFF1A"),e.a.createElement(Xe.a,{code:`const validateMessages = {
  required: '\${title}\u662F\u5FC5\u9009\u5B57\u6BB5',
  // ...
};

<Form validateMessages={validateMessages} />;`,lang:"js"}),e.a.createElement("p",null,"\u76EE\u524D\u53EF\u4EE5\u7528\u7684\u8F6C\u4E49\u5B57\u6BB5\u4E3A ",e.a.createElement("code",null,"$","{","title","}"),"/",e.a.createElement("code",null,"$","{","min","}"),"/",e.a.createElement("code",null,"$","{","max","}"),"/",e.a.createElement("code",null,"$","{","len","}"),"/",e.a.createElement("code",null,"$","{","pattern","}"),", \u5982\u679C\u6709\u66F4\u591A\u9700\u6C42\u8BF7\u63D0 ",e.a.createElement(v.Link,{to:"https://github.com/alibaba/x-render/issues/new/choose"},"issue")),e.a.createElement("h3",{id:"useform--connectform"},e.a.createElement(v.AnchorLink,{to:"#useform--connectform","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"useForm / connectForm"),e.a.createElement("p",null,e.a.createElement("code",null,"useForm")," / ",e.a.createElement("code",null,"connectForm")," \u7528\u4E8E\u521B\u5EFA\u8868\u5355\u5B9E\u4F8B\uFF0C\u6240\u6709\u5BF9\u8868\u5355\u7684\u5916\u90E8\u64CD\u4F5C\u548C\u56DE\u8C03\u51FD\u6570\u5168\u6302\u5728\u5176\u751F\u4EA7\u7684\u5B9E\u4F8B\u4E0A,\u4F8B\u5982\u8868\u5355\u63D0\u4EA4\u662F ",e.a.createElement("code",null,"form.submit"),"\u3002\u6CE8\u610F ",e.a.createElement("code",null,"useForm")," \u662F hooks\uFF0C\u800C ",e.a.createElement("code",null,"connectForm")," \u662F\u9AD8\u9636\u7EC4\u4EF6\uFF0C\u6240\u4EE5\u524D\u8005\u53EA\u80FD\u5728\u51FD\u6570\u7EC4\u4EF6\u4F7F\u7528\uFF0C\u540E\u8005\u53EF\u7528\u4E8E class \u7EC4\u4EF6\u3002\u4E24\u8005\u65E0\u5176\u4ED6\u533A\u522B\u3002\u4F7F\u7528\u65F6\u9700\u8981\u521B\u5EFA\u5B9E\u4F8B\uFF0C\u5E76\u901A\u8FC7 props \u6302\u94A9\u5230\u4E0E\u5176\u5BF9\u5E94\u7684\u8868\u5355\u4E0A\uFF1A"),e.a.createElement(Xe.a,{code:`import Form, { useForm } from 'form-render';

const Demo = () => {
  const form = useForm();
  return <Form form={form} schema={...} />;
};`,lang:"js"}),e.a.createElement(Xe.a,{code:`import Form, { connectForm } from 'form-render';

const Demo = ({ form }) => {
  return <Form form={form} schema={...} />;
};

export default connectForm(Demo);`,lang:"js"}),e.a.createElement("p",null,e.a.createElement("strong",null,"form \u65B9\u6CD5")),e.a.createElement("table",null,e.a.createElement("thead",null,e.a.createElement("tr",null,e.a.createElement("th",null,"\u53C2\u6570"),e.a.createElement("th",null,"\u63CF\u8FF0"),e.a.createElement("th",null,"\u7C7B\u578B"))),e.a.createElement("tbody",null,e.a.createElement("tr",null,e.a.createElement("td",null,"submit"),e.a.createElement("td",null,"\u89E6\u53D1\u63D0\u4EA4\u6D41\u7A0B\uFF0C\u4E00\u822C\u5728\u63D0\u4EA4\u6309\u94AE\u4E0A\u4F7F\u7528"),e.a.createElement("td",null,e.a.createElement("code",null,"() => void"))),e.a.createElement("tr",null,e.a.createElement("td",null,"resetFields"),e.a.createElement("td",null,"\u6E05\u7A7A\u8868\u5355\uFF08\u4E5F\u4F1A\u6E05\u7A7A\u4E00\u4E9B\u5185\u7F6E\u72B6\u6001\uFF0C\u4F8B\u5982\u6821\u9A8C\uFF09"),e.a.createElement("td",null,e.a.createElement("code",null,"() => void"))),e.a.createElement("tr",null,e.a.createElement("td",null,"errorFields"),e.a.createElement("td",null,"Check if a field is touched"),e.a.createElement("td",null,e.a.createElement("code",null,"array,[","{","name, error: []","}","]"))),e.a.createElement("tr",null,e.a.createElement("td",null,"setErrorFields"),e.a.createElement("td",null,"\u5916\u90E8\u624B\u52A8\u4FEE\u6539 errorFields \u6821\u9A8C\u4FE1\u606F\uFF0C\u7528\u4E8E\u5916\u90E8\u6821\u9A8C\u56DE\u586B"),e.a.createElement("td",null,"`(error: Error")),e.a.createElement("tr",null,e.a.createElement("td",null,"setValues"),e.a.createElement("td",null,"\u5916\u90E8\u624B\u52A8\u4FEE\u6539 formData\uFF0C\u7528\u4E8E\u5DF2\u586B\u5199\u7684\u8868\u5355\u7684\u6570\u636E\u56DE\u586B"),e.a.createElement("td",null,e.a.createElement("code",null,"(formData: any) => void"))),e.a.createElement("tr",null,e.a.createElement("td",null,"setValueByPath"),e.a.createElement("td",null,"\u5916\u90E8\u4FEE\u6539\u6307\u5B9A\u5355\u4E2A field \u7684\u6570\u636E(\u539F\u540D onItemChange)"),e.a.createElement("td",null,e.a.createElement("code",null,"(path: string, value: any) => void"))),e.a.createElement("tr",null,e.a.createElement("td",null,"setSchemaByPath"),e.a.createElement("td",null,"\u6307\u5B9A\u8DEF\u5F84\u4FEE\u6539 schema"),e.a.createElement("td",null,e.a.createElement("code",null,"(path: string, value: any) => void"))),e.a.createElement("tr",null,e.a.createElement("td",null,"getValues"),e.a.createElement("td",null,"\u83B7\u53D6\u8868\u5355\u5185\u90E8\u7EF4\u62A4\u7684\u6570\u636E formData"),e.a.createElement("td",null,e.a.createElement("code",null,"() => void"))),e.a.createElement("tr",null,e.a.createElement("td",null,"schema"),e.a.createElement("td",null,"\u8868\u5355\u7684 schema"),e.a.createElement("td",null,"object")),e.a.createElement("tr",null,e.a.createElement("td",null,"touchedKeys"),e.a.createElement("td",null,"\u5DF2\u7ECF\u89E6\u78B0\u8FC7\u7684 field \u7684\u6570\u636E\u8DEF\u5F84"),e.a.createElement("td",null,e.a.createElement("code",null,"string[]"))),e.a.createElement("tr",null,e.a.createElement("td",null,"removeErrorField"),e.a.createElement("td",null,"\u5916\u90E8\u624B\u52A8\u5220\u9664\u67D0\u4E00\u4E2A path \u4E0B\u6240\u6709\u7684\u6821\u9A8C\u4FE1\u606F"),e.a.createElement("td",null,e.a.createElement("code",null,"(path: string) => void"))),e.a.createElement("tr",null,e.a.createElement("td",null,"formData"),e.a.createElement("td",null,"\u8868\u5355\u5185\u90E8\u7EF4\u62A4\u7684\u6570\u636E\uFF0C\u5EFA\u8BAE\u4F7F\u7528 getValues/setValues"),e.a.createElement("td",null,e.a.createElement("code",null,"object"))))),e.a.createElement("h2",{id:"\u5982\u4F55\u901F\u5199-schema"},e.a.createElement(v.AnchorLink,{to:"#\u5982\u4F55\u901F\u5199-schema","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u5982\u4F55\u901F\u5199 Schema"),e.a.createElement("p",null,e.a.createElement("strong",null,"\u5BF9\u4E8E\u521D\u5B66\u8005\u6765\u8BF4\u8BB0\u4F4F schema \u6240\u6709\u7684\u5B57\u6BB5\u548C\u4F7F\u7528\u65B9\u5F0F\u5E76\u975E\u6613\u4E8B\u3002\u4E3A\u4E86\u8BA9\u5927\u5BB6\u80FD\u591F\u5FEB\u901F\u4E0A\u624B\uFF0C\u5EFA\u8BAE\u4EE5\u4EE5\u4E0B\u7684\u987A\u5E8F\u5C1D\u8BD5\uFF1A")),e.a.createElement("ol",null,e.a.createElement("li",null,e.a.createElement("p",null,"\u53BB",e.a.createElement(v.Link,{to:"/playground"},"playground")," \u901B\u901B\uFF0C\u90A3\u91CC\u6709\u4ECE\u57FA\u7840\u73A9\u6CD5\u3001\u9AD8\u7EA7\u529F\u80FD\u5230\u5B8C\u6574\u6837\u4F8B\u7684\u6240\u6709 schema \u6837\u4F8B")),e.a.createElement("li",null,e.a.createElement("p",null,"\u73A9\u8F6C\u4E00\u4E0B ",e.a.createElement(v.Link,{to:"https://x-render.gitee.io/tools/generator"},"\u8868\u5355\u8BBE\u8BA1\u5668"),"\uFF0C\u62D6\u62D6\u62FD\u62FD\u5BFC\u51FA schema\uFF0C\u4E22\u5230\u4EE3\u7801\u91CC\u751F\u6210\u53EF\u7528\u8868\u5355\u3002\u672C\u8D28\u4E0A\u8FD9\u662F\u4E00\u4E2A\u53EF\u89C6\u5316\u7684 schema \u751F\u6210\u5668\uFF0C\u652F\u6301 schema \u7684\u5BFC\u5165 & \u5BFC\u51FA"),e.a.createElement("div",null,e.a.createElement("img",{src:"https://gw.alipayobjects.com/mdn/rms_e18934/afts/img/A*4QYNTbKU6xAAAAAAAAAAAABkARQnAQ?raw=true",width:"500px"}),e.a.createElement("img",{src:"https://gw.alipayobjects.com/mdn/rms_e18934/afts/img/A*FfTuRYjRd1AAAAAAAAAAAABkARQnAQ?raw=true",alt:"schema\u7F16\u8F91\u5668",width:"500px"}))),e.a.createElement("li",null,e.a.createElement("p",null,"\u8BE6\u7EC6\u7684 schema \u89C4\u8303\u89C1",e.a.createElement(v.Link,{to:"/form-render/schema"},"schema \u7684\u6587\u6863"),"\u3002\u540C\u65F6\u5728 vscode \u4E0A\u641C\u7D22\u201Cformrender\u201D\u53EF\u4EE5\u627E\u5230 snippets \u63D2\u4EF6\uFF0C\u624B\u719F\u8D77\u6765\u4E00\u6574\u9875\u8868\u5355\u7684 schema \u5F39\u6307\u95F4\u5B8C\u6210")))))))}}]);
