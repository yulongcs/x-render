(window.webpackJsonp=window.webpackJsonp||[]).push([[36,10],{"0zqC":function(Kn,hn,e){"use strict";e.r(hn);var G=e("tJVT"),n=e("q1tI"),C=e.n(n),W=e("wx14"),de=e("rePB"),L=e("ODXe"),Xe=e("U8pU"),Fe=e("Ff2n"),ve=e("VTBJ"),Rn=e("TSYQ"),Ne=e.n(Rn),An=e("Zm9Q"),Mn=e("5Z9U"),Sn=e("6cGi"),fn=e("KQm4"),Ye=e("wgJM"),Ln=e("t23M");function wn(t){var i=Object(n.useRef)(),c=Object(n.useRef)(!1);function b(){for(var O=arguments.length,g=new Array(O),S=0;S<O;S++)g[S]=arguments[S];c.current||(Ye.a.cancel(i.current),i.current=Object(Ye.a)(function(){t.apply(void 0,g)}))}return Object(n.useEffect)(function(){return function(){c.current=!0,Ye.a.cancel(i.current)}},[]),b}function jn(t){var i=Object(n.useRef)([]),c=Object(n.useState)({}),b=Object(L.a)(c,2),O=b[1],g=Object(n.useRef)(typeof t=="function"?t():t),S=wn(function(){var B=g.current;i.current.forEach(function($){B=$(B)}),i.current=[],g.current=B,O({})});function j(B){i.current.push(B),S()}return[g.current,j]}var Be=e("4IlW");function Gn(t,i){var c,b=t.prefixCls,O=t.id,g=t.active,S=t.rtl,j=t.tab,B=j.key,$=j.tab,V=j.disabled,x=j.closeIcon,J=t.tabBarGutter,se=t.tabPosition,Q=t.closable,X=t.renderWrapper,le=t.removeAriaLabel,z=t.editable,q=t.onClick,re=t.onRemove,Y=t.onFocus,oe="".concat(b,"-tab");n.useEffect(function(){return re},[]);var k={};se==="top"||se==="bottom"?k[S?"marginLeft":"marginRight"]=J:k.marginBottom=J;var be=z&&Q!==!1&&!V;function ee(ie){V||q(ie)}function ce(ie){ie.preventDefault(),ie.stopPropagation(),z.onEdit("remove",{key:B,event:ie})}var me=n.createElement("div",{key:B,ref:i,className:Ne()(oe,(c={},Object(de.a)(c,"".concat(oe,"-with-remove"),be),Object(de.a)(c,"".concat(oe,"-active"),g),Object(de.a)(c,"".concat(oe,"-disabled"),V),c)),style:k,onClick:ee},n.createElement("div",{role:"tab","aria-selected":g,id:O&&"".concat(O,"-tab-").concat(B),className:"".concat(oe,"-btn"),"aria-controls":O&&"".concat(O,"-panel-").concat(B),"aria-disabled":V,tabIndex:V?null:0,onClick:function(H){H.stopPropagation(),ee(H)},onKeyDown:function(H){[Be.a.SPACE,Be.a.ENTER].includes(H.which)&&(H.preventDefault(),ee(H))},onFocus:Y},$),be&&n.createElement("button",{type:"button","aria-label":le||"remove",tabIndex:0,className:"".concat(oe,"-remove"),onClick:function(H){H.stopPropagation(),ce(H)}},x||z.removeIcon||"\xD7"));return X&&(me=X(me)),me}var $n=n.forwardRef(Gn),_n={width:0,height:0,left:0,top:0};function ct(t,i,c){return Object(n.useMemo)(function(){for(var b,O=new Map,g=i.get((b=t[0])===null||b===void 0?void 0:b.key)||_n,S=g.left+g.width,j=0;j<t.length;j+=1){var B=t[j].key,$=i.get(B);if(!$){var V;$=i.get((V=t[j-1])===null||V===void 0?void 0:V.key)||_n}var x=O.get(B)||Object(ve.a)({},$);x.right=S-x.left-x.width,O.set(B,x)}return O},[t.map(function(b){return b.key}).join("_"),i,c])}var E={width:0,height:0,left:0,top:0,right:0};function I(t,i,c,b,O){var g=O.tabs,S=O.tabPosition,j=O.rtl,B,$,V;["top","bottom"].includes(S)?(B="width",$=j?"right":"left",V=Math.abs(i.left)):(B="height",$="top",V=-i.top);var x=i[B],J=c[B],se=b[B],Q=x;return J+se>x&&(Q=x-se),Object(n.useMemo)(function(){if(!g.length)return[0,0];for(var X=g.length,le=X,z=0;z<X;z+=1){var q=t.get(g[z].key)||E;if(q[$]+q[B]>V+Q){le=z-1;break}}for(var re=0,Y=X-1;Y>=0;Y-=1){var oe=t.get(g[Y].key)||E;if(oe[$]<V){re=Y+1;break}}return[re,le]},[t,V,Q,S,g.map(function(X){return X.key}).join("_"),j])}var P=e("Gytx"),d=e.n(P),o=e("Kwbf");function v(t,i){var c=t.prefixCls,b=t.invalidate,O=t.item,g=t.renderItem,S=t.responsive,j=t.registerSize,B=t.itemKey,$=t.className,V=t.style,x=t.children,J=t.display,se=t.order,Q=t.component,X=Q===void 0?"div":Q,le=Object(Fe.a)(t,["prefixCls","invalidate","item","renderItem","responsive","registerSize","itemKey","className","style","children","display","order","component"]),z=S&&!J;function q(be){j(B,be)}n.useEffect(function(){return function(){q(null)}},[]);var re=g&&O!==void 0?g(O):x,Y;b||(Y={opacity:z?0:1,height:z?0:void 0,overflowY:z?"hidden":void 0,order:S?se:void 0,pointerEvents:z?"none":void 0});var oe={};z&&(oe["aria-hidden"]=!0);var k=n.createElement(X,Object(W.a)({className:Ne()(!b&&c,$),style:Object(ve.a)(Object(ve.a)({},Y),V)},oe,le,{ref:i}),re);return S&&(k=n.createElement(Ln.default,{onResize:function(ee){var ce=ee.offsetWidth;q(ce)}},k)),k}var y=n.forwardRef(v);y.displayName="Item";var R=y;function a(){var t=Object(n.useState)({}),i=Object(L.a)(t,2),c=i[1],b=Object(n.useRef)([]),O=Object(n.useRef)(!1),g=0,S=0;Object(n.useEffect)(function(){return function(){O.current=!0}},[]);function j(B){var $=g;g+=1,b.current.length<$+1&&(b.current[$]=B);var V=b.current[$];function x(J){b.current[$]=typeof J=="function"?J(b.current[$]):J,Ye.a.cancel(S),S=Object(Ye.a)(function(){O.current||c({})})}return[V,x]}return j}var l=function(i,c){var b=n.useContext(T);if(!b){var O=i.component,g=O===void 0?"div":O,S=Object(Fe.a)(i,["component"]);return n.createElement(g,Object(W.a)({},S,{ref:c}))}var j=b.className,B=Object(Fe.a)(b,["className"]),$=i.className,V=Object(Fe.a)(i,["className"]);return n.createElement(T.Provider,{value:null},n.createElement(R,Object(W.a)({ref:c,className:Ne()(j,$)},B,V)))},s=n.forwardRef(l);s.displayName="RawItem";var K=s,T=n.createContext(null),D="responsive",u="invalidate";function F(t){return"+ ".concat(t.length," ...")}function f(t,i){var c=t.prefixCls,b=c===void 0?"rc-overflow":c,O=t.data,g=O===void 0?[]:O,S=t.renderItem,j=t.renderRawItem,B=t.itemKey,$=t.itemWidth,V=$===void 0?10:$,x=t.ssr,J=t.style,se=t.className,Q=t.maxCount,X=t.renderRest,le=t.renderRawRest,z=t.suffix,q=t.component,re=q===void 0?"div":q,Y=t.itemComponent,oe=t.onVisibleChange,k=Object(Fe.a)(t,["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"]),be=a(),ee=x==="full",ce=be(null),me=Object(L.a)(ce,2),ie=me[0],H=me[1],ue=ie||0,ge=be(new Map),he=Object(L.a)(ge,2),Se=he[0],We=he[1],Ce=be(0),Re=Object(L.a)(Ce,2),Me=Re[0],Ke=Re[1],Ie=be(0),Ee=Object(L.a)(Ie,2),$e=Ee[0],_e=Ee[1],Ve=be(0),ze=Object(L.a)(Ve,2),Qe=ze[0],Le=ze[1],Pn=Object(n.useState)(null),an=Object(L.a)(Pn,2),Ze=an[0],ln=an[1],yn=Object(n.useState)(null),bn=Object(L.a)(yn,2),Te=bn[0],xe=bn[1],en=n.useMemo(function(){return Te===null&&ee?Number.MAX_SAFE_INTEGER:Te||0},[Te,ie]),ke=Object(n.useState)(!1),Bn=Object(L.a)(ke,2),Jn=Bn[0],Wn=Bn[1],rn="".concat(b,"-item"),En=Math.max(Me,$e),un=g.length&&Q===D,Dn=Q===u,nn=un||typeof Q=="number"&&g.length>Q,sn=Object(n.useMemo)(function(){var pe=g;return un?ie===null&&ee?pe=g:pe=g.slice(0,Math.min(g.length,ue/V)):typeof Q=="number"&&(pe=g.slice(0,Q)),pe},[g,V,ie,Q,un]),In=Object(n.useMemo)(function(){return un?g.slice(en+1):g.slice(sn.length)},[g,sn,un,en]),cn=Object(n.useCallback)(function(pe,je){var we;return typeof B=="function"?B(pe):(we=B&&(pe==null?void 0:pe[B]))!==null&&we!==void 0?we:je},[B]),qe=Object(n.useCallback)(S||function(pe){return pe},[S]);function He(pe,je){xe(pe),je||(Wn(pe<g.length-1),oe==null||oe(pe))}function xn(pe,je){H(je.clientWidth)}function Hn(pe,je){We(function(we){var tn=new Map(we);return je===null?tn.delete(pe):tn.set(pe,je),tn})}function tt(pe,je){_e(je),Ke($e)}function Cn(pe,je){Le(je)}function vn(pe){return Se.get(cn(sn[pe],pe))}n.useLayoutEffect(function(){if(ue&&En&&sn){var pe=Qe,je=sn.length,we=je-1;if(!je){He(0),ln(null);return}for(var tn=0;tn<je;tn+=1){var Zn=vn(tn);if(Zn===void 0){He(tn-1,!0);break}if(pe+=Zn,tn===we-1&&pe+vn(we)<=ue){He(we),ln(null);break}else if(pe+En>ue){He(tn-1),ln(pe-Zn-Qe+$e);break}else if(tn===we){He(we),ln(pe-Qe);break}}z&&vn(0)+Qe>ue&&ln(null)}},[ue,Se,$e,Qe,cn,sn]);var Qn=Jn&&!!In.length,On={};Ze!==null&&un&&(On={position:"absolute",left:Ze,top:0});var mn={prefixCls:rn,responsive:un,component:Y,invalidate:Dn},Xn=j?function(pe,je){var we=cn(pe,je);return n.createElement(T.Provider,{key:we,value:Object(ve.a)(Object(ve.a)({},mn),{},{order:je,item:pe,itemKey:we,registerSize:Hn,display:je<=en})},j(pe,je))}:function(pe,je){var we=cn(pe,je);return n.createElement(R,Object(W.a)({},mn,{order:je,key:we,item:pe,renderItem:qe,itemKey:we,registerSize:Hn,display:je<=en}))},Nn,Yn={order:Qn?en:Number.MAX_SAFE_INTEGER,className:"".concat(rn,"-rest"),registerSize:tt,display:Qn};if(le)le&&(Nn=n.createElement(T.Provider,{value:Object(ve.a)(Object(ve.a)({},mn),Yn)},le(In)));else{var dn=X||F;Nn=n.createElement(R,Object(W.a)({},mn,Yn),typeof dn=="function"?dn(In):dn)}var Tn=n.createElement(re,Object(W.a)({className:Ne()(!Dn&&b,se),style:J,ref:i},k),sn.map(Xn),nn?Nn:null,z&&n.createElement(R,Object(W.a)({},mn,{order:en,className:"".concat(rn,"-suffix"),registerSize:Cn,display:!0,style:On}),z));return un&&(Tn=n.createElement(Ln.default,{onResize:xn},Tn)),Tn}var r=n.forwardRef(f);r.displayName="Overflow",r.Item=K,r.RESPONSIVE=D,r.INVALIDATE=u;var h=r,p=h,A=e("1OyB"),w=e("vuIU"),U=e("Ji7U"),ne=e("LK+K"),ae=e("bT9E"),ye=e("YrtM"),De=n.createContext(null);function Ae(t,i){var c=Object(ve.a)({},t);return Object.keys(i).forEach(function(b){var O=i[b];O!==void 0&&(c[b]=O)}),c}function gn(t){var i=t.children,c=t.locked,b=Object(Fe.a)(t,["children","locked"]),O=n.useContext(De),g=Object(ye.a)(function(){return Ae(O,b)},[O,b],function(S,j){return!c&&(S[0]!==j[0]||!d()(S[1],j[1]))});return n.createElement(De.Provider,{value:g},i)}function Vn(t,i,c,b){var O=n.useContext(De),g=O.activeKey,S=O.onActive,j=O.onInactive,B={active:g===t};return i||(B.onMouseEnter=function($){c==null||c({key:t,domEvent:$}),S(t)},B.onMouseLeave=function($){b==null||b({key:t,domEvent:$}),j(t)}),B}function et(t){var i=t.item,c=Object(Fe.a)(t,["item"]);return Object.defineProperty(c,"item",{get:function(){return Object(o.a)(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),i}}),c}function m(t){var i=t.icon,c=t.props,b=t.children,O;return typeof i=="function"?O=n.createElement(i,Object(ve.a)({},c)):O=i,O||b||null}function N(t){var i=n.useContext(De),c=i.mode,b=i.rtl,O=i.inlineIndent;if(c!=="inline")return null;var g=t;return b?{paddingRight:g*O}:{paddingLeft:g*O}}var M=[],fe=n.createContext(null);function _(){return n.useContext(fe)}var Pe=n.createContext(M);function Ue(t){var i=n.useContext(Pe);return n.useMemo(function(){return t!==void 0?[].concat(Object(fn.a)(i),[t]):i},[i,t])}var Je=n.createContext(null),zt=n.createContext(null);function Gt(t,i){return t===void 0?null:"".concat(t,"-").concat(i)}function Jt(t){var i=n.useContext(zt);return Gt(i,t)}var ba=function(t){Object(U.a)(c,t);var i=Object(ne.a)(c);function c(){return Object(A.a)(this,c),i.apply(this,arguments)}return Object(w.a)(c,[{key:"render",value:function(){var O=this.props,g=O.title,S=O.attribute,j=O.elementRef,B=Object(Fe.a)(O,["title","attribute","elementRef"]),$=Object(ae.a)(B,["eventKey"]);return Object(o.a)(!S,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),n.createElement(p.Item,Object(W.a)({},S,{title:typeof g=="string"?g:void 0},$,{ref:j}))}}]),c}(n.Component),Ca=function(i){var c,b=i.style,O=i.className,g=i.eventKey,S=i.disabled,j=i.itemIcon,B=i.children,$=i.role,V=i.onMouseEnter,x=i.onMouseLeave,J=i.onClick,se=i.onKeyDown,Q=i.onFocus,X=Object(Fe.a)(i,["style","className","eventKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"]),le=Jt(g),z=n.useContext(De),q=z.prefixCls,re=z.onItemClick,Y=z.disabled,oe=z.overflowDisabled,k=z.itemIcon,be=z.selectedKeys,ee=z.onActive,ce="".concat(q,"-item"),me=n.useRef(),ie=n.useRef(),H=Y||S,ue=Ue(g),ge=function(Ve){return{key:g,keyPath:ue,item:me.current,domEvent:Ve}},he=j||k,Se=Vn(g,H,V,x),We=Se.active,Ce=Object(Fe.a)(Se,["active"]),Re=be.includes(g),Me=N(ue.length),Ke=function(Ve){if(!H){var ze=ge(Ve);J==null||J(et(ze)),re(ze)}},Ie=function(Ve){if(se==null||se(Ve),Ve.which===Be.a.ENTER){var ze=ge(Ve);J==null||J(et(ze)),re(ze)}},Ee=function(Ve){ee(g),Q==null||Q(Ve)},$e={};return i.role==="option"&&($e["aria-selected"]=Re),n.createElement(ba,Object(W.a)({ref:me,elementRef:ie,role:$===null?"none":$||"menuitem",tabIndex:S?null:-1,"data-menu-id":oe&&le?null:le},X,Ce,$e,{component:"li","aria-disabled":S,style:Object(ve.a)(Object(ve.a)({},Me),b),className:Ne()(ce,(c={},Object(de.a)(c,"".concat(ce,"-active"),We),Object(de.a)(c,"".concat(ce,"-selected"),Re),Object(de.a)(c,"".concat(ce,"-disabled"),H),c),O),onClick:Ke,onKeyDown:Ie,onFocus:Ee}),B,n.createElement(m,{props:Object(ve.a)(Object(ve.a)({},i),{},{isSelected:Re}),icon:he}))};function Oa(t){var i=t.eventKey,c=_(),b=Ue(i);return n.useEffect(function(){if(c)return c.registerPath(i,b),function(){c.unregisterPath(i,b)}},[b]),c?null:n.createElement(Ca,t)}var Et=Oa;function Dt(t,i){return Object(An.a)(t).map(function(c,b){if(n.isValidElement(c)){var O=c.key;return O==null&&(O="tmp_key-".concat([].concat(Object(fn.a)(i),[b]).join("-"))),n.cloneElement(c,{key:O,eventKey:O})}return c})}function nt(t){var i=n.useRef(t);i.current=t;var c=n.useCallback(function(){for(var b,O=arguments.length,g=new Array(O),S=0;S<O;S++)g[S]=arguments[S];return(b=i.current)===null||b===void 0?void 0:b.call.apply(b,[i].concat(g))},[]);return t?c:void 0}var Ra=function(i,c){var b=i.className,O=i.children,g=Object(Fe.a)(i,["className","children"]),S=n.useContext(De),j=S.prefixCls,B=S.mode;return n.createElement("ul",Object(W.a)({className:Ne()(j,"".concat(j,"-sub"),"".concat(j,"-").concat(B==="inline"?"inline":"vertical"),b)},g,{"data-menu-list":!0,ref:c}),O)},xt=n.forwardRef(Ra);xt.displayName="SubMenuList";var Ht=xt,Sa=e("uciX"),Un={adjustX:1,adjustY:1},Qt={topLeft:{points:["bl","tl"],overflow:Un,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Un,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:Un,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:Un,offset:[4,0]}},ja={topLeft:{points:["bl","tl"],overflow:Un,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Un,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:Un,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:Un,offset:[4,0]}},fr=Qt;function Xt(t,i,c){if(i)return i;if(c)return c[t]||c.other}var Pa={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function Ea(t){var i=t.prefixCls,c=t.visible,b=t.children,O=t.popup,g=t.popupClassName,S=t.popupOffset,j=t.disabled,B=t.mode,$=t.onVisibleChange,V=n.useContext(De),x=V.getPopupContainer,J=V.rtl,se=V.subMenuOpenDelay,Q=V.subMenuCloseDelay,X=V.builtinPlacements,le=V.triggerSubMenuAction,z=V.forceSubMenuRender,q=V.motion,re=V.defaultMotions,Y=n.useState(!1),oe=Object(L.a)(Y,2),k=oe[0],be=oe[1],ee=J?Object(ve.a)(Object(ve.a)({},ja),X):Object(ve.a)(Object(ve.a)({},Qt),X),ce=Pa[B],me=Xt(B,q,re),ie=Object(ve.a)(Object(ve.a)({},me),{},{leavedClassName:"".concat(i,"-hidden"),removeOnLeave:!1,motionAppear:!0}),H=n.useRef();return n.useEffect(function(){return H.current=Object(Ye.a)(function(){be(c)}),function(){Ye.a.cancel(H.current)}},[c]),n.createElement(Sa.a,{prefixCls:i,popupClassName:Ne()("".concat(i,"-popup"),Object(de.a)({},"".concat(i,"-rtl"),J),g),stretch:B==="horizontal"?"minWidth":null,getPopupContainer:x,builtinPlacements:ee,popupPlacement:ce,popupVisible:k,popup:O,popupAlign:S&&{offset:S},action:j?[]:[le],mouseEnterDelay:se,mouseLeaveDelay:Q,onPopupVisibleChange:$,forceRender:z,popupMotion:ie},b)}var Da=e("8XRh");function Ia(t){var i=t.id,c=t.open,b=t.keyPath,O=t.children,g="inline",S=n.useContext(De),j=S.prefixCls,B=S.forceSubMenuRender,$=S.motion,V=S.defaultMotions,x=S.mode,J=n.useRef(!1);J.current=x===g;var se=n.useState(!J.current),Q=Object(L.a)(se,2),X=Q[0],le=Q[1],z=J.current?c:!1;n.useEffect(function(){J.current&&le(!1)},[x]);var q=Object(ve.a)({},Xt(g,$,V));b.length>1&&(q.motionAppear=!1);var re=q.onVisibleChanged;return q.onVisibleChanged=function(Y){return!J.current&&!Y&&le(!0),re==null?void 0:re(Y)},X?null:n.createElement(gn,{mode:g,locked:!J.current},n.createElement(Da.default,Object(W.a)({visible:z},q,{forceRender:B,removeOnLeave:!1,leavedClassName:"".concat(j,"-hidden")}),function(Y){var oe=Y.className,k=Y.style;return n.createElement(Ht,{id:i,className:oe,style:k},O)}))}var Na=function(i){var c,b=i.style,O=i.className,g=i.title,S=i.eventKey,j=i.disabled,B=i.internalPopupClose,$=i.children,V=i.itemIcon,x=i.expandIcon,J=i.popupClassName,se=i.popupOffset,Q=i.onClick,X=i.onMouseEnter,le=i.onMouseLeave,z=i.onTitleClick,q=i.onTitleMouseEnter,re=i.onTitleMouseLeave,Y=Object(Fe.a)(i,["style","className","title","eventKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"]),oe=Jt(S),k=n.useContext(De),be=k.prefixCls,ee=k.mode,ce=k.openKeys,me=k.disabled,ie=k.overflowDisabled,H=k.activeKey,ue=k.selectedKeys,ge=k.itemIcon,he=k.expandIcon,Se=k.onItemClick,We=k.onOpenChange,Ce=k.onActive,Re=n.useContext(Je),Me=Re.isSubPathKey,Ke=Ue(),Ie="".concat(be,"-submenu"),Ee=me||j,$e=n.useRef(),_e=n.useRef(),Ve=V||ge,ze=x||he,Qe=ce.includes(S),Le=!ie&&Qe,Pn=Me(ue,S),an=Vn(S,Ee,q,re),Ze=an.active,ln=Object(Fe.a)(an,["active"]),yn=n.useState(!1),bn=Object(L.a)(yn,2),Te=bn[0],xe=bn[1],en=function(He){Ee||xe(He)},ke=function(He){en(!0),X==null||X({key:S,domEvent:He})},Bn=function(He){en(!1),le==null||le({key:S,domEvent:He})},Jn=n.useMemo(function(){return Ze||(ee!=="inline"?Te||Me([H],S):!1)},[ee,Ze,H,Te,S,Me]),Wn=N(Ke.length),rn=function(He){Ee||(z==null||z({key:S,domEvent:He}),ee==="inline"&&We(S,!Qe))},En=nt(function(qe){Q==null||Q(et(qe)),Se(qe)}),un=function(He){ee!=="inline"&&We(S,He)},Dn=function(){Ce(S)},nn=oe&&"".concat(oe,"-popup"),sn=n.createElement("div",Object(W.a)({role:"menuitem",style:Wn,className:"".concat(Ie,"-title"),tabIndex:Ee?null:-1,ref:$e,title:typeof g=="string"?g:null,"data-menu-id":ie&&oe?null:oe,"aria-expanded":Le,"aria-haspopup":!0,"aria-controls":nn,"aria-disabled":Ee,onClick:rn,onFocus:Dn},ln),g,n.createElement(m,{icon:ee!=="horizontal"?ze:null,props:Object(ve.a)(Object(ve.a)({},i),{},{isOpen:Le,isSubMenu:!0})},n.createElement("i",{className:"".concat(Ie,"-arrow")}))),In=n.useRef(ee);if(ee!=="inline"&&(In.current=Ke.length>1?"vertical":ee),!ie){var cn=In.current;sn=n.createElement(Ea,{mode:cn,prefixCls:Ie,visible:!B&&Le&&ee!=="inline",popupClassName:J,popupOffset:se,popup:n.createElement(gn,{mode:cn},n.createElement(Ht,{id:nn,ref:_e},$)),disabled:Ee,onVisibleChange:un},sn)}return n.createElement(gn,{onItemClick:En,mode:ee==="horizontal"?"vertical":ee,itemIcon:Ve,expandIcon:ze},n.createElement(p.Item,Object(W.a)({role:"none"},Y,{component:"li",style:b,className:Ne()(Ie,"".concat(Ie,"-").concat(ee),O,(c={},Object(de.a)(c,"".concat(Ie,"-open"),Le),Object(de.a)(c,"".concat(Ie,"-active"),Jn),Object(de.a)(c,"".concat(Ie,"-selected"),Pn),Object(de.a)(c,"".concat(Ie,"-disabled"),Ee),c)),onMouseEnter:ke,onMouseLeave:Bn}),sn,!ie&&n.createElement(Ia,{id:nn,open:Le,keyPath:Ke},$)))};function Yt(t){var i=t.eventKey,c=t.children,b=Ue(i),O=Dt(c,b),g=_();n.useEffect(function(){if(g)return g.registerPath(i,b),function(){g.unregisterPath(i,b)}},[b]);var S;return g?S=O:S=n.createElement(Na,t,O),n.createElement(Pe.Provider,{value:b},S)}var Ta=e("x/xZ");function Zt(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Object(Ta.a)(t)){var c=t.nodeName.toLowerCase(),b=["input","select","textarea","button"].includes(c)||t.isContentEditable||c==="a"&&!!t.getAttribute("href"),O=t.getAttribute("tabindex"),g=Number(O),S=null;return O&&!Number.isNaN(g)?S=g:b&&S===null&&(S=0),b&&t.disabled&&(S=null),S!==null&&(S>=0||i&&S<0)}return!1}function kt(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,c=Object(fn.a)(t.querySelectorAll("*")).filter(function(b){return Zt(b,i)});return Zt(t,i)&&c.unshift(t),c}var mt=null;function pr(){mt=document.activeElement}function vr(){mt=null}function hr(){if(mt)try{mt.focus()}catch(t){}}function gr(t,i){if(i.keyCode===9){var c=kt(t),b=c[i.shiftKey?0:c.length-1],O=b===document.activeElement||t===document.activeElement;if(O){var g=c[i.shiftKey?c.length-1:0];g.focus(),i.preventDefault()}}}var It=Be.a.LEFT,Nt=Be.a.RIGHT,Tt=Be.a.UP,ft=Be.a.DOWN,pt=Be.a.ENTER,qt=Be.a.ESC,_t=[Tt,ft,It,Nt];function Fa(t,i,c,b){var O,g,S,j,B="prev",$="next",V="children",x="parent";if(t==="inline"&&b===pt)return{inlineTrigger:!0};var J=(O={},Object(de.a)(O,Tt,B),Object(de.a)(O,ft,$),O),se=(g={},Object(de.a)(g,It,c?$:B),Object(de.a)(g,Nt,c?B:$),Object(de.a)(g,ft,V),Object(de.a)(g,pt,V),g),Q=(S={},Object(de.a)(S,Tt,B),Object(de.a)(S,ft,$),Object(de.a)(S,pt,V),Object(de.a)(S,qt,x),Object(de.a)(S,It,c?V:x),Object(de.a)(S,Nt,c?x:V),S),X={inline:J,horizontal:se,vertical:Q,inlineSub:J,horizontalSub:Q,verticalSub:Q},le=(j=X["".concat(t).concat(i?"":"Sub")])===null||j===void 0?void 0:j[b];switch(le){case B:return{offset:-1,sibling:!0};case $:return{offset:1,sibling:!0};case x:return{offset:-1,sibling:!1};case V:return{offset:1,sibling:!1};default:return null}}function Ka(t){for(var i=t;i;){if(i.getAttribute("data-menu-list"))return i;i=i.parentElement}return null}function Aa(t,i){for(var c=t||document.activeElement;c;){if(i.has(c))return c;c=c.parentElement}return null}function Ma(t,i){var c=kt(t,!0);return c.filter(function(b){return i.has(b)})}function ea(t,i,c){var b=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!t)return null;var O=Ma(t,i),g=O.length,S=O.findIndex(function(j){return c===j});return b<0?S===-1?S=g-1:S-=1:b>0&&(S+=1),S=(S+g)%g,O[S]}function wa(t,i,c,b,O,g,S,j,B,$){var V=n.useRef(),x=n.useRef();x.current=i;var J=function(){Ye.a.cancel(V.current)};return n.useEffect(function(){return function(){J()}},[]),function(se){var Q=se.which;if([].concat(_t,[pt,qt]).includes(Q)){var X,le,z,q=function(){X=new Set,le=new Map,z=new Map;var ge=g();return ge.forEach(function(he){var Se=document.querySelector("[data-menu-id='".concat(Gt(b,he),"']"));Se&&(X.add(Se),z.set(Se,he),le.set(he,Se))}),X};q();var re=le.get(i),Y=Aa(re,X),oe=z.get(Y),k=Fa(t,S(oe,!0).length===1,c,Q);if(!k)return;_t.includes(Q)&&se.preventDefault();var be=function(ge){if(ge){var he=ge,Se=ge.querySelector("a");(Se==null?void 0:Se.getAttribute("href"))&&(he=Se);var We=z.get(ge);j(We),J(),V.current=Object(Ye.a)(function(){x.current===We&&he.focus()})}};if(k.sibling||!Y){var ee;!Y||t==="inline"?ee=O.current:ee=Ka(Y);var ce=ea(ee,X,Y,k.offset);be(ce)}else if(k.inlineTrigger)B(oe);else if(k.offset>0)B(oe,!0),J(),V.current=Object(Ye.a)(function(){q();var ue=Y.getAttribute("aria-controls"),ge=document.getElementById(ue),he=ea(ge,X);be(he)},5);else if(k.offset<0){var me=S(oe,!0),ie=me[me.length-2],H=le.get(ie);B(ie,!1),be(H)}}$==null||$(se)}}var Ba=Math.random().toFixed(5).toString().slice(2),na=0;function Wa(t){var i=Object(Sn.a)(t,{value:t}),c=Object(L.a)(i,2),b=c[0],O=c[1];return n.useEffect(function(){na+=1;var g="".concat(Ba,"-").concat(na);O("rc-menu-uuid-".concat(g))},[]),b}var yr=e("p8sG");function La(t){Promise.resolve().then(t)}var Ft="__RC_UTIL_PATH_SPLIT__",ta=function(i){return i.join(Ft)},$a=function(i){return i.split(Ft)},Kt="rc-menu-more";function Va(){var t=n.useState({}),i=Object(L.a)(t,2),c=i[1],b=Object(n.useRef)(new Map),O=Object(n.useRef)(new Map),g=n.useState([]),S=Object(L.a)(g,2),j=S[0],B=S[1],$=Object(n.useRef)(0),V=Object(n.useCallback)(function(z,q){var re=ta(q);O.current.set(re,z),b.current.set(z,re),$.current+=1;var Y=$.current;La(function(){Y===$.current&&c({})})},[]),x=Object(n.useCallback)(function(z,q){var re=ta(q);O.current.delete(re),b.current.delete(z)},[]),J=Object(n.useCallback)(function(z){B(z)},[]),se=Object(n.useCallback)(function(z,q){var re=b.current.get(z)||"",Y=$a(re);return q&&j.includes(Y[0])&&Y.unshift(Kt),Y},[j]),Q=Object(n.useCallback)(function(z,q){return z.some(function(re){var Y=se(re,!0);return Y.includes(q)})},[se]),X=function(){var q=Object(fn.a)(b.current.keys());return j.length&&q.push(Kt),q},le=Object(n.useCallback)(function(z){var q="".concat(b.current.get(z)).concat(Ft),re=new Set;return Object(fn.a)(O.current.keys()).forEach(function(Y){Y.startsWith(q)&&re.add(O.current.get(Y))}),re},[]);return{registerPath:V,unregisterPath:x,refreshOverflowKeys:J,isSubPathKey:Q,getKeyPath:se,getKeys:X,getSubPathKeys:le}}var vt=[],Ua=function(i){var c,b,O=i.prefixCls,g=O===void 0?"rc-menu":O,S=i.style,j=i.className,B=i.tabIndex,$=B===void 0?0:B,V=i.children,x=i.direction,J=i.id,se=i.mode,Q=se===void 0?"vertical":se,X=i.inlineCollapsed,le=i.disabled,z=i.disabledOverflow,q=i.subMenuOpenDelay,re=q===void 0?.1:q,Y=i.subMenuCloseDelay,oe=Y===void 0?.1:Y,k=i.forceSubMenuRender,be=i.defaultOpenKeys,ee=i.openKeys,ce=i.activeKey,me=i.defaultActiveFirst,ie=i.selectable,H=ie===void 0?!0:ie,ue=i.multiple,ge=ue===void 0?!1:ue,he=i.defaultSelectedKeys,Se=i.selectedKeys,We=i.onSelect,Ce=i.onDeselect,Re=i.inlineIndent,Me=Re===void 0?24:Re,Ke=i.motion,Ie=i.defaultMotions,Ee=i.triggerSubMenuAction,$e=Ee===void 0?"hover":Ee,_e=i.builtinPlacements,Ve=i.itemIcon,ze=i.expandIcon,Qe=i.overflowedIndicator,Le=Qe===void 0?"...":Qe,Pn=i.getPopupContainer,an=i.onClick,Ze=i.onOpenChange,ln=i.onKeyDown,yn=i.openAnimation,bn=i.openTransitionName,Te=Object(Fe.a)(i,["prefixCls","style","className","tabIndex","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName"]),xe=Dt(V,vt),en=n.useState(!1),ke=Object(L.a)(en,2),Bn=ke[0],Jn=ke[1],Wn=n.useRef(),rn=Wa(J),En=x==="rtl",un=n.useMemo(function(){return Q==="inline"&&X?["vertical",X]:[Q,!1]},[Q,X]),Dn=Object(L.a)(un,2),nn=Dn[0],sn=Dn[1],In=n.useState(0),cn=Object(L.a)(In,2),qe=cn[0],He=cn[1],xn=qe>=xe.length-1||nn!=="horizontal"||z,Hn=Object(Sn.a)(be,{value:ee,postState:function(Z){return Z||vt}}),tt=Object(L.a)(Hn,2),Cn=tt[0],vn=tt[1],Qn=n.useState(Cn),On=Object(L.a)(Qn,2),mn=On[0],Xn=On[1],Nn=nn==="inline",Yn=n.useRef(!1);n.useEffect(function(){Nn&&Xn(Cn)},[Cn]),n.useEffect(function(){if(!Yn.current){Yn.current=!0;return}if(Nn)vn(mn);else{var te=[];vn(te),Ze==null||Ze(te)}},[Nn]);var dn=Va(),Tn=dn.registerPath,pe=dn.unregisterPath,je=dn.refreshOverflowKeys,we=dn.isSubPathKey,tn=dn.getKeyPath,Zn=dn.getKeys,gt=dn.getSubPathKeys,Bt=n.useMemo(function(){return{registerPath:Tn,unregisterPath:pe}},[Tn,pe]),Wt=n.useMemo(function(){return{isSubPathKey:we}},[we]);n.useEffect(function(){je(xn?vt:xe.slice(qe+1).map(function(te){return te.key}))},[qe,xn]);var Lt=Object(Sn.a)(ce||me&&((c=xe[0])===null||c===void 0?void 0:c.key),{value:ce}),at=Object(L.a)(Lt,2),yt=at[0],st=at[1],bt=nt(function(te){st(te)}),$t=nt(function(){st(void 0)}),Ct=Object(Sn.a)(he||[],{value:Se,postState:function(Z){return Array.isArray(Z)?Z:Z==null?vt:[Z]}}),Ot=Object(L.a)(Ct,2),rt=Ot[0],Fn=Ot[1],Rt=function(Z){if(!!H){var Oe=Z.key,Ge=rt.includes(Oe),on;Ge?on=rt.filter(function(qn){return qn!==Oe}):ge?on=[].concat(Object(fn.a)(rt),[Oe]):on=[Oe],Fn(on);var zn=Object(ve.a)(Object(ve.a)({},Z),{},{selectedKeys:on});Ge?Ce==null||Ce(zn):We==null||We(zn)}},St=nt(function(te){an==null||an(et(te)),Rt(te)}),ot=nt(function(te,Z){var Oe=Cn.filter(function(on){return on!==te});if(Z)Oe.push(te);else if(nn!=="inline"){var Ge=gt(te);Oe=Oe.filter(function(on){return!Ge.has(on)})}d()(Cn,Oe)||(vn(Oe),Ze==null||Ze(Oe))}),kn=nt(Pn),lt=function(Z,Oe){var Ge=Oe!=null?Oe:!Cn.includes(Z);ot(Z,Ge)},ut=wa(nn,yt,En,rn,Wn,Zn,tn,st,lt,ln);n.useEffect(function(){Jn(!0)},[]);var jt=nn!=="horizontal"||z?xe:xe.map(function(te,Z){return n.createElement(gn,{key:te.key,overflowDisabled:Z>qe},te)}),Pt=n.createElement(p,Object(W.a)({id:J,ref:Wn,prefixCls:"".concat(g,"-overflow"),component:"ul",itemComponent:Et,className:Ne()(g,"".concat(g,"-root"),"".concat(g,"-").concat(nn),j,(b={},Object(de.a)(b,"".concat(g,"-inline-collapsed"),sn),Object(de.a)(b,"".concat(g,"-rtl"),En),b)),dir:x,style:S,role:"menu",tabIndex:$,data:jt,renderRawItem:function(Z){return Z},renderRawRest:function(Z){var Oe=Z.length,Ge=Oe?xe.slice(-Oe):null;return n.createElement(Yt,{eventKey:Kt,title:Le,disabled:xn,internalPopupClose:Oe===0},Ge)},maxCount:nn!=="horizontal"||z?p.INVALIDATE:p.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(Z){He(Z)},onKeyDown:ut},Te));return n.createElement(zt.Provider,{value:rn},n.createElement(gn,{prefixCls:g,mode:nn,openKeys:Cn,rtl:En,disabled:le,motion:Bn?Ke:null,defaultMotions:Bn?Ie:null,activeKey:yt,onActive:bt,onInactive:$t,selectedKeys:rt,inlineIndent:Me,subMenuOpenDelay:re,subMenuCloseDelay:oe,forceSubMenuRender:k,builtinPlacements:_e,triggerSubMenuAction:$e,getPopupContainer:kn,itemIcon:Ve,expandIcon:ze,onItemClick:St,onOpenChange:ot},n.createElement(Je.Provider,{value:Wt},Pt),n.createElement(fe.Provider,{value:Bt},xe)))},za=Ua,Ga=function(i){var c=i.className,b=i.title,O=i.eventKey,g=i.children,S=Object(Fe.a)(i,["className","title","eventKey","children"]),j=n.useContext(De),B=j.prefixCls,$="".concat(B,"-item-group");return n.createElement("li",Object(W.a)({},S,{onClick:function(x){return x.stopPropagation()},className:Ne()($,c)}),n.createElement("div",{className:"".concat($,"-title"),title:typeof b=="string"?b:void 0},b),n.createElement("ul",{className:"".concat($,"-list")},g))};function Ja(t){var i=t.children,c=Object(Fe.a)(t,["children"]),b=Ue(c.eventKey),O=Dt(i,b),g=_();return g?O:n.createElement(Ga,c,O)}function xa(t){var i=t.className,c=t.style,b=n.useContext(De),O=b.prefixCls,g=_();return g?null:n.createElement("li",{className:Ne()("".concat(O,"-item-divider"),i),style:c})}var it=za;it.Item=Et,it.SubMenu=Yt,it.ItemGroup=Ja,it.Divider=xa;var Ha=it,Qa=e("eDIo");function Xa(t,i){var c=t.prefixCls,b=t.editable,O=t.locale,g=t.style;return!b||b.showAdd===!1?null:n.createElement("button",{ref:i,type:"button",className:"".concat(c,"-nav-add"),style:g,"aria-label":(O==null?void 0:O.addAriaLabel)||"Add tab",onClick:function(j){b.onEdit("add",{event:j})}},b.addIcon||"+")}var aa=n.forwardRef(Xa);function Ya(t,i){var c=t.prefixCls,b=t.id,O=t.tabs,g=t.locale,S=t.mobile,j=t.moreIcon,B=j===void 0?"More":j,$=t.moreTransitionName,V=t.style,x=t.className,J=t.editable,se=t.tabBarGutter,Q=t.rtl,X=t.onTabClick,le=Object(n.useState)(!1),z=Object(L.a)(le,2),q=z[0],re=z[1],Y=Object(n.useState)(null),oe=Object(L.a)(Y,2),k=oe[0],be=oe[1],ee="".concat(b,"-more-popup"),ce="".concat(c,"-dropdown"),me=k!==null?"".concat(ee,"-").concat(k):null,ie=g==null?void 0:g.dropdownAriaLabel,H=n.createElement(Ha,{onClick:function(Re){var Me=Re.key,Ke=Re.domEvent;X(Me,Ke),re(!1)},id:ee,tabIndex:-1,role:"listbox","aria-activedescendant":me,selectedKeys:[k],"aria-label":ie!==void 0?ie:"expanded dropdown"},O.map(function(Ce){return n.createElement(Et,{key:Ce.key,id:"".concat(ee,"-").concat(Ce.key),role:"option","aria-controls":b&&"".concat(b,"-panel-").concat(Ce.key),disabled:Ce.disabled},Ce.tab)}));function ue(Ce){for(var Re=O.filter(function($e){return!$e.disabled}),Me=Re.findIndex(function($e){return $e.key===k})||0,Ke=Re.length,Ie=0;Ie<Ke;Ie+=1){Me=(Me+Ce+Ke)%Ke;var Ee=Re[Me];if(!Ee.disabled){be(Ee.key);return}}}function ge(Ce){var Re=Ce.which;if(!q){[Be.a.DOWN,Be.a.SPACE,Be.a.ENTER].includes(Re)&&(re(!0),Ce.preventDefault());return}switch(Re){case Be.a.UP:ue(-1),Ce.preventDefault();break;case Be.a.DOWN:ue(1),Ce.preventDefault();break;case Be.a.ESC:re(!1);break;case Be.a.SPACE:case Be.a.ENTER:k!==null&&X(k,Ce);break}}Object(n.useEffect)(function(){var Ce=document.getElementById(me);Ce&&Ce.scrollIntoView&&Ce.scrollIntoView(!1)},[k]),Object(n.useEffect)(function(){q||be(null)},[q]);var he=Object(de.a)({},Q?"marginLeft":"marginRight",se);O.length||(he.visibility="hidden",he.order=1);var Se=Ne()(Object(de.a)({},"".concat(ce,"-rtl"),Q)),We=S?null:n.createElement(Qa.default,{prefixCls:ce,overlay:H,trigger:["hover"],visible:q,transitionName:$,onVisibleChange:re,overlayClassName:Se,mouseEnterDelay:.1,mouseLeaveDelay:.1},n.createElement("button",{type:"button",className:"".concat(c,"-nav-more"),style:he,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":ee,id:"".concat(b,"-more"),"aria-expanded":q,onKeyDown:ge},B));return n.createElement("div",{className:Ne()("".concat(c,"-nav-operations"),x),style:V,ref:i},We,n.createElement(aa,{prefixCls:c,locale:g,editable:J}))}var Za=n.forwardRef(Ya),At=Object(n.createContext)(null),ka=.1,ra=.01,ht=20,ia=Math.pow(.995,ht);function qa(t,i){var c=Object(n.useState)(),b=Object(L.a)(c,2),O=b[0],g=b[1],S=Object(n.useState)(0),j=Object(L.a)(S,2),B=j[0],$=j[1],V=Object(n.useState)(0),x=Object(L.a)(V,2),J=x[0],se=x[1],Q=Object(n.useState)(),X=Object(L.a)(Q,2),le=X[0],z=X[1],q=Object(n.useRef)();function re(ce){var me=ce.touches[0],ie=me.screenX,H=me.screenY;g({x:ie,y:H}),window.clearInterval(q.current)}function Y(ce){if(!!O){ce.preventDefault();var me=ce.touches[0],ie=me.screenX,H=me.screenY;g({x:ie,y:H});var ue=ie-O.x,ge=H-O.y;i(ue,ge);var he=Date.now();$(he),se(he-B),z({x:ue,y:ge})}}function oe(){if(!!O&&(g(null),z(null),le)){var ce=le.x/J,me=le.y/J,ie=Math.abs(ce),H=Math.abs(me);if(Math.max(ie,H)<ka)return;var ue=ce,ge=me;q.current=window.setInterval(function(){if(Math.abs(ue)<ra&&Math.abs(ge)<ra){window.clearInterval(q.current);return}ue*=ia,ge*=ia,i(ue*ht,ge*ht)},ht)}}var k=Object(n.useRef)();function be(ce){var me=ce.deltaX,ie=ce.deltaY,H=0,ue=Math.abs(me),ge=Math.abs(ie);ue===ge?H=k.current==="x"?me:ie:ue>ge?(H=me,k.current="x"):(H=ie,k.current="y"),i(-H,-H)&&ce.preventDefault()}var ee=Object(n.useRef)(null);ee.current={onTouchStart:re,onTouchMove:Y,onTouchEnd:oe,onWheel:be},n.useEffect(function(){function ce(ue){ee.current.onTouchStart(ue)}function me(ue){ee.current.onTouchMove(ue)}function ie(ue){ee.current.onTouchEnd(ue)}function H(ue){ee.current.onWheel(ue)}return document.addEventListener("touchmove",me,{passive:!1}),document.addEventListener("touchend",ie,{passive:!1}),t.current.addEventListener("touchstart",ce,{passive:!1}),t.current.addEventListener("wheel",H),function(){document.removeEventListener("touchmove",me),document.removeEventListener("touchend",ie)}},[])}function _a(){var t=Object(n.useRef)(new Map);function i(b){return t.current.has(b)||t.current.set(b,n.createRef()),t.current.get(b)}function c(b){t.current.delete(b)}return[i,c]}function sa(t,i){var c=n.useRef(t),b=n.useState({}),O=Object(L.a)(b,2),g=O[1];function S(j){var B=typeof j=="function"?j(c.current):j;B!==c.current&&i(B,c.current),c.current=B,g({})}return[c.current,S]}var oa=function(i){var c=i.position,b=i.prefixCls,O=i.extra;if(!O)return null;var g,S=O;return c==="right"&&(g=S.right||!S.left&&S||null),c==="left"&&(g=S.left||null),g?n.createElement("div",{className:"".concat(b,"-extra-content")},g):null};function er(t,i){var c,b=n.useContext(At),O=b.prefixCls,g=b.tabs,S=t.className,j=t.style,B=t.id,$=t.animated,V=t.activeKey,x=t.rtl,J=t.extra,se=t.editable,Q=t.locale,X=t.tabPosition,le=t.tabBarGutter,z=t.children,q=t.onTabClick,re=t.onTabScroll,Y=Object(n.useRef)(),oe=Object(n.useRef)(),k=Object(n.useRef)(),be=Object(n.useRef)(),ee=_a(),ce=Object(L.a)(ee,2),me=ce[0],ie=ce[1],H=X==="top"||X==="bottom",ue=sa(0,function(te,Z){H&&re&&re({direction:te>Z?"left":"right"})}),ge=Object(L.a)(ue,2),he=ge[0],Se=ge[1],We=sa(0,function(te,Z){!H&&re&&re({direction:te>Z?"top":"bottom"})}),Ce=Object(L.a)(We,2),Re=Ce[0],Me=Ce[1],Ke=Object(n.useState)(0),Ie=Object(L.a)(Ke,2),Ee=Ie[0],$e=Ie[1],_e=Object(n.useState)(0),Ve=Object(L.a)(_e,2),ze=Ve[0],Qe=Ve[1],Le=Object(n.useState)(0),Pn=Object(L.a)(Le,2),an=Pn[0],Ze=Pn[1],ln=Object(n.useState)(0),yn=Object(L.a)(ln,2),bn=yn[0],Te=yn[1],xe=Object(n.useState)(null),en=Object(L.a)(xe,2),ke=en[0],Bn=en[1],Jn=Object(n.useState)(null),Wn=Object(L.a)(Jn,2),rn=Wn[0],En=Wn[1],un=Object(n.useState)(0),Dn=Object(L.a)(un,2),nn=Dn[0],sn=Dn[1],In=Object(n.useState)(0),cn=Object(L.a)(In,2),qe=cn[0],He=cn[1],xn=jn(new Map),Hn=Object(L.a)(xn,2),tt=Hn[0],Cn=Hn[1],vn=ct(g,tt,Ee),Qn="".concat(O,"-nav-operations-hidden"),On=0,mn=0;H?x?(On=0,mn=Math.max(0,Ee-ke)):(On=Math.min(0,ke-Ee),mn=0):(On=Math.min(0,rn-ze),mn=0);function Xn(te){return te<On?On:te>mn?mn:te}var Nn=Object(n.useRef)(),Yn=Object(n.useState)(),dn=Object(L.a)(Yn,2),Tn=dn[0],pe=dn[1];function je(){pe(Date.now())}function we(){window.clearTimeout(Nn.current)}qa(Y,function(te,Z){function Oe(Ge,on){Ge(function(zn){var qn=Xn(zn+on);return qn})}if(H){if(ke>=Ee)return!1;Oe(Se,te)}else{if(rn>=ze)return!1;Oe(Me,Z)}return we(),je(),!0}),Object(n.useEffect)(function(){return we(),Tn&&(Nn.current=window.setTimeout(function(){pe(0)},100)),we},[Tn]);function tn(){var te=arguments.length>0&&arguments[0]!==void 0?arguments[0]:V,Z=vn.get(te)||{width:0,height:0,left:0,right:0,top:0};if(H){var Oe=he;x?Z.right<he?Oe=Z.right:Z.right+Z.width>he+ke&&(Oe=Z.right+Z.width-ke):Z.left<-he?Oe=-Z.left:Z.left+Z.width>-he+ke&&(Oe=-(Z.left+Z.width-ke)),Me(0),Se(Xn(Oe))}else{var Ge=Re;Z.top<-Re?Ge=-Z.top:Z.top+Z.height>-Re+rn&&(Ge=-(Z.top+Z.height-rn)),Se(0),Me(Xn(Ge))}}var Zn=I(vn,{width:ke,height:rn,left:he,top:Re},{width:an,height:bn},{width:nn,height:qe},Object(ve.a)(Object(ve.a)({},t),{},{tabs:g})),gt=Object(L.a)(Zn,2),Bt=gt[0],Wt=gt[1],Lt=g.map(function(te){var Z=te.key;return n.createElement($n,{id:B,prefixCls:O,key:Z,rtl:x,tab:te,closable:te.closable,editable:se,active:Z===V,tabPosition:X,tabBarGutter:le,renderWrapper:z,removeAriaLabel:Q==null?void 0:Q.removeAriaLabel,ref:me(Z),onClick:function(Ge){q(Z,Ge)},onRemove:function(){ie(Z)},onFocus:function(){tn(Z),je(),x||(Y.current.scrollLeft=0),Y.current.scrollTop=0}})}),at=wn(function(){var te,Z,Oe,Ge,on,zn,qn,Vt,Ut,lr=((te=Y.current)===null||te===void 0?void 0:te.offsetWidth)||0,ur=((Z=Y.current)===null||Z===void 0?void 0:Z.offsetHeight)||0,ma=((Oe=be.current)===null||Oe===void 0?void 0:Oe.offsetWidth)||0,fa=((Ge=be.current)===null||Ge===void 0?void 0:Ge.offsetHeight)||0,dr=((on=k.current)===null||on===void 0?void 0:on.offsetWidth)||0,cr=((zn=k.current)===null||zn===void 0?void 0:zn.offsetHeight)||0;Bn(lr),En(ur),sn(ma),He(fa);var pa=(((qn=oe.current)===null||qn===void 0?void 0:qn.offsetWidth)||0)-ma,va=(((Vt=oe.current)===null||Vt===void 0?void 0:Vt.offsetHeight)||0)-fa;$e(pa),Qe(va);var ha=(Ut=k.current)===null||Ut===void 0?void 0:Ut.className.includes(Qn);Ze(pa-(ha?0:dr)),Te(va-(ha?0:cr)),Cn(function(){var ga=new Map;return g.forEach(function(mr){var ya=mr.key,dt=me(ya).current;dt&&ga.set(ya,{width:dt.offsetWidth,height:dt.offsetHeight,left:dt.offsetLeft,top:dt.offsetTop})}),ga})}),yt=g.slice(0,Bt),st=g.slice(Wt+1),bt=[].concat(Object(fn.a)(yt),Object(fn.a)(st)),$t=Object(n.useState)(),Ct=Object(L.a)($t,2),Ot=Ct[0],rt=Ct[1],Fn=vn.get(V),Rt=Object(n.useRef)();function St(){Ye.a.cancel(Rt.current)}Object(n.useEffect)(function(){var te={};return Fn&&(H?(x?te.right=Fn.right:te.left=Fn.left,te.width=Fn.width):(te.top=Fn.top,te.height=Fn.height)),St(),Rt.current=Object(Ye.a)(function(){rt(te)}),St},[Fn,H,x]),Object(n.useEffect)(function(){tn()},[V,Fn,vn,H]),Object(n.useEffect)(function(){at()},[x,le,V,g.map(function(te){return te.key}).join("_")]);var ot=!!bt.length,kn="".concat(O,"-nav-wrap"),lt,ut,jt,Pt;return H?x?(ut=he>0,lt=he+ke<Ee):(lt=he<0,ut=-he+ke<Ee):(jt=Re<0,Pt=-Re+rn<ze),n.createElement("div",{ref:i,role:"tablist",className:Ne()("".concat(O,"-nav"),S),style:j,onKeyDown:function(){je()}},n.createElement(oa,{position:"left",extra:J,prefixCls:O}),n.createElement(Ln.default,{onResize:at},n.createElement("div",{className:Ne()(kn,(c={},Object(de.a)(c,"".concat(kn,"-ping-left"),lt),Object(de.a)(c,"".concat(kn,"-ping-right"),ut),Object(de.a)(c,"".concat(kn,"-ping-top"),jt),Object(de.a)(c,"".concat(kn,"-ping-bottom"),Pt),c)),ref:Y},n.createElement(Ln.default,{onResize:at},n.createElement("div",{ref:oe,className:"".concat(O,"-nav-list"),style:{transform:"translate(".concat(he,"px, ").concat(Re,"px)"),transition:Tn?"none":void 0}},Lt,n.createElement(aa,{ref:be,prefixCls:O,locale:Q,editable:se,style:{visibility:ot?"hidden":null}}),n.createElement("div",{className:Ne()("".concat(O,"-ink-bar"),Object(de.a)({},"".concat(O,"-ink-bar-animated"),$.inkBar)),style:Ot}))))),n.createElement(Za,Object(W.a)({},t,{ref:k,prefixCls:O,tabs:bt,className:!ot&&Qn})),n.createElement(oa,{position:"right",extra:J,prefixCls:O}))}var la=n.forwardRef(er);function nr(t){var i=t.id,c=t.activeKey,b=t.animated,O=t.tabPosition,g=t.rtl,S=t.destroyInactiveTabPane,j=n.useContext(At),B=j.prefixCls,$=j.tabs,V=b.tabPane,x=$.findIndex(function(J){return J.key===c});return n.createElement("div",{className:Ne()("".concat(B,"-content-holder"))},n.createElement("div",{className:Ne()("".concat(B,"-content"),"".concat(B,"-content-").concat(O),Object(de.a)({},"".concat(B,"-content-animated"),V)),style:x&&V?Object(de.a)({},g?"marginRight":"marginLeft","-".concat(x,"00%")):null},$.map(function(J){return n.cloneElement(J.node,{key:J.key,prefixCls:B,tabKey:J.key,id:i,animated:V,active:J.key===c,destroyInactiveTabPane:S})})))}function ua(t){var i=t.prefixCls,c=t.forceRender,b=t.className,O=t.style,g=t.id,S=t.active,j=t.animated,B=t.destroyInactiveTabPane,$=t.tabKey,V=t.children,x=n.useState(c),J=Object(L.a)(x,2),se=J[0],Q=J[1];n.useEffect(function(){S?Q(!0):B&&Q(!1)},[S,B]);var X={};return S||(j?(X.visibility="hidden",X.height=0,X.overflowY="hidden"):X.display="none"),n.createElement("div",{id:g&&"".concat(g,"-panel-").concat($),role:"tabpanel",tabIndex:S?0:-1,"aria-labelledby":g&&"".concat(g,"-tab-").concat($),"aria-hidden":!S,style:Object(ve.a)(Object(ve.a)({},X),O),className:Ne()("".concat(i,"-tabpane"),S&&"".concat(i,"-tabpane-active"),b)},(S||se||c)&&V)}var da=0;function tr(t){return Object(An.a)(t).map(function(i){if(n.isValidElement(i)){var c=i.key!==void 0?String(i.key):void 0;return Object(ve.a)(Object(ve.a)({key:c},i.props),{},{node:i})}return null}).filter(function(i){return i})}function ar(t,i){var c,b=t.id,O=t.prefixCls,g=O===void 0?"rc-tabs":O,S=t.className,j=t.children,B=t.direction,$=t.activeKey,V=t.defaultActiveKey,x=t.editable,J=t.animated,se=J===void 0?{inkBar:!0,tabPane:!1}:J,Q=t.tabPosition,X=Q===void 0?"top":Q,le=t.tabBarGutter,z=t.tabBarStyle,q=t.tabBarExtraContent,re=t.locale,Y=t.moreIcon,oe=t.moreTransitionName,k=t.destroyInactiveTabPane,be=t.renderTabBar,ee=t.onChange,ce=t.onTabClick,me=t.onTabScroll,ie=Object(Fe.a)(t,["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"]),H=tr(j),ue=B==="rtl",ge;se===!1?ge={inkBar:!1,tabPane:!1}:se===!0?ge={inkBar:!0,tabPane:!0}:ge=Object(ve.a)({inkBar:!0,tabPane:!1},Object(Xe.a)(se)==="object"?se:{});var he=Object(n.useState)(!1),Se=Object(L.a)(he,2),We=Se[0],Ce=Se[1];Object(n.useEffect)(function(){Ce(Object(Mn.a)())},[]);var Re=Object(Sn.a)(function(){var Te;return(Te=H[0])===null||Te===void 0?void 0:Te.key},{value:$,defaultValue:V}),Me=Object(L.a)(Re,2),Ke=Me[0],Ie=Me[1],Ee=Object(n.useState)(function(){return H.findIndex(function(Te){return Te.key===Ke})}),$e=Object(L.a)(Ee,2),_e=$e[0],Ve=$e[1];Object(n.useEffect)(function(){var Te=H.findIndex(function(en){return en.key===Ke});if(Te===-1){var xe;Te=Math.max(0,Math.min(_e,H.length-1)),Ie((xe=H[Te])===null||xe===void 0?void 0:xe.key)}Ve(Te)},[H.map(function(Te){return Te.key}).join("_"),Ke,_e]);var ze=Object(Sn.a)(null,{value:b}),Qe=Object(L.a)(ze,2),Le=Qe[0],Pn=Qe[1],an=X;We&&!["left","right"].includes(X)&&(an="top"),Object(n.useEffect)(function(){b||(Pn("rc-tabs-".concat(da)),da+=1)},[]);function Ze(Te,xe){ce==null||ce(Te,xe),Ie(Te),ee==null||ee(Te)}var ln={id:Le,activeKey:Ke,animated:ge,tabPosition:an,rtl:ue,mobile:We},yn,bn=Object(ve.a)(Object(ve.a)({},ln),{},{editable:x,locale:re,moreIcon:Y,moreTransitionName:oe,tabBarGutter:le,onTabClick:Ze,onTabScroll:me,extra:q,style:z,panes:j});return be?yn=be(bn,la):yn=n.createElement(la,bn),n.createElement(At.Provider,{value:{tabs:H,prefixCls:g}},n.createElement("div",Object(W.a)({ref:i,id:b,className:Ne()(g,"".concat(g,"-").concat(an),(c={},Object(de.a)(c,"".concat(g,"-mobile"),We),Object(de.a)(c,"".concat(g,"-editable"),x),Object(de.a)(c,"".concat(g,"-rtl"),ue),c),S)},ie),yn,n.createElement(nr,Object(W.a)({destroyInactiveTabPane:k},ln,{animated:ge}))))}var ca=n.forwardRef(ar);ca.TabPane=ua;var rr=ca,ir=rr,Mt=e("MZF8"),pn=e("dEAq"),sr=e("ZpkN"),br=e("TIsu");function wt(t,i){var c,b=(c=t.match(/\.(\w+)$/))===null||c===void 0?void 0:c[1];return b||(b=i.tsx?"tsx":"jsx"),b}var or=t=>{var i,c,b,O=Object(n.useRef)(),g=Object(n.useContext)(pn.context),S=g.locale,j=Object(pn.useLocaleProps)(S,t),B=Object(pn.useDemoUrl)(j.identifier),$=j.demoUrl||B,V=(Mt.a===null||Mt.a===void 0?void 0:Mt.a.location.hash)==="#".concat(j.identifier),x=Object.keys(j.sources).length===1,J=Object(pn.useCodeSandbox)((i=j.hideActions)!==null&&i!==void 0&&i.includes("CSB")?null:j),se=Object(pn.useRiddle)((c=j.hideActions)!==null&&c!==void 0&&c.includes("RIDDLE")?null:j),Q=Object(pn.useMotions)(j.motions||[],O.current),X=Object(G.default)(Q,2),le=X[0],z=X[1],q=Object(pn.useCopy)(),re=Object(G.default)(q,2),Y=re[0],oe=re[1],k=Object(n.useState)("_"),be=Object(G.default)(k,2),ee=be[0],ce=be[1],me=Object(n.useState)(wt(ee,j.sources[ee])),ie=Object(G.default)(me,2),H=ie[0],ue=ie[1],ge=Object(n.useState)(Boolean(j.defaultShowCode)),he=Object(G.default)(ge,2),Se=he[0],We=he[1],Ce=Object(n.useState)(Math.random()),Re=Object(G.default)(Ce,2),Me=Re[0],Ke=Re[1],Ie=j.sources[ee][H]||j.sources[ee].content,Ee=Object(pn.useTSPlaygroundUrl)(S,Ie),$e=Object(n.useRef)(),_e=Object(pn.usePrefersColor)(),Ve=Object(G.default)(_e,1),ze=Ve[0];Object(n.useEffect)(()=>{Ke(Math.random())},[ze]);function Qe(Le){ce(Le),ue(wt(Le,j.sources[Le]))}return C.a.createElement("div",{style:j.style,className:[j.className,"__dumi-default-previewer",V?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:j.identifier,"data-debug":j.debug||void 0,"data-iframe":j.iframe||void 0},j.iframe&&C.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),C.a.createElement("div",{ref:O,className:"__dumi-default-previewer-demo",style:{transform:j.transform?"translate(0, 0)":void 0,padding:j.compact||j.iframe&&j.compact!==!1?"0":void 0,background:j.background}},j.iframe?C.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(j.iframe).replace(/(\d)$/,"$1px")},key:Me,src:$,ref:$e}):j.children),C.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":j.title},j.title&&C.a.createElement(pn.AnchorLink,{to:"#".concat(j.identifier)},j.title),j.description&&C.a.createElement("div",{dangerouslySetInnerHTML:{__html:j.description}})),C.a.createElement("div",{className:"__dumi-default-previewer-actions"},J&&C.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:J}),se&&C.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:se}),j.motions&&C.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:z,onClick:()=>le()}),j.iframe&&C.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:()=>Ke(Math.random())}),!((b=j.hideActions)!==null&&b!==void 0&&b.includes("EXTERNAL"))&&C.a.createElement(pn.Link,{target:"_blank",to:$},C.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),C.a.createElement("span",null),C.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":oe,onClick:()=>Y(Ie)}),H==="tsx"&&Se&&C.a.createElement(pn.Link,{target:"_blank",to:Ee},C.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),C.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(Se?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:()=>We(!Se)})),Se&&C.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!x&&C.a.createElement(ir,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xB7\xB7\xB7",defaultActiveKey:ee,onChange:Qe},Object.keys(j.sources).map(Le=>C.a.createElement(ua,{tab:Le==="_"?"index.".concat(wt(Le,j.sources[Le])):Le,key:Le}))),C.a.createElement("div",{className:"__dumi-default-previewer-source"},C.a.createElement(sr.a,{code:Ie,lang:H,showCopy:!1}))))},Cr=hn.default=or},"80pN":function(Kn,hn,e){"use strict";(function(G){/** @license React v16.14.0
* react-dom-test-utils.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var n=e("MgzW"),C=e("q1tI"),W=e("i8i4"),de=e("QCnb");function L(m){for(var N="https://reactjs.org/docs/error-decoder.html?invariant="+m,M=1;M<arguments.length;M++)N+="&args[]="+encodeURIComponent(arguments[M]);return"Minified React error #"+m+"; visit "+N+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Xe=C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;Xe.hasOwnProperty("ReactCurrentDispatcher")||(Xe.ReactCurrentDispatcher={current:null}),Xe.hasOwnProperty("ReactCurrentBatchConfig")||(Xe.ReactCurrentBatchConfig={suspense:null});function Fe(m){var N=m,M=m;if(m.alternate)for(;N.return;)N=N.return;else{m=N;do N=m,(N.effectTag&1026)!=0&&(M=N.return),m=N.return;while(m)}return N.tag===3?M:null}function ve(m){if(Fe(m)!==m)throw Error(L(188))}function Rn(m){var N=m.alternate;if(!N){if(N=Fe(m),N===null)throw Error(L(188));return N!==m?null:m}for(var M=m,fe=N;;){var _=M.return;if(_===null)break;var Pe=_.alternate;if(Pe===null){if(fe=_.return,fe!==null){M=fe;continue}break}if(_.child===Pe.child){for(Pe=_.child;Pe;){if(Pe===M)return ve(_),m;if(Pe===fe)return ve(_),N;Pe=Pe.sibling}throw Error(L(188))}if(M.return!==fe.return)M=_,fe=Pe;else{for(var Ue=!1,Je=_.child;Je;){if(Je===M){Ue=!0,M=_,fe=Pe;break}if(Je===fe){Ue=!0,fe=_,M=Pe;break}Je=Je.sibling}if(!Ue){for(Je=Pe.child;Je;){if(Je===M){Ue=!0,M=Pe,fe=_;break}if(Je===fe){Ue=!0,fe=Pe,M=_;break}Je=Je.sibling}if(!Ue)throw Error(L(189))}}if(M.alternate!==fe)throw Error(L(190))}if(M.tag!==3)throw Error(L(188));return M.stateNode.current===M?m:N}function Ne(){return!0}function An(){return!1}function Mn(m,N,M,fe){this.dispatchConfig=m,this._targetInst=N,this.nativeEvent=M,m=this.constructor.Interface;for(var _ in m)m.hasOwnProperty(_)&&((N=m[_])?this[_]=N(M):_==="target"?this.target=fe:this[_]=M[_]);return this.isDefaultPrevented=(M.defaultPrevented!=null?M.defaultPrevented:M.returnValue===!1)?Ne:An,this.isPropagationStopped=An,this}n(Mn.prototype,{preventDefault:function(){this.defaultPrevented=!0;var m=this.nativeEvent;m&&(m.preventDefault?m.preventDefault():typeof m.returnValue!="unknown"&&(m.returnValue=!1),this.isDefaultPrevented=Ne)},stopPropagation:function(){var m=this.nativeEvent;m&&(m.stopPropagation?m.stopPropagation():typeof m.cancelBubble!="unknown"&&(m.cancelBubble=!0),this.isPropagationStopped=Ne)},persist:function(){this.isPersistent=Ne},isPersistent:An,destructor:function(){var m=this.constructor.Interface,N;for(N in m)this[N]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=An,this._dispatchInstances=this._dispatchListeners=null}}),Mn.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(m){return m.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null},Mn.extend=function(m){function N(){}function M(){return fe.apply(this,arguments)}var fe=this;N.prototype=fe.prototype;var _=new N;return n(_,M.prototype),M.prototype=_,M.prototype.constructor=M,M.Interface=n({},fe.Interface,m),M.extend=fe.extend,Ye(M),M},Ye(Mn);function Sn(m,N,M,fe){if(this.eventPool.length){var _=this.eventPool.pop();return this.call(_,m,N,M,fe),_}return new this(m,N,M,fe)}function fn(m){if(!(m instanceof this))throw Error(L(279));m.destructor(),10>this.eventPool.length&&this.eventPool.push(m)}function Ye(m){m.eventPool=[],m.getPooled=Sn,m.release=fn}var Ln=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined");function wn(m,N){var M={};return M[m.toLowerCase()]=N.toLowerCase(),M["Webkit"+m]="webkit"+N,M["Moz"+m]="moz"+N,M}var jn={animationend:wn("Animation","AnimationEnd"),animationiteration:wn("Animation","AnimationIteration"),animationstart:wn("Animation","AnimationStart"),transitionend:wn("Transition","TransitionEnd")},Be={},Gn={};Ln&&(Gn=document.createElement("div").style,"AnimationEvent"in window||(delete jn.animationend.animation,delete jn.animationiteration.animation,delete jn.animationstart.animation),"TransitionEvent"in window||delete jn.transitionend.transition);function $n(m){if(Be[m])return Be[m];if(!jn[m])return m;var N=jn[m],M;for(M in N)if(N.hasOwnProperty(M)&&M in Gn)return Be[m]=N[M];return m}var _n=$n("animationend"),ct=$n("animationiteration"),E=$n("animationstart"),I=$n("transitionend"),P=null;function d(m){if(P===null)try{var N=("require"+Math.random()).slice(0,7);P=(G&&G[N])("timers").setImmediate}catch(M){P=function(fe){var _=new MessageChannel;_.port1.onmessage=fe,_.port2.postMessage(void 0)}}return P(m)}var o=W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,v=o[11],y=o[12],R=W.unstable_batchedUpdates,a=Xe.IsSomeRendererActing,l=typeof de.unstable_flushAllWithoutAsserting=="function",s=de.unstable_flushAllWithoutAsserting||function(){for(var m=!1;v();)m=!0;return m};function K(m){try{s(),d(function(){s()?K(m):m()})}catch(N){m(N)}}var T=0,D=!1,u=W.findDOMNode,F=W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,f=F[0],r=F[4],h=F[5],p=F[6],A=F[7],w=F[8],U=F[9],ne=F[10];function ae(){}function ye(m,N){if(!m)return[];if(m=Rn(m),!m)return[];for(var M=m,fe=[];;){if(M.tag===5||M.tag===6||M.tag===1||M.tag===0){var _=M.stateNode;N(_)&&fe.push(_)}if(M.child)M.child.return=M,M=M.child;else{if(M===m)return fe;for(;!M.sibling;){if(!M.return||M.return===m)return fe;M=M.return}M.sibling.return=M.return,M=M.sibling}}}function De(m,N){if(m&&!m._reactInternalFiber){var M=""+m;throw m=Array.isArray(m)?"an array":m&&m.nodeType===1&&m.tagName?"a DOM node":M==="[object Object]"?"object with keys {"+Object.keys(m).join(", ")+"}":M,Error(L(286,N,m))}}var Ae={renderIntoDocument:function(m){var N=document.createElement("div");return W.render(m,N)},isElement:function(m){return C.isValidElement(m)},isElementOfType:function(m,N){return C.isValidElement(m)&&m.type===N},isDOMComponent:function(m){return!(!m||m.nodeType!==1||!m.tagName)},isDOMComponentElement:function(m){return!!(m&&C.isValidElement(m)&&m.tagName)},isCompositeComponent:function(m){return Ae.isDOMComponent(m)?!1:m!=null&&typeof m.render=="function"&&typeof m.setState=="function"},isCompositeComponentWithType:function(m,N){return Ae.isCompositeComponent(m)?m._reactInternalFiber.type===N:!1},findAllInRenderedTree:function(m,N){return De(m,"findAllInRenderedTree"),m?ye(m._reactInternalFiber,N):[]},scryRenderedDOMComponentsWithClass:function(m,N){return De(m,"scryRenderedDOMComponentsWithClass"),Ae.findAllInRenderedTree(m,function(M){if(Ae.isDOMComponent(M)){var fe=M.className;typeof fe!="string"&&(fe=M.getAttribute("class")||"");var _=fe.split(/\s+/);if(!Array.isArray(N)){if(N===void 0)throw Error(L(11));N=N.split(/\s+/)}return N.every(function(Pe){return _.indexOf(Pe)!==-1})}return!1})},findRenderedDOMComponentWithClass:function(m,N){if(De(m,"findRenderedDOMComponentWithClass"),m=Ae.scryRenderedDOMComponentsWithClass(m,N),m.length!==1)throw Error("Did not find exactly one match (found: "+m.length+") for class:"+N);return m[0]},scryRenderedDOMComponentsWithTag:function(m,N){return De(m,"scryRenderedDOMComponentsWithTag"),Ae.findAllInRenderedTree(m,function(M){return Ae.isDOMComponent(M)&&M.tagName.toUpperCase()===N.toUpperCase()})},findRenderedDOMComponentWithTag:function(m,N){if(De(m,"findRenderedDOMComponentWithTag"),m=Ae.scryRenderedDOMComponentsWithTag(m,N),m.length!==1)throw Error("Did not find exactly one match (found: "+m.length+") for tag:"+N);return m[0]},scryRenderedComponentsWithType:function(m,N){return De(m,"scryRenderedComponentsWithType"),Ae.findAllInRenderedTree(m,function(M){return Ae.isCompositeComponentWithType(M,N)})},findRenderedComponentWithType:function(m,N){if(De(m,"findRenderedComponentWithType"),m=Ae.scryRenderedComponentsWithType(m,N),m.length!==1)throw Error("Did not find exactly one match (found: "+m.length+") for componentType:"+N);return m[0]},mockComponent:function(m,N){return N=N||m.mockTagName||"div",m.prototype.render.mockImplementation(function(){return C.createElement(N,null,this.props.children)}),this},nativeTouchData:function(m,N){return{touches:[{pageX:m,pageY:N}]}},Simulate:null,SimulateNative:{},act:function(m){function N(){T--,a.current=M,y.current=fe}D===!1&&(D=!0,console.error("act(...) is not supported in production builds of React, and might not behave as expected.")),T++;var M=a.current,fe=y.current;a.current=!0,y.current=!0;try{var _=R(m)}catch(Pe){throw N(),Pe}if(_!==null&&typeof _=="object"&&typeof _.then=="function")return{then:function(Pe,Ue){_.then(function(){1<T||l===!0&&M===!0?(N(),Pe()):K(function(Je){N(),Je?Ue(Je):Pe()})},function(Je){N(),Ue(Je)})}};try{T!==1||l!==!1&&M!==!1||s(),N()}catch(Pe){throw N(),Pe}return{then:function(Pe){Pe()}}}};function gn(m){return function(N,M){if(C.isValidElement(N))throw Error(L(228));if(Ae.isCompositeComponent(N))throw Error(L(229));var fe=r[m],_=new ae;_.target=N,_.type=m.toLowerCase();var Pe=f(N),Ue=new Mn(fe,Pe,_,N);Ue.persist(),n(Ue,M),fe.phasedRegistrationNames?h(Ue):p(Ue),W.unstable_batchedUpdates(function(){A(N),ne(Ue)}),w()}}Ae.Simulate={};for(var Vn in r)Ae.Simulate[Vn]=gn(Vn);function et(m,N){return function(M,fe){var _=new ae(m);n(_,fe),Ae.isDOMComponent(M)?(M=u(M),_.target=M,U(N,1,document,_)):M.tagName&&(_.target=M,U(N,1,document,_))}}[["abort","abort"],[_n,"animationEnd"],[ct,"animationIteration"],[E,"animationStart"],["blur","blur"],["canplaythrough","canPlayThrough"],["canplay","canPlay"],["cancel","cancel"],["change","change"],["click","click"],["close","close"],["compositionend","compositionEnd"],["compositionstart","compositionStart"],["compositionupdate","compositionUpdate"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["dragstart","dragStart"],["drag","drag"],["drop","drop"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],["ended","ended"],["error","error"],["focus","focus"],["input","input"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["loadstart","loadStart"],["loadstart","loadStart"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["mousedown","mouseDown"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["playing","playing"],["progress","progress"],["ratechange","rateChange"],["scroll","scroll"],["seeked","seeked"],["seeking","seeking"],["selectionchange","selectionChange"],["stalled","stalled"],["suspend","suspend"],["textInput","textInput"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchmove","touchMove"],["touchstart","touchStart"],[I,"transitionEnd"],["volumechange","volumeChange"],["waiting","waiting"],["wheel","wheel"]].forEach(function(m){var N=m[1];Ae.SimulateNative[N]=et(N,m[0])}),G.exports=Ae.default||Ae}).call(this,e("hOG+")(Kn))},JjdP:function(Kn,hn,e){"use strict";e.r(hn);var G=e("9og8"),n=e("WmNS"),C=e.n(n),W=e("LtsZ"),de=`import React, { useRef } from 'react';
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
};`,Fe=`import React from 'react';
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
};`,Rn=`import React, { Component } from 'react';
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

export default Root;`,Ne=`import React, { useState, useEffect } from 'react';
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

export default Demo;`,An=`{
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
}`,Mn=`import { Select } from 'antd';
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

export default SearchInput;`,Sn=`import React from 'react';
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

export default Demo;`,fn=`import { monaco } from 'react-monaco-editor'

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

export default Demo;`,jn=`import React from 'react';
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

export default Demo;`,Be=`import React from 'react';
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

export default Demo;`,Gn=`.fr-generator-playground {
  margin: 0 -24px;

  .hide-demo {
    display: none;
  }
}`,$n=`import React, { useState, useRef } from 'react';
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

export default Demo;`,ct=hn.default={"guide-card":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(22)]).then(e.bind(null,"oLxE"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:de}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"card-render":{version:"0.1.2"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"0.x"}},identifier:"guide-card"}},"chart-render-demo":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R,a,l;return C.a.wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return a=function(D,u){if(!u&&D&&D.__esModule)return D;if(D===null||typeof D!="object"&&typeof D!="function")return{default:D};var F=R(u);if(F&&F.has(D))return F.get(D);var f={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var h in D)if(h!=="default"&&Object.prototype.hasOwnProperty.call(D,h)){var p=r?Object.getOwnPropertyDescriptor(D,h):null;p&&(p.get||p.set)?Object.defineProperty(f,h,p):f[h]=D[h]}return f.default=D,F&&F.set(D,f),f},R=function(D){if(typeof WeakMap!="function")return null;var u=new WeakMap,F=new WeakMap;return(R=function(r){return r?F:u})(D)},d=e("K+nK"),K.t0=d,K.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return K.t1=K.sent,o=(0,K.t0)(K.t1),K.t2=a,K.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return K.t3=K.sent,v=(0,K.t2)(K.t3),K.next=15,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 15:return y=K.sent,l=function(){var D=(0,v.useState)("Line"),u=(0,o.default)(D,2),F=u[0],f=u[1],r={Line:y.Line,Column:y.Column,PivotTable:y.PivotTable}[F];return v.default.createElement("div",null,v.default.createElement("div",{style:{marginBottom:10}},v.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return f("Line")}},"\u6298\u7EBF\u56FE"),v.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return f("Column")}},"\u67F1\u72B6\u56FE"),v.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return f("PivotTable")}},"\u4EA4\u53C9\u8868")),v.default.createElement(r,{meta:[{id:"date",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF",isDim:!1},{id:"uv",name:"\u8BBF\u5BA2\u6570",isDim:!1}],data:[{date:"20200101",pv:100,uv:50},{date:"20200102",pv:120,uv:60},{date:"20200103",pv:140,uv:70},{date:"20200104",pv:160,uv:80}]}))},K.abrupt("return",l);case 18:case"end":return K.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"chart-render-demo"}},"column-demo":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){var d,o,v,y;return C.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=a.sent,y=function(){return o.default.createElement(v.Column,{meta:[{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{pv:50,uv:20}]})},a.abrupt("return",y);case 11:case"end":return a.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[{ pv: 50, uv: 20 }]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo"}},"column-demo-1":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){var d,o,v,y;return C.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=a.sent,y=function(){return o.default.createElement(v.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},a.abrupt("return",y);case 11:case"end":return a.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-1"}},"column-demo-2":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){var d,o,v,y;return C.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=a.sent,y=function(){return o.default.createElement(v.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},a.abrupt("return",y);case 11:case"end":return a.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-2"}},"column-demo-3":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){var d,o,v,y;return C.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=a.sent,y=function(){return o.default.createElement(v.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},a.abrupt("return",y);case 11:case"end":return a.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-3"}},"column-demo-4":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){var d,o,v,y;return C.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=a.sent,y=function(){return o.default.createElement(v.Column,{inverted:!0,label:{position:"middle",layout:[{type:"interval-adjust-position"},{type:"interval-hide-overlap"},{type:"adjust-color"}]},meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},a.abrupt("return",y);case 11:case"end":return a.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-4"}},"line-demo":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){var d,o,v,y;return C.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=a.sent,y=function(){return o.default.createElement(v.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},a.abrupt("return",y);case 11:case"end":return a.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo"}},"line-demo-1":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){var d,o,v,y;return C.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=a.sent,y=function(){return o.default.createElement(v.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},a.abrupt("return",y);case 11:case"end":return a.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-1"}},"line-demo-2":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){var d,o,v,y;return C.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=a.sent,y=function(){return o.default.createElement(v.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"},{id:"pv",name:"\u8BBF\u95EE\u91CF"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20,pv:120},{ds:"2020-12-31",page:"\u9996\u9875",uv:120,pv:1120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21,pv:121},{ds:"2021-01-01",page:"\u9996\u9875",uv:121,pv:1121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15,pv:115},{ds:"2021-01-02",page:"\u9996\u9875",uv:115,pv:1115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40,pv:140},{ds:"2021-01-03",page:"\u9996\u9875",uv:140,pv:1140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31,pv:131},{ds:"2021-01-04",page:"\u9996\u9875",uv:131,pv:1131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32,pv:132},{ds:"2021-01-05",page:"\u9996\u9875",uv:132,pv:1132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30,pv:130},{ds:"2021-01-06",page:"\u9996\u9875",uv:130,pv:1130}]})},a.abrupt("return",y);case 11:case"end":return a.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-2"}},"line-demo-3":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){var d,o,v,y;return C.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=a.sent,y=function(){return o.default.createElement(v.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},a.abrupt("return",y);case 11:case"end":return a.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-3"}},"line-demo-4":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){var d,o,v,y;return C.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=a.sent,y=function(){return o.default.createElement(v.Line,{withArea:!0,isStack:!0,isPercent:!0,meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},a.abrupt("return",y);case 11:case"end":return a.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-4"}},"pivot-table-demo":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){var d,o,v,y;return C.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=a.sent,y=function(){return o.default.createElement(v.PivotTable,{style:{maxHeight:400,overflow:"auto"},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},a.abrupt("return",y);case 11:case"end":return a.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo"}},"pivot-table-demo-1":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){var d,o,v,y;return C.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=a.sent,y=function(){return o.default.createElement(v.PivotTable,{style:{maxHeight:400,overflow:"auto"},cellRender:function(K,T,D){return o.default.createElement("div",null,o.default.createElement("p",null,"\u53C2\u6570\u8868\uFF1A"),o.default.createElement("p",{style:{color:["red","orange","yellow","green","blue"][Object.keys(T).length]}},K),o.default.createElement("p",null,JSON.stringify(T)),o.default.createElement("p",null,JSON.stringify(D)))},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},a.abrupt("return",y);case 11:case"end":return a.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-1"}},"pivot-table-demo-2":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R,a,l;return C.a.wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return a=function(D,u){if(!u&&D&&D.__esModule)return D;if(D===null||typeof D!="object"&&typeof D!="function")return{default:D};var F=R(u);if(F&&F.has(D))return F.get(D);var f={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var h in D)if(h!=="default"&&Object.prototype.hasOwnProperty.call(D,h)){var p=r?Object.getOwnPropertyDescriptor(D,h):null;p&&(p.get||p.set)?Object.defineProperty(f,h,p):f[h]=D[h]}return f.default=D,F&&F.set(D,f),f},R=function(D){if(typeof WeakMap!="function")return null;var u=new WeakMap,F=new WeakMap;return(R=function(r){return r?F:u})(D)},d=e("K+nK"),K.t0=d,K.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return K.t1=K.sent,o=(0,K.t0)(K.t1),K.t2=a,K.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return K.t3=K.sent,v=(0,K.t2)(K.t3),K.next=15,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 15:return y=K.sent,l=function(){var D=(0,v.useState)(!1),u=(0,o.default)(D,2),F=u[0],f=u[1];return v.default.createElement(v.default.Fragment,null,v.default.createElement("label",null,"\u53EF\u5C55\u5F00/\u6536\u7F29\uFF1A",v.default.createElement("input",{type:"checkbox",value:F,onChange:function(){return f(!F)}})),v.default.createElement(y.PivotTable,{leftExpandable:F,showSubtotal:!1,meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]}))},K.abrupt("return",l);case 18:case"end":return K.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-2"}},"form-render-demo":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R,a,l,s,K,T,D,u,F,f;return C.a.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return D=function(A,w){if(!w&&A&&A.__esModule)return A;if(A===null||typeof A!="object"&&typeof A!="function")return{default:A};var U=T(w);if(U&&U.has(A))return U.get(A);var ne={},ae=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ye in A)if(ye!=="default"&&Object.prototype.hasOwnProperty.call(A,ye)){var De=ae?Object.getOwnPropertyDescriptor(A,ye):null;De&&(De.get||De.set)?Object.defineProperty(ne,ye,De):ne[ye]=A[ye]}return ne.default=A,U&&U.set(A,ne),ne},T=function(A){if(typeof WeakMap!="function")return null;var w=new WeakMap,U=new WeakMap;return(T=function(ae){return ae?U:w})(A)},d=e("K+nK"),h.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return h.t0=d,h.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return h.t1=h.sent,o=(0,h.t0)(h.t1),h.t2=d,h.next=13,e.e(70).then(e.bind(null,"fWQN"));case 13:return h.t3=h.sent,v=(0,h.t2)(h.t3),h.t4=d,h.next=18,e.e(71).then(e.bind(null,"mtLc"));case 18:return h.t5=h.sent,y=(0,h.t4)(h.t5),h.t6=d,h.next=23,e.e(64).then(e.bind(null,"yKVA"));case 23:return h.t7=h.sent,R=(0,h.t6)(h.t7),h.t8=d,h.next=28,e.e(62).then(e.bind(null,"879j"));case 28:return h.t9=h.sent,a=(0,h.t8)(h.t9),h.t10=d,h.next=33,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 33:return h.t11=h.sent,l=(0,h.t10)(h.t11),h.next=37,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 37:return s=h.sent,h.t12=D,h.next=41,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 41:return h.t13=h.sent,K=(0,h.t12)(h.t13),u={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},F=function(p){(0,R.default)(w,p);var A=(0,a.default)(w);function w(){return(0,v.default)(this,w),A.apply(this,arguments)}return(0,y.default)(w,[{key:"render",value:function(){var ne=this.props.form;return l.default.createElement("div",null,l.default.createElement(K.default,{form:ne,schema:u}),l.default.createElement(o.default,{type:"primary",onClick:ne.submit},"\u63D0\u4EA4"))}}]),w}(l.default.Component),f=(0,K.connectForm)(F),h.abrupt("return",f);case 47:case"end":return h.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default connectForm(Demo);`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo"}},"form-render-demo-1":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R,a,l,s,K,T;return C.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return l=function(f,r){if(!r&&f&&f.__esModule)return f;if(f===null||typeof f!="object"&&typeof f!="function")return{default:f};var h=a(r);if(h&&h.has(f))return h.get(f);var p={},A=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var w in f)if(w!=="default"&&Object.prototype.hasOwnProperty.call(f,w)){var U=A?Object.getOwnPropertyDescriptor(f,w):null;U&&(U.get||U.set)?Object.defineProperty(p,w,U):p[w]=f[w]}return p.default=f,h&&h.set(f,p),p},a=function(f){if(typeof WeakMap!="function")return null;var r=new WeakMap,h=new WeakMap;return(a=function(A){return A?h:r})(f)},d=e("K+nK"),u.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return u.t0=d,u.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return u.t1=u.sent,o=(0,u.t0)(u.t1),u.t2=d,u.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return u.t3=u.sent,v=(0,u.t2)(u.t3),u.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 17:return y=u.sent,u.t4=l,u.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 21:return u.t5=u.sent,R=(0,u.t4)(u.t5),s={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},K=function(){var f=(0,R.useForm)();return v.default.createElement("div",null,v.default.createElement(R.default,{form:f,schema:s}),v.default.createElement(o.default,{type:"primary",onClick:f.submit},"\u63D0\u4EA4"))},T=K,u.abrupt("return",T);case 27:case"end":return u.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo-1"}},"form-render-demo-2":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R,a,l,s,K,T;return C.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return l=function(f,r){if(!r&&f&&f.__esModule)return f;if(f===null||typeof f!="object"&&typeof f!="function")return{default:f};var h=a(r);if(h&&h.has(f))return h.get(f);var p={},A=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var w in f)if(w!=="default"&&Object.prototype.hasOwnProperty.call(f,w)){var U=A?Object.getOwnPropertyDescriptor(f,w):null;U&&(U.get||U.set)?Object.defineProperty(p,w,U):p[w]=f[w]}return p.default=f,h&&h.set(f,p),p},a=function(f){if(typeof WeakMap!="function")return null;var r=new WeakMap,h=new WeakMap;return(a=function(A){return A?h:r})(f)},d=e("K+nK"),u.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return u.t0=d,u.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return u.t1=u.sent,o=(0,u.t0)(u.t1),u.t2=d,u.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return u.t3=u.sent,v=(0,u.t2)(u.t3),u.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 17:return y=u.sent,u.t4=l,u.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 21:return u.t5=u.sent,R=(0,u.t4)(u.t5),s={displayType:"row",labelWidth:60,type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F",type:"range",format:"date"},siteUrl:{title:"\u7F51\u5740",type:"string",placeholder:"\u6B64\u5904\u5FC5\u586B",required:!0,props:{addonBefore:"https://",addonAfter:".com"}}}},K=function(){var f=(0,R.useForm)(),r=function(p,A){A.length>0?alert("errors:"+JSON.stringify(A)):alert("formData:"+JSON.stringify(p,null,2))};return v.default.createElement("div",null,v.default.createElement(R.default,{form:f,schema:s,onFinish:r}),v.default.createElement(o.default,{type:"primary",onClick:f.submit},"\u63D0\u4EA4"))},T=K,u.abrupt("return",T);case 27:case"end":return u.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-demo-2"}},"migrate-demo":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R,a,l,s;return C.a.wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return l=function(){var u=(0,v.useForm)(),F=function(r,h){h.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(h))):alert(JSON.stringify(r))};return o.default.createElement("div",null,o.default.createElement(v.default,{form:u,schema:a,onFinish:F}),o.default.createElement("button",{onClick:u.submit},"\u63D0\u4EA4"))},R=function(u,F){if(!F&&u&&u.__esModule)return u;if(u===null||typeof u!="object"&&typeof u!="function")return{default:u};var f=y(F);if(f&&f.has(u))return f.get(u);var r={},h=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var p in u)if(p!=="default"&&Object.prototype.hasOwnProperty.call(u,p)){var A=h?Object.getOwnPropertyDescriptor(u,p):null;A&&(A.get||A.set)?Object.defineProperty(r,p,A):r[p]=u[p]}return r.default=u,f&&f.set(u,r),r},y=function(u){if(typeof WeakMap!="function")return null;var F=new WeakMap,f=new WeakMap;return(y=function(h){return h?f:F})(u)},d=e("K+nK"),T.t0=d,T.next=7,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 7:return T.t1=T.sent,o=(0,T.t0)(T.t1),T.t2=R,T.next=12,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 12:return T.t3=T.sent,v=(0,T.t2)(T.t3),a={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}},s=l,T.abrupt("return",s);case 17:case"end":return T.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate-demo"}},"display-demo":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R;return C.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,v=(0,l.t2)(l.t3),y=function(K){return{type:"object",displayType:K,properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},objectName:{title:"\u5BF9\u8C61",bind:"obj",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},R=function(){return o.default.createElement("div",null,o.default.createElement("h2",null,"display: row"),o.default.createElement(v.default,{schema:y("row")}),o.default.createElement("h2",null,"display: column"),o.default.createElement(v.default,{schema:y("column")}))},l.abrupt("return",R);case 14:case"end":return l.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo"}},"display-demo-1":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R;return C.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,v=(0,l.t2)(l.t3),y={type:"object",displayType:"inline",properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},R=function(){return o.default.createElement(v.default,{schema:y})},l.abrupt("return",R);case 14:case"end":return l.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-1"}},"display-demo-2":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R;return C.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,v=(0,l.t2)(l.t3),y={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0},check:{title:"box",type:"boolean",default:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},R=function(){return o.default.createElement(v.default,{readOnly:!0,schema:y})},l.abrupt("return",R);case 14:case"end":return l.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form readOnly schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-2"}},"display-demo-3":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R;return C.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,v=(0,l.t2)(l.t3),y={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0,width:"50%"},check:{title:"box",type:"boolean",default:!0,width:"50%",labelWidth:6},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},R=function(){return o.default.createElement(v.default,{labelWidth:"200",schema:y})},l.abrupt("return",R);case 14:case"end":return l.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form labelWidth="200" schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-3"}},"display-demo-4":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R,a;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,v=(0,s.t2)(s.t3),y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},R=function(){return o.default.createElement(v.default,{schema:y})},a=R,s.abrupt("return",a);case 15:case"end":return s.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-4"}},"display-demo-5":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R,a;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,v=(0,s.t2)(s.t3),y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},R=function(){return o.default.createElement(v.default,{schema:y})},a=R,s.abrupt("return",a);case 15:case"end":return s.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-5"}},"display-demo-6":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R,a;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,v=(0,s.t2)(s.t3),y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},R=function(){return o.default.createElement(v.default,{schema:y})},a=R,s.abrupt("return",a);case 15:case"end":return s.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-6"}},"display-demo-7":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R,a;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,v=(0,s.t2)(s.t3),y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},R=function(){return o.default.createElement(v.default,{schema:y})},a=R,s.abrupt("return",a);case 15:case"end":return s.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-7"}},"form-methods-demo":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R,a,l,s,K,T,D,u,F;return C.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return D=function(p,A){if(!A&&p&&p.__esModule)return p;if(p===null||typeof p!="object"&&typeof p!="function")return{default:p};var w=T(A);if(w&&w.has(p))return w.get(p);var U={},ne=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ae in p)if(ae!=="default"&&Object.prototype.hasOwnProperty.call(p,ae)){var ye=ne?Object.getOwnPropertyDescriptor(p,ae):null;ye&&(ye.get||ye.set)?Object.defineProperty(U,ae,ye):U[ae]=p[ae]}return U.default=p,w&&w.set(p,U),U},T=function(p){if(typeof WeakMap!="function")return null;var A=new WeakMap,w=new WeakMap;return(T=function(ne){return ne?w:A})(p)},d=e("K+nK"),r.next=5,e.e(18).then(e.t.bind(null,"lfLe",7));case 5:return r.t0=d,r.next=8,e.e(19).then(e.t.bind(null,"Cp9S",7));case 8:return r.t1=r.sent,o=(0,r.t0)(r.t1),r.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return r.t2=d,r.next=15,e.e(13).then(e.t.bind(null,"4IMT",7));case 15:return r.t3=r.sent,v=(0,r.t2)(r.t3),r.next=19,e.e(14).then(e.t.bind(null,"tL+A",7));case 19:return r.t4=d,r.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return r.t5=r.sent,y=(0,r.t4)(r.t5),r.t6=d,r.next=27,Promise.resolve().then(e.bind(null,"tJVT"));case 27:return r.t7=r.sent,R=(0,r.t6)(r.t7),r.t8=D,r.next=32,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 32:return r.t9=r.sent,a=(0,r.t8)(r.t9),r.next=36,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 36:return l=r.sent,r.t10=D,r.next=40,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 40:return r.t11=r.sent,s=(0,r.t10)(r.t11),r.next=44,e.e(15).then(e.bind(null,"OH0R"));case 44:return K=r.sent,u=function(){var p=(0,s.useForm)(),A=(0,a.useState)({}),w=(0,R.default)(A,2),U=w[0],ne=w[1],ae=function(){(0,K.fakeApi)("xxx/getForm").then(function(Ae){p.setValues({input1:"hello world",select1:"c"})})};(0,a.useEffect)(function(){(0,K.delay)(1e3).then(function(De){ne({type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}})})},[]);var ye=function(Ae,gn){gn.length>0?y.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(gn.map(function(Vn){return Vn.name}))):(0,K.fakeApi)("xxx/submit",Ae).then(function(Vn){return y.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})};return a.default.createElement("div",{style:{width:"400px"}},a.default.createElement(s.default,{form:p,schema:U,onFinish:ye}),a.default.createElement(o.default,null,a.default.createElement(v.default,{onClick:ae},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),a.default.createElement(v.default,{type:"primary",onClick:p.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},F=u,r.abrupt("return",F);case 48:case"end":return r.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Xe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo"}},"form-methods-demo-1":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R,a,l,s,K,T,D,u,F;return C.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return T=function(p,A){if(!A&&p&&p.__esModule)return p;if(p===null||typeof p!="object"&&typeof p!="function")return{default:p};var w=K(A);if(w&&w.has(p))return w.get(p);var U={},ne=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ae in p)if(ae!=="default"&&Object.prototype.hasOwnProperty.call(p,ae)){var ye=ne?Object.getOwnPropertyDescriptor(p,ae):null;ye&&(ye.get||ye.set)?Object.defineProperty(U,ae,ye):U[ae]=p[ae]}return U.default=p,w&&w.set(p,U),U},K=function(p){if(typeof WeakMap!="function")return null;var A=new WeakMap,w=new WeakMap;return(K=function(ne){return ne?w:A})(p)},d=e("K+nK"),r.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return r.t0=d,r.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return r.t1=r.sent,o=(0,r.t0)(r.t1),r.t2=d,r.next=13,Promise.resolve().then(e.bind(null,"PpiC"));case 13:return r.t3=r.sent,v=(0,r.t2)(r.t3),r.next=17,e.e(14).then(e.t.bind(null,"tL+A",7));case 17:return r.t4=d,r.next=20,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 20:return r.t5=r.sent,y=(0,r.t4)(r.t5),r.t6=d,r.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return r.t7=r.sent,R=(0,r.t6)(r.t7),r.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 29:return a=r.sent,r.t8=T,r.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 33:return r.t9=r.sent,l=(0,r.t8)(r.t9),r.next=37,e.e(15).then(e.bind(null,"OH0R"));case 37:return s=r.sent,D={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},u=function(){var p=(0,l.useForm)(),A=function(ne,ae){ae.length>0?y.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(ae.map(function(ye){return ye.name}))):(0,s.fakeApi)("xxx/submit",ne).then(function(ye){return y.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},w=function(ne){var ae=ne.data,ye=ne.errors,De=ne.schema,Ae=(0,v.default)(ne,["data","errors","schema"]);return(0,s.fakeApi)("xxx/validation").then(function(gn){return{name:"select1",error:["\u5916\u90E8\u6821\u9A8C\u9519\u8BEF"]}})};return R.default.createElement("div",{style:{width:"400px"}},R.default.createElement(l.default,{form:p,schema:D,beforeFinish:w,onFinish:A}),R.default.createElement(o.default,{type:"primary",onClick:p.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},F=u,r.abrupt("return",F);case 42:case"end":return r.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Xe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-1"}},"form-methods-demo-2":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R,a,l,s,K,T,D,u,F;return C.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return T=function(p,A){if(!A&&p&&p.__esModule)return p;if(p===null||typeof p!="object"&&typeof p!="function")return{default:p};var w=K(A);if(w&&w.has(p))return w.get(p);var U={},ne=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ae in p)if(ae!=="default"&&Object.prototype.hasOwnProperty.call(p,ae)){var ye=ne?Object.getOwnPropertyDescriptor(p,ae):null;ye&&(ye.get||ye.set)?Object.defineProperty(U,ae,ye):U[ae]=p[ae]}return U.default=p,w&&w.set(p,U),U},K=function(p){if(typeof WeakMap!="function")return null;var A=new WeakMap,w=new WeakMap;return(K=function(ne){return ne?w:A})(p)},d=e("K+nK"),r.next=5,e.e(18).then(e.t.bind(null,"lfLe",7));case 5:return r.t0=d,r.next=8,e.e(19).then(e.t.bind(null,"Cp9S",7));case 8:return r.t1=r.sent,o=(0,r.t0)(r.t1),r.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return r.t2=d,r.next=15,e.e(13).then(e.t.bind(null,"4IMT",7));case 15:return r.t3=r.sent,v=(0,r.t2)(r.t3),r.next=19,e.e(14).then(e.t.bind(null,"tL+A",7));case 19:return r.t4=d,r.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return r.t5=r.sent,y=(0,r.t4)(r.t5),r.t6=d,r.next=27,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 27:return r.t7=r.sent,R=(0,r.t6)(r.t7),r.next=31,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 31:return a=r.sent,r.t8=T,r.next=35,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 35:return r.t9=r.sent,l=(0,r.t8)(r.t9),r.next=39,e.e(15).then(e.bind(null,"OH0R"));case 39:return s=r.sent,D={type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F\u8303\u56F4",type:"range",format:"date"}}},u=function(){var p=(0,l.useForm)(),A=function(ne,ae){ae.length>0?y.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(ae.map(function(ye){return ye.name}))):(0,s.fakeApi)("xxx/submit",ne).then(function(ye){return y.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},w=function(){(0,s.fakeApi)("xxx/getForm").then(function(ne){p.setValues({startDate:"2020-04-04",endDate:"2020-04-24"})})};return R.default.createElement("div",{style:{width:"400px"}},R.default.createElement(l.default,{form:p,schema:D,onFinish:A}),R.default.createElement(o.default,null,R.default.createElement(v.default,{onClick:w},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),R.default.createElement(v.default,{type:"primary",onClick:p.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},F=u,r.abrupt("return",F);case 44:case"end":return r.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Xe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-2"}},"form-methods-demo-3":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R,a,l,s,K,T,D,u;return C.a.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return K=function(h,p){if(!p&&h&&h.__esModule)return h;if(h===null||typeof h!="object"&&typeof h!="function")return{default:h};var A=s(p);if(A&&A.has(h))return A.get(h);var w={},U=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ne in h)if(ne!=="default"&&Object.prototype.hasOwnProperty.call(h,ne)){var ae=U?Object.getOwnPropertyDescriptor(h,ne):null;ae&&(ae.get||ae.set)?Object.defineProperty(w,ne,ae):w[ne]=h[ne]}return w.default=h,A&&A.set(h,w),w},s=function(h){if(typeof WeakMap!="function")return null;var p=new WeakMap,A=new WeakMap;return(s=function(U){return U?A:p})(h)},d=e("K+nK"),f.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return f.t0=d,f.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return f.t1=f.sent,o=(0,f.t0)(f.t1),f.next=12,e.e(14).then(e.t.bind(null,"tL+A",7));case 12:return f.t2=d,f.next=15,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 15:return f.t3=f.sent,v=(0,f.t2)(f.t3),f.t4=K,f.next=20,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 20:return f.t5=f.sent,y=(0,f.t4)(f.t5),f.next=24,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 24:return R=f.sent,f.t6=K,f.next=28,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 28:return f.t7=f.sent,a=(0,f.t6)(f.t7),f.next=32,e.e(15).then(e.bind(null,"OH0R"));case 32:return l=f.sent,T={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select1:{title:"\u5355\u9009",type:"string",widget:"select"}}}}},D=function(){var h=(0,a.useForm)(),p=function(){h.setSchemaByPath("obj1.select1",{enum:["east","south","west","north"],enumNames:["\u4E1C","\u5357","\u897F","\u5317"]})},A=function(U,ne){ne.length>0?v.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(ne.map(function(ae){return ae.name}))):v.default.info(JSON.stringify(U))};return y.default.createElement("div",{style:{width:"400px"}},y.default.createElement(a.default,{form:h,schema:T,onMount:p,onFinish:A}),y.default.createElement(o.default,{type:"primary",onClick:h.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},u=D,f.abrupt("return",u);case 37:case"end":return f.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Xe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-3"}},"function-demo":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R,a,l,s;return C.a.wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return R=function(u,F){if(!F&&u&&u.__esModule)return u;if(u===null||typeof u!="object"&&typeof u!="function")return{default:u};var f=y(F);if(f&&f.has(u))return f.get(u);var r={},h=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var p in u)if(p!=="default"&&Object.prototype.hasOwnProperty.call(u,p)){var A=h?Object.getOwnPropertyDescriptor(u,p):null;A&&(A.get||A.set)?Object.defineProperty(r,p,A):r[p]=u[p]}return r.default=u,f&&f.set(u,r),r},y=function(u){if(typeof WeakMap!="function")return null;var F=new WeakMap,f=new WeakMap;return(y=function(h){return h?f:F})(u)},d=e("K+nK"),T.t0=d,T.next=6,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 6:return T.t1=T.sent,o=(0,T.t0)(T.t1),T.t2=R,T.next=11,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 11:return T.t3=T.sent,v=(0,T.t2)(T.t3),a={type:"object",properties:{select1:{title:"\u5355\u9009",description:"\u5C1D\u8BD5\u9009\u62E9\u201C\u663E\u793A\u8F93\u5165\u6846\u201D",type:"string",enum:["a","b"],enumNames:["\u9690\u85CF\u8F93\u5165\u6846","\u663E\u793A\u8F93\u5165\u6846"],disabled:"{{rootValue.input1.length > 5}}",default:"a"},input1:{title:"\u8F93\u5165\u6846",description:"\u5C1D\u8BD5\u8F93\u5165\u8D85\u8FC75\u4E2A\u5B57\u7B26",type:"string",hidden:'{{formData.select1 == "a"}}'}}},l=function(){var u=(0,v.useForm)();return o.default.createElement(v.default,{form:u,schema:a})},s=l,T.abrupt("return",s);case 17:case"end":return T.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo1;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo"}},"function-demo-1":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R;return C.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return l.t3=l.sent,v=(0,l.t2)(l.t3),l.next=13,e.e(17).then(e.bind(null,"8iYR"));case 13:return y=l.sent,R=function(){return o.default.createElement(v.default,{schema:y.expression})},l.abrupt("return",R);case 16:case"end":return l.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { expression } from '../json/schema';

export default () => <FR schema={expression} />;`},"demo/FR.jsx":{import:"../demo/FR",content:Fe},"json/schema.js":{import:"../json/schema",content:ve}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo-1"}},"lifeCycle-demo":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R,a,l,s,K;return C.a.wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return R=function(F,f){if(!f&&F&&F.__esModule)return F;if(F===null||typeof F!="object"&&typeof F!="function")return{default:F};var r=y(f);if(r&&r.has(F))return r.get(F);var h={},p=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var A in F)if(A!=="default"&&Object.prototype.hasOwnProperty.call(F,A)){var w=p?Object.getOwnPropertyDescriptor(F,A):null;w&&(w.get||w.set)?Object.defineProperty(h,A,w):h[A]=F[A]}return h.default=F,r&&r.set(F,h),h},y=function(F){if(typeof WeakMap!="function")return null;var f=new WeakMap,r=new WeakMap;return(y=function(p){return p?r:f})(F)},D.t0=R,D.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return D.t1=D.sent,d=(0,D.t0)(D.t1),D.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 9:return o=D.sent,D.t2=R,D.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 13:return D.t3=D.sent,v=(0,D.t2)(D.t3),a=function(F){return new Promise(function(f){return setTimeout(f,F)})},l={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u4E0B\u62C9\u9009\u6846",description:"\u52A0\u8F7D\u4E2D...",type:"string",enum:[],widget:"select"}}},s=function(){var F=(0,v.useForm)(),f=function(){F.setValues({input1:"hello world"}),a(3e3).then(function(h){F.setSchemaByPath("select1",{description:"",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]})})};return d.default.createElement(v.default,{form:F,schema:l,onMount:f})},K=s,D.abrupt("return",K);case 20:case"end":return D.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"lifeCycle-demo"}},"listDisplay-demo":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R,a;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,v=(0,s.t2)(s.t3),y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},R=function(){return o.default.createElement(v.default,{schema:y})},a=R,s.abrupt("return",a);case 15:case"end":return s.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo"}},"listDisplay-demo-1":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R,a;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,v=(0,s.t2)(s.t3),y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},R=function(){return o.default.createElement(v.default,{schema:y})},a=R,s.abrupt("return",a);case 15:case"end":return s.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-1"}},"listDisplay-demo-2":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R,a;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,v=(0,s.t2)(s.t3),y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},R=function(){return o.default.createElement(v.default,{schema:y})},a=R,s.abrupt("return",a);case 15:case"end":return s.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-2"}},"listDisplay-demo-3":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R,a;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,v=(0,s.t2)(s.t3),y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},R=function(){return o.default.createElement(v.default,{schema:y})},a=R,s.abrupt("return",a);case 15:case"end":return s.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-3"}},"listDisplay-demo-4":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R,a;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,v=(0,s.t2)(s.t3),window.hello=function(K){var T=K.value;console.log(T)},y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list4",itemProps:{buttons:[{callback:"hello",text:"\u590D\u5236"}]},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},R=function(){return o.default.createElement(v.default,{schema:y})},a=R,s.abrupt("return",a);case 16:case"end":return s.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-4"}},"watch-demo":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R,a,l,s;return C.a.wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return R=function(u,F){if(!F&&u&&u.__esModule)return u;if(u===null||typeof u!="object"&&typeof u!="function")return{default:u};var f=y(F);if(f&&f.has(u))return f.get(u);var r={},h=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var p in u)if(p!=="default"&&Object.prototype.hasOwnProperty.call(u,p)){var A=h?Object.getOwnPropertyDescriptor(u,p):null;A&&(A.get||A.set)?Object.defineProperty(r,p,A):r[p]=u[p]}return r.default=u,f&&f.set(u,r),r},y=function(u){if(typeof WeakMap!="function")return null;var F=new WeakMap,f=new WeakMap;return(y=function(h){return h?f:F})(u)},T.t0=R,T.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return T.t1=T.sent,d=(0,T.t0)(T.t1),T.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 9:return o=T.sent,T.t2=R,T.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 13:return T.t3=T.sent,v=(0,T.t2)(T.t3),a={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"}}},l=function(){var u=(0,v.useForm)(),F={"#":function(r){console.log("\u8868\u5355\u7684\u65F6\u65F6\u6570\u636E\u4E3A\uFF1A",r)},input1:function(r){u.setValueByPath("input2",r)}};return d.default.createElement(v.default,{form:u,schema:a,watch:F})},s=l,T.abrupt("return",s);case 19:case"end":return T.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo"}},"watch-demo-1":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R,a,l,s,K,T;return C.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return l=function(f,r){if(!r&&f&&f.__esModule)return f;if(f===null||typeof f!="object"&&typeof f!="function")return{default:f};var h=a(r);if(h&&h.has(f))return h.get(f);var p={},A=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var w in f)if(w!=="default"&&Object.prototype.hasOwnProperty.call(f,w)){var U=A?Object.getOwnPropertyDescriptor(f,w):null;U&&(U.get||U.set)?Object.defineProperty(p,w,U):p[w]=f[w]}return p.default=f,h&&h.set(f,p),p},a=function(f){if(typeof WeakMap!="function")return null;var r=new WeakMap,h=new WeakMap;return(a=function(A){return A?h:r})(f)},d=e("K+nK"),u.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return u.t0=d,u.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return u.t1=u.sent,o=(0,u.t0)(u.t1),u.t2=l,u.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return u.t3=u.sent,v=(0,u.t2)(u.t3),u.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 17:return y=u.sent,u.t4=l,u.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 21:return u.t5=u.sent,R=(0,u.t4)(u.t5),s={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"radio"}}}}},K=function(){var f=(0,R.useForm)(),r=function(A,w){w.length>0?alert("errorFields:"+JSON.stringify(w)):alert("formData:"+JSON.stringify(A,null,2))},h={input1:function(A){A.length>2?f.setSchemaByPath("obj1.select",function(w){var U=w.enumNames;return{enumNames:U.map(function(ne){return ne+"a"})}}):f.setSchemaByPath("obj1.select",{enumNames:["\u65E9","\u4E2D","\u665A"]})}};return v.default.createElement("div",null,v.default.createElement(R.default,{form:f,schema:s,onFinish:r,watch:h}),v.default.createElement(o.default,{type:"",style:{marginRight:8},onClick:function(){return f.setSchemaByPath("input2",{title:"\u7F16\u8F91\u6846",format:"textarea"})}},"\u5C06 input \u6539\u4E3A textarea"),v.default.createElement(o.default,{type:"primary",onClick:f.submit},"\u63D0\u4EA4"))},T=K,u.abrupt("return",T);case 27:case"end":return u.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo-1"}},"widget-demo":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R,a,l,s,K,T,D,u,F;return C.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return K=function(p,A){if(!A&&p&&p.__esModule)return p;if(p===null||typeof p!="object"&&typeof p!="function")return{default:p};var w=s(A);if(w&&w.has(p))return w.get(p);var U={},ne=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ae in p)if(ae!=="default"&&Object.prototype.hasOwnProperty.call(p,ae)){var ye=ne?Object.getOwnPropertyDescriptor(p,ae):null;ye&&(ye.get||ye.set)?Object.defineProperty(U,ae,ye):U[ae]=p[ae]}return U.default=p,w&&w.set(p,U),U},s=function(p){if(typeof WeakMap!="function")return null;var A=new WeakMap,w=new WeakMap;return(s=function(ne){return ne?w:A})(p)},d=e("K+nK"),r.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return r.t0=d,r.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return r.t1=r.sent,o=(0,r.t0)(r.t1),r.next=12,Promise.all([e.e(3),e.e(63)]).then(e.t.bind(null,"cUip",7));case 12:return r.t2=d,r.next=15,Promise.all([e.e(0),e.e(13),e.e(61),e.e(69)]).then(e.t.bind(null,"iJl9",7));case 15:return r.t3=r.sent,v=(0,r.t2)(r.t3),r.t4=d,r.next=20,e.e(72).then(e.bind(null,"0Owb"));case 20:return r.t5=r.sent,y=(0,r.t4)(r.t5),r.t6=K,r.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return r.t7=r.sent,R=(0,r.t6)(r.t7),r.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 29:return a=r.sent,r.t8=K,r.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 33:return r.t9=r.sent,l=(0,r.t8)(r.t9),T={type:"object",properties:{string:{title:"\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6",type:"string",widget:"site"},select:{title:"\u5355\u9009",type:"number",enum:[1,2,3],enumNames:["\u9009\u98791","\u9009\u98792","\u9009\u98793"]}}},D=function(p){return console.log("widget props:",p),R.default.createElement(v.default,(0,y.default)({addonBefore:"http://",addonAfter:".com"},p))},u=function(){var p=(0,l.useForm)(),A=function(){};return R.default.createElement("div",null,R.default.createElement(l.default,{readOnly:!0,form:p,schema:T,widgets:{site:D},onFinish:function(U){return alert(JSON.stringify(U,null,2))}}),R.default.createElement(o.default,{type:"primary",onClick:p.submit},"\u63D0\u4EA4"))},F=u,r.abrupt("return",F);case 40:case"end":return r.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},identifier:"widget-demo"}},"schema-demo":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R;return C.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return l.t3=l.sent,v=(0,l.t2)(l.t3),l.next=13,e.e(17).then(e.bind(null,"8iYR"));case 13:return y=l.sent,R=function(){return o.default.createElement(v.default,{schema:y.basic})},l.abrupt("return",R);case 16:case"end":return l.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { basic } from '../json/schema';

export default () => <FR schema={basic} />;`},"demo/FR.jsx":{import:"../demo/FR",content:Fe},"json/schema.js":{import:"../json/schema",content:ve}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo"}},"schema-demo-1":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R;return C.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return l.t3=l.sent,v=(0,l.t2)(l.t3),l.next=13,e.e(17).then(e.bind(null,"8iYR"));case 13:return y=l.sent,R=function(){return o.default.createElement(v.default,{schema:y.titleTrick})},l.abrupt("return",R);case 16:case"end":return l.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { titleTrick } from '../json/schema';

export default () => <FR schema={titleTrick} />;`},"demo/FR.jsx":{import:"../demo/FR",content:Fe},"json/schema.js":{import:"../json/schema",content:ve}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo-1"}},"docs-playground":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(22)]).then(e.bind(null,"BASV"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:Rn},"main.js":{import:"./main",content:Ne},"json/simplest.json":{import:"./json/simplest.json",content:An},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:Mn},"monaco/index.js":{import:"./monaco",content:Sn},"suggestionsMap.js":{import:"./suggestionsMap",content:fn},"index.css":{import:"./index.css",content:Ye}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:"^17.x"},"react-dom":{version:">=16.9.0"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.4.5-beta.0"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-monaco-editor":{version:"0.43.0"},"@types/react":{version:"^17.x"}},identifier:"docs-playground"}},"table-render-advanced":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(22)]).then(e.bind(null,"7ZP+"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{tsx:Ln}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.0"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"1.x"}},transform:!0,defaultShowCode:!0,identifier:"table-render-advanced"}},"table-render-demo":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R,a,l,s,K;return C.a.wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return d=e("K+nK"),D.t0=d,D.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return D.t1=D.sent,o=(0,D.t0)(D.t1),D.next=8,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(59)]).then(e.bind(null,"P2DI"));case 8:for(v=D.sent,y=[],R=0;R<6;R++)y.push({id:R.toString(),title:"\u6807\u9898".concat(R+1),created_at:new Date().getTime()});return a={type:"object",properties:{string:{title:"\u6807\u9898",type:"string","ui:width":"30%"},created_at:{title:"\u521B\u5EFA\u65F6\u95F4",type:"string",format:"date","ui:width":"30%"}}},l=[{title:"\u6807\u9898",dataIndex:"title"},{title:"\u521B\u5EFA\u65F6\u95F4",key:"since",dataIndex:"created_at",valueType:"date"},{title:"\u64CD\u4F5C",render:function(F,f){return o.default.createElement("a",{onClick:function(){return alert(F.title)}},"\u7F16\u8F91")}}],s=function(){var F=function(){return{rows:y,total:y.length}};return o.default.createElement(v.TableProvider,null,o.default.createElement(v.Search,{schema:a,api:F}),o.default.createElement(v.Table,{headerTitle:"\u6700\u7B80\u8868\u683C",columns:l,rowKey:"id"}))},K=s,D.abrupt("return",K);case 16:case"end":return D.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Wrapper;`}},dependencies:{react:{version:">=16.8.0"},"table-render":{version:"1.1.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.x"}},transform:!0,defaultShowCode:!0,identifier:"table-render-demo"}},"generator-demo":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R,a;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(60)]).then(e.bind(null,"nYSz"));case 9:return s.t3=s.sent,v=(0,s.t2)(s.t3),y={type:"object",properties:{inputName:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string"}}},R=function(){return o.default.createElement("div",{style:{height:"80vh"}},o.default.createElement(v.default,{defaultValue:y}))},a=R,s.abrupt("return",a);case 15:case"end":return s.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"generator-demo"}},"generator-modal":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(22)]).then(e.bind(null,"PPgD"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:wn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.4.0"},"react-dom":{version:">=16.9.0"}},identifier:"generator-modal"}},"generator-settings":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(22)]).then(e.bind(null,"M63W"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:jn}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-settings"}},"generator-layout":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(22)]).then(e.bind(null,"SOdT"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:Be},"index.less":{import:"./index.less",content:Gn}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-layout"}},"generator-transformer":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(22)]).then(e.bind(null,"jktF"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:$n}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.4.0"},"react-dom":{version:">=16.9.0"}},identifier:"generator-transformer"}},"generator-playground":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(22)]).then(e.bind(null,"TYW4"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:_n},"index.less":{import:"./index.less",content:Gn}},dependencies:{react:{version:">=16.8.0"},umi:{version:"3.4.20"},"fr-generator":{version:"2.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-playground"}}}},TIsu:function(Kn,hn,e){},Zs1V:function(Kn){Kn.exports=JSON.parse("{}")},mFKp:function(Kn,hn,e){"use strict";e.r(hn);var G=e("q1tI"),n=e.n(G),C=e("dEAq"),W=e.n(C),de=e("0zqC"),L=e("ZpkN"),Xe=e("JjdP"),Fe=n.a.memo(Xe.default["watch-demo"].component),ve=n.a.memo(Xe.default["watch-demo-1"].component);hn.default=Rn=>(n.a.useEffect(()=>{Rn!=null&&Rn.location.hash&&C.AnchorLink.scrollToAnchor(decodeURIComponent(Rn.location.hash.slice(1)))},[]),n.a.createElement(n.a.Fragment,null,n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"markdown"},n.a.createElement("h1",{id:"\u8868\u5355\u76D1\u542C\uFF08watch\uFF09"},n.a.createElement(C.AnchorLink,{to:"#\u8868\u5355\u76D1\u542C\uFF08watch\uFF09","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u8868\u5355\u76D1\u542C\uFF08watch\uFF09"),n.a.createElement("p",null,"\u6709\u65F6\u6211\u4EEC\u9700\u8981\u6839\u636E\u7279\u5B9A\u8868\u5355\u6570\u636E\u7684\u53D8\u52A8\u800C\u65F6\u65F6\u89E6\u53D1\u4E00\u4E2A callback\uFF0CFormRender \u5F00\u653E\u4E86 ",n.a.createElement("code",null,"watch")," \u53D8\u91CF\uFF0C\u7528\u4E8E\u6570\u636E\u7684\u76D1\u542C\u7684\u5524\u8D77\u56DE\u8C03\u3002\u8BED\u6CD5\u7C7B\u4F3C\u4E8E vue \u7684 watch\u3002"),n.a.createElement("p",null,"\u6CE8\u610F form-render \u5E76\u672A\u9650\u5236\u5728 watch \u7684 callback \u91CC\u80FD\u5199\u7684\u5185\u5BB9\uFF0C\u8BF7\u614E\u91CD\u4F7F\u7528\u3002\u4F8B\u5982 path \u662F'#' \u5219\u9ED8\u8BA4\u6BCF\u6B21\u90FD\u4F1A\u6267\u884C\uFF0C\u8981\u662F\u5728 callback \u91CC\u5199\u4E86\u4EFB\u4F55\u5BF9 formData\u3001schema \u7684\u4FEE\u6539\uFF0C\u5C31\u53EF\u80FD\u4F1A\u9677\u5165\u53CD\u590D\u89E6\u53D1\u3002\u6240\u4EE5\u8BF7\u786E\u4FDD watch \u7684\u903B\u8F91\u7B26\u5408\u771F\u5B9E\u8054\u52A8\u4F7F\u7528\u903B\u8F91\u3002"),n.a.createElement("h2",{id:"\u503C\u7684\u8054\u52A8"},n.a.createElement(C.AnchorLink,{to:"#\u503C\u7684\u8054\u52A8","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u503C\u7684\u8054\u52A8"),n.a.createElement("p",null,"\u6CE8\u610F\u4F7F\u7528 form.setValueByPath \u6307\u5B9A\u8DEF\u5F84\u5BF9\u503C\u8FDB\u884C\u4FEE\u6539")),n.a.createElement(de.default,Xe.default["watch-demo"].previewerProps,n.a.createElement(Fe,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h2",{id:"schema-\u7684\u8054\u52A8"},n.a.createElement(C.AnchorLink,{to:"#schema-\u7684\u8054\u52A8","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"schema \u7684\u8054\u52A8"),n.a.createElement("p",null,"form.setSchemaByPath \u6307\u5B9A\u8DEF\u5F84\u5BF9 schema \u8FDB\u884C\u4FEE\u6539")),n.a.createElement(de.default,Xe.default["watch-demo-1"].previewerProps,n.a.createElement(ve,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h3",{id:"\u8BED\u6CD5\u8BF4\u660E"},n.a.createElement(C.AnchorLink,{to:"#\u8BED\u6CD5\u8BF4\u660E","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u8BED\u6CD5\u8BF4\u660E"),n.a.createElement("p",null,n.a.createElement("code",null,"watch")," \u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0Ckey \u503C\u4E3A\u6570\u636E\u5BF9\u5E94\u7684\u201C\u8DEF\u5F84\u201D\uFF0Cvalue \u4E3A callback \u51FD\u6570\uFF0C\u6216\u8005\u5728\u590D\u6742\u60C5\u51B5\u662F\u4E2A\u5BF9\u8C61"),n.a.createElement(L.a,{code:`const watch = {
  // # \u4E3A\u5168\u5C40
  '#': val => {
    console.log('\u8868\u5355\u7684\u65F6\u65F6\u6570\u636E\u4E3A\uFF1A', val);
  },
  input1: val => {
    if (val !== undefined) {
      form.onItemChange('input2', val);
    }
  },
  'object1.select2': {
    handler: val => {
      if (val === 'option1') {
        form.onItemChange('object1.input2', 'hello');
      }
    },
    immediate: true,
  },
};`,lang:"js"}),n.a.createElement("h3",{id:"option-immediate"},n.a.createElement(C.AnchorLink,{to:"#option-immediate","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Option: immediate"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B: boolean"),n.a.createElement("li",null,"\u9ED8\u8BA4: false")),n.a.createElement("p",null,n.a.createElement("code",null,"immediate: true")," \u4F1A\u5728\u9996\u6B21\u52A0\u8F7D\u65F6\u5C31\u6267\u884C\u4E00\u6B21 watch \u7684 handler"),n.a.createElement(L.a,{code:`const watch = {
  // # \u4E3A\u5168\u5C40
  input1: {
    handler: val => {
      if (val !== undefined) {
        form.onItemChange('input2', val);
      }
    },
    immediate: true,
  },
};`,lang:"js"})))))},p8sG:function(Kn,hn,e){"use strict";Kn.exports=e("80pN")}}]);
