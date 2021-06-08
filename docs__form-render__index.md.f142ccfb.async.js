(window.webpackJsonp=window.webpackJsonp||[]).push([[39,10],{"0zqC":function(yn,un,e){"use strict";e.r(un);var x=e("tJVT"),n=e("q1tI"),f=e.n(n),W=e("wx14"),de=e("rePB"),L=e("ODXe"),Qe=e("U8pU"),Re=e("Ff2n"),ve=e("VTBJ"),xn=e("TSYQ"),Pe=e.n(xn),on=e("Zm9Q"),Tn=e("5Z9U"),Rn=e("6cGi"),vn=e("KQm4"),Ye=e("wgJM"),Wn=e("t23M");function Kn(t){var i=Object(n.useRef)(),c=Object(n.useRef)(!1);function b(){for(var C=arguments.length,y=new Array(C),O=0;O<C;O++)y[O]=arguments[O];c.current||(Ye.a.cancel(i.current),i.current=Object(Ye.a)(function(){t.apply(void 0,y)}))}return Object(n.useEffect)(function(){return function(){c.current=!0,Ye.a.cancel(i.current)}},[]),b}function Sn(t){var i=Object(n.useRef)([]),c=Object(n.useState)({}),b=Object(L.a)(c,2),C=b[1],y=Object(n.useRef)(typeof t=="function"?t():t),O=Kn(function(){var w=y.current;i.current.forEach(function($){w=$(w)}),i.current=[],y.current=w,C({})});function R(w){i.current.push(w),O()}return[y.current,R]}var we=e("4IlW");function zn(t,i){var c,b=t.prefixCls,C=t.id,y=t.active,O=t.rtl,R=t.tab,w=R.key,$=R.tab,V=R.disabled,G=R.closeIcon,J=t.tabBarGutter,le=t.tabPosition,Q=t.closable,X=t.renderWrapper,ue=t.removeAriaLabel,z=t.editable,q=t.onClick,re=t.onRemove,Y=t.onFocus,se="".concat(b,"-tab");n.useEffect(function(){return re},[]);var k={};le==="top"||le==="bottom"?k[O?"marginLeft":"marginRight"]=J:k.marginBottom=J;var Ee=z&&Q!==!1&&!V;function ee(ie){V||q(ie)}function ce(ie){ie.preventDefault(),ie.stopPropagation(),z.onEdit("remove",{key:w,event:ie})}var me=n.createElement("div",{key:w,ref:i,className:Pe()(se,(c={},Object(de.a)(c,"".concat(se,"-with-remove"),Ee),Object(de.a)(c,"".concat(se,"-active"),y),Object(de.a)(c,"".concat(se,"-disabled"),V),c)),style:k,onClick:ee},n.createElement("div",{role:"tab","aria-selected":y,id:C&&"".concat(C,"-tab-").concat(w),className:"".concat(se,"-btn"),"aria-controls":C&&"".concat(C,"-panel-").concat(w),"aria-disabled":V,tabIndex:V?null:0,onClick:function(H){H.stopPropagation(),ee(H)},onKeyDown:function(H){[we.a.SPACE,we.a.ENTER].includes(H.which)&&(H.preventDefault(),ee(H))},onFocus:Y},$),Ee&&n.createElement("button",{type:"button","aria-label":ue||"remove",tabIndex:0,className:"".concat(se,"-remove"),onClick:function(H){H.stopPropagation(),ce(H)}},G||z.removeIcon||"\xD7"));return X&&(me=X(me)),me}var Ln=n.forwardRef(zn),_n={width:0,height:0,left:0,top:0};function ct(t,i,c){return Object(n.useMemo)(function(){for(var b,C=new Map,y=i.get((b=t[0])===null||b===void 0?void 0:b.key)||_n,O=y.left+y.width,R=0;R<t.length;R+=1){var w=t[R].key,$=i.get(w);if(!$){var V;$=i.get((V=t[R-1])===null||V===void 0?void 0:V.key)||_n}var G=C.get(w)||Object(ve.a)({},$);G.right=O-G.left-G.width,C.set(w,G)}return C},[t.map(function(b){return b.key}).join("_"),i,c])}var D={width:0,height:0,left:0,top:0,right:0};function j(t,i,c,b,C){var y=C.tabs,O=C.tabPosition,R=C.rtl,w,$,V;["top","bottom"].includes(O)?(w="width",$=R?"right":"left",V=Math.abs(i.left)):(w="height",$="top",V=-i.top);var G=i[w],J=c[w],le=b[w],Q=G;return J+le>G&&(Q=G-le),Object(n.useMemo)(function(){if(!y.length)return[0,0];for(var X=y.length,ue=X,z=0;z<X;z+=1){var q=t.get(y[z].key)||D;if(q[$]+q[w]>V+Q){ue=z-1;break}}for(var re=0,Y=X-1;Y>=0;Y-=1){var se=t.get(y[Y].key)||D;if(se[$]<V){re=Y+1;break}}return[re,ue]},[t,V,Q,O,y.map(function(X){return X.key}).join("_"),R])}var S=e("Gytx"),d=e.n(S),s=e("Kwbf");function h(t,i){var c=t.prefixCls,b=t.invalidate,C=t.item,y=t.renderItem,O=t.responsive,R=t.registerSize,w=t.itemKey,$=t.className,V=t.style,G=t.children,J=t.display,le=t.order,Q=t.component,X=Q===void 0?"div":Q,ue=Object(Re.a)(t,["prefixCls","invalidate","item","renderItem","responsive","registerSize","itemKey","className","style","children","display","order","component"]),z=O&&!J;function q(Ee){R(w,Ee)}n.useEffect(function(){return function(){q(null)}},[]);var re=y&&C!==void 0?y(C):G,Y;b||(Y={opacity:z?0:1,height:z?0:void 0,overflowY:z?"hidden":void 0,order:O?le:void 0,pointerEvents:z?"none":void 0});var se={};z&&(se["aria-hidden"]=!0);var k=n.createElement(X,Object(W.a)({className:Pe()(!b&&c,$),style:Object(ve.a)(Object(ve.a)({},Y),V)},se,ue,{ref:i}),re);return O&&(k=n.createElement(Wn.default,{onResize:function(ee){var ce=ee.offsetWidth;q(ce)}},k)),k}var E=n.forwardRef(h);E.displayName="Item";var F=E;function a(){var t=Object(n.useState)({}),i=Object(L.a)(t,2),c=i[1],b=Object(n.useRef)([]),C=Object(n.useRef)(!1),y=0,O=0;Object(n.useEffect)(function(){return function(){C.current=!0}},[]);function R(w){var $=y;y+=1,b.current.length<$+1&&(b.current[$]=w);var V=b.current[$];function G(J){b.current[$]=typeof J=="function"?J(b.current[$]):J,Ye.a.cancel(O),O=Object(Ye.a)(function(){C.current||c({})})}return[V,G]}return R}var u=function(i,c){var b=n.useContext(I);if(!b){var C=i.component,y=C===void 0?"div":C,O=Object(Re.a)(i,["component"]);return n.createElement(y,Object(W.a)({},O,{ref:c}))}var R=b.className,w=Object(Re.a)(b,["className"]),$=i.className,V=Object(Re.a)(i,["className"]);return n.createElement(I.Provider,{value:null},n.createElement(F,Object(W.a)({ref:c,className:Pe()(R,$)},w,V)))},l=n.forwardRef(u);l.displayName="RawItem";var N=l,I=n.createContext(null),P="responsive",o="invalidate";function B(t){return"+ ".concat(t.length," ...")}function p(t,i){var c=t.prefixCls,b=c===void 0?"rc-overflow":c,C=t.data,y=C===void 0?[]:C,O=t.renderItem,R=t.renderRawItem,w=t.itemKey,$=t.itemWidth,V=$===void 0?10:$,G=t.ssr,J=t.style,le=t.className,Q=t.maxCount,X=t.renderRest,ue=t.renderRawRest,z=t.suffix,q=t.component,re=q===void 0?"div":q,Y=t.itemComponent,se=t.onVisibleChange,k=Object(Re.a)(t,["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"]),Ee=a(),ee=G==="full",ce=Ee(null),me=Object(L.a)(ce,2),ie=me[0],H=me[1],oe=ie||0,ge=Ee(new Map),he=Object(L.a)(ge,2),Oe=he[0],We=he[1],be=Ee(0),Fe=Object(L.a)(be,2),Ke=Fe[0],Ne=Fe[1],Ie=Ee(0),je=Object(L.a)(Ie,2),$e=je[0],_e=je[1],Ve=Ee(0),xe=Object(L.a)(Ve,2),Xe=xe[0],Le=xe[1],Dn=Object(n.useState)(null),an=Object(L.a)(Dn,2),Ze=an[0],dn=an[1],bn=Object(n.useState)(null),Cn=Object(L.a)(bn,2),Be=Cn[0],Ge=Cn[1],en=n.useMemo(function(){return Be===null&&ee?Number.MAX_SAFE_INTEGER:Be||0},[Be,ie]),ke=Object(n.useState)(!1),Mn=Object(L.a)(ke,2),Jn=Mn[0],wn=Mn[1],rn="".concat(b,"-item"),Pn=Math.max(Ke,$e),cn=y.length&&Q===P,jn=Q===o,nn=cn||typeof Q=="number"&&y.length>Q,ln=Object(n.useMemo)(function(){var pe=y;return cn?ie===null&&ee?pe=y:pe=y.slice(0,Math.min(y.length,oe/V)):typeof Q=="number"&&(pe=y.slice(0,Q)),pe},[y,V,ie,Q,cn]),An=Object(n.useMemo)(function(){return cn?y.slice(en+1):y.slice(ln.length)},[y,ln,cn,en]),fn=Object(n.useCallback)(function(pe,Se){var Me;return typeof w=="function"?w(pe):(Me=w&&(pe==null?void 0:pe[w]))!==null&&Me!==void 0?Me:Se},[w]),qe=Object(n.useCallback)(O||function(pe){return pe},[O]);function He(pe,Se){Ge(pe),Se||(wn(pe<y.length-1),se==null||se(pe))}function Gn(pe,Se){H(Se.clientWidth)}function Hn(pe,Se){We(function(Me){var tn=new Map(Me);return Se===null?tn.delete(pe):tn.set(pe,Se),tn})}function tt(pe,Se){_e(Se),Ne($e)}function Fn(pe,Se){Le(Se)}function gn(pe){return Oe.get(fn(ln[pe],pe))}n.useLayoutEffect(function(){if(oe&&Pn&&ln){var pe=Xe,Se=ln.length,Me=Se-1;if(!Se){He(0),dn(null);return}for(var tn=0;tn<Se;tn+=1){var Zn=gn(tn);if(Zn===void 0){He(tn-1,!0);break}if(pe+=Zn,tn===Me-1&&pe+gn(Me)<=oe){He(Me),dn(null);break}else if(pe+Pn>oe){He(tn-1),dn(pe-Zn-Xe+$e);break}else if(tn===Me){He(Me),dn(pe-Xe);break}}z&&gn(0)+Xe>oe&&dn(null)}},[oe,Oe,$e,Xe,fn,ln]);var Qn=Jn&&!!An.length,On={};Ze!==null&&cn&&(On={position:"absolute",left:Ze,top:0});var pn={prefixCls:rn,responsive:cn,component:Y,invalidate:jn},Xn=R?function(pe,Se){var Me=fn(pe,Se);return n.createElement(I.Provider,{key:Me,value:Object(ve.a)(Object(ve.a)({},pn),{},{order:Se,item:pe,itemKey:Me,registerSize:Hn,display:Se<=en})},R(pe,Se))}:function(pe,Se){var Me=fn(pe,Se);return n.createElement(F,Object(W.a)({},pn,{order:Se,key:Me,item:pe,renderItem:qe,itemKey:Me,registerSize:Hn,display:Se<=en}))},In,Yn={order:Qn?en:Number.MAX_SAFE_INTEGER,className:"".concat(rn,"-rest"),registerSize:tt,display:Qn};if(ue)ue&&(In=n.createElement(I.Provider,{value:Object(ve.a)(Object(ve.a)({},pn),Yn)},ue(An)));else{var mn=X||B;In=n.createElement(F,Object(W.a)({},pn,Yn),typeof mn=="function"?mn(An):mn)}var Bn=n.createElement(re,Object(W.a)({className:Pe()(!jn&&b,le),style:J,ref:i},k),ln.map(Xn),nn?In:null,z&&n.createElement(F,Object(W.a)({},pn,{order:en,className:"".concat(rn,"-suffix"),registerSize:Fn,display:!0,style:On}),z));return cn&&(Bn=n.createElement(Wn.default,{onResize:Gn},Bn)),Bn}var r=n.forwardRef(p);r.displayName="Overflow",r.Item=N,r.RESPONSIVE=P,r.INVALIDATE=o;var g=r,v=g,T=e("1OyB"),M=e("vuIU"),U=e("Ji7U"),ne=e("LK+K"),ae=e("bT9E"),ye=e("YrtM"),Ae=n.createContext(null);function Te(t,i){var c=Object(ve.a)({},t);return Object.keys(i).forEach(function(b){var C=i[b];C!==void 0&&(c[b]=C)}),c}function En(t){var i=t.children,c=t.locked,b=Object(Re.a)(t,["children","locked"]),C=n.useContext(Ae),y=Object(ye.a)(function(){return Te(C,b)},[C,b],function(O,R){return!c&&(O[0]!==R[0]||!d()(O[1],R[1]))});return n.createElement(Ae.Provider,{value:y},i)}function $n(t,i,c,b){var C=n.useContext(Ae),y=C.activeKey,O=C.onActive,R=C.onInactive,w={active:y===t};return i||(w.onMouseEnter=function($){c==null||c({key:t,domEvent:$}),O(t)},w.onMouseLeave=function($){b==null||b({key:t,domEvent:$}),R(t)}),w}function et(t){var i=t.item,c=Object(Re.a)(t,["item"]);return Object.defineProperty(c,"item",{get:function(){return Object(s.a)(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),i}}),c}function m(t){var i=t.icon,c=t.props,b=t.children,C;return typeof i=="function"?C=n.createElement(i,Object(ve.a)({},c)):C=i,C||b||null}function A(t){var i=n.useContext(Ae),c=i.mode,b=i.rtl,C=i.inlineIndent;if(c!=="inline")return null;var y=t;return b?{paddingRight:y*C}:{paddingLeft:y*C}}var K=[],fe=n.createContext(null);function _(){return n.useContext(fe)}var De=n.createContext(K);function Ue(t){var i=n.useContext(De);return n.useMemo(function(){return t!==void 0?[].concat(Object(vn.a)(i),[t]):i},[i,t])}var Je=n.createContext(null),xt=n.createContext(null);function zt(t,i){return t===void 0?null:"".concat(t,"-").concat(i)}function Jt(t){var i=n.useContext(xt);return zt(i,t)}var Ea=function(t){Object(U.a)(c,t);var i=Object(ne.a)(c);function c(){return Object(T.a)(this,c),i.apply(this,arguments)}return Object(M.a)(c,[{key:"render",value:function(){var C=this.props,y=C.title,O=C.attribute,R=C.elementRef,w=Object(Re.a)(C,["title","attribute","elementRef"]),$=Object(ae.a)(w,["eventKey"]);return Object(s.a)(!O,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),n.createElement(v.Item,Object(W.a)({},O,{title:typeof y=="string"?y:void 0},$,{ref:R}))}}]),c}(n.Component),ba=function(i){var c,b=i.style,C=i.className,y=i.eventKey,O=i.disabled,R=i.itemIcon,w=i.children,$=i.role,V=i.onMouseEnter,G=i.onMouseLeave,J=i.onClick,le=i.onKeyDown,Q=i.onFocus,X=Object(Re.a)(i,["style","className","eventKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"]),ue=Jt(y),z=n.useContext(Ae),q=z.prefixCls,re=z.onItemClick,Y=z.disabled,se=z.overflowDisabled,k=z.itemIcon,Ee=z.selectedKeys,ee=z.onActive,ce="".concat(q,"-item"),me=n.useRef(),ie=n.useRef(),H=Y||O,oe=Ue(y),ge=function(Ve){return{key:y,keyPath:oe,item:me.current,domEvent:Ve}},he=R||k,Oe=$n(y,H,V,G),We=Oe.active,be=Object(Re.a)(Oe,["active"]),Fe=Ee.includes(y),Ke=A(oe.length),Ne=function(Ve){if(!H){var xe=ge(Ve);J==null||J(et(xe)),re(xe)}},Ie=function(Ve){if(le==null||le(Ve),Ve.which===we.a.ENTER){var xe=ge(Ve);J==null||J(et(xe)),re(xe)}},je=function(Ve){ee(y),Q==null||Q(Ve)},$e={};return i.role==="option"&&($e["aria-selected"]=Fe),n.createElement(Ea,Object(W.a)({ref:me,elementRef:ie,role:$===null?"none":$||"menuitem",tabIndex:O?null:-1,"data-menu-id":se&&ue?null:ue},X,be,$e,{component:"li","aria-disabled":O,style:Object(ve.a)(Object(ve.a)({},Ke),b),className:Pe()(ce,(c={},Object(de.a)(c,"".concat(ce,"-active"),We),Object(de.a)(c,"".concat(ce,"-selected"),Fe),Object(de.a)(c,"".concat(ce,"-disabled"),H),c),C),onClick:Ne,onKeyDown:Ie,onFocus:je}),w,n.createElement(m,{props:Object(ve.a)(Object(ve.a)({},i),{},{isSelected:Fe}),icon:he}))};function Ca(t){var i=t.eventKey,c=_(),b=Ue(i);return n.useEffect(function(){if(c)return c.registerPath(i,b),function(){c.unregisterPath(i,b)}},[b]),c?null:n.createElement(ba,t)}var Dt=Ca;function Pt(t,i){return Object(on.a)(t).map(function(c,b){if(n.isValidElement(c)){var C=c.key;return C==null&&(C="tmp_key-".concat([].concat(Object(vn.a)(i),[b]).join("-"))),n.cloneElement(c,{key:C,eventKey:C})}return c})}function nt(t){var i=n.useRef(t);i.current=t;var c=n.useCallback(function(){for(var b,C=arguments.length,y=new Array(C),O=0;O<C;O++)y[O]=arguments[O];return(b=i.current)===null||b===void 0?void 0:b.call.apply(b,[i].concat(y))},[]);return t?c:void 0}var Fa=function(i,c){var b=i.className,C=i.children,y=Object(Re.a)(i,["className","children"]),O=n.useContext(Ae),R=O.prefixCls,w=O.mode;return n.createElement("ul",Object(W.a)({className:Pe()(R,"".concat(R,"-sub"),"".concat(R,"-").concat(w==="inline"?"inline":"vertical"),b)},y,{"data-menu-list":!0,ref:c}),C)},Gt=n.forwardRef(Fa);Gt.displayName="SubMenuList";var Ht=Gt,Oa=e("uciX"),Vn={adjustX:1,adjustY:1},Qt={topLeft:{points:["bl","tl"],overflow:Vn,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Vn,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:Vn,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:Vn,offset:[4,0]}},Ra={topLeft:{points:["bl","tl"],overflow:Vn,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Vn,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:Vn,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:Vn,offset:[4,0]}},fr=Qt;function Xt(t,i,c){if(i)return i;if(c)return c[t]||c.other}var Sa={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function Da(t){var i=t.prefixCls,c=t.visible,b=t.children,C=t.popup,y=t.popupClassName,O=t.popupOffset,R=t.disabled,w=t.mode,$=t.onVisibleChange,V=n.useContext(Ae),G=V.getPopupContainer,J=V.rtl,le=V.subMenuOpenDelay,Q=V.subMenuCloseDelay,X=V.builtinPlacements,ue=V.triggerSubMenuAction,z=V.forceSubMenuRender,q=V.motion,re=V.defaultMotions,Y=n.useState(!1),se=Object(L.a)(Y,2),k=se[0],Ee=se[1],ee=J?Object(ve.a)(Object(ve.a)({},Ra),X):Object(ve.a)(Object(ve.a)({},Qt),X),ce=Sa[w],me=Xt(w,q,re),ie=Object(ve.a)(Object(ve.a)({},me),{},{leavedClassName:"".concat(i,"-hidden"),removeOnLeave:!1,motionAppear:!0}),H=n.useRef();return n.useEffect(function(){return H.current=Object(Ye.a)(function(){Ee(c)}),function(){Ye.a.cancel(H.current)}},[c]),n.createElement(Oa.a,{prefixCls:i,popupClassName:Pe()("".concat(i,"-popup"),Object(de.a)({},"".concat(i,"-rtl"),J),y),stretch:w==="horizontal"?"minWidth":null,getPopupContainer:G,builtinPlacements:ee,popupPlacement:ce,popupVisible:k,popup:C,popupAlign:O&&{offset:O},action:R?[]:[ue],mouseEnterDelay:le,mouseLeaveDelay:Q,onPopupVisibleChange:$,forceRender:z,popupMotion:ie},b)}var Pa=e("8XRh");function ja(t){var i=t.id,c=t.open,b=t.keyPath,C=t.children,y="inline",O=n.useContext(Ae),R=O.prefixCls,w=O.forceSubMenuRender,$=O.motion,V=O.defaultMotions,G=O.mode,J=n.useRef(!1);J.current=G===y;var le=n.useState(!J.current),Q=Object(L.a)(le,2),X=Q[0],ue=Q[1],z=J.current?c:!1;n.useEffect(function(){J.current&&ue(!1)},[G]);var q=Object(ve.a)({},Xt(y,$,V));b.length>1&&(q.motionAppear=!1);var re=q.onVisibleChanged;return q.onVisibleChanged=function(Y){return!J.current&&!Y&&ue(!0),re==null?void 0:re(Y)},X?null:n.createElement(En,{mode:y,locked:!J.current},n.createElement(Pa.default,Object(W.a)({visible:z},q,{forceRender:w,removeOnLeave:!1,leavedClassName:"".concat(R,"-hidden")}),function(Y){var se=Y.className,k=Y.style;return n.createElement(Ht,{id:i,className:se,style:k},C)}))}var Aa=function(i){var c,b=i.style,C=i.className,y=i.title,O=i.eventKey,R=i.disabled,w=i.internalPopupClose,$=i.children,V=i.itemIcon,G=i.expandIcon,J=i.popupClassName,le=i.popupOffset,Q=i.onClick,X=i.onMouseEnter,ue=i.onMouseLeave,z=i.onTitleClick,q=i.onTitleMouseEnter,re=i.onTitleMouseLeave,Y=Object(Re.a)(i,["style","className","title","eventKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"]),se=Jt(O),k=n.useContext(Ae),Ee=k.prefixCls,ee=k.mode,ce=k.openKeys,me=k.disabled,ie=k.overflowDisabled,H=k.activeKey,oe=k.selectedKeys,ge=k.itemIcon,he=k.expandIcon,Oe=k.onItemClick,We=k.onOpenChange,be=k.onActive,Fe=n.useContext(Je),Ke=Fe.isSubPathKey,Ne=Ue(),Ie="".concat(Ee,"-submenu"),je=me||R,$e=n.useRef(),_e=n.useRef(),Ve=V||ge,xe=G||he,Xe=ce.includes(O),Le=!ie&&Xe,Dn=Ke(oe,O),an=$n(O,je,q,re),Ze=an.active,dn=Object(Re.a)(an,["active"]),bn=n.useState(!1),Cn=Object(L.a)(bn,2),Be=Cn[0],Ge=Cn[1],en=function(He){je||Ge(He)},ke=function(He){en(!0),X==null||X({key:O,domEvent:He})},Mn=function(He){en(!1),ue==null||ue({key:O,domEvent:He})},Jn=n.useMemo(function(){return Ze||(ee!=="inline"?Be||Ke([H],O):!1)},[ee,Ze,H,Be,O,Ke]),wn=A(Ne.length),rn=function(He){je||(z==null||z({key:O,domEvent:He}),ee==="inline"&&We(O,!Xe))},Pn=nt(function(qe){Q==null||Q(et(qe)),Oe(qe)}),cn=function(He){ee!=="inline"&&We(O,He)},jn=function(){be(O)},nn=se&&"".concat(se,"-popup"),ln=n.createElement("div",Object(W.a)({role:"menuitem",style:wn,className:"".concat(Ie,"-title"),tabIndex:je?null:-1,ref:$e,title:typeof y=="string"?y:null,"data-menu-id":ie&&se?null:se,"aria-expanded":Le,"aria-haspopup":!0,"aria-controls":nn,"aria-disabled":je,onClick:rn,onFocus:jn},dn),y,n.createElement(m,{icon:ee!=="horizontal"?xe:null,props:Object(ve.a)(Object(ve.a)({},i),{},{isOpen:Le,isSubMenu:!0})},n.createElement("i",{className:"".concat(Ie,"-arrow")}))),An=n.useRef(ee);if(ee!=="inline"&&(An.current=Ne.length>1?"vertical":ee),!ie){var fn=An.current;ln=n.createElement(Da,{mode:fn,prefixCls:Ie,visible:!w&&Le&&ee!=="inline",popupClassName:J,popupOffset:le,popup:n.createElement(En,{mode:fn},n.createElement(Ht,{id:nn,ref:_e},$)),disabled:je,onVisibleChange:cn},ln)}return n.createElement(En,{onItemClick:Pn,mode:ee==="horizontal"?"vertical":ee,itemIcon:Ve,expandIcon:xe},n.createElement(v.Item,Object(W.a)({role:"none"},Y,{component:"li",style:b,className:Pe()(Ie,"".concat(Ie,"-").concat(ee),C,(c={},Object(de.a)(c,"".concat(Ie,"-open"),Le),Object(de.a)(c,"".concat(Ie,"-active"),Jn),Object(de.a)(c,"".concat(Ie,"-selected"),Dn),Object(de.a)(c,"".concat(Ie,"-disabled"),je),c)),onMouseEnter:ke,onMouseLeave:Mn}),ln,!ie&&n.createElement(ja,{id:nn,open:Le,keyPath:Ne},$)))};function Yt(t){var i=t.eventKey,c=t.children,b=Ue(i),C=Pt(c,b),y=_();n.useEffect(function(){if(y)return y.registerPath(i,b),function(){y.unregisterPath(i,b)}},[b]);var O;return y?O=C:O=n.createElement(Aa,t,C),n.createElement(De.Provider,{value:b},O)}var Ia=e("x/xZ");function Zt(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Object(Ia.a)(t)){var c=t.nodeName.toLowerCase(),b=["input","select","textarea","button"].includes(c)||t.isContentEditable||c==="a"&&!!t.getAttribute("href"),C=t.getAttribute("tabindex"),y=Number(C),O=null;return C&&!Number.isNaN(y)?O=y:b&&O===null&&(O=0),b&&t.disabled&&(O=null),O!==null&&(O>=0||i&&O<0)}return!1}function kt(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,c=Object(vn.a)(t.querySelectorAll("*")).filter(function(b){return Zt(b,i)});return Zt(t,i)&&c.unshift(t),c}var mt=null;function pr(){mt=document.activeElement}function vr(){mt=null}function hr(){if(mt)try{mt.focus()}catch(t){}}function gr(t,i){if(i.keyCode===9){var c=kt(t),b=c[i.shiftKey?0:c.length-1],C=b===document.activeElement||t===document.activeElement;if(C){var y=c[i.shiftKey?c.length-1:0];y.focus(),i.preventDefault()}}}var jt=we.a.LEFT,At=we.a.RIGHT,It=we.a.UP,ft=we.a.DOWN,pt=we.a.ENTER,qt=we.a.ESC,_t=[It,ft,jt,At];function Ba(t,i,c,b){var C,y,O,R,w="prev",$="next",V="children",G="parent";if(t==="inline"&&b===pt)return{inlineTrigger:!0};var J=(C={},Object(de.a)(C,It,w),Object(de.a)(C,ft,$),C),le=(y={},Object(de.a)(y,jt,c?$:w),Object(de.a)(y,At,c?w:$),Object(de.a)(y,ft,V),Object(de.a)(y,pt,V),y),Q=(O={},Object(de.a)(O,It,w),Object(de.a)(O,ft,$),Object(de.a)(O,pt,V),Object(de.a)(O,qt,G),Object(de.a)(O,jt,c?V:G),Object(de.a)(O,At,c?G:V),O),X={inline:J,horizontal:le,vertical:Q,inlineSub:J,horizontalSub:Q,verticalSub:Q},ue=(R=X["".concat(t).concat(i?"":"Sub")])===null||R===void 0?void 0:R[b];switch(ue){case w:return{offset:-1,sibling:!0};case $:return{offset:1,sibling:!0};case G:return{offset:-1,sibling:!1};case V:return{offset:1,sibling:!1};default:return null}}function Na(t){for(var i=t;i;){if(i.getAttribute("data-menu-list"))return i;i=i.parentElement}return null}function Ta(t,i){for(var c=t||document.activeElement;c;){if(i.has(c))return c;c=c.parentElement}return null}function Ka(t,i){var c=kt(t,!0);return c.filter(function(b){return i.has(b)})}function ea(t,i,c){var b=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!t)return null;var C=Ka(t,i),y=C.length,O=C.findIndex(function(R){return c===R});return b<0?O===-1?O=y-1:O-=1:b>0&&(O+=1),O=(O+y)%y,C[O]}function Ma(t,i,c,b,C,y,O,R,w,$){var V=n.useRef(),G=n.useRef();G.current=i;var J=function(){Ye.a.cancel(V.current)};return n.useEffect(function(){return function(){J()}},[]),function(le){var Q=le.which;if([].concat(_t,[pt,qt]).includes(Q)){var X,ue,z,q=function(){X=new Set,ue=new Map,z=new Map;var ge=y();return ge.forEach(function(he){var Oe=document.querySelector("[data-menu-id='".concat(zt(b,he),"']"));Oe&&(X.add(Oe),z.set(Oe,he),ue.set(he,Oe))}),X};q();var re=ue.get(i),Y=Ta(re,X),se=z.get(Y),k=Ba(t,O(se,!0).length===1,c,Q);if(!k)return;_t.includes(Q)&&le.preventDefault();var Ee=function(ge){if(ge){var he=ge,Oe=ge.querySelector("a");(Oe==null?void 0:Oe.getAttribute("href"))&&(he=Oe);var We=z.get(ge);R(We),J(),V.current=Object(Ye.a)(function(){G.current===We&&he.focus()})}};if(k.sibling||!Y){var ee;!Y||t==="inline"?ee=C.current:ee=Na(Y);var ce=ea(ee,X,Y,k.offset);Ee(ce)}else if(k.inlineTrigger)w(se);else if(k.offset>0)w(se,!0),J(),V.current=Object(Ye.a)(function(){q();var oe=Y.getAttribute("aria-controls"),ge=document.getElementById(oe),he=ea(ge,X);Ee(he)},5);else if(k.offset<0){var me=O(se,!0),ie=me[me.length-2],H=ue.get(ie);w(ie,!1),Ee(H)}}$==null||$(le)}}var wa=Math.random().toFixed(5).toString().slice(2),na=0;function Wa(t){var i=Object(Rn.a)(t,{value:t}),c=Object(L.a)(i,2),b=c[0],C=c[1];return n.useEffect(function(){na+=1;var y="".concat(wa,"-").concat(na);C("rc-menu-uuid-".concat(y))},[]),b}var yr=e("p8sG");function La(t){Promise.resolve().then(t)}var Bt="__RC_UTIL_PATH_SPLIT__",ta=function(i){return i.join(Bt)},$a=function(i){return i.split(Bt)},Nt="rc-menu-more";function Va(){var t=n.useState({}),i=Object(L.a)(t,2),c=i[1],b=Object(n.useRef)(new Map),C=Object(n.useRef)(new Map),y=n.useState([]),O=Object(L.a)(y,2),R=O[0],w=O[1],$=Object(n.useRef)(0),V=Object(n.useCallback)(function(z,q){var re=ta(q);C.current.set(re,z),b.current.set(z,re),$.current+=1;var Y=$.current;La(function(){Y===$.current&&c({})})},[]),G=Object(n.useCallback)(function(z,q){var re=ta(q);C.current.delete(re),b.current.delete(z)},[]),J=Object(n.useCallback)(function(z){w(z)},[]),le=Object(n.useCallback)(function(z,q){var re=b.current.get(z)||"",Y=$a(re);return q&&R.includes(Y[0])&&Y.unshift(Nt),Y},[R]),Q=Object(n.useCallback)(function(z,q){return z.some(function(re){var Y=le(re,!0);return Y.includes(q)})},[le]),X=function(){var q=Object(vn.a)(b.current.keys());return R.length&&q.push(Nt),q},ue=Object(n.useCallback)(function(z){var q="".concat(b.current.get(z)).concat(Bt),re=new Set;return Object(vn.a)(C.current.keys()).forEach(function(Y){Y.startsWith(q)&&re.add(C.current.get(Y))}),re},[]);return{registerPath:V,unregisterPath:G,refreshOverflowKeys:J,isSubPathKey:Q,getKeyPath:le,getKeys:X,getSubPathKeys:ue}}var vt=[],Ua=function(i){var c,b,C=i.prefixCls,y=C===void 0?"rc-menu":C,O=i.style,R=i.className,w=i.tabIndex,$=w===void 0?0:w,V=i.children,G=i.direction,J=i.id,le=i.mode,Q=le===void 0?"vertical":le,X=i.inlineCollapsed,ue=i.disabled,z=i.disabledOverflow,q=i.subMenuOpenDelay,re=q===void 0?.1:q,Y=i.subMenuCloseDelay,se=Y===void 0?.1:Y,k=i.forceSubMenuRender,Ee=i.defaultOpenKeys,ee=i.openKeys,ce=i.activeKey,me=i.defaultActiveFirst,ie=i.selectable,H=ie===void 0?!0:ie,oe=i.multiple,ge=oe===void 0?!1:oe,he=i.defaultSelectedKeys,Oe=i.selectedKeys,We=i.onSelect,be=i.onDeselect,Fe=i.inlineIndent,Ke=Fe===void 0?24:Fe,Ne=i.motion,Ie=i.defaultMotions,je=i.triggerSubMenuAction,$e=je===void 0?"hover":je,_e=i.builtinPlacements,Ve=i.itemIcon,xe=i.expandIcon,Xe=i.overflowedIndicator,Le=Xe===void 0?"...":Xe,Dn=i.getPopupContainer,an=i.onClick,Ze=i.onOpenChange,dn=i.onKeyDown,bn=i.openAnimation,Cn=i.openTransitionName,Be=Object(Re.a)(i,["prefixCls","style","className","tabIndex","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName"]),Ge=Pt(V,vt),en=n.useState(!1),ke=Object(L.a)(en,2),Mn=ke[0],Jn=ke[1],wn=n.useRef(),rn=Wa(J),Pn=G==="rtl",cn=n.useMemo(function(){return Q==="inline"&&X?["vertical",X]:[Q,!1]},[Q,X]),jn=Object(L.a)(cn,2),nn=jn[0],ln=jn[1],An=n.useState(0),fn=Object(L.a)(An,2),qe=fn[0],He=fn[1],Gn=qe>=Ge.length-1||nn!=="horizontal"||z,Hn=Object(Rn.a)(Ee,{value:ee,postState:function(Z){return Z||vt}}),tt=Object(L.a)(Hn,2),Fn=tt[0],gn=tt[1],Qn=n.useState(Fn),On=Object(L.a)(Qn,2),pn=On[0],Xn=On[1],In=nn==="inline",Yn=n.useRef(!1);n.useEffect(function(){In&&Xn(Fn)},[Fn]),n.useEffect(function(){if(!Yn.current){Yn.current=!0;return}if(In)gn(pn);else{var te=[];gn(te),Ze==null||Ze(te)}},[In]);var mn=Va(),Bn=mn.registerPath,pe=mn.unregisterPath,Se=mn.refreshOverflowKeys,Me=mn.isSubPathKey,tn=mn.getKeyPath,Zn=mn.getKeys,gt=mn.getSubPathKeys,wt=n.useMemo(function(){return{registerPath:Bn,unregisterPath:pe}},[Bn,pe]),Wt=n.useMemo(function(){return{isSubPathKey:Me}},[Me]);n.useEffect(function(){Se(Gn?vt:Ge.slice(qe+1).map(function(te){return te.key}))},[qe,Gn]);var Lt=Object(Rn.a)(ce||me&&((c=Ge[0])===null||c===void 0?void 0:c.key),{value:ce}),at=Object(L.a)(Lt,2),yt=at[0],lt=at[1],Et=nt(function(te){lt(te)}),$t=nt(function(){lt(void 0)}),bt=Object(Rn.a)(he||[],{value:Oe,postState:function(Z){return Array.isArray(Z)?Z:Z==null?vt:[Z]}}),Ct=Object(L.a)(bt,2),rt=Ct[0],Nn=Ct[1],Ft=function(Z){if(!!H){var Ce=Z.key,ze=rt.includes(Ce),sn;ze?sn=rt.filter(function(qn){return qn!==Ce}):ge?sn=[].concat(Object(vn.a)(rt),[Ce]):sn=[Ce],Nn(sn);var Un=Object(ve.a)(Object(ve.a)({},Z),{},{selectedKeys:sn});ze?be==null||be(Un):We==null||We(Un)}},Ot=nt(function(te){an==null||an(et(te)),Ft(te)}),st=nt(function(te,Z){var Ce=Fn.filter(function(sn){return sn!==te});if(Z)Ce.push(te);else if(nn!=="inline"){var ze=gt(te);Ce=Ce.filter(function(sn){return!ze.has(sn)})}d()(Fn,Ce)||(gn(Ce),Ze==null||Ze(Ce))}),kn=nt(Dn),ut=function(Z,Ce){var ze=Ce!=null?Ce:!Fn.includes(Z);st(Z,ze)},ot=Ma(nn,yt,Pn,rn,wn,Zn,tn,lt,ut,dn);n.useEffect(function(){Jn(!0)},[]);var Rt=nn!=="horizontal"||z?Ge:Ge.map(function(te,Z){return n.createElement(En,{key:te.key,overflowDisabled:Z>qe},te)}),St=n.createElement(v,Object(W.a)({id:J,ref:wn,prefixCls:"".concat(y,"-overflow"),component:"ul",itemComponent:Dt,className:Pe()(y,"".concat(y,"-root"),"".concat(y,"-").concat(nn),R,(b={},Object(de.a)(b,"".concat(y,"-inline-collapsed"),ln),Object(de.a)(b,"".concat(y,"-rtl"),Pn),b)),dir:G,style:O,role:"menu",tabIndex:$,data:Rt,renderRawItem:function(Z){return Z},renderRawRest:function(Z){var Ce=Z.length,ze=Ce?Ge.slice(-Ce):null;return n.createElement(Yt,{eventKey:Nt,title:Le,disabled:Gn,internalPopupClose:Ce===0},ze)},maxCount:nn!=="horizontal"||z?v.INVALIDATE:v.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(Z){He(Z)},onKeyDown:ot},Be));return n.createElement(xt.Provider,{value:rn},n.createElement(En,{prefixCls:y,mode:nn,openKeys:Fn,rtl:Pn,disabled:ue,motion:Mn?Ne:null,defaultMotions:Mn?Ie:null,activeKey:yt,onActive:Et,onInactive:$t,selectedKeys:rt,inlineIndent:Ke,subMenuOpenDelay:re,subMenuCloseDelay:se,forceSubMenuRender:k,builtinPlacements:_e,triggerSubMenuAction:$e,getPopupContainer:kn,itemIcon:Ve,expandIcon:xe,onItemClick:Ot,onOpenChange:st},n.createElement(Je.Provider,{value:Wt},St),n.createElement(fe.Provider,{value:wt},Ge)))},xa=Ua,za=function(i){var c=i.className,b=i.title,C=i.eventKey,y=i.children,O=Object(Re.a)(i,["className","title","eventKey","children"]),R=n.useContext(Ae),w=R.prefixCls,$="".concat(w,"-item-group");return n.createElement("li",Object(W.a)({},O,{onClick:function(G){return G.stopPropagation()},className:Pe()($,c)}),n.createElement("div",{className:"".concat($,"-title"),title:typeof b=="string"?b:void 0},b),n.createElement("ul",{className:"".concat($,"-list")},y))};function Ja(t){var i=t.children,c=Object(Re.a)(t,["children"]),b=Ue(c.eventKey),C=Pt(i,b),y=_();return y?C:n.createElement(za,c,C)}function Ga(t){var i=t.className,c=t.style,b=n.useContext(Ae),C=b.prefixCls,y=_();return y?null:n.createElement("li",{className:Pe()("".concat(C,"-item-divider"),i),style:c})}var it=xa;it.Item=Dt,it.SubMenu=Yt,it.ItemGroup=Ja,it.Divider=Ga;var Ha=it,Qa=e("eDIo");function Xa(t,i){var c=t.prefixCls,b=t.editable,C=t.locale,y=t.style;return!b||b.showAdd===!1?null:n.createElement("button",{ref:i,type:"button",className:"".concat(c,"-nav-add"),style:y,"aria-label":(C==null?void 0:C.addAriaLabel)||"Add tab",onClick:function(R){b.onEdit("add",{event:R})}},b.addIcon||"+")}var aa=n.forwardRef(Xa);function Ya(t,i){var c=t.prefixCls,b=t.id,C=t.tabs,y=t.locale,O=t.mobile,R=t.moreIcon,w=R===void 0?"More":R,$=t.moreTransitionName,V=t.style,G=t.className,J=t.editable,le=t.tabBarGutter,Q=t.rtl,X=t.onTabClick,ue=Object(n.useState)(!1),z=Object(L.a)(ue,2),q=z[0],re=z[1],Y=Object(n.useState)(null),se=Object(L.a)(Y,2),k=se[0],Ee=se[1],ee="".concat(b,"-more-popup"),ce="".concat(c,"-dropdown"),me=k!==null?"".concat(ee,"-").concat(k):null,ie=y==null?void 0:y.dropdownAriaLabel,H=n.createElement(Ha,{onClick:function(Fe){var Ke=Fe.key,Ne=Fe.domEvent;X(Ke,Ne),re(!1)},id:ee,tabIndex:-1,role:"listbox","aria-activedescendant":me,selectedKeys:[k],"aria-label":ie!==void 0?ie:"expanded dropdown"},C.map(function(be){return n.createElement(Dt,{key:be.key,id:"".concat(ee,"-").concat(be.key),role:"option","aria-controls":b&&"".concat(b,"-panel-").concat(be.key),disabled:be.disabled},be.tab)}));function oe(be){for(var Fe=C.filter(function($e){return!$e.disabled}),Ke=Fe.findIndex(function($e){return $e.key===k})||0,Ne=Fe.length,Ie=0;Ie<Ne;Ie+=1){Ke=(Ke+be+Ne)%Ne;var je=Fe[Ke];if(!je.disabled){Ee(je.key);return}}}function ge(be){var Fe=be.which;if(!q){[we.a.DOWN,we.a.SPACE,we.a.ENTER].includes(Fe)&&(re(!0),be.preventDefault());return}switch(Fe){case we.a.UP:oe(-1),be.preventDefault();break;case we.a.DOWN:oe(1),be.preventDefault();break;case we.a.ESC:re(!1);break;case we.a.SPACE:case we.a.ENTER:k!==null&&X(k,be);break}}Object(n.useEffect)(function(){var be=document.getElementById(me);be&&be.scrollIntoView&&be.scrollIntoView(!1)},[k]),Object(n.useEffect)(function(){q||Ee(null)},[q]);var he=Object(de.a)({},Q?"marginLeft":"marginRight",le);C.length||(he.visibility="hidden",he.order=1);var Oe=Pe()(Object(de.a)({},"".concat(ce,"-rtl"),Q)),We=O?null:n.createElement(Qa.default,{prefixCls:ce,overlay:H,trigger:["hover"],visible:q,transitionName:$,onVisibleChange:re,overlayClassName:Oe,mouseEnterDelay:.1,mouseLeaveDelay:.1},n.createElement("button",{type:"button",className:"".concat(c,"-nav-more"),style:he,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":ee,id:"".concat(b,"-more"),"aria-expanded":q,onKeyDown:ge},w));return n.createElement("div",{className:Pe()("".concat(c,"-nav-operations"),G),style:V,ref:i},We,n.createElement(aa,{prefixCls:c,locale:y,editable:J}))}var Za=n.forwardRef(Ya),Tt=Object(n.createContext)(null),ka=.1,ra=.01,ht=20,ia=Math.pow(.995,ht);function qa(t,i){var c=Object(n.useState)(),b=Object(L.a)(c,2),C=b[0],y=b[1],O=Object(n.useState)(0),R=Object(L.a)(O,2),w=R[0],$=R[1],V=Object(n.useState)(0),G=Object(L.a)(V,2),J=G[0],le=G[1],Q=Object(n.useState)(),X=Object(L.a)(Q,2),ue=X[0],z=X[1],q=Object(n.useRef)();function re(ce){var me=ce.touches[0],ie=me.screenX,H=me.screenY;y({x:ie,y:H}),window.clearInterval(q.current)}function Y(ce){if(!!C){ce.preventDefault();var me=ce.touches[0],ie=me.screenX,H=me.screenY;y({x:ie,y:H});var oe=ie-C.x,ge=H-C.y;i(oe,ge);var he=Date.now();$(he),le(he-w),z({x:oe,y:ge})}}function se(){if(!!C&&(y(null),z(null),ue)){var ce=ue.x/J,me=ue.y/J,ie=Math.abs(ce),H=Math.abs(me);if(Math.max(ie,H)<ka)return;var oe=ce,ge=me;q.current=window.setInterval(function(){if(Math.abs(oe)<ra&&Math.abs(ge)<ra){window.clearInterval(q.current);return}oe*=ia,ge*=ia,i(oe*ht,ge*ht)},ht)}}var k=Object(n.useRef)();function Ee(ce){var me=ce.deltaX,ie=ce.deltaY,H=0,oe=Math.abs(me),ge=Math.abs(ie);oe===ge?H=k.current==="x"?me:ie:oe>ge?(H=me,k.current="x"):(H=ie,k.current="y"),i(-H,-H)&&ce.preventDefault()}var ee=Object(n.useRef)(null);ee.current={onTouchStart:re,onTouchMove:Y,onTouchEnd:se,onWheel:Ee},n.useEffect(function(){function ce(oe){ee.current.onTouchStart(oe)}function me(oe){ee.current.onTouchMove(oe)}function ie(oe){ee.current.onTouchEnd(oe)}function H(oe){ee.current.onWheel(oe)}return document.addEventListener("touchmove",me,{passive:!1}),document.addEventListener("touchend",ie,{passive:!1}),t.current.addEventListener("touchstart",ce,{passive:!1}),t.current.addEventListener("wheel",H),function(){document.removeEventListener("touchmove",me),document.removeEventListener("touchend",ie)}},[])}function _a(){var t=Object(n.useRef)(new Map);function i(b){return t.current.has(b)||t.current.set(b,n.createRef()),t.current.get(b)}function c(b){t.current.delete(b)}return[i,c]}function la(t,i){var c=n.useRef(t),b=n.useState({}),C=Object(L.a)(b,2),y=C[1];function O(R){var w=typeof R=="function"?R(c.current):R;w!==c.current&&i(w,c.current),c.current=w,y({})}return[c.current,O]}var sa=function(i){var c=i.position,b=i.prefixCls,C=i.extra;if(!C)return null;var y,O=C;return c==="right"&&(y=O.right||!O.left&&O||null),c==="left"&&(y=O.left||null),y?n.createElement("div",{className:"".concat(b,"-extra-content")},y):null};function er(t,i){var c,b=n.useContext(Tt),C=b.prefixCls,y=b.tabs,O=t.className,R=t.style,w=t.id,$=t.animated,V=t.activeKey,G=t.rtl,J=t.extra,le=t.editable,Q=t.locale,X=t.tabPosition,ue=t.tabBarGutter,z=t.children,q=t.onTabClick,re=t.onTabScroll,Y=Object(n.useRef)(),se=Object(n.useRef)(),k=Object(n.useRef)(),Ee=Object(n.useRef)(),ee=_a(),ce=Object(L.a)(ee,2),me=ce[0],ie=ce[1],H=X==="top"||X==="bottom",oe=la(0,function(te,Z){H&&re&&re({direction:te>Z?"left":"right"})}),ge=Object(L.a)(oe,2),he=ge[0],Oe=ge[1],We=la(0,function(te,Z){!H&&re&&re({direction:te>Z?"top":"bottom"})}),be=Object(L.a)(We,2),Fe=be[0],Ke=be[1],Ne=Object(n.useState)(0),Ie=Object(L.a)(Ne,2),je=Ie[0],$e=Ie[1],_e=Object(n.useState)(0),Ve=Object(L.a)(_e,2),xe=Ve[0],Xe=Ve[1],Le=Object(n.useState)(0),Dn=Object(L.a)(Le,2),an=Dn[0],Ze=Dn[1],dn=Object(n.useState)(0),bn=Object(L.a)(dn,2),Cn=bn[0],Be=bn[1],Ge=Object(n.useState)(null),en=Object(L.a)(Ge,2),ke=en[0],Mn=en[1],Jn=Object(n.useState)(null),wn=Object(L.a)(Jn,2),rn=wn[0],Pn=wn[1],cn=Object(n.useState)(0),jn=Object(L.a)(cn,2),nn=jn[0],ln=jn[1],An=Object(n.useState)(0),fn=Object(L.a)(An,2),qe=fn[0],He=fn[1],Gn=Sn(new Map),Hn=Object(L.a)(Gn,2),tt=Hn[0],Fn=Hn[1],gn=ct(y,tt,je),Qn="".concat(C,"-nav-operations-hidden"),On=0,pn=0;H?G?(On=0,pn=Math.max(0,je-ke)):(On=Math.min(0,ke-je),pn=0):(On=Math.min(0,rn-xe),pn=0);function Xn(te){return te<On?On:te>pn?pn:te}var In=Object(n.useRef)(),Yn=Object(n.useState)(),mn=Object(L.a)(Yn,2),Bn=mn[0],pe=mn[1];function Se(){pe(Date.now())}function Me(){window.clearTimeout(In.current)}qa(Y,function(te,Z){function Ce(ze,sn){ze(function(Un){var qn=Xn(Un+sn);return qn})}if(H){if(ke>=je)return!1;Ce(Oe,te)}else{if(rn>=xe)return!1;Ce(Ke,Z)}return Me(),Se(),!0}),Object(n.useEffect)(function(){return Me(),Bn&&(In.current=window.setTimeout(function(){pe(0)},100)),Me},[Bn]);function tn(){var te=arguments.length>0&&arguments[0]!==void 0?arguments[0]:V,Z=gn.get(te)||{width:0,height:0,left:0,right:0,top:0};if(H){var Ce=he;G?Z.right<he?Ce=Z.right:Z.right+Z.width>he+ke&&(Ce=Z.right+Z.width-ke):Z.left<-he?Ce=-Z.left:Z.left+Z.width>-he+ke&&(Ce=-(Z.left+Z.width-ke)),Ke(0),Oe(Xn(Ce))}else{var ze=Fe;Z.top<-Fe?ze=-Z.top:Z.top+Z.height>-Fe+rn&&(ze=-(Z.top+Z.height-rn)),Oe(0),Ke(Xn(ze))}}var Zn=j(gn,{width:ke,height:rn,left:he,top:Fe},{width:an,height:Cn},{width:nn,height:qe},Object(ve.a)(Object(ve.a)({},t),{},{tabs:y})),gt=Object(L.a)(Zn,2),wt=gt[0],Wt=gt[1],Lt=y.map(function(te){var Z=te.key;return n.createElement(Ln,{id:w,prefixCls:C,key:Z,rtl:G,tab:te,closable:te.closable,editable:le,active:Z===V,tabPosition:X,tabBarGutter:ue,renderWrapper:z,removeAriaLabel:Q==null?void 0:Q.removeAriaLabel,ref:me(Z),onClick:function(ze){q(Z,ze)},onRemove:function(){ie(Z)},onFocus:function(){tn(Z),Se(),G||(Y.current.scrollLeft=0),Y.current.scrollTop=0}})}),at=Kn(function(){var te,Z,Ce,ze,sn,Un,qn,Vt,Ut,ur=((te=Y.current)===null||te===void 0?void 0:te.offsetWidth)||0,or=((Z=Y.current)===null||Z===void 0?void 0:Z.offsetHeight)||0,ma=((Ce=Ee.current)===null||Ce===void 0?void 0:Ce.offsetWidth)||0,fa=((ze=Ee.current)===null||ze===void 0?void 0:ze.offsetHeight)||0,dr=((sn=k.current)===null||sn===void 0?void 0:sn.offsetWidth)||0,cr=((Un=k.current)===null||Un===void 0?void 0:Un.offsetHeight)||0;Mn(ur),Pn(or),ln(ma),He(fa);var pa=(((qn=se.current)===null||qn===void 0?void 0:qn.offsetWidth)||0)-ma,va=(((Vt=se.current)===null||Vt===void 0?void 0:Vt.offsetHeight)||0)-fa;$e(pa),Xe(va);var ha=(Ut=k.current)===null||Ut===void 0?void 0:Ut.className.includes(Qn);Ze(pa-(ha?0:dr)),Be(va-(ha?0:cr)),Fn(function(){var ga=new Map;return y.forEach(function(mr){var ya=mr.key,dt=me(ya).current;dt&&ga.set(ya,{width:dt.offsetWidth,height:dt.offsetHeight,left:dt.offsetLeft,top:dt.offsetTop})}),ga})}),yt=y.slice(0,wt),lt=y.slice(Wt+1),Et=[].concat(Object(vn.a)(yt),Object(vn.a)(lt)),$t=Object(n.useState)(),bt=Object(L.a)($t,2),Ct=bt[0],rt=bt[1],Nn=gn.get(V),Ft=Object(n.useRef)();function Ot(){Ye.a.cancel(Ft.current)}Object(n.useEffect)(function(){var te={};return Nn&&(H?(G?te.right=Nn.right:te.left=Nn.left,te.width=Nn.width):(te.top=Nn.top,te.height=Nn.height)),Ot(),Ft.current=Object(Ye.a)(function(){rt(te)}),Ot},[Nn,H,G]),Object(n.useEffect)(function(){tn()},[V,Nn,gn,H]),Object(n.useEffect)(function(){at()},[G,ue,V,y.map(function(te){return te.key}).join("_")]);var st=!!Et.length,kn="".concat(C,"-nav-wrap"),ut,ot,Rt,St;return H?G?(ot=he>0,ut=he+ke<je):(ut=he<0,ot=-he+ke<je):(Rt=Fe<0,St=-Fe+rn<xe),n.createElement("div",{ref:i,role:"tablist",className:Pe()("".concat(C,"-nav"),O),style:R,onKeyDown:function(){Se()}},n.createElement(sa,{position:"left",extra:J,prefixCls:C}),n.createElement(Wn.default,{onResize:at},n.createElement("div",{className:Pe()(kn,(c={},Object(de.a)(c,"".concat(kn,"-ping-left"),ut),Object(de.a)(c,"".concat(kn,"-ping-right"),ot),Object(de.a)(c,"".concat(kn,"-ping-top"),Rt),Object(de.a)(c,"".concat(kn,"-ping-bottom"),St),c)),ref:Y},n.createElement(Wn.default,{onResize:at},n.createElement("div",{ref:se,className:"".concat(C,"-nav-list"),style:{transform:"translate(".concat(he,"px, ").concat(Fe,"px)"),transition:Bn?"none":void 0}},Lt,n.createElement(aa,{ref:Ee,prefixCls:C,locale:Q,editable:le,style:{visibility:st?"hidden":null}}),n.createElement("div",{className:Pe()("".concat(C,"-ink-bar"),Object(de.a)({},"".concat(C,"-ink-bar-animated"),$.inkBar)),style:Ct}))))),n.createElement(Za,Object(W.a)({},t,{ref:k,prefixCls:C,tabs:Et,className:!st&&Qn})),n.createElement(sa,{position:"right",extra:J,prefixCls:C}))}var ua=n.forwardRef(er);function nr(t){var i=t.id,c=t.activeKey,b=t.animated,C=t.tabPosition,y=t.rtl,O=t.destroyInactiveTabPane,R=n.useContext(Tt),w=R.prefixCls,$=R.tabs,V=b.tabPane,G=$.findIndex(function(J){return J.key===c});return n.createElement("div",{className:Pe()("".concat(w,"-content-holder"))},n.createElement("div",{className:Pe()("".concat(w,"-content"),"".concat(w,"-content-").concat(C),Object(de.a)({},"".concat(w,"-content-animated"),V)),style:G&&V?Object(de.a)({},y?"marginRight":"marginLeft","-".concat(G,"00%")):null},$.map(function(J){return n.cloneElement(J.node,{key:J.key,prefixCls:w,tabKey:J.key,id:i,animated:V,active:J.key===c,destroyInactiveTabPane:O})})))}function oa(t){var i=t.prefixCls,c=t.forceRender,b=t.className,C=t.style,y=t.id,O=t.active,R=t.animated,w=t.destroyInactiveTabPane,$=t.tabKey,V=t.children,G=n.useState(c),J=Object(L.a)(G,2),le=J[0],Q=J[1];n.useEffect(function(){O?Q(!0):w&&Q(!1)},[O,w]);var X={};return O||(R?(X.visibility="hidden",X.height=0,X.overflowY="hidden"):X.display="none"),n.createElement("div",{id:y&&"".concat(y,"-panel-").concat($),role:"tabpanel",tabIndex:O?0:-1,"aria-labelledby":y&&"".concat(y,"-tab-").concat($),"aria-hidden":!O,style:Object(ve.a)(Object(ve.a)({},X),C),className:Pe()("".concat(i,"-tabpane"),O&&"".concat(i,"-tabpane-active"),b)},(O||le||c)&&V)}var da=0;function tr(t){return Object(on.a)(t).map(function(i){if(n.isValidElement(i)){var c=i.key!==void 0?String(i.key):void 0;return Object(ve.a)(Object(ve.a)({key:c},i.props),{},{node:i})}return null}).filter(function(i){return i})}function ar(t,i){var c,b=t.id,C=t.prefixCls,y=C===void 0?"rc-tabs":C,O=t.className,R=t.children,w=t.direction,$=t.activeKey,V=t.defaultActiveKey,G=t.editable,J=t.animated,le=J===void 0?{inkBar:!0,tabPane:!1}:J,Q=t.tabPosition,X=Q===void 0?"top":Q,ue=t.tabBarGutter,z=t.tabBarStyle,q=t.tabBarExtraContent,re=t.locale,Y=t.moreIcon,se=t.moreTransitionName,k=t.destroyInactiveTabPane,Ee=t.renderTabBar,ee=t.onChange,ce=t.onTabClick,me=t.onTabScroll,ie=Object(Re.a)(t,["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"]),H=tr(R),oe=w==="rtl",ge;le===!1?ge={inkBar:!1,tabPane:!1}:le===!0?ge={inkBar:!0,tabPane:!0}:ge=Object(ve.a)({inkBar:!0,tabPane:!1},Object(Qe.a)(le)==="object"?le:{});var he=Object(n.useState)(!1),Oe=Object(L.a)(he,2),We=Oe[0],be=Oe[1];Object(n.useEffect)(function(){be(Object(Tn.a)())},[]);var Fe=Object(Rn.a)(function(){var Be;return(Be=H[0])===null||Be===void 0?void 0:Be.key},{value:$,defaultValue:V}),Ke=Object(L.a)(Fe,2),Ne=Ke[0],Ie=Ke[1],je=Object(n.useState)(function(){return H.findIndex(function(Be){return Be.key===Ne})}),$e=Object(L.a)(je,2),_e=$e[0],Ve=$e[1];Object(n.useEffect)(function(){var Be=H.findIndex(function(en){return en.key===Ne});if(Be===-1){var Ge;Be=Math.max(0,Math.min(_e,H.length-1)),Ie((Ge=H[Be])===null||Ge===void 0?void 0:Ge.key)}Ve(Be)},[H.map(function(Be){return Be.key}).join("_"),Ne,_e]);var xe=Object(Rn.a)(null,{value:b}),Xe=Object(L.a)(xe,2),Le=Xe[0],Dn=Xe[1],an=X;We&&!["left","right"].includes(X)&&(an="top"),Object(n.useEffect)(function(){b||(Dn("rc-tabs-".concat(da)),da+=1)},[]);function Ze(Be,Ge){ce==null||ce(Be,Ge),Ie(Be),ee==null||ee(Be)}var dn={id:Le,activeKey:Ne,animated:ge,tabPosition:an,rtl:oe,mobile:We},bn,Cn=Object(ve.a)(Object(ve.a)({},dn),{},{editable:G,locale:re,moreIcon:Y,moreTransitionName:se,tabBarGutter:ue,onTabClick:Ze,onTabScroll:me,extra:q,style:z,panes:R});return Ee?bn=Ee(Cn,ua):bn=n.createElement(ua,Cn),n.createElement(Tt.Provider,{value:{tabs:H,prefixCls:y}},n.createElement("div",Object(W.a)({ref:i,id:b,className:Pe()(y,"".concat(y,"-").concat(an),(c={},Object(de.a)(c,"".concat(y,"-mobile"),We),Object(de.a)(c,"".concat(y,"-editable"),G),Object(de.a)(c,"".concat(y,"-rtl"),oe),c),O)},ie),bn,n.createElement(nr,Object(W.a)({destroyInactiveTabPane:k},dn,{animated:ge}))))}var ca=n.forwardRef(ar);ca.TabPane=oa;var rr=ca,ir=rr,Kt=e("MZF8"),hn=e("dEAq"),lr=e("ZpkN"),Er=e("TIsu");function Mt(t,i){var c,b=(c=t.match(/\.(\w+)$/))===null||c===void 0?void 0:c[1];return b||(b=i.tsx?"tsx":"jsx"),b}var sr=t=>{var i,c,b,C=Object(n.useRef)(),y=Object(n.useContext)(hn.context),O=y.locale,R=Object(hn.useLocaleProps)(O,t),w=Object(hn.useDemoUrl)(R.identifier),$=R.demoUrl||w,V=(Kt.a===null||Kt.a===void 0?void 0:Kt.a.location.hash)==="#".concat(R.identifier),G=Object.keys(R.sources).length===1,J=Object(hn.useCodeSandbox)((i=R.hideActions)!==null&&i!==void 0&&i.includes("CSB")?null:R),le=Object(hn.useRiddle)((c=R.hideActions)!==null&&c!==void 0&&c.includes("RIDDLE")?null:R),Q=Object(hn.useMotions)(R.motions||[],C.current),X=Object(x.default)(Q,2),ue=X[0],z=X[1],q=Object(hn.useCopy)(),re=Object(x.default)(q,2),Y=re[0],se=re[1],k=Object(n.useState)("_"),Ee=Object(x.default)(k,2),ee=Ee[0],ce=Ee[1],me=Object(n.useState)(Mt(ee,R.sources[ee])),ie=Object(x.default)(me,2),H=ie[0],oe=ie[1],ge=Object(n.useState)(Boolean(R.defaultShowCode)),he=Object(x.default)(ge,2),Oe=he[0],We=he[1],be=Object(n.useState)(Math.random()),Fe=Object(x.default)(be,2),Ke=Fe[0],Ne=Fe[1],Ie=R.sources[ee][H]||R.sources[ee].content,je=Object(hn.useTSPlaygroundUrl)(O,Ie),$e=Object(n.useRef)(),_e=Object(hn.usePrefersColor)(),Ve=Object(x.default)(_e,1),xe=Ve[0];Object(n.useEffect)(()=>{Ne(Math.random())},[xe]);function Xe(Le){ce(Le),oe(Mt(Le,R.sources[Le]))}return f.a.createElement("div",{style:R.style,className:[R.className,"__dumi-default-previewer",V?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:R.identifier,"data-debug":R.debug||void 0,"data-iframe":R.iframe||void 0},R.iframe&&f.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),f.a.createElement("div",{ref:C,className:"__dumi-default-previewer-demo",style:{transform:R.transform?"translate(0, 0)":void 0,padding:R.compact||R.iframe&&R.compact!==!1?"0":void 0,background:R.background}},R.iframe?f.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(R.iframe).replace(/(\d)$/,"$1px")},key:Ke,src:$,ref:$e}):R.children),f.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":R.title},R.title&&f.a.createElement(hn.AnchorLink,{to:"#".concat(R.identifier)},R.title),R.description&&f.a.createElement("div",{dangerouslySetInnerHTML:{__html:R.description}})),f.a.createElement("div",{className:"__dumi-default-previewer-actions"},J&&f.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:J}),le&&f.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:le}),R.motions&&f.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:z,onClick:()=>ue()}),R.iframe&&f.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:()=>Ne(Math.random())}),!((b=R.hideActions)!==null&&b!==void 0&&b.includes("EXTERNAL"))&&f.a.createElement(hn.Link,{target:"_blank",to:$},f.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),f.a.createElement("span",null),f.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":se,onClick:()=>Y(Ie)}),H==="tsx"&&Oe&&f.a.createElement(hn.Link,{target:"_blank",to:je},f.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),f.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(Oe?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:()=>We(!Oe)})),Oe&&f.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!G&&f.a.createElement(ir,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xB7\xB7\xB7",defaultActiveKey:ee,onChange:Xe},Object.keys(R.sources).map(Le=>f.a.createElement(oa,{tab:Le==="_"?"index.".concat(Mt(Le,R.sources[Le])):Le,key:Le}))),f.a.createElement("div",{className:"__dumi-default-previewer-source"},f.a.createElement(lr.a,{code:Ie,lang:H,showCopy:!1}))))},br=un.default=sr},"80pN":function(yn,un,e){"use strict";(function(x){/** @license React v16.14.0
* react-dom-test-utils.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var n=e("MgzW"),f=e("q1tI"),W=e("i8i4"),de=e("QCnb");function L(m){for(var A="https://reactjs.org/docs/error-decoder.html?invariant="+m,K=1;K<arguments.length;K++)A+="&args[]="+encodeURIComponent(arguments[K]);return"Minified React error #"+m+"; visit "+A+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Qe=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;Qe.hasOwnProperty("ReactCurrentDispatcher")||(Qe.ReactCurrentDispatcher={current:null}),Qe.hasOwnProperty("ReactCurrentBatchConfig")||(Qe.ReactCurrentBatchConfig={suspense:null});function Re(m){var A=m,K=m;if(m.alternate)for(;A.return;)A=A.return;else{m=A;do A=m,(A.effectTag&1026)!=0&&(K=A.return),m=A.return;while(m)}return A.tag===3?K:null}function ve(m){if(Re(m)!==m)throw Error(L(188))}function xn(m){var A=m.alternate;if(!A){if(A=Re(m),A===null)throw Error(L(188));return A!==m?null:m}for(var K=m,fe=A;;){var _=K.return;if(_===null)break;var De=_.alternate;if(De===null){if(fe=_.return,fe!==null){K=fe;continue}break}if(_.child===De.child){for(De=_.child;De;){if(De===K)return ve(_),m;if(De===fe)return ve(_),A;De=De.sibling}throw Error(L(188))}if(K.return!==fe.return)K=_,fe=De;else{for(var Ue=!1,Je=_.child;Je;){if(Je===K){Ue=!0,K=_,fe=De;break}if(Je===fe){Ue=!0,fe=_,K=De;break}Je=Je.sibling}if(!Ue){for(Je=De.child;Je;){if(Je===K){Ue=!0,K=De,fe=_;break}if(Je===fe){Ue=!0,fe=De,K=_;break}Je=Je.sibling}if(!Ue)throw Error(L(189))}}if(K.alternate!==fe)throw Error(L(190))}if(K.tag!==3)throw Error(L(188));return K.stateNode.current===K?m:A}function Pe(){return!0}function on(){return!1}function Tn(m,A,K,fe){this.dispatchConfig=m,this._targetInst=A,this.nativeEvent=K,m=this.constructor.Interface;for(var _ in m)m.hasOwnProperty(_)&&((A=m[_])?this[_]=A(K):_==="target"?this.target=fe:this[_]=K[_]);return this.isDefaultPrevented=(K.defaultPrevented!=null?K.defaultPrevented:K.returnValue===!1)?Pe:on,this.isPropagationStopped=on,this}n(Tn.prototype,{preventDefault:function(){this.defaultPrevented=!0;var m=this.nativeEvent;m&&(m.preventDefault?m.preventDefault():typeof m.returnValue!="unknown"&&(m.returnValue=!1),this.isDefaultPrevented=Pe)},stopPropagation:function(){var m=this.nativeEvent;m&&(m.stopPropagation?m.stopPropagation():typeof m.cancelBubble!="unknown"&&(m.cancelBubble=!0),this.isPropagationStopped=Pe)},persist:function(){this.isPersistent=Pe},isPersistent:on,destructor:function(){var m=this.constructor.Interface,A;for(A in m)this[A]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=on,this._dispatchInstances=this._dispatchListeners=null}}),Tn.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(m){return m.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null},Tn.extend=function(m){function A(){}function K(){return fe.apply(this,arguments)}var fe=this;A.prototype=fe.prototype;var _=new A;return n(_,K.prototype),K.prototype=_,K.prototype.constructor=K,K.Interface=n({},fe.Interface,m),K.extend=fe.extend,Ye(K),K},Ye(Tn);function Rn(m,A,K,fe){if(this.eventPool.length){var _=this.eventPool.pop();return this.call(_,m,A,K,fe),_}return new this(m,A,K,fe)}function vn(m){if(!(m instanceof this))throw Error(L(279));m.destructor(),10>this.eventPool.length&&this.eventPool.push(m)}function Ye(m){m.eventPool=[],m.getPooled=Rn,m.release=vn}var Wn=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined");function Kn(m,A){var K={};return K[m.toLowerCase()]=A.toLowerCase(),K["Webkit"+m]="webkit"+A,K["Moz"+m]="moz"+A,K}var Sn={animationend:Kn("Animation","AnimationEnd"),animationiteration:Kn("Animation","AnimationIteration"),animationstart:Kn("Animation","AnimationStart"),transitionend:Kn("Transition","TransitionEnd")},we={},zn={};Wn&&(zn=document.createElement("div").style,"AnimationEvent"in window||(delete Sn.animationend.animation,delete Sn.animationiteration.animation,delete Sn.animationstart.animation),"TransitionEvent"in window||delete Sn.transitionend.transition);function Ln(m){if(we[m])return we[m];if(!Sn[m])return m;var A=Sn[m],K;for(K in A)if(A.hasOwnProperty(K)&&K in zn)return we[m]=A[K];return m}var _n=Ln("animationend"),ct=Ln("animationiteration"),D=Ln("animationstart"),j=Ln("transitionend"),S=null;function d(m){if(S===null)try{var A=("require"+Math.random()).slice(0,7);S=(x&&x[A])("timers").setImmediate}catch(K){S=function(fe){var _=new MessageChannel;_.port1.onmessage=fe,_.port2.postMessage(void 0)}}return S(m)}var s=W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,h=s[11],E=s[12],F=W.unstable_batchedUpdates,a=Qe.IsSomeRendererActing,u=typeof de.unstable_flushAllWithoutAsserting=="function",l=de.unstable_flushAllWithoutAsserting||function(){for(var m=!1;h();)m=!0;return m};function N(m){try{l(),d(function(){l()?N(m):m()})}catch(A){m(A)}}var I=0,P=!1,o=W.findDOMNode,B=W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,p=B[0],r=B[4],g=B[5],v=B[6],T=B[7],M=B[8],U=B[9],ne=B[10];function ae(){}function ye(m,A){if(!m)return[];if(m=xn(m),!m)return[];for(var K=m,fe=[];;){if(K.tag===5||K.tag===6||K.tag===1||K.tag===0){var _=K.stateNode;A(_)&&fe.push(_)}if(K.child)K.child.return=K,K=K.child;else{if(K===m)return fe;for(;!K.sibling;){if(!K.return||K.return===m)return fe;K=K.return}K.sibling.return=K.return,K=K.sibling}}}function Ae(m,A){if(m&&!m._reactInternalFiber){var K=""+m;throw m=Array.isArray(m)?"an array":m&&m.nodeType===1&&m.tagName?"a DOM node":K==="[object Object]"?"object with keys {"+Object.keys(m).join(", ")+"}":K,Error(L(286,A,m))}}var Te={renderIntoDocument:function(m){var A=document.createElement("div");return W.render(m,A)},isElement:function(m){return f.isValidElement(m)},isElementOfType:function(m,A){return f.isValidElement(m)&&m.type===A},isDOMComponent:function(m){return!(!m||m.nodeType!==1||!m.tagName)},isDOMComponentElement:function(m){return!!(m&&f.isValidElement(m)&&m.tagName)},isCompositeComponent:function(m){return Te.isDOMComponent(m)?!1:m!=null&&typeof m.render=="function"&&typeof m.setState=="function"},isCompositeComponentWithType:function(m,A){return Te.isCompositeComponent(m)?m._reactInternalFiber.type===A:!1},findAllInRenderedTree:function(m,A){return Ae(m,"findAllInRenderedTree"),m?ye(m._reactInternalFiber,A):[]},scryRenderedDOMComponentsWithClass:function(m,A){return Ae(m,"scryRenderedDOMComponentsWithClass"),Te.findAllInRenderedTree(m,function(K){if(Te.isDOMComponent(K)){var fe=K.className;typeof fe!="string"&&(fe=K.getAttribute("class")||"");var _=fe.split(/\s+/);if(!Array.isArray(A)){if(A===void 0)throw Error(L(11));A=A.split(/\s+/)}return A.every(function(De){return _.indexOf(De)!==-1})}return!1})},findRenderedDOMComponentWithClass:function(m,A){if(Ae(m,"findRenderedDOMComponentWithClass"),m=Te.scryRenderedDOMComponentsWithClass(m,A),m.length!==1)throw Error("Did not find exactly one match (found: "+m.length+") for class:"+A);return m[0]},scryRenderedDOMComponentsWithTag:function(m,A){return Ae(m,"scryRenderedDOMComponentsWithTag"),Te.findAllInRenderedTree(m,function(K){return Te.isDOMComponent(K)&&K.tagName.toUpperCase()===A.toUpperCase()})},findRenderedDOMComponentWithTag:function(m,A){if(Ae(m,"findRenderedDOMComponentWithTag"),m=Te.scryRenderedDOMComponentsWithTag(m,A),m.length!==1)throw Error("Did not find exactly one match (found: "+m.length+") for tag:"+A);return m[0]},scryRenderedComponentsWithType:function(m,A){return Ae(m,"scryRenderedComponentsWithType"),Te.findAllInRenderedTree(m,function(K){return Te.isCompositeComponentWithType(K,A)})},findRenderedComponentWithType:function(m,A){if(Ae(m,"findRenderedComponentWithType"),m=Te.scryRenderedComponentsWithType(m,A),m.length!==1)throw Error("Did not find exactly one match (found: "+m.length+") for componentType:"+A);return m[0]},mockComponent:function(m,A){return A=A||m.mockTagName||"div",m.prototype.render.mockImplementation(function(){return f.createElement(A,null,this.props.children)}),this},nativeTouchData:function(m,A){return{touches:[{pageX:m,pageY:A}]}},Simulate:null,SimulateNative:{},act:function(m){function A(){I--,a.current=K,E.current=fe}P===!1&&(P=!0,console.error("act(...) is not supported in production builds of React, and might not behave as expected.")),I++;var K=a.current,fe=E.current;a.current=!0,E.current=!0;try{var _=F(m)}catch(De){throw A(),De}if(_!==null&&typeof _=="object"&&typeof _.then=="function")return{then:function(De,Ue){_.then(function(){1<I||u===!0&&K===!0?(A(),De()):N(function(Je){A(),Je?Ue(Je):De()})},function(Je){A(),Ue(Je)})}};try{I!==1||u!==!1&&K!==!1||l(),A()}catch(De){throw A(),De}return{then:function(De){De()}}}};function En(m){return function(A,K){if(f.isValidElement(A))throw Error(L(228));if(Te.isCompositeComponent(A))throw Error(L(229));var fe=r[m],_=new ae;_.target=A,_.type=m.toLowerCase();var De=p(A),Ue=new Tn(fe,De,_,A);Ue.persist(),n(Ue,K),fe.phasedRegistrationNames?g(Ue):v(Ue),W.unstable_batchedUpdates(function(){T(A),ne(Ue)}),M()}}Te.Simulate={};for(var $n in r)Te.Simulate[$n]=En($n);function et(m,A){return function(K,fe){var _=new ae(m);n(_,fe),Te.isDOMComponent(K)?(K=o(K),_.target=K,U(A,1,document,_)):K.tagName&&(_.target=K,U(A,1,document,_))}}[["abort","abort"],[_n,"animationEnd"],[ct,"animationIteration"],[D,"animationStart"],["blur","blur"],["canplaythrough","canPlayThrough"],["canplay","canPlay"],["cancel","cancel"],["change","change"],["click","click"],["close","close"],["compositionend","compositionEnd"],["compositionstart","compositionStart"],["compositionupdate","compositionUpdate"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["dragstart","dragStart"],["drag","drag"],["drop","drop"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],["ended","ended"],["error","error"],["focus","focus"],["input","input"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["loadstart","loadStart"],["loadstart","loadStart"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["mousedown","mouseDown"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["playing","playing"],["progress","progress"],["ratechange","rateChange"],["scroll","scroll"],["seeked","seeked"],["seeking","seeking"],["selectionchange","selectionChange"],["stalled","stalled"],["suspend","suspend"],["textInput","textInput"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchmove","touchMove"],["touchstart","touchStart"],[j,"transitionEnd"],["volumechange","volumeChange"],["waiting","waiting"],["wheel","wheel"]].forEach(function(m){var A=m[1];Te.SimulateNative[A]=et(A,m[0])}),x.exports=Te.default||Te}).call(this,e("hOG+")(yn))},JjdP:function(yn,un,e){"use strict";e.r(un);var x=e("9og8"),n=e("WmNS"),f=e.n(n),W=e("LtsZ"),de=`import React, { useRef } from 'react';
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

export default Demo;`,Qe=`export const delay = ms => new Promise(res => setTimeout(res, ms));

export const fakeApi = (url, data) => {
  console.group('request:', url);
  console.log('params:', data);
  console.groupEnd();
  return delay(500);
};`,Re=`import React from 'react';
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
};

export const titleTrick = {
  displayType: 'row',
  type: 'object',
  properties: {
    inputName1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      width: '50%',
    },
    desc: {
      type: 'html',
      bind: false,
      default: "\u8865\u5145\u8BF4\u660E <span style='color:red'>hello<span>",
      width: '50%',
    },
  },
};`,xn=`import React, { Component } from 'react';
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
import parseJson from 'json-parse-better-errors';
import FormRender, { useForm } from 'form-render';
import DefaultSchema from './json/simplest.json';
import { Tabs } from 'antd';
import AsyncSelect from './customized/AsyncSelect';
import MonacoEditor from './monaco';
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
          onChange={() => { }}
          className="flex flex-column"
          style={{ overflow: 'auto' }}
        >
          <TabPane tab="Schema" key="1">
            <MonacoEditor
              value={schemaStr}
              onChange={handleCodeChange}
            />
          </TabPane>
          <TabPane tab="Data" key="2">
            <MonacoEditor
              value={schema2str(form.getValues())}
              options={{ readOnly: true }}
            />
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
import MonacoEditor from 'react-monaco-editor';
import { valueMap, keySuggestions } from './suggestionsMap';

const Demo = ({ value, onChange, options }) => {

  const editorWillMount = (monaco) => {
    monaco.languages.registerCompletionItemProvider('json', {
      provideCompletionItems: (model, position) => {

        // \u5F97\u5230\u5192\u53F7\u4E4B\u524D\u7684\u6587\u672C
        var textUntilPosition = model.getValueInRange({
          startLineNumber: position.lineNumber,
          startColumn: 1,
          endLineNumber: position.lineNumber,
          endColumn: position.column
        });

        const word = model.getWordUntilPosition(position);
        const range = {
          startLineNumber: position.lineNumber,
          endLineNumber: position.lineNumber,
          startColumn: word.startColumn,
          endColumn: word.endColumn
        };

        let propKey = '';
        const match = textUntilPosition.match(/[a-z]+(?=["][:])/)
        if (match && match.length) {
          propKey = match[0];
        }

        const suggestions = propKey ? (valueMap(range)[propKey] || []) : keySuggestions(range)

        return { suggestions }

      },
      triggerCharacters: ['"']
    });
  }

  return (
    <MonacoEditor
      height="800px"
      language="json"
      value={value}
      onChange={onChange}
      editorWillMount={editorWillMount}
      options={options}
    />
  );
};

export default Demo;`,vn=`import { monaco } from 'react-monaco-editor'

const valueMap = (range) => {
  return {
    widget: [
      {
        label: 'input',
        insertText: 'input',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u8F93\u5165\u6846'
      },
      {
        label: 'textarea',
        insertText: 'textarea',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u591A\u884C\u8F93\u5165\u6846'
      },
      {
        label: 'date',
        insertText: 'date',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u65E5\u671F\u7EC4\u4EF6'
      },
      {
        label: 'time',
        insertText: 'time',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u65F6\u95F4\u7EC4\u4EF6'
      },
      {
        label: 'dateRange',
        insertText: 'dateRange',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u65E5\u671F\u8303\u56F4'
      },
      {
        label: 'timeRange',
        insertText: 'timeRange',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u65F6\u95F4\u8303\u56F4'
      },
      {
        label: 'checkbox',
        insertText: 'checkbox',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u662F\u5426\u9009\u62E9'
      },
      {
        label: 'select',
        insertText: 'select',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u4E0B\u62C9\u5355\u9009'
      },
      {
        label: 'radio',
        insertText: 'radio',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u70B9\u51FB\u5355\u9009'
      },
      {
        label: 'multiSelect',
        insertText: 'multiSelect',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u4E0B\u62C9\u591A\u9009\u6846'
      },
      {
        label: 'checkboxes',
        insertText: 'checkboxes',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u70B9\u51FB\u591A\u9009\u6846'
      },
      {
        label: 'cascader',
        insertText: 'cascader',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u7EA7\u8054\u9009\u62E9'
      },
      {
        label: 'treeSelect',
        insertText: 'treeSelect',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u6811\u5F62\u9009\u62E9'
      },
      {
        label: 'color',
        insertText: 'color',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u989C\u8272\u9009\u62E9'
      },
      {
        label: 'upload',
        insertText: 'upload',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u4E0A\u4F20\u7EC4\u4EF6'
      },
      {
        label: 'html',
        insertText: 'html',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u6587\u672C\uFF08\u53EA\u8BFB\u5C55\u793A\uFF09'
      },
      {
        label: 'slider',
        insertText: 'slider',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u6ED1\u52A8\u8F93\u5165\u6761'
      },
      {
        label: 'rate',
        insertText: 'rate',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u4E94\u661F\u8BC4\u5206'
      },
      {
        label: 'map',
        insertText: 'map',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u5BF9\u8C61'
      },
      {
        label: 'list0',
        insertText: 'list0',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u5217\u8868(\u590D\u6742\u7ED3\u6784\uFF0C\u4F46item\u6570\u91CF\u4E0D\u5927)'
      },
      {
        label: 'list1',
        insertText: 'list1',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u5217\u8868(\u6BCF\u4E2Aitem\u67091-2\u6761\u6570\u636E\uFF0C\u6CA1\u6709\u590D\u6742\u7ED3\u6784)'
      },
      {
        label: 'list2',
        insertText: 'list2',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u5217\u8868(\u6BCF\u4E2Aitem\u67093-5\u6761\u6570\u636E\uFF0C\u6CA1\u6709\u590D\u6742\u7ED3\u6784)'
      },
      {
        label: 'list3',
        insertText: 'list3',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u5217\u8868(\u6BCF\u4E2Aitem\u6570\u636E\u91CF\u5927\uFF0C\u6216\u8005\u7ED3\u6784\u590D\u6742)'
      },
    ],
    type: [
      {
        label: 'string',
        insertText: 'string',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'string'
      },
      {
        label: 'number',
        insertText: 'number',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'number'
      },
      {
        label: 'boolean',
        insertText: 'boolean',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'boolean'
      },
      {
        label: 'array',
        insertText: 'array',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'array'
      },
      {
        label: 'object',
        insertText: 'object',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'object'
      },
      {
        label: 'range',
        insertText: 'range',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'range'
      },
      {
        label: 'html',
        insertText: 'html',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'html'
      },
    ],
    format: [
      {
        label: 'image',
        insertText: 'image',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'image'
      },
      {
        label: 'textarea',
        insertText: 'textarea',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'textarea'
      },
      {
        label: 'color',
        insertText: 'color',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'color'
      },
      {
        label: 'email',
        insertText: 'email',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'email'
      },
      {
        label: 'url',
        insertText: 'url',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'url'
      },
      {
        label: 'dateTime',
        insertText: 'dateTime',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'dateTime'
      },
      {
        label: 'date',
        insertText: 'date',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'date'
      },
      {
        label: 'time',
        insertText: 'time',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'time'
      },
      {
        label: 'upload',
        insertText: 'upload',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'upload'
      },
    ],
    displayType: [
      {
        label: 'row',
        insertText: 'row',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u5E76\u6392\u5C55\u793A'
      },
      {
        label: 'column',
        insertText: 'column',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u4E24\u6392\u5C55\u793A'
      },
    ]
  }
}

const keySuggestions =(range) => [
  {
    label: 'title',
    insertText: 'title',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u8868\u5355\u7684\u6807\u9898\u4FE1\u606F'
  },
  {
    label: 'description',
    insertText: 'description',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u8868\u5355\u7684\u63CF\u8FF0\u4FE1\u606F'
  },
  {
    label: 'type',
    insertText: 'type',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u7EC4\u4EF6\u503C\u7684\u6570\u636E\u7C7B\u578B'
  },
  {
    label: 'format',
    insertText: 'format',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u8F93\u5165\u6846\u7684\u683C\u5F0F'
  },
  {
    label: 'default',
    insertText: 'default',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u7EC4\u4EF6\u7684\u9ED8\u8BA4\u503C'
  },
  {
    label: 'required',
    insertText: 'required',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u662F\u5426\u5FC5\u586B'
  },
  {
    label: 'placeholder',
    insertText: 'placeholder',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: 'placeholder'
  },
  {
    label: 'bind',
    insertText: 'bind',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: 'bind'
  },
  {
    label: 'min',
    insertText: 'min',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u6700\u5C0F\u503C'
  },
  {
    label: 'max',
    insertText: 'max',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u6700\u5927\u503C'
  },
  {
    label: 'disabled',
    insertText: 'disabled',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u662F\u5426\u7981\u7528'
  },
  {
    label: 'readOnly',
    insertText: 'readOnly',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u662F\u5426\u53EA\u8BFB'
  },
  {
    label: 'hidden',
    insertText: 'hidden',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u662F\u5426\u9690\u85CF'
  },
  {
    label: 'displayType',
    insertText: 'displayType',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u8868\u5355\u5E03\u5C40'
  },
  {
    label: 'width',
    insertText: 'width',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u5355\u4E2A\u5143\u7D20\u7684\u5C55\u793A\u5BBD\u5EA6'
  },
  {
    label: 'labelWidth',
    insertText: 'labelWidth',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: 'label \u7684\u5BBD\u5EA6'
  },
  {
    label: 'className',
    insertText: 'className',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: 'className'
  },
  {
    label: 'widget',
    insertText: 'widget',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u6307\u5B9A\u4F7F\u7528\u54EA\u4E2A\u7EC4\u4EF6\u6E32\u67D3'
  },
  {
    label: 'readOnlyWidget',
    insertText: 'readOnlyWidget',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u6307\u5B9A\u53EA\u8BFB\u6A21\u5F0F\u4E0B\u7528\u54EA\u4E2A\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u6E32\u67D3'
  },
  {
    label: 'extra',
    insertText: 'extra',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u5C55\u793A\u66F4\u591A\u8BF4\u660E\u4FE1\u606F'
  },
  {
    label: 'properties',
    insertText: 'properties',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u5305\u88F9\u5BF9\u8C61\u7684\u5B50\u5C5E\u6027(\u53EA\u5728\u5BF9\u8C61\u7EC4\u4EF6\u4E2D\u4F7F\u7528)'
  },
  {
    label: 'items',
    insertText: 'items',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u63CF\u8FF0\u5217\u8868\u4E2D\u6BCF\u4E2Aitem\u7684\u7ED3\u6784(\u53EA\u5728\u5217\u8868\u4E2D\u4F7F\u7528)'
  },
  {
    label: 'enum',
    insertText: 'enum',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u63CF\u8FF0\u679A\u4E3E\u503C\u7684\u503C'
  },
  {
    label: 'enumNames',
    insertText: 'enumNames',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u63CF\u8FF0\u679A\u4E3E\u503C\u7684\u6587\u6848'
  },
  {
    label: 'rules',
    insertText: 'rules',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u6821\u9A8Crules'
  },
  {
    label: 'props',
    insertText: 'enumNames',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u989D\u5916\u7EC4\u4EF6\u5C5E\u6027'
  },
]

export { valueMap, keySuggestions }`,Ye=`.markdown p {
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
}`,Wn=`import React from 'react';
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

export default Demo;`,Kn=`import React, { useState, useRef } from 'react';
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

export default Demo;`,Sn=`import React from 'react';
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
                text: 'array',
                name: 'array',
                schema: {
                  title: '\u6570\u7EC4',
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {},
                  },
                },
                setting: {},
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

export default Demo;`,we=`import React from 'react';
import Generator from 'fr-generator';
import './index.less';

const {
  Provider,
  Sidebar,
  Canvas,
  Settings,
} = Generator;

const Demo = () => {
  return (
    <div className="fr-generator-playground" style={{ height: '40vh' }}>
      <Provider
        onChange={data => console.log('data:change', data)}
        onSchemaChange={schema => console.log('schema:change', schema)}
      >
        <div className="fr-generator-container">
          <Settings />
          <Canvas />
          <Sidebar />
        </div>
      </Provider>
    </div>
  );
};

export default Demo;`,zn=`.fr-generator-playground {
  margin: 0 -24px;

  .hide-demo {
    display: none;
  }
}`,Ln=`import React, { useState, useRef } from 'react';
import Generator from 'fr-generator';
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

const stringContains = (str, text) => {
  return str.indexOf(text) > -1;
}

const isObject = a =>
  stringContains(Object.prototype.toString.call(a), 'Object');

// \u83B7\u5F97 propsSchema \u7684 children
const getChildren2 = (schema) => {
  if (!schema) return [];
  const {
    // object
    properties,
    // array
    items,
    type,
  } = schema;
  if (!properties && !items) {
    return [];
  }
  let schemaSubs = {};
  if (type === 'object') {
    schemaSubs = properties;
  }
  if (type === 'array') {
    schemaSubs = items.properties;
  }
  return Object.keys(schemaSubs).map(name => ({
    schema: schemaSubs[name],
    name,
  }));
}

// formily Schema => FRG schema
const transformFrom = (mySchema, parent = null) => {
  const isObj = mySchema.type === 'object' && mySchema.properties;
  const isList =
    mySchema.type === 'array' && mySchema.items && mySchema.items.properties;
  const hasChildren = isObj || isList;
  // debugger;
  if (!hasChildren) {
    if (mySchema.enum && Array.isArray(mySchema.enum)) {
      const list = mySchema.enum;
      if (
        isObject(list[0]) &&
        list[0].label !== undefined &&
        list[0].value !== undefined
      ) {
        const _enumNames = list.map(i => i.label);
        const _enum = list.map(i => i.value);
        mySchema.enum = _enum;
        mySchema.enumNames = _enumNames;
      }
    }
  } else {
    const childrenList = getChildren2(mySchema);
    childrenList.map(item => {
      if (isObj) {
        mySchema.properties[item.name] = transformFrom(item.schema, mySchema);
      }
      if (isList) {
        mySchema.items.properties[item.name] = transformFrom(
          item.schema,
          mySchema
        );
      }
    });
  }
  if (mySchema['x-component']) {
    mySchema['widget'] = mySchema['x-component'];
  }
  if (mySchema['x-component-props']) {
    mySchema['props'] = mySchema['x-component-props'];
  }
  if (parent && mySchema.required) {
    if (parent.required && Array.isArray(parent.required)) {
      parent.required.push(mySchema.name);
    } else {
      parent.required = [mySchema.name];
    }
  }
  delete mySchema.key;
  delete mySchema.name;
  delete mySchema.required;
  delete mySchema['x-component'];
  delete mySchema['x-component-props'];
  return mySchema;
};

// FRG schema => formily Schema
const transformTo = (frSchema, parent = null, key = null) => {
  const isObj = frSchema.type === 'object' && frSchema.properties;
  const isList =
    frSchema.type === 'array' && frSchema.items && frSchema.items.properties;
  const hasChildren = isObj || isList;
  // debugger;
  if (!hasChildren) {
    if (
      frSchema.enum &&
      Array.isArray(frSchema.enum) &&
      frSchema.enumNames &&
      Array.isArray(frSchema.enumNames)
    ) {
      const list = frSchema.enum.map((item, idx) => ({
        value: item,
        label: frSchema.enumNames[idx],
      }));
      frSchema.enum = list;
    }
  } else {
    const childrenList = getChildren2(frSchema);
    childrenList.map(item => {
      if (isObj) {
        frSchema.properties[item.name] = transformTo(
          item.schema,
          frSchema,
          item.name
        );
      }
      if (isList) {
        frSchema.items.properties[item.name] = transformTo(
          item.schema,
          frSchema,
          item.name
        );
      }
    });
  }
  if (frSchema['widget']) {
    frSchema['x-component'] = frSchema['widget'];
  }
  if (frSchema['props']) {
    frSchema['x-component-props'] = frSchema['props'];
  }
  delete frSchema['widget'];
  delete frSchema['props'];
  delete frSchema['enumNames'];
  if (key) {
    frSchema.name = key;
    frSchema.key = key;
  }
  if (parent && key && parent.required && Array.isArray(parent.required)) {
    if (parent.required.indexOf(key) > -1) {
      frSchema.required = true;
    }
  }
  return frSchema;
};

const fromFormily = schema =>  transformFrom(schema);
const toFormily = schema => transformTo(schema);

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

export default Demo;`,_n=`import React, { useState, useRef } from 'react';
import { useHistory } from 'umi';
import Generator from 'fr-generator';
import './index.less';

const Demo = () => {
  const ref = useRef();

  const goToFrPlayground = () => {
    ref.current.copyValue();
    window.open('/playground');
  };

  return (
    <div className="fr-generator-playground" style={{ height: '80vh' }}>
      <Generator
        ref={ref}
        extraButtons={[
          { text: '\u53BBplayground\u9A8C\u8BC1', onClick: goToFrPlayground },
        ]}
        onChange={data => console.log('data:change', data)}
        onSchemaChange={schema => console.log('schema:change', schema)}
      />
    </div>
  );
};

export default Demo;`,ct=un.default={"guide-card":{component:Object(W.dynamic)({loader:function(){var D=Object(x.a)(f.a.mark(function S(){return f.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(22)]).then(e.bind(null,"oLxE"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},S)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:de}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"card-render":{version:"0.1.2"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"0.x"}},identifier:"guide-card"}},"chart-render-demo":{component:Object(W.dynamic)({loader:function(){var D=Object(x.a)(f.a.mark(function S(){var d,s,h,E,F,a,u;return f.a.wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return a=function(P,o){if(!o&&P&&P.__esModule)return P;if(P===null||typeof P!="object"&&typeof P!="function")return{default:P};var B=F(o);if(B&&B.has(P))return B.get(P);var p={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var g in P)if(g!=="default"&&Object.prototype.hasOwnProperty.call(P,g)){var v=r?Object.getOwnPropertyDescriptor(P,g):null;v&&(v.get||v.set)?Object.defineProperty(p,g,v):p[g]=P[g]}return p.default=P,B&&B.set(P,p),p},F=function(P){if(typeof WeakMap!="function")return null;var o=new WeakMap,B=new WeakMap;return(F=function(r){return r?B:o})(P)},d=e("K+nK"),N.t0=d,N.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return N.t1=N.sent,s=(0,N.t0)(N.t1),N.t2=a,N.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return N.t3=N.sent,h=(0,N.t2)(N.t3),N.next=15,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 15:return E=N.sent,u=function(){var P=(0,h.useState)("Line"),o=(0,s.default)(P,2),B=o[0],p=o[1],r={Line:E.Line,Column:E.Column,PivotTable:E.PivotTable}[B];return h.default.createElement("div",null,h.default.createElement("div",{style:{marginBottom:10}},h.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return p("Line")}},"\u6298\u7EBF\u56FE"),h.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return p("Column")}},"\u67F1\u72B6\u56FE"),h.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return p("PivotTable")}},"\u4EA4\u53C9\u8868")),h.default.createElement(r,{meta:[{id:"date",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF",isDim:!1},{id:"uv",name:"\u8BBF\u5BA2\u6570",isDim:!1}],data:[{date:"20200101",pv:100,uv:50},{date:"20200102",pv:120,uv:60},{date:"20200103",pv:140,uv:70},{date:"20200104",pv:160,uv:80}]}))},N.abrupt("return",u);case 18:case"end":return N.stop()}},S)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
import { Line, Column, PivotTable } from 'chart-render';

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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"chart-render-demo"}},"column-demo":{component:Object(W.dynamic)({loader:function(){var D=Object(x.a)(f.a.mark(function S(){var d,s,h,E;return f.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return h=a.sent,E=function(){return s.default.createElement(h.Column,{meta:[{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{pv:50,uv:20}]})},a.abrupt("return",E);case 11:case"end":return a.stop()}},S)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[{ pv: 50, uv: 20 }]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo"}},"column-demo-1":{component:Object(W.dynamic)({loader:function(){var D=Object(x.a)(f.a.mark(function S(){var d,s,h,E;return f.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return h=a.sent,E=function(){return s.default.createElement(h.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},a.abrupt("return",E);case 11:case"end":return a.stop()}},S)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: 'ds', name: '\u65E5\u671F', isDim: true },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[
      { ds: '2020-12-31', uv: 20 },
      { ds: '2021-01-01', uv: 21 },
      { ds: '2021-01-02', uv: 15 },
      { ds: '2021-01-03', uv: 40 },
      { ds: '2021-01-04', uv: 31 },
      { ds: '2021-01-05', uv: 32 },
      { ds: '2021-01-06', uv: 30 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-1"}},"column-demo-2":{component:Object(W.dynamic)({loader:function(){var D=Object(x.a)(f.a.mark(function S(){var d,s,h,E;return f.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return h=a.sent,E=function(){return s.default.createElement(h.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},a.abrupt("return",E);case 11:case"end":return a.stop()}},S)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: 'ds', name: '\u65E5\u671F', isDim: true },
      { id: 'page', name: '\u9875\u9762\u540D\u79F0', isDim: true },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[
      { ds: '2020-12-31', page: '\u767B\u5F55\u9875', uv: 20 },
      { ds: '2020-12-31', page: '\u9996\u9875', uv: 120 },
      { ds: '2021-01-01', page: '\u767B\u5F55\u9875', uv: 21 },
      { ds: '2021-01-01', page: '\u9996\u9875', uv: 121 },
      { ds: '2021-01-02', page: '\u767B\u5F55\u9875', uv: 15 },
      { ds: '2021-01-02', page: '\u9996\u9875', uv: 115 },
      { ds: '2021-01-03', page: '\u767B\u5F55\u9875', uv: 40 },
      { ds: '2021-01-03', page: '\u9996\u9875', uv: 140 },
      { ds: '2021-01-04', page: '\u767B\u5F55\u9875', uv: 31 },
      { ds: '2021-01-04', page: '\u9996\u9875', uv: 131 },
      { ds: '2021-01-05', page: '\u767B\u5F55\u9875', uv: 32 },
      { ds: '2021-01-05', page: '\u9996\u9875', uv: 132 },
      { ds: '2021-01-06', page: '\u767B\u5F55\u9875', uv: 30 },
      { ds: '2021-01-06', page: '\u9996\u9875', uv: 130 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-2"}},"column-demo-3":{component:Object(W.dynamic)({loader:function(){var D=Object(x.a)(f.a.mark(function S(){var d,s,h,E;return f.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return h=a.sent,E=function(){return s.default.createElement(h.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},a.abrupt("return",E);case 11:case"end":return a.stop()}},S)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: 'ds', name: '\u65E5\u671F', isDim: true },
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[
      { ds: '2020-12-31', pv: 50, uv: 20 },
      { ds: '2021-01-01', pv: 76, uv: 21 },
      { ds: '2021-01-02', pv: 46, uv: 15 },
      { ds: '2021-01-03', pv: 89, uv: 40 },
      { ds: '2021-01-04', pv: 66, uv: 31 },
      { ds: '2021-01-05', pv: 46, uv: 32 },
      { ds: '2021-01-06', pv: 45, uv: 30 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-3"}},"column-demo-4":{component:Object(W.dynamic)({loader:function(){var D=Object(x.a)(f.a.mark(function S(){var d,s,h,E;return f.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return h=a.sent,E=function(){return s.default.createElement(h.Column,{inverted:!0,label:{position:"middle",layout:[{type:"interval-adjust-position"},{type:"interval-hide-overlap"},{type:"adjust-color"}]},meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},a.abrupt("return",E);case 11:case"end":return a.stop()}},S)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
      { id: 'ds', name: '\u65E5\u671F', isDim: true },
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[
      { ds: '2020-12-31', pv: 50, uv: 20 },
      { ds: '2021-01-01', pv: 76, uv: 21 },
      { ds: '2021-01-02', pv: 46, uv: 15 },
      { ds: '2021-01-03', pv: 89, uv: 40 },
      { ds: '2021-01-04', pv: 66, uv: 31 },
      { ds: '2021-01-05', pv: 46, uv: 32 },
      { ds: '2021-01-06', pv: 45, uv: 30 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-4"}},"line-demo":{component:Object(W.dynamic)({loader:function(){var D=Object(x.a)(f.a.mark(function S(){var d,s,h,E;return f.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return h=a.sent,E=function(){return s.default.createElement(h.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},a.abrupt("return",E);case 11:case"end":return a.stop()}},S)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Line } from 'chart-render';

export default () => (
  <Line
    meta={[
      { id: 'ds', name: '\u65E5\u671F', isDim: true },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[
      { ds: '2020-12-31', uv: 20 },
      { ds: '2021-01-01', uv: 21 },
      { ds: '2021-01-02', uv: 15 },
      { ds: '2021-01-03', uv: 40 },
      { ds: '2021-01-04', uv: 31 },
      { ds: '2021-01-05', uv: 32 },
      { ds: '2021-01-06', uv: 30 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo"}},"line-demo-1":{component:Object(W.dynamic)({loader:function(){var D=Object(x.a)(f.a.mark(function S(){var d,s,h,E;return f.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return h=a.sent,E=function(){return s.default.createElement(h.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},a.abrupt("return",E);case 11:case"end":return a.stop()}},S)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Line } from 'chart-render';

export default () => (
  <Line
    meta={[
      { id: 'ds', name: '\u65E5\u671F', isDim: true },
      { id: 'page', name: '\u9875\u9762\u540D\u79F0', isDim: true },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[
      { ds: '2020-12-31', page: '\u767B\u5F55\u9875', uv: 20 },
      { ds: '2020-12-31', page: '\u9996\u9875', uv: 120 },
      { ds: '2021-01-01', page: '\u767B\u5F55\u9875', uv: 21 },
      { ds: '2021-01-01', page: '\u9996\u9875', uv: 121 },
      { ds: '2021-01-02', page: '\u767B\u5F55\u9875', uv: 15 },
      { ds: '2021-01-02', page: '\u9996\u9875', uv: 115 },
      { ds: '2021-01-03', page: '\u767B\u5F55\u9875', uv: 40 },
      { ds: '2021-01-03', page: '\u9996\u9875', uv: 140 },
      { ds: '2021-01-04', page: '\u767B\u5F55\u9875', uv: 31 },
      { ds: '2021-01-04', page: '\u9996\u9875', uv: 131 },
      { ds: '2021-01-05', page: '\u767B\u5F55\u9875', uv: 32 },
      { ds: '2021-01-05', page: '\u9996\u9875', uv: 132 },
      { ds: '2021-01-06', page: '\u767B\u5F55\u9875', uv: 30 },
      { ds: '2021-01-06', page: '\u9996\u9875', uv: 130 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-1"}},"line-demo-2":{component:Object(W.dynamic)({loader:function(){var D=Object(x.a)(f.a.mark(function S(){var d,s,h,E;return f.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return h=a.sent,E=function(){return s.default.createElement(h.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"},{id:"pv",name:"\u8BBF\u95EE\u91CF"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20,pv:120},{ds:"2020-12-31",page:"\u9996\u9875",uv:120,pv:1120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21,pv:121},{ds:"2021-01-01",page:"\u9996\u9875",uv:121,pv:1121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15,pv:115},{ds:"2021-01-02",page:"\u9996\u9875",uv:115,pv:1115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40,pv:140},{ds:"2021-01-03",page:"\u9996\u9875",uv:140,pv:1140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31,pv:131},{ds:"2021-01-04",page:"\u9996\u9875",uv:131,pv:1131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32,pv:132},{ds:"2021-01-05",page:"\u9996\u9875",uv:132,pv:1132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30,pv:130},{ds:"2021-01-06",page:"\u9996\u9875",uv:130,pv:1130}]})},a.abrupt("return",E);case 11:case"end":return a.stop()}},S)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Line } from 'chart-render';

export default () => (
  <Line
    meta={[
      { id: 'ds', name: '\u65E5\u671F', isDim: true },
      { id: 'page', name: '\u9875\u9762\u540D\u79F0', isDim: true },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
    ]}
    data={[
      { ds: '2020-12-31', page: '\u767B\u5F55\u9875', uv: 20, pv: 120 },
      { ds: '2020-12-31', page: '\u9996\u9875', uv: 120, pv: 1120 },
      { ds: '2021-01-01', page: '\u767B\u5F55\u9875', uv: 21, pv: 121 },
      { ds: '2021-01-01', page: '\u9996\u9875', uv: 121, pv: 1121 },
      { ds: '2021-01-02', page: '\u767B\u5F55\u9875', uv: 15, pv: 115 },
      { ds: '2021-01-02', page: '\u9996\u9875', uv: 115, pv: 1115 },
      { ds: '2021-01-03', page: '\u767B\u5F55\u9875', uv: 40, pv: 140 },
      { ds: '2021-01-03', page: '\u9996\u9875', uv: 140, pv: 1140 },
      { ds: '2021-01-04', page: '\u767B\u5F55\u9875', uv: 31, pv: 131 },
      { ds: '2021-01-04', page: '\u9996\u9875', uv: 131, pv: 1131 },
      { ds: '2021-01-05', page: '\u767B\u5F55\u9875', uv: 32, pv: 132 },
      { ds: '2021-01-05', page: '\u9996\u9875', uv: 132, pv: 1132 },
      { ds: '2021-01-06', page: '\u767B\u5F55\u9875', uv: 30, pv: 130 },
      { ds: '2021-01-06', page: '\u9996\u9875', uv: 130, pv: 1130 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-2"}},"line-demo-3":{component:Object(W.dynamic)({loader:function(){var D=Object(x.a)(f.a.mark(function S(){var d,s,h,E;return f.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return h=a.sent,E=function(){return s.default.createElement(h.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},a.abrupt("return",E);case 11:case"end":return a.stop()}},S)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Line } from 'chart-render';

export default () => (
  <Line
    meta={[
      { id: 'ds', name: '\u65E5\u671F', isDim: true },
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[
      { ds: '2020-12-31', pv: 50, uv: 20 },
      { ds: '2021-01-01', pv: 76, uv: 21 },
      { ds: '2021-01-02', pv: 46, uv: 15 },
      { ds: '2021-01-03', pv: 89, uv: 40 },
      { ds: '2021-01-04', pv: 66, uv: 31 },
      { ds: '2021-01-05', pv: 46, uv: 32 },
      { ds: '2021-01-06', pv: 45, uv: 30 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-3"}},"line-demo-4":{component:Object(W.dynamic)({loader:function(){var D=Object(x.a)(f.a.mark(function S(){var d,s,h,E;return f.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return h=a.sent,E=function(){return s.default.createElement(h.Line,{withArea:!0,isStack:!0,isPercent:!0,meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},a.abrupt("return",E);case 11:case"end":return a.stop()}},S)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Line } from 'chart-render';

export default () => (
  <Line
    withArea // \u5F00\u542F\u9762\u79EF\u56FE
    isStack // \u5806\u53E0\u5C55\u793A
    isPercent // \u767E\u5206\u6BD4\u9762\u79EF\u56FE
    meta={[
      { id: 'ds', name: '\u65E5\u671F', isDim: true },
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[
      { ds: '2020-12-31', pv: 50, uv: 20 },
      { ds: '2021-01-01', pv: 76, uv: 21 },
      { ds: '2021-01-02', pv: 46, uv: 15 },
      { ds: '2021-01-03', pv: 89, uv: 40 },
      { ds: '2021-01-04', pv: 66, uv: 31 },
      { ds: '2021-01-05', pv: 46, uv: 32 },
      { ds: '2021-01-06', pv: 45, uv: 30 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-4"}},"pivot-table-demo":{component:Object(W.dynamic)({loader:function(){var D=Object(x.a)(f.a.mark(function S(){var d,s,h,E;return f.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return h=a.sent,E=function(){return s.default.createElement(h.PivotTable,{style:{maxHeight:400,overflow:"auto"},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},a.abrupt("return",E);case 11:case"end":return a.stop()}},S)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-01',
        valueA: 782,
        valueB: 0.566,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-02',
        valueA: 856,
        valueB: 0.403,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-03',
        valueA: 886,
        valueB: 0.555,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-04',
        valueA: 555,
        valueB: 0.444,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-05',
        valueA: 444,
        valueB: 0.333,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-01',
        valueA: 922,
        valueB: 0.778,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-02',
        valueA: 888,
        valueB: 0.887,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-03',
        valueA: 879,
        valueB: 0.87,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-04',
        valueA: 800,
        valueB: 0.723,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-05',
        valueA: 813,
        valueB: 0.789,
      },
      {
        subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
        shop: '\u4EB2\u6A59\u91CC',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-01',
        valueA: 500,
        valueB: 0.463,
      },
      {
        subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
        shop: '\u4EB2\u6A59\u91CC',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-02',
        valueA: 833,
        valueB: 0.456,
      },
      {
        subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
        shop: '\u4EB2\u6A59\u91CC',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-03',
        valueA: 821,
        valueB: 0.442,
      },
      {
        subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
        shop: '\u4EB2\u6A59\u91CC',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-04',
        valueA: 834,
        valueB: 0.456,
      },
      {
        subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
        shop: '\u4EB2\u6A59\u91CC',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-05',
        valueA: 803,
        valueB: 0.7,
      },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo"}},"pivot-table-demo-1":{component:Object(W.dynamic)({loader:function(){var D=Object(x.a)(f.a.mark(function S(){var d,s,h,E;return f.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return h=a.sent,E=function(){return s.default.createElement(h.PivotTable,{style:{maxHeight:400,overflow:"auto"},cellRender:function(N,I,P){return s.default.createElement("div",null,s.default.createElement("p",null,"\u53C2\u6570\u8868\uFF1A"),s.default.createElement("p",{style:{color:["red","orange","yellow","green","blue"][Object.keys(I).length]}},N),s.default.createElement("p",null,JSON.stringify(I)),s.default.createElement("p",null,JSON.stringify(P)))},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},a.abrupt("return",E);case 11:case"end":return a.stop()}},S)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { PivotTable } from 'chart-render';

export default () => (
  <PivotTable
    style={{ maxHeight: 400, overflow: 'auto' }}
    cellRender={(val, dimRecord, indId) => (
      <div>
        <p>\u53C2\u6570\u8868\uFF1A</p>
        <p
          style={{
            color: ['red', 'orange', 'yellow', 'green', 'blue'][
              Object.keys(dimRecord).length
            ],
          }}
        >
          {val}
        </p>
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
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-01',
        valueA: 782,
        valueB: 0.566,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-02',
        valueA: 856,
        valueB: 0.403,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-03',
        valueA: 886,
        valueB: 0.555,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-04',
        valueA: 555,
        valueB: 0.444,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-05',
        valueA: 444,
        valueB: 0.333,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-01',
        valueA: 922,
        valueB: 0.778,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-02',
        valueA: 888,
        valueB: 0.887,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-03',
        valueA: 879,
        valueB: 0.87,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-04',
        valueA: 800,
        valueB: 0.723,
      },
      {
        subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
        shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-05',
        valueA: 813,
        valueB: 0.789,
      },
      {
        subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
        shop: '\u4EB2\u6A59\u91CC',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-01',
        valueA: 500,
        valueB: 0.463,
      },
      {
        subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
        shop: '\u4EB2\u6A59\u91CC',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-02',
        valueA: 833,
        valueB: 0.456,
      },
      {
        subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
        shop: '\u4EB2\u6A59\u91CC',
        season: '\u4E00\u5B63\u5EA6',
        month: '2022-03',
        valueA: 821,
        valueB: 0.442,
      },
      {
        subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
        shop: '\u4EB2\u6A59\u91CC',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-04',
        valueA: 834,
        valueB: 0.456,
      },
      {
        subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
        shop: '\u4EB2\u6A59\u91CC',
        season: '\u4E8C\u5B63\u5EA6',
        month: '2022-05',
        valueA: 803,
        valueB: 0.7,
      },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-1"}},"pivot-table-demo-2":{component:Object(W.dynamic)({loader:function(){var D=Object(x.a)(f.a.mark(function S(){var d,s,h,E,F,a,u;return f.a.wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return a=function(P,o){if(!o&&P&&P.__esModule)return P;if(P===null||typeof P!="object"&&typeof P!="function")return{default:P};var B=F(o);if(B&&B.has(P))return B.get(P);var p={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var g in P)if(g!=="default"&&Object.prototype.hasOwnProperty.call(P,g)){var v=r?Object.getOwnPropertyDescriptor(P,g):null;v&&(v.get||v.set)?Object.defineProperty(p,g,v):p[g]=P[g]}return p.default=P,B&&B.set(P,p),p},F=function(P){if(typeof WeakMap!="function")return null;var o=new WeakMap,B=new WeakMap;return(F=function(r){return r?B:o})(P)},d=e("K+nK"),N.t0=d,N.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return N.t1=N.sent,s=(0,N.t0)(N.t1),N.t2=a,N.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return N.t3=N.sent,h=(0,N.t2)(N.t3),N.next=15,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 15:return E=N.sent,u=function(){var P=(0,h.useState)(!1),o=(0,s.default)(P,2),B=o[0],p=o[1];return h.default.createElement(h.default.Fragment,null,h.default.createElement("label",null,"\u53EF\u5C55\u5F00/\u6536\u7F29\uFF1A",h.default.createElement("input",{type:"checkbox",value:B,onChange:function(){return p(!B)}})),h.default.createElement(E.PivotTable,{leftExpandable:B,showSubtotal:!1,meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]}))},N.abrupt("return",u);case 18:case"end":return N.stop()}},S)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
import { PivotTable } from 'chart-render';

export default () => {
  const [expandable, setExpandable] = useState(false);

  return (
    <>
      <label>
        \u53EF\u5C55\u5F00/\u6536\u7F29\uFF1A
        <input
          type="checkbox"
          value={expandable}
          onChange={() => setExpandable(!expandable)}
        />
      </label>
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
          {
            subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
            shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
            season: '\u4E00\u5B63\u5EA6',
            month: '2022-01',
            valueA: 782,
            valueB: 0.566,
          },
          {
            subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
            shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
            season: '\u4E00\u5B63\u5EA6',
            month: '2022-02',
            valueA: 856,
            valueB: 0.403,
          },
          {
            subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
            shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
            season: '\u4E00\u5B63\u5EA6',
            month: '2022-03',
            valueA: 886,
            valueB: 0.555,
          },
          {
            subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
            shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
            season: '\u4E8C\u5B63\u5EA6',
            month: '2022-04',
            valueA: 555,
            valueB: 0.444,
          },
          {
            subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
            shop: '\u4E0A\u6D77\u5927\u5B81\u5E97',
            season: '\u4E8C\u5B63\u5EA6',
            month: '2022-05',
            valueA: 444,
            valueB: 0.333,
          },
          {
            subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
            shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
            season: '\u4E00\u5B63\u5EA6',
            month: '2022-01',
            valueA: 922,
            valueB: 0.778,
          },
          {
            subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
            shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
            season: '\u4E00\u5B63\u5EA6',
            month: '2022-02',
            valueA: 888,
            valueB: 0.887,
          },
          {
            subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
            shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
            season: '\u4E00\u5B63\u5EA6',
            month: '2022-03',
            valueA: 879,
            valueB: 0.87,
          },
          {
            subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
            shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
            season: '\u4E8C\u5B63\u5EA6',
            month: '2022-04',
            valueA: 800,
            valueB: 0.723,
          },
          {
            subs: '\u4E0A\u6D77\u5B50\u516C\u53F8',
            shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97',
            season: '\u4E8C\u5B63\u5EA6',
            month: '2022-05',
            valueA: 813,
            valueB: 0.789,
          },
          {
            subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
            shop: '\u4EB2\u6A59\u91CC',
            season: '\u4E00\u5B63\u5EA6',
            month: '2022-01',
            valueA: 500,
            valueB: 0.463,
          },
          {
            subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
            shop: '\u4EB2\u6A59\u91CC',
            season: '\u4E00\u5B63\u5EA6',
            month: '2022-02',
            valueA: 833,
            valueB: 0.456,
          },
          {
            subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
            shop: '\u4EB2\u6A59\u91CC',
            season: '\u4E00\u5B63\u5EA6',
            month: '2022-03',
            valueA: 821,
            valueB: 0.442,
          },
          {
            subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
            shop: '\u4EB2\u6A59\u91CC',
            season: '\u4E8C\u5B63\u5EA6',
            month: '2022-04',
            valueA: 834,
            valueB: 0.456,
          },
          {
            subs: '\u6D59\u6C5F\u5B50\u516C\u53F8',
            shop: '\u4EB2\u6A59\u91CC',
            season: '\u4E8C\u5B63\u5EA6',
            month: '2022-05',
            valueA: 803,
            valueB: 0.7,
          },
        ]}
      />
    </>
  );
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-2"}},"form-render-demo":{component:Object(W.dynamic)({loader:function(){var D=Object(x.a)(f.a.mark(function S(){var d,s,h,E,F,a,u,l,N,I,P,o,B,p;return f.a.wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return P=function(T,M){if(!M&&T&&T.__esModule)return T;if(T===null||typeof T!="object"&&typeof T!="function")return{default:T};var U=I(M);if(U&&U.has(T))return U.get(T);var ne={},ae=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ye in T)if(ye!=="default"&&Object.prototype.hasOwnProperty.call(T,ye)){var Ae=ae?Object.getOwnPropertyDescriptor(T,ye):null;Ae&&(Ae.get||Ae.set)?Object.defineProperty(ne,ye,Ae):ne[ye]=T[ye]}return ne.default=T,U&&U.set(T,ne),ne},I=function(T){if(typeof WeakMap!="function")return null;var M=new WeakMap,U=new WeakMap;return(I=function(ae){return ae?U:M})(T)},d=e("K+nK"),g.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return g.t0=d,g.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return g.t1=g.sent,s=(0,g.t0)(g.t1),g.t2=d,g.next=13,e.e(70).then(e.bind(null,"fWQN"));case 13:return g.t3=g.sent,h=(0,g.t2)(g.t3),g.t4=d,g.next=18,e.e(71).then(e.bind(null,"mtLc"));case 18:return g.t5=g.sent,E=(0,g.t4)(g.t5),g.t6=d,g.next=23,e.e(64).then(e.bind(null,"yKVA"));case 23:return g.t7=g.sent,F=(0,g.t6)(g.t7),g.t8=d,g.next=28,e.e(62).then(e.bind(null,"879j"));case 28:return g.t9=g.sent,a=(0,g.t8)(g.t9),g.t10=d,g.next=33,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 33:return g.t11=g.sent,u=(0,g.t10)(g.t11),g.next=37,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 37:return l=g.sent,g.t12=P,g.next=41,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 41:return g.t13=g.sent,N=(0,g.t12)(g.t13),o={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},B=function(v){(0,F.default)(M,v);var T=(0,a.default)(M);function M(){return(0,h.default)(this,M),T.apply(this,arguments)}return(0,E.default)(M,[{key:"render",value:function(){var ne=this.props.form;return u.default.createElement("div",null,u.default.createElement(N.default,{form:ne,schema:o}),u.default.createElement(s.default,{type:"primary",onClick:ne.submit},"\u63D0\u4EA4"))}}]),M}(u.default.Component),p=(0,N.connectForm)(B),g.abrupt("return",p);case 47:case"end":return g.stop()}},S)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default connectForm(Demo);`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo"}},"form-render-demo-1":{component:Object(W.dynamic)({loader:function(){var D=Object(x.a)(f.a.mark(function S(){var d,s,h,E,F,a,u,l,N,I;return f.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return u=function(p,r){if(!r&&p&&p.__esModule)return p;if(p===null||typeof p!="object"&&typeof p!="function")return{default:p};var g=a(r);if(g&&g.has(p))return g.get(p);var v={},T=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var M in p)if(M!=="default"&&Object.prototype.hasOwnProperty.call(p,M)){var U=T?Object.getOwnPropertyDescriptor(p,M):null;U&&(U.get||U.set)?Object.defineProperty(v,M,U):v[M]=p[M]}return v.default=p,g&&g.set(p,v),v},a=function(p){if(typeof WeakMap!="function")return null;var r=new WeakMap,g=new WeakMap;return(a=function(T){return T?g:r})(p)},d=e("K+nK"),o.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return o.t0=d,o.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return o.t1=o.sent,s=(0,o.t0)(o.t1),o.t2=d,o.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return o.t3=o.sent,h=(0,o.t2)(o.t3),o.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 17:return E=o.sent,o.t4=u,o.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 21:return o.t5=o.sent,F=(0,o.t4)(o.t5),l={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},N=function(){var p=(0,F.useForm)();return h.default.createElement("div",null,h.default.createElement(F.default,{form:p,schema:l}),h.default.createElement(s.default,{type:"primary",onClick:p.submit},"\u63D0\u4EA4"))},I=N,o.abrupt("return",I);case 27:case"end":return o.stop()}},S)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo-1"}},"form-render-demo-2":{component:Object(W.dynamic)({loader:function(){var D=Object(x.a)(f.a.mark(function S(){var d,s,h,E,F,a,u,l,N,I;return f.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return u=function(p,r){if(!r&&p&&p.__esModule)return p;if(p===null||typeof p!="object"&&typeof p!="function")return{default:p};var g=a(r);if(g&&g.has(p))return g.get(p);var v={},T=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var M in p)if(M!=="default"&&Object.prototype.hasOwnProperty.call(p,M)){var U=T?Object.getOwnPropertyDescriptor(p,M):null;U&&(U.get||U.set)?Object.defineProperty(v,M,U):v[M]=p[M]}return v.default=p,g&&g.set(p,v),v},a=function(p){if(typeof WeakMap!="function")return null;var r=new WeakMap,g=new WeakMap;return(a=function(T){return T?g:r})(p)},d=e("K+nK"),o.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return o.t0=d,o.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return o.t1=o.sent,s=(0,o.t0)(o.t1),o.t2=d,o.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return o.t3=o.sent,h=(0,o.t2)(o.t3),o.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 17:return E=o.sent,o.t4=u,o.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 21:return o.t5=o.sent,F=(0,o.t4)(o.t5),l={displayType:"row",labelWidth:60,type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F",type:"range",format:"date"},siteUrl:{title:"\u7F51\u5740",type:"string",placeholder:"\u6B64\u5904\u5FC5\u586B",required:!0,props:{addonBefore:"https://",addonAfter:".com"}}}},N=function(){var p=(0,F.useForm)(),r=function(v,T){T.length>0?alert("errors:"+JSON.stringify(T)):alert("formData:"+JSON.stringify(v,null,2))};return h.default.createElement("div",null,h.default.createElement(F.default,{form:p,schema:l,onFinish:r}),h.default.createElement(s.default,{type:"primary",onClick:p.submit},"\u63D0\u4EA4"))},I=N,o.abrupt("return",I);case 27:case"end":return o.stop()}},S)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-demo-2"}},"migrate-demo":{component:Object(W.dynamic)({loader:function(){var D=Object(x.a)(f.a.mark(function S(){var d,s,h,E,F,a,u,l;return f.a.wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return u=function(){var o=(0,h.useForm)(),B=function(r,g){g.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(g))):alert(JSON.stringify(r))};return s.default.createElement("div",null,s.default.createElement(h.default,{form:o,schema:a,onFinish:B}),s.default.createElement("button",{onClick:o.submit},"\u63D0\u4EA4"))},F=function(o,B){if(!B&&o&&o.__esModule)return o;if(o===null||typeof o!="object"&&typeof o!="function")return{default:o};var p=E(B);if(p&&p.has(o))return p.get(o);var r={},g=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in o)if(v!=="default"&&Object.prototype.hasOwnProperty.call(o,v)){var T=g?Object.getOwnPropertyDescriptor(o,v):null;T&&(T.get||T.set)?Object.defineProperty(r,v,T):r[v]=o[v]}return r.default=o,p&&p.set(o,r),r},E=function(o){if(typeof WeakMap!="function")return null;var B=new WeakMap,p=new WeakMap;return(E=function(g){return g?p:B})(o)},d=e("K+nK"),I.t0=d,I.next=7,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 7:return I.t1=I.sent,s=(0,I.t0)(I.t1),I.t2=F,I.next=12,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 12:return I.t3=I.sent,h=(0,I.t2)(I.t3),a={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}},l=u,I.abrupt("return",l);case 17:case"end":return I.stop()}},S)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate-demo"}},"display-demo":{component:Object(W.dynamic)({loader:function(){var D=Object(x.a)(f.a.mark(function S(){var d,s,h,E,F;return f.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return d=e("K+nK"),u.t0=d,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,s=(0,u.t0)(u.t1),u.t2=d,u.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return u.t3=u.sent,h=(0,u.t2)(u.t3),E=function(N){return{type:"object",displayType:N,properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},objectName:{title:"\u5BF9\u8C61",bind:"obj",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},F=function(){return s.default.createElement("div",null,s.default.createElement("h2",null,"display: row"),s.default.createElement(h.default,{schema:E("row")}),s.default.createElement("h2",null,"display: column"),s.default.createElement(h.default,{schema:E("column")}))},u.abrupt("return",F);case 14:case"end":return u.stop()}},S)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo"}},"display-demo-1":{component:Object(W.dynamic)({loader:function(){var D=Object(x.a)(f.a.mark(function S(){var d,s,h,E,F;return f.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return d=e("K+nK"),u.t0=d,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,s=(0,u.t0)(u.t1),u.t2=d,u.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return u.t3=u.sent,h=(0,u.t2)(u.t3),E={type:"object",displayType:"inline",properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},F=function(){return s.default.createElement(h.default,{schema:E})},u.abrupt("return",F);case 14:case"end":return u.stop()}},S)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-1"}},"display-demo-2":{component:Object(W.dynamic)({loader:function(){var D=Object(x.a)(f.a.mark(function S(){var d,s,h,E,F;return f.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return d=e("K+nK"),u.t0=d,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,s=(0,u.t0)(u.t1),u.t2=d,u.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return u.t3=u.sent,h=(0,u.t2)(u.t3),E={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0},check:{title:"box",type:"boolean",default:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},F=function(){return s.default.createElement(h.default,{readOnly:!0,schema:E})},u.abrupt("return",F);case 14:case"end":return u.stop()}},S)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form readOnly schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-2"}},"display-demo-3":{component:Object(W.dynamic)({loader:function(){var D=Object(x.a)(f.a.mark(function S(){var d,s,h,E,F;return f.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return d=e("K+nK"),u.t0=d,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,s=(0,u.t0)(u.t1),u.t2=d,u.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return u.t3=u.sent,h=(0,u.t2)(u.t3),E={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0,width:"50%"},check:{title:"box",type:"boolean",default:!0,width:"50%",labelWidth:6},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},F=function(){return s.default.createElement(h.default,{labelWidth:"200",schema:E})},u.abrupt("return",F);case 14:case"end":return u.stop()}},S)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form labelWidth="200" schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-3"}},"display-demo-4":{component:Object(W.dynamic)({loader:function(){var D=Object(x.a)(f.a.mark(function S(){var d,s,h,E,F,a;return f.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,s=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,h=(0,l.t2)(l.t3),E={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},F=function(){return s.default.createElement(h.default,{schema:E})},a=F,l.abrupt("return",a);case 15:case"end":return l.stop()}},S)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-4"}},"display-demo-5":{component:Object(W.dynamic)({loader:function(){var D=Object(x.a)(f.a.mark(function S(){var d,s,h,E,F,a;return f.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,s=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,h=(0,l.t2)(l.t3),E={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},F=function(){return s.default.createElement(h.default,{schema:E})},a=F,l.abrupt("return",a);case 15:case"end":return l.stop()}},S)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-5"}},"display-demo-6":{component:Object(W.dynamic)({loader:function(){var D=Object(x.a)(f.a.mark(function S(){var d,s,h,E,F,a;return f.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,s=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,h=(0,l.t2)(l.t3),E={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},F=function(){return s.default.createElement(h.default,{schema:E})},a=F,l.abrupt("return",a);case 15:case"end":return l.stop()}},S)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-6"}},"display-demo-7":{component:Object(W.dynamic)({loader:function(){var D=Object(x.a)(f.a.mark(function S(){var d,s,h,E,F,a;return f.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,s=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,h=(0,l.t2)(l.t3),E={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},F=function(){return s.default.createElement(h.default,{schema:E})},a=F,l.abrupt("return",a);case 15:case"end":return l.stop()}},S)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-7"}},"form-methods-demo":{component:Object(W.dynamic)({loader:function(){var D=Object(x.a)(f.a.mark(function S(){var d,s,h,E,F,a,u,l,N,I,P,o,B;return f.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return P=function(v,T){if(!T&&v&&v.__esModule)return v;if(v===null||typeof v!="object"&&typeof v!="function")return{default:v};var M=I(T);if(M&&M.has(v))return M.get(v);var U={},ne=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ae in v)if(ae!=="default"&&Object.prototype.hasOwnProperty.call(v,ae)){var ye=ne?Object.getOwnPropertyDescriptor(v,ae):null;ye&&(ye.get||ye.set)?Object.defineProperty(U,ae,ye):U[ae]=v[ae]}return U.default=v,M&&M.set(v,U),U},I=function(v){if(typeof WeakMap!="function")return null;var T=new WeakMap,M=new WeakMap;return(I=function(ne){return ne?M:T})(v)},d=e("K+nK"),r.next=5,e.e(18).then(e.t.bind(null,"lfLe",7));case 5:return r.t0=d,r.next=8,e.e(19).then(e.t.bind(null,"Cp9S",7));case 8:return r.t1=r.sent,s=(0,r.t0)(r.t1),r.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return r.t2=d,r.next=15,e.e(13).then(e.t.bind(null,"4IMT",7));case 15:return r.t3=r.sent,h=(0,r.t2)(r.t3),r.next=19,e.e(14).then(e.t.bind(null,"tL+A",7));case 19:return r.t4=d,r.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return r.t5=r.sent,E=(0,r.t4)(r.t5),r.t6=d,r.next=27,Promise.resolve().then(e.bind(null,"tJVT"));case 27:return r.t7=r.sent,F=(0,r.t6)(r.t7),r.t8=P,r.next=32,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 32:return r.t9=r.sent,a=(0,r.t8)(r.t9),r.next=36,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 36:return u=r.sent,r.t10=P,r.next=40,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 40:return r.t11=r.sent,l=(0,r.t10)(r.t11),r.next=44,e.e(15).then(e.bind(null,"OH0R"));case 44:return N=r.sent,o=function(){var v=(0,l.useForm)(),T=(0,a.useState)({}),M=(0,F.default)(T,2),U=M[0],ne=M[1],ae=function(){(0,N.fakeApi)("xxx/getForm").then(function(Te){v.setValues({input1:"hello world",select1:"c"})})};(0,a.useEffect)(function(){(0,N.delay)(1e3).then(function(Ae){ne({type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}})})},[]);var ye=function(Te,En){En.length>0?E.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(En.map(function($n){return $n.name}))):(0,N.fakeApi)("xxx/submit",Te).then(function($n){return E.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})};return a.default.createElement("div",{style:{width:"400px"}},a.default.createElement(l.default,{form:v,schema:U,onFinish:ye}),a.default.createElement(s.default,null,a.default.createElement(h.default,{onClick:ae},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),a.default.createElement(h.default,{type:"primary",onClick:v.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},B=o,r.abrupt("return",B);case 48:case"end":return r.stop()}},S)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Qe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo"}},"form-methods-demo-1":{component:Object(W.dynamic)({loader:function(){var D=Object(x.a)(f.a.mark(function S(){var d,s,h,E,F,a,u,l,N,I,P,o,B;return f.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return I=function(v,T){if(!T&&v&&v.__esModule)return v;if(v===null||typeof v!="object"&&typeof v!="function")return{default:v};var M=N(T);if(M&&M.has(v))return M.get(v);var U={},ne=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ae in v)if(ae!=="default"&&Object.prototype.hasOwnProperty.call(v,ae)){var ye=ne?Object.getOwnPropertyDescriptor(v,ae):null;ye&&(ye.get||ye.set)?Object.defineProperty(U,ae,ye):U[ae]=v[ae]}return U.default=v,M&&M.set(v,U),U},N=function(v){if(typeof WeakMap!="function")return null;var T=new WeakMap,M=new WeakMap;return(N=function(ne){return ne?M:T})(v)},d=e("K+nK"),r.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return r.t0=d,r.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return r.t1=r.sent,s=(0,r.t0)(r.t1),r.t2=d,r.next=13,Promise.resolve().then(e.bind(null,"PpiC"));case 13:return r.t3=r.sent,h=(0,r.t2)(r.t3),r.next=17,e.e(14).then(e.t.bind(null,"tL+A",7));case 17:return r.t4=d,r.next=20,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 20:return r.t5=r.sent,E=(0,r.t4)(r.t5),r.t6=d,r.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return r.t7=r.sent,F=(0,r.t6)(r.t7),r.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 29:return a=r.sent,r.t8=I,r.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 33:return r.t9=r.sent,u=(0,r.t8)(r.t9),r.next=37,e.e(15).then(e.bind(null,"OH0R"));case 37:return l=r.sent,P={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},o=function(){var v=(0,u.useForm)(),T=function(ne,ae){ae.length>0?E.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(ae.map(function(ye){return ye.name}))):(0,l.fakeApi)("xxx/submit",ne).then(function(ye){return E.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},M=function(ne){var ae=ne.data,ye=ne.errors,Ae=ne.schema,Te=(0,h.default)(ne,["data","errors","schema"]);return(0,l.fakeApi)("xxx/validation").then(function(En){return{name:"select1",error:["\u5916\u90E8\u6821\u9A8C\u9519\u8BEF"]}})};return F.default.createElement("div",{style:{width:"400px"}},F.default.createElement(u.default,{form:v,schema:P,beforeFinish:M,onFinish:T}),F.default.createElement(s.default,{type:"primary",onClick:v.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},B=o,r.abrupt("return",B);case 42:case"end":return r.stop()}},S)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Qe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-1"}},"form-methods-demo-2":{component:Object(W.dynamic)({loader:function(){var D=Object(x.a)(f.a.mark(function S(){var d,s,h,E,F,a,u,l,N,I,P,o,B;return f.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return I=function(v,T){if(!T&&v&&v.__esModule)return v;if(v===null||typeof v!="object"&&typeof v!="function")return{default:v};var M=N(T);if(M&&M.has(v))return M.get(v);var U={},ne=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ae in v)if(ae!=="default"&&Object.prototype.hasOwnProperty.call(v,ae)){var ye=ne?Object.getOwnPropertyDescriptor(v,ae):null;ye&&(ye.get||ye.set)?Object.defineProperty(U,ae,ye):U[ae]=v[ae]}return U.default=v,M&&M.set(v,U),U},N=function(v){if(typeof WeakMap!="function")return null;var T=new WeakMap,M=new WeakMap;return(N=function(ne){return ne?M:T})(v)},d=e("K+nK"),r.next=5,e.e(18).then(e.t.bind(null,"lfLe",7));case 5:return r.t0=d,r.next=8,e.e(19).then(e.t.bind(null,"Cp9S",7));case 8:return r.t1=r.sent,s=(0,r.t0)(r.t1),r.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return r.t2=d,r.next=15,e.e(13).then(e.t.bind(null,"4IMT",7));case 15:return r.t3=r.sent,h=(0,r.t2)(r.t3),r.next=19,e.e(14).then(e.t.bind(null,"tL+A",7));case 19:return r.t4=d,r.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return r.t5=r.sent,E=(0,r.t4)(r.t5),r.t6=d,r.next=27,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 27:return r.t7=r.sent,F=(0,r.t6)(r.t7),r.next=31,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 31:return a=r.sent,r.t8=I,r.next=35,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 35:return r.t9=r.sent,u=(0,r.t8)(r.t9),r.next=39,e.e(15).then(e.bind(null,"OH0R"));case 39:return l=r.sent,P={type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F\u8303\u56F4",type:"range",format:"date"}}},o=function(){var v=(0,u.useForm)(),T=function(ne,ae){ae.length>0?E.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(ae.map(function(ye){return ye.name}))):(0,l.fakeApi)("xxx/submit",ne).then(function(ye){return E.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},M=function(){(0,l.fakeApi)("xxx/getForm").then(function(ne){v.setValues({startDate:"2020-04-04",endDate:"2020-04-24"})})};return F.default.createElement("div",{style:{width:"400px"}},F.default.createElement(u.default,{form:v,schema:P,onFinish:T}),F.default.createElement(s.default,null,F.default.createElement(h.default,{onClick:M},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),F.default.createElement(h.default,{type:"primary",onClick:v.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},B=o,r.abrupt("return",B);case 44:case"end":return r.stop()}},S)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Qe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-2"}},"form-methods-demo-3":{component:Object(W.dynamic)({loader:function(){var D=Object(x.a)(f.a.mark(function S(){var d,s,h,E,F,a,u,l,N,I,P,o;return f.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return N=function(g,v){if(!v&&g&&g.__esModule)return g;if(g===null||typeof g!="object"&&typeof g!="function")return{default:g};var T=l(v);if(T&&T.has(g))return T.get(g);var M={},U=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ne in g)if(ne!=="default"&&Object.prototype.hasOwnProperty.call(g,ne)){var ae=U?Object.getOwnPropertyDescriptor(g,ne):null;ae&&(ae.get||ae.set)?Object.defineProperty(M,ne,ae):M[ne]=g[ne]}return M.default=g,T&&T.set(g,M),M},l=function(g){if(typeof WeakMap!="function")return null;var v=new WeakMap,T=new WeakMap;return(l=function(U){return U?T:v})(g)},d=e("K+nK"),p.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return p.t0=d,p.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return p.t1=p.sent,s=(0,p.t0)(p.t1),p.next=12,e.e(14).then(e.t.bind(null,"tL+A",7));case 12:return p.t2=d,p.next=15,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 15:return p.t3=p.sent,h=(0,p.t2)(p.t3),p.t4=N,p.next=20,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 20:return p.t5=p.sent,E=(0,p.t4)(p.t5),p.next=24,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 24:return F=p.sent,p.t6=N,p.next=28,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 28:return p.t7=p.sent,a=(0,p.t6)(p.t7),p.next=32,e.e(15).then(e.bind(null,"OH0R"));case 32:return u=p.sent,I={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select1:{title:"\u5355\u9009",type:"string",widget:"select"}}}}},P=function(){var g=(0,a.useForm)(),v=function(){g.setSchemaByPath("obj1.select1",{enum:["east","south","west","north"],enumNames:["\u4E1C","\u5357","\u897F","\u5317"]})},T=function(U,ne){ne.length>0?h.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(ne.map(function(ae){return ae.name}))):h.default.info(JSON.stringify(U))};return E.default.createElement("div",{style:{width:"400px"}},E.default.createElement(a.default,{form:g,schema:I,onMount:v,onFinish:T}),E.default.createElement(s.default,{type:"primary",onClick:g.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},o=P,p.abrupt("return",o);case 37:case"end":return p.stop()}},S)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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
      enum: ['east', 'south', 'west', 'north'],
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Qe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-3"}},"function-demo":{component:Object(W.dynamic)({loader:function(){var D=Object(x.a)(f.a.mark(function S(){var d,s,h,E,F,a,u,l;return f.a.wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return F=function(o,B){if(!B&&o&&o.__esModule)return o;if(o===null||typeof o!="object"&&typeof o!="function")return{default:o};var p=E(B);if(p&&p.has(o))return p.get(o);var r={},g=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in o)if(v!=="default"&&Object.prototype.hasOwnProperty.call(o,v)){var T=g?Object.getOwnPropertyDescriptor(o,v):null;T&&(T.get||T.set)?Object.defineProperty(r,v,T):r[v]=o[v]}return r.default=o,p&&p.set(o,r),r},E=function(o){if(typeof WeakMap!="function")return null;var B=new WeakMap,p=new WeakMap;return(E=function(g){return g?p:B})(o)},d=e("K+nK"),I.t0=d,I.next=6,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 6:return I.t1=I.sent,s=(0,I.t0)(I.t1),I.t2=F,I.next=11,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 11:return I.t3=I.sent,h=(0,I.t2)(I.t3),a={type:"object",properties:{select1:{title:"\u5355\u9009",description:"\u5C1D\u8BD5\u9009\u62E9\u201C\u663E\u793A\u8F93\u5165\u6846\u201D",type:"string",enum:["a","b"],enumNames:["\u9690\u85CF\u8F93\u5165\u6846","\u663E\u793A\u8F93\u5165\u6846"],disabled:"{{rootValue.input1.length > 5}}",default:"a"},input1:{title:"\u8F93\u5165\u6846",description:"\u5C1D\u8BD5\u8F93\u5165\u8D85\u8FC75\u4E2A\u5B57\u7B26",type:"string",hidden:'{{formData.select1 == "a"}}'}}},u=function(){var o=(0,h.useForm)();return s.default.createElement(h.default,{form:o,schema:a})},l=u,I.abrupt("return",l);case 17:case"end":return I.stop()}},S)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo1;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo"}},"function-demo-1":{component:Object(W.dynamic)({loader:function(){var D=Object(x.a)(f.a.mark(function S(){var d,s,h,E,F;return f.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return d=e("K+nK"),u.t0=d,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,s=(0,u.t0)(u.t1),u.t2=d,u.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return u.t3=u.sent,h=(0,u.t2)(u.t3),u.next=13,e.e(17).then(e.bind(null,"8iYR"));case 13:return E=u.sent,F=function(){return s.default.createElement(h.default,{schema:E.expression})},u.abrupt("return",F);case 16:case"end":return u.stop()}},S)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { expression } from '../json/schema';

export default () => <FR schema={expression} />;`},"demo/FR.jsx":{import:"../demo/FR",content:Re},"json/schema.js":{import:"../json/schema",content:ve}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo-1"}},"lifeCycle-demo":{component:Object(W.dynamic)({loader:function(){var D=Object(x.a)(f.a.mark(function S(){var d,s,h,E,F,a,u,l,N;return f.a.wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return F=function(B,p){if(!p&&B&&B.__esModule)return B;if(B===null||typeof B!="object"&&typeof B!="function")return{default:B};var r=E(p);if(r&&r.has(B))return r.get(B);var g={},v=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var T in B)if(T!=="default"&&Object.prototype.hasOwnProperty.call(B,T)){var M=v?Object.getOwnPropertyDescriptor(B,T):null;M&&(M.get||M.set)?Object.defineProperty(g,T,M):g[T]=B[T]}return g.default=B,r&&r.set(B,g),g},E=function(B){if(typeof WeakMap!="function")return null;var p=new WeakMap,r=new WeakMap;return(E=function(v){return v?r:p})(B)},P.t0=F,P.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return P.t1=P.sent,d=(0,P.t0)(P.t1),P.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 9:return s=P.sent,P.t2=F,P.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 13:return P.t3=P.sent,h=(0,P.t2)(P.t3),a=function(B){return new Promise(function(p){return setTimeout(p,B)})},u={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u4E0B\u62C9\u9009\u6846",description:"\u52A0\u8F7D\u4E2D...",type:"string",enum:[],widget:"select"}}},l=function(){var B=(0,h.useForm)(),p=function(){B.setValues({input1:"hello world"}),a(3e3).then(function(g){B.setSchemaByPath("select1",{description:"",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]})})};return d.default.createElement(h.default,{form:B,schema:u,onMount:p})},N=l,P.abrupt("return",N);case 20:case"end":return P.stop()}},S)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"lifeCycle-demo"}},"listDisplay-demo":{component:Object(W.dynamic)({loader:function(){var D=Object(x.a)(f.a.mark(function S(){var d,s,h,E,F,a;return f.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,s=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,h=(0,l.t2)(l.t3),E={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},F=function(){return s.default.createElement(h.default,{schema:E})},a=F,l.abrupt("return",a);case 15:case"end":return l.stop()}},S)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo"}},"listDisplay-demo-1":{component:Object(W.dynamic)({loader:function(){var D=Object(x.a)(f.a.mark(function S(){var d,s,h,E,F,a;return f.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,s=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,h=(0,l.t2)(l.t3),E={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},F=function(){return s.default.createElement(h.default,{schema:E})},a=F,l.abrupt("return",a);case 15:case"end":return l.stop()}},S)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-1"}},"listDisplay-demo-2":{component:Object(W.dynamic)({loader:function(){var D=Object(x.a)(f.a.mark(function S(){var d,s,h,E,F,a;return f.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,s=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,h=(0,l.t2)(l.t3),E={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},F=function(){return s.default.createElement(h.default,{schema:E})},a=F,l.abrupt("return",a);case 15:case"end":return l.stop()}},S)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-2"}},"listDisplay-demo-3":{component:Object(W.dynamic)({loader:function(){var D=Object(x.a)(f.a.mark(function S(){var d,s,h,E,F,a;return f.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,s=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,h=(0,l.t2)(l.t3),E={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},F=function(){return s.default.createElement(h.default,{schema:E})},a=F,l.abrupt("return",a);case 15:case"end":return l.stop()}},S)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-3"}},"listDisplay-demo-4":{component:Object(W.dynamic)({loader:function(){var D=Object(x.a)(f.a.mark(function S(){var d,s,h,E,F,a;return f.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,s=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,h=(0,l.t2)(l.t3),window.hello=function(N){var I=N.value;console.log(I)},E={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list4",itemProps:{buttons:[{callback:"hello",text:"\u590D\u5236"}]},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},F=function(){return s.default.createElement(h.default,{schema:E})},a=F,l.abrupt("return",a);case 16:case"end":return l.stop()}},S)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

window.hello = ({ value }) => {
  console.log(value);
};

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      widget: 'list4',
      itemProps: {
        buttons: [
          {
            callback: 'hello',
            text: '\u590D\u5236',
          },
        ],
      },
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-4"}},"watch-demo":{component:Object(W.dynamic)({loader:function(){var D=Object(x.a)(f.a.mark(function S(){var d,s,h,E,F,a,u,l;return f.a.wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return F=function(o,B){if(!B&&o&&o.__esModule)return o;if(o===null||typeof o!="object"&&typeof o!="function")return{default:o};var p=E(B);if(p&&p.has(o))return p.get(o);var r={},g=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in o)if(v!=="default"&&Object.prototype.hasOwnProperty.call(o,v)){var T=g?Object.getOwnPropertyDescriptor(o,v):null;T&&(T.get||T.set)?Object.defineProperty(r,v,T):r[v]=o[v]}return r.default=o,p&&p.set(o,r),r},E=function(o){if(typeof WeakMap!="function")return null;var B=new WeakMap,p=new WeakMap;return(E=function(g){return g?p:B})(o)},I.t0=F,I.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return I.t1=I.sent,d=(0,I.t0)(I.t1),I.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 9:return s=I.sent,I.t2=F,I.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 13:return I.t3=I.sent,h=(0,I.t2)(I.t3),a={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"}}},u=function(){var o=(0,h.useForm)(),B={"#":function(r){console.log("\u8868\u5355\u7684\u65F6\u65F6\u6570\u636E\u4E3A\uFF1A",r)},input1:function(r){o.setValueByPath("input2",r)}};return d.default.createElement(h.default,{form:o,schema:a,watch:B})},l=u,I.abrupt("return",l);case 19:case"end":return I.stop()}},S)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo"}},"watch-demo-1":{component:Object(W.dynamic)({loader:function(){var D=Object(x.a)(f.a.mark(function S(){var d,s,h,E,F,a,u,l,N,I;return f.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return u=function(p,r){if(!r&&p&&p.__esModule)return p;if(p===null||typeof p!="object"&&typeof p!="function")return{default:p};var g=a(r);if(g&&g.has(p))return g.get(p);var v={},T=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var M in p)if(M!=="default"&&Object.prototype.hasOwnProperty.call(p,M)){var U=T?Object.getOwnPropertyDescriptor(p,M):null;U&&(U.get||U.set)?Object.defineProperty(v,M,U):v[M]=p[M]}return v.default=p,g&&g.set(p,v),v},a=function(p){if(typeof WeakMap!="function")return null;var r=new WeakMap,g=new WeakMap;return(a=function(T){return T?g:r})(p)},d=e("K+nK"),o.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return o.t0=d,o.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return o.t1=o.sent,s=(0,o.t0)(o.t1),o.t2=u,o.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return o.t3=o.sent,h=(0,o.t2)(o.t3),o.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 17:return E=o.sent,o.t4=u,o.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 21:return o.t5=o.sent,F=(0,o.t4)(o.t5),l={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"radio"}}}}},N=function(){var p=(0,F.useForm)(),r=function(T,M){M.length>0?alert("errorFields:"+JSON.stringify(M)):alert("formData:"+JSON.stringify(T,null,2))},g={input1:function(T){T.length>2?p.setSchemaByPath("obj1.select",function(M){var U=M.enumNames;return{enumNames:U.map(function(ne){return ne+"a"})}}):p.setSchemaByPath("obj1.select",{enumNames:["\u65E9","\u4E2D","\u665A"]})}};return h.default.createElement("div",null,h.default.createElement(F.default,{form:p,schema:l,onFinish:r,watch:g}),h.default.createElement(s.default,{type:"",style:{marginRight:8},onClick:function(){return p.setSchemaByPath("input2",{title:"\u7F16\u8F91\u6846",format:"textarea"})}},"\u5C06 input \u6539\u4E3A textarea"),h.default.createElement(s.default,{type:"primary",onClick:p.submit},"\u63D0\u4EA4"))},I=N,o.abrupt("return",I);case 27:case"end":return o.stop()}},S)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo-1"}},"widget-demo":{component:Object(W.dynamic)({loader:function(){var D=Object(x.a)(f.a.mark(function S(){var d,s,h,E,F,a,u,l,N,I,P,o,B;return f.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return N=function(v,T){if(!T&&v&&v.__esModule)return v;if(v===null||typeof v!="object"&&typeof v!="function")return{default:v};var M=l(T);if(M&&M.has(v))return M.get(v);var U={},ne=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ae in v)if(ae!=="default"&&Object.prototype.hasOwnProperty.call(v,ae)){var ye=ne?Object.getOwnPropertyDescriptor(v,ae):null;ye&&(ye.get||ye.set)?Object.defineProperty(U,ae,ye):U[ae]=v[ae]}return U.default=v,M&&M.set(v,U),U},l=function(v){if(typeof WeakMap!="function")return null;var T=new WeakMap,M=new WeakMap;return(l=function(ne){return ne?M:T})(v)},d=e("K+nK"),r.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return r.t0=d,r.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return r.t1=r.sent,s=(0,r.t0)(r.t1),r.next=12,Promise.all([e.e(3),e.e(63)]).then(e.t.bind(null,"cUip",7));case 12:return r.t2=d,r.next=15,Promise.all([e.e(0),e.e(13),e.e(61),e.e(69)]).then(e.t.bind(null,"iJl9",7));case 15:return r.t3=r.sent,h=(0,r.t2)(r.t3),r.t4=d,r.next=20,e.e(72).then(e.bind(null,"0Owb"));case 20:return r.t5=r.sent,E=(0,r.t4)(r.t5),r.t6=N,r.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return r.t7=r.sent,F=(0,r.t6)(r.t7),r.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 29:return a=r.sent,r.t8=N,r.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 33:return r.t9=r.sent,u=(0,r.t8)(r.t9),I={type:"object",properties:{string:{title:"\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6",type:"string",widget:"site"},select:{title:"\u5355\u9009",type:"number",enum:[1,2,3],enumNames:["\u9009\u98791","\u9009\u98792","\u9009\u98793"]}}},P=function(v){return console.log("widget props:",v),F.default.createElement(h.default,(0,E.default)({addonBefore:"http://",addonAfter:".com"},v))},o=function(){var v=(0,u.useForm)(),T=function(){};return F.default.createElement("div",null,F.default.createElement(u.default,{readOnly:!0,form:v,schema:I,widgets:{site:P},onFinish:function(U){return alert(JSON.stringify(U,null,2))}}),F.default.createElement(s.default,{type:"primary",onClick:v.submit},"\u63D0\u4EA4"))},B=o,r.abrupt("return",B);case 40:case"end":return r.stop()}},S)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
  console.log('widget props:', props);
  return <Input addonBefore="http://" addonAfter=".com" {...props} />;
};

const Demo = () => {
  const form = useForm();
  const handleSubmit = () => {};
  return (
    <div>
      <Form
        readOnly
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},identifier:"widget-demo"}},"schema-demo":{component:Object(W.dynamic)({loader:function(){var D=Object(x.a)(f.a.mark(function S(){var d,s,h,E,F;return f.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return d=e("K+nK"),u.t0=d,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,s=(0,u.t0)(u.t1),u.t2=d,u.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return u.t3=u.sent,h=(0,u.t2)(u.t3),u.next=13,e.e(17).then(e.bind(null,"8iYR"));case 13:return E=u.sent,F=function(){return s.default.createElement(h.default,{schema:E.basic})},u.abrupt("return",F);case 16:case"end":return u.stop()}},S)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { basic } from '../json/schema';

export default () => <FR schema={basic} />;`},"demo/FR.jsx":{import:"../demo/FR",content:Re},"json/schema.js":{import:"../json/schema",content:ve}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo"}},"schema-demo-1":{component:Object(W.dynamic)({loader:function(){var D=Object(x.a)(f.a.mark(function S(){var d,s,h,E,F;return f.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return d=e("K+nK"),u.t0=d,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,s=(0,u.t0)(u.t1),u.t2=d,u.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return u.t3=u.sent,h=(0,u.t2)(u.t3),u.next=13,e.e(17).then(e.bind(null,"8iYR"));case 13:return E=u.sent,F=function(){return s.default.createElement(h.default,{schema:E.titleTrick})},u.abrupt("return",F);case 16:case"end":return u.stop()}},S)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { titleTrick } from '../json/schema';

export default () => <FR schema={titleTrick} />;`},"demo/FR.jsx":{import:"../demo/FR",content:Re},"json/schema.js":{import:"../json/schema",content:ve}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo-1"}},"docs-playground":{component:Object(W.dynamic)({loader:function(){var D=Object(x.a)(f.a.mark(function S(){return f.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(22)]).then(e.bind(null,"BASV"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},S)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:xn},"main.js":{import:"./main",content:Pe},"json/simplest.json":{import:"./json/simplest.json",content:on},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:Tn},"monaco/index.js":{import:"./monaco",content:Rn},"suggestionsMap.js":{import:"./suggestionsMap",content:vn},"index.css":{import:"./index.css",content:Ye}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:"^17.x"},"react-dom":{version:">=16.9.0"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.4.5-beta.0"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-monaco-editor":{version:"0.43.0"},"@types/react":{version:"^17.x"}},identifier:"docs-playground"}},"table-render-advanced":{component:Object(W.dynamic)({loader:function(){var D=Object(x.a)(f.a.mark(function S(){return f.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(22)]).then(e.bind(null,"7ZP+"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},S)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{tsx:Wn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.0"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"1.x"}},transform:!0,defaultShowCode:!0,identifier:"table-render-advanced"}},"table-render-demo":{component:Object(W.dynamic)({loader:function(){var D=Object(x.a)(f.a.mark(function S(){var d,s,h,E,F,a,u,l,N;return f.a.wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return d=e("K+nK"),P.t0=d,P.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return P.t1=P.sent,s=(0,P.t0)(P.t1),P.next=8,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(59)]).then(e.bind(null,"P2DI"));case 8:for(h=P.sent,E=[],F=0;F<6;F++)E.push({id:F.toString(),title:"\u6807\u9898".concat(F+1),created_at:new Date().getTime()});return a={type:"object",properties:{string:{title:"\u6807\u9898",type:"string","ui:width":"30%"},created_at:{title:"\u521B\u5EFA\u65F6\u95F4",type:"string",format:"date","ui:width":"30%"}}},u=[{title:"\u6807\u9898",dataIndex:"title"},{title:"\u521B\u5EFA\u65F6\u95F4",key:"since",dataIndex:"created_at",valueType:"date"},{title:"\u64CD\u4F5C",render:function(B,p){return s.default.createElement("a",{onClick:function(){return alert(B.title)}},"\u7F16\u8F91")}}],l=function(){var B=function(){return{rows:E,total:E.length}};return s.default.createElement(h.TableProvider,null,s.default.createElement(h.Search,{schema:a,api:B}),s.default.createElement(h.Table,{headerTitle:"\u6700\u7B80\u8868\u683C",columns:u,rowKey:"id"}))},N=l,P.abrupt("return",N);case 16:case"end":return P.stop()}},S)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Wrapper;`}},dependencies:{react:{version:">=16.8.0"},"table-render":{version:"1.1.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.x"}},transform:!0,defaultShowCode:!0,identifier:"table-render-demo"}},"generator-demo":{component:Object(W.dynamic)({loader:function(){var D=Object(x.a)(f.a.mark(function S(){var d,s,h,E,F,a;return f.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,s=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(60)]).then(e.bind(null,"nYSz"));case 9:return l.t3=l.sent,h=(0,l.t2)(l.t3),E={type:"object",properties:{inputName:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string"}}},F=function(){return s.default.createElement("div",{style:{height:"80vh"}},s.default.createElement(h.default,{defaultValue:E}))},a=F,l.abrupt("return",a);case 15:case"end":return l.stop()}},S)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"generator-demo"}},"generator-modal":{component:Object(W.dynamic)({loader:function(){var D=Object(x.a)(f.a.mark(function S(){return f.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(22)]).then(e.bind(null,"PPgD"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},S)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:Kn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.4.0"},"react-dom":{version:">=16.9.0"}},identifier:"generator-modal"}},"generator-settings":{component:Object(W.dynamic)({loader:function(){var D=Object(x.a)(f.a.mark(function S(){return f.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(22)]).then(e.bind(null,"M63W"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},S)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:Sn}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-settings"}},"generator-layout":{component:Object(W.dynamic)({loader:function(){var D=Object(x.a)(f.a.mark(function S(){return f.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(22)]).then(e.bind(null,"SOdT"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},S)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:we},"index.less":{import:"./index.less",content:zn}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-layout"}},"generator-transformer":{component:Object(W.dynamic)({loader:function(){var D=Object(x.a)(f.a.mark(function S(){return f.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(22)]).then(e.bind(null,"jktF"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},S)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:Ln}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.4.0"},"react-dom":{version:">=16.9.0"}},identifier:"generator-transformer"}},"generator-playground":{component:Object(W.dynamic)({loader:function(){var D=Object(x.a)(f.a.mark(function S(){return f.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(22)]).then(e.bind(null,"TYW4"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},S)}));function j(){return D.apply(this,arguments)}return j}()}),previewerProps:{sources:{_:{jsx:_n},"index.less":{import:"./index.less",content:zn}},dependencies:{react:{version:">=16.8.0"},umi:{version:"3.4.20"},"fr-generator":{version:"2.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-playground"}}}},TIsu:function(yn,un,e){},"TN5+":function(yn,un,e){"use strict";var x=e("0Owb"),n=e("q1tI"),f=e.n(n),W=e("kERV"),de=e.n(W);un.a=L=>f.a.createElement("div",Object(x.default)({className:"__dumi-default-alert"},L))},Zs1V:function(yn){yn.exports=JSON.parse("{}")},kERV:function(yn,un,e){},p8sG:function(yn,un,e){"use strict";yn.exports=e("80pN")},"unS/":function(yn,un,e){"use strict";e.r(un);var x=e("q1tI"),n=e.n(x),f=e("dEAq"),W=e.n(f),de=e("TN5+"),L=e("0zqC"),Qe=e("ZpkN"),Re=e("JjdP"),ve=n.a.memo(Re.default["form-render-demo"].component),xn=n.a.memo(Re.default["form-render-demo-1"].component),Pe=n.a.memo(Re.default["form-render-demo-2"].component);un.default=on=>(n.a.useEffect(()=>{on!=null&&on.location.hash&&f.AnchorLink.scrollToAnchor(decodeURIComponent(on.location.hash.slice(1)))},[]),n.a.createElement(n.a.Fragment,null,n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"markdown"},n.a.createElement("div",{style:{display:"flex",alignItems:"center",marginBottom:"24px"}},n.a.createElement("img",{src:"https://img.alicdn.com/tfs/TB17UtINiLaK1RjSZFxXXamPFXa-606-643.png",alt:"logo",width:"48px"}),n.a.createElement("span",{style:{fontSize:"30px",fontWeight:"600",display:"inline-block",marginLeft:"12px"}},"FormRender")),n.a.createElement("p",{style:{display:"flex",justifyContent:"space-between",width:"440px"}},n.a.createElement(f.Link,{to:"https://www.npmjs.com/package/form-render?_blank"},n.a.createElement("img",{alt:"npm",src:"https://img.shields.io/npm/v/form-render.svg?maxAge=3600&style=flat-square"})),n.a.createElement(f.Link,{to:"https://npmjs.org/package/form-render"},n.a.createElement("img",{alt:"NPM downloads",src:"https://img.shields.io/npm/dm/form-render.svg?style=flat-square"})),n.a.createElement(f.Link,{to:"https://npmjs.org/package/form-render"},n.a.createElement("img",{alt:"NPM all downloads",src:"https://img.shields.io/npm/dt/form-render.svg?style=flat-square"})),n.a.createElement("a",null,n.a.createElement("img",{alt:"PRs Welcome",src:"https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square"}))),n.a.createElement("blockquote",null,n.a.createElement("p",null,"\u4E00\u7AD9\u5F0F\u4E2D\u540E\u53F0",n.a.createElement("strong",null,"\u8868\u5355\u89E3\u51B3\u65B9\u6848"))),n.a.createElement("p",null,"FormRender 1.0 \u662F\u4E0B\u4E00\u4EE3\u7684 ",n.a.createElement("code",null,"React.js")," \u8868\u5355\u89E3\u51B3\u65B9\u6848\u3002\u9879\u76EE\u4ECE\u5185\u6838\u7EA7\u522B\u8FDB\u884C\u4E86\u91CD\u5199\uFF0C\u4E3A\u4E86\u80FD\u5207\u5B9E\u627F\u63A5\u65E5\u76CA\u590D\u6742\u7684\u8868\u5355\u573A\u666F\u9700\u6C42\u3002\u6211\u4EEC\u7684\u76EE\u6807\u662F\u4EE5\u5F3A\u5927\u7684\u6269\u5C55\u80FD\u529B\u5BF9\u8868\u5355\u573A\u666F 100%\u7684\u8986\u76D6\u652F\u6301\uFF0C\u540C\u65F6\u4FDD\u6301\u5F00\u53D1\u8005\u80FD\u5FEB\u901F\u4E0A\u624B\uFF0C\u5E76\u4EE5\u8868\u5355\u7F16\u8F91\u5668\u3001\u63D2\u4EF6\u3001\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7B49\u4E00\u7CFB\u5217\u5468\u8FB9\u4EA7\u54C1\u5E26\u6765\u6781\u81F4\u7684\u5F00\u53D1\u4F53\u9A8C\u3002\u5728\u5F00\u53D1 1.0 \u7684\u9053\u8DEF\u4E0A\uFF0C\u6211\u4EEC\u505A\u4E86\u4E00\u7CFB\u5217\u7684\u53D6\u820D\uFF0C\u8BE6\u89C1",n.a.createElement(f.Link,{to:"/form-render/migrate"},"0.x - 1.0 \u8FC1\u79FB\u6587\u6863")),n.a.createElement(de.a,null,n.a.createElement("span",null,"FormRender \u5DF2\u5347\u7EA7\u5230 v1.x \u7248\u672C\uFF0C\u5E76\u5BF9\u5916\u63D0\u4F9B\u4E2D\u540E\u53F0\u5F00\u7BB1\u5373\u7528 XRender \u8868\u5355 / \u8868\u683C / \u56FE\u8868\u65B9\u6848\uFF0C\u5982\u9700\u4F7F\u7528\u8001\u7248\u672C(v0.x)\uFF0C\u8BF7\u70B9\u51FB\u53F3\u4E0A\u89D2 ",n.a.createElement(f.Link,{to:"http://x-components.gitee.io/form-render/",target:"_blank_"}," \u65E7\u6587\u6863 "))),n.a.createElement("h2",{id:"\u5B89\u88C5"},n.a.createElement(f.AnchorLink,{to:"#\u5B89\u88C5","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u5B89\u88C5"),n.a.createElement("p",null,"FormRender \u4F9D\u8D56 ant design\uFF0C\u5355\u72EC\u4F7F\u7528\u4E0D\u8981\u5FD8\u8BB0\u540C\u65F6\u5B89\u88C5 ",n.a.createElement("code",null,"antd")),n.a.createElement(Qe.a,{code:"npm i form-render --save",lang:"shell"}),n.a.createElement("h2",{id:"\u4F7F\u7528"},n.a.createElement(f.AnchorLink,{to:"#\u4F7F\u7528","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u4F7F\u7528"),n.a.createElement("p",null,n.a.createElement("strong",null,"\u6700\u7B80\u4F7F\u7528 demo\uFF1A"))),n.a.createElement(L.default,Re.default["form-render-demo"].previewerProps,n.a.createElement(ve,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("p",null,n.a.createElement("strong",null,"\u5BF9\u4E8E\u51FD\u6570\u7EC4\u4EF6\uFF0CFormRender \u63D0\u4F9B\u4E86 ",n.a.createElement("code",null,"useForm")," hooks, \u4E66\u5199\u66F4\u4E3A\u7075\u6D3B"))),n.a.createElement(L.default,Re.default["form-render-demo-1"].previewerProps,n.a.createElement(xn,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("p",null,n.a.createElement("strong",null,"\u6362\u4E00\u4E2A\u66F4\u590D\u6742\u4E00\u70B9\u7684 schema\uFF0C\u6211\u4EEC\u652F\u6301\u6570\u636E\u7ED1\u5B9A\u3001antd \u7684 props \u900F\u4F20\u7B49\u4E00\u7CFB\u5217\u529F\u80FD\uFF1A"))),n.a.createElement(L.default,Re.default["form-render-demo-2"].previewerProps,n.a.createElement(Pe,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("p",null,n.a.createElement("strong",null,"\u4ECE demo \u4E2D\u6211\u4EEC\u4E0D\u96BE\u53D1\u73B0 FormRender \u7684\u4E00\u4E9B\u8BBE\u8BA1\uFF1A")),n.a.createElement("ol",null,n.a.createElement("li",null,"\u4EE5 schema \u6765\u63CF\u8FF0\u8868\u5355\u5C55\u793A\uFF0C\u63D0\u4EA4\u65B9\u5F0F\u4E0E antd v4 \u7684\u65B9\u5F0F\u7C7B\u4F3C"),n.a.createElement("li",null,"schema \u4EE5\u56FD\u9645\u6807\u51C6\u7684 JSON schema \u4E3A\u57FA\u7840\uFF0C\u540C\u65F6\u80FD\u591F\u65B9\u4FBF\u4F7F\u7528\u4EFB\u4F55 antd \u7684 props"),n.a.createElement("li",null,"\u901A\u8FC7 bind \u5B57\u6BB5\uFF0C\u6211\u4EEC\u5141\u8BB8\u6570\u636E\u7684\u53CC\u5411\u7ED1\u5B9A\uFF0C\u6570\u636E\u5C55\u793A\u548C\u771F\u5B9E\u63D0\u4EA4\u7684\u6570\u636E\u53EF\u4EE5\u6839\u636E\u5F00\u53D1\u9700\u6C42\u4E0D\u540C\uFF08\u4F8B\u5982\u4ECE\u670D\u52A1\u7AEF\u63A5\u53E3\u62FF\u5230\u4E0D\u89C4\u5219\u6570\u636E\u65F6\uFF0C\u4E5F\u80FD\u76F4\u63A5\u4F7F\u7528\uFF09"),n.a.createElement("li",null,"\u53EF\u4EE5\u901A\u8FC7",n.a.createElement("code",null,"displayType"),",",n.a.createElement("code",null,"labelWidth"),"\u7B49\u5B57\u6BB5\u8F7B\u6613\u4FEE\u6539\u5C55\u793A")),n.a.createElement("h2",{id:"\u9AD8\u7EA7\u7528\u6CD5"},n.a.createElement(f.AnchorLink,{to:"#\u9AD8\u7EA7\u7528\u6CD5","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u9AD8\u7EA7\u7528\u6CD5"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement(f.Link,{to:"/form-render/advanced/function"},"\u5982\u4F55\u5199\u8868\u5355\u95F4\u7684\u7B80\u5355\u8054\u52A8\u5173\u7CFB\uFF1F"))),n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement(f.Link,{to:"/form-render/advanced/watch"},"\u5982\u4F55\u901A\u8FC7\u76D1\u542C\u5B9E\u73B0\u590D\u6742\u8054\u52A8\uFF1F"))),n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement(f.Link,{to:"/form-render/advanced/widget"},"\u5982\u4F55\u7528\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u5B8C\u6210\u5B9A\u5236\u5143\u7D20\u7684\u5C55\u793A\uFF1F"))),n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement(f.Link,{to:"/form-render/advanced/form-methods"},"\u5982\u4F55\u5199\u4E00\u4E2A\u5B8C\u6574\u7684\u670D\u52A1\u7AEF\u6570\u636E\u8868\u5355\u52A0\u8F7D\u548C\u63D0\u4EA4\uFF1F"))),n.a.createElement("li",null,n.a.createElement("p",null,"\u60F3\u8981\u4E00\u4E2A\u591A\u9009\u7EC4\u4EF6\uFF0C\u8BE5\u600E\u4E48\u5199\u5B83\u7684 schema\uFF1F"),n.a.createElement("p",null,"\u5F88\u591A\u540C\u5B66\u9605\u8BFB schema \u6587\u6863\u7684\u76EE\u7684\u53EA\u662F\u5982\u6B64\uFF0C\u5EFA\u8BAE\u6253\u5F00 ",n.a.createElement(f.Link,{to:"/playground"},"playground"),", \u70B9\u51FB\u201C\u57FA\u7840\u63A7\u4EF6\u201D\u3002\u8FD9\u91CC\u6709\u6240\u6709 FormRender \u652F\u6301\u7684\u5C55\u793A\u4EE5\u53CA\u5BF9\u4E8E\u7684 schema")),n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement(f.Link,{to:"/form-render/faq"},"\u5176\u4ED6\u5E38\u89C1\u95EE\u9898 FAQ")))),n.a.createElement("h2",{id:"\u7EC4\u4EF6-props"},n.a.createElement(f.AnchorLink,{to:"#\u7EC4\u4EF6-props","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u7EC4\u4EF6 Props"),n.a.createElement(Qe.a,{code:"import Form, { useForm, connectForm } from 'form-render';",lang:"js"}),n.a.createElement("h3",{id:"form--\u5E38\u7528-props"},n.a.createElement(f.AnchorLink,{to:"#form--\u5E38\u7528-props","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"<Form /> (\u5E38\u7528 props)"),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u53C2\u6570"),n.a.createElement("th",null,"\u63CF\u8FF0"),n.a.createElement("th",null,"\u7C7B\u578B"),n.a.createElement("th",null,"\u662F\u5426\u5FC5\u586B"),n.a.createElement("th",null,"\u9ED8\u8BA4\u503C"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"schema"),n.a.createElement("td",null,"\u63CF\u8FF0\u8868\u5355\u7684 schema\uFF0C\u8BE6\u89C1"),n.a.createElement("td",null,n.a.createElement("code",null,"object")),n.a.createElement("td",null,"\u662F"),n.a.createElement("td",null)),n.a.createElement("tr",null,n.a.createElement("td",null,"form"),n.a.createElement("td",null,n.a.createElement("code",null,"useForm"),"\u521B\u5EFA\u7684\u8868\u5355\u5B9E\u4F8B\uFF0C\u4E0E Form \u4E00\u5BF9\u4E00\u7ED1\u5B9A"),n.a.createElement("td",null,n.a.createElement("code",null,"FormInstance")),n.a.createElement("td",null,"\u662F"),n.a.createElement("td",null)),n.a.createElement("tr",null,n.a.createElement("td",null,"onFinish"),n.a.createElement("td",null,"\u63D0\u4EA4\u540E\u7684\u56DE\u8C03\uFF0C\u6267\u884C form.submit() \u540E\u89E6\u53D1"),n.a.createElement("td",null,n.a.createElement("code",null,"(data, errors: Error[]) => void")),n.a.createElement("td",null,"\u5426"),n.a.createElement("td",null,"() => ","{","}")),n.a.createElement("tr",null,n.a.createElement("td",null,"beforeFinish"),n.a.createElement("td",null,"\u5728 onFinish \u524D\u89E6\u53D1\uFF0C\u4E00\u822C\u7528\u4E8E\u5916\u90E8\u6821\u9A8C\u903B\u8F91\u7684\u56DE\u586B\uFF0C\u5165\u53C2\u662F\u4E2A\u5BF9\u8C61\uFF0C\u4FBF\u4E8E\u6269\u5C55"),n.a.createElement("td",null,"`(","{"," data, errors, schema, ...rest ","}",") => Error[]"),n.a.createElement("td",null,"Promise<Error[]>`"),n.a.createElement("td",null,"\u5426")),n.a.createElement("tr",null,n.a.createElement("td",null,"onMount"),n.a.createElement("td",null,"\u8868\u5355\u9996\u6B21\u52A0\u8F7D\u65F6\u89E6\u53D1\uFF0C\u8BE6\u89C1",n.a.createElement(f.Link,{to:"/form-render/advanced/life-cycle"},"\u751F\u547D\u5468\u671F")),n.a.createElement("td",null,n.a.createElement("code",null,"() => void")),n.a.createElement("td",null,"\u5426"),n.a.createElement("td",null,"() => ","{","}")),n.a.createElement("tr",null,n.a.createElement("td",null,"displayType"),n.a.createElement("td",null,"\u8868\u5355\u5143\u7D20\u4E0E label \u540C\u884C or \u5206\u4E24\u884C\u5C55\u793A, inline \u5219\u6574\u4E2A\u5C55\u793A\u81EA\u7136\u987A\u6392"),n.a.createElement("td",null,n.a.createElement("code",null,"string('column' / 'row' / 'inline')")),n.a.createElement("td",null,"\u5426"),n.a.createElement("td",null,"'column'")),n.a.createElement("tr",null,n.a.createElement("td",null,"widgets"),n.a.createElement("td",null,"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\uFF0C\u5F53\u5185\u7F6E\u7EC4\u4EF6\u65E0\u6CD5\u6EE1\u8DB3\u65F6\u4F7F\u7528"),n.a.createElement("td",null,n.a.createElement("code",null,"object")),n.a.createElement("td",null,"\u5426"),n.a.createElement("td",null,"{","}")),n.a.createElement("tr",null,n.a.createElement("td",null,"watch"),n.a.createElement("td",null,"\u7C7B\u4F3C\u4E8E vue \u7684 watch \u7684\u7528\u6CD5\uFF0C\u8BE6\u89C1",n.a.createElement(f.Link,{to:"/form-render/advanced/watch"},"\u8868\u5355\u76D1\u542C & \u56DE\u8C03")),n.a.createElement("td",null,n.a.createElement("code",null,"object")),n.a.createElement("td",null,"\u5426"),n.a.createElement("td",null,"{","}")))),n.a.createElement("p",null,"\u6CE8 1\uFF1A"),n.a.createElement("h3",{id:"form--\u4E0D\u5E38\u7528-props"},n.a.createElement(f.AnchorLink,{to:"#form--\u4E0D\u5E38\u7528-props","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"<Form /> (\u4E0D\u5E38\u7528 props)"),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u53C2\u6570"),n.a.createElement("th",null,"\u63CF\u8FF0"),n.a.createElement("th",null,"\u7C7B\u578B"),n.a.createElement("th",null,"\u9ED8\u8BA4\u503C"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"column"),n.a.createElement("td",null,"\u4E00\u884C\u5C55\u793A\u591A\u5C11\u5217"),n.a.createElement("td",null,n.a.createElement("code",null,"number")),n.a.createElement("td",null,"1")),n.a.createElement("tr",null,n.a.createElement("td",null,"mapping"),n.a.createElement("td",null,"schema \u4E0E\u7EC4\u4EF6\u7684\u6620\u5C04\u5173\u7CFB\u8868\uFF0C\u5F53\u5185\u7F6E\u7684\u8868\u4E0D\u6EE1\u8DB3\u65F6\u4F7F\u7528"),n.a.createElement("td",null,n.a.createElement("code",null,"object")),n.a.createElement("td",null,"{","}")),n.a.createElement("tr",null,n.a.createElement("td",null,"readOnly"),n.a.createElement("td",null,"\u53EA\u8BFB\u6A21\u5F0F\uFF0C\u4E00\u822C\u7528\u4E8E\u9884\u89C8\u5C55\u793A\uFF0C\u5168\u6587 text \u5C55\u793A"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,"false")),n.a.createElement("tr",null,n.a.createElement("td",null,"disabled"),n.a.createElement("td",null,"\u7981\u7528\u6A21\u5F0F\uFF0C\u5168\u90E8\u8868\u5355\u5143\u7D20\u7981\u7528"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,"false")),n.a.createElement("tr",null,n.a.createElement("td",null,"debug"),n.a.createElement("td",null,"\u5F00\u542F debug \u6A21\u5F0F\uFF0C\u65F6\u65F6\u663E\u793A\u8868\u5355\u5185\u90E8\u72B6\u6001"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,"false")),n.a.createElement("tr",null,n.a.createElement("td",null,"debugCss"),n.a.createElement("td",null,"\u7528\u4E8E css \u95EE\u9898\u7684\u8C03\u6574\uFF0C\u663E\u793A css \u5E03\u5C40\u63D0\u793A\u7EBF"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,"false")),n.a.createElement("tr",null,n.a.createElement("td",null,"locale"),n.a.createElement("td",null,"\u5C55\u793A\u8BED\u8A00\uFF0C\u76EE\u524D\u53EA\u652F\u6301\u4E2D\u6587\u3001\u82F1\u6587"),n.a.createElement("td",null,n.a.createElement("code",null,"string('cn'/'en')")),n.a.createElement("td",null,"'cn'")),n.a.createElement("tr",null,n.a.createElement("td",null,"configProvider"),n.a.createElement("td",null,"antd \u7684 configProvider\uFF0C\u914D\u7F6E\u900F\u4F20"),n.a.createElement("td",null,n.a.createElement("code",null,"object")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"allCollapsed"),n.a.createElement("td",null,"\u5BF9\u8C61\u7EC4\u4EF6\u662F\u5426\u9ED8\u8BA4\u6298\u53E0\uFF08\u5168\u5C40\uFF09"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,"false")),n.a.createElement("tr",null,n.a.createElement("td",null,"debounceInput"),n.a.createElement("td",null,"\u662F\u5426\u5F00\u542F\u8F93\u5165\u65F6\u4F7F\u7528\u5FEB\u7167\u6A21\u5F0F\u3002\u4EC5\u5EFA\u8BAE\u5728\u8868\u5355\u5DE8\u5927\u4E14\u8868\u8FBE\u5F0F\u975E\u5E38\u591A\u65F6\u5F00\u542F"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,"false")),n.a.createElement("tr",null,n.a.createElement("td",null,"validateMessages"),n.a.createElement("td",null,"\u4FEE\u6539\u9ED8\u8BA4\u7684\u6821\u9A8C\u63D0\u793A\u4FE1\u606F\u3002\u8BE6\u89C1\u4E0B"),n.a.createElement("td",null,n.a.createElement("code",null,"object")),n.a.createElement("td",null,"{","}")))),n.a.createElement("h4",{id:"validatemessages"},n.a.createElement(f.AnchorLink,{to:"#validatemessages","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"validateMessages"),n.a.createElement("p",null,n.a.createElement("code",null,"Form")," \u4E3A\u9A8C\u8BC1\u63D0\u4F9B\u4E86",n.a.createElement(f.Link,{to:"https://github.com/alibaba/x-render/blob/master/packages/form-render/src/validateMessageCN.js"},"\u9ED8\u8BA4\u7684\u9519\u8BEF\u63D0\u793A\u4FE1\u606F"),"\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7\u914D\u7F6E ",n.a.createElement("code",null,"validateMessages")," \u5C5E\u6027\uFF0C\u4FEE\u6539\u5BF9\u5E94\u7684\u63D0\u793A\u6A21\u677F\u3002\u4E00\u79CD\u5E38\u89C1\u7684\u4F7F\u7528\u65B9\u5F0F\uFF0C\u662F\u914D\u7F6E\u56FD\u9645\u5316\u63D0\u793A\u4FE1\u606F\uFF1A"),n.a.createElement(Qe.a,{code:`const validateMessages = {
  required: '\${title}\u662F\u5FC5\u9009\u5B57\u6BB5',
  // ...
};

<Form validateMessages={validateMessages} />;`,lang:"js"}),n.a.createElement("p",null,"\u76EE\u524D\u53EF\u4EE5\u7528\u7684\u8F6C\u4E49\u5B57\u6BB5\u4E3A ",n.a.createElement("code",null,"$","{","title","}"),"/",n.a.createElement("code",null,"$","{","min","}"),"/",n.a.createElement("code",null,"$","{","max","}"),"/",n.a.createElement("code",null,"$","{","len","}"),"/",n.a.createElement("code",null,"$","{","pattern","}"),", \u5982\u679C\u6709\u66F4\u591A\u9700\u6C42\u8BF7\u63D0 ",n.a.createElement(f.Link,{to:"https://github.com/alibaba/x-render/issues/new/choose"},"issue")),n.a.createElement("h3",{id:"useform--connectform"},n.a.createElement(f.AnchorLink,{to:"#useform--connectform","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"useForm / connectForm"),n.a.createElement("p",null,n.a.createElement("code",null,"useForm")," / ",n.a.createElement("code",null,"connectForm")," \u7528\u4E8E\u521B\u5EFA\u8868\u5355\u5B9E\u4F8B\uFF0C\u6240\u6709\u5BF9\u8868\u5355\u7684\u5916\u90E8\u64CD\u4F5C\u548C\u56DE\u8C03\u51FD\u6570\u5168\u6302\u5728\u5176\u751F\u4EA7\u7684\u5B9E\u4F8B\u4E0A,\u4F8B\u5982\u8868\u5355\u63D0\u4EA4\u662F ",n.a.createElement("code",null,"form.submit"),"\u3002\u6CE8\u610F ",n.a.createElement("code",null,"useForm")," \u662F hooks\uFF0C\u800C ",n.a.createElement("code",null,"connectForm")," \u662F\u9AD8\u9636\u7EC4\u4EF6\uFF0C\u6240\u4EE5\u524D\u8005\u53EA\u80FD\u5728\u51FD\u6570\u7EC4\u4EF6\u4F7F\u7528\uFF0C\u540E\u8005\u53EF\u7528\u4E8E class \u7EC4\u4EF6\u3002\u4E24\u8005\u65E0\u5176\u4ED6\u533A\u522B\u3002\u4F7F\u7528\u65F6\u9700\u8981\u521B\u5EFA\u5B9E\u4F8B\uFF0C\u5E76\u901A\u8FC7 props \u6302\u94A9\u5230\u4E0E\u5176\u5BF9\u5E94\u7684\u8868\u5355\u4E0A\uFF1A"),n.a.createElement(Qe.a,{code:`import Form, { useForm } from 'form-render';

const Demo = () => {
  const form = useForm();
  return <Form form={form} schema={...} />;
};`,lang:"js"}),n.a.createElement(Qe.a,{code:`import Form, { connectForm } from 'form-render';

const Demo = ({ form }) => {
  return <Form form={form} schema={...} />;
};

export default connectForm(Demo);`,lang:"js"}),n.a.createElement("p",null,n.a.createElement("strong",null,"form \u65B9\u6CD5")),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u53C2\u6570"),n.a.createElement("th",null,"\u63CF\u8FF0"),n.a.createElement("th",null,"\u7C7B\u578B"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"submit"),n.a.createElement("td",null,"\u89E6\u53D1\u63D0\u4EA4\u6D41\u7A0B\uFF0C\u4E00\u822C\u5728\u63D0\u4EA4\u6309\u94AE\u4E0A\u4F7F\u7528"),n.a.createElement("td",null,n.a.createElement("code",null,"() => void"))),n.a.createElement("tr",null,n.a.createElement("td",null,"resetFields"),n.a.createElement("td",null,"\u6E05\u7A7A\u8868\u5355\uFF08\u4E5F\u4F1A\u6E05\u7A7A\u4E00\u4E9B\u5185\u7F6E\u72B6\u6001\uFF0C\u4F8B\u5982\u6821\u9A8C\uFF09"),n.a.createElement("td",null,n.a.createElement("code",null,"() => void"))),n.a.createElement("tr",null,n.a.createElement("td",null,"errorFields"),n.a.createElement("td",null,"\u8868\u5355\u6821\u9A8C\u9519\u8BEF\u7684\u6570\u7EC4"),n.a.createElement("td",null,n.a.createElement("code",null,"array,[","{","name, error: []","}","]"))),n.a.createElement("tr",null,n.a.createElement("td",null,"setErrorFields"),n.a.createElement("td",null,"\u5916\u90E8\u624B\u52A8\u4FEE\u6539 errorFields \u6821\u9A8C\u4FE1\u606F\uFF0C\u7528\u4E8E\u5916\u90E8\u6821\u9A8C\u56DE\u586B"),n.a.createElement("td",null,"`(error: Error")),n.a.createElement("tr",null,n.a.createElement("td",null,"setValues"),n.a.createElement("td",null,"\u5916\u90E8\u624B\u52A8\u4FEE\u6539 formData\uFF0C\u7528\u4E8E\u5DF2\u586B\u5199\u7684\u8868\u5355\u7684\u6570\u636E\u56DE\u586B"),n.a.createElement("td",null,n.a.createElement("code",null,"(formData: any) => void"))),n.a.createElement("tr",null,n.a.createElement("td",null,"setValueByPath"),n.a.createElement("td",null,"\u5916\u90E8\u4FEE\u6539\u6307\u5B9A\u5355\u4E2A field \u7684\u6570\u636E(\u539F\u540D onItemChange)"),n.a.createElement("td",null,n.a.createElement("code",null,"(path: string, value: any) => void"))),n.a.createElement("tr",null,n.a.createElement("td",null,"setSchemaByPath"),n.a.createElement("td",null,"\u6307\u5B9A\u8DEF\u5F84\u4FEE\u6539 schema"),n.a.createElement("td",null,n.a.createElement("code",null,"(path: string, value: any) => void"))),n.a.createElement("tr",null,n.a.createElement("td",null,"getValues"),n.a.createElement("td",null,"\u83B7\u53D6\u8868\u5355\u5185\u90E8\u7EF4\u62A4\u7684\u6570\u636E formData"),n.a.createElement("td",null,n.a.createElement("code",null,"() => void"))),n.a.createElement("tr",null,n.a.createElement("td",null,"schema"),n.a.createElement("td",null,"\u8868\u5355\u7684 schema"),n.a.createElement("td",null,"object")),n.a.createElement("tr",null,n.a.createElement("td",null,"touchedKeys"),n.a.createElement("td",null,"\u5DF2\u7ECF\u89E6\u78B0\u8FC7\u7684 field \u7684\u6570\u636E\u8DEF\u5F84"),n.a.createElement("td",null,n.a.createElement("code",null,"string[]"))),n.a.createElement("tr",null,n.a.createElement("td",null,"removeErrorField"),n.a.createElement("td",null,"\u5916\u90E8\u624B\u52A8\u5220\u9664\u67D0\u4E00\u4E2A path \u4E0B\u6240\u6709\u7684\u6821\u9A8C\u4FE1\u606F"),n.a.createElement("td",null,n.a.createElement("code",null,"(path: string) => void"))),n.a.createElement("tr",null,n.a.createElement("td",null,"formData"),n.a.createElement("td",null,"\u8868\u5355\u5185\u90E8\u7EF4\u62A4\u7684\u6570\u636E\uFF0C\u5EFA\u8BAE\u4F7F\u7528 getValues/setValues"),n.a.createElement("td",null,n.a.createElement("code",null,"object"))))),n.a.createElement("h2",{id:"\u5982\u4F55\u901F\u5199-schema"},n.a.createElement(f.AnchorLink,{to:"#\u5982\u4F55\u901F\u5199-schema","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u5982\u4F55\u901F\u5199 Schema"),n.a.createElement("p",null,n.a.createElement("strong",null,"\u5BF9\u4E8E\u521D\u5B66\u8005\u6765\u8BF4\u8BB0\u4F4F schema \u6240\u6709\u7684\u5B57\u6BB5\u548C\u4F7F\u7528\u65B9\u5F0F\u5E76\u975E\u6613\u4E8B\u3002\u4E3A\u4E86\u8BA9\u5927\u5BB6\u80FD\u591F\u5FEB\u901F\u4E0A\u624B\uFF0C\u5EFA\u8BAE\u4EE5\u4EE5\u4E0B\u7684\u987A\u5E8F\u5C1D\u8BD5\uFF1A")),n.a.createElement("ol",null,n.a.createElement("li",null,n.a.createElement("p",null,"\u53BB ",n.a.createElement(f.Link,{to:"/playground"},"Playground")," \u901B\u901B\uFF0C\u90A3\u91CC\u6709\u4ECE\u57FA\u7840\u73A9\u6CD5\u3001\u9AD8\u7EA7\u529F\u80FD\u5230\u5B8C\u6574\u6837\u4F8B\u7684\u6240\u6709 schema \u6837\u4F8B")),n.a.createElement("li",null,n.a.createElement("p",null,"\u73A9\u8F6C\u4E00\u4E0B ",n.a.createElement(f.Link,{to:"https://x-render.gitee.io/tools/generator"},"\u8868\u5355\u8BBE\u8BA1\u5668"),"\uFF0C\u62D6\u62D6\u62FD\u62FD\u5BFC\u51FA schema\uFF0C\u4E22\u5230\u4EE3\u7801\u91CC\u751F\u6210\u53EF\u7528\u8868\u5355\u3002\u672C\u8D28\u4E0A\u8FD9\u662F\u4E00\u4E2A\u53EF\u89C6\u5316\u7684 schema \u751F\u6210\u5668\uFF0C\u652F\u6301 schema \u7684\u5BFC\u5165 & \u5BFC\u51FA"),n.a.createElement("div",null,n.a.createElement("img",{src:"https://gw.alipayobjects.com/mdn/rms_e18934/afts/img/A*4QYNTbKU6xAAAAAAAAAAAABkARQnAQ?raw=true",width:"500px"}),n.a.createElement("img",{src:"https://gw.alipayobjects.com/mdn/rms_e18934/afts/img/A*FfTuRYjRd1AAAAAAAAAAAABkARQnAQ?raw=true",alt:"schema\u7F16\u8F91\u5668",width:"500px"}))),n.a.createElement("li",null,n.a.createElement("p",null,"\u8BE6\u7EC6\u7684 schema \u89C4\u8303\u89C1 ",n.a.createElement(f.Link,{to:"/form-render/schema"},"schema \u7684\u6587\u6863"),"\u3002\u540C\u65F6\u5728 vscode \u4E0A\u641C\u7D22 ",n.a.createElement("code",null,"formrender")," \u53EF\u4EE5\u627E\u5230 snippets \u63D2\u4EF6\uFF0C\u624B\u719F\u8D77\u6765\u4E00\u6574\u9875\u8868\u5355\u7684 schema \u5F39\u6307\u95F4\u5B8C\u6210")))))))}}]);
