(window.webpackJsonp=window.webpackJsonp||[]).push([[45,13],{"0zqC":function(Fn,un,e){"use strict";e.r(un);var x=e("tJVT"),r=e("q1tI"),y=e.n(r),W=e("wx14"),ue=e("rePB"),J=e("ODXe"),Pe=e("U8pU"),Oe=e("Ff2n"),oe=e("VTBJ"),$n=e("TSYQ"),Se=e.n($n),Rn=e("Zm9Q"),jn=e("5Z9U"),pn=e("6cGi"),an=e("KQm4"),$e=e("wgJM"),Nn=e("t23M");function Dn(s){var d=Object(r.useRef)(),g=Object(r.useRef)(!1);function R(){for(var j=arguments.length,F=new Array(j),P=0;P<j;P++)F[P]=arguments[P];g.current||($e.a.cancel(d.current),d.current=Object($e.a)(function(){s.apply(void 0,F)}))}return Object(r.useEffect)(function(){return function(){g.current=!0,$e.a.cancel(d.current)}},[]),R}function hn(s){var d=Object(r.useRef)([]),g=Object(r.useState)({}),R=Object(J.a)(g,2),j=R[1],F=Object(r.useRef)(typeof s=="function"?s():s),P=Dn(function(){var K=F.current;d.current.forEach(function(L){K=L(K)}),d.current=[],F.current=K,j({})});function I(K){d.current.push(K),P()}return[F.current,I]}var Ae=e("4IlW");function nt(s,d){var g,R=s.prefixCls,j=s.id,F=s.active,P=s.rtl,I=s.tab,K=I.key,L=I.tab,V=I.disabled,G=I.closeIcon,U=s.tabBarGutter,re=s.tabPosition,Y=s.closable,X=s.renderWrapper,se=s.removeAriaLabel,z=s.editable,q=s.onClick,ne=s.onRemove,Q=s.onFocus,ae="".concat(R,"-tab");r.useEffect(function(){return ne},[]);var k={};re==="top"||re==="bottom"?k[P?"marginLeft":"marginRight"]=U:k.marginBottom=U;var pe=z&&Y!==!1&&!V;function _(te){V||q(te)}function le(te){te.preventDefault(),te.stopPropagation(),z.onEdit("remove",{key:K,event:te})}var de=r.createElement("div",{key:K,ref:d,className:Se()(ae,(g={},Object(ue.a)(g,"".concat(ae,"-with-remove"),pe),Object(ue.a)(g,"".concat(ae,"-active"),F),Object(ue.a)(g,"".concat(ae,"-disabled"),V),g)),style:k,onClick:_},r.createElement("div",{role:"tab","aria-selected":F,id:j&&"".concat(j,"-tab-").concat(K),className:"".concat(ae,"-btn"),"aria-controls":j&&"".concat(j,"-panel-").concat(K),"aria-disabled":V,tabIndex:V?null:0,onClick:function(H){H.stopPropagation(),_(H)},onKeyDown:function(H){[Ae.a.SPACE,Ae.a.ENTER].includes(H.which)&&(H.preventDefault(),_(H))},onFocus:Q},L),pe&&r.createElement("button",{type:"button","aria-label":se||"remove",tabIndex:0,className:"".concat(ae,"-remove"),onClick:function(H){H.stopPropagation(),le(H)}},G||z.removeIcon||"\xD7"));return X&&(de=X(de)),de}var wn=r.forwardRef(nt),tt={width:0,height:0,left:0,top:0};function dt(s,d,g){return Object(r.useMemo)(function(){for(var R,j=new Map,F=d.get((R=s[0])===null||R===void 0?void 0:R.key)||tt,P=F.left+F.width,I=0;I<s.length;I+=1){var K=s[I].key,L=d.get(K);if(!L){var V;L=d.get((V=s[I-1])===null||V===void 0?void 0:V.key)||tt}var G=j.get(K)||Object(oe.a)({},L);G.right=P-G.left-G.width,j.set(K,G)}return j},[s.map(function(R){return R.key}).join("_"),d,g])}var rt={width:0,height:0,left:0,top:0,right:0};function ct(s,d,g,R,j){var F=j.tabs,P=j.tabPosition,I=j.rtl,K,L,V;["top","bottom"].includes(P)?(K="width",L=I?"right":"left",V=Math.abs(d.left)):(K="height",L="top",V=-d.top);var G=d[K],U=g[K],re=R[K],Y=G;return U+re>G&&(Y=G-re),Object(r.useMemo)(function(){if(!F.length)return[0,0];for(var X=F.length,se=X,z=0;z<X;z+=1){var q=s.get(F[z].key)||rt;if(q[L]+q[K]>V+Y){se=z-1;break}}for(var ne=0,Q=X-1;Q>=0;Q-=1){var ae=s.get(F[Q].key)||rt;if(ae[L]<V){ne=Q+1;break}}return[ne,se]},[s,V,Y,P,F.map(function(X){return X.key}).join("_"),I])}var Bn=e("Gytx"),at=e.n(Bn),Vn=e("Kwbf");function mt(s,d){var g=s.prefixCls,R=s.invalidate,j=s.item,F=s.renderItem,P=s.responsive,I=s.registerSize,K=s.itemKey,L=s.className,V=s.style,G=s.children,U=s.display,re=s.order,Y=s.component,X=Y===void 0?"div":Y,se=Object(Oe.a)(s,["prefixCls","invalidate","item","renderItem","responsive","registerSize","itemKey","className","style","children","display","order","component"]),z=P&&!U;function q(pe){I(K,pe)}r.useEffect(function(){return function(){q(null)}},[]);var ne=F&&j!==void 0?F(j):G,Q;R||(Q={opacity:z?0:1,height:z?0:void 0,overflowY:z?"hidden":void 0,order:P?re:void 0,pointerEvents:z?"none":void 0});var ae={};z&&(ae["aria-hidden"]=!0);var k=r.createElement(X,Object(W.a)({className:Se()(!R&&g,L),style:Object(oe.a)(Object(oe.a)({},Q),V)},ae,se,{ref:d}),ne);return P&&(k=r.createElement(Nn.default,{onResize:function(_){var le=_.offsetWidth;q(le)}},k)),k}var Mn=r.forwardRef(mt);Mn.displayName="Item";var Kn=Mn;function Jn(){var s=Object(r.useState)({}),d=Object(J.a)(s,2),g=d[1],R=Object(r.useRef)([]),j=Object(r.useRef)(!1),F=0,P=0;Object(r.useEffect)(function(){return function(){j.current=!0}},[]);function I(K){var L=F;F+=1,R.current.length<L+1&&(R.current[L]=K);var V=R.current[L];function G(U){R.current[L]=typeof U=="function"?U(R.current[L]):U,$e.a.cancel(P),P=Object($e.a)(function(){j.current||g({})})}return[V,G]}return I}var zn=function(d,g){var R=r.useContext(vn);if(!R){var j=d.component,F=j===void 0?"div":j,P=Object(Oe.a)(d,["component"]);return r.createElement(F,Object(W.a)({},P,{ref:g}))}var I=R.className,K=Object(Oe.a)(R,["className"]),L=d.className,V=Object(Oe.a)(d,["className"]);return r.createElement(vn.Provider,{value:null},r.createElement(Kn,Object(W.a)({ref:g,className:Se()(I,L)},K,V)))},Wn=r.forwardRef(zn);Wn.displayName="RawItem";var st=Wn,vn=r.createContext(null),A="responsive",T="invalidate";function D(s){return"+ ".concat(s.length," ...")}function m(s,d){var g=s.prefixCls,R=g===void 0?"rc-overflow":g,j=s.data,F=j===void 0?[]:j,P=s.renderItem,I=s.renderRawItem,K=s.itemKey,L=s.itemWidth,V=L===void 0?10:L,G=s.ssr,U=s.style,re=s.className,Y=s.maxCount,X=s.renderRest,se=s.renderRawRest,z=s.suffix,q=s.component,ne=q===void 0?"div":q,Q=s.itemComponent,ae=s.onVisibleChange,k=Object(Oe.a)(s,["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"]),pe=Jn(),_=G==="full",le=pe(null),de=Object(J.a)(le,2),te=de[0],H=de[1],ie=te||0,fe=pe(new Map),me=Object(J.a)(fe,2),ye=me[0],Te=me[1],he=pe(0),ge=Object(J.a)(he,2),je=ge[0],Re=ge[1],Ee=pe(0),Ce=Object(J.a)(Ee,2),Ne=Ce[0],Ue=Ce[1],we=pe(0),Be=Object(J.a)(we,2),xe=Be[0],Ie=Be[1],gn=Object(r.useState)(null),Qe=Object(J.a)(gn,2),Ve=Qe[0],_e=Qe[1],dn=Object(r.useState)(null),cn=Object(J.a)(dn,2),Fe=cn[0],We=cn[1],Ge=r.useMemo(function(){return Fe===null&&_?Number.MAX_SAFE_INTEGER:Fe||0},[Fe,te]),Je=Object(r.useState)(!1),Tn=Object(J.a)(Je,2),Hn=Tn[0],In=Tn[1],Ze="".concat(R,"-item"),yn=Math.max(je,Ne),en=F.length&&Y===A,bn=Y===T,He=en||typeof Y=="number"&&F.length>Y,ke=Object(r.useMemo)(function(){var ce=F;return en?te===null&&_?ce=F:ce=F.slice(0,Math.min(F.length,ie/V)):typeof Y=="number"&&(ce=F.slice(0,Y)),ce},[F,V,te,Y,en]),Cn=Object(r.useMemo)(function(){return en?F.slice(Ge+1):F.slice(ke.length)},[F,ke,en,Ge]),tn=Object(r.useCallback)(function(ce,be){var De;return typeof K=="function"?K(ce):(De=K&&(ce==null?void 0:ce[K]))!==null&&De!==void 0?De:be},[K]),ze=Object(r.useCallback)(P||function(ce){return ce},[P]);function Le(ce,be){We(ce),be||(In(ce<F.length-1),ae==null||ae(ce))}function Yn(ce,be){H(be.clientWidth)}function Xn(ce,be){Te(function(De){var Ye=new Map(De);return be===null?Ye.delete(ce):Ye.set(ce,be),Ye})}function ot(ce,be){Ue(be),Re(Ne)}function mn(ce,be){Ie(be)}function ln(ce){return ye.get(tn(ke[ce],ce))}r.useLayoutEffect(function(){if(ie&&yn&&ke){var ce=xe,be=ke.length,De=be-1;if(!be){Le(0),_e(null);return}for(var Ye=0;Ye<be;Ye+=1){var qn=ln(Ye);if(qn===void 0){Le(Ye-1,!0);break}if(ce+=qn,Ye===De-1&&ce+ln(De)<=ie){Le(De),_e(null);break}else if(ce+yn>ie){Le(Ye-1),_e(ce-qn-xe+Ne);break}else if(Ye===De){Le(De),_e(ce-xe);break}}z&&ln(0)+xe>ie&&_e(null)}},[ie,ye,Ne,xe,tn,ke]);var Qn=Hn&&!!Cn.length,fn={};Ve!==null&&en&&(fn={position:"absolute",left:Ve,top:0});var rn={prefixCls:Ze,responsive:en,component:Q,invalidate:bn},Zn=I?function(ce,be){var De=tn(ce,be);return r.createElement(vn.Provider,{key:De,value:Object(oe.a)(Object(oe.a)({},rn),{},{order:be,item:ce,itemKey:De,registerSize:Xn,display:be<=Ge})},I(ce,be))}:function(ce,be){var De=tn(ce,be);return r.createElement(Kn,Object(W.a)({},rn,{order:be,key:De,item:ce,renderItem:ze,itemKey:De,registerSize:Xn,display:be<=Ge}))},En,kn={order:Qn?Ge:Number.MAX_SAFE_INTEGER,className:"".concat(Ze,"-rest"),registerSize:ot,display:Qn};if(se)se&&(En=r.createElement(vn.Provider,{value:Object(oe.a)(Object(oe.a)({},rn),kn)},se(Cn)));else{var nn=X||D;En=r.createElement(Kn,Object(W.a)({},rn,kn),typeof nn=="function"?nn(Cn):nn)}var On=r.createElement(ne,Object(W.a)({className:Se()(!bn&&R,re),style:U,ref:d},k),ke.map(Zn),He?En:null,z&&r.createElement(Kn,Object(W.a)({},rn,{order:Ge,className:"".concat(Ze,"-suffix"),registerSize:mn,display:!0,style:fn}),z));return en&&(On=r.createElement(Nn.default,{onResize:Yn},On)),On}var i=r.forwardRef(m);i.displayName="Overflow",i.Item=st,i.RESPONSIVE=A,i.INVALIDATE=T;var h=i,b=h,E=e("1OyB"),o=e("vuIU"),p=e("Ji7U"),l=e("LK+K"),N=e("bT9E"),w=e("YrtM"),O=r.createContext(null);function c(s,d){var g=Object(oe.a)({},s);return Object.keys(d).forEach(function(R){var j=d[R];j!==void 0&&(g[R]=j)}),g}function S(s){var d=s.children,g=s.locked,R=Object(Oe.a)(s,["children","locked"]),j=r.useContext(O),F=Object(w.a)(function(){return c(j,R)},[j,R],function(P,I){return!g&&(P[0]!==I[0]||!at()(P[1],I[1]))});return r.createElement(O.Provider,{value:F},d)}function f(s,d,g,R){var j=r.useContext(O),F=j.activeKey,P=j.onActive,I=j.onInactive,K={active:F===s};return d||(K.onMouseEnter=function(L){g==null||g({key:s,domEvent:L}),P(s)},K.onMouseLeave=function(L){R==null||R({key:s,domEvent:L}),I(s)}),K}function n(s){var d=s.item,g=Object(Oe.a)(s,["item"]);return Object.defineProperty(g,"item",{get:function(){return Object(Vn.a)(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),d}}),g}function t(s){var d=s.icon,g=s.props,R=s.children,j;return typeof d=="function"?j=r.createElement(d,Object(oe.a)({},g)):j=d,j||R||null}function a(s){var d=r.useContext(O),g=d.mode,R=d.rtl,j=d.inlineIndent;if(g!=="inline")return null;var F=s;return R?{paddingRight:F*j}:{paddingLeft:F*j}}var u=[],v=r.createContext(null);function C(){return r.useContext(v)}var B=r.createContext(u);function M(s){var d=r.useContext(B);return r.useMemo(function(){return s!==void 0?[].concat(Object(an.a)(d),[s]):d},[d,s])}var $=r.createContext(null),Ke=r.createContext(null);function Xe(s,d){return s===void 0?null:"".concat(s,"-").concat(d)}function sn(s){var d=r.useContext(Ke);return Xe(d,s)}var Pn=function(s){Object(p.a)(g,s);var d=Object(l.a)(g);function g(){return Object(E.a)(this,g),d.apply(this,arguments)}return Object(o.a)(g,[{key:"render",value:function(){var j=this.props,F=j.title,P=j.attribute,I=j.elementRef,K=Object(Oe.a)(j,["title","attribute","elementRef"]),L=Object(N.a)(K,["eventKey"]);return Object(Vn.a)(!P,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),r.createElement(b.Item,Object(W.a)({},P,{title:typeof F=="string"?F:void 0},L,{ref:I}))}}]),g}(r.Component),Un=function(d){var g,R=d.style,j=d.className,F=d.eventKey,P=d.disabled,I=d.itemIcon,K=d.children,L=d.role,V=d.onMouseEnter,G=d.onMouseLeave,U=d.onClick,re=d.onKeyDown,Y=d.onFocus,X=Object(Oe.a)(d,["style","className","eventKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"]),se=sn(F),z=r.useContext(O),q=z.prefixCls,ne=z.onItemClick,Q=z.disabled,ae=z.overflowDisabled,k=z.itemIcon,pe=z.selectedKeys,_=z.onActive,le="".concat(q,"-item"),de=r.useRef(),te=r.useRef(),H=Q||P,ie=M(F),fe=function(we){return{key:F,keyPath:ie,item:de.current,domEvent:we}},me=I||k,ye=f(F,H,V,G),Te=ye.active,he=Object(Oe.a)(ye,["active"]),ge=pe.includes(F),je=a(ie.length),Re=function(we){if(!H){var Be=fe(we);U==null||U(n(Be)),ne(Be)}},Ee=function(we){if(re==null||re(we),we.which===Ae.a.ENTER){var Be=fe(we);U==null||U(n(Be)),ne(Be)}},Ce=function(we){_(F),Y==null||Y(we)},Ne={};return d.role==="option"&&(Ne["aria-selected"]=ge),r.createElement(Pn,Object(W.a)({ref:de,elementRef:te,role:L===null?"none":L||"menuitem",tabIndex:P?null:-1,"data-menu-id":ae&&se?null:se},X,he,Ne,{component:"li","aria-disabled":P,style:Object(oe.a)(Object(oe.a)({},je),R),className:Se()(le,(g={},Object(ue.a)(g,"".concat(le,"-active"),Te),Object(ue.a)(g,"".concat(le,"-selected"),ge),Object(ue.a)(g,"".concat(le,"-disabled"),H),g),j),onClick:Re,onKeyDown:Ee,onFocus:Ce}),K,r.createElement(t,{props:Object(oe.a)(Object(oe.a)({},d),{},{isSelected:ge}),icon:me}))};function An(s){var d=s.eventKey,g=C(),R=M(d);return r.useEffect(function(){if(g)return g.registerPath(d,R),function(){g.unregisterPath(d,R)}},[R]),g?null:r.createElement(Un,s)}var Gn=An;function wt(s,d){return Object(Rn.a)(s).map(function(g,R){if(r.isValidElement(g)){var j=g.key;return j==null&&(j="tmp_key-".concat([].concat(Object(an.a)(d),[R]).join("-"))),r.cloneElement(g,{key:j,eventKey:j})}return g})}function it(s){var d=r.useRef(s);d.current=s;var g=r.useCallback(function(){for(var R,j=arguments.length,F=new Array(j),P=0;P<j;P++)F[P]=arguments[P];return(R=d.current)===null||R===void 0?void 0:R.call.apply(R,[d].concat(F))},[]);return s?g:void 0}var Or=function(d,g){var R=d.className,j=d.children,F=Object(Oe.a)(d,["className","children"]),P=r.useContext(O),I=P.prefixCls,K=P.mode;return r.createElement("ul",Object(W.a)({className:Se()(I,"".concat(I,"-sub"),"".concat(I,"-").concat(K==="inline"?"inline":"vertical"),R)},F,{"data-menu-list":!0,ref:g}),j)},Xt=r.forwardRef(Or);Xt.displayName="SubMenuList";var Qt=Xt,Sr=e("uciX"),Ln={adjustX:1,adjustY:1},Zt={topLeft:{points:["bl","tl"],overflow:Ln,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Ln,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:Ln,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:Ln,offset:[4,0]}},Fr={topLeft:{points:["bl","tl"],overflow:Ln,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Ln,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:Ln,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:Ln,offset:[4,0]}},fa=Zt;function kt(s,d,g){if(d)return d;if(g)return g[s]||g.other}var Rr={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function jr(s){var d=s.prefixCls,g=s.visible,R=s.children,j=s.popup,F=s.popupClassName,P=s.popupOffset,I=s.disabled,K=s.mode,L=s.onVisibleChange,V=r.useContext(O),G=V.getPopupContainer,U=V.rtl,re=V.subMenuOpenDelay,Y=V.subMenuCloseDelay,X=V.builtinPlacements,se=V.triggerSubMenuAction,z=V.forceSubMenuRender,q=V.motion,ne=V.defaultMotions,Q=r.useState(!1),ae=Object(J.a)(Q,2),k=ae[0],pe=ae[1],_=U?Object(oe.a)(Object(oe.a)({},Fr),X):Object(oe.a)(Object(oe.a)({},Zt),X),le=Rr[K],de=kt(K,q,ne),te=Object(oe.a)(Object(oe.a)({},de),{},{leavedClassName:"".concat(d,"-hidden"),removeOnLeave:!1,motionAppear:!0}),H=r.useRef();return r.useEffect(function(){return H.current=Object($e.a)(function(){pe(g)}),function(){$e.a.cancel(H.current)}},[g]),r.createElement(Sr.a,{prefixCls:d,popupClassName:Se()("".concat(d,"-popup"),Object(ue.a)({},"".concat(d,"-rtl"),U),F),stretch:K==="horizontal"?"minWidth":null,getPopupContainer:G,builtinPlacements:_,popupPlacement:le,popupVisible:k,popup:j,popupAlign:P&&{offset:P},action:I?[]:[se],mouseEnterDelay:re,mouseLeaveDelay:Y,onPopupVisibleChange:L,forceRender:z,popupMotion:te},R)}var Dr=e("8XRh");function Pr(s){var d=s.id,g=s.open,R=s.keyPath,j=s.children,F="inline",P=r.useContext(O),I=P.prefixCls,K=P.forceSubMenuRender,L=P.motion,V=P.defaultMotions,G=P.mode,U=r.useRef(!1);U.current=G===F;var re=r.useState(!U.current),Y=Object(J.a)(re,2),X=Y[0],se=Y[1],z=U.current?g:!1;r.useEffect(function(){U.current&&se(!1)},[G]);var q=Object(oe.a)({},kt(F,L,V));R.length>1&&(q.motionAppear=!1);var ne=q.onVisibleChanged;return q.onVisibleChanged=function(Q){return!U.current&&!Q&&se(!0),ne==null?void 0:ne(Q)},X?null:r.createElement(S,{mode:F,locked:!U.current},r.createElement(Dr.default,Object(W.a)({visible:z},q,{forceRender:K,removeOnLeave:!1,leavedClassName:"".concat(I,"-hidden")}),function(Q){var ae=Q.className,k=Q.style;return r.createElement(Qt,{id:d,className:ae,style:k},j)}))}var Ar=function(d){var g,R=d.style,j=d.className,F=d.title,P=d.eventKey,I=d.disabled,K=d.internalPopupClose,L=d.children,V=d.itemIcon,G=d.expandIcon,U=d.popupClassName,re=d.popupOffset,Y=d.onClick,X=d.onMouseEnter,se=d.onMouseLeave,z=d.onTitleClick,q=d.onTitleMouseEnter,ne=d.onTitleMouseLeave,Q=Object(Oe.a)(d,["style","className","title","eventKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"]),ae=sn(P),k=r.useContext(O),pe=k.prefixCls,_=k.mode,le=k.openKeys,de=k.disabled,te=k.overflowDisabled,H=k.activeKey,ie=k.selectedKeys,fe=k.itemIcon,me=k.expandIcon,ye=k.onItemClick,Te=k.onOpenChange,he=k.onActive,ge=r.useContext($),je=ge.isSubPathKey,Re=M(),Ee="".concat(pe,"-submenu"),Ce=de||I,Ne=r.useRef(),Ue=r.useRef(),we=V||fe,Be=G||me,xe=le.includes(P),Ie=!te&&xe,gn=je(ie,P),Qe=f(P,Ce,q,ne),Ve=Qe.active,_e=Object(Oe.a)(Qe,["active"]),dn=r.useState(!1),cn=Object(J.a)(dn,2),Fe=cn[0],We=cn[1],Ge=function(Le){Ce||We(Le)},Je=function(Le){Ge(!0),X==null||X({key:P,domEvent:Le})},Tn=function(Le){Ge(!1),se==null||se({key:P,domEvent:Le})},Hn=r.useMemo(function(){return Ve||(_!=="inline"?Fe||je([H],P):!1)},[_,Ve,H,Fe,P,je]),In=a(Re.length),Ze=function(Le){Ce||(z==null||z({key:P,domEvent:Le}),_==="inline"&&Te(P,!xe))},yn=it(function(ze){Y==null||Y(n(ze)),ye(ze)}),en=function(Le){_!=="inline"&&Te(P,Le)},bn=function(){he(P)},He=ae&&"".concat(ae,"-popup"),ke=r.createElement("div",Object(W.a)({role:"menuitem",style:In,className:"".concat(Ee,"-title"),tabIndex:Ce?null:-1,ref:Ne,title:typeof F=="string"?F:null,"data-menu-id":te&&ae?null:ae,"aria-expanded":Ie,"aria-haspopup":!0,"aria-controls":He,"aria-disabled":Ce,onClick:Ze,onFocus:bn},_e),F,r.createElement(t,{icon:_!=="horizontal"?Be:null,props:Object(oe.a)(Object(oe.a)({},d),{},{isOpen:Ie,isSubMenu:!0})},r.createElement("i",{className:"".concat(Ee,"-arrow")}))),Cn=r.useRef(_);if(_!=="inline"&&(Cn.current=Re.length>1?"vertical":_),!te){var tn=Cn.current;ke=r.createElement(jr,{mode:tn,prefixCls:Ee,visible:!K&&Ie&&_!=="inline",popupClassName:U,popupOffset:re,popup:r.createElement(S,{mode:tn},r.createElement(Qt,{id:He,ref:Ue},L)),disabled:Ce,onVisibleChange:en},ke)}return r.createElement(S,{onItemClick:yn,mode:_==="horizontal"?"vertical":_,itemIcon:we,expandIcon:Be},r.createElement(b.Item,Object(W.a)({role:"none"},Q,{component:"li",style:R,className:Se()(Ee,"".concat(Ee,"-").concat(_),j,(g={},Object(ue.a)(g,"".concat(Ee,"-open"),Ie),Object(ue.a)(g,"".concat(Ee,"-active"),Hn),Object(ue.a)(g,"".concat(Ee,"-selected"),gn),Object(ue.a)(g,"".concat(Ee,"-disabled"),Ce),g)),onMouseEnter:Je,onMouseLeave:Tn}),ke,!te&&r.createElement(Pr,{id:He,open:Ie,keyPath:Re},L)))};function qt(s){var d=s.eventKey,g=s.children,R=M(d),j=wt(g,R),F=C();r.useEffect(function(){if(F)return F.registerPath(d,R),function(){F.unregisterPath(d,R)}},[R]);var P;return F?P=j:P=r.createElement(Ar,s,j),r.createElement(B.Provider,{value:R},P)}var Tr=e("x/xZ");function _t(s){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Object(Tr.a)(s)){var g=s.nodeName.toLowerCase(),R=["input","select","textarea","button"].includes(g)||s.isContentEditable||g==="a"&&!!s.getAttribute("href"),j=s.getAttribute("tabindex"),F=Number(j),P=null;return j&&!Number.isNaN(F)?P=F:R&&P===null&&(P=0),R&&s.disabled&&(P=null),P!==null&&(P>=0||d&&P<0)}return!1}function er(s){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,g=Object(an.a)(s.querySelectorAll("*")).filter(function(R){return _t(R,d)});return _t(s,d)&&g.unshift(s),g}var bt=null;function pa(){bt=document.activeElement}function ha(){bt=null}function va(){if(bt)try{bt.focus()}catch(s){}}function ga(s,d){if(d.keyCode===9){var g=er(s),R=g[d.shiftKey?0:g.length-1],j=R===document.activeElement||s===document.activeElement;if(j){var F=g[d.shiftKey?g.length-1:0];F.focus(),d.preventDefault()}}}var Bt=Ae.a.LEFT,Mt=Ae.a.RIGHT,Kt=Ae.a.UP,Ct=Ae.a.DOWN,Et=Ae.a.ENTER,nr=Ae.a.ESC,tr=[Kt,Ct,Bt,Mt];function Ir(s,d,g,R){var j,F,P,I,K="prev",L="next",V="children",G="parent";if(s==="inline"&&R===Et)return{inlineTrigger:!0};var U=(j={},Object(ue.a)(j,Kt,K),Object(ue.a)(j,Ct,L),j),re=(F={},Object(ue.a)(F,Bt,g?L:K),Object(ue.a)(F,Mt,g?K:L),Object(ue.a)(F,Ct,V),Object(ue.a)(F,Et,V),F),Y=(P={},Object(ue.a)(P,Kt,K),Object(ue.a)(P,Ct,L),Object(ue.a)(P,Et,V),Object(ue.a)(P,nr,G),Object(ue.a)(P,Bt,g?V:G),Object(ue.a)(P,Mt,g?G:V),P),X={inline:U,horizontal:re,vertical:Y,inlineSub:U,horizontalSub:Y,verticalSub:Y},se=(I=X["".concat(s).concat(d?"":"Sub")])===null||I===void 0?void 0:I[R];switch(se){case K:return{offset:-1,sibling:!0};case L:return{offset:1,sibling:!0};case G:return{offset:-1,sibling:!1};case V:return{offset:1,sibling:!1};default:return null}}function Nr(s){for(var d=s;d;){if(d.getAttribute("data-menu-list"))return d;d=d.parentElement}return null}function wr(s,d){for(var g=s||document.activeElement;g;){if(d.has(g))return g;g=g.parentElement}return null}function Br(s,d){var g=er(s,!0);return g.filter(function(R){return d.has(R)})}function rr(s,d,g){var R=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!s)return null;var j=Br(s,d),F=j.length,P=j.findIndex(function(I){return g===I});return R<0?P===-1?P=F-1:P-=1:R>0&&(P+=1),P=(P+F)%F,j[P]}function Mr(s,d,g,R,j,F,P,I,K,L){var V=r.useRef(),G=r.useRef();G.current=d;var U=function(){$e.a.cancel(V.current)};return r.useEffect(function(){return function(){U()}},[]),function(re){var Y=re.which;if([].concat(tr,[Et,nr]).includes(Y)){var X,se,z,q=function(){X=new Set,se=new Map,z=new Map;var fe=F();return fe.forEach(function(me){var ye=document.querySelector("[data-menu-id='".concat(Xe(R,me),"']"));ye&&(X.add(ye),z.set(ye,me),se.set(me,ye))}),X};q();var ne=se.get(d),Q=wr(ne,X),ae=z.get(Q),k=Ir(s,P(ae,!0).length===1,g,Y);if(!k)return;tr.includes(Y)&&re.preventDefault();var pe=function(fe){if(fe){var me=fe,ye=fe.querySelector("a");(ye==null?void 0:ye.getAttribute("href"))&&(me=ye);var Te=z.get(fe);I(Te),U(),V.current=Object($e.a)(function(){G.current===Te&&me.focus()})}};if(k.sibling||!Q){var _;!Q||s==="inline"?_=j.current:_=Nr(Q);var le=rr(_,X,Q,k.offset);pe(le)}else if(k.inlineTrigger)K(ae);else if(k.offset>0)K(ae,!0),U(),V.current=Object($e.a)(function(){q();var ie=Q.getAttribute("aria-controls"),fe=document.getElementById(ie),me=rr(fe,X);pe(me)},5);else if(k.offset<0){var de=P(ae,!0),te=de[de.length-2],H=se.get(te);K(te,!1),pe(H)}}L==null||L(re)}}var Kr=Math.random().toFixed(5).toString().slice(2),ar=0;function Wr(s){var d=Object(pn.a)(s,{value:s}),g=Object(J.a)(d,2),R=g[0],j=g[1];return r.useEffect(function(){ar+=1;var F="".concat(Kr,"-").concat(ar);j("rc-menu-uuid-".concat(F))},[]),R}var ya=e("p8sG");function Lr(s){Promise.resolve().then(s)}var Wt="__RC_UTIL_PATH_SPLIT__",sr=function(d){return d.join(Wt)},xr=function(d){return d.split(Wt)},Lt="rc-menu-more";function $r(){var s=r.useState({}),d=Object(J.a)(s,2),g=d[1],R=Object(r.useRef)(new Map),j=Object(r.useRef)(new Map),F=r.useState([]),P=Object(J.a)(F,2),I=P[0],K=P[1],L=Object(r.useRef)(0),V=Object(r.useCallback)(function(z,q){var ne=sr(q);j.current.set(ne,z),R.current.set(z,ne),L.current+=1;var Q=L.current;Lr(function(){Q===L.current&&g({})})},[]),G=Object(r.useCallback)(function(z,q){var ne=sr(q);j.current.delete(ne),R.current.delete(z)},[]),U=Object(r.useCallback)(function(z){K(z)},[]),re=Object(r.useCallback)(function(z,q){var ne=R.current.get(z)||"",Q=xr(ne);return q&&I.includes(Q[0])&&Q.unshift(Lt),Q},[I]),Y=Object(r.useCallback)(function(z,q){return z.some(function(ne){var Q=re(ne,!0);return Q.includes(q)})},[re]),X=function(){var q=Object(an.a)(R.current.keys());return I.length&&q.push(Lt),q},se=Object(r.useCallback)(function(z){var q="".concat(R.current.get(z)).concat(Wt),ne=new Set;return Object(an.a)(j.current.keys()).forEach(function(Q){Q.startsWith(q)&&ne.add(j.current.get(Q))}),ne},[]);return{registerPath:V,unregisterPath:G,refreshOverflowKeys:U,isSubPathKey:Y,getKeyPath:re,getKeys:X,getSubPathKeys:se}}var Ot=[],Vr=function(d){var g,R,j=d.prefixCls,F=j===void 0?"rc-menu":j,P=d.style,I=d.className,K=d.tabIndex,L=K===void 0?0:K,V=d.children,G=d.direction,U=d.id,re=d.mode,Y=re===void 0?"vertical":re,X=d.inlineCollapsed,se=d.disabled,z=d.disabledOverflow,q=d.subMenuOpenDelay,ne=q===void 0?.1:q,Q=d.subMenuCloseDelay,ae=Q===void 0?.1:Q,k=d.forceSubMenuRender,pe=d.defaultOpenKeys,_=d.openKeys,le=d.activeKey,de=d.defaultActiveFirst,te=d.selectable,H=te===void 0?!0:te,ie=d.multiple,fe=ie===void 0?!1:ie,me=d.defaultSelectedKeys,ye=d.selectedKeys,Te=d.onSelect,he=d.onDeselect,ge=d.inlineIndent,je=ge===void 0?24:ge,Re=d.motion,Ee=d.defaultMotions,Ce=d.triggerSubMenuAction,Ne=Ce===void 0?"hover":Ce,Ue=d.builtinPlacements,we=d.itemIcon,Be=d.expandIcon,xe=d.overflowedIndicator,Ie=xe===void 0?"...":xe,gn=d.getPopupContainer,Qe=d.onClick,Ve=d.onOpenChange,_e=d.onKeyDown,dn=d.openAnimation,cn=d.openTransitionName,Fe=Object(Oe.a)(d,["prefixCls","style","className","tabIndex","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName"]),We=wt(V,Ot),Ge=r.useState(!1),Je=Object(J.a)(Ge,2),Tn=Je[0],Hn=Je[1],In=r.useRef(),Ze=Wr(U),yn=G==="rtl",en=r.useMemo(function(){return Y==="inline"&&X?["vertical",X]:[Y,!1]},[Y,X]),bn=Object(J.a)(en,2),He=bn[0],ke=bn[1],Cn=r.useState(0),tn=Object(J.a)(Cn,2),ze=tn[0],Le=tn[1],Yn=ze>=We.length-1||He!=="horizontal"||z,Xn=Object(pn.a)(pe,{value:_,postState:function(Z){return Z||Ot}}),ot=Object(J.a)(Xn,2),mn=ot[0],ln=ot[1],Qn=r.useState(mn),fn=Object(J.a)(Qn,2),rn=fn[0],Zn=fn[1],En=He==="inline",kn=r.useRef(!1);r.useEffect(function(){En&&Zn(mn)},[mn]),r.useEffect(function(){if(!kn.current){kn.current=!0;return}if(En)ln(rn);else{var ee=[];ln(ee),Ve==null||Ve(ee)}},[En]);var nn=$r(),On=nn.registerPath,ce=nn.unregisterPath,be=nn.refreshOverflowKeys,De=nn.isSubPathKey,Ye=nn.getKeyPath,qn=nn.getKeys,Ft=nn.getSubPathKeys,Jt=r.useMemo(function(){return{registerPath:On,unregisterPath:ce}},[On,ce]),zt=r.useMemo(function(){return{isSubPathKey:De}},[De]);r.useEffect(function(){be(Yn?Ot:We.slice(ze+1).map(function(ee){return ee.key}))},[ze,Yn]);var Ut=Object(pn.a)(le||de&&((g=We[0])===null||g===void 0?void 0:g.key),{value:le}),lt=Object(J.a)(Ut,2),Rt=lt[0],pt=lt[1],jt=it(function(ee){pt(ee)}),Gt=it(function(){pt(void 0)}),Dt=Object(pn.a)(me||[],{value:ye,postState:function(Z){return Array.isArray(Z)?Z:Z==null?Ot:[Z]}}),Pt=Object(J.a)(Dt,2),ut=Pt[0],Sn=Pt[1],At=function(Z){if(!!H){var ve=Z.key,Me=ut.includes(ve),qe;Me?qe=ut.filter(function(et){return et!==ve}):fe?qe=[].concat(Object(an.a)(ut),[ve]):qe=[ve],Sn(qe);var xn=Object(oe.a)(Object(oe.a)({},Z),{},{selectedKeys:qe});Me?he==null||he(xn):Te==null||Te(xn)}},Tt=it(function(ee){Qe==null||Qe(n(ee)),At(ee)}),ht=it(function(ee,Z){var ve=mn.filter(function(qe){return qe!==ee});if(Z)ve.push(ee);else if(He!=="inline"){var Me=Ft(ee);ve=ve.filter(function(qe){return!Me.has(qe)})}at()(mn,ve)||(ln(ve),Ve==null||Ve(ve))}),_n=it(gn),vt=function(Z,ve){var Me=ve!=null?ve:!mn.includes(Z);ht(Z,Me)},gt=Mr(He,Rt,yn,Ze,In,qn,Ye,pt,vt,_e);r.useEffect(function(){Hn(!0)},[]);var It=He!=="horizontal"||z?We:We.map(function(ee,Z){return r.createElement(S,{key:ee.key,overflowDisabled:Z>ze},ee)}),Nt=r.createElement(b,Object(W.a)({id:U,ref:In,prefixCls:"".concat(F,"-overflow"),component:"ul",itemComponent:Gn,className:Se()(F,"".concat(F,"-root"),"".concat(F,"-").concat(He),I,(R={},Object(ue.a)(R,"".concat(F,"-inline-collapsed"),ke),Object(ue.a)(R,"".concat(F,"-rtl"),yn),R)),dir:G,style:P,role:"menu",tabIndex:L,data:It,renderRawItem:function(Z){return Z},renderRawRest:function(Z){var ve=Z.length,Me=ve?We.slice(-ve):null;return r.createElement(qt,{eventKey:Lt,title:Ie,disabled:Yn,internalPopupClose:ve===0},Me)},maxCount:He!=="horizontal"||z?b.INVALIDATE:b.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(Z){Le(Z)},onKeyDown:gt},Fe));return r.createElement(Ke.Provider,{value:Ze},r.createElement(S,{prefixCls:F,mode:He,openKeys:mn,rtl:yn,disabled:se,motion:Tn?Re:null,defaultMotions:Tn?Ee:null,activeKey:Rt,onActive:jt,onInactive:Gt,selectedKeys:ut,inlineIndent:je,subMenuOpenDelay:ne,subMenuCloseDelay:ae,forceSubMenuRender:k,builtinPlacements:Ue,triggerSubMenuAction:Ne,getPopupContainer:_n,itemIcon:we,expandIcon:Be,onItemClick:Tt,onOpenChange:ht},r.createElement($.Provider,{value:zt},Nt),r.createElement(v.Provider,{value:Jt},We)))},Jr=Vr,zr=function(d){var g=d.className,R=d.title,j=d.eventKey,F=d.children,P=Object(Oe.a)(d,["className","title","eventKey","children"]),I=r.useContext(O),K=I.prefixCls,L="".concat(K,"-item-group");return r.createElement("li",Object(W.a)({},P,{onClick:function(G){return G.stopPropagation()},className:Se()(L,g)}),r.createElement("div",{className:"".concat(L,"-title"),title:typeof R=="string"?R:void 0},R),r.createElement("ul",{className:"".concat(L,"-list")},F))};function Ur(s){var d=s.children,g=Object(Oe.a)(s,["children"]),R=M(g.eventKey),j=wt(d,R),F=C();return F?j:r.createElement(zr,g,j)}function Gr(s){var d=s.className,g=s.style,R=r.useContext(O),j=R.prefixCls,F=C();return F?null:r.createElement("li",{className:Se()("".concat(j,"-item-divider"),d),style:g})}var ft=Jr;ft.Item=Gn,ft.SubMenu=qt,ft.ItemGroup=Ur,ft.Divider=Gr;var Hr=ft,Yr=e("eDIo");function Xr(s,d){var g=s.prefixCls,R=s.editable,j=s.locale,F=s.style;return!R||R.showAdd===!1?null:r.createElement("button",{ref:d,type:"button",className:"".concat(g,"-nav-add"),style:F,"aria-label":(j==null?void 0:j.addAriaLabel)||"Add tab",onClick:function(I){R.onEdit("add",{event:I})}},R.addIcon||"+")}var ir=r.forwardRef(Xr);function Qr(s,d){var g=s.prefixCls,R=s.id,j=s.tabs,F=s.locale,P=s.mobile,I=s.moreIcon,K=I===void 0?"More":I,L=s.moreTransitionName,V=s.style,G=s.className,U=s.editable,re=s.tabBarGutter,Y=s.rtl,X=s.onTabClick,se=Object(r.useState)(!1),z=Object(J.a)(se,2),q=z[0],ne=z[1],Q=Object(r.useState)(null),ae=Object(J.a)(Q,2),k=ae[0],pe=ae[1],_="".concat(R,"-more-popup"),le="".concat(g,"-dropdown"),de=k!==null?"".concat(_,"-").concat(k):null,te=F==null?void 0:F.dropdownAriaLabel,H=r.createElement(Hr,{onClick:function(ge){var je=ge.key,Re=ge.domEvent;X(je,Re),ne(!1)},id:_,tabIndex:-1,role:"listbox","aria-activedescendant":de,selectedKeys:[k],"aria-label":te!==void 0?te:"expanded dropdown"},j.map(function(he){return r.createElement(Gn,{key:he.key,id:"".concat(_,"-").concat(he.key),role:"option","aria-controls":R&&"".concat(R,"-panel-").concat(he.key),disabled:he.disabled},he.tab)}));function ie(he){for(var ge=j.filter(function(Ne){return!Ne.disabled}),je=ge.findIndex(function(Ne){return Ne.key===k})||0,Re=ge.length,Ee=0;Ee<Re;Ee+=1){je=(je+he+Re)%Re;var Ce=ge[je];if(!Ce.disabled){pe(Ce.key);return}}}function fe(he){var ge=he.which;if(!q){[Ae.a.DOWN,Ae.a.SPACE,Ae.a.ENTER].includes(ge)&&(ne(!0),he.preventDefault());return}switch(ge){case Ae.a.UP:ie(-1),he.preventDefault();break;case Ae.a.DOWN:ie(1),he.preventDefault();break;case Ae.a.ESC:ne(!1);break;case Ae.a.SPACE:case Ae.a.ENTER:k!==null&&X(k,he);break}}Object(r.useEffect)(function(){var he=document.getElementById(de);he&&he.scrollIntoView&&he.scrollIntoView(!1)},[k]),Object(r.useEffect)(function(){q||pe(null)},[q]);var me=Object(ue.a)({},Y?"marginLeft":"marginRight",re);j.length||(me.visibility="hidden",me.order=1);var ye=Se()(Object(ue.a)({},"".concat(le,"-rtl"),Y)),Te=P?null:r.createElement(Yr.default,{prefixCls:le,overlay:H,trigger:["hover"],visible:q,transitionName:L,onVisibleChange:ne,overlayClassName:ye,mouseEnterDelay:.1,mouseLeaveDelay:.1},r.createElement("button",{type:"button",className:"".concat(g,"-nav-more"),style:me,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":_,id:"".concat(R,"-more"),"aria-expanded":q,onKeyDown:fe},K));return r.createElement("div",{className:Se()("".concat(g,"-nav-operations"),G),style:V,ref:d},Te,r.createElement(ir,{prefixCls:g,locale:F,editable:U}))}var Zr=r.forwardRef(Qr),xt=Object(r.createContext)(null),kr=.1,or=.01,St=20,lr=Math.pow(.995,St);function qr(s,d){var g=Object(r.useState)(),R=Object(J.a)(g,2),j=R[0],F=R[1],P=Object(r.useState)(0),I=Object(J.a)(P,2),K=I[0],L=I[1],V=Object(r.useState)(0),G=Object(J.a)(V,2),U=G[0],re=G[1],Y=Object(r.useState)(),X=Object(J.a)(Y,2),se=X[0],z=X[1],q=Object(r.useRef)();function ne(le){var de=le.touches[0],te=de.screenX,H=de.screenY;F({x:te,y:H}),window.clearInterval(q.current)}function Q(le){if(!!j){le.preventDefault();var de=le.touches[0],te=de.screenX,H=de.screenY;F({x:te,y:H});var ie=te-j.x,fe=H-j.y;d(ie,fe);var me=Date.now();L(me),re(me-K),z({x:ie,y:fe})}}function ae(){if(!!j&&(F(null),z(null),se)){var le=se.x/U,de=se.y/U,te=Math.abs(le),H=Math.abs(de);if(Math.max(te,H)<kr)return;var ie=le,fe=de;q.current=window.setInterval(function(){if(Math.abs(ie)<or&&Math.abs(fe)<or){window.clearInterval(q.current);return}ie*=lr,fe*=lr,d(ie*St,fe*St)},St)}}var k=Object(r.useRef)();function pe(le){var de=le.deltaX,te=le.deltaY,H=0,ie=Math.abs(de),fe=Math.abs(te);ie===fe?H=k.current==="x"?de:te:ie>fe?(H=de,k.current="x"):(H=te,k.current="y"),d(-H,-H)&&le.preventDefault()}var _=Object(r.useRef)(null);_.current={onTouchStart:ne,onTouchMove:Q,onTouchEnd:ae,onWheel:pe},r.useEffect(function(){function le(ie){_.current.onTouchStart(ie)}function de(ie){_.current.onTouchMove(ie)}function te(ie){_.current.onTouchEnd(ie)}function H(ie){_.current.onWheel(ie)}return document.addEventListener("touchmove",de,{passive:!1}),document.addEventListener("touchend",te,{passive:!1}),s.current.addEventListener("touchstart",le,{passive:!1}),s.current.addEventListener("wheel",H),function(){document.removeEventListener("touchmove",de),document.removeEventListener("touchend",te)}},[])}function _r(){var s=Object(r.useRef)(new Map);function d(R){return s.current.has(R)||s.current.set(R,r.createRef()),s.current.get(R)}function g(R){s.current.delete(R)}return[d,g]}function ur(s,d){var g=r.useRef(s),R=r.useState({}),j=Object(J.a)(R,2),F=j[1];function P(I){var K=typeof I=="function"?I(g.current):I;K!==g.current&&d(K,g.current),g.current=K,F({})}return[g.current,P]}var dr=function(d){var g=d.position,R=d.prefixCls,j=d.extra;if(!j)return null;var F,P=j;return g==="right"&&(F=P.right||!P.left&&P||null),g==="left"&&(F=P.left||null),F?r.createElement("div",{className:"".concat(R,"-extra-content")},F):null};function ea(s,d){var g,R=r.useContext(xt),j=R.prefixCls,F=R.tabs,P=s.className,I=s.style,K=s.id,L=s.animated,V=s.activeKey,G=s.rtl,U=s.extra,re=s.editable,Y=s.locale,X=s.tabPosition,se=s.tabBarGutter,z=s.children,q=s.onTabClick,ne=s.onTabScroll,Q=Object(r.useRef)(),ae=Object(r.useRef)(),k=Object(r.useRef)(),pe=Object(r.useRef)(),_=_r(),le=Object(J.a)(_,2),de=le[0],te=le[1],H=X==="top"||X==="bottom",ie=ur(0,function(ee,Z){H&&ne&&ne({direction:ee>Z?"left":"right"})}),fe=Object(J.a)(ie,2),me=fe[0],ye=fe[1],Te=ur(0,function(ee,Z){!H&&ne&&ne({direction:ee>Z?"top":"bottom"})}),he=Object(J.a)(Te,2),ge=he[0],je=he[1],Re=Object(r.useState)(0),Ee=Object(J.a)(Re,2),Ce=Ee[0],Ne=Ee[1],Ue=Object(r.useState)(0),we=Object(J.a)(Ue,2),Be=we[0],xe=we[1],Ie=Object(r.useState)(0),gn=Object(J.a)(Ie,2),Qe=gn[0],Ve=gn[1],_e=Object(r.useState)(0),dn=Object(J.a)(_e,2),cn=dn[0],Fe=dn[1],We=Object(r.useState)(null),Ge=Object(J.a)(We,2),Je=Ge[0],Tn=Ge[1],Hn=Object(r.useState)(null),In=Object(J.a)(Hn,2),Ze=In[0],yn=In[1],en=Object(r.useState)(0),bn=Object(J.a)(en,2),He=bn[0],ke=bn[1],Cn=Object(r.useState)(0),tn=Object(J.a)(Cn,2),ze=tn[0],Le=tn[1],Yn=hn(new Map),Xn=Object(J.a)(Yn,2),ot=Xn[0],mn=Xn[1],ln=dt(F,ot,Ce),Qn="".concat(j,"-nav-operations-hidden"),fn=0,rn=0;H?G?(fn=0,rn=Math.max(0,Ce-Je)):(fn=Math.min(0,Je-Ce),rn=0):(fn=Math.min(0,Ze-Be),rn=0);function Zn(ee){return ee<fn?fn:ee>rn?rn:ee}var En=Object(r.useRef)(),kn=Object(r.useState)(),nn=Object(J.a)(kn,2),On=nn[0],ce=nn[1];function be(){ce(Date.now())}function De(){window.clearTimeout(En.current)}qr(Q,function(ee,Z){function ve(Me,qe){Me(function(xn){var et=Zn(xn+qe);return et})}if(H){if(Je>=Ce)return!1;ve(ye,ee)}else{if(Ze>=Be)return!1;ve(je,Z)}return De(),be(),!0}),Object(r.useEffect)(function(){return De(),On&&(En.current=window.setTimeout(function(){ce(0)},100)),De},[On]);function Ye(){var ee=arguments.length>0&&arguments[0]!==void 0?arguments[0]:V,Z=ln.get(ee)||{width:0,height:0,left:0,right:0,top:0};if(H){var ve=me;G?Z.right<me?ve=Z.right:Z.right+Z.width>me+Je&&(ve=Z.right+Z.width-Je):Z.left<-me?ve=-Z.left:Z.left+Z.width>-me+Je&&(ve=-(Z.left+Z.width-Je)),je(0),ye(Zn(ve))}else{var Me=ge;Z.top<-ge?Me=-Z.top:Z.top+Z.height>-ge+Ze&&(Me=-(Z.top+Z.height-Ze)),ye(0),je(Zn(Me))}}var qn=ct(ln,{width:Je,height:Ze,left:me,top:ge},{width:Qe,height:cn},{width:He,height:ze},Object(oe.a)(Object(oe.a)({},s),{},{tabs:F})),Ft=Object(J.a)(qn,2),Jt=Ft[0],zt=Ft[1],Ut=F.map(function(ee){var Z=ee.key;return r.createElement(wn,{id:K,prefixCls:j,key:Z,rtl:G,tab:ee,closable:ee.closable,editable:re,active:Z===V,tabPosition:X,tabBarGutter:se,renderWrapper:z,removeAriaLabel:Y==null?void 0:Y.removeAriaLabel,ref:de(Z),onClick:function(Me){q(Z,Me)},onRemove:function(){te(Z)},onFocus:function(){Ye(Z),be(),G||(Q.current.scrollLeft=0),Q.current.scrollTop=0}})}),lt=Dn(function(){var ee,Z,ve,Me,qe,xn,et,Ht,Yt,la=((ee=Q.current)===null||ee===void 0?void 0:ee.offsetWidth)||0,ua=((Z=Q.current)===null||Z===void 0?void 0:Z.offsetHeight)||0,hr=((ve=pe.current)===null||ve===void 0?void 0:ve.offsetWidth)||0,vr=((Me=pe.current)===null||Me===void 0?void 0:Me.offsetHeight)||0,da=((qe=k.current)===null||qe===void 0?void 0:qe.offsetWidth)||0,ca=((xn=k.current)===null||xn===void 0?void 0:xn.offsetHeight)||0;Tn(la),yn(ua),ke(hr),Le(vr);var gr=(((et=ae.current)===null||et===void 0?void 0:et.offsetWidth)||0)-hr,yr=(((Ht=ae.current)===null||Ht===void 0?void 0:Ht.offsetHeight)||0)-vr;Ne(gr),xe(yr);var br=(Yt=k.current)===null||Yt===void 0?void 0:Yt.className.includes(Qn);Ve(gr-(br?0:da)),Fe(yr-(br?0:ca)),mn(function(){var Cr=new Map;return F.forEach(function(ma){var Er=ma.key,yt=de(Er).current;yt&&Cr.set(Er,{width:yt.offsetWidth,height:yt.offsetHeight,left:yt.offsetLeft,top:yt.offsetTop})}),Cr})}),Rt=F.slice(0,Jt),pt=F.slice(zt+1),jt=[].concat(Object(an.a)(Rt),Object(an.a)(pt)),Gt=Object(r.useState)(),Dt=Object(J.a)(Gt,2),Pt=Dt[0],ut=Dt[1],Sn=ln.get(V),At=Object(r.useRef)();function Tt(){$e.a.cancel(At.current)}Object(r.useEffect)(function(){var ee={};return Sn&&(H?(G?ee.right=Sn.right:ee.left=Sn.left,ee.width=Sn.width):(ee.top=Sn.top,ee.height=Sn.height)),Tt(),At.current=Object($e.a)(function(){ut(ee)}),Tt},[Sn,H,G]),Object(r.useEffect)(function(){Ye()},[V,Sn,ln,H]),Object(r.useEffect)(function(){lt()},[G,se,V,F.map(function(ee){return ee.key}).join("_")]);var ht=!!jt.length,_n="".concat(j,"-nav-wrap"),vt,gt,It,Nt;return H?G?(gt=me>0,vt=me+Je<Ce):(vt=me<0,gt=-me+Je<Ce):(It=ge<0,Nt=-ge+Ze<Be),r.createElement("div",{ref:d,role:"tablist",className:Se()("".concat(j,"-nav"),P),style:I,onKeyDown:function(){be()}},r.createElement(dr,{position:"left",extra:U,prefixCls:j}),r.createElement(Nn.default,{onResize:lt},r.createElement("div",{className:Se()(_n,(g={},Object(ue.a)(g,"".concat(_n,"-ping-left"),vt),Object(ue.a)(g,"".concat(_n,"-ping-right"),gt),Object(ue.a)(g,"".concat(_n,"-ping-top"),It),Object(ue.a)(g,"".concat(_n,"-ping-bottom"),Nt),g)),ref:Q},r.createElement(Nn.default,{onResize:lt},r.createElement("div",{ref:ae,className:"".concat(j,"-nav-list"),style:{transform:"translate(".concat(me,"px, ").concat(ge,"px)"),transition:On?"none":void 0}},Ut,r.createElement(ir,{ref:pe,prefixCls:j,locale:Y,editable:re,style:{visibility:ht?"hidden":null}}),r.createElement("div",{className:Se()("".concat(j,"-ink-bar"),Object(ue.a)({},"".concat(j,"-ink-bar-animated"),L.inkBar)),style:Pt}))))),r.createElement(Zr,Object(W.a)({},s,{ref:k,prefixCls:j,tabs:jt,className:!ht&&Qn})),r.createElement(dr,{position:"right",extra:U,prefixCls:j}))}var cr=r.forwardRef(ea);function na(s){var d=s.id,g=s.activeKey,R=s.animated,j=s.tabPosition,F=s.rtl,P=s.destroyInactiveTabPane,I=r.useContext(xt),K=I.prefixCls,L=I.tabs,V=R.tabPane,G=L.findIndex(function(U){return U.key===g});return r.createElement("div",{className:Se()("".concat(K,"-content-holder"))},r.createElement("div",{className:Se()("".concat(K,"-content"),"".concat(K,"-content-").concat(j),Object(ue.a)({},"".concat(K,"-content-animated"),V)),style:G&&V?Object(ue.a)({},F?"marginRight":"marginLeft","-".concat(G,"00%")):null},L.map(function(U){return r.cloneElement(U.node,{key:U.key,prefixCls:K,tabKey:U.key,id:d,animated:V,active:U.key===g,destroyInactiveTabPane:P})})))}function mr(s){var d=s.prefixCls,g=s.forceRender,R=s.className,j=s.style,F=s.id,P=s.active,I=s.animated,K=s.destroyInactiveTabPane,L=s.tabKey,V=s.children,G=r.useState(g),U=Object(J.a)(G,2),re=U[0],Y=U[1];r.useEffect(function(){P?Y(!0):K&&Y(!1)},[P,K]);var X={};return P||(I?(X.visibility="hidden",X.height=0,X.overflowY="hidden"):X.display="none"),r.createElement("div",{id:F&&"".concat(F,"-panel-").concat(L),role:"tabpanel",tabIndex:P?0:-1,"aria-labelledby":F&&"".concat(F,"-tab-").concat(L),"aria-hidden":!P,style:Object(oe.a)(Object(oe.a)({},X),j),className:Se()("".concat(d,"-tabpane"),P&&"".concat(d,"-tabpane-active"),R)},(P||re||g)&&V)}var fr=0;function ta(s){return Object(Rn.a)(s).map(function(d){if(r.isValidElement(d)){var g=d.key!==void 0?String(d.key):void 0;return Object(oe.a)(Object(oe.a)({key:g},d.props),{},{node:d})}return null}).filter(function(d){return d})}function ra(s,d){var g,R=s.id,j=s.prefixCls,F=j===void 0?"rc-tabs":j,P=s.className,I=s.children,K=s.direction,L=s.activeKey,V=s.defaultActiveKey,G=s.editable,U=s.animated,re=U===void 0?{inkBar:!0,tabPane:!1}:U,Y=s.tabPosition,X=Y===void 0?"top":Y,se=s.tabBarGutter,z=s.tabBarStyle,q=s.tabBarExtraContent,ne=s.locale,Q=s.moreIcon,ae=s.moreTransitionName,k=s.destroyInactiveTabPane,pe=s.renderTabBar,_=s.onChange,le=s.onTabClick,de=s.onTabScroll,te=Object(Oe.a)(s,["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"]),H=ta(I),ie=K==="rtl",fe;re===!1?fe={inkBar:!1,tabPane:!1}:re===!0?fe={inkBar:!0,tabPane:!0}:fe=Object(oe.a)({inkBar:!0,tabPane:!1},Object(Pe.a)(re)==="object"?re:{});var me=Object(r.useState)(!1),ye=Object(J.a)(me,2),Te=ye[0],he=ye[1];Object(r.useEffect)(function(){he(Object(jn.a)())},[]);var ge=Object(pn.a)(function(){var Fe;return(Fe=H[0])===null||Fe===void 0?void 0:Fe.key},{value:L,defaultValue:V}),je=Object(J.a)(ge,2),Re=je[0],Ee=je[1],Ce=Object(r.useState)(function(){return H.findIndex(function(Fe){return Fe.key===Re})}),Ne=Object(J.a)(Ce,2),Ue=Ne[0],we=Ne[1];Object(r.useEffect)(function(){var Fe=H.findIndex(function(Ge){return Ge.key===Re});if(Fe===-1){var We;Fe=Math.max(0,Math.min(Ue,H.length-1)),Ee((We=H[Fe])===null||We===void 0?void 0:We.key)}we(Fe)},[H.map(function(Fe){return Fe.key}).join("_"),Re,Ue]);var Be=Object(pn.a)(null,{value:R}),xe=Object(J.a)(Be,2),Ie=xe[0],gn=xe[1],Qe=X;Te&&!["left","right"].includes(X)&&(Qe="top"),Object(r.useEffect)(function(){R||(gn("rc-tabs-".concat(fr)),fr+=1)},[]);function Ve(Fe,We){le==null||le(Fe,We),Ee(Fe),_==null||_(Fe)}var _e={id:Ie,activeKey:Re,animated:fe,tabPosition:Qe,rtl:ie,mobile:Te},dn,cn=Object(oe.a)(Object(oe.a)({},_e),{},{editable:G,locale:ne,moreIcon:Q,moreTransitionName:ae,tabBarGutter:se,onTabClick:Ve,onTabScroll:de,extra:q,style:z,panes:I});return pe?dn=pe(cn,cr):dn=r.createElement(cr,cn),r.createElement(xt.Provider,{value:{tabs:H,prefixCls:F}},r.createElement("div",Object(W.a)({ref:d,id:R,className:Se()(F,"".concat(F,"-").concat(Qe),(g={},Object(ue.a)(g,"".concat(F,"-mobile"),Te),Object(ue.a)(g,"".concat(F,"-editable"),G),Object(ue.a)(g,"".concat(F,"-rtl"),ie),g),P)},te),dn,r.createElement(na,Object(W.a)({destroyInactiveTabPane:k},_e,{animated:fe}))))}var pr=r.forwardRef(ra);pr.TabPane=mr;var aa=pr,sa=aa,$t=e("MZF8"),on=e("dEAq"),ia=e("ZpkN"),ba=e("TIsu");function Vt(s,d){var g,R=(g=s.match(/\.(\w+)$/))===null||g===void 0?void 0:g[1];return R||(R=d.tsx?"tsx":"jsx"),R}var oa=s=>{var d,g,R,j=Object(r.useRef)(),F=Object(r.useContext)(on.context),P=F.locale,I=Object(on.useLocaleProps)(P,s),K=Object(on.useDemoUrl)(I.identifier),L=I.demoUrl||K,V=($t.a===null||$t.a===void 0?void 0:$t.a.location.hash)==="#".concat(I.identifier),G=Object.keys(I.sources).length===1,U=Object(on.useCodeSandbox)((d=I.hideActions)!==null&&d!==void 0&&d.includes("CSB")?null:I),re=Object(on.useRiddle)((g=I.hideActions)!==null&&g!==void 0&&g.includes("RIDDLE")?null:I),Y=Object(on.useMotions)(I.motions||[],j.current),X=Object(x.default)(Y,2),se=X[0],z=X[1],q=Object(on.useCopy)(),ne=Object(x.default)(q,2),Q=ne[0],ae=ne[1],k=Object(r.useState)("_"),pe=Object(x.default)(k,2),_=pe[0],le=pe[1],de=Object(r.useState)(Vt(_,I.sources[_])),te=Object(x.default)(de,2),H=te[0],ie=te[1],fe=Object(r.useState)(Boolean(I.defaultShowCode)),me=Object(x.default)(fe,2),ye=me[0],Te=me[1],he=Object(r.useState)(Math.random()),ge=Object(x.default)(he,2),je=ge[0],Re=ge[1],Ee=I.sources[_][H]||I.sources[_].content,Ce=Object(on.useTSPlaygroundUrl)(P,Ee),Ne=Object(r.useRef)(),Ue=Object(on.usePrefersColor)(),we=Object(x.default)(Ue,1),Be=we[0];Object(r.useEffect)(()=>{Re(Math.random())},[Be]);function xe(Ie){le(Ie),ie(Vt(Ie,I.sources[Ie]))}return y.a.createElement("div",{style:I.style,className:[I.className,"__dumi-default-previewer",V?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:I.identifier,"data-debug":I.debug||void 0,"data-iframe":I.iframe||void 0},I.iframe&&y.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),y.a.createElement("div",{ref:j,className:"__dumi-default-previewer-demo",style:{transform:I.transform?"translate(0, 0)":void 0,padding:I.compact||I.iframe&&I.compact!==!1?"0":void 0,background:I.background}},I.iframe?y.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(I.iframe).replace(/(\d)$/,"$1px")},key:je,src:L,ref:Ne}):I.children),y.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":I.title},I.title&&y.a.createElement(on.AnchorLink,{to:"#".concat(I.identifier)},I.title),I.description&&y.a.createElement("div",{dangerouslySetInnerHTML:{__html:I.description}})),y.a.createElement("div",{className:"__dumi-default-previewer-actions"},U&&y.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:U}),re&&y.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:re}),I.motions&&y.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:z,onClick:()=>se()}),I.iframe&&y.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:()=>Re(Math.random())}),!((R=I.hideActions)!==null&&R!==void 0&&R.includes("EXTERNAL"))&&y.a.createElement(on.Link,{target:"_blank",to:L},y.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),y.a.createElement("span",null),y.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":ae,onClick:()=>Q(Ee)}),H==="tsx"&&ye&&y.a.createElement(on.Link,{target:"_blank",to:Ce},y.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),y.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(ye?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:()=>Te(!ye)})),ye&&y.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!G&&y.a.createElement(sa,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xB7\xB7\xB7",defaultActiveKey:_,onChange:xe},Object.keys(I.sources).map(Ie=>y.a.createElement(mr,{tab:Ie==="_"?"index.".concat(Vt(Ie,I.sources[Ie])):Ie,key:Ie}))),y.a.createElement("div",{className:"__dumi-default-previewer-source"},y.a.createElement(ia.a,{code:Ee,lang:H,showCopy:!1}))))},Ca=un.default=oa},"80pN":function(Fn,un,e){"use strict";(function(x){/** @license React v16.14.0
* react-dom-test-utils.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var r=e("MgzW"),y=e("q1tI"),W=e("i8i4"),ue=e("QCnb");function J(t){for(var a="https://reactjs.org/docs/error-decoder.html?invariant="+t,u=1;u<arguments.length;u++)a+="&args[]="+encodeURIComponent(arguments[u]);return"Minified React error #"+t+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Pe=y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;Pe.hasOwnProperty("ReactCurrentDispatcher")||(Pe.ReactCurrentDispatcher={current:null}),Pe.hasOwnProperty("ReactCurrentBatchConfig")||(Pe.ReactCurrentBatchConfig={suspense:null});function Oe(t){var a=t,u=t;if(t.alternate)for(;a.return;)a=a.return;else{t=a;do a=t,(a.effectTag&1026)!=0&&(u=a.return),t=a.return;while(t)}return a.tag===3?u:null}function oe(t){if(Oe(t)!==t)throw Error(J(188))}function $n(t){var a=t.alternate;if(!a){if(a=Oe(t),a===null)throw Error(J(188));return a!==t?null:t}for(var u=t,v=a;;){var C=u.return;if(C===null)break;var B=C.alternate;if(B===null){if(v=C.return,v!==null){u=v;continue}break}if(C.child===B.child){for(B=C.child;B;){if(B===u)return oe(C),t;if(B===v)return oe(C),a;B=B.sibling}throw Error(J(188))}if(u.return!==v.return)u=C,v=B;else{for(var M=!1,$=C.child;$;){if($===u){M=!0,u=C,v=B;break}if($===v){M=!0,v=C,u=B;break}$=$.sibling}if(!M){for($=B.child;$;){if($===u){M=!0,u=B,v=C;break}if($===v){M=!0,v=B,u=C;break}$=$.sibling}if(!M)throw Error(J(189))}}if(u.alternate!==v)throw Error(J(190))}if(u.tag!==3)throw Error(J(188));return u.stateNode.current===u?t:a}function Se(){return!0}function Rn(){return!1}function jn(t,a,u,v){this.dispatchConfig=t,this._targetInst=a,this.nativeEvent=u,t=this.constructor.Interface;for(var C in t)t.hasOwnProperty(C)&&((a=t[C])?this[C]=a(u):C==="target"?this.target=v:this[C]=u[C]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Se:Rn,this.isPropagationStopped=Rn,this}r(jn.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Se)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Se)},persist:function(){this.isPersistent=Se},isPersistent:Rn,destructor:function(){var t=this.constructor.Interface,a;for(a in t)this[a]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=Rn,this._dispatchInstances=this._dispatchListeners=null}}),jn.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null},jn.extend=function(t){function a(){}function u(){return v.apply(this,arguments)}var v=this;a.prototype=v.prototype;var C=new a;return r(C,u.prototype),u.prototype=C,u.prototype.constructor=u,u.Interface=r({},v.Interface,t),u.extend=v.extend,$e(u),u},$e(jn);function pn(t,a,u,v){if(this.eventPool.length){var C=this.eventPool.pop();return this.call(C,t,a,u,v),C}return new this(t,a,u,v)}function an(t){if(!(t instanceof this))throw Error(J(279));t.destructor(),10>this.eventPool.length&&this.eventPool.push(t)}function $e(t){t.eventPool=[],t.getPooled=pn,t.release=an}var Nn=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined");function Dn(t,a){var u={};return u[t.toLowerCase()]=a.toLowerCase(),u["Webkit"+t]="webkit"+a,u["Moz"+t]="moz"+a,u}var hn={animationend:Dn("Animation","AnimationEnd"),animationiteration:Dn("Animation","AnimationIteration"),animationstart:Dn("Animation","AnimationStart"),transitionend:Dn("Transition","TransitionEnd")},Ae={},nt={};Nn&&(nt=document.createElement("div").style,"AnimationEvent"in window||(delete hn.animationend.animation,delete hn.animationiteration.animation,delete hn.animationstart.animation),"TransitionEvent"in window||delete hn.transitionend.transition);function wn(t){if(Ae[t])return Ae[t];if(!hn[t])return t;var a=hn[t],u;for(u in a)if(a.hasOwnProperty(u)&&u in nt)return Ae[t]=a[u];return t}var tt=wn("animationend"),dt=wn("animationiteration"),rt=wn("animationstart"),ct=wn("transitionend"),Bn=null;function at(t){if(Bn===null)try{var a=("require"+Math.random()).slice(0,7);Bn=(x&&x[a])("timers").setImmediate}catch(u){Bn=function(v){var C=new MessageChannel;C.port1.onmessage=v,C.port2.postMessage(void 0)}}return Bn(t)}var Vn=W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,mt=Vn[11],Mn=Vn[12],Kn=W.unstable_batchedUpdates,Jn=Pe.IsSomeRendererActing,zn=typeof ue.unstable_flushAllWithoutAsserting=="function",Wn=ue.unstable_flushAllWithoutAsserting||function(){for(var t=!1;mt();)t=!0;return t};function st(t){try{Wn(),at(function(){Wn()?st(t):t()})}catch(a){t(a)}}var vn=0,A=!1,T=W.findDOMNode,D=W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,m=D[0],i=D[4],h=D[5],b=D[6],E=D[7],o=D[8],p=D[9],l=D[10];function N(){}function w(t,a){if(!t)return[];if(t=$n(t),!t)return[];for(var u=t,v=[];;){if(u.tag===5||u.tag===6||u.tag===1||u.tag===0){var C=u.stateNode;a(C)&&v.push(C)}if(u.child)u.child.return=u,u=u.child;else{if(u===t)return v;for(;!u.sibling;){if(!u.return||u.return===t)return v;u=u.return}u.sibling.return=u.return,u=u.sibling}}}function O(t,a){if(t&&!t._reactInternalFiber){var u=""+t;throw t=Array.isArray(t)?"an array":t&&t.nodeType===1&&t.tagName?"a DOM node":u==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":u,Error(J(286,a,t))}}var c={renderIntoDocument:function(t){var a=document.createElement("div");return W.render(t,a)},isElement:function(t){return y.isValidElement(t)},isElementOfType:function(t,a){return y.isValidElement(t)&&t.type===a},isDOMComponent:function(t){return!(!t||t.nodeType!==1||!t.tagName)},isDOMComponentElement:function(t){return!!(t&&y.isValidElement(t)&&t.tagName)},isCompositeComponent:function(t){return c.isDOMComponent(t)?!1:t!=null&&typeof t.render=="function"&&typeof t.setState=="function"},isCompositeComponentWithType:function(t,a){return c.isCompositeComponent(t)?t._reactInternalFiber.type===a:!1},findAllInRenderedTree:function(t,a){return O(t,"findAllInRenderedTree"),t?w(t._reactInternalFiber,a):[]},scryRenderedDOMComponentsWithClass:function(t,a){return O(t,"scryRenderedDOMComponentsWithClass"),c.findAllInRenderedTree(t,function(u){if(c.isDOMComponent(u)){var v=u.className;typeof v!="string"&&(v=u.getAttribute("class")||"");var C=v.split(/\s+/);if(!Array.isArray(a)){if(a===void 0)throw Error(J(11));a=a.split(/\s+/)}return a.every(function(B){return C.indexOf(B)!==-1})}return!1})},findRenderedDOMComponentWithClass:function(t,a){if(O(t,"findRenderedDOMComponentWithClass"),t=c.scryRenderedDOMComponentsWithClass(t,a),t.length!==1)throw Error("Did not find exactly one match (found: "+t.length+") for class:"+a);return t[0]},scryRenderedDOMComponentsWithTag:function(t,a){return O(t,"scryRenderedDOMComponentsWithTag"),c.findAllInRenderedTree(t,function(u){return c.isDOMComponent(u)&&u.tagName.toUpperCase()===a.toUpperCase()})},findRenderedDOMComponentWithTag:function(t,a){if(O(t,"findRenderedDOMComponentWithTag"),t=c.scryRenderedDOMComponentsWithTag(t,a),t.length!==1)throw Error("Did not find exactly one match (found: "+t.length+") for tag:"+a);return t[0]},scryRenderedComponentsWithType:function(t,a){return O(t,"scryRenderedComponentsWithType"),c.findAllInRenderedTree(t,function(u){return c.isCompositeComponentWithType(u,a)})},findRenderedComponentWithType:function(t,a){if(O(t,"findRenderedComponentWithType"),t=c.scryRenderedComponentsWithType(t,a),t.length!==1)throw Error("Did not find exactly one match (found: "+t.length+") for componentType:"+a);return t[0]},mockComponent:function(t,a){return a=a||t.mockTagName||"div",t.prototype.render.mockImplementation(function(){return y.createElement(a,null,this.props.children)}),this},nativeTouchData:function(t,a){return{touches:[{pageX:t,pageY:a}]}},Simulate:null,SimulateNative:{},act:function(t){function a(){vn--,Jn.current=u,Mn.current=v}A===!1&&(A=!0,console.error("act(...) is not supported in production builds of React, and might not behave as expected.")),vn++;var u=Jn.current,v=Mn.current;Jn.current=!0,Mn.current=!0;try{var C=Kn(t)}catch(B){throw a(),B}if(C!==null&&typeof C=="object"&&typeof C.then=="function")return{then:function(B,M){C.then(function(){1<vn||zn===!0&&u===!0?(a(),B()):st(function($){a(),$?M($):B()})},function($){a(),M($)})}};try{vn!==1||zn!==!1&&u!==!1||Wn(),a()}catch(B){throw a(),B}return{then:function(B){B()}}}};function S(t){return function(a,u){if(y.isValidElement(a))throw Error(J(228));if(c.isCompositeComponent(a))throw Error(J(229));var v=i[t],C=new N;C.target=a,C.type=t.toLowerCase();var B=m(a),M=new jn(v,B,C,a);M.persist(),r(M,u),v.phasedRegistrationNames?h(M):b(M),W.unstable_batchedUpdates(function(){E(a),l(M)}),o()}}c.Simulate={};for(var f in i)c.Simulate[f]=S(f);function n(t,a){return function(u,v){var C=new N(t);r(C,v),c.isDOMComponent(u)?(u=T(u),C.target=u,p(a,1,document,C)):u.tagName&&(C.target=u,p(a,1,document,C))}}[["abort","abort"],[tt,"animationEnd"],[dt,"animationIteration"],[rt,"animationStart"],["blur","blur"],["canplaythrough","canPlayThrough"],["canplay","canPlay"],["cancel","cancel"],["change","change"],["click","click"],["close","close"],["compositionend","compositionEnd"],["compositionstart","compositionStart"],["compositionupdate","compositionUpdate"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["dragstart","dragStart"],["drag","drag"],["drop","drop"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],["ended","ended"],["error","error"],["focus","focus"],["input","input"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["loadstart","loadStart"],["loadstart","loadStart"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["mousedown","mouseDown"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["playing","playing"],["progress","progress"],["ratechange","rateChange"],["scroll","scroll"],["seeked","seeked"],["seeking","seeking"],["selectionchange","selectionChange"],["stalled","stalled"],["suspend","suspend"],["textInput","textInput"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchmove","touchMove"],["touchstart","touchStart"],[ct,"transitionEnd"],["volumechange","volumeChange"],["waiting","waiting"],["wheel","wheel"]].forEach(function(t){var a=t[1];c.SimulateNative[a]=n(a,t[0])}),x.exports=c.default||c}).call(this,e("hOG+")(Fn))},JjdP:function(Fn,un,e){"use strict";e.r(un);var x=e("9og8"),r=e("WmNS"),y=e.n(r),W=e("LtsZ"),ue=`import React, { useRef } from 'react';
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
}`,Pe=`import React from 'react';
import FormRender, { useForm } from 'form-render';

const Demo = props => {
  const form = useForm();
  return <FormRender form={form} {...props} />;
};

export default Demo;`,Oe=`export const delay = ms => new Promise(res => setTimeout(res, ms));

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
};`,Se=`import React from 'react';
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

export default Demo;`,Rn=`import React, { Component } from 'react';
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

export default Root;`,jn=`import React, { useState, useEffect } from 'react';
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

export default Demo;`,Nn=`/* PrismJS 1.16.0
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
}`,Dn=`.debug * {
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

export default Root;`,Ae=`import React, { useState, useEffect } from 'react';
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

export default withTable(App);`,Mn=`import React, { useState, useRef } from 'react';
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

export default Demo;`,vn=un.default={"guide-card":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(y.a.mark(function D(){return y.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"oLxE"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:ue}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"card-render":{version:"0.1.2"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"0.x"}},identifier:"guide-card"}},"chart-render-demo":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(y.a.mark(function D(){var m,i,h,b,E,o,p;return y.a.wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return o=function(O,c){if(!c&&O&&O.__esModule)return O;if(O===null||typeof O!="object"&&typeof O!="function")return{default:O};var S=E(c);if(S&&S.has(O))return S.get(O);var f={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var t in O)if(t!=="default"&&Object.prototype.hasOwnProperty.call(O,t)){var a=n?Object.getOwnPropertyDescriptor(O,t):null;a&&(a.get||a.set)?Object.defineProperty(f,t,a):f[t]=O[t]}return f.default=O,S&&S.set(O,f),f},E=function(O){if(typeof WeakMap!="function")return null;var c=new WeakMap,S=new WeakMap;return(E=function(n){return n?S:c})(O)},m=e("K+nK"),N.t0=m,N.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return N.t1=N.sent,i=(0,N.t0)(N.t1),N.t2=o,N.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return N.t3=N.sent,h=(0,N.t2)(N.t3),N.next=15,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 15:return b=N.sent,p=function(){var O=(0,h.useState)("Line"),c=(0,i.default)(O,2),S=c[0],f=c[1],n={Line:b.Line,Column:b.Column,PivotTable:b.PivotTable}[S];return h.default.createElement("div",null,h.default.createElement("div",{style:{marginBottom:10}},h.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return f("Line")}},"\u6298\u7EBF\u56FE"),h.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return f("Column")}},"\u67F1\u72B6\u56FE"),h.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return f("PivotTable")}},"\u4EA4\u53C9\u8868")),h.default.createElement(n,{meta:[{id:"date",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF",isDim:!1},{id:"uv",name:"\u8BBF\u5BA2\u6570",isDim:!1}],data:[{date:"20200101",pv:100,uv:50},{date:"20200102",pv:120,uv:60},{date:"20200103",pv:140,uv:70},{date:"20200104",pv:160,uv:80}]}))},N.abrupt("return",p);case 18:case"end":return N.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"chart-render-demo"}},"column-demo":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(y.a.mark(function D(){var m,i,h,b;return y.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return m=e("K+nK"),o.t0=m,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=o.sent,b=function(){return i.default.createElement(h.Column,{meta:[{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{pv:50,uv:20}]})},o.abrupt("return",b);case 11:case"end":return o.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[{ pv: 50, uv: 20 }]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo"}},"column-demo-1":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(y.a.mark(function D(){var m,i,h,b;return y.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return m=e("K+nK"),o.t0=m,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=o.sent,b=function(){return i.default.createElement(h.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},o.abrupt("return",b);case 11:case"end":return o.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-1"}},"column-demo-2":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(y.a.mark(function D(){var m,i,h,b;return y.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return m=e("K+nK"),o.t0=m,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=o.sent,b=function(){return i.default.createElement(h.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},o.abrupt("return",b);case 11:case"end":return o.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-2"}},"column-demo-3":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(y.a.mark(function D(){var m,i,h,b;return y.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return m=e("K+nK"),o.t0=m,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=o.sent,b=function(){return i.default.createElement(h.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},o.abrupt("return",b);case 11:case"end":return o.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-3"}},"column-demo-4":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(y.a.mark(function D(){var m,i,h,b;return y.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return m=e("K+nK"),o.t0=m,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=o.sent,b=function(){return i.default.createElement(h.Column,{inverted:!0,label:{position:"middle",layout:[{type:"interval-adjust-position"},{type:"interval-hide-overlap"},{type:"adjust-color"}]},meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},o.abrupt("return",b);case 11:case"end":return o.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-4"}},"line-demo":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(y.a.mark(function D(){var m,i,h,b;return y.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return m=e("K+nK"),o.t0=m,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=o.sent,b=function(){return i.default.createElement(h.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},o.abrupt("return",b);case 11:case"end":return o.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo"}},"line-demo-1":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(y.a.mark(function D(){var m,i,h,b;return y.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return m=e("K+nK"),o.t0=m,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=o.sent,b=function(){return i.default.createElement(h.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},o.abrupt("return",b);case 11:case"end":return o.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-1"}},"line-demo-2":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(y.a.mark(function D(){var m,i,h,b;return y.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return m=e("K+nK"),o.t0=m,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=o.sent,b=function(){return i.default.createElement(h.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"},{id:"pv",name:"\u8BBF\u95EE\u91CF"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20,pv:120},{ds:"2020-12-31",page:"\u9996\u9875",uv:120,pv:1120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21,pv:121},{ds:"2021-01-01",page:"\u9996\u9875",uv:121,pv:1121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15,pv:115},{ds:"2021-01-02",page:"\u9996\u9875",uv:115,pv:1115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40,pv:140},{ds:"2021-01-03",page:"\u9996\u9875",uv:140,pv:1140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31,pv:131},{ds:"2021-01-04",page:"\u9996\u9875",uv:131,pv:1131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32,pv:132},{ds:"2021-01-05",page:"\u9996\u9875",uv:132,pv:1132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30,pv:130},{ds:"2021-01-06",page:"\u9996\u9875",uv:130,pv:1130}]})},o.abrupt("return",b);case 11:case"end":return o.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-2"}},"line-demo-3":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(y.a.mark(function D(){var m,i,h,b;return y.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return m=e("K+nK"),o.t0=m,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=o.sent,b=function(){return i.default.createElement(h.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},o.abrupt("return",b);case 11:case"end":return o.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-3"}},"line-demo-4":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(y.a.mark(function D(){var m,i,h,b;return y.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return m=e("K+nK"),o.t0=m,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=o.sent,b=function(){return i.default.createElement(h.Line,{withArea:!0,isStack:!0,isPercent:!0,meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},o.abrupt("return",b);case 11:case"end":return o.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-4"}},"pivot-table-demo":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(y.a.mark(function D(){var m,i,h,b;return y.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return m=e("K+nK"),o.t0=m,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=o.sent,b=function(){return i.default.createElement(h.PivotTable,{style:{maxHeight:400,overflow:"auto"},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},o.abrupt("return",b);case 11:case"end":return o.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo"}},"pivot-table-demo-1":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(y.a.mark(function D(){var m,i,h,b;return y.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return m=e("K+nK"),o.t0=m,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=o.sent,b=function(){return i.default.createElement(h.PivotTable,{style:{maxHeight:400,overflow:"auto"},cellRender:function(N,w,O){return i.default.createElement("div",null,i.default.createElement("p",null,"\u53C2\u6570\u8868\uFF1A"),i.default.createElement("p",{style:{color:["red","orange","yellow","green","blue"][Object.keys(w).length]}},N),i.default.createElement("p",null,JSON.stringify(w)),i.default.createElement("p",null,JSON.stringify(O)))},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},o.abrupt("return",b);case 11:case"end":return o.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-1"}},"pivot-table-demo-2":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(y.a.mark(function D(){var m,i,h,b,E,o,p;return y.a.wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return o=function(O,c){if(!c&&O&&O.__esModule)return O;if(O===null||typeof O!="object"&&typeof O!="function")return{default:O};var S=E(c);if(S&&S.has(O))return S.get(O);var f={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var t in O)if(t!=="default"&&Object.prototype.hasOwnProperty.call(O,t)){var a=n?Object.getOwnPropertyDescriptor(O,t):null;a&&(a.get||a.set)?Object.defineProperty(f,t,a):f[t]=O[t]}return f.default=O,S&&S.set(O,f),f},E=function(O){if(typeof WeakMap!="function")return null;var c=new WeakMap,S=new WeakMap;return(E=function(n){return n?S:c})(O)},m=e("K+nK"),N.t0=m,N.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return N.t1=N.sent,i=(0,N.t0)(N.t1),N.t2=o,N.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return N.t3=N.sent,h=(0,N.t2)(N.t3),N.next=15,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 15:return b=N.sent,p=function(){var O=(0,h.useState)(!1),c=(0,i.default)(O,2),S=c[0],f=c[1];return h.default.createElement(h.default.Fragment,null,h.default.createElement("label",null,"\u53EF\u5C55\u5F00/\u6536\u7F29\uFF1A",h.default.createElement("input",{type:"checkbox",value:S,onChange:function(){return f(!S)}})),h.default.createElement(b.PivotTable,{leftExpandable:S,showSubtotal:!1,meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]}))},N.abrupt("return",p);case 18:case"end":return N.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-2"}},"OldSchemaTransformer-demo":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(y.a.mark(function D(){var m,i,h,b,E,o,p,l,N,w,O,c,S;return y.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return N=function(a,u){if(!u&&a&&a.__esModule)return a;if(a===null||typeof a!="object"&&typeof a!="function")return{default:a};var v=l(u);if(v&&v.has(a))return v.get(a);var C={},B=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var M in a)if(M!=="default"&&Object.prototype.hasOwnProperty.call(a,M)){var $=B?Object.getOwnPropertyDescriptor(a,M):null;$&&($.get||$.set)?Object.defineProperty(C,M,$):C[M]=a[M]}return C.default=a,v&&v.set(a,C),C},l=function(a){if(typeof WeakMap!="function")return null;var u=new WeakMap,v=new WeakMap;return(l=function(B){return B?v:u})(a)},m=e("K+nK"),n.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return n.t0=m,n.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return n.t1=n.sent,i=(0,n.t0)(n.t1),n.t2=m,n.next=13,Promise.resolve().then(e.bind(null,"tJVT"));case 13:return n.t3=n.sent,h=(0,n.t2)(n.t3),n.next=17,Promise.all([e.e(3),e.e(19)]).then(e.t.bind(null,"cUip",7));case 17:return n.t4=m,n.next=20,Promise.all([e.e(0),e.e(8),e.e(18),e.e(20)]).then(e.t.bind(null,"iJl9",7));case 20:return n.t5=n.sent,b=(0,n.t4)(n.t5),n.t6=N,n.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return n.t7=n.sent,E=(0,n.t6)(n.t7),n.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 29:return o=n.sent,n.next=32,Promise.all([e.e(22),e.e(25)]).then(e.bind(null,"7t+U"));case 32:return p=n.sent,w=b.default.TextArea,O={type:"object",properties:{number:{title:"\u6570\u5B57\u8F93\u5165\u6846",type:"number","ui:disabled":!0},checkbox:{title:"\u662F\u5426\u9009\u62E9",type:"boolean","ui:widget":"switch"}},required:["number"]},c=function(){var a=(0,E.useState)(JSON.stringify(O)),u=(0,h.default)(a,2),v=u[0],C=u[1],B=(0,E.useState)({}),M=(0,h.default)(B,2),$=M[0],Ke=M[1],Xe=function(){try{var An=(0,p.updateSchemaToNewVersion)(JSON.parse(v));Ke(An)}catch(Gn){console.log(Gn)}},sn=function(An){C(An.target.value)},Pn=function(){C(JSON.stringify(JSON.parse(v),null,2))};return E.default.createElement("div",null,E.default.createElement("div",null,"\u586B\u5165\u65E7\u7248schema\uFF1A"),E.default.createElement(w,{style:{minHeight:400,marginTop:12,marginBottom:12},value:v,onChange:sn}),E.default.createElement(i.default,{style:{marginRight:12},onClick:Pn},"\u683C\u5F0F\u5316\u65E7schema"),E.default.createElement(i.default,{type:"primary",onClick:Xe},"\u751F\u6210\u65B0\u7248schema"),E.default.createElement(w,{style:{minHeight:400,marginTop:12},value:JSON.stringify($,null,2)}))},S=c,n.abrupt("return",S);case 38:case"end":return n.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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

export default Translator;`},"packages/form-render/src/utils.js":{import:"../../packages/form-render/src/utils.js",content:J}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"},"lodash-es":{version:"4.17.21"}},identifier:"OldSchemaTransformer-demo"}},"form-render-demo":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(y.a.mark(function D(){var m,i,h,b,E,o,p,l,N,w;return y.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return p=function(f,n){if(!n&&f&&f.__esModule)return f;if(f===null||typeof f!="object"&&typeof f!="function")return{default:f};var t=o(n);if(t&&t.has(f))return t.get(f);var a={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in f)if(v!=="default"&&Object.prototype.hasOwnProperty.call(f,v)){var C=u?Object.getOwnPropertyDescriptor(f,v):null;C&&(C.get||C.set)?Object.defineProperty(a,v,C):a[v]=f[v]}return a.default=f,t&&t.set(f,a),a},o=function(f){if(typeof WeakMap!="function")return null;var n=new WeakMap,t=new WeakMap;return(o=function(u){return u?t:n})(f)},m=e("K+nK"),c.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return c.t0=m,c.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return c.t1=c.sent,i=(0,c.t0)(c.t1),c.t2=m,c.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return c.t3=c.sent,h=(0,c.t2)(c.t3),c.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 17:return b=c.sent,c.t4=p,c.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 21:return c.t5=c.sent,E=(0,c.t4)(c.t5),l={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},N=function(){var f=(0,E.useForm)(),n=function(a,u){console.log("formData:",a,"errors",u)};return h.default.createElement("div",null,h.default.createElement(E.default,{form:f,schema:l,onFinish:n}),h.default.createElement(i.default,{type:"primary",onClick:f.submit},"\u63D0\u4EA4"))},w=N,c.abrupt("return",w);case 27:case"end":return c.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo"}},"form-render-demo-1":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(y.a.mark(function D(){var m,i,h,b,E,o,p,l,N,w,O,c,S,f;return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return O=function(u,v){if(!v&&u&&u.__esModule)return u;if(u===null||typeof u!="object"&&typeof u!="function")return{default:u};var C=w(v);if(C&&C.has(u))return C.get(u);var B={},M=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var $ in u)if($!=="default"&&Object.prototype.hasOwnProperty.call(u,$)){var Ke=M?Object.getOwnPropertyDescriptor(u,$):null;Ke&&(Ke.get||Ke.set)?Object.defineProperty(B,$,Ke):B[$]=u[$]}return B.default=u,C&&C.set(u,B),B},w=function(u){if(typeof WeakMap!="function")return null;var v=new WeakMap,C=new WeakMap;return(w=function(M){return M?C:v})(u)},m=e("K+nK"),t.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return t.t0=m,t.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return t.t1=t.sent,i=(0,t.t0)(t.t1),t.t2=m,t.next=13,e.e(86).then(e.bind(null,"fWQN"));case 13:return t.t3=t.sent,h=(0,t.t2)(t.t3),t.t4=m,t.next=18,e.e(87).then(e.bind(null,"mtLc"));case 18:return t.t5=t.sent,b=(0,t.t4)(t.t5),t.t6=m,t.next=23,e.e(78).then(e.bind(null,"yKVA"));case 23:return t.t7=t.sent,E=(0,t.t6)(t.t7),t.t8=m,t.next=28,e.e(77).then(e.bind(null,"879j"));case 28:return t.t9=t.sent,o=(0,t.t8)(t.t9),t.t10=m,t.next=33,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 33:return t.t11=t.sent,p=(0,t.t10)(t.t11),t.next=37,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 37:return l=t.sent,t.t12=O,t.next=41,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 41:return t.t13=t.sent,N=(0,t.t12)(t.t13),c={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},S=function(a){(0,E.default)(v,a);var u=(0,o.default)(v);function v(){var C;(0,h.default)(this,v);for(var B=arguments.length,M=new Array(B),$=0;$<B;$++)M[$]=arguments[$];return C=u.call.apply(u,[this].concat(M)),C.onFinish=function(Ke,Xe){console.log("formData:",Ke,"errors",Xe)},C}return(0,b.default)(v,[{key:"render",value:function(){var B=this.props.form;return p.default.createElement("div",null,p.default.createElement(N.default,{form:B,schema:c,onFinish:this.onFinish}),p.default.createElement(i.default,{type:"primary",onClick:B.submit},"\u63D0\u4EA4"))}}]),v}(p.default.Component),f=(0,N.connectForm)(S),t.abrupt("return",f);case 47:case"end":return t.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default connectForm(Demo);`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo-1"}},"form-render-demo-2":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(y.a.mark(function D(){var m,i,h,b,E,o,p,l,N,w;return y.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return p=function(f,n){if(!n&&f&&f.__esModule)return f;if(f===null||typeof f!="object"&&typeof f!="function")return{default:f};var t=o(n);if(t&&t.has(f))return t.get(f);var a={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in f)if(v!=="default"&&Object.prototype.hasOwnProperty.call(f,v)){var C=u?Object.getOwnPropertyDescriptor(f,v):null;C&&(C.get||C.set)?Object.defineProperty(a,v,C):a[v]=f[v]}return a.default=f,t&&t.set(f,a),a},o=function(f){if(typeof WeakMap!="function")return null;var n=new WeakMap,t=new WeakMap;return(o=function(u){return u?t:n})(f)},m=e("K+nK"),c.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return c.t0=m,c.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return c.t1=c.sent,i=(0,c.t0)(c.t1),c.t2=m,c.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return c.t3=c.sent,h=(0,c.t2)(c.t3),c.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 17:return b=c.sent,c.t4=p,c.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 21:return c.t5=c.sent,E=(0,c.t4)(c.t5),l={displayType:"row",labelWidth:60,type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F",type:"range",format:"date"},showSetting:{title:"\u662F\u5426\u5C55\u793A\u7F51\u5740",type:"boolean"},siteUrl:{title:"\u7F51\u5740",type:"string",placeholder:"\u6B64\u5904\u5FC5\u586B",hidden:"{{formData.showSetting !== true}}",required:!0,props:{addonBefore:"https://",addonAfter:".com"}}}},N=function(){var f=(0,E.useForm)(),n=function(a,u){u.length>0?alert("errors:"+JSON.stringify(u)):alert("formData:"+JSON.stringify(a,null,2))};return h.default.createElement("div",null,h.default.createElement(E.default,{form:f,schema:l,onFinish:n}),h.default.createElement(i.default,{type:"primary",onClick:f.submit},"\u63D0\u4EA4"))},w=N,c.abrupt("return",w);case 27:case"end":return c.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-demo-2"}},"display-demo":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(y.a.mark(function D(){var m,i,h,b,E;return y.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return m=e("K+nK"),p.t0=m,p.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return p.t1=p.sent,i=(0,p.t0)(p.t1),p.t2=m,p.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return p.t3=p.sent,h=(0,p.t2)(p.t3),b=function(N){return{type:"object",displayType:N,properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},objectName:{title:"\u5BF9\u8C61",bind:"obj",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},E=function(){return i.default.createElement("div",null,i.default.createElement("h2",null,"display: row"),i.default.createElement(h.default,{schema:b("row")}),i.default.createElement("h2",null,"display: column"),i.default.createElement(h.default,{schema:b("column")}))},p.abrupt("return",E);case 14:case"end":return p.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`},"demo/display.js":{import:"../demo/display",content:Pe}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo"}},"display-demo-1":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(y.a.mark(function D(){var m,i,h,b,E;return y.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return m=e("K+nK"),p.t0=m,p.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return p.t1=p.sent,i=(0,p.t0)(p.t1),p.t2=m,p.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return p.t3=p.sent,h=(0,p.t2)(p.t3),b={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0},check:{title:"box",type:"boolean",default:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},E=function(){return i.default.createElement(h.default,{readOnly:!0,schema:b})},p.abrupt("return",E);case 14:case"end":return p.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form readOnly schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:Pe}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-1"}},"display-demo-2":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(y.a.mark(function D(){var m,i,h,b,E;return y.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return m=e("K+nK"),p.t0=m,p.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return p.t1=p.sent,i=(0,p.t0)(p.t1),p.t2=m,p.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return p.t3=p.sent,h=(0,p.t2)(p.t3),b={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0,width:"50%"},check:{title:"box",type:"boolean",default:!0,width:"50%",labelWidth:6},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},E=function(){return i.default.createElement(h.default,{labelWidth:"200",schema:b})},p.abrupt("return",E);case 14:case"end":return p.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form labelWidth="200" schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:Pe}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-2"}},"display-demo-3":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(y.a.mark(function D(){var m,i,h,b,E,o;return y.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return m=e("K+nK"),l.t0=m,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,i=(0,l.t0)(l.t1),l.t2=m,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,h=(0,l.t2)(l.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},E=function(){return i.default.createElement(h.default,{schema:b})},o=E,l.abrupt("return",o);case 15:case"end":return l.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Pe}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-3"}},"display-demo-4":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(y.a.mark(function D(){var m,i,h,b,E,o;return y.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return m=e("K+nK"),l.t0=m,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,i=(0,l.t0)(l.t1),l.t2=m,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,h=(0,l.t2)(l.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},E=function(){return i.default.createElement(h.default,{schema:b})},o=E,l.abrupt("return",o);case 15:case"end":return l.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Pe}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-4"}},"display-demo-5":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(y.a.mark(function D(){var m,i,h,b,E,o;return y.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return m=e("K+nK"),l.t0=m,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,i=(0,l.t0)(l.t1),l.t2=m,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,h=(0,l.t2)(l.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},E=function(){return i.default.createElement(h.default,{schema:b})},o=E,l.abrupt("return",o);case 15:case"end":return l.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Pe}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-5"}},"display-demo-6":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(y.a.mark(function D(){var m,i,h,b,E,o;return y.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return m=e("K+nK"),l.t0=m,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,i=(0,l.t0)(l.t1),l.t2=m,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,h=(0,l.t2)(l.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",props:{hideMove:!0},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},E=function(){return i.default.createElement(h.default,{schema:b})},o=E,l.abrupt("return",o);case 15:case"end":return l.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Pe}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-6"}},"form-methods-demo":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(y.a.mark(function D(){var m,i,h,b,E,o,p,l,N,w,O,c,S;return y.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return O=function(a,u){if(!u&&a&&a.__esModule)return a;if(a===null||typeof a!="object"&&typeof a!="function")return{default:a};var v=w(u);if(v&&v.has(a))return v.get(a);var C={},B=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var M in a)if(M!=="default"&&Object.prototype.hasOwnProperty.call(a,M)){var $=B?Object.getOwnPropertyDescriptor(a,M):null;$&&($.get||$.set)?Object.defineProperty(C,M,$):C[M]=a[M]}return C.default=a,v&&v.set(a,C),C},w=function(a){if(typeof WeakMap!="function")return null;var u=new WeakMap,v=new WeakMap;return(w=function(B){return B?v:u})(a)},m=e("K+nK"),n.next=5,e.e(23).then(e.t.bind(null,"lfLe",7));case 5:return n.t0=m,n.next=8,e.e(24).then(e.t.bind(null,"Cp9S",7));case 8:return n.t1=n.sent,i=(0,n.t0)(n.t1),n.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return n.t2=m,n.next=15,e.e(8).then(e.t.bind(null,"4IMT",7));case 15:return n.t3=n.sent,h=(0,n.t2)(n.t3),n.next=19,e.e(15).then(e.t.bind(null,"tL+A",7));case 19:return n.t4=m,n.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return n.t5=n.sent,b=(0,n.t4)(n.t5),n.t6=m,n.next=27,Promise.resolve().then(e.bind(null,"tJVT"));case 27:return n.t7=n.sent,E=(0,n.t6)(n.t7),n.t8=O,n.next=32,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 32:return n.t9=n.sent,o=(0,n.t8)(n.t9),n.next=36,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 36:return p=n.sent,n.t10=O,n.next=40,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 40:return n.t11=n.sent,l=(0,n.t10)(n.t11),n.next=44,e.e(16).then(e.bind(null,"OH0R"));case 44:return N=n.sent,c=function(){var a=(0,l.useForm)(),u=(0,o.useState)({}),v=(0,E.default)(u,2),C=v[0],B=v[1],M=function(){(0,N.fakeApi)("xxx/getForm").then(function(Xe){a.setValues({input1:"hello world",select1:"c"})})};(0,o.useEffect)(function(){(0,N.delay)(1e3).then(function(Ke){B({type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}})})},[]);var $=function(Xe,sn){sn.length>0?b.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(sn.map(function(Pn){return Pn.name}))):(0,N.fakeApi)("xxx/submit",Xe).then(function(Pn){return b.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})};return o.default.createElement("div",{style:{width:"400px"}},o.default.createElement(l.default,{form:a,schema:C,onFinish:$}),o.default.createElement(i.default,null,o.default.createElement(h.default,{onClick:M},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),o.default.createElement(h.default,{type:"primary",onClick:a.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},S=c,n.abrupt("return",S);case 48:case"end":return n.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Oe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo"}},"form-methods-demo-1":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(y.a.mark(function D(){var m,i,h,b,E,o,p,l,N,w,O,c,S;return y.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return w=function(a,u){if(!u&&a&&a.__esModule)return a;if(a===null||typeof a!="object"&&typeof a!="function")return{default:a};var v=N(u);if(v&&v.has(a))return v.get(a);var C={},B=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var M in a)if(M!=="default"&&Object.prototype.hasOwnProperty.call(a,M)){var $=B?Object.getOwnPropertyDescriptor(a,M):null;$&&($.get||$.set)?Object.defineProperty(C,M,$):C[M]=a[M]}return C.default=a,v&&v.set(a,C),C},N=function(a){if(typeof WeakMap!="function")return null;var u=new WeakMap,v=new WeakMap;return(N=function(B){return B?v:u})(a)},m=e("K+nK"),n.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return n.t0=m,n.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return n.t1=n.sent,i=(0,n.t0)(n.t1),n.t2=m,n.next=13,Promise.resolve().then(e.bind(null,"PpiC"));case 13:return n.t3=n.sent,h=(0,n.t2)(n.t3),n.next=17,e.e(15).then(e.t.bind(null,"tL+A",7));case 17:return n.t4=m,n.next=20,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 20:return n.t5=n.sent,b=(0,n.t4)(n.t5),n.t6=m,n.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return n.t7=n.sent,E=(0,n.t6)(n.t7),n.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 29:return o=n.sent,n.t8=w,n.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 33:return n.t9=n.sent,p=(0,n.t8)(n.t9),n.next=37,e.e(16).then(e.bind(null,"OH0R"));case 37:return l=n.sent,O={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},c=function(){var a=(0,p.useForm)(),u=function(B,M){M.length>0?b.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(M.map(function($){return $.name}))):(0,l.fakeApi)("xxx/submit",B).then(function($){return b.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},v=function(B){var M=B.data,$=B.errors,Ke=B.schema,Xe=(0,h.default)(B,["data","errors","schema"]);return(0,l.fakeApi)("xxx/validation").then(function(sn){return{name:"select1",error:["\u5916\u90E8\u6821\u9A8C\u9519\u8BEF"]}})};return E.default.createElement("div",{style:{width:"400px"}},E.default.createElement(p.default,{form:a,schema:O,beforeFinish:v,onFinish:u}),E.default.createElement(i.default,{type:"primary",onClick:a.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},S=c,n.abrupt("return",S);case 42:case"end":return n.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Oe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-1"}},"form-methods-demo-2":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(y.a.mark(function D(){var m,i,h,b,E,o,p,l,N,w,O,c,S;return y.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return w=function(a,u){if(!u&&a&&a.__esModule)return a;if(a===null||typeof a!="object"&&typeof a!="function")return{default:a};var v=N(u);if(v&&v.has(a))return v.get(a);var C={},B=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var M in a)if(M!=="default"&&Object.prototype.hasOwnProperty.call(a,M)){var $=B?Object.getOwnPropertyDescriptor(a,M):null;$&&($.get||$.set)?Object.defineProperty(C,M,$):C[M]=a[M]}return C.default=a,v&&v.set(a,C),C},N=function(a){if(typeof WeakMap!="function")return null;var u=new WeakMap,v=new WeakMap;return(N=function(B){return B?v:u})(a)},m=e("K+nK"),n.next=5,e.e(23).then(e.t.bind(null,"lfLe",7));case 5:return n.t0=m,n.next=8,e.e(24).then(e.t.bind(null,"Cp9S",7));case 8:return n.t1=n.sent,i=(0,n.t0)(n.t1),n.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return n.t2=m,n.next=15,e.e(8).then(e.t.bind(null,"4IMT",7));case 15:return n.t3=n.sent,h=(0,n.t2)(n.t3),n.next=19,e.e(15).then(e.t.bind(null,"tL+A",7));case 19:return n.t4=m,n.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return n.t5=n.sent,b=(0,n.t4)(n.t5),n.t6=m,n.next=27,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 27:return n.t7=n.sent,E=(0,n.t6)(n.t7),n.next=31,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 31:return o=n.sent,n.t8=w,n.next=35,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 35:return n.t9=n.sent,p=(0,n.t8)(n.t9),n.next=39,e.e(16).then(e.bind(null,"OH0R"));case 39:return l=n.sent,O={type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F\u8303\u56F4",type:"range",format:"date"}}},c=function(){var a=(0,p.useForm)(),u=function(B,M){M.length>0?b.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(M.map(function($){return $.name}))):(0,l.fakeApi)("xxx/submit",B).then(function($){return b.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},v=function(){(0,l.fakeApi)("xxx/getForm").then(function(B){a.setValues({startDate:"2020-04-04",endDate:"2020-04-24"})})};return E.default.createElement("div",{style:{width:"400px"}},E.default.createElement(p.default,{form:a,schema:O,onFinish:u}),E.default.createElement(i.default,null,E.default.createElement(h.default,{onClick:v},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),E.default.createElement(h.default,{type:"primary",onClick:a.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},S=c,n.abrupt("return",S);case 44:case"end":return n.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Oe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-2"}},"form-methods-demo-3":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(y.a.mark(function D(){var m,i,h,b,E,o,p,l,N,w,O,c;return y.a.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return N=function(t,a){if(!a&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var u=l(a);if(u&&u.has(t))return u.get(t);var v={},C=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var B in t)if(B!=="default"&&Object.prototype.hasOwnProperty.call(t,B)){var M=C?Object.getOwnPropertyDescriptor(t,B):null;M&&(M.get||M.set)?Object.defineProperty(v,B,M):v[B]=t[B]}return v.default=t,u&&u.set(t,v),v},l=function(t){if(typeof WeakMap!="function")return null;var a=new WeakMap,u=new WeakMap;return(l=function(C){return C?u:a})(t)},m=e("K+nK"),f.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return f.t0=m,f.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return f.t1=f.sent,i=(0,f.t0)(f.t1),f.next=12,e.e(15).then(e.t.bind(null,"tL+A",7));case 12:return f.t2=m,f.next=15,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 15:return f.t3=f.sent,h=(0,f.t2)(f.t3),f.t4=N,f.next=20,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 20:return f.t5=f.sent,b=(0,f.t4)(f.t5),f.next=24,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 24:return E=f.sent,f.t6=N,f.next=28,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 28:return f.t7=f.sent,o=(0,f.t6)(f.t7),f.next=32,e.e(16).then(e.bind(null,"OH0R"));case 32:return p=f.sent,w={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select1:{title:"\u5355\u9009",type:"string",widget:"select"}}}}},O=function(){var t=(0,o.useForm)(),a=function(){t.setSchemaByPath("obj1.select1",{enum:["east","south","west","north"],enumNames:["\u4E1C","\u5357","\u897F","\u5317"]})},u=function(C,B){B.length>0?h.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(B.map(function(M){return M.name}))):h.default.info(JSON.stringify(C))};return b.default.createElement("div",{style:{width:"400px"}},b.default.createElement(o.default,{form:t,schema:w,onMount:a,onFinish:u}),b.default.createElement(i.default,{type:"primary",onClick:t.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},c=O,f.abrupt("return",c);case 37:case"end":return f.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Oe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-3"}},"function-demo":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(y.a.mark(function D(){var m,i,h,b,E,o,p,l;return y.a.wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return E=function(c,S){if(!S&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var f=b(S);if(f&&f.has(c))return f.get(c);var n={},t=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in c)if(a!=="default"&&Object.prototype.hasOwnProperty.call(c,a)){var u=t?Object.getOwnPropertyDescriptor(c,a):null;u&&(u.get||u.set)?Object.defineProperty(n,a,u):n[a]=c[a]}return n.default=c,f&&f.set(c,n),n},b=function(c){if(typeof WeakMap!="function")return null;var S=new WeakMap,f=new WeakMap;return(b=function(t){return t?f:S})(c)},m=e("K+nK"),w.t0=m,w.next=6,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 6:return w.t1=w.sent,i=(0,w.t0)(w.t1),w.t2=E,w.next=11,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 11:return w.t3=w.sent,h=(0,w.t2)(w.t3),o={type:"object",properties:{checkbox1:{title:"\u5C55\u793A\u66F4\u591A\u5185\u5BB9",type:"boolean"},select1:{title:"\u8BF7\u5047\u539F\u56E0",type:"string",enum:["a","b","c"],enumNames:["\u75C5\u5047","\u6709\u4E8B","\u5176\u5B83 (\u9700\u6CE8\u660E\u5177\u4F53\u539F\u56E0)"],hidden:"{{formData.checkbox1 !== true}}",widget:"radio"},input1:{title:"\u5177\u4F53\u539F\u56E0",type:"string",format:"textarea",hidden:'{{rootValue.checkbox1 !== true || formData.select1 !== "c"}}'}}},p=function(){var c=(0,h.useForm)();return i.default.createElement(h.default,{form:c,schema:o})},l=p,w.abrupt("return",l);case 17:case"end":return w.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo1;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo"}},"function-demo-1":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(y.a.mark(function D(){var m,i,h,b,E;return y.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return m=e("K+nK"),p.t0=m,p.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return p.t1=p.sent,i=(0,p.t0)(p.t1),p.t2=m,p.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(17)]).then(e.bind(null,"c2mQ"));case 9:return p.t3=p.sent,h=(0,p.t2)(p.t3),p.next=13,e.e(21).then(e.bind(null,"8iYR"));case 13:return b=p.sent,E=function(){return i.default.createElement(h.default,{schema:b.expression})},p.abrupt("return",E);case 16:case"end":return p.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { expression } from '../json/schema';

export default () => <FR schema={expression} />;`},"demo/FR.jsx":{import:"../demo/FR",content:oe},"json/schema.js":{import:"../json/schema",content:$n}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo-1"}},"lifeCycle-demo":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(y.a.mark(function D(){var m,i,h,b,E,o,p,l,N;return y.a.wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return E=function(S,f){if(!f&&S&&S.__esModule)return S;if(S===null||typeof S!="object"&&typeof S!="function")return{default:S};var n=b(f);if(n&&n.has(S))return n.get(S);var t={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in S)if(u!=="default"&&Object.prototype.hasOwnProperty.call(S,u)){var v=a?Object.getOwnPropertyDescriptor(S,u):null;v&&(v.get||v.set)?Object.defineProperty(t,u,v):t[u]=S[u]}return t.default=S,n&&n.set(S,t),t},b=function(S){if(typeof WeakMap!="function")return null;var f=new WeakMap,n=new WeakMap;return(b=function(a){return a?n:f})(S)},O.t0=E,O.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return O.t1=O.sent,m=(0,O.t0)(O.t1),O.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 9:return i=O.sent,O.t2=E,O.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 13:return O.t3=O.sent,h=(0,O.t2)(O.t3),o=function(S){return new Promise(function(f){return setTimeout(f,S)})},p={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u9009\u62E9\u6846",description:"\u52A0\u8F7D\u4E2D...",type:"string",enum:[],widget:"radio"}}},l=function(){var S=(0,h.useForm)(),f=function(){S.setValues({input1:"hello world"}),o(3e3).then(function(t){S.setSchemaByPath("select1",{description:"",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]})})};return m.default.createElement(h.default,{form:S,schema:p,onMount:f})},N=l,O.abrupt("return",N);case 20:case"end":return O.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.6.9"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"lifeCycle-demo"}},"listDisplay-demo":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(y.a.mark(function D(){var m,i,h,b,E,o;return y.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return m=e("K+nK"),l.t0=m,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,i=(0,l.t0)(l.t1),l.t2=m,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,h=(0,l.t2)(l.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},E=function(){return i.default.createElement(h.default,{schema:b})},o=E,l.abrupt("return",o);case 15:case"end":return l.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Pe}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo"}},"listDisplay-demo-1":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(y.a.mark(function D(){var m,i,h,b,E,o;return y.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return m=e("K+nK"),l.t0=m,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,i=(0,l.t0)(l.t1),l.t2=m,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,h=(0,l.t2)(l.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},E=function(){return i.default.createElement(h.default,{schema:b})},o=E,l.abrupt("return",o);case 15:case"end":return l.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Pe}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-1"}},"listDisplay-demo-2":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(y.a.mark(function D(){var m,i,h,b,E,o;return y.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return m=e("K+nK"),l.t0=m,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,i=(0,l.t0)(l.t1),l.t2=m,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,h=(0,l.t2)(l.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},E=function(){return i.default.createElement(h.default,{schema:b})},o=E,l.abrupt("return",o);case 15:case"end":return l.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Pe}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-2"}},"listDisplay-demo-3":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(y.a.mark(function D(){var m,i,h,b,E,o;return y.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return m=e("K+nK"),l.t0=m,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,i=(0,l.t0)(l.t1),l.t2=m,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,h=(0,l.t2)(l.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",props:{hideMove:!0},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},E=function(){return i.default.createElement(h.default,{schema:b})},o=E,l.abrupt("return",o);case 15:case"end":return l.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Pe}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-3"}},"listDisplay-demo-4":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(y.a.mark(function D(){var m,i,h,b,E,o;return y.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return m=e("K+nK"),l.t0=m,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,i=(0,l.t0)(l.t1),l.t2=m,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,h=(0,l.t2)(l.t3),window.hello=function(N){var w=N.value;console.log(w)},b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list4",itemProps:{buttons:[{callback:"hello",text:"\u590D\u5236"}]},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},E=function(){return i.default.createElement(h.default,{schema:b})},o=E,l.abrupt("return",o);case 16:case"end":return l.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Pe}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-4"}},"mapping-demo":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(y.a.mark(function D(){var m,i,h,b,E,o,p,l,N,w,O;return y.a.wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return p=function(n,t){if(!t&&n&&n.__esModule)return n;if(n===null||typeof n!="object"&&typeof n!="function")return{default:n};var a=o(t);if(a&&a.has(n))return a.get(n);var u={},v=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var C in n)if(C!=="default"&&Object.prototype.hasOwnProperty.call(n,C)){var B=v?Object.getOwnPropertyDescriptor(n,C):null;B&&(B.get||B.set)?Object.defineProperty(u,C,B):u[C]=n[C]}return u.default=n,a&&a.set(n,u),u},o=function(n){if(typeof WeakMap!="function")return null;var t=new WeakMap,a=new WeakMap;return(o=function(v){return v?a:t})(n)},m=e("K+nK"),S.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return S.t0=m,S.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return S.t1=S.sent,i=(0,S.t0)(S.t1),S.t2=m,S.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return S.t3=S.sent,h=(0,S.t2)(S.t3),S.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 17:return b=S.sent,S.t4=p,S.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 21:return S.t5=S.sent,E=(0,S.t4)(S.t5),l=function(n){var t=n.schema;return t.$id==="#"?h.default.createElement("div",null,n.children):h.default.createElement("div",null,"my custom object:",n.children)},N={type:"object",properties:{object2:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u8F93\u5165\u6846",type:"string"}}}},labelWidth:120,displayType:"row"},w=function(){var n=(0,E.useForm)(),t=function(u,v){console.log("formData:",u,"errors",v)};return h.default.createElement("div",null,h.default.createElement(E.default,{form:n,schema:N,onFinish:t,mapping:{object:"CustomComA"},widgets:{CustomComA:l}}),h.default.createElement(i.default,{type:"primary",onClick:n.submit},"\u63D0\u4EA4"))},O=w,S.abrupt("return",O);case 28:case"end":return S.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},"react-dom":{version:">=16.8.0"}},identifier:"mapping-demo"}},"watch-demo":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(y.a.mark(function D(){var m,i,h,b,E,o,p,l;return y.a.wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return E=function(c,S){if(!S&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var f=b(S);if(f&&f.has(c))return f.get(c);var n={},t=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in c)if(a!=="default"&&Object.prototype.hasOwnProperty.call(c,a)){var u=t?Object.getOwnPropertyDescriptor(c,a):null;u&&(u.get||u.set)?Object.defineProperty(n,a,u):n[a]=c[a]}return n.default=c,f&&f.set(c,n),n},b=function(c){if(typeof WeakMap!="function")return null;var S=new WeakMap,f=new WeakMap;return(b=function(t){return t?f:S})(c)},w.t0=E,w.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return w.t1=w.sent,m=(0,w.t0)(w.t1),w.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 9:return i=w.sent,w.t2=E,w.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 13:return w.t3=w.sent,h=(0,w.t2)(w.t3),o={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"}}},p=function(){var c=(0,h.useForm)(),S={"#":function(n){console.log("\u8868\u5355\u7684\u65F6\u65F6\u6570\u636E\u4E3A\uFF1A",n)},input1:function(n){c.setValueByPath("input2",n)}};return m.default.createElement(h.default,{form:c,schema:o,watch:S})},l=p,w.abrupt("return",l);case 19:case"end":return w.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.6.9"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo"}},"watch-demo-1":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(y.a.mark(function D(){var m,i,h,b,E,o,p,l,N,w;return y.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return p=function(f,n){if(!n&&f&&f.__esModule)return f;if(f===null||typeof f!="object"&&typeof f!="function")return{default:f};var t=o(n);if(t&&t.has(f))return t.get(f);var a={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in f)if(v!=="default"&&Object.prototype.hasOwnProperty.call(f,v)){var C=u?Object.getOwnPropertyDescriptor(f,v):null;C&&(C.get||C.set)?Object.defineProperty(a,v,C):a[v]=f[v]}return a.default=f,t&&t.set(f,a),a},o=function(f){if(typeof WeakMap!="function")return null;var n=new WeakMap,t=new WeakMap;return(o=function(u){return u?t:n})(f)},m=e("K+nK"),c.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return c.t0=m,c.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return c.t1=c.sent,i=(0,c.t0)(c.t1),c.t2=p,c.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return c.t3=c.sent,h=(0,c.t2)(c.t3),c.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 17:return b=c.sent,c.t4=p,c.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 21:return c.t5=c.sent,E=(0,c.t4)(c.t5),l={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"radio"}}}}},N=function(){var f=(0,E.useForm)(),n=function(u,v){v.length>0?alert("errorFields:"+JSON.stringify(v)):alert("formData:"+JSON.stringify(u,null,2))},t={input1:function(u){u&&u.length>2?f.setSchemaByPath("obj1.select",function(v){var C=v.enumNames;return{enumNames:C.map(function(B){return B+"a"})}}):f.setSchemaByPath("obj1.select",{enumNames:["\u65E9","\u4E2D","\u665A"]})}};return h.default.createElement("div",null,h.default.createElement(E.default,{form:f,schema:l,onFinish:n,watch:t}),h.default.createElement(i.default,{type:"",style:{marginRight:8},onClick:function(){return f.setSchemaByPath("input2",{title:"\u7F16\u8F91\u6846",format:"textarea"})}},"\u5C06 input \u6539\u4E3A textarea"),h.default.createElement(i.default,{type:"primary",onClick:f.submit},"\u63D0\u4EA4"))},w=N,c.abrupt("return",w);case 27:case"end":return c.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo-1"}},"widget-demo":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(y.a.mark(function D(){var m,i,h,b,E,o,p,l,N,w,O,c,S;return y.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return N=function(a,u){if(!u&&a&&a.__esModule)return a;if(a===null||typeof a!="object"&&typeof a!="function")return{default:a};var v=l(u);if(v&&v.has(a))return v.get(a);var C={},B=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var M in a)if(M!=="default"&&Object.prototype.hasOwnProperty.call(a,M)){var $=B?Object.getOwnPropertyDescriptor(a,M):null;$&&($.get||$.set)?Object.defineProperty(C,M,$):C[M]=a[M]}return C.default=a,v&&v.set(a,C),C},l=function(a){if(typeof WeakMap!="function")return null;var u=new WeakMap,v=new WeakMap;return(l=function(B){return B?v:u})(a)},m=e("K+nK"),n.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return n.t0=m,n.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return n.t1=n.sent,i=(0,n.t0)(n.t1),n.next=12,Promise.all([e.e(3),e.e(19)]).then(e.t.bind(null,"cUip",7));case 12:return n.t2=m,n.next=15,Promise.all([e.e(0),e.e(8),e.e(18),e.e(20)]).then(e.t.bind(null,"iJl9",7));case 15:return n.t3=n.sent,h=(0,n.t2)(n.t3),n.t4=m,n.next=20,e.e(88).then(e.bind(null,"0Owb"));case 20:return n.t5=n.sent,b=(0,n.t4)(n.t5),n.t6=m,n.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return n.t7=n.sent,E=(0,n.t6)(n.t7),n.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 29:return o=n.sent,n.t8=N,n.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 33:return n.t9=n.sent,p=(0,n.t8)(n.t9),w={type:"object",properties:{string:{title:"\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6",type:"string",widget:"site"},select:{title:"\u5355\u9009",type:"number",enum:[1,2,3],enumNames:["\u9009\u98791","\u9009\u98792","\u9009\u98793"]}}},O=function(a){return console.log("widget props:",a),E.default.createElement(h.default,(0,b.default)({addonBefore:"https://",addonAfter:".com"},a))},c=function(){var a=(0,p.useForm)();return E.default.createElement("div",null,E.default.createElement(p.default,{form:a,schema:w,widgets:{site:O},onFinish:function(v){return alert(JSON.stringify(v,null,2))}}),E.default.createElement(i.default,{type:"primary",onClick:a.submit},"\u63D0\u4EA4"))},S=c,n.abrupt("return",S);case 40:case"end":return n.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},"react-dom":{version:">=16.8.0"}},identifier:"widget-demo"}},"form-render-dependencies":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(y.a.mark(function D(){return y.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"ODQR"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:Se}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-dependencies"}},"measure-demo":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(y.a.mark(function D(){var m,i,h,b,E,o,p,l,N,w;return y.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return l=function(f,n){if(!n&&f&&f.__esModule)return f;if(f===null||typeof f!="object"&&typeof f!="function")return{default:f};var t=p(n);if(t&&t.has(f))return t.get(f);var a={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in f)if(v!=="default"&&Object.prototype.hasOwnProperty.call(f,v)){var C=u?Object.getOwnPropertyDescriptor(f,v):null;C&&(C.get||C.set)?Object.defineProperty(a,v,C):a[v]=f[v]}return a.default=f,t&&t.set(f,a),a},p=function(f){if(typeof WeakMap!="function")return null;var n=new WeakMap,t=new WeakMap;return(p=function(u){return u?t:n})(f)},m=e("K+nK"),c.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return c.t0=m,c.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return c.t1=c.sent,i=(0,c.t0)(c.t1),c.next=12,e.e(15).then(e.t.bind(null,"tL+A",7));case 12:return c.t2=m,c.next=15,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 15:return c.t3=c.sent,h=(0,c.t2)(c.t3),c.t4=l,c.next=20,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 20:return c.t5=c.sent,b=(0,c.t4)(c.t5),c.next=24,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 24:return E=c.sent,c.t6=l,c.next=28,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 28:return c.t7=c.sent,o=(0,c.t6)(c.t7),N=function(){var f=(0,o.useForm)({logOnMount:function(u){console.log("onMount",u)},logOnSubmit:function(u){console.log("onSubmit",u)}}),n={type:"object",properties:{input1:{title:"\u8F93\u5165\u6846",required:!0,type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u5DE6","\u4E2D","\u53F3"],widget:"radio"}}},t=function(u,v){v.length>0?h.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(v.map(function(C){return C.name}))):h.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")};return b.default.createElement("div",null,b.default.createElement(o.default,{id:"my-demo-form",form:f,schema:n,onFinish:t}),b.default.createElement(i.default,{type:"primary",onClick:f.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},w=N,c.abrupt("return",w);case 33:case"end":return c.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"measure-demo"}},"migrate-demo":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(y.a.mark(function D(){var m,i,h,b,E,o,p,l;return y.a.wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return p=function(){var c=(0,h.useForm)(),S=function(n,t){t.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(t))):alert(JSON.stringify(n))};return i.default.createElement("div",null,i.default.createElement(h.default,{form:c,schema:o,onFinish:S}),i.default.createElement("button",{onClick:c.submit},"\u63D0\u4EA4"))},E=function(c,S){if(!S&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var f=b(S);if(f&&f.has(c))return f.get(c);var n={},t=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in c)if(a!=="default"&&Object.prototype.hasOwnProperty.call(c,a)){var u=t?Object.getOwnPropertyDescriptor(c,a):null;u&&(u.get||u.set)?Object.defineProperty(n,a,u):n[a]=c[a]}return n.default=c,f&&f.set(c,n),n},b=function(c){if(typeof WeakMap!="function")return null;var S=new WeakMap,f=new WeakMap;return(b=function(t){return t?f:S})(c)},m=e("K+nK"),w.t0=m,w.next=7,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 7:return w.t1=w.sent,i=(0,w.t0)(w.t1),w.t2=E,w.next=12,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 12:return w.t3=w.sent,h=(0,w.t2)(w.t3),o={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}},l=p,w.abrupt("return",l);case 17:case"end":return w.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate-demo"}},"migrate-demo-1":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(y.a.mark(function D(){var m,i,h,b,E,o,p,l,N,w,O,c,S;return y.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return N=function(a,u){if(!u&&a&&a.__esModule)return a;if(a===null||typeof a!="object"&&typeof a!="function")return{default:a};var v=l(u);if(v&&v.has(a))return v.get(a);var C={},B=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var M in a)if(M!=="default"&&Object.prototype.hasOwnProperty.call(a,M)){var $=B?Object.getOwnPropertyDescriptor(a,M):null;$&&($.get||$.set)?Object.defineProperty(C,M,$):C[M]=a[M]}return C.default=a,v&&v.set(a,C),C},l=function(a){if(typeof WeakMap!="function")return null;var u=new WeakMap,v=new WeakMap;return(l=function(B){return B?v:u})(a)},m=e("K+nK"),n.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return n.t0=m,n.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return n.t1=n.sent,i=(0,n.t0)(n.t1),n.t2=m,n.next=13,Promise.resolve().then(e.bind(null,"tJVT"));case 13:return n.t3=n.sent,h=(0,n.t2)(n.t3),n.next=17,Promise.all([e.e(3),e.e(19)]).then(e.t.bind(null,"cUip",7));case 17:return n.t4=m,n.next=20,Promise.all([e.e(0),e.e(8),e.e(18),e.e(20)]).then(e.t.bind(null,"iJl9",7));case 20:return n.t5=n.sent,b=(0,n.t4)(n.t5),n.t6=N,n.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return n.t7=n.sent,E=(0,n.t6)(n.t7),n.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 29:return o=n.sent,n.next=32,Promise.all([e.e(22),e.e(25)]).then(e.bind(null,"7t+U"));case 32:return p=n.sent,w=b.default.TextArea,O={type:"object",properties:{number:{title:"\u6570\u5B57\u8F93\u5165\u6846",type:"number","ui:disabled":!0},checkbox:{title:"\u662F\u5426\u9009\u62E9",type:"boolean","ui:widget":"switch"}},required:["number"]},c=function(){var a=(0,E.useState)(JSON.stringify(O)),u=(0,h.default)(a,2),v=u[0],C=u[1],B=(0,E.useState)({}),M=(0,h.default)(B,2),$=M[0],Ke=M[1],Xe=function(){try{var An=(0,p.updateSchemaToNewVersion)(JSON.parse(v));Ke(An)}catch(Gn){console.log(Gn)}},sn=function(An){C(An.target.value)},Pn=function(){C(JSON.stringify(JSON.parse(v),null,2))};return E.default.createElement("div",null,E.default.createElement("div",null,"\u586B\u5165\u65E7\u7248schema\uFF1A"),E.default.createElement(w,{style:{minHeight:400,marginTop:12,marginBottom:12},value:v,onChange:sn}),E.default.createElement(i.default,{style:{marginRight:12},onClick:Pn},"\u683C\u5F0F\u5316\u65E7schema"),E.default.createElement(i.default,{type:"primary",onClick:Xe},"\u751F\u6210\u65B0\u7248schema"),E.default.createElement(w,{style:{minHeight:400,marginTop:12},value:JSON.stringify($,null,2)}))},S=c,n.abrupt("return",S);case 38:case"end":return n.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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

export default Translator;`},"packages/form-render/src/utils.js":{import:"../../packages/form-render/src/utils.js",content:J}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"},"lodash-es":{version:"4.17.21"}},identifier:"migrate-demo-1"}},"migrate2-demo":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(y.a.mark(function D(){var m,i,h,b,E,o,p,l,N;return y.a.wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return l=function(){var S=(0,h.useState)({}),f=(0,i.default)(S,2),n=f[0],t=f[1],a=(0,h.useState)([]),u=(0,i.default)(a,2),v=u[0],C=u[1],B=(0,h.useState)(!1),M=(0,i.default)(B,2),$=M[0],Ke=M[1],Xe=(0,b.useForm)({formData:n,onChange:t,onValidate:C,showValidate:$});(0,h.useEffect)(function(){Xe.init()},[]);var sn=function(){Ke(!0),v.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(v))):alert(JSON.stringify(n))};return h.default.createElement("div",null,h.default.createElement(b.default,{form:Xe,schema:p}),h.default.createElement("button",{onClick:sn},"\u63D0\u4EA4"))},o=function(S,f){if(!f&&S&&S.__esModule)return S;if(S===null||typeof S!="object"&&typeof S!="function")return{default:S};var n=E(f);if(n&&n.has(S))return n.get(S);var t={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in S)if(u!=="default"&&Object.prototype.hasOwnProperty.call(S,u)){var v=a?Object.getOwnPropertyDescriptor(S,u):null;v&&(v.get||v.set)?Object.defineProperty(t,u,v):t[u]=S[u]}return t.default=S,n&&n.set(S,t),t},E=function(S){if(typeof WeakMap!="function")return null;var f=new WeakMap,n=new WeakMap;return(E=function(a){return a?n:f})(S)},m=e("K+nK"),O.t0=m,O.next=7,Promise.resolve().then(e.bind(null,"tJVT"));case 7:return O.t1=O.sent,i=(0,O.t0)(O.t1),O.t2=o,O.next=12,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 12:return O.t3=O.sent,h=(0,O.t2)(O.t3),O.t4=o,O.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 17:return O.t5=O.sent,b=(0,O.t4)(O.t5),p={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}},N=l,O.abrupt("return",N);case 22:case"end":return O.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
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
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate2-demo"}},"schema-demo":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(y.a.mark(function D(){var m,i,h,b,E;return y.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return m=e("K+nK"),p.t0=m,p.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return p.t1=p.sent,i=(0,p.t0)(p.t1),p.t2=m,p.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(17)]).then(e.bind(null,"c2mQ"));case 9:return p.t3=p.sent,h=(0,p.t2)(p.t3),p.next=13,e.e(21).then(e.bind(null,"8iYR"));case 13:return b=p.sent,E=function(){return i.default.createElement(h.default,{schema:b.basic})},p.abrupt("return",E);case 16:case"end":return p.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { basic } from '../json/schema';

export default () => <FR schema={basic} />;`},"demo/FR.jsx":{import:"../demo/FR",content:oe},"json/schema.js":{import:"../json/schema",content:$n}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo"}},"schema-demo-1":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(y.a.mark(function D(){var m,i,h,b,E;return y.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return m=e("K+nK"),p.t0=m,p.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return p.t1=p.sent,i=(0,p.t0)(p.t1),p.t2=m,p.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(17)]).then(e.bind(null,"c2mQ"));case 9:return p.t3=p.sent,h=(0,p.t2)(p.t3),p.next=13,e.e(21).then(e.bind(null,"8iYR"));case 13:return b=p.sent,E=function(){return i.default.createElement(h.default,{schema:b.titleTrick})},p.abrupt("return",E);case 16:case"end":return p.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { titleTrick } from '../json/schema';

export default () => <FR schema={titleTrick} />;`},"demo/FR.jsx":{import:"../demo/FR",content:oe},"json/schema.js":{import:"../json/schema",content:$n}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo-1"}},"docs-playground":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(y.a.mark(function D(){return y.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"BASV"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:Rn},"main.js":{import:"./main",content:jn},"json/simplest.json":{import:"./json/simplest.json",content:pn},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:an},"monaco/index.js":{import:"./monaco",content:$e},"theme.css":{import:"./theme.css",content:Nn},"index.css":{import:"./index.css",content:Dn}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:"^16.0.0"},"react-dom":{version:"^16.0.0"},"deep-equal":{version:"2.0.5"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.6.9"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-simple-code-editor":{version:"0.11.0"},prismjs:{version:"1.23.0"}},identifier:"docs-playground"}},"docs-playground1":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(y.a.mark(function D(){return y.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"Wrpt"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:hn},"main.js":{import:"./main",content:Ae},"json/simplest.json":{import:"./json/simplest.json",content:nt},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:wn},"monaco/index.js":{import:"./monaco",content:tt},"suggestionsMap.js":{import:"./suggestionsMap",content:dt},"index.css":{import:"./index.css",content:rt}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:"^17.x"},"react-dom":{version:">=16.9.0"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.6.9"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-monaco-editor":{version:"0.44.0"},"@types/react":{version:"^17.x"}},identifier:"docs-playground1"}},"table-render-advanced":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(y.a.mark(function D(){return y.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"7ZP+"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{tsx:ct}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.5"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!0,identifier:"table-render-advanced"}},"table-render-nosearch":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(y.a.mark(function D(){return y.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"CfUQ"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{tsx:Bn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.5"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!0,identifier:"table-render-nosearch"}},"table-render-notitle":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(y.a.mark(function D(){return y.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"/usH"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{tsx:at}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.5"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!0,identifier:"table-render-notitle"}},"table-render-paramtable":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(y.a.mark(function D(){return y.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"48jF"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{tsx:Vn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.5"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},umi:{version:"3.4.19"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!0,identifier:"table-render-paramtable"}},"table-render-demo":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(y.a.mark(function D(){var m,i,h,b,E,o,p,l,N;return y.a.wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return m=e("K+nK"),O.t0=m,O.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return O.t1=O.sent,i=(0,O.t0)(O.t1),O.next=8,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(73)]).then(e.bind(null,"P2DI"));case 8:for(h=O.sent,b=[],E=0;E<6;E++)b.push({id:E.toString(),title:"\u6807\u9898".concat(E+1),created_at:new Date().getTime()});return o={type:"object",properties:{title:{title:"\u6807\u9898",type:"string",width:"30%"},created_at:{title:"\u521B\u5EFA\u65F6\u95F4",type:"string",format:"date",width:"30%"}}},p=[{title:"\u6807\u9898",dataIndex:"title"},{title:"\u521B\u5EFA\u65F6\u95F4",key:"since",dataIndex:"created_at",valueType:"date"},{title:"\u64CD\u4F5C",render:function(S,f){return i.default.createElement("a",{onClick:function(){return alert(S.title)}},"\u7F16\u8F91")}}],l=function(){var S=function(){return{rows:b,total:b.length}};return i.default.createElement(i.default.Fragment,null,i.default.createElement(h.Search,{schema:o,api:S}),i.default.createElement(h.Table,{headerTitle:"\u6700\u7B80\u8868\u683C",columns:p,rowKey:"id"}))},N=(0,h.withTable)(l),O.abrupt("return",N);case 16:case"end":return O.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default withTable(Wrapper);`}},dependencies:{react:{version:">=16.8.0"},"table-render":{version:"1.1.5"},antd:{version:"4.x",css:"antd/dist/antd.css"}},transform:!0,defaultShowCode:!0,identifier:"table-render-demo"}},"table-render-test1":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(y.a.mark(function D(){return y.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"aMwh"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:mt}},dependencies:{react:{version:">=16.8.0"},"table-render":{version:"1.1.5"},antd:{version:"4.x",css:"antd/dist/antd.css"}},identifier:"table-render-test1"}},"generator-demo":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(y.a.mark(function D(){var m,i,h,b,E,o;return y.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return m=e("K+nK"),l.t0=m,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,i=(0,l.t0)(l.t1),l.t2=m,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(72)]).then(e.bind(null,"nYSz"));case 9:return l.t3=l.sent,h=(0,l.t2)(l.t3),b={type:"object",properties:{inputName:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string"}}},E=function(){return i.default.createElement("div",{style:{height:"80vh"}},i.default.createElement(h.default,{defaultValue:b}))},o=E,l.abrupt("return",o);case 15:case"end":return l.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.4.6"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"generator-demo"}},"generator-modal":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(y.a.mark(function D(){return y.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"PPgD"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:Mn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.4.6"},"react-dom":{version:">=16.9.0"}},identifier:"generator-modal"}},"generator-settings":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(y.a.mark(function D(){return y.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"M63W"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:Kn}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.4.6"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-settings"}},"generator-layout":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(y.a.mark(function D(){return y.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"SOdT"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:Jn},"index.less":{import:"./index.less",content:zn}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.4.6"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-layout"}},"generator-transformer":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(y.a.mark(function D(){return y.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"jktF"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:Wn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.4.6"},"react-dom":{version:">=16.9.0"}},identifier:"generator-transformer"}},"generator-playground":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(y.a.mark(function D(){return y.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"TYW4"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:st},"index.less":{import:"./index.less",content:zn}},dependencies:{react:{version:">=16.8.0"},umi:{version:"3.4.19"},"fr-generator":{version:"2.4.6"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-playground"}}}},TIsu:function(Fn,un,e){},Zs1V:function(Fn){Fn.exports=JSON.parse("{}")},j57V:function(Fn,un,e){"use strict";e.r(un);var x=e("q1tI"),r=e.n(x),y=e("dEAq"),W=e.n(y),ue=e("0zqC"),J=e("ZpkN"),Pe=e("JjdP"),Oe=r.a.memo(Pe.default["widget-demo"].component);un.default=oe=>(r.a.useEffect(()=>{oe!=null&&oe.location.hash&&y.AnchorLink.scrollToAnchor(decodeURIComponent(oe.location.hash.slice(1)))},[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\uFF08widget\uFF09"},r.a.createElement(y.AnchorLink,{to:"#\u81EA\u5B9A\u4E49\u7EC4\u4EF6\uFF08widget\uFF09","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\uFF08widget\uFF09"),r.a.createElement("p",null,"\u5F53 FormRender \u63D0\u4F9B\u7684\u7EC4\u4EF6\u65E0\u6CD5 100%\u6EE1\u8DB3\u7528\u6237\u9700\u6C42\u65F6\uFF0C\u53EF\u4EE5\u8003\u8651\u81EA\u5DF1\u5199\u4E00\u4E2A\u3002\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u529F\u80FD\u4F7F FormRender \u62E5\u6709\u5F88\u597D\u6269\u5C55\u6027\uFF0C\u53EF\u80FD\u7684\u5E94\u7528\u573A\u666F\u5982\u4E0B\uFF1A"),r.a.createElement("ul",null,r.a.createElement("li",null,"\u6211\u9700\u8981\u5199\u4E00\u4E2A\u5F02\u6B65\u52A0\u8F7D\u7684\u641C\u7D22\u8F93\u5165\u6846\uFF08\u666E\u9002\u6027\u4E0D\u9AD8/\u96BE\u4EE5\u7528 schema \u63CF\u8FF0\u7684\u7EC4\u4EF6\uFF09"),r.a.createElement("li",null,"\u6211\u4EEC\u56E2\u961F\u4F7F\u7528 xxx ui\uFF0C\u4E0E antd \u4E0D\u642D\uFF0C\u5E0C\u671B\u80FD\u9002\u914D\u4E00\u5957 xxx ui \u7EC4\u4EF6\u7684 FormRender\uFF08\u6B22\u8FCE Pull Request\uFF09"),r.a.createElement("li",null,"\u6211\u9700\u8981\u5728\u8868\u5355\u5185\u90E8\u5199\u4E00\u4E2A excel \u4E0A\u4F20\u6309\u94AE\uFF08\u5B8C\u5168\u5B9A\u5236\u5316\u7684\u9700\u6C42\uFF09")),r.a.createElement("p",null,"\u6CE8\uFF1A\u5982\u679C\u662F\u65B0\u589E\u4E00\u4E2A\u5E38\u7528\u7EC4\u4EF6\uFF0C\u5EFA\u8BAE\u7ED9 FormRender \u7EF4\u62A4\u7684\u540C\u5B66\u6765\u63D0 Pull Request\uFF0C\u8FD9\u6837\u53EF\u4EE5\u66F4\u597D\u6269\u5C55\u5176\u751F\u6001\uFF0CFormRender \u7684\u793E\u533A\u4EE5\u53CA\u63D0\u4F9B\u4E86\u90E8\u5206 ",r.a.createElement(y.Link,{to:"https://github.com/alibaba/x-render/tree/master/widgets"},"\u5E38\u7528\u81EA\u5B9A\u4E49\u7EC4\u4EF6"),"\u3002"),r.a.createElement("h2",{id:"\u4F7F\u7528"},r.a.createElement(y.AnchorLink,{to:"#\u4F7F\u7528","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u4F7F\u7528"),r.a.createElement("p",null,"\u7B80\u5355\u7684\u8BF4\uFF0C\u5728 Form \u7EC4\u4EF6\u5C42\u4F7F\u7528 widgets \u5B57\u6BB5\u6CE8\u518C\u81EA\u5B9A\u4E49\u7EC4\u4EF6\uFF0C\u5E76\u5728 schema \u5185\u4F7F\u7528 widget \u5B57\u6BB5\u6307\u660E\u4F7F\u7528\u7684\u7EC4\u4EF6 key \u503C\u5373\u53EF\uFF1A"),r.a.createElement(J.a,{code:`const schema = {
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
/>;`,lang:"js"}),r.a.createElement("p",null,"\u5B9E\u9645\u4EE3\u7801\u5982\u4E0B\uFF1A")),r.a.createElement(ue.default,Pe.default["widget-demo"].previewerProps,r.a.createElement(Oe,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("h2",{id:"\u4E0D\u9700\u8981\u81EA\u5DF1\u624B\u5199\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u54E6"},r.a.createElement(y.AnchorLink,{to:"#\u4E0D\u9700\u8981\u81EA\u5DF1\u624B\u5199\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u54E6","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u4E0D\u9700\u8981\u81EA\u5DF1\u624B\u5199\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u54E6"),r.a.createElement("p",null,"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u5C31\u662F\u666E\u901A\u7684 React \u7EC4\u4EF6\uFF0C\u552F\u4E00\u7684\u8981\u6C42\u662F\u8981\u6709 value/onChange \u8FD9\u4E24\u4E2A props\uFF0C\u7528\u4E8E\u53CC\u5411\u7ED1\u5B9A\u503C\u3002\u6240\u4EE5\u5982\u679C\u73B0\u6210\u7684\u7EC4\u4EF6\u5DF2\u7ECF\u9ED8\u8BA4\u4F7F\u7528\u4E86 value/onChange\uFF0C\u5C31\u53EF\u4EE5\u76F4\u63A5\u62FF\u6765\u7528\u3002"),r.a.createElement("p",null,"\u4E3E\u4F8B\u6765\u8BF4\uFF1A\u73B0\u5728\u6211\u4EEC\u9700\u8981\u4F7F\u7528\u201C\u7EA7\u8054\u9009\u62E9\u201D\u7EC4\u4EF6\uFF0CFormRender \u5E76\u6CA1\u6709\u5185\u7F6E\u652F\u6301\u3002\u8FD9\u65F6\u6253\u5F00 antd \u6587\u6863 ",r.a.createElement(y.Link,{to:"https://ant.design/components/cascader/%EF%BC%8C%E6%88%91%E4%BB%AC%E7%9C%8B%E5%88%B0cascader%E9%BB%98%E8%AE%A4%E4%BD%BF%E7%94%A8%E4%BA%86"},"https://ant.design/components/cascader/\uFF0C\u6211\u4EEC\u770B\u5230cascader\u9ED8\u8BA4\u4F7F\u7528\u4E86")," value/onChange\uFF0C\u90A3\u5C31\u76F4\u63A5\u62FF\u6765\u7528\u5427\uFF1A"),r.a.createElement(J.a,{code:`import { Cascader } from 'antd';

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
},`,lang:"js"}),r.a.createElement("h2",{id:"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u6536\u5230\u7684-props"},r.a.createElement(y.AnchorLink,{to:"#\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u6536\u5230\u7684-props","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u6536\u5230\u7684 props"),r.a.createElement("p",null,"\u4F7F\u7528\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u65F6\uFF0C\u5927\u591A\u6709\u590D\u6742\u5B9A\u5236\u9700\u6C42\uFF0CFormRender \u63D0\u4F9B\u4E86\u4E30\u5BCC\u7684 props\uFF1A"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"disabled"),"\uFF1A\u662F\u5426\u7981\u6B62\u8F93\u5165"),r.a.createElement("li",null,r.a.createElement("strong",null,"readOnly"),"\uFF1A\u662F\u5426\u53EA\u8BFB"),r.a.createElement("li",null,r.a.createElement("strong",null,"value"),"\uFF1A\u7EC4\u4EF6\u73B0\u5728\u7684\u503C"),r.a.createElement("li",null,r.a.createElement("strong",null,"onChange"),"\uFF1A\u51FD\u6570\uFF0C\u63A5\u6536 value \u4E3A\u5165\u53C2\uFF0C\u7528\u4E8E\u5C06\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7684\u8FD4\u56DE\u503C\u540C\u6B65\u7ED9 Form"),r.a.createElement("li",null,r.a.createElement("strong",null,"schema"),"\uFF1A\u7EC4\u4EF6\u5BF9\u5E94\u7684\u5B50 schema"),r.a.createElement("li",null,r.a.createElement("strong",null,"addons.onItemChange"),": \u6CE8\u610F\u6302\u5728 addons \u4E0B\u9762\u3002\u7528\u4E8E\u5728\u672C\u7EC4\u4EF6\u5185\u4FEE\u6539\u5176\u4ED6\u7EC4\u4EF6\u7684\u503C onItemChange(path, value)"),r.a.createElement("li",null,r.a.createElement("strong",null,"addons.getValue"),": \u7528\u4E8E\u901A\u8FC7\u8DEF\u5F84\u5B57\u7B26\u4E32\u83B7\u53D6\u503C getValue(path)\u3002\u4F8B\u5982 ",r.a.createElement("code",null,"getValue('a.b[2].c')"),"\u3002getValue() \u83B7\u53D6 formData"),r.a.createElement("li",null,r.a.createElement("strong",null,"addons.dataPath"),': \u76EE\u524D\u6570\u636E\u6240\u5728\u7684 path\uFF0C\u4F8B\u5982"a.b[2].c[0].d"\uFF0Cstring \u7C7B\u578B\u3002'),r.a.createElement("li",null,r.a.createElement("strong",null,"addons.dataIndex"),': \u5982\u679C dataPath \u4E0D\u5305\u542B\u6570\u7EC4\uFF0C\u5219\u4E3A [], \u5982\u679C dataPath \u5305\u542B\u6570\u7EC4\uFF0C\u4F8B\u5982"a.b[2].c[0].d"\uFF0C\u5219\u4E3A [2,0]\u3002\u662F\u81EA\u4E0A\u5230\u4E0B\u6240\u6709\u7ECF\u8FC7\u7684\u6570\u7EC4\u7684 index \u6309\u987A\u5E8F\u5B58\u653E\u7684\u4E00\u4E2A\u6570\u7EC4\u7C7B\u578B'),r.a.createElement("li",null,r.a.createElement("strong",null,"addons.setErrorFields"),": form \u65B9\u6CD5\u900F\u4F20\u7ED9\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u4F7F\u7528\uFF0C\u81EA\u5B9A\u4E49 error"),r.a.createElement("li",null,r.a.createElement("strong",null,"addons.removeErrorField"),": form \u65B9\u6CD5\u900F\u4F20\u7ED9\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u4F7F\u7528\uFF0C\u5220\u9664\u6240\u6709 error"),r.a.createElement("li",null,r.a.createElement("strong",null,"addons.setSchema"),": form \u65B9\u6CD5\u900F\u4F20\u7ED9\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u4F7F\u7528\uFF0C\u4FEE\u6539 schema"),r.a.createElement("li",null,r.a.createElement("strong",null,"addons.resetFields"),": form \u65B9\u6CD5\u900F\u4F20\u7ED9\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u4F7F\u7528\uFF0C\u91CD\u7F6E\u6E05\u7A7A\u6574\u4E2A\u8868\u5355"),r.a.createElement("li",null,r.a.createElement("strong",null,"addons.dependValues"),": \u5F53\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u5BF9\u5E94\u7684 schema \u4F7F\u7528\u5230 dependencies \u5B57\u6BB5\u65F6\uFF0C\u5728\u6B64\u83B7\u5F97 dependencies \u5BF9\u5E94\u7684\u8868\u5355\u9879\u7684\u5B9E\u65F6\u7684\u503C")),r.a.createElement("h2",{id:"antd-\u7EC4\u4EF6\u6539\u9020\u6210\u81EA\u5B9A\u4E49\u7EC4\u4EF6"},r.a.createElement(y.AnchorLink,{to:"#antd-\u7EC4\u4EF6\u6539\u9020\u6210\u81EA\u5B9A\u4E49\u7EC4\u4EF6","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"antd \u7EC4\u4EF6\u6539\u9020\u6210\u81EA\u5B9A\u4E49\u7EC4\u4EF6"),r.a.createElement("p",null,"\u5927\u591A\u6570\u60C5\u51B5\u4E0B\uFF0Cantd \u7684\u7EC4\u4EF6\u53EF\u4EE5\u62FF\u6765\u5373\u7528\u3002\u4F46\u6709\u65F6\u7EC4\u4EF6\u7684 props \u5E76\u4E0D\u662F\u7EA6\u5B9A\u7684 value/onChange, \u4F8B\u5982 Checkbox \u7684\u60C5\u51B5\uFF0Cvalue \u503C\u5BF9\u5E94\u7684\u662F checked\uFF0C\u6B64\u65F6\u53EA\u9700\u8981\u5C11\u91CF\u6539\u52A8\u5373\u53EF\uFF1A"),r.a.createElement(J.a,{code:`import { Checkbox } from 'antd';

const MyCheckBox = ({ value, ...rest }) => {
  return <Checkbox checked={value} {...rest} />;
};`,lang:"js"}),r.a.createElement("h2",{id:"\u53EA\u8BFB\u6A21\u5F0F\u4E0B\u7684\u81EA\u5B9A\u4E49\u7EC4\u4EF6"},r.a.createElement(y.AnchorLink,{to:"#\u53EA\u8BFB\u6A21\u5F0F\u4E0B\u7684\u81EA\u5B9A\u4E49\u7EC4\u4EF6","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u53EA\u8BFB\u6A21\u5F0F\u4E0B\u7684\u81EA\u5B9A\u4E49\u7EC4\u4EF6"),r.a.createElement("p",null,"\u53EA\u8BFB\u6A21\u5F0F\u4E0B\uFF0C\u9ED8\u8BA4\u4F1A\u6E32\u67D3\u5185\u7F6E\u7684 html \u7EC4\u4EF6\uFF0C\u4F46\u6709\u65F6 html \u7EC4\u4EF6\u5E76\u4E0D\u80FD\u6EE1\u8DB3\u4E00\u4E2A\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u5728\u53EA\u8BFB\u6A21\u5F0F\u4E0B\u9700\u8981\u7684\u5C55\u793A\uFF0C\u6B64\u65F6\u53EF\u4F7F\u7528",r.a.createElement("code",null,"readOnlyWidget"),"\u5B57\u6BB5\u6765\u6307\u5B9A\u53EA\u8BFB\u6A21\u5F0F\u4E0B\u7684\u5C55\u793A\u3002"),r.a.createElement(J.a,{code:`{
  "type": "object",
  "properties": {
    "string": {
      "title": "\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6",
      "type": "string",
      "widget": "site",
      "readOnlyWidget": "siteText"
    }
  }
}`,lang:"json"}),r.a.createElement("p",null,"\u5982\u679C\u4F60\u6253\u7B97\u5728\u4E00\u4E2A\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u91CC\u901A\u8FC7 readOnly \u53C2\u6570\u5224\u65AD\u6761\u4EF6\u5C55\u793A\uFF0C\u65E2\u662F\u8BF4\uFF0Csite \u7EC4\u4EF6\u5DF2\u7ECF\u5199\u4E86\u53EA\u8BFB\u548C\u975E\u53EA\u8BFB\u60C5\u51B5\u4E0B\u7684\u6E32\u67D3"),r.a.createElement(J.a,{code:`const SiteInput = ({ readOnly, value, ...rest }) => {
  if (readOnly) return <div>{\`https://\${value}.com\`}</div>;
  return (
    <Input addonBefore="https://" addonAfter=".com" value={value} {...rest} />
  );
};`,lang:"js"}),r.a.createElement("p",null,"\u6B64\u65F6\u53EF\u4EE5\u6307\u5B9A ",r.a.createElement("code",null,"readOnlyWidget")," \u548C ",r.a.createElement("code",null,"widget")," \u4E3A\u540C\u4E00\u4E2A\u7EC4\u4EF6\uFF1A"),r.a.createElement(J.a,{code:`{
  "type": "object",
  "properties": {
    "string": {
      "title": "\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6",
      "type": "string",
      "widget": "site",
      "readOnlyWidget": "site"
    }
  }
}`,lang:"json"}),r.a.createElement("h2",{id:"\u6700\u4F73\u5B9E\u8DF5"},r.a.createElement(y.AnchorLink,{to:"#\u6700\u4F73\u5B9E\u8DF5","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u6700\u4F73\u5B9E\u8DF5"),r.a.createElement("p",null,"\u540C\u4E00\u4E2A\u9879\u76EE\u4E0B\u4E0D\u540C\u7684 form \u91CC\uFF0C\u4F7F\u7528\u5230\u7684\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u53EF\u80FD\u5927\u81F4\u76F8\u540C\uFF0C\u4F46\u4E5F\u6709\u53EF\u80FD\u4E92\u76F8\u4E0D\u540C\uFF0C\u7B14\u8005\u5EFA\u8BAE\u662F\u4E2D\u5FC3\u5316\u4E00\u4E2A Form \u7EC4\u4EF6\uFF0C\u5E76\u4E00\u6B21\u6027\u5C06\u6240\u6709\u9700\u8981\u7684\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u6CE8\u5165\u5176\u4E2D\u3002\u5728\u9879\u76EE\u7684\u5404\u5904\u5F15\u5165\u5BF9\u5E94\u7EC4\u4EF6\uFF1A"),r.a.createElement(J.a,{code:`//  /Component/FormRender.js
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
};`,lang:"js"}),r.a.createElement("p",null,"\u7136\u540E\u5728\u6BCF\u4E2A form \u9875\u9762\u7EDF\u4E00\u5F15\u5165\u4F7F\u7528"),r.a.createElement(J.a,{code:`import { useForm } from 'form-render';
import FormRender from './Component/FormRender';
const Demo1 = props => {
  const form = useForm();
  return <FormRender form={form} onFinish={() => {}} />;
};`,lang:"js"}),r.a.createElement("h2",{id:"\u5185\u7F6E\u7EC4\u4EF6"},r.a.createElement(y.AnchorLink,{to:"#\u5185\u7F6E\u7EC4\u4EF6","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u5185\u7F6E\u7EC4\u4EF6"),r.a.createElement("p",null,"\u4F7F\u7528\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u524D\uFF0C\u4E5F\u8BB8\u5DF2\u7ECF\u6709\u5185\u7F6E\u7EC4\u4EF6\u652F\u6301\u3002\u5177\u4F53\u89C1 ",r.a.createElement(y.Link,{to:"/form-render/schema/inner-widget"},"schema \u4E0E\u5185\u7F6E\u7EC4\u4EF6"))))))},p8sG:function(Fn,un,e){"use strict";Fn.exports=e("80pN")}}]);
