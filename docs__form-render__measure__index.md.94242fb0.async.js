(window.webpackJsonp=window.webpackJsonp||[]).push([[49,13],{"0zqC":function(En,un,e){"use strict";e.r(un);var x=e("tJVT"),r=e("q1tI"),b=e.n(r),W=e("wx14"),ue=e("rePB"),J=e("ODXe"),Te=e("U8pU"),Ce=e("Ff2n"),oe=e("VTBJ"),$n=e("TSYQ"),Re=e.n($n),jn=e("Zm9Q"),Dn=e("5Z9U"),pn=e("6cGi"),an=e("KQm4"),$e=e("wgJM"),An=e("t23M");function Pn(s){var d=Object(r.useRef)(),g=Object(r.useRef)(!1);function j(){for(var D=arguments.length,E=new Array(D),T=0;T<D;T++)E[T]=arguments[T];g.current||($e.a.cancel(d.current),d.current=Object($e.a)(function(){s.apply(void 0,E)}))}return Object(r.useEffect)(function(){return function(){g.current=!0,$e.a.cancel(d.current)}},[]),j}function hn(s){var d=Object(r.useRef)([]),g=Object(r.useState)({}),j=Object(J.a)(g,2),D=j[1],E=Object(r.useRef)(typeof s=="function"?s():s),T=Pn(function(){var K=E.current;d.current.forEach(function(L){K=L(K)}),d.current=[],E.current=K,D({})});function N(K){d.current.push(K),T()}return[E.current,N]}var Fe=e("4IlW");function nt(s,d){var g,j=s.prefixCls,D=s.id,E=s.active,T=s.rtl,N=s.tab,K=N.key,L=N.tab,V=N.disabled,G=N.closeIcon,U=s.tabBarGutter,re=s.tabPosition,Y=s.closable,X=s.renderWrapper,se=s.removeAriaLabel,z=s.editable,q=s.onClick,ne=s.onRemove,Q=s.onFocus,ae="".concat(j,"-tab");r.useEffect(function(){return ne},[]);var k={};re==="top"||re==="bottom"?k[T?"marginLeft":"marginRight"]=U:k.marginBottom=U;var pe=z&&Y!==!1&&!V;function _(te){V||q(te)}function le(te){te.preventDefault(),te.stopPropagation(),z.onEdit("remove",{key:K,event:te})}var de=r.createElement("div",{key:K,ref:d,className:Re()(ae,(g={},Object(ue.a)(g,"".concat(ae,"-with-remove"),pe),Object(ue.a)(g,"".concat(ae,"-active"),E),Object(ue.a)(g,"".concat(ae,"-disabled"),V),g)),style:k,onClick:_},r.createElement("div",{role:"tab","aria-selected":E,id:D&&"".concat(D,"-tab-").concat(K),className:"".concat(ae,"-btn"),"aria-controls":D&&"".concat(D,"-panel-").concat(K),"aria-disabled":V,tabIndex:V?null:0,onClick:function(H){H.stopPropagation(),_(H)},onKeyDown:function(H){[Fe.a.SPACE,Fe.a.ENTER].includes(H.which)&&(H.preventDefault(),_(H))},onFocus:Q},L),pe&&r.createElement("button",{type:"button","aria-label":se||"remove",tabIndex:0,className:"".concat(ae,"-remove"),onClick:function(H){H.stopPropagation(),le(H)}},G||z.removeIcon||"\xD7"));return X&&(de=X(de)),de}var wn=r.forwardRef(nt),tt={width:0,height:0,left:0,top:0};function dt(s,d,g){return Object(r.useMemo)(function(){for(var j,D=new Map,E=d.get((j=s[0])===null||j===void 0?void 0:j.key)||tt,T=E.left+E.width,N=0;N<s.length;N+=1){var K=s[N].key,L=d.get(K);if(!L){var V;L=d.get((V=s[N-1])===null||V===void 0?void 0:V.key)||tt}var G=D.get(K)||Object(oe.a)({},L);G.right=T-G.left-G.width,D.set(K,G)}return D},[s.map(function(j){return j.key}).join("_"),d,g])}var rt={width:0,height:0,left:0,top:0,right:0};function ct(s,d,g,j,D){var E=D.tabs,T=D.tabPosition,N=D.rtl,K,L,V;["top","bottom"].includes(T)?(K="width",L=N?"right":"left",V=Math.abs(d.left)):(K="height",L="top",V=-d.top);var G=d[K],U=g[K],re=j[K],Y=G;return U+re>G&&(Y=G-re),Object(r.useMemo)(function(){if(!E.length)return[0,0];for(var X=E.length,se=X,z=0;z<X;z+=1){var q=s.get(E[z].key)||rt;if(q[L]+q[K]>V+Y){se=z-1;break}}for(var ne=0,Q=X-1;Q>=0;Q-=1){var ae=s.get(E[Q].key)||rt;if(ae[L]<V){ne=Q+1;break}}return[ne,se]},[s,V,Y,T,E.map(function(X){return X.key}).join("_"),N])}var Mn=e("Gytx"),at=e.n(Mn),Vn=e("Kwbf");function mt(s,d){var g=s.prefixCls,j=s.invalidate,D=s.item,E=s.renderItem,T=s.responsive,N=s.registerSize,K=s.itemKey,L=s.className,V=s.style,G=s.children,U=s.display,re=s.order,Y=s.component,X=Y===void 0?"div":Y,se=Object(Ce.a)(s,["prefixCls","invalidate","item","renderItem","responsive","registerSize","itemKey","className","style","children","display","order","component"]),z=T&&!U;function q(pe){N(K,pe)}r.useEffect(function(){return function(){q(null)}},[]);var ne=E&&D!==void 0?E(D):G,Q;j||(Q={opacity:z?0:1,height:z?0:void 0,overflowY:z?"hidden":void 0,order:T?re:void 0,pointerEvents:z?"none":void 0});var ae={};z&&(ae["aria-hidden"]=!0);var k=r.createElement(X,Object(W.a)({className:Re()(!j&&g,L),style:Object(oe.a)(Object(oe.a)({},Q),V)},ae,se,{ref:d}),ne);return T&&(k=r.createElement(An.default,{onResize:function(_){var le=_.offsetWidth;q(le)}},k)),k}var Bn=r.forwardRef(mt);Bn.displayName="Item";var Kn=Bn;function Jn(){var s=Object(r.useState)({}),d=Object(J.a)(s,2),g=d[1],j=Object(r.useRef)([]),D=Object(r.useRef)(!1),E=0,T=0;Object(r.useEffect)(function(){return function(){D.current=!0}},[]);function N(K){var L=E;E+=1,j.current.length<L+1&&(j.current[L]=K);var V=j.current[L];function G(U){j.current[L]=typeof U=="function"?U(j.current[L]):U,$e.a.cancel(T),T=Object($e.a)(function(){D.current||g({})})}return[V,G]}return N}var zn=function(d,g){var j=r.useContext(vn);if(!j){var D=d.component,E=D===void 0?"div":D,T=Object(Ce.a)(d,["component"]);return r.createElement(E,Object(W.a)({},T,{ref:g}))}var N=j.className,K=Object(Ce.a)(j,["className"]),L=d.className,V=Object(Ce.a)(d,["className"]);return r.createElement(vn.Provider,{value:null},r.createElement(Kn,Object(W.a)({ref:g,className:Re()(N,L)},K,V)))},Wn=r.forwardRef(zn);Wn.displayName="RawItem";var st=Wn,vn=r.createContext(null),F="responsive",I="invalidate";function P(s){return"+ ".concat(s.length," ...")}function m(s,d){var g=s.prefixCls,j=g===void 0?"rc-overflow":g,D=s.data,E=D===void 0?[]:D,T=s.renderItem,N=s.renderRawItem,K=s.itemKey,L=s.itemWidth,V=L===void 0?10:L,G=s.ssr,U=s.style,re=s.className,Y=s.maxCount,X=s.renderRest,se=s.renderRawRest,z=s.suffix,q=s.component,ne=q===void 0?"div":q,Q=s.itemComponent,ae=s.onVisibleChange,k=Object(Ce.a)(s,["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"]),pe=Jn(),_=G==="full",le=pe(null),de=Object(J.a)(le,2),te=de[0],H=de[1],ie=te||0,fe=pe(new Map),me=Object(J.a)(fe,2),ye=me[0],Ie=me[1],he=pe(0),ge=Object(J.a)(he,2),De=ge[0],je=ge[1],Se=pe(0),Oe=Object(J.a)(Se,2),Ae=Oe[0],Ue=Oe[1],we=pe(0),Me=Object(J.a)(we,2),xe=Me[0],Ne=Me[1],gn=Object(r.useState)(null),Qe=Object(J.a)(gn,2),Ve=Qe[0],_e=Qe[1],dn=Object(r.useState)(null),cn=Object(J.a)(dn,2),Ee=cn[0],We=cn[1],Ge=r.useMemo(function(){return Ee===null&&_?Number.MAX_SAFE_INTEGER:Ee||0},[Ee,te]),Je=Object(r.useState)(!1),In=Object(J.a)(Je,2),Hn=In[0],Nn=In[1],Ze="".concat(j,"-item"),yn=Math.max(De,Ae),en=E.length&&Y===F,bn=Y===I,He=en||typeof Y=="number"&&E.length>Y,ke=Object(r.useMemo)(function(){var ce=E;return en?te===null&&_?ce=E:ce=E.slice(0,Math.min(E.length,ie/V)):typeof Y=="number"&&(ce=E.slice(0,Y)),ce},[E,V,te,Y,en]),On=Object(r.useMemo)(function(){return en?E.slice(Ge+1):E.slice(ke.length)},[E,ke,en,Ge]),tn=Object(r.useCallback)(function(ce,be){var Pe;return typeof K=="function"?K(ce):(Pe=K&&(ce==null?void 0:ce[K]))!==null&&Pe!==void 0?Pe:be},[K]),ze=Object(r.useCallback)(T||function(ce){return ce},[T]);function Le(ce,be){We(ce),be||(Nn(ce<E.length-1),ae==null||ae(ce))}function Yn(ce,be){H(be.clientWidth)}function Xn(ce,be){Ie(function(Pe){var Ye=new Map(Pe);return be===null?Ye.delete(ce):Ye.set(ce,be),Ye})}function ot(ce,be){Ue(be),je(Ae)}function mn(ce,be){Ne(be)}function ln(ce){return ye.get(tn(ke[ce],ce))}r.useLayoutEffect(function(){if(ie&&yn&&ke){var ce=xe,be=ke.length,Pe=be-1;if(!be){Le(0),_e(null);return}for(var Ye=0;Ye<be;Ye+=1){var qn=ln(Ye);if(qn===void 0){Le(Ye-1,!0);break}if(ce+=qn,Ye===Pe-1&&ce+ln(Pe)<=ie){Le(Pe),_e(null);break}else if(ce+yn>ie){Le(Ye-1),_e(ce-qn-xe+Ae);break}else if(Ye===Pe){Le(Pe),_e(ce-xe);break}}z&&ln(0)+xe>ie&&_e(null)}},[ie,ye,Ae,xe,tn,ke]);var Qn=Hn&&!!On.length,fn={};Ve!==null&&en&&(fn={position:"absolute",left:Ve,top:0});var rn={prefixCls:Ze,responsive:en,component:Q,invalidate:bn},Zn=N?function(ce,be){var Pe=tn(ce,be);return r.createElement(vn.Provider,{key:Pe,value:Object(oe.a)(Object(oe.a)({},rn),{},{order:be,item:ce,itemKey:Pe,registerSize:Xn,display:be<=Ge})},N(ce,be))}:function(ce,be){var Pe=tn(ce,be);return r.createElement(Kn,Object(W.a)({},rn,{order:be,key:Pe,item:ce,renderItem:ze,itemKey:Pe,registerSize:Xn,display:be<=Ge}))},Sn,kn={order:Qn?Ge:Number.MAX_SAFE_INTEGER,className:"".concat(Ze,"-rest"),registerSize:ot,display:Qn};if(se)se&&(Sn=r.createElement(vn.Provider,{value:Object(oe.a)(Object(oe.a)({},rn),kn)},se(On)));else{var nn=X||P;Sn=r.createElement(Kn,Object(W.a)({},rn,kn),typeof nn=="function"?nn(On):nn)}var Cn=r.createElement(ne,Object(W.a)({className:Re()(!bn&&j,re),style:U,ref:d},k),ke.map(Zn),He?Sn:null,z&&r.createElement(Kn,Object(W.a)({},rn,{order:Ge,className:"".concat(Ze,"-suffix"),registerSize:mn,display:!0,style:fn}),z));return en&&(Cn=r.createElement(An.default,{onResize:Yn},Cn)),Cn}var i=r.forwardRef(m);i.displayName="Overflow",i.Item=st,i.RESPONSIVE=F,i.INVALIDATE=I;var h=i,y=h,S=e("1OyB"),o=e("vuIU"),p=e("Ji7U"),l=e("LK+K"),A=e("bT9E"),w=e("YrtM"),C=r.createContext(null);function c(s,d){var g=Object(oe.a)({},s);return Object.keys(d).forEach(function(j){var D=d[j];D!==void 0&&(g[j]=D)}),g}function R(s){var d=s.children,g=s.locked,j=Object(Ce.a)(s,["children","locked"]),D=r.useContext(C),E=Object(w.a)(function(){return c(D,j)},[D,j],function(T,N){return!g&&(T[0]!==N[0]||!at()(T[1],N[1]))});return r.createElement(C.Provider,{value:E},d)}function f(s,d,g,j){var D=r.useContext(C),E=D.activeKey,T=D.onActive,N=D.onInactive,K={active:E===s};return d||(K.onMouseEnter=function(L){g==null||g({key:s,domEvent:L}),T(s)},K.onMouseLeave=function(L){j==null||j({key:s,domEvent:L}),N(s)}),K}function n(s){var d=s.item,g=Object(Ce.a)(s,["item"]);return Object.defineProperty(g,"item",{get:function(){return Object(Vn.a)(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),d}}),g}function t(s){var d=s.icon,g=s.props,j=s.children,D;return typeof d=="function"?D=r.createElement(d,Object(oe.a)({},g)):D=d,D||j||null}function a(s){var d=r.useContext(C),g=d.mode,j=d.rtl,D=d.inlineIndent;if(g!=="inline")return null;var E=s;return j?{paddingRight:E*D}:{paddingLeft:E*D}}var u=[],v=r.createContext(null);function O(){return r.useContext(v)}var M=r.createContext(u);function B(s){var d=r.useContext(M);return r.useMemo(function(){return s!==void 0?[].concat(Object(an.a)(d),[s]):d},[d,s])}var $=r.createContext(null),Ke=r.createContext(null);function Xe(s,d){return s===void 0?null:"".concat(s,"-").concat(d)}function sn(s){var d=r.useContext(Ke);return Xe(d,s)}var Tn=function(s){Object(p.a)(g,s);var d=Object(l.a)(g);function g(){return Object(S.a)(this,g),d.apply(this,arguments)}return Object(o.a)(g,[{key:"render",value:function(){var D=this.props,E=D.title,T=D.attribute,N=D.elementRef,K=Object(Ce.a)(D,["title","attribute","elementRef"]),L=Object(A.a)(K,["eventKey"]);return Object(Vn.a)(!T,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),r.createElement(y.Item,Object(W.a)({},T,{title:typeof E=="string"?E:void 0},L,{ref:N}))}}]),g}(r.Component),Un=function(d){var g,j=d.style,D=d.className,E=d.eventKey,T=d.disabled,N=d.itemIcon,K=d.children,L=d.role,V=d.onMouseEnter,G=d.onMouseLeave,U=d.onClick,re=d.onKeyDown,Y=d.onFocus,X=Object(Ce.a)(d,["style","className","eventKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"]),se=sn(E),z=r.useContext(C),q=z.prefixCls,ne=z.onItemClick,Q=z.disabled,ae=z.overflowDisabled,k=z.itemIcon,pe=z.selectedKeys,_=z.onActive,le="".concat(q,"-item"),de=r.useRef(),te=r.useRef(),H=Q||T,ie=B(E),fe=function(we){return{key:E,keyPath:ie,item:de.current,domEvent:we}},me=N||k,ye=f(E,H,V,G),Ie=ye.active,he=Object(Ce.a)(ye,["active"]),ge=pe.includes(E),De=a(ie.length),je=function(we){if(!H){var Me=fe(we);U==null||U(n(Me)),ne(Me)}},Se=function(we){if(re==null||re(we),we.which===Fe.a.ENTER){var Me=fe(we);U==null||U(n(Me)),ne(Me)}},Oe=function(we){_(E),Y==null||Y(we)},Ae={};return d.role==="option"&&(Ae["aria-selected"]=ge),r.createElement(Tn,Object(W.a)({ref:de,elementRef:te,role:L===null?"none":L||"menuitem",tabIndex:T?null:-1,"data-menu-id":ae&&se?null:se},X,he,Ae,{component:"li","aria-disabled":T,style:Object(oe.a)(Object(oe.a)({},De),j),className:Re()(le,(g={},Object(ue.a)(g,"".concat(le,"-active"),Ie),Object(ue.a)(g,"".concat(le,"-selected"),ge),Object(ue.a)(g,"".concat(le,"-disabled"),H),g),D),onClick:je,onKeyDown:Se,onFocus:Oe}),K,r.createElement(t,{props:Object(oe.a)(Object(oe.a)({},d),{},{isSelected:ge}),icon:me}))};function Fn(s){var d=s.eventKey,g=O(),j=B(d);return r.useEffect(function(){if(g)return g.registerPath(d,j),function(){g.unregisterPath(d,j)}},[j]),g?null:r.createElement(Un,s)}var Gn=Fn;function wt(s,d){return Object(jn.a)(s).map(function(g,j){if(r.isValidElement(g)){var D=g.key;return D==null&&(D="tmp_key-".concat([].concat(Object(an.a)(d),[j]).join("-"))),r.cloneElement(g,{key:D,eventKey:D})}return g})}function it(s){var d=r.useRef(s);d.current=s;var g=r.useCallback(function(){for(var j,D=arguments.length,E=new Array(D),T=0;T<D;T++)E[T]=arguments[T];return(j=d.current)===null||j===void 0?void 0:j.call.apply(j,[d].concat(E))},[]);return s?g:void 0}var Cr=function(d,g){var j=d.className,D=d.children,E=Object(Ce.a)(d,["className","children"]),T=r.useContext(C),N=T.prefixCls,K=T.mode;return r.createElement("ul",Object(W.a)({className:Re()(N,"".concat(N,"-sub"),"".concat(N,"-").concat(K==="inline"?"inline":"vertical"),j)},E,{"data-menu-list":!0,ref:g}),D)},Xt=r.forwardRef(Cr);Xt.displayName="SubMenuList";var Qt=Xt,Rr=e("uciX"),Ln={adjustX:1,adjustY:1},Zt={topLeft:{points:["bl","tl"],overflow:Ln,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Ln,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:Ln,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:Ln,offset:[4,0]}},Er={topLeft:{points:["bl","tl"],overflow:Ln,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Ln,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:Ln,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:Ln,offset:[4,0]}},fa=Zt;function kt(s,d,g){if(d)return d;if(g)return g[s]||g.other}var jr={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function Dr(s){var d=s.prefixCls,g=s.visible,j=s.children,D=s.popup,E=s.popupClassName,T=s.popupOffset,N=s.disabled,K=s.mode,L=s.onVisibleChange,V=r.useContext(C),G=V.getPopupContainer,U=V.rtl,re=V.subMenuOpenDelay,Y=V.subMenuCloseDelay,X=V.builtinPlacements,se=V.triggerSubMenuAction,z=V.forceSubMenuRender,q=V.motion,ne=V.defaultMotions,Q=r.useState(!1),ae=Object(J.a)(Q,2),k=ae[0],pe=ae[1],_=U?Object(oe.a)(Object(oe.a)({},Er),X):Object(oe.a)(Object(oe.a)({},Zt),X),le=jr[K],de=kt(K,q,ne),te=Object(oe.a)(Object(oe.a)({},de),{},{leavedClassName:"".concat(d,"-hidden"),removeOnLeave:!1,motionAppear:!0}),H=r.useRef();return r.useEffect(function(){return H.current=Object($e.a)(function(){pe(g)}),function(){$e.a.cancel(H.current)}},[g]),r.createElement(Rr.a,{prefixCls:d,popupClassName:Re()("".concat(d,"-popup"),Object(ue.a)({},"".concat(d,"-rtl"),U),E),stretch:K==="horizontal"?"minWidth":null,getPopupContainer:G,builtinPlacements:_,popupPlacement:le,popupVisible:k,popup:D,popupAlign:T&&{offset:T},action:N?[]:[se],mouseEnterDelay:re,mouseLeaveDelay:Y,onPopupVisibleChange:L,forceRender:z,popupMotion:te},j)}var Pr=e("8XRh");function Tr(s){var d=s.id,g=s.open,j=s.keyPath,D=s.children,E="inline",T=r.useContext(C),N=T.prefixCls,K=T.forceSubMenuRender,L=T.motion,V=T.defaultMotions,G=T.mode,U=r.useRef(!1);U.current=G===E;var re=r.useState(!U.current),Y=Object(J.a)(re,2),X=Y[0],se=Y[1],z=U.current?g:!1;r.useEffect(function(){U.current&&se(!1)},[G]);var q=Object(oe.a)({},kt(E,L,V));j.length>1&&(q.motionAppear=!1);var ne=q.onVisibleChanged;return q.onVisibleChanged=function(Q){return!U.current&&!Q&&se(!0),ne==null?void 0:ne(Q)},X?null:r.createElement(R,{mode:E,locked:!U.current},r.createElement(Pr.default,Object(W.a)({visible:z},q,{forceRender:K,removeOnLeave:!1,leavedClassName:"".concat(N,"-hidden")}),function(Q){var ae=Q.className,k=Q.style;return r.createElement(Qt,{id:d,className:ae,style:k},D)}))}var Fr=function(d){var g,j=d.style,D=d.className,E=d.title,T=d.eventKey,N=d.disabled,K=d.internalPopupClose,L=d.children,V=d.itemIcon,G=d.expandIcon,U=d.popupClassName,re=d.popupOffset,Y=d.onClick,X=d.onMouseEnter,se=d.onMouseLeave,z=d.onTitleClick,q=d.onTitleMouseEnter,ne=d.onTitleMouseLeave,Q=Object(Ce.a)(d,["style","className","title","eventKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"]),ae=sn(T),k=r.useContext(C),pe=k.prefixCls,_=k.mode,le=k.openKeys,de=k.disabled,te=k.overflowDisabled,H=k.activeKey,ie=k.selectedKeys,fe=k.itemIcon,me=k.expandIcon,ye=k.onItemClick,Ie=k.onOpenChange,he=k.onActive,ge=r.useContext($),De=ge.isSubPathKey,je=B(),Se="".concat(pe,"-submenu"),Oe=de||N,Ae=r.useRef(),Ue=r.useRef(),we=V||fe,Me=G||me,xe=le.includes(T),Ne=!te&&xe,gn=De(ie,T),Qe=f(T,Oe,q,ne),Ve=Qe.active,_e=Object(Ce.a)(Qe,["active"]),dn=r.useState(!1),cn=Object(J.a)(dn,2),Ee=cn[0],We=cn[1],Ge=function(Le){Oe||We(Le)},Je=function(Le){Ge(!0),X==null||X({key:T,domEvent:Le})},In=function(Le){Ge(!1),se==null||se({key:T,domEvent:Le})},Hn=r.useMemo(function(){return Ve||(_!=="inline"?Ee||De([H],T):!1)},[_,Ve,H,Ee,T,De]),Nn=a(je.length),Ze=function(Le){Oe||(z==null||z({key:T,domEvent:Le}),_==="inline"&&Ie(T,!xe))},yn=it(function(ze){Y==null||Y(n(ze)),ye(ze)}),en=function(Le){_!=="inline"&&Ie(T,Le)},bn=function(){he(T)},He=ae&&"".concat(ae,"-popup"),ke=r.createElement("div",Object(W.a)({role:"menuitem",style:Nn,className:"".concat(Se,"-title"),tabIndex:Oe?null:-1,ref:Ae,title:typeof E=="string"?E:null,"data-menu-id":te&&ae?null:ae,"aria-expanded":Ne,"aria-haspopup":!0,"aria-controls":He,"aria-disabled":Oe,onClick:Ze,onFocus:bn},_e),E,r.createElement(t,{icon:_!=="horizontal"?Me:null,props:Object(oe.a)(Object(oe.a)({},d),{},{isOpen:Ne,isSubMenu:!0})},r.createElement("i",{className:"".concat(Se,"-arrow")}))),On=r.useRef(_);if(_!=="inline"&&(On.current=je.length>1?"vertical":_),!te){var tn=On.current;ke=r.createElement(Dr,{mode:tn,prefixCls:Se,visible:!K&&Ne&&_!=="inline",popupClassName:U,popupOffset:re,popup:r.createElement(R,{mode:tn},r.createElement(Qt,{id:He,ref:Ue},L)),disabled:Oe,onVisibleChange:en},ke)}return r.createElement(R,{onItemClick:yn,mode:_==="horizontal"?"vertical":_,itemIcon:we,expandIcon:Me},r.createElement(y.Item,Object(W.a)({role:"none"},Q,{component:"li",style:j,className:Re()(Se,"".concat(Se,"-").concat(_),D,(g={},Object(ue.a)(g,"".concat(Se,"-open"),Ne),Object(ue.a)(g,"".concat(Se,"-active"),Hn),Object(ue.a)(g,"".concat(Se,"-selected"),gn),Object(ue.a)(g,"".concat(Se,"-disabled"),Oe),g)),onMouseEnter:Je,onMouseLeave:In}),ke,!te&&r.createElement(Tr,{id:He,open:Ne,keyPath:je},L)))};function qt(s){var d=s.eventKey,g=s.children,j=B(d),D=wt(g,j),E=O();r.useEffect(function(){if(E)return E.registerPath(d,j),function(){E.unregisterPath(d,j)}},[j]);var T;return E?T=D:T=r.createElement(Fr,s,D),r.createElement(M.Provider,{value:j},T)}var Ir=e("x/xZ");function _t(s){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Object(Ir.a)(s)){var g=s.nodeName.toLowerCase(),j=["input","select","textarea","button"].includes(g)||s.isContentEditable||g==="a"&&!!s.getAttribute("href"),D=s.getAttribute("tabindex"),E=Number(D),T=null;return D&&!Number.isNaN(E)?T=E:j&&T===null&&(T=0),j&&s.disabled&&(T=null),T!==null&&(T>=0||d&&T<0)}return!1}function er(s){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,g=Object(an.a)(s.querySelectorAll("*")).filter(function(j){return _t(j,d)});return _t(s,d)&&g.unshift(s),g}var bt=null;function pa(){bt=document.activeElement}function ha(){bt=null}function va(){if(bt)try{bt.focus()}catch(s){}}function ga(s,d){if(d.keyCode===9){var g=er(s),j=g[d.shiftKey?0:g.length-1],D=j===document.activeElement||s===document.activeElement;if(D){var E=g[d.shiftKey?g.length-1:0];E.focus(),d.preventDefault()}}}var Mt=Fe.a.LEFT,Bt=Fe.a.RIGHT,Kt=Fe.a.UP,Ot=Fe.a.DOWN,St=Fe.a.ENTER,nr=Fe.a.ESC,tr=[Kt,Ot,Mt,Bt];function Nr(s,d,g,j){var D,E,T,N,K="prev",L="next",V="children",G="parent";if(s==="inline"&&j===St)return{inlineTrigger:!0};var U=(D={},Object(ue.a)(D,Kt,K),Object(ue.a)(D,Ot,L),D),re=(E={},Object(ue.a)(E,Mt,g?L:K),Object(ue.a)(E,Bt,g?K:L),Object(ue.a)(E,Ot,V),Object(ue.a)(E,St,V),E),Y=(T={},Object(ue.a)(T,Kt,K),Object(ue.a)(T,Ot,L),Object(ue.a)(T,St,V),Object(ue.a)(T,nr,G),Object(ue.a)(T,Mt,g?V:G),Object(ue.a)(T,Bt,g?G:V),T),X={inline:U,horizontal:re,vertical:Y,inlineSub:U,horizontalSub:Y,verticalSub:Y},se=(N=X["".concat(s).concat(d?"":"Sub")])===null||N===void 0?void 0:N[j];switch(se){case K:return{offset:-1,sibling:!0};case L:return{offset:1,sibling:!0};case G:return{offset:-1,sibling:!1};case V:return{offset:1,sibling:!1};default:return null}}function Ar(s){for(var d=s;d;){if(d.getAttribute("data-menu-list"))return d;d=d.parentElement}return null}function wr(s,d){for(var g=s||document.activeElement;g;){if(d.has(g))return g;g=g.parentElement}return null}function Mr(s,d){var g=er(s,!0);return g.filter(function(j){return d.has(j)})}function rr(s,d,g){var j=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!s)return null;var D=Mr(s,d),E=D.length,T=D.findIndex(function(N){return g===N});return j<0?T===-1?T=E-1:T-=1:j>0&&(T+=1),T=(T+E)%E,D[T]}function Br(s,d,g,j,D,E,T,N,K,L){var V=r.useRef(),G=r.useRef();G.current=d;var U=function(){$e.a.cancel(V.current)};return r.useEffect(function(){return function(){U()}},[]),function(re){var Y=re.which;if([].concat(tr,[St,nr]).includes(Y)){var X,se,z,q=function(){X=new Set,se=new Map,z=new Map;var fe=E();return fe.forEach(function(me){var ye=document.querySelector("[data-menu-id='".concat(Xe(j,me),"']"));ye&&(X.add(ye),z.set(ye,me),se.set(me,ye))}),X};q();var ne=se.get(d),Q=wr(ne,X),ae=z.get(Q),k=Nr(s,T(ae,!0).length===1,g,Y);if(!k)return;tr.includes(Y)&&re.preventDefault();var pe=function(fe){if(fe){var me=fe,ye=fe.querySelector("a");(ye==null?void 0:ye.getAttribute("href"))&&(me=ye);var Ie=z.get(fe);N(Ie),U(),V.current=Object($e.a)(function(){G.current===Ie&&me.focus()})}};if(k.sibling||!Q){var _;!Q||s==="inline"?_=D.current:_=Ar(Q);var le=rr(_,X,Q,k.offset);pe(le)}else if(k.inlineTrigger)K(ae);else if(k.offset>0)K(ae,!0),U(),V.current=Object($e.a)(function(){q();var ie=Q.getAttribute("aria-controls"),fe=document.getElementById(ie),me=rr(fe,X);pe(me)},5);else if(k.offset<0){var de=T(ae,!0),te=de[de.length-2],H=se.get(te);K(te,!1),pe(H)}}L==null||L(re)}}var Kr=Math.random().toFixed(5).toString().slice(2),ar=0;function Wr(s){var d=Object(pn.a)(s,{value:s}),g=Object(J.a)(d,2),j=g[0],D=g[1];return r.useEffect(function(){ar+=1;var E="".concat(Kr,"-").concat(ar);D("rc-menu-uuid-".concat(E))},[]),j}var ya=e("p8sG");function Lr(s){Promise.resolve().then(s)}var Wt="__RC_UTIL_PATH_SPLIT__",sr=function(d){return d.join(Wt)},xr=function(d){return d.split(Wt)},Lt="rc-menu-more";function $r(){var s=r.useState({}),d=Object(J.a)(s,2),g=d[1],j=Object(r.useRef)(new Map),D=Object(r.useRef)(new Map),E=r.useState([]),T=Object(J.a)(E,2),N=T[0],K=T[1],L=Object(r.useRef)(0),V=Object(r.useCallback)(function(z,q){var ne=sr(q);D.current.set(ne,z),j.current.set(z,ne),L.current+=1;var Q=L.current;Lr(function(){Q===L.current&&g({})})},[]),G=Object(r.useCallback)(function(z,q){var ne=sr(q);D.current.delete(ne),j.current.delete(z)},[]),U=Object(r.useCallback)(function(z){K(z)},[]),re=Object(r.useCallback)(function(z,q){var ne=j.current.get(z)||"",Q=xr(ne);return q&&N.includes(Q[0])&&Q.unshift(Lt),Q},[N]),Y=Object(r.useCallback)(function(z,q){return z.some(function(ne){var Q=re(ne,!0);return Q.includes(q)})},[re]),X=function(){var q=Object(an.a)(j.current.keys());return N.length&&q.push(Lt),q},se=Object(r.useCallback)(function(z){var q="".concat(j.current.get(z)).concat(Wt),ne=new Set;return Object(an.a)(D.current.keys()).forEach(function(Q){Q.startsWith(q)&&ne.add(D.current.get(Q))}),ne},[]);return{registerPath:V,unregisterPath:G,refreshOverflowKeys:U,isSubPathKey:Y,getKeyPath:re,getKeys:X,getSubPathKeys:se}}var Ct=[],Vr=function(d){var g,j,D=d.prefixCls,E=D===void 0?"rc-menu":D,T=d.style,N=d.className,K=d.tabIndex,L=K===void 0?0:K,V=d.children,G=d.direction,U=d.id,re=d.mode,Y=re===void 0?"vertical":re,X=d.inlineCollapsed,se=d.disabled,z=d.disabledOverflow,q=d.subMenuOpenDelay,ne=q===void 0?.1:q,Q=d.subMenuCloseDelay,ae=Q===void 0?.1:Q,k=d.forceSubMenuRender,pe=d.defaultOpenKeys,_=d.openKeys,le=d.activeKey,de=d.defaultActiveFirst,te=d.selectable,H=te===void 0?!0:te,ie=d.multiple,fe=ie===void 0?!1:ie,me=d.defaultSelectedKeys,ye=d.selectedKeys,Ie=d.onSelect,he=d.onDeselect,ge=d.inlineIndent,De=ge===void 0?24:ge,je=d.motion,Se=d.defaultMotions,Oe=d.triggerSubMenuAction,Ae=Oe===void 0?"hover":Oe,Ue=d.builtinPlacements,we=d.itemIcon,Me=d.expandIcon,xe=d.overflowedIndicator,Ne=xe===void 0?"...":xe,gn=d.getPopupContainer,Qe=d.onClick,Ve=d.onOpenChange,_e=d.onKeyDown,dn=d.openAnimation,cn=d.openTransitionName,Ee=Object(Ce.a)(d,["prefixCls","style","className","tabIndex","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName"]),We=wt(V,Ct),Ge=r.useState(!1),Je=Object(J.a)(Ge,2),In=Je[0],Hn=Je[1],Nn=r.useRef(),Ze=Wr(U),yn=G==="rtl",en=r.useMemo(function(){return Y==="inline"&&X?["vertical",X]:[Y,!1]},[Y,X]),bn=Object(J.a)(en,2),He=bn[0],ke=bn[1],On=r.useState(0),tn=Object(J.a)(On,2),ze=tn[0],Le=tn[1],Yn=ze>=We.length-1||He!=="horizontal"||z,Xn=Object(pn.a)(pe,{value:_,postState:function(Z){return Z||Ct}}),ot=Object(J.a)(Xn,2),mn=ot[0],ln=ot[1],Qn=r.useState(mn),fn=Object(J.a)(Qn,2),rn=fn[0],Zn=fn[1],Sn=He==="inline",kn=r.useRef(!1);r.useEffect(function(){Sn&&Zn(mn)},[mn]),r.useEffect(function(){if(!kn.current){kn.current=!0;return}if(Sn)ln(rn);else{var ee=[];ln(ee),Ve==null||Ve(ee)}},[Sn]);var nn=$r(),Cn=nn.registerPath,ce=nn.unregisterPath,be=nn.refreshOverflowKeys,Pe=nn.isSubPathKey,Ye=nn.getKeyPath,qn=nn.getKeys,Et=nn.getSubPathKeys,Jt=r.useMemo(function(){return{registerPath:Cn,unregisterPath:ce}},[Cn,ce]),zt=r.useMemo(function(){return{isSubPathKey:Pe}},[Pe]);r.useEffect(function(){be(Yn?Ct:We.slice(ze+1).map(function(ee){return ee.key}))},[ze,Yn]);var Ut=Object(pn.a)(le||de&&((g=We[0])===null||g===void 0?void 0:g.key),{value:le}),lt=Object(J.a)(Ut,2),jt=lt[0],pt=lt[1],Dt=it(function(ee){pt(ee)}),Gt=it(function(){pt(void 0)}),Pt=Object(pn.a)(me||[],{value:ye,postState:function(Z){return Array.isArray(Z)?Z:Z==null?Ct:[Z]}}),Tt=Object(J.a)(Pt,2),ut=Tt[0],Rn=Tt[1],Ft=function(Z){if(!!H){var ve=Z.key,Be=ut.includes(ve),qe;Be?qe=ut.filter(function(et){return et!==ve}):fe?qe=[].concat(Object(an.a)(ut),[ve]):qe=[ve],Rn(qe);var xn=Object(oe.a)(Object(oe.a)({},Z),{},{selectedKeys:qe});Be?he==null||he(xn):Ie==null||Ie(xn)}},It=it(function(ee){Qe==null||Qe(n(ee)),Ft(ee)}),ht=it(function(ee,Z){var ve=mn.filter(function(qe){return qe!==ee});if(Z)ve.push(ee);else if(He!=="inline"){var Be=Et(ee);ve=ve.filter(function(qe){return!Be.has(qe)})}at()(mn,ve)||(ln(ve),Ve==null||Ve(ve))}),_n=it(gn),vt=function(Z,ve){var Be=ve!=null?ve:!mn.includes(Z);ht(Z,Be)},gt=Br(He,jt,yn,Ze,Nn,qn,Ye,pt,vt,_e);r.useEffect(function(){Hn(!0)},[]);var Nt=He!=="horizontal"||z?We:We.map(function(ee,Z){return r.createElement(R,{key:ee.key,overflowDisabled:Z>ze},ee)}),At=r.createElement(y,Object(W.a)({id:U,ref:Nn,prefixCls:"".concat(E,"-overflow"),component:"ul",itemComponent:Gn,className:Re()(E,"".concat(E,"-root"),"".concat(E,"-").concat(He),N,(j={},Object(ue.a)(j,"".concat(E,"-inline-collapsed"),ke),Object(ue.a)(j,"".concat(E,"-rtl"),yn),j)),dir:G,style:T,role:"menu",tabIndex:L,data:Nt,renderRawItem:function(Z){return Z},renderRawRest:function(Z){var ve=Z.length,Be=ve?We.slice(-ve):null;return r.createElement(qt,{eventKey:Lt,title:Ne,disabled:Yn,internalPopupClose:ve===0},Be)},maxCount:He!=="horizontal"||z?y.INVALIDATE:y.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(Z){Le(Z)},onKeyDown:gt},Ee));return r.createElement(Ke.Provider,{value:Ze},r.createElement(R,{prefixCls:E,mode:He,openKeys:mn,rtl:yn,disabled:se,motion:In?je:null,defaultMotions:In?Se:null,activeKey:jt,onActive:Dt,onInactive:Gt,selectedKeys:ut,inlineIndent:De,subMenuOpenDelay:ne,subMenuCloseDelay:ae,forceSubMenuRender:k,builtinPlacements:Ue,triggerSubMenuAction:Ae,getPopupContainer:_n,itemIcon:we,expandIcon:Me,onItemClick:It,onOpenChange:ht},r.createElement($.Provider,{value:zt},At),r.createElement(v.Provider,{value:Jt},We)))},Jr=Vr,zr=function(d){var g=d.className,j=d.title,D=d.eventKey,E=d.children,T=Object(Ce.a)(d,["className","title","eventKey","children"]),N=r.useContext(C),K=N.prefixCls,L="".concat(K,"-item-group");return r.createElement("li",Object(W.a)({},T,{onClick:function(G){return G.stopPropagation()},className:Re()(L,g)}),r.createElement("div",{className:"".concat(L,"-title"),title:typeof j=="string"?j:void 0},j),r.createElement("ul",{className:"".concat(L,"-list")},E))};function Ur(s){var d=s.children,g=Object(Ce.a)(s,["children"]),j=B(g.eventKey),D=wt(d,j),E=O();return E?D:r.createElement(zr,g,D)}function Gr(s){var d=s.className,g=s.style,j=r.useContext(C),D=j.prefixCls,E=O();return E?null:r.createElement("li",{className:Re()("".concat(D,"-item-divider"),d),style:g})}var ft=Jr;ft.Item=Gn,ft.SubMenu=qt,ft.ItemGroup=Ur,ft.Divider=Gr;var Hr=ft,Yr=e("eDIo");function Xr(s,d){var g=s.prefixCls,j=s.editable,D=s.locale,E=s.style;return!j||j.showAdd===!1?null:r.createElement("button",{ref:d,type:"button",className:"".concat(g,"-nav-add"),style:E,"aria-label":(D==null?void 0:D.addAriaLabel)||"Add tab",onClick:function(N){j.onEdit("add",{event:N})}},j.addIcon||"+")}var ir=r.forwardRef(Xr);function Qr(s,d){var g=s.prefixCls,j=s.id,D=s.tabs,E=s.locale,T=s.mobile,N=s.moreIcon,K=N===void 0?"More":N,L=s.moreTransitionName,V=s.style,G=s.className,U=s.editable,re=s.tabBarGutter,Y=s.rtl,X=s.onTabClick,se=Object(r.useState)(!1),z=Object(J.a)(se,2),q=z[0],ne=z[1],Q=Object(r.useState)(null),ae=Object(J.a)(Q,2),k=ae[0],pe=ae[1],_="".concat(j,"-more-popup"),le="".concat(g,"-dropdown"),de=k!==null?"".concat(_,"-").concat(k):null,te=E==null?void 0:E.dropdownAriaLabel,H=r.createElement(Hr,{onClick:function(ge){var De=ge.key,je=ge.domEvent;X(De,je),ne(!1)},id:_,tabIndex:-1,role:"listbox","aria-activedescendant":de,selectedKeys:[k],"aria-label":te!==void 0?te:"expanded dropdown"},D.map(function(he){return r.createElement(Gn,{key:he.key,id:"".concat(_,"-").concat(he.key),role:"option","aria-controls":j&&"".concat(j,"-panel-").concat(he.key),disabled:he.disabled},he.tab)}));function ie(he){for(var ge=D.filter(function(Ae){return!Ae.disabled}),De=ge.findIndex(function(Ae){return Ae.key===k})||0,je=ge.length,Se=0;Se<je;Se+=1){De=(De+he+je)%je;var Oe=ge[De];if(!Oe.disabled){pe(Oe.key);return}}}function fe(he){var ge=he.which;if(!q){[Fe.a.DOWN,Fe.a.SPACE,Fe.a.ENTER].includes(ge)&&(ne(!0),he.preventDefault());return}switch(ge){case Fe.a.UP:ie(-1),he.preventDefault();break;case Fe.a.DOWN:ie(1),he.preventDefault();break;case Fe.a.ESC:ne(!1);break;case Fe.a.SPACE:case Fe.a.ENTER:k!==null&&X(k,he);break}}Object(r.useEffect)(function(){var he=document.getElementById(de);he&&he.scrollIntoView&&he.scrollIntoView(!1)},[k]),Object(r.useEffect)(function(){q||pe(null)},[q]);var me=Object(ue.a)({},Y?"marginLeft":"marginRight",re);D.length||(me.visibility="hidden",me.order=1);var ye=Re()(Object(ue.a)({},"".concat(le,"-rtl"),Y)),Ie=T?null:r.createElement(Yr.default,{prefixCls:le,overlay:H,trigger:["hover"],visible:q,transitionName:L,onVisibleChange:ne,overlayClassName:ye,mouseEnterDelay:.1,mouseLeaveDelay:.1},r.createElement("button",{type:"button",className:"".concat(g,"-nav-more"),style:me,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":_,id:"".concat(j,"-more"),"aria-expanded":q,onKeyDown:fe},K));return r.createElement("div",{className:Re()("".concat(g,"-nav-operations"),G),style:V,ref:d},Ie,r.createElement(ir,{prefixCls:g,locale:E,editable:U}))}var Zr=r.forwardRef(Qr),xt=Object(r.createContext)(null),kr=.1,or=.01,Rt=20,lr=Math.pow(.995,Rt);function qr(s,d){var g=Object(r.useState)(),j=Object(J.a)(g,2),D=j[0],E=j[1],T=Object(r.useState)(0),N=Object(J.a)(T,2),K=N[0],L=N[1],V=Object(r.useState)(0),G=Object(J.a)(V,2),U=G[0],re=G[1],Y=Object(r.useState)(),X=Object(J.a)(Y,2),se=X[0],z=X[1],q=Object(r.useRef)();function ne(le){var de=le.touches[0],te=de.screenX,H=de.screenY;E({x:te,y:H}),window.clearInterval(q.current)}function Q(le){if(!!D){le.preventDefault();var de=le.touches[0],te=de.screenX,H=de.screenY;E({x:te,y:H});var ie=te-D.x,fe=H-D.y;d(ie,fe);var me=Date.now();L(me),re(me-K),z({x:ie,y:fe})}}function ae(){if(!!D&&(E(null),z(null),se)){var le=se.x/U,de=se.y/U,te=Math.abs(le),H=Math.abs(de);if(Math.max(te,H)<kr)return;var ie=le,fe=de;q.current=window.setInterval(function(){if(Math.abs(ie)<or&&Math.abs(fe)<or){window.clearInterval(q.current);return}ie*=lr,fe*=lr,d(ie*Rt,fe*Rt)},Rt)}}var k=Object(r.useRef)();function pe(le){var de=le.deltaX,te=le.deltaY,H=0,ie=Math.abs(de),fe=Math.abs(te);ie===fe?H=k.current==="x"?de:te:ie>fe?(H=de,k.current="x"):(H=te,k.current="y"),d(-H,-H)&&le.preventDefault()}var _=Object(r.useRef)(null);_.current={onTouchStart:ne,onTouchMove:Q,onTouchEnd:ae,onWheel:pe},r.useEffect(function(){function le(ie){_.current.onTouchStart(ie)}function de(ie){_.current.onTouchMove(ie)}function te(ie){_.current.onTouchEnd(ie)}function H(ie){_.current.onWheel(ie)}return document.addEventListener("touchmove",de,{passive:!1}),document.addEventListener("touchend",te,{passive:!1}),s.current.addEventListener("touchstart",le,{passive:!1}),s.current.addEventListener("wheel",H),function(){document.removeEventListener("touchmove",de),document.removeEventListener("touchend",te)}},[])}function _r(){var s=Object(r.useRef)(new Map);function d(j){return s.current.has(j)||s.current.set(j,r.createRef()),s.current.get(j)}function g(j){s.current.delete(j)}return[d,g]}function ur(s,d){var g=r.useRef(s),j=r.useState({}),D=Object(J.a)(j,2),E=D[1];function T(N){var K=typeof N=="function"?N(g.current):N;K!==g.current&&d(K,g.current),g.current=K,E({})}return[g.current,T]}var dr=function(d){var g=d.position,j=d.prefixCls,D=d.extra;if(!D)return null;var E,T=D;return g==="right"&&(E=T.right||!T.left&&T||null),g==="left"&&(E=T.left||null),E?r.createElement("div",{className:"".concat(j,"-extra-content")},E):null};function ea(s,d){var g,j=r.useContext(xt),D=j.prefixCls,E=j.tabs,T=s.className,N=s.style,K=s.id,L=s.animated,V=s.activeKey,G=s.rtl,U=s.extra,re=s.editable,Y=s.locale,X=s.tabPosition,se=s.tabBarGutter,z=s.children,q=s.onTabClick,ne=s.onTabScroll,Q=Object(r.useRef)(),ae=Object(r.useRef)(),k=Object(r.useRef)(),pe=Object(r.useRef)(),_=_r(),le=Object(J.a)(_,2),de=le[0],te=le[1],H=X==="top"||X==="bottom",ie=ur(0,function(ee,Z){H&&ne&&ne({direction:ee>Z?"left":"right"})}),fe=Object(J.a)(ie,2),me=fe[0],ye=fe[1],Ie=ur(0,function(ee,Z){!H&&ne&&ne({direction:ee>Z?"top":"bottom"})}),he=Object(J.a)(Ie,2),ge=he[0],De=he[1],je=Object(r.useState)(0),Se=Object(J.a)(je,2),Oe=Se[0],Ae=Se[1],Ue=Object(r.useState)(0),we=Object(J.a)(Ue,2),Me=we[0],xe=we[1],Ne=Object(r.useState)(0),gn=Object(J.a)(Ne,2),Qe=gn[0],Ve=gn[1],_e=Object(r.useState)(0),dn=Object(J.a)(_e,2),cn=dn[0],Ee=dn[1],We=Object(r.useState)(null),Ge=Object(J.a)(We,2),Je=Ge[0],In=Ge[1],Hn=Object(r.useState)(null),Nn=Object(J.a)(Hn,2),Ze=Nn[0],yn=Nn[1],en=Object(r.useState)(0),bn=Object(J.a)(en,2),He=bn[0],ke=bn[1],On=Object(r.useState)(0),tn=Object(J.a)(On,2),ze=tn[0],Le=tn[1],Yn=hn(new Map),Xn=Object(J.a)(Yn,2),ot=Xn[0],mn=Xn[1],ln=dt(E,ot,Oe),Qn="".concat(D,"-nav-operations-hidden"),fn=0,rn=0;H?G?(fn=0,rn=Math.max(0,Oe-Je)):(fn=Math.min(0,Je-Oe),rn=0):(fn=Math.min(0,Ze-Me),rn=0);function Zn(ee){return ee<fn?fn:ee>rn?rn:ee}var Sn=Object(r.useRef)(),kn=Object(r.useState)(),nn=Object(J.a)(kn,2),Cn=nn[0],ce=nn[1];function be(){ce(Date.now())}function Pe(){window.clearTimeout(Sn.current)}qr(Q,function(ee,Z){function ve(Be,qe){Be(function(xn){var et=Zn(xn+qe);return et})}if(H){if(Je>=Oe)return!1;ve(ye,ee)}else{if(Ze>=Me)return!1;ve(De,Z)}return Pe(),be(),!0}),Object(r.useEffect)(function(){return Pe(),Cn&&(Sn.current=window.setTimeout(function(){ce(0)},100)),Pe},[Cn]);function Ye(){var ee=arguments.length>0&&arguments[0]!==void 0?arguments[0]:V,Z=ln.get(ee)||{width:0,height:0,left:0,right:0,top:0};if(H){var ve=me;G?Z.right<me?ve=Z.right:Z.right+Z.width>me+Je&&(ve=Z.right+Z.width-Je):Z.left<-me?ve=-Z.left:Z.left+Z.width>-me+Je&&(ve=-(Z.left+Z.width-Je)),De(0),ye(Zn(ve))}else{var Be=ge;Z.top<-ge?Be=-Z.top:Z.top+Z.height>-ge+Ze&&(Be=-(Z.top+Z.height-Ze)),ye(0),De(Zn(Be))}}var qn=ct(ln,{width:Je,height:Ze,left:me,top:ge},{width:Qe,height:cn},{width:He,height:ze},Object(oe.a)(Object(oe.a)({},s),{},{tabs:E})),Et=Object(J.a)(qn,2),Jt=Et[0],zt=Et[1],Ut=E.map(function(ee){var Z=ee.key;return r.createElement(wn,{id:K,prefixCls:D,key:Z,rtl:G,tab:ee,closable:ee.closable,editable:re,active:Z===V,tabPosition:X,tabBarGutter:se,renderWrapper:z,removeAriaLabel:Y==null?void 0:Y.removeAriaLabel,ref:de(Z),onClick:function(Be){q(Z,Be)},onRemove:function(){te(Z)},onFocus:function(){Ye(Z),be(),G||(Q.current.scrollLeft=0),Q.current.scrollTop=0}})}),lt=Pn(function(){var ee,Z,ve,Be,qe,xn,et,Ht,Yt,la=((ee=Q.current)===null||ee===void 0?void 0:ee.offsetWidth)||0,ua=((Z=Q.current)===null||Z===void 0?void 0:Z.offsetHeight)||0,hr=((ve=pe.current)===null||ve===void 0?void 0:ve.offsetWidth)||0,vr=((Be=pe.current)===null||Be===void 0?void 0:Be.offsetHeight)||0,da=((qe=k.current)===null||qe===void 0?void 0:qe.offsetWidth)||0,ca=((xn=k.current)===null||xn===void 0?void 0:xn.offsetHeight)||0;In(la),yn(ua),ke(hr),Le(vr);var gr=(((et=ae.current)===null||et===void 0?void 0:et.offsetWidth)||0)-hr,yr=(((Ht=ae.current)===null||Ht===void 0?void 0:Ht.offsetHeight)||0)-vr;Ae(gr),xe(yr);var br=(Yt=k.current)===null||Yt===void 0?void 0:Yt.className.includes(Qn);Ve(gr-(br?0:da)),Ee(yr-(br?0:ca)),mn(function(){var Or=new Map;return E.forEach(function(ma){var Sr=ma.key,yt=de(Sr).current;yt&&Or.set(Sr,{width:yt.offsetWidth,height:yt.offsetHeight,left:yt.offsetLeft,top:yt.offsetTop})}),Or})}),jt=E.slice(0,Jt),pt=E.slice(zt+1),Dt=[].concat(Object(an.a)(jt),Object(an.a)(pt)),Gt=Object(r.useState)(),Pt=Object(J.a)(Gt,2),Tt=Pt[0],ut=Pt[1],Rn=ln.get(V),Ft=Object(r.useRef)();function It(){$e.a.cancel(Ft.current)}Object(r.useEffect)(function(){var ee={};return Rn&&(H?(G?ee.right=Rn.right:ee.left=Rn.left,ee.width=Rn.width):(ee.top=Rn.top,ee.height=Rn.height)),It(),Ft.current=Object($e.a)(function(){ut(ee)}),It},[Rn,H,G]),Object(r.useEffect)(function(){Ye()},[V,Rn,ln,H]),Object(r.useEffect)(function(){lt()},[G,se,V,E.map(function(ee){return ee.key}).join("_")]);var ht=!!Dt.length,_n="".concat(D,"-nav-wrap"),vt,gt,Nt,At;return H?G?(gt=me>0,vt=me+Je<Oe):(vt=me<0,gt=-me+Je<Oe):(Nt=ge<0,At=-ge+Ze<Me),r.createElement("div",{ref:d,role:"tablist",className:Re()("".concat(D,"-nav"),T),style:N,onKeyDown:function(){be()}},r.createElement(dr,{position:"left",extra:U,prefixCls:D}),r.createElement(An.default,{onResize:lt},r.createElement("div",{className:Re()(_n,(g={},Object(ue.a)(g,"".concat(_n,"-ping-left"),vt),Object(ue.a)(g,"".concat(_n,"-ping-right"),gt),Object(ue.a)(g,"".concat(_n,"-ping-top"),Nt),Object(ue.a)(g,"".concat(_n,"-ping-bottom"),At),g)),ref:Q},r.createElement(An.default,{onResize:lt},r.createElement("div",{ref:ae,className:"".concat(D,"-nav-list"),style:{transform:"translate(".concat(me,"px, ").concat(ge,"px)"),transition:Cn?"none":void 0}},Ut,r.createElement(ir,{ref:pe,prefixCls:D,locale:Y,editable:re,style:{visibility:ht?"hidden":null}}),r.createElement("div",{className:Re()("".concat(D,"-ink-bar"),Object(ue.a)({},"".concat(D,"-ink-bar-animated"),L.inkBar)),style:Tt}))))),r.createElement(Zr,Object(W.a)({},s,{ref:k,prefixCls:D,tabs:Dt,className:!ht&&Qn})),r.createElement(dr,{position:"right",extra:U,prefixCls:D}))}var cr=r.forwardRef(ea);function na(s){var d=s.id,g=s.activeKey,j=s.animated,D=s.tabPosition,E=s.rtl,T=s.destroyInactiveTabPane,N=r.useContext(xt),K=N.prefixCls,L=N.tabs,V=j.tabPane,G=L.findIndex(function(U){return U.key===g});return r.createElement("div",{className:Re()("".concat(K,"-content-holder"))},r.createElement("div",{className:Re()("".concat(K,"-content"),"".concat(K,"-content-").concat(D),Object(ue.a)({},"".concat(K,"-content-animated"),V)),style:G&&V?Object(ue.a)({},E?"marginRight":"marginLeft","-".concat(G,"00%")):null},L.map(function(U){return r.cloneElement(U.node,{key:U.key,prefixCls:K,tabKey:U.key,id:d,animated:V,active:U.key===g,destroyInactiveTabPane:T})})))}function mr(s){var d=s.prefixCls,g=s.forceRender,j=s.className,D=s.style,E=s.id,T=s.active,N=s.animated,K=s.destroyInactiveTabPane,L=s.tabKey,V=s.children,G=r.useState(g),U=Object(J.a)(G,2),re=U[0],Y=U[1];r.useEffect(function(){T?Y(!0):K&&Y(!1)},[T,K]);var X={};return T||(N?(X.visibility="hidden",X.height=0,X.overflowY="hidden"):X.display="none"),r.createElement("div",{id:E&&"".concat(E,"-panel-").concat(L),role:"tabpanel",tabIndex:T?0:-1,"aria-labelledby":E&&"".concat(E,"-tab-").concat(L),"aria-hidden":!T,style:Object(oe.a)(Object(oe.a)({},X),D),className:Re()("".concat(d,"-tabpane"),T&&"".concat(d,"-tabpane-active"),j)},(T||re||g)&&V)}var fr=0;function ta(s){return Object(jn.a)(s).map(function(d){if(r.isValidElement(d)){var g=d.key!==void 0?String(d.key):void 0;return Object(oe.a)(Object(oe.a)({key:g},d.props),{},{node:d})}return null}).filter(function(d){return d})}function ra(s,d){var g,j=s.id,D=s.prefixCls,E=D===void 0?"rc-tabs":D,T=s.className,N=s.children,K=s.direction,L=s.activeKey,V=s.defaultActiveKey,G=s.editable,U=s.animated,re=U===void 0?{inkBar:!0,tabPane:!1}:U,Y=s.tabPosition,X=Y===void 0?"top":Y,se=s.tabBarGutter,z=s.tabBarStyle,q=s.tabBarExtraContent,ne=s.locale,Q=s.moreIcon,ae=s.moreTransitionName,k=s.destroyInactiveTabPane,pe=s.renderTabBar,_=s.onChange,le=s.onTabClick,de=s.onTabScroll,te=Object(Ce.a)(s,["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"]),H=ta(N),ie=K==="rtl",fe;re===!1?fe={inkBar:!1,tabPane:!1}:re===!0?fe={inkBar:!0,tabPane:!0}:fe=Object(oe.a)({inkBar:!0,tabPane:!1},Object(Te.a)(re)==="object"?re:{});var me=Object(r.useState)(!1),ye=Object(J.a)(me,2),Ie=ye[0],he=ye[1];Object(r.useEffect)(function(){he(Object(Dn.a)())},[]);var ge=Object(pn.a)(function(){var Ee;return(Ee=H[0])===null||Ee===void 0?void 0:Ee.key},{value:L,defaultValue:V}),De=Object(J.a)(ge,2),je=De[0],Se=De[1],Oe=Object(r.useState)(function(){return H.findIndex(function(Ee){return Ee.key===je})}),Ae=Object(J.a)(Oe,2),Ue=Ae[0],we=Ae[1];Object(r.useEffect)(function(){var Ee=H.findIndex(function(Ge){return Ge.key===je});if(Ee===-1){var We;Ee=Math.max(0,Math.min(Ue,H.length-1)),Se((We=H[Ee])===null||We===void 0?void 0:We.key)}we(Ee)},[H.map(function(Ee){return Ee.key}).join("_"),je,Ue]);var Me=Object(pn.a)(null,{value:j}),xe=Object(J.a)(Me,2),Ne=xe[0],gn=xe[1],Qe=X;Ie&&!["left","right"].includes(X)&&(Qe="top"),Object(r.useEffect)(function(){j||(gn("rc-tabs-".concat(fr)),fr+=1)},[]);function Ve(Ee,We){le==null||le(Ee,We),Se(Ee),_==null||_(Ee)}var _e={id:Ne,activeKey:je,animated:fe,tabPosition:Qe,rtl:ie,mobile:Ie},dn,cn=Object(oe.a)(Object(oe.a)({},_e),{},{editable:G,locale:ne,moreIcon:Q,moreTransitionName:ae,tabBarGutter:se,onTabClick:Ve,onTabScroll:de,extra:q,style:z,panes:N});return pe?dn=pe(cn,cr):dn=r.createElement(cr,cn),r.createElement(xt.Provider,{value:{tabs:H,prefixCls:E}},r.createElement("div",Object(W.a)({ref:d,id:j,className:Re()(E,"".concat(E,"-").concat(Qe),(g={},Object(ue.a)(g,"".concat(E,"-mobile"),Ie),Object(ue.a)(g,"".concat(E,"-editable"),G),Object(ue.a)(g,"".concat(E,"-rtl"),ie),g),T)},te),dn,r.createElement(na,Object(W.a)({destroyInactiveTabPane:k},_e,{animated:fe}))))}var pr=r.forwardRef(ra);pr.TabPane=mr;var aa=pr,sa=aa,$t=e("MZF8"),on=e("dEAq"),ia=e("ZpkN"),ba=e("TIsu");function Vt(s,d){var g,j=(g=s.match(/\.(\w+)$/))===null||g===void 0?void 0:g[1];return j||(j=d.tsx?"tsx":"jsx"),j}var oa=s=>{var d,g,j,D=Object(r.useRef)(),E=Object(r.useContext)(on.context),T=E.locale,N=Object(on.useLocaleProps)(T,s),K=Object(on.useDemoUrl)(N.identifier),L=N.demoUrl||K,V=($t.a===null||$t.a===void 0?void 0:$t.a.location.hash)==="#".concat(N.identifier),G=Object.keys(N.sources).length===1,U=Object(on.useCodeSandbox)((d=N.hideActions)!==null&&d!==void 0&&d.includes("CSB")?null:N),re=Object(on.useRiddle)((g=N.hideActions)!==null&&g!==void 0&&g.includes("RIDDLE")?null:N),Y=Object(on.useMotions)(N.motions||[],D.current),X=Object(x.default)(Y,2),se=X[0],z=X[1],q=Object(on.useCopy)(),ne=Object(x.default)(q,2),Q=ne[0],ae=ne[1],k=Object(r.useState)("_"),pe=Object(x.default)(k,2),_=pe[0],le=pe[1],de=Object(r.useState)(Vt(_,N.sources[_])),te=Object(x.default)(de,2),H=te[0],ie=te[1],fe=Object(r.useState)(Boolean(N.defaultShowCode)),me=Object(x.default)(fe,2),ye=me[0],Ie=me[1],he=Object(r.useState)(Math.random()),ge=Object(x.default)(he,2),De=ge[0],je=ge[1],Se=N.sources[_][H]||N.sources[_].content,Oe=Object(on.useTSPlaygroundUrl)(T,Se),Ae=Object(r.useRef)(),Ue=Object(on.usePrefersColor)(),we=Object(x.default)(Ue,1),Me=we[0];Object(r.useEffect)(()=>{je(Math.random())},[Me]);function xe(Ne){le(Ne),ie(Vt(Ne,N.sources[Ne]))}return b.a.createElement("div",{style:N.style,className:[N.className,"__dumi-default-previewer",V?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:N.identifier,"data-debug":N.debug||void 0,"data-iframe":N.iframe||void 0},N.iframe&&b.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),b.a.createElement("div",{ref:D,className:"__dumi-default-previewer-demo",style:{transform:N.transform?"translate(0, 0)":void 0,padding:N.compact||N.iframe&&N.compact!==!1?"0":void 0,background:N.background}},N.iframe?b.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(N.iframe).replace(/(\d)$/,"$1px")},key:De,src:L,ref:Ae}):N.children),b.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":N.title},N.title&&b.a.createElement(on.AnchorLink,{to:"#".concat(N.identifier)},N.title),N.description&&b.a.createElement("div",{dangerouslySetInnerHTML:{__html:N.description}})),b.a.createElement("div",{className:"__dumi-default-previewer-actions"},U&&b.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:U}),re&&b.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:re}),N.motions&&b.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:z,onClick:()=>se()}),N.iframe&&b.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:()=>je(Math.random())}),!((j=N.hideActions)!==null&&j!==void 0&&j.includes("EXTERNAL"))&&b.a.createElement(on.Link,{target:"_blank",to:L},b.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),b.a.createElement("span",null),b.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":ae,onClick:()=>Q(Se)}),H==="tsx"&&ye&&b.a.createElement(on.Link,{target:"_blank",to:Oe},b.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),b.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(ye?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:()=>Ie(!ye)})),ye&&b.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!G&&b.a.createElement(sa,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xB7\xB7\xB7",defaultActiveKey:_,onChange:xe},Object.keys(N.sources).map(Ne=>b.a.createElement(mr,{tab:Ne==="_"?"index.".concat(Vt(Ne,N.sources[Ne])):Ne,key:Ne}))),b.a.createElement("div",{className:"__dumi-default-previewer-source"},b.a.createElement(ia.a,{code:Se,lang:H,showCopy:!1}))))},Oa=un.default=oa},"80pN":function(En,un,e){"use strict";(function(x){/** @license React v16.14.0
* react-dom-test-utils.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var r=e("MgzW"),b=e("q1tI"),W=e("i8i4"),ue=e("QCnb");function J(t){for(var a="https://reactjs.org/docs/error-decoder.html?invariant="+t,u=1;u<arguments.length;u++)a+="&args[]="+encodeURIComponent(arguments[u]);return"Minified React error #"+t+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Te=b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;Te.hasOwnProperty("ReactCurrentDispatcher")||(Te.ReactCurrentDispatcher={current:null}),Te.hasOwnProperty("ReactCurrentBatchConfig")||(Te.ReactCurrentBatchConfig={suspense:null});function Ce(t){var a=t,u=t;if(t.alternate)for(;a.return;)a=a.return;else{t=a;do a=t,(a.effectTag&1026)!=0&&(u=a.return),t=a.return;while(t)}return a.tag===3?u:null}function oe(t){if(Ce(t)!==t)throw Error(J(188))}function $n(t){var a=t.alternate;if(!a){if(a=Ce(t),a===null)throw Error(J(188));return a!==t?null:t}for(var u=t,v=a;;){var O=u.return;if(O===null)break;var M=O.alternate;if(M===null){if(v=O.return,v!==null){u=v;continue}break}if(O.child===M.child){for(M=O.child;M;){if(M===u)return oe(O),t;if(M===v)return oe(O),a;M=M.sibling}throw Error(J(188))}if(u.return!==v.return)u=O,v=M;else{for(var B=!1,$=O.child;$;){if($===u){B=!0,u=O,v=M;break}if($===v){B=!0,v=O,u=M;break}$=$.sibling}if(!B){for($=M.child;$;){if($===u){B=!0,u=M,v=O;break}if($===v){B=!0,v=M,u=O;break}$=$.sibling}if(!B)throw Error(J(189))}}if(u.alternate!==v)throw Error(J(190))}if(u.tag!==3)throw Error(J(188));return u.stateNode.current===u?t:a}function Re(){return!0}function jn(){return!1}function Dn(t,a,u,v){this.dispatchConfig=t,this._targetInst=a,this.nativeEvent=u,t=this.constructor.Interface;for(var O in t)t.hasOwnProperty(O)&&((a=t[O])?this[O]=a(u):O==="target"?this.target=v:this[O]=u[O]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Re:jn,this.isPropagationStopped=jn,this}r(Dn.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Re)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Re)},persist:function(){this.isPersistent=Re},isPersistent:jn,destructor:function(){var t=this.constructor.Interface,a;for(a in t)this[a]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=jn,this._dispatchInstances=this._dispatchListeners=null}}),Dn.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null},Dn.extend=function(t){function a(){}function u(){return v.apply(this,arguments)}var v=this;a.prototype=v.prototype;var O=new a;return r(O,u.prototype),u.prototype=O,u.prototype.constructor=u,u.Interface=r({},v.Interface,t),u.extend=v.extend,$e(u),u},$e(Dn);function pn(t,a,u,v){if(this.eventPool.length){var O=this.eventPool.pop();return this.call(O,t,a,u,v),O}return new this(t,a,u,v)}function an(t){if(!(t instanceof this))throw Error(J(279));t.destructor(),10>this.eventPool.length&&this.eventPool.push(t)}function $e(t){t.eventPool=[],t.getPooled=pn,t.release=an}var An=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined");function Pn(t,a){var u={};return u[t.toLowerCase()]=a.toLowerCase(),u["Webkit"+t]="webkit"+a,u["Moz"+t]="moz"+a,u}var hn={animationend:Pn("Animation","AnimationEnd"),animationiteration:Pn("Animation","AnimationIteration"),animationstart:Pn("Animation","AnimationStart"),transitionend:Pn("Transition","TransitionEnd")},Fe={},nt={};An&&(nt=document.createElement("div").style,"AnimationEvent"in window||(delete hn.animationend.animation,delete hn.animationiteration.animation,delete hn.animationstart.animation),"TransitionEvent"in window||delete hn.transitionend.transition);function wn(t){if(Fe[t])return Fe[t];if(!hn[t])return t;var a=hn[t],u;for(u in a)if(a.hasOwnProperty(u)&&u in nt)return Fe[t]=a[u];return t}var tt=wn("animationend"),dt=wn("animationiteration"),rt=wn("animationstart"),ct=wn("transitionend"),Mn=null;function at(t){if(Mn===null)try{var a=("require"+Math.random()).slice(0,7);Mn=(x&&x[a])("timers").setImmediate}catch(u){Mn=function(v){var O=new MessageChannel;O.port1.onmessage=v,O.port2.postMessage(void 0)}}return Mn(t)}var Vn=W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,mt=Vn[11],Bn=Vn[12],Kn=W.unstable_batchedUpdates,Jn=Te.IsSomeRendererActing,zn=typeof ue.unstable_flushAllWithoutAsserting=="function",Wn=ue.unstable_flushAllWithoutAsserting||function(){for(var t=!1;mt();)t=!0;return t};function st(t){try{Wn(),at(function(){Wn()?st(t):t()})}catch(a){t(a)}}var vn=0,F=!1,I=W.findDOMNode,P=W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,m=P[0],i=P[4],h=P[5],y=P[6],S=P[7],o=P[8],p=P[9],l=P[10];function A(){}function w(t,a){if(!t)return[];if(t=$n(t),!t)return[];for(var u=t,v=[];;){if(u.tag===5||u.tag===6||u.tag===1||u.tag===0){var O=u.stateNode;a(O)&&v.push(O)}if(u.child)u.child.return=u,u=u.child;else{if(u===t)return v;for(;!u.sibling;){if(!u.return||u.return===t)return v;u=u.return}u.sibling.return=u.return,u=u.sibling}}}function C(t,a){if(t&&!t._reactInternalFiber){var u=""+t;throw t=Array.isArray(t)?"an array":t&&t.nodeType===1&&t.tagName?"a DOM node":u==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":u,Error(J(286,a,t))}}var c={renderIntoDocument:function(t){var a=document.createElement("div");return W.render(t,a)},isElement:function(t){return b.isValidElement(t)},isElementOfType:function(t,a){return b.isValidElement(t)&&t.type===a},isDOMComponent:function(t){return!(!t||t.nodeType!==1||!t.tagName)},isDOMComponentElement:function(t){return!!(t&&b.isValidElement(t)&&t.tagName)},isCompositeComponent:function(t){return c.isDOMComponent(t)?!1:t!=null&&typeof t.render=="function"&&typeof t.setState=="function"},isCompositeComponentWithType:function(t,a){return c.isCompositeComponent(t)?t._reactInternalFiber.type===a:!1},findAllInRenderedTree:function(t,a){return C(t,"findAllInRenderedTree"),t?w(t._reactInternalFiber,a):[]},scryRenderedDOMComponentsWithClass:function(t,a){return C(t,"scryRenderedDOMComponentsWithClass"),c.findAllInRenderedTree(t,function(u){if(c.isDOMComponent(u)){var v=u.className;typeof v!="string"&&(v=u.getAttribute("class")||"");var O=v.split(/\s+/);if(!Array.isArray(a)){if(a===void 0)throw Error(J(11));a=a.split(/\s+/)}return a.every(function(M){return O.indexOf(M)!==-1})}return!1})},findRenderedDOMComponentWithClass:function(t,a){if(C(t,"findRenderedDOMComponentWithClass"),t=c.scryRenderedDOMComponentsWithClass(t,a),t.length!==1)throw Error("Did not find exactly one match (found: "+t.length+") for class:"+a);return t[0]},scryRenderedDOMComponentsWithTag:function(t,a){return C(t,"scryRenderedDOMComponentsWithTag"),c.findAllInRenderedTree(t,function(u){return c.isDOMComponent(u)&&u.tagName.toUpperCase()===a.toUpperCase()})},findRenderedDOMComponentWithTag:function(t,a){if(C(t,"findRenderedDOMComponentWithTag"),t=c.scryRenderedDOMComponentsWithTag(t,a),t.length!==1)throw Error("Did not find exactly one match (found: "+t.length+") for tag:"+a);return t[0]},scryRenderedComponentsWithType:function(t,a){return C(t,"scryRenderedComponentsWithType"),c.findAllInRenderedTree(t,function(u){return c.isCompositeComponentWithType(u,a)})},findRenderedComponentWithType:function(t,a){if(C(t,"findRenderedComponentWithType"),t=c.scryRenderedComponentsWithType(t,a),t.length!==1)throw Error("Did not find exactly one match (found: "+t.length+") for componentType:"+a);return t[0]},mockComponent:function(t,a){return a=a||t.mockTagName||"div",t.prototype.render.mockImplementation(function(){return b.createElement(a,null,this.props.children)}),this},nativeTouchData:function(t,a){return{touches:[{pageX:t,pageY:a}]}},Simulate:null,SimulateNative:{},act:function(t){function a(){vn--,Jn.current=u,Bn.current=v}F===!1&&(F=!0,console.error("act(...) is not supported in production builds of React, and might not behave as expected.")),vn++;var u=Jn.current,v=Bn.current;Jn.current=!0,Bn.current=!0;try{var O=Kn(t)}catch(M){throw a(),M}if(O!==null&&typeof O=="object"&&typeof O.then=="function")return{then:function(M,B){O.then(function(){1<vn||zn===!0&&u===!0?(a(),M()):st(function($){a(),$?B($):M()})},function($){a(),B($)})}};try{vn!==1||zn!==!1&&u!==!1||Wn(),a()}catch(M){throw a(),M}return{then:function(M){M()}}}};function R(t){return function(a,u){if(b.isValidElement(a))throw Error(J(228));if(c.isCompositeComponent(a))throw Error(J(229));var v=i[t],O=new A;O.target=a,O.type=t.toLowerCase();var M=m(a),B=new Dn(v,M,O,a);B.persist(),r(B,u),v.phasedRegistrationNames?h(B):y(B),W.unstable_batchedUpdates(function(){S(a),l(B)}),o()}}c.Simulate={};for(var f in i)c.Simulate[f]=R(f);function n(t,a){return function(u,v){var O=new A(t);r(O,v),c.isDOMComponent(u)?(u=I(u),O.target=u,p(a,1,document,O)):u.tagName&&(O.target=u,p(a,1,document,O))}}[["abort","abort"],[tt,"animationEnd"],[dt,"animationIteration"],[rt,"animationStart"],["blur","blur"],["canplaythrough","canPlayThrough"],["canplay","canPlay"],["cancel","cancel"],["change","change"],["click","click"],["close","close"],["compositionend","compositionEnd"],["compositionstart","compositionStart"],["compositionupdate","compositionUpdate"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["dragstart","dragStart"],["drag","drag"],["drop","drop"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],["ended","ended"],["error","error"],["focus","focus"],["input","input"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["loadstart","loadStart"],["loadstart","loadStart"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["mousedown","mouseDown"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["playing","playing"],["progress","progress"],["ratechange","rateChange"],["scroll","scroll"],["seeked","seeked"],["seeking","seeking"],["selectionchange","selectionChange"],["stalled","stalled"],["suspend","suspend"],["textInput","textInput"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchmove","touchMove"],["touchstart","touchStart"],[ct,"transitionEnd"],["volumechange","volumeChange"],["waiting","waiting"],["wheel","wheel"]].forEach(function(t){var a=t[1];c.SimulateNative[a]=n(a,t[0])}),x.exports=c.default||c}).call(this,e("hOG+")(En))},JjdP:function(En,un,e){"use strict";e.r(un);var x=e("9og8"),r=e("WmNS"),b=e.n(r),W=e("LtsZ"),ue=`import React, { useRef } from 'react';
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

export default Demo;`,Ce=`export const delay = ms => new Promise(res => setTimeout(res, ms));

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

export default Demo;`,$n=`export const basic = {
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
};`,Re=`import React from 'react';
import { Button, message, Input } from 'antd';
import FormRender, { useForm } from 'form-render';

const { TextArea } = Input;

const Demo = () => {
  const form = useForm();

  const schema = {
    type: 'object',
    properties: {
      useSelect: {
        title: '\u8F93\u5165\u6846\u9AD8\u5EA6',
        type: 'number',
      },
      select2: {
        title: '\u8F93\u5165\u6846',
        type: 'string',
        dependencies: ['useSelect'],
        widget: 'MyTextEditor',
      },
    },
  };

  const onFinish = (data, errors) => {
    if (errors.length > 0) {
      message.error(
        '\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A' + JSON.stringify(errors.map(item => item.name))
      );
    } else {
      message.success('\u63D0\u4EA4\u6210\u529F\uFF1A' + JSON.stringify(data));
    }
  };

  return (
    <div>
      <FormRender
        form={form}
        schema={schema}
        widgets={{ MyTextEditor }}
        onFinish={onFinish}
      />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4
      </Button>
    </div>
  );
};

const MyTextEditor = props => {
  const { addons } = props;
  console.log(addons.dependValues);
  let rows;
  if (addons && addons.dependValues) {
    rows = addons.dependValues[0] || 2;
  }
  return <TextArea rows={rows} />;
};

export default Demo;`,jn=`import React, { Component } from 'react';
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

export default Root;`,Dn=`import React, { useState, useEffect } from 'react';
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

export default Demo;`,pn=`{
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
}`,an=`import { Select } from 'antd';
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

export default SearchInput;`,$e=`import React from 'react';
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

export default Demo;`,An=`/* PrismJS 1.16.0
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
}`,Pn=`.debug * {
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
}`,hn=`import React, { Component } from 'react';
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

export default Root;`,Fe=`import React, { useState, useEffect } from 'react';
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

export default Demo;`,nt=`{
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
}`,wn=`import { Select } from 'antd';
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

export default SearchInput;`,tt=`import React from 'react';
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

export default Demo;`,dt=`import { monaco } from 'react-monaco-editor';

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

export { valueMap, keySuggestions };`,rt=`.markdown p {
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
}`,ct=`import React from 'react';
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

export default withTable(Demo);`,Mn=`import React from 'react';
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
        columns={columns}
        rowKey="id"
      />
    </div>
  );
};

export default withTable(Demo);`,Vn=`import React, { useEffect } from 'react';
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

export default withTable(Demo);`,mt=`import React from 'react';
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
    dataIndex: 'created_at',
    valueType: 'date',
  },
  {
    title: '\u64CD\u4F5C',
    render: (row, record) => <a onClick={() => alert(row.title)}>\u7F16\u8F91</a>,
  },
];

const App = () => {
  const searchApi = () => {
    return Promise.resolve({
      rows: dataSource,
      total: dataSource.length,
    });
  };
  return (
    <>
      <Search debug schema={schema} api={searchApi} />
      <Table headerTitle="\u6700\u7B80\u8868\u683C" columns={columns} rowKey="id" />
    </>
  );
};

export default withTable(App);`,Bn=`import React, { useState, useRef } from 'react';
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

export default Demo;`,Kn=`import React from 'react';
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
}`,Wn=`import React, { useState, useRef } from 'react';
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

export default Demo;`,vn=un.default={"guide-card":{component:Object(W.dynamic)({loader:function(){var F=Object(x.a)(b.a.mark(function P(){return b.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"oLxE"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},P)}));function I(){return F.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:ue}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"card-render":{version:"0.1.2"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"0.x"}},identifier:"guide-card"}},"chart-render-demo":{component:Object(W.dynamic)({loader:function(){var F=Object(x.a)(b.a.mark(function P(){var m,i,h,y,S,o,p;return b.a.wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return o=function(C,c){if(!c&&C&&C.__esModule)return C;if(C===null||typeof C!="object"&&typeof C!="function")return{default:C};var R=S(c);if(R&&R.has(C))return R.get(C);var f={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var t in C)if(t!=="default"&&Object.prototype.hasOwnProperty.call(C,t)){var a=n?Object.getOwnPropertyDescriptor(C,t):null;a&&(a.get||a.set)?Object.defineProperty(f,t,a):f[t]=C[t]}return f.default=C,R&&R.set(C,f),f},S=function(C){if(typeof WeakMap!="function")return null;var c=new WeakMap,R=new WeakMap;return(S=function(n){return n?R:c})(C)},m=e("K+nK"),A.t0=m,A.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return A.t1=A.sent,i=(0,A.t0)(A.t1),A.t2=o,A.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return A.t3=A.sent,h=(0,A.t2)(A.t3),A.next=15,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 15:return y=A.sent,p=function(){var C=(0,h.useState)("Line"),c=(0,i.default)(C,2),R=c[0],f=c[1],n={Line:y.Line,Column:y.Column,PivotTable:y.PivotTable}[R];return h.default.createElement("div",null,h.default.createElement("div",{style:{marginBottom:10}},h.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return f("Line")}},"\u6298\u7EBF\u56FE"),h.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return f("Column")}},"\u67F1\u72B6\u56FE"),h.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return f("PivotTable")}},"\u4EA4\u53C9\u8868")),h.default.createElement(n,{meta:[{id:"date",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF",isDim:!1},{id:"uv",name:"\u8BBF\u5BA2\u6570",isDim:!1}],data:[{date:"20200101",pv:100,uv:50},{date:"20200102",pv:120,uv:60},{date:"20200103",pv:140,uv:70},{date:"20200104",pv:160,uv:80}]}))},A.abrupt("return",p);case 18:case"end":return A.stop()}},P)}));function I(){return F.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"chart-render-demo"}},"column-demo":{component:Object(W.dynamic)({loader:function(){var F=Object(x.a)(b.a.mark(function P(){var m,i,h,y;return b.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return m=e("K+nK"),o.t0=m,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=o.sent,y=function(){return i.default.createElement(h.Column,{meta:[{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{pv:50,uv:20}]})},o.abrupt("return",y);case 11:case"end":return o.stop()}},P)}));function I(){return F.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[{ pv: 50, uv: 20 }]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo"}},"column-demo-1":{component:Object(W.dynamic)({loader:function(){var F=Object(x.a)(b.a.mark(function P(){var m,i,h,y;return b.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return m=e("K+nK"),o.t0=m,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=o.sent,y=function(){return i.default.createElement(h.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},o.abrupt("return",y);case 11:case"end":return o.stop()}},P)}));function I(){return F.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-1"}},"column-demo-2":{component:Object(W.dynamic)({loader:function(){var F=Object(x.a)(b.a.mark(function P(){var m,i,h,y;return b.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return m=e("K+nK"),o.t0=m,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=o.sent,y=function(){return i.default.createElement(h.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},o.abrupt("return",y);case 11:case"end":return o.stop()}},P)}));function I(){return F.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-2"}},"column-demo-3":{component:Object(W.dynamic)({loader:function(){var F=Object(x.a)(b.a.mark(function P(){var m,i,h,y;return b.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return m=e("K+nK"),o.t0=m,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=o.sent,y=function(){return i.default.createElement(h.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},o.abrupt("return",y);case 11:case"end":return o.stop()}},P)}));function I(){return F.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-3"}},"column-demo-4":{component:Object(W.dynamic)({loader:function(){var F=Object(x.a)(b.a.mark(function P(){var m,i,h,y;return b.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return m=e("K+nK"),o.t0=m,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=o.sent,y=function(){return i.default.createElement(h.Column,{inverted:!0,label:{position:"middle",layout:[{type:"interval-adjust-position"},{type:"interval-hide-overlap"},{type:"adjust-color"}]},meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},o.abrupt("return",y);case 11:case"end":return o.stop()}},P)}));function I(){return F.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-4"}},"line-demo":{component:Object(W.dynamic)({loader:function(){var F=Object(x.a)(b.a.mark(function P(){var m,i,h,y;return b.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return m=e("K+nK"),o.t0=m,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=o.sent,y=function(){return i.default.createElement(h.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},o.abrupt("return",y);case 11:case"end":return o.stop()}},P)}));function I(){return F.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo"}},"line-demo-1":{component:Object(W.dynamic)({loader:function(){var F=Object(x.a)(b.a.mark(function P(){var m,i,h,y;return b.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return m=e("K+nK"),o.t0=m,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=o.sent,y=function(){return i.default.createElement(h.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},o.abrupt("return",y);case 11:case"end":return o.stop()}},P)}));function I(){return F.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-1"}},"line-demo-2":{component:Object(W.dynamic)({loader:function(){var F=Object(x.a)(b.a.mark(function P(){var m,i,h,y;return b.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return m=e("K+nK"),o.t0=m,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=o.sent,y=function(){return i.default.createElement(h.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"},{id:"pv",name:"\u8BBF\u95EE\u91CF"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20,pv:120},{ds:"2020-12-31",page:"\u9996\u9875",uv:120,pv:1120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21,pv:121},{ds:"2021-01-01",page:"\u9996\u9875",uv:121,pv:1121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15,pv:115},{ds:"2021-01-02",page:"\u9996\u9875",uv:115,pv:1115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40,pv:140},{ds:"2021-01-03",page:"\u9996\u9875",uv:140,pv:1140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31,pv:131},{ds:"2021-01-04",page:"\u9996\u9875",uv:131,pv:1131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32,pv:132},{ds:"2021-01-05",page:"\u9996\u9875",uv:132,pv:1132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30,pv:130},{ds:"2021-01-06",page:"\u9996\u9875",uv:130,pv:1130}]})},o.abrupt("return",y);case 11:case"end":return o.stop()}},P)}));function I(){return F.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-2"}},"line-demo-3":{component:Object(W.dynamic)({loader:function(){var F=Object(x.a)(b.a.mark(function P(){var m,i,h,y;return b.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return m=e("K+nK"),o.t0=m,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=o.sent,y=function(){return i.default.createElement(h.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},o.abrupt("return",y);case 11:case"end":return o.stop()}},P)}));function I(){return F.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-3"}},"line-demo-4":{component:Object(W.dynamic)({loader:function(){var F=Object(x.a)(b.a.mark(function P(){var m,i,h,y;return b.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return m=e("K+nK"),o.t0=m,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=o.sent,y=function(){return i.default.createElement(h.Line,{withArea:!0,isStack:!0,isPercent:!0,meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},o.abrupt("return",y);case 11:case"end":return o.stop()}},P)}));function I(){return F.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-4"}},"pivot-table-demo":{component:Object(W.dynamic)({loader:function(){var F=Object(x.a)(b.a.mark(function P(){var m,i,h,y;return b.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return m=e("K+nK"),o.t0=m,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=o.sent,y=function(){return i.default.createElement(h.PivotTable,{style:{maxHeight:400,overflow:"auto"},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},o.abrupt("return",y);case 11:case"end":return o.stop()}},P)}));function I(){return F.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo"}},"pivot-table-demo-1":{component:Object(W.dynamic)({loader:function(){var F=Object(x.a)(b.a.mark(function P(){var m,i,h,y;return b.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return m=e("K+nK"),o.t0=m,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=o.sent,y=function(){return i.default.createElement(h.PivotTable,{style:{maxHeight:400,overflow:"auto"},cellRender:function(A,w,C){return i.default.createElement("div",null,i.default.createElement("p",null,"\u53C2\u6570\u8868\uFF1A"),i.default.createElement("p",{style:{color:["red","orange","yellow","green","blue"][Object.keys(w).length]}},A),i.default.createElement("p",null,JSON.stringify(w)),i.default.createElement("p",null,JSON.stringify(C)))},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},o.abrupt("return",y);case 11:case"end":return o.stop()}},P)}));function I(){return F.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-1"}},"pivot-table-demo-2":{component:Object(W.dynamic)({loader:function(){var F=Object(x.a)(b.a.mark(function P(){var m,i,h,y,S,o,p;return b.a.wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return o=function(C,c){if(!c&&C&&C.__esModule)return C;if(C===null||typeof C!="object"&&typeof C!="function")return{default:C};var R=S(c);if(R&&R.has(C))return R.get(C);var f={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var t in C)if(t!=="default"&&Object.prototype.hasOwnProperty.call(C,t)){var a=n?Object.getOwnPropertyDescriptor(C,t):null;a&&(a.get||a.set)?Object.defineProperty(f,t,a):f[t]=C[t]}return f.default=C,R&&R.set(C,f),f},S=function(C){if(typeof WeakMap!="function")return null;var c=new WeakMap,R=new WeakMap;return(S=function(n){return n?R:c})(C)},m=e("K+nK"),A.t0=m,A.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return A.t1=A.sent,i=(0,A.t0)(A.t1),A.t2=o,A.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return A.t3=A.sent,h=(0,A.t2)(A.t3),A.next=15,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 15:return y=A.sent,p=function(){var C=(0,h.useState)(!1),c=(0,i.default)(C,2),R=c[0],f=c[1];return h.default.createElement(h.default.Fragment,null,h.default.createElement("label",null,"\u53EF\u5C55\u5F00/\u6536\u7F29\uFF1A",h.default.createElement("input",{type:"checkbox",value:R,onChange:function(){return f(!R)}})),h.default.createElement(y.PivotTable,{leftExpandable:R,showSubtotal:!1,meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]}))},A.abrupt("return",p);case 18:case"end":return A.stop()}},P)}));function I(){return F.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-2"}},"OldSchemaTransformer-demo":{component:Object(W.dynamic)({loader:function(){var F=Object(x.a)(b.a.mark(function P(){var m,i,h,y,S,o,p,l,A,w,C,c,R;return b.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return A=function(a,u){if(!u&&a&&a.__esModule)return a;if(a===null||typeof a!="object"&&typeof a!="function")return{default:a};var v=l(u);if(v&&v.has(a))return v.get(a);var O={},M=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var B in a)if(B!=="default"&&Object.prototype.hasOwnProperty.call(a,B)){var $=M?Object.getOwnPropertyDescriptor(a,B):null;$&&($.get||$.set)?Object.defineProperty(O,B,$):O[B]=a[B]}return O.default=a,v&&v.set(a,O),O},l=function(a){if(typeof WeakMap!="function")return null;var u=new WeakMap,v=new WeakMap;return(l=function(M){return M?v:u})(a)},m=e("K+nK"),n.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return n.t0=m,n.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return n.t1=n.sent,i=(0,n.t0)(n.t1),n.t2=m,n.next=13,Promise.resolve().then(e.bind(null,"tJVT"));case 13:return n.t3=n.sent,h=(0,n.t2)(n.t3),n.next=17,Promise.all([e.e(3),e.e(19)]).then(e.t.bind(null,"cUip",7));case 17:return n.t4=m,n.next=20,Promise.all([e.e(0),e.e(8),e.e(18),e.e(20)]).then(e.t.bind(null,"iJl9",7));case 20:return n.t5=n.sent,y=(0,n.t4)(n.t5),n.t6=A,n.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return n.t7=n.sent,S=(0,n.t6)(n.t7),n.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 29:return o=n.sent,n.next=32,Promise.all([e.e(22),e.e(25)]).then(e.bind(null,"7t+U"));case 32:return p=n.sent,w=y.default.TextArea,C={type:"object",properties:{number:{title:"\u6570\u5B57\u8F93\u5165\u6846",type:"number","ui:disabled":!0},checkbox:{title:"\u662F\u5426\u9009\u62E9",type:"boolean","ui:widget":"switch"}},required:["number"]},c=function(){var a=(0,S.useState)(JSON.stringify(C)),u=(0,h.default)(a,2),v=u[0],O=u[1],M=(0,S.useState)({}),B=(0,h.default)(M,2),$=B[0],Ke=B[1],Xe=function(){try{var Fn=(0,p.updateSchemaToNewVersion)(JSON.parse(v));Ke(Fn)}catch(Gn){console.log(Gn)}},sn=function(Fn){O(Fn.target.value)},Tn=function(){O(JSON.stringify(JSON.parse(v),null,2))};return S.default.createElement("div",null,S.default.createElement("div",null,"\u586B\u5165\u65E7\u7248schema\uFF1A"),S.default.createElement(w,{style:{minHeight:400,marginTop:12,marginBottom:12},value:v,onChange:sn}),S.default.createElement(i.default,{style:{marginRight:12},onClick:Tn},"\u683C\u5F0F\u5316\u65E7schema"),S.default.createElement(i.default,{type:"primary",onClick:Xe},"\u751F\u6210\u65B0\u7248schema"),S.default.createElement(w,{style:{minHeight:400,marginTop:12},value:JSON.stringify($,null,2)}))},R=c,n.abrupt("return",R);case 38:case"end":return n.stop()}},P)}));function I(){return F.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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

export default Translator;`},"packages/form-render/src/utils.js":{import:"../../packages/form-render/src/utils.js",content:J}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"},"lodash-es":{version:"4.17.21"}},identifier:"OldSchemaTransformer-demo"}},"form-render-demo":{component:Object(W.dynamic)({loader:function(){var F=Object(x.a)(b.a.mark(function P(){var m,i,h,y,S,o,p,l,A,w;return b.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return p=function(f,n){if(!n&&f&&f.__esModule)return f;if(f===null||typeof f!="object"&&typeof f!="function")return{default:f};var t=o(n);if(t&&t.has(f))return t.get(f);var a={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in f)if(v!=="default"&&Object.prototype.hasOwnProperty.call(f,v)){var O=u?Object.getOwnPropertyDescriptor(f,v):null;O&&(O.get||O.set)?Object.defineProperty(a,v,O):a[v]=f[v]}return a.default=f,t&&t.set(f,a),a},o=function(f){if(typeof WeakMap!="function")return null;var n=new WeakMap,t=new WeakMap;return(o=function(u){return u?t:n})(f)},m=e("K+nK"),c.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return c.t0=m,c.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return c.t1=c.sent,i=(0,c.t0)(c.t1),c.t2=m,c.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return c.t3=c.sent,h=(0,c.t2)(c.t3),c.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 17:return y=c.sent,c.t4=p,c.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 21:return c.t5=c.sent,S=(0,c.t4)(c.t5),l={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},A=function(){var f=(0,S.useForm)(),n=function(a,u){console.log("formData:",a,"errors",u)};return h.default.createElement("div",null,h.default.createElement(S.default,{form:f,schema:l,onFinish:n}),h.default.createElement(i.default,{type:"primary",onClick:f.submit},"\u63D0\u4EA4"))},w=A,c.abrupt("return",w);case 27:case"end":return c.stop()}},P)}));function I(){return F.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo"}},"form-render-demo-1":{component:Object(W.dynamic)({loader:function(){var F=Object(x.a)(b.a.mark(function P(){var m,i,h,y,S,o,p,l,A,w,C,c,R,f;return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return C=function(u,v){if(!v&&u&&u.__esModule)return u;if(u===null||typeof u!="object"&&typeof u!="function")return{default:u};var O=w(v);if(O&&O.has(u))return O.get(u);var M={},B=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var $ in u)if($!=="default"&&Object.prototype.hasOwnProperty.call(u,$)){var Ke=B?Object.getOwnPropertyDescriptor(u,$):null;Ke&&(Ke.get||Ke.set)?Object.defineProperty(M,$,Ke):M[$]=u[$]}return M.default=u,O&&O.set(u,M),M},w=function(u){if(typeof WeakMap!="function")return null;var v=new WeakMap,O=new WeakMap;return(w=function(B){return B?O:v})(u)},m=e("K+nK"),t.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return t.t0=m,t.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return t.t1=t.sent,i=(0,t.t0)(t.t1),t.t2=m,t.next=13,e.e(86).then(e.bind(null,"fWQN"));case 13:return t.t3=t.sent,h=(0,t.t2)(t.t3),t.t4=m,t.next=18,e.e(87).then(e.bind(null,"mtLc"));case 18:return t.t5=t.sent,y=(0,t.t4)(t.t5),t.t6=m,t.next=23,e.e(78).then(e.bind(null,"yKVA"));case 23:return t.t7=t.sent,S=(0,t.t6)(t.t7),t.t8=m,t.next=28,e.e(77).then(e.bind(null,"879j"));case 28:return t.t9=t.sent,o=(0,t.t8)(t.t9),t.t10=m,t.next=33,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 33:return t.t11=t.sent,p=(0,t.t10)(t.t11),t.next=37,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 37:return l=t.sent,t.t12=C,t.next=41,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 41:return t.t13=t.sent,A=(0,t.t12)(t.t13),c={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},R=function(a){(0,S.default)(v,a);var u=(0,o.default)(v);function v(){var O;(0,h.default)(this,v);for(var M=arguments.length,B=new Array(M),$=0;$<M;$++)B[$]=arguments[$];return O=u.call.apply(u,[this].concat(B)),O.onFinish=function(Ke,Xe){console.log("formData:",Ke,"errors",Xe)},O}return(0,y.default)(v,[{key:"render",value:function(){var M=this.props.form;return p.default.createElement("div",null,p.default.createElement(A.default,{form:M,schema:c,onFinish:this.onFinish}),p.default.createElement(i.default,{type:"primary",onClick:M.submit},"\u63D0\u4EA4"))}}]),v}(p.default.Component),f=(0,A.connectForm)(R),t.abrupt("return",f);case 47:case"end":return t.stop()}},P)}));function I(){return F.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default connectForm(Demo);`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo-1"}},"form-render-demo-2":{component:Object(W.dynamic)({loader:function(){var F=Object(x.a)(b.a.mark(function P(){var m,i,h,y,S,o,p,l,A,w;return b.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return p=function(f,n){if(!n&&f&&f.__esModule)return f;if(f===null||typeof f!="object"&&typeof f!="function")return{default:f};var t=o(n);if(t&&t.has(f))return t.get(f);var a={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in f)if(v!=="default"&&Object.prototype.hasOwnProperty.call(f,v)){var O=u?Object.getOwnPropertyDescriptor(f,v):null;O&&(O.get||O.set)?Object.defineProperty(a,v,O):a[v]=f[v]}return a.default=f,t&&t.set(f,a),a},o=function(f){if(typeof WeakMap!="function")return null;var n=new WeakMap,t=new WeakMap;return(o=function(u){return u?t:n})(f)},m=e("K+nK"),c.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return c.t0=m,c.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return c.t1=c.sent,i=(0,c.t0)(c.t1),c.t2=m,c.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return c.t3=c.sent,h=(0,c.t2)(c.t3),c.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 17:return y=c.sent,c.t4=p,c.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 21:return c.t5=c.sent,S=(0,c.t4)(c.t5),l={displayType:"row",labelWidth:60,type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F",type:"range",format:"date"},showSetting:{title:"\u662F\u5426\u5C55\u793A\u7F51\u5740",type:"boolean"},siteUrl:{title:"\u7F51\u5740",type:"string",placeholder:"\u6B64\u5904\u5FC5\u586B",hidden:"{{formData.showSetting !== true}}",required:!0,props:{addonBefore:"https://",addonAfter:".com"}}}},A=function(){var f=(0,S.useForm)(),n=function(a,u){u.length>0?alert("errors:"+JSON.stringify(u)):alert("formData:"+JSON.stringify(a,null,2))};return h.default.createElement("div",null,h.default.createElement(S.default,{form:f,schema:l,onFinish:n}),h.default.createElement(i.default,{type:"primary",onClick:f.submit},"\u63D0\u4EA4"))},w=A,c.abrupt("return",w);case 27:case"end":return c.stop()}},P)}));function I(){return F.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-demo-2"}},"display-demo":{component:Object(W.dynamic)({loader:function(){var F=Object(x.a)(b.a.mark(function P(){var m,i,h,y,S;return b.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return m=e("K+nK"),p.t0=m,p.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return p.t1=p.sent,i=(0,p.t0)(p.t1),p.t2=m,p.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return p.t3=p.sent,h=(0,p.t2)(p.t3),y=function(A){return{type:"object",displayType:A,properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},objectName:{title:"\u5BF9\u8C61",bind:"obj",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},S=function(){return i.default.createElement("div",null,i.default.createElement("h2",null,"display: row"),i.default.createElement(h.default,{schema:y("row")}),i.default.createElement("h2",null,"display: column"),i.default.createElement(h.default,{schema:y("column")}))},p.abrupt("return",S);case 14:case"end":return p.stop()}},P)}));function I(){return F.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`},"demo/display.js":{import:"../demo/display",content:Te}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo"}},"display-demo-1":{component:Object(W.dynamic)({loader:function(){var F=Object(x.a)(b.a.mark(function P(){var m,i,h,y,S;return b.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return m=e("K+nK"),p.t0=m,p.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return p.t1=p.sent,i=(0,p.t0)(p.t1),p.t2=m,p.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return p.t3=p.sent,h=(0,p.t2)(p.t3),y={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0},check:{title:"box",type:"boolean",default:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},S=function(){return i.default.createElement(h.default,{readOnly:!0,schema:y})},p.abrupt("return",S);case 14:case"end":return p.stop()}},P)}));function I(){return F.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form readOnly schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:Te}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-1"}},"display-demo-2":{component:Object(W.dynamic)({loader:function(){var F=Object(x.a)(b.a.mark(function P(){var m,i,h,y,S;return b.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return m=e("K+nK"),p.t0=m,p.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return p.t1=p.sent,i=(0,p.t0)(p.t1),p.t2=m,p.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return p.t3=p.sent,h=(0,p.t2)(p.t3),y={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0,width:"50%"},check:{title:"box",type:"boolean",default:!0,width:"50%",labelWidth:6},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},S=function(){return i.default.createElement(h.default,{labelWidth:"200",schema:y})},p.abrupt("return",S);case 14:case"end":return p.stop()}},P)}));function I(){return F.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form labelWidth="200" schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:Te}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-2"}},"display-demo-3":{component:Object(W.dynamic)({loader:function(){var F=Object(x.a)(b.a.mark(function P(){var m,i,h,y,S,o;return b.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return m=e("K+nK"),l.t0=m,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,i=(0,l.t0)(l.t1),l.t2=m,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,h=(0,l.t2)(l.t3),y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},S=function(){return i.default.createElement(h.default,{schema:y})},o=S,l.abrupt("return",o);case 15:case"end":return l.stop()}},P)}));function I(){return F.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Te}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-3"}},"display-demo-4":{component:Object(W.dynamic)({loader:function(){var F=Object(x.a)(b.a.mark(function P(){var m,i,h,y,S,o;return b.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return m=e("K+nK"),l.t0=m,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,i=(0,l.t0)(l.t1),l.t2=m,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,h=(0,l.t2)(l.t3),y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},S=function(){return i.default.createElement(h.default,{schema:y})},o=S,l.abrupt("return",o);case 15:case"end":return l.stop()}},P)}));function I(){return F.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Te}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-4"}},"display-demo-5":{component:Object(W.dynamic)({loader:function(){var F=Object(x.a)(b.a.mark(function P(){var m,i,h,y,S,o;return b.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return m=e("K+nK"),l.t0=m,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,i=(0,l.t0)(l.t1),l.t2=m,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,h=(0,l.t2)(l.t3),y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},S=function(){return i.default.createElement(h.default,{schema:y})},o=S,l.abrupt("return",o);case 15:case"end":return l.stop()}},P)}));function I(){return F.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Te}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-5"}},"display-demo-6":{component:Object(W.dynamic)({loader:function(){var F=Object(x.a)(b.a.mark(function P(){var m,i,h,y,S,o;return b.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return m=e("K+nK"),l.t0=m,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,i=(0,l.t0)(l.t1),l.t2=m,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,h=(0,l.t2)(l.t3),y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",props:{hideMove:!0},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},S=function(){return i.default.createElement(h.default,{schema:y})},o=S,l.abrupt("return",o);case 15:case"end":return l.stop()}},P)}));function I(){return F.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Te}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-6"}},"form-methods-demo":{component:Object(W.dynamic)({loader:function(){var F=Object(x.a)(b.a.mark(function P(){var m,i,h,y,S,o,p,l,A,w,C,c,R;return b.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return C=function(a,u){if(!u&&a&&a.__esModule)return a;if(a===null||typeof a!="object"&&typeof a!="function")return{default:a};var v=w(u);if(v&&v.has(a))return v.get(a);var O={},M=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var B in a)if(B!=="default"&&Object.prototype.hasOwnProperty.call(a,B)){var $=M?Object.getOwnPropertyDescriptor(a,B):null;$&&($.get||$.set)?Object.defineProperty(O,B,$):O[B]=a[B]}return O.default=a,v&&v.set(a,O),O},w=function(a){if(typeof WeakMap!="function")return null;var u=new WeakMap,v=new WeakMap;return(w=function(M){return M?v:u})(a)},m=e("K+nK"),n.next=5,e.e(23).then(e.t.bind(null,"lfLe",7));case 5:return n.t0=m,n.next=8,e.e(24).then(e.t.bind(null,"Cp9S",7));case 8:return n.t1=n.sent,i=(0,n.t0)(n.t1),n.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return n.t2=m,n.next=15,e.e(8).then(e.t.bind(null,"4IMT",7));case 15:return n.t3=n.sent,h=(0,n.t2)(n.t3),n.next=19,e.e(15).then(e.t.bind(null,"tL+A",7));case 19:return n.t4=m,n.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return n.t5=n.sent,y=(0,n.t4)(n.t5),n.t6=m,n.next=27,Promise.resolve().then(e.bind(null,"tJVT"));case 27:return n.t7=n.sent,S=(0,n.t6)(n.t7),n.t8=C,n.next=32,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 32:return n.t9=n.sent,o=(0,n.t8)(n.t9),n.next=36,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 36:return p=n.sent,n.t10=C,n.next=40,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 40:return n.t11=n.sent,l=(0,n.t10)(n.t11),n.next=44,e.e(16).then(e.bind(null,"OH0R"));case 44:return A=n.sent,c=function(){var a=(0,l.useForm)(),u=(0,o.useState)({}),v=(0,S.default)(u,2),O=v[0],M=v[1],B=function(){(0,A.fakeApi)("xxx/getForm").then(function(Xe){a.setValues({input1:"hello world",select1:"c"})})};(0,o.useEffect)(function(){(0,A.delay)(1e3).then(function(Ke){M({type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}})})},[]);var $=function(Xe,sn){sn.length>0?y.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(sn.map(function(Tn){return Tn.name}))):(0,A.fakeApi)("xxx/submit",Xe).then(function(Tn){return y.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})};return o.default.createElement("div",{style:{width:"400px"}},o.default.createElement(l.default,{form:a,schema:O,onFinish:$}),o.default.createElement(i.default,null,o.default.createElement(h.default,{onClick:B},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),o.default.createElement(h.default,{type:"primary",onClick:a.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},R=c,n.abrupt("return",R);case 48:case"end":return n.stop()}},P)}));function I(){return F.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Ce}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo"}},"form-methods-demo-1":{component:Object(W.dynamic)({loader:function(){var F=Object(x.a)(b.a.mark(function P(){var m,i,h,y,S,o,p,l,A,w,C,c,R;return b.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return w=function(a,u){if(!u&&a&&a.__esModule)return a;if(a===null||typeof a!="object"&&typeof a!="function")return{default:a};var v=A(u);if(v&&v.has(a))return v.get(a);var O={},M=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var B in a)if(B!=="default"&&Object.prototype.hasOwnProperty.call(a,B)){var $=M?Object.getOwnPropertyDescriptor(a,B):null;$&&($.get||$.set)?Object.defineProperty(O,B,$):O[B]=a[B]}return O.default=a,v&&v.set(a,O),O},A=function(a){if(typeof WeakMap!="function")return null;var u=new WeakMap,v=new WeakMap;return(A=function(M){return M?v:u})(a)},m=e("K+nK"),n.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return n.t0=m,n.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return n.t1=n.sent,i=(0,n.t0)(n.t1),n.t2=m,n.next=13,Promise.resolve().then(e.bind(null,"PpiC"));case 13:return n.t3=n.sent,h=(0,n.t2)(n.t3),n.next=17,e.e(15).then(e.t.bind(null,"tL+A",7));case 17:return n.t4=m,n.next=20,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 20:return n.t5=n.sent,y=(0,n.t4)(n.t5),n.t6=m,n.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return n.t7=n.sent,S=(0,n.t6)(n.t7),n.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 29:return o=n.sent,n.t8=w,n.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 33:return n.t9=n.sent,p=(0,n.t8)(n.t9),n.next=37,e.e(16).then(e.bind(null,"OH0R"));case 37:return l=n.sent,C={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},c=function(){var a=(0,p.useForm)(),u=function(M,B){B.length>0?y.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(B.map(function($){return $.name}))):(0,l.fakeApi)("xxx/submit",M).then(function($){return y.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},v=function(M){var B=M.data,$=M.errors,Ke=M.schema,Xe=(0,h.default)(M,["data","errors","schema"]);return(0,l.fakeApi)("xxx/validation").then(function(sn){return{name:"select1",error:["\u5916\u90E8\u6821\u9A8C\u9519\u8BEF"]}})};return S.default.createElement("div",{style:{width:"400px"}},S.default.createElement(p.default,{form:a,schema:C,beforeFinish:v,onFinish:u}),S.default.createElement(i.default,{type:"primary",onClick:a.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},R=c,n.abrupt("return",R);case 42:case"end":return n.stop()}},P)}));function I(){return F.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Ce}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-1"}},"form-methods-demo-2":{component:Object(W.dynamic)({loader:function(){var F=Object(x.a)(b.a.mark(function P(){var m,i,h,y,S,o,p,l,A,w,C,c,R;return b.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return w=function(a,u){if(!u&&a&&a.__esModule)return a;if(a===null||typeof a!="object"&&typeof a!="function")return{default:a};var v=A(u);if(v&&v.has(a))return v.get(a);var O={},M=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var B in a)if(B!=="default"&&Object.prototype.hasOwnProperty.call(a,B)){var $=M?Object.getOwnPropertyDescriptor(a,B):null;$&&($.get||$.set)?Object.defineProperty(O,B,$):O[B]=a[B]}return O.default=a,v&&v.set(a,O),O},A=function(a){if(typeof WeakMap!="function")return null;var u=new WeakMap,v=new WeakMap;return(A=function(M){return M?v:u})(a)},m=e("K+nK"),n.next=5,e.e(23).then(e.t.bind(null,"lfLe",7));case 5:return n.t0=m,n.next=8,e.e(24).then(e.t.bind(null,"Cp9S",7));case 8:return n.t1=n.sent,i=(0,n.t0)(n.t1),n.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return n.t2=m,n.next=15,e.e(8).then(e.t.bind(null,"4IMT",7));case 15:return n.t3=n.sent,h=(0,n.t2)(n.t3),n.next=19,e.e(15).then(e.t.bind(null,"tL+A",7));case 19:return n.t4=m,n.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return n.t5=n.sent,y=(0,n.t4)(n.t5),n.t6=m,n.next=27,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 27:return n.t7=n.sent,S=(0,n.t6)(n.t7),n.next=31,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 31:return o=n.sent,n.t8=w,n.next=35,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 35:return n.t9=n.sent,p=(0,n.t8)(n.t9),n.next=39,e.e(16).then(e.bind(null,"OH0R"));case 39:return l=n.sent,C={type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F\u8303\u56F4",type:"range",format:"date"}}},c=function(){var a=(0,p.useForm)(),u=function(M,B){B.length>0?y.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(B.map(function($){return $.name}))):(0,l.fakeApi)("xxx/submit",M).then(function($){return y.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},v=function(){(0,l.fakeApi)("xxx/getForm").then(function(M){a.setValues({startDate:"2020-04-04",endDate:"2020-04-24"})})};return S.default.createElement("div",{style:{width:"400px"}},S.default.createElement(p.default,{form:a,schema:C,onFinish:u}),S.default.createElement(i.default,null,S.default.createElement(h.default,{onClick:v},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),S.default.createElement(h.default,{type:"primary",onClick:a.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},R=c,n.abrupt("return",R);case 44:case"end":return n.stop()}},P)}));function I(){return F.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Ce}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-2"}},"form-methods-demo-3":{component:Object(W.dynamic)({loader:function(){var F=Object(x.a)(b.a.mark(function P(){var m,i,h,y,S,o,p,l,A,w,C,c;return b.a.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return A=function(t,a){if(!a&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var u=l(a);if(u&&u.has(t))return u.get(t);var v={},O=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var M in t)if(M!=="default"&&Object.prototype.hasOwnProperty.call(t,M)){var B=O?Object.getOwnPropertyDescriptor(t,M):null;B&&(B.get||B.set)?Object.defineProperty(v,M,B):v[M]=t[M]}return v.default=t,u&&u.set(t,v),v},l=function(t){if(typeof WeakMap!="function")return null;var a=new WeakMap,u=new WeakMap;return(l=function(O){return O?u:a})(t)},m=e("K+nK"),f.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return f.t0=m,f.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return f.t1=f.sent,i=(0,f.t0)(f.t1),f.next=12,e.e(15).then(e.t.bind(null,"tL+A",7));case 12:return f.t2=m,f.next=15,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 15:return f.t3=f.sent,h=(0,f.t2)(f.t3),f.t4=A,f.next=20,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 20:return f.t5=f.sent,y=(0,f.t4)(f.t5),f.next=24,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 24:return S=f.sent,f.t6=A,f.next=28,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 28:return f.t7=f.sent,o=(0,f.t6)(f.t7),f.next=32,e.e(16).then(e.bind(null,"OH0R"));case 32:return p=f.sent,w={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select1:{title:"\u5355\u9009",type:"string",widget:"select"}}}}},C=function(){var t=(0,o.useForm)(),a=function(){t.setSchemaByPath("obj1.select1",{enum:["east","south","west","north"],enumNames:["\u4E1C","\u5357","\u897F","\u5317"]})},u=function(O,M){M.length>0?h.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(M.map(function(B){return B.name}))):h.default.info(JSON.stringify(O))};return y.default.createElement("div",{style:{width:"400px"}},y.default.createElement(o.default,{form:t,schema:w,onMount:a,onFinish:u}),y.default.createElement(i.default,{type:"primary",onClick:t.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},c=C,f.abrupt("return",c);case 37:case"end":return f.stop()}},P)}));function I(){return F.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Ce}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-3"}},"function-demo":{component:Object(W.dynamic)({loader:function(){var F=Object(x.a)(b.a.mark(function P(){var m,i,h,y,S,o,p,l;return b.a.wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return S=function(c,R){if(!R&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var f=y(R);if(f&&f.has(c))return f.get(c);var n={},t=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in c)if(a!=="default"&&Object.prototype.hasOwnProperty.call(c,a)){var u=t?Object.getOwnPropertyDescriptor(c,a):null;u&&(u.get||u.set)?Object.defineProperty(n,a,u):n[a]=c[a]}return n.default=c,f&&f.set(c,n),n},y=function(c){if(typeof WeakMap!="function")return null;var R=new WeakMap,f=new WeakMap;return(y=function(t){return t?f:R})(c)},m=e("K+nK"),w.t0=m,w.next=6,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 6:return w.t1=w.sent,i=(0,w.t0)(w.t1),w.t2=S,w.next=11,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 11:return w.t3=w.sent,h=(0,w.t2)(w.t3),o={type:"object",properties:{checkbox1:{title:"\u5C55\u793A\u66F4\u591A\u5185\u5BB9",type:"boolean"},select1:{title:"\u8BF7\u5047\u539F\u56E0",type:"string",enum:["a","b","c"],enumNames:["\u75C5\u5047","\u6709\u4E8B","\u5176\u5B83 (\u9700\u6CE8\u660E\u5177\u4F53\u539F\u56E0)"],hidden:"{{formData.checkbox1 !== true}}",widget:"radio"},input1:{title:"\u5177\u4F53\u539F\u56E0",type:"string",format:"textarea",hidden:'{{rootValue.checkbox1 !== true || formData.select1 !== "c"}}'}}},p=function(){var c=(0,h.useForm)();return i.default.createElement(h.default,{form:c,schema:o})},l=p,w.abrupt("return",l);case 17:case"end":return w.stop()}},P)}));function I(){return F.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo1;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo"}},"function-demo-1":{component:Object(W.dynamic)({loader:function(){var F=Object(x.a)(b.a.mark(function P(){var m,i,h,y,S;return b.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return m=e("K+nK"),p.t0=m,p.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return p.t1=p.sent,i=(0,p.t0)(p.t1),p.t2=m,p.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(17)]).then(e.bind(null,"c2mQ"));case 9:return p.t3=p.sent,h=(0,p.t2)(p.t3),p.next=13,e.e(21).then(e.bind(null,"8iYR"));case 13:return y=p.sent,S=function(){return i.default.createElement(h.default,{schema:y.expression})},p.abrupt("return",S);case 16:case"end":return p.stop()}},P)}));function I(){return F.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { expression } from '../json/schema';

export default () => <FR schema={expression} />;`},"demo/FR.jsx":{import:"../demo/FR",content:oe},"json/schema.js":{import:"../json/schema",content:$n}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo-1"}},"lifeCycle-demo":{component:Object(W.dynamic)({loader:function(){var F=Object(x.a)(b.a.mark(function P(){var m,i,h,y,S,o,p,l,A;return b.a.wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return S=function(R,f){if(!f&&R&&R.__esModule)return R;if(R===null||typeof R!="object"&&typeof R!="function")return{default:R};var n=y(f);if(n&&n.has(R))return n.get(R);var t={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in R)if(u!=="default"&&Object.prototype.hasOwnProperty.call(R,u)){var v=a?Object.getOwnPropertyDescriptor(R,u):null;v&&(v.get||v.set)?Object.defineProperty(t,u,v):t[u]=R[u]}return t.default=R,n&&n.set(R,t),t},y=function(R){if(typeof WeakMap!="function")return null;var f=new WeakMap,n=new WeakMap;return(y=function(a){return a?n:f})(R)},C.t0=S,C.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return C.t1=C.sent,m=(0,C.t0)(C.t1),C.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 9:return i=C.sent,C.t2=S,C.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 13:return C.t3=C.sent,h=(0,C.t2)(C.t3),o=function(R){return new Promise(function(f){return setTimeout(f,R)})},p={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u9009\u62E9\u6846",description:"\u52A0\u8F7D\u4E2D...",type:"string",enum:[],widget:"radio"}}},l=function(){var R=(0,h.useForm)(),f=function(){R.setValues({input1:"hello world"}),o(3e3).then(function(t){R.setSchemaByPath("select1",{description:"",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]})})};return m.default.createElement(h.default,{form:R,schema:p,onMount:f})},A=l,C.abrupt("return",A);case 20:case"end":return C.stop()}},P)}));function I(){return F.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.6.9"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"lifeCycle-demo"}},"listDisplay-demo":{component:Object(W.dynamic)({loader:function(){var F=Object(x.a)(b.a.mark(function P(){var m,i,h,y,S,o;return b.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return m=e("K+nK"),l.t0=m,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,i=(0,l.t0)(l.t1),l.t2=m,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,h=(0,l.t2)(l.t3),y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},S=function(){return i.default.createElement(h.default,{schema:y})},o=S,l.abrupt("return",o);case 15:case"end":return l.stop()}},P)}));function I(){return F.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Te}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo"}},"listDisplay-demo-1":{component:Object(W.dynamic)({loader:function(){var F=Object(x.a)(b.a.mark(function P(){var m,i,h,y,S,o;return b.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return m=e("K+nK"),l.t0=m,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,i=(0,l.t0)(l.t1),l.t2=m,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,h=(0,l.t2)(l.t3),y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},S=function(){return i.default.createElement(h.default,{schema:y})},o=S,l.abrupt("return",o);case 15:case"end":return l.stop()}},P)}));function I(){return F.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Te}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-1"}},"listDisplay-demo-2":{component:Object(W.dynamic)({loader:function(){var F=Object(x.a)(b.a.mark(function P(){var m,i,h,y,S,o;return b.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return m=e("K+nK"),l.t0=m,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,i=(0,l.t0)(l.t1),l.t2=m,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,h=(0,l.t2)(l.t3),y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},S=function(){return i.default.createElement(h.default,{schema:y})},o=S,l.abrupt("return",o);case 15:case"end":return l.stop()}},P)}));function I(){return F.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Te}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-2"}},"listDisplay-demo-3":{component:Object(W.dynamic)({loader:function(){var F=Object(x.a)(b.a.mark(function P(){var m,i,h,y,S,o;return b.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return m=e("K+nK"),l.t0=m,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,i=(0,l.t0)(l.t1),l.t2=m,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,h=(0,l.t2)(l.t3),y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",props:{hideMove:!0},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},S=function(){return i.default.createElement(h.default,{schema:y})},o=S,l.abrupt("return",o);case 15:case"end":return l.stop()}},P)}));function I(){return F.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Te}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-3"}},"listDisplay-demo-4":{component:Object(W.dynamic)({loader:function(){var F=Object(x.a)(b.a.mark(function P(){var m,i,h,y,S,o;return b.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return m=e("K+nK"),l.t0=m,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,i=(0,l.t0)(l.t1),l.t2=m,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,h=(0,l.t2)(l.t3),window.hello=function(A){var w=A.value;console.log(w)},y={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list4",itemProps:{buttons:[{callback:"hello",text:"\u590D\u5236"}]},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},S=function(){return i.default.createElement(h.default,{schema:y})},o=S,l.abrupt("return",o);case 16:case"end":return l.stop()}},P)}));function I(){return F.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Te}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-4"}},"mapping-demo":{component:Object(W.dynamic)({loader:function(){var F=Object(x.a)(b.a.mark(function P(){var m,i,h,y,S,o,p,l,A,w,C;return b.a.wrap(function(R){for(;;)switch(R.prev=R.next){case 0:return p=function(n,t){if(!t&&n&&n.__esModule)return n;if(n===null||typeof n!="object"&&typeof n!="function")return{default:n};var a=o(t);if(a&&a.has(n))return a.get(n);var u={},v=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var O in n)if(O!=="default"&&Object.prototype.hasOwnProperty.call(n,O)){var M=v?Object.getOwnPropertyDescriptor(n,O):null;M&&(M.get||M.set)?Object.defineProperty(u,O,M):u[O]=n[O]}return u.default=n,a&&a.set(n,u),u},o=function(n){if(typeof WeakMap!="function")return null;var t=new WeakMap,a=new WeakMap;return(o=function(v){return v?a:t})(n)},m=e("K+nK"),R.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return R.t0=m,R.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return R.t1=R.sent,i=(0,R.t0)(R.t1),R.t2=m,R.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return R.t3=R.sent,h=(0,R.t2)(R.t3),R.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 17:return y=R.sent,R.t4=p,R.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 21:return R.t5=R.sent,S=(0,R.t4)(R.t5),l=function(n){var t=n.schema;return t.$id==="#"?h.default.createElement("div",null,n.children):h.default.createElement("div",null,"my custom object:",n.children)},A={type:"object",properties:{object2:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u8F93\u5165\u6846",type:"string"}}}},labelWidth:120,displayType:"row"},w=function(){var n=(0,S.useForm)(),t=function(u,v){console.log("formData:",u,"errors",v)};return h.default.createElement("div",null,h.default.createElement(S.default,{form:n,schema:A,onFinish:t,mapping:{object:"CustomComA"},widgets:{CustomComA:l}}),h.default.createElement(i.default,{type:"primary",onClick:n.submit},"\u63D0\u4EA4"))},C=w,R.abrupt("return",C);case 28:case"end":return R.stop()}},P)}));function I(){return F.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},"react-dom":{version:">=16.8.0"}},identifier:"mapping-demo"}},"watch-demo":{component:Object(W.dynamic)({loader:function(){var F=Object(x.a)(b.a.mark(function P(){var m,i,h,y,S,o,p,l;return b.a.wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return S=function(c,R){if(!R&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var f=y(R);if(f&&f.has(c))return f.get(c);var n={},t=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in c)if(a!=="default"&&Object.prototype.hasOwnProperty.call(c,a)){var u=t?Object.getOwnPropertyDescriptor(c,a):null;u&&(u.get||u.set)?Object.defineProperty(n,a,u):n[a]=c[a]}return n.default=c,f&&f.set(c,n),n},y=function(c){if(typeof WeakMap!="function")return null;var R=new WeakMap,f=new WeakMap;return(y=function(t){return t?f:R})(c)},w.t0=S,w.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return w.t1=w.sent,m=(0,w.t0)(w.t1),w.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 9:return i=w.sent,w.t2=S,w.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 13:return w.t3=w.sent,h=(0,w.t2)(w.t3),o={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"}}},p=function(){var c=(0,h.useForm)(),R={"#":function(n){console.log("\u8868\u5355\u7684\u65F6\u65F6\u6570\u636E\u4E3A\uFF1A",n)},input1:function(n){c.setValueByPath("input2",n)}};return m.default.createElement(h.default,{form:c,schema:o,watch:R})},l=p,w.abrupt("return",l);case 19:case"end":return w.stop()}},P)}));function I(){return F.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.6.9"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo"}},"watch-demo-1":{component:Object(W.dynamic)({loader:function(){var F=Object(x.a)(b.a.mark(function P(){var m,i,h,y,S,o,p,l,A,w;return b.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return p=function(f,n){if(!n&&f&&f.__esModule)return f;if(f===null||typeof f!="object"&&typeof f!="function")return{default:f};var t=o(n);if(t&&t.has(f))return t.get(f);var a={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in f)if(v!=="default"&&Object.prototype.hasOwnProperty.call(f,v)){var O=u?Object.getOwnPropertyDescriptor(f,v):null;O&&(O.get||O.set)?Object.defineProperty(a,v,O):a[v]=f[v]}return a.default=f,t&&t.set(f,a),a},o=function(f){if(typeof WeakMap!="function")return null;var n=new WeakMap,t=new WeakMap;return(o=function(u){return u?t:n})(f)},m=e("K+nK"),c.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return c.t0=m,c.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return c.t1=c.sent,i=(0,c.t0)(c.t1),c.t2=p,c.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return c.t3=c.sent,h=(0,c.t2)(c.t3),c.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 17:return y=c.sent,c.t4=p,c.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 21:return c.t5=c.sent,S=(0,c.t4)(c.t5),l={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"radio"}}}}},A=function(){var f=(0,S.useForm)(),n=function(u,v){v.length>0?alert("errorFields:"+JSON.stringify(v)):alert("formData:"+JSON.stringify(u,null,2))},t={input1:function(u){u&&u.length>2?f.setSchemaByPath("obj1.select",function(v){var O=v.enumNames;return{enumNames:O.map(function(M){return M+"a"})}}):f.setSchemaByPath("obj1.select",{enumNames:["\u65E9","\u4E2D","\u665A"]})}};return h.default.createElement("div",null,h.default.createElement(S.default,{form:f,schema:l,onFinish:n,watch:t}),h.default.createElement(i.default,{type:"",style:{marginRight:8},onClick:function(){return f.setSchemaByPath("input2",{title:"\u7F16\u8F91\u6846",format:"textarea"})}},"\u5C06 input \u6539\u4E3A textarea"),h.default.createElement(i.default,{type:"primary",onClick:f.submit},"\u63D0\u4EA4"))},w=A,c.abrupt("return",w);case 27:case"end":return c.stop()}},P)}));function I(){return F.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo-1"}},"widget-demo":{component:Object(W.dynamic)({loader:function(){var F=Object(x.a)(b.a.mark(function P(){var m,i,h,y,S,o,p,l,A,w,C,c,R;return b.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return A=function(a,u){if(!u&&a&&a.__esModule)return a;if(a===null||typeof a!="object"&&typeof a!="function")return{default:a};var v=l(u);if(v&&v.has(a))return v.get(a);var O={},M=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var B in a)if(B!=="default"&&Object.prototype.hasOwnProperty.call(a,B)){var $=M?Object.getOwnPropertyDescriptor(a,B):null;$&&($.get||$.set)?Object.defineProperty(O,B,$):O[B]=a[B]}return O.default=a,v&&v.set(a,O),O},l=function(a){if(typeof WeakMap!="function")return null;var u=new WeakMap,v=new WeakMap;return(l=function(M){return M?v:u})(a)},m=e("K+nK"),n.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return n.t0=m,n.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return n.t1=n.sent,i=(0,n.t0)(n.t1),n.next=12,Promise.all([e.e(3),e.e(19)]).then(e.t.bind(null,"cUip",7));case 12:return n.t2=m,n.next=15,Promise.all([e.e(0),e.e(8),e.e(18),e.e(20)]).then(e.t.bind(null,"iJl9",7));case 15:return n.t3=n.sent,h=(0,n.t2)(n.t3),n.t4=m,n.next=20,e.e(88).then(e.bind(null,"0Owb"));case 20:return n.t5=n.sent,y=(0,n.t4)(n.t5),n.t6=m,n.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return n.t7=n.sent,S=(0,n.t6)(n.t7),n.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 29:return o=n.sent,n.t8=A,n.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 33:return n.t9=n.sent,p=(0,n.t8)(n.t9),w={type:"object",properties:{string:{title:"\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6",type:"string",widget:"site"},select:{title:"\u5355\u9009",type:"number",enum:[1,2,3],enumNames:["\u9009\u98791","\u9009\u98792","\u9009\u98793"]}}},C=function(a){return console.log("widget props:",a),S.default.createElement(h.default,(0,y.default)({addonBefore:"https://",addonAfter:".com"},a))},c=function(){var a=(0,p.useForm)();return S.default.createElement("div",null,S.default.createElement(p.default,{form:a,schema:w,widgets:{site:C},onFinish:function(v){return alert(JSON.stringify(v,null,2))}}),S.default.createElement(i.default,{type:"primary",onClick:a.submit},"\u63D0\u4EA4"))},R=c,n.abrupt("return",R);case 40:case"end":return n.stop()}},P)}));function I(){return F.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},"react-dom":{version:">=16.8.0"}},identifier:"widget-demo"}},"form-render-dependencies":{component:Object(W.dynamic)({loader:function(){var F=Object(x.a)(b.a.mark(function P(){return b.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"ODQR"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},P)}));function I(){return F.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:Re}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-dependencies"}},"measure-demo":{component:Object(W.dynamic)({loader:function(){var F=Object(x.a)(b.a.mark(function P(){var m,i,h,y,S,o,p,l,A,w;return b.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return l=function(f,n){if(!n&&f&&f.__esModule)return f;if(f===null||typeof f!="object"&&typeof f!="function")return{default:f};var t=p(n);if(t&&t.has(f))return t.get(f);var a={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in f)if(v!=="default"&&Object.prototype.hasOwnProperty.call(f,v)){var O=u?Object.getOwnPropertyDescriptor(f,v):null;O&&(O.get||O.set)?Object.defineProperty(a,v,O):a[v]=f[v]}return a.default=f,t&&t.set(f,a),a},p=function(f){if(typeof WeakMap!="function")return null;var n=new WeakMap,t=new WeakMap;return(p=function(u){return u?t:n})(f)},m=e("K+nK"),c.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return c.t0=m,c.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return c.t1=c.sent,i=(0,c.t0)(c.t1),c.next=12,e.e(15).then(e.t.bind(null,"tL+A",7));case 12:return c.t2=m,c.next=15,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 15:return c.t3=c.sent,h=(0,c.t2)(c.t3),c.t4=l,c.next=20,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 20:return c.t5=c.sent,y=(0,c.t4)(c.t5),c.next=24,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 24:return S=c.sent,c.t6=l,c.next=28,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 28:return c.t7=c.sent,o=(0,c.t6)(c.t7),A=function(){var f=(0,o.useForm)({logOnMount:function(u){console.log("onMount",u)},logOnSubmit:function(u){console.log("onSubmit",u)}}),n={type:"object",properties:{input1:{title:"\u8F93\u5165\u6846",required:!0,type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u5DE6","\u4E2D","\u53F3"],widget:"radio"}}},t=function(u,v){v.length>0?h.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(v.map(function(O){return O.name}))):h.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")};return y.default.createElement("div",null,y.default.createElement(o.default,{id:"my-demo-form",form:f,schema:n,onFinish:t}),y.default.createElement(i.default,{type:"primary",onClick:f.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},w=A,c.abrupt("return",w);case 33:case"end":return c.stop()}},P)}));function I(){return F.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"measure-demo"}},"migrate-demo":{component:Object(W.dynamic)({loader:function(){var F=Object(x.a)(b.a.mark(function P(){var m,i,h,y,S,o,p,l;return b.a.wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return p=function(){var c=(0,h.useForm)(),R=function(n,t){t.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(t))):alert(JSON.stringify(n))};return i.default.createElement("div",null,i.default.createElement(h.default,{form:c,schema:o,onFinish:R}),i.default.createElement("button",{onClick:c.submit},"\u63D0\u4EA4"))},S=function(c,R){if(!R&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var f=y(R);if(f&&f.has(c))return f.get(c);var n={},t=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in c)if(a!=="default"&&Object.prototype.hasOwnProperty.call(c,a)){var u=t?Object.getOwnPropertyDescriptor(c,a):null;u&&(u.get||u.set)?Object.defineProperty(n,a,u):n[a]=c[a]}return n.default=c,f&&f.set(c,n),n},y=function(c){if(typeof WeakMap!="function")return null;var R=new WeakMap,f=new WeakMap;return(y=function(t){return t?f:R})(c)},m=e("K+nK"),w.t0=m,w.next=7,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 7:return w.t1=w.sent,i=(0,w.t0)(w.t1),w.t2=S,w.next=12,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 12:return w.t3=w.sent,h=(0,w.t2)(w.t3),o={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}},l=p,w.abrupt("return",l);case 17:case"end":return w.stop()}},P)}));function I(){return F.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate-demo"}},"migrate-demo-1":{component:Object(W.dynamic)({loader:function(){var F=Object(x.a)(b.a.mark(function P(){var m,i,h,y,S,o,p,l,A,w,C,c,R;return b.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return A=function(a,u){if(!u&&a&&a.__esModule)return a;if(a===null||typeof a!="object"&&typeof a!="function")return{default:a};var v=l(u);if(v&&v.has(a))return v.get(a);var O={},M=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var B in a)if(B!=="default"&&Object.prototype.hasOwnProperty.call(a,B)){var $=M?Object.getOwnPropertyDescriptor(a,B):null;$&&($.get||$.set)?Object.defineProperty(O,B,$):O[B]=a[B]}return O.default=a,v&&v.set(a,O),O},l=function(a){if(typeof WeakMap!="function")return null;var u=new WeakMap,v=new WeakMap;return(l=function(M){return M?v:u})(a)},m=e("K+nK"),n.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return n.t0=m,n.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return n.t1=n.sent,i=(0,n.t0)(n.t1),n.t2=m,n.next=13,Promise.resolve().then(e.bind(null,"tJVT"));case 13:return n.t3=n.sent,h=(0,n.t2)(n.t3),n.next=17,Promise.all([e.e(3),e.e(19)]).then(e.t.bind(null,"cUip",7));case 17:return n.t4=m,n.next=20,Promise.all([e.e(0),e.e(8),e.e(18),e.e(20)]).then(e.t.bind(null,"iJl9",7));case 20:return n.t5=n.sent,y=(0,n.t4)(n.t5),n.t6=A,n.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return n.t7=n.sent,S=(0,n.t6)(n.t7),n.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 29:return o=n.sent,n.next=32,Promise.all([e.e(22),e.e(25)]).then(e.bind(null,"7t+U"));case 32:return p=n.sent,w=y.default.TextArea,C={type:"object",properties:{number:{title:"\u6570\u5B57\u8F93\u5165\u6846",type:"number","ui:disabled":!0},checkbox:{title:"\u662F\u5426\u9009\u62E9",type:"boolean","ui:widget":"switch"}},required:["number"]},c=function(){var a=(0,S.useState)(JSON.stringify(C)),u=(0,h.default)(a,2),v=u[0],O=u[1],M=(0,S.useState)({}),B=(0,h.default)(M,2),$=B[0],Ke=B[1],Xe=function(){try{var Fn=(0,p.updateSchemaToNewVersion)(JSON.parse(v));Ke(Fn)}catch(Gn){console.log(Gn)}},sn=function(Fn){O(Fn.target.value)},Tn=function(){O(JSON.stringify(JSON.parse(v),null,2))};return S.default.createElement("div",null,S.default.createElement("div",null,"\u586B\u5165\u65E7\u7248schema\uFF1A"),S.default.createElement(w,{style:{minHeight:400,marginTop:12,marginBottom:12},value:v,onChange:sn}),S.default.createElement(i.default,{style:{marginRight:12},onClick:Tn},"\u683C\u5F0F\u5316\u65E7schema"),S.default.createElement(i.default,{type:"primary",onClick:Xe},"\u751F\u6210\u65B0\u7248schema"),S.default.createElement(w,{style:{minHeight:400,marginTop:12},value:JSON.stringify($,null,2)}))},R=c,n.abrupt("return",R);case 38:case"end":return n.stop()}},P)}));function I(){return F.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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

export default Translator;`},"packages/form-render/src/utils.js":{import:"../../packages/form-render/src/utils.js",content:J}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"},"lodash-es":{version:"4.17.21"}},identifier:"migrate-demo-1"}},"migrate2-demo":{component:Object(W.dynamic)({loader:function(){var F=Object(x.a)(b.a.mark(function P(){var m,i,h,y,S,o,p,l,A;return b.a.wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return l=function(){var R=(0,h.useState)({}),f=(0,i.default)(R,2),n=f[0],t=f[1],a=(0,h.useState)([]),u=(0,i.default)(a,2),v=u[0],O=u[1],M=(0,h.useState)(!1),B=(0,i.default)(M,2),$=B[0],Ke=B[1],Xe=(0,y.useForm)({formData:n,onChange:t,onValidate:O,showValidate:$});(0,h.useEffect)(function(){Xe.init()},[]);var sn=function(){Ke(!0),v.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(v))):alert(JSON.stringify(n))};return h.default.createElement("div",null,h.default.createElement(y.default,{form:Xe,schema:p}),h.default.createElement("button",{onClick:sn},"\u63D0\u4EA4"))},o=function(R,f){if(!f&&R&&R.__esModule)return R;if(R===null||typeof R!="object"&&typeof R!="function")return{default:R};var n=S(f);if(n&&n.has(R))return n.get(R);var t={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in R)if(u!=="default"&&Object.prototype.hasOwnProperty.call(R,u)){var v=a?Object.getOwnPropertyDescriptor(R,u):null;v&&(v.get||v.set)?Object.defineProperty(t,u,v):t[u]=R[u]}return t.default=R,n&&n.set(R,t),t},S=function(R){if(typeof WeakMap!="function")return null;var f=new WeakMap,n=new WeakMap;return(S=function(a){return a?n:f})(R)},m=e("K+nK"),C.t0=m,C.next=7,Promise.resolve().then(e.bind(null,"tJVT"));case 7:return C.t1=C.sent,i=(0,C.t0)(C.t1),C.t2=o,C.next=12,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 12:return C.t3=C.sent,h=(0,C.t2)(C.t3),C.t4=o,C.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 17:return C.t5=C.sent,y=(0,C.t4)(C.t5),p={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}},A=l,C.abrupt("return",A);case 22:case"end":return C.stop()}},P)}));function I(){return F.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
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
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate2-demo"}},"schema-demo":{component:Object(W.dynamic)({loader:function(){var F=Object(x.a)(b.a.mark(function P(){var m,i,h,y,S;return b.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return m=e("K+nK"),p.t0=m,p.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return p.t1=p.sent,i=(0,p.t0)(p.t1),p.t2=m,p.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(17)]).then(e.bind(null,"c2mQ"));case 9:return p.t3=p.sent,h=(0,p.t2)(p.t3),p.next=13,e.e(21).then(e.bind(null,"8iYR"));case 13:return y=p.sent,S=function(){return i.default.createElement(h.default,{schema:y.basic})},p.abrupt("return",S);case 16:case"end":return p.stop()}},P)}));function I(){return F.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { basic } from '../json/schema';

export default () => <FR schema={basic} />;`},"demo/FR.jsx":{import:"../demo/FR",content:oe},"json/schema.js":{import:"../json/schema",content:$n}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo"}},"schema-demo-1":{component:Object(W.dynamic)({loader:function(){var F=Object(x.a)(b.a.mark(function P(){var m,i,h,y,S;return b.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return m=e("K+nK"),p.t0=m,p.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return p.t1=p.sent,i=(0,p.t0)(p.t1),p.t2=m,p.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(17)]).then(e.bind(null,"c2mQ"));case 9:return p.t3=p.sent,h=(0,p.t2)(p.t3),p.next=13,e.e(21).then(e.bind(null,"8iYR"));case 13:return y=p.sent,S=function(){return i.default.createElement(h.default,{schema:y.titleTrick})},p.abrupt("return",S);case 16:case"end":return p.stop()}},P)}));function I(){return F.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { titleTrick } from '../json/schema';

export default () => <FR schema={titleTrick} />;`},"demo/FR.jsx":{import:"../demo/FR",content:oe},"json/schema.js":{import:"../json/schema",content:$n}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo-1"}},"docs-playground":{component:Object(W.dynamic)({loader:function(){var F=Object(x.a)(b.a.mark(function P(){return b.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"BASV"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},P)}));function I(){return F.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:jn},"main.js":{import:"./main",content:Dn},"json/simplest.json":{import:"./json/simplest.json",content:pn},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:an},"monaco/index.js":{import:"./monaco",content:$e},"theme.css":{import:"./theme.css",content:An},"index.css":{import:"./index.css",content:Pn}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:"^16.0.0"},"react-dom":{version:"^16.0.0"},"deep-equal":{version:"2.0.5"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.6.9"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-simple-code-editor":{version:"0.11.0"},prismjs:{version:"1.23.0"}},identifier:"docs-playground"}},"docs-playground1":{component:Object(W.dynamic)({loader:function(){var F=Object(x.a)(b.a.mark(function P(){return b.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"Wrpt"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},P)}));function I(){return F.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:hn},"main.js":{import:"./main",content:Fe},"json/simplest.json":{import:"./json/simplest.json",content:nt},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:wn},"monaco/index.js":{import:"./monaco",content:tt},"suggestionsMap.js":{import:"./suggestionsMap",content:dt},"index.css":{import:"./index.css",content:rt}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:"^17.x"},"react-dom":{version:">=16.9.0"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.6.9"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-monaco-editor":{version:"0.44.0"},"@types/react":{version:"^17.x"}},identifier:"docs-playground1"}},"table-render-advanced":{component:Object(W.dynamic)({loader:function(){var F=Object(x.a)(b.a.mark(function P(){return b.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"7ZP+"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},P)}));function I(){return F.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{tsx:ct}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.5"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!0,identifier:"table-render-advanced"}},"table-render-nosearch":{component:Object(W.dynamic)({loader:function(){var F=Object(x.a)(b.a.mark(function P(){return b.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"CfUQ"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},P)}));function I(){return F.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{tsx:Mn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.5"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!0,identifier:"table-render-nosearch"}},"table-render-notitle":{component:Object(W.dynamic)({loader:function(){var F=Object(x.a)(b.a.mark(function P(){return b.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"/usH"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},P)}));function I(){return F.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{tsx:at}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.5"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!0,identifier:"table-render-notitle"}},"table-render-paramtable":{component:Object(W.dynamic)({loader:function(){var F=Object(x.a)(b.a.mark(function P(){return b.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"48jF"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},P)}));function I(){return F.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{tsx:Vn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.5"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},umi:{version:"3.4.19"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!0,identifier:"table-render-paramtable"}},"table-render-demo":{component:Object(W.dynamic)({loader:function(){var F=Object(x.a)(b.a.mark(function P(){var m,i,h,y,S,o,p,l,A;return b.a.wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return m=e("K+nK"),C.t0=m,C.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return C.t1=C.sent,i=(0,C.t0)(C.t1),C.next=8,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(73)]).then(e.bind(null,"P2DI"));case 8:for(h=C.sent,y=[],S=0;S<6;S++)y.push({id:S.toString(),title:"\u6807\u9898".concat(S+1),created_at:new Date().getTime()});return o={type:"object",properties:{title:{title:"\u6807\u9898",type:"string",width:"30%"},created_at:{title:"\u521B\u5EFA\u65F6\u95F4",type:"string",format:"date",width:"30%"}}},p=[{title:"\u6807\u9898",dataIndex:"title"},{title:"\u521B\u5EFA\u65F6\u95F4",key:"since",dataIndex:"created_at",valueType:"date"},{title:"\u64CD\u4F5C",render:function(R,f){return i.default.createElement("a",{onClick:function(){return alert(R.title)}},"\u7F16\u8F91")}}],l=function(){var R=function(){return{rows:y,total:y.length}};return i.default.createElement(i.default.Fragment,null,i.default.createElement(h.Search,{schema:o,api:R}),i.default.createElement(h.Table,{headerTitle:"\u6700\u7B80\u8868\u683C",columns:p,rowKey:"id"}))},A=(0,h.withTable)(l),C.abrupt("return",A);case 16:case"end":return C.stop()}},P)}));function I(){return F.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default withTable(Wrapper);`}},dependencies:{react:{version:">=16.8.0"},"table-render":{version:"1.1.5"},antd:{version:"4.x",css:"antd/dist/antd.css"}},transform:!0,defaultShowCode:!0,identifier:"table-render-demo"}},"table-render-test1":{component:Object(W.dynamic)({loader:function(){var F=Object(x.a)(b.a.mark(function P(){return b.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"aMwh"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},P)}));function I(){return F.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:mt}},dependencies:{react:{version:">=16.8.0"},"table-render":{version:"1.1.5"},antd:{version:"4.x",css:"antd/dist/antd.css"}},identifier:"table-render-test1"}},"generator-demo":{component:Object(W.dynamic)({loader:function(){var F=Object(x.a)(b.a.mark(function P(){var m,i,h,y,S,o;return b.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return m=e("K+nK"),l.t0=m,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,i=(0,l.t0)(l.t1),l.t2=m,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(72)]).then(e.bind(null,"nYSz"));case 9:return l.t3=l.sent,h=(0,l.t2)(l.t3),y={type:"object",properties:{inputName:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string"}}},S=function(){return i.default.createElement("div",{style:{height:"80vh"}},i.default.createElement(h.default,{defaultValue:y}))},o=S,l.abrupt("return",o);case 15:case"end":return l.stop()}},P)}));function I(){return F.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.4.6"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"generator-demo"}},"generator-modal":{component:Object(W.dynamic)({loader:function(){var F=Object(x.a)(b.a.mark(function P(){return b.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"PPgD"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},P)}));function I(){return F.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:Bn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.4.6"},"react-dom":{version:">=16.9.0"}},identifier:"generator-modal"}},"generator-settings":{component:Object(W.dynamic)({loader:function(){var F=Object(x.a)(b.a.mark(function P(){return b.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"M63W"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},P)}));function I(){return F.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:Kn}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.4.6"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-settings"}},"generator-layout":{component:Object(W.dynamic)({loader:function(){var F=Object(x.a)(b.a.mark(function P(){return b.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"SOdT"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},P)}));function I(){return F.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:Jn},"index.less":{import:"./index.less",content:zn}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.4.6"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-layout"}},"generator-transformer":{component:Object(W.dynamic)({loader:function(){var F=Object(x.a)(b.a.mark(function P(){return b.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"jktF"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},P)}));function I(){return F.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:Wn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.4.6"},"react-dom":{version:">=16.9.0"}},identifier:"generator-transformer"}},"generator-playground":{component:Object(W.dynamic)({loader:function(){var F=Object(x.a)(b.a.mark(function P(){return b.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"TYW4"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},P)}));function I(){return F.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:st},"index.less":{import:"./index.less",content:zn}},dependencies:{react:{version:">=16.8.0"},umi:{version:"3.4.19"},"fr-generator":{version:"2.4.6"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-playground"}}}},TIsu:function(En,un,e){},Zs1V:function(En){En.exports=JSON.parse("{}")},p8sG:function(En,un,e){"use strict";En.exports=e("80pN")},ymTJ:function(En,un,e){"use strict";e.r(un);var x=e("q1tI"),r=e.n(x),b=e("dEAq"),W=e.n(b),ue=e("0zqC"),J=e("ZpkN"),Te=e("JjdP"),Ce=r.a.memo(Te.default["measure-demo"].component);un.default=oe=>(r.a.useEffect(()=>{oe!=null&&oe.location.hash&&b.AnchorLink.scrollToAnchor(decodeURIComponent(oe.location.hash.slice(1)))},[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"\u8868\u5355\u5065\u5EB7\u5EA6--\u63D0\u6548"},r.a.createElement(b.AnchorLink,{to:"#\u8868\u5355\u5065\u5EB7\u5EA6--\u63D0\u6548","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u8868\u5355\u5065\u5EB7\u5EA6 & \u63D0\u6548"),r.a.createElement("p",null,`\u4E1A\u754C\u6709\u53E5\u8BDD\u53EB "You can't improve what you can't measure"\u3002\u5373\u662F\u8BF4\uFF0C\u5982\u679C\u65E0\u6CD5\u5EA6\u91CF\u4E00\u4EF6\u4E8B\uFF0C\u90A3\u6539\u5584\u4E5F\u65E0\u4ECE\u8C08\u8D77\u3002 FormRender \u4F5C\u4E3A\u8868\u5355\u63D0\u6548\u7684\u65B9\u6848\uFF0C\u63D0\u6548\u7684\u540C\u65F6\u4E5F\u9700\u8981\u7ED9\u51FA\u5408\u7406\u7684\u5EA6\u91CF\u6570\u636E\uFF0C\u5E2E\u52A9\u4F7F\u7528\u8005\u66F4\u597D\u5730\u8BA4\u77E5\u548C\u53D1\u73B0\u95EE\u9898\u3002`),r.a.createElement("p",null,"\u76EE\u524D FormRender \u63D0\u4F9B\u4E86\u4E24\u4E2A\u89E6\u53D1\u65F6\u673A\u4EE5\u53CA\u4E00\u7CFB\u5217\u76F8\u5173\u6570\u636E\u4F5C\u4E3A\u5BF9\u5916\u5F00\u653E\u63A5\u53E3\uFF0C\u63A8\u8350\u7528\u6237\u7528\u4E8E\u63A5\u5165\u9002\u5408\u81EA\u5DF1\u9879\u76EE\u7684\u57CB\u70B9 & \u6570\u636E\u76D1\u63A7\u65B9\u6848\u3002"),r.a.createElement("h2",{id:"roadmap"},r.a.createElement(b.AnchorLink,{to:"#roadmap","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"RoadMap"),r.a.createElement("p",null,"\u6570\u636E"),r.a.createElement("ul",null,r.a.createElement("li",null,"\u4E00\u671F\u6211\u4EEC\u7684\u5EA6\u91CF\u4F1A\u662F\u66F4\u4E3A\u6574\u4F53\u7684\u6570\u636E\uFF1A\u4F8B\u5982\u8868\u5355\u7684\u62A5\u9519\u548C\u63D0\u4EA4\u662F\u5426\u6210\u529F\uFF0C\u6574\u4F53\u8868\u5355\u63D0\u4EA4\u65F6\u957F\u7B49\u3002"),r.a.createElement("li",null,"\u4E8C\u671F\u6211\u4EEC\u4F1A\u63D0\u4F9B\u66F4\u4E3A\u7EC6\u81F4\u7684\u6570\u636E\u8FDB\u4E00\u6B65\u627E\u5BFB\u5230\u5982\u679C\u4E00\u4E2A\u8868\u5355\u7684\u7528\u6237\u586B\u5199\u6548\u7387\u4F4E\u4E0B\uFF0C\u662F\u54EA\u4E2A\u8868\u5355\u539F\u4EF6\u548C\u64CD\u4F5C\u9020\u6210\u4E86\u7F13\u6162\uFF0C\u66F4\u8FDB\u4E00\u6B65\u4EE5\u6570\u636E\u7ED9\u51FA\u4F18\u5316\u7684\u6307\u5F15")),r.a.createElement("p",null,"\u65B9\u6848"),r.a.createElement("ul",null,r.a.createElement("li",null,"\u4E00\u671F\u6211\u4EEC\u5BF9\u5916\u63D0\u4F9B\u4E86\u89E6\u53D1\u94A9\u5B50\u4EE5\u53CA\u6570\u636E\uFF0C\u8BA9\u7528\u6237\u81EA\u884C\u9009\u62E9\u76D1\u63A7\u548C\u6570\u636E\u57CB\u70B9\u65B9\u6848"),r.a.createElement("li",null,"\u4E8C\u671F\u6211\u4EEC\u4F1A\u7ED9\u51FA\u5168\u5957\u7684\u670D\u52A1\uFF0C\u53EA\u9700\u8981\u7B80\u5355\u6CE8\u518C\u5373\u53EF\u83B7\u53D6\u8868\u5355\u5065\u5EB7\u4FE1\u606F")),r.a.createElement("h2",{id:"\u4F7F\u7528"},r.a.createElement(b.AnchorLink,{to:"#\u4F7F\u7528","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u4F7F\u7528"),r.a.createElement("p",null,"\u63D0\u4F9B\u4E86 ",r.a.createElement("code",null,"logOnMount")," \u548C ",r.a.createElement("code",null,"logOnSubmit")," \u4E24\u4E2A\u94A9\u5B50\u3002\u5728\u4F7F\u7528 ",r.a.createElement("code",null,"useForm")," \u65F6\u6CE8\u5165\uFF1A"),r.a.createElement(J.a,{code:`const form = useForm({
  logOnMount: info => {
    console.log('onMount', info);
  },
  logOnSubmit: info => {
    console.log('onSubmit', info);
  },
});`,lang:"js"}),r.a.createElement("p",null,"\u6700\u7B80\u4F7F\u7528\u6837\u4F8B\u5982\u4E0B\uFF0C\u6548\u679C\u89C1 console")),r.a.createElement(ue.default,Te.default["measure-demo"].previewerProps,r.a.createElement(Ce,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("h3",{id:"logonmount"},r.a.createElement(b.AnchorLink,{to:"#logonmount","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"logOnMount"),r.a.createElement("p",null,"\u4F1A\u5728\u8868\u5355\u9996\u6B21\u52A0\u8F7D\u65F6\u89E6\u53D1\uFF0C\u4E00\u822C\u4E5F\u5C31\u662F\u9875\u9762\u9996\u6B21\u52A0\u8F7D\u65F6\u3002\u6837\u4F8B\u7684\u5165\u53C2\u503C\u5982\u4E0B"),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"\u53C2\u6570"),r.a.createElement("th",null,"\u63CF\u8FF0"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("strong",null,"id")),r.a.createElement("td",null,"\u8868\u5355 id\uFF0C\u53EA\u5F53\u7528\u6237\u6CE8\u660E id \u65F6\u624D\u4F1A log")),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("strong",null,"formData")),r.a.createElement("td",null,"\u8868\u5355\u503C")),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("strong",null,"schema")),r.a.createElement("td",null,"\u8868\u5355\u534F\u8BAE")),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("strong",null,"url")),r.a.createElement("td",null,"\u8868\u5355\u52A0\u8F7D\u7684\u9875\u9762\u5730\u5740")),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("strong",null,"formMount")),r.a.createElement("td",null,"\u8868\u5355\u52A0\u8F7D\u7684\u65F6\u95F4\u70B9")))),r.a.createElement(J.a,{code:`{
  id: "my-demo-form",
  schema: "{type: 'object',properties: {input1: {title: '\u8F93\u5165\u6846',required: true,type: 'string'},select1:{title: '\u5355\u9009',... }",
  url: 'https://x-render.gitee.io/form-render/measure',
  formData: '{}',
  formMount: '2021-07-02 16:03:42',
};`,lang:"js"}),r.a.createElement("h3",{id:"logonsubmit"},r.a.createElement(b.AnchorLink,{to:"#logonsubmit","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"logOnSubmit"),r.a.createElement("p",null,"\u4F1A\u5728\u8868\u5355\u6BCF\u6B21\u63D0\u4EA4\u65F6\u89E6\u53D1\u3002\u6837\u4F8B\u7684\u5165\u53C2\u503C\u5982\u4E0B"),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"\u53C2\u6570"),r.a.createElement("th",null,"\u63CF\u8FF0"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("strong",null,"duration")),r.a.createElement("td",null,"\u8868\u5355\u586B\u5199\u65F6\u957F")),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("strong",null,"ms")),r.a.createElement("td",null,"duration \u7684\u65F6\u95F4\u6233\u5F62\u5F0F")),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("strong",null,"numberOfSubmits")),r.a.createElement("td",null,"\u4ECE\u9996\u6B21\u52A0\u8F7D\u5F00\u59CB\u63D0\u4EA4\u4E86\u51E0\u6B21")),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("strong",null,"failedAttempts")),r.a.createElement("td",null,"\u4ECE\u9996\u6B21\u52A0\u8F7D\u5F00\u59CB\u63D0\u4EA4\u5931\u8D25\u4E86\u51E0\u6B21")),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("strong",null,"errors")),r.a.createElement("td",null,"\u63D0\u4EA4\u5931\u8D25\u7684\u6821\u9A8C\u4FE1\u606F")))),r.a.createElement(J.a,{code:`{
  id: "my-demo-form", // \u5982\u679C\u6CE8\u660E\u8868\u5355id\uFF0C\u4F1A\u5728\u6B64\u5904\u5C55\u793A
  formMount: '2021-07-02 16:27:28', // \u8868\u5355\u9996\u6B21\u52A0\u8F7D\u7684\u65F6\u95F4\u70B9
  ms: 35598, // duration\u7684\u65F6\u95F4\u6233\u5F62\u5F0F
  duration: '00:00:35', // \u4ECE\u8868\u5355\u52A0\u8F7D/\u4E0A\u6B21\u63D0\u4EA4\u5B8C\u6210\u5F00\u59CB\u8BA1\u65F6\uFF0C\u5230\u672C\u6B21\u63D0\u4EA4\u4F7F\u7528\u7684\u65F6\u95F4
  numberOfSubmits: 1, // \u63D0\u4EA4\u7684\u6B21\u6570\uFF08\u5931\u8D25\u4E0E\u5426\uFF09
  failedAttempts: 0, // \u63D0\u4EA4\u5931\u8D25\u7684\u6B21\u6570\uFF08\u5373\u6709\u6821\u9A8C\u672A\u901A\u8FC7\uFF09
  url: 'https://x-render.gitee.io/form-render/measure', // \u8868\u5355\u5BF9\u5E94\u9875\u9762\u7684url
  formData: "{input1: '3123',select1: 'c'}",
  schema: "{ ... }", // \u8868\u5355\u534F\u8BAE
  errors: "[]", // \u6821\u9A8C\u672A\u901A\u8FC7\u65F6\uFF0C\u5C55\u793A\u62A5\u9519\u6821\u9A8C\u4FE1\u606F
};`,lang:"js"})))))}}]);
