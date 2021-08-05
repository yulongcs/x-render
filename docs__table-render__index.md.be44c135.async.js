(window.webpackJsonp=window.webpackJsonp||[]).push([[60,13],{"0zqC":function(Dn,dn,e){"use strict";e.r(dn);var $=e("tJVT"),n=e("q1tI"),y=e.n(n),W=e("wx14"),oe=e("rePB"),V=e("ODXe"),rn=e("U8pU"),Oe=e("Ff2n"),de=e("VTBJ"),ze=e("TSYQ"),Ee=e.n(ze),cn=e("Zm9Q"),jn=e("5Z9U"),vn=e("6cGi"),sn=e("KQm4"),xe=e("wgJM"),wn=e("t23M");function Pn(s){var u=Object(n.useRef)(),g=Object(n.useRef)(!1);function S(){for(var F=arguments.length,O=new Array(F),D=0;D<F;D++)O[D]=arguments[D];g.current||(xe.a.cancel(u.current),u.current=Object(xe.a)(function(){s.apply(void 0,O)}))}return Object(n.useEffect)(function(){return function(){g.current=!0,xe.a.cancel(u.current)}},[]),S}function gn(s){var u=Object(n.useRef)([]),g=Object(n.useState)({}),S=Object(V.a)(g,2),F=S[1],O=Object(n.useRef)(typeof s=="function"?s():s),D=Pn(function(){var K=O.current;u.current.forEach(function(x){K=x(K)}),u.current=[],O.current=K,F({})});function N(K){u.current.push(K),D()}return[O.current,N]}var Pe=e("4IlW");function nt(s,u){var g,S=s.prefixCls,F=s.id,O=s.active,D=s.rtl,N=s.tab,K=N.key,x=N.tab,L=N.disabled,H=N.closeIcon,U=s.tabBarGutter,ae=s.tabPosition,Y=s.closable,X=s.renderWrapper,se=s.removeAriaLabel,z=s.editable,q=s.onClick,ne=s.onRemove,Q=s.onFocus,re="".concat(S,"-tab");n.useEffect(function(){return ne},[]);var Z={};ae==="top"||ae==="bottom"?Z[D?"marginLeft":"marginRight"]=U:Z.marginBottom=U;var pe=z&&Y!==!1&&!L;function _(te){L||q(te)}function le(te){te.preventDefault(),te.stopPropagation(),z.onEdit("remove",{key:K,event:te})}var ue=n.createElement("div",{key:K,ref:u,className:Ee()(re,(g={},Object(oe.a)(g,"".concat(re,"-with-remove"),pe),Object(oe.a)(g,"".concat(re,"-active"),O),Object(oe.a)(g,"".concat(re,"-disabled"),L),g)),style:Z,onClick:_},n.createElement("div",{role:"tab","aria-selected":O,id:F&&"".concat(F,"-tab-").concat(K),className:"".concat(re,"-btn"),"aria-controls":F&&"".concat(F,"-panel-").concat(K),"aria-disabled":L,tabIndex:L?null:0,onClick:function(G){G.stopPropagation(),_(G)},onKeyDown:function(G){[Pe.a.SPACE,Pe.a.ENTER].includes(G.which)&&(G.preventDefault(),_(G))},onFocus:Q},x),pe&&n.createElement("button",{type:"button","aria-label":se||"remove",tabIndex:0,className:"".concat(re,"-remove"),onClick:function(G){G.stopPropagation(),le(G)}},H||z.removeIcon||"\xD7"));return X&&(ue=X(ue)),ue}var Bn=n.forwardRef(nt),tt={width:0,height:0,left:0,top:0};function dt(s,u,g){return Object(n.useMemo)(function(){for(var S,F=new Map,O=u.get((S=s[0])===null||S===void 0?void 0:S.key)||tt,D=O.left+O.width,N=0;N<s.length;N+=1){var K=s[N].key,x=u.get(K);if(!x){var L;x=u.get((L=s[N-1])===null||L===void 0?void 0:L.key)||tt}var H=F.get(K)||Object(de.a)({},x);H.right=D-H.left-H.width,F.set(K,H)}return F},[s.map(function(S){return S.key}).join("_"),u,g])}var at={width:0,height:0,left:0,top:0,right:0};function ct(s,u,g,S,F){var O=F.tabs,D=F.tabPosition,N=F.rtl,K,x,L;["top","bottom"].includes(D)?(K="width",x=N?"right":"left",L=Math.abs(u.left)):(K="height",x="top",L=-u.top);var H=u[K],U=g[K],ae=S[K],Y=H;return U+ae>H&&(Y=H-ae),Object(n.useMemo)(function(){if(!O.length)return[0,0];for(var X=O.length,se=X,z=0;z<X;z+=1){var q=s.get(O[z].key)||at;if(q[x]+q[K]>L+Y){se=z-1;break}}for(var ne=0,Q=X-1;Q>=0;Q-=1){var re=s.get(O[Q].key)||at;if(re[x]<L){ne=Q+1;break}}return[ne,se]},[s,L,Y,D,O.map(function(X){return X.key}).join("_"),N])}var Mn=e("Gytx"),rt=e.n(Mn),Vn=e("Kwbf");function mt(s,u){var g=s.prefixCls,S=s.invalidate,F=s.item,O=s.renderItem,D=s.responsive,N=s.registerSize,K=s.itemKey,x=s.className,L=s.style,H=s.children,U=s.display,ae=s.order,Y=s.component,X=Y===void 0?"div":Y,se=Object(Oe.a)(s,["prefixCls","invalidate","item","renderItem","responsive","registerSize","itemKey","className","style","children","display","order","component"]),z=D&&!U;function q(pe){N(K,pe)}n.useEffect(function(){return function(){q(null)}},[]);var ne=O&&F!==void 0?O(F):H,Q;S||(Q={opacity:z?0:1,height:z?0:void 0,overflowY:z?"hidden":void 0,order:D?ae:void 0,pointerEvents:z?"none":void 0});var re={};z&&(re["aria-hidden"]=!0);var Z=n.createElement(X,Object(W.a)({className:Ee()(!S&&g,x),style:Object(de.a)(Object(de.a)({},Q),L)},re,se,{ref:u}),ne);return D&&(Z=n.createElement(wn.default,{onResize:function(_){var le=_.offsetWidth;q(le)}},Z)),Z}var Kn=n.forwardRef(mt);Kn.displayName="Item";var Wn=Kn;function Jn(){var s=Object(n.useState)({}),u=Object(V.a)(s,2),g=u[1],S=Object(n.useRef)([]),F=Object(n.useRef)(!1),O=0,D=0;Object(n.useEffect)(function(){return function(){F.current=!0}},[]);function N(K){var x=O;O+=1,S.current.length<x+1&&(S.current[x]=K);var L=S.current[x];function H(U){S.current[x]=typeof U=="function"?U(S.current[x]):U,xe.a.cancel(D),D=Object(xe.a)(function(){F.current||g({})})}return[L,H]}return N}var zn=function(u,g){var S=n.useContext(yn);if(!S){var F=u.component,O=F===void 0?"div":F,D=Object(Oe.a)(u,["component"]);return n.createElement(O,Object(W.a)({},D,{ref:g}))}var N=S.className,K=Object(Oe.a)(S,["className"]),x=u.className,L=Object(Oe.a)(u,["className"]);return n.createElement(yn.Provider,{value:null},n.createElement(Wn,Object(W.a)({ref:g,className:Ee()(N,x)},K,L)))},xn=n.forwardRef(zn);xn.displayName="RawItem";var st=xn,yn=n.createContext(null),T="responsive",A="invalidate";function j(s){return"+ ".concat(s.length," ...")}function f(s,u){var g=s.prefixCls,S=g===void 0?"rc-overflow":g,F=s.data,O=F===void 0?[]:F,D=s.renderItem,N=s.renderRawItem,K=s.itemKey,x=s.itemWidth,L=x===void 0?10:x,H=s.ssr,U=s.style,ae=s.className,Y=s.maxCount,X=s.renderRest,se=s.renderRawRest,z=s.suffix,q=s.component,ne=q===void 0?"div":q,Q=s.itemComponent,re=s.onVisibleChange,Z=Object(Oe.a)(s,["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"]),pe=Jn(),_=H==="full",le=pe(null),ue=Object(V.a)(le,2),te=ue[0],G=ue[1],ie=te||0,fe=pe(new Map),me=Object(V.a)(fe,2),ye=me[0],Te=me[1],he=pe(0),ge=Object(V.a)(he,2),De=ge[0],Fe=ge[1],Se=pe(0),Ce=Object(V.a)(Se,2),Ne=Ce[0],Ue=Ce[1],Ie=pe(0),we=Object(V.a)(Ie,2),We=we[0],Ae=we[1],bn=Object(n.useState)(null),Xe=Object(V.a)(bn,2),$e=Xe[0],qe=Xe[1],mn=Object(n.useState)(null),fn=Object(V.a)(mn,2),Re=fn[0],Me=fn[1],He=n.useMemo(function(){return Re===null&&_?Number.MAX_SAFE_INTEGER:Re||0},[Re,te]),Ve=Object(n.useState)(!1),Nn=Object(V.a)(Ve,2),Gn=Nn[0],In=Nn[1],Qe="".concat(S,"-item"),En=Math.max(De,Ne),_e=O.length&&Y===T,Cn=Y===A,Ge=_e||typeof Y=="number"&&O.length>Y,ke=Object(n.useMemo)(function(){var ce=O;return _e?te===null&&_?ce=O:ce=O.slice(0,Math.min(O.length,ie/L)):typeof Y=="number"&&(ce=O.slice(0,Y)),ce},[O,L,te,Y,_e]),On=Object(n.useMemo)(function(){return _e?O.slice(He+1):O.slice(ke.length)},[O,ke,_e,He]),tn=Object(n.useCallback)(function(ce,be){var je;return typeof K=="function"?K(ce):(je=K&&(ce==null?void 0:ce[K]))!==null&&je!==void 0?je:be},[K]),Je=Object(n.useCallback)(D||function(ce){return ce},[D]);function Ke(ce,be){Me(ce),be||(In(ce<O.length-1),re==null||re(ce))}function Yn(ce,be){G(be.clientWidth)}function Xn(ce,be){Te(function(je){var Ye=new Map(je);return be===null?Ye.delete(ce):Ye.set(ce,be),Ye})}function lt(ce,be){Ue(be),Fe(Ne)}function pn(ce,be){Ae(be)}function un(ce){return ye.get(tn(ke[ce],ce))}n.useLayoutEffect(function(){if(ie&&En&&ke){var ce=We,be=ke.length,je=be-1;if(!be){Ke(0),qe(null);return}for(var Ye=0;Ye<be;Ye+=1){var qn=un(Ye);if(qn===void 0){Ke(Ye-1,!0);break}if(ce+=qn,Ye===je-1&&ce+un(je)<=ie){Ke(je),qe(null);break}else if(ce+En>ie){Ke(Ye-1),qe(ce-qn-We+Ne);break}else if(Ye===je){Ke(je),qe(ce-We);break}}z&&un(0)+We>ie&&qe(null)}},[ie,ye,Ne,We,tn,ke]);var Qn=Gn&&!!On.length,hn={};$e!==null&&_e&&(hn={position:"absolute",left:$e,top:0});var an={prefixCls:Qe,responsive:_e,component:Q,invalidate:Cn},kn=N?function(ce,be){var je=tn(ce,be);return n.createElement(yn.Provider,{key:je,value:Object(de.a)(Object(de.a)({},an),{},{order:be,item:ce,itemKey:je,registerSize:Xn,display:be<=He})},N(ce,be))}:function(ce,be){var je=tn(ce,be);return n.createElement(Wn,Object(W.a)({},an,{order:be,key:je,item:ce,renderItem:Je,itemKey:je,registerSize:Xn,display:be<=He}))},Sn,Zn={order:Qn?He:Number.MAX_SAFE_INTEGER,className:"".concat(Qe,"-rest"),registerSize:lt,display:Qn};if(se)se&&(Sn=n.createElement(yn.Provider,{value:Object(de.a)(Object(de.a)({},an),Zn)},se(On)));else{var en=X||j;Sn=n.createElement(Wn,Object(W.a)({},an,Zn),typeof en=="function"?en(On):en)}var Rn=n.createElement(ne,Object(W.a)({className:Ee()(!Cn&&S,ae),style:U,ref:u},Z),ke.map(kn),Ge?Sn:null,z&&n.createElement(Wn,Object(W.a)({},an,{order:He,className:"".concat(Qe,"-suffix"),registerSize:pn,display:!0,style:hn}),z));return _e&&(Rn=n.createElement(wn.default,{onResize:Yn},Rn)),Rn}var i=n.forwardRef(f);i.displayName="Overflow",i.Item=st,i.RESPONSIVE=T,i.INVALIDATE=A;var h=i,b=h,E=e("1OyB"),l=e("vuIU"),p=e("Ji7U"),o=e("LK+K"),I=e("bT9E"),w=e("YrtM"),C=n.createContext(null);function d(s,u){var g=Object(de.a)({},s);return Object.keys(u).forEach(function(S){var F=u[S];F!==void 0&&(g[S]=F)}),g}function P(s){var u=s.children,g=s.locked,S=Object(Oe.a)(s,["children","locked"]),F=n.useContext(C),O=Object(w.a)(function(){return d(F,S)},[F,S],function(D,N){return!g&&(D[0]!==N[0]||!rt()(D[1],N[1]))});return n.createElement(C.Provider,{value:O},u)}function m(s,u,g,S){var F=n.useContext(C),O=F.activeKey,D=F.onActive,N=F.onInactive,K={active:O===s};return u||(K.onMouseEnter=function(x){g==null||g({key:s,domEvent:x}),D(s)},K.onMouseLeave=function(x){S==null||S({key:s,domEvent:x}),N(s)}),K}function a(s){var u=s.item,g=Object(Oe.a)(s,["item"]);return Object.defineProperty(g,"item",{get:function(){return Object(Vn.a)(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),u}}),g}function t(s){var u=s.icon,g=s.props,S=s.children,F;return typeof u=="function"?F=n.createElement(u,Object(de.a)({},g)):F=u,F||S||null}function r(s){var u=n.useContext(C),g=u.mode,S=u.rtl,F=u.inlineIndent;if(g!=="inline")return null;var O=s;return S?{paddingRight:O*F}:{paddingLeft:O*F}}var c=[],v=n.createContext(null);function R(){return n.useContext(v)}var B=n.createContext(c);function M(s){var u=n.useContext(B);return n.useMemo(function(){return s!==void 0?[].concat(Object(sn.a)(u),[s]):u},[u,s])}var J=n.createContext(null),Le=n.createContext(null);function nn(s,u){return s===void 0?null:"".concat(s,"-").concat(u)}function ln(s){var u=n.useContext(Le);return nn(u,s)}var Tn=function(s){Object(p.a)(g,s);var u=Object(o.a)(g);function g(){return Object(E.a)(this,g),u.apply(this,arguments)}return Object(l.a)(g,[{key:"render",value:function(){var F=this.props,O=F.title,D=F.attribute,N=F.elementRef,K=Object(Oe.a)(F,["title","attribute","elementRef"]),x=Object(I.a)(K,["eventKey"]);return Object(Vn.a)(!D,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),n.createElement(b.Item,Object(W.a)({},D,{title:typeof O=="string"?O:void 0},x,{ref:N}))}}]),g}(n.Component),Un=function(u){var g,S=u.style,F=u.className,O=u.eventKey,D=u.disabled,N=u.itemIcon,K=u.children,x=u.role,L=u.onMouseEnter,H=u.onMouseLeave,U=u.onClick,ae=u.onKeyDown,Y=u.onFocus,X=Object(Oe.a)(u,["style","className","eventKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"]),se=ln(O),z=n.useContext(C),q=z.prefixCls,ne=z.onItemClick,Q=z.disabled,re=z.overflowDisabled,Z=z.itemIcon,pe=z.selectedKeys,_=z.onActive,le="".concat(q,"-item"),ue=n.useRef(),te=n.useRef(),G=Q||D,ie=M(O),fe=function(Ie){return{key:O,keyPath:ie,item:ue.current,domEvent:Ie}},me=N||Z,ye=m(O,G,L,H),Te=ye.active,he=Object(Oe.a)(ye,["active"]),ge=pe.includes(O),De=r(ie.length),Fe=function(Ie){if(!G){var we=fe(Ie);U==null||U(a(we)),ne(we)}},Se=function(Ie){if(ae==null||ae(Ie),Ie.which===Pe.a.ENTER){var we=fe(Ie);U==null||U(a(we)),ne(we)}},Ce=function(Ie){_(O),Y==null||Y(Ie)},Ne={};return u.role==="option"&&(Ne["aria-selected"]=ge),n.createElement(Tn,Object(W.a)({ref:ue,elementRef:te,role:x===null?"none":x||"menuitem",tabIndex:D?null:-1,"data-menu-id":re&&se?null:se},X,he,Ne,{component:"li","aria-disabled":D,style:Object(de.a)(Object(de.a)({},De),S),className:Ee()(le,(g={},Object(oe.a)(g,"".concat(le,"-active"),Te),Object(oe.a)(g,"".concat(le,"-selected"),ge),Object(oe.a)(g,"".concat(le,"-disabled"),G),g),F),onClick:Fe,onKeyDown:Se,onFocus:Ce}),K,n.createElement(t,{props:Object(de.a)(Object(de.a)({},u),{},{isSelected:ge}),icon:me}))};function An(s){var u=s.eventKey,g=R(),S=M(u);return n.useEffect(function(){if(g)return g.registerPath(u,S),function(){g.unregisterPath(u,S)}},[S]),g?null:n.createElement(Un,s)}var Hn=An;function wt(s,u){return Object(cn.a)(s).map(function(g,S){if(n.isValidElement(g)){var F=g.key;return F==null&&(F="tmp_key-".concat([].concat(Object(sn.a)(u),[S]).join("-"))),n.cloneElement(g,{key:F,eventKey:F})}return g})}function it(s){var u=n.useRef(s);u.current=s;var g=n.useCallback(function(){for(var S,F=arguments.length,O=new Array(F),D=0;D<F;D++)O[D]=arguments[D];return(S=u.current)===null||S===void 0?void 0:S.call.apply(S,[u].concat(O))},[]);return s?g:void 0}var Oa=function(u,g){var S=u.className,F=u.children,O=Object(Oe.a)(u,["className","children"]),D=n.useContext(C),N=D.prefixCls,K=D.mode;return n.createElement("ul",Object(W.a)({className:Ee()(N,"".concat(N,"-sub"),"".concat(N,"-").concat(K==="inline"?"inline":"vertical"),S)},O,{"data-menu-list":!0,ref:g}),F)},Xt=n.forwardRef(Oa);Xt.displayName="SubMenuList";var Qt=Xt,Sa=e("uciX"),Ln={adjustX:1,adjustY:1},kt={topLeft:{points:["bl","tl"],overflow:Ln,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Ln,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:Ln,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:Ln,offset:[4,0]}},Ra={topLeft:{points:["bl","tl"],overflow:Ln,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Ln,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:Ln,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:Ln,offset:[4,0]}},fr=kt;function Zt(s,u,g){if(u)return u;if(g)return g[s]||g.other}var Fa={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function Da(s){var u=s.prefixCls,g=s.visible,S=s.children,F=s.popup,O=s.popupClassName,D=s.popupOffset,N=s.disabled,K=s.mode,x=s.onVisibleChange,L=n.useContext(C),H=L.getPopupContainer,U=L.rtl,ae=L.subMenuOpenDelay,Y=L.subMenuCloseDelay,X=L.builtinPlacements,se=L.triggerSubMenuAction,z=L.forceSubMenuRender,q=L.motion,ne=L.defaultMotions,Q=n.useState(!1),re=Object(V.a)(Q,2),Z=re[0],pe=re[1],_=U?Object(de.a)(Object(de.a)({},Ra),X):Object(de.a)(Object(de.a)({},kt),X),le=Fa[K],ue=Zt(K,q,ne),te=Object(de.a)(Object(de.a)({},ue),{},{leavedClassName:"".concat(u,"-hidden"),removeOnLeave:!1,motionAppear:!0}),G=n.useRef();return n.useEffect(function(){return G.current=Object(xe.a)(function(){pe(g)}),function(){xe.a.cancel(G.current)}},[g]),n.createElement(Sa.a,{prefixCls:u,popupClassName:Ee()("".concat(u,"-popup"),Object(oe.a)({},"".concat(u,"-rtl"),U),O),stretch:K==="horizontal"?"minWidth":null,getPopupContainer:H,builtinPlacements:_,popupPlacement:le,popupVisible:Z,popup:F,popupAlign:D&&{offset:D},action:N?[]:[se],mouseEnterDelay:ae,mouseLeaveDelay:Y,onPopupVisibleChange:x,forceRender:z,popupMotion:te},S)}var ja=e("8XRh");function Pa(s){var u=s.id,g=s.open,S=s.keyPath,F=s.children,O="inline",D=n.useContext(C),N=D.prefixCls,K=D.forceSubMenuRender,x=D.motion,L=D.defaultMotions,H=D.mode,U=n.useRef(!1);U.current=H===O;var ae=n.useState(!U.current),Y=Object(V.a)(ae,2),X=Y[0],se=Y[1],z=U.current?g:!1;n.useEffect(function(){U.current&&se(!1)},[H]);var q=Object(de.a)({},Zt(O,x,L));S.length>1&&(q.motionAppear=!1);var ne=q.onVisibleChanged;return q.onVisibleChanged=function(Q){return!U.current&&!Q&&se(!0),ne==null?void 0:ne(Q)},X?null:n.createElement(P,{mode:O,locked:!U.current},n.createElement(ja.default,Object(W.a)({visible:z},q,{forceRender:K,removeOnLeave:!1,leavedClassName:"".concat(N,"-hidden")}),function(Q){var re=Q.className,Z=Q.style;return n.createElement(Qt,{id:u,className:re,style:Z},F)}))}var Ta=function(u){var g,S=u.style,F=u.className,O=u.title,D=u.eventKey,N=u.disabled,K=u.internalPopupClose,x=u.children,L=u.itemIcon,H=u.expandIcon,U=u.popupClassName,ae=u.popupOffset,Y=u.onClick,X=u.onMouseEnter,se=u.onMouseLeave,z=u.onTitleClick,q=u.onTitleMouseEnter,ne=u.onTitleMouseLeave,Q=Object(Oe.a)(u,["style","className","title","eventKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"]),re=ln(D),Z=n.useContext(C),pe=Z.prefixCls,_=Z.mode,le=Z.openKeys,ue=Z.disabled,te=Z.overflowDisabled,G=Z.activeKey,ie=Z.selectedKeys,fe=Z.itemIcon,me=Z.expandIcon,ye=Z.onItemClick,Te=Z.onOpenChange,he=Z.onActive,ge=n.useContext(J),De=ge.isSubPathKey,Fe=M(),Se="".concat(pe,"-submenu"),Ce=ue||N,Ne=n.useRef(),Ue=n.useRef(),Ie=L||fe,we=H||me,We=le.includes(D),Ae=!te&&We,bn=De(ie,D),Xe=m(D,Ce,q,ne),$e=Xe.active,qe=Object(Oe.a)(Xe,["active"]),mn=n.useState(!1),fn=Object(V.a)(mn,2),Re=fn[0],Me=fn[1],He=function(Ke){Ce||Me(Ke)},Ve=function(Ke){He(!0),X==null||X({key:D,domEvent:Ke})},Nn=function(Ke){He(!1),se==null||se({key:D,domEvent:Ke})},Gn=n.useMemo(function(){return $e||(_!=="inline"?Re||De([G],D):!1)},[_,$e,G,Re,D,De]),In=r(Fe.length),Qe=function(Ke){Ce||(z==null||z({key:D,domEvent:Ke}),_==="inline"&&Te(D,!We))},En=it(function(Je){Y==null||Y(a(Je)),ye(Je)}),_e=function(Ke){_!=="inline"&&Te(D,Ke)},Cn=function(){he(D)},Ge=re&&"".concat(re,"-popup"),ke=n.createElement("div",Object(W.a)({role:"menuitem",style:In,className:"".concat(Se,"-title"),tabIndex:Ce?null:-1,ref:Ne,title:typeof O=="string"?O:null,"data-menu-id":te&&re?null:re,"aria-expanded":Ae,"aria-haspopup":!0,"aria-controls":Ge,"aria-disabled":Ce,onClick:Qe,onFocus:Cn},qe),O,n.createElement(t,{icon:_!=="horizontal"?we:null,props:Object(de.a)(Object(de.a)({},u),{},{isOpen:Ae,isSubMenu:!0})},n.createElement("i",{className:"".concat(Se,"-arrow")}))),On=n.useRef(_);if(_!=="inline"&&(On.current=Fe.length>1?"vertical":_),!te){var tn=On.current;ke=n.createElement(Da,{mode:tn,prefixCls:Se,visible:!K&&Ae&&_!=="inline",popupClassName:U,popupOffset:ae,popup:n.createElement(P,{mode:tn},n.createElement(Qt,{id:Ge,ref:Ue},x)),disabled:Ce,onVisibleChange:_e},ke)}return n.createElement(P,{onItemClick:En,mode:_==="horizontal"?"vertical":_,itemIcon:Ie,expandIcon:we},n.createElement(b.Item,Object(W.a)({role:"none"},Q,{component:"li",style:S,className:Ee()(Se,"".concat(Se,"-").concat(_),F,(g={},Object(oe.a)(g,"".concat(Se,"-open"),Ae),Object(oe.a)(g,"".concat(Se,"-active"),Gn),Object(oe.a)(g,"".concat(Se,"-selected"),bn),Object(oe.a)(g,"".concat(Se,"-disabled"),Ce),g)),onMouseEnter:Ve,onMouseLeave:Nn}),ke,!te&&n.createElement(Pa,{id:Ge,open:Ae,keyPath:Fe},x)))};function qt(s){var u=s.eventKey,g=s.children,S=M(u),F=wt(g,S),O=R();n.useEffect(function(){if(O)return O.registerPath(u,S),function(){O.unregisterPath(u,S)}},[S]);var D;return O?D=F:D=n.createElement(Ta,s,F),n.createElement(B.Provider,{value:S},D)}var Aa=e("x/xZ");function _t(s){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Object(Aa.a)(s)){var g=s.nodeName.toLowerCase(),S=["input","select","textarea","button"].includes(g)||s.isContentEditable||g==="a"&&!!s.getAttribute("href"),F=s.getAttribute("tabindex"),O=Number(F),D=null;return F&&!Number.isNaN(O)?D=O:S&&D===null&&(D=0),S&&s.disabled&&(D=null),D!==null&&(D>=0||u&&D<0)}return!1}function ea(s){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,g=Object(sn.a)(s.querySelectorAll("*")).filter(function(S){return _t(S,u)});return _t(s,u)&&g.unshift(s),g}var bt=null;function pr(){bt=document.activeElement}function hr(){bt=null}function vr(){if(bt)try{bt.focus()}catch(s){}}function gr(s,u){if(u.keyCode===9){var g=ea(s),S=g[u.shiftKey?0:g.length-1],F=S===document.activeElement||s===document.activeElement;if(F){var O=g[u.shiftKey?g.length-1:0];O.focus(),u.preventDefault()}}}var Bt=Pe.a.LEFT,Mt=Pe.a.RIGHT,Kt=Pe.a.UP,Et=Pe.a.DOWN,Ct=Pe.a.ENTER,na=Pe.a.ESC,ta=[Kt,Et,Bt,Mt];function Na(s,u,g,S){var F,O,D,N,K="prev",x="next",L="children",H="parent";if(s==="inline"&&S===Ct)return{inlineTrigger:!0};var U=(F={},Object(oe.a)(F,Kt,K),Object(oe.a)(F,Et,x),F),ae=(O={},Object(oe.a)(O,Bt,g?x:K),Object(oe.a)(O,Mt,g?K:x),Object(oe.a)(O,Et,L),Object(oe.a)(O,Ct,L),O),Y=(D={},Object(oe.a)(D,Kt,K),Object(oe.a)(D,Et,x),Object(oe.a)(D,Ct,L),Object(oe.a)(D,na,H),Object(oe.a)(D,Bt,g?L:H),Object(oe.a)(D,Mt,g?H:L),D),X={inline:U,horizontal:ae,vertical:Y,inlineSub:U,horizontalSub:Y,verticalSub:Y},se=(N=X["".concat(s).concat(u?"":"Sub")])===null||N===void 0?void 0:N[S];switch(se){case K:return{offset:-1,sibling:!0};case x:return{offset:1,sibling:!0};case H:return{offset:-1,sibling:!1};case L:return{offset:1,sibling:!1};default:return null}}function Ia(s){for(var u=s;u;){if(u.getAttribute("data-menu-list"))return u;u=u.parentElement}return null}function wa(s,u){for(var g=s||document.activeElement;g;){if(u.has(g))return g;g=g.parentElement}return null}function Ba(s,u){var g=ea(s,!0);return g.filter(function(S){return u.has(S)})}function aa(s,u,g){var S=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!s)return null;var F=Ba(s,u),O=F.length,D=F.findIndex(function(N){return g===N});return S<0?D===-1?D=O-1:D-=1:S>0&&(D+=1),D=(D+O)%O,F[D]}function Ma(s,u,g,S,F,O,D,N,K,x){var L=n.useRef(),H=n.useRef();H.current=u;var U=function(){xe.a.cancel(L.current)};return n.useEffect(function(){return function(){U()}},[]),function(ae){var Y=ae.which;if([].concat(ta,[Ct,na]).includes(Y)){var X,se,z,q=function(){X=new Set,se=new Map,z=new Map;var fe=O();return fe.forEach(function(me){var ye=document.querySelector("[data-menu-id='".concat(nn(S,me),"']"));ye&&(X.add(ye),z.set(ye,me),se.set(me,ye))}),X};q();var ne=se.get(u),Q=wa(ne,X),re=z.get(Q),Z=Na(s,D(re,!0).length===1,g,Y);if(!Z)return;ta.includes(Y)&&ae.preventDefault();var pe=function(fe){if(fe){var me=fe,ye=fe.querySelector("a");(ye==null?void 0:ye.getAttribute("href"))&&(me=ye);var Te=z.get(fe);N(Te),U(),L.current=Object(xe.a)(function(){H.current===Te&&me.focus()})}};if(Z.sibling||!Q){var _;!Q||s==="inline"?_=F.current:_=Ia(Q);var le=aa(_,X,Q,Z.offset);pe(le)}else if(Z.inlineTrigger)K(re);else if(Z.offset>0)K(re,!0),U(),L.current=Object(xe.a)(function(){q();var ie=Q.getAttribute("aria-controls"),fe=document.getElementById(ie),me=aa(fe,X);pe(me)},5);else if(Z.offset<0){var ue=D(re,!0),te=ue[ue.length-2],G=se.get(te);K(te,!1),pe(G)}}x==null||x(ae)}}var Ka=Math.random().toFixed(5).toString().slice(2),ra=0;function Wa(s){var u=Object(vn.a)(s,{value:s}),g=Object(V.a)(u,2),S=g[0],F=g[1];return n.useEffect(function(){ra+=1;var O="".concat(Ka,"-").concat(ra);F("rc-menu-uuid-".concat(O))},[]),S}var yr=e("p8sG");function xa(s){Promise.resolve().then(s)}var Wt="__RC_UTIL_PATH_SPLIT__",sa=function(u){return u.join(Wt)},La=function(u){return u.split(Wt)},xt="rc-menu-more";function $a(){var s=n.useState({}),u=Object(V.a)(s,2),g=u[1],S=Object(n.useRef)(new Map),F=Object(n.useRef)(new Map),O=n.useState([]),D=Object(V.a)(O,2),N=D[0],K=D[1],x=Object(n.useRef)(0),L=Object(n.useCallback)(function(z,q){var ne=sa(q);F.current.set(ne,z),S.current.set(z,ne),x.current+=1;var Q=x.current;xa(function(){Q===x.current&&g({})})},[]),H=Object(n.useCallback)(function(z,q){var ne=sa(q);F.current.delete(ne),S.current.delete(z)},[]),U=Object(n.useCallback)(function(z){K(z)},[]),ae=Object(n.useCallback)(function(z,q){var ne=S.current.get(z)||"",Q=La(ne);return q&&N.includes(Q[0])&&Q.unshift(xt),Q},[N]),Y=Object(n.useCallback)(function(z,q){return z.some(function(ne){var Q=ae(ne,!0);return Q.includes(q)})},[ae]),X=function(){var q=Object(sn.a)(S.current.keys());return N.length&&q.push(xt),q},se=Object(n.useCallback)(function(z){var q="".concat(S.current.get(z)).concat(Wt),ne=new Set;return Object(sn.a)(F.current.keys()).forEach(function(Q){Q.startsWith(q)&&ne.add(F.current.get(Q))}),ne},[]);return{registerPath:L,unregisterPath:H,refreshOverflowKeys:U,isSubPathKey:Y,getKeyPath:ae,getKeys:X,getSubPathKeys:se}}var Ot=[],Va=function(u){var g,S,F=u.prefixCls,O=F===void 0?"rc-menu":F,D=u.style,N=u.className,K=u.tabIndex,x=K===void 0?0:K,L=u.children,H=u.direction,U=u.id,ae=u.mode,Y=ae===void 0?"vertical":ae,X=u.inlineCollapsed,se=u.disabled,z=u.disabledOverflow,q=u.subMenuOpenDelay,ne=q===void 0?.1:q,Q=u.subMenuCloseDelay,re=Q===void 0?.1:Q,Z=u.forceSubMenuRender,pe=u.defaultOpenKeys,_=u.openKeys,le=u.activeKey,ue=u.defaultActiveFirst,te=u.selectable,G=te===void 0?!0:te,ie=u.multiple,fe=ie===void 0?!1:ie,me=u.defaultSelectedKeys,ye=u.selectedKeys,Te=u.onSelect,he=u.onDeselect,ge=u.inlineIndent,De=ge===void 0?24:ge,Fe=u.motion,Se=u.defaultMotions,Ce=u.triggerSubMenuAction,Ne=Ce===void 0?"hover":Ce,Ue=u.builtinPlacements,Ie=u.itemIcon,we=u.expandIcon,We=u.overflowedIndicator,Ae=We===void 0?"...":We,bn=u.getPopupContainer,Xe=u.onClick,$e=u.onOpenChange,qe=u.onKeyDown,mn=u.openAnimation,fn=u.openTransitionName,Re=Object(Oe.a)(u,["prefixCls","style","className","tabIndex","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName"]),Me=wt(L,Ot),He=n.useState(!1),Ve=Object(V.a)(He,2),Nn=Ve[0],Gn=Ve[1],In=n.useRef(),Qe=Wa(U),En=H==="rtl",_e=n.useMemo(function(){return Y==="inline"&&X?["vertical",X]:[Y,!1]},[Y,X]),Cn=Object(V.a)(_e,2),Ge=Cn[0],ke=Cn[1],On=n.useState(0),tn=Object(V.a)(On,2),Je=tn[0],Ke=tn[1],Yn=Je>=Me.length-1||Ge!=="horizontal"||z,Xn=Object(vn.a)(pe,{value:_,postState:function(k){return k||Ot}}),lt=Object(V.a)(Xn,2),pn=lt[0],un=lt[1],Qn=n.useState(pn),hn=Object(V.a)(Qn,2),an=hn[0],kn=hn[1],Sn=Ge==="inline",Zn=n.useRef(!1);n.useEffect(function(){Sn&&kn(pn)},[pn]),n.useEffect(function(){if(!Zn.current){Zn.current=!0;return}if(Sn)un(an);else{var ee=[];un(ee),$e==null||$e(ee)}},[Sn]);var en=$a(),Rn=en.registerPath,ce=en.unregisterPath,be=en.refreshOverflowKeys,je=en.isSubPathKey,Ye=en.getKeyPath,qn=en.getKeys,Rt=en.getSubPathKeys,Jt=n.useMemo(function(){return{registerPath:Rn,unregisterPath:ce}},[Rn,ce]),zt=n.useMemo(function(){return{isSubPathKey:je}},[je]);n.useEffect(function(){be(Yn?Ot:Me.slice(Je+1).map(function(ee){return ee.key}))},[Je,Yn]);var Ut=Object(vn.a)(le||ue&&((g=Me[0])===null||g===void 0?void 0:g.key),{value:le}),ot=Object(V.a)(Ut,2),Ft=ot[0],pt=ot[1],Dt=it(function(ee){pt(ee)}),Ht=it(function(){pt(void 0)}),jt=Object(vn.a)(me||[],{value:ye,postState:function(k){return Array.isArray(k)?k:k==null?Ot:[k]}}),Pt=Object(V.a)(jt,2),ut=Pt[0],Fn=Pt[1],Tt=function(k){if(!!G){var ve=k.key,Be=ut.includes(ve),Ze;Be?Ze=ut.filter(function(et){return et!==ve}):fe?Ze=[].concat(Object(sn.a)(ut),[ve]):Ze=[ve],Fn(Ze);var $n=Object(de.a)(Object(de.a)({},k),{},{selectedKeys:Ze});Be?he==null||he($n):Te==null||Te($n)}},At=it(function(ee){Xe==null||Xe(a(ee)),Tt(ee)}),ht=it(function(ee,k){var ve=pn.filter(function(Ze){return Ze!==ee});if(k)ve.push(ee);else if(Ge!=="inline"){var Be=Rt(ee);ve=ve.filter(function(Ze){return!Be.has(Ze)})}rt()(pn,ve)||(un(ve),$e==null||$e(ve))}),_n=it(bn),vt=function(k,ve){var Be=ve!=null?ve:!pn.includes(k);ht(k,Be)},gt=Ma(Ge,Ft,En,Qe,In,qn,Ye,pt,vt,qe);n.useEffect(function(){Gn(!0)},[]);var Nt=Ge!=="horizontal"||z?Me:Me.map(function(ee,k){return n.createElement(P,{key:ee.key,overflowDisabled:k>Je},ee)}),It=n.createElement(b,Object(W.a)({id:U,ref:In,prefixCls:"".concat(O,"-overflow"),component:"ul",itemComponent:Hn,className:Ee()(O,"".concat(O,"-root"),"".concat(O,"-").concat(Ge),N,(S={},Object(oe.a)(S,"".concat(O,"-inline-collapsed"),ke),Object(oe.a)(S,"".concat(O,"-rtl"),En),S)),dir:H,style:D,role:"menu",tabIndex:x,data:Nt,renderRawItem:function(k){return k},renderRawRest:function(k){var ve=k.length,Be=ve?Me.slice(-ve):null;return n.createElement(qt,{eventKey:xt,title:Ae,disabled:Yn,internalPopupClose:ve===0},Be)},maxCount:Ge!=="horizontal"||z?b.INVALIDATE:b.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(k){Ke(k)},onKeyDown:gt},Re));return n.createElement(Le.Provider,{value:Qe},n.createElement(P,{prefixCls:O,mode:Ge,openKeys:pn,rtl:En,disabled:se,motion:Nn?Fe:null,defaultMotions:Nn?Se:null,activeKey:Ft,onActive:Dt,onInactive:Ht,selectedKeys:ut,inlineIndent:De,subMenuOpenDelay:ne,subMenuCloseDelay:re,forceSubMenuRender:Z,builtinPlacements:Ue,triggerSubMenuAction:Ne,getPopupContainer:_n,itemIcon:Ie,expandIcon:we,onItemClick:At,onOpenChange:ht},n.createElement(J.Provider,{value:zt},It),n.createElement(v.Provider,{value:Jt},Me)))},Ja=Va,za=function(u){var g=u.className,S=u.title,F=u.eventKey,O=u.children,D=Object(Oe.a)(u,["className","title","eventKey","children"]),N=n.useContext(C),K=N.prefixCls,x="".concat(K,"-item-group");return n.createElement("li",Object(W.a)({},D,{onClick:function(H){return H.stopPropagation()},className:Ee()(x,g)}),n.createElement("div",{className:"".concat(x,"-title"),title:typeof S=="string"?S:void 0},S),n.createElement("ul",{className:"".concat(x,"-list")},O))};function Ua(s){var u=s.children,g=Object(Oe.a)(s,["children"]),S=M(g.eventKey),F=wt(u,S),O=R();return O?F:n.createElement(za,g,F)}function Ha(s){var u=s.className,g=s.style,S=n.useContext(C),F=S.prefixCls,O=R();return O?null:n.createElement("li",{className:Ee()("".concat(F,"-item-divider"),u),style:g})}var ft=Ja;ft.Item=Hn,ft.SubMenu=qt,ft.ItemGroup=Ua,ft.Divider=Ha;var Ga=ft,Ya=e("eDIo");function Xa(s,u){var g=s.prefixCls,S=s.editable,F=s.locale,O=s.style;return!S||S.showAdd===!1?null:n.createElement("button",{ref:u,type:"button",className:"".concat(g,"-nav-add"),style:O,"aria-label":(F==null?void 0:F.addAriaLabel)||"Add tab",onClick:function(N){S.onEdit("add",{event:N})}},S.addIcon||"+")}var ia=n.forwardRef(Xa);function Qa(s,u){var g=s.prefixCls,S=s.id,F=s.tabs,O=s.locale,D=s.mobile,N=s.moreIcon,K=N===void 0?"More":N,x=s.moreTransitionName,L=s.style,H=s.className,U=s.editable,ae=s.tabBarGutter,Y=s.rtl,X=s.onTabClick,se=Object(n.useState)(!1),z=Object(V.a)(se,2),q=z[0],ne=z[1],Q=Object(n.useState)(null),re=Object(V.a)(Q,2),Z=re[0],pe=re[1],_="".concat(S,"-more-popup"),le="".concat(g,"-dropdown"),ue=Z!==null?"".concat(_,"-").concat(Z):null,te=O==null?void 0:O.dropdownAriaLabel,G=n.createElement(Ga,{onClick:function(ge){var De=ge.key,Fe=ge.domEvent;X(De,Fe),ne(!1)},id:_,tabIndex:-1,role:"listbox","aria-activedescendant":ue,selectedKeys:[Z],"aria-label":te!==void 0?te:"expanded dropdown"},F.map(function(he){return n.createElement(Hn,{key:he.key,id:"".concat(_,"-").concat(he.key),role:"option","aria-controls":S&&"".concat(S,"-panel-").concat(he.key),disabled:he.disabled},he.tab)}));function ie(he){for(var ge=F.filter(function(Ne){return!Ne.disabled}),De=ge.findIndex(function(Ne){return Ne.key===Z})||0,Fe=ge.length,Se=0;Se<Fe;Se+=1){De=(De+he+Fe)%Fe;var Ce=ge[De];if(!Ce.disabled){pe(Ce.key);return}}}function fe(he){var ge=he.which;if(!q){[Pe.a.DOWN,Pe.a.SPACE,Pe.a.ENTER].includes(ge)&&(ne(!0),he.preventDefault());return}switch(ge){case Pe.a.UP:ie(-1),he.preventDefault();break;case Pe.a.DOWN:ie(1),he.preventDefault();break;case Pe.a.ESC:ne(!1);break;case Pe.a.SPACE:case Pe.a.ENTER:Z!==null&&X(Z,he);break}}Object(n.useEffect)(function(){var he=document.getElementById(ue);he&&he.scrollIntoView&&he.scrollIntoView(!1)},[Z]),Object(n.useEffect)(function(){q||pe(null)},[q]);var me=Object(oe.a)({},Y?"marginLeft":"marginRight",ae);F.length||(me.visibility="hidden",me.order=1);var ye=Ee()(Object(oe.a)({},"".concat(le,"-rtl"),Y)),Te=D?null:n.createElement(Ya.default,{prefixCls:le,overlay:G,trigger:["hover"],visible:q,transitionName:x,onVisibleChange:ne,overlayClassName:ye,mouseEnterDelay:.1,mouseLeaveDelay:.1},n.createElement("button",{type:"button",className:"".concat(g,"-nav-more"),style:me,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":_,id:"".concat(S,"-more"),"aria-expanded":q,onKeyDown:fe},K));return n.createElement("div",{className:Ee()("".concat(g,"-nav-operations"),H),style:L,ref:u},Te,n.createElement(ia,{prefixCls:g,locale:O,editable:U}))}var ka=n.forwardRef(Qa),Lt=Object(n.createContext)(null),Za=.1,la=.01,St=20,oa=Math.pow(.995,St);function qa(s,u){var g=Object(n.useState)(),S=Object(V.a)(g,2),F=S[0],O=S[1],D=Object(n.useState)(0),N=Object(V.a)(D,2),K=N[0],x=N[1],L=Object(n.useState)(0),H=Object(V.a)(L,2),U=H[0],ae=H[1],Y=Object(n.useState)(),X=Object(V.a)(Y,2),se=X[0],z=X[1],q=Object(n.useRef)();function ne(le){var ue=le.touches[0],te=ue.screenX,G=ue.screenY;O({x:te,y:G}),window.clearInterval(q.current)}function Q(le){if(!!F){le.preventDefault();var ue=le.touches[0],te=ue.screenX,G=ue.screenY;O({x:te,y:G});var ie=te-F.x,fe=G-F.y;u(ie,fe);var me=Date.now();x(me),ae(me-K),z({x:ie,y:fe})}}function re(){if(!!F&&(O(null),z(null),se)){var le=se.x/U,ue=se.y/U,te=Math.abs(le),G=Math.abs(ue);if(Math.max(te,G)<Za)return;var ie=le,fe=ue;q.current=window.setInterval(function(){if(Math.abs(ie)<la&&Math.abs(fe)<la){window.clearInterval(q.current);return}ie*=oa,fe*=oa,u(ie*St,fe*St)},St)}}var Z=Object(n.useRef)();function pe(le){var ue=le.deltaX,te=le.deltaY,G=0,ie=Math.abs(ue),fe=Math.abs(te);ie===fe?G=Z.current==="x"?ue:te:ie>fe?(G=ue,Z.current="x"):(G=te,Z.current="y"),u(-G,-G)&&le.preventDefault()}var _=Object(n.useRef)(null);_.current={onTouchStart:ne,onTouchMove:Q,onTouchEnd:re,onWheel:pe},n.useEffect(function(){function le(ie){_.current.onTouchStart(ie)}function ue(ie){_.current.onTouchMove(ie)}function te(ie){_.current.onTouchEnd(ie)}function G(ie){_.current.onWheel(ie)}return document.addEventListener("touchmove",ue,{passive:!1}),document.addEventListener("touchend",te,{passive:!1}),s.current.addEventListener("touchstart",le,{passive:!1}),s.current.addEventListener("wheel",G),function(){document.removeEventListener("touchmove",ue),document.removeEventListener("touchend",te)}},[])}function _a(){var s=Object(n.useRef)(new Map);function u(S){return s.current.has(S)||s.current.set(S,n.createRef()),s.current.get(S)}function g(S){s.current.delete(S)}return[u,g]}function ua(s,u){var g=n.useRef(s),S=n.useState({}),F=Object(V.a)(S,2),O=F[1];function D(N){var K=typeof N=="function"?N(g.current):N;K!==g.current&&u(K,g.current),g.current=K,O({})}return[g.current,D]}var da=function(u){var g=u.position,S=u.prefixCls,F=u.extra;if(!F)return null;var O,D=F;return g==="right"&&(O=D.right||!D.left&&D||null),g==="left"&&(O=D.left||null),O?n.createElement("div",{className:"".concat(S,"-extra-content")},O):null};function er(s,u){var g,S=n.useContext(Lt),F=S.prefixCls,O=S.tabs,D=s.className,N=s.style,K=s.id,x=s.animated,L=s.activeKey,H=s.rtl,U=s.extra,ae=s.editable,Y=s.locale,X=s.tabPosition,se=s.tabBarGutter,z=s.children,q=s.onTabClick,ne=s.onTabScroll,Q=Object(n.useRef)(),re=Object(n.useRef)(),Z=Object(n.useRef)(),pe=Object(n.useRef)(),_=_a(),le=Object(V.a)(_,2),ue=le[0],te=le[1],G=X==="top"||X==="bottom",ie=ua(0,function(ee,k){G&&ne&&ne({direction:ee>k?"left":"right"})}),fe=Object(V.a)(ie,2),me=fe[0],ye=fe[1],Te=ua(0,function(ee,k){!G&&ne&&ne({direction:ee>k?"top":"bottom"})}),he=Object(V.a)(Te,2),ge=he[0],De=he[1],Fe=Object(n.useState)(0),Se=Object(V.a)(Fe,2),Ce=Se[0],Ne=Se[1],Ue=Object(n.useState)(0),Ie=Object(V.a)(Ue,2),we=Ie[0],We=Ie[1],Ae=Object(n.useState)(0),bn=Object(V.a)(Ae,2),Xe=bn[0],$e=bn[1],qe=Object(n.useState)(0),mn=Object(V.a)(qe,2),fn=mn[0],Re=mn[1],Me=Object(n.useState)(null),He=Object(V.a)(Me,2),Ve=He[0],Nn=He[1],Gn=Object(n.useState)(null),In=Object(V.a)(Gn,2),Qe=In[0],En=In[1],_e=Object(n.useState)(0),Cn=Object(V.a)(_e,2),Ge=Cn[0],ke=Cn[1],On=Object(n.useState)(0),tn=Object(V.a)(On,2),Je=tn[0],Ke=tn[1],Yn=gn(new Map),Xn=Object(V.a)(Yn,2),lt=Xn[0],pn=Xn[1],un=dt(O,lt,Ce),Qn="".concat(F,"-nav-operations-hidden"),hn=0,an=0;G?H?(hn=0,an=Math.max(0,Ce-Ve)):(hn=Math.min(0,Ve-Ce),an=0):(hn=Math.min(0,Qe-we),an=0);function kn(ee){return ee<hn?hn:ee>an?an:ee}var Sn=Object(n.useRef)(),Zn=Object(n.useState)(),en=Object(V.a)(Zn,2),Rn=en[0],ce=en[1];function be(){ce(Date.now())}function je(){window.clearTimeout(Sn.current)}qa(Q,function(ee,k){function ve(Be,Ze){Be(function($n){var et=kn($n+Ze);return et})}if(G){if(Ve>=Ce)return!1;ve(ye,ee)}else{if(Qe>=we)return!1;ve(De,k)}return je(),be(),!0}),Object(n.useEffect)(function(){return je(),Rn&&(Sn.current=window.setTimeout(function(){ce(0)},100)),je},[Rn]);function Ye(){var ee=arguments.length>0&&arguments[0]!==void 0?arguments[0]:L,k=un.get(ee)||{width:0,height:0,left:0,right:0,top:0};if(G){var ve=me;H?k.right<me?ve=k.right:k.right+k.width>me+Ve&&(ve=k.right+k.width-Ve):k.left<-me?ve=-k.left:k.left+k.width>-me+Ve&&(ve=-(k.left+k.width-Ve)),De(0),ye(kn(ve))}else{var Be=ge;k.top<-ge?Be=-k.top:k.top+k.height>-ge+Qe&&(Be=-(k.top+k.height-Qe)),ye(0),De(kn(Be))}}var qn=ct(un,{width:Ve,height:Qe,left:me,top:ge},{width:Xe,height:fn},{width:Ge,height:Je},Object(de.a)(Object(de.a)({},s),{},{tabs:O})),Rt=Object(V.a)(qn,2),Jt=Rt[0],zt=Rt[1],Ut=O.map(function(ee){var k=ee.key;return n.createElement(Bn,{id:K,prefixCls:F,key:k,rtl:H,tab:ee,closable:ee.closable,editable:ae,active:k===L,tabPosition:X,tabBarGutter:se,renderWrapper:z,removeAriaLabel:Y==null?void 0:Y.removeAriaLabel,ref:ue(k),onClick:function(Be){q(k,Be)},onRemove:function(){te(k)},onFocus:function(){Ye(k),be(),H||(Q.current.scrollLeft=0),Q.current.scrollTop=0}})}),ot=Pn(function(){var ee,k,ve,Be,Ze,$n,et,Gt,Yt,or=((ee=Q.current)===null||ee===void 0?void 0:ee.offsetWidth)||0,ur=((k=Q.current)===null||k===void 0?void 0:k.offsetHeight)||0,ha=((ve=pe.current)===null||ve===void 0?void 0:ve.offsetWidth)||0,va=((Be=pe.current)===null||Be===void 0?void 0:Be.offsetHeight)||0,dr=((Ze=Z.current)===null||Ze===void 0?void 0:Ze.offsetWidth)||0,cr=(($n=Z.current)===null||$n===void 0?void 0:$n.offsetHeight)||0;Nn(or),En(ur),ke(ha),Ke(va);var ga=(((et=re.current)===null||et===void 0?void 0:et.offsetWidth)||0)-ha,ya=(((Gt=re.current)===null||Gt===void 0?void 0:Gt.offsetHeight)||0)-va;Ne(ga),We(ya);var ba=(Yt=Z.current)===null||Yt===void 0?void 0:Yt.className.includes(Qn);$e(ga-(ba?0:dr)),Re(ya-(ba?0:cr)),pn(function(){var Ea=new Map;return O.forEach(function(mr){var Ca=mr.key,yt=ue(Ca).current;yt&&Ea.set(Ca,{width:yt.offsetWidth,height:yt.offsetHeight,left:yt.offsetLeft,top:yt.offsetTop})}),Ea})}),Ft=O.slice(0,Jt),pt=O.slice(zt+1),Dt=[].concat(Object(sn.a)(Ft),Object(sn.a)(pt)),Ht=Object(n.useState)(),jt=Object(V.a)(Ht,2),Pt=jt[0],ut=jt[1],Fn=un.get(L),Tt=Object(n.useRef)();function At(){xe.a.cancel(Tt.current)}Object(n.useEffect)(function(){var ee={};return Fn&&(G?(H?ee.right=Fn.right:ee.left=Fn.left,ee.width=Fn.width):(ee.top=Fn.top,ee.height=Fn.height)),At(),Tt.current=Object(xe.a)(function(){ut(ee)}),At},[Fn,G,H]),Object(n.useEffect)(function(){Ye()},[L,Fn,un,G]),Object(n.useEffect)(function(){ot()},[H,se,L,O.map(function(ee){return ee.key}).join("_")]);var ht=!!Dt.length,_n="".concat(F,"-nav-wrap"),vt,gt,Nt,It;return G?H?(gt=me>0,vt=me+Ve<Ce):(vt=me<0,gt=-me+Ve<Ce):(Nt=ge<0,It=-ge+Qe<we),n.createElement("div",{ref:u,role:"tablist",className:Ee()("".concat(F,"-nav"),D),style:N,onKeyDown:function(){be()}},n.createElement(da,{position:"left",extra:U,prefixCls:F}),n.createElement(wn.default,{onResize:ot},n.createElement("div",{className:Ee()(_n,(g={},Object(oe.a)(g,"".concat(_n,"-ping-left"),vt),Object(oe.a)(g,"".concat(_n,"-ping-right"),gt),Object(oe.a)(g,"".concat(_n,"-ping-top"),Nt),Object(oe.a)(g,"".concat(_n,"-ping-bottom"),It),g)),ref:Q},n.createElement(wn.default,{onResize:ot},n.createElement("div",{ref:re,className:"".concat(F,"-nav-list"),style:{transform:"translate(".concat(me,"px, ").concat(ge,"px)"),transition:Rn?"none":void 0}},Ut,n.createElement(ia,{ref:pe,prefixCls:F,locale:Y,editable:ae,style:{visibility:ht?"hidden":null}}),n.createElement("div",{className:Ee()("".concat(F,"-ink-bar"),Object(oe.a)({},"".concat(F,"-ink-bar-animated"),x.inkBar)),style:Pt}))))),n.createElement(ka,Object(W.a)({},s,{ref:Z,prefixCls:F,tabs:Dt,className:!ht&&Qn})),n.createElement(da,{position:"right",extra:U,prefixCls:F}))}var ca=n.forwardRef(er);function nr(s){var u=s.id,g=s.activeKey,S=s.animated,F=s.tabPosition,O=s.rtl,D=s.destroyInactiveTabPane,N=n.useContext(Lt),K=N.prefixCls,x=N.tabs,L=S.tabPane,H=x.findIndex(function(U){return U.key===g});return n.createElement("div",{className:Ee()("".concat(K,"-content-holder"))},n.createElement("div",{className:Ee()("".concat(K,"-content"),"".concat(K,"-content-").concat(F),Object(oe.a)({},"".concat(K,"-content-animated"),L)),style:H&&L?Object(oe.a)({},O?"marginRight":"marginLeft","-".concat(H,"00%")):null},x.map(function(U){return n.cloneElement(U.node,{key:U.key,prefixCls:K,tabKey:U.key,id:u,animated:L,active:U.key===g,destroyInactiveTabPane:D})})))}function ma(s){var u=s.prefixCls,g=s.forceRender,S=s.className,F=s.style,O=s.id,D=s.active,N=s.animated,K=s.destroyInactiveTabPane,x=s.tabKey,L=s.children,H=n.useState(g),U=Object(V.a)(H,2),ae=U[0],Y=U[1];n.useEffect(function(){D?Y(!0):K&&Y(!1)},[D,K]);var X={};return D||(N?(X.visibility="hidden",X.height=0,X.overflowY="hidden"):X.display="none"),n.createElement("div",{id:O&&"".concat(O,"-panel-").concat(x),role:"tabpanel",tabIndex:D?0:-1,"aria-labelledby":O&&"".concat(O,"-tab-").concat(x),"aria-hidden":!D,style:Object(de.a)(Object(de.a)({},X),F),className:Ee()("".concat(u,"-tabpane"),D&&"".concat(u,"-tabpane-active"),S)},(D||ae||g)&&L)}var fa=0;function tr(s){return Object(cn.a)(s).map(function(u){if(n.isValidElement(u)){var g=u.key!==void 0?String(u.key):void 0;return Object(de.a)(Object(de.a)({key:g},u.props),{},{node:u})}return null}).filter(function(u){return u})}function ar(s,u){var g,S=s.id,F=s.prefixCls,O=F===void 0?"rc-tabs":F,D=s.className,N=s.children,K=s.direction,x=s.activeKey,L=s.defaultActiveKey,H=s.editable,U=s.animated,ae=U===void 0?{inkBar:!0,tabPane:!1}:U,Y=s.tabPosition,X=Y===void 0?"top":Y,se=s.tabBarGutter,z=s.tabBarStyle,q=s.tabBarExtraContent,ne=s.locale,Q=s.moreIcon,re=s.moreTransitionName,Z=s.destroyInactiveTabPane,pe=s.renderTabBar,_=s.onChange,le=s.onTabClick,ue=s.onTabScroll,te=Object(Oe.a)(s,["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"]),G=tr(N),ie=K==="rtl",fe;ae===!1?fe={inkBar:!1,tabPane:!1}:ae===!0?fe={inkBar:!0,tabPane:!0}:fe=Object(de.a)({inkBar:!0,tabPane:!1},Object(rn.a)(ae)==="object"?ae:{});var me=Object(n.useState)(!1),ye=Object(V.a)(me,2),Te=ye[0],he=ye[1];Object(n.useEffect)(function(){he(Object(jn.a)())},[]);var ge=Object(vn.a)(function(){var Re;return(Re=G[0])===null||Re===void 0?void 0:Re.key},{value:x,defaultValue:L}),De=Object(V.a)(ge,2),Fe=De[0],Se=De[1],Ce=Object(n.useState)(function(){return G.findIndex(function(Re){return Re.key===Fe})}),Ne=Object(V.a)(Ce,2),Ue=Ne[0],Ie=Ne[1];Object(n.useEffect)(function(){var Re=G.findIndex(function(He){return He.key===Fe});if(Re===-1){var Me;Re=Math.max(0,Math.min(Ue,G.length-1)),Se((Me=G[Re])===null||Me===void 0?void 0:Me.key)}Ie(Re)},[G.map(function(Re){return Re.key}).join("_"),Fe,Ue]);var we=Object(vn.a)(null,{value:S}),We=Object(V.a)(we,2),Ae=We[0],bn=We[1],Xe=X;Te&&!["left","right"].includes(X)&&(Xe="top"),Object(n.useEffect)(function(){S||(bn("rc-tabs-".concat(fa)),fa+=1)},[]);function $e(Re,Me){le==null||le(Re,Me),Se(Re),_==null||_(Re)}var qe={id:Ae,activeKey:Fe,animated:fe,tabPosition:Xe,rtl:ie,mobile:Te},mn,fn=Object(de.a)(Object(de.a)({},qe),{},{editable:H,locale:ne,moreIcon:Q,moreTransitionName:re,tabBarGutter:se,onTabClick:$e,onTabScroll:ue,extra:q,style:z,panes:N});return pe?mn=pe(fn,ca):mn=n.createElement(ca,fn),n.createElement(Lt.Provider,{value:{tabs:G,prefixCls:O}},n.createElement("div",Object(W.a)({ref:u,id:S,className:Ee()(O,"".concat(O,"-").concat(Xe),(g={},Object(oe.a)(g,"".concat(O,"-mobile"),Te),Object(oe.a)(g,"".concat(O,"-editable"),H),Object(oe.a)(g,"".concat(O,"-rtl"),ie),g),D)},te),mn,n.createElement(nr,Object(W.a)({destroyInactiveTabPane:Z},qe,{animated:fe}))))}var pa=n.forwardRef(ar);pa.TabPane=ma;var rr=pa,sr=rr,$t=e("MZF8"),on=e("dEAq"),ir=e("ZpkN"),br=e("TIsu");function Vt(s,u){var g,S=(g=s.match(/\.(\w+)$/))===null||g===void 0?void 0:g[1];return S||(S=u.tsx?"tsx":"jsx"),S}var lr=s=>{var u,g,S,F=Object(n.useRef)(),O=Object(n.useContext)(on.context),D=O.locale,N=Object(on.useLocaleProps)(D,s),K=Object(on.useDemoUrl)(N.identifier),x=N.demoUrl||K,L=($t.a===null||$t.a===void 0?void 0:$t.a.location.hash)==="#".concat(N.identifier),H=Object.keys(N.sources).length===1,U=Object(on.useCodeSandbox)((u=N.hideActions)!==null&&u!==void 0&&u.includes("CSB")?null:N),ae=Object(on.useRiddle)((g=N.hideActions)!==null&&g!==void 0&&g.includes("RIDDLE")?null:N),Y=Object(on.useMotions)(N.motions||[],F.current),X=Object($.default)(Y,2),se=X[0],z=X[1],q=Object(on.useCopy)(),ne=Object($.default)(q,2),Q=ne[0],re=ne[1],Z=Object(n.useState)("_"),pe=Object($.default)(Z,2),_=pe[0],le=pe[1],ue=Object(n.useState)(Vt(_,N.sources[_])),te=Object($.default)(ue,2),G=te[0],ie=te[1],fe=Object(n.useState)(Boolean(N.defaultShowCode)),me=Object($.default)(fe,2),ye=me[0],Te=me[1],he=Object(n.useState)(Math.random()),ge=Object($.default)(he,2),De=ge[0],Fe=ge[1],Se=N.sources[_][G]||N.sources[_].content,Ce=Object(on.useTSPlaygroundUrl)(D,Se),Ne=Object(n.useRef)(),Ue=Object(on.usePrefersColor)(),Ie=Object($.default)(Ue,1),we=Ie[0];Object(n.useEffect)(()=>{Fe(Math.random())},[we]);function We(Ae){le(Ae),ie(Vt(Ae,N.sources[Ae]))}return y.a.createElement("div",{style:N.style,className:[N.className,"__dumi-default-previewer",L?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:N.identifier,"data-debug":N.debug||void 0,"data-iframe":N.iframe||void 0},N.iframe&&y.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),y.a.createElement("div",{ref:F,className:"__dumi-default-previewer-demo",style:{transform:N.transform?"translate(0, 0)":void 0,padding:N.compact||N.iframe&&N.compact!==!1?"0":void 0,background:N.background}},N.iframe?y.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(N.iframe).replace(/(\d)$/,"$1px")},key:De,src:x,ref:Ne}):N.children),y.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":N.title},N.title&&y.a.createElement(on.AnchorLink,{to:"#".concat(N.identifier)},N.title),N.description&&y.a.createElement("div",{dangerouslySetInnerHTML:{__html:N.description}})),y.a.createElement("div",{className:"__dumi-default-previewer-actions"},U&&y.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:U}),ae&&y.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:ae}),N.motions&&y.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:z,onClick:()=>se()}),N.iframe&&y.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:()=>Fe(Math.random())}),!((S=N.hideActions)!==null&&S!==void 0&&S.includes("EXTERNAL"))&&y.a.createElement(on.Link,{target:"_blank",to:x},y.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),y.a.createElement("span",null),y.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":re,onClick:()=>Q(Se)}),G==="tsx"&&ye&&y.a.createElement(on.Link,{target:"_blank",to:Ce},y.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),y.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(ye?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:()=>Te(!ye)})),ye&&y.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!H&&y.a.createElement(sr,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xB7\xB7\xB7",defaultActiveKey:_,onChange:We},Object.keys(N.sources).map(Ae=>y.a.createElement(ma,{tab:Ae==="_"?"index.".concat(Vt(Ae,N.sources[Ae])):Ae,key:Ae}))),y.a.createElement("div",{className:"__dumi-default-previewer-source"},y.a.createElement(ir.a,{code:Se,lang:G,showCopy:!1}))))},Er=dn.default=lr},"80pN":function(Dn,dn,e){"use strict";(function($){/** @license React v16.14.0
* react-dom-test-utils.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var n=e("MgzW"),y=e("q1tI"),W=e("i8i4"),oe=e("QCnb");function V(t){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+t,c=1;c<arguments.length;c++)r+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var rn=y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;rn.hasOwnProperty("ReactCurrentDispatcher")||(rn.ReactCurrentDispatcher={current:null}),rn.hasOwnProperty("ReactCurrentBatchConfig")||(rn.ReactCurrentBatchConfig={suspense:null});function Oe(t){var r=t,c=t;if(t.alternate)for(;r.return;)r=r.return;else{t=r;do r=t,(r.effectTag&1026)!=0&&(c=r.return),t=r.return;while(t)}return r.tag===3?c:null}function de(t){if(Oe(t)!==t)throw Error(V(188))}function ze(t){var r=t.alternate;if(!r){if(r=Oe(t),r===null)throw Error(V(188));return r!==t?null:t}for(var c=t,v=r;;){var R=c.return;if(R===null)break;var B=R.alternate;if(B===null){if(v=R.return,v!==null){c=v;continue}break}if(R.child===B.child){for(B=R.child;B;){if(B===c)return de(R),t;if(B===v)return de(R),r;B=B.sibling}throw Error(V(188))}if(c.return!==v.return)c=R,v=B;else{for(var M=!1,J=R.child;J;){if(J===c){M=!0,c=R,v=B;break}if(J===v){M=!0,v=R,c=B;break}J=J.sibling}if(!M){for(J=B.child;J;){if(J===c){M=!0,c=B,v=R;break}if(J===v){M=!0,v=B,c=R;break}J=J.sibling}if(!M)throw Error(V(189))}}if(c.alternate!==v)throw Error(V(190))}if(c.tag!==3)throw Error(V(188));return c.stateNode.current===c?t:r}function Ee(){return!0}function cn(){return!1}function jn(t,r,c,v){this.dispatchConfig=t,this._targetInst=r,this.nativeEvent=c,t=this.constructor.Interface;for(var R in t)t.hasOwnProperty(R)&&((r=t[R])?this[R]=r(c):R==="target"?this.target=v:this[R]=c[R]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Ee:cn,this.isPropagationStopped=cn,this}n(jn.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Ee)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Ee)},persist:function(){this.isPersistent=Ee},isPersistent:cn,destructor:function(){var t=this.constructor.Interface,r;for(r in t)this[r]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=cn,this._dispatchInstances=this._dispatchListeners=null}}),jn.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null},jn.extend=function(t){function r(){}function c(){return v.apply(this,arguments)}var v=this;r.prototype=v.prototype;var R=new r;return n(R,c.prototype),c.prototype=R,c.prototype.constructor=c,c.Interface=n({},v.Interface,t),c.extend=v.extend,xe(c),c},xe(jn);function vn(t,r,c,v){if(this.eventPool.length){var R=this.eventPool.pop();return this.call(R,t,r,c,v),R}return new this(t,r,c,v)}function sn(t){if(!(t instanceof this))throw Error(V(279));t.destructor(),10>this.eventPool.length&&this.eventPool.push(t)}function xe(t){t.eventPool=[],t.getPooled=vn,t.release=sn}var wn=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined");function Pn(t,r){var c={};return c[t.toLowerCase()]=r.toLowerCase(),c["Webkit"+t]="webkit"+r,c["Moz"+t]="moz"+r,c}var gn={animationend:Pn("Animation","AnimationEnd"),animationiteration:Pn("Animation","AnimationIteration"),animationstart:Pn("Animation","AnimationStart"),transitionend:Pn("Transition","TransitionEnd")},Pe={},nt={};wn&&(nt=document.createElement("div").style,"AnimationEvent"in window||(delete gn.animationend.animation,delete gn.animationiteration.animation,delete gn.animationstart.animation),"TransitionEvent"in window||delete gn.transitionend.transition);function Bn(t){if(Pe[t])return Pe[t];if(!gn[t])return t;var r=gn[t],c;for(c in r)if(r.hasOwnProperty(c)&&c in nt)return Pe[t]=r[c];return t}var tt=Bn("animationend"),dt=Bn("animationiteration"),at=Bn("animationstart"),ct=Bn("transitionend"),Mn=null;function rt(t){if(Mn===null)try{var r=("require"+Math.random()).slice(0,7);Mn=($&&$[r])("timers").setImmediate}catch(c){Mn=function(v){var R=new MessageChannel;R.port1.onmessage=v,R.port2.postMessage(void 0)}}return Mn(t)}var Vn=W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,mt=Vn[11],Kn=Vn[12],Wn=W.unstable_batchedUpdates,Jn=rn.IsSomeRendererActing,zn=typeof oe.unstable_flushAllWithoutAsserting=="function",xn=oe.unstable_flushAllWithoutAsserting||function(){for(var t=!1;mt();)t=!0;return t};function st(t){try{xn(),rt(function(){xn()?st(t):t()})}catch(r){t(r)}}var yn=0,T=!1,A=W.findDOMNode,j=W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,f=j[0],i=j[4],h=j[5],b=j[6],E=j[7],l=j[8],p=j[9],o=j[10];function I(){}function w(t,r){if(!t)return[];if(t=ze(t),!t)return[];for(var c=t,v=[];;){if(c.tag===5||c.tag===6||c.tag===1||c.tag===0){var R=c.stateNode;r(R)&&v.push(R)}if(c.child)c.child.return=c,c=c.child;else{if(c===t)return v;for(;!c.sibling;){if(!c.return||c.return===t)return v;c=c.return}c.sibling.return=c.return,c=c.sibling}}}function C(t,r){if(t&&!t._reactInternalFiber){var c=""+t;throw t=Array.isArray(t)?"an array":t&&t.nodeType===1&&t.tagName?"a DOM node":c==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":c,Error(V(286,r,t))}}var d={renderIntoDocument:function(t){var r=document.createElement("div");return W.render(t,r)},isElement:function(t){return y.isValidElement(t)},isElementOfType:function(t,r){return y.isValidElement(t)&&t.type===r},isDOMComponent:function(t){return!(!t||t.nodeType!==1||!t.tagName)},isDOMComponentElement:function(t){return!!(t&&y.isValidElement(t)&&t.tagName)},isCompositeComponent:function(t){return d.isDOMComponent(t)?!1:t!=null&&typeof t.render=="function"&&typeof t.setState=="function"},isCompositeComponentWithType:function(t,r){return d.isCompositeComponent(t)?t._reactInternalFiber.type===r:!1},findAllInRenderedTree:function(t,r){return C(t,"findAllInRenderedTree"),t?w(t._reactInternalFiber,r):[]},scryRenderedDOMComponentsWithClass:function(t,r){return C(t,"scryRenderedDOMComponentsWithClass"),d.findAllInRenderedTree(t,function(c){if(d.isDOMComponent(c)){var v=c.className;typeof v!="string"&&(v=c.getAttribute("class")||"");var R=v.split(/\s+/);if(!Array.isArray(r)){if(r===void 0)throw Error(V(11));r=r.split(/\s+/)}return r.every(function(B){return R.indexOf(B)!==-1})}return!1})},findRenderedDOMComponentWithClass:function(t,r){if(C(t,"findRenderedDOMComponentWithClass"),t=d.scryRenderedDOMComponentsWithClass(t,r),t.length!==1)throw Error("Did not find exactly one match (found: "+t.length+") for class:"+r);return t[0]},scryRenderedDOMComponentsWithTag:function(t,r){return C(t,"scryRenderedDOMComponentsWithTag"),d.findAllInRenderedTree(t,function(c){return d.isDOMComponent(c)&&c.tagName.toUpperCase()===r.toUpperCase()})},findRenderedDOMComponentWithTag:function(t,r){if(C(t,"findRenderedDOMComponentWithTag"),t=d.scryRenderedDOMComponentsWithTag(t,r),t.length!==1)throw Error("Did not find exactly one match (found: "+t.length+") for tag:"+r);return t[0]},scryRenderedComponentsWithType:function(t,r){return C(t,"scryRenderedComponentsWithType"),d.findAllInRenderedTree(t,function(c){return d.isCompositeComponentWithType(c,r)})},findRenderedComponentWithType:function(t,r){if(C(t,"findRenderedComponentWithType"),t=d.scryRenderedComponentsWithType(t,r),t.length!==1)throw Error("Did not find exactly one match (found: "+t.length+") for componentType:"+r);return t[0]},mockComponent:function(t,r){return r=r||t.mockTagName||"div",t.prototype.render.mockImplementation(function(){return y.createElement(r,null,this.props.children)}),this},nativeTouchData:function(t,r){return{touches:[{pageX:t,pageY:r}]}},Simulate:null,SimulateNative:{},act:function(t){function r(){yn--,Jn.current=c,Kn.current=v}T===!1&&(T=!0,console.error("act(...) is not supported in production builds of React, and might not behave as expected.")),yn++;var c=Jn.current,v=Kn.current;Jn.current=!0,Kn.current=!0;try{var R=Wn(t)}catch(B){throw r(),B}if(R!==null&&typeof R=="object"&&typeof R.then=="function")return{then:function(B,M){R.then(function(){1<yn||zn===!0&&c===!0?(r(),B()):st(function(J){r(),J?M(J):B()})},function(J){r(),M(J)})}};try{yn!==1||zn!==!1&&c!==!1||xn(),r()}catch(B){throw r(),B}return{then:function(B){B()}}}};function P(t){return function(r,c){if(y.isValidElement(r))throw Error(V(228));if(d.isCompositeComponent(r))throw Error(V(229));var v=i[t],R=new I;R.target=r,R.type=t.toLowerCase();var B=f(r),M=new jn(v,B,R,r);M.persist(),n(M,c),v.phasedRegistrationNames?h(M):b(M),W.unstable_batchedUpdates(function(){E(r),o(M)}),l()}}d.Simulate={};for(var m in i)d.Simulate[m]=P(m);function a(t,r){return function(c,v){var R=new I(t);n(R,v),d.isDOMComponent(c)?(c=A(c),R.target=c,p(r,1,document,R)):c.tagName&&(R.target=c,p(r,1,document,R))}}[["abort","abort"],[tt,"animationEnd"],[dt,"animationIteration"],[at,"animationStart"],["blur","blur"],["canplaythrough","canPlayThrough"],["canplay","canPlay"],["cancel","cancel"],["change","change"],["click","click"],["close","close"],["compositionend","compositionEnd"],["compositionstart","compositionStart"],["compositionupdate","compositionUpdate"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["dragstart","dragStart"],["drag","drag"],["drop","drop"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],["ended","ended"],["error","error"],["focus","focus"],["input","input"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["loadstart","loadStart"],["loadstart","loadStart"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["mousedown","mouseDown"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["playing","playing"],["progress","progress"],["ratechange","rateChange"],["scroll","scroll"],["seeked","seeked"],["seeking","seeking"],["selectionchange","selectionChange"],["stalled","stalled"],["suspend","suspend"],["textInput","textInput"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchmove","touchMove"],["touchstart","touchStart"],[ct,"transitionEnd"],["volumechange","volumeChange"],["waiting","waiting"],["wheel","wheel"]].forEach(function(t){var r=t[1];d.SimulateNative[r]=a(r,t[0])}),$.exports=d.default||d}).call(this,e("hOG+")(Dn))},JjdP:function(Dn,dn,e){"use strict";e.r(dn);var $=e("9og8"),n=e("WmNS"),y=e.n(n),W=e("LtsZ"),oe=`import React, { useRef } from 'react';
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
}`,rn=`import React, { useState, useEffect } from 'react';
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

export default Demo;`,Oe=`export const delay = ms => new Promise(res => setTimeout(res, ms));

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

export default Demo;`,Ee=`import React from 'react';
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
};`,jn=`import React, { Component } from 'react';
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

export default Demo;`,Pn=`/* PrismJS 1.16.0
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
}`,Pe=`import React, { Component } from 'react';
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

export default Demo;`,Bn=`{
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

export default Demo;`,at=`import { monaco } from 'react-monaco-editor';

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
}`,Mn=`import React from 'react';
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

export default withTable(Demo);`,rt=`import React from 'react';
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

export default Demo;`,yn=dn.default={"guide-card":{component:Object(W.dynamic)({loader:function(){var T=Object($.a)(y.a.mark(function j(){return y.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"oLxE"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},j)}));function A(){return T.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:oe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"card-render":{version:"0.1.2"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"0.x"}},identifier:"guide-card"}},"chart-render-demo":{component:Object(W.dynamic)({loader:function(){var T=Object($.a)(y.a.mark(function j(){var f,i,h,b,E,l,p;return y.a.wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return l=function(C,d){if(!d&&C&&C.__esModule)return C;if(C===null||typeof C!="object"&&typeof C!="function")return{default:C};var P=E(d);if(P&&P.has(C))return P.get(C);var m={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var t in C)if(t!=="default"&&Object.prototype.hasOwnProperty.call(C,t)){var r=a?Object.getOwnPropertyDescriptor(C,t):null;r&&(r.get||r.set)?Object.defineProperty(m,t,r):m[t]=C[t]}return m.default=C,P&&P.set(C,m),m},E=function(C){if(typeof WeakMap!="function")return null;var d=new WeakMap,P=new WeakMap;return(E=function(a){return a?P:d})(C)},f=e("K+nK"),I.t0=f,I.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return I.t1=I.sent,i=(0,I.t0)(I.t1),I.t2=l,I.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return I.t3=I.sent,h=(0,I.t2)(I.t3),I.next=15,Promise.all([e.e(0),e.e(2),e.e(9),e.e(10),e.e(12)]).then(e.bind(null,"36SN"));case 15:return b=I.sent,p=function(){var C=(0,h.useState)("Line"),d=(0,i.default)(C,2),P=d[0],m=d[1],a={Line:b.Line,Column:b.Column,PivotTable:b.PivotTable}[P];return h.default.createElement("div",null,h.default.createElement("div",{style:{marginBottom:10}},h.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return m("Line")}},"\u6298\u7EBF\u56FE"),h.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return m("Column")}},"\u67F1\u72B6\u56FE"),h.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return m("PivotTable")}},"\u4EA4\u53C9\u8868")),h.default.createElement(a,{meta:[{id:"date",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF",isDim:!1},{id:"uv",name:"\u8BBF\u5BA2\u6570",isDim:!1}],data:[{date:"20200101",pv:100,uv:50},{date:"20200102",pv:120,uv:60},{date:"20200103",pv:140,uv:70},{date:"20200104",pv:160,uv:80}]}))},I.abrupt("return",p);case 18:case"end":return I.stop()}},j)}));function A(){return T.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"chart-render-demo"}},"column-demo":{component:Object(W.dynamic)({loader:function(){var T=Object($.a)(y.a.mark(function j(){var f,i,h,b;return y.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return f=e("K+nK"),l.t0=f,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,i=(0,l.t0)(l.t1),l.next=8,Promise.all([e.e(0),e.e(2),e.e(9),e.e(10),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=l.sent,b=function(){return i.default.createElement(h.Column,{meta:[{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{pv:50,uv:20}]})},l.abrupt("return",b);case 11:case"end":return l.stop()}},j)}));function A(){return T.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[{ pv: 50, uv: 20 }]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo"}},"column-demo-1":{component:Object(W.dynamic)({loader:function(){var T=Object($.a)(y.a.mark(function j(){var f,i,h,b;return y.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return f=e("K+nK"),l.t0=f,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,i=(0,l.t0)(l.t1),l.next=8,Promise.all([e.e(0),e.e(2),e.e(9),e.e(10),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=l.sent,b=function(){return i.default.createElement(h.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},l.abrupt("return",b);case 11:case"end":return l.stop()}},j)}));function A(){return T.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-1"}},"column-demo-2":{component:Object(W.dynamic)({loader:function(){var T=Object($.a)(y.a.mark(function j(){var f,i,h,b;return y.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return f=e("K+nK"),l.t0=f,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,i=(0,l.t0)(l.t1),l.next=8,Promise.all([e.e(0),e.e(2),e.e(9),e.e(10),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=l.sent,b=function(){return i.default.createElement(h.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},l.abrupt("return",b);case 11:case"end":return l.stop()}},j)}));function A(){return T.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-2"}},"column-demo-3":{component:Object(W.dynamic)({loader:function(){var T=Object($.a)(y.a.mark(function j(){var f,i,h,b;return y.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return f=e("K+nK"),l.t0=f,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,i=(0,l.t0)(l.t1),l.next=8,Promise.all([e.e(0),e.e(2),e.e(9),e.e(10),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=l.sent,b=function(){return i.default.createElement(h.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},l.abrupt("return",b);case 11:case"end":return l.stop()}},j)}));function A(){return T.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-3"}},"column-demo-4":{component:Object(W.dynamic)({loader:function(){var T=Object($.a)(y.a.mark(function j(){var f,i,h,b;return y.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return f=e("K+nK"),l.t0=f,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,i=(0,l.t0)(l.t1),l.next=8,Promise.all([e.e(0),e.e(2),e.e(9),e.e(10),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=l.sent,b=function(){return i.default.createElement(h.Column,{inverted:!0,label:{position:"middle",layout:[{type:"interval-adjust-position"},{type:"interval-hide-overlap"},{type:"adjust-color"}]},meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},l.abrupt("return",b);case 11:case"end":return l.stop()}},j)}));function A(){return T.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-4"}},"line-demo":{component:Object(W.dynamic)({loader:function(){var T=Object($.a)(y.a.mark(function j(){var f,i,h,b;return y.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return f=e("K+nK"),l.t0=f,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,i=(0,l.t0)(l.t1),l.next=8,Promise.all([e.e(0),e.e(2),e.e(9),e.e(10),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=l.sent,b=function(){return i.default.createElement(h.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},l.abrupt("return",b);case 11:case"end":return l.stop()}},j)}));function A(){return T.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo"}},"line-demo-1":{component:Object(W.dynamic)({loader:function(){var T=Object($.a)(y.a.mark(function j(){var f,i,h,b;return y.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return f=e("K+nK"),l.t0=f,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,i=(0,l.t0)(l.t1),l.next=8,Promise.all([e.e(0),e.e(2),e.e(9),e.e(10),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=l.sent,b=function(){return i.default.createElement(h.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},l.abrupt("return",b);case 11:case"end":return l.stop()}},j)}));function A(){return T.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-1"}},"line-demo-2":{component:Object(W.dynamic)({loader:function(){var T=Object($.a)(y.a.mark(function j(){var f,i,h,b;return y.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return f=e("K+nK"),l.t0=f,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,i=(0,l.t0)(l.t1),l.next=8,Promise.all([e.e(0),e.e(2),e.e(9),e.e(10),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=l.sent,b=function(){return i.default.createElement(h.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"},{id:"pv",name:"\u8BBF\u95EE\u91CF"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20,pv:120},{ds:"2020-12-31",page:"\u9996\u9875",uv:120,pv:1120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21,pv:121},{ds:"2021-01-01",page:"\u9996\u9875",uv:121,pv:1121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15,pv:115},{ds:"2021-01-02",page:"\u9996\u9875",uv:115,pv:1115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40,pv:140},{ds:"2021-01-03",page:"\u9996\u9875",uv:140,pv:1140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31,pv:131},{ds:"2021-01-04",page:"\u9996\u9875",uv:131,pv:1131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32,pv:132},{ds:"2021-01-05",page:"\u9996\u9875",uv:132,pv:1132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30,pv:130},{ds:"2021-01-06",page:"\u9996\u9875",uv:130,pv:1130}]})},l.abrupt("return",b);case 11:case"end":return l.stop()}},j)}));function A(){return T.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-2"}},"line-demo-3":{component:Object(W.dynamic)({loader:function(){var T=Object($.a)(y.a.mark(function j(){var f,i,h,b;return y.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return f=e("K+nK"),l.t0=f,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,i=(0,l.t0)(l.t1),l.next=8,Promise.all([e.e(0),e.e(2),e.e(9),e.e(10),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=l.sent,b=function(){return i.default.createElement(h.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},l.abrupt("return",b);case 11:case"end":return l.stop()}},j)}));function A(){return T.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-3"}},"line-demo-4":{component:Object(W.dynamic)({loader:function(){var T=Object($.a)(y.a.mark(function j(){var f,i,h,b;return y.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return f=e("K+nK"),l.t0=f,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,i=(0,l.t0)(l.t1),l.next=8,Promise.all([e.e(0),e.e(2),e.e(9),e.e(10),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=l.sent,b=function(){return i.default.createElement(h.Line,{withArea:!0,isStack:!0,isPercent:!0,meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},l.abrupt("return",b);case 11:case"end":return l.stop()}},j)}));function A(){return T.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-4"}},"pivot-table-demo":{component:Object(W.dynamic)({loader:function(){var T=Object($.a)(y.a.mark(function j(){var f,i,h,b;return y.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return f=e("K+nK"),l.t0=f,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,i=(0,l.t0)(l.t1),l.next=8,Promise.all([e.e(0),e.e(2),e.e(9),e.e(10),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=l.sent,b=function(){return i.default.createElement(h.PivotTable,{style:{maxHeight:400,overflow:"auto"},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},l.abrupt("return",b);case 11:case"end":return l.stop()}},j)}));function A(){return T.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo"}},"pivot-table-demo-1":{component:Object(W.dynamic)({loader:function(){var T=Object($.a)(y.a.mark(function j(){var f,i,h,b;return y.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return f=e("K+nK"),l.t0=f,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,i=(0,l.t0)(l.t1),l.next=8,Promise.all([e.e(0),e.e(2),e.e(9),e.e(10),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=l.sent,b=function(){return i.default.createElement(h.PivotTable,{style:{maxHeight:400,overflow:"auto"},cellRender:function(I,w,C){return i.default.createElement("div",null,i.default.createElement("p",null,"\u53C2\u6570\u8868\uFF1A"),i.default.createElement("p",{style:{color:["red","orange","yellow","green","blue"][Object.keys(w).length]}},I),i.default.createElement("p",null,JSON.stringify(w)),i.default.createElement("p",null,JSON.stringify(C)))},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},l.abrupt("return",b);case 11:case"end":return l.stop()}},j)}));function A(){return T.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-1"}},"pivot-table-demo-2":{component:Object(W.dynamic)({loader:function(){var T=Object($.a)(y.a.mark(function j(){var f,i,h,b,E,l,p;return y.a.wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return l=function(C,d){if(!d&&C&&C.__esModule)return C;if(C===null||typeof C!="object"&&typeof C!="function")return{default:C};var P=E(d);if(P&&P.has(C))return P.get(C);var m={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var t in C)if(t!=="default"&&Object.prototype.hasOwnProperty.call(C,t)){var r=a?Object.getOwnPropertyDescriptor(C,t):null;r&&(r.get||r.set)?Object.defineProperty(m,t,r):m[t]=C[t]}return m.default=C,P&&P.set(C,m),m},E=function(C){if(typeof WeakMap!="function")return null;var d=new WeakMap,P=new WeakMap;return(E=function(a){return a?P:d})(C)},f=e("K+nK"),I.t0=f,I.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return I.t1=I.sent,i=(0,I.t0)(I.t1),I.t2=l,I.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return I.t3=I.sent,h=(0,I.t2)(I.t3),I.next=15,Promise.all([e.e(0),e.e(2),e.e(9),e.e(10),e.e(12)]).then(e.bind(null,"36SN"));case 15:return b=I.sent,p=function(){var C=(0,h.useState)(!1),d=(0,i.default)(C,2),P=d[0],m=d[1];return h.default.createElement(h.default.Fragment,null,h.default.createElement("label",null,"\u53EF\u5C55\u5F00/\u6536\u7F29\uFF1A",h.default.createElement("input",{type:"checkbox",value:P,onChange:function(){return m(!P)}})),h.default.createElement(b.PivotTable,{leftExpandable:P,showSubtotal:!1,meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]}))},I.abrupt("return",p);case 18:case"end":return I.stop()}},j)}));function A(){return T.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-2"}},"OldSchemaTransformer-demo":{component:Object(W.dynamic)({loader:function(){var T=Object($.a)(y.a.mark(function j(){var f,i,h,b,E,l,p,o,I,w,C,d,P;return y.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return I=function(r,c){if(!c&&r&&r.__esModule)return r;if(r===null||typeof r!="object"&&typeof r!="function")return{default:r};var v=o(c);if(v&&v.has(r))return v.get(r);var R={},B=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var M in r)if(M!=="default"&&Object.prototype.hasOwnProperty.call(r,M)){var J=B?Object.getOwnPropertyDescriptor(r,M):null;J&&(J.get||J.set)?Object.defineProperty(R,M,J):R[M]=r[M]}return R.default=r,v&&v.set(r,R),R},o=function(r){if(typeof WeakMap!="function")return null;var c=new WeakMap,v=new WeakMap;return(o=function(B){return B?v:c})(r)},f=e("K+nK"),a.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return a.t0=f,a.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return a.t1=a.sent,i=(0,a.t0)(a.t1),a.t2=f,a.next=13,Promise.resolve().then(e.bind(null,"tJVT"));case 13:return a.t3=a.sent,h=(0,a.t2)(a.t3),a.next=17,Promise.all([e.e(3),e.e(19)]).then(e.t.bind(null,"cUip",7));case 17:return a.t4=f,a.next=20,Promise.all([e.e(0),e.e(8),e.e(18),e.e(20)]).then(e.t.bind(null,"iJl9",7));case 20:return a.t5=a.sent,b=(0,a.t4)(a.t5),a.t6=I,a.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return a.t7=a.sent,E=(0,a.t6)(a.t7),a.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(11)]).then(e.bind(null,"gdfu"));case 29:return l=a.sent,a.next=32,Promise.all([e.e(22),e.e(25)]).then(e.bind(null,"7t+U"));case 32:return p=a.sent,w=b.default.TextArea,C={type:"object",properties:{number:{title:"\u6570\u5B57\u8F93\u5165\u6846",type:"number","ui:disabled":!0},checkbox:{title:"\u662F\u5426\u9009\u62E9",type:"boolean","ui:widget":"switch"}},required:["number"]},d=function(){var r=(0,E.useState)(JSON.stringify(C)),c=(0,h.default)(r,2),v=c[0],R=c[1],B=(0,E.useState)({}),M=(0,h.default)(B,2),J=M[0],Le=M[1],nn=function(){try{var An=(0,p.updateSchemaToNewVersion)(JSON.parse(v));Le(An)}catch(Hn){console.log(Hn)}},ln=function(An){R(An.target.value)},Tn=function(){R(JSON.stringify(JSON.parse(v),null,2))};return E.default.createElement("div",null,E.default.createElement("div",null,"\u586B\u5165\u65E7\u7248schema\uFF1A"),E.default.createElement(w,{style:{minHeight:400,marginTop:12,marginBottom:12},value:v,onChange:ln}),E.default.createElement(i.default,{style:{marginRight:12},onClick:Tn},"\u683C\u5F0F\u5316\u65E7schema"),E.default.createElement(i.default,{type:"primary",onClick:nn},"\u751F\u6210\u65B0\u7248schema"),E.default.createElement(w,{style:{minHeight:400,marginTop:12},value:JSON.stringify(J,null,2)}))},P=d,a.abrupt("return",P);case 38:case"end":return a.stop()}},j)}));function A(){return T.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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

export default Translator;`},"packages/form-render/src/utils.js":{import:"../../packages/form-render/src/utils.js",content:V}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"},"lodash-es":{version:"4.17.21"}},identifier:"OldSchemaTransformer-demo"}},"form-render-demo":{component:Object(W.dynamic)({loader:function(){var T=Object($.a)(y.a.mark(function j(){var f,i,h,b,E,l,p,o,I,w,C,d,P,m;return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return C=function(c,v){if(!v&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var R=w(v);if(R&&R.has(c))return R.get(c);var B={},M=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var J in c)if(J!=="default"&&Object.prototype.hasOwnProperty.call(c,J)){var Le=M?Object.getOwnPropertyDescriptor(c,J):null;Le&&(Le.get||Le.set)?Object.defineProperty(B,J,Le):B[J]=c[J]}return B.default=c,R&&R.set(c,B),B},w=function(c){if(typeof WeakMap!="function")return null;var v=new WeakMap,R=new WeakMap;return(w=function(M){return M?R:v})(c)},f=e("K+nK"),t.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return t.t0=f,t.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return t.t1=t.sent,i=(0,t.t0)(t.t1),t.t2=f,t.next=13,e.e(84).then(e.bind(null,"fWQN"));case 13:return t.t3=t.sent,h=(0,t.t2)(t.t3),t.t4=f,t.next=18,e.e(85).then(e.bind(null,"mtLc"));case 18:return t.t5=t.sent,b=(0,t.t4)(t.t5),t.t6=f,t.next=23,e.e(76).then(e.bind(null,"yKVA"));case 23:return t.t7=t.sent,E=(0,t.t6)(t.t7),t.t8=f,t.next=28,e.e(75).then(e.bind(null,"879j"));case 28:return t.t9=t.sent,l=(0,t.t8)(t.t9),t.t10=f,t.next=33,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 33:return t.t11=t.sent,p=(0,t.t10)(t.t11),t.next=37,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(11)]).then(e.bind(null,"gdfu"));case 37:return o=t.sent,t.t12=C,t.next=41,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 41:return t.t13=t.sent,I=(0,t.t12)(t.t13),d={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},P=function(r){(0,E.default)(v,r);var c=(0,l.default)(v);function v(){return(0,h.default)(this,v),c.apply(this,arguments)}return(0,b.default)(v,[{key:"render",value:function(){var B=this.props.form;return p.default.createElement("div",null,p.default.createElement(I.default,{form:B,schema:d}),p.default.createElement(i.default,{type:"primary",onClick:B.submit},"\u63D0\u4EA4"))}}]),v}(p.default.Component),m=(0,I.connectForm)(P),t.abrupt("return",m);case 47:case"end":return t.stop()}},j)}));function A(){return T.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default connectForm(Demo);`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo"}},"form-render-demo-1":{component:Object(W.dynamic)({loader:function(){var T=Object($.a)(y.a.mark(function j(){var f,i,h,b,E,l,p,o,I,w;return y.a.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return p=function(m,a){if(!a&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var t=l(a);if(t&&t.has(m))return t.get(m);var r={},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in m)if(v!=="default"&&Object.prototype.hasOwnProperty.call(m,v)){var R=c?Object.getOwnPropertyDescriptor(m,v):null;R&&(R.get||R.set)?Object.defineProperty(r,v,R):r[v]=m[v]}return r.default=m,t&&t.set(m,r),r},l=function(m){if(typeof WeakMap!="function")return null;var a=new WeakMap,t=new WeakMap;return(l=function(c){return c?t:a})(m)},f=e("K+nK"),d.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return d.t0=f,d.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return d.t1=d.sent,i=(0,d.t0)(d.t1),d.t2=f,d.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return d.t3=d.sent,h=(0,d.t2)(d.t3),d.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(11)]).then(e.bind(null,"gdfu"));case 17:return b=d.sent,d.t4=p,d.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 21:return d.t5=d.sent,E=(0,d.t4)(d.t5),o={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},I=function(){var m=(0,E.useForm)();return h.default.createElement("div",null,h.default.createElement(E.default,{form:m,schema:o}),h.default.createElement(i.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4"))},w=I,d.abrupt("return",w);case 27:case"end":return d.stop()}},j)}));function A(){return T.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo-1"}},"form-render-demo-2":{component:Object(W.dynamic)({loader:function(){var T=Object($.a)(y.a.mark(function j(){var f,i,h,b,E,l,p,o,I,w;return y.a.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return p=function(m,a){if(!a&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var t=l(a);if(t&&t.has(m))return t.get(m);var r={},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in m)if(v!=="default"&&Object.prototype.hasOwnProperty.call(m,v)){var R=c?Object.getOwnPropertyDescriptor(m,v):null;R&&(R.get||R.set)?Object.defineProperty(r,v,R):r[v]=m[v]}return r.default=m,t&&t.set(m,r),r},l=function(m){if(typeof WeakMap!="function")return null;var a=new WeakMap,t=new WeakMap;return(l=function(c){return c?t:a})(m)},f=e("K+nK"),d.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return d.t0=f,d.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return d.t1=d.sent,i=(0,d.t0)(d.t1),d.t2=f,d.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return d.t3=d.sent,h=(0,d.t2)(d.t3),d.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(11)]).then(e.bind(null,"gdfu"));case 17:return b=d.sent,d.t4=p,d.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 21:return d.t5=d.sent,E=(0,d.t4)(d.t5),o={displayType:"row",labelWidth:60,type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F",type:"range",format:"date"},siteUrl:{title:"\u7F51\u5740",type:"string",placeholder:"\u6B64\u5904\u5FC5\u586B",required:!0,props:{addonBefore:"https://",addonAfter:".com"}}}},I=function(){var m=(0,E.useForm)(),a=function(r,c){c.length>0?alert("errors:"+JSON.stringify(c)):alert("formData:"+JSON.stringify(r,null,2))};return h.default.createElement("div",null,h.default.createElement(E.default,{form:m,schema:o,onFinish:a}),h.default.createElement(i.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4"))},w=I,d.abrupt("return",w);case 27:case"end":return d.stop()}},j)}));function A(){return T.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.1"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-demo-2"}},"form-render-tester":{component:Object(W.dynamic)({loader:function(){var T=Object($.a)(y.a.mark(function j(){return y.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"9Yrf"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},j)}));function A(){return T.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:rn},"advanced/utils/index.js":{import:"./advanced/utils",content:Oe},"widgets/RichText/src/index.js":{import:"../../widgets/RichText/src",content:de}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:"^15.0.2|| ^16.0.0-rc || ^16.0.0"},"form-render":{version:"1.6.1"},"react-dom":{version:"^15.0.2|| ^16.0.0-rc || ^16.0.0"},"braft-editor":{version:"2.3.9",css:"braft-editor/dist/index.css"}},transform:!0,defaultShowCode:!0,identifier:"form-render-tester"}},"display-demo":{component:Object(W.dynamic)({loader:function(){var T=Object($.a)(y.a.mark(function j(){var f,i,h,b,E;return y.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return f=e("K+nK"),p.t0=f,p.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return p.t1=p.sent,i=(0,p.t0)(p.t1),p.t2=f,p.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return p.t3=p.sent,h=(0,p.t2)(p.t3),b=function(I){return{type:"object",displayType:I,properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},objectName:{title:"\u5BF9\u8C61",bind:"obj",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},E=function(){return i.default.createElement("div",null,i.default.createElement("h2",null,"display: row"),i.default.createElement(h.default,{schema:b("row")}),i.default.createElement("h2",null,"display: column"),i.default.createElement(h.default,{schema:b("column")}))},p.abrupt("return",E);case 14:case"end":return p.stop()}},j)}));function A(){return T.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`},"demo/display.js":{import:"../demo/display",content:ze}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo"}},"display-demo-1":{component:Object(W.dynamic)({loader:function(){var T=Object($.a)(y.a.mark(function j(){var f,i,h,b,E;return y.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return f=e("K+nK"),p.t0=f,p.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return p.t1=p.sent,i=(0,p.t0)(p.t1),p.t2=f,p.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return p.t3=p.sent,h=(0,p.t2)(p.t3),b={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0},check:{title:"box",type:"boolean",default:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},E=function(){return i.default.createElement(h.default,{readOnly:!0,schema:b})},p.abrupt("return",E);case 14:case"end":return p.stop()}},j)}));function A(){return T.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form readOnly schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:ze}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-1"}},"display-demo-2":{component:Object(W.dynamic)({loader:function(){var T=Object($.a)(y.a.mark(function j(){var f,i,h,b,E;return y.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return f=e("K+nK"),p.t0=f,p.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return p.t1=p.sent,i=(0,p.t0)(p.t1),p.t2=f,p.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return p.t3=p.sent,h=(0,p.t2)(p.t3),b={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0,width:"50%"},check:{title:"box",type:"boolean",default:!0,width:"50%",labelWidth:6},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},E=function(){return i.default.createElement(h.default,{labelWidth:"200",schema:b})},p.abrupt("return",E);case 14:case"end":return p.stop()}},j)}));function A(){return T.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form labelWidth="200" schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:ze}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-2"}},"display-demo-3":{component:Object(W.dynamic)({loader:function(){var T=Object($.a)(y.a.mark(function j(){var f,i,h,b,E,l;return y.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.t2=f,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,h=(0,o.t2)(o.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},E=function(){return i.default.createElement(h.default,{schema:b})},l=E,o.abrupt("return",l);case 15:case"end":return o.stop()}},j)}));function A(){return T.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:ze}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-3"}},"display-demo-4":{component:Object(W.dynamic)({loader:function(){var T=Object($.a)(y.a.mark(function j(){var f,i,h,b,E,l;return y.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.t2=f,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,h=(0,o.t2)(o.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},E=function(){return i.default.createElement(h.default,{schema:b})},l=E,o.abrupt("return",l);case 15:case"end":return o.stop()}},j)}));function A(){return T.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:ze}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-4"}},"display-demo-5":{component:Object(W.dynamic)({loader:function(){var T=Object($.a)(y.a.mark(function j(){var f,i,h,b,E,l;return y.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.t2=f,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,h=(0,o.t2)(o.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},E=function(){return i.default.createElement(h.default,{schema:b})},l=E,o.abrupt("return",l);case 15:case"end":return o.stop()}},j)}));function A(){return T.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:ze}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-5"}},"display-demo-6":{component:Object(W.dynamic)({loader:function(){var T=Object($.a)(y.a.mark(function j(){var f,i,h,b,E,l;return y.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.t2=f,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,h=(0,o.t2)(o.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",props:{hideMove:!0},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},E=function(){return i.default.createElement(h.default,{schema:b})},l=E,o.abrupt("return",l);case 15:case"end":return o.stop()}},j)}));function A(){return T.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:ze}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-6"}},"form-methods-demo":{component:Object(W.dynamic)({loader:function(){var T=Object($.a)(y.a.mark(function j(){var f,i,h,b,E,l,p,o,I,w,C,d,P;return y.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return C=function(r,c){if(!c&&r&&r.__esModule)return r;if(r===null||typeof r!="object"&&typeof r!="function")return{default:r};var v=w(c);if(v&&v.has(r))return v.get(r);var R={},B=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var M in r)if(M!=="default"&&Object.prototype.hasOwnProperty.call(r,M)){var J=B?Object.getOwnPropertyDescriptor(r,M):null;J&&(J.get||J.set)?Object.defineProperty(R,M,J):R[M]=r[M]}return R.default=r,v&&v.set(r,R),R},w=function(r){if(typeof WeakMap!="function")return null;var c=new WeakMap,v=new WeakMap;return(w=function(B){return B?v:c})(r)},f=e("K+nK"),a.next=5,e.e(23).then(e.t.bind(null,"lfLe",7));case 5:return a.t0=f,a.next=8,e.e(24).then(e.t.bind(null,"Cp9S",7));case 8:return a.t1=a.sent,i=(0,a.t0)(a.t1),a.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return a.t2=f,a.next=15,e.e(8).then(e.t.bind(null,"4IMT",7));case 15:return a.t3=a.sent,h=(0,a.t2)(a.t3),a.next=19,e.e(15).then(e.t.bind(null,"tL+A",7));case 19:return a.t4=f,a.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return a.t5=a.sent,b=(0,a.t4)(a.t5),a.t6=f,a.next=27,Promise.resolve().then(e.bind(null,"tJVT"));case 27:return a.t7=a.sent,E=(0,a.t6)(a.t7),a.t8=C,a.next=32,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 32:return a.t9=a.sent,l=(0,a.t8)(a.t9),a.next=36,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(11)]).then(e.bind(null,"gdfu"));case 36:return p=a.sent,a.t10=C,a.next=40,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 40:return a.t11=a.sent,o=(0,a.t10)(a.t11),a.next=44,e.e(16).then(e.bind(null,"OH0R"));case 44:return I=a.sent,d=function(){var r=(0,o.useForm)(),c=(0,l.useState)({}),v=(0,E.default)(c,2),R=v[0],B=v[1],M=function(){(0,I.fakeApi)("xxx/getForm").then(function(nn){r.setValues({input1:"hello world",select1:"c"})})};(0,l.useEffect)(function(){(0,I.delay)(1e3).then(function(Le){B({type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}})})},[]);var J=function(nn,ln){ln.length>0?b.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(ln.map(function(Tn){return Tn.name}))):(0,I.fakeApi)("xxx/submit",nn).then(function(Tn){return b.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})};return l.default.createElement("div",{style:{width:"400px"}},l.default.createElement(o.default,{form:r,schema:R,onFinish:J}),l.default.createElement(i.default,null,l.default.createElement(h.default,{onClick:M},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),l.default.createElement(h.default,{type:"primary",onClick:r.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},P=d,a.abrupt("return",P);case 48:case"end":return a.stop()}},j)}));function A(){return T.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./advanced/utils",content:Oe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo"}},"form-methods-demo-1":{component:Object(W.dynamic)({loader:function(){var T=Object($.a)(y.a.mark(function j(){var f,i,h,b,E,l,p,o,I,w,C,d,P;return y.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return w=function(r,c){if(!c&&r&&r.__esModule)return r;if(r===null||typeof r!="object"&&typeof r!="function")return{default:r};var v=I(c);if(v&&v.has(r))return v.get(r);var R={},B=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var M in r)if(M!=="default"&&Object.prototype.hasOwnProperty.call(r,M)){var J=B?Object.getOwnPropertyDescriptor(r,M):null;J&&(J.get||J.set)?Object.defineProperty(R,M,J):R[M]=r[M]}return R.default=r,v&&v.set(r,R),R},I=function(r){if(typeof WeakMap!="function")return null;var c=new WeakMap,v=new WeakMap;return(I=function(B){return B?v:c})(r)},f=e("K+nK"),a.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return a.t0=f,a.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return a.t1=a.sent,i=(0,a.t0)(a.t1),a.t2=f,a.next=13,Promise.resolve().then(e.bind(null,"PpiC"));case 13:return a.t3=a.sent,h=(0,a.t2)(a.t3),a.next=17,e.e(15).then(e.t.bind(null,"tL+A",7));case 17:return a.t4=f,a.next=20,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 20:return a.t5=a.sent,b=(0,a.t4)(a.t5),a.t6=f,a.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return a.t7=a.sent,E=(0,a.t6)(a.t7),a.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(11)]).then(e.bind(null,"gdfu"));case 29:return l=a.sent,a.t8=w,a.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 33:return a.t9=a.sent,p=(0,a.t8)(a.t9),a.next=37,e.e(16).then(e.bind(null,"OH0R"));case 37:return o=a.sent,C={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},d=function(){var r=(0,p.useForm)(),c=function(B,M){M.length>0?b.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(M.map(function(J){return J.name}))):(0,o.fakeApi)("xxx/submit",B).then(function(J){return b.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},v=function(B){var M=B.data,J=B.errors,Le=B.schema,nn=(0,h.default)(B,["data","errors","schema"]);return(0,o.fakeApi)("xxx/validation").then(function(ln){return{name:"select1",error:["\u5916\u90E8\u6821\u9A8C\u9519\u8BEF"]}})};return E.default.createElement("div",{style:{width:"400px"}},E.default.createElement(p.default,{form:r,schema:C,beforeFinish:v,onFinish:c}),E.default.createElement(i.default,{type:"primary",onClick:r.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},P=d,a.abrupt("return",P);case 42:case"end":return a.stop()}},j)}));function A(){return T.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./advanced/utils",content:Oe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-1"}},"form-methods-demo-2":{component:Object(W.dynamic)({loader:function(){var T=Object($.a)(y.a.mark(function j(){var f,i,h,b,E,l,p,o,I,w,C,d,P;return y.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return w=function(r,c){if(!c&&r&&r.__esModule)return r;if(r===null||typeof r!="object"&&typeof r!="function")return{default:r};var v=I(c);if(v&&v.has(r))return v.get(r);var R={},B=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var M in r)if(M!=="default"&&Object.prototype.hasOwnProperty.call(r,M)){var J=B?Object.getOwnPropertyDescriptor(r,M):null;J&&(J.get||J.set)?Object.defineProperty(R,M,J):R[M]=r[M]}return R.default=r,v&&v.set(r,R),R},I=function(r){if(typeof WeakMap!="function")return null;var c=new WeakMap,v=new WeakMap;return(I=function(B){return B?v:c})(r)},f=e("K+nK"),a.next=5,e.e(23).then(e.t.bind(null,"lfLe",7));case 5:return a.t0=f,a.next=8,e.e(24).then(e.t.bind(null,"Cp9S",7));case 8:return a.t1=a.sent,i=(0,a.t0)(a.t1),a.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return a.t2=f,a.next=15,e.e(8).then(e.t.bind(null,"4IMT",7));case 15:return a.t3=a.sent,h=(0,a.t2)(a.t3),a.next=19,e.e(15).then(e.t.bind(null,"tL+A",7));case 19:return a.t4=f,a.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return a.t5=a.sent,b=(0,a.t4)(a.t5),a.t6=f,a.next=27,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 27:return a.t7=a.sent,E=(0,a.t6)(a.t7),a.next=31,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(11)]).then(e.bind(null,"gdfu"));case 31:return l=a.sent,a.t8=w,a.next=35,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 35:return a.t9=a.sent,p=(0,a.t8)(a.t9),a.next=39,e.e(16).then(e.bind(null,"OH0R"));case 39:return o=a.sent,C={type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F\u8303\u56F4",type:"range",format:"date"}}},d=function(){var r=(0,p.useForm)(),c=function(B,M){M.length>0?b.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(M.map(function(J){return J.name}))):(0,o.fakeApi)("xxx/submit",B).then(function(J){return b.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},v=function(){(0,o.fakeApi)("xxx/getForm").then(function(B){r.setValues({startDate:"2020-04-04",endDate:"2020-04-24"})})};return E.default.createElement("div",{style:{width:"400px"}},E.default.createElement(p.default,{form:r,schema:C,onFinish:c}),E.default.createElement(i.default,null,E.default.createElement(h.default,{onClick:v},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),E.default.createElement(h.default,{type:"primary",onClick:r.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},P=d,a.abrupt("return",P);case 44:case"end":return a.stop()}},j)}));function A(){return T.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./advanced/utils",content:Oe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-2"}},"form-methods-demo-3":{component:Object(W.dynamic)({loader:function(){var T=Object($.a)(y.a.mark(function j(){var f,i,h,b,E,l,p,o,I,w,C,d;return y.a.wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return I=function(t,r){if(!r&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var c=o(r);if(c&&c.has(t))return c.get(t);var v={},R=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var B in t)if(B!=="default"&&Object.prototype.hasOwnProperty.call(t,B)){var M=R?Object.getOwnPropertyDescriptor(t,B):null;M&&(M.get||M.set)?Object.defineProperty(v,B,M):v[B]=t[B]}return v.default=t,c&&c.set(t,v),v},o=function(t){if(typeof WeakMap!="function")return null;var r=new WeakMap,c=new WeakMap;return(o=function(R){return R?c:r})(t)},f=e("K+nK"),m.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return m.t0=f,m.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return m.t1=m.sent,i=(0,m.t0)(m.t1),m.next=12,e.e(15).then(e.t.bind(null,"tL+A",7));case 12:return m.t2=f,m.next=15,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 15:return m.t3=m.sent,h=(0,m.t2)(m.t3),m.t4=I,m.next=20,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 20:return m.t5=m.sent,b=(0,m.t4)(m.t5),m.next=24,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(11)]).then(e.bind(null,"gdfu"));case 24:return E=m.sent,m.t6=I,m.next=28,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 28:return m.t7=m.sent,l=(0,m.t6)(m.t7),m.next=32,e.e(16).then(e.bind(null,"OH0R"));case 32:return p=m.sent,w={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select1:{title:"\u5355\u9009",type:"string",widget:"select"}}}}},C=function(){var t=(0,l.useForm)(),r=function(){t.setSchemaByPath("obj1.select1",{enum:["east","south","west","north"],enumNames:["\u4E1C","\u5357","\u897F","\u5317"]})},c=function(R,B){B.length>0?h.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(B.map(function(M){return M.name}))):h.default.info(JSON.stringify(R))};return b.default.createElement("div",{style:{width:"400px"}},b.default.createElement(l.default,{form:t,schema:w,onMount:r,onFinish:c}),b.default.createElement(i.default,{type:"primary",onClick:t.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},d=C,m.abrupt("return",d);case 37:case"end":return m.stop()}},j)}));function A(){return T.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./advanced/utils",content:Oe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-3"}},"function-demo":{component:Object(W.dynamic)({loader:function(){var T=Object($.a)(y.a.mark(function j(){var f,i,h,b,E,l,p,o;return y.a.wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return E=function(d,P){if(!P&&d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var m=b(P);if(m&&m.has(d))return m.get(d);var a={},t=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in d)if(r!=="default"&&Object.prototype.hasOwnProperty.call(d,r)){var c=t?Object.getOwnPropertyDescriptor(d,r):null;c&&(c.get||c.set)?Object.defineProperty(a,r,c):a[r]=d[r]}return a.default=d,m&&m.set(d,a),a},b=function(d){if(typeof WeakMap!="function")return null;var P=new WeakMap,m=new WeakMap;return(b=function(t){return t?m:P})(d)},f=e("K+nK"),w.t0=f,w.next=6,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 6:return w.t1=w.sent,i=(0,w.t0)(w.t1),w.t2=E,w.next=11,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 11:return w.t3=w.sent,h=(0,w.t2)(w.t3),l={type:"object",properties:{checkbox1:{title:"\u5C55\u793A\u66F4\u591A\u5185\u5BB9",type:"boolean"},select1:{title:"\u8BF7\u5047\u539F\u56E0",type:"string",enum:["a","b","c"],enumNames:["\u75C5\u5047","\u6709\u4E8B","\u5176\u5B83 (\u9700\u6CE8\u660E\u5177\u4F53\u539F\u56E0)"],hidden:"{{formData.checkbox1 !== true}}",widget:"radio"},input1:{title:"\u5177\u4F53\u539F\u56E0",type:"string",format:"textarea",hidden:'{{rootValue.checkbox1 !== true || formData.select1 !== "c"}}'}}},p=function(){var d=(0,h.useForm)();return i.default.createElement(h.default,{form:d,schema:l})},o=p,w.abrupt("return",o);case 17:case"end":return w.stop()}},j)}));function A(){return T.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo1;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo"}},"function-demo-1":{component:Object(W.dynamic)({loader:function(){var T=Object($.a)(y.a.mark(function j(){var f,i,h,b,E;return y.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return f=e("K+nK"),p.t0=f,p.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return p.t1=p.sent,i=(0,p.t0)(p.t1),p.t2=f,p.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(17)]).then(e.bind(null,"c2mQ"));case 9:return p.t3=p.sent,h=(0,p.t2)(p.t3),p.next=13,e.e(21).then(e.bind(null,"8iYR"));case 13:return b=p.sent,E=function(){return i.default.createElement(h.default,{schema:b.expression})},p.abrupt("return",E);case 16:case"end":return p.stop()}},j)}));function A(){return T.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { expression } from '../json/schema';

export default () => <FR schema={expression} />;`},"demo/FR.jsx":{import:"../demo/FR",content:Ee},"json/schema.js":{import:"../json/schema",content:cn}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo-1"}},"lifeCycle-demo":{component:Object(W.dynamic)({loader:function(){var T=Object($.a)(y.a.mark(function j(){var f,i,h,b,E,l,p,o,I;return y.a.wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return E=function(P,m){if(!m&&P&&P.__esModule)return P;if(P===null||typeof P!="object"&&typeof P!="function")return{default:P};var a=b(m);if(a&&a.has(P))return a.get(P);var t={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in P)if(c!=="default"&&Object.prototype.hasOwnProperty.call(P,c)){var v=r?Object.getOwnPropertyDescriptor(P,c):null;v&&(v.get||v.set)?Object.defineProperty(t,c,v):t[c]=P[c]}return t.default=P,a&&a.set(P,t),t},b=function(P){if(typeof WeakMap!="function")return null;var m=new WeakMap,a=new WeakMap;return(b=function(r){return r?a:m})(P)},C.t0=E,C.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return C.t1=C.sent,f=(0,C.t0)(C.t1),C.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(11)]).then(e.bind(null,"gdfu"));case 9:return i=C.sent,C.t2=E,C.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 13:return C.t3=C.sent,h=(0,C.t2)(C.t3),l=function(P){return new Promise(function(m){return setTimeout(m,P)})},p={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u9009\u62E9\u6846",description:"\u52A0\u8F7D\u4E2D...",type:"string",enum:[],widget:"radio"}}},o=function(){var P=(0,h.useForm)(),m=function(){P.setValues({input1:"hello world"}),l(3e3).then(function(t){P.setSchemaByPath("select1",{description:"",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]})})};return f.default.createElement(h.default,{form:P,schema:p,onMount:m})},I=o,C.abrupt("return",I);case 20:case"end":return C.stop()}},j)}));function A(){return T.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.6.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"lifeCycle-demo"}},"listDisplay-demo":{component:Object(W.dynamic)({loader:function(){var T=Object($.a)(y.a.mark(function j(){var f,i,h,b,E,l;return y.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.t2=f,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,h=(0,o.t2)(o.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},E=function(){return i.default.createElement(h.default,{schema:b})},l=E,o.abrupt("return",l);case 15:case"end":return o.stop()}},j)}));function A(){return T.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:ze}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo"}},"listDisplay-demo-1":{component:Object(W.dynamic)({loader:function(){var T=Object($.a)(y.a.mark(function j(){var f,i,h,b,E,l;return y.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.t2=f,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,h=(0,o.t2)(o.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},E=function(){return i.default.createElement(h.default,{schema:b})},l=E,o.abrupt("return",l);case 15:case"end":return o.stop()}},j)}));function A(){return T.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:ze}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-1"}},"listDisplay-demo-2":{component:Object(W.dynamic)({loader:function(){var T=Object($.a)(y.a.mark(function j(){var f,i,h,b,E,l;return y.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.t2=f,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,h=(0,o.t2)(o.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},E=function(){return i.default.createElement(h.default,{schema:b})},l=E,o.abrupt("return",l);case 15:case"end":return o.stop()}},j)}));function A(){return T.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:ze}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-2"}},"listDisplay-demo-3":{component:Object(W.dynamic)({loader:function(){var T=Object($.a)(y.a.mark(function j(){var f,i,h,b,E,l;return y.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.t2=f,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,h=(0,o.t2)(o.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",props:{hideMove:!0},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},E=function(){return i.default.createElement(h.default,{schema:b})},l=E,o.abrupt("return",l);case 15:case"end":return o.stop()}},j)}));function A(){return T.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:ze}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-3"}},"listDisplay-demo-4":{component:Object(W.dynamic)({loader:function(){var T=Object($.a)(y.a.mark(function j(){var f,i,h,b,E,l;return y.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.t2=f,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,h=(0,o.t2)(o.t3),window.hello=function(I){var w=I.value;console.log(w)},b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list4",itemProps:{buttons:[{callback:"hello",text:"\u590D\u5236"}]},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},E=function(){return i.default.createElement(h.default,{schema:b})},l=E,o.abrupt("return",l);case 16:case"end":return o.stop()}},j)}));function A(){return T.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:ze}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-4"}},"watch-demo":{component:Object(W.dynamic)({loader:function(){var T=Object($.a)(y.a.mark(function j(){var f,i,h,b,E,l,p,o;return y.a.wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return E=function(d,P){if(!P&&d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var m=b(P);if(m&&m.has(d))return m.get(d);var a={},t=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in d)if(r!=="default"&&Object.prototype.hasOwnProperty.call(d,r)){var c=t?Object.getOwnPropertyDescriptor(d,r):null;c&&(c.get||c.set)?Object.defineProperty(a,r,c):a[r]=d[r]}return a.default=d,m&&m.set(d,a),a},b=function(d){if(typeof WeakMap!="function")return null;var P=new WeakMap,m=new WeakMap;return(b=function(t){return t?m:P})(d)},w.t0=E,w.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return w.t1=w.sent,f=(0,w.t0)(w.t1),w.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(11)]).then(e.bind(null,"gdfu"));case 9:return i=w.sent,w.t2=E,w.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 13:return w.t3=w.sent,h=(0,w.t2)(w.t3),l={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"}}},p=function(){var d=(0,h.useForm)(),P={"#":function(a){console.log("\u8868\u5355\u7684\u65F6\u65F6\u6570\u636E\u4E3A\uFF1A",a)},input1:function(a){d.setValueByPath("input2",a)}};return f.default.createElement(h.default,{form:d,schema:l,watch:P})},o=p,w.abrupt("return",o);case 19:case"end":return w.stop()}},j)}));function A(){return T.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.6.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo"}},"watch-demo-1":{component:Object(W.dynamic)({loader:function(){var T=Object($.a)(y.a.mark(function j(){var f,i,h,b,E,l,p,o,I,w;return y.a.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return p=function(m,a){if(!a&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var t=l(a);if(t&&t.has(m))return t.get(m);var r={},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in m)if(v!=="default"&&Object.prototype.hasOwnProperty.call(m,v)){var R=c?Object.getOwnPropertyDescriptor(m,v):null;R&&(R.get||R.set)?Object.defineProperty(r,v,R):r[v]=m[v]}return r.default=m,t&&t.set(m,r),r},l=function(m){if(typeof WeakMap!="function")return null;var a=new WeakMap,t=new WeakMap;return(l=function(c){return c?t:a})(m)},f=e("K+nK"),d.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return d.t0=f,d.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return d.t1=d.sent,i=(0,d.t0)(d.t1),d.t2=p,d.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return d.t3=d.sent,h=(0,d.t2)(d.t3),d.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(11)]).then(e.bind(null,"gdfu"));case 17:return b=d.sent,d.t4=p,d.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 21:return d.t5=d.sent,E=(0,d.t4)(d.t5),o={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"radio"}}}}},I=function(){var m=(0,E.useForm)(),a=function(c,v){v.length>0?alert("errorFields:"+JSON.stringify(v)):alert("formData:"+JSON.stringify(c,null,2))},t={input1:function(c){c.length>2?m.setSchemaByPath("obj1.select",function(v){var R=v.enumNames;return{enumNames:R.map(function(B){return B+"a"})}}):m.setSchemaByPath("obj1.select",{enumNames:["\u65E9","\u4E2D","\u665A"]})}};return h.default.createElement("div",null,h.default.createElement(E.default,{form:m,schema:o,onFinish:a,watch:t}),h.default.createElement(i.default,{type:"",style:{marginRight:8},onClick:function(){return m.setSchemaByPath("input2",{title:"\u7F16\u8F91\u6846",format:"textarea"})}},"\u5C06 input \u6539\u4E3A textarea"),h.default.createElement(i.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4"))},w=I,d.abrupt("return",w);case 27:case"end":return d.stop()}},j)}));function A(){return T.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo-1"}},"widget-demo":{component:Object(W.dynamic)({loader:function(){var T=Object($.a)(y.a.mark(function j(){var f,i,h,b,E,l,p,o,I,w,C,d,P;return y.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return I=function(r,c){if(!c&&r&&r.__esModule)return r;if(r===null||typeof r!="object"&&typeof r!="function")return{default:r};var v=o(c);if(v&&v.has(r))return v.get(r);var R={},B=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var M in r)if(M!=="default"&&Object.prototype.hasOwnProperty.call(r,M)){var J=B?Object.getOwnPropertyDescriptor(r,M):null;J&&(J.get||J.set)?Object.defineProperty(R,M,J):R[M]=r[M]}return R.default=r,v&&v.set(r,R),R},o=function(r){if(typeof WeakMap!="function")return null;var c=new WeakMap,v=new WeakMap;return(o=function(B){return B?v:c})(r)},f=e("K+nK"),a.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return a.t0=f,a.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return a.t1=a.sent,i=(0,a.t0)(a.t1),a.next=12,Promise.all([e.e(3),e.e(19)]).then(e.t.bind(null,"cUip",7));case 12:return a.t2=f,a.next=15,Promise.all([e.e(0),e.e(8),e.e(18),e.e(20)]).then(e.t.bind(null,"iJl9",7));case 15:return a.t3=a.sent,h=(0,a.t2)(a.t3),a.t4=f,a.next=20,e.e(86).then(e.bind(null,"0Owb"));case 20:return a.t5=a.sent,b=(0,a.t4)(a.t5),a.t6=f,a.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return a.t7=a.sent,E=(0,a.t6)(a.t7),a.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(11)]).then(e.bind(null,"gdfu"));case 29:return l=a.sent,a.t8=I,a.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 33:return a.t9=a.sent,p=(0,a.t8)(a.t9),w={type:"object",properties:{string:{title:"\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6",type:"string",widget:"site"},select:{title:"\u5355\u9009",type:"number",enum:[1,2,3],enumNames:["\u9009\u98791","\u9009\u98792","\u9009\u98793"]}}},C=function(r){return console.log("widget props:",r),E.default.createElement(h.default,(0,b.default)({addonBefore:"https://",addonAfter:".com"},r))},d=function(){var r=(0,p.useForm)();return E.default.createElement("div",null,E.default.createElement(p.default,{form:r,schema:w,widgets:{site:C},onFinish:function(v){return alert(JSON.stringify(v,null,2))}}),E.default.createElement(i.default,{type:"primary",onClick:r.submit},"\u63D0\u4EA4"))},P=d,a.abrupt("return",P);case 40:case"end":return a.stop()}},j)}));function A(){return T.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.1"},"react-dom":{version:">=16.8.0"}},identifier:"widget-demo"}},"measure-demo":{component:Object(W.dynamic)({loader:function(){var T=Object($.a)(y.a.mark(function j(){var f,i,h,b,E,l,p,o,I,w;return y.a.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return o=function(m,a){if(!a&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var t=p(a);if(t&&t.has(m))return t.get(m);var r={},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in m)if(v!=="default"&&Object.prototype.hasOwnProperty.call(m,v)){var R=c?Object.getOwnPropertyDescriptor(m,v):null;R&&(R.get||R.set)?Object.defineProperty(r,v,R):r[v]=m[v]}return r.default=m,t&&t.set(m,r),r},p=function(m){if(typeof WeakMap!="function")return null;var a=new WeakMap,t=new WeakMap;return(p=function(c){return c?t:a})(m)},f=e("K+nK"),d.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return d.t0=f,d.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return d.t1=d.sent,i=(0,d.t0)(d.t1),d.next=12,e.e(15).then(e.t.bind(null,"tL+A",7));case 12:return d.t2=f,d.next=15,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 15:return d.t3=d.sent,h=(0,d.t2)(d.t3),d.t4=o,d.next=20,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 20:return d.t5=d.sent,b=(0,d.t4)(d.t5),d.next=24,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(11)]).then(e.bind(null,"gdfu"));case 24:return E=d.sent,d.t6=o,d.next=28,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 28:return d.t7=d.sent,l=(0,d.t6)(d.t7),I=function(){var m=(0,l.useForm)({logOnMount:function(c){console.log("onMount",c)},logOnSubmit:function(c){console.log("onSubmit",c)}}),a={type:"object",properties:{input1:{title:"\u8F93\u5165\u6846",required:!0,type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u5DE6","\u4E2D","\u53F3"],widget:"radio"}}},t=function(c,v){v.length>0?h.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(v.map(function(R){return R.name}))):h.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")};return b.default.createElement("div",null,b.default.createElement(l.default,{id:"my-demo-form",form:m,schema:a,onFinish:t}),b.default.createElement(i.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},w=I,d.abrupt("return",w);case 33:case"end":return d.stop()}},j)}));function A(){return T.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"measure-demo"}},"migrate-demo":{component:Object(W.dynamic)({loader:function(){var T=Object($.a)(y.a.mark(function j(){var f,i,h,b,E,l,p,o;return y.a.wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return p=function(){var d=(0,h.useForm)(),P=function(a,t){t.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(t))):alert(JSON.stringify(a))};return i.default.createElement("div",null,i.default.createElement(h.default,{form:d,schema:l,onFinish:P}),i.default.createElement("button",{onClick:d.submit},"\u63D0\u4EA4"))},E=function(d,P){if(!P&&d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var m=b(P);if(m&&m.has(d))return m.get(d);var a={},t=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in d)if(r!=="default"&&Object.prototype.hasOwnProperty.call(d,r)){var c=t?Object.getOwnPropertyDescriptor(d,r):null;c&&(c.get||c.set)?Object.defineProperty(a,r,c):a[r]=d[r]}return a.default=d,m&&m.set(d,a),a},b=function(d){if(typeof WeakMap!="function")return null;var P=new WeakMap,m=new WeakMap;return(b=function(t){return t?m:P})(d)},f=e("K+nK"),w.t0=f,w.next=7,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 7:return w.t1=w.sent,i=(0,w.t0)(w.t1),w.t2=E,w.next=12,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 12:return w.t3=w.sent,h=(0,w.t2)(w.t3),l={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}},o=p,w.abrupt("return",o);case 17:case"end":return w.stop()}},j)}));function A(){return T.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate-demo"}},"migrate-demo-1":{component:Object(W.dynamic)({loader:function(){var T=Object($.a)(y.a.mark(function j(){var f,i,h,b,E,l,p,o,I,w,C,d,P;return y.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return I=function(r,c){if(!c&&r&&r.__esModule)return r;if(r===null||typeof r!="object"&&typeof r!="function")return{default:r};var v=o(c);if(v&&v.has(r))return v.get(r);var R={},B=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var M in r)if(M!=="default"&&Object.prototype.hasOwnProperty.call(r,M)){var J=B?Object.getOwnPropertyDescriptor(r,M):null;J&&(J.get||J.set)?Object.defineProperty(R,M,J):R[M]=r[M]}return R.default=r,v&&v.set(r,R),R},o=function(r){if(typeof WeakMap!="function")return null;var c=new WeakMap,v=new WeakMap;return(o=function(B){return B?v:c})(r)},f=e("K+nK"),a.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return a.t0=f,a.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return a.t1=a.sent,i=(0,a.t0)(a.t1),a.t2=f,a.next=13,Promise.resolve().then(e.bind(null,"tJVT"));case 13:return a.t3=a.sent,h=(0,a.t2)(a.t3),a.next=17,Promise.all([e.e(3),e.e(19)]).then(e.t.bind(null,"cUip",7));case 17:return a.t4=f,a.next=20,Promise.all([e.e(0),e.e(8),e.e(18),e.e(20)]).then(e.t.bind(null,"iJl9",7));case 20:return a.t5=a.sent,b=(0,a.t4)(a.t5),a.t6=I,a.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return a.t7=a.sent,E=(0,a.t6)(a.t7),a.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(11)]).then(e.bind(null,"gdfu"));case 29:return l=a.sent,a.next=32,Promise.all([e.e(22),e.e(25)]).then(e.bind(null,"7t+U"));case 32:return p=a.sent,w=b.default.TextArea,C={type:"object",properties:{number:{title:"\u6570\u5B57\u8F93\u5165\u6846",type:"number","ui:disabled":!0},checkbox:{title:"\u662F\u5426\u9009\u62E9",type:"boolean","ui:widget":"switch"}},required:["number"]},d=function(){var r=(0,E.useState)(JSON.stringify(C)),c=(0,h.default)(r,2),v=c[0],R=c[1],B=(0,E.useState)({}),M=(0,h.default)(B,2),J=M[0],Le=M[1],nn=function(){try{var An=(0,p.updateSchemaToNewVersion)(JSON.parse(v));Le(An)}catch(Hn){console.log(Hn)}},ln=function(An){R(An.target.value)},Tn=function(){R(JSON.stringify(JSON.parse(v),null,2))};return E.default.createElement("div",null,E.default.createElement("div",null,"\u586B\u5165\u65E7\u7248schema\uFF1A"),E.default.createElement(w,{style:{minHeight:400,marginTop:12,marginBottom:12},value:v,onChange:ln}),E.default.createElement(i.default,{style:{marginRight:12},onClick:Tn},"\u683C\u5F0F\u5316\u65E7schema"),E.default.createElement(i.default,{type:"primary",onClick:nn},"\u751F\u6210\u65B0\u7248schema"),E.default.createElement(w,{style:{minHeight:400,marginTop:12},value:JSON.stringify(J,null,2)}))},P=d,a.abrupt("return",P);case 38:case"end":return a.stop()}},j)}));function A(){return T.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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

export default Translator;`},"packages/form-render/src/utils.js":{import:"../../packages/form-render/src/utils.js",content:V}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"},"lodash-es":{version:"4.17.21"}},identifier:"migrate-demo-1"}},"migrate2-demo":{component:Object(W.dynamic)({loader:function(){var T=Object($.a)(y.a.mark(function j(){var f,i,h,b,E,l,p,o,I;return y.a.wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return o=function(){var P=(0,h.useState)({}),m=(0,i.default)(P,2),a=m[0],t=m[1],r=(0,h.useState)([]),c=(0,i.default)(r,2),v=c[0],R=c[1],B=(0,h.useState)(!1),M=(0,i.default)(B,2),J=M[0],Le=M[1],nn=(0,b.useForm)({formData:a,onChange:t,onValidate:R,showValidate:J});(0,h.useEffect)(function(){nn.init()},[]);var ln=function(){Le(!0),v.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(v))):alert(JSON.stringify(a))};return h.default.createElement("div",null,h.default.createElement(b.default,{form:nn,schema:p}),h.default.createElement("button",{onClick:ln},"\u63D0\u4EA4"))},l=function(P,m){if(!m&&P&&P.__esModule)return P;if(P===null||typeof P!="object"&&typeof P!="function")return{default:P};var a=E(m);if(a&&a.has(P))return a.get(P);var t={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in P)if(c!=="default"&&Object.prototype.hasOwnProperty.call(P,c)){var v=r?Object.getOwnPropertyDescriptor(P,c):null;v&&(v.get||v.set)?Object.defineProperty(t,c,v):t[c]=P[c]}return t.default=P,a&&a.set(P,t),t},E=function(P){if(typeof WeakMap!="function")return null;var m=new WeakMap,a=new WeakMap;return(E=function(r){return r?a:m})(P)},f=e("K+nK"),C.t0=f,C.next=7,Promise.resolve().then(e.bind(null,"tJVT"));case 7:return C.t1=C.sent,i=(0,C.t0)(C.t1),C.t2=l,C.next=12,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 12:return C.t3=C.sent,h=(0,C.t2)(C.t3),C.t4=l,C.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 17:return C.t5=C.sent,b=(0,C.t4)(C.t5),p={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}},I=o,C.abrupt("return",I);case 22:case"end":return C.stop()}},j)}));function A(){return T.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
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
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate2-demo"}},"schema-demo":{component:Object(W.dynamic)({loader:function(){var T=Object($.a)(y.a.mark(function j(){var f,i,h,b,E;return y.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return f=e("K+nK"),p.t0=f,p.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return p.t1=p.sent,i=(0,p.t0)(p.t1),p.t2=f,p.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(17)]).then(e.bind(null,"c2mQ"));case 9:return p.t3=p.sent,h=(0,p.t2)(p.t3),p.next=13,e.e(21).then(e.bind(null,"8iYR"));case 13:return b=p.sent,E=function(){return i.default.createElement(h.default,{schema:b.basic})},p.abrupt("return",E);case 16:case"end":return p.stop()}},j)}));function A(){return T.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { basic } from '../json/schema';

export default () => <FR schema={basic} />;`},"demo/FR.jsx":{import:"../demo/FR",content:Ee},"json/schema.js":{import:"../json/schema",content:cn}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo"}},"schema-demo-1":{component:Object(W.dynamic)({loader:function(){var T=Object($.a)(y.a.mark(function j(){var f,i,h,b,E;return y.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return f=e("K+nK"),p.t0=f,p.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return p.t1=p.sent,i=(0,p.t0)(p.t1),p.t2=f,p.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(17)]).then(e.bind(null,"c2mQ"));case 9:return p.t3=p.sent,h=(0,p.t2)(p.t3),p.next=13,e.e(21).then(e.bind(null,"8iYR"));case 13:return b=p.sent,E=function(){return i.default.createElement(h.default,{schema:b.titleTrick})},p.abrupt("return",E);case 16:case"end":return p.stop()}},j)}));function A(){return T.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { titleTrick } from '../json/schema';

export default () => <FR schema={titleTrick} />;`},"demo/FR.jsx":{import:"../demo/FR",content:Ee},"json/schema.js":{import:"../json/schema",content:cn}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo-1"}},"docs-playground":{component:Object(W.dynamic)({loader:function(){var T=Object($.a)(y.a.mark(function j(){return y.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"BASV"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},j)}));function A(){return T.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:jn},"main.js":{import:"./main",content:vn},"json/simplest.json":{import:"./json/simplest.json",content:sn},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:xe},"monaco/index.js":{import:"./monaco",content:wn},"theme.css":{import:"./theme.css",content:Pn},"index.css":{import:"./index.css",content:gn}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:"^16.0.0"},"react-dom":{version:"^16.0.0"},"deep-equal":{version:"2.0.5"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.6.1"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-simple-code-editor":{version:"0.11.0"},prismjs:{version:"1.23.0"}},identifier:"docs-playground"}},"docs-playground1":{component:Object(W.dynamic)({loader:function(){var T=Object($.a)(y.a.mark(function j(){return y.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"Wrpt"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},j)}));function A(){return T.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:Pe},"main.js":{import:"./main",content:nt},"json/simplest.json":{import:"./json/simplest.json",content:Bn},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:tt},"monaco/index.js":{import:"./monaco",content:dt},"suggestionsMap.js":{import:"./suggestionsMap",content:at},"index.css":{import:"./index.css",content:ct}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:"^17.x"},"react-dom":{version:">=16.9.0"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.6.1"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-monaco-editor":{version:"0.44.0"},"@types/react":{version:"^17.x"}},identifier:"docs-playground1"}},"table-render-advanced":{component:Object(W.dynamic)({loader:function(){var T=Object($.a)(y.a.mark(function j(){return y.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"7ZP+"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},j)}));function A(){return T.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{tsx:Mn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.3"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!0,identifier:"table-render-advanced"}},"table-render-nosearch":{component:Object(W.dynamic)({loader:function(){var T=Object($.a)(y.a.mark(function j(){return y.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"CfUQ"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},j)}));function A(){return T.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{tsx:rt}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.3"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!0,identifier:"table-render-nosearch"}},"table-render-notitle":{component:Object(W.dynamic)({loader:function(){var T=Object($.a)(y.a.mark(function j(){return y.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"/usH"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},j)}));function A(){return T.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{tsx:Vn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.3"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!0,identifier:"table-render-notitle"}},"table-render-paramtable":{component:Object(W.dynamic)({loader:function(){var T=Object($.a)(y.a.mark(function j(){return y.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"48jF"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},j)}));function A(){return T.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{tsx:mt}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.3"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},umi:{version:"3.4.19"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!0,identifier:"table-render-paramtable"}},"table-render-demo":{component:Object(W.dynamic)({loader:function(){var T=Object($.a)(y.a.mark(function j(){var f,i,h,b,E,l,p,o,I;return y.a.wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return f=e("K+nK"),C.t0=f,C.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return C.t1=C.sent,i=(0,C.t0)(C.t1),C.next=8,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(71)]).then(e.bind(null,"P2DI"));case 8:for(h=C.sent,b=[],E=0;E<6;E++)b.push({id:E.toString(),title:"\u6807\u9898".concat(E+1),created_at:new Date().getTime()});return l={type:"object",properties:{string:{title:"\u6807\u9898",type:"string",width:"30%"},created_at:{title:"\u521B\u5EFA\u65F6\u95F4",type:"string",format:"date",width:"30%"}}},p=[{title:"\u6807\u9898",dataIndex:"title"},{title:"\u521B\u5EFA\u65F6\u95F4",key:"since",dataIndex:"created_at",valueType:"date"},{title:"\u64CD\u4F5C",render:function(P,m){return i.default.createElement("a",{onClick:function(){return alert(P.title)}},"\u7F16\u8F91")}}],o=function(){var P=function(){return{rows:b,total:b.length}};return i.default.createElement(i.default.Fragment,null,i.default.createElement(h.Search,{schema:l,api:P}),i.default.createElement(h.Table,{headerTitle:"\u6700\u7B80\u8868\u683C",columns:p,rowKey:"id"}))},I=(0,h.withTable)(o),C.abrupt("return",I);case 16:case"end":return C.stop()}},j)}));function A(){return T.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default withTable(Wrapper);`}},dependencies:{react:{version:">=16.8.0"},"table-render":{version:"1.1.3"},antd:{version:"4.x",css:"antd/dist/antd.css"}},transform:!0,defaultShowCode:!0,identifier:"table-render-demo"}},"generator-demo":{component:Object(W.dynamic)({loader:function(){var T=Object($.a)(y.a.mark(function j(){var f,i,h,b,E,l;return y.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.t2=f,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(70)]).then(e.bind(null,"nYSz"));case 9:return o.t3=o.sent,h=(0,o.t2)(o.t3),b={type:"object",properties:{inputName:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string"}}},E=function(){return i.default.createElement("div",{style:{height:"80vh"}},i.default.createElement(h.default,{defaultValue:b}))},l=E,o.abrupt("return",l);case 15:case"end":return o.stop()}},j)}));function A(){return T.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.4.6"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"generator-demo"}},"generator-modal":{component:Object(W.dynamic)({loader:function(){var T=Object($.a)(y.a.mark(function j(){return y.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"PPgD"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},j)}));function A(){return T.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:Kn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.4.6"},"react-dom":{version:">=16.9.0"}},identifier:"generator-modal"}},"generator-settings":{component:Object(W.dynamic)({loader:function(){var T=Object($.a)(y.a.mark(function j(){return y.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"M63W"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},j)}));function A(){return T.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:Wn}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.4.6"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-settings"}},"generator-layout":{component:Object(W.dynamic)({loader:function(){var T=Object($.a)(y.a.mark(function j(){return y.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"SOdT"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},j)}));function A(){return T.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:Jn},"index.less":{import:"./index.less",content:zn}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.4.6"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-layout"}},"generator-transformer":{component:Object(W.dynamic)({loader:function(){var T=Object($.a)(y.a.mark(function j(){return y.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"jktF"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},j)}));function A(){return T.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:xn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.4.6"},"react-dom":{version:">=16.9.0"}},identifier:"generator-transformer"}},"generator-playground":{component:Object(W.dynamic)({loader:function(){var T=Object($.a)(y.a.mark(function j(){return y.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"TYW4"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},j)}));function A(){return T.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:st},"index.less":{import:"./index.less",content:zn}},dependencies:{react:{version:">=16.8.0"},umi:{version:"3.4.19"},"fr-generator":{version:"2.4.6"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-playground"}}}},PbZa:function(Dn,dn,e){"use strict";e.r(dn);var $=e("q1tI"),n=e.n($),y=e("dEAq"),W=e.n(y),oe=e("0zqC"),V=e("ZpkN"),rn=e("JjdP"),Oe=n.a.memo(rn.default["table-render-demo"].component);dn.default=de=>(n.a.useEffect(()=>{de!=null&&de.location.hash&&y.AnchorLink.scrollToAnchor(decodeURIComponent(de.location.hash.slice(1)))},[]),n.a.createElement(n.a.Fragment,null,n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"markdown"},n.a.createElement("div",{style:{display:"flex",alignItems:"center",marginBottom:"24px"}},n.a.createElement("img",{src:"https://img.alicdn.com/tfs/TB17UtINiLaK1RjSZFxXXamPFXa-606-643.png",alt:"logo",width:"48px"}),n.a.createElement("span",{style:{fontSize:"30px",fontWeight:"600",display:"inline-block",marginLeft:"12px"}},"TableRender")),n.a.createElement("p",{style:{display:"flex",justifyContent:"space-between",width:"440px"}},n.a.createElement(y.Link,{to:"https://www.npmjs.com/package/table-render?_blank"},n.a.createElement("img",{alt:"npm",src:"https://img.shields.io/npm/v/table-render.svg?maxAge=3600&style=flat-square"})),n.a.createElement(y.Link,{to:"https://npmjs.org/package/table-render"},n.a.createElement("img",{alt:"NPM downloads",src:"https://img.shields.io/npm/dm/table-render.svg?style=flat-square"})),n.a.createElement(y.Link,{to:"https://npmjs.org/package/table-render"},n.a.createElement("img",{alt:"NPM all downloads",src:"https://img.shields.io/npm/dt/table-render.svg?style=flat-square"})),n.a.createElement("a",null,n.a.createElement("img",{alt:"PRs Welcome",src:"https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square"}))),n.a.createElement("blockquote",null,n.a.createElement("p",null,"\u6613\u7528\u4E14\u8F7B\u91CF\u7684\u4E2D\u540E\u53F0",n.a.createElement("strong",null,"\u5217\u8868\u89E3\u51B3\u65B9\u6848"),"\uFF0C\u5E38\u7528\u4E8E",n.a.createElement("strong",null,"\u641C\u7D22\u5217\u8868\u9875"),"\u5FEB\u901F\u751F\u6210")),n.a.createElement("h2",{id:"\u4F18\u52BF"},n.a.createElement(y.AnchorLink,{to:"#\u4F18\u52BF","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u4F18\u52BF"),n.a.createElement("ol",null,n.a.createElement("li",null,n.a.createElement("strong",null,"\u771F\u6B63\u5F00\u7BB1\u5373\u7528"),"\uFF1A\u4EE5\u6700\u7B80\u5355\u7684 API \u914D\u7F6E\u8BF7\u6C42\u548C\u8868\u5934\u7684\u5B57\u6BB5\uFF0C\u5C31\u80FD\u751F\u6210\u4E00\u4E2A\u597D\u7528\u641C\u7D22\u5217\u8868\u3002"),n.a.createElement("li",null,n.a.createElement("strong",null,"XRender \u751F\u6001"),"\uFF1A\u641C\u7D22\u7B5B\u9009\u80FD\u529B\u7528 FormRender \u6765\u63D0\u4F9B\uFF0C\u4EE5\u6700\u5C0F\u6210\u672C\u5FEB\u901F\u751F\u6210\u4E0A\u4FA7\u641C\u7D22\u9762\u677F\u3002"),n.a.createElement("li",null,n.a.createElement("strong",null,"\u65E0\u7F1D\u4E60\u60EF\u4F7F\u7528"),"\uFF1A\u8868\u683C\u80FD\u7528 Ant Design Table \u6765\u63D0\u4F9B\uFF0C\u964D\u4F4E\u7528\u6237\u4F7F\u7528\u6210\u672C\u3002")),n.a.createElement("h2",{id:"\u4F55\u65F6\u4F7F\u7528"},n.a.createElement(y.AnchorLink,{to:"#\u4F55\u65F6\u4F7F\u7528","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u4F55\u65F6\u4F7F\u7528"),n.a.createElement("ol",null,n.a.createElement("li",null,"\u7528\u4E8E\u67E5\u770B\u548C\u5904\u7406\u591A\u6761\u7ED3\u6784\u7C7B\u4F3C\u7684\u6570\u636E\uFF0C\u53EF\u5BF9\u6570\u636E\u8FDB\u884C\u6392\u5E8F\u3001\u7B5B\u9009\u3001\u5BF9\u6BD4\u6216\u5176\u4ED6\u81EA\u5B9A\u4E49\u64CD\u4F5C\uFF0C\u5E38\u6709\u5BFC\u822A\u5230\u8BE6\u60C5\u9875\u9762\u7684\u4F5C\u7528\u3002"),n.a.createElement("li",null,"\u8868\u683C\u5217\u8868\u5EFA\u8BAE\u5C06\u91CD\u8981\u4FE1\u606F\u548C\u64CD\u4F5C\u5C55\u793A\u51FA\u6765\uFF0C\u4E0D\u91CD\u8981\u4FE1\u606F\u76F4\u63A5\u6536\u8D77\uFF0C\u53EF\u4EE5\u5E2E\u52A9\u7528\u6237\u66F4\u9AD8\u6548\u7684\u67E5\u770B\u3001\u5904\u7406\u3001\u67E5\u627E\u6570\u636E\u3002")),n.a.createElement("h2",{id:"\u5982\u4F55\u4F7F\u7528"},n.a.createElement(y.AnchorLink,{to:"#\u5982\u4F55\u4F7F\u7528","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u5982\u4F55\u4F7F\u7528"),n.a.createElement("h3",{id:"\u5B89\u88C5"},n.a.createElement(y.AnchorLink,{to:"#\u5B89\u88C5","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u5B89\u88C5"),n.a.createElement("p",null,"table-render \u4F9D\u8D56 ant design\uFF0C\u5355\u72EC\u4F7F\u7528\u4E0D\u8981\u5FD8\u8BB0\u5B89\u88C5\uFF5E"),n.a.createElement(V.a,{code:"npm i table-render --save",lang:"sh"}),n.a.createElement("h3",{id:"\u4EE3\u7801\u6F14\u793A"},n.a.createElement(y.AnchorLink,{to:"#\u4EE3\u7801\u6F14\u793A","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u4EE3\u7801\u6F14\u793A")),n.a.createElement(oe.default,rn.default["table-render-demo"].previewerProps,n.a.createElement(Oe,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h2",{id:"api"},n.a.createElement(y.AnchorLink,{to:"#api","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"API"),n.a.createElement("h3",{id:"withtable"},n.a.createElement(y.AnchorLink,{to:"#withtable","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),n.a.createElement("code",null,"withTable")),n.a.createElement("p",null,"TableRender \u7684\u4E66\u5199\u80FD\u591F\u5F88\u7B80\u6D01\uFF0C\u5728\u5E95\u5C42\u4F7F\u7528\u4E86 Context\uFF0CwithTable \u5219\u662F Context Provider \u9AD8\u9636\u7EC4\u4EF6\u5F62\u5F0F\u7684\u8BED\u6CD5\u7CD6\u3002\u4E66\u5199\u4E0A\u7528\u6237\u4E0D\u518D\u9700\u8981\u989D\u5916\u6DFB\u52A0 Provider \u5305\u88F9\u8868\u683C\u7EC4\u4EF6\uFF0C\u6240\u6709\u8868\u683C\u4EE3\u7801\u901A\u8FC7 ",n.a.createElement("code",null,"withTable")," \u5305\u4E00\u4E0B\u5373\u53EF\uFF1A"),n.a.createElement("p",null,"\u4F7F\u7528 withTable \u7684\u5199\u6CD5"),n.a.createElement(V.a,{code:`import { withTable\uFF0CuseTable } from 'table-render';

const Page = () => {
  const { refresh } = useTable();
}

export default withTable(Page)`,lang:"js"}),n.a.createElement("h3",{id:"search-\u53C2\u6570"},n.a.createElement(y.AnchorLink,{to:"#search-\u53C2\u6570","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),n.a.createElement("code",null,"<Search>")," \u53C2\u6570"),n.a.createElement("p",null,n.a.createElement("strong",null,"\u6211\u4EEC\u5C06\u641C\u7D22\u76F8\u5173\u7684\u80FD\u529B\u653E\u5230 ",n.a.createElement("code",null,"<Search>")," \u4E0A\u9762\u914D\u7F6E\uFF0C\u5305\u62EC\u5BF9\u5E94\u7684\u641C\u7D22\u7B5B\u9009\u8868\u5355\u7684\u6E32\u67D3")),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u5C5E\u6027"),n.a.createElement("th",null,"\u63CF\u8FF0"),n.a.createElement("th",null,"\u7C7B\u578B"),n.a.createElement("th",null,"\u9ED8\u8BA4\u503C"),n.a.createElement("th",null,"\u5FC5\u586B"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"schema"),n.a.createElement("td",null,"\u7528\u4E8E\u6E32\u67D3\u8868\u5355\u7684 schema\uFF0C\u5177\u4F53\u7684 api \u53C2\u8003 ",n.a.createElement(y.Link,{to:"/form-render/config/schema"},"form-render \u6587\u6863")),n.a.createElement("td",null,n.a.createElement("code",null,"object")),n.a.createElement("td",null,"-"),n.a.createElement("td",null,"\u662F")),n.a.createElement("tr",null,n.a.createElement("td",null,"api"),n.a.createElement("td",null,"\u521D\u59CB\u5316&\u70B9\u51FB\u67E5\u8BE2\u65F6\u6267\u884C\u7684\u51FD\u6570"),n.a.createElement("td",null,n.a.createElement("code",null,"Function")," or ",n.a.createElement("code",null,"Array")),n.a.createElement("td",null,"-"),n.a.createElement("td",null,"\u662F")),n.a.createElement("tr",null,n.a.createElement("td",null,"onSearch"),n.a.createElement("td",null,"\u5728\u8868\u683C\u67E5\u8BE2\u65F6\u6267\u884C\u4E00\u4E9B\u989D\u5916\u7684\u64CD\u4F5C"),n.a.createElement("td",null,n.a.createElement("code",null,"Function")),n.a.createElement("td",null,"-"),n.a.createElement("td",null,"\u5426")),n.a.createElement("tr",null,n.a.createElement("td",null,"afterSearch"),n.a.createElement("td",null,"\u5728\u8868\u683C\u67E5\u8BE2\u7ED3\u675F\u540E\u6267\u884C\u4E00\u4E9B\u989D\u5916\u7684\u64CD\u4F5C"),n.a.createElement("td",null,n.a.createElement("code",null,"Function")),n.a.createElement("td",null,"-"),n.a.createElement("td",null,"\u5426")),n.a.createElement("tr",null,n.a.createElement("td",null,"searchOnMount"),n.a.createElement("td",null,"\u7EC4\u4EF6\u521D\u6B21\u6302\u8F7D\u65F6\uFF0C\u662F\u5426\u9ED8\u8BA4\u6267\u884C\u67E5\u8BE2\u52A8\u4F5C"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"true")),n.a.createElement("td",null,"\u5426")),n.a.createElement("tr",null,n.a.createElement("td",null,"hidden"),n.a.createElement("td",null,"\u662F\u5426\u9690\u85CF",n.a.createElement("code",null,"<Search />"),"\u7EC4\u4EF6"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"false")),n.a.createElement("td",null,"\u5426")),n.a.createElement("tr",null,n.a.createElement("td",null,"searchBtnRender"),n.a.createElement("td",null,"\u81EA\u5B9A\u4E49\u8868\u5355\u67E5\u8BE2\u6309\u94AE"),n.a.createElement("td",null,n.a.createElement("code",null,"(refresh,clearSearch) => ReactNode[]")),n.a.createElement("td",null,"-"),n.a.createElement("td",null,"\u5426")),n.a.createElement("tr",null,n.a.createElement("td",null,"searchBtnStyle"),n.a.createElement("td",null,"\u81EA\u5B9A\u4E49\u8868\u5355\u64CD\u4F5C\u6309\u94AE\u7EC4\u7684\u6837\u5F0F"),n.a.createElement("td",null,n.a.createElement("code",null,"React.CSSProperties")),n.a.createElement("td",null,"{","}"),n.a.createElement("td",null,"\u5426")),n.a.createElement("tr",null,n.a.createElement("td",null,"searchBtnClassName"),n.a.createElement("td",null,"\u81EA\u5B9A\u4E49\u8868\u5355\u64CD\u4F5C\u6309\u94AE\u7EC4\u7684 ClassName"),n.a.createElement("td",null,n.a.createElement("code",null,"string")),n.a.createElement("td",null,"''"),n.a.createElement("td",null,"\u5426")),n.a.createElement("tr",null,n.a.createElement("td",null,"debug"),n.a.createElement("td",null,"\u5F00\u542F debug \u6A21\u5F0F\uFF0C\u65F6\u65F6\u663E\u793A\u5185\u90E8\u72B6\u6001\uFF0C",n.a.createElement("strong",null,"\u5F00\u53D1\u7684\u65F6\u5019\u5F3A\u70C8\u5EFA\u8BAE\u6253\u5F00")),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"false")),n.a.createElement("td",null,"\u5426")))),n.a.createElement("h3",{id:"table-\u53C2\u6570"},n.a.createElement(y.AnchorLink,{to:"#table-\u53C2\u6570","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),n.a.createElement("code",null,"<Table>")," \u53C2\u6570"),n.a.createElement("p",null,n.a.createElement("strong",null,"\u652F\u6301\u6240\u6709 antd table \u7684 props\uFF0C\u4F46\u662F",n.a.createElement("code",null,"dataSource"),", ",n.a.createElement("code",null,"loading"),", ",n.a.createElement("code",null,"pagination"),"\u8FD9\u51E0\u4E2A\u53C2\u6570\u662F\u5185\u90E8\u72B6\u6001\uFF0C\u4E0D\u9700\u8981\u586B\u5199\uFF0C\u6700\u57FA\u672C\u7684\u4F7F\u7528\u5C31\u9700\u8981\u586B\u5199",n.a.createElement("code",null,"columns"))),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u5C5E\u6027"),n.a.createElement("th",null,"\u63CF\u8FF0"),n.a.createElement("th",null,"\u7C7B\u578B"),n.a.createElement("th",null,"\u9ED8\u8BA4\u503C"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"headerTitle"),n.a.createElement("td",null,"\u8868\u683C\u6807\u9898"),n.a.createElement("td",null,n.a.createElement("code",null,"string")),n.a.createElement("td",null,n.a.createElement("code",null,"ReactNode"))),n.a.createElement("tr",null,n.a.createElement("td",null,"toolbarRender"),n.a.createElement("td",null,"\u8868\u683C\u4E3B\u4F53\u53F3\u4E0A\u65B9\u7684\u63A7\u4EF6\uFF0C\u4F8B\u5982\u201C\u6DFB\u52A0\u201D\u6309\u94AE"),n.a.createElement("td",null,n.a.createElement("code",null,"() => ReactNode[]")),n.a.createElement("td",null,n.a.createElement("code",null,"false"))),n.a.createElement("tr",null,n.a.createElement("td",null,"toolbarAction"),n.a.createElement("td",null,"\u663E\u793A\u5728\u8868\u683C\u4E3B\u4F53\u53F3\u4E0A\u65B9\u7684 Icon \u5217\u8868\uFF0C\u5185\u7F6E\u4E86",n.a.createElement("code",null,"\u5237\u65B0\u3001\u8C03\u6574\u5BC6\u5EA6\u3001\u5168\u5C4F\u663E\u793A")," \u7B49\u529F\u80FD"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"false"))),n.a.createElement("tr",null,n.a.createElement("td",null,"pageChangeWithRequest"),n.a.createElement("td",null,"\u5207\u6362\u5206\u9875\u65F6\u662F\u5426\u9700\u8981\u8BF7\u6C42\u63A5\u53E3"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"true"))),n.a.createElement("tr",null,n.a.createElement("td",null,"columns"),n.a.createElement("td",null,"\u5217\u5B9A\u4E49"),n.a.createElement("td",null,n.a.createElement("code",null,"object")),n.a.createElement("td",null,n.a.createElement("code",null,"false"))),n.a.createElement("tr",null,n.a.createElement("td",null,"debug"),n.a.createElement("td",null,"\u5F00\u542F debug \u6A21\u5F0F\uFF0C\u65F6\u65F6\u663E\u793A\u5185\u90E8\u72B6\u6001\uFF0C",n.a.createElement("strong",null,"\u5F00\u53D1\u7684\u65F6\u5019\u5F3A\u70C8\u5EFA\u8BAE\u6253\u5F00")),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"false"))))),n.a.createElement("h4",{id:"table-\u53C2\u6570-\u4E2D-columns-\u5217\u5B9A\u4E49"},n.a.createElement(y.AnchorLink,{to:"#table-\u53C2\u6570-\u4E2D-columns-\u5217\u5B9A\u4E49","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),n.a.createElement("code",null,"<Table>")," \u53C2\u6570 \u4E2D Columns \u5217\u5B9A\u4E49"),n.a.createElement("p",null,n.a.createElement("strong",null,"columns \u4E3A antd \u5DF2\u6709\u7684 props\uFF0C\u6240\u4EE5\u652F\u6301 antd \u6240\u6709\u7684\u652F\u6301\u7684 ",n.a.createElement(y.Link,{to:"https://ant.design/components/table-cn/#Column"},"columns")," \u7684\u914D\u7F6E\uFF0C\u540C\u65F6\u4E5F\u63D0\u4F9B\u4E86\u4E00\u4E9B\u66F4\u65B9\u4FBF\u7684 api\uFF0C\u52A0\u5FEB\u4E66\u5199")),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u5C5E\u6027"),n.a.createElement("th",null,"\u63CF\u8FF0"),n.a.createElement("th",null,"\u7C7B\u578B"),n.a.createElement("th",null,"\u9ED8\u8BA4\u503C"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"ellipsis"),n.a.createElement("td",null,"\u662F\u5426\u81EA\u52A8\u7F29\u7565"),n.a.createElement("td",null,"boolean"),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"copyable"),n.a.createElement("td",null,"\u662F\u5426\u652F\u6301\u590D\u5236"),n.a.createElement("td",null,"boolean"),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"valueType"),n.a.createElement("td",null,"\u503C\u7684\u7C7B\u578B\uFF0C\u8BE6\u89C1\u4E0B\u65B9 ",n.a.createElement("code",null,"valueType \u914D\u7F6E")),n.a.createElement("td",null,n.a.createElement("code",null,"string"),"\uFF08",n.a.createElement("code",null,"text")," | ",n.a.createElement("code",null,"money")," | ",n.a.createElement("code",null,"date")," | ",n.a.createElement("code",null,"dateTime"),"\uFF09"),n.a.createElement("td",null,n.a.createElement("code",null,"text"))),n.a.createElement("tr",null,n.a.createElement("td",null,"enum"),n.a.createElement("td",null,"\u5F53\u524D\u5217\u503C\u7684\u679A\u4E3E\uFF0C\u8BE6\u89C1",n.a.createElement(y.Link,{to:"./table-render/demo"},"\u9AD8\u7EA7\u7528\u6CD5")),n.a.createElement("td",null,n.a.createElement("code",null,"object")),n.a.createElement("td",null,"-")))),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement("strong",null,"valueType \u503C\u7C7B\u578B"),"\uFF1ATableRender \u5C01\u88C5\u4E86\u4E00\u4E9B\u5E38\u7528\u7684\u503C\u7C7B\u578B\u6765\u51CF\u5C11\u91CD\u590D\u7684 render \u64CD\u4F5C\uFF0C\u914D\u7F6E\u4E00\u4E2A valueType \u5373\u53EF\u5C55\u793A\u683C\u5F0F\u5316\u54CD\u5E94\u7684\u6570\u636E\uFF0C\u5177\u4F53\u4F7F\u7528\u53EF\u53C2\u8003 ",n.a.createElement(y.Link,{to:"./table-render/demo"},"\u6848\u4F8B\u4EE3\u7801"),"\uFF1A"),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u5C5E\u6027"),n.a.createElement("th",null,"\u63CF\u8FF0"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"text"),n.a.createElement("td",null,"\u666E\u901A\u7684\u6587\u672C\u7C7B\u578B")),n.a.createElement("tr",null,n.a.createElement("td",null,"date"),n.a.createElement("td",null,"\u5F53\u6570\u636E\u662F\u65E5\u671F\u7C7B\u578B\u7684\u8FD4\u56DE\u65F6\uFF0C\u4F1A\u81EA\u52A8\u5C06\u683C\u5F0F\u8F6C\u6362\u4E3A '2020-10-20'")),n.a.createElement("tr",null,n.a.createElement("td",null,"dateTime"),n.a.createElement("td",null,"\u5F53\u6570\u636E\u662F\u65E5\u671F\u7C7B\u578B\u7684\u8FD4\u56DE\u65F6\uFF0C\u4F1A\u81EA\u52A8\u5C06\u683C\u5F0F\u8F6C\u6362\u4E3A '2020-10-20 19:30:00'")),n.a.createElement("tr",null,n.a.createElement("td",null,"money"),n.a.createElement("td",null,"\u5F53\u6570\u636E\u662F\u91D1\u989D\u65F6\uFF0C\u4F1A\u81EA\u52A8\u5C06\u683C\u5F0F\u8F6C\u6362\u4E3A '\xA5999,999,999.99'")))))),n.a.createElement("h3",{id:"context-\u4E0A\u4E0B\u6587"},n.a.createElement(y.AnchorLink,{to:"#context-\u4E0A\u4E0B\u6587","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Context \u4E0A\u4E0B\u6587"),n.a.createElement("p",null,n.a.createElement("strong",null,"\u53EF\u901A\u8FC7 ",n.a.createElement("code",null,"useTable")," \u83B7\u53D6 ",n.a.createElement("code",null,"table-render")," \u7684 context\uFF0C\u4F8B\u5982: ",n.a.createElement("code",null,"refresh"),"\u3001",n.a.createElement("code",null,"tableState"),"\u3001",n.a.createElement("code",null,"setTable")," \u7B49\u5C5E\u6027")),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u5C5E\u6027"),n.a.createElement("th",null,"\u63CF\u8FF0"),n.a.createElement("th",null,"\u7C7B\u578B"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"tableState"),n.a.createElement("td",null,"\u8FD9\u4E9B\u662F\u5168\u5C40\u7684\u72B6\u6001\uFF0C\u6839\u636E\u9700\u8981\u4F7F\u7528"),n.a.createElement("td",null,n.a.createElement("code",null,"object"))),n.a.createElement("tr",null,n.a.createElement("td",null,"refresh"),n.a.createElement("td",null,"\u5237\u65B0\u8868\u683C\u6570\u636E"),n.a.createElement("td",null,n.a.createElement("code",null,"function"))),n.a.createElement("tr",null,n.a.createElement("td",null,"setTable"),n.a.createElement("td",null,"\u7528\u4E8E\u4FEE\u6539\u5168\u5C40\u72B6\u6001\u7684\u5DE5\u5177\u51FD\u6570\uFF0CsetTable \u4E4B\u4E8E tableState\uFF0C\u7B49\u540C setState \u4E4B\u4E8E state"),n.a.createElement("td",null,n.a.createElement("code",null,"function"))),n.a.createElement("tr",null,n.a.createElement("td",null,"changeTab"),n.a.createElement("td",null,"\u624B\u52A8\u5207\u6362 tab \u7684\u51FD\u6570\uFF0C\u4F8B\u5982\u76EE\u524D\u4E24\u4E2A\u641C\u7D22 tab\uFF1A \u201C\u6211\u7684\u6D3B\u52A8\u201D\uFF0C\u201C\u5168\u90E8\u6D3B\u52A8\u201D \uFF08\u5206\u522B\u5BF9\u5E94 tab \u503C\u4E3A 0 \u548C 1\uFF09"),n.a.createElement("td",null,n.a.createElement("code",null,"function"))),n.a.createElement("tr",null,n.a.createElement("td",null,"form"),n.a.createElement("td",null,"Search \u7EC4\u4EF6\u662F form-render \u751F\u6210\u7684\uFF0C\u53EF\u4EE5\u53D6\u5230\u641C\u7D22\u8868\u5355\u7684 form \u5B9E\u4F8B\u4EE5\u53CA\u6302\u5728\u4E0A\u9762\u7684\u65B9\u6CD5\uFF0C\u4F8B\u5982 ",n.a.createElement("code",null,"form.resetFields")," \u6E05\u7A7A\u641C\u7D22\u9879"),n.a.createElement("td",null,n.a.createElement("code",null,"object"))))),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement("strong",null,"\u5BFC\u51FA useTable \u4EE5\u53CA\u5BF9\u5E94\u7684\u65B9\u6CD5")),n.a.createElement(V.a,{code:`import { useTable } from 'table-render';
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
};`,lang:"js"})))))))},TIsu:function(Dn,dn,e){},Zs1V:function(Dn){Dn.exports=JSON.parse("{}")},p8sG:function(Dn,dn,e){"use strict";Dn.exports=e("80pN")}}]);
