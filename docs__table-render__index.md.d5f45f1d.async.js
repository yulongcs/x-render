(window.webpackJsonp=window.webpackJsonp||[]).push([[52,10],{"0zqC":function(Tn,gn,e){"use strict";e.r(gn);var J=e("tJVT"),n=e("q1tI"),v=e.n(n),L=e("wx14"),fe=e("rePB"),V=e("ODXe"),Ke=e("U8pU"),Ae=e("Ff2n"),ce=e("VTBJ"),Jn=e("TSYQ"),Ie=e.n(Jn),Bn=e("Zm9Q"),Kn=e("5Z9U"),On=e("6cGi"),pn=e("KQm4"),Qe=e("wgJM"),xn=e("t23M");function Mn(a){var s=Object(n.useRef)(),m=Object(n.useRef)(!1);function E(){for(var O=arguments.length,b=new Array(O),S=0;S<O;S++)b[S]=arguments[S];m.current||(Qe.a.cancel(s.current),s.current=Object(Qe.a)(function(){a.apply(void 0,b)}))}return Object(n.useEffect)(function(){return function(){m.current=!0,Qe.a.cancel(s.current)}},[]),E}function Sn(a){var s=Object(n.useRef)([]),m=Object(n.useState)({}),E=Object(V.a)(m,2),O=E[1],b=Object(n.useRef)(typeof a=="function"?a():a),S=Mn(function(){var w=b.current;s.current.forEach(function(x){w=x(w)}),s.current=[],b.current=w,O({})});function R(w){s.current.push(w),S()}return[b.current,R]}var We=e("4IlW");function _n(a,s){var m,E=a.prefixCls,O=a.id,b=a.active,S=a.rtl,R=a.tab,w=R.key,x=R.tab,$=R.disabled,Y=R.closeIcon,z=a.tabBarGutter,ie=a.tabPosition,X=a.closable,Q=a.renderWrapper,oe=a.removeAriaLabel,U=a.editable,ee=a.onClick,re=a.onRemove,k=a.onFocus,le="".concat(E,"-tab");n.useEffect(function(){return re},[]);var _={};ie==="top"||ie==="bottom"?_[S?"marginLeft":"marginRight"]=z:_.marginBottom=z;var be=U&&X!==!1&&!$;function te(se){$||ee(se)}function me(se){se.preventDefault(),se.stopPropagation(),U.onEdit("remove",{key:w,event:se})}var pe=n.createElement("div",{key:w,ref:s,className:Ie()(le,(m={},Object(fe.a)(m,"".concat(le,"-with-remove"),be),Object(fe.a)(m,"".concat(le,"-active"),b),Object(fe.a)(m,"".concat(le,"-disabled"),$),m)),style:_,onClick:te},n.createElement("div",{role:"tab","aria-selected":b,id:O&&"".concat(O,"-tab-").concat(w),className:"".concat(le,"-btn"),"aria-controls":O&&"".concat(O,"-panel-").concat(w),"aria-disabled":$,tabIndex:$?null:0,onClick:function(H){H.stopPropagation(),te(H)},onKeyDown:function(H){[We.a.SPACE,We.a.ENTER].includes(H.which)&&(H.preventDefault(),te(H))},onFocus:k},x),be&&n.createElement("button",{type:"button","aria-label":oe||"remove",tabIndex:0,className:"".concat(le,"-remove"),onClick:function(H){H.stopPropagation(),me(H)}},Y||U.removeIcon||"\xD7"));return Q&&(pe=Q(pe)),pe}var $n=n.forwardRef(_n),et={width:0,height:0,left:0,top:0};function ct(a,s,m){return Object(n.useMemo)(function(){for(var E,O=new Map,b=s.get((E=a[0])===null||E===void 0?void 0:E.key)||et,S=b.left+b.width,R=0;R<a.length;R+=1){var w=a[R].key,x=s.get(w);if(!x){var $;x=s.get(($=a[R-1])===null||$===void 0?void 0:$.key)||et}var Y=O.get(w)||Object(ce.a)({},x);Y.right=S-Y.left-Y.width,O.set(w,Y)}return O},[a.map(function(E){return E.key}).join("_"),s,m])}var j={width:0,height:0,left:0,top:0,right:0};function P(a,s,m,E,O){var b=O.tabs,S=O.tabPosition,R=O.rtl,w,x,$;["top","bottom"].includes(S)?(w="width",x=R?"right":"left",$=Math.abs(s.left)):(w="height",x="top",$=-s.top);var Y=s[w],z=m[w],ie=E[w],X=Y;return z+ie>Y&&(X=Y-ie),Object(n.useMemo)(function(){if(!b.length)return[0,0];for(var Q=b.length,oe=Q,U=0;U<Q;U+=1){var ee=a.get(b[U].key)||j;if(ee[x]+ee[w]>$+X){oe=U-1;break}}for(var re=0,k=Q-1;k>=0;k-=1){var le=a.get(b[k].key)||j;if(le[x]<$){re=k+1;break}}return[re,oe]},[a,$,X,S,b.map(function(Q){return Q.key}).join("_"),R])}var D=e("Gytx"),d=e.n(D),l=e("Kwbf");function p(a,s){var m=a.prefixCls,E=a.invalidate,O=a.item,b=a.renderItem,S=a.responsive,R=a.registerSize,w=a.itemKey,x=a.className,$=a.style,Y=a.children,z=a.display,ie=a.order,X=a.component,Q=X===void 0?"div":X,oe=Object(Ae.a)(a,["prefixCls","invalidate","item","renderItem","responsive","registerSize","itemKey","className","style","children","display","order","component"]),U=S&&!z;function ee(be){R(w,be)}n.useEffect(function(){return function(){ee(null)}},[]);var re=b&&O!==void 0?b(O):Y,k;E||(k={opacity:U?0:1,height:U?0:void 0,overflowY:U?"hidden":void 0,order:S?ie:void 0,pointerEvents:U?"none":void 0});var le={};U&&(le["aria-hidden"]=!0);var _=n.createElement(Q,Object(L.a)({className:Ie()(!E&&m,x),style:Object(ce.a)(Object(ce.a)({},k),$)},le,oe,{ref:s}),re);return S&&(_=n.createElement(xn.default,{onResize:function(te){var me=te.offsetWidth;ee(me)}},_)),_}var y=n.forwardRef(p);y.displayName="Item";var C=y;function r(){var a=Object(n.useState)({}),s=Object(V.a)(a,2),m=s[1],E=Object(n.useRef)([]),O=Object(n.useRef)(!1),b=0,S=0;Object(n.useEffect)(function(){return function(){O.current=!0}},[]);function R(w){var x=b;b+=1,E.current.length<x+1&&(E.current[x]=w);var $=E.current[x];function Y(z){E.current[x]=typeof z=="function"?z(E.current[x]):z,Qe.a.cancel(S),S=Object(Qe.a)(function(){O.current||m({})})}return[$,Y]}return R}var u=function(s,m){var E=n.useContext(I);if(!E){var O=s.component,b=O===void 0?"div":O,S=Object(Ae.a)(s,["component"]);return n.createElement(b,Object(L.a)({},S,{ref:m}))}var R=E.className,w=Object(Ae.a)(E,["className"]),x=s.className,$=Object(Ae.a)(s,["className"]);return n.createElement(I.Provider,{value:null},n.createElement(C,Object(L.a)({ref:m,className:Ie()(R,x)},w,$)))},i=n.forwardRef(u);i.displayName="RawItem";var K=i,I=n.createContext(null),F="responsive",c="invalidate";function N(a){return"+ ".concat(a.length," ...")}function h(a,s){var m=a.prefixCls,E=m===void 0?"rc-overflow":m,O=a.data,b=O===void 0?[]:O,S=a.renderItem,R=a.renderRawItem,w=a.itemKey,x=a.itemWidth,$=x===void 0?10:x,Y=a.ssr,z=a.style,ie=a.className,X=a.maxCount,Q=a.renderRest,oe=a.renderRawRest,U=a.suffix,ee=a.component,re=ee===void 0?"div":ee,k=a.itemComponent,le=a.onVisibleChange,_=Object(Ae.a)(a,["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"]),be=r(),te=Y==="full",me=be(null),pe=Object(V.a)(me,2),se=pe[0],H=pe[1],de=se||0,ye=be(new Map),ge=Object(V.a)(ye,2),Se=ge[0],Le=ge[1],Ee=be(0),Oe=Object(V.a)(Ee,2),Me=Oe[0],Be=Oe[1],Pe=be(0),je=Object(V.a)(Pe,2),$e=je[0],_e=je[1],Ve=be(0),Je=Object(V.a)(Ve,2),Xe=Je[0],xe=Je[1],Fn=Object(n.useState)(null),an=Object(V.a)(Fn,2),Ze=an[0],un=an[1],yn=Object(n.useState)(null),bn=Object(V.a)(yn,2),Ne=bn[0],He=bn[1],en=n.useMemo(function(){return Ne===null&&te?Number.MAX_SAFE_INTEGER:Ne||0},[Ne,se]),ke=Object(n.useState)(!1),Wn=Object(V.a)(ke,2),zn=Wn[0],Ln=Wn[1],rn="".concat(E,"-item"),Dn=Math.max(Me,$e),on=b.length&&X===F,jn=X===c,nn=on||typeof X=="number"&&b.length>X,sn=Object(n.useMemo)(function(){var ve=b;return on?se===null&&te?ve=b:ve=b.slice(0,Math.min(b.length,de/$)):typeof X=="number"&&(ve=b.slice(0,X)),ve},[b,$,se,X,on]),Pn=Object(n.useMemo)(function(){return on?b.slice(en+1):b.slice(sn.length)},[b,sn,on,en]),mn=Object(n.useCallback)(function(ve,Re){var we;return typeof w=="function"?w(ve):(we=w&&(ve==null?void 0:ve[w]))!==null&&we!==void 0?we:Re},[w]),qe=Object(n.useCallback)(S||function(ve){return ve},[S]);function Ge(ve,Re){He(ve),Re||(Ln(ve<b.length-1),le==null||le(ve))}function Yn(ve,Re){H(Re.clientWidth)}function Hn(ve,Re){Le(function(we){var tn=new Map(we);return Re===null?tn.delete(ve):tn.set(ve,Re),tn})}function tt(ve,Re){_e(Re),Be($e)}function En(ve,Re){xe(Re)}function vn(ve){return Se.get(mn(sn[ve],ve))}n.useLayoutEffect(function(){if(de&&Dn&&sn){var ve=Xe,Re=sn.length,we=Re-1;if(!Re){Ge(0),un(null);return}for(var tn=0;tn<Re;tn+=1){var Zn=vn(tn);if(Zn===void 0){Ge(tn-1,!0);break}if(ve+=Zn,tn===we-1&&ve+vn(we)<=de){Ge(we),un(null);break}else if(ve+Dn>de){Ge(tn-1),un(ve-Zn-Xe+$e);break}else if(tn===we){Ge(we),un(ve-Xe);break}}U&&vn(0)+Xe>de&&un(null)}},[de,Se,$e,Xe,mn,sn]);var Gn=zn&&!!Pn.length,Cn={};Ze!==null&&on&&(Cn={position:"absolute",left:Ze,top:0});var fn={prefixCls:rn,responsive:on,component:k,invalidate:jn},Xn=R?function(ve,Re){var we=mn(ve,Re);return n.createElement(I.Provider,{key:we,value:Object(ce.a)(Object(ce.a)({},fn),{},{order:Re,item:ve,itemKey:we,registerSize:Hn,display:Re<=en})},R(ve,Re))}:function(ve,Re){var we=mn(ve,Re);return n.createElement(C,Object(L.a)({},fn,{order:Re,key:we,item:ve,renderItem:qe,itemKey:we,registerSize:Hn,display:Re<=en}))},An,Qn={order:Gn?en:Number.MAX_SAFE_INTEGER,className:"".concat(rn,"-rest"),registerSize:tt,display:Gn};if(oe)oe&&(An=n.createElement(I.Provider,{value:Object(ce.a)(Object(ce.a)({},fn),Qn)},oe(Pn)));else{var dn=Q||N;An=n.createElement(C,Object(L.a)({},fn,Qn),typeof dn=="function"?dn(Pn):dn)}var In=n.createElement(re,Object(L.a)({className:Ie()(!jn&&E,ie),style:z,ref:s},_),sn.map(Xn),nn?An:null,U&&n.createElement(C,Object(L.a)({},fn,{order:en,className:"".concat(rn,"-suffix"),registerSize:En,display:!0,style:Cn}),U));return on&&(In=n.createElement(xn.default,{onResize:Yn},In)),In}var t=n.forwardRef(h);t.displayName="Overflow",t.Item=K,t.RESPONSIVE=F,t.INVALIDATE=c;var g=t,o=g,A=e("1OyB"),B=e("vuIU"),W=e("Ji7U"),Z=e("LK+K"),G=e("bT9E"),ue=e("YrtM"),Fe=n.createContext(null);function Te(a,s){var m=Object(ce.a)({},a);return Object.keys(s).forEach(function(E){var O=s[E];O!==void 0&&(m[E]=O)}),m}function cn(a){var s=a.children,m=a.locked,E=Object(Ae.a)(a,["children","locked"]),O=n.useContext(Fe),b=Object(ue.a)(function(){return Te(O,E)},[O,E],function(S,R){return!m&&(S[0]!==R[0]||!d()(S[1],R[1]))});return n.createElement(Fe.Provider,{value:b},s)}function Rn(a,s,m,E){var O=n.useContext(Fe),b=O.activeKey,S=O.onActive,R=O.onInactive,w={active:b===a};return s||(w.onMouseEnter=function(x){m==null||m({key:a,domEvent:x}),S(a)},w.onMouseLeave=function(x){E==null||E({key:a,domEvent:x}),R(a)}),w}function wn(a){var s=a.item,m=Object(Ae.a)(a,["item"]);return Object.defineProperty(m,"item",{get:function(){return Object(l.a)(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),s}}),m}function f(a){var s=a.icon,m=a.props,E=a.children,O;return typeof s=="function"?O=n.createElement(s,Object(ce.a)({},m)):O=s,O||E||null}function T(a){var s=n.useContext(Fe),m=s.mode,E=s.rtl,O=s.inlineIndent;if(m!=="inline")return null;var b=a;return E?{paddingRight:b*O}:{paddingLeft:b*O}}var M=[],he=n.createContext(null);function ne(){return n.useContext(he)}var De=n.createContext(M);function Ue(a){var s=n.useContext(De);return n.useMemo(function(){return a!==void 0?[].concat(Object(pn.a)(s),[a]):s},[s,a])}var Ye=n.createContext(null),Ut=n.createContext(null);function Jt(a,s){return a===void 0?null:"".concat(a,"-").concat(s)}function zt(a){var s=n.useContext(Ut);return Jt(s,a)}var ba=function(a){Object(W.a)(m,a);var s=Object(Z.a)(m);function m(){return Object(A.a)(this,m),s.apply(this,arguments)}return Object(B.a)(m,[{key:"render",value:function(){var O=this.props,b=O.title,S=O.attribute,R=O.elementRef,w=Object(Ae.a)(O,["title","attribute","elementRef"]),x=Object(G.a)(w,["eventKey"]);return Object(l.a)(!S,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),n.createElement(o.Item,Object(L.a)({},S,{title:typeof b=="string"?b:void 0},x,{ref:R}))}}]),m}(n.Component),Ea=function(s){var m,E=s.style,O=s.className,b=s.eventKey,S=s.disabled,R=s.itemIcon,w=s.children,x=s.role,$=s.onMouseEnter,Y=s.onMouseLeave,z=s.onClick,ie=s.onKeyDown,X=s.onFocus,Q=Object(Ae.a)(s,["style","className","eventKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"]),oe=zt(b),U=n.useContext(Fe),ee=U.prefixCls,re=U.onItemClick,k=U.disabled,le=U.overflowDisabled,_=U.itemIcon,be=U.selectedKeys,te=U.onActive,me="".concat(ee,"-item"),pe=n.useRef(),se=n.useRef(),H=k||S,de=Ue(b),ye=function(Ve){return{key:b,keyPath:de,item:pe.current,domEvent:Ve}},ge=R||_,Se=Rn(b,H,$,Y),Le=Se.active,Ee=Object(Ae.a)(Se,["active"]),Oe=be.includes(b),Me=T(de.length),Be=function(Ve){if(!H){var Je=ye(Ve);z==null||z(wn(Je)),re(Je)}},Pe=function(Ve){if(ie==null||ie(Ve),Ve.which===We.a.ENTER){var Je=ye(Ve);z==null||z(wn(Je)),re(Je)}},je=function(Ve){te(b),X==null||X(Ve)},$e={};return s.role==="option"&&($e["aria-selected"]=Oe),n.createElement(ba,Object(L.a)({ref:pe,elementRef:se,role:x===null?"none":x||"menuitem",tabIndex:S?null:-1,"data-menu-id":le&&oe?null:oe},Q,Ee,$e,{component:"li","aria-disabled":S,style:Object(ce.a)(Object(ce.a)({},Me),E),className:Ie()(me,(m={},Object(fe.a)(m,"".concat(me,"-active"),Le),Object(fe.a)(m,"".concat(me,"-selected"),Oe),Object(fe.a)(m,"".concat(me,"-disabled"),H),m),O),onClick:Be,onKeyDown:Pe,onFocus:je}),w,n.createElement(f,{props:Object(ce.a)(Object(ce.a)({},s),{},{isSelected:Oe}),icon:ge}))};function Ca(a){var s=a.eventKey,m=ne(),E=Ue(s);return n.useEffect(function(){if(m)return m.registerPath(s,E),function(){m.unregisterPath(s,E)}},[E]),m?null:n.createElement(Ea,a)}var Dt=Ca;function jt(a,s){return Object(Bn.a)(a).map(function(m,E){if(n.isValidElement(m)){var O=m.key;return O==null&&(O="tmp_key-".concat([].concat(Object(pn.a)(s),[E]).join("-"))),n.cloneElement(m,{key:O,eventKey:O})}return m})}function nt(a){var s=n.useRef(a);s.current=a;var m=n.useCallback(function(){for(var E,O=arguments.length,b=new Array(O),S=0;S<O;S++)b[S]=arguments[S];return(E=s.current)===null||E===void 0?void 0:E.call.apply(E,[s].concat(b))},[]);return a?m:void 0}var Oa=function(s,m){var E=s.className,O=s.children,b=Object(Ae.a)(s,["className","children"]),S=n.useContext(Fe),R=S.prefixCls,w=S.mode;return n.createElement("ul",Object(L.a)({className:Ie()(R,"".concat(R,"-sub"),"".concat(R,"-").concat(w==="inline"?"inline":"vertical"),E)},b,{"data-menu-list":!0,ref:m}),O)},Yt=n.forwardRef(Oa);Yt.displayName="SubMenuList";var Ht=Yt,Sa=e("uciX"),Vn={adjustX:1,adjustY:1},Gt={topLeft:{points:["bl","tl"],overflow:Vn,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Vn,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:Vn,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:Vn,offset:[4,0]}},Ra={topLeft:{points:["bl","tl"],overflow:Vn,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Vn,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:Vn,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:Vn,offset:[4,0]}},fr=Gt;function Xt(a,s,m){if(s)return s;if(m)return m[a]||m.other}var Fa={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function Da(a){var s=a.prefixCls,m=a.visible,E=a.children,O=a.popup,b=a.popupClassName,S=a.popupOffset,R=a.disabled,w=a.mode,x=a.onVisibleChange,$=n.useContext(Fe),Y=$.getPopupContainer,z=$.rtl,ie=$.subMenuOpenDelay,X=$.subMenuCloseDelay,Q=$.builtinPlacements,oe=$.triggerSubMenuAction,U=$.forceSubMenuRender,ee=$.motion,re=$.defaultMotions,k=n.useState(!1),le=Object(V.a)(k,2),_=le[0],be=le[1],te=z?Object(ce.a)(Object(ce.a)({},Ra),Q):Object(ce.a)(Object(ce.a)({},Gt),Q),me=Fa[w],pe=Xt(w,ee,re),se=Object(ce.a)(Object(ce.a)({},pe),{},{leavedClassName:"".concat(s,"-hidden"),removeOnLeave:!1,motionAppear:!0}),H=n.useRef();return n.useEffect(function(){return H.current=Object(Qe.a)(function(){be(m)}),function(){Qe.a.cancel(H.current)}},[m]),n.createElement(Sa.a,{prefixCls:s,popupClassName:Ie()("".concat(s,"-popup"),Object(fe.a)({},"".concat(s,"-rtl"),z),b),stretch:w==="horizontal"?"minWidth":null,getPopupContainer:Y,builtinPlacements:te,popupPlacement:me,popupVisible:_,popup:O,popupAlign:S&&{offset:S},action:R?[]:[oe],mouseEnterDelay:ie,mouseLeaveDelay:X,onPopupVisibleChange:x,forceRender:U,popupMotion:se},E)}var ja=e("8XRh");function Pa(a){var s=a.id,m=a.open,E=a.keyPath,O=a.children,b="inline",S=n.useContext(Fe),R=S.prefixCls,w=S.forceSubMenuRender,x=S.motion,$=S.defaultMotions,Y=S.mode,z=n.useRef(!1);z.current=Y===b;var ie=n.useState(!z.current),X=Object(V.a)(ie,2),Q=X[0],oe=X[1],U=z.current?m:!1;n.useEffect(function(){z.current&&oe(!1)},[Y]);var ee=Object(ce.a)({},Xt(b,x,$));E.length>1&&(ee.motionAppear=!1);var re=ee.onVisibleChanged;return ee.onVisibleChanged=function(k){return!z.current&&!k&&oe(!0),re==null?void 0:re(k)},Q?null:n.createElement(cn,{mode:b,locked:!z.current},n.createElement(ja.default,Object(L.a)({visible:U},ee,{forceRender:w,removeOnLeave:!1,leavedClassName:"".concat(R,"-hidden")}),function(k){var le=k.className,_=k.style;return n.createElement(Ht,{id:s,className:le,style:_},O)}))}var Aa=function(s){var m,E=s.style,O=s.className,b=s.title,S=s.eventKey,R=s.disabled,w=s.internalPopupClose,x=s.children,$=s.itemIcon,Y=s.expandIcon,z=s.popupClassName,ie=s.popupOffset,X=s.onClick,Q=s.onMouseEnter,oe=s.onMouseLeave,U=s.onTitleClick,ee=s.onTitleMouseEnter,re=s.onTitleMouseLeave,k=Object(Ae.a)(s,["style","className","title","eventKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"]),le=zt(S),_=n.useContext(Fe),be=_.prefixCls,te=_.mode,me=_.openKeys,pe=_.disabled,se=_.overflowDisabled,H=_.activeKey,de=_.selectedKeys,ye=_.itemIcon,ge=_.expandIcon,Se=_.onItemClick,Le=_.onOpenChange,Ee=_.onActive,Oe=n.useContext(Ye),Me=Oe.isSubPathKey,Be=Ue(),Pe="".concat(be,"-submenu"),je=pe||R,$e=n.useRef(),_e=n.useRef(),Ve=$||ye,Je=Y||ge,Xe=me.includes(S),xe=!se&&Xe,Fn=Me(de,S),an=Rn(S,je,ee,re),Ze=an.active,un=Object(Ae.a)(an,["active"]),yn=n.useState(!1),bn=Object(V.a)(yn,2),Ne=bn[0],He=bn[1],en=function(Ge){je||He(Ge)},ke=function(Ge){en(!0),Q==null||Q({key:S,domEvent:Ge})},Wn=function(Ge){en(!1),oe==null||oe({key:S,domEvent:Ge})},zn=n.useMemo(function(){return Ze||(te!=="inline"?Ne||Me([H],S):!1)},[te,Ze,H,Ne,S,Me]),Ln=T(Be.length),rn=function(Ge){je||(U==null||U({key:S,domEvent:Ge}),te==="inline"&&Le(S,!Xe))},Dn=nt(function(qe){X==null||X(wn(qe)),Se(qe)}),on=function(Ge){te!=="inline"&&Le(S,Ge)},jn=function(){Ee(S)},nn=le&&"".concat(le,"-popup"),sn=n.createElement("div",Object(L.a)({role:"menuitem",style:Ln,className:"".concat(Pe,"-title"),tabIndex:je?null:-1,ref:$e,title:typeof b=="string"?b:null,"data-menu-id":se&&le?null:le,"aria-expanded":xe,"aria-haspopup":!0,"aria-controls":nn,"aria-disabled":je,onClick:rn,onFocus:jn},un),b,n.createElement(f,{icon:te!=="horizontal"?Je:null,props:Object(ce.a)(Object(ce.a)({},s),{},{isOpen:xe,isSubMenu:!0})},n.createElement("i",{className:"".concat(Pe,"-arrow")}))),Pn=n.useRef(te);if(te!=="inline"&&(Pn.current=Be.length>1?"vertical":te),!se){var mn=Pn.current;sn=n.createElement(Da,{mode:mn,prefixCls:Pe,visible:!w&&xe&&te!=="inline",popupClassName:z,popupOffset:ie,popup:n.createElement(cn,{mode:mn},n.createElement(Ht,{id:nn,ref:_e},x)),disabled:je,onVisibleChange:on},sn)}return n.createElement(cn,{onItemClick:Dn,mode:te==="horizontal"?"vertical":te,itemIcon:Ve,expandIcon:Je},n.createElement(o.Item,Object(L.a)({role:"none"},k,{component:"li",style:E,className:Ie()(Pe,"".concat(Pe,"-").concat(te),O,(m={},Object(fe.a)(m,"".concat(Pe,"-open"),xe),Object(fe.a)(m,"".concat(Pe,"-active"),zn),Object(fe.a)(m,"".concat(Pe,"-selected"),Fn),Object(fe.a)(m,"".concat(Pe,"-disabled"),je),m)),onMouseEnter:ke,onMouseLeave:Wn}),sn,!se&&n.createElement(Pa,{id:nn,open:xe,keyPath:Be},x)))};function Qt(a){var s=a.eventKey,m=a.children,E=Ue(s),O=jt(m,E),b=ne();n.useEffect(function(){if(b)return b.registerPath(s,E),function(){b.unregisterPath(s,E)}},[E]);var S;return b?S=O:S=n.createElement(Aa,a,O),n.createElement(De.Provider,{value:E},S)}var Ia=e("x/xZ");function Zt(a){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Object(Ia.a)(a)){var m=a.nodeName.toLowerCase(),E=["input","select","textarea","button"].includes(m)||a.isContentEditable||m==="a"&&!!a.getAttribute("href"),O=a.getAttribute("tabindex"),b=Number(O),S=null;return O&&!Number.isNaN(b)?S=b:E&&S===null&&(S=0),E&&a.disabled&&(S=null),S!==null&&(S>=0||s&&S<0)}return!1}function kt(a){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,m=Object(pn.a)(a.querySelectorAll("*")).filter(function(E){return Zt(E,s)});return Zt(a,s)&&m.unshift(a),m}var mt=null;function pr(){mt=document.activeElement}function hr(){mt=null}function vr(){if(mt)try{mt.focus()}catch(a){}}function gr(a,s){if(s.keyCode===9){var m=kt(a),E=m[s.shiftKey?0:m.length-1],O=E===document.activeElement||a===document.activeElement;if(O){var b=m[s.shiftKey?m.length-1:0];b.focus(),s.preventDefault()}}}var Pt=We.a.LEFT,At=We.a.RIGHT,It=We.a.UP,ft=We.a.DOWN,pt=We.a.ENTER,qt=We.a.ESC,_t=[It,ft,Pt,At];function Na(a,s,m,E){var O,b,S,R,w="prev",x="next",$="children",Y="parent";if(a==="inline"&&E===pt)return{inlineTrigger:!0};var z=(O={},Object(fe.a)(O,It,w),Object(fe.a)(O,ft,x),O),ie=(b={},Object(fe.a)(b,Pt,m?x:w),Object(fe.a)(b,At,m?w:x),Object(fe.a)(b,ft,$),Object(fe.a)(b,pt,$),b),X=(S={},Object(fe.a)(S,It,w),Object(fe.a)(S,ft,x),Object(fe.a)(S,pt,$),Object(fe.a)(S,qt,Y),Object(fe.a)(S,Pt,m?$:Y),Object(fe.a)(S,At,m?Y:$),S),Q={inline:z,horizontal:ie,vertical:X,inlineSub:z,horizontalSub:X,verticalSub:X},oe=(R=Q["".concat(a).concat(s?"":"Sub")])===null||R===void 0?void 0:R[E];switch(oe){case w:return{offset:-1,sibling:!0};case x:return{offset:1,sibling:!0};case Y:return{offset:-1,sibling:!1};case $:return{offset:1,sibling:!1};default:return null}}function Ta(a){for(var s=a;s;){if(s.getAttribute("data-menu-list"))return s;s=s.parentElement}return null}function Ba(a,s){for(var m=a||document.activeElement;m;){if(s.has(m))return m;m=m.parentElement}return null}function Ka(a,s){var m=kt(a,!0);return m.filter(function(E){return s.has(E)})}function ea(a,s,m){var E=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!a)return null;var O=Ka(a,s),b=O.length,S=O.findIndex(function(R){return m===R});return E<0?S===-1?S=b-1:S-=1:E>0&&(S+=1),S=(S+b)%b,O[S]}function Ma(a,s,m,E,O,b,S,R,w,x){var $=n.useRef(),Y=n.useRef();Y.current=s;var z=function(){Qe.a.cancel($.current)};return n.useEffect(function(){return function(){z()}},[]),function(ie){var X=ie.which;if([].concat(_t,[pt,qt]).includes(X)){var Q,oe,U,ee=function(){Q=new Set,oe=new Map,U=new Map;var ye=b();return ye.forEach(function(ge){var Se=document.querySelector("[data-menu-id='".concat(Jt(E,ge),"']"));Se&&(Q.add(Se),U.set(Se,ge),oe.set(ge,Se))}),Q};ee();var re=oe.get(s),k=Ba(re,Q),le=U.get(k),_=Na(a,S(le,!0).length===1,m,X);if(!_)return;_t.includes(X)&&ie.preventDefault();var be=function(ye){if(ye){var ge=ye,Se=ye.querySelector("a");(Se==null?void 0:Se.getAttribute("href"))&&(ge=Se);var Le=U.get(ye);R(Le),z(),$.current=Object(Qe.a)(function(){Y.current===Le&&ge.focus()})}};if(_.sibling||!k){var te;!k||a==="inline"?te=O.current:te=Ta(k);var me=ea(te,Q,k,_.offset);be(me)}else if(_.inlineTrigger)w(le);else if(_.offset>0)w(le,!0),z(),$.current=Object(Qe.a)(function(){ee();var de=k.getAttribute("aria-controls"),ye=document.getElementById(de),ge=ea(ye,Q);be(ge)},5);else if(_.offset<0){var pe=S(le,!0),se=pe[pe.length-2],H=oe.get(se);w(se,!1),be(H)}}x==null||x(ie)}}var wa=Math.random().toFixed(5).toString().slice(2),na=0;function Wa(a){var s=Object(On.a)(a,{value:a}),m=Object(V.a)(s,2),E=m[0],O=m[1];return n.useEffect(function(){na+=1;var b="".concat(wa,"-").concat(na);O("rc-menu-uuid-".concat(b))},[]),E}var yr=e("p8sG");function La(a){Promise.resolve().then(a)}var Nt="__RC_UTIL_PATH_SPLIT__",ta=function(s){return s.join(Nt)},xa=function(s){return s.split(Nt)},Tt="rc-menu-more";function $a(){var a=n.useState({}),s=Object(V.a)(a,2),m=s[1],E=Object(n.useRef)(new Map),O=Object(n.useRef)(new Map),b=n.useState([]),S=Object(V.a)(b,2),R=S[0],w=S[1],x=Object(n.useRef)(0),$=Object(n.useCallback)(function(U,ee){var re=ta(ee);O.current.set(re,U),E.current.set(U,re),x.current+=1;var k=x.current;La(function(){k===x.current&&m({})})},[]),Y=Object(n.useCallback)(function(U,ee){var re=ta(ee);O.current.delete(re),E.current.delete(U)},[]),z=Object(n.useCallback)(function(U){w(U)},[]),ie=Object(n.useCallback)(function(U,ee){var re=E.current.get(U)||"",k=xa(re);return ee&&R.includes(k[0])&&k.unshift(Tt),k},[R]),X=Object(n.useCallback)(function(U,ee){return U.some(function(re){var k=ie(re,!0);return k.includes(ee)})},[ie]),Q=function(){var ee=Object(pn.a)(E.current.keys());return R.length&&ee.push(Tt),ee},oe=Object(n.useCallback)(function(U){var ee="".concat(E.current.get(U)).concat(Nt),re=new Set;return Object(pn.a)(O.current.keys()).forEach(function(k){k.startsWith(ee)&&re.add(O.current.get(k))}),re},[]);return{registerPath:$,unregisterPath:Y,refreshOverflowKeys:z,isSubPathKey:X,getKeyPath:ie,getKeys:Q,getSubPathKeys:oe}}var ht=[],Va=function(s){var m,E,O=s.prefixCls,b=O===void 0?"rc-menu":O,S=s.style,R=s.className,w=s.tabIndex,x=w===void 0?0:w,$=s.children,Y=s.direction,z=s.id,ie=s.mode,X=ie===void 0?"vertical":ie,Q=s.inlineCollapsed,oe=s.disabled,U=s.disabledOverflow,ee=s.subMenuOpenDelay,re=ee===void 0?.1:ee,k=s.subMenuCloseDelay,le=k===void 0?.1:k,_=s.forceSubMenuRender,be=s.defaultOpenKeys,te=s.openKeys,me=s.activeKey,pe=s.defaultActiveFirst,se=s.selectable,H=se===void 0?!0:se,de=s.multiple,ye=de===void 0?!1:de,ge=s.defaultSelectedKeys,Se=s.selectedKeys,Le=s.onSelect,Ee=s.onDeselect,Oe=s.inlineIndent,Me=Oe===void 0?24:Oe,Be=s.motion,Pe=s.defaultMotions,je=s.triggerSubMenuAction,$e=je===void 0?"hover":je,_e=s.builtinPlacements,Ve=s.itemIcon,Je=s.expandIcon,Xe=s.overflowedIndicator,xe=Xe===void 0?"...":Xe,Fn=s.getPopupContainer,an=s.onClick,Ze=s.onOpenChange,un=s.onKeyDown,yn=s.openAnimation,bn=s.openTransitionName,Ne=Object(Ae.a)(s,["prefixCls","style","className","tabIndex","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName"]),He=jt($,ht),en=n.useState(!1),ke=Object(V.a)(en,2),Wn=ke[0],zn=ke[1],Ln=n.useRef(),rn=Wa(z),Dn=Y==="rtl",on=n.useMemo(function(){return X==="inline"&&Q?["vertical",Q]:[X,!1]},[X,Q]),jn=Object(V.a)(on,2),nn=jn[0],sn=jn[1],Pn=n.useState(0),mn=Object(V.a)(Pn,2),qe=mn[0],Ge=mn[1],Yn=qe>=He.length-1||nn!=="horizontal"||U,Hn=Object(On.a)(be,{value:te,postState:function(q){return q||ht}}),tt=Object(V.a)(Hn,2),En=tt[0],vn=tt[1],Gn=n.useState(En),Cn=Object(V.a)(Gn,2),fn=Cn[0],Xn=Cn[1],An=nn==="inline",Qn=n.useRef(!1);n.useEffect(function(){An&&Xn(En)},[En]),n.useEffect(function(){if(!Qn.current){Qn.current=!0;return}if(An)vn(fn);else{var ae=[];vn(ae),Ze==null||Ze(ae)}},[An]);var dn=$a(),In=dn.registerPath,ve=dn.unregisterPath,Re=dn.refreshOverflowKeys,we=dn.isSubPathKey,tn=dn.getKeyPath,Zn=dn.getKeys,gt=dn.getSubPathKeys,wt=n.useMemo(function(){return{registerPath:In,unregisterPath:ve}},[In,ve]),Wt=n.useMemo(function(){return{isSubPathKey:we}},[we]);n.useEffect(function(){Re(Yn?ht:He.slice(qe+1).map(function(ae){return ae.key}))},[qe,Yn]);var Lt=Object(On.a)(me||pe&&((m=He[0])===null||m===void 0?void 0:m.key),{value:me}),at=Object(V.a)(Lt,2),yt=at[0],it=at[1],bt=nt(function(ae){it(ae)}),xt=nt(function(){it(void 0)}),Et=Object(On.a)(ge||[],{value:Se,postState:function(q){return Array.isArray(q)?q:q==null?ht:[q]}}),Ct=Object(V.a)(Et,2),rt=Ct[0],Nn=Ct[1],Ot=function(q){if(!!H){var Ce=q.key,ze=rt.includes(Ce),ln;ze?ln=rt.filter(function(qn){return qn!==Ce}):ye?ln=[].concat(Object(pn.a)(rt),[Ce]):ln=[Ce],Nn(ln);var Un=Object(ce.a)(Object(ce.a)({},q),{},{selectedKeys:ln});ze?Ee==null||Ee(Un):Le==null||Le(Un)}},St=nt(function(ae){an==null||an(wn(ae)),Ot(ae)}),lt=nt(function(ae,q){var Ce=En.filter(function(ln){return ln!==ae});if(q)Ce.push(ae);else if(nn!=="inline"){var ze=gt(ae);Ce=Ce.filter(function(ln){return!ze.has(ln)})}d()(En,Ce)||(vn(Ce),Ze==null||Ze(Ce))}),kn=nt(Fn),ut=function(q,Ce){var ze=Ce!=null?Ce:!En.includes(q);lt(q,ze)},ot=Ma(nn,yt,Dn,rn,Ln,Zn,tn,it,ut,un);n.useEffect(function(){zn(!0)},[]);var Rt=nn!=="horizontal"||U?He:He.map(function(ae,q){return n.createElement(cn,{key:ae.key,overflowDisabled:q>qe},ae)}),Ft=n.createElement(o,Object(L.a)({id:z,ref:Ln,prefixCls:"".concat(b,"-overflow"),component:"ul",itemComponent:Dt,className:Ie()(b,"".concat(b,"-root"),"".concat(b,"-").concat(nn),R,(E={},Object(fe.a)(E,"".concat(b,"-inline-collapsed"),sn),Object(fe.a)(E,"".concat(b,"-rtl"),Dn),E)),dir:Y,style:S,role:"menu",tabIndex:x,data:Rt,renderRawItem:function(q){return q},renderRawRest:function(q){var Ce=q.length,ze=Ce?He.slice(-Ce):null;return n.createElement(Qt,{eventKey:Tt,title:xe,disabled:Yn,internalPopupClose:Ce===0},ze)},maxCount:nn!=="horizontal"||U?o.INVALIDATE:o.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(q){Ge(q)},onKeyDown:ot},Ne));return n.createElement(Ut.Provider,{value:rn},n.createElement(cn,{prefixCls:b,mode:nn,openKeys:En,rtl:Dn,disabled:oe,motion:Wn?Be:null,defaultMotions:Wn?Pe:null,activeKey:yt,onActive:bt,onInactive:xt,selectedKeys:rt,inlineIndent:Me,subMenuOpenDelay:re,subMenuCloseDelay:le,forceSubMenuRender:_,builtinPlacements:_e,triggerSubMenuAction:$e,getPopupContainer:kn,itemIcon:Ve,expandIcon:Je,onItemClick:St,onOpenChange:lt},n.createElement(Ye.Provider,{value:Wt},Ft),n.createElement(he.Provider,{value:wt},He)))},Ua=Va,Ja=function(s){var m=s.className,E=s.title,O=s.eventKey,b=s.children,S=Object(Ae.a)(s,["className","title","eventKey","children"]),R=n.useContext(Fe),w=R.prefixCls,x="".concat(w,"-item-group");return n.createElement("li",Object(L.a)({},S,{onClick:function(Y){return Y.stopPropagation()},className:Ie()(x,m)}),n.createElement("div",{className:"".concat(x,"-title"),title:typeof E=="string"?E:void 0},E),n.createElement("ul",{className:"".concat(x,"-list")},b))};function za(a){var s=a.children,m=Object(Ae.a)(a,["children"]),E=Ue(m.eventKey),O=jt(s,E),b=ne();return b?O:n.createElement(Ja,m,O)}function Ya(a){var s=a.className,m=a.style,E=n.useContext(Fe),O=E.prefixCls,b=ne();return b?null:n.createElement("li",{className:Ie()("".concat(O,"-item-divider"),s),style:m})}var st=Ua;st.Item=Dt,st.SubMenu=Qt,st.ItemGroup=za,st.Divider=Ya;var Ha=st,Ga=e("eDIo");function Xa(a,s){var m=a.prefixCls,E=a.editable,O=a.locale,b=a.style;return!E||E.showAdd===!1?null:n.createElement("button",{ref:s,type:"button",className:"".concat(m,"-nav-add"),style:b,"aria-label":(O==null?void 0:O.addAriaLabel)||"Add tab",onClick:function(R){E.onEdit("add",{event:R})}},E.addIcon||"+")}var aa=n.forwardRef(Xa);function Qa(a,s){var m=a.prefixCls,E=a.id,O=a.tabs,b=a.locale,S=a.mobile,R=a.moreIcon,w=R===void 0?"More":R,x=a.moreTransitionName,$=a.style,Y=a.className,z=a.editable,ie=a.tabBarGutter,X=a.rtl,Q=a.onTabClick,oe=Object(n.useState)(!1),U=Object(V.a)(oe,2),ee=U[0],re=U[1],k=Object(n.useState)(null),le=Object(V.a)(k,2),_=le[0],be=le[1],te="".concat(E,"-more-popup"),me="".concat(m,"-dropdown"),pe=_!==null?"".concat(te,"-").concat(_):null,se=b==null?void 0:b.dropdownAriaLabel,H=n.createElement(Ha,{onClick:function(Oe){var Me=Oe.key,Be=Oe.domEvent;Q(Me,Be),re(!1)},id:te,tabIndex:-1,role:"listbox","aria-activedescendant":pe,selectedKeys:[_],"aria-label":se!==void 0?se:"expanded dropdown"},O.map(function(Ee){return n.createElement(Dt,{key:Ee.key,id:"".concat(te,"-").concat(Ee.key),role:"option","aria-controls":E&&"".concat(E,"-panel-").concat(Ee.key),disabled:Ee.disabled},Ee.tab)}));function de(Ee){for(var Oe=O.filter(function($e){return!$e.disabled}),Me=Oe.findIndex(function($e){return $e.key===_})||0,Be=Oe.length,Pe=0;Pe<Be;Pe+=1){Me=(Me+Ee+Be)%Be;var je=Oe[Me];if(!je.disabled){be(je.key);return}}}function ye(Ee){var Oe=Ee.which;if(!ee){[We.a.DOWN,We.a.SPACE,We.a.ENTER].includes(Oe)&&(re(!0),Ee.preventDefault());return}switch(Oe){case We.a.UP:de(-1),Ee.preventDefault();break;case We.a.DOWN:de(1),Ee.preventDefault();break;case We.a.ESC:re(!1);break;case We.a.SPACE:case We.a.ENTER:_!==null&&Q(_,Ee);break}}Object(n.useEffect)(function(){var Ee=document.getElementById(pe);Ee&&Ee.scrollIntoView&&Ee.scrollIntoView(!1)},[_]),Object(n.useEffect)(function(){ee||be(null)},[ee]);var ge=Object(fe.a)({},X?"marginLeft":"marginRight",ie);O.length||(ge.visibility="hidden",ge.order=1);var Se=Ie()(Object(fe.a)({},"".concat(me,"-rtl"),X)),Le=S?null:n.createElement(Ga.default,{prefixCls:me,overlay:H,trigger:["hover"],visible:ee,transitionName:x,onVisibleChange:re,overlayClassName:Se,mouseEnterDelay:.1,mouseLeaveDelay:.1},n.createElement("button",{type:"button",className:"".concat(m,"-nav-more"),style:ge,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":te,id:"".concat(E,"-more"),"aria-expanded":ee,onKeyDown:ye},w));return n.createElement("div",{className:Ie()("".concat(m,"-nav-operations"),Y),style:$,ref:s},Le,n.createElement(aa,{prefixCls:m,locale:b,editable:z}))}var Za=n.forwardRef(Qa),Bt=Object(n.createContext)(null),ka=.1,ra=.01,vt=20,sa=Math.pow(.995,vt);function qa(a,s){var m=Object(n.useState)(),E=Object(V.a)(m,2),O=E[0],b=E[1],S=Object(n.useState)(0),R=Object(V.a)(S,2),w=R[0],x=R[1],$=Object(n.useState)(0),Y=Object(V.a)($,2),z=Y[0],ie=Y[1],X=Object(n.useState)(),Q=Object(V.a)(X,2),oe=Q[0],U=Q[1],ee=Object(n.useRef)();function re(me){var pe=me.touches[0],se=pe.screenX,H=pe.screenY;b({x:se,y:H}),window.clearInterval(ee.current)}function k(me){if(!!O){me.preventDefault();var pe=me.touches[0],se=pe.screenX,H=pe.screenY;b({x:se,y:H});var de=se-O.x,ye=H-O.y;s(de,ye);var ge=Date.now();x(ge),ie(ge-w),U({x:de,y:ye})}}function le(){if(!!O&&(b(null),U(null),oe)){var me=oe.x/z,pe=oe.y/z,se=Math.abs(me),H=Math.abs(pe);if(Math.max(se,H)<ka)return;var de=me,ye=pe;ee.current=window.setInterval(function(){if(Math.abs(de)<ra&&Math.abs(ye)<ra){window.clearInterval(ee.current);return}de*=sa,ye*=sa,s(de*vt,ye*vt)},vt)}}var _=Object(n.useRef)();function be(me){var pe=me.deltaX,se=me.deltaY,H=0,de=Math.abs(pe),ye=Math.abs(se);de===ye?H=_.current==="x"?pe:se:de>ye?(H=pe,_.current="x"):(H=se,_.current="y"),s(-H,-H)&&me.preventDefault()}var te=Object(n.useRef)(null);te.current={onTouchStart:re,onTouchMove:k,onTouchEnd:le,onWheel:be},n.useEffect(function(){function me(de){te.current.onTouchStart(de)}function pe(de){te.current.onTouchMove(de)}function se(de){te.current.onTouchEnd(de)}function H(de){te.current.onWheel(de)}return document.addEventListener("touchmove",pe,{passive:!1}),document.addEventListener("touchend",se,{passive:!1}),a.current.addEventListener("touchstart",me,{passive:!1}),a.current.addEventListener("wheel",H),function(){document.removeEventListener("touchmove",pe),document.removeEventListener("touchend",se)}},[])}function _a(){var a=Object(n.useRef)(new Map);function s(E){return a.current.has(E)||a.current.set(E,n.createRef()),a.current.get(E)}function m(E){a.current.delete(E)}return[s,m]}function ia(a,s){var m=n.useRef(a),E=n.useState({}),O=Object(V.a)(E,2),b=O[1];function S(R){var w=typeof R=="function"?R(m.current):R;w!==m.current&&s(w,m.current),m.current=w,b({})}return[m.current,S]}var la=function(s){var m=s.position,E=s.prefixCls,O=s.extra;if(!O)return null;var b,S=O;return m==="right"&&(b=S.right||!S.left&&S||null),m==="left"&&(b=S.left||null),b?n.createElement("div",{className:"".concat(E,"-extra-content")},b):null};function er(a,s){var m,E=n.useContext(Bt),O=E.prefixCls,b=E.tabs,S=a.className,R=a.style,w=a.id,x=a.animated,$=a.activeKey,Y=a.rtl,z=a.extra,ie=a.editable,X=a.locale,Q=a.tabPosition,oe=a.tabBarGutter,U=a.children,ee=a.onTabClick,re=a.onTabScroll,k=Object(n.useRef)(),le=Object(n.useRef)(),_=Object(n.useRef)(),be=Object(n.useRef)(),te=_a(),me=Object(V.a)(te,2),pe=me[0],se=me[1],H=Q==="top"||Q==="bottom",de=ia(0,function(ae,q){H&&re&&re({direction:ae>q?"left":"right"})}),ye=Object(V.a)(de,2),ge=ye[0],Se=ye[1],Le=ia(0,function(ae,q){!H&&re&&re({direction:ae>q?"top":"bottom"})}),Ee=Object(V.a)(Le,2),Oe=Ee[0],Me=Ee[1],Be=Object(n.useState)(0),Pe=Object(V.a)(Be,2),je=Pe[0],$e=Pe[1],_e=Object(n.useState)(0),Ve=Object(V.a)(_e,2),Je=Ve[0],Xe=Ve[1],xe=Object(n.useState)(0),Fn=Object(V.a)(xe,2),an=Fn[0],Ze=Fn[1],un=Object(n.useState)(0),yn=Object(V.a)(un,2),bn=yn[0],Ne=yn[1],He=Object(n.useState)(null),en=Object(V.a)(He,2),ke=en[0],Wn=en[1],zn=Object(n.useState)(null),Ln=Object(V.a)(zn,2),rn=Ln[0],Dn=Ln[1],on=Object(n.useState)(0),jn=Object(V.a)(on,2),nn=jn[0],sn=jn[1],Pn=Object(n.useState)(0),mn=Object(V.a)(Pn,2),qe=mn[0],Ge=mn[1],Yn=Sn(new Map),Hn=Object(V.a)(Yn,2),tt=Hn[0],En=Hn[1],vn=ct(b,tt,je),Gn="".concat(O,"-nav-operations-hidden"),Cn=0,fn=0;H?Y?(Cn=0,fn=Math.max(0,je-ke)):(Cn=Math.min(0,ke-je),fn=0):(Cn=Math.min(0,rn-Je),fn=0);function Xn(ae){return ae<Cn?Cn:ae>fn?fn:ae}var An=Object(n.useRef)(),Qn=Object(n.useState)(),dn=Object(V.a)(Qn,2),In=dn[0],ve=dn[1];function Re(){ve(Date.now())}function we(){window.clearTimeout(An.current)}qa(k,function(ae,q){function Ce(ze,ln){ze(function(Un){var qn=Xn(Un+ln);return qn})}if(H){if(ke>=je)return!1;Ce(Se,ae)}else{if(rn>=Je)return!1;Ce(Me,q)}return we(),Re(),!0}),Object(n.useEffect)(function(){return we(),In&&(An.current=window.setTimeout(function(){ve(0)},100)),we},[In]);function tn(){var ae=arguments.length>0&&arguments[0]!==void 0?arguments[0]:$,q=vn.get(ae)||{width:0,height:0,left:0,right:0,top:0};if(H){var Ce=ge;Y?q.right<ge?Ce=q.right:q.right+q.width>ge+ke&&(Ce=q.right+q.width-ke):q.left<-ge?Ce=-q.left:q.left+q.width>-ge+ke&&(Ce=-(q.left+q.width-ke)),Me(0),Se(Xn(Ce))}else{var ze=Oe;q.top<-Oe?ze=-q.top:q.top+q.height>-Oe+rn&&(ze=-(q.top+q.height-rn)),Se(0),Me(Xn(ze))}}var Zn=P(vn,{width:ke,height:rn,left:ge,top:Oe},{width:an,height:bn},{width:nn,height:qe},Object(ce.a)(Object(ce.a)({},a),{},{tabs:b})),gt=Object(V.a)(Zn,2),wt=gt[0],Wt=gt[1],Lt=b.map(function(ae){var q=ae.key;return n.createElement($n,{id:w,prefixCls:O,key:q,rtl:Y,tab:ae,closable:ae.closable,editable:ie,active:q===$,tabPosition:Q,tabBarGutter:oe,renderWrapper:U,removeAriaLabel:X==null?void 0:X.removeAriaLabel,ref:pe(q),onClick:function(ze){ee(q,ze)},onRemove:function(){se(q)},onFocus:function(){tn(q),Re(),Y||(k.current.scrollLeft=0),k.current.scrollTop=0}})}),at=Mn(function(){var ae,q,Ce,ze,ln,Un,qn,$t,Vt,ur=((ae=k.current)===null||ae===void 0?void 0:ae.offsetWidth)||0,or=((q=k.current)===null||q===void 0?void 0:q.offsetHeight)||0,ma=((Ce=be.current)===null||Ce===void 0?void 0:Ce.offsetWidth)||0,fa=((ze=be.current)===null||ze===void 0?void 0:ze.offsetHeight)||0,dr=((ln=_.current)===null||ln===void 0?void 0:ln.offsetWidth)||0,cr=((Un=_.current)===null||Un===void 0?void 0:Un.offsetHeight)||0;Wn(ur),Dn(or),sn(ma),Ge(fa);var pa=(((qn=le.current)===null||qn===void 0?void 0:qn.offsetWidth)||0)-ma,ha=((($t=le.current)===null||$t===void 0?void 0:$t.offsetHeight)||0)-fa;$e(pa),Xe(ha);var va=(Vt=_.current)===null||Vt===void 0?void 0:Vt.className.includes(Gn);Ze(pa-(va?0:dr)),Ne(ha-(va?0:cr)),En(function(){var ga=new Map;return b.forEach(function(mr){var ya=mr.key,dt=pe(ya).current;dt&&ga.set(ya,{width:dt.offsetWidth,height:dt.offsetHeight,left:dt.offsetLeft,top:dt.offsetTop})}),ga})}),yt=b.slice(0,wt),it=b.slice(Wt+1),bt=[].concat(Object(pn.a)(yt),Object(pn.a)(it)),xt=Object(n.useState)(),Et=Object(V.a)(xt,2),Ct=Et[0],rt=Et[1],Nn=vn.get($),Ot=Object(n.useRef)();function St(){Qe.a.cancel(Ot.current)}Object(n.useEffect)(function(){var ae={};return Nn&&(H?(Y?ae.right=Nn.right:ae.left=Nn.left,ae.width=Nn.width):(ae.top=Nn.top,ae.height=Nn.height)),St(),Ot.current=Object(Qe.a)(function(){rt(ae)}),St},[Nn,H,Y]),Object(n.useEffect)(function(){tn()},[$,Nn,vn,H]),Object(n.useEffect)(function(){at()},[Y,oe,$,b.map(function(ae){return ae.key}).join("_")]);var lt=!!bt.length,kn="".concat(O,"-nav-wrap"),ut,ot,Rt,Ft;return H?Y?(ot=ge>0,ut=ge+ke<je):(ut=ge<0,ot=-ge+ke<je):(Rt=Oe<0,Ft=-Oe+rn<Je),n.createElement("div",{ref:s,role:"tablist",className:Ie()("".concat(O,"-nav"),S),style:R,onKeyDown:function(){Re()}},n.createElement(la,{position:"left",extra:z,prefixCls:O}),n.createElement(xn.default,{onResize:at},n.createElement("div",{className:Ie()(kn,(m={},Object(fe.a)(m,"".concat(kn,"-ping-left"),ut),Object(fe.a)(m,"".concat(kn,"-ping-right"),ot),Object(fe.a)(m,"".concat(kn,"-ping-top"),Rt),Object(fe.a)(m,"".concat(kn,"-ping-bottom"),Ft),m)),ref:k},n.createElement(xn.default,{onResize:at},n.createElement("div",{ref:le,className:"".concat(O,"-nav-list"),style:{transform:"translate(".concat(ge,"px, ").concat(Oe,"px)"),transition:In?"none":void 0}},Lt,n.createElement(aa,{ref:be,prefixCls:O,locale:X,editable:ie,style:{visibility:lt?"hidden":null}}),n.createElement("div",{className:Ie()("".concat(O,"-ink-bar"),Object(fe.a)({},"".concat(O,"-ink-bar-animated"),x.inkBar)),style:Ct}))))),n.createElement(Za,Object(L.a)({},a,{ref:_,prefixCls:O,tabs:bt,className:!lt&&Gn})),n.createElement(la,{position:"right",extra:z,prefixCls:O}))}var ua=n.forwardRef(er);function nr(a){var s=a.id,m=a.activeKey,E=a.animated,O=a.tabPosition,b=a.rtl,S=a.destroyInactiveTabPane,R=n.useContext(Bt),w=R.prefixCls,x=R.tabs,$=E.tabPane,Y=x.findIndex(function(z){return z.key===m});return n.createElement("div",{className:Ie()("".concat(w,"-content-holder"))},n.createElement("div",{className:Ie()("".concat(w,"-content"),"".concat(w,"-content-").concat(O),Object(fe.a)({},"".concat(w,"-content-animated"),$)),style:Y&&$?Object(fe.a)({},b?"marginRight":"marginLeft","-".concat(Y,"00%")):null},x.map(function(z){return n.cloneElement(z.node,{key:z.key,prefixCls:w,tabKey:z.key,id:s,animated:$,active:z.key===m,destroyInactiveTabPane:S})})))}function oa(a){var s=a.prefixCls,m=a.forceRender,E=a.className,O=a.style,b=a.id,S=a.active,R=a.animated,w=a.destroyInactiveTabPane,x=a.tabKey,$=a.children,Y=n.useState(m),z=Object(V.a)(Y,2),ie=z[0],X=z[1];n.useEffect(function(){S?X(!0):w&&X(!1)},[S,w]);var Q={};return S||(R?(Q.visibility="hidden",Q.height=0,Q.overflowY="hidden"):Q.display="none"),n.createElement("div",{id:b&&"".concat(b,"-panel-").concat(x),role:"tabpanel",tabIndex:S?0:-1,"aria-labelledby":b&&"".concat(b,"-tab-").concat(x),"aria-hidden":!S,style:Object(ce.a)(Object(ce.a)({},Q),O),className:Ie()("".concat(s,"-tabpane"),S&&"".concat(s,"-tabpane-active"),E)},(S||ie||m)&&$)}var da=0;function tr(a){return Object(Bn.a)(a).map(function(s){if(n.isValidElement(s)){var m=s.key!==void 0?String(s.key):void 0;return Object(ce.a)(Object(ce.a)({key:m},s.props),{},{node:s})}return null}).filter(function(s){return s})}function ar(a,s){var m,E=a.id,O=a.prefixCls,b=O===void 0?"rc-tabs":O,S=a.className,R=a.children,w=a.direction,x=a.activeKey,$=a.defaultActiveKey,Y=a.editable,z=a.animated,ie=z===void 0?{inkBar:!0,tabPane:!1}:z,X=a.tabPosition,Q=X===void 0?"top":X,oe=a.tabBarGutter,U=a.tabBarStyle,ee=a.tabBarExtraContent,re=a.locale,k=a.moreIcon,le=a.moreTransitionName,_=a.destroyInactiveTabPane,be=a.renderTabBar,te=a.onChange,me=a.onTabClick,pe=a.onTabScroll,se=Object(Ae.a)(a,["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"]),H=tr(R),de=w==="rtl",ye;ie===!1?ye={inkBar:!1,tabPane:!1}:ie===!0?ye={inkBar:!0,tabPane:!0}:ye=Object(ce.a)({inkBar:!0,tabPane:!1},Object(Ke.a)(ie)==="object"?ie:{});var ge=Object(n.useState)(!1),Se=Object(V.a)(ge,2),Le=Se[0],Ee=Se[1];Object(n.useEffect)(function(){Ee(Object(Kn.a)())},[]);var Oe=Object(On.a)(function(){var Ne;return(Ne=H[0])===null||Ne===void 0?void 0:Ne.key},{value:x,defaultValue:$}),Me=Object(V.a)(Oe,2),Be=Me[0],Pe=Me[1],je=Object(n.useState)(function(){return H.findIndex(function(Ne){return Ne.key===Be})}),$e=Object(V.a)(je,2),_e=$e[0],Ve=$e[1];Object(n.useEffect)(function(){var Ne=H.findIndex(function(en){return en.key===Be});if(Ne===-1){var He;Ne=Math.max(0,Math.min(_e,H.length-1)),Pe((He=H[Ne])===null||He===void 0?void 0:He.key)}Ve(Ne)},[H.map(function(Ne){return Ne.key}).join("_"),Be,_e]);var Je=Object(On.a)(null,{value:E}),Xe=Object(V.a)(Je,2),xe=Xe[0],Fn=Xe[1],an=Q;Le&&!["left","right"].includes(Q)&&(an="top"),Object(n.useEffect)(function(){E||(Fn("rc-tabs-".concat(da)),da+=1)},[]);function Ze(Ne,He){me==null||me(Ne,He),Pe(Ne),te==null||te(Ne)}var un={id:xe,activeKey:Be,animated:ye,tabPosition:an,rtl:de,mobile:Le},yn,bn=Object(ce.a)(Object(ce.a)({},un),{},{editable:Y,locale:re,moreIcon:k,moreTransitionName:le,tabBarGutter:oe,onTabClick:Ze,onTabScroll:pe,extra:ee,style:U,panes:R});return be?yn=be(bn,ua):yn=n.createElement(ua,bn),n.createElement(Bt.Provider,{value:{tabs:H,prefixCls:b}},n.createElement("div",Object(L.a)({ref:s,id:E,className:Ie()(b,"".concat(b,"-").concat(an),(m={},Object(fe.a)(m,"".concat(b,"-mobile"),Le),Object(fe.a)(m,"".concat(b,"-editable"),Y),Object(fe.a)(m,"".concat(b,"-rtl"),de),m),S)},se),yn,n.createElement(nr,Object(L.a)({destroyInactiveTabPane:_},un,{animated:ye}))))}var ca=n.forwardRef(ar);ca.TabPane=oa;var rr=ca,sr=rr,Kt=e("MZF8"),hn=e("dEAq"),ir=e("ZpkN"),br=e("TIsu");function Mt(a,s){var m,E=(m=a.match(/\.(\w+)$/))===null||m===void 0?void 0:m[1];return E||(E=s.tsx?"tsx":"jsx"),E}var lr=a=>{var s,m,E,O=Object(n.useRef)(),b=Object(n.useContext)(hn.context),S=b.locale,R=Object(hn.useLocaleProps)(S,a),w=Object(hn.useDemoUrl)(R.identifier),x=R.demoUrl||w,$=(Kt.a===null||Kt.a===void 0?void 0:Kt.a.location.hash)==="#".concat(R.identifier),Y=Object.keys(R.sources).length===1,z=Object(hn.useCodeSandbox)((s=R.hideActions)!==null&&s!==void 0&&s.includes("CSB")?null:R),ie=Object(hn.useRiddle)((m=R.hideActions)!==null&&m!==void 0&&m.includes("RIDDLE")?null:R),X=Object(hn.useMotions)(R.motions||[],O.current),Q=Object(J.default)(X,2),oe=Q[0],U=Q[1],ee=Object(hn.useCopy)(),re=Object(J.default)(ee,2),k=re[0],le=re[1],_=Object(n.useState)("_"),be=Object(J.default)(_,2),te=be[0],me=be[1],pe=Object(n.useState)(Mt(te,R.sources[te])),se=Object(J.default)(pe,2),H=se[0],de=se[1],ye=Object(n.useState)(Boolean(R.defaultShowCode)),ge=Object(J.default)(ye,2),Se=ge[0],Le=ge[1],Ee=Object(n.useState)(Math.random()),Oe=Object(J.default)(Ee,2),Me=Oe[0],Be=Oe[1],Pe=R.sources[te][H]||R.sources[te].content,je=Object(hn.useTSPlaygroundUrl)(S,Pe),$e=Object(n.useRef)(),_e=Object(hn.usePrefersColor)(),Ve=Object(J.default)(_e,1),Je=Ve[0];Object(n.useEffect)(()=>{Be(Math.random())},[Je]);function Xe(xe){me(xe),de(Mt(xe,R.sources[xe]))}return v.a.createElement("div",{style:R.style,className:[R.className,"__dumi-default-previewer",$?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:R.identifier,"data-debug":R.debug||void 0,"data-iframe":R.iframe||void 0},R.iframe&&v.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),v.a.createElement("div",{ref:O,className:"__dumi-default-previewer-demo",style:{transform:R.transform?"translate(0, 0)":void 0,padding:R.compact||R.iframe&&R.compact!==!1?"0":void 0,background:R.background}},R.iframe?v.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(R.iframe).replace(/(\d)$/,"$1px")},key:Me,src:x,ref:$e}):R.children),v.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":R.title},R.title&&v.a.createElement(hn.AnchorLink,{to:"#".concat(R.identifier)},R.title),R.description&&v.a.createElement("div",{dangerouslySetInnerHTML:{__html:R.description}})),v.a.createElement("div",{className:"__dumi-default-previewer-actions"},z&&v.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:z}),ie&&v.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:ie}),R.motions&&v.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:U,onClick:()=>oe()}),R.iframe&&v.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:()=>Be(Math.random())}),!((E=R.hideActions)!==null&&E!==void 0&&E.includes("EXTERNAL"))&&v.a.createElement(hn.Link,{target:"_blank",to:x},v.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),v.a.createElement("span",null),v.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":le,onClick:()=>k(Pe)}),H==="tsx"&&Se&&v.a.createElement(hn.Link,{target:"_blank",to:je},v.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),v.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(Se?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:()=>Le(!Se)})),Se&&v.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!Y&&v.a.createElement(sr,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xB7\xB7\xB7",defaultActiveKey:te,onChange:Xe},Object.keys(R.sources).map(xe=>v.a.createElement(oa,{tab:xe==="_"?"index.".concat(Mt(xe,R.sources[xe])):xe,key:xe}))),v.a.createElement("div",{className:"__dumi-default-previewer-source"},v.a.createElement(ir.a,{code:Pe,lang:H,showCopy:!1}))))},Er=gn.default=lr},"80pN":function(Tn,gn,e){"use strict";(function(J){/** @license React v16.14.0
* react-dom-test-utils.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var n=e("MgzW"),v=e("q1tI"),L=e("i8i4"),fe=e("QCnb");function V(f){for(var T="https://reactjs.org/docs/error-decoder.html?invariant="+f,M=1;M<arguments.length;M++)T+="&args[]="+encodeURIComponent(arguments[M]);return"Minified React error #"+f+"; visit "+T+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ke=v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;Ke.hasOwnProperty("ReactCurrentDispatcher")||(Ke.ReactCurrentDispatcher={current:null}),Ke.hasOwnProperty("ReactCurrentBatchConfig")||(Ke.ReactCurrentBatchConfig={suspense:null});function Ae(f){var T=f,M=f;if(f.alternate)for(;T.return;)T=T.return;else{f=T;do T=f,(T.effectTag&1026)!=0&&(M=T.return),f=T.return;while(f)}return T.tag===3?M:null}function ce(f){if(Ae(f)!==f)throw Error(V(188))}function Jn(f){var T=f.alternate;if(!T){if(T=Ae(f),T===null)throw Error(V(188));return T!==f?null:f}for(var M=f,he=T;;){var ne=M.return;if(ne===null)break;var De=ne.alternate;if(De===null){if(he=ne.return,he!==null){M=he;continue}break}if(ne.child===De.child){for(De=ne.child;De;){if(De===M)return ce(ne),f;if(De===he)return ce(ne),T;De=De.sibling}throw Error(V(188))}if(M.return!==he.return)M=ne,he=De;else{for(var Ue=!1,Ye=ne.child;Ye;){if(Ye===M){Ue=!0,M=ne,he=De;break}if(Ye===he){Ue=!0,he=ne,M=De;break}Ye=Ye.sibling}if(!Ue){for(Ye=De.child;Ye;){if(Ye===M){Ue=!0,M=De,he=ne;break}if(Ye===he){Ue=!0,he=De,M=ne;break}Ye=Ye.sibling}if(!Ue)throw Error(V(189))}}if(M.alternate!==he)throw Error(V(190))}if(M.tag!==3)throw Error(V(188));return M.stateNode.current===M?f:T}function Ie(){return!0}function Bn(){return!1}function Kn(f,T,M,he){this.dispatchConfig=f,this._targetInst=T,this.nativeEvent=M,f=this.constructor.Interface;for(var ne in f)f.hasOwnProperty(ne)&&((T=f[ne])?this[ne]=T(M):ne==="target"?this.target=he:this[ne]=M[ne]);return this.isDefaultPrevented=(M.defaultPrevented!=null?M.defaultPrevented:M.returnValue===!1)?Ie:Bn,this.isPropagationStopped=Bn,this}n(Kn.prototype,{preventDefault:function(){this.defaultPrevented=!0;var f=this.nativeEvent;f&&(f.preventDefault?f.preventDefault():typeof f.returnValue!="unknown"&&(f.returnValue=!1),this.isDefaultPrevented=Ie)},stopPropagation:function(){var f=this.nativeEvent;f&&(f.stopPropagation?f.stopPropagation():typeof f.cancelBubble!="unknown"&&(f.cancelBubble=!0),this.isPropagationStopped=Ie)},persist:function(){this.isPersistent=Ie},isPersistent:Bn,destructor:function(){var f=this.constructor.Interface,T;for(T in f)this[T]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=Bn,this._dispatchInstances=this._dispatchListeners=null}}),Kn.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(f){return f.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null},Kn.extend=function(f){function T(){}function M(){return he.apply(this,arguments)}var he=this;T.prototype=he.prototype;var ne=new T;return n(ne,M.prototype),M.prototype=ne,M.prototype.constructor=M,M.Interface=n({},he.Interface,f),M.extend=he.extend,Qe(M),M},Qe(Kn);function On(f,T,M,he){if(this.eventPool.length){var ne=this.eventPool.pop();return this.call(ne,f,T,M,he),ne}return new this(f,T,M,he)}function pn(f){if(!(f instanceof this))throw Error(V(279));f.destructor(),10>this.eventPool.length&&this.eventPool.push(f)}function Qe(f){f.eventPool=[],f.getPooled=On,f.release=pn}var xn=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined");function Mn(f,T){var M={};return M[f.toLowerCase()]=T.toLowerCase(),M["Webkit"+f]="webkit"+T,M["Moz"+f]="moz"+T,M}var Sn={animationend:Mn("Animation","AnimationEnd"),animationiteration:Mn("Animation","AnimationIteration"),animationstart:Mn("Animation","AnimationStart"),transitionend:Mn("Transition","TransitionEnd")},We={},_n={};xn&&(_n=document.createElement("div").style,"AnimationEvent"in window||(delete Sn.animationend.animation,delete Sn.animationiteration.animation,delete Sn.animationstart.animation),"TransitionEvent"in window||delete Sn.transitionend.transition);function $n(f){if(We[f])return We[f];if(!Sn[f])return f;var T=Sn[f],M;for(M in T)if(T.hasOwnProperty(M)&&M in _n)return We[f]=T[M];return f}var et=$n("animationend"),ct=$n("animationiteration"),j=$n("animationstart"),P=$n("transitionend"),D=null;function d(f){if(D===null)try{var T=("require"+Math.random()).slice(0,7);D=(J&&J[T])("timers").setImmediate}catch(M){D=function(he){var ne=new MessageChannel;ne.port1.onmessage=he,ne.port2.postMessage(void 0)}}return D(f)}var l=L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,p=l[11],y=l[12],C=L.unstable_batchedUpdates,r=Ke.IsSomeRendererActing,u=typeof fe.unstable_flushAllWithoutAsserting=="function",i=fe.unstable_flushAllWithoutAsserting||function(){for(var f=!1;p();)f=!0;return f};function K(f){try{i(),d(function(){i()?K(f):f()})}catch(T){f(T)}}var I=0,F=!1,c=L.findDOMNode,N=L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,h=N[0],t=N[4],g=N[5],o=N[6],A=N[7],B=N[8],W=N[9],Z=N[10];function G(){}function ue(f,T){if(!f)return[];if(f=Jn(f),!f)return[];for(var M=f,he=[];;){if(M.tag===5||M.tag===6||M.tag===1||M.tag===0){var ne=M.stateNode;T(ne)&&he.push(ne)}if(M.child)M.child.return=M,M=M.child;else{if(M===f)return he;for(;!M.sibling;){if(!M.return||M.return===f)return he;M=M.return}M.sibling.return=M.return,M=M.sibling}}}function Fe(f,T){if(f&&!f._reactInternalFiber){var M=""+f;throw f=Array.isArray(f)?"an array":f&&f.nodeType===1&&f.tagName?"a DOM node":M==="[object Object]"?"object with keys {"+Object.keys(f).join(", ")+"}":M,Error(V(286,T,f))}}var Te={renderIntoDocument:function(f){var T=document.createElement("div");return L.render(f,T)},isElement:function(f){return v.isValidElement(f)},isElementOfType:function(f,T){return v.isValidElement(f)&&f.type===T},isDOMComponent:function(f){return!(!f||f.nodeType!==1||!f.tagName)},isDOMComponentElement:function(f){return!!(f&&v.isValidElement(f)&&f.tagName)},isCompositeComponent:function(f){return Te.isDOMComponent(f)?!1:f!=null&&typeof f.render=="function"&&typeof f.setState=="function"},isCompositeComponentWithType:function(f,T){return Te.isCompositeComponent(f)?f._reactInternalFiber.type===T:!1},findAllInRenderedTree:function(f,T){return Fe(f,"findAllInRenderedTree"),f?ue(f._reactInternalFiber,T):[]},scryRenderedDOMComponentsWithClass:function(f,T){return Fe(f,"scryRenderedDOMComponentsWithClass"),Te.findAllInRenderedTree(f,function(M){if(Te.isDOMComponent(M)){var he=M.className;typeof he!="string"&&(he=M.getAttribute("class")||"");var ne=he.split(/\s+/);if(!Array.isArray(T)){if(T===void 0)throw Error(V(11));T=T.split(/\s+/)}return T.every(function(De){return ne.indexOf(De)!==-1})}return!1})},findRenderedDOMComponentWithClass:function(f,T){if(Fe(f,"findRenderedDOMComponentWithClass"),f=Te.scryRenderedDOMComponentsWithClass(f,T),f.length!==1)throw Error("Did not find exactly one match (found: "+f.length+") for class:"+T);return f[0]},scryRenderedDOMComponentsWithTag:function(f,T){return Fe(f,"scryRenderedDOMComponentsWithTag"),Te.findAllInRenderedTree(f,function(M){return Te.isDOMComponent(M)&&M.tagName.toUpperCase()===T.toUpperCase()})},findRenderedDOMComponentWithTag:function(f,T){if(Fe(f,"findRenderedDOMComponentWithTag"),f=Te.scryRenderedDOMComponentsWithTag(f,T),f.length!==1)throw Error("Did not find exactly one match (found: "+f.length+") for tag:"+T);return f[0]},scryRenderedComponentsWithType:function(f,T){return Fe(f,"scryRenderedComponentsWithType"),Te.findAllInRenderedTree(f,function(M){return Te.isCompositeComponentWithType(M,T)})},findRenderedComponentWithType:function(f,T){if(Fe(f,"findRenderedComponentWithType"),f=Te.scryRenderedComponentsWithType(f,T),f.length!==1)throw Error("Did not find exactly one match (found: "+f.length+") for componentType:"+T);return f[0]},mockComponent:function(f,T){return T=T||f.mockTagName||"div",f.prototype.render.mockImplementation(function(){return v.createElement(T,null,this.props.children)}),this},nativeTouchData:function(f,T){return{touches:[{pageX:f,pageY:T}]}},Simulate:null,SimulateNative:{},act:function(f){function T(){I--,r.current=M,y.current=he}F===!1&&(F=!0,console.error("act(...) is not supported in production builds of React, and might not behave as expected.")),I++;var M=r.current,he=y.current;r.current=!0,y.current=!0;try{var ne=C(f)}catch(De){throw T(),De}if(ne!==null&&typeof ne=="object"&&typeof ne.then=="function")return{then:function(De,Ue){ne.then(function(){1<I||u===!0&&M===!0?(T(),De()):K(function(Ye){T(),Ye?Ue(Ye):De()})},function(Ye){T(),Ue(Ye)})}};try{I!==1||u!==!1&&M!==!1||i(),T()}catch(De){throw T(),De}return{then:function(De){De()}}}};function cn(f){return function(T,M){if(v.isValidElement(T))throw Error(V(228));if(Te.isCompositeComponent(T))throw Error(V(229));var he=t[f],ne=new G;ne.target=T,ne.type=f.toLowerCase();var De=h(T),Ue=new Kn(he,De,ne,T);Ue.persist(),n(Ue,M),he.phasedRegistrationNames?g(Ue):o(Ue),L.unstable_batchedUpdates(function(){A(T),Z(Ue)}),B()}}Te.Simulate={};for(var Rn in t)Te.Simulate[Rn]=cn(Rn);function wn(f,T){return function(M,he){var ne=new G(f);n(ne,he),Te.isDOMComponent(M)?(M=c(M),ne.target=M,W(T,1,document,ne)):M.tagName&&(ne.target=M,W(T,1,document,ne))}}[["abort","abort"],[et,"animationEnd"],[ct,"animationIteration"],[j,"animationStart"],["blur","blur"],["canplaythrough","canPlayThrough"],["canplay","canPlay"],["cancel","cancel"],["change","change"],["click","click"],["close","close"],["compositionend","compositionEnd"],["compositionstart","compositionStart"],["compositionupdate","compositionUpdate"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["dragstart","dragStart"],["drag","drag"],["drop","drop"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],["ended","ended"],["error","error"],["focus","focus"],["input","input"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["loadstart","loadStart"],["loadstart","loadStart"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["mousedown","mouseDown"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["playing","playing"],["progress","progress"],["ratechange","rateChange"],["scroll","scroll"],["seeked","seeked"],["seeking","seeking"],["selectionchange","selectionChange"],["stalled","stalled"],["suspend","suspend"],["textInput","textInput"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchmove","touchMove"],["touchstart","touchStart"],[P,"transitionEnd"],["volumechange","volumeChange"],["waiting","waiting"],["wheel","wheel"]].forEach(function(f){var T=f[1];Te.SimulateNative[T]=wn(T,f[0])}),J.exports=Te.default||Te}).call(this,e("hOG+")(Tn))},JjdP:function(Tn,gn,e){"use strict";e.r(gn);var J=e("9og8"),n=e("WmNS"),v=e.n(n),L=e("LtsZ"),fe=`import React, { useRef } from 'react';
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
              if (
                typeof value[0] === 'string' &&
                typeof value[1] === 'string'
              ) {
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
  if (isObjType(schema)) {
    if (_formData === undefined || typeof _formData !== 'object') {
      _formData = {};
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
    result = clone(_formData);
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
};`,Ke=`import React from 'react';
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
};`,ce=`import React from 'react';
import FormRender, { useForm } from 'form-render';

const Demo = ({ schema }) => {
  const form = useForm();
  return (
    <div>
      <FormRender form={form} schema={schema} />
    </div>
  );
};

export default Demo;`,Jn=`export const basic = {
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

export default Root;`,Bn=`import React, { useState, useEffect } from 'react';
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
}`,On=`import { Select } from 'antd';
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

export { valueMap, keySuggestions }`,xn=`.markdown p {
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
}`,Mn=`import React from 'react';
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

export default Demo;`,Sn=`import React, { useState, useRef } from 'react';
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

export default Demo;`,We=`import React, { useState, useRef } from 'react';
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

export default Demo;`,_n=`import React from 'react';
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

export default Demo;`,$n=`import React, { useState, useRef } from 'react';
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
          },
        ]}
        onChange={data => console.log('data:change', data)}
        onSchemaChange={schema => console.log('schema:change', schema)}
      />
    </div>
  );
};

export default Demo;`,et=`.fr-generator-playground {
  margin: 0 -24px;

  .hide-demo {
    display: none;
  }
}`,ct=gn.default={"guide-card":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(v.a.mark(function D(){return v.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(25)]).then(e.bind(null,"oLxE"));case 2:return l.abrupt("return",l.sent.default);case 3:case"end":return l.stop()}},D)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:fe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"card-render":{version:"0.1.2"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"0.x"}},identifier:"guide-card"}},"chart-render-demo":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(v.a.mark(function D(){var d,l,p,y,C,r,u;return v.a.wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return r=function(F,c){if(!c&&F&&F.__esModule)return F;if(F===null||typeof F!="object"&&typeof F!="function")return{default:F};var N=C(c);if(N&&N.has(F))return N.get(F);var h={},t=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var g in F)if(g!=="default"&&Object.prototype.hasOwnProperty.call(F,g)){var o=t?Object.getOwnPropertyDescriptor(F,g):null;o&&(o.get||o.set)?Object.defineProperty(h,g,o):h[g]=F[g]}return h.default=F,N&&N.set(F,h),h},C=function(F){if(typeof WeakMap!="function")return null;var c=new WeakMap,N=new WeakMap;return(C=function(t){return t?N:c})(F)},d=e("K+nK"),K.t0=d,K.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return K.t1=K.sent,l=(0,K.t0)(K.t1),K.t2=r,K.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return K.t3=K.sent,p=(0,K.t2)(K.t3),K.next=15,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 15:return y=K.sent,u=function(){var F=(0,p.useState)("Line"),c=(0,l.default)(F,2),N=c[0],h=c[1],t={Line:y.Line,Column:y.Column,PivotTable:y.PivotTable}[N];return p.default.createElement("div",null,p.default.createElement("div",{style:{marginBottom:10}},p.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return h("Line")}},"\u6298\u7EBF\u56FE"),p.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return h("Column")}},"\u67F1\u72B6\u56FE"),p.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return h("PivotTable")}},"\u4EA4\u53C9\u8868")),p.default.createElement(t,{meta:[{id:"date",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF",isDim:!1},{id:"uv",name:"\u8BBF\u5BA2\u6570",isDim:!1}],data:[{date:"20200101",pv:100,uv:50},{date:"20200102",pv:120,uv:60},{date:"20200103",pv:140,uv:70},{date:"20200104",pv:160,uv:80}]}))},K.abrupt("return",u);case 18:case"end":return K.stop()}},D)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"chart-render-demo"}},"column-demo":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(v.a.mark(function D(){var d,l,p,y;return v.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,l=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=r.sent,y=function(){return l.default.createElement(p.Column,{meta:[{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{pv:50,uv:20}]})},r.abrupt("return",y);case 11:case"end":return r.stop()}},D)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[{ pv: 50, uv: 20 }]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo"}},"column-demo-1":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(v.a.mark(function D(){var d,l,p,y;return v.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,l=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=r.sent,y=function(){return l.default.createElement(p.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},r.abrupt("return",y);case 11:case"end":return r.stop()}},D)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-1"}},"column-demo-2":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(v.a.mark(function D(){var d,l,p,y;return v.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,l=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=r.sent,y=function(){return l.default.createElement(p.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},r.abrupt("return",y);case 11:case"end":return r.stop()}},D)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-2"}},"column-demo-3":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(v.a.mark(function D(){var d,l,p,y;return v.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,l=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=r.sent,y=function(){return l.default.createElement(p.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},r.abrupt("return",y);case 11:case"end":return r.stop()}},D)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-3"}},"column-demo-4":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(v.a.mark(function D(){var d,l,p,y;return v.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,l=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=r.sent,y=function(){return l.default.createElement(p.Column,{inverted:!0,label:{position:"middle",layout:[{type:"interval-adjust-position"},{type:"interval-hide-overlap"},{type:"adjust-color"}]},meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},r.abrupt("return",y);case 11:case"end":return r.stop()}},D)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-4"}},"line-demo":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(v.a.mark(function D(){var d,l,p,y;return v.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,l=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=r.sent,y=function(){return l.default.createElement(p.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},r.abrupt("return",y);case 11:case"end":return r.stop()}},D)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo"}},"line-demo-1":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(v.a.mark(function D(){var d,l,p,y;return v.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,l=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=r.sent,y=function(){return l.default.createElement(p.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},r.abrupt("return",y);case 11:case"end":return r.stop()}},D)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-1"}},"line-demo-2":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(v.a.mark(function D(){var d,l,p,y;return v.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,l=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=r.sent,y=function(){return l.default.createElement(p.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"},{id:"pv",name:"\u8BBF\u95EE\u91CF"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20,pv:120},{ds:"2020-12-31",page:"\u9996\u9875",uv:120,pv:1120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21,pv:121},{ds:"2021-01-01",page:"\u9996\u9875",uv:121,pv:1121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15,pv:115},{ds:"2021-01-02",page:"\u9996\u9875",uv:115,pv:1115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40,pv:140},{ds:"2021-01-03",page:"\u9996\u9875",uv:140,pv:1140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31,pv:131},{ds:"2021-01-04",page:"\u9996\u9875",uv:131,pv:1131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32,pv:132},{ds:"2021-01-05",page:"\u9996\u9875",uv:132,pv:1132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30,pv:130},{ds:"2021-01-06",page:"\u9996\u9875",uv:130,pv:1130}]})},r.abrupt("return",y);case 11:case"end":return r.stop()}},D)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-2"}},"line-demo-3":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(v.a.mark(function D(){var d,l,p,y;return v.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,l=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=r.sent,y=function(){return l.default.createElement(p.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},r.abrupt("return",y);case 11:case"end":return r.stop()}},D)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-3"}},"line-demo-4":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(v.a.mark(function D(){var d,l,p,y;return v.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,l=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=r.sent,y=function(){return l.default.createElement(p.Line,{withArea:!0,isStack:!0,isPercent:!0,meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},r.abrupt("return",y);case 11:case"end":return r.stop()}},D)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-4"}},"pivot-table-demo":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(v.a.mark(function D(){var d,l,p,y;return v.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,l=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=r.sent,y=function(){return l.default.createElement(p.PivotTable,{style:{maxHeight:400,overflow:"auto"},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},r.abrupt("return",y);case 11:case"end":return r.stop()}},D)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo"}},"pivot-table-demo-1":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(v.a.mark(function D(){var d,l,p,y;return v.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,l=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=r.sent,y=function(){return l.default.createElement(p.PivotTable,{style:{maxHeight:400,overflow:"auto"},cellRender:function(K,I,F){return l.default.createElement("div",null,l.default.createElement("p",null,"\u53C2\u6570\u8868\uFF1A"),l.default.createElement("p",{style:{color:["red","orange","yellow","green","blue"][Object.keys(I).length]}},K),l.default.createElement("p",null,JSON.stringify(I)),l.default.createElement("p",null,JSON.stringify(F)))},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},r.abrupt("return",y);case 11:case"end":return r.stop()}},D)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-1"}},"pivot-table-demo-2":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(v.a.mark(function D(){var d,l,p,y,C,r,u;return v.a.wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return r=function(F,c){if(!c&&F&&F.__esModule)return F;if(F===null||typeof F!="object"&&typeof F!="function")return{default:F};var N=C(c);if(N&&N.has(F))return N.get(F);var h={},t=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var g in F)if(g!=="default"&&Object.prototype.hasOwnProperty.call(F,g)){var o=t?Object.getOwnPropertyDescriptor(F,g):null;o&&(o.get||o.set)?Object.defineProperty(h,g,o):h[g]=F[g]}return h.default=F,N&&N.set(F,h),h},C=function(F){if(typeof WeakMap!="function")return null;var c=new WeakMap,N=new WeakMap;return(C=function(t){return t?N:c})(F)},d=e("K+nK"),K.t0=d,K.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return K.t1=K.sent,l=(0,K.t0)(K.t1),K.t2=r,K.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return K.t3=K.sent,p=(0,K.t2)(K.t3),K.next=15,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 15:return y=K.sent,u=function(){var F=(0,p.useState)(!1),c=(0,l.default)(F,2),N=c[0],h=c[1];return p.default.createElement(p.default.Fragment,null,p.default.createElement("label",null,"\u53EF\u5C55\u5F00/\u6536\u7F29\uFF1A",p.default.createElement("input",{type:"checkbox",value:N,onChange:function(){return h(!N)}})),p.default.createElement(y.PivotTable,{leftExpandable:N,showSubtotal:!1,meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]}))},K.abrupt("return",u);case 18:case"end":return K.stop()}},D)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-2"}},"form-render-demo":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(v.a.mark(function D(){var d,l,p,y,C,r,u,i,K,I,F,c,N,h;return v.a.wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return F=function(A,B){if(!B&&A&&A.__esModule)return A;if(A===null||typeof A!="object"&&typeof A!="function")return{default:A};var W=I(B);if(W&&W.has(A))return W.get(A);var Z={},G=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ue in A)if(ue!=="default"&&Object.prototype.hasOwnProperty.call(A,ue)){var Fe=G?Object.getOwnPropertyDescriptor(A,ue):null;Fe&&(Fe.get||Fe.set)?Object.defineProperty(Z,ue,Fe):Z[ue]=A[ue]}return Z.default=A,W&&W.set(A,Z),Z},I=function(A){if(typeof WeakMap!="function")return null;var B=new WeakMap,W=new WeakMap;return(I=function(G){return G?W:B})(A)},d=e("K+nK"),g.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return g.t0=d,g.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return g.t1=g.sent,l=(0,g.t0)(g.t1),g.t2=d,g.next=13,e.e(72).then(e.bind(null,"fWQN"));case 13:return g.t3=g.sent,p=(0,g.t2)(g.t3),g.t4=d,g.next=18,e.e(73).then(e.bind(null,"mtLc"));case 18:return g.t5=g.sent,y=(0,g.t4)(g.t5),g.t6=d,g.next=23,e.e(66).then(e.bind(null,"yKVA"));case 23:return g.t7=g.sent,C=(0,g.t6)(g.t7),g.t8=d,g.next=28,e.e(65).then(e.bind(null,"879j"));case 28:return g.t9=g.sent,r=(0,g.t8)(g.t9),g.t10=d,g.next=33,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 33:return g.t11=g.sent,u=(0,g.t10)(g.t11),g.next=37,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 37:return i=g.sent,g.t12=F,g.next=41,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 41:return g.t13=g.sent,K=(0,g.t12)(g.t13),c={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},N=function(o){(0,C.default)(B,o);var A=(0,r.default)(B);function B(){return(0,p.default)(this,B),A.apply(this,arguments)}return(0,y.default)(B,[{key:"render",value:function(){var Z=this.props.form;return u.default.createElement("div",null,u.default.createElement(K.default,{form:Z,schema:c}),u.default.createElement(l.default,{type:"primary",onClick:Z.submit},"\u63D0\u4EA4"))}}]),B}(u.default.Component),h=(0,K.connectForm)(N),g.abrupt("return",h);case 47:case"end":return g.stop()}},D)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default connectForm(Demo);`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo"}},"form-render-demo-1":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(v.a.mark(function D(){var d,l,p,y,C,r,u,i,K,I;return v.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return u=function(h,t){if(!t&&h&&h.__esModule)return h;if(h===null||typeof h!="object"&&typeof h!="function")return{default:h};var g=r(t);if(g&&g.has(h))return g.get(h);var o={},A=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var B in h)if(B!=="default"&&Object.prototype.hasOwnProperty.call(h,B)){var W=A?Object.getOwnPropertyDescriptor(h,B):null;W&&(W.get||W.set)?Object.defineProperty(o,B,W):o[B]=h[B]}return o.default=h,g&&g.set(h,o),o},r=function(h){if(typeof WeakMap!="function")return null;var t=new WeakMap,g=new WeakMap;return(r=function(A){return A?g:t})(h)},d=e("K+nK"),c.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return c.t0=d,c.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return c.t1=c.sent,l=(0,c.t0)(c.t1),c.t2=d,c.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return c.t3=c.sent,p=(0,c.t2)(c.t3),c.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 17:return y=c.sent,c.t4=u,c.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 21:return c.t5=c.sent,C=(0,c.t4)(c.t5),i={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},K=function(){var h=(0,C.useForm)();return p.default.createElement("div",null,p.default.createElement(C.default,{form:h,schema:i}),p.default.createElement(l.default,{type:"primary",onClick:h.submit},"\u63D0\u4EA4"))},I=K,c.abrupt("return",I);case 27:case"end":return c.stop()}},D)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo-1"}},"form-render-demo-2":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(v.a.mark(function D(){var d,l,p,y,C,r,u,i,K,I;return v.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return u=function(h,t){if(!t&&h&&h.__esModule)return h;if(h===null||typeof h!="object"&&typeof h!="function")return{default:h};var g=r(t);if(g&&g.has(h))return g.get(h);var o={},A=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var B in h)if(B!=="default"&&Object.prototype.hasOwnProperty.call(h,B)){var W=A?Object.getOwnPropertyDescriptor(h,B):null;W&&(W.get||W.set)?Object.defineProperty(o,B,W):o[B]=h[B]}return o.default=h,g&&g.set(h,o),o},r=function(h){if(typeof WeakMap!="function")return null;var t=new WeakMap,g=new WeakMap;return(r=function(A){return A?g:t})(h)},d=e("K+nK"),c.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return c.t0=d,c.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return c.t1=c.sent,l=(0,c.t0)(c.t1),c.t2=d,c.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return c.t3=c.sent,p=(0,c.t2)(c.t3),c.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 17:return y=c.sent,c.t4=u,c.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 21:return c.t5=c.sent,C=(0,c.t4)(c.t5),i={displayType:"row",labelWidth:60,type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F",type:"range",format:"date"},siteUrl:{title:"\u7F51\u5740",type:"string",placeholder:"\u6B64\u5904\u5FC5\u586B",required:!0,props:{addonBefore:"https://",addonAfter:".com"}}}},K=function(){var h=(0,C.useForm)(),t=function(o,A){A.length>0?alert("errors:"+JSON.stringify(A)):alert("formData:"+JSON.stringify(o,null,2))};return p.default.createElement("div",null,p.default.createElement(C.default,{form:h,schema:i,onFinish:t}),p.default.createElement(l.default,{type:"primary",onClick:h.submit},"\u63D0\u4EA4"))},I=K,c.abrupt("return",I);case 27:case"end":return c.stop()}},D)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-demo-2"}},"migrate-demo":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(v.a.mark(function D(){var d,l,p,y,C,r,u,i;return v.a.wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return u=function(){var c=(0,p.useForm)(),N=function(t,g){g.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(g))):alert(JSON.stringify(t))};return l.default.createElement("div",null,l.default.createElement(p.default,{form:c,schema:r,onFinish:N}),l.default.createElement("button",{onClick:c.submit},"\u63D0\u4EA4"))},C=function(c,N){if(!N&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var h=y(N);if(h&&h.has(c))return h.get(c);var t={},g=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in c)if(o!=="default"&&Object.prototype.hasOwnProperty.call(c,o)){var A=g?Object.getOwnPropertyDescriptor(c,o):null;A&&(A.get||A.set)?Object.defineProperty(t,o,A):t[o]=c[o]}return t.default=c,h&&h.set(c,t),t},y=function(c){if(typeof WeakMap!="function")return null;var N=new WeakMap,h=new WeakMap;return(y=function(g){return g?h:N})(c)},d=e("K+nK"),I.t0=d,I.next=7,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 7:return I.t1=I.sent,l=(0,I.t0)(I.t1),I.t2=C,I.next=12,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 12:return I.t3=I.sent,p=(0,I.t2)(I.t3),r={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}},i=u,I.abrupt("return",i);case 17:case"end":return I.stop()}},D)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate-demo"}},"migrate-demo-1":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(v.a.mark(function D(){var d,l,p,y,C,r,u,i,K,I,F,c,N;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return K=function(o,A){if(!A&&o&&o.__esModule)return o;if(o===null||typeof o!="object"&&typeof o!="function")return{default:o};var B=i(A);if(B&&B.has(o))return B.get(o);var W={},Z=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var G in o)if(G!=="default"&&Object.prototype.hasOwnProperty.call(o,G)){var ue=Z?Object.getOwnPropertyDescriptor(o,G):null;ue&&(ue.get||ue.set)?Object.defineProperty(W,G,ue):W[G]=o[G]}return W.default=o,B&&B.set(o,W),W},i=function(o){if(typeof WeakMap!="function")return null;var A=new WeakMap,B=new WeakMap;return(i=function(Z){return Z?B:A})(o)},d=e("K+nK"),t.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return t.t0=d,t.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return t.t1=t.sent,l=(0,t.t0)(t.t1),t.t2=d,t.next=13,Promise.resolve().then(e.bind(null,"tJVT"));case 13:return t.t3=t.sent,p=(0,t.t2)(t.t3),t.next=17,Promise.all([e.e(3),e.e(19)]).then(e.t.bind(null,"cUip",7));case 17:return t.t4=d,t.next=20,Promise.all([e.e(0),e.e(12),e.e(18),e.e(22)]).then(e.t.bind(null,"iJl9",7));case 20:return t.t5=t.sent,y=(0,t.t4)(t.t5),t.t6=K,t.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return t.t7=t.sent,C=(0,t.t6)(t.t7),t.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 29:return r=t.sent,t.next=32,Promise.all([e.e(64),e.e(71)]).then(e.bind(null,"7t+U"));case 32:return u=t.sent,I=y.default.TextArea,F={type:"object",properties:{number:{title:"\u6570\u5B57\u8F93\u5165\u6846",type:"number","ui:disabled":!0},checkbox:{title:"\u662F\u5426\u9009\u62E9",type:"boolean","ui:widget":"switch"}},required:["number"]},c=function(){var o=(0,C.useState)(JSON.stringify(F)),A=(0,p.default)(o,2),B=A[0],W=A[1],Z=(0,C.useState)({}),G=(0,p.default)(Z,2),ue=G[0],Fe=G[1],Te=function(){try{var f=(0,u.updateSchemaToNewVersion)(F);Fe(f)}catch(T){console.log(T)}},cn=function(f){W(f.target.value)},Rn=function(){W(JSON.stringify(JSON.parse(B),null,2))};return C.default.createElement("div",null,C.default.createElement("div",null,"\u586B\u5165\u65E7\u7248schema\uFF1A"),C.default.createElement(I,{style:{minHeight:400,marginTop:12,marginBottom:12},value:B,onChange:cn}),C.default.createElement(l.default,{style:{marginRight:12},onClick:Rn},"\u683C\u5F0F\u5316\u65E7schema"),C.default.createElement(l.default,{type:"primary",onClick:Te},"\u751F\u6210\u65B0\u7248schema"),C.default.createElement(I,{style:{minHeight:400,marginTop:12},value:JSON.stringify(ue,null,2)}))},N=c,t.abrupt("return",N);case 38:case"end":return t.stop()}},D)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
      const _newSchema = updateSchemaToNewVersion(old);
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

export default Translator;`},"packages/form-render/src/utils.js":{import:"../../packages/form-render/src/utils.js",content:V}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"},"lodash-es":{version:"4.17.21"}},identifier:"migrate-demo-1"}},"display-demo":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(v.a.mark(function D(){var d,l,p,y,C;return v.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return d=e("K+nK"),u.t0=d,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,l=(0,u.t0)(u.t1),u.t2=d,u.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return u.t3=u.sent,p=(0,u.t2)(u.t3),y=function(K){return{type:"object",displayType:K,properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},objectName:{title:"\u5BF9\u8C61",bind:"obj",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},C=function(){return l.default.createElement("div",null,l.default.createElement("h2",null,"display: row"),l.default.createElement(p.default,{schema:y("row")}),l.default.createElement("h2",null,"display: column"),l.default.createElement(p.default,{schema:y("column")}))},u.abrupt("return",C);case 14:case"end":return u.stop()}},D)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`},"demo/display.js":{import:"../demo/display",content:Ke}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo"}},"display-demo-1":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(v.a.mark(function D(){var d,l,p,y,C;return v.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return d=e("K+nK"),u.t0=d,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,l=(0,u.t0)(u.t1),u.t2=d,u.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return u.t3=u.sent,p=(0,u.t2)(u.t3),y={type:"object",displayType:"inline",properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},C=function(){return l.default.createElement(p.default,{schema:y})},u.abrupt("return",C);case 14:case"end":return u.stop()}},D)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:Ke}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-1"}},"display-demo-2":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(v.a.mark(function D(){var d,l,p,y,C;return v.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return d=e("K+nK"),u.t0=d,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,l=(0,u.t0)(u.t1),u.t2=d,u.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return u.t3=u.sent,p=(0,u.t2)(u.t3),y={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0},check:{title:"box",type:"boolean",default:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},C=function(){return l.default.createElement(p.default,{readOnly:!0,schema:y})},u.abrupt("return",C);case 14:case"end":return u.stop()}},D)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form readOnly schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:Ke}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-2"}},"display-demo-3":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(v.a.mark(function D(){var d,l,p,y,C;return v.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return d=e("K+nK"),u.t0=d,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,l=(0,u.t0)(u.t1),u.t2=d,u.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return u.t3=u.sent,p=(0,u.t2)(u.t3),y={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0,width:"50%"},check:{title:"box",type:"boolean",default:!0,width:"50%",labelWidth:6},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},C=function(){return l.default.createElement(p.default,{labelWidth:"200",schema:y})},u.abrupt("return",C);case 14:case"end":return u.stop()}},D)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form labelWidth="200" schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:Ke}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-3"}},"display-demo-4":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(v.a.mark(function D(){var d,l,p,y,C,r;return v.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return d=e("K+nK"),i.t0=d,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,l=(0,i.t0)(i.t1),i.t2=d,i.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return i.t3=i.sent,p=(0,i.t2)(i.t3),y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},C=function(){return l.default.createElement(p.default,{schema:y})},r=C,i.abrupt("return",r);case 15:case"end":return i.stop()}},D)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Ke}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-4"}},"display-demo-5":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(v.a.mark(function D(){var d,l,p,y,C,r;return v.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return d=e("K+nK"),i.t0=d,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,l=(0,i.t0)(i.t1),i.t2=d,i.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return i.t3=i.sent,p=(0,i.t2)(i.t3),y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},C=function(){return l.default.createElement(p.default,{schema:y})},r=C,i.abrupt("return",r);case 15:case"end":return i.stop()}},D)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Ke}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-5"}},"display-demo-6":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(v.a.mark(function D(){var d,l,p,y,C,r;return v.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return d=e("K+nK"),i.t0=d,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,l=(0,i.t0)(i.t1),i.t2=d,i.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return i.t3=i.sent,p=(0,i.t2)(i.t3),y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},C=function(){return l.default.createElement(p.default,{schema:y})},r=C,i.abrupt("return",r);case 15:case"end":return i.stop()}},D)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Ke}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-6"}},"display-demo-7":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(v.a.mark(function D(){var d,l,p,y,C,r;return v.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return d=e("K+nK"),i.t0=d,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,l=(0,i.t0)(i.t1),i.t2=d,i.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return i.t3=i.sent,p=(0,i.t2)(i.t3),y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},C=function(){return l.default.createElement(p.default,{schema:y})},r=C,i.abrupt("return",r);case 15:case"end":return i.stop()}},D)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Ke}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-7"}},"form-methods-demo":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(v.a.mark(function D(){var d,l,p,y,C,r,u,i,K,I,F,c,N;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return F=function(o,A){if(!A&&o&&o.__esModule)return o;if(o===null||typeof o!="object"&&typeof o!="function")return{default:o};var B=I(A);if(B&&B.has(o))return B.get(o);var W={},Z=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var G in o)if(G!=="default"&&Object.prototype.hasOwnProperty.call(o,G)){var ue=Z?Object.getOwnPropertyDescriptor(o,G):null;ue&&(ue.get||ue.set)?Object.defineProperty(W,G,ue):W[G]=o[G]}return W.default=o,B&&B.set(o,W),W},I=function(o){if(typeof WeakMap!="function")return null;var A=new WeakMap,B=new WeakMap;return(I=function(Z){return Z?B:A})(o)},d=e("K+nK"),t.next=5,e.e(20).then(e.t.bind(null,"lfLe",7));case 5:return t.t0=d,t.next=8,e.e(21).then(e.t.bind(null,"Cp9S",7));case 8:return t.t1=t.sent,l=(0,t.t0)(t.t1),t.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return t.t2=d,t.next=15,e.e(12).then(e.t.bind(null,"4IMT",7));case 15:return t.t3=t.sent,p=(0,t.t2)(t.t3),t.next=19,e.e(14).then(e.t.bind(null,"tL+A",7));case 19:return t.t4=d,t.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return t.t5=t.sent,y=(0,t.t4)(t.t5),t.t6=d,t.next=27,Promise.resolve().then(e.bind(null,"tJVT"));case 27:return t.t7=t.sent,C=(0,t.t6)(t.t7),t.t8=F,t.next=32,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 32:return t.t9=t.sent,r=(0,t.t8)(t.t9),t.next=36,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 36:return u=t.sent,t.t10=F,t.next=40,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 40:return t.t11=t.sent,i=(0,t.t10)(t.t11),t.next=44,e.e(15).then(e.bind(null,"OH0R"));case 44:return K=t.sent,c=function(){var o=(0,i.useForm)(),A=(0,r.useState)({}),B=(0,C.default)(A,2),W=B[0],Z=B[1],G=function(){(0,K.fakeApi)("xxx/getForm").then(function(Te){o.setValues({input1:"hello world",select1:"c"})})};(0,r.useEffect)(function(){(0,K.delay)(1e3).then(function(Fe){Z({type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}})})},[]);var ue=function(Te,cn){cn.length>0?y.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(cn.map(function(Rn){return Rn.name}))):(0,K.fakeApi)("xxx/submit",Te).then(function(Rn){return y.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})};return r.default.createElement("div",{style:{width:"400px"}},r.default.createElement(i.default,{form:o,schema:W,onFinish:ue}),r.default.createElement(l.default,null,r.default.createElement(p.default,{onClick:G},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),r.default.createElement(p.default,{type:"primary",onClick:o.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},N=c,t.abrupt("return",N);case 48:case"end":return t.stop()}},D)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Ae}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo"}},"form-methods-demo-1":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(v.a.mark(function D(){var d,l,p,y,C,r,u,i,K,I,F,c,N;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return I=function(o,A){if(!A&&o&&o.__esModule)return o;if(o===null||typeof o!="object"&&typeof o!="function")return{default:o};var B=K(A);if(B&&B.has(o))return B.get(o);var W={},Z=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var G in o)if(G!=="default"&&Object.prototype.hasOwnProperty.call(o,G)){var ue=Z?Object.getOwnPropertyDescriptor(o,G):null;ue&&(ue.get||ue.set)?Object.defineProperty(W,G,ue):W[G]=o[G]}return W.default=o,B&&B.set(o,W),W},K=function(o){if(typeof WeakMap!="function")return null;var A=new WeakMap,B=new WeakMap;return(K=function(Z){return Z?B:A})(o)},d=e("K+nK"),t.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return t.t0=d,t.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return t.t1=t.sent,l=(0,t.t0)(t.t1),t.t2=d,t.next=13,Promise.resolve().then(e.bind(null,"PpiC"));case 13:return t.t3=t.sent,p=(0,t.t2)(t.t3),t.next=17,e.e(14).then(e.t.bind(null,"tL+A",7));case 17:return t.t4=d,t.next=20,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 20:return t.t5=t.sent,y=(0,t.t4)(t.t5),t.t6=d,t.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return t.t7=t.sent,C=(0,t.t6)(t.t7),t.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 29:return r=t.sent,t.t8=I,t.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 33:return t.t9=t.sent,u=(0,t.t8)(t.t9),t.next=37,e.e(15).then(e.bind(null,"OH0R"));case 37:return i=t.sent,F={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},c=function(){var o=(0,u.useForm)(),A=function(Z,G){G.length>0?y.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(G.map(function(ue){return ue.name}))):(0,i.fakeApi)("xxx/submit",Z).then(function(ue){return y.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},B=function(Z){var G=Z.data,ue=Z.errors,Fe=Z.schema,Te=(0,p.default)(Z,["data","errors","schema"]);return(0,i.fakeApi)("xxx/validation").then(function(cn){return{name:"select1",error:["\u5916\u90E8\u6821\u9A8C\u9519\u8BEF"]}})};return C.default.createElement("div",{style:{width:"400px"}},C.default.createElement(u.default,{form:o,schema:F,beforeFinish:B,onFinish:A}),C.default.createElement(l.default,{type:"primary",onClick:o.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},N=c,t.abrupt("return",N);case 42:case"end":return t.stop()}},D)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Ae}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-1"}},"form-methods-demo-2":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(v.a.mark(function D(){var d,l,p,y,C,r,u,i,K,I,F,c,N;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return I=function(o,A){if(!A&&o&&o.__esModule)return o;if(o===null||typeof o!="object"&&typeof o!="function")return{default:o};var B=K(A);if(B&&B.has(o))return B.get(o);var W={},Z=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var G in o)if(G!=="default"&&Object.prototype.hasOwnProperty.call(o,G)){var ue=Z?Object.getOwnPropertyDescriptor(o,G):null;ue&&(ue.get||ue.set)?Object.defineProperty(W,G,ue):W[G]=o[G]}return W.default=o,B&&B.set(o,W),W},K=function(o){if(typeof WeakMap!="function")return null;var A=new WeakMap,B=new WeakMap;return(K=function(Z){return Z?B:A})(o)},d=e("K+nK"),t.next=5,e.e(20).then(e.t.bind(null,"lfLe",7));case 5:return t.t0=d,t.next=8,e.e(21).then(e.t.bind(null,"Cp9S",7));case 8:return t.t1=t.sent,l=(0,t.t0)(t.t1),t.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return t.t2=d,t.next=15,e.e(12).then(e.t.bind(null,"4IMT",7));case 15:return t.t3=t.sent,p=(0,t.t2)(t.t3),t.next=19,e.e(14).then(e.t.bind(null,"tL+A",7));case 19:return t.t4=d,t.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return t.t5=t.sent,y=(0,t.t4)(t.t5),t.t6=d,t.next=27,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 27:return t.t7=t.sent,C=(0,t.t6)(t.t7),t.next=31,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 31:return r=t.sent,t.t8=I,t.next=35,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 35:return t.t9=t.sent,u=(0,t.t8)(t.t9),t.next=39,e.e(15).then(e.bind(null,"OH0R"));case 39:return i=t.sent,F={type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F\u8303\u56F4",type:"range",format:"date"}}},c=function(){var o=(0,u.useForm)(),A=function(Z,G){G.length>0?y.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(G.map(function(ue){return ue.name}))):(0,i.fakeApi)("xxx/submit",Z).then(function(ue){return y.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},B=function(){(0,i.fakeApi)("xxx/getForm").then(function(Z){o.setValues({startDate:"2020-04-04",endDate:"2020-04-24"})})};return C.default.createElement("div",{style:{width:"400px"}},C.default.createElement(u.default,{form:o,schema:F,onFinish:A}),C.default.createElement(l.default,null,C.default.createElement(p.default,{onClick:B},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),C.default.createElement(p.default,{type:"primary",onClick:o.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},N=c,t.abrupt("return",N);case 44:case"end":return t.stop()}},D)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Ae}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-2"}},"form-methods-demo-3":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(v.a.mark(function D(){var d,l,p,y,C,r,u,i,K,I,F,c;return v.a.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return K=function(g,o){if(!o&&g&&g.__esModule)return g;if(g===null||typeof g!="object"&&typeof g!="function")return{default:g};var A=i(o);if(A&&A.has(g))return A.get(g);var B={},W=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var Z in g)if(Z!=="default"&&Object.prototype.hasOwnProperty.call(g,Z)){var G=W?Object.getOwnPropertyDescriptor(g,Z):null;G&&(G.get||G.set)?Object.defineProperty(B,Z,G):B[Z]=g[Z]}return B.default=g,A&&A.set(g,B),B},i=function(g){if(typeof WeakMap!="function")return null;var o=new WeakMap,A=new WeakMap;return(i=function(W){return W?A:o})(g)},d=e("K+nK"),h.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return h.t0=d,h.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return h.t1=h.sent,l=(0,h.t0)(h.t1),h.next=12,e.e(14).then(e.t.bind(null,"tL+A",7));case 12:return h.t2=d,h.next=15,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 15:return h.t3=h.sent,p=(0,h.t2)(h.t3),h.t4=K,h.next=20,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 20:return h.t5=h.sent,y=(0,h.t4)(h.t5),h.next=24,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 24:return C=h.sent,h.t6=K,h.next=28,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 28:return h.t7=h.sent,r=(0,h.t6)(h.t7),h.next=32,e.e(15).then(e.bind(null,"OH0R"));case 32:return u=h.sent,I={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select1:{title:"\u5355\u9009",type:"string",widget:"select"}}}}},F=function(){var g=(0,r.useForm)(),o=function(){g.setSchemaByPath("obj1.select1",{enum:["east","south","west","north"],enumNames:["\u4E1C","\u5357","\u897F","\u5317"]})},A=function(W,Z){Z.length>0?p.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(Z.map(function(G){return G.name}))):p.default.info(JSON.stringify(W))};return y.default.createElement("div",{style:{width:"400px"}},y.default.createElement(r.default,{form:g,schema:I,onMount:o,onFinish:A}),y.default.createElement(l.default,{type:"primary",onClick:g.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},c=F,h.abrupt("return",c);case 37:case"end":return h.stop()}},D)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Ae}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-3"}},"function-demo":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(v.a.mark(function D(){var d,l,p,y,C,r,u,i;return v.a.wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return C=function(c,N){if(!N&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var h=y(N);if(h&&h.has(c))return h.get(c);var t={},g=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in c)if(o!=="default"&&Object.prototype.hasOwnProperty.call(c,o)){var A=g?Object.getOwnPropertyDescriptor(c,o):null;A&&(A.get||A.set)?Object.defineProperty(t,o,A):t[o]=c[o]}return t.default=c,h&&h.set(c,t),t},y=function(c){if(typeof WeakMap!="function")return null;var N=new WeakMap,h=new WeakMap;return(y=function(g){return g?h:N})(c)},d=e("K+nK"),I.t0=d,I.next=6,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 6:return I.t1=I.sent,l=(0,I.t0)(I.t1),I.t2=C,I.next=11,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 11:return I.t3=I.sent,p=(0,I.t2)(I.t3),r={type:"object",properties:{select1:{title:"\u5355\u9009",description:"\u5C1D\u8BD5\u9009\u62E9\u201C\u663E\u793A\u8F93\u5165\u6846\u201D",type:"string",enum:["a","b"],enumNames:["\u9690\u85CF\u8F93\u5165\u6846","\u663E\u793A\u8F93\u5165\u6846"],disabled:"{{rootValue.input1.length > 5}}",default:"a"},input1:{title:"\u8F93\u5165\u6846",description:"\u5C1D\u8BD5\u8F93\u5165\u8D85\u8FC75\u4E2A\u5B57\u7B26",type:"string",hidden:'{{formData.select1 == "a"}}'}}},u=function(){var c=(0,p.useForm)();return l.default.createElement(p.default,{form:c,schema:r})},i=u,I.abrupt("return",i);case 17:case"end":return I.stop()}},D)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo1;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo"}},"function-demo-1":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(v.a.mark(function D(){var d,l,p,y,C;return v.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return d=e("K+nK"),u.t0=d,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,l=(0,u.t0)(u.t1),u.t2=d,u.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return u.t3=u.sent,p=(0,u.t2)(u.t3),u.next=13,e.e(17).then(e.bind(null,"8iYR"));case 13:return y=u.sent,C=function(){return l.default.createElement(p.default,{schema:y.expression})},u.abrupt("return",C);case 16:case"end":return u.stop()}},D)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { expression } from '../json/schema';

export default () => <FR schema={expression} />;`},"demo/FR.jsx":{import:"../demo/FR",content:ce},"json/schema.js":{import:"../json/schema",content:Jn}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo-1"}},"lifeCycle-demo":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(v.a.mark(function D(){var d,l,p,y,C,r,u,i,K;return v.a.wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return C=function(N,h){if(!h&&N&&N.__esModule)return N;if(N===null||typeof N!="object"&&typeof N!="function")return{default:N};var t=y(h);if(t&&t.has(N))return t.get(N);var g={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var A in N)if(A!=="default"&&Object.prototype.hasOwnProperty.call(N,A)){var B=o?Object.getOwnPropertyDescriptor(N,A):null;B&&(B.get||B.set)?Object.defineProperty(g,A,B):g[A]=N[A]}return g.default=N,t&&t.set(N,g),g},y=function(N){if(typeof WeakMap!="function")return null;var h=new WeakMap,t=new WeakMap;return(y=function(o){return o?t:h})(N)},F.t0=C,F.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return F.t1=F.sent,d=(0,F.t0)(F.t1),F.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 9:return l=F.sent,F.t2=C,F.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 13:return F.t3=F.sent,p=(0,F.t2)(F.t3),r=function(N){return new Promise(function(h){return setTimeout(h,N)})},u={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u4E0B\u62C9\u9009\u6846",description:"\u52A0\u8F7D\u4E2D...",type:"string",enum:[],widget:"select"}}},i=function(){var N=(0,p.useForm)(),h=function(){N.setValues({input1:"hello world"}),r(3e3).then(function(g){N.setSchemaByPath("select1",{description:"",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]})})};return d.default.createElement(p.default,{form:N,schema:u,onMount:h})},K=i,F.abrupt("return",K);case 20:case"end":return F.stop()}},D)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.4.5-beta.14"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"lifeCycle-demo"}},"listDisplay-demo":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(v.a.mark(function D(){var d,l,p,y,C,r;return v.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return d=e("K+nK"),i.t0=d,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,l=(0,i.t0)(i.t1),i.t2=d,i.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return i.t3=i.sent,p=(0,i.t2)(i.t3),y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},C=function(){return l.default.createElement(p.default,{schema:y})},r=C,i.abrupt("return",r);case 15:case"end":return i.stop()}},D)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Ke}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo"}},"listDisplay-demo-1":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(v.a.mark(function D(){var d,l,p,y,C,r;return v.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return d=e("K+nK"),i.t0=d,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,l=(0,i.t0)(i.t1),i.t2=d,i.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return i.t3=i.sent,p=(0,i.t2)(i.t3),y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},C=function(){return l.default.createElement(p.default,{schema:y})},r=C,i.abrupt("return",r);case 15:case"end":return i.stop()}},D)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Ke}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-1"}},"listDisplay-demo-2":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(v.a.mark(function D(){var d,l,p,y,C,r;return v.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return d=e("K+nK"),i.t0=d,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,l=(0,i.t0)(i.t1),i.t2=d,i.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return i.t3=i.sent,p=(0,i.t2)(i.t3),y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},C=function(){return l.default.createElement(p.default,{schema:y})},r=C,i.abrupt("return",r);case 15:case"end":return i.stop()}},D)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Ke}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-2"}},"listDisplay-demo-3":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(v.a.mark(function D(){var d,l,p,y,C,r;return v.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return d=e("K+nK"),i.t0=d,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,l=(0,i.t0)(i.t1),i.t2=d,i.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return i.t3=i.sent,p=(0,i.t2)(i.t3),y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},C=function(){return l.default.createElement(p.default,{schema:y})},r=C,i.abrupt("return",r);case 15:case"end":return i.stop()}},D)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Ke}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-3"}},"listDisplay-demo-4":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(v.a.mark(function D(){var d,l,p,y,C,r;return v.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return d=e("K+nK"),i.t0=d,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,l=(0,i.t0)(i.t1),i.t2=d,i.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return i.t3=i.sent,p=(0,i.t2)(i.t3),window.hello=function(K){var I=K.value;console.log(I)},y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list4",itemProps:{buttons:[{callback:"hello",text:"\u590D\u5236"}]},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},C=function(){return l.default.createElement(p.default,{schema:y})},r=C,i.abrupt("return",r);case 16:case"end":return i.stop()}},D)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Ke}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-4"}},"watch-demo":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(v.a.mark(function D(){var d,l,p,y,C,r,u,i;return v.a.wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return C=function(c,N){if(!N&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var h=y(N);if(h&&h.has(c))return h.get(c);var t={},g=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in c)if(o!=="default"&&Object.prototype.hasOwnProperty.call(c,o)){var A=g?Object.getOwnPropertyDescriptor(c,o):null;A&&(A.get||A.set)?Object.defineProperty(t,o,A):t[o]=c[o]}return t.default=c,h&&h.set(c,t),t},y=function(c){if(typeof WeakMap!="function")return null;var N=new WeakMap,h=new WeakMap;return(y=function(g){return g?h:N})(c)},I.t0=C,I.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return I.t1=I.sent,d=(0,I.t0)(I.t1),I.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 9:return l=I.sent,I.t2=C,I.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 13:return I.t3=I.sent,p=(0,I.t2)(I.t3),r={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"}}},u=function(){var c=(0,p.useForm)(),N={"#":function(t){console.log("\u8868\u5355\u7684\u65F6\u65F6\u6570\u636E\u4E3A\uFF1A",t)},input1:function(t){c.setValueByPath("input2",t)}};return d.default.createElement(p.default,{form:c,schema:r,watch:N})},i=u,I.abrupt("return",i);case 19:case"end":return I.stop()}},D)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.4.5-beta.14"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo"}},"watch-demo-1":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(v.a.mark(function D(){var d,l,p,y,C,r,u,i,K,I;return v.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return u=function(h,t){if(!t&&h&&h.__esModule)return h;if(h===null||typeof h!="object"&&typeof h!="function")return{default:h};var g=r(t);if(g&&g.has(h))return g.get(h);var o={},A=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var B in h)if(B!=="default"&&Object.prototype.hasOwnProperty.call(h,B)){var W=A?Object.getOwnPropertyDescriptor(h,B):null;W&&(W.get||W.set)?Object.defineProperty(o,B,W):o[B]=h[B]}return o.default=h,g&&g.set(h,o),o},r=function(h){if(typeof WeakMap!="function")return null;var t=new WeakMap,g=new WeakMap;return(r=function(A){return A?g:t})(h)},d=e("K+nK"),c.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return c.t0=d,c.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return c.t1=c.sent,l=(0,c.t0)(c.t1),c.t2=u,c.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return c.t3=c.sent,p=(0,c.t2)(c.t3),c.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 17:return y=c.sent,c.t4=u,c.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 21:return c.t5=c.sent,C=(0,c.t4)(c.t5),i={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"radio"}}}}},K=function(){var h=(0,C.useForm)(),t=function(A,B){B.length>0?alert("errorFields:"+JSON.stringify(B)):alert("formData:"+JSON.stringify(A,null,2))},g={input1:function(A){A.length>2?h.setSchemaByPath("obj1.select",function(B){var W=B.enumNames;return{enumNames:W.map(function(Z){return Z+"a"})}}):h.setSchemaByPath("obj1.select",{enumNames:["\u65E9","\u4E2D","\u665A"]})}};return p.default.createElement("div",null,p.default.createElement(C.default,{form:h,schema:i,onFinish:t,watch:g}),p.default.createElement(l.default,{type:"",style:{marginRight:8},onClick:function(){return h.setSchemaByPath("input2",{title:"\u7F16\u8F91\u6846",format:"textarea"})}},"\u5C06 input \u6539\u4E3A textarea"),p.default.createElement(l.default,{type:"primary",onClick:h.submit},"\u63D0\u4EA4"))},I=K,c.abrupt("return",I);case 27:case"end":return c.stop()}},D)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo-1"}},"widget-demo":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(v.a.mark(function D(){var d,l,p,y,C,r,u,i,K,I,F,c,N;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return K=function(o,A){if(!A&&o&&o.__esModule)return o;if(o===null||typeof o!="object"&&typeof o!="function")return{default:o};var B=i(A);if(B&&B.has(o))return B.get(o);var W={},Z=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var G in o)if(G!=="default"&&Object.prototype.hasOwnProperty.call(o,G)){var ue=Z?Object.getOwnPropertyDescriptor(o,G):null;ue&&(ue.get||ue.set)?Object.defineProperty(W,G,ue):W[G]=o[G]}return W.default=o,B&&B.set(o,W),W},i=function(o){if(typeof WeakMap!="function")return null;var A=new WeakMap,B=new WeakMap;return(i=function(Z){return Z?B:A})(o)},d=e("K+nK"),t.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return t.t0=d,t.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return t.t1=t.sent,l=(0,t.t0)(t.t1),t.next=12,Promise.all([e.e(3),e.e(19)]).then(e.t.bind(null,"cUip",7));case 12:return t.t2=d,t.next=15,Promise.all([e.e(0),e.e(12),e.e(18),e.e(22)]).then(e.t.bind(null,"iJl9",7));case 15:return t.t3=t.sent,p=(0,t.t2)(t.t3),t.t4=d,t.next=20,e.e(74).then(e.bind(null,"0Owb"));case 20:return t.t5=t.sent,y=(0,t.t4)(t.t5),t.t6=K,t.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return t.t7=t.sent,C=(0,t.t6)(t.t7),t.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 29:return r=t.sent,t.t8=K,t.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 33:return t.t9=t.sent,u=(0,t.t8)(t.t9),I={type:"object",properties:{string:{title:"\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6",type:"string",widget:"site"},select:{title:"\u5355\u9009",type:"number",enum:[1,2,3],enumNames:["\u9009\u98791","\u9009\u98792","\u9009\u98793"]}}},F=function(o){return console.log("widget props:",o),C.default.createElement(p.default,(0,y.default)({addonBefore:"http://",addonAfter:".com"},o))},c=function(){var o=(0,u.useForm)(),A=function(){};return C.default.createElement("div",null,C.default.createElement(u.default,{readOnly:!0,form:o,schema:I,widgets:{site:F},onFinish:function(W){return alert(JSON.stringify(W,null,2))}}),C.default.createElement(l.default,{type:"primary",onClick:o.submit},"\u63D0\u4EA4"))},N=c,t.abrupt("return",N);case 40:case"end":return t.stop()}},D)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},"react-dom":{version:">=16.8.0"}},identifier:"widget-demo"}},"schema-demo":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(v.a.mark(function D(){var d,l,p,y,C;return v.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return d=e("K+nK"),u.t0=d,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,l=(0,u.t0)(u.t1),u.t2=d,u.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return u.t3=u.sent,p=(0,u.t2)(u.t3),u.next=13,e.e(17).then(e.bind(null,"8iYR"));case 13:return y=u.sent,C=function(){return l.default.createElement(p.default,{schema:y.basic})},u.abrupt("return",C);case 16:case"end":return u.stop()}},D)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { basic } from '../json/schema';

export default () => <FR schema={basic} />;`},"demo/FR.jsx":{import:"../demo/FR",content:ce},"json/schema.js":{import:"../json/schema",content:Jn}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo"}},"schema-demo-1":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(v.a.mark(function D(){var d,l,p,y,C;return v.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return d=e("K+nK"),u.t0=d,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,l=(0,u.t0)(u.t1),u.t2=d,u.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return u.t3=u.sent,p=(0,u.t2)(u.t3),u.next=13,e.e(17).then(e.bind(null,"8iYR"));case 13:return y=u.sent,C=function(){return l.default.createElement(p.default,{schema:y.titleTrick})},u.abrupt("return",C);case 16:case"end":return u.stop()}},D)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { titleTrick } from '../json/schema';

export default () => <FR schema={titleTrick} />;`},"demo/FR.jsx":{import:"../demo/FR",content:ce},"json/schema.js":{import:"../json/schema",content:Jn}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo-1"}},"docs-playground":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(v.a.mark(function D(){return v.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(25)]).then(e.bind(null,"BASV"));case 2:return l.abrupt("return",l.sent.default);case 3:case"end":return l.stop()}},D)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:Ie},"main.js":{import:"./main",content:Bn},"json/simplest.json":{import:"./json/simplest.json",content:Kn},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:On},"monaco/index.js":{import:"./monaco",content:pn},"suggestionsMap.js":{import:"./suggestionsMap",content:Qe},"index.css":{import:"./index.css",content:xn}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:"^17.x"},"react-dom":{version:">=16.9.0"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.4.5-beta.14"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-monaco-editor":{version:"0.43.0"},"@types/react":{version:"^17.x"}},identifier:"docs-playground"}},"table-render-advanced":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(v.a.mark(function D(){return v.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(25)]).then(e.bind(null,"7ZP+"));case 2:return l.abrupt("return",l.sent.default);case 3:case"end":return l.stop()}},D)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{tsx:Mn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.1"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!0,identifier:"table-render-advanced"}},"table-render-demo":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(v.a.mark(function D(){var d,l,p,y,C,r,u,i,K;return v.a.wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return d=e("K+nK"),F.t0=d,F.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return F.t1=F.sent,l=(0,F.t0)(F.t1),F.next=8,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(63)]).then(e.bind(null,"P2DI"));case 8:for(p=F.sent,y=[],C=0;C<6;C++)y.push({id:C.toString(),title:"\u6807\u9898".concat(C+1),created_at:new Date().getTime()});return r={type:"object",properties:{string:{title:"\u6807\u9898",type:"string","ui:width":"30%"},created_at:{title:"\u521B\u5EFA\u65F6\u95F4",type:"string",format:"date","ui:width":"30%"}}},u=[{title:"\u6807\u9898",dataIndex:"title"},{title:"\u521B\u5EFA\u65F6\u95F4",key:"since",dataIndex:"created_at",valueType:"date"},{title:"\u64CD\u4F5C",render:function(N,h){return l.default.createElement("a",{onClick:function(){return alert(N.title)}},"\u7F16\u8F91")}}],i=function(){var N=function(){return{rows:y,total:y.length}};return l.default.createElement(p.TableProvider,null,l.default.createElement(p.Search,{schema:r,api:N}),l.default.createElement(p.Table,{headerTitle:"\u6700\u7B80\u8868\u683C",columns:u,rowKey:"id"}))},K=i,F.abrupt("return",K);case 16:case"end":return F.stop()}},D)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Wrapper;`}},dependencies:{react:{version:">=16.8.0"},"table-render":{version:"1.1.1"},antd:{version:"4.x",css:"antd/dist/antd.css"}},transform:!0,defaultShowCode:!0,identifier:"table-render-demo"}},"generator-demo":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(v.a.mark(function D(){var d,l,p,y,C,r;return v.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return d=e("K+nK"),i.t0=d,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,l=(0,i.t0)(i.t1),i.t2=d,i.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(62)]).then(e.bind(null,"nYSz"));case 9:return i.t3=i.sent,p=(0,i.t2)(i.t3),y={type:"object",properties:{inputName:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string"}}},C=function(){return l.default.createElement("div",{style:{height:"80vh"}},l.default.createElement(p.default,{defaultValue:y}))},r=C,i.abrupt("return",r);case 15:case"end":return i.stop()}},D)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.1.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"generator-demo"}},"generator-modal":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(v.a.mark(function D(){return v.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(25)]).then(e.bind(null,"PPgD"));case 2:return l.abrupt("return",l.sent.default);case 3:case"end":return l.stop()}},D)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:Sn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.1.2"},"react-dom":{version:">=16.9.0"}},identifier:"generator-modal"}},"generator-transformer":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(v.a.mark(function D(){return v.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(25)]).then(e.bind(null,"jktF"));case 2:return l.abrupt("return",l.sent.default);case 3:case"end":return l.stop()}},D)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:We}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.1.2"},"react-dom":{version:">=16.9.0"}},identifier:"generator-transformer"}},"generator-settings":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(v.a.mark(function D(){return v.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(25)]).then(e.bind(null,"M63W"));case 2:return l.abrupt("return",l.sent.default);case 3:case"end":return l.stop()}},D)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:_n}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.1.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-settings"}},"generator-playground":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(v.a.mark(function D(){return v.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(25)]).then(e.bind(null,"TYW4"));case 2:return l.abrupt("return",l.sent.default);case 3:case"end":return l.stop()}},D)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:$n},"index.less":{import:"./index.less",content:et}},dependencies:{react:{version:">=16.8.0"},umi:{version:"3.4.19"},"fr-generator":{version:"2.1.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-playground"}}}},PbZa:function(Tn,gn,e){"use strict";e.r(gn);var J=e("q1tI"),n=e.n(J),v=e("dEAq"),L=e.n(v),fe=e("0zqC"),V=e("ZpkN"),Ke=e("JjdP"),Ae=n.a.memo(Ke.default["table-render-demo"].component);gn.default=ce=>(n.a.useEffect(()=>{ce!=null&&ce.location.hash&&v.AnchorLink.scrollToAnchor(decodeURIComponent(ce.location.hash.slice(1)))},[]),n.a.createElement(n.a.Fragment,null,n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"markdown"},n.a.createElement("div",{style:{display:"flex",alignItems:"center",marginBottom:"24px"}},n.a.createElement("img",{src:"https://img.alicdn.com/tfs/TB17UtINiLaK1RjSZFxXXamPFXa-606-643.png",alt:"logo",width:"48px"}),n.a.createElement("span",{style:{fontSize:"30px",fontWeight:"600",display:"inline-block",marginLeft:"12px"}},"TableRender")),n.a.createElement("p",{style:{display:"flex",justifyContent:"space-between",width:"440px"}},n.a.createElement(v.Link,{to:"https://www.npmjs.com/package/table-render?_blank"},n.a.createElement("img",{alt:"npm",src:"https://img.shields.io/npm/v/table-render.svg?maxAge=3600&style=flat-square"})),n.a.createElement(v.Link,{to:"https://npmjs.org/package/table-render"},n.a.createElement("img",{alt:"NPM downloads",src:"https://img.shields.io/npm/dm/table-render.svg?style=flat-square"})),n.a.createElement(v.Link,{to:"https://npmjs.org/package/table-render"},n.a.createElement("img",{alt:"NPM all downloads",src:"https://img.shields.io/npm/dt/table-render.svg?style=flat-square"})),n.a.createElement("a",null,n.a.createElement("img",{alt:"PRs Welcome",src:"https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square"}))),n.a.createElement("blockquote",null,n.a.createElement("p",null,"\u6613\u7528\u4E14\u8F7B\u91CF\u7684\u4E2D\u540E\u53F0",n.a.createElement("strong",null,"\u5217\u8868\u89E3\u51B3\u65B9\u6848"),"\uFF0C\u5E38\u7528\u4E8E",n.a.createElement("strong",null,"\u641C\u7D22\u5217\u8868\u9875"),"\u5FEB\u901F\u751F\u6210")),n.a.createElement("h2",{id:"\u4F18\u52BF"},n.a.createElement(v.AnchorLink,{to:"#\u4F18\u52BF","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u4F18\u52BF"),n.a.createElement("ol",null,n.a.createElement("li",null,n.a.createElement("strong",null,"\u771F\u6B63\u5F00\u7BB1\u5373\u7528"),"\uFF1A\u4EE5\u6700\u7B80\u5355\u7684 API \u914D\u7F6E\u8BF7\u6C42\u548C\u8868\u5934\u7684\u5B57\u6BB5\uFF0C\u5C31\u80FD\u751F\u6210\u4E00\u4E2A\u597D\u7528\u641C\u7D22\u5217\u8868\u3002"),n.a.createElement("li",null,n.a.createElement("strong",null,"XRender \u751F\u6001"),"\uFF1A\u641C\u7D22\u7B5B\u9009\u80FD\u529B\u7528 FormRender \u6765\u63D0\u4F9B\uFF0C\u4EE5\u6700\u5C0F\u6210\u672C\u5FEB\u901F\u751F\u6210\u4E0A\u4FA7\u641C\u7D22\u9762\u677F\u3002"),n.a.createElement("li",null,n.a.createElement("strong",null,"\u65E0\u7F1D\u4E60\u60EF\u4F7F\u7528"),"\uFF1A\u8868\u683C\u80FD\u7528 Ant Design Table \u6765\u63D0\u4F9B\uFF0C\u964D\u4F4E\u7528\u6237\u4F7F\u7528\u6210\u672C\u3002")),n.a.createElement("h2",{id:"\u4F55\u65F6\u4F7F\u7528"},n.a.createElement(v.AnchorLink,{to:"#\u4F55\u65F6\u4F7F\u7528","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u4F55\u65F6\u4F7F\u7528"),n.a.createElement("ol",null,n.a.createElement("li",null,"\u7528\u4E8E\u67E5\u770B\u548C\u5904\u7406\u591A\u6761\u7ED3\u6784\u7C7B\u4F3C\u7684\u6570\u636E\uFF0C\u53EF\u5BF9\u6570\u636E\u8FDB\u884C\u6392\u5E8F\u3001\u7B5B\u9009\u3001\u5BF9\u6BD4\u6216\u5176\u4ED6\u81EA\u5B9A\u4E49\u64CD\u4F5C\uFF0C\u5E38\u6709\u5BFC\u822A\u5230\u8BE6\u60C5\u9875\u9762\u7684\u4F5C\u7528\u3002"),n.a.createElement("li",null,"\u8868\u683C\u5217\u8868\u5EFA\u8BAE\u5C06\u91CD\u8981\u4FE1\u606F\u548C\u64CD\u4F5C\u5C55\u793A\u51FA\u6765\uFF0C\u4E0D\u91CD\u8981\u4FE1\u606F\u76F4\u63A5\u6536\u8D77\uFF0C\u53EF\u4EE5\u5E2E\u52A9\u7528\u6237\u66F4\u9AD8\u6548\u7684\u67E5\u770B\u3001\u5904\u7406\u3001\u67E5\u627E\u6570\u636E\u3002")),n.a.createElement("h2",{id:"\u5982\u4F55\u4F7F\u7528"},n.a.createElement(v.AnchorLink,{to:"#\u5982\u4F55\u4F7F\u7528","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u5982\u4F55\u4F7F\u7528"),n.a.createElement("h3",{id:"\u5B89\u88C5"},n.a.createElement(v.AnchorLink,{to:"#\u5B89\u88C5","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u5B89\u88C5"),n.a.createElement("p",null,"table-render \u4F9D\u8D56 ant design\uFF0C\u5355\u72EC\u4F7F\u7528\u4E0D\u8981\u5FD8\u8BB0\u5B89\u88C5\uFF5E"),n.a.createElement(V.a,{code:"npm i table-render --save",lang:"sh"}),n.a.createElement("h3",{id:"\u4EE3\u7801\u6F14\u793A"},n.a.createElement(v.AnchorLink,{to:"#\u4EE3\u7801\u6F14\u793A","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u4EE3\u7801\u6F14\u793A")),n.a.createElement(fe.default,Ke.default["table-render-demo"].previewerProps,n.a.createElement(Ae,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h2",{id:"api"},n.a.createElement(v.AnchorLink,{to:"#api","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"API"),n.a.createElement("h3",{id:"tableprovider-\u53C2\u6570"},n.a.createElement(v.AnchorLink,{to:"#tableprovider-\u53C2\u6570","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),n.a.createElement("code",null,"<TableProvider>")," \u53C2\u6570"),n.a.createElement("p",null,n.a.createElement("strong",null,"TableProvider \u672C\u8D28\u5C31\u662F\u4E00\u4E2A React Context\uFF0C\u5C06\u5BF9\u5E94\u7684 ",n.a.createElement("code",null,"<Search>")," \u548C ",n.a.createElement("code",null,"<Table>")," \u5305\u88F9\u8D77\u6765\uFF0C\u53EF\u4EE5\u5F88\u65B9\u4FBF\u5728\u91CC\u9762\u63D2\u5165\u4E00\u4E9B\u5176\u4ED6\u4E1C\u897F\uFF0C\u4E0D\u9700\u8981\u4EFB\u4F55\u5165\u53C2")),n.a.createElement("h3",{id:"search-\u53C2\u6570"},n.a.createElement(v.AnchorLink,{to:"#search-\u53C2\u6570","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),n.a.createElement("code",null,"<Search>")," \u53C2\u6570"),n.a.createElement("p",null,n.a.createElement("strong",null,"\u6211\u4EEC\u5C06\u641C\u7D22\u76F8\u5173\u7684\u80FD\u529B\u653E\u5230 ",n.a.createElement("code",null,"<Search>")," \u4E0A\u9762\u914D\u7F6E\uFF0C\u5305\u62EC\u5BF9\u5E94\u7684\u641C\u7D22\u7B5B\u9009\u8868\u5355\u7684\u6E32\u67D3")),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u5C5E\u6027"),n.a.createElement("th",null,"\u63CF\u8FF0"),n.a.createElement("th",null,"\u7C7B\u578B"),n.a.createElement("th",null,"\u9ED8\u8BA4\u503C"),n.a.createElement("th",null,"\u5FC5\u586B"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"schema"),n.a.createElement("td",null,"\u7528\u4E8E\u6E32\u67D3\u8868\u5355\u7684 schema\uFF0C\u5177\u4F53\u7684 api \u53C2\u8003 ",n.a.createElement(v.Link,{to:"/form-render/config/schema"},"form-render \u6587\u6863")),n.a.createElement("td",null,n.a.createElement("code",null,"object")),n.a.createElement("td",null,"-"),n.a.createElement("td",null,"\u662F")),n.a.createElement("tr",null,n.a.createElement("td",null,"api"),n.a.createElement("td",null,"\u521D\u59CB\u5316&\u70B9\u51FB\u67E5\u8BE2\u65F6\u6267\u884C\u7684\u51FD\u6570"),n.a.createElement("td",null,n.a.createElement("code",null,"Function")," or ",n.a.createElement("code",null,"Array")),n.a.createElement("td",null,"-"),n.a.createElement("td",null,"\u662F")),n.a.createElement("tr",null,n.a.createElement("td",null,"onSearch"),n.a.createElement("td",null,"\u5728\u8868\u683C\u67E5\u8BE2\u65F6\u6267\u884C\u4E00\u4E9B\u989D\u5916\u7684\u64CD\u4F5C"),n.a.createElement("td",null,n.a.createElement("code",null,"Function")),n.a.createElement("td",null,"-"),n.a.createElement("td",null,"\u5426")),n.a.createElement("tr",null,n.a.createElement("td",null,"afterSearch"),n.a.createElement("td",null,"\u5728\u8868\u683C\u67E5\u8BE2\u7ED3\u675F\u540E\u6267\u884C\u4E00\u4E9B\u989D\u5916\u7684\u64CD\u4F5C"),n.a.createElement("td",null,n.a.createElement("code",null,"Function")),n.a.createElement("td",null,"-"),n.a.createElement("td",null,"\u5426")),n.a.createElement("tr",null,n.a.createElement("td",null,"searchOnMount"),n.a.createElement("td",null,"\u7EC4\u4EF6\u521D\u6B21\u6302\u8F7D\u65F6\uFF0C\u662F\u5426\u9ED8\u8BA4\u6267\u884C\u67E5\u8BE2\u52A8\u4F5C"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"true")),n.a.createElement("td",null,"\u5426")),n.a.createElement("tr",null,n.a.createElement("td",null,"hidden"),n.a.createElement("td",null,"\u662F\u5426\u9690\u85CF",n.a.createElement("code",null,"<Search />"),"\u7EC4\u4EF6"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"false")),n.a.createElement("td",null,"\u5426")),n.a.createElement("tr",null,n.a.createElement("td",null,"searchBtnRender"),n.a.createElement("td",null,"\u81EA\u5B9A\u4E49\u8868\u5355\u67E5\u8BE2\u6309\u94AE"),n.a.createElement("td",null,n.a.createElement("code",null,"(refresh,clearSearch) => ReactNode[]")),n.a.createElement("td",null,"-"),n.a.createElement("td",null,"\u5426")),n.a.createElement("tr",null,n.a.createElement("td",null,"searchBtnStyle"),n.a.createElement("td",null,"\u81EA\u5B9A\u4E49\u8868\u5355\u64CD\u4F5C\u6309\u94AE\u7EC4\u7684\u6837\u5F0F"),n.a.createElement("td",null,n.a.createElement("code",null,"React.CSSProperties")),n.a.createElement("td",null,"{","}"),n.a.createElement("td",null,"\u5426")),n.a.createElement("tr",null,n.a.createElement("td",null,"searchBtnClassName"),n.a.createElement("td",null,"\u81EA\u5B9A\u4E49\u8868\u5355\u64CD\u4F5C\u6309\u94AE\u7EC4\u7684 ClassName"),n.a.createElement("td",null,n.a.createElement("code",null,"string")),n.a.createElement("td",null,"''"),n.a.createElement("td",null,"\u5426")))),n.a.createElement("h3",{id:"table-\u53C2\u6570"},n.a.createElement(v.AnchorLink,{to:"#table-\u53C2\u6570","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),n.a.createElement("code",null,"<Table>")," \u53C2\u6570"),n.a.createElement("p",null,n.a.createElement("strong",null,"\u652F\u6301\u6240\u6709 antd table \u7684 props\uFF0C\u4F46\u662F",n.a.createElement("code",null,"dataSource"),", ",n.a.createElement("code",null,"loading"),", ",n.a.createElement("code",null,"pagination"),"\u8FD9\u51E0\u4E2A\u53C2\u6570\u662F\u5185\u90E8\u72B6\u6001\uFF0C\u4E0D\u9700\u8981\u586B\u5199\uFF0C\u6700\u57FA\u672C\u7684\u4F7F\u7528\u5C31\u9700\u8981\u586B\u5199",n.a.createElement("code",null,"columns"))),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u5C5E\u6027"),n.a.createElement("th",null,"\u63CF\u8FF0"),n.a.createElement("th",null,"\u7C7B\u578B"),n.a.createElement("th",null,"\u9ED8\u8BA4\u503C"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"headerTitle"),n.a.createElement("td",null,"\u8868\u683C\u6807\u9898"),n.a.createElement("td",null,n.a.createElement("code",null,"string")),n.a.createElement("td",null,n.a.createElement("code",null,"ReactNode"))),n.a.createElement("tr",null,n.a.createElement("td",null,"toolbarRender"),n.a.createElement("td",null,"\u8868\u683C\u4E3B\u4F53\u53F3\u4E0A\u65B9\u7684\u63A7\u4EF6\uFF0C\u4F8B\u5982\u201C\u6DFB\u52A0\u201D\u6309\u94AE"),n.a.createElement("td",null,n.a.createElement("code",null,"() => ReactNode[]")),n.a.createElement("td",null,n.a.createElement("code",null,"false"))),n.a.createElement("tr",null,n.a.createElement("td",null,"toolbarAction"),n.a.createElement("td",null,"\u663E\u793A\u5728\u8868\u683C\u4E3B\u4F53\u53F3\u4E0A\u65B9\u7684 Icon \u5217\u8868\uFF0C\u5185\u7F6E\u4E86",n.a.createElement("code",null,"\u5237\u65B0\u3001\u8C03\u6574\u5BC6\u5EA6\u3001\u5168\u5C4F\u663E\u793A")," \u7B49\u529F\u80FD"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"false"))),n.a.createElement("tr",null,n.a.createElement("td",null,"pageChangeWithRequest"),n.a.createElement("td",null,"\u5207\u6362\u5206\u9875\u65F6\u662F\u5426\u9700\u8981\u8BF7\u6C42\u63A5\u53E3"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"true"))),n.a.createElement("tr",null,n.a.createElement("td",null,"columns"),n.a.createElement("td",null,"\u5217\u5B9A\u4E49"),n.a.createElement("td",null,n.a.createElement("code",null,"object")),n.a.createElement("td",null,n.a.createElement("code",null,"false"))))),n.a.createElement("h4",{id:"table-\u53C2\u6570-\u4E2D-columns-\u5217\u5B9A\u4E49"},n.a.createElement(v.AnchorLink,{to:"#table-\u53C2\u6570-\u4E2D-columns-\u5217\u5B9A\u4E49","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),n.a.createElement("code",null,"<Table>")," \u53C2\u6570 \u4E2D Columns \u5217\u5B9A\u4E49"),n.a.createElement("p",null,n.a.createElement("strong",null,"columns \u4E3A antd \u5DF2\u6709\u7684 props\uFF0C\u6240\u4EE5\u652F\u6301 antd \u6240\u6709\u7684\u652F\u6301\u7684 ",n.a.createElement(v.Link,{to:"https://ant.design/components/table-cn/#Column"},"columns")," \u7684\u914D\u7F6E\uFF0C\u540C\u65F6\u4E5F\u63D0\u4F9B\u4E86\u4E00\u4E9B\u66F4\u65B9\u4FBF\u7684 api\uFF0C\u52A0\u5FEB\u4E66\u5199")),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u5C5E\u6027"),n.a.createElement("th",null,"\u63CF\u8FF0"),n.a.createElement("th",null,"\u7C7B\u578B"),n.a.createElement("th",null,"\u9ED8\u8BA4\u503C"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"ellipsis"),n.a.createElement("td",null,"\u662F\u5426\u81EA\u52A8\u7F29\u7565"),n.a.createElement("td",null,"boolean"),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"copyable"),n.a.createElement("td",null,"\u662F\u5426\u652F\u6301\u590D\u5236"),n.a.createElement("td",null,"boolean"),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"valueType"),n.a.createElement("td",null,"\u503C\u7684\u7C7B\u578B\uFF0C\u8BE6\u89C1\u4E0B\u65B9 ",n.a.createElement("code",null,"valueType \u914D\u7F6E")),n.a.createElement("td",null,n.a.createElement("code",null,"string"),"\uFF08",n.a.createElement("code",null,"text")," | ",n.a.createElement("code",null,"money")," | ",n.a.createElement("code",null,"date")," | ",n.a.createElement("code",null,"dateTime"),"\uFF09"),n.a.createElement("td",null,n.a.createElement("code",null,"text"))),n.a.createElement("tr",null,n.a.createElement("td",null,"enum"),n.a.createElement("td",null,"\u5F53\u524D\u5217\u503C\u7684\u679A\u4E3E\uFF0C\u8BE6\u89C1",n.a.createElement(v.Link,{to:"./table-render/demo"},"\u9AD8\u7EA7\u7528\u6CD5")),n.a.createElement("td",null,n.a.createElement("code",null,"object")),n.a.createElement("td",null,"-")))),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement("strong",null,"valueType \u503C\u7C7B\u578B"),"\uFF1ATableRender \u5C01\u88C5\u4E86\u4E00\u4E9B\u5E38\u7528\u7684\u503C\u7C7B\u578B\u6765\u51CF\u5C11\u91CD\u590D\u7684 render \u64CD\u4F5C\uFF0C\u914D\u7F6E\u4E00\u4E2A valueType \u5373\u53EF\u5C55\u793A\u683C\u5F0F\u5316\u54CD\u5E94\u7684\u6570\u636E\uFF0C\u5177\u4F53\u4F7F\u7528\u53EF\u53C2\u8003 ",n.a.createElement(v.Link,{to:"./table-render/demo"},"\u6848\u4F8B\u4EE3\u7801"),"\uFF1A"),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u5C5E\u6027"),n.a.createElement("th",null,"\u63CF\u8FF0"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"text"),n.a.createElement("td",null,"\u666E\u901A\u7684\u6587\u672C\u7C7B\u578B")),n.a.createElement("tr",null,n.a.createElement("td",null,"date"),n.a.createElement("td",null,"\u5F53\u6570\u636E\u662F\u65E5\u671F\u7C7B\u578B\u7684\u8FD4\u56DE\u65F6\uFF0C\u4F1A\u81EA\u52A8\u5C06\u683C\u5F0F\u8F6C\u6362\u4E3A '2020-10-20'")),n.a.createElement("tr",null,n.a.createElement("td",null,"dateTime"),n.a.createElement("td",null,"\u5F53\u6570\u636E\u662F\u65E5\u671F\u7C7B\u578B\u7684\u8FD4\u56DE\u65F6\uFF0C\u4F1A\u81EA\u52A8\u5C06\u683C\u5F0F\u8F6C\u6362\u4E3A '2020-10-20 19:30:00'")),n.a.createElement("tr",null,n.a.createElement("td",null,"money"),n.a.createElement("td",null,"\u5F53\u6570\u636E\u662F\u91D1\u989D\u65F6\uFF0C\u4F1A\u81EA\u52A8\u5C06\u683C\u5F0F\u8F6C\u6362\u4E3A '\xA5999,999,999.99'")))))),n.a.createElement("h3",{id:"context-\u4E0A\u4E0B\u6587"},n.a.createElement(v.AnchorLink,{to:"#context-\u4E0A\u4E0B\u6587","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Context \u4E0A\u4E0B\u6587"),n.a.createElement("p",null,n.a.createElement("strong",null,"\u53EF\u901A\u8FC7 ",n.a.createElement("code",null,"useTable")," \u83B7\u53D6 ",n.a.createElement("code",null,"table-render")," \u7684 context\uFF0C\u4F8B\u5982: ",n.a.createElement("code",null,"refresh"),"\u3001",n.a.createElement("code",null,"tableState"),"\u3001",n.a.createElement("code",null,"setTable")," \u7B49\u5C5E\u6027")),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u5C5E\u6027"),n.a.createElement("th",null,"\u63CF\u8FF0"),n.a.createElement("th",null,"\u7C7B\u578B"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"tableState"),n.a.createElement("td",null,"\u8FD9\u4E9B\u662F\u5168\u5C40\u7684\u72B6\u6001\uFF0C\u6839\u636E\u9700\u8981\u4F7F\u7528"),n.a.createElement("td",null,n.a.createElement("code",null,"object"))),n.a.createElement("tr",null,n.a.createElement("td",null,"refresh"),n.a.createElement("td",null,"\u5237\u65B0\u8868\u683C\u6570\u636E"),n.a.createElement("td",null,n.a.createElement("code",null,"function"))),n.a.createElement("tr",null,n.a.createElement("td",null,"setTable"),n.a.createElement("td",null,"\u7528\u4E8E\u4FEE\u6539\u5168\u5C40\u72B6\u6001\u7684\u5DE5\u5177\u51FD\u6570\uFF0CsetTable \u4E4B\u4E8E tableState\uFF0C\u7B49\u540C setState \u4E4B\u4E8E state"),n.a.createElement("td",null,n.a.createElement("code",null,"function"))),n.a.createElement("tr",null,n.a.createElement("td",null,"changeTab"),n.a.createElement("td",null,"\u624B\u52A8\u5207\u6362 tab \u7684\u51FD\u6570\uFF0C\u4F8B\u5982\u76EE\u524D\u4E24\u4E2A\u641C\u7D22 tab\uFF1A \u201C\u6211\u7684\u6D3B\u52A8\u201D\uFF0C\u201C\u5168\u90E8\u6D3B\u52A8\u201D \uFF08\u5206\u522B\u5BF9\u5E94 tab \u503C\u4E3A 0 \u548C 1\uFF09"),n.a.createElement("td",null,n.a.createElement("code",null,"function"))),n.a.createElement("tr",null,n.a.createElement("td",null,"form"),n.a.createElement("td",null,"Search \u7EC4\u4EF6\u662F form-render \u751F\u6210\u7684\uFF0C\u53EF\u4EE5\u53D6\u5230\u641C\u7D22\u8868\u5355\u7684 form \u5B9E\u4F8B\u4EE5\u53CA\u6302\u5728\u4E0A\u9762\u7684\u65B9\u6CD5\uFF0C\u4F8B\u5982 ",n.a.createElement("code",null,"form.resetFields")," \u6E05\u7A7A\u641C\u7D22\u9879"),n.a.createElement("td",null,n.a.createElement("code",null,"object"))))),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement("strong",null,"\u5BFC\u51FA useTable \u4EE5\u53CA\u5BF9\u5E94\u7684\u65B9\u6CD5")),n.a.createElement(V.a,{code:`import { useTable } from 'table-render';
const { refresh, tableState, setTable } = useTable();`,lang:"js"})),n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement("strong",null,"\u5176\u4E2D tableState \u7684\u6570\u636E\u683C\u5F0F\u5982\u4E0B\uFF1A")),n.a.createElement(V.a,{code:`{
  loading: false, // \u8868\u5355\u662F\u5426\u5728\u52A0\u8F7D\u4E2D
  search: {}, // \u9009\u9879\u6570\u636E
  searchApi // \u641C\u7D22\u7528\u7684api
  tab: 0, // \u5982\u679CsearchApi\u662F\u6570\u7EC4\uFF0C\u9700\u8981\u5728\u6700\u9876\u5C42\u611F\u77E5tab\uFF0C\u6765\u77E5\u9053\u5230\u5E95\u70B9\u51FB\u641C\u7D22\u8C03\u7528\u7684\u662F\u5565api
  dataSource: [], // \u8868\u683C\u7684\u6570\u636E
  extraData: { ... }, // \u81EA\u5B9A\u4E49\u7684\u6269\u5C55\u661F\u7CFB
  pagination: {
    current: 1,
    pageSize: 10,
    total: 100,
  },
}`,lang:"js"})),n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement("strong",null,"refresh \u7528\u6CD5")),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u5165\u53C2"),n.a.createElement("th",null,"\u7C7B\u578B"),n.a.createElement("th",null,"\u8BF4\u660E"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"stay"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,"\u5237\u65B0\u662F\u5426\u4FDD\u7559\u5728\u73B0\u5728\u7684\u9875\u7801\u4E0A\uFF0C\u9ED8\u8BA4 false\uFF0C\u56DE\u5230\u7B2C\u4E00\u9875")),n.a.createElement("tr",null,n.a.createElement("td",null,"tab"),n.a.createElement("td",null,n.a.createElement("code",null,"number")),n.a.createElement("td",null,"0,1,2.. \u5982\u679C searchApi \u662F\u6570\u7EC4\u4F1A\u51FA\u73B0\u7684\u641C\u7D22\u9009\u62E9 tab\uFF0C\u7528\u4E8E\u5F3A\u5236\u641C\u7D22\u67D0\u4E2A tab\uFF0C\u4E0D\u5E38\u7528")))),n.a.createElement("ol",null,n.a.createElement("li",null,"\u76F4\u63A5\u7528\uFF1Arefresh()"),n.a.createElement("li",null,"\u5237\u65B0\u6570\u636E\uFF0C\u4F46\u505C\u7559\u5728\u73B0\u6709\u7684\u9875\u7801\uFF1Arefresh(","{"," stay: true ","}",")"))),n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement("strong",null,"changeTab \u7528\u6CD5")),n.a.createElement(V.a,{code:`//\u4EE5\u4E0B\u4EE3\u7801\u5C06\u624B\u52A8\u5207\u6362\u5230\u201C\u5168\u90E8\u6D3B\u52A8\u201D\uFF08tab = 1\uFF09
const { changeTab } = useTable();
//...
const onClick = () => {
  changeTab(1);
};`,lang:"js"})))))))},TIsu:function(Tn,gn,e){},Zs1V:function(Tn){Tn.exports=JSON.parse("{}")},p8sG:function(Tn,gn,e){"use strict";Tn.exports=e("80pN")}}]);
