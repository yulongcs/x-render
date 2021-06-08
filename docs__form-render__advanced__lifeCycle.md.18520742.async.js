(window.webpackJsonp=window.webpackJsonp||[]).push([[34,10],{"0zqC":function(An,hn,e){"use strict";e.r(hn);var G=e("tJVT"),n=e("q1tI"),C=e.n(n),W=e("wx14"),ce=e("rePB"),L=e("ODXe"),on=e("U8pU"),Ee=e("Ff2n"),he=e("VTBJ"),at=e("TSYQ"),Ne=e.n(at),Tn=e("Zm9Q"),Kn=e("5Z9U"),Rn=e("6cGi"),fn=e("KQm4"),Xe=e("wgJM"),Wn=e("t23M");function Mn(t){var i=Object(n.useRef)(),c=Object(n.useRef)(!1);function b(){for(var O=arguments.length,g=new Array(O),S=0;S<O;S++)g[S]=arguments[S];c.current||(Xe.a.cancel(i.current),i.current=Object(Xe.a)(function(){t.apply(void 0,g)}))}return Object(n.useEffect)(function(){return function(){c.current=!0,Xe.a.cancel(i.current)}},[]),b}function Sn(t){var i=Object(n.useRef)([]),c=Object(n.useState)({}),b=Object(L.a)(c,2),O=b[1],g=Object(n.useRef)(typeof t=="function"?t():t),S=Mn(function(){var B=g.current;i.current.forEach(function($){B=$(B)}),i.current=[],g.current=B,O({})});function j(B){i.current.push(B),S()}return[g.current,j]}var Be=e("4IlW");function zn(t,i){var c,b=t.prefixCls,O=t.id,g=t.active,S=t.rtl,j=t.tab,B=j.key,$=j.tab,V=j.disabled,x=j.closeIcon,J=t.tabBarGutter,se=t.tabPosition,Q=t.closable,X=t.renderWrapper,le=t.removeAriaLabel,z=t.editable,q=t.onClick,ae=t.onRemove,Y=t.onFocus,oe="".concat(b,"-tab");n.useEffect(function(){return ae},[]);var k={};se==="top"||se==="bottom"?k[S?"marginLeft":"marginRight"]=J:k.marginBottom=J;var be=z&&Q!==!1&&!V;function ee(ie){V||q(ie)}function de(ie){ie.preventDefault(),ie.stopPropagation(),z.onEdit("remove",{key:B,event:ie})}var me=n.createElement("div",{key:B,ref:i,className:Ne()(oe,(c={},Object(ce.a)(c,"".concat(oe,"-with-remove"),be),Object(ce.a)(c,"".concat(oe,"-active"),g),Object(ce.a)(c,"".concat(oe,"-disabled"),V),c)),style:k,onClick:ee},n.createElement("div",{role:"tab","aria-selected":g,id:O&&"".concat(O,"-tab-").concat(B),className:"".concat(oe,"-btn"),"aria-controls":O&&"".concat(O,"-panel-").concat(B),"aria-disabled":V,tabIndex:V?null:0,onClick:function(H){H.stopPropagation(),ee(H)},onKeyDown:function(H){[Be.a.SPACE,Be.a.ENTER].includes(H.which)&&(H.preventDefault(),ee(H))},onFocus:Y},$),be&&n.createElement("button",{type:"button","aria-label":le||"remove",tabIndex:0,className:"".concat(oe,"-remove"),onClick:function(H){H.stopPropagation(),de(H)}},x||z.removeIcon||"\xD7"));return X&&(me=X(me)),me}var Ln=n.forwardRef(zn),qn={width:0,height:0,left:0,top:0};function ct(t,i,c){return Object(n.useMemo)(function(){for(var b,O=new Map,g=i.get((b=t[0])===null||b===void 0?void 0:b.key)||qn,S=g.left+g.width,j=0;j<t.length;j+=1){var B=t[j].key,$=i.get(B);if(!$){var V;$=i.get((V=t[j-1])===null||V===void 0?void 0:V.key)||qn}var x=O.get(B)||Object(he.a)({},$);x.right=S-x.left-x.width,O.set(B,x)}return O},[t.map(function(b){return b.key}).join("_"),i,c])}var E={width:0,height:0,left:0,top:0,right:0};function I(t,i,c,b,O){var g=O.tabs,S=O.tabPosition,j=O.rtl,B,$,V;["top","bottom"].includes(S)?(B="width",$=j?"right":"left",V=Math.abs(i.left)):(B="height",$="top",V=-i.top);var x=i[B],J=c[B],se=b[B],Q=x;return J+se>x&&(Q=x-se),Object(n.useMemo)(function(){if(!g.length)return[0,0];for(var X=g.length,le=X,z=0;z<X;z+=1){var q=t.get(g[z].key)||E;if(q[$]+q[B]>V+Q){le=z-1;break}}for(var ae=0,Y=X-1;Y>=0;Y-=1){var oe=t.get(g[Y].key)||E;if(oe[$]<V){ae=Y+1;break}}return[ae,le]},[t,V,Q,S,g.map(function(X){return X.key}).join("_"),j])}var P=e("Gytx"),d=e.n(P),o=e("Kwbf");function v(t,i){var c=t.prefixCls,b=t.invalidate,O=t.item,g=t.renderItem,S=t.responsive,j=t.registerSize,B=t.itemKey,$=t.className,V=t.style,x=t.children,J=t.display,se=t.order,Q=t.component,X=Q===void 0?"div":Q,le=Object(Ee.a)(t,["prefixCls","invalidate","item","renderItem","responsive","registerSize","itemKey","className","style","children","display","order","component"]),z=S&&!J;function q(be){j(B,be)}n.useEffect(function(){return function(){q(null)}},[]);var ae=g&&O!==void 0?g(O):x,Y;b||(Y={opacity:z?0:1,height:z?0:void 0,overflowY:z?"hidden":void 0,order:S?se:void 0,pointerEvents:z?"none":void 0});var oe={};z&&(oe["aria-hidden"]=!0);var k=n.createElement(X,Object(W.a)({className:Ne()(!b&&c,$),style:Object(he.a)(Object(he.a)({},Y),V)},oe,le,{ref:i}),ae);return S&&(k=n.createElement(Wn.default,{onResize:function(ee){var de=ee.offsetWidth;q(de)}},k)),k}var y=n.forwardRef(v);y.displayName="Item";var R=y;function r(){var t=Object(n.useState)({}),i=Object(L.a)(t,2),c=i[1],b=Object(n.useRef)([]),O=Object(n.useRef)(!1),g=0,S=0;Object(n.useEffect)(function(){return function(){O.current=!0}},[]);function j(B){var $=g;g+=1,b.current.length<$+1&&(b.current[$]=B);var V=b.current[$];function x(J){b.current[$]=typeof J=="function"?J(b.current[$]):J,Xe.a.cancel(S),S=Object(Xe.a)(function(){O.current||c({})})}return[V,x]}return j}var l=function(i,c){var b=n.useContext(N);if(!b){var O=i.component,g=O===void 0?"div":O,S=Object(Ee.a)(i,["component"]);return n.createElement(g,Object(W.a)({},S,{ref:c}))}var j=b.className,B=Object(Ee.a)(b,["className"]),$=i.className,V=Object(Ee.a)(i,["className"]);return n.createElement(N.Provider,{value:null},n.createElement(R,Object(W.a)({ref:c,className:Ne()(j,$)},B,V)))},s=n.forwardRef(l);s.displayName="RawItem";var T=s,N=n.createContext(null),D="responsive",u="invalidate";function A(t){return"+ ".concat(t.length," ...")}function f(t,i){var c=t.prefixCls,b=c===void 0?"rc-overflow":c,O=t.data,g=O===void 0?[]:O,S=t.renderItem,j=t.renderRawItem,B=t.itemKey,$=t.itemWidth,V=$===void 0?10:$,x=t.ssr,J=t.style,se=t.className,Q=t.maxCount,X=t.renderRest,le=t.renderRawRest,z=t.suffix,q=t.component,ae=q===void 0?"div":q,Y=t.itemComponent,oe=t.onVisibleChange,k=Object(Ee.a)(t,["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"]),be=r(),ee=x==="full",de=be(null),me=Object(L.a)(de,2),ie=me[0],H=me[1],ue=ie||0,ge=be(new Map),ve=Object(L.a)(ge,2),Se=ve[0],We=ve[1],Ce=be(0),Re=Object(L.a)(Ce,2),Me=Re[0],Te=Re[1],Fe=be(0),De=Object(L.a)(Fe,2),$e=De[0],qe=De[1],Ve=be(0),ze=Object(L.a)(Ve,2),Qe=ze[0],Le=ze[1],jn=Object(n.useState)(null),tn=Object(L.a)(jn,2),Ye=tn[0],ln=tn[1],yn=Object(n.useState)(null),bn=Object(L.a)(yn,2),Ae=bn[0],xe=bn[1],_e=n.useMemo(function(){return Ae===null&&ee?Number.MAX_SAFE_INTEGER:Ae||0},[Ae,ie]),Ze=Object(n.useState)(!1),wn=Object(L.a)(Ze,2),Gn=wn[0],Bn=wn[1],rn="".concat(b,"-item"),Pn=Math.max(Me,$e),un=g.length&&Q===D,En=Q===u,en=un||typeof Q=="number"&&g.length>Q,an=Object(n.useMemo)(function(){var pe=g;return un?ie===null&&ee?pe=g:pe=g.slice(0,Math.min(g.length,ue/V)):typeof Q=="number"&&(pe=g.slice(0,Q)),pe},[g,V,ie,Q,un]),Dn=Object(n.useMemo)(function(){return un?g.slice(_e+1):g.slice(an.length)},[g,an,un,_e]),cn=Object(n.useCallback)(function(pe,je){var we;return typeof B=="function"?B(pe):(we=B&&(pe==null?void 0:pe[B]))!==null&&we!==void 0?we:je},[B]),ke=Object(n.useCallback)(S||function(pe){return pe},[S]);function He(pe,je){xe(pe),je||(Bn(pe<g.length-1),oe==null||oe(pe))}function Jn(pe,je){H(je.clientWidth)}function xn(pe,je){We(function(we){var nn=new Map(we);return je===null?nn.delete(pe):nn.set(pe,je),nn})}function nt(pe,je){qe(je),Te($e)}function Cn(pe,je){Le(je)}function vn(pe){return Se.get(cn(an[pe],pe))}n.useLayoutEffect(function(){if(ue&&Pn&&an){var pe=Qe,je=an.length,we=je-1;if(!je){He(0),ln(null);return}for(var nn=0;nn<je;nn+=1){var Yn=vn(nn);if(Yn===void 0){He(nn-1,!0);break}if(pe+=Yn,nn===we-1&&pe+vn(we)<=ue){He(we),ln(null);break}else if(pe+Pn>ue){He(nn-1),ln(pe-Yn-Qe+$e);break}else if(nn===we){He(we),ln(pe-Qe);break}}z&&vn(0)+Qe>ue&&ln(null)}},[ue,Se,$e,Qe,cn,an]);var Hn=Gn&&!!Dn.length,On={};Ye!==null&&un&&(On={position:"absolute",left:Ye,top:0});var mn={prefixCls:rn,responsive:un,component:Y,invalidate:En},Qn=j?function(pe,je){var we=cn(pe,je);return n.createElement(N.Provider,{key:we,value:Object(he.a)(Object(he.a)({},mn),{},{order:je,item:pe,itemKey:we,registerSize:xn,display:je<=_e})},j(pe,je))}:function(pe,je){var we=cn(pe,je);return n.createElement(R,Object(W.a)({},mn,{order:je,key:we,item:pe,renderItem:ke,itemKey:we,registerSize:xn,display:je<=_e}))},In,Xn={order:Hn?_e:Number.MAX_SAFE_INTEGER,className:"".concat(rn,"-rest"),registerSize:nt,display:Hn};if(le)le&&(In=n.createElement(N.Provider,{value:Object(he.a)(Object(he.a)({},mn),Xn)},le(Dn)));else{var dn=X||A;In=n.createElement(R,Object(W.a)({},mn,Xn),typeof dn=="function"?dn(Dn):dn)}var Fn=n.createElement(ae,Object(W.a)({className:Ne()(!En&&b,se),style:J,ref:i},k),an.map(Qn),en?In:null,z&&n.createElement(R,Object(W.a)({},mn,{order:_e,className:"".concat(rn,"-suffix"),registerSize:Cn,display:!0,style:On}),z));return un&&(Fn=n.createElement(Wn.default,{onResize:Jn},Fn)),Fn}var a=n.forwardRef(f);a.displayName="Overflow",a.Item=T,a.RESPONSIVE=D,a.INVALIDATE=u;var h=a,p=h,K=e("1OyB"),w=e("vuIU"),U=e("Ji7U"),ne=e("LK+K"),re=e("bT9E"),ye=e("YrtM"),Ie=n.createContext(null);function Ke(t,i){var c=Object(he.a)({},t);return Object.keys(i).forEach(function(b){var O=i[b];O!==void 0&&(c[b]=O)}),c}function gn(t){var i=t.children,c=t.locked,b=Object(Ee.a)(t,["children","locked"]),O=n.useContext(Ie),g=Object(ye.a)(function(){return Ke(O,b)},[O,b],function(S,j){return!c&&(S[0]!==j[0]||!d()(S[1],j[1]))});return n.createElement(Ie.Provider,{value:g},i)}function $n(t,i,c,b){var O=n.useContext(Ie),g=O.activeKey,S=O.onActive,j=O.onInactive,B={active:g===t};return i||(B.onMouseEnter=function($){c==null||c({key:t,domEvent:$}),S(t)},B.onMouseLeave=function($){b==null||b({key:t,domEvent:$}),j(t)}),B}function _n(t){var i=t.item,c=Object(Ee.a)(t,["item"]);return Object.defineProperty(c,"item",{get:function(){return Object(o.a)(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),i}}),c}function m(t){var i=t.icon,c=t.props,b=t.children,O;return typeof i=="function"?O=n.createElement(i,Object(he.a)({},c)):O=i,O||b||null}function F(t){var i=n.useContext(Ie),c=i.mode,b=i.rtl,O=i.inlineIndent;if(c!=="inline")return null;var g=t;return b?{paddingRight:g*O}:{paddingLeft:g*O}}var M=[],fe=n.createContext(null);function _(){return n.useContext(fe)}var Pe=n.createContext(M);function Ue(t){var i=n.useContext(Pe);return n.useMemo(function(){return t!==void 0?[].concat(Object(fn.a)(i),[t]):i},[i,t])}var Je=n.createContext(null),zt=n.createContext(null);function Gt(t,i){return t===void 0?null:"".concat(t,"-").concat(i)}function Jt(t){var i=n.useContext(zt);return Gt(i,t)}var br=function(t){Object(U.a)(c,t);var i=Object(ne.a)(c);function c(){return Object(K.a)(this,c),i.apply(this,arguments)}return Object(w.a)(c,[{key:"render",value:function(){var O=this.props,g=O.title,S=O.attribute,j=O.elementRef,B=Object(Ee.a)(O,["title","attribute","elementRef"]),$=Object(re.a)(B,["eventKey"]);return Object(o.a)(!S,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),n.createElement(p.Item,Object(W.a)({},S,{title:typeof g=="string"?g:void 0},$,{ref:j}))}}]),c}(n.Component),Cr=function(i){var c,b=i.style,O=i.className,g=i.eventKey,S=i.disabled,j=i.itemIcon,B=i.children,$=i.role,V=i.onMouseEnter,x=i.onMouseLeave,J=i.onClick,se=i.onKeyDown,Q=i.onFocus,X=Object(Ee.a)(i,["style","className","eventKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"]),le=Jt(g),z=n.useContext(Ie),q=z.prefixCls,ae=z.onItemClick,Y=z.disabled,oe=z.overflowDisabled,k=z.itemIcon,be=z.selectedKeys,ee=z.onActive,de="".concat(q,"-item"),me=n.useRef(),ie=n.useRef(),H=Y||S,ue=Ue(g),ge=function(Ve){return{key:g,keyPath:ue,item:me.current,domEvent:Ve}},ve=j||k,Se=$n(g,H,V,x),We=Se.active,Ce=Object(Ee.a)(Se,["active"]),Re=be.includes(g),Me=F(ue.length),Te=function(Ve){if(!H){var ze=ge(Ve);J==null||J(_n(ze)),ae(ze)}},Fe=function(Ve){if(se==null||se(Ve),Ve.which===Be.a.ENTER){var ze=ge(Ve);J==null||J(_n(ze)),ae(ze)}},De=function(Ve){ee(g),Q==null||Q(Ve)},$e={};return i.role==="option"&&($e["aria-selected"]=Re),n.createElement(br,Object(W.a)({ref:me,elementRef:ie,role:$===null?"none":$||"menuitem",tabIndex:S?null:-1,"data-menu-id":oe&&le?null:le},X,Ce,$e,{component:"li","aria-disabled":S,style:Object(he.a)(Object(he.a)({},Me),b),className:Ne()(de,(c={},Object(ce.a)(c,"".concat(de,"-active"),We),Object(ce.a)(c,"".concat(de,"-selected"),Re),Object(ce.a)(c,"".concat(de,"-disabled"),H),c),O),onClick:Te,onKeyDown:Fe,onFocus:De}),B,n.createElement(m,{props:Object(he.a)(Object(he.a)({},i),{},{isSelected:Re}),icon:ve}))};function Or(t){var i=t.eventKey,c=_(),b=Ue(i);return n.useEffect(function(){if(c)return c.registerPath(i,b),function(){c.unregisterPath(i,b)}},[b]),c?null:n.createElement(Cr,t)}var Et=Or;function Dt(t,i){return Object(Tn.a)(t).map(function(c,b){if(n.isValidElement(c)){var O=c.key;return O==null&&(O="tmp_key-".concat([].concat(Object(fn.a)(i),[b]).join("-"))),n.cloneElement(c,{key:O,eventKey:O})}return c})}function et(t){var i=n.useRef(t);i.current=t;var c=n.useCallback(function(){for(var b,O=arguments.length,g=new Array(O),S=0;S<O;S++)g[S]=arguments[S];return(b=i.current)===null||b===void 0?void 0:b.call.apply(b,[i].concat(g))},[]);return t?c:void 0}var Rr=function(i,c){var b=i.className,O=i.children,g=Object(Ee.a)(i,["className","children"]),S=n.useContext(Ie),j=S.prefixCls,B=S.mode;return n.createElement("ul",Object(W.a)({className:Ne()(j,"".concat(j,"-sub"),"".concat(j,"-").concat(B==="inline"?"inline":"vertical"),b)},g,{"data-menu-list":!0,ref:c}),O)},xt=n.forwardRef(Rr);xt.displayName="SubMenuList";var Ht=xt,Sr=e("uciX"),Vn={adjustX:1,adjustY:1},Qt={topLeft:{points:["bl","tl"],overflow:Vn,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Vn,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:Vn,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:Vn,offset:[4,0]}},jr={topLeft:{points:["bl","tl"],overflow:Vn,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Vn,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:Vn,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:Vn,offset:[4,0]}},fa=Qt;function Xt(t,i,c){if(i)return i;if(c)return c[t]||c.other}var Pr={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function Er(t){var i=t.prefixCls,c=t.visible,b=t.children,O=t.popup,g=t.popupClassName,S=t.popupOffset,j=t.disabled,B=t.mode,$=t.onVisibleChange,V=n.useContext(Ie),x=V.getPopupContainer,J=V.rtl,se=V.subMenuOpenDelay,Q=V.subMenuCloseDelay,X=V.builtinPlacements,le=V.triggerSubMenuAction,z=V.forceSubMenuRender,q=V.motion,ae=V.defaultMotions,Y=n.useState(!1),oe=Object(L.a)(Y,2),k=oe[0],be=oe[1],ee=J?Object(he.a)(Object(he.a)({},jr),X):Object(he.a)(Object(he.a)({},Qt),X),de=Pr[B],me=Xt(B,q,ae),ie=Object(he.a)(Object(he.a)({},me),{},{leavedClassName:"".concat(i,"-hidden"),removeOnLeave:!1,motionAppear:!0}),H=n.useRef();return n.useEffect(function(){return H.current=Object(Xe.a)(function(){be(c)}),function(){Xe.a.cancel(H.current)}},[c]),n.createElement(Sr.a,{prefixCls:i,popupClassName:Ne()("".concat(i,"-popup"),Object(ce.a)({},"".concat(i,"-rtl"),J),g),stretch:B==="horizontal"?"minWidth":null,getPopupContainer:x,builtinPlacements:ee,popupPlacement:de,popupVisible:k,popup:O,popupAlign:S&&{offset:S},action:j?[]:[le],mouseEnterDelay:se,mouseLeaveDelay:Q,onPopupVisibleChange:$,forceRender:z,popupMotion:ie},b)}var Dr=e("8XRh");function Ir(t){var i=t.id,c=t.open,b=t.keyPath,O=t.children,g="inline",S=n.useContext(Ie),j=S.prefixCls,B=S.forceSubMenuRender,$=S.motion,V=S.defaultMotions,x=S.mode,J=n.useRef(!1);J.current=x===g;var se=n.useState(!J.current),Q=Object(L.a)(se,2),X=Q[0],le=Q[1],z=J.current?c:!1;n.useEffect(function(){J.current&&le(!1)},[x]);var q=Object(he.a)({},Xt(g,$,V));b.length>1&&(q.motionAppear=!1);var ae=q.onVisibleChanged;return q.onVisibleChanged=function(Y){return!J.current&&!Y&&le(!0),ae==null?void 0:ae(Y)},X?null:n.createElement(gn,{mode:g,locked:!J.current},n.createElement(Dr.default,Object(W.a)({visible:z},q,{forceRender:B,removeOnLeave:!1,leavedClassName:"".concat(j,"-hidden")}),function(Y){var oe=Y.className,k=Y.style;return n.createElement(Ht,{id:i,className:oe,style:k},O)}))}var Fr=function(i){var c,b=i.style,O=i.className,g=i.title,S=i.eventKey,j=i.disabled,B=i.internalPopupClose,$=i.children,V=i.itemIcon,x=i.expandIcon,J=i.popupClassName,se=i.popupOffset,Q=i.onClick,X=i.onMouseEnter,le=i.onMouseLeave,z=i.onTitleClick,q=i.onTitleMouseEnter,ae=i.onTitleMouseLeave,Y=Object(Ee.a)(i,["style","className","title","eventKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"]),oe=Jt(S),k=n.useContext(Ie),be=k.prefixCls,ee=k.mode,de=k.openKeys,me=k.disabled,ie=k.overflowDisabled,H=k.activeKey,ue=k.selectedKeys,ge=k.itemIcon,ve=k.expandIcon,Se=k.onItemClick,We=k.onOpenChange,Ce=k.onActive,Re=n.useContext(Je),Me=Re.isSubPathKey,Te=Ue(),Fe="".concat(be,"-submenu"),De=me||j,$e=n.useRef(),qe=n.useRef(),Ve=V||ge,ze=x||ve,Qe=de.includes(S),Le=!ie&&Qe,jn=Me(ue,S),tn=$n(S,De,q,ae),Ye=tn.active,ln=Object(Ee.a)(tn,["active"]),yn=n.useState(!1),bn=Object(L.a)(yn,2),Ae=bn[0],xe=bn[1],_e=function(He){De||xe(He)},Ze=function(He){_e(!0),X==null||X({key:S,domEvent:He})},wn=function(He){_e(!1),le==null||le({key:S,domEvent:He})},Gn=n.useMemo(function(){return Ye||(ee!=="inline"?Ae||Me([H],S):!1)},[ee,Ye,H,Ae,S,Me]),Bn=F(Te.length),rn=function(He){De||(z==null||z({key:S,domEvent:He}),ee==="inline"&&We(S,!Qe))},Pn=et(function(ke){Q==null||Q(_n(ke)),Se(ke)}),un=function(He){ee!=="inline"&&We(S,He)},En=function(){Ce(S)},en=oe&&"".concat(oe,"-popup"),an=n.createElement("div",Object(W.a)({role:"menuitem",style:Bn,className:"".concat(Fe,"-title"),tabIndex:De?null:-1,ref:$e,title:typeof g=="string"?g:null,"data-menu-id":ie&&oe?null:oe,"aria-expanded":Le,"aria-haspopup":!0,"aria-controls":en,"aria-disabled":De,onClick:rn,onFocus:En},ln),g,n.createElement(m,{icon:ee!=="horizontal"?ze:null,props:Object(he.a)(Object(he.a)({},i),{},{isOpen:Le,isSubMenu:!0})},n.createElement("i",{className:"".concat(Fe,"-arrow")}))),Dn=n.useRef(ee);if(ee!=="inline"&&(Dn.current=Te.length>1?"vertical":ee),!ie){var cn=Dn.current;an=n.createElement(Er,{mode:cn,prefixCls:Fe,visible:!B&&Le&&ee!=="inline",popupClassName:J,popupOffset:se,popup:n.createElement(gn,{mode:cn},n.createElement(Ht,{id:en,ref:qe},$)),disabled:De,onVisibleChange:un},an)}return n.createElement(gn,{onItemClick:Pn,mode:ee==="horizontal"?"vertical":ee,itemIcon:Ve,expandIcon:ze},n.createElement(p.Item,Object(W.a)({role:"none"},Y,{component:"li",style:b,className:Ne()(Fe,"".concat(Fe,"-").concat(ee),O,(c={},Object(ce.a)(c,"".concat(Fe,"-open"),Le),Object(ce.a)(c,"".concat(Fe,"-active"),Gn),Object(ce.a)(c,"".concat(Fe,"-selected"),jn),Object(ce.a)(c,"".concat(Fe,"-disabled"),De),c)),onMouseEnter:Ze,onMouseLeave:wn}),an,!ie&&n.createElement(Ir,{id:en,open:Le,keyPath:Te},$)))};function Yt(t){var i=t.eventKey,c=t.children,b=Ue(i),O=Dt(c,b),g=_();n.useEffect(function(){if(g)return g.registerPath(i,b),function(){g.unregisterPath(i,b)}},[b]);var S;return g?S=O:S=n.createElement(Fr,t,O),n.createElement(Pe.Provider,{value:b},S)}var Nr=e("x/xZ");function Zt(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Object(Nr.a)(t)){var c=t.nodeName.toLowerCase(),b=["input","select","textarea","button"].includes(c)||t.isContentEditable||c==="a"&&!!t.getAttribute("href"),O=t.getAttribute("tabindex"),g=Number(O),S=null;return O&&!Number.isNaN(g)?S=g:b&&S===null&&(S=0),b&&t.disabled&&(S=null),S!==null&&(S>=0||i&&S<0)}return!1}function kt(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,c=Object(fn.a)(t.querySelectorAll("*")).filter(function(b){return Zt(b,i)});return Zt(t,i)&&c.unshift(t),c}var mt=null;function pa(){mt=document.activeElement}function va(){mt=null}function ha(){if(mt)try{mt.focus()}catch(t){}}function ga(t,i){if(i.keyCode===9){var c=kt(t),b=c[i.shiftKey?0:c.length-1],O=b===document.activeElement||t===document.activeElement;if(O){var g=c[i.shiftKey?c.length-1:0];g.focus(),i.preventDefault()}}}var It=Be.a.LEFT,Ft=Be.a.RIGHT,Nt=Be.a.UP,ft=Be.a.DOWN,pt=Be.a.ENTER,qt=Be.a.ESC,_t=[Nt,ft,It,Ft];function Ar(t,i,c,b){var O,g,S,j,B="prev",$="next",V="children",x="parent";if(t==="inline"&&b===pt)return{inlineTrigger:!0};var J=(O={},Object(ce.a)(O,Nt,B),Object(ce.a)(O,ft,$),O),se=(g={},Object(ce.a)(g,It,c?$:B),Object(ce.a)(g,Ft,c?B:$),Object(ce.a)(g,ft,V),Object(ce.a)(g,pt,V),g),Q=(S={},Object(ce.a)(S,Nt,B),Object(ce.a)(S,ft,$),Object(ce.a)(S,pt,V),Object(ce.a)(S,qt,x),Object(ce.a)(S,It,c?V:x),Object(ce.a)(S,Ft,c?x:V),S),X={inline:J,horizontal:se,vertical:Q,inlineSub:J,horizontalSub:Q,verticalSub:Q},le=(j=X["".concat(t).concat(i?"":"Sub")])===null||j===void 0?void 0:j[b];switch(le){case B:return{offset:-1,sibling:!0};case $:return{offset:1,sibling:!0};case x:return{offset:-1,sibling:!1};case V:return{offset:1,sibling:!1};default:return null}}function Tr(t){for(var i=t;i;){if(i.getAttribute("data-menu-list"))return i;i=i.parentElement}return null}function Kr(t,i){for(var c=t||document.activeElement;c;){if(i.has(c))return c;c=c.parentElement}return null}function Mr(t,i){var c=kt(t,!0);return c.filter(function(b){return i.has(b)})}function er(t,i,c){var b=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!t)return null;var O=Mr(t,i),g=O.length,S=O.findIndex(function(j){return c===j});return b<0?S===-1?S=g-1:S-=1:b>0&&(S+=1),S=(S+g)%g,O[S]}function wr(t,i,c,b,O,g,S,j,B,$){var V=n.useRef(),x=n.useRef();x.current=i;var J=function(){Xe.a.cancel(V.current)};return n.useEffect(function(){return function(){J()}},[]),function(se){var Q=se.which;if([].concat(_t,[pt,qt]).includes(Q)){var X,le,z,q=function(){X=new Set,le=new Map,z=new Map;var ge=g();return ge.forEach(function(ve){var Se=document.querySelector("[data-menu-id='".concat(Gt(b,ve),"']"));Se&&(X.add(Se),z.set(Se,ve),le.set(ve,Se))}),X};q();var ae=le.get(i),Y=Kr(ae,X),oe=z.get(Y),k=Ar(t,S(oe,!0).length===1,c,Q);if(!k)return;_t.includes(Q)&&se.preventDefault();var be=function(ge){if(ge){var ve=ge,Se=ge.querySelector("a");(Se==null?void 0:Se.getAttribute("href"))&&(ve=Se);var We=z.get(ge);j(We),J(),V.current=Object(Xe.a)(function(){x.current===We&&ve.focus()})}};if(k.sibling||!Y){var ee;!Y||t==="inline"?ee=O.current:ee=Tr(Y);var de=er(ee,X,Y,k.offset);be(de)}else if(k.inlineTrigger)B(oe);else if(k.offset>0)B(oe,!0),J(),V.current=Object(Xe.a)(function(){q();var ue=Y.getAttribute("aria-controls"),ge=document.getElementById(ue),ve=er(ge,X);be(ve)},5);else if(k.offset<0){var me=S(oe,!0),ie=me[me.length-2],H=le.get(ie);B(ie,!1),be(H)}}$==null||$(se)}}var Br=Math.random().toFixed(5).toString().slice(2),nr=0;function Wr(t){var i=Object(Rn.a)(t,{value:t}),c=Object(L.a)(i,2),b=c[0],O=c[1];return n.useEffect(function(){nr+=1;var g="".concat(Br,"-").concat(nr);O("rc-menu-uuid-".concat(g))},[]),b}var ya=e("p8sG");function Lr(t){Promise.resolve().then(t)}var At="__RC_UTIL_PATH_SPLIT__",tr=function(i){return i.join(At)},$r=function(i){return i.split(At)},Tt="rc-menu-more";function Vr(){var t=n.useState({}),i=Object(L.a)(t,2),c=i[1],b=Object(n.useRef)(new Map),O=Object(n.useRef)(new Map),g=n.useState([]),S=Object(L.a)(g,2),j=S[0],B=S[1],$=Object(n.useRef)(0),V=Object(n.useCallback)(function(z,q){var ae=tr(q);O.current.set(ae,z),b.current.set(z,ae),$.current+=1;var Y=$.current;Lr(function(){Y===$.current&&c({})})},[]),x=Object(n.useCallback)(function(z,q){var ae=tr(q);O.current.delete(ae),b.current.delete(z)},[]),J=Object(n.useCallback)(function(z){B(z)},[]),se=Object(n.useCallback)(function(z,q){var ae=b.current.get(z)||"",Y=$r(ae);return q&&j.includes(Y[0])&&Y.unshift(Tt),Y},[j]),Q=Object(n.useCallback)(function(z,q){return z.some(function(ae){var Y=se(ae,!0);return Y.includes(q)})},[se]),X=function(){var q=Object(fn.a)(b.current.keys());return j.length&&q.push(Tt),q},le=Object(n.useCallback)(function(z){var q="".concat(b.current.get(z)).concat(At),ae=new Set;return Object(fn.a)(O.current.keys()).forEach(function(Y){Y.startsWith(q)&&ae.add(O.current.get(Y))}),ae},[]);return{registerPath:V,unregisterPath:x,refreshOverflowKeys:J,isSubPathKey:Q,getKeyPath:se,getKeys:X,getSubPathKeys:le}}var vt=[],Ur=function(i){var c,b,O=i.prefixCls,g=O===void 0?"rc-menu":O,S=i.style,j=i.className,B=i.tabIndex,$=B===void 0?0:B,V=i.children,x=i.direction,J=i.id,se=i.mode,Q=se===void 0?"vertical":se,X=i.inlineCollapsed,le=i.disabled,z=i.disabledOverflow,q=i.subMenuOpenDelay,ae=q===void 0?.1:q,Y=i.subMenuCloseDelay,oe=Y===void 0?.1:Y,k=i.forceSubMenuRender,be=i.defaultOpenKeys,ee=i.openKeys,de=i.activeKey,me=i.defaultActiveFirst,ie=i.selectable,H=ie===void 0?!0:ie,ue=i.multiple,ge=ue===void 0?!1:ue,ve=i.defaultSelectedKeys,Se=i.selectedKeys,We=i.onSelect,Ce=i.onDeselect,Re=i.inlineIndent,Me=Re===void 0?24:Re,Te=i.motion,Fe=i.defaultMotions,De=i.triggerSubMenuAction,$e=De===void 0?"hover":De,qe=i.builtinPlacements,Ve=i.itemIcon,ze=i.expandIcon,Qe=i.overflowedIndicator,Le=Qe===void 0?"...":Qe,jn=i.getPopupContainer,tn=i.onClick,Ye=i.onOpenChange,ln=i.onKeyDown,yn=i.openAnimation,bn=i.openTransitionName,Ae=Object(Ee.a)(i,["prefixCls","style","className","tabIndex","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName"]),xe=Dt(V,vt),_e=n.useState(!1),Ze=Object(L.a)(_e,2),wn=Ze[0],Gn=Ze[1],Bn=n.useRef(),rn=Wr(J),Pn=x==="rtl",un=n.useMemo(function(){return Q==="inline"&&X?["vertical",X]:[Q,!1]},[Q,X]),En=Object(L.a)(un,2),en=En[0],an=En[1],Dn=n.useState(0),cn=Object(L.a)(Dn,2),ke=cn[0],He=cn[1],Jn=ke>=xe.length-1||en!=="horizontal"||z,xn=Object(Rn.a)(be,{value:ee,postState:function(Z){return Z||vt}}),nt=Object(L.a)(xn,2),Cn=nt[0],vn=nt[1],Hn=n.useState(Cn),On=Object(L.a)(Hn,2),mn=On[0],Qn=On[1],In=en==="inline",Xn=n.useRef(!1);n.useEffect(function(){In&&Qn(Cn)},[Cn]),n.useEffect(function(){if(!Xn.current){Xn.current=!0;return}if(In)vn(mn);else{var te=[];vn(te),Ye==null||Ye(te)}},[In]);var dn=Vr(),Fn=dn.registerPath,pe=dn.unregisterPath,je=dn.refreshOverflowKeys,we=dn.isSubPathKey,nn=dn.getKeyPath,Yn=dn.getKeys,gt=dn.getSubPathKeys,Bt=n.useMemo(function(){return{registerPath:Fn,unregisterPath:pe}},[Fn,pe]),Wt=n.useMemo(function(){return{isSubPathKey:we}},[we]);n.useEffect(function(){je(Jn?vt:xe.slice(ke+1).map(function(te){return te.key}))},[ke,Jn]);var Lt=Object(Rn.a)(de||me&&((c=xe[0])===null||c===void 0?void 0:c.key),{value:de}),tt=Object(L.a)(Lt,2),yt=tt[0],st=tt[1],bt=et(function(te){st(te)}),$t=et(function(){st(void 0)}),Ct=Object(Rn.a)(ve||[],{value:Se,postState:function(Z){return Array.isArray(Z)?Z:Z==null?vt:[Z]}}),Ot=Object(L.a)(Ct,2),rt=Ot[0],Nn=Ot[1],Rt=function(Z){if(!!H){var Oe=Z.key,Ge=rt.includes(Oe),sn;Ge?sn=rt.filter(function(kn){return kn!==Oe}):ge?sn=[].concat(Object(fn.a)(rt),[Oe]):sn=[Oe],Nn(sn);var Un=Object(he.a)(Object(he.a)({},Z),{},{selectedKeys:sn});Ge?Ce==null||Ce(Un):We==null||We(Un)}},St=et(function(te){tn==null||tn(_n(te)),Rt(te)}),ot=et(function(te,Z){var Oe=Cn.filter(function(sn){return sn!==te});if(Z)Oe.push(te);else if(en!=="inline"){var Ge=gt(te);Oe=Oe.filter(function(sn){return!Ge.has(sn)})}d()(Cn,Oe)||(vn(Oe),Ye==null||Ye(Oe))}),Zn=et(jn),lt=function(Z,Oe){var Ge=Oe!=null?Oe:!Cn.includes(Z);ot(Z,Ge)},ut=wr(en,yt,Pn,rn,Bn,Yn,nn,st,lt,ln);n.useEffect(function(){Gn(!0)},[]);var jt=en!=="horizontal"||z?xe:xe.map(function(te,Z){return n.createElement(gn,{key:te.key,overflowDisabled:Z>ke},te)}),Pt=n.createElement(p,Object(W.a)({id:J,ref:Bn,prefixCls:"".concat(g,"-overflow"),component:"ul",itemComponent:Et,className:Ne()(g,"".concat(g,"-root"),"".concat(g,"-").concat(en),j,(b={},Object(ce.a)(b,"".concat(g,"-inline-collapsed"),an),Object(ce.a)(b,"".concat(g,"-rtl"),Pn),b)),dir:x,style:S,role:"menu",tabIndex:$,data:jt,renderRawItem:function(Z){return Z},renderRawRest:function(Z){var Oe=Z.length,Ge=Oe?xe.slice(-Oe):null;return n.createElement(Yt,{eventKey:Tt,title:Le,disabled:Jn,internalPopupClose:Oe===0},Ge)},maxCount:en!=="horizontal"||z?p.INVALIDATE:p.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(Z){He(Z)},onKeyDown:ut},Ae));return n.createElement(zt.Provider,{value:rn},n.createElement(gn,{prefixCls:g,mode:en,openKeys:Cn,rtl:Pn,disabled:le,motion:wn?Te:null,defaultMotions:wn?Fe:null,activeKey:yt,onActive:bt,onInactive:$t,selectedKeys:rt,inlineIndent:Me,subMenuOpenDelay:ae,subMenuCloseDelay:oe,forceSubMenuRender:k,builtinPlacements:qe,triggerSubMenuAction:$e,getPopupContainer:Zn,itemIcon:Ve,expandIcon:ze,onItemClick:St,onOpenChange:ot},n.createElement(Je.Provider,{value:Wt},Pt),n.createElement(fe.Provider,{value:Bt},xe)))},zr=Ur,Gr=function(i){var c=i.className,b=i.title,O=i.eventKey,g=i.children,S=Object(Ee.a)(i,["className","title","eventKey","children"]),j=n.useContext(Ie),B=j.prefixCls,$="".concat(B,"-item-group");return n.createElement("li",Object(W.a)({},S,{onClick:function(x){return x.stopPropagation()},className:Ne()($,c)}),n.createElement("div",{className:"".concat($,"-title"),title:typeof b=="string"?b:void 0},b),n.createElement("ul",{className:"".concat($,"-list")},g))};function Jr(t){var i=t.children,c=Object(Ee.a)(t,["children"]),b=Ue(c.eventKey),O=Dt(i,b),g=_();return g?O:n.createElement(Gr,c,O)}function xr(t){var i=t.className,c=t.style,b=n.useContext(Ie),O=b.prefixCls,g=_();return g?null:n.createElement("li",{className:Ne()("".concat(O,"-item-divider"),i),style:c})}var it=zr;it.Item=Et,it.SubMenu=Yt,it.ItemGroup=Jr,it.Divider=xr;var Hr=it,Qr=e("eDIo");function Xr(t,i){var c=t.prefixCls,b=t.editable,O=t.locale,g=t.style;return!b||b.showAdd===!1?null:n.createElement("button",{ref:i,type:"button",className:"".concat(c,"-nav-add"),style:g,"aria-label":(O==null?void 0:O.addAriaLabel)||"Add tab",onClick:function(j){b.onEdit("add",{event:j})}},b.addIcon||"+")}var rr=n.forwardRef(Xr);function Yr(t,i){var c=t.prefixCls,b=t.id,O=t.tabs,g=t.locale,S=t.mobile,j=t.moreIcon,B=j===void 0?"More":j,$=t.moreTransitionName,V=t.style,x=t.className,J=t.editable,se=t.tabBarGutter,Q=t.rtl,X=t.onTabClick,le=Object(n.useState)(!1),z=Object(L.a)(le,2),q=z[0],ae=z[1],Y=Object(n.useState)(null),oe=Object(L.a)(Y,2),k=oe[0],be=oe[1],ee="".concat(b,"-more-popup"),de="".concat(c,"-dropdown"),me=k!==null?"".concat(ee,"-").concat(k):null,ie=g==null?void 0:g.dropdownAriaLabel,H=n.createElement(Hr,{onClick:function(Re){var Me=Re.key,Te=Re.domEvent;X(Me,Te),ae(!1)},id:ee,tabIndex:-1,role:"listbox","aria-activedescendant":me,selectedKeys:[k],"aria-label":ie!==void 0?ie:"expanded dropdown"},O.map(function(Ce){return n.createElement(Et,{key:Ce.key,id:"".concat(ee,"-").concat(Ce.key),role:"option","aria-controls":b&&"".concat(b,"-panel-").concat(Ce.key),disabled:Ce.disabled},Ce.tab)}));function ue(Ce){for(var Re=O.filter(function($e){return!$e.disabled}),Me=Re.findIndex(function($e){return $e.key===k})||0,Te=Re.length,Fe=0;Fe<Te;Fe+=1){Me=(Me+Ce+Te)%Te;var De=Re[Me];if(!De.disabled){be(De.key);return}}}function ge(Ce){var Re=Ce.which;if(!q){[Be.a.DOWN,Be.a.SPACE,Be.a.ENTER].includes(Re)&&(ae(!0),Ce.preventDefault());return}switch(Re){case Be.a.UP:ue(-1),Ce.preventDefault();break;case Be.a.DOWN:ue(1),Ce.preventDefault();break;case Be.a.ESC:ae(!1);break;case Be.a.SPACE:case Be.a.ENTER:k!==null&&X(k,Ce);break}}Object(n.useEffect)(function(){var Ce=document.getElementById(me);Ce&&Ce.scrollIntoView&&Ce.scrollIntoView(!1)},[k]),Object(n.useEffect)(function(){q||be(null)},[q]);var ve=Object(ce.a)({},Q?"marginLeft":"marginRight",se);O.length||(ve.visibility="hidden",ve.order=1);var Se=Ne()(Object(ce.a)({},"".concat(de,"-rtl"),Q)),We=S?null:n.createElement(Qr.default,{prefixCls:de,overlay:H,trigger:["hover"],visible:q,transitionName:$,onVisibleChange:ae,overlayClassName:Se,mouseEnterDelay:.1,mouseLeaveDelay:.1},n.createElement("button",{type:"button",className:"".concat(c,"-nav-more"),style:ve,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":ee,id:"".concat(b,"-more"),"aria-expanded":q,onKeyDown:ge},B));return n.createElement("div",{className:Ne()("".concat(c,"-nav-operations"),x),style:V,ref:i},We,n.createElement(rr,{prefixCls:c,locale:g,editable:J}))}var Zr=n.forwardRef(Yr),Kt=Object(n.createContext)(null),kr=.1,ar=.01,ht=20,ir=Math.pow(.995,ht);function qr(t,i){var c=Object(n.useState)(),b=Object(L.a)(c,2),O=b[0],g=b[1],S=Object(n.useState)(0),j=Object(L.a)(S,2),B=j[0],$=j[1],V=Object(n.useState)(0),x=Object(L.a)(V,2),J=x[0],se=x[1],Q=Object(n.useState)(),X=Object(L.a)(Q,2),le=X[0],z=X[1],q=Object(n.useRef)();function ae(de){var me=de.touches[0],ie=me.screenX,H=me.screenY;g({x:ie,y:H}),window.clearInterval(q.current)}function Y(de){if(!!O){de.preventDefault();var me=de.touches[0],ie=me.screenX,H=me.screenY;g({x:ie,y:H});var ue=ie-O.x,ge=H-O.y;i(ue,ge);var ve=Date.now();$(ve),se(ve-B),z({x:ue,y:ge})}}function oe(){if(!!O&&(g(null),z(null),le)){var de=le.x/J,me=le.y/J,ie=Math.abs(de),H=Math.abs(me);if(Math.max(ie,H)<kr)return;var ue=de,ge=me;q.current=window.setInterval(function(){if(Math.abs(ue)<ar&&Math.abs(ge)<ar){window.clearInterval(q.current);return}ue*=ir,ge*=ir,i(ue*ht,ge*ht)},ht)}}var k=Object(n.useRef)();function be(de){var me=de.deltaX,ie=de.deltaY,H=0,ue=Math.abs(me),ge=Math.abs(ie);ue===ge?H=k.current==="x"?me:ie:ue>ge?(H=me,k.current="x"):(H=ie,k.current="y"),i(-H,-H)&&de.preventDefault()}var ee=Object(n.useRef)(null);ee.current={onTouchStart:ae,onTouchMove:Y,onTouchEnd:oe,onWheel:be},n.useEffect(function(){function de(ue){ee.current.onTouchStart(ue)}function me(ue){ee.current.onTouchMove(ue)}function ie(ue){ee.current.onTouchEnd(ue)}function H(ue){ee.current.onWheel(ue)}return document.addEventListener("touchmove",me,{passive:!1}),document.addEventListener("touchend",ie,{passive:!1}),t.current.addEventListener("touchstart",de,{passive:!1}),t.current.addEventListener("wheel",H),function(){document.removeEventListener("touchmove",me),document.removeEventListener("touchend",ie)}},[])}function _r(){var t=Object(n.useRef)(new Map);function i(b){return t.current.has(b)||t.current.set(b,n.createRef()),t.current.get(b)}function c(b){t.current.delete(b)}return[i,c]}function sr(t,i){var c=n.useRef(t),b=n.useState({}),O=Object(L.a)(b,2),g=O[1];function S(j){var B=typeof j=="function"?j(c.current):j;B!==c.current&&i(B,c.current),c.current=B,g({})}return[c.current,S]}var or=function(i){var c=i.position,b=i.prefixCls,O=i.extra;if(!O)return null;var g,S=O;return c==="right"&&(g=S.right||!S.left&&S||null),c==="left"&&(g=S.left||null),g?n.createElement("div",{className:"".concat(b,"-extra-content")},g):null};function ea(t,i){var c,b=n.useContext(Kt),O=b.prefixCls,g=b.tabs,S=t.className,j=t.style,B=t.id,$=t.animated,V=t.activeKey,x=t.rtl,J=t.extra,se=t.editable,Q=t.locale,X=t.tabPosition,le=t.tabBarGutter,z=t.children,q=t.onTabClick,ae=t.onTabScroll,Y=Object(n.useRef)(),oe=Object(n.useRef)(),k=Object(n.useRef)(),be=Object(n.useRef)(),ee=_r(),de=Object(L.a)(ee,2),me=de[0],ie=de[1],H=X==="top"||X==="bottom",ue=sr(0,function(te,Z){H&&ae&&ae({direction:te>Z?"left":"right"})}),ge=Object(L.a)(ue,2),ve=ge[0],Se=ge[1],We=sr(0,function(te,Z){!H&&ae&&ae({direction:te>Z?"top":"bottom"})}),Ce=Object(L.a)(We,2),Re=Ce[0],Me=Ce[1],Te=Object(n.useState)(0),Fe=Object(L.a)(Te,2),De=Fe[0],$e=Fe[1],qe=Object(n.useState)(0),Ve=Object(L.a)(qe,2),ze=Ve[0],Qe=Ve[1],Le=Object(n.useState)(0),jn=Object(L.a)(Le,2),tn=jn[0],Ye=jn[1],ln=Object(n.useState)(0),yn=Object(L.a)(ln,2),bn=yn[0],Ae=yn[1],xe=Object(n.useState)(null),_e=Object(L.a)(xe,2),Ze=_e[0],wn=_e[1],Gn=Object(n.useState)(null),Bn=Object(L.a)(Gn,2),rn=Bn[0],Pn=Bn[1],un=Object(n.useState)(0),En=Object(L.a)(un,2),en=En[0],an=En[1],Dn=Object(n.useState)(0),cn=Object(L.a)(Dn,2),ke=cn[0],He=cn[1],Jn=Sn(new Map),xn=Object(L.a)(Jn,2),nt=xn[0],Cn=xn[1],vn=ct(g,nt,De),Hn="".concat(O,"-nav-operations-hidden"),On=0,mn=0;H?x?(On=0,mn=Math.max(0,De-Ze)):(On=Math.min(0,Ze-De),mn=0):(On=Math.min(0,rn-ze),mn=0);function Qn(te){return te<On?On:te>mn?mn:te}var In=Object(n.useRef)(),Xn=Object(n.useState)(),dn=Object(L.a)(Xn,2),Fn=dn[0],pe=dn[1];function je(){pe(Date.now())}function we(){window.clearTimeout(In.current)}qr(Y,function(te,Z){function Oe(Ge,sn){Ge(function(Un){var kn=Qn(Un+sn);return kn})}if(H){if(Ze>=De)return!1;Oe(Se,te)}else{if(rn>=ze)return!1;Oe(Me,Z)}return we(),je(),!0}),Object(n.useEffect)(function(){return we(),Fn&&(In.current=window.setTimeout(function(){pe(0)},100)),we},[Fn]);function nn(){var te=arguments.length>0&&arguments[0]!==void 0?arguments[0]:V,Z=vn.get(te)||{width:0,height:0,left:0,right:0,top:0};if(H){var Oe=ve;x?Z.right<ve?Oe=Z.right:Z.right+Z.width>ve+Ze&&(Oe=Z.right+Z.width-Ze):Z.left<-ve?Oe=-Z.left:Z.left+Z.width>-ve+Ze&&(Oe=-(Z.left+Z.width-Ze)),Me(0),Se(Qn(Oe))}else{var Ge=Re;Z.top<-Re?Ge=-Z.top:Z.top+Z.height>-Re+rn&&(Ge=-(Z.top+Z.height-rn)),Se(0),Me(Qn(Ge))}}var Yn=I(vn,{width:Ze,height:rn,left:ve,top:Re},{width:tn,height:bn},{width:en,height:ke},Object(he.a)(Object(he.a)({},t),{},{tabs:g})),gt=Object(L.a)(Yn,2),Bt=gt[0],Wt=gt[1],Lt=g.map(function(te){var Z=te.key;return n.createElement(Ln,{id:B,prefixCls:O,key:Z,rtl:x,tab:te,closable:te.closable,editable:se,active:Z===V,tabPosition:X,tabBarGutter:le,renderWrapper:z,removeAriaLabel:Q==null?void 0:Q.removeAriaLabel,ref:me(Z),onClick:function(Ge){q(Z,Ge)},onRemove:function(){ie(Z)},onFocus:function(){nn(Z),je(),x||(Y.current.scrollLeft=0),Y.current.scrollTop=0}})}),tt=Mn(function(){var te,Z,Oe,Ge,sn,Un,kn,Vt,Ut,la=((te=Y.current)===null||te===void 0?void 0:te.offsetWidth)||0,ua=((Z=Y.current)===null||Z===void 0?void 0:Z.offsetHeight)||0,mr=((Oe=be.current)===null||Oe===void 0?void 0:Oe.offsetWidth)||0,fr=((Ge=be.current)===null||Ge===void 0?void 0:Ge.offsetHeight)||0,da=((sn=k.current)===null||sn===void 0?void 0:sn.offsetWidth)||0,ca=((Un=k.current)===null||Un===void 0?void 0:Un.offsetHeight)||0;wn(la),Pn(ua),an(mr),He(fr);var pr=(((kn=oe.current)===null||kn===void 0?void 0:kn.offsetWidth)||0)-mr,vr=(((Vt=oe.current)===null||Vt===void 0?void 0:Vt.offsetHeight)||0)-fr;$e(pr),Qe(vr);var hr=(Ut=k.current)===null||Ut===void 0?void 0:Ut.className.includes(Hn);Ye(pr-(hr?0:da)),Ae(vr-(hr?0:ca)),Cn(function(){var gr=new Map;return g.forEach(function(ma){var yr=ma.key,dt=me(yr).current;dt&&gr.set(yr,{width:dt.offsetWidth,height:dt.offsetHeight,left:dt.offsetLeft,top:dt.offsetTop})}),gr})}),yt=g.slice(0,Bt),st=g.slice(Wt+1),bt=[].concat(Object(fn.a)(yt),Object(fn.a)(st)),$t=Object(n.useState)(),Ct=Object(L.a)($t,2),Ot=Ct[0],rt=Ct[1],Nn=vn.get(V),Rt=Object(n.useRef)();function St(){Xe.a.cancel(Rt.current)}Object(n.useEffect)(function(){var te={};return Nn&&(H?(x?te.right=Nn.right:te.left=Nn.left,te.width=Nn.width):(te.top=Nn.top,te.height=Nn.height)),St(),Rt.current=Object(Xe.a)(function(){rt(te)}),St},[Nn,H,x]),Object(n.useEffect)(function(){nn()},[V,Nn,vn,H]),Object(n.useEffect)(function(){tt()},[x,le,V,g.map(function(te){return te.key}).join("_")]);var ot=!!bt.length,Zn="".concat(O,"-nav-wrap"),lt,ut,jt,Pt;return H?x?(ut=ve>0,lt=ve+Ze<De):(lt=ve<0,ut=-ve+Ze<De):(jt=Re<0,Pt=-Re+rn<ze),n.createElement("div",{ref:i,role:"tablist",className:Ne()("".concat(O,"-nav"),S),style:j,onKeyDown:function(){je()}},n.createElement(or,{position:"left",extra:J,prefixCls:O}),n.createElement(Wn.default,{onResize:tt},n.createElement("div",{className:Ne()(Zn,(c={},Object(ce.a)(c,"".concat(Zn,"-ping-left"),lt),Object(ce.a)(c,"".concat(Zn,"-ping-right"),ut),Object(ce.a)(c,"".concat(Zn,"-ping-top"),jt),Object(ce.a)(c,"".concat(Zn,"-ping-bottom"),Pt),c)),ref:Y},n.createElement(Wn.default,{onResize:tt},n.createElement("div",{ref:oe,className:"".concat(O,"-nav-list"),style:{transform:"translate(".concat(ve,"px, ").concat(Re,"px)"),transition:Fn?"none":void 0}},Lt,n.createElement(rr,{ref:be,prefixCls:O,locale:Q,editable:se,style:{visibility:ot?"hidden":null}}),n.createElement("div",{className:Ne()("".concat(O,"-ink-bar"),Object(ce.a)({},"".concat(O,"-ink-bar-animated"),$.inkBar)),style:Ot}))))),n.createElement(Zr,Object(W.a)({},t,{ref:k,prefixCls:O,tabs:bt,className:!ot&&Hn})),n.createElement(or,{position:"right",extra:J,prefixCls:O}))}var lr=n.forwardRef(ea);function na(t){var i=t.id,c=t.activeKey,b=t.animated,O=t.tabPosition,g=t.rtl,S=t.destroyInactiveTabPane,j=n.useContext(Kt),B=j.prefixCls,$=j.tabs,V=b.tabPane,x=$.findIndex(function(J){return J.key===c});return n.createElement("div",{className:Ne()("".concat(B,"-content-holder"))},n.createElement("div",{className:Ne()("".concat(B,"-content"),"".concat(B,"-content-").concat(O),Object(ce.a)({},"".concat(B,"-content-animated"),V)),style:x&&V?Object(ce.a)({},g?"marginRight":"marginLeft","-".concat(x,"00%")):null},$.map(function(J){return n.cloneElement(J.node,{key:J.key,prefixCls:B,tabKey:J.key,id:i,animated:V,active:J.key===c,destroyInactiveTabPane:S})})))}function ur(t){var i=t.prefixCls,c=t.forceRender,b=t.className,O=t.style,g=t.id,S=t.active,j=t.animated,B=t.destroyInactiveTabPane,$=t.tabKey,V=t.children,x=n.useState(c),J=Object(L.a)(x,2),se=J[0],Q=J[1];n.useEffect(function(){S?Q(!0):B&&Q(!1)},[S,B]);var X={};return S||(j?(X.visibility="hidden",X.height=0,X.overflowY="hidden"):X.display="none"),n.createElement("div",{id:g&&"".concat(g,"-panel-").concat($),role:"tabpanel",tabIndex:S?0:-1,"aria-labelledby":g&&"".concat(g,"-tab-").concat($),"aria-hidden":!S,style:Object(he.a)(Object(he.a)({},X),O),className:Ne()("".concat(i,"-tabpane"),S&&"".concat(i,"-tabpane-active"),b)},(S||se||c)&&V)}var dr=0;function ta(t){return Object(Tn.a)(t).map(function(i){if(n.isValidElement(i)){var c=i.key!==void 0?String(i.key):void 0;return Object(he.a)(Object(he.a)({key:c},i.props),{},{node:i})}return null}).filter(function(i){return i})}function ra(t,i){var c,b=t.id,O=t.prefixCls,g=O===void 0?"rc-tabs":O,S=t.className,j=t.children,B=t.direction,$=t.activeKey,V=t.defaultActiveKey,x=t.editable,J=t.animated,se=J===void 0?{inkBar:!0,tabPane:!1}:J,Q=t.tabPosition,X=Q===void 0?"top":Q,le=t.tabBarGutter,z=t.tabBarStyle,q=t.tabBarExtraContent,ae=t.locale,Y=t.moreIcon,oe=t.moreTransitionName,k=t.destroyInactiveTabPane,be=t.renderTabBar,ee=t.onChange,de=t.onTabClick,me=t.onTabScroll,ie=Object(Ee.a)(t,["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"]),H=ta(j),ue=B==="rtl",ge;se===!1?ge={inkBar:!1,tabPane:!1}:se===!0?ge={inkBar:!0,tabPane:!0}:ge=Object(he.a)({inkBar:!0,tabPane:!1},Object(on.a)(se)==="object"?se:{});var ve=Object(n.useState)(!1),Se=Object(L.a)(ve,2),We=Se[0],Ce=Se[1];Object(n.useEffect)(function(){Ce(Object(Kn.a)())},[]);var Re=Object(Rn.a)(function(){var Ae;return(Ae=H[0])===null||Ae===void 0?void 0:Ae.key},{value:$,defaultValue:V}),Me=Object(L.a)(Re,2),Te=Me[0],Fe=Me[1],De=Object(n.useState)(function(){return H.findIndex(function(Ae){return Ae.key===Te})}),$e=Object(L.a)(De,2),qe=$e[0],Ve=$e[1];Object(n.useEffect)(function(){var Ae=H.findIndex(function(_e){return _e.key===Te});if(Ae===-1){var xe;Ae=Math.max(0,Math.min(qe,H.length-1)),Fe((xe=H[Ae])===null||xe===void 0?void 0:xe.key)}Ve(Ae)},[H.map(function(Ae){return Ae.key}).join("_"),Te,qe]);var ze=Object(Rn.a)(null,{value:b}),Qe=Object(L.a)(ze,2),Le=Qe[0],jn=Qe[1],tn=X;We&&!["left","right"].includes(X)&&(tn="top"),Object(n.useEffect)(function(){b||(jn("rc-tabs-".concat(dr)),dr+=1)},[]);function Ye(Ae,xe){de==null||de(Ae,xe),Fe(Ae),ee==null||ee(Ae)}var ln={id:Le,activeKey:Te,animated:ge,tabPosition:tn,rtl:ue,mobile:We},yn,bn=Object(he.a)(Object(he.a)({},ln),{},{editable:x,locale:ae,moreIcon:Y,moreTransitionName:oe,tabBarGutter:le,onTabClick:Ye,onTabScroll:me,extra:q,style:z,panes:j});return be?yn=be(bn,lr):yn=n.createElement(lr,bn),n.createElement(Kt.Provider,{value:{tabs:H,prefixCls:g}},n.createElement("div",Object(W.a)({ref:i,id:b,className:Ne()(g,"".concat(g,"-").concat(tn),(c={},Object(ce.a)(c,"".concat(g,"-mobile"),We),Object(ce.a)(c,"".concat(g,"-editable"),x),Object(ce.a)(c,"".concat(g,"-rtl"),ue),c),S)},ie),yn,n.createElement(na,Object(W.a)({destroyInactiveTabPane:k},ln,{animated:ge}))))}var cr=n.forwardRef(ra);cr.TabPane=ur;var aa=cr,ia=aa,Mt=e("MZF8"),pn=e("dEAq"),sa=e("ZpkN"),ba=e("TIsu");function wt(t,i){var c,b=(c=t.match(/\.(\w+)$/))===null||c===void 0?void 0:c[1];return b||(b=i.tsx?"tsx":"jsx"),b}var oa=t=>{var i,c,b,O=Object(n.useRef)(),g=Object(n.useContext)(pn.context),S=g.locale,j=Object(pn.useLocaleProps)(S,t),B=Object(pn.useDemoUrl)(j.identifier),$=j.demoUrl||B,V=(Mt.a===null||Mt.a===void 0?void 0:Mt.a.location.hash)==="#".concat(j.identifier),x=Object.keys(j.sources).length===1,J=Object(pn.useCodeSandbox)((i=j.hideActions)!==null&&i!==void 0&&i.includes("CSB")?null:j),se=Object(pn.useRiddle)((c=j.hideActions)!==null&&c!==void 0&&c.includes("RIDDLE")?null:j),Q=Object(pn.useMotions)(j.motions||[],O.current),X=Object(G.default)(Q,2),le=X[0],z=X[1],q=Object(pn.useCopy)(),ae=Object(G.default)(q,2),Y=ae[0],oe=ae[1],k=Object(n.useState)("_"),be=Object(G.default)(k,2),ee=be[0],de=be[1],me=Object(n.useState)(wt(ee,j.sources[ee])),ie=Object(G.default)(me,2),H=ie[0],ue=ie[1],ge=Object(n.useState)(Boolean(j.defaultShowCode)),ve=Object(G.default)(ge,2),Se=ve[0],We=ve[1],Ce=Object(n.useState)(Math.random()),Re=Object(G.default)(Ce,2),Me=Re[0],Te=Re[1],Fe=j.sources[ee][H]||j.sources[ee].content,De=Object(pn.useTSPlaygroundUrl)(S,Fe),$e=Object(n.useRef)(),qe=Object(pn.usePrefersColor)(),Ve=Object(G.default)(qe,1),ze=Ve[0];Object(n.useEffect)(()=>{Te(Math.random())},[ze]);function Qe(Le){de(Le),ue(wt(Le,j.sources[Le]))}return C.a.createElement("div",{style:j.style,className:[j.className,"__dumi-default-previewer",V?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:j.identifier,"data-debug":j.debug||void 0,"data-iframe":j.iframe||void 0},j.iframe&&C.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),C.a.createElement("div",{ref:O,className:"__dumi-default-previewer-demo",style:{transform:j.transform?"translate(0, 0)":void 0,padding:j.compact||j.iframe&&j.compact!==!1?"0":void 0,background:j.background}},j.iframe?C.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(j.iframe).replace(/(\d)$/,"$1px")},key:Me,src:$,ref:$e}):j.children),C.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":j.title},j.title&&C.a.createElement(pn.AnchorLink,{to:"#".concat(j.identifier)},j.title),j.description&&C.a.createElement("div",{dangerouslySetInnerHTML:{__html:j.description}})),C.a.createElement("div",{className:"__dumi-default-previewer-actions"},J&&C.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:J}),se&&C.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:se}),j.motions&&C.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:z,onClick:()=>le()}),j.iframe&&C.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:()=>Te(Math.random())}),!((b=j.hideActions)!==null&&b!==void 0&&b.includes("EXTERNAL"))&&C.a.createElement(pn.Link,{target:"_blank",to:$},C.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),C.a.createElement("span",null),C.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":oe,onClick:()=>Y(Fe)}),H==="tsx"&&Se&&C.a.createElement(pn.Link,{target:"_blank",to:De},C.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),C.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(Se?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:()=>We(!Se)})),Se&&C.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!x&&C.a.createElement(ia,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xB7\xB7\xB7",defaultActiveKey:ee,onChange:Qe},Object.keys(j.sources).map(Le=>C.a.createElement(ur,{tab:Le==="_"?"index.".concat(wt(Le,j.sources[Le])):Le,key:Le}))),C.a.createElement("div",{className:"__dumi-default-previewer-source"},C.a.createElement(sa.a,{code:Fe,lang:H,showCopy:!1}))))},Ca=hn.default=oa},"80pN":function(An,hn,e){"use strict";(function(G){/** @license React v16.14.0
* react-dom-test-utils.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var n=e("MgzW"),C=e("q1tI"),W=e("i8i4"),ce=e("QCnb");function L(m){for(var F="https://reactjs.org/docs/error-decoder.html?invariant="+m,M=1;M<arguments.length;M++)F+="&args[]="+encodeURIComponent(arguments[M]);return"Minified React error #"+m+"; visit "+F+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var on=C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;on.hasOwnProperty("ReactCurrentDispatcher")||(on.ReactCurrentDispatcher={current:null}),on.hasOwnProperty("ReactCurrentBatchConfig")||(on.ReactCurrentBatchConfig={suspense:null});function Ee(m){var F=m,M=m;if(m.alternate)for(;F.return;)F=F.return;else{m=F;do F=m,(F.effectTag&1026)!=0&&(M=F.return),m=F.return;while(m)}return F.tag===3?M:null}function he(m){if(Ee(m)!==m)throw Error(L(188))}function at(m){var F=m.alternate;if(!F){if(F=Ee(m),F===null)throw Error(L(188));return F!==m?null:m}for(var M=m,fe=F;;){var _=M.return;if(_===null)break;var Pe=_.alternate;if(Pe===null){if(fe=_.return,fe!==null){M=fe;continue}break}if(_.child===Pe.child){for(Pe=_.child;Pe;){if(Pe===M)return he(_),m;if(Pe===fe)return he(_),F;Pe=Pe.sibling}throw Error(L(188))}if(M.return!==fe.return)M=_,fe=Pe;else{for(var Ue=!1,Je=_.child;Je;){if(Je===M){Ue=!0,M=_,fe=Pe;break}if(Je===fe){Ue=!0,fe=_,M=Pe;break}Je=Je.sibling}if(!Ue){for(Je=Pe.child;Je;){if(Je===M){Ue=!0,M=Pe,fe=_;break}if(Je===fe){Ue=!0,fe=Pe,M=_;break}Je=Je.sibling}if(!Ue)throw Error(L(189))}}if(M.alternate!==fe)throw Error(L(190))}if(M.tag!==3)throw Error(L(188));return M.stateNode.current===M?m:F}function Ne(){return!0}function Tn(){return!1}function Kn(m,F,M,fe){this.dispatchConfig=m,this._targetInst=F,this.nativeEvent=M,m=this.constructor.Interface;for(var _ in m)m.hasOwnProperty(_)&&((F=m[_])?this[_]=F(M):_==="target"?this.target=fe:this[_]=M[_]);return this.isDefaultPrevented=(M.defaultPrevented!=null?M.defaultPrevented:M.returnValue===!1)?Ne:Tn,this.isPropagationStopped=Tn,this}n(Kn.prototype,{preventDefault:function(){this.defaultPrevented=!0;var m=this.nativeEvent;m&&(m.preventDefault?m.preventDefault():typeof m.returnValue!="unknown"&&(m.returnValue=!1),this.isDefaultPrevented=Ne)},stopPropagation:function(){var m=this.nativeEvent;m&&(m.stopPropagation?m.stopPropagation():typeof m.cancelBubble!="unknown"&&(m.cancelBubble=!0),this.isPropagationStopped=Ne)},persist:function(){this.isPersistent=Ne},isPersistent:Tn,destructor:function(){var m=this.constructor.Interface,F;for(F in m)this[F]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=Tn,this._dispatchInstances=this._dispatchListeners=null}}),Kn.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(m){return m.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null},Kn.extend=function(m){function F(){}function M(){return fe.apply(this,arguments)}var fe=this;F.prototype=fe.prototype;var _=new F;return n(_,M.prototype),M.prototype=_,M.prototype.constructor=M,M.Interface=n({},fe.Interface,m),M.extend=fe.extend,Xe(M),M},Xe(Kn);function Rn(m,F,M,fe){if(this.eventPool.length){var _=this.eventPool.pop();return this.call(_,m,F,M,fe),_}return new this(m,F,M,fe)}function fn(m){if(!(m instanceof this))throw Error(L(279));m.destructor(),10>this.eventPool.length&&this.eventPool.push(m)}function Xe(m){m.eventPool=[],m.getPooled=Rn,m.release=fn}var Wn=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined");function Mn(m,F){var M={};return M[m.toLowerCase()]=F.toLowerCase(),M["Webkit"+m]="webkit"+F,M["Moz"+m]="moz"+F,M}var Sn={animationend:Mn("Animation","AnimationEnd"),animationiteration:Mn("Animation","AnimationIteration"),animationstart:Mn("Animation","AnimationStart"),transitionend:Mn("Transition","TransitionEnd")},Be={},zn={};Wn&&(zn=document.createElement("div").style,"AnimationEvent"in window||(delete Sn.animationend.animation,delete Sn.animationiteration.animation,delete Sn.animationstart.animation),"TransitionEvent"in window||delete Sn.transitionend.transition);function Ln(m){if(Be[m])return Be[m];if(!Sn[m])return m;var F=Sn[m],M;for(M in F)if(F.hasOwnProperty(M)&&M in zn)return Be[m]=F[M];return m}var qn=Ln("animationend"),ct=Ln("animationiteration"),E=Ln("animationstart"),I=Ln("transitionend"),P=null;function d(m){if(P===null)try{var F=("require"+Math.random()).slice(0,7);P=(G&&G[F])("timers").setImmediate}catch(M){P=function(fe){var _=new MessageChannel;_.port1.onmessage=fe,_.port2.postMessage(void 0)}}return P(m)}var o=W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,v=o[11],y=o[12],R=W.unstable_batchedUpdates,r=on.IsSomeRendererActing,l=typeof ce.unstable_flushAllWithoutAsserting=="function",s=ce.unstable_flushAllWithoutAsserting||function(){for(var m=!1;v();)m=!0;return m};function T(m){try{s(),d(function(){s()?T(m):m()})}catch(F){m(F)}}var N=0,D=!1,u=W.findDOMNode,A=W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,f=A[0],a=A[4],h=A[5],p=A[6],K=A[7],w=A[8],U=A[9],ne=A[10];function re(){}function ye(m,F){if(!m)return[];if(m=at(m),!m)return[];for(var M=m,fe=[];;){if(M.tag===5||M.tag===6||M.tag===1||M.tag===0){var _=M.stateNode;F(_)&&fe.push(_)}if(M.child)M.child.return=M,M=M.child;else{if(M===m)return fe;for(;!M.sibling;){if(!M.return||M.return===m)return fe;M=M.return}M.sibling.return=M.return,M=M.sibling}}}function Ie(m,F){if(m&&!m._reactInternalFiber){var M=""+m;throw m=Array.isArray(m)?"an array":m&&m.nodeType===1&&m.tagName?"a DOM node":M==="[object Object]"?"object with keys {"+Object.keys(m).join(", ")+"}":M,Error(L(286,F,m))}}var Ke={renderIntoDocument:function(m){var F=document.createElement("div");return W.render(m,F)},isElement:function(m){return C.isValidElement(m)},isElementOfType:function(m,F){return C.isValidElement(m)&&m.type===F},isDOMComponent:function(m){return!(!m||m.nodeType!==1||!m.tagName)},isDOMComponentElement:function(m){return!!(m&&C.isValidElement(m)&&m.tagName)},isCompositeComponent:function(m){return Ke.isDOMComponent(m)?!1:m!=null&&typeof m.render=="function"&&typeof m.setState=="function"},isCompositeComponentWithType:function(m,F){return Ke.isCompositeComponent(m)?m._reactInternalFiber.type===F:!1},findAllInRenderedTree:function(m,F){return Ie(m,"findAllInRenderedTree"),m?ye(m._reactInternalFiber,F):[]},scryRenderedDOMComponentsWithClass:function(m,F){return Ie(m,"scryRenderedDOMComponentsWithClass"),Ke.findAllInRenderedTree(m,function(M){if(Ke.isDOMComponent(M)){var fe=M.className;typeof fe!="string"&&(fe=M.getAttribute("class")||"");var _=fe.split(/\s+/);if(!Array.isArray(F)){if(F===void 0)throw Error(L(11));F=F.split(/\s+/)}return F.every(function(Pe){return _.indexOf(Pe)!==-1})}return!1})},findRenderedDOMComponentWithClass:function(m,F){if(Ie(m,"findRenderedDOMComponentWithClass"),m=Ke.scryRenderedDOMComponentsWithClass(m,F),m.length!==1)throw Error("Did not find exactly one match (found: "+m.length+") for class:"+F);return m[0]},scryRenderedDOMComponentsWithTag:function(m,F){return Ie(m,"scryRenderedDOMComponentsWithTag"),Ke.findAllInRenderedTree(m,function(M){return Ke.isDOMComponent(M)&&M.tagName.toUpperCase()===F.toUpperCase()})},findRenderedDOMComponentWithTag:function(m,F){if(Ie(m,"findRenderedDOMComponentWithTag"),m=Ke.scryRenderedDOMComponentsWithTag(m,F),m.length!==1)throw Error("Did not find exactly one match (found: "+m.length+") for tag:"+F);return m[0]},scryRenderedComponentsWithType:function(m,F){return Ie(m,"scryRenderedComponentsWithType"),Ke.findAllInRenderedTree(m,function(M){return Ke.isCompositeComponentWithType(M,F)})},findRenderedComponentWithType:function(m,F){if(Ie(m,"findRenderedComponentWithType"),m=Ke.scryRenderedComponentsWithType(m,F),m.length!==1)throw Error("Did not find exactly one match (found: "+m.length+") for componentType:"+F);return m[0]},mockComponent:function(m,F){return F=F||m.mockTagName||"div",m.prototype.render.mockImplementation(function(){return C.createElement(F,null,this.props.children)}),this},nativeTouchData:function(m,F){return{touches:[{pageX:m,pageY:F}]}},Simulate:null,SimulateNative:{},act:function(m){function F(){N--,r.current=M,y.current=fe}D===!1&&(D=!0,console.error("act(...) is not supported in production builds of React, and might not behave as expected.")),N++;var M=r.current,fe=y.current;r.current=!0,y.current=!0;try{var _=R(m)}catch(Pe){throw F(),Pe}if(_!==null&&typeof _=="object"&&typeof _.then=="function")return{then:function(Pe,Ue){_.then(function(){1<N||l===!0&&M===!0?(F(),Pe()):T(function(Je){F(),Je?Ue(Je):Pe()})},function(Je){F(),Ue(Je)})}};try{N!==1||l!==!1&&M!==!1||s(),F()}catch(Pe){throw F(),Pe}return{then:function(Pe){Pe()}}}};function gn(m){return function(F,M){if(C.isValidElement(F))throw Error(L(228));if(Ke.isCompositeComponent(F))throw Error(L(229));var fe=a[m],_=new re;_.target=F,_.type=m.toLowerCase();var Pe=f(F),Ue=new Kn(fe,Pe,_,F);Ue.persist(),n(Ue,M),fe.phasedRegistrationNames?h(Ue):p(Ue),W.unstable_batchedUpdates(function(){K(F),ne(Ue)}),w()}}Ke.Simulate={};for(var $n in a)Ke.Simulate[$n]=gn($n);function _n(m,F){return function(M,fe){var _=new re(m);n(_,fe),Ke.isDOMComponent(M)?(M=u(M),_.target=M,U(F,1,document,_)):M.tagName&&(_.target=M,U(F,1,document,_))}}[["abort","abort"],[qn,"animationEnd"],[ct,"animationIteration"],[E,"animationStart"],["blur","blur"],["canplaythrough","canPlayThrough"],["canplay","canPlay"],["cancel","cancel"],["change","change"],["click","click"],["close","close"],["compositionend","compositionEnd"],["compositionstart","compositionStart"],["compositionupdate","compositionUpdate"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["dragstart","dragStart"],["drag","drag"],["drop","drop"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],["ended","ended"],["error","error"],["focus","focus"],["input","input"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["loadstart","loadStart"],["loadstart","loadStart"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["mousedown","mouseDown"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["playing","playing"],["progress","progress"],["ratechange","rateChange"],["scroll","scroll"],["seeked","seeked"],["seeking","seeking"],["selectionchange","selectionChange"],["stalled","stalled"],["suspend","suspend"],["textInput","textInput"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchmove","touchMove"],["touchstart","touchStart"],[I,"transitionEnd"],["volumechange","volumeChange"],["waiting","waiting"],["wheel","wheel"]].forEach(function(m){var F=m[1];Ke.SimulateNative[F]=_n(F,m[0])}),G.exports=Ke.default||Ke}).call(this,e("hOG+")(An))},JjdP:function(An,hn,e){"use strict";e.r(hn);var G=e("9og8"),n=e("WmNS"),C=e.n(n),W=e("LtsZ"),ce=`import React, { useRef } from 'react';
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

export default Demo;`,on=`export const delay = ms => new Promise(res => setTimeout(res, ms));

export const fakeApi = (url, data) => {
  console.group('request:', url);
  console.log('params:', data);
  console.groupEnd();
  return delay(500);
};`,Ee=`import React from 'react';
import FormRender, { useForm } from 'form-render';

const Demo = ({ schema }) => {
  const form = useForm();
  return (
    <div>
      <FormRender form={form} schema={schema} />
    </div>
  );
};

export default Demo;`,he=`export const basic = {
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
};`,at=`import React, { Component } from 'react';
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

export default Demo;`,Tn=`{
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
}`,Kn=`import { Select } from 'antd';
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

export { valueMap, keySuggestions }`,Xe=`.markdown p {
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

export default Demo;`,Mn=`import React, { useState, useRef } from 'react';
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

export default Demo;`,qn=`import React, { useState, useRef } from 'react';
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

export default Demo;`,ct=hn.default={"guide-card":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(22)]).then(e.bind(null,"oLxE"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:ce}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"card-render":{version:"0.1.2"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"0.x"}},identifier:"guide-card"}},"chart-render-demo":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R,r,l;return C.a.wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return r=function(D,u){if(!u&&D&&D.__esModule)return D;if(D===null||typeof D!="object"&&typeof D!="function")return{default:D};var A=R(u);if(A&&A.has(D))return A.get(D);var f={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var h in D)if(h!=="default"&&Object.prototype.hasOwnProperty.call(D,h)){var p=a?Object.getOwnPropertyDescriptor(D,h):null;p&&(p.get||p.set)?Object.defineProperty(f,h,p):f[h]=D[h]}return f.default=D,A&&A.set(D,f),f},R=function(D){if(typeof WeakMap!="function")return null;var u=new WeakMap,A=new WeakMap;return(R=function(a){return a?A:u})(D)},d=e("K+nK"),T.t0=d,T.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return T.t1=T.sent,o=(0,T.t0)(T.t1),T.t2=r,T.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return T.t3=T.sent,v=(0,T.t2)(T.t3),T.next=15,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 15:return y=T.sent,l=function(){var D=(0,v.useState)("Line"),u=(0,o.default)(D,2),A=u[0],f=u[1],a={Line:y.Line,Column:y.Column,PivotTable:y.PivotTable}[A];return v.default.createElement("div",null,v.default.createElement("div",{style:{marginBottom:10}},v.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return f("Line")}},"\u6298\u7EBF\u56FE"),v.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return f("Column")}},"\u67F1\u72B6\u56FE"),v.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return f("PivotTable")}},"\u4EA4\u53C9\u8868")),v.default.createElement(a,{meta:[{id:"date",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF",isDim:!1},{id:"uv",name:"\u8BBF\u5BA2\u6570",isDim:!1}],data:[{date:"20200101",pv:100,uv:50},{date:"20200102",pv:120,uv:60},{date:"20200103",pv:140,uv:70},{date:"20200104",pv:160,uv:80}]}))},T.abrupt("return",l);case 18:case"end":return T.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"chart-render-demo"}},"column-demo":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){var d,o,v,y;return C.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,o=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=r.sent,y=function(){return o.default.createElement(v.Column,{meta:[{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{pv:50,uv:20}]})},r.abrupt("return",y);case 11:case"end":return r.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[{ pv: 50, uv: 20 }]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo"}},"column-demo-1":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){var d,o,v,y;return C.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,o=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=r.sent,y=function(){return o.default.createElement(v.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},r.abrupt("return",y);case 11:case"end":return r.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-1"}},"column-demo-2":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){var d,o,v,y;return C.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,o=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=r.sent,y=function(){return o.default.createElement(v.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},r.abrupt("return",y);case 11:case"end":return r.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-2"}},"column-demo-3":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){var d,o,v,y;return C.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,o=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=r.sent,y=function(){return o.default.createElement(v.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},r.abrupt("return",y);case 11:case"end":return r.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-3"}},"column-demo-4":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){var d,o,v,y;return C.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,o=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=r.sent,y=function(){return o.default.createElement(v.Column,{inverted:!0,label:{position:"middle",layout:[{type:"interval-adjust-position"},{type:"interval-hide-overlap"},{type:"adjust-color"}]},meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},r.abrupt("return",y);case 11:case"end":return r.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-4"}},"line-demo":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){var d,o,v,y;return C.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,o=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=r.sent,y=function(){return o.default.createElement(v.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},r.abrupt("return",y);case 11:case"end":return r.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo"}},"line-demo-1":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){var d,o,v,y;return C.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,o=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=r.sent,y=function(){return o.default.createElement(v.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},r.abrupt("return",y);case 11:case"end":return r.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-1"}},"line-demo-2":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){var d,o,v,y;return C.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,o=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=r.sent,y=function(){return o.default.createElement(v.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"},{id:"pv",name:"\u8BBF\u95EE\u91CF"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20,pv:120},{ds:"2020-12-31",page:"\u9996\u9875",uv:120,pv:1120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21,pv:121},{ds:"2021-01-01",page:"\u9996\u9875",uv:121,pv:1121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15,pv:115},{ds:"2021-01-02",page:"\u9996\u9875",uv:115,pv:1115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40,pv:140},{ds:"2021-01-03",page:"\u9996\u9875",uv:140,pv:1140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31,pv:131},{ds:"2021-01-04",page:"\u9996\u9875",uv:131,pv:1131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32,pv:132},{ds:"2021-01-05",page:"\u9996\u9875",uv:132,pv:1132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30,pv:130},{ds:"2021-01-06",page:"\u9996\u9875",uv:130,pv:1130}]})},r.abrupt("return",y);case 11:case"end":return r.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-2"}},"line-demo-3":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){var d,o,v,y;return C.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,o=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=r.sent,y=function(){return o.default.createElement(v.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},r.abrupt("return",y);case 11:case"end":return r.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-3"}},"line-demo-4":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){var d,o,v,y;return C.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,o=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=r.sent,y=function(){return o.default.createElement(v.Line,{withArea:!0,isStack:!0,isPercent:!0,meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},r.abrupt("return",y);case 11:case"end":return r.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-4"}},"pivot-table-demo":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){var d,o,v,y;return C.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,o=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=r.sent,y=function(){return o.default.createElement(v.PivotTable,{style:{maxHeight:400,overflow:"auto"},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},r.abrupt("return",y);case 11:case"end":return r.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo"}},"pivot-table-demo-1":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){var d,o,v,y;return C.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,o=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=r.sent,y=function(){return o.default.createElement(v.PivotTable,{style:{maxHeight:400,overflow:"auto"},cellRender:function(T,N,D){return o.default.createElement("div",null,o.default.createElement("p",null,"\u53C2\u6570\u8868\uFF1A"),o.default.createElement("p",{style:{color:["red","orange","yellow","green","blue"][Object.keys(N).length]}},T),o.default.createElement("p",null,JSON.stringify(N)),o.default.createElement("p",null,JSON.stringify(D)))},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},r.abrupt("return",y);case 11:case"end":return r.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-1"}},"pivot-table-demo-2":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R,r,l;return C.a.wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return r=function(D,u){if(!u&&D&&D.__esModule)return D;if(D===null||typeof D!="object"&&typeof D!="function")return{default:D};var A=R(u);if(A&&A.has(D))return A.get(D);var f={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var h in D)if(h!=="default"&&Object.prototype.hasOwnProperty.call(D,h)){var p=a?Object.getOwnPropertyDescriptor(D,h):null;p&&(p.get||p.set)?Object.defineProperty(f,h,p):f[h]=D[h]}return f.default=D,A&&A.set(D,f),f},R=function(D){if(typeof WeakMap!="function")return null;var u=new WeakMap,A=new WeakMap;return(R=function(a){return a?A:u})(D)},d=e("K+nK"),T.t0=d,T.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return T.t1=T.sent,o=(0,T.t0)(T.t1),T.t2=r,T.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return T.t3=T.sent,v=(0,T.t2)(T.t3),T.next=15,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 15:return y=T.sent,l=function(){var D=(0,v.useState)(!1),u=(0,o.default)(D,2),A=u[0],f=u[1];return v.default.createElement(v.default.Fragment,null,v.default.createElement("label",null,"\u53EF\u5C55\u5F00/\u6536\u7F29\uFF1A",v.default.createElement("input",{type:"checkbox",value:A,onChange:function(){return f(!A)}})),v.default.createElement(y.PivotTable,{leftExpandable:A,showSubtotal:!1,meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]}))},T.abrupt("return",l);case 18:case"end":return T.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-2"}},"form-render-demo":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R,r,l,s,T,N,D,u,A,f;return C.a.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return D=function(K,w){if(!w&&K&&K.__esModule)return K;if(K===null||typeof K!="object"&&typeof K!="function")return{default:K};var U=N(w);if(U&&U.has(K))return U.get(K);var ne={},re=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ye in K)if(ye!=="default"&&Object.prototype.hasOwnProperty.call(K,ye)){var Ie=re?Object.getOwnPropertyDescriptor(K,ye):null;Ie&&(Ie.get||Ie.set)?Object.defineProperty(ne,ye,Ie):ne[ye]=K[ye]}return ne.default=K,U&&U.set(K,ne),ne},N=function(K){if(typeof WeakMap!="function")return null;var w=new WeakMap,U=new WeakMap;return(N=function(re){return re?U:w})(K)},d=e("K+nK"),h.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return h.t0=d,h.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return h.t1=h.sent,o=(0,h.t0)(h.t1),h.t2=d,h.next=13,e.e(70).then(e.bind(null,"fWQN"));case 13:return h.t3=h.sent,v=(0,h.t2)(h.t3),h.t4=d,h.next=18,e.e(71).then(e.bind(null,"mtLc"));case 18:return h.t5=h.sent,y=(0,h.t4)(h.t5),h.t6=d,h.next=23,e.e(64).then(e.bind(null,"yKVA"));case 23:return h.t7=h.sent,R=(0,h.t6)(h.t7),h.t8=d,h.next=28,e.e(62).then(e.bind(null,"879j"));case 28:return h.t9=h.sent,r=(0,h.t8)(h.t9),h.t10=d,h.next=33,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 33:return h.t11=h.sent,l=(0,h.t10)(h.t11),h.next=37,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 37:return s=h.sent,h.t12=D,h.next=41,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 41:return h.t13=h.sent,T=(0,h.t12)(h.t13),u={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},A=function(p){(0,R.default)(w,p);var K=(0,r.default)(w);function w(){return(0,v.default)(this,w),K.apply(this,arguments)}return(0,y.default)(w,[{key:"render",value:function(){var ne=this.props.form;return l.default.createElement("div",null,l.default.createElement(T.default,{form:ne,schema:u}),l.default.createElement(o.default,{type:"primary",onClick:ne.submit},"\u63D0\u4EA4"))}}]),w}(l.default.Component),f=(0,T.connectForm)(A),h.abrupt("return",f);case 47:case"end":return h.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default connectForm(Demo);`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo"}},"form-render-demo-1":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R,r,l,s,T,N;return C.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return l=function(f,a){if(!a&&f&&f.__esModule)return f;if(f===null||typeof f!="object"&&typeof f!="function")return{default:f};var h=r(a);if(h&&h.has(f))return h.get(f);var p={},K=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var w in f)if(w!=="default"&&Object.prototype.hasOwnProperty.call(f,w)){var U=K?Object.getOwnPropertyDescriptor(f,w):null;U&&(U.get||U.set)?Object.defineProperty(p,w,U):p[w]=f[w]}return p.default=f,h&&h.set(f,p),p},r=function(f){if(typeof WeakMap!="function")return null;var a=new WeakMap,h=new WeakMap;return(r=function(K){return K?h:a})(f)},d=e("K+nK"),u.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return u.t0=d,u.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return u.t1=u.sent,o=(0,u.t0)(u.t1),u.t2=d,u.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return u.t3=u.sent,v=(0,u.t2)(u.t3),u.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 17:return y=u.sent,u.t4=l,u.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 21:return u.t5=u.sent,R=(0,u.t4)(u.t5),s={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},T=function(){var f=(0,R.useForm)();return v.default.createElement("div",null,v.default.createElement(R.default,{form:f,schema:s}),v.default.createElement(o.default,{type:"primary",onClick:f.submit},"\u63D0\u4EA4"))},N=T,u.abrupt("return",N);case 27:case"end":return u.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo-1"}},"form-render-demo-2":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R,r,l,s,T,N;return C.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return l=function(f,a){if(!a&&f&&f.__esModule)return f;if(f===null||typeof f!="object"&&typeof f!="function")return{default:f};var h=r(a);if(h&&h.has(f))return h.get(f);var p={},K=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var w in f)if(w!=="default"&&Object.prototype.hasOwnProperty.call(f,w)){var U=K?Object.getOwnPropertyDescriptor(f,w):null;U&&(U.get||U.set)?Object.defineProperty(p,w,U):p[w]=f[w]}return p.default=f,h&&h.set(f,p),p},r=function(f){if(typeof WeakMap!="function")return null;var a=new WeakMap,h=new WeakMap;return(r=function(K){return K?h:a})(f)},d=e("K+nK"),u.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return u.t0=d,u.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return u.t1=u.sent,o=(0,u.t0)(u.t1),u.t2=d,u.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return u.t3=u.sent,v=(0,u.t2)(u.t3),u.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 17:return y=u.sent,u.t4=l,u.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 21:return u.t5=u.sent,R=(0,u.t4)(u.t5),s={displayType:"row",labelWidth:60,type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F",type:"range",format:"date"},siteUrl:{title:"\u7F51\u5740",type:"string",placeholder:"\u6B64\u5904\u5FC5\u586B",required:!0,props:{addonBefore:"https://",addonAfter:".com"}}}},T=function(){var f=(0,R.useForm)(),a=function(p,K){K.length>0?alert("errors:"+JSON.stringify(K)):alert("formData:"+JSON.stringify(p,null,2))};return v.default.createElement("div",null,v.default.createElement(R.default,{form:f,schema:s,onFinish:a}),v.default.createElement(o.default,{type:"primary",onClick:f.submit},"\u63D0\u4EA4"))},N=T,u.abrupt("return",N);case 27:case"end":return u.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-demo-2"}},"migrate-demo":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R,r,l,s;return C.a.wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return l=function(){var u=(0,v.useForm)(),A=function(a,h){h.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(h))):alert(JSON.stringify(a))};return o.default.createElement("div",null,o.default.createElement(v.default,{form:u,schema:r,onFinish:A}),o.default.createElement("button",{onClick:u.submit},"\u63D0\u4EA4"))},R=function(u,A){if(!A&&u&&u.__esModule)return u;if(u===null||typeof u!="object"&&typeof u!="function")return{default:u};var f=y(A);if(f&&f.has(u))return f.get(u);var a={},h=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var p in u)if(p!=="default"&&Object.prototype.hasOwnProperty.call(u,p)){var K=h?Object.getOwnPropertyDescriptor(u,p):null;K&&(K.get||K.set)?Object.defineProperty(a,p,K):a[p]=u[p]}return a.default=u,f&&f.set(u,a),a},y=function(u){if(typeof WeakMap!="function")return null;var A=new WeakMap,f=new WeakMap;return(y=function(h){return h?f:A})(u)},d=e("K+nK"),N.t0=d,N.next=7,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 7:return N.t1=N.sent,o=(0,N.t0)(N.t1),N.t2=R,N.next=12,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 12:return N.t3=N.sent,v=(0,N.t2)(N.t3),r={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}},s=l,N.abrupt("return",s);case 17:case"end":return N.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate-demo"}},"display-demo":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R;return C.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,v=(0,l.t2)(l.t3),y=function(T){return{type:"object",displayType:T,properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},objectName:{title:"\u5BF9\u8C61",bind:"obj",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},R=function(){return o.default.createElement("div",null,o.default.createElement("h2",null,"display: row"),o.default.createElement(v.default,{schema:y("row")}),o.default.createElement("h2",null,"display: column"),o.default.createElement(v.default,{schema:y("column")}))},l.abrupt("return",R);case 14:case"end":return l.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form labelWidth="200" schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-3"}},"display-demo-4":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R,r;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,v=(0,s.t2)(s.t3),y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},R=function(){return o.default.createElement(v.default,{schema:y})},r=R,s.abrupt("return",r);case 15:case"end":return s.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-4"}},"display-demo-5":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R,r;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,v=(0,s.t2)(s.t3),y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},R=function(){return o.default.createElement(v.default,{schema:y})},r=R,s.abrupt("return",r);case 15:case"end":return s.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-5"}},"display-demo-6":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R,r;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,v=(0,s.t2)(s.t3),y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},R=function(){return o.default.createElement(v.default,{schema:y})},r=R,s.abrupt("return",r);case 15:case"end":return s.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-6"}},"display-demo-7":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R,r;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,v=(0,s.t2)(s.t3),y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},R=function(){return o.default.createElement(v.default,{schema:y})},r=R,s.abrupt("return",r);case 15:case"end":return s.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-7"}},"form-methods-demo":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R,r,l,s,T,N,D,u,A;return C.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return D=function(p,K){if(!K&&p&&p.__esModule)return p;if(p===null||typeof p!="object"&&typeof p!="function")return{default:p};var w=N(K);if(w&&w.has(p))return w.get(p);var U={},ne=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var re in p)if(re!=="default"&&Object.prototype.hasOwnProperty.call(p,re)){var ye=ne?Object.getOwnPropertyDescriptor(p,re):null;ye&&(ye.get||ye.set)?Object.defineProperty(U,re,ye):U[re]=p[re]}return U.default=p,w&&w.set(p,U),U},N=function(p){if(typeof WeakMap!="function")return null;var K=new WeakMap,w=new WeakMap;return(N=function(ne){return ne?w:K})(p)},d=e("K+nK"),a.next=5,e.e(18).then(e.t.bind(null,"lfLe",7));case 5:return a.t0=d,a.next=8,e.e(19).then(e.t.bind(null,"Cp9S",7));case 8:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return a.t2=d,a.next=15,e.e(13).then(e.t.bind(null,"4IMT",7));case 15:return a.t3=a.sent,v=(0,a.t2)(a.t3),a.next=19,e.e(14).then(e.t.bind(null,"tL+A",7));case 19:return a.t4=d,a.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return a.t5=a.sent,y=(0,a.t4)(a.t5),a.t6=d,a.next=27,Promise.resolve().then(e.bind(null,"tJVT"));case 27:return a.t7=a.sent,R=(0,a.t6)(a.t7),a.t8=D,a.next=32,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 32:return a.t9=a.sent,r=(0,a.t8)(a.t9),a.next=36,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 36:return l=a.sent,a.t10=D,a.next=40,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 40:return a.t11=a.sent,s=(0,a.t10)(a.t11),a.next=44,e.e(15).then(e.bind(null,"OH0R"));case 44:return T=a.sent,u=function(){var p=(0,s.useForm)(),K=(0,r.useState)({}),w=(0,R.default)(K,2),U=w[0],ne=w[1],re=function(){(0,T.fakeApi)("xxx/getForm").then(function(Ke){p.setValues({input1:"hello world",select1:"c"})})};(0,r.useEffect)(function(){(0,T.delay)(1e3).then(function(Ie){ne({type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}})})},[]);var ye=function(Ke,gn){gn.length>0?y.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(gn.map(function($n){return $n.name}))):(0,T.fakeApi)("xxx/submit",Ke).then(function($n){return y.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})};return r.default.createElement("div",{style:{width:"400px"}},r.default.createElement(s.default,{form:p,schema:U,onFinish:ye}),r.default.createElement(o.default,null,r.default.createElement(v.default,{onClick:re},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),r.default.createElement(v.default,{type:"primary",onClick:p.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},A=u,a.abrupt("return",A);case 48:case"end":return a.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:on}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo"}},"form-methods-demo-1":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R,r,l,s,T,N,D,u,A;return C.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return N=function(p,K){if(!K&&p&&p.__esModule)return p;if(p===null||typeof p!="object"&&typeof p!="function")return{default:p};var w=T(K);if(w&&w.has(p))return w.get(p);var U={},ne=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var re in p)if(re!=="default"&&Object.prototype.hasOwnProperty.call(p,re)){var ye=ne?Object.getOwnPropertyDescriptor(p,re):null;ye&&(ye.get||ye.set)?Object.defineProperty(U,re,ye):U[re]=p[re]}return U.default=p,w&&w.set(p,U),U},T=function(p){if(typeof WeakMap!="function")return null;var K=new WeakMap,w=new WeakMap;return(T=function(ne){return ne?w:K})(p)},d=e("K+nK"),a.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return a.t0=d,a.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.t2=d,a.next=13,Promise.resolve().then(e.bind(null,"PpiC"));case 13:return a.t3=a.sent,v=(0,a.t2)(a.t3),a.next=17,e.e(14).then(e.t.bind(null,"tL+A",7));case 17:return a.t4=d,a.next=20,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 20:return a.t5=a.sent,y=(0,a.t4)(a.t5),a.t6=d,a.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return a.t7=a.sent,R=(0,a.t6)(a.t7),a.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 29:return r=a.sent,a.t8=N,a.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 33:return a.t9=a.sent,l=(0,a.t8)(a.t9),a.next=37,e.e(15).then(e.bind(null,"OH0R"));case 37:return s=a.sent,D={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},u=function(){var p=(0,l.useForm)(),K=function(ne,re){re.length>0?y.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(re.map(function(ye){return ye.name}))):(0,s.fakeApi)("xxx/submit",ne).then(function(ye){return y.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},w=function(ne){var re=ne.data,ye=ne.errors,Ie=ne.schema,Ke=(0,v.default)(ne,["data","errors","schema"]);return(0,s.fakeApi)("xxx/validation").then(function(gn){return{name:"select1",error:["\u5916\u90E8\u6821\u9A8C\u9519\u8BEF"]}})};return R.default.createElement("div",{style:{width:"400px"}},R.default.createElement(l.default,{form:p,schema:D,beforeFinish:w,onFinish:K}),R.default.createElement(o.default,{type:"primary",onClick:p.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},A=u,a.abrupt("return",A);case 42:case"end":return a.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:on}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-1"}},"form-methods-demo-2":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R,r,l,s,T,N,D,u,A;return C.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return N=function(p,K){if(!K&&p&&p.__esModule)return p;if(p===null||typeof p!="object"&&typeof p!="function")return{default:p};var w=T(K);if(w&&w.has(p))return w.get(p);var U={},ne=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var re in p)if(re!=="default"&&Object.prototype.hasOwnProperty.call(p,re)){var ye=ne?Object.getOwnPropertyDescriptor(p,re):null;ye&&(ye.get||ye.set)?Object.defineProperty(U,re,ye):U[re]=p[re]}return U.default=p,w&&w.set(p,U),U},T=function(p){if(typeof WeakMap!="function")return null;var K=new WeakMap,w=new WeakMap;return(T=function(ne){return ne?w:K})(p)},d=e("K+nK"),a.next=5,e.e(18).then(e.t.bind(null,"lfLe",7));case 5:return a.t0=d,a.next=8,e.e(19).then(e.t.bind(null,"Cp9S",7));case 8:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return a.t2=d,a.next=15,e.e(13).then(e.t.bind(null,"4IMT",7));case 15:return a.t3=a.sent,v=(0,a.t2)(a.t3),a.next=19,e.e(14).then(e.t.bind(null,"tL+A",7));case 19:return a.t4=d,a.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return a.t5=a.sent,y=(0,a.t4)(a.t5),a.t6=d,a.next=27,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 27:return a.t7=a.sent,R=(0,a.t6)(a.t7),a.next=31,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 31:return r=a.sent,a.t8=N,a.next=35,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 35:return a.t9=a.sent,l=(0,a.t8)(a.t9),a.next=39,e.e(15).then(e.bind(null,"OH0R"));case 39:return s=a.sent,D={type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F\u8303\u56F4",type:"range",format:"date"}}},u=function(){var p=(0,l.useForm)(),K=function(ne,re){re.length>0?y.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(re.map(function(ye){return ye.name}))):(0,s.fakeApi)("xxx/submit",ne).then(function(ye){return y.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},w=function(){(0,s.fakeApi)("xxx/getForm").then(function(ne){p.setValues({startDate:"2020-04-04",endDate:"2020-04-24"})})};return R.default.createElement("div",{style:{width:"400px"}},R.default.createElement(l.default,{form:p,schema:D,onFinish:K}),R.default.createElement(o.default,null,R.default.createElement(v.default,{onClick:w},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),R.default.createElement(v.default,{type:"primary",onClick:p.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},A=u,a.abrupt("return",A);case 44:case"end":return a.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:on}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-2"}},"form-methods-demo-3":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R,r,l,s,T,N,D,u;return C.a.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return T=function(h,p){if(!p&&h&&h.__esModule)return h;if(h===null||typeof h!="object"&&typeof h!="function")return{default:h};var K=s(p);if(K&&K.has(h))return K.get(h);var w={},U=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ne in h)if(ne!=="default"&&Object.prototype.hasOwnProperty.call(h,ne)){var re=U?Object.getOwnPropertyDescriptor(h,ne):null;re&&(re.get||re.set)?Object.defineProperty(w,ne,re):w[ne]=h[ne]}return w.default=h,K&&K.set(h,w),w},s=function(h){if(typeof WeakMap!="function")return null;var p=new WeakMap,K=new WeakMap;return(s=function(U){return U?K:p})(h)},d=e("K+nK"),f.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return f.t0=d,f.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return f.t1=f.sent,o=(0,f.t0)(f.t1),f.next=12,e.e(14).then(e.t.bind(null,"tL+A",7));case 12:return f.t2=d,f.next=15,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 15:return f.t3=f.sent,v=(0,f.t2)(f.t3),f.t4=T,f.next=20,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 20:return f.t5=f.sent,y=(0,f.t4)(f.t5),f.next=24,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 24:return R=f.sent,f.t6=T,f.next=28,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 28:return f.t7=f.sent,r=(0,f.t6)(f.t7),f.next=32,e.e(15).then(e.bind(null,"OH0R"));case 32:return l=f.sent,N={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select1:{title:"\u5355\u9009",type:"string",widget:"select"}}}}},D=function(){var h=(0,r.useForm)(),p=function(){h.setSchemaByPath("obj1.select1",{enum:["east","south","west","north"],enumNames:["\u4E1C","\u5357","\u897F","\u5317"]})},K=function(U,ne){ne.length>0?v.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(ne.map(function(re){return re.name}))):v.default.info(JSON.stringify(U))};return y.default.createElement("div",{style:{width:"400px"}},y.default.createElement(r.default,{form:h,schema:N,onMount:p,onFinish:K}),y.default.createElement(o.default,{type:"primary",onClick:h.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},u=D,f.abrupt("return",u);case 37:case"end":return f.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:on}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-3"}},"function-demo":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R,r,l,s;return C.a.wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return R=function(u,A){if(!A&&u&&u.__esModule)return u;if(u===null||typeof u!="object"&&typeof u!="function")return{default:u};var f=y(A);if(f&&f.has(u))return f.get(u);var a={},h=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var p in u)if(p!=="default"&&Object.prototype.hasOwnProperty.call(u,p)){var K=h?Object.getOwnPropertyDescriptor(u,p):null;K&&(K.get||K.set)?Object.defineProperty(a,p,K):a[p]=u[p]}return a.default=u,f&&f.set(u,a),a},y=function(u){if(typeof WeakMap!="function")return null;var A=new WeakMap,f=new WeakMap;return(y=function(h){return h?f:A})(u)},d=e("K+nK"),N.t0=d,N.next=6,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 6:return N.t1=N.sent,o=(0,N.t0)(N.t1),N.t2=R,N.next=11,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 11:return N.t3=N.sent,v=(0,N.t2)(N.t3),r={type:"object",properties:{select1:{title:"\u5355\u9009",description:"\u5C1D\u8BD5\u9009\u62E9\u201C\u663E\u793A\u8F93\u5165\u6846\u201D",type:"string",enum:["a","b"],enumNames:["\u9690\u85CF\u8F93\u5165\u6846","\u663E\u793A\u8F93\u5165\u6846"],disabled:"{{rootValue.input1.length > 5}}",default:"a"},input1:{title:"\u8F93\u5165\u6846",description:"\u5C1D\u8BD5\u8F93\u5165\u8D85\u8FC75\u4E2A\u5B57\u7B26",type:"string",hidden:'{{formData.select1 == "a"}}'}}},l=function(){var u=(0,v.useForm)();return o.default.createElement(v.default,{form:u,schema:r})},s=l,N.abrupt("return",s);case 17:case"end":return N.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <FR schema={expression} />;`},"demo/FR.jsx":{import:"../demo/FR",content:Ee},"json/schema.js":{import:"../json/schema",content:he}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo-1"}},"lifeCycle-demo":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R,r,l,s,T;return C.a.wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return R=function(A,f){if(!f&&A&&A.__esModule)return A;if(A===null||typeof A!="object"&&typeof A!="function")return{default:A};var a=y(f);if(a&&a.has(A))return a.get(A);var h={},p=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var K in A)if(K!=="default"&&Object.prototype.hasOwnProperty.call(A,K)){var w=p?Object.getOwnPropertyDescriptor(A,K):null;w&&(w.get||w.set)?Object.defineProperty(h,K,w):h[K]=A[K]}return h.default=A,a&&a.set(A,h),h},y=function(A){if(typeof WeakMap!="function")return null;var f=new WeakMap,a=new WeakMap;return(y=function(p){return p?a:f})(A)},D.t0=R,D.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return D.t1=D.sent,d=(0,D.t0)(D.t1),D.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 9:return o=D.sent,D.t2=R,D.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 13:return D.t3=D.sent,v=(0,D.t2)(D.t3),r=function(A){return new Promise(function(f){return setTimeout(f,A)})},l={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u4E0B\u62C9\u9009\u6846",description:"\u52A0\u8F7D\u4E2D...",type:"string",enum:[],widget:"select"}}},s=function(){var A=(0,v.useForm)(),f=function(){A.setValues({input1:"hello world"}),r(3e3).then(function(h){A.setSchemaByPath("select1",{description:"",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]})})};return d.default.createElement(v.default,{form:A,schema:l,onMount:f})},T=s,D.abrupt("return",T);case 20:case"end":return D.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"lifeCycle-demo"}},"listDisplay-demo":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R,r;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,v=(0,s.t2)(s.t3),y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},R=function(){return o.default.createElement(v.default,{schema:y})},r=R,s.abrupt("return",r);case 15:case"end":return s.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo"}},"listDisplay-demo-1":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R,r;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,v=(0,s.t2)(s.t3),y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},R=function(){return o.default.createElement(v.default,{schema:y})},r=R,s.abrupt("return",r);case 15:case"end":return s.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-1"}},"listDisplay-demo-2":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R,r;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,v=(0,s.t2)(s.t3),y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},R=function(){return o.default.createElement(v.default,{schema:y})},r=R,s.abrupt("return",r);case 15:case"end":return s.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-2"}},"listDisplay-demo-3":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R,r;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,v=(0,s.t2)(s.t3),y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},R=function(){return o.default.createElement(v.default,{schema:y})},r=R,s.abrupt("return",r);case 15:case"end":return s.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-3"}},"listDisplay-demo-4":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R,r;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,v=(0,s.t2)(s.t3),window.hello=function(T){var N=T.value;console.log(N)},y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list4",itemProps:{buttons:[{callback:"hello",text:"\u590D\u5236"}]},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},R=function(){return o.default.createElement(v.default,{schema:y})},r=R,s.abrupt("return",r);case 16:case"end":return s.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-4"}},"watch-demo":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R,r,l,s;return C.a.wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return R=function(u,A){if(!A&&u&&u.__esModule)return u;if(u===null||typeof u!="object"&&typeof u!="function")return{default:u};var f=y(A);if(f&&f.has(u))return f.get(u);var a={},h=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var p in u)if(p!=="default"&&Object.prototype.hasOwnProperty.call(u,p)){var K=h?Object.getOwnPropertyDescriptor(u,p):null;K&&(K.get||K.set)?Object.defineProperty(a,p,K):a[p]=u[p]}return a.default=u,f&&f.set(u,a),a},y=function(u){if(typeof WeakMap!="function")return null;var A=new WeakMap,f=new WeakMap;return(y=function(h){return h?f:A})(u)},N.t0=R,N.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return N.t1=N.sent,d=(0,N.t0)(N.t1),N.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 9:return o=N.sent,N.t2=R,N.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 13:return N.t3=N.sent,v=(0,N.t2)(N.t3),r={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"}}},l=function(){var u=(0,v.useForm)(),A={"#":function(a){console.log("\u8868\u5355\u7684\u65F6\u65F6\u6570\u636E\u4E3A\uFF1A",a)},input1:function(a){u.setValueByPath("input2",a)}};return d.default.createElement(v.default,{form:u,schema:r,watch:A})},s=l,N.abrupt("return",s);case 19:case"end":return N.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo"}},"watch-demo-1":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R,r,l,s,T,N;return C.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return l=function(f,a){if(!a&&f&&f.__esModule)return f;if(f===null||typeof f!="object"&&typeof f!="function")return{default:f};var h=r(a);if(h&&h.has(f))return h.get(f);var p={},K=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var w in f)if(w!=="default"&&Object.prototype.hasOwnProperty.call(f,w)){var U=K?Object.getOwnPropertyDescriptor(f,w):null;U&&(U.get||U.set)?Object.defineProperty(p,w,U):p[w]=f[w]}return p.default=f,h&&h.set(f,p),p},r=function(f){if(typeof WeakMap!="function")return null;var a=new WeakMap,h=new WeakMap;return(r=function(K){return K?h:a})(f)},d=e("K+nK"),u.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return u.t0=d,u.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return u.t1=u.sent,o=(0,u.t0)(u.t1),u.t2=l,u.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return u.t3=u.sent,v=(0,u.t2)(u.t3),u.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 17:return y=u.sent,u.t4=l,u.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 21:return u.t5=u.sent,R=(0,u.t4)(u.t5),s={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"radio"}}}}},T=function(){var f=(0,R.useForm)(),a=function(K,w){w.length>0?alert("errorFields:"+JSON.stringify(w)):alert("formData:"+JSON.stringify(K,null,2))},h={input1:function(K){K.length>2?f.setSchemaByPath("obj1.select",function(w){var U=w.enumNames;return{enumNames:U.map(function(ne){return ne+"a"})}}):f.setSchemaByPath("obj1.select",{enumNames:["\u65E9","\u4E2D","\u665A"]})}};return v.default.createElement("div",null,v.default.createElement(R.default,{form:f,schema:s,onFinish:a,watch:h}),v.default.createElement(o.default,{type:"",style:{marginRight:8},onClick:function(){return f.setSchemaByPath("input2",{title:"\u7F16\u8F91\u6846",format:"textarea"})}},"\u5C06 input \u6539\u4E3A textarea"),v.default.createElement(o.default,{type:"primary",onClick:f.submit},"\u63D0\u4EA4"))},N=T,u.abrupt("return",N);case 27:case"end":return u.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo-1"}},"widget-demo":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R,r,l,s,T,N,D,u,A;return C.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return T=function(p,K){if(!K&&p&&p.__esModule)return p;if(p===null||typeof p!="object"&&typeof p!="function")return{default:p};var w=s(K);if(w&&w.has(p))return w.get(p);var U={},ne=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var re in p)if(re!=="default"&&Object.prototype.hasOwnProperty.call(p,re)){var ye=ne?Object.getOwnPropertyDescriptor(p,re):null;ye&&(ye.get||ye.set)?Object.defineProperty(U,re,ye):U[re]=p[re]}return U.default=p,w&&w.set(p,U),U},s=function(p){if(typeof WeakMap!="function")return null;var K=new WeakMap,w=new WeakMap;return(s=function(ne){return ne?w:K})(p)},d=e("K+nK"),a.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return a.t0=d,a.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=12,Promise.all([e.e(3),e.e(63)]).then(e.t.bind(null,"cUip",7));case 12:return a.t2=d,a.next=15,Promise.all([e.e(0),e.e(13),e.e(61),e.e(69)]).then(e.t.bind(null,"iJl9",7));case 15:return a.t3=a.sent,v=(0,a.t2)(a.t3),a.t4=d,a.next=20,e.e(72).then(e.bind(null,"0Owb"));case 20:return a.t5=a.sent,y=(0,a.t4)(a.t5),a.t6=T,a.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return a.t7=a.sent,R=(0,a.t6)(a.t7),a.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 29:return r=a.sent,a.t8=T,a.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 33:return a.t9=a.sent,l=(0,a.t8)(a.t9),N={type:"object",properties:{string:{title:"\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6",type:"string",widget:"site"},select:{title:"\u5355\u9009",type:"number",enum:[1,2,3],enumNames:["\u9009\u98791","\u9009\u98792","\u9009\u98793"]}}},D=function(p){return console.log("widget props:",p),R.default.createElement(v.default,(0,y.default)({addonBefore:"http://",addonAfter:".com"},p))},u=function(){var p=(0,l.useForm)(),K=function(){};return R.default.createElement("div",null,R.default.createElement(l.default,{readOnly:!0,form:p,schema:N,widgets:{site:D},onFinish:function(U){return alert(JSON.stringify(U,null,2))}}),R.default.createElement(o.default,{type:"primary",onClick:p.submit},"\u63D0\u4EA4"))},A=u,a.abrupt("return",A);case 40:case"end":return a.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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

export default () => <FR schema={basic} />;`},"demo/FR.jsx":{import:"../demo/FR",content:Ee},"json/schema.js":{import:"../json/schema",content:he}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo"}},"schema-demo-1":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R;return C.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return l.t3=l.sent,v=(0,l.t2)(l.t3),l.next=13,e.e(17).then(e.bind(null,"8iYR"));case 13:return y=l.sent,R=function(){return o.default.createElement(v.default,{schema:y.titleTrick})},l.abrupt("return",R);case 16:case"end":return l.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { titleTrick } from '../json/schema';

export default () => <FR schema={titleTrick} />;`},"demo/FR.jsx":{import:"../demo/FR",content:Ee},"json/schema.js":{import:"../json/schema",content:he}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo-1"}},"docs-playground":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(22)]).then(e.bind(null,"BASV"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:at},"main.js":{import:"./main",content:Ne},"json/simplest.json":{import:"./json/simplest.json",content:Tn},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:Kn},"monaco/index.js":{import:"./monaco",content:Rn},"suggestionsMap.js":{import:"./suggestionsMap",content:fn},"index.css":{import:"./index.css",content:Xe}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:"^17.x"},"react-dom":{version:">=16.9.0"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.4.5-beta.0"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-monaco-editor":{version:"0.43.0"},"@types/react":{version:"^17.x"}},identifier:"docs-playground"}},"table-render-advanced":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(22)]).then(e.bind(null,"7ZP+"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{tsx:Wn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.0"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"1.x"}},transform:!0,defaultShowCode:!0,identifier:"table-render-advanced"}},"table-render-demo":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R,r,l,s,T;return C.a.wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return d=e("K+nK"),D.t0=d,D.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return D.t1=D.sent,o=(0,D.t0)(D.t1),D.next=8,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(59)]).then(e.bind(null,"P2DI"));case 8:for(v=D.sent,y=[],R=0;R<6;R++)y.push({id:R.toString(),title:"\u6807\u9898".concat(R+1),created_at:new Date().getTime()});return r={type:"object",properties:{string:{title:"\u6807\u9898",type:"string","ui:width":"30%"},created_at:{title:"\u521B\u5EFA\u65F6\u95F4",type:"string",format:"date","ui:width":"30%"}}},l=[{title:"\u6807\u9898",dataIndex:"title"},{title:"\u521B\u5EFA\u65F6\u95F4",key:"since",dataIndex:"created_at",valueType:"date"},{title:"\u64CD\u4F5C",render:function(A,f){return o.default.createElement("a",{onClick:function(){return alert(A.title)}},"\u7F16\u8F91")}}],s=function(){var A=function(){return{rows:y,total:y.length}};return o.default.createElement(v.TableProvider,null,o.default.createElement(v.Search,{schema:r,api:A}),o.default.createElement(v.Table,{headerTitle:"\u6700\u7B80\u8868\u683C",columns:l,rowKey:"id"}))},T=s,D.abrupt("return",T);case 16:case"end":return D.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Wrapper;`}},dependencies:{react:{version:">=16.8.0"},"table-render":{version:"1.1.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.x"}},transform:!0,defaultShowCode:!0,identifier:"table-render-demo"}},"generator-demo":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){var d,o,v,y,R,r;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(60)]).then(e.bind(null,"nYSz"));case 9:return s.t3=s.sent,v=(0,s.t2)(s.t3),y={type:"object",properties:{inputName:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string"}}},R=function(){return o.default.createElement("div",{style:{height:"80vh"}},o.default.createElement(v.default,{defaultValue:y}))},r=R,s.abrupt("return",r);case 15:case"end":return s.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"generator-demo"}},"generator-modal":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(22)]).then(e.bind(null,"PPgD"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:Mn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.4.0"},"react-dom":{version:">=16.9.0"}},identifier:"generator-modal"}},"generator-settings":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(22)]).then(e.bind(null,"M63W"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:Sn}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-settings"}},"generator-layout":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(22)]).then(e.bind(null,"SOdT"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:Be},"index.less":{import:"./index.less",content:zn}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-layout"}},"generator-transformer":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(22)]).then(e.bind(null,"jktF"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:Ln}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.4.0"},"react-dom":{version:">=16.9.0"}},identifier:"generator-transformer"}},"generator-playground":{component:Object(W.dynamic)({loader:function(){var E=Object(G.a)(C.a.mark(function P(){return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(22)]).then(e.bind(null,"TYW4"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},P)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:qn},"index.less":{import:"./index.less",content:zn}},dependencies:{react:{version:">=16.8.0"},umi:{version:"3.4.20"},"fr-generator":{version:"2.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-playground"}}}},MaUl:function(An,hn,e){"use strict";e.r(hn);var G=e("q1tI"),n=e.n(G),C=e("dEAq"),W=e.n(C),ce=e("0zqC"),L=e("JjdP"),on=n.a.memo(L.default["lifeCycle-demo"].component);hn.default=Ee=>(n.a.useEffect(()=>{Ee!=null&&Ee.location.hash&&C.AnchorLink.scrollToAnchor(decodeURIComponent(Ee.location.hash.slice(1)))},[]),n.a.createElement(n.a.Fragment,null,n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"markdown"},n.a.createElement("h1",{id:"\u751F\u547D\u5468\u671F-\u52A0\u8F7D---\u63D0\u4EA4"},n.a.createElement(C.AnchorLink,{to:"#\u751F\u547D\u5468\u671F-\u52A0\u8F7D---\u63D0\u4EA4","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u751F\u547D\u5468\u671F (\u52A0\u8F7D - \u63D0\u4EA4)"),n.a.createElement("p",null,"\u5BF9\u4E8E\u8868\u5355\u6700\u91CD\u8981\u7684\u4E24\u4E2A\u64CD\u4F5C\u65F6\u673A\u662F\u201C\u52A0\u8F7D\u201D\u548C\u201C\u63D0\u4EA4\u201D"),n.a.createElement("h2",{id:"onmount-\uFF08\u52A0\u8F7D\uFF09"},n.a.createElement(C.AnchorLink,{to:"#onmount-\uFF08\u52A0\u8F7D\uFF09","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"onMount \uFF08\u52A0\u8F7D\uFF09"),n.a.createElement("ol",null,n.a.createElement("li",null,"\u7531\u4E8E React \u7EC4\u4EF6\u7684 ",n.a.createElement("code",null,"componentDidMount"),"(\u6216\u8005 useEffect) \u5F88\u591A\u65F6\u5019\u5E76\u4E0D\u80FD\u51C6\u786E\u76D1\u542C\u5230\u201C\u8868\u5355\u52A0\u8F7D\u5B8C\u6210\u201D\u8FD9\u4E2A\u65F6\u95F4\u70B9\uFF0C\u6240\u4EE5 FormRender \u63D0\u4F9B\u4E86 props ",n.a.createElement("code",null,"onMount"),"\uFF0C\u5728\u8868\u5355\u9996\u6B21\u52A0\u8F7D\u65F6\u6267\u884C\u3002 \u8868\u5355\u9996\u6B21\u52A0\u8F7D\u7684\u5B9A\u4E49\u662F\uFF1A\u5F53\u975E\u7A7A\u7684 schema \u9996\u6B21\u4F20\u5165 FormRender \u5B8C\u6210\u8868\u5355\u6E32\u67D3\u4E4B\u540E\u3002\u5176\u4E2D undefined\u3001null\u3001","{","}"," \u90FD\u89C6\u4E3A\u201C\u7A7A\u201D\u7684 schema\u3002"),n.a.createElement("li",null,n.a.createElement("code",null,"onMount")," \u5E38\u7528\u4E8E\u52A0\u8F7D\u521D\u59CB\u6570\u636E\uFF0C\u6216\u662F\u6839\u636E\u670D\u52A1\u7AEF\u63A5\u53E3\u83B7\u53D6\u6570\u636E\u8FDB\u4E00\u6B65\u8865\u5145 schema\uFF08\u4F8B\u5982\u4E0B\u62C9\u9009\u6846\u7684\u9009\u9879\uFF09"),n.a.createElement("li",null,"\u5982\u679C schema \u6765\u81EA\u670D\u52A1\u7AEF\u63A5\u53E3\uFF0C\u6CE8\u610F\u4E0D\u8981\u4F7F\u7528",n.a.createElement("code",null,"onMount"),"\u6765\u52A0\u8F7D schema\uFF0C\u800C\u4F7F\u7528",n.a.createElement("code",null,"componentDidMount"),"\uFF0C\u56E0\u4E3A",n.a.createElement("code",null,"onMount"),"\u7684\u89E6\u53D1\u673A\u5236\u662F\u5224\u65AD\u975E\u7A7A schema \u5DF2\u7ECF\u4F20\u5165 FormRender"))),n.a.createElement(ce.default,L.default["lifeCycle-demo"].previewerProps,n.a.createElement(on,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h2",{id:"beforefinish--onfinish-\uFF08\u63D0\u4EA4\uFF09"},n.a.createElement(C.AnchorLink,{to:"#beforefinish--onfinish-\uFF08\u63D0\u4EA4\uFF09","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"beforeFinish / onFinish \uFF08\u63D0\u4EA4\uFF09"),n.a.createElement("p",null,"\u8868\u5355\u63D0\u4EA4\u7684\u6D41\u7A0B\uFF1A"),n.a.createElement("ol",null,n.a.createElement("li",null,"\u7528\u6237\u8C03\u7528 ",n.a.createElement("code",null,"form.submit")," \u63D0\u4EA4\u5F00\u59CB"),n.a.createElement("li",null,"\u672C\u5730\u6821\u9A8C\u5F00\u59CB\uFF0C\u5982\u679C\u672A\u901A\u8FC7\uFF0C\u5C55\u793A\u6821\u9A8C\u9519\u8BEF"),n.a.createElement("li",null,"\u672C\u5730\u6821\u9A8C\u7ED3\u675F\uFF0C",n.a.createElement("code",null,"beforeFinish")," \u5F00\u59CB\u6267\u884C\uFF0C\u4E00\u822C\u7528\u4E8E\u56DE\u586B\u8FDC\u7AEF\u6821\u9A8C\uFF0C\u5982\u679C\u672A\u901A\u8FC7\u5C55\u793A\u6821\u9A8C\u9519\u8BEF"),n.a.createElement("li",null,"\u6821\u9A8C\u7ED3\u675F\uFF0C",n.a.createElement("code",null,"onFinish")," \u5F00\u59CB\u6267\u884C\uFF0C\u8868\u5355\u6570\u636E\u548C\u6821\u9A8C\u4FE1\u606F\u4EE5\u5165\u53C2\u5F62\u5F0F\u56DE\u4F20\u7ED9\u7528\u6237")),n.a.createElement("p",null,"beforeFinish \u548C onFinish \u7684\u4F7F\u7528\u8BE6\u89C1 ",n.a.createElement(C.Link,{to:"/form-render/advanced/form-methods"},"\u8868\u5355\u65B9\u6CD5"))))))},TIsu:function(An,hn,e){},Zs1V:function(An){An.exports=JSON.parse("{}")},p8sG:function(An,hn,e){"use strict";An.exports=e("80pN")}}]);
