(window.webpackJsonp=window.webpackJsonp||[]).push([[47,13],{"0zqC":function(Dn,dn,e){"use strict";e.r(dn);var $=e("tJVT"),t=e("q1tI"),b=e.n(t),W=e("wx14"),le=e("rePB"),J=e("ODXe"),an=e("U8pU"),Ce=e("Ff2n"),de=e("VTBJ"),ze=e("TSYQ"),Oe=e.n(ze),cn=e("Zm9Q"),Pn=e("5Z9U"),vn=e("6cGi"),sn=e("KQm4"),xe=e("wgJM"),wn=e("t23M");function Tn(s){var u=Object(t.useRef)(),g=Object(t.useRef)(!1);function R(){for(var j=arguments.length,C=new Array(j),D=0;D<j;D++)C[D]=arguments[D];g.current||(xe.a.cancel(u.current),u.current=Object(xe.a)(function(){s.apply(void 0,C)}))}return Object(t.useEffect)(function(){return function(){g.current=!0,xe.a.cancel(u.current)}},[]),R}function gn(s){var u=Object(t.useRef)([]),g=Object(t.useState)({}),R=Object(J.a)(g,2),j=R[1],C=Object(t.useRef)(typeof s=="function"?s():s),D=Tn(function(){var K=C.current;u.current.forEach(function(x){K=x(K)}),u.current=[],C.current=K,j({})});function F(K){u.current.push(K),D()}return[C.current,F]}var Te=e("4IlW");function nt(s,u){var g,R=s.prefixCls,j=s.id,C=s.active,D=s.rtl,F=s.tab,K=F.key,x=F.tab,L=F.disabled,H=F.closeIcon,U=s.tabBarGutter,re=s.tabPosition,Y=s.closable,X=s.renderWrapper,se=s.removeAriaLabel,z=s.editable,q=s.onClick,ne=s.onRemove,Q=s.onFocus,ae="".concat(R,"-tab");t.useEffect(function(){return ne},[]);var k={};re==="top"||re==="bottom"?k[D?"marginLeft":"marginRight"]=U:k.marginBottom=U;var pe=z&&Y!==!1&&!L;function _(te){L||q(te)}function oe(te){te.preventDefault(),te.stopPropagation(),z.onEdit("remove",{key:K,event:te})}var ue=t.createElement("div",{key:K,ref:u,className:Oe()(ae,(g={},Object(le.a)(g,"".concat(ae,"-with-remove"),pe),Object(le.a)(g,"".concat(ae,"-active"),C),Object(le.a)(g,"".concat(ae,"-disabled"),L),g)),style:k,onClick:_},t.createElement("div",{role:"tab","aria-selected":C,id:j&&"".concat(j,"-tab-").concat(K),className:"".concat(ae,"-btn"),"aria-controls":j&&"".concat(j,"-panel-").concat(K),"aria-disabled":L,tabIndex:L?null:0,onClick:function(G){G.stopPropagation(),_(G)},onKeyDown:function(G){[Te.a.SPACE,Te.a.ENTER].includes(G.which)&&(G.preventDefault(),_(G))},onFocus:Q},x),pe&&t.createElement("button",{type:"button","aria-label":se||"remove",tabIndex:0,className:"".concat(ae,"-remove"),onClick:function(G){G.stopPropagation(),oe(G)}},H||z.removeIcon||"\xD7"));return X&&(ue=X(ue)),ue}var Mn=t.forwardRef(nt),tt={width:0,height:0,left:0,top:0};function dt(s,u,g){return Object(t.useMemo)(function(){for(var R,j=new Map,C=u.get((R=s[0])===null||R===void 0?void 0:R.key)||tt,D=C.left+C.width,F=0;F<s.length;F+=1){var K=s[F].key,x=u.get(K);if(!x){var L;x=u.get((L=s[F-1])===null||L===void 0?void 0:L.key)||tt}var H=j.get(K)||Object(de.a)({},x);H.right=D-H.left-H.width,j.set(K,H)}return j},[s.map(function(R){return R.key}).join("_"),u,g])}var rt={width:0,height:0,left:0,top:0,right:0};function ct(s,u,g,R,j){var C=j.tabs,D=j.tabPosition,F=j.rtl,K,x,L;["top","bottom"].includes(D)?(K="width",x=F?"right":"left",L=Math.abs(u.left)):(K="height",x="top",L=-u.top);var H=u[K],U=g[K],re=R[K],Y=H;return U+re>H&&(Y=H-re),Object(t.useMemo)(function(){if(!C.length)return[0,0];for(var X=C.length,se=X,z=0;z<X;z+=1){var q=s.get(C[z].key)||rt;if(q[x]+q[K]>L+Y){se=z-1;break}}for(var ne=0,Q=X-1;Q>=0;Q-=1){var ae=s.get(C[Q].key)||rt;if(ae[x]<L){ne=Q+1;break}}return[ne,se]},[s,L,Y,D,C.map(function(X){return X.key}).join("_"),F])}var Bn=e("Gytx"),at=e.n(Bn),Vn=e("Kwbf");function mt(s,u){var g=s.prefixCls,R=s.invalidate,j=s.item,C=s.renderItem,D=s.responsive,F=s.registerSize,K=s.itemKey,x=s.className,L=s.style,H=s.children,U=s.display,re=s.order,Y=s.component,X=Y===void 0?"div":Y,se=Object(Ce.a)(s,["prefixCls","invalidate","item","renderItem","responsive","registerSize","itemKey","className","style","children","display","order","component"]),z=D&&!U;function q(pe){F(K,pe)}t.useEffect(function(){return function(){q(null)}},[]);var ne=C&&j!==void 0?C(j):H,Q;R||(Q={opacity:z?0:1,height:z?0:void 0,overflowY:z?"hidden":void 0,order:D?re:void 0,pointerEvents:z?"none":void 0});var ae={};z&&(ae["aria-hidden"]=!0);var k=t.createElement(X,Object(W.a)({className:Oe()(!R&&g,x),style:Object(de.a)(Object(de.a)({},Q),L)},ae,se,{ref:u}),ne);return D&&(k=t.createElement(wn.default,{onResize:function(_){var oe=_.offsetWidth;q(oe)}},k)),k}var Kn=t.forwardRef(mt);Kn.displayName="Item";var Wn=Kn;function Jn(){var s=Object(t.useState)({}),u=Object(J.a)(s,2),g=u[1],R=Object(t.useRef)([]),j=Object(t.useRef)(!1),C=0,D=0;Object(t.useEffect)(function(){return function(){j.current=!0}},[]);function F(K){var x=C;C+=1,R.current.length<x+1&&(R.current[x]=K);var L=R.current[x];function H(U){R.current[x]=typeof U=="function"?U(R.current[x]):U,xe.a.cancel(D),D=Object(xe.a)(function(){j.current||g({})})}return[L,H]}return F}var zn=function(u,g){var R=t.useContext(yn);if(!R){var j=u.component,C=j===void 0?"div":j,D=Object(Ce.a)(u,["component"]);return t.createElement(C,Object(W.a)({},D,{ref:g}))}var F=R.className,K=Object(Ce.a)(R,["className"]),x=u.className,L=Object(Ce.a)(u,["className"]);return t.createElement(yn.Provider,{value:null},t.createElement(Wn,Object(W.a)({ref:g,className:Oe()(F,x)},K,L)))},xn=t.forwardRef(zn);xn.displayName="RawItem";var st=xn,yn=t.createContext(null),N="responsive",I="invalidate";function P(s){return"+ ".concat(s.length," ...")}function f(s,u){var g=s.prefixCls,R=g===void 0?"rc-overflow":g,j=s.data,C=j===void 0?[]:j,D=s.renderItem,F=s.renderRawItem,K=s.itemKey,x=s.itemWidth,L=x===void 0?10:x,H=s.ssr,U=s.style,re=s.className,Y=s.maxCount,X=s.renderRest,se=s.renderRawRest,z=s.suffix,q=s.component,ne=q===void 0?"div":q,Q=s.itemComponent,ae=s.onVisibleChange,k=Object(Ce.a)(s,["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"]),pe=Jn(),_=H==="full",oe=pe(null),ue=Object(J.a)(oe,2),te=ue[0],G=ue[1],ie=te||0,fe=pe(new Map),me=Object(J.a)(fe,2),ye=me[0],Ne=me[1],he=pe(0),ge=Object(J.a)(he,2),De=ge[0],je=ge[1],Re=pe(0),Se=Object(J.a)(Re,2),Fe=Se[0],Ue=Se[1],Ae=pe(0),we=Object(J.a)(Ae,2),We=we[0],Ie=we[1],bn=Object(t.useState)(null),Xe=Object(J.a)(bn,2),$e=Xe[0],qe=Xe[1],mn=Object(t.useState)(null),fn=Object(J.a)(mn,2),Ee=fn[0],Be=fn[1],He=t.useMemo(function(){return Ee===null&&_?Number.MAX_SAFE_INTEGER:Ee||0},[Ee,te]),Ve=Object(t.useState)(!1),Fn=Object(J.a)(Ve,2),Gn=Fn[0],An=Fn[1],Qe="".concat(R,"-item"),On=Math.max(De,Fe),_e=C.length&&Y===N,Sn=Y===I,Ge=_e||typeof Y=="number"&&C.length>Y,Ze=Object(t.useMemo)(function(){var ce=C;return _e?te===null&&_?ce=C:ce=C.slice(0,Math.min(C.length,ie/L)):typeof Y=="number"&&(ce=C.slice(0,Y)),ce},[C,L,te,Y,_e]),Cn=Object(t.useMemo)(function(){return _e?C.slice(He+1):C.slice(Ze.length)},[C,Ze,_e,He]),tn=Object(t.useCallback)(function(ce,be){var Pe;return typeof K=="function"?K(ce):(Pe=K&&(ce==null?void 0:ce[K]))!==null&&Pe!==void 0?Pe:be},[K]),Je=Object(t.useCallback)(D||function(ce){return ce},[D]);function Ke(ce,be){Be(ce),be||(An(ce<C.length-1),ae==null||ae(ce))}function Yn(ce,be){G(be.clientWidth)}function Xn(ce,be){Ne(function(Pe){var Ye=new Map(Pe);return be===null?Ye.delete(ce):Ye.set(ce,be),Ye})}function ot(ce,be){Ue(be),je(Fe)}function pn(ce,be){Ie(be)}function un(ce){return ye.get(tn(Ze[ce],ce))}t.useLayoutEffect(function(){if(ie&&On&&Ze){var ce=We,be=Ze.length,Pe=be-1;if(!be){Ke(0),qe(null);return}for(var Ye=0;Ye<be;Ye+=1){var qn=un(Ye);if(qn===void 0){Ke(Ye-1,!0);break}if(ce+=qn,Ye===Pe-1&&ce+un(Pe)<=ie){Ke(Pe),qe(null);break}else if(ce+On>ie){Ke(Ye-1),qe(ce-qn-We+Fe);break}else if(Ye===Pe){Ke(Pe),qe(ce-We);break}}z&&un(0)+We>ie&&qe(null)}},[ie,ye,Fe,We,tn,Ze]);var Qn=Gn&&!!Cn.length,hn={};$e!==null&&_e&&(hn={position:"absolute",left:$e,top:0});var rn={prefixCls:Qe,responsive:_e,component:Q,invalidate:Sn},Zn=F?function(ce,be){var Pe=tn(ce,be);return t.createElement(yn.Provider,{key:Pe,value:Object(de.a)(Object(de.a)({},rn),{},{order:be,item:ce,itemKey:Pe,registerSize:Xn,display:be<=He})},F(ce,be))}:function(ce,be){var Pe=tn(ce,be);return t.createElement(Wn,Object(W.a)({},rn,{order:be,key:Pe,item:ce,renderItem:Je,itemKey:Pe,registerSize:Xn,display:be<=He}))},Rn,kn={order:Qn?He:Number.MAX_SAFE_INTEGER,className:"".concat(Qe,"-rest"),registerSize:ot,display:Qn};if(se)se&&(Rn=t.createElement(yn.Provider,{value:Object(de.a)(Object(de.a)({},rn),kn)},se(Cn)));else{var en=X||P;Rn=t.createElement(Wn,Object(W.a)({},rn,kn),typeof en=="function"?en(Cn):en)}var En=t.createElement(ne,Object(W.a)({className:Oe()(!Sn&&R,re),style:U,ref:u},k),Ze.map(Zn),Ge?Rn:null,z&&t.createElement(Wn,Object(W.a)({},rn,{order:He,className:"".concat(Qe,"-suffix"),registerSize:pn,display:!0,style:hn}),z));return _e&&(En=t.createElement(wn.default,{onResize:Yn},En)),En}var i=t.forwardRef(f);i.displayName="Overflow",i.Item=st,i.RESPONSIVE=N,i.INVALIDATE=I;var h=i,y=h,O=e("1OyB"),o=e("vuIU"),p=e("Ji7U"),l=e("LK+K"),A=e("bT9E"),w=e("YrtM"),S=t.createContext(null);function d(s,u){var g=Object(de.a)({},s);return Object.keys(u).forEach(function(R){var j=u[R];j!==void 0&&(g[R]=j)}),g}function T(s){var u=s.children,g=s.locked,R=Object(Ce.a)(s,["children","locked"]),j=t.useContext(S),C=Object(w.a)(function(){return d(j,R)},[j,R],function(D,F){return!g&&(D[0]!==F[0]||!at()(D[1],F[1]))});return t.createElement(S.Provider,{value:C},u)}function m(s,u,g,R){var j=t.useContext(S),C=j.activeKey,D=j.onActive,F=j.onInactive,K={active:C===s};return u||(K.onMouseEnter=function(x){g==null||g({key:s,domEvent:x}),D(s)},K.onMouseLeave=function(x){R==null||R({key:s,domEvent:x}),F(s)}),K}function r(s){var u=s.item,g=Object(Ce.a)(s,["item"]);return Object.defineProperty(g,"item",{get:function(){return Object(Vn.a)(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),u}}),g}function n(s){var u=s.icon,g=s.props,R=s.children,j;return typeof u=="function"?j=t.createElement(u,Object(de.a)({},g)):j=u,j||R||null}function a(s){var u=t.useContext(S),g=u.mode,R=u.rtl,j=u.inlineIndent;if(g!=="inline")return null;var C=s;return R?{paddingRight:C*j}:{paddingLeft:C*j}}var c=[],v=t.createContext(null);function E(){return t.useContext(v)}var M=t.createContext(c);function B(s){var u=t.useContext(M);return t.useMemo(function(){return s!==void 0?[].concat(Object(sn.a)(u),[s]):u},[u,s])}var V=t.createContext(null),Le=t.createContext(null);function nn(s,u){return s===void 0?null:"".concat(s,"-").concat(u)}function on(s){var u=t.useContext(Le);return nn(u,s)}var Nn=function(s){Object(p.a)(g,s);var u=Object(l.a)(g);function g(){return Object(O.a)(this,g),u.apply(this,arguments)}return Object(o.a)(g,[{key:"render",value:function(){var j=this.props,C=j.title,D=j.attribute,F=j.elementRef,K=Object(Ce.a)(j,["title","attribute","elementRef"]),x=Object(A.a)(K,["eventKey"]);return Object(Vn.a)(!D,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),t.createElement(y.Item,Object(W.a)({},D,{title:typeof C=="string"?C:void 0},x,{ref:F}))}}]),g}(t.Component),Un=function(u){var g,R=u.style,j=u.className,C=u.eventKey,D=u.disabled,F=u.itemIcon,K=u.children,x=u.role,L=u.onMouseEnter,H=u.onMouseLeave,U=u.onClick,re=u.onKeyDown,Y=u.onFocus,X=Object(Ce.a)(u,["style","className","eventKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"]),se=on(C),z=t.useContext(S),q=z.prefixCls,ne=z.onItemClick,Q=z.disabled,ae=z.overflowDisabled,k=z.itemIcon,pe=z.selectedKeys,_=z.onActive,oe="".concat(q,"-item"),ue=t.useRef(),te=t.useRef(),G=Q||D,ie=B(C),fe=function(Ae){return{key:C,keyPath:ie,item:ue.current,domEvent:Ae}},me=F||k,ye=m(C,G,L,H),Ne=ye.active,he=Object(Ce.a)(ye,["active"]),ge=pe.includes(C),De=a(ie.length),je=function(Ae){if(!G){var we=fe(Ae);U==null||U(r(we)),ne(we)}},Re=function(Ae){if(re==null||re(Ae),Ae.which===Te.a.ENTER){var we=fe(Ae);U==null||U(r(we)),ne(we)}},Se=function(Ae){_(C),Y==null||Y(Ae)},Fe={};return u.role==="option"&&(Fe["aria-selected"]=ge),t.createElement(Nn,Object(W.a)({ref:ue,elementRef:te,role:x===null?"none":x||"menuitem",tabIndex:D?null:-1,"data-menu-id":ae&&se?null:se},X,he,Fe,{component:"li","aria-disabled":D,style:Object(de.a)(Object(de.a)({},De),R),className:Oe()(oe,(g={},Object(le.a)(g,"".concat(oe,"-active"),Ne),Object(le.a)(g,"".concat(oe,"-selected"),ge),Object(le.a)(g,"".concat(oe,"-disabled"),G),g),j),onClick:je,onKeyDown:Re,onFocus:Se}),K,t.createElement(n,{props:Object(de.a)(Object(de.a)({},u),{},{isSelected:ge}),icon:me}))};function In(s){var u=s.eventKey,g=E(),R=B(u);return t.useEffect(function(){if(g)return g.registerPath(u,R),function(){g.unregisterPath(u,R)}},[R]),g?null:t.createElement(Un,s)}var Hn=In;function wt(s,u){return Object(cn.a)(s).map(function(g,R){if(t.isValidElement(g)){var j=g.key;return j==null&&(j="tmp_key-".concat([].concat(Object(sn.a)(u),[R]).join("-"))),t.cloneElement(g,{key:j,eventKey:j})}return g})}function it(s){var u=t.useRef(s);u.current=s;var g=t.useCallback(function(){for(var R,j=arguments.length,C=new Array(j),D=0;D<j;D++)C[D]=arguments[D];return(R=u.current)===null||R===void 0?void 0:R.call.apply(R,[u].concat(C))},[]);return s?g:void 0}var Cr=function(u,g){var R=u.className,j=u.children,C=Object(Ce.a)(u,["className","children"]),D=t.useContext(S),F=D.prefixCls,K=D.mode;return t.createElement("ul",Object(W.a)({className:Oe()(F,"".concat(F,"-sub"),"".concat(F,"-").concat(K==="inline"?"inline":"vertical"),R)},C,{"data-menu-list":!0,ref:g}),j)},Xt=t.forwardRef(Cr);Xt.displayName="SubMenuList";var Qt=Xt,Rr=e("uciX"),Ln={adjustX:1,adjustY:1},Zt={topLeft:{points:["bl","tl"],overflow:Ln,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Ln,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:Ln,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:Ln,offset:[4,0]}},Er={topLeft:{points:["bl","tl"],overflow:Ln,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Ln,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:Ln,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:Ln,offset:[4,0]}},fa=Zt;function kt(s,u,g){if(u)return u;if(g)return g[s]||g.other}var jr={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function Dr(s){var u=s.prefixCls,g=s.visible,R=s.children,j=s.popup,C=s.popupClassName,D=s.popupOffset,F=s.disabled,K=s.mode,x=s.onVisibleChange,L=t.useContext(S),H=L.getPopupContainer,U=L.rtl,re=L.subMenuOpenDelay,Y=L.subMenuCloseDelay,X=L.builtinPlacements,se=L.triggerSubMenuAction,z=L.forceSubMenuRender,q=L.motion,ne=L.defaultMotions,Q=t.useState(!1),ae=Object(J.a)(Q,2),k=ae[0],pe=ae[1],_=U?Object(de.a)(Object(de.a)({},Er),X):Object(de.a)(Object(de.a)({},Zt),X),oe=jr[K],ue=kt(K,q,ne),te=Object(de.a)(Object(de.a)({},ue),{},{leavedClassName:"".concat(u,"-hidden"),removeOnLeave:!1,motionAppear:!0}),G=t.useRef();return t.useEffect(function(){return G.current=Object(xe.a)(function(){pe(g)}),function(){xe.a.cancel(G.current)}},[g]),t.createElement(Rr.a,{prefixCls:u,popupClassName:Oe()("".concat(u,"-popup"),Object(le.a)({},"".concat(u,"-rtl"),U),C),stretch:K==="horizontal"?"minWidth":null,getPopupContainer:H,builtinPlacements:_,popupPlacement:oe,popupVisible:k,popup:j,popupAlign:D&&{offset:D},action:F?[]:[se],mouseEnterDelay:re,mouseLeaveDelay:Y,onPopupVisibleChange:x,forceRender:z,popupMotion:te},R)}var Pr=e("8XRh");function Tr(s){var u=s.id,g=s.open,R=s.keyPath,j=s.children,C="inline",D=t.useContext(S),F=D.prefixCls,K=D.forceSubMenuRender,x=D.motion,L=D.defaultMotions,H=D.mode,U=t.useRef(!1);U.current=H===C;var re=t.useState(!U.current),Y=Object(J.a)(re,2),X=Y[0],se=Y[1],z=U.current?g:!1;t.useEffect(function(){U.current&&se(!1)},[H]);var q=Object(de.a)({},kt(C,x,L));R.length>1&&(q.motionAppear=!1);var ne=q.onVisibleChanged;return q.onVisibleChanged=function(Q){return!U.current&&!Q&&se(!0),ne==null?void 0:ne(Q)},X?null:t.createElement(T,{mode:C,locked:!U.current},t.createElement(Pr.default,Object(W.a)({visible:z},q,{forceRender:K,removeOnLeave:!1,leavedClassName:"".concat(F,"-hidden")}),function(Q){var ae=Q.className,k=Q.style;return t.createElement(Qt,{id:u,className:ae,style:k},j)}))}var Nr=function(u){var g,R=u.style,j=u.className,C=u.title,D=u.eventKey,F=u.disabled,K=u.internalPopupClose,x=u.children,L=u.itemIcon,H=u.expandIcon,U=u.popupClassName,re=u.popupOffset,Y=u.onClick,X=u.onMouseEnter,se=u.onMouseLeave,z=u.onTitleClick,q=u.onTitleMouseEnter,ne=u.onTitleMouseLeave,Q=Object(Ce.a)(u,["style","className","title","eventKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"]),ae=on(D),k=t.useContext(S),pe=k.prefixCls,_=k.mode,oe=k.openKeys,ue=k.disabled,te=k.overflowDisabled,G=k.activeKey,ie=k.selectedKeys,fe=k.itemIcon,me=k.expandIcon,ye=k.onItemClick,Ne=k.onOpenChange,he=k.onActive,ge=t.useContext(V),De=ge.isSubPathKey,je=B(),Re="".concat(pe,"-submenu"),Se=ue||F,Fe=t.useRef(),Ue=t.useRef(),Ae=L||fe,we=H||me,We=oe.includes(D),Ie=!te&&We,bn=De(ie,D),Xe=m(D,Se,q,ne),$e=Xe.active,qe=Object(Ce.a)(Xe,["active"]),mn=t.useState(!1),fn=Object(J.a)(mn,2),Ee=fn[0],Be=fn[1],He=function(Ke){Se||Be(Ke)},Ve=function(Ke){He(!0),X==null||X({key:D,domEvent:Ke})},Fn=function(Ke){He(!1),se==null||se({key:D,domEvent:Ke})},Gn=t.useMemo(function(){return $e||(_!=="inline"?Ee||De([G],D):!1)},[_,$e,G,Ee,D,De]),An=a(je.length),Qe=function(Ke){Se||(z==null||z({key:D,domEvent:Ke}),_==="inline"&&Ne(D,!We))},On=it(function(Je){Y==null||Y(r(Je)),ye(Je)}),_e=function(Ke){_!=="inline"&&Ne(D,Ke)},Sn=function(){he(D)},Ge=ae&&"".concat(ae,"-popup"),Ze=t.createElement("div",Object(W.a)({role:"menuitem",style:An,className:"".concat(Re,"-title"),tabIndex:Se?null:-1,ref:Fe,title:typeof C=="string"?C:null,"data-menu-id":te&&ae?null:ae,"aria-expanded":Ie,"aria-haspopup":!0,"aria-controls":Ge,"aria-disabled":Se,onClick:Qe,onFocus:Sn},qe),C,t.createElement(n,{icon:_!=="horizontal"?we:null,props:Object(de.a)(Object(de.a)({},u),{},{isOpen:Ie,isSubMenu:!0})},t.createElement("i",{className:"".concat(Re,"-arrow")}))),Cn=t.useRef(_);if(_!=="inline"&&(Cn.current=je.length>1?"vertical":_),!te){var tn=Cn.current;Ze=t.createElement(Dr,{mode:tn,prefixCls:Re,visible:!K&&Ie&&_!=="inline",popupClassName:U,popupOffset:re,popup:t.createElement(T,{mode:tn},t.createElement(Qt,{id:Ge,ref:Ue},x)),disabled:Se,onVisibleChange:_e},Ze)}return t.createElement(T,{onItemClick:On,mode:_==="horizontal"?"vertical":_,itemIcon:Ae,expandIcon:we},t.createElement(y.Item,Object(W.a)({role:"none"},Q,{component:"li",style:R,className:Oe()(Re,"".concat(Re,"-").concat(_),j,(g={},Object(le.a)(g,"".concat(Re,"-open"),Ie),Object(le.a)(g,"".concat(Re,"-active"),Gn),Object(le.a)(g,"".concat(Re,"-selected"),bn),Object(le.a)(g,"".concat(Re,"-disabled"),Se),g)),onMouseEnter:Ve,onMouseLeave:Fn}),Ze,!te&&t.createElement(Tr,{id:Ge,open:Ie,keyPath:je},x)))};function qt(s){var u=s.eventKey,g=s.children,R=B(u),j=wt(g,R),C=E();t.useEffect(function(){if(C)return C.registerPath(u,R),function(){C.unregisterPath(u,R)}},[R]);var D;return C?D=j:D=t.createElement(Nr,s,j),t.createElement(M.Provider,{value:R},D)}var Ir=e("x/xZ");function _t(s){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Object(Ir.a)(s)){var g=s.nodeName.toLowerCase(),R=["input","select","textarea","button"].includes(g)||s.isContentEditable||g==="a"&&!!s.getAttribute("href"),j=s.getAttribute("tabindex"),C=Number(j),D=null;return j&&!Number.isNaN(C)?D=C:R&&D===null&&(D=0),R&&s.disabled&&(D=null),D!==null&&(D>=0||u&&D<0)}return!1}function er(s){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,g=Object(sn.a)(s.querySelectorAll("*")).filter(function(R){return _t(R,u)});return _t(s,u)&&g.unshift(s),g}var bt=null;function pa(){bt=document.activeElement}function ha(){bt=null}function va(){if(bt)try{bt.focus()}catch(s){}}function ga(s,u){if(u.keyCode===9){var g=er(s),R=g[u.shiftKey?0:g.length-1],j=R===document.activeElement||s===document.activeElement;if(j){var C=g[u.shiftKey?g.length-1:0];C.focus(),u.preventDefault()}}}var Mt=Te.a.LEFT,Bt=Te.a.RIGHT,Kt=Te.a.UP,Ot=Te.a.DOWN,St=Te.a.ENTER,nr=Te.a.ESC,tr=[Kt,Ot,Mt,Bt];function Fr(s,u,g,R){var j,C,D,F,K="prev",x="next",L="children",H="parent";if(s==="inline"&&R===St)return{inlineTrigger:!0};var U=(j={},Object(le.a)(j,Kt,K),Object(le.a)(j,Ot,x),j),re=(C={},Object(le.a)(C,Mt,g?x:K),Object(le.a)(C,Bt,g?K:x),Object(le.a)(C,Ot,L),Object(le.a)(C,St,L),C),Y=(D={},Object(le.a)(D,Kt,K),Object(le.a)(D,Ot,x),Object(le.a)(D,St,L),Object(le.a)(D,nr,H),Object(le.a)(D,Mt,g?L:H),Object(le.a)(D,Bt,g?H:L),D),X={inline:U,horizontal:re,vertical:Y,inlineSub:U,horizontalSub:Y,verticalSub:Y},se=(F=X["".concat(s).concat(u?"":"Sub")])===null||F===void 0?void 0:F[R];switch(se){case K:return{offset:-1,sibling:!0};case x:return{offset:1,sibling:!0};case H:return{offset:-1,sibling:!1};case L:return{offset:1,sibling:!1};default:return null}}function Ar(s){for(var u=s;u;){if(u.getAttribute("data-menu-list"))return u;u=u.parentElement}return null}function wr(s,u){for(var g=s||document.activeElement;g;){if(u.has(g))return g;g=g.parentElement}return null}function Mr(s,u){var g=er(s,!0);return g.filter(function(R){return u.has(R)})}function rr(s,u,g){var R=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!s)return null;var j=Mr(s,u),C=j.length,D=j.findIndex(function(F){return g===F});return R<0?D===-1?D=C-1:D-=1:R>0&&(D+=1),D=(D+C)%C,j[D]}function Br(s,u,g,R,j,C,D,F,K,x){var L=t.useRef(),H=t.useRef();H.current=u;var U=function(){xe.a.cancel(L.current)};return t.useEffect(function(){return function(){U()}},[]),function(re){var Y=re.which;if([].concat(tr,[St,nr]).includes(Y)){var X,se,z,q=function(){X=new Set,se=new Map,z=new Map;var fe=C();return fe.forEach(function(me){var ye=document.querySelector("[data-menu-id='".concat(nn(R,me),"']"));ye&&(X.add(ye),z.set(ye,me),se.set(me,ye))}),X};q();var ne=se.get(u),Q=wr(ne,X),ae=z.get(Q),k=Fr(s,D(ae,!0).length===1,g,Y);if(!k)return;tr.includes(Y)&&re.preventDefault();var pe=function(fe){if(fe){var me=fe,ye=fe.querySelector("a");(ye==null?void 0:ye.getAttribute("href"))&&(me=ye);var Ne=z.get(fe);F(Ne),U(),L.current=Object(xe.a)(function(){H.current===Ne&&me.focus()})}};if(k.sibling||!Q){var _;!Q||s==="inline"?_=j.current:_=Ar(Q);var oe=rr(_,X,Q,k.offset);pe(oe)}else if(k.inlineTrigger)K(ae);else if(k.offset>0)K(ae,!0),U(),L.current=Object(xe.a)(function(){q();var ie=Q.getAttribute("aria-controls"),fe=document.getElementById(ie),me=rr(fe,X);pe(me)},5);else if(k.offset<0){var ue=D(ae,!0),te=ue[ue.length-2],G=se.get(te);K(te,!1),pe(G)}}x==null||x(re)}}var Kr=Math.random().toFixed(5).toString().slice(2),ar=0;function Wr(s){var u=Object(vn.a)(s,{value:s}),g=Object(J.a)(u,2),R=g[0],j=g[1];return t.useEffect(function(){ar+=1;var C="".concat(Kr,"-").concat(ar);j("rc-menu-uuid-".concat(C))},[]),R}var ya=e("p8sG");function xr(s){Promise.resolve().then(s)}var Wt="__RC_UTIL_PATH_SPLIT__",sr=function(u){return u.join(Wt)},Lr=function(u){return u.split(Wt)},xt="rc-menu-more";function $r(){var s=t.useState({}),u=Object(J.a)(s,2),g=u[1],R=Object(t.useRef)(new Map),j=Object(t.useRef)(new Map),C=t.useState([]),D=Object(J.a)(C,2),F=D[0],K=D[1],x=Object(t.useRef)(0),L=Object(t.useCallback)(function(z,q){var ne=sr(q);j.current.set(ne,z),R.current.set(z,ne),x.current+=1;var Q=x.current;xr(function(){Q===x.current&&g({})})},[]),H=Object(t.useCallback)(function(z,q){var ne=sr(q);j.current.delete(ne),R.current.delete(z)},[]),U=Object(t.useCallback)(function(z){K(z)},[]),re=Object(t.useCallback)(function(z,q){var ne=R.current.get(z)||"",Q=Lr(ne);return q&&F.includes(Q[0])&&Q.unshift(xt),Q},[F]),Y=Object(t.useCallback)(function(z,q){return z.some(function(ne){var Q=re(ne,!0);return Q.includes(q)})},[re]),X=function(){var q=Object(sn.a)(R.current.keys());return F.length&&q.push(xt),q},se=Object(t.useCallback)(function(z){var q="".concat(R.current.get(z)).concat(Wt),ne=new Set;return Object(sn.a)(j.current.keys()).forEach(function(Q){Q.startsWith(q)&&ne.add(j.current.get(Q))}),ne},[]);return{registerPath:L,unregisterPath:H,refreshOverflowKeys:U,isSubPathKey:Y,getKeyPath:re,getKeys:X,getSubPathKeys:se}}var Ct=[],Vr=function(u){var g,R,j=u.prefixCls,C=j===void 0?"rc-menu":j,D=u.style,F=u.className,K=u.tabIndex,x=K===void 0?0:K,L=u.children,H=u.direction,U=u.id,re=u.mode,Y=re===void 0?"vertical":re,X=u.inlineCollapsed,se=u.disabled,z=u.disabledOverflow,q=u.subMenuOpenDelay,ne=q===void 0?.1:q,Q=u.subMenuCloseDelay,ae=Q===void 0?.1:Q,k=u.forceSubMenuRender,pe=u.defaultOpenKeys,_=u.openKeys,oe=u.activeKey,ue=u.defaultActiveFirst,te=u.selectable,G=te===void 0?!0:te,ie=u.multiple,fe=ie===void 0?!1:ie,me=u.defaultSelectedKeys,ye=u.selectedKeys,Ne=u.onSelect,he=u.onDeselect,ge=u.inlineIndent,De=ge===void 0?24:ge,je=u.motion,Re=u.defaultMotions,Se=u.triggerSubMenuAction,Fe=Se===void 0?"hover":Se,Ue=u.builtinPlacements,Ae=u.itemIcon,we=u.expandIcon,We=u.overflowedIndicator,Ie=We===void 0?"...":We,bn=u.getPopupContainer,Xe=u.onClick,$e=u.onOpenChange,qe=u.onKeyDown,mn=u.openAnimation,fn=u.openTransitionName,Ee=Object(Ce.a)(u,["prefixCls","style","className","tabIndex","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName"]),Be=wt(L,Ct),He=t.useState(!1),Ve=Object(J.a)(He,2),Fn=Ve[0],Gn=Ve[1],An=t.useRef(),Qe=Wr(U),On=H==="rtl",_e=t.useMemo(function(){return Y==="inline"&&X?["vertical",X]:[Y,!1]},[Y,X]),Sn=Object(J.a)(_e,2),Ge=Sn[0],Ze=Sn[1],Cn=t.useState(0),tn=Object(J.a)(Cn,2),Je=tn[0],Ke=tn[1],Yn=Je>=Be.length-1||Ge!=="horizontal"||z,Xn=Object(vn.a)(pe,{value:_,postState:function(Z){return Z||Ct}}),ot=Object(J.a)(Xn,2),pn=ot[0],un=ot[1],Qn=t.useState(pn),hn=Object(J.a)(Qn,2),rn=hn[0],Zn=hn[1],Rn=Ge==="inline",kn=t.useRef(!1);t.useEffect(function(){Rn&&Zn(pn)},[pn]),t.useEffect(function(){if(!kn.current){kn.current=!0;return}if(Rn)un(rn);else{var ee=[];un(ee),$e==null||$e(ee)}},[Rn]);var en=$r(),En=en.registerPath,ce=en.unregisterPath,be=en.refreshOverflowKeys,Pe=en.isSubPathKey,Ye=en.getKeyPath,qn=en.getKeys,Et=en.getSubPathKeys,Jt=t.useMemo(function(){return{registerPath:En,unregisterPath:ce}},[En,ce]),zt=t.useMemo(function(){return{isSubPathKey:Pe}},[Pe]);t.useEffect(function(){be(Yn?Ct:Be.slice(Je+1).map(function(ee){return ee.key}))},[Je,Yn]);var Ut=Object(vn.a)(oe||ue&&((g=Be[0])===null||g===void 0?void 0:g.key),{value:oe}),lt=Object(J.a)(Ut,2),jt=lt[0],pt=lt[1],Dt=it(function(ee){pt(ee)}),Ht=it(function(){pt(void 0)}),Pt=Object(vn.a)(me||[],{value:ye,postState:function(Z){return Array.isArray(Z)?Z:Z==null?Ct:[Z]}}),Tt=Object(J.a)(Pt,2),ut=Tt[0],jn=Tt[1],Nt=function(Z){if(!!G){var ve=Z.key,Me=ut.includes(ve),ke;Me?ke=ut.filter(function(et){return et!==ve}):fe?ke=[].concat(Object(sn.a)(ut),[ve]):ke=[ve],jn(ke);var $n=Object(de.a)(Object(de.a)({},Z),{},{selectedKeys:ke});Me?he==null||he($n):Ne==null||Ne($n)}},It=it(function(ee){Xe==null||Xe(r(ee)),Nt(ee)}),ht=it(function(ee,Z){var ve=pn.filter(function(ke){return ke!==ee});if(Z)ve.push(ee);else if(Ge!=="inline"){var Me=Et(ee);ve=ve.filter(function(ke){return!Me.has(ke)})}at()(pn,ve)||(un(ve),$e==null||$e(ve))}),_n=it(bn),vt=function(Z,ve){var Me=ve!=null?ve:!pn.includes(Z);ht(Z,Me)},gt=Br(Ge,jt,On,Qe,An,qn,Ye,pt,vt,qe);t.useEffect(function(){Gn(!0)},[]);var Ft=Ge!=="horizontal"||z?Be:Be.map(function(ee,Z){return t.createElement(T,{key:ee.key,overflowDisabled:Z>Je},ee)}),At=t.createElement(y,Object(W.a)({id:U,ref:An,prefixCls:"".concat(C,"-overflow"),component:"ul",itemComponent:Hn,className:Oe()(C,"".concat(C,"-root"),"".concat(C,"-").concat(Ge),F,(R={},Object(le.a)(R,"".concat(C,"-inline-collapsed"),Ze),Object(le.a)(R,"".concat(C,"-rtl"),On),R)),dir:H,style:D,role:"menu",tabIndex:x,data:Ft,renderRawItem:function(Z){return Z},renderRawRest:function(Z){var ve=Z.length,Me=ve?Be.slice(-ve):null;return t.createElement(qt,{eventKey:xt,title:Ie,disabled:Yn,internalPopupClose:ve===0},Me)},maxCount:Ge!=="horizontal"||z?y.INVALIDATE:y.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(Z){Ke(Z)},onKeyDown:gt},Ee));return t.createElement(Le.Provider,{value:Qe},t.createElement(T,{prefixCls:C,mode:Ge,openKeys:pn,rtl:On,disabled:se,motion:Fn?je:null,defaultMotions:Fn?Re:null,activeKey:jt,onActive:Dt,onInactive:Ht,selectedKeys:ut,inlineIndent:De,subMenuOpenDelay:ne,subMenuCloseDelay:ae,forceSubMenuRender:k,builtinPlacements:Ue,triggerSubMenuAction:Fe,getPopupContainer:_n,itemIcon:Ae,expandIcon:we,onItemClick:It,onOpenChange:ht},t.createElement(V.Provider,{value:zt},At),t.createElement(v.Provider,{value:Jt},Be)))},Jr=Vr,zr=function(u){var g=u.className,R=u.title,j=u.eventKey,C=u.children,D=Object(Ce.a)(u,["className","title","eventKey","children"]),F=t.useContext(S),K=F.prefixCls,x="".concat(K,"-item-group");return t.createElement("li",Object(W.a)({},D,{onClick:function(H){return H.stopPropagation()},className:Oe()(x,g)}),t.createElement("div",{className:"".concat(x,"-title"),title:typeof R=="string"?R:void 0},R),t.createElement("ul",{className:"".concat(x,"-list")},C))};function Ur(s){var u=s.children,g=Object(Ce.a)(s,["children"]),R=B(g.eventKey),j=wt(u,R),C=E();return C?j:t.createElement(zr,g,j)}function Hr(s){var u=s.className,g=s.style,R=t.useContext(S),j=R.prefixCls,C=E();return C?null:t.createElement("li",{className:Oe()("".concat(j,"-item-divider"),u),style:g})}var ft=Jr;ft.Item=Hn,ft.SubMenu=qt,ft.ItemGroup=Ur,ft.Divider=Hr;var Gr=ft,Yr=e("eDIo");function Xr(s,u){var g=s.prefixCls,R=s.editable,j=s.locale,C=s.style;return!R||R.showAdd===!1?null:t.createElement("button",{ref:u,type:"button",className:"".concat(g,"-nav-add"),style:C,"aria-label":(j==null?void 0:j.addAriaLabel)||"Add tab",onClick:function(F){R.onEdit("add",{event:F})}},R.addIcon||"+")}var ir=t.forwardRef(Xr);function Qr(s,u){var g=s.prefixCls,R=s.id,j=s.tabs,C=s.locale,D=s.mobile,F=s.moreIcon,K=F===void 0?"More":F,x=s.moreTransitionName,L=s.style,H=s.className,U=s.editable,re=s.tabBarGutter,Y=s.rtl,X=s.onTabClick,se=Object(t.useState)(!1),z=Object(J.a)(se,2),q=z[0],ne=z[1],Q=Object(t.useState)(null),ae=Object(J.a)(Q,2),k=ae[0],pe=ae[1],_="".concat(R,"-more-popup"),oe="".concat(g,"-dropdown"),ue=k!==null?"".concat(_,"-").concat(k):null,te=C==null?void 0:C.dropdownAriaLabel,G=t.createElement(Gr,{onClick:function(ge){var De=ge.key,je=ge.domEvent;X(De,je),ne(!1)},id:_,tabIndex:-1,role:"listbox","aria-activedescendant":ue,selectedKeys:[k],"aria-label":te!==void 0?te:"expanded dropdown"},j.map(function(he){return t.createElement(Hn,{key:he.key,id:"".concat(_,"-").concat(he.key),role:"option","aria-controls":R&&"".concat(R,"-panel-").concat(he.key),disabled:he.disabled},he.tab)}));function ie(he){for(var ge=j.filter(function(Fe){return!Fe.disabled}),De=ge.findIndex(function(Fe){return Fe.key===k})||0,je=ge.length,Re=0;Re<je;Re+=1){De=(De+he+je)%je;var Se=ge[De];if(!Se.disabled){pe(Se.key);return}}}function fe(he){var ge=he.which;if(!q){[Te.a.DOWN,Te.a.SPACE,Te.a.ENTER].includes(ge)&&(ne(!0),he.preventDefault());return}switch(ge){case Te.a.UP:ie(-1),he.preventDefault();break;case Te.a.DOWN:ie(1),he.preventDefault();break;case Te.a.ESC:ne(!1);break;case Te.a.SPACE:case Te.a.ENTER:k!==null&&X(k,he);break}}Object(t.useEffect)(function(){var he=document.getElementById(ue);he&&he.scrollIntoView&&he.scrollIntoView(!1)},[k]),Object(t.useEffect)(function(){q||pe(null)},[q]);var me=Object(le.a)({},Y?"marginLeft":"marginRight",re);j.length||(me.visibility="hidden",me.order=1);var ye=Oe()(Object(le.a)({},"".concat(oe,"-rtl"),Y)),Ne=D?null:t.createElement(Yr.default,{prefixCls:oe,overlay:G,trigger:["hover"],visible:q,transitionName:x,onVisibleChange:ne,overlayClassName:ye,mouseEnterDelay:.1,mouseLeaveDelay:.1},t.createElement("button",{type:"button",className:"".concat(g,"-nav-more"),style:me,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":_,id:"".concat(R,"-more"),"aria-expanded":q,onKeyDown:fe},K));return t.createElement("div",{className:Oe()("".concat(g,"-nav-operations"),H),style:L,ref:u},Ne,t.createElement(ir,{prefixCls:g,locale:C,editable:U}))}var Zr=t.forwardRef(Qr),Lt=Object(t.createContext)(null),kr=.1,or=.01,Rt=20,lr=Math.pow(.995,Rt);function qr(s,u){var g=Object(t.useState)(),R=Object(J.a)(g,2),j=R[0],C=R[1],D=Object(t.useState)(0),F=Object(J.a)(D,2),K=F[0],x=F[1],L=Object(t.useState)(0),H=Object(J.a)(L,2),U=H[0],re=H[1],Y=Object(t.useState)(),X=Object(J.a)(Y,2),se=X[0],z=X[1],q=Object(t.useRef)();function ne(oe){var ue=oe.touches[0],te=ue.screenX,G=ue.screenY;C({x:te,y:G}),window.clearInterval(q.current)}function Q(oe){if(!!j){oe.preventDefault();var ue=oe.touches[0],te=ue.screenX,G=ue.screenY;C({x:te,y:G});var ie=te-j.x,fe=G-j.y;u(ie,fe);var me=Date.now();x(me),re(me-K),z({x:ie,y:fe})}}function ae(){if(!!j&&(C(null),z(null),se)){var oe=se.x/U,ue=se.y/U,te=Math.abs(oe),G=Math.abs(ue);if(Math.max(te,G)<kr)return;var ie=oe,fe=ue;q.current=window.setInterval(function(){if(Math.abs(ie)<or&&Math.abs(fe)<or){window.clearInterval(q.current);return}ie*=lr,fe*=lr,u(ie*Rt,fe*Rt)},Rt)}}var k=Object(t.useRef)();function pe(oe){var ue=oe.deltaX,te=oe.deltaY,G=0,ie=Math.abs(ue),fe=Math.abs(te);ie===fe?G=k.current==="x"?ue:te:ie>fe?(G=ue,k.current="x"):(G=te,k.current="y"),u(-G,-G)&&oe.preventDefault()}var _=Object(t.useRef)(null);_.current={onTouchStart:ne,onTouchMove:Q,onTouchEnd:ae,onWheel:pe},t.useEffect(function(){function oe(ie){_.current.onTouchStart(ie)}function ue(ie){_.current.onTouchMove(ie)}function te(ie){_.current.onTouchEnd(ie)}function G(ie){_.current.onWheel(ie)}return document.addEventListener("touchmove",ue,{passive:!1}),document.addEventListener("touchend",te,{passive:!1}),s.current.addEventListener("touchstart",oe,{passive:!1}),s.current.addEventListener("wheel",G),function(){document.removeEventListener("touchmove",ue),document.removeEventListener("touchend",te)}},[])}function _r(){var s=Object(t.useRef)(new Map);function u(R){return s.current.has(R)||s.current.set(R,t.createRef()),s.current.get(R)}function g(R){s.current.delete(R)}return[u,g]}function ur(s,u){var g=t.useRef(s),R=t.useState({}),j=Object(J.a)(R,2),C=j[1];function D(F){var K=typeof F=="function"?F(g.current):F;K!==g.current&&u(K,g.current),g.current=K,C({})}return[g.current,D]}var dr=function(u){var g=u.position,R=u.prefixCls,j=u.extra;if(!j)return null;var C,D=j;return g==="right"&&(C=D.right||!D.left&&D||null),g==="left"&&(C=D.left||null),C?t.createElement("div",{className:"".concat(R,"-extra-content")},C):null};function ea(s,u){var g,R=t.useContext(Lt),j=R.prefixCls,C=R.tabs,D=s.className,F=s.style,K=s.id,x=s.animated,L=s.activeKey,H=s.rtl,U=s.extra,re=s.editable,Y=s.locale,X=s.tabPosition,se=s.tabBarGutter,z=s.children,q=s.onTabClick,ne=s.onTabScroll,Q=Object(t.useRef)(),ae=Object(t.useRef)(),k=Object(t.useRef)(),pe=Object(t.useRef)(),_=_r(),oe=Object(J.a)(_,2),ue=oe[0],te=oe[1],G=X==="top"||X==="bottom",ie=ur(0,function(ee,Z){G&&ne&&ne({direction:ee>Z?"left":"right"})}),fe=Object(J.a)(ie,2),me=fe[0],ye=fe[1],Ne=ur(0,function(ee,Z){!G&&ne&&ne({direction:ee>Z?"top":"bottom"})}),he=Object(J.a)(Ne,2),ge=he[0],De=he[1],je=Object(t.useState)(0),Re=Object(J.a)(je,2),Se=Re[0],Fe=Re[1],Ue=Object(t.useState)(0),Ae=Object(J.a)(Ue,2),we=Ae[0],We=Ae[1],Ie=Object(t.useState)(0),bn=Object(J.a)(Ie,2),Xe=bn[0],$e=bn[1],qe=Object(t.useState)(0),mn=Object(J.a)(qe,2),fn=mn[0],Ee=mn[1],Be=Object(t.useState)(null),He=Object(J.a)(Be,2),Ve=He[0],Fn=He[1],Gn=Object(t.useState)(null),An=Object(J.a)(Gn,2),Qe=An[0],On=An[1],_e=Object(t.useState)(0),Sn=Object(J.a)(_e,2),Ge=Sn[0],Ze=Sn[1],Cn=Object(t.useState)(0),tn=Object(J.a)(Cn,2),Je=tn[0],Ke=tn[1],Yn=gn(new Map),Xn=Object(J.a)(Yn,2),ot=Xn[0],pn=Xn[1],un=dt(C,ot,Se),Qn="".concat(j,"-nav-operations-hidden"),hn=0,rn=0;G?H?(hn=0,rn=Math.max(0,Se-Ve)):(hn=Math.min(0,Ve-Se),rn=0):(hn=Math.min(0,Qe-we),rn=0);function Zn(ee){return ee<hn?hn:ee>rn?rn:ee}var Rn=Object(t.useRef)(),kn=Object(t.useState)(),en=Object(J.a)(kn,2),En=en[0],ce=en[1];function be(){ce(Date.now())}function Pe(){window.clearTimeout(Rn.current)}qr(Q,function(ee,Z){function ve(Me,ke){Me(function($n){var et=Zn($n+ke);return et})}if(G){if(Ve>=Se)return!1;ve(ye,ee)}else{if(Qe>=we)return!1;ve(De,Z)}return Pe(),be(),!0}),Object(t.useEffect)(function(){return Pe(),En&&(Rn.current=window.setTimeout(function(){ce(0)},100)),Pe},[En]);function Ye(){var ee=arguments.length>0&&arguments[0]!==void 0?arguments[0]:L,Z=un.get(ee)||{width:0,height:0,left:0,right:0,top:0};if(G){var ve=me;H?Z.right<me?ve=Z.right:Z.right+Z.width>me+Ve&&(ve=Z.right+Z.width-Ve):Z.left<-me?ve=-Z.left:Z.left+Z.width>-me+Ve&&(ve=-(Z.left+Z.width-Ve)),De(0),ye(Zn(ve))}else{var Me=ge;Z.top<-ge?Me=-Z.top:Z.top+Z.height>-ge+Qe&&(Me=-(Z.top+Z.height-Qe)),ye(0),De(Zn(Me))}}var qn=ct(un,{width:Ve,height:Qe,left:me,top:ge},{width:Xe,height:fn},{width:Ge,height:Je},Object(de.a)(Object(de.a)({},s),{},{tabs:C})),Et=Object(J.a)(qn,2),Jt=Et[0],zt=Et[1],Ut=C.map(function(ee){var Z=ee.key;return t.createElement(Mn,{id:K,prefixCls:j,key:Z,rtl:H,tab:ee,closable:ee.closable,editable:re,active:Z===L,tabPosition:X,tabBarGutter:se,renderWrapper:z,removeAriaLabel:Y==null?void 0:Y.removeAriaLabel,ref:ue(Z),onClick:function(Me){q(Z,Me)},onRemove:function(){te(Z)},onFocus:function(){Ye(Z),be(),H||(Q.current.scrollLeft=0),Q.current.scrollTop=0}})}),lt=Tn(function(){var ee,Z,ve,Me,ke,$n,et,Gt,Yt,la=((ee=Q.current)===null||ee===void 0?void 0:ee.offsetWidth)||0,ua=((Z=Q.current)===null||Z===void 0?void 0:Z.offsetHeight)||0,hr=((ve=pe.current)===null||ve===void 0?void 0:ve.offsetWidth)||0,vr=((Me=pe.current)===null||Me===void 0?void 0:Me.offsetHeight)||0,da=((ke=k.current)===null||ke===void 0?void 0:ke.offsetWidth)||0,ca=(($n=k.current)===null||$n===void 0?void 0:$n.offsetHeight)||0;Fn(la),On(ua),Ze(hr),Ke(vr);var gr=(((et=ae.current)===null||et===void 0?void 0:et.offsetWidth)||0)-hr,yr=(((Gt=ae.current)===null||Gt===void 0?void 0:Gt.offsetHeight)||0)-vr;Fe(gr),We(yr);var br=(Yt=k.current)===null||Yt===void 0?void 0:Yt.className.includes(Qn);$e(gr-(br?0:da)),Ee(yr-(br?0:ca)),pn(function(){var Or=new Map;return C.forEach(function(ma){var Sr=ma.key,yt=ue(Sr).current;yt&&Or.set(Sr,{width:yt.offsetWidth,height:yt.offsetHeight,left:yt.offsetLeft,top:yt.offsetTop})}),Or})}),jt=C.slice(0,Jt),pt=C.slice(zt+1),Dt=[].concat(Object(sn.a)(jt),Object(sn.a)(pt)),Ht=Object(t.useState)(),Pt=Object(J.a)(Ht,2),Tt=Pt[0],ut=Pt[1],jn=un.get(L),Nt=Object(t.useRef)();function It(){xe.a.cancel(Nt.current)}Object(t.useEffect)(function(){var ee={};return jn&&(G?(H?ee.right=jn.right:ee.left=jn.left,ee.width=jn.width):(ee.top=jn.top,ee.height=jn.height)),It(),Nt.current=Object(xe.a)(function(){ut(ee)}),It},[jn,G,H]),Object(t.useEffect)(function(){Ye()},[L,jn,un,G]),Object(t.useEffect)(function(){lt()},[H,se,L,C.map(function(ee){return ee.key}).join("_")]);var ht=!!Dt.length,_n="".concat(j,"-nav-wrap"),vt,gt,Ft,At;return G?H?(gt=me>0,vt=me+Ve<Se):(vt=me<0,gt=-me+Ve<Se):(Ft=ge<0,At=-ge+Qe<we),t.createElement("div",{ref:u,role:"tablist",className:Oe()("".concat(j,"-nav"),D),style:F,onKeyDown:function(){be()}},t.createElement(dr,{position:"left",extra:U,prefixCls:j}),t.createElement(wn.default,{onResize:lt},t.createElement("div",{className:Oe()(_n,(g={},Object(le.a)(g,"".concat(_n,"-ping-left"),vt),Object(le.a)(g,"".concat(_n,"-ping-right"),gt),Object(le.a)(g,"".concat(_n,"-ping-top"),Ft),Object(le.a)(g,"".concat(_n,"-ping-bottom"),At),g)),ref:Q},t.createElement(wn.default,{onResize:lt},t.createElement("div",{ref:ae,className:"".concat(j,"-nav-list"),style:{transform:"translate(".concat(me,"px, ").concat(ge,"px)"),transition:En?"none":void 0}},Ut,t.createElement(ir,{ref:pe,prefixCls:j,locale:Y,editable:re,style:{visibility:ht?"hidden":null}}),t.createElement("div",{className:Oe()("".concat(j,"-ink-bar"),Object(le.a)({},"".concat(j,"-ink-bar-animated"),x.inkBar)),style:Tt}))))),t.createElement(Zr,Object(W.a)({},s,{ref:k,prefixCls:j,tabs:Dt,className:!ht&&Qn})),t.createElement(dr,{position:"right",extra:U,prefixCls:j}))}var cr=t.forwardRef(ea);function na(s){var u=s.id,g=s.activeKey,R=s.animated,j=s.tabPosition,C=s.rtl,D=s.destroyInactiveTabPane,F=t.useContext(Lt),K=F.prefixCls,x=F.tabs,L=R.tabPane,H=x.findIndex(function(U){return U.key===g});return t.createElement("div",{className:Oe()("".concat(K,"-content-holder"))},t.createElement("div",{className:Oe()("".concat(K,"-content"),"".concat(K,"-content-").concat(j),Object(le.a)({},"".concat(K,"-content-animated"),L)),style:H&&L?Object(le.a)({},C?"marginRight":"marginLeft","-".concat(H,"00%")):null},x.map(function(U){return t.cloneElement(U.node,{key:U.key,prefixCls:K,tabKey:U.key,id:u,animated:L,active:U.key===g,destroyInactiveTabPane:D})})))}function mr(s){var u=s.prefixCls,g=s.forceRender,R=s.className,j=s.style,C=s.id,D=s.active,F=s.animated,K=s.destroyInactiveTabPane,x=s.tabKey,L=s.children,H=t.useState(g),U=Object(J.a)(H,2),re=U[0],Y=U[1];t.useEffect(function(){D?Y(!0):K&&Y(!1)},[D,K]);var X={};return D||(F?(X.visibility="hidden",X.height=0,X.overflowY="hidden"):X.display="none"),t.createElement("div",{id:C&&"".concat(C,"-panel-").concat(x),role:"tabpanel",tabIndex:D?0:-1,"aria-labelledby":C&&"".concat(C,"-tab-").concat(x),"aria-hidden":!D,style:Object(de.a)(Object(de.a)({},X),j),className:Oe()("".concat(u,"-tabpane"),D&&"".concat(u,"-tabpane-active"),R)},(D||re||g)&&L)}var fr=0;function ta(s){return Object(cn.a)(s).map(function(u){if(t.isValidElement(u)){var g=u.key!==void 0?String(u.key):void 0;return Object(de.a)(Object(de.a)({key:g},u.props),{},{node:u})}return null}).filter(function(u){return u})}function ra(s,u){var g,R=s.id,j=s.prefixCls,C=j===void 0?"rc-tabs":j,D=s.className,F=s.children,K=s.direction,x=s.activeKey,L=s.defaultActiveKey,H=s.editable,U=s.animated,re=U===void 0?{inkBar:!0,tabPane:!1}:U,Y=s.tabPosition,X=Y===void 0?"top":Y,se=s.tabBarGutter,z=s.tabBarStyle,q=s.tabBarExtraContent,ne=s.locale,Q=s.moreIcon,ae=s.moreTransitionName,k=s.destroyInactiveTabPane,pe=s.renderTabBar,_=s.onChange,oe=s.onTabClick,ue=s.onTabScroll,te=Object(Ce.a)(s,["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"]),G=ta(F),ie=K==="rtl",fe;re===!1?fe={inkBar:!1,tabPane:!1}:re===!0?fe={inkBar:!0,tabPane:!0}:fe=Object(de.a)({inkBar:!0,tabPane:!1},Object(an.a)(re)==="object"?re:{});var me=Object(t.useState)(!1),ye=Object(J.a)(me,2),Ne=ye[0],he=ye[1];Object(t.useEffect)(function(){he(Object(Pn.a)())},[]);var ge=Object(vn.a)(function(){var Ee;return(Ee=G[0])===null||Ee===void 0?void 0:Ee.key},{value:x,defaultValue:L}),De=Object(J.a)(ge,2),je=De[0],Re=De[1],Se=Object(t.useState)(function(){return G.findIndex(function(Ee){return Ee.key===je})}),Fe=Object(J.a)(Se,2),Ue=Fe[0],Ae=Fe[1];Object(t.useEffect)(function(){var Ee=G.findIndex(function(He){return He.key===je});if(Ee===-1){var Be;Ee=Math.max(0,Math.min(Ue,G.length-1)),Re((Be=G[Ee])===null||Be===void 0?void 0:Be.key)}Ae(Ee)},[G.map(function(Ee){return Ee.key}).join("_"),je,Ue]);var we=Object(vn.a)(null,{value:R}),We=Object(J.a)(we,2),Ie=We[0],bn=We[1],Xe=X;Ne&&!["left","right"].includes(X)&&(Xe="top"),Object(t.useEffect)(function(){R||(bn("rc-tabs-".concat(fr)),fr+=1)},[]);function $e(Ee,Be){oe==null||oe(Ee,Be),Re(Ee),_==null||_(Ee)}var qe={id:Ie,activeKey:je,animated:fe,tabPosition:Xe,rtl:ie,mobile:Ne},mn,fn=Object(de.a)(Object(de.a)({},qe),{},{editable:H,locale:ne,moreIcon:Q,moreTransitionName:ae,tabBarGutter:se,onTabClick:$e,onTabScroll:ue,extra:q,style:z,panes:F});return pe?mn=pe(fn,cr):mn=t.createElement(cr,fn),t.createElement(Lt.Provider,{value:{tabs:G,prefixCls:C}},t.createElement("div",Object(W.a)({ref:u,id:R,className:Oe()(C,"".concat(C,"-").concat(Xe),(g={},Object(le.a)(g,"".concat(C,"-mobile"),Ne),Object(le.a)(g,"".concat(C,"-editable"),H),Object(le.a)(g,"".concat(C,"-rtl"),ie),g),D)},te),mn,t.createElement(na,Object(W.a)({destroyInactiveTabPane:k},qe,{animated:fe}))))}var pr=t.forwardRef(ra);pr.TabPane=mr;var aa=pr,sa=aa,$t=e("MZF8"),ln=e("dEAq"),ia=e("ZpkN"),ba=e("TIsu");function Vt(s,u){var g,R=(g=s.match(/\.(\w+)$/))===null||g===void 0?void 0:g[1];return R||(R=u.tsx?"tsx":"jsx"),R}var oa=s=>{var u,g,R,j=Object(t.useRef)(),C=Object(t.useContext)(ln.context),D=C.locale,F=Object(ln.useLocaleProps)(D,s),K=Object(ln.useDemoUrl)(F.identifier),x=F.demoUrl||K,L=($t.a===null||$t.a===void 0?void 0:$t.a.location.hash)==="#".concat(F.identifier),H=Object.keys(F.sources).length===1,U=Object(ln.useCodeSandbox)((u=F.hideActions)!==null&&u!==void 0&&u.includes("CSB")?null:F),re=Object(ln.useRiddle)((g=F.hideActions)!==null&&g!==void 0&&g.includes("RIDDLE")?null:F),Y=Object(ln.useMotions)(F.motions||[],j.current),X=Object($.default)(Y,2),se=X[0],z=X[1],q=Object(ln.useCopy)(),ne=Object($.default)(q,2),Q=ne[0],ae=ne[1],k=Object(t.useState)("_"),pe=Object($.default)(k,2),_=pe[0],oe=pe[1],ue=Object(t.useState)(Vt(_,F.sources[_])),te=Object($.default)(ue,2),G=te[0],ie=te[1],fe=Object(t.useState)(Boolean(F.defaultShowCode)),me=Object($.default)(fe,2),ye=me[0],Ne=me[1],he=Object(t.useState)(Math.random()),ge=Object($.default)(he,2),De=ge[0],je=ge[1],Re=F.sources[_][G]||F.sources[_].content,Se=Object(ln.useTSPlaygroundUrl)(D,Re),Fe=Object(t.useRef)(),Ue=Object(ln.usePrefersColor)(),Ae=Object($.default)(Ue,1),we=Ae[0];Object(t.useEffect)(()=>{je(Math.random())},[we]);function We(Ie){oe(Ie),ie(Vt(Ie,F.sources[Ie]))}return b.a.createElement("div",{style:F.style,className:[F.className,"__dumi-default-previewer",L?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:F.identifier,"data-debug":F.debug||void 0,"data-iframe":F.iframe||void 0},F.iframe&&b.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),b.a.createElement("div",{ref:j,className:"__dumi-default-previewer-demo",style:{transform:F.transform?"translate(0, 0)":void 0,padding:F.compact||F.iframe&&F.compact!==!1?"0":void 0,background:F.background}},F.iframe?b.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(F.iframe).replace(/(\d)$/,"$1px")},key:De,src:x,ref:Fe}):F.children),b.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":F.title},F.title&&b.a.createElement(ln.AnchorLink,{to:"#".concat(F.identifier)},F.title),F.description&&b.a.createElement("div",{dangerouslySetInnerHTML:{__html:F.description}})),b.a.createElement("div",{className:"__dumi-default-previewer-actions"},U&&b.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:U}),re&&b.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:re}),F.motions&&b.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:z,onClick:()=>se()}),F.iframe&&b.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:()=>je(Math.random())}),!((R=F.hideActions)!==null&&R!==void 0&&R.includes("EXTERNAL"))&&b.a.createElement(ln.Link,{target:"_blank",to:x},b.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),b.a.createElement("span",null),b.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":ae,onClick:()=>Q(Re)}),G==="tsx"&&ye&&b.a.createElement(ln.Link,{target:"_blank",to:Se},b.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),b.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(ye?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:()=>Ne(!ye)})),ye&&b.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!H&&b.a.createElement(sa,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xB7\xB7\xB7",defaultActiveKey:_,onChange:We},Object.keys(F.sources).map(Ie=>b.a.createElement(mr,{tab:Ie==="_"?"index.".concat(Vt(Ie,F.sources[Ie])):Ie,key:Ie}))),b.a.createElement("div",{className:"__dumi-default-previewer-source"},b.a.createElement(ia.a,{code:Re,lang:G,showCopy:!1}))))},Oa=dn.default=oa},"80pN":function(Dn,dn,e){"use strict";(function($){/** @license React v16.14.0
* react-dom-test-utils.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var t=e("MgzW"),b=e("q1tI"),W=e("i8i4"),le=e("QCnb");function J(n){for(var a="https://reactjs.org/docs/error-decoder.html?invariant="+n,c=1;c<arguments.length;c++)a+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+n+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var an=b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;an.hasOwnProperty("ReactCurrentDispatcher")||(an.ReactCurrentDispatcher={current:null}),an.hasOwnProperty("ReactCurrentBatchConfig")||(an.ReactCurrentBatchConfig={suspense:null});function Ce(n){var a=n,c=n;if(n.alternate)for(;a.return;)a=a.return;else{n=a;do a=n,(a.effectTag&1026)!=0&&(c=a.return),n=a.return;while(n)}return a.tag===3?c:null}function de(n){if(Ce(n)!==n)throw Error(J(188))}function ze(n){var a=n.alternate;if(!a){if(a=Ce(n),a===null)throw Error(J(188));return a!==n?null:n}for(var c=n,v=a;;){var E=c.return;if(E===null)break;var M=E.alternate;if(M===null){if(v=E.return,v!==null){c=v;continue}break}if(E.child===M.child){for(M=E.child;M;){if(M===c)return de(E),n;if(M===v)return de(E),a;M=M.sibling}throw Error(J(188))}if(c.return!==v.return)c=E,v=M;else{for(var B=!1,V=E.child;V;){if(V===c){B=!0,c=E,v=M;break}if(V===v){B=!0,v=E,c=M;break}V=V.sibling}if(!B){for(V=M.child;V;){if(V===c){B=!0,c=M,v=E;break}if(V===v){B=!0,v=M,c=E;break}V=V.sibling}if(!B)throw Error(J(189))}}if(c.alternate!==v)throw Error(J(190))}if(c.tag!==3)throw Error(J(188));return c.stateNode.current===c?n:a}function Oe(){return!0}function cn(){return!1}function Pn(n,a,c,v){this.dispatchConfig=n,this._targetInst=a,this.nativeEvent=c,n=this.constructor.Interface;for(var E in n)n.hasOwnProperty(E)&&((a=n[E])?this[E]=a(c):E==="target"?this.target=v:this[E]=c[E]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Oe:cn,this.isPropagationStopped=cn,this}t(Pn.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Oe)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Oe)},persist:function(){this.isPersistent=Oe},isPersistent:cn,destructor:function(){var n=this.constructor.Interface,a;for(a in n)this[a]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=cn,this._dispatchInstances=this._dispatchListeners=null}}),Pn.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null},Pn.extend=function(n){function a(){}function c(){return v.apply(this,arguments)}var v=this;a.prototype=v.prototype;var E=new a;return t(E,c.prototype),c.prototype=E,c.prototype.constructor=c,c.Interface=t({},v.Interface,n),c.extend=v.extend,xe(c),c},xe(Pn);function vn(n,a,c,v){if(this.eventPool.length){var E=this.eventPool.pop();return this.call(E,n,a,c,v),E}return new this(n,a,c,v)}function sn(n){if(!(n instanceof this))throw Error(J(279));n.destructor(),10>this.eventPool.length&&this.eventPool.push(n)}function xe(n){n.eventPool=[],n.getPooled=vn,n.release=sn}var wn=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined");function Tn(n,a){var c={};return c[n.toLowerCase()]=a.toLowerCase(),c["Webkit"+n]="webkit"+a,c["Moz"+n]="moz"+a,c}var gn={animationend:Tn("Animation","AnimationEnd"),animationiteration:Tn("Animation","AnimationIteration"),animationstart:Tn("Animation","AnimationStart"),transitionend:Tn("Transition","TransitionEnd")},Te={},nt={};wn&&(nt=document.createElement("div").style,"AnimationEvent"in window||(delete gn.animationend.animation,delete gn.animationiteration.animation,delete gn.animationstart.animation),"TransitionEvent"in window||delete gn.transitionend.transition);function Mn(n){if(Te[n])return Te[n];if(!gn[n])return n;var a=gn[n],c;for(c in a)if(a.hasOwnProperty(c)&&c in nt)return Te[n]=a[c];return n}var tt=Mn("animationend"),dt=Mn("animationiteration"),rt=Mn("animationstart"),ct=Mn("transitionend"),Bn=null;function at(n){if(Bn===null)try{var a=("require"+Math.random()).slice(0,7);Bn=($&&$[a])("timers").setImmediate}catch(c){Bn=function(v){var E=new MessageChannel;E.port1.onmessage=v,E.port2.postMessage(void 0)}}return Bn(n)}var Vn=W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,mt=Vn[11],Kn=Vn[12],Wn=W.unstable_batchedUpdates,Jn=an.IsSomeRendererActing,zn=typeof le.unstable_flushAllWithoutAsserting=="function",xn=le.unstable_flushAllWithoutAsserting||function(){for(var n=!1;mt();)n=!0;return n};function st(n){try{xn(),at(function(){xn()?st(n):n()})}catch(a){n(a)}}var yn=0,N=!1,I=W.findDOMNode,P=W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,f=P[0],i=P[4],h=P[5],y=P[6],O=P[7],o=P[8],p=P[9],l=P[10];function A(){}function w(n,a){if(!n)return[];if(n=ze(n),!n)return[];for(var c=n,v=[];;){if(c.tag===5||c.tag===6||c.tag===1||c.tag===0){var E=c.stateNode;a(E)&&v.push(E)}if(c.child)c.child.return=c,c=c.child;else{if(c===n)return v;for(;!c.sibling;){if(!c.return||c.return===n)return v;c=c.return}c.sibling.return=c.return,c=c.sibling}}}function S(n,a){if(n&&!n._reactInternalFiber){var c=""+n;throw n=Array.isArray(n)?"an array":n&&n.nodeType===1&&n.tagName?"a DOM node":c==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":c,Error(J(286,a,n))}}var d={renderIntoDocument:function(n){var a=document.createElement("div");return W.render(n,a)},isElement:function(n){return b.isValidElement(n)},isElementOfType:function(n,a){return b.isValidElement(n)&&n.type===a},isDOMComponent:function(n){return!(!n||n.nodeType!==1||!n.tagName)},isDOMComponentElement:function(n){return!!(n&&b.isValidElement(n)&&n.tagName)},isCompositeComponent:function(n){return d.isDOMComponent(n)?!1:n!=null&&typeof n.render=="function"&&typeof n.setState=="function"},isCompositeComponentWithType:function(n,a){return d.isCompositeComponent(n)?n._reactInternalFiber.type===a:!1},findAllInRenderedTree:function(n,a){return S(n,"findAllInRenderedTree"),n?w(n._reactInternalFiber,a):[]},scryRenderedDOMComponentsWithClass:function(n,a){return S(n,"scryRenderedDOMComponentsWithClass"),d.findAllInRenderedTree(n,function(c){if(d.isDOMComponent(c)){var v=c.className;typeof v!="string"&&(v=c.getAttribute("class")||"");var E=v.split(/\s+/);if(!Array.isArray(a)){if(a===void 0)throw Error(J(11));a=a.split(/\s+/)}return a.every(function(M){return E.indexOf(M)!==-1})}return!1})},findRenderedDOMComponentWithClass:function(n,a){if(S(n,"findRenderedDOMComponentWithClass"),n=d.scryRenderedDOMComponentsWithClass(n,a),n.length!==1)throw Error("Did not find exactly one match (found: "+n.length+") for class:"+a);return n[0]},scryRenderedDOMComponentsWithTag:function(n,a){return S(n,"scryRenderedDOMComponentsWithTag"),d.findAllInRenderedTree(n,function(c){return d.isDOMComponent(c)&&c.tagName.toUpperCase()===a.toUpperCase()})},findRenderedDOMComponentWithTag:function(n,a){if(S(n,"findRenderedDOMComponentWithTag"),n=d.scryRenderedDOMComponentsWithTag(n,a),n.length!==1)throw Error("Did not find exactly one match (found: "+n.length+") for tag:"+a);return n[0]},scryRenderedComponentsWithType:function(n,a){return S(n,"scryRenderedComponentsWithType"),d.findAllInRenderedTree(n,function(c){return d.isCompositeComponentWithType(c,a)})},findRenderedComponentWithType:function(n,a){if(S(n,"findRenderedComponentWithType"),n=d.scryRenderedComponentsWithType(n,a),n.length!==1)throw Error("Did not find exactly one match (found: "+n.length+") for componentType:"+a);return n[0]},mockComponent:function(n,a){return a=a||n.mockTagName||"div",n.prototype.render.mockImplementation(function(){return b.createElement(a,null,this.props.children)}),this},nativeTouchData:function(n,a){return{touches:[{pageX:n,pageY:a}]}},Simulate:null,SimulateNative:{},act:function(n){function a(){yn--,Jn.current=c,Kn.current=v}N===!1&&(N=!0,console.error("act(...) is not supported in production builds of React, and might not behave as expected.")),yn++;var c=Jn.current,v=Kn.current;Jn.current=!0,Kn.current=!0;try{var E=Wn(n)}catch(M){throw a(),M}if(E!==null&&typeof E=="object"&&typeof E.then=="function")return{then:function(M,B){E.then(function(){1<yn||zn===!0&&c===!0?(a(),M()):st(function(V){a(),V?B(V):M()})},function(V){a(),B(V)})}};try{yn!==1||zn!==!1&&c!==!1||xn(),a()}catch(M){throw a(),M}return{then:function(M){M()}}}};function T(n){return function(a,c){if(b.isValidElement(a))throw Error(J(228));if(d.isCompositeComponent(a))throw Error(J(229));var v=i[n],E=new A;E.target=a,E.type=n.toLowerCase();var M=f(a),B=new Pn(v,M,E,a);B.persist(),t(B,c),v.phasedRegistrationNames?h(B):y(B),W.unstable_batchedUpdates(function(){O(a),l(B)}),o()}}d.Simulate={};for(var m in i)d.Simulate[m]=T(m);function r(n,a){return function(c,v){var E=new A(n);t(E,v),d.isDOMComponent(c)?(c=I(c),E.target=c,p(a,1,document,E)):c.tagName&&(E.target=c,p(a,1,document,E))}}[["abort","abort"],[tt,"animationEnd"],[dt,"animationIteration"],[rt,"animationStart"],["blur","blur"],["canplaythrough","canPlayThrough"],["canplay","canPlay"],["cancel","cancel"],["change","change"],["click","click"],["close","close"],["compositionend","compositionEnd"],["compositionstart","compositionStart"],["compositionupdate","compositionUpdate"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["dragstart","dragStart"],["drag","drag"],["drop","drop"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],["ended","ended"],["error","error"],["focus","focus"],["input","input"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["loadstart","loadStart"],["loadstart","loadStart"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["mousedown","mouseDown"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["playing","playing"],["progress","progress"],["ratechange","rateChange"],["scroll","scroll"],["seeked","seeked"],["seeking","seeking"],["selectionchange","selectionChange"],["stalled","stalled"],["suspend","suspend"],["textInput","textInput"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchmove","touchMove"],["touchstart","touchStart"],[ct,"transitionEnd"],["volumechange","volumeChange"],["waiting","waiting"],["wheel","wheel"]].forEach(function(n){var a=n[1];d.SimulateNative[a]=r(a,n[0])}),$.exports=d.default||d}).call(this,e("hOG+")(Dn))},JjdP:function(Dn,dn,e){"use strict";e.r(dn);var $=e("9og8"),t=e("WmNS"),b=e.n(t),W=e("LtsZ"),le=`import React, { useRef } from 'react';
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
}`,an=`import React, { useState, useEffect } from 'react';
import { Button, Space, message } from 'antd';
import FormRender, { useForm } from 'form-render';
import { fakeApi, delay } from './advanced/utils';
import RichTextEditor from '../../widgets/RichText/src';

const Demo = () => {
  const form = useForm();
  const [schema, setSchema] = useState({});

  const getRemoteData = () => {
    fakeApi('xxx/getForm').then(_ => {
      form.setValues({ input1: 'hello world', select1: 'c' });
    });
  };

  const test3 = {
    type: 'object',
    properties: {
      testNode: {
        type: 'object',
        widget: 'my',
        hidden: true,
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
  };

  const test2 = {
    type: 'object',
    displayType: 'row',
    properties: {
      string: {
        title: '\u5B57\u7B26\u4E32',
        type: 'string',
        required: true,
      },
      string2: {
        title: '\u5B57\u7B26\u4E32',
        type: 'string',
        format: 'textarea',
      },
      select: {
        title: '\u5355\u9009',
        type: 'string',
        enum: ['a', 'b', 'c'],
        enumNames: ['\u9009\u98791', '\u9009\u98792', '\u9009\u98793'],
        widget: 'radio',
      },
      switchName: {
        title: '\u662F\u5426\u5224\u65ADswitch',
        type: 'boolean',
        widget: 'switch',
      },
      checkboxName: {
        title: '\u662F\u5426\u5224\u65AD',
        type: 'boolean',
      },
      select2: {
        title: '\u5355\u9009',
        type: 'string',
        enum: ['a', 'b', 'c'],
        enumNames: ['\u9009\u98791', '\u9009\u98792', '\u9009\u98793'],
        props: {
          optionType: 'button',
        },
        widget: 'radio',
      },
    },
  };

  // const test = {
  //   type: 'object',
  //   properties: {
  //     select1: {
  //       title: '\u5355\u9009',
  //       type: 'string',
  //       enum: ['a', 'b'],
  //       enumNames: ['haha', 'hehe'],
  //     },
  //     input1: {
  //       title: '\u8F93\u5165\u6846',
  //       type: 'string',
  //     },
  //     StayTime: {
  //       title: '\u505C\u7559\u65F6\u95F4\u6BB5',
  //       type: 'range',
  //       // bind: ['StayStartTime', 'StayEndTime'],
  //       format: 'date',
  //       // required: true,
  //     },
  //   },
  // };

  useEffect(() => {
    setSchema(test3);
  }, []);

  const onMount = () => {
    form.setValues({ a: 1 });
    // form.setSchemaByPath('testNode', { hidden: true });
  };

  const onFinish = (data, errors) => {
    if (errors.length > 0) {
      message.error(
        '\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A' + JSON.stringify(errors.map(item => item.name))
      );
    } else {
      fakeApi('xxx/submit', data).then(_ => message.success('\u63D0\u4EA4\u6210\u529F\uFF01'));
    }
  };

  const onValuesChange = (a, b) => {
    console.log(a, b);
  };

  return (
    <div>
      <FormRender
        form={form}
        schema={schema}
        widgets={{
          richText: RichTextEditor,
        }}
        debug
        // removeHiddenData
        theme="1"
        onMount={onMount}
        onFinish={onFinish}
        onValuesChange={onValuesChange}
      />
      <Space>
        <Button onClick={getRemoteData}>\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E</Button>
        <Button type="primary" onClick={form.submit}>
          \u63D0\u4EA4\uFF08\u89C1console\uFF09
        </Button>
      </Space>
    </div>
  );
};

export default Demo;`,Ce=`export const delay = ms => new Promise(res => setTimeout(res, ms));

export const fakeApi = (url, data) => {
  console.group('request:', url);
  console.log('params:', data);
  console.groupEnd();
  return delay(500);
};`,de=`import React, { useState, useEffect } from 'react';
import BraftEditor from 'braft-editor';
import 'braft-editor/dist/index.css';

const { createEditorState } = BraftEditor;

const RichTextEditor = ({ name, onChange, value, ...rest }) => {
  const [editor, set] = useState(null);

  useEffect(() => {
    if (value !== undefined) {
      set(createEditorState(value));
    }
  }, [value]);

  const handleChange = editor => {
    set(editor);
    // const htmlContent = editor.toHTML();
    // onChange(name, htmlContent);
  };

  const onSave = () => {
    // Pressing ctrl + s when the editor has focus will execute this method
    // Before the editor content is submitted to the server, you can directly call editorState.toHTML () to get the HTML content
    const htmlContent = editor.toHTML();
    if (name) {
      onChange(name, htmlContent);
    } else {
      onChange(htmlContent);
    }
  };

  return (
    <div style={{ border: '1px solid rgba(0,0,0,0.2)' }}>
      <BraftEditor
        contentStyle={{ minHeight: 100, height: 'auto', maxHeight: 500 }}
        value={editor}
        onChange={handleChange}
        onSave={onSave}
        onBlur={onSave}
      />
    </div>
  );
};

export default RichTextEditor;`,ze=`import React from 'react';
import FormRender, { useForm } from 'form-render';

const Demo = props => {
  const form = useForm();
  return <FormRender form={form} {...props} />;
};

export default Demo;`,Oe=`import React from 'react';
import FormRender, { useForm } from 'form-render';

const Demo = ({ schema }) => {
  const form = useForm();
  return (
    <div>
      <FormRender form={form} schema={schema} />
    </div>
  );
};

export default Demo;`,cn=`export const basic = {
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
};`,Pn=`import React, { Component } from 'react';
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

export default Root;`,vn=`import React, { useState, useEffect } from 'react';
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

export default Demo;`,sn=`{
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
}`,xe=`import { Select } from 'antd';
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

export default SearchInput;`,wn=`import React from 'react';
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

export default Demo;`,Tn=`/* PrismJS 1.16.0
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
}`,gn=`.debug * {
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
}`,Te=`import React, { Component } from 'react';
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

export default Root;`,nt=`import React, { useState, useEffect } from 'react';
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
}`,tt=`import { Select } from 'antd';
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

export default SearchInput;`,dt=`import React from 'react';
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

export default Demo;`,rt=`import { monaco } from 'react-monaco-editor';

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

export { valueMap, keySuggestions };`,ct=`.markdown p {
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

export default withTable(Demo);`,at=`import React from 'react';
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

export default withTable(Demo);`,Vn=`import React from 'react';
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

export default withTable(Demo);`,mt=`import React, { useEffect } from 'react';
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

export default withTable(Demo);`,Kn=`import React, { useState, useRef } from 'react';
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

export default Demo;`,Wn=`import React from 'react';
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

export default Demo;`,Jn=`import React from 'react';
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

export default Demo;`,zn=`.fr-generator-playground {
  margin: 0 -24px;

  .hide-demo {
    display: none;
  }
}`,xn=`import React, { useState, useRef } from 'react';
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

export default Demo;`,st=`import React, { useState, useRef } from 'react';
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

export default Demo;`,yn=dn.default={"guide-card":{component:Object(W.dynamic)({loader:function(){var N=Object($.a)(b.a.mark(function P(){return b.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"oLxE"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},P)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:le}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"card-render":{version:"0.1.2"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"0.x"}},identifier:"guide-card"}},"chart-render-demo":{component:Object(W.dynamic)({loader:function(){var N=Object($.a)(b.a.mark(function P(){var f,i,h,y,O,o,p;return b.a.wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return o=function(S,d){if(!d&&S&&S.__esModule)return S;if(S===null||typeof S!="object"&&typeof S!="function")return{default:S};var T=O(d);if(T&&T.has(S))return T.get(S);var m={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in S)if(n!=="default"&&Object.prototype.hasOwnProperty.call(S,n)){var a=r?Object.getOwnPropertyDescriptor(S,n):null;a&&(a.get||a.set)?Object.defineProperty(m,n,a):m[n]=S[n]}return m.default=S,T&&T.set(S,m),m},O=function(S){if(typeof WeakMap!="function")return null;var d=new WeakMap,T=new WeakMap;return(O=function(r){return r?T:d})(S)},f=e("K+nK"),A.t0=f,A.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return A.t1=A.sent,i=(0,A.t0)(A.t1),A.t2=o,A.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return A.t3=A.sent,h=(0,A.t2)(A.t3),A.next=15,Promise.all([e.e(0),e.e(2),e.e(9),e.e(10),e.e(12)]).then(e.bind(null,"36SN"));case 15:return y=A.sent,p=function(){var S=(0,h.useState)("Line"),d=(0,i.default)(S,2),T=d[0],m=d[1],r={Line:y.Line,Column:y.Column,PivotTable:y.PivotTable}[T];return h.default.createElement("div",null,h.default.createElement("div",{style:{marginBottom:10}},h.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return m("Line")}},"\u6298\u7EBF\u56FE"),h.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return m("Column")}},"\u67F1\u72B6\u56FE"),h.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return m("PivotTable")}},"\u4EA4\u53C9\u8868")),h.default.createElement(r,{meta:[{id:"date",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF",isDim:!1},{id:"uv",name:"\u8BBF\u5BA2\u6570",isDim:!1}],data:[{date:"20200101",pv:100,uv:50},{date:"20200102",pv:120,uv:60},{date:"20200103",pv:140,uv:70},{date:"20200104",pv:160,uv:80}]}))},A.abrupt("return",p);case 18:case"end":return A.stop()}},P)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"chart-render-demo"}},"column-demo":{component:Object(W.dynamic)({loader:function(){var N=Object($.a)(b.a.mark(function P(){var f,i,h,y;return b.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.next=8,Promise.all([e.e(0),e.e(2),e.e(9),e.e(10),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=o.sent,y=function(){return i.default.createElement(h.Column,{meta:[{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{pv:50,uv:20}]})},o.abrupt("return",y);case 11:case"end":return o.stop()}},P)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[{ pv: 50, uv: 20 }]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo"}},"column-demo-1":{component:Object(W.dynamic)({loader:function(){var N=Object($.a)(b.a.mark(function P(){var f,i,h,y;return b.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.next=8,Promise.all([e.e(0),e.e(2),e.e(9),e.e(10),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=o.sent,y=function(){return i.default.createElement(h.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},o.abrupt("return",y);case 11:case"end":return o.stop()}},P)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-1"}},"column-demo-2":{component:Object(W.dynamic)({loader:function(){var N=Object($.a)(b.a.mark(function P(){var f,i,h,y;return b.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.next=8,Promise.all([e.e(0),e.e(2),e.e(9),e.e(10),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=o.sent,y=function(){return i.default.createElement(h.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},o.abrupt("return",y);case 11:case"end":return o.stop()}},P)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-2"}},"column-demo-3":{component:Object(W.dynamic)({loader:function(){var N=Object($.a)(b.a.mark(function P(){var f,i,h,y;return b.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.next=8,Promise.all([e.e(0),e.e(2),e.e(9),e.e(10),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=o.sent,y=function(){return i.default.createElement(h.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},o.abrupt("return",y);case 11:case"end":return o.stop()}},P)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-3"}},"column-demo-4":{component:Object(W.dynamic)({loader:function(){var N=Object($.a)(b.a.mark(function P(){var f,i,h,y;return b.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.next=8,Promise.all([e.e(0),e.e(2),e.e(9),e.e(10),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=o.sent,y=function(){return i.default.createElement(h.Column,{inverted:!0,label:{position:"middle",layout:[{type:"interval-adjust-position"},{type:"interval-hide-overlap"},{type:"adjust-color"}]},meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},o.abrupt("return",y);case 11:case"end":return o.stop()}},P)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-4"}},"line-demo":{component:Object(W.dynamic)({loader:function(){var N=Object($.a)(b.a.mark(function P(){var f,i,h,y;return b.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.next=8,Promise.all([e.e(0),e.e(2),e.e(9),e.e(10),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=o.sent,y=function(){return i.default.createElement(h.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},o.abrupt("return",y);case 11:case"end":return o.stop()}},P)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo"}},"line-demo-1":{component:Object(W.dynamic)({loader:function(){var N=Object($.a)(b.a.mark(function P(){var f,i,h,y;return b.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.next=8,Promise.all([e.e(0),e.e(2),e.e(9),e.e(10),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=o.sent,y=function(){return i.default.createElement(h.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},o.abrupt("return",y);case 11:case"end":return o.stop()}},P)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-1"}},"line-demo-2":{component:Object(W.dynamic)({loader:function(){var N=Object($.a)(b.a.mark(function P(){var f,i,h,y;return b.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.next=8,Promise.all([e.e(0),e.e(2),e.e(9),e.e(10),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=o.sent,y=function(){return i.default.createElement(h.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"},{id:"pv",name:"\u8BBF\u95EE\u91CF"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20,pv:120},{ds:"2020-12-31",page:"\u9996\u9875",uv:120,pv:1120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21,pv:121},{ds:"2021-01-01",page:"\u9996\u9875",uv:121,pv:1121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15,pv:115},{ds:"2021-01-02",page:"\u9996\u9875",uv:115,pv:1115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40,pv:140},{ds:"2021-01-03",page:"\u9996\u9875",uv:140,pv:1140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31,pv:131},{ds:"2021-01-04",page:"\u9996\u9875",uv:131,pv:1131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32,pv:132},{ds:"2021-01-05",page:"\u9996\u9875",uv:132,pv:1132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30,pv:130},{ds:"2021-01-06",page:"\u9996\u9875",uv:130,pv:1130}]})},o.abrupt("return",y);case 11:case"end":return o.stop()}},P)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-2"}},"line-demo-3":{component:Object(W.dynamic)({loader:function(){var N=Object($.a)(b.a.mark(function P(){var f,i,h,y;return b.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.next=8,Promise.all([e.e(0),e.e(2),e.e(9),e.e(10),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=o.sent,y=function(){return i.default.createElement(h.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},o.abrupt("return",y);case 11:case"end":return o.stop()}},P)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-3"}},"line-demo-4":{component:Object(W.dynamic)({loader:function(){var N=Object($.a)(b.a.mark(function P(){var f,i,h,y;return b.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.next=8,Promise.all([e.e(0),e.e(2),e.e(9),e.e(10),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=o.sent,y=function(){return i.default.createElement(h.Line,{withArea:!0,isStack:!0,isPercent:!0,meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},o.abrupt("return",y);case 11:case"end":return o.stop()}},P)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-4"}},"pivot-table-demo":{component:Object(W.dynamic)({loader:function(){var N=Object($.a)(b.a.mark(function P(){var f,i,h,y;return b.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.next=8,Promise.all([e.e(0),e.e(2),e.e(9),e.e(10),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=o.sent,y=function(){return i.default.createElement(h.PivotTable,{style:{maxHeight:400,overflow:"auto"},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},o.abrupt("return",y);case 11:case"end":return o.stop()}},P)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo"}},"pivot-table-demo-1":{component:Object(W.dynamic)({loader:function(){var N=Object($.a)(b.a.mark(function P(){var f,i,h,y;return b.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.next=8,Promise.all([e.e(0),e.e(2),e.e(9),e.e(10),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=o.sent,y=function(){return i.default.createElement(h.PivotTable,{style:{maxHeight:400,overflow:"auto"},cellRender:function(A,w,S){return i.default.createElement("div",null,i.default.createElement("p",null,"\u53C2\u6570\u8868\uFF1A"),i.default.createElement("p",{style:{color:["red","orange","yellow","green","blue"][Object.keys(w).length]}},A),i.default.createElement("p",null,JSON.stringify(w)),i.default.createElement("p",null,JSON.stringify(S)))},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},o.abrupt("return",y);case 11:case"end":return o.stop()}},P)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-1"}},"pivot-table-demo-2":{component:Object(W.dynamic)({loader:function(){var N=Object($.a)(b.a.mark(function P(){var f,i,h,y,O,o,p;return b.a.wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return o=function(S,d){if(!d&&S&&S.__esModule)return S;if(S===null||typeof S!="object"&&typeof S!="function")return{default:S};var T=O(d);if(T&&T.has(S))return T.get(S);var m={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in S)if(n!=="default"&&Object.prototype.hasOwnProperty.call(S,n)){var a=r?Object.getOwnPropertyDescriptor(S,n):null;a&&(a.get||a.set)?Object.defineProperty(m,n,a):m[n]=S[n]}return m.default=S,T&&T.set(S,m),m},O=function(S){if(typeof WeakMap!="function")return null;var d=new WeakMap,T=new WeakMap;return(O=function(r){return r?T:d})(S)},f=e("K+nK"),A.t0=f,A.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return A.t1=A.sent,i=(0,A.t0)(A.t1),A.t2=o,A.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return A.t3=A.sent,h=(0,A.t2)(A.t3),A.next=15,Promise.all([e.e(0),e.e(2),e.e(9),e.e(10),e.e(12)]).then(e.bind(null,"36SN"));case 15:return y=A.sent,p=function(){var S=(0,h.useState)(!1),d=(0,i.default)(S,2),T=d[0],m=d[1];return h.default.createElement(h.default.Fragment,null,h.default.createElement("label",null,"\u53EF\u5C55\u5F00/\u6536\u7F29\uFF1A",h.default.createElement("input",{type:"checkbox",value:T,onChange:function(){return m(!T)}})),h.default.createElement(y.PivotTable,{leftExpandable:T,showSubtotal:!1,meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]}))},A.abrupt("return",p);case 18:case"end":return A.stop()}},P)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-2"}},"OldSchemaTransformer-demo":{component:Object(W.dynamic)({loader:function(){var N=Object($.a)(b.a.mark(function P(){var f,i,h,y,O,o,p,l,A,w,S,d,T;return b.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return A=function(a,c){if(!c&&a&&a.__esModule)return a;if(a===null||typeof a!="object"&&typeof a!="function")return{default:a};var v=l(c);if(v&&v.has(a))return v.get(a);var E={},M=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var B in a)if(B!=="default"&&Object.prototype.hasOwnProperty.call(a,B)){var V=M?Object.getOwnPropertyDescriptor(a,B):null;V&&(V.get||V.set)?Object.defineProperty(E,B,V):E[B]=a[B]}return E.default=a,v&&v.set(a,E),E},l=function(a){if(typeof WeakMap!="function")return null;var c=new WeakMap,v=new WeakMap;return(l=function(M){return M?v:c})(a)},f=e("K+nK"),r.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return r.t0=f,r.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return r.t1=r.sent,i=(0,r.t0)(r.t1),r.t2=f,r.next=13,Promise.resolve().then(e.bind(null,"tJVT"));case 13:return r.t3=r.sent,h=(0,r.t2)(r.t3),r.next=17,Promise.all([e.e(3),e.e(19)]).then(e.t.bind(null,"cUip",7));case 17:return r.t4=f,r.next=20,Promise.all([e.e(0),e.e(8),e.e(18),e.e(20)]).then(e.t.bind(null,"iJl9",7));case 20:return r.t5=r.sent,y=(0,r.t4)(r.t5),r.t6=A,r.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return r.t7=r.sent,O=(0,r.t6)(r.t7),r.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(11)]).then(e.bind(null,"gdfu"));case 29:return o=r.sent,r.next=32,Promise.all([e.e(22),e.e(25)]).then(e.bind(null,"7t+U"));case 32:return p=r.sent,w=y.default.TextArea,S={type:"object",properties:{number:{title:"\u6570\u5B57\u8F93\u5165\u6846",type:"number","ui:disabled":!0},checkbox:{title:"\u662F\u5426\u9009\u62E9",type:"boolean","ui:widget":"switch"}},required:["number"]},d=function(){var a=(0,O.useState)(JSON.stringify(S)),c=(0,h.default)(a,2),v=c[0],E=c[1],M=(0,O.useState)({}),B=(0,h.default)(M,2),V=B[0],Le=B[1],nn=function(){try{var In=(0,p.updateSchemaToNewVersion)(JSON.parse(v));Le(In)}catch(Hn){console.log(Hn)}},on=function(In){E(In.target.value)},Nn=function(){E(JSON.stringify(JSON.parse(v),null,2))};return O.default.createElement("div",null,O.default.createElement("div",null,"\u586B\u5165\u65E7\u7248schema\uFF1A"),O.default.createElement(w,{style:{minHeight:400,marginTop:12,marginBottom:12},value:v,onChange:on}),O.default.createElement(i.default,{style:{marginRight:12},onClick:Nn},"\u683C\u5F0F\u5316\u65E7schema"),O.default.createElement(i.default,{type:"primary",onClick:nn},"\u751F\u6210\u65B0\u7248schema"),O.default.createElement(w,{style:{minHeight:400,marginTop:12},value:JSON.stringify(V,null,2)}))},T=d,r.abrupt("return",T);case 38:case"end":return r.stop()}},P)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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

export default Translator;`},"packages/form-render/src/utils.js":{import:"../../packages/form-render/src/utils.js",content:J}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"},"lodash-es":{version:"4.17.21"}},identifier:"OldSchemaTransformer-demo"}},"form-render-demo":{component:Object(W.dynamic)({loader:function(){var N=Object($.a)(b.a.mark(function P(){var f,i,h,y,O,o,p,l,A,w,S,d,T,m;return b.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return S=function(c,v){if(!v&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var E=w(v);if(E&&E.has(c))return E.get(c);var M={},B=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var V in c)if(V!=="default"&&Object.prototype.hasOwnProperty.call(c,V)){var Le=B?Object.getOwnPropertyDescriptor(c,V):null;Le&&(Le.get||Le.set)?Object.defineProperty(M,V,Le):M[V]=c[V]}return M.default=c,E&&E.set(c,M),M},w=function(c){if(typeof WeakMap!="function")return null;var v=new WeakMap,E=new WeakMap;return(w=function(B){return B?E:v})(c)},f=e("K+nK"),n.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return n.t0=f,n.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return n.t1=n.sent,i=(0,n.t0)(n.t1),n.t2=f,n.next=13,e.e(84).then(e.bind(null,"fWQN"));case 13:return n.t3=n.sent,h=(0,n.t2)(n.t3),n.t4=f,n.next=18,e.e(85).then(e.bind(null,"mtLc"));case 18:return n.t5=n.sent,y=(0,n.t4)(n.t5),n.t6=f,n.next=23,e.e(76).then(e.bind(null,"yKVA"));case 23:return n.t7=n.sent,O=(0,n.t6)(n.t7),n.t8=f,n.next=28,e.e(75).then(e.bind(null,"879j"));case 28:return n.t9=n.sent,o=(0,n.t8)(n.t9),n.t10=f,n.next=33,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 33:return n.t11=n.sent,p=(0,n.t10)(n.t11),n.next=37,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(11)]).then(e.bind(null,"gdfu"));case 37:return l=n.sent,n.t12=S,n.next=41,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 41:return n.t13=n.sent,A=(0,n.t12)(n.t13),d={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},T=function(a){(0,O.default)(v,a);var c=(0,o.default)(v);function v(){return(0,h.default)(this,v),c.apply(this,arguments)}return(0,y.default)(v,[{key:"render",value:function(){var M=this.props.form;return p.default.createElement("div",null,p.default.createElement(A.default,{form:M,schema:d}),p.default.createElement(i.default,{type:"primary",onClick:M.submit},"\u63D0\u4EA4"))}}]),v}(p.default.Component),m=(0,A.connectForm)(T),n.abrupt("return",m);case 47:case"end":return n.stop()}},P)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default connectForm(Demo);`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo"}},"form-render-demo-1":{component:Object(W.dynamic)({loader:function(){var N=Object($.a)(b.a.mark(function P(){var f,i,h,y,O,o,p,l,A,w;return b.a.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return p=function(m,r){if(!r&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var n=o(r);if(n&&n.has(m))return n.get(m);var a={},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in m)if(v!=="default"&&Object.prototype.hasOwnProperty.call(m,v)){var E=c?Object.getOwnPropertyDescriptor(m,v):null;E&&(E.get||E.set)?Object.defineProperty(a,v,E):a[v]=m[v]}return a.default=m,n&&n.set(m,a),a},o=function(m){if(typeof WeakMap!="function")return null;var r=new WeakMap,n=new WeakMap;return(o=function(c){return c?n:r})(m)},f=e("K+nK"),d.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return d.t0=f,d.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return d.t1=d.sent,i=(0,d.t0)(d.t1),d.t2=f,d.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return d.t3=d.sent,h=(0,d.t2)(d.t3),d.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(11)]).then(e.bind(null,"gdfu"));case 17:return y=d.sent,d.t4=p,d.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 21:return d.t5=d.sent,O=(0,d.t4)(d.t5),l={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},A=function(){var m=(0,O.useForm)();return h.default.createElement("div",null,h.default.createElement(O.default,{form:m,schema:l}),h.default.createElement(i.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4"))},w=A,d.abrupt("return",w);case 27:case"end":return d.stop()}},P)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo-1"}},"form-render-demo-2":{component:Object(W.dynamic)({loader:function(){var N=Object($.a)(b.a.mark(function P(){var f,i,h,y,O,o,p,l,A,w;return b.a.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return p=function(m,r){if(!r&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var n=o(r);if(n&&n.has(m))return n.get(m);var a={},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in m)if(v!=="default"&&Object.prototype.hasOwnProperty.call(m,v)){var E=c?Object.getOwnPropertyDescriptor(m,v):null;E&&(E.get||E.set)?Object.defineProperty(a,v,E):a[v]=m[v]}return a.default=m,n&&n.set(m,a),a},o=function(m){if(typeof WeakMap!="function")return null;var r=new WeakMap,n=new WeakMap;return(o=function(c){return c?n:r})(m)},f=e("K+nK"),d.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return d.t0=f,d.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return d.t1=d.sent,i=(0,d.t0)(d.t1),d.t2=f,d.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return d.t3=d.sent,h=(0,d.t2)(d.t3),d.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(11)]).then(e.bind(null,"gdfu"));case 17:return y=d.sent,d.t4=p,d.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 21:return d.t5=d.sent,O=(0,d.t4)(d.t5),l={displayType:"row",labelWidth:60,type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F",type:"range",format:"date"},siteUrl:{title:"\u7F51\u5740",type:"string",placeholder:"\u6B64\u5904\u5FC5\u586B",required:!0,props:{addonBefore:"https://",addonAfter:".com"}}}},A=function(){var m=(0,O.useForm)(),r=function(a,c){c.length>0?alert("errors:"+JSON.stringify(c)):alert("formData:"+JSON.stringify(a,null,2))};return h.default.createElement("div",null,h.default.createElement(O.default,{form:m,schema:l,onFinish:r}),h.default.createElement(i.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4"))},w=A,d.abrupt("return",w);case 27:case"end":return d.stop()}},P)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.1"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-demo-2"}},"form-render-tester":{component:Object(W.dynamic)({loader:function(){var N=Object($.a)(b.a.mark(function P(){return b.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"9Yrf"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},P)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:an},"advanced/utils/index.js":{import:"./advanced/utils",content:Ce},"widgets/RichText/src/index.js":{import:"../../widgets/RichText/src",content:de}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:"^15.0.2|| ^16.0.0-rc || ^16.0.0"},"form-render":{version:"1.6.1"},"react-dom":{version:"^15.0.2|| ^16.0.0-rc || ^16.0.0"},"braft-editor":{version:"2.3.9",css:"braft-editor/dist/index.css"}},transform:!0,defaultShowCode:!0,identifier:"form-render-tester"}},"display-demo":{component:Object(W.dynamic)({loader:function(){var N=Object($.a)(b.a.mark(function P(){var f,i,h,y,O;return b.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return f=e("K+nK"),p.t0=f,p.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return p.t1=p.sent,i=(0,p.t0)(p.t1),p.t2=f,p.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return p.t3=p.sent,h=(0,p.t2)(p.t3),y=function(A){return{type:"object",displayType:A,properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},objectName:{title:"\u5BF9\u8C61",bind:"obj",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},O=function(){return i.default.createElement("div",null,i.default.createElement("h2",null,"display: row"),i.default.createElement(h.default,{schema:y("row")}),i.default.createElement("h2",null,"display: column"),i.default.createElement(h.default,{schema:y("column")}))},p.abrupt("return",O);case 14:case"end":return p.stop()}},P)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`},"demo/display.js":{import:"../demo/display",content:ze}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo"}},"display-demo-1":{component:Object(W.dynamic)({loader:function(){var N=Object($.a)(b.a.mark(function P(){var f,i,h,y,O;return b.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return f=e("K+nK"),p.t0=f,p.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return p.t1=p.sent,i=(0,p.t0)(p.t1),p.t2=f,p.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return p.t3=p.sent,h=(0,p.t2)(p.t3),y={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0},check:{title:"box",type:"boolean",default:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},O=function(){return i.default.createElement(h.default,{readOnly:!0,schema:y})},p.abrupt("return",O);case 14:case"end":return p.stop()}},P)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form readOnly schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:ze}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-1"}},"display-demo-2":{component:Object(W.dynamic)({loader:function(){var N=Object($.a)(b.a.mark(function P(){var f,i,h,y,O;return b.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return f=e("K+nK"),p.t0=f,p.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return p.t1=p.sent,i=(0,p.t0)(p.t1),p.t2=f,p.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return p.t3=p.sent,h=(0,p.t2)(p.t3),y={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0,width:"50%"},check:{title:"box",type:"boolean",default:!0,width:"50%",labelWidth:6},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},O=function(){return i.default.createElement(h.default,{labelWidth:"200",schema:y})},p.abrupt("return",O);case 14:case"end":return p.stop()}},P)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form labelWidth="200" schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:ze}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-2"}},"display-demo-3":{component:Object(W.dynamic)({loader:function(){var N=Object($.a)(b.a.mark(function P(){var f,i,h,y,O,o;return b.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return f=e("K+nK"),l.t0=f,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,i=(0,l.t0)(l.t1),l.t2=f,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,h=(0,l.t2)(l.t3),y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},O=function(){return i.default.createElement(h.default,{schema:y})},o=O,l.abrupt("return",o);case 15:case"end":return l.stop()}},P)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:ze}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-3"}},"display-demo-4":{component:Object(W.dynamic)({loader:function(){var N=Object($.a)(b.a.mark(function P(){var f,i,h,y,O,o;return b.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return f=e("K+nK"),l.t0=f,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,i=(0,l.t0)(l.t1),l.t2=f,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,h=(0,l.t2)(l.t3),y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},O=function(){return i.default.createElement(h.default,{schema:y})},o=O,l.abrupt("return",o);case 15:case"end":return l.stop()}},P)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:ze}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-4"}},"display-demo-5":{component:Object(W.dynamic)({loader:function(){var N=Object($.a)(b.a.mark(function P(){var f,i,h,y,O,o;return b.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return f=e("K+nK"),l.t0=f,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,i=(0,l.t0)(l.t1),l.t2=f,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,h=(0,l.t2)(l.t3),y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},O=function(){return i.default.createElement(h.default,{schema:y})},o=O,l.abrupt("return",o);case 15:case"end":return l.stop()}},P)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:ze}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-5"}},"display-demo-6":{component:Object(W.dynamic)({loader:function(){var N=Object($.a)(b.a.mark(function P(){var f,i,h,y,O,o;return b.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return f=e("K+nK"),l.t0=f,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,i=(0,l.t0)(l.t1),l.t2=f,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,h=(0,l.t2)(l.t3),y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",props:{hideMove:!0},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},O=function(){return i.default.createElement(h.default,{schema:y})},o=O,l.abrupt("return",o);case 15:case"end":return l.stop()}},P)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:ze}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-6"}},"form-methods-demo":{component:Object(W.dynamic)({loader:function(){var N=Object($.a)(b.a.mark(function P(){var f,i,h,y,O,o,p,l,A,w,S,d,T;return b.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return S=function(a,c){if(!c&&a&&a.__esModule)return a;if(a===null||typeof a!="object"&&typeof a!="function")return{default:a};var v=w(c);if(v&&v.has(a))return v.get(a);var E={},M=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var B in a)if(B!=="default"&&Object.prototype.hasOwnProperty.call(a,B)){var V=M?Object.getOwnPropertyDescriptor(a,B):null;V&&(V.get||V.set)?Object.defineProperty(E,B,V):E[B]=a[B]}return E.default=a,v&&v.set(a,E),E},w=function(a){if(typeof WeakMap!="function")return null;var c=new WeakMap,v=new WeakMap;return(w=function(M){return M?v:c})(a)},f=e("K+nK"),r.next=5,e.e(23).then(e.t.bind(null,"lfLe",7));case 5:return r.t0=f,r.next=8,e.e(24).then(e.t.bind(null,"Cp9S",7));case 8:return r.t1=r.sent,i=(0,r.t0)(r.t1),r.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return r.t2=f,r.next=15,e.e(8).then(e.t.bind(null,"4IMT",7));case 15:return r.t3=r.sent,h=(0,r.t2)(r.t3),r.next=19,e.e(15).then(e.t.bind(null,"tL+A",7));case 19:return r.t4=f,r.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return r.t5=r.sent,y=(0,r.t4)(r.t5),r.t6=f,r.next=27,Promise.resolve().then(e.bind(null,"tJVT"));case 27:return r.t7=r.sent,O=(0,r.t6)(r.t7),r.t8=S,r.next=32,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 32:return r.t9=r.sent,o=(0,r.t8)(r.t9),r.next=36,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(11)]).then(e.bind(null,"gdfu"));case 36:return p=r.sent,r.t10=S,r.next=40,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 40:return r.t11=r.sent,l=(0,r.t10)(r.t11),r.next=44,e.e(16).then(e.bind(null,"OH0R"));case 44:return A=r.sent,d=function(){var a=(0,l.useForm)(),c=(0,o.useState)({}),v=(0,O.default)(c,2),E=v[0],M=v[1],B=function(){(0,A.fakeApi)("xxx/getForm").then(function(nn){a.setValues({input1:"hello world",select1:"c"})})};(0,o.useEffect)(function(){(0,A.delay)(1e3).then(function(Le){M({type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}})})},[]);var V=function(nn,on){on.length>0?y.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(on.map(function(Nn){return Nn.name}))):(0,A.fakeApi)("xxx/submit",nn).then(function(Nn){return y.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})};return o.default.createElement("div",{style:{width:"400px"}},o.default.createElement(l.default,{form:a,schema:E,onFinish:V}),o.default.createElement(i.default,null,o.default.createElement(h.default,{onClick:B},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),o.default.createElement(h.default,{type:"primary",onClick:a.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},T=d,r.abrupt("return",T);case 48:case"end":return r.stop()}},P)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./advanced/utils",content:Ce}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo"}},"form-methods-demo-1":{component:Object(W.dynamic)({loader:function(){var N=Object($.a)(b.a.mark(function P(){var f,i,h,y,O,o,p,l,A,w,S,d,T;return b.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return w=function(a,c){if(!c&&a&&a.__esModule)return a;if(a===null||typeof a!="object"&&typeof a!="function")return{default:a};var v=A(c);if(v&&v.has(a))return v.get(a);var E={},M=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var B in a)if(B!=="default"&&Object.prototype.hasOwnProperty.call(a,B)){var V=M?Object.getOwnPropertyDescriptor(a,B):null;V&&(V.get||V.set)?Object.defineProperty(E,B,V):E[B]=a[B]}return E.default=a,v&&v.set(a,E),E},A=function(a){if(typeof WeakMap!="function")return null;var c=new WeakMap,v=new WeakMap;return(A=function(M){return M?v:c})(a)},f=e("K+nK"),r.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return r.t0=f,r.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return r.t1=r.sent,i=(0,r.t0)(r.t1),r.t2=f,r.next=13,Promise.resolve().then(e.bind(null,"PpiC"));case 13:return r.t3=r.sent,h=(0,r.t2)(r.t3),r.next=17,e.e(15).then(e.t.bind(null,"tL+A",7));case 17:return r.t4=f,r.next=20,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 20:return r.t5=r.sent,y=(0,r.t4)(r.t5),r.t6=f,r.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return r.t7=r.sent,O=(0,r.t6)(r.t7),r.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(11)]).then(e.bind(null,"gdfu"));case 29:return o=r.sent,r.t8=w,r.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 33:return r.t9=r.sent,p=(0,r.t8)(r.t9),r.next=37,e.e(16).then(e.bind(null,"OH0R"));case 37:return l=r.sent,S={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},d=function(){var a=(0,p.useForm)(),c=function(M,B){B.length>0?y.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(B.map(function(V){return V.name}))):(0,l.fakeApi)("xxx/submit",M).then(function(V){return y.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},v=function(M){var B=M.data,V=M.errors,Le=M.schema,nn=(0,h.default)(M,["data","errors","schema"]);return(0,l.fakeApi)("xxx/validation").then(function(on){return{name:"select1",error:["\u5916\u90E8\u6821\u9A8C\u9519\u8BEF"]}})};return O.default.createElement("div",{style:{width:"400px"}},O.default.createElement(p.default,{form:a,schema:S,beforeFinish:v,onFinish:c}),O.default.createElement(i.default,{type:"primary",onClick:a.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},T=d,r.abrupt("return",T);case 42:case"end":return r.stop()}},P)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./advanced/utils",content:Ce}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-1"}},"form-methods-demo-2":{component:Object(W.dynamic)({loader:function(){var N=Object($.a)(b.a.mark(function P(){var f,i,h,y,O,o,p,l,A,w,S,d,T;return b.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return w=function(a,c){if(!c&&a&&a.__esModule)return a;if(a===null||typeof a!="object"&&typeof a!="function")return{default:a};var v=A(c);if(v&&v.has(a))return v.get(a);var E={},M=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var B in a)if(B!=="default"&&Object.prototype.hasOwnProperty.call(a,B)){var V=M?Object.getOwnPropertyDescriptor(a,B):null;V&&(V.get||V.set)?Object.defineProperty(E,B,V):E[B]=a[B]}return E.default=a,v&&v.set(a,E),E},A=function(a){if(typeof WeakMap!="function")return null;var c=new WeakMap,v=new WeakMap;return(A=function(M){return M?v:c})(a)},f=e("K+nK"),r.next=5,e.e(23).then(e.t.bind(null,"lfLe",7));case 5:return r.t0=f,r.next=8,e.e(24).then(e.t.bind(null,"Cp9S",7));case 8:return r.t1=r.sent,i=(0,r.t0)(r.t1),r.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return r.t2=f,r.next=15,e.e(8).then(e.t.bind(null,"4IMT",7));case 15:return r.t3=r.sent,h=(0,r.t2)(r.t3),r.next=19,e.e(15).then(e.t.bind(null,"tL+A",7));case 19:return r.t4=f,r.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return r.t5=r.sent,y=(0,r.t4)(r.t5),r.t6=f,r.next=27,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 27:return r.t7=r.sent,O=(0,r.t6)(r.t7),r.next=31,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(11)]).then(e.bind(null,"gdfu"));case 31:return o=r.sent,r.t8=w,r.next=35,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 35:return r.t9=r.sent,p=(0,r.t8)(r.t9),r.next=39,e.e(16).then(e.bind(null,"OH0R"));case 39:return l=r.sent,S={type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F\u8303\u56F4",type:"range",format:"date"}}},d=function(){var a=(0,p.useForm)(),c=function(M,B){B.length>0?y.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(B.map(function(V){return V.name}))):(0,l.fakeApi)("xxx/submit",M).then(function(V){return y.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},v=function(){(0,l.fakeApi)("xxx/getForm").then(function(M){a.setValues({startDate:"2020-04-04",endDate:"2020-04-24"})})};return O.default.createElement("div",{style:{width:"400px"}},O.default.createElement(p.default,{form:a,schema:S,onFinish:c}),O.default.createElement(i.default,null,O.default.createElement(h.default,{onClick:v},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),O.default.createElement(h.default,{type:"primary",onClick:a.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},T=d,r.abrupt("return",T);case 44:case"end":return r.stop()}},P)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./advanced/utils",content:Ce}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-2"}},"form-methods-demo-3":{component:Object(W.dynamic)({loader:function(){var N=Object($.a)(b.a.mark(function P(){var f,i,h,y,O,o,p,l,A,w,S,d;return b.a.wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return A=function(n,a){if(!a&&n&&n.__esModule)return n;if(n===null||typeof n!="object"&&typeof n!="function")return{default:n};var c=l(a);if(c&&c.has(n))return c.get(n);var v={},E=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var M in n)if(M!=="default"&&Object.prototype.hasOwnProperty.call(n,M)){var B=E?Object.getOwnPropertyDescriptor(n,M):null;B&&(B.get||B.set)?Object.defineProperty(v,M,B):v[M]=n[M]}return v.default=n,c&&c.set(n,v),v},l=function(n){if(typeof WeakMap!="function")return null;var a=new WeakMap,c=new WeakMap;return(l=function(E){return E?c:a})(n)},f=e("K+nK"),m.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return m.t0=f,m.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return m.t1=m.sent,i=(0,m.t0)(m.t1),m.next=12,e.e(15).then(e.t.bind(null,"tL+A",7));case 12:return m.t2=f,m.next=15,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 15:return m.t3=m.sent,h=(0,m.t2)(m.t3),m.t4=A,m.next=20,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 20:return m.t5=m.sent,y=(0,m.t4)(m.t5),m.next=24,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(11)]).then(e.bind(null,"gdfu"));case 24:return O=m.sent,m.t6=A,m.next=28,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 28:return m.t7=m.sent,o=(0,m.t6)(m.t7),m.next=32,e.e(16).then(e.bind(null,"OH0R"));case 32:return p=m.sent,w={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select1:{title:"\u5355\u9009",type:"string",widget:"select"}}}}},S=function(){var n=(0,o.useForm)(),a=function(){n.setSchemaByPath("obj1.select1",{enum:["east","south","west","north"],enumNames:["\u4E1C","\u5357","\u897F","\u5317"]})},c=function(E,M){M.length>0?h.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(M.map(function(B){return B.name}))):h.default.info(JSON.stringify(E))};return y.default.createElement("div",{style:{width:"400px"}},y.default.createElement(o.default,{form:n,schema:w,onMount:a,onFinish:c}),y.default.createElement(i.default,{type:"primary",onClick:n.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},d=S,m.abrupt("return",d);case 37:case"end":return m.stop()}},P)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./advanced/utils",content:Ce}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-3"}},"function-demo":{component:Object(W.dynamic)({loader:function(){var N=Object($.a)(b.a.mark(function P(){var f,i,h,y,O,o,p,l;return b.a.wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return O=function(d,T){if(!T&&d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var m=y(T);if(m&&m.has(d))return m.get(d);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in d)if(a!=="default"&&Object.prototype.hasOwnProperty.call(d,a)){var c=n?Object.getOwnPropertyDescriptor(d,a):null;c&&(c.get||c.set)?Object.defineProperty(r,a,c):r[a]=d[a]}return r.default=d,m&&m.set(d,r),r},y=function(d){if(typeof WeakMap!="function")return null;var T=new WeakMap,m=new WeakMap;return(y=function(n){return n?m:T})(d)},f=e("K+nK"),w.t0=f,w.next=6,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 6:return w.t1=w.sent,i=(0,w.t0)(w.t1),w.t2=O,w.next=11,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 11:return w.t3=w.sent,h=(0,w.t2)(w.t3),o={type:"object",properties:{checkbox1:{title:"\u5C55\u793A\u66F4\u591A\u5185\u5BB9",type:"boolean"},select1:{title:"\u8BF7\u5047\u539F\u56E0",type:"string",enum:["a","b","c"],enumNames:["\u75C5\u5047","\u6709\u4E8B","\u5176\u5B83 (\u9700\u6CE8\u660E\u5177\u4F53\u539F\u56E0)"],hidden:"{{formData.checkbox1 !== true}}",widget:"radio"},input1:{title:"\u5177\u4F53\u539F\u56E0",type:"string",format:"textarea",hidden:'{{rootValue.checkbox1 !== true || formData.select1 !== "c"}}'}}},p=function(){var d=(0,h.useForm)();return i.default.createElement(h.default,{form:d,schema:o})},l=p,w.abrupt("return",l);case 17:case"end":return w.stop()}},P)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo1;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo"}},"function-demo-1":{component:Object(W.dynamic)({loader:function(){var N=Object($.a)(b.a.mark(function P(){var f,i,h,y,O;return b.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return f=e("K+nK"),p.t0=f,p.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return p.t1=p.sent,i=(0,p.t0)(p.t1),p.t2=f,p.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(17)]).then(e.bind(null,"c2mQ"));case 9:return p.t3=p.sent,h=(0,p.t2)(p.t3),p.next=13,e.e(21).then(e.bind(null,"8iYR"));case 13:return y=p.sent,O=function(){return i.default.createElement(h.default,{schema:y.expression})},p.abrupt("return",O);case 16:case"end":return p.stop()}},P)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { expression } from '../json/schema';

export default () => <FR schema={expression} />;`},"demo/FR.jsx":{import:"../demo/FR",content:Oe},"json/schema.js":{import:"../json/schema",content:cn}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo-1"}},"lifeCycle-demo":{component:Object(W.dynamic)({loader:function(){var N=Object($.a)(b.a.mark(function P(){var f,i,h,y,O,o,p,l,A;return b.a.wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return O=function(T,m){if(!m&&T&&T.__esModule)return T;if(T===null||typeof T!="object"&&typeof T!="function")return{default:T};var r=y(m);if(r&&r.has(T))return r.get(T);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in T)if(c!=="default"&&Object.prototype.hasOwnProperty.call(T,c)){var v=a?Object.getOwnPropertyDescriptor(T,c):null;v&&(v.get||v.set)?Object.defineProperty(n,c,v):n[c]=T[c]}return n.default=T,r&&r.set(T,n),n},y=function(T){if(typeof WeakMap!="function")return null;var m=new WeakMap,r=new WeakMap;return(y=function(a){return a?r:m})(T)},S.t0=O,S.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return S.t1=S.sent,f=(0,S.t0)(S.t1),S.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(11)]).then(e.bind(null,"gdfu"));case 9:return i=S.sent,S.t2=O,S.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 13:return S.t3=S.sent,h=(0,S.t2)(S.t3),o=function(T){return new Promise(function(m){return setTimeout(m,T)})},p={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u9009\u62E9\u6846",description:"\u52A0\u8F7D\u4E2D...",type:"string",enum:[],widget:"radio"}}},l=function(){var T=(0,h.useForm)(),m=function(){T.setValues({input1:"hello world"}),o(3e3).then(function(n){T.setSchemaByPath("select1",{description:"",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]})})};return f.default.createElement(h.default,{form:T,schema:p,onMount:m})},A=l,S.abrupt("return",A);case 20:case"end":return S.stop()}},P)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.6.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"lifeCycle-demo"}},"listDisplay-demo":{component:Object(W.dynamic)({loader:function(){var N=Object($.a)(b.a.mark(function P(){var f,i,h,y,O,o;return b.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return f=e("K+nK"),l.t0=f,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,i=(0,l.t0)(l.t1),l.t2=f,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,h=(0,l.t2)(l.t3),y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},O=function(){return i.default.createElement(h.default,{schema:y})},o=O,l.abrupt("return",o);case 15:case"end":return l.stop()}},P)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:ze}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo"}},"listDisplay-demo-1":{component:Object(W.dynamic)({loader:function(){var N=Object($.a)(b.a.mark(function P(){var f,i,h,y,O,o;return b.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return f=e("K+nK"),l.t0=f,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,i=(0,l.t0)(l.t1),l.t2=f,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,h=(0,l.t2)(l.t3),y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},O=function(){return i.default.createElement(h.default,{schema:y})},o=O,l.abrupt("return",o);case 15:case"end":return l.stop()}},P)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:ze}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-1"}},"listDisplay-demo-2":{component:Object(W.dynamic)({loader:function(){var N=Object($.a)(b.a.mark(function P(){var f,i,h,y,O,o;return b.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return f=e("K+nK"),l.t0=f,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,i=(0,l.t0)(l.t1),l.t2=f,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,h=(0,l.t2)(l.t3),y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},O=function(){return i.default.createElement(h.default,{schema:y})},o=O,l.abrupt("return",o);case 15:case"end":return l.stop()}},P)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:ze}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-2"}},"listDisplay-demo-3":{component:Object(W.dynamic)({loader:function(){var N=Object($.a)(b.a.mark(function P(){var f,i,h,y,O,o;return b.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return f=e("K+nK"),l.t0=f,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,i=(0,l.t0)(l.t1),l.t2=f,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,h=(0,l.t2)(l.t3),y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",props:{hideMove:!0},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},O=function(){return i.default.createElement(h.default,{schema:y})},o=O,l.abrupt("return",o);case 15:case"end":return l.stop()}},P)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:ze}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-3"}},"listDisplay-demo-4":{component:Object(W.dynamic)({loader:function(){var N=Object($.a)(b.a.mark(function P(){var f,i,h,y,O,o;return b.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return f=e("K+nK"),l.t0=f,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,i=(0,l.t0)(l.t1),l.t2=f,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,h=(0,l.t2)(l.t3),window.hello=function(A){var w=A.value;console.log(w)},y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list4",itemProps:{buttons:[{callback:"hello",text:"\u590D\u5236"}]},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},O=function(){return i.default.createElement(h.default,{schema:y})},o=O,l.abrupt("return",o);case 16:case"end":return l.stop()}},P)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:ze}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-4"}},"watch-demo":{component:Object(W.dynamic)({loader:function(){var N=Object($.a)(b.a.mark(function P(){var f,i,h,y,O,o,p,l;return b.a.wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return O=function(d,T){if(!T&&d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var m=y(T);if(m&&m.has(d))return m.get(d);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in d)if(a!=="default"&&Object.prototype.hasOwnProperty.call(d,a)){var c=n?Object.getOwnPropertyDescriptor(d,a):null;c&&(c.get||c.set)?Object.defineProperty(r,a,c):r[a]=d[a]}return r.default=d,m&&m.set(d,r),r},y=function(d){if(typeof WeakMap!="function")return null;var T=new WeakMap,m=new WeakMap;return(y=function(n){return n?m:T})(d)},w.t0=O,w.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return w.t1=w.sent,f=(0,w.t0)(w.t1),w.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(11)]).then(e.bind(null,"gdfu"));case 9:return i=w.sent,w.t2=O,w.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 13:return w.t3=w.sent,h=(0,w.t2)(w.t3),o={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"}}},p=function(){var d=(0,h.useForm)(),T={"#":function(r){console.log("\u8868\u5355\u7684\u65F6\u65F6\u6570\u636E\u4E3A\uFF1A",r)},input1:function(r){d.setValueByPath("input2",r)}};return f.default.createElement(h.default,{form:d,schema:o,watch:T})},l=p,w.abrupt("return",l);case 19:case"end":return w.stop()}},P)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.6.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo"}},"watch-demo-1":{component:Object(W.dynamic)({loader:function(){var N=Object($.a)(b.a.mark(function P(){var f,i,h,y,O,o,p,l,A,w;return b.a.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return p=function(m,r){if(!r&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var n=o(r);if(n&&n.has(m))return n.get(m);var a={},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in m)if(v!=="default"&&Object.prototype.hasOwnProperty.call(m,v)){var E=c?Object.getOwnPropertyDescriptor(m,v):null;E&&(E.get||E.set)?Object.defineProperty(a,v,E):a[v]=m[v]}return a.default=m,n&&n.set(m,a),a},o=function(m){if(typeof WeakMap!="function")return null;var r=new WeakMap,n=new WeakMap;return(o=function(c){return c?n:r})(m)},f=e("K+nK"),d.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return d.t0=f,d.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return d.t1=d.sent,i=(0,d.t0)(d.t1),d.t2=p,d.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return d.t3=d.sent,h=(0,d.t2)(d.t3),d.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(11)]).then(e.bind(null,"gdfu"));case 17:return y=d.sent,d.t4=p,d.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 21:return d.t5=d.sent,O=(0,d.t4)(d.t5),l={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"radio"}}}}},A=function(){var m=(0,O.useForm)(),r=function(c,v){v.length>0?alert("errorFields:"+JSON.stringify(v)):alert("formData:"+JSON.stringify(c,null,2))},n={input1:function(c){c.length>2?m.setSchemaByPath("obj1.select",function(v){var E=v.enumNames;return{enumNames:E.map(function(M){return M+"a"})}}):m.setSchemaByPath("obj1.select",{enumNames:["\u65E9","\u4E2D","\u665A"]})}};return h.default.createElement("div",null,h.default.createElement(O.default,{form:m,schema:l,onFinish:r,watch:n}),h.default.createElement(i.default,{type:"",style:{marginRight:8},onClick:function(){return m.setSchemaByPath("input2",{title:"\u7F16\u8F91\u6846",format:"textarea"})}},"\u5C06 input \u6539\u4E3A textarea"),h.default.createElement(i.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4"))},w=A,d.abrupt("return",w);case 27:case"end":return d.stop()}},P)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo-1"}},"widget-demo":{component:Object(W.dynamic)({loader:function(){var N=Object($.a)(b.a.mark(function P(){var f,i,h,y,O,o,p,l,A,w,S,d,T;return b.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return A=function(a,c){if(!c&&a&&a.__esModule)return a;if(a===null||typeof a!="object"&&typeof a!="function")return{default:a};var v=l(c);if(v&&v.has(a))return v.get(a);var E={},M=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var B in a)if(B!=="default"&&Object.prototype.hasOwnProperty.call(a,B)){var V=M?Object.getOwnPropertyDescriptor(a,B):null;V&&(V.get||V.set)?Object.defineProperty(E,B,V):E[B]=a[B]}return E.default=a,v&&v.set(a,E),E},l=function(a){if(typeof WeakMap!="function")return null;var c=new WeakMap,v=new WeakMap;return(l=function(M){return M?v:c})(a)},f=e("K+nK"),r.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return r.t0=f,r.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return r.t1=r.sent,i=(0,r.t0)(r.t1),r.next=12,Promise.all([e.e(3),e.e(19)]).then(e.t.bind(null,"cUip",7));case 12:return r.t2=f,r.next=15,Promise.all([e.e(0),e.e(8),e.e(18),e.e(20)]).then(e.t.bind(null,"iJl9",7));case 15:return r.t3=r.sent,h=(0,r.t2)(r.t3),r.t4=f,r.next=20,e.e(86).then(e.bind(null,"0Owb"));case 20:return r.t5=r.sent,y=(0,r.t4)(r.t5),r.t6=f,r.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return r.t7=r.sent,O=(0,r.t6)(r.t7),r.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(11)]).then(e.bind(null,"gdfu"));case 29:return o=r.sent,r.t8=A,r.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 33:return r.t9=r.sent,p=(0,r.t8)(r.t9),w={type:"object",properties:{string:{title:"\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6",type:"string",widget:"site"},select:{title:"\u5355\u9009",type:"number",enum:[1,2,3],enumNames:["\u9009\u98791","\u9009\u98792","\u9009\u98793"]}}},S=function(a){return console.log("widget props:",a),O.default.createElement(h.default,(0,y.default)({addonBefore:"https://",addonAfter:".com"},a))},d=function(){var a=(0,p.useForm)();return O.default.createElement("div",null,O.default.createElement(p.default,{form:a,schema:w,widgets:{site:S},onFinish:function(v){return alert(JSON.stringify(v,null,2))}}),O.default.createElement(i.default,{type:"primary",onClick:a.submit},"\u63D0\u4EA4"))},T=d,r.abrupt("return",T);case 40:case"end":return r.stop()}},P)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.1"},"react-dom":{version:">=16.8.0"}},identifier:"widget-demo"}},"measure-demo":{component:Object(W.dynamic)({loader:function(){var N=Object($.a)(b.a.mark(function P(){var f,i,h,y,O,o,p,l,A,w;return b.a.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return l=function(m,r){if(!r&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var n=p(r);if(n&&n.has(m))return n.get(m);var a={},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in m)if(v!=="default"&&Object.prototype.hasOwnProperty.call(m,v)){var E=c?Object.getOwnPropertyDescriptor(m,v):null;E&&(E.get||E.set)?Object.defineProperty(a,v,E):a[v]=m[v]}return a.default=m,n&&n.set(m,a),a},p=function(m){if(typeof WeakMap!="function")return null;var r=new WeakMap,n=new WeakMap;return(p=function(c){return c?n:r})(m)},f=e("K+nK"),d.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return d.t0=f,d.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return d.t1=d.sent,i=(0,d.t0)(d.t1),d.next=12,e.e(15).then(e.t.bind(null,"tL+A",7));case 12:return d.t2=f,d.next=15,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 15:return d.t3=d.sent,h=(0,d.t2)(d.t3),d.t4=l,d.next=20,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 20:return d.t5=d.sent,y=(0,d.t4)(d.t5),d.next=24,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(11)]).then(e.bind(null,"gdfu"));case 24:return O=d.sent,d.t6=l,d.next=28,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 28:return d.t7=d.sent,o=(0,d.t6)(d.t7),A=function(){var m=(0,o.useForm)({logOnMount:function(c){console.log("onMount",c)},logOnSubmit:function(c){console.log("onSubmit",c)}}),r={type:"object",properties:{input1:{title:"\u8F93\u5165\u6846",required:!0,type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u5DE6","\u4E2D","\u53F3"],widget:"radio"}}},n=function(c,v){v.length>0?h.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(v.map(function(E){return E.name}))):h.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")};return y.default.createElement("div",null,y.default.createElement(o.default,{id:"my-demo-form",form:m,schema:r,onFinish:n}),y.default.createElement(i.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},w=A,d.abrupt("return",w);case 33:case"end":return d.stop()}},P)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"measure-demo"}},"migrate-demo":{component:Object(W.dynamic)({loader:function(){var N=Object($.a)(b.a.mark(function P(){var f,i,h,y,O,o,p,l;return b.a.wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return p=function(){var d=(0,h.useForm)(),T=function(r,n){n.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(n))):alert(JSON.stringify(r))};return i.default.createElement("div",null,i.default.createElement(h.default,{form:d,schema:o,onFinish:T}),i.default.createElement("button",{onClick:d.submit},"\u63D0\u4EA4"))},O=function(d,T){if(!T&&d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var m=y(T);if(m&&m.has(d))return m.get(d);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in d)if(a!=="default"&&Object.prototype.hasOwnProperty.call(d,a)){var c=n?Object.getOwnPropertyDescriptor(d,a):null;c&&(c.get||c.set)?Object.defineProperty(r,a,c):r[a]=d[a]}return r.default=d,m&&m.set(d,r),r},y=function(d){if(typeof WeakMap!="function")return null;var T=new WeakMap,m=new WeakMap;return(y=function(n){return n?m:T})(d)},f=e("K+nK"),w.t0=f,w.next=7,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 7:return w.t1=w.sent,i=(0,w.t0)(w.t1),w.t2=O,w.next=12,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 12:return w.t3=w.sent,h=(0,w.t2)(w.t3),o={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}},l=p,w.abrupt("return",l);case 17:case"end":return w.stop()}},P)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate-demo"}},"migrate-demo-1":{component:Object(W.dynamic)({loader:function(){var N=Object($.a)(b.a.mark(function P(){var f,i,h,y,O,o,p,l,A,w,S,d,T;return b.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return A=function(a,c){if(!c&&a&&a.__esModule)return a;if(a===null||typeof a!="object"&&typeof a!="function")return{default:a};var v=l(c);if(v&&v.has(a))return v.get(a);var E={},M=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var B in a)if(B!=="default"&&Object.prototype.hasOwnProperty.call(a,B)){var V=M?Object.getOwnPropertyDescriptor(a,B):null;V&&(V.get||V.set)?Object.defineProperty(E,B,V):E[B]=a[B]}return E.default=a,v&&v.set(a,E),E},l=function(a){if(typeof WeakMap!="function")return null;var c=new WeakMap,v=new WeakMap;return(l=function(M){return M?v:c})(a)},f=e("K+nK"),r.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return r.t0=f,r.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return r.t1=r.sent,i=(0,r.t0)(r.t1),r.t2=f,r.next=13,Promise.resolve().then(e.bind(null,"tJVT"));case 13:return r.t3=r.sent,h=(0,r.t2)(r.t3),r.next=17,Promise.all([e.e(3),e.e(19)]).then(e.t.bind(null,"cUip",7));case 17:return r.t4=f,r.next=20,Promise.all([e.e(0),e.e(8),e.e(18),e.e(20)]).then(e.t.bind(null,"iJl9",7));case 20:return r.t5=r.sent,y=(0,r.t4)(r.t5),r.t6=A,r.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return r.t7=r.sent,O=(0,r.t6)(r.t7),r.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(11)]).then(e.bind(null,"gdfu"));case 29:return o=r.sent,r.next=32,Promise.all([e.e(22),e.e(25)]).then(e.bind(null,"7t+U"));case 32:return p=r.sent,w=y.default.TextArea,S={type:"object",properties:{number:{title:"\u6570\u5B57\u8F93\u5165\u6846",type:"number","ui:disabled":!0},checkbox:{title:"\u662F\u5426\u9009\u62E9",type:"boolean","ui:widget":"switch"}},required:["number"]},d=function(){var a=(0,O.useState)(JSON.stringify(S)),c=(0,h.default)(a,2),v=c[0],E=c[1],M=(0,O.useState)({}),B=(0,h.default)(M,2),V=B[0],Le=B[1],nn=function(){try{var In=(0,p.updateSchemaToNewVersion)(JSON.parse(v));Le(In)}catch(Hn){console.log(Hn)}},on=function(In){E(In.target.value)},Nn=function(){E(JSON.stringify(JSON.parse(v),null,2))};return O.default.createElement("div",null,O.default.createElement("div",null,"\u586B\u5165\u65E7\u7248schema\uFF1A"),O.default.createElement(w,{style:{minHeight:400,marginTop:12,marginBottom:12},value:v,onChange:on}),O.default.createElement(i.default,{style:{marginRight:12},onClick:Nn},"\u683C\u5F0F\u5316\u65E7schema"),O.default.createElement(i.default,{type:"primary",onClick:nn},"\u751F\u6210\u65B0\u7248schema"),O.default.createElement(w,{style:{minHeight:400,marginTop:12},value:JSON.stringify(V,null,2)}))},T=d,r.abrupt("return",T);case 38:case"end":return r.stop()}},P)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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

export default Translator;`},"packages/form-render/src/utils.js":{import:"../../packages/form-render/src/utils.js",content:J}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"},"lodash-es":{version:"4.17.21"}},identifier:"migrate-demo-1"}},"migrate2-demo":{component:Object(W.dynamic)({loader:function(){var N=Object($.a)(b.a.mark(function P(){var f,i,h,y,O,o,p,l,A;return b.a.wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return l=function(){var T=(0,h.useState)({}),m=(0,i.default)(T,2),r=m[0],n=m[1],a=(0,h.useState)([]),c=(0,i.default)(a,2),v=c[0],E=c[1],M=(0,h.useState)(!1),B=(0,i.default)(M,2),V=B[0],Le=B[1],nn=(0,y.useForm)({formData:r,onChange:n,onValidate:E,showValidate:V});(0,h.useEffect)(function(){nn.init()},[]);var on=function(){Le(!0),v.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(v))):alert(JSON.stringify(r))};return h.default.createElement("div",null,h.default.createElement(y.default,{form:nn,schema:p}),h.default.createElement("button",{onClick:on},"\u63D0\u4EA4"))},o=function(T,m){if(!m&&T&&T.__esModule)return T;if(T===null||typeof T!="object"&&typeof T!="function")return{default:T};var r=O(m);if(r&&r.has(T))return r.get(T);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in T)if(c!=="default"&&Object.prototype.hasOwnProperty.call(T,c)){var v=a?Object.getOwnPropertyDescriptor(T,c):null;v&&(v.get||v.set)?Object.defineProperty(n,c,v):n[c]=T[c]}return n.default=T,r&&r.set(T,n),n},O=function(T){if(typeof WeakMap!="function")return null;var m=new WeakMap,r=new WeakMap;return(O=function(a){return a?r:m})(T)},f=e("K+nK"),S.t0=f,S.next=7,Promise.resolve().then(e.bind(null,"tJVT"));case 7:return S.t1=S.sent,i=(0,S.t0)(S.t1),S.t2=o,S.next=12,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 12:return S.t3=S.sent,h=(0,S.t2)(S.t3),S.t4=o,S.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 17:return S.t5=S.sent,y=(0,S.t4)(S.t5),p={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}},A=l,S.abrupt("return",A);case 22:case"end":return S.stop()}},P)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
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
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate2-demo"}},"schema-demo":{component:Object(W.dynamic)({loader:function(){var N=Object($.a)(b.a.mark(function P(){var f,i,h,y,O;return b.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return f=e("K+nK"),p.t0=f,p.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return p.t1=p.sent,i=(0,p.t0)(p.t1),p.t2=f,p.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(17)]).then(e.bind(null,"c2mQ"));case 9:return p.t3=p.sent,h=(0,p.t2)(p.t3),p.next=13,e.e(21).then(e.bind(null,"8iYR"));case 13:return y=p.sent,O=function(){return i.default.createElement(h.default,{schema:y.basic})},p.abrupt("return",O);case 16:case"end":return p.stop()}},P)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { basic } from '../json/schema';

export default () => <FR schema={basic} />;`},"demo/FR.jsx":{import:"../demo/FR",content:Oe},"json/schema.js":{import:"../json/schema",content:cn}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo"}},"schema-demo-1":{component:Object(W.dynamic)({loader:function(){var N=Object($.a)(b.a.mark(function P(){var f,i,h,y,O;return b.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return f=e("K+nK"),p.t0=f,p.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return p.t1=p.sent,i=(0,p.t0)(p.t1),p.t2=f,p.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(17)]).then(e.bind(null,"c2mQ"));case 9:return p.t3=p.sent,h=(0,p.t2)(p.t3),p.next=13,e.e(21).then(e.bind(null,"8iYR"));case 13:return y=p.sent,O=function(){return i.default.createElement(h.default,{schema:y.titleTrick})},p.abrupt("return",O);case 16:case"end":return p.stop()}},P)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { titleTrick } from '../json/schema';

export default () => <FR schema={titleTrick} />;`},"demo/FR.jsx":{import:"../demo/FR",content:Oe},"json/schema.js":{import:"../json/schema",content:cn}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo-1"}},"docs-playground":{component:Object(W.dynamic)({loader:function(){var N=Object($.a)(b.a.mark(function P(){return b.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"BASV"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},P)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:Pn},"main.js":{import:"./main",content:vn},"json/simplest.json":{import:"./json/simplest.json",content:sn},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:xe},"monaco/index.js":{import:"./monaco",content:wn},"theme.css":{import:"./theme.css",content:Tn},"index.css":{import:"./index.css",content:gn}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:"^16.0.0"},"react-dom":{version:"^16.0.0"},"deep-equal":{version:"2.0.5"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.6.1"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-simple-code-editor":{version:"0.11.0"},prismjs:{version:"1.23.0"}},identifier:"docs-playground"}},"docs-playground1":{component:Object(W.dynamic)({loader:function(){var N=Object($.a)(b.a.mark(function P(){return b.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"Wrpt"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},P)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:Te},"main.js":{import:"./main",content:nt},"json/simplest.json":{import:"./json/simplest.json",content:Mn},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:tt},"monaco/index.js":{import:"./monaco",content:dt},"suggestionsMap.js":{import:"./suggestionsMap",content:rt},"index.css":{import:"./index.css",content:ct}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:"^17.x"},"react-dom":{version:">=16.9.0"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.6.1"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-monaco-editor":{version:"0.44.0"},"@types/react":{version:"^17.x"}},identifier:"docs-playground1"}},"table-render-advanced":{component:Object(W.dynamic)({loader:function(){var N=Object($.a)(b.a.mark(function P(){return b.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"7ZP+"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},P)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{tsx:Bn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.3"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!0,identifier:"table-render-advanced"}},"table-render-nosearch":{component:Object(W.dynamic)({loader:function(){var N=Object($.a)(b.a.mark(function P(){return b.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"CfUQ"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},P)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{tsx:at}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.3"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!0,identifier:"table-render-nosearch"}},"table-render-notitle":{component:Object(W.dynamic)({loader:function(){var N=Object($.a)(b.a.mark(function P(){return b.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"/usH"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},P)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{tsx:Vn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.3"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!0,identifier:"table-render-notitle"}},"table-render-paramtable":{component:Object(W.dynamic)({loader:function(){var N=Object($.a)(b.a.mark(function P(){return b.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"48jF"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},P)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{tsx:mt}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.3"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},umi:{version:"3.4.19"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!0,identifier:"table-render-paramtable"}},"table-render-demo":{component:Object(W.dynamic)({loader:function(){var N=Object($.a)(b.a.mark(function P(){var f,i,h,y,O,o,p,l,A;return b.a.wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return f=e("K+nK"),S.t0=f,S.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return S.t1=S.sent,i=(0,S.t0)(S.t1),S.next=8,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(71)]).then(e.bind(null,"P2DI"));case 8:for(h=S.sent,y=[],O=0;O<6;O++)y.push({id:O.toString(),title:"\u6807\u9898".concat(O+1),created_at:new Date().getTime()});return o={type:"object",properties:{string:{title:"\u6807\u9898",type:"string",width:"30%"},created_at:{title:"\u521B\u5EFA\u65F6\u95F4",type:"string",format:"date",width:"30%"}}},p=[{title:"\u6807\u9898",dataIndex:"title"},{title:"\u521B\u5EFA\u65F6\u95F4",key:"since",dataIndex:"created_at",valueType:"date"},{title:"\u64CD\u4F5C",render:function(T,m){return i.default.createElement("a",{onClick:function(){return alert(T.title)}},"\u7F16\u8F91")}}],l=function(){var T=function(){return{rows:y,total:y.length}};return i.default.createElement(i.default.Fragment,null,i.default.createElement(h.Search,{schema:o,api:T}),i.default.createElement(h.Table,{headerTitle:"\u6700\u7B80\u8868\u683C",columns:p,rowKey:"id"}))},A=(0,h.withTable)(l),S.abrupt("return",A);case 16:case"end":return S.stop()}},P)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
    <>
      <Search schema={schema} api={searchApi} />
      <Table headerTitle="\u6700\u7B80\u8868\u683C" columns={columns} rowKey="id" />
    </>
  );
};

export default withTable(Wrapper);`}},dependencies:{react:{version:">=16.8.0"},"table-render":{version:"1.1.3"},antd:{version:"4.x",css:"antd/dist/antd.css"}},transform:!0,defaultShowCode:!0,identifier:"table-render-demo"}},"generator-demo":{component:Object(W.dynamic)({loader:function(){var N=Object($.a)(b.a.mark(function P(){var f,i,h,y,O,o;return b.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return f=e("K+nK"),l.t0=f,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,i=(0,l.t0)(l.t1),l.t2=f,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(70)]).then(e.bind(null,"nYSz"));case 9:return l.t3=l.sent,h=(0,l.t2)(l.t3),y={type:"object",properties:{inputName:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string"}}},O=function(){return i.default.createElement("div",{style:{height:"80vh"}},i.default.createElement(h.default,{defaultValue:y}))},o=O,l.abrupt("return",o);case 15:case"end":return l.stop()}},P)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.4.6"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"generator-demo"}},"generator-modal":{component:Object(W.dynamic)({loader:function(){var N=Object($.a)(b.a.mark(function P(){return b.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"PPgD"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},P)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:Kn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.4.6"},"react-dom":{version:">=16.9.0"}},identifier:"generator-modal"}},"generator-settings":{component:Object(W.dynamic)({loader:function(){var N=Object($.a)(b.a.mark(function P(){return b.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"M63W"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},P)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:Wn}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.4.6"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-settings"}},"generator-layout":{component:Object(W.dynamic)({loader:function(){var N=Object($.a)(b.a.mark(function P(){return b.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"SOdT"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},P)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:Jn},"index.less":{import:"./index.less",content:zn}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.4.6"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-layout"}},"generator-transformer":{component:Object(W.dynamic)({loader:function(){var N=Object($.a)(b.a.mark(function P(){return b.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"jktF"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},P)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:xn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.4.6"},"react-dom":{version:">=16.9.0"}},identifier:"generator-transformer"}},"generator-playground":{component:Object(W.dynamic)({loader:function(){var N=Object($.a)(b.a.mark(function P(){return b.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"TYW4"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},P)}));function I(){return N.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:st},"index.less":{import:"./index.less",content:zn}},dependencies:{react:{version:">=16.8.0"},umi:{version:"3.4.19"},"fr-generator":{version:"2.4.6"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-playground"}}}},TIsu:function(Dn,dn,e){},Zs1V:function(Dn){Dn.exports=JSON.parse("{}")},p8sG:function(Dn,dn,e){"use strict";Dn.exports=e("80pN")},ymTJ:function(Dn,dn,e){"use strict";e.r(dn);var $=e("q1tI"),t=e.n($),b=e("dEAq"),W=e.n(b),le=e("0zqC"),J=e("ZpkN"),an=e("JjdP"),Ce=t.a.memo(an.default["measure-demo"].component);dn.default=de=>(t.a.useEffect(()=>{de!=null&&de.location.hash&&b.AnchorLink.scrollToAnchor(decodeURIComponent(de.location.hash.slice(1)))},[]),t.a.createElement(t.a.Fragment,null,t.a.createElement(t.a.Fragment,null,t.a.createElement("div",{className:"markdown"},t.a.createElement("h1",{id:"\u8868\u5355\u5065\u5EB7\u5EA6--\u63D0\u6548"},t.a.createElement(b.AnchorLink,{to:"#\u8868\u5355\u5065\u5EB7\u5EA6--\u63D0\u6548","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"\u8868\u5355\u5065\u5EB7\u5EA6 & \u63D0\u6548"),t.a.createElement("p",null,`\u4E1A\u754C\u6709\u53E5\u8BDD\u53EB "You can't improve what you can't measure"\u3002\u5373\u662F\u8BF4\uFF0C\u5982\u679C\u65E0\u6CD5\u5EA6\u91CF\u4E00\u4EF6\u4E8B\uFF0C\u90A3\u6539\u5584\u4E5F\u65E0\u4ECE\u8C08\u8D77\u3002 FormRender \u4F5C\u4E3A\u8868\u5355\u63D0\u6548\u7684\u65B9\u6848\uFF0C\u63D0\u6548\u7684\u540C\u65F6\u4E5F\u9700\u8981\u7ED9\u51FA\u5408\u7406\u7684\u5EA6\u91CF\u6570\u636E\uFF0C\u5E2E\u52A9\u4F7F\u7528\u8005\u66F4\u597D\u5730\u8BA4\u77E5\u548C\u53D1\u73B0\u95EE\u9898\u3002`),t.a.createElement("p",null,"\u76EE\u524D FormRender \u63D0\u4F9B\u4E86\u4E24\u4E2A\u89E6\u53D1\u65F6\u673A\u4EE5\u53CA\u4E00\u7CFB\u5217\u76F8\u5173\u6570\u636E\u4F5C\u4E3A\u5BF9\u5916\u5F00\u653E\u63A5\u53E3\uFF0C\u63A8\u8350\u7528\u6237\u7528\u4E8E\u63A5\u5165\u9002\u5408\u81EA\u5DF1\u9879\u76EE\u7684\u57CB\u70B9 & \u6570\u636E\u76D1\u63A7\u65B9\u6848\u3002"),t.a.createElement("h2",{id:"roadmap"},t.a.createElement(b.AnchorLink,{to:"#roadmap","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"RoadMap"),t.a.createElement("p",null,"\u6570\u636E"),t.a.createElement("ul",null,t.a.createElement("li",null,"\u4E00\u671F\u6211\u4EEC\u7684\u5EA6\u91CF\u4F1A\u662F\u66F4\u4E3A\u6574\u4F53\u7684\u6570\u636E\uFF1A\u4F8B\u5982\u8868\u5355\u7684\u62A5\u9519\u548C\u63D0\u4EA4\u662F\u5426\u6210\u529F\uFF0C\u6574\u4F53\u8868\u5355\u63D0\u4EA4\u65F6\u957F\u7B49\u3002"),t.a.createElement("li",null,"\u4E8C\u671F\u6211\u4EEC\u4F1A\u63D0\u4F9B\u66F4\u4E3A\u7EC6\u81F4\u7684\u6570\u636E\u8FDB\u4E00\u6B65\u627E\u5BFB\u5230\u5982\u679C\u4E00\u4E2A\u8868\u5355\u7684\u7528\u6237\u586B\u5199\u6548\u7387\u4F4E\u4E0B\uFF0C\u662F\u54EA\u4E2A\u8868\u5355\u539F\u4EF6\u548C\u64CD\u4F5C\u9020\u6210\u4E86\u7F13\u6162\uFF0C\u66F4\u8FDB\u4E00\u6B65\u4EE5\u6570\u636E\u7ED9\u51FA\u4F18\u5316\u7684\u6307\u5F15")),t.a.createElement("p",null,"\u65B9\u6848"),t.a.createElement("ul",null,t.a.createElement("li",null,"\u4E00\u671F\u6211\u4EEC\u5BF9\u5916\u63D0\u4F9B\u4E86\u89E6\u53D1\u94A9\u5B50\u4EE5\u53CA\u6570\u636E\uFF0C\u8BA9\u7528\u6237\u81EA\u884C\u9009\u62E9\u76D1\u63A7\u548C\u6570\u636E\u57CB\u70B9\u65B9\u6848"),t.a.createElement("li",null,"\u4E8C\u671F\u6211\u4EEC\u4F1A\u7ED9\u51FA\u5168\u5957\u7684\u670D\u52A1\uFF0C\u53EA\u9700\u8981\u7B80\u5355\u6CE8\u518C\u5373\u53EF\u83B7\u53D6\u8868\u5355\u5065\u5EB7\u4FE1\u606F")),t.a.createElement("h2",{id:"\u4F7F\u7528"},t.a.createElement(b.AnchorLink,{to:"#\u4F7F\u7528","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"\u4F7F\u7528"),t.a.createElement("p",null,"\u63D0\u4F9B\u4E86 ",t.a.createElement("code",null,"logOnMount")," \u548C ",t.a.createElement("code",null,"logOnSubmit")," \u4E24\u4E2A\u94A9\u5B50\u3002\u5728\u4F7F\u7528 ",t.a.createElement("code",null,"useForm")," \u65F6\u6CE8\u5165\uFF1A"),t.a.createElement(J.a,{code:`const form = useForm({
  logOnMount: info => {
    console.log('onMount', info);
  },
  logOnSubmit: info => {
    console.log('onSubmit', info);
  },
});`,lang:"js"}),t.a.createElement("p",null,"\u6700\u7B80\u4F7F\u7528\u6837\u4F8B\u5982\u4E0B\uFF0C\u6548\u679C\u89C1 console")),t.a.createElement(le.default,an.default["measure-demo"].previewerProps,t.a.createElement(Ce,null)),t.a.createElement("div",{className:"markdown"},t.a.createElement("h3",{id:"logonmount"},t.a.createElement(b.AnchorLink,{to:"#logonmount","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"logOnMount"),t.a.createElement("p",null,"\u4F1A\u5728\u8868\u5355\u9996\u6B21\u52A0\u8F7D\u65F6\u89E6\u53D1\uFF0C\u4E00\u822C\u4E5F\u5C31\u662F\u9875\u9762\u9996\u6B21\u52A0\u8F7D\u65F6\u3002\u6837\u4F8B\u7684\u5165\u53C2\u503C\u5982\u4E0B"),t.a.createElement("table",null,t.a.createElement("thead",null,t.a.createElement("tr",null,t.a.createElement("th",null,"\u53C2\u6570"),t.a.createElement("th",null,"\u63CF\u8FF0"))),t.a.createElement("tbody",null,t.a.createElement("tr",null,t.a.createElement("td",null,t.a.createElement("strong",null,"id")),t.a.createElement("td",null,"\u8868\u5355 id\uFF0C\u53EA\u5F53\u7528\u6237\u6CE8\u660E id \u65F6\u624D\u4F1A log")),t.a.createElement("tr",null,t.a.createElement("td",null,t.a.createElement("strong",null,"formData")),t.a.createElement("td",null,"\u8868\u5355\u503C")),t.a.createElement("tr",null,t.a.createElement("td",null,t.a.createElement("strong",null,"schema")),t.a.createElement("td",null,"\u8868\u5355\u534F\u8BAE")),t.a.createElement("tr",null,t.a.createElement("td",null,t.a.createElement("strong",null,"url")),t.a.createElement("td",null,"\u8868\u5355\u52A0\u8F7D\u7684\u9875\u9762\u5730\u5740")),t.a.createElement("tr",null,t.a.createElement("td",null,t.a.createElement("strong",null,"formMount")),t.a.createElement("td",null,"\u8868\u5355\u52A0\u8F7D\u7684\u65F6\u95F4\u70B9")))),t.a.createElement(J.a,{code:`{
  id: "my-demo-form",
  schema: {
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
  },
  url: 'https://x-render.gitee.io/form-render/measure',
  formData: {},
  formMount: '2021-07-02 16:03:42',
};`,lang:"js"}),t.a.createElement("h3",{id:"logonsubmit"},t.a.createElement(b.AnchorLink,{to:"#logonsubmit","aria-hidden":"true",tabIndex:-1},t.a.createElement("span",{className:"icon icon-link"})),"logOnSubmit"),t.a.createElement("p",null,"\u4F1A\u5728\u8868\u5355\u6BCF\u6B21\u63D0\u4EA4\u65F6\u89E6\u53D1\u3002\u6837\u4F8B\u7684\u5165\u53C2\u503C\u5982\u4E0B"),t.a.createElement("table",null,t.a.createElement("thead",null,t.a.createElement("tr",null,t.a.createElement("th",null,"\u53C2\u6570"),t.a.createElement("th",null,"\u63CF\u8FF0"))),t.a.createElement("tbody",null,t.a.createElement("tr",null,t.a.createElement("td",null,t.a.createElement("strong",null,"duration")),t.a.createElement("td",null,"\u8868\u5355\u586B\u5199\u65F6\u957F")),t.a.createElement("tr",null,t.a.createElement("td",null,t.a.createElement("strong",null,"ms")),t.a.createElement("td",null,"duration \u7684\u65F6\u95F4\u6233\u5F62\u5F0F")),t.a.createElement("tr",null,t.a.createElement("td",null,t.a.createElement("strong",null,"numberOfSubmits")),t.a.createElement("td",null,"\u4ECE\u9996\u6B21\u52A0\u8F7D\u5F00\u59CB\u63D0\u4EA4\u4E86\u51E0\u6B21")),t.a.createElement("tr",null,t.a.createElement("td",null,t.a.createElement("strong",null,"failedAttempts")),t.a.createElement("td",null,"\u4ECE\u9996\u6B21\u52A0\u8F7D\u5F00\u59CB\u63D0\u4EA4\u5931\u8D25\u4E86\u51E0\u6B21")),t.a.createElement("tr",null,t.a.createElement("td",null,t.a.createElement("strong",null,"errors")),t.a.createElement("td",null,"\u63D0\u4EA4\u5931\u8D25\u7684\u6821\u9A8C\u4FE1\u606F")))),t.a.createElement(J.a,{code:`{
  id: "my-demo-form", // \u5982\u679C\u6CE8\u660E\u8868\u5355id\uFF0C\u4F1A\u5728\u6B64\u5904\u5C55\u793A
  formMount: '2021-07-02 16:27:28', // \u8868\u5355\u9996\u6B21\u52A0\u8F7D\u7684\u65F6\u95F4\u70B9
  ms: 35598, // duration\u7684\u65F6\u95F4\u6233\u5F62\u5F0F
  duration: '00:00:35', // \u4ECE\u8868\u5355\u52A0\u8F7D/\u4E0A\u6B21\u63D0\u4EA4\u5B8C\u6210\u5F00\u59CB\u8BA1\u65F6\uFF0C\u5230\u672C\u6B21\u63D0\u4EA4\u4F7F\u7528\u7684\u65F6\u95F4
  numberOfSubmits: 1, // \u63D0\u4EA4\u7684\u6B21\u6570\uFF08\u5931\u8D25\u4E0E\u5426\uFF09
  failedAttempts: 0, // \u63D0\u4EA4\u5931\u8D25\u7684\u6B21\u6570\uFF08\u5373\u6709\u6821\u9A8C\u672A\u901A\u8FC7\uFF09
  url: 'https://x-render.gitee.io/form-render/measure', // \u8868\u5355\u5BF9\u5E94\u9875\u9762\u7684url
  formData: {
    input1: '3123',
    select1: 'c',
  },
  schema: { ... }, // \u8868\u5355\u534F\u8BAE
  errors: [], // \u6821\u9A8C\u672A\u901A\u8FC7\u65F6\uFF0C\u5C55\u793A\u62A5\u9519\u6821\u9A8C\u4FE1\u606F
};`,lang:"js"})))))}}]);
