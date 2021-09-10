(window.webpackJsonp=window.webpackJsonp||[]).push([[36,13],{"0zqC":function(Rn,un,e){"use strict";e.r(un);var x=e("tJVT"),n=e("q1tI"),g=e.n(n),W=e("wx14"),ue=e("rePB"),z=e("ODXe"),Pe=e("U8pU"),Oe=e("Ff2n"),oe=e("VTBJ"),$n=e("TSYQ"),Se=e.n($n),Fn=e("Zm9Q"),jn=e("5Z9U"),pn=e("6cGi"),rn=e("KQm4"),$e=e("wgJM"),Nn=e("t23M");function Dn(s){var d=Object(n.useRef)(),y=Object(n.useRef)(!1);function F(){for(var j=arguments.length,R=new Array(j),P=0;P<j;P++)R[P]=arguments[P];y.current||($e.a.cancel(d.current),d.current=Object($e.a)(function(){s.apply(void 0,R)}))}return Object(n.useEffect)(function(){return function(){y.current=!0,$e.a.cancel(d.current)}},[]),F}function hn(s){var d=Object(n.useRef)([]),y=Object(n.useState)({}),F=Object(z.a)(y,2),j=F[1],R=Object(n.useRef)(typeof s=="function"?s():s),P=Dn(function(){var K=R.current;d.current.forEach(function(L){K=L(K)}),d.current=[],R.current=K,j({})});function I(K){d.current.push(K),P()}return[R.current,I]}var Ae=e("4IlW");function nt(s,d){var y,F=s.prefixCls,j=s.id,R=s.active,P=s.rtl,I=s.tab,K=I.key,L=I.tab,V=I.disabled,G=I.closeIcon,U=s.tabBarGutter,ae=s.tabPosition,Y=s.closable,X=s.renderWrapper,se=s.removeAriaLabel,J=s.editable,q=s.onClick,ne=s.onRemove,Q=s.onFocus,re="".concat(F,"-tab");n.useEffect(function(){return ne},[]);var k={};ae==="top"||ae==="bottom"?k[P?"marginLeft":"marginRight"]=U:k.marginBottom=U;var pe=J&&Y!==!1&&!V;function _(te){V||q(te)}function le(te){te.preventDefault(),te.stopPropagation(),J.onEdit("remove",{key:K,event:te})}var de=n.createElement("div",{key:K,ref:d,className:Se()(re,(y={},Object(ue.a)(y,"".concat(re,"-with-remove"),pe),Object(ue.a)(y,"".concat(re,"-active"),R),Object(ue.a)(y,"".concat(re,"-disabled"),V),y)),style:k,onClick:_},n.createElement("div",{role:"tab","aria-selected":R,id:j&&"".concat(j,"-tab-").concat(K),className:"".concat(re,"-btn"),"aria-controls":j&&"".concat(j,"-panel-").concat(K),"aria-disabled":V,tabIndex:V?null:0,onClick:function(H){H.stopPropagation(),_(H)},onKeyDown:function(H){[Ae.a.SPACE,Ae.a.ENTER].includes(H.which)&&(H.preventDefault(),_(H))},onFocus:Q},L),pe&&n.createElement("button",{type:"button","aria-label":se||"remove",tabIndex:0,className:"".concat(re,"-remove"),onClick:function(H){H.stopPropagation(),le(H)}},G||J.removeIcon||"\xD7"));return X&&(de=X(de)),de}var wn=n.forwardRef(nt),tt={width:0,height:0,left:0,top:0};function dt(s,d,y){return Object(n.useMemo)(function(){for(var F,j=new Map,R=d.get((F=s[0])===null||F===void 0?void 0:F.key)||tt,P=R.left+R.width,I=0;I<s.length;I+=1){var K=s[I].key,L=d.get(K);if(!L){var V;L=d.get((V=s[I-1])===null||V===void 0?void 0:V.key)||tt}var G=j.get(K)||Object(oe.a)({},L);G.right=P-G.left-G.width,j.set(K,G)}return j},[s.map(function(F){return F.key}).join("_"),d,y])}var at={width:0,height:0,left:0,top:0,right:0};function ct(s,d,y,F,j){var R=j.tabs,P=j.tabPosition,I=j.rtl,K,L,V;["top","bottom"].includes(P)?(K="width",L=I?"right":"left",V=Math.abs(d.left)):(K="height",L="top",V=-d.top);var G=d[K],U=y[K],ae=F[K],Y=G;return U+ae>G&&(Y=G-ae),Object(n.useMemo)(function(){if(!R.length)return[0,0];for(var X=R.length,se=X,J=0;J<X;J+=1){var q=s.get(R[J].key)||at;if(q[L]+q[K]>V+Y){se=J-1;break}}for(var ne=0,Q=X-1;Q>=0;Q-=1){var re=s.get(R[Q].key)||at;if(re[L]<V){ne=Q+1;break}}return[ne,se]},[s,V,Y,P,R.map(function(X){return X.key}).join("_"),I])}var Bn=e("Gytx"),rt=e.n(Bn),Vn=e("Kwbf");function mt(s,d){var y=s.prefixCls,F=s.invalidate,j=s.item,R=s.renderItem,P=s.responsive,I=s.registerSize,K=s.itemKey,L=s.className,V=s.style,G=s.children,U=s.display,ae=s.order,Y=s.component,X=Y===void 0?"div":Y,se=Object(Oe.a)(s,["prefixCls","invalidate","item","renderItem","responsive","registerSize","itemKey","className","style","children","display","order","component"]),J=P&&!U;function q(pe){I(K,pe)}n.useEffect(function(){return function(){q(null)}},[]);var ne=R&&j!==void 0?R(j):G,Q;F||(Q={opacity:J?0:1,height:J?0:void 0,overflowY:J?"hidden":void 0,order:P?ae:void 0,pointerEvents:J?"none":void 0});var re={};J&&(re["aria-hidden"]=!0);var k=n.createElement(X,Object(W.a)({className:Se()(!F&&y,L),style:Object(oe.a)(Object(oe.a)({},Q),V)},re,se,{ref:d}),ne);return P&&(k=n.createElement(Nn.default,{onResize:function(_){var le=_.offsetWidth;q(le)}},k)),k}var Mn=n.forwardRef(mt);Mn.displayName="Item";var Kn=Mn;function zn(){var s=Object(n.useState)({}),d=Object(z.a)(s,2),y=d[1],F=Object(n.useRef)([]),j=Object(n.useRef)(!1),R=0,P=0;Object(n.useEffect)(function(){return function(){j.current=!0}},[]);function I(K){var L=R;R+=1,F.current.length<L+1&&(F.current[L]=K);var V=F.current[L];function G(U){F.current[L]=typeof U=="function"?U(F.current[L]):U,$e.a.cancel(P),P=Object($e.a)(function(){j.current||y({})})}return[V,G]}return I}var Jn=function(d,y){var F=n.useContext(vn);if(!F){var j=d.component,R=j===void 0?"div":j,P=Object(Oe.a)(d,["component"]);return n.createElement(R,Object(W.a)({},P,{ref:y}))}var I=F.className,K=Object(Oe.a)(F,["className"]),L=d.className,V=Object(Oe.a)(d,["className"]);return n.createElement(vn.Provider,{value:null},n.createElement(Kn,Object(W.a)({ref:y,className:Se()(I,L)},K,V)))},Wn=n.forwardRef(Jn);Wn.displayName="RawItem";var st=Wn,vn=n.createContext(null),A="responsive",T="invalidate";function D(s){return"+ ".concat(s.length," ...")}function m(s,d){var y=s.prefixCls,F=y===void 0?"rc-overflow":y,j=s.data,R=j===void 0?[]:j,P=s.renderItem,I=s.renderRawItem,K=s.itemKey,L=s.itemWidth,V=L===void 0?10:L,G=s.ssr,U=s.style,ae=s.className,Y=s.maxCount,X=s.renderRest,se=s.renderRawRest,J=s.suffix,q=s.component,ne=q===void 0?"div":q,Q=s.itemComponent,re=s.onVisibleChange,k=Object(Oe.a)(s,["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"]),pe=zn(),_=G==="full",le=pe(null),de=Object(z.a)(le,2),te=de[0],H=de[1],ie=te||0,fe=pe(new Map),me=Object(z.a)(fe,2),ye=me[0],Te=me[1],he=pe(0),ge=Object(z.a)(he,2),je=ge[0],Fe=ge[1],Ee=pe(0),Ce=Object(z.a)(Ee,2),Ne=Ce[0],Ue=Ce[1],we=pe(0),Be=Object(z.a)(we,2),xe=Be[0],Ie=Be[1],gn=Object(n.useState)(null),Qe=Object(z.a)(gn,2),Ve=Qe[0],_e=Qe[1],dn=Object(n.useState)(null),cn=Object(z.a)(dn,2),Re=cn[0],We=cn[1],Ge=n.useMemo(function(){return Re===null&&_?Number.MAX_SAFE_INTEGER:Re||0},[Re,te]),ze=Object(n.useState)(!1),Tn=Object(z.a)(ze,2),Hn=Tn[0],In=Tn[1],Ze="".concat(F,"-item"),yn=Math.max(je,Ne),en=R.length&&Y===A,bn=Y===T,He=en||typeof Y=="number"&&R.length>Y,ke=Object(n.useMemo)(function(){var ce=R;return en?te===null&&_?ce=R:ce=R.slice(0,Math.min(R.length,ie/V)):typeof Y=="number"&&(ce=R.slice(0,Y)),ce},[R,V,te,Y,en]),Cn=Object(n.useMemo)(function(){return en?R.slice(Ge+1):R.slice(ke.length)},[R,ke,en,Ge]),tn=Object(n.useCallback)(function(ce,be){var De;return typeof K=="function"?K(ce):(De=K&&(ce==null?void 0:ce[K]))!==null&&De!==void 0?De:be},[K]),Je=Object(n.useCallback)(P||function(ce){return ce},[P]);function Le(ce,be){We(ce),be||(In(ce<R.length-1),re==null||re(ce))}function Yn(ce,be){H(be.clientWidth)}function Xn(ce,be){Te(function(De){var Ye=new Map(De);return be===null?Ye.delete(ce):Ye.set(ce,be),Ye})}function ot(ce,be){Ue(be),Fe(Ne)}function mn(ce,be){Ie(be)}function ln(ce){return ye.get(tn(ke[ce],ce))}n.useLayoutEffect(function(){if(ie&&yn&&ke){var ce=xe,be=ke.length,De=be-1;if(!be){Le(0),_e(null);return}for(var Ye=0;Ye<be;Ye+=1){var qn=ln(Ye);if(qn===void 0){Le(Ye-1,!0);break}if(ce+=qn,Ye===De-1&&ce+ln(De)<=ie){Le(De),_e(null);break}else if(ce+yn>ie){Le(Ye-1),_e(ce-qn-xe+Ne);break}else if(Ye===De){Le(De),_e(ce-xe);break}}J&&ln(0)+xe>ie&&_e(null)}},[ie,ye,Ne,xe,tn,ke]);var Qn=Hn&&!!Cn.length,fn={};Ve!==null&&en&&(fn={position:"absolute",left:Ve,top:0});var an={prefixCls:Ze,responsive:en,component:Q,invalidate:bn},Zn=I?function(ce,be){var De=tn(ce,be);return n.createElement(vn.Provider,{key:De,value:Object(oe.a)(Object(oe.a)({},an),{},{order:be,item:ce,itemKey:De,registerSize:Xn,display:be<=Ge})},I(ce,be))}:function(ce,be){var De=tn(ce,be);return n.createElement(Kn,Object(W.a)({},an,{order:be,key:De,item:ce,renderItem:Je,itemKey:De,registerSize:Xn,display:be<=Ge}))},En,kn={order:Qn?Ge:Number.MAX_SAFE_INTEGER,className:"".concat(Ze,"-rest"),registerSize:ot,display:Qn};if(se)se&&(En=n.createElement(vn.Provider,{value:Object(oe.a)(Object(oe.a)({},an),kn)},se(Cn)));else{var nn=X||D;En=n.createElement(Kn,Object(W.a)({},an,kn),typeof nn=="function"?nn(Cn):nn)}var On=n.createElement(ne,Object(W.a)({className:Se()(!bn&&F,ae),style:U,ref:d},k),ke.map(Zn),He?En:null,J&&n.createElement(Kn,Object(W.a)({},an,{order:Ge,className:"".concat(Ze,"-suffix"),registerSize:mn,display:!0,style:fn}),J));return en&&(On=n.createElement(Nn.default,{onResize:Yn},On)),On}var i=n.forwardRef(m);i.displayName="Overflow",i.Item=st,i.RESPONSIVE=A,i.INVALIDATE=T;var h=i,b=h,E=e("1OyB"),o=e("vuIU"),p=e("Ji7U"),l=e("LK+K"),N=e("bT9E"),w=e("YrtM"),O=n.createContext(null);function c(s,d){var y=Object(oe.a)({},s);return Object.keys(d).forEach(function(F){var j=d[F];j!==void 0&&(y[F]=j)}),y}function S(s){var d=s.children,y=s.locked,F=Object(Oe.a)(s,["children","locked"]),j=n.useContext(O),R=Object(w.a)(function(){return c(j,F)},[j,F],function(P,I){return!y&&(P[0]!==I[0]||!rt()(P[1],I[1]))});return n.createElement(O.Provider,{value:R},d)}function f(s,d,y,F){var j=n.useContext(O),R=j.activeKey,P=j.onActive,I=j.onInactive,K={active:R===s};return d||(K.onMouseEnter=function(L){y==null||y({key:s,domEvent:L}),P(s)},K.onMouseLeave=function(L){F==null||F({key:s,domEvent:L}),I(s)}),K}function t(s){var d=s.item,y=Object(Oe.a)(s,["item"]);return Object.defineProperty(y,"item",{get:function(){return Object(Vn.a)(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),d}}),y}function a(s){var d=s.icon,y=s.props,F=s.children,j;return typeof d=="function"?j=n.createElement(d,Object(oe.a)({},y)):j=d,j||F||null}function r(s){var d=n.useContext(O),y=d.mode,F=d.rtl,j=d.inlineIndent;if(y!=="inline")return null;var R=s;return F?{paddingRight:R*j}:{paddingLeft:R*j}}var u=[],v=n.createContext(null);function C(){return n.useContext(v)}var B=n.createContext(u);function M(s){var d=n.useContext(B);return n.useMemo(function(){return s!==void 0?[].concat(Object(rn.a)(d),[s]):d},[d,s])}var $=n.createContext(null),Ke=n.createContext(null);function Xe(s,d){return s===void 0?null:"".concat(s,"-").concat(d)}function sn(s){var d=n.useContext(Ke);return Xe(d,s)}var Pn=function(s){Object(p.a)(y,s);var d=Object(l.a)(y);function y(){return Object(E.a)(this,y),d.apply(this,arguments)}return Object(o.a)(y,[{key:"render",value:function(){var j=this.props,R=j.title,P=j.attribute,I=j.elementRef,K=Object(Oe.a)(j,["title","attribute","elementRef"]),L=Object(N.a)(K,["eventKey"]);return Object(Vn.a)(!P,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),n.createElement(b.Item,Object(W.a)({},P,{title:typeof R=="string"?R:void 0},L,{ref:I}))}}]),y}(n.Component),Un=function(d){var y,F=d.style,j=d.className,R=d.eventKey,P=d.disabled,I=d.itemIcon,K=d.children,L=d.role,V=d.onMouseEnter,G=d.onMouseLeave,U=d.onClick,ae=d.onKeyDown,Y=d.onFocus,X=Object(Oe.a)(d,["style","className","eventKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"]),se=sn(R),J=n.useContext(O),q=J.prefixCls,ne=J.onItemClick,Q=J.disabled,re=J.overflowDisabled,k=J.itemIcon,pe=J.selectedKeys,_=J.onActive,le="".concat(q,"-item"),de=n.useRef(),te=n.useRef(),H=Q||P,ie=M(R),fe=function(we){return{key:R,keyPath:ie,item:de.current,domEvent:we}},me=I||k,ye=f(R,H,V,G),Te=ye.active,he=Object(Oe.a)(ye,["active"]),ge=pe.includes(R),je=r(ie.length),Fe=function(we){if(!H){var Be=fe(we);U==null||U(t(Be)),ne(Be)}},Ee=function(we){if(ae==null||ae(we),we.which===Ae.a.ENTER){var Be=fe(we);U==null||U(t(Be)),ne(Be)}},Ce=function(we){_(R),Y==null||Y(we)},Ne={};return d.role==="option"&&(Ne["aria-selected"]=ge),n.createElement(Pn,Object(W.a)({ref:de,elementRef:te,role:L===null?"none":L||"menuitem",tabIndex:P?null:-1,"data-menu-id":re&&se?null:se},X,he,Ne,{component:"li","aria-disabled":P,style:Object(oe.a)(Object(oe.a)({},je),F),className:Se()(le,(y={},Object(ue.a)(y,"".concat(le,"-active"),Te),Object(ue.a)(y,"".concat(le,"-selected"),ge),Object(ue.a)(y,"".concat(le,"-disabled"),H),y),j),onClick:Fe,onKeyDown:Ee,onFocus:Ce}),K,n.createElement(a,{props:Object(oe.a)(Object(oe.a)({},d),{},{isSelected:ge}),icon:me}))};function An(s){var d=s.eventKey,y=C(),F=M(d);return n.useEffect(function(){if(y)return y.registerPath(d,F),function(){y.unregisterPath(d,F)}},[F]),y?null:n.createElement(Un,s)}var Gn=An;function wt(s,d){return Object(Fn.a)(s).map(function(y,F){if(n.isValidElement(y)){var j=y.key;return j==null&&(j="tmp_key-".concat([].concat(Object(rn.a)(d),[F]).join("-"))),n.cloneElement(y,{key:j,eventKey:j})}return y})}function it(s){var d=n.useRef(s);d.current=s;var y=n.useCallback(function(){for(var F,j=arguments.length,R=new Array(j),P=0;P<j;P++)R[P]=arguments[P];return(F=d.current)===null||F===void 0?void 0:F.call.apply(F,[d].concat(R))},[]);return s?y:void 0}var Oa=function(d,y){var F=d.className,j=d.children,R=Object(Oe.a)(d,["className","children"]),P=n.useContext(O),I=P.prefixCls,K=P.mode;return n.createElement("ul",Object(W.a)({className:Se()(I,"".concat(I,"-sub"),"".concat(I,"-").concat(K==="inline"?"inline":"vertical"),F)},R,{"data-menu-list":!0,ref:y}),j)},Xt=n.forwardRef(Oa);Xt.displayName="SubMenuList";var Qt=Xt,Sa=e("uciX"),Ln={adjustX:1,adjustY:1},Zt={topLeft:{points:["bl","tl"],overflow:Ln,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Ln,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:Ln,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:Ln,offset:[4,0]}},Ra={topLeft:{points:["bl","tl"],overflow:Ln,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Ln,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:Ln,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:Ln,offset:[4,0]}},fr=Zt;function kt(s,d,y){if(d)return d;if(y)return y[s]||y.other}var Fa={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function ja(s){var d=s.prefixCls,y=s.visible,F=s.children,j=s.popup,R=s.popupClassName,P=s.popupOffset,I=s.disabled,K=s.mode,L=s.onVisibleChange,V=n.useContext(O),G=V.getPopupContainer,U=V.rtl,ae=V.subMenuOpenDelay,Y=V.subMenuCloseDelay,X=V.builtinPlacements,se=V.triggerSubMenuAction,J=V.forceSubMenuRender,q=V.motion,ne=V.defaultMotions,Q=n.useState(!1),re=Object(z.a)(Q,2),k=re[0],pe=re[1],_=U?Object(oe.a)(Object(oe.a)({},Ra),X):Object(oe.a)(Object(oe.a)({},Zt),X),le=Fa[K],de=kt(K,q,ne),te=Object(oe.a)(Object(oe.a)({},de),{},{leavedClassName:"".concat(d,"-hidden"),removeOnLeave:!1,motionAppear:!0}),H=n.useRef();return n.useEffect(function(){return H.current=Object($e.a)(function(){pe(y)}),function(){$e.a.cancel(H.current)}},[y]),n.createElement(Sa.a,{prefixCls:d,popupClassName:Se()("".concat(d,"-popup"),Object(ue.a)({},"".concat(d,"-rtl"),U),R),stretch:K==="horizontal"?"minWidth":null,getPopupContainer:G,builtinPlacements:_,popupPlacement:le,popupVisible:k,popup:j,popupAlign:P&&{offset:P},action:I?[]:[se],mouseEnterDelay:ae,mouseLeaveDelay:Y,onPopupVisibleChange:L,forceRender:J,popupMotion:te},F)}var Da=e("8XRh");function Pa(s){var d=s.id,y=s.open,F=s.keyPath,j=s.children,R="inline",P=n.useContext(O),I=P.prefixCls,K=P.forceSubMenuRender,L=P.motion,V=P.defaultMotions,G=P.mode,U=n.useRef(!1);U.current=G===R;var ae=n.useState(!U.current),Y=Object(z.a)(ae,2),X=Y[0],se=Y[1],J=U.current?y:!1;n.useEffect(function(){U.current&&se(!1)},[G]);var q=Object(oe.a)({},kt(R,L,V));F.length>1&&(q.motionAppear=!1);var ne=q.onVisibleChanged;return q.onVisibleChanged=function(Q){return!U.current&&!Q&&se(!0),ne==null?void 0:ne(Q)},X?null:n.createElement(S,{mode:R,locked:!U.current},n.createElement(Da.default,Object(W.a)({visible:J},q,{forceRender:K,removeOnLeave:!1,leavedClassName:"".concat(I,"-hidden")}),function(Q){var re=Q.className,k=Q.style;return n.createElement(Qt,{id:d,className:re,style:k},j)}))}var Aa=function(d){var y,F=d.style,j=d.className,R=d.title,P=d.eventKey,I=d.disabled,K=d.internalPopupClose,L=d.children,V=d.itemIcon,G=d.expandIcon,U=d.popupClassName,ae=d.popupOffset,Y=d.onClick,X=d.onMouseEnter,se=d.onMouseLeave,J=d.onTitleClick,q=d.onTitleMouseEnter,ne=d.onTitleMouseLeave,Q=Object(Oe.a)(d,["style","className","title","eventKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"]),re=sn(P),k=n.useContext(O),pe=k.prefixCls,_=k.mode,le=k.openKeys,de=k.disabled,te=k.overflowDisabled,H=k.activeKey,ie=k.selectedKeys,fe=k.itemIcon,me=k.expandIcon,ye=k.onItemClick,Te=k.onOpenChange,he=k.onActive,ge=n.useContext($),je=ge.isSubPathKey,Fe=M(),Ee="".concat(pe,"-submenu"),Ce=de||I,Ne=n.useRef(),Ue=n.useRef(),we=V||fe,Be=G||me,xe=le.includes(P),Ie=!te&&xe,gn=je(ie,P),Qe=f(P,Ce,q,ne),Ve=Qe.active,_e=Object(Oe.a)(Qe,["active"]),dn=n.useState(!1),cn=Object(z.a)(dn,2),Re=cn[0],We=cn[1],Ge=function(Le){Ce||We(Le)},ze=function(Le){Ge(!0),X==null||X({key:P,domEvent:Le})},Tn=function(Le){Ge(!1),se==null||se({key:P,domEvent:Le})},Hn=n.useMemo(function(){return Ve||(_!=="inline"?Re||je([H],P):!1)},[_,Ve,H,Re,P,je]),In=r(Fe.length),Ze=function(Le){Ce||(J==null||J({key:P,domEvent:Le}),_==="inline"&&Te(P,!xe))},yn=it(function(Je){Y==null||Y(t(Je)),ye(Je)}),en=function(Le){_!=="inline"&&Te(P,Le)},bn=function(){he(P)},He=re&&"".concat(re,"-popup"),ke=n.createElement("div",Object(W.a)({role:"menuitem",style:In,className:"".concat(Ee,"-title"),tabIndex:Ce?null:-1,ref:Ne,title:typeof R=="string"?R:null,"data-menu-id":te&&re?null:re,"aria-expanded":Ie,"aria-haspopup":!0,"aria-controls":He,"aria-disabled":Ce,onClick:Ze,onFocus:bn},_e),R,n.createElement(a,{icon:_!=="horizontal"?Be:null,props:Object(oe.a)(Object(oe.a)({},d),{},{isOpen:Ie,isSubMenu:!0})},n.createElement("i",{className:"".concat(Ee,"-arrow")}))),Cn=n.useRef(_);if(_!=="inline"&&(Cn.current=Fe.length>1?"vertical":_),!te){var tn=Cn.current;ke=n.createElement(ja,{mode:tn,prefixCls:Ee,visible:!K&&Ie&&_!=="inline",popupClassName:U,popupOffset:ae,popup:n.createElement(S,{mode:tn},n.createElement(Qt,{id:He,ref:Ue},L)),disabled:Ce,onVisibleChange:en},ke)}return n.createElement(S,{onItemClick:yn,mode:_==="horizontal"?"vertical":_,itemIcon:we,expandIcon:Be},n.createElement(b.Item,Object(W.a)({role:"none"},Q,{component:"li",style:F,className:Se()(Ee,"".concat(Ee,"-").concat(_),j,(y={},Object(ue.a)(y,"".concat(Ee,"-open"),Ie),Object(ue.a)(y,"".concat(Ee,"-active"),Hn),Object(ue.a)(y,"".concat(Ee,"-selected"),gn),Object(ue.a)(y,"".concat(Ee,"-disabled"),Ce),y)),onMouseEnter:ze,onMouseLeave:Tn}),ke,!te&&n.createElement(Pa,{id:He,open:Ie,keyPath:Fe},L)))};function qt(s){var d=s.eventKey,y=s.children,F=M(d),j=wt(y,F),R=C();n.useEffect(function(){if(R)return R.registerPath(d,F),function(){R.unregisterPath(d,F)}},[F]);var P;return R?P=j:P=n.createElement(Aa,s,j),n.createElement(B.Provider,{value:F},P)}var Ta=e("x/xZ");function _t(s){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Object(Ta.a)(s)){var y=s.nodeName.toLowerCase(),F=["input","select","textarea","button"].includes(y)||s.isContentEditable||y==="a"&&!!s.getAttribute("href"),j=s.getAttribute("tabindex"),R=Number(j),P=null;return j&&!Number.isNaN(R)?P=R:F&&P===null&&(P=0),F&&s.disabled&&(P=null),P!==null&&(P>=0||d&&P<0)}return!1}function ea(s){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,y=Object(rn.a)(s.querySelectorAll("*")).filter(function(F){return _t(F,d)});return _t(s,d)&&y.unshift(s),y}var bt=null;function pr(){bt=document.activeElement}function hr(){bt=null}function vr(){if(bt)try{bt.focus()}catch(s){}}function gr(s,d){if(d.keyCode===9){var y=ea(s),F=y[d.shiftKey?0:y.length-1],j=F===document.activeElement||s===document.activeElement;if(j){var R=y[d.shiftKey?y.length-1:0];R.focus(),d.preventDefault()}}}var Bt=Ae.a.LEFT,Mt=Ae.a.RIGHT,Kt=Ae.a.UP,Ct=Ae.a.DOWN,Et=Ae.a.ENTER,na=Ae.a.ESC,ta=[Kt,Ct,Bt,Mt];function Ia(s,d,y,F){var j,R,P,I,K="prev",L="next",V="children",G="parent";if(s==="inline"&&F===Et)return{inlineTrigger:!0};var U=(j={},Object(ue.a)(j,Kt,K),Object(ue.a)(j,Ct,L),j),ae=(R={},Object(ue.a)(R,Bt,y?L:K),Object(ue.a)(R,Mt,y?K:L),Object(ue.a)(R,Ct,V),Object(ue.a)(R,Et,V),R),Y=(P={},Object(ue.a)(P,Kt,K),Object(ue.a)(P,Ct,L),Object(ue.a)(P,Et,V),Object(ue.a)(P,na,G),Object(ue.a)(P,Bt,y?V:G),Object(ue.a)(P,Mt,y?G:V),P),X={inline:U,horizontal:ae,vertical:Y,inlineSub:U,horizontalSub:Y,verticalSub:Y},se=(I=X["".concat(s).concat(d?"":"Sub")])===null||I===void 0?void 0:I[F];switch(se){case K:return{offset:-1,sibling:!0};case L:return{offset:1,sibling:!0};case G:return{offset:-1,sibling:!1};case V:return{offset:1,sibling:!1};default:return null}}function Na(s){for(var d=s;d;){if(d.getAttribute("data-menu-list"))return d;d=d.parentElement}return null}function wa(s,d){for(var y=s||document.activeElement;y;){if(d.has(y))return y;y=y.parentElement}return null}function Ba(s,d){var y=ea(s,!0);return y.filter(function(F){return d.has(F)})}function aa(s,d,y){var F=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!s)return null;var j=Ba(s,d),R=j.length,P=j.findIndex(function(I){return y===I});return F<0?P===-1?P=R-1:P-=1:F>0&&(P+=1),P=(P+R)%R,j[P]}function Ma(s,d,y,F,j,R,P,I,K,L){var V=n.useRef(),G=n.useRef();G.current=d;var U=function(){$e.a.cancel(V.current)};return n.useEffect(function(){return function(){U()}},[]),function(ae){var Y=ae.which;if([].concat(ta,[Et,na]).includes(Y)){var X,se,J,q=function(){X=new Set,se=new Map,J=new Map;var fe=R();return fe.forEach(function(me){var ye=document.querySelector("[data-menu-id='".concat(Xe(F,me),"']"));ye&&(X.add(ye),J.set(ye,me),se.set(me,ye))}),X};q();var ne=se.get(d),Q=wa(ne,X),re=J.get(Q),k=Ia(s,P(re,!0).length===1,y,Y);if(!k)return;ta.includes(Y)&&ae.preventDefault();var pe=function(fe){if(fe){var me=fe,ye=fe.querySelector("a");(ye==null?void 0:ye.getAttribute("href"))&&(me=ye);var Te=J.get(fe);I(Te),U(),V.current=Object($e.a)(function(){G.current===Te&&me.focus()})}};if(k.sibling||!Q){var _;!Q||s==="inline"?_=j.current:_=Na(Q);var le=aa(_,X,Q,k.offset);pe(le)}else if(k.inlineTrigger)K(re);else if(k.offset>0)K(re,!0),U(),V.current=Object($e.a)(function(){q();var ie=Q.getAttribute("aria-controls"),fe=document.getElementById(ie),me=aa(fe,X);pe(me)},5);else if(k.offset<0){var de=P(re,!0),te=de[de.length-2],H=se.get(te);K(te,!1),pe(H)}}L==null||L(ae)}}var Ka=Math.random().toFixed(5).toString().slice(2),ra=0;function Wa(s){var d=Object(pn.a)(s,{value:s}),y=Object(z.a)(d,2),F=y[0],j=y[1];return n.useEffect(function(){ra+=1;var R="".concat(Ka,"-").concat(ra);j("rc-menu-uuid-".concat(R))},[]),F}var yr=e("p8sG");function La(s){Promise.resolve().then(s)}var Wt="__RC_UTIL_PATH_SPLIT__",sa=function(d){return d.join(Wt)},xa=function(d){return d.split(Wt)},Lt="rc-menu-more";function $a(){var s=n.useState({}),d=Object(z.a)(s,2),y=d[1],F=Object(n.useRef)(new Map),j=Object(n.useRef)(new Map),R=n.useState([]),P=Object(z.a)(R,2),I=P[0],K=P[1],L=Object(n.useRef)(0),V=Object(n.useCallback)(function(J,q){var ne=sa(q);j.current.set(ne,J),F.current.set(J,ne),L.current+=1;var Q=L.current;La(function(){Q===L.current&&y({})})},[]),G=Object(n.useCallback)(function(J,q){var ne=sa(q);j.current.delete(ne),F.current.delete(J)},[]),U=Object(n.useCallback)(function(J){K(J)},[]),ae=Object(n.useCallback)(function(J,q){var ne=F.current.get(J)||"",Q=xa(ne);return q&&I.includes(Q[0])&&Q.unshift(Lt),Q},[I]),Y=Object(n.useCallback)(function(J,q){return J.some(function(ne){var Q=ae(ne,!0);return Q.includes(q)})},[ae]),X=function(){var q=Object(rn.a)(F.current.keys());return I.length&&q.push(Lt),q},se=Object(n.useCallback)(function(J){var q="".concat(F.current.get(J)).concat(Wt),ne=new Set;return Object(rn.a)(j.current.keys()).forEach(function(Q){Q.startsWith(q)&&ne.add(j.current.get(Q))}),ne},[]);return{registerPath:V,unregisterPath:G,refreshOverflowKeys:U,isSubPathKey:Y,getKeyPath:ae,getKeys:X,getSubPathKeys:se}}var Ot=[],Va=function(d){var y,F,j=d.prefixCls,R=j===void 0?"rc-menu":j,P=d.style,I=d.className,K=d.tabIndex,L=K===void 0?0:K,V=d.children,G=d.direction,U=d.id,ae=d.mode,Y=ae===void 0?"vertical":ae,X=d.inlineCollapsed,se=d.disabled,J=d.disabledOverflow,q=d.subMenuOpenDelay,ne=q===void 0?.1:q,Q=d.subMenuCloseDelay,re=Q===void 0?.1:Q,k=d.forceSubMenuRender,pe=d.defaultOpenKeys,_=d.openKeys,le=d.activeKey,de=d.defaultActiveFirst,te=d.selectable,H=te===void 0?!0:te,ie=d.multiple,fe=ie===void 0?!1:ie,me=d.defaultSelectedKeys,ye=d.selectedKeys,Te=d.onSelect,he=d.onDeselect,ge=d.inlineIndent,je=ge===void 0?24:ge,Fe=d.motion,Ee=d.defaultMotions,Ce=d.triggerSubMenuAction,Ne=Ce===void 0?"hover":Ce,Ue=d.builtinPlacements,we=d.itemIcon,Be=d.expandIcon,xe=d.overflowedIndicator,Ie=xe===void 0?"...":xe,gn=d.getPopupContainer,Qe=d.onClick,Ve=d.onOpenChange,_e=d.onKeyDown,dn=d.openAnimation,cn=d.openTransitionName,Re=Object(Oe.a)(d,["prefixCls","style","className","tabIndex","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName"]),We=wt(V,Ot),Ge=n.useState(!1),ze=Object(z.a)(Ge,2),Tn=ze[0],Hn=ze[1],In=n.useRef(),Ze=Wa(U),yn=G==="rtl",en=n.useMemo(function(){return Y==="inline"&&X?["vertical",X]:[Y,!1]},[Y,X]),bn=Object(z.a)(en,2),He=bn[0],ke=bn[1],Cn=n.useState(0),tn=Object(z.a)(Cn,2),Je=tn[0],Le=tn[1],Yn=Je>=We.length-1||He!=="horizontal"||J,Xn=Object(pn.a)(pe,{value:_,postState:function(Z){return Z||Ot}}),ot=Object(z.a)(Xn,2),mn=ot[0],ln=ot[1],Qn=n.useState(mn),fn=Object(z.a)(Qn,2),an=fn[0],Zn=fn[1],En=He==="inline",kn=n.useRef(!1);n.useEffect(function(){En&&Zn(mn)},[mn]),n.useEffect(function(){if(!kn.current){kn.current=!0;return}if(En)ln(an);else{var ee=[];ln(ee),Ve==null||Ve(ee)}},[En]);var nn=$a(),On=nn.registerPath,ce=nn.unregisterPath,be=nn.refreshOverflowKeys,De=nn.isSubPathKey,Ye=nn.getKeyPath,qn=nn.getKeys,Rt=nn.getSubPathKeys,zt=n.useMemo(function(){return{registerPath:On,unregisterPath:ce}},[On,ce]),Jt=n.useMemo(function(){return{isSubPathKey:De}},[De]);n.useEffect(function(){be(Yn?Ot:We.slice(Je+1).map(function(ee){return ee.key}))},[Je,Yn]);var Ut=Object(pn.a)(le||de&&((y=We[0])===null||y===void 0?void 0:y.key),{value:le}),lt=Object(z.a)(Ut,2),Ft=lt[0],pt=lt[1],jt=it(function(ee){pt(ee)}),Gt=it(function(){pt(void 0)}),Dt=Object(pn.a)(me||[],{value:ye,postState:function(Z){return Array.isArray(Z)?Z:Z==null?Ot:[Z]}}),Pt=Object(z.a)(Dt,2),ut=Pt[0],Sn=Pt[1],At=function(Z){if(!!H){var ve=Z.key,Me=ut.includes(ve),qe;Me?qe=ut.filter(function(et){return et!==ve}):fe?qe=[].concat(Object(rn.a)(ut),[ve]):qe=[ve],Sn(qe);var xn=Object(oe.a)(Object(oe.a)({},Z),{},{selectedKeys:qe});Me?he==null||he(xn):Te==null||Te(xn)}},Tt=it(function(ee){Qe==null||Qe(t(ee)),At(ee)}),ht=it(function(ee,Z){var ve=mn.filter(function(qe){return qe!==ee});if(Z)ve.push(ee);else if(He!=="inline"){var Me=Rt(ee);ve=ve.filter(function(qe){return!Me.has(qe)})}rt()(mn,ve)||(ln(ve),Ve==null||Ve(ve))}),_n=it(gn),vt=function(Z,ve){var Me=ve!=null?ve:!mn.includes(Z);ht(Z,Me)},gt=Ma(He,Ft,yn,Ze,In,qn,Ye,pt,vt,_e);n.useEffect(function(){Hn(!0)},[]);var It=He!=="horizontal"||J?We:We.map(function(ee,Z){return n.createElement(S,{key:ee.key,overflowDisabled:Z>Je},ee)}),Nt=n.createElement(b,Object(W.a)({id:U,ref:In,prefixCls:"".concat(R,"-overflow"),component:"ul",itemComponent:Gn,className:Se()(R,"".concat(R,"-root"),"".concat(R,"-").concat(He),I,(F={},Object(ue.a)(F,"".concat(R,"-inline-collapsed"),ke),Object(ue.a)(F,"".concat(R,"-rtl"),yn),F)),dir:G,style:P,role:"menu",tabIndex:L,data:It,renderRawItem:function(Z){return Z},renderRawRest:function(Z){var ve=Z.length,Me=ve?We.slice(-ve):null;return n.createElement(qt,{eventKey:Lt,title:Ie,disabled:Yn,internalPopupClose:ve===0},Me)},maxCount:He!=="horizontal"||J?b.INVALIDATE:b.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(Z){Le(Z)},onKeyDown:gt},Re));return n.createElement(Ke.Provider,{value:Ze},n.createElement(S,{prefixCls:R,mode:He,openKeys:mn,rtl:yn,disabled:se,motion:Tn?Fe:null,defaultMotions:Tn?Ee:null,activeKey:Ft,onActive:jt,onInactive:Gt,selectedKeys:ut,inlineIndent:je,subMenuOpenDelay:ne,subMenuCloseDelay:re,forceSubMenuRender:k,builtinPlacements:Ue,triggerSubMenuAction:Ne,getPopupContainer:_n,itemIcon:we,expandIcon:Be,onItemClick:Tt,onOpenChange:ht},n.createElement($.Provider,{value:Jt},Nt),n.createElement(v.Provider,{value:zt},We)))},za=Va,Ja=function(d){var y=d.className,F=d.title,j=d.eventKey,R=d.children,P=Object(Oe.a)(d,["className","title","eventKey","children"]),I=n.useContext(O),K=I.prefixCls,L="".concat(K,"-item-group");return n.createElement("li",Object(W.a)({},P,{onClick:function(G){return G.stopPropagation()},className:Se()(L,y)}),n.createElement("div",{className:"".concat(L,"-title"),title:typeof F=="string"?F:void 0},F),n.createElement("ul",{className:"".concat(L,"-list")},R))};function Ua(s){var d=s.children,y=Object(Oe.a)(s,["children"]),F=M(y.eventKey),j=wt(d,F),R=C();return R?j:n.createElement(Ja,y,j)}function Ga(s){var d=s.className,y=s.style,F=n.useContext(O),j=F.prefixCls,R=C();return R?null:n.createElement("li",{className:Se()("".concat(j,"-item-divider"),d),style:y})}var ft=za;ft.Item=Gn,ft.SubMenu=qt,ft.ItemGroup=Ua,ft.Divider=Ga;var Ha=ft,Ya=e("eDIo");function Xa(s,d){var y=s.prefixCls,F=s.editable,j=s.locale,R=s.style;return!F||F.showAdd===!1?null:n.createElement("button",{ref:d,type:"button",className:"".concat(y,"-nav-add"),style:R,"aria-label":(j==null?void 0:j.addAriaLabel)||"Add tab",onClick:function(I){F.onEdit("add",{event:I})}},F.addIcon||"+")}var ia=n.forwardRef(Xa);function Qa(s,d){var y=s.prefixCls,F=s.id,j=s.tabs,R=s.locale,P=s.mobile,I=s.moreIcon,K=I===void 0?"More":I,L=s.moreTransitionName,V=s.style,G=s.className,U=s.editable,ae=s.tabBarGutter,Y=s.rtl,X=s.onTabClick,se=Object(n.useState)(!1),J=Object(z.a)(se,2),q=J[0],ne=J[1],Q=Object(n.useState)(null),re=Object(z.a)(Q,2),k=re[0],pe=re[1],_="".concat(F,"-more-popup"),le="".concat(y,"-dropdown"),de=k!==null?"".concat(_,"-").concat(k):null,te=R==null?void 0:R.dropdownAriaLabel,H=n.createElement(Ha,{onClick:function(ge){var je=ge.key,Fe=ge.domEvent;X(je,Fe),ne(!1)},id:_,tabIndex:-1,role:"listbox","aria-activedescendant":de,selectedKeys:[k],"aria-label":te!==void 0?te:"expanded dropdown"},j.map(function(he){return n.createElement(Gn,{key:he.key,id:"".concat(_,"-").concat(he.key),role:"option","aria-controls":F&&"".concat(F,"-panel-").concat(he.key),disabled:he.disabled},he.tab)}));function ie(he){for(var ge=j.filter(function(Ne){return!Ne.disabled}),je=ge.findIndex(function(Ne){return Ne.key===k})||0,Fe=ge.length,Ee=0;Ee<Fe;Ee+=1){je=(je+he+Fe)%Fe;var Ce=ge[je];if(!Ce.disabled){pe(Ce.key);return}}}function fe(he){var ge=he.which;if(!q){[Ae.a.DOWN,Ae.a.SPACE,Ae.a.ENTER].includes(ge)&&(ne(!0),he.preventDefault());return}switch(ge){case Ae.a.UP:ie(-1),he.preventDefault();break;case Ae.a.DOWN:ie(1),he.preventDefault();break;case Ae.a.ESC:ne(!1);break;case Ae.a.SPACE:case Ae.a.ENTER:k!==null&&X(k,he);break}}Object(n.useEffect)(function(){var he=document.getElementById(de);he&&he.scrollIntoView&&he.scrollIntoView(!1)},[k]),Object(n.useEffect)(function(){q||pe(null)},[q]);var me=Object(ue.a)({},Y?"marginLeft":"marginRight",ae);j.length||(me.visibility="hidden",me.order=1);var ye=Se()(Object(ue.a)({},"".concat(le,"-rtl"),Y)),Te=P?null:n.createElement(Ya.default,{prefixCls:le,overlay:H,trigger:["hover"],visible:q,transitionName:L,onVisibleChange:ne,overlayClassName:ye,mouseEnterDelay:.1,mouseLeaveDelay:.1},n.createElement("button",{type:"button",className:"".concat(y,"-nav-more"),style:me,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":_,id:"".concat(F,"-more"),"aria-expanded":q,onKeyDown:fe},K));return n.createElement("div",{className:Se()("".concat(y,"-nav-operations"),G),style:V,ref:d},Te,n.createElement(ia,{prefixCls:y,locale:R,editable:U}))}var Za=n.forwardRef(Qa),xt=Object(n.createContext)(null),ka=.1,oa=.01,St=20,la=Math.pow(.995,St);function qa(s,d){var y=Object(n.useState)(),F=Object(z.a)(y,2),j=F[0],R=F[1],P=Object(n.useState)(0),I=Object(z.a)(P,2),K=I[0],L=I[1],V=Object(n.useState)(0),G=Object(z.a)(V,2),U=G[0],ae=G[1],Y=Object(n.useState)(),X=Object(z.a)(Y,2),se=X[0],J=X[1],q=Object(n.useRef)();function ne(le){var de=le.touches[0],te=de.screenX,H=de.screenY;R({x:te,y:H}),window.clearInterval(q.current)}function Q(le){if(!!j){le.preventDefault();var de=le.touches[0],te=de.screenX,H=de.screenY;R({x:te,y:H});var ie=te-j.x,fe=H-j.y;d(ie,fe);var me=Date.now();L(me),ae(me-K),J({x:ie,y:fe})}}function re(){if(!!j&&(R(null),J(null),se)){var le=se.x/U,de=se.y/U,te=Math.abs(le),H=Math.abs(de);if(Math.max(te,H)<ka)return;var ie=le,fe=de;q.current=window.setInterval(function(){if(Math.abs(ie)<oa&&Math.abs(fe)<oa){window.clearInterval(q.current);return}ie*=la,fe*=la,d(ie*St,fe*St)},St)}}var k=Object(n.useRef)();function pe(le){var de=le.deltaX,te=le.deltaY,H=0,ie=Math.abs(de),fe=Math.abs(te);ie===fe?H=k.current==="x"?de:te:ie>fe?(H=de,k.current="x"):(H=te,k.current="y"),d(-H,-H)&&le.preventDefault()}var _=Object(n.useRef)(null);_.current={onTouchStart:ne,onTouchMove:Q,onTouchEnd:re,onWheel:pe},n.useEffect(function(){function le(ie){_.current.onTouchStart(ie)}function de(ie){_.current.onTouchMove(ie)}function te(ie){_.current.onTouchEnd(ie)}function H(ie){_.current.onWheel(ie)}return document.addEventListener("touchmove",de,{passive:!1}),document.addEventListener("touchend",te,{passive:!1}),s.current.addEventListener("touchstart",le,{passive:!1}),s.current.addEventListener("wheel",H),function(){document.removeEventListener("touchmove",de),document.removeEventListener("touchend",te)}},[])}function _a(){var s=Object(n.useRef)(new Map);function d(F){return s.current.has(F)||s.current.set(F,n.createRef()),s.current.get(F)}function y(F){s.current.delete(F)}return[d,y]}function ua(s,d){var y=n.useRef(s),F=n.useState({}),j=Object(z.a)(F,2),R=j[1];function P(I){var K=typeof I=="function"?I(y.current):I;K!==y.current&&d(K,y.current),y.current=K,R({})}return[y.current,P]}var da=function(d){var y=d.position,F=d.prefixCls,j=d.extra;if(!j)return null;var R,P=j;return y==="right"&&(R=P.right||!P.left&&P||null),y==="left"&&(R=P.left||null),R?n.createElement("div",{className:"".concat(F,"-extra-content")},R):null};function er(s,d){var y,F=n.useContext(xt),j=F.prefixCls,R=F.tabs,P=s.className,I=s.style,K=s.id,L=s.animated,V=s.activeKey,G=s.rtl,U=s.extra,ae=s.editable,Y=s.locale,X=s.tabPosition,se=s.tabBarGutter,J=s.children,q=s.onTabClick,ne=s.onTabScroll,Q=Object(n.useRef)(),re=Object(n.useRef)(),k=Object(n.useRef)(),pe=Object(n.useRef)(),_=_a(),le=Object(z.a)(_,2),de=le[0],te=le[1],H=X==="top"||X==="bottom",ie=ua(0,function(ee,Z){H&&ne&&ne({direction:ee>Z?"left":"right"})}),fe=Object(z.a)(ie,2),me=fe[0],ye=fe[1],Te=ua(0,function(ee,Z){!H&&ne&&ne({direction:ee>Z?"top":"bottom"})}),he=Object(z.a)(Te,2),ge=he[0],je=he[1],Fe=Object(n.useState)(0),Ee=Object(z.a)(Fe,2),Ce=Ee[0],Ne=Ee[1],Ue=Object(n.useState)(0),we=Object(z.a)(Ue,2),Be=we[0],xe=we[1],Ie=Object(n.useState)(0),gn=Object(z.a)(Ie,2),Qe=gn[0],Ve=gn[1],_e=Object(n.useState)(0),dn=Object(z.a)(_e,2),cn=dn[0],Re=dn[1],We=Object(n.useState)(null),Ge=Object(z.a)(We,2),ze=Ge[0],Tn=Ge[1],Hn=Object(n.useState)(null),In=Object(z.a)(Hn,2),Ze=In[0],yn=In[1],en=Object(n.useState)(0),bn=Object(z.a)(en,2),He=bn[0],ke=bn[1],Cn=Object(n.useState)(0),tn=Object(z.a)(Cn,2),Je=tn[0],Le=tn[1],Yn=hn(new Map),Xn=Object(z.a)(Yn,2),ot=Xn[0],mn=Xn[1],ln=dt(R,ot,Ce),Qn="".concat(j,"-nav-operations-hidden"),fn=0,an=0;H?G?(fn=0,an=Math.max(0,Ce-ze)):(fn=Math.min(0,ze-Ce),an=0):(fn=Math.min(0,Ze-Be),an=0);function Zn(ee){return ee<fn?fn:ee>an?an:ee}var En=Object(n.useRef)(),kn=Object(n.useState)(),nn=Object(z.a)(kn,2),On=nn[0],ce=nn[1];function be(){ce(Date.now())}function De(){window.clearTimeout(En.current)}qa(Q,function(ee,Z){function ve(Me,qe){Me(function(xn){var et=Zn(xn+qe);return et})}if(H){if(ze>=Ce)return!1;ve(ye,ee)}else{if(Ze>=Be)return!1;ve(je,Z)}return De(),be(),!0}),Object(n.useEffect)(function(){return De(),On&&(En.current=window.setTimeout(function(){ce(0)},100)),De},[On]);function Ye(){var ee=arguments.length>0&&arguments[0]!==void 0?arguments[0]:V,Z=ln.get(ee)||{width:0,height:0,left:0,right:0,top:0};if(H){var ve=me;G?Z.right<me?ve=Z.right:Z.right+Z.width>me+ze&&(ve=Z.right+Z.width-ze):Z.left<-me?ve=-Z.left:Z.left+Z.width>-me+ze&&(ve=-(Z.left+Z.width-ze)),je(0),ye(Zn(ve))}else{var Me=ge;Z.top<-ge?Me=-Z.top:Z.top+Z.height>-ge+Ze&&(Me=-(Z.top+Z.height-Ze)),ye(0),je(Zn(Me))}}var qn=ct(ln,{width:ze,height:Ze,left:me,top:ge},{width:Qe,height:cn},{width:He,height:Je},Object(oe.a)(Object(oe.a)({},s),{},{tabs:R})),Rt=Object(z.a)(qn,2),zt=Rt[0],Jt=Rt[1],Ut=R.map(function(ee){var Z=ee.key;return n.createElement(wn,{id:K,prefixCls:j,key:Z,rtl:G,tab:ee,closable:ee.closable,editable:ae,active:Z===V,tabPosition:X,tabBarGutter:se,renderWrapper:J,removeAriaLabel:Y==null?void 0:Y.removeAriaLabel,ref:de(Z),onClick:function(Me){q(Z,Me)},onRemove:function(){te(Z)},onFocus:function(){Ye(Z),be(),G||(Q.current.scrollLeft=0),Q.current.scrollTop=0}})}),lt=Dn(function(){var ee,Z,ve,Me,qe,xn,et,Ht,Yt,lr=((ee=Q.current)===null||ee===void 0?void 0:ee.offsetWidth)||0,ur=((Z=Q.current)===null||Z===void 0?void 0:Z.offsetHeight)||0,ha=((ve=pe.current)===null||ve===void 0?void 0:ve.offsetWidth)||0,va=((Me=pe.current)===null||Me===void 0?void 0:Me.offsetHeight)||0,dr=((qe=k.current)===null||qe===void 0?void 0:qe.offsetWidth)||0,cr=((xn=k.current)===null||xn===void 0?void 0:xn.offsetHeight)||0;Tn(lr),yn(ur),ke(ha),Le(va);var ga=(((et=re.current)===null||et===void 0?void 0:et.offsetWidth)||0)-ha,ya=(((Ht=re.current)===null||Ht===void 0?void 0:Ht.offsetHeight)||0)-va;Ne(ga),xe(ya);var ba=(Yt=k.current)===null||Yt===void 0?void 0:Yt.className.includes(Qn);Ve(ga-(ba?0:dr)),Re(ya-(ba?0:cr)),mn(function(){var Ca=new Map;return R.forEach(function(mr){var Ea=mr.key,yt=de(Ea).current;yt&&Ca.set(Ea,{width:yt.offsetWidth,height:yt.offsetHeight,left:yt.offsetLeft,top:yt.offsetTop})}),Ca})}),Ft=R.slice(0,zt),pt=R.slice(Jt+1),jt=[].concat(Object(rn.a)(Ft),Object(rn.a)(pt)),Gt=Object(n.useState)(),Dt=Object(z.a)(Gt,2),Pt=Dt[0],ut=Dt[1],Sn=ln.get(V),At=Object(n.useRef)();function Tt(){$e.a.cancel(At.current)}Object(n.useEffect)(function(){var ee={};return Sn&&(H?(G?ee.right=Sn.right:ee.left=Sn.left,ee.width=Sn.width):(ee.top=Sn.top,ee.height=Sn.height)),Tt(),At.current=Object($e.a)(function(){ut(ee)}),Tt},[Sn,H,G]),Object(n.useEffect)(function(){Ye()},[V,Sn,ln,H]),Object(n.useEffect)(function(){lt()},[G,se,V,R.map(function(ee){return ee.key}).join("_")]);var ht=!!jt.length,_n="".concat(j,"-nav-wrap"),vt,gt,It,Nt;return H?G?(gt=me>0,vt=me+ze<Ce):(vt=me<0,gt=-me+ze<Ce):(It=ge<0,Nt=-ge+Ze<Be),n.createElement("div",{ref:d,role:"tablist",className:Se()("".concat(j,"-nav"),P),style:I,onKeyDown:function(){be()}},n.createElement(da,{position:"left",extra:U,prefixCls:j}),n.createElement(Nn.default,{onResize:lt},n.createElement("div",{className:Se()(_n,(y={},Object(ue.a)(y,"".concat(_n,"-ping-left"),vt),Object(ue.a)(y,"".concat(_n,"-ping-right"),gt),Object(ue.a)(y,"".concat(_n,"-ping-top"),It),Object(ue.a)(y,"".concat(_n,"-ping-bottom"),Nt),y)),ref:Q},n.createElement(Nn.default,{onResize:lt},n.createElement("div",{ref:re,className:"".concat(j,"-nav-list"),style:{transform:"translate(".concat(me,"px, ").concat(ge,"px)"),transition:On?"none":void 0}},Ut,n.createElement(ia,{ref:pe,prefixCls:j,locale:Y,editable:ae,style:{visibility:ht?"hidden":null}}),n.createElement("div",{className:Se()("".concat(j,"-ink-bar"),Object(ue.a)({},"".concat(j,"-ink-bar-animated"),L.inkBar)),style:Pt}))))),n.createElement(Za,Object(W.a)({},s,{ref:k,prefixCls:j,tabs:jt,className:!ht&&Qn})),n.createElement(da,{position:"right",extra:U,prefixCls:j}))}var ca=n.forwardRef(er);function nr(s){var d=s.id,y=s.activeKey,F=s.animated,j=s.tabPosition,R=s.rtl,P=s.destroyInactiveTabPane,I=n.useContext(xt),K=I.prefixCls,L=I.tabs,V=F.tabPane,G=L.findIndex(function(U){return U.key===y});return n.createElement("div",{className:Se()("".concat(K,"-content-holder"))},n.createElement("div",{className:Se()("".concat(K,"-content"),"".concat(K,"-content-").concat(j),Object(ue.a)({},"".concat(K,"-content-animated"),V)),style:G&&V?Object(ue.a)({},R?"marginRight":"marginLeft","-".concat(G,"00%")):null},L.map(function(U){return n.cloneElement(U.node,{key:U.key,prefixCls:K,tabKey:U.key,id:d,animated:V,active:U.key===y,destroyInactiveTabPane:P})})))}function ma(s){var d=s.prefixCls,y=s.forceRender,F=s.className,j=s.style,R=s.id,P=s.active,I=s.animated,K=s.destroyInactiveTabPane,L=s.tabKey,V=s.children,G=n.useState(y),U=Object(z.a)(G,2),ae=U[0],Y=U[1];n.useEffect(function(){P?Y(!0):K&&Y(!1)},[P,K]);var X={};return P||(I?(X.visibility="hidden",X.height=0,X.overflowY="hidden"):X.display="none"),n.createElement("div",{id:R&&"".concat(R,"-panel-").concat(L),role:"tabpanel",tabIndex:P?0:-1,"aria-labelledby":R&&"".concat(R,"-tab-").concat(L),"aria-hidden":!P,style:Object(oe.a)(Object(oe.a)({},X),j),className:Se()("".concat(d,"-tabpane"),P&&"".concat(d,"-tabpane-active"),F)},(P||ae||y)&&V)}var fa=0;function tr(s){return Object(Fn.a)(s).map(function(d){if(n.isValidElement(d)){var y=d.key!==void 0?String(d.key):void 0;return Object(oe.a)(Object(oe.a)({key:y},d.props),{},{node:d})}return null}).filter(function(d){return d})}function ar(s,d){var y,F=s.id,j=s.prefixCls,R=j===void 0?"rc-tabs":j,P=s.className,I=s.children,K=s.direction,L=s.activeKey,V=s.defaultActiveKey,G=s.editable,U=s.animated,ae=U===void 0?{inkBar:!0,tabPane:!1}:U,Y=s.tabPosition,X=Y===void 0?"top":Y,se=s.tabBarGutter,J=s.tabBarStyle,q=s.tabBarExtraContent,ne=s.locale,Q=s.moreIcon,re=s.moreTransitionName,k=s.destroyInactiveTabPane,pe=s.renderTabBar,_=s.onChange,le=s.onTabClick,de=s.onTabScroll,te=Object(Oe.a)(s,["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"]),H=tr(I),ie=K==="rtl",fe;ae===!1?fe={inkBar:!1,tabPane:!1}:ae===!0?fe={inkBar:!0,tabPane:!0}:fe=Object(oe.a)({inkBar:!0,tabPane:!1},Object(Pe.a)(ae)==="object"?ae:{});var me=Object(n.useState)(!1),ye=Object(z.a)(me,2),Te=ye[0],he=ye[1];Object(n.useEffect)(function(){he(Object(jn.a)())},[]);var ge=Object(pn.a)(function(){var Re;return(Re=H[0])===null||Re===void 0?void 0:Re.key},{value:L,defaultValue:V}),je=Object(z.a)(ge,2),Fe=je[0],Ee=je[1],Ce=Object(n.useState)(function(){return H.findIndex(function(Re){return Re.key===Fe})}),Ne=Object(z.a)(Ce,2),Ue=Ne[0],we=Ne[1];Object(n.useEffect)(function(){var Re=H.findIndex(function(Ge){return Ge.key===Fe});if(Re===-1){var We;Re=Math.max(0,Math.min(Ue,H.length-1)),Ee((We=H[Re])===null||We===void 0?void 0:We.key)}we(Re)},[H.map(function(Re){return Re.key}).join("_"),Fe,Ue]);var Be=Object(pn.a)(null,{value:F}),xe=Object(z.a)(Be,2),Ie=xe[0],gn=xe[1],Qe=X;Te&&!["left","right"].includes(X)&&(Qe="top"),Object(n.useEffect)(function(){F||(gn("rc-tabs-".concat(fa)),fa+=1)},[]);function Ve(Re,We){le==null||le(Re,We),Ee(Re),_==null||_(Re)}var _e={id:Ie,activeKey:Fe,animated:fe,tabPosition:Qe,rtl:ie,mobile:Te},dn,cn=Object(oe.a)(Object(oe.a)({},_e),{},{editable:G,locale:ne,moreIcon:Q,moreTransitionName:re,tabBarGutter:se,onTabClick:Ve,onTabScroll:de,extra:q,style:J,panes:I});return pe?dn=pe(cn,ca):dn=n.createElement(ca,cn),n.createElement(xt.Provider,{value:{tabs:H,prefixCls:R}},n.createElement("div",Object(W.a)({ref:d,id:F,className:Se()(R,"".concat(R,"-").concat(Qe),(y={},Object(ue.a)(y,"".concat(R,"-mobile"),Te),Object(ue.a)(y,"".concat(R,"-editable"),G),Object(ue.a)(y,"".concat(R,"-rtl"),ie),y),P)},te),dn,n.createElement(nr,Object(W.a)({destroyInactiveTabPane:k},_e,{animated:fe}))))}var pa=n.forwardRef(ar);pa.TabPane=ma;var rr=pa,sr=rr,$t=e("MZF8"),on=e("dEAq"),ir=e("ZpkN"),br=e("TIsu");function Vt(s,d){var y,F=(y=s.match(/\.(\w+)$/))===null||y===void 0?void 0:y[1];return F||(F=d.tsx?"tsx":"jsx"),F}var or=s=>{var d,y,F,j=Object(n.useRef)(),R=Object(n.useContext)(on.context),P=R.locale,I=Object(on.useLocaleProps)(P,s),K=Object(on.useDemoUrl)(I.identifier),L=I.demoUrl||K,V=($t.a===null||$t.a===void 0?void 0:$t.a.location.hash)==="#".concat(I.identifier),G=Object.keys(I.sources).length===1,U=Object(on.useCodeSandbox)((d=I.hideActions)!==null&&d!==void 0&&d.includes("CSB")?null:I),ae=Object(on.useRiddle)((y=I.hideActions)!==null&&y!==void 0&&y.includes("RIDDLE")?null:I),Y=Object(on.useMotions)(I.motions||[],j.current),X=Object(x.default)(Y,2),se=X[0],J=X[1],q=Object(on.useCopy)(),ne=Object(x.default)(q,2),Q=ne[0],re=ne[1],k=Object(n.useState)("_"),pe=Object(x.default)(k,2),_=pe[0],le=pe[1],de=Object(n.useState)(Vt(_,I.sources[_])),te=Object(x.default)(de,2),H=te[0],ie=te[1],fe=Object(n.useState)(Boolean(I.defaultShowCode)),me=Object(x.default)(fe,2),ye=me[0],Te=me[1],he=Object(n.useState)(Math.random()),ge=Object(x.default)(he,2),je=ge[0],Fe=ge[1],Ee=I.sources[_][H]||I.sources[_].content,Ce=Object(on.useTSPlaygroundUrl)(P,Ee),Ne=Object(n.useRef)(),Ue=Object(on.usePrefersColor)(),we=Object(x.default)(Ue,1),Be=we[0];Object(n.useEffect)(()=>{Fe(Math.random())},[Be]);function xe(Ie){le(Ie),ie(Vt(Ie,I.sources[Ie]))}return g.a.createElement("div",{style:I.style,className:[I.className,"__dumi-default-previewer",V?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:I.identifier,"data-debug":I.debug||void 0,"data-iframe":I.iframe||void 0},I.iframe&&g.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),g.a.createElement("div",{ref:j,className:"__dumi-default-previewer-demo",style:{transform:I.transform?"translate(0, 0)":void 0,padding:I.compact||I.iframe&&I.compact!==!1?"0":void 0,background:I.background}},I.iframe?g.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(I.iframe).replace(/(\d)$/,"$1px")},key:je,src:L,ref:Ne}):I.children),g.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":I.title},I.title&&g.a.createElement(on.AnchorLink,{to:"#".concat(I.identifier)},I.title),I.description&&g.a.createElement("div",{dangerouslySetInnerHTML:{__html:I.description}})),g.a.createElement("div",{className:"__dumi-default-previewer-actions"},U&&g.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:U}),ae&&g.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:ae}),I.motions&&g.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:J,onClick:()=>se()}),I.iframe&&g.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:()=>Fe(Math.random())}),!((F=I.hideActions)!==null&&F!==void 0&&F.includes("EXTERNAL"))&&g.a.createElement(on.Link,{target:"_blank",to:L},g.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),g.a.createElement("span",null),g.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":re,onClick:()=>Q(Ee)}),H==="tsx"&&ye&&g.a.createElement(on.Link,{target:"_blank",to:Ce},g.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),g.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(ye?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:()=>Te(!ye)})),ye&&g.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!G&&g.a.createElement(sr,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xB7\xB7\xB7",defaultActiveKey:_,onChange:xe},Object.keys(I.sources).map(Ie=>g.a.createElement(ma,{tab:Ie==="_"?"index.".concat(Vt(Ie,I.sources[Ie])):Ie,key:Ie}))),g.a.createElement("div",{className:"__dumi-default-previewer-source"},g.a.createElement(ir.a,{code:Ee,lang:H,showCopy:!1}))))},Cr=un.default=or},"2XY2":function(Rn,un,e){"use strict";e.r(un);var x=e("q1tI"),n=e.n(x),g=e("dEAq"),W=e.n(g),ue=e("0zqC"),z=e("ZpkN"),Pe=e("JjdP"),Oe=n.a.memo(Pe.default["chart-render-demo"].component);un.default=oe=>(n.a.useEffect(()=>{oe!=null&&oe.location.hash&&g.AnchorLink.scrollToAnchor(decodeURIComponent(oe.location.hash.slice(1)))},[]),n.a.createElement(n.a.Fragment,null,n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"markdown"},n.a.createElement("div",{style:{display:"flex",alignItems:"center",marginBottom:"24px"}},n.a.createElement("img",{src:"https://img.alicdn.com/tfs/TB17UtINiLaK1RjSZFxXXamPFXa-606-643.png",alt:"logo",width:"48px"}),n.a.createElement("span",{style:{fontSize:"30px",fontWeight:"600",display:"inline-block",marginLeft:"12px"}},"ChartRender")),n.a.createElement("p",{style:{display:"flex",justifyContent:"space-between",width:"440px"}},n.a.createElement(g.Link,{to:"https://www.npmjs.com/package/chart-render?_blank"},n.a.createElement("img",{alt:"npm",src:"https://img.shields.io/npm/v/chart-render.svg?maxAge=3600&style=flat-square"})),n.a.createElement(g.Link,{to:"https://npmjs.org/package/chart-render"},n.a.createElement("img",{alt:"NPM downloads",src:"https://img.shields.io/npm/dm/chart-render.svg?style=flat-square"})),n.a.createElement(g.Link,{to:"https://npmjs.org/package/chart-render"},n.a.createElement("img",{alt:"NPM all downloads",src:"https://img.shields.io/npm/dt/chart-render.svg?style=flat-square"})),n.a.createElement("a",null,n.a.createElement("img",{alt:"PRs Welcome",src:"https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square"}))),n.a.createElement("blockquote",null,n.a.createElement("p",null,"\u6613\u7528\u7684\u4E2D\u540E\u53F0",n.a.createElement("strong",null,"\u56FE\u8868\u89E3\u51B3\u65B9\u6848"),"\uFF0C\u5E38\u7528\u4E8E",n.a.createElement("strong",null,"\u56FE\u8868\u5C55\u793A\u9875"),"\u5FEB\u901F\u751F\u6210")),n.a.createElement("h2",{id:"\u4F18\u52BF"},n.a.createElement(g.AnchorLink,{to:"#\u4F18\u52BF","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u4F18\u52BF"),n.a.createElement("ol",null,n.a.createElement("li",null,n.a.createElement("strong",null,"\u771F\u6B63\u5F00\u7BB1\u5373\u7528"),"\uFF1A\u53EA\u9700\u8981\u5173\u5FC3\u4F60\u7684\u6570\u636E\uFF0C\u4F20\u5165 ",n.a.createElement("code",null,"meta"),"\u3001",n.a.createElement("code",null,"data")," \u5373\u53EF\u51FA\u56FE\u3002"),n.a.createElement("li",null,n.a.createElement("strong",null,"\u5F00\u53D1\u4F53\u9A8C\u8212\u9002"),"\uFF1A\u4F7F\u7528 TypeScript \u5F00\u53D1\uFF0C\u63D0\u4F9B\u5B8C\u6574\u7684\u7C7B\u578B\u5B9A\u4E49\u6587\u4EF6\u3002"),n.a.createElement("li",null,n.a.createElement("strong",null,"\u65E0\u7F1D\u4E60\u60EF\u4F7F\u7528"),"\uFF1A\u56FE\u8868\u7528 Ant Design Charts \u6765\u63D0\u4F9B\uFF0C\u81EA\u5B9A\u4E49\u7684\u6837\u5F0F\u652F\u6301\u53C2\u6570\u900F\u4F20\u3002")),n.a.createElement("h2",{id:"\u4F55\u65F6\u4F7F\u7528"},n.a.createElement(g.AnchorLink,{to:"#\u4F55\u65F6\u4F7F\u7528","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u4F55\u65F6\u4F7F\u7528"),n.a.createElement("ol",null,n.a.createElement("li",null,"\u9700\u8981\u9488\u5BF9\u4E00\u5806\u6570\u636E\u5FEB\u901F\u5EFA\u7ACB\u53EF\u89C6\u5316\u56FE\u8868\uFF0C\u5E76\u4E14\u9700\u8981 ",n.a.createElement("strong",null,"\u6298\u7EBF\u56FE/\u67F1\u72B6\u56FE/\u4EA4\u53C9\u8868")," \u9891\u7E41\u5207\u6362\u67E5\u770B\u3002"),n.a.createElement("li",null,"\u524D\u7AEF\u5C0F\u767D\uFF0C\u53EA\u5173\u5FC3\u624B\u91CC\u7684\u6570\u636E\uFF0C\u4E0D\u60F3\u770B\u957F\u7BC7\u5927\u8BBA\u4E86\u89E3\u90A3\u4E9B\u56FE\u8868\u5E93\u8BE5\u600E\u4E48\u4F7F\u7528\uFF0C\u53EA\u60F3\u642D\u4E2A\u56FE\u8868\u770B\u3002"),n.a.createElement("li",null,"\u63D0\u4F9B\u6298\u7EBF\u56FE\u3001\u67F1\u72B6\u56FE\u3001\u4EA4\u53C9\u8868\u4E09\u7C7B\u7EC4\u4EF6\u8FDB\u884C\u56FE\u8868\u7ED8\u5236\uFF1A",n.a.createElement("ul",null,n.a.createElement("li",null,"\u6298\u7EBF\u56FE\uFF1A\u5E38\u7528\u6765\u89C2\u5BDF\u8D44\u6599\u5728\u4E00\u6BB5\u7EF4\u5EA6\u4E4B\u5185\u7684\u53D8\u5316\uFF0C\u5982\u679C X \u8F74\u4E3A\u65F6\u95F4\uFF0C\u8FD9\u79CD\u6298\u7EBF\u56FE\u53C8\u79F0\u4E3A\u8D8B\u52BF\u56FE\u3002"),n.a.createElement("li",null,"\u67F1\u72B6\u56FE\uFF1A\u63CF\u8FF0\u7684\u662F\u5206\u7C7B\u6570\u636E\uFF0C\u5E38\u7528\u6765\u56DE\u7B54\u7684\u662F\u6BCF\u4E00\u4E2A\u5206\u7C7B\u4E2D\u300C\u6709\u591A\u5C11\uFF1F\u300D\u8FD9\u4E2A\u95EE\u9898\u3002"),n.a.createElement("li",null,"\u4EA4\u53C9\u8868\uFF1A\u662F\u4E00\u79CD\u77E9\u9635\u5F62\u5F0F\u7684\u8868\u683C\uFF0C\u62E5\u6709\u6700\u5F3A\u5927\u7684\u6570\u636E\u5206\u6790\u80FD\u529B\uFF0C\u53EF\u4EE5\u5C55\u793A\u65E0\u9650\u6307\u6807\u548C\u65E0\u9650\u7EF4\u5EA6\u95F4\u7684\u5173\u7CFB\u3002")))),n.a.createElement("h2",{id:"\u5982\u4F55\u4F7F\u7528"},n.a.createElement(g.AnchorLink,{to:"#\u5982\u4F55\u4F7F\u7528","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u5982\u4F55\u4F7F\u7528"),n.a.createElement("h3",{id:"\u5B89\u88C5"},n.a.createElement(g.AnchorLink,{to:"#\u5B89\u88C5","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u5B89\u88C5"),n.a.createElement("p",null,"chart-render \u4F9D\u8D56 ant design\uFF0C\u5355\u72EC\u4F7F\u7528\u4E0D\u8981\u5FD8\u8BB0\u5B89\u88C5\uFF5E"),n.a.createElement(z.a,{code:"$ npm install chart-render --save",lang:"bash"}),n.a.createElement("h3",{id:"\u4EE3\u7801\u6F14\u793A"},n.a.createElement(g.AnchorLink,{to:"#\u4EE3\u7801\u6F14\u793A","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u4EE3\u7801\u6F14\u793A")),n.a.createElement(ue.default,Pe.default["chart-render-demo"].previewerProps,n.a.createElement(Oe,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h2",{id:"api"},n.a.createElement(g.AnchorLink,{to:"#api","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"API"),n.a.createElement("h3",{id:"\u901A\u7528\u53C2\u6570"},n.a.createElement(g.AnchorLink,{to:"#\u901A\u7528\u53C2\u6570","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u901A\u7528\u53C2\u6570"),n.a.createElement("p",null,"\u6240\u6709\u7684\u56FE\u8868\u7EC4\u4EF6\u90FD\u6709\u4EE5\u4E0B 4 \u4E2A\u5165\u53C2\uFF08",n.a.createElement("strong",null,n.a.createElement("code",null,"data")," \u548C ",n.a.createElement("code",null,"meta")," \u662F\u5FC5\u4F20\u7684\u53C2\u6570"),"\uFF0C\u8BF7\u52A1\u5FC5\u6CE8\u610F\uFF09\uFF1A"),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u53C2\u6570"),n.a.createElement("th",null,"\u8BF4\u660E"),n.a.createElement("th",null,"\u7C7B\u578B"),n.a.createElement("th",null,"\u662F\u5426\u5FC5\u586B"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"style"),n.a.createElement("td",null,"\u6700\u5916\u5C42\u5BB9\u5668\u7684\u6837\u5F0F"),n.a.createElement("td",null,n.a.createElement("code",null,"React.CSSProperties")),n.a.createElement("td",null,"\u5426")),n.a.createElement("tr",null,n.a.createElement("td",null,"className"),n.a.createElement("td",null,"\u6700\u5916\u5C42\u5BB9\u5668\u7684\u7C7B\u540D"),n.a.createElement("td",null,n.a.createElement("code",null,"string")),n.a.createElement("td",null,"\u5426")),n.a.createElement("tr",null,n.a.createElement("td",null,"data"),n.a.createElement("td",null,"\u6570\u636E\u914D\u7F6E\u9879 ",n.a.createElement("code",null,"\u6CE81")),n.a.createElement("td",null,n.a.createElement("code",null,"IDataItem[]")),n.a.createElement("td",null,"\u662F")),n.a.createElement("tr",null,n.a.createElement("td",null,"meta"),n.a.createElement("td",null,"\u5143\u6570\u636E\u914D\u7F6E\u9879 ",n.a.createElement("code",null,"\u6CE82")),n.a.createElement("td",null,n.a.createElement("code",null,"IMetaItem[]")),n.a.createElement("td",null,"\u662F")))),n.a.createElement("h5",{id:"\u6CE8-1\uFF1A\u901A\u7528\u53C2\u6570---data-\u6570\u636E\u914D\u7F6E\u9879"},n.a.createElement(g.AnchorLink,{to:"#\u6CE8-1\uFF1A\u901A\u7528\u53C2\u6570---data-\u6570\u636E\u914D\u7F6E\u9879","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u6CE8 1\uFF1A\u901A\u7528\u53C2\u6570 - data \u6570\u636E\u914D\u7F6E\u9879"),n.a.createElement("p",null,"\u662F\u666E\u901A\u7684\u5BF9\u8C61\u6570\u7EC4\uFF0C\u5F62\u5982\uFF1A"),n.a.createElement(z.a,{code:`[
  { date: '20200101', pv: 100, uv: 50 },
  { date: '20200102', pv: 120, uv: 60 },
  { date: '20200103', pv: 140, uv: 70 },
  { date: '20200104', pv: 160, uv: 80 },
];`,lang:"js"}),n.a.createElement("h5",{id:"\u6CE8-2\uFF1A\u901A\u7528\u53C2\u6570---meta-\u5143\u6570\u636E\u914D\u7F6E\u9879"},n.a.createElement(g.AnchorLink,{to:"#\u6CE8-2\uFF1A\u901A\u7528\u53C2\u6570---meta-\u5143\u6570\u636E\u914D\u7F6E\u9879","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u6CE8 2\uFF1A\u901A\u7528\u53C2\u6570 - meta \u5143\u6570\u636E\u914D\u7F6E\u9879"),n.a.createElement("p",null,"\u7528\u6765\u63CF\u8FF0 data \u7684\u5404\u4E2A\u5B57\u6BB5\u7684\u4E1C\u897F\uFF0C\u5F62\u5982\uFF1A"),n.a.createElement(z.a,{code:`/**
 * id: \u5BF9\u5E94\u5355\u6761\u6570\u636E\u9879\u7684 key \u540D
 * name: \u5BF9\u5E94\u5355\u6761\u6570\u636E\u9879\u7684 key \u7684\u63CF\u8FF0
 * isDim: \u662F\u5426\u662F\u7EF4\u5EA6\uFF0C\`true\`-\u7EF4\u5EA6\uFF0C\`false\`-\u6307\u6807
 * isRate: \u662F\u5426\u662F\u767E\u5206\u6570\uFF0C\u4EC5\u9650\u6307\u6807\u4F7F\u7528\uFF0C\u542F\u7528\u540E\uFF0C\u6570\u503C \`0.5\` \u4F1A\u4EE5 \`50%\` \u6765\u8F93\u51FA\u6E32\u67D3
 */
[
  { id: 'date', name: '\u65E5\u671F', isDim: true, isRate: false },
  { id: 'pv', name: '\u8BBF\u95EE\u91CF', isDim: false, isRate: false },
  { id: 'uv', name: '\u8BBF\u5BA2\u6570', isDim: false, isRate: false },
];`,lang:"js"}),n.a.createElement("h3",{id:"line-\u6298\u7EBF\u56FE\u7684\u989D\u5916\u53C2\u6570"},n.a.createElement(g.AnchorLink,{to:"#line-\u6298\u7EBF\u56FE\u7684\u989D\u5916\u53C2\u6570","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Line \u6298\u7EBF\u56FE\u7684\u989D\u5916\u53C2\u6570"),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u53C2\u6570"),n.a.createElement("th",null,"\u8BF4\u660E"),n.a.createElement("th",null,"\u7C7B\u578B"),n.a.createElement("th",null,"\u9ED8\u8BA4\u503C"),n.a.createElement("th",null,"\u662F\u5426\u5FC5\u586B"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"withArea"),n.a.createElement("td",null,"\u662F\u5426\u4EE5\u9762\u79EF\u56FE\u5C55\u793A",n.a.createElement("br",null)," - \u6CE8\u610F\u9762\u79EF\u56FE\u9ED8\u8BA4\u5806\u53E0\u5C55\u793A\uFF0C\u5982\u4E0D\u9700\u8981\u53EF\u4EE5\u4F20\u5165 ",n.a.createElement("code",null,"isStack=","{","false","}")," \u8986\u76D6",n.a.createElement("br",null)," - \u5F00\u542F\u9762\u79EF\u56FE\u540E\u65B9\u53EF\u4F7F\u7528 ",n.a.createElement("code",null,"areaStyle")," ",n.a.createElement("code",null,"startOnZero")," ",n.a.createElement("code",null,"isPercent")," \u5C5E\u6027"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"false")),n.a.createElement("td",null,"\u5426")))),n.a.createElement("p",null,"\u5982\u679C\u4F60\u9700\u8981\u4FEE\u6539\u70B9\u3001\u7EBF\u7B49\u6837\u5F0F\uFF0C\u53EF\u4EE5\u53C2\u8003\u53C2\u6570\u8868\uFF1A",n.a.createElement(g.Link,{to:"https://charts.ant.design/zh-CN/demos/line?type=api"},"\u6298\u7EBF\u56FE\u53C2\u6570\u8868")," ",n.a.createElement(g.Link,{to:"https://charts.ant.design/zh-CN/demos/area?type=api"},"\u9762\u79EF\u56FE\u53C2\u6570\u8868"),"\uFF0C\u9664\u4E86 ",n.a.createElement("code",null,"yField"),"\u3001",n.a.createElement("code",null,"xField"),"\u3001",n.a.createElement("code",null,"seriesField")," \u4E09\u4E2A\u5B57\u6BB5\u4E0D\u505A\u900F\u4F20\uFF0C\u5176\u4ED6\u5B57\u6BB5\u5747\u505A\u900F\u4F20\u5904\u7406\u3002"),n.a.createElement("h3",{id:"column-\u67F1\u72B6\u56FE\u7684\u989D\u5916\u53C2\u6570"},n.a.createElement(g.AnchorLink,{to:"#column-\u67F1\u72B6\u56FE\u7684\u989D\u5916\u53C2\u6570","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Column \u67F1\u72B6\u56FE\u7684\u989D\u5916\u53C2\u6570"),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u53C2\u6570"),n.a.createElement("th",null,"\u8BF4\u660E"),n.a.createElement("th",null,"\u7C7B\u578B"),n.a.createElement("th",null,"\u9ED8\u8BA4\u503C"),n.a.createElement("th",null,"\u662F\u5426\u5FC5\u586B"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"inverted"),n.a.createElement("td",null,"\u662F\u5426\u4EE5\u6761\u5F62\u56FE\u5C55\u793A"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"false")),n.a.createElement("td",null,"\u5426")))),n.a.createElement("p",null,"\u5982\u679C\u4F60\u9700\u8981\u4FEE\u6539\u989C\u8272\u3001\u67F1\u7B49\u6837\u5F0F\uFF0C\u53EF\u4EE5\u53C2\u8003\u53C2\u6570\u8868\uFF1A",n.a.createElement(g.Link,{to:"https://charts.ant.design/zh-CN/demos/column?type=api"},"\u67F1\u72B6\u56FE\u53C2\u6570\u8868"),"\uFF0C\u9664\u4E86 ",n.a.createElement("code",null,"yField"),"\u3001",n.a.createElement("code",null,"xField"),"\u3001",n.a.createElement("code",null,"seriesField")," \u4E09\u4E2A\u5B57\u6BB5\u4E0D\u505A\u900F\u4F20\uFF0C\u5176\u4ED6\u5B57\u6BB5\u5747\u505A\u900F\u4F20\u5904\u7406\u3002"),n.a.createElement("h3",{id:"pivottable-\u4EA4\u53C9\u8868\u7684\u989D\u5916\u53C2\u6570"},n.a.createElement(g.AnchorLink,{to:"#pivottable-\u4EA4\u53C9\u8868\u7684\u989D\u5916\u53C2\u6570","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"PivotTable \u4EA4\u53C9\u8868\u7684\u989D\u5916\u53C2\u6570"),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u53C2\u6570"),n.a.createElement("th",null,"\u8BF4\u660E"),n.a.createElement("th",null,"\u7C7B\u578B"),n.a.createElement("th",null,"\u9ED8\u8BA4\u503C"),n.a.createElement("th",null,"\u662F\u5426\u5FC5\u586B"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"showSubtotal"),n.a.createElement("td",null,"\u662F\u5426\u5C55\u793A\u603B\u8BA1\u5C0F\u8BA1"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"true")),n.a.createElement("td",null,"\u5426")),n.a.createElement("tr",null,n.a.createElement("td",null,"subtotalText"),n.a.createElement("td",null,"\u603B\u8BA1\u5C0F\u8BA1\u7684\u6587\u6848"),n.a.createElement("td",null,n.a.createElement("code",null,"[string, string]")),n.a.createElement("td",null,n.a.createElement("code",null,"['\u603B\u8BA1', '\u5C0F\u8BA1']")),n.a.createElement("td",null,"\u5426")),n.a.createElement("tr",null,n.a.createElement("td",null,"indicatorSide"),n.a.createElement("td",null,"\u6307\u6807\u7684\u5C55\u793A\u4F4D\u7F6E"),n.a.createElement("td",null,n.a.createElement("code",null,"'left' | 'top'")),n.a.createElement("td",null,n.a.createElement("code",null,"'top'")),n.a.createElement("td",null,"\u5426")),n.a.createElement("tr",null,n.a.createElement("td",null,"size"),n.a.createElement("td",null,"\u8868\u683C\u5C3A\u5BF8"),n.a.createElement("td",null,n.a.createElement("code",null,"'small' | 'middle' | 'large'")),n.a.createElement("td",null,n.a.createElement("code",null,"'middle'")),n.a.createElement("td",null,"\u5426")),n.a.createElement("tr",null,n.a.createElement("td",null,"leftDimensionLength"),n.a.createElement("td",null,"\u5DE6\u4FA7\u7EF4\u5EA6\u653E\u591A\u5C11\u4E2A\uFF0C\u8D85\u51FA\u7684\u7EF4\u5EA6\u4F1A\u653E\u5230\u8868\u683C\u9876\u90E8"),n.a.createElement("td",null,n.a.createElement("code",null,"number")),n.a.createElement("td",null,"-"),n.a.createElement("td",null,"\u5426")),n.a.createElement("tr",null,n.a.createElement("td",null,"leftExpandable"),n.a.createElement("td",null,"\u5DE6\u4FA7\u7EF4\u5EA6\u5141\u8BB8\u5C55\u5F00/\u6536\u8D77"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"false")),n.a.createElement("td",null,"\u5426")),n.a.createElement("tr",null,n.a.createElement("td",null,"topExpandable"),n.a.createElement("td",null,"\u9876\u90E8\u7EF4\u5EA6\u5141\u8BB8\u5C55\u5F00/\u6536\u8D77"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"false")),n.a.createElement("td",null,"\u5426")),n.a.createElement("tr",null,n.a.createElement("td",null,"cellRender"),n.a.createElement("td",null,"\u5355\u5143\u683C\u81EA\u5B9A\u4E49\u6E32\u67D3\u51FD\u6570\uFF0C\u53EF\u89C1",n.a.createElement(g.AnchorLink,{to:"./demo/pivot-table#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%8D%95%E5%85%83%E6%A0%BC%E6%B8%B2%E6%9F%93"},"\u4EA4\u53C9\u8868\u6848\u4F8B - \u9AD8\u7EA7\u6848\u4F8B - \u81EA\u5B9A\u4E49\u5355\u5143\u683C\u6E32\u67D3")),n.a.createElement("td",null,n.a.createElement("code",null,"(value: any, dimRecord: IDataItem, indId: string ) => React.ReactNode")),n.a.createElement("td",null,"-"),n.a.createElement("td",null,"\u5426"))))))))},"80pN":function(Rn,un,e){"use strict";(function(x){/** @license React v16.14.0
* react-dom-test-utils.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var n=e("MgzW"),g=e("q1tI"),W=e("i8i4"),ue=e("QCnb");function z(a){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+a,u=1;u<arguments.length;u++)r+="&args[]="+encodeURIComponent(arguments[u]);return"Minified React error #"+a+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Pe=g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;Pe.hasOwnProperty("ReactCurrentDispatcher")||(Pe.ReactCurrentDispatcher={current:null}),Pe.hasOwnProperty("ReactCurrentBatchConfig")||(Pe.ReactCurrentBatchConfig={suspense:null});function Oe(a){var r=a,u=a;if(a.alternate)for(;r.return;)r=r.return;else{a=r;do r=a,(r.effectTag&1026)!=0&&(u=r.return),a=r.return;while(a)}return r.tag===3?u:null}function oe(a){if(Oe(a)!==a)throw Error(z(188))}function $n(a){var r=a.alternate;if(!r){if(r=Oe(a),r===null)throw Error(z(188));return r!==a?null:a}for(var u=a,v=r;;){var C=u.return;if(C===null)break;var B=C.alternate;if(B===null){if(v=C.return,v!==null){u=v;continue}break}if(C.child===B.child){for(B=C.child;B;){if(B===u)return oe(C),a;if(B===v)return oe(C),r;B=B.sibling}throw Error(z(188))}if(u.return!==v.return)u=C,v=B;else{for(var M=!1,$=C.child;$;){if($===u){M=!0,u=C,v=B;break}if($===v){M=!0,v=C,u=B;break}$=$.sibling}if(!M){for($=B.child;$;){if($===u){M=!0,u=B,v=C;break}if($===v){M=!0,v=B,u=C;break}$=$.sibling}if(!M)throw Error(z(189))}}if(u.alternate!==v)throw Error(z(190))}if(u.tag!==3)throw Error(z(188));return u.stateNode.current===u?a:r}function Se(){return!0}function Fn(){return!1}function jn(a,r,u,v){this.dispatchConfig=a,this._targetInst=r,this.nativeEvent=u,a=this.constructor.Interface;for(var C in a)a.hasOwnProperty(C)&&((r=a[C])?this[C]=r(u):C==="target"?this.target=v:this[C]=u[C]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Se:Fn,this.isPropagationStopped=Fn,this}n(jn.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Se)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Se)},persist:function(){this.isPersistent=Se},isPersistent:Fn,destructor:function(){var a=this.constructor.Interface,r;for(r in a)this[r]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=Fn,this._dispatchInstances=this._dispatchListeners=null}}),jn.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null},jn.extend=function(a){function r(){}function u(){return v.apply(this,arguments)}var v=this;r.prototype=v.prototype;var C=new r;return n(C,u.prototype),u.prototype=C,u.prototype.constructor=u,u.Interface=n({},v.Interface,a),u.extend=v.extend,$e(u),u},$e(jn);function pn(a,r,u,v){if(this.eventPool.length){var C=this.eventPool.pop();return this.call(C,a,r,u,v),C}return new this(a,r,u,v)}function rn(a){if(!(a instanceof this))throw Error(z(279));a.destructor(),10>this.eventPool.length&&this.eventPool.push(a)}function $e(a){a.eventPool=[],a.getPooled=pn,a.release=rn}var Nn=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined");function Dn(a,r){var u={};return u[a.toLowerCase()]=r.toLowerCase(),u["Webkit"+a]="webkit"+r,u["Moz"+a]="moz"+r,u}var hn={animationend:Dn("Animation","AnimationEnd"),animationiteration:Dn("Animation","AnimationIteration"),animationstart:Dn("Animation","AnimationStart"),transitionend:Dn("Transition","TransitionEnd")},Ae={},nt={};Nn&&(nt=document.createElement("div").style,"AnimationEvent"in window||(delete hn.animationend.animation,delete hn.animationiteration.animation,delete hn.animationstart.animation),"TransitionEvent"in window||delete hn.transitionend.transition);function wn(a){if(Ae[a])return Ae[a];if(!hn[a])return a;var r=hn[a],u;for(u in r)if(r.hasOwnProperty(u)&&u in nt)return Ae[a]=r[u];return a}var tt=wn("animationend"),dt=wn("animationiteration"),at=wn("animationstart"),ct=wn("transitionend"),Bn=null;function rt(a){if(Bn===null)try{var r=("require"+Math.random()).slice(0,7);Bn=(x&&x[r])("timers").setImmediate}catch(u){Bn=function(v){var C=new MessageChannel;C.port1.onmessage=v,C.port2.postMessage(void 0)}}return Bn(a)}var Vn=W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,mt=Vn[11],Mn=Vn[12],Kn=W.unstable_batchedUpdates,zn=Pe.IsSomeRendererActing,Jn=typeof ue.unstable_flushAllWithoutAsserting=="function",Wn=ue.unstable_flushAllWithoutAsserting||function(){for(var a=!1;mt();)a=!0;return a};function st(a){try{Wn(),rt(function(){Wn()?st(a):a()})}catch(r){a(r)}}var vn=0,A=!1,T=W.findDOMNode,D=W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,m=D[0],i=D[4],h=D[5],b=D[6],E=D[7],o=D[8],p=D[9],l=D[10];function N(){}function w(a,r){if(!a)return[];if(a=$n(a),!a)return[];for(var u=a,v=[];;){if(u.tag===5||u.tag===6||u.tag===1||u.tag===0){var C=u.stateNode;r(C)&&v.push(C)}if(u.child)u.child.return=u,u=u.child;else{if(u===a)return v;for(;!u.sibling;){if(!u.return||u.return===a)return v;u=u.return}u.sibling.return=u.return,u=u.sibling}}}function O(a,r){if(a&&!a._reactInternalFiber){var u=""+a;throw a=Array.isArray(a)?"an array":a&&a.nodeType===1&&a.tagName?"a DOM node":u==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":u,Error(z(286,r,a))}}var c={renderIntoDocument:function(a){var r=document.createElement("div");return W.render(a,r)},isElement:function(a){return g.isValidElement(a)},isElementOfType:function(a,r){return g.isValidElement(a)&&a.type===r},isDOMComponent:function(a){return!(!a||a.nodeType!==1||!a.tagName)},isDOMComponentElement:function(a){return!!(a&&g.isValidElement(a)&&a.tagName)},isCompositeComponent:function(a){return c.isDOMComponent(a)?!1:a!=null&&typeof a.render=="function"&&typeof a.setState=="function"},isCompositeComponentWithType:function(a,r){return c.isCompositeComponent(a)?a._reactInternalFiber.type===r:!1},findAllInRenderedTree:function(a,r){return O(a,"findAllInRenderedTree"),a?w(a._reactInternalFiber,r):[]},scryRenderedDOMComponentsWithClass:function(a,r){return O(a,"scryRenderedDOMComponentsWithClass"),c.findAllInRenderedTree(a,function(u){if(c.isDOMComponent(u)){var v=u.className;typeof v!="string"&&(v=u.getAttribute("class")||"");var C=v.split(/\s+/);if(!Array.isArray(r)){if(r===void 0)throw Error(z(11));r=r.split(/\s+/)}return r.every(function(B){return C.indexOf(B)!==-1})}return!1})},findRenderedDOMComponentWithClass:function(a,r){if(O(a,"findRenderedDOMComponentWithClass"),a=c.scryRenderedDOMComponentsWithClass(a,r),a.length!==1)throw Error("Did not find exactly one match (found: "+a.length+") for class:"+r);return a[0]},scryRenderedDOMComponentsWithTag:function(a,r){return O(a,"scryRenderedDOMComponentsWithTag"),c.findAllInRenderedTree(a,function(u){return c.isDOMComponent(u)&&u.tagName.toUpperCase()===r.toUpperCase()})},findRenderedDOMComponentWithTag:function(a,r){if(O(a,"findRenderedDOMComponentWithTag"),a=c.scryRenderedDOMComponentsWithTag(a,r),a.length!==1)throw Error("Did not find exactly one match (found: "+a.length+") for tag:"+r);return a[0]},scryRenderedComponentsWithType:function(a,r){return O(a,"scryRenderedComponentsWithType"),c.findAllInRenderedTree(a,function(u){return c.isCompositeComponentWithType(u,r)})},findRenderedComponentWithType:function(a,r){if(O(a,"findRenderedComponentWithType"),a=c.scryRenderedComponentsWithType(a,r),a.length!==1)throw Error("Did not find exactly one match (found: "+a.length+") for componentType:"+r);return a[0]},mockComponent:function(a,r){return r=r||a.mockTagName||"div",a.prototype.render.mockImplementation(function(){return g.createElement(r,null,this.props.children)}),this},nativeTouchData:function(a,r){return{touches:[{pageX:a,pageY:r}]}},Simulate:null,SimulateNative:{},act:function(a){function r(){vn--,zn.current=u,Mn.current=v}A===!1&&(A=!0,console.error("act(...) is not supported in production builds of React, and might not behave as expected.")),vn++;var u=zn.current,v=Mn.current;zn.current=!0,Mn.current=!0;try{var C=Kn(a)}catch(B){throw r(),B}if(C!==null&&typeof C=="object"&&typeof C.then=="function")return{then:function(B,M){C.then(function(){1<vn||Jn===!0&&u===!0?(r(),B()):st(function($){r(),$?M($):B()})},function($){r(),M($)})}};try{vn!==1||Jn!==!1&&u!==!1||Wn(),r()}catch(B){throw r(),B}return{then:function(B){B()}}}};function S(a){return function(r,u){if(g.isValidElement(r))throw Error(z(228));if(c.isCompositeComponent(r))throw Error(z(229));var v=i[a],C=new N;C.target=r,C.type=a.toLowerCase();var B=m(r),M=new jn(v,B,C,r);M.persist(),n(M,u),v.phasedRegistrationNames?h(M):b(M),W.unstable_batchedUpdates(function(){E(r),l(M)}),o()}}c.Simulate={};for(var f in i)c.Simulate[f]=S(f);function t(a,r){return function(u,v){var C=new N(a);n(C,v),c.isDOMComponent(u)?(u=T(u),C.target=u,p(r,1,document,C)):u.tagName&&(C.target=u,p(r,1,document,C))}}[["abort","abort"],[tt,"animationEnd"],[dt,"animationIteration"],[at,"animationStart"],["blur","blur"],["canplaythrough","canPlayThrough"],["canplay","canPlay"],["cancel","cancel"],["change","change"],["click","click"],["close","close"],["compositionend","compositionEnd"],["compositionstart","compositionStart"],["compositionupdate","compositionUpdate"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["dragstart","dragStart"],["drag","drag"],["drop","drop"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],["ended","ended"],["error","error"],["focus","focus"],["input","input"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["loadstart","loadStart"],["loadstart","loadStart"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["mousedown","mouseDown"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["playing","playing"],["progress","progress"],["ratechange","rateChange"],["scroll","scroll"],["seeked","seeked"],["seeking","seeking"],["selectionchange","selectionChange"],["stalled","stalled"],["suspend","suspend"],["textInput","textInput"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchmove","touchMove"],["touchstart","touchStart"],[ct,"transitionEnd"],["volumechange","volumeChange"],["waiting","waiting"],["wheel","wheel"]].forEach(function(a){var r=a[1];c.SimulateNative[r]=t(r,a[0])}),x.exports=c.default||c}).call(this,e("hOG+")(Rn))},JjdP:function(Rn,un,e){"use strict";e.r(un);var x=e("9og8"),n=e("WmNS"),g=e.n(n),W=e("LtsZ"),ue=`import React, { useRef } from 'react';
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

export default Demo;`,z=`import { get, set, cloneDeep } from 'lodash-es';

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

export default Demo;`,Fn=`import React, { Component } from 'react';
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
}`,rn=`import { Select } from 'antd';
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

export { valueMap, keySuggestions };`,at=`.markdown p {
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

export default Demo;`,zn=`import React from 'react';
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

export default Demo;`,Jn=`.fr-generator-playground {
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

export default Demo;`,vn=un.default={"guide-card":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(g.a.mark(function D(){return g.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"oLxE"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:ue}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"card-render":{version:"0.1.2"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"0.x"}},identifier:"guide-card"}},"chart-render-demo":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(g.a.mark(function D(){var m,i,h,b,E,o,p;return g.a.wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return o=function(O,c){if(!c&&O&&O.__esModule)return O;if(O===null||typeof O!="object"&&typeof O!="function")return{default:O};var S=E(c);if(S&&S.has(O))return S.get(O);var f={},t=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in O)if(a!=="default"&&Object.prototype.hasOwnProperty.call(O,a)){var r=t?Object.getOwnPropertyDescriptor(O,a):null;r&&(r.get||r.set)?Object.defineProperty(f,a,r):f[a]=O[a]}return f.default=O,S&&S.set(O,f),f},E=function(O){if(typeof WeakMap!="function")return null;var c=new WeakMap,S=new WeakMap;return(E=function(t){return t?S:c})(O)},m=e("K+nK"),N.t0=m,N.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return N.t1=N.sent,i=(0,N.t0)(N.t1),N.t2=o,N.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return N.t3=N.sent,h=(0,N.t2)(N.t3),N.next=15,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 15:return b=N.sent,p=function(){var O=(0,h.useState)("Line"),c=(0,i.default)(O,2),S=c[0],f=c[1],t={Line:b.Line,Column:b.Column,PivotTable:b.PivotTable}[S];return h.default.createElement("div",null,h.default.createElement("div",{style:{marginBottom:10}},h.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return f("Line")}},"\u6298\u7EBF\u56FE"),h.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return f("Column")}},"\u67F1\u72B6\u56FE"),h.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return f("PivotTable")}},"\u4EA4\u53C9\u8868")),h.default.createElement(t,{meta:[{id:"date",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF",isDim:!1},{id:"uv",name:"\u8BBF\u5BA2\u6570",isDim:!1}],data:[{date:"20200101",pv:100,uv:50},{date:"20200102",pv:120,uv:60},{date:"20200103",pv:140,uv:70},{date:"20200104",pv:160,uv:80}]}))},N.abrupt("return",p);case 18:case"end":return N.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"chart-render-demo"}},"column-demo":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(g.a.mark(function D(){var m,i,h,b;return g.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return m=e("K+nK"),o.t0=m,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=o.sent,b=function(){return i.default.createElement(h.Column,{meta:[{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{pv:50,uv:20}]})},o.abrupt("return",b);case 11:case"end":return o.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[{ pv: 50, uv: 20 }]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo"}},"column-demo-1":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(g.a.mark(function D(){var m,i,h,b;return g.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return m=e("K+nK"),o.t0=m,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=o.sent,b=function(){return i.default.createElement(h.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},o.abrupt("return",b);case 11:case"end":return o.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-1"}},"column-demo-2":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(g.a.mark(function D(){var m,i,h,b;return g.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return m=e("K+nK"),o.t0=m,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=o.sent,b=function(){return i.default.createElement(h.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},o.abrupt("return",b);case 11:case"end":return o.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-2"}},"column-demo-3":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(g.a.mark(function D(){var m,i,h,b;return g.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return m=e("K+nK"),o.t0=m,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=o.sent,b=function(){return i.default.createElement(h.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},o.abrupt("return",b);case 11:case"end":return o.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-3"}},"column-demo-4":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(g.a.mark(function D(){var m,i,h,b;return g.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return m=e("K+nK"),o.t0=m,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=o.sent,b=function(){return i.default.createElement(h.Column,{inverted:!0,label:{position:"middle",layout:[{type:"interval-adjust-position"},{type:"interval-hide-overlap"},{type:"adjust-color"}]},meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},o.abrupt("return",b);case 11:case"end":return o.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-4"}},"line-demo":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(g.a.mark(function D(){var m,i,h,b;return g.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return m=e("K+nK"),o.t0=m,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=o.sent,b=function(){return i.default.createElement(h.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},o.abrupt("return",b);case 11:case"end":return o.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo"}},"line-demo-1":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(g.a.mark(function D(){var m,i,h,b;return g.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return m=e("K+nK"),o.t0=m,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=o.sent,b=function(){return i.default.createElement(h.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},o.abrupt("return",b);case 11:case"end":return o.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-1"}},"line-demo-2":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(g.a.mark(function D(){var m,i,h,b;return g.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return m=e("K+nK"),o.t0=m,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=o.sent,b=function(){return i.default.createElement(h.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"},{id:"pv",name:"\u8BBF\u95EE\u91CF"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20,pv:120},{ds:"2020-12-31",page:"\u9996\u9875",uv:120,pv:1120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21,pv:121},{ds:"2021-01-01",page:"\u9996\u9875",uv:121,pv:1121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15,pv:115},{ds:"2021-01-02",page:"\u9996\u9875",uv:115,pv:1115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40,pv:140},{ds:"2021-01-03",page:"\u9996\u9875",uv:140,pv:1140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31,pv:131},{ds:"2021-01-04",page:"\u9996\u9875",uv:131,pv:1131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32,pv:132},{ds:"2021-01-05",page:"\u9996\u9875",uv:132,pv:1132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30,pv:130},{ds:"2021-01-06",page:"\u9996\u9875",uv:130,pv:1130}]})},o.abrupt("return",b);case 11:case"end":return o.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-2"}},"line-demo-3":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(g.a.mark(function D(){var m,i,h,b;return g.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return m=e("K+nK"),o.t0=m,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=o.sent,b=function(){return i.default.createElement(h.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},o.abrupt("return",b);case 11:case"end":return o.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-3"}},"line-demo-4":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(g.a.mark(function D(){var m,i,h,b;return g.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return m=e("K+nK"),o.t0=m,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=o.sent,b=function(){return i.default.createElement(h.Line,{withArea:!0,isStack:!0,isPercent:!0,meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},o.abrupt("return",b);case 11:case"end":return o.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-4"}},"pivot-table-demo":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(g.a.mark(function D(){var m,i,h,b;return g.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return m=e("K+nK"),o.t0=m,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=o.sent,b=function(){return i.default.createElement(h.PivotTable,{style:{maxHeight:400,overflow:"auto"},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},o.abrupt("return",b);case 11:case"end":return o.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo"}},"pivot-table-demo-1":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(g.a.mark(function D(){var m,i,h,b;return g.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return m=e("K+nK"),o.t0=m,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return h=o.sent,b=function(){return i.default.createElement(h.PivotTable,{style:{maxHeight:400,overflow:"auto"},cellRender:function(N,w,O){return i.default.createElement("div",null,i.default.createElement("p",null,"\u53C2\u6570\u8868\uFF1A"),i.default.createElement("p",{style:{color:["red","orange","yellow","green","blue"][Object.keys(w).length]}},N),i.default.createElement("p",null,JSON.stringify(w)),i.default.createElement("p",null,JSON.stringify(O)))},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},o.abrupt("return",b);case 11:case"end":return o.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-1"}},"pivot-table-demo-2":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(g.a.mark(function D(){var m,i,h,b,E,o,p;return g.a.wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return o=function(O,c){if(!c&&O&&O.__esModule)return O;if(O===null||typeof O!="object"&&typeof O!="function")return{default:O};var S=E(c);if(S&&S.has(O))return S.get(O);var f={},t=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in O)if(a!=="default"&&Object.prototype.hasOwnProperty.call(O,a)){var r=t?Object.getOwnPropertyDescriptor(O,a):null;r&&(r.get||r.set)?Object.defineProperty(f,a,r):f[a]=O[a]}return f.default=O,S&&S.set(O,f),f},E=function(O){if(typeof WeakMap!="function")return null;var c=new WeakMap,S=new WeakMap;return(E=function(t){return t?S:c})(O)},m=e("K+nK"),N.t0=m,N.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return N.t1=N.sent,i=(0,N.t0)(N.t1),N.t2=o,N.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return N.t3=N.sent,h=(0,N.t2)(N.t3),N.next=15,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 15:return b=N.sent,p=function(){var O=(0,h.useState)(!1),c=(0,i.default)(O,2),S=c[0],f=c[1];return h.default.createElement(h.default.Fragment,null,h.default.createElement("label",null,"\u53EF\u5C55\u5F00/\u6536\u7F29\uFF1A",h.default.createElement("input",{type:"checkbox",value:S,onChange:function(){return f(!S)}})),h.default.createElement(b.PivotTable,{leftExpandable:S,showSubtotal:!1,meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]}))},N.abrupt("return",p);case 18:case"end":return N.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-2"}},"OldSchemaTransformer-demo":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(g.a.mark(function D(){var m,i,h,b,E,o,p,l,N,w,O,c,S;return g.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return N=function(r,u){if(!u&&r&&r.__esModule)return r;if(r===null||typeof r!="object"&&typeof r!="function")return{default:r};var v=l(u);if(v&&v.has(r))return v.get(r);var C={},B=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var M in r)if(M!=="default"&&Object.prototype.hasOwnProperty.call(r,M)){var $=B?Object.getOwnPropertyDescriptor(r,M):null;$&&($.get||$.set)?Object.defineProperty(C,M,$):C[M]=r[M]}return C.default=r,v&&v.set(r,C),C},l=function(r){if(typeof WeakMap!="function")return null;var u=new WeakMap,v=new WeakMap;return(l=function(B){return B?v:u})(r)},m=e("K+nK"),t.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return t.t0=m,t.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return t.t1=t.sent,i=(0,t.t0)(t.t1),t.t2=m,t.next=13,Promise.resolve().then(e.bind(null,"tJVT"));case 13:return t.t3=t.sent,h=(0,t.t2)(t.t3),t.next=17,Promise.all([e.e(3),e.e(19)]).then(e.t.bind(null,"cUip",7));case 17:return t.t4=m,t.next=20,Promise.all([e.e(0),e.e(8),e.e(18),e.e(20)]).then(e.t.bind(null,"iJl9",7));case 20:return t.t5=t.sent,b=(0,t.t4)(t.t5),t.t6=N,t.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return t.t7=t.sent,E=(0,t.t6)(t.t7),t.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 29:return o=t.sent,t.next=32,Promise.all([e.e(22),e.e(25)]).then(e.bind(null,"7t+U"));case 32:return p=t.sent,w=b.default.TextArea,O={type:"object",properties:{number:{title:"\u6570\u5B57\u8F93\u5165\u6846",type:"number","ui:disabled":!0},checkbox:{title:"\u662F\u5426\u9009\u62E9",type:"boolean","ui:widget":"switch"}},required:["number"]},c=function(){var r=(0,E.useState)(JSON.stringify(O)),u=(0,h.default)(r,2),v=u[0],C=u[1],B=(0,E.useState)({}),M=(0,h.default)(B,2),$=M[0],Ke=M[1],Xe=function(){try{var An=(0,p.updateSchemaToNewVersion)(JSON.parse(v));Ke(An)}catch(Gn){console.log(Gn)}},sn=function(An){C(An.target.value)},Pn=function(){C(JSON.stringify(JSON.parse(v),null,2))};return E.default.createElement("div",null,E.default.createElement("div",null,"\u586B\u5165\u65E7\u7248schema\uFF1A"),E.default.createElement(w,{style:{minHeight:400,marginTop:12,marginBottom:12},value:v,onChange:sn}),E.default.createElement(i.default,{style:{marginRight:12},onClick:Pn},"\u683C\u5F0F\u5316\u65E7schema"),E.default.createElement(i.default,{type:"primary",onClick:Xe},"\u751F\u6210\u65B0\u7248schema"),E.default.createElement(w,{style:{minHeight:400,marginTop:12},value:JSON.stringify($,null,2)}))},S=c,t.abrupt("return",S);case 38:case"end":return t.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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

export default Translator;`},"packages/form-render/src/utils.js":{import:"../../packages/form-render/src/utils.js",content:z}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"},"lodash-es":{version:"4.17.21"}},identifier:"OldSchemaTransformer-demo"}},"form-render-demo":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(g.a.mark(function D(){var m,i,h,b,E,o,p,l,N,w;return g.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return p=function(f,t){if(!t&&f&&f.__esModule)return f;if(f===null||typeof f!="object"&&typeof f!="function")return{default:f};var a=o(t);if(a&&a.has(f))return a.get(f);var r={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in f)if(v!=="default"&&Object.prototype.hasOwnProperty.call(f,v)){var C=u?Object.getOwnPropertyDescriptor(f,v):null;C&&(C.get||C.set)?Object.defineProperty(r,v,C):r[v]=f[v]}return r.default=f,a&&a.set(f,r),r},o=function(f){if(typeof WeakMap!="function")return null;var t=new WeakMap,a=new WeakMap;return(o=function(u){return u?a:t})(f)},m=e("K+nK"),c.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return c.t0=m,c.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return c.t1=c.sent,i=(0,c.t0)(c.t1),c.t2=m,c.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return c.t3=c.sent,h=(0,c.t2)(c.t3),c.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 17:return b=c.sent,c.t4=p,c.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 21:return c.t5=c.sent,E=(0,c.t4)(c.t5),l={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},N=function(){var f=(0,E.useForm)(),t=function(r,u){console.log("formData:",r,"errors",u)};return h.default.createElement("div",null,h.default.createElement(E.default,{form:f,schema:l,onFinish:t}),h.default.createElement(i.default,{type:"primary",onClick:f.submit},"\u63D0\u4EA4"))},w=N,c.abrupt("return",w);case 27:case"end":return c.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo"}},"form-render-demo-1":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(g.a.mark(function D(){var m,i,h,b,E,o,p,l,N,w,O,c,S,f;return g.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return O=function(u,v){if(!v&&u&&u.__esModule)return u;if(u===null||typeof u!="object"&&typeof u!="function")return{default:u};var C=w(v);if(C&&C.has(u))return C.get(u);var B={},M=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var $ in u)if($!=="default"&&Object.prototype.hasOwnProperty.call(u,$)){var Ke=M?Object.getOwnPropertyDescriptor(u,$):null;Ke&&(Ke.get||Ke.set)?Object.defineProperty(B,$,Ke):B[$]=u[$]}return B.default=u,C&&C.set(u,B),B},w=function(u){if(typeof WeakMap!="function")return null;var v=new WeakMap,C=new WeakMap;return(w=function(M){return M?C:v})(u)},m=e("K+nK"),a.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return a.t0=m,a.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return a.t1=a.sent,i=(0,a.t0)(a.t1),a.t2=m,a.next=13,e.e(86).then(e.bind(null,"fWQN"));case 13:return a.t3=a.sent,h=(0,a.t2)(a.t3),a.t4=m,a.next=18,e.e(87).then(e.bind(null,"mtLc"));case 18:return a.t5=a.sent,b=(0,a.t4)(a.t5),a.t6=m,a.next=23,e.e(78).then(e.bind(null,"yKVA"));case 23:return a.t7=a.sent,E=(0,a.t6)(a.t7),a.t8=m,a.next=28,e.e(77).then(e.bind(null,"879j"));case 28:return a.t9=a.sent,o=(0,a.t8)(a.t9),a.t10=m,a.next=33,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 33:return a.t11=a.sent,p=(0,a.t10)(a.t11),a.next=37,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 37:return l=a.sent,a.t12=O,a.next=41,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 41:return a.t13=a.sent,N=(0,a.t12)(a.t13),c={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},S=function(r){(0,E.default)(v,r);var u=(0,o.default)(v);function v(){var C;(0,h.default)(this,v);for(var B=arguments.length,M=new Array(B),$=0;$<B;$++)M[$]=arguments[$];return C=u.call.apply(u,[this].concat(M)),C.onFinish=function(Ke,Xe){console.log("formData:",Ke,"errors",Xe)},C}return(0,b.default)(v,[{key:"render",value:function(){var B=this.props.form;return p.default.createElement("div",null,p.default.createElement(N.default,{form:B,schema:c,onFinish:this.onFinish}),p.default.createElement(i.default,{type:"primary",onClick:B.submit},"\u63D0\u4EA4"))}}]),v}(p.default.Component),f=(0,N.connectForm)(S),a.abrupt("return",f);case 47:case"end":return a.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default connectForm(Demo);`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo-1"}},"form-render-demo-2":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(g.a.mark(function D(){var m,i,h,b,E,o,p,l,N,w;return g.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return p=function(f,t){if(!t&&f&&f.__esModule)return f;if(f===null||typeof f!="object"&&typeof f!="function")return{default:f};var a=o(t);if(a&&a.has(f))return a.get(f);var r={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in f)if(v!=="default"&&Object.prototype.hasOwnProperty.call(f,v)){var C=u?Object.getOwnPropertyDescriptor(f,v):null;C&&(C.get||C.set)?Object.defineProperty(r,v,C):r[v]=f[v]}return r.default=f,a&&a.set(f,r),r},o=function(f){if(typeof WeakMap!="function")return null;var t=new WeakMap,a=new WeakMap;return(o=function(u){return u?a:t})(f)},m=e("K+nK"),c.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return c.t0=m,c.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return c.t1=c.sent,i=(0,c.t0)(c.t1),c.t2=m,c.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return c.t3=c.sent,h=(0,c.t2)(c.t3),c.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 17:return b=c.sent,c.t4=p,c.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 21:return c.t5=c.sent,E=(0,c.t4)(c.t5),l={displayType:"row",labelWidth:60,type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F",type:"range",format:"date"},showSetting:{title:"\u662F\u5426\u5C55\u793A\u7F51\u5740",type:"boolean"},siteUrl:{title:"\u7F51\u5740",type:"string",placeholder:"\u6B64\u5904\u5FC5\u586B",hidden:"{{formData.showSetting !== true}}",required:!0,props:{addonBefore:"https://",addonAfter:".com"}}}},N=function(){var f=(0,E.useForm)(),t=function(r,u){u.length>0?alert("errors:"+JSON.stringify(u)):alert("formData:"+JSON.stringify(r,null,2))};return h.default.createElement("div",null,h.default.createElement(E.default,{form:f,schema:l,onFinish:t}),h.default.createElement(i.default,{type:"primary",onClick:f.submit},"\u63D0\u4EA4"))},w=N,c.abrupt("return",w);case 27:case"end":return c.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-demo-2"}},"display-demo":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(g.a.mark(function D(){var m,i,h,b,E;return g.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return m=e("K+nK"),p.t0=m,p.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return p.t1=p.sent,i=(0,p.t0)(p.t1),p.t2=m,p.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return p.t3=p.sent,h=(0,p.t2)(p.t3),b=function(N){return{type:"object",displayType:N,properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},objectName:{title:"\u5BF9\u8C61",bind:"obj",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},E=function(){return i.default.createElement("div",null,i.default.createElement("h2",null,"display: row"),i.default.createElement(h.default,{schema:b("row")}),i.default.createElement("h2",null,"display: column"),i.default.createElement(h.default,{schema:b("column")}))},p.abrupt("return",E);case 14:case"end":return p.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`},"demo/display.js":{import:"../demo/display",content:Pe}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo"}},"display-demo-1":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(g.a.mark(function D(){var m,i,h,b,E;return g.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return m=e("K+nK"),p.t0=m,p.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return p.t1=p.sent,i=(0,p.t0)(p.t1),p.t2=m,p.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return p.t3=p.sent,h=(0,p.t2)(p.t3),b={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0},check:{title:"box",type:"boolean",default:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},E=function(){return i.default.createElement(h.default,{readOnly:!0,schema:b})},p.abrupt("return",E);case 14:case"end":return p.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form readOnly schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:Pe}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-1"}},"display-demo-2":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(g.a.mark(function D(){var m,i,h,b,E;return g.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return m=e("K+nK"),p.t0=m,p.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return p.t1=p.sent,i=(0,p.t0)(p.t1),p.t2=m,p.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return p.t3=p.sent,h=(0,p.t2)(p.t3),b={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0,width:"50%"},check:{title:"box",type:"boolean",default:!0,width:"50%",labelWidth:6},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},E=function(){return i.default.createElement(h.default,{labelWidth:"200",schema:b})},p.abrupt("return",E);case 14:case"end":return p.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form labelWidth="200" schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:Pe}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-2"}},"display-demo-3":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(g.a.mark(function D(){var m,i,h,b,E,o;return g.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return m=e("K+nK"),l.t0=m,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,i=(0,l.t0)(l.t1),l.t2=m,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,h=(0,l.t2)(l.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},E=function(){return i.default.createElement(h.default,{schema:b})},o=E,l.abrupt("return",o);case 15:case"end":return l.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Pe}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-3"}},"display-demo-4":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(g.a.mark(function D(){var m,i,h,b,E,o;return g.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return m=e("K+nK"),l.t0=m,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,i=(0,l.t0)(l.t1),l.t2=m,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,h=(0,l.t2)(l.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},E=function(){return i.default.createElement(h.default,{schema:b})},o=E,l.abrupt("return",o);case 15:case"end":return l.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Pe}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-4"}},"display-demo-5":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(g.a.mark(function D(){var m,i,h,b,E,o;return g.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return m=e("K+nK"),l.t0=m,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,i=(0,l.t0)(l.t1),l.t2=m,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,h=(0,l.t2)(l.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},E=function(){return i.default.createElement(h.default,{schema:b})},o=E,l.abrupt("return",o);case 15:case"end":return l.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Pe}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-5"}},"display-demo-6":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(g.a.mark(function D(){var m,i,h,b,E,o;return g.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return m=e("K+nK"),l.t0=m,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,i=(0,l.t0)(l.t1),l.t2=m,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,h=(0,l.t2)(l.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",props:{hideMove:!0},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},E=function(){return i.default.createElement(h.default,{schema:b})},o=E,l.abrupt("return",o);case 15:case"end":return l.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Pe}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-6"}},"form-methods-demo":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(g.a.mark(function D(){var m,i,h,b,E,o,p,l,N,w,O,c,S;return g.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return O=function(r,u){if(!u&&r&&r.__esModule)return r;if(r===null||typeof r!="object"&&typeof r!="function")return{default:r};var v=w(u);if(v&&v.has(r))return v.get(r);var C={},B=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var M in r)if(M!=="default"&&Object.prototype.hasOwnProperty.call(r,M)){var $=B?Object.getOwnPropertyDescriptor(r,M):null;$&&($.get||$.set)?Object.defineProperty(C,M,$):C[M]=r[M]}return C.default=r,v&&v.set(r,C),C},w=function(r){if(typeof WeakMap!="function")return null;var u=new WeakMap,v=new WeakMap;return(w=function(B){return B?v:u})(r)},m=e("K+nK"),t.next=5,e.e(23).then(e.t.bind(null,"lfLe",7));case 5:return t.t0=m,t.next=8,e.e(24).then(e.t.bind(null,"Cp9S",7));case 8:return t.t1=t.sent,i=(0,t.t0)(t.t1),t.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return t.t2=m,t.next=15,e.e(8).then(e.t.bind(null,"4IMT",7));case 15:return t.t3=t.sent,h=(0,t.t2)(t.t3),t.next=19,e.e(15).then(e.t.bind(null,"tL+A",7));case 19:return t.t4=m,t.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return t.t5=t.sent,b=(0,t.t4)(t.t5),t.t6=m,t.next=27,Promise.resolve().then(e.bind(null,"tJVT"));case 27:return t.t7=t.sent,E=(0,t.t6)(t.t7),t.t8=O,t.next=32,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 32:return t.t9=t.sent,o=(0,t.t8)(t.t9),t.next=36,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 36:return p=t.sent,t.t10=O,t.next=40,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 40:return t.t11=t.sent,l=(0,t.t10)(t.t11),t.next=44,e.e(16).then(e.bind(null,"OH0R"));case 44:return N=t.sent,c=function(){var r=(0,l.useForm)(),u=(0,o.useState)({}),v=(0,E.default)(u,2),C=v[0],B=v[1],M=function(){(0,N.fakeApi)("xxx/getForm").then(function(Xe){r.setValues({input1:"hello world",select1:"c"})})};(0,o.useEffect)(function(){(0,N.delay)(1e3).then(function(Ke){B({type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}})})},[]);var $=function(Xe,sn){sn.length>0?b.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(sn.map(function(Pn){return Pn.name}))):(0,N.fakeApi)("xxx/submit",Xe).then(function(Pn){return b.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})};return o.default.createElement("div",{style:{width:"400px"}},o.default.createElement(l.default,{form:r,schema:C,onFinish:$}),o.default.createElement(i.default,null,o.default.createElement(h.default,{onClick:M},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),o.default.createElement(h.default,{type:"primary",onClick:r.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},S=c,t.abrupt("return",S);case 48:case"end":return t.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Oe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo"}},"form-methods-demo-1":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(g.a.mark(function D(){var m,i,h,b,E,o,p,l,N,w,O,c,S;return g.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return w=function(r,u){if(!u&&r&&r.__esModule)return r;if(r===null||typeof r!="object"&&typeof r!="function")return{default:r};var v=N(u);if(v&&v.has(r))return v.get(r);var C={},B=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var M in r)if(M!=="default"&&Object.prototype.hasOwnProperty.call(r,M)){var $=B?Object.getOwnPropertyDescriptor(r,M):null;$&&($.get||$.set)?Object.defineProperty(C,M,$):C[M]=r[M]}return C.default=r,v&&v.set(r,C),C},N=function(r){if(typeof WeakMap!="function")return null;var u=new WeakMap,v=new WeakMap;return(N=function(B){return B?v:u})(r)},m=e("K+nK"),t.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return t.t0=m,t.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return t.t1=t.sent,i=(0,t.t0)(t.t1),t.t2=m,t.next=13,Promise.resolve().then(e.bind(null,"PpiC"));case 13:return t.t3=t.sent,h=(0,t.t2)(t.t3),t.next=17,e.e(15).then(e.t.bind(null,"tL+A",7));case 17:return t.t4=m,t.next=20,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 20:return t.t5=t.sent,b=(0,t.t4)(t.t5),t.t6=m,t.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return t.t7=t.sent,E=(0,t.t6)(t.t7),t.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 29:return o=t.sent,t.t8=w,t.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 33:return t.t9=t.sent,p=(0,t.t8)(t.t9),t.next=37,e.e(16).then(e.bind(null,"OH0R"));case 37:return l=t.sent,O={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},c=function(){var r=(0,p.useForm)(),u=function(B,M){M.length>0?b.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(M.map(function($){return $.name}))):(0,l.fakeApi)("xxx/submit",B).then(function($){return b.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},v=function(B){var M=B.data,$=B.errors,Ke=B.schema,Xe=(0,h.default)(B,["data","errors","schema"]);return(0,l.fakeApi)("xxx/validation").then(function(sn){return{name:"select1",error:["\u5916\u90E8\u6821\u9A8C\u9519\u8BEF"]}})};return E.default.createElement("div",{style:{width:"400px"}},E.default.createElement(p.default,{form:r,schema:O,beforeFinish:v,onFinish:u}),E.default.createElement(i.default,{type:"primary",onClick:r.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},S=c,t.abrupt("return",S);case 42:case"end":return t.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Oe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-1"}},"form-methods-demo-2":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(g.a.mark(function D(){var m,i,h,b,E,o,p,l,N,w,O,c,S;return g.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return w=function(r,u){if(!u&&r&&r.__esModule)return r;if(r===null||typeof r!="object"&&typeof r!="function")return{default:r};var v=N(u);if(v&&v.has(r))return v.get(r);var C={},B=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var M in r)if(M!=="default"&&Object.prototype.hasOwnProperty.call(r,M)){var $=B?Object.getOwnPropertyDescriptor(r,M):null;$&&($.get||$.set)?Object.defineProperty(C,M,$):C[M]=r[M]}return C.default=r,v&&v.set(r,C),C},N=function(r){if(typeof WeakMap!="function")return null;var u=new WeakMap,v=new WeakMap;return(N=function(B){return B?v:u})(r)},m=e("K+nK"),t.next=5,e.e(23).then(e.t.bind(null,"lfLe",7));case 5:return t.t0=m,t.next=8,e.e(24).then(e.t.bind(null,"Cp9S",7));case 8:return t.t1=t.sent,i=(0,t.t0)(t.t1),t.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return t.t2=m,t.next=15,e.e(8).then(e.t.bind(null,"4IMT",7));case 15:return t.t3=t.sent,h=(0,t.t2)(t.t3),t.next=19,e.e(15).then(e.t.bind(null,"tL+A",7));case 19:return t.t4=m,t.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return t.t5=t.sent,b=(0,t.t4)(t.t5),t.t6=m,t.next=27,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 27:return t.t7=t.sent,E=(0,t.t6)(t.t7),t.next=31,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 31:return o=t.sent,t.t8=w,t.next=35,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 35:return t.t9=t.sent,p=(0,t.t8)(t.t9),t.next=39,e.e(16).then(e.bind(null,"OH0R"));case 39:return l=t.sent,O={type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F\u8303\u56F4",type:"range",format:"date"}}},c=function(){var r=(0,p.useForm)(),u=function(B,M){M.length>0?b.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(M.map(function($){return $.name}))):(0,l.fakeApi)("xxx/submit",B).then(function($){return b.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},v=function(){(0,l.fakeApi)("xxx/getForm").then(function(B){r.setValues({startDate:"2020-04-04",endDate:"2020-04-24"})})};return E.default.createElement("div",{style:{width:"400px"}},E.default.createElement(p.default,{form:r,schema:O,onFinish:u}),E.default.createElement(i.default,null,E.default.createElement(h.default,{onClick:v},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),E.default.createElement(h.default,{type:"primary",onClick:r.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},S=c,t.abrupt("return",S);case 44:case"end":return t.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Oe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-2"}},"form-methods-demo-3":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(g.a.mark(function D(){var m,i,h,b,E,o,p,l,N,w,O,c;return g.a.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return N=function(a,r){if(!r&&a&&a.__esModule)return a;if(a===null||typeof a!="object"&&typeof a!="function")return{default:a};var u=l(r);if(u&&u.has(a))return u.get(a);var v={},C=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var B in a)if(B!=="default"&&Object.prototype.hasOwnProperty.call(a,B)){var M=C?Object.getOwnPropertyDescriptor(a,B):null;M&&(M.get||M.set)?Object.defineProperty(v,B,M):v[B]=a[B]}return v.default=a,u&&u.set(a,v),v},l=function(a){if(typeof WeakMap!="function")return null;var r=new WeakMap,u=new WeakMap;return(l=function(C){return C?u:r})(a)},m=e("K+nK"),f.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return f.t0=m,f.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return f.t1=f.sent,i=(0,f.t0)(f.t1),f.next=12,e.e(15).then(e.t.bind(null,"tL+A",7));case 12:return f.t2=m,f.next=15,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 15:return f.t3=f.sent,h=(0,f.t2)(f.t3),f.t4=N,f.next=20,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 20:return f.t5=f.sent,b=(0,f.t4)(f.t5),f.next=24,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 24:return E=f.sent,f.t6=N,f.next=28,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 28:return f.t7=f.sent,o=(0,f.t6)(f.t7),f.next=32,e.e(16).then(e.bind(null,"OH0R"));case 32:return p=f.sent,w={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select1:{title:"\u5355\u9009",type:"string",widget:"select"}}}}},O=function(){var a=(0,o.useForm)(),r=function(){a.setSchemaByPath("obj1.select1",{enum:["east","south","west","north"],enumNames:["\u4E1C","\u5357","\u897F","\u5317"]})},u=function(C,B){B.length>0?h.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(B.map(function(M){return M.name}))):h.default.info(JSON.stringify(C))};return b.default.createElement("div",{style:{width:"400px"}},b.default.createElement(o.default,{form:a,schema:w,onMount:r,onFinish:u}),b.default.createElement(i.default,{type:"primary",onClick:a.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},c=O,f.abrupt("return",c);case 37:case"end":return f.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Oe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-3"}},"function-demo":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(g.a.mark(function D(){var m,i,h,b,E,o,p,l;return g.a.wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return E=function(c,S){if(!S&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var f=b(S);if(f&&f.has(c))return f.get(c);var t={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in c)if(r!=="default"&&Object.prototype.hasOwnProperty.call(c,r)){var u=a?Object.getOwnPropertyDescriptor(c,r):null;u&&(u.get||u.set)?Object.defineProperty(t,r,u):t[r]=c[r]}return t.default=c,f&&f.set(c,t),t},b=function(c){if(typeof WeakMap!="function")return null;var S=new WeakMap,f=new WeakMap;return(b=function(a){return a?f:S})(c)},m=e("K+nK"),w.t0=m,w.next=6,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 6:return w.t1=w.sent,i=(0,w.t0)(w.t1),w.t2=E,w.next=11,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 11:return w.t3=w.sent,h=(0,w.t2)(w.t3),o={type:"object",properties:{checkbox1:{title:"\u5C55\u793A\u66F4\u591A\u5185\u5BB9",type:"boolean"},select1:{title:"\u8BF7\u5047\u539F\u56E0",type:"string",enum:["a","b","c"],enumNames:["\u75C5\u5047","\u6709\u4E8B","\u5176\u5B83 (\u9700\u6CE8\u660E\u5177\u4F53\u539F\u56E0)"],hidden:"{{formData.checkbox1 !== true}}",widget:"radio"},input1:{title:"\u5177\u4F53\u539F\u56E0",type:"string",format:"textarea",hidden:'{{rootValue.checkbox1 !== true || formData.select1 !== "c"}}'}}},p=function(){var c=(0,h.useForm)();return i.default.createElement(h.default,{form:c,schema:o})},l=p,w.abrupt("return",l);case 17:case"end":return w.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo1;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo"}},"function-demo-1":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(g.a.mark(function D(){var m,i,h,b,E;return g.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return m=e("K+nK"),p.t0=m,p.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return p.t1=p.sent,i=(0,p.t0)(p.t1),p.t2=m,p.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(17)]).then(e.bind(null,"c2mQ"));case 9:return p.t3=p.sent,h=(0,p.t2)(p.t3),p.next=13,e.e(21).then(e.bind(null,"8iYR"));case 13:return b=p.sent,E=function(){return i.default.createElement(h.default,{schema:b.expression})},p.abrupt("return",E);case 16:case"end":return p.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { expression } from '../json/schema';

export default () => <FR schema={expression} />;`},"demo/FR.jsx":{import:"../demo/FR",content:oe},"json/schema.js":{import:"../json/schema",content:$n}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo-1"}},"lifeCycle-demo":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(g.a.mark(function D(){var m,i,h,b,E,o,p,l,N;return g.a.wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return E=function(S,f){if(!f&&S&&S.__esModule)return S;if(S===null||typeof S!="object"&&typeof S!="function")return{default:S};var t=b(f);if(t&&t.has(S))return t.get(S);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in S)if(u!=="default"&&Object.prototype.hasOwnProperty.call(S,u)){var v=r?Object.getOwnPropertyDescriptor(S,u):null;v&&(v.get||v.set)?Object.defineProperty(a,u,v):a[u]=S[u]}return a.default=S,t&&t.set(S,a),a},b=function(S){if(typeof WeakMap!="function")return null;var f=new WeakMap,t=new WeakMap;return(b=function(r){return r?t:f})(S)},O.t0=E,O.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return O.t1=O.sent,m=(0,O.t0)(O.t1),O.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 9:return i=O.sent,O.t2=E,O.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 13:return O.t3=O.sent,h=(0,O.t2)(O.t3),o=function(S){return new Promise(function(f){return setTimeout(f,S)})},p={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u9009\u62E9\u6846",description:"\u52A0\u8F7D\u4E2D...",type:"string",enum:[],widget:"radio"}}},l=function(){var S=(0,h.useForm)(),f=function(){S.setValues({input1:"hello world"}),o(3e3).then(function(a){S.setSchemaByPath("select1",{description:"",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]})})};return m.default.createElement(h.default,{form:S,schema:p,onMount:f})},N=l,O.abrupt("return",N);case 20:case"end":return O.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.6.9"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"lifeCycle-demo"}},"listDisplay-demo":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(g.a.mark(function D(){var m,i,h,b,E,o;return g.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return m=e("K+nK"),l.t0=m,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,i=(0,l.t0)(l.t1),l.t2=m,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,h=(0,l.t2)(l.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},E=function(){return i.default.createElement(h.default,{schema:b})},o=E,l.abrupt("return",o);case 15:case"end":return l.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Pe}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo"}},"listDisplay-demo-1":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(g.a.mark(function D(){var m,i,h,b,E,o;return g.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return m=e("K+nK"),l.t0=m,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,i=(0,l.t0)(l.t1),l.t2=m,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,h=(0,l.t2)(l.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},E=function(){return i.default.createElement(h.default,{schema:b})},o=E,l.abrupt("return",o);case 15:case"end":return l.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Pe}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-1"}},"listDisplay-demo-2":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(g.a.mark(function D(){var m,i,h,b,E,o;return g.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return m=e("K+nK"),l.t0=m,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,i=(0,l.t0)(l.t1),l.t2=m,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,h=(0,l.t2)(l.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},E=function(){return i.default.createElement(h.default,{schema:b})},o=E,l.abrupt("return",o);case 15:case"end":return l.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Pe}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-2"}},"listDisplay-demo-3":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(g.a.mark(function D(){var m,i,h,b,E,o;return g.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return m=e("K+nK"),l.t0=m,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,i=(0,l.t0)(l.t1),l.t2=m,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,h=(0,l.t2)(l.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",props:{hideMove:!0},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},E=function(){return i.default.createElement(h.default,{schema:b})},o=E,l.abrupt("return",o);case 15:case"end":return l.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Pe}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-3"}},"listDisplay-demo-4":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(g.a.mark(function D(){var m,i,h,b,E,o;return g.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return m=e("K+nK"),l.t0=m,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,i=(0,l.t0)(l.t1),l.t2=m,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,h=(0,l.t2)(l.t3),window.hello=function(N){var w=N.value;console.log(w)},b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list4",itemProps:{buttons:[{callback:"hello",text:"\u590D\u5236"}]},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},E=function(){return i.default.createElement(h.default,{schema:b})},o=E,l.abrupt("return",o);case 16:case"end":return l.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Pe}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-4"}},"mapping-demo":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(g.a.mark(function D(){var m,i,h,b,E,o,p,l,N,w,O;return g.a.wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return p=function(t,a){if(!a&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var r=o(a);if(r&&r.has(t))return r.get(t);var u={},v=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var C in t)if(C!=="default"&&Object.prototype.hasOwnProperty.call(t,C)){var B=v?Object.getOwnPropertyDescriptor(t,C):null;B&&(B.get||B.set)?Object.defineProperty(u,C,B):u[C]=t[C]}return u.default=t,r&&r.set(t,u),u},o=function(t){if(typeof WeakMap!="function")return null;var a=new WeakMap,r=new WeakMap;return(o=function(v){return v?r:a})(t)},m=e("K+nK"),S.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return S.t0=m,S.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return S.t1=S.sent,i=(0,S.t0)(S.t1),S.t2=m,S.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return S.t3=S.sent,h=(0,S.t2)(S.t3),S.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 17:return b=S.sent,S.t4=p,S.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 21:return S.t5=S.sent,E=(0,S.t4)(S.t5),l=function(t){var a=t.schema;return a.$id==="#"?h.default.createElement("div",null,t.children):h.default.createElement("div",null,"my custom object:",t.children)},N={type:"object",properties:{object2:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u8F93\u5165\u6846",type:"string"}}}},labelWidth:120,displayType:"row"},w=function(){var t=(0,E.useForm)(),a=function(u,v){console.log("formData:",u,"errors",v)};return h.default.createElement("div",null,h.default.createElement(E.default,{form:t,schema:N,onFinish:a,mapping:{object:"CustomComA"},widgets:{CustomComA:l}}),h.default.createElement(i.default,{type:"primary",onClick:t.submit},"\u63D0\u4EA4"))},O=w,S.abrupt("return",O);case 28:case"end":return S.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},"react-dom":{version:">=16.8.0"}},identifier:"mapping-demo"}},"watch-demo":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(g.a.mark(function D(){var m,i,h,b,E,o,p,l;return g.a.wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return E=function(c,S){if(!S&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var f=b(S);if(f&&f.has(c))return f.get(c);var t={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in c)if(r!=="default"&&Object.prototype.hasOwnProperty.call(c,r)){var u=a?Object.getOwnPropertyDescriptor(c,r):null;u&&(u.get||u.set)?Object.defineProperty(t,r,u):t[r]=c[r]}return t.default=c,f&&f.set(c,t),t},b=function(c){if(typeof WeakMap!="function")return null;var S=new WeakMap,f=new WeakMap;return(b=function(a){return a?f:S})(c)},w.t0=E,w.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return w.t1=w.sent,m=(0,w.t0)(w.t1),w.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 9:return i=w.sent,w.t2=E,w.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 13:return w.t3=w.sent,h=(0,w.t2)(w.t3),o={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"}}},p=function(){var c=(0,h.useForm)(),S={"#":function(t){console.log("\u8868\u5355\u7684\u65F6\u65F6\u6570\u636E\u4E3A\uFF1A",t)},input1:function(t){c.setValueByPath("input2",t)}};return m.default.createElement(h.default,{form:c,schema:o,watch:S})},l=p,w.abrupt("return",l);case 19:case"end":return w.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.6.9"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo"}},"watch-demo-1":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(g.a.mark(function D(){var m,i,h,b,E,o,p,l,N,w;return g.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return p=function(f,t){if(!t&&f&&f.__esModule)return f;if(f===null||typeof f!="object"&&typeof f!="function")return{default:f};var a=o(t);if(a&&a.has(f))return a.get(f);var r={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in f)if(v!=="default"&&Object.prototype.hasOwnProperty.call(f,v)){var C=u?Object.getOwnPropertyDescriptor(f,v):null;C&&(C.get||C.set)?Object.defineProperty(r,v,C):r[v]=f[v]}return r.default=f,a&&a.set(f,r),r},o=function(f){if(typeof WeakMap!="function")return null;var t=new WeakMap,a=new WeakMap;return(o=function(u){return u?a:t})(f)},m=e("K+nK"),c.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return c.t0=m,c.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return c.t1=c.sent,i=(0,c.t0)(c.t1),c.t2=p,c.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return c.t3=c.sent,h=(0,c.t2)(c.t3),c.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 17:return b=c.sent,c.t4=p,c.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 21:return c.t5=c.sent,E=(0,c.t4)(c.t5),l={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"radio"}}}}},N=function(){var f=(0,E.useForm)(),t=function(u,v){v.length>0?alert("errorFields:"+JSON.stringify(v)):alert("formData:"+JSON.stringify(u,null,2))},a={input1:function(u){u&&u.length>2?f.setSchemaByPath("obj1.select",function(v){var C=v.enumNames;return{enumNames:C.map(function(B){return B+"a"})}}):f.setSchemaByPath("obj1.select",{enumNames:["\u65E9","\u4E2D","\u665A"]})}};return h.default.createElement("div",null,h.default.createElement(E.default,{form:f,schema:l,onFinish:t,watch:a}),h.default.createElement(i.default,{type:"",style:{marginRight:8},onClick:function(){return f.setSchemaByPath("input2",{title:"\u7F16\u8F91\u6846",format:"textarea"})}},"\u5C06 input \u6539\u4E3A textarea"),h.default.createElement(i.default,{type:"primary",onClick:f.submit},"\u63D0\u4EA4"))},w=N,c.abrupt("return",w);case 27:case"end":return c.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo-1"}},"widget-demo":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(g.a.mark(function D(){var m,i,h,b,E,o,p,l,N,w,O,c,S;return g.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return N=function(r,u){if(!u&&r&&r.__esModule)return r;if(r===null||typeof r!="object"&&typeof r!="function")return{default:r};var v=l(u);if(v&&v.has(r))return v.get(r);var C={},B=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var M in r)if(M!=="default"&&Object.prototype.hasOwnProperty.call(r,M)){var $=B?Object.getOwnPropertyDescriptor(r,M):null;$&&($.get||$.set)?Object.defineProperty(C,M,$):C[M]=r[M]}return C.default=r,v&&v.set(r,C),C},l=function(r){if(typeof WeakMap!="function")return null;var u=new WeakMap,v=new WeakMap;return(l=function(B){return B?v:u})(r)},m=e("K+nK"),t.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return t.t0=m,t.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return t.t1=t.sent,i=(0,t.t0)(t.t1),t.next=12,Promise.all([e.e(3),e.e(19)]).then(e.t.bind(null,"cUip",7));case 12:return t.t2=m,t.next=15,Promise.all([e.e(0),e.e(8),e.e(18),e.e(20)]).then(e.t.bind(null,"iJl9",7));case 15:return t.t3=t.sent,h=(0,t.t2)(t.t3),t.t4=m,t.next=20,e.e(88).then(e.bind(null,"0Owb"));case 20:return t.t5=t.sent,b=(0,t.t4)(t.t5),t.t6=m,t.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return t.t7=t.sent,E=(0,t.t6)(t.t7),t.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 29:return o=t.sent,t.t8=N,t.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 33:return t.t9=t.sent,p=(0,t.t8)(t.t9),w={type:"object",properties:{string:{title:"\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6",type:"string",widget:"site"},select:{title:"\u5355\u9009",type:"number",enum:[1,2,3],enumNames:["\u9009\u98791","\u9009\u98792","\u9009\u98793"]}}},O=function(r){return console.log("widget props:",r),E.default.createElement(h.default,(0,b.default)({addonBefore:"https://",addonAfter:".com"},r))},c=function(){var r=(0,p.useForm)();return E.default.createElement("div",null,E.default.createElement(p.default,{form:r,schema:w,widgets:{site:O},onFinish:function(v){return alert(JSON.stringify(v,null,2))}}),E.default.createElement(i.default,{type:"primary",onClick:r.submit},"\u63D0\u4EA4"))},S=c,t.abrupt("return",S);case 40:case"end":return t.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},"react-dom":{version:">=16.8.0"}},identifier:"widget-demo"}},"form-render-dependencies":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(g.a.mark(function D(){return g.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"ODQR"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:Se}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-dependencies"}},"measure-demo":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(g.a.mark(function D(){var m,i,h,b,E,o,p,l,N,w;return g.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return l=function(f,t){if(!t&&f&&f.__esModule)return f;if(f===null||typeof f!="object"&&typeof f!="function")return{default:f};var a=p(t);if(a&&a.has(f))return a.get(f);var r={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in f)if(v!=="default"&&Object.prototype.hasOwnProperty.call(f,v)){var C=u?Object.getOwnPropertyDescriptor(f,v):null;C&&(C.get||C.set)?Object.defineProperty(r,v,C):r[v]=f[v]}return r.default=f,a&&a.set(f,r),r},p=function(f){if(typeof WeakMap!="function")return null;var t=new WeakMap,a=new WeakMap;return(p=function(u){return u?a:t})(f)},m=e("K+nK"),c.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return c.t0=m,c.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return c.t1=c.sent,i=(0,c.t0)(c.t1),c.next=12,e.e(15).then(e.t.bind(null,"tL+A",7));case 12:return c.t2=m,c.next=15,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 15:return c.t3=c.sent,h=(0,c.t2)(c.t3),c.t4=l,c.next=20,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 20:return c.t5=c.sent,b=(0,c.t4)(c.t5),c.next=24,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 24:return E=c.sent,c.t6=l,c.next=28,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 28:return c.t7=c.sent,o=(0,c.t6)(c.t7),N=function(){var f=(0,o.useForm)({logOnMount:function(u){console.log("onMount",u)},logOnSubmit:function(u){console.log("onSubmit",u)}}),t={type:"object",properties:{input1:{title:"\u8F93\u5165\u6846",required:!0,type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u5DE6","\u4E2D","\u53F3"],widget:"radio"}}},a=function(u,v){v.length>0?h.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(v.map(function(C){return C.name}))):h.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")};return b.default.createElement("div",null,b.default.createElement(o.default,{id:"my-demo-form",form:f,schema:t,onFinish:a}),b.default.createElement(i.default,{type:"primary",onClick:f.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},w=N,c.abrupt("return",w);case 33:case"end":return c.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"measure-demo"}},"migrate-demo":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(g.a.mark(function D(){var m,i,h,b,E,o,p,l;return g.a.wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return p=function(){var c=(0,h.useForm)(),S=function(t,a){a.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(a))):alert(JSON.stringify(t))};return i.default.createElement("div",null,i.default.createElement(h.default,{form:c,schema:o,onFinish:S}),i.default.createElement("button",{onClick:c.submit},"\u63D0\u4EA4"))},E=function(c,S){if(!S&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var f=b(S);if(f&&f.has(c))return f.get(c);var t={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in c)if(r!=="default"&&Object.prototype.hasOwnProperty.call(c,r)){var u=a?Object.getOwnPropertyDescriptor(c,r):null;u&&(u.get||u.set)?Object.defineProperty(t,r,u):t[r]=c[r]}return t.default=c,f&&f.set(c,t),t},b=function(c){if(typeof WeakMap!="function")return null;var S=new WeakMap,f=new WeakMap;return(b=function(a){return a?f:S})(c)},m=e("K+nK"),w.t0=m,w.next=7,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 7:return w.t1=w.sent,i=(0,w.t0)(w.t1),w.t2=E,w.next=12,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 12:return w.t3=w.sent,h=(0,w.t2)(w.t3),o={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}},l=p,w.abrupt("return",l);case 17:case"end":return w.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate-demo"}},"migrate-demo-1":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(g.a.mark(function D(){var m,i,h,b,E,o,p,l,N,w,O,c,S;return g.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return N=function(r,u){if(!u&&r&&r.__esModule)return r;if(r===null||typeof r!="object"&&typeof r!="function")return{default:r};var v=l(u);if(v&&v.has(r))return v.get(r);var C={},B=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var M in r)if(M!=="default"&&Object.prototype.hasOwnProperty.call(r,M)){var $=B?Object.getOwnPropertyDescriptor(r,M):null;$&&($.get||$.set)?Object.defineProperty(C,M,$):C[M]=r[M]}return C.default=r,v&&v.set(r,C),C},l=function(r){if(typeof WeakMap!="function")return null;var u=new WeakMap,v=new WeakMap;return(l=function(B){return B?v:u})(r)},m=e("K+nK"),t.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return t.t0=m,t.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return t.t1=t.sent,i=(0,t.t0)(t.t1),t.t2=m,t.next=13,Promise.resolve().then(e.bind(null,"tJVT"));case 13:return t.t3=t.sent,h=(0,t.t2)(t.t3),t.next=17,Promise.all([e.e(3),e.e(19)]).then(e.t.bind(null,"cUip",7));case 17:return t.t4=m,t.next=20,Promise.all([e.e(0),e.e(8),e.e(18),e.e(20)]).then(e.t.bind(null,"iJl9",7));case 20:return t.t5=t.sent,b=(0,t.t4)(t.t5),t.t6=N,t.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return t.t7=t.sent,E=(0,t.t6)(t.t7),t.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 29:return o=t.sent,t.next=32,Promise.all([e.e(22),e.e(25)]).then(e.bind(null,"7t+U"));case 32:return p=t.sent,w=b.default.TextArea,O={type:"object",properties:{number:{title:"\u6570\u5B57\u8F93\u5165\u6846",type:"number","ui:disabled":!0},checkbox:{title:"\u662F\u5426\u9009\u62E9",type:"boolean","ui:widget":"switch"}},required:["number"]},c=function(){var r=(0,E.useState)(JSON.stringify(O)),u=(0,h.default)(r,2),v=u[0],C=u[1],B=(0,E.useState)({}),M=(0,h.default)(B,2),$=M[0],Ke=M[1],Xe=function(){try{var An=(0,p.updateSchemaToNewVersion)(JSON.parse(v));Ke(An)}catch(Gn){console.log(Gn)}},sn=function(An){C(An.target.value)},Pn=function(){C(JSON.stringify(JSON.parse(v),null,2))};return E.default.createElement("div",null,E.default.createElement("div",null,"\u586B\u5165\u65E7\u7248schema\uFF1A"),E.default.createElement(w,{style:{minHeight:400,marginTop:12,marginBottom:12},value:v,onChange:sn}),E.default.createElement(i.default,{style:{marginRight:12},onClick:Pn},"\u683C\u5F0F\u5316\u65E7schema"),E.default.createElement(i.default,{type:"primary",onClick:Xe},"\u751F\u6210\u65B0\u7248schema"),E.default.createElement(w,{style:{minHeight:400,marginTop:12},value:JSON.stringify($,null,2)}))},S=c,t.abrupt("return",S);case 38:case"end":return t.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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

export default Translator;`},"packages/form-render/src/utils.js":{import:"../../packages/form-render/src/utils.js",content:z}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"},"lodash-es":{version:"4.17.21"}},identifier:"migrate-demo-1"}},"migrate2-demo":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(g.a.mark(function D(){var m,i,h,b,E,o,p,l,N;return g.a.wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return l=function(){var S=(0,h.useState)({}),f=(0,i.default)(S,2),t=f[0],a=f[1],r=(0,h.useState)([]),u=(0,i.default)(r,2),v=u[0],C=u[1],B=(0,h.useState)(!1),M=(0,i.default)(B,2),$=M[0],Ke=M[1],Xe=(0,b.useForm)({formData:t,onChange:a,onValidate:C,showValidate:$});(0,h.useEffect)(function(){Xe.init()},[]);var sn=function(){Ke(!0),v.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(v))):alert(JSON.stringify(t))};return h.default.createElement("div",null,h.default.createElement(b.default,{form:Xe,schema:p}),h.default.createElement("button",{onClick:sn},"\u63D0\u4EA4"))},o=function(S,f){if(!f&&S&&S.__esModule)return S;if(S===null||typeof S!="object"&&typeof S!="function")return{default:S};var t=E(f);if(t&&t.has(S))return t.get(S);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in S)if(u!=="default"&&Object.prototype.hasOwnProperty.call(S,u)){var v=r?Object.getOwnPropertyDescriptor(S,u):null;v&&(v.get||v.set)?Object.defineProperty(a,u,v):a[u]=S[u]}return a.default=S,t&&t.set(S,a),a},E=function(S){if(typeof WeakMap!="function")return null;var f=new WeakMap,t=new WeakMap;return(E=function(r){return r?t:f})(S)},m=e("K+nK"),O.t0=m,O.next=7,Promise.resolve().then(e.bind(null,"tJVT"));case 7:return O.t1=O.sent,i=(0,O.t0)(O.t1),O.t2=o,O.next=12,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 12:return O.t3=O.sent,h=(0,O.t2)(O.t3),O.t4=o,O.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 17:return O.t5=O.sent,b=(0,O.t4)(O.t5),p={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}},N=l,O.abrupt("return",N);case 22:case"end":return O.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
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
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate2-demo"}},"schema-demo":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(g.a.mark(function D(){var m,i,h,b,E;return g.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return m=e("K+nK"),p.t0=m,p.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return p.t1=p.sent,i=(0,p.t0)(p.t1),p.t2=m,p.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(17)]).then(e.bind(null,"c2mQ"));case 9:return p.t3=p.sent,h=(0,p.t2)(p.t3),p.next=13,e.e(21).then(e.bind(null,"8iYR"));case 13:return b=p.sent,E=function(){return i.default.createElement(h.default,{schema:b.basic})},p.abrupt("return",E);case 16:case"end":return p.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { basic } from '../json/schema';

export default () => <FR schema={basic} />;`},"demo/FR.jsx":{import:"../demo/FR",content:oe},"json/schema.js":{import:"../json/schema",content:$n}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo"}},"schema-demo-1":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(g.a.mark(function D(){var m,i,h,b,E;return g.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return m=e("K+nK"),p.t0=m,p.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return p.t1=p.sent,i=(0,p.t0)(p.t1),p.t2=m,p.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(17)]).then(e.bind(null,"c2mQ"));case 9:return p.t3=p.sent,h=(0,p.t2)(p.t3),p.next=13,e.e(21).then(e.bind(null,"8iYR"));case 13:return b=p.sent,E=function(){return i.default.createElement(h.default,{schema:b.titleTrick})},p.abrupt("return",E);case 16:case"end":return p.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { titleTrick } from '../json/schema';

export default () => <FR schema={titleTrick} />;`},"demo/FR.jsx":{import:"../demo/FR",content:oe},"json/schema.js":{import:"../json/schema",content:$n}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo-1"}},"docs-playground":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(g.a.mark(function D(){return g.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"BASV"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:Fn},"main.js":{import:"./main",content:jn},"json/simplest.json":{import:"./json/simplest.json",content:pn},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:rn},"monaco/index.js":{import:"./monaco",content:$e},"theme.css":{import:"./theme.css",content:Nn},"index.css":{import:"./index.css",content:Dn}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:"^16.0.0"},"react-dom":{version:"^16.0.0"},"deep-equal":{version:"2.0.5"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.6.9"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-simple-code-editor":{version:"0.11.0"},prismjs:{version:"1.23.0"}},identifier:"docs-playground"}},"docs-playground1":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(g.a.mark(function D(){return g.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"Wrpt"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:hn},"main.js":{import:"./main",content:Ae},"json/simplest.json":{import:"./json/simplest.json",content:nt},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:wn},"monaco/index.js":{import:"./monaco",content:tt},"suggestionsMap.js":{import:"./suggestionsMap",content:dt},"index.css":{import:"./index.css",content:at}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:"^17.x"},"react-dom":{version:">=16.9.0"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.6.9"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-monaco-editor":{version:"0.44.0"},"@types/react":{version:"^17.x"}},identifier:"docs-playground1"}},"table-render-advanced":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(g.a.mark(function D(){return g.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"7ZP+"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{tsx:ct}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.5"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!0,identifier:"table-render-advanced"}},"table-render-nosearch":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(g.a.mark(function D(){return g.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"CfUQ"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{tsx:Bn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.5"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!0,identifier:"table-render-nosearch"}},"table-render-notitle":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(g.a.mark(function D(){return g.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"/usH"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{tsx:rt}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.5"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!0,identifier:"table-render-notitle"}},"table-render-paramtable":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(g.a.mark(function D(){return g.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"48jF"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{tsx:Vn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.5"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},umi:{version:"3.4.19"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!0,identifier:"table-render-paramtable"}},"table-render-demo":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(g.a.mark(function D(){var m,i,h,b,E,o,p,l,N;return g.a.wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return m=e("K+nK"),O.t0=m,O.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return O.t1=O.sent,i=(0,O.t0)(O.t1),O.next=8,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(73)]).then(e.bind(null,"P2DI"));case 8:for(h=O.sent,b=[],E=0;E<6;E++)b.push({id:E.toString(),title:"\u6807\u9898".concat(E+1),created_at:new Date().getTime()});return o={type:"object",properties:{title:{title:"\u6807\u9898",type:"string",width:"30%"},created_at:{title:"\u521B\u5EFA\u65F6\u95F4",type:"string",format:"date",width:"30%"}}},p=[{title:"\u6807\u9898",dataIndex:"title"},{title:"\u521B\u5EFA\u65F6\u95F4",key:"since",dataIndex:"created_at",valueType:"date"},{title:"\u64CD\u4F5C",render:function(S,f){return i.default.createElement("a",{onClick:function(){return alert(S.title)}},"\u7F16\u8F91")}}],l=function(){var S=function(){return{rows:b,total:b.length}};return i.default.createElement(i.default.Fragment,null,i.default.createElement(h.Search,{schema:o,api:S}),i.default.createElement(h.Table,{headerTitle:"\u6700\u7B80\u8868\u683C",columns:p,rowKey:"id"}))},N=(0,h.withTable)(l),O.abrupt("return",N);case 16:case"end":return O.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default withTable(Wrapper);`}},dependencies:{react:{version:">=16.8.0"},"table-render":{version:"1.1.5"},antd:{version:"4.x",css:"antd/dist/antd.css"}},transform:!0,defaultShowCode:!0,identifier:"table-render-demo"}},"table-render-test1":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(g.a.mark(function D(){return g.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"aMwh"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:mt}},dependencies:{react:{version:">=16.8.0"},"table-render":{version:"1.1.5"},antd:{version:"4.x",css:"antd/dist/antd.css"}},identifier:"table-render-test1"}},"generator-demo":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(g.a.mark(function D(){var m,i,h,b,E,o;return g.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return m=e("K+nK"),l.t0=m,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,i=(0,l.t0)(l.t1),l.t2=m,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(72)]).then(e.bind(null,"nYSz"));case 9:return l.t3=l.sent,h=(0,l.t2)(l.t3),b={type:"object",properties:{inputName:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string"}}},E=function(){return i.default.createElement("div",{style:{height:"80vh"}},i.default.createElement(h.default,{defaultValue:b}))},o=E,l.abrupt("return",o);case 15:case"end":return l.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.4.6"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"generator-demo"}},"generator-modal":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(g.a.mark(function D(){return g.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"PPgD"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:Mn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.4.6"},"react-dom":{version:">=16.9.0"}},identifier:"generator-modal"}},"generator-settings":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(g.a.mark(function D(){return g.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"M63W"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:Kn}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.4.6"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-settings"}},"generator-layout":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(g.a.mark(function D(){return g.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"SOdT"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:zn},"index.less":{import:"./index.less",content:Jn}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.4.6"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-layout"}},"generator-transformer":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(g.a.mark(function D(){return g.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"jktF"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:Wn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.4.6"},"react-dom":{version:">=16.9.0"}},identifier:"generator-transformer"}},"generator-playground":{component:Object(W.dynamic)({loader:function(){var A=Object(x.a)(g.a.mark(function D(){return g.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"TYW4"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},D)}));function T(){return A.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:st},"index.less":{import:"./index.less",content:Jn}},dependencies:{react:{version:">=16.8.0"},umi:{version:"3.4.19"},"fr-generator":{version:"2.4.6"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-playground"}}}},TIsu:function(Rn,un,e){},Zs1V:function(Rn){Rn.exports=JSON.parse("{}")},p8sG:function(Rn,un,e){"use strict";Rn.exports=e("80pN")}}]);
