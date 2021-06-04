(window.webpackJsonp=window.webpackJsonp||[]).push([[43,10],{"0zqC":function(Tn,yn,e){"use strict";e.r(yn);var J=e("tJVT"),n=e("q1tI"),E=e.n(n),L=e("wx14"),ce=e("rePB"),V=e("ODXe"),Be=e("U8pU"),Ae=e("Ff2n"),ve=e("VTBJ"),pn=e("TSYQ"),Ie=e.n(pn),Kn=e("Zm9Q"),Mn=e("5Z9U"),Fn=e("6cGi"),hn=e("KQm4"),Xe=e("wgJM"),$n=e("t23M");function wn(a){var i=Object(n.useRef)(),m=Object(n.useRef)(!1);function b(){for(var O=arguments.length,y=new Array(O),F=0;F<O;F++)y[F]=arguments[F];m.current||(Xe.a.cancel(i.current),i.current=Object(Xe.a)(function(){a.apply(void 0,y)}))}return Object(n.useEffect)(function(){return function(){m.current=!0,Xe.a.cancel(i.current)}},[]),b}function Dn(a){var i=Object(n.useRef)([]),m=Object(n.useState)({}),b=Object(V.a)(m,2),O=b[1],y=Object(n.useRef)(typeof a=="function"?a():a),F=wn(function(){var w=y.current;i.current.forEach(function(x){w=x(w)}),i.current=[],y.current=w,O({})});function D(w){i.current.push(w),F()}return[y.current,D]}var We=e("4IlW");function _n(a,i){var m,b=a.prefixCls,O=a.id,y=a.active,F=a.rtl,D=a.tab,w=D.key,x=D.tab,$=D.disabled,Y=D.closeIcon,z=a.tabBarGutter,se=a.tabPosition,Q=a.closable,X=a.renderWrapper,le=a.removeAriaLabel,U=a.editable,ee=a.onClick,re=a.onRemove,k=a.onFocus,ue="".concat(b,"-tab");n.useEffect(function(){return re},[]);var _={};se==="top"||se==="bottom"?_[F?"marginLeft":"marginRight"]=z:_.marginBottom=z;var be=U&&Q!==!1&&!$;function te(ie){$||ee(ie)}function me(ie){ie.preventDefault(),ie.stopPropagation(),U.onEdit("remove",{key:w,event:ie})}var fe=n.createElement("div",{key:w,ref:i,className:Ie()(ue,(m={},Object(ce.a)(m,"".concat(ue,"-with-remove"),be),Object(ce.a)(m,"".concat(ue,"-active"),y),Object(ce.a)(m,"".concat(ue,"-disabled"),$),m)),style:_,onClick:te},n.createElement("div",{role:"tab","aria-selected":y,id:O&&"".concat(O,"-tab-").concat(w),className:"".concat(ue,"-btn"),"aria-controls":O&&"".concat(O,"-panel-").concat(w),"aria-disabled":$,tabIndex:$?null:0,onClick:function(H){H.stopPropagation(),te(H)},onKeyDown:function(H){[We.a.SPACE,We.a.ENTER].includes(H.which)&&(H.preventDefault(),te(H))},onFocus:k},x),be&&n.createElement("button",{type:"button","aria-label":le||"remove",tabIndex:0,className:"".concat(ue,"-remove"),onClick:function(H){H.stopPropagation(),me(H)}},Y||U.removeIcon||"\xD7"));return X&&(fe=X(fe)),fe}var Vn=n.forwardRef(_n),et={width:0,height:0,left:0,top:0};function ct(a,i,m){return Object(n.useMemo)(function(){for(var b,O=new Map,y=i.get((b=a[0])===null||b===void 0?void 0:b.key)||et,F=y.left+y.width,D=0;D<a.length;D+=1){var w=a[D].key,x=i.get(w);if(!x){var $;x=i.get(($=a[D-1])===null||$===void 0?void 0:$.key)||et}var Y=O.get(w)||Object(ve.a)({},x);Y.right=F-Y.left-Y.width,O.set(w,Y)}return O},[a.map(function(b){return b.key}).join("_"),i,m])}var j={width:0,height:0,left:0,top:0,right:0};function P(a,i,m,b,O){var y=O.tabs,F=O.tabPosition,D=O.rtl,w,x,$;["top","bottom"].includes(F)?(w="width",x=D?"right":"left",$=Math.abs(i.left)):(w="height",x="top",$=-i.top);var Y=i[w],z=m[w],se=b[w],Q=Y;return z+se>Y&&(Q=Y-se),Object(n.useMemo)(function(){if(!y.length)return[0,0];for(var X=y.length,le=X,U=0;U<X;U+=1){var ee=a.get(y[U].key)||j;if(ee[x]+ee[w]>$+Q){le=U-1;break}}for(var re=0,k=X-1;k>=0;k-=1){var ue=a.get(y[k].key)||j;if(ue[x]<$){re=k+1;break}}return[re,le]},[a,$,Q,F,y.map(function(X){return X.key}).join("_"),D])}var S=e("Gytx"),d=e.n(S),u=e("Kwbf");function p(a,i){var m=a.prefixCls,b=a.invalidate,O=a.item,y=a.renderItem,F=a.responsive,D=a.registerSize,w=a.itemKey,x=a.className,$=a.style,Y=a.children,z=a.display,se=a.order,Q=a.component,X=Q===void 0?"div":Q,le=Object(Ae.a)(a,["prefixCls","invalidate","item","renderItem","responsive","registerSize","itemKey","className","style","children","display","order","component"]),U=F&&!z;function ee(be){D(w,be)}n.useEffect(function(){return function(){ee(null)}},[]);var re=y&&O!==void 0?y(O):Y,k;b||(k={opacity:U?0:1,height:U?0:void 0,overflowY:U?"hidden":void 0,order:F?se:void 0,pointerEvents:U?"none":void 0});var ue={};U&&(ue["aria-hidden"]=!0);var _=n.createElement(X,Object(L.a)({className:Ie()(!b&&m,x),style:Object(ve.a)(Object(ve.a)({},k),$)},ue,le,{ref:i}),re);return F&&(_=n.createElement($n.default,{onResize:function(te){var me=te.offsetWidth;ee(me)}},_)),_}var g=n.forwardRef(p);g.displayName="Item";var C=g;function r(){var a=Object(n.useState)({}),i=Object(V.a)(a,2),m=i[1],b=Object(n.useRef)([]),O=Object(n.useRef)(!1),y=0,F=0;Object(n.useEffect)(function(){return function(){O.current=!0}},[]);function D(w){var x=y;y+=1,b.current.length<x+1&&(b.current[x]=w);var $=b.current[x];function Y(z){b.current[x]=typeof z=="function"?z(b.current[x]):z,Xe.a.cancel(F),F=Object(Xe.a)(function(){O.current||m({})})}return[$,Y]}return D}var o=function(i,m){var b=n.useContext(I);if(!b){var O=i.component,y=O===void 0?"div":O,F=Object(Ae.a)(i,["component"]);return n.createElement(y,Object(L.a)({},F,{ref:m}))}var D=b.className,w=Object(Ae.a)(b,["className"]),x=i.className,$=Object(Ae.a)(i,["className"]);return n.createElement(I.Provider,{value:null},n.createElement(C,Object(L.a)({ref:m,className:Ie()(D,x)},w,$)))},s=n.forwardRef(o);s.displayName="RawItem";var K=s,I=n.createContext(null),R="responsive",c="invalidate";function N(a){return"+ ".concat(a.length," ...")}function h(a,i){var m=a.prefixCls,b=m===void 0?"rc-overflow":m,O=a.data,y=O===void 0?[]:O,F=a.renderItem,D=a.renderRawItem,w=a.itemKey,x=a.itemWidth,$=x===void 0?10:x,Y=a.ssr,z=a.style,se=a.className,Q=a.maxCount,X=a.renderRest,le=a.renderRawRest,U=a.suffix,ee=a.component,re=ee===void 0?"div":ee,k=a.itemComponent,ue=a.onVisibleChange,_=Object(Ae.a)(a,["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"]),be=r(),te=Y==="full",me=be(null),fe=Object(V.a)(me,2),ie=fe[0],H=fe[1],de=ie||0,ye=be(new Map),ge=Object(V.a)(ye,2),Fe=ge[0],Le=ge[1],Ee=be(0),Oe=Object(V.a)(Ee,2),Me=Oe[0],Ke=Oe[1],Pe=be(0),je=Object(V.a)(Pe,2),$e=je[0],_e=je[1],Ve=be(0),Je=Object(V.a)(Ve,2),Qe=Je[0],xe=Je[1],Sn=Object(n.useState)(null),an=Object(V.a)(Sn,2),Ze=an[0],on=an[1],bn=Object(n.useState)(null),En=Object(V.a)(bn,2),Ne=En[0],He=En[1],en=n.useMemo(function(){return Ne===null&&te?Number.MAX_SAFE_INTEGER:Ne||0},[Ne,ie]),ke=Object(n.useState)(!1),Ln=Object(V.a)(ke,2),zn=Ln[0],xn=Ln[1],rn="".concat(b,"-item"),jn=Math.max(Me,$e),ln=y.length&&Q===R,Pn=Q===c,nn=ln||typeof Q=="number"&&y.length>Q,sn=Object(n.useMemo)(function(){var he=y;return ln?ie===null&&te?he=y:he=y.slice(0,Math.min(y.length,de/$)):typeof Q=="number"&&(he=y.slice(0,Q)),he},[y,$,ie,Q,ln]),An=Object(n.useMemo)(function(){return ln?y.slice(en+1):y.slice(sn.length)},[y,sn,ln,en]),mn=Object(n.useCallback)(function(he,De){var we;return typeof w=="function"?w(he):(we=w&&(he==null?void 0:he[w]))!==null&&we!==void 0?we:De},[w]),qe=Object(n.useCallback)(F||function(he){return he},[F]);function Ge(he,De){He(he),De||(xn(he<y.length-1),ue==null||ue(he))}function Yn(he,De){H(De.clientWidth)}function Hn(he,De){Le(function(we){var tn=new Map(we);return De===null?tn.delete(he):tn.set(he,De),tn})}function tt(he,De){_e(De),Ke($e)}function Cn(he,De){xe(De)}function gn(he){return Fe.get(mn(sn[he],he))}n.useLayoutEffect(function(){if(de&&jn&&sn){var he=Qe,De=sn.length,we=De-1;if(!De){Ge(0),on(null);return}for(var tn=0;tn<De;tn+=1){var Zn=gn(tn);if(Zn===void 0){Ge(tn-1,!0);break}if(he+=Zn,tn===we-1&&he+gn(we)<=de){Ge(we),on(null);break}else if(he+jn>de){Ge(tn-1),on(he-Zn-Qe+$e);break}else if(tn===we){Ge(we),on(he-Qe);break}}U&&gn(0)+Qe>de&&on(null)}},[de,Fe,$e,Qe,mn,sn]);var Gn=zn&&!!An.length,On={};Ze!==null&&ln&&(On={position:"absolute",left:Ze,top:0});var fn={prefixCls:rn,responsive:ln,component:k,invalidate:Pn},Qn=D?function(he,De){var we=mn(he,De);return n.createElement(I.Provider,{key:we,value:Object(ve.a)(Object(ve.a)({},fn),{},{order:De,item:he,itemKey:we,registerSize:Hn,display:De<=en})},D(he,De))}:function(he,De){var we=mn(he,De);return n.createElement(C,Object(L.a)({},fn,{order:De,key:we,item:he,renderItem:qe,itemKey:we,registerSize:Hn,display:De<=en}))},In,Xn={order:Gn?en:Number.MAX_SAFE_INTEGER,className:"".concat(rn,"-rest"),registerSize:tt,display:Gn};if(le)le&&(In=n.createElement(I.Provider,{value:Object(ve.a)(Object(ve.a)({},fn),Xn)},le(An)));else{var dn=X||N;In=n.createElement(C,Object(L.a)({},fn,Xn),typeof dn=="function"?dn(An):dn)}var Nn=n.createElement(re,Object(L.a)({className:Ie()(!Pn&&b,se),style:z,ref:i},_),sn.map(Qn),nn?In:null,U&&n.createElement(C,Object(L.a)({},fn,{order:en,className:"".concat(rn,"-suffix"),registerSize:Cn,display:!0,style:On}),U));return ln&&(Nn=n.createElement($n.default,{onResize:Yn},Nn)),Nn}var t=n.forwardRef(h);t.displayName="Overflow",t.Item=K,t.RESPONSIVE=R,t.INVALIDATE=c;var v=t,l=v,A=e("1OyB"),T=e("vuIU"),W=e("Ji7U"),Z=e("LK+K"),G=e("bT9E"),oe=e("YrtM"),Re=n.createContext(null);function Te(a,i){var m=Object(ve.a)({},a);return Object.keys(i).forEach(function(b){var O=i[b];O!==void 0&&(m[b]=O)}),m}function cn(a){var i=a.children,m=a.locked,b=Object(Ae.a)(a,["children","locked"]),O=n.useContext(Re),y=Object(oe.a)(function(){return Te(O,b)},[O,b],function(F,D){return!m&&(F[0]!==D[0]||!d()(F[1],D[1]))});return n.createElement(Re.Provider,{value:y},i)}function Rn(a,i,m,b){var O=n.useContext(Re),y=O.activeKey,F=O.onActive,D=O.onInactive,w={active:y===a};return i||(w.onMouseEnter=function(x){m==null||m({key:a,domEvent:x}),F(a)},w.onMouseLeave=function(x){b==null||b({key:a,domEvent:x}),D(a)}),w}function Wn(a){var i=a.item,m=Object(Ae.a)(a,["item"]);return Object.defineProperty(m,"item",{get:function(){return Object(u.a)(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),i}}),m}function f(a){var i=a.icon,m=a.props,b=a.children,O;return typeof i=="function"?O=n.createElement(i,Object(ve.a)({},m)):O=i,O||b||null}function B(a){var i=n.useContext(Re),m=i.mode,b=i.rtl,O=i.inlineIndent;if(m!=="inline")return null;var y=a;return b?{paddingRight:y*O}:{paddingLeft:y*O}}var M=[],pe=n.createContext(null);function ne(){return n.useContext(pe)}var Se=n.createContext(M);function Ue(a){var i=n.useContext(Se);return n.useMemo(function(){return a!==void 0?[].concat(Object(hn.a)(i),[a]):i},[i,a])}var Ye=n.createContext(null),Ut=n.createContext(null);function Jt(a,i){return a===void 0?null:"".concat(a,"-").concat(i)}function zt(a){var i=n.useContext(Ut);return Jt(i,a)}var ba=function(a){Object(W.a)(m,a);var i=Object(Z.a)(m);function m(){return Object(A.a)(this,m),i.apply(this,arguments)}return Object(T.a)(m,[{key:"render",value:function(){var O=this.props,y=O.title,F=O.attribute,D=O.elementRef,w=Object(Ae.a)(O,["title","attribute","elementRef"]),x=Object(G.a)(w,["eventKey"]);return Object(u.a)(!F,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),n.createElement(l.Item,Object(L.a)({},F,{title:typeof y=="string"?y:void 0},x,{ref:D}))}}]),m}(n.Component),Ea=function(i){var m,b=i.style,O=i.className,y=i.eventKey,F=i.disabled,D=i.itemIcon,w=i.children,x=i.role,$=i.onMouseEnter,Y=i.onMouseLeave,z=i.onClick,se=i.onKeyDown,Q=i.onFocus,X=Object(Ae.a)(i,["style","className","eventKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"]),le=zt(y),U=n.useContext(Re),ee=U.prefixCls,re=U.onItemClick,k=U.disabled,ue=U.overflowDisabled,_=U.itemIcon,be=U.selectedKeys,te=U.onActive,me="".concat(ee,"-item"),fe=n.useRef(),ie=n.useRef(),H=k||F,de=Ue(y),ye=function(Ve){return{key:y,keyPath:de,item:fe.current,domEvent:Ve}},ge=D||_,Fe=Rn(y,H,$,Y),Le=Fe.active,Ee=Object(Ae.a)(Fe,["active"]),Oe=be.includes(y),Me=B(de.length),Ke=function(Ve){if(!H){var Je=ye(Ve);z==null||z(Wn(Je)),re(Je)}},Pe=function(Ve){if(se==null||se(Ve),Ve.which===We.a.ENTER){var Je=ye(Ve);z==null||z(Wn(Je)),re(Je)}},je=function(Ve){te(y),Q==null||Q(Ve)},$e={};return i.role==="option"&&($e["aria-selected"]=Oe),n.createElement(ba,Object(L.a)({ref:fe,elementRef:ie,role:x===null?"none":x||"menuitem",tabIndex:F?null:-1,"data-menu-id":ue&&le?null:le},X,Ee,$e,{component:"li","aria-disabled":F,style:Object(ve.a)(Object(ve.a)({},Me),b),className:Ie()(me,(m={},Object(ce.a)(m,"".concat(me,"-active"),Le),Object(ce.a)(m,"".concat(me,"-selected"),Oe),Object(ce.a)(m,"".concat(me,"-disabled"),H),m),O),onClick:Ke,onKeyDown:Pe,onFocus:je}),w,n.createElement(f,{props:Object(ve.a)(Object(ve.a)({},i),{},{isSelected:Oe}),icon:ge}))};function Ca(a){var i=a.eventKey,m=ne(),b=Ue(i);return n.useEffect(function(){if(m)return m.registerPath(i,b),function(){m.unregisterPath(i,b)}},[b]),m?null:n.createElement(Ea,a)}var St=Ca;function jt(a,i){return Object(Kn.a)(a).map(function(m,b){if(n.isValidElement(m)){var O=m.key;return O==null&&(O="tmp_key-".concat([].concat(Object(hn.a)(i),[b]).join("-"))),n.cloneElement(m,{key:O,eventKey:O})}return m})}function nt(a){var i=n.useRef(a);i.current=a;var m=n.useCallback(function(){for(var b,O=arguments.length,y=new Array(O),F=0;F<O;F++)y[F]=arguments[F];return(b=i.current)===null||b===void 0?void 0:b.call.apply(b,[i].concat(y))},[]);return a?m:void 0}var Oa=function(i,m){var b=i.className,O=i.children,y=Object(Ae.a)(i,["className","children"]),F=n.useContext(Re),D=F.prefixCls,w=F.mode;return n.createElement("ul",Object(L.a)({className:Ie()(D,"".concat(D,"-sub"),"".concat(D,"-").concat(w==="inline"?"inline":"vertical"),b)},y,{"data-menu-list":!0,ref:m}),O)},Yt=n.forwardRef(Oa);Yt.displayName="SubMenuList";var Ht=Yt,Fa=e("uciX"),Un={adjustX:1,adjustY:1},Gt={topLeft:{points:["bl","tl"],overflow:Un,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Un,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:Un,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:Un,offset:[4,0]}},Da={topLeft:{points:["bl","tl"],overflow:Un,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Un,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:Un,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:Un,offset:[4,0]}},fr=Gt;function Qt(a,i,m){if(i)return i;if(m)return m[a]||m.other}var Ra={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function Sa(a){var i=a.prefixCls,m=a.visible,b=a.children,O=a.popup,y=a.popupClassName,F=a.popupOffset,D=a.disabled,w=a.mode,x=a.onVisibleChange,$=n.useContext(Re),Y=$.getPopupContainer,z=$.rtl,se=$.subMenuOpenDelay,Q=$.subMenuCloseDelay,X=$.builtinPlacements,le=$.triggerSubMenuAction,U=$.forceSubMenuRender,ee=$.motion,re=$.defaultMotions,k=n.useState(!1),ue=Object(V.a)(k,2),_=ue[0],be=ue[1],te=z?Object(ve.a)(Object(ve.a)({},Da),X):Object(ve.a)(Object(ve.a)({},Gt),X),me=Ra[w],fe=Qt(w,ee,re),ie=Object(ve.a)(Object(ve.a)({},fe),{},{leavedClassName:"".concat(i,"-hidden"),removeOnLeave:!1,motionAppear:!0}),H=n.useRef();return n.useEffect(function(){return H.current=Object(Xe.a)(function(){be(m)}),function(){Xe.a.cancel(H.current)}},[m]),n.createElement(Fa.a,{prefixCls:i,popupClassName:Ie()("".concat(i,"-popup"),Object(ce.a)({},"".concat(i,"-rtl"),z),y),stretch:w==="horizontal"?"minWidth":null,getPopupContainer:Y,builtinPlacements:te,popupPlacement:me,popupVisible:_,popup:O,popupAlign:F&&{offset:F},action:D?[]:[le],mouseEnterDelay:se,mouseLeaveDelay:Q,onPopupVisibleChange:x,forceRender:U,popupMotion:ie},b)}var ja=e("8XRh");function Pa(a){var i=a.id,m=a.open,b=a.keyPath,O=a.children,y="inline",F=n.useContext(Re),D=F.prefixCls,w=F.forceSubMenuRender,x=F.motion,$=F.defaultMotions,Y=F.mode,z=n.useRef(!1);z.current=Y===y;var se=n.useState(!z.current),Q=Object(V.a)(se,2),X=Q[0],le=Q[1],U=z.current?m:!1;n.useEffect(function(){z.current&&le(!1)},[Y]);var ee=Object(ve.a)({},Qt(y,x,$));b.length>1&&(ee.motionAppear=!1);var re=ee.onVisibleChanged;return ee.onVisibleChanged=function(k){return!z.current&&!k&&le(!0),re==null?void 0:re(k)},X?null:n.createElement(cn,{mode:y,locked:!z.current},n.createElement(ja.default,Object(L.a)({visible:U},ee,{forceRender:w,removeOnLeave:!1,leavedClassName:"".concat(D,"-hidden")}),function(k){var ue=k.className,_=k.style;return n.createElement(Ht,{id:i,className:ue,style:_},O)}))}var Aa=function(i){var m,b=i.style,O=i.className,y=i.title,F=i.eventKey,D=i.disabled,w=i.internalPopupClose,x=i.children,$=i.itemIcon,Y=i.expandIcon,z=i.popupClassName,se=i.popupOffset,Q=i.onClick,X=i.onMouseEnter,le=i.onMouseLeave,U=i.onTitleClick,ee=i.onTitleMouseEnter,re=i.onTitleMouseLeave,k=Object(Ae.a)(i,["style","className","title","eventKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"]),ue=zt(F),_=n.useContext(Re),be=_.prefixCls,te=_.mode,me=_.openKeys,fe=_.disabled,ie=_.overflowDisabled,H=_.activeKey,de=_.selectedKeys,ye=_.itemIcon,ge=_.expandIcon,Fe=_.onItemClick,Le=_.onOpenChange,Ee=_.onActive,Oe=n.useContext(Ye),Me=Oe.isSubPathKey,Ke=Ue(),Pe="".concat(be,"-submenu"),je=fe||D,$e=n.useRef(),_e=n.useRef(),Ve=$||ye,Je=Y||ge,Qe=me.includes(F),xe=!ie&&Qe,Sn=Me(de,F),an=Rn(F,je,ee,re),Ze=an.active,on=Object(Ae.a)(an,["active"]),bn=n.useState(!1),En=Object(V.a)(bn,2),Ne=En[0],He=En[1],en=function(Ge){je||He(Ge)},ke=function(Ge){en(!0),X==null||X({key:F,domEvent:Ge})},Ln=function(Ge){en(!1),le==null||le({key:F,domEvent:Ge})},zn=n.useMemo(function(){return Ze||(te!=="inline"?Ne||Me([H],F):!1)},[te,Ze,H,Ne,F,Me]),xn=B(Ke.length),rn=function(Ge){je||(U==null||U({key:F,domEvent:Ge}),te==="inline"&&Le(F,!Qe))},jn=nt(function(qe){Q==null||Q(Wn(qe)),Fe(qe)}),ln=function(Ge){te!=="inline"&&Le(F,Ge)},Pn=function(){Ee(F)},nn=ue&&"".concat(ue,"-popup"),sn=n.createElement("div",Object(L.a)({role:"menuitem",style:xn,className:"".concat(Pe,"-title"),tabIndex:je?null:-1,ref:$e,title:typeof y=="string"?y:null,"data-menu-id":ie&&ue?null:ue,"aria-expanded":xe,"aria-haspopup":!0,"aria-controls":nn,"aria-disabled":je,onClick:rn,onFocus:Pn},on),y,n.createElement(f,{icon:te!=="horizontal"?Je:null,props:Object(ve.a)(Object(ve.a)({},i),{},{isOpen:xe,isSubMenu:!0})},n.createElement("i",{className:"".concat(Pe,"-arrow")}))),An=n.useRef(te);if(te!=="inline"&&(An.current=Ke.length>1?"vertical":te),!ie){var mn=An.current;sn=n.createElement(Sa,{mode:mn,prefixCls:Pe,visible:!w&&xe&&te!=="inline",popupClassName:z,popupOffset:se,popup:n.createElement(cn,{mode:mn},n.createElement(Ht,{id:nn,ref:_e},x)),disabled:je,onVisibleChange:ln},sn)}return n.createElement(cn,{onItemClick:jn,mode:te==="horizontal"?"vertical":te,itemIcon:Ve,expandIcon:Je},n.createElement(l.Item,Object(L.a)({role:"none"},k,{component:"li",style:b,className:Ie()(Pe,"".concat(Pe,"-").concat(te),O,(m={},Object(ce.a)(m,"".concat(Pe,"-open"),xe),Object(ce.a)(m,"".concat(Pe,"-active"),zn),Object(ce.a)(m,"".concat(Pe,"-selected"),Sn),Object(ce.a)(m,"".concat(Pe,"-disabled"),je),m)),onMouseEnter:ke,onMouseLeave:Ln}),sn,!ie&&n.createElement(Pa,{id:nn,open:xe,keyPath:Ke},x)))};function Xt(a){var i=a.eventKey,m=a.children,b=Ue(i),O=jt(m,b),y=ne();n.useEffect(function(){if(y)return y.registerPath(i,b),function(){y.unregisterPath(i,b)}},[b]);var F;return y?F=O:F=n.createElement(Aa,a,O),n.createElement(Se.Provider,{value:b},F)}var Ia=e("x/xZ");function Zt(a){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Object(Ia.a)(a)){var m=a.nodeName.toLowerCase(),b=["input","select","textarea","button"].includes(m)||a.isContentEditable||m==="a"&&!!a.getAttribute("href"),O=a.getAttribute("tabindex"),y=Number(O),F=null;return O&&!Number.isNaN(y)?F=y:b&&F===null&&(F=0),b&&a.disabled&&(F=null),F!==null&&(F>=0||i&&F<0)}return!1}function kt(a){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,m=Object(hn.a)(a.querySelectorAll("*")).filter(function(b){return Zt(b,i)});return Zt(a,i)&&m.unshift(a),m}var mt=null;function pr(){mt=document.activeElement}function hr(){mt=null}function vr(){if(mt)try{mt.focus()}catch(a){}}function gr(a,i){if(i.keyCode===9){var m=kt(a),b=m[i.shiftKey?0:m.length-1],O=b===document.activeElement||a===document.activeElement;if(O){var y=m[i.shiftKey?m.length-1:0];y.focus(),i.preventDefault()}}}var Pt=We.a.LEFT,At=We.a.RIGHT,It=We.a.UP,ft=We.a.DOWN,pt=We.a.ENTER,qt=We.a.ESC,_t=[It,ft,Pt,At];function Na(a,i,m,b){var O,y,F,D,w="prev",x="next",$="children",Y="parent";if(a==="inline"&&b===pt)return{inlineTrigger:!0};var z=(O={},Object(ce.a)(O,It,w),Object(ce.a)(O,ft,x),O),se=(y={},Object(ce.a)(y,Pt,m?x:w),Object(ce.a)(y,At,m?w:x),Object(ce.a)(y,ft,$),Object(ce.a)(y,pt,$),y),Q=(F={},Object(ce.a)(F,It,w),Object(ce.a)(F,ft,x),Object(ce.a)(F,pt,$),Object(ce.a)(F,qt,Y),Object(ce.a)(F,Pt,m?$:Y),Object(ce.a)(F,At,m?Y:$),F),X={inline:z,horizontal:se,vertical:Q,inlineSub:z,horizontalSub:Q,verticalSub:Q},le=(D=X["".concat(a).concat(i?"":"Sub")])===null||D===void 0?void 0:D[b];switch(le){case w:return{offset:-1,sibling:!0};case x:return{offset:1,sibling:!0};case Y:return{offset:-1,sibling:!1};case $:return{offset:1,sibling:!1};default:return null}}function Ba(a){for(var i=a;i;){if(i.getAttribute("data-menu-list"))return i;i=i.parentElement}return null}function Ta(a,i){for(var m=a||document.activeElement;m;){if(i.has(m))return m;m=m.parentElement}return null}function Ka(a,i){var m=kt(a,!0);return m.filter(function(b){return i.has(b)})}function ea(a,i,m){var b=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!a)return null;var O=Ka(a,i),y=O.length,F=O.findIndex(function(D){return m===D});return b<0?F===-1?F=y-1:F-=1:b>0&&(F+=1),F=(F+y)%y,O[F]}function Ma(a,i,m,b,O,y,F,D,w,x){var $=n.useRef(),Y=n.useRef();Y.current=i;var z=function(){Xe.a.cancel($.current)};return n.useEffect(function(){return function(){z()}},[]),function(se){var Q=se.which;if([].concat(_t,[pt,qt]).includes(Q)){var X,le,U,ee=function(){X=new Set,le=new Map,U=new Map;var ye=y();return ye.forEach(function(ge){var Fe=document.querySelector("[data-menu-id='".concat(Jt(b,ge),"']"));Fe&&(X.add(Fe),U.set(Fe,ge),le.set(ge,Fe))}),X};ee();var re=le.get(i),k=Ta(re,X),ue=U.get(k),_=Na(a,F(ue,!0).length===1,m,Q);if(!_)return;_t.includes(Q)&&se.preventDefault();var be=function(ye){if(ye){var ge=ye,Fe=ye.querySelector("a");(Fe==null?void 0:Fe.getAttribute("href"))&&(ge=Fe);var Le=U.get(ye);D(Le),z(),$.current=Object(Xe.a)(function(){Y.current===Le&&ge.focus()})}};if(_.sibling||!k){var te;!k||a==="inline"?te=O.current:te=Ba(k);var me=ea(te,X,k,_.offset);be(me)}else if(_.inlineTrigger)w(ue);else if(_.offset>0)w(ue,!0),z(),$.current=Object(Xe.a)(function(){ee();var de=k.getAttribute("aria-controls"),ye=document.getElementById(de),ge=ea(ye,X);be(ge)},5);else if(_.offset<0){var fe=F(ue,!0),ie=fe[fe.length-2],H=le.get(ie);w(ie,!1),be(H)}}x==null||x(se)}}var wa=Math.random().toFixed(5).toString().slice(2),na=0;function Wa(a){var i=Object(Fn.a)(a,{value:a}),m=Object(V.a)(i,2),b=m[0],O=m[1];return n.useEffect(function(){na+=1;var y="".concat(wa,"-").concat(na);O("rc-menu-uuid-".concat(y))},[]),b}var yr=e("p8sG");function La(a){Promise.resolve().then(a)}var Nt="__RC_UTIL_PATH_SPLIT__",ta=function(i){return i.join(Nt)},xa=function(i){return i.split(Nt)},Bt="rc-menu-more";function $a(){var a=n.useState({}),i=Object(V.a)(a,2),m=i[1],b=Object(n.useRef)(new Map),O=Object(n.useRef)(new Map),y=n.useState([]),F=Object(V.a)(y,2),D=F[0],w=F[1],x=Object(n.useRef)(0),$=Object(n.useCallback)(function(U,ee){var re=ta(ee);O.current.set(re,U),b.current.set(U,re),x.current+=1;var k=x.current;La(function(){k===x.current&&m({})})},[]),Y=Object(n.useCallback)(function(U,ee){var re=ta(ee);O.current.delete(re),b.current.delete(U)},[]),z=Object(n.useCallback)(function(U){w(U)},[]),se=Object(n.useCallback)(function(U,ee){var re=b.current.get(U)||"",k=xa(re);return ee&&D.includes(k[0])&&k.unshift(Bt),k},[D]),Q=Object(n.useCallback)(function(U,ee){return U.some(function(re){var k=se(re,!0);return k.includes(ee)})},[se]),X=function(){var ee=Object(hn.a)(b.current.keys());return D.length&&ee.push(Bt),ee},le=Object(n.useCallback)(function(U){var ee="".concat(b.current.get(U)).concat(Nt),re=new Set;return Object(hn.a)(O.current.keys()).forEach(function(k){k.startsWith(ee)&&re.add(O.current.get(k))}),re},[]);return{registerPath:$,unregisterPath:Y,refreshOverflowKeys:z,isSubPathKey:Q,getKeyPath:se,getKeys:X,getSubPathKeys:le}}var ht=[],Va=function(i){var m,b,O=i.prefixCls,y=O===void 0?"rc-menu":O,F=i.style,D=i.className,w=i.tabIndex,x=w===void 0?0:w,$=i.children,Y=i.direction,z=i.id,se=i.mode,Q=se===void 0?"vertical":se,X=i.inlineCollapsed,le=i.disabled,U=i.disabledOverflow,ee=i.subMenuOpenDelay,re=ee===void 0?.1:ee,k=i.subMenuCloseDelay,ue=k===void 0?.1:k,_=i.forceSubMenuRender,be=i.defaultOpenKeys,te=i.openKeys,me=i.activeKey,fe=i.defaultActiveFirst,ie=i.selectable,H=ie===void 0?!0:ie,de=i.multiple,ye=de===void 0?!1:de,ge=i.defaultSelectedKeys,Fe=i.selectedKeys,Le=i.onSelect,Ee=i.onDeselect,Oe=i.inlineIndent,Me=Oe===void 0?24:Oe,Ke=i.motion,Pe=i.defaultMotions,je=i.triggerSubMenuAction,$e=je===void 0?"hover":je,_e=i.builtinPlacements,Ve=i.itemIcon,Je=i.expandIcon,Qe=i.overflowedIndicator,xe=Qe===void 0?"...":Qe,Sn=i.getPopupContainer,an=i.onClick,Ze=i.onOpenChange,on=i.onKeyDown,bn=i.openAnimation,En=i.openTransitionName,Ne=Object(Ae.a)(i,["prefixCls","style","className","tabIndex","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName"]),He=jt($,ht),en=n.useState(!1),ke=Object(V.a)(en,2),Ln=ke[0],zn=ke[1],xn=n.useRef(),rn=Wa(z),jn=Y==="rtl",ln=n.useMemo(function(){return Q==="inline"&&X?["vertical",X]:[Q,!1]},[Q,X]),Pn=Object(V.a)(ln,2),nn=Pn[0],sn=Pn[1],An=n.useState(0),mn=Object(V.a)(An,2),qe=mn[0],Ge=mn[1],Yn=qe>=He.length-1||nn!=="horizontal"||U,Hn=Object(Fn.a)(be,{value:te,postState:function(q){return q||ht}}),tt=Object(V.a)(Hn,2),Cn=tt[0],gn=tt[1],Gn=n.useState(Cn),On=Object(V.a)(Gn,2),fn=On[0],Qn=On[1],In=nn==="inline",Xn=n.useRef(!1);n.useEffect(function(){In&&Qn(Cn)},[Cn]),n.useEffect(function(){if(!Xn.current){Xn.current=!0;return}if(In)gn(fn);else{var ae=[];gn(ae),Ze==null||Ze(ae)}},[In]);var dn=$a(),Nn=dn.registerPath,he=dn.unregisterPath,De=dn.refreshOverflowKeys,we=dn.isSubPathKey,tn=dn.getKeyPath,Zn=dn.getKeys,gt=dn.getSubPathKeys,wt=n.useMemo(function(){return{registerPath:Nn,unregisterPath:he}},[Nn,he]),Wt=n.useMemo(function(){return{isSubPathKey:we}},[we]);n.useEffect(function(){De(Yn?ht:He.slice(qe+1).map(function(ae){return ae.key}))},[qe,Yn]);var Lt=Object(Fn.a)(me||fe&&((m=He[0])===null||m===void 0?void 0:m.key),{value:me}),at=Object(V.a)(Lt,2),yt=at[0],st=at[1],bt=nt(function(ae){st(ae)}),xt=nt(function(){st(void 0)}),Et=Object(Fn.a)(ge||[],{value:Fe,postState:function(q){return Array.isArray(q)?q:q==null?ht:[q]}}),Ct=Object(V.a)(Et,2),rt=Ct[0],Bn=Ct[1],Ot=function(q){if(!!H){var Ce=q.key,ze=rt.includes(Ce),un;ze?un=rt.filter(function(qn){return qn!==Ce}):ye?un=[].concat(Object(hn.a)(rt),[Ce]):un=[Ce],Bn(un);var Jn=Object(ve.a)(Object(ve.a)({},q),{},{selectedKeys:un});ze?Ee==null||Ee(Jn):Le==null||Le(Jn)}},Ft=nt(function(ae){an==null||an(Wn(ae)),Ot(ae)}),ut=nt(function(ae,q){var Ce=Cn.filter(function(un){return un!==ae});if(q)Ce.push(ae);else if(nn!=="inline"){var ze=gt(ae);Ce=Ce.filter(function(un){return!ze.has(un)})}d()(Cn,Ce)||(gn(Ce),Ze==null||Ze(Ce))}),kn=nt(Sn),ot=function(q,Ce){var ze=Ce!=null?Ce:!Cn.includes(q);ut(q,ze)},lt=Ma(nn,yt,jn,rn,xn,Zn,tn,st,ot,on);n.useEffect(function(){zn(!0)},[]);var Dt=nn!=="horizontal"||U?He:He.map(function(ae,q){return n.createElement(cn,{key:ae.key,overflowDisabled:q>qe},ae)}),Rt=n.createElement(l,Object(L.a)({id:z,ref:xn,prefixCls:"".concat(y,"-overflow"),component:"ul",itemComponent:St,className:Ie()(y,"".concat(y,"-root"),"".concat(y,"-").concat(nn),D,(b={},Object(ce.a)(b,"".concat(y,"-inline-collapsed"),sn),Object(ce.a)(b,"".concat(y,"-rtl"),jn),b)),dir:Y,style:F,role:"menu",tabIndex:x,data:Dt,renderRawItem:function(q){return q},renderRawRest:function(q){var Ce=q.length,ze=Ce?He.slice(-Ce):null;return n.createElement(Xt,{eventKey:Bt,title:xe,disabled:Yn,internalPopupClose:Ce===0},ze)},maxCount:nn!=="horizontal"||U?l.INVALIDATE:l.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(q){Ge(q)},onKeyDown:lt},Ne));return n.createElement(Ut.Provider,{value:rn},n.createElement(cn,{prefixCls:y,mode:nn,openKeys:Cn,rtl:jn,disabled:le,motion:Ln?Ke:null,defaultMotions:Ln?Pe:null,activeKey:yt,onActive:bt,onInactive:xt,selectedKeys:rt,inlineIndent:Me,subMenuOpenDelay:re,subMenuCloseDelay:ue,forceSubMenuRender:_,builtinPlacements:_e,triggerSubMenuAction:$e,getPopupContainer:kn,itemIcon:Ve,expandIcon:Je,onItemClick:Ft,onOpenChange:ut},n.createElement(Ye.Provider,{value:Wt},Rt),n.createElement(pe.Provider,{value:wt},He)))},Ua=Va,Ja=function(i){var m=i.className,b=i.title,O=i.eventKey,y=i.children,F=Object(Ae.a)(i,["className","title","eventKey","children"]),D=n.useContext(Re),w=D.prefixCls,x="".concat(w,"-item-group");return n.createElement("li",Object(L.a)({},F,{onClick:function(Y){return Y.stopPropagation()},className:Ie()(x,m)}),n.createElement("div",{className:"".concat(x,"-title"),title:typeof b=="string"?b:void 0},b),n.createElement("ul",{className:"".concat(x,"-list")},y))};function za(a){var i=a.children,m=Object(Ae.a)(a,["children"]),b=Ue(m.eventKey),O=jt(i,b),y=ne();return y?O:n.createElement(Ja,m,O)}function Ya(a){var i=a.className,m=a.style,b=n.useContext(Re),O=b.prefixCls,y=ne();return y?null:n.createElement("li",{className:Ie()("".concat(O,"-item-divider"),i),style:m})}var it=Ua;it.Item=St,it.SubMenu=Xt,it.ItemGroup=za,it.Divider=Ya;var Ha=it,Ga=e("eDIo");function Qa(a,i){var m=a.prefixCls,b=a.editable,O=a.locale,y=a.style;return!b||b.showAdd===!1?null:n.createElement("button",{ref:i,type:"button",className:"".concat(m,"-nav-add"),style:y,"aria-label":(O==null?void 0:O.addAriaLabel)||"Add tab",onClick:function(D){b.onEdit("add",{event:D})}},b.addIcon||"+")}var aa=n.forwardRef(Qa);function Xa(a,i){var m=a.prefixCls,b=a.id,O=a.tabs,y=a.locale,F=a.mobile,D=a.moreIcon,w=D===void 0?"More":D,x=a.moreTransitionName,$=a.style,Y=a.className,z=a.editable,se=a.tabBarGutter,Q=a.rtl,X=a.onTabClick,le=Object(n.useState)(!1),U=Object(V.a)(le,2),ee=U[0],re=U[1],k=Object(n.useState)(null),ue=Object(V.a)(k,2),_=ue[0],be=ue[1],te="".concat(b,"-more-popup"),me="".concat(m,"-dropdown"),fe=_!==null?"".concat(te,"-").concat(_):null,ie=y==null?void 0:y.dropdownAriaLabel,H=n.createElement(Ha,{onClick:function(Oe){var Me=Oe.key,Ke=Oe.domEvent;X(Me,Ke),re(!1)},id:te,tabIndex:-1,role:"listbox","aria-activedescendant":fe,selectedKeys:[_],"aria-label":ie!==void 0?ie:"expanded dropdown"},O.map(function(Ee){return n.createElement(St,{key:Ee.key,id:"".concat(te,"-").concat(Ee.key),role:"option","aria-controls":b&&"".concat(b,"-panel-").concat(Ee.key),disabled:Ee.disabled},Ee.tab)}));function de(Ee){for(var Oe=O.filter(function($e){return!$e.disabled}),Me=Oe.findIndex(function($e){return $e.key===_})||0,Ke=Oe.length,Pe=0;Pe<Ke;Pe+=1){Me=(Me+Ee+Ke)%Ke;var je=Oe[Me];if(!je.disabled){be(je.key);return}}}function ye(Ee){var Oe=Ee.which;if(!ee){[We.a.DOWN,We.a.SPACE,We.a.ENTER].includes(Oe)&&(re(!0),Ee.preventDefault());return}switch(Oe){case We.a.UP:de(-1),Ee.preventDefault();break;case We.a.DOWN:de(1),Ee.preventDefault();break;case We.a.ESC:re(!1);break;case We.a.SPACE:case We.a.ENTER:_!==null&&X(_,Ee);break}}Object(n.useEffect)(function(){var Ee=document.getElementById(fe);Ee&&Ee.scrollIntoView&&Ee.scrollIntoView(!1)},[_]),Object(n.useEffect)(function(){ee||be(null)},[ee]);var ge=Object(ce.a)({},Q?"marginLeft":"marginRight",se);O.length||(ge.visibility="hidden",ge.order=1);var Fe=Ie()(Object(ce.a)({},"".concat(me,"-rtl"),Q)),Le=F?null:n.createElement(Ga.default,{prefixCls:me,overlay:H,trigger:["hover"],visible:ee,transitionName:x,onVisibleChange:re,overlayClassName:Fe,mouseEnterDelay:.1,mouseLeaveDelay:.1},n.createElement("button",{type:"button",className:"".concat(m,"-nav-more"),style:ge,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":te,id:"".concat(b,"-more"),"aria-expanded":ee,onKeyDown:ye},w));return n.createElement("div",{className:Ie()("".concat(m,"-nav-operations"),Y),style:$,ref:i},Le,n.createElement(aa,{prefixCls:m,locale:y,editable:z}))}var Za=n.forwardRef(Xa),Tt=Object(n.createContext)(null),ka=.1,ra=.01,vt=20,ia=Math.pow(.995,vt);function qa(a,i){var m=Object(n.useState)(),b=Object(V.a)(m,2),O=b[0],y=b[1],F=Object(n.useState)(0),D=Object(V.a)(F,2),w=D[0],x=D[1],$=Object(n.useState)(0),Y=Object(V.a)($,2),z=Y[0],se=Y[1],Q=Object(n.useState)(),X=Object(V.a)(Q,2),le=X[0],U=X[1],ee=Object(n.useRef)();function re(me){var fe=me.touches[0],ie=fe.screenX,H=fe.screenY;y({x:ie,y:H}),window.clearInterval(ee.current)}function k(me){if(!!O){me.preventDefault();var fe=me.touches[0],ie=fe.screenX,H=fe.screenY;y({x:ie,y:H});var de=ie-O.x,ye=H-O.y;i(de,ye);var ge=Date.now();x(ge),se(ge-w),U({x:de,y:ye})}}function ue(){if(!!O&&(y(null),U(null),le)){var me=le.x/z,fe=le.y/z,ie=Math.abs(me),H=Math.abs(fe);if(Math.max(ie,H)<ka)return;var de=me,ye=fe;ee.current=window.setInterval(function(){if(Math.abs(de)<ra&&Math.abs(ye)<ra){window.clearInterval(ee.current);return}de*=ia,ye*=ia,i(de*vt,ye*vt)},vt)}}var _=Object(n.useRef)();function be(me){var fe=me.deltaX,ie=me.deltaY,H=0,de=Math.abs(fe),ye=Math.abs(ie);de===ye?H=_.current==="x"?fe:ie:de>ye?(H=fe,_.current="x"):(H=ie,_.current="y"),i(-H,-H)&&me.preventDefault()}var te=Object(n.useRef)(null);te.current={onTouchStart:re,onTouchMove:k,onTouchEnd:ue,onWheel:be},n.useEffect(function(){function me(de){te.current.onTouchStart(de)}function fe(de){te.current.onTouchMove(de)}function ie(de){te.current.onTouchEnd(de)}function H(de){te.current.onWheel(de)}return document.addEventListener("touchmove",fe,{passive:!1}),document.addEventListener("touchend",ie,{passive:!1}),a.current.addEventListener("touchstart",me,{passive:!1}),a.current.addEventListener("wheel",H),function(){document.removeEventListener("touchmove",fe),document.removeEventListener("touchend",ie)}},[])}function _a(){var a=Object(n.useRef)(new Map);function i(b){return a.current.has(b)||a.current.set(b,n.createRef()),a.current.get(b)}function m(b){a.current.delete(b)}return[i,m]}function sa(a,i){var m=n.useRef(a),b=n.useState({}),O=Object(V.a)(b,2),y=O[1];function F(D){var w=typeof D=="function"?D(m.current):D;w!==m.current&&i(w,m.current),m.current=w,y({})}return[m.current,F]}var ua=function(i){var m=i.position,b=i.prefixCls,O=i.extra;if(!O)return null;var y,F=O;return m==="right"&&(y=F.right||!F.left&&F||null),m==="left"&&(y=F.left||null),y?n.createElement("div",{className:"".concat(b,"-extra-content")},y):null};function er(a,i){var m,b=n.useContext(Tt),O=b.prefixCls,y=b.tabs,F=a.className,D=a.style,w=a.id,x=a.animated,$=a.activeKey,Y=a.rtl,z=a.extra,se=a.editable,Q=a.locale,X=a.tabPosition,le=a.tabBarGutter,U=a.children,ee=a.onTabClick,re=a.onTabScroll,k=Object(n.useRef)(),ue=Object(n.useRef)(),_=Object(n.useRef)(),be=Object(n.useRef)(),te=_a(),me=Object(V.a)(te,2),fe=me[0],ie=me[1],H=X==="top"||X==="bottom",de=sa(0,function(ae,q){H&&re&&re({direction:ae>q?"left":"right"})}),ye=Object(V.a)(de,2),ge=ye[0],Fe=ye[1],Le=sa(0,function(ae,q){!H&&re&&re({direction:ae>q?"top":"bottom"})}),Ee=Object(V.a)(Le,2),Oe=Ee[0],Me=Ee[1],Ke=Object(n.useState)(0),Pe=Object(V.a)(Ke,2),je=Pe[0],$e=Pe[1],_e=Object(n.useState)(0),Ve=Object(V.a)(_e,2),Je=Ve[0],Qe=Ve[1],xe=Object(n.useState)(0),Sn=Object(V.a)(xe,2),an=Sn[0],Ze=Sn[1],on=Object(n.useState)(0),bn=Object(V.a)(on,2),En=bn[0],Ne=bn[1],He=Object(n.useState)(null),en=Object(V.a)(He,2),ke=en[0],Ln=en[1],zn=Object(n.useState)(null),xn=Object(V.a)(zn,2),rn=xn[0],jn=xn[1],ln=Object(n.useState)(0),Pn=Object(V.a)(ln,2),nn=Pn[0],sn=Pn[1],An=Object(n.useState)(0),mn=Object(V.a)(An,2),qe=mn[0],Ge=mn[1],Yn=Dn(new Map),Hn=Object(V.a)(Yn,2),tt=Hn[0],Cn=Hn[1],gn=ct(y,tt,je),Gn="".concat(O,"-nav-operations-hidden"),On=0,fn=0;H?Y?(On=0,fn=Math.max(0,je-ke)):(On=Math.min(0,ke-je),fn=0):(On=Math.min(0,rn-Je),fn=0);function Qn(ae){return ae<On?On:ae>fn?fn:ae}var In=Object(n.useRef)(),Xn=Object(n.useState)(),dn=Object(V.a)(Xn,2),Nn=dn[0],he=dn[1];function De(){he(Date.now())}function we(){window.clearTimeout(In.current)}qa(k,function(ae,q){function Ce(ze,un){ze(function(Jn){var qn=Qn(Jn+un);return qn})}if(H){if(ke>=je)return!1;Ce(Fe,ae)}else{if(rn>=Je)return!1;Ce(Me,q)}return we(),De(),!0}),Object(n.useEffect)(function(){return we(),Nn&&(In.current=window.setTimeout(function(){he(0)},100)),we},[Nn]);function tn(){var ae=arguments.length>0&&arguments[0]!==void 0?arguments[0]:$,q=gn.get(ae)||{width:0,height:0,left:0,right:0,top:0};if(H){var Ce=ge;Y?q.right<ge?Ce=q.right:q.right+q.width>ge+ke&&(Ce=q.right+q.width-ke):q.left<-ge?Ce=-q.left:q.left+q.width>-ge+ke&&(Ce=-(q.left+q.width-ke)),Me(0),Fe(Qn(Ce))}else{var ze=Oe;q.top<-Oe?ze=-q.top:q.top+q.height>-Oe+rn&&(ze=-(q.top+q.height-rn)),Fe(0),Me(Qn(ze))}}var Zn=P(gn,{width:ke,height:rn,left:ge,top:Oe},{width:an,height:En},{width:nn,height:qe},Object(ve.a)(Object(ve.a)({},a),{},{tabs:y})),gt=Object(V.a)(Zn,2),wt=gt[0],Wt=gt[1],Lt=y.map(function(ae){var q=ae.key;return n.createElement(Vn,{id:w,prefixCls:O,key:q,rtl:Y,tab:ae,closable:ae.closable,editable:se,active:q===$,tabPosition:X,tabBarGutter:le,renderWrapper:U,removeAriaLabel:Q==null?void 0:Q.removeAriaLabel,ref:fe(q),onClick:function(ze){ee(q,ze)},onRemove:function(){ie(q)},onFocus:function(){tn(q),De(),Y||(k.current.scrollLeft=0),k.current.scrollTop=0}})}),at=wn(function(){var ae,q,Ce,ze,un,Jn,qn,$t,Vt,or=((ae=k.current)===null||ae===void 0?void 0:ae.offsetWidth)||0,lr=((q=k.current)===null||q===void 0?void 0:q.offsetHeight)||0,ma=((Ce=be.current)===null||Ce===void 0?void 0:Ce.offsetWidth)||0,fa=((ze=be.current)===null||ze===void 0?void 0:ze.offsetHeight)||0,dr=((un=_.current)===null||un===void 0?void 0:un.offsetWidth)||0,cr=((Jn=_.current)===null||Jn===void 0?void 0:Jn.offsetHeight)||0;Ln(or),jn(lr),sn(ma),Ge(fa);var pa=(((qn=ue.current)===null||qn===void 0?void 0:qn.offsetWidth)||0)-ma,ha=((($t=ue.current)===null||$t===void 0?void 0:$t.offsetHeight)||0)-fa;$e(pa),Qe(ha);var va=(Vt=_.current)===null||Vt===void 0?void 0:Vt.className.includes(Gn);Ze(pa-(va?0:dr)),Ne(ha-(va?0:cr)),Cn(function(){var ga=new Map;return y.forEach(function(mr){var ya=mr.key,dt=fe(ya).current;dt&&ga.set(ya,{width:dt.offsetWidth,height:dt.offsetHeight,left:dt.offsetLeft,top:dt.offsetTop})}),ga})}),yt=y.slice(0,wt),st=y.slice(Wt+1),bt=[].concat(Object(hn.a)(yt),Object(hn.a)(st)),xt=Object(n.useState)(),Et=Object(V.a)(xt,2),Ct=Et[0],rt=Et[1],Bn=gn.get($),Ot=Object(n.useRef)();function Ft(){Xe.a.cancel(Ot.current)}Object(n.useEffect)(function(){var ae={};return Bn&&(H?(Y?ae.right=Bn.right:ae.left=Bn.left,ae.width=Bn.width):(ae.top=Bn.top,ae.height=Bn.height)),Ft(),Ot.current=Object(Xe.a)(function(){rt(ae)}),Ft},[Bn,H,Y]),Object(n.useEffect)(function(){tn()},[$,Bn,gn,H]),Object(n.useEffect)(function(){at()},[Y,le,$,y.map(function(ae){return ae.key}).join("_")]);var ut=!!bt.length,kn="".concat(O,"-nav-wrap"),ot,lt,Dt,Rt;return H?Y?(lt=ge>0,ot=ge+ke<je):(ot=ge<0,lt=-ge+ke<je):(Dt=Oe<0,Rt=-Oe+rn<Je),n.createElement("div",{ref:i,role:"tablist",className:Ie()("".concat(O,"-nav"),F),style:D,onKeyDown:function(){De()}},n.createElement(ua,{position:"left",extra:z,prefixCls:O}),n.createElement($n.default,{onResize:at},n.createElement("div",{className:Ie()(kn,(m={},Object(ce.a)(m,"".concat(kn,"-ping-left"),ot),Object(ce.a)(m,"".concat(kn,"-ping-right"),lt),Object(ce.a)(m,"".concat(kn,"-ping-top"),Dt),Object(ce.a)(m,"".concat(kn,"-ping-bottom"),Rt),m)),ref:k},n.createElement($n.default,{onResize:at},n.createElement("div",{ref:ue,className:"".concat(O,"-nav-list"),style:{transform:"translate(".concat(ge,"px, ").concat(Oe,"px)"),transition:Nn?"none":void 0}},Lt,n.createElement(aa,{ref:be,prefixCls:O,locale:Q,editable:se,style:{visibility:ut?"hidden":null}}),n.createElement("div",{className:Ie()("".concat(O,"-ink-bar"),Object(ce.a)({},"".concat(O,"-ink-bar-animated"),x.inkBar)),style:Ct}))))),n.createElement(Za,Object(L.a)({},a,{ref:_,prefixCls:O,tabs:bt,className:!ut&&Gn})),n.createElement(ua,{position:"right",extra:z,prefixCls:O}))}var oa=n.forwardRef(er);function nr(a){var i=a.id,m=a.activeKey,b=a.animated,O=a.tabPosition,y=a.rtl,F=a.destroyInactiveTabPane,D=n.useContext(Tt),w=D.prefixCls,x=D.tabs,$=b.tabPane,Y=x.findIndex(function(z){return z.key===m});return n.createElement("div",{className:Ie()("".concat(w,"-content-holder"))},n.createElement("div",{className:Ie()("".concat(w,"-content"),"".concat(w,"-content-").concat(O),Object(ce.a)({},"".concat(w,"-content-animated"),$)),style:Y&&$?Object(ce.a)({},y?"marginRight":"marginLeft","-".concat(Y,"00%")):null},x.map(function(z){return n.cloneElement(z.node,{key:z.key,prefixCls:w,tabKey:z.key,id:i,animated:$,active:z.key===m,destroyInactiveTabPane:F})})))}function la(a){var i=a.prefixCls,m=a.forceRender,b=a.className,O=a.style,y=a.id,F=a.active,D=a.animated,w=a.destroyInactiveTabPane,x=a.tabKey,$=a.children,Y=n.useState(m),z=Object(V.a)(Y,2),se=z[0],Q=z[1];n.useEffect(function(){F?Q(!0):w&&Q(!1)},[F,w]);var X={};return F||(D?(X.visibility="hidden",X.height=0,X.overflowY="hidden"):X.display="none"),n.createElement("div",{id:y&&"".concat(y,"-panel-").concat(x),role:"tabpanel",tabIndex:F?0:-1,"aria-labelledby":y&&"".concat(y,"-tab-").concat(x),"aria-hidden":!F,style:Object(ve.a)(Object(ve.a)({},X),O),className:Ie()("".concat(i,"-tabpane"),F&&"".concat(i,"-tabpane-active"),b)},(F||se||m)&&$)}var da=0;function tr(a){return Object(Kn.a)(a).map(function(i){if(n.isValidElement(i)){var m=i.key!==void 0?String(i.key):void 0;return Object(ve.a)(Object(ve.a)({key:m},i.props),{},{node:i})}return null}).filter(function(i){return i})}function ar(a,i){var m,b=a.id,O=a.prefixCls,y=O===void 0?"rc-tabs":O,F=a.className,D=a.children,w=a.direction,x=a.activeKey,$=a.defaultActiveKey,Y=a.editable,z=a.animated,se=z===void 0?{inkBar:!0,tabPane:!1}:z,Q=a.tabPosition,X=Q===void 0?"top":Q,le=a.tabBarGutter,U=a.tabBarStyle,ee=a.tabBarExtraContent,re=a.locale,k=a.moreIcon,ue=a.moreTransitionName,_=a.destroyInactiveTabPane,be=a.renderTabBar,te=a.onChange,me=a.onTabClick,fe=a.onTabScroll,ie=Object(Ae.a)(a,["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"]),H=tr(D),de=w==="rtl",ye;se===!1?ye={inkBar:!1,tabPane:!1}:se===!0?ye={inkBar:!0,tabPane:!0}:ye=Object(ve.a)({inkBar:!0,tabPane:!1},Object(Be.a)(se)==="object"?se:{});var ge=Object(n.useState)(!1),Fe=Object(V.a)(ge,2),Le=Fe[0],Ee=Fe[1];Object(n.useEffect)(function(){Ee(Object(Mn.a)())},[]);var Oe=Object(Fn.a)(function(){var Ne;return(Ne=H[0])===null||Ne===void 0?void 0:Ne.key},{value:x,defaultValue:$}),Me=Object(V.a)(Oe,2),Ke=Me[0],Pe=Me[1],je=Object(n.useState)(function(){return H.findIndex(function(Ne){return Ne.key===Ke})}),$e=Object(V.a)(je,2),_e=$e[0],Ve=$e[1];Object(n.useEffect)(function(){var Ne=H.findIndex(function(en){return en.key===Ke});if(Ne===-1){var He;Ne=Math.max(0,Math.min(_e,H.length-1)),Pe((He=H[Ne])===null||He===void 0?void 0:He.key)}Ve(Ne)},[H.map(function(Ne){return Ne.key}).join("_"),Ke,_e]);var Je=Object(Fn.a)(null,{value:b}),Qe=Object(V.a)(Je,2),xe=Qe[0],Sn=Qe[1],an=X;Le&&!["left","right"].includes(X)&&(an="top"),Object(n.useEffect)(function(){b||(Sn("rc-tabs-".concat(da)),da+=1)},[]);function Ze(Ne,He){me==null||me(Ne,He),Pe(Ne),te==null||te(Ne)}var on={id:xe,activeKey:Ke,animated:ye,tabPosition:an,rtl:de,mobile:Le},bn,En=Object(ve.a)(Object(ve.a)({},on),{},{editable:Y,locale:re,moreIcon:k,moreTransitionName:ue,tabBarGutter:le,onTabClick:Ze,onTabScroll:fe,extra:ee,style:U,panes:D});return be?bn=be(En,oa):bn=n.createElement(oa,En),n.createElement(Tt.Provider,{value:{tabs:H,prefixCls:y}},n.createElement("div",Object(L.a)({ref:i,id:b,className:Ie()(y,"".concat(y,"-").concat(an),(m={},Object(ce.a)(m,"".concat(y,"-mobile"),Le),Object(ce.a)(m,"".concat(y,"-editable"),Y),Object(ce.a)(m,"".concat(y,"-rtl"),de),m),F)},ie),bn,n.createElement(nr,Object(L.a)({destroyInactiveTabPane:_},on,{animated:ye}))))}var ca=n.forwardRef(ar);ca.TabPane=la;var rr=ca,ir=rr,Kt=e("MZF8"),vn=e("dEAq"),sr=e("ZpkN"),br=e("TIsu");function Mt(a,i){var m,b=(m=a.match(/\.(\w+)$/))===null||m===void 0?void 0:m[1];return b||(b=i.tsx?"tsx":"jsx"),b}var ur=a=>{var i,m,b,O=Object(n.useRef)(),y=Object(n.useContext)(vn.context),F=y.locale,D=Object(vn.useLocaleProps)(F,a),w=Object(vn.useDemoUrl)(D.identifier),x=D.demoUrl||w,$=(Kt.a===null||Kt.a===void 0?void 0:Kt.a.location.hash)==="#".concat(D.identifier),Y=Object.keys(D.sources).length===1,z=Object(vn.useCodeSandbox)((i=D.hideActions)!==null&&i!==void 0&&i.includes("CSB")?null:D),se=Object(vn.useRiddle)((m=D.hideActions)!==null&&m!==void 0&&m.includes("RIDDLE")?null:D),Q=Object(vn.useMotions)(D.motions||[],O.current),X=Object(J.default)(Q,2),le=X[0],U=X[1],ee=Object(vn.useCopy)(),re=Object(J.default)(ee,2),k=re[0],ue=re[1],_=Object(n.useState)("_"),be=Object(J.default)(_,2),te=be[0],me=be[1],fe=Object(n.useState)(Mt(te,D.sources[te])),ie=Object(J.default)(fe,2),H=ie[0],de=ie[1],ye=Object(n.useState)(Boolean(D.defaultShowCode)),ge=Object(J.default)(ye,2),Fe=ge[0],Le=ge[1],Ee=Object(n.useState)(Math.random()),Oe=Object(J.default)(Ee,2),Me=Oe[0],Ke=Oe[1],Pe=D.sources[te][H]||D.sources[te].content,je=Object(vn.useTSPlaygroundUrl)(F,Pe),$e=Object(n.useRef)(),_e=Object(vn.usePrefersColor)(),Ve=Object(J.default)(_e,1),Je=Ve[0];Object(n.useEffect)(()=>{Ke(Math.random())},[Je]);function Qe(xe){me(xe),de(Mt(xe,D.sources[xe]))}return E.a.createElement("div",{style:D.style,className:[D.className,"__dumi-default-previewer",$?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:D.identifier,"data-debug":D.debug||void 0,"data-iframe":D.iframe||void 0},D.iframe&&E.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),E.a.createElement("div",{ref:O,className:"__dumi-default-previewer-demo",style:{transform:D.transform?"translate(0, 0)":void 0,padding:D.compact||D.iframe&&D.compact!==!1?"0":void 0,background:D.background}},D.iframe?E.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(D.iframe).replace(/(\d)$/,"$1px")},key:Me,src:x,ref:$e}):D.children),E.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":D.title},D.title&&E.a.createElement(vn.AnchorLink,{to:"#".concat(D.identifier)},D.title),D.description&&E.a.createElement("div",{dangerouslySetInnerHTML:{__html:D.description}})),E.a.createElement("div",{className:"__dumi-default-previewer-actions"},z&&E.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:z}),se&&E.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:se}),D.motions&&E.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:U,onClick:()=>le()}),D.iframe&&E.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:()=>Ke(Math.random())}),!((b=D.hideActions)!==null&&b!==void 0&&b.includes("EXTERNAL"))&&E.a.createElement(vn.Link,{target:"_blank",to:x},E.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),E.a.createElement("span",null),E.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":ue,onClick:()=>k(Pe)}),H==="tsx"&&Fe&&E.a.createElement(vn.Link,{target:"_blank",to:je},E.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),E.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(Fe?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:()=>Le(!Fe)})),Fe&&E.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!Y&&E.a.createElement(ir,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xB7\xB7\xB7",defaultActiveKey:te,onChange:Qe},Object.keys(D.sources).map(xe=>E.a.createElement(la,{tab:xe==="_"?"index.".concat(Mt(xe,D.sources[xe])):xe,key:xe}))),E.a.createElement("div",{className:"__dumi-default-previewer-source"},E.a.createElement(sr.a,{code:Pe,lang:H,showCopy:!1}))))},Er=yn.default=ur},"80pN":function(Tn,yn,e){"use strict";(function(J){/** @license React v16.14.0
* react-dom-test-utils.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var n=e("MgzW"),E=e("q1tI"),L=e("i8i4"),ce=e("QCnb");function V(f){for(var B="https://reactjs.org/docs/error-decoder.html?invariant="+f,M=1;M<arguments.length;M++)B+="&args[]="+encodeURIComponent(arguments[M]);return"Minified React error #"+f+"; visit "+B+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Be=E.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;Be.hasOwnProperty("ReactCurrentDispatcher")||(Be.ReactCurrentDispatcher={current:null}),Be.hasOwnProperty("ReactCurrentBatchConfig")||(Be.ReactCurrentBatchConfig={suspense:null});function Ae(f){var B=f,M=f;if(f.alternate)for(;B.return;)B=B.return;else{f=B;do B=f,(B.effectTag&1026)!=0&&(M=B.return),f=B.return;while(f)}return B.tag===3?M:null}function ve(f){if(Ae(f)!==f)throw Error(V(188))}function pn(f){var B=f.alternate;if(!B){if(B=Ae(f),B===null)throw Error(V(188));return B!==f?null:f}for(var M=f,pe=B;;){var ne=M.return;if(ne===null)break;var Se=ne.alternate;if(Se===null){if(pe=ne.return,pe!==null){M=pe;continue}break}if(ne.child===Se.child){for(Se=ne.child;Se;){if(Se===M)return ve(ne),f;if(Se===pe)return ve(ne),B;Se=Se.sibling}throw Error(V(188))}if(M.return!==pe.return)M=ne,pe=Se;else{for(var Ue=!1,Ye=ne.child;Ye;){if(Ye===M){Ue=!0,M=ne,pe=Se;break}if(Ye===pe){Ue=!0,pe=ne,M=Se;break}Ye=Ye.sibling}if(!Ue){for(Ye=Se.child;Ye;){if(Ye===M){Ue=!0,M=Se,pe=ne;break}if(Ye===pe){Ue=!0,pe=Se,M=ne;break}Ye=Ye.sibling}if(!Ue)throw Error(V(189))}}if(M.alternate!==pe)throw Error(V(190))}if(M.tag!==3)throw Error(V(188));return M.stateNode.current===M?f:B}function Ie(){return!0}function Kn(){return!1}function Mn(f,B,M,pe){this.dispatchConfig=f,this._targetInst=B,this.nativeEvent=M,f=this.constructor.Interface;for(var ne in f)f.hasOwnProperty(ne)&&((B=f[ne])?this[ne]=B(M):ne==="target"?this.target=pe:this[ne]=M[ne]);return this.isDefaultPrevented=(M.defaultPrevented!=null?M.defaultPrevented:M.returnValue===!1)?Ie:Kn,this.isPropagationStopped=Kn,this}n(Mn.prototype,{preventDefault:function(){this.defaultPrevented=!0;var f=this.nativeEvent;f&&(f.preventDefault?f.preventDefault():typeof f.returnValue!="unknown"&&(f.returnValue=!1),this.isDefaultPrevented=Ie)},stopPropagation:function(){var f=this.nativeEvent;f&&(f.stopPropagation?f.stopPropagation():typeof f.cancelBubble!="unknown"&&(f.cancelBubble=!0),this.isPropagationStopped=Ie)},persist:function(){this.isPersistent=Ie},isPersistent:Kn,destructor:function(){var f=this.constructor.Interface,B;for(B in f)this[B]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=Kn,this._dispatchInstances=this._dispatchListeners=null}}),Mn.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(f){return f.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null},Mn.extend=function(f){function B(){}function M(){return pe.apply(this,arguments)}var pe=this;B.prototype=pe.prototype;var ne=new B;return n(ne,M.prototype),M.prototype=ne,M.prototype.constructor=M,M.Interface=n({},pe.Interface,f),M.extend=pe.extend,Xe(M),M},Xe(Mn);function Fn(f,B,M,pe){if(this.eventPool.length){var ne=this.eventPool.pop();return this.call(ne,f,B,M,pe),ne}return new this(f,B,M,pe)}function hn(f){if(!(f instanceof this))throw Error(V(279));f.destructor(),10>this.eventPool.length&&this.eventPool.push(f)}function Xe(f){f.eventPool=[],f.getPooled=Fn,f.release=hn}var $n=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined");function wn(f,B){var M={};return M[f.toLowerCase()]=B.toLowerCase(),M["Webkit"+f]="webkit"+B,M["Moz"+f]="moz"+B,M}var Dn={animationend:wn("Animation","AnimationEnd"),animationiteration:wn("Animation","AnimationIteration"),animationstart:wn("Animation","AnimationStart"),transitionend:wn("Transition","TransitionEnd")},We={},_n={};$n&&(_n=document.createElement("div").style,"AnimationEvent"in window||(delete Dn.animationend.animation,delete Dn.animationiteration.animation,delete Dn.animationstart.animation),"TransitionEvent"in window||delete Dn.transitionend.transition);function Vn(f){if(We[f])return We[f];if(!Dn[f])return f;var B=Dn[f],M;for(M in B)if(B.hasOwnProperty(M)&&M in _n)return We[f]=B[M];return f}var et=Vn("animationend"),ct=Vn("animationiteration"),j=Vn("animationstart"),P=Vn("transitionend"),S=null;function d(f){if(S===null)try{var B=("require"+Math.random()).slice(0,7);S=(J&&J[B])("timers").setImmediate}catch(M){S=function(pe){var ne=new MessageChannel;ne.port1.onmessage=pe,ne.port2.postMessage(void 0)}}return S(f)}var u=L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,p=u[11],g=u[12],C=L.unstable_batchedUpdates,r=Be.IsSomeRendererActing,o=typeof ce.unstable_flushAllWithoutAsserting=="function",s=ce.unstable_flushAllWithoutAsserting||function(){for(var f=!1;p();)f=!0;return f};function K(f){try{s(),d(function(){s()?K(f):f()})}catch(B){f(B)}}var I=0,R=!1,c=L.findDOMNode,N=L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,h=N[0],t=N[4],v=N[5],l=N[6],A=N[7],T=N[8],W=N[9],Z=N[10];function G(){}function oe(f,B){if(!f)return[];if(f=pn(f),!f)return[];for(var M=f,pe=[];;){if(M.tag===5||M.tag===6||M.tag===1||M.tag===0){var ne=M.stateNode;B(ne)&&pe.push(ne)}if(M.child)M.child.return=M,M=M.child;else{if(M===f)return pe;for(;!M.sibling;){if(!M.return||M.return===f)return pe;M=M.return}M.sibling.return=M.return,M=M.sibling}}}function Re(f,B){if(f&&!f._reactInternalFiber){var M=""+f;throw f=Array.isArray(f)?"an array":f&&f.nodeType===1&&f.tagName?"a DOM node":M==="[object Object]"?"object with keys {"+Object.keys(f).join(", ")+"}":M,Error(V(286,B,f))}}var Te={renderIntoDocument:function(f){var B=document.createElement("div");return L.render(f,B)},isElement:function(f){return E.isValidElement(f)},isElementOfType:function(f,B){return E.isValidElement(f)&&f.type===B},isDOMComponent:function(f){return!(!f||f.nodeType!==1||!f.tagName)},isDOMComponentElement:function(f){return!!(f&&E.isValidElement(f)&&f.tagName)},isCompositeComponent:function(f){return Te.isDOMComponent(f)?!1:f!=null&&typeof f.render=="function"&&typeof f.setState=="function"},isCompositeComponentWithType:function(f,B){return Te.isCompositeComponent(f)?f._reactInternalFiber.type===B:!1},findAllInRenderedTree:function(f,B){return Re(f,"findAllInRenderedTree"),f?oe(f._reactInternalFiber,B):[]},scryRenderedDOMComponentsWithClass:function(f,B){return Re(f,"scryRenderedDOMComponentsWithClass"),Te.findAllInRenderedTree(f,function(M){if(Te.isDOMComponent(M)){var pe=M.className;typeof pe!="string"&&(pe=M.getAttribute("class")||"");var ne=pe.split(/\s+/);if(!Array.isArray(B)){if(B===void 0)throw Error(V(11));B=B.split(/\s+/)}return B.every(function(Se){return ne.indexOf(Se)!==-1})}return!1})},findRenderedDOMComponentWithClass:function(f,B){if(Re(f,"findRenderedDOMComponentWithClass"),f=Te.scryRenderedDOMComponentsWithClass(f,B),f.length!==1)throw Error("Did not find exactly one match (found: "+f.length+") for class:"+B);return f[0]},scryRenderedDOMComponentsWithTag:function(f,B){return Re(f,"scryRenderedDOMComponentsWithTag"),Te.findAllInRenderedTree(f,function(M){return Te.isDOMComponent(M)&&M.tagName.toUpperCase()===B.toUpperCase()})},findRenderedDOMComponentWithTag:function(f,B){if(Re(f,"findRenderedDOMComponentWithTag"),f=Te.scryRenderedDOMComponentsWithTag(f,B),f.length!==1)throw Error("Did not find exactly one match (found: "+f.length+") for tag:"+B);return f[0]},scryRenderedComponentsWithType:function(f,B){return Re(f,"scryRenderedComponentsWithType"),Te.findAllInRenderedTree(f,function(M){return Te.isCompositeComponentWithType(M,B)})},findRenderedComponentWithType:function(f,B){if(Re(f,"findRenderedComponentWithType"),f=Te.scryRenderedComponentsWithType(f,B),f.length!==1)throw Error("Did not find exactly one match (found: "+f.length+") for componentType:"+B);return f[0]},mockComponent:function(f,B){return B=B||f.mockTagName||"div",f.prototype.render.mockImplementation(function(){return E.createElement(B,null,this.props.children)}),this},nativeTouchData:function(f,B){return{touches:[{pageX:f,pageY:B}]}},Simulate:null,SimulateNative:{},act:function(f){function B(){I--,r.current=M,g.current=pe}R===!1&&(R=!0,console.error("act(...) is not supported in production builds of React, and might not behave as expected.")),I++;var M=r.current,pe=g.current;r.current=!0,g.current=!0;try{var ne=C(f)}catch(Se){throw B(),Se}if(ne!==null&&typeof ne=="object"&&typeof ne.then=="function")return{then:function(Se,Ue){ne.then(function(){1<I||o===!0&&M===!0?(B(),Se()):K(function(Ye){B(),Ye?Ue(Ye):Se()})},function(Ye){B(),Ue(Ye)})}};try{I!==1||o!==!1&&M!==!1||s(),B()}catch(Se){throw B(),Se}return{then:function(Se){Se()}}}};function cn(f){return function(B,M){if(E.isValidElement(B))throw Error(V(228));if(Te.isCompositeComponent(B))throw Error(V(229));var pe=t[f],ne=new G;ne.target=B,ne.type=f.toLowerCase();var Se=h(B),Ue=new Mn(pe,Se,ne,B);Ue.persist(),n(Ue,M),pe.phasedRegistrationNames?v(Ue):l(Ue),L.unstable_batchedUpdates(function(){A(B),Z(Ue)}),T()}}Te.Simulate={};for(var Rn in t)Te.Simulate[Rn]=cn(Rn);function Wn(f,B){return function(M,pe){var ne=new G(f);n(ne,pe),Te.isDOMComponent(M)?(M=c(M),ne.target=M,W(B,1,document,ne)):M.tagName&&(ne.target=M,W(B,1,document,ne))}}[["abort","abort"],[et,"animationEnd"],[ct,"animationIteration"],[j,"animationStart"],["blur","blur"],["canplaythrough","canPlayThrough"],["canplay","canPlay"],["cancel","cancel"],["change","change"],["click","click"],["close","close"],["compositionend","compositionEnd"],["compositionstart","compositionStart"],["compositionupdate","compositionUpdate"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["dragstart","dragStart"],["drag","drag"],["drop","drop"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],["ended","ended"],["error","error"],["focus","focus"],["input","input"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["loadstart","loadStart"],["loadstart","loadStart"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["mousedown","mouseDown"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["playing","playing"],["progress","progress"],["ratechange","rateChange"],["scroll","scroll"],["seeked","seeked"],["seeking","seeking"],["selectionchange","selectionChange"],["stalled","stalled"],["suspend","suspend"],["textInput","textInput"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchmove","touchMove"],["touchstart","touchStart"],[P,"transitionEnd"],["volumechange","volumeChange"],["waiting","waiting"],["wheel","wheel"]].forEach(function(f){var B=f[1];Te.SimulateNative[B]=Wn(B,f[0])}),J.exports=Te.default||Te}).call(this,e("hOG+")(Tn))},JjdP:function(Tn,yn,e){"use strict";e.r(yn);var J=e("9og8"),n=e("WmNS"),E=e.n(n),L=e("LtsZ"),ce=`import React, { useRef } from 'react';
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

export default Demo;`,pn=`export const basic = {
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

export default Root;`,Kn=`import React, { useState, useEffect } from 'react';
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

export default Demo;`,Mn=`{
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

export default SearchInput;`,hn=`import React from 'react';
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

export default Demo;`,Xe=`import { monaco } from 'react-monaco-editor'

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

export default Demo;`,Vn=`import React, { useState, useRef } from 'react';
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
}`,ct=yn.default={"guide-card":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(E.a.mark(function S(){return E.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(25)]).then(e.bind(null,"oLxE"));case 2:return u.abrupt("return",u.sent.default);case 3:case"end":return u.stop()}},S)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:ce}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"card-render":{version:"0.1.2"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"0.x"}},identifier:"guide-card"}},"chart-render-demo":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(E.a.mark(function S(){var d,u,p,g,C,r,o;return E.a.wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return r=function(R,c){if(!c&&R&&R.__esModule)return R;if(R===null||typeof R!="object"&&typeof R!="function")return{default:R};var N=C(c);if(N&&N.has(R))return N.get(R);var h={},t=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in R)if(v!=="default"&&Object.prototype.hasOwnProperty.call(R,v)){var l=t?Object.getOwnPropertyDescriptor(R,v):null;l&&(l.get||l.set)?Object.defineProperty(h,v,l):h[v]=R[v]}return h.default=R,N&&N.set(R,h),h},C=function(R){if(typeof WeakMap!="function")return null;var c=new WeakMap,N=new WeakMap;return(C=function(t){return t?N:c})(R)},d=e("K+nK"),K.t0=d,K.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return K.t1=K.sent,u=(0,K.t0)(K.t1),K.t2=r,K.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return K.t3=K.sent,p=(0,K.t2)(K.t3),K.next=15,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 15:return g=K.sent,o=function(){var R=(0,p.useState)("Line"),c=(0,u.default)(R,2),N=c[0],h=c[1],t={Line:g.Line,Column:g.Column,PivotTable:g.PivotTable}[N];return p.default.createElement("div",null,p.default.createElement("div",{style:{marginBottom:10}},p.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return h("Line")}},"\u6298\u7EBF\u56FE"),p.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return h("Column")}},"\u67F1\u72B6\u56FE"),p.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return h("PivotTable")}},"\u4EA4\u53C9\u8868")),p.default.createElement(t,{meta:[{id:"date",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF",isDim:!1},{id:"uv",name:"\u8BBF\u5BA2\u6570",isDim:!1}],data:[{date:"20200101",pv:100,uv:50},{date:"20200102",pv:120,uv:60},{date:"20200103",pv:140,uv:70},{date:"20200104",pv:160,uv:80}]}))},K.abrupt("return",o);case 18:case"end":return K.stop()}},S)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"chart-render-demo"}},"column-demo":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(E.a.mark(function S(){var d,u,p,g;return E.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,u=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=r.sent,g=function(){return u.default.createElement(p.Column,{meta:[{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{pv:50,uv:20}]})},r.abrupt("return",g);case 11:case"end":return r.stop()}},S)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[{ pv: 50, uv: 20 }]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo"}},"column-demo-1":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(E.a.mark(function S(){var d,u,p,g;return E.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,u=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=r.sent,g=function(){return u.default.createElement(p.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},r.abrupt("return",g);case 11:case"end":return r.stop()}},S)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-1"}},"column-demo-2":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(E.a.mark(function S(){var d,u,p,g;return E.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,u=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=r.sent,g=function(){return u.default.createElement(p.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},r.abrupt("return",g);case 11:case"end":return r.stop()}},S)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-2"}},"column-demo-3":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(E.a.mark(function S(){var d,u,p,g;return E.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,u=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=r.sent,g=function(){return u.default.createElement(p.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},r.abrupt("return",g);case 11:case"end":return r.stop()}},S)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-3"}},"column-demo-4":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(E.a.mark(function S(){var d,u,p,g;return E.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,u=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=r.sent,g=function(){return u.default.createElement(p.Column,{inverted:!0,label:{position:"middle",layout:[{type:"interval-adjust-position"},{type:"interval-hide-overlap"},{type:"adjust-color"}]},meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},r.abrupt("return",g);case 11:case"end":return r.stop()}},S)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-4"}},"line-demo":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(E.a.mark(function S(){var d,u,p,g;return E.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,u=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=r.sent,g=function(){return u.default.createElement(p.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},r.abrupt("return",g);case 11:case"end":return r.stop()}},S)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo"}},"line-demo-1":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(E.a.mark(function S(){var d,u,p,g;return E.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,u=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=r.sent,g=function(){return u.default.createElement(p.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},r.abrupt("return",g);case 11:case"end":return r.stop()}},S)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-1"}},"line-demo-2":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(E.a.mark(function S(){var d,u,p,g;return E.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,u=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=r.sent,g=function(){return u.default.createElement(p.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"},{id:"pv",name:"\u8BBF\u95EE\u91CF"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20,pv:120},{ds:"2020-12-31",page:"\u9996\u9875",uv:120,pv:1120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21,pv:121},{ds:"2021-01-01",page:"\u9996\u9875",uv:121,pv:1121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15,pv:115},{ds:"2021-01-02",page:"\u9996\u9875",uv:115,pv:1115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40,pv:140},{ds:"2021-01-03",page:"\u9996\u9875",uv:140,pv:1140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31,pv:131},{ds:"2021-01-04",page:"\u9996\u9875",uv:131,pv:1131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32,pv:132},{ds:"2021-01-05",page:"\u9996\u9875",uv:132,pv:1132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30,pv:130},{ds:"2021-01-06",page:"\u9996\u9875",uv:130,pv:1130}]})},r.abrupt("return",g);case 11:case"end":return r.stop()}},S)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-2"}},"line-demo-3":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(E.a.mark(function S(){var d,u,p,g;return E.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,u=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=r.sent,g=function(){return u.default.createElement(p.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},r.abrupt("return",g);case 11:case"end":return r.stop()}},S)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-3"}},"line-demo-4":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(E.a.mark(function S(){var d,u,p,g;return E.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,u=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=r.sent,g=function(){return u.default.createElement(p.Line,{withArea:!0,isStack:!0,isPercent:!0,meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},r.abrupt("return",g);case 11:case"end":return r.stop()}},S)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-4"}},"pivot-table-demo":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(E.a.mark(function S(){var d,u,p,g;return E.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,u=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=r.sent,g=function(){return u.default.createElement(p.PivotTable,{style:{maxHeight:400,overflow:"auto"},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},r.abrupt("return",g);case 11:case"end":return r.stop()}},S)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo"}},"pivot-table-demo-1":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(E.a.mark(function S(){var d,u,p,g;return E.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,u=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=r.sent,g=function(){return u.default.createElement(p.PivotTable,{style:{maxHeight:400,overflow:"auto"},cellRender:function(K,I,R){return u.default.createElement("div",null,u.default.createElement("p",null,"\u53C2\u6570\u8868\uFF1A"),u.default.createElement("p",{style:{color:["red","orange","yellow","green","blue"][Object.keys(I).length]}},K),u.default.createElement("p",null,JSON.stringify(I)),u.default.createElement("p",null,JSON.stringify(R)))},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},r.abrupt("return",g);case 11:case"end":return r.stop()}},S)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-1"}},"pivot-table-demo-2":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(E.a.mark(function S(){var d,u,p,g,C,r,o;return E.a.wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return r=function(R,c){if(!c&&R&&R.__esModule)return R;if(R===null||typeof R!="object"&&typeof R!="function")return{default:R};var N=C(c);if(N&&N.has(R))return N.get(R);var h={},t=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in R)if(v!=="default"&&Object.prototype.hasOwnProperty.call(R,v)){var l=t?Object.getOwnPropertyDescriptor(R,v):null;l&&(l.get||l.set)?Object.defineProperty(h,v,l):h[v]=R[v]}return h.default=R,N&&N.set(R,h),h},C=function(R){if(typeof WeakMap!="function")return null;var c=new WeakMap,N=new WeakMap;return(C=function(t){return t?N:c})(R)},d=e("K+nK"),K.t0=d,K.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return K.t1=K.sent,u=(0,K.t0)(K.t1),K.t2=r,K.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return K.t3=K.sent,p=(0,K.t2)(K.t3),K.next=15,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 15:return g=K.sent,o=function(){var R=(0,p.useState)(!1),c=(0,u.default)(R,2),N=c[0],h=c[1];return p.default.createElement(p.default.Fragment,null,p.default.createElement("label",null,"\u53EF\u5C55\u5F00/\u6536\u7F29\uFF1A",p.default.createElement("input",{type:"checkbox",value:N,onChange:function(){return h(!N)}})),p.default.createElement(g.PivotTable,{leftExpandable:N,showSubtotal:!1,meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]}))},K.abrupt("return",o);case 18:case"end":return K.stop()}},S)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-2"}},"form-render-demo":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(E.a.mark(function S(){var d,u,p,g,C,r,o,s,K,I,R,c,N,h;return E.a.wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return R=function(A,T){if(!T&&A&&A.__esModule)return A;if(A===null||typeof A!="object"&&typeof A!="function")return{default:A};var W=I(T);if(W&&W.has(A))return W.get(A);var Z={},G=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var oe in A)if(oe!=="default"&&Object.prototype.hasOwnProperty.call(A,oe)){var Re=G?Object.getOwnPropertyDescriptor(A,oe):null;Re&&(Re.get||Re.set)?Object.defineProperty(Z,oe,Re):Z[oe]=A[oe]}return Z.default=A,W&&W.set(A,Z),Z},I=function(A){if(typeof WeakMap!="function")return null;var T=new WeakMap,W=new WeakMap;return(I=function(G){return G?W:T})(A)},d=e("K+nK"),v.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return v.t0=d,v.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return v.t1=v.sent,u=(0,v.t0)(v.t1),v.t2=d,v.next=13,e.e(72).then(e.bind(null,"fWQN"));case 13:return v.t3=v.sent,p=(0,v.t2)(v.t3),v.t4=d,v.next=18,e.e(73).then(e.bind(null,"mtLc"));case 18:return v.t5=v.sent,g=(0,v.t4)(v.t5),v.t6=d,v.next=23,e.e(66).then(e.bind(null,"yKVA"));case 23:return v.t7=v.sent,C=(0,v.t6)(v.t7),v.t8=d,v.next=28,e.e(65).then(e.bind(null,"879j"));case 28:return v.t9=v.sent,r=(0,v.t8)(v.t9),v.t10=d,v.next=33,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 33:return v.t11=v.sent,o=(0,v.t10)(v.t11),v.next=37,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 37:return s=v.sent,v.t12=R,v.next=41,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 41:return v.t13=v.sent,K=(0,v.t12)(v.t13),c={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},N=function(l){(0,C.default)(T,l);var A=(0,r.default)(T);function T(){return(0,p.default)(this,T),A.apply(this,arguments)}return(0,g.default)(T,[{key:"render",value:function(){var Z=this.props.form;return o.default.createElement("div",null,o.default.createElement(K.default,{form:Z,schema:c}),o.default.createElement(u.default,{type:"primary",onClick:Z.submit},"\u63D0\u4EA4"))}}]),T}(o.default.Component),h=(0,K.connectForm)(N),v.abrupt("return",h);case 47:case"end":return v.stop()}},S)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default connectForm(Demo);`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo"}},"form-render-demo-1":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(E.a.mark(function S(){var d,u,p,g,C,r,o,s,K,I;return E.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return o=function(h,t){if(!t&&h&&h.__esModule)return h;if(h===null||typeof h!="object"&&typeof h!="function")return{default:h};var v=r(t);if(v&&v.has(h))return v.get(h);var l={},A=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var T in h)if(T!=="default"&&Object.prototype.hasOwnProperty.call(h,T)){var W=A?Object.getOwnPropertyDescriptor(h,T):null;W&&(W.get||W.set)?Object.defineProperty(l,T,W):l[T]=h[T]}return l.default=h,v&&v.set(h,l),l},r=function(h){if(typeof WeakMap!="function")return null;var t=new WeakMap,v=new WeakMap;return(r=function(A){return A?v:t})(h)},d=e("K+nK"),c.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return c.t0=d,c.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return c.t1=c.sent,u=(0,c.t0)(c.t1),c.t2=d,c.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return c.t3=c.sent,p=(0,c.t2)(c.t3),c.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 17:return g=c.sent,c.t4=o,c.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 21:return c.t5=c.sent,C=(0,c.t4)(c.t5),s={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},K=function(){var h=(0,C.useForm)();return p.default.createElement("div",null,p.default.createElement(C.default,{form:h,schema:s}),p.default.createElement(u.default,{type:"primary",onClick:h.submit},"\u63D0\u4EA4"))},I=K,c.abrupt("return",I);case 27:case"end":return c.stop()}},S)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo-1"}},"form-render-demo-2":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(E.a.mark(function S(){var d,u,p,g,C,r,o,s,K,I;return E.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return o=function(h,t){if(!t&&h&&h.__esModule)return h;if(h===null||typeof h!="object"&&typeof h!="function")return{default:h};var v=r(t);if(v&&v.has(h))return v.get(h);var l={},A=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var T in h)if(T!=="default"&&Object.prototype.hasOwnProperty.call(h,T)){var W=A?Object.getOwnPropertyDescriptor(h,T):null;W&&(W.get||W.set)?Object.defineProperty(l,T,W):l[T]=h[T]}return l.default=h,v&&v.set(h,l),l},r=function(h){if(typeof WeakMap!="function")return null;var t=new WeakMap,v=new WeakMap;return(r=function(A){return A?v:t})(h)},d=e("K+nK"),c.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return c.t0=d,c.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return c.t1=c.sent,u=(0,c.t0)(c.t1),c.t2=d,c.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return c.t3=c.sent,p=(0,c.t2)(c.t3),c.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 17:return g=c.sent,c.t4=o,c.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 21:return c.t5=c.sent,C=(0,c.t4)(c.t5),s={displayType:"row",labelWidth:60,type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F",type:"range",format:"date"},siteUrl:{title:"\u7F51\u5740",type:"string",placeholder:"\u6B64\u5904\u5FC5\u586B",required:!0,props:{addonBefore:"https://",addonAfter:".com"}}}},K=function(){var h=(0,C.useForm)(),t=function(l,A){A.length>0?alert("errors:"+JSON.stringify(A)):alert("formData:"+JSON.stringify(l,null,2))};return p.default.createElement("div",null,p.default.createElement(C.default,{form:h,schema:s,onFinish:t}),p.default.createElement(u.default,{type:"primary",onClick:h.submit},"\u63D0\u4EA4"))},I=K,c.abrupt("return",I);case 27:case"end":return c.stop()}},S)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-demo-2"}},"migrate-demo":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(E.a.mark(function S(){var d,u,p,g,C,r,o,s;return E.a.wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return o=function(){var c=(0,p.useForm)(),N=function(t,v){v.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(v))):alert(JSON.stringify(t))};return u.default.createElement("div",null,u.default.createElement(p.default,{form:c,schema:r,onFinish:N}),u.default.createElement("button",{onClick:c.submit},"\u63D0\u4EA4"))},C=function(c,N){if(!N&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var h=g(N);if(h&&h.has(c))return h.get(c);var t={},v=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in c)if(l!=="default"&&Object.prototype.hasOwnProperty.call(c,l)){var A=v?Object.getOwnPropertyDescriptor(c,l):null;A&&(A.get||A.set)?Object.defineProperty(t,l,A):t[l]=c[l]}return t.default=c,h&&h.set(c,t),t},g=function(c){if(typeof WeakMap!="function")return null;var N=new WeakMap,h=new WeakMap;return(g=function(v){return v?h:N})(c)},d=e("K+nK"),I.t0=d,I.next=7,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 7:return I.t1=I.sent,u=(0,I.t0)(I.t1),I.t2=C,I.next=12,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 12:return I.t3=I.sent,p=(0,I.t2)(I.t3),r={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}},s=o,I.abrupt("return",s);case 17:case"end":return I.stop()}},S)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate-demo"}},"migrate-demo-1":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(E.a.mark(function S(){var d,u,p,g,C,r,o,s,K,I,R,c,N;return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return K=function(l,A){if(!A&&l&&l.__esModule)return l;if(l===null||typeof l!="object"&&typeof l!="function")return{default:l};var T=s(A);if(T&&T.has(l))return T.get(l);var W={},Z=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var G in l)if(G!=="default"&&Object.prototype.hasOwnProperty.call(l,G)){var oe=Z?Object.getOwnPropertyDescriptor(l,G):null;oe&&(oe.get||oe.set)?Object.defineProperty(W,G,oe):W[G]=l[G]}return W.default=l,T&&T.set(l,W),W},s=function(l){if(typeof WeakMap!="function")return null;var A=new WeakMap,T=new WeakMap;return(s=function(Z){return Z?T:A})(l)},d=e("K+nK"),t.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return t.t0=d,t.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return t.t1=t.sent,u=(0,t.t0)(t.t1),t.t2=d,t.next=13,Promise.resolve().then(e.bind(null,"tJVT"));case 13:return t.t3=t.sent,p=(0,t.t2)(t.t3),t.next=17,Promise.all([e.e(3),e.e(19)]).then(e.t.bind(null,"cUip",7));case 17:return t.t4=d,t.next=20,Promise.all([e.e(0),e.e(12),e.e(18),e.e(22)]).then(e.t.bind(null,"iJl9",7));case 20:return t.t5=t.sent,g=(0,t.t4)(t.t5),t.t6=K,t.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return t.t7=t.sent,C=(0,t.t6)(t.t7),t.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 29:return r=t.sent,t.next=32,Promise.all([e.e(64),e.e(71)]).then(e.bind(null,"7t+U"));case 32:return o=t.sent,I=g.default.TextArea,R={type:"object",properties:{number:{title:"\u6570\u5B57\u8F93\u5165\u6846",type:"number","ui:disabled":!0},checkbox:{title:"\u662F\u5426\u9009\u62E9",type:"boolean","ui:widget":"switch"}},required:["number"]},c=function(){var l=(0,C.useState)(JSON.stringify(R)),A=(0,p.default)(l,2),T=A[0],W=A[1],Z=(0,C.useState)({}),G=(0,p.default)(Z,2),oe=G[0],Re=G[1],Te=function(){try{var f=(0,o.updateSchemaToNewVersion)(R);Re(f)}catch(B){console.log(B)}},cn=function(f){W(f.target.value)},Rn=function(){W(JSON.stringify(JSON.parse(T),null,2))};return C.default.createElement("div",null,C.default.createElement("div",null,"\u586B\u5165\u65E7\u7248schema\uFF1A"),C.default.createElement(I,{style:{minHeight:400,marginTop:12,marginBottom:12},value:T,onChange:cn}),C.default.createElement(u.default,{style:{marginRight:12},onClick:Rn},"\u683C\u5F0F\u5316\u65E7schema"),C.default.createElement(u.default,{type:"primary",onClick:Te},"\u751F\u6210\u65B0\u7248schema"),C.default.createElement(I,{style:{minHeight:400,marginTop:12},value:JSON.stringify(oe,null,2)}))},N=c,t.abrupt("return",N);case 38:case"end":return t.stop()}},S)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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

export default Translator;`},"packages/form-render/src/utils.js":{import:"../../packages/form-render/src/utils.js",content:V}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"},"lodash-es":{version:"4.17.21"}},identifier:"migrate-demo-1"}},"display-demo":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(E.a.mark(function S(){var d,u,p,g,C;return E.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return d=e("K+nK"),o.t0=d,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,u=(0,o.t0)(o.t1),o.t2=d,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,p=(0,o.t2)(o.t3),g=function(K){return{type:"object",displayType:K,properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},objectName:{title:"\u5BF9\u8C61",bind:"obj",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},C=function(){return u.default.createElement("div",null,u.default.createElement("h2",null,"display: row"),u.default.createElement(p.default,{schema:g("row")}),u.default.createElement("h2",null,"display: column"),u.default.createElement(p.default,{schema:g("column")}))},o.abrupt("return",C);case 14:case"end":return o.stop()}},S)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`},"demo/display.js":{import:"../demo/display",content:Be}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo"}},"display-demo-1":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(E.a.mark(function S(){var d,u,p,g,C;return E.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return d=e("K+nK"),o.t0=d,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,u=(0,o.t0)(o.t1),o.t2=d,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,p=(0,o.t2)(o.t3),g={type:"object",displayType:"inline",properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},C=function(){return u.default.createElement(p.default,{schema:g})},o.abrupt("return",C);case 14:case"end":return o.stop()}},S)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:Be}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-1"}},"display-demo-2":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(E.a.mark(function S(){var d,u,p,g,C;return E.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return d=e("K+nK"),o.t0=d,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,u=(0,o.t0)(o.t1),o.t2=d,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,p=(0,o.t2)(o.t3),g={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0},check:{title:"box",type:"boolean",default:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},C=function(){return u.default.createElement(p.default,{readOnly:!0,schema:g})},o.abrupt("return",C);case 14:case"end":return o.stop()}},S)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form readOnly schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:Be}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-2"}},"display-demo-3":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(E.a.mark(function S(){var d,u,p,g,C;return E.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return d=e("K+nK"),o.t0=d,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,u=(0,o.t0)(o.t1),o.t2=d,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,p=(0,o.t2)(o.t3),g={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0,width:"50%"},check:{title:"box",type:"boolean",default:!0,width:"50%",labelWidth:6},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},C=function(){return u.default.createElement(p.default,{labelWidth:"200",schema:g})},o.abrupt("return",C);case 14:case"end":return o.stop()}},S)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form labelWidth="200" schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:Be}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-3"}},"display-demo-4":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(E.a.mark(function S(){var d,u,p,g,C,r;return E.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,u=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,p=(0,s.t2)(s.t3),g={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},C=function(){return u.default.createElement(p.default,{schema:g})},r=C,s.abrupt("return",r);case 15:case"end":return s.stop()}},S)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Be}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-4"}},"display-demo-5":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(E.a.mark(function S(){var d,u,p,g,C,r;return E.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,u=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,p=(0,s.t2)(s.t3),g={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},C=function(){return u.default.createElement(p.default,{schema:g})},r=C,s.abrupt("return",r);case 15:case"end":return s.stop()}},S)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Be}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-5"}},"display-demo-6":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(E.a.mark(function S(){var d,u,p,g,C,r;return E.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,u=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,p=(0,s.t2)(s.t3),g={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},C=function(){return u.default.createElement(p.default,{schema:g})},r=C,s.abrupt("return",r);case 15:case"end":return s.stop()}},S)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Be}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-6"}},"display-demo-7":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(E.a.mark(function S(){var d,u,p,g,C,r;return E.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,u=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,p=(0,s.t2)(s.t3),g={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},C=function(){return u.default.createElement(p.default,{schema:g})},r=C,s.abrupt("return",r);case 15:case"end":return s.stop()}},S)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Be}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-7"}},"form-methods-demo":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(E.a.mark(function S(){var d,u,p,g,C,r,o,s,K,I,R,c,N;return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return R=function(l,A){if(!A&&l&&l.__esModule)return l;if(l===null||typeof l!="object"&&typeof l!="function")return{default:l};var T=I(A);if(T&&T.has(l))return T.get(l);var W={},Z=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var G in l)if(G!=="default"&&Object.prototype.hasOwnProperty.call(l,G)){var oe=Z?Object.getOwnPropertyDescriptor(l,G):null;oe&&(oe.get||oe.set)?Object.defineProperty(W,G,oe):W[G]=l[G]}return W.default=l,T&&T.set(l,W),W},I=function(l){if(typeof WeakMap!="function")return null;var A=new WeakMap,T=new WeakMap;return(I=function(Z){return Z?T:A})(l)},d=e("K+nK"),t.next=5,e.e(20).then(e.t.bind(null,"lfLe",7));case 5:return t.t0=d,t.next=8,e.e(21).then(e.t.bind(null,"Cp9S",7));case 8:return t.t1=t.sent,u=(0,t.t0)(t.t1),t.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return t.t2=d,t.next=15,e.e(12).then(e.t.bind(null,"4IMT",7));case 15:return t.t3=t.sent,p=(0,t.t2)(t.t3),t.next=19,e.e(14).then(e.t.bind(null,"tL+A",7));case 19:return t.t4=d,t.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return t.t5=t.sent,g=(0,t.t4)(t.t5),t.t6=d,t.next=27,Promise.resolve().then(e.bind(null,"tJVT"));case 27:return t.t7=t.sent,C=(0,t.t6)(t.t7),t.t8=R,t.next=32,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 32:return t.t9=t.sent,r=(0,t.t8)(t.t9),t.next=36,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 36:return o=t.sent,t.t10=R,t.next=40,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 40:return t.t11=t.sent,s=(0,t.t10)(t.t11),t.next=44,e.e(15).then(e.bind(null,"OH0R"));case 44:return K=t.sent,c=function(){var l=(0,s.useForm)(),A=(0,r.useState)({}),T=(0,C.default)(A,2),W=T[0],Z=T[1],G=function(){(0,K.fakeApi)("xxx/getForm").then(function(Te){l.setValues({input1:"hello world",select1:"c"})})};(0,r.useEffect)(function(){(0,K.delay)(1e3).then(function(Re){Z({type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}})})},[]);var oe=function(Te,cn){cn.length>0?g.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(cn.map(function(Rn){return Rn.name}))):(0,K.fakeApi)("xxx/submit",Te).then(function(Rn){return g.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})};return r.default.createElement("div",{style:{width:"400px"}},r.default.createElement(s.default,{form:l,schema:W,onFinish:oe}),r.default.createElement(u.default,null,r.default.createElement(p.default,{onClick:G},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),r.default.createElement(p.default,{type:"primary",onClick:l.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},N=c,t.abrupt("return",N);case 48:case"end":return t.stop()}},S)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Ae}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo"}},"form-methods-demo-1":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(E.a.mark(function S(){var d,u,p,g,C,r,o,s,K,I,R,c,N;return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return I=function(l,A){if(!A&&l&&l.__esModule)return l;if(l===null||typeof l!="object"&&typeof l!="function")return{default:l};var T=K(A);if(T&&T.has(l))return T.get(l);var W={},Z=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var G in l)if(G!=="default"&&Object.prototype.hasOwnProperty.call(l,G)){var oe=Z?Object.getOwnPropertyDescriptor(l,G):null;oe&&(oe.get||oe.set)?Object.defineProperty(W,G,oe):W[G]=l[G]}return W.default=l,T&&T.set(l,W),W},K=function(l){if(typeof WeakMap!="function")return null;var A=new WeakMap,T=new WeakMap;return(K=function(Z){return Z?T:A})(l)},d=e("K+nK"),t.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return t.t0=d,t.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return t.t1=t.sent,u=(0,t.t0)(t.t1),t.t2=d,t.next=13,Promise.resolve().then(e.bind(null,"PpiC"));case 13:return t.t3=t.sent,p=(0,t.t2)(t.t3),t.next=17,e.e(14).then(e.t.bind(null,"tL+A",7));case 17:return t.t4=d,t.next=20,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 20:return t.t5=t.sent,g=(0,t.t4)(t.t5),t.t6=d,t.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return t.t7=t.sent,C=(0,t.t6)(t.t7),t.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 29:return r=t.sent,t.t8=I,t.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 33:return t.t9=t.sent,o=(0,t.t8)(t.t9),t.next=37,e.e(15).then(e.bind(null,"OH0R"));case 37:return s=t.sent,R={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},c=function(){var l=(0,o.useForm)(),A=function(Z,G){G.length>0?g.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(G.map(function(oe){return oe.name}))):(0,s.fakeApi)("xxx/submit",Z).then(function(oe){return g.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},T=function(Z){var G=Z.data,oe=Z.errors,Re=Z.schema,Te=(0,p.default)(Z,["data","errors","schema"]);return(0,s.fakeApi)("xxx/validation").then(function(cn){return{name:"select1",error:["\u5916\u90E8\u6821\u9A8C\u9519\u8BEF"]}})};return C.default.createElement("div",{style:{width:"400px"}},C.default.createElement(o.default,{form:l,schema:R,beforeFinish:T,onFinish:A}),C.default.createElement(u.default,{type:"primary",onClick:l.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},N=c,t.abrupt("return",N);case 42:case"end":return t.stop()}},S)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Ae}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-1"}},"form-methods-demo-2":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(E.a.mark(function S(){var d,u,p,g,C,r,o,s,K,I,R,c,N;return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return I=function(l,A){if(!A&&l&&l.__esModule)return l;if(l===null||typeof l!="object"&&typeof l!="function")return{default:l};var T=K(A);if(T&&T.has(l))return T.get(l);var W={},Z=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var G in l)if(G!=="default"&&Object.prototype.hasOwnProperty.call(l,G)){var oe=Z?Object.getOwnPropertyDescriptor(l,G):null;oe&&(oe.get||oe.set)?Object.defineProperty(W,G,oe):W[G]=l[G]}return W.default=l,T&&T.set(l,W),W},K=function(l){if(typeof WeakMap!="function")return null;var A=new WeakMap,T=new WeakMap;return(K=function(Z){return Z?T:A})(l)},d=e("K+nK"),t.next=5,e.e(20).then(e.t.bind(null,"lfLe",7));case 5:return t.t0=d,t.next=8,e.e(21).then(e.t.bind(null,"Cp9S",7));case 8:return t.t1=t.sent,u=(0,t.t0)(t.t1),t.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return t.t2=d,t.next=15,e.e(12).then(e.t.bind(null,"4IMT",7));case 15:return t.t3=t.sent,p=(0,t.t2)(t.t3),t.next=19,e.e(14).then(e.t.bind(null,"tL+A",7));case 19:return t.t4=d,t.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return t.t5=t.sent,g=(0,t.t4)(t.t5),t.t6=d,t.next=27,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 27:return t.t7=t.sent,C=(0,t.t6)(t.t7),t.next=31,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 31:return r=t.sent,t.t8=I,t.next=35,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 35:return t.t9=t.sent,o=(0,t.t8)(t.t9),t.next=39,e.e(15).then(e.bind(null,"OH0R"));case 39:return s=t.sent,R={type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F\u8303\u56F4",type:"range",format:"date"}}},c=function(){var l=(0,o.useForm)(),A=function(Z,G){G.length>0?g.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(G.map(function(oe){return oe.name}))):(0,s.fakeApi)("xxx/submit",Z).then(function(oe){return g.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},T=function(){(0,s.fakeApi)("xxx/getForm").then(function(Z){l.setValues({startDate:"2020-04-04",endDate:"2020-04-24"})})};return C.default.createElement("div",{style:{width:"400px"}},C.default.createElement(o.default,{form:l,schema:R,onFinish:A}),C.default.createElement(u.default,null,C.default.createElement(p.default,{onClick:T},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),C.default.createElement(p.default,{type:"primary",onClick:l.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},N=c,t.abrupt("return",N);case 44:case"end":return t.stop()}},S)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Ae}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-2"}},"form-methods-demo-3":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(E.a.mark(function S(){var d,u,p,g,C,r,o,s,K,I,R,c;return E.a.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return K=function(v,l){if(!l&&v&&v.__esModule)return v;if(v===null||typeof v!="object"&&typeof v!="function")return{default:v};var A=s(l);if(A&&A.has(v))return A.get(v);var T={},W=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var Z in v)if(Z!=="default"&&Object.prototype.hasOwnProperty.call(v,Z)){var G=W?Object.getOwnPropertyDescriptor(v,Z):null;G&&(G.get||G.set)?Object.defineProperty(T,Z,G):T[Z]=v[Z]}return T.default=v,A&&A.set(v,T),T},s=function(v){if(typeof WeakMap!="function")return null;var l=new WeakMap,A=new WeakMap;return(s=function(W){return W?A:l})(v)},d=e("K+nK"),h.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return h.t0=d,h.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return h.t1=h.sent,u=(0,h.t0)(h.t1),h.next=12,e.e(14).then(e.t.bind(null,"tL+A",7));case 12:return h.t2=d,h.next=15,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 15:return h.t3=h.sent,p=(0,h.t2)(h.t3),h.t4=K,h.next=20,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 20:return h.t5=h.sent,g=(0,h.t4)(h.t5),h.next=24,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 24:return C=h.sent,h.t6=K,h.next=28,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 28:return h.t7=h.sent,r=(0,h.t6)(h.t7),h.next=32,e.e(15).then(e.bind(null,"OH0R"));case 32:return o=h.sent,I={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select1:{title:"\u5355\u9009",type:"string",widget:"select"}}}}},R=function(){var v=(0,r.useForm)(),l=function(){v.setSchemaByPath("obj1.select1",{enum:["east","south","west","north"],enumNames:["\u4E1C","\u5357","\u897F","\u5317"]})},A=function(W,Z){Z.length>0?p.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(Z.map(function(G){return G.name}))):p.default.info(JSON.stringify(W))};return g.default.createElement("div",{style:{width:"400px"}},g.default.createElement(r.default,{form:v,schema:I,onMount:l,onFinish:A}),g.default.createElement(u.default,{type:"primary",onClick:v.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},c=R,h.abrupt("return",c);case 37:case"end":return h.stop()}},S)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Ae}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-3"}},"function-demo":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(E.a.mark(function S(){var d,u,p,g,C,r,o,s;return E.a.wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return C=function(c,N){if(!N&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var h=g(N);if(h&&h.has(c))return h.get(c);var t={},v=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in c)if(l!=="default"&&Object.prototype.hasOwnProperty.call(c,l)){var A=v?Object.getOwnPropertyDescriptor(c,l):null;A&&(A.get||A.set)?Object.defineProperty(t,l,A):t[l]=c[l]}return t.default=c,h&&h.set(c,t),t},g=function(c){if(typeof WeakMap!="function")return null;var N=new WeakMap,h=new WeakMap;return(g=function(v){return v?h:N})(c)},d=e("K+nK"),I.t0=d,I.next=6,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 6:return I.t1=I.sent,u=(0,I.t0)(I.t1),I.t2=C,I.next=11,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 11:return I.t3=I.sent,p=(0,I.t2)(I.t3),r={type:"object",properties:{select1:{title:"\u5355\u9009",description:"\u5C1D\u8BD5\u9009\u62E9\u201C\u663E\u793A\u8F93\u5165\u6846\u201D",type:"string",enum:["a","b"],enumNames:["\u9690\u85CF\u8F93\u5165\u6846","\u663E\u793A\u8F93\u5165\u6846"],disabled:"{{rootValue.input1.length > 5}}",default:"a"},input1:{title:"\u8F93\u5165\u6846",description:"\u5C1D\u8BD5\u8F93\u5165\u8D85\u8FC75\u4E2A\u5B57\u7B26",type:"string",hidden:'{{formData.select1 == "a"}}'}}},o=function(){var c=(0,p.useForm)();return u.default.createElement(p.default,{form:c,schema:r})},s=o,I.abrupt("return",s);case 17:case"end":return I.stop()}},S)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo1;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo"}},"function-demo-1":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(E.a.mark(function S(){var d,u,p,g,C;return E.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return d=e("K+nK"),o.t0=d,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,u=(0,o.t0)(o.t1),o.t2=d,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return o.t3=o.sent,p=(0,o.t2)(o.t3),o.next=13,e.e(17).then(e.bind(null,"8iYR"));case 13:return g=o.sent,C=function(){return u.default.createElement(p.default,{schema:g.expression})},o.abrupt("return",C);case 16:case"end":return o.stop()}},S)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { expression } from '../json/schema';

export default () => <FR schema={expression} />;`},"demo/FR.jsx":{import:"../demo/FR",content:ve},"json/schema.js":{import:"../json/schema",content:pn}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo-1"}},"lifeCycle-demo":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(E.a.mark(function S(){var d,u,p,g,C,r,o,s,K;return E.a.wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return C=function(N,h){if(!h&&N&&N.__esModule)return N;if(N===null||typeof N!="object"&&typeof N!="function")return{default:N};var t=g(h);if(t&&t.has(N))return t.get(N);var v={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var A in N)if(A!=="default"&&Object.prototype.hasOwnProperty.call(N,A)){var T=l?Object.getOwnPropertyDescriptor(N,A):null;T&&(T.get||T.set)?Object.defineProperty(v,A,T):v[A]=N[A]}return v.default=N,t&&t.set(N,v),v},g=function(N){if(typeof WeakMap!="function")return null;var h=new WeakMap,t=new WeakMap;return(g=function(l){return l?t:h})(N)},R.t0=C,R.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return R.t1=R.sent,d=(0,R.t0)(R.t1),R.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 9:return u=R.sent,R.t2=C,R.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 13:return R.t3=R.sent,p=(0,R.t2)(R.t3),r=function(N){return new Promise(function(h){return setTimeout(h,N)})},o={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u4E0B\u62C9\u9009\u6846",description:"\u52A0\u8F7D\u4E2D...",type:"string",enum:[],widget:"select"}}},s=function(){var N=(0,p.useForm)(),h=function(){N.setValues({input1:"hello world"}),r(3e3).then(function(v){N.setSchemaByPath("select1",{description:"",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]})})};return d.default.createElement(p.default,{form:N,schema:o,onMount:h})},K=s,R.abrupt("return",K);case 20:case"end":return R.stop()}},S)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.4.5-beta.14"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"lifeCycle-demo"}},"listDisplay-demo":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(E.a.mark(function S(){var d,u,p,g,C,r;return E.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,u=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,p=(0,s.t2)(s.t3),g={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},C=function(){return u.default.createElement(p.default,{schema:g})},r=C,s.abrupt("return",r);case 15:case"end":return s.stop()}},S)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Be}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo"}},"listDisplay-demo-1":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(E.a.mark(function S(){var d,u,p,g,C,r;return E.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,u=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,p=(0,s.t2)(s.t3),g={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},C=function(){return u.default.createElement(p.default,{schema:g})},r=C,s.abrupt("return",r);case 15:case"end":return s.stop()}},S)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Be}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-1"}},"listDisplay-demo-2":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(E.a.mark(function S(){var d,u,p,g,C,r;return E.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,u=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,p=(0,s.t2)(s.t3),g={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},C=function(){return u.default.createElement(p.default,{schema:g})},r=C,s.abrupt("return",r);case 15:case"end":return s.stop()}},S)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Be}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-2"}},"listDisplay-demo-3":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(E.a.mark(function S(){var d,u,p,g,C,r;return E.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,u=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,p=(0,s.t2)(s.t3),g={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},C=function(){return u.default.createElement(p.default,{schema:g})},r=C,s.abrupt("return",r);case 15:case"end":return s.stop()}},S)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Be}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-3"}},"listDisplay-demo-4":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(E.a.mark(function S(){var d,u,p,g,C,r;return E.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,u=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,p=(0,s.t2)(s.t3),window.hello=function(K){var I=K.value;console.log(I)},g={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list4",itemProps:{buttons:[{callback:"hello",text:"\u590D\u5236"}]},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},C=function(){return u.default.createElement(p.default,{schema:g})},r=C,s.abrupt("return",r);case 16:case"end":return s.stop()}},S)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Be}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-4"}},"watch-demo":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(E.a.mark(function S(){var d,u,p,g,C,r,o,s;return E.a.wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return C=function(c,N){if(!N&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var h=g(N);if(h&&h.has(c))return h.get(c);var t={},v=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in c)if(l!=="default"&&Object.prototype.hasOwnProperty.call(c,l)){var A=v?Object.getOwnPropertyDescriptor(c,l):null;A&&(A.get||A.set)?Object.defineProperty(t,l,A):t[l]=c[l]}return t.default=c,h&&h.set(c,t),t},g=function(c){if(typeof WeakMap!="function")return null;var N=new WeakMap,h=new WeakMap;return(g=function(v){return v?h:N})(c)},I.t0=C,I.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return I.t1=I.sent,d=(0,I.t0)(I.t1),I.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 9:return u=I.sent,I.t2=C,I.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 13:return I.t3=I.sent,p=(0,I.t2)(I.t3),r={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"}}},o=function(){var c=(0,p.useForm)(),N={"#":function(t){console.log("\u8868\u5355\u7684\u65F6\u65F6\u6570\u636E\u4E3A\uFF1A",t)},input1:function(t){c.setValueByPath("input2",t)}};return d.default.createElement(p.default,{form:c,schema:r,watch:N})},s=o,I.abrupt("return",s);case 19:case"end":return I.stop()}},S)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.4.5-beta.14"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo"}},"watch-demo-1":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(E.a.mark(function S(){var d,u,p,g,C,r,o,s,K,I;return E.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return o=function(h,t){if(!t&&h&&h.__esModule)return h;if(h===null||typeof h!="object"&&typeof h!="function")return{default:h};var v=r(t);if(v&&v.has(h))return v.get(h);var l={},A=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var T in h)if(T!=="default"&&Object.prototype.hasOwnProperty.call(h,T)){var W=A?Object.getOwnPropertyDescriptor(h,T):null;W&&(W.get||W.set)?Object.defineProperty(l,T,W):l[T]=h[T]}return l.default=h,v&&v.set(h,l),l},r=function(h){if(typeof WeakMap!="function")return null;var t=new WeakMap,v=new WeakMap;return(r=function(A){return A?v:t})(h)},d=e("K+nK"),c.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return c.t0=d,c.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return c.t1=c.sent,u=(0,c.t0)(c.t1),c.t2=o,c.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return c.t3=c.sent,p=(0,c.t2)(c.t3),c.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 17:return g=c.sent,c.t4=o,c.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 21:return c.t5=c.sent,C=(0,c.t4)(c.t5),s={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"radio"}}}}},K=function(){var h=(0,C.useForm)(),t=function(A,T){T.length>0?alert("errorFields:"+JSON.stringify(T)):alert("formData:"+JSON.stringify(A,null,2))},v={input1:function(A){A.length>2?h.setSchemaByPath("obj1.select",function(T){var W=T.enumNames;return{enumNames:W.map(function(Z){return Z+"a"})}}):h.setSchemaByPath("obj1.select",{enumNames:["\u65E9","\u4E2D","\u665A"]})}};return p.default.createElement("div",null,p.default.createElement(C.default,{form:h,schema:s,onFinish:t,watch:v}),p.default.createElement(u.default,{type:"",style:{marginRight:8},onClick:function(){return h.setSchemaByPath("input2",{title:"\u7F16\u8F91\u6846",format:"textarea"})}},"\u5C06 input \u6539\u4E3A textarea"),p.default.createElement(u.default,{type:"primary",onClick:h.submit},"\u63D0\u4EA4"))},I=K,c.abrupt("return",I);case 27:case"end":return c.stop()}},S)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo-1"}},"widget-demo":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(E.a.mark(function S(){var d,u,p,g,C,r,o,s,K,I,R,c,N;return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return K=function(l,A){if(!A&&l&&l.__esModule)return l;if(l===null||typeof l!="object"&&typeof l!="function")return{default:l};var T=s(A);if(T&&T.has(l))return T.get(l);var W={},Z=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var G in l)if(G!=="default"&&Object.prototype.hasOwnProperty.call(l,G)){var oe=Z?Object.getOwnPropertyDescriptor(l,G):null;oe&&(oe.get||oe.set)?Object.defineProperty(W,G,oe):W[G]=l[G]}return W.default=l,T&&T.set(l,W),W},s=function(l){if(typeof WeakMap!="function")return null;var A=new WeakMap,T=new WeakMap;return(s=function(Z){return Z?T:A})(l)},d=e("K+nK"),t.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return t.t0=d,t.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return t.t1=t.sent,u=(0,t.t0)(t.t1),t.next=12,Promise.all([e.e(3),e.e(19)]).then(e.t.bind(null,"cUip",7));case 12:return t.t2=d,t.next=15,Promise.all([e.e(0),e.e(12),e.e(18),e.e(22)]).then(e.t.bind(null,"iJl9",7));case 15:return t.t3=t.sent,p=(0,t.t2)(t.t3),t.t4=d,t.next=20,e.e(74).then(e.bind(null,"0Owb"));case 20:return t.t5=t.sent,g=(0,t.t4)(t.t5),t.t6=K,t.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return t.t7=t.sent,C=(0,t.t6)(t.t7),t.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 29:return r=t.sent,t.t8=K,t.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 33:return t.t9=t.sent,o=(0,t.t8)(t.t9),I={type:"object",properties:{string:{title:"\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6",type:"string",widget:"site"},select:{title:"\u5355\u9009",type:"number",enum:[1,2,3],enumNames:["\u9009\u98791","\u9009\u98792","\u9009\u98793"]}}},R=function(l){return console.log("widget props:",l),C.default.createElement(p.default,(0,g.default)({addonBefore:"http://",addonAfter:".com"},l))},c=function(){var l=(0,o.useForm)(),A=function(){};return C.default.createElement("div",null,C.default.createElement(o.default,{readOnly:!0,form:l,schema:I,widgets:{site:R},onFinish:function(W){return alert(JSON.stringify(W,null,2))}}),C.default.createElement(u.default,{type:"primary",onClick:l.submit},"\u63D0\u4EA4"))},N=c,t.abrupt("return",N);case 40:case"end":return t.stop()}},S)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},"react-dom":{version:">=16.8.0"}},identifier:"widget-demo"}},"schema-demo":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(E.a.mark(function S(){var d,u,p,g,C;return E.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return d=e("K+nK"),o.t0=d,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,u=(0,o.t0)(o.t1),o.t2=d,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return o.t3=o.sent,p=(0,o.t2)(o.t3),o.next=13,e.e(17).then(e.bind(null,"8iYR"));case 13:return g=o.sent,C=function(){return u.default.createElement(p.default,{schema:g.basic})},o.abrupt("return",C);case 16:case"end":return o.stop()}},S)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { basic } from '../json/schema';

export default () => <FR schema={basic} />;`},"demo/FR.jsx":{import:"../demo/FR",content:ve},"json/schema.js":{import:"../json/schema",content:pn}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo"}},"schema-demo-1":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(E.a.mark(function S(){var d,u,p,g,C;return E.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return d=e("K+nK"),o.t0=d,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,u=(0,o.t0)(o.t1),o.t2=d,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return o.t3=o.sent,p=(0,o.t2)(o.t3),o.next=13,e.e(17).then(e.bind(null,"8iYR"));case 13:return g=o.sent,C=function(){return u.default.createElement(p.default,{schema:g.titleTrick})},o.abrupt("return",C);case 16:case"end":return o.stop()}},S)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { titleTrick } from '../json/schema';

export default () => <FR schema={titleTrick} />;`},"demo/FR.jsx":{import:"../demo/FR",content:ve},"json/schema.js":{import:"../json/schema",content:pn}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo-1"}},"docs-playground":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(E.a.mark(function S(){return E.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(25)]).then(e.bind(null,"BASV"));case 2:return u.abrupt("return",u.sent.default);case 3:case"end":return u.stop()}},S)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:Ie},"main.js":{import:"./main",content:Kn},"json/simplest.json":{import:"./json/simplest.json",content:Mn},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:Fn},"monaco/index.js":{import:"./monaco",content:hn},"suggestionsMap.js":{import:"./suggestionsMap",content:Xe},"index.css":{import:"./index.css",content:$n}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:"^17.x"},"react-dom":{version:">=16.9.0"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.4.5-beta.14"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-monaco-editor":{version:"0.43.0"},"@types/react":{version:"^17.x"}},identifier:"docs-playground"}},"table-render-advanced":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(E.a.mark(function S(){return E.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(25)]).then(e.bind(null,"7ZP+"));case 2:return u.abrupt("return",u.sent.default);case 3:case"end":return u.stop()}},S)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{tsx:wn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.1"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!0,identifier:"table-render-advanced"}},"table-render-demo":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(E.a.mark(function S(){var d,u,p,g,C,r,o,s,K;return E.a.wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return d=e("K+nK"),R.t0=d,R.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return R.t1=R.sent,u=(0,R.t0)(R.t1),R.next=8,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(63)]).then(e.bind(null,"P2DI"));case 8:for(p=R.sent,g=[],C=0;C<6;C++)g.push({id:C.toString(),title:"\u6807\u9898".concat(C+1),created_at:new Date().getTime()});return r={type:"object",properties:{string:{title:"\u6807\u9898",type:"string","ui:width":"30%"},created_at:{title:"\u521B\u5EFA\u65F6\u95F4",type:"string",format:"date","ui:width":"30%"}}},o=[{title:"\u6807\u9898",dataIndex:"title"},{title:"\u521B\u5EFA\u65F6\u95F4",key:"since",dataIndex:"created_at",valueType:"date"},{title:"\u64CD\u4F5C",render:function(N,h){return u.default.createElement("a",{onClick:function(){return alert(N.title)}},"\u7F16\u8F91")}}],s=function(){var N=function(){return{rows:g,total:g.length}};return u.default.createElement(p.TableProvider,null,u.default.createElement(p.Search,{schema:r,api:N}),u.default.createElement(p.Table,{headerTitle:"\u6700\u7B80\u8868\u683C",columns:o,rowKey:"id"}))},K=s,R.abrupt("return",K);case 16:case"end":return R.stop()}},S)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Wrapper;`}},dependencies:{react:{version:">=16.8.0"},"table-render":{version:"1.1.1"},antd:{version:"4.x",css:"antd/dist/antd.css"}},transform:!0,defaultShowCode:!0,identifier:"table-render-demo"}},"generator-demo":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(E.a.mark(function S(){var d,u,p,g,C,r;return E.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,u=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(62)]).then(e.bind(null,"nYSz"));case 9:return s.t3=s.sent,p=(0,s.t2)(s.t3),g={type:"object",properties:{inputName:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string"}}},C=function(){return u.default.createElement("div",{style:{height:"80vh"}},u.default.createElement(p.default,{defaultValue:g}))},r=C,s.abrupt("return",r);case 15:case"end":return s.stop()}},S)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.1.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"generator-demo"}},"generator-modal":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(E.a.mark(function S(){return E.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(25)]).then(e.bind(null,"PPgD"));case 2:return u.abrupt("return",u.sent.default);case 3:case"end":return u.stop()}},S)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:Dn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.1.2"},"react-dom":{version:">=16.9.0"}},identifier:"generator-modal"}},"generator-transformer":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(E.a.mark(function S(){return E.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(25)]).then(e.bind(null,"jktF"));case 2:return u.abrupt("return",u.sent.default);case 3:case"end":return u.stop()}},S)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:We}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.1.2"},"react-dom":{version:">=16.9.0"}},identifier:"generator-transformer"}},"generator-settings":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(E.a.mark(function S(){return E.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(25)]).then(e.bind(null,"M63W"));case 2:return u.abrupt("return",u.sent.default);case 3:case"end":return u.stop()}},S)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:_n}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.1.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-settings"}},"generator-playground":{component:Object(L.dynamic)({loader:function(){var j=Object(J.a)(E.a.mark(function S(){return E.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(25)]).then(e.bind(null,"TYW4"));case 2:return u.abrupt("return",u.sent.default);case 3:case"end":return u.stop()}},S)}));function P(){return j.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:Vn},"index.less":{import:"./index.less",content:et}},dependencies:{react:{version:">=16.8.0"},umi:{version:"3.4.19"},"fr-generator":{version:"2.1.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-playground"}}}},TIsu:function(Tn,yn,e){},Zs1V:function(Tn){Tn.exports=JSON.parse("{}")},p8sG:function(Tn,yn,e){"use strict";Tn.exports=e("80pN")},pz0r:function(Tn,yn,e){"use strict";e.r(yn);var J=e("q1tI"),n=e.n(J),E=e("dEAq"),L=e.n(E),ce=e("0zqC"),V=e("ZpkN"),Be=e("JjdP"),Ae=n.a.memo(Be.default["migrate-demo"].component),ve=n.a.memo(Be.default["migrate-demo-1"].component);yn.default=pn=>(n.a.useEffect(()=>{pn!=null&&pn.location.hash&&E.AnchorLink.scrollToAnchor(decodeURIComponent(pn.location.hash.slice(1)))},[]),n.a.createElement(n.a.Fragment,null,n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"markdown"},n.a.createElement("h1",{id:"0x-\u5230-1x"},n.a.createElement(E.AnchorLink,{to:"#0x-\u5230-1x","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"0.x \u5230 1.x"),n.a.createElement("h2",{id:"\u4E09\u4E2A\u6539\u53D8"},n.a.createElement(E.AnchorLink,{to:"#\u4E09\u4E2A\u6539\u53D8","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u4E09\u4E2A\u6539\u53D8"),n.a.createElement("p",null,n.a.createElement("strong",null,"FormRender v1.0.0 \u7684\u5347\u7EA7\uFF0C\u4ECE\u4F7F\u7528\u65B9\u89C6\u89D2\u6765\u770B\uFF0C\u6700\u4E3B\u8981\u7684\u53D8\u52A8\u5F52\u7ED3\u4E3A\u4E09\u6761\uFF1A")),n.a.createElement("ol",null,n.a.createElement("li",null,n.a.createElement("p",null,"\u63D0\u4EA4\u7684\u65B9\u6CD5\u6536\u675F\uFF08\u5373\u7EDF\u4E00\u63D0\u4F9B submit \u65B9\u6CD5\uFF09\uFF0CformData \u548C\u6821\u9A8C\u4FE1\u606F\u5185\u7F6E")),n.a.createElement("li",null,n.a.createElement("p",null,"Schema \u4E66\u5199\u89C4\u5219\u66F4\u52A0\u6E05\u6670\uFF0C\u66F4\u52A0\u8D34\u8FD1\u7EC4\u4EF6 props")),n.a.createElement("li",null,n.a.createElement("p",null,"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u4E0D\u518D\u8981\u201C\u5957\u58F3\u201D\uFF0C\u5F88\u591A antd \u7EC4\u4EF6\u76F4\u63A5\u62FF\u6765\u80FD\u7528"))),n.a.createElement("p",null,"\u7B2C 1 \u6761\u662F\u4E3A\u4E86\u66F4\u52A0\u5F3A\u5927\u7684\u529F\u80FD\uFF0C\u540E\u4E24\u6761\u5219\u4E3A\u4E86\u66F4\u52A0\u5FEB\u6377\u548C\u8212\u9002\u7684\u5F00\u53D1\u4F53\u9A8C\u3002FormRender 1.0 \u5E26\u6765\u4E86\u54EA\u4E9B\u65B0\u529F\u80FD\uFF0C\u8BE6\u89C1\u6587\u7AE0\u5E95\u90E8 ",n.a.createElement("code",null,"Changelog \u601D\u8003")),n.a.createElement("h2",{id:"\u8FC1\u79FB\u65B9\u6848\u5982\u4E0B"},n.a.createElement(E.AnchorLink,{to:"#\u8FC1\u79FB\u65B9\u6848\u5982\u4E0B","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u8FC1\u79FB\u65B9\u6848\u5982\u4E0B"),n.a.createElement("p",null,n.a.createElement("strong",null,"FormRender v0.x \u7684\u4EE3\u7801\u5982\u4E0B\uFF1A")),n.a.createElement(V.a,{code:`import React, { useState } from 'react';
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

export default Demo;`,lang:"js"}),n.a.createElement("h3",{id:"\u65B0\u7248\u672C\u5347\u7EA7\u6539\u52A8"},n.a.createElement(E.AnchorLink,{to:"#\u65B0\u7248\u672C\u5347\u7EA7\u6539\u52A8","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u65B0\u7248\u672C\u5347\u7EA7\u6539\u52A8"),n.a.createElement("p",null,"\u5B8C\u5168\u4F7F\u7528\u65B0 api\uFF0CformData \u548C onChange \u8FD9\u4E9B\u539F\u672C\u66B4\u9732\u5728\u5916\u7684\u5C5E\u6027\u6536\u675F\uFF0Csubmit \u65B9\u6CD5\u7531 form \u5B9E\u4F8B\u63D0\u4F9B\uFF0C\u4E00\u822C\u60C5\u51B5\u4E0B\u8FC1\u79FB\u4E5F\u5FEB\u7684\uFF0C\u53EA\u662F\u8981\u6CE8\u610F\u6240\u6709\u5728\u5916\u90E8\u4F7F\u7528\u5230 formData \u7684\u573A\u666F\uFF0C\u9700\u8981\u66FF\u6362\u4E3A ",n.a.createElement("code",null,"form.getValues()"),"\uFF0C\u6240\u6709\u4F7F\u7528\u5230 onChange \u7684\u5730\u65B9\u9700\u8981\u4FEE\u6539\u4E3A ",n.a.createElement("code",null,"form.setValues()"))),n.a.createElement(ce.default,Be.default["migrate-demo"].previewerProps,n.a.createElement(Ae,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("p",null,"\u7531\u4E8E\u65B0\u7248\u7684 formData/onChange/validate/onValidate \u5168\u90E8\u5185\u7F6E\u4E86\uFF0C\u6240\u4EE5\u5728\u8FC1\u79FB\u65F6\uFF0C\u5916\u90E8\u6240\u6709\u4F7F\u7528\u5230\u4E09\u8005\u7684\u5730\u65B9\u4E00\u5F8B\u4F7F\u7528 form \u65B9\u6CD5\u66FF\u6362\uFF1A"),n.a.createElement(V.a,{code:`formData  ->  form.getValues()
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
};`,lang:"js"}),n.a.createElement("ol",null,n.a.createElement("li",null,n.a.createElement("code",null,"onChange")," \u4E0D\u518D\u63A5\u6536 name \u4F5C\u4E3A\u7B2C\u4E00\u4E2A\u5165\u53C2\uFF0C\u800C\u6539\u4E3A\u66F4\u4E3A\u81EA\u7136\u7684\u53EA\u6709\u4E00\u4E2A\u5165\u53C2 value"),n.a.createElement("li",null,"\u6240\u6709",n.a.createElement("code",null,"ui:options"),"\u7684\u5185\u5BB9\u4F1A\u76F4\u63A5\u5728 props \u91CC\u62FF\u5230\uFF0C\u800C\u4E0D\u9700\u8981\u518D\u4ECE props.options \u91CC\u83B7\u53D6 \uFF08ui:options \u5DF2\u66F4\u540D\u4E3A props\uFF0C\u4E0D\u8FC7\u5728\u9876\u5C42\u505A\u4E86 schema \u5B57\u6BB5\u7684\u517C\u5BB9\uFF09")),n.a.createElement("h2",{id:"schema-\u7EC6\u8282\u4E0A\u7684\u6539\u52A8"},n.a.createElement(E.AnchorLink,{to:"#schema-\u7EC6\u8282\u4E0A\u7684\u6539\u52A8","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"schema \u7EC6\u8282\u4E0A\u7684\u6539\u52A8"),n.a.createElement("p",null,"\u5355\u9009\u7EC4\u4EF6\u4E0D\u518D\u9ED8\u8BA4\u9009\u4E2D\u7B2C\u4E00\u9879\uFF0C\u9ED8\u8BA4\u503C\u4E3A undefined\uFF0C\u9664\u975E\u901A\u8FC7 default \u5B57\u6BB5\u6307\u660E\u3002"),n.a.createElement(V.a,{code:`// \u5355\u9009
{
  "title": "\u5355\u9009",
  "type": "string",
  "enum": ["hz", "wh", "gy"],
  "enumNames": ["\u676D\u5DDE", "\u6B66\u6C49", "\u8D35\u9633"],
  "default": "hz"
}`,lang:"js"}),n.a.createElement("h2",{id:"\u65E7\u7248-schema-\u8F6C\u6362\u5668\uFF1A"},n.a.createElement(E.AnchorLink,{to:"#\u65E7\u7248-schema-\u8F6C\u6362\u5668\uFF1A","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u65E7\u7248 schema \u8F6C\u6362\u5668\uFF1A")),n.a.createElement(ce.default,Be.default["migrate-demo-1"].previewerProps,n.a.createElement(ve,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h2",{id:"changelog-\u601D\u8003"},n.a.createElement(E.AnchorLink,{to:"#changelog-\u601D\u8003","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Changelog \u601D\u8003"),n.a.createElement("p",null,"\u5728\u6700\u540E\u7F57\u5217\u4E00\u4E0B\u7EC6\u8282\u4E0A FormRender 0.x -> 1.0 \u7EC6\u8282\u4E0A\u7684\u6539\u52A8 & \u601D\u8003"),n.a.createElement("h3",{id:"\u529F\u80FD\u589E\u5F3A"},n.a.createElement(E.AnchorLink,{to:"#\u529F\u80FD\u589E\u5F3A","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u529F\u80FD\u589E\u5F3A"),n.a.createElement("ol",null,n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement("strong",null,"\u5C55\u793A\u5347\u7EA7")),n.a.createElement("ul",null,n.a.createElement("li",null,"\u5217\u8868\u7684\u5C55\u793A\u652F\u6301\u4E09\u79CD\u6A21\u5F0F\uFF0C\u5206\u522B\u652F\u6301\u6BCF\u4E2A item 1-2 \u4E2A\u5143\u7D20\uFF0C3-5 \u4E2A\u5143\u7D20\u548C\u590D\u6742\u7ED3\u6784"),n.a.createElement("li",null,"\u5BF9\u8C61\u7684\u5C55\u793A\u652F\u6301\u4E8C\u79CD\u6A21\u5F0F"),n.a.createElement("li",null,"\u6821\u9A8C\u7684\u5C55\u793A\u548C antd \u6548\u679C\u4E00\u81F4"),n.a.createElement("li",null,"\u5C55\u793A\u7C7B\u578B\u9664\u4E86\u57FA\u7840\u7684 column \u548C row\uFF0C\u8FD8\u652F\u6301\u4E86 inline \u6A21\u5F0F"))),n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement("strong",null,"\u5185\u7F6E\u7EC4\u4EF6\u66F4\u4E30\u5BCC")),n.a.createElement("ul",null,n.a.createElement("li",null,"\u65B0\u589E\u4E86 rate\uFF0CtreeSelect, cascader \u7B49\u7EC4\u4EF6\u7684\u5185\u7F6E\u652F\u6301"))),n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement("strong",null,"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u5F00\u53D1\u66F4\u4FBF\u6377\uFF0C\u529F\u80FD\u66F4\u5F3A\u5927")),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("p",null,"props \u76F4\u63A5\u900F\u4F20\u4E86\uFF0C\u4E0D\u518D\u9700\u8981\u4ECE options \u5B57\u6BB5\u91CC\u53BB\u53D6\u5F97")),n.a.createElement("li",null,n.a.createElement("p",null,"onChange \u65B9\u6CD5\u7684\u5165\u53C2\u4E0D\u518D\u9700\u8981\u4F20 name \u4F5C\u4E3A\u7B2C\u4E00\u4E2A\u53C2\u6570\uFF08\u8FD9\u4E2A\u8BBE\u8BA1\u5176\u5B9E\u5F88\u4E0D\u81EA\u7136\u548C\u6CA1\u6709\u5FC5\u8981\uFF09\uFF0C\u540C\u65F6\u5982\u679C\u539F\u751F\u7EC4\u4EF6\u7684 onChange \u8FD4\u56DE\u7684\u662F event\uFF0C\u4E5F\u4F1A\u5904\u7406\u4E00\u6B65\u81EA\u52A8\u80FD\u62FF\u5230 value \u503C")),n.a.createElement("li",null,n.a.createElement("p",null,"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u5185\u7F6E\u4E86 onItemChange(namePath, value) \u65B9\u6CD5\uFF0C\u53EF\u4EE5\u65B9\u4FBF\u7684\u5728\u4E00\u4E2A\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u4E2D\u4FEE\u6539\u8868\u5355\u4EFB\u4F55\u6570\u636E\u7684\u503C")),n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement("strong",null,"\u8FD9\u4E9B\u7EC6\u8282\u7684\u76EE\u6807\uFF0C\u662F\u8BA9\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7684\u4E66\u5199\u8D34\u8FD1\u62FF\u6765\u4E00\u4E2A\u7EC4\u4EF6\u76F4\u63A5\u80FD\u7528\uFF0C\u800C\u4E0D\u662F\u50CF\u4E4B\u524D\u4E00\u6837\u518D\u7B80\u5355\u7684\u573A\u666F\u4E5F\u9700\u8981\u505A\u4E00\u6B65\u5305\u88C5\u5904\u7406\uFF0C\u4ECE\u539F\u672C\u7684\uFF1A")),n.a.createElement(V.a,{code:`const schema = {
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
};`,lang:"js"})))),n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement("strong",null,"\u6821\u9A8C\u4E30\u5BCC\u5EA6\u548C\u4F53\u9A8C\u5927\u5E45\u5347\u7EA7")),n.a.createElement("ul",null,n.a.createElement("li",null,"\u6821\u9A8C\u7684\u5C55\u793A & \u5C55\u793A\u5B9E\u9645\u7EC8\u4E8E\u7B26\u5408\u7528\u6237\u4E60\u60EF\u4E86"),n.a.createElement("li",null,"\u4E0D\u518D\u53EA\u652F\u6301 pattern \u6821\u9A8C\u4E86\uFF0C\u73B0\u5728\u652F\u6301\u5305\u62EC\u81EA\u5B9A\u4E49 validator \u7684\u6240\u6709 antd form \u652F\u6301\u7684\u6821\u9A8C"),n.a.createElement("li",null,"\u6821\u9A8C\u652F\u6301\u5F02\u6B65\u4E86"),n.a.createElement("li",null,"\u6821\u9A8C\u652F\u6301\u5916\u90E8\u6821\u9A8C\u7ED3\u679C\u56DE\u586B\u5C55\u793A\u4E86"))),n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement("strong",null,"\u5176\u4ED6")),n.a.createElement("ul",null,n.a.createElement("li",null,"\u672A\u538B\u7F29\u7684\u5305\u4F53\u79EF\u4ECE 76k -> 11k"),n.a.createElement("li",null,"\u5BF9 typescript \u7684\u5185\u7F6E\u652F\u6301"),n.a.createElement("li",null,"\u6E32\u67D3\u4F1A\u6839\u636E schema \u7684\u7ED3\u6784\u6765\u6E32\u67D3\uFF0C\u4E0D\u518D\u4F1A\u56E0\u4E3A formData \u503C\u7684\u987A\u5E8F\u53D8\u5316\u5F71\u54CD\u5230\u5C55\u793A"),n.a.createElement("li",null,"\u63D0\u4EA4\u7684 formData\uFF0C\u4E0D\u5C55\u793A\u7684 key \u4E0D\u4F1A\u8FD4\u56DE")))),n.a.createElement("h3",{id:"\u8BBE\u8BA1\u53D6\u820D"},n.a.createElement(E.AnchorLink,{to:"#\u8BBE\u8BA1\u53D6\u820D","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u8BBE\u8BA1\u53D6\u820D"),n.a.createElement("ol",null,n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement("strong",null,"\u6682\u65F6\u4E0D\u652F\u6301 fusion \u4E86"),"\uFF1Afusion \u4E0E antd \u5C55\u793A\u4E0A\u975E\u5E38\u7C7B\u4F3C\uFF0C\u4F46\u7EC4\u4EF6 api \u672C\u8EAB\u4EE5\u53CA\u6784\u5EFA\u5C42\u9762\u7684\u914D\u7F6E\u4E0A\u8FD8\u662F\u6709\u4E0D\u5C11\u4E0D\u540C\u7684\uFF0C\u5BF9\u4E24\u8005\u7684\u540C\u65F6\u652F\u6301\u82B1\u4E86\u5927\u91CF\u7684\u7CBE\u529B\u3002FormRender \u9009\u62E9\u6682\u65F6\u653E\u5F03 fusion\uFF0C\u66F4\u52A0\u8D34\u5408 antd\uFF0C\u5728\u529F\u80FD\u6DF1\u5165\u5B9E\u73B0\u548C\u8FED\u4EE3\u6548\u7387\u4E0A\u90FD\u4F1A\u6709\u5F88\u5927\u7684\u63D0\u9AD8\u3002\u4F46\u7EC4\u4EF6\u5E93\u7684\u5165\u53E3\u662F\u4E00\u76F4\u5F00\u653E\u7740\u7684\uFF08widgets props\uFF09\uFF0C\u6B22\u8FCE pr \u652F\u6301 fusion \u4FA7\u7684\u7EC4\u4EF6\u7684\u72EC\u7ACB\u652F\u6301\u3002")),n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement("strong",null,"\u53EA\u5141\u8BB8\u4F7F\u7528\u5B57\u7B26\u4E32\u7C7B\u578B\u7684\u51FD\u6570\u8868\u8FBE\u5F0F"),"\uFF1A\u7531\u4E8E schema \u53EF\u4EE5\u662F js \u5BF9\u8C61\uFF0C\u6240\u4EE5\u4E4B\u524D\u652F\u6301 schema \u91CC\u6709\u51FD\u6570\u7C7B\u578B\u7684\u8868\u8FBE\u5F0F\uFF0C\u4F1A\u5728\u6E32\u67D3\u524D\u8BA1\u7B97\u51FA\u51FD\u6570\u7684 return \u4F5C\u4E3A\u6E32\u67D3\u503C\u3002\u4F46\u7EC4\u4EF6\u7684 props \u4EE5\u53CA\u6821\u9A8C\u51FD\u6570\u53EF\u80FD\u672C\u8EAB\u5C31\u662F\u51FD\u6570\uFF0C\u8FD9\u4E9B\u51FD\u6570\u662F\u4E0D\u5E0C\u671B\u88AB\u63D0\u524D\u8BA1\u7B97\u7684\uFF0C\u800C\u53EA\u662F\u4F5C\u4E3A props \u4F20\u5165\u3002FR \u5E76\u6CA1\u6709\u5F88\u597D\u7684\u529E\u6CD5\u533A\u5206\u4E00\u4E2A\u51FD\u6570\u662F\u9700\u8981\u88AB\u76F4\u63A5\u6267\u884C\u8FD8\u662F\u539F\u6837\u4F5C\u4E3A\u51FD\u6570\u900F\u4F20\uFF0C\u6240\u4EE5\u8FD9\u91CC\u7684\u53D6\u820D\u662F\uFF0C\u4E0D\u5141\u8BB8\u51FD\u6570 props \u6216\u8005\u4E0D\u5141\u8BB8\u51FD\u6570\u5F0F\u7684\u8868\u8FBE\u5F0F\u3002\u7531\u4E8E\u8868\u8FBE\u5F0F\u5DF2\u7ECF\u6709\u5B57\u7B26\u4E32\u7684\u4E66\u5199\u65B9\u5F0F\uFF0C\u529F\u80FD\u662F\u5B8C\u5168\u7B49\u4EF7\u7684\uFF0C\u6240\u4EE5\u4E3A\u4E86\u5141\u8BB8\u51FD\u6570\u4F5C\u4E3A props\uFF0C\u6211\u4EEC\u4E0D\u518D\u652F\u6301\u51FD\u6570\u4F5C\u4E3A\u8868\u8FBE\u5F0F\u3002"),n.a.createElement(V.a,{code:`showMore: {
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
