(window.webpackJsonp=window.webpackJsonp||[]).push([[35,10],{"0zqC":function(Kn,yn,e){"use strict";e.r(yn);var U=e("tJVT"),n=e("q1tI"),O=e.n(n),L=e("wx14"),oe=e("rePB"),J=e("ODXe"),je=e("U8pU"),Fe=e("Ff2n"),ve=e("VTBJ"),Mn=e("TSYQ"),Ie=e.n(Mn),ln=e("Zm9Q"),wn=e("5Z9U"),Rn=e("6cGi"),hn=e("KQm4"),Xe=e("wgJM"),xn=e("t23M");function Bn(r){var s=Object(n.useRef)(),m=Object(n.useRef)(!1);function b(){for(var S=arguments.length,y=new Array(S),R=0;R<S;R++)y[R]=arguments[R];m.current||(Xe.a.cancel(s.current),s.current=Object(Xe.a)(function(){r.apply(void 0,y)}))}return Object(n.useEffect)(function(){return function(){m.current=!0,Xe.a.cancel(s.current)}},[]),b}function En(r){var s=Object(n.useRef)([]),m=Object(n.useState)({}),b=Object(J.a)(m,2),S=b[1],y=Object(n.useRef)(typeof r=="function"?r():r),R=Bn(function(){var B=y.current;s.current.forEach(function($){B=$(B)}),s.current=[],y.current=B,S({})});function E(B){s.current.push(B),R()}return[y.current,E]}var We=e("4IlW");function _n(r,s){var m,b=r.prefixCls,S=r.id,y=r.active,R=r.rtl,E=r.tab,B=E.key,$=E.tab,x=E.disabled,Y=E.closeIcon,z=r.tabBarGutter,ie=r.tabPosition,Q=r.closable,X=r.renderWrapper,de=r.removeAriaLabel,V=r.editable,ee=r.onClick,ae=r.onRemove,k=r.onFocus,le="".concat(b,"-tab");n.useEffect(function(){return ae},[]);var _={};ie==="top"||ie==="bottom"?_[R?"marginLeft":"marginRight"]=z:_.marginBottom=z;var be=V&&Q!==!1&&!x;function te(se){x||ee(se)}function me(se){se.preventDefault(),se.stopPropagation(),V.onEdit("remove",{key:B,event:se})}var fe=n.createElement("div",{key:B,ref:s,className:Ie()(le,(m={},Object(oe.a)(m,"".concat(le,"-with-remove"),be),Object(oe.a)(m,"".concat(le,"-active"),y),Object(oe.a)(m,"".concat(le,"-disabled"),x),m)),style:_,onClick:te},n.createElement("div",{role:"tab","aria-selected":y,id:S&&"".concat(S,"-tab-").concat(B),className:"".concat(le,"-btn"),"aria-controls":S&&"".concat(S,"-panel-").concat(B),"aria-disabled":x,tabIndex:x?null:0,onClick:function(H){H.stopPropagation(),te(H)},onKeyDown:function(H){[We.a.SPACE,We.a.ENTER].includes(H.which)&&(H.preventDefault(),te(H))},onFocus:k},$),be&&n.createElement("button",{type:"button","aria-label":de||"remove",tabIndex:0,className:"".concat(le,"-remove"),onClick:function(H){H.stopPropagation(),me(H)}},Y||V.removeIcon||"\xD7"));return X&&(fe=X(fe)),fe}var Vn=n.forwardRef(_n),et={width:0,height:0,left:0,top:0};function ct(r,s,m){return Object(n.useMemo)(function(){for(var b,S=new Map,y=s.get((b=r[0])===null||b===void 0?void 0:b.key)||et,R=y.left+y.width,E=0;E<r.length;E+=1){var B=r[E].key,$=s.get(B);if(!$){var x;$=s.get((x=r[E-1])===null||x===void 0?void 0:x.key)||et}var Y=S.get(B)||Object(ve.a)({},$);Y.right=R-Y.left-Y.width,S.set(B,Y)}return S},[r.map(function(b){return b.key}).join("_"),s,m])}var P={width:0,height:0,left:0,top:0,right:0};function I(r,s,m,b,S){var y=S.tabs,R=S.tabPosition,E=S.rtl,B,$,x;["top","bottom"].includes(R)?(B="width",$=E?"right":"left",x=Math.abs(s.left)):(B="height",$="top",x=-s.top);var Y=s[B],z=m[B],ie=b[B],Q=Y;return z+ie>Y&&(Q=Y-ie),Object(n.useMemo)(function(){if(!y.length)return[0,0];for(var X=y.length,de=X,V=0;V<X;V+=1){var ee=r.get(y[V].key)||P;if(ee[$]+ee[B]>x+Q){de=V-1;break}}for(var ae=0,k=X-1;k>=0;k-=1){var le=r.get(y[k].key)||P;if(le[$]<x){ae=k+1;break}}return[ae,de]},[r,x,Q,R,y.map(function(X){return X.key}).join("_"),E])}var D=e("Gytx"),d=e.n(D),o=e("Kwbf");function p(r,s){var m=r.prefixCls,b=r.invalidate,S=r.item,y=r.renderItem,R=r.responsive,E=r.registerSize,B=r.itemKey,$=r.className,x=r.style,Y=r.children,z=r.display,ie=r.order,Q=r.component,X=Q===void 0?"div":Q,de=Object(Fe.a)(r,["prefixCls","invalidate","item","renderItem","responsive","registerSize","itemKey","className","style","children","display","order","component"]),V=R&&!z;function ee(be){E(B,be)}n.useEffect(function(){return function(){ee(null)}},[]);var ae=y&&S!==void 0?y(S):Y,k;b||(k={opacity:V?0:1,height:V?0:void 0,overflowY:V?"hidden":void 0,order:R?ie:void 0,pointerEvents:V?"none":void 0});var le={};V&&(le["aria-hidden"]=!0);var _=n.createElement(X,Object(L.a)({className:Ie()(!b&&m,$),style:Object(ve.a)(Object(ve.a)({},k),x)},le,de,{ref:s}),ae);return R&&(_=n.createElement(xn.default,{onResize:function(te){var me=te.offsetWidth;ee(me)}},_)),_}var g=n.forwardRef(p);g.displayName="Item";var C=g;function a(){var r=Object(n.useState)({}),s=Object(J.a)(r,2),m=s[1],b=Object(n.useRef)([]),S=Object(n.useRef)(!1),y=0,R=0;Object(n.useEffect)(function(){return function(){S.current=!0}},[]);function E(B){var $=y;y+=1,b.current.length<$+1&&(b.current[$]=B);var x=b.current[$];function Y(z){b.current[$]=typeof z=="function"?z(b.current[$]):z,Xe.a.cancel(R),R=Object(Xe.a)(function(){S.current||m({})})}return[x,Y]}return E}var l=function(s,m){var b=n.useContext(A);if(!b){var S=s.component,y=S===void 0?"div":S,R=Object(Fe.a)(s,["component"]);return n.createElement(y,Object(L.a)({},R,{ref:m}))}var E=b.className,B=Object(Fe.a)(b,["className"]),$=s.className,x=Object(Fe.a)(s,["className"]);return n.createElement(A.Provider,{value:null},n.createElement(C,Object(L.a)({ref:m,className:Ie()(E,$)},B,x)))},i=n.forwardRef(l);i.displayName="RawItem";var M=i,A=n.createContext(null),j="responsive",c="invalidate";function F(r){return"+ ".concat(r.length," ...")}function h(r,s){var m=r.prefixCls,b=m===void 0?"rc-overflow":m,S=r.data,y=S===void 0?[]:S,R=r.renderItem,E=r.renderRawItem,B=r.itemKey,$=r.itemWidth,x=$===void 0?10:$,Y=r.ssr,z=r.style,ie=r.className,Q=r.maxCount,X=r.renderRest,de=r.renderRawRest,V=r.suffix,ee=r.component,ae=ee===void 0?"div":ee,k=r.itemComponent,le=r.onVisibleChange,_=Object(Fe.a)(r,["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"]),be=a(),te=Y==="full",me=be(null),fe=Object(J.a)(me,2),se=fe[0],H=fe[1],ce=se||0,ye=be(new Map),ge=Object(J.a)(ye,2),Re=ge[0],Le=ge[1],Oe=be(0),Se=Object(J.a)(Oe,2),we=Se[0],Me=Se[1],Ae=be(0),Ne=Object(J.a)(Ae,2),xe=Ne[0],_e=Ne[1],Ve=be(0),Je=Object(J.a)(Ve,2),Qe=Je[0],$e=Je[1],Dn=Object(n.useState)(null),rn=Object(J.a)(Dn,2),Ze=rn[0],un=rn[1],bn=Object(n.useState)(null),On=Object(J.a)(bn,2),Te=On[0],He=On[1],en=n.useMemo(function(){return Te===null&&te?Number.MAX_SAFE_INTEGER:Te||0},[Te,se]),ke=Object(n.useState)(!1),Ln=Object(J.a)(ke,2),zn=Ln[0],$n=Ln[1],an="".concat(b,"-item"),Pn=Math.max(we,xe),dn=y.length&&Q===j,In=Q===c,nn=dn||typeof Q=="number"&&y.length>Q,sn=Object(n.useMemo)(function(){var he=y;return dn?se===null&&te?he=y:he=y.slice(0,Math.min(y.length,ce/x)):typeof Q=="number"&&(he=y.slice(0,Q)),he},[y,x,se,Q,dn]),Nn=Object(n.useMemo)(function(){return dn?y.slice(en+1):y.slice(sn.length)},[y,sn,dn,en]),fn=Object(n.useCallback)(function(he,Ee){var Be;return typeof B=="function"?B(he):(Be=B&&(he==null?void 0:he[B]))!==null&&Be!==void 0?Be:Ee},[B]),qe=Object(n.useCallback)(R||function(he){return he},[R]);function Ge(he,Ee){He(he),Ee||($n(he<y.length-1),le==null||le(he))}function Yn(he,Ee){H(Ee.clientWidth)}function Hn(he,Ee){Le(function(Be){var tn=new Map(Be);return Ee===null?tn.delete(he):tn.set(he,Ee),tn})}function tt(he,Ee){_e(Ee),Me(xe)}function Cn(he,Ee){$e(Ee)}function gn(he){return Re.get(fn(sn[he],he))}n.useLayoutEffect(function(){if(ce&&Pn&&sn){var he=Qe,Ee=sn.length,Be=Ee-1;if(!Ee){Ge(0),un(null);return}for(var tn=0;tn<Ee;tn+=1){var Zn=gn(tn);if(Zn===void 0){Ge(tn-1,!0);break}if(he+=Zn,tn===Be-1&&he+gn(Be)<=ce){Ge(Be),un(null);break}else if(he+Pn>ce){Ge(tn-1),un(he-Zn-Qe+xe);break}else if(tn===Be){Ge(Be),un(he-Qe);break}}V&&gn(0)+Qe>ce&&un(null)}},[ce,Re,xe,Qe,fn,sn]);var Gn=zn&&!!Nn.length,Sn={};Ze!==null&&dn&&(Sn={position:"absolute",left:Ze,top:0});var pn={prefixCls:an,responsive:dn,component:k,invalidate:In},Qn=E?function(he,Ee){var Be=fn(he,Ee);return n.createElement(A.Provider,{key:Be,value:Object(ve.a)(Object(ve.a)({},pn),{},{order:Ee,item:he,itemKey:Be,registerSize:Hn,display:Ee<=en})},E(he,Ee))}:function(he,Ee){var Be=fn(he,Ee);return n.createElement(C,Object(L.a)({},pn,{order:Ee,key:Be,item:he,renderItem:qe,itemKey:Be,registerSize:Hn,display:Ee<=en}))},An,Xn={order:Gn?en:Number.MAX_SAFE_INTEGER,className:"".concat(an,"-rest"),registerSize:tt,display:Gn};if(de)de&&(An=n.createElement(A.Provider,{value:Object(ve.a)(Object(ve.a)({},pn),Xn)},de(Nn)));else{var cn=X||F;An=n.createElement(C,Object(L.a)({},pn,Xn),typeof cn=="function"?cn(Nn):cn)}var Fn=n.createElement(ae,Object(L.a)({className:Ie()(!In&&b,ie),style:z,ref:s},_),sn.map(Qn),nn?An:null,V&&n.createElement(C,Object(L.a)({},pn,{order:en,className:"".concat(an,"-suffix"),registerSize:Cn,display:!0,style:Sn}),V));return dn&&(Fn=n.createElement(xn.default,{onResize:Yn},Fn)),Fn}var t=n.forwardRef(h);t.displayName="Overflow",t.Item=M,t.RESPONSIVE=j,t.INVALIDATE=c;var v=t,u=v,N=e("1OyB"),K=e("vuIU"),W=e("Ji7U"),Z=e("LK+K"),G=e("bT9E"),ue=e("YrtM"),De=n.createContext(null);function Ke(r,s){var m=Object(ve.a)({},r);return Object.keys(s).forEach(function(b){var S=s[b];S!==void 0&&(m[b]=S)}),m}function mn(r){var s=r.children,m=r.locked,b=Object(Fe.a)(r,["children","locked"]),S=n.useContext(De),y=Object(ue.a)(function(){return Ke(S,b)},[S,b],function(R,E){return!m&&(R[0]!==E[0]||!d()(R[1],E[1]))});return n.createElement(De.Provider,{value:y},s)}function jn(r,s,m,b){var S=n.useContext(De),y=S.activeKey,R=S.onActive,E=S.onInactive,B={active:y===r};return s||(B.onMouseEnter=function($){m==null||m({key:r,domEvent:$}),R(r)},B.onMouseLeave=function($){b==null||b({key:r,domEvent:$}),E(r)}),B}function Wn(r){var s=r.item,m=Object(Fe.a)(r,["item"]);return Object.defineProperty(m,"item",{get:function(){return Object(o.a)(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),s}}),m}function f(r){var s=r.icon,m=r.props,b=r.children,S;return typeof s=="function"?S=n.createElement(s,Object(ve.a)({},m)):S=s,S||b||null}function T(r){var s=n.useContext(De),m=s.mode,b=s.rtl,S=s.inlineIndent;if(m!=="inline")return null;var y=r;return b?{paddingRight:y*S}:{paddingLeft:y*S}}var w=[],pe=n.createContext(null);function ne(){return n.useContext(pe)}var Pe=n.createContext(w);function Ue(r){var s=n.useContext(Pe);return n.useMemo(function(){return r!==void 0?[].concat(Object(hn.a)(s),[r]):s},[s,r])}var Ye=n.createContext(null),Ut=n.createContext(null);function Jt(r,s){return r===void 0?null:"".concat(r,"-").concat(s)}function zt(r){var s=n.useContext(Ut);return Jt(s,r)}var br=function(r){Object(W.a)(m,r);var s=Object(Z.a)(m);function m(){return Object(N.a)(this,m),s.apply(this,arguments)}return Object(K.a)(m,[{key:"render",value:function(){var S=this.props,y=S.title,R=S.attribute,E=S.elementRef,B=Object(Fe.a)(S,["title","attribute","elementRef"]),$=Object(G.a)(B,["eventKey"]);return Object(o.a)(!R,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),n.createElement(u.Item,Object(L.a)({},R,{title:typeof y=="string"?y:void 0},$,{ref:E}))}}]),m}(n.Component),Or=function(s){var m,b=s.style,S=s.className,y=s.eventKey,R=s.disabled,E=s.itemIcon,B=s.children,$=s.role,x=s.onMouseEnter,Y=s.onMouseLeave,z=s.onClick,ie=s.onKeyDown,Q=s.onFocus,X=Object(Fe.a)(s,["style","className","eventKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"]),de=zt(y),V=n.useContext(De),ee=V.prefixCls,ae=V.onItemClick,k=V.disabled,le=V.overflowDisabled,_=V.itemIcon,be=V.selectedKeys,te=V.onActive,me="".concat(ee,"-item"),fe=n.useRef(),se=n.useRef(),H=k||R,ce=Ue(y),ye=function(Ve){return{key:y,keyPath:ce,item:fe.current,domEvent:Ve}},ge=E||_,Re=jn(y,H,x,Y),Le=Re.active,Oe=Object(Fe.a)(Re,["active"]),Se=be.includes(y),we=T(ce.length),Me=function(Ve){if(!H){var Je=ye(Ve);z==null||z(Wn(Je)),ae(Je)}},Ae=function(Ve){if(ie==null||ie(Ve),Ve.which===We.a.ENTER){var Je=ye(Ve);z==null||z(Wn(Je)),ae(Je)}},Ne=function(Ve){te(y),Q==null||Q(Ve)},xe={};return s.role==="option"&&(xe["aria-selected"]=Se),n.createElement(br,Object(L.a)({ref:fe,elementRef:se,role:$===null?"none":$||"menuitem",tabIndex:R?null:-1,"data-menu-id":le&&de?null:de},X,Oe,xe,{component:"li","aria-disabled":R,style:Object(ve.a)(Object(ve.a)({},we),b),className:Ie()(me,(m={},Object(oe.a)(m,"".concat(me,"-active"),Le),Object(oe.a)(m,"".concat(me,"-selected"),Se),Object(oe.a)(m,"".concat(me,"-disabled"),H),m),S),onClick:Me,onKeyDown:Ae,onFocus:Ne}),B,n.createElement(f,{props:Object(ve.a)(Object(ve.a)({},s),{},{isSelected:Se}),icon:ge}))};function Cr(r){var s=r.eventKey,m=ne(),b=Ue(s);return n.useEffect(function(){if(m)return m.registerPath(s,b),function(){m.unregisterPath(s,b)}},[b]),m?null:n.createElement(Or,r)}var Dt=Cr;function Pt(r,s){return Object(ln.a)(r).map(function(m,b){if(n.isValidElement(m)){var S=m.key;return S==null&&(S="tmp_key-".concat([].concat(Object(hn.a)(s),[b]).join("-"))),n.cloneElement(m,{key:S,eventKey:S})}return m})}function nt(r){var s=n.useRef(r);s.current=r;var m=n.useCallback(function(){for(var b,S=arguments.length,y=new Array(S),R=0;R<S;R++)y[R]=arguments[R];return(b=s.current)===null||b===void 0?void 0:b.call.apply(b,[s].concat(y))},[]);return r?m:void 0}var Sr=function(s,m){var b=s.className,S=s.children,y=Object(Fe.a)(s,["className","children"]),R=n.useContext(De),E=R.prefixCls,B=R.mode;return n.createElement("ul",Object(L.a)({className:Ie()(E,"".concat(E,"-sub"),"".concat(E,"-").concat(B==="inline"?"inline":"vertical"),b)},y,{"data-menu-list":!0,ref:m}),S)},Yt=n.forwardRef(Sr);Yt.displayName="SubMenuList";var Ht=Yt,Rr=e("uciX"),Un={adjustX:1,adjustY:1},Gt={topLeft:{points:["bl","tl"],overflow:Un,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Un,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:Un,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:Un,offset:[4,0]}},Er={topLeft:{points:["bl","tl"],overflow:Un,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Un,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:Un,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:Un,offset:[4,0]}},fa=Gt;function Qt(r,s,m){if(s)return s;if(m)return m[r]||m.other}var jr={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function Dr(r){var s=r.prefixCls,m=r.visible,b=r.children,S=r.popup,y=r.popupClassName,R=r.popupOffset,E=r.disabled,B=r.mode,$=r.onVisibleChange,x=n.useContext(De),Y=x.getPopupContainer,z=x.rtl,ie=x.subMenuOpenDelay,Q=x.subMenuCloseDelay,X=x.builtinPlacements,de=x.triggerSubMenuAction,V=x.forceSubMenuRender,ee=x.motion,ae=x.defaultMotions,k=n.useState(!1),le=Object(J.a)(k,2),_=le[0],be=le[1],te=z?Object(ve.a)(Object(ve.a)({},Er),X):Object(ve.a)(Object(ve.a)({},Gt),X),me=jr[B],fe=Qt(B,ee,ae),se=Object(ve.a)(Object(ve.a)({},fe),{},{leavedClassName:"".concat(s,"-hidden"),removeOnLeave:!1,motionAppear:!0}),H=n.useRef();return n.useEffect(function(){return H.current=Object(Xe.a)(function(){be(m)}),function(){Xe.a.cancel(H.current)}},[m]),n.createElement(Rr.a,{prefixCls:s,popupClassName:Ie()("".concat(s,"-popup"),Object(oe.a)({},"".concat(s,"-rtl"),z),y),stretch:B==="horizontal"?"minWidth":null,getPopupContainer:Y,builtinPlacements:te,popupPlacement:me,popupVisible:_,popup:S,popupAlign:R&&{offset:R},action:E?[]:[de],mouseEnterDelay:ie,mouseLeaveDelay:Q,onPopupVisibleChange:$,forceRender:V,popupMotion:se},b)}var Pr=e("8XRh");function Ir(r){var s=r.id,m=r.open,b=r.keyPath,S=r.children,y="inline",R=n.useContext(De),E=R.prefixCls,B=R.forceSubMenuRender,$=R.motion,x=R.defaultMotions,Y=R.mode,z=n.useRef(!1);z.current=Y===y;var ie=n.useState(!z.current),Q=Object(J.a)(ie,2),X=Q[0],de=Q[1],V=z.current?m:!1;n.useEffect(function(){z.current&&de(!1)},[Y]);var ee=Object(ve.a)({},Qt(y,$,x));b.length>1&&(ee.motionAppear=!1);var ae=ee.onVisibleChanged;return ee.onVisibleChanged=function(k){return!z.current&&!k&&de(!0),ae==null?void 0:ae(k)},X?null:n.createElement(mn,{mode:y,locked:!z.current},n.createElement(Pr.default,Object(L.a)({visible:V},ee,{forceRender:B,removeOnLeave:!1,leavedClassName:"".concat(E,"-hidden")}),function(k){var le=k.className,_=k.style;return n.createElement(Ht,{id:s,className:le,style:_},S)}))}var Nr=function(s){var m,b=s.style,S=s.className,y=s.title,R=s.eventKey,E=s.disabled,B=s.internalPopupClose,$=s.children,x=s.itemIcon,Y=s.expandIcon,z=s.popupClassName,ie=s.popupOffset,Q=s.onClick,X=s.onMouseEnter,de=s.onMouseLeave,V=s.onTitleClick,ee=s.onTitleMouseEnter,ae=s.onTitleMouseLeave,k=Object(Fe.a)(s,["style","className","title","eventKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"]),le=zt(R),_=n.useContext(De),be=_.prefixCls,te=_.mode,me=_.openKeys,fe=_.disabled,se=_.overflowDisabled,H=_.activeKey,ce=_.selectedKeys,ye=_.itemIcon,ge=_.expandIcon,Re=_.onItemClick,Le=_.onOpenChange,Oe=_.onActive,Se=n.useContext(Ye),we=Se.isSubPathKey,Me=Ue(),Ae="".concat(be,"-submenu"),Ne=fe||E,xe=n.useRef(),_e=n.useRef(),Ve=x||ye,Je=Y||ge,Qe=me.includes(R),$e=!se&&Qe,Dn=we(ce,R),rn=jn(R,Ne,ee,ae),Ze=rn.active,un=Object(Fe.a)(rn,["active"]),bn=n.useState(!1),On=Object(J.a)(bn,2),Te=On[0],He=On[1],en=function(Ge){Ne||He(Ge)},ke=function(Ge){en(!0),X==null||X({key:R,domEvent:Ge})},Ln=function(Ge){en(!1),de==null||de({key:R,domEvent:Ge})},zn=n.useMemo(function(){return Ze||(te!=="inline"?Te||we([H],R):!1)},[te,Ze,H,Te,R,we]),$n=T(Me.length),an=function(Ge){Ne||(V==null||V({key:R,domEvent:Ge}),te==="inline"&&Le(R,!Qe))},Pn=nt(function(qe){Q==null||Q(Wn(qe)),Re(qe)}),dn=function(Ge){te!=="inline"&&Le(R,Ge)},In=function(){Oe(R)},nn=le&&"".concat(le,"-popup"),sn=n.createElement("div",Object(L.a)({role:"menuitem",style:$n,className:"".concat(Ae,"-title"),tabIndex:Ne?null:-1,ref:xe,title:typeof y=="string"?y:null,"data-menu-id":se&&le?null:le,"aria-expanded":$e,"aria-haspopup":!0,"aria-controls":nn,"aria-disabled":Ne,onClick:an,onFocus:In},un),y,n.createElement(f,{icon:te!=="horizontal"?Je:null,props:Object(ve.a)(Object(ve.a)({},s),{},{isOpen:$e,isSubMenu:!0})},n.createElement("i",{className:"".concat(Ae,"-arrow")}))),Nn=n.useRef(te);if(te!=="inline"&&(Nn.current=Me.length>1?"vertical":te),!se){var fn=Nn.current;sn=n.createElement(Dr,{mode:fn,prefixCls:Ae,visible:!B&&$e&&te!=="inline",popupClassName:z,popupOffset:ie,popup:n.createElement(mn,{mode:fn},n.createElement(Ht,{id:nn,ref:_e},$)),disabled:Ne,onVisibleChange:dn},sn)}return n.createElement(mn,{onItemClick:Pn,mode:te==="horizontal"?"vertical":te,itemIcon:Ve,expandIcon:Je},n.createElement(u.Item,Object(L.a)({role:"none"},k,{component:"li",style:b,className:Ie()(Ae,"".concat(Ae,"-").concat(te),S,(m={},Object(oe.a)(m,"".concat(Ae,"-open"),$e),Object(oe.a)(m,"".concat(Ae,"-active"),zn),Object(oe.a)(m,"".concat(Ae,"-selected"),Dn),Object(oe.a)(m,"".concat(Ae,"-disabled"),Ne),m)),onMouseEnter:ke,onMouseLeave:Ln}),sn,!se&&n.createElement(Ir,{id:nn,open:$e,keyPath:Me},$)))};function Xt(r){var s=r.eventKey,m=r.children,b=Ue(s),S=Pt(m,b),y=ne();n.useEffect(function(){if(y)return y.registerPath(s,b),function(){y.unregisterPath(s,b)}},[b]);var R;return y?R=S:R=n.createElement(Nr,r,S),n.createElement(Pe.Provider,{value:b},R)}var Ar=e("x/xZ");function Zt(r){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Object(Ar.a)(r)){var m=r.nodeName.toLowerCase(),b=["input","select","textarea","button"].includes(m)||r.isContentEditable||m==="a"&&!!r.getAttribute("href"),S=r.getAttribute("tabindex"),y=Number(S),R=null;return S&&!Number.isNaN(y)?R=y:b&&R===null&&(R=0),b&&r.disabled&&(R=null),R!==null&&(R>=0||s&&R<0)}return!1}function kt(r){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,m=Object(hn.a)(r.querySelectorAll("*")).filter(function(b){return Zt(b,s)});return Zt(r,s)&&m.unshift(r),m}var mt=null;function pa(){mt=document.activeElement}function ha(){mt=null}function va(){if(mt)try{mt.focus()}catch(r){}}function ga(r,s){if(s.keyCode===9){var m=kt(r),b=m[s.shiftKey?0:m.length-1],S=b===document.activeElement||r===document.activeElement;if(S){var y=m[s.shiftKey?m.length-1:0];y.focus(),s.preventDefault()}}}var It=We.a.LEFT,Nt=We.a.RIGHT,At=We.a.UP,ft=We.a.DOWN,pt=We.a.ENTER,qt=We.a.ESC,_t=[At,ft,It,Nt];function Fr(r,s,m,b){var S,y,R,E,B="prev",$="next",x="children",Y="parent";if(r==="inline"&&b===pt)return{inlineTrigger:!0};var z=(S={},Object(oe.a)(S,At,B),Object(oe.a)(S,ft,$),S),ie=(y={},Object(oe.a)(y,It,m?$:B),Object(oe.a)(y,Nt,m?B:$),Object(oe.a)(y,ft,x),Object(oe.a)(y,pt,x),y),Q=(R={},Object(oe.a)(R,At,B),Object(oe.a)(R,ft,$),Object(oe.a)(R,pt,x),Object(oe.a)(R,qt,Y),Object(oe.a)(R,It,m?x:Y),Object(oe.a)(R,Nt,m?Y:x),R),X={inline:z,horizontal:ie,vertical:Q,inlineSub:z,horizontalSub:Q,verticalSub:Q},de=(E=X["".concat(r).concat(s?"":"Sub")])===null||E===void 0?void 0:E[b];switch(de){case B:return{offset:-1,sibling:!0};case $:return{offset:1,sibling:!0};case Y:return{offset:-1,sibling:!1};case x:return{offset:1,sibling:!1};default:return null}}function Tr(r){for(var s=r;s;){if(s.getAttribute("data-menu-list"))return s;s=s.parentElement}return null}function Kr(r,s){for(var m=r||document.activeElement;m;){if(s.has(m))return m;m=m.parentElement}return null}function Mr(r,s){var m=kt(r,!0);return m.filter(function(b){return s.has(b)})}function er(r,s,m){var b=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!r)return null;var S=Mr(r,s),y=S.length,R=S.findIndex(function(E){return m===E});return b<0?R===-1?R=y-1:R-=1:b>0&&(R+=1),R=(R+y)%y,S[R]}function wr(r,s,m,b,S,y,R,E,B,$){var x=n.useRef(),Y=n.useRef();Y.current=s;var z=function(){Xe.a.cancel(x.current)};return n.useEffect(function(){return function(){z()}},[]),function(ie){var Q=ie.which;if([].concat(_t,[pt,qt]).includes(Q)){var X,de,V,ee=function(){X=new Set,de=new Map,V=new Map;var ye=y();return ye.forEach(function(ge){var Re=document.querySelector("[data-menu-id='".concat(Jt(b,ge),"']"));Re&&(X.add(Re),V.set(Re,ge),de.set(ge,Re))}),X};ee();var ae=de.get(s),k=Kr(ae,X),le=V.get(k),_=Fr(r,R(le,!0).length===1,m,Q);if(!_)return;_t.includes(Q)&&ie.preventDefault();var be=function(ye){if(ye){var ge=ye,Re=ye.querySelector("a");(Re==null?void 0:Re.getAttribute("href"))&&(ge=Re);var Le=V.get(ye);E(Le),z(),x.current=Object(Xe.a)(function(){Y.current===Le&&ge.focus()})}};if(_.sibling||!k){var te;!k||r==="inline"?te=S.current:te=Tr(k);var me=er(te,X,k,_.offset);be(me)}else if(_.inlineTrigger)B(le);else if(_.offset>0)B(le,!0),z(),x.current=Object(Xe.a)(function(){ee();var ce=k.getAttribute("aria-controls"),ye=document.getElementById(ce),ge=er(ye,X);be(ge)},5);else if(_.offset<0){var fe=R(le,!0),se=fe[fe.length-2],H=de.get(se);B(se,!1),be(H)}}$==null||$(ie)}}var Br=Math.random().toFixed(5).toString().slice(2),nr=0;function Wr(r){var s=Object(Rn.a)(r,{value:r}),m=Object(J.a)(s,2),b=m[0],S=m[1];return n.useEffect(function(){nr+=1;var y="".concat(Br,"-").concat(nr);S("rc-menu-uuid-".concat(y))},[]),b}var ya=e("p8sG");function Lr(r){Promise.resolve().then(r)}var Ft="__RC_UTIL_PATH_SPLIT__",tr=function(s){return s.join(Ft)},$r=function(s){return s.split(Ft)},Tt="rc-menu-more";function xr(){var r=n.useState({}),s=Object(J.a)(r,2),m=s[1],b=Object(n.useRef)(new Map),S=Object(n.useRef)(new Map),y=n.useState([]),R=Object(J.a)(y,2),E=R[0],B=R[1],$=Object(n.useRef)(0),x=Object(n.useCallback)(function(V,ee){var ae=tr(ee);S.current.set(ae,V),b.current.set(V,ae),$.current+=1;var k=$.current;Lr(function(){k===$.current&&m({})})},[]),Y=Object(n.useCallback)(function(V,ee){var ae=tr(ee);S.current.delete(ae),b.current.delete(V)},[]),z=Object(n.useCallback)(function(V){B(V)},[]),ie=Object(n.useCallback)(function(V,ee){var ae=b.current.get(V)||"",k=$r(ae);return ee&&E.includes(k[0])&&k.unshift(Tt),k},[E]),Q=Object(n.useCallback)(function(V,ee){return V.some(function(ae){var k=ie(ae,!0);return k.includes(ee)})},[ie]),X=function(){var ee=Object(hn.a)(b.current.keys());return E.length&&ee.push(Tt),ee},de=Object(n.useCallback)(function(V){var ee="".concat(b.current.get(V)).concat(Ft),ae=new Set;return Object(hn.a)(S.current.keys()).forEach(function(k){k.startsWith(ee)&&ae.add(S.current.get(k))}),ae},[]);return{registerPath:x,unregisterPath:Y,refreshOverflowKeys:z,isSubPathKey:Q,getKeyPath:ie,getKeys:X,getSubPathKeys:de}}var ht=[],Vr=function(s){var m,b,S=s.prefixCls,y=S===void 0?"rc-menu":S,R=s.style,E=s.className,B=s.tabIndex,$=B===void 0?0:B,x=s.children,Y=s.direction,z=s.id,ie=s.mode,Q=ie===void 0?"vertical":ie,X=s.inlineCollapsed,de=s.disabled,V=s.disabledOverflow,ee=s.subMenuOpenDelay,ae=ee===void 0?.1:ee,k=s.subMenuCloseDelay,le=k===void 0?.1:k,_=s.forceSubMenuRender,be=s.defaultOpenKeys,te=s.openKeys,me=s.activeKey,fe=s.defaultActiveFirst,se=s.selectable,H=se===void 0?!0:se,ce=s.multiple,ye=ce===void 0?!1:ce,ge=s.defaultSelectedKeys,Re=s.selectedKeys,Le=s.onSelect,Oe=s.onDeselect,Se=s.inlineIndent,we=Se===void 0?24:Se,Me=s.motion,Ae=s.defaultMotions,Ne=s.triggerSubMenuAction,xe=Ne===void 0?"hover":Ne,_e=s.builtinPlacements,Ve=s.itemIcon,Je=s.expandIcon,Qe=s.overflowedIndicator,$e=Qe===void 0?"...":Qe,Dn=s.getPopupContainer,rn=s.onClick,Ze=s.onOpenChange,un=s.onKeyDown,bn=s.openAnimation,On=s.openTransitionName,Te=Object(Fe.a)(s,["prefixCls","style","className","tabIndex","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName"]),He=Pt(x,ht),en=n.useState(!1),ke=Object(J.a)(en,2),Ln=ke[0],zn=ke[1],$n=n.useRef(),an=Wr(z),Pn=Y==="rtl",dn=n.useMemo(function(){return Q==="inline"&&X?["vertical",X]:[Q,!1]},[Q,X]),In=Object(J.a)(dn,2),nn=In[0],sn=In[1],Nn=n.useState(0),fn=Object(J.a)(Nn,2),qe=fn[0],Ge=fn[1],Yn=qe>=He.length-1||nn!=="horizontal"||V,Hn=Object(Rn.a)(be,{value:te,postState:function(q){return q||ht}}),tt=Object(J.a)(Hn,2),Cn=tt[0],gn=tt[1],Gn=n.useState(Cn),Sn=Object(J.a)(Gn,2),pn=Sn[0],Qn=Sn[1],An=nn==="inline",Xn=n.useRef(!1);n.useEffect(function(){An&&Qn(Cn)},[Cn]),n.useEffect(function(){if(!Xn.current){Xn.current=!0;return}if(An)gn(pn);else{var re=[];gn(re),Ze==null||Ze(re)}},[An]);var cn=xr(),Fn=cn.registerPath,he=cn.unregisterPath,Ee=cn.refreshOverflowKeys,Be=cn.isSubPathKey,tn=cn.getKeyPath,Zn=cn.getKeys,gt=cn.getSubPathKeys,Bt=n.useMemo(function(){return{registerPath:Fn,unregisterPath:he}},[Fn,he]),Wt=n.useMemo(function(){return{isSubPathKey:Be}},[Be]);n.useEffect(function(){Ee(Yn?ht:He.slice(qe+1).map(function(re){return re.key}))},[qe,Yn]);var Lt=Object(Rn.a)(me||fe&&((m=He[0])===null||m===void 0?void 0:m.key),{value:me}),rt=Object(J.a)(Lt,2),yt=rt[0],it=rt[1],bt=nt(function(re){it(re)}),$t=nt(function(){it(void 0)}),Ot=Object(Rn.a)(ge||[],{value:Re,postState:function(q){return Array.isArray(q)?q:q==null?ht:[q]}}),Ct=Object(J.a)(Ot,2),at=Ct[0],Tn=Ct[1],St=function(q){if(!!H){var Ce=q.key,ze=at.includes(Ce),on;ze?on=at.filter(function(qn){return qn!==Ce}):ye?on=[].concat(Object(hn.a)(at),[Ce]):on=[Ce],Tn(on);var Jn=Object(ve.a)(Object(ve.a)({},q),{},{selectedKeys:on});ze?Oe==null||Oe(Jn):Le==null||Le(Jn)}},Rt=nt(function(re){rn==null||rn(Wn(re)),St(re)}),ot=nt(function(re,q){var Ce=Cn.filter(function(on){return on!==re});if(q)Ce.push(re);else if(nn!=="inline"){var ze=gt(re);Ce=Ce.filter(function(on){return!ze.has(on)})}d()(Cn,Ce)||(gn(Ce),Ze==null||Ze(Ce))}),kn=nt(Dn),lt=function(q,Ce){var ze=Ce!=null?Ce:!Cn.includes(q);ot(q,ze)},ut=wr(nn,yt,Pn,an,$n,Zn,tn,it,lt,un);n.useEffect(function(){zn(!0)},[]);var Et=nn!=="horizontal"||V?He:He.map(function(re,q){return n.createElement(mn,{key:re.key,overflowDisabled:q>qe},re)}),jt=n.createElement(u,Object(L.a)({id:z,ref:$n,prefixCls:"".concat(y,"-overflow"),component:"ul",itemComponent:Dt,className:Ie()(y,"".concat(y,"-root"),"".concat(y,"-").concat(nn),E,(b={},Object(oe.a)(b,"".concat(y,"-inline-collapsed"),sn),Object(oe.a)(b,"".concat(y,"-rtl"),Pn),b)),dir:Y,style:R,role:"menu",tabIndex:$,data:Et,renderRawItem:function(q){return q},renderRawRest:function(q){var Ce=q.length,ze=Ce?He.slice(-Ce):null;return n.createElement(Xt,{eventKey:Tt,title:$e,disabled:Yn,internalPopupClose:Ce===0},ze)},maxCount:nn!=="horizontal"||V?u.INVALIDATE:u.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(q){Ge(q)},onKeyDown:ut},Te));return n.createElement(Ut.Provider,{value:an},n.createElement(mn,{prefixCls:y,mode:nn,openKeys:Cn,rtl:Pn,disabled:de,motion:Ln?Me:null,defaultMotions:Ln?Ae:null,activeKey:yt,onActive:bt,onInactive:$t,selectedKeys:at,inlineIndent:we,subMenuOpenDelay:ae,subMenuCloseDelay:le,forceSubMenuRender:_,builtinPlacements:_e,triggerSubMenuAction:xe,getPopupContainer:kn,itemIcon:Ve,expandIcon:Je,onItemClick:Rt,onOpenChange:ot},n.createElement(Ye.Provider,{value:Wt},jt),n.createElement(pe.Provider,{value:Bt},He)))},Ur=Vr,Jr=function(s){var m=s.className,b=s.title,S=s.eventKey,y=s.children,R=Object(Fe.a)(s,["className","title","eventKey","children"]),E=n.useContext(De),B=E.prefixCls,$="".concat(B,"-item-group");return n.createElement("li",Object(L.a)({},R,{onClick:function(Y){return Y.stopPropagation()},className:Ie()($,m)}),n.createElement("div",{className:"".concat($,"-title"),title:typeof b=="string"?b:void 0},b),n.createElement("ul",{className:"".concat($,"-list")},y))};function zr(r){var s=r.children,m=Object(Fe.a)(r,["children"]),b=Ue(m.eventKey),S=Pt(s,b),y=ne();return y?S:n.createElement(Jr,m,S)}function Yr(r){var s=r.className,m=r.style,b=n.useContext(De),S=b.prefixCls,y=ne();return y?null:n.createElement("li",{className:Ie()("".concat(S,"-item-divider"),s),style:m})}var st=Ur;st.Item=Dt,st.SubMenu=Xt,st.ItemGroup=zr,st.Divider=Yr;var Hr=st,Gr=e("eDIo");function Qr(r,s){var m=r.prefixCls,b=r.editable,S=r.locale,y=r.style;return!b||b.showAdd===!1?null:n.createElement("button",{ref:s,type:"button",className:"".concat(m,"-nav-add"),style:y,"aria-label":(S==null?void 0:S.addAriaLabel)||"Add tab",onClick:function(E){b.onEdit("add",{event:E})}},b.addIcon||"+")}var rr=n.forwardRef(Qr);function Xr(r,s){var m=r.prefixCls,b=r.id,S=r.tabs,y=r.locale,R=r.mobile,E=r.moreIcon,B=E===void 0?"More":E,$=r.moreTransitionName,x=r.style,Y=r.className,z=r.editable,ie=r.tabBarGutter,Q=r.rtl,X=r.onTabClick,de=Object(n.useState)(!1),V=Object(J.a)(de,2),ee=V[0],ae=V[1],k=Object(n.useState)(null),le=Object(J.a)(k,2),_=le[0],be=le[1],te="".concat(b,"-more-popup"),me="".concat(m,"-dropdown"),fe=_!==null?"".concat(te,"-").concat(_):null,se=y==null?void 0:y.dropdownAriaLabel,H=n.createElement(Hr,{onClick:function(Se){var we=Se.key,Me=Se.domEvent;X(we,Me),ae(!1)},id:te,tabIndex:-1,role:"listbox","aria-activedescendant":fe,selectedKeys:[_],"aria-label":se!==void 0?se:"expanded dropdown"},S.map(function(Oe){return n.createElement(Dt,{key:Oe.key,id:"".concat(te,"-").concat(Oe.key),role:"option","aria-controls":b&&"".concat(b,"-panel-").concat(Oe.key),disabled:Oe.disabled},Oe.tab)}));function ce(Oe){for(var Se=S.filter(function(xe){return!xe.disabled}),we=Se.findIndex(function(xe){return xe.key===_})||0,Me=Se.length,Ae=0;Ae<Me;Ae+=1){we=(we+Oe+Me)%Me;var Ne=Se[we];if(!Ne.disabled){be(Ne.key);return}}}function ye(Oe){var Se=Oe.which;if(!ee){[We.a.DOWN,We.a.SPACE,We.a.ENTER].includes(Se)&&(ae(!0),Oe.preventDefault());return}switch(Se){case We.a.UP:ce(-1),Oe.preventDefault();break;case We.a.DOWN:ce(1),Oe.preventDefault();break;case We.a.ESC:ae(!1);break;case We.a.SPACE:case We.a.ENTER:_!==null&&X(_,Oe);break}}Object(n.useEffect)(function(){var Oe=document.getElementById(fe);Oe&&Oe.scrollIntoView&&Oe.scrollIntoView(!1)},[_]),Object(n.useEffect)(function(){ee||be(null)},[ee]);var ge=Object(oe.a)({},Q?"marginLeft":"marginRight",ie);S.length||(ge.visibility="hidden",ge.order=1);var Re=Ie()(Object(oe.a)({},"".concat(me,"-rtl"),Q)),Le=R?null:n.createElement(Gr.default,{prefixCls:me,overlay:H,trigger:["hover"],visible:ee,transitionName:$,onVisibleChange:ae,overlayClassName:Re,mouseEnterDelay:.1,mouseLeaveDelay:.1},n.createElement("button",{type:"button",className:"".concat(m,"-nav-more"),style:ge,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":te,id:"".concat(b,"-more"),"aria-expanded":ee,onKeyDown:ye},B));return n.createElement("div",{className:Ie()("".concat(m,"-nav-operations"),Y),style:x,ref:s},Le,n.createElement(rr,{prefixCls:m,locale:y,editable:z}))}var Zr=n.forwardRef(Xr),Kt=Object(n.createContext)(null),kr=.1,ar=.01,vt=20,sr=Math.pow(.995,vt);function qr(r,s){var m=Object(n.useState)(),b=Object(J.a)(m,2),S=b[0],y=b[1],R=Object(n.useState)(0),E=Object(J.a)(R,2),B=E[0],$=E[1],x=Object(n.useState)(0),Y=Object(J.a)(x,2),z=Y[0],ie=Y[1],Q=Object(n.useState)(),X=Object(J.a)(Q,2),de=X[0],V=X[1],ee=Object(n.useRef)();function ae(me){var fe=me.touches[0],se=fe.screenX,H=fe.screenY;y({x:se,y:H}),window.clearInterval(ee.current)}function k(me){if(!!S){me.preventDefault();var fe=me.touches[0],se=fe.screenX,H=fe.screenY;y({x:se,y:H});var ce=se-S.x,ye=H-S.y;s(ce,ye);var ge=Date.now();$(ge),ie(ge-B),V({x:ce,y:ye})}}function le(){if(!!S&&(y(null),V(null),de)){var me=de.x/z,fe=de.y/z,se=Math.abs(me),H=Math.abs(fe);if(Math.max(se,H)<kr)return;var ce=me,ye=fe;ee.current=window.setInterval(function(){if(Math.abs(ce)<ar&&Math.abs(ye)<ar){window.clearInterval(ee.current);return}ce*=sr,ye*=sr,s(ce*vt,ye*vt)},vt)}}var _=Object(n.useRef)();function be(me){var fe=me.deltaX,se=me.deltaY,H=0,ce=Math.abs(fe),ye=Math.abs(se);ce===ye?H=_.current==="x"?fe:se:ce>ye?(H=fe,_.current="x"):(H=se,_.current="y"),s(-H,-H)&&me.preventDefault()}var te=Object(n.useRef)(null);te.current={onTouchStart:ae,onTouchMove:k,onTouchEnd:le,onWheel:be},n.useEffect(function(){function me(ce){te.current.onTouchStart(ce)}function fe(ce){te.current.onTouchMove(ce)}function se(ce){te.current.onTouchEnd(ce)}function H(ce){te.current.onWheel(ce)}return document.addEventListener("touchmove",fe,{passive:!1}),document.addEventListener("touchend",se,{passive:!1}),r.current.addEventListener("touchstart",me,{passive:!1}),r.current.addEventListener("wheel",H),function(){document.removeEventListener("touchmove",fe),document.removeEventListener("touchend",se)}},[])}function _r(){var r=Object(n.useRef)(new Map);function s(b){return r.current.has(b)||r.current.set(b,n.createRef()),r.current.get(b)}function m(b){r.current.delete(b)}return[s,m]}function ir(r,s){var m=n.useRef(r),b=n.useState({}),S=Object(J.a)(b,2),y=S[1];function R(E){var B=typeof E=="function"?E(m.current):E;B!==m.current&&s(B,m.current),m.current=B,y({})}return[m.current,R]}var or=function(s){var m=s.position,b=s.prefixCls,S=s.extra;if(!S)return null;var y,R=S;return m==="right"&&(y=R.right||!R.left&&R||null),m==="left"&&(y=R.left||null),y?n.createElement("div",{className:"".concat(b,"-extra-content")},y):null};function ea(r,s){var m,b=n.useContext(Kt),S=b.prefixCls,y=b.tabs,R=r.className,E=r.style,B=r.id,$=r.animated,x=r.activeKey,Y=r.rtl,z=r.extra,ie=r.editable,Q=r.locale,X=r.tabPosition,de=r.tabBarGutter,V=r.children,ee=r.onTabClick,ae=r.onTabScroll,k=Object(n.useRef)(),le=Object(n.useRef)(),_=Object(n.useRef)(),be=Object(n.useRef)(),te=_r(),me=Object(J.a)(te,2),fe=me[0],se=me[1],H=X==="top"||X==="bottom",ce=ir(0,function(re,q){H&&ae&&ae({direction:re>q?"left":"right"})}),ye=Object(J.a)(ce,2),ge=ye[0],Re=ye[1],Le=ir(0,function(re,q){!H&&ae&&ae({direction:re>q?"top":"bottom"})}),Oe=Object(J.a)(Le,2),Se=Oe[0],we=Oe[1],Me=Object(n.useState)(0),Ae=Object(J.a)(Me,2),Ne=Ae[0],xe=Ae[1],_e=Object(n.useState)(0),Ve=Object(J.a)(_e,2),Je=Ve[0],Qe=Ve[1],$e=Object(n.useState)(0),Dn=Object(J.a)($e,2),rn=Dn[0],Ze=Dn[1],un=Object(n.useState)(0),bn=Object(J.a)(un,2),On=bn[0],Te=bn[1],He=Object(n.useState)(null),en=Object(J.a)(He,2),ke=en[0],Ln=en[1],zn=Object(n.useState)(null),$n=Object(J.a)(zn,2),an=$n[0],Pn=$n[1],dn=Object(n.useState)(0),In=Object(J.a)(dn,2),nn=In[0],sn=In[1],Nn=Object(n.useState)(0),fn=Object(J.a)(Nn,2),qe=fn[0],Ge=fn[1],Yn=En(new Map),Hn=Object(J.a)(Yn,2),tt=Hn[0],Cn=Hn[1],gn=ct(y,tt,Ne),Gn="".concat(S,"-nav-operations-hidden"),Sn=0,pn=0;H?Y?(Sn=0,pn=Math.max(0,Ne-ke)):(Sn=Math.min(0,ke-Ne),pn=0):(Sn=Math.min(0,an-Je),pn=0);function Qn(re){return re<Sn?Sn:re>pn?pn:re}var An=Object(n.useRef)(),Xn=Object(n.useState)(),cn=Object(J.a)(Xn,2),Fn=cn[0],he=cn[1];function Ee(){he(Date.now())}function Be(){window.clearTimeout(An.current)}qr(k,function(re,q){function Ce(ze,on){ze(function(Jn){var qn=Qn(Jn+on);return qn})}if(H){if(ke>=Ne)return!1;Ce(Re,re)}else{if(an>=Je)return!1;Ce(we,q)}return Be(),Ee(),!0}),Object(n.useEffect)(function(){return Be(),Fn&&(An.current=window.setTimeout(function(){he(0)},100)),Be},[Fn]);function tn(){var re=arguments.length>0&&arguments[0]!==void 0?arguments[0]:x,q=gn.get(re)||{width:0,height:0,left:0,right:0,top:0};if(H){var Ce=ge;Y?q.right<ge?Ce=q.right:q.right+q.width>ge+ke&&(Ce=q.right+q.width-ke):q.left<-ge?Ce=-q.left:q.left+q.width>-ge+ke&&(Ce=-(q.left+q.width-ke)),we(0),Re(Qn(Ce))}else{var ze=Se;q.top<-Se?ze=-q.top:q.top+q.height>-Se+an&&(ze=-(q.top+q.height-an)),Re(0),we(Qn(ze))}}var Zn=I(gn,{width:ke,height:an,left:ge,top:Se},{width:rn,height:On},{width:nn,height:qe},Object(ve.a)(Object(ve.a)({},r),{},{tabs:y})),gt=Object(J.a)(Zn,2),Bt=gt[0],Wt=gt[1],Lt=y.map(function(re){var q=re.key;return n.createElement(Vn,{id:B,prefixCls:S,key:q,rtl:Y,tab:re,closable:re.closable,editable:ie,active:q===x,tabPosition:X,tabBarGutter:de,renderWrapper:V,removeAriaLabel:Q==null?void 0:Q.removeAriaLabel,ref:fe(q),onClick:function(ze){ee(q,ze)},onRemove:function(){se(q)},onFocus:function(){tn(q),Ee(),Y||(k.current.scrollLeft=0),k.current.scrollTop=0}})}),rt=Bn(function(){var re,q,Ce,ze,on,Jn,qn,xt,Vt,la=((re=k.current)===null||re===void 0?void 0:re.offsetWidth)||0,ua=((q=k.current)===null||q===void 0?void 0:q.offsetHeight)||0,mr=((Ce=be.current)===null||Ce===void 0?void 0:Ce.offsetWidth)||0,fr=((ze=be.current)===null||ze===void 0?void 0:ze.offsetHeight)||0,da=((on=_.current)===null||on===void 0?void 0:on.offsetWidth)||0,ca=((Jn=_.current)===null||Jn===void 0?void 0:Jn.offsetHeight)||0;Ln(la),Pn(ua),sn(mr),Ge(fr);var pr=(((qn=le.current)===null||qn===void 0?void 0:qn.offsetWidth)||0)-mr,hr=(((xt=le.current)===null||xt===void 0?void 0:xt.offsetHeight)||0)-fr;xe(pr),Qe(hr);var vr=(Vt=_.current)===null||Vt===void 0?void 0:Vt.className.includes(Gn);Ze(pr-(vr?0:da)),Te(hr-(vr?0:ca)),Cn(function(){var gr=new Map;return y.forEach(function(ma){var yr=ma.key,dt=fe(yr).current;dt&&gr.set(yr,{width:dt.offsetWidth,height:dt.offsetHeight,left:dt.offsetLeft,top:dt.offsetTop})}),gr})}),yt=y.slice(0,Bt),it=y.slice(Wt+1),bt=[].concat(Object(hn.a)(yt),Object(hn.a)(it)),$t=Object(n.useState)(),Ot=Object(J.a)($t,2),Ct=Ot[0],at=Ot[1],Tn=gn.get(x),St=Object(n.useRef)();function Rt(){Xe.a.cancel(St.current)}Object(n.useEffect)(function(){var re={};return Tn&&(H?(Y?re.right=Tn.right:re.left=Tn.left,re.width=Tn.width):(re.top=Tn.top,re.height=Tn.height)),Rt(),St.current=Object(Xe.a)(function(){at(re)}),Rt},[Tn,H,Y]),Object(n.useEffect)(function(){tn()},[x,Tn,gn,H]),Object(n.useEffect)(function(){rt()},[Y,de,x,y.map(function(re){return re.key}).join("_")]);var ot=!!bt.length,kn="".concat(S,"-nav-wrap"),lt,ut,Et,jt;return H?Y?(ut=ge>0,lt=ge+ke<Ne):(lt=ge<0,ut=-ge+ke<Ne):(Et=Se<0,jt=-Se+an<Je),n.createElement("div",{ref:s,role:"tablist",className:Ie()("".concat(S,"-nav"),R),style:E,onKeyDown:function(){Ee()}},n.createElement(or,{position:"left",extra:z,prefixCls:S}),n.createElement(xn.default,{onResize:rt},n.createElement("div",{className:Ie()(kn,(m={},Object(oe.a)(m,"".concat(kn,"-ping-left"),lt),Object(oe.a)(m,"".concat(kn,"-ping-right"),ut),Object(oe.a)(m,"".concat(kn,"-ping-top"),Et),Object(oe.a)(m,"".concat(kn,"-ping-bottom"),jt),m)),ref:k},n.createElement(xn.default,{onResize:rt},n.createElement("div",{ref:le,className:"".concat(S,"-nav-list"),style:{transform:"translate(".concat(ge,"px, ").concat(Se,"px)"),transition:Fn?"none":void 0}},Lt,n.createElement(rr,{ref:be,prefixCls:S,locale:Q,editable:ie,style:{visibility:ot?"hidden":null}}),n.createElement("div",{className:Ie()("".concat(S,"-ink-bar"),Object(oe.a)({},"".concat(S,"-ink-bar-animated"),$.inkBar)),style:Ct}))))),n.createElement(Zr,Object(L.a)({},r,{ref:_,prefixCls:S,tabs:bt,className:!ot&&Gn})),n.createElement(or,{position:"right",extra:z,prefixCls:S}))}var lr=n.forwardRef(ea);function na(r){var s=r.id,m=r.activeKey,b=r.animated,S=r.tabPosition,y=r.rtl,R=r.destroyInactiveTabPane,E=n.useContext(Kt),B=E.prefixCls,$=E.tabs,x=b.tabPane,Y=$.findIndex(function(z){return z.key===m});return n.createElement("div",{className:Ie()("".concat(B,"-content-holder"))},n.createElement("div",{className:Ie()("".concat(B,"-content"),"".concat(B,"-content-").concat(S),Object(oe.a)({},"".concat(B,"-content-animated"),x)),style:Y&&x?Object(oe.a)({},y?"marginRight":"marginLeft","-".concat(Y,"00%")):null},$.map(function(z){return n.cloneElement(z.node,{key:z.key,prefixCls:B,tabKey:z.key,id:s,animated:x,active:z.key===m,destroyInactiveTabPane:R})})))}function ur(r){var s=r.prefixCls,m=r.forceRender,b=r.className,S=r.style,y=r.id,R=r.active,E=r.animated,B=r.destroyInactiveTabPane,$=r.tabKey,x=r.children,Y=n.useState(m),z=Object(J.a)(Y,2),ie=z[0],Q=z[1];n.useEffect(function(){R?Q(!0):B&&Q(!1)},[R,B]);var X={};return R||(E?(X.visibility="hidden",X.height=0,X.overflowY="hidden"):X.display="none"),n.createElement("div",{id:y&&"".concat(y,"-panel-").concat($),role:"tabpanel",tabIndex:R?0:-1,"aria-labelledby":y&&"".concat(y,"-tab-").concat($),"aria-hidden":!R,style:Object(ve.a)(Object(ve.a)({},X),S),className:Ie()("".concat(s,"-tabpane"),R&&"".concat(s,"-tabpane-active"),b)},(R||ie||m)&&x)}var dr=0;function ta(r){return Object(ln.a)(r).map(function(s){if(n.isValidElement(s)){var m=s.key!==void 0?String(s.key):void 0;return Object(ve.a)(Object(ve.a)({key:m},s.props),{},{node:s})}return null}).filter(function(s){return s})}function ra(r,s){var m,b=r.id,S=r.prefixCls,y=S===void 0?"rc-tabs":S,R=r.className,E=r.children,B=r.direction,$=r.activeKey,x=r.defaultActiveKey,Y=r.editable,z=r.animated,ie=z===void 0?{inkBar:!0,tabPane:!1}:z,Q=r.tabPosition,X=Q===void 0?"top":Q,de=r.tabBarGutter,V=r.tabBarStyle,ee=r.tabBarExtraContent,ae=r.locale,k=r.moreIcon,le=r.moreTransitionName,_=r.destroyInactiveTabPane,be=r.renderTabBar,te=r.onChange,me=r.onTabClick,fe=r.onTabScroll,se=Object(Fe.a)(r,["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"]),H=ta(E),ce=B==="rtl",ye;ie===!1?ye={inkBar:!1,tabPane:!1}:ie===!0?ye={inkBar:!0,tabPane:!0}:ye=Object(ve.a)({inkBar:!0,tabPane:!1},Object(je.a)(ie)==="object"?ie:{});var ge=Object(n.useState)(!1),Re=Object(J.a)(ge,2),Le=Re[0],Oe=Re[1];Object(n.useEffect)(function(){Oe(Object(wn.a)())},[]);var Se=Object(Rn.a)(function(){var Te;return(Te=H[0])===null||Te===void 0?void 0:Te.key},{value:$,defaultValue:x}),we=Object(J.a)(Se,2),Me=we[0],Ae=we[1],Ne=Object(n.useState)(function(){return H.findIndex(function(Te){return Te.key===Me})}),xe=Object(J.a)(Ne,2),_e=xe[0],Ve=xe[1];Object(n.useEffect)(function(){var Te=H.findIndex(function(en){return en.key===Me});if(Te===-1){var He;Te=Math.max(0,Math.min(_e,H.length-1)),Ae((He=H[Te])===null||He===void 0?void 0:He.key)}Ve(Te)},[H.map(function(Te){return Te.key}).join("_"),Me,_e]);var Je=Object(Rn.a)(null,{value:b}),Qe=Object(J.a)(Je,2),$e=Qe[0],Dn=Qe[1],rn=X;Le&&!["left","right"].includes(X)&&(rn="top"),Object(n.useEffect)(function(){b||(Dn("rc-tabs-".concat(dr)),dr+=1)},[]);function Ze(Te,He){me==null||me(Te,He),Ae(Te),te==null||te(Te)}var un={id:$e,activeKey:Me,animated:ye,tabPosition:rn,rtl:ce,mobile:Le},bn,On=Object(ve.a)(Object(ve.a)({},un),{},{editable:Y,locale:ae,moreIcon:k,moreTransitionName:le,tabBarGutter:de,onTabClick:Ze,onTabScroll:fe,extra:ee,style:V,panes:E});return be?bn=be(On,lr):bn=n.createElement(lr,On),n.createElement(Kt.Provider,{value:{tabs:H,prefixCls:y}},n.createElement("div",Object(L.a)({ref:s,id:b,className:Ie()(y,"".concat(y,"-").concat(rn),(m={},Object(oe.a)(m,"".concat(y,"-mobile"),Le),Object(oe.a)(m,"".concat(y,"-editable"),Y),Object(oe.a)(m,"".concat(y,"-rtl"),ce),m),R)},se),bn,n.createElement(na,Object(L.a)({destroyInactiveTabPane:_},un,{animated:ye}))))}var cr=n.forwardRef(ra);cr.TabPane=ur;var aa=cr,sa=aa,Mt=e("MZF8"),vn=e("dEAq"),ia=e("ZpkN"),ba=e("TIsu");function wt(r,s){var m,b=(m=r.match(/\.(\w+)$/))===null||m===void 0?void 0:m[1];return b||(b=s.tsx?"tsx":"jsx"),b}var oa=r=>{var s,m,b,S=Object(n.useRef)(),y=Object(n.useContext)(vn.context),R=y.locale,E=Object(vn.useLocaleProps)(R,r),B=Object(vn.useDemoUrl)(E.identifier),$=E.demoUrl||B,x=(Mt.a===null||Mt.a===void 0?void 0:Mt.a.location.hash)==="#".concat(E.identifier),Y=Object.keys(E.sources).length===1,z=Object(vn.useCodeSandbox)((s=E.hideActions)!==null&&s!==void 0&&s.includes("CSB")?null:E),ie=Object(vn.useRiddle)((m=E.hideActions)!==null&&m!==void 0&&m.includes("RIDDLE")?null:E),Q=Object(vn.useMotions)(E.motions||[],S.current),X=Object(U.default)(Q,2),de=X[0],V=X[1],ee=Object(vn.useCopy)(),ae=Object(U.default)(ee,2),k=ae[0],le=ae[1],_=Object(n.useState)("_"),be=Object(U.default)(_,2),te=be[0],me=be[1],fe=Object(n.useState)(wt(te,E.sources[te])),se=Object(U.default)(fe,2),H=se[0],ce=se[1],ye=Object(n.useState)(Boolean(E.defaultShowCode)),ge=Object(U.default)(ye,2),Re=ge[0],Le=ge[1],Oe=Object(n.useState)(Math.random()),Se=Object(U.default)(Oe,2),we=Se[0],Me=Se[1],Ae=E.sources[te][H]||E.sources[te].content,Ne=Object(vn.useTSPlaygroundUrl)(R,Ae),xe=Object(n.useRef)(),_e=Object(vn.usePrefersColor)(),Ve=Object(U.default)(_e,1),Je=Ve[0];Object(n.useEffect)(()=>{Me(Math.random())},[Je]);function Qe($e){me($e),ce(wt($e,E.sources[$e]))}return O.a.createElement("div",{style:E.style,className:[E.className,"__dumi-default-previewer",x?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:E.identifier,"data-debug":E.debug||void 0,"data-iframe":E.iframe||void 0},E.iframe&&O.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),O.a.createElement("div",{ref:S,className:"__dumi-default-previewer-demo",style:{transform:E.transform?"translate(0, 0)":void 0,padding:E.compact||E.iframe&&E.compact!==!1?"0":void 0,background:E.background}},E.iframe?O.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(E.iframe).replace(/(\d)$/,"$1px")},key:we,src:$,ref:xe}):E.children),O.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":E.title},E.title&&O.a.createElement(vn.AnchorLink,{to:"#".concat(E.identifier)},E.title),E.description&&O.a.createElement("div",{dangerouslySetInnerHTML:{__html:E.description}})),O.a.createElement("div",{className:"__dumi-default-previewer-actions"},z&&O.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:z}),ie&&O.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:ie}),E.motions&&O.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:V,onClick:()=>de()}),E.iframe&&O.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:()=>Me(Math.random())}),!((b=E.hideActions)!==null&&b!==void 0&&b.includes("EXTERNAL"))&&O.a.createElement(vn.Link,{target:"_blank",to:$},O.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),O.a.createElement("span",null),O.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":le,onClick:()=>k(Ae)}),H==="tsx"&&Re&&O.a.createElement(vn.Link,{target:"_blank",to:Ne},O.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),O.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(Re?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:()=>Le(!Re)})),Re&&O.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!Y&&O.a.createElement(sa,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xB7\xB7\xB7",defaultActiveKey:te,onChange:Qe},Object.keys(E.sources).map($e=>O.a.createElement(ur,{tab:$e==="_"?"index.".concat(wt($e,E.sources[$e])):$e,key:$e}))),O.a.createElement("div",{className:"__dumi-default-previewer-source"},O.a.createElement(ia.a,{code:Ae,lang:H,showCopy:!1}))))},Oa=yn.default=oa},"80pN":function(Kn,yn,e){"use strict";(function(U){/** @license React v16.14.0
* react-dom-test-utils.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var n=e("MgzW"),O=e("q1tI"),L=e("i8i4"),oe=e("QCnb");function J(f){for(var T="https://reactjs.org/docs/error-decoder.html?invariant="+f,w=1;w<arguments.length;w++)T+="&args[]="+encodeURIComponent(arguments[w]);return"Minified React error #"+f+"; visit "+T+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var je=O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;je.hasOwnProperty("ReactCurrentDispatcher")||(je.ReactCurrentDispatcher={current:null}),je.hasOwnProperty("ReactCurrentBatchConfig")||(je.ReactCurrentBatchConfig={suspense:null});function Fe(f){var T=f,w=f;if(f.alternate)for(;T.return;)T=T.return;else{f=T;do T=f,(T.effectTag&1026)!=0&&(w=T.return),f=T.return;while(f)}return T.tag===3?w:null}function ve(f){if(Fe(f)!==f)throw Error(J(188))}function Mn(f){var T=f.alternate;if(!T){if(T=Fe(f),T===null)throw Error(J(188));return T!==f?null:f}for(var w=f,pe=T;;){var ne=w.return;if(ne===null)break;var Pe=ne.alternate;if(Pe===null){if(pe=ne.return,pe!==null){w=pe;continue}break}if(ne.child===Pe.child){for(Pe=ne.child;Pe;){if(Pe===w)return ve(ne),f;if(Pe===pe)return ve(ne),T;Pe=Pe.sibling}throw Error(J(188))}if(w.return!==pe.return)w=ne,pe=Pe;else{for(var Ue=!1,Ye=ne.child;Ye;){if(Ye===w){Ue=!0,w=ne,pe=Pe;break}if(Ye===pe){Ue=!0,pe=ne,w=Pe;break}Ye=Ye.sibling}if(!Ue){for(Ye=Pe.child;Ye;){if(Ye===w){Ue=!0,w=Pe,pe=ne;break}if(Ye===pe){Ue=!0,pe=Pe,w=ne;break}Ye=Ye.sibling}if(!Ue)throw Error(J(189))}}if(w.alternate!==pe)throw Error(J(190))}if(w.tag!==3)throw Error(J(188));return w.stateNode.current===w?f:T}function Ie(){return!0}function ln(){return!1}function wn(f,T,w,pe){this.dispatchConfig=f,this._targetInst=T,this.nativeEvent=w,f=this.constructor.Interface;for(var ne in f)f.hasOwnProperty(ne)&&((T=f[ne])?this[ne]=T(w):ne==="target"?this.target=pe:this[ne]=w[ne]);return this.isDefaultPrevented=(w.defaultPrevented!=null?w.defaultPrevented:w.returnValue===!1)?Ie:ln,this.isPropagationStopped=ln,this}n(wn.prototype,{preventDefault:function(){this.defaultPrevented=!0;var f=this.nativeEvent;f&&(f.preventDefault?f.preventDefault():typeof f.returnValue!="unknown"&&(f.returnValue=!1),this.isDefaultPrevented=Ie)},stopPropagation:function(){var f=this.nativeEvent;f&&(f.stopPropagation?f.stopPropagation():typeof f.cancelBubble!="unknown"&&(f.cancelBubble=!0),this.isPropagationStopped=Ie)},persist:function(){this.isPersistent=Ie},isPersistent:ln,destructor:function(){var f=this.constructor.Interface,T;for(T in f)this[T]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=ln,this._dispatchInstances=this._dispatchListeners=null}}),wn.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(f){return f.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null},wn.extend=function(f){function T(){}function w(){return pe.apply(this,arguments)}var pe=this;T.prototype=pe.prototype;var ne=new T;return n(ne,w.prototype),w.prototype=ne,w.prototype.constructor=w,w.Interface=n({},pe.Interface,f),w.extend=pe.extend,Xe(w),w},Xe(wn);function Rn(f,T,w,pe){if(this.eventPool.length){var ne=this.eventPool.pop();return this.call(ne,f,T,w,pe),ne}return new this(f,T,w,pe)}function hn(f){if(!(f instanceof this))throw Error(J(279));f.destructor(),10>this.eventPool.length&&this.eventPool.push(f)}function Xe(f){f.eventPool=[],f.getPooled=Rn,f.release=hn}var xn=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined");function Bn(f,T){var w={};return w[f.toLowerCase()]=T.toLowerCase(),w["Webkit"+f]="webkit"+T,w["Moz"+f]="moz"+T,w}var En={animationend:Bn("Animation","AnimationEnd"),animationiteration:Bn("Animation","AnimationIteration"),animationstart:Bn("Animation","AnimationStart"),transitionend:Bn("Transition","TransitionEnd")},We={},_n={};xn&&(_n=document.createElement("div").style,"AnimationEvent"in window||(delete En.animationend.animation,delete En.animationiteration.animation,delete En.animationstart.animation),"TransitionEvent"in window||delete En.transitionend.transition);function Vn(f){if(We[f])return We[f];if(!En[f])return f;var T=En[f],w;for(w in T)if(T.hasOwnProperty(w)&&w in _n)return We[f]=T[w];return f}var et=Vn("animationend"),ct=Vn("animationiteration"),P=Vn("animationstart"),I=Vn("transitionend"),D=null;function d(f){if(D===null)try{var T=("require"+Math.random()).slice(0,7);D=(U&&U[T])("timers").setImmediate}catch(w){D=function(pe){var ne=new MessageChannel;ne.port1.onmessage=pe,ne.port2.postMessage(void 0)}}return D(f)}var o=L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,p=o[11],g=o[12],C=L.unstable_batchedUpdates,a=je.IsSomeRendererActing,l=typeof oe.unstable_flushAllWithoutAsserting=="function",i=oe.unstable_flushAllWithoutAsserting||function(){for(var f=!1;p();)f=!0;return f};function M(f){try{i(),d(function(){i()?M(f):f()})}catch(T){f(T)}}var A=0,j=!1,c=L.findDOMNode,F=L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,h=F[0],t=F[4],v=F[5],u=F[6],N=F[7],K=F[8],W=F[9],Z=F[10];function G(){}function ue(f,T){if(!f)return[];if(f=Mn(f),!f)return[];for(var w=f,pe=[];;){if(w.tag===5||w.tag===6||w.tag===1||w.tag===0){var ne=w.stateNode;T(ne)&&pe.push(ne)}if(w.child)w.child.return=w,w=w.child;else{if(w===f)return pe;for(;!w.sibling;){if(!w.return||w.return===f)return pe;w=w.return}w.sibling.return=w.return,w=w.sibling}}}function De(f,T){if(f&&!f._reactInternalFiber){var w=""+f;throw f=Array.isArray(f)?"an array":f&&f.nodeType===1&&f.tagName?"a DOM node":w==="[object Object]"?"object with keys {"+Object.keys(f).join(", ")+"}":w,Error(J(286,T,f))}}var Ke={renderIntoDocument:function(f){var T=document.createElement("div");return L.render(f,T)},isElement:function(f){return O.isValidElement(f)},isElementOfType:function(f,T){return O.isValidElement(f)&&f.type===T},isDOMComponent:function(f){return!(!f||f.nodeType!==1||!f.tagName)},isDOMComponentElement:function(f){return!!(f&&O.isValidElement(f)&&f.tagName)},isCompositeComponent:function(f){return Ke.isDOMComponent(f)?!1:f!=null&&typeof f.render=="function"&&typeof f.setState=="function"},isCompositeComponentWithType:function(f,T){return Ke.isCompositeComponent(f)?f._reactInternalFiber.type===T:!1},findAllInRenderedTree:function(f,T){return De(f,"findAllInRenderedTree"),f?ue(f._reactInternalFiber,T):[]},scryRenderedDOMComponentsWithClass:function(f,T){return De(f,"scryRenderedDOMComponentsWithClass"),Ke.findAllInRenderedTree(f,function(w){if(Ke.isDOMComponent(w)){var pe=w.className;typeof pe!="string"&&(pe=w.getAttribute("class")||"");var ne=pe.split(/\s+/);if(!Array.isArray(T)){if(T===void 0)throw Error(J(11));T=T.split(/\s+/)}return T.every(function(Pe){return ne.indexOf(Pe)!==-1})}return!1})},findRenderedDOMComponentWithClass:function(f,T){if(De(f,"findRenderedDOMComponentWithClass"),f=Ke.scryRenderedDOMComponentsWithClass(f,T),f.length!==1)throw Error("Did not find exactly one match (found: "+f.length+") for class:"+T);return f[0]},scryRenderedDOMComponentsWithTag:function(f,T){return De(f,"scryRenderedDOMComponentsWithTag"),Ke.findAllInRenderedTree(f,function(w){return Ke.isDOMComponent(w)&&w.tagName.toUpperCase()===T.toUpperCase()})},findRenderedDOMComponentWithTag:function(f,T){if(De(f,"findRenderedDOMComponentWithTag"),f=Ke.scryRenderedDOMComponentsWithTag(f,T),f.length!==1)throw Error("Did not find exactly one match (found: "+f.length+") for tag:"+T);return f[0]},scryRenderedComponentsWithType:function(f,T){return De(f,"scryRenderedComponentsWithType"),Ke.findAllInRenderedTree(f,function(w){return Ke.isCompositeComponentWithType(w,T)})},findRenderedComponentWithType:function(f,T){if(De(f,"findRenderedComponentWithType"),f=Ke.scryRenderedComponentsWithType(f,T),f.length!==1)throw Error("Did not find exactly one match (found: "+f.length+") for componentType:"+T);return f[0]},mockComponent:function(f,T){return T=T||f.mockTagName||"div",f.prototype.render.mockImplementation(function(){return O.createElement(T,null,this.props.children)}),this},nativeTouchData:function(f,T){return{touches:[{pageX:f,pageY:T}]}},Simulate:null,SimulateNative:{},act:function(f){function T(){A--,a.current=w,g.current=pe}j===!1&&(j=!0,console.error("act(...) is not supported in production builds of React, and might not behave as expected.")),A++;var w=a.current,pe=g.current;a.current=!0,g.current=!0;try{var ne=C(f)}catch(Pe){throw T(),Pe}if(ne!==null&&typeof ne=="object"&&typeof ne.then=="function")return{then:function(Pe,Ue){ne.then(function(){1<A||l===!0&&w===!0?(T(),Pe()):M(function(Ye){T(),Ye?Ue(Ye):Pe()})},function(Ye){T(),Ue(Ye)})}};try{A!==1||l!==!1&&w!==!1||i(),T()}catch(Pe){throw T(),Pe}return{then:function(Pe){Pe()}}}};function mn(f){return function(T,w){if(O.isValidElement(T))throw Error(J(228));if(Ke.isCompositeComponent(T))throw Error(J(229));var pe=t[f],ne=new G;ne.target=T,ne.type=f.toLowerCase();var Pe=h(T),Ue=new wn(pe,Pe,ne,T);Ue.persist(),n(Ue,w),pe.phasedRegistrationNames?v(Ue):u(Ue),L.unstable_batchedUpdates(function(){N(T),Z(Ue)}),K()}}Ke.Simulate={};for(var jn in t)Ke.Simulate[jn]=mn(jn);function Wn(f,T){return function(w,pe){var ne=new G(f);n(ne,pe),Ke.isDOMComponent(w)?(w=c(w),ne.target=w,W(T,1,document,ne)):w.tagName&&(ne.target=w,W(T,1,document,ne))}}[["abort","abort"],[et,"animationEnd"],[ct,"animationIteration"],[P,"animationStart"],["blur","blur"],["canplaythrough","canPlayThrough"],["canplay","canPlay"],["cancel","cancel"],["change","change"],["click","click"],["close","close"],["compositionend","compositionEnd"],["compositionstart","compositionStart"],["compositionupdate","compositionUpdate"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["dragstart","dragStart"],["drag","drag"],["drop","drop"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],["ended","ended"],["error","error"],["focus","focus"],["input","input"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["loadstart","loadStart"],["loadstart","loadStart"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["mousedown","mouseDown"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["playing","playing"],["progress","progress"],["ratechange","rateChange"],["scroll","scroll"],["seeked","seeked"],["seeking","seeking"],["selectionchange","selectionChange"],["stalled","stalled"],["suspend","suspend"],["textInput","textInput"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchmove","touchMove"],["touchstart","touchStart"],[I,"transitionEnd"],["volumechange","volumeChange"],["waiting","waiting"],["wheel","wheel"]].forEach(function(f){var T=f[1];Ke.SimulateNative[T]=Wn(T,f[0])}),U.exports=Ke.default||Ke}).call(this,e("hOG+")(Kn))},JjdP:function(Kn,yn,e){"use strict";e.r(yn);var U=e("9og8"),n=e("WmNS"),O=e.n(n),L=e("LtsZ"),oe=`import React, { useRef } from 'react';
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

export default Demo;`,J=`import { get, set, cloneDeep } from 'lodash-es';

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
};`,je=`import React from 'react';
import FormRender, { useForm } from 'form-render';

const Demo = props => {
  const form = useForm();
  return <FormRender form={form} {...props} />;
};

export default Demo;`,Fe=`export const delay = ms => new Promise(res => setTimeout(res, ms));

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

export default Demo;`,Mn=`export const basic = {
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

export default Root;`,ln=`import React, { useState, useEffect } from 'react';
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

export default Demo;`,wn=`{
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
}`,Rn=`import { Select } from 'antd';
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
}`,Bn=`import React from 'react';
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

export default Demo;`,En=`import React, { useState, useRef } from 'react';
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
}`,ct=yn.default={"guide-card":{component:Object(L.dynamic)({loader:function(){var P=Object(U.a)(O.a.mark(function D(){return O.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(25)]).then(e.bind(null,"oLxE"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},D)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:oe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"card-render":{version:"0.1.2"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"0.x"}},identifier:"guide-card"}},"chart-render-demo":{component:Object(L.dynamic)({loader:function(){var P=Object(U.a)(O.a.mark(function D(){var d,o,p,g,C,a,l;return O.a.wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return a=function(j,c){if(!c&&j&&j.__esModule)return j;if(j===null||typeof j!="object"&&typeof j!="function")return{default:j};var F=C(c);if(F&&F.has(j))return F.get(j);var h={},t=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in j)if(v!=="default"&&Object.prototype.hasOwnProperty.call(j,v)){var u=t?Object.getOwnPropertyDescriptor(j,v):null;u&&(u.get||u.set)?Object.defineProperty(h,v,u):h[v]=j[v]}return h.default=j,F&&F.set(j,h),h},C=function(j){if(typeof WeakMap!="function")return null;var c=new WeakMap,F=new WeakMap;return(C=function(t){return t?F:c})(j)},d=e("K+nK"),M.t0=d,M.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return M.t1=M.sent,o=(0,M.t0)(M.t1),M.t2=a,M.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return M.t3=M.sent,p=(0,M.t2)(M.t3),M.next=15,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 15:return g=M.sent,l=function(){var j=(0,p.useState)("Line"),c=(0,o.default)(j,2),F=c[0],h=c[1],t={Line:g.Line,Column:g.Column,PivotTable:g.PivotTable}[F];return p.default.createElement("div",null,p.default.createElement("div",{style:{marginBottom:10}},p.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return h("Line")}},"\u6298\u7EBF\u56FE"),p.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return h("Column")}},"\u67F1\u72B6\u56FE"),p.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return h("PivotTable")}},"\u4EA4\u53C9\u8868")),p.default.createElement(t,{meta:[{id:"date",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF",isDim:!1},{id:"uv",name:"\u8BBF\u5BA2\u6570",isDim:!1}],data:[{date:"20200101",pv:100,uv:50},{date:"20200102",pv:120,uv:60},{date:"20200103",pv:140,uv:70},{date:"20200104",pv:160,uv:80}]}))},M.abrupt("return",l);case 18:case"end":return M.stop()}},D)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"chart-render-demo"}},"column-demo":{component:Object(L.dynamic)({loader:function(){var P=Object(U.a)(O.a.mark(function D(){var d,o,p,g;return O.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=a.sent,g=function(){return o.default.createElement(p.Column,{meta:[{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{pv:50,uv:20}]})},a.abrupt("return",g);case 11:case"end":return a.stop()}},D)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[{ pv: 50, uv: 20 }]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo"}},"column-demo-1":{component:Object(L.dynamic)({loader:function(){var P=Object(U.a)(O.a.mark(function D(){var d,o,p,g;return O.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=a.sent,g=function(){return o.default.createElement(p.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},a.abrupt("return",g);case 11:case"end":return a.stop()}},D)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-1"}},"column-demo-2":{component:Object(L.dynamic)({loader:function(){var P=Object(U.a)(O.a.mark(function D(){var d,o,p,g;return O.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=a.sent,g=function(){return o.default.createElement(p.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},a.abrupt("return",g);case 11:case"end":return a.stop()}},D)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-2"}},"column-demo-3":{component:Object(L.dynamic)({loader:function(){var P=Object(U.a)(O.a.mark(function D(){var d,o,p,g;return O.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=a.sent,g=function(){return o.default.createElement(p.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},a.abrupt("return",g);case 11:case"end":return a.stop()}},D)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-3"}},"column-demo-4":{component:Object(L.dynamic)({loader:function(){var P=Object(U.a)(O.a.mark(function D(){var d,o,p,g;return O.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=a.sent,g=function(){return o.default.createElement(p.Column,{inverted:!0,label:{position:"middle",layout:[{type:"interval-adjust-position"},{type:"interval-hide-overlap"},{type:"adjust-color"}]},meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},a.abrupt("return",g);case 11:case"end":return a.stop()}},D)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-4"}},"line-demo":{component:Object(L.dynamic)({loader:function(){var P=Object(U.a)(O.a.mark(function D(){var d,o,p,g;return O.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=a.sent,g=function(){return o.default.createElement(p.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},a.abrupt("return",g);case 11:case"end":return a.stop()}},D)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo"}},"line-demo-1":{component:Object(L.dynamic)({loader:function(){var P=Object(U.a)(O.a.mark(function D(){var d,o,p,g;return O.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=a.sent,g=function(){return o.default.createElement(p.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},a.abrupt("return",g);case 11:case"end":return a.stop()}},D)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-1"}},"line-demo-2":{component:Object(L.dynamic)({loader:function(){var P=Object(U.a)(O.a.mark(function D(){var d,o,p,g;return O.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=a.sent,g=function(){return o.default.createElement(p.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"},{id:"pv",name:"\u8BBF\u95EE\u91CF"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20,pv:120},{ds:"2020-12-31",page:"\u9996\u9875",uv:120,pv:1120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21,pv:121},{ds:"2021-01-01",page:"\u9996\u9875",uv:121,pv:1121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15,pv:115},{ds:"2021-01-02",page:"\u9996\u9875",uv:115,pv:1115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40,pv:140},{ds:"2021-01-03",page:"\u9996\u9875",uv:140,pv:1140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31,pv:131},{ds:"2021-01-04",page:"\u9996\u9875",uv:131,pv:1131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32,pv:132},{ds:"2021-01-05",page:"\u9996\u9875",uv:132,pv:1132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30,pv:130},{ds:"2021-01-06",page:"\u9996\u9875",uv:130,pv:1130}]})},a.abrupt("return",g);case 11:case"end":return a.stop()}},D)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-2"}},"line-demo-3":{component:Object(L.dynamic)({loader:function(){var P=Object(U.a)(O.a.mark(function D(){var d,o,p,g;return O.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=a.sent,g=function(){return o.default.createElement(p.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},a.abrupt("return",g);case 11:case"end":return a.stop()}},D)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-3"}},"line-demo-4":{component:Object(L.dynamic)({loader:function(){var P=Object(U.a)(O.a.mark(function D(){var d,o,p,g;return O.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=a.sent,g=function(){return o.default.createElement(p.Line,{withArea:!0,isStack:!0,isPercent:!0,meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},a.abrupt("return",g);case 11:case"end":return a.stop()}},D)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-4"}},"pivot-table-demo":{component:Object(L.dynamic)({loader:function(){var P=Object(U.a)(O.a.mark(function D(){var d,o,p,g;return O.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=a.sent,g=function(){return o.default.createElement(p.PivotTable,{style:{maxHeight:400,overflow:"auto"},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},a.abrupt("return",g);case 11:case"end":return a.stop()}},D)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo"}},"pivot-table-demo-1":{component:Object(L.dynamic)({loader:function(){var P=Object(U.a)(O.a.mark(function D(){var d,o,p,g;return O.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return p=a.sent,g=function(){return o.default.createElement(p.PivotTable,{style:{maxHeight:400,overflow:"auto"},cellRender:function(M,A,j){return o.default.createElement("div",null,o.default.createElement("p",null,"\u53C2\u6570\u8868\uFF1A"),o.default.createElement("p",{style:{color:["red","orange","yellow","green","blue"][Object.keys(A).length]}},M),o.default.createElement("p",null,JSON.stringify(A)),o.default.createElement("p",null,JSON.stringify(j)))},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},a.abrupt("return",g);case 11:case"end":return a.stop()}},D)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-1"}},"pivot-table-demo-2":{component:Object(L.dynamic)({loader:function(){var P=Object(U.a)(O.a.mark(function D(){var d,o,p,g,C,a,l;return O.a.wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return a=function(j,c){if(!c&&j&&j.__esModule)return j;if(j===null||typeof j!="object"&&typeof j!="function")return{default:j};var F=C(c);if(F&&F.has(j))return F.get(j);var h={},t=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in j)if(v!=="default"&&Object.prototype.hasOwnProperty.call(j,v)){var u=t?Object.getOwnPropertyDescriptor(j,v):null;u&&(u.get||u.set)?Object.defineProperty(h,v,u):h[v]=j[v]}return h.default=j,F&&F.set(j,h),h},C=function(j){if(typeof WeakMap!="function")return null;var c=new WeakMap,F=new WeakMap;return(C=function(t){return t?F:c})(j)},d=e("K+nK"),M.t0=d,M.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return M.t1=M.sent,o=(0,M.t0)(M.t1),M.t2=a,M.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return M.t3=M.sent,p=(0,M.t2)(M.t3),M.next=15,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 15:return g=M.sent,l=function(){var j=(0,p.useState)(!1),c=(0,o.default)(j,2),F=c[0],h=c[1];return p.default.createElement(p.default.Fragment,null,p.default.createElement("label",null,"\u53EF\u5C55\u5F00/\u6536\u7F29\uFF1A",p.default.createElement("input",{type:"checkbox",value:F,onChange:function(){return h(!F)}})),p.default.createElement(g.PivotTable,{leftExpandable:F,showSubtotal:!1,meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]}))},M.abrupt("return",l);case 18:case"end":return M.stop()}},D)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-2"}},"form-render-demo":{component:Object(L.dynamic)({loader:function(){var P=Object(U.a)(O.a.mark(function D(){var d,o,p,g,C,a,l,i,M,A,j,c,F,h;return O.a.wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return j=function(N,K){if(!K&&N&&N.__esModule)return N;if(N===null||typeof N!="object"&&typeof N!="function")return{default:N};var W=A(K);if(W&&W.has(N))return W.get(N);var Z={},G=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ue in N)if(ue!=="default"&&Object.prototype.hasOwnProperty.call(N,ue)){var De=G?Object.getOwnPropertyDescriptor(N,ue):null;De&&(De.get||De.set)?Object.defineProperty(Z,ue,De):Z[ue]=N[ue]}return Z.default=N,W&&W.set(N,Z),Z},A=function(N){if(typeof WeakMap!="function")return null;var K=new WeakMap,W=new WeakMap;return(A=function(G){return G?W:K})(N)},d=e("K+nK"),v.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return v.t0=d,v.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return v.t1=v.sent,o=(0,v.t0)(v.t1),v.t2=d,v.next=13,e.e(72).then(e.bind(null,"fWQN"));case 13:return v.t3=v.sent,p=(0,v.t2)(v.t3),v.t4=d,v.next=18,e.e(73).then(e.bind(null,"mtLc"));case 18:return v.t5=v.sent,g=(0,v.t4)(v.t5),v.t6=d,v.next=23,e.e(66).then(e.bind(null,"yKVA"));case 23:return v.t7=v.sent,C=(0,v.t6)(v.t7),v.t8=d,v.next=28,e.e(65).then(e.bind(null,"879j"));case 28:return v.t9=v.sent,a=(0,v.t8)(v.t9),v.t10=d,v.next=33,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 33:return v.t11=v.sent,l=(0,v.t10)(v.t11),v.next=37,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 37:return i=v.sent,v.t12=j,v.next=41,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 41:return v.t13=v.sent,M=(0,v.t12)(v.t13),c={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},F=function(u){(0,C.default)(K,u);var N=(0,a.default)(K);function K(){return(0,p.default)(this,K),N.apply(this,arguments)}return(0,g.default)(K,[{key:"render",value:function(){var Z=this.props.form;return l.default.createElement("div",null,l.default.createElement(M.default,{form:Z,schema:c}),l.default.createElement(o.default,{type:"primary",onClick:Z.submit},"\u63D0\u4EA4"))}}]),K}(l.default.Component),h=(0,M.connectForm)(F),v.abrupt("return",h);case 47:case"end":return v.stop()}},D)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default connectForm(Demo);`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo"}},"form-render-demo-1":{component:Object(L.dynamic)({loader:function(){var P=Object(U.a)(O.a.mark(function D(){var d,o,p,g,C,a,l,i,M,A;return O.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return l=function(h,t){if(!t&&h&&h.__esModule)return h;if(h===null||typeof h!="object"&&typeof h!="function")return{default:h};var v=a(t);if(v&&v.has(h))return v.get(h);var u={},N=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var K in h)if(K!=="default"&&Object.prototype.hasOwnProperty.call(h,K)){var W=N?Object.getOwnPropertyDescriptor(h,K):null;W&&(W.get||W.set)?Object.defineProperty(u,K,W):u[K]=h[K]}return u.default=h,v&&v.set(h,u),u},a=function(h){if(typeof WeakMap!="function")return null;var t=new WeakMap,v=new WeakMap;return(a=function(N){return N?v:t})(h)},d=e("K+nK"),c.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return c.t0=d,c.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return c.t1=c.sent,o=(0,c.t0)(c.t1),c.t2=d,c.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return c.t3=c.sent,p=(0,c.t2)(c.t3),c.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 17:return g=c.sent,c.t4=l,c.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 21:return c.t5=c.sent,C=(0,c.t4)(c.t5),i={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},M=function(){var h=(0,C.useForm)();return p.default.createElement("div",null,p.default.createElement(C.default,{form:h,schema:i}),p.default.createElement(o.default,{type:"primary",onClick:h.submit},"\u63D0\u4EA4"))},A=M,c.abrupt("return",A);case 27:case"end":return c.stop()}},D)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo-1"}},"form-render-demo-2":{component:Object(L.dynamic)({loader:function(){var P=Object(U.a)(O.a.mark(function D(){var d,o,p,g,C,a,l,i,M,A;return O.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return l=function(h,t){if(!t&&h&&h.__esModule)return h;if(h===null||typeof h!="object"&&typeof h!="function")return{default:h};var v=a(t);if(v&&v.has(h))return v.get(h);var u={},N=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var K in h)if(K!=="default"&&Object.prototype.hasOwnProperty.call(h,K)){var W=N?Object.getOwnPropertyDescriptor(h,K):null;W&&(W.get||W.set)?Object.defineProperty(u,K,W):u[K]=h[K]}return u.default=h,v&&v.set(h,u),u},a=function(h){if(typeof WeakMap!="function")return null;var t=new WeakMap,v=new WeakMap;return(a=function(N){return N?v:t})(h)},d=e("K+nK"),c.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return c.t0=d,c.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return c.t1=c.sent,o=(0,c.t0)(c.t1),c.t2=d,c.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return c.t3=c.sent,p=(0,c.t2)(c.t3),c.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 17:return g=c.sent,c.t4=l,c.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 21:return c.t5=c.sent,C=(0,c.t4)(c.t5),i={displayType:"row",labelWidth:60,type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F",type:"range",format:"date"},siteUrl:{title:"\u7F51\u5740",type:"string",placeholder:"\u6B64\u5904\u5FC5\u586B",required:!0,props:{addonBefore:"https://",addonAfter:".com"}}}},M=function(){var h=(0,C.useForm)(),t=function(u,N){N.length>0?alert("errors:"+JSON.stringify(N)):alert("formData:"+JSON.stringify(u,null,2))};return p.default.createElement("div",null,p.default.createElement(C.default,{form:h,schema:i,onFinish:t}),p.default.createElement(o.default,{type:"primary",onClick:h.submit},"\u63D0\u4EA4"))},A=M,c.abrupt("return",A);case 27:case"end":return c.stop()}},D)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-demo-2"}},"migrate-demo":{component:Object(L.dynamic)({loader:function(){var P=Object(U.a)(O.a.mark(function D(){var d,o,p,g,C,a,l,i;return O.a.wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return l=function(){var c=(0,p.useForm)(),F=function(t,v){v.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(v))):alert(JSON.stringify(t))};return o.default.createElement("div",null,o.default.createElement(p.default,{form:c,schema:a,onFinish:F}),o.default.createElement("button",{onClick:c.submit},"\u63D0\u4EA4"))},C=function(c,F){if(!F&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var h=g(F);if(h&&h.has(c))return h.get(c);var t={},v=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in c)if(u!=="default"&&Object.prototype.hasOwnProperty.call(c,u)){var N=v?Object.getOwnPropertyDescriptor(c,u):null;N&&(N.get||N.set)?Object.defineProperty(t,u,N):t[u]=c[u]}return t.default=c,h&&h.set(c,t),t},g=function(c){if(typeof WeakMap!="function")return null;var F=new WeakMap,h=new WeakMap;return(g=function(v){return v?h:F})(c)},d=e("K+nK"),A.t0=d,A.next=7,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 7:return A.t1=A.sent,o=(0,A.t0)(A.t1),A.t2=C,A.next=12,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 12:return A.t3=A.sent,p=(0,A.t2)(A.t3),a={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}},i=l,A.abrupt("return",i);case 17:case"end":return A.stop()}},D)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate-demo"}},"migrate-demo-1":{component:Object(L.dynamic)({loader:function(){var P=Object(U.a)(O.a.mark(function D(){var d,o,p,g,C,a,l,i,M,A,j,c,F;return O.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return M=function(u,N){if(!N&&u&&u.__esModule)return u;if(u===null||typeof u!="object"&&typeof u!="function")return{default:u};var K=i(N);if(K&&K.has(u))return K.get(u);var W={},Z=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var G in u)if(G!=="default"&&Object.prototype.hasOwnProperty.call(u,G)){var ue=Z?Object.getOwnPropertyDescriptor(u,G):null;ue&&(ue.get||ue.set)?Object.defineProperty(W,G,ue):W[G]=u[G]}return W.default=u,K&&K.set(u,W),W},i=function(u){if(typeof WeakMap!="function")return null;var N=new WeakMap,K=new WeakMap;return(i=function(Z){return Z?K:N})(u)},d=e("K+nK"),t.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return t.t0=d,t.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return t.t1=t.sent,o=(0,t.t0)(t.t1),t.t2=d,t.next=13,Promise.resolve().then(e.bind(null,"tJVT"));case 13:return t.t3=t.sent,p=(0,t.t2)(t.t3),t.next=17,Promise.all([e.e(3),e.e(19)]).then(e.t.bind(null,"cUip",7));case 17:return t.t4=d,t.next=20,Promise.all([e.e(0),e.e(12),e.e(18),e.e(22)]).then(e.t.bind(null,"iJl9",7));case 20:return t.t5=t.sent,g=(0,t.t4)(t.t5),t.t6=M,t.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return t.t7=t.sent,C=(0,t.t6)(t.t7),t.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 29:return a=t.sent,t.next=32,Promise.all([e.e(64),e.e(71)]).then(e.bind(null,"7t+U"));case 32:return l=t.sent,A=g.default.TextArea,j={type:"object",properties:{number:{title:"\u6570\u5B57\u8F93\u5165\u6846",type:"number","ui:disabled":!0},checkbox:{title:"\u662F\u5426\u9009\u62E9",type:"boolean","ui:widget":"switch"}},required:["number"]},c=function(){var u=(0,C.useState)(JSON.stringify(j)),N=(0,p.default)(u,2),K=N[0],W=N[1],Z=(0,C.useState)({}),G=(0,p.default)(Z,2),ue=G[0],De=G[1],Ke=function(){try{var f=(0,l.updateSchemaToNewVersion)(j);De(f)}catch(T){console.log(T)}},mn=function(f){W(f.target.value)},jn=function(){W(JSON.stringify(JSON.parse(K),null,2))};return C.default.createElement("div",null,C.default.createElement("div",null,"\u586B\u5165\u65E7\u7248schema\uFF1A"),C.default.createElement(A,{style:{minHeight:400,marginTop:12,marginBottom:12},value:K,onChange:mn}),C.default.createElement(o.default,{style:{marginRight:12},onClick:jn},"\u683C\u5F0F\u5316\u65E7schema"),C.default.createElement(o.default,{type:"primary",onClick:Ke},"\u751F\u6210\u65B0\u7248schema"),C.default.createElement(A,{style:{minHeight:400,marginTop:12},value:JSON.stringify(ue,null,2)}))},F=c,t.abrupt("return",F);case 38:case"end":return t.stop()}},D)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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

export default Translator;`},"packages/form-render/src/utils.js":{import:"../../packages/form-render/src/utils.js",content:J}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"},"lodash-es":{version:"4.17.21"}},identifier:"migrate-demo-1"}},"display-demo":{component:Object(L.dynamic)({loader:function(){var P=Object(U.a)(O.a.mark(function D(){var d,o,p,g,C;return O.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,p=(0,l.t2)(l.t3),g=function(M){return{type:"object",displayType:M,properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},objectName:{title:"\u5BF9\u8C61",bind:"obj",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},C=function(){return o.default.createElement("div",null,o.default.createElement("h2",null,"display: row"),o.default.createElement(p.default,{schema:g("row")}),o.default.createElement("h2",null,"display: column"),o.default.createElement(p.default,{schema:g("column")}))},l.abrupt("return",C);case 14:case"end":return l.stop()}},D)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`},"demo/display.js":{import:"../demo/display",content:je}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo"}},"display-demo-1":{component:Object(L.dynamic)({loader:function(){var P=Object(U.a)(O.a.mark(function D(){var d,o,p,g,C;return O.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,p=(0,l.t2)(l.t3),g={type:"object",displayType:"inline",properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},C=function(){return o.default.createElement(p.default,{schema:g})},l.abrupt("return",C);case 14:case"end":return l.stop()}},D)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:je}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-1"}},"display-demo-2":{component:Object(L.dynamic)({loader:function(){var P=Object(U.a)(O.a.mark(function D(){var d,o,p,g,C;return O.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,p=(0,l.t2)(l.t3),g={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0},check:{title:"box",type:"boolean",default:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},C=function(){return o.default.createElement(p.default,{readOnly:!0,schema:g})},l.abrupt("return",C);case 14:case"end":return l.stop()}},D)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form readOnly schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:je}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-2"}},"display-demo-3":{component:Object(L.dynamic)({loader:function(){var P=Object(U.a)(O.a.mark(function D(){var d,o,p,g,C;return O.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,p=(0,l.t2)(l.t3),g={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0,width:"50%"},check:{title:"box",type:"boolean",default:!0,width:"50%",labelWidth:6},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},C=function(){return o.default.createElement(p.default,{labelWidth:"200",schema:g})},l.abrupt("return",C);case 14:case"end":return l.stop()}},D)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form labelWidth="200" schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:je}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-3"}},"display-demo-4":{component:Object(L.dynamic)({loader:function(){var P=Object(U.a)(O.a.mark(function D(){var d,o,p,g,C,a;return O.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return d=e("K+nK"),i.t0=d,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.t2=d,i.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return i.t3=i.sent,p=(0,i.t2)(i.t3),g={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},C=function(){return o.default.createElement(p.default,{schema:g})},a=C,i.abrupt("return",a);case 15:case"end":return i.stop()}},D)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:je}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-4"}},"display-demo-5":{component:Object(L.dynamic)({loader:function(){var P=Object(U.a)(O.a.mark(function D(){var d,o,p,g,C,a;return O.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return d=e("K+nK"),i.t0=d,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.t2=d,i.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return i.t3=i.sent,p=(0,i.t2)(i.t3),g={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},C=function(){return o.default.createElement(p.default,{schema:g})},a=C,i.abrupt("return",a);case 15:case"end":return i.stop()}},D)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:je}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-5"}},"display-demo-6":{component:Object(L.dynamic)({loader:function(){var P=Object(U.a)(O.a.mark(function D(){var d,o,p,g,C,a;return O.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return d=e("K+nK"),i.t0=d,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.t2=d,i.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return i.t3=i.sent,p=(0,i.t2)(i.t3),g={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},C=function(){return o.default.createElement(p.default,{schema:g})},a=C,i.abrupt("return",a);case 15:case"end":return i.stop()}},D)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:je}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-6"}},"display-demo-7":{component:Object(L.dynamic)({loader:function(){var P=Object(U.a)(O.a.mark(function D(){var d,o,p,g,C,a;return O.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return d=e("K+nK"),i.t0=d,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.t2=d,i.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return i.t3=i.sent,p=(0,i.t2)(i.t3),g={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},C=function(){return o.default.createElement(p.default,{schema:g})},a=C,i.abrupt("return",a);case 15:case"end":return i.stop()}},D)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:je}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-7"}},"form-methods-demo":{component:Object(L.dynamic)({loader:function(){var P=Object(U.a)(O.a.mark(function D(){var d,o,p,g,C,a,l,i,M,A,j,c,F;return O.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return j=function(u,N){if(!N&&u&&u.__esModule)return u;if(u===null||typeof u!="object"&&typeof u!="function")return{default:u};var K=A(N);if(K&&K.has(u))return K.get(u);var W={},Z=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var G in u)if(G!=="default"&&Object.prototype.hasOwnProperty.call(u,G)){var ue=Z?Object.getOwnPropertyDescriptor(u,G):null;ue&&(ue.get||ue.set)?Object.defineProperty(W,G,ue):W[G]=u[G]}return W.default=u,K&&K.set(u,W),W},A=function(u){if(typeof WeakMap!="function")return null;var N=new WeakMap,K=new WeakMap;return(A=function(Z){return Z?K:N})(u)},d=e("K+nK"),t.next=5,e.e(20).then(e.t.bind(null,"lfLe",7));case 5:return t.t0=d,t.next=8,e.e(21).then(e.t.bind(null,"Cp9S",7));case 8:return t.t1=t.sent,o=(0,t.t0)(t.t1),t.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return t.t2=d,t.next=15,e.e(12).then(e.t.bind(null,"4IMT",7));case 15:return t.t3=t.sent,p=(0,t.t2)(t.t3),t.next=19,e.e(14).then(e.t.bind(null,"tL+A",7));case 19:return t.t4=d,t.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return t.t5=t.sent,g=(0,t.t4)(t.t5),t.t6=d,t.next=27,Promise.resolve().then(e.bind(null,"tJVT"));case 27:return t.t7=t.sent,C=(0,t.t6)(t.t7),t.t8=j,t.next=32,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 32:return t.t9=t.sent,a=(0,t.t8)(t.t9),t.next=36,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 36:return l=t.sent,t.t10=j,t.next=40,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 40:return t.t11=t.sent,i=(0,t.t10)(t.t11),t.next=44,e.e(15).then(e.bind(null,"OH0R"));case 44:return M=t.sent,c=function(){var u=(0,i.useForm)(),N=(0,a.useState)({}),K=(0,C.default)(N,2),W=K[0],Z=K[1],G=function(){(0,M.fakeApi)("xxx/getForm").then(function(Ke){u.setValues({input1:"hello world",select1:"c"})})};(0,a.useEffect)(function(){(0,M.delay)(1e3).then(function(De){Z({type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}})})},[]);var ue=function(Ke,mn){mn.length>0?g.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(mn.map(function(jn){return jn.name}))):(0,M.fakeApi)("xxx/submit",Ke).then(function(jn){return g.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})};return a.default.createElement("div",{style:{width:"400px"}},a.default.createElement(i.default,{form:u,schema:W,onFinish:ue}),a.default.createElement(o.default,null,a.default.createElement(p.default,{onClick:G},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),a.default.createElement(p.default,{type:"primary",onClick:u.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},F=c,t.abrupt("return",F);case 48:case"end":return t.stop()}},D)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Fe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo"}},"form-methods-demo-1":{component:Object(L.dynamic)({loader:function(){var P=Object(U.a)(O.a.mark(function D(){var d,o,p,g,C,a,l,i,M,A,j,c,F;return O.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return A=function(u,N){if(!N&&u&&u.__esModule)return u;if(u===null||typeof u!="object"&&typeof u!="function")return{default:u};var K=M(N);if(K&&K.has(u))return K.get(u);var W={},Z=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var G in u)if(G!=="default"&&Object.prototype.hasOwnProperty.call(u,G)){var ue=Z?Object.getOwnPropertyDescriptor(u,G):null;ue&&(ue.get||ue.set)?Object.defineProperty(W,G,ue):W[G]=u[G]}return W.default=u,K&&K.set(u,W),W},M=function(u){if(typeof WeakMap!="function")return null;var N=new WeakMap,K=new WeakMap;return(M=function(Z){return Z?K:N})(u)},d=e("K+nK"),t.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return t.t0=d,t.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return t.t1=t.sent,o=(0,t.t0)(t.t1),t.t2=d,t.next=13,Promise.resolve().then(e.bind(null,"PpiC"));case 13:return t.t3=t.sent,p=(0,t.t2)(t.t3),t.next=17,e.e(14).then(e.t.bind(null,"tL+A",7));case 17:return t.t4=d,t.next=20,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 20:return t.t5=t.sent,g=(0,t.t4)(t.t5),t.t6=d,t.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return t.t7=t.sent,C=(0,t.t6)(t.t7),t.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 29:return a=t.sent,t.t8=A,t.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 33:return t.t9=t.sent,l=(0,t.t8)(t.t9),t.next=37,e.e(15).then(e.bind(null,"OH0R"));case 37:return i=t.sent,j={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},c=function(){var u=(0,l.useForm)(),N=function(Z,G){G.length>0?g.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(G.map(function(ue){return ue.name}))):(0,i.fakeApi)("xxx/submit",Z).then(function(ue){return g.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},K=function(Z){var G=Z.data,ue=Z.errors,De=Z.schema,Ke=(0,p.default)(Z,["data","errors","schema"]);return(0,i.fakeApi)("xxx/validation").then(function(mn){return{name:"select1",error:["\u5916\u90E8\u6821\u9A8C\u9519\u8BEF"]}})};return C.default.createElement("div",{style:{width:"400px"}},C.default.createElement(l.default,{form:u,schema:j,beforeFinish:K,onFinish:N}),C.default.createElement(o.default,{type:"primary",onClick:u.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},F=c,t.abrupt("return",F);case 42:case"end":return t.stop()}},D)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Fe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-1"}},"form-methods-demo-2":{component:Object(L.dynamic)({loader:function(){var P=Object(U.a)(O.a.mark(function D(){var d,o,p,g,C,a,l,i,M,A,j,c,F;return O.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return A=function(u,N){if(!N&&u&&u.__esModule)return u;if(u===null||typeof u!="object"&&typeof u!="function")return{default:u};var K=M(N);if(K&&K.has(u))return K.get(u);var W={},Z=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var G in u)if(G!=="default"&&Object.prototype.hasOwnProperty.call(u,G)){var ue=Z?Object.getOwnPropertyDescriptor(u,G):null;ue&&(ue.get||ue.set)?Object.defineProperty(W,G,ue):W[G]=u[G]}return W.default=u,K&&K.set(u,W),W},M=function(u){if(typeof WeakMap!="function")return null;var N=new WeakMap,K=new WeakMap;return(M=function(Z){return Z?K:N})(u)},d=e("K+nK"),t.next=5,e.e(20).then(e.t.bind(null,"lfLe",7));case 5:return t.t0=d,t.next=8,e.e(21).then(e.t.bind(null,"Cp9S",7));case 8:return t.t1=t.sent,o=(0,t.t0)(t.t1),t.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return t.t2=d,t.next=15,e.e(12).then(e.t.bind(null,"4IMT",7));case 15:return t.t3=t.sent,p=(0,t.t2)(t.t3),t.next=19,e.e(14).then(e.t.bind(null,"tL+A",7));case 19:return t.t4=d,t.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return t.t5=t.sent,g=(0,t.t4)(t.t5),t.t6=d,t.next=27,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 27:return t.t7=t.sent,C=(0,t.t6)(t.t7),t.next=31,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 31:return a=t.sent,t.t8=A,t.next=35,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 35:return t.t9=t.sent,l=(0,t.t8)(t.t9),t.next=39,e.e(15).then(e.bind(null,"OH0R"));case 39:return i=t.sent,j={type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F\u8303\u56F4",type:"range",format:"date"}}},c=function(){var u=(0,l.useForm)(),N=function(Z,G){G.length>0?g.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(G.map(function(ue){return ue.name}))):(0,i.fakeApi)("xxx/submit",Z).then(function(ue){return g.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},K=function(){(0,i.fakeApi)("xxx/getForm").then(function(Z){u.setValues({startDate:"2020-04-04",endDate:"2020-04-24"})})};return C.default.createElement("div",{style:{width:"400px"}},C.default.createElement(l.default,{form:u,schema:j,onFinish:N}),C.default.createElement(o.default,null,C.default.createElement(p.default,{onClick:K},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),C.default.createElement(p.default,{type:"primary",onClick:u.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},F=c,t.abrupt("return",F);case 44:case"end":return t.stop()}},D)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Fe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-2"}},"form-methods-demo-3":{component:Object(L.dynamic)({loader:function(){var P=Object(U.a)(O.a.mark(function D(){var d,o,p,g,C,a,l,i,M,A,j,c;return O.a.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return M=function(v,u){if(!u&&v&&v.__esModule)return v;if(v===null||typeof v!="object"&&typeof v!="function")return{default:v};var N=i(u);if(N&&N.has(v))return N.get(v);var K={},W=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var Z in v)if(Z!=="default"&&Object.prototype.hasOwnProperty.call(v,Z)){var G=W?Object.getOwnPropertyDescriptor(v,Z):null;G&&(G.get||G.set)?Object.defineProperty(K,Z,G):K[Z]=v[Z]}return K.default=v,N&&N.set(v,K),K},i=function(v){if(typeof WeakMap!="function")return null;var u=new WeakMap,N=new WeakMap;return(i=function(W){return W?N:u})(v)},d=e("K+nK"),h.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return h.t0=d,h.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return h.t1=h.sent,o=(0,h.t0)(h.t1),h.next=12,e.e(14).then(e.t.bind(null,"tL+A",7));case 12:return h.t2=d,h.next=15,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 15:return h.t3=h.sent,p=(0,h.t2)(h.t3),h.t4=M,h.next=20,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 20:return h.t5=h.sent,g=(0,h.t4)(h.t5),h.next=24,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 24:return C=h.sent,h.t6=M,h.next=28,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 28:return h.t7=h.sent,a=(0,h.t6)(h.t7),h.next=32,e.e(15).then(e.bind(null,"OH0R"));case 32:return l=h.sent,A={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select1:{title:"\u5355\u9009",type:"string",widget:"select"}}}}},j=function(){var v=(0,a.useForm)(),u=function(){v.setSchemaByPath("obj1.select1",{enum:["east","south","west","north"],enumNames:["\u4E1C","\u5357","\u897F","\u5317"]})},N=function(W,Z){Z.length>0?p.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(Z.map(function(G){return G.name}))):p.default.info(JSON.stringify(W))};return g.default.createElement("div",{style:{width:"400px"}},g.default.createElement(a.default,{form:v,schema:A,onMount:u,onFinish:N}),g.default.createElement(o.default,{type:"primary",onClick:v.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},c=j,h.abrupt("return",c);case 37:case"end":return h.stop()}},D)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Fe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-3"}},"function-demo":{component:Object(L.dynamic)({loader:function(){var P=Object(U.a)(O.a.mark(function D(){var d,o,p,g,C,a,l,i;return O.a.wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return C=function(c,F){if(!F&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var h=g(F);if(h&&h.has(c))return h.get(c);var t={},v=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in c)if(u!=="default"&&Object.prototype.hasOwnProperty.call(c,u)){var N=v?Object.getOwnPropertyDescriptor(c,u):null;N&&(N.get||N.set)?Object.defineProperty(t,u,N):t[u]=c[u]}return t.default=c,h&&h.set(c,t),t},g=function(c){if(typeof WeakMap!="function")return null;var F=new WeakMap,h=new WeakMap;return(g=function(v){return v?h:F})(c)},d=e("K+nK"),A.t0=d,A.next=6,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 6:return A.t1=A.sent,o=(0,A.t0)(A.t1),A.t2=C,A.next=11,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 11:return A.t3=A.sent,p=(0,A.t2)(A.t3),a={type:"object",properties:{select1:{title:"\u5355\u9009",description:"\u5C1D\u8BD5\u9009\u62E9\u201C\u663E\u793A\u8F93\u5165\u6846\u201D",type:"string",enum:["a","b"],enumNames:["\u9690\u85CF\u8F93\u5165\u6846","\u663E\u793A\u8F93\u5165\u6846"],disabled:"{{rootValue.input1.length > 5}}",default:"a"},input1:{title:"\u8F93\u5165\u6846",description:"\u5C1D\u8BD5\u8F93\u5165\u8D85\u8FC75\u4E2A\u5B57\u7B26",type:"string",hidden:'{{formData.select1 == "a"}}'}}},l=function(){var c=(0,p.useForm)();return o.default.createElement(p.default,{form:c,schema:a})},i=l,A.abrupt("return",i);case 17:case"end":return A.stop()}},D)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo1;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo"}},"function-demo-1":{component:Object(L.dynamic)({loader:function(){var P=Object(U.a)(O.a.mark(function D(){var d,o,p,g,C;return O.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return l.t3=l.sent,p=(0,l.t2)(l.t3),l.next=13,e.e(17).then(e.bind(null,"8iYR"));case 13:return g=l.sent,C=function(){return o.default.createElement(p.default,{schema:g.expression})},l.abrupt("return",C);case 16:case"end":return l.stop()}},D)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { expression } from '../json/schema';

export default () => <FR schema={expression} />;`},"demo/FR.jsx":{import:"../demo/FR",content:ve},"json/schema.js":{import:"../json/schema",content:Mn}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo-1"}},"lifeCycle-demo":{component:Object(L.dynamic)({loader:function(){var P=Object(U.a)(O.a.mark(function D(){var d,o,p,g,C,a,l,i,M;return O.a.wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return C=function(F,h){if(!h&&F&&F.__esModule)return F;if(F===null||typeof F!="object"&&typeof F!="function")return{default:F};var t=g(h);if(t&&t.has(F))return t.get(F);var v={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var N in F)if(N!=="default"&&Object.prototype.hasOwnProperty.call(F,N)){var K=u?Object.getOwnPropertyDescriptor(F,N):null;K&&(K.get||K.set)?Object.defineProperty(v,N,K):v[N]=F[N]}return v.default=F,t&&t.set(F,v),v},g=function(F){if(typeof WeakMap!="function")return null;var h=new WeakMap,t=new WeakMap;return(g=function(u){return u?t:h})(F)},j.t0=C,j.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return j.t1=j.sent,d=(0,j.t0)(j.t1),j.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 9:return o=j.sent,j.t2=C,j.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 13:return j.t3=j.sent,p=(0,j.t2)(j.t3),a=function(F){return new Promise(function(h){return setTimeout(h,F)})},l={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u4E0B\u62C9\u9009\u6846",description:"\u52A0\u8F7D\u4E2D...",type:"string",enum:[],widget:"select"}}},i=function(){var F=(0,p.useForm)(),h=function(){F.setValues({input1:"hello world"}),a(3e3).then(function(v){F.setSchemaByPath("select1",{description:"",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]})})};return d.default.createElement(p.default,{form:F,schema:l,onMount:h})},M=i,j.abrupt("return",M);case 20:case"end":return j.stop()}},D)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.4.5-beta.14"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"lifeCycle-demo"}},"listDisplay-demo":{component:Object(L.dynamic)({loader:function(){var P=Object(U.a)(O.a.mark(function D(){var d,o,p,g,C,a;return O.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return d=e("K+nK"),i.t0=d,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.t2=d,i.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return i.t3=i.sent,p=(0,i.t2)(i.t3),g={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},C=function(){return o.default.createElement(p.default,{schema:g})},a=C,i.abrupt("return",a);case 15:case"end":return i.stop()}},D)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:je}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo"}},"listDisplay-demo-1":{component:Object(L.dynamic)({loader:function(){var P=Object(U.a)(O.a.mark(function D(){var d,o,p,g,C,a;return O.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return d=e("K+nK"),i.t0=d,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.t2=d,i.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return i.t3=i.sent,p=(0,i.t2)(i.t3),g={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},C=function(){return o.default.createElement(p.default,{schema:g})},a=C,i.abrupt("return",a);case 15:case"end":return i.stop()}},D)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:je}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-1"}},"listDisplay-demo-2":{component:Object(L.dynamic)({loader:function(){var P=Object(U.a)(O.a.mark(function D(){var d,o,p,g,C,a;return O.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return d=e("K+nK"),i.t0=d,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.t2=d,i.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return i.t3=i.sent,p=(0,i.t2)(i.t3),g={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},C=function(){return o.default.createElement(p.default,{schema:g})},a=C,i.abrupt("return",a);case 15:case"end":return i.stop()}},D)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:je}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-2"}},"listDisplay-demo-3":{component:Object(L.dynamic)({loader:function(){var P=Object(U.a)(O.a.mark(function D(){var d,o,p,g,C,a;return O.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return d=e("K+nK"),i.t0=d,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.t2=d,i.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return i.t3=i.sent,p=(0,i.t2)(i.t3),g={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},C=function(){return o.default.createElement(p.default,{schema:g})},a=C,i.abrupt("return",a);case 15:case"end":return i.stop()}},D)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:je}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-3"}},"listDisplay-demo-4":{component:Object(L.dynamic)({loader:function(){var P=Object(U.a)(O.a.mark(function D(){var d,o,p,g,C,a;return O.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return d=e("K+nK"),i.t0=d,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.t2=d,i.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return i.t3=i.sent,p=(0,i.t2)(i.t3),window.hello=function(M){var A=M.value;console.log(A)},g={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list4",itemProps:{buttons:[{callback:"hello",text:"\u590D\u5236"}]},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},C=function(){return o.default.createElement(p.default,{schema:g})},a=C,i.abrupt("return",a);case 16:case"end":return i.stop()}},D)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:je}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-4"}},"watch-demo":{component:Object(L.dynamic)({loader:function(){var P=Object(U.a)(O.a.mark(function D(){var d,o,p,g,C,a,l,i;return O.a.wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return C=function(c,F){if(!F&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var h=g(F);if(h&&h.has(c))return h.get(c);var t={},v=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in c)if(u!=="default"&&Object.prototype.hasOwnProperty.call(c,u)){var N=v?Object.getOwnPropertyDescriptor(c,u):null;N&&(N.get||N.set)?Object.defineProperty(t,u,N):t[u]=c[u]}return t.default=c,h&&h.set(c,t),t},g=function(c){if(typeof WeakMap!="function")return null;var F=new WeakMap,h=new WeakMap;return(g=function(v){return v?h:F})(c)},A.t0=C,A.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return A.t1=A.sent,d=(0,A.t0)(A.t1),A.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 9:return o=A.sent,A.t2=C,A.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 13:return A.t3=A.sent,p=(0,A.t2)(A.t3),a={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"}}},l=function(){var c=(0,p.useForm)(),F={"#":function(t){console.log("\u8868\u5355\u7684\u65F6\u65F6\u6570\u636E\u4E3A\uFF1A",t)},input1:function(t){c.setValueByPath("input2",t)}};return d.default.createElement(p.default,{form:c,schema:a,watch:F})},i=l,A.abrupt("return",i);case 19:case"end":return A.stop()}},D)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.4.5-beta.14"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo"}},"watch-demo-1":{component:Object(L.dynamic)({loader:function(){var P=Object(U.a)(O.a.mark(function D(){var d,o,p,g,C,a,l,i,M,A;return O.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return l=function(h,t){if(!t&&h&&h.__esModule)return h;if(h===null||typeof h!="object"&&typeof h!="function")return{default:h};var v=a(t);if(v&&v.has(h))return v.get(h);var u={},N=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var K in h)if(K!=="default"&&Object.prototype.hasOwnProperty.call(h,K)){var W=N?Object.getOwnPropertyDescriptor(h,K):null;W&&(W.get||W.set)?Object.defineProperty(u,K,W):u[K]=h[K]}return u.default=h,v&&v.set(h,u),u},a=function(h){if(typeof WeakMap!="function")return null;var t=new WeakMap,v=new WeakMap;return(a=function(N){return N?v:t})(h)},d=e("K+nK"),c.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return c.t0=d,c.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return c.t1=c.sent,o=(0,c.t0)(c.t1),c.t2=l,c.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return c.t3=c.sent,p=(0,c.t2)(c.t3),c.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 17:return g=c.sent,c.t4=l,c.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 21:return c.t5=c.sent,C=(0,c.t4)(c.t5),i={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"radio"}}}}},M=function(){var h=(0,C.useForm)(),t=function(N,K){K.length>0?alert("errorFields:"+JSON.stringify(K)):alert("formData:"+JSON.stringify(N,null,2))},v={input1:function(N){N.length>2?h.setSchemaByPath("obj1.select",function(K){var W=K.enumNames;return{enumNames:W.map(function(Z){return Z+"a"})}}):h.setSchemaByPath("obj1.select",{enumNames:["\u65E9","\u4E2D","\u665A"]})}};return p.default.createElement("div",null,p.default.createElement(C.default,{form:h,schema:i,onFinish:t,watch:v}),p.default.createElement(o.default,{type:"",style:{marginRight:8},onClick:function(){return h.setSchemaByPath("input2",{title:"\u7F16\u8F91\u6846",format:"textarea"})}},"\u5C06 input \u6539\u4E3A textarea"),p.default.createElement(o.default,{type:"primary",onClick:h.submit},"\u63D0\u4EA4"))},A=M,c.abrupt("return",A);case 27:case"end":return c.stop()}},D)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo-1"}},"widget-demo":{component:Object(L.dynamic)({loader:function(){var P=Object(U.a)(O.a.mark(function D(){var d,o,p,g,C,a,l,i,M,A,j,c,F;return O.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return M=function(u,N){if(!N&&u&&u.__esModule)return u;if(u===null||typeof u!="object"&&typeof u!="function")return{default:u};var K=i(N);if(K&&K.has(u))return K.get(u);var W={},Z=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var G in u)if(G!=="default"&&Object.prototype.hasOwnProperty.call(u,G)){var ue=Z?Object.getOwnPropertyDescriptor(u,G):null;ue&&(ue.get||ue.set)?Object.defineProperty(W,G,ue):W[G]=u[G]}return W.default=u,K&&K.set(u,W),W},i=function(u){if(typeof WeakMap!="function")return null;var N=new WeakMap,K=new WeakMap;return(i=function(Z){return Z?K:N})(u)},d=e("K+nK"),t.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return t.t0=d,t.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return t.t1=t.sent,o=(0,t.t0)(t.t1),t.next=12,Promise.all([e.e(3),e.e(19)]).then(e.t.bind(null,"cUip",7));case 12:return t.t2=d,t.next=15,Promise.all([e.e(0),e.e(12),e.e(18),e.e(22)]).then(e.t.bind(null,"iJl9",7));case 15:return t.t3=t.sent,p=(0,t.t2)(t.t3),t.t4=d,t.next=20,e.e(74).then(e.bind(null,"0Owb"));case 20:return t.t5=t.sent,g=(0,t.t4)(t.t5),t.t6=M,t.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return t.t7=t.sent,C=(0,t.t6)(t.t7),t.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(13)]).then(e.bind(null,"gdfu"));case 29:return a=t.sent,t.t8=M,t.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 33:return t.t9=t.sent,l=(0,t.t8)(t.t9),A={type:"object",properties:{string:{title:"\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6",type:"string",widget:"site"},select:{title:"\u5355\u9009",type:"number",enum:[1,2,3],enumNames:["\u9009\u98791","\u9009\u98792","\u9009\u98793"]}}},j=function(u){return console.log("widget props:",u),C.default.createElement(p.default,(0,g.default)({addonBefore:"http://",addonAfter:".com"},u))},c=function(){var u=(0,l.useForm)(),N=function(){};return C.default.createElement("div",null,C.default.createElement(l.default,{readOnly:!0,form:u,schema:A,widgets:{site:j},onFinish:function(W){return alert(JSON.stringify(W,null,2))}}),C.default.createElement(o.default,{type:"primary",onClick:u.submit},"\u63D0\u4EA4"))},F=c,t.abrupt("return",F);case 40:case"end":return t.stop()}},D)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},"react-dom":{version:">=16.8.0"}},identifier:"widget-demo"}},"schema-demo":{component:Object(L.dynamic)({loader:function(){var P=Object(U.a)(O.a.mark(function D(){var d,o,p,g,C;return O.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return l.t3=l.sent,p=(0,l.t2)(l.t3),l.next=13,e.e(17).then(e.bind(null,"8iYR"));case 13:return g=l.sent,C=function(){return o.default.createElement(p.default,{schema:g.basic})},l.abrupt("return",C);case 16:case"end":return l.stop()}},D)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { basic } from '../json/schema';

export default () => <FR schema={basic} />;`},"demo/FR.jsx":{import:"../demo/FR",content:ve},"json/schema.js":{import:"../json/schema",content:Mn}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo"}},"schema-demo-1":{component:Object(L.dynamic)({loader:function(){var P=Object(U.a)(O.a.mark(function D(){var d,o,p,g,C;return O.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return l.t3=l.sent,p=(0,l.t2)(l.t3),l.next=13,e.e(17).then(e.bind(null,"8iYR"));case 13:return g=l.sent,C=function(){return o.default.createElement(p.default,{schema:g.titleTrick})},l.abrupt("return",C);case 16:case"end":return l.stop()}},D)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { titleTrick } from '../json/schema';

export default () => <FR schema={titleTrick} />;`},"demo/FR.jsx":{import:"../demo/FR",content:ve},"json/schema.js":{import:"../json/schema",content:Mn}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.14"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo-1"}},"docs-playground":{component:Object(L.dynamic)({loader:function(){var P=Object(U.a)(O.a.mark(function D(){return O.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(25)]).then(e.bind(null,"BASV"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},D)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:Ie},"main.js":{import:"./main",content:ln},"json/simplest.json":{import:"./json/simplest.json",content:wn},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:Rn},"monaco/index.js":{import:"./monaco",content:hn},"suggestionsMap.js":{import:"./suggestionsMap",content:Xe},"index.css":{import:"./index.css",content:xn}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:"^17.x"},"react-dom":{version:">=16.9.0"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.4.5-beta.14"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-monaco-editor":{version:"0.43.0"},"@types/react":{version:"^17.x"}},identifier:"docs-playground"}},"table-render-advanced":{component:Object(L.dynamic)({loader:function(){var P=Object(U.a)(O.a.mark(function D(){return O.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(25)]).then(e.bind(null,"7ZP+"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},D)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{tsx:Bn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.1"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!0,identifier:"table-render-advanced"}},"table-render-demo":{component:Object(L.dynamic)({loader:function(){var P=Object(U.a)(O.a.mark(function D(){var d,o,p,g,C,a,l,i,M;return O.a.wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return d=e("K+nK"),j.t0=d,j.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return j.t1=j.sent,o=(0,j.t0)(j.t1),j.next=8,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(63)]).then(e.bind(null,"P2DI"));case 8:for(p=j.sent,g=[],C=0;C<6;C++)g.push({id:C.toString(),title:"\u6807\u9898".concat(C+1),created_at:new Date().getTime()});return a={type:"object",properties:{string:{title:"\u6807\u9898",type:"string","ui:width":"30%"},created_at:{title:"\u521B\u5EFA\u65F6\u95F4",type:"string",format:"date","ui:width":"30%"}}},l=[{title:"\u6807\u9898",dataIndex:"title"},{title:"\u521B\u5EFA\u65F6\u95F4",key:"since",dataIndex:"created_at",valueType:"date"},{title:"\u64CD\u4F5C",render:function(F,h){return o.default.createElement("a",{onClick:function(){return alert(F.title)}},"\u7F16\u8F91")}}],i=function(){var F=function(){return{rows:g,total:g.length}};return o.default.createElement(p.TableProvider,null,o.default.createElement(p.Search,{schema:a,api:F}),o.default.createElement(p.Table,{headerTitle:"\u6700\u7B80\u8868\u683C",columns:l,rowKey:"id"}))},M=i,j.abrupt("return",M);case 16:case"end":return j.stop()}},D)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Wrapper;`}},dependencies:{react:{version:">=16.8.0"},"table-render":{version:"1.1.1"},antd:{version:"4.x",css:"antd/dist/antd.css"}},transform:!0,defaultShowCode:!0,identifier:"table-render-demo"}},"generator-demo":{component:Object(L.dynamic)({loader:function(){var P=Object(U.a)(O.a.mark(function D(){var d,o,p,g,C,a;return O.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return d=e("K+nK"),i.t0=d,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.t2=d,i.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(62)]).then(e.bind(null,"nYSz"));case 9:return i.t3=i.sent,p=(0,i.t2)(i.t3),g={type:"object",properties:{inputName:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string"}}},C=function(){return o.default.createElement("div",{style:{height:"80vh"}},o.default.createElement(p.default,{defaultValue:g}))},a=C,i.abrupt("return",a);case 15:case"end":return i.stop()}},D)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.1.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"generator-demo"}},"generator-modal":{component:Object(L.dynamic)({loader:function(){var P=Object(U.a)(O.a.mark(function D(){return O.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(25)]).then(e.bind(null,"PPgD"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},D)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:En}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.1.2"},"react-dom":{version:">=16.9.0"}},identifier:"generator-modal"}},"generator-transformer":{component:Object(L.dynamic)({loader:function(){var P=Object(U.a)(O.a.mark(function D(){return O.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(25)]).then(e.bind(null,"jktF"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},D)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:We}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.1.2"},"react-dom":{version:">=16.9.0"}},identifier:"generator-transformer"}},"generator-settings":{component:Object(L.dynamic)({loader:function(){var P=Object(U.a)(O.a.mark(function D(){return O.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(25)]).then(e.bind(null,"M63W"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},D)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:_n}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.1.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-settings"}},"generator-playground":{component:Object(L.dynamic)({loader:function(){var P=Object(U.a)(O.a.mark(function D(){return O.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(25)]).then(e.bind(null,"TYW4"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},D)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:Vn},"index.less":{import:"./index.less",content:et}},dependencies:{react:{version:">=16.8.0"},umi:{version:"3.4.19"},"fr-generator":{version:"2.1.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-playground"}}}},TIsu:function(Kn,yn,e){},Zs1V:function(Kn){Kn.exports=JSON.parse("{}")},o4Wb:function(Kn,yn,e){"use strict";e.r(yn);var U=e("q1tI"),n=e.n(U),O=e("dEAq"),L=e.n(O),oe=e("0zqC"),J=e("ZpkN"),je=e("JjdP"),Fe=n.a.memo(je.default["form-methods-demo"].component),ve=n.a.memo(je.default["form-methods-demo-1"].component),Mn=n.a.memo(je.default["form-methods-demo-2"].component),Ie=n.a.memo(je.default["form-methods-demo-3"].component);yn.default=ln=>(n.a.useEffect(()=>{ln!=null&&ln.location.hash&&O.AnchorLink.scrollToAnchor(decodeURIComponent(ln.location.hash.slice(1)))},[]),n.a.createElement(n.a.Fragment,null,n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"markdown"},n.a.createElement("h1",{id:"\u8868\u5355\u65B9\u6CD5\uFF08form\uFF09"},n.a.createElement(O.AnchorLink,{to:"#\u8868\u5355\u65B9\u6CD5\uFF08form\uFF09","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u8868\u5355\u65B9\u6CD5\uFF08form\uFF09"),n.a.createElement("p",null,"FormRender v1.x \u4F7F\u7528\u4E86\u72B6\u6001\u5185\u7F6E\u7684\u6A21\u578B\uFF0C\u6240\u4EE5\u5916\u90E8\u5BF9\u8868\u5355\u7684\u6240\u6709\u64CD\u4F5C\u90FD\u4F9D\u8D56\u4E8E form \u5B9E\u4F8B\u63D0\u4F9B\u7684\u65B9\u6CD5\u3002 \u672C\u7BC7\u4F1A cover \u4EE5\u4E0B\u8FD9\u4E9B\u5E38\u7528 api\uFF1A"),n.a.createElement(J.a,{code:`form.submit
form.setValues
form.setValueByPath
form.setSchemaByPath`,lang:"unknown"}),n.a.createElement("p",null,"\u4EE5\u53CA\u4EE5\u4E0B\u7684\u751F\u547D\u5468\u671F"),n.a.createElement(J.a,{code:`beforeFinish
onFinish`,lang:"unknown"}),n.a.createElement("p",null,"\u6211\u4EEC\u5199\u4E00\u4E2A\u6700\u5E38\u7528\u7684\u573A\u666F\uFF1A\u52A0\u8F7D\u4E00\u4E2A\u5DF2\u7ECF\u586B\u5199\u5B8C\u6210\u7684\u8868\u5355\uFF0C\u4ECE\u670D\u52A1\u7AEF\u5F02\u6B65\u83B7\u53D6\u6570\u636E\uFF08\u8FD9\u91CC\u4F7F\u7528 mock\uFF09\uFF1B\u4FEE\u6539\u8868\u5355\u5E76\u63D0\u4EA4\u65B0\u6570\u636E\u7ED9\u670D\u52A1\u7AEF"),n.a.createElement("h3",{id:"\u4F8B-1-\u8868\u5355\u4E0E\u670D\u52A1\u7AEF\u7684\u57FA\u672C\u4EA4\u4E92"},n.a.createElement(O.AnchorLink,{to:"#\u4F8B-1-\u8868\u5355\u4E0E\u670D\u52A1\u7AEF\u7684\u57FA\u672C\u4EA4\u4E92","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u4F8B 1: \u8868\u5355\u4E0E\u670D\u52A1\u7AEF\u7684\u57FA\u672C\u4EA4\u4E92"),n.a.createElement("p",null,n.a.createElement("strong",null,"\u5F02\u6B65\u52A0\u8F7D\u8868\u5355 Schema, \u670D\u52A1\u7AEF\u6570\u636E\u586B\u5145\u8868\u5355\u521D\u59CB\u503C, \u63D0\u4EA4\u6821\u9A8C\u901A\u8FC7\u540E\u63D0\u4EA4\u6570\u636E\u7ED9\u670D\u52A1\u7AEF"))),n.a.createElement(oe.default,je.default["form-methods-demo"].previewerProps,n.a.createElement(Fe,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h3",{id:"\u4F8B-2\uFF1A\u670D\u52A1\u7AEF\u6821\u9A8C"},n.a.createElement(O.AnchorLink,{to:"#\u4F8B-2\uFF1A\u670D\u52A1\u7AEF\u6821\u9A8C","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u4F8B 2\uFF1A\u670D\u52A1\u7AEF\u6821\u9A8C"),n.a.createElement("p",null,n.a.createElement("strong",null,"\u670D\u52A1\u7AEF\u6821\u9A8C\uFF0C\u901A\u8FC7 ",n.a.createElement("code",null,"beforeFinish")," \u4ECE\u5916\u90E8\u56DE\u586B error \u4FE1\u606F\u5230\u8868\u5355\uFF0C\u6CE8\u610F ",n.a.createElement("code",null,"beforeFinish")," \u9700\u8FD4\u56DE\u8981\u56DE\u586B\u7684 error"))),n.a.createElement(oe.default,je.default["form-methods-demo-1"].previewerProps,n.a.createElement(ve,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h3",{id:"\u4F8B-3\uFF1Abind"},n.a.createElement(O.AnchorLink,{to:"#\u4F8B-3\uFF1Abind","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u4F8B 3\uFF1Abind"),n.a.createElement("p",null,n.a.createElement("strong",null,"\u63A5\u53E3\u6570\u636E\u4E0E\u5C55\u793A\u7ECF\u5E38\u4F1A\u4E0D\u7B26\uFF0C\u4F8B\u5982 form \u7684\u4EA4\u4E92\u662F\u65E5\u671F\u8303\u56F4\u7EC4\u4EF6\uFF0C\u670D\u52A1\u7AEF\u4F20\u7684\u503C\u662F startDate\uFF0CendDate \u4E24\u4E2A\u5B57\u6BB5\u3002\u6B64\u65F6\u4F7F\u7528 bind \u5B57\u6BB5"))),n.a.createElement(oe.default,je.default["form-methods-demo-2"].previewerProps,n.a.createElement(Mn,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h3",{id:"\u4F8B-4\uFF1A\u670D\u52A1\u7AEF\u52A0\u8F7D\u9009\u62E9\u6846\u7684\u9009\u9879"},n.a.createElement(O.AnchorLink,{to:"#\u4F8B-4\uFF1A\u670D\u52A1\u7AEF\u52A0\u8F7D\u9009\u62E9\u6846\u7684\u9009\u9879","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u4F8B 4\uFF1A\u670D\u52A1\u7AEF\u52A0\u8F7D\u9009\u62E9\u6846\u7684\u9009\u9879"),n.a.createElement("p",null,n.a.createElement("strong",null,"\u670D\u52A1\u7AEF\u83B7\u53D6\u6570\u636E\u540E\u5C55\u793A\u4E0B\u62C9\u9009\u9879\u7684\u9009\u9879\u503C\uFF0C\u6211\u4EEC\u63D0\u4F9B\u4E86 ",n.a.createElement("code",null,"form.setShemaByPath")," \u65B9\u6CD5"))),n.a.createElement(oe.default,je.default["form-methods-demo-3"].previewerProps,n.a.createElement(Ie,null)))))},p8sG:function(Kn,yn,e){"use strict";Kn.exports=e("80pN")}}]);
