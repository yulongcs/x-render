(window.webpackJsonp=window.webpackJsonp||[]).push([[47,10],{"0zqC":function(Tn,yn,e){"use strict";e.r(yn);var z=e("tJVT"),n=e("q1tI"),m=e.n(n),x=e("wx14"),ce=e("rePB"),W=e("ODXe"),Ne=e("U8pU"),Pe=e("Ff2n"),ve=e("VTBJ"),fn=e("TSYQ"),Be=e.n(fn),wn=e("Zm9Q"),Kn=e("5Z9U"),On=e("6cGi"),hn=e("KQm4"),Xe=e("wgJM"),$n=e("t23M");function Mn(a){var i=Object(n.useRef)(),p=Object(n.useRef)(!1);function E(){for(var F=arguments.length,b=new Array(F),O=0;O<F;O++)b[O]=arguments[O];p.current||(Xe.a.cancel(i.current),i.current=Object(Xe.a)(function(){a.apply(void 0,b)}))}return Object(n.useEffect)(function(){return function(){p.current=!0,Xe.a.cancel(i.current)}},[]),E}function Rn(a){var i=Object(n.useRef)([]),p=Object(n.useState)({}),E=Object(W.a)(p,2),F=E[1],b=Object(n.useRef)(typeof a=="function"?a():a),O=Mn(function(){var M=b.current;i.current.forEach(function($){M=$(M)}),i.current=[],b.current=M,F({})});function R(M){i.current.push(M),O()}return[b.current,R]}var We=e("4IlW");function _n(a,i){var p,E=a.prefixCls,F=a.id,b=a.active,O=a.rtl,R=a.tab,M=R.key,$=R.tab,V=R.disabled,Y=R.closeIcon,J=a.tabBarGutter,se=a.tabPosition,Q=a.closable,X=a.renderWrapper,oe=a.removeAriaLabel,U=a.editable,ee=a.onClick,re=a.onRemove,Z=a.onFocus,ue="".concat(E,"-tab");n.useEffect(function(){return re},[]);var _={};se==="top"||se==="bottom"?_[O?"marginLeft":"marginRight"]=J:_.marginBottom=J;var be=U&&Q!==!1&&!V;function te(ie){V||ee(ie)}function me(ie){ie.preventDefault(),ie.stopPropagation(),U.onEdit("remove",{key:M,event:ie})}var pe=n.createElement("div",{key:M,ref:i,className:Be()(ue,(p={},Object(ce.a)(p,"".concat(ue,"-with-remove"),be),Object(ce.a)(p,"".concat(ue,"-active"),b),Object(ce.a)(p,"".concat(ue,"-disabled"),V),p)),style:_,onClick:te},n.createElement("div",{role:"tab","aria-selected":b,id:F&&"".concat(F,"-tab-").concat(M),className:"".concat(ue,"-btn"),"aria-controls":F&&"".concat(F,"-panel-").concat(M),"aria-disabled":V,tabIndex:V?null:0,onClick:function(H){H.stopPropagation(),te(H)},onKeyDown:function(H){[We.a.SPACE,We.a.ENTER].includes(H.which)&&(H.preventDefault(),te(H))},onFocus:Z},$),be&&n.createElement("button",{type:"button","aria-label":oe||"remove",tabIndex:0,className:"".concat(ue,"-remove"),onClick:function(H){H.stopPropagation(),me(H)}},Y||U.removeIcon||"\xD7"));return X&&(pe=X(pe)),pe}var Vn=n.forwardRef(_n),et={width:0,height:0,left:0,top:0};function ct(a,i,p){return Object(n.useMemo)(function(){for(var E,F=new Map,b=i.get((E=a[0])===null||E===void 0?void 0:E.key)||et,O=b.left+b.width,R=0;R<a.length;R+=1){var M=a[R].key,$=i.get(M);if(!$){var V;$=i.get((V=a[R-1])===null||V===void 0?void 0:V.key)||et}var Y=F.get(M)||Object(ve.a)({},$);Y.right=O-Y.left-Y.width,F.set(M,Y)}return F},[a.map(function(E){return E.key}).join("_"),i,p])}var D={width:0,height:0,left:0,top:0,right:0};function A(a,i,p,E,F){var b=F.tabs,O=F.tabPosition,R=F.rtl,M,$,V;["top","bottom"].includes(O)?(M="width",$=R?"right":"left",V=Math.abs(i.left)):(M="height",$="top",V=-i.top);var Y=i[M],J=p[M],se=E[M],Q=Y;return J+se>Y&&(Q=Y-se),Object(n.useMemo)(function(){if(!b.length)return[0,0];for(var X=b.length,oe=X,U=0;U<X;U+=1){var ee=a.get(b[U].key)||D;if(ee[$]+ee[M]>V+Q){oe=U-1;break}}for(var re=0,Z=X-1;Z>=0;Z-=1){var ue=a.get(b[Z].key)||D;if(ue[$]<V){re=Z+1;break}}return[re,oe]},[a,V,Q,O,b.map(function(X){return X.key}).join("_"),R])}var j=e("Gytx"),d=e.n(j),u=e("Kwbf");function h(a,i){var p=a.prefixCls,E=a.invalidate,F=a.item,b=a.renderItem,O=a.responsive,R=a.registerSize,M=a.itemKey,$=a.className,V=a.style,Y=a.children,J=a.display,se=a.order,Q=a.component,X=Q===void 0?"div":Q,oe=Object(Pe.a)(a,["prefixCls","invalidate","item","renderItem","responsive","registerSize","itemKey","className","style","children","display","order","component"]),U=O&&!J;function ee(be){R(M,be)}n.useEffect(function(){return function(){ee(null)}},[]);var re=b&&F!==void 0?b(F):Y,Z;E||(Z={opacity:U?0:1,height:U?0:void 0,overflowY:U?"hidden":void 0,order:O?se:void 0,pointerEvents:U?"none":void 0});var ue={};U&&(ue["aria-hidden"]=!0);var _=n.createElement(X,Object(x.a)({className:Be()(!E&&p,$),style:Object(ve.a)(Object(ve.a)({},Z),V)},ue,oe,{ref:i}),re);return O&&(_=n.createElement($n.default,{onResize:function(te){var me=te.offsetWidth;ee(me)}},_)),_}var y=n.forwardRef(h);y.displayName="Item";var C=y;function r(){var a=Object(n.useState)({}),i=Object(W.a)(a,2),p=i[1],E=Object(n.useRef)([]),F=Object(n.useRef)(!1),b=0,O=0;Object(n.useEffect)(function(){return function(){F.current=!0}},[]);function R(M){var $=b;b+=1,E.current.length<$+1&&(E.current[$]=M);var V=E.current[$];function Y(J){E.current[$]=typeof J=="function"?J(E.current[$]):J,Xe.a.cancel(O),O=Object(Xe.a)(function(){F.current||p({})})}return[V,Y]}return R}var l=function(i,p){var E=n.useContext(B);if(!E){var F=i.component,b=F===void 0?"div":F,O=Object(Pe.a)(i,["component"]);return n.createElement(b,Object(x.a)({},O,{ref:p}))}var R=E.className,M=Object(Pe.a)(E,["className"]),$=i.className,V=Object(Pe.a)(i,["className"]);return n.createElement(B.Provider,{value:null},n.createElement(C,Object(x.a)({ref:p,className:Be()(R,$)},M,V)))},s=n.forwardRef(l);s.displayName="RawItem";var w=s,B=n.createContext(null),S="responsive",c="invalidate";function I(a){return"+ ".concat(a.length," ...")}function v(a,i){var p=a.prefixCls,E=p===void 0?"rc-overflow":p,F=a.data,b=F===void 0?[]:F,O=a.renderItem,R=a.renderRawItem,M=a.itemKey,$=a.itemWidth,V=$===void 0?10:$,Y=a.ssr,J=a.style,se=a.className,Q=a.maxCount,X=a.renderRest,oe=a.renderRawRest,U=a.suffix,ee=a.component,re=ee===void 0?"div":ee,Z=a.itemComponent,ue=a.onVisibleChange,_=Object(Pe.a)(a,["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"]),be=r(),te=Y==="full",me=be(null),pe=Object(W.a)(me,2),ie=pe[0],H=pe[1],de=ie||0,ye=be(new Map),ge=Object(W.a)(ye,2),Oe=ge[0],Le=ge[1],Ee=be(0),Fe=Object(W.a)(Ee,2),Ke=Fe[0],we=Fe[1],Ae=be(0),De=Object(W.a)(Ae,2),$e=De[0],_e=De[1],Ve=be(0),ze=Object(W.a)(Ve,2),Qe=ze[0],xe=ze[1],jn=Object(n.useState)(null),an=Object(W.a)(jn,2),ke=an[0],ln=an[1],bn=Object(n.useState)(null),En=Object(W.a)(bn,2),Ie=En[0],He=En[1],en=n.useMemo(function(){return Ie===null&&te?Number.MAX_SAFE_INTEGER:Ie||0},[Ie,ie]),Ze=Object(n.useState)(!1),Ln=Object(W.a)(Ze,2),Jn=Ln[0],xn=Ln[1],rn="".concat(E,"-item"),Dn=Math.max(Ke,$e),on=b.length&&Q===S,An=Q===c,nn=on||typeof Q=="number"&&b.length>Q,sn=Object(n.useMemo)(function(){var he=b;return on?ie===null&&te?he=b:he=b.slice(0,Math.min(b.length,de/V)):typeof Q=="number"&&(he=b.slice(0,Q)),he},[b,V,ie,Q,on]),Pn=Object(n.useMemo)(function(){return on?b.slice(en+1):b.slice(sn.length)},[b,sn,on,en]),mn=Object(n.useCallback)(function(he,Re){var Me;return typeof M=="function"?M(he):(Me=M&&(he==null?void 0:he[M]))!==null&&Me!==void 0?Me:Re},[M]),qe=Object(n.useCallback)(O||function(he){return he},[O]);function Ge(he,Re){He(he),Re||(xn(he<b.length-1),ue==null||ue(he))}function Yn(he,Re){H(Re.clientWidth)}function Hn(he,Re){Le(function(Me){var tn=new Map(Me);return Re===null?tn.delete(he):tn.set(he,Re),tn})}function tt(he,Re){_e(Re),we($e)}function Cn(he,Re){xe(Re)}function gn(he){return Oe.get(mn(sn[he],he))}n.useLayoutEffect(function(){if(de&&Dn&&sn){var he=Qe,Re=sn.length,Me=Re-1;if(!Re){Ge(0),ln(null);return}for(var tn=0;tn<Re;tn+=1){var kn=gn(tn);if(kn===void 0){Ge(tn-1,!0);break}if(he+=kn,tn===Me-1&&he+gn(Me)<=de){Ge(Me),ln(null);break}else if(he+Dn>de){Ge(tn-1),ln(he-kn-Qe+$e);break}else if(tn===Me){Ge(Me),ln(he-Qe);break}}U&&gn(0)+Qe>de&&ln(null)}},[de,Oe,$e,Qe,mn,sn]);var Gn=Jn&&!!Pn.length,Fn={};ke!==null&&on&&(Fn={position:"absolute",left:ke,top:0});var pn={prefixCls:rn,responsive:on,component:Z,invalidate:An},Qn=R?function(he,Re){var Me=mn(he,Re);return n.createElement(B.Provider,{key:Me,value:Object(ve.a)(Object(ve.a)({},pn),{},{order:Re,item:he,itemKey:Me,registerSize:Hn,display:Re<=en})},R(he,Re))}:function(he,Re){var Me=mn(he,Re);return n.createElement(C,Object(x.a)({},pn,{order:Re,key:Me,item:he,renderItem:qe,itemKey:Me,registerSize:Hn,display:Re<=en}))},Bn,Xn={order:Gn?en:Number.MAX_SAFE_INTEGER,className:"".concat(rn,"-rest"),registerSize:tt,display:Gn};if(oe)oe&&(Bn=n.createElement(B.Provider,{value:Object(ve.a)(Object(ve.a)({},pn),Xn)},oe(Pn)));else{var dn=X||I;Bn=n.createElement(C,Object(x.a)({},pn,Xn),typeof dn=="function"?dn(Pn):dn)}var In=n.createElement(re,Object(x.a)({className:Be()(!An&&E,se),style:J,ref:i},_),sn.map(Qn),nn?Bn:null,U&&n.createElement(C,Object(x.a)({},pn,{order:en,className:"".concat(rn,"-suffix"),registerSize:Cn,display:!0,style:Fn}),U));return on&&(In=n.createElement($n.default,{onResize:Yn},In)),In}var t=n.forwardRef(v);t.displayName="Overflow",t.Item=w,t.RESPONSIVE=S,t.INVALIDATE=c;var g=t,o=g,P=e("1OyB"),T=e("vuIU"),L=e("Ji7U"),k=e("LK+K"),G=e("bT9E"),le=e("YrtM"),Se=n.createContext(null);function Te(a,i){var p=Object(ve.a)({},a);return Object.keys(i).forEach(function(E){var F=i[E];F!==void 0&&(p[E]=F)}),p}function cn(a){var i=a.children,p=a.locked,E=Object(Pe.a)(a,["children","locked"]),F=n.useContext(Se),b=Object(le.a)(function(){return Te(F,E)},[F,E],function(O,R){return!p&&(O[0]!==R[0]||!d()(O[1],R[1]))});return n.createElement(Se.Provider,{value:b},i)}function Sn(a,i,p,E){var F=n.useContext(Se),b=F.activeKey,O=F.onActive,R=F.onInactive,M={active:b===a};return i||(M.onMouseEnter=function($){p==null||p({key:a,domEvent:$}),O(a)},M.onMouseLeave=function($){E==null||E({key:a,domEvent:$}),R(a)}),M}function Wn(a){var i=a.item,p=Object(Pe.a)(a,["item"]);return Object.defineProperty(p,"item",{get:function(){return Object(u.a)(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),i}}),p}function f(a){var i=a.icon,p=a.props,E=a.children,F;return typeof i=="function"?F=n.createElement(i,Object(ve.a)({},p)):F=i,F||E||null}function N(a){var i=n.useContext(Se),p=i.mode,E=i.rtl,F=i.inlineIndent;if(p!=="inline")return null;var b=a;return E?{paddingRight:b*F}:{paddingLeft:b*F}}var K=[],fe=n.createContext(null);function ne(){return n.useContext(fe)}var je=n.createContext(K);function Ue(a){var i=n.useContext(je);return n.useMemo(function(){return a!==void 0?[].concat(Object(hn.a)(i),[a]):i},[i,a])}var Ye=n.createContext(null),Ut=n.createContext(null);function zt(a,i){return a===void 0?null:"".concat(a,"-").concat(i)}function Jt(a){var i=n.useContext(Ut);return zt(i,a)}var ba=function(a){Object(L.a)(p,a);var i=Object(k.a)(p);function p(){return Object(P.a)(this,p),i.apply(this,arguments)}return Object(T.a)(p,[{key:"render",value:function(){var F=this.props,b=F.title,O=F.attribute,R=F.elementRef,M=Object(Pe.a)(F,["title","attribute","elementRef"]),$=Object(G.a)(M,["eventKey"]);return Object(u.a)(!O,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),n.createElement(o.Item,Object(x.a)({},O,{title:typeof b=="string"?b:void 0},$,{ref:R}))}}]),p}(n.Component),Ea=function(i){var p,E=i.style,F=i.className,b=i.eventKey,O=i.disabled,R=i.itemIcon,M=i.children,$=i.role,V=i.onMouseEnter,Y=i.onMouseLeave,J=i.onClick,se=i.onKeyDown,Q=i.onFocus,X=Object(Pe.a)(i,["style","className","eventKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"]),oe=Jt(b),U=n.useContext(Se),ee=U.prefixCls,re=U.onItemClick,Z=U.disabled,ue=U.overflowDisabled,_=U.itemIcon,be=U.selectedKeys,te=U.onActive,me="".concat(ee,"-item"),pe=n.useRef(),ie=n.useRef(),H=Z||O,de=Ue(b),ye=function(Ve){return{key:b,keyPath:de,item:pe.current,domEvent:Ve}},ge=R||_,Oe=Sn(b,H,V,Y),Le=Oe.active,Ee=Object(Pe.a)(Oe,["active"]),Fe=be.includes(b),Ke=N(de.length),we=function(Ve){if(!H){var ze=ye(Ve);J==null||J(Wn(ze)),re(ze)}},Ae=function(Ve){if(se==null||se(Ve),Ve.which===We.a.ENTER){var ze=ye(Ve);J==null||J(Wn(ze)),re(ze)}},De=function(Ve){te(b),Q==null||Q(Ve)},$e={};return i.role==="option"&&($e["aria-selected"]=Fe),n.createElement(ba,Object(x.a)({ref:pe,elementRef:ie,role:$===null?"none":$||"menuitem",tabIndex:O?null:-1,"data-menu-id":ue&&oe?null:oe},X,Ee,$e,{component:"li","aria-disabled":O,style:Object(ve.a)(Object(ve.a)({},Ke),E),className:Be()(me,(p={},Object(ce.a)(p,"".concat(me,"-active"),Le),Object(ce.a)(p,"".concat(me,"-selected"),Fe),Object(ce.a)(p,"".concat(me,"-disabled"),H),p),F),onClick:we,onKeyDown:Ae,onFocus:De}),M,n.createElement(f,{props:Object(ve.a)(Object(ve.a)({},i),{},{isSelected:Fe}),icon:ge}))};function Ca(a){var i=a.eventKey,p=ne(),E=Ue(i);return n.useEffect(function(){if(p)return p.registerPath(i,E),function(){p.unregisterPath(i,E)}},[E]),p?null:n.createElement(Ea,a)}var jt=Ca;function Dt(a,i){return Object(wn.a)(a).map(function(p,E){if(n.isValidElement(p)){var F=p.key;return F==null&&(F="tmp_key-".concat([].concat(Object(hn.a)(i),[E]).join("-"))),n.cloneElement(p,{key:F,eventKey:F})}return p})}function nt(a){var i=n.useRef(a);i.current=a;var p=n.useCallback(function(){for(var E,F=arguments.length,b=new Array(F),O=0;O<F;O++)b[O]=arguments[O];return(E=i.current)===null||E===void 0?void 0:E.call.apply(E,[i].concat(b))},[]);return a?p:void 0}var Fa=function(i,p){var E=i.className,F=i.children,b=Object(Pe.a)(i,["className","children"]),O=n.useContext(Se),R=O.prefixCls,M=O.mode;return n.createElement("ul",Object(x.a)({className:Be()(R,"".concat(R,"-sub"),"".concat(R,"-").concat(M==="inline"?"inline":"vertical"),E)},b,{"data-menu-list":!0,ref:p}),F)},Yt=n.forwardRef(Fa);Yt.displayName="SubMenuList";var Ht=Yt,Oa=e("uciX"),Un={adjustX:1,adjustY:1},Gt={topLeft:{points:["bl","tl"],overflow:Un,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Un,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:Un,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:Un,offset:[4,0]}},Ra={topLeft:{points:["bl","tl"],overflow:Un,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Un,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:Un,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:Un,offset:[4,0]}},pr=Gt;function Qt(a,i,p){if(i)return i;if(p)return p[a]||p.other}var Sa={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function ja(a){var i=a.prefixCls,p=a.visible,E=a.children,F=a.popup,b=a.popupClassName,O=a.popupOffset,R=a.disabled,M=a.mode,$=a.onVisibleChange,V=n.useContext(Se),Y=V.getPopupContainer,J=V.rtl,se=V.subMenuOpenDelay,Q=V.subMenuCloseDelay,X=V.builtinPlacements,oe=V.triggerSubMenuAction,U=V.forceSubMenuRender,ee=V.motion,re=V.defaultMotions,Z=n.useState(!1),ue=Object(W.a)(Z,2),_=ue[0],be=ue[1],te=J?Object(ve.a)(Object(ve.a)({},Ra),X):Object(ve.a)(Object(ve.a)({},Gt),X),me=Sa[M],pe=Qt(M,ee,re),ie=Object(ve.a)(Object(ve.a)({},pe),{},{leavedClassName:"".concat(i,"-hidden"),removeOnLeave:!1,motionAppear:!0}),H=n.useRef();return n.useEffect(function(){return H.current=Object(Xe.a)(function(){be(p)}),function(){Xe.a.cancel(H.current)}},[p]),n.createElement(Oa.a,{prefixCls:i,popupClassName:Be()("".concat(i,"-popup"),Object(ce.a)({},"".concat(i,"-rtl"),J),b),stretch:M==="horizontal"?"minWidth":null,getPopupContainer:Y,builtinPlacements:te,popupPlacement:me,popupVisible:_,popup:F,popupAlign:O&&{offset:O},action:R?[]:[oe],mouseEnterDelay:se,mouseLeaveDelay:Q,onPopupVisibleChange:$,forceRender:U,popupMotion:ie},E)}var Da=e("8XRh");function Aa(a){var i=a.id,p=a.open,E=a.keyPath,F=a.children,b="inline",O=n.useContext(Se),R=O.prefixCls,M=O.forceSubMenuRender,$=O.motion,V=O.defaultMotions,Y=O.mode,J=n.useRef(!1);J.current=Y===b;var se=n.useState(!J.current),Q=Object(W.a)(se,2),X=Q[0],oe=Q[1],U=J.current?p:!1;n.useEffect(function(){J.current&&oe(!1)},[Y]);var ee=Object(ve.a)({},Qt(b,$,V));E.length>1&&(ee.motionAppear=!1);var re=ee.onVisibleChanged;return ee.onVisibleChanged=function(Z){return!J.current&&!Z&&oe(!0),re==null?void 0:re(Z)},X?null:n.createElement(cn,{mode:b,locked:!J.current},n.createElement(Da.default,Object(x.a)({visible:U},ee,{forceRender:M,removeOnLeave:!1,leavedClassName:"".concat(R,"-hidden")}),function(Z){var ue=Z.className,_=Z.style;return n.createElement(Ht,{id:i,className:ue,style:_},F)}))}var Pa=function(i){var p,E=i.style,F=i.className,b=i.title,O=i.eventKey,R=i.disabled,M=i.internalPopupClose,$=i.children,V=i.itemIcon,Y=i.expandIcon,J=i.popupClassName,se=i.popupOffset,Q=i.onClick,X=i.onMouseEnter,oe=i.onMouseLeave,U=i.onTitleClick,ee=i.onTitleMouseEnter,re=i.onTitleMouseLeave,Z=Object(Pe.a)(i,["style","className","title","eventKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"]),ue=Jt(O),_=n.useContext(Se),be=_.prefixCls,te=_.mode,me=_.openKeys,pe=_.disabled,ie=_.overflowDisabled,H=_.activeKey,de=_.selectedKeys,ye=_.itemIcon,ge=_.expandIcon,Oe=_.onItemClick,Le=_.onOpenChange,Ee=_.onActive,Fe=n.useContext(Ye),Ke=Fe.isSubPathKey,we=Ue(),Ae="".concat(be,"-submenu"),De=pe||R,$e=n.useRef(),_e=n.useRef(),Ve=V||ye,ze=Y||ge,Qe=me.includes(O),xe=!ie&&Qe,jn=Ke(de,O),an=Sn(O,De,ee,re),ke=an.active,ln=Object(Pe.a)(an,["active"]),bn=n.useState(!1),En=Object(W.a)(bn,2),Ie=En[0],He=En[1],en=function(Ge){De||He(Ge)},Ze=function(Ge){en(!0),X==null||X({key:O,domEvent:Ge})},Ln=function(Ge){en(!1),oe==null||oe({key:O,domEvent:Ge})},Jn=n.useMemo(function(){return ke||(te!=="inline"?Ie||Ke([H],O):!1)},[te,ke,H,Ie,O,Ke]),xn=N(we.length),rn=function(Ge){De||(U==null||U({key:O,domEvent:Ge}),te==="inline"&&Le(O,!Qe))},Dn=nt(function(qe){Q==null||Q(Wn(qe)),Oe(qe)}),on=function(Ge){te!=="inline"&&Le(O,Ge)},An=function(){Ee(O)},nn=ue&&"".concat(ue,"-popup"),sn=n.createElement("div",Object(x.a)({role:"menuitem",style:xn,className:"".concat(Ae,"-title"),tabIndex:De?null:-1,ref:$e,title:typeof b=="string"?b:null,"data-menu-id":ie&&ue?null:ue,"aria-expanded":xe,"aria-haspopup":!0,"aria-controls":nn,"aria-disabled":De,onClick:rn,onFocus:An},ln),b,n.createElement(f,{icon:te!=="horizontal"?ze:null,props:Object(ve.a)(Object(ve.a)({},i),{},{isOpen:xe,isSubMenu:!0})},n.createElement("i",{className:"".concat(Ae,"-arrow")}))),Pn=n.useRef(te);if(te!=="inline"&&(Pn.current=we.length>1?"vertical":te),!ie){var mn=Pn.current;sn=n.createElement(ja,{mode:mn,prefixCls:Ae,visible:!M&&xe&&te!=="inline",popupClassName:J,popupOffset:se,popup:n.createElement(cn,{mode:mn},n.createElement(Ht,{id:nn,ref:_e},$)),disabled:De,onVisibleChange:on},sn)}return n.createElement(cn,{onItemClick:Dn,mode:te==="horizontal"?"vertical":te,itemIcon:Ve,expandIcon:ze},n.createElement(o.Item,Object(x.a)({role:"none"},Z,{component:"li",style:E,className:Be()(Ae,"".concat(Ae,"-").concat(te),F,(p={},Object(ce.a)(p,"".concat(Ae,"-open"),xe),Object(ce.a)(p,"".concat(Ae,"-active"),Jn),Object(ce.a)(p,"".concat(Ae,"-selected"),jn),Object(ce.a)(p,"".concat(Ae,"-disabled"),De),p)),onMouseEnter:Ze,onMouseLeave:Ln}),sn,!ie&&n.createElement(Aa,{id:nn,open:xe,keyPath:we},$)))};function Xt(a){var i=a.eventKey,p=a.children,E=Ue(i),F=Dt(p,E),b=ne();n.useEffect(function(){if(b)return b.registerPath(i,E),function(){b.unregisterPath(i,E)}},[E]);var O;return b?O=F:O=n.createElement(Pa,a,F),n.createElement(je.Provider,{value:E},O)}var Ba=e("x/xZ");function kt(a){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Object(Ba.a)(a)){var p=a.nodeName.toLowerCase(),E=["input","select","textarea","button"].includes(p)||a.isContentEditable||p==="a"&&!!a.getAttribute("href"),F=a.getAttribute("tabindex"),b=Number(F),O=null;return F&&!Number.isNaN(b)?O=b:E&&O===null&&(O=0),E&&a.disabled&&(O=null),O!==null&&(O>=0||i&&O<0)}return!1}function Zt(a){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,p=Object(hn.a)(a.querySelectorAll("*")).filter(function(E){return kt(E,i)});return kt(a,i)&&p.unshift(a),p}var mt=null;function fr(){mt=document.activeElement}function hr(){mt=null}function vr(){if(mt)try{mt.focus()}catch(a){}}function gr(a,i){if(i.keyCode===9){var p=Zt(a),E=p[i.shiftKey?0:p.length-1],F=E===document.activeElement||a===document.activeElement;if(F){var b=p[i.shiftKey?p.length-1:0];b.focus(),i.preventDefault()}}}var At=We.a.LEFT,Pt=We.a.RIGHT,Bt=We.a.UP,pt=We.a.DOWN,ft=We.a.ENTER,qt=We.a.ESC,_t=[Bt,pt,At,Pt];function Ia(a,i,p,E){var F,b,O,R,M="prev",$="next",V="children",Y="parent";if(a==="inline"&&E===ft)return{inlineTrigger:!0};var J=(F={},Object(ce.a)(F,Bt,M),Object(ce.a)(F,pt,$),F),se=(b={},Object(ce.a)(b,At,p?$:M),Object(ce.a)(b,Pt,p?M:$),Object(ce.a)(b,pt,V),Object(ce.a)(b,ft,V),b),Q=(O={},Object(ce.a)(O,Bt,M),Object(ce.a)(O,pt,$),Object(ce.a)(O,ft,V),Object(ce.a)(O,qt,Y),Object(ce.a)(O,At,p?V:Y),Object(ce.a)(O,Pt,p?Y:V),O),X={inline:J,horizontal:se,vertical:Q,inlineSub:J,horizontalSub:Q,verticalSub:Q},oe=(R=X["".concat(a).concat(i?"":"Sub")])===null||R===void 0?void 0:R[E];switch(oe){case M:return{offset:-1,sibling:!0};case $:return{offset:1,sibling:!0};case Y:return{offset:-1,sibling:!1};case V:return{offset:1,sibling:!1};default:return null}}function Na(a){for(var i=a;i;){if(i.getAttribute("data-menu-list"))return i;i=i.parentElement}return null}function Ta(a,i){for(var p=a||document.activeElement;p;){if(i.has(p))return p;p=p.parentElement}return null}function wa(a,i){var p=Zt(a,!0);return p.filter(function(E){return i.has(E)})}function ea(a,i,p){var E=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!a)return null;var F=wa(a,i),b=F.length,O=F.findIndex(function(R){return p===R});return E<0?O===-1?O=b-1:O-=1:E>0&&(O+=1),O=(O+b)%b,F[O]}function Ka(a,i,p,E,F,b,O,R,M,$){var V=n.useRef(),Y=n.useRef();Y.current=i;var J=function(){Xe.a.cancel(V.current)};return n.useEffect(function(){return function(){J()}},[]),function(se){var Q=se.which;if([].concat(_t,[ft,qt]).includes(Q)){var X,oe,U,ee=function(){X=new Set,oe=new Map,U=new Map;var ye=b();return ye.forEach(function(ge){var Oe=document.querySelector("[data-menu-id='".concat(zt(E,ge),"']"));Oe&&(X.add(Oe),U.set(Oe,ge),oe.set(ge,Oe))}),X};ee();var re=oe.get(i),Z=Ta(re,X),ue=U.get(Z),_=Ia(a,O(ue,!0).length===1,p,Q);if(!_)return;_t.includes(Q)&&se.preventDefault();var be=function(ye){if(ye){var ge=ye,Oe=ye.querySelector("a");(Oe==null?void 0:Oe.getAttribute("href"))&&(ge=Oe);var Le=U.get(ye);R(Le),J(),V.current=Object(Xe.a)(function(){Y.current===Le&&ge.focus()})}};if(_.sibling||!Z){var te;!Z||a==="inline"?te=F.current:te=Na(Z);var me=ea(te,X,Z,_.offset);be(me)}else if(_.inlineTrigger)M(ue);else if(_.offset>0)M(ue,!0),J(),V.current=Object(Xe.a)(function(){ee();var de=Z.getAttribute("aria-controls"),ye=document.getElementById(de),ge=ea(ye,X);be(ge)},5);else if(_.offset<0){var pe=O(ue,!0),ie=pe[pe.length-2],H=oe.get(ie);M(ie,!1),be(H)}}$==null||$(se)}}var Ma=Math.random().toFixed(5).toString().slice(2),na=0;function Wa(a){var i=Object(On.a)(a,{value:a}),p=Object(W.a)(i,2),E=p[0],F=p[1];return n.useEffect(function(){na+=1;var b="".concat(Ma,"-").concat(na);F("rc-menu-uuid-".concat(b))},[]),E}var yr=e("p8sG");function La(a){Promise.resolve().then(a)}var It="__RC_UTIL_PATH_SPLIT__",ta=function(i){return i.join(It)},xa=function(i){return i.split(It)},Nt="rc-menu-more";function $a(){var a=n.useState({}),i=Object(W.a)(a,2),p=i[1],E=Object(n.useRef)(new Map),F=Object(n.useRef)(new Map),b=n.useState([]),O=Object(W.a)(b,2),R=O[0],M=O[1],$=Object(n.useRef)(0),V=Object(n.useCallback)(function(U,ee){var re=ta(ee);F.current.set(re,U),E.current.set(U,re),$.current+=1;var Z=$.current;La(function(){Z===$.current&&p({})})},[]),Y=Object(n.useCallback)(function(U,ee){var re=ta(ee);F.current.delete(re),E.current.delete(U)},[]),J=Object(n.useCallback)(function(U){M(U)},[]),se=Object(n.useCallback)(function(U,ee){var re=E.current.get(U)||"",Z=xa(re);return ee&&R.includes(Z[0])&&Z.unshift(Nt),Z},[R]),Q=Object(n.useCallback)(function(U,ee){return U.some(function(re){var Z=se(re,!0);return Z.includes(ee)})},[se]),X=function(){var ee=Object(hn.a)(E.current.keys());return R.length&&ee.push(Nt),ee},oe=Object(n.useCallback)(function(U){var ee="".concat(E.current.get(U)).concat(It),re=new Set;return Object(hn.a)(F.current.keys()).forEach(function(Z){Z.startsWith(ee)&&re.add(F.current.get(Z))}),re},[]);return{registerPath:V,unregisterPath:Y,refreshOverflowKeys:J,isSubPathKey:Q,getKeyPath:se,getKeys:X,getSubPathKeys:oe}}var ht=[],Va=function(i){var p,E,F=i.prefixCls,b=F===void 0?"rc-menu":F,O=i.style,R=i.className,M=i.tabIndex,$=M===void 0?0:M,V=i.children,Y=i.direction,J=i.id,se=i.mode,Q=se===void 0?"vertical":se,X=i.inlineCollapsed,oe=i.disabled,U=i.disabledOverflow,ee=i.subMenuOpenDelay,re=ee===void 0?.1:ee,Z=i.subMenuCloseDelay,ue=Z===void 0?.1:Z,_=i.forceSubMenuRender,be=i.defaultOpenKeys,te=i.openKeys,me=i.activeKey,pe=i.defaultActiveFirst,ie=i.selectable,H=ie===void 0?!0:ie,de=i.multiple,ye=de===void 0?!1:de,ge=i.defaultSelectedKeys,Oe=i.selectedKeys,Le=i.onSelect,Ee=i.onDeselect,Fe=i.inlineIndent,Ke=Fe===void 0?24:Fe,we=i.motion,Ae=i.defaultMotions,De=i.triggerSubMenuAction,$e=De===void 0?"hover":De,_e=i.builtinPlacements,Ve=i.itemIcon,ze=i.expandIcon,Qe=i.overflowedIndicator,xe=Qe===void 0?"...":Qe,jn=i.getPopupContainer,an=i.onClick,ke=i.onOpenChange,ln=i.onKeyDown,bn=i.openAnimation,En=i.openTransitionName,Ie=Object(Pe.a)(i,["prefixCls","style","className","tabIndex","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName"]),He=Dt(V,ht),en=n.useState(!1),Ze=Object(W.a)(en,2),Ln=Ze[0],Jn=Ze[1],xn=n.useRef(),rn=Wa(J),Dn=Y==="rtl",on=n.useMemo(function(){return Q==="inline"&&X?["vertical",X]:[Q,!1]},[Q,X]),An=Object(W.a)(on,2),nn=An[0],sn=An[1],Pn=n.useState(0),mn=Object(W.a)(Pn,2),qe=mn[0],Ge=mn[1],Yn=qe>=He.length-1||nn!=="horizontal"||U,Hn=Object(On.a)(be,{value:te,postState:function(q){return q||ht}}),tt=Object(W.a)(Hn,2),Cn=tt[0],gn=tt[1],Gn=n.useState(Cn),Fn=Object(W.a)(Gn,2),pn=Fn[0],Qn=Fn[1],Bn=nn==="inline",Xn=n.useRef(!1);n.useEffect(function(){Bn&&Qn(Cn)},[Cn]),n.useEffect(function(){if(!Xn.current){Xn.current=!0;return}if(Bn)gn(pn);else{var ae=[];gn(ae),ke==null||ke(ae)}},[Bn]);var dn=$a(),In=dn.registerPath,he=dn.unregisterPath,Re=dn.refreshOverflowKeys,Me=dn.isSubPathKey,tn=dn.getKeyPath,kn=dn.getKeys,gt=dn.getSubPathKeys,Mt=n.useMemo(function(){return{registerPath:In,unregisterPath:he}},[In,he]),Wt=n.useMemo(function(){return{isSubPathKey:Me}},[Me]);n.useEffect(function(){Re(Yn?ht:He.slice(qe+1).map(function(ae){return ae.key}))},[qe,Yn]);var Lt=Object(On.a)(me||pe&&((p=He[0])===null||p===void 0?void 0:p.key),{value:me}),at=Object(W.a)(Lt,2),yt=at[0],st=at[1],bt=nt(function(ae){st(ae)}),xt=nt(function(){st(void 0)}),Et=Object(On.a)(ge||[],{value:Oe,postState:function(q){return Array.isArray(q)?q:q==null?ht:[q]}}),Ct=Object(W.a)(Et,2),rt=Ct[0],Nn=Ct[1],Ft=function(q){if(!!H){var Ce=q.key,Je=rt.includes(Ce),un;Je?un=rt.filter(function(qn){return qn!==Ce}):ye?un=[].concat(Object(hn.a)(rt),[Ce]):un=[Ce],Nn(un);var zn=Object(ve.a)(Object(ve.a)({},q),{},{selectedKeys:un});Je?Ee==null||Ee(zn):Le==null||Le(zn)}},Ot=nt(function(ae){an==null||an(Wn(ae)),Ft(ae)}),ut=nt(function(ae,q){var Ce=Cn.filter(function(un){return un!==ae});if(q)Ce.push(ae);else if(nn!=="inline"){var Je=gt(ae);Ce=Ce.filter(function(un){return!Je.has(un)})}d()(Cn,Ce)||(gn(Ce),ke==null||ke(Ce))}),Zn=nt(jn),lt=function(q,Ce){var Je=Ce!=null?Ce:!Cn.includes(q);ut(q,Je)},ot=Ka(nn,yt,Dn,rn,xn,kn,tn,st,lt,ln);n.useEffect(function(){Jn(!0)},[]);var Rt=nn!=="horizontal"||U?He:He.map(function(ae,q){return n.createElement(cn,{key:ae.key,overflowDisabled:q>qe},ae)}),St=n.createElement(o,Object(x.a)({id:J,ref:xn,prefixCls:"".concat(b,"-overflow"),component:"ul",itemComponent:jt,className:Be()(b,"".concat(b,"-root"),"".concat(b,"-").concat(nn),R,(E={},Object(ce.a)(E,"".concat(b,"-inline-collapsed"),sn),Object(ce.a)(E,"".concat(b,"-rtl"),Dn),E)),dir:Y,style:O,role:"menu",tabIndex:$,data:Rt,renderRawItem:function(q){return q},renderRawRest:function(q){var Ce=q.length,Je=Ce?He.slice(-Ce):null;return n.createElement(Xt,{eventKey:Nt,title:xe,disabled:Yn,internalPopupClose:Ce===0},Je)},maxCount:nn!=="horizontal"||U?o.INVALIDATE:o.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(q){Ge(q)},onKeyDown:ot},Ie));return n.createElement(Ut.Provider,{value:rn},n.createElement(cn,{prefixCls:b,mode:nn,openKeys:Cn,rtl:Dn,disabled:oe,motion:Ln?we:null,defaultMotions:Ln?Ae:null,activeKey:yt,onActive:bt,onInactive:xt,selectedKeys:rt,inlineIndent:Ke,subMenuOpenDelay:re,subMenuCloseDelay:ue,forceSubMenuRender:_,builtinPlacements:_e,triggerSubMenuAction:$e,getPopupContainer:Zn,itemIcon:Ve,expandIcon:ze,onItemClick:Ot,onOpenChange:ut},n.createElement(Ye.Provider,{value:Wt},St),n.createElement(fe.Provider,{value:Mt},He)))},Ua=Va,za=function(i){var p=i.className,E=i.title,F=i.eventKey,b=i.children,O=Object(Pe.a)(i,["className","title","eventKey","children"]),R=n.useContext(Se),M=R.prefixCls,$="".concat(M,"-item-group");return n.createElement("li",Object(x.a)({},O,{onClick:function(Y){return Y.stopPropagation()},className:Be()($,p)}),n.createElement("div",{className:"".concat($,"-title"),title:typeof E=="string"?E:void 0},E),n.createElement("ul",{className:"".concat($,"-list")},b))};function Ja(a){var i=a.children,p=Object(Pe.a)(a,["children"]),E=Ue(p.eventKey),F=Dt(i,E),b=ne();return b?F:n.createElement(za,p,F)}function Ya(a){var i=a.className,p=a.style,E=n.useContext(Se),F=E.prefixCls,b=ne();return b?null:n.createElement("li",{className:Be()("".concat(F,"-item-divider"),i),style:p})}var it=Ua;it.Item=jt,it.SubMenu=Xt,it.ItemGroup=Ja,it.Divider=Ya;var Ha=it,Ga=e("eDIo");function Qa(a,i){var p=a.prefixCls,E=a.editable,F=a.locale,b=a.style;return!E||E.showAdd===!1?null:n.createElement("button",{ref:i,type:"button",className:"".concat(p,"-nav-add"),style:b,"aria-label":(F==null?void 0:F.addAriaLabel)||"Add tab",onClick:function(R){E.onEdit("add",{event:R})}},E.addIcon||"+")}var aa=n.forwardRef(Qa);function Xa(a,i){var p=a.prefixCls,E=a.id,F=a.tabs,b=a.locale,O=a.mobile,R=a.moreIcon,M=R===void 0?"More":R,$=a.moreTransitionName,V=a.style,Y=a.className,J=a.editable,se=a.tabBarGutter,Q=a.rtl,X=a.onTabClick,oe=Object(n.useState)(!1),U=Object(W.a)(oe,2),ee=U[0],re=U[1],Z=Object(n.useState)(null),ue=Object(W.a)(Z,2),_=ue[0],be=ue[1],te="".concat(E,"-more-popup"),me="".concat(p,"-dropdown"),pe=_!==null?"".concat(te,"-").concat(_):null,ie=b==null?void 0:b.dropdownAriaLabel,H=n.createElement(Ha,{onClick:function(Fe){var Ke=Fe.key,we=Fe.domEvent;X(Ke,we),re(!1)},id:te,tabIndex:-1,role:"listbox","aria-activedescendant":pe,selectedKeys:[_],"aria-label":ie!==void 0?ie:"expanded dropdown"},F.map(function(Ee){return n.createElement(jt,{key:Ee.key,id:"".concat(te,"-").concat(Ee.key),role:"option","aria-controls":E&&"".concat(E,"-panel-").concat(Ee.key),disabled:Ee.disabled},Ee.tab)}));function de(Ee){for(var Fe=F.filter(function($e){return!$e.disabled}),Ke=Fe.findIndex(function($e){return $e.key===_})||0,we=Fe.length,Ae=0;Ae<we;Ae+=1){Ke=(Ke+Ee+we)%we;var De=Fe[Ke];if(!De.disabled){be(De.key);return}}}function ye(Ee){var Fe=Ee.which;if(!ee){[We.a.DOWN,We.a.SPACE,We.a.ENTER].includes(Fe)&&(re(!0),Ee.preventDefault());return}switch(Fe){case We.a.UP:de(-1),Ee.preventDefault();break;case We.a.DOWN:de(1),Ee.preventDefault();break;case We.a.ESC:re(!1);break;case We.a.SPACE:case We.a.ENTER:_!==null&&X(_,Ee);break}}Object(n.useEffect)(function(){var Ee=document.getElementById(pe);Ee&&Ee.scrollIntoView&&Ee.scrollIntoView(!1)},[_]),Object(n.useEffect)(function(){ee||be(null)},[ee]);var ge=Object(ce.a)({},Q?"marginLeft":"marginRight",se);F.length||(ge.visibility="hidden",ge.order=1);var Oe=Be()(Object(ce.a)({},"".concat(me,"-rtl"),Q)),Le=O?null:n.createElement(Ga.default,{prefixCls:me,overlay:H,trigger:["hover"],visible:ee,transitionName:$,onVisibleChange:re,overlayClassName:Oe,mouseEnterDelay:.1,mouseLeaveDelay:.1},n.createElement("button",{type:"button",className:"".concat(p,"-nav-more"),style:ge,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":te,id:"".concat(E,"-more"),"aria-expanded":ee,onKeyDown:ye},M));return n.createElement("div",{className:Be()("".concat(p,"-nav-operations"),Y),style:V,ref:i},Le,n.createElement(aa,{prefixCls:p,locale:b,editable:J}))}var ka=n.forwardRef(Xa),Tt=Object(n.createContext)(null),Za=.1,ra=.01,vt=20,ia=Math.pow(.995,vt);function qa(a,i){var p=Object(n.useState)(),E=Object(W.a)(p,2),F=E[0],b=E[1],O=Object(n.useState)(0),R=Object(W.a)(O,2),M=R[0],$=R[1],V=Object(n.useState)(0),Y=Object(W.a)(V,2),J=Y[0],se=Y[1],Q=Object(n.useState)(),X=Object(W.a)(Q,2),oe=X[0],U=X[1],ee=Object(n.useRef)();function re(me){var pe=me.touches[0],ie=pe.screenX,H=pe.screenY;b({x:ie,y:H}),window.clearInterval(ee.current)}function Z(me){if(!!F){me.preventDefault();var pe=me.touches[0],ie=pe.screenX,H=pe.screenY;b({x:ie,y:H});var de=ie-F.x,ye=H-F.y;i(de,ye);var ge=Date.now();$(ge),se(ge-M),U({x:de,y:ye})}}function ue(){if(!!F&&(b(null),U(null),oe)){var me=oe.x/J,pe=oe.y/J,ie=Math.abs(me),H=Math.abs(pe);if(Math.max(ie,H)<Za)return;var de=me,ye=pe;ee.current=window.setInterval(function(){if(Math.abs(de)<ra&&Math.abs(ye)<ra){window.clearInterval(ee.current);return}de*=ia,ye*=ia,i(de*vt,ye*vt)},vt)}}var _=Object(n.useRef)();function be(me){var pe=me.deltaX,ie=me.deltaY,H=0,de=Math.abs(pe),ye=Math.abs(ie);de===ye?H=_.current==="x"?pe:ie:de>ye?(H=pe,_.current="x"):(H=ie,_.current="y"),i(-H,-H)&&me.preventDefault()}var te=Object(n.useRef)(null);te.current={onTouchStart:re,onTouchMove:Z,onTouchEnd:ue,onWheel:be},n.useEffect(function(){function me(de){te.current.onTouchStart(de)}function pe(de){te.current.onTouchMove(de)}function ie(de){te.current.onTouchEnd(de)}function H(de){te.current.onWheel(de)}return document.addEventListener("touchmove",pe,{passive:!1}),document.addEventListener("touchend",ie,{passive:!1}),a.current.addEventListener("touchstart",me,{passive:!1}),a.current.addEventListener("wheel",H),function(){document.removeEventListener("touchmove",pe),document.removeEventListener("touchend",ie)}},[])}function _a(){var a=Object(n.useRef)(new Map);function i(E){return a.current.has(E)||a.current.set(E,n.createRef()),a.current.get(E)}function p(E){a.current.delete(E)}return[i,p]}function sa(a,i){var p=n.useRef(a),E=n.useState({}),F=Object(W.a)(E,2),b=F[1];function O(R){var M=typeof R=="function"?R(p.current):R;M!==p.current&&i(M,p.current),p.current=M,b({})}return[p.current,O]}var ua=function(i){var p=i.position,E=i.prefixCls,F=i.extra;if(!F)return null;var b,O=F;return p==="right"&&(b=O.right||!O.left&&O||null),p==="left"&&(b=O.left||null),b?n.createElement("div",{className:"".concat(E,"-extra-content")},b):null};function er(a,i){var p,E=n.useContext(Tt),F=E.prefixCls,b=E.tabs,O=a.className,R=a.style,M=a.id,$=a.animated,V=a.activeKey,Y=a.rtl,J=a.extra,se=a.editable,Q=a.locale,X=a.tabPosition,oe=a.tabBarGutter,U=a.children,ee=a.onTabClick,re=a.onTabScroll,Z=Object(n.useRef)(),ue=Object(n.useRef)(),_=Object(n.useRef)(),be=Object(n.useRef)(),te=_a(),me=Object(W.a)(te,2),pe=me[0],ie=me[1],H=X==="top"||X==="bottom",de=sa(0,function(ae,q){H&&re&&re({direction:ae>q?"left":"right"})}),ye=Object(W.a)(de,2),ge=ye[0],Oe=ye[1],Le=sa(0,function(ae,q){!H&&re&&re({direction:ae>q?"top":"bottom"})}),Ee=Object(W.a)(Le,2),Fe=Ee[0],Ke=Ee[1],we=Object(n.useState)(0),Ae=Object(W.a)(we,2),De=Ae[0],$e=Ae[1],_e=Object(n.useState)(0),Ve=Object(W.a)(_e,2),ze=Ve[0],Qe=Ve[1],xe=Object(n.useState)(0),jn=Object(W.a)(xe,2),an=jn[0],ke=jn[1],ln=Object(n.useState)(0),bn=Object(W.a)(ln,2),En=bn[0],Ie=bn[1],He=Object(n.useState)(null),en=Object(W.a)(He,2),Ze=en[0],Ln=en[1],Jn=Object(n.useState)(null),xn=Object(W.a)(Jn,2),rn=xn[0],Dn=xn[1],on=Object(n.useState)(0),An=Object(W.a)(on,2),nn=An[0],sn=An[1],Pn=Object(n.useState)(0),mn=Object(W.a)(Pn,2),qe=mn[0],Ge=mn[1],Yn=Rn(new Map),Hn=Object(W.a)(Yn,2),tt=Hn[0],Cn=Hn[1],gn=ct(b,tt,De),Gn="".concat(F,"-nav-operations-hidden"),Fn=0,pn=0;H?Y?(Fn=0,pn=Math.max(0,De-Ze)):(Fn=Math.min(0,Ze-De),pn=0):(Fn=Math.min(0,rn-ze),pn=0);function Qn(ae){return ae<Fn?Fn:ae>pn?pn:ae}var Bn=Object(n.useRef)(),Xn=Object(n.useState)(),dn=Object(W.a)(Xn,2),In=dn[0],he=dn[1];function Re(){he(Date.now())}function Me(){window.clearTimeout(Bn.current)}qa(Z,function(ae,q){function Ce(Je,un){Je(function(zn){var qn=Qn(zn+un);return qn})}if(H){if(Ze>=De)return!1;Ce(Oe,ae)}else{if(rn>=ze)return!1;Ce(Ke,q)}return Me(),Re(),!0}),Object(n.useEffect)(function(){return Me(),In&&(Bn.current=window.setTimeout(function(){he(0)},100)),Me},[In]);function tn(){var ae=arguments.length>0&&arguments[0]!==void 0?arguments[0]:V,q=gn.get(ae)||{width:0,height:0,left:0,right:0,top:0};if(H){var Ce=ge;Y?q.right<ge?Ce=q.right:q.right+q.width>ge+Ze&&(Ce=q.right+q.width-Ze):q.left<-ge?Ce=-q.left:q.left+q.width>-ge+Ze&&(Ce=-(q.left+q.width-Ze)),Ke(0),Oe(Qn(Ce))}else{var Je=Fe;q.top<-Fe?Je=-q.top:q.top+q.height>-Fe+rn&&(Je=-(q.top+q.height-rn)),Oe(0),Ke(Qn(Je))}}var kn=A(gn,{width:Ze,height:rn,left:ge,top:Fe},{width:an,height:En},{width:nn,height:qe},Object(ve.a)(Object(ve.a)({},a),{},{tabs:b})),gt=Object(W.a)(kn,2),Mt=gt[0],Wt=gt[1],Lt=b.map(function(ae){var q=ae.key;return n.createElement(Vn,{id:M,prefixCls:F,key:q,rtl:Y,tab:ae,closable:ae.closable,editable:se,active:q===V,tabPosition:X,tabBarGutter:oe,renderWrapper:U,removeAriaLabel:Q==null?void 0:Q.removeAriaLabel,ref:pe(q),onClick:function(Je){ee(q,Je)},onRemove:function(){ie(q)},onFocus:function(){tn(q),Re(),Y||(Z.current.scrollLeft=0),Z.current.scrollTop=0}})}),at=Mn(function(){var ae,q,Ce,Je,un,zn,qn,$t,Vt,lr=((ae=Z.current)===null||ae===void 0?void 0:ae.offsetWidth)||0,or=((q=Z.current)===null||q===void 0?void 0:q.offsetHeight)||0,ma=((Ce=be.current)===null||Ce===void 0?void 0:Ce.offsetWidth)||0,pa=((Je=be.current)===null||Je===void 0?void 0:Je.offsetHeight)||0,dr=((un=_.current)===null||un===void 0?void 0:un.offsetWidth)||0,cr=((zn=_.current)===null||zn===void 0?void 0:zn.offsetHeight)||0;Ln(lr),Dn(or),sn(ma),Ge(pa);var fa=(((qn=ue.current)===null||qn===void 0?void 0:qn.offsetWidth)||0)-ma,ha=((($t=ue.current)===null||$t===void 0?void 0:$t.offsetHeight)||0)-pa;$e(fa),Qe(ha);var va=(Vt=_.current)===null||Vt===void 0?void 0:Vt.className.includes(Gn);ke(fa-(va?0:dr)),Ie(ha-(va?0:cr)),Cn(function(){var ga=new Map;return b.forEach(function(mr){var ya=mr.key,dt=pe(ya).current;dt&&ga.set(ya,{width:dt.offsetWidth,height:dt.offsetHeight,left:dt.offsetLeft,top:dt.offsetTop})}),ga})}),yt=b.slice(0,Mt),st=b.slice(Wt+1),bt=[].concat(Object(hn.a)(yt),Object(hn.a)(st)),xt=Object(n.useState)(),Et=Object(W.a)(xt,2),Ct=Et[0],rt=Et[1],Nn=gn.get(V),Ft=Object(n.useRef)();function Ot(){Xe.a.cancel(Ft.current)}Object(n.useEffect)(function(){var ae={};return Nn&&(H?(Y?ae.right=Nn.right:ae.left=Nn.left,ae.width=Nn.width):(ae.top=Nn.top,ae.height=Nn.height)),Ot(),Ft.current=Object(Xe.a)(function(){rt(ae)}),Ot},[Nn,H,Y]),Object(n.useEffect)(function(){tn()},[V,Nn,gn,H]),Object(n.useEffect)(function(){at()},[Y,oe,V,b.map(function(ae){return ae.key}).join("_")]);var ut=!!bt.length,Zn="".concat(F,"-nav-wrap"),lt,ot,Rt,St;return H?Y?(ot=ge>0,lt=ge+Ze<De):(lt=ge<0,ot=-ge+Ze<De):(Rt=Fe<0,St=-Fe+rn<ze),n.createElement("div",{ref:i,role:"tablist",className:Be()("".concat(F,"-nav"),O),style:R,onKeyDown:function(){Re()}},n.createElement(ua,{position:"left",extra:J,prefixCls:F}),n.createElement($n.default,{onResize:at},n.createElement("div",{className:Be()(Zn,(p={},Object(ce.a)(p,"".concat(Zn,"-ping-left"),lt),Object(ce.a)(p,"".concat(Zn,"-ping-right"),ot),Object(ce.a)(p,"".concat(Zn,"-ping-top"),Rt),Object(ce.a)(p,"".concat(Zn,"-ping-bottom"),St),p)),ref:Z},n.createElement($n.default,{onResize:at},n.createElement("div",{ref:ue,className:"".concat(F,"-nav-list"),style:{transform:"translate(".concat(ge,"px, ").concat(Fe,"px)"),transition:In?"none":void 0}},Lt,n.createElement(aa,{ref:be,prefixCls:F,locale:Q,editable:se,style:{visibility:ut?"hidden":null}}),n.createElement("div",{className:Be()("".concat(F,"-ink-bar"),Object(ce.a)({},"".concat(F,"-ink-bar-animated"),$.inkBar)),style:Ct}))))),n.createElement(ka,Object(x.a)({},a,{ref:_,prefixCls:F,tabs:bt,className:!ut&&Gn})),n.createElement(ua,{position:"right",extra:J,prefixCls:F}))}var la=n.forwardRef(er);function nr(a){var i=a.id,p=a.activeKey,E=a.animated,F=a.tabPosition,b=a.rtl,O=a.destroyInactiveTabPane,R=n.useContext(Tt),M=R.prefixCls,$=R.tabs,V=E.tabPane,Y=$.findIndex(function(J){return J.key===p});return n.createElement("div",{className:Be()("".concat(M,"-content-holder"))},n.createElement("div",{className:Be()("".concat(M,"-content"),"".concat(M,"-content-").concat(F),Object(ce.a)({},"".concat(M,"-content-animated"),V)),style:Y&&V?Object(ce.a)({},b?"marginRight":"marginLeft","-".concat(Y,"00%")):null},$.map(function(J){return n.cloneElement(J.node,{key:J.key,prefixCls:M,tabKey:J.key,id:i,animated:V,active:J.key===p,destroyInactiveTabPane:O})})))}function oa(a){var i=a.prefixCls,p=a.forceRender,E=a.className,F=a.style,b=a.id,O=a.active,R=a.animated,M=a.destroyInactiveTabPane,$=a.tabKey,V=a.children,Y=n.useState(p),J=Object(W.a)(Y,2),se=J[0],Q=J[1];n.useEffect(function(){O?Q(!0):M&&Q(!1)},[O,M]);var X={};return O||(R?(X.visibility="hidden",X.height=0,X.overflowY="hidden"):X.display="none"),n.createElement("div",{id:b&&"".concat(b,"-panel-").concat($),role:"tabpanel",tabIndex:O?0:-1,"aria-labelledby":b&&"".concat(b,"-tab-").concat($),"aria-hidden":!O,style:Object(ve.a)(Object(ve.a)({},X),F),className:Be()("".concat(i,"-tabpane"),O&&"".concat(i,"-tabpane-active"),E)},(O||se||p)&&V)}var da=0;function tr(a){return Object(wn.a)(a).map(function(i){if(n.isValidElement(i)){var p=i.key!==void 0?String(i.key):void 0;return Object(ve.a)(Object(ve.a)({key:p},i.props),{},{node:i})}return null}).filter(function(i){return i})}function ar(a,i){var p,E=a.id,F=a.prefixCls,b=F===void 0?"rc-tabs":F,O=a.className,R=a.children,M=a.direction,$=a.activeKey,V=a.defaultActiveKey,Y=a.editable,J=a.animated,se=J===void 0?{inkBar:!0,tabPane:!1}:J,Q=a.tabPosition,X=Q===void 0?"top":Q,oe=a.tabBarGutter,U=a.tabBarStyle,ee=a.tabBarExtraContent,re=a.locale,Z=a.moreIcon,ue=a.moreTransitionName,_=a.destroyInactiveTabPane,be=a.renderTabBar,te=a.onChange,me=a.onTabClick,pe=a.onTabScroll,ie=Object(Pe.a)(a,["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"]),H=tr(R),de=M==="rtl",ye;se===!1?ye={inkBar:!1,tabPane:!1}:se===!0?ye={inkBar:!0,tabPane:!0}:ye=Object(ve.a)({inkBar:!0,tabPane:!1},Object(Ne.a)(se)==="object"?se:{});var ge=Object(n.useState)(!1),Oe=Object(W.a)(ge,2),Le=Oe[0],Ee=Oe[1];Object(n.useEffect)(function(){Ee(Object(Kn.a)())},[]);var Fe=Object(On.a)(function(){var Ie;return(Ie=H[0])===null||Ie===void 0?void 0:Ie.key},{value:$,defaultValue:V}),Ke=Object(W.a)(Fe,2),we=Ke[0],Ae=Ke[1],De=Object(n.useState)(function(){return H.findIndex(function(Ie){return Ie.key===we})}),$e=Object(W.a)(De,2),_e=$e[0],Ve=$e[1];Object(n.useEffect)(function(){var Ie=H.findIndex(function(en){return en.key===we});if(Ie===-1){var He;Ie=Math.max(0,Math.min(_e,H.length-1)),Ae((He=H[Ie])===null||He===void 0?void 0:He.key)}Ve(Ie)},[H.map(function(Ie){return Ie.key}).join("_"),we,_e]);var ze=Object(On.a)(null,{value:E}),Qe=Object(W.a)(ze,2),xe=Qe[0],jn=Qe[1],an=X;Le&&!["left","right"].includes(X)&&(an="top"),Object(n.useEffect)(function(){E||(jn("rc-tabs-".concat(da)),da+=1)},[]);function ke(Ie,He){me==null||me(Ie,He),Ae(Ie),te==null||te(Ie)}var ln={id:xe,activeKey:we,animated:ye,tabPosition:an,rtl:de,mobile:Le},bn,En=Object(ve.a)(Object(ve.a)({},ln),{},{editable:Y,locale:re,moreIcon:Z,moreTransitionName:ue,tabBarGutter:oe,onTabClick:ke,onTabScroll:pe,extra:ee,style:U,panes:R});return be?bn=be(En,la):bn=n.createElement(la,En),n.createElement(Tt.Provider,{value:{tabs:H,prefixCls:b}},n.createElement("div",Object(x.a)({ref:i,id:E,className:Be()(b,"".concat(b,"-").concat(an),(p={},Object(ce.a)(p,"".concat(b,"-mobile"),Le),Object(ce.a)(p,"".concat(b,"-editable"),Y),Object(ce.a)(p,"".concat(b,"-rtl"),de),p),O)},ie),bn,n.createElement(nr,Object(x.a)({destroyInactiveTabPane:_},ln,{animated:ye}))))}var ca=n.forwardRef(ar);ca.TabPane=oa;var rr=ca,ir=rr,wt=e("MZF8"),vn=e("dEAq"),sr=e("ZpkN"),br=e("TIsu");function Kt(a,i){var p,E=(p=a.match(/\.(\w+)$/))===null||p===void 0?void 0:p[1];return E||(E=i.tsx?"tsx":"jsx"),E}var ur=a=>{var i,p,E,F=Object(n.useRef)(),b=Object(n.useContext)(vn.context),O=b.locale,R=Object(vn.useLocaleProps)(O,a),M=Object(vn.useDemoUrl)(R.identifier),$=R.demoUrl||M,V=(wt.a===null||wt.a===void 0?void 0:wt.a.location.hash)==="#".concat(R.identifier),Y=Object.keys(R.sources).length===1,J=Object(vn.useCodeSandbox)((i=R.hideActions)!==null&&i!==void 0&&i.includes("CSB")?null:R),se=Object(vn.useRiddle)((p=R.hideActions)!==null&&p!==void 0&&p.includes("RIDDLE")?null:R),Q=Object(vn.useMotions)(R.motions||[],F.current),X=Object(z.default)(Q,2),oe=X[0],U=X[1],ee=Object(vn.useCopy)(),re=Object(z.default)(ee,2),Z=re[0],ue=re[1],_=Object(n.useState)("_"),be=Object(z.default)(_,2),te=be[0],me=be[1],pe=Object(n.useState)(Kt(te,R.sources[te])),ie=Object(z.default)(pe,2),H=ie[0],de=ie[1],ye=Object(n.useState)(Boolean(R.defaultShowCode)),ge=Object(z.default)(ye,2),Oe=ge[0],Le=ge[1],Ee=Object(n.useState)(Math.random()),Fe=Object(z.default)(Ee,2),Ke=Fe[0],we=Fe[1],Ae=R.sources[te][H]||R.sources[te].content,De=Object(vn.useTSPlaygroundUrl)(O,Ae),$e=Object(n.useRef)(),_e=Object(vn.usePrefersColor)(),Ve=Object(z.default)(_e,1),ze=Ve[0];Object(n.useEffect)(()=>{we(Math.random())},[ze]);function Qe(xe){me(xe),de(Kt(xe,R.sources[xe]))}return m.a.createElement("div",{style:R.style,className:[R.className,"__dumi-default-previewer",V?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:R.identifier,"data-debug":R.debug||void 0,"data-iframe":R.iframe||void 0},R.iframe&&m.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),m.a.createElement("div",{ref:F,className:"__dumi-default-previewer-demo",style:{transform:R.transform?"translate(0, 0)":void 0,padding:R.compact||R.iframe&&R.compact!==!1?"0":void 0,background:R.background}},R.iframe?m.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(R.iframe).replace(/(\d)$/,"$1px")},key:Ke,src:$,ref:$e}):R.children),m.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":R.title},R.title&&m.a.createElement(vn.AnchorLink,{to:"#".concat(R.identifier)},R.title),R.description&&m.a.createElement("div",{dangerouslySetInnerHTML:{__html:R.description}})),m.a.createElement("div",{className:"__dumi-default-previewer-actions"},J&&m.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:J}),se&&m.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:se}),R.motions&&m.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:U,onClick:()=>oe()}),R.iframe&&m.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:()=>we(Math.random())}),!((E=R.hideActions)!==null&&E!==void 0&&E.includes("EXTERNAL"))&&m.a.createElement(vn.Link,{target:"_blank",to:$},m.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),m.a.createElement("span",null),m.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":ue,onClick:()=>Z(Ae)}),H==="tsx"&&Oe&&m.a.createElement(vn.Link,{target:"_blank",to:De},m.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),m.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(Oe?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:()=>Le(!Oe)})),Oe&&m.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!Y&&m.a.createElement(ir,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xB7\xB7\xB7",defaultActiveKey:te,onChange:Qe},Object.keys(R.sources).map(xe=>m.a.createElement(oa,{tab:xe==="_"?"index.".concat(Kt(xe,R.sources[xe])):xe,key:xe}))),m.a.createElement("div",{className:"__dumi-default-previewer-source"},m.a.createElement(sr.a,{code:Ae,lang:H,showCopy:!1}))))},Er=yn.default=ur},"80pN":function(Tn,yn,e){"use strict";(function(z){/** @license React v16.14.0
* react-dom-test-utils.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var n=e("MgzW"),m=e("q1tI"),x=e("i8i4"),ce=e("QCnb");function W(f){for(var N="https://reactjs.org/docs/error-decoder.html?invariant="+f,K=1;K<arguments.length;K++)N+="&args[]="+encodeURIComponent(arguments[K]);return"Minified React error #"+f+"; visit "+N+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ne=m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;Ne.hasOwnProperty("ReactCurrentDispatcher")||(Ne.ReactCurrentDispatcher={current:null}),Ne.hasOwnProperty("ReactCurrentBatchConfig")||(Ne.ReactCurrentBatchConfig={suspense:null});function Pe(f){var N=f,K=f;if(f.alternate)for(;N.return;)N=N.return;else{f=N;do N=f,(N.effectTag&1026)!=0&&(K=N.return),f=N.return;while(f)}return N.tag===3?K:null}function ve(f){if(Pe(f)!==f)throw Error(W(188))}function fn(f){var N=f.alternate;if(!N){if(N=Pe(f),N===null)throw Error(W(188));return N!==f?null:f}for(var K=f,fe=N;;){var ne=K.return;if(ne===null)break;var je=ne.alternate;if(je===null){if(fe=ne.return,fe!==null){K=fe;continue}break}if(ne.child===je.child){for(je=ne.child;je;){if(je===K)return ve(ne),f;if(je===fe)return ve(ne),N;je=je.sibling}throw Error(W(188))}if(K.return!==fe.return)K=ne,fe=je;else{for(var Ue=!1,Ye=ne.child;Ye;){if(Ye===K){Ue=!0,K=ne,fe=je;break}if(Ye===fe){Ue=!0,fe=ne,K=je;break}Ye=Ye.sibling}if(!Ue){for(Ye=je.child;Ye;){if(Ye===K){Ue=!0,K=je,fe=ne;break}if(Ye===fe){Ue=!0,fe=je,K=ne;break}Ye=Ye.sibling}if(!Ue)throw Error(W(189))}}if(K.alternate!==fe)throw Error(W(190))}if(K.tag!==3)throw Error(W(188));return K.stateNode.current===K?f:N}function Be(){return!0}function wn(){return!1}function Kn(f,N,K,fe){this.dispatchConfig=f,this._targetInst=N,this.nativeEvent=K,f=this.constructor.Interface;for(var ne in f)f.hasOwnProperty(ne)&&((N=f[ne])?this[ne]=N(K):ne==="target"?this.target=fe:this[ne]=K[ne]);return this.isDefaultPrevented=(K.defaultPrevented!=null?K.defaultPrevented:K.returnValue===!1)?Be:wn,this.isPropagationStopped=wn,this}n(Kn.prototype,{preventDefault:function(){this.defaultPrevented=!0;var f=this.nativeEvent;f&&(f.preventDefault?f.preventDefault():typeof f.returnValue!="unknown"&&(f.returnValue=!1),this.isDefaultPrevented=Be)},stopPropagation:function(){var f=this.nativeEvent;f&&(f.stopPropagation?f.stopPropagation():typeof f.cancelBubble!="unknown"&&(f.cancelBubble=!0),this.isPropagationStopped=Be)},persist:function(){this.isPersistent=Be},isPersistent:wn,destructor:function(){var f=this.constructor.Interface,N;for(N in f)this[N]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=wn,this._dispatchInstances=this._dispatchListeners=null}}),Kn.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(f){return f.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null},Kn.extend=function(f){function N(){}function K(){return fe.apply(this,arguments)}var fe=this;N.prototype=fe.prototype;var ne=new N;return n(ne,K.prototype),K.prototype=ne,K.prototype.constructor=K,K.Interface=n({},fe.Interface,f),K.extend=fe.extend,Xe(K),K},Xe(Kn);function On(f,N,K,fe){if(this.eventPool.length){var ne=this.eventPool.pop();return this.call(ne,f,N,K,fe),ne}return new this(f,N,K,fe)}function hn(f){if(!(f instanceof this))throw Error(W(279));f.destructor(),10>this.eventPool.length&&this.eventPool.push(f)}function Xe(f){f.eventPool=[],f.getPooled=On,f.release=hn}var $n=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined");function Mn(f,N){var K={};return K[f.toLowerCase()]=N.toLowerCase(),K["Webkit"+f]="webkit"+N,K["Moz"+f]="moz"+N,K}var Rn={animationend:Mn("Animation","AnimationEnd"),animationiteration:Mn("Animation","AnimationIteration"),animationstart:Mn("Animation","AnimationStart"),transitionend:Mn("Transition","TransitionEnd")},We={},_n={};$n&&(_n=document.createElement("div").style,"AnimationEvent"in window||(delete Rn.animationend.animation,delete Rn.animationiteration.animation,delete Rn.animationstart.animation),"TransitionEvent"in window||delete Rn.transitionend.transition);function Vn(f){if(We[f])return We[f];if(!Rn[f])return f;var N=Rn[f],K;for(K in N)if(N.hasOwnProperty(K)&&K in _n)return We[f]=N[K];return f}var et=Vn("animationend"),ct=Vn("animationiteration"),D=Vn("animationstart"),A=Vn("transitionend"),j=null;function d(f){if(j===null)try{var N=("require"+Math.random()).slice(0,7);j=(z&&z[N])("timers").setImmediate}catch(K){j=function(fe){var ne=new MessageChannel;ne.port1.onmessage=fe,ne.port2.postMessage(void 0)}}return j(f)}var u=x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,h=u[11],y=u[12],C=x.unstable_batchedUpdates,r=Ne.IsSomeRendererActing,l=typeof ce.unstable_flushAllWithoutAsserting=="function",s=ce.unstable_flushAllWithoutAsserting||function(){for(var f=!1;h();)f=!0;return f};function w(f){try{s(),d(function(){s()?w(f):f()})}catch(N){f(N)}}var B=0,S=!1,c=x.findDOMNode,I=x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,v=I[0],t=I[4],g=I[5],o=I[6],P=I[7],T=I[8],L=I[9],k=I[10];function G(){}function le(f,N){if(!f)return[];if(f=fn(f),!f)return[];for(var K=f,fe=[];;){if(K.tag===5||K.tag===6||K.tag===1||K.tag===0){var ne=K.stateNode;N(ne)&&fe.push(ne)}if(K.child)K.child.return=K,K=K.child;else{if(K===f)return fe;for(;!K.sibling;){if(!K.return||K.return===f)return fe;K=K.return}K.sibling.return=K.return,K=K.sibling}}}function Se(f,N){if(f&&!f._reactInternalFiber){var K=""+f;throw f=Array.isArray(f)?"an array":f&&f.nodeType===1&&f.tagName?"a DOM node":K==="[object Object]"?"object with keys {"+Object.keys(f).join(", ")+"}":K,Error(W(286,N,f))}}var Te={renderIntoDocument:function(f){var N=document.createElement("div");return x.render(f,N)},isElement:function(f){return m.isValidElement(f)},isElementOfType:function(f,N){return m.isValidElement(f)&&f.type===N},isDOMComponent:function(f){return!(!f||f.nodeType!==1||!f.tagName)},isDOMComponentElement:function(f){return!!(f&&m.isValidElement(f)&&f.tagName)},isCompositeComponent:function(f){return Te.isDOMComponent(f)?!1:f!=null&&typeof f.render=="function"&&typeof f.setState=="function"},isCompositeComponentWithType:function(f,N){return Te.isCompositeComponent(f)?f._reactInternalFiber.type===N:!1},findAllInRenderedTree:function(f,N){return Se(f,"findAllInRenderedTree"),f?le(f._reactInternalFiber,N):[]},scryRenderedDOMComponentsWithClass:function(f,N){return Se(f,"scryRenderedDOMComponentsWithClass"),Te.findAllInRenderedTree(f,function(K){if(Te.isDOMComponent(K)){var fe=K.className;typeof fe!="string"&&(fe=K.getAttribute("class")||"");var ne=fe.split(/\s+/);if(!Array.isArray(N)){if(N===void 0)throw Error(W(11));N=N.split(/\s+/)}return N.every(function(je){return ne.indexOf(je)!==-1})}return!1})},findRenderedDOMComponentWithClass:function(f,N){if(Se(f,"findRenderedDOMComponentWithClass"),f=Te.scryRenderedDOMComponentsWithClass(f,N),f.length!==1)throw Error("Did not find exactly one match (found: "+f.length+") for class:"+N);return f[0]},scryRenderedDOMComponentsWithTag:function(f,N){return Se(f,"scryRenderedDOMComponentsWithTag"),Te.findAllInRenderedTree(f,function(K){return Te.isDOMComponent(K)&&K.tagName.toUpperCase()===N.toUpperCase()})},findRenderedDOMComponentWithTag:function(f,N){if(Se(f,"findRenderedDOMComponentWithTag"),f=Te.scryRenderedDOMComponentsWithTag(f,N),f.length!==1)throw Error("Did not find exactly one match (found: "+f.length+") for tag:"+N);return f[0]},scryRenderedComponentsWithType:function(f,N){return Se(f,"scryRenderedComponentsWithType"),Te.findAllInRenderedTree(f,function(K){return Te.isCompositeComponentWithType(K,N)})},findRenderedComponentWithType:function(f,N){if(Se(f,"findRenderedComponentWithType"),f=Te.scryRenderedComponentsWithType(f,N),f.length!==1)throw Error("Did not find exactly one match (found: "+f.length+") for componentType:"+N);return f[0]},mockComponent:function(f,N){return N=N||f.mockTagName||"div",f.prototype.render.mockImplementation(function(){return m.createElement(N,null,this.props.children)}),this},nativeTouchData:function(f,N){return{touches:[{pageX:f,pageY:N}]}},Simulate:null,SimulateNative:{},act:function(f){function N(){B--,r.current=K,y.current=fe}S===!1&&(S=!0,console.error("act(...) is not supported in production builds of React, and might not behave as expected.")),B++;var K=r.current,fe=y.current;r.current=!0,y.current=!0;try{var ne=C(f)}catch(je){throw N(),je}if(ne!==null&&typeof ne=="object"&&typeof ne.then=="function")return{then:function(je,Ue){ne.then(function(){1<B||l===!0&&K===!0?(N(),je()):w(function(Ye){N(),Ye?Ue(Ye):je()})},function(Ye){N(),Ue(Ye)})}};try{B!==1||l!==!1&&K!==!1||s(),N()}catch(je){throw N(),je}return{then:function(je){je()}}}};function cn(f){return function(N,K){if(m.isValidElement(N))throw Error(W(228));if(Te.isCompositeComponent(N))throw Error(W(229));var fe=t[f],ne=new G;ne.target=N,ne.type=f.toLowerCase();var je=v(N),Ue=new Kn(fe,je,ne,N);Ue.persist(),n(Ue,K),fe.phasedRegistrationNames?g(Ue):o(Ue),x.unstable_batchedUpdates(function(){P(N),k(Ue)}),T()}}Te.Simulate={};for(var Sn in t)Te.Simulate[Sn]=cn(Sn);function Wn(f,N){return function(K,fe){var ne=new G(f);n(ne,fe),Te.isDOMComponent(K)?(K=c(K),ne.target=K,L(N,1,document,ne)):K.tagName&&(ne.target=K,L(N,1,document,ne))}}[["abort","abort"],[et,"animationEnd"],[ct,"animationIteration"],[D,"animationStart"],["blur","blur"],["canplaythrough","canPlayThrough"],["canplay","canPlay"],["cancel","cancel"],["change","change"],["click","click"],["close","close"],["compositionend","compositionEnd"],["compositionstart","compositionStart"],["compositionupdate","compositionUpdate"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["dragstart","dragStart"],["drag","drag"],["drop","drop"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],["ended","ended"],["error","error"],["focus","focus"],["input","input"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["loadstart","loadStart"],["loadstart","loadStart"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["mousedown","mouseDown"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["playing","playing"],["progress","progress"],["ratechange","rateChange"],["scroll","scroll"],["seeked","seeked"],["seeking","seeking"],["selectionchange","selectionChange"],["stalled","stalled"],["suspend","suspend"],["textInput","textInput"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchmove","touchMove"],["touchstart","touchStart"],[A,"transitionEnd"],["volumechange","volumeChange"],["waiting","waiting"],["wheel","wheel"]].forEach(function(f){var N=f[1];Te.SimulateNative[N]=Wn(N,f[0])}),z.exports=Te.default||Te}).call(this,e("hOG+")(Tn))},JjdP:function(Tn,yn,e){"use strict";e.r(yn);var z=e("9og8"),n=e("WmNS"),m=e.n(n),x=e("LtsZ"),ce=`import React, { useRef } from 'react';
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

export default Demo;`,W=`import { get, set, cloneDeep } from 'lodash-es';

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
};`,Ne=`import React from 'react';
import FormRender, { useForm } from 'form-render';

const Demo = props => {
  const form = useForm();
  return <FormRender form={form} {...props} />;
};

export default Demo;`,Pe=`export const delay = ms => new Promise(res => setTimeout(res, ms));

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
};`,Be=`import React, { Component } from 'react';
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

export default Root;`,wn=`import React, { useState, useEffect } from 'react';
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

export default Demo;`,Rn=`import React, { useState, useRef } from 'react';
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
}`,ct=yn.default={"guide-card":{component:Object(x.dynamic)({loader:function(){var D=Object(z.a)(m.a.mark(function j(){return m.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(25)]).then(e.bind(null,"oLxE"));case 2:return u.abrupt("return",u.sent.default);case 3:case"end":return u.stop()}},j)}));function A(){return D.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:ce}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"card-render":{version:"0.1.2"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"0.x"}},identifier:"guide-card"}},"chart-render-demo":{component:Object(x.dynamic)({loader:function(){var D=Object(z.a)(m.a.mark(function j(){var d,u,h,y,C,r,l;return m.a.wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return r=function(S,c){if(!c&&S&&S.__esModule)return S;if(S===null||typeof S!="object"&&typeof S!="function")return{default:S};var I=C(c);if(I&&I.has(S))return I.get(S);var v={},t=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var g in S)if(g!=="default"&&Object.prototype.hasOwnProperty.call(S,g)){var o=t?Object.getOwnPropertyDescriptor(S,g):null;o&&(o.get||o.set)?Object.defineProperty(v,g,o):v[g]=S[g]}return v.default=S,I&&I.set(S,v),v},C=function(S){if(typeof WeakMap!="function")return null;var c=new WeakMap,I=new WeakMap;return(C=function(t){return t?I:c})(S)},d=e("K+nK"),w.t0=d,w.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return w.t1=w.sent,u=(0,w.t0)(w.t1),w.t2=r,w.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return w.t3=w.sent,h=(0,w.t2)(w.t3),w.next=15,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 15:return y=w.sent,l=function(){var S=(0,h.useState)("Line"),c=(0,u.default)(S,2),I=c[0],v=c[1],t={Line:y.Line,Column:y.Column,PivotTable:y.PivotTable}[I];return h.default.createElement("div",null,h.default.createElement("div",{style:{marginBottom:10}},h.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return v("Line")}},"\u6298\u7EBF\u56FE"),h.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return v("Column")}},"\u67F1\u72B6\u56FE"),h.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return v("PivotTable")}},"\u4EA4\u53C9\u8868")),h.default.createElement(t,{meta:[{id:"date",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF",isDim:!1},{id:"uv",name:"\u8BBF\u5BA2\u6570",isDim:!1}],data:[{date:"20200101",pv:100,uv:50},{date:"20200102",pv:120,uv:60},{date:"20200103",pv:140,uv:70},{date:"20200104",pv:160,uv:80}]}))},w.abrupt("return",l);case 18:case"end":return w.stop()}},j)}));function A(){return D.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"chart-render-demo"}},"column-demo":{component:Object(x.dynamic)({loader:function(){var D=Object(z.a)(m.a.mark(function j(){var d,u,h,y;return m.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,u=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return h=r.sent,y=function(){return u.default.createElement(h.Column,{meta:[{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{pv:50,uv:20}]})},r.abrupt("return",y);case 11:case"end":return r.stop()}},j)}));function A(){return D.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[{ pv: 50, uv: 20 }]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo"}},"column-demo-1":{component:Object(x.dynamic)({loader:function(){var D=Object(z.a)(m.a.mark(function j(){var d,u,h,y;return m.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,u=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return h=r.sent,y=function(){return u.default.createElement(h.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},r.abrupt("return",y);case 11:case"end":return r.stop()}},j)}));function A(){return D.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-1"}},"column-demo-2":{component:Object(x.dynamic)({loader:function(){var D=Object(z.a)(m.a.mark(function j(){var d,u,h,y;return m.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,u=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return h=r.sent,y=function(){return u.default.createElement(h.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},r.abrupt("return",y);case 11:case"end":return r.stop()}},j)}));function A(){return D.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-2"}},"column-demo-3":{component:Object(x.dynamic)({loader:function(){var D=Object(z.a)(m.a.mark(function j(){var d,u,h,y;return m.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,u=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return h=r.sent,y=function(){return u.default.createElement(h.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},r.abrupt("return",y);case 11:case"end":return r.stop()}},j)}));function A(){return D.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-3"}},"column-demo-4":{component:Object(x.dynamic)({loader:function(){var D=Object(z.a)(m.a.mark(function j(){var d,u,h,y;return m.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,u=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return h=r.sent,y=function(){return u.default.createElement(h.Column,{inverted:!0,label:{position:"middle",layout:[{type:"interval-adjust-position"},{type:"interval-hide-overlap"},{type:"adjust-color"}]},meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},r.abrupt("return",y);case 11:case"end":return r.stop()}},j)}));function A(){return D.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-4"}},"line-demo":{component:Object(x.dynamic)({loader:function(){var D=Object(z.a)(m.a.mark(function j(){var d,u,h,y;return m.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,u=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return h=r.sent,y=function(){return u.default.createElement(h.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},r.abrupt("return",y);case 11:case"end":return r.stop()}},j)}));function A(){return D.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo"}},"line-demo-1":{component:Object(x.dynamic)({loader:function(){var D=Object(z.a)(m.a.mark(function j(){var d,u,h,y;return m.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,u=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return h=r.sent,y=function(){return u.default.createElement(h.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},r.abrupt("return",y);case 11:case"end":return r.stop()}},j)}));function A(){return D.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-1"}},"line-demo-2":{component:Object(x.dynamic)({loader:function(){var D=Object(z.a)(m.a.mark(function j(){var d,u,h,y;return m.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,u=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return h=r.sent,y=function(){return u.default.createElement(h.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"},{id:"pv",name:"\u8BBF\u95EE\u91CF"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20,pv:120},{ds:"2020-12-31",page:"\u9996\u9875",uv:120,pv:1120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21,pv:121},{ds:"2021-01-01",page:"\u9996\u9875",uv:121,pv:1121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15,pv:115},{ds:"2021-01-02",page:"\u9996\u9875",uv:115,pv:1115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40,pv:140},{ds:"2021-01-03",page:"\u9996\u9875",uv:140,pv:1140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31,pv:131},{ds:"2021-01-04",page:"\u9996\u9875",uv:131,pv:1131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32,pv:132},{ds:"2021-01-05",page:"\u9996\u9875",uv:132,pv:1132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30,pv:130},{ds:"2021-01-06",page:"\u9996\u9875",uv:130,pv:1130}]})},r.abrupt("return",y);case 11:case"end":return r.stop()}},j)}));function A(){return D.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-2"}},"line-demo-3":{component:Object(x.dynamic)({loader:function(){var D=Object(z.a)(m.a.mark(function j(){var d,u,h,y;return m.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,u=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return h=r.sent,y=function(){return u.default.createElement(h.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},r.abrupt("return",y);case 11:case"end":return r.stop()}},j)}));function A(){return D.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-3"}},"line-demo-4":{component:Object(x.dynamic)({loader:function(){var D=Object(z.a)(m.a.mark(function j(){var d,u,h,y;return m.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,u=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return h=r.sent,y=function(){return u.default.createElement(h.Line,{withArea:!0,isStack:!0,isPercent:!0,meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},r.abrupt("return",y);case 11:case"end":return r.stop()}},j)}));function A(){return D.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-4"}},"pivot-table-demo":{component:Object(x.dynamic)({loader:function(){var D=Object(z.a)(m.a.mark(function j(){var d,u,h,y;return m.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,u=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return h=r.sent,y=function(){return u.default.createElement(h.PivotTable,{style:{maxHeight:400,overflow:"auto"},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},r.abrupt("return",y);case 11:case"end":return r.stop()}},j)}));function A(){return D.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo"}},"pivot-table-demo-1":{component:Object(x.dynamic)({loader:function(){var D=Object(z.a)(m.a.mark(function j(){var d,u,h,y;return m.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,u=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return h=r.sent,y=function(){return u.default.createElement(h.PivotTable,{style:{maxHeight:400,overflow:"auto"},cellRender:function(w,B,S){return u.default.createElement("div",null,u.default.createElement("p",null,"\u53C2\u6570\u8868\uFF1A"),u.default.createElement("p",{style:{color:["red","orange","yellow","green","blue"][Object.keys(B).length]}},w),u.default.createElement("p",null,JSON.stringify(B)),u.default.createElement("p",null,JSON.stringify(S)))},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},r.abrupt("return",y);case 11:case"end":return r.stop()}},j)}));function A(){return D.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-1"}},"pivot-table-demo-2":{component:Object(x.dynamic)({loader:function(){var D=Object(z.a)(m.a.mark(function j(){var d,u,h,y,C,r,l;return m.a.wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return r=function(S,c){if(!c&&S&&S.__esModule)return S;if(S===null||typeof S!="object"&&typeof S!="function")return{default:S};var I=C(c);if(I&&I.has(S))return I.get(S);var v={},t=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var g in S)if(g!=="default"&&Object.prototype.hasOwnProperty.call(S,g)){var o=t?Object.getOwnPropertyDescriptor(S,g):null;o&&(o.get||o.set)?Object.defineProperty(v,g,o):v[g]=S[g]}return v.default=S,I&&I.set(S,v),v},C=function(S){if(typeof WeakMap!="function")return null;var c=new WeakMap,I=new WeakMap;return(C=function(t){return t?I:c})(S)},d=e("K+nK"),w.t0=d,w.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return w.t1=w.sent,u=(0,w.t0)(w.t1),w.t2=r,w.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return w.t3=w.sent,h=(0,w.t2)(w.t3),w.next=15,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 15:return y=w.sent,l=function(){var S=(0,h.useState)(!1),c=(0,u.default)(S,2),I=c[0],v=c[1];return h.default.createElement(h.default.Fragment,null,h.default.createElement("label",null,"\u53EF\u5C55\u5F00/\u6536\u7F29\uFF1A",h.default.createElement("input",{type:"checkbox",value:I,onChange:function(){return v(!I)}})),h.default.createElement(y.PivotTable,{leftExpandable:I,showSubtotal:!1,meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]}))},w.abrupt("return",l);case 18:case"end":return w.stop()}},j)}));function A(){return D.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-2"}},"form-render-demo":{component:Object(x.dynamic)({loader:function(){var D=Object(z.a)(m.a.mark(function j(){var d,u,h,y,C,r,l,s,w,B,S,c,I,v;return m.a.wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return S=function(P,T){if(!T&&P&&P.__esModule)return P;if(P===null||typeof P!="object"&&typeof P!="function")return{default:P};var L=B(T);if(L&&L.has(P))return L.get(P);var k={},G=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var le in P)if(le!=="default"&&Object.prototype.hasOwnProperty.call(P,le)){var Se=G?Object.getOwnPropertyDescriptor(P,le):null;Se&&(Se.get||Se.set)?Object.defineProperty(k,le,Se):k[le]=P[le]}return k.default=P,L&&L.set(P,k),k},B=function(P){if(typeof WeakMap!="function")return null;var T=new WeakMap,L=new WeakMap;return(B=function(G){return G?L:T})(P)},d=e("K+nK"),g.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return g.t0=d,g.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return g.t1=g.sent,u=(0,g.t0)(g.t1),g.t2=d,g.next=13,e.e(72).then(e.bind(null,"fWQN"));case 13:return g.t3=g.sent,h=(0,g.t2)(g.t3),g.t4=d,g.next=18,e.e(73).then(e.bind(null,"mtLc"));case 18:return g.t5=g.sent,y=(0,g.t4)(g.t5),g.t6=d,g.next=23,e.e(66).then(e.bind(null,"yKVA"));case 23:return g.t7=g.sent,C=(0,g.t6)(g.t7),g.t8=d,g.next=28,e.e(65).then(e.bind(null,"879j"));case 28:return g.t9=g.sent,r=(0,g.t8)(g.t9),g.t10=d,g.next=33,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 33:return g.t11=g.sent,l=(0,g.t10)(g.t11),g.next=37,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 37:return s=g.sent,g.t12=S,g.next=41,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 41:return g.t13=g.sent,w=(0,g.t12)(g.t13),c={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},I=function(o){(0,C.default)(T,o);var P=(0,r.default)(T);function T(){return(0,h.default)(this,T),P.apply(this,arguments)}return(0,y.default)(T,[{key:"render",value:function(){var k=this.props.form;return l.default.createElement("div",null,l.default.createElement(w.default,{form:k,schema:c}),l.default.createElement(u.default,{type:"primary",onClick:k.submit},"\u63D0\u4EA4"))}}]),T}(l.default.Component),v=(0,w.connectForm)(I),g.abrupt("return",v);case 47:case"end":return g.stop()}},j)}));function A(){return D.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default connectForm(Demo);`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo"}},"form-render-demo-1":{component:Object(x.dynamic)({loader:function(){var D=Object(z.a)(m.a.mark(function j(){var d,u,h,y,C,r,l,s,w,B;return m.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return l=function(v,t){if(!t&&v&&v.__esModule)return v;if(v===null||typeof v!="object"&&typeof v!="function")return{default:v};var g=r(t);if(g&&g.has(v))return g.get(v);var o={},P=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var T in v)if(T!=="default"&&Object.prototype.hasOwnProperty.call(v,T)){var L=P?Object.getOwnPropertyDescriptor(v,T):null;L&&(L.get||L.set)?Object.defineProperty(o,T,L):o[T]=v[T]}return o.default=v,g&&g.set(v,o),o},r=function(v){if(typeof WeakMap!="function")return null;var t=new WeakMap,g=new WeakMap;return(r=function(P){return P?g:t})(v)},d=e("K+nK"),c.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return c.t0=d,c.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return c.t1=c.sent,u=(0,c.t0)(c.t1),c.t2=d,c.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return c.t3=c.sent,h=(0,c.t2)(c.t3),c.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 17:return y=c.sent,c.t4=l,c.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 21:return c.t5=c.sent,C=(0,c.t4)(c.t5),s={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},w=function(){var v=(0,C.useForm)();return h.default.createElement("div",null,h.default.createElement(C.default,{form:v,schema:s}),h.default.createElement(u.default,{type:"primary",onClick:v.submit},"\u63D0\u4EA4"))},B=w,c.abrupt("return",B);case 27:case"end":return c.stop()}},j)}));function A(){return D.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo-1"}},"form-render-demo-2":{component:Object(x.dynamic)({loader:function(){var D=Object(z.a)(m.a.mark(function j(){var d,u,h,y,C,r,l,s,w,B;return m.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return l=function(v,t){if(!t&&v&&v.__esModule)return v;if(v===null||typeof v!="object"&&typeof v!="function")return{default:v};var g=r(t);if(g&&g.has(v))return g.get(v);var o={},P=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var T in v)if(T!=="default"&&Object.prototype.hasOwnProperty.call(v,T)){var L=P?Object.getOwnPropertyDescriptor(v,T):null;L&&(L.get||L.set)?Object.defineProperty(o,T,L):o[T]=v[T]}return o.default=v,g&&g.set(v,o),o},r=function(v){if(typeof WeakMap!="function")return null;var t=new WeakMap,g=new WeakMap;return(r=function(P){return P?g:t})(v)},d=e("K+nK"),c.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return c.t0=d,c.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return c.t1=c.sent,u=(0,c.t0)(c.t1),c.t2=d,c.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return c.t3=c.sent,h=(0,c.t2)(c.t3),c.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 17:return y=c.sent,c.t4=l,c.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 21:return c.t5=c.sent,C=(0,c.t4)(c.t5),s={displayType:"row",labelWidth:60,type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F",type:"range",format:"date"},siteUrl:{title:"\u7F51\u5740",type:"string",placeholder:"\u6B64\u5904\u5FC5\u586B",required:!0,props:{addonBefore:"https://",addonAfter:".com"}}}},w=function(){var v=(0,C.useForm)(),t=function(o,P){P.length>0?alert("errors:"+JSON.stringify(P)):alert("formData:"+JSON.stringify(o,null,2))};return h.default.createElement("div",null,h.default.createElement(C.default,{form:v,schema:s,onFinish:t}),h.default.createElement(u.default,{type:"primary",onClick:v.submit},"\u63D0\u4EA4"))},B=w,c.abrupt("return",B);case 27:case"end":return c.stop()}},j)}));function A(){return D.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-demo-2"}},"migrate-demo":{component:Object(x.dynamic)({loader:function(){var D=Object(z.a)(m.a.mark(function j(){var d,u,h,y,C,r,l,s;return m.a.wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return l=function(){var c=(0,h.useForm)(),I=function(t,g){g.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(g))):alert(JSON.stringify(t))};return u.default.createElement("div",null,u.default.createElement(h.default,{form:c,schema:r,onFinish:I}),u.default.createElement("button",{onClick:c.submit},"\u63D0\u4EA4"))},C=function(c,I){if(!I&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var v=y(I);if(v&&v.has(c))return v.get(c);var t={},g=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in c)if(o!=="default"&&Object.prototype.hasOwnProperty.call(c,o)){var P=g?Object.getOwnPropertyDescriptor(c,o):null;P&&(P.get||P.set)?Object.defineProperty(t,o,P):t[o]=c[o]}return t.default=c,v&&v.set(c,t),t},y=function(c){if(typeof WeakMap!="function")return null;var I=new WeakMap,v=new WeakMap;return(y=function(g){return g?v:I})(c)},d=e("K+nK"),B.t0=d,B.next=7,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 7:return B.t1=B.sent,u=(0,B.t0)(B.t1),B.t2=C,B.next=12,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 12:return B.t3=B.sent,h=(0,B.t2)(B.t3),r={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}},s=l,B.abrupt("return",s);case 17:case"end":return B.stop()}},j)}));function A(){return D.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate-demo"}},"migrate-demo-1":{component:Object(x.dynamic)({loader:function(){var D=Object(z.a)(m.a.mark(function j(){var d,u,h,y,C,r,l,s,w,B,S,c,I;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return w=function(o,P){if(!P&&o&&o.__esModule)return o;if(o===null||typeof o!="object"&&typeof o!="function")return{default:o};var T=s(P);if(T&&T.has(o))return T.get(o);var L={},k=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var G in o)if(G!=="default"&&Object.prototype.hasOwnProperty.call(o,G)){var le=k?Object.getOwnPropertyDescriptor(o,G):null;le&&(le.get||le.set)?Object.defineProperty(L,G,le):L[G]=o[G]}return L.default=o,T&&T.set(o,L),L},s=function(o){if(typeof WeakMap!="function")return null;var P=new WeakMap,T=new WeakMap;return(s=function(k){return k?T:P})(o)},d=e("K+nK"),t.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return t.t0=d,t.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return t.t1=t.sent,u=(0,t.t0)(t.t1),t.t2=d,t.next=13,Promise.resolve().then(e.bind(null,"tJVT"));case 13:return t.t3=t.sent,h=(0,t.t2)(t.t3),t.next=17,Promise.all([e.e(3),e.e(19)]).then(e.t.bind(null,"cUip",7));case 17:return t.t4=d,t.next=20,Promise.all([e.e(0),e.e(12),e.e(18),e.e(22)]).then(e.t.bind(null,"iJl9",7));case 20:return t.t5=t.sent,y=(0,t.t4)(t.t5),t.t6=w,t.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return t.t7=t.sent,C=(0,t.t6)(t.t7),t.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 29:return r=t.sent,t.next=32,Promise.all([e.e(64),e.e(71)]).then(e.bind(null,"7t+U"));case 32:return l=t.sent,B=y.default.TextArea,S={type:"object",properties:{number:{title:"\u6570\u5B57\u8F93\u5165\u6846",type:"number","ui:disabled":!0},checkbox:{title:"\u662F\u5426\u9009\u62E9",type:"boolean","ui:widget":"switch"}},required:["number"]},c=function(){var o=(0,C.useState)(JSON.stringify(S)),P=(0,h.default)(o,2),T=P[0],L=P[1],k=(0,C.useState)({}),G=(0,h.default)(k,2),le=G[0],Se=G[1],Te=function(){try{var f=(0,l.updateSchemaToNewVersion)(S);Se(f)}catch(N){console.log(N)}},cn=function(f){L(f.target.value)},Sn=function(){L(JSON.stringify(JSON.parse(T),null,2))};return C.default.createElement("div",null,C.default.createElement("div",null,"\u586B\u5165\u65E7\u7248schema\uFF1A"),C.default.createElement(B,{style:{minHeight:400,marginTop:12,marginBottom:12},value:T,onChange:cn}),C.default.createElement(u.default,{style:{marginRight:12},onClick:Sn},"\u683C\u5F0F\u5316\u65E7schema"),C.default.createElement(u.default,{type:"primary",onClick:Te},"\u751F\u6210\u65B0\u7248schema"),C.default.createElement(B,{style:{minHeight:400,marginTop:12},value:JSON.stringify(le,null,2)}))},I=c,t.abrupt("return",I);case 38:case"end":return t.stop()}},j)}));function A(){return D.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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

export default Translator;`},"packages/form-render/src/utils.js":{import:"../../packages/form-render/src/utils.js",content:W}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"},"lodash-es":{version:"4.17.21"}},identifier:"migrate-demo-1"}},"display-demo":{component:Object(x.dynamic)({loader:function(){var D=Object(z.a)(m.a.mark(function j(){var d,u,h,y,C;return m.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,u=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,h=(0,l.t2)(l.t3),y=function(w){return{type:"object",displayType:w,properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},objectName:{title:"\u5BF9\u8C61",bind:"obj",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},C=function(){return u.default.createElement("div",null,u.default.createElement("h2",null,"display: row"),u.default.createElement(h.default,{schema:y("row")}),u.default.createElement("h2",null,"display: column"),u.default.createElement(h.default,{schema:y("column")}))},l.abrupt("return",C);case 14:case"end":return l.stop()}},j)}));function A(){return D.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`},"demo/display.js":{import:"../demo/display",content:Ne}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo"}},"display-demo-1":{component:Object(x.dynamic)({loader:function(){var D=Object(z.a)(m.a.mark(function j(){var d,u,h,y,C;return m.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,u=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,h=(0,l.t2)(l.t3),y={type:"object",displayType:"inline",properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},C=function(){return u.default.createElement(h.default,{schema:y})},l.abrupt("return",C);case 14:case"end":return l.stop()}},j)}));function A(){return D.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:Ne}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-1"}},"display-demo-2":{component:Object(x.dynamic)({loader:function(){var D=Object(z.a)(m.a.mark(function j(){var d,u,h,y,C;return m.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,u=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,h=(0,l.t2)(l.t3),y={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0},check:{title:"box",type:"boolean",default:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},C=function(){return u.default.createElement(h.default,{readOnly:!0,schema:y})},l.abrupt("return",C);case 14:case"end":return l.stop()}},j)}));function A(){return D.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form readOnly schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:Ne}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-2"}},"display-demo-3":{component:Object(x.dynamic)({loader:function(){var D=Object(z.a)(m.a.mark(function j(){var d,u,h,y,C;return m.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,u=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,h=(0,l.t2)(l.t3),y={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0,width:"50%"},check:{title:"box",type:"boolean",default:!0,width:"50%",labelWidth:6},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},C=function(){return u.default.createElement(h.default,{labelWidth:"200",schema:y})},l.abrupt("return",C);case 14:case"end":return l.stop()}},j)}));function A(){return D.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form labelWidth="200" schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:Ne}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-3"}},"display-demo-4":{component:Object(x.dynamic)({loader:function(){var D=Object(z.a)(m.a.mark(function j(){var d,u,h,y,C,r;return m.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,u=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,h=(0,s.t2)(s.t3),y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},C=function(){return u.default.createElement(h.default,{schema:y})},r=C,s.abrupt("return",r);case 15:case"end":return s.stop()}},j)}));function A(){return D.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Ne}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-4"}},"display-demo-5":{component:Object(x.dynamic)({loader:function(){var D=Object(z.a)(m.a.mark(function j(){var d,u,h,y,C,r;return m.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,u=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,h=(0,s.t2)(s.t3),y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},C=function(){return u.default.createElement(h.default,{schema:y})},r=C,s.abrupt("return",r);case 15:case"end":return s.stop()}},j)}));function A(){return D.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Ne}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-5"}},"display-demo-6":{component:Object(x.dynamic)({loader:function(){var D=Object(z.a)(m.a.mark(function j(){var d,u,h,y,C,r;return m.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,u=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,h=(0,s.t2)(s.t3),y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},C=function(){return u.default.createElement(h.default,{schema:y})},r=C,s.abrupt("return",r);case 15:case"end":return s.stop()}},j)}));function A(){return D.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Ne}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-6"}},"display-demo-7":{component:Object(x.dynamic)({loader:function(){var D=Object(z.a)(m.a.mark(function j(){var d,u,h,y,C,r;return m.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,u=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,h=(0,s.t2)(s.t3),y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},C=function(){return u.default.createElement(h.default,{schema:y})},r=C,s.abrupt("return",r);case 15:case"end":return s.stop()}},j)}));function A(){return D.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Ne}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-7"}},"form-methods-demo":{component:Object(x.dynamic)({loader:function(){var D=Object(z.a)(m.a.mark(function j(){var d,u,h,y,C,r,l,s,w,B,S,c,I;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return S=function(o,P){if(!P&&o&&o.__esModule)return o;if(o===null||typeof o!="object"&&typeof o!="function")return{default:o};var T=B(P);if(T&&T.has(o))return T.get(o);var L={},k=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var G in o)if(G!=="default"&&Object.prototype.hasOwnProperty.call(o,G)){var le=k?Object.getOwnPropertyDescriptor(o,G):null;le&&(le.get||le.set)?Object.defineProperty(L,G,le):L[G]=o[G]}return L.default=o,T&&T.set(o,L),L},B=function(o){if(typeof WeakMap!="function")return null;var P=new WeakMap,T=new WeakMap;return(B=function(k){return k?T:P})(o)},d=e("K+nK"),t.next=5,e.e(20).then(e.t.bind(null,"lfLe",7));case 5:return t.t0=d,t.next=8,e.e(21).then(e.t.bind(null,"Cp9S",7));case 8:return t.t1=t.sent,u=(0,t.t0)(t.t1),t.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return t.t2=d,t.next=15,e.e(12).then(e.t.bind(null,"4IMT",7));case 15:return t.t3=t.sent,h=(0,t.t2)(t.t3),t.next=19,e.e(14).then(e.t.bind(null,"tL+A",7));case 19:return t.t4=d,t.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return t.t5=t.sent,y=(0,t.t4)(t.t5),t.t6=d,t.next=27,Promise.resolve().then(e.bind(null,"tJVT"));case 27:return t.t7=t.sent,C=(0,t.t6)(t.t7),t.t8=S,t.next=32,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 32:return t.t9=t.sent,r=(0,t.t8)(t.t9),t.next=36,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 36:return l=t.sent,t.t10=S,t.next=40,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 40:return t.t11=t.sent,s=(0,t.t10)(t.t11),t.next=44,e.e(15).then(e.bind(null,"OH0R"));case 44:return w=t.sent,c=function(){var o=(0,s.useForm)(),P=(0,r.useState)({}),T=(0,C.default)(P,2),L=T[0],k=T[1],G=function(){(0,w.fakeApi)("xxx/getForm").then(function(Te){o.setValues({input1:"hello world",select1:"c"})})};(0,r.useEffect)(function(){(0,w.delay)(1e3).then(function(Se){k({type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}})})},[]);var le=function(Te,cn){cn.length>0?y.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(cn.map(function(Sn){return Sn.name}))):(0,w.fakeApi)("xxx/submit",Te).then(function(Sn){return y.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})};return r.default.createElement("div",{style:{width:"400px"}},r.default.createElement(s.default,{form:o,schema:L,onFinish:le}),r.default.createElement(u.default,null,r.default.createElement(h.default,{onClick:G},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),r.default.createElement(h.default,{type:"primary",onClick:o.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},I=c,t.abrupt("return",I);case 48:case"end":return t.stop()}},j)}));function A(){return D.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Pe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo"}},"form-methods-demo-1":{component:Object(x.dynamic)({loader:function(){var D=Object(z.a)(m.a.mark(function j(){var d,u,h,y,C,r,l,s,w,B,S,c,I;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return B=function(o,P){if(!P&&o&&o.__esModule)return o;if(o===null||typeof o!="object"&&typeof o!="function")return{default:o};var T=w(P);if(T&&T.has(o))return T.get(o);var L={},k=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var G in o)if(G!=="default"&&Object.prototype.hasOwnProperty.call(o,G)){var le=k?Object.getOwnPropertyDescriptor(o,G):null;le&&(le.get||le.set)?Object.defineProperty(L,G,le):L[G]=o[G]}return L.default=o,T&&T.set(o,L),L},w=function(o){if(typeof WeakMap!="function")return null;var P=new WeakMap,T=new WeakMap;return(w=function(k){return k?T:P})(o)},d=e("K+nK"),t.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return t.t0=d,t.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return t.t1=t.sent,u=(0,t.t0)(t.t1),t.t2=d,t.next=13,Promise.resolve().then(e.bind(null,"PpiC"));case 13:return t.t3=t.sent,h=(0,t.t2)(t.t3),t.next=17,e.e(14).then(e.t.bind(null,"tL+A",7));case 17:return t.t4=d,t.next=20,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 20:return t.t5=t.sent,y=(0,t.t4)(t.t5),t.t6=d,t.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return t.t7=t.sent,C=(0,t.t6)(t.t7),t.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 29:return r=t.sent,t.t8=B,t.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 33:return t.t9=t.sent,l=(0,t.t8)(t.t9),t.next=37,e.e(15).then(e.bind(null,"OH0R"));case 37:return s=t.sent,S={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},c=function(){var o=(0,l.useForm)(),P=function(k,G){G.length>0?y.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(G.map(function(le){return le.name}))):(0,s.fakeApi)("xxx/submit",k).then(function(le){return y.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},T=function(k){var G=k.data,le=k.errors,Se=k.schema,Te=(0,h.default)(k,["data","errors","schema"]);return(0,s.fakeApi)("xxx/validation").then(function(cn){return{name:"select1",error:["\u5916\u90E8\u6821\u9A8C\u9519\u8BEF"]}})};return C.default.createElement("div",{style:{width:"400px"}},C.default.createElement(l.default,{form:o,schema:S,beforeFinish:T,onFinish:P}),C.default.createElement(u.default,{type:"primary",onClick:o.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},I=c,t.abrupt("return",I);case 42:case"end":return t.stop()}},j)}));function A(){return D.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Pe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-1"}},"form-methods-demo-2":{component:Object(x.dynamic)({loader:function(){var D=Object(z.a)(m.a.mark(function j(){var d,u,h,y,C,r,l,s,w,B,S,c,I;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return B=function(o,P){if(!P&&o&&o.__esModule)return o;if(o===null||typeof o!="object"&&typeof o!="function")return{default:o};var T=w(P);if(T&&T.has(o))return T.get(o);var L={},k=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var G in o)if(G!=="default"&&Object.prototype.hasOwnProperty.call(o,G)){var le=k?Object.getOwnPropertyDescriptor(o,G):null;le&&(le.get||le.set)?Object.defineProperty(L,G,le):L[G]=o[G]}return L.default=o,T&&T.set(o,L),L},w=function(o){if(typeof WeakMap!="function")return null;var P=new WeakMap,T=new WeakMap;return(w=function(k){return k?T:P})(o)},d=e("K+nK"),t.next=5,e.e(20).then(e.t.bind(null,"lfLe",7));case 5:return t.t0=d,t.next=8,e.e(21).then(e.t.bind(null,"Cp9S",7));case 8:return t.t1=t.sent,u=(0,t.t0)(t.t1),t.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return t.t2=d,t.next=15,e.e(12).then(e.t.bind(null,"4IMT",7));case 15:return t.t3=t.sent,h=(0,t.t2)(t.t3),t.next=19,e.e(14).then(e.t.bind(null,"tL+A",7));case 19:return t.t4=d,t.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return t.t5=t.sent,y=(0,t.t4)(t.t5),t.t6=d,t.next=27,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 27:return t.t7=t.sent,C=(0,t.t6)(t.t7),t.next=31,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 31:return r=t.sent,t.t8=B,t.next=35,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 35:return t.t9=t.sent,l=(0,t.t8)(t.t9),t.next=39,e.e(15).then(e.bind(null,"OH0R"));case 39:return s=t.sent,S={type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F\u8303\u56F4",type:"range",format:"date"}}},c=function(){var o=(0,l.useForm)(),P=function(k,G){G.length>0?y.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(G.map(function(le){return le.name}))):(0,s.fakeApi)("xxx/submit",k).then(function(le){return y.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},T=function(){(0,s.fakeApi)("xxx/getForm").then(function(k){o.setValues({startDate:"2020-04-04",endDate:"2020-04-24"})})};return C.default.createElement("div",{style:{width:"400px"}},C.default.createElement(l.default,{form:o,schema:S,onFinish:P}),C.default.createElement(u.default,null,C.default.createElement(h.default,{onClick:T},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),C.default.createElement(h.default,{type:"primary",onClick:o.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},I=c,t.abrupt("return",I);case 44:case"end":return t.stop()}},j)}));function A(){return D.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Pe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-2"}},"form-methods-demo-3":{component:Object(x.dynamic)({loader:function(){var D=Object(z.a)(m.a.mark(function j(){var d,u,h,y,C,r,l,s,w,B,S,c;return m.a.wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return w=function(g,o){if(!o&&g&&g.__esModule)return g;if(g===null||typeof g!="object"&&typeof g!="function")return{default:g};var P=s(o);if(P&&P.has(g))return P.get(g);var T={},L=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var k in g)if(k!=="default"&&Object.prototype.hasOwnProperty.call(g,k)){var G=L?Object.getOwnPropertyDescriptor(g,k):null;G&&(G.get||G.set)?Object.defineProperty(T,k,G):T[k]=g[k]}return T.default=g,P&&P.set(g,T),T},s=function(g){if(typeof WeakMap!="function")return null;var o=new WeakMap,P=new WeakMap;return(s=function(L){return L?P:o})(g)},d=e("K+nK"),v.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return v.t0=d,v.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return v.t1=v.sent,u=(0,v.t0)(v.t1),v.next=12,e.e(14).then(e.t.bind(null,"tL+A",7));case 12:return v.t2=d,v.next=15,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 15:return v.t3=v.sent,h=(0,v.t2)(v.t3),v.t4=w,v.next=20,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 20:return v.t5=v.sent,y=(0,v.t4)(v.t5),v.next=24,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 24:return C=v.sent,v.t6=w,v.next=28,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 28:return v.t7=v.sent,r=(0,v.t6)(v.t7),v.next=32,e.e(15).then(e.bind(null,"OH0R"));case 32:return l=v.sent,B={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select1:{title:"\u5355\u9009",type:"string",widget:"select"}}}}},S=function(){var g=(0,r.useForm)(),o=function(){g.setSchemaByPath("obj1.select1",{enum:["east","south","west","north"],enumNames:["\u4E1C","\u5357","\u897F","\u5317"]})},P=function(L,k){k.length>0?h.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(k.map(function(G){return G.name}))):h.default.info(JSON.stringify(L))};return y.default.createElement("div",{style:{width:"400px"}},y.default.createElement(r.default,{form:g,schema:B,onMount:o,onFinish:P}),y.default.createElement(u.default,{type:"primary",onClick:g.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},c=S,v.abrupt("return",c);case 37:case"end":return v.stop()}},j)}));function A(){return D.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Pe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-3"}},"function-demo":{component:Object(x.dynamic)({loader:function(){var D=Object(z.a)(m.a.mark(function j(){var d,u,h,y,C,r,l,s;return m.a.wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return C=function(c,I){if(!I&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var v=y(I);if(v&&v.has(c))return v.get(c);var t={},g=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in c)if(o!=="default"&&Object.prototype.hasOwnProperty.call(c,o)){var P=g?Object.getOwnPropertyDescriptor(c,o):null;P&&(P.get||P.set)?Object.defineProperty(t,o,P):t[o]=c[o]}return t.default=c,v&&v.set(c,t),t},y=function(c){if(typeof WeakMap!="function")return null;var I=new WeakMap,v=new WeakMap;return(y=function(g){return g?v:I})(c)},d=e("K+nK"),B.t0=d,B.next=6,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 6:return B.t1=B.sent,u=(0,B.t0)(B.t1),B.t2=C,B.next=11,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 11:return B.t3=B.sent,h=(0,B.t2)(B.t3),r={type:"object",properties:{select1:{title:"\u5355\u9009",description:"\u5C1D\u8BD5\u9009\u62E9\u201C\u663E\u793A\u8F93\u5165\u6846\u201D",type:"string",enum:["a","b"],enumNames:["\u9690\u85CF\u8F93\u5165\u6846","\u663E\u793A\u8F93\u5165\u6846"],disabled:"{{rootValue.input1.length > 5}}",default:"a"},input1:{title:"\u8F93\u5165\u6846",description:"\u5C1D\u8BD5\u8F93\u5165\u8D85\u8FC75\u4E2A\u5B57\u7B26",type:"string",hidden:'{{formData.select1 == "a"}}'}}},l=function(){var c=(0,h.useForm)();return u.default.createElement(h.default,{form:c,schema:r})},s=l,B.abrupt("return",s);case 17:case"end":return B.stop()}},j)}));function A(){return D.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo1;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo"}},"function-demo-1":{component:Object(x.dynamic)({loader:function(){var D=Object(z.a)(m.a.mark(function j(){var d,u,h,y,C;return m.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,u=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return l.t3=l.sent,h=(0,l.t2)(l.t3),l.next=13,e.e(17).then(e.bind(null,"8iYR"));case 13:return y=l.sent,C=function(){return u.default.createElement(h.default,{schema:y.expression})},l.abrupt("return",C);case 16:case"end":return l.stop()}},j)}));function A(){return D.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { expression } from '../json/schema';

export default () => <FR schema={expression} />;`},"demo/FR.jsx":{import:"../demo/FR",content:ve},"json/schema.js":{import:"../json/schema",content:fn}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo-1"}},"lifeCycle-demo":{component:Object(x.dynamic)({loader:function(){var D=Object(z.a)(m.a.mark(function j(){var d,u,h,y,C,r,l,s,w;return m.a.wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return C=function(I,v){if(!v&&I&&I.__esModule)return I;if(I===null||typeof I!="object"&&typeof I!="function")return{default:I};var t=y(v);if(t&&t.has(I))return t.get(I);var g={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var P in I)if(P!=="default"&&Object.prototype.hasOwnProperty.call(I,P)){var T=o?Object.getOwnPropertyDescriptor(I,P):null;T&&(T.get||T.set)?Object.defineProperty(g,P,T):g[P]=I[P]}return g.default=I,t&&t.set(I,g),g},y=function(I){if(typeof WeakMap!="function")return null;var v=new WeakMap,t=new WeakMap;return(y=function(o){return o?t:v})(I)},S.t0=C,S.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return S.t1=S.sent,d=(0,S.t0)(S.t1),S.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 9:return u=S.sent,S.t2=C,S.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 13:return S.t3=S.sent,h=(0,S.t2)(S.t3),r=function(I){return new Promise(function(v){return setTimeout(v,I)})},l={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u4E0B\u62C9\u9009\u6846",description:"\u52A0\u8F7D\u4E2D...",type:"string",enum:[],widget:"select"}}},s=function(){var I=(0,h.useForm)(),v=function(){I.setValues({input1:"hello world"}),r(3e3).then(function(g){I.setSchemaByPath("select1",{description:"",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]})})};return d.default.createElement(h.default,{form:I,schema:l,onMount:v})},w=s,S.abrupt("return",w);case 20:case"end":return S.stop()}},j)}));function A(){return D.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.4.5-beta.14"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"lifeCycle-demo"}},"listDisplay-demo":{component:Object(x.dynamic)({loader:function(){var D=Object(z.a)(m.a.mark(function j(){var d,u,h,y,C,r;return m.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,u=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,h=(0,s.t2)(s.t3),y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},C=function(){return u.default.createElement(h.default,{schema:y})},r=C,s.abrupt("return",r);case 15:case"end":return s.stop()}},j)}));function A(){return D.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Ne}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo"}},"listDisplay-demo-1":{component:Object(x.dynamic)({loader:function(){var D=Object(z.a)(m.a.mark(function j(){var d,u,h,y,C,r;return m.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,u=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,h=(0,s.t2)(s.t3),y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},C=function(){return u.default.createElement(h.default,{schema:y})},r=C,s.abrupt("return",r);case 15:case"end":return s.stop()}},j)}));function A(){return D.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Ne}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-1"}},"listDisplay-demo-2":{component:Object(x.dynamic)({loader:function(){var D=Object(z.a)(m.a.mark(function j(){var d,u,h,y,C,r;return m.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,u=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,h=(0,s.t2)(s.t3),y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},C=function(){return u.default.createElement(h.default,{schema:y})},r=C,s.abrupt("return",r);case 15:case"end":return s.stop()}},j)}));function A(){return D.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Ne}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-2"}},"listDisplay-demo-3":{component:Object(x.dynamic)({loader:function(){var D=Object(z.a)(m.a.mark(function j(){var d,u,h,y,C,r;return m.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,u=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,h=(0,s.t2)(s.t3),y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},C=function(){return u.default.createElement(h.default,{schema:y})},r=C,s.abrupt("return",r);case 15:case"end":return s.stop()}},j)}));function A(){return D.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Ne}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-3"}},"listDisplay-demo-4":{component:Object(x.dynamic)({loader:function(){var D=Object(z.a)(m.a.mark(function j(){var d,u,h,y,C,r;return m.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,u=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,h=(0,s.t2)(s.t3),window.hello=function(w){var B=w.value;console.log(B)},y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list4",itemProps:{buttons:[{callback:"hello",text:"\u590D\u5236"}]},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},C=function(){return u.default.createElement(h.default,{schema:y})},r=C,s.abrupt("return",r);case 16:case"end":return s.stop()}},j)}));function A(){return D.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Ne}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-4"}},"watch-demo":{component:Object(x.dynamic)({loader:function(){var D=Object(z.a)(m.a.mark(function j(){var d,u,h,y,C,r,l,s;return m.a.wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return C=function(c,I){if(!I&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var v=y(I);if(v&&v.has(c))return v.get(c);var t={},g=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in c)if(o!=="default"&&Object.prototype.hasOwnProperty.call(c,o)){var P=g?Object.getOwnPropertyDescriptor(c,o):null;P&&(P.get||P.set)?Object.defineProperty(t,o,P):t[o]=c[o]}return t.default=c,v&&v.set(c,t),t},y=function(c){if(typeof WeakMap!="function")return null;var I=new WeakMap,v=new WeakMap;return(y=function(g){return g?v:I})(c)},B.t0=C,B.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return B.t1=B.sent,d=(0,B.t0)(B.t1),B.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 9:return u=B.sent,B.t2=C,B.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 13:return B.t3=B.sent,h=(0,B.t2)(B.t3),r={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"}}},l=function(){var c=(0,h.useForm)(),I={"#":function(t){console.log("\u8868\u5355\u7684\u65F6\u65F6\u6570\u636E\u4E3A\uFF1A",t)},input1:function(t){c.setValueByPath("input2",t)}};return d.default.createElement(h.default,{form:c,schema:r,watch:I})},s=l,B.abrupt("return",s);case 19:case"end":return B.stop()}},j)}));function A(){return D.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.4.5-beta.14"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo"}},"watch-demo-1":{component:Object(x.dynamic)({loader:function(){var D=Object(z.a)(m.a.mark(function j(){var d,u,h,y,C,r,l,s,w,B;return m.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return l=function(v,t){if(!t&&v&&v.__esModule)return v;if(v===null||typeof v!="object"&&typeof v!="function")return{default:v};var g=r(t);if(g&&g.has(v))return g.get(v);var o={},P=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var T in v)if(T!=="default"&&Object.prototype.hasOwnProperty.call(v,T)){var L=P?Object.getOwnPropertyDescriptor(v,T):null;L&&(L.get||L.set)?Object.defineProperty(o,T,L):o[T]=v[T]}return o.default=v,g&&g.set(v,o),o},r=function(v){if(typeof WeakMap!="function")return null;var t=new WeakMap,g=new WeakMap;return(r=function(P){return P?g:t})(v)},d=e("K+nK"),c.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return c.t0=d,c.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return c.t1=c.sent,u=(0,c.t0)(c.t1),c.t2=l,c.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return c.t3=c.sent,h=(0,c.t2)(c.t3),c.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 17:return y=c.sent,c.t4=l,c.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 21:return c.t5=c.sent,C=(0,c.t4)(c.t5),s={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"radio"}}}}},w=function(){var v=(0,C.useForm)(),t=function(P,T){T.length>0?alert("errorFields:"+JSON.stringify(T)):alert("formData:"+JSON.stringify(P,null,2))},g={input1:function(P){P.length>2?v.setSchemaByPath("obj1.select",function(T){var L=T.enumNames;return{enumNames:L.map(function(k){return k+"a"})}}):v.setSchemaByPath("obj1.select",{enumNames:["\u65E9","\u4E2D","\u665A"]})}};return h.default.createElement("div",null,h.default.createElement(C.default,{form:v,schema:s,onFinish:t,watch:g}),h.default.createElement(u.default,{type:"",style:{marginRight:8},onClick:function(){return v.setSchemaByPath("input2",{title:"\u7F16\u8F91\u6846",format:"textarea"})}},"\u5C06 input \u6539\u4E3A textarea"),h.default.createElement(u.default,{type:"primary",onClick:v.submit},"\u63D0\u4EA4"))},B=w,c.abrupt("return",B);case 27:case"end":return c.stop()}},j)}));function A(){return D.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo-1"}},"widget-demo":{component:Object(x.dynamic)({loader:function(){var D=Object(z.a)(m.a.mark(function j(){var d,u,h,y,C,r,l,s,w,B,S,c,I;return m.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return w=function(o,P){if(!P&&o&&o.__esModule)return o;if(o===null||typeof o!="object"&&typeof o!="function")return{default:o};var T=s(P);if(T&&T.has(o))return T.get(o);var L={},k=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var G in o)if(G!=="default"&&Object.prototype.hasOwnProperty.call(o,G)){var le=k?Object.getOwnPropertyDescriptor(o,G):null;le&&(le.get||le.set)?Object.defineProperty(L,G,le):L[G]=o[G]}return L.default=o,T&&T.set(o,L),L},s=function(o){if(typeof WeakMap!="function")return null;var P=new WeakMap,T=new WeakMap;return(s=function(k){return k?T:P})(o)},d=e("K+nK"),t.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return t.t0=d,t.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return t.t1=t.sent,u=(0,t.t0)(t.t1),t.next=12,Promise.all([e.e(3),e.e(19)]).then(e.t.bind(null,"cUip",7));case 12:return t.t2=d,t.next=15,Promise.all([e.e(0),e.e(12),e.e(18),e.e(22)]).then(e.t.bind(null,"iJl9",7));case 15:return t.t3=t.sent,h=(0,t.t2)(t.t3),t.t4=d,t.next=20,e.e(74).then(e.bind(null,"0Owb"));case 20:return t.t5=t.sent,y=(0,t.t4)(t.t5),t.t6=w,t.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return t.t7=t.sent,C=(0,t.t6)(t.t7),t.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 29:return r=t.sent,t.t8=w,t.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 33:return t.t9=t.sent,l=(0,t.t8)(t.t9),B={type:"object",properties:{string:{title:"\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6",type:"string",widget:"site"},select:{title:"\u5355\u9009",type:"number",enum:[1,2,3],enumNames:["\u9009\u98791","\u9009\u98792","\u9009\u98793"]}}},S=function(o){return console.log("widget props:",o),C.default.createElement(h.default,(0,y.default)({addonBefore:"http://",addonAfter:".com"},o))},c=function(){var o=(0,l.useForm)(),P=function(){};return C.default.createElement("div",null,C.default.createElement(l.default,{readOnly:!0,form:o,schema:B,widgets:{site:S},onFinish:function(L){return alert(JSON.stringify(L,null,2))}}),C.default.createElement(u.default,{type:"primary",onClick:o.submit},"\u63D0\u4EA4"))},I=c,t.abrupt("return",I);case 40:case"end":return t.stop()}},j)}));function A(){return D.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},"react-dom":{version:">=16.8.0"}},identifier:"widget-demo"}},"schema-demo":{component:Object(x.dynamic)({loader:function(){var D=Object(z.a)(m.a.mark(function j(){var d,u,h,y,C;return m.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,u=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return l.t3=l.sent,h=(0,l.t2)(l.t3),l.next=13,e.e(17).then(e.bind(null,"8iYR"));case 13:return y=l.sent,C=function(){return u.default.createElement(h.default,{schema:y.basic})},l.abrupt("return",C);case 16:case"end":return l.stop()}},j)}));function A(){return D.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { basic } from '../json/schema';

export default () => <FR schema={basic} />;`},"demo/FR.jsx":{import:"../demo/FR",content:ve},"json/schema.js":{import:"../json/schema",content:fn}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo"}},"schema-demo-1":{component:Object(x.dynamic)({loader:function(){var D=Object(z.a)(m.a.mark(function j(){var d,u,h,y,C;return m.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,u=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return l.t3=l.sent,h=(0,l.t2)(l.t3),l.next=13,e.e(17).then(e.bind(null,"8iYR"));case 13:return y=l.sent,C=function(){return u.default.createElement(h.default,{schema:y.titleTrick})},l.abrupt("return",C);case 16:case"end":return l.stop()}},j)}));function A(){return D.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { titleTrick } from '../json/schema';

export default () => <FR schema={titleTrick} />;`},"demo/FR.jsx":{import:"../demo/FR",content:ve},"json/schema.js":{import:"../json/schema",content:fn}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo-1"}},"docs-playground":{component:Object(x.dynamic)({loader:function(){var D=Object(z.a)(m.a.mark(function j(){return m.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(25)]).then(e.bind(null,"BASV"));case 2:return u.abrupt("return",u.sent.default);case 3:case"end":return u.stop()}},j)}));function A(){return D.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:Be},"main.js":{import:"./main",content:wn},"json/simplest.json":{import:"./json/simplest.json",content:Kn},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:On},"monaco/index.js":{import:"./monaco",content:hn},"suggestionsMap.js":{import:"./suggestionsMap",content:Xe},"index.css":{import:"./index.css",content:$n}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:"^17.x"},"react-dom":{version:">=16.9.0"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.4.5-beta.14"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-monaco-editor":{version:"0.43.0"},"@types/react":{version:"^17.x"}},identifier:"docs-playground"}},"table-render-advanced":{component:Object(x.dynamic)({loader:function(){var D=Object(z.a)(m.a.mark(function j(){return m.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(25)]).then(e.bind(null,"7ZP+"));case 2:return u.abrupt("return",u.sent.default);case 3:case"end":return u.stop()}},j)}));function A(){return D.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{tsx:Mn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.1"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!0,identifier:"table-render-advanced"}},"table-render-demo":{component:Object(x.dynamic)({loader:function(){var D=Object(z.a)(m.a.mark(function j(){var d,u,h,y,C,r,l,s,w;return m.a.wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return d=e("K+nK"),S.t0=d,S.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return S.t1=S.sent,u=(0,S.t0)(S.t1),S.next=8,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(63)]).then(e.bind(null,"P2DI"));case 8:for(h=S.sent,y=[],C=0;C<6;C++)y.push({id:C.toString(),title:"\u6807\u9898".concat(C+1),created_at:new Date().getTime()});return r={type:"object",properties:{string:{title:"\u6807\u9898",type:"string","ui:width":"30%"},created_at:{title:"\u521B\u5EFA\u65F6\u95F4",type:"string",format:"date","ui:width":"30%"}}},l=[{title:"\u6807\u9898",dataIndex:"title"},{title:"\u521B\u5EFA\u65F6\u95F4",key:"since",dataIndex:"created_at",valueType:"date"},{title:"\u64CD\u4F5C",render:function(I,v){return u.default.createElement("a",{onClick:function(){return alert(I.title)}},"\u7F16\u8F91")}}],s=function(){var I=function(){return{rows:y,total:y.length}};return u.default.createElement(h.TableProvider,null,u.default.createElement(h.Search,{schema:r,api:I}),u.default.createElement(h.Table,{headerTitle:"\u6700\u7B80\u8868\u683C",columns:l,rowKey:"id"}))},w=s,S.abrupt("return",w);case 16:case"end":return S.stop()}},j)}));function A(){return D.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Wrapper;`}},dependencies:{react:{version:">=16.8.0"},"table-render":{version:"1.1.1"},antd:{version:"4.x",css:"antd/dist/antd.css"}},transform:!0,defaultShowCode:!0,identifier:"table-render-demo"}},"generator-demo":{component:Object(x.dynamic)({loader:function(){var D=Object(z.a)(m.a.mark(function j(){var d,u,h,y,C,r;return m.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,u=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(62)]).then(e.bind(null,"nYSz"));case 9:return s.t3=s.sent,h=(0,s.t2)(s.t3),y={type:"object",properties:{inputName:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string"}}},C=function(){return u.default.createElement("div",{style:{height:"80vh"}},u.default.createElement(h.default,{defaultValue:y}))},r=C,s.abrupt("return",r);case 15:case"end":return s.stop()}},j)}));function A(){return D.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.1.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"generator-demo"}},"generator-modal":{component:Object(x.dynamic)({loader:function(){var D=Object(z.a)(m.a.mark(function j(){return m.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(25)]).then(e.bind(null,"PPgD"));case 2:return u.abrupt("return",u.sent.default);case 3:case"end":return u.stop()}},j)}));function A(){return D.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:Rn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.1.2"},"react-dom":{version:">=16.9.0"}},identifier:"generator-modal"}},"generator-transformer":{component:Object(x.dynamic)({loader:function(){var D=Object(z.a)(m.a.mark(function j(){return m.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(25)]).then(e.bind(null,"jktF"));case 2:return u.abrupt("return",u.sent.default);case 3:case"end":return u.stop()}},j)}));function A(){return D.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:We}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.1.2"},"react-dom":{version:">=16.9.0"}},identifier:"generator-transformer"}},"generator-settings":{component:Object(x.dynamic)({loader:function(){var D=Object(z.a)(m.a.mark(function j(){return m.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(25)]).then(e.bind(null,"M63W"));case 2:return u.abrupt("return",u.sent.default);case 3:case"end":return u.stop()}},j)}));function A(){return D.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:_n}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.1.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-settings"}},"generator-playground":{component:Object(x.dynamic)({loader:function(){var D=Object(z.a)(m.a.mark(function j(){return m.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(25)]).then(e.bind(null,"TYW4"));case 2:return u.abrupt("return",u.sent.default);case 3:case"end":return u.stop()}},j)}));function A(){return D.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:Vn},"index.less":{import:"./index.less",content:et}},dependencies:{react:{version:">=16.8.0"},umi:{version:"3.4.19"},"fr-generator":{version:"2.1.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-playground"}}}},TIsu:function(Tn,yn,e){},Zs1V:function(Tn){Tn.exports=JSON.parse("{}")},dKoY:function(Tn,yn,e){"use strict";e.r(yn);var z=e("q1tI"),n=e.n(z),m=e("dEAq"),x=e.n(m),ce=e("0zqC"),W=e("ZpkN"),Ne=e("JjdP"),Pe=n.a.memo(Ne.default["schema-demo"].component),ve=n.a.memo(Ne.default["schema-demo-1"].component);yn.default=fn=>(n.a.useEffect(()=>{fn!=null&&fn.location.hash&&m.AnchorLink.scrollToAnchor(decodeURIComponent(fn.location.hash.slice(1)))},[]),n.a.createElement(n.a.Fragment,null,n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"markdown"},n.a.createElement("h1",{id:"schema-\u89C4\u8303"},n.a.createElement(m.AnchorLink,{to:"#schema-\u89C4\u8303","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"schema \u89C4\u8303"),n.a.createElement("h2",{id:"\u6982\u8FF0"},n.a.createElement(m.AnchorLink,{to:"#\u6982\u8FF0","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u6982\u8FF0"),n.a.createElement("ol",null,n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement("strong",null,n.a.createElement("code",null,"schema")," \u662F <FormRender/> \u7684\u5FC5\u586B props\uFF0C\u7528\u4E8E\u63CF\u8FF0\u8868\u5355\u7684\u57FA\u672C\u4FE1\u606F\u3001\u7ED3\u6784\u548C\u6821\u9A8C\u3002\u4ED6\u5728\u7ED3\u6784\u4E0A\u4F7F\u7528\u4E86 ",n.a.createElement("code",null,"JSON Schema")," \u56FD\u9645\u89C4\u8303(",n.a.createElement(m.Link,{to:"https://json-schema.org/understanding-json-schema/",target:"_blank"},"Understanding JSON Schema"),")\uFF0C\u4F8B\u5982\uFF1A")),n.a.createElement(W.a,{code:`// \u5BF9\u8C61\u7ED3\u6784\u5982\u4E0B:
{
  "title": "\u5BF9\u8C61",
  "type": "object",
  "properties": {
    "count": {
      "title": "\u6570\u5B57",
      "type": "number"
    }
  }
}
// \u5BF9\u8C61\u5217\u8868\u7ED3\u6784\u5982\u4E0B\uFF1A
{
  "title": "\u5BF9\u8C61\u6570\u7EC4",
  "type": "array",
  "items": {
    "type": "object",
    "properties": {
      "count": {
        "title": "\u6570\u5B57",
        "type": "number"
      }
    }
  }
}`,lang:"json"})),n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement("strong",null,"\u5355\u4E2A schema \u7684\u4E66\u5199\u5206\u4E3A",n.a.createElement("code",null,"\u57FA\u7840\u5C5E\u6027"),", ",n.a.createElement("code",null,"rules")," \u548C ",n.a.createElement("code",null,"props"),"\uFF0C",n.a.createElement("code",null,"\u57FA\u7840\u5C5E\u6027"),"\u4E3A\u5404\u4E2A\u7EC4\u4EF6\u5171\u901A\u7684\u63CF\u8FF0\uFF0C",n.a.createElement("code",null,"rules")," \u63CF\u8FF0\u6821\u9A8C\u8865\u5145\u4FE1\u606F\uFF0C",n.a.createElement("code",null,"props")," \u63CF\u8FF0\u7EC4\u4EF6 props\uFF0C\u4F8B\u5982\uFF1A")),n.a.createElement(W.a,{code:`{
  "type": "object",
  "properties": {
    "count": {
      // \u57FA\u7840\u5C5E\u6027
      "title": "\u4EE3\u53F7",
      "type": "string",
      "min": 6,
      // rules (\u8865\u5145\u6821\u9A8C\u4FE1\u606F)
      "rules": [
        {
          "pattern": "^[A-Za-z0-9]+$",
          "message": "\u53EA\u5141\u8BB8\u586B\u5199\u82F1\u6587\u5B57\u6BCD\u548C\u6570\u5B57"
        }
      ],
      // props (\u8865\u5145antd\u7EC4\u4EF6props)
      "props": {
        "allowClear": true
      }
    }
  }
}`,lang:"json"})),n.a.createElement("li",null,n.a.createElement("p",null,"\u201C\u6211\u8981\u4E00\u4E2A\u591A\u9009\u7EC4\u4EF6\uFF0C\u8BE5\u600E\u4E48\u5199\u5B83\u7684 schema\uFF1F\u201D \u5F88\u591A\u540C\u5B66\u9605\u8BFB schema \u6587\u6863\u7684\u76EE\u7684\u53EA\u662F\u5982\u6B64\uFF0C\u5EFA\u8BAE\u6253\u5F00 ",n.a.createElement(m.Link,{to:"/playground"},"playground"),", \u70B9\u51FB\u201C\u57FA\u7840\u63A7\u4EF6\u201D\u3002\u8FD9\u91CC\u6709\u6240\u6709 FormRender \u652F\u6301\u7684\u5C55\u793A\u4EE5\u53CA\u5BF9\u4E8E\u7684 schema"))),n.a.createElement("h2",{id:"\u57FA\u7840\u5C5E\u6027"},n.a.createElement(m.AnchorLink,{to:"#\u57FA\u7840\u5C5E\u6027","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u57FA\u7840\u5C5E\u6027"),n.a.createElement("p",null,"\u4E3A\u4E86\u66F4\u597D\u7406\u89E3\u57FA\u7840\u5C5E\u6027\u7684\u4F5C\u7528\uFF0C\u4ECE FormRender \u5185\u90E8\u5B9E\u73B0\u7684\u89D2\u5EA6\uFF1A"),n.a.createElement("ol",null,n.a.createElement("li",null,n.a.createElement("code",null,"type"),", ",n.a.createElement("code",null,"format"),", ",n.a.createElement("code",null,"enum")," \u548C ",n.a.createElement("code",null,"widget")," \u5B57\u6BB5\u51B3\u5B9A\u4E86\u4F7F\u7528\u54EA\u4E2A\u7EC4\u4EF6\u6765\u6E32\u67D3\u3002\u5177\u4F53\u5224\u65AD\u89C4\u5219\u89C1",n.a.createElement(m.AnchorLink,{to:"/form-render/advanced/widget#%E5%86%85%E7%BD%AE%E7%BB%84%E4%BB%B6"},"\u5185\u7F6E\u7EC4\u4EF6")),n.a.createElement("li",null,n.a.createElement("code",null,"type"),", ",n.a.createElement("code",null,"format"),", ",n.a.createElement("code",null,"min"),", ",n.a.createElement("code",null,"max"),", ",n.a.createElement("code",null,"required")," \u548C ",n.a.createElement("code",null,"rules")," \u5B57\u6BB5\u7528\u4E8E\u505A\u6821\u9A8C\u5224\u65AD"),n.a.createElement("li",null,n.a.createElement("code",null,"props")," \u5B57\u6BB5\u7528\u4E8E\u8865\u5145\u7EC4\u4EF6\u652F\u6301\u7684\u66F4\u4E3A\u7EC6\u81F4\u7684\u5C5E\u6027")),n.a.createElement("p",null,"\u4E00\u4E2A\u7B80\u5355\u7684\u4F7F\u7528\u5404\u79CD\u201C\u57FA\u7840\u5C5E\u6027\u201D\u7684\u6837\u4F8B\u5982\u4E0B\uFF1A"),n.a.createElement(W.a,{code:`export const basic = {
  displayType: 'row',
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
};`,lang:"js"})),n.a.createElement(ce.default,Ne.default["schema-demo"].previewerProps,n.a.createElement(Pe,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h3",{id:"title"},n.a.createElement(m.AnchorLink,{to:"#title","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"title"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1A",n.a.createElement("code",null,"string")),n.a.createElement("li",null,'\u8BE6\u7EC6\uFF1A\u8868\u5355\u7684\u6807\u9898\u4FE1\u606F\uFF0C\u4F5C\u4E3A label \u5C55\u793A\uFF0C\u6CE8\u610F title \u4E3A""\u65F6\u5360\u4F4D\uFF0Ctitle \u4E0D\u5199\u65F6\u4E0D\u5360\u4F4D')),n.a.createElement("p",null,"\u5982\u4E0B\u4F8B\uFF0C\u901A\u8FC7\u9009\u62E9\u6027\u4E0D\u4F7F\u7528 title\uFF0C\u8FBE\u5230\u5C55\u793A\u6548\u679C")),n.a.createElement(ce.default,Ne.default["schema-demo-1"].previewerProps,n.a.createElement(ve,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h3",{id:"description"},n.a.createElement(m.AnchorLink,{to:"#description","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"description"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1A",n.a.createElement("code",null,"string")),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u8868\u5355\u7684\u63CF\u8FF0\u4FE1\u606F\uFF0C\u5E38\u5C06\u586B\u5199\u6CE8\u610F\u70B9\u653E\u5165\u6B64\u53C2\u6570")),n.a.createElement("h3",{id:"type"},n.a.createElement(m.AnchorLink,{to:"#type","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"type"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Aone of [",n.a.createElement("code",null,"'string'"),", ",n.a.createElement("code",null,"'number'"),", ",n.a.createElement("code",null,"'boolean'"),", ",n.a.createElement("code",null,"'array'"),", ",n.a.createElement("code",null,"'object'"),", ",n.a.createElement("code",null,"'range'"),", ",n.a.createElement("code",null,"'html'"),"]"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1Atype \u63CF\u8FF0\u91CC\u7EC4\u4EF6\u7684\u503C\u7684\u6570\u636E\u7C7B\u578B\u3002\u7528\u4E8E\u6821\u9A8C\u6570\u636E\u7C7B\u578B\uFF0C\u4E5F\u7528\u4E8E\u5224\u65AD\u4F7F\u7528\u54EA\u4E2A\u7EC4\u4EF6\u6765\u6E32\u67D3\uFF0C\u4EE5\u53CA\u6821\u9A8C\u8868\u5355\u6570\u636E\u3002")),n.a.createElement("p",null,"\u6CE8 1\uFF1Arange \u662F FormRender \u72EC\u6709\u7684\uFF0C\u7528\u4E8E\u63CF\u8FF0\u533A\u95F4\u7C7B\u7EC4\u4EF6\uFF0C\u4F8B\u5982\u65F6\u95F4\u533A\u95F4\u9009\u62E9\u3002"),n.a.createElement(W.a,{code:`{
  "title": "\u65E5\u671F\u8303\u56F4",
  "type": "range",
  "format": "dateTime",
  "placeholder": ["\u5F00\u59CB", "\u7ED3\u675F"]
}`,lang:"json"}),n.a.createElement("p",null,"\u6CE8 2\uFF1Ahtml \u662F FormRender \u72EC\u6709\u7684\uFF0C\u7528\u4E8E\u63CF\u8FF0\u6587\u672C\u7C7B\u7EC4\u4EF6"),n.a.createElement(W.a,{code:`"html": {
  "title": "\u7EAF\u5B57\u7B26\u4E32",
  "type": "html",
  "default": "hello world"
}`,lang:"json"}),n.a.createElement("h3",{id:"format"},n.a.createElement(m.AnchorLink,{to:"#format","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"format"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("p",null,"\u7C7B\u578B\uFF1Aone of [",n.a.createElement("code",null,"'image'"),", ",n.a.createElement("code",null,"'textarea'"),", ",n.a.createElement("code",null,"'color'"),", ",n.a.createElement("code",null,"'email'"),", ",n.a.createElement("code",null,"'url'"),", ",n.a.createElement("code",null,"'dateTime'"),", ",n.a.createElement("code",null,"'date'"),", ",n.a.createElement("code",null,"'time'"),", ",n.a.createElement("code",null,"'upload'"),"]")),n.a.createElement("li",null,n.a.createElement("p",null,"\u8BE6\u7EC6\uFF1A\u7528\u6765\u63CF\u8FF0\u8F93\u5165\u6846\u7684\u683C\u5F0F\uFF0C\u8F85\u52A9 type \u4E00\u540C\u7528\u4E8E\u5224\u65AD\u4F7F\u7528\u54EA\u4E2A\u7EC4\u4EF6\u6765\u6E32\u67D3\uFF0C\u4EE5\u53CA\u6821\u9A8C\u8868\u5355\u6570\u636E"),n.a.createElement(W.a,{code:`// \u9ED8\u8BA4 input
"input": {
  "title": "\u7B80\u5355\u8F93\u5165\u6846",
  "type": "string",
}
// textarea
"textarea": {
  "title": "\u7B80\u5355\u6587\u672C\u7F16\u8F91\u6846",
  "type": "string",
  "format": "textarea"
}
// \u989C\u8272\u7EC4\u4EF6
"color": {
  "title": "\u989C\u8272\u9009\u62E9",
  "type": "string",
  "format": "color"
}
// \u65E5\u671F\u7EC4\u4EF6
"date": {
  "title": "\u65E5\u671F\u9009\u62E9",
  "type": "string",
  "format": "date" // "dateTime"
}
// \u65F6\u95F4\u7EC4\u4EF6
"time": {
  "title": "\u65F6\u95F4\u9009\u62E9",
  "type": "string",
  "format": "time"
}
// \u56FE\u7247\u94FE\u63A5\u7EC4\u4EF6
"image": {
  "title": "\u56FE\u7247\u5C55\u793A",
  "type": "string",
  "format": "image"
}`,lang:"json"}))),n.a.createElement("h3",{id:"default"},n.a.createElement(m.AnchorLink,{to:"#default","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"default"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("p",null,"\u7C7B\u578B\uFF1Aany")),n.a.createElement("li",null,n.a.createElement("p",null,"\u8BE6\u7EC6\uFF1A\u7EC4\u4EF6\u7684\u9ED8\u8BA4\u503C\uFF0C\u6CE8\u610F\u9ED8\u8BA4\u7684\u5BF9\u8C61\u7EC4\u4EF6\u4F7F\u7528 default \u65E0\u6548\uFF08\u5176\u503C\u4F1A\u7531\u5B50\u5143\u7D20\u503C\u51B3\u5B9A\uFF09\uFF0C\u5176\u4ED6\u7C7B\u578B\u5305\u62EC array \u90FD\u53EF\u4EE5\u4F7F\u7528 default\uFF1A"),n.a.createElement(W.a,{code:`"list": {
  "type": "array",
  "items": {
    "type": "object",
    "properties": {
      "x": {
        "type": "string",
      }
    }
  },
  "default": [{ "x": "a" }, { "x": "b" }]
}`,lang:"json"}))),n.a.createElement("h3",{id:"required"},n.a.createElement(m.AnchorLink,{to:"#required","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"required"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Aboolean"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u7528\u4E8E\u5224\u65AD\u662F\u5426\u5FC5\u586B")),n.a.createElement(W.a,{code:`"requiredInput": {
  "title": "\u8F93\u5165\u6846",
  "type": "string",
  "required": true
}`,lang:"json"}),n.a.createElement("h3",{id:"placeholder"},n.a.createElement(m.AnchorLink,{to:"#placeholder","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"placeholder"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Astring"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1AInput \u7B49\u5143\u7D20\u7684 placeholder\u3002\u8FD9\u4E2A\u5C5E\u6027\u592A\u5E38\u7528\u4E86\uFF0C\u867D\u7136\u4E0D\u662F\u6BCF\u4E2A\u7EC4\u4EF6\u90FD\u6709\uFF0C\u4F46 80%\u4EE5\u4E0A\u90FD\u6709\uFF0C\u6240\u4EE5\u51B3\u5B9A\u653E\u5728\u201C\u57FA\u7840\u5C5E\u6027\u201D\u3002\u6CE8\u610F placeholder \u7684\u503C\u9075\u5FAA\u5E95\u5C42\u5BF9\u5E94\u7EC4\u4EF6\u6240\u9700\u8981\u7684\u503C\u7684\u4E66\u5199\u89C4\u8303\uFF1A")),n.a.createElement(W.a,{code:`"dateRange": {
  "title": "\u65E5\u671F\u8303\u56F4",
  "type": "range",
  "format": "dateTime",
  "placeholder": ["\u5F00\u59CB", "\u7ED3\u675F"]
}`,lang:"js"}),n.a.createElement("h3",{id:"bind"},n.a.createElement(m.AnchorLink,{to:"#bind","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"bind"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Astring | string[] | false"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A")),n.a.createElement("ol",null,n.a.createElement("li",null,"\u5F53\u670D\u52A1\u7AEF\u63A5\u53E3\u83B7\u53D6\u7684\u5B57\u6BB5\u4E0E\u4F60\u5E0C\u671B\u7684\u8868\u5355\u5C55\u793A\u7ED3\u6784\u4E0D\u540C\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7 bind \u5B57\u6BB5\u7ED1\u5B9A\u7684\u65B9\u5F0F\u6307\u660E\u8868\u5355\u7684\u67D0\u4E2A\u5B57\u6BB5\u5BF9\u5E94\u7684\u662F\u5916\u90E8\u6570\u636E\u7684\u53E6\u4E00\u4E2A\u5B57\u6BB5\u3002\u8BE6\u7EC6\u4F8B\u5B50\u89C1 ",n.a.createElement(m.Link,{to:"/form-render/advanced/form-methods"},"\u201C\u8868\u5355\u4E0E\u5916\u754C\u7684\u4EA4\u4E92\u201D")," \u7684\u4F8B 3"),n.a.createElement("li",null,"\u7528\u6237\u5E76\u4E0D\u5E0C\u671B\u7EAF\u5C55\u793A\u7684\u5B57\u6BB5\u4E5F\u51FA\u73B0\u5728\u8868\u5355\u4E2D\uFF0C\u6B64\u65F6\uFF0C\u4F7F\u7528 bind: ",n.a.createElement("code",null,"false")," \u53EF\u907F\u514D\u5B57\u6BB5\u5728\u63D0\u4EA4\u65F6\u51FA\u73B0"),n.a.createElement("li",null,"\u6CE8\u610F\uFF1A\u8BF7\u4E0D\u8981 bind \u4E00\u4E2A\u6570\u7EC4\u7ED3\u6784\u4E0B\u9762\u7684\u5B57\u6BB5\uFF0C\u76EE\u524D\u6CA1\u6709\u5BF9\u6B64\u8FDB\u884C\u5904\u7406\uFF0C\u6240\u4EE5\u4F1A\u65E0\u6548\uFF08\u5728\u672A\u6765\u8FD9\u4E2A\u9650\u5236\u4F1A\u89E3\u9664\uFF09")),n.a.createElement("h3",{id:"min-0x-\u7248\u672C-minminitem-\u548C-minlength-\u7EDF\u4E00\u5230-min"},n.a.createElement(m.AnchorLink,{to:"#min-0x-\u7248\u672C-minminitem-\u548C-minlength-\u7EDF\u4E00\u5230-min","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"min (0.x \u7248\u672C ",n.a.createElement("code",null,"min"),",",n.a.createElement("code",null,"minItem")," \u548C ",n.a.createElement("code",null,"minLength")," \u7EDF\u4E00\u5230 ",n.a.createElement("code",null,"min"),")"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Aint"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u6700\u5C0F\u503C\u3002type:string/array \u65F6\u4EE3\u8868\u6700\u5C0F\u957F\u5EA6\uFF0Ctype:number \u65F6\u4EE3\u8868\u6700\u5C0F\u503C")),n.a.createElement("h3",{id:"max-0x-\u7248\u672C-maxmaxitem-\u548C-maxlength-\u7EDF\u4E00\u5230-max"},n.a.createElement(m.AnchorLink,{to:"#max-0x-\u7248\u672C-maxmaxitem-\u548C-maxlength-\u7EDF\u4E00\u5230-max","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"max (0.x \u7248\u672C ",n.a.createElement("code",null,"max"),",",n.a.createElement("code",null,"maxItem")," \u548C ",n.a.createElement("code",null,"maxLength")," \u7EDF\u4E00\u5230 ",n.a.createElement("code",null,"max"),")"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Aint"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u6700\u5927\u503C\u3002type:string/array \u65F6\u4EE3\u8868\u6700\u5927\u957F\u5EA6\uFF0Ctype:number \u65F6\u4EE3\u8868\u6700\u5927\u503C")),n.a.createElement("h3",{id:"disabled-0x-\u7248\u672C-uidisabled"},n.a.createElement(m.AnchorLink,{to:"#disabled-0x-\u7248\u672C-uidisabled","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"disabled (0.x \u7248\u672C ",n.a.createElement("code",null,"ui:disabled"),")"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Aboolean"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u7EC4\u4EF6\u662F\u5426\u7981\u7528\u72B6\u6001")),n.a.createElement("h3",{id:"readonly-0x-\u7248\u672C-uireadonly"},n.a.createElement(m.AnchorLink,{to:"#readonly-0x-\u7248\u672C-uireadonly","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"readOnly (0.x \u7248\u672C ",n.a.createElement("code",null,"ui:readonly"),")"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Aboolean"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u7EC4\u4EF6\u662F\u5426\u53EA\u8BFB\u72B6\u6001")),n.a.createElement("h3",{id:"hidden-0x-\u7248\u672C-uihidden"},n.a.createElement(m.AnchorLink,{to:"#hidden-0x-\u7248\u672C-uihidden","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"hidden (0.x \u7248\u672C ",n.a.createElement("code",null,"ui:hidden"),")"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Aboolean"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u7EC4\u4EF6\u662F\u5426\u9690\u85CF\u72B6\u6001")),n.a.createElement("h3",{id:"displaytype-0x-\u7248\u672C-uidisplaytype"},n.a.createElement(m.AnchorLink,{to:"#displaytype-0x-\u7248\u672C-uidisplaytype","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"displayType (0.x \u7248\u672C ",n.a.createElement("code",null,"ui:displayType"),")"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1A",n.a.createElement("code",null,"'row'")," | ",n.a.createElement("code",null,"'column'")),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1ALabel \u4E0E Field \u7684\u5C55\u793A\u5173\u7CFB\uFF0Crow \u8868\u793A\u5E76\u6392\u5C55\u793A\uFF0Ccolumn \u8868\u793A\u4E24\u6392\u5C55\u793A")),n.a.createElement("h3",{id:"width-0x-\u7248\u672C-uiwidth"},n.a.createElement(m.AnchorLink,{to:"#width-0x-\u7248\u672C-uiwidth","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"width (0.x \u7248\u672C ",n.a.createElement("code",null,"ui:width"),")"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Astring"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u5355\u4E2A\u5143\u7D20\u7684\u5C55\u793A\u5BBD\u5EA6\uFF08\u5E26 label \u4E00\u8D77\uFF09\uFF0C\u4F8B\u5982 '20%'")),n.a.createElement("h3",{id:"labelwidth-0x-\u7248\u672C-uilabelwidth"},n.a.createElement(m.AnchorLink,{to:"#labelwidth-0x-\u7248\u672C-uilabelwidth","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"labelWidth (0.x \u7248\u672C ",n.a.createElement("code",null,"ui:labelWidth"),")"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Anumber | string"),n.a.createElement("li",null,"\u9ED8\u8BA4\u503C\uFF1A110"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1Alabel \u7684\u5BBD\u5EA6\uFF0C\u6570\u5B57\u503C\u5355\u4F4D\u4E3A px\uFF0C\u4E5F\u53EF\u4F7F\u7528'20%'/'2rem'\u7B49")),n.a.createElement("h3",{id:"classname-0x-\u7248\u672C-uiclassname"},n.a.createElement(m.AnchorLink,{to:"#classname-0x-\u7248\u672C-uiclassname","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"className (0.x \u7248\u672C ",n.a.createElement("code",null,"ui:className"),")"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Astring"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u6307\u660E\u5355\u4E2A\u8868\u5355\u5143\u7D20\u7684 className\uFF0C\u65B9\u4FBF\u81EA\u5B9A\u4E49\u6837\u5F0F")),n.a.createElement("p",null,"\u4F8B\u5982\u5982\u4E0B\u7684 schema \u4F1A\u5728\u751F\u6210\u5143\u7D20\u7684 ",n.a.createElement("code",null,"fr-field")," \u8FD9\u5C42\u6DFB\u52A0\u4E0A\u7528\u6237\u5B9A\u4E49\u7684 ",n.a.createElement("code",null,"my-className")),n.a.createElement(W.a,{code:`audio_on_mic_limit: {
  className: 'my-className',
  title: '\u540C\u65F6\u652F\u6301\u8FDE\u9EA6\u4EBA\u6570',
  default: '1',
  enum: ['1', '2', '3'],
  enumNames: ['1\u4EBA', '2\u4EBA', '3\u4EBA'],
  type: 'string',
  widget: 'radio',
  labelWidth: 145,
}`,lang:"js"}),n.a.createElement("img",{src:"https://img.alicdn.com/imgextra/i2/O1CN01iUmLkw1pyzJYsV2fM_!!6000000005430-2-tps-541-119.png",width:"600px"}),n.a.createElement("h3",{id:"widget-0x-\u7248\u672C-uiwidget"},n.a.createElement(m.AnchorLink,{to:"#widget-0x-\u7248\u672C-uiwidget","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"widget (0.x \u7248\u672C ",n.a.createElement("code",null,"ui:widget"),")"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Astring"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u6307\u5B9A\u4F7F\u7528\u54EA\u4E2A\u7EC4\u4EF6\u6765\u6E32\u67D3\uFF0C\u662F\u4F18\u5148\u7EA7\u6700\u9AD8\u7684\u4E00\u4E2A\u5B57\u6BB5\u3002\u7528\u4E8E\u660E\u786E\u6307\u5B9A\u4F7F\u7528\u67D0\u4E2A\u201C\u5185\u7F6E\u7EC4\u4EF6\u201D\u6216\u201C\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u201D\u3002\u4F8B\u5982\uFF1A")),n.a.createElement(W.a,{code:`{
  "title": "\u5355\u9009",
  "type": "string",
  "enum": ["hz", "wh", "gy"],
  "enumNames": ["\u676D\u5DDE", "\u6B66\u6C49", "\u8D35\u9633"],
  "widget": "select" // \u660E\u786E\u6307\u660E\u4F7F\u7528\u4E0B\u62C9\u9009\u62E9\u7EC4\u4EF6
}`,lang:"json"}),n.a.createElement("p",null,"FR \u9ED8\u8BA4\u652F\u6301\u7684\u5185\u7F6E\u7EC4\u4EF6\uFF0C\u4EE5\u53CA\u8BE6\u7EC6\u5339\u914D\u89C4\u5219\u89C1",n.a.createElement(m.Link,{to:"/form-render/schema/inner-widget"},"\u5185\u7F6E\u7EC4\u4EF6"),"\u3002"),n.a.createElement("p",null,n.a.createElement("code",null,"widget"),"\u4E5F\u53EF\u4EE5\u7528\u4E8E\u5339\u914D\u201C\u81EA\u5B9A\u4E49\u201D\u7684\u7EC4\u4EF6\uFF0C\u5982\u4F55\u4F7F\u7528 ",n.a.createElement("code",null,"widget")," \u5B57\u6BB5\u548C ",n.a.createElement("code",null,"widgets")," props \u6765\u505A\u5B9A\u5236\u5316\u8868\u5355\u5143\u7D20\u6E32\u67D3\uFF0C\u53C2\u89C1",n.a.createElement(m.Link,{to:"/form-render/advanced/widget"},"\u81EA\u5B9A\u4E49\u7EC4\u4EF6")),n.a.createElement("h3",{id:"readonlywidget"},n.a.createElement(m.AnchorLink,{to:"#readonlywidget","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"readOnlyWidget"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Astring"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u6307\u5B9A\u53EA\u8BFB\u6A21\u5F0F\u4E0B\u7528\u54EA\u4E2A\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u6E32\u67D3")),n.a.createElement("p",null,"readOnly=true \u7684\u60C5\u51B5\uFF0CFormRender \u9ED8\u8BA4\u4F7F\u7528 html \u7EC4\u4EF6\u6E32\u67D3\u3002\u7279\u6B8A\u60C5\u51B5 html \u7EC4\u4EF6\u65E0\u6CD5\u6EE1\u8DB3\u9700\u6C42\uFF0C\u6B64\u65F6\u901A\u8FC7\u6307\u660E readOnlyWidget \u7684\u65B9\u5F0F\u81EA\u5B9A\u4E49\u6E32\u67D3"),n.a.createElement(W.a,{code:`{
  "title": "\u5355\u9009",
  "type": "string",
  "widget": "myWidget", // \u6307\u660E\u4F7F\u7528 myWidget \u6765\u6E32\u67D3
  "readOnlyWidget": "myReadOnlyWidget" // \u6307\u660E\u5728\u53EA\u8BFB\u6A21\u5F0F\u4F7F\u7528 myReadOnlyWidget \u6765\u6E32\u67D3
}`,lang:"json"}),n.a.createElement("h3",{id:"extra"},n.a.createElement(m.AnchorLink,{to:"#extra","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"extra"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Astring"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u7528\u4E8E\u5728\u5143\u7D20\u4E0B\u5C55\u793A\u66F4\u591A\u8BF4\u660E\u4FE1\u606F\uFF0Cextra \u53EF\u4EE5\u662F html string\uFF0C\u4E5F\u53EF\u4EE5\u662F\u7EAF\u6587\u6848\uFF0C\u4F1A\u5C55\u793A\u5728\u5143\u7D20\u4E0B\u9762\u4E00\u884C\u7D27\u8D34")),n.a.createElement(W.a,{code:`{
  "title": "\u5355\u9009",
  "type": "string",
  "extra": "<a href='xxx'>\u8BE6\u7EC6\u89C4\u8303</a>"
}`,lang:"json"}),n.a.createElement("h3",{id:"properties"},n.a.createElement(m.AnchorLink,{to:"#properties","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"properties"),n.a.createElement("p",null,"\u53EA\u5728\u5BF9\u8C61\u7EC4\u4EF6\uFF08type: object\uFF09\u4E2D\u4F7F\u7528\uFF0C",n.a.createElement("code",null,"properties")," \u7528\u4E8E\u5305\u88F9\u5BF9\u8C61\u7684\u5B50\u5C5E\u6027\uFF1A"),n.a.createElement(W.a,{code:`{
  "title": "\u5BF9\u8C61",
  "type": "object",
  "properties": {
    "tickets": {
      "title": "\u95E8\u7968\u6570",
      "type": "number"
    }
  }
}`,lang:"json"}),n.a.createElement("h3",{id:"items"},n.a.createElement(m.AnchorLink,{to:"#items","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"items"),n.a.createElement("p",null,"\u53EA\u5728\u5217\u8868\u7C7B\u7EC4\u4EF6\u4E2D\u4F7F\u7528\uFF0C\u63CF\u8FF0 Array \u4E2D\u6BCF\u4E2A item \u7684\u7ED3\u6784\u3002item \u76EE\u524D\u53EA\u652F\u6301\u662F\u5BF9\u8C61"),n.a.createElement(W.a,{code:`{
  "title": "\u5BF9\u8C61\u6570\u7EC4",
  "type": "array",
  "min": 1,
  "max": 3,
  "widget": "list0",
  "items": {
    "type": "object",
    "properties": {
      "tickets": {
        "title": "\u95E8\u7968\u6570",
        "type": "number"
      }
    }
  }
}`,lang:"json"}),n.a.createElement("h3",{id:"enum--enumnames"},n.a.createElement(m.AnchorLink,{to:"#enum--enumnames","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"enum & enumNames"),n.a.createElement("p",null,"\u53EA\u5728\u9009\u62E9\u7C7B\u7EC4\u4EF6\u4E2D\u4F7F\u7528\uFF0C\u7528\u4E8E\u63CF\u8FF0\u679A\u4E3E\u503C\u7684\u503C\u548C\u6587\u6848"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Astring | number"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u9009\u9879\u503C & \u9009\u9879\u7684\u6587\u6848")),n.a.createElement(W.a,{code:`// \u5355\u9009
{
  "title": "\u5355\u9009",
  "type": "string",
  "enum": ["hz", "wh", "gy"],
  "enumNames": ["\u676D\u5DDE", "\u6B66\u6C49", "\u8D35\u9633"],
  "default": "hz"
}
// \u591A\u9009
{
  "title": "\u591A\u9009",
  "type": "array",
  "items": {
    "type": "string"
  },
  "enum": ["hz", "wh", "gy"],
  "enumNames": ["\u676D\u5DDE", "\u6B66\u6C49", "\u8D35\u9633"]
}`,lang:"json"}),n.a.createElement("p",null,"\u6CE8: \u65E7\u7248 form-render \u4F1A\u9ED8\u8BA4\u9009\u4E2D\u7B2C\u4E00\u9879\uFF0C\u4F46\u662F\u65B0\u7248\u9664\u975E\u901A\u8FC7 default \u6307\u660E\uFF0C\u5426\u5219\u4E0D\u4F1A\u9009\u4E2D\u4EFB\u4F55\u4E00\u9879\uFF0C\u4E14\u521D\u59CB\u503C\u662F undefined"),n.a.createElement("h3",{id:"rules"},n.a.createElement(m.AnchorLink,{to:"#rules","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"rules"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1A\u6570\u7EC4"),n.a.createElement("li",null,"\u8BE6\u7EC6\u8BF4\u660E\uFF1A\u6240\u6709\u9664\u4E86\u5FC5\u586B\u4EE5\u5916\u7684\u8868\u5355\u6821\u9A8C\u63CF\u8FF0\u901A\u8FC7 ",n.a.createElement("code",null,"rules")," \u5B57\u6BB5\uFF0C\u8BE6\u89C1 ",n.a.createElement(m.Link,{to:"/form-render/schema/rules"},"rules \u4E66\u5199\u89C4\u8303"))),n.a.createElement("h3",{id:"props-0x-\u7248\u672C-uioptions"},n.a.createElement(m.AnchorLink,{to:"#props-0x-\u7248\u672C-uioptions","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"props (0.x \u7248\u672C ",n.a.createElement("code",null,"ui:options"),")"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Aobject"),n.a.createElement("li",null,"\u8BE6\u7EC6\u8BF4\u660E\uFF1A\u5F53\u57FA\u7840\u5B57\u6BB5\u4E0D\u591F\u63CF\u8FF0\u7EC4\u4EF6\u7684\u5C55\u793A\u65F6\uFF0C\u4F7F\u7528 ",n.a.createElement("code",null,"props")," \u5B57\u6BB5\u4F5C\u4E3A\u6269\u5C55\u3002",n.a.createElement("code",null,"props")," \u7684\u5177\u4F53\u5C5E\u6027\u53EF\u4EE5\u67E5\u8BE2 antd \u7684\u7EC4\u4EF6\u6587\u6863\u3002\u6240\u6709 ",n.a.createElement("code",null,"props")," \u4E2D\u7684\u5C5E\u6027\u90FD\u4F1A\u76F4\u63A5\u900F\u4F20\u7ED9\u7EC4\u4EF6\uFF0C\u6240\u4EE5\u7406\u8BBA\u4E0A FormRender \u652F\u6301\u6240\u6709 antd \u7EC4\u4EF6\u5E93\u652F\u6301\u7684\u5C55\u793A\uFF0C\u4F8B\u5982")),n.a.createElement(W.a,{code:`url: {
  title: "\u7F51\u5740",
  type: "string",
  props: {
    prefix: 'https://',
    suffix: '.com'
  }
}`,lang:"js"}),n.a.createElement("p",null,"\u8BE6\u89C1 ",n.a.createElement(m.Link,{to:"/form-render/schema/props"},"props \u4E66\u5199\u89C4\u8303"))))))},p8sG:function(Tn,yn,e){"use strict";Tn.exports=e("80pN")}}]);
