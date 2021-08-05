(window.webpackJsonp=window.webpackJsonp||[]).push([[48,13],{"0zqC":function(Dn,dn,e){"use strict";e.r(dn);var $=e("tJVT"),n=e("q1tI"),y=e.n(n),W=e("wx14"),oe=e("rePB"),V=e("ODXe"),qe=e("U8pU"),Oe=e("Ff2n"),me=e("VTBJ"),Be=e("TSYQ"),Ce=e.n(Be),cn=e("Zm9Q"),jn=e("5Z9U"),vn=e("6cGi"),sn=e("KQm4"),Le=e("wgJM"),Bn=e("t23M");function Pn(s){var l=Object(n.useRef)(),g=Object(n.useRef)(!1);function S(){for(var R=arguments.length,O=new Array(R),D=0;D<R;D++)O[D]=arguments[D];g.current||(Le.a.cancel(l.current),l.current=Object(Le.a)(function(){s.apply(void 0,O)}))}return Object(n.useEffect)(function(){return function(){g.current=!0,Le.a.cancel(l.current)}},[]),S}function gn(s){var l=Object(n.useRef)([]),g=Object(n.useState)({}),S=Object(V.a)(g,2),R=S[1],O=Object(n.useRef)(typeof s=="function"?s():s),D=Pn(function(){var K=O.current;l.current.forEach(function(x){K=x(K)}),l.current=[],O.current=K,R({})});function N(K){l.current.push(K),D()}return[O.current,N]}var Pe=e("4IlW");function nt(s,l){var g,S=s.prefixCls,R=s.id,O=s.active,D=s.rtl,N=s.tab,K=N.key,x=N.tab,L=N.disabled,H=N.closeIcon,U=s.tabBarGutter,ae=s.tabPosition,Y=s.closable,Q=s.renderWrapper,se=s.removeAriaLabel,z=s.editable,q=s.onClick,ne=s.onRemove,X=s.onFocus,re="".concat(S,"-tab");n.useEffect(function(){return ne},[]);var k={};ae==="top"||ae==="bottom"?k[D?"marginLeft":"marginRight"]=U:k.marginBottom=U;var pe=z&&Y!==!1&&!L;function _(te){L||q(te)}function ue(te){te.preventDefault(),te.stopPropagation(),z.onEdit("remove",{key:K,event:te})}var le=n.createElement("div",{key:K,ref:l,className:Ce()(re,(g={},Object(oe.a)(g,"".concat(re,"-with-remove"),pe),Object(oe.a)(g,"".concat(re,"-active"),O),Object(oe.a)(g,"".concat(re,"-disabled"),L),g)),style:k,onClick:_},n.createElement("div",{role:"tab","aria-selected":O,id:R&&"".concat(R,"-tab-").concat(K),className:"".concat(re,"-btn"),"aria-controls":R&&"".concat(R,"-panel-").concat(K),"aria-disabled":L,tabIndex:L?null:0,onClick:function(G){G.stopPropagation(),_(G)},onKeyDown:function(G){[Pe.a.SPACE,Pe.a.ENTER].includes(G.which)&&(G.preventDefault(),_(G))},onFocus:X},x),pe&&n.createElement("button",{type:"button","aria-label":se||"remove",tabIndex:0,className:"".concat(re,"-remove"),onClick:function(G){G.stopPropagation(),ue(G)}},H||z.removeIcon||"\xD7"));return Q&&(le=Q(le)),le}var wn=n.forwardRef(nt),tt={width:0,height:0,left:0,top:0};function dt(s,l,g){return Object(n.useMemo)(function(){for(var S,R=new Map,O=l.get((S=s[0])===null||S===void 0?void 0:S.key)||tt,D=O.left+O.width,N=0;N<s.length;N+=1){var K=s[N].key,x=l.get(K);if(!x){var L;x=l.get((L=s[N-1])===null||L===void 0?void 0:L.key)||tt}var H=R.get(K)||Object(me.a)({},x);H.right=D-H.left-H.width,R.set(K,H)}return R},[s.map(function(S){return S.key}).join("_"),l,g])}var at={width:0,height:0,left:0,top:0,right:0};function ct(s,l,g,S,R){var O=R.tabs,D=R.tabPosition,N=R.rtl,K,x,L;["top","bottom"].includes(D)?(K="width",x=N?"right":"left",L=Math.abs(l.left)):(K="height",x="top",L=-l.top);var H=l[K],U=g[K],ae=S[K],Y=H;return U+ae>H&&(Y=H-ae),Object(n.useMemo)(function(){if(!O.length)return[0,0];for(var Q=O.length,se=Q,z=0;z<Q;z+=1){var q=s.get(O[z].key)||at;if(q[x]+q[K]>L+Y){se=z-1;break}}for(var ne=0,X=Q-1;X>=0;X-=1){var re=s.get(O[X].key)||at;if(re[x]<L){ne=X+1;break}}return[ne,se]},[s,L,Y,D,O.map(function(Q){return Q.key}).join("_"),N])}var Mn=e("Gytx"),rt=e.n(Mn),Vn=e("Kwbf");function mt(s,l){var g=s.prefixCls,S=s.invalidate,R=s.item,O=s.renderItem,D=s.responsive,N=s.registerSize,K=s.itemKey,x=s.className,L=s.style,H=s.children,U=s.display,ae=s.order,Y=s.component,Q=Y===void 0?"div":Y,se=Object(Oe.a)(s,["prefixCls","invalidate","item","renderItem","responsive","registerSize","itemKey","className","style","children","display","order","component"]),z=D&&!U;function q(pe){N(K,pe)}n.useEffect(function(){return function(){q(null)}},[]);var ne=O&&R!==void 0?O(R):H,X;S||(X={opacity:z?0:1,height:z?0:void 0,overflowY:z?"hidden":void 0,order:D?ae:void 0,pointerEvents:z?"none":void 0});var re={};z&&(re["aria-hidden"]=!0);var k=n.createElement(Q,Object(W.a)({className:Ce()(!S&&g,x),style:Object(me.a)(Object(me.a)({},X),L)},re,se,{ref:l}),ne);return D&&(k=n.createElement(Bn.default,{onResize:function(_){var ue=_.offsetWidth;q(ue)}},k)),k}var Kn=n.forwardRef(mt);Kn.displayName="Item";var Wn=Kn;function Jn(){var s=Object(n.useState)({}),l=Object(V.a)(s,2),g=l[1],S=Object(n.useRef)([]),R=Object(n.useRef)(!1),O=0,D=0;Object(n.useEffect)(function(){return function(){R.current=!0}},[]);function N(K){var x=O;O+=1,S.current.length<x+1&&(S.current[x]=K);var L=S.current[x];function H(U){S.current[x]=typeof U=="function"?U(S.current[x]):U,Le.a.cancel(D),D=Object(Le.a)(function(){R.current||g({})})}return[L,H]}return N}var zn=function(l,g){var S=n.useContext(yn);if(!S){var R=l.component,O=R===void 0?"div":R,D=Object(Oe.a)(l,["component"]);return n.createElement(O,Object(W.a)({},D,{ref:g}))}var N=S.className,K=Object(Oe.a)(S,["className"]),x=l.className,L=Object(Oe.a)(l,["className"]);return n.createElement(yn.Provider,{value:null},n.createElement(Wn,Object(W.a)({ref:g,className:Ce()(N,x)},K,L)))},xn=n.forwardRef(zn);xn.displayName="RawItem";var st=xn,yn=n.createContext(null),A="responsive",T="invalidate";function j(s){return"+ ".concat(s.length," ...")}function f(s,l){var g=s.prefixCls,S=g===void 0?"rc-overflow":g,R=s.data,O=R===void 0?[]:R,D=s.renderItem,N=s.renderRawItem,K=s.itemKey,x=s.itemWidth,L=x===void 0?10:x,H=s.ssr,U=s.style,ae=s.className,Y=s.maxCount,Q=s.renderRest,se=s.renderRawRest,z=s.suffix,q=s.component,ne=q===void 0?"div":q,X=s.itemComponent,re=s.onVisibleChange,k=Object(Oe.a)(s,["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"]),pe=Jn(),_=H==="full",ue=pe(null),le=Object(V.a)(ue,2),te=le[0],G=le[1],ie=te||0,fe=pe(new Map),ce=Object(V.a)(fe,2),ye=ce[0],Ae=ce[1],he=pe(0),ge=Object(V.a)(he,2),De=ge[0],Re=ge[1],Se=pe(0),Ee=Object(V.a)(Se,2),Ne=Ee[0],Ue=Ee[1],Ie=pe(0),we=Object(V.a)(Ie,2),xe=we[0],Te=we[1],bn=Object(n.useState)(null),Qe=Object(V.a)(bn,2),Ve=Qe[0],_e=Qe[1],mn=Object(n.useState)(null),fn=Object(V.a)(mn,2),Fe=fn[0],Ke=fn[1],He=n.useMemo(function(){return Fe===null&&_?Number.MAX_SAFE_INTEGER:Fe||0},[Fe,te]),Je=Object(n.useState)(!1),Nn=Object(V.a)(Je,2),Gn=Nn[0],In=Nn[1],Xe="".concat(S,"-item"),Cn=Math.max(De,Ne),en=O.length&&Y===A,En=Y===T,Ge=en||typeof Y=="number"&&O.length>Y,Ze=Object(n.useMemo)(function(){var de=O;return en?te===null&&_?de=O:de=O.slice(0,Math.min(O.length,ie/L)):typeof Y=="number"&&(de=O.slice(0,Y)),de},[O,L,te,Y,en]),On=Object(n.useMemo)(function(){return en?O.slice(He+1):O.slice(Ze.length)},[O,Ze,en,He]),an=Object(n.useCallback)(function(de,be){var je;return typeof K=="function"?K(de):(je=K&&(de==null?void 0:de[K]))!==null&&je!==void 0?je:be},[K]),ze=Object(n.useCallback)(D||function(de){return de},[D]);function We(de,be){Ke(de),be||(In(de<O.length-1),re==null||re(de))}function Yn(de,be){G(be.clientWidth)}function Qn(de,be){Ae(function(je){var Ye=new Map(je);return be===null?Ye.delete(de):Ye.set(de,be),Ye})}function ot(de,be){Ue(be),Re(Ne)}function pn(de,be){Te(be)}function ln(de){return ye.get(an(Ze[de],de))}n.useLayoutEffect(function(){if(ie&&Cn&&Ze){var de=xe,be=Ze.length,je=be-1;if(!be){We(0),_e(null);return}for(var Ye=0;Ye<be;Ye+=1){var qn=ln(Ye);if(qn===void 0){We(Ye-1,!0);break}if(de+=qn,Ye===je-1&&de+ln(je)<=ie){We(je),_e(null);break}else if(de+Cn>ie){We(Ye-1),_e(de-qn-xe+Ne);break}else if(Ye===je){We(je),_e(de-xe);break}}z&&ln(0)+xe>ie&&_e(null)}},[ie,ye,Ne,xe,an,Ze]);var Xn=Gn&&!!On.length,hn={};Ve!==null&&en&&(hn={position:"absolute",left:Ve,top:0});var rn={prefixCls:Xe,responsive:en,component:X,invalidate:En},Zn=N?function(de,be){var je=an(de,be);return n.createElement(yn.Provider,{key:je,value:Object(me.a)(Object(me.a)({},rn),{},{order:be,item:de,itemKey:je,registerSize:Qn,display:be<=He})},N(de,be))}:function(de,be){var je=an(de,be);return n.createElement(Wn,Object(W.a)({},rn,{order:be,key:je,item:de,renderItem:ze,itemKey:je,registerSize:Qn,display:be<=He}))},Sn,kn={order:Xn?He:Number.MAX_SAFE_INTEGER,className:"".concat(Xe,"-rest"),registerSize:ot,display:Xn};if(se)se&&(Sn=n.createElement(yn.Provider,{value:Object(me.a)(Object(me.a)({},rn),kn)},se(On)));else{var nn=Q||j;Sn=n.createElement(Wn,Object(W.a)({},rn,kn),typeof nn=="function"?nn(On):nn)}var Fn=n.createElement(ne,Object(W.a)({className:Ce()(!En&&S,ae),style:U,ref:l},k),Ze.map(Zn),Ge?Sn:null,z&&n.createElement(Wn,Object(W.a)({},rn,{order:He,className:"".concat(Xe,"-suffix"),registerSize:pn,display:!0,style:hn}),z));return en&&(Fn=n.createElement(Bn.default,{onResize:Yn},Fn)),Fn}var i=n.forwardRef(f);i.displayName="Overflow",i.Item=st,i.RESPONSIVE=A,i.INVALIDATE=T;var h=i,b=h,C=e("1OyB"),o=e("vuIU"),p=e("Ji7U"),u=e("LK+K"),I=e("bT9E"),B=e("YrtM"),E=n.createContext(null);function d(s,l){var g=Object(me.a)({},s);return Object.keys(l).forEach(function(S){var R=l[S];R!==void 0&&(g[S]=R)}),g}function P(s){var l=s.children,g=s.locked,S=Object(Oe.a)(s,["children","locked"]),R=n.useContext(E),O=Object(B.a)(function(){return d(R,S)},[R,S],function(D,N){return!g&&(D[0]!==N[0]||!rt()(D[1],N[1]))});return n.createElement(E.Provider,{value:O},l)}function m(s,l,g,S){var R=n.useContext(E),O=R.activeKey,D=R.onActive,N=R.onInactive,K={active:O===s};return l||(K.onMouseEnter=function(x){g==null||g({key:s,domEvent:x}),D(s)},K.onMouseLeave=function(x){S==null||S({key:s,domEvent:x}),N(s)}),K}function a(s){var l=s.item,g=Object(Oe.a)(s,["item"]);return Object.defineProperty(g,"item",{get:function(){return Object(Vn.a)(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),l}}),g}function t(s){var l=s.icon,g=s.props,S=s.children,R;return typeof l=="function"?R=n.createElement(l,Object(me.a)({},g)):R=l,R||S||null}function r(s){var l=n.useContext(E),g=l.mode,S=l.rtl,R=l.inlineIndent;if(g!=="inline")return null;var O=s;return S?{paddingRight:O*R}:{paddingLeft:O*R}}var c=[],v=n.createContext(null);function F(){return n.useContext(v)}var w=n.createContext(c);function M(s){var l=n.useContext(w);return n.useMemo(function(){return s!==void 0?[].concat(Object(sn.a)(l),[s]):l},[l,s])}var J=n.createContext(null),$e=n.createContext(null);function tn(s,l){return s===void 0?null:"".concat(s,"-").concat(l)}function on(s){var l=n.useContext($e);return tn(l,s)}var An=function(s){Object(p.a)(g,s);var l=Object(u.a)(g);function g(){return Object(C.a)(this,g),l.apply(this,arguments)}return Object(o.a)(g,[{key:"render",value:function(){var R=this.props,O=R.title,D=R.attribute,N=R.elementRef,K=Object(Oe.a)(R,["title","attribute","elementRef"]),x=Object(I.a)(K,["eventKey"]);return Object(Vn.a)(!D,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),n.createElement(b.Item,Object(W.a)({},D,{title:typeof O=="string"?O:void 0},x,{ref:N}))}}]),g}(n.Component),Un=function(l){var g,S=l.style,R=l.className,O=l.eventKey,D=l.disabled,N=l.itemIcon,K=l.children,x=l.role,L=l.onMouseEnter,H=l.onMouseLeave,U=l.onClick,ae=l.onKeyDown,Y=l.onFocus,Q=Object(Oe.a)(l,["style","className","eventKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"]),se=on(O),z=n.useContext(E),q=z.prefixCls,ne=z.onItemClick,X=z.disabled,re=z.overflowDisabled,k=z.itemIcon,pe=z.selectedKeys,_=z.onActive,ue="".concat(q,"-item"),le=n.useRef(),te=n.useRef(),G=X||D,ie=M(O),fe=function(Ie){return{key:O,keyPath:ie,item:le.current,domEvent:Ie}},ce=N||k,ye=m(O,G,L,H),Ae=ye.active,he=Object(Oe.a)(ye,["active"]),ge=pe.includes(O),De=r(ie.length),Re=function(Ie){if(!G){var we=fe(Ie);U==null||U(a(we)),ne(we)}},Se=function(Ie){if(ae==null||ae(Ie),Ie.which===Pe.a.ENTER){var we=fe(Ie);U==null||U(a(we)),ne(we)}},Ee=function(Ie){_(O),Y==null||Y(Ie)},Ne={};return l.role==="option"&&(Ne["aria-selected"]=ge),n.createElement(An,Object(W.a)({ref:le,elementRef:te,role:x===null?"none":x||"menuitem",tabIndex:D?null:-1,"data-menu-id":re&&se?null:se},Q,he,Ne,{component:"li","aria-disabled":D,style:Object(me.a)(Object(me.a)({},De),S),className:Ce()(ue,(g={},Object(oe.a)(g,"".concat(ue,"-active"),Ae),Object(oe.a)(g,"".concat(ue,"-selected"),ge),Object(oe.a)(g,"".concat(ue,"-disabled"),G),g),R),onClick:Re,onKeyDown:Se,onFocus:Ee}),K,n.createElement(t,{props:Object(me.a)(Object(me.a)({},l),{},{isSelected:ge}),icon:ce}))};function Tn(s){var l=s.eventKey,g=F(),S=M(l);return n.useEffect(function(){if(g)return g.registerPath(l,S),function(){g.unregisterPath(l,S)}},[S]),g?null:n.createElement(Un,s)}var Hn=Tn;function Bt(s,l){return Object(cn.a)(s).map(function(g,S){if(n.isValidElement(g)){var R=g.key;return R==null&&(R="tmp_key-".concat([].concat(Object(sn.a)(l),[S]).join("-"))),n.cloneElement(g,{key:R,eventKey:R})}return g})}function it(s){var l=n.useRef(s);l.current=s;var g=n.useCallback(function(){for(var S,R=arguments.length,O=new Array(R),D=0;D<R;D++)O[D]=arguments[D];return(S=l.current)===null||S===void 0?void 0:S.call.apply(S,[l].concat(O))},[]);return s?g:void 0}var Oa=function(l,g){var S=l.className,R=l.children,O=Object(Oe.a)(l,["className","children"]),D=n.useContext(E),N=D.prefixCls,K=D.mode;return n.createElement("ul",Object(W.a)({className:Ce()(N,"".concat(N,"-sub"),"".concat(N,"-").concat(K==="inline"?"inline":"vertical"),S)},O,{"data-menu-list":!0,ref:g}),R)},Qt=n.forwardRef(Oa);Qt.displayName="SubMenuList";var Xt=Qt,Sa=e("uciX"),Ln={adjustX:1,adjustY:1},Zt={topLeft:{points:["bl","tl"],overflow:Ln,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Ln,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:Ln,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:Ln,offset:[4,0]}},Fa={topLeft:{points:["bl","tl"],overflow:Ln,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Ln,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:Ln,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:Ln,offset:[4,0]}},fr=Zt;function kt(s,l,g){if(l)return l;if(g)return g[s]||g.other}var Ra={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function Da(s){var l=s.prefixCls,g=s.visible,S=s.children,R=s.popup,O=s.popupClassName,D=s.popupOffset,N=s.disabled,K=s.mode,x=s.onVisibleChange,L=n.useContext(E),H=L.getPopupContainer,U=L.rtl,ae=L.subMenuOpenDelay,Y=L.subMenuCloseDelay,Q=L.builtinPlacements,se=L.triggerSubMenuAction,z=L.forceSubMenuRender,q=L.motion,ne=L.defaultMotions,X=n.useState(!1),re=Object(V.a)(X,2),k=re[0],pe=re[1],_=U?Object(me.a)(Object(me.a)({},Fa),Q):Object(me.a)(Object(me.a)({},Zt),Q),ue=Ra[K],le=kt(K,q,ne),te=Object(me.a)(Object(me.a)({},le),{},{leavedClassName:"".concat(l,"-hidden"),removeOnLeave:!1,motionAppear:!0}),G=n.useRef();return n.useEffect(function(){return G.current=Object(Le.a)(function(){pe(g)}),function(){Le.a.cancel(G.current)}},[g]),n.createElement(Sa.a,{prefixCls:l,popupClassName:Ce()("".concat(l,"-popup"),Object(oe.a)({},"".concat(l,"-rtl"),U),O),stretch:K==="horizontal"?"minWidth":null,getPopupContainer:H,builtinPlacements:_,popupPlacement:ue,popupVisible:k,popup:R,popupAlign:D&&{offset:D},action:N?[]:[se],mouseEnterDelay:ae,mouseLeaveDelay:Y,onPopupVisibleChange:x,forceRender:z,popupMotion:te},S)}var ja=e("8XRh");function Pa(s){var l=s.id,g=s.open,S=s.keyPath,R=s.children,O="inline",D=n.useContext(E),N=D.prefixCls,K=D.forceSubMenuRender,x=D.motion,L=D.defaultMotions,H=D.mode,U=n.useRef(!1);U.current=H===O;var ae=n.useState(!U.current),Y=Object(V.a)(ae,2),Q=Y[0],se=Y[1],z=U.current?g:!1;n.useEffect(function(){U.current&&se(!1)},[H]);var q=Object(me.a)({},kt(O,x,L));S.length>1&&(q.motionAppear=!1);var ne=q.onVisibleChanged;return q.onVisibleChanged=function(X){return!U.current&&!X&&se(!0),ne==null?void 0:ne(X)},Q?null:n.createElement(P,{mode:O,locked:!U.current},n.createElement(ja.default,Object(W.a)({visible:z},q,{forceRender:K,removeOnLeave:!1,leavedClassName:"".concat(N,"-hidden")}),function(X){var re=X.className,k=X.style;return n.createElement(Xt,{id:l,className:re,style:k},R)}))}var Aa=function(l){var g,S=l.style,R=l.className,O=l.title,D=l.eventKey,N=l.disabled,K=l.internalPopupClose,x=l.children,L=l.itemIcon,H=l.expandIcon,U=l.popupClassName,ae=l.popupOffset,Y=l.onClick,Q=l.onMouseEnter,se=l.onMouseLeave,z=l.onTitleClick,q=l.onTitleMouseEnter,ne=l.onTitleMouseLeave,X=Object(Oe.a)(l,["style","className","title","eventKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"]),re=on(D),k=n.useContext(E),pe=k.prefixCls,_=k.mode,ue=k.openKeys,le=k.disabled,te=k.overflowDisabled,G=k.activeKey,ie=k.selectedKeys,fe=k.itemIcon,ce=k.expandIcon,ye=k.onItemClick,Ae=k.onOpenChange,he=k.onActive,ge=n.useContext(J),De=ge.isSubPathKey,Re=M(),Se="".concat(pe,"-submenu"),Ee=le||N,Ne=n.useRef(),Ue=n.useRef(),Ie=L||fe,we=H||ce,xe=ue.includes(D),Te=!te&&xe,bn=De(ie,D),Qe=m(D,Ee,q,ne),Ve=Qe.active,_e=Object(Oe.a)(Qe,["active"]),mn=n.useState(!1),fn=Object(V.a)(mn,2),Fe=fn[0],Ke=fn[1],He=function(We){Ee||Ke(We)},Je=function(We){He(!0),Q==null||Q({key:D,domEvent:We})},Nn=function(We){He(!1),se==null||se({key:D,domEvent:We})},Gn=n.useMemo(function(){return Ve||(_!=="inline"?Fe||De([G],D):!1)},[_,Ve,G,Fe,D,De]),In=r(Re.length),Xe=function(We){Ee||(z==null||z({key:D,domEvent:We}),_==="inline"&&Ae(D,!xe))},Cn=it(function(ze){Y==null||Y(a(ze)),ye(ze)}),en=function(We){_!=="inline"&&Ae(D,We)},En=function(){he(D)},Ge=re&&"".concat(re,"-popup"),Ze=n.createElement("div",Object(W.a)({role:"menuitem",style:In,className:"".concat(Se,"-title"),tabIndex:Ee?null:-1,ref:Ne,title:typeof O=="string"?O:null,"data-menu-id":te&&re?null:re,"aria-expanded":Te,"aria-haspopup":!0,"aria-controls":Ge,"aria-disabled":Ee,onClick:Xe,onFocus:En},_e),O,n.createElement(t,{icon:_!=="horizontal"?we:null,props:Object(me.a)(Object(me.a)({},l),{},{isOpen:Te,isSubMenu:!0})},n.createElement("i",{className:"".concat(Se,"-arrow")}))),On=n.useRef(_);if(_!=="inline"&&(On.current=Re.length>1?"vertical":_),!te){var an=On.current;Ze=n.createElement(Da,{mode:an,prefixCls:Se,visible:!K&&Te&&_!=="inline",popupClassName:U,popupOffset:ae,popup:n.createElement(P,{mode:an},n.createElement(Xt,{id:Ge,ref:Ue},x)),disabled:Ee,onVisibleChange:en},Ze)}return n.createElement(P,{onItemClick:Cn,mode:_==="horizontal"?"vertical":_,itemIcon:Ie,expandIcon:we},n.createElement(b.Item,Object(W.a)({role:"none"},X,{component:"li",style:S,className:Ce()(Se,"".concat(Se,"-").concat(_),R,(g={},Object(oe.a)(g,"".concat(Se,"-open"),Te),Object(oe.a)(g,"".concat(Se,"-active"),Gn),Object(oe.a)(g,"".concat(Se,"-selected"),bn),Object(oe.a)(g,"".concat(Se,"-disabled"),Ee),g)),onMouseEnter:Je,onMouseLeave:Nn}),Ze,!te&&n.createElement(Pa,{id:Ge,open:Te,keyPath:Re},x)))};function qt(s){var l=s.eventKey,g=s.children,S=M(l),R=Bt(g,S),O=F();n.useEffect(function(){if(O)return O.registerPath(l,S),function(){O.unregisterPath(l,S)}},[S]);var D;return O?D=R:D=n.createElement(Aa,s,R),n.createElement(w.Provider,{value:S},D)}var Ta=e("x/xZ");function _t(s){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Object(Ta.a)(s)){var g=s.nodeName.toLowerCase(),S=["input","select","textarea","button"].includes(g)||s.isContentEditable||g==="a"&&!!s.getAttribute("href"),R=s.getAttribute("tabindex"),O=Number(R),D=null;return R&&!Number.isNaN(O)?D=O:S&&D===null&&(D=0),S&&s.disabled&&(D=null),D!==null&&(D>=0||l&&D<0)}return!1}function ea(s){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,g=Object(sn.a)(s.querySelectorAll("*")).filter(function(S){return _t(S,l)});return _t(s,l)&&g.unshift(s),g}var bt=null;function pr(){bt=document.activeElement}function hr(){bt=null}function vr(){if(bt)try{bt.focus()}catch(s){}}function gr(s,l){if(l.keyCode===9){var g=ea(s),S=g[l.shiftKey?0:g.length-1],R=S===document.activeElement||s===document.activeElement;if(R){var O=g[l.shiftKey?g.length-1:0];O.focus(),l.preventDefault()}}}var wt=Pe.a.LEFT,Mt=Pe.a.RIGHT,Kt=Pe.a.UP,Ct=Pe.a.DOWN,Et=Pe.a.ENTER,na=Pe.a.ESC,ta=[Kt,Ct,wt,Mt];function Na(s,l,g,S){var R,O,D,N,K="prev",x="next",L="children",H="parent";if(s==="inline"&&S===Et)return{inlineTrigger:!0};var U=(R={},Object(oe.a)(R,Kt,K),Object(oe.a)(R,Ct,x),R),ae=(O={},Object(oe.a)(O,wt,g?x:K),Object(oe.a)(O,Mt,g?K:x),Object(oe.a)(O,Ct,L),Object(oe.a)(O,Et,L),O),Y=(D={},Object(oe.a)(D,Kt,K),Object(oe.a)(D,Ct,x),Object(oe.a)(D,Et,L),Object(oe.a)(D,na,H),Object(oe.a)(D,wt,g?L:H),Object(oe.a)(D,Mt,g?H:L),D),Q={inline:U,horizontal:ae,vertical:Y,inlineSub:U,horizontalSub:Y,verticalSub:Y},se=(N=Q["".concat(s).concat(l?"":"Sub")])===null||N===void 0?void 0:N[S];switch(se){case K:return{offset:-1,sibling:!0};case x:return{offset:1,sibling:!0};case H:return{offset:-1,sibling:!1};case L:return{offset:1,sibling:!1};default:return null}}function Ia(s){for(var l=s;l;){if(l.getAttribute("data-menu-list"))return l;l=l.parentElement}return null}function Ba(s,l){for(var g=s||document.activeElement;g;){if(l.has(g))return g;g=g.parentElement}return null}function wa(s,l){var g=ea(s,!0);return g.filter(function(S){return l.has(S)})}function aa(s,l,g){var S=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!s)return null;var R=wa(s,l),O=R.length,D=R.findIndex(function(N){return g===N});return S<0?D===-1?D=O-1:D-=1:S>0&&(D+=1),D=(D+O)%O,R[D]}function Ma(s,l,g,S,R,O,D,N,K,x){var L=n.useRef(),H=n.useRef();H.current=l;var U=function(){Le.a.cancel(L.current)};return n.useEffect(function(){return function(){U()}},[]),function(ae){var Y=ae.which;if([].concat(ta,[Et,na]).includes(Y)){var Q,se,z,q=function(){Q=new Set,se=new Map,z=new Map;var fe=O();return fe.forEach(function(ce){var ye=document.querySelector("[data-menu-id='".concat(tn(S,ce),"']"));ye&&(Q.add(ye),z.set(ye,ce),se.set(ce,ye))}),Q};q();var ne=se.get(l),X=Ba(ne,Q),re=z.get(X),k=Na(s,D(re,!0).length===1,g,Y);if(!k)return;ta.includes(Y)&&ae.preventDefault();var pe=function(fe){if(fe){var ce=fe,ye=fe.querySelector("a");(ye==null?void 0:ye.getAttribute("href"))&&(ce=ye);var Ae=z.get(fe);N(Ae),U(),L.current=Object(Le.a)(function(){H.current===Ae&&ce.focus()})}};if(k.sibling||!X){var _;!X||s==="inline"?_=R.current:_=Ia(X);var ue=aa(_,Q,X,k.offset);pe(ue)}else if(k.inlineTrigger)K(re);else if(k.offset>0)K(re,!0),U(),L.current=Object(Le.a)(function(){q();var ie=X.getAttribute("aria-controls"),fe=document.getElementById(ie),ce=aa(fe,Q);pe(ce)},5);else if(k.offset<0){var le=D(re,!0),te=le[le.length-2],G=se.get(te);K(te,!1),pe(G)}}x==null||x(ae)}}var Ka=Math.random().toFixed(5).toString().slice(2),ra=0;function Wa(s){var l=Object(vn.a)(s,{value:s}),g=Object(V.a)(l,2),S=g[0],R=g[1];return n.useEffect(function(){ra+=1;var O="".concat(Ka,"-").concat(ra);R("rc-menu-uuid-".concat(O))},[]),S}var yr=e("p8sG");function xa(s){Promise.resolve().then(s)}var Wt="__RC_UTIL_PATH_SPLIT__",sa=function(l){return l.join(Wt)},La=function(l){return l.split(Wt)},xt="rc-menu-more";function $a(){var s=n.useState({}),l=Object(V.a)(s,2),g=l[1],S=Object(n.useRef)(new Map),R=Object(n.useRef)(new Map),O=n.useState([]),D=Object(V.a)(O,2),N=D[0],K=D[1],x=Object(n.useRef)(0),L=Object(n.useCallback)(function(z,q){var ne=sa(q);R.current.set(ne,z),S.current.set(z,ne),x.current+=1;var X=x.current;xa(function(){X===x.current&&g({})})},[]),H=Object(n.useCallback)(function(z,q){var ne=sa(q);R.current.delete(ne),S.current.delete(z)},[]),U=Object(n.useCallback)(function(z){K(z)},[]),ae=Object(n.useCallback)(function(z,q){var ne=S.current.get(z)||"",X=La(ne);return q&&N.includes(X[0])&&X.unshift(xt),X},[N]),Y=Object(n.useCallback)(function(z,q){return z.some(function(ne){var X=ae(ne,!0);return X.includes(q)})},[ae]),Q=function(){var q=Object(sn.a)(S.current.keys());return N.length&&q.push(xt),q},se=Object(n.useCallback)(function(z){var q="".concat(S.current.get(z)).concat(Wt),ne=new Set;return Object(sn.a)(R.current.keys()).forEach(function(X){X.startsWith(q)&&ne.add(R.current.get(X))}),ne},[]);return{registerPath:L,unregisterPath:H,refreshOverflowKeys:U,isSubPathKey:Y,getKeyPath:ae,getKeys:Q,getSubPathKeys:se}}var Ot=[],Va=function(l){var g,S,R=l.prefixCls,O=R===void 0?"rc-menu":R,D=l.style,N=l.className,K=l.tabIndex,x=K===void 0?0:K,L=l.children,H=l.direction,U=l.id,ae=l.mode,Y=ae===void 0?"vertical":ae,Q=l.inlineCollapsed,se=l.disabled,z=l.disabledOverflow,q=l.subMenuOpenDelay,ne=q===void 0?.1:q,X=l.subMenuCloseDelay,re=X===void 0?.1:X,k=l.forceSubMenuRender,pe=l.defaultOpenKeys,_=l.openKeys,ue=l.activeKey,le=l.defaultActiveFirst,te=l.selectable,G=te===void 0?!0:te,ie=l.multiple,fe=ie===void 0?!1:ie,ce=l.defaultSelectedKeys,ye=l.selectedKeys,Ae=l.onSelect,he=l.onDeselect,ge=l.inlineIndent,De=ge===void 0?24:ge,Re=l.motion,Se=l.defaultMotions,Ee=l.triggerSubMenuAction,Ne=Ee===void 0?"hover":Ee,Ue=l.builtinPlacements,Ie=l.itemIcon,we=l.expandIcon,xe=l.overflowedIndicator,Te=xe===void 0?"...":xe,bn=l.getPopupContainer,Qe=l.onClick,Ve=l.onOpenChange,_e=l.onKeyDown,mn=l.openAnimation,fn=l.openTransitionName,Fe=Object(Oe.a)(l,["prefixCls","style","className","tabIndex","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName"]),Ke=Bt(L,Ot),He=n.useState(!1),Je=Object(V.a)(He,2),Nn=Je[0],Gn=Je[1],In=n.useRef(),Xe=Wa(U),Cn=H==="rtl",en=n.useMemo(function(){return Y==="inline"&&Q?["vertical",Q]:[Y,!1]},[Y,Q]),En=Object(V.a)(en,2),Ge=En[0],Ze=En[1],On=n.useState(0),an=Object(V.a)(On,2),ze=an[0],We=an[1],Yn=ze>=Ke.length-1||Ge!=="horizontal"||z,Qn=Object(vn.a)(pe,{value:_,postState:function(Z){return Z||Ot}}),ot=Object(V.a)(Qn,2),pn=ot[0],ln=ot[1],Xn=n.useState(pn),hn=Object(V.a)(Xn,2),rn=hn[0],Zn=hn[1],Sn=Ge==="inline",kn=n.useRef(!1);n.useEffect(function(){Sn&&Zn(pn)},[pn]),n.useEffect(function(){if(!kn.current){kn.current=!0;return}if(Sn)ln(rn);else{var ee=[];ln(ee),Ve==null||Ve(ee)}},[Sn]);var nn=$a(),Fn=nn.registerPath,de=nn.unregisterPath,be=nn.refreshOverflowKeys,je=nn.isSubPathKey,Ye=nn.getKeyPath,qn=nn.getKeys,Ft=nn.getSubPathKeys,Jt=n.useMemo(function(){return{registerPath:Fn,unregisterPath:de}},[Fn,de]),zt=n.useMemo(function(){return{isSubPathKey:je}},[je]);n.useEffect(function(){be(Yn?Ot:Ke.slice(ze+1).map(function(ee){return ee.key}))},[ze,Yn]);var Ut=Object(vn.a)(ue||le&&((g=Ke[0])===null||g===void 0?void 0:g.key),{value:ue}),ut=Object(V.a)(Ut,2),Rt=ut[0],pt=ut[1],Dt=it(function(ee){pt(ee)}),Ht=it(function(){pt(void 0)}),jt=Object(vn.a)(ce||[],{value:ye,postState:function(Z){return Array.isArray(Z)?Z:Z==null?Ot:[Z]}}),Pt=Object(V.a)(jt,2),lt=Pt[0],Rn=Pt[1],At=function(Z){if(!!G){var ve=Z.key,Me=lt.includes(ve),ke;Me?ke=lt.filter(function(et){return et!==ve}):fe?ke=[].concat(Object(sn.a)(lt),[ve]):ke=[ve],Rn(ke);var $n=Object(me.a)(Object(me.a)({},Z),{},{selectedKeys:ke});Me?he==null||he($n):Ae==null||Ae($n)}},Tt=it(function(ee){Qe==null||Qe(a(ee)),At(ee)}),ht=it(function(ee,Z){var ve=pn.filter(function(ke){return ke!==ee});if(Z)ve.push(ee);else if(Ge!=="inline"){var Me=Ft(ee);ve=ve.filter(function(ke){return!Me.has(ke)})}rt()(pn,ve)||(ln(ve),Ve==null||Ve(ve))}),_n=it(bn),vt=function(Z,ve){var Me=ve!=null?ve:!pn.includes(Z);ht(Z,Me)},gt=Ma(Ge,Rt,Cn,Xe,In,qn,Ye,pt,vt,_e);n.useEffect(function(){Gn(!0)},[]);var Nt=Ge!=="horizontal"||z?Ke:Ke.map(function(ee,Z){return n.createElement(P,{key:ee.key,overflowDisabled:Z>ze},ee)}),It=n.createElement(b,Object(W.a)({id:U,ref:In,prefixCls:"".concat(O,"-overflow"),component:"ul",itemComponent:Hn,className:Ce()(O,"".concat(O,"-root"),"".concat(O,"-").concat(Ge),N,(S={},Object(oe.a)(S,"".concat(O,"-inline-collapsed"),Ze),Object(oe.a)(S,"".concat(O,"-rtl"),Cn),S)),dir:H,style:D,role:"menu",tabIndex:x,data:Nt,renderRawItem:function(Z){return Z},renderRawRest:function(Z){var ve=Z.length,Me=ve?Ke.slice(-ve):null;return n.createElement(qt,{eventKey:xt,title:Te,disabled:Yn,internalPopupClose:ve===0},Me)},maxCount:Ge!=="horizontal"||z?b.INVALIDATE:b.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(Z){We(Z)},onKeyDown:gt},Fe));return n.createElement($e.Provider,{value:Xe},n.createElement(P,{prefixCls:O,mode:Ge,openKeys:pn,rtl:Cn,disabled:se,motion:Nn?Re:null,defaultMotions:Nn?Se:null,activeKey:Rt,onActive:Dt,onInactive:Ht,selectedKeys:lt,inlineIndent:De,subMenuOpenDelay:ne,subMenuCloseDelay:re,forceSubMenuRender:k,builtinPlacements:Ue,triggerSubMenuAction:Ne,getPopupContainer:_n,itemIcon:Ie,expandIcon:we,onItemClick:Tt,onOpenChange:ht},n.createElement(J.Provider,{value:zt},It),n.createElement(v.Provider,{value:Jt},Ke)))},Ja=Va,za=function(l){var g=l.className,S=l.title,R=l.eventKey,O=l.children,D=Object(Oe.a)(l,["className","title","eventKey","children"]),N=n.useContext(E),K=N.prefixCls,x="".concat(K,"-item-group");return n.createElement("li",Object(W.a)({},D,{onClick:function(H){return H.stopPropagation()},className:Ce()(x,g)}),n.createElement("div",{className:"".concat(x,"-title"),title:typeof S=="string"?S:void 0},S),n.createElement("ul",{className:"".concat(x,"-list")},O))};function Ua(s){var l=s.children,g=Object(Oe.a)(s,["children"]),S=M(g.eventKey),R=Bt(l,S),O=F();return O?R:n.createElement(za,g,R)}function Ha(s){var l=s.className,g=s.style,S=n.useContext(E),R=S.prefixCls,O=F();return O?null:n.createElement("li",{className:Ce()("".concat(R,"-item-divider"),l),style:g})}var ft=Ja;ft.Item=Hn,ft.SubMenu=qt,ft.ItemGroup=Ua,ft.Divider=Ha;var Ga=ft,Ya=e("eDIo");function Qa(s,l){var g=s.prefixCls,S=s.editable,R=s.locale,O=s.style;return!S||S.showAdd===!1?null:n.createElement("button",{ref:l,type:"button",className:"".concat(g,"-nav-add"),style:O,"aria-label":(R==null?void 0:R.addAriaLabel)||"Add tab",onClick:function(N){S.onEdit("add",{event:N})}},S.addIcon||"+")}var ia=n.forwardRef(Qa);function Xa(s,l){var g=s.prefixCls,S=s.id,R=s.tabs,O=s.locale,D=s.mobile,N=s.moreIcon,K=N===void 0?"More":N,x=s.moreTransitionName,L=s.style,H=s.className,U=s.editable,ae=s.tabBarGutter,Y=s.rtl,Q=s.onTabClick,se=Object(n.useState)(!1),z=Object(V.a)(se,2),q=z[0],ne=z[1],X=Object(n.useState)(null),re=Object(V.a)(X,2),k=re[0],pe=re[1],_="".concat(S,"-more-popup"),ue="".concat(g,"-dropdown"),le=k!==null?"".concat(_,"-").concat(k):null,te=O==null?void 0:O.dropdownAriaLabel,G=n.createElement(Ga,{onClick:function(ge){var De=ge.key,Re=ge.domEvent;Q(De,Re),ne(!1)},id:_,tabIndex:-1,role:"listbox","aria-activedescendant":le,selectedKeys:[k],"aria-label":te!==void 0?te:"expanded dropdown"},R.map(function(he){return n.createElement(Hn,{key:he.key,id:"".concat(_,"-").concat(he.key),role:"option","aria-controls":S&&"".concat(S,"-panel-").concat(he.key),disabled:he.disabled},he.tab)}));function ie(he){for(var ge=R.filter(function(Ne){return!Ne.disabled}),De=ge.findIndex(function(Ne){return Ne.key===k})||0,Re=ge.length,Se=0;Se<Re;Se+=1){De=(De+he+Re)%Re;var Ee=ge[De];if(!Ee.disabled){pe(Ee.key);return}}}function fe(he){var ge=he.which;if(!q){[Pe.a.DOWN,Pe.a.SPACE,Pe.a.ENTER].includes(ge)&&(ne(!0),he.preventDefault());return}switch(ge){case Pe.a.UP:ie(-1),he.preventDefault();break;case Pe.a.DOWN:ie(1),he.preventDefault();break;case Pe.a.ESC:ne(!1);break;case Pe.a.SPACE:case Pe.a.ENTER:k!==null&&Q(k,he);break}}Object(n.useEffect)(function(){var he=document.getElementById(le);he&&he.scrollIntoView&&he.scrollIntoView(!1)},[k]),Object(n.useEffect)(function(){q||pe(null)},[q]);var ce=Object(oe.a)({},Y?"marginLeft":"marginRight",ae);R.length||(ce.visibility="hidden",ce.order=1);var ye=Ce()(Object(oe.a)({},"".concat(ue,"-rtl"),Y)),Ae=D?null:n.createElement(Ya.default,{prefixCls:ue,overlay:G,trigger:["hover"],visible:q,transitionName:x,onVisibleChange:ne,overlayClassName:ye,mouseEnterDelay:.1,mouseLeaveDelay:.1},n.createElement("button",{type:"button",className:"".concat(g,"-nav-more"),style:ce,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":_,id:"".concat(S,"-more"),"aria-expanded":q,onKeyDown:fe},K));return n.createElement("div",{className:Ce()("".concat(g,"-nav-operations"),H),style:L,ref:l},Ae,n.createElement(ia,{prefixCls:g,locale:O,editable:U}))}var Za=n.forwardRef(Xa),Lt=Object(n.createContext)(null),ka=.1,oa=.01,St=20,ua=Math.pow(.995,St);function qa(s,l){var g=Object(n.useState)(),S=Object(V.a)(g,2),R=S[0],O=S[1],D=Object(n.useState)(0),N=Object(V.a)(D,2),K=N[0],x=N[1],L=Object(n.useState)(0),H=Object(V.a)(L,2),U=H[0],ae=H[1],Y=Object(n.useState)(),Q=Object(V.a)(Y,2),se=Q[0],z=Q[1],q=Object(n.useRef)();function ne(ue){var le=ue.touches[0],te=le.screenX,G=le.screenY;O({x:te,y:G}),window.clearInterval(q.current)}function X(ue){if(!!R){ue.preventDefault();var le=ue.touches[0],te=le.screenX,G=le.screenY;O({x:te,y:G});var ie=te-R.x,fe=G-R.y;l(ie,fe);var ce=Date.now();x(ce),ae(ce-K),z({x:ie,y:fe})}}function re(){if(!!R&&(O(null),z(null),se)){var ue=se.x/U,le=se.y/U,te=Math.abs(ue),G=Math.abs(le);if(Math.max(te,G)<ka)return;var ie=ue,fe=le;q.current=window.setInterval(function(){if(Math.abs(ie)<oa&&Math.abs(fe)<oa){window.clearInterval(q.current);return}ie*=ua,fe*=ua,l(ie*St,fe*St)},St)}}var k=Object(n.useRef)();function pe(ue){var le=ue.deltaX,te=ue.deltaY,G=0,ie=Math.abs(le),fe=Math.abs(te);ie===fe?G=k.current==="x"?le:te:ie>fe?(G=le,k.current="x"):(G=te,k.current="y"),l(-G,-G)&&ue.preventDefault()}var _=Object(n.useRef)(null);_.current={onTouchStart:ne,onTouchMove:X,onTouchEnd:re,onWheel:pe},n.useEffect(function(){function ue(ie){_.current.onTouchStart(ie)}function le(ie){_.current.onTouchMove(ie)}function te(ie){_.current.onTouchEnd(ie)}function G(ie){_.current.onWheel(ie)}return document.addEventListener("touchmove",le,{passive:!1}),document.addEventListener("touchend",te,{passive:!1}),s.current.addEventListener("touchstart",ue,{passive:!1}),s.current.addEventListener("wheel",G),function(){document.removeEventListener("touchmove",le),document.removeEventListener("touchend",te)}},[])}function _a(){var s=Object(n.useRef)(new Map);function l(S){return s.current.has(S)||s.current.set(S,n.createRef()),s.current.get(S)}function g(S){s.current.delete(S)}return[l,g]}function la(s,l){var g=n.useRef(s),S=n.useState({}),R=Object(V.a)(S,2),O=R[1];function D(N){var K=typeof N=="function"?N(g.current):N;K!==g.current&&l(K,g.current),g.current=K,O({})}return[g.current,D]}var da=function(l){var g=l.position,S=l.prefixCls,R=l.extra;if(!R)return null;var O,D=R;return g==="right"&&(O=D.right||!D.left&&D||null),g==="left"&&(O=D.left||null),O?n.createElement("div",{className:"".concat(S,"-extra-content")},O):null};function er(s,l){var g,S=n.useContext(Lt),R=S.prefixCls,O=S.tabs,D=s.className,N=s.style,K=s.id,x=s.animated,L=s.activeKey,H=s.rtl,U=s.extra,ae=s.editable,Y=s.locale,Q=s.tabPosition,se=s.tabBarGutter,z=s.children,q=s.onTabClick,ne=s.onTabScroll,X=Object(n.useRef)(),re=Object(n.useRef)(),k=Object(n.useRef)(),pe=Object(n.useRef)(),_=_a(),ue=Object(V.a)(_,2),le=ue[0],te=ue[1],G=Q==="top"||Q==="bottom",ie=la(0,function(ee,Z){G&&ne&&ne({direction:ee>Z?"left":"right"})}),fe=Object(V.a)(ie,2),ce=fe[0],ye=fe[1],Ae=la(0,function(ee,Z){!G&&ne&&ne({direction:ee>Z?"top":"bottom"})}),he=Object(V.a)(Ae,2),ge=he[0],De=he[1],Re=Object(n.useState)(0),Se=Object(V.a)(Re,2),Ee=Se[0],Ne=Se[1],Ue=Object(n.useState)(0),Ie=Object(V.a)(Ue,2),we=Ie[0],xe=Ie[1],Te=Object(n.useState)(0),bn=Object(V.a)(Te,2),Qe=bn[0],Ve=bn[1],_e=Object(n.useState)(0),mn=Object(V.a)(_e,2),fn=mn[0],Fe=mn[1],Ke=Object(n.useState)(null),He=Object(V.a)(Ke,2),Je=He[0],Nn=He[1],Gn=Object(n.useState)(null),In=Object(V.a)(Gn,2),Xe=In[0],Cn=In[1],en=Object(n.useState)(0),En=Object(V.a)(en,2),Ge=En[0],Ze=En[1],On=Object(n.useState)(0),an=Object(V.a)(On,2),ze=an[0],We=an[1],Yn=gn(new Map),Qn=Object(V.a)(Yn,2),ot=Qn[0],pn=Qn[1],ln=dt(O,ot,Ee),Xn="".concat(R,"-nav-operations-hidden"),hn=0,rn=0;G?H?(hn=0,rn=Math.max(0,Ee-Je)):(hn=Math.min(0,Je-Ee),rn=0):(hn=Math.min(0,Xe-we),rn=0);function Zn(ee){return ee<hn?hn:ee>rn?rn:ee}var Sn=Object(n.useRef)(),kn=Object(n.useState)(),nn=Object(V.a)(kn,2),Fn=nn[0],de=nn[1];function be(){de(Date.now())}function je(){window.clearTimeout(Sn.current)}qa(X,function(ee,Z){function ve(Me,ke){Me(function($n){var et=Zn($n+ke);return et})}if(G){if(Je>=Ee)return!1;ve(ye,ee)}else{if(Xe>=we)return!1;ve(De,Z)}return je(),be(),!0}),Object(n.useEffect)(function(){return je(),Fn&&(Sn.current=window.setTimeout(function(){de(0)},100)),je},[Fn]);function Ye(){var ee=arguments.length>0&&arguments[0]!==void 0?arguments[0]:L,Z=ln.get(ee)||{width:0,height:0,left:0,right:0,top:0};if(G){var ve=ce;H?Z.right<ce?ve=Z.right:Z.right+Z.width>ce+Je&&(ve=Z.right+Z.width-Je):Z.left<-ce?ve=-Z.left:Z.left+Z.width>-ce+Je&&(ve=-(Z.left+Z.width-Je)),De(0),ye(Zn(ve))}else{var Me=ge;Z.top<-ge?Me=-Z.top:Z.top+Z.height>-ge+Xe&&(Me=-(Z.top+Z.height-Xe)),ye(0),De(Zn(Me))}}var qn=ct(ln,{width:Je,height:Xe,left:ce,top:ge},{width:Qe,height:fn},{width:Ge,height:ze},Object(me.a)(Object(me.a)({},s),{},{tabs:O})),Ft=Object(V.a)(qn,2),Jt=Ft[0],zt=Ft[1],Ut=O.map(function(ee){var Z=ee.key;return n.createElement(wn,{id:K,prefixCls:R,key:Z,rtl:H,tab:ee,closable:ee.closable,editable:ae,active:Z===L,tabPosition:Q,tabBarGutter:se,renderWrapper:z,removeAriaLabel:Y==null?void 0:Y.removeAriaLabel,ref:le(Z),onClick:function(Me){q(Z,Me)},onRemove:function(){te(Z)},onFocus:function(){Ye(Z),be(),H||(X.current.scrollLeft=0),X.current.scrollTop=0}})}),ut=Pn(function(){var ee,Z,ve,Me,ke,$n,et,Gt,Yt,ur=((ee=X.current)===null||ee===void 0?void 0:ee.offsetWidth)||0,lr=((Z=X.current)===null||Z===void 0?void 0:Z.offsetHeight)||0,ha=((ve=pe.current)===null||ve===void 0?void 0:ve.offsetWidth)||0,va=((Me=pe.current)===null||Me===void 0?void 0:Me.offsetHeight)||0,dr=((ke=k.current)===null||ke===void 0?void 0:ke.offsetWidth)||0,cr=(($n=k.current)===null||$n===void 0?void 0:$n.offsetHeight)||0;Nn(ur),Cn(lr),Ze(ha),We(va);var ga=(((et=re.current)===null||et===void 0?void 0:et.offsetWidth)||0)-ha,ya=(((Gt=re.current)===null||Gt===void 0?void 0:Gt.offsetHeight)||0)-va;Ne(ga),xe(ya);var ba=(Yt=k.current)===null||Yt===void 0?void 0:Yt.className.includes(Xn);Ve(ga-(ba?0:dr)),Fe(ya-(ba?0:cr)),pn(function(){var Ca=new Map;return O.forEach(function(mr){var Ea=mr.key,yt=le(Ea).current;yt&&Ca.set(Ea,{width:yt.offsetWidth,height:yt.offsetHeight,left:yt.offsetLeft,top:yt.offsetTop})}),Ca})}),Rt=O.slice(0,Jt),pt=O.slice(zt+1),Dt=[].concat(Object(sn.a)(Rt),Object(sn.a)(pt)),Ht=Object(n.useState)(),jt=Object(V.a)(Ht,2),Pt=jt[0],lt=jt[1],Rn=ln.get(L),At=Object(n.useRef)();function Tt(){Le.a.cancel(At.current)}Object(n.useEffect)(function(){var ee={};return Rn&&(G?(H?ee.right=Rn.right:ee.left=Rn.left,ee.width=Rn.width):(ee.top=Rn.top,ee.height=Rn.height)),Tt(),At.current=Object(Le.a)(function(){lt(ee)}),Tt},[Rn,G,H]),Object(n.useEffect)(function(){Ye()},[L,Rn,ln,G]),Object(n.useEffect)(function(){ut()},[H,se,L,O.map(function(ee){return ee.key}).join("_")]);var ht=!!Dt.length,_n="".concat(R,"-nav-wrap"),vt,gt,Nt,It;return G?H?(gt=ce>0,vt=ce+Je<Ee):(vt=ce<0,gt=-ce+Je<Ee):(Nt=ge<0,It=-ge+Xe<we),n.createElement("div",{ref:l,role:"tablist",className:Ce()("".concat(R,"-nav"),D),style:N,onKeyDown:function(){be()}},n.createElement(da,{position:"left",extra:U,prefixCls:R}),n.createElement(Bn.default,{onResize:ut},n.createElement("div",{className:Ce()(_n,(g={},Object(oe.a)(g,"".concat(_n,"-ping-left"),vt),Object(oe.a)(g,"".concat(_n,"-ping-right"),gt),Object(oe.a)(g,"".concat(_n,"-ping-top"),Nt),Object(oe.a)(g,"".concat(_n,"-ping-bottom"),It),g)),ref:X},n.createElement(Bn.default,{onResize:ut},n.createElement("div",{ref:re,className:"".concat(R,"-nav-list"),style:{transform:"translate(".concat(ce,"px, ").concat(ge,"px)"),transition:Fn?"none":void 0}},Ut,n.createElement(ia,{ref:pe,prefixCls:R,locale:Y,editable:ae,style:{visibility:ht?"hidden":null}}),n.createElement("div",{className:Ce()("".concat(R,"-ink-bar"),Object(oe.a)({},"".concat(R,"-ink-bar-animated"),x.inkBar)),style:Pt}))))),n.createElement(Za,Object(W.a)({},s,{ref:k,prefixCls:R,tabs:Dt,className:!ht&&Xn})),n.createElement(da,{position:"right",extra:U,prefixCls:R}))}var ca=n.forwardRef(er);function nr(s){var l=s.id,g=s.activeKey,S=s.animated,R=s.tabPosition,O=s.rtl,D=s.destroyInactiveTabPane,N=n.useContext(Lt),K=N.prefixCls,x=N.tabs,L=S.tabPane,H=x.findIndex(function(U){return U.key===g});return n.createElement("div",{className:Ce()("".concat(K,"-content-holder"))},n.createElement("div",{className:Ce()("".concat(K,"-content"),"".concat(K,"-content-").concat(R),Object(oe.a)({},"".concat(K,"-content-animated"),L)),style:H&&L?Object(oe.a)({},O?"marginRight":"marginLeft","-".concat(H,"00%")):null},x.map(function(U){return n.cloneElement(U.node,{key:U.key,prefixCls:K,tabKey:U.key,id:l,animated:L,active:U.key===g,destroyInactiveTabPane:D})})))}function ma(s){var l=s.prefixCls,g=s.forceRender,S=s.className,R=s.style,O=s.id,D=s.active,N=s.animated,K=s.destroyInactiveTabPane,x=s.tabKey,L=s.children,H=n.useState(g),U=Object(V.a)(H,2),ae=U[0],Y=U[1];n.useEffect(function(){D?Y(!0):K&&Y(!1)},[D,K]);var Q={};return D||(N?(Q.visibility="hidden",Q.height=0,Q.overflowY="hidden"):Q.display="none"),n.createElement("div",{id:O&&"".concat(O,"-panel-").concat(x),role:"tabpanel",tabIndex:D?0:-1,"aria-labelledby":O&&"".concat(O,"-tab-").concat(x),"aria-hidden":!D,style:Object(me.a)(Object(me.a)({},Q),R),className:Ce()("".concat(l,"-tabpane"),D&&"".concat(l,"-tabpane-active"),S)},(D||ae||g)&&L)}var fa=0;function tr(s){return Object(cn.a)(s).map(function(l){if(n.isValidElement(l)){var g=l.key!==void 0?String(l.key):void 0;return Object(me.a)(Object(me.a)({key:g},l.props),{},{node:l})}return null}).filter(function(l){return l})}function ar(s,l){var g,S=s.id,R=s.prefixCls,O=R===void 0?"rc-tabs":R,D=s.className,N=s.children,K=s.direction,x=s.activeKey,L=s.defaultActiveKey,H=s.editable,U=s.animated,ae=U===void 0?{inkBar:!0,tabPane:!1}:U,Y=s.tabPosition,Q=Y===void 0?"top":Y,se=s.tabBarGutter,z=s.tabBarStyle,q=s.tabBarExtraContent,ne=s.locale,X=s.moreIcon,re=s.moreTransitionName,k=s.destroyInactiveTabPane,pe=s.renderTabBar,_=s.onChange,ue=s.onTabClick,le=s.onTabScroll,te=Object(Oe.a)(s,["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"]),G=tr(N),ie=K==="rtl",fe;ae===!1?fe={inkBar:!1,tabPane:!1}:ae===!0?fe={inkBar:!0,tabPane:!0}:fe=Object(me.a)({inkBar:!0,tabPane:!1},Object(qe.a)(ae)==="object"?ae:{});var ce=Object(n.useState)(!1),ye=Object(V.a)(ce,2),Ae=ye[0],he=ye[1];Object(n.useEffect)(function(){he(Object(jn.a)())},[]);var ge=Object(vn.a)(function(){var Fe;return(Fe=G[0])===null||Fe===void 0?void 0:Fe.key},{value:x,defaultValue:L}),De=Object(V.a)(ge,2),Re=De[0],Se=De[1],Ee=Object(n.useState)(function(){return G.findIndex(function(Fe){return Fe.key===Re})}),Ne=Object(V.a)(Ee,2),Ue=Ne[0],Ie=Ne[1];Object(n.useEffect)(function(){var Fe=G.findIndex(function(He){return He.key===Re});if(Fe===-1){var Ke;Fe=Math.max(0,Math.min(Ue,G.length-1)),Se((Ke=G[Fe])===null||Ke===void 0?void 0:Ke.key)}Ie(Fe)},[G.map(function(Fe){return Fe.key}).join("_"),Re,Ue]);var we=Object(vn.a)(null,{value:S}),xe=Object(V.a)(we,2),Te=xe[0],bn=xe[1],Qe=Q;Ae&&!["left","right"].includes(Q)&&(Qe="top"),Object(n.useEffect)(function(){S||(bn("rc-tabs-".concat(fa)),fa+=1)},[]);function Ve(Fe,Ke){ue==null||ue(Fe,Ke),Se(Fe),_==null||_(Fe)}var _e={id:Te,activeKey:Re,animated:fe,tabPosition:Qe,rtl:ie,mobile:Ae},mn,fn=Object(me.a)(Object(me.a)({},_e),{},{editable:H,locale:ne,moreIcon:X,moreTransitionName:re,tabBarGutter:se,onTabClick:Ve,onTabScroll:le,extra:q,style:z,panes:N});return pe?mn=pe(fn,ca):mn=n.createElement(ca,fn),n.createElement(Lt.Provider,{value:{tabs:G,prefixCls:O}},n.createElement("div",Object(W.a)({ref:l,id:S,className:Ce()(O,"".concat(O,"-").concat(Qe),(g={},Object(oe.a)(g,"".concat(O,"-mobile"),Ae),Object(oe.a)(g,"".concat(O,"-editable"),H),Object(oe.a)(g,"".concat(O,"-rtl"),ie),g),D)},te),mn,n.createElement(nr,Object(W.a)({destroyInactiveTabPane:k},_e,{animated:fe}))))}var pa=n.forwardRef(ar);pa.TabPane=ma;var rr=pa,sr=rr,$t=e("MZF8"),un=e("dEAq"),ir=e("ZpkN"),br=e("TIsu");function Vt(s,l){var g,S=(g=s.match(/\.(\w+)$/))===null||g===void 0?void 0:g[1];return S||(S=l.tsx?"tsx":"jsx"),S}var or=s=>{var l,g,S,R=Object(n.useRef)(),O=Object(n.useContext)(un.context),D=O.locale,N=Object(un.useLocaleProps)(D,s),K=Object(un.useDemoUrl)(N.identifier),x=N.demoUrl||K,L=($t.a===null||$t.a===void 0?void 0:$t.a.location.hash)==="#".concat(N.identifier),H=Object.keys(N.sources).length===1,U=Object(un.useCodeSandbox)((l=N.hideActions)!==null&&l!==void 0&&l.includes("CSB")?null:N),ae=Object(un.useRiddle)((g=N.hideActions)!==null&&g!==void 0&&g.includes("RIDDLE")?null:N),Y=Object(un.useMotions)(N.motions||[],R.current),Q=Object($.default)(Y,2),se=Q[0],z=Q[1],q=Object(un.useCopy)(),ne=Object($.default)(q,2),X=ne[0],re=ne[1],k=Object(n.useState)("_"),pe=Object($.default)(k,2),_=pe[0],ue=pe[1],le=Object(n.useState)(Vt(_,N.sources[_])),te=Object($.default)(le,2),G=te[0],ie=te[1],fe=Object(n.useState)(Boolean(N.defaultShowCode)),ce=Object($.default)(fe,2),ye=ce[0],Ae=ce[1],he=Object(n.useState)(Math.random()),ge=Object($.default)(he,2),De=ge[0],Re=ge[1],Se=N.sources[_][G]||N.sources[_].content,Ee=Object(un.useTSPlaygroundUrl)(D,Se),Ne=Object(n.useRef)(),Ue=Object(un.usePrefersColor)(),Ie=Object($.default)(Ue,1),we=Ie[0];Object(n.useEffect)(()=>{Re(Math.random())},[we]);function xe(Te){ue(Te),ie(Vt(Te,N.sources[Te]))}return y.a.createElement("div",{style:N.style,className:[N.className,"__dumi-default-previewer",L?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:N.identifier,"data-debug":N.debug||void 0,"data-iframe":N.iframe||void 0},N.iframe&&y.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),y.a.createElement("div",{ref:R,className:"__dumi-default-previewer-demo",style:{transform:N.transform?"translate(0, 0)":void 0,padding:N.compact||N.iframe&&N.compact!==!1?"0":void 0,background:N.background}},N.iframe?y.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(N.iframe).replace(/(\d)$/,"$1px")},key:De,src:x,ref:Ne}):N.children),y.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":N.title},N.title&&y.a.createElement(un.AnchorLink,{to:"#".concat(N.identifier)},N.title),N.description&&y.a.createElement("div",{dangerouslySetInnerHTML:{__html:N.description}})),y.a.createElement("div",{className:"__dumi-default-previewer-actions"},U&&y.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:U}),ae&&y.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:ae}),N.motions&&y.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:z,onClick:()=>se()}),N.iframe&&y.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:()=>Re(Math.random())}),!((S=N.hideActions)!==null&&S!==void 0&&S.includes("EXTERNAL"))&&y.a.createElement(un.Link,{target:"_blank",to:x},y.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),y.a.createElement("span",null),y.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":re,onClick:()=>X(Se)}),G==="tsx"&&ye&&y.a.createElement(un.Link,{target:"_blank",to:Ee},y.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),y.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(ye?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:()=>Ae(!ye)})),ye&&y.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!H&&y.a.createElement(sr,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xB7\xB7\xB7",defaultActiveKey:_,onChange:xe},Object.keys(N.sources).map(Te=>y.a.createElement(ma,{tab:Te==="_"?"index.".concat(Vt(Te,N.sources[Te])):Te,key:Te}))),y.a.createElement("div",{className:"__dumi-default-previewer-source"},y.a.createElement(ir.a,{code:Se,lang:G,showCopy:!1}))))},Cr=dn.default=or},"80pN":function(Dn,dn,e){"use strict";(function($){/** @license React v16.14.0
* react-dom-test-utils.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var n=e("MgzW"),y=e("q1tI"),W=e("i8i4"),oe=e("QCnb");function V(t){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+t,c=1;c<arguments.length;c++)r+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+t+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var qe=y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;qe.hasOwnProperty("ReactCurrentDispatcher")||(qe.ReactCurrentDispatcher={current:null}),qe.hasOwnProperty("ReactCurrentBatchConfig")||(qe.ReactCurrentBatchConfig={suspense:null});function Oe(t){var r=t,c=t;if(t.alternate)for(;r.return;)r=r.return;else{t=r;do r=t,(r.effectTag&1026)!=0&&(c=r.return),t=r.return;while(t)}return r.tag===3?c:null}function me(t){if(Oe(t)!==t)throw Error(V(188))}function Be(t){var r=t.alternate;if(!r){if(r=Oe(t),r===null)throw Error(V(188));return r!==t?null:t}for(var c=t,v=r;;){var F=c.return;if(F===null)break;var w=F.alternate;if(w===null){if(v=F.return,v!==null){c=v;continue}break}if(F.child===w.child){for(w=F.child;w;){if(w===c)return me(F),t;if(w===v)return me(F),r;w=w.sibling}throw Error(V(188))}if(c.return!==v.return)c=F,v=w;else{for(var M=!1,J=F.child;J;){if(J===c){M=!0,c=F,v=w;break}if(J===v){M=!0,v=F,c=w;break}J=J.sibling}if(!M){for(J=w.child;J;){if(J===c){M=!0,c=w,v=F;break}if(J===v){M=!0,v=w,c=F;break}J=J.sibling}if(!M)throw Error(V(189))}}if(c.alternate!==v)throw Error(V(190))}if(c.tag!==3)throw Error(V(188));return c.stateNode.current===c?t:r}function Ce(){return!0}function cn(){return!1}function jn(t,r,c,v){this.dispatchConfig=t,this._targetInst=r,this.nativeEvent=c,t=this.constructor.Interface;for(var F in t)t.hasOwnProperty(F)&&((r=t[F])?this[F]=r(c):F==="target"?this.target=v:this[F]=c[F]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Ce:cn,this.isPropagationStopped=cn,this}n(jn.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Ce)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Ce)},persist:function(){this.isPersistent=Ce},isPersistent:cn,destructor:function(){var t=this.constructor.Interface,r;for(r in t)this[r]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=cn,this._dispatchInstances=this._dispatchListeners=null}}),jn.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null},jn.extend=function(t){function r(){}function c(){return v.apply(this,arguments)}var v=this;r.prototype=v.prototype;var F=new r;return n(F,c.prototype),c.prototype=F,c.prototype.constructor=c,c.Interface=n({},v.Interface,t),c.extend=v.extend,Le(c),c},Le(jn);function vn(t,r,c,v){if(this.eventPool.length){var F=this.eventPool.pop();return this.call(F,t,r,c,v),F}return new this(t,r,c,v)}function sn(t){if(!(t instanceof this))throw Error(V(279));t.destructor(),10>this.eventPool.length&&this.eventPool.push(t)}function Le(t){t.eventPool=[],t.getPooled=vn,t.release=sn}var Bn=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined");function Pn(t,r){var c={};return c[t.toLowerCase()]=r.toLowerCase(),c["Webkit"+t]="webkit"+r,c["Moz"+t]="moz"+r,c}var gn={animationend:Pn("Animation","AnimationEnd"),animationiteration:Pn("Animation","AnimationIteration"),animationstart:Pn("Animation","AnimationStart"),transitionend:Pn("Transition","TransitionEnd")},Pe={},nt={};Bn&&(nt=document.createElement("div").style,"AnimationEvent"in window||(delete gn.animationend.animation,delete gn.animationiteration.animation,delete gn.animationstart.animation),"TransitionEvent"in window||delete gn.transitionend.transition);function wn(t){if(Pe[t])return Pe[t];if(!gn[t])return t;var r=gn[t],c;for(c in r)if(r.hasOwnProperty(c)&&c in nt)return Pe[t]=r[c];return t}var tt=wn("animationend"),dt=wn("animationiteration"),at=wn("animationstart"),ct=wn("transitionend"),Mn=null;function rt(t){if(Mn===null)try{var r=("require"+Math.random()).slice(0,7);Mn=($&&$[r])("timers").setImmediate}catch(c){Mn=function(v){var F=new MessageChannel;F.port1.onmessage=v,F.port2.postMessage(void 0)}}return Mn(t)}var Vn=W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,mt=Vn[11],Kn=Vn[12],Wn=W.unstable_batchedUpdates,Jn=qe.IsSomeRendererActing,zn=typeof oe.unstable_flushAllWithoutAsserting=="function",xn=oe.unstable_flushAllWithoutAsserting||function(){for(var t=!1;mt();)t=!0;return t};function st(t){try{xn(),rt(function(){xn()?st(t):t()})}catch(r){t(r)}}var yn=0,A=!1,T=W.findDOMNode,j=W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,f=j[0],i=j[4],h=j[5],b=j[6],C=j[7],o=j[8],p=j[9],u=j[10];function I(){}function B(t,r){if(!t)return[];if(t=Be(t),!t)return[];for(var c=t,v=[];;){if(c.tag===5||c.tag===6||c.tag===1||c.tag===0){var F=c.stateNode;r(F)&&v.push(F)}if(c.child)c.child.return=c,c=c.child;else{if(c===t)return v;for(;!c.sibling;){if(!c.return||c.return===t)return v;c=c.return}c.sibling.return=c.return,c=c.sibling}}}function E(t,r){if(t&&!t._reactInternalFiber){var c=""+t;throw t=Array.isArray(t)?"an array":t&&t.nodeType===1&&t.tagName?"a DOM node":c==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":c,Error(V(286,r,t))}}var d={renderIntoDocument:function(t){var r=document.createElement("div");return W.render(t,r)},isElement:function(t){return y.isValidElement(t)},isElementOfType:function(t,r){return y.isValidElement(t)&&t.type===r},isDOMComponent:function(t){return!(!t||t.nodeType!==1||!t.tagName)},isDOMComponentElement:function(t){return!!(t&&y.isValidElement(t)&&t.tagName)},isCompositeComponent:function(t){return d.isDOMComponent(t)?!1:t!=null&&typeof t.render=="function"&&typeof t.setState=="function"},isCompositeComponentWithType:function(t,r){return d.isCompositeComponent(t)?t._reactInternalFiber.type===r:!1},findAllInRenderedTree:function(t,r){return E(t,"findAllInRenderedTree"),t?B(t._reactInternalFiber,r):[]},scryRenderedDOMComponentsWithClass:function(t,r){return E(t,"scryRenderedDOMComponentsWithClass"),d.findAllInRenderedTree(t,function(c){if(d.isDOMComponent(c)){var v=c.className;typeof v!="string"&&(v=c.getAttribute("class")||"");var F=v.split(/\s+/);if(!Array.isArray(r)){if(r===void 0)throw Error(V(11));r=r.split(/\s+/)}return r.every(function(w){return F.indexOf(w)!==-1})}return!1})},findRenderedDOMComponentWithClass:function(t,r){if(E(t,"findRenderedDOMComponentWithClass"),t=d.scryRenderedDOMComponentsWithClass(t,r),t.length!==1)throw Error("Did not find exactly one match (found: "+t.length+") for class:"+r);return t[0]},scryRenderedDOMComponentsWithTag:function(t,r){return E(t,"scryRenderedDOMComponentsWithTag"),d.findAllInRenderedTree(t,function(c){return d.isDOMComponent(c)&&c.tagName.toUpperCase()===r.toUpperCase()})},findRenderedDOMComponentWithTag:function(t,r){if(E(t,"findRenderedDOMComponentWithTag"),t=d.scryRenderedDOMComponentsWithTag(t,r),t.length!==1)throw Error("Did not find exactly one match (found: "+t.length+") for tag:"+r);return t[0]},scryRenderedComponentsWithType:function(t,r){return E(t,"scryRenderedComponentsWithType"),d.findAllInRenderedTree(t,function(c){return d.isCompositeComponentWithType(c,r)})},findRenderedComponentWithType:function(t,r){if(E(t,"findRenderedComponentWithType"),t=d.scryRenderedComponentsWithType(t,r),t.length!==1)throw Error("Did not find exactly one match (found: "+t.length+") for componentType:"+r);return t[0]},mockComponent:function(t,r){return r=r||t.mockTagName||"div",t.prototype.render.mockImplementation(function(){return y.createElement(r,null,this.props.children)}),this},nativeTouchData:function(t,r){return{touches:[{pageX:t,pageY:r}]}},Simulate:null,SimulateNative:{},act:function(t){function r(){yn--,Jn.current=c,Kn.current=v}A===!1&&(A=!0,console.error("act(...) is not supported in production builds of React, and might not behave as expected.")),yn++;var c=Jn.current,v=Kn.current;Jn.current=!0,Kn.current=!0;try{var F=Wn(t)}catch(w){throw r(),w}if(F!==null&&typeof F=="object"&&typeof F.then=="function")return{then:function(w,M){F.then(function(){1<yn||zn===!0&&c===!0?(r(),w()):st(function(J){r(),J?M(J):w()})},function(J){r(),M(J)})}};try{yn!==1||zn!==!1&&c!==!1||xn(),r()}catch(w){throw r(),w}return{then:function(w){w()}}}};function P(t){return function(r,c){if(y.isValidElement(r))throw Error(V(228));if(d.isCompositeComponent(r))throw Error(V(229));var v=i[t],F=new I;F.target=r,F.type=t.toLowerCase();var w=f(r),M=new jn(v,w,F,r);M.persist(),n(M,c),v.phasedRegistrationNames?h(M):b(M),W.unstable_batchedUpdates(function(){C(r),u(M)}),o()}}d.Simulate={};for(var m in i)d.Simulate[m]=P(m);function a(t,r){return function(c,v){var F=new I(t);n(F,v),d.isDOMComponent(c)?(c=T(c),F.target=c,p(r,1,document,F)):c.tagName&&(F.target=c,p(r,1,document,F))}}[["abort","abort"],[tt,"animationEnd"],[dt,"animationIteration"],[at,"animationStart"],["blur","blur"],["canplaythrough","canPlayThrough"],["canplay","canPlay"],["cancel","cancel"],["change","change"],["click","click"],["close","close"],["compositionend","compositionEnd"],["compositionstart","compositionStart"],["compositionupdate","compositionUpdate"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["dragstart","dragStart"],["drag","drag"],["drop","drop"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],["ended","ended"],["error","error"],["focus","focus"],["input","input"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["loadstart","loadStart"],["loadstart","loadStart"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["mousedown","mouseDown"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["playing","playing"],["progress","progress"],["ratechange","rateChange"],["scroll","scroll"],["seeked","seeked"],["seeking","seeking"],["selectionchange","selectionChange"],["stalled","stalled"],["suspend","suspend"],["textInput","textInput"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchmove","touchMove"],["touchstart","touchStart"],[ct,"transitionEnd"],["volumechange","volumeChange"],["waiting","waiting"],["wheel","wheel"]].forEach(function(t){var r=t[1];d.SimulateNative[r]=a(r,t[0])}),$.exports=d.default||d}).call(this,e("hOG+")(Dn))},JjdP:function(Dn,dn,e){"use strict";e.r(dn);var $=e("9og8"),n=e("WmNS"),y=e.n(n),W=e("LtsZ"),oe=`import React, { useRef } from 'react';
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
}`,qe=`import React, { useState, useEffect } from 'react';
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
};`,me=`import React, { useState, useEffect } from 'react';
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

export default RichTextEditor;`,Be=`import React from 'react';
import FormRender, { useForm } from 'form-render';

const Demo = props => {
  const form = useForm();
  return <FormRender form={form} {...props} />;
};

export default Demo;`,Ce=`import React from 'react';
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
}`,Le=`import { Select } from 'antd';
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

export default SearchInput;`,Bn=`import React from 'react';
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

export default Demo;`,yn=dn.default={"guide-card":{component:Object(W.dynamic)({loader:function(){var A=Object($.a)(y.a.mark(function j(){return y.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"oLxE"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},j)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:oe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"card-render":{version:"0.1.2"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"0.x"}},identifier:"guide-card"}},"chart-render-demo":{component:Object(W.dynamic)({loader:function(){var A=Object($.a)(y.a.mark(function j(){var f,i,h,b,C,o,p;return y.a.wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return o=function(E,d){if(!d&&E&&E.__esModule)return E;if(E===null||typeof E!="object"&&typeof E!="function")return{default:E};var P=C(d);if(P&&P.has(E))return P.get(E);var m={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var t in E)if(t!=="default"&&Object.prototype.hasOwnProperty.call(E,t)){var r=a?Object.getOwnPropertyDescriptor(E,t):null;r&&(r.get||r.set)?Object.defineProperty(m,t,r):m[t]=E[t]}return m.default=E,P&&P.set(E,m),m},C=function(E){if(typeof WeakMap!="function")return null;var d=new WeakMap,P=new WeakMap;return(C=function(a){return a?P:d})(E)},f=e("K+nK"),I.t0=f,I.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return I.t1=I.sent,i=(0,I.t0)(I.t1),I.t2=o,I.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return I.t3=I.sent,h=(0,I.t2)(I.t3),I.next=15,Promise.all([e.e(0),e.e(2),e.e(9),e.e(10),e.e(12)]).then(e.bind(null,"36SN"));case 15:return b=I.sent,p=function(){var E=(0,h.useState)("Line"),d=(0,i.default)(E,2),P=d[0],m=d[1],a={Line:b.Line,Column:b.Column,PivotTable:b.PivotTable}[P];return h.default.createElement("div",null,h.default.createElement("div",{style:{marginBottom:10}},h.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return m("Line")}},"\u6298\u7EBF\u56FE"),h.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return m("Column")}},"\u67F1\u72B6\u56FE"),h.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return m("PivotTable")}},"\u4EA4\u53C9\u8868")),h.default.createElement(a,{meta:[{id:"date",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF",isDim:!1},{id:"uv",name:"\u8BBF\u5BA2\u6570",isDim:!1}],data:[{date:"20200101",pv:100,uv:50},{date:"20200102",pv:120,uv:60},{date:"20200103",pv:140,uv:70},{date:"20200104",pv:160,uv:80}]}))},I.abrupt("return",p);case 18:case"end":return I.stop()}},j)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"chart-render-demo"}},"column-demo":{component:Object(W.dynamic)({loader:function(){var A=Object($.a)(y.a.mark(function j(){var f,i,h,b;return y.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.next=8,Promise.all([e.e(0),e.e(2),e.e(9),e.e(10),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=o.sent,b=function(){return i.default.createElement(h.Column,{meta:[{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{pv:50,uv:20}]})},o.abrupt("return",b);case 11:case"end":return o.stop()}},j)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[{ pv: 50, uv: 20 }]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo"}},"column-demo-1":{component:Object(W.dynamic)({loader:function(){var A=Object($.a)(y.a.mark(function j(){var f,i,h,b;return y.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.next=8,Promise.all([e.e(0),e.e(2),e.e(9),e.e(10),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=o.sent,b=function(){return i.default.createElement(h.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},o.abrupt("return",b);case 11:case"end":return o.stop()}},j)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-1"}},"column-demo-2":{component:Object(W.dynamic)({loader:function(){var A=Object($.a)(y.a.mark(function j(){var f,i,h,b;return y.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.next=8,Promise.all([e.e(0),e.e(2),e.e(9),e.e(10),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=o.sent,b=function(){return i.default.createElement(h.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},o.abrupt("return",b);case 11:case"end":return o.stop()}},j)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-2"}},"column-demo-3":{component:Object(W.dynamic)({loader:function(){var A=Object($.a)(y.a.mark(function j(){var f,i,h,b;return y.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.next=8,Promise.all([e.e(0),e.e(2),e.e(9),e.e(10),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=o.sent,b=function(){return i.default.createElement(h.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},o.abrupt("return",b);case 11:case"end":return o.stop()}},j)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-3"}},"column-demo-4":{component:Object(W.dynamic)({loader:function(){var A=Object($.a)(y.a.mark(function j(){var f,i,h,b;return y.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.next=8,Promise.all([e.e(0),e.e(2),e.e(9),e.e(10),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=o.sent,b=function(){return i.default.createElement(h.Column,{inverted:!0,label:{position:"middle",layout:[{type:"interval-adjust-position"},{type:"interval-hide-overlap"},{type:"adjust-color"}]},meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},o.abrupt("return",b);case 11:case"end":return o.stop()}},j)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-4"}},"line-demo":{component:Object(W.dynamic)({loader:function(){var A=Object($.a)(y.a.mark(function j(){var f,i,h,b;return y.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.next=8,Promise.all([e.e(0),e.e(2),e.e(9),e.e(10),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=o.sent,b=function(){return i.default.createElement(h.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},o.abrupt("return",b);case 11:case"end":return o.stop()}},j)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo"}},"line-demo-1":{component:Object(W.dynamic)({loader:function(){var A=Object($.a)(y.a.mark(function j(){var f,i,h,b;return y.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.next=8,Promise.all([e.e(0),e.e(2),e.e(9),e.e(10),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=o.sent,b=function(){return i.default.createElement(h.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},o.abrupt("return",b);case 11:case"end":return o.stop()}},j)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-1"}},"line-demo-2":{component:Object(W.dynamic)({loader:function(){var A=Object($.a)(y.a.mark(function j(){var f,i,h,b;return y.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.next=8,Promise.all([e.e(0),e.e(2),e.e(9),e.e(10),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=o.sent,b=function(){return i.default.createElement(h.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"},{id:"pv",name:"\u8BBF\u95EE\u91CF"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20,pv:120},{ds:"2020-12-31",page:"\u9996\u9875",uv:120,pv:1120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21,pv:121},{ds:"2021-01-01",page:"\u9996\u9875",uv:121,pv:1121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15,pv:115},{ds:"2021-01-02",page:"\u9996\u9875",uv:115,pv:1115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40,pv:140},{ds:"2021-01-03",page:"\u9996\u9875",uv:140,pv:1140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31,pv:131},{ds:"2021-01-04",page:"\u9996\u9875",uv:131,pv:1131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32,pv:132},{ds:"2021-01-05",page:"\u9996\u9875",uv:132,pv:1132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30,pv:130},{ds:"2021-01-06",page:"\u9996\u9875",uv:130,pv:1130}]})},o.abrupt("return",b);case 11:case"end":return o.stop()}},j)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-2"}},"line-demo-3":{component:Object(W.dynamic)({loader:function(){var A=Object($.a)(y.a.mark(function j(){var f,i,h,b;return y.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.next=8,Promise.all([e.e(0),e.e(2),e.e(9),e.e(10),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=o.sent,b=function(){return i.default.createElement(h.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},o.abrupt("return",b);case 11:case"end":return o.stop()}},j)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-3"}},"line-demo-4":{component:Object(W.dynamic)({loader:function(){var A=Object($.a)(y.a.mark(function j(){var f,i,h,b;return y.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.next=8,Promise.all([e.e(0),e.e(2),e.e(9),e.e(10),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=o.sent,b=function(){return i.default.createElement(h.Line,{withArea:!0,isStack:!0,isPercent:!0,meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},o.abrupt("return",b);case 11:case"end":return o.stop()}},j)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-4"}},"pivot-table-demo":{component:Object(W.dynamic)({loader:function(){var A=Object($.a)(y.a.mark(function j(){var f,i,h,b;return y.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.next=8,Promise.all([e.e(0),e.e(2),e.e(9),e.e(10),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=o.sent,b=function(){return i.default.createElement(h.PivotTable,{style:{maxHeight:400,overflow:"auto"},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},o.abrupt("return",b);case 11:case"end":return o.stop()}},j)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo"}},"pivot-table-demo-1":{component:Object(W.dynamic)({loader:function(){var A=Object($.a)(y.a.mark(function j(){var f,i,h,b;return y.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.next=8,Promise.all([e.e(0),e.e(2),e.e(9),e.e(10),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=o.sent,b=function(){return i.default.createElement(h.PivotTable,{style:{maxHeight:400,overflow:"auto"},cellRender:function(I,B,E){return i.default.createElement("div",null,i.default.createElement("p",null,"\u53C2\u6570\u8868\uFF1A"),i.default.createElement("p",{style:{color:["red","orange","yellow","green","blue"][Object.keys(B).length]}},I),i.default.createElement("p",null,JSON.stringify(B)),i.default.createElement("p",null,JSON.stringify(E)))},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},o.abrupt("return",b);case 11:case"end":return o.stop()}},j)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-1"}},"pivot-table-demo-2":{component:Object(W.dynamic)({loader:function(){var A=Object($.a)(y.a.mark(function j(){var f,i,h,b,C,o,p;return y.a.wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return o=function(E,d){if(!d&&E&&E.__esModule)return E;if(E===null||typeof E!="object"&&typeof E!="function")return{default:E};var P=C(d);if(P&&P.has(E))return P.get(E);var m={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var t in E)if(t!=="default"&&Object.prototype.hasOwnProperty.call(E,t)){var r=a?Object.getOwnPropertyDescriptor(E,t):null;r&&(r.get||r.set)?Object.defineProperty(m,t,r):m[t]=E[t]}return m.default=E,P&&P.set(E,m),m},C=function(E){if(typeof WeakMap!="function")return null;var d=new WeakMap,P=new WeakMap;return(C=function(a){return a?P:d})(E)},f=e("K+nK"),I.t0=f,I.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return I.t1=I.sent,i=(0,I.t0)(I.t1),I.t2=o,I.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return I.t3=I.sent,h=(0,I.t2)(I.t3),I.next=15,Promise.all([e.e(0),e.e(2),e.e(9),e.e(10),e.e(12)]).then(e.bind(null,"36SN"));case 15:return b=I.sent,p=function(){var E=(0,h.useState)(!1),d=(0,i.default)(E,2),P=d[0],m=d[1];return h.default.createElement(h.default.Fragment,null,h.default.createElement("label",null,"\u53EF\u5C55\u5F00/\u6536\u7F29\uFF1A",h.default.createElement("input",{type:"checkbox",value:P,onChange:function(){return m(!P)}})),h.default.createElement(b.PivotTable,{leftExpandable:P,showSubtotal:!1,meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]}))},I.abrupt("return",p);case 18:case"end":return I.stop()}},j)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-2"}},"OldSchemaTransformer-demo":{component:Object(W.dynamic)({loader:function(){var A=Object($.a)(y.a.mark(function j(){var f,i,h,b,C,o,p,u,I,B,E,d,P;return y.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return I=function(r,c){if(!c&&r&&r.__esModule)return r;if(r===null||typeof r!="object"&&typeof r!="function")return{default:r};var v=u(c);if(v&&v.has(r))return v.get(r);var F={},w=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var M in r)if(M!=="default"&&Object.prototype.hasOwnProperty.call(r,M)){var J=w?Object.getOwnPropertyDescriptor(r,M):null;J&&(J.get||J.set)?Object.defineProperty(F,M,J):F[M]=r[M]}return F.default=r,v&&v.set(r,F),F},u=function(r){if(typeof WeakMap!="function")return null;var c=new WeakMap,v=new WeakMap;return(u=function(w){return w?v:c})(r)},f=e("K+nK"),a.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return a.t0=f,a.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return a.t1=a.sent,i=(0,a.t0)(a.t1),a.t2=f,a.next=13,Promise.resolve().then(e.bind(null,"tJVT"));case 13:return a.t3=a.sent,h=(0,a.t2)(a.t3),a.next=17,Promise.all([e.e(3),e.e(19)]).then(e.t.bind(null,"cUip",7));case 17:return a.t4=f,a.next=20,Promise.all([e.e(0),e.e(8),e.e(18),e.e(20)]).then(e.t.bind(null,"iJl9",7));case 20:return a.t5=a.sent,b=(0,a.t4)(a.t5),a.t6=I,a.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return a.t7=a.sent,C=(0,a.t6)(a.t7),a.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(11)]).then(e.bind(null,"gdfu"));case 29:return o=a.sent,a.next=32,Promise.all([e.e(22),e.e(25)]).then(e.bind(null,"7t+U"));case 32:return p=a.sent,B=b.default.TextArea,E={type:"object",properties:{number:{title:"\u6570\u5B57\u8F93\u5165\u6846",type:"number","ui:disabled":!0},checkbox:{title:"\u662F\u5426\u9009\u62E9",type:"boolean","ui:widget":"switch"}},required:["number"]},d=function(){var r=(0,C.useState)(JSON.stringify(E)),c=(0,h.default)(r,2),v=c[0],F=c[1],w=(0,C.useState)({}),M=(0,h.default)(w,2),J=M[0],$e=M[1],tn=function(){try{var Tn=(0,p.updateSchemaToNewVersion)(JSON.parse(v));$e(Tn)}catch(Hn){console.log(Hn)}},on=function(Tn){F(Tn.target.value)},An=function(){F(JSON.stringify(JSON.parse(v),null,2))};return C.default.createElement("div",null,C.default.createElement("div",null,"\u586B\u5165\u65E7\u7248schema\uFF1A"),C.default.createElement(B,{style:{minHeight:400,marginTop:12,marginBottom:12},value:v,onChange:on}),C.default.createElement(i.default,{style:{marginRight:12},onClick:An},"\u683C\u5F0F\u5316\u65E7schema"),C.default.createElement(i.default,{type:"primary",onClick:tn},"\u751F\u6210\u65B0\u7248schema"),C.default.createElement(B,{style:{minHeight:400,marginTop:12},value:JSON.stringify(J,null,2)}))},P=d,a.abrupt("return",P);case 38:case"end":return a.stop()}},j)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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

export default Translator;`},"packages/form-render/src/utils.js":{import:"../../packages/form-render/src/utils.js",content:V}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"},"lodash-es":{version:"4.17.21"}},identifier:"OldSchemaTransformer-demo"}},"form-render-demo":{component:Object(W.dynamic)({loader:function(){var A=Object($.a)(y.a.mark(function j(){var f,i,h,b,C,o,p,u,I,B,E,d,P,m;return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return E=function(c,v){if(!v&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var F=B(v);if(F&&F.has(c))return F.get(c);var w={},M=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var J in c)if(J!=="default"&&Object.prototype.hasOwnProperty.call(c,J)){var $e=M?Object.getOwnPropertyDescriptor(c,J):null;$e&&($e.get||$e.set)?Object.defineProperty(w,J,$e):w[J]=c[J]}return w.default=c,F&&F.set(c,w),w},B=function(c){if(typeof WeakMap!="function")return null;var v=new WeakMap,F=new WeakMap;return(B=function(M){return M?F:v})(c)},f=e("K+nK"),t.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return t.t0=f,t.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return t.t1=t.sent,i=(0,t.t0)(t.t1),t.t2=f,t.next=13,e.e(84).then(e.bind(null,"fWQN"));case 13:return t.t3=t.sent,h=(0,t.t2)(t.t3),t.t4=f,t.next=18,e.e(85).then(e.bind(null,"mtLc"));case 18:return t.t5=t.sent,b=(0,t.t4)(t.t5),t.t6=f,t.next=23,e.e(76).then(e.bind(null,"yKVA"));case 23:return t.t7=t.sent,C=(0,t.t6)(t.t7),t.t8=f,t.next=28,e.e(75).then(e.bind(null,"879j"));case 28:return t.t9=t.sent,o=(0,t.t8)(t.t9),t.t10=f,t.next=33,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 33:return t.t11=t.sent,p=(0,t.t10)(t.t11),t.next=37,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(11)]).then(e.bind(null,"gdfu"));case 37:return u=t.sent,t.t12=E,t.next=41,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 41:return t.t13=t.sent,I=(0,t.t12)(t.t13),d={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},P=function(r){(0,C.default)(v,r);var c=(0,o.default)(v);function v(){return(0,h.default)(this,v),c.apply(this,arguments)}return(0,b.default)(v,[{key:"render",value:function(){var w=this.props.form;return p.default.createElement("div",null,p.default.createElement(I.default,{form:w,schema:d}),p.default.createElement(i.default,{type:"primary",onClick:w.submit},"\u63D0\u4EA4"))}}]),v}(p.default.Component),m=(0,I.connectForm)(P),t.abrupt("return",m);case 47:case"end":return t.stop()}},j)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default connectForm(Demo);`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo"}},"form-render-demo-1":{component:Object(W.dynamic)({loader:function(){var A=Object($.a)(y.a.mark(function j(){var f,i,h,b,C,o,p,u,I,B;return y.a.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return p=function(m,a){if(!a&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var t=o(a);if(t&&t.has(m))return t.get(m);var r={},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in m)if(v!=="default"&&Object.prototype.hasOwnProperty.call(m,v)){var F=c?Object.getOwnPropertyDescriptor(m,v):null;F&&(F.get||F.set)?Object.defineProperty(r,v,F):r[v]=m[v]}return r.default=m,t&&t.set(m,r),r},o=function(m){if(typeof WeakMap!="function")return null;var a=new WeakMap,t=new WeakMap;return(o=function(c){return c?t:a})(m)},f=e("K+nK"),d.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return d.t0=f,d.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return d.t1=d.sent,i=(0,d.t0)(d.t1),d.t2=f,d.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return d.t3=d.sent,h=(0,d.t2)(d.t3),d.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(11)]).then(e.bind(null,"gdfu"));case 17:return b=d.sent,d.t4=p,d.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 21:return d.t5=d.sent,C=(0,d.t4)(d.t5),u={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},I=function(){var m=(0,C.useForm)();return h.default.createElement("div",null,h.default.createElement(C.default,{form:m,schema:u}),h.default.createElement(i.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4"))},B=I,d.abrupt("return",B);case 27:case"end":return d.stop()}},j)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo-1"}},"form-render-demo-2":{component:Object(W.dynamic)({loader:function(){var A=Object($.a)(y.a.mark(function j(){var f,i,h,b,C,o,p,u,I,B;return y.a.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return p=function(m,a){if(!a&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var t=o(a);if(t&&t.has(m))return t.get(m);var r={},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in m)if(v!=="default"&&Object.prototype.hasOwnProperty.call(m,v)){var F=c?Object.getOwnPropertyDescriptor(m,v):null;F&&(F.get||F.set)?Object.defineProperty(r,v,F):r[v]=m[v]}return r.default=m,t&&t.set(m,r),r},o=function(m){if(typeof WeakMap!="function")return null;var a=new WeakMap,t=new WeakMap;return(o=function(c){return c?t:a})(m)},f=e("K+nK"),d.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return d.t0=f,d.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return d.t1=d.sent,i=(0,d.t0)(d.t1),d.t2=f,d.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return d.t3=d.sent,h=(0,d.t2)(d.t3),d.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(11)]).then(e.bind(null,"gdfu"));case 17:return b=d.sent,d.t4=p,d.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 21:return d.t5=d.sent,C=(0,d.t4)(d.t5),u={displayType:"row",labelWidth:60,type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F",type:"range",format:"date"},siteUrl:{title:"\u7F51\u5740",type:"string",placeholder:"\u6B64\u5904\u5FC5\u586B",required:!0,props:{addonBefore:"https://",addonAfter:".com"}}}},I=function(){var m=(0,C.useForm)(),a=function(r,c){c.length>0?alert("errors:"+JSON.stringify(c)):alert("formData:"+JSON.stringify(r,null,2))};return h.default.createElement("div",null,h.default.createElement(C.default,{form:m,schema:u,onFinish:a}),h.default.createElement(i.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4"))},B=I,d.abrupt("return",B);case 27:case"end":return d.stop()}},j)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.1"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-demo-2"}},"form-render-tester":{component:Object(W.dynamic)({loader:function(){var A=Object($.a)(y.a.mark(function j(){return y.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"9Yrf"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},j)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:qe},"advanced/utils/index.js":{import:"./advanced/utils",content:Oe},"widgets/RichText/src/index.js":{import:"../../widgets/RichText/src",content:me}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:"^15.0.2|| ^16.0.0-rc || ^16.0.0"},"form-render":{version:"1.6.1"},"react-dom":{version:"^15.0.2|| ^16.0.0-rc || ^16.0.0"},"braft-editor":{version:"2.3.9",css:"braft-editor/dist/index.css"}},transform:!0,defaultShowCode:!0,identifier:"form-render-tester"}},"display-demo":{component:Object(W.dynamic)({loader:function(){var A=Object($.a)(y.a.mark(function j(){var f,i,h,b,C;return y.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return f=e("K+nK"),p.t0=f,p.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return p.t1=p.sent,i=(0,p.t0)(p.t1),p.t2=f,p.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return p.t3=p.sent,h=(0,p.t2)(p.t3),b=function(I){return{type:"object",displayType:I,properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},objectName:{title:"\u5BF9\u8C61",bind:"obj",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},C=function(){return i.default.createElement("div",null,i.default.createElement("h2",null,"display: row"),i.default.createElement(h.default,{schema:b("row")}),i.default.createElement("h2",null,"display: column"),i.default.createElement(h.default,{schema:b("column")}))},p.abrupt("return",C);case 14:case"end":return p.stop()}},j)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`},"demo/display.js":{import:"../demo/display",content:Be}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo"}},"display-demo-1":{component:Object(W.dynamic)({loader:function(){var A=Object($.a)(y.a.mark(function j(){var f,i,h,b,C;return y.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return f=e("K+nK"),p.t0=f,p.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return p.t1=p.sent,i=(0,p.t0)(p.t1),p.t2=f,p.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return p.t3=p.sent,h=(0,p.t2)(p.t3),b={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0},check:{title:"box",type:"boolean",default:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},C=function(){return i.default.createElement(h.default,{readOnly:!0,schema:b})},p.abrupt("return",C);case 14:case"end":return p.stop()}},j)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form readOnly schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:Be}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-1"}},"display-demo-2":{component:Object(W.dynamic)({loader:function(){var A=Object($.a)(y.a.mark(function j(){var f,i,h,b,C;return y.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return f=e("K+nK"),p.t0=f,p.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return p.t1=p.sent,i=(0,p.t0)(p.t1),p.t2=f,p.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return p.t3=p.sent,h=(0,p.t2)(p.t3),b={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0,width:"50%"},check:{title:"box",type:"boolean",default:!0,width:"50%",labelWidth:6},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},C=function(){return i.default.createElement(h.default,{labelWidth:"200",schema:b})},p.abrupt("return",C);case 14:case"end":return p.stop()}},j)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form labelWidth="200" schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:Be}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-2"}},"display-demo-3":{component:Object(W.dynamic)({loader:function(){var A=Object($.a)(y.a.mark(function j(){var f,i,h,b,C,o;return y.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return f=e("K+nK"),u.t0=f,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,i=(0,u.t0)(u.t1),u.t2=f,u.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return u.t3=u.sent,h=(0,u.t2)(u.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},C=function(){return i.default.createElement(h.default,{schema:b})},o=C,u.abrupt("return",o);case 15:case"end":return u.stop()}},j)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Be}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-3"}},"display-demo-4":{component:Object(W.dynamic)({loader:function(){var A=Object($.a)(y.a.mark(function j(){var f,i,h,b,C,o;return y.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return f=e("K+nK"),u.t0=f,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,i=(0,u.t0)(u.t1),u.t2=f,u.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return u.t3=u.sent,h=(0,u.t2)(u.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},C=function(){return i.default.createElement(h.default,{schema:b})},o=C,u.abrupt("return",o);case 15:case"end":return u.stop()}},j)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Be}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-4"}},"display-demo-5":{component:Object(W.dynamic)({loader:function(){var A=Object($.a)(y.a.mark(function j(){var f,i,h,b,C,o;return y.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return f=e("K+nK"),u.t0=f,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,i=(0,u.t0)(u.t1),u.t2=f,u.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return u.t3=u.sent,h=(0,u.t2)(u.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},C=function(){return i.default.createElement(h.default,{schema:b})},o=C,u.abrupt("return",o);case 15:case"end":return u.stop()}},j)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Be}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-5"}},"display-demo-6":{component:Object(W.dynamic)({loader:function(){var A=Object($.a)(y.a.mark(function j(){var f,i,h,b,C,o;return y.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return f=e("K+nK"),u.t0=f,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,i=(0,u.t0)(u.t1),u.t2=f,u.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return u.t3=u.sent,h=(0,u.t2)(u.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",props:{hideMove:!0},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},C=function(){return i.default.createElement(h.default,{schema:b})},o=C,u.abrupt("return",o);case 15:case"end":return u.stop()}},j)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Be}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-6"}},"form-methods-demo":{component:Object(W.dynamic)({loader:function(){var A=Object($.a)(y.a.mark(function j(){var f,i,h,b,C,o,p,u,I,B,E,d,P;return y.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return E=function(r,c){if(!c&&r&&r.__esModule)return r;if(r===null||typeof r!="object"&&typeof r!="function")return{default:r};var v=B(c);if(v&&v.has(r))return v.get(r);var F={},w=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var M in r)if(M!=="default"&&Object.prototype.hasOwnProperty.call(r,M)){var J=w?Object.getOwnPropertyDescriptor(r,M):null;J&&(J.get||J.set)?Object.defineProperty(F,M,J):F[M]=r[M]}return F.default=r,v&&v.set(r,F),F},B=function(r){if(typeof WeakMap!="function")return null;var c=new WeakMap,v=new WeakMap;return(B=function(w){return w?v:c})(r)},f=e("K+nK"),a.next=5,e.e(23).then(e.t.bind(null,"lfLe",7));case 5:return a.t0=f,a.next=8,e.e(24).then(e.t.bind(null,"Cp9S",7));case 8:return a.t1=a.sent,i=(0,a.t0)(a.t1),a.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return a.t2=f,a.next=15,e.e(8).then(e.t.bind(null,"4IMT",7));case 15:return a.t3=a.sent,h=(0,a.t2)(a.t3),a.next=19,e.e(15).then(e.t.bind(null,"tL+A",7));case 19:return a.t4=f,a.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return a.t5=a.sent,b=(0,a.t4)(a.t5),a.t6=f,a.next=27,Promise.resolve().then(e.bind(null,"tJVT"));case 27:return a.t7=a.sent,C=(0,a.t6)(a.t7),a.t8=E,a.next=32,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 32:return a.t9=a.sent,o=(0,a.t8)(a.t9),a.next=36,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(11)]).then(e.bind(null,"gdfu"));case 36:return p=a.sent,a.t10=E,a.next=40,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 40:return a.t11=a.sent,u=(0,a.t10)(a.t11),a.next=44,e.e(16).then(e.bind(null,"OH0R"));case 44:return I=a.sent,d=function(){var r=(0,u.useForm)(),c=(0,o.useState)({}),v=(0,C.default)(c,2),F=v[0],w=v[1],M=function(){(0,I.fakeApi)("xxx/getForm").then(function(tn){r.setValues({input1:"hello world",select1:"c"})})};(0,o.useEffect)(function(){(0,I.delay)(1e3).then(function($e){w({type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}})})},[]);var J=function(tn,on){on.length>0?b.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(on.map(function(An){return An.name}))):(0,I.fakeApi)("xxx/submit",tn).then(function(An){return b.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})};return o.default.createElement("div",{style:{width:"400px"}},o.default.createElement(u.default,{form:r,schema:F,onFinish:J}),o.default.createElement(i.default,null,o.default.createElement(h.default,{onClick:M},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),o.default.createElement(h.default,{type:"primary",onClick:r.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},P=d,a.abrupt("return",P);case 48:case"end":return a.stop()}},j)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./advanced/utils",content:Oe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo"}},"form-methods-demo-1":{component:Object(W.dynamic)({loader:function(){var A=Object($.a)(y.a.mark(function j(){var f,i,h,b,C,o,p,u,I,B,E,d,P;return y.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return B=function(r,c){if(!c&&r&&r.__esModule)return r;if(r===null||typeof r!="object"&&typeof r!="function")return{default:r};var v=I(c);if(v&&v.has(r))return v.get(r);var F={},w=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var M in r)if(M!=="default"&&Object.prototype.hasOwnProperty.call(r,M)){var J=w?Object.getOwnPropertyDescriptor(r,M):null;J&&(J.get||J.set)?Object.defineProperty(F,M,J):F[M]=r[M]}return F.default=r,v&&v.set(r,F),F},I=function(r){if(typeof WeakMap!="function")return null;var c=new WeakMap,v=new WeakMap;return(I=function(w){return w?v:c})(r)},f=e("K+nK"),a.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return a.t0=f,a.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return a.t1=a.sent,i=(0,a.t0)(a.t1),a.t2=f,a.next=13,Promise.resolve().then(e.bind(null,"PpiC"));case 13:return a.t3=a.sent,h=(0,a.t2)(a.t3),a.next=17,e.e(15).then(e.t.bind(null,"tL+A",7));case 17:return a.t4=f,a.next=20,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 20:return a.t5=a.sent,b=(0,a.t4)(a.t5),a.t6=f,a.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return a.t7=a.sent,C=(0,a.t6)(a.t7),a.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(11)]).then(e.bind(null,"gdfu"));case 29:return o=a.sent,a.t8=B,a.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 33:return a.t9=a.sent,p=(0,a.t8)(a.t9),a.next=37,e.e(16).then(e.bind(null,"OH0R"));case 37:return u=a.sent,E={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},d=function(){var r=(0,p.useForm)(),c=function(w,M){M.length>0?b.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(M.map(function(J){return J.name}))):(0,u.fakeApi)("xxx/submit",w).then(function(J){return b.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},v=function(w){var M=w.data,J=w.errors,$e=w.schema,tn=(0,h.default)(w,["data","errors","schema"]);return(0,u.fakeApi)("xxx/validation").then(function(on){return{name:"select1",error:["\u5916\u90E8\u6821\u9A8C\u9519\u8BEF"]}})};return C.default.createElement("div",{style:{width:"400px"}},C.default.createElement(p.default,{form:r,schema:E,beforeFinish:v,onFinish:c}),C.default.createElement(i.default,{type:"primary",onClick:r.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},P=d,a.abrupt("return",P);case 42:case"end":return a.stop()}},j)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./advanced/utils",content:Oe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-1"}},"form-methods-demo-2":{component:Object(W.dynamic)({loader:function(){var A=Object($.a)(y.a.mark(function j(){var f,i,h,b,C,o,p,u,I,B,E,d,P;return y.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return B=function(r,c){if(!c&&r&&r.__esModule)return r;if(r===null||typeof r!="object"&&typeof r!="function")return{default:r};var v=I(c);if(v&&v.has(r))return v.get(r);var F={},w=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var M in r)if(M!=="default"&&Object.prototype.hasOwnProperty.call(r,M)){var J=w?Object.getOwnPropertyDescriptor(r,M):null;J&&(J.get||J.set)?Object.defineProperty(F,M,J):F[M]=r[M]}return F.default=r,v&&v.set(r,F),F},I=function(r){if(typeof WeakMap!="function")return null;var c=new WeakMap,v=new WeakMap;return(I=function(w){return w?v:c})(r)},f=e("K+nK"),a.next=5,e.e(23).then(e.t.bind(null,"lfLe",7));case 5:return a.t0=f,a.next=8,e.e(24).then(e.t.bind(null,"Cp9S",7));case 8:return a.t1=a.sent,i=(0,a.t0)(a.t1),a.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return a.t2=f,a.next=15,e.e(8).then(e.t.bind(null,"4IMT",7));case 15:return a.t3=a.sent,h=(0,a.t2)(a.t3),a.next=19,e.e(15).then(e.t.bind(null,"tL+A",7));case 19:return a.t4=f,a.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return a.t5=a.sent,b=(0,a.t4)(a.t5),a.t6=f,a.next=27,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 27:return a.t7=a.sent,C=(0,a.t6)(a.t7),a.next=31,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(11)]).then(e.bind(null,"gdfu"));case 31:return o=a.sent,a.t8=B,a.next=35,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 35:return a.t9=a.sent,p=(0,a.t8)(a.t9),a.next=39,e.e(16).then(e.bind(null,"OH0R"));case 39:return u=a.sent,E={type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F\u8303\u56F4",type:"range",format:"date"}}},d=function(){var r=(0,p.useForm)(),c=function(w,M){M.length>0?b.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(M.map(function(J){return J.name}))):(0,u.fakeApi)("xxx/submit",w).then(function(J){return b.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},v=function(){(0,u.fakeApi)("xxx/getForm").then(function(w){r.setValues({startDate:"2020-04-04",endDate:"2020-04-24"})})};return C.default.createElement("div",{style:{width:"400px"}},C.default.createElement(p.default,{form:r,schema:E,onFinish:c}),C.default.createElement(i.default,null,C.default.createElement(h.default,{onClick:v},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),C.default.createElement(h.default,{type:"primary",onClick:r.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},P=d,a.abrupt("return",P);case 44:case"end":return a.stop()}},j)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./advanced/utils",content:Oe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-2"}},"form-methods-demo-3":{component:Object(W.dynamic)({loader:function(){var A=Object($.a)(y.a.mark(function j(){var f,i,h,b,C,o,p,u,I,B,E,d;return y.a.wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return I=function(t,r){if(!r&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var c=u(r);if(c&&c.has(t))return c.get(t);var v={},F=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var w in t)if(w!=="default"&&Object.prototype.hasOwnProperty.call(t,w)){var M=F?Object.getOwnPropertyDescriptor(t,w):null;M&&(M.get||M.set)?Object.defineProperty(v,w,M):v[w]=t[w]}return v.default=t,c&&c.set(t,v),v},u=function(t){if(typeof WeakMap!="function")return null;var r=new WeakMap,c=new WeakMap;return(u=function(F){return F?c:r})(t)},f=e("K+nK"),m.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return m.t0=f,m.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return m.t1=m.sent,i=(0,m.t0)(m.t1),m.next=12,e.e(15).then(e.t.bind(null,"tL+A",7));case 12:return m.t2=f,m.next=15,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 15:return m.t3=m.sent,h=(0,m.t2)(m.t3),m.t4=I,m.next=20,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 20:return m.t5=m.sent,b=(0,m.t4)(m.t5),m.next=24,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(11)]).then(e.bind(null,"gdfu"));case 24:return C=m.sent,m.t6=I,m.next=28,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 28:return m.t7=m.sent,o=(0,m.t6)(m.t7),m.next=32,e.e(16).then(e.bind(null,"OH0R"));case 32:return p=m.sent,B={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select1:{title:"\u5355\u9009",type:"string",widget:"select"}}}}},E=function(){var t=(0,o.useForm)(),r=function(){t.setSchemaByPath("obj1.select1",{enum:["east","south","west","north"],enumNames:["\u4E1C","\u5357","\u897F","\u5317"]})},c=function(F,w){w.length>0?h.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(w.map(function(M){return M.name}))):h.default.info(JSON.stringify(F))};return b.default.createElement("div",{style:{width:"400px"}},b.default.createElement(o.default,{form:t,schema:B,onMount:r,onFinish:c}),b.default.createElement(i.default,{type:"primary",onClick:t.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},d=E,m.abrupt("return",d);case 37:case"end":return m.stop()}},j)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./advanced/utils",content:Oe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-3"}},"function-demo":{component:Object(W.dynamic)({loader:function(){var A=Object($.a)(y.a.mark(function j(){var f,i,h,b,C,o,p,u;return y.a.wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return C=function(d,P){if(!P&&d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var m=b(P);if(m&&m.has(d))return m.get(d);var a={},t=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in d)if(r!=="default"&&Object.prototype.hasOwnProperty.call(d,r)){var c=t?Object.getOwnPropertyDescriptor(d,r):null;c&&(c.get||c.set)?Object.defineProperty(a,r,c):a[r]=d[r]}return a.default=d,m&&m.set(d,a),a},b=function(d){if(typeof WeakMap!="function")return null;var P=new WeakMap,m=new WeakMap;return(b=function(t){return t?m:P})(d)},f=e("K+nK"),B.t0=f,B.next=6,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 6:return B.t1=B.sent,i=(0,B.t0)(B.t1),B.t2=C,B.next=11,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 11:return B.t3=B.sent,h=(0,B.t2)(B.t3),o={type:"object",properties:{checkbox1:{title:"\u5C55\u793A\u66F4\u591A\u5185\u5BB9",type:"boolean"},select1:{title:"\u8BF7\u5047\u539F\u56E0",type:"string",enum:["a","b","c"],enumNames:["\u75C5\u5047","\u6709\u4E8B","\u5176\u5B83 (\u9700\u6CE8\u660E\u5177\u4F53\u539F\u56E0)"],hidden:"{{formData.checkbox1 !== true}}",widget:"radio"},input1:{title:"\u5177\u4F53\u539F\u56E0",type:"string",format:"textarea",hidden:'{{rootValue.checkbox1 !== true || formData.select1 !== "c"}}'}}},p=function(){var d=(0,h.useForm)();return i.default.createElement(h.default,{form:d,schema:o})},u=p,B.abrupt("return",u);case 17:case"end":return B.stop()}},j)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo1;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo"}},"function-demo-1":{component:Object(W.dynamic)({loader:function(){var A=Object($.a)(y.a.mark(function j(){var f,i,h,b,C;return y.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return f=e("K+nK"),p.t0=f,p.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return p.t1=p.sent,i=(0,p.t0)(p.t1),p.t2=f,p.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(17)]).then(e.bind(null,"c2mQ"));case 9:return p.t3=p.sent,h=(0,p.t2)(p.t3),p.next=13,e.e(21).then(e.bind(null,"8iYR"));case 13:return b=p.sent,C=function(){return i.default.createElement(h.default,{schema:b.expression})},p.abrupt("return",C);case 16:case"end":return p.stop()}},j)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { expression } from '../json/schema';

export default () => <FR schema={expression} />;`},"demo/FR.jsx":{import:"../demo/FR",content:Ce},"json/schema.js":{import:"../json/schema",content:cn}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo-1"}},"lifeCycle-demo":{component:Object(W.dynamic)({loader:function(){var A=Object($.a)(y.a.mark(function j(){var f,i,h,b,C,o,p,u,I;return y.a.wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return C=function(P,m){if(!m&&P&&P.__esModule)return P;if(P===null||typeof P!="object"&&typeof P!="function")return{default:P};var a=b(m);if(a&&a.has(P))return a.get(P);var t={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in P)if(c!=="default"&&Object.prototype.hasOwnProperty.call(P,c)){var v=r?Object.getOwnPropertyDescriptor(P,c):null;v&&(v.get||v.set)?Object.defineProperty(t,c,v):t[c]=P[c]}return t.default=P,a&&a.set(P,t),t},b=function(P){if(typeof WeakMap!="function")return null;var m=new WeakMap,a=new WeakMap;return(b=function(r){return r?a:m})(P)},E.t0=C,E.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return E.t1=E.sent,f=(0,E.t0)(E.t1),E.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(11)]).then(e.bind(null,"gdfu"));case 9:return i=E.sent,E.t2=C,E.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 13:return E.t3=E.sent,h=(0,E.t2)(E.t3),o=function(P){return new Promise(function(m){return setTimeout(m,P)})},p={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u9009\u62E9\u6846",description:"\u52A0\u8F7D\u4E2D...",type:"string",enum:[],widget:"radio"}}},u=function(){var P=(0,h.useForm)(),m=function(){P.setValues({input1:"hello world"}),o(3e3).then(function(t){P.setSchemaByPath("select1",{description:"",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]})})};return f.default.createElement(h.default,{form:P,schema:p,onMount:m})},I=u,E.abrupt("return",I);case 20:case"end":return E.stop()}},j)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.6.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"lifeCycle-demo"}},"listDisplay-demo":{component:Object(W.dynamic)({loader:function(){var A=Object($.a)(y.a.mark(function j(){var f,i,h,b,C,o;return y.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return f=e("K+nK"),u.t0=f,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,i=(0,u.t0)(u.t1),u.t2=f,u.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return u.t3=u.sent,h=(0,u.t2)(u.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},C=function(){return i.default.createElement(h.default,{schema:b})},o=C,u.abrupt("return",o);case 15:case"end":return u.stop()}},j)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Be}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo"}},"listDisplay-demo-1":{component:Object(W.dynamic)({loader:function(){var A=Object($.a)(y.a.mark(function j(){var f,i,h,b,C,o;return y.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return f=e("K+nK"),u.t0=f,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,i=(0,u.t0)(u.t1),u.t2=f,u.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return u.t3=u.sent,h=(0,u.t2)(u.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},C=function(){return i.default.createElement(h.default,{schema:b})},o=C,u.abrupt("return",o);case 15:case"end":return u.stop()}},j)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Be}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-1"}},"listDisplay-demo-2":{component:Object(W.dynamic)({loader:function(){var A=Object($.a)(y.a.mark(function j(){var f,i,h,b,C,o;return y.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return f=e("K+nK"),u.t0=f,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,i=(0,u.t0)(u.t1),u.t2=f,u.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return u.t3=u.sent,h=(0,u.t2)(u.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},C=function(){return i.default.createElement(h.default,{schema:b})},o=C,u.abrupt("return",o);case 15:case"end":return u.stop()}},j)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Be}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-2"}},"listDisplay-demo-3":{component:Object(W.dynamic)({loader:function(){var A=Object($.a)(y.a.mark(function j(){var f,i,h,b,C,o;return y.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return f=e("K+nK"),u.t0=f,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,i=(0,u.t0)(u.t1),u.t2=f,u.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return u.t3=u.sent,h=(0,u.t2)(u.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",props:{hideMove:!0},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},C=function(){return i.default.createElement(h.default,{schema:b})},o=C,u.abrupt("return",o);case 15:case"end":return u.stop()}},j)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Be}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-3"}},"listDisplay-demo-4":{component:Object(W.dynamic)({loader:function(){var A=Object($.a)(y.a.mark(function j(){var f,i,h,b,C,o;return y.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return f=e("K+nK"),u.t0=f,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,i=(0,u.t0)(u.t1),u.t2=f,u.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return u.t3=u.sent,h=(0,u.t2)(u.t3),window.hello=function(I){var B=I.value;console.log(B)},b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list4",itemProps:{buttons:[{callback:"hello",text:"\u590D\u5236"}]},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},C=function(){return i.default.createElement(h.default,{schema:b})},o=C,u.abrupt("return",o);case 16:case"end":return u.stop()}},j)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Be}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-4"}},"watch-demo":{component:Object(W.dynamic)({loader:function(){var A=Object($.a)(y.a.mark(function j(){var f,i,h,b,C,o,p,u;return y.a.wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return C=function(d,P){if(!P&&d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var m=b(P);if(m&&m.has(d))return m.get(d);var a={},t=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in d)if(r!=="default"&&Object.prototype.hasOwnProperty.call(d,r)){var c=t?Object.getOwnPropertyDescriptor(d,r):null;c&&(c.get||c.set)?Object.defineProperty(a,r,c):a[r]=d[r]}return a.default=d,m&&m.set(d,a),a},b=function(d){if(typeof WeakMap!="function")return null;var P=new WeakMap,m=new WeakMap;return(b=function(t){return t?m:P})(d)},B.t0=C,B.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return B.t1=B.sent,f=(0,B.t0)(B.t1),B.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(11)]).then(e.bind(null,"gdfu"));case 9:return i=B.sent,B.t2=C,B.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 13:return B.t3=B.sent,h=(0,B.t2)(B.t3),o={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"}}},p=function(){var d=(0,h.useForm)(),P={"#":function(a){console.log("\u8868\u5355\u7684\u65F6\u65F6\u6570\u636E\u4E3A\uFF1A",a)},input1:function(a){d.setValueByPath("input2",a)}};return f.default.createElement(h.default,{form:d,schema:o,watch:P})},u=p,B.abrupt("return",u);case 19:case"end":return B.stop()}},j)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.6.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo"}},"watch-demo-1":{component:Object(W.dynamic)({loader:function(){var A=Object($.a)(y.a.mark(function j(){var f,i,h,b,C,o,p,u,I,B;return y.a.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return p=function(m,a){if(!a&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var t=o(a);if(t&&t.has(m))return t.get(m);var r={},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in m)if(v!=="default"&&Object.prototype.hasOwnProperty.call(m,v)){var F=c?Object.getOwnPropertyDescriptor(m,v):null;F&&(F.get||F.set)?Object.defineProperty(r,v,F):r[v]=m[v]}return r.default=m,t&&t.set(m,r),r},o=function(m){if(typeof WeakMap!="function")return null;var a=new WeakMap,t=new WeakMap;return(o=function(c){return c?t:a})(m)},f=e("K+nK"),d.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return d.t0=f,d.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return d.t1=d.sent,i=(0,d.t0)(d.t1),d.t2=p,d.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return d.t3=d.sent,h=(0,d.t2)(d.t3),d.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(11)]).then(e.bind(null,"gdfu"));case 17:return b=d.sent,d.t4=p,d.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 21:return d.t5=d.sent,C=(0,d.t4)(d.t5),u={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"radio"}}}}},I=function(){var m=(0,C.useForm)(),a=function(c,v){v.length>0?alert("errorFields:"+JSON.stringify(v)):alert("formData:"+JSON.stringify(c,null,2))},t={input1:function(c){c.length>2?m.setSchemaByPath("obj1.select",function(v){var F=v.enumNames;return{enumNames:F.map(function(w){return w+"a"})}}):m.setSchemaByPath("obj1.select",{enumNames:["\u65E9","\u4E2D","\u665A"]})}};return h.default.createElement("div",null,h.default.createElement(C.default,{form:m,schema:u,onFinish:a,watch:t}),h.default.createElement(i.default,{type:"",style:{marginRight:8},onClick:function(){return m.setSchemaByPath("input2",{title:"\u7F16\u8F91\u6846",format:"textarea"})}},"\u5C06 input \u6539\u4E3A textarea"),h.default.createElement(i.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4"))},B=I,d.abrupt("return",B);case 27:case"end":return d.stop()}},j)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo-1"}},"widget-demo":{component:Object(W.dynamic)({loader:function(){var A=Object($.a)(y.a.mark(function j(){var f,i,h,b,C,o,p,u,I,B,E,d,P;return y.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return I=function(r,c){if(!c&&r&&r.__esModule)return r;if(r===null||typeof r!="object"&&typeof r!="function")return{default:r};var v=u(c);if(v&&v.has(r))return v.get(r);var F={},w=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var M in r)if(M!=="default"&&Object.prototype.hasOwnProperty.call(r,M)){var J=w?Object.getOwnPropertyDescriptor(r,M):null;J&&(J.get||J.set)?Object.defineProperty(F,M,J):F[M]=r[M]}return F.default=r,v&&v.set(r,F),F},u=function(r){if(typeof WeakMap!="function")return null;var c=new WeakMap,v=new WeakMap;return(u=function(w){return w?v:c})(r)},f=e("K+nK"),a.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return a.t0=f,a.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return a.t1=a.sent,i=(0,a.t0)(a.t1),a.next=12,Promise.all([e.e(3),e.e(19)]).then(e.t.bind(null,"cUip",7));case 12:return a.t2=f,a.next=15,Promise.all([e.e(0),e.e(8),e.e(18),e.e(20)]).then(e.t.bind(null,"iJl9",7));case 15:return a.t3=a.sent,h=(0,a.t2)(a.t3),a.t4=f,a.next=20,e.e(86).then(e.bind(null,"0Owb"));case 20:return a.t5=a.sent,b=(0,a.t4)(a.t5),a.t6=f,a.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return a.t7=a.sent,C=(0,a.t6)(a.t7),a.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(11)]).then(e.bind(null,"gdfu"));case 29:return o=a.sent,a.t8=I,a.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 33:return a.t9=a.sent,p=(0,a.t8)(a.t9),B={type:"object",properties:{string:{title:"\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6",type:"string",widget:"site"},select:{title:"\u5355\u9009",type:"number",enum:[1,2,3],enumNames:["\u9009\u98791","\u9009\u98792","\u9009\u98793"]}}},E=function(r){return console.log("widget props:",r),C.default.createElement(h.default,(0,b.default)({addonBefore:"https://",addonAfter:".com"},r))},d=function(){var r=(0,p.useForm)();return C.default.createElement("div",null,C.default.createElement(p.default,{form:r,schema:B,widgets:{site:E},onFinish:function(v){return alert(JSON.stringify(v,null,2))}}),C.default.createElement(i.default,{type:"primary",onClick:r.submit},"\u63D0\u4EA4"))},P=d,a.abrupt("return",P);case 40:case"end":return a.stop()}},j)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.1"},"react-dom":{version:">=16.8.0"}},identifier:"widget-demo"}},"measure-demo":{component:Object(W.dynamic)({loader:function(){var A=Object($.a)(y.a.mark(function j(){var f,i,h,b,C,o,p,u,I,B;return y.a.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return u=function(m,a){if(!a&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var t=p(a);if(t&&t.has(m))return t.get(m);var r={},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in m)if(v!=="default"&&Object.prototype.hasOwnProperty.call(m,v)){var F=c?Object.getOwnPropertyDescriptor(m,v):null;F&&(F.get||F.set)?Object.defineProperty(r,v,F):r[v]=m[v]}return r.default=m,t&&t.set(m,r),r},p=function(m){if(typeof WeakMap!="function")return null;var a=new WeakMap,t=new WeakMap;return(p=function(c){return c?t:a})(m)},f=e("K+nK"),d.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return d.t0=f,d.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return d.t1=d.sent,i=(0,d.t0)(d.t1),d.next=12,e.e(15).then(e.t.bind(null,"tL+A",7));case 12:return d.t2=f,d.next=15,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 15:return d.t3=d.sent,h=(0,d.t2)(d.t3),d.t4=u,d.next=20,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 20:return d.t5=d.sent,b=(0,d.t4)(d.t5),d.next=24,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(11)]).then(e.bind(null,"gdfu"));case 24:return C=d.sent,d.t6=u,d.next=28,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 28:return d.t7=d.sent,o=(0,d.t6)(d.t7),I=function(){var m=(0,o.useForm)({logOnMount:function(c){console.log("onMount",c)},logOnSubmit:function(c){console.log("onSubmit",c)}}),a={type:"object",properties:{input1:{title:"\u8F93\u5165\u6846",required:!0,type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u5DE6","\u4E2D","\u53F3"],widget:"radio"}}},t=function(c,v){v.length>0?h.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(v.map(function(F){return F.name}))):h.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")};return b.default.createElement("div",null,b.default.createElement(o.default,{id:"my-demo-form",form:m,schema:a,onFinish:t}),b.default.createElement(i.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},B=I,d.abrupt("return",B);case 33:case"end":return d.stop()}},j)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"measure-demo"}},"migrate-demo":{component:Object(W.dynamic)({loader:function(){var A=Object($.a)(y.a.mark(function j(){var f,i,h,b,C,o,p,u;return y.a.wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return p=function(){var d=(0,h.useForm)(),P=function(a,t){t.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(t))):alert(JSON.stringify(a))};return i.default.createElement("div",null,i.default.createElement(h.default,{form:d,schema:o,onFinish:P}),i.default.createElement("button",{onClick:d.submit},"\u63D0\u4EA4"))},C=function(d,P){if(!P&&d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var m=b(P);if(m&&m.has(d))return m.get(d);var a={},t=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in d)if(r!=="default"&&Object.prototype.hasOwnProperty.call(d,r)){var c=t?Object.getOwnPropertyDescriptor(d,r):null;c&&(c.get||c.set)?Object.defineProperty(a,r,c):a[r]=d[r]}return a.default=d,m&&m.set(d,a),a},b=function(d){if(typeof WeakMap!="function")return null;var P=new WeakMap,m=new WeakMap;return(b=function(t){return t?m:P})(d)},f=e("K+nK"),B.t0=f,B.next=7,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 7:return B.t1=B.sent,i=(0,B.t0)(B.t1),B.t2=C,B.next=12,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 12:return B.t3=B.sent,h=(0,B.t2)(B.t3),o={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}},u=p,B.abrupt("return",u);case 17:case"end":return B.stop()}},j)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate-demo"}},"migrate-demo-1":{component:Object(W.dynamic)({loader:function(){var A=Object($.a)(y.a.mark(function j(){var f,i,h,b,C,o,p,u,I,B,E,d,P;return y.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return I=function(r,c){if(!c&&r&&r.__esModule)return r;if(r===null||typeof r!="object"&&typeof r!="function")return{default:r};var v=u(c);if(v&&v.has(r))return v.get(r);var F={},w=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var M in r)if(M!=="default"&&Object.prototype.hasOwnProperty.call(r,M)){var J=w?Object.getOwnPropertyDescriptor(r,M):null;J&&(J.get||J.set)?Object.defineProperty(F,M,J):F[M]=r[M]}return F.default=r,v&&v.set(r,F),F},u=function(r){if(typeof WeakMap!="function")return null;var c=new WeakMap,v=new WeakMap;return(u=function(w){return w?v:c})(r)},f=e("K+nK"),a.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return a.t0=f,a.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return a.t1=a.sent,i=(0,a.t0)(a.t1),a.t2=f,a.next=13,Promise.resolve().then(e.bind(null,"tJVT"));case 13:return a.t3=a.sent,h=(0,a.t2)(a.t3),a.next=17,Promise.all([e.e(3),e.e(19)]).then(e.t.bind(null,"cUip",7));case 17:return a.t4=f,a.next=20,Promise.all([e.e(0),e.e(8),e.e(18),e.e(20)]).then(e.t.bind(null,"iJl9",7));case 20:return a.t5=a.sent,b=(0,a.t4)(a.t5),a.t6=I,a.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return a.t7=a.sent,C=(0,a.t6)(a.t7),a.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(11)]).then(e.bind(null,"gdfu"));case 29:return o=a.sent,a.next=32,Promise.all([e.e(22),e.e(25)]).then(e.bind(null,"7t+U"));case 32:return p=a.sent,B=b.default.TextArea,E={type:"object",properties:{number:{title:"\u6570\u5B57\u8F93\u5165\u6846",type:"number","ui:disabled":!0},checkbox:{title:"\u662F\u5426\u9009\u62E9",type:"boolean","ui:widget":"switch"}},required:["number"]},d=function(){var r=(0,C.useState)(JSON.stringify(E)),c=(0,h.default)(r,2),v=c[0],F=c[1],w=(0,C.useState)({}),M=(0,h.default)(w,2),J=M[0],$e=M[1],tn=function(){try{var Tn=(0,p.updateSchemaToNewVersion)(JSON.parse(v));$e(Tn)}catch(Hn){console.log(Hn)}},on=function(Tn){F(Tn.target.value)},An=function(){F(JSON.stringify(JSON.parse(v),null,2))};return C.default.createElement("div",null,C.default.createElement("div",null,"\u586B\u5165\u65E7\u7248schema\uFF1A"),C.default.createElement(B,{style:{minHeight:400,marginTop:12,marginBottom:12},value:v,onChange:on}),C.default.createElement(i.default,{style:{marginRight:12},onClick:An},"\u683C\u5F0F\u5316\u65E7schema"),C.default.createElement(i.default,{type:"primary",onClick:tn},"\u751F\u6210\u65B0\u7248schema"),C.default.createElement(B,{style:{minHeight:400,marginTop:12},value:JSON.stringify(J,null,2)}))},P=d,a.abrupt("return",P);case 38:case"end":return a.stop()}},j)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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

export default Translator;`},"packages/form-render/src/utils.js":{import:"../../packages/form-render/src/utils.js",content:V}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"},"lodash-es":{version:"4.17.21"}},identifier:"migrate-demo-1"}},"migrate2-demo":{component:Object(W.dynamic)({loader:function(){var A=Object($.a)(y.a.mark(function j(){var f,i,h,b,C,o,p,u,I;return y.a.wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return u=function(){var P=(0,h.useState)({}),m=(0,i.default)(P,2),a=m[0],t=m[1],r=(0,h.useState)([]),c=(0,i.default)(r,2),v=c[0],F=c[1],w=(0,h.useState)(!1),M=(0,i.default)(w,2),J=M[0],$e=M[1],tn=(0,b.useForm)({formData:a,onChange:t,onValidate:F,showValidate:J});(0,h.useEffect)(function(){tn.init()},[]);var on=function(){$e(!0),v.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(v))):alert(JSON.stringify(a))};return h.default.createElement("div",null,h.default.createElement(b.default,{form:tn,schema:p}),h.default.createElement("button",{onClick:on},"\u63D0\u4EA4"))},o=function(P,m){if(!m&&P&&P.__esModule)return P;if(P===null||typeof P!="object"&&typeof P!="function")return{default:P};var a=C(m);if(a&&a.has(P))return a.get(P);var t={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in P)if(c!=="default"&&Object.prototype.hasOwnProperty.call(P,c)){var v=r?Object.getOwnPropertyDescriptor(P,c):null;v&&(v.get||v.set)?Object.defineProperty(t,c,v):t[c]=P[c]}return t.default=P,a&&a.set(P,t),t},C=function(P){if(typeof WeakMap!="function")return null;var m=new WeakMap,a=new WeakMap;return(C=function(r){return r?a:m})(P)},f=e("K+nK"),E.t0=f,E.next=7,Promise.resolve().then(e.bind(null,"tJVT"));case 7:return E.t1=E.sent,i=(0,E.t0)(E.t1),E.t2=o,E.next=12,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 12:return E.t3=E.sent,h=(0,E.t2)(E.t3),E.t4=o,E.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 17:return E.t5=E.sent,b=(0,E.t4)(E.t5),p={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}},I=u,E.abrupt("return",I);case 22:case"end":return E.stop()}},j)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
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
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate2-demo"}},"schema-demo":{component:Object(W.dynamic)({loader:function(){var A=Object($.a)(y.a.mark(function j(){var f,i,h,b,C;return y.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return f=e("K+nK"),p.t0=f,p.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return p.t1=p.sent,i=(0,p.t0)(p.t1),p.t2=f,p.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(17)]).then(e.bind(null,"c2mQ"));case 9:return p.t3=p.sent,h=(0,p.t2)(p.t3),p.next=13,e.e(21).then(e.bind(null,"8iYR"));case 13:return b=p.sent,C=function(){return i.default.createElement(h.default,{schema:b.basic})},p.abrupt("return",C);case 16:case"end":return p.stop()}},j)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { basic } from '../json/schema';

export default () => <FR schema={basic} />;`},"demo/FR.jsx":{import:"../demo/FR",content:Ce},"json/schema.js":{import:"../json/schema",content:cn}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo"}},"schema-demo-1":{component:Object(W.dynamic)({loader:function(){var A=Object($.a)(y.a.mark(function j(){var f,i,h,b,C;return y.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return f=e("K+nK"),p.t0=f,p.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return p.t1=p.sent,i=(0,p.t0)(p.t1),p.t2=f,p.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(17)]).then(e.bind(null,"c2mQ"));case 9:return p.t3=p.sent,h=(0,p.t2)(p.t3),p.next=13,e.e(21).then(e.bind(null,"8iYR"));case 13:return b=p.sent,C=function(){return i.default.createElement(h.default,{schema:b.titleTrick})},p.abrupt("return",C);case 16:case"end":return p.stop()}},j)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { titleTrick } from '../json/schema';

export default () => <FR schema={titleTrick} />;`},"demo/FR.jsx":{import:"../demo/FR",content:Ce},"json/schema.js":{import:"../json/schema",content:cn}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo-1"}},"docs-playground":{component:Object(W.dynamic)({loader:function(){var A=Object($.a)(y.a.mark(function j(){return y.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"BASV"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},j)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:jn},"main.js":{import:"./main",content:vn},"json/simplest.json":{import:"./json/simplest.json",content:sn},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:Le},"monaco/index.js":{import:"./monaco",content:Bn},"theme.css":{import:"./theme.css",content:Pn},"index.css":{import:"./index.css",content:gn}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:"^16.0.0"},"react-dom":{version:"^16.0.0"},"deep-equal":{version:"2.0.5"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.6.1"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-simple-code-editor":{version:"0.11.0"},prismjs:{version:"1.23.0"}},identifier:"docs-playground"}},"docs-playground1":{component:Object(W.dynamic)({loader:function(){var A=Object($.a)(y.a.mark(function j(){return y.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"Wrpt"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},j)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:Pe},"main.js":{import:"./main",content:nt},"json/simplest.json":{import:"./json/simplest.json",content:wn},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:tt},"monaco/index.js":{import:"./monaco",content:dt},"suggestionsMap.js":{import:"./suggestionsMap",content:at},"index.css":{import:"./index.css",content:ct}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:"^17.x"},"react-dom":{version:">=16.9.0"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.6.1"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-monaco-editor":{version:"0.44.0"},"@types/react":{version:"^17.x"}},identifier:"docs-playground1"}},"table-render-advanced":{component:Object(W.dynamic)({loader:function(){var A=Object($.a)(y.a.mark(function j(){return y.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"7ZP+"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},j)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{tsx:Mn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.3"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!0,identifier:"table-render-advanced"}},"table-render-nosearch":{component:Object(W.dynamic)({loader:function(){var A=Object($.a)(y.a.mark(function j(){return y.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"CfUQ"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},j)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{tsx:rt}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.3"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!0,identifier:"table-render-nosearch"}},"table-render-notitle":{component:Object(W.dynamic)({loader:function(){var A=Object($.a)(y.a.mark(function j(){return y.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"/usH"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},j)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{tsx:Vn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.3"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!0,identifier:"table-render-notitle"}},"table-render-paramtable":{component:Object(W.dynamic)({loader:function(){var A=Object($.a)(y.a.mark(function j(){return y.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"48jF"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},j)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{tsx:mt}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.3"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},umi:{version:"3.4.19"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!0,identifier:"table-render-paramtable"}},"table-render-demo":{component:Object(W.dynamic)({loader:function(){var A=Object($.a)(y.a.mark(function j(){var f,i,h,b,C,o,p,u,I;return y.a.wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return f=e("K+nK"),E.t0=f,E.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return E.t1=E.sent,i=(0,E.t0)(E.t1),E.next=8,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(71)]).then(e.bind(null,"P2DI"));case 8:for(h=E.sent,b=[],C=0;C<6;C++)b.push({id:C.toString(),title:"\u6807\u9898".concat(C+1),created_at:new Date().getTime()});return o={type:"object",properties:{string:{title:"\u6807\u9898",type:"string",width:"30%"},created_at:{title:"\u521B\u5EFA\u65F6\u95F4",type:"string",format:"date",width:"30%"}}},p=[{title:"\u6807\u9898",dataIndex:"title"},{title:"\u521B\u5EFA\u65F6\u95F4",key:"since",dataIndex:"created_at",valueType:"date"},{title:"\u64CD\u4F5C",render:function(P,m){return i.default.createElement("a",{onClick:function(){return alert(P.title)}},"\u7F16\u8F91")}}],u=function(){var P=function(){return{rows:b,total:b.length}};return i.default.createElement(i.default.Fragment,null,i.default.createElement(h.Search,{schema:o,api:P}),i.default.createElement(h.Table,{headerTitle:"\u6700\u7B80\u8868\u683C",columns:p,rowKey:"id"}))},I=(0,h.withTable)(u),E.abrupt("return",I);case 16:case"end":return E.stop()}},j)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default withTable(Wrapper);`}},dependencies:{react:{version:">=16.8.0"},"table-render":{version:"1.1.3"},antd:{version:"4.x",css:"antd/dist/antd.css"}},transform:!0,defaultShowCode:!0,identifier:"table-render-demo"}},"generator-demo":{component:Object(W.dynamic)({loader:function(){var A=Object($.a)(y.a.mark(function j(){var f,i,h,b,C,o;return y.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return f=e("K+nK"),u.t0=f,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,i=(0,u.t0)(u.t1),u.t2=f,u.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(70)]).then(e.bind(null,"nYSz"));case 9:return u.t3=u.sent,h=(0,u.t2)(u.t3),b={type:"object",properties:{inputName:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string"}}},C=function(){return i.default.createElement("div",{style:{height:"80vh"}},i.default.createElement(h.default,{defaultValue:b}))},o=C,u.abrupt("return",o);case 15:case"end":return u.stop()}},j)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.4.6"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"generator-demo"}},"generator-modal":{component:Object(W.dynamic)({loader:function(){var A=Object($.a)(y.a.mark(function j(){return y.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"PPgD"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},j)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:Kn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.4.6"},"react-dom":{version:">=16.9.0"}},identifier:"generator-modal"}},"generator-settings":{component:Object(W.dynamic)({loader:function(){var A=Object($.a)(y.a.mark(function j(){return y.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"M63W"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},j)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:Wn}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.4.6"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-settings"}},"generator-layout":{component:Object(W.dynamic)({loader:function(){var A=Object($.a)(y.a.mark(function j(){return y.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"SOdT"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},j)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:Jn},"index.less":{import:"./index.less",content:zn}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.4.6"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-layout"}},"generator-transformer":{component:Object(W.dynamic)({loader:function(){var A=Object($.a)(y.a.mark(function j(){return y.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"jktF"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},j)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:xn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.4.6"},"react-dom":{version:">=16.9.0"}},identifier:"generator-transformer"}},"generator-playground":{component:Object(W.dynamic)({loader:function(){var A=Object($.a)(y.a.mark(function j(){return y.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"TYW4"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},j)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:st},"index.less":{import:"./index.less",content:zn}},dependencies:{react:{version:">=16.8.0"},umi:{version:"3.4.19"},"fr-generator":{version:"2.4.6"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-playground"}}}},TIsu:function(Dn,dn,e){},Zs1V:function(Dn){Dn.exports=JSON.parse("{}")},gQ4F:function(Dn,dn,e){"use strict";e.r(dn);var $=e("q1tI"),n=e.n($),y=e("dEAq"),W=e.n(y),oe=e("0zqC"),V=e("ZpkN"),qe=e("JjdP"),Oe=n.a.memo(qe.default["migrate-demo"].component),me=n.a.memo(qe.default["migrate-demo-1"].component);dn.default=Be=>(n.a.useEffect(()=>{Be!=null&&Be.location.hash&&y.AnchorLink.scrollToAnchor(decodeURIComponent(Be.location.hash.slice(1)))},[]),n.a.createElement(n.a.Fragment,null,n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"markdown"},n.a.createElement("h1",{id:"\u5347\u7EA7\u65B9\u6848\uFF08\u63A8\u8350\uFF09"},n.a.createElement(y.AnchorLink,{to:"#\u5347\u7EA7\u65B9\u6848\uFF08\u63A8\u8350\uFF09","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u5347\u7EA7\u65B9\u6848\uFF08\u63A8\u8350\uFF09"),n.a.createElement("h2",{id:"\u4E09\u4E2A\u6539\u53D8"},n.a.createElement(y.AnchorLink,{to:"#\u4E09\u4E2A\u6539\u53D8","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u4E09\u4E2A\u6539\u53D8"),n.a.createElement("p",null,n.a.createElement("strong",null,"FormRender v1.0.0 \u7684\u5347\u7EA7\uFF0C\u4ECE\u4F7F\u7528\u65B9\u89C6\u89D2\u6765\u770B\uFF0C\u6700\u4E3B\u8981\u7684\u53D8\u52A8\u5F52\u7ED3\u4E3A\u4E09\u6761\uFF1A")),n.a.createElement("ol",null,n.a.createElement("li",null,n.a.createElement("p",null,"\u63D0\u4EA4\u7684\u65B9\u6CD5\u6536\u675F\uFF08\u5373\u7EDF\u4E00\u63D0\u4F9B submit \u65B9\u6CD5\uFF09\uFF0CformData \u548C\u6821\u9A8C\u4FE1\u606F\u5185\u7F6E")),n.a.createElement("li",null,n.a.createElement("p",null,"Schema \u4E66\u5199\u89C4\u5219\u66F4\u52A0\u6E05\u6670\uFF0C\u66F4\u52A0\u8D34\u8FD1\u7EC4\u4EF6 props")),n.a.createElement("li",null,n.a.createElement("p",null,"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u4E0D\u518D\u8981\u201C\u5957\u58F3\u201D\uFF0C\u5F88\u591A antd \u7EC4\u4EF6\u76F4\u63A5\u62FF\u6765\u80FD\u7528"))),n.a.createElement("p",null,"\u7B2C 1 \u6761\u662F\u4E3A\u4E86\u66F4\u52A0\u5F3A\u5927\u7684\u529F\u80FD\uFF0C\u540E\u4E24\u6761\u5219\u4E3A\u4E86\u66F4\u52A0\u5FEB\u6377\u548C\u8212\u9002\u7684\u5F00\u53D1\u4F53\u9A8C\u3002FormRender 1.0 \u5E26\u6765\u4E86\u54EA\u4E9B\u65B0\u529F\u80FD\uFF0C\u8BE6\u89C1\u6587\u7AE0\u5E95\u90E8 ",n.a.createElement("code",null,"Changelog \u601D\u8003")),n.a.createElement("h2",{id:"\u8FC1\u79FB\u65B9\u6848\u5982\u4E0B"},n.a.createElement(y.AnchorLink,{to:"#\u8FC1\u79FB\u65B9\u6848\u5982\u4E0B","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u8FC1\u79FB\u65B9\u6848\u5982\u4E0B"),n.a.createElement("p",null,n.a.createElement("strong",null,"FormRender v0.x \u7684\u4EE3\u7801\u5982\u4E0B\uFF1A")),n.a.createElement(V.a,{code:`import React, { useState } from 'react';
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

export default Demo;`,lang:"js"}),n.a.createElement("h3",{id:"\u65B0\u7248\u672C\u5347\u7EA7\u6539\u52A8"},n.a.createElement(y.AnchorLink,{to:"#\u65B0\u7248\u672C\u5347\u7EA7\u6539\u52A8","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u65B0\u7248\u672C\u5347\u7EA7\u6539\u52A8"),n.a.createElement("p",null,"\u5B8C\u5168\u4F7F\u7528\u65B0 api\uFF0CformData \u548C onChange \u8FD9\u4E9B\u539F\u672C\u66B4\u9732\u5728\u5916\u7684\u5C5E\u6027\u6536\u675F\uFF0Csubmit \u65B9\u6CD5\u7531 form \u5B9E\u4F8B\u63D0\u4F9B\uFF0C\u4E00\u822C\u60C5\u51B5\u4E0B\u8FC1\u79FB\u4E5F\u5FEB\u7684\uFF0C\u53EA\u662F\u8981\u6CE8\u610F\u6240\u6709\u5728\u5916\u90E8\u4F7F\u7528\u5230 formData \u7684\u573A\u666F\uFF0C\u9700\u8981\u66FF\u6362\u4E3A ",n.a.createElement("code",null,"form.getValues()"),"\uFF0C\u6240\u6709\u4F7F\u7528\u5230 onChange \u7684\u5730\u65B9\u9700\u8981\u4FEE\u6539\u4E3A ",n.a.createElement("code",null,"form.setValues()"))),n.a.createElement(oe.default,qe.default["migrate-demo"].previewerProps,n.a.createElement(Oe,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("p",null,"\u7531\u4E8E\u65B0\u7248\u7684 formData/onChange/validate/onValidate \u5168\u90E8\u5185\u7F6E\u4E86\uFF0C\u6240\u4EE5\u5728\u8FC1\u79FB\u65F6\uFF0C\u5916\u90E8\u6240\u6709\u4F7F\u7528\u5230\u4E09\u8005\u7684\u5730\u65B9\u4E00\u5F8B\u4F7F\u7528 form \u65B9\u6CD5\u66FF\u6362\uFF1A"),n.a.createElement(V.a,{code:`formData  ->  form.getValues()
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
};`,lang:"js"}),n.a.createElement("ol",null,n.a.createElement("li",null,n.a.createElement("code",null,"onChange")," \u4E0D\u518D\u63A5\u6536 name \u4F5C\u4E3A\u7B2C\u4E00\u4E2A\u5165\u53C2\uFF0C\u800C\u6539\u4E3A\u66F4\u4E3A\u81EA\u7136\u7684\u53EA\u6709\u4E00\u4E2A\u5165\u53C2 value"),n.a.createElement("li",null,"\u6240\u6709",n.a.createElement("code",null,"ui:options"),"\u7684\u5185\u5BB9\u4F1A\u76F4\u63A5\u5728 props \u91CC\u62FF\u5230\uFF0C\u800C\u4E0D\u9700\u8981\u518D\u4ECE props.options \u91CC\u83B7\u53D6 \uFF08ui:options \u5DF2\u66F4\u540D\u4E3A props\uFF0C\u4E0D\u8FC7\u5728\u9876\u5C42\u505A\u4E86 schema \u5B57\u6BB5\u7684\u517C\u5BB9\uFF09")),n.a.createElement("h2",{id:"schema-\u7EC6\u8282\u4E0A\u7684\u6539\u52A8"},n.a.createElement(y.AnchorLink,{to:"#schema-\u7EC6\u8282\u4E0A\u7684\u6539\u52A8","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"schema \u7EC6\u8282\u4E0A\u7684\u6539\u52A8"),n.a.createElement("p",null,"\u5355\u9009\u7EC4\u4EF6\u4E0D\u518D\u9ED8\u8BA4\u9009\u4E2D\u7B2C\u4E00\u9879\uFF0C\u9ED8\u8BA4\u503C\u4E3A undefined\uFF0C\u9664\u975E\u901A\u8FC7 default \u5B57\u6BB5\u6307\u660E\u3002"),n.a.createElement(V.a,{code:`// \u5355\u9009
{
  "title": "\u5355\u9009",
  "type": "string",
  "enum": ["hz", "wh", "gy"],
  "enumNames": ["\u676D\u5DDE", "\u6B66\u6C49", "\u8D35\u9633"],
  "default": "hz"
}`,lang:"js"}),n.a.createElement("h2",{id:"\u65E7\u7248-schema-\u8F6C\u6362\u5668\uFF1A"},n.a.createElement(y.AnchorLink,{to:"#\u65E7\u7248-schema-\u8F6C\u6362\u5668\uFF1A","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u65E7\u7248 schema \u8F6C\u6362\u5668\uFF1A")),n.a.createElement(oe.default,qe.default["migrate-demo-1"].previewerProps,n.a.createElement(me,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h2",{id:"changelog-\u601D\u8003"},n.a.createElement(y.AnchorLink,{to:"#changelog-\u601D\u8003","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Changelog \u601D\u8003"),n.a.createElement("p",null,"\u5728\u6700\u540E\u7F57\u5217\u4E00\u4E0B\u7EC6\u8282\u4E0A FormRender 0.x -> 1.0 \u7EC6\u8282\u4E0A\u7684\u6539\u52A8 & \u601D\u8003"),n.a.createElement("h3",{id:"\u529F\u80FD\u589E\u5F3A"},n.a.createElement(y.AnchorLink,{to:"#\u529F\u80FD\u589E\u5F3A","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u529F\u80FD\u589E\u5F3A"),n.a.createElement("ol",null,n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement("strong",null,"\u5C55\u793A\u5347\u7EA7")),n.a.createElement("ul",null,n.a.createElement("li",null,"\u5217\u8868\u7684\u5C55\u793A\u652F\u6301\u4E09\u79CD\u6A21\u5F0F\uFF0C\u5206\u522B\u652F\u6301\u6BCF\u4E2A item 1-2 \u4E2A\u5143\u7D20\uFF0C3-5 \u4E2A\u5143\u7D20\u548C\u590D\u6742\u7ED3\u6784"),n.a.createElement("li",null,"\u5BF9\u8C61\u7684\u5C55\u793A\u652F\u6301\u4E8C\u79CD\u6A21\u5F0F"),n.a.createElement("li",null,"\u6821\u9A8C\u7684\u5C55\u793A\u548C antd \u6548\u679C\u4E00\u81F4"),n.a.createElement("li",null,"\u5C55\u793A\u7C7B\u578B\u9664\u4E86\u57FA\u7840\u7684 column \u548C row\uFF0C\u8FD8\u652F\u6301\u4E86 inline \u6A21\u5F0F"))),n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement("strong",null,"\u5185\u7F6E\u7EC4\u4EF6\u66F4\u4E30\u5BCC")),n.a.createElement("ul",null,n.a.createElement("li",null,"\u65B0\u589E\u4E86 rate\uFF0CtreeSelect, cascader \u7B49\u7EC4\u4EF6\u7684\u5185\u7F6E\u652F\u6301"))),n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement("strong",null,"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u5F00\u53D1\u66F4\u4FBF\u6377\uFF0C\u529F\u80FD\u66F4\u5F3A\u5927")),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("p",null,"props \u76F4\u63A5\u900F\u4F20\u4E86\uFF0C\u4E0D\u518D\u9700\u8981\u4ECE options \u5B57\u6BB5\u91CC\u53BB\u53D6\u5F97")),n.a.createElement("li",null,n.a.createElement("p",null,"onChange \u65B9\u6CD5\u7684\u5165\u53C2\u4E0D\u518D\u9700\u8981\u4F20 name \u4F5C\u4E3A\u7B2C\u4E00\u4E2A\u53C2\u6570\uFF08\u8FD9\u4E2A\u8BBE\u8BA1\u5176\u5B9E\u5F88\u4E0D\u81EA\u7136\u548C\u6CA1\u6709\u5FC5\u8981\uFF09\uFF0C\u540C\u65F6\u5982\u679C\u539F\u751F\u7EC4\u4EF6\u7684 onChange \u8FD4\u56DE\u7684\u662F event\uFF0C\u4E5F\u4F1A\u5904\u7406\u4E00\u6B65\u81EA\u52A8\u80FD\u62FF\u5230 value \u503C")),n.a.createElement("li",null,n.a.createElement("p",null,"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u5185\u7F6E\u4E86 onItemChange(namePath, value) \u65B9\u6CD5\uFF0C\u53EF\u4EE5\u65B9\u4FBF\u7684\u5728\u4E00\u4E2A\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u4E2D\u4FEE\u6539\u8868\u5355\u4EFB\u4F55\u6570\u636E\u7684\u503C")),n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement("strong",null,"\u8FD9\u4E9B\u7EC6\u8282\u7684\u76EE\u6807\uFF0C\u662F\u8BA9\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7684\u4E66\u5199\u8D34\u8FD1\u62FF\u6765\u4E00\u4E2A\u7EC4\u4EF6\u76F4\u63A5\u80FD\u7528\uFF0C\u800C\u4E0D\u662F\u50CF\u4E4B\u524D\u4E00\u6837\u518D\u7B80\u5355\u7684\u573A\u666F\u4E5F\u9700\u8981\u505A\u4E00\u6B65\u5305\u88C5\u5904\u7406\uFF0C\u4ECE\u539F\u672C\u7684\uFF1A")),n.a.createElement(V.a,{code:`const schema = {
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
};`,lang:"js"})))),n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement("strong",null,"\u6821\u9A8C\u4E30\u5BCC\u5EA6\u548C\u4F53\u9A8C\u5927\u5E45\u5347\u7EA7")),n.a.createElement("ul",null,n.a.createElement("li",null,"\u6821\u9A8C\u7684\u5C55\u793A & \u5C55\u793A\u5B9E\u9645\u7EC8\u4E8E\u7B26\u5408\u7528\u6237\u4E60\u60EF\u4E86"),n.a.createElement("li",null,"\u4E0D\u518D\u53EA\u652F\u6301 pattern \u6821\u9A8C\u4E86\uFF0C\u73B0\u5728\u652F\u6301\u5305\u62EC\u81EA\u5B9A\u4E49 validator \u7684\u6240\u6709 antd form \u652F\u6301\u7684\u6821\u9A8C"),n.a.createElement("li",null,"\u6821\u9A8C\u652F\u6301\u5F02\u6B65\u4E86"),n.a.createElement("li",null,"\u6821\u9A8C\u652F\u6301\u5916\u90E8\u6821\u9A8C\u7ED3\u679C\u56DE\u586B\u5C55\u793A\u4E86"))),n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement("strong",null,"\u5176\u4ED6")),n.a.createElement("ul",null,n.a.createElement("li",null,"\u672A\u538B\u7F29\u7684\u5305\u4F53\u79EF\u4ECE 76k -> 11k"),n.a.createElement("li",null,"\u5BF9 typescript \u7684\u5185\u7F6E\u652F\u6301"),n.a.createElement("li",null,"\u6E32\u67D3\u4F1A\u6839\u636E schema \u7684\u7ED3\u6784\u6765\u6E32\u67D3\uFF0C\u4E0D\u518D\u4F1A\u56E0\u4E3A formData \u503C\u7684\u987A\u5E8F\u53D8\u5316\u5F71\u54CD\u5230\u5C55\u793A"),n.a.createElement("li",null,"\u63D0\u4EA4\u7684 formData\uFF0C\u4E0D\u5C55\u793A\u7684 key \u4E0D\u4F1A\u8FD4\u56DE")))),n.a.createElement("h3",{id:"\u8BBE\u8BA1\u53D6\u820D"},n.a.createElement(y.AnchorLink,{to:"#\u8BBE\u8BA1\u53D6\u820D","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u8BBE\u8BA1\u53D6\u820D"),n.a.createElement("ol",null,n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement("strong",null,"\u6682\u65F6\u4E0D\u652F\u6301 fusion \u4E86"),"\uFF1Afusion \u4E0E antd \u5C55\u793A\u4E0A\u975E\u5E38\u7C7B\u4F3C\uFF0C\u4F46\u7EC4\u4EF6 api \u672C\u8EAB\u4EE5\u53CA\u6784\u5EFA\u5C42\u9762\u7684\u914D\u7F6E\u4E0A\u8FD8\u662F\u6709\u4E0D\u5C11\u4E0D\u540C\u7684\uFF0C\u5BF9\u4E24\u8005\u7684\u540C\u65F6\u652F\u6301\u82B1\u4E86\u5927\u91CF\u7684\u7CBE\u529B\u3002FormRender \u9009\u62E9\u6682\u65F6\u653E\u5F03 fusion\uFF0C\u66F4\u52A0\u8D34\u5408 antd\uFF0C\u5728\u529F\u80FD\u6DF1\u5165\u5B9E\u73B0\u548C\u8FED\u4EE3\u6548\u7387\u4E0A\u90FD\u4F1A\u6709\u5F88\u5927\u7684\u63D0\u9AD8\u3002\u4F46\u7EC4\u4EF6\u5E93\u7684\u5165\u53E3\u662F\u4E00\u76F4\u5F00\u653E\u7740\u7684\uFF08widgets props\uFF09\uFF0C\u6B22\u8FCE pr \u652F\u6301 fusion \u4FA7\u7684\u7EC4\u4EF6\u7684\u72EC\u7ACB\u652F\u6301\u3002")),n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement("strong",null,"\u53EA\u5141\u8BB8\u4F7F\u7528\u5B57\u7B26\u4E32\u7C7B\u578B\u7684\u51FD\u6570\u8868\u8FBE\u5F0F"),"\uFF1A\u7531\u4E8E schema \u53EF\u4EE5\u662F js \u5BF9\u8C61\uFF0C\u6240\u4EE5\u4E4B\u524D\u652F\u6301 schema \u91CC\u6709\u51FD\u6570\u7C7B\u578B\u7684\u8868\u8FBE\u5F0F\uFF0C\u4F1A\u5728\u6E32\u67D3\u524D\u8BA1\u7B97\u51FA\u51FD\u6570\u7684 return \u4F5C\u4E3A\u6E32\u67D3\u503C\u3002\u4F46\u7EC4\u4EF6\u7684 props \u4EE5\u53CA\u6821\u9A8C\u51FD\u6570\u53EF\u80FD\u672C\u8EAB\u5C31\u662F\u51FD\u6570\uFF0C\u8FD9\u4E9B\u51FD\u6570\u662F\u4E0D\u5E0C\u671B\u88AB\u63D0\u524D\u8BA1\u7B97\u7684\uFF0C\u800C\u53EA\u662F\u4F5C\u4E3A props \u4F20\u5165\u3002FR \u5E76\u6CA1\u6709\u5F88\u597D\u7684\u529E\u6CD5\u533A\u5206\u4E00\u4E2A\u51FD\u6570\u662F\u9700\u8981\u88AB\u76F4\u63A5\u6267\u884C\u8FD8\u662F\u539F\u6837\u4F5C\u4E3A\u51FD\u6570\u900F\u4F20\uFF0C\u6240\u4EE5\u8FD9\u91CC\u7684\u53D6\u820D\u662F\uFF0C\u4E0D\u5141\u8BB8\u51FD\u6570 props \u6216\u8005\u4E0D\u5141\u8BB8\u51FD\u6570\u5F0F\u7684\u8868\u8FBE\u5F0F\u3002\u7531\u4E8E\u8868\u8FBE\u5F0F\u5DF2\u7ECF\u6709\u5B57\u7B26\u4E32\u7684\u4E66\u5199\u65B9\u5F0F\uFF0C\u529F\u80FD\u662F\u5B8C\u5168\u7B49\u4EF7\u7684\uFF0C\u6240\u4EE5\u4E3A\u4E86\u5141\u8BB8\u51FD\u6570\u4F5C\u4E3A props\uFF0C\u6211\u4EEC\u4E0D\u518D\u652F\u6301\u51FD\u6570\u4F5C\u4E3A\u8868\u8FBE\u5F0F\u3002"),n.a.createElement(V.a,{code:`showMore: {
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
}`,lang:"js"})),n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement("strong",null,"\u4E0D\u518D\u8BA1\u7B97\u521D\u59CB\u503C"),"\uFF1A\u8FD9\u662F\u4E00\u4E2A\u5185\u90E8\u7684\u6539\u52A8\u3002\u65B0\u7684 FormRender\uFF0C\u4E0D\u4F1A\u6BCF\u6B21 onChange \u540E\u90FD\u6267\u884C resolve \u751F\u6210\u4E00\u4EFD formData \u7684\u9AA8\u67B6\uFF0C\u6CA1\u6709\u586B\u7684\u6846\u7684\u503C\u5C31\u662F undefined\u3002\u800C\u53EA\u5728\u63D0\u4EA4\u548C\u6821\u9A8C\u65F6\u4F1A\u751F\u6210\u9AA8\u67B6\u3002\u8FD9\u907F\u514D\u4E86\u5F88\u591A\u5728\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u4E2D\u5C1D\u8BD5\u4FEE\u6539 formData \u65F6\u5BB9\u6613\u4EA7\u751F\u6B7B\u5FAA\u73AF\u6216\u8005\u4FEE\u6539\u65E0\u6548\u7684\u95EE\u9898\uFF0C\u4E5F\u907F\u514D\u4E86\u5916\u90E8\u6CA1\u6709\u5F88\u597D\u7684\u65B9\u6CD5\u62FF\u5230\u9ED1\u7BB1\u7684 resolve \u540E\u7684\u6570\u636E\u3002")))))))},p8sG:function(Dn,dn,e){"use strict";Dn.exports=e("80pN")}}]);
