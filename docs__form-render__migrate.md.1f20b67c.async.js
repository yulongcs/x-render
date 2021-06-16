(window.webpackJsonp=window.webpackJsonp||[]).push([[44,12],{"0zqC":function(Tn,gn,e){"use strict";e.r(gn);var J=e("tJVT"),n=e("q1tI"),b=e.n(n),W=e("wx14"),ce=e("rePB"),V=e("ODXe"),Be=e("U8pU"),Ae=e("Ff2n"),ve=e("VTBJ"),fn=e("TSYQ"),Ie=e.n(fn),Mn=e("Zm9Q"),Kn=e("5Z9U"),Fn=e("6cGi"),pn=e("KQm4"),Qe=e("wgJM"),$n=e("t23M");function wn(a){var s=Object(n.useRef)(),m=Object(n.useRef)(!1);function C(){for(var E=arguments.length,y=new Array(E),S=0;S<E;S++)y[S]=arguments[S];m.current||(Qe.a.cancel(s.current),s.current=Object(Qe.a)(function(){a.apply(void 0,y)}))}return Object(n.useEffect)(function(){return function(){m.current=!0,Qe.a.cancel(s.current)}},[]),C}function Dn(a){var s=Object(n.useRef)([]),m=Object(n.useState)({}),C=Object(V.a)(m,2),E=C[1],y=Object(n.useRef)(typeof a=="function"?a():a),S=wn(function(){var w=y.current;s.current.forEach(function(x){w=x(w)}),s.current=[],y.current=w,E({})});function F(w){s.current.push(w),S()}return[y.current,F]}var we=e("4IlW");function qn(a,s){var m,C=a.prefixCls,E=a.id,y=a.active,S=a.rtl,F=a.tab,w=F.key,x=F.tab,$=F.disabled,G=F.closeIcon,z=a.tabBarGutter,ue=a.tabPosition,X=a.closable,k=a.renderWrapper,le=a.removeAriaLabel,U=a.editable,ne=a.onClick,se=a.onRemove,q=a.onFocus,oe="".concat(C,"-tab");n.useEffect(function(){return se},[]);var ee={};ue==="top"||ue==="bottom"?ee[S?"marginLeft":"marginRight"]=z:ee.marginBottom=z;var be=U&&X!==!1&&!$;function ae(ie){$||ne(ie)}function me(ie){ie.preventDefault(),ie.stopPropagation(),U.onEdit("remove",{key:w,event:ie})}var fe=n.createElement("div",{key:w,ref:s,className:Ie()(oe,(m={},Object(ce.a)(m,"".concat(oe,"-with-remove"),be),Object(ce.a)(m,"".concat(oe,"-active"),y),Object(ce.a)(m,"".concat(oe,"-disabled"),$),m)),style:ee,onClick:ae},n.createElement("div",{role:"tab","aria-selected":y,id:E&&"".concat(E,"-tab-").concat(w),className:"".concat(oe,"-btn"),"aria-controls":E&&"".concat(E,"-panel-").concat(w),"aria-disabled":$,tabIndex:$?null:0,onClick:function(Y){Y.stopPropagation(),ae(Y)},onKeyDown:function(Y){[we.a.SPACE,we.a.ENTER].includes(Y.which)&&(Y.preventDefault(),ae(Y))},onFocus:q},x),be&&n.createElement("button",{type:"button","aria-label":le||"remove",tabIndex:0,className:"".concat(oe,"-remove"),onClick:function(Y){Y.stopPropagation(),me(Y)}},G||U.removeIcon||"\xD7"));return k&&(fe=k(fe)),fe}var Wn=n.forwardRef(qn),_n={width:0,height:0,left:0,top:0};function rt(a,s,m){return Object(n.useMemo)(function(){for(var C,E=new Map,y=s.get((C=a[0])===null||C===void 0?void 0:C.key)||_n,S=y.left+y.width,F=0;F<a.length;F+=1){var w=a[F].key,x=s.get(w);if(!x){var $;x=s.get(($=a[F-1])===null||$===void 0?void 0:$.key)||_n}var G=E.get(w)||Object(ve.a)({},x);G.right=S-G.left-G.width,E.set(w,G)}return E},[a.map(function(C){return C.key}).join("_"),s,m])}var st={width:0,height:0,left:0,top:0,right:0};function P(a,s,m,C,E){var y=E.tabs,S=E.tabPosition,F=E.rtl,w,x,$;["top","bottom"].includes(S)?(w="width",x=F?"right":"left",$=Math.abs(s.left)):(w="height",x="top",$=-s.top);var G=s[w],z=m[w],ue=C[w],X=G;return z+ue>G&&(X=G-ue),Object(n.useMemo)(function(){if(!y.length)return[0,0];for(var k=y.length,le=k,U=0;U<k;U+=1){var ne=a.get(y[U].key)||st;if(ne[x]+ne[w]>$+X){le=U-1;break}}for(var se=0,q=k-1;q>=0;q-=1){var oe=a.get(y[q].key)||st;if(oe[x]<$){se=q+1;break}}return[se,le]},[a,$,X,S,y.map(function(k){return k.key}).join("_"),F])}var D=e("Gytx"),R=e.n(D),d=e("Kwbf");function u(a,s){var m=a.prefixCls,C=a.invalidate,E=a.item,y=a.renderItem,S=a.responsive,F=a.registerSize,w=a.itemKey,x=a.className,$=a.style,G=a.children,z=a.display,ue=a.order,X=a.component,k=X===void 0?"div":X,le=Object(Ae.a)(a,["prefixCls","invalidate","item","renderItem","responsive","registerSize","itemKey","className","style","children","display","order","component"]),U=S&&!z;function ne(be){F(w,be)}n.useEffect(function(){return function(){ne(null)}},[]);var se=y&&E!==void 0?y(E):G,q;C||(q={opacity:U?0:1,height:U?0:void 0,overflowY:U?"hidden":void 0,order:S?ue:void 0,pointerEvents:U?"none":void 0});var oe={};U&&(oe["aria-hidden"]=!0);var ee=n.createElement(k,Object(W.a)({className:Ie()(!C&&m,x),style:Object(ve.a)(Object(ve.a)({},q),$)},oe,le,{ref:s}),se);return S&&(ee=n.createElement($n.default,{onResize:function(ae){var me=ae.offsetWidth;ne(me)}},ee)),ee}var h=n.forwardRef(u);h.displayName="Item";var g=h;function O(){var a=Object(n.useState)({}),s=Object(V.a)(a,2),m=s[1],C=Object(n.useRef)([]),E=Object(n.useRef)(!1),y=0,S=0;Object(n.useEffect)(function(){return function(){E.current=!0}},[]);function F(w){var x=y;y+=1,C.current.length<x+1&&(C.current[x]=w);var $=C.current[x];function G(z){C.current[x]=typeof z=="function"?z(C.current[x]):z,Qe.a.cancel(S),S=Object(Qe.a)(function(){E.current||m({})})}return[$,G]}return F}var r=function(s,m){var C=n.useContext(A);if(!C){var E=s.component,y=E===void 0?"div":E,S=Object(Ae.a)(s,["component"]);return n.createElement(y,Object(W.a)({},S,{ref:m}))}var F=C.className,w=Object(Ae.a)(C,["className"]),x=s.className,$=Object(Ae.a)(s,["className"]);return n.createElement(A.Provider,{value:null},n.createElement(g,Object(W.a)({ref:m,className:Ie()(F,x)},w,$)))},o=n.forwardRef(r);o.displayName="RawItem";var i=o,A=n.createContext(null),T="responsive",j="invalidate";function l(a){return"+ ".concat(a.length," ...")}function K(a,s){var m=a.prefixCls,C=m===void 0?"rc-overflow":m,E=a.data,y=E===void 0?[]:E,S=a.renderItem,F=a.renderRawItem,w=a.itemKey,x=a.itemWidth,$=x===void 0?10:x,G=a.ssr,z=a.style,ue=a.className,X=a.maxCount,k=a.renderRest,le=a.renderRawRest,U=a.suffix,ne=a.component,se=ne===void 0?"div":ne,q=a.itemComponent,oe=a.onVisibleChange,ee=Object(Ae.a)(a,["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"]),be=O(),ae=G==="full",me=be(null),fe=Object(V.a)(me,2),ie=fe[0],Y=fe[1],de=ie||0,ye=be(new Map),ge=Object(V.a)(ye,2),Se=ge[0],We=ge[1],Ce=be(0),Oe=Object(V.a)(Ce,2),Me=Oe[0],Te=Oe[1],Pe=be(0),je=Object(V.a)(Pe,2),xe=je[0],qe=je[1],$e=be(0),Ue=Object(V.a)($e,2),He=Ue[0],Le=Ue[1],Rn=Object(n.useState)(null),tn=Object(V.a)(Rn,2),Xe=tn[0],un=tn[1],Cn=Object(n.useState)(null),En=Object(V.a)(Cn,2),Ne=En[0],Ge=En[1],_e=n.useMemo(function(){return Ne===null&&ae?Number.MAX_SAFE_INTEGER:Ne||0},[Ne,ie]),Ze=Object(n.useState)(!1),Ln=Object(V.a)(Ze,2),Jn=Ln[0],xn=Ln[1],an="".concat(C,"-item"),jn=Math.max(Me,xe),on=y.length&&X===T,Pn=X===j,en=on||typeof X=="number"&&y.length>X,rn=Object(n.useMemo)(function(){var he=y;return on?ie===null&&ae?he=y:he=y.slice(0,Math.min(y.length,de/$)):typeof X=="number"&&(he=y.slice(0,X)),he},[y,$,ie,X,on]),An=Object(n.useMemo)(function(){return on?y.slice(_e+1):y.slice(rn.length)},[y,rn,on,_e]),cn=Object(n.useCallback)(function(he,De){var Ke;return typeof w=="function"?w(he):(Ke=w&&(he==null?void 0:he[w]))!==null&&Ke!==void 0?Ke:De},[w]),ke=Object(n.useCallback)(S||function(he){return he},[S]);function Ye(he,De){Ge(he),De||(xn(he<y.length-1),oe==null||oe(he))}function zn(he,De){Y(De.clientWidth)}function Gn(he,De){We(function(Ke){var nn=new Map(Ke);return De===null?nn.delete(he):nn.set(he,De),nn})}function nt(he,De){qe(De),Te(xe)}function On(he,De){Le(De)}function vn(he){return Se.get(cn(rn[he],he))}n.useLayoutEffect(function(){if(de&&jn&&rn){var he=He,De=rn.length,Ke=De-1;if(!De){Ye(0),un(null);return}for(var nn=0;nn<De;nn+=1){var Xn=vn(nn);if(Xn===void 0){Ye(nn-1,!0);break}if(he+=Xn,nn===Ke-1&&he+vn(Ke)<=de){Ye(Ke),un(null);break}else if(he+jn>de){Ye(nn-1),un(he-Xn-He+xe);break}else if(nn===Ke){Ye(Ke),un(he-He);break}}U&&vn(0)+He>de&&un(null)}},[de,Se,xe,He,cn,rn]);var Yn=Jn&&!!An.length,Sn={};Xe!==null&&on&&(Sn={position:"absolute",left:Xe,top:0});var mn={prefixCls:an,responsive:on,component:q,invalidate:Pn},Hn=F?function(he,De){var Ke=cn(he,De);return n.createElement(A.Provider,{key:Ke,value:Object(ve.a)(Object(ve.a)({},mn),{},{order:De,item:he,itemKey:Ke,registerSize:Gn,display:De<=_e})},F(he,De))}:function(he,De){var Ke=cn(he,De);return n.createElement(g,Object(W.a)({},mn,{order:De,key:Ke,item:he,renderItem:ke,itemKey:Ke,registerSize:Gn,display:De<=_e}))},In,Qn={order:Yn?_e:Number.MAX_SAFE_INTEGER,className:"".concat(an,"-rest"),registerSize:nt,display:Yn};if(le)le&&(In=n.createElement(A.Provider,{value:Object(ve.a)(Object(ve.a)({},mn),Qn)},le(An)));else{var ln=k||l;In=n.createElement(g,Object(W.a)({},mn,Qn),typeof ln=="function"?ln(An):ln)}var Nn=n.createElement(se,Object(W.a)({className:Ie()(!Pn&&C,ue),style:z,ref:s},ee),rn.map(Hn),en?In:null,U&&n.createElement(g,Object(W.a)({},mn,{order:_e,className:"".concat(an,"-suffix"),registerSize:On,display:!0,style:Sn}),U));return on&&(Nn=n.createElement($n.default,{onResize:zn},Nn)),Nn}var f=n.forwardRef(K);f.displayName="Overflow",f.Item=i,f.RESPONSIVE=T,f.INVALIDATE=j;var t=f,v=t,c=e("1OyB"),I=e("vuIU"),B=e("Ji7U"),L=e("LK+K"),Z=e("bT9E"),Q=e("YrtM"),H=n.createContext(null);function Fe(a,s){var m=Object(ve.a)({},a);return Object.keys(s).forEach(function(C){var E=s[C];E!==void 0&&(m[C]=E)}),m}function dn(a){var s=a.children,m=a.locked,C=Object(Ae.a)(a,["children","locked"]),E=n.useContext(H),y=Object(Q.a)(function(){return Fe(E,C)},[E,C],function(S,F){return!m&&(S[0]!==F[0]||!R()(S[1],F[1]))});return n.createElement(H.Provider,{value:y},s)}function yn(a,s,m,C){var E=n.useContext(H),y=E.activeKey,S=E.onActive,F=E.onInactive,w={active:y===a};return s||(w.onMouseEnter=function(x){m==null||m({key:a,domEvent:x}),S(a)},w.onMouseLeave=function(x){C==null||C({key:a,domEvent:x}),F(a)}),w}function bn(a){var s=a.item,m=Object(Ae.a)(a,["item"]);return Object.defineProperty(m,"item",{get:function(){return Object(d.a)(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),s}}),m}function p(a){var s=a.icon,m=a.props,C=a.children,E;return typeof s=="function"?E=n.createElement(s,Object(ve.a)({},m)):E=s,E||C||null}function N(a){var s=n.useContext(H),m=s.mode,C=s.rtl,E=s.inlineIndent;if(m!=="inline")return null;var y=a;return C?{paddingRight:y*E}:{paddingLeft:y*E}}var M=[],pe=n.createContext(null);function te(){return n.useContext(pe)}var Re=n.createContext(M);function Ve(a){var s=n.useContext(Re);return n.useMemo(function(){return a!==void 0?[].concat(Object(pn.a)(s),[a]):s},[s,a])}var ze=n.createContext(null),Ut=n.createContext(null);function Jt(a,s){return a===void 0?null:"".concat(a,"-").concat(s)}function zt(a){var s=n.useContext(Ut);return Jt(s,a)}var ba=function(a){Object(B.a)(m,a);var s=Object(L.a)(m);function m(){return Object(c.a)(this,m),s.apply(this,arguments)}return Object(I.a)(m,[{key:"render",value:function(){var E=this.props,y=E.title,S=E.attribute,F=E.elementRef,w=Object(Ae.a)(E,["title","attribute","elementRef"]),x=Object(Z.a)(w,["eventKey"]);return Object(d.a)(!S,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),n.createElement(v.Item,Object(W.a)({},S,{title:typeof y=="string"?y:void 0},x,{ref:F}))}}]),m}(n.Component),Ca=function(s){var m,C=s.style,E=s.className,y=s.eventKey,S=s.disabled,F=s.itemIcon,w=s.children,x=s.role,$=s.onMouseEnter,G=s.onMouseLeave,z=s.onClick,ue=s.onKeyDown,X=s.onFocus,k=Object(Ae.a)(s,["style","className","eventKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"]),le=zt(y),U=n.useContext(H),ne=U.prefixCls,se=U.onItemClick,q=U.disabled,oe=U.overflowDisabled,ee=U.itemIcon,be=U.selectedKeys,ae=U.onActive,me="".concat(ne,"-item"),fe=n.useRef(),ie=n.useRef(),Y=q||S,de=Ve(y),ye=function($e){return{key:y,keyPath:de,item:fe.current,domEvent:$e}},ge=F||ee,Se=yn(y,Y,$,G),We=Se.active,Ce=Object(Ae.a)(Se,["active"]),Oe=be.includes(y),Me=N(de.length),Te=function($e){if(!Y){var Ue=ye($e);z==null||z(bn(Ue)),se(Ue)}},Pe=function($e){if(ue==null||ue($e),$e.which===we.a.ENTER){var Ue=ye($e);z==null||z(bn(Ue)),se(Ue)}},je=function($e){ae(y),X==null||X($e)},xe={};return s.role==="option"&&(xe["aria-selected"]=Oe),n.createElement(ba,Object(W.a)({ref:fe,elementRef:ie,role:x===null?"none":x||"menuitem",tabIndex:S?null:-1,"data-menu-id":oe&&le?null:le},k,Ce,xe,{component:"li","aria-disabled":S,style:Object(ve.a)(Object(ve.a)({},Me),C),className:Ie()(me,(m={},Object(ce.a)(m,"".concat(me,"-active"),We),Object(ce.a)(m,"".concat(me,"-selected"),Oe),Object(ce.a)(m,"".concat(me,"-disabled"),Y),m),E),onClick:Te,onKeyDown:Pe,onFocus:je}),w,n.createElement(p,{props:Object(ve.a)(Object(ve.a)({},s),{},{isSelected:Oe}),icon:ge}))};function Ea(a){var s=a.eventKey,m=te(),C=Ve(s);return n.useEffect(function(){if(m)return m.registerPath(s,C),function(){m.unregisterPath(s,C)}},[C]),m?null:n.createElement(Ca,a)}var Rt=Ea;function jt(a,s){return Object(Mn.a)(a).map(function(m,C){if(n.isValidElement(m)){var E=m.key;return E==null&&(E="tmp_key-".concat([].concat(Object(pn.a)(s),[C]).join("-"))),n.cloneElement(m,{key:E,eventKey:E})}return m})}function et(a){var s=n.useRef(a);s.current=a;var m=n.useCallback(function(){for(var C,E=arguments.length,y=new Array(E),S=0;S<E;S++)y[S]=arguments[S];return(C=s.current)===null||C===void 0?void 0:C.call.apply(C,[s].concat(y))},[]);return a?m:void 0}var Oa=function(s,m){var C=s.className,E=s.children,y=Object(Ae.a)(s,["className","children"]),S=n.useContext(H),F=S.prefixCls,w=S.mode;return n.createElement("ul",Object(W.a)({className:Ie()(F,"".concat(F,"-sub"),"".concat(F,"-").concat(w==="inline"?"inline":"vertical"),C)},y,{"data-menu-list":!0,ref:m}),E)},Gt=n.forwardRef(Oa);Gt.displayName="SubMenuList";var Yt=Gt,Sa=e("uciX"),Vn={adjustX:1,adjustY:1},Ht={topLeft:{points:["bl","tl"],overflow:Vn,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Vn,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:Vn,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:Vn,offset:[4,0]}},Fa={topLeft:{points:["bl","tl"],overflow:Vn,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Vn,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:Vn,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:Vn,offset:[4,0]}},fr=Ht;function Qt(a,s,m){if(s)return s;if(m)return m[a]||m.other}var Da={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function Ra(a){var s=a.prefixCls,m=a.visible,C=a.children,E=a.popup,y=a.popupClassName,S=a.popupOffset,F=a.disabled,w=a.mode,x=a.onVisibleChange,$=n.useContext(H),G=$.getPopupContainer,z=$.rtl,ue=$.subMenuOpenDelay,X=$.subMenuCloseDelay,k=$.builtinPlacements,le=$.triggerSubMenuAction,U=$.forceSubMenuRender,ne=$.motion,se=$.defaultMotions,q=n.useState(!1),oe=Object(V.a)(q,2),ee=oe[0],be=oe[1],ae=z?Object(ve.a)(Object(ve.a)({},Fa),k):Object(ve.a)(Object(ve.a)({},Ht),k),me=Da[w],fe=Qt(w,ne,se),ie=Object(ve.a)(Object(ve.a)({},fe),{},{leavedClassName:"".concat(s,"-hidden"),removeOnLeave:!1,motionAppear:!0}),Y=n.useRef();return n.useEffect(function(){return Y.current=Object(Qe.a)(function(){be(m)}),function(){Qe.a.cancel(Y.current)}},[m]),n.createElement(Sa.a,{prefixCls:s,popupClassName:Ie()("".concat(s,"-popup"),Object(ce.a)({},"".concat(s,"-rtl"),z),y),stretch:w==="horizontal"?"minWidth":null,getPopupContainer:G,builtinPlacements:ae,popupPlacement:me,popupVisible:ee,popup:E,popupAlign:S&&{offset:S},action:F?[]:[le],mouseEnterDelay:ue,mouseLeaveDelay:X,onPopupVisibleChange:x,forceRender:U,popupMotion:ie},C)}var ja=e("8XRh");function Pa(a){var s=a.id,m=a.open,C=a.keyPath,E=a.children,y="inline",S=n.useContext(H),F=S.prefixCls,w=S.forceSubMenuRender,x=S.motion,$=S.defaultMotions,G=S.mode,z=n.useRef(!1);z.current=G===y;var ue=n.useState(!z.current),X=Object(V.a)(ue,2),k=X[0],le=X[1],U=z.current?m:!1;n.useEffect(function(){z.current&&le(!1)},[G]);var ne=Object(ve.a)({},Qt(y,x,$));C.length>1&&(ne.motionAppear=!1);var se=ne.onVisibleChanged;return ne.onVisibleChanged=function(q){return!z.current&&!q&&le(!0),se==null?void 0:se(q)},k?null:n.createElement(dn,{mode:y,locked:!z.current},n.createElement(ja.default,Object(W.a)({visible:U},ne,{forceRender:w,removeOnLeave:!1,leavedClassName:"".concat(F,"-hidden")}),function(q){var oe=q.className,ee=q.style;return n.createElement(Yt,{id:s,className:oe,style:ee},E)}))}var Aa=function(s){var m,C=s.style,E=s.className,y=s.title,S=s.eventKey,F=s.disabled,w=s.internalPopupClose,x=s.children,$=s.itemIcon,G=s.expandIcon,z=s.popupClassName,ue=s.popupOffset,X=s.onClick,k=s.onMouseEnter,le=s.onMouseLeave,U=s.onTitleClick,ne=s.onTitleMouseEnter,se=s.onTitleMouseLeave,q=Object(Ae.a)(s,["style","className","title","eventKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"]),oe=zt(S),ee=n.useContext(H),be=ee.prefixCls,ae=ee.mode,me=ee.openKeys,fe=ee.disabled,ie=ee.overflowDisabled,Y=ee.activeKey,de=ee.selectedKeys,ye=ee.itemIcon,ge=ee.expandIcon,Se=ee.onItemClick,We=ee.onOpenChange,Ce=ee.onActive,Oe=n.useContext(ze),Me=Oe.isSubPathKey,Te=Ve(),Pe="".concat(be,"-submenu"),je=fe||F,xe=n.useRef(),qe=n.useRef(),$e=$||ye,Ue=G||ge,He=me.includes(S),Le=!ie&&He,Rn=Me(de,S),tn=yn(S,je,ne,se),Xe=tn.active,un=Object(Ae.a)(tn,["active"]),Cn=n.useState(!1),En=Object(V.a)(Cn,2),Ne=En[0],Ge=En[1],_e=function(Ye){je||Ge(Ye)},Ze=function(Ye){_e(!0),k==null||k({key:S,domEvent:Ye})},Ln=function(Ye){_e(!1),le==null||le({key:S,domEvent:Ye})},Jn=n.useMemo(function(){return Xe||(ae!=="inline"?Ne||Me([Y],S):!1)},[ae,Xe,Y,Ne,S,Me]),xn=N(Te.length),an=function(Ye){je||(U==null||U({key:S,domEvent:Ye}),ae==="inline"&&We(S,!He))},jn=et(function(ke){X==null||X(bn(ke)),Se(ke)}),on=function(Ye){ae!=="inline"&&We(S,Ye)},Pn=function(){Ce(S)},en=oe&&"".concat(oe,"-popup"),rn=n.createElement("div",Object(W.a)({role:"menuitem",style:xn,className:"".concat(Pe,"-title"),tabIndex:je?null:-1,ref:xe,title:typeof y=="string"?y:null,"data-menu-id":ie&&oe?null:oe,"aria-expanded":Le,"aria-haspopup":!0,"aria-controls":en,"aria-disabled":je,onClick:an,onFocus:Pn},un),y,n.createElement(p,{icon:ae!=="horizontal"?Ue:null,props:Object(ve.a)(Object(ve.a)({},s),{},{isOpen:Le,isSubMenu:!0})},n.createElement("i",{className:"".concat(Pe,"-arrow")}))),An=n.useRef(ae);if(ae!=="inline"&&(An.current=Te.length>1?"vertical":ae),!ie){var cn=An.current;rn=n.createElement(Ra,{mode:cn,prefixCls:Pe,visible:!w&&Le&&ae!=="inline",popupClassName:z,popupOffset:ue,popup:n.createElement(dn,{mode:cn},n.createElement(Yt,{id:en,ref:qe},x)),disabled:je,onVisibleChange:on},rn)}return n.createElement(dn,{onItemClick:jn,mode:ae==="horizontal"?"vertical":ae,itemIcon:$e,expandIcon:Ue},n.createElement(v.Item,Object(W.a)({role:"none"},q,{component:"li",style:C,className:Ie()(Pe,"".concat(Pe,"-").concat(ae),E,(m={},Object(ce.a)(m,"".concat(Pe,"-open"),Le),Object(ce.a)(m,"".concat(Pe,"-active"),Jn),Object(ce.a)(m,"".concat(Pe,"-selected"),Rn),Object(ce.a)(m,"".concat(Pe,"-disabled"),je),m)),onMouseEnter:Ze,onMouseLeave:Ln}),rn,!ie&&n.createElement(Pa,{id:en,open:Le,keyPath:Te},x)))};function Xt(a){var s=a.eventKey,m=a.children,C=Ve(s),E=jt(m,C),y=te();n.useEffect(function(){if(y)return y.registerPath(s,C),function(){y.unregisterPath(s,C)}},[C]);var S;return y?S=E:S=n.createElement(Aa,a,E),n.createElement(Re.Provider,{value:C},S)}var Ia=e("x/xZ");function Zt(a){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Object(Ia.a)(a)){var m=a.nodeName.toLowerCase(),C=["input","select","textarea","button"].includes(m)||a.isContentEditable||m==="a"&&!!a.getAttribute("href"),E=a.getAttribute("tabindex"),y=Number(E),S=null;return E&&!Number.isNaN(y)?S=y:C&&S===null&&(S=0),C&&a.disabled&&(S=null),S!==null&&(S>=0||s&&S<0)}return!1}function kt(a){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,m=Object(pn.a)(a.querySelectorAll("*")).filter(function(C){return Zt(C,s)});return Zt(a,s)&&m.unshift(a),m}var mt=null;function pr(){mt=document.activeElement}function hr(){mt=null}function vr(){if(mt)try{mt.focus()}catch(a){}}function gr(a,s){if(s.keyCode===9){var m=kt(a),C=m[s.shiftKey?0:m.length-1],E=C===document.activeElement||a===document.activeElement;if(E){var y=m[s.shiftKey?m.length-1:0];y.focus(),s.preventDefault()}}}var Pt=we.a.LEFT,At=we.a.RIGHT,It=we.a.UP,ft=we.a.DOWN,pt=we.a.ENTER,qt=we.a.ESC,_t=[It,ft,Pt,At];function Na(a,s,m,C){var E,y,S,F,w="prev",x="next",$="children",G="parent";if(a==="inline"&&C===pt)return{inlineTrigger:!0};var z=(E={},Object(ce.a)(E,It,w),Object(ce.a)(E,ft,x),E),ue=(y={},Object(ce.a)(y,Pt,m?x:w),Object(ce.a)(y,At,m?w:x),Object(ce.a)(y,ft,$),Object(ce.a)(y,pt,$),y),X=(S={},Object(ce.a)(S,It,w),Object(ce.a)(S,ft,x),Object(ce.a)(S,pt,$),Object(ce.a)(S,qt,G),Object(ce.a)(S,Pt,m?$:G),Object(ce.a)(S,At,m?G:$),S),k={inline:z,horizontal:ue,vertical:X,inlineSub:z,horizontalSub:X,verticalSub:X},le=(F=k["".concat(a).concat(s?"":"Sub")])===null||F===void 0?void 0:F[C];switch(le){case w:return{offset:-1,sibling:!0};case x:return{offset:1,sibling:!0};case G:return{offset:-1,sibling:!1};case $:return{offset:1,sibling:!1};default:return null}}function Ba(a){for(var s=a;s;){if(s.getAttribute("data-menu-list"))return s;s=s.parentElement}return null}function Ta(a,s){for(var m=a||document.activeElement;m;){if(s.has(m))return m;m=m.parentElement}return null}function Ma(a,s){var m=kt(a,!0);return m.filter(function(C){return s.has(C)})}function ea(a,s,m){var C=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!a)return null;var E=Ma(a,s),y=E.length,S=E.findIndex(function(F){return m===F});return C<0?S===-1?S=y-1:S-=1:C>0&&(S+=1),S=(S+y)%y,E[S]}function Ka(a,s,m,C,E,y,S,F,w,x){var $=n.useRef(),G=n.useRef();G.current=s;var z=function(){Qe.a.cancel($.current)};return n.useEffect(function(){return function(){z()}},[]),function(ue){var X=ue.which;if([].concat(_t,[pt,qt]).includes(X)){var k,le,U,ne=function(){k=new Set,le=new Map,U=new Map;var ye=y();return ye.forEach(function(ge){var Se=document.querySelector("[data-menu-id='".concat(Jt(C,ge),"']"));Se&&(k.add(Se),U.set(Se,ge),le.set(ge,Se))}),k};ne();var se=le.get(s),q=Ta(se,k),oe=U.get(q),ee=Na(a,S(oe,!0).length===1,m,X);if(!ee)return;_t.includes(X)&&ue.preventDefault();var be=function(ye){if(ye){var ge=ye,Se=ye.querySelector("a");(Se==null?void 0:Se.getAttribute("href"))&&(ge=Se);var We=U.get(ye);F(We),z(),$.current=Object(Qe.a)(function(){G.current===We&&ge.focus()})}};if(ee.sibling||!q){var ae;!q||a==="inline"?ae=E.current:ae=Ba(q);var me=ea(ae,k,q,ee.offset);be(me)}else if(ee.inlineTrigger)w(oe);else if(ee.offset>0)w(oe,!0),z(),$.current=Object(Qe.a)(function(){ne();var de=q.getAttribute("aria-controls"),ye=document.getElementById(de),ge=ea(ye,k);be(ge)},5);else if(ee.offset<0){var fe=S(oe,!0),ie=fe[fe.length-2],Y=le.get(ie);w(ie,!1),be(Y)}}x==null||x(ue)}}var wa=Math.random().toFixed(5).toString().slice(2),na=0;function Wa(a){var s=Object(Fn.a)(a,{value:a}),m=Object(V.a)(s,2),C=m[0],E=m[1];return n.useEffect(function(){na+=1;var y="".concat(wa,"-").concat(na);E("rc-menu-uuid-".concat(y))},[]),C}var yr=e("p8sG");function La(a){Promise.resolve().then(a)}var Nt="__RC_UTIL_PATH_SPLIT__",ta=function(s){return s.join(Nt)},xa=function(s){return s.split(Nt)},Bt="rc-menu-more";function $a(){var a=n.useState({}),s=Object(V.a)(a,2),m=s[1],C=Object(n.useRef)(new Map),E=Object(n.useRef)(new Map),y=n.useState([]),S=Object(V.a)(y,2),F=S[0],w=S[1],x=Object(n.useRef)(0),$=Object(n.useCallback)(function(U,ne){var se=ta(ne);E.current.set(se,U),C.current.set(U,se),x.current+=1;var q=x.current;La(function(){q===x.current&&m({})})},[]),G=Object(n.useCallback)(function(U,ne){var se=ta(ne);E.current.delete(se),C.current.delete(U)},[]),z=Object(n.useCallback)(function(U){w(U)},[]),ue=Object(n.useCallback)(function(U,ne){var se=C.current.get(U)||"",q=xa(se);return ne&&F.includes(q[0])&&q.unshift(Bt),q},[F]),X=Object(n.useCallback)(function(U,ne){return U.some(function(se){var q=ue(se,!0);return q.includes(ne)})},[ue]),k=function(){var ne=Object(pn.a)(C.current.keys());return F.length&&ne.push(Bt),ne},le=Object(n.useCallback)(function(U){var ne="".concat(C.current.get(U)).concat(Nt),se=new Set;return Object(pn.a)(E.current.keys()).forEach(function(q){q.startsWith(ne)&&se.add(E.current.get(q))}),se},[]);return{registerPath:$,unregisterPath:G,refreshOverflowKeys:z,isSubPathKey:X,getKeyPath:ue,getKeys:k,getSubPathKeys:le}}var ht=[],Va=function(s){var m,C,E=s.prefixCls,y=E===void 0?"rc-menu":E,S=s.style,F=s.className,w=s.tabIndex,x=w===void 0?0:w,$=s.children,G=s.direction,z=s.id,ue=s.mode,X=ue===void 0?"vertical":ue,k=s.inlineCollapsed,le=s.disabled,U=s.disabledOverflow,ne=s.subMenuOpenDelay,se=ne===void 0?.1:ne,q=s.subMenuCloseDelay,oe=q===void 0?.1:q,ee=s.forceSubMenuRender,be=s.defaultOpenKeys,ae=s.openKeys,me=s.activeKey,fe=s.defaultActiveFirst,ie=s.selectable,Y=ie===void 0?!0:ie,de=s.multiple,ye=de===void 0?!1:de,ge=s.defaultSelectedKeys,Se=s.selectedKeys,We=s.onSelect,Ce=s.onDeselect,Oe=s.inlineIndent,Me=Oe===void 0?24:Oe,Te=s.motion,Pe=s.defaultMotions,je=s.triggerSubMenuAction,xe=je===void 0?"hover":je,qe=s.builtinPlacements,$e=s.itemIcon,Ue=s.expandIcon,He=s.overflowedIndicator,Le=He===void 0?"...":He,Rn=s.getPopupContainer,tn=s.onClick,Xe=s.onOpenChange,un=s.onKeyDown,Cn=s.openAnimation,En=s.openTransitionName,Ne=Object(Ae.a)(s,["prefixCls","style","className","tabIndex","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName"]),Ge=jt($,ht),_e=n.useState(!1),Ze=Object(V.a)(_e,2),Ln=Ze[0],Jn=Ze[1],xn=n.useRef(),an=Wa(z),jn=G==="rtl",on=n.useMemo(function(){return X==="inline"&&k?["vertical",k]:[X,!1]},[X,k]),Pn=Object(V.a)(on,2),en=Pn[0],rn=Pn[1],An=n.useState(0),cn=Object(V.a)(An,2),ke=cn[0],Ye=cn[1],zn=ke>=Ge.length-1||en!=="horizontal"||U,Gn=Object(Fn.a)(be,{value:ae,postState:function(_){return _||ht}}),nt=Object(V.a)(Gn,2),On=nt[0],vn=nt[1],Yn=n.useState(On),Sn=Object(V.a)(Yn,2),mn=Sn[0],Hn=Sn[1],In=en==="inline",Qn=n.useRef(!1);n.useEffect(function(){In&&Hn(On)},[On]),n.useEffect(function(){if(!Qn.current){Qn.current=!0;return}if(In)vn(mn);else{var re=[];vn(re),Xe==null||Xe(re)}},[In]);var ln=$a(),Nn=ln.registerPath,he=ln.unregisterPath,De=ln.refreshOverflowKeys,Ke=ln.isSubPathKey,nn=ln.getKeyPath,Xn=ln.getKeys,gt=ln.getSubPathKeys,wt=n.useMemo(function(){return{registerPath:Nn,unregisterPath:he}},[Nn,he]),Wt=n.useMemo(function(){return{isSubPathKey:Ke}},[Ke]);n.useEffect(function(){De(zn?ht:Ge.slice(ke+1).map(function(re){return re.key}))},[ke,zn]);var Lt=Object(Fn.a)(me||fe&&((m=Ge[0])===null||m===void 0?void 0:m.key),{value:me}),tt=Object(V.a)(Lt,2),yt=tt[0],ut=tt[1],bt=et(function(re){ut(re)}),xt=et(function(){ut(void 0)}),Ct=Object(Fn.a)(ge||[],{value:Se,postState:function(_){return Array.isArray(_)?_:_==null?ht:[_]}}),Et=Object(V.a)(Ct,2),at=Et[0],Bn=Et[1],Ot=function(_){if(!!Y){var Ee=_.key,Je=at.includes(Ee),sn;Je?sn=at.filter(function(kn){return kn!==Ee}):ye?sn=[].concat(Object(pn.a)(at),[Ee]):sn=[Ee],Bn(sn);var Un=Object(ve.a)(Object(ve.a)({},_),{},{selectedKeys:sn});Je?Ce==null||Ce(Un):We==null||We(Un)}},St=et(function(re){tn==null||tn(bn(re)),Ot(re)}),ot=et(function(re,_){var Ee=On.filter(function(sn){return sn!==re});if(_)Ee.push(re);else if(en!=="inline"){var Je=gt(re);Ee=Ee.filter(function(sn){return!Je.has(sn)})}R()(On,Ee)||(vn(Ee),Xe==null||Xe(Ee))}),Zn=et(Rn),lt=function(_,Ee){var Je=Ee!=null?Ee:!On.includes(_);ot(_,Je)},dt=Ka(en,yt,jn,an,xn,Xn,nn,ut,lt,un);n.useEffect(function(){Jn(!0)},[]);var Ft=en!=="horizontal"||U?Ge:Ge.map(function(re,_){return n.createElement(dn,{key:re.key,overflowDisabled:_>ke},re)}),Dt=n.createElement(v,Object(W.a)({id:z,ref:xn,prefixCls:"".concat(y,"-overflow"),component:"ul",itemComponent:Rt,className:Ie()(y,"".concat(y,"-root"),"".concat(y,"-").concat(en),F,(C={},Object(ce.a)(C,"".concat(y,"-inline-collapsed"),rn),Object(ce.a)(C,"".concat(y,"-rtl"),jn),C)),dir:G,style:S,role:"menu",tabIndex:x,data:Ft,renderRawItem:function(_){return _},renderRawRest:function(_){var Ee=_.length,Je=Ee?Ge.slice(-Ee):null;return n.createElement(Xt,{eventKey:Bt,title:Le,disabled:zn,internalPopupClose:Ee===0},Je)},maxCount:en!=="horizontal"||U?v.INVALIDATE:v.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(_){Ye(_)},onKeyDown:dt},Ne));return n.createElement(Ut.Provider,{value:an},n.createElement(dn,{prefixCls:y,mode:en,openKeys:On,rtl:jn,disabled:le,motion:Ln?Te:null,defaultMotions:Ln?Pe:null,activeKey:yt,onActive:bt,onInactive:xt,selectedKeys:at,inlineIndent:Me,subMenuOpenDelay:se,subMenuCloseDelay:oe,forceSubMenuRender:ee,builtinPlacements:qe,triggerSubMenuAction:xe,getPopupContainer:Zn,itemIcon:$e,expandIcon:Ue,onItemClick:St,onOpenChange:ot},n.createElement(ze.Provider,{value:Wt},Dt),n.createElement(pe.Provider,{value:wt},Ge)))},Ua=Va,Ja=function(s){var m=s.className,C=s.title,E=s.eventKey,y=s.children,S=Object(Ae.a)(s,["className","title","eventKey","children"]),F=n.useContext(H),w=F.prefixCls,x="".concat(w,"-item-group");return n.createElement("li",Object(W.a)({},S,{onClick:function(G){return G.stopPropagation()},className:Ie()(x,m)}),n.createElement("div",{className:"".concat(x,"-title"),title:typeof C=="string"?C:void 0},C),n.createElement("ul",{className:"".concat(x,"-list")},y))};function za(a){var s=a.children,m=Object(Ae.a)(a,["children"]),C=Ve(m.eventKey),E=jt(s,C),y=te();return y?E:n.createElement(Ja,m,E)}function Ga(a){var s=a.className,m=a.style,C=n.useContext(H),E=C.prefixCls,y=te();return y?null:n.createElement("li",{className:Ie()("".concat(E,"-item-divider"),s),style:m})}var it=Ua;it.Item=Rt,it.SubMenu=Xt,it.ItemGroup=za,it.Divider=Ga;var Ya=it,Ha=e("eDIo");function Qa(a,s){var m=a.prefixCls,C=a.editable,E=a.locale,y=a.style;return!C||C.showAdd===!1?null:n.createElement("button",{ref:s,type:"button",className:"".concat(m,"-nav-add"),style:y,"aria-label":(E==null?void 0:E.addAriaLabel)||"Add tab",onClick:function(F){C.onEdit("add",{event:F})}},C.addIcon||"+")}var aa=n.forwardRef(Qa);function Xa(a,s){var m=a.prefixCls,C=a.id,E=a.tabs,y=a.locale,S=a.mobile,F=a.moreIcon,w=F===void 0?"More":F,x=a.moreTransitionName,$=a.style,G=a.className,z=a.editable,ue=a.tabBarGutter,X=a.rtl,k=a.onTabClick,le=Object(n.useState)(!1),U=Object(V.a)(le,2),ne=U[0],se=U[1],q=Object(n.useState)(null),oe=Object(V.a)(q,2),ee=oe[0],be=oe[1],ae="".concat(C,"-more-popup"),me="".concat(m,"-dropdown"),fe=ee!==null?"".concat(ae,"-").concat(ee):null,ie=y==null?void 0:y.dropdownAriaLabel,Y=n.createElement(Ya,{onClick:function(Oe){var Me=Oe.key,Te=Oe.domEvent;k(Me,Te),se(!1)},id:ae,tabIndex:-1,role:"listbox","aria-activedescendant":fe,selectedKeys:[ee],"aria-label":ie!==void 0?ie:"expanded dropdown"},E.map(function(Ce){return n.createElement(Rt,{key:Ce.key,id:"".concat(ae,"-").concat(Ce.key),role:"option","aria-controls":C&&"".concat(C,"-panel-").concat(Ce.key),disabled:Ce.disabled},Ce.tab)}));function de(Ce){for(var Oe=E.filter(function(xe){return!xe.disabled}),Me=Oe.findIndex(function(xe){return xe.key===ee})||0,Te=Oe.length,Pe=0;Pe<Te;Pe+=1){Me=(Me+Ce+Te)%Te;var je=Oe[Me];if(!je.disabled){be(je.key);return}}}function ye(Ce){var Oe=Ce.which;if(!ne){[we.a.DOWN,we.a.SPACE,we.a.ENTER].includes(Oe)&&(se(!0),Ce.preventDefault());return}switch(Oe){case we.a.UP:de(-1),Ce.preventDefault();break;case we.a.DOWN:de(1),Ce.preventDefault();break;case we.a.ESC:se(!1);break;case we.a.SPACE:case we.a.ENTER:ee!==null&&k(ee,Ce);break}}Object(n.useEffect)(function(){var Ce=document.getElementById(fe);Ce&&Ce.scrollIntoView&&Ce.scrollIntoView(!1)},[ee]),Object(n.useEffect)(function(){ne||be(null)},[ne]);var ge=Object(ce.a)({},X?"marginLeft":"marginRight",ue);E.length||(ge.visibility="hidden",ge.order=1);var Se=Ie()(Object(ce.a)({},"".concat(me,"-rtl"),X)),We=S?null:n.createElement(Ha.default,{prefixCls:me,overlay:Y,trigger:["hover"],visible:ne,transitionName:x,onVisibleChange:se,overlayClassName:Se,mouseEnterDelay:.1,mouseLeaveDelay:.1},n.createElement("button",{type:"button",className:"".concat(m,"-nav-more"),style:ge,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":ae,id:"".concat(C,"-more"),"aria-expanded":ne,onKeyDown:ye},w));return n.createElement("div",{className:Ie()("".concat(m,"-nav-operations"),G),style:$,ref:s},We,n.createElement(aa,{prefixCls:m,locale:y,editable:z}))}var Za=n.forwardRef(Xa),Tt=Object(n.createContext)(null),ka=.1,ra=.01,vt=20,sa=Math.pow(.995,vt);function qa(a,s){var m=Object(n.useState)(),C=Object(V.a)(m,2),E=C[0],y=C[1],S=Object(n.useState)(0),F=Object(V.a)(S,2),w=F[0],x=F[1],$=Object(n.useState)(0),G=Object(V.a)($,2),z=G[0],ue=G[1],X=Object(n.useState)(),k=Object(V.a)(X,2),le=k[0],U=k[1],ne=Object(n.useRef)();function se(me){var fe=me.touches[0],ie=fe.screenX,Y=fe.screenY;y({x:ie,y:Y}),window.clearInterval(ne.current)}function q(me){if(!!E){me.preventDefault();var fe=me.touches[0],ie=fe.screenX,Y=fe.screenY;y({x:ie,y:Y});var de=ie-E.x,ye=Y-E.y;s(de,ye);var ge=Date.now();x(ge),ue(ge-w),U({x:de,y:ye})}}function oe(){if(!!E&&(y(null),U(null),le)){var me=le.x/z,fe=le.y/z,ie=Math.abs(me),Y=Math.abs(fe);if(Math.max(ie,Y)<ka)return;var de=me,ye=fe;ne.current=window.setInterval(function(){if(Math.abs(de)<ra&&Math.abs(ye)<ra){window.clearInterval(ne.current);return}de*=sa,ye*=sa,s(de*vt,ye*vt)},vt)}}var ee=Object(n.useRef)();function be(me){var fe=me.deltaX,ie=me.deltaY,Y=0,de=Math.abs(fe),ye=Math.abs(ie);de===ye?Y=ee.current==="x"?fe:ie:de>ye?(Y=fe,ee.current="x"):(Y=ie,ee.current="y"),s(-Y,-Y)&&me.preventDefault()}var ae=Object(n.useRef)(null);ae.current={onTouchStart:se,onTouchMove:q,onTouchEnd:oe,onWheel:be},n.useEffect(function(){function me(de){ae.current.onTouchStart(de)}function fe(de){ae.current.onTouchMove(de)}function ie(de){ae.current.onTouchEnd(de)}function Y(de){ae.current.onWheel(de)}return document.addEventListener("touchmove",fe,{passive:!1}),document.addEventListener("touchend",ie,{passive:!1}),a.current.addEventListener("touchstart",me,{passive:!1}),a.current.addEventListener("wheel",Y),function(){document.removeEventListener("touchmove",fe),document.removeEventListener("touchend",ie)}},[])}function _a(){var a=Object(n.useRef)(new Map);function s(C){return a.current.has(C)||a.current.set(C,n.createRef()),a.current.get(C)}function m(C){a.current.delete(C)}return[s,m]}function ia(a,s){var m=n.useRef(a),C=n.useState({}),E=Object(V.a)(C,2),y=E[1];function S(F){var w=typeof F=="function"?F(m.current):F;w!==m.current&&s(w,m.current),m.current=w,y({})}return[m.current,S]}var ua=function(s){var m=s.position,C=s.prefixCls,E=s.extra;if(!E)return null;var y,S=E;return m==="right"&&(y=S.right||!S.left&&S||null),m==="left"&&(y=S.left||null),y?n.createElement("div",{className:"".concat(C,"-extra-content")},y):null};function er(a,s){var m,C=n.useContext(Tt),E=C.prefixCls,y=C.tabs,S=a.className,F=a.style,w=a.id,x=a.animated,$=a.activeKey,G=a.rtl,z=a.extra,ue=a.editable,X=a.locale,k=a.tabPosition,le=a.tabBarGutter,U=a.children,ne=a.onTabClick,se=a.onTabScroll,q=Object(n.useRef)(),oe=Object(n.useRef)(),ee=Object(n.useRef)(),be=Object(n.useRef)(),ae=_a(),me=Object(V.a)(ae,2),fe=me[0],ie=me[1],Y=k==="top"||k==="bottom",de=ia(0,function(re,_){Y&&se&&se({direction:re>_?"left":"right"})}),ye=Object(V.a)(de,2),ge=ye[0],Se=ye[1],We=ia(0,function(re,_){!Y&&se&&se({direction:re>_?"top":"bottom"})}),Ce=Object(V.a)(We,2),Oe=Ce[0],Me=Ce[1],Te=Object(n.useState)(0),Pe=Object(V.a)(Te,2),je=Pe[0],xe=Pe[1],qe=Object(n.useState)(0),$e=Object(V.a)(qe,2),Ue=$e[0],He=$e[1],Le=Object(n.useState)(0),Rn=Object(V.a)(Le,2),tn=Rn[0],Xe=Rn[1],un=Object(n.useState)(0),Cn=Object(V.a)(un,2),En=Cn[0],Ne=Cn[1],Ge=Object(n.useState)(null),_e=Object(V.a)(Ge,2),Ze=_e[0],Ln=_e[1],Jn=Object(n.useState)(null),xn=Object(V.a)(Jn,2),an=xn[0],jn=xn[1],on=Object(n.useState)(0),Pn=Object(V.a)(on,2),en=Pn[0],rn=Pn[1],An=Object(n.useState)(0),cn=Object(V.a)(An,2),ke=cn[0],Ye=cn[1],zn=Dn(new Map),Gn=Object(V.a)(zn,2),nt=Gn[0],On=Gn[1],vn=rt(y,nt,je),Yn="".concat(E,"-nav-operations-hidden"),Sn=0,mn=0;Y?G?(Sn=0,mn=Math.max(0,je-Ze)):(Sn=Math.min(0,Ze-je),mn=0):(Sn=Math.min(0,an-Ue),mn=0);function Hn(re){return re<Sn?Sn:re>mn?mn:re}var In=Object(n.useRef)(),Qn=Object(n.useState)(),ln=Object(V.a)(Qn,2),Nn=ln[0],he=ln[1];function De(){he(Date.now())}function Ke(){window.clearTimeout(In.current)}qa(q,function(re,_){function Ee(Je,sn){Je(function(Un){var kn=Hn(Un+sn);return kn})}if(Y){if(Ze>=je)return!1;Ee(Se,re)}else{if(an>=Ue)return!1;Ee(Me,_)}return Ke(),De(),!0}),Object(n.useEffect)(function(){return Ke(),Nn&&(In.current=window.setTimeout(function(){he(0)},100)),Ke},[Nn]);function nn(){var re=arguments.length>0&&arguments[0]!==void 0?arguments[0]:$,_=vn.get(re)||{width:0,height:0,left:0,right:0,top:0};if(Y){var Ee=ge;G?_.right<ge?Ee=_.right:_.right+_.width>ge+Ze&&(Ee=_.right+_.width-Ze):_.left<-ge?Ee=-_.left:_.left+_.width>-ge+Ze&&(Ee=-(_.left+_.width-Ze)),Me(0),Se(Hn(Ee))}else{var Je=Oe;_.top<-Oe?Je=-_.top:_.top+_.height>-Oe+an&&(Je=-(_.top+_.height-an)),Se(0),Me(Hn(Je))}}var Xn=P(vn,{width:Ze,height:an,left:ge,top:Oe},{width:tn,height:En},{width:en,height:ke},Object(ve.a)(Object(ve.a)({},a),{},{tabs:y})),gt=Object(V.a)(Xn,2),wt=gt[0],Wt=gt[1],Lt=y.map(function(re){var _=re.key;return n.createElement(Wn,{id:w,prefixCls:E,key:_,rtl:G,tab:re,closable:re.closable,editable:ue,active:_===$,tabPosition:k,tabBarGutter:le,renderWrapper:U,removeAriaLabel:X==null?void 0:X.removeAriaLabel,ref:fe(_),onClick:function(Je){ne(_,Je)},onRemove:function(){ie(_)},onFocus:function(){nn(_),De(),G||(q.current.scrollLeft=0),q.current.scrollTop=0}})}),tt=wn(function(){var re,_,Ee,Je,sn,Un,kn,$t,Vt,or=((re=q.current)===null||re===void 0?void 0:re.offsetWidth)||0,lr=((_=q.current)===null||_===void 0?void 0:_.offsetHeight)||0,ma=((Ee=be.current)===null||Ee===void 0?void 0:Ee.offsetWidth)||0,fa=((Je=be.current)===null||Je===void 0?void 0:Je.offsetHeight)||0,dr=((sn=ee.current)===null||sn===void 0?void 0:sn.offsetWidth)||0,cr=((Un=ee.current)===null||Un===void 0?void 0:Un.offsetHeight)||0;Ln(or),jn(lr),rn(ma),Ye(fa);var pa=(((kn=oe.current)===null||kn===void 0?void 0:kn.offsetWidth)||0)-ma,ha=((($t=oe.current)===null||$t===void 0?void 0:$t.offsetHeight)||0)-fa;xe(pa),He(ha);var va=(Vt=ee.current)===null||Vt===void 0?void 0:Vt.className.includes(Yn);Xe(pa-(va?0:dr)),Ne(ha-(va?0:cr)),On(function(){var ga=new Map;return y.forEach(function(mr){var ya=mr.key,ct=fe(ya).current;ct&&ga.set(ya,{width:ct.offsetWidth,height:ct.offsetHeight,left:ct.offsetLeft,top:ct.offsetTop})}),ga})}),yt=y.slice(0,wt),ut=y.slice(Wt+1),bt=[].concat(Object(pn.a)(yt),Object(pn.a)(ut)),xt=Object(n.useState)(),Ct=Object(V.a)(xt,2),Et=Ct[0],at=Ct[1],Bn=vn.get($),Ot=Object(n.useRef)();function St(){Qe.a.cancel(Ot.current)}Object(n.useEffect)(function(){var re={};return Bn&&(Y?(G?re.right=Bn.right:re.left=Bn.left,re.width=Bn.width):(re.top=Bn.top,re.height=Bn.height)),St(),Ot.current=Object(Qe.a)(function(){at(re)}),St},[Bn,Y,G]),Object(n.useEffect)(function(){nn()},[$,Bn,vn,Y]),Object(n.useEffect)(function(){tt()},[G,le,$,y.map(function(re){return re.key}).join("_")]);var ot=!!bt.length,Zn="".concat(E,"-nav-wrap"),lt,dt,Ft,Dt;return Y?G?(dt=ge>0,lt=ge+Ze<je):(lt=ge<0,dt=-ge+Ze<je):(Ft=Oe<0,Dt=-Oe+an<Ue),n.createElement("div",{ref:s,role:"tablist",className:Ie()("".concat(E,"-nav"),S),style:F,onKeyDown:function(){De()}},n.createElement(ua,{position:"left",extra:z,prefixCls:E}),n.createElement($n.default,{onResize:tt},n.createElement("div",{className:Ie()(Zn,(m={},Object(ce.a)(m,"".concat(Zn,"-ping-left"),lt),Object(ce.a)(m,"".concat(Zn,"-ping-right"),dt),Object(ce.a)(m,"".concat(Zn,"-ping-top"),Ft),Object(ce.a)(m,"".concat(Zn,"-ping-bottom"),Dt),m)),ref:q},n.createElement($n.default,{onResize:tt},n.createElement("div",{ref:oe,className:"".concat(E,"-nav-list"),style:{transform:"translate(".concat(ge,"px, ").concat(Oe,"px)"),transition:Nn?"none":void 0}},Lt,n.createElement(aa,{ref:be,prefixCls:E,locale:X,editable:ue,style:{visibility:ot?"hidden":null}}),n.createElement("div",{className:Ie()("".concat(E,"-ink-bar"),Object(ce.a)({},"".concat(E,"-ink-bar-animated"),x.inkBar)),style:Et}))))),n.createElement(Za,Object(W.a)({},a,{ref:ee,prefixCls:E,tabs:bt,className:!ot&&Yn})),n.createElement(ua,{position:"right",extra:z,prefixCls:E}))}var oa=n.forwardRef(er);function nr(a){var s=a.id,m=a.activeKey,C=a.animated,E=a.tabPosition,y=a.rtl,S=a.destroyInactiveTabPane,F=n.useContext(Tt),w=F.prefixCls,x=F.tabs,$=C.tabPane,G=x.findIndex(function(z){return z.key===m});return n.createElement("div",{className:Ie()("".concat(w,"-content-holder"))},n.createElement("div",{className:Ie()("".concat(w,"-content"),"".concat(w,"-content-").concat(E),Object(ce.a)({},"".concat(w,"-content-animated"),$)),style:G&&$?Object(ce.a)({},y?"marginRight":"marginLeft","-".concat(G,"00%")):null},x.map(function(z){return n.cloneElement(z.node,{key:z.key,prefixCls:w,tabKey:z.key,id:s,animated:$,active:z.key===m,destroyInactiveTabPane:S})})))}function la(a){var s=a.prefixCls,m=a.forceRender,C=a.className,E=a.style,y=a.id,S=a.active,F=a.animated,w=a.destroyInactiveTabPane,x=a.tabKey,$=a.children,G=n.useState(m),z=Object(V.a)(G,2),ue=z[0],X=z[1];n.useEffect(function(){S?X(!0):w&&X(!1)},[S,w]);var k={};return S||(F?(k.visibility="hidden",k.height=0,k.overflowY="hidden"):k.display="none"),n.createElement("div",{id:y&&"".concat(y,"-panel-").concat(x),role:"tabpanel",tabIndex:S?0:-1,"aria-labelledby":y&&"".concat(y,"-tab-").concat(x),"aria-hidden":!S,style:Object(ve.a)(Object(ve.a)({},k),E),className:Ie()("".concat(s,"-tabpane"),S&&"".concat(s,"-tabpane-active"),C)},(S||ue||m)&&$)}var da=0;function tr(a){return Object(Mn.a)(a).map(function(s){if(n.isValidElement(s)){var m=s.key!==void 0?String(s.key):void 0;return Object(ve.a)(Object(ve.a)({key:m},s.props),{},{node:s})}return null}).filter(function(s){return s})}function ar(a,s){var m,C=a.id,E=a.prefixCls,y=E===void 0?"rc-tabs":E,S=a.className,F=a.children,w=a.direction,x=a.activeKey,$=a.defaultActiveKey,G=a.editable,z=a.animated,ue=z===void 0?{inkBar:!0,tabPane:!1}:z,X=a.tabPosition,k=X===void 0?"top":X,le=a.tabBarGutter,U=a.tabBarStyle,ne=a.tabBarExtraContent,se=a.locale,q=a.moreIcon,oe=a.moreTransitionName,ee=a.destroyInactiveTabPane,be=a.renderTabBar,ae=a.onChange,me=a.onTabClick,fe=a.onTabScroll,ie=Object(Ae.a)(a,["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"]),Y=tr(F),de=w==="rtl",ye;ue===!1?ye={inkBar:!1,tabPane:!1}:ue===!0?ye={inkBar:!0,tabPane:!0}:ye=Object(ve.a)({inkBar:!0,tabPane:!1},Object(Be.a)(ue)==="object"?ue:{});var ge=Object(n.useState)(!1),Se=Object(V.a)(ge,2),We=Se[0],Ce=Se[1];Object(n.useEffect)(function(){Ce(Object(Kn.a)())},[]);var Oe=Object(Fn.a)(function(){var Ne;return(Ne=Y[0])===null||Ne===void 0?void 0:Ne.key},{value:x,defaultValue:$}),Me=Object(V.a)(Oe,2),Te=Me[0],Pe=Me[1],je=Object(n.useState)(function(){return Y.findIndex(function(Ne){return Ne.key===Te})}),xe=Object(V.a)(je,2),qe=xe[0],$e=xe[1];Object(n.useEffect)(function(){var Ne=Y.findIndex(function(_e){return _e.key===Te});if(Ne===-1){var Ge;Ne=Math.max(0,Math.min(qe,Y.length-1)),Pe((Ge=Y[Ne])===null||Ge===void 0?void 0:Ge.key)}$e(Ne)},[Y.map(function(Ne){return Ne.key}).join("_"),Te,qe]);var Ue=Object(Fn.a)(null,{value:C}),He=Object(V.a)(Ue,2),Le=He[0],Rn=He[1],tn=k;We&&!["left","right"].includes(k)&&(tn="top"),Object(n.useEffect)(function(){C||(Rn("rc-tabs-".concat(da)),da+=1)},[]);function Xe(Ne,Ge){me==null||me(Ne,Ge),Pe(Ne),ae==null||ae(Ne)}var un={id:Le,activeKey:Te,animated:ye,tabPosition:tn,rtl:de,mobile:We},Cn,En=Object(ve.a)(Object(ve.a)({},un),{},{editable:G,locale:se,moreIcon:q,moreTransitionName:oe,tabBarGutter:le,onTabClick:Xe,onTabScroll:fe,extra:ne,style:U,panes:F});return be?Cn=be(En,oa):Cn=n.createElement(oa,En),n.createElement(Tt.Provider,{value:{tabs:Y,prefixCls:y}},n.createElement("div",Object(W.a)({ref:s,id:C,className:Ie()(y,"".concat(y,"-").concat(tn),(m={},Object(ce.a)(m,"".concat(y,"-mobile"),We),Object(ce.a)(m,"".concat(y,"-editable"),G),Object(ce.a)(m,"".concat(y,"-rtl"),de),m),S)},ie),Cn,n.createElement(nr,Object(W.a)({destroyInactiveTabPane:ee},un,{animated:ye}))))}var ca=n.forwardRef(ar);ca.TabPane=la;var rr=ca,sr=rr,Mt=e("MZF8"),hn=e("dEAq"),ir=e("ZpkN"),br=e("TIsu");function Kt(a,s){var m,C=(m=a.match(/\.(\w+)$/))===null||m===void 0?void 0:m[1];return C||(C=s.tsx?"tsx":"jsx"),C}var ur=a=>{var s,m,C,E=Object(n.useRef)(),y=Object(n.useContext)(hn.context),S=y.locale,F=Object(hn.useLocaleProps)(S,a),w=Object(hn.useDemoUrl)(F.identifier),x=F.demoUrl||w,$=(Mt.a===null||Mt.a===void 0?void 0:Mt.a.location.hash)==="#".concat(F.identifier),G=Object.keys(F.sources).length===1,z=Object(hn.useCodeSandbox)((s=F.hideActions)!==null&&s!==void 0&&s.includes("CSB")?null:F),ue=Object(hn.useRiddle)((m=F.hideActions)!==null&&m!==void 0&&m.includes("RIDDLE")?null:F),X=Object(hn.useMotions)(F.motions||[],E.current),k=Object(J.default)(X,2),le=k[0],U=k[1],ne=Object(hn.useCopy)(),se=Object(J.default)(ne,2),q=se[0],oe=se[1],ee=Object(n.useState)("_"),be=Object(J.default)(ee,2),ae=be[0],me=be[1],fe=Object(n.useState)(Kt(ae,F.sources[ae])),ie=Object(J.default)(fe,2),Y=ie[0],de=ie[1],ye=Object(n.useState)(Boolean(F.defaultShowCode)),ge=Object(J.default)(ye,2),Se=ge[0],We=ge[1],Ce=Object(n.useState)(Math.random()),Oe=Object(J.default)(Ce,2),Me=Oe[0],Te=Oe[1],Pe=F.sources[ae][Y]||F.sources[ae].content,je=Object(hn.useTSPlaygroundUrl)(S,Pe),xe=Object(n.useRef)(),qe=Object(hn.usePrefersColor)(),$e=Object(J.default)(qe,1),Ue=$e[0];Object(n.useEffect)(()=>{Te(Math.random())},[Ue]);function He(Le){me(Le),de(Kt(Le,F.sources[Le]))}return b.a.createElement("div",{style:F.style,className:[F.className,"__dumi-default-previewer",$?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:F.identifier,"data-debug":F.debug||void 0,"data-iframe":F.iframe||void 0},F.iframe&&b.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),b.a.createElement("div",{ref:E,className:"__dumi-default-previewer-demo",style:{transform:F.transform?"translate(0, 0)":void 0,padding:F.compact||F.iframe&&F.compact!==!1?"0":void 0,background:F.background}},F.iframe?b.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(F.iframe).replace(/(\d)$/,"$1px")},key:Me,src:x,ref:xe}):F.children),b.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":F.title},F.title&&b.a.createElement(hn.AnchorLink,{to:"#".concat(F.identifier)},F.title),F.description&&b.a.createElement("div",{dangerouslySetInnerHTML:{__html:F.description}})),b.a.createElement("div",{className:"__dumi-default-previewer-actions"},z&&b.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:z}),ue&&b.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:ue}),F.motions&&b.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:U,onClick:()=>le()}),F.iframe&&b.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:()=>Te(Math.random())}),!((C=F.hideActions)!==null&&C!==void 0&&C.includes("EXTERNAL"))&&b.a.createElement(hn.Link,{target:"_blank",to:x},b.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),b.a.createElement("span",null),b.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":oe,onClick:()=>q(Pe)}),Y==="tsx"&&Se&&b.a.createElement(hn.Link,{target:"_blank",to:je},b.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),b.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(Se?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:()=>We(!Se)})),Se&&b.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!G&&b.a.createElement(sr,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xB7\xB7\xB7",defaultActiveKey:ae,onChange:He},Object.keys(F.sources).map(Le=>b.a.createElement(la,{tab:Le==="_"?"index.".concat(Kt(Le,F.sources[Le])):Le,key:Le}))),b.a.createElement("div",{className:"__dumi-default-previewer-source"},b.a.createElement(ir.a,{code:Pe,lang:Y,showCopy:!1}))))},Cr=gn.default=ur},"80pN":function(Tn,gn,e){"use strict";(function(J){/** @license React v16.14.0
* react-dom-test-utils.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var n=e("MgzW"),b=e("q1tI"),W=e("i8i4"),ce=e("QCnb");function V(p){for(var N="https://reactjs.org/docs/error-decoder.html?invariant="+p,M=1;M<arguments.length;M++)N+="&args[]="+encodeURIComponent(arguments[M]);return"Minified React error #"+p+"; visit "+N+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Be=b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;Be.hasOwnProperty("ReactCurrentDispatcher")||(Be.ReactCurrentDispatcher={current:null}),Be.hasOwnProperty("ReactCurrentBatchConfig")||(Be.ReactCurrentBatchConfig={suspense:null});function Ae(p){var N=p,M=p;if(p.alternate)for(;N.return;)N=N.return;else{p=N;do N=p,(N.effectTag&1026)!=0&&(M=N.return),p=N.return;while(p)}return N.tag===3?M:null}function ve(p){if(Ae(p)!==p)throw Error(V(188))}function fn(p){var N=p.alternate;if(!N){if(N=Ae(p),N===null)throw Error(V(188));return N!==p?null:p}for(var M=p,pe=N;;){var te=M.return;if(te===null)break;var Re=te.alternate;if(Re===null){if(pe=te.return,pe!==null){M=pe;continue}break}if(te.child===Re.child){for(Re=te.child;Re;){if(Re===M)return ve(te),p;if(Re===pe)return ve(te),N;Re=Re.sibling}throw Error(V(188))}if(M.return!==pe.return)M=te,pe=Re;else{for(var Ve=!1,ze=te.child;ze;){if(ze===M){Ve=!0,M=te,pe=Re;break}if(ze===pe){Ve=!0,pe=te,M=Re;break}ze=ze.sibling}if(!Ve){for(ze=Re.child;ze;){if(ze===M){Ve=!0,M=Re,pe=te;break}if(ze===pe){Ve=!0,pe=Re,M=te;break}ze=ze.sibling}if(!Ve)throw Error(V(189))}}if(M.alternate!==pe)throw Error(V(190))}if(M.tag!==3)throw Error(V(188));return M.stateNode.current===M?p:N}function Ie(){return!0}function Mn(){return!1}function Kn(p,N,M,pe){this.dispatchConfig=p,this._targetInst=N,this.nativeEvent=M,p=this.constructor.Interface;for(var te in p)p.hasOwnProperty(te)&&((N=p[te])?this[te]=N(M):te==="target"?this.target=pe:this[te]=M[te]);return this.isDefaultPrevented=(M.defaultPrevented!=null?M.defaultPrevented:M.returnValue===!1)?Ie:Mn,this.isPropagationStopped=Mn,this}n(Kn.prototype,{preventDefault:function(){this.defaultPrevented=!0;var p=this.nativeEvent;p&&(p.preventDefault?p.preventDefault():typeof p.returnValue!="unknown"&&(p.returnValue=!1),this.isDefaultPrevented=Ie)},stopPropagation:function(){var p=this.nativeEvent;p&&(p.stopPropagation?p.stopPropagation():typeof p.cancelBubble!="unknown"&&(p.cancelBubble=!0),this.isPropagationStopped=Ie)},persist:function(){this.isPersistent=Ie},isPersistent:Mn,destructor:function(){var p=this.constructor.Interface,N;for(N in p)this[N]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=Mn,this._dispatchInstances=this._dispatchListeners=null}}),Kn.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(p){return p.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null},Kn.extend=function(p){function N(){}function M(){return pe.apply(this,arguments)}var pe=this;N.prototype=pe.prototype;var te=new N;return n(te,M.prototype),M.prototype=te,M.prototype.constructor=M,M.Interface=n({},pe.Interface,p),M.extend=pe.extend,Qe(M),M},Qe(Kn);function Fn(p,N,M,pe){if(this.eventPool.length){var te=this.eventPool.pop();return this.call(te,p,N,M,pe),te}return new this(p,N,M,pe)}function pn(p){if(!(p instanceof this))throw Error(V(279));p.destructor(),10>this.eventPool.length&&this.eventPool.push(p)}function Qe(p){p.eventPool=[],p.getPooled=Fn,p.release=pn}var $n=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined");function wn(p,N){var M={};return M[p.toLowerCase()]=N.toLowerCase(),M["Webkit"+p]="webkit"+N,M["Moz"+p]="moz"+N,M}var Dn={animationend:wn("Animation","AnimationEnd"),animationiteration:wn("Animation","AnimationIteration"),animationstart:wn("Animation","AnimationStart"),transitionend:wn("Transition","TransitionEnd")},we={},qn={};$n&&(qn=document.createElement("div").style,"AnimationEvent"in window||(delete Dn.animationend.animation,delete Dn.animationiteration.animation,delete Dn.animationstart.animation),"TransitionEvent"in window||delete Dn.transitionend.transition);function Wn(p){if(we[p])return we[p];if(!Dn[p])return p;var N=Dn[p],M;for(M in N)if(N.hasOwnProperty(M)&&M in qn)return we[p]=N[M];return p}var _n=Wn("animationend"),rt=Wn("animationiteration"),st=Wn("animationstart"),P=Wn("transitionend"),D=null;function R(p){if(D===null)try{var N=("require"+Math.random()).slice(0,7);D=(J&&J[N])("timers").setImmediate}catch(M){D=function(pe){var te=new MessageChannel;te.port1.onmessage=pe,te.port2.postMessage(void 0)}}return D(p)}var d=W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,u=d[11],h=d[12],g=W.unstable_batchedUpdates,O=Be.IsSomeRendererActing,r=typeof ce.unstable_flushAllWithoutAsserting=="function",o=ce.unstable_flushAllWithoutAsserting||function(){for(var p=!1;u();)p=!0;return p};function i(p){try{o(),R(function(){o()?i(p):p()})}catch(N){p(N)}}var A=0,T=!1,j=W.findDOMNode,l=W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,K=l[0],f=l[4],t=l[5],v=l[6],c=l[7],I=l[8],B=l[9],L=l[10];function Z(){}function Q(p,N){if(!p)return[];if(p=fn(p),!p)return[];for(var M=p,pe=[];;){if(M.tag===5||M.tag===6||M.tag===1||M.tag===0){var te=M.stateNode;N(te)&&pe.push(te)}if(M.child)M.child.return=M,M=M.child;else{if(M===p)return pe;for(;!M.sibling;){if(!M.return||M.return===p)return pe;M=M.return}M.sibling.return=M.return,M=M.sibling}}}function H(p,N){if(p&&!p._reactInternalFiber){var M=""+p;throw p=Array.isArray(p)?"an array":p&&p.nodeType===1&&p.tagName?"a DOM node":M==="[object Object]"?"object with keys {"+Object.keys(p).join(", ")+"}":M,Error(V(286,N,p))}}var Fe={renderIntoDocument:function(p){var N=document.createElement("div");return W.render(p,N)},isElement:function(p){return b.isValidElement(p)},isElementOfType:function(p,N){return b.isValidElement(p)&&p.type===N},isDOMComponent:function(p){return!(!p||p.nodeType!==1||!p.tagName)},isDOMComponentElement:function(p){return!!(p&&b.isValidElement(p)&&p.tagName)},isCompositeComponent:function(p){return Fe.isDOMComponent(p)?!1:p!=null&&typeof p.render=="function"&&typeof p.setState=="function"},isCompositeComponentWithType:function(p,N){return Fe.isCompositeComponent(p)?p._reactInternalFiber.type===N:!1},findAllInRenderedTree:function(p,N){return H(p,"findAllInRenderedTree"),p?Q(p._reactInternalFiber,N):[]},scryRenderedDOMComponentsWithClass:function(p,N){return H(p,"scryRenderedDOMComponentsWithClass"),Fe.findAllInRenderedTree(p,function(M){if(Fe.isDOMComponent(M)){var pe=M.className;typeof pe!="string"&&(pe=M.getAttribute("class")||"");var te=pe.split(/\s+/);if(!Array.isArray(N)){if(N===void 0)throw Error(V(11));N=N.split(/\s+/)}return N.every(function(Re){return te.indexOf(Re)!==-1})}return!1})},findRenderedDOMComponentWithClass:function(p,N){if(H(p,"findRenderedDOMComponentWithClass"),p=Fe.scryRenderedDOMComponentsWithClass(p,N),p.length!==1)throw Error("Did not find exactly one match (found: "+p.length+") for class:"+N);return p[0]},scryRenderedDOMComponentsWithTag:function(p,N){return H(p,"scryRenderedDOMComponentsWithTag"),Fe.findAllInRenderedTree(p,function(M){return Fe.isDOMComponent(M)&&M.tagName.toUpperCase()===N.toUpperCase()})},findRenderedDOMComponentWithTag:function(p,N){if(H(p,"findRenderedDOMComponentWithTag"),p=Fe.scryRenderedDOMComponentsWithTag(p,N),p.length!==1)throw Error("Did not find exactly one match (found: "+p.length+") for tag:"+N);return p[0]},scryRenderedComponentsWithType:function(p,N){return H(p,"scryRenderedComponentsWithType"),Fe.findAllInRenderedTree(p,function(M){return Fe.isCompositeComponentWithType(M,N)})},findRenderedComponentWithType:function(p,N){if(H(p,"findRenderedComponentWithType"),p=Fe.scryRenderedComponentsWithType(p,N),p.length!==1)throw Error("Did not find exactly one match (found: "+p.length+") for componentType:"+N);return p[0]},mockComponent:function(p,N){return N=N||p.mockTagName||"div",p.prototype.render.mockImplementation(function(){return b.createElement(N,null,this.props.children)}),this},nativeTouchData:function(p,N){return{touches:[{pageX:p,pageY:N}]}},Simulate:null,SimulateNative:{},act:function(p){function N(){A--,O.current=M,h.current=pe}T===!1&&(T=!0,console.error("act(...) is not supported in production builds of React, and might not behave as expected.")),A++;var M=O.current,pe=h.current;O.current=!0,h.current=!0;try{var te=g(p)}catch(Re){throw N(),Re}if(te!==null&&typeof te=="object"&&typeof te.then=="function")return{then:function(Re,Ve){te.then(function(){1<A||r===!0&&M===!0?(N(),Re()):i(function(ze){N(),ze?Ve(ze):Re()})},function(ze){N(),Ve(ze)})}};try{A!==1||r!==!1&&M!==!1||o(),N()}catch(Re){throw N(),Re}return{then:function(Re){Re()}}}};function dn(p){return function(N,M){if(b.isValidElement(N))throw Error(V(228));if(Fe.isCompositeComponent(N))throw Error(V(229));var pe=f[p],te=new Z;te.target=N,te.type=p.toLowerCase();var Re=K(N),Ve=new Kn(pe,Re,te,N);Ve.persist(),n(Ve,M),pe.phasedRegistrationNames?t(Ve):v(Ve),W.unstable_batchedUpdates(function(){c(N),L(Ve)}),I()}}Fe.Simulate={};for(var yn in f)Fe.Simulate[yn]=dn(yn);function bn(p,N){return function(M,pe){var te=new Z(p);n(te,pe),Fe.isDOMComponent(M)?(M=j(M),te.target=M,B(N,1,document,te)):M.tagName&&(te.target=M,B(N,1,document,te))}}[["abort","abort"],[_n,"animationEnd"],[rt,"animationIteration"],[st,"animationStart"],["blur","blur"],["canplaythrough","canPlayThrough"],["canplay","canPlay"],["cancel","cancel"],["change","change"],["click","click"],["close","close"],["compositionend","compositionEnd"],["compositionstart","compositionStart"],["compositionupdate","compositionUpdate"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["dragstart","dragStart"],["drag","drag"],["drop","drop"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],["ended","ended"],["error","error"],["focus","focus"],["input","input"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["loadstart","loadStart"],["loadstart","loadStart"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["mousedown","mouseDown"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["playing","playing"],["progress","progress"],["ratechange","rateChange"],["scroll","scroll"],["seeked","seeked"],["seeking","seeking"],["selectionchange","selectionChange"],["stalled","stalled"],["suspend","suspend"],["textInput","textInput"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchmove","touchMove"],["touchstart","touchStart"],[P,"transitionEnd"],["volumechange","volumeChange"],["waiting","waiting"],["wheel","wheel"]].forEach(function(p){var N=p[1];Fe.SimulateNative[N]=bn(N,p[0])}),J.exports=Fe.default||Fe}).call(this,e("hOG+")(Tn))},JjdP:function(Tn,gn,e){"use strict";e.r(gn);var J=e("9og8"),n=e("WmNS"),b=e.n(n),W=e("LtsZ"),ce=`import React, { useRef } from 'react';
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
      width: '25%',
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

export default Demo;`,V=`import { get, set, cloneDeep } from 'lodash-es';

// \u540E\u9762\u4E09\u4E2A\u53C2\u6570\u90FD\u662F\u5185\u90E8\u9012\u5F52\u4F7F\u7528\u7684\uFF0C\u5C06schema\u7684\u6811\u5F62\u7ED3\u6784\u6241\u5E73\u5316\u6210\u4E00\u5C42, \u6BCF\u4E2Aitem\u7684\u7ED3\u6784
// {
//   parent: '#',
//   schema: ...,
//   children: []
// }

// TODO: \u53D1\u5E03\u540E\u53BB\u6389
window.log1 = value => {
  console.log('%ccommon:', 'color: #00A7F7; font-weight: 500;', value);
};

window.log2 = value => {
  console.log('%cwarning:', 'color: #f50; font-weight: 500;', value);
};

window.log3 = value => {
  console.log('%csuccess:', 'color: #87d068; font-weight: 500;', value);
};

window.log4 = value => {
  console.log('%cspecial:', 'color: #722ed1; font-weight: 500;', value);
};

export function isUrl(string) {
  const protocolRE = /^(?:\\w+:)?\\/\\/(\\S+)$/;
  // const domainRE = /^[^\\s\\.]+\\.\\S{2,}$/;
  if (typeof string !== 'string') return false;
  return protocolRE.test(string);
}

export function isCheckBoxType(schema, readOnly) {
  if (readOnly) return false;
  if (schema.widget === 'checkbox') return true;
  if (schema && schema.type === 'boolean') {
    if (schema.enum) return false;
    if (schema.widget === undefined) return true;
    return false;
  }
}

// a[].b.c => a.b.c
function removeBrackets(string) {
  if (typeof string === 'string') {
    return string.replace(/\\[\\]/g, '');
  } else {
    return string;
  }
}

export function getParentPath(path) {
  if (typeof path === 'string') {
    const pathArr = path.split('.');
    if (pathArr.length === 1) {
      return '#';
    }
    pathArr.pop();
    return pathArr.join('.');
  }
  return '#';
}

export function getValueByPath(formData, path) {
  if (path === '#' || !path) {
    return formData || {};
  } else if (typeof path === 'string') {
    return get(formData, path);
  } else {
    console.error('path has to be a string');
  }
}

//  path: 'a.b[1].c[0]' => { id: 'a.b[].c[]'  dataIndex: [1,0] }
export function destructDataPath(path) {
  let id;
  let dataIndex;
  if (path === '#') {
    return { id: '#', dataIndex: [] };
  }
  if (typeof path !== 'string') {
    throw Error(\`path \${path} is not a string!!! Something wrong here\`);
  }
  const pattern = /\\[[0-9]+\\]/g;
  const matchList = path.match(pattern);
  if (!matchList) {
    id = path;
  } else {
    id = path.replace(pattern, '[]');
    // \u8FD9\u4E2A\u662Fmatch\u4E0B\u6765\u7684\u7ED3\u679C\uFF0C\u53EF\u5B89\u5168\u5904\u7406
    dataIndex = matchList.map(item =>
      Number(item.substring(1, item.length - 1))
    );
  }
  return { id, dataIndex };
}

// id: 'a.b[].c[]'  dataIndex: [1,0] =>  'a.b[1].c[0]'
export function getDataPath(id, dataIndex) {
  if (id === '#') {
    return id;
  }
  if (typeof id !== 'string') {
    throw Error(\`id \${id} is not a string!!! Something wrong here\`);
  }
  let _id = id;
  if (Array.isArray(dataIndex)) {
    // const matches = id.match(/\\[\\]/g) || [];
    // const count = matches.length;
    dataIndex.forEach(item => {
      _id = _id.replace(/\\[\\]/, \`[\${item}]\`);
    });
  }
  return removeBrackets(_id);
}

export function isObjType(schema) {
  return schema && schema.type === 'object' && schema.properties;
}

// TODO: \u652F\u6301\u975E\u5BF9\u8C61\u7C7B\u578B\u6570\u7EC4\u9879
export function isListType(schema) {
  return (
    schema &&
    schema.type === 'array' &&
    isObjType(schema.items) &&
    schema.enum === undefined
  );
}

// TODO: \u68C0\u9A8C\u662F\u5426\u4E22\u8FDB\u53BB\u5404\u79CDschema\u90FD\u80FD\u515C\u5E95\u4E0D\u4F1Acrash
export function flattenSchema(_schema = {}, name = '#', parent, result = {}) {
  const schema = clone(_schema); // TODO: \u662F\u5426\u9700\u8981deepClone\uFF0C\u8FD9\u4E2A\u82B1\u8D39\u662F\u4E0D\u662F\u6709\u70B9\u5927
  let _name = name;
  if (!schema.$id) {
    schema.$id = _name; // \u7ED9\u751F\u6210\u7684schema\u6DFB\u52A0\u4E00\u4E2A\u552F\u4E00\u6807\u8BC6\uFF0C\u65B9\u4FBF\u4ECEschema\u4E2D\u76F4\u63A5\u8BFB\u53D6
  }
  const children = [];
  if (isObjType(schema)) {
    Object.entries(schema.properties).forEach(([key, value]) => {
      const _key = isListType(value) ? key + '[]' : key;
      const uniqueName = _name === '#' ? _key : _name + '.' + _key;
      children.push(uniqueName);
      flattenSchema(value, uniqueName, _name, result);
    });
    // schema.properties = {};
  }
  if (isListType(schema)) {
    Object.entries(schema.items.properties).forEach(([key, value]) => {
      const _key = isListType(value) ? key + '[]' : key;
      const uniqueName = _name === '#' ? _key : _name + '.' + _key;
      children.push(uniqueName);
      flattenSchema(value, uniqueName, _name, result);
    });
    // schema.items.properties = {};
  }

  const rules = Array.isArray(schema.rules) ? [...schema.rules] : [];
  if (['boolean', 'function', 'string'].indexOf(typeof schema.required) > -1) {
    rules.push({ required: schema.required }); // TODO: \u4E07\u4E00\u5185\u90E8\u5DF2\u7ECF\u7528\u91CD\u590D\u7684required\u89C4\u5219\uFF1F
  }

  if (schema.type) {
    // Check: \u4E3A\u5565\u4E00\u5B9A\u8981\u6709type\uFF1F
    // TODO: \u6CA1\u6709\u60F3\u597D validation \u7684\u90E8\u5206
    result[_name] = { parent, schema: schema, children, rules };
  }
  return result;
}

//////////   old

function stringContains(str, text) {
  return str.indexOf(text) > -1;
}

export const isObject = a =>
  stringContains(Object.prototype.toString.call(a), 'Object');

// \u514B\u9686\u5BF9\u8C61
// function clone1(data) {
//   // data = functionToString(data);
//   try {
//     return JSON.parse(JSON.stringify(data));
//   } catch (e) {
//     return data;
//   }
// }

export const clone = cloneDeep;
// export const clone = clone1;

// export const functionToString = data => {
//   let result;
//   if (isObject(data)) {
//     result = {};
//     Object.keys(data).forEach(key => {
//       result[key] = functionToString(data[key]);
//     });
//     return result;
//   } else if (typeof data === 'function') {
//     return result.toString();
//   }
//   return data;
// };

// '3' => true, 3 => true, undefined => false
export function isLooselyNumber(num) {
  if (typeof num === 'number') return true;
  if (typeof num === 'string') {
    return !Number.isNaN(Number(num));
  }
  return false;
}

export function isCssLength(str) {
  if (typeof str !== 'string') return false;
  return str.match(/^([0-9])*(%|px|rem|em)$/i);
}

// \u6DF1\u5EA6\u5BF9\u6BD4
export function isDeepEqual(param1, param2) {
  if (param1 === undefined && param2 === undefined) return true;
  else if (param1 === undefined || param2 === undefined) return false;
  if (param1 === null && param2 === null) return true;
  else if (param1 === null || param2 === null) return false;
  else if (param1.constructor !== param2.constructor) return false;

  if (param1.constructor === Array) {
    if (param1.length !== param2.length) return false;
    for (let i = 0; i < param1.length; i++) {
      if (param1[i].constructor === Array || param1[i].constructor === Object) {
        if (!isDeepEqual(param1[i], param2[i])) return false;
      } else if (param1[i] !== param2[i]) return false;
    }
  } else if (param1.constructor === Object) {
    if (Object.keys(param1).length !== Object.keys(param2).length) return false;
    for (let i = 0; i < Object.keys(param1).length; i++) {
      const key = Object.keys(param1)[i];
      if (
        param1[key] &&
        typeof param1[key] !== 'number' &&
        (param1[key].constructor === Array ||
          param1[key].constructor === Object)
      ) {
        if (!isDeepEqual(param1[key], param2[key])) return false;
      } else if (param1[key] !== param2[key]) return false;
    }
  } else if (param1.constructor === String || param1.constructor === Number) {
    return param1 === param2;
  }
  return true;
}

// \u65F6\u95F4\u7EC4\u4EF6
export function getFormat(format) {
  let dateFormat;
  switch (format) {
    case 'date':
      dateFormat = 'YYYY-MM-DD';
      break;
    case 'time':
      dateFormat = 'HH:mm:ss';
      break;
    case 'dateTime':
      dateFormat = 'YYYY-MM-DD HH:mm:ss';
      break;
    case 'week':
      dateFormat = 'YYYY-w';
      break;
    case 'year':
      dateFormat = 'YYYY';
      break;
    case 'quarter':
      dateFormat = 'YYYY-Q';
      break;
    case 'month':
      dateFormat = 'YYYY-MM';
      break;
    default:
      // dateTime
      if (typeof format === 'string') {
        dateFormat = format;
      } else {
        dateFormat = 'YYYY-MM-DD';
      }
  }
  return dateFormat;
}

export function hasRepeat(list) {
  return list.find(
    (x, i, self) =>
      i !== self.findIndex(y => JSON.stringify(x) === JSON.stringify(y))
  );
}

// ----------------- schema \u76F8\u5173

// \u5408\u5E76propsSchema\u548CUISchema\u3002\u7531\u4E8E\u4E24\u8005\u7684\u903B\u8F91\u76F8\u5173\u6027\uFF0C\u5408\u5E76\u4E3A\u4E00\u4E2A\u5927schema\u80FD\u7B80\u5316\u5185\u90E8\u5904\u7406
export function combineSchema(propsSchema = {}, uiSchema = {}) {
  const propList = getChildren(propsSchema);
  const newList = propList.map(p => {
    const { name } = p;
    const { type, enum: options, properties, items } = p.schema;
    const isObj = type === 'object' && properties;
    const isArr = type === 'array' && items && !options; // enum + array \u4EE3\u8868\u7684\u591A\u9009\u6846\uFF0C\u6CA1\u6709sub
    const ui = name && uiSchema[p.name];
    if (!ui) {
      return p;
    }
    // \u5982\u679C\u662Flist\uFF0C\u9012\u5F52\u5408\u5E76items
    if (isArr) {
      const newItems = combineSchema(items, ui.items || {});
      return { ...p, schema: { ...p.schema, ...ui, items: newItems } };
    }
    // object\u9012\u5F52\u5408\u5E76\u6574\u4E2Aschema
    if (isObj) {
      const newSchema = combineSchema(p.schema, ui);
      return { ...p, schema: newSchema };
    }
    return { ...p, schema: { ...p.schema, ...ui } };
  });

  const newObj = {};
  newList.forEach(s => {
    newObj[s.name] = s.schema;
  });

  const topLevelUi = {};
  Object.keys(uiSchema).forEach(key => {
    if (typeof key === 'string' && key.substring(0, 3) === 'ui:') {
      topLevelUi[key] = uiSchema[key];
    }
  });
  if (isEmpty(newObj)) {
    return { ...propsSchema, ...topLevelUi };
  }
  return { ...propsSchema, ...topLevelUi, properties: newObj };
}

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

// \u83B7\u5F97propsSchema\u7684children
function getChildren(schema) {
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
    schemaSubs = items;
  }
  return Object.keys(schemaSubs).map(name => ({
    schema: schemaSubs[name],
    name,
  }));
}

// \u5408\u5E76\u591A\u4E2Aschema\u6811\uFF0C\u6BD4\u5982\u4E00\u4E2Aschema\u7684\u6811\u8282\u70B9\u662F\u53E6\u4E00\u4E2Aschema
export function combine() {}

// \u4EE3\u66FFeval\u7684\u51FD\u6570
export const parseString = string =>
  Function('"use strict";return (' + string + ')')();

// \u89E3\u6790\u51FD\u6570\u5B57\u7B26\u4E32\u503C
export const evaluateString = (string, formData, rootValue) =>
  Function(\`"use strict";
    const rootValue = \${JSON.stringify(rootValue)};
    const formData = \${JSON.stringify(formData)};
    return (\${string})\`)();

// \u5224\u65ADschema\u7684\u503C\u662F\u662F\u5426\u662F\u201C\u51FD\u6570\u201D
// JSON\u65E0\u6CD5\u4F7F\u7528\u51FD\u6570\u503C\u7684\u53C2\u6570\uFF0C\u6240\u4EE5\u4F7F\u7528"{{...}}"\u6765\u6807\u8BB0\u4E3A\u51FD\u6570\uFF0C\u4E5F\u53EF\u4F7F\u7528@\u6807\u8BB0\uFF0C\u4E0D\u63A8\u8350\u3002
export function isExpression(func) {
  // if (typeof func === 'function') {
  //   const funcString = func.toString();
  //   return (
  //     funcString.indexOf('formData') > -1 ||
  //     funcString.indexOf('rootValue') > -1
  //   );
  // }
  // \u4E0D\u518D\u5141\u8BB8\u51FD\u6570\u5F0F\u7684\u8868\u8FBE\u5F0F\u4E86\uFF01
  if (typeof func !== 'string') return false;
  // \u8FD9\u6837\u7684pattern {{.....}}
  const pattern = /^{{(.+)}}$/;
  const reg1 = /^{{(function.+)}}$/;
  const reg2 = /^{{(.+=>.+)}}$/;
  if (
    typeof func === 'string' &&
    func.match(pattern) &&
    !func.match(reg1) &&
    !func.match(reg2)
  ) {
    return true;
  }
  return false;
}

export function parseSingleExpression(func, formData = {}, dataPath) {
  const parentPath = getParentPath(dataPath);
  const parent = getValueByPath(formData, parentPath) || {};
  if (typeof func === 'string') {
    const funcBody = func.substring(2, func.length - 2);
    const str = \`
    return \${funcBody
      .replace(/formData/g, JSON.stringify(formData))
      .replace(/rootValue/g, JSON.stringify(parent))}\`;

    try {
      return Function(str)();
    } catch (error) {
      console.log(error, func, dataPath);
      return func;
    }
    // const funcBody = func.substring(2, func.length - 2);
    // //TODO: \u8FD9\u6837\u6709\u95EE\u9898\uFF0C\u4F8B\u5982 a.b.indexOf(), \u4F1A\u628A a.b.indexOf \u5F53\u505A\u503C
    // const match1 = /formData.([a-zA-Z0-9.$_\\[\\]]+)/g;
    // const match2 = /rootValue.([a-zA-Z0-9.$_\\[\\]]+)/g;
    // const str = \`
    // return (\${funcBody
    //   .replaceAll(match1, (v, m1) =>
    //     JSON.stringify(getValueByPath(formData, m1))
    //   )
    //   .replaceAll(match2, (v, m1) =>
    //     JSON.stringify(getValueByPath(parent, m1))
    //   )})\`;
    // try {
    //   return Function(str)();
    // } catch (error) {
    //   console.log(error);
    //   return func;
    // }
  } else return func;
}

export const schemaContainsExpression = (schema, shallow = true) => {
  if (isObject(schema)) {
    return Object.keys(schema).some(key => {
      const value = schema[key];
      if (typeof value === 'string') {
        return isExpression(value);
      } else if (
        typeof key === 'string' &&
        key.toLowerCase().indexOf('props') > -1
      ) {
        const propsObj = schema[key];
        if (isObject(propsObj)) {
          return Object.keys(propsObj).some(k => {
            return isExpression(propsObj[k]);
          });
        }
      } else if (!shallow && isObject(value)) {
        return schemaContainsExpression(value, false);
      }
      return false;
    });
  } else {
    return false;
  }
};

// TODO: \u4E24\u4E2A\u4F18\u5316\uFF0C1. \u53EF\u4EE5\u901A\u8FC7\u8868\u8FBE\u5F0F\u7684path\u6765\u5224\u65AD\uFF0C\u907F\u514D\u4E00\u4E9B\u91CD\u590D\u8BA1\u7B97
export const parseAllExpression = (_schema, formData, dataPath) => {
  const schema = clone(_schema);
  Object.keys(schema).forEach(key => {
    const value = schema[key];
    if (isObject(value)) {
      // TODO: dataPath \u8FD9\u8FB9\u8981\u5904\u7406\u4E00\u4E0B\uFF0C\u5426\u5219rootValue\u7C7B\u7684\u6CA1\u6709\u6548\u679C
      schema[key] = parseAllExpression(value, formData, dataPath);
    } else if (isExpression(value)) {
      schema[key] = parseSingleExpression(value, formData, dataPath);
      // console.log(
      //   formData.materialType,
      //   dataPath,
      //   parseSingleExpression(value, formData, dataPath)
      // );
    } else if (
      typeof key === 'string' &&
      key.toLowerCase().indexOf('props') > -1
    ) {
      // \u6709\u53EF\u80FD\u53EB xxxProps
      const propsObj = schema[key];
      if (isObject(propsObj)) {
        Object.keys(propsObj).forEach(k => {
          schema[key][k] = parseSingleExpression(
            propsObj[k],
            formData,
            dataPath
          );
        });
      }
    }
  });
  return schema;
};

// \u5224\u65ADschema\u4E2D\u662F\u5426\u6709\u5C5E\u6027\u503C\u662F\u51FD\u6570\u8868\u8FBE\u5F0F
export function isFunctionSchema(schema) {
  return Object.keys(schema).some(key => {
    if (typeof schema[key] === 'function') {
      return true;
    } else if (typeof schema[key] === 'string') {
      return isExpression(schema[key]);
    } else if (typeof schema[key] === 'object') {
      return isFunctionSchema(schema[key]);
    } else {
      return false;
    }
  });
}

// \u4F8B\u5982\u5F53\u524Ditem\u7684id = '#/obj/input'  propName: 'ui:labelWidth' \u5F80\u4E0A\u4E00\u76F4\u627E\uFF0C\u76F4\u5230\u627E\u5230\u7B2C\u4E00\u4E2A\u4E0D\u662Fundefined\u7684\u503C TODO: \u770B\u770B\u662F\u5426ok
export const getParentProps = (propName, id, flatten) => {
  try {
    const item = flatten[id];
    if (item.schema[propName] !== undefined) return item.schema[propName];
    if (item && item.parent) {
      const parentSchema = flatten[item.parent].schema;
      if (parentSchema[propName] !== undefined) {
        return parentSchema[propName];
      } else {
        return getParentProps(propName, item.parent, flatten);
      }
    }
  } catch (error) {
    return undefined;
  }
};

export const getSaveNumber = () => {
  const searchStr = localStorage.getItem('SAVES');
  if (searchStr) {
    try {
      const saves = JSON.parse(searchStr);
      const length = saves.length;
      if (length) return length + 1;
    } catch (error) {
      return 1;
    }
  } else {
    return 1;
  }
};

export function looseJsonParse(obj) {
  return Function('"use strict";return (' + obj + ')')();
}

// \u83B7\u5F97propsSchema\u7684children
function getChildren2(schema) {
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

export const oldSchemaToNew = schema => {
  if (schema && schema.propsSchema) {
    const { propsSchema, ...rest } = schema;
    return { schema: propsSchema, ...rest };
  }
  return schema;
};

export const newSchemaToOld = setting => {
  if (setting && setting.schema) {
    const { schema, ...rest } = setting;
    return { propsSchema: schema, ...rest };
  }
  return setting;
};

// from FR

export const getEnum = schema => {
  if (!schema) return undefined;
  const itemEnum = schema && schema.items && schema.items.enum;
  const schemaEnum = schema && schema.enum;
  return itemEnum ? itemEnum : schemaEnum;
};

export const getArray = (arr, defaultValue = []) => {
  if (Array.isArray(arr)) return arr;
  return defaultValue;
};

export const isEmail = value => {
  const regex = '^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(.[a-zA-Z0-9_-]+)+$';
  if (value && new RegExp(regex).test(value)) {
    return true;
  }
  return false;
};

export function defaultGetValueFromEvent(valuePropName, ...args) {
  const event = args[0];
  if (event && event.target && valuePropName in event.target) {
    return event.target[valuePropName];
  }
  return event;
}

export const getKeyFromPath = path => {
  try {
    const keyList = path.split('.');
    const last = keyList.slice(-1)[0];
    return last;
  } catch (error) {
    console.error(error, 'getKeyFromPath');
    return '';
  }
};

// \u66F4\u591A\u7684\u503C\u83B7\u53D6
export const getDisplayValue = (value, schema) => {
  if (typeof value === 'boolean') {
    return value ? 'yes' : 'no';
  }
  if (isObjType(schema) || isListType(schema)) {
    return '-';
  }
  if (Array.isArray(schema.enum) && Array.isArray(schema.enumNames)) {
    try {
      return schema.enumNames[schema.enum.indexOf(value)];
    } catch (error) {
      return value;
    }
  }
  return value;
};

// \u53BB\u6389\u6570\u7EC4\u91CC\u7684\u7A7A\u5143\u7D20 {a: [null, {x:1}]} => {a: [{x:1}]}
export const removeEmptyItemFromList = formData => {
  let result = {};
  if (isObject(formData)) {
    Object.keys(formData).forEach(key => {
      result[key] = removeEmptyItemFromList(formData[key]);
    });
  } else if (Array.isArray(formData)) {
    result = formData.filter(item => {
      if (item && JSON.stringify(item) !== '{}') {
        return true;
      }
      return false;
    });
  } else {
    result = formData;
  }
  return result;
};

export const getDescriptorFromSchema = ({ schema, isRequired = true }) => {
  let result = {};
  let singleResult = {};
  if (schema.hidden === true) return { validator: () => true };
  if (isObjType(schema)) {
    result.type = 'object';
    if (isRequired && schema.required === true) {
      result.required = true;
    }
    result.fields = {};
    Object.keys(schema.properties).forEach(key => {
      const item = schema.properties[key];
      // \u517C\u5BB9\u65E7\u7684\uFF01
      if (Array.isArray(schema.required) && schema.required.indexOf(key) > -1) {
        item.required = true;
      }
      result.fields[key] = getDescriptorFromSchema({
        schema: item,
        isRequired,
      });
    });
  } else if (isListType(schema)) {
    result.type = 'array';
    if (isRequired && schema.required === true) {
      result.required = true;
    }
    if (typeof schema.min === 'number') {
      result.min = schema.min;
    }
    if (typeof schema.max === 'number') {
      result.max = schema.max;
    }
    result.defaultField = { type: 'object', fields: {} }; // \u76EE\u524D\u5C31\u9ED8\u8BA4\u53EA\u6709object\u7C7B\u578B\u7684 TODO:
    Object.keys(schema.items.properties).forEach(key => {
      const item = schema.items.properties[key];
      // \u517C\u5BB9\u65E7\u7684\uFF01
      if (Array.isArray(schema.required) && schema.required.indexOf(key) > -1) {
        item.required = true;
      }
      result.defaultField.fields[key] = getDescriptorFromSchema({
        schema: item,
        isRequired,
      });
    });
  } else {
    // \u5355\u4E2A\u7684\u903B\u8F91
    const processRule = item => {
      if (schema.type) return { ...item, type: schema.type };
      if (item.pattern && typeof item.pattern === 'string') {
        return { ...item, pattern: new RegExp(item.pattern) };
      }
      return item;
    };
    const { required, ...rest } = schema;

    ['type', 'pattern', 'min', 'max', 'len'].forEach(key => {
      if (Object.keys(rest).indexOf(key) > -1) {
        singleResult[key] = rest[key];
      }
    });

    switch (schema.type) {
      case 'range':
        const rangeValidator = {
          validator: (rule, value) => {
            if (!value) return true;
            if (Array.isArray(value)) {
              // range\u7EC4\u4EF6\u70B9\u51FBclear\uFF0C\u4F1A\u53D8\u6210 ['','']
              // range\u7EC4\u4EF6\u5BF9\u5E94\u7684\u503Cbind\u7684\u65F6\u5019\uFF0C\u4F1A\u53D8\u6210 [null,null]
              const validValue =
                typeof value[0] === 'string' && typeof value[1] === 'string';
              const validValue2 =
                value[0] === undefined && value[1] === undefined;
              if (validValue || validValue2) {
                return true;
              }
              return false;
            }
            return false;
          },
          type: 'array',
          message: '\${title}\u5FC5\u586B',
        };
        singleResult = rangeValidator;
        break;
      case 'html':
        singleResult.type = 'string';
        break;
      default:
        break;
    }
    switch (schema.format) {
      case 'email':
      case 'url':
        singleResult.type = schema.format;
        break;
      default:
        break;
    }

    let requiredRule;
    if (isRequired && schema.required === true) {
      requiredRule = { required: true, type: singleResult.type || 'string' };
    }

    if (schema.rules) {
      if (Array.isArray(schema.rules)) {
        const _rules = [];
        schema.rules.forEach(item => {
          if (item.required === true) {
            if (isRequired) {
              requiredRule = item;
            }
          } else {
            _rules.push(processRule(item));
          }
        });
        result = [singleResult, ..._rules];
      } else if (isObject(schema.rules)) {
        // TODO: \u89C4\u8303\u4E0A\u4E0D\u5141\u8BB8rules\u662Fobject\uFF0C\u7701\u4E00\u70B9\u4E8B\u513F
        result = [singleResult, processRule(schema.rules)];
      } else {
        result = singleResult;
      }
    } else {
      result = singleResult;
    }

    if (requiredRule) {
      if (Array.isArray(result)) {
        result.push(requiredRule);
      } else if (isObject(result)) {
        result = [result, requiredRule];
      }
    }

    if (schema.format === 'image') {
      const imgValidator = {
        validator: (rule, value) => {
          const pattern = /([/|.|w|s|-])*.(jpg|gif|png|bmp|apng|webp|jpeg|json)/;
          if (!value) return true; // \u8FD9\u91CC\u5224\u65AD\u5BBD\u4E00\u70B9\uFF0Cundefined\u3001null\u3001'' \u90FD\u5F53\u505A\u6CA1\u6709\u586B\u5199
          return !!pattern.exec(value) || isUrl(value);
        },
        message: '\${title}\u7684\u7C7B\u578B\u4E0D\u662Fimage',
      };
      if (Array.isArray(result)) {
        result.push(imgValidator);
      } else if (isObject(result)) {
        result = [result, imgValidator];
      }
    }
  }
  return result;
};

// async-validator \u4EA7\u51FA\u7684path\u6CA1\u6CD5\u7528\uFF0C\u8F6C\u4E00\u4E0B
// "list.1.userName" => "list[1].userName"
export const formatPathFromValidator = err => {
  const errArr = err.split('.');
  return errArr
    .map(item => {
      if (isNaN(Number(item))) {
        return item;
      } else {
        return \`[\${item}]\`;
      }
    })
    .reduce((a, b) => {
      if (b[0] === '[' || a === '') {
        return a + b;
      } else {
        return a + '.' + b;
      }
    }, '');
};

// schema = {
//   type: 'object',
//   properties: {
//     x: {
//       type: 'object',
//       properties: {
//         y: {
//           type: 'string',
//           required: true,
//         },
//       },
//     },
//   },
// };
// path = 'x.y'
// return {required: true, message?: 'xxxx'}
export const isPathRequired = (path, schema) => {
  let pathArr = path.split('.');
  while (pathArr.length > 0) {
    let [_path, ...rest] = pathArr;
    _path = _path.split('[')[0];
    let childSchema;
    if (isObjType(schema)) {
      childSchema = schema.properties[_path];
    } else if (isListType(schema)) {
      childSchema = schema.items.properties[_path];
    }
    pathArr = rest;
    if (childSchema) {
      return isPathRequired(rest.join('.'), childSchema);
    }

    // \u5355\u4E2A\u7684\u903B\u8F91
    let result = { required: false };
    if (schema.required === true) {
      result.required = true;
    }
    if (schema.rules) {
      const requiredItem = schema.rules.find(item => item.required);
      if (requiredItem) {
        result = requiredItem;
      }
    }
    return result;
  }
};

// _path \u53EA\u4F9B\u5185\u90E8\u9012\u5F52\u4F7F\u7528
export const generateDataSkeleton = (schema, formData, _path = '') => {
  let result = {};
  let _formData = clone(formData);
  result = _formData;
  if (isObjType(schema)) {
    if (_formData === undefined || typeof _formData !== 'object') {
      _formData = {};
      result = {};
    }
    Object.keys(schema.properties).forEach(key => {
      const childSchema = schema.properties[key];
      const childData = _formData[key];
      const childResult = generateDataSkeleton(
        childSchema,
        childData,
        \`\${_path}.\${key}\`
      );
      result[key] = childResult;
    });
  } else if (_formData !== undefined) {
    // result = _formData;
  } else {
    if (schema.default !== undefined) {
      result = clone(schema.default);
    } else if (schema.type === 'boolean') {
      // result = false;
      result = undefined;
    } else {
      result = undefined;
    }
  }
  return result;
};

export const translateMessage = (msg, schema) => {
  if (typeof msg !== 'string') {
    return '';
  }
  if (!schema) return msg;
  msg = msg.replace('\${title}', schema.title);
  msg = msg.replace('\${type}', schema.format || schema.type);
  // \u517C\u5BB9\u4EE3\u7801
  if (typeof schema.min === 'number') {
    msg = msg.replace('\${min}', schema.min);
  }
  if (typeof schema.max === 'number') {
    msg = msg.replace('\${max}', schema.max);
  }
  if (schema.rules) {
    const minRule = schema.rules.find(r => r.min !== undefined);
    if (minRule) {
      msg = msg.replace('\${min}', minRule.min);
    }
    const maxRule = schema.rules.find(r => r.max !== undefined);
    if (maxRule) {
      msg = msg.replace('\${max}', maxRule.max);
    }
    const lenRule = schema.rules.find(r => r.len !== undefined);
    if (lenRule) {
      msg = msg.replace('\${len}', lenRule.len);
    }
    const patternRule = schema.rules.find(r => r.pattern !== undefined);
    if (patternRule) {
      msg = msg.replace('\${pattern}', patternRule.pattern);
    }
  }
  return msg;
};

// "objectName": {
//   "title": "\u5BF9\u8C61",
//   "description": "\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",
//   "type": "object",
//   "properties": {

//   }
// }

// "listName": {
//   "title": "\u5BF9\u8C61\u6570\u7EC4",
//   "description": "\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",
//   "type": "array",
//   "items": {
//     "type": "object",
//     "properties": {

//     }
//   }
// }

const changeSchema = (_schema, singleChange) => {
  let schema = clone(_schema);
  schema = singleChange(schema);
  if (isObjType(schema)) {
    let requiredKeys = [];
    if (Array.isArray(schema.required)) {
      requiredKeys = schema.required;
      delete schema.required;
    }
    Object.keys(schema.properties).forEach(key => {
      const item = schema.properties[key];
      if (requiredKeys.indexOf(key) > -1) {
        item.required = true;
      }
      schema.properties[key] = changeSchema(item, singleChange);
    });
  } else if (isListType(schema)) {
    Object.keys(schema.items.properties).forEach(key => {
      const item = schema.items.properties[key];
      schema.items.properties[key] = changeSchema(item, singleChange);
    });
  }
  return schema;
};

export const updateSchemaToNewVersion = schema => {
  return changeSchema(schema, updateSingleSchema);
};

const updateSingleSchema = schema => {
  try {
    schema.rules = schema.rules || [];
    schema.props = schema.props || {};
    if (schema['ui:options']) {
      schema.props = schema['ui:options'];
      delete schema['ui:options'];
    }
    if (schema.pattern) {
      const validItem = { pattern: schema.pattern };
      if (schema.message && schema.message.pattern) {
        validItem.message = schema.message.pattern;
      }
      schema.rules.push(validItem);
      delete schema.pattern;
      delete schema.message;
    }
    // min / max
    if (schema.minLength) {
      schema.min = schema.minLength;
      delete schema.minLength;
    }
    if (schema.maxLength) {
      schema.max = schema.maxLength;
      delete schema.maxLength;
    }
    if (schema.minItems) {
      schema.min = schema.minItems;
      delete schema.minItems;
    }
    if (schema.maxItems) {
      schema.max = schema.maxItems;
      delete schema.maxItems;
    }
    if (schema.step) {
      schema.props.step = schema.step;
      delete schema.step;
    }
    // ui:xxx
    if (schema['ui:className']) {
      schema.className = schema['ui:className'];
      delete schema['ui:className'];
    }
    if (schema['ui:hidden']) {
      schema.hidden = schema['ui:hidden'];
      delete schema['ui:hidden'];
    }
    if (schema['ui:readonly']) {
      schema.readOnly = schema['ui:readonly']; // \u6539\u6210\u9A7C\u5CF0\u4E86
      delete schema['ui:readonly'];
    }
    if (schema['ui:disabled']) {
      schema.disabled = schema['ui:disabled'];
      delete schema['ui:disabled'];
    }
    if (schema['ui:width']) {
      schema.width = schema['ui:width'];
      delete schema['ui:width'];
    }
    if (schema['ui:displayType']) {
      schema.displayType = schema['ui:displayType'];
      delete schema['ui:displayType'];
    }
    if (schema['ui:column']) {
      schema.column = schema['ui:column'];
      delete schema['ui:column'];
    }
    if (schema['ui:widget']) {
      schema.widget = schema['ui:widget'];
      delete schema['ui:widget'];
    }
    if (schema['ui:labelWidth']) {
      schema.labelWidth = schema['ui:labelWidth'];
      delete schema['ui:labelWidth'];
    }
    if (schema.rules && schema.rules.length === 0) {
      delete schema.rules;
    }
    if (JSON.stringify(schema.props) === '{}') {
      delete schema.props;
    }
    return schema;
  } catch (error) {
    console.error('schema\u8F6C\u6362\u5931\u8D25\uFF01', error);
    return schema;
  }
};

// \u65E7\u7248schema\u8F6C\u65B0\u7248schema
export const parseExpression = (schema, formData) => {
  let schema1 = parseRootValue(schema);
  let schema2 = replaceParseValue(schema1);
};

// \u68C0\u9A8C\u4E00\u4E2Astring\u662F function\uFF08\u4F20\u7EDF\u6D3B\u7BAD\u5934\u51FD\u6570\uFF09
export const parseFunctionString = string => {
  if (typeof string !== 'string') return false;
  const reg1 = /^{{(function.+)}}$/;
  const reg2 = /^{{(.+=>.+)}}$/;
  if (string.match(reg1)) {
    return string.match(reg1)[1];
  }
  if (string.match(reg2)) {
    return string.match(reg2)[1];
  }
  return false;
};

export const completeSchemaWithTheme = (schema = {}, theme = {}) => {
  let result = {};
  if (isObject(schema)) {
    if (schema.theme && theme[schema.theme]) {
      result = { ...schema, ...theme[schema.theme] };
    }
    Object.keys(schema).forEach(key => {
      result[key] = completeSchemaWithTheme(schema[key], theme);
    });
  } else {
    result = schema;
  }
  return result;
};

export const cleanEmpty = obj => {
  if (Array.isArray(obj)) {
    return obj
      .map(v => (v && isObject(v) ? cleanEmpty(v) : v))
      .filter(v => !(v == undefined));
  } else if (isObject(obj)) {
    return Object.entries(obj)
      .map(([k, v]) => [k, v && isObject(v) ? cleanEmpty(v) : v])
      .reduce((a, [k, v]) => (v == undefined ? a : ((a[k] = v), a)), {});
  } else {
    return obj;
  }
};

export const removeHiddenFromResult = (data, flatten) => {
  Object.keys(flatten).forEach(key => {
    const hidden = flatten[key].schema && flatten[key].schema.hidden === true; // Remark: \u6709\u8868\u8FBE\u5F0F\u7684\u60C5\u51B5, \u6682\u65F6\u4E0D\u53BB\u6389\u4E86\uFF08\u6709\u4E1A\u52A1\u53CD\u800C\u662F\u5E0C\u671B\u7559\u4E0B\u7684\uFF09\uFF0C\u5C31\u53BB\u6389 hidden = true \u7684
    if (get(data, key) !== undefined && hidden) {
      set(data, key, undefined);
    }
  });
  return data;
};`,Be=`import React from 'react';
import FormRender, { useForm } from 'form-render';

const Demo = props => {
  const form = useForm();
  return <FormRender form={form} {...props} />;
};

export default Demo;`,Ae=`export const delay = ms => new Promise(res => setTimeout(res, ms));

export const fakeApi = (url, data) => {
  console.group('request:', url);
  console.log('params:', data);
  console.groupEnd();
  return delay(500);
};`,ve=`import React from 'react';
import FormRender, { useForm } from 'form-render';

const Demo = ({ schema }) => {
  const form = useForm();
  return (
    <div>
      <FormRender form={form} schema={schema} />
    </div>
  );
};

export default Demo;`,fn=`export const basic = {
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
};`,Ie=`import React, { Component } from 'react';
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

export default Root;`,Mn=`import React, { useState, useEffect } from 'react';
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

export default Demo;`,Kn=`{
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
}`,Fn=`import { Select } from 'antd';
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

export default SearchInput;`,pn=`import React from 'react';
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

export default Demo;`,Qe=`import { monaco } from 'react-monaco-editor'

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

export { valueMap, keySuggestions }`,$n=`.markdown p {
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
}`,wn=`import React from 'react';
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
      width: '25%',
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

export default Demo;`,Dn=`import React, { useState, useRef } from 'react';
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

export default Demo;`,qn=`import React from 'react';
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

export default Demo;`,Wn=`.fr-generator-playground {
  margin: 0 -24px;

  .hide-demo {
    display: none;
  }
}`,_n=`import React, { useState, useRef } from 'react';
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

export default Demo;`,rt=`import React, { useState, useRef } from 'react';
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

export default Demo;`,st=gn.default={"guide-card":{component:Object(W.dynamic)({loader:function(){var P=Object(J.a)(b.a.mark(function R(){return b.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(26)]).then(e.bind(null,"oLxE"));case 2:return u.abrupt("return",u.sent.default);case 3:case"end":return u.stop()}},R)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:ce}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"card-render":{version:"0.1.2"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"0.x"}},identifier:"guide-card"}},"chart-render-demo":{component:Object(W.dynamic)({loader:function(){var P=Object(J.a)(b.a.mark(function R(){var d,u,h,g,O,r,o;return b.a.wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return r=function(j,l){if(!l&&j&&j.__esModule)return j;if(j===null||typeof j!="object"&&typeof j!="function")return{default:j};var K=O(l);if(K&&K.has(j))return K.get(j);var f={},t=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in j)if(v!=="default"&&Object.prototype.hasOwnProperty.call(j,v)){var c=t?Object.getOwnPropertyDescriptor(j,v):null;c&&(c.get||c.set)?Object.defineProperty(f,v,c):f[v]=j[v]}return f.default=j,K&&K.set(j,f),f},O=function(j){if(typeof WeakMap!="function")return null;var l=new WeakMap,K=new WeakMap;return(O=function(t){return t?K:l})(j)},d=e("K+nK"),A.t0=d,A.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return A.t1=A.sent,u=(0,A.t0)(A.t1),A.t2=r,A.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return A.t3=A.sent,h=(0,A.t2)(A.t3),A.next=15,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(8)]).then(e.bind(null,"36SN"));case 15:return g=A.sent,o=function(){var j=(0,h.useState)("Line"),l=(0,u.default)(j,2),K=l[0],f=l[1],t={Line:g.Line,Column:g.Column,PivotTable:g.PivotTable}[K];return h.default.createElement("div",null,h.default.createElement("div",{style:{marginBottom:10}},h.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return f("Line")}},"\u6298\u7EBF\u56FE"),h.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return f("Column")}},"\u67F1\u72B6\u56FE"),h.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return f("PivotTable")}},"\u4EA4\u53C9\u8868")),h.default.createElement(t,{meta:[{id:"date",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF",isDim:!1},{id:"uv",name:"\u8BBF\u5BA2\u6570",isDim:!1}],data:[{date:"20200101",pv:100,uv:50},{date:"20200102",pv:120,uv:60},{date:"20200103",pv:140,uv:70},{date:"20200104",pv:160,uv:80}]}))},A.abrupt("return",o);case 18:case"end":return A.stop()}},R)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"chart-render-demo"}},"column-demo":{component:Object(W.dynamic)({loader:function(){var P=Object(J.a)(b.a.mark(function R(){var d,u,h,g;return b.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,u=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(8)]).then(e.bind(null,"36SN"));case 8:return h=r.sent,g=function(){return u.default.createElement(h.Column,{meta:[{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{pv:50,uv:20}]})},r.abrupt("return",g);case 11:case"end":return r.stop()}},R)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[{ pv: 50, uv: 20 }]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo"}},"column-demo-1":{component:Object(W.dynamic)({loader:function(){var P=Object(J.a)(b.a.mark(function R(){var d,u,h,g;return b.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,u=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(8)]).then(e.bind(null,"36SN"));case 8:return h=r.sent,g=function(){return u.default.createElement(h.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},r.abrupt("return",g);case 11:case"end":return r.stop()}},R)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-1"}},"column-demo-2":{component:Object(W.dynamic)({loader:function(){var P=Object(J.a)(b.a.mark(function R(){var d,u,h,g;return b.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,u=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(8)]).then(e.bind(null,"36SN"));case 8:return h=r.sent,g=function(){return u.default.createElement(h.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},r.abrupt("return",g);case 11:case"end":return r.stop()}},R)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-2"}},"column-demo-3":{component:Object(W.dynamic)({loader:function(){var P=Object(J.a)(b.a.mark(function R(){var d,u,h,g;return b.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,u=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(8)]).then(e.bind(null,"36SN"));case 8:return h=r.sent,g=function(){return u.default.createElement(h.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},r.abrupt("return",g);case 11:case"end":return r.stop()}},R)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-3"}},"column-demo-4":{component:Object(W.dynamic)({loader:function(){var P=Object(J.a)(b.a.mark(function R(){var d,u,h,g;return b.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,u=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(8)]).then(e.bind(null,"36SN"));case 8:return h=r.sent,g=function(){return u.default.createElement(h.Column,{inverted:!0,label:{position:"middle",layout:[{type:"interval-adjust-position"},{type:"interval-hide-overlap"},{type:"adjust-color"}]},meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},r.abrupt("return",g);case 11:case"end":return r.stop()}},R)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-4"}},"line-demo":{component:Object(W.dynamic)({loader:function(){var P=Object(J.a)(b.a.mark(function R(){var d,u,h,g;return b.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,u=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(8)]).then(e.bind(null,"36SN"));case 8:return h=r.sent,g=function(){return u.default.createElement(h.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},r.abrupt("return",g);case 11:case"end":return r.stop()}},R)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo"}},"line-demo-1":{component:Object(W.dynamic)({loader:function(){var P=Object(J.a)(b.a.mark(function R(){var d,u,h,g;return b.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,u=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(8)]).then(e.bind(null,"36SN"));case 8:return h=r.sent,g=function(){return u.default.createElement(h.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},r.abrupt("return",g);case 11:case"end":return r.stop()}},R)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-1"}},"line-demo-2":{component:Object(W.dynamic)({loader:function(){var P=Object(J.a)(b.a.mark(function R(){var d,u,h,g;return b.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,u=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(8)]).then(e.bind(null,"36SN"));case 8:return h=r.sent,g=function(){return u.default.createElement(h.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"},{id:"pv",name:"\u8BBF\u95EE\u91CF"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20,pv:120},{ds:"2020-12-31",page:"\u9996\u9875",uv:120,pv:1120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21,pv:121},{ds:"2021-01-01",page:"\u9996\u9875",uv:121,pv:1121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15,pv:115},{ds:"2021-01-02",page:"\u9996\u9875",uv:115,pv:1115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40,pv:140},{ds:"2021-01-03",page:"\u9996\u9875",uv:140,pv:1140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31,pv:131},{ds:"2021-01-04",page:"\u9996\u9875",uv:131,pv:1131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32,pv:132},{ds:"2021-01-05",page:"\u9996\u9875",uv:132,pv:1132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30,pv:130},{ds:"2021-01-06",page:"\u9996\u9875",uv:130,pv:1130}]})},r.abrupt("return",g);case 11:case"end":return r.stop()}},R)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-2"}},"line-demo-3":{component:Object(W.dynamic)({loader:function(){var P=Object(J.a)(b.a.mark(function R(){var d,u,h,g;return b.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,u=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(8)]).then(e.bind(null,"36SN"));case 8:return h=r.sent,g=function(){return u.default.createElement(h.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},r.abrupt("return",g);case 11:case"end":return r.stop()}},R)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-3"}},"line-demo-4":{component:Object(W.dynamic)({loader:function(){var P=Object(J.a)(b.a.mark(function R(){var d,u,h,g;return b.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,u=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(8)]).then(e.bind(null,"36SN"));case 8:return h=r.sent,g=function(){return u.default.createElement(h.Line,{withArea:!0,isStack:!0,isPercent:!0,meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},r.abrupt("return",g);case 11:case"end":return r.stop()}},R)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-4"}},"pivot-table-demo":{component:Object(W.dynamic)({loader:function(){var P=Object(J.a)(b.a.mark(function R(){var d,u,h,g;return b.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,u=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(8)]).then(e.bind(null,"36SN"));case 8:return h=r.sent,g=function(){return u.default.createElement(h.PivotTable,{style:{maxHeight:400,overflow:"auto"},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},r.abrupt("return",g);case 11:case"end":return r.stop()}},R)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo"}},"pivot-table-demo-1":{component:Object(W.dynamic)({loader:function(){var P=Object(J.a)(b.a.mark(function R(){var d,u,h,g;return b.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,u=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(8)]).then(e.bind(null,"36SN"));case 8:return h=r.sent,g=function(){return u.default.createElement(h.PivotTable,{style:{maxHeight:400,overflow:"auto"},cellRender:function(A,T,j){return u.default.createElement("div",null,u.default.createElement("p",null,"\u53C2\u6570\u8868\uFF1A"),u.default.createElement("p",{style:{color:["red","orange","yellow","green","blue"][Object.keys(T).length]}},A),u.default.createElement("p",null,JSON.stringify(T)),u.default.createElement("p",null,JSON.stringify(j)))},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},r.abrupt("return",g);case 11:case"end":return r.stop()}},R)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-1"}},"pivot-table-demo-2":{component:Object(W.dynamic)({loader:function(){var P=Object(J.a)(b.a.mark(function R(){var d,u,h,g,O,r,o;return b.a.wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return r=function(j,l){if(!l&&j&&j.__esModule)return j;if(j===null||typeof j!="object"&&typeof j!="function")return{default:j};var K=O(l);if(K&&K.has(j))return K.get(j);var f={},t=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in j)if(v!=="default"&&Object.prototype.hasOwnProperty.call(j,v)){var c=t?Object.getOwnPropertyDescriptor(j,v):null;c&&(c.get||c.set)?Object.defineProperty(f,v,c):f[v]=j[v]}return f.default=j,K&&K.set(j,f),f},O=function(j){if(typeof WeakMap!="function")return null;var l=new WeakMap,K=new WeakMap;return(O=function(t){return t?K:l})(j)},d=e("K+nK"),A.t0=d,A.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return A.t1=A.sent,u=(0,A.t0)(A.t1),A.t2=r,A.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return A.t3=A.sent,h=(0,A.t2)(A.t3),A.next=15,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7),e.e(8)]).then(e.bind(null,"36SN"));case 15:return g=A.sent,o=function(){var j=(0,h.useState)(!1),l=(0,u.default)(j,2),K=l[0],f=l[1];return h.default.createElement(h.default.Fragment,null,h.default.createElement("label",null,"\u53EF\u5C55\u5F00/\u6536\u7F29\uFF1A",h.default.createElement("input",{type:"checkbox",value:K,onChange:function(){return f(!K)}})),h.default.createElement(g.PivotTable,{leftExpandable:K,showSubtotal:!1,meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]}))},A.abrupt("return",o);case 18:case"end":return A.stop()}},R)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-2"}},"form-render-demo":{component:Object(W.dynamic)({loader:function(){var P=Object(J.a)(b.a.mark(function R(){var d,u,h,g,O,r,o,i,A,T,j,l,K,f;return b.a.wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return j=function(I,B){if(!B&&I&&I.__esModule)return I;if(I===null||typeof I!="object"&&typeof I!="function")return{default:I};var L=T(B);if(L&&L.has(I))return L.get(I);var Z={},Q=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var H in I)if(H!=="default"&&Object.prototype.hasOwnProperty.call(I,H)){var Fe=Q?Object.getOwnPropertyDescriptor(I,H):null;Fe&&(Fe.get||Fe.set)?Object.defineProperty(Z,H,Fe):Z[H]=I[H]}return Z.default=I,L&&L.set(I,Z),Z},T=function(I){if(typeof WeakMap!="function")return null;var B=new WeakMap,L=new WeakMap;return(T=function(Q){return Q?L:B})(I)},d=e("K+nK"),v.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return v.t0=d,v.next=8,e.e(14).then(e.t.bind(null,"4IMT",7));case 8:return v.t1=v.sent,u=(0,v.t0)(v.t1),v.t2=d,v.next=13,e.e(81).then(e.bind(null,"fWQN"));case 13:return v.t3=v.sent,h=(0,v.t2)(v.t3),v.t4=d,v.next=18,e.e(82).then(e.bind(null,"mtLc"));case 18:return v.t5=v.sent,g=(0,v.t4)(v.t5),v.t6=d,v.next=23,e.e(72).then(e.bind(null,"yKVA"));case 23:return v.t7=v.sent,O=(0,v.t6)(v.t7),v.t8=d,v.next=28,e.e(70).then(e.bind(null,"879j"));case 28:return v.t9=v.sent,r=(0,v.t8)(v.t9),v.t10=d,v.next=33,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 33:return v.t11=v.sent,o=(0,v.t10)(v.t11),v.next=37,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 37:return i=v.sent,v.t12=j,v.next=41,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"refC"));case 41:return v.t13=v.sent,A=(0,v.t12)(v.t13),l={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},K=function(c){(0,O.default)(B,c);var I=(0,r.default)(B);function B(){return(0,h.default)(this,B),I.apply(this,arguments)}return(0,g.default)(B,[{key:"render",value:function(){var Z=this.props.form;return o.default.createElement("div",null,o.default.createElement(A.default,{form:Z,schema:l}),o.default.createElement(u.default,{type:"primary",onClick:Z.submit},"\u63D0\u4EA4"))}}]),B}(o.default.Component),f=(0,A.connectForm)(K),v.abrupt("return",f);case 47:case"end":return v.stop()}},R)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default connectForm(Demo);`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.5.5"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo"}},"form-render-demo-1":{component:Object(W.dynamic)({loader:function(){var P=Object(J.a)(b.a.mark(function R(){var d,u,h,g,O,r,o,i,A,T;return b.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return o=function(f,t){if(!t&&f&&f.__esModule)return f;if(f===null||typeof f!="object"&&typeof f!="function")return{default:f};var v=r(t);if(v&&v.has(f))return v.get(f);var c={},I=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var B in f)if(B!=="default"&&Object.prototype.hasOwnProperty.call(f,B)){var L=I?Object.getOwnPropertyDescriptor(f,B):null;L&&(L.get||L.set)?Object.defineProperty(c,B,L):c[B]=f[B]}return c.default=f,v&&v.set(f,c),c},r=function(f){if(typeof WeakMap!="function")return null;var t=new WeakMap,v=new WeakMap;return(r=function(I){return I?v:t})(f)},d=e("K+nK"),l.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return l.t0=d,l.next=8,e.e(14).then(e.t.bind(null,"4IMT",7));case 8:return l.t1=l.sent,u=(0,l.t0)(l.t1),l.t2=d,l.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return l.t3=l.sent,h=(0,l.t2)(l.t3),l.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 17:return g=l.sent,l.t4=o,l.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"refC"));case 21:return l.t5=l.sent,O=(0,l.t4)(l.t5),i={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},A=function(){var f=(0,O.useForm)();return h.default.createElement("div",null,h.default.createElement(O.default,{form:f,schema:i}),h.default.createElement(u.default,{type:"primary",onClick:f.submit},"\u63D0\u4EA4"))},T=A,l.abrupt("return",T);case 27:case"end":return l.stop()}},R)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.5.5"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo-1"}},"form-render-demo-2":{component:Object(W.dynamic)({loader:function(){var P=Object(J.a)(b.a.mark(function R(){var d,u,h,g,O,r,o,i,A,T;return b.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return o=function(f,t){if(!t&&f&&f.__esModule)return f;if(f===null||typeof f!="object"&&typeof f!="function")return{default:f};var v=r(t);if(v&&v.has(f))return v.get(f);var c={},I=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var B in f)if(B!=="default"&&Object.prototype.hasOwnProperty.call(f,B)){var L=I?Object.getOwnPropertyDescriptor(f,B):null;L&&(L.get||L.set)?Object.defineProperty(c,B,L):c[B]=f[B]}return c.default=f,v&&v.set(f,c),c},r=function(f){if(typeof WeakMap!="function")return null;var t=new WeakMap,v=new WeakMap;return(r=function(I){return I?v:t})(f)},d=e("K+nK"),l.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return l.t0=d,l.next=8,e.e(14).then(e.t.bind(null,"4IMT",7));case 8:return l.t1=l.sent,u=(0,l.t0)(l.t1),l.t2=d,l.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return l.t3=l.sent,h=(0,l.t2)(l.t3),l.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 17:return g=l.sent,l.t4=o,l.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"refC"));case 21:return l.t5=l.sent,O=(0,l.t4)(l.t5),i={displayType:"row",labelWidth:60,type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F",type:"range",format:"date"},siteUrl:{title:"\u7F51\u5740",type:"string",placeholder:"\u6B64\u5904\u5FC5\u586B",required:!0,props:{addonBefore:"https://",addonAfter:".com"}}}},A=function(){var f=(0,O.useForm)(),t=function(c,I){I.length>0?alert("errors:"+JSON.stringify(I)):alert("formData:"+JSON.stringify(c,null,2))};return h.default.createElement("div",null,h.default.createElement(O.default,{form:f,schema:i,onFinish:t}),h.default.createElement(u.default,{type:"primary",onClick:f.submit},"\u63D0\u4EA4"))},T=A,l.abrupt("return",T);case 27:case"end":return l.stop()}},R)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.5.5"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-demo-2"}},"migrate-demo":{component:Object(W.dynamic)({loader:function(){var P=Object(J.a)(b.a.mark(function R(){var d,u,h,g,O,r,o,i;return b.a.wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return o=function(){var l=(0,h.useForm)(),K=function(t,v){v.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(v))):alert(JSON.stringify(t))};return u.default.createElement("div",null,u.default.createElement(h.default,{form:l,schema:r,onFinish:K}),u.default.createElement("button",{onClick:l.submit},"\u63D0\u4EA4"))},O=function(l,K){if(!K&&l&&l.__esModule)return l;if(l===null||typeof l!="object"&&typeof l!="function")return{default:l};var f=g(K);if(f&&f.has(l))return f.get(l);var t={},v=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in l)if(c!=="default"&&Object.prototype.hasOwnProperty.call(l,c)){var I=v?Object.getOwnPropertyDescriptor(l,c):null;I&&(I.get||I.set)?Object.defineProperty(t,c,I):t[c]=l[c]}return t.default=l,f&&f.set(l,t),t},g=function(l){if(typeof WeakMap!="function")return null;var K=new WeakMap,f=new WeakMap;return(g=function(v){return v?f:K})(l)},d=e("K+nK"),T.t0=d,T.next=7,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 7:return T.t1=T.sent,u=(0,T.t0)(T.t1),T.t2=O,T.next=12,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"refC"));case 12:return T.t3=T.sent,h=(0,T.t2)(T.t3),r={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}},i=o,T.abrupt("return",i);case 17:case"end":return T.stop()}},R)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.5"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate-demo"}},"migrate-demo-1":{component:Object(W.dynamic)({loader:function(){var P=Object(J.a)(b.a.mark(function R(){var d,u,h,g,O,r,o,i,A,T,j,l,K;return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return A=function(c,I){if(!I&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var B=i(I);if(B&&B.has(c))return B.get(c);var L={},Z=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var Q in c)if(Q!=="default"&&Object.prototype.hasOwnProperty.call(c,Q)){var H=Z?Object.getOwnPropertyDescriptor(c,Q):null;H&&(H.get||H.set)?Object.defineProperty(L,Q,H):L[Q]=c[Q]}return L.default=c,B&&B.set(c,L),L},i=function(c){if(typeof WeakMap!="function")return null;var I=new WeakMap,B=new WeakMap;return(i=function(Z){return Z?B:I})(c)},d=e("K+nK"),t.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return t.t0=d,t.next=8,e.e(14).then(e.t.bind(null,"4IMT",7));case 8:return t.t1=t.sent,u=(0,t.t0)(t.t1),t.t2=d,t.next=13,Promise.resolve().then(e.bind(null,"tJVT"));case 13:return t.t3=t.sent,h=(0,t.t2)(t.t3),t.next=17,Promise.all([e.e(3),e.e(20)]).then(e.t.bind(null,"cUip",7));case 17:return t.t4=d,t.next=20,Promise.all([e.e(0),e.e(14),e.e(19),e.e(23)]).then(e.t.bind(null,"iJl9",7));case 20:return t.t5=t.sent,g=(0,t.t4)(t.t5),t.t6=A,t.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return t.t7=t.sent,O=(0,t.t6)(t.t7),t.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 29:return r=t.sent,t.next=32,Promise.all([e.e(66),e.e(77)]).then(e.bind(null,"7t+U"));case 32:return o=t.sent,T=g.default.TextArea,j={type:"object",properties:{number:{title:"\u6570\u5B57\u8F93\u5165\u6846",type:"number","ui:disabled":!0},checkbox:{title:"\u662F\u5426\u9009\u62E9",type:"boolean","ui:widget":"switch"}},required:["number"]},l=function(){var c=(0,O.useState)(JSON.stringify(j)),I=(0,h.default)(c,2),B=I[0],L=I[1],Z=(0,O.useState)({}),Q=(0,h.default)(Z,2),H=Q[0],Fe=Q[1],dn=function(){try{var N=(0,o.updateSchemaToNewVersion)(JSON.parse(B));Fe(N)}catch(M){console.log(M)}},yn=function(N){L(N.target.value)},bn=function(){L(JSON.stringify(JSON.parse(B),null,2))};return O.default.createElement("div",null,O.default.createElement("div",null,"\u586B\u5165\u65E7\u7248schema\uFF1A"),O.default.createElement(T,{style:{minHeight:400,marginTop:12,marginBottom:12},value:B,onChange:yn}),O.default.createElement(u.default,{style:{marginRight:12},onClick:bn},"\u683C\u5F0F\u5316\u65E7schema"),O.default.createElement(u.default,{type:"primary",onClick:dn},"\u751F\u6210\u65B0\u7248schema"),O.default.createElement(T,{style:{minHeight:400,marginTop:12},value:JSON.stringify(H,null,2)}))},K=l,t.abrupt("return",K);case 38:case"end":return t.stop()}},R)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
import { Input, Button } from 'antd';
import { updateSchemaToNewVersion } from '../../packages/form-render/src/utils.js';
const TextArea = Input.TextArea;

const old = {
  type: 'object',
  properties: {
    number: {
      title: '\u6570\u5B57\u8F93\u5165\u6846',
      type: 'number',
      'ui:disabled': true,
    },
    checkbox: {
      title: '\u662F\u5426\u9009\u62E9',
      type: 'boolean',
      'ui:widget': 'switch',
    },
  },
  required: ['number'],
};

const Translator = () => {
  const [oldSchema, setOld] = useState(JSON.stringify(old));
  const [newSchema, setNew] = useState({});

  const handleClick = () => {
    try {
      const _newSchema = updateSchemaToNewVersion(JSON.parse(oldSchema));
      setNew(_newSchema);
    } catch (err) {
      console.log(err);
    }
  };

  const onOldChange = e => {
    setOld(e.target.value);
  };

  const formatOld = () => {
    setOld(JSON.stringify(JSON.parse(oldSchema), null, 2));
  };

  return (
    <div>
      <div>\u586B\u5165\u65E7\u7248schema\uFF1A</div>
      <TextArea
        style={{ minHeight: 400, marginTop: 12, marginBottom: 12 }}
        value={oldSchema}
        onChange={onOldChange}
      />
      <Button style={{ marginRight: 12 }} onClick={formatOld}>
        \u683C\u5F0F\u5316\u65E7schema
      </Button>
      <Button type="primary" onClick={handleClick}>
        \u751F\u6210\u65B0\u7248schema
      </Button>
      <TextArea
        style={{ minHeight: 400, marginTop: 12 }}
        value={JSON.stringify(newSchema, null, 2)}
      />
    </div>
  );
};

export default Translator;`},"packages/form-render/src/utils.js":{import:"../../packages/form-render/src/utils.js",content:V}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"},"lodash-es":{version:"4.17.21"}},identifier:"migrate-demo-1"}},"display-demo":{component:Object(W.dynamic)({loader:function(){var P=Object(J.a)(b.a.mark(function R(){var d,u,h,g,O;return b.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return d=e("K+nK"),o.t0=d,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,u=(0,o.t0)(o.t1),o.t2=d,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,h=(0,o.t2)(o.t3),g=function(A){return{type:"object",displayType:A,properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},objectName:{title:"\u5BF9\u8C61",bind:"obj",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},O=function(){return u.default.createElement("div",null,u.default.createElement("h2",null,"display: row"),u.default.createElement(h.default,{schema:g("row")}),u.default.createElement("h2",null,"display: column"),u.default.createElement(h.default,{schema:g("column")}))},o.abrupt("return",O);case 14:case"end":return o.stop()}},R)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`},"demo/display.js":{import:"../demo/display",content:Be}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.5"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo"}},"display-demo-1":{component:Object(W.dynamic)({loader:function(){var P=Object(J.a)(b.a.mark(function R(){var d,u,h,g,O;return b.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return d=e("K+nK"),o.t0=d,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,u=(0,o.t0)(o.t1),o.t2=d,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,h=(0,o.t2)(o.t3),g={type:"object",displayType:"inline",properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},O=function(){return u.default.createElement(h.default,{schema:g})},o.abrupt("return",O);case 14:case"end":return o.stop()}},R)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:Be}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.5"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-1"}},"display-demo-2":{component:Object(W.dynamic)({loader:function(){var P=Object(J.a)(b.a.mark(function R(){var d,u,h,g,O;return b.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return d=e("K+nK"),o.t0=d,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,u=(0,o.t0)(o.t1),o.t2=d,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,h=(0,o.t2)(o.t3),g={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0},check:{title:"box",type:"boolean",default:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},O=function(){return u.default.createElement(h.default,{readOnly:!0,schema:g})},o.abrupt("return",O);case 14:case"end":return o.stop()}},R)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form readOnly schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:Be}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.5"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-2"}},"display-demo-3":{component:Object(W.dynamic)({loader:function(){var P=Object(J.a)(b.a.mark(function R(){var d,u,h,g,O;return b.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return d=e("K+nK"),o.t0=d,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,u=(0,o.t0)(o.t1),o.t2=d,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,h=(0,o.t2)(o.t3),g={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0,width:"50%"},check:{title:"box",type:"boolean",default:!0,width:"50%",labelWidth:6},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},O=function(){return u.default.createElement(h.default,{labelWidth:"200",schema:g})},o.abrupt("return",O);case 14:case"end":return o.stop()}},R)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form labelWidth="200" schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:Be}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.5"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-3"}},"display-demo-4":{component:Object(W.dynamic)({loader:function(){var P=Object(J.a)(b.a.mark(function R(){var d,u,h,g,O,r;return b.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return d=e("K+nK"),i.t0=d,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,u=(0,i.t0)(i.t1),i.t2=d,i.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"bQjt"));case 9:return i.t3=i.sent,h=(0,i.t2)(i.t3),g={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},O=function(){return u.default.createElement(h.default,{schema:g})},r=O,i.abrupt("return",r);case 15:case"end":return i.stop()}},R)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Be}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.5"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-4"}},"display-demo-5":{component:Object(W.dynamic)({loader:function(){var P=Object(J.a)(b.a.mark(function R(){var d,u,h,g,O,r;return b.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return d=e("K+nK"),i.t0=d,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,u=(0,i.t0)(i.t1),i.t2=d,i.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"bQjt"));case 9:return i.t3=i.sent,h=(0,i.t2)(i.t3),g={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},O=function(){return u.default.createElement(h.default,{schema:g})},r=O,i.abrupt("return",r);case 15:case"end":return i.stop()}},R)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Be}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.5"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-5"}},"display-demo-6":{component:Object(W.dynamic)({loader:function(){var P=Object(J.a)(b.a.mark(function R(){var d,u,h,g,O,r;return b.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return d=e("K+nK"),i.t0=d,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,u=(0,i.t0)(i.t1),i.t2=d,i.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"bQjt"));case 9:return i.t3=i.sent,h=(0,i.t2)(i.t3),g={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},O=function(){return u.default.createElement(h.default,{schema:g})},r=O,i.abrupt("return",r);case 15:case"end":return i.stop()}},R)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Be}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.5"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-6"}},"display-demo-7":{component:Object(W.dynamic)({loader:function(){var P=Object(J.a)(b.a.mark(function R(){var d,u,h,g,O,r;return b.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return d=e("K+nK"),i.t0=d,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,u=(0,i.t0)(i.t1),i.t2=d,i.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"bQjt"));case 9:return i.t3=i.sent,h=(0,i.t2)(i.t3),g={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",props:{hideMove:!0},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},O=function(){return u.default.createElement(h.default,{schema:g})},r=O,i.abrupt("return",r);case 15:case"end":return i.stop()}},R)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
            props: {
              hideMove: true,
            },
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Be}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.5"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-7"}},"form-methods-demo":{component:Object(W.dynamic)({loader:function(){var P=Object(J.a)(b.a.mark(function R(){var d,u,h,g,O,r,o,i,A,T,j,l,K;return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return j=function(c,I){if(!I&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var B=T(I);if(B&&B.has(c))return B.get(c);var L={},Z=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var Q in c)if(Q!=="default"&&Object.prototype.hasOwnProperty.call(c,Q)){var H=Z?Object.getOwnPropertyDescriptor(c,Q):null;H&&(H.get||H.set)?Object.defineProperty(L,Q,H):L[Q]=c[Q]}return L.default=c,B&&B.set(c,L),L},T=function(c){if(typeof WeakMap!="function")return null;var I=new WeakMap,B=new WeakMap;return(T=function(Z){return Z?B:I})(c)},d=e("K+nK"),t.next=5,e.e(21).then(e.t.bind(null,"lfLe",7));case 5:return t.t0=d,t.next=8,e.e(22).then(e.t.bind(null,"Cp9S",7));case 8:return t.t1=t.sent,u=(0,t.t0)(t.t1),t.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return t.t2=d,t.next=15,e.e(14).then(e.t.bind(null,"4IMT",7));case 15:return t.t3=t.sent,h=(0,t.t2)(t.t3),t.next=19,e.e(15).then(e.t.bind(null,"tL+A",7));case 19:return t.t4=d,t.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return t.t5=t.sent,g=(0,t.t4)(t.t5),t.t6=d,t.next=27,Promise.resolve().then(e.bind(null,"tJVT"));case 27:return t.t7=t.sent,O=(0,t.t6)(t.t7),t.t8=j,t.next=32,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 32:return t.t9=t.sent,r=(0,t.t8)(t.t9),t.next=36,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 36:return o=t.sent,t.t10=j,t.next=40,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"refC"));case 40:return t.t11=t.sent,i=(0,t.t10)(t.t11),t.next=44,e.e(16).then(e.bind(null,"OH0R"));case 44:return A=t.sent,l=function(){var c=(0,i.useForm)(),I=(0,r.useState)({}),B=(0,O.default)(I,2),L=B[0],Z=B[1],Q=function(){(0,A.fakeApi)("xxx/getForm").then(function(dn){c.setValues({input1:"hello world",select1:"c"})})};(0,r.useEffect)(function(){(0,A.delay)(1e3).then(function(Fe){Z({type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}})})},[]);var H=function(dn,yn){yn.length>0?g.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(yn.map(function(bn){return bn.name}))):(0,A.fakeApi)("xxx/submit",dn).then(function(bn){return g.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})};return r.default.createElement("div",{style:{width:"400px"}},r.default.createElement(i.default,{form:c,schema:L,onFinish:H}),r.default.createElement(u.default,null,r.default.createElement(h.default,{onClick:Q},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),r.default.createElement(h.default,{type:"primary",onClick:c.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},K=l,t.abrupt("return",K);case 48:case"end":return t.stop()}},R)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Ae}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.5.5"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo"}},"form-methods-demo-1":{component:Object(W.dynamic)({loader:function(){var P=Object(J.a)(b.a.mark(function R(){var d,u,h,g,O,r,o,i,A,T,j,l,K;return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return T=function(c,I){if(!I&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var B=A(I);if(B&&B.has(c))return B.get(c);var L={},Z=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var Q in c)if(Q!=="default"&&Object.prototype.hasOwnProperty.call(c,Q)){var H=Z?Object.getOwnPropertyDescriptor(c,Q):null;H&&(H.get||H.set)?Object.defineProperty(L,Q,H):L[Q]=c[Q]}return L.default=c,B&&B.set(c,L),L},A=function(c){if(typeof WeakMap!="function")return null;var I=new WeakMap,B=new WeakMap;return(A=function(Z){return Z?B:I})(c)},d=e("K+nK"),t.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return t.t0=d,t.next=8,e.e(14).then(e.t.bind(null,"4IMT",7));case 8:return t.t1=t.sent,u=(0,t.t0)(t.t1),t.t2=d,t.next=13,Promise.resolve().then(e.bind(null,"PpiC"));case 13:return t.t3=t.sent,h=(0,t.t2)(t.t3),t.next=17,e.e(15).then(e.t.bind(null,"tL+A",7));case 17:return t.t4=d,t.next=20,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 20:return t.t5=t.sent,g=(0,t.t4)(t.t5),t.t6=d,t.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return t.t7=t.sent,O=(0,t.t6)(t.t7),t.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 29:return r=t.sent,t.t8=T,t.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"refC"));case 33:return t.t9=t.sent,o=(0,t.t8)(t.t9),t.next=37,e.e(16).then(e.bind(null,"OH0R"));case 37:return i=t.sent,j={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},l=function(){var c=(0,o.useForm)(),I=function(Z,Q){Q.length>0?g.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(Q.map(function(H){return H.name}))):(0,i.fakeApi)("xxx/submit",Z).then(function(H){return g.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},B=function(Z){var Q=Z.data,H=Z.errors,Fe=Z.schema,dn=(0,h.default)(Z,["data","errors","schema"]);return(0,i.fakeApi)("xxx/validation").then(function(yn){return{name:"select1",error:["\u5916\u90E8\u6821\u9A8C\u9519\u8BEF"]}})};return O.default.createElement("div",{style:{width:"400px"}},O.default.createElement(o.default,{form:c,schema:j,beforeFinish:B,onFinish:I}),O.default.createElement(u.default,{type:"primary",onClick:c.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},K=l,t.abrupt("return",K);case 42:case"end":return t.stop()}},R)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Ae}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.5.5"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-1"}},"form-methods-demo-2":{component:Object(W.dynamic)({loader:function(){var P=Object(J.a)(b.a.mark(function R(){var d,u,h,g,O,r,o,i,A,T,j,l,K;return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return T=function(c,I){if(!I&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var B=A(I);if(B&&B.has(c))return B.get(c);var L={},Z=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var Q in c)if(Q!=="default"&&Object.prototype.hasOwnProperty.call(c,Q)){var H=Z?Object.getOwnPropertyDescriptor(c,Q):null;H&&(H.get||H.set)?Object.defineProperty(L,Q,H):L[Q]=c[Q]}return L.default=c,B&&B.set(c,L),L},A=function(c){if(typeof WeakMap!="function")return null;var I=new WeakMap,B=new WeakMap;return(A=function(Z){return Z?B:I})(c)},d=e("K+nK"),t.next=5,e.e(21).then(e.t.bind(null,"lfLe",7));case 5:return t.t0=d,t.next=8,e.e(22).then(e.t.bind(null,"Cp9S",7));case 8:return t.t1=t.sent,u=(0,t.t0)(t.t1),t.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return t.t2=d,t.next=15,e.e(14).then(e.t.bind(null,"4IMT",7));case 15:return t.t3=t.sent,h=(0,t.t2)(t.t3),t.next=19,e.e(15).then(e.t.bind(null,"tL+A",7));case 19:return t.t4=d,t.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return t.t5=t.sent,g=(0,t.t4)(t.t5),t.t6=d,t.next=27,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 27:return t.t7=t.sent,O=(0,t.t6)(t.t7),t.next=31,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 31:return r=t.sent,t.t8=T,t.next=35,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"refC"));case 35:return t.t9=t.sent,o=(0,t.t8)(t.t9),t.next=39,e.e(16).then(e.bind(null,"OH0R"));case 39:return i=t.sent,j={type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F\u8303\u56F4",type:"range",format:"date"}}},l=function(){var c=(0,o.useForm)(),I=function(Z,Q){Q.length>0?g.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(Q.map(function(H){return H.name}))):(0,i.fakeApi)("xxx/submit",Z).then(function(H){return g.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},B=function(){(0,i.fakeApi)("xxx/getForm").then(function(Z){c.setValues({startDate:"2020-04-04",endDate:"2020-04-24"})})};return O.default.createElement("div",{style:{width:"400px"}},O.default.createElement(o.default,{form:c,schema:j,onFinish:I}),O.default.createElement(u.default,null,O.default.createElement(h.default,{onClick:B},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),O.default.createElement(h.default,{type:"primary",onClick:c.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},K=l,t.abrupt("return",K);case 44:case"end":return t.stop()}},R)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Ae}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.5.5"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-2"}},"form-methods-demo-3":{component:Object(W.dynamic)({loader:function(){var P=Object(J.a)(b.a.mark(function R(){var d,u,h,g,O,r,o,i,A,T,j,l;return b.a.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return A=function(v,c){if(!c&&v&&v.__esModule)return v;if(v===null||typeof v!="object"&&typeof v!="function")return{default:v};var I=i(c);if(I&&I.has(v))return I.get(v);var B={},L=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var Z in v)if(Z!=="default"&&Object.prototype.hasOwnProperty.call(v,Z)){var Q=L?Object.getOwnPropertyDescriptor(v,Z):null;Q&&(Q.get||Q.set)?Object.defineProperty(B,Z,Q):B[Z]=v[Z]}return B.default=v,I&&I.set(v,B),B},i=function(v){if(typeof WeakMap!="function")return null;var c=new WeakMap,I=new WeakMap;return(i=function(L){return L?I:c})(v)},d=e("K+nK"),f.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return f.t0=d,f.next=8,e.e(14).then(e.t.bind(null,"4IMT",7));case 8:return f.t1=f.sent,u=(0,f.t0)(f.t1),f.next=12,e.e(15).then(e.t.bind(null,"tL+A",7));case 12:return f.t2=d,f.next=15,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 15:return f.t3=f.sent,h=(0,f.t2)(f.t3),f.t4=A,f.next=20,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 20:return f.t5=f.sent,g=(0,f.t4)(f.t5),f.next=24,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 24:return O=f.sent,f.t6=A,f.next=28,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"refC"));case 28:return f.t7=f.sent,r=(0,f.t6)(f.t7),f.next=32,e.e(16).then(e.bind(null,"OH0R"));case 32:return o=f.sent,T={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select1:{title:"\u5355\u9009",type:"string",widget:"select"}}}}},j=function(){var v=(0,r.useForm)(),c=function(){v.setSchemaByPath("obj1.select1",{enum:["east","south","west","north"],enumNames:["\u4E1C","\u5357","\u897F","\u5317"]})},I=function(L,Z){Z.length>0?h.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(Z.map(function(Q){return Q.name}))):h.default.info(JSON.stringify(L))};return g.default.createElement("div",{style:{width:"400px"}},g.default.createElement(r.default,{form:v,schema:T,onMount:c,onFinish:I}),g.default.createElement(u.default,{type:"primary",onClick:v.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},l=j,f.abrupt("return",l);case 37:case"end":return f.stop()}},R)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Ae}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.5.5"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-3"}},"function-demo":{component:Object(W.dynamic)({loader:function(){var P=Object(J.a)(b.a.mark(function R(){var d,u,h,g,O,r,o,i;return b.a.wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return O=function(l,K){if(!K&&l&&l.__esModule)return l;if(l===null||typeof l!="object"&&typeof l!="function")return{default:l};var f=g(K);if(f&&f.has(l))return f.get(l);var t={},v=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in l)if(c!=="default"&&Object.prototype.hasOwnProperty.call(l,c)){var I=v?Object.getOwnPropertyDescriptor(l,c):null;I&&(I.get||I.set)?Object.defineProperty(t,c,I):t[c]=l[c]}return t.default=l,f&&f.set(l,t),t},g=function(l){if(typeof WeakMap!="function")return null;var K=new WeakMap,f=new WeakMap;return(g=function(v){return v?f:K})(l)},d=e("K+nK"),T.t0=d,T.next=6,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 6:return T.t1=T.sent,u=(0,T.t0)(T.t1),T.t2=O,T.next=11,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"refC"));case 11:return T.t3=T.sent,h=(0,T.t2)(T.t3),r={type:"object",properties:{select1:{title:"\u5355\u9009",description:"\u5C1D\u8BD5\u9009\u62E9\u201C\u663E\u793A\u8F93\u5165\u6846\u201D",type:"string",enum:["a","b"],enumNames:["\u9690\u85CF\u8F93\u5165\u6846","\u663E\u793A\u8F93\u5165\u6846"],disabled:"{{rootValue.input1.length > 5}}",default:"a"},input1:{title:"\u8F93\u5165\u6846",description:"\u5C1D\u8BD5\u8F93\u5165\u8D85\u8FC75\u4E2A\u5B57\u7B26",type:"string",hidden:'{{formData.select1 == "a"}}'}}},o=function(){var l=(0,h.useForm)();return u.default.createElement(h.default,{form:l,schema:r})},i=o,T.abrupt("return",i);case 17:case"end":return T.stop()}},R)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo1;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.5"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo"}},"function-demo-1":{component:Object(W.dynamic)({loader:function(){var P=Object(J.a)(b.a.mark(function R(){var d,u,h,g,O;return b.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return d=e("K+nK"),o.t0=d,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,u=(0,o.t0)(o.t1),o.t2=d,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(17)]).then(e.bind(null,"c2mQ"));case 9:return o.t3=o.sent,h=(0,o.t2)(o.t3),o.next=13,e.e(18).then(e.bind(null,"8iYR"));case 13:return g=o.sent,O=function(){return u.default.createElement(h.default,{schema:g.expression})},o.abrupt("return",O);case 16:case"end":return o.stop()}},R)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { expression } from '../json/schema';

export default () => <FR schema={expression} />;`},"demo/FR.jsx":{import:"../demo/FR",content:ve},"json/schema.js":{import:"../json/schema",content:fn}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.5"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo-1"}},"lifeCycle-demo":{component:Object(W.dynamic)({loader:function(){var P=Object(J.a)(b.a.mark(function R(){var d,u,h,g,O,r,o,i,A;return b.a.wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return O=function(K,f){if(!f&&K&&K.__esModule)return K;if(K===null||typeof K!="object"&&typeof K!="function")return{default:K};var t=g(f);if(t&&t.has(K))return t.get(K);var v={},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var I in K)if(I!=="default"&&Object.prototype.hasOwnProperty.call(K,I)){var B=c?Object.getOwnPropertyDescriptor(K,I):null;B&&(B.get||B.set)?Object.defineProperty(v,I,B):v[I]=K[I]}return v.default=K,t&&t.set(K,v),v},g=function(K){if(typeof WeakMap!="function")return null;var f=new WeakMap,t=new WeakMap;return(g=function(c){return c?t:f})(K)},j.t0=O,j.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return j.t1=j.sent,d=(0,j.t0)(j.t1),j.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 9:return u=j.sent,j.t2=O,j.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"refC"));case 13:return j.t3=j.sent,h=(0,j.t2)(j.t3),r=function(K){return new Promise(function(f){return setTimeout(f,K)})},o={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u4E0B\u62C9\u9009\u6846",description:"\u52A0\u8F7D\u4E2D...",type:"string",enum:[],widget:"select"}}},i=function(){var K=(0,h.useForm)(),f=function(){K.setValues({input1:"hello world"}),r(3e3).then(function(v){K.setSchemaByPath("select1",{description:"",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]})})};return d.default.createElement(h.default,{form:K,schema:o,onMount:f})},A=i,j.abrupt("return",A);case 20:case"end":return j.stop()}},R)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.5.5"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"lifeCycle-demo"}},"listDisplay-demo":{component:Object(W.dynamic)({loader:function(){var P=Object(J.a)(b.a.mark(function R(){var d,u,h,g,O,r;return b.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return d=e("K+nK"),i.t0=d,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,u=(0,i.t0)(i.t1),i.t2=d,i.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"bQjt"));case 9:return i.t3=i.sent,h=(0,i.t2)(i.t3),g={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},O=function(){return u.default.createElement(h.default,{schema:g})},r=O,i.abrupt("return",r);case 15:case"end":return i.stop()}},R)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Be}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.5"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo"}},"listDisplay-demo-1":{component:Object(W.dynamic)({loader:function(){var P=Object(J.a)(b.a.mark(function R(){var d,u,h,g,O,r;return b.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return d=e("K+nK"),i.t0=d,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,u=(0,i.t0)(i.t1),i.t2=d,i.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"bQjt"));case 9:return i.t3=i.sent,h=(0,i.t2)(i.t3),g={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},O=function(){return u.default.createElement(h.default,{schema:g})},r=O,i.abrupt("return",r);case 15:case"end":return i.stop()}},R)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Be}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.5"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-1"}},"listDisplay-demo-2":{component:Object(W.dynamic)({loader:function(){var P=Object(J.a)(b.a.mark(function R(){var d,u,h,g,O,r;return b.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return d=e("K+nK"),i.t0=d,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,u=(0,i.t0)(i.t1),i.t2=d,i.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"bQjt"));case 9:return i.t3=i.sent,h=(0,i.t2)(i.t3),g={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},O=function(){return u.default.createElement(h.default,{schema:g})},r=O,i.abrupt("return",r);case 15:case"end":return i.stop()}},R)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Be}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.5"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-2"}},"listDisplay-demo-3":{component:Object(W.dynamic)({loader:function(){var P=Object(J.a)(b.a.mark(function R(){var d,u,h,g,O,r;return b.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return d=e("K+nK"),i.t0=d,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,u=(0,i.t0)(i.t1),i.t2=d,i.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"bQjt"));case 9:return i.t3=i.sent,h=(0,i.t2)(i.t3),g={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",props:{hideMove:!0},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},O=function(){return u.default.createElement(h.default,{schema:g})},r=O,i.abrupt("return",r);case 15:case"end":return i.stop()}},R)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
            props: {
              hideMove: true,
            },
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Be}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.5"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-3"}},"listDisplay-demo-4":{component:Object(W.dynamic)({loader:function(){var P=Object(J.a)(b.a.mark(function R(){var d,u,h,g,O,r;return b.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return d=e("K+nK"),i.t0=d,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,u=(0,i.t0)(i.t1),i.t2=d,i.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"bQjt"));case 9:return i.t3=i.sent,h=(0,i.t2)(i.t3),window.hello=function(A){var T=A.value;console.log(T)},g={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list4",itemProps:{buttons:[{callback:"hello",text:"\u590D\u5236"}]},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},O=function(){return u.default.createElement(h.default,{schema:g})},r=O,i.abrupt("return",r);case 16:case"end":return i.stop()}},R)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Be}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.5"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-4"}},"watch-demo":{component:Object(W.dynamic)({loader:function(){var P=Object(J.a)(b.a.mark(function R(){var d,u,h,g,O,r,o,i;return b.a.wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return O=function(l,K){if(!K&&l&&l.__esModule)return l;if(l===null||typeof l!="object"&&typeof l!="function")return{default:l};var f=g(K);if(f&&f.has(l))return f.get(l);var t={},v=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in l)if(c!=="default"&&Object.prototype.hasOwnProperty.call(l,c)){var I=v?Object.getOwnPropertyDescriptor(l,c):null;I&&(I.get||I.set)?Object.defineProperty(t,c,I):t[c]=l[c]}return t.default=l,f&&f.set(l,t),t},g=function(l){if(typeof WeakMap!="function")return null;var K=new WeakMap,f=new WeakMap;return(g=function(v){return v?f:K})(l)},T.t0=O,T.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return T.t1=T.sent,d=(0,T.t0)(T.t1),T.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 9:return u=T.sent,T.t2=O,T.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"refC"));case 13:return T.t3=T.sent,h=(0,T.t2)(T.t3),r={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"}}},o=function(){var l=(0,h.useForm)(),K={"#":function(t){console.log("\u8868\u5355\u7684\u65F6\u65F6\u6570\u636E\u4E3A\uFF1A",t)},input1:function(t){l.setValueByPath("input2",t)}};return d.default.createElement(h.default,{form:l,schema:r,watch:K})},i=o,T.abrupt("return",i);case 19:case"end":return T.stop()}},R)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.5.5"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo"}},"watch-demo-1":{component:Object(W.dynamic)({loader:function(){var P=Object(J.a)(b.a.mark(function R(){var d,u,h,g,O,r,o,i,A,T;return b.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return o=function(f,t){if(!t&&f&&f.__esModule)return f;if(f===null||typeof f!="object"&&typeof f!="function")return{default:f};var v=r(t);if(v&&v.has(f))return v.get(f);var c={},I=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var B in f)if(B!=="default"&&Object.prototype.hasOwnProperty.call(f,B)){var L=I?Object.getOwnPropertyDescriptor(f,B):null;L&&(L.get||L.set)?Object.defineProperty(c,B,L):c[B]=f[B]}return c.default=f,v&&v.set(f,c),c},r=function(f){if(typeof WeakMap!="function")return null;var t=new WeakMap,v=new WeakMap;return(r=function(I){return I?v:t})(f)},d=e("K+nK"),l.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return l.t0=d,l.next=8,e.e(14).then(e.t.bind(null,"4IMT",7));case 8:return l.t1=l.sent,u=(0,l.t0)(l.t1),l.t2=o,l.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return l.t3=l.sent,h=(0,l.t2)(l.t3),l.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 17:return g=l.sent,l.t4=o,l.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"refC"));case 21:return l.t5=l.sent,O=(0,l.t4)(l.t5),i={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"radio"}}}}},A=function(){var f=(0,O.useForm)(),t=function(I,B){B.length>0?alert("errorFields:"+JSON.stringify(B)):alert("formData:"+JSON.stringify(I,null,2))},v={input1:function(I){I.length>2?f.setSchemaByPath("obj1.select",function(B){var L=B.enumNames;return{enumNames:L.map(function(Z){return Z+"a"})}}):f.setSchemaByPath("obj1.select",{enumNames:["\u65E9","\u4E2D","\u665A"]})}};return h.default.createElement("div",null,h.default.createElement(O.default,{form:f,schema:i,onFinish:t,watch:v}),h.default.createElement(u.default,{type:"",style:{marginRight:8},onClick:function(){return f.setSchemaByPath("input2",{title:"\u7F16\u8F91\u6846",format:"textarea"})}},"\u5C06 input \u6539\u4E3A textarea"),h.default.createElement(u.default,{type:"primary",onClick:f.submit},"\u63D0\u4EA4"))},T=A,l.abrupt("return",T);case 27:case"end":return l.stop()}},R)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.5.5"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo-1"}},"widget-demo":{component:Object(W.dynamic)({loader:function(){var P=Object(J.a)(b.a.mark(function R(){var d,u,h,g,O,r,o,i,A,T,j,l,K;return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return A=function(c,I){if(!I&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var B=i(I);if(B&&B.has(c))return B.get(c);var L={},Z=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var Q in c)if(Q!=="default"&&Object.prototype.hasOwnProperty.call(c,Q)){var H=Z?Object.getOwnPropertyDescriptor(c,Q):null;H&&(H.get||H.set)?Object.defineProperty(L,Q,H):L[Q]=c[Q]}return L.default=c,B&&B.set(c,L),L},i=function(c){if(typeof WeakMap!="function")return null;var I=new WeakMap,B=new WeakMap;return(i=function(Z){return Z?B:I})(c)},d=e("K+nK"),t.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return t.t0=d,t.next=8,e.e(14).then(e.t.bind(null,"4IMT",7));case 8:return t.t1=t.sent,u=(0,t.t0)(t.t1),t.next=12,Promise.all([e.e(3),e.e(20)]).then(e.t.bind(null,"cUip",7));case 12:return t.t2=d,t.next=15,Promise.all([e.e(0),e.e(14),e.e(19),e.e(23)]).then(e.t.bind(null,"iJl9",7));case 15:return t.t3=t.sent,h=(0,t.t2)(t.t3),t.t4=d,t.next=20,e.e(83).then(e.bind(null,"0Owb"));case 20:return t.t5=t.sent,g=(0,t.t4)(t.t5),t.t6=A,t.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return t.t7=t.sent,O=(0,t.t6)(t.t7),t.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 29:return r=t.sent,t.t8=A,t.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"refC"));case 33:return t.t9=t.sent,o=(0,t.t8)(t.t9),T={type:"object",properties:{string:{title:"\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6",type:"string",widget:"site"},select:{title:"\u5355\u9009",type:"number",enum:[1,2,3],enumNames:["\u9009\u98791","\u9009\u98792","\u9009\u98793"]}}},j=function(c){return console.log("widget props:",c),O.default.createElement(h.default,(0,g.default)({addonBefore:"http://",addonAfter:".com"},c))},l=function(){var c=(0,o.useForm)(),I=function(){};return O.default.createElement("div",null,O.default.createElement(o.default,{readOnly:!0,form:c,schema:T,widgets:{site:j},onFinish:function(L){return alert(JSON.stringify(L,null,2))}}),O.default.createElement(u.default,{type:"primary",onClick:c.submit},"\u63D0\u4EA4"))},K=l,t.abrupt("return",K);case 40:case"end":return t.stop()}},R)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.5.5"},"react-dom":{version:">=16.8.0"}},identifier:"widget-demo"}},"schema-demo":{component:Object(W.dynamic)({loader:function(){var P=Object(J.a)(b.a.mark(function R(){var d,u,h,g,O;return b.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return d=e("K+nK"),o.t0=d,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,u=(0,o.t0)(o.t1),o.t2=d,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(17)]).then(e.bind(null,"c2mQ"));case 9:return o.t3=o.sent,h=(0,o.t2)(o.t3),o.next=13,e.e(18).then(e.bind(null,"8iYR"));case 13:return g=o.sent,O=function(){return u.default.createElement(h.default,{schema:g.basic})},o.abrupt("return",O);case 16:case"end":return o.stop()}},R)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { basic } from '../json/schema';

export default () => <FR schema={basic} />;`},"demo/FR.jsx":{import:"../demo/FR",content:ve},"json/schema.js":{import:"../json/schema",content:fn}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.5"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo"}},"schema-demo-1":{component:Object(W.dynamic)({loader:function(){var P=Object(J.a)(b.a.mark(function R(){var d,u,h,g,O;return b.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return d=e("K+nK"),o.t0=d,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,u=(0,o.t0)(o.t1),o.t2=d,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(17)]).then(e.bind(null,"c2mQ"));case 9:return o.t3=o.sent,h=(0,o.t2)(o.t3),o.next=13,e.e(18).then(e.bind(null,"8iYR"));case 13:return g=o.sent,O=function(){return u.default.createElement(h.default,{schema:g.titleTrick})},o.abrupt("return",O);case 16:case"end":return o.stop()}},R)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { titleTrick } from '../json/schema';

export default () => <FR schema={titleTrick} />;`},"demo/FR.jsx":{import:"../demo/FR",content:ve},"json/schema.js":{import:"../json/schema",content:fn}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.5.5"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo-1"}},"docs-playground":{component:Object(W.dynamic)({loader:function(){var P=Object(J.a)(b.a.mark(function R(){return b.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(26)]).then(e.bind(null,"BASV"));case 2:return u.abrupt("return",u.sent.default);case 3:case"end":return u.stop()}},R)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:Ie},"main.js":{import:"./main",content:Mn},"json/simplest.json":{import:"./json/simplest.json",content:Kn},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:Fn},"monaco/index.js":{import:"./monaco",content:pn},"suggestionsMap.js":{import:"./suggestionsMap",content:Qe},"index.css":{import:"./index.css",content:$n}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:"^17.x"},"react-dom":{version:">=16.9.0"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.5.5"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-monaco-editor":{version:"0.43.0"},"@types/react":{version:"^17.x"}},identifier:"docs-playground"}},"table-render-advanced":{component:Object(W.dynamic)({loader:function(){var P=Object(J.a)(b.a.mark(function R(){return b.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(26)]).then(e.bind(null,"7ZP+"));case 2:return u.abrupt("return",u.sent.default);case 3:case"end":return u.stop()}},R)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{tsx:wn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.2"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!0,identifier:"table-render-advanced"}},"table-render-demo":{component:Object(W.dynamic)({loader:function(){var P=Object(J.a)(b.a.mark(function R(){var d,u,h,g,O,r,o,i,A;return b.a.wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return d=e("K+nK"),j.t0=d,j.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return j.t1=j.sent,u=(0,j.t0)(j.t1),j.next=8,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(64)]).then(e.bind(null,"P2DI"));case 8:for(h=j.sent,g=[],O=0;O<6;O++)g.push({id:O.toString(),title:"\u6807\u9898".concat(O+1),created_at:new Date().getTime()});return r={type:"object",properties:{string:{title:"\u6807\u9898",type:"string",width:"30%"},created_at:{title:"\u521B\u5EFA\u65F6\u95F4",type:"string",format:"date",width:"30%"}}},o=[{title:"\u6807\u9898",dataIndex:"title"},{title:"\u521B\u5EFA\u65F6\u95F4",key:"since",dataIndex:"created_at",valueType:"date"},{title:"\u64CD\u4F5C",render:function(K,f){return u.default.createElement("a",{onClick:function(){return alert(K.title)}},"\u7F16\u8F91")}}],i=function(){var K=function(){return{rows:g,total:g.length}};return u.default.createElement(h.TableProvider,null,u.default.createElement(h.Search,{schema:r,api:K}),u.default.createElement(h.Table,{headerTitle:"\u6700\u7B80\u8868\u683C",columns:o,rowKey:"id"}))},A=i,j.abrupt("return",A);case 16:case"end":return j.stop()}},R)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
      width: '30%',
    },
    created_at: {
      title: '\u521B\u5EFA\u65F6\u95F4',
      type: 'string',
      format: 'date',
      width: '30%',
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

export default Wrapper;`}},dependencies:{react:{version:">=16.8.0"},"table-render":{version:"1.1.2"},antd:{version:"4.x",css:"antd/dist/antd.css"}},transform:!0,defaultShowCode:!0,identifier:"table-render-demo"}},"generator-demo":{component:Object(W.dynamic)({loader:function(){var P=Object(J.a)(b.a.mark(function R(){var d,u,h,g,O,r;return b.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return d=e("K+nK"),i.t0=d,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,u=(0,i.t0)(i.t1),i.t2=d,i.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(63)]).then(e.bind(null,"nYSz"));case 9:return i.t3=i.sent,h=(0,i.t2)(i.t3),g={type:"object",properties:{inputName:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string"}}},O=function(){return u.default.createElement("div",{style:{height:"80vh"}},u.default.createElement(h.default,{defaultValue:g}))},r=O,i.abrupt("return",r);case 15:case"end":return i.stop()}},R)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"generator-demo"}},"generator-modal":{component:Object(W.dynamic)({loader:function(){var P=Object(J.a)(b.a.mark(function R(){return b.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(26)]).then(e.bind(null,"PPgD"));case 2:return u.abrupt("return",u.sent.default);case 3:case"end":return u.stop()}},R)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:Dn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.4.0"},"react-dom":{version:">=16.9.0"}},identifier:"generator-modal"}},"generator-settings":{component:Object(W.dynamic)({loader:function(){var P=Object(J.a)(b.a.mark(function R(){return b.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(26)]).then(e.bind(null,"M63W"));case 2:return u.abrupt("return",u.sent.default);case 3:case"end":return u.stop()}},R)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:we}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-settings"}},"generator-layout":{component:Object(W.dynamic)({loader:function(){var P=Object(J.a)(b.a.mark(function R(){return b.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(26)]).then(e.bind(null,"SOdT"));case 2:return u.abrupt("return",u.sent.default);case 3:case"end":return u.stop()}},R)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:qn},"index.less":{import:"./index.less",content:Wn}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-layout"}},"generator-transformer":{component:Object(W.dynamic)({loader:function(){var P=Object(J.a)(b.a.mark(function R(){return b.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(26)]).then(e.bind(null,"jktF"));case 2:return u.abrupt("return",u.sent.default);case 3:case"end":return u.stop()}},R)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:_n}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.4.0"},"react-dom":{version:">=16.9.0"}},identifier:"generator-transformer"}},"generator-playground":{component:Object(W.dynamic)({loader:function(){var P=Object(J.a)(b.a.mark(function R(){return b.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(26)]).then(e.bind(null,"TYW4"));case 2:return u.abrupt("return",u.sent.default);case 3:case"end":return u.stop()}},R)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:rt},"index.less":{import:"./index.less",content:Wn}},dependencies:{react:{version:">=16.8.0"},umi:{version:"3.4.19"},"fr-generator":{version:"2.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-playground"}}}},TIsu:function(Tn,gn,e){},Zs1V:function(Tn){Tn.exports=JSON.parse("{}")},p8sG:function(Tn,gn,e){"use strict";Tn.exports=e("80pN")},pz0r:function(Tn,gn,e){"use strict";e.r(gn);var J=e("q1tI"),n=e.n(J),b=e("dEAq"),W=e.n(b),ce=e("0zqC"),V=e("ZpkN"),Be=e("JjdP"),Ae=n.a.memo(Be.default["migrate-demo"].component),ve=n.a.memo(Be.default["migrate-demo-1"].component);gn.default=fn=>(n.a.useEffect(()=>{fn!=null&&fn.location.hash&&b.AnchorLink.scrollToAnchor(decodeURIComponent(fn.location.hash.slice(1)))},[]),n.a.createElement(n.a.Fragment,null,n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"markdown"},n.a.createElement("h1",{id:"0x-\u5230-1x"},n.a.createElement(b.AnchorLink,{to:"#0x-\u5230-1x","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"0.x \u5230 1.x"),n.a.createElement("h2",{id:"\u4E09\u4E2A\u6539\u53D8"},n.a.createElement(b.AnchorLink,{to:"#\u4E09\u4E2A\u6539\u53D8","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u4E09\u4E2A\u6539\u53D8"),n.a.createElement("p",null,n.a.createElement("strong",null,"FormRender v1.0.0 \u7684\u5347\u7EA7\uFF0C\u4ECE\u4F7F\u7528\u65B9\u89C6\u89D2\u6765\u770B\uFF0C\u6700\u4E3B\u8981\u7684\u53D8\u52A8\u5F52\u7ED3\u4E3A\u4E09\u6761\uFF1A")),n.a.createElement("ol",null,n.a.createElement("li",null,n.a.createElement("p",null,"\u63D0\u4EA4\u7684\u65B9\u6CD5\u6536\u675F\uFF08\u5373\u7EDF\u4E00\u63D0\u4F9B submit \u65B9\u6CD5\uFF09\uFF0CformData \u548C\u6821\u9A8C\u4FE1\u606F\u5185\u7F6E")),n.a.createElement("li",null,n.a.createElement("p",null,"Schema \u4E66\u5199\u89C4\u5219\u66F4\u52A0\u6E05\u6670\uFF0C\u66F4\u52A0\u8D34\u8FD1\u7EC4\u4EF6 props")),n.a.createElement("li",null,n.a.createElement("p",null,"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u4E0D\u518D\u8981\u201C\u5957\u58F3\u201D\uFF0C\u5F88\u591A antd \u7EC4\u4EF6\u76F4\u63A5\u62FF\u6765\u80FD\u7528"))),n.a.createElement("p",null,"\u7B2C 1 \u6761\u662F\u4E3A\u4E86\u66F4\u52A0\u5F3A\u5927\u7684\u529F\u80FD\uFF0C\u540E\u4E24\u6761\u5219\u4E3A\u4E86\u66F4\u52A0\u5FEB\u6377\u548C\u8212\u9002\u7684\u5F00\u53D1\u4F53\u9A8C\u3002FormRender 1.0 \u5E26\u6765\u4E86\u54EA\u4E9B\u65B0\u529F\u80FD\uFF0C\u8BE6\u89C1\u6587\u7AE0\u5E95\u90E8 ",n.a.createElement("code",null,"Changelog \u601D\u8003")),n.a.createElement("h2",{id:"\u8FC1\u79FB\u65B9\u6848\u5982\u4E0B"},n.a.createElement(b.AnchorLink,{to:"#\u8FC1\u79FB\u65B9\u6848\u5982\u4E0B","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u8FC1\u79FB\u65B9\u6848\u5982\u4E0B"),n.a.createElement("p",null,n.a.createElement("strong",null,"FormRender v0.x \u7684\u4EE3\u7801\u5982\u4E0B\uFF1A")),n.a.createElement(V.a,{code:`import React, { useState } from 'react';
import FormRender from 'form-render/lib/antd';

const schema = {
  type: 'object',
  properties: {
    string: {
      title: '\u5B57\u7B26\u4E32',
      type: 'string',
    },
  },
};

function Demo() {
  const [formData, setData] = useState({});
  const [valid, setValid] = useState([]);
  const onSubmit = () => {
    if (valid.length > 0) {
      alert(\`\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A\${JSON.stringify(valid)}\`);
    } else {
      alert(JSON.stringify(formData));
    }
  };
  return (
    <div>
      <FormRender
        schema={schema}
        formData={formData}
        onChange={setData}
        onValidate={setValid}
      />
      <button onClick={onSubmit}>\u63D0\u4EA4</button>
    </div>
  );
}

export default Demo;`,lang:"js"}),n.a.createElement("h3",{id:"\u65B0\u7248\u672C\u5347\u7EA7\u6539\u52A8"},n.a.createElement(b.AnchorLink,{to:"#\u65B0\u7248\u672C\u5347\u7EA7\u6539\u52A8","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u65B0\u7248\u672C\u5347\u7EA7\u6539\u52A8"),n.a.createElement("p",null,"\u5B8C\u5168\u4F7F\u7528\u65B0 api\uFF0CformData \u548C onChange \u8FD9\u4E9B\u539F\u672C\u66B4\u9732\u5728\u5916\u7684\u5C5E\u6027\u6536\u675F\uFF0Csubmit \u65B9\u6CD5\u7531 form \u5B9E\u4F8B\u63D0\u4F9B\uFF0C\u4E00\u822C\u60C5\u51B5\u4E0B\u8FC1\u79FB\u4E5F\u5FEB\u7684\uFF0C\u53EA\u662F\u8981\u6CE8\u610F\u6240\u6709\u5728\u5916\u90E8\u4F7F\u7528\u5230 formData \u7684\u573A\u666F\uFF0C\u9700\u8981\u66FF\u6362\u4E3A ",n.a.createElement("code",null,"form.getValues()"),"\uFF0C\u6240\u6709\u4F7F\u7528\u5230 onChange \u7684\u5730\u65B9\u9700\u8981\u4FEE\u6539\u4E3A ",n.a.createElement("code",null,"form.setValues()"))),n.a.createElement(ce.default,Be.default["migrate-demo"].previewerProps,n.a.createElement(Ae,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("p",null,"\u7531\u4E8E\u65B0\u7248\u7684 formData/onChange/validate/onValidate \u5168\u90E8\u5185\u7F6E\u4E86\uFF0C\u6240\u4EE5\u5728\u8FC1\u79FB\u65F6\uFF0C\u5916\u90E8\u6240\u6709\u4F7F\u7528\u5230\u4E09\u8005\u7684\u5730\u65B9\u4E00\u5F8B\u4F7F\u7528 form \u65B9\u6CD5\u66FF\u6362\uFF1A"),n.a.createElement(V.a,{code:`formData  ->  form.getValues()
onChange  ->  form.setValues(data)
validate  ->  form.errorFields
onValidate  ->  \u76F4\u63A5\u53BB\u6389`,lang:"js"}),n.a.createElement("p",null,"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u4FA7\u7684 0.x \u4E0E 1.x \u7684\u4F7F\u7528\u5BF9\u6BD4\uFF1A"),n.a.createElement(V.a,{code:`// 0.x
const schema = {
  title: '\u81EA\u5B9A\u4E49',
  type: 'string',
  'ui:widget': 'myWidget',
  'ui:options': {
    prefix: 'hello',
  },
};

const MyWidget = ({ name, value, onChange, options }) => {
  const handleChange = e => {
    onChange(name, e.target.value);
  };
  return (
    <div>
      <Input value={value} onChange={handleChange} {...options} />
      <span>\u6CE8\u610F\u4E8B\u9879</span>
    </div>
  );
};
// 1.x
const schema = {
  title: '\u81EA\u5B9A\u4E49',
  type: 'string',
  widget: 'myWidget',
  props: {
    prefix: 'hello',
  },
};

const MyWidget = props => {
  return (
    <div>
      <Input {...props} />
      <span>\u6CE8\u610F\u4E8B\u9879</span>
    </div>
  );
};`,lang:"js"}),n.a.createElement("ol",null,n.a.createElement("li",null,n.a.createElement("code",null,"onChange")," \u4E0D\u518D\u63A5\u6536 name \u4F5C\u4E3A\u7B2C\u4E00\u4E2A\u5165\u53C2\uFF0C\u800C\u6539\u4E3A\u66F4\u4E3A\u81EA\u7136\u7684\u53EA\u6709\u4E00\u4E2A\u5165\u53C2 value"),n.a.createElement("li",null,"\u6240\u6709",n.a.createElement("code",null,"ui:options"),"\u7684\u5185\u5BB9\u4F1A\u76F4\u63A5\u5728 props \u91CC\u62FF\u5230\uFF0C\u800C\u4E0D\u9700\u8981\u518D\u4ECE props.options \u91CC\u83B7\u53D6 \uFF08ui:options \u5DF2\u66F4\u540D\u4E3A props\uFF0C\u4E0D\u8FC7\u5728\u9876\u5C42\u505A\u4E86 schema \u5B57\u6BB5\u7684\u517C\u5BB9\uFF09")),n.a.createElement("h2",{id:"schema-\u7EC6\u8282\u4E0A\u7684\u6539\u52A8"},n.a.createElement(b.AnchorLink,{to:"#schema-\u7EC6\u8282\u4E0A\u7684\u6539\u52A8","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"schema \u7EC6\u8282\u4E0A\u7684\u6539\u52A8"),n.a.createElement("p",null,"\u5355\u9009\u7EC4\u4EF6\u4E0D\u518D\u9ED8\u8BA4\u9009\u4E2D\u7B2C\u4E00\u9879\uFF0C\u9ED8\u8BA4\u503C\u4E3A undefined\uFF0C\u9664\u975E\u901A\u8FC7 default \u5B57\u6BB5\u6307\u660E\u3002"),n.a.createElement(V.a,{code:`// \u5355\u9009
{
  "title": "\u5355\u9009",
  "type": "string",
  "enum": ["hz", "wh", "gy"],
  "enumNames": ["\u676D\u5DDE", "\u6B66\u6C49", "\u8D35\u9633"],
  "default": "hz"
}`,lang:"js"}),n.a.createElement("h2",{id:"\u65E7\u7248-schema-\u8F6C\u6362\u5668\uFF1A"},n.a.createElement(b.AnchorLink,{to:"#\u65E7\u7248-schema-\u8F6C\u6362\u5668\uFF1A","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u65E7\u7248 schema \u8F6C\u6362\u5668\uFF1A")),n.a.createElement(ce.default,Be.default["migrate-demo-1"].previewerProps,n.a.createElement(ve,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h2",{id:"changelog-\u601D\u8003"},n.a.createElement(b.AnchorLink,{to:"#changelog-\u601D\u8003","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Changelog \u601D\u8003"),n.a.createElement("p",null,"\u5728\u6700\u540E\u7F57\u5217\u4E00\u4E0B\u7EC6\u8282\u4E0A FormRender 0.x -> 1.0 \u7EC6\u8282\u4E0A\u7684\u6539\u52A8 & \u601D\u8003"),n.a.createElement("h3",{id:"\u529F\u80FD\u589E\u5F3A"},n.a.createElement(b.AnchorLink,{to:"#\u529F\u80FD\u589E\u5F3A","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u529F\u80FD\u589E\u5F3A"),n.a.createElement("ol",null,n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement("strong",null,"\u5C55\u793A\u5347\u7EA7")),n.a.createElement("ul",null,n.a.createElement("li",null,"\u5217\u8868\u7684\u5C55\u793A\u652F\u6301\u4E09\u79CD\u6A21\u5F0F\uFF0C\u5206\u522B\u652F\u6301\u6BCF\u4E2A item 1-2 \u4E2A\u5143\u7D20\uFF0C3-5 \u4E2A\u5143\u7D20\u548C\u590D\u6742\u7ED3\u6784"),n.a.createElement("li",null,"\u5BF9\u8C61\u7684\u5C55\u793A\u652F\u6301\u4E8C\u79CD\u6A21\u5F0F"),n.a.createElement("li",null,"\u6821\u9A8C\u7684\u5C55\u793A\u548C antd \u6548\u679C\u4E00\u81F4"),n.a.createElement("li",null,"\u5C55\u793A\u7C7B\u578B\u9664\u4E86\u57FA\u7840\u7684 column \u548C row\uFF0C\u8FD8\u652F\u6301\u4E86 inline \u6A21\u5F0F"))),n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement("strong",null,"\u5185\u7F6E\u7EC4\u4EF6\u66F4\u4E30\u5BCC")),n.a.createElement("ul",null,n.a.createElement("li",null,"\u65B0\u589E\u4E86 rate\uFF0CtreeSelect, cascader \u7B49\u7EC4\u4EF6\u7684\u5185\u7F6E\u652F\u6301"))),n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement("strong",null,"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u5F00\u53D1\u66F4\u4FBF\u6377\uFF0C\u529F\u80FD\u66F4\u5F3A\u5927")),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("p",null,"props \u76F4\u63A5\u900F\u4F20\u4E86\uFF0C\u4E0D\u518D\u9700\u8981\u4ECE options \u5B57\u6BB5\u91CC\u53BB\u53D6\u5F97")),n.a.createElement("li",null,n.a.createElement("p",null,"onChange \u65B9\u6CD5\u7684\u5165\u53C2\u4E0D\u518D\u9700\u8981\u4F20 name \u4F5C\u4E3A\u7B2C\u4E00\u4E2A\u53C2\u6570\uFF08\u8FD9\u4E2A\u8BBE\u8BA1\u5176\u5B9E\u5F88\u4E0D\u81EA\u7136\u548C\u6CA1\u6709\u5FC5\u8981\uFF09\uFF0C\u540C\u65F6\u5982\u679C\u539F\u751F\u7EC4\u4EF6\u7684 onChange \u8FD4\u56DE\u7684\u662F event\uFF0C\u4E5F\u4F1A\u5904\u7406\u4E00\u6B65\u81EA\u52A8\u80FD\u62FF\u5230 value \u503C")),n.a.createElement("li",null,n.a.createElement("p",null,"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u5185\u7F6E\u4E86 onItemChange(namePath, value) \u65B9\u6CD5\uFF0C\u53EF\u4EE5\u65B9\u4FBF\u7684\u5728\u4E00\u4E2A\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u4E2D\u4FEE\u6539\u8868\u5355\u4EFB\u4F55\u6570\u636E\u7684\u503C")),n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement("strong",null,"\u8FD9\u4E9B\u7EC6\u8282\u7684\u76EE\u6807\uFF0C\u662F\u8BA9\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7684\u4E66\u5199\u8D34\u8FD1\u62FF\u6765\u4E00\u4E2A\u7EC4\u4EF6\u76F4\u63A5\u80FD\u7528\uFF0C\u800C\u4E0D\u662F\u50CF\u4E4B\u524D\u4E00\u6837\u518D\u7B80\u5355\u7684\u573A\u666F\u4E5F\u9700\u8981\u505A\u4E00\u6B65\u5305\u88C5\u5904\u7406\uFF0C\u4ECE\u539F\u672C\u7684\uFF1A")),n.a.createElement(V.a,{code:`const schema = {
  title: '\u81EA\u5B9A\u4E49',
  type: 'string',
  'ui:widget': 'myWidget',
  'ui:options': {
    prefix: 'hello',
  },
};

const MyWidget = ({ name, value, onChange, options }) => {
  const handleChange = e => {
    onChange(name, e.target.value);
  };
  return (
    <div>
      <Input value={value} onChange={handleChange} {...options} />
      <span>\u6CE8\u610F\u4E8B\u9879</span>
    </div>
  );
};`,lang:"js"})),n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement("strong",null,"\u53D8\u4E3A\uFF1A")),n.a.createElement(V.a,{code:`const schema = {
  title: '\u81EA\u5B9A\u4E49',
  type: 'string',
  widget: 'myWidget',
  props: {
    prefix: 'hello',
  },
};

const MyWidget = props => {
  return (
    <div>
      <Input {...props} />
      <span>\u6CE8\u610F\u4E8B\u9879</span>
    </div>
  );
};`,lang:"js"})))),n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement("strong",null,"\u6821\u9A8C\u4E30\u5BCC\u5EA6\u548C\u4F53\u9A8C\u5927\u5E45\u5347\u7EA7")),n.a.createElement("ul",null,n.a.createElement("li",null,"\u6821\u9A8C\u7684\u5C55\u793A & \u5C55\u793A\u5B9E\u9645\u7EC8\u4E8E\u7B26\u5408\u7528\u6237\u4E60\u60EF\u4E86"),n.a.createElement("li",null,"\u4E0D\u518D\u53EA\u652F\u6301 pattern \u6821\u9A8C\u4E86\uFF0C\u73B0\u5728\u652F\u6301\u5305\u62EC\u81EA\u5B9A\u4E49 validator \u7684\u6240\u6709 antd form \u652F\u6301\u7684\u6821\u9A8C"),n.a.createElement("li",null,"\u6821\u9A8C\u652F\u6301\u5F02\u6B65\u4E86"),n.a.createElement("li",null,"\u6821\u9A8C\u652F\u6301\u5916\u90E8\u6821\u9A8C\u7ED3\u679C\u56DE\u586B\u5C55\u793A\u4E86"))),n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement("strong",null,"\u5176\u4ED6")),n.a.createElement("ul",null,n.a.createElement("li",null,"\u672A\u538B\u7F29\u7684\u5305\u4F53\u79EF\u4ECE 76k -> 11k"),n.a.createElement("li",null,"\u5BF9 typescript \u7684\u5185\u7F6E\u652F\u6301"),n.a.createElement("li",null,"\u6E32\u67D3\u4F1A\u6839\u636E schema \u7684\u7ED3\u6784\u6765\u6E32\u67D3\uFF0C\u4E0D\u518D\u4F1A\u56E0\u4E3A formData \u503C\u7684\u987A\u5E8F\u53D8\u5316\u5F71\u54CD\u5230\u5C55\u793A"),n.a.createElement("li",null,"\u63D0\u4EA4\u7684 formData\uFF0C\u4E0D\u5C55\u793A\u7684 key \u4E0D\u4F1A\u8FD4\u56DE")))),n.a.createElement("h3",{id:"\u8BBE\u8BA1\u53D6\u820D"},n.a.createElement(b.AnchorLink,{to:"#\u8BBE\u8BA1\u53D6\u820D","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u8BBE\u8BA1\u53D6\u820D"),n.a.createElement("ol",null,n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement("strong",null,"\u6682\u65F6\u4E0D\u652F\u6301 fusion \u4E86"),"\uFF1Afusion \u4E0E antd \u5C55\u793A\u4E0A\u975E\u5E38\u7C7B\u4F3C\uFF0C\u4F46\u7EC4\u4EF6 api \u672C\u8EAB\u4EE5\u53CA\u6784\u5EFA\u5C42\u9762\u7684\u914D\u7F6E\u4E0A\u8FD8\u662F\u6709\u4E0D\u5C11\u4E0D\u540C\u7684\uFF0C\u5BF9\u4E24\u8005\u7684\u540C\u65F6\u652F\u6301\u82B1\u4E86\u5927\u91CF\u7684\u7CBE\u529B\u3002FormRender \u9009\u62E9\u6682\u65F6\u653E\u5F03 fusion\uFF0C\u66F4\u52A0\u8D34\u5408 antd\uFF0C\u5728\u529F\u80FD\u6DF1\u5165\u5B9E\u73B0\u548C\u8FED\u4EE3\u6548\u7387\u4E0A\u90FD\u4F1A\u6709\u5F88\u5927\u7684\u63D0\u9AD8\u3002\u4F46\u7EC4\u4EF6\u5E93\u7684\u5165\u53E3\u662F\u4E00\u76F4\u5F00\u653E\u7740\u7684\uFF08widgets props\uFF09\uFF0C\u6B22\u8FCE pr \u652F\u6301 fusion \u4FA7\u7684\u7EC4\u4EF6\u7684\u72EC\u7ACB\u652F\u6301\u3002")),n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement("strong",null,"\u53EA\u5141\u8BB8\u4F7F\u7528\u5B57\u7B26\u4E32\u7C7B\u578B\u7684\u51FD\u6570\u8868\u8FBE\u5F0F"),"\uFF1A\u7531\u4E8E schema \u53EF\u4EE5\u662F js \u5BF9\u8C61\uFF0C\u6240\u4EE5\u4E4B\u524D\u652F\u6301 schema \u91CC\u6709\u51FD\u6570\u7C7B\u578B\u7684\u8868\u8FBE\u5F0F\uFF0C\u4F1A\u5728\u6E32\u67D3\u524D\u8BA1\u7B97\u51FA\u51FD\u6570\u7684 return \u4F5C\u4E3A\u6E32\u67D3\u503C\u3002\u4F46\u7EC4\u4EF6\u7684 props \u4EE5\u53CA\u6821\u9A8C\u51FD\u6570\u53EF\u80FD\u672C\u8EAB\u5C31\u662F\u51FD\u6570\uFF0C\u8FD9\u4E9B\u51FD\u6570\u662F\u4E0D\u5E0C\u671B\u88AB\u63D0\u524D\u8BA1\u7B97\u7684\uFF0C\u800C\u53EA\u662F\u4F5C\u4E3A props \u4F20\u5165\u3002FR \u5E76\u6CA1\u6709\u5F88\u597D\u7684\u529E\u6CD5\u533A\u5206\u4E00\u4E2A\u51FD\u6570\u662F\u9700\u8981\u88AB\u76F4\u63A5\u6267\u884C\u8FD8\u662F\u539F\u6837\u4F5C\u4E3A\u51FD\u6570\u900F\u4F20\uFF0C\u6240\u4EE5\u8FD9\u91CC\u7684\u53D6\u820D\u662F\uFF0C\u4E0D\u5141\u8BB8\u51FD\u6570 props \u6216\u8005\u4E0D\u5141\u8BB8\u51FD\u6570\u5F0F\u7684\u8868\u8FBE\u5F0F\u3002\u7531\u4E8E\u8868\u8FBE\u5F0F\u5DF2\u7ECF\u6709\u5B57\u7B26\u4E32\u7684\u4E66\u5199\u65B9\u5F0F\uFF0C\u529F\u80FD\u662F\u5B8C\u5168\u7B49\u4EF7\u7684\uFF0C\u6240\u4EE5\u4E3A\u4E86\u5141\u8BB8\u51FD\u6570\u4F5C\u4E3A props\uFF0C\u6211\u4EEC\u4E0D\u518D\u652F\u6301\u51FD\u6570\u4F5C\u4E3A\u8868\u8FBE\u5F0F\u3002"),n.a.createElement(V.a,{code:`showMore: {
  title: "\u663E\u793A\u66F4\u591A",
  type: "boolean"
},
input1: {
  title: '\u8F93\u5165\u68461',
  type: 'string',
  'ui:hidden': (formData) => !formData.showMore
}

// \u8BF7\u8F6C\u6362\u4E3A\uFF1A
showMore: {
  title: "\u663E\u793A\u66F4\u591A",
  type: "boolean"
},
input1: {
  title: '\u8F93\u5165\u68461',
  type: 'string',
  'ui:hidden': '{{!formData.showMore}}',
}`,lang:"js"})),n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement("strong",null,"\u4E0D\u518D\u8BA1\u7B97\u521D\u59CB\u503C"),"\uFF1A\u8FD9\u662F\u4E00\u4E2A\u5185\u90E8\u7684\u6539\u52A8\u3002\u65B0\u7684 FormRender\uFF0C\u4E0D\u4F1A\u6BCF\u6B21 onChange \u540E\u90FD\u6267\u884C resolve \u751F\u6210\u4E00\u4EFD formData \u7684\u9AA8\u67B6\uFF0C\u6CA1\u6709\u586B\u7684\u6846\u7684\u503C\u5C31\u662F undefined\u3002\u800C\u53EA\u5728\u63D0\u4EA4\u548C\u6821\u9A8C\u65F6\u4F1A\u751F\u6210\u9AA8\u67B6\u3002\u8FD9\u907F\u514D\u4E86\u5F88\u591A\u5728\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u4E2D\u5C1D\u8BD5\u4FEE\u6539 formData \u65F6\u5BB9\u6613\u4EA7\u751F\u6B7B\u5FAA\u73AF\u6216\u8005\u4FEE\u6539\u65E0\u6548\u7684\u95EE\u9898\uFF0C\u4E5F\u907F\u514D\u4E86\u5916\u90E8\u6CA1\u6709\u5F88\u597D\u7684\u65B9\u6CD5\u62FF\u5230\u9ED1\u7BB1\u7684 resolve \u540E\u7684\u6570\u636E\u3002")))))))}}]);
