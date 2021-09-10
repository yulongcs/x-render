(window.webpackJsonp=window.webpackJsonp||[]).push([[45,13],{"0zqC":function(Fn,un,e){"use strict";e.r(un);var V=e("tJVT"),t=e("q1tI"),b=e.n(t),W=e("wx14"),ue=e("rePB"),J=e("ODXe"),Te=e("U8pU"),Fe=e("Ff2n"),oe=e("VTBJ"),xn=e("TSYQ"),Re=e.n(xn),Rn=e("Zm9Q"),jn=e("5Z9U"),pn=e("6cGi"),an=e("KQm4"),Ve=e("wgJM"),Nn=e("t23M");function Dn(a){var u=Object(t.useRef)(),y=Object(t.useRef)(!1);function F(){for(var R=arguments.length,S=new Array(R),D=0;D<R;D++)S[D]=arguments[D];y.current||(Ve.a.cancel(u.current),u.current=Object(Ve.a)(function(){a.apply(void 0,S)}))}return Object(t.useEffect)(function(){return function(){y.current=!0,Ve.a.cancel(u.current)}},[]),F}function hn(a){var u=Object(t.useRef)([]),y=Object(t.useState)({}),F=Object(J.a)(y,2),R=F[1],S=Object(t.useRef)(typeof a=="function"?a():a),D=Dn(function(){var K=S.current;u.current.forEach(function(x){K=x(K)}),u.current=[],S.current=K,R({})});function N(K){u.current.push(K),D()}return[S.current,N]}var Ie=e("4IlW");function qn(a,u){var y,F=a.prefixCls,R=a.id,S=a.active,D=a.rtl,N=a.tab,K=N.key,x=N.tab,$=N.disabled,G=N.closeIcon,U=a.tabBarGutter,re=a.tabPosition,Y=a.closable,X=a.renderWrapper,se=a.removeAriaLabel,z=a.editable,q=a.onClick,ne=a.onRemove,Q=a.onFocus,ae="".concat(F,"-tab");t.useEffect(function(){return ne},[]);var k={};re==="top"||re==="bottom"?k[D?"marginLeft":"marginRight"]=U:k.marginBottom=U;var he=z&&Y!==!1&&!$;function _(te){$||q(te)}function le(te){te.preventDefault(),te.stopPropagation(),z.onEdit("remove",{key:K,event:te})}var de=t.createElement("div",{key:K,ref:u,className:Re()(ae,(y={},Object(ue.a)(y,"".concat(ae,"-with-remove"),he),Object(ue.a)(y,"".concat(ae,"-active"),S),Object(ue.a)(y,"".concat(ae,"-disabled"),$),y)),style:k,onClick:_},t.createElement("div",{role:"tab","aria-selected":S,id:R&&"".concat(R,"-tab-").concat(K),className:"".concat(ae,"-btn"),"aria-controls":R&&"".concat(R,"-panel-").concat(K),"aria-disabled":$,tabIndex:$?null:0,onClick:function(H){H.stopPropagation(),_(H)},onKeyDown:function(H){[Ie.a.SPACE,Ie.a.ENTER].includes(H.which)&&(H.preventDefault(),_(H))},onFocus:Q},x),he&&t.createElement("button",{type:"button","aria-label":se||"remove",tabIndex:0,className:"".concat(ae,"-remove"),onClick:function(H){H.stopPropagation(),le(H)}},G||z.removeIcon||"\xD7"));return X&&(de=X(de)),de}var wn=t.forwardRef(qn),_n={width:0,height:0,left:0,top:0};function ot(a,u,y){return Object(t.useMemo)(function(){for(var F,R=new Map,S=u.get((F=a[0])===null||F===void 0?void 0:F.key)||_n,D=S.left+S.width,N=0;N<a.length;N+=1){var K=a[N].key,x=u.get(K);if(!x){var $;x=u.get(($=a[N-1])===null||$===void 0?void 0:$.key)||_n}var G=R.get(K)||Object(oe.a)({},x);G.right=D-G.left-G.width,R.set(K,G)}return R},[a.map(function(F){return F.key}).join("_"),u,y])}var et={width:0,height:0,left:0,top:0,right:0};function lt(a,u,y,F,R){var S=R.tabs,D=R.tabPosition,N=R.rtl,K,x,$;["top","bottom"].includes(D)?(K="width",x=N?"right":"left",$=Math.abs(u.left)):(K="height",x="top",$=-u.top);var G=u[K],U=y[K],re=F[K],Y=G;return U+re>G&&(Y=G-re),Object(t.useMemo)(function(){if(!S.length)return[0,0];for(var X=S.length,se=X,z=0;z<X;z+=1){var q=a.get(S[z].key)||et;if(q[x]+q[K]>$+Y){se=z-1;break}}for(var ne=0,Q=X-1;Q>=0;Q-=1){var ae=a.get(S[Q].key)||et;if(ae[x]<$){ne=Q+1;break}}return[ne,se]},[a,$,Y,D,S.map(function(X){return X.key}).join("_"),N])}var Bn=e("Gytx"),nt=e.n(Bn),$n=e("Kwbf");function ut(a,u){var y=a.prefixCls,F=a.invalidate,R=a.item,S=a.renderItem,D=a.responsive,N=a.registerSize,K=a.itemKey,x=a.className,$=a.style,G=a.children,U=a.display,re=a.order,Y=a.component,X=Y===void 0?"div":Y,se=Object(Fe.a)(a,["prefixCls","invalidate","item","renderItem","responsive","registerSize","itemKey","className","style","children","display","order","component"]),z=D&&!U;function q(he){N(K,he)}t.useEffect(function(){return function(){q(null)}},[]);var ne=S&&R!==void 0?S(R):G,Q;F||(Q={opacity:z?0:1,height:z?0:void 0,overflowY:z?"hidden":void 0,order:D?re:void 0,pointerEvents:z?"none":void 0});var ae={};z&&(ae["aria-hidden"]=!0);var k=t.createElement(X,Object(W.a)({className:Re()(!F&&y,x),style:Object(oe.a)(Object(oe.a)({},Q),$)},ae,se,{ref:u}),ne);return D&&(k=t.createElement(Nn.default,{onResize:function(_){var le=_.offsetWidth;q(le)}},k)),k}var Mn=t.forwardRef(ut);Mn.displayName="Item";var Pn=Mn;function Vn(){var a=Object(t.useState)({}),u=Object(J.a)(a,2),y=u[1],F=Object(t.useRef)([]),R=Object(t.useRef)(!1),S=0,D=0;Object(t.useEffect)(function(){return function(){R.current=!0}},[]);function N(K){var x=S;S+=1,F.current.length<x+1&&(F.current[x]=K);var $=F.current[x];function G(U){F.current[x]=typeof U=="function"?U(F.current[x]):U,Ve.a.cancel(D),D=Object(Ve.a)(function(){R.current||y({})})}return[$,G]}return N}var tt=function(u,y){var F=t.useContext(P);if(!F){var R=u.component,S=R===void 0?"div":R,D=Object(Fe.a)(u,["component"]);return t.createElement(S,Object(W.a)({},D,{ref:y}))}var N=F.className,K=Object(Fe.a)(F,["className"]),x=u.className,$=Object(Fe.a)(u,["className"]);return t.createElement(P.Provider,{value:null},t.createElement(Pn,Object(W.a)({ref:y,className:Re()(N,x)},K,$)))},Jn=t.forwardRef(tt);Jn.displayName="RawItem";var I=Jn,P=t.createContext(null),T="responsive",p="invalidate";function i(a){return"+ ".concat(a.length," ...")}function g(a,u){var y=a.prefixCls,F=y===void 0?"rc-overflow":y,R=a.data,S=R===void 0?[]:R,D=a.renderItem,N=a.renderRawItem,K=a.itemKey,x=a.itemWidth,$=x===void 0?10:x,G=a.ssr,U=a.style,re=a.className,Y=a.maxCount,X=a.renderRest,se=a.renderRawRest,z=a.suffix,q=a.component,ne=q===void 0?"div":q,Q=a.itemComponent,ae=a.onVisibleChange,k=Object(Fe.a)(a,["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"]),he=Vn(),_=G==="full",le=he(null),de=Object(J.a)(le,2),te=de[0],H=de[1],ie=te||0,fe=he(new Map),me=Object(J.a)(fe,2),be=me[0],Ne=me[1],ve=he(0),ye=Object(J.a)(ve,2),Pe=ye[0],De=ye[1],Se=he(0),Oe=Object(J.a)(Se,2),Be=Oe[0],Ge=Oe[1],Me=he(0),Ke=Object(J.a)(Me,2),$e=Ke[0],we=Ke[1],gn=Object(t.useState)(null),Qe=Object(J.a)(gn,2),Je=Qe[0],_e=Qe[1],dn=Object(t.useState)(null),cn=Object(J.a)(dn,2),je=cn[0],Le=cn[1],He=t.useMemo(function(){return je===null&&_?Number.MAX_SAFE_INTEGER:je||0},[je,te]),ze=Object(t.useState)(!1),Tn=Object(J.a)(ze,2),zn=Tn[0],In=Tn[1],Ze="".concat(F,"-item"),yn=Math.max(Pe,Be),en=S.length&&Y===T,bn=Y===p,Ye=en||typeof Y=="number"&&S.length>Y,ke=Object(t.useMemo)(function(){var ce=S;return en?te===null&&_?ce=S:ce=S.slice(0,Math.min(S.length,ie/$)):typeof Y=="number"&&(ce=S.slice(0,Y)),ce},[S,$,te,Y,en]),Cn=Object(t.useMemo)(function(){return en?S.slice(He+1):S.slice(ke.length)},[S,ke,en,He]),tn=Object(t.useCallback)(function(ce,Ee){var Ae;return typeof K=="function"?K(ce):(Ae=K&&(ce==null?void 0:ce[K]))!==null&&Ae!==void 0?Ae:Ee},[K]),Ue=Object(t.useCallback)(D||function(ce){return ce},[D]);function xe(ce,Ee){Le(ce),Ee||(In(ce<S.length-1),ae==null||ae(ce))}function Un(ce,Ee){H(Ee.clientWidth)}function Gn(ce,Ee){Ne(function(Ae){var Xe=new Map(Ae);return Ee===null?Xe.delete(ce):Xe.set(ce,Ee),Xe})}function at(ce,Ee){Ge(Ee),De(Be)}function mn(ce,Ee){we(Ee)}function ln(ce){return be.get(tn(ke[ce],ce))}t.useLayoutEffect(function(){if(ie&&yn&&ke){var ce=$e,Ee=ke.length,Ae=Ee-1;if(!Ee){xe(0),_e(null);return}for(var Xe=0;Xe<Ee;Xe+=1){var Qn=ln(Xe);if(Qn===void 0){xe(Xe-1,!0);break}if(ce+=Qn,Xe===Ae-1&&ce+ln(Ae)<=ie){xe(Ae),_e(null);break}else if(ce+yn>ie){xe(Xe-1),_e(ce-Qn-$e+Be);break}else if(Xe===Ae){xe(Ae),_e(ce-$e);break}}z&&ln(0)+$e>ie&&_e(null)}},[ie,be,Be,$e,tn,ke]);var Hn=zn&&!!Cn.length,fn={};Je!==null&&en&&(fn={position:"absolute",left:Je,top:0});var rn={prefixCls:Ze,responsive:en,component:Q,invalidate:bn},Yn=N?function(ce,Ee){var Ae=tn(ce,Ee);return t.createElement(P.Provider,{key:Ae,value:Object(oe.a)(Object(oe.a)({},rn),{},{order:Ee,item:ce,itemKey:Ae,registerSize:Gn,display:Ee<=He})},N(ce,Ee))}:function(ce,Ee){var Ae=tn(ce,Ee);return t.createElement(Pn,Object(W.a)({},rn,{order:Ee,key:Ae,item:ce,renderItem:Ue,itemKey:Ae,registerSize:Gn,display:Ee<=He}))},En,Xn={order:Hn?He:Number.MAX_SAFE_INTEGER,className:"".concat(Ze,"-rest"),registerSize:at,display:Hn};if(se)se&&(En=t.createElement(P.Provider,{value:Object(oe.a)(Object(oe.a)({},rn),Xn)},se(Cn)));else{var nn=X||i;En=t.createElement(Pn,Object(W.a)({},rn,Xn),typeof nn=="function"?nn(Cn):nn)}var On=t.createElement(ne,Object(W.a)({className:Re()(!bn&&F,re),style:U,ref:u},k),ke.map(Yn),Ye?En:null,z&&t.createElement(Pn,Object(W.a)({},rn,{order:He,className:"".concat(Ze,"-suffix"),registerSize:mn,display:!0,style:fn}),z));return en&&(On=t.createElement(Nn.default,{onResize:Un},On)),On}var C=t.forwardRef(g);C.displayName="Overflow",C.Item=I,C.RESPONSIVE=T,C.INVALIDATE=p;var O=C,s=O,h=e("1OyB"),o=e("vuIU"),w=e("Ji7U"),M=e("LK+K"),j=e("bT9E"),c=e("YrtM"),E=t.createContext(null);function m(a,u){var y=Object(oe.a)({},a);return Object.keys(u).forEach(function(F){var R=u[F];R!==void 0&&(y[F]=R)}),y}function n(a){var u=a.children,y=a.locked,F=Object(Fe.a)(a,["children","locked"]),R=t.useContext(E),S=Object(c.a)(function(){return m(R,F)},[R,F],function(D,N){return!y&&(D[0]!==N[0]||!nt()(D[1],N[1]))});return t.createElement(E.Provider,{value:S},u)}function v(a,u,y,F){var R=t.useContext(E),S=R.activeKey,D=R.onActive,N=R.onInactive,K={active:S===a};return u||(K.onMouseEnter=function(x){y==null||y({key:a,domEvent:x}),D(a)},K.onMouseLeave=function(x){F==null||F({key:a,domEvent:x}),N(a)}),K}function d(a){var u=a.item,y=Object(Fe.a)(a,["item"]);return Object.defineProperty(y,"item",{get:function(){return Object($n.a)(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),u}}),y}function r(a){var u=a.icon,y=a.props,F=a.children,R;return typeof u=="function"?R=t.createElement(u,Object(oe.a)({},y)):R=u,R||F||null}function l(a){var u=t.useContext(E),y=u.mode,F=u.rtl,R=u.inlineIndent;if(y!=="inline")return null;var S=a;return F?{paddingRight:S*R}:{paddingLeft:S*R}}var f=[],B=t.createContext(null);function A(){return t.useContext(B)}var L=t.createContext(f);function pe(a){var u=t.useContext(L);return t.useMemo(function(){return a!==void 0?[].concat(Object(an.a)(u),[a]):u},[u,a])}var Ce=t.createContext(null),sn=t.createContext(null);function vn(a,u){return a===void 0?null:"".concat(a,"-").concat(u)}function Kn(a){var u=t.useContext(sn);return vn(u,a)}var An=function(a){Object(w.a)(y,a);var u=Object(M.a)(y);function y(){return Object(h.a)(this,y),u.apply(this,arguments)}return Object(o.a)(y,[{key:"render",value:function(){var R=this.props,S=R.title,D=R.attribute,N=R.elementRef,K=Object(Fe.a)(R,["title","attribute","elementRef"]),x=Object(j.a)(K,["eventKey"]);return Object($n.a)(!D,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),t.createElement(s.Item,Object(W.a)({},D,{title:typeof S=="string"?S:void 0},x,{ref:N}))}}]),y}(t.Component),dt=function(u){var y,F=u.style,R=u.className,S=u.eventKey,D=u.disabled,N=u.itemIcon,K=u.children,x=u.role,$=u.onMouseEnter,G=u.onMouseLeave,U=u.onClick,re=u.onKeyDown,Y=u.onFocus,X=Object(Fe.a)(u,["style","className","eventKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"]),se=Kn(S),z=t.useContext(E),q=z.prefixCls,ne=z.onItemClick,Q=z.disabled,ae=z.overflowDisabled,k=z.itemIcon,he=z.selectedKeys,_=z.onActive,le="".concat(q,"-item"),de=t.useRef(),te=t.useRef(),H=Q||D,ie=pe(S),fe=function(Me){return{key:S,keyPath:ie,item:de.current,domEvent:Me}},me=N||k,be=v(S,H,$,G),Ne=be.active,ve=Object(Fe.a)(be,["active"]),ye=he.includes(S),Pe=l(ie.length),De=function(Me){if(!H){var Ke=fe(Me);U==null||U(d(Ke)),ne(Ke)}},Se=function(Me){if(re==null||re(Me),Me.which===Ie.a.ENTER){var Ke=fe(Me);U==null||U(d(Ke)),ne(Ke)}},Oe=function(Me){_(S),Y==null||Y(Me)},Be={};return u.role==="option"&&(Be["aria-selected"]=ye),t.createElement(An,Object(W.a)({ref:de,elementRef:te,role:x===null?"none":x||"menuitem",tabIndex:D?null:-1,"data-menu-id":ae&&se?null:se},X,ve,Be,{component:"li","aria-disabled":D,style:Object(oe.a)(Object(oe.a)({},Pe),F),className:Re()(le,(y={},Object(ue.a)(y,"".concat(le,"-active"),Ne),Object(ue.a)(y,"".concat(le,"-selected"),ye),Object(ue.a)(y,"".concat(le,"-disabled"),H),y),R),onClick:De,onKeyDown:Se,onFocus:Oe}),K,t.createElement(r,{props:Object(oe.a)(Object(oe.a)({},u),{},{isSelected:ye}),icon:me}))};function Er(a){var u=a.eventKey,y=A(),F=pe(u);return t.useEffect(function(){if(y)return y.registerPath(u,F),function(){y.unregisterPath(u,F)}},[F]),y?null:t.createElement(dt,a)}var It=Er;function Nt(a,u){return Object(Rn.a)(a).map(function(y,F){if(t.isValidElement(y)){var R=y.key;return R==null&&(R="tmp_key-".concat([].concat(Object(an.a)(u),[F]).join("-"))),t.cloneElement(y,{key:R,eventKey:R})}return y})}function rt(a){var u=t.useRef(a);u.current=a;var y=t.useCallback(function(){for(var F,R=arguments.length,S=new Array(R),D=0;D<R;D++)S[D]=arguments[D];return(F=u.current)===null||F===void 0?void 0:F.call.apply(F,[u].concat(S))},[]);return a?y:void 0}var Or=function(u,y){var F=u.className,R=u.children,S=Object(Fe.a)(u,["className","children"]),D=t.useContext(E),N=D.prefixCls,K=D.mode;return t.createElement("ul",Object(W.a)({className:Re()(N,"".concat(N,"-sub"),"".concat(N,"-").concat(K==="inline"?"inline":"vertical"),F)},S,{"data-menu-list":!0,ref:y}),R)},Yt=t.forwardRef(Or);Yt.displayName="SubMenuList";var Xt=Yt,Sr=e("uciX"),Wn={adjustX:1,adjustY:1},Qt={topLeft:{points:["bl","tl"],overflow:Wn,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Wn,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:Wn,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:Wn,offset:[4,0]}},Fr={topLeft:{points:["bl","tl"],overflow:Wn,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Wn,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:Wn,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:Wn,offset:[4,0]}},fa=Qt;function Zt(a,u,y){if(u)return u;if(y)return y[a]||y.other}var Rr={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function jr(a){var u=a.prefixCls,y=a.visible,F=a.children,R=a.popup,S=a.popupClassName,D=a.popupOffset,N=a.disabled,K=a.mode,x=a.onVisibleChange,$=t.useContext(E),G=$.getPopupContainer,U=$.rtl,re=$.subMenuOpenDelay,Y=$.subMenuCloseDelay,X=$.builtinPlacements,se=$.triggerSubMenuAction,z=$.forceSubMenuRender,q=$.motion,ne=$.defaultMotions,Q=t.useState(!1),ae=Object(J.a)(Q,2),k=ae[0],he=ae[1],_=U?Object(oe.a)(Object(oe.a)({},Fr),X):Object(oe.a)(Object(oe.a)({},Qt),X),le=Rr[K],de=Zt(K,q,ne),te=Object(oe.a)(Object(oe.a)({},de),{},{leavedClassName:"".concat(u,"-hidden"),removeOnLeave:!1,motionAppear:!0}),H=t.useRef();return t.useEffect(function(){return H.current=Object(Ve.a)(function(){he(y)}),function(){Ve.a.cancel(H.current)}},[y]),t.createElement(Sr.a,{prefixCls:u,popupClassName:Re()("".concat(u,"-popup"),Object(ue.a)({},"".concat(u,"-rtl"),U),S),stretch:K==="horizontal"?"minWidth":null,getPopupContainer:G,builtinPlacements:_,popupPlacement:le,popupVisible:k,popup:R,popupAlign:D&&{offset:D},action:N?[]:[se],mouseEnterDelay:re,mouseLeaveDelay:Y,onPopupVisibleChange:x,forceRender:z,popupMotion:te},F)}var Dr=e("8XRh");function Pr(a){var u=a.id,y=a.open,F=a.keyPath,R=a.children,S="inline",D=t.useContext(E),N=D.prefixCls,K=D.forceSubMenuRender,x=D.motion,$=D.defaultMotions,G=D.mode,U=t.useRef(!1);U.current=G===S;var re=t.useState(!U.current),Y=Object(J.a)(re,2),X=Y[0],se=Y[1],z=U.current?y:!1;t.useEffect(function(){U.current&&se(!1)},[G]);var q=Object(oe.a)({},Zt(S,x,$));F.length>1&&(q.motionAppear=!1);var ne=q.onVisibleChanged;return q.onVisibleChanged=function(Q){return!U.current&&!Q&&se(!0),ne==null?void 0:ne(Q)},X?null:t.createElement(n,{mode:S,locked:!U.current},t.createElement(Dr.default,Object(W.a)({visible:z},q,{forceRender:K,removeOnLeave:!1,leavedClassName:"".concat(N,"-hidden")}),function(Q){var ae=Q.className,k=Q.style;return t.createElement(Xt,{id:u,className:ae,style:k},R)}))}var Ar=function(u){var y,F=u.style,R=u.className,S=u.title,D=u.eventKey,N=u.disabled,K=u.internalPopupClose,x=u.children,$=u.itemIcon,G=u.expandIcon,U=u.popupClassName,re=u.popupOffset,Y=u.onClick,X=u.onMouseEnter,se=u.onMouseLeave,z=u.onTitleClick,q=u.onTitleMouseEnter,ne=u.onTitleMouseLeave,Q=Object(Fe.a)(u,["style","className","title","eventKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"]),ae=Kn(D),k=t.useContext(E),he=k.prefixCls,_=k.mode,le=k.openKeys,de=k.disabled,te=k.overflowDisabled,H=k.activeKey,ie=k.selectedKeys,fe=k.itemIcon,me=k.expandIcon,be=k.onItemClick,Ne=k.onOpenChange,ve=k.onActive,ye=t.useContext(Ce),Pe=ye.isSubPathKey,De=pe(),Se="".concat(he,"-submenu"),Oe=de||N,Be=t.useRef(),Ge=t.useRef(),Me=$||fe,Ke=G||me,$e=le.includes(D),we=!te&&$e,gn=Pe(ie,D),Qe=v(D,Oe,q,ne),Je=Qe.active,_e=Object(Fe.a)(Qe,["active"]),dn=t.useState(!1),cn=Object(J.a)(dn,2),je=cn[0],Le=cn[1],He=function(xe){Oe||Le(xe)},ze=function(xe){He(!0),X==null||X({key:D,domEvent:xe})},Tn=function(xe){He(!1),se==null||se({key:D,domEvent:xe})},zn=t.useMemo(function(){return Je||(_!=="inline"?je||Pe([H],D):!1)},[_,Je,H,je,D,Pe]),In=l(De.length),Ze=function(xe){Oe||(z==null||z({key:D,domEvent:xe}),_==="inline"&&Ne(D,!$e))},yn=rt(function(Ue){Y==null||Y(d(Ue)),be(Ue)}),en=function(xe){_!=="inline"&&Ne(D,xe)},bn=function(){ve(D)},Ye=ae&&"".concat(ae,"-popup"),ke=t.createElement("div",Object(W.a)({role:"menuitem",style:In,className:"".concat(Se,"-title"),tabIndex:Oe?null:-1,ref:Be,title:typeof S=="string"?S:null,"data-menu-id":te&&ae?null:ae,"aria-expanded":we,"aria-haspopup":!0,"aria-controls":Ye,"aria-disabled":Oe,onClick:Ze,onFocus:bn},_e),S,t.createElement(r,{icon:_!=="horizontal"?Ke:null,props:Object(oe.a)(Object(oe.a)({},u),{},{isOpen:we,isSubMenu:!0})},t.createElement("i",{className:"".concat(Se,"-arrow")}))),Cn=t.useRef(_);if(_!=="inline"&&(Cn.current=De.length>1?"vertical":_),!te){var tn=Cn.current;ke=t.createElement(jr,{mode:tn,prefixCls:Se,visible:!K&&we&&_!=="inline",popupClassName:U,popupOffset:re,popup:t.createElement(n,{mode:tn},t.createElement(Xt,{id:Ye,ref:Ge},x)),disabled:Oe,onVisibleChange:en},ke)}return t.createElement(n,{onItemClick:yn,mode:_==="horizontal"?"vertical":_,itemIcon:Me,expandIcon:Ke},t.createElement(s.Item,Object(W.a)({role:"none"},Q,{component:"li",style:F,className:Re()(Se,"".concat(Se,"-").concat(_),R,(y={},Object(ue.a)(y,"".concat(Se,"-open"),we),Object(ue.a)(y,"".concat(Se,"-active"),zn),Object(ue.a)(y,"".concat(Se,"-selected"),gn),Object(ue.a)(y,"".concat(Se,"-disabled"),Oe),y)),onMouseEnter:ze,onMouseLeave:Tn}),ke,!te&&t.createElement(Pr,{id:Ye,open:we,keyPath:De},x)))};function kt(a){var u=a.eventKey,y=a.children,F=pe(u),R=Nt(y,F),S=A();t.useEffect(function(){if(S)return S.registerPath(u,F),function(){S.unregisterPath(u,F)}},[F]);var D;return S?D=R:D=t.createElement(Ar,a,R),t.createElement(L.Provider,{value:F},D)}var Tr=e("x/xZ");function qt(a){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Object(Tr.a)(a)){var y=a.nodeName.toLowerCase(),F=["input","select","textarea","button"].includes(y)||a.isContentEditable||y==="a"&&!!a.getAttribute("href"),R=a.getAttribute("tabindex"),S=Number(R),D=null;return R&&!Number.isNaN(S)?D=S:F&&D===null&&(D=0),F&&a.disabled&&(D=null),D!==null&&(D>=0||u&&D<0)}return!1}function _t(a){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,y=Object(an.a)(a.querySelectorAll("*")).filter(function(F){return qt(F,u)});return qt(a,u)&&y.unshift(a),y}var gt=null;function pa(){gt=document.activeElement}function ha(){gt=null}function va(){if(gt)try{gt.focus()}catch(a){}}function ga(a,u){if(u.keyCode===9){var y=_t(a),F=y[u.shiftKey?0:y.length-1],R=F===document.activeElement||a===document.activeElement;if(R){var S=y[u.shiftKey?y.length-1:0];S.focus(),u.preventDefault()}}}var wt=Ie.a.LEFT,Bt=Ie.a.RIGHT,Mt=Ie.a.UP,yt=Ie.a.DOWN,bt=Ie.a.ENTER,er=Ie.a.ESC,nr=[Mt,yt,wt,Bt];function Ir(a,u,y,F){var R,S,D,N,K="prev",x="next",$="children",G="parent";if(a==="inline"&&F===bt)return{inlineTrigger:!0};var U=(R={},Object(ue.a)(R,Mt,K),Object(ue.a)(R,yt,x),R),re=(S={},Object(ue.a)(S,wt,y?x:K),Object(ue.a)(S,Bt,y?K:x),Object(ue.a)(S,yt,$),Object(ue.a)(S,bt,$),S),Y=(D={},Object(ue.a)(D,Mt,K),Object(ue.a)(D,yt,x),Object(ue.a)(D,bt,$),Object(ue.a)(D,er,G),Object(ue.a)(D,wt,y?$:G),Object(ue.a)(D,Bt,y?G:$),D),X={inline:U,horizontal:re,vertical:Y,inlineSub:U,horizontalSub:Y,verticalSub:Y},se=(N=X["".concat(a).concat(u?"":"Sub")])===null||N===void 0?void 0:N[F];switch(se){case K:return{offset:-1,sibling:!0};case x:return{offset:1,sibling:!0};case G:return{offset:-1,sibling:!1};case $:return{offset:1,sibling:!1};default:return null}}function Nr(a){for(var u=a;u;){if(u.getAttribute("data-menu-list"))return u;u=u.parentElement}return null}function wr(a,u){for(var y=a||document.activeElement;y;){if(u.has(y))return y;y=y.parentElement}return null}function Br(a,u){var y=_t(a,!0);return y.filter(function(F){return u.has(F)})}function tr(a,u,y){var F=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!a)return null;var R=Br(a,u),S=R.length,D=R.findIndex(function(N){return y===N});return F<0?D===-1?D=S-1:D-=1:F>0&&(D+=1),D=(D+S)%S,R[D]}function Mr(a,u,y,F,R,S,D,N,K,x){var $=t.useRef(),G=t.useRef();G.current=u;var U=function(){Ve.a.cancel($.current)};return t.useEffect(function(){return function(){U()}},[]),function(re){var Y=re.which;if([].concat(nr,[bt,er]).includes(Y)){var X,se,z,q=function(){X=new Set,se=new Map,z=new Map;var fe=S();return fe.forEach(function(me){var be=document.querySelector("[data-menu-id='".concat(vn(F,me),"']"));be&&(X.add(be),z.set(be,me),se.set(me,be))}),X};q();var ne=se.get(u),Q=wr(ne,X),ae=z.get(Q),k=Ir(a,D(ae,!0).length===1,y,Y);if(!k)return;nr.includes(Y)&&re.preventDefault();var he=function(fe){if(fe){var me=fe,be=fe.querySelector("a");(be==null?void 0:be.getAttribute("href"))&&(me=be);var Ne=z.get(fe);N(Ne),U(),$.current=Object(Ve.a)(function(){G.current===Ne&&me.focus()})}};if(k.sibling||!Q){var _;!Q||a==="inline"?_=R.current:_=Nr(Q);var le=tr(_,X,Q,k.offset);he(le)}else if(k.inlineTrigger)K(ae);else if(k.offset>0)K(ae,!0),U(),$.current=Object(Ve.a)(function(){q();var ie=Q.getAttribute("aria-controls"),fe=document.getElementById(ie),me=tr(fe,X);he(me)},5);else if(k.offset<0){var de=D(ae,!0),te=de[de.length-2],H=se.get(te);K(te,!1),he(H)}}x==null||x(re)}}var Kr=Math.random().toFixed(5).toString().slice(2),rr=0;function Wr(a){var u=Object(pn.a)(a,{value:a}),y=Object(J.a)(u,2),F=y[0],R=y[1];return t.useEffect(function(){rr+=1;var S="".concat(Kr,"-").concat(rr);R("rc-menu-uuid-".concat(S))},[]),F}var ya=e("p8sG");function Lr(a){Promise.resolve().then(a)}var Kt="__RC_UTIL_PATH_SPLIT__",ar=function(u){return u.join(Kt)},xr=function(u){return u.split(Kt)},Wt="rc-menu-more";function $r(){var a=t.useState({}),u=Object(J.a)(a,2),y=u[1],F=Object(t.useRef)(new Map),R=Object(t.useRef)(new Map),S=t.useState([]),D=Object(J.a)(S,2),N=D[0],K=D[1],x=Object(t.useRef)(0),$=Object(t.useCallback)(function(z,q){var ne=ar(q);R.current.set(ne,z),F.current.set(z,ne),x.current+=1;var Q=x.current;Lr(function(){Q===x.current&&y({})})},[]),G=Object(t.useCallback)(function(z,q){var ne=ar(q);R.current.delete(ne),F.current.delete(z)},[]),U=Object(t.useCallback)(function(z){K(z)},[]),re=Object(t.useCallback)(function(z,q){var ne=F.current.get(z)||"",Q=xr(ne);return q&&N.includes(Q[0])&&Q.unshift(Wt),Q},[N]),Y=Object(t.useCallback)(function(z,q){return z.some(function(ne){var Q=re(ne,!0);return Q.includes(q)})},[re]),X=function(){var q=Object(an.a)(F.current.keys());return N.length&&q.push(Wt),q},se=Object(t.useCallback)(function(z){var q="".concat(F.current.get(z)).concat(Kt),ne=new Set;return Object(an.a)(R.current.keys()).forEach(function(Q){Q.startsWith(q)&&ne.add(R.current.get(Q))}),ne},[]);return{registerPath:$,unregisterPath:G,refreshOverflowKeys:U,isSubPathKey:Y,getKeyPath:re,getKeys:X,getSubPathKeys:se}}var Ct=[],Vr=function(u){var y,F,R=u.prefixCls,S=R===void 0?"rc-menu":R,D=u.style,N=u.className,K=u.tabIndex,x=K===void 0?0:K,$=u.children,G=u.direction,U=u.id,re=u.mode,Y=re===void 0?"vertical":re,X=u.inlineCollapsed,se=u.disabled,z=u.disabledOverflow,q=u.subMenuOpenDelay,ne=q===void 0?.1:q,Q=u.subMenuCloseDelay,ae=Q===void 0?.1:Q,k=u.forceSubMenuRender,he=u.defaultOpenKeys,_=u.openKeys,le=u.activeKey,de=u.defaultActiveFirst,te=u.selectable,H=te===void 0?!0:te,ie=u.multiple,fe=ie===void 0?!1:ie,me=u.defaultSelectedKeys,be=u.selectedKeys,Ne=u.onSelect,ve=u.onDeselect,ye=u.inlineIndent,Pe=ye===void 0?24:ye,De=u.motion,Se=u.defaultMotions,Oe=u.triggerSubMenuAction,Be=Oe===void 0?"hover":Oe,Ge=u.builtinPlacements,Me=u.itemIcon,Ke=u.expandIcon,$e=u.overflowedIndicator,we=$e===void 0?"...":$e,gn=u.getPopupContainer,Qe=u.onClick,Je=u.onOpenChange,_e=u.onKeyDown,dn=u.openAnimation,cn=u.openTransitionName,je=Object(Fe.a)(u,["prefixCls","style","className","tabIndex","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName"]),Le=Nt($,Ct),He=t.useState(!1),ze=Object(J.a)(He,2),Tn=ze[0],zn=ze[1],In=t.useRef(),Ze=Wr(U),yn=G==="rtl",en=t.useMemo(function(){return Y==="inline"&&X?["vertical",X]:[Y,!1]},[Y,X]),bn=Object(J.a)(en,2),Ye=bn[0],ke=bn[1],Cn=t.useState(0),tn=Object(J.a)(Cn,2),Ue=tn[0],xe=tn[1],Un=Ue>=Le.length-1||Ye!=="horizontal"||z,Gn=Object(pn.a)(he,{value:_,postState:function(Z){return Z||Ct}}),at=Object(J.a)(Gn,2),mn=at[0],ln=at[1],Hn=t.useState(mn),fn=Object(J.a)(Hn,2),rn=fn[0],Yn=fn[1],En=Ye==="inline",Xn=t.useRef(!1);t.useEffect(function(){En&&Yn(mn)},[mn]),t.useEffect(function(){if(!Xn.current){Xn.current=!0;return}if(En)ln(rn);else{var ee=[];ln(ee),Je==null||Je(ee)}},[En]);var nn=$r(),On=nn.registerPath,ce=nn.unregisterPath,Ee=nn.refreshOverflowKeys,Ae=nn.isSubPathKey,Xe=nn.getKeyPath,Qn=nn.getKeys,Ot=nn.getSubPathKeys,Vt=t.useMemo(function(){return{registerPath:On,unregisterPath:ce}},[On,ce]),Jt=t.useMemo(function(){return{isSubPathKey:Ae}},[Ae]);t.useEffect(function(){Ee(Un?Ct:Le.slice(Ue+1).map(function(ee){return ee.key}))},[Ue,Un]);var zt=Object(pn.a)(le||de&&((y=Le[0])===null||y===void 0?void 0:y.key),{value:le}),st=Object(J.a)(zt,2),St=st[0],mt=st[1],Ft=rt(function(ee){mt(ee)}),Ut=rt(function(){mt(void 0)}),Rt=Object(pn.a)(me||[],{value:be,postState:function(Z){return Array.isArray(Z)?Z:Z==null?Ct:[Z]}}),jt=Object(J.a)(Rt,2),it=jt[0],Sn=jt[1],Dt=function(Z){if(!!H){var ge=Z.key,We=it.includes(ge),qe;We?qe=it.filter(function(kn){return kn!==ge}):fe?qe=[].concat(Object(an.a)(it),[ge]):qe=[ge],Sn(qe);var Ln=Object(oe.a)(Object(oe.a)({},Z),{},{selectedKeys:qe});We?ve==null||ve(Ln):Ne==null||Ne(Ln)}},Pt=rt(function(ee){Qe==null||Qe(d(ee)),Dt(ee)}),ft=rt(function(ee,Z){var ge=mn.filter(function(qe){return qe!==ee});if(Z)ge.push(ee);else if(Ye!=="inline"){var We=Ot(ee);ge=ge.filter(function(qe){return!We.has(qe)})}nt()(mn,ge)||(ln(ge),Je==null||Je(ge))}),Zn=rt(gn),pt=function(Z,ge){var We=ge!=null?ge:!mn.includes(Z);ft(Z,We)},ht=Mr(Ye,St,yn,Ze,In,Qn,Xe,mt,pt,_e);t.useEffect(function(){zn(!0)},[]);var At=Ye!=="horizontal"||z?Le:Le.map(function(ee,Z){return t.createElement(n,{key:ee.key,overflowDisabled:Z>Ue},ee)}),Tt=t.createElement(s,Object(W.a)({id:U,ref:In,prefixCls:"".concat(S,"-overflow"),component:"ul",itemComponent:It,className:Re()(S,"".concat(S,"-root"),"".concat(S,"-").concat(Ye),N,(F={},Object(ue.a)(F,"".concat(S,"-inline-collapsed"),ke),Object(ue.a)(F,"".concat(S,"-rtl"),yn),F)),dir:G,style:D,role:"menu",tabIndex:x,data:At,renderRawItem:function(Z){return Z},renderRawRest:function(Z){var ge=Z.length,We=ge?Le.slice(-ge):null;return t.createElement(kt,{eventKey:Wt,title:we,disabled:Un,internalPopupClose:ge===0},We)},maxCount:Ye!=="horizontal"||z?s.INVALIDATE:s.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(Z){xe(Z)},onKeyDown:ht},je));return t.createElement(sn.Provider,{value:Ze},t.createElement(n,{prefixCls:S,mode:Ye,openKeys:mn,rtl:yn,disabled:se,motion:Tn?De:null,defaultMotions:Tn?Se:null,activeKey:St,onActive:Ft,onInactive:Ut,selectedKeys:it,inlineIndent:Pe,subMenuOpenDelay:ne,subMenuCloseDelay:ae,forceSubMenuRender:k,builtinPlacements:Ge,triggerSubMenuAction:Be,getPopupContainer:Zn,itemIcon:Me,expandIcon:Ke,onItemClick:Pt,onOpenChange:ft},t.createElement(Ce.Provider,{value:Jt},Tt),t.createElement(B.Provider,{value:Vt},Le)))},Jr=Vr,zr=function(u){var y=u.className,F=u.title,R=u.eventKey,S=u.children,D=Object(Fe.a)(u,["className","title","eventKey","children"]),N=t.useContext(E),K=N.prefixCls,x="".concat(K,"-item-group");return t.createElement("li",Object(W.a)({},D,{onClick:function(G){return G.stopPropagation()},className:Re()(x,y)}),t.createElement("div",{className:"".concat(x,"-title"),title:typeof F=="string"?F:void 0},F),t.createElement("ul",{className:"".concat(x,"-list")},S))};function Ur(a){var u=a.children,y=Object(Fe.a)(a,["children"]),F=pe(y.eventKey),R=Nt(u,F),S=A();return S?R:t.createElement(zr,y,R)}function Gr(a){var u=a.className,y=a.style,F=t.useContext(E),R=F.prefixCls,S=A();return S?null:t.createElement("li",{className:Re()("".concat(R,"-item-divider"),u),style:y})}var ct=Jr;ct.Item=It,ct.SubMenu=kt,ct.ItemGroup=Ur,ct.Divider=Gr;var Hr=ct,Yr=e("eDIo");function Xr(a,u){var y=a.prefixCls,F=a.editable,R=a.locale,S=a.style;return!F||F.showAdd===!1?null:t.createElement("button",{ref:u,type:"button",className:"".concat(y,"-nav-add"),style:S,"aria-label":(R==null?void 0:R.addAriaLabel)||"Add tab",onClick:function(N){F.onEdit("add",{event:N})}},F.addIcon||"+")}var sr=t.forwardRef(Xr);function Qr(a,u){var y=a.prefixCls,F=a.id,R=a.tabs,S=a.locale,D=a.mobile,N=a.moreIcon,K=N===void 0?"More":N,x=a.moreTransitionName,$=a.style,G=a.className,U=a.editable,re=a.tabBarGutter,Y=a.rtl,X=a.onTabClick,se=Object(t.useState)(!1),z=Object(J.a)(se,2),q=z[0],ne=z[1],Q=Object(t.useState)(null),ae=Object(J.a)(Q,2),k=ae[0],he=ae[1],_="".concat(F,"-more-popup"),le="".concat(y,"-dropdown"),de=k!==null?"".concat(_,"-").concat(k):null,te=S==null?void 0:S.dropdownAriaLabel,H=t.createElement(Hr,{onClick:function(ye){var Pe=ye.key,De=ye.domEvent;X(Pe,De),ne(!1)},id:_,tabIndex:-1,role:"listbox","aria-activedescendant":de,selectedKeys:[k],"aria-label":te!==void 0?te:"expanded dropdown"},R.map(function(ve){return t.createElement(It,{key:ve.key,id:"".concat(_,"-").concat(ve.key),role:"option","aria-controls":F&&"".concat(F,"-panel-").concat(ve.key),disabled:ve.disabled},ve.tab)}));function ie(ve){for(var ye=R.filter(function(Be){return!Be.disabled}),Pe=ye.findIndex(function(Be){return Be.key===k})||0,De=ye.length,Se=0;Se<De;Se+=1){Pe=(Pe+ve+De)%De;var Oe=ye[Pe];if(!Oe.disabled){he(Oe.key);return}}}function fe(ve){var ye=ve.which;if(!q){[Ie.a.DOWN,Ie.a.SPACE,Ie.a.ENTER].includes(ye)&&(ne(!0),ve.preventDefault());return}switch(ye){case Ie.a.UP:ie(-1),ve.preventDefault();break;case Ie.a.DOWN:ie(1),ve.preventDefault();break;case Ie.a.ESC:ne(!1);break;case Ie.a.SPACE:case Ie.a.ENTER:k!==null&&X(k,ve);break}}Object(t.useEffect)(function(){var ve=document.getElementById(de);ve&&ve.scrollIntoView&&ve.scrollIntoView(!1)},[k]),Object(t.useEffect)(function(){q||he(null)},[q]);var me=Object(ue.a)({},Y?"marginLeft":"marginRight",re);R.length||(me.visibility="hidden",me.order=1);var be=Re()(Object(ue.a)({},"".concat(le,"-rtl"),Y)),Ne=D?null:t.createElement(Yr.default,{prefixCls:le,overlay:H,trigger:["hover"],visible:q,transitionName:x,onVisibleChange:ne,overlayClassName:be,mouseEnterDelay:.1,mouseLeaveDelay:.1},t.createElement("button",{type:"button",className:"".concat(y,"-nav-more"),style:me,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":_,id:"".concat(F,"-more"),"aria-expanded":q,onKeyDown:fe},K));return t.createElement("div",{className:Re()("".concat(y,"-nav-operations"),G),style:$,ref:u},Ne,t.createElement(sr,{prefixCls:y,locale:S,editable:U}))}var Zr=t.forwardRef(Qr),Lt=Object(t.createContext)(null),kr=.1,ir=.01,Et=20,or=Math.pow(.995,Et);function qr(a,u){var y=Object(t.useState)(),F=Object(J.a)(y,2),R=F[0],S=F[1],D=Object(t.useState)(0),N=Object(J.a)(D,2),K=N[0],x=N[1],$=Object(t.useState)(0),G=Object(J.a)($,2),U=G[0],re=G[1],Y=Object(t.useState)(),X=Object(J.a)(Y,2),se=X[0],z=X[1],q=Object(t.useRef)();function ne(le){var de=le.touches[0],te=de.screenX,H=de.screenY;S({x:te,y:H}),window.clearInterval(q.current)}function Q(le){if(!!R){le.preventDefault();var de=le.touches[0],te=de.screenX,H=de.screenY;S({x:te,y:H});var ie=te-R.x,fe=H-R.y;u(ie,fe);var me=Date.now();x(me),re(me-K),z({x:ie,y:fe})}}function ae(){if(!!R&&(S(null),z(null),se)){var le=se.x/U,de=se.y/U,te=Math.abs(le),H=Math.abs(de);if(Math.max(te,H)<kr)return;var ie=le,fe=de;q.current=window.setInterval(function(){if(Math.abs(ie)<ir&&Math.abs(fe)<ir){window.clearInterval(q.current);return}ie*=or,fe*=or,u(ie*Et,fe*Et)},Et)}}var k=Object(t.useRef)();function he(le){var de=le.deltaX,te=le.deltaY,H=0,ie=Math.abs(de),fe=Math.abs(te);ie===fe?H=k.current==="x"?de:te:ie>fe?(H=de,k.current="x"):(H=te,k.current="y"),u(-H,-H)&&le.preventDefault()}var _=Object(t.useRef)(null);_.current={onTouchStart:ne,onTouchMove:Q,onTouchEnd:ae,onWheel:he},t.useEffect(function(){function le(ie){_.current.onTouchStart(ie)}function de(ie){_.current.onTouchMove(ie)}function te(ie){_.current.onTouchEnd(ie)}function H(ie){_.current.onWheel(ie)}return document.addEventListener("touchmove",de,{passive:!1}),document.addEventListener("touchend",te,{passive:!1}),a.current.addEventListener("touchstart",le,{passive:!1}),a.current.addEventListener("wheel",H),function(){document.removeEventListener("touchmove",de),document.removeEventListener("touchend",te)}},[])}function _r(){var a=Object(t.useRef)(new Map);function u(F){return a.current.has(F)||a.current.set(F,t.createRef()),a.current.get(F)}function y(F){a.current.delete(F)}return[u,y]}function lr(a,u){var y=t.useRef(a),F=t.useState({}),R=Object(J.a)(F,2),S=R[1];function D(N){var K=typeof N=="function"?N(y.current):N;K!==y.current&&u(K,y.current),y.current=K,S({})}return[y.current,D]}var ur=function(u){var y=u.position,F=u.prefixCls,R=u.extra;if(!R)return null;var S,D=R;return y==="right"&&(S=D.right||!D.left&&D||null),y==="left"&&(S=D.left||null),S?t.createElement("div",{className:"".concat(F,"-extra-content")},S):null};function ea(a,u){var y,F=t.useContext(Lt),R=F.prefixCls,S=F.tabs,D=a.className,N=a.style,K=a.id,x=a.animated,$=a.activeKey,G=a.rtl,U=a.extra,re=a.editable,Y=a.locale,X=a.tabPosition,se=a.tabBarGutter,z=a.children,q=a.onTabClick,ne=a.onTabScroll,Q=Object(t.useRef)(),ae=Object(t.useRef)(),k=Object(t.useRef)(),he=Object(t.useRef)(),_=_r(),le=Object(J.a)(_,2),de=le[0],te=le[1],H=X==="top"||X==="bottom",ie=lr(0,function(ee,Z){H&&ne&&ne({direction:ee>Z?"left":"right"})}),fe=Object(J.a)(ie,2),me=fe[0],be=fe[1],Ne=lr(0,function(ee,Z){!H&&ne&&ne({direction:ee>Z?"top":"bottom"})}),ve=Object(J.a)(Ne,2),ye=ve[0],Pe=ve[1],De=Object(t.useState)(0),Se=Object(J.a)(De,2),Oe=Se[0],Be=Se[1],Ge=Object(t.useState)(0),Me=Object(J.a)(Ge,2),Ke=Me[0],$e=Me[1],we=Object(t.useState)(0),gn=Object(J.a)(we,2),Qe=gn[0],Je=gn[1],_e=Object(t.useState)(0),dn=Object(J.a)(_e,2),cn=dn[0],je=dn[1],Le=Object(t.useState)(null),He=Object(J.a)(Le,2),ze=He[0],Tn=He[1],zn=Object(t.useState)(null),In=Object(J.a)(zn,2),Ze=In[0],yn=In[1],en=Object(t.useState)(0),bn=Object(J.a)(en,2),Ye=bn[0],ke=bn[1],Cn=Object(t.useState)(0),tn=Object(J.a)(Cn,2),Ue=tn[0],xe=tn[1],Un=hn(new Map),Gn=Object(J.a)(Un,2),at=Gn[0],mn=Gn[1],ln=ot(S,at,Oe),Hn="".concat(R,"-nav-operations-hidden"),fn=0,rn=0;H?G?(fn=0,rn=Math.max(0,Oe-ze)):(fn=Math.min(0,ze-Oe),rn=0):(fn=Math.min(0,Ze-Ke),rn=0);function Yn(ee){return ee<fn?fn:ee>rn?rn:ee}var En=Object(t.useRef)(),Xn=Object(t.useState)(),nn=Object(J.a)(Xn,2),On=nn[0],ce=nn[1];function Ee(){ce(Date.now())}function Ae(){window.clearTimeout(En.current)}qr(Q,function(ee,Z){function ge(We,qe){We(function(Ln){var kn=Yn(Ln+qe);return kn})}if(H){if(ze>=Oe)return!1;ge(be,ee)}else{if(Ze>=Ke)return!1;ge(Pe,Z)}return Ae(),Ee(),!0}),Object(t.useEffect)(function(){return Ae(),On&&(En.current=window.setTimeout(function(){ce(0)},100)),Ae},[On]);function Xe(){var ee=arguments.length>0&&arguments[0]!==void 0?arguments[0]:$,Z=ln.get(ee)||{width:0,height:0,left:0,right:0,top:0};if(H){var ge=me;G?Z.right<me?ge=Z.right:Z.right+Z.width>me+ze&&(ge=Z.right+Z.width-ze):Z.left<-me?ge=-Z.left:Z.left+Z.width>-me+ze&&(ge=-(Z.left+Z.width-ze)),Pe(0),be(Yn(ge))}else{var We=ye;Z.top<-ye?We=-Z.top:Z.top+Z.height>-ye+Ze&&(We=-(Z.top+Z.height-Ze)),be(0),Pe(Yn(We))}}var Qn=lt(ln,{width:ze,height:Ze,left:me,top:ye},{width:Qe,height:cn},{width:Ye,height:Ue},Object(oe.a)(Object(oe.a)({},a),{},{tabs:S})),Ot=Object(J.a)(Qn,2),Vt=Ot[0],Jt=Ot[1],zt=S.map(function(ee){var Z=ee.key;return t.createElement(wn,{id:K,prefixCls:R,key:Z,rtl:G,tab:ee,closable:ee.closable,editable:re,active:Z===$,tabPosition:X,tabBarGutter:se,renderWrapper:z,removeAriaLabel:Y==null?void 0:Y.removeAriaLabel,ref:de(Z),onClick:function(We){q(Z,We)},onRemove:function(){te(Z)},onFocus:function(){Xe(Z),Ee(),G||(Q.current.scrollLeft=0),Q.current.scrollTop=0}})}),st=Dn(function(){var ee,Z,ge,We,qe,Ln,kn,Gt,Ht,la=((ee=Q.current)===null||ee===void 0?void 0:ee.offsetWidth)||0,ua=((Z=Q.current)===null||Z===void 0?void 0:Z.offsetHeight)||0,pr=((ge=he.current)===null||ge===void 0?void 0:ge.offsetWidth)||0,hr=((We=he.current)===null||We===void 0?void 0:We.offsetHeight)||0,da=((qe=k.current)===null||qe===void 0?void 0:qe.offsetWidth)||0,ca=((Ln=k.current)===null||Ln===void 0?void 0:Ln.offsetHeight)||0;Tn(la),yn(ua),ke(pr),xe(hr);var vr=(((kn=ae.current)===null||kn===void 0?void 0:kn.offsetWidth)||0)-pr,gr=(((Gt=ae.current)===null||Gt===void 0?void 0:Gt.offsetHeight)||0)-hr;Be(vr),$e(gr);var yr=(Ht=k.current)===null||Ht===void 0?void 0:Ht.className.includes(Hn);Je(vr-(yr?0:da)),je(gr-(yr?0:ca)),mn(function(){var br=new Map;return S.forEach(function(ma){var Cr=ma.key,vt=de(Cr).current;vt&&br.set(Cr,{width:vt.offsetWidth,height:vt.offsetHeight,left:vt.offsetLeft,top:vt.offsetTop})}),br})}),St=S.slice(0,Vt),mt=S.slice(Jt+1),Ft=[].concat(Object(an.a)(St),Object(an.a)(mt)),Ut=Object(t.useState)(),Rt=Object(J.a)(Ut,2),jt=Rt[0],it=Rt[1],Sn=ln.get($),Dt=Object(t.useRef)();function Pt(){Ve.a.cancel(Dt.current)}Object(t.useEffect)(function(){var ee={};return Sn&&(H?(G?ee.right=Sn.right:ee.left=Sn.left,ee.width=Sn.width):(ee.top=Sn.top,ee.height=Sn.height)),Pt(),Dt.current=Object(Ve.a)(function(){it(ee)}),Pt},[Sn,H,G]),Object(t.useEffect)(function(){Xe()},[$,Sn,ln,H]),Object(t.useEffect)(function(){st()},[G,se,$,S.map(function(ee){return ee.key}).join("_")]);var ft=!!Ft.length,Zn="".concat(R,"-nav-wrap"),pt,ht,At,Tt;return H?G?(ht=me>0,pt=me+ze<Oe):(pt=me<0,ht=-me+ze<Oe):(At=ye<0,Tt=-ye+Ze<Ke),t.createElement("div",{ref:u,role:"tablist",className:Re()("".concat(R,"-nav"),D),style:N,onKeyDown:function(){Ee()}},t.createElement(ur,{position:"left",extra:U,prefixCls:R}),t.createElement(Nn.default,{onResize:st},t.createElement("div",{className:Re()(Zn,(y={},Object(ue.a)(y,"".concat(Zn,"-ping-left"),pt),Object(ue.a)(y,"".concat(Zn,"-ping-right"),ht),Object(ue.a)(y,"".concat(Zn,"-ping-top"),At),Object(ue.a)(y,"".concat(Zn,"-ping-bottom"),Tt),y)),ref:Q},t.createElement(Nn.default,{onResize:st},t.createElement("div",{ref:ae,className:"".concat(R,"-nav-list"),style:{transform:"translate(".concat(me,"px, ").concat(ye,"px)"),transition:On?"none":void 0}},zt,t.createElement(sr,{ref:he,prefixCls:R,locale:Y,editable:re,style:{visibility:ft?"hidden":null}}),t.createElement("div",{className:Re()("".concat(R,"-ink-bar"),Object(ue.a)({},"".concat(R,"-ink-bar-animated"),x.inkBar)),style:jt}))))),t.createElement(Zr,Object(W.a)({},a,{ref:k,prefixCls:R,tabs:Ft,className:!ft&&Hn})),t.createElement(ur,{position:"right",extra:U,prefixCls:R}))}var dr=t.forwardRef(ea);function na(a){var u=a.id,y=a.activeKey,F=a.animated,R=a.tabPosition,S=a.rtl,D=a.destroyInactiveTabPane,N=t.useContext(Lt),K=N.prefixCls,x=N.tabs,$=F.tabPane,G=x.findIndex(function(U){return U.key===y});return t.createElement("div",{className:Re()("".concat(K,"-content-holder"))},t.createElement("div",{className:Re()("".concat(K,"-content"),"".concat(K,"-content-").concat(R),Object(ue.a)({},"".concat(K,"-content-animated"),$)),style:G&&$?Object(ue.a)({},S?"marginRight":"marginLeft","-".concat(G,"00%")):null},x.map(function(U){return t.cloneElement(U.node,{key:U.key,prefixCls:K,tabKey:U.key,id:u,animated:$,active:U.key===y,destroyInactiveTabPane:D})})))}function cr(a){var u=a.prefixCls,y=a.forceRender,F=a.className,R=a.style,S=a.id,D=a.active,N=a.animated,K=a.destroyInactiveTabPane,x=a.tabKey,$=a.children,G=t.useState(y),U=Object(J.a)(G,2),re=U[0],Y=U[1];t.useEffect(function(){D?Y(!0):K&&Y(!1)},[D,K]);var X={};return D||(N?(X.visibility="hidden",X.height=0,X.overflowY="hidden"):X.display="none"),t.createElement("div",{id:S&&"".concat(S,"-panel-").concat(x),role:"tabpanel",tabIndex:D?0:-1,"aria-labelledby":S&&"".concat(S,"-tab-").concat(x),"aria-hidden":!D,style:Object(oe.a)(Object(oe.a)({},X),R),className:Re()("".concat(u,"-tabpane"),D&&"".concat(u,"-tabpane-active"),F)},(D||re||y)&&$)}var mr=0;function ta(a){return Object(Rn.a)(a).map(function(u){if(t.isValidElement(u)){var y=u.key!==void 0?String(u.key):void 0;return Object(oe.a)(Object(oe.a)({key:y},u.props),{},{node:u})}return null}).filter(function(u){return u})}function ra(a,u){var y,F=a.id,R=a.prefixCls,S=R===void 0?"rc-tabs":R,D=a.className,N=a.children,K=a.direction,x=a.activeKey,$=a.defaultActiveKey,G=a.editable,U=a.animated,re=U===void 0?{inkBar:!0,tabPane:!1}:U,Y=a.tabPosition,X=Y===void 0?"top":Y,se=a.tabBarGutter,z=a.tabBarStyle,q=a.tabBarExtraContent,ne=a.locale,Q=a.moreIcon,ae=a.moreTransitionName,k=a.destroyInactiveTabPane,he=a.renderTabBar,_=a.onChange,le=a.onTabClick,de=a.onTabScroll,te=Object(Fe.a)(a,["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"]),H=ta(N),ie=K==="rtl",fe;re===!1?fe={inkBar:!1,tabPane:!1}:re===!0?fe={inkBar:!0,tabPane:!0}:fe=Object(oe.a)({inkBar:!0,tabPane:!1},Object(Te.a)(re)==="object"?re:{});var me=Object(t.useState)(!1),be=Object(J.a)(me,2),Ne=be[0],ve=be[1];Object(t.useEffect)(function(){ve(Object(jn.a)())},[]);var ye=Object(pn.a)(function(){var je;return(je=H[0])===null||je===void 0?void 0:je.key},{value:x,defaultValue:$}),Pe=Object(J.a)(ye,2),De=Pe[0],Se=Pe[1],Oe=Object(t.useState)(function(){return H.findIndex(function(je){return je.key===De})}),Be=Object(J.a)(Oe,2),Ge=Be[0],Me=Be[1];Object(t.useEffect)(function(){var je=H.findIndex(function(He){return He.key===De});if(je===-1){var Le;je=Math.max(0,Math.min(Ge,H.length-1)),Se((Le=H[je])===null||Le===void 0?void 0:Le.key)}Me(je)},[H.map(function(je){return je.key}).join("_"),De,Ge]);var Ke=Object(pn.a)(null,{value:F}),$e=Object(J.a)(Ke,2),we=$e[0],gn=$e[1],Qe=X;Ne&&!["left","right"].includes(X)&&(Qe="top"),Object(t.useEffect)(function(){F||(gn("rc-tabs-".concat(mr)),mr+=1)},[]);function Je(je,Le){le==null||le(je,Le),Se(je),_==null||_(je)}var _e={id:we,activeKey:De,animated:fe,tabPosition:Qe,rtl:ie,mobile:Ne},dn,cn=Object(oe.a)(Object(oe.a)({},_e),{},{editable:G,locale:ne,moreIcon:Q,moreTransitionName:ae,tabBarGutter:se,onTabClick:Je,onTabScroll:de,extra:q,style:z,panes:N});return he?dn=he(cn,dr):dn=t.createElement(dr,cn),t.createElement(Lt.Provider,{value:{tabs:H,prefixCls:S}},t.createElement("div",Object(W.a)({ref:u,id:F,className:Re()(S,"".concat(S,"-").concat(Qe),(y={},Object(ue.a)(y,"".concat(S,"-mobile"),Ne),Object(ue.a)(y,"".concat(S,"-editable"),G),Object(ue.a)(y,"".concat(S,"-rtl"),ie),y),D)},te),dn,t.createElement(na,Object(W.a)({destroyInactiveTabPane:k},_e,{animated:fe}))))}var fr=t.forwardRef(ra);fr.TabPane=cr;var aa=fr,sa=aa,xt=e("MZF8"),on=e("dEAq"),ia=e("ZpkN"),ba=e("TIsu");function $t(a,u){var y,F=(y=a.match(/\.(\w+)$/))===null||y===void 0?void 0:y[1];return F||(F=u.tsx?"tsx":"jsx"),F}var oa=a=>{var u,y,F,R=Object(t.useRef)(),S=Object(t.useContext)(on.context),D=S.locale,N=Object(on.useLocaleProps)(D,a),K=Object(on.useDemoUrl)(N.identifier),x=N.demoUrl||K,$=(xt.a===null||xt.a===void 0?void 0:xt.a.location.hash)==="#".concat(N.identifier),G=Object.keys(N.sources).length===1,U=Object(on.useCodeSandbox)((u=N.hideActions)!==null&&u!==void 0&&u.includes("CSB")?null:N),re=Object(on.useRiddle)((y=N.hideActions)!==null&&y!==void 0&&y.includes("RIDDLE")?null:N),Y=Object(on.useMotions)(N.motions||[],R.current),X=Object(V.default)(Y,2),se=X[0],z=X[1],q=Object(on.useCopy)(),ne=Object(V.default)(q,2),Q=ne[0],ae=ne[1],k=Object(t.useState)("_"),he=Object(V.default)(k,2),_=he[0],le=he[1],de=Object(t.useState)($t(_,N.sources[_])),te=Object(V.default)(de,2),H=te[0],ie=te[1],fe=Object(t.useState)(Boolean(N.defaultShowCode)),me=Object(V.default)(fe,2),be=me[0],Ne=me[1],ve=Object(t.useState)(Math.random()),ye=Object(V.default)(ve,2),Pe=ye[0],De=ye[1],Se=N.sources[_][H]||N.sources[_].content,Oe=Object(on.useTSPlaygroundUrl)(D,Se),Be=Object(t.useRef)(),Ge=Object(on.usePrefersColor)(),Me=Object(V.default)(Ge,1),Ke=Me[0];Object(t.useEffect)(()=>{De(Math.random())},[Ke]);function $e(we){le(we),ie($t(we,N.sources[we]))}return b.a.createElement("div",{style:N.style,className:[N.className,"__dumi-default-previewer",$?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:N.identifier,"data-debug":N.debug||void 0,"data-iframe":N.iframe||void 0},N.iframe&&b.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),b.a.createElement("div",{ref:R,className:"__dumi-default-previewer-demo",style:{transform:N.transform?"translate(0, 0)":void 0,padding:N.compact||N.iframe&&N.compact!==!1?"0":void 0,background:N.background}},N.iframe?b.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(N.iframe).replace(/(\d)$/,"$1px")},key:Pe,src:x,ref:Be}):N.children),b.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":N.title},N.title&&b.a.createElement(on.AnchorLink,{to:"#".concat(N.identifier)},N.title),N.description&&b.a.createElement("div",{dangerouslySetInnerHTML:{__html:N.description}})),b.a.createElement("div",{className:"__dumi-default-previewer-actions"},U&&b.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:U}),re&&b.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:re}),N.motions&&b.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:z,onClick:()=>se()}),N.iframe&&b.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:()=>De(Math.random())}),!((F=N.hideActions)!==null&&F!==void 0&&F.includes("EXTERNAL"))&&b.a.createElement(on.Link,{target:"_blank",to:x},b.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),b.a.createElement("span",null),b.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":ae,onClick:()=>Q(Se)}),H==="tsx"&&be&&b.a.createElement(on.Link,{target:"_blank",to:Oe},b.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),b.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(be?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:()=>Ne(!be)})),be&&b.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!G&&b.a.createElement(sa,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xB7\xB7\xB7",defaultActiveKey:_,onChange:$e},Object.keys(N.sources).map(we=>b.a.createElement(cr,{tab:we==="_"?"index.".concat($t(we,N.sources[we])):we,key:we}))),b.a.createElement("div",{className:"__dumi-default-previewer-source"},b.a.createElement(ia.a,{code:Se,lang:H,showCopy:!1}))))},Ca=un.default=oa},"80pN":function(Fn,un,e){"use strict";(function(V){/** @license React v16.14.0
* react-dom-test-utils.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var t=e("MgzW"),b=e("q1tI"),W=e("i8i4"),ue=e("QCnb");function J(r){for(var l="https://reactjs.org/docs/error-decoder.html?invariant="+r,f=1;f<arguments.length;f++)l+="&args[]="+encodeURIComponent(arguments[f]);return"Minified React error #"+r+"; visit "+l+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Te=b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;Te.hasOwnProperty("ReactCurrentDispatcher")||(Te.ReactCurrentDispatcher={current:null}),Te.hasOwnProperty("ReactCurrentBatchConfig")||(Te.ReactCurrentBatchConfig={suspense:null});function Fe(r){var l=r,f=r;if(r.alternate)for(;l.return;)l=l.return;else{r=l;do l=r,(l.effectTag&1026)!=0&&(f=l.return),r=l.return;while(r)}return l.tag===3?f:null}function oe(r){if(Fe(r)!==r)throw Error(J(188))}function xn(r){var l=r.alternate;if(!l){if(l=Fe(r),l===null)throw Error(J(188));return l!==r?null:r}for(var f=r,B=l;;){var A=f.return;if(A===null)break;var L=A.alternate;if(L===null){if(B=A.return,B!==null){f=B;continue}break}if(A.child===L.child){for(L=A.child;L;){if(L===f)return oe(A),r;if(L===B)return oe(A),l;L=L.sibling}throw Error(J(188))}if(f.return!==B.return)f=A,B=L;else{for(var pe=!1,Ce=A.child;Ce;){if(Ce===f){pe=!0,f=A,B=L;break}if(Ce===B){pe=!0,B=A,f=L;break}Ce=Ce.sibling}if(!pe){for(Ce=L.child;Ce;){if(Ce===f){pe=!0,f=L,B=A;break}if(Ce===B){pe=!0,B=L,f=A;break}Ce=Ce.sibling}if(!pe)throw Error(J(189))}}if(f.alternate!==B)throw Error(J(190))}if(f.tag!==3)throw Error(J(188));return f.stateNode.current===f?r:l}function Re(){return!0}function Rn(){return!1}function jn(r,l,f,B){this.dispatchConfig=r,this._targetInst=l,this.nativeEvent=f,r=this.constructor.Interface;for(var A in r)r.hasOwnProperty(A)&&((l=r[A])?this[A]=l(f):A==="target"?this.target=B:this[A]=f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Re:Rn,this.isPropagationStopped=Rn,this}t(jn.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Re)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Re)},persist:function(){this.isPersistent=Re},isPersistent:Rn,destructor:function(){var r=this.constructor.Interface,l;for(l in r)this[l]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=Rn,this._dispatchInstances=this._dispatchListeners=null}}),jn.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null},jn.extend=function(r){function l(){}function f(){return B.apply(this,arguments)}var B=this;l.prototype=B.prototype;var A=new l;return t(A,f.prototype),f.prototype=A,f.prototype.constructor=f,f.Interface=t({},B.Interface,r),f.extend=B.extend,Ve(f),f},Ve(jn);function pn(r,l,f,B){if(this.eventPool.length){var A=this.eventPool.pop();return this.call(A,r,l,f,B),A}return new this(r,l,f,B)}function an(r){if(!(r instanceof this))throw Error(J(279));r.destructor(),10>this.eventPool.length&&this.eventPool.push(r)}function Ve(r){r.eventPool=[],r.getPooled=pn,r.release=an}var Nn=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined");function Dn(r,l){var f={};return f[r.toLowerCase()]=l.toLowerCase(),f["Webkit"+r]="webkit"+l,f["Moz"+r]="moz"+l,f}var hn={animationend:Dn("Animation","AnimationEnd"),animationiteration:Dn("Animation","AnimationIteration"),animationstart:Dn("Animation","AnimationStart"),transitionend:Dn("Transition","TransitionEnd")},Ie={},qn={};Nn&&(qn=document.createElement("div").style,"AnimationEvent"in window||(delete hn.animationend.animation,delete hn.animationiteration.animation,delete hn.animationstart.animation),"TransitionEvent"in window||delete hn.transitionend.transition);function wn(r){if(Ie[r])return Ie[r];if(!hn[r])return r;var l=hn[r],f;for(f in l)if(l.hasOwnProperty(f)&&f in qn)return Ie[r]=l[f];return r}var _n=wn("animationend"),ot=wn("animationiteration"),et=wn("animationstart"),lt=wn("transitionend"),Bn=null;function nt(r){if(Bn===null)try{var l=("require"+Math.random()).slice(0,7);Bn=(V&&V[l])("timers").setImmediate}catch(f){Bn=function(B){var A=new MessageChannel;A.port1.onmessage=B,A.port2.postMessage(void 0)}}return Bn(r)}var $n=W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,ut=$n[11],Mn=$n[12],Pn=W.unstable_batchedUpdates,Vn=Te.IsSomeRendererActing,tt=typeof ue.unstable_flushAllWithoutAsserting=="function",Jn=ue.unstable_flushAllWithoutAsserting||function(){for(var r=!1;ut();)r=!0;return r};function I(r){try{Jn(),nt(function(){Jn()?I(r):r()})}catch(l){r(l)}}var P=0,T=!1,p=W.findDOMNode,i=W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,g=i[0],C=i[4],O=i[5],s=i[6],h=i[7],o=i[8],w=i[9],M=i[10];function j(){}function c(r,l){if(!r)return[];if(r=xn(r),!r)return[];for(var f=r,B=[];;){if(f.tag===5||f.tag===6||f.tag===1||f.tag===0){var A=f.stateNode;l(A)&&B.push(A)}if(f.child)f.child.return=f,f=f.child;else{if(f===r)return B;for(;!f.sibling;){if(!f.return||f.return===r)return B;f=f.return}f.sibling.return=f.return,f=f.sibling}}}function E(r,l){if(r&&!r._reactInternalFiber){var f=""+r;throw r=Array.isArray(r)?"an array":r&&r.nodeType===1&&r.tagName?"a DOM node":f==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":f,Error(J(286,l,r))}}var m={renderIntoDocument:function(r){var l=document.createElement("div");return W.render(r,l)},isElement:function(r){return b.isValidElement(r)},isElementOfType:function(r,l){return b.isValidElement(r)&&r.type===l},isDOMComponent:function(r){return!(!r||r.nodeType!==1||!r.tagName)},isDOMComponentElement:function(r){return!!(r&&b.isValidElement(r)&&r.tagName)},isCompositeComponent:function(r){return m.isDOMComponent(r)?!1:r!=null&&typeof r.render=="function"&&typeof r.setState=="function"},isCompositeComponentWithType:function(r,l){return m.isCompositeComponent(r)?r._reactInternalFiber.type===l:!1},findAllInRenderedTree:function(r,l){return E(r,"findAllInRenderedTree"),r?c(r._reactInternalFiber,l):[]},scryRenderedDOMComponentsWithClass:function(r,l){return E(r,"scryRenderedDOMComponentsWithClass"),m.findAllInRenderedTree(r,function(f){if(m.isDOMComponent(f)){var B=f.className;typeof B!="string"&&(B=f.getAttribute("class")||"");var A=B.split(/\s+/);if(!Array.isArray(l)){if(l===void 0)throw Error(J(11));l=l.split(/\s+/)}return l.every(function(L){return A.indexOf(L)!==-1})}return!1})},findRenderedDOMComponentWithClass:function(r,l){if(E(r,"findRenderedDOMComponentWithClass"),r=m.scryRenderedDOMComponentsWithClass(r,l),r.length!==1)throw Error("Did not find exactly one match (found: "+r.length+") for class:"+l);return r[0]},scryRenderedDOMComponentsWithTag:function(r,l){return E(r,"scryRenderedDOMComponentsWithTag"),m.findAllInRenderedTree(r,function(f){return m.isDOMComponent(f)&&f.tagName.toUpperCase()===l.toUpperCase()})},findRenderedDOMComponentWithTag:function(r,l){if(E(r,"findRenderedDOMComponentWithTag"),r=m.scryRenderedDOMComponentsWithTag(r,l),r.length!==1)throw Error("Did not find exactly one match (found: "+r.length+") for tag:"+l);return r[0]},scryRenderedComponentsWithType:function(r,l){return E(r,"scryRenderedComponentsWithType"),m.findAllInRenderedTree(r,function(f){return m.isCompositeComponentWithType(f,l)})},findRenderedComponentWithType:function(r,l){if(E(r,"findRenderedComponentWithType"),r=m.scryRenderedComponentsWithType(r,l),r.length!==1)throw Error("Did not find exactly one match (found: "+r.length+") for componentType:"+l);return r[0]},mockComponent:function(r,l){return l=l||r.mockTagName||"div",r.prototype.render.mockImplementation(function(){return b.createElement(l,null,this.props.children)}),this},nativeTouchData:function(r,l){return{touches:[{pageX:r,pageY:l}]}},Simulate:null,SimulateNative:{},act:function(r){function l(){P--,Vn.current=f,Mn.current=B}T===!1&&(T=!0,console.error("act(...) is not supported in production builds of React, and might not behave as expected.")),P++;var f=Vn.current,B=Mn.current;Vn.current=!0,Mn.current=!0;try{var A=Pn(r)}catch(L){throw l(),L}if(A!==null&&typeof A=="object"&&typeof A.then=="function")return{then:function(L,pe){A.then(function(){1<P||tt===!0&&f===!0?(l(),L()):I(function(Ce){l(),Ce?pe(Ce):L()})},function(Ce){l(),pe(Ce)})}};try{P!==1||tt!==!1&&f!==!1||Jn(),l()}catch(L){throw l(),L}return{then:function(L){L()}}}};function n(r){return function(l,f){if(b.isValidElement(l))throw Error(J(228));if(m.isCompositeComponent(l))throw Error(J(229));var B=C[r],A=new j;A.target=l,A.type=r.toLowerCase();var L=g(l),pe=new jn(B,L,A,l);pe.persist(),t(pe,f),B.phasedRegistrationNames?O(pe):s(pe),W.unstable_batchedUpdates(function(){h(l),M(pe)}),o()}}m.Simulate={};for(var v in C)m.Simulate[v]=n(v);function d(r,l){return function(f,B){var A=new j(r);t(A,B),m.isDOMComponent(f)?(f=p(f),A.target=f,w(l,1,document,A)):f.tagName&&(A.target=f,w(l,1,document,A))}}[["abort","abort"],[_n,"animationEnd"],[ot,"animationIteration"],[et,"animationStart"],["blur","blur"],["canplaythrough","canPlayThrough"],["canplay","canPlay"],["cancel","cancel"],["change","change"],["click","click"],["close","close"],["compositionend","compositionEnd"],["compositionstart","compositionStart"],["compositionupdate","compositionUpdate"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["dragstart","dragStart"],["drag","drag"],["drop","drop"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],["ended","ended"],["error","error"],["focus","focus"],["input","input"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["loadstart","loadStart"],["loadstart","loadStart"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["mousedown","mouseDown"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["playing","playing"],["progress","progress"],["ratechange","rateChange"],["scroll","scroll"],["seeked","seeked"],["seeking","seeking"],["selectionchange","selectionChange"],["stalled","stalled"],["suspend","suspend"],["textInput","textInput"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchmove","touchMove"],["touchstart","touchStart"],[lt,"transitionEnd"],["volumechange","volumeChange"],["waiting","waiting"],["wheel","wheel"]].forEach(function(r){var l=r[1];m.SimulateNative[l]=d(l,r[0])}),V.exports=m.default||m}).call(this,e("hOG+")(Fn))},JjdP:function(Fn,un,e){"use strict";e.r(un);var V=e("9og8"),t=e("WmNS"),b=e.n(t),W=e("LtsZ"),ue=`import React, { useRef } from 'react';
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

export default Demo;`,J=`import { get, set, cloneDeep } from 'lodash-es';

// window.log1 = value => {
//   console.log('%ccommon:', 'color: #00A7F7; font-weight: 500;', value);
// };

// window.log2 = value => {
//   console.log('%cwarning:', 'color: #f50; font-weight: 500;', value);
// };

// window.log3 = value => {
//   console.log('%csuccess:', 'color: #87d068; font-weight: 500;', value);
// };

// window.log4 = value => {
//   console.log('%cspecial:', 'color: #722ed1; font-weight: 500;', value);
// };

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
  return (
    schema && schema.type === 'object' && schema.properties && !schema.widget
  );
}

// TODO: to support case that item is not an object
export function isListType(schema) {
  return (
    schema &&
    schema.type === 'array' &&
    isObjType(schema.items) &&
    schema.enum === undefined
  );
}

// TODO: more tests to make sure weird & wrong schema won't crush
export function flattenSchema(_schema = {}, name = '#', parent, result = {}) {
  const schema = clone(_schema);
  let _name = name;
  if (!schema.$id) {
    schema.$id = _name; // path as $id, for easy access to path in schema
  }
  const children = [];
  if (isObjType(schema)) {
    Object.entries(schema.properties).forEach(([key, value]) => {
      const _key = isListType(value) ? key + '[]' : key;
      const uniqueName = _name === '#' ? _key : _name + '.' + _key;
      children.push(uniqueName);
      flattenSchema(value, uniqueName, _name, result);
    });
    schema.properties = {};
  }
  if (isListType(schema)) {
    Object.entries(schema.items.properties).forEach(([key, value]) => {
      const _key = isListType(value) ? key + '[]' : key;
      const uniqueName = _name === '#' ? _key : _name + '.' + _key;
      children.push(uniqueName);
      flattenSchema(value, uniqueName, _name, result);
    });
    schema.items.properties = {};
  }

  if (schema.type) {
    result[_name] = { parent, schema, children };
  }
  return result;
}

export function getSchemaFromFlatten(flatten, path = '#') {
  let schema = {};
  const item = clone(flatten[path]);
  if (item) {
    schema = item.schema;
    // schema.$id && delete schema.$id;
    if (item.children.length > 0) {
      item.children.forEach(child => {
        if (!flatten[child]) return;
        const key = getKeyFromPath(child);
        if (isObjType(schema)) {
          schema.properties[key] = getSchemaFromFlatten(flatten, child);
        }
        if (isListType(schema)) {
          schema.items.properties[key] = getSchemaFromFlatten(flatten, child);
        }
      });
    }
  }
  return schema;
}

function stringContains(str, text) {
  return str.indexOf(text) > -1;
}

export const isObject = a =>
  stringContains(Object.prototype.toString.call(a), 'Object');

export const clone = cloneDeep;

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

export const parseString = string =>
  Function('"use strict";return (' + string + ')')();

export const evaluateString = (string, formData, rootValue) =>
  Function(\`"use strict";
    const rootValue = \${JSON.stringify(rootValue)};
    const formData = \${JSON.stringify(formData)};
    return (\${string})\`)();

export function isExpression(func) {
  // if (typeof func === 'function') {
  //   const funcString = func.toString();
  //   return (
  //     funcString.indexOf('formData') > -1 ||
  //     funcString.indexOf('rootValue') > -1
  //   );
  // }
  if (typeof func !== 'string') return false;
  const pattern = /^{{(.+)}}$/;
  const reg1 = /^{{function\\(.+}}$/;
  // const reg2 = /^{{(.+=>.+)}}$/;
  if (typeof func === 'string' && func.match(pattern) && !func.match(reg1)) {
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
      return null; // \u5982\u679C\u8BA1\u7B97\u6709\u9519\u8BEF\uFF0Creturn null \u6700\u5408\u9002
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

export const schemaContainsExpression = schema => {
  if (isObject(schema)) {
    return Object.keys(schema).some(key => {
      const value = schema[key];
      if (typeof value === 'string') {
        return isExpression(value);
      } else if (isObject(value)) {
        return schemaContainsExpression(value);
      } else {
        return false;
      }
    });
  }
  return false;
};

export const parseAllExpression = (_schema, formData, dataPath) => {
  const schema = clone(_schema);
  Object.keys(schema).forEach(key => {
    const value = schema[key];
    if (isObject(value)) {
      schema[key] = parseAllExpression(value, formData, dataPath);
    } else if (isExpression(value)) {
      schema[key] = parseSingleExpression(value, formData, dataPath);
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

export const isFunctionString = fString => {
  return typeof fString === 'string' && fString.indexOf('function(') === 0;
};

export function parseFunction(fString) {
  if (isFunctionString(fString)) {
    return Function('return ' + fString)();
  }
  return fString;
}

// \u83B7\u5F97propsSchema\u7684children
// function getChildren2(schema) {
//   if (!schema) return [];
//   const {
//     // object
//     properties,
//     // array
//     items,
//     type,
//   } = schema;
//   if (!properties && !items) {
//     return [];
//   }
//   let schemaSubs = {};
//   if (type === 'object') {
//     schemaSubs = properties;
//   }
//   if (type === 'array') {
//     schemaSubs = items.properties;
//   }
//   return Object.keys(schemaSubs).map(name => ({
//     schema: schemaSubs[name],
//     name,
//   }));
// }

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

export const getKeyFromPath = (path = '#') => {
  try {
    const arr = path.split('.');
    const last = arr.slice(-1)[0];
    const result = last.replace('[]', '');
    return result;
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
        // \u6682\u65F6\u5148\u53BB\u6389\uFF0C\u5E94\u8BE5\u6CA1\u4E8B\u4E86\uFF0C\u5728range\u7EC4\u4EF6\u7684\u6E90\u5934\u4E0A\u628A\u5947\u602A\u7684case\u5E72\u6389\u4E86
        // const rangeValidator = {
        //   validator: (rule, value) => {
        //     const rangeRequired = schema.required === true && isRequired;
        //     // range\u7EC4\u4EF6\u70B9\u51FBclear\uFF0C\u4F1A\u53D8\u6210 ['','']
        //     // range\u7EC4\u4EF6\u5BF9\u5E94\u7684\u503Cbind\u7684\u65F6\u5019\uFF0C\u4F1A\u53D8\u6210 [undefined,undefined]
        //     const notValid1 = value[0] === '' && value[1] === '';
        //     const notValid2 = value[0] === undefined && value[1] === undefined;
        //     if (rangeRequired) {
        //       if (!value) return false;
        //       if (Array.isArray(value)) {
        //         if (notValid1 || notValid2) {
        //           return false;
        //         }
        //         return true;
        //       }
        //       return true;
        //     } else {
        //       return true;
        //     }
        //   },
        //   type: 'array',
        //   message: '\${title}\u5FC5\u586B',
        // };
        // singleResult = rangeValidator;
        singleResult.type = 'array';
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
export const generateDataSkeleton = (schema, formData) => {
  let _formData = clone(formData);
  let result = _formData;
  if (isObjType(schema)) {
    if (_formData === undefined || typeof _formData !== 'object') {
      _formData = {};
      result = {};
    }
    Object.keys(schema.properties).forEach(key => {
      const childSchema = schema.properties[key];
      const childData = _formData[key];
      const childResult = generateDataSkeleton(childSchema, childData);
      result[key] = childResult;
    });
  } else if (_formData !== undefined) {
    // result = _formData;
  } else {
    if (schema.default !== undefined) {
      result = clone(schema.default);
    } else if (schema.type === 'boolean' && !schema.widget) {
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
};

export function msToTime(duration) {
  let seconds = Math.floor((duration / 1000) % 60);
  let minutes = Math.floor((duration / (1000 * 60)) % 60);
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  return hours + ':' + minutes + ':' + seconds;
}

export function yymmdd(timeStamp) {
  const date_ob = new Date(Number(timeStamp));
  const adjustZero = num => ('0' + num).slice(-2);
  let day = adjustZero(date_ob.getDate());
  let month = adjustZero(date_ob.getMonth());
  let year = date_ob.getFullYear();
  let hours = adjustZero(date_ob.getHours());
  let minutes = adjustZero(date_ob.getMinutes());
  let seconds = adjustZero(date_ob.getSeconds());
  return \`\${year}-\${month}-\${day} \${hours}:\${minutes}:\${seconds}\`;
}`,Te=`import React from 'react';
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
};`,oe=`import React from 'react';
import FormRender, { useForm } from 'form-render';

const Demo = ({ schema }) => {
  const form = useForm();
  return (
    <div>
      <FormRender form={form} schema={schema} />
    </div>
  );
};

export default Demo;`,xn=`export const basic = {
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
};`,Re=`import React, { Component } from 'react';
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

export default Root;`,Rn=`import React, { useState, useEffect } from 'react';
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

export default Demo;`,jn=`{
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
}`,pn=`import { Select } from 'antd';
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
    const { onChange } = this.props;
    onChange(value);
  };

  render() {
    const { value, ...rest } = this.props;
    const options = this.state.data.map(d => (
      <Option key={d.value}>{d.text}</Option>
    ));
    return (
      <Select
        {...rest}
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

export default SearchInput;`,an=`import React from 'react';
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

export default Demo;`,Ve=`/* PrismJS 1.16.0
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
}`,Nn=`.debug * {
  outline: 1px solid gold;
}

.markdown p {
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
}`,Dn=`import React, { Component } from 'react';
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

export default Root;`,hn=`import React, { useState, useEffect } from 'react';
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

export default Demo;`,Ie=`{
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
}`,qn=`import { Select } from 'antd';
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

export default SearchInput;`,wn=`import React from 'react';
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

export default Demo;`,_n=`import { monaco } from 'react-monaco-editor';

const valueMap = range => {
  return {
    widget: [
      {
        label: 'input',
        insertText: 'input',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u8F93\u5165\u6846',
      },
      {
        label: 'textarea',
        insertText: 'textarea',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u591A\u884C\u8F93\u5165\u6846',
      },
      {
        label: 'date',
        insertText: 'date',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u65E5\u671F\u7EC4\u4EF6',
      },
      {
        label: 'time',
        insertText: 'time',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u65F6\u95F4\u7EC4\u4EF6',
      },
      {
        label: 'dateRange',
        insertText: 'dateRange',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u65E5\u671F\u8303\u56F4',
      },
      {
        label: 'timeRange',
        insertText: 'timeRange',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u65F6\u95F4\u8303\u56F4',
      },
      {
        label: 'checkbox',
        insertText: 'checkbox',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u662F\u5426\u9009\u62E9',
      },
      {
        label: 'select',
        insertText: 'select',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u4E0B\u62C9\u5355\u9009',
      },
      {
        label: 'radio',
        insertText: 'radio',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u70B9\u51FB\u5355\u9009',
      },
      {
        label: 'multiSelect',
        insertText: 'multiSelect',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u4E0B\u62C9\u591A\u9009\u6846',
      },
      {
        label: 'checkboxes',
        insertText: 'checkboxes',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u70B9\u51FB\u591A\u9009\u6846',
      },
      {
        label: 'treeSelect',
        insertText: 'treeSelect',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u6811\u5F62\u9009\u62E9',
      },
      {
        label: 'color',
        insertText: 'color',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u989C\u8272\u9009\u62E9',
      },
      {
        label: 'upload',
        insertText: 'upload',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u4E0A\u4F20\u7EC4\u4EF6',
      },
      {
        label: 'html',
        insertText: 'html',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u6587\u672C\uFF08\u53EA\u8BFB\u5C55\u793A\uFF09',
      },
      {
        label: 'slider',
        insertText: 'slider',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u6ED1\u52A8\u8F93\u5165\u6761',
      },
      {
        label: 'rate',
        insertText: 'rate',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u4E94\u661F\u8BC4\u5206',
      },
      {
        label: 'map',
        insertText: 'map',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u5BF9\u8C61',
      },
      {
        label: 'list0',
        insertText: 'list0',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u5217\u8868(\u590D\u6742\u7ED3\u6784\uFF0C\u4F46item\u6570\u91CF\u4E0D\u5927)',
      },
      {
        label: 'list1',
        insertText: 'list1',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u5217\u8868(\u6BCF\u4E2Aitem\u67091-2\u6761\u6570\u636E\uFF0C\u6CA1\u6709\u590D\u6742\u7ED3\u6784)',
      },
      {
        label: 'list2',
        insertText: 'list2',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u5217\u8868(\u6BCF\u4E2Aitem\u67093-5\u6761\u6570\u636E\uFF0C\u6CA1\u6709\u590D\u6742\u7ED3\u6784)',
      },
      {
        label: 'list3',
        insertText: 'list3',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u5217\u8868(\u6BCF\u4E2Aitem\u6570\u636E\u91CF\u5927\uFF0C\u6216\u8005\u7ED3\u6784\u590D\u6742)',
      },
    ],
    type: [
      {
        label: 'string',
        insertText: 'string',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'string',
      },
      {
        label: 'number',
        insertText: 'number',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'number',
      },
      {
        label: 'boolean',
        insertText: 'boolean',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'boolean',
      },
      {
        label: 'array',
        insertText: 'array',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'array',
      },
      {
        label: 'object',
        insertText: 'object',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'object',
      },
      {
        label: 'range',
        insertText: 'range',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'range',
      },
      {
        label: 'html',
        insertText: 'html',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'html',
      },
    ],
    format: [
      {
        label: 'image',
        insertText: 'image',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'image',
      },
      {
        label: 'textarea',
        insertText: 'textarea',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'textarea',
      },
      {
        label: 'color',
        insertText: 'color',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'color',
      },
      {
        label: 'email',
        insertText: 'email',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'email',
      },
      {
        label: 'url',
        insertText: 'url',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'url',
      },
      {
        label: 'dateTime',
        insertText: 'dateTime',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'dateTime',
      },
      {
        label: 'date',
        insertText: 'date',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'date',
      },
      {
        label: 'time',
        insertText: 'time',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'time',
      },
      {
        label: 'upload',
        insertText: 'upload',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'upload',
      },
    ],
    displayType: [
      {
        label: 'row',
        insertText: 'row',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u5E76\u6392\u5C55\u793A',
      },
      {
        label: 'column',
        insertText: 'column',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u4E24\u6392\u5C55\u793A',
      },
    ],
  };
};

const keySuggestions = range => [
  {
    label: 'title',
    insertText: 'title',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u8868\u5355\u7684\u6807\u9898\u4FE1\u606F',
  },
  {
    label: 'description',
    insertText: 'description',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u8868\u5355\u7684\u63CF\u8FF0\u4FE1\u606F',
  },
  {
    label: 'type',
    insertText: 'type',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u7EC4\u4EF6\u503C\u7684\u6570\u636E\u7C7B\u578B',
  },
  {
    label: 'format',
    insertText: 'format',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u8F93\u5165\u6846\u7684\u683C\u5F0F',
  },
  {
    label: 'default',
    insertText: 'default',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u7EC4\u4EF6\u7684\u9ED8\u8BA4\u503C',
  },
  {
    label: 'required',
    insertText: 'required',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u662F\u5426\u5FC5\u586B',
  },
  {
    label: 'placeholder',
    insertText: 'placeholder',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: 'placeholder',
  },
  {
    label: 'bind',
    insertText: 'bind',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: 'bind',
  },
  {
    label: 'min',
    insertText: 'min',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u6700\u5C0F\u503C',
  },
  {
    label: 'max',
    insertText: 'max',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u6700\u5927\u503C',
  },
  {
    label: 'disabled',
    insertText: 'disabled',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u662F\u5426\u7981\u7528',
  },
  {
    label: 'readOnly',
    insertText: 'readOnly',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u662F\u5426\u53EA\u8BFB',
  },
  {
    label: 'hidden',
    insertText: 'hidden',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u662F\u5426\u9690\u85CF',
  },
  {
    label: 'displayType',
    insertText: 'displayType',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u8868\u5355\u5E03\u5C40',
  },
  {
    label: 'width',
    insertText: 'width',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u5355\u4E2A\u5143\u7D20\u7684\u5C55\u793A\u5BBD\u5EA6',
  },
  {
    label: 'labelWidth',
    insertText: 'labelWidth',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: 'label \u7684\u5BBD\u5EA6',
  },
  {
    label: 'className',
    insertText: 'className',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: 'className',
  },
  {
    label: 'widget',
    insertText: 'widget',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u6307\u5B9A\u4F7F\u7528\u54EA\u4E2A\u7EC4\u4EF6\u6E32\u67D3',
  },
  {
    label: 'readOnlyWidget',
    insertText: 'readOnlyWidget',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u6307\u5B9A\u53EA\u8BFB\u6A21\u5F0F\u4E0B\u7528\u54EA\u4E2A\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u6E32\u67D3',
  },
  {
    label: 'extra',
    insertText: 'extra',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u5C55\u793A\u66F4\u591A\u8BF4\u660E\u4FE1\u606F',
  },
  {
    label: 'properties',
    insertText: 'properties',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u5305\u88F9\u5BF9\u8C61\u7684\u5B50\u5C5E\u6027(\u53EA\u5728\u5BF9\u8C61\u7EC4\u4EF6\u4E2D\u4F7F\u7528)',
  },
  {
    label: 'items',
    insertText: 'items',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u63CF\u8FF0\u5217\u8868\u4E2D\u6BCF\u4E2Aitem\u7684\u7ED3\u6784(\u53EA\u5728\u5217\u8868\u4E2D\u4F7F\u7528)',
  },
  {
    label: 'enum',
    insertText: 'enum',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u63CF\u8FF0\u679A\u4E3E\u503C\u7684\u503C',
  },
  {
    label: 'enumNames',
    insertText: 'enumNames',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u63CF\u8FF0\u679A\u4E3E\u503C\u7684\u6587\u6848',
  },
  {
    label: 'rules',
    insertText: 'rules',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u6821\u9A8Crules',
  },
  {
    label: 'props',
    insertText: 'enumNames',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u989D\u5916\u7EC4\u4EF6\u5C5E\u6027',
  },
];

export { valueMap, keySuggestions };`,ot=`.markdown p {
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
}`,et=`import React from 'react';
import { Table, Search, withTable, useTable } from 'table-render';
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
  const { refresh, tableState }: any = useTable();

  const searchApi = (params, sorter) => {
    console.group(sorter);
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

  const searchApi2 = (params, sorter) => {
    return request
      .get(
        'https://www.fastmock.site/mock/62ab96ff94bc013592db1f67667e9c76/getTableList/api/basic',
        { params }
      )
      .then(res => {
        // console.log('response:', res);
        if (res && res.data) {
          return {
            rows: res.data.slice(1),
            total: res.data.length - 1,
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
      sorter: true,
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
        api={[
          {
            name: '\u5168\u90E8\u6570\u636E',
            api: searchApi,
          },
          {
            name: '\u6211\u7684\u6570\u636E',
            api: searchApi2,
          },
        ]}
      />
      <Table
        // size="small"
        pagination={{ pageSize: 4 }}
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

export default withTable(Demo);`,lt=`import React from 'react';
import { Table, Search, withTable, useTable } from 'table-render';
import { Tag, Space, message, Tooltip, Button } from 'antd';
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
  },
  'ui:labelWidth': 80,
};

const Demo = () => {
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

  const showData = () => {
    refresh(null, { extra: 1 });
  };

  return (
    <div style={{ background: 'rgb(245,245,245)' }}>
      <Search
        hidden
        schema={schema}
        displayType="row"
        onSearch={search => console.log('onSearch', search)}
        afterSearch={params => console.log('afterSearch', params)}
        api={searchApi}
      />
      <Table
        debug
        columns={columns}
        headerTitle="\u9AD8\u7EA7\u8868\u5355"
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

export default withTable(Demo);`,Bn=`import React from 'react';
import { Table, Search, withTable, useTable } from 'table-render';
import { Tag, Space, message, Tooltip, Button } from 'antd';
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
  },
  'ui:labelWidth': 80,
};

const Demo = () => {
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

  const showData = () => {
    refresh(null, { extra: 1 });
  };

  return (
    <div style={{ background: 'rgb(245,245,245)' }}>
      <Search
        hidden
        schema={schema}
        displayType="row"
        onSearch={search => console.log('onSearch', search)}
        afterSearch={params => console.log('afterSearch', params)}
        api={searchApi}
      />
      <Table
        columns={columns}
        rowKey="id"
      />
    </div>
  );
};

export default withTable(Demo);`,nt=`import React, { useEffect } from 'react';
import { Table, Search, withTable, useTable } from 'table-render';
import { Tag, Space, message, Tooltip, Button } from 'antd';
import { PlusOutlined, InfoCircleOutlined } from '@ant-design/icons';
import request from 'umi-request';
import { history } from 'umi';

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
  const { refresh, tableState, form }: any = useTable();
  useEffect(() => {
    // \u5B9E\u9645\u4F7F\u7528\u65F6queryParam\u4E3Aurl\u4E0A\u53D6\u4E0B\u6765\u7684\u6709\u6548\u53C2\u6570
    // const queryParam = { state: 'open' };
    const queryParam = history.location.query;
    if (queryParam) {
      // form\u5177\u4F53api\u53C2\u8003form-render\u6587\u6863
      form.setValues(queryParam);
    }
  }, []);

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

  const showData = () => {
    refresh(null, { extra: 1 });
  };
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
  const onSearch = search => {
    console.log('onSearch', search);
  };
  const afterSearch = params => {
    const formData = form.getValues();
    history.replace({
      pathname: '/table-render/demo',
      query: formData,
    });
  };
  return (
    <div style={{ background: 'rgb(245,245,245)' }}>
      <Search
        schema={schema}
        displayType="row"
        onSearch={onSearch}
        afterSearch={afterSearch}
        api={searchApi}
      />
      <Table
        columns={columns}
        headerTitle="url\u5E26\u53C2\u67E5\u8BE2"
        rowKey="id"
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
    </div>
  );
};

export default withTable(Demo);`,$n=`import React, { useState, useRef } from 'react';
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

export default Demo;`,ut=`import React from 'react';
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

export default Demo;`,Mn=`import React from 'react';
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
          <Sidebar fixedName />
        </div>
      </Provider>
    </div>
  );
};

export default Demo;`,Pn=`.fr-generator-playground {
  margin: 0 -24px;

  .hide-demo {
    display: none;
  }
}`,Vn=`import React, { useState, useRef } from 'react';
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

export default Demo;`,tt=`import React, { useState, useRef } from 'react';
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
        extraButtons={[{ text: '\u53BBplayground\u9A8C\u8BC1', onClick: goToFrPlayground }]}
        onChange={data => console.log('data:change', data)}
        onSchemaChange={schema => console.log('schema:change', schema)}
      />
    </div>
  );
};

export default Demo;`,Jn=un.default={"guide-card":{component:Object(W.dynamic)({loader:function(){var I=Object(V.a)(b.a.mark(function T(){return b.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"oLxE"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},T)}));function P(){return I.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:ue}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"card-render":{version:"0.1.2"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"0.x"}},identifier:"guide-card"}},"chart-render-demo":{component:Object(W.dynamic)({loader:function(){var I=Object(V.a)(b.a.mark(function T(){var p,i,g,C,O,s,h;return b.a.wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return s=function(j,c){if(!c&&j&&j.__esModule)return j;if(j===null||typeof j!="object"&&typeof j!="function")return{default:j};var E=O(c);if(E&&E.has(j))return E.get(j);var m={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in j)if(v!=="default"&&Object.prototype.hasOwnProperty.call(j,v)){var d=n?Object.getOwnPropertyDescriptor(j,v):null;d&&(d.get||d.set)?Object.defineProperty(m,v,d):m[v]=j[v]}return m.default=j,E&&E.set(j,m),m},O=function(j){if(typeof WeakMap!="function")return null;var c=new WeakMap,E=new WeakMap;return(O=function(n){return n?E:c})(j)},p=e("K+nK"),w.t0=p,w.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return w.t1=w.sent,i=(0,w.t0)(w.t1),w.t2=s,w.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return w.t3=w.sent,g=(0,w.t2)(w.t3),w.next=15,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 15:return C=w.sent,h=function(){var j=(0,g.useState)("Line"),c=(0,i.default)(j,2),E=c[0],m=c[1],n={Line:C.Line,Column:C.Column,PivotTable:C.PivotTable}[E];return g.default.createElement("div",null,g.default.createElement("div",{style:{marginBottom:10}},g.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return m("Line")}},"\u6298\u7EBF\u56FE"),g.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return m("Column")}},"\u67F1\u72B6\u56FE"),g.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return m("PivotTable")}},"\u4EA4\u53C9\u8868")),g.default.createElement(n,{meta:[{id:"date",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF",isDim:!1},{id:"uv",name:"\u8BBF\u5BA2\u6570",isDim:!1}],data:[{date:"20200101",pv:100,uv:50},{date:"20200102",pv:120,uv:60},{date:"20200103",pv:140,uv:70},{date:"20200104",pv:160,uv:80}]}))},w.abrupt("return",h);case 18:case"end":return w.stop()}},T)}));function P(){return I.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"chart-render-demo"}},"column-demo":{component:Object(W.dynamic)({loader:function(){var I=Object(V.a)(b.a.mark(function T(){var p,i,g,C;return b.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return p=e("K+nK"),s.t0=p,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,i=(0,s.t0)(s.t1),s.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return g=s.sent,C=function(){return i.default.createElement(g.Column,{meta:[{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{pv:50,uv:20}]})},s.abrupt("return",C);case 11:case"end":return s.stop()}},T)}));function P(){return I.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[{ pv: 50, uv: 20 }]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo"}},"column-demo-1":{component:Object(W.dynamic)({loader:function(){var I=Object(V.a)(b.a.mark(function T(){var p,i,g,C;return b.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return p=e("K+nK"),s.t0=p,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,i=(0,s.t0)(s.t1),s.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return g=s.sent,C=function(){return i.default.createElement(g.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},s.abrupt("return",C);case 11:case"end":return s.stop()}},T)}));function P(){return I.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-1"}},"column-demo-2":{component:Object(W.dynamic)({loader:function(){var I=Object(V.a)(b.a.mark(function T(){var p,i,g,C;return b.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return p=e("K+nK"),s.t0=p,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,i=(0,s.t0)(s.t1),s.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return g=s.sent,C=function(){return i.default.createElement(g.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},s.abrupt("return",C);case 11:case"end":return s.stop()}},T)}));function P(){return I.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-2"}},"column-demo-3":{component:Object(W.dynamic)({loader:function(){var I=Object(V.a)(b.a.mark(function T(){var p,i,g,C;return b.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return p=e("K+nK"),s.t0=p,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,i=(0,s.t0)(s.t1),s.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return g=s.sent,C=function(){return i.default.createElement(g.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},s.abrupt("return",C);case 11:case"end":return s.stop()}},T)}));function P(){return I.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-3"}},"column-demo-4":{component:Object(W.dynamic)({loader:function(){var I=Object(V.a)(b.a.mark(function T(){var p,i,g,C;return b.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return p=e("K+nK"),s.t0=p,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,i=(0,s.t0)(s.t1),s.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return g=s.sent,C=function(){return i.default.createElement(g.Column,{inverted:!0,label:{position:"middle",layout:[{type:"interval-adjust-position"},{type:"interval-hide-overlap"},{type:"adjust-color"}]},meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},s.abrupt("return",C);case 11:case"end":return s.stop()}},T)}));function P(){return I.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-4"}},"line-demo":{component:Object(W.dynamic)({loader:function(){var I=Object(V.a)(b.a.mark(function T(){var p,i,g,C;return b.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return p=e("K+nK"),s.t0=p,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,i=(0,s.t0)(s.t1),s.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return g=s.sent,C=function(){return i.default.createElement(g.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},s.abrupt("return",C);case 11:case"end":return s.stop()}},T)}));function P(){return I.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo"}},"line-demo-1":{component:Object(W.dynamic)({loader:function(){var I=Object(V.a)(b.a.mark(function T(){var p,i,g,C;return b.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return p=e("K+nK"),s.t0=p,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,i=(0,s.t0)(s.t1),s.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return g=s.sent,C=function(){return i.default.createElement(g.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},s.abrupt("return",C);case 11:case"end":return s.stop()}},T)}));function P(){return I.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-1"}},"line-demo-2":{component:Object(W.dynamic)({loader:function(){var I=Object(V.a)(b.a.mark(function T(){var p,i,g,C;return b.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return p=e("K+nK"),s.t0=p,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,i=(0,s.t0)(s.t1),s.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return g=s.sent,C=function(){return i.default.createElement(g.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"},{id:"pv",name:"\u8BBF\u95EE\u91CF"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20,pv:120},{ds:"2020-12-31",page:"\u9996\u9875",uv:120,pv:1120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21,pv:121},{ds:"2021-01-01",page:"\u9996\u9875",uv:121,pv:1121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15,pv:115},{ds:"2021-01-02",page:"\u9996\u9875",uv:115,pv:1115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40,pv:140},{ds:"2021-01-03",page:"\u9996\u9875",uv:140,pv:1140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31,pv:131},{ds:"2021-01-04",page:"\u9996\u9875",uv:131,pv:1131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32,pv:132},{ds:"2021-01-05",page:"\u9996\u9875",uv:132,pv:1132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30,pv:130},{ds:"2021-01-06",page:"\u9996\u9875",uv:130,pv:1130}]})},s.abrupt("return",C);case 11:case"end":return s.stop()}},T)}));function P(){return I.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-2"}},"line-demo-3":{component:Object(W.dynamic)({loader:function(){var I=Object(V.a)(b.a.mark(function T(){var p,i,g,C;return b.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return p=e("K+nK"),s.t0=p,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,i=(0,s.t0)(s.t1),s.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return g=s.sent,C=function(){return i.default.createElement(g.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},s.abrupt("return",C);case 11:case"end":return s.stop()}},T)}));function P(){return I.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-3"}},"line-demo-4":{component:Object(W.dynamic)({loader:function(){var I=Object(V.a)(b.a.mark(function T(){var p,i,g,C;return b.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return p=e("K+nK"),s.t0=p,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,i=(0,s.t0)(s.t1),s.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return g=s.sent,C=function(){return i.default.createElement(g.Line,{withArea:!0,isStack:!0,isPercent:!0,meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},s.abrupt("return",C);case 11:case"end":return s.stop()}},T)}));function P(){return I.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-4"}},"pivot-table-demo":{component:Object(W.dynamic)({loader:function(){var I=Object(V.a)(b.a.mark(function T(){var p,i,g,C;return b.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return p=e("K+nK"),s.t0=p,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,i=(0,s.t0)(s.t1),s.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return g=s.sent,C=function(){return i.default.createElement(g.PivotTable,{style:{maxHeight:400,overflow:"auto"},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},s.abrupt("return",C);case 11:case"end":return s.stop()}},T)}));function P(){return I.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo"}},"pivot-table-demo-1":{component:Object(W.dynamic)({loader:function(){var I=Object(V.a)(b.a.mark(function T(){var p,i,g,C;return b.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return p=e("K+nK"),s.t0=p,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,i=(0,s.t0)(s.t1),s.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return g=s.sent,C=function(){return i.default.createElement(g.PivotTable,{style:{maxHeight:400,overflow:"auto"},cellRender:function(w,M,j){return i.default.createElement("div",null,i.default.createElement("p",null,"\u53C2\u6570\u8868\uFF1A"),i.default.createElement("p",{style:{color:["red","orange","yellow","green","blue"][Object.keys(M).length]}},w),i.default.createElement("p",null,JSON.stringify(M)),i.default.createElement("p",null,JSON.stringify(j)))},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},s.abrupt("return",C);case 11:case"end":return s.stop()}},T)}));function P(){return I.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-1"}},"pivot-table-demo-2":{component:Object(W.dynamic)({loader:function(){var I=Object(V.a)(b.a.mark(function T(){var p,i,g,C,O,s,h;return b.a.wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return s=function(j,c){if(!c&&j&&j.__esModule)return j;if(j===null||typeof j!="object"&&typeof j!="function")return{default:j};var E=O(c);if(E&&E.has(j))return E.get(j);var m={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in j)if(v!=="default"&&Object.prototype.hasOwnProperty.call(j,v)){var d=n?Object.getOwnPropertyDescriptor(j,v):null;d&&(d.get||d.set)?Object.defineProperty(m,v,d):m[v]=j[v]}return m.default=j,E&&E.set(j,m),m},O=function(j){if(typeof WeakMap!="function")return null;var c=new WeakMap,E=new WeakMap;return(O=function(n){return n?E:c})(j)},p=e("K+nK"),w.t0=p,w.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return w.t1=w.sent,i=(0,w.t0)(w.t1),w.t2=s,w.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return w.t3=w.sent,g=(0,w.t2)(w.t3),w.next=15,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 15:return C=w.sent,h=function(){var j=(0,g.useState)(!1),c=(0,i.default)(j,2),E=c[0],m=c[1];return g.default.createElement(g.default.Fragment,null,g.default.createElement("label",null,"\u53EF\u5C55\u5F00/\u6536\u7F29\uFF1A",g.default.createElement("input",{type:"checkbox",value:E,onChange:function(){return m(!E)}})),g.default.createElement(C.PivotTable,{leftExpandable:E,showSubtotal:!1,meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]}))},w.abrupt("return",h);case 18:case"end":return w.stop()}},T)}));function P(){return I.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-2"}},"OldSchemaTransformer-demo":{component:Object(W.dynamic)({loader:function(){var I=Object(V.a)(b.a.mark(function T(){var p,i,g,C,O,s,h,o,w,M,j,c,E;return b.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return w=function(d,r){if(!r&&d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var l=o(r);if(l&&l.has(d))return l.get(d);var f={},B=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var A in d)if(A!=="default"&&Object.prototype.hasOwnProperty.call(d,A)){var L=B?Object.getOwnPropertyDescriptor(d,A):null;L&&(L.get||L.set)?Object.defineProperty(f,A,L):f[A]=d[A]}return f.default=d,l&&l.set(d,f),f},o=function(d){if(typeof WeakMap!="function")return null;var r=new WeakMap,l=new WeakMap;return(o=function(B){return B?l:r})(d)},p=e("K+nK"),n.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return n.t0=p,n.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return n.t1=n.sent,i=(0,n.t0)(n.t1),n.t2=p,n.next=13,Promise.resolve().then(e.bind(null,"tJVT"));case 13:return n.t3=n.sent,g=(0,n.t2)(n.t3),n.next=17,Promise.all([e.e(3),e.e(19)]).then(e.t.bind(null,"cUip",7));case 17:return n.t4=p,n.next=20,Promise.all([e.e(0),e.e(8),e.e(18),e.e(20)]).then(e.t.bind(null,"iJl9",7));case 20:return n.t5=n.sent,C=(0,n.t4)(n.t5),n.t6=w,n.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return n.t7=n.sent,O=(0,n.t6)(n.t7),n.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 29:return s=n.sent,n.next=32,Promise.all([e.e(22),e.e(25)]).then(e.bind(null,"7t+U"));case 32:return h=n.sent,M=C.default.TextArea,j={type:"object",properties:{number:{title:"\u6570\u5B57\u8F93\u5165\u6846",type:"number","ui:disabled":!0},checkbox:{title:"\u662F\u5426\u9009\u62E9",type:"boolean","ui:widget":"switch"}},required:["number"]},c=function(){var d=(0,O.useState)(JSON.stringify(j)),r=(0,g.default)(d,2),l=r[0],f=r[1],B=(0,O.useState)({}),A=(0,g.default)(B,2),L=A[0],pe=A[1],Ce=function(){try{var An=(0,h.updateSchemaToNewVersion)(JSON.parse(l));pe(An)}catch(dt){console.log(dt)}},sn=function(An){f(An.target.value)},vn=function(){f(JSON.stringify(JSON.parse(l),null,2))};return O.default.createElement("div",null,O.default.createElement("div",null,"\u586B\u5165\u65E7\u7248schema\uFF1A"),O.default.createElement(M,{style:{minHeight:400,marginTop:12,marginBottom:12},value:l,onChange:sn}),O.default.createElement(i.default,{style:{marginRight:12},onClick:vn},"\u683C\u5F0F\u5316\u65E7schema"),O.default.createElement(i.default,{type:"primary",onClick:Ce},"\u751F\u6210\u65B0\u7248schema"),O.default.createElement(M,{style:{minHeight:400,marginTop:12},value:JSON.stringify(L,null,2)}))},E=c,n.abrupt("return",E);case 38:case"end":return n.stop()}},T)}));function P(){return I.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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

export default Translator;`},"packages/form-render/src/utils.js":{import:"../../packages/form-render/src/utils.js",content:J}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"},"lodash-es":{version:"4.17.21"}},identifier:"OldSchemaTransformer-demo"}},"form-render-demo":{component:Object(W.dynamic)({loader:function(){var I=Object(V.a)(b.a.mark(function T(){var p,i,g,C,O,s,h,o,w,M;return b.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return h=function(m,n){if(!n&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var v=s(n);if(v&&v.has(m))return v.get(m);var d={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in m)if(l!=="default"&&Object.prototype.hasOwnProperty.call(m,l)){var f=r?Object.getOwnPropertyDescriptor(m,l):null;f&&(f.get||f.set)?Object.defineProperty(d,l,f):d[l]=m[l]}return d.default=m,v&&v.set(m,d),d},s=function(m){if(typeof WeakMap!="function")return null;var n=new WeakMap,v=new WeakMap;return(s=function(r){return r?v:n})(m)},p=e("K+nK"),c.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return c.t0=p,c.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return c.t1=c.sent,i=(0,c.t0)(c.t1),c.t2=p,c.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return c.t3=c.sent,g=(0,c.t2)(c.t3),c.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 17:return C=c.sent,c.t4=h,c.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 21:return c.t5=c.sent,O=(0,c.t4)(c.t5),o={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},w=function(){var m=(0,O.useForm)(),n=function(d,r){console.log("formData:",d,"errors",r)};return g.default.createElement("div",null,g.default.createElement(O.default,{form:m,schema:o,onFinish:n}),g.default.createElement(i.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4"))},M=w,c.abrupt("return",M);case 27:case"end":return c.stop()}},T)}));function P(){return I.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
  const onFinish = (formData, errors) => {
    console.log('formData:', formData, 'errors', errors);
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo"}},"form-render-demo-1":{component:Object(W.dynamic)({loader:function(){var I=Object(V.a)(b.a.mark(function T(){var p,i,g,C,O,s,h,o,w,M,j,c,E,m;return b.a.wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return j=function(r,l){if(!l&&r&&r.__esModule)return r;if(r===null||typeof r!="object"&&typeof r!="function")return{default:r};var f=M(l);if(f&&f.has(r))return f.get(r);var B={},A=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var L in r)if(L!=="default"&&Object.prototype.hasOwnProperty.call(r,L)){var pe=A?Object.getOwnPropertyDescriptor(r,L):null;pe&&(pe.get||pe.set)?Object.defineProperty(B,L,pe):B[L]=r[L]}return B.default=r,f&&f.set(r,B),B},M=function(r){if(typeof WeakMap!="function")return null;var l=new WeakMap,f=new WeakMap;return(M=function(A){return A?f:l})(r)},p=e("K+nK"),v.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return v.t0=p,v.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return v.t1=v.sent,i=(0,v.t0)(v.t1),v.t2=p,v.next=13,e.e(84).then(e.bind(null,"fWQN"));case 13:return v.t3=v.sent,g=(0,v.t2)(v.t3),v.t4=p,v.next=18,e.e(85).then(e.bind(null,"mtLc"));case 18:return v.t5=v.sent,C=(0,v.t4)(v.t5),v.t6=p,v.next=23,e.e(76).then(e.bind(null,"yKVA"));case 23:return v.t7=v.sent,O=(0,v.t6)(v.t7),v.t8=p,v.next=28,e.e(75).then(e.bind(null,"879j"));case 28:return v.t9=v.sent,s=(0,v.t8)(v.t9),v.t10=p,v.next=33,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 33:return v.t11=v.sent,h=(0,v.t10)(v.t11),v.next=37,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 37:return o=v.sent,v.t12=j,v.next=41,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 41:return v.t13=v.sent,w=(0,v.t12)(v.t13),c={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},E=function(d){(0,O.default)(l,d);var r=(0,s.default)(l);function l(){var f;(0,g.default)(this,l);for(var B=arguments.length,A=new Array(B),L=0;L<B;L++)A[L]=arguments[L];return f=r.call.apply(r,[this].concat(A)),f.onFinish=function(pe,Ce){console.log("formData:",pe,"errors",Ce)},f}return(0,C.default)(l,[{key:"render",value:function(){var B=this.props.form;return h.default.createElement("div",null,h.default.createElement(w.default,{form:B,schema:c,onFinish:this.onFinish}),h.default.createElement(i.default,{type:"primary",onClick:B.submit},"\u63D0\u4EA4"))}}]),l}(h.default.Component),m=(0,w.connectForm)(E),v.abrupt("return",m);case 47:case"end":return v.stop()}},T)}));function P(){return I.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
  onFinish = (formData, errors) => {
    console.log('formData:', formData, 'errors', errors);
  };

  render() {
    const { form } = this.props;
    return (
      <div>
        <FormRender form={form} schema={schema} onFinish={this.onFinish} />
        <Button type="primary" onClick={form.submit}>
          \u63D0\u4EA4
        </Button>
      </div>
    );
  }
}

export default connectForm(Demo);`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo-1"}},"form-render-demo-2":{component:Object(W.dynamic)({loader:function(){var I=Object(V.a)(b.a.mark(function T(){var p,i,g,C,O,s,h,o,w,M;return b.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return h=function(m,n){if(!n&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var v=s(n);if(v&&v.has(m))return v.get(m);var d={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in m)if(l!=="default"&&Object.prototype.hasOwnProperty.call(m,l)){var f=r?Object.getOwnPropertyDescriptor(m,l):null;f&&(f.get||f.set)?Object.defineProperty(d,l,f):d[l]=m[l]}return d.default=m,v&&v.set(m,d),d},s=function(m){if(typeof WeakMap!="function")return null;var n=new WeakMap,v=new WeakMap;return(s=function(r){return r?v:n})(m)},p=e("K+nK"),c.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return c.t0=p,c.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return c.t1=c.sent,i=(0,c.t0)(c.t1),c.t2=p,c.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return c.t3=c.sent,g=(0,c.t2)(c.t3),c.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 17:return C=c.sent,c.t4=h,c.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 21:return c.t5=c.sent,O=(0,c.t4)(c.t5),o={displayType:"row",labelWidth:60,type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F",type:"range",format:"date"},showSetting:{title:"\u662F\u5426\u5C55\u793A\u7F51\u5740",type:"boolean"},siteUrl:{title:"\u7F51\u5740",type:"string",placeholder:"\u6B64\u5904\u5FC5\u586B",hidden:"{{formData.showSetting !== true}}",required:!0,props:{addonBefore:"https://",addonAfter:".com"}}}},w=function(){var m=(0,O.useForm)(),n=function(d,r){r.length>0?alert("errors:"+JSON.stringify(r)):alert("formData:"+JSON.stringify(d,null,2))};return g.default.createElement("div",null,g.default.createElement(O.default,{form:m,schema:o,onFinish:n}),g.default.createElement(i.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4"))},M=w,c.abrupt("return",M);case 27:case"end":return c.stop()}},T)}));function P(){return I.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
    showSetting: {
      title: '\u662F\u5426\u5C55\u793A\u7F51\u5740',
      type: 'boolean',
    },
    siteUrl: {
      title: '\u7F51\u5740',
      type: 'string',
      placeholder: '\u6B64\u5904\u5FC5\u586B',
      hidden: '{{formData.showSetting !== true}}',
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-demo-2"}},"display-demo":{component:Object(W.dynamic)({loader:function(){var I=Object(V.a)(b.a.mark(function T(){var p,i,g,C,O;return b.a.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return p=e("K+nK"),h.t0=p,h.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return h.t1=h.sent,i=(0,h.t0)(h.t1),h.t2=p,h.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return h.t3=h.sent,g=(0,h.t2)(h.t3),C=function(w){return{type:"object",displayType:w,properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},objectName:{title:"\u5BF9\u8C61",bind:"obj",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},O=function(){return i.default.createElement("div",null,i.default.createElement("h2",null,"display: row"),i.default.createElement(g.default,{schema:C("row")}),i.default.createElement("h2",null,"display: column"),i.default.createElement(g.default,{schema:C("column")}))},h.abrupt("return",O);case 14:case"end":return h.stop()}},T)}));function P(){return I.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`},"demo/display.js":{import:"../demo/display",content:Te}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo"}},"display-demo-1":{component:Object(W.dynamic)({loader:function(){var I=Object(V.a)(b.a.mark(function T(){var p,i,g,C,O;return b.a.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return p=e("K+nK"),h.t0=p,h.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return h.t1=h.sent,i=(0,h.t0)(h.t1),h.t2=p,h.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return h.t3=h.sent,g=(0,h.t2)(h.t3),C={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0},check:{title:"box",type:"boolean",default:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},O=function(){return i.default.createElement(g.default,{readOnly:!0,schema:C})},h.abrupt("return",O);case 14:case"end":return h.stop()}},T)}));function P(){return I.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form readOnly schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:Te}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-1"}},"display-demo-2":{component:Object(W.dynamic)({loader:function(){var I=Object(V.a)(b.a.mark(function T(){var p,i,g,C,O;return b.a.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return p=e("K+nK"),h.t0=p,h.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return h.t1=h.sent,i=(0,h.t0)(h.t1),h.t2=p,h.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return h.t3=h.sent,g=(0,h.t2)(h.t3),C={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0,width:"50%"},check:{title:"box",type:"boolean",default:!0,width:"50%",labelWidth:6},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},O=function(){return i.default.createElement(g.default,{labelWidth:"200",schema:C})},h.abrupt("return",O);case 14:case"end":return h.stop()}},T)}));function P(){return I.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form labelWidth="200" schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:Te}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-2"}},"display-demo-3":{component:Object(W.dynamic)({loader:function(){var I=Object(V.a)(b.a.mark(function T(){var p,i,g,C,O,s;return b.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return p=e("K+nK"),o.t0=p,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.t2=p,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,g=(0,o.t2)(o.t3),C={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},O=function(){return i.default.createElement(g.default,{schema:C})},s=O,o.abrupt("return",s);case 15:case"end":return o.stop()}},T)}));function P(){return I.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Te}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-3"}},"display-demo-4":{component:Object(W.dynamic)({loader:function(){var I=Object(V.a)(b.a.mark(function T(){var p,i,g,C,O,s;return b.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return p=e("K+nK"),o.t0=p,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.t2=p,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,g=(0,o.t2)(o.t3),C={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},O=function(){return i.default.createElement(g.default,{schema:C})},s=O,o.abrupt("return",s);case 15:case"end":return o.stop()}},T)}));function P(){return I.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Te}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-4"}},"display-demo-5":{component:Object(W.dynamic)({loader:function(){var I=Object(V.a)(b.a.mark(function T(){var p,i,g,C,O,s;return b.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return p=e("K+nK"),o.t0=p,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.t2=p,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,g=(0,o.t2)(o.t3),C={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},O=function(){return i.default.createElement(g.default,{schema:C})},s=O,o.abrupt("return",s);case 15:case"end":return o.stop()}},T)}));function P(){return I.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Te}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-5"}},"display-demo-6":{component:Object(W.dynamic)({loader:function(){var I=Object(V.a)(b.a.mark(function T(){var p,i,g,C,O,s;return b.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return p=e("K+nK"),o.t0=p,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.t2=p,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,g=(0,o.t2)(o.t3),C={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",props:{hideMove:!0},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},O=function(){return i.default.createElement(g.default,{schema:C})},s=O,o.abrupt("return",s);case 15:case"end":return o.stop()}},T)}));function P(){return I.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Te}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-6"}},"form-methods-demo":{component:Object(W.dynamic)({loader:function(){var I=Object(V.a)(b.a.mark(function T(){var p,i,g,C,O,s,h,o,w,M,j,c,E;return b.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return j=function(d,r){if(!r&&d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var l=M(r);if(l&&l.has(d))return l.get(d);var f={},B=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var A in d)if(A!=="default"&&Object.prototype.hasOwnProperty.call(d,A)){var L=B?Object.getOwnPropertyDescriptor(d,A):null;L&&(L.get||L.set)?Object.defineProperty(f,A,L):f[A]=d[A]}return f.default=d,l&&l.set(d,f),f},M=function(d){if(typeof WeakMap!="function")return null;var r=new WeakMap,l=new WeakMap;return(M=function(B){return B?l:r})(d)},p=e("K+nK"),n.next=5,e.e(23).then(e.t.bind(null,"lfLe",7));case 5:return n.t0=p,n.next=8,e.e(24).then(e.t.bind(null,"Cp9S",7));case 8:return n.t1=n.sent,i=(0,n.t0)(n.t1),n.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return n.t2=p,n.next=15,e.e(8).then(e.t.bind(null,"4IMT",7));case 15:return n.t3=n.sent,g=(0,n.t2)(n.t3),n.next=19,e.e(15).then(e.t.bind(null,"tL+A",7));case 19:return n.t4=p,n.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return n.t5=n.sent,C=(0,n.t4)(n.t5),n.t6=p,n.next=27,Promise.resolve().then(e.bind(null,"tJVT"));case 27:return n.t7=n.sent,O=(0,n.t6)(n.t7),n.t8=j,n.next=32,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 32:return n.t9=n.sent,s=(0,n.t8)(n.t9),n.next=36,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 36:return h=n.sent,n.t10=j,n.next=40,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 40:return n.t11=n.sent,o=(0,n.t10)(n.t11),n.next=44,e.e(16).then(e.bind(null,"OH0R"));case 44:return w=n.sent,c=function(){var d=(0,o.useForm)(),r=(0,s.useState)({}),l=(0,O.default)(r,2),f=l[0],B=l[1],A=function(){(0,w.fakeApi)("xxx/getForm").then(function(Ce){d.setValues({input1:"hello world",select1:"c"})})};(0,s.useEffect)(function(){(0,w.delay)(1e3).then(function(pe){B({type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}})})},[]);var L=function(Ce,sn){sn.length>0?C.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(sn.map(function(vn){return vn.name}))):(0,w.fakeApi)("xxx/submit",Ce).then(function(vn){return C.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})};return s.default.createElement("div",{style:{width:"400px"}},s.default.createElement(o.default,{form:d,schema:f,onFinish:L}),s.default.createElement(i.default,null,s.default.createElement(g.default,{onClick:A},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),s.default.createElement(g.default,{type:"primary",onClick:d.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},E=c,n.abrupt("return",E);case 48:case"end":return n.stop()}},T)}));function P(){return I.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Fe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo"}},"form-methods-demo-1":{component:Object(W.dynamic)({loader:function(){var I=Object(V.a)(b.a.mark(function T(){var p,i,g,C,O,s,h,o,w,M,j,c,E;return b.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return M=function(d,r){if(!r&&d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var l=w(r);if(l&&l.has(d))return l.get(d);var f={},B=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var A in d)if(A!=="default"&&Object.prototype.hasOwnProperty.call(d,A)){var L=B?Object.getOwnPropertyDescriptor(d,A):null;L&&(L.get||L.set)?Object.defineProperty(f,A,L):f[A]=d[A]}return f.default=d,l&&l.set(d,f),f},w=function(d){if(typeof WeakMap!="function")return null;var r=new WeakMap,l=new WeakMap;return(w=function(B){return B?l:r})(d)},p=e("K+nK"),n.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return n.t0=p,n.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return n.t1=n.sent,i=(0,n.t0)(n.t1),n.t2=p,n.next=13,Promise.resolve().then(e.bind(null,"PpiC"));case 13:return n.t3=n.sent,g=(0,n.t2)(n.t3),n.next=17,e.e(15).then(e.t.bind(null,"tL+A",7));case 17:return n.t4=p,n.next=20,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 20:return n.t5=n.sent,C=(0,n.t4)(n.t5),n.t6=p,n.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return n.t7=n.sent,O=(0,n.t6)(n.t7),n.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 29:return s=n.sent,n.t8=M,n.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 33:return n.t9=n.sent,h=(0,n.t8)(n.t9),n.next=37,e.e(16).then(e.bind(null,"OH0R"));case 37:return o=n.sent,j={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},c=function(){var d=(0,h.useForm)(),r=function(B,A){A.length>0?C.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(A.map(function(L){return L.name}))):(0,o.fakeApi)("xxx/submit",B).then(function(L){return C.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},l=function(B){var A=B.data,L=B.errors,pe=B.schema,Ce=(0,g.default)(B,["data","errors","schema"]);return(0,o.fakeApi)("xxx/validation").then(function(sn){return{name:"select1",error:["\u5916\u90E8\u6821\u9A8C\u9519\u8BEF"]}})};return O.default.createElement("div",{style:{width:"400px"}},O.default.createElement(h.default,{form:d,schema:j,beforeFinish:l,onFinish:r}),O.default.createElement(i.default,{type:"primary",onClick:d.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},E=c,n.abrupt("return",E);case 42:case"end":return n.stop()}},T)}));function P(){return I.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Fe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-1"}},"form-methods-demo-2":{component:Object(W.dynamic)({loader:function(){var I=Object(V.a)(b.a.mark(function T(){var p,i,g,C,O,s,h,o,w,M,j,c,E;return b.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return M=function(d,r){if(!r&&d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var l=w(r);if(l&&l.has(d))return l.get(d);var f={},B=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var A in d)if(A!=="default"&&Object.prototype.hasOwnProperty.call(d,A)){var L=B?Object.getOwnPropertyDescriptor(d,A):null;L&&(L.get||L.set)?Object.defineProperty(f,A,L):f[A]=d[A]}return f.default=d,l&&l.set(d,f),f},w=function(d){if(typeof WeakMap!="function")return null;var r=new WeakMap,l=new WeakMap;return(w=function(B){return B?l:r})(d)},p=e("K+nK"),n.next=5,e.e(23).then(e.t.bind(null,"lfLe",7));case 5:return n.t0=p,n.next=8,e.e(24).then(e.t.bind(null,"Cp9S",7));case 8:return n.t1=n.sent,i=(0,n.t0)(n.t1),n.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return n.t2=p,n.next=15,e.e(8).then(e.t.bind(null,"4IMT",7));case 15:return n.t3=n.sent,g=(0,n.t2)(n.t3),n.next=19,e.e(15).then(e.t.bind(null,"tL+A",7));case 19:return n.t4=p,n.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return n.t5=n.sent,C=(0,n.t4)(n.t5),n.t6=p,n.next=27,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 27:return n.t7=n.sent,O=(0,n.t6)(n.t7),n.next=31,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 31:return s=n.sent,n.t8=M,n.next=35,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 35:return n.t9=n.sent,h=(0,n.t8)(n.t9),n.next=39,e.e(16).then(e.bind(null,"OH0R"));case 39:return o=n.sent,j={type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F\u8303\u56F4",type:"range",format:"date"}}},c=function(){var d=(0,h.useForm)(),r=function(B,A){A.length>0?C.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(A.map(function(L){return L.name}))):(0,o.fakeApi)("xxx/submit",B).then(function(L){return C.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},l=function(){(0,o.fakeApi)("xxx/getForm").then(function(B){d.setValues({startDate:"2020-04-04",endDate:"2020-04-24"})})};return O.default.createElement("div",{style:{width:"400px"}},O.default.createElement(h.default,{form:d,schema:j,onFinish:r}),O.default.createElement(i.default,null,O.default.createElement(g.default,{onClick:l},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),O.default.createElement(g.default,{type:"primary",onClick:d.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},E=c,n.abrupt("return",E);case 44:case"end":return n.stop()}},T)}));function P(){return I.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Fe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-2"}},"form-methods-demo-3":{component:Object(W.dynamic)({loader:function(){var I=Object(V.a)(b.a.mark(function T(){var p,i,g,C,O,s,h,o,w,M,j,c;return b.a.wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return w=function(v,d){if(!d&&v&&v.__esModule)return v;if(v===null||typeof v!="object"&&typeof v!="function")return{default:v};var r=o(d);if(r&&r.has(v))return r.get(v);var l={},f=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var B in v)if(B!=="default"&&Object.prototype.hasOwnProperty.call(v,B)){var A=f?Object.getOwnPropertyDescriptor(v,B):null;A&&(A.get||A.set)?Object.defineProperty(l,B,A):l[B]=v[B]}return l.default=v,r&&r.set(v,l),l},o=function(v){if(typeof WeakMap!="function")return null;var d=new WeakMap,r=new WeakMap;return(o=function(f){return f?r:d})(v)},p=e("K+nK"),m.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return m.t0=p,m.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return m.t1=m.sent,i=(0,m.t0)(m.t1),m.next=12,e.e(15).then(e.t.bind(null,"tL+A",7));case 12:return m.t2=p,m.next=15,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 15:return m.t3=m.sent,g=(0,m.t2)(m.t3),m.t4=w,m.next=20,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 20:return m.t5=m.sent,C=(0,m.t4)(m.t5),m.next=24,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 24:return O=m.sent,m.t6=w,m.next=28,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 28:return m.t7=m.sent,s=(0,m.t6)(m.t7),m.next=32,e.e(16).then(e.bind(null,"OH0R"));case 32:return h=m.sent,M={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select1:{title:"\u5355\u9009",type:"string",widget:"select"}}}}},j=function(){var v=(0,s.useForm)(),d=function(){v.setSchemaByPath("obj1.select1",{enum:["east","south","west","north"],enumNames:["\u4E1C","\u5357","\u897F","\u5317"]})},r=function(f,B){B.length>0?g.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(B.map(function(A){return A.name}))):g.default.info(JSON.stringify(f))};return C.default.createElement("div",{style:{width:"400px"}},C.default.createElement(s.default,{form:v,schema:M,onMount:d,onFinish:r}),C.default.createElement(i.default,{type:"primary",onClick:v.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},c=j,m.abrupt("return",c);case 37:case"end":return m.stop()}},T)}));function P(){return I.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Fe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-3"}},"function-demo":{component:Object(W.dynamic)({loader:function(){var I=Object(V.a)(b.a.mark(function T(){var p,i,g,C,O,s,h,o;return b.a.wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return O=function(c,E){if(!E&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var m=C(E);if(m&&m.has(c))return m.get(c);var n={},v=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in c)if(d!=="default"&&Object.prototype.hasOwnProperty.call(c,d)){var r=v?Object.getOwnPropertyDescriptor(c,d):null;r&&(r.get||r.set)?Object.defineProperty(n,d,r):n[d]=c[d]}return n.default=c,m&&m.set(c,n),n},C=function(c){if(typeof WeakMap!="function")return null;var E=new WeakMap,m=new WeakMap;return(C=function(v){return v?m:E})(c)},p=e("K+nK"),M.t0=p,M.next=6,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 6:return M.t1=M.sent,i=(0,M.t0)(M.t1),M.t2=O,M.next=11,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 11:return M.t3=M.sent,g=(0,M.t2)(M.t3),s={type:"object",properties:{checkbox1:{title:"\u5C55\u793A\u66F4\u591A\u5185\u5BB9",type:"boolean"},select1:{title:"\u8BF7\u5047\u539F\u56E0",type:"string",enum:["a","b","c"],enumNames:["\u75C5\u5047","\u6709\u4E8B","\u5176\u5B83 (\u9700\u6CE8\u660E\u5177\u4F53\u539F\u56E0)"],hidden:"{{formData.checkbox1 !== true}}",widget:"radio"},input1:{title:"\u5177\u4F53\u539F\u56E0",type:"string",format:"textarea",hidden:'{{rootValue.checkbox1 !== true || formData.select1 !== "c"}}'}}},h=function(){var c=(0,g.useForm)();return i.default.createElement(g.default,{form:c,schema:s})},o=h,M.abrupt("return",o);case 17:case"end":return M.stop()}},T)}));function P(){return I.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',
  properties: {
    checkbox1: {
      title: '\u5C55\u793A\u66F4\u591A\u5185\u5BB9',
      type: 'boolean',
    },
    select1: {
      title: '\u8BF7\u5047\u539F\u56E0',
      type: 'string',
      enum: ['a', 'b', 'c'],
      enumNames: ['\u75C5\u5047', '\u6709\u4E8B', '\u5176\u5B83 (\u9700\u6CE8\u660E\u5177\u4F53\u539F\u56E0)'],
      hidden: '{{formData.checkbox1 !== true}}',
      widget: 'radio',
    },
    input1: {
      title: '\u5177\u4F53\u539F\u56E0',
      type: 'string',
      format: 'textarea',
      hidden: '{{rootValue.checkbox1 !== true || formData.select1 !== "c"}}',
    },
  },
};

const Demo1 = () => {
  const form = useForm();
  return <FormRender form={form} schema={schema} />;
};

export default Demo1;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo"}},"function-demo-1":{component:Object(W.dynamic)({loader:function(){var I=Object(V.a)(b.a.mark(function T(){var p,i,g,C,O;return b.a.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return p=e("K+nK"),h.t0=p,h.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return h.t1=h.sent,i=(0,h.t0)(h.t1),h.t2=p,h.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(17)]).then(e.bind(null,"c2mQ"));case 9:return h.t3=h.sent,g=(0,h.t2)(h.t3),h.next=13,e.e(21).then(e.bind(null,"8iYR"));case 13:return C=h.sent,O=function(){return i.default.createElement(g.default,{schema:C.expression})},h.abrupt("return",O);case 16:case"end":return h.stop()}},T)}));function P(){return I.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { expression } from '../json/schema';

export default () => <FR schema={expression} />;`},"demo/FR.jsx":{import:"../demo/FR",content:oe},"json/schema.js":{import:"../json/schema",content:xn}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo-1"}},"lifeCycle-demo":{component:Object(W.dynamic)({loader:function(){var I=Object(V.a)(b.a.mark(function T(){var p,i,g,C,O,s,h,o,w;return b.a.wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return O=function(E,m){if(!m&&E&&E.__esModule)return E;if(E===null||typeof E!="object"&&typeof E!="function")return{default:E};var n=C(m);if(n&&n.has(E))return n.get(E);var v={},d=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in E)if(r!=="default"&&Object.prototype.hasOwnProperty.call(E,r)){var l=d?Object.getOwnPropertyDescriptor(E,r):null;l&&(l.get||l.set)?Object.defineProperty(v,r,l):v[r]=E[r]}return v.default=E,n&&n.set(E,v),v},C=function(E){if(typeof WeakMap!="function")return null;var m=new WeakMap,n=new WeakMap;return(C=function(d){return d?n:m})(E)},j.t0=O,j.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return j.t1=j.sent,p=(0,j.t0)(j.t1),j.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 9:return i=j.sent,j.t2=O,j.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 13:return j.t3=j.sent,g=(0,j.t2)(j.t3),s=function(E){return new Promise(function(m){return setTimeout(m,E)})},h={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u9009\u62E9\u6846",description:"\u52A0\u8F7D\u4E2D...",type:"string",enum:[],widget:"radio"}}},o=function(){var E=(0,g.useForm)(),m=function(){E.setValues({input1:"hello world"}),s(3e3).then(function(v){E.setSchemaByPath("select1",{description:"",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]})})};return p.default.createElement(g.default,{form:E,schema:h,onMount:m})},w=o,j.abrupt("return",w);case 20:case"end":return j.stop()}},T)}));function P(){return I.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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
      title: '\u9009\u62E9\u6846',
      description: '\u52A0\u8F7D\u4E2D...',
      type: 'string',
      enum: [],
      widget: 'radio',
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.6.9"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"lifeCycle-demo"}},"listDisplay-demo":{component:Object(W.dynamic)({loader:function(){var I=Object(V.a)(b.a.mark(function T(){var p,i,g,C,O,s;return b.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return p=e("K+nK"),o.t0=p,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.t2=p,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,g=(0,o.t2)(o.t3),C={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},O=function(){return i.default.createElement(g.default,{schema:C})},s=O,o.abrupt("return",s);case 15:case"end":return o.stop()}},T)}));function P(){return I.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Te}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo"}},"listDisplay-demo-1":{component:Object(W.dynamic)({loader:function(){var I=Object(V.a)(b.a.mark(function T(){var p,i,g,C,O,s;return b.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return p=e("K+nK"),o.t0=p,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.t2=p,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,g=(0,o.t2)(o.t3),C={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},O=function(){return i.default.createElement(g.default,{schema:C})},s=O,o.abrupt("return",s);case 15:case"end":return o.stop()}},T)}));function P(){return I.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Te}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-1"}},"listDisplay-demo-2":{component:Object(W.dynamic)({loader:function(){var I=Object(V.a)(b.a.mark(function T(){var p,i,g,C,O,s;return b.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return p=e("K+nK"),o.t0=p,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.t2=p,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,g=(0,o.t2)(o.t3),C={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},O=function(){return i.default.createElement(g.default,{schema:C})},s=O,o.abrupt("return",s);case 15:case"end":return o.stop()}},T)}));function P(){return I.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Te}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-2"}},"listDisplay-demo-3":{component:Object(W.dynamic)({loader:function(){var I=Object(V.a)(b.a.mark(function T(){var p,i,g,C,O,s;return b.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return p=e("K+nK"),o.t0=p,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.t2=p,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,g=(0,o.t2)(o.t3),C={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",props:{hideMove:!0},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},O=function(){return i.default.createElement(g.default,{schema:C})},s=O,o.abrupt("return",s);case 15:case"end":return o.stop()}},T)}));function P(){return I.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Te}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-3"}},"listDisplay-demo-4":{component:Object(W.dynamic)({loader:function(){var I=Object(V.a)(b.a.mark(function T(){var p,i,g,C,O,s;return b.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return p=e("K+nK"),o.t0=p,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.t2=p,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,g=(0,o.t2)(o.t3),window.hello=function(w){var M=w.value;console.log(M)},C={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list4",itemProps:{buttons:[{callback:"hello",text:"\u590D\u5236"}]},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},O=function(){return i.default.createElement(g.default,{schema:C})},s=O,o.abrupt("return",s);case 16:case"end":return o.stop()}},T)}));function P(){return I.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Te}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-4"}},"mapping-demo":{component:Object(W.dynamic)({loader:function(){var I=Object(V.a)(b.a.mark(function T(){var p,i,g,C,O,s,h,o,w,M,j;return b.a.wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return h=function(n,v){if(!v&&n&&n.__esModule)return n;if(n===null||typeof n!="object"&&typeof n!="function")return{default:n};var d=s(v);if(d&&d.has(n))return d.get(n);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in n)if(f!=="default"&&Object.prototype.hasOwnProperty.call(n,f)){var B=l?Object.getOwnPropertyDescriptor(n,f):null;B&&(B.get||B.set)?Object.defineProperty(r,f,B):r[f]=n[f]}return r.default=n,d&&d.set(n,r),r},s=function(n){if(typeof WeakMap!="function")return null;var v=new WeakMap,d=new WeakMap;return(s=function(l){return l?d:v})(n)},p=e("K+nK"),E.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return E.t0=p,E.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return E.t1=E.sent,i=(0,E.t0)(E.t1),E.t2=p,E.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return E.t3=E.sent,g=(0,E.t2)(E.t3),E.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 17:return C=E.sent,E.t4=h,E.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 21:return E.t5=E.sent,O=(0,E.t4)(E.t5),o=function(n){var v=n.schema;return v.$id==="#"?g.default.createElement("div",null,n.children):g.default.createElement("div",null,"my custom object:",n.children)},w={type:"object",properties:{object2:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u8F93\u5165\u6846",type:"string"}}}},labelWidth:120,displayType:"row"},M=function(){var n=(0,O.useForm)(),v=function(r,l){console.log("formData:",r,"errors",l)};return g.default.createElement("div",null,g.default.createElement(O.default,{form:n,schema:w,onFinish:v,mapping:{object:"CustomComA"},widgets:{CustomComA:o}}),g.default.createElement(i.default,{type:"primary",onClick:n.submit},"\u63D0\u4EA4"))},j=M,E.abrupt("return",j);case 28:case"end":return E.stop()}},T)}));function P(){return I.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Button } from 'antd';
import FormRender, { useForm } from 'form-render';

const CustomComA = props => {
  const { schema } = props;
  if (schema.$id === '#') {
    return <div>{props.children}</div>;
  }
  return (
    <div>
      my custom object:
      {props.children}
    </div>
  );
};

const schema = {
  type: 'object',
  properties: {
    object2: {
      title: '\u5BF9\u8C61',
      type: 'object',
      properties: {
        input1: {
          title: '\u8F93\u5165\u6846',
          type: 'string',
        },
      },
    },
  },
  labelWidth: 120,
  displayType: 'row',
};

const Demo = () => {
  const form = useForm();
  const onFinish = (formData, errors) => {
    console.log('formData:', formData, 'errors', errors);
  };
  return (
    <div>
      <FormRender
        form={form}
        schema={schema}
        onFinish={onFinish}
        mapping={{ object: 'CustomComA' }}
        widgets={{ CustomComA }}
      />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4
      </Button>
    </div>
  );
};

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},"react-dom":{version:">=16.8.0"}},identifier:"mapping-demo"}},"watch-demo":{component:Object(W.dynamic)({loader:function(){var I=Object(V.a)(b.a.mark(function T(){var p,i,g,C,O,s,h,o;return b.a.wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return O=function(c,E){if(!E&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var m=C(E);if(m&&m.has(c))return m.get(c);var n={},v=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in c)if(d!=="default"&&Object.prototype.hasOwnProperty.call(c,d)){var r=v?Object.getOwnPropertyDescriptor(c,d):null;r&&(r.get||r.set)?Object.defineProperty(n,d,r):n[d]=c[d]}return n.default=c,m&&m.set(c,n),n},C=function(c){if(typeof WeakMap!="function")return null;var E=new WeakMap,m=new WeakMap;return(C=function(v){return v?m:E})(c)},M.t0=O,M.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return M.t1=M.sent,p=(0,M.t0)(M.t1),M.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 9:return i=M.sent,M.t2=O,M.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 13:return M.t3=M.sent,g=(0,M.t2)(M.t3),s={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"}}},h=function(){var c=(0,g.useForm)(),E={"#":function(n){console.log("\u8868\u5355\u7684\u65F6\u65F6\u6570\u636E\u4E3A\uFF1A",n)},input1:function(n){c.setValueByPath("input2",n)}};return p.default.createElement(g.default,{form:c,schema:s,watch:E})},o=h,M.abrupt("return",o);case 19:case"end":return M.stop()}},T)}));function P(){return I.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.6.9"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo"}},"watch-demo-1":{component:Object(W.dynamic)({loader:function(){var I=Object(V.a)(b.a.mark(function T(){var p,i,g,C,O,s,h,o,w,M;return b.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return h=function(m,n){if(!n&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var v=s(n);if(v&&v.has(m))return v.get(m);var d={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in m)if(l!=="default"&&Object.prototype.hasOwnProperty.call(m,l)){var f=r?Object.getOwnPropertyDescriptor(m,l):null;f&&(f.get||f.set)?Object.defineProperty(d,l,f):d[l]=m[l]}return d.default=m,v&&v.set(m,d),d},s=function(m){if(typeof WeakMap!="function")return null;var n=new WeakMap,v=new WeakMap;return(s=function(r){return r?v:n})(m)},p=e("K+nK"),c.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return c.t0=p,c.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return c.t1=c.sent,i=(0,c.t0)(c.t1),c.t2=h,c.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return c.t3=c.sent,g=(0,c.t2)(c.t3),c.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 17:return C=c.sent,c.t4=h,c.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 21:return c.t5=c.sent,O=(0,c.t4)(c.t5),o={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"radio"}}}}},w=function(){var m=(0,O.useForm)(),n=function(r,l){l.length>0?alert("errorFields:"+JSON.stringify(l)):alert("formData:"+JSON.stringify(r,null,2))},v={input1:function(r){r&&r.length>2?m.setSchemaByPath("obj1.select",function(l){var f=l.enumNames;return{enumNames:f.map(function(B){return B+"a"})}}):m.setSchemaByPath("obj1.select",{enumNames:["\u65E9","\u4E2D","\u665A"]})}};return g.default.createElement("div",null,g.default.createElement(O.default,{form:m,schema:o,onFinish:n,watch:v}),g.default.createElement(i.default,{type:"",style:{marginRight:8},onClick:function(){return m.setSchemaByPath("input2",{title:"\u7F16\u8F91\u6846",format:"textarea"})}},"\u5C06 input \u6539\u4E3A textarea"),g.default.createElement(i.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4"))},M=w,c.abrupt("return",M);case 27:case"end":return c.stop()}},T)}));function P(){return I.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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
      if (val && val.length > 2) {
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo-1"}},"widget-demo":{component:Object(W.dynamic)({loader:function(){var I=Object(V.a)(b.a.mark(function T(){var p,i,g,C,O,s,h,o,w,M,j,c,E;return b.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return w=function(d,r){if(!r&&d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var l=o(r);if(l&&l.has(d))return l.get(d);var f={},B=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var A in d)if(A!=="default"&&Object.prototype.hasOwnProperty.call(d,A)){var L=B?Object.getOwnPropertyDescriptor(d,A):null;L&&(L.get||L.set)?Object.defineProperty(f,A,L):f[A]=d[A]}return f.default=d,l&&l.set(d,f),f},o=function(d){if(typeof WeakMap!="function")return null;var r=new WeakMap,l=new WeakMap;return(o=function(B){return B?l:r})(d)},p=e("K+nK"),n.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return n.t0=p,n.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return n.t1=n.sent,i=(0,n.t0)(n.t1),n.next=12,Promise.all([e.e(3),e.e(19)]).then(e.t.bind(null,"cUip",7));case 12:return n.t2=p,n.next=15,Promise.all([e.e(0),e.e(8),e.e(18),e.e(20)]).then(e.t.bind(null,"iJl9",7));case 15:return n.t3=n.sent,g=(0,n.t2)(n.t3),n.t4=p,n.next=20,e.e(86).then(e.bind(null,"0Owb"));case 20:return n.t5=n.sent,C=(0,n.t4)(n.t5),n.t6=p,n.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return n.t7=n.sent,O=(0,n.t6)(n.t7),n.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 29:return s=n.sent,n.t8=w,n.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 33:return n.t9=n.sent,h=(0,n.t8)(n.t9),M={type:"object",properties:{string:{title:"\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6",type:"string",widget:"site"},select:{title:"\u5355\u9009",type:"number",enum:[1,2,3],enumNames:["\u9009\u98791","\u9009\u98792","\u9009\u98793"]}}},j=function(d){return console.log("widget props:",d),O.default.createElement(g.default,(0,C.default)({addonBefore:"https://",addonAfter:".com"},d))},c=function(){var d=(0,h.useForm)();return O.default.createElement("div",null,O.default.createElement(h.default,{form:d,schema:M,widgets:{site:j},onFinish:function(l){return alert(JSON.stringify(l,null,2))}}),O.default.createElement(i.default,{type:"primary",onClick:d.submit},"\u63D0\u4EA4"))},E=c,n.abrupt("return",E);case 40:case"end":return n.stop()}},T)}));function P(){return I.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
  return <Input addonBefore="https://" addonAfter=".com" {...props} />;
};

const Demo = () => {
  const form = useForm();
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},"react-dom":{version:">=16.8.0"}},identifier:"widget-demo"}},"measure-demo":{component:Object(W.dynamic)({loader:function(){var I=Object(V.a)(b.a.mark(function T(){var p,i,g,C,O,s,h,o,w,M;return b.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return o=function(m,n){if(!n&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var v=h(n);if(v&&v.has(m))return v.get(m);var d={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in m)if(l!=="default"&&Object.prototype.hasOwnProperty.call(m,l)){var f=r?Object.getOwnPropertyDescriptor(m,l):null;f&&(f.get||f.set)?Object.defineProperty(d,l,f):d[l]=m[l]}return d.default=m,v&&v.set(m,d),d},h=function(m){if(typeof WeakMap!="function")return null;var n=new WeakMap,v=new WeakMap;return(h=function(r){return r?v:n})(m)},p=e("K+nK"),c.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return c.t0=p,c.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return c.t1=c.sent,i=(0,c.t0)(c.t1),c.next=12,e.e(15).then(e.t.bind(null,"tL+A",7));case 12:return c.t2=p,c.next=15,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 15:return c.t3=c.sent,g=(0,c.t2)(c.t3),c.t4=o,c.next=20,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 20:return c.t5=c.sent,C=(0,c.t4)(c.t5),c.next=24,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 24:return O=c.sent,c.t6=o,c.next=28,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 28:return c.t7=c.sent,s=(0,c.t6)(c.t7),w=function(){var m=(0,s.useForm)({logOnMount:function(r){console.log("onMount",r)},logOnSubmit:function(r){console.log("onSubmit",r)}}),n={type:"object",properties:{input1:{title:"\u8F93\u5165\u6846",required:!0,type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u5DE6","\u4E2D","\u53F3"],widget:"radio"}}},v=function(r,l){l.length>0?g.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(l.map(function(f){return f.name}))):g.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")};return C.default.createElement("div",null,C.default.createElement(s.default,{id:"my-demo-form",form:m,schema:n,onFinish:v}),C.default.createElement(i.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},M=w,c.abrupt("return",M);case 33:case"end":return c.stop()}},T)}));function P(){return I.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
import { Button, Space, message } from 'antd';
import FormRender, { useForm } from 'form-render';

const Demo = () => {
  const form = useForm({
    logOnMount: info => {
      console.log('onMount', info);
    },
    logOnSubmit: info => {
      console.log('onSubmit', info);
    },
  });

  const schema = {
    type: 'object',
    properties: {
      input1: {
        title: '\u8F93\u5165\u6846',
        required: true,
        type: 'string',
      },
      select1: {
        title: '\u5355\u9009',
        type: 'string',
        enum: ['a', 'b', 'c'],
        enumNames: ['\u5DE6', '\u4E2D', '\u53F3'],
        widget: 'radio',
      },
    },
  };

  const onFinish = (data, errors) => {
    if (errors.length > 0) {
      message.error(
        '\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A' + JSON.stringify(errors.map(item => item.name))
      );
    } else {
      message.success('\u63D0\u4EA4\u6210\u529F\uFF01');
    }
  };

  return (
    <div>
      <FormRender
        id="my-demo-form"
        form={form}
        schema={schema}
        onFinish={onFinish}
      />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4\uFF08\u89C1console\uFF09
      </Button>
    </div>
  );
};

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"measure-demo"}},"migrate-demo":{component:Object(W.dynamic)({loader:function(){var I=Object(V.a)(b.a.mark(function T(){var p,i,g,C,O,s,h,o;return b.a.wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return h=function(){var c=(0,g.useForm)(),E=function(n,v){v.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(v))):alert(JSON.stringify(n))};return i.default.createElement("div",null,i.default.createElement(g.default,{form:c,schema:s,onFinish:E}),i.default.createElement("button",{onClick:c.submit},"\u63D0\u4EA4"))},O=function(c,E){if(!E&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var m=C(E);if(m&&m.has(c))return m.get(c);var n={},v=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in c)if(d!=="default"&&Object.prototype.hasOwnProperty.call(c,d)){var r=v?Object.getOwnPropertyDescriptor(c,d):null;r&&(r.get||r.set)?Object.defineProperty(n,d,r):n[d]=c[d]}return n.default=c,m&&m.set(c,n),n},C=function(c){if(typeof WeakMap!="function")return null;var E=new WeakMap,m=new WeakMap;return(C=function(v){return v?m:E})(c)},p=e("K+nK"),M.t0=p,M.next=7,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 7:return M.t1=M.sent,i=(0,M.t0)(M.t1),M.t2=O,M.next=12,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 12:return M.t3=M.sent,g=(0,M.t2)(M.t3),s={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}},o=h,M.abrupt("return",o);case 17:case"end":return M.stop()}},T)}));function P(){return I.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate-demo"}},"migrate-demo-1":{component:Object(W.dynamic)({loader:function(){var I=Object(V.a)(b.a.mark(function T(){var p,i,g,C,O,s,h,o,w,M,j,c,E;return b.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return w=function(d,r){if(!r&&d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var l=o(r);if(l&&l.has(d))return l.get(d);var f={},B=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var A in d)if(A!=="default"&&Object.prototype.hasOwnProperty.call(d,A)){var L=B?Object.getOwnPropertyDescriptor(d,A):null;L&&(L.get||L.set)?Object.defineProperty(f,A,L):f[A]=d[A]}return f.default=d,l&&l.set(d,f),f},o=function(d){if(typeof WeakMap!="function")return null;var r=new WeakMap,l=new WeakMap;return(o=function(B){return B?l:r})(d)},p=e("K+nK"),n.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return n.t0=p,n.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return n.t1=n.sent,i=(0,n.t0)(n.t1),n.t2=p,n.next=13,Promise.resolve().then(e.bind(null,"tJVT"));case 13:return n.t3=n.sent,g=(0,n.t2)(n.t3),n.next=17,Promise.all([e.e(3),e.e(19)]).then(e.t.bind(null,"cUip",7));case 17:return n.t4=p,n.next=20,Promise.all([e.e(0),e.e(8),e.e(18),e.e(20)]).then(e.t.bind(null,"iJl9",7));case 20:return n.t5=n.sent,C=(0,n.t4)(n.t5),n.t6=w,n.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return n.t7=n.sent,O=(0,n.t6)(n.t7),n.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 29:return s=n.sent,n.next=32,Promise.all([e.e(22),e.e(25)]).then(e.bind(null,"7t+U"));case 32:return h=n.sent,M=C.default.TextArea,j={type:"object",properties:{number:{title:"\u6570\u5B57\u8F93\u5165\u6846",type:"number","ui:disabled":!0},checkbox:{title:"\u662F\u5426\u9009\u62E9",type:"boolean","ui:widget":"switch"}},required:["number"]},c=function(){var d=(0,O.useState)(JSON.stringify(j)),r=(0,g.default)(d,2),l=r[0],f=r[1],B=(0,O.useState)({}),A=(0,g.default)(B,2),L=A[0],pe=A[1],Ce=function(){try{var An=(0,h.updateSchemaToNewVersion)(JSON.parse(l));pe(An)}catch(dt){console.log(dt)}},sn=function(An){f(An.target.value)},vn=function(){f(JSON.stringify(JSON.parse(l),null,2))};return O.default.createElement("div",null,O.default.createElement("div",null,"\u586B\u5165\u65E7\u7248schema\uFF1A"),O.default.createElement(M,{style:{minHeight:400,marginTop:12,marginBottom:12},value:l,onChange:sn}),O.default.createElement(i.default,{style:{marginRight:12},onClick:vn},"\u683C\u5F0F\u5316\u65E7schema"),O.default.createElement(i.default,{type:"primary",onClick:Ce},"\u751F\u6210\u65B0\u7248schema"),O.default.createElement(M,{style:{minHeight:400,marginTop:12},value:JSON.stringify(L,null,2)}))},E=c,n.abrupt("return",E);case 38:case"end":return n.stop()}},T)}));function P(){return I.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
import { Input, Button } from 'antd';
import { updateSchemaToNewVersion } from '../../../packages/form-render/src/utils.js';
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

export default Translator;`},"packages/form-render/src/utils.js":{import:"../../packages/form-render/src/utils.js",content:J}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"},"lodash-es":{version:"4.17.21"}},identifier:"migrate-demo-1"}},"migrate2-demo":{component:Object(W.dynamic)({loader:function(){var I=Object(V.a)(b.a.mark(function T(){var p,i,g,C,O,s,h,o,w;return b.a.wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return o=function(){var E=(0,g.useState)({}),m=(0,i.default)(E,2),n=m[0],v=m[1],d=(0,g.useState)([]),r=(0,i.default)(d,2),l=r[0],f=r[1],B=(0,g.useState)(!1),A=(0,i.default)(B,2),L=A[0],pe=A[1],Ce=(0,C.useForm)({formData:n,onChange:v,onValidate:f,showValidate:L});(0,g.useEffect)(function(){Ce.init()},[]);var sn=function(){pe(!0),l.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(l))):alert(JSON.stringify(n))};return g.default.createElement("div",null,g.default.createElement(C.default,{form:Ce,schema:h}),g.default.createElement("button",{onClick:sn},"\u63D0\u4EA4"))},s=function(E,m){if(!m&&E&&E.__esModule)return E;if(E===null||typeof E!="object"&&typeof E!="function")return{default:E};var n=O(m);if(n&&n.has(E))return n.get(E);var v={},d=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in E)if(r!=="default"&&Object.prototype.hasOwnProperty.call(E,r)){var l=d?Object.getOwnPropertyDescriptor(E,r):null;l&&(l.get||l.set)?Object.defineProperty(v,r,l):v[r]=E[r]}return v.default=E,n&&n.set(E,v),v},O=function(E){if(typeof WeakMap!="function")return null;var m=new WeakMap,n=new WeakMap;return(O=function(d){return d?n:m})(E)},p=e("K+nK"),j.t0=p,j.next=7,Promise.resolve().then(e.bind(null,"tJVT"));case 7:return j.t1=j.sent,i=(0,j.t0)(j.t1),j.t2=s,j.next=12,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 12:return j.t3=j.sent,g=(0,j.t2)(j.t3),j.t4=s,j.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 17:return j.t5=j.sent,C=(0,j.t4)(j.t5),h={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}},w=o,j.abrupt("return",w);case 22:case"end":return j.stop()}},T)}));function P(){return I.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
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
  const [formData, setData] = useState({});
  const [valid, setValid] = useState([]);
  const [showValidate, setShowValidate] = useState(false);

  const form = useForm({
    formData,
    onChange: setData,
    onValidate: setValid,
    showValidate,
  }); // 1. formData\u3001onChange \u548C onValidate \u4F5C\u4E3A useForm \u7684\u5165\u53C2\u4F20\u5165

  useEffect(() => {
    form.init();
  }, []);

  const onSubmit = () => {
    setShowValidate(true);
    if (valid.length > 0) {
      alert(\`\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A\${JSON.stringify(valid)}\`);
    } else {
      alert(JSON.stringify(formData));
    }
  };

  return (
    <div>
      <FormRender
        form={form} // 3. \u8865\u4E0A
        schema={schema}
        // formData={formData} // 4. \u5168\u653E\u5230 useForm \u91CC\u4E86
        // onChange={setData}
        // onValidate={setValid}
        // showValidate={showValidate}
      />
      <button onClick={onSubmit}>\u63D0\u4EA4</button>
    </div>
  );
}
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate2-demo"}},"schema-demo":{component:Object(W.dynamic)({loader:function(){var I=Object(V.a)(b.a.mark(function T(){var p,i,g,C,O;return b.a.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return p=e("K+nK"),h.t0=p,h.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return h.t1=h.sent,i=(0,h.t0)(h.t1),h.t2=p,h.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(17)]).then(e.bind(null,"c2mQ"));case 9:return h.t3=h.sent,g=(0,h.t2)(h.t3),h.next=13,e.e(21).then(e.bind(null,"8iYR"));case 13:return C=h.sent,O=function(){return i.default.createElement(g.default,{schema:C.basic})},h.abrupt("return",O);case 16:case"end":return h.stop()}},T)}));function P(){return I.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { basic } from '../json/schema';

export default () => <FR schema={basic} />;`},"demo/FR.jsx":{import:"../demo/FR",content:oe},"json/schema.js":{import:"../json/schema",content:xn}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo"}},"schema-demo-1":{component:Object(W.dynamic)({loader:function(){var I=Object(V.a)(b.a.mark(function T(){var p,i,g,C,O;return b.a.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return p=e("K+nK"),h.t0=p,h.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return h.t1=h.sent,i=(0,h.t0)(h.t1),h.t2=p,h.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(17)]).then(e.bind(null,"c2mQ"));case 9:return h.t3=h.sent,g=(0,h.t2)(h.t3),h.next=13,e.e(21).then(e.bind(null,"8iYR"));case 13:return C=h.sent,O=function(){return i.default.createElement(g.default,{schema:C.titleTrick})},h.abrupt("return",O);case 16:case"end":return h.stop()}},T)}));function P(){return I.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { titleTrick } from '../json/schema';

export default () => <FR schema={titleTrick} />;`},"demo/FR.jsx":{import:"../demo/FR",content:oe},"json/schema.js":{import:"../json/schema",content:xn}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo-1"}},"docs-playground":{component:Object(W.dynamic)({loader:function(){var I=Object(V.a)(b.a.mark(function T(){return b.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"BASV"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},T)}));function P(){return I.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:Re},"main.js":{import:"./main",content:Rn},"json/simplest.json":{import:"./json/simplest.json",content:jn},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:pn},"monaco/index.js":{import:"./monaco",content:an},"theme.css":{import:"./theme.css",content:Ve},"index.css":{import:"./index.css",content:Nn}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:"^16.0.0"},"react-dom":{version:"^16.0.0"},"deep-equal":{version:"2.0.5"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.6.9"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-simple-code-editor":{version:"0.11.0"},prismjs:{version:"1.23.0"}},identifier:"docs-playground"}},"docs-playground1":{component:Object(W.dynamic)({loader:function(){var I=Object(V.a)(b.a.mark(function T(){return b.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"Wrpt"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},T)}));function P(){return I.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:Dn},"main.js":{import:"./main",content:hn},"json/simplest.json":{import:"./json/simplest.json",content:Ie},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:qn},"monaco/index.js":{import:"./monaco",content:wn},"suggestionsMap.js":{import:"./suggestionsMap",content:_n},"index.css":{import:"./index.css",content:ot}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:"^17.x"},"react-dom":{version:">=16.9.0"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.6.9"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-monaco-editor":{version:"0.44.0"},"@types/react":{version:"^17.x"}},identifier:"docs-playground1"}},"table-render-advanced":{component:Object(W.dynamic)({loader:function(){var I=Object(V.a)(b.a.mark(function T(){return b.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"7ZP+"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},T)}));function P(){return I.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{tsx:et}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.5"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!0,identifier:"table-render-advanced"}},"table-render-nosearch":{component:Object(W.dynamic)({loader:function(){var I=Object(V.a)(b.a.mark(function T(){return b.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"CfUQ"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},T)}));function P(){return I.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{tsx:lt}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.5"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!0,identifier:"table-render-nosearch"}},"table-render-notitle":{component:Object(W.dynamic)({loader:function(){var I=Object(V.a)(b.a.mark(function T(){return b.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"/usH"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},T)}));function P(){return I.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{tsx:Bn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.5"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!0,identifier:"table-render-notitle"}},"table-render-paramtable":{component:Object(W.dynamic)({loader:function(){var I=Object(V.a)(b.a.mark(function T(){return b.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"48jF"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},T)}));function P(){return I.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{tsx:nt}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.5"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},umi:{version:"3.4.19"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!0,identifier:"table-render-paramtable"}},"table-render-demo":{component:Object(W.dynamic)({loader:function(){var I=Object(V.a)(b.a.mark(function T(){var p,i,g,C,O,s,h,o,w;return b.a.wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return p=e("K+nK"),j.t0=p,j.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return j.t1=j.sent,i=(0,j.t0)(j.t1),j.next=8,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(71)]).then(e.bind(null,"P2DI"));case 8:for(g=j.sent,C=[],O=0;O<6;O++)C.push({id:O.toString(),title:"\u6807\u9898".concat(O+1),created_at:new Date().getTime()});return s={type:"object",properties:{title:{title:"\u6807\u9898",type:"string",width:"30%"},created_at:{title:"\u521B\u5EFA\u65F6\u95F4",type:"string",format:"date",width:"30%"}}},h=[{title:"\u6807\u9898",dataIndex:"title"},{title:"\u521B\u5EFA\u65F6\u95F4",key:"since",dataIndex:"created_at",valueType:"date"},{title:"\u64CD\u4F5C",render:function(E,m){return i.default.createElement("a",{onClick:function(){return alert(E.title)}},"\u7F16\u8F91")}}],o=function(){var E=function(){return{rows:C,total:C.length}};return i.default.createElement(i.default.Fragment,null,i.default.createElement(g.Search,{schema:s,api:E}),i.default.createElement(g.Table,{headerTitle:"\u6700\u7B80\u8868\u683C",columns:h,rowKey:"id"}))},w=(0,g.withTable)(o),j.abrupt("return",w);case 16:case"end":return j.stop()}},T)}));function P(){return I.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Table, Search, withTable } from 'table-render';

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
    title: {
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
    <>
      <Search schema={schema} api={searchApi} />
      <Table headerTitle="\u6700\u7B80\u8868\u683C" columns={columns} rowKey="id" />
    </>
  );
};

export default withTable(Wrapper);`}},dependencies:{react:{version:">=16.8.0"},"table-render":{version:"1.1.5"},antd:{version:"4.x",css:"antd/dist/antd.css"}},transform:!0,defaultShowCode:!0,identifier:"table-render-demo"}},"generator-demo":{component:Object(W.dynamic)({loader:function(){var I=Object(V.a)(b.a.mark(function T(){var p,i,g,C,O,s;return b.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return p=e("K+nK"),o.t0=p,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.t2=p,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(70)]).then(e.bind(null,"nYSz"));case 9:return o.t3=o.sent,g=(0,o.t2)(o.t3),C={type:"object",properties:{inputName:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string"}}},O=function(){return i.default.createElement("div",{style:{height:"80vh"}},i.default.createElement(g.default,{defaultValue:C}))},s=O,o.abrupt("return",s);case 15:case"end":return o.stop()}},T)}));function P(){return I.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.4.6"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"generator-demo"}},"generator-modal":{component:Object(W.dynamic)({loader:function(){var I=Object(V.a)(b.a.mark(function T(){return b.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"PPgD"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},T)}));function P(){return I.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:$n}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.4.6"},"react-dom":{version:">=16.9.0"}},identifier:"generator-modal"}},"generator-settings":{component:Object(W.dynamic)({loader:function(){var I=Object(V.a)(b.a.mark(function T(){return b.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"M63W"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},T)}));function P(){return I.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:ut}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.4.6"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-settings"}},"generator-layout":{component:Object(W.dynamic)({loader:function(){var I=Object(V.a)(b.a.mark(function T(){return b.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"SOdT"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},T)}));function P(){return I.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:Mn},"index.less":{import:"./index.less",content:Pn}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.4.6"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-layout"}},"generator-transformer":{component:Object(W.dynamic)({loader:function(){var I=Object(V.a)(b.a.mark(function T(){return b.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"jktF"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},T)}));function P(){return I.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:Vn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.4.6"},"react-dom":{version:">=16.9.0"}},identifier:"generator-transformer"}},"generator-playground":{component:Object(W.dynamic)({loader:function(){var I=Object(V.a)(b.a.mark(function T(){return b.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"TYW4"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},T)}));function P(){return I.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:tt},"index.less":{import:"./index.less",content:Pn}},dependencies:{react:{version:">=16.8.0"},umi:{version:"3.4.19"},"fr-generator":{version:"2.4.6"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-playground"}}}},TIsu:function(Fn,un,e){},Zs1V:function(Fn){Fn.exports=JSON.parse("{}")},j57V:function(Fn,un,e){"use strict";e.r(un);var V=e("q1tI"),t=e.n(V),b=e("dEAq"),W=e.n(b),ue=e("0zqC"),J=e("ZpkN"),Te=e("JjdP"),Fe=t.a.memo(Te.default["widget-demo"].component);un.default=oe=>(t.a.useEffect(()=>{oe!=null&&oe.location.hash&&b.AnchorLink.scrollToAnchor(decodeURIComponent(oe.location.hash.slice(1)))},[]),t.a.createElement(t.a.Fragment,null,t.a.createElement(t.a.Fragment,null,t.a.createElement("div",{className:"markdown"},t.a.createElement("h1",{id:"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\uFF08widget\uFF09"},t.a.createElement(b.AnchorLink,{to:"#\u81EA\u5B9A\u4E49\u7EC4\u4EF6\uFF08widget\uFF09","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\uFF08widget\uFF09"),t.a.createElement("p",null,"\u5F53 FormRender \u63D0\u4F9B\u7684\u7EC4\u4EF6\u65E0\u6CD5 100%\u6EE1\u8DB3\u7528\u6237\u9700\u6C42\u65F6\uFF0C\u53EF\u4EE5\u8003\u8651\u81EA\u5DF1\u5199\u4E00\u4E2A\u3002\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u529F\u80FD\u4F7F FormRender \u62E5\u6709\u5F88\u597D\u6269\u5C55\u6027\uFF0C\u53EF\u80FD\u7684\u5E94\u7528\u573A\u666F\u5982\u4E0B\uFF1A"),t.a.createElement("ul",null,t.a.createElement("li",null,"\u6211\u9700\u8981\u5199\u4E00\u4E2A\u5F02\u6B65\u52A0\u8F7D\u7684\u641C\u7D22\u8F93\u5165\u6846\uFF08\u666E\u9002\u6027\u4E0D\u9AD8/\u96BE\u4EE5\u7528 schema \u63CF\u8FF0\u7684\u7EC4\u4EF6\uFF09"),t.a.createElement("li",null,"\u6211\u4EEC\u56E2\u961F\u4F7F\u7528 xxx ui\uFF0C\u4E0E antd \u4E0D\u642D\uFF0C\u5E0C\u671B\u80FD\u9002\u914D\u4E00\u5957 xxx ui \u7EC4\u4EF6\u7684 FormRender\uFF08\u6B22\u8FCE Pull Request\uFF09"),t.a.createElement("li",null,"\u6211\u9700\u8981\u5728\u8868\u5355\u5185\u90E8\u5199\u4E00\u4E2A excel \u4E0A\u4F20\u6309\u94AE\uFF08\u5B8C\u5168\u5B9A\u5236\u5316\u7684\u9700\u6C42\uFF09")),t.a.createElement("p",null,"\u6CE8\uFF1A\u5982\u679C\u662F\u65B0\u589E\u4E00\u4E2A\u5E38\u7528\u7EC4\u4EF6\uFF0C\u5EFA\u8BAE\u7ED9 FormRender \u7EF4\u62A4\u7684\u540C\u5B66\u6765\u63D0 Pull Request\uFF0C\u8FD9\u6837\u53EF\u4EE5\u66F4\u597D\u6269\u5C55\u5176\u751F\u6001\uFF0CFormRender \u7684\u793E\u533A\u4EE5\u53CA\u63D0\u4F9B\u4E86\u90E8\u5206 ",t.a.createElement(b.Link,{to:"https://github.com/alibaba/x-render/tree/master/widgets"},"\u5E38\u7528\u81EA\u5B9A\u4E49\u7EC4\u4EF6"),"\u3002"),t.a.createElement("h2",{id:"\u4F7F\u7528"},t.a.createElement(b.AnchorLink,{to:"#\u4F7F\u7528","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"\u4F7F\u7528"),t.a.createElement("p",null,"\u7B80\u5355\u7684\u8BF4\uFF0C\u5728 Form \u7EC4\u4EF6\u5C42\u4F7F\u7528 widgets \u5B57\u6BB5\u6CE8\u518C\u81EA\u5B9A\u4E49\u7EC4\u4EF6\uFF0C\u5E76\u5728 schema \u5185\u4F7F\u7528 widget \u5B57\u6BB5\u6307\u660E\u4F7F\u7528\u7684\u7EC4\u4EF6 key \u503C\u5373\u53EF\uFF1A"),t.a.createElement(J.a,{code:`const schema = {
  type: 'object',
  properties: {
    string: {
      title: '\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6',
      type: 'string',
      widget: 'site',
    },
    //...
  },
};

<Form
  schema={schema}
  widgets={{ site: SiteInput }}
  //...
/>;`,lang:"js"}),t.a.createElement("p",null,"\u5B9E\u9645\u4EE3\u7801\u5982\u4E0B\uFF1A")),t.a.createElement(ue.default,Te.default["widget-demo"].previewerProps,t.a.createElement(Fe,null)),t.a.createElement("div",{className:"markdown"},t.a.createElement("h2",{id:"\u4E0D\u9700\u8981\u81EA\u5DF1\u624B\u5199\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u54E6"},t.a.createElement(b.AnchorLink,{to:"#\u4E0D\u9700\u8981\u81EA\u5DF1\u624B\u5199\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u54E6","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"\u4E0D\u9700\u8981\u81EA\u5DF1\u624B\u5199\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u54E6"),t.a.createElement("p",null,"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u5C31\u662F\u666E\u901A\u7684 React \u7EC4\u4EF6\uFF0C\u552F\u4E00\u7684\u8981\u6C42\u662F\u8981\u6709 value/onChange \u8FD9\u4E24\u4E2A props\uFF0C\u7528\u4E8E\u53CC\u5411\u7ED1\u5B9A\u503C\u3002\u6240\u4EE5\u5982\u679C\u73B0\u6210\u7684\u7EC4\u4EF6\u5DF2\u7ECF\u9ED8\u8BA4\u4F7F\u7528\u4E86 value/onChange\uFF0C\u5C31\u53EF\u4EE5\u76F4\u63A5\u62FF\u6765\u7528\u3002"),t.a.createElement("p",null,"\u4E3E\u4F8B\u6765\u8BF4\uFF1A\u73B0\u5728\u6211\u4EEC\u9700\u8981\u4F7F\u7528\u201C\u7EA7\u8054\u9009\u62E9\u201D\u7EC4\u4EF6\uFF0CFormRender \u5E76\u6CA1\u6709\u5185\u7F6E\u652F\u6301\u3002\u8FD9\u65F6\u6253\u5F00 antd \u6587\u6863 ",t.a.createElement(b.Link,{to:"https://ant.design/components/cascader/%EF%BC%8C%E6%88%91%E4%BB%AC%E7%9C%8B%E5%88%B0cascader%E9%BB%98%E8%AE%A4%E4%BD%BF%E7%94%A8%E4%BA%86"},"https://ant.design/components/cascader/\uFF0C\u6211\u4EEC\u770B\u5230cascader\u9ED8\u8BA4\u4F7F\u7528\u4E86")," value/onChange\uFF0C\u90A3\u5C31\u76F4\u63A5\u62FF\u6765\u7528\u5427\uFF1A"),t.a.createElement(J.a,{code:`import { Cascader } from 'antd';

// \u9876\u5C42\u5F15\u5165\u6CE8\u518C
...
<Form
  form={form}
  schema={schema}
  widgets={{ cascader: Cascader }}
/>

// schema \u4E2D\u4F7F\u7528
location: {
  title: '\u7701\u5E02\u533A',
  type: 'string',
  widget: 'cascader',
  props: {
    ...
  }
},`,lang:"js"}),t.a.createElement("h2",{id:"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u6536\u5230\u7684-props"},t.a.createElement(b.AnchorLink,{to:"#\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u6536\u5230\u7684-props","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u6536\u5230\u7684 props"),t.a.createElement("p",null,"\u4F7F\u7528\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u65F6\uFF0C\u5927\u591A\u6709\u590D\u6742\u5B9A\u5236\u9700\u6C42\uFF0CFormRender \u63D0\u4F9B\u4E86\u4E30\u5BCC\u7684 props\uFF1A"),t.a.createElement("ul",null,t.a.createElement("li",null,t.a.createElement("strong",null,"disabled"),"\uFF1A\u662F\u5426\u7981\u6B62\u8F93\u5165"),t.a.createElement("li",null,t.a.createElement("strong",null,"readOnly"),"\uFF1A\u662F\u5426\u53EA\u8BFB"),t.a.createElement("li",null,t.a.createElement("strong",null,"value"),"\uFF1A\u7EC4\u4EF6\u73B0\u5728\u7684\u503C"),t.a.createElement("li",null,t.a.createElement("strong",null,"onChange"),"\uFF1A\u51FD\u6570\uFF0C\u63A5\u6536 value \u4E3A\u5165\u53C2\uFF0C\u7528\u4E8E\u5C06\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7684\u8FD4\u56DE\u503C\u540C\u6B65\u7ED9 Form"),t.a.createElement("li",null,t.a.createElement("strong",null,"schema"),"\uFF1A\u7EC4\u4EF6\u5BF9\u5E94\u7684\u5B50 schema"),t.a.createElement("li",null,t.a.createElement("strong",null,"addons.onItemChange"),": \u6CE8\u610F\u6302\u5728 addons \u4E0B\u9762\u3002\u7528\u4E8E\u5728\u672C\u7EC4\u4EF6\u5185\u4FEE\u6539\u5176\u4ED6\u7EC4\u4EF6\u7684\u503C onItemChange(path, value)"),t.a.createElement("li",null,t.a.createElement("strong",null,"addons.getValue"),": \u7528\u4E8E\u901A\u8FC7\u8DEF\u5F84\u5B57\u7B26\u4E32\u83B7\u53D6\u503C getValue(path)\u3002\u4F8B\u5982 ",t.a.createElement("code",null,"getValue('a.b[2].c')"),"\u3002getValue() \u83B7\u53D6 formData"),t.a.createElement("li",null,t.a.createElement("strong",null,"addons.dataPath"),': \u76EE\u524D\u6570\u636E\u6240\u5728\u7684 path\uFF0C\u4F8B\u5982"a.b[2].c[0].d"\uFF0Cstring \u7C7B\u578B\u3002'),t.a.createElement("li",null,t.a.createElement("strong",null,"addons.dataIndex"),': \u5982\u679C dataPath \u4E0D\u5305\u542B\u6570\u7EC4\uFF0C\u5219\u4E3A [], \u5982\u679C dataPath \u5305\u542B\u6570\u7EC4\uFF0C\u4F8B\u5982"a.b[2].c[0].d"\uFF0C\u5219\u4E3A [2,0]\u3002\u662F\u81EA\u4E0A\u5230\u4E0B\u6240\u6709\u7ECF\u8FC7\u7684\u6570\u7EC4\u7684 index \u6309\u987A\u5E8F\u5B58\u653E\u7684\u4E00\u4E2A\u6570\u7EC4\u7C7B\u578B'),t.a.createElement("li",null,t.a.createElement("strong",null,"addons.setErrorFields"),": form \u65B9\u6CD5\u900F\u4F20\u7ED9\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u4F7F\u7528\uFF0C\u81EA\u5B9A\u4E49 error"),t.a.createElement("li",null,t.a.createElement("strong",null,"addons.removeErrorField"),": form \u65B9\u6CD5\u900F\u4F20\u7ED9\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u4F7F\u7528\uFF0C\u5220\u9664\u6240\u6709 error"),t.a.createElement("li",null,t.a.createElement("strong",null,"addons.setSchema"),": form \u65B9\u6CD5\u900F\u4F20\u7ED9\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u4F7F\u7528\uFF0C\u4FEE\u6539 schema"),t.a.createElement("li",null,t.a.createElement("strong",null,"addons.resetFields"),": form \u65B9\u6CD5\u900F\u4F20\u7ED9\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u4F7F\u7528\uFF0C\u91CD\u7F6E\u6E05\u7A7A\u6574\u4E2A\u8868\u5355"),t.a.createElement("li",null,t.a.createElement("strong",null,"addons.dependValues"),": \u5F53\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u5BF9\u5E94\u7684 schema \u4F7F\u7528\u5230 dependencies \u5B57\u6BB5\u65F6\uFF0C\u5728\u6B64\u83B7\u5F97 dependencies \u5BF9\u5E94\u7684\u8868\u5355\u9879\u7684\u5B9E\u65F6\u7684\u503C")),t.a.createElement("h2",{id:"antd-\u7EC4\u4EF6\u6539\u9020\u6210\u81EA\u5B9A\u4E49\u7EC4\u4EF6"},t.a.createElement(b.AnchorLink,{to:"#antd-\u7EC4\u4EF6\u6539\u9020\u6210\u81EA\u5B9A\u4E49\u7EC4\u4EF6","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"antd \u7EC4\u4EF6\u6539\u9020\u6210\u81EA\u5B9A\u4E49\u7EC4\u4EF6"),t.a.createElement("p",null,"\u5927\u591A\u6570\u60C5\u51B5\u4E0B\uFF0Cantd \u7684\u7EC4\u4EF6\u53EF\u4EE5\u62FF\u6765\u5373\u7528\u3002\u4F46\u6709\u65F6\u7EC4\u4EF6\u7684 props \u5E76\u4E0D\u662F\u7EA6\u5B9A\u7684 value/onChange, \u4F8B\u5982 Checkbox \u7684\u60C5\u51B5\uFF0Cvalue \u503C\u5BF9\u5E94\u7684\u662F checked\uFF0C\u6B64\u65F6\u53EA\u9700\u8981\u5C11\u91CF\u6539\u52A8\u5373\u53EF\uFF1A"),t.a.createElement(J.a,{code:`import { Checkbox } from 'antd';

const MyCheckBox = ({ value, ...rest }) => {
  return <Checkbox checked={value} {...rest} />;
};`,lang:"js"}),t.a.createElement("h2",{id:"\u53EA\u8BFB\u6A21\u5F0F\u4E0B\u7684\u81EA\u5B9A\u4E49\u7EC4\u4EF6"},t.a.createElement(b.AnchorLink,{to:"#\u53EA\u8BFB\u6A21\u5F0F\u4E0B\u7684\u81EA\u5B9A\u4E49\u7EC4\u4EF6","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"\u53EA\u8BFB\u6A21\u5F0F\u4E0B\u7684\u81EA\u5B9A\u4E49\u7EC4\u4EF6"),t.a.createElement("p",null,"\u53EA\u8BFB\u6A21\u5F0F\u4E0B\uFF0C\u9ED8\u8BA4\u4F1A\u6E32\u67D3\u5185\u7F6E\u7684 html \u7EC4\u4EF6\uFF0C\u4F46\u6709\u65F6 html \u7EC4\u4EF6\u5E76\u4E0D\u80FD\u6EE1\u8DB3\u4E00\u4E2A\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u5728\u53EA\u8BFB\u6A21\u5F0F\u4E0B\u9700\u8981\u7684\u5C55\u793A\uFF0C\u6B64\u65F6\u53EF\u4F7F\u7528",t.a.createElement("code",null,"readOnlyWidget"),"\u5B57\u6BB5\u6765\u6307\u5B9A\u53EA\u8BFB\u6A21\u5F0F\u4E0B\u7684\u5C55\u793A\u3002"),t.a.createElement(J.a,{code:`{
  "type": "object",
  "properties": {
    "string": {
      "title": "\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6",
      "type": "string",
      "widget": "site",
      "readOnlyWidget": "siteText"
    }
  }
}`,lang:"json"}),t.a.createElement("p",null,"\u5982\u679C\u4F60\u6253\u7B97\u5728\u4E00\u4E2A\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u91CC\u901A\u8FC7 readOnly \u53C2\u6570\u5224\u65AD\u6761\u4EF6\u5C55\u793A\uFF0C\u65E2\u662F\u8BF4\uFF0Csite \u7EC4\u4EF6\u5DF2\u7ECF\u5199\u4E86\u53EA\u8BFB\u548C\u975E\u53EA\u8BFB\u60C5\u51B5\u4E0B\u7684\u6E32\u67D3"),t.a.createElement(J.a,{code:`const SiteInput = ({ readOnly, value, ...rest }) => {
  if (readOnly) return <div>{\`https://\${value}.com\`}</div>;
  return (
    <Input addonBefore="https://" addonAfter=".com" value={value} {...rest} />
  );
};`,lang:"js"}),t.a.createElement("p",null,"\u6B64\u65F6\u53EF\u4EE5\u6307\u5B9A ",t.a.createElement("code",null,"readOnlyWidget")," \u548C ",t.a.createElement("code",null,"widget")," \u4E3A\u540C\u4E00\u4E2A\u7EC4\u4EF6\uFF1A"),t.a.createElement(J.a,{code:`{
  "type": "object",
  "properties": {
    "string": {
      "title": "\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6",
      "type": "string",
      "widget": "site",
      "readOnlyWidget": "site"
    }
  }
}`,lang:"json"}),t.a.createElement("h2",{id:"\u6700\u4F73\u5B9E\u8DF5"},t.a.createElement(b.AnchorLink,{to:"#\u6700\u4F73\u5B9E\u8DF5","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"\u6700\u4F73\u5B9E\u8DF5"),t.a.createElement("p",null,"\u540C\u4E00\u4E2A\u9879\u76EE\u4E0B\u4E0D\u540C\u7684 form \u91CC\uFF0C\u4F7F\u7528\u5230\u7684\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u53EF\u80FD\u5927\u81F4\u76F8\u540C\uFF0C\u4F46\u4E5F\u6709\u53EF\u80FD\u4E92\u76F8\u4E0D\u540C\uFF0C\u7B14\u8005\u5EFA\u8BAE\u662F\u4E2D\u5FC3\u5316\u4E00\u4E2A Form \u7EC4\u4EF6\uFF0C\u5E76\u4E00\u6B21\u6027\u5C06\u6240\u6709\u9700\u8981\u7684\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u6CE8\u5165\u5176\u4E2D\u3002\u5728\u9879\u76EE\u7684\u5404\u5904\u5F15\u5165\u5BF9\u5E94\u7EC4\u4EF6\uFF1A"),t.a.createElement(J.a,{code:`//  /Component/FormRender.js
import Form from 'form-render';
import Cascade from './Cascade';
import Percentage from './Percentage';
import MyCheckBox from './MyCheckBox';
import ExcelUploader from './ExcelUploader';

const FormRender = props => {
  return (
    <Form
      widgets={{
        percentage: Percentage,
        cascade: Cascade,
        myCheck: MyCheckBox,
        excelUpload: ExcelUploader,
      }}
      {...props}
    />
  );
};`,lang:"js"}),t.a.createElement("p",null,"\u7136\u540E\u5728\u6BCF\u4E2A form \u9875\u9762\u7EDF\u4E00\u5F15\u5165\u4F7F\u7528"),t.a.createElement(J.a,{code:`import { useForm } from 'form-render';
import FormRender from './Component/FormRender';
const Demo1 = props => {
  const form = useForm();
  return <FormRender form={form} onFinish={() => {}} />;
};`,lang:"js"}),t.a.createElement("h2",{id:"\u5185\u7F6E\u7EC4\u4EF6"},t.a.createElement(b.AnchorLink,{to:"#\u5185\u7F6E\u7EC4\u4EF6","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"\u5185\u7F6E\u7EC4\u4EF6"),t.a.createElement("p",null,"\u4F7F\u7528\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u524D\uFF0C\u4E5F\u8BB8\u5DF2\u7ECF\u6709\u5185\u7F6E\u7EC4\u4EF6\u652F\u6301\u3002\u5177\u4F53\u89C1 ",t.a.createElement(b.Link,{to:"/form-render/schema/inner-widget"},"schema \u4E0E\u5185\u7F6E\u7EC4\u4EF6"))))))},p8sG:function(Fn,un,e){"use strict";Fn.exports=e("80pN")}}]);
