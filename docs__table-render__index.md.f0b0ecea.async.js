(window.webpackJsonp=window.webpackJsonp||[]).push([[63,13],{"0zqC":function(jn,cn,e){"use strict";e.r(cn);var K=e("tJVT"),n=e("q1tI"),g=e.n(n),B=e("wx14"),ue=e("rePB"),V=e("ODXe"),Re=e("U8pU"),Oe=e("Ff2n"),oe=e("VTBJ"),zn=e("TSYQ"),Se=e.n(zn),Pn=e("Zm9Q"),Tn=e("5Z9U"),gn=e("6cGi"),on=e("KQm4"),$e=e("wgJM"),Bn=e("t23M");function An(l){var m=Object(n.useRef)(),y=Object(n.useRef)(!1);function S(){for(var R=arguments.length,O=new Array(R),T=0;T<R;T++)O[T]=arguments[T];y.current||($e.a.cancel(m.current),m.current=Object($e.a)(function(){l.apply(void 0,O)}))}return Object(n.useEffect)(function(){return function(){y.current=!0,$e.a.cancel(m.current)}},[]),S}function yn(l){var m=Object(n.useRef)([]),y=Object(n.useState)({}),S=Object(V.a)(y,2),R=S[1],O=Object(n.useRef)(typeof l=="function"?l():l),T=An(function(){var M=O.current;m.current.forEach(function(W){M=W(M)}),m.current=[],O.current=M,R({})});function N(M){m.current.push(M),T()}return[O.current,N]}var Te=e("4IlW");function rt(l,m){var y,S=l.prefixCls,R=l.id,O=l.active,T=l.rtl,N=l.tab,M=N.key,W=N.tab,L=N.disabled,U=N.closeIcon,J=l.tabBarGutter,re=l.tabPosition,H=l.closable,G=l.renderWrapper,se=l.removeAriaLabel,z=l.editable,q=l.onClick,ne=l.onRemove,X=l.onFocus,ae="".concat(S,"-tab");n.useEffect(function(){return ne},[]);var k={};re==="top"||re==="bottom"?k[T?"marginLeft":"marginRight"]=J:k.marginBottom=J;var fe=z&&H!==!1&&!L;function _(te){L||q(te)}function le(te){te.preventDefault(),te.stopPropagation(),z.onEdit("remove",{key:M,event:te})}var de=n.createElement("div",{key:M,ref:m,className:Se()(ae,(y={},Object(ue.a)(y,"".concat(ae,"-with-remove"),fe),Object(ue.a)(y,"".concat(ae,"-active"),O),Object(ue.a)(y,"".concat(ae,"-disabled"),L),y)),style:k,onClick:_},n.createElement("div",{role:"tab","aria-selected":O,id:R&&"".concat(R,"-tab-").concat(M),className:"".concat(ae,"-btn"),"aria-controls":R&&"".concat(R,"-panel-").concat(M),"aria-disabled":L,tabIndex:L?null:0,onClick:function(Y){Y.stopPropagation(),_(Y)},onKeyDown:function(Y){[Te.a.SPACE,Te.a.ENTER].includes(Y.which)&&(Y.preventDefault(),_(Y))},onFocus:X},W),fe&&n.createElement("button",{type:"button","aria-label":se||"remove",tabIndex:0,className:"".concat(ae,"-remove"),onClick:function(Y){Y.stopPropagation(),le(Y)}},U||z.removeIcon||"\xD7"));return G&&(de=G(de)),de}var Mn=n.forwardRef(rt),at={width:0,height:0,left:0,top:0};function pt(l,m,y){return Object(n.useMemo)(function(){for(var S,R=new Map,O=m.get((S=l[0])===null||S===void 0?void 0:S.key)||at,T=O.left+O.width,N=0;N<l.length;N+=1){var M=l[N].key,W=m.get(M);if(!W){var L;W=m.get((L=l[N-1])===null||L===void 0?void 0:L.key)||at}var U=R.get(M)||Object(oe.a)({},W);U.right=T-U.left-U.width,R.set(M,U)}return R},[l.map(function(S){return S.key}).join("_"),m,y])}var st={width:0,height:0,left:0,top:0,right:0};function ft(l,m,y,S,R){var O=R.tabs,T=R.tabPosition,N=R.rtl,M,W,L;["top","bottom"].includes(T)?(M="width",W=N?"right":"left",L=Math.abs(m.left)):(M="height",W="top",L=-m.top);var U=m[M],J=y[M],re=S[M],H=U;return J+re>U&&(H=U-re),Object(n.useMemo)(function(){if(!O.length)return[0,0];for(var G=O.length,se=G,z=0;z<G;z+=1){var q=l.get(O[z].key)||st;if(q[W]+q[M]>L+H){se=z-1;break}}for(var ne=0,X=G-1;X>=0;X-=1){var ae=l.get(O[X].key)||st;if(ae[W]<L){ne=X+1;break}}return[ne,se]},[l,L,H,T,O.map(function(G){return G.key}).join("_"),N])}var Kn=e("Gytx"),it=e.n(Kn),Jn=e("Kwbf");function ht(l,m){var y=l.prefixCls,S=l.invalidate,R=l.item,O=l.renderItem,T=l.responsive,N=l.registerSize,M=l.itemKey,W=l.className,L=l.style,U=l.children,J=l.display,re=l.order,H=l.component,G=H===void 0?"div":H,se=Object(Oe.a)(l,["prefixCls","invalidate","item","renderItem","responsive","registerSize","itemKey","className","style","children","display","order","component"]),z=T&&!J;function q(fe){N(M,fe)}n.useEffect(function(){return function(){q(null)}},[]);var ne=O&&R!==void 0?O(R):U,X;S||(X={opacity:z?0:1,height:z?0:void 0,overflowY:z?"hidden":void 0,order:T?re:void 0,pointerEvents:z?"none":void 0});var ae={};z&&(ae["aria-hidden"]=!0);var k=n.createElement(G,Object(B.a)({className:Se()(!S&&y,W),style:Object(oe.a)(Object(oe.a)({},X),L)},ae,se,{ref:m}),ne);return T&&(k=n.createElement(Bn.default,{onResize:function(_){var le=_.offsetWidth;q(le)}},k)),k}var Wn=n.forwardRef(ht);Wn.displayName="Item";var Ln=Wn;function Un(){var l=Object(n.useState)({}),m=Object(V.a)(l,2),y=m[1],S=Object(n.useRef)([]),R=Object(n.useRef)(!1),O=0,T=0;Object(n.useEffect)(function(){return function(){R.current=!0}},[]);function N(M){var W=O;O+=1,S.current.length<W+1&&(S.current[W]=M);var L=S.current[W];function U(J){S.current[W]=typeof J=="function"?J(S.current[W]):J,$e.a.cancel(T),T=Object($e.a)(function(){R.current||y({})})}return[L,U]}return N}var ot=function(m,y){var S=n.useContext(mn);if(!S){var R=m.component,O=R===void 0?"div":R,T=Object(Oe.a)(m,["component"]);return n.createElement(O,Object(B.a)({},T,{ref:y}))}var N=S.className,M=Object(Oe.a)(S,["className"]),W=m.className,L=Object(Oe.a)(m,["className"]);return n.createElement(mn.Provider,{value:null},n.createElement(Ln,Object(B.a)({ref:y,className:Se()(N,W)},M,L)))},xn=n.forwardRef(ot);xn.displayName="RawItem";var lt=xn,mn=n.createContext(null),Yn="responsive",Hn="invalidate";function ln(l){return"+ ".concat(l.length," ...")}function vt(l,m){var y=l.prefixCls,S=y===void 0?"rc-overflow":y,R=l.data,O=R===void 0?[]:R,T=l.renderItem,N=l.renderRawItem,M=l.itemKey,W=l.itemWidth,L=W===void 0?10:W,U=l.ssr,J=l.style,re=l.className,H=l.maxCount,G=l.renderRest,se=l.renderRawRest,z=l.suffix,q=l.component,ne=q===void 0?"div":q,X=l.itemComponent,ae=l.onVisibleChange,k=Object(Oe.a)(l,["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"]),fe=Un(),_=U==="full",le=fe(null),de=Object(V.a)(le,2),te=de[0],Y=de[1],ie=te||0,pe=fe(new Map),me=Object(V.a)(pe,2),ye=me[0],Ae=me[1],he=fe(0),ge=Object(V.a)(he,2),je=ge[0],De=ge[1],Ce=fe(0),Ee=Object(V.a)(Ce,2),we=Ee[0],Ye=Ee[1],Ie=fe(0),Be=Object(V.a)(Ie,2),xe=Be[0],Ne=Be[1],En=Object(n.useState)(null),Qe=Object(V.a)(En,2),Ve=Qe[0],en=Qe[1],pn=Object(n.useState)(null),fn=Object(V.a)(pn,2),Fe=fn[0],Ke=fn[1],He=n.useMemo(function(){return Fe===null&&_?Number.MAX_SAFE_INTEGER:Fe||0},[Fe,te]),ze=Object(n.useState)(!1),wn=Object(V.a)(ze,2),Xn=wn[0],In=wn[1],Ze="".concat(S,"-item"),Cn=Math.max(je,we),nn=O.length&&H===Yn,On=H===Hn,Ge=nn||typeof H=="number"&&O.length>H,ke=Object(n.useMemo)(function(){var ce=O;return nn?te===null&&_?ce=O:ce=O.slice(0,Math.min(O.length,ie/L)):typeof H=="number"&&(ce=O.slice(0,H)),ce},[O,L,te,H,nn]),Sn=Object(n.useMemo)(function(){return nn?O.slice(He+1):O.slice(ke.length)},[O,ke,nn,He]),an=Object(n.useCallback)(function(ce,be){var Pe;return typeof M=="function"?M(ce):(Pe=M&&(ce==null?void 0:ce[M]))!==null&&Pe!==void 0?Pe:be},[M]),Je=Object(n.useCallback)(T||function(ce){return ce},[T]);function We(ce,be){Ke(ce),be||(In(ce<O.length-1),ae==null||ae(ce))}function Qn(ce,be){Y(be.clientWidth)}function Zn(ce,be){Ae(function(Pe){var Xe=new Map(Pe);return be===null?Xe.delete(ce):Xe.set(ce,be),Xe})}function dt(ce,be){Ye(be),De(we)}function hn(ce,be){Ne(be)}function dn(ce){return ye.get(an(ke[ce],ce))}n.useLayoutEffect(function(){if(ie&&Cn&&ke){var ce=xe,be=ke.length,Pe=be-1;if(!be){We(0),en(null);return}for(var Xe=0;Xe<be;Xe+=1){var et=dn(Xe);if(et===void 0){We(Xe-1,!0);break}if(ce+=et,Xe===Pe-1&&ce+dn(Pe)<=ie){We(Pe),en(null);break}else if(ce+Cn>ie){We(Xe-1),en(ce-et-xe+we);break}else if(Xe===Pe){We(Pe),en(ce-xe);break}}z&&dn(0)+xe>ie&&en(null)}},[ie,ye,we,xe,an,ke]);var kn=Xn&&!!Sn.length,vn={};Ve!==null&&nn&&(vn={position:"absolute",left:Ve,top:0});var sn={prefixCls:Ze,responsive:nn,component:X,invalidate:On},qn=N?function(ce,be){var Pe=an(ce,be);return n.createElement(mn.Provider,{key:Pe,value:Object(oe.a)(Object(oe.a)({},sn),{},{order:be,item:ce,itemKey:Pe,registerSize:Zn,display:be<=He})},N(ce,be))}:function(ce,be){var Pe=an(ce,be);return n.createElement(Ln,Object(B.a)({},sn,{order:be,key:Pe,item:ce,renderItem:Je,itemKey:Pe,registerSize:Zn,display:be<=He}))},Fn,_n={order:kn?He:Number.MAX_SAFE_INTEGER,className:"".concat(Ze,"-rest"),registerSize:dt,display:kn};if(se)se&&(Fn=n.createElement(mn.Provider,{value:Object(oe.a)(Object(oe.a)({},sn),_n)},se(Sn)));else{var tn=G||ln;Fn=n.createElement(Ln,Object(B.a)({},sn,_n),typeof tn=="function"?tn(Sn):tn)}var Rn=n.createElement(ne,Object(B.a)({className:Se()(!On&&S,re),style:J,ref:m},k),ke.map(qn),Ge?Fn:null,z&&n.createElement(Ln,Object(B.a)({},sn,{order:He,className:"".concat(Ze,"-suffix"),registerSize:hn,display:!0,style:vn}),z));return nn&&(Rn=n.createElement(Bn.default,{onResize:Qn},Rn)),Rn}var Nn=n.forwardRef(vt);Nn.displayName="Overflow",Nn.Item=lt,Nn.RESPONSIVE=Yn,Nn.INVALIDATE=Hn;var j=Nn,F=j,P=e("1OyB"),f=e("vuIU"),s=e("Ji7U"),v=e("LK+K"),b=e("bT9E"),E=e("YrtM"),i=n.createContext(null);function p(l,m){var y=Object(oe.a)({},l);return Object.keys(m).forEach(function(S){var R=m[S];R!==void 0&&(y[S]=R)}),y}function o(l){var m=l.children,y=l.locked,S=Object(Oe.a)(l,["children","locked"]),R=n.useContext(i),O=Object(E.a)(function(){return p(R,S)},[R,S],function(T,N){return!y&&(T[0]!==N[0]||!it()(T[1],N[1]))});return n.createElement(i.Provider,{value:O},m)}function A(l,m,y,S){var R=n.useContext(i),O=R.activeKey,T=R.onActive,N=R.onInactive,M={active:O===l};return m||(M.onMouseEnter=function(W){y==null||y({key:l,domEvent:W}),T(l)},M.onMouseLeave=function(W){S==null||S({key:l,domEvent:W}),N(l)}),M}function w(l){var m=l.item,y=Object(Oe.a)(l,["item"]);return Object.defineProperty(y,"item",{get:function(){return Object(Jn.a)(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),m}}),y}function a(l){var m=l.icon,y=l.props,S=l.children,R;return typeof m=="function"?R=n.createElement(m,Object(oe.a)({},y)):R=m,R||S||null}function r(l){var m=n.useContext(i),y=m.mode,S=m.rtl,R=m.inlineIndent;if(y!=="inline")return null;var O=l;return S?{paddingRight:O*R}:{paddingLeft:O*R}}var u=[],c=n.createContext(null);function t(){return n.useContext(c)}var h=n.createContext(u);function d(l){var m=n.useContext(h);return n.useMemo(function(){return l!==void 0?[].concat(Object(on.a)(m),[l]):m},[m,l])}var C=n.createContext(null),D=n.createContext(null);function I(l,m){return l===void 0?null:"".concat(l,"-").concat(m)}function $(l){var m=n.useContext(D);return I(m,l)}var x=function(l){Object(s.a)(y,l);var m=Object(v.a)(y);function y(){return Object(P.a)(this,y),m.apply(this,arguments)}return Object(f.a)(y,[{key:"render",value:function(){var R=this.props,O=R.title,T=R.attribute,N=R.elementRef,M=Object(Oe.a)(R,["title","attribute","elementRef"]),W=Object(b.a)(M,["eventKey"]);return Object(Jn.a)(!T,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),n.createElement(F.Item,Object(B.a)({},T,{title:typeof O=="string"?O:void 0},W,{ref:N}))}}]),y}(n.Component),Z=function(m){var y,S=m.style,R=m.className,O=m.eventKey,T=m.disabled,N=m.itemIcon,M=m.children,W=m.role,L=m.onMouseEnter,U=m.onMouseLeave,J=m.onClick,re=m.onKeyDown,H=m.onFocus,G=Object(Oe.a)(m,["style","className","eventKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"]),se=$(O),z=n.useContext(i),q=z.prefixCls,ne=z.onItemClick,X=z.disabled,ae=z.overflowDisabled,k=z.itemIcon,fe=z.selectedKeys,_=z.onActive,le="".concat(q,"-item"),de=n.useRef(),te=n.useRef(),Y=X||T,ie=d(O),pe=function(Ie){return{key:O,keyPath:ie,item:de.current,domEvent:Ie}},me=N||k,ye=A(O,Y,L,U),Ae=ye.active,he=Object(Oe.a)(ye,["active"]),ge=fe.includes(O),je=r(ie.length),De=function(Ie){if(!Y){var Be=pe(Ie);J==null||J(w(Be)),ne(Be)}},Ce=function(Ie){if(re==null||re(Ie),Ie.which===Te.a.ENTER){var Be=pe(Ie);J==null||J(w(Be)),ne(Be)}},Ee=function(Ie){_(O),H==null||H(Ie)},we={};return m.role==="option"&&(we["aria-selected"]=ge),n.createElement(x,Object(B.a)({ref:de,elementRef:te,role:W===null?"none":W||"menuitem",tabIndex:T?null:-1,"data-menu-id":ae&&se?null:se},G,he,we,{component:"li","aria-disabled":T,style:Object(oe.a)(Object(oe.a)({},je),S),className:Se()(le,(y={},Object(ue.a)(y,"".concat(le,"-active"),Ae),Object(ue.a)(y,"".concat(le,"-selected"),ge),Object(ue.a)(y,"".concat(le,"-disabled"),Y),y),R),onClick:De,onKeyDown:Ce,onFocus:Ee}),M,n.createElement(a,{props:Object(oe.a)(Object(oe.a)({},m),{},{isSelected:ge}),icon:me}))};function Le(l){var m=l.eventKey,y=t(),S=d(m);return n.useEffect(function(){if(y)return y.registerPath(m,S),function(){y.unregisterPath(m,S)}},[S]),y?null:n.createElement(Z,l)}var Ue=Le;function rn(l,m){return Object(Pn.a)(l).map(function(y,S){if(n.isValidElement(y)){var R=y.key;return R==null&&(R="tmp_key-".concat([].concat(Object(on.a)(m),[S]).join("-"))),n.cloneElement(y,{key:R,eventKey:R})}return y})}function _e(l){var m=n.useRef(l);m.current=l;var y=n.useCallback(function(){for(var S,R=arguments.length,O=new Array(R),T=0;T<R;T++)O[T]=arguments[T];return(S=m.current)===null||S===void 0?void 0:S.call.apply(S,[m].concat(O))},[]);return l?y:void 0}var Gn=function(m,y){var S=m.className,R=m.children,O=Object(Oe.a)(m,["className","children"]),T=n.useContext(i),N=T.prefixCls,M=T.mode;return n.createElement("ul",Object(B.a)({className:Se()(N,"".concat(N,"-sub"),"".concat(N,"-").concat(M==="inline"?"inline":"vertical"),S)},O,{"data-menu-list":!0,ref:y}),R)},bn=n.forwardRef(Gn);bn.displayName="SubMenuList";var ut=bn,Sr=e("uciX"),$n={adjustX:1,adjustY:1},kt={topLeft:{points:["bl","tl"],overflow:$n,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:$n,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:$n,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:$n,offset:[4,0]}},Fr={topLeft:{points:["bl","tl"],overflow:$n,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:$n,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:$n,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:$n,offset:[4,0]}},pa=kt;function qt(l,m,y){if(m)return m;if(y)return y[l]||y.other}var Rr={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function Dr(l){var m=l.prefixCls,y=l.visible,S=l.children,R=l.popup,O=l.popupClassName,T=l.popupOffset,N=l.disabled,M=l.mode,W=l.onVisibleChange,L=n.useContext(i),U=L.getPopupContainer,J=L.rtl,re=L.subMenuOpenDelay,H=L.subMenuCloseDelay,G=L.builtinPlacements,se=L.triggerSubMenuAction,z=L.forceSubMenuRender,q=L.motion,ne=L.defaultMotions,X=n.useState(!1),ae=Object(V.a)(X,2),k=ae[0],fe=ae[1],_=J?Object(oe.a)(Object(oe.a)({},Fr),G):Object(oe.a)(Object(oe.a)({},kt),G),le=Rr[M],de=qt(M,q,ne),te=Object(oe.a)(Object(oe.a)({},de),{},{leavedClassName:"".concat(m,"-hidden"),removeOnLeave:!1,motionAppear:!0}),Y=n.useRef();return n.useEffect(function(){return Y.current=Object($e.a)(function(){fe(y)}),function(){$e.a.cancel(Y.current)}},[y]),n.createElement(Sr.a,{prefixCls:m,popupClassName:Se()("".concat(m,"-popup"),Object(ue.a)({},"".concat(m,"-rtl"),J),O),stretch:M==="horizontal"?"minWidth":null,getPopupContainer:U,builtinPlacements:_,popupPlacement:le,popupVisible:k,popup:R,popupAlign:T&&{offset:T},action:N?[]:[se],mouseEnterDelay:re,mouseLeaveDelay:H,onPopupVisibleChange:W,forceRender:z,popupMotion:te},S)}var jr=e("8XRh");function Pr(l){var m=l.id,y=l.open,S=l.keyPath,R=l.children,O="inline",T=n.useContext(i),N=T.prefixCls,M=T.forceSubMenuRender,W=T.motion,L=T.defaultMotions,U=T.mode,J=n.useRef(!1);J.current=U===O;var re=n.useState(!J.current),H=Object(V.a)(re,2),G=H[0],se=H[1],z=J.current?y:!1;n.useEffect(function(){J.current&&se(!1)},[U]);var q=Object(oe.a)({},qt(O,W,L));S.length>1&&(q.motionAppear=!1);var ne=q.onVisibleChanged;return q.onVisibleChanged=function(X){return!J.current&&!X&&se(!0),ne==null?void 0:ne(X)},G?null:n.createElement(o,{mode:O,locked:!J.current},n.createElement(jr.default,Object(B.a)({visible:z},q,{forceRender:M,removeOnLeave:!1,leavedClassName:"".concat(N,"-hidden")}),function(X){var ae=X.className,k=X.style;return n.createElement(ut,{id:m,className:ae,style:k},R)}))}var Tr=function(m){var y,S=m.style,R=m.className,O=m.title,T=m.eventKey,N=m.disabled,M=m.internalPopupClose,W=m.children,L=m.itemIcon,U=m.expandIcon,J=m.popupClassName,re=m.popupOffset,H=m.onClick,G=m.onMouseEnter,se=m.onMouseLeave,z=m.onTitleClick,q=m.onTitleMouseEnter,ne=m.onTitleMouseLeave,X=Object(Oe.a)(m,["style","className","title","eventKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"]),ae=$(T),k=n.useContext(i),fe=k.prefixCls,_=k.mode,le=k.openKeys,de=k.disabled,te=k.overflowDisabled,Y=k.activeKey,ie=k.selectedKeys,pe=k.itemIcon,me=k.expandIcon,ye=k.onItemClick,Ae=k.onOpenChange,he=k.onActive,ge=n.useContext(C),je=ge.isSubPathKey,De=d(),Ce="".concat(fe,"-submenu"),Ee=de||N,we=n.useRef(),Ye=n.useRef(),Ie=L||pe,Be=U||me,xe=le.includes(T),Ne=!te&&xe,En=je(ie,T),Qe=A(T,Ee,q,ne),Ve=Qe.active,en=Object(Oe.a)(Qe,["active"]),pn=n.useState(!1),fn=Object(V.a)(pn,2),Fe=fn[0],Ke=fn[1],He=function(We){Ee||Ke(We)},ze=function(We){He(!0),G==null||G({key:T,domEvent:We})},wn=function(We){He(!1),se==null||se({key:T,domEvent:We})},Xn=n.useMemo(function(){return Ve||(_!=="inline"?Fe||je([Y],T):!1)},[_,Ve,Y,Fe,T,je]),In=r(De.length),Ze=function(We){Ee||(z==null||z({key:T,domEvent:We}),_==="inline"&&Ae(T,!xe))},Cn=_e(function(Je){H==null||H(w(Je)),ye(Je)}),nn=function(We){_!=="inline"&&Ae(T,We)},On=function(){he(T)},Ge=ae&&"".concat(ae,"-popup"),ke=n.createElement("div",Object(B.a)({role:"menuitem",style:In,className:"".concat(Ce,"-title"),tabIndex:Ee?null:-1,ref:we,title:typeof O=="string"?O:null,"data-menu-id":te&&ae?null:ae,"aria-expanded":Ne,"aria-haspopup":!0,"aria-controls":Ge,"aria-disabled":Ee,onClick:Ze,onFocus:On},en),O,n.createElement(a,{icon:_!=="horizontal"?Be:null,props:Object(oe.a)(Object(oe.a)({},m),{},{isOpen:Ne,isSubMenu:!0})},n.createElement("i",{className:"".concat(Ce,"-arrow")}))),Sn=n.useRef(_);if(_!=="inline"&&(Sn.current=De.length>1?"vertical":_),!te){var an=Sn.current;ke=n.createElement(Dr,{mode:an,prefixCls:Ce,visible:!M&&Ne&&_!=="inline",popupClassName:J,popupOffset:re,popup:n.createElement(o,{mode:an},n.createElement(ut,{id:Ge,ref:Ye},W)),disabled:Ee,onVisibleChange:nn},ke)}return n.createElement(o,{onItemClick:Cn,mode:_==="horizontal"?"vertical":_,itemIcon:Ie,expandIcon:Be},n.createElement(F.Item,Object(B.a)({role:"none"},X,{component:"li",style:S,className:Se()(Ce,"".concat(Ce,"-").concat(_),R,(y={},Object(ue.a)(y,"".concat(Ce,"-open"),Ne),Object(ue.a)(y,"".concat(Ce,"-active"),Xn),Object(ue.a)(y,"".concat(Ce,"-selected"),En),Object(ue.a)(y,"".concat(Ce,"-disabled"),Ee),y)),onMouseEnter:ze,onMouseLeave:wn}),ke,!te&&n.createElement(Pr,{id:Ge,open:Ne,keyPath:De},W)))};function _t(l){var m=l.eventKey,y=l.children,S=d(m),R=rn(y,S),O=t();n.useEffect(function(){if(O)return O.registerPath(m,S),function(){O.unregisterPath(m,S)}},[S]);var T;return O?T=R:T=n.createElement(Tr,l,R),n.createElement(h.Provider,{value:S},T)}var Ar=e("x/xZ");function er(l){var m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Object(Ar.a)(l)){var y=l.nodeName.toLowerCase(),S=["input","select","textarea","button"].includes(y)||l.isContentEditable||y==="a"&&!!l.getAttribute("href"),R=l.getAttribute("tabindex"),O=Number(R),T=null;return R&&!Number.isNaN(O)?T=O:S&&T===null&&(T=0),S&&l.disabled&&(T=null),T!==null&&(T>=0||m&&T<0)}return!1}function nr(l){var m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,y=Object(on.a)(l.querySelectorAll("*")).filter(function(S){return er(S,m)});return er(l,m)&&y.unshift(l),y}var St=null;function fa(){St=document.activeElement}function ha(){St=null}function va(){if(St)try{St.focus()}catch(l){}}function ga(l,m){if(m.keyCode===9){var y=nr(l),S=y[m.shiftKey?0:y.length-1],R=S===document.activeElement||l===document.activeElement;if(R){var O=y[m.shiftKey?y.length-1:0];O.focus(),m.preventDefault()}}}var Wt=Te.a.LEFT,Lt=Te.a.RIGHT,xt=Te.a.UP,Ft=Te.a.DOWN,Rt=Te.a.ENTER,tr=Te.a.ESC,rr=[xt,Ft,Wt,Lt];function Nr(l,m,y,S){var R,O,T,N,M="prev",W="next",L="children",U="parent";if(l==="inline"&&S===Rt)return{inlineTrigger:!0};var J=(R={},Object(ue.a)(R,xt,M),Object(ue.a)(R,Ft,W),R),re=(O={},Object(ue.a)(O,Wt,y?W:M),Object(ue.a)(O,Lt,y?M:W),Object(ue.a)(O,Ft,L),Object(ue.a)(O,Rt,L),O),H=(T={},Object(ue.a)(T,xt,M),Object(ue.a)(T,Ft,W),Object(ue.a)(T,Rt,L),Object(ue.a)(T,tr,U),Object(ue.a)(T,Wt,y?L:U),Object(ue.a)(T,Lt,y?U:L),T),G={inline:J,horizontal:re,vertical:H,inlineSub:J,horizontalSub:H,verticalSub:H},se=(N=G["".concat(l).concat(m?"":"Sub")])===null||N===void 0?void 0:N[S];switch(se){case M:return{offset:-1,sibling:!0};case W:return{offset:1,sibling:!0};case U:return{offset:-1,sibling:!1};case L:return{offset:1,sibling:!1};default:return null}}function wr(l){for(var m=l;m;){if(m.getAttribute("data-menu-list"))return m;m=m.parentElement}return null}function Ir(l,m){for(var y=l||document.activeElement;y;){if(m.has(y))return y;y=y.parentElement}return null}function Br(l,m){var y=nr(l,!0);return y.filter(function(S){return m.has(S)})}function ar(l,m,y){var S=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!l)return null;var R=Br(l,m),O=R.length,T=R.findIndex(function(N){return y===N});return S<0?T===-1?T=O-1:T-=1:S>0&&(T+=1),T=(T+O)%O,R[T]}function Mr(l,m,y,S,R,O,T,N,M,W){var L=n.useRef(),U=n.useRef();U.current=m;var J=function(){$e.a.cancel(L.current)};return n.useEffect(function(){return function(){J()}},[]),function(re){var H=re.which;if([].concat(rr,[Rt,tr]).includes(H)){var G,se,z,q=function(){G=new Set,se=new Map,z=new Map;var pe=O();return pe.forEach(function(me){var ye=document.querySelector("[data-menu-id='".concat(I(S,me),"']"));ye&&(G.add(ye),z.set(ye,me),se.set(me,ye))}),G};q();var ne=se.get(m),X=Ir(ne,G),ae=z.get(X),k=Nr(l,T(ae,!0).length===1,y,H);if(!k)return;rr.includes(H)&&re.preventDefault();var fe=function(pe){if(pe){var me=pe,ye=pe.querySelector("a");(ye==null?void 0:ye.getAttribute("href"))&&(me=ye);var Ae=z.get(pe);N(Ae),J(),L.current=Object($e.a)(function(){U.current===Ae&&me.focus()})}};if(k.sibling||!X){var _;!X||l==="inline"?_=R.current:_=wr(X);var le=ar(_,G,X,k.offset);fe(le)}else if(k.inlineTrigger)M(ae);else if(k.offset>0)M(ae,!0),J(),L.current=Object($e.a)(function(){q();var ie=X.getAttribute("aria-controls"),pe=document.getElementById(ie),me=ar(pe,G);fe(me)},5);else if(k.offset<0){var de=T(ae,!0),te=de[de.length-2],Y=se.get(te);M(te,!1),fe(Y)}}W==null||W(re)}}var Kr=Math.random().toFixed(5).toString().slice(2),sr=0;function Wr(l){var m=Object(gn.a)(l,{value:l}),y=Object(V.a)(m,2),S=y[0],R=y[1];return n.useEffect(function(){sr+=1;var O="".concat(Kr,"-").concat(sr);R("rc-menu-uuid-".concat(O))},[]),S}var ya=e("p8sG");function Lr(l){Promise.resolve().then(l)}var $t="__RC_UTIL_PATH_SPLIT__",ir=function(m){return m.join($t)},xr=function(m){return m.split($t)},Vt="rc-menu-more";function $r(){var l=n.useState({}),m=Object(V.a)(l,2),y=m[1],S=Object(n.useRef)(new Map),R=Object(n.useRef)(new Map),O=n.useState([]),T=Object(V.a)(O,2),N=T[0],M=T[1],W=Object(n.useRef)(0),L=Object(n.useCallback)(function(z,q){var ne=ir(q);R.current.set(ne,z),S.current.set(z,ne),W.current+=1;var X=W.current;Lr(function(){X===W.current&&y({})})},[]),U=Object(n.useCallback)(function(z,q){var ne=ir(q);R.current.delete(ne),S.current.delete(z)},[]),J=Object(n.useCallback)(function(z){M(z)},[]),re=Object(n.useCallback)(function(z,q){var ne=S.current.get(z)||"",X=xr(ne);return q&&N.includes(X[0])&&X.unshift(Vt),X},[N]),H=Object(n.useCallback)(function(z,q){return z.some(function(ne){var X=re(ne,!0);return X.includes(q)})},[re]),G=function(){var q=Object(on.a)(S.current.keys());return N.length&&q.push(Vt),q},se=Object(n.useCallback)(function(z){var q="".concat(S.current.get(z)).concat($t),ne=new Set;return Object(on.a)(R.current.keys()).forEach(function(X){X.startsWith(q)&&ne.add(R.current.get(X))}),ne},[]);return{registerPath:L,unregisterPath:U,refreshOverflowKeys:J,isSubPathKey:H,getKeyPath:re,getKeys:G,getSubPathKeys:se}}var Dt=[],Vr=function(m){var y,S,R=m.prefixCls,O=R===void 0?"rc-menu":R,T=m.style,N=m.className,M=m.tabIndex,W=M===void 0?0:M,L=m.children,U=m.direction,J=m.id,re=m.mode,H=re===void 0?"vertical":re,G=m.inlineCollapsed,se=m.disabled,z=m.disabledOverflow,q=m.subMenuOpenDelay,ne=q===void 0?.1:q,X=m.subMenuCloseDelay,ae=X===void 0?.1:X,k=m.forceSubMenuRender,fe=m.defaultOpenKeys,_=m.openKeys,le=m.activeKey,de=m.defaultActiveFirst,te=m.selectable,Y=te===void 0?!0:te,ie=m.multiple,pe=ie===void 0?!1:ie,me=m.defaultSelectedKeys,ye=m.selectedKeys,Ae=m.onSelect,he=m.onDeselect,ge=m.inlineIndent,je=ge===void 0?24:ge,De=m.motion,Ce=m.defaultMotions,Ee=m.triggerSubMenuAction,we=Ee===void 0?"hover":Ee,Ye=m.builtinPlacements,Ie=m.itemIcon,Be=m.expandIcon,xe=m.overflowedIndicator,Ne=xe===void 0?"...":xe,En=m.getPopupContainer,Qe=m.onClick,Ve=m.onOpenChange,en=m.onKeyDown,pn=m.openAnimation,fn=m.openTransitionName,Fe=Object(Oe.a)(m,["prefixCls","style","className","tabIndex","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName"]),Ke=rn(L,Dt),He=n.useState(!1),ze=Object(V.a)(He,2),wn=ze[0],Xn=ze[1],In=n.useRef(),Ze=Wr(J),Cn=U==="rtl",nn=n.useMemo(function(){return H==="inline"&&G?["vertical",G]:[H,!1]},[H,G]),On=Object(V.a)(nn,2),Ge=On[0],ke=On[1],Sn=n.useState(0),an=Object(V.a)(Sn,2),Je=an[0],We=an[1],Qn=Je>=Ke.length-1||Ge!=="horizontal"||z,Zn=Object(gn.a)(fe,{value:_,postState:function(Q){return Q||Dt}}),dt=Object(V.a)(Zn,2),hn=dt[0],dn=dt[1],kn=n.useState(hn),vn=Object(V.a)(kn,2),sn=vn[0],qn=vn[1],Fn=Ge==="inline",_n=n.useRef(!1);n.useEffect(function(){Fn&&qn(hn)},[hn]),n.useEffect(function(){if(!_n.current){_n.current=!0;return}if(Fn)dn(sn);else{var ee=[];dn(ee),Ve==null||Ve(ee)}},[Fn]);var tn=$r(),Rn=tn.registerPath,ce=tn.unregisterPath,be=tn.refreshOverflowKeys,Pe=tn.isSubPathKey,Xe=tn.getKeyPath,et=tn.getKeys,Pt=tn.getSubPathKeys,Yt=n.useMemo(function(){return{registerPath:Rn,unregisterPath:ce}},[Rn,ce]),Ht=n.useMemo(function(){return{isSubPathKey:Pe}},[Pe]);n.useEffect(function(){be(Qn?Dt:Ke.slice(Je+1).map(function(ee){return ee.key}))},[Je,Qn]);var Gt=Object(gn.a)(le||de&&((y=Ke[0])===null||y===void 0?void 0:y.key),{value:le}),ct=Object(V.a)(Gt,2),Tt=ct[0],yt=ct[1],At=_e(function(ee){yt(ee)}),Xt=_e(function(){yt(void 0)}),Nt=Object(gn.a)(me||[],{value:ye,postState:function(Q){return Array.isArray(Q)?Q:Q==null?Dt:[Q]}}),wt=Object(V.a)(Nt,2),mt=wt[0],Dn=wt[1],It=function(Q){if(!!Y){var ve=Q.key,Me=mt.includes(ve),qe;Me?qe=mt.filter(function(tt){return tt!==ve}):pe?qe=[].concat(Object(on.a)(mt),[ve]):qe=[ve],Dn(qe);var Vn=Object(oe.a)(Object(oe.a)({},Q),{},{selectedKeys:qe});Me?he==null||he(Vn):Ae==null||Ae(Vn)}},Bt=_e(function(ee){Qe==null||Qe(w(ee)),It(ee)}),bt=_e(function(ee,Q){var ve=hn.filter(function(qe){return qe!==ee});if(Q)ve.push(ee);else if(Ge!=="inline"){var Me=Pt(ee);ve=ve.filter(function(qe){return!Me.has(qe)})}it()(hn,ve)||(dn(ve),Ve==null||Ve(ve))}),nt=_e(En),Et=function(Q,ve){var Me=ve!=null?ve:!hn.includes(Q);bt(Q,Me)},Ct=Mr(Ge,Tt,Cn,Ze,In,et,Xe,yt,Et,en);n.useEffect(function(){Xn(!0)},[]);var Mt=Ge!=="horizontal"||z?Ke:Ke.map(function(ee,Q){return n.createElement(o,{key:ee.key,overflowDisabled:Q>Je},ee)}),Kt=n.createElement(F,Object(B.a)({id:J,ref:In,prefixCls:"".concat(O,"-overflow"),component:"ul",itemComponent:Ue,className:Se()(O,"".concat(O,"-root"),"".concat(O,"-").concat(Ge),N,(S={},Object(ue.a)(S,"".concat(O,"-inline-collapsed"),ke),Object(ue.a)(S,"".concat(O,"-rtl"),Cn),S)),dir:U,style:T,role:"menu",tabIndex:W,data:Mt,renderRawItem:function(Q){return Q},renderRawRest:function(Q){var ve=Q.length,Me=ve?Ke.slice(-ve):null;return n.createElement(_t,{eventKey:Vt,title:Ne,disabled:Qn,internalPopupClose:ve===0},Me)},maxCount:Ge!=="horizontal"||z?F.INVALIDATE:F.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(Q){We(Q)},onKeyDown:Ct},Fe));return n.createElement(D.Provider,{value:Ze},n.createElement(o,{prefixCls:O,mode:Ge,openKeys:hn,rtl:Cn,disabled:se,motion:wn?De:null,defaultMotions:wn?Ce:null,activeKey:Tt,onActive:At,onInactive:Xt,selectedKeys:mt,inlineIndent:je,subMenuOpenDelay:ne,subMenuCloseDelay:ae,forceSubMenuRender:k,builtinPlacements:Ye,triggerSubMenuAction:we,getPopupContainer:nt,itemIcon:Ie,expandIcon:Be,onItemClick:Bt,onOpenChange:bt},n.createElement(C.Provider,{value:Ht},Kt),n.createElement(c.Provider,{value:Yt},Ke)))},zr=Vr,Jr=function(m){var y=m.className,S=m.title,R=m.eventKey,O=m.children,T=Object(Oe.a)(m,["className","title","eventKey","children"]),N=n.useContext(i),M=N.prefixCls,W="".concat(M,"-item-group");return n.createElement("li",Object(B.a)({},T,{onClick:function(U){return U.stopPropagation()},className:Se()(W,y)}),n.createElement("div",{className:"".concat(W,"-title"),title:typeof S=="string"?S:void 0},S),n.createElement("ul",{className:"".concat(W,"-list")},O))};function Ur(l){var m=l.children,y=Object(Oe.a)(l,["children"]),S=d(y.eventKey),R=rn(m,S),O=t();return O?R:n.createElement(Jr,y,R)}function Yr(l){var m=l.className,y=l.style,S=n.useContext(i),R=S.prefixCls,O=t();return O?null:n.createElement("li",{className:Se()("".concat(R,"-item-divider"),m),style:y})}var gt=zr;gt.Item=Ue,gt.SubMenu=_t,gt.ItemGroup=Ur,gt.Divider=Yr;var Hr=gt,Gr=e("eDIo");function Xr(l,m){var y=l.prefixCls,S=l.editable,R=l.locale,O=l.style;return!S||S.showAdd===!1?null:n.createElement("button",{ref:m,type:"button",className:"".concat(y,"-nav-add"),style:O,"aria-label":(R==null?void 0:R.addAriaLabel)||"Add tab",onClick:function(N){S.onEdit("add",{event:N})}},S.addIcon||"+")}var or=n.forwardRef(Xr);function Qr(l,m){var y=l.prefixCls,S=l.id,R=l.tabs,O=l.locale,T=l.mobile,N=l.moreIcon,M=N===void 0?"More":N,W=l.moreTransitionName,L=l.style,U=l.className,J=l.editable,re=l.tabBarGutter,H=l.rtl,G=l.onTabClick,se=Object(n.useState)(!1),z=Object(V.a)(se,2),q=z[0],ne=z[1],X=Object(n.useState)(null),ae=Object(V.a)(X,2),k=ae[0],fe=ae[1],_="".concat(S,"-more-popup"),le="".concat(y,"-dropdown"),de=k!==null?"".concat(_,"-").concat(k):null,te=O==null?void 0:O.dropdownAriaLabel,Y=n.createElement(Hr,{onClick:function(ge){var je=ge.key,De=ge.domEvent;G(je,De),ne(!1)},id:_,tabIndex:-1,role:"listbox","aria-activedescendant":de,selectedKeys:[k],"aria-label":te!==void 0?te:"expanded dropdown"},R.map(function(he){return n.createElement(Ue,{key:he.key,id:"".concat(_,"-").concat(he.key),role:"option","aria-controls":S&&"".concat(S,"-panel-").concat(he.key),disabled:he.disabled},he.tab)}));function ie(he){for(var ge=R.filter(function(we){return!we.disabled}),je=ge.findIndex(function(we){return we.key===k})||0,De=ge.length,Ce=0;Ce<De;Ce+=1){je=(je+he+De)%De;var Ee=ge[je];if(!Ee.disabled){fe(Ee.key);return}}}function pe(he){var ge=he.which;if(!q){[Te.a.DOWN,Te.a.SPACE,Te.a.ENTER].includes(ge)&&(ne(!0),he.preventDefault());return}switch(ge){case Te.a.UP:ie(-1),he.preventDefault();break;case Te.a.DOWN:ie(1),he.preventDefault();break;case Te.a.ESC:ne(!1);break;case Te.a.SPACE:case Te.a.ENTER:k!==null&&G(k,he);break}}Object(n.useEffect)(function(){var he=document.getElementById(de);he&&he.scrollIntoView&&he.scrollIntoView(!1)},[k]),Object(n.useEffect)(function(){q||fe(null)},[q]);var me=Object(ue.a)({},H?"marginLeft":"marginRight",re);R.length||(me.visibility="hidden",me.order=1);var ye=Se()(Object(ue.a)({},"".concat(le,"-rtl"),H)),Ae=T?null:n.createElement(Gr.default,{prefixCls:le,overlay:Y,trigger:["hover"],visible:q,transitionName:W,onVisibleChange:ne,overlayClassName:ye,mouseEnterDelay:.1,mouseLeaveDelay:.1},n.createElement("button",{type:"button",className:"".concat(y,"-nav-more"),style:me,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":_,id:"".concat(S,"-more"),"aria-expanded":q,onKeyDown:pe},M));return n.createElement("div",{className:Se()("".concat(y,"-nav-operations"),U),style:L,ref:m},Ae,n.createElement(or,{prefixCls:y,locale:O,editable:J}))}var Zr=n.forwardRef(Qr),zt=Object(n.createContext)(null),kr=.1,lr=.01,jt=20,ur=Math.pow(.995,jt);function qr(l,m){var y=Object(n.useState)(),S=Object(V.a)(y,2),R=S[0],O=S[1],T=Object(n.useState)(0),N=Object(V.a)(T,2),M=N[0],W=N[1],L=Object(n.useState)(0),U=Object(V.a)(L,2),J=U[0],re=U[1],H=Object(n.useState)(),G=Object(V.a)(H,2),se=G[0],z=G[1],q=Object(n.useRef)();function ne(le){var de=le.touches[0],te=de.screenX,Y=de.screenY;O({x:te,y:Y}),window.clearInterval(q.current)}function X(le){if(!!R){le.preventDefault();var de=le.touches[0],te=de.screenX,Y=de.screenY;O({x:te,y:Y});var ie=te-R.x,pe=Y-R.y;m(ie,pe);var me=Date.now();W(me),re(me-M),z({x:ie,y:pe})}}function ae(){if(!!R&&(O(null),z(null),se)){var le=se.x/J,de=se.y/J,te=Math.abs(le),Y=Math.abs(de);if(Math.max(te,Y)<kr)return;var ie=le,pe=de;q.current=window.setInterval(function(){if(Math.abs(ie)<lr&&Math.abs(pe)<lr){window.clearInterval(q.current);return}ie*=ur,pe*=ur,m(ie*jt,pe*jt)},jt)}}var k=Object(n.useRef)();function fe(le){var de=le.deltaX,te=le.deltaY,Y=0,ie=Math.abs(de),pe=Math.abs(te);ie===pe?Y=k.current==="x"?de:te:ie>pe?(Y=de,k.current="x"):(Y=te,k.current="y"),m(-Y,-Y)&&le.preventDefault()}var _=Object(n.useRef)(null);_.current={onTouchStart:ne,onTouchMove:X,onTouchEnd:ae,onWheel:fe},n.useEffect(function(){function le(ie){_.current.onTouchStart(ie)}function de(ie){_.current.onTouchMove(ie)}function te(ie){_.current.onTouchEnd(ie)}function Y(ie){_.current.onWheel(ie)}return document.addEventListener("touchmove",de,{passive:!1}),document.addEventListener("touchend",te,{passive:!1}),l.current.addEventListener("touchstart",le,{passive:!1}),l.current.addEventListener("wheel",Y),function(){document.removeEventListener("touchmove",de),document.removeEventListener("touchend",te)}},[])}function _r(){var l=Object(n.useRef)(new Map);function m(S){return l.current.has(S)||l.current.set(S,n.createRef()),l.current.get(S)}function y(S){l.current.delete(S)}return[m,y]}function dr(l,m){var y=n.useRef(l),S=n.useState({}),R=Object(V.a)(S,2),O=R[1];function T(N){var M=typeof N=="function"?N(y.current):N;M!==y.current&&m(M,y.current),y.current=M,O({})}return[y.current,T]}var cr=function(m){var y=m.position,S=m.prefixCls,R=m.extra;if(!R)return null;var O,T=R;return y==="right"&&(O=T.right||!T.left&&T||null),y==="left"&&(O=T.left||null),O?n.createElement("div",{className:"".concat(S,"-extra-content")},O):null};function ea(l,m){var y,S=n.useContext(zt),R=S.prefixCls,O=S.tabs,T=l.className,N=l.style,M=l.id,W=l.animated,L=l.activeKey,U=l.rtl,J=l.extra,re=l.editable,H=l.locale,G=l.tabPosition,se=l.tabBarGutter,z=l.children,q=l.onTabClick,ne=l.onTabScroll,X=Object(n.useRef)(),ae=Object(n.useRef)(),k=Object(n.useRef)(),fe=Object(n.useRef)(),_=_r(),le=Object(V.a)(_,2),de=le[0],te=le[1],Y=G==="top"||G==="bottom",ie=dr(0,function(ee,Q){Y&&ne&&ne({direction:ee>Q?"left":"right"})}),pe=Object(V.a)(ie,2),me=pe[0],ye=pe[1],Ae=dr(0,function(ee,Q){!Y&&ne&&ne({direction:ee>Q?"top":"bottom"})}),he=Object(V.a)(Ae,2),ge=he[0],je=he[1],De=Object(n.useState)(0),Ce=Object(V.a)(De,2),Ee=Ce[0],we=Ce[1],Ye=Object(n.useState)(0),Ie=Object(V.a)(Ye,2),Be=Ie[0],xe=Ie[1],Ne=Object(n.useState)(0),En=Object(V.a)(Ne,2),Qe=En[0],Ve=En[1],en=Object(n.useState)(0),pn=Object(V.a)(en,2),fn=pn[0],Fe=pn[1],Ke=Object(n.useState)(null),He=Object(V.a)(Ke,2),ze=He[0],wn=He[1],Xn=Object(n.useState)(null),In=Object(V.a)(Xn,2),Ze=In[0],Cn=In[1],nn=Object(n.useState)(0),On=Object(V.a)(nn,2),Ge=On[0],ke=On[1],Sn=Object(n.useState)(0),an=Object(V.a)(Sn,2),Je=an[0],We=an[1],Qn=yn(new Map),Zn=Object(V.a)(Qn,2),dt=Zn[0],hn=Zn[1],dn=pt(O,dt,Ee),kn="".concat(R,"-nav-operations-hidden"),vn=0,sn=0;Y?U?(vn=0,sn=Math.max(0,Ee-ze)):(vn=Math.min(0,ze-Ee),sn=0):(vn=Math.min(0,Ze-Be),sn=0);function qn(ee){return ee<vn?vn:ee>sn?sn:ee}var Fn=Object(n.useRef)(),_n=Object(n.useState)(),tn=Object(V.a)(_n,2),Rn=tn[0],ce=tn[1];function be(){ce(Date.now())}function Pe(){window.clearTimeout(Fn.current)}qr(X,function(ee,Q){function ve(Me,qe){Me(function(Vn){var tt=qn(Vn+qe);return tt})}if(Y){if(ze>=Ee)return!1;ve(ye,ee)}else{if(Ze>=Be)return!1;ve(je,Q)}return Pe(),be(),!0}),Object(n.useEffect)(function(){return Pe(),Rn&&(Fn.current=window.setTimeout(function(){ce(0)},100)),Pe},[Rn]);function Xe(){var ee=arguments.length>0&&arguments[0]!==void 0?arguments[0]:L,Q=dn.get(ee)||{width:0,height:0,left:0,right:0,top:0};if(Y){var ve=me;U?Q.right<me?ve=Q.right:Q.right+Q.width>me+ze&&(ve=Q.right+Q.width-ze):Q.left<-me?ve=-Q.left:Q.left+Q.width>-me+ze&&(ve=-(Q.left+Q.width-ze)),je(0),ye(qn(ve))}else{var Me=ge;Q.top<-ge?Me=-Q.top:Q.top+Q.height>-ge+Ze&&(Me=-(Q.top+Q.height-Ze)),ye(0),je(qn(Me))}}var et=ft(dn,{width:ze,height:Ze,left:me,top:ge},{width:Qe,height:fn},{width:Ge,height:Je},Object(oe.a)(Object(oe.a)({},l),{},{tabs:O})),Pt=Object(V.a)(et,2),Yt=Pt[0],Ht=Pt[1],Gt=O.map(function(ee){var Q=ee.key;return n.createElement(Mn,{id:M,prefixCls:R,key:Q,rtl:U,tab:ee,closable:ee.closable,editable:re,active:Q===L,tabPosition:G,tabBarGutter:se,renderWrapper:z,removeAriaLabel:H==null?void 0:H.removeAriaLabel,ref:de(Q),onClick:function(Me){q(Q,Me)},onRemove:function(){te(Q)},onFocus:function(){Xe(Q),be(),U||(X.current.scrollLeft=0),X.current.scrollTop=0}})}),ct=An(function(){var ee,Q,ve,Me,qe,Vn,tt,Qt,Zt,la=((ee=X.current)===null||ee===void 0?void 0:ee.offsetWidth)||0,ua=((Q=X.current)===null||Q===void 0?void 0:Q.offsetHeight)||0,vr=((ve=fe.current)===null||ve===void 0?void 0:ve.offsetWidth)||0,gr=((Me=fe.current)===null||Me===void 0?void 0:Me.offsetHeight)||0,da=((qe=k.current)===null||qe===void 0?void 0:qe.offsetWidth)||0,ca=((Vn=k.current)===null||Vn===void 0?void 0:Vn.offsetHeight)||0;wn(la),Cn(ua),ke(vr),We(gr);var yr=(((tt=ae.current)===null||tt===void 0?void 0:tt.offsetWidth)||0)-vr,br=(((Qt=ae.current)===null||Qt===void 0?void 0:Qt.offsetHeight)||0)-gr;we(yr),xe(br);var Er=(Zt=k.current)===null||Zt===void 0?void 0:Zt.className.includes(kn);Ve(yr-(Er?0:da)),Fe(br-(Er?0:ca)),hn(function(){var Cr=new Map;return O.forEach(function(ma){var Or=ma.key,Ot=de(Or).current;Ot&&Cr.set(Or,{width:Ot.offsetWidth,height:Ot.offsetHeight,left:Ot.offsetLeft,top:Ot.offsetTop})}),Cr})}),Tt=O.slice(0,Yt),yt=O.slice(Ht+1),At=[].concat(Object(on.a)(Tt),Object(on.a)(yt)),Xt=Object(n.useState)(),Nt=Object(V.a)(Xt,2),wt=Nt[0],mt=Nt[1],Dn=dn.get(L),It=Object(n.useRef)();function Bt(){$e.a.cancel(It.current)}Object(n.useEffect)(function(){var ee={};return Dn&&(Y?(U?ee.right=Dn.right:ee.left=Dn.left,ee.width=Dn.width):(ee.top=Dn.top,ee.height=Dn.height)),Bt(),It.current=Object($e.a)(function(){mt(ee)}),Bt},[Dn,Y,U]),Object(n.useEffect)(function(){Xe()},[L,Dn,dn,Y]),Object(n.useEffect)(function(){ct()},[U,se,L,O.map(function(ee){return ee.key}).join("_")]);var bt=!!At.length,nt="".concat(R,"-nav-wrap"),Et,Ct,Mt,Kt;return Y?U?(Ct=me>0,Et=me+ze<Ee):(Et=me<0,Ct=-me+ze<Ee):(Mt=ge<0,Kt=-ge+Ze<Be),n.createElement("div",{ref:m,role:"tablist",className:Se()("".concat(R,"-nav"),T),style:N,onKeyDown:function(){be()}},n.createElement(cr,{position:"left",extra:J,prefixCls:R}),n.createElement(Bn.default,{onResize:ct},n.createElement("div",{className:Se()(nt,(y={},Object(ue.a)(y,"".concat(nt,"-ping-left"),Et),Object(ue.a)(y,"".concat(nt,"-ping-right"),Ct),Object(ue.a)(y,"".concat(nt,"-ping-top"),Mt),Object(ue.a)(y,"".concat(nt,"-ping-bottom"),Kt),y)),ref:X},n.createElement(Bn.default,{onResize:ct},n.createElement("div",{ref:ae,className:"".concat(R,"-nav-list"),style:{transform:"translate(".concat(me,"px, ").concat(ge,"px)"),transition:Rn?"none":void 0}},Gt,n.createElement(or,{ref:fe,prefixCls:R,locale:H,editable:re,style:{visibility:bt?"hidden":null}}),n.createElement("div",{className:Se()("".concat(R,"-ink-bar"),Object(ue.a)({},"".concat(R,"-ink-bar-animated"),W.inkBar)),style:wt}))))),n.createElement(Zr,Object(B.a)({},l,{ref:k,prefixCls:R,tabs:At,className:!bt&&kn})),n.createElement(cr,{position:"right",extra:J,prefixCls:R}))}var mr=n.forwardRef(ea);function na(l){var m=l.id,y=l.activeKey,S=l.animated,R=l.tabPosition,O=l.rtl,T=l.destroyInactiveTabPane,N=n.useContext(zt),M=N.prefixCls,W=N.tabs,L=S.tabPane,U=W.findIndex(function(J){return J.key===y});return n.createElement("div",{className:Se()("".concat(M,"-content-holder"))},n.createElement("div",{className:Se()("".concat(M,"-content"),"".concat(M,"-content-").concat(R),Object(ue.a)({},"".concat(M,"-content-animated"),L)),style:U&&L?Object(ue.a)({},O?"marginRight":"marginLeft","-".concat(U,"00%")):null},W.map(function(J){return n.cloneElement(J.node,{key:J.key,prefixCls:M,tabKey:J.key,id:m,animated:L,active:J.key===y,destroyInactiveTabPane:T})})))}function pr(l){var m=l.prefixCls,y=l.forceRender,S=l.className,R=l.style,O=l.id,T=l.active,N=l.animated,M=l.destroyInactiveTabPane,W=l.tabKey,L=l.children,U=n.useState(y),J=Object(V.a)(U,2),re=J[0],H=J[1];n.useEffect(function(){T?H(!0):M&&H(!1)},[T,M]);var G={};return T||(N?(G.visibility="hidden",G.height=0,G.overflowY="hidden"):G.display="none"),n.createElement("div",{id:O&&"".concat(O,"-panel-").concat(W),role:"tabpanel",tabIndex:T?0:-1,"aria-labelledby":O&&"".concat(O,"-tab-").concat(W),"aria-hidden":!T,style:Object(oe.a)(Object(oe.a)({},G),R),className:Se()("".concat(m,"-tabpane"),T&&"".concat(m,"-tabpane-active"),S)},(T||re||y)&&L)}var fr=0;function ta(l){return Object(Pn.a)(l).map(function(m){if(n.isValidElement(m)){var y=m.key!==void 0?String(m.key):void 0;return Object(oe.a)(Object(oe.a)({key:y},m.props),{},{node:m})}return null}).filter(function(m){return m})}function ra(l,m){var y,S=l.id,R=l.prefixCls,O=R===void 0?"rc-tabs":R,T=l.className,N=l.children,M=l.direction,W=l.activeKey,L=l.defaultActiveKey,U=l.editable,J=l.animated,re=J===void 0?{inkBar:!0,tabPane:!1}:J,H=l.tabPosition,G=H===void 0?"top":H,se=l.tabBarGutter,z=l.tabBarStyle,q=l.tabBarExtraContent,ne=l.locale,X=l.moreIcon,ae=l.moreTransitionName,k=l.destroyInactiveTabPane,fe=l.renderTabBar,_=l.onChange,le=l.onTabClick,de=l.onTabScroll,te=Object(Oe.a)(l,["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"]),Y=ta(N),ie=M==="rtl",pe;re===!1?pe={inkBar:!1,tabPane:!1}:re===!0?pe={inkBar:!0,tabPane:!0}:pe=Object(oe.a)({inkBar:!0,tabPane:!1},Object(Re.a)(re)==="object"?re:{});var me=Object(n.useState)(!1),ye=Object(V.a)(me,2),Ae=ye[0],he=ye[1];Object(n.useEffect)(function(){he(Object(Tn.a)())},[]);var ge=Object(gn.a)(function(){var Fe;return(Fe=Y[0])===null||Fe===void 0?void 0:Fe.key},{value:W,defaultValue:L}),je=Object(V.a)(ge,2),De=je[0],Ce=je[1],Ee=Object(n.useState)(function(){return Y.findIndex(function(Fe){return Fe.key===De})}),we=Object(V.a)(Ee,2),Ye=we[0],Ie=we[1];Object(n.useEffect)(function(){var Fe=Y.findIndex(function(He){return He.key===De});if(Fe===-1){var Ke;Fe=Math.max(0,Math.min(Ye,Y.length-1)),Ce((Ke=Y[Fe])===null||Ke===void 0?void 0:Ke.key)}Ie(Fe)},[Y.map(function(Fe){return Fe.key}).join("_"),De,Ye]);var Be=Object(gn.a)(null,{value:S}),xe=Object(V.a)(Be,2),Ne=xe[0],En=xe[1],Qe=G;Ae&&!["left","right"].includes(G)&&(Qe="top"),Object(n.useEffect)(function(){S||(En("rc-tabs-".concat(fr)),fr+=1)},[]);function Ve(Fe,Ke){le==null||le(Fe,Ke),Ce(Fe),_==null||_(Fe)}var en={id:Ne,activeKey:De,animated:pe,tabPosition:Qe,rtl:ie,mobile:Ae},pn,fn=Object(oe.a)(Object(oe.a)({},en),{},{editable:U,locale:ne,moreIcon:X,moreTransitionName:ae,tabBarGutter:se,onTabClick:Ve,onTabScroll:de,extra:q,style:z,panes:N});return fe?pn=fe(fn,mr):pn=n.createElement(mr,fn),n.createElement(zt.Provider,{value:{tabs:Y,prefixCls:O}},n.createElement("div",Object(B.a)({ref:m,id:S,className:Se()(O,"".concat(O,"-").concat(Qe),(y={},Object(ue.a)(y,"".concat(O,"-mobile"),Ae),Object(ue.a)(y,"".concat(O,"-editable"),U),Object(ue.a)(y,"".concat(O,"-rtl"),ie),y),T)},te),pn,n.createElement(na,Object(B.a)({destroyInactiveTabPane:k},en,{animated:pe}))))}var hr=n.forwardRef(ra);hr.TabPane=pr;var aa=hr,sa=aa,Jt=e("MZF8"),un=e("dEAq"),ia=e("ZpkN"),ba=e("TIsu");function Ut(l,m){var y,S=(y=l.match(/\.(\w+)$/))===null||y===void 0?void 0:y[1];return S||(S=m.tsx?"tsx":"jsx"),S}var oa=l=>{var m,y,S,R=Object(n.useRef)(),O=Object(n.useContext)(un.context),T=O.locale,N=Object(un.useLocaleProps)(T,l),M=Object(un.useDemoUrl)(N.identifier),W=N.demoUrl||M,L=(Jt.a===null||Jt.a===void 0?void 0:Jt.a.location.hash)==="#".concat(N.identifier),U=Object.keys(N.sources).length===1,J=Object(un.useCodeSandbox)((m=N.hideActions)!==null&&m!==void 0&&m.includes("CSB")?null:N),re=Object(un.useRiddle)((y=N.hideActions)!==null&&y!==void 0&&y.includes("RIDDLE")?null:N),H=Object(un.useMotions)(N.motions||[],R.current),G=Object(K.default)(H,2),se=G[0],z=G[1],q=Object(un.useCopy)(),ne=Object(K.default)(q,2),X=ne[0],ae=ne[1],k=Object(n.useState)("_"),fe=Object(K.default)(k,2),_=fe[0],le=fe[1],de=Object(n.useState)(Ut(_,N.sources[_])),te=Object(K.default)(de,2),Y=te[0],ie=te[1],pe=Object(n.useState)(Boolean(N.defaultShowCode)),me=Object(K.default)(pe,2),ye=me[0],Ae=me[1],he=Object(n.useState)(Math.random()),ge=Object(K.default)(he,2),je=ge[0],De=ge[1],Ce=N.sources[_][Y]||N.sources[_].content,Ee=Object(un.useTSPlaygroundUrl)(T,Ce),we=Object(n.useRef)(),Ye=Object(un.usePrefersColor)(),Ie=Object(K.default)(Ye,1),Be=Ie[0];Object(n.useEffect)(()=>{De(Math.random())},[Be]);function xe(Ne){le(Ne),ie(Ut(Ne,N.sources[Ne]))}return g.a.createElement("div",{style:N.style,className:[N.className,"__dumi-default-previewer",L?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:N.identifier,"data-debug":N.debug||void 0,"data-iframe":N.iframe||void 0},N.iframe&&g.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),g.a.createElement("div",{ref:R,className:"__dumi-default-previewer-demo",style:{transform:N.transform?"translate(0, 0)":void 0,padding:N.compact||N.iframe&&N.compact!==!1?"0":void 0,background:N.background}},N.iframe?g.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(N.iframe).replace(/(\d)$/,"$1px")},key:je,src:W,ref:we}):N.children),g.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":N.title},N.title&&g.a.createElement(un.AnchorLink,{to:"#".concat(N.identifier)},N.title),N.description&&g.a.createElement("div",{dangerouslySetInnerHTML:{__html:N.description}})),g.a.createElement("div",{className:"__dumi-default-previewer-actions"},J&&g.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:J}),re&&g.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:re}),N.motions&&g.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:z,onClick:()=>se()}),N.iframe&&g.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:()=>De(Math.random())}),!((S=N.hideActions)!==null&&S!==void 0&&S.includes("EXTERNAL"))&&g.a.createElement(un.Link,{target:"_blank",to:W},g.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),g.a.createElement("span",null),g.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":ae,onClick:()=>X(Ce)}),Y==="tsx"&&ye&&g.a.createElement(un.Link,{target:"_blank",to:Ee},g.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),g.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(ye?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:()=>Ae(!ye)})),ye&&g.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!U&&g.a.createElement(sa,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xB7\xB7\xB7",defaultActiveKey:_,onChange:xe},Object.keys(N.sources).map(Ne=>g.a.createElement(pr,{tab:Ne==="_"?"index.".concat(Ut(Ne,N.sources[Ne])):Ne,key:Ne}))),g.a.createElement("div",{className:"__dumi-default-previewer-source"},g.a.createElement(ia.a,{code:Ce,lang:Y,showCopy:!1}))))},Ea=cn.default=oa},"80pN":function(jn,cn,e){"use strict";(function(K){/** @license React v16.14.0
* react-dom-test-utils.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var n=e("MgzW"),g=e("q1tI"),B=e("i8i4"),ue=e("QCnb");function V(a){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+a,u=1;u<arguments.length;u++)r+="&args[]="+encodeURIComponent(arguments[u]);return"Minified React error #"+a+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Re=g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;Re.hasOwnProperty("ReactCurrentDispatcher")||(Re.ReactCurrentDispatcher={current:null}),Re.hasOwnProperty("ReactCurrentBatchConfig")||(Re.ReactCurrentBatchConfig={suspense:null});function Oe(a){var r=a,u=a;if(a.alternate)for(;r.return;)r=r.return;else{a=r;do r=a,(r.effectTag&1026)!=0&&(u=r.return),a=r.return;while(a)}return r.tag===3?u:null}function oe(a){if(Oe(a)!==a)throw Error(V(188))}function zn(a){var r=a.alternate;if(!r){if(r=Oe(a),r===null)throw Error(V(188));return r!==a?null:a}for(var u=a,c=r;;){var t=u.return;if(t===null)break;var h=t.alternate;if(h===null){if(c=t.return,c!==null){u=c;continue}break}if(t.child===h.child){for(h=t.child;h;){if(h===u)return oe(t),a;if(h===c)return oe(t),r;h=h.sibling}throw Error(V(188))}if(u.return!==c.return)u=t,c=h;else{for(var d=!1,C=t.child;C;){if(C===u){d=!0,u=t,c=h;break}if(C===c){d=!0,c=t,u=h;break}C=C.sibling}if(!d){for(C=h.child;C;){if(C===u){d=!0,u=h,c=t;break}if(C===c){d=!0,c=h,u=t;break}C=C.sibling}if(!d)throw Error(V(189))}}if(u.alternate!==c)throw Error(V(190))}if(u.tag!==3)throw Error(V(188));return u.stateNode.current===u?a:r}function Se(){return!0}function Pn(){return!1}function Tn(a,r,u,c){this.dispatchConfig=a,this._targetInst=r,this.nativeEvent=u,a=this.constructor.Interface;for(var t in a)a.hasOwnProperty(t)&&((r=a[t])?this[t]=r(u):t==="target"?this.target=c:this[t]=u[t]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Se:Pn,this.isPropagationStopped=Pn,this}n(Tn.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Se)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Se)},persist:function(){this.isPersistent=Se},isPersistent:Pn,destructor:function(){var a=this.constructor.Interface,r;for(r in a)this[r]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=Pn,this._dispatchInstances=this._dispatchListeners=null}}),Tn.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null},Tn.extend=function(a){function r(){}function u(){return c.apply(this,arguments)}var c=this;r.prototype=c.prototype;var t=new r;return n(t,u.prototype),u.prototype=t,u.prototype.constructor=u,u.Interface=n({},c.Interface,a),u.extend=c.extend,$e(u),u},$e(Tn);function gn(a,r,u,c){if(this.eventPool.length){var t=this.eventPool.pop();return this.call(t,a,r,u,c),t}return new this(a,r,u,c)}function on(a){if(!(a instanceof this))throw Error(V(279));a.destructor(),10>this.eventPool.length&&this.eventPool.push(a)}function $e(a){a.eventPool=[],a.getPooled=gn,a.release=on}var Bn=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined");function An(a,r){var u={};return u[a.toLowerCase()]=r.toLowerCase(),u["Webkit"+a]="webkit"+r,u["Moz"+a]="moz"+r,u}var yn={animationend:An("Animation","AnimationEnd"),animationiteration:An("Animation","AnimationIteration"),animationstart:An("Animation","AnimationStart"),transitionend:An("Transition","TransitionEnd")},Te={},rt={};Bn&&(rt=document.createElement("div").style,"AnimationEvent"in window||(delete yn.animationend.animation,delete yn.animationiteration.animation,delete yn.animationstart.animation),"TransitionEvent"in window||delete yn.transitionend.transition);function Mn(a){if(Te[a])return Te[a];if(!yn[a])return a;var r=yn[a],u;for(u in r)if(r.hasOwnProperty(u)&&u in rt)return Te[a]=r[u];return a}var at=Mn("animationend"),pt=Mn("animationiteration"),st=Mn("animationstart"),ft=Mn("transitionend"),Kn=null;function it(a){if(Kn===null)try{var r=("require"+Math.random()).slice(0,7);Kn=(K&&K[r])("timers").setImmediate}catch(u){Kn=function(c){var t=new MessageChannel;t.port1.onmessage=c,t.port2.postMessage(void 0)}}return Kn(a)}var Jn=B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,ht=Jn[11],Wn=Jn[12],Ln=B.unstable_batchedUpdates,Un=Re.IsSomeRendererActing,ot=typeof ue.unstable_flushAllWithoutAsserting=="function",xn=ue.unstable_flushAllWithoutAsserting||function(){for(var a=!1;ht();)a=!0;return a};function lt(a){try{xn(),it(function(){xn()?lt(a):a()})}catch(r){a(r)}}var mn=0,Yn=!1,Hn=B.findDOMNode,ln=B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,vt=ln[0],Nn=ln[4],j=ln[5],F=ln[6],P=ln[7],f=ln[8],s=ln[9],v=ln[10];function b(){}function E(a,r){if(!a)return[];if(a=zn(a),!a)return[];for(var u=a,c=[];;){if(u.tag===5||u.tag===6||u.tag===1||u.tag===0){var t=u.stateNode;r(t)&&c.push(t)}if(u.child)u.child.return=u,u=u.child;else{if(u===a)return c;for(;!u.sibling;){if(!u.return||u.return===a)return c;u=u.return}u.sibling.return=u.return,u=u.sibling}}}function i(a,r){if(a&&!a._reactInternalFiber){var u=""+a;throw a=Array.isArray(a)?"an array":a&&a.nodeType===1&&a.tagName?"a DOM node":u==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":u,Error(V(286,r,a))}}var p={renderIntoDocument:function(a){var r=document.createElement("div");return B.render(a,r)},isElement:function(a){return g.isValidElement(a)},isElementOfType:function(a,r){return g.isValidElement(a)&&a.type===r},isDOMComponent:function(a){return!(!a||a.nodeType!==1||!a.tagName)},isDOMComponentElement:function(a){return!!(a&&g.isValidElement(a)&&a.tagName)},isCompositeComponent:function(a){return p.isDOMComponent(a)?!1:a!=null&&typeof a.render=="function"&&typeof a.setState=="function"},isCompositeComponentWithType:function(a,r){return p.isCompositeComponent(a)?a._reactInternalFiber.type===r:!1},findAllInRenderedTree:function(a,r){return i(a,"findAllInRenderedTree"),a?E(a._reactInternalFiber,r):[]},scryRenderedDOMComponentsWithClass:function(a,r){return i(a,"scryRenderedDOMComponentsWithClass"),p.findAllInRenderedTree(a,function(u){if(p.isDOMComponent(u)){var c=u.className;typeof c!="string"&&(c=u.getAttribute("class")||"");var t=c.split(/\s+/);if(!Array.isArray(r)){if(r===void 0)throw Error(V(11));r=r.split(/\s+/)}return r.every(function(h){return t.indexOf(h)!==-1})}return!1})},findRenderedDOMComponentWithClass:function(a,r){if(i(a,"findRenderedDOMComponentWithClass"),a=p.scryRenderedDOMComponentsWithClass(a,r),a.length!==1)throw Error("Did not find exactly one match (found: "+a.length+") for class:"+r);return a[0]},scryRenderedDOMComponentsWithTag:function(a,r){return i(a,"scryRenderedDOMComponentsWithTag"),p.findAllInRenderedTree(a,function(u){return p.isDOMComponent(u)&&u.tagName.toUpperCase()===r.toUpperCase()})},findRenderedDOMComponentWithTag:function(a,r){if(i(a,"findRenderedDOMComponentWithTag"),a=p.scryRenderedDOMComponentsWithTag(a,r),a.length!==1)throw Error("Did not find exactly one match (found: "+a.length+") for tag:"+r);return a[0]},scryRenderedComponentsWithType:function(a,r){return i(a,"scryRenderedComponentsWithType"),p.findAllInRenderedTree(a,function(u){return p.isCompositeComponentWithType(u,r)})},findRenderedComponentWithType:function(a,r){if(i(a,"findRenderedComponentWithType"),a=p.scryRenderedComponentsWithType(a,r),a.length!==1)throw Error("Did not find exactly one match (found: "+a.length+") for componentType:"+r);return a[0]},mockComponent:function(a,r){return r=r||a.mockTagName||"div",a.prototype.render.mockImplementation(function(){return g.createElement(r,null,this.props.children)}),this},nativeTouchData:function(a,r){return{touches:[{pageX:a,pageY:r}]}},Simulate:null,SimulateNative:{},act:function(a){function r(){mn--,Un.current=u,Wn.current=c}Yn===!1&&(Yn=!0,console.error("act(...) is not supported in production builds of React, and might not behave as expected.")),mn++;var u=Un.current,c=Wn.current;Un.current=!0,Wn.current=!0;try{var t=Ln(a)}catch(h){throw r(),h}if(t!==null&&typeof t=="object"&&typeof t.then=="function")return{then:function(h,d){t.then(function(){1<mn||ot===!0&&u===!0?(r(),h()):lt(function(C){r(),C?d(C):h()})},function(C){r(),d(C)})}};try{mn!==1||ot!==!1&&u!==!1||xn(),r()}catch(h){throw r(),h}return{then:function(h){h()}}}};function o(a){return function(r,u){if(g.isValidElement(r))throw Error(V(228));if(p.isCompositeComponent(r))throw Error(V(229));var c=Nn[a],t=new b;t.target=r,t.type=a.toLowerCase();var h=vt(r),d=new Tn(c,h,t,r);d.persist(),n(d,u),c.phasedRegistrationNames?j(d):F(d),B.unstable_batchedUpdates(function(){P(r),v(d)}),f()}}p.Simulate={};for(var A in Nn)p.Simulate[A]=o(A);function w(a,r){return function(u,c){var t=new b(a);n(t,c),p.isDOMComponent(u)?(u=Hn(u),t.target=u,s(r,1,document,t)):u.tagName&&(t.target=u,s(r,1,document,t))}}[["abort","abort"],[at,"animationEnd"],[pt,"animationIteration"],[st,"animationStart"],["blur","blur"],["canplaythrough","canPlayThrough"],["canplay","canPlay"],["cancel","cancel"],["change","change"],["click","click"],["close","close"],["compositionend","compositionEnd"],["compositionstart","compositionStart"],["compositionupdate","compositionUpdate"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["dragstart","dragStart"],["drag","drag"],["drop","drop"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],["ended","ended"],["error","error"],["focus","focus"],["input","input"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["loadstart","loadStart"],["loadstart","loadStart"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["mousedown","mouseDown"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["playing","playing"],["progress","progress"],["ratechange","rateChange"],["scroll","scroll"],["seeked","seeked"],["seeking","seeking"],["selectionchange","selectionChange"],["stalled","stalled"],["suspend","suspend"],["textInput","textInput"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchmove","touchMove"],["touchstart","touchStart"],[ft,"transitionEnd"],["volumechange","volumeChange"],["waiting","waiting"],["wheel","wheel"]].forEach(function(a){var r=a[1];p.SimulateNative[r]=w(r,a[0])}),K.exports=p.default||p}).call(this,e("hOG+")(jn))},JjdP:function(jn,cn,e){"use strict";e.r(cn);var K=e("9og8"),n=e("WmNS"),g=e.n(n),B=e("LtsZ"),ue=`import React, { useRef } from 'react';
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

export function getParamByName(name, url = window.location.href) {
  name = name.replace(/[\\[\\]]/g, '\\\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\\+/g, ' '));
}

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

export const parseRootValueInSchema = (schema, rootValue) => {
  const result = clone(schema);
  if (isObject(schema)) {
    Object.keys(schema).forEach(key => {
      const item = schema[key];
      if (isObject(item)) {
        result[key] = parseRootValueInSchema(item, rootValue);
      } else if (typeof item === 'string') {
        result[key] = parseSingleRootValue(item, rootValue);
      }
    });
  } else {
    console.error('schema is not an object:', schema);
  }
  return result;
};

// handle rootValue inside List
export const parseSingleRootValue = (expression, rootValue = {}) => {
  if (typeof expression === 'string' && expression.indexOf('rootValue') > 0) {
    const funcBody = expression.substring(2, expression.length - 2);
    const str = \`
    return \${funcBody.replace(/rootValue/g, JSON.stringify(rootValue))}\`;

    try {
      return Function(str)();
    } catch (error) {
      console.error(error, 'expression:', expression, 'rootValue:', rootValue);
      return null; // \u5982\u679C\u8BA1\u7B97\u6709\u9519\u8BEF\uFF0Creturn null \u6700\u5408\u9002
    }
  } else {
    return expression;
  }
};

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
      if ([false, 0, ''].indexOf(item) > -1) return true;
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

export const getDescriptorSimple = (schema = {}, path) => {
  let result = {};
  if (isObject(schema)) {
    if (schema.type) {
      switch (schema.type) {
        case 'range':
          result.type = 'array';
          break;
        case 'html':
          result.type = 'string';
          break;
        default:
          result.type = schema.type;
          break;
      }
    }
    ['pattern', 'min', 'max', 'len', 'required'].forEach(key => {
      if (Object.keys(schema).indexOf(key) > -1) {
        result[key] = schema[key];
      }
    });

    switch (schema.format) {
      case 'email':
      case 'url':
        result.type = schema.format;
        break;
      default:
        break;
    }

    const handleRegx = desc => {
      if (desc.pattern && typeof desc.pattern === 'string') {
        desc.pattern = new RegExp(desc.pattern);
      }
      return desc;
    };
    // result be array
    if (schema.rules) {
      if (Array.isArray(schema.rules)) {
        const requiredRule = schema.rules.find(rule => rule.required === true);
        if (requiredRule) {
          result = { ...result, ...requiredRule };
        }
        result = [result, ...schema.rules];
        result = result.map(r => handleRegx(r));
      } else if (isObject(schema.rules)) {
        result = [result, schema.rules];
        result = result.map(r => handleRegx(r));
      }
    } else {
      result = [result];
    }
  }
  return { [path]: result };
};

// export const getDescriptorFromSchema = ({ schema, isRequired = true }) => {
//   let result = {};
//   let singleResult = {};
//   if (schema.hidden === true) return { validator: () => true };
//   if (isObjType(schema)) {
//     result.type = 'object';
//     if (isRequired && schema.required === true) {
//       result.required = true;
//     }
//     result.fields = {};
//     Object.keys(schema.properties).forEach(key => {
//       const item = schema.properties[key];
//       // \u517C\u5BB9\u65E7\u7684\uFF01
//       if (Array.isArray(schema.required) && schema.required.indexOf(key) > -1) {
//         item.required = true;
//       }
//       result.fields[key] = getDescriptorFromSchema({
//         schema: item,
//         isRequired,
//       });
//     });
//   } else if (isListType(schema)) {
//     result.type = 'array';
//     if (isRequired && schema.required === true) {
//       result.required = true;
//     }
//     if (typeof schema.min === 'number') {
//       result.min = schema.min;
//     }
//     if (typeof schema.max === 'number') {
//       result.max = schema.max;
//     }
//     result.defaultField = { type: 'object', fields: {} }; // \u76EE\u524D\u5C31\u9ED8\u8BA4\u53EA\u6709object\u7C7B\u578B\u7684 TODO:
//     Object.keys(schema.items.properties).forEach(key => {
//       const item = schema.items.properties[key];
//       // \u517C\u5BB9\u65E7\u7684\uFF01
//       if (Array.isArray(schema.required) && schema.required.indexOf(key) > -1) {
//         item.required = true;
//       }
//       result.defaultField.fields[key] = getDescriptorFromSchema({
//         schema: item,
//         isRequired,
//       });
//     });
//   } else {
//     // \u5355\u4E2A\u7684\u903B\u8F91
//     const processRule = item => {
//       if (schema.type) return { ...item, type: schema.type };
//       if (item.pattern && typeof item.pattern === 'string') {
//         return { ...item, pattern: new RegExp(item.pattern) };
//       }
//       return item;
//     };
//     const { required, ...rest } = schema;

//     ['type', 'pattern', 'min', 'max', 'len'].forEach(key => {
//       if (Object.keys(rest).indexOf(key) > -1) {
//         singleResult[key] = rest[key];
//       }
//     });

//     switch (schema.type) {
//       case 'range':
//         singleResult.type = 'array';
//         break;
//       case 'html':
//         singleResult.type = 'string';
//         break;
//       default:
//         break;
//     }
//     switch (schema.format) {
//       case 'email':
//       case 'url':
//         singleResult.type = schema.format;
//         break;
//       default:
//         break;
//     }

//     let requiredRule;
//     if (isRequired && schema.required === true) {
//       requiredRule = { required: true, type: singleResult.type || 'string' };
//     }

//     if (schema.rules) {
//       if (Array.isArray(schema.rules)) {
//         const _rules = [];
//         schema.rules.forEach(item => {
//           if (item.required === true) {
//             if (isRequired) {
//               requiredRule = item;
//             }
//           } else {
//             _rules.push(processRule(item));
//           }
//         });
//         result = [singleResult, ..._rules];
//       } else if (isObject(schema.rules)) {
//         // TODO: \u89C4\u8303\u4E0A\u4E0D\u5141\u8BB8rules\u662Fobject\uFF0C\u7701\u4E00\u70B9\u4E8B\u513F
//         result = [singleResult, processRule(schema.rules)];
//       } else {
//         result = singleResult;
//       }
//     } else {
//       result = singleResult;
//     }

//     if (requiredRule) {
//       if (Array.isArray(result)) {
//         result.push(requiredRule);
//       } else if (isObject(result)) {
//         result = [result, requiredRule];
//       }
//     }

//     if (schema.format === 'image') {
//       const imgValidator = {
//         validator: (rule, value) => {
//           const pattern = /([/|.|w|s|-])*.(jpg|gif|png|bmp|apng|webp|jpeg|json)/;
//           if (!value) return true; // \u8FD9\u91CC\u5224\u65AD\u5BBD\u4E00\u70B9\uFF0Cundefined\u3001null\u3001'' \u90FD\u5F53\u505A\u6CA1\u6709\u586B\u5199
//           return !!pattern.exec(value) || isUrl(value);
//         },
//         message: '\${title}\u7684\u7C7B\u578B\u4E0D\u662Fimage',
//       };
//       if (Array.isArray(result)) {
//         result.push(imgValidator);
//       } else if (isObject(result)) {
//         result = [result, imgValidator];
//       }
//     }
//   }
//   return result;
// };

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
// export const isPathRequired = (path, schema) => {
//   let pathArr = path.split('.');
//   while (pathArr.length > 0) {
//     let [_path, ...rest] = pathArr;
//     _path = _path.split('[')[0];
//     let childSchema;
//     if (isObjType(schema)) {
//       childSchema = schema.properties[_path];
//     } else if (isListType(schema)) {
//       childSchema = schema.items.properties[_path];
//     }
//     pathArr = rest;
//     if (childSchema) {
//       return isPathRequired(rest.join('.'), childSchema);
//     }

//     // \u5355\u4E2A\u7684\u903B\u8F91
//     let result = { required: false };
//     if (schema.required === true) {
//       result.required = true;
//     }
//     if (schema.rules) {
//       const requiredItem = schema.rules.find(item => item.required);
//       if (requiredItem) {
//         result = requiredItem;
//       }
//     }
//     return result;
//   }
// };

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
    if (
      typeof schema.props === 'function' ||
      (isObject(schema.props) && Object.keys(schema.props).length > 0)
    ) {
    } else {
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

// const x = { a: 1, b: { c: 2 }, d: [{ e: 3, f: [{ g: 5 }] }, { e: 4 }] };
// ['a', 'b.c', 'd[0].e', 'd[0].f[0].g', 'd[1].e']

export const dataToKeys = (data, rootKey = '') => {
  let result = [];
  if (rootKey && rootKey.slice(-1) !== ']') {
    result.push(rootKey);
  }

  const isComplex = data => isObject(data) || Array.isArray(data);
  if (isObject(data)) {
    Object.keys(data).forEach(key => {
      const item = data[key];
      const itemRootKey = rootKey ? rootKey + '.' + key : key;
      if (isComplex(item)) {
        const itemKeys = dataToKeys(item, itemRootKey);
        result = [...result, ...itemKeys];
      } else {
        result.push(itemRootKey);
      }
    });
  } else if (Array.isArray(data)) {
    data.forEach((item, idx) => {
      const itemRootKey = rootKey ? \`\${rootKey}[\${idx}]\` : \`[\${idx}]\`;
      if (isComplex(item)) {
        const itemKeys = dataToKeys(item, itemRootKey);
        result = [...result, ...itemKeys];
      } else {
        result.push(itemRootKey);
      }
    });
  } else {
  }
  return result;
};

export const removeHiddenFromResult = (data, flatten) => {
  let result = clone(data);

  const keys = dataToKeys(result);

  keys.forEach(key => {
    const { id, dataIndex } = destructDataPath(key);
    if (flatten[id]) {
      let { hidden } = flatten[id].schema || {};
      if (isExpression(hidden)) {
        hidden = parseSingleExpression(hidden, result, key);
      }
      if (get(result, key) !== undefined && hidden) {
        set(result, key, undefined);
      }
    }
  });
  return result;
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
}

export function allPromiseFinish(promiseList) {
  let hasError = false;
  let count = promiseList.length;
  const results = [];

  if (!promiseList.length) {
    return Promise.resolve([]);
  }

  return new Promise((resolve, reject) => {
    promiseList.forEach((promise, index) => {
      promise
        .catch(e => {
          hasError = true;
          return e;
        })
        .then(result => {
          count -= 1;
          results[index] = result;

          if (count > 0) {
            return;
          }

          if (hasError) {
            reject(results);
          }
          resolve(results);
        });
    });
  });
}

export const removeDups = arr => {
  if (!Array.isArray(arr)) {
    console.log('in removeDups: param is not an array');
    return;
  }
  var array = [];
  for (var i = 0; i < arr.length; i++) {
    if (array.indexOf(arr[i]) === -1) {
      array.push(arr[i]);
    }
  }
  return array;
};`,Re=`import React from 'react';
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

export default Demo;`,zn=`export const basic = {
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
    displayType: 'row',
    properties: {
      select1: {
        title: '\u8F93\u5165\u6846',
        type: 'string',
        dependencies: ['useSelect'],
        widget: 'MyTextEditor',
        width: '60%',
      },
      useSelect: {
        title: '\u8F93\u5165\u6846\u9AD8\u5EA6',
        type: 'number',
        width: '60%',
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

export default Demo;`,Pn=`import React, { useState, useEffect } from 'react';
import { Button, Input } from 'antd';
import FormRender, { useForm } from 'form-render';

const Demo = () => {
  const form = useForm();

  const schema = {
    displayType: 'column',
    type: 'object',
    properties: {
      listName: {
        title: '\u5BF9\u8C61\u6570\u7EC4',
        description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
        type: 'array',
        default: [
          { select1: false, input1: 'hello world' },
          { select1: true },
          { select1: false },
        ],
        items: {
          type: 'object',
          properties: {
            select1: {
              title: '\u9690\u85CF\u8F93\u5165\u6846',
              type: 'boolean',
            },
            input1: {
              title: '\u8F93\u5165\u6846',
              type: 'string',
              required: true,
              hidden: '{{rootValue.select1 === true}}',
            },
          },
        },
      },
    },
  };

  const onFinish = (data, errors) => {
    console.log(data, errors);
  };

  return (
    <div>
      <FormRender form={form} schema={schema} onFinish={onFinish} />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4\uFF08\u89C1console\uFF09
      </Button>
    </div>
  );
};

export default Demo;`,Tn=`import React, { useState, useEffect } from 'react';
import { Button, Checkbox } from 'antd';
import FormRender, { useForm } from 'form-render';

const MyCheckbox = ({ addons }) => {
  const { dependValues, setValueByPath } = addons;
  console.log(dependValues);
  const checked = dependValues[0] && dependValues[0].length === 4;
  const onChange = e => {
    const val = e.target.checked;
    console.log(val);
    if (val === false) {
      setValueByPath('boxes', []);
    } else if (val === true) {
      setValueByPath('boxes', [1, 2, 3, 4]);
    }
  };
  return <Checkbox checked={checked} onChange={onChange} />;
};

const Demo = () => {
  const form = useForm();

  const schema = {
    type: 'object',
    properties: {
      select1: {
        title: '\u662F\u5426\u5168\u9009',
        type: 'boolean',
        dependencies: ['boxes'],
        widget: 'MyCheckbox',
      },
      boxes: {
        title: '\u53EF\u7528\u64CD\u4F5C',
        description: '\u591A\u9009',
        type: 'array',
        items: {
          type: 'number',
        },
        enum: [1, 2, 3, 4],
        enumNames: ['\u589E', '\u5220', '\u6539', '\u67E5'],
        widget: 'checkboxes',
      },
    },
  };

  const onFinish = (data, errors) => {
    console.log(data, errors);
  };

  return (
    <div>
      <FormRender
        form={form}
        schema={schema}
        onFinish={onFinish}
        widgets={{ MyCheckbox }}
      />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4\uFF08\u89C1console\uFF09
      </Button>
    </div>
  );
};

export default Demo;`,gn=`import React, { useState, useEffect } from 'react';
import { Button, Input } from 'antd';
import FormRender, { useForm } from 'form-render';

const Demo = () => {
  const form = useForm();

  const schema = {
    displayType: 'column',
    type: 'object',
    properties: {
      x: {
        title: '\u5BF9\u8C61\u6570\u7EC4',
        type: 'array',
        items: {
          type: 'object',
          properties: {
            a: {
              title: '\u8F93\u5165\u6846',
              type: 'string',
            },
            y: {
              title: '\u5BF9\u8C61',
              type: 'object',
              properties: {
                z: {
                  title: '\u9009\u62E9\u6846',
                  type: 'string',
                  widget: 'radio',
                  enum: [],
                },
              },
            },
          },
        },
      },
    },
  };

  const onMount = () => {
    form.setSchemaByPath('x[].y.z', { enum: [1, 2, 3] });
  };

  const onFinish = (data, errors) => {
    console.log(data, errors);
  };

  return (
    <div>
      <FormRender
        form={form}
        schema={schema}
        onFinish={onFinish}
        onMount={onMount}
      />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4\uFF08\u89C1console\uFF09
      </Button>
    </div>
  );
};

export default Demo;`,on=`import React, { useState, useEffect } from 'react';
import { Button, Input } from 'antd';
import FormRender, { useForm } from 'form-render';

const Demo = () => {
  const form = useForm();

  const schema = {
    displayType: 'column',
    type: 'object',
    properties: {
      province: {
        type: 'string',
        placeholder: 'province',
        required: 'true',
        rules: [
          { required: true, message: "province can't be empty" },
          { pattern: '^[a-z]+$', message: 'incorrect province' },
        ],
        width: '20%',
      },
      city: {
        type: 'string',
        placeholder: 'city',
        required: 'true',
        rules: [
          { required: true, message: "city can't be empty" },
          { pattern: '^[a-z]+$', message: 'incorrect city' },
        ],
        width: '20%',
      },
    },
  };

  const onFinish = (data, errors) => {
    console.log(data, errors);
  };

  return (
    <div>
      <FormRender form={form} schema={schema} onFinish={onFinish} />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4\uFF08\u89C1console\uFF09
      </Button>
    </div>
  );
};

export default Demo;`,$e=`export function isUrl(string) {
  const protocolRE = /^(?:\\w+:)?\\/\\/(\\S+)$/;
  // const domainRE = /^[^\\s\\.]+\\.\\S{2,}$/;
  if (typeof string !== 'string') return false;
  return protocolRE.test(string);
}

export const getArray = (arr, defaultValue = []) => {
  if (Array.isArray(arr)) return arr;
  return defaultValue;
};

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
}`,Bn=`import React, { Component } from 'react';
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

export default Root;`,An=`import React, { useState, useEffect } from 'react';
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

export default Demo;`,yn=`{
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
}`,Te=`import { Select } from 'antd';
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

export default SearchInput;`,rt=`import React from 'react';
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

export default Demo;`,Mn=`/* PrismJS 1.16.0
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
}`,at=`.debug * {
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
}`,pt=`import React, { Component } from 'react';
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

export default Root;`,st=`import React, { useState, useEffect } from 'react';
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

export default Demo;`,ft=`{
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
}`,Kn=`import { Select } from 'antd';
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

export default SearchInput;`,it=`import React from 'react';
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

export default Demo;`,Jn=`import { monaco } from 'react-monaco-editor';

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
        label: 'cardList',
        insertText: 'cardList',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u5217\u8868(\u590D\u6742\u7ED3\u6784\uFF0C\u4F46item\u6570\u91CF\u4E0D\u5927)',
      },
      {
        label: 'simpleList',
        insertText: 'simpleList',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u5217\u8868(\u6BCF\u4E2Aitem\u67091-2\u6761\u6570\u636E\uFF0C\u6CA1\u6709\u590D\u6742\u7ED3\u6784)',
      },
      {
        label: 'tableList',
        insertText: 'tableList',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u5217\u8868(\u6BCF\u4E2Aitem\u67093-5\u6761\u6570\u636E\uFF0C\u6CA1\u6709\u590D\u6742\u7ED3\u6784)',
      },
      {
        label: 'drawerList',
        insertText: 'drawerList',
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

export { valueMap, keySuggestions };`,ht=`.markdown p {
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
}`,Wn=`import React from 'react';
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

export default withTable(Demo);`,Ln=`import React from 'react';
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

export default withTable(Demo);`,Un=`import React from 'react';
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

export default withTable(Demo);`,ot=`import React, { useEffect } from 'react';
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

export default withTable(Demo);`,xn=`import React from 'react';
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

export default withTable(App);`,lt=`import React, { useState, useRef } from 'react';
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

export default Demo;`,mn=`import React from 'react';
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

export default Demo;`,Yn=`import React from 'react';
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

export default Demo;`,Hn=`.fr-generator-playground {
  margin: 0 -24px;

  .hide-demo {
    display: none;
  }
}`,ln=`import React, { useState, useRef } from 'react';
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

export default Demo;`,vt=`import React, { useState, useRef } from 'react';
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

export default Demo;`,Nn=cn.default={"guide-card":{component:Object(B.dynamic)({loader:function(){var j=Object(K.a)(g.a.mark(function P(){return g.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(25)]).then(e.bind(null,"oLxE"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},P)}));function F(){return j.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:ue}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"card-render":{version:"0.1.2"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"0.x"}},identifier:"guide-card"}},"chart-render-demo":{component:Object(B.dynamic)({loader:function(){var j=Object(K.a)(g.a.mark(function P(){var f,s,v,b,E,i,p;return g.a.wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return i=function(a,r){if(!r&&a&&a.__esModule)return a;if(a===null||typeof a!="object"&&typeof a!="function")return{default:a};var u=E(r);if(u&&u.has(a))return u.get(a);var c={},t=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var h in a)if(h!=="default"&&Object.prototype.hasOwnProperty.call(a,h)){var d=t?Object.getOwnPropertyDescriptor(a,h):null;d&&(d.get||d.set)?Object.defineProperty(c,h,d):c[h]=a[h]}return c.default=a,u&&u.set(a,c),c},E=function(a){if(typeof WeakMap!="function")return null;var r=new WeakMap,u=new WeakMap;return(E=function(t){return t?u:r})(a)},f=e("K+nK"),A.t0=f,A.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return A.t1=A.sent,s=(0,A.t0)(A.t1),A.t2=i,A.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return A.t3=A.sent,v=(0,A.t2)(A.t3),A.next=15,Promise.all([e.e(0),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 15:return b=A.sent,p=function(){var a=(0,v.useState)("Line"),r=(0,s.default)(a,2),u=r[0],c=r[1],t={Line:b.Line,Column:b.Column,PivotTable:b.PivotTable}[u];return v.default.createElement("div",null,v.default.createElement("div",{style:{marginBottom:10}},v.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return c("Line")}},"\u6298\u7EBF\u56FE"),v.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return c("Column")}},"\u67F1\u72B6\u56FE"),v.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return c("PivotTable")}},"\u4EA4\u53C9\u8868")),v.default.createElement(t,{meta:[{id:"date",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF",isDim:!1},{id:"uv",name:"\u8BBF\u5BA2\u6570",isDim:!1}],data:[{date:"20200101",pv:100,uv:50},{date:"20200102",pv:120,uv:60},{date:"20200103",pv:140,uv:70},{date:"20200104",pv:160,uv:80}]}))},A.abrupt("return",p);case 18:case"end":return A.stop()}},P)}));function F(){return j.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"chart-render-demo"}},"column-demo":{component:Object(B.dynamic)({loader:function(){var j=Object(K.a)(g.a.mark(function P(){var f,s,v,b;return g.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=e("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,s=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return v=i.sent,b=function(){return s.default.createElement(v.Column,{meta:[{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{pv:50,uv:20}]})},i.abrupt("return",b);case 11:case"end":return i.stop()}},P)}));function F(){return j.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[{ pv: 50, uv: 20 }]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo"}},"column-demo-1":{component:Object(B.dynamic)({loader:function(){var j=Object(K.a)(g.a.mark(function P(){var f,s,v,b;return g.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=e("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,s=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return v=i.sent,b=function(){return s.default.createElement(v.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},i.abrupt("return",b);case 11:case"end":return i.stop()}},P)}));function F(){return j.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-1"}},"column-demo-2":{component:Object(B.dynamic)({loader:function(){var j=Object(K.a)(g.a.mark(function P(){var f,s,v,b;return g.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=e("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,s=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return v=i.sent,b=function(){return s.default.createElement(v.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},i.abrupt("return",b);case 11:case"end":return i.stop()}},P)}));function F(){return j.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-2"}},"column-demo-3":{component:Object(B.dynamic)({loader:function(){var j=Object(K.a)(g.a.mark(function P(){var f,s,v,b;return g.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=e("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,s=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return v=i.sent,b=function(){return s.default.createElement(v.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},i.abrupt("return",b);case 11:case"end":return i.stop()}},P)}));function F(){return j.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-3"}},"column-demo-4":{component:Object(B.dynamic)({loader:function(){var j=Object(K.a)(g.a.mark(function P(){var f,s,v,b;return g.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=e("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,s=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return v=i.sent,b=function(){return s.default.createElement(v.Column,{inverted:!0,label:{position:"middle",layout:[{type:"interval-adjust-position"},{type:"interval-hide-overlap"},{type:"adjust-color"}]},meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},i.abrupt("return",b);case 11:case"end":return i.stop()}},P)}));function F(){return j.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-4"}},"line-demo":{component:Object(B.dynamic)({loader:function(){var j=Object(K.a)(g.a.mark(function P(){var f,s,v,b;return g.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=e("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,s=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return v=i.sent,b=function(){return s.default.createElement(v.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},i.abrupt("return",b);case 11:case"end":return i.stop()}},P)}));function F(){return j.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo"}},"line-demo-1":{component:Object(B.dynamic)({loader:function(){var j=Object(K.a)(g.a.mark(function P(){var f,s,v,b;return g.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=e("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,s=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return v=i.sent,b=function(){return s.default.createElement(v.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},i.abrupt("return",b);case 11:case"end":return i.stop()}},P)}));function F(){return j.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-1"}},"line-demo-2":{component:Object(B.dynamic)({loader:function(){var j=Object(K.a)(g.a.mark(function P(){var f,s,v,b;return g.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=e("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,s=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return v=i.sent,b=function(){return s.default.createElement(v.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"},{id:"pv",name:"\u8BBF\u95EE\u91CF"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20,pv:120},{ds:"2020-12-31",page:"\u9996\u9875",uv:120,pv:1120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21,pv:121},{ds:"2021-01-01",page:"\u9996\u9875",uv:121,pv:1121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15,pv:115},{ds:"2021-01-02",page:"\u9996\u9875",uv:115,pv:1115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40,pv:140},{ds:"2021-01-03",page:"\u9996\u9875",uv:140,pv:1140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31,pv:131},{ds:"2021-01-04",page:"\u9996\u9875",uv:131,pv:1131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32,pv:132},{ds:"2021-01-05",page:"\u9996\u9875",uv:132,pv:1132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30,pv:130},{ds:"2021-01-06",page:"\u9996\u9875",uv:130,pv:1130}]})},i.abrupt("return",b);case 11:case"end":return i.stop()}},P)}));function F(){return j.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-2"}},"line-demo-3":{component:Object(B.dynamic)({loader:function(){var j=Object(K.a)(g.a.mark(function P(){var f,s,v,b;return g.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=e("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,s=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return v=i.sent,b=function(){return s.default.createElement(v.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},i.abrupt("return",b);case 11:case"end":return i.stop()}},P)}));function F(){return j.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-3"}},"line-demo-4":{component:Object(B.dynamic)({loader:function(){var j=Object(K.a)(g.a.mark(function P(){var f,s,v,b;return g.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=e("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,s=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return v=i.sent,b=function(){return s.default.createElement(v.Line,{withArea:!0,isStack:!0,isPercent:!0,meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},i.abrupt("return",b);case 11:case"end":return i.stop()}},P)}));function F(){return j.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-4"}},"pivot-table-demo":{component:Object(B.dynamic)({loader:function(){var j=Object(K.a)(g.a.mark(function P(){var f,s,v,b;return g.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=e("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,s=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return v=i.sent,b=function(){return s.default.createElement(v.PivotTable,{style:{maxHeight:400,overflow:"auto"},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},i.abrupt("return",b);case 11:case"end":return i.stop()}},P)}));function F(){return j.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo"}},"pivot-table-demo-1":{component:Object(B.dynamic)({loader:function(){var j=Object(K.a)(g.a.mark(function P(){var f,s,v,b;return g.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=e("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,s=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return v=i.sent,b=function(){return s.default.createElement(v.PivotTable,{style:{maxHeight:400,overflow:"auto"},cellRender:function(A,w,a){return s.default.createElement("div",null,s.default.createElement("p",null,"\u53C2\u6570\u8868\uFF1A"),s.default.createElement("p",{style:{color:["red","orange","yellow","green","blue"][Object.keys(w).length]}},A),s.default.createElement("p",null,JSON.stringify(w)),s.default.createElement("p",null,JSON.stringify(a)))},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},i.abrupt("return",b);case 11:case"end":return i.stop()}},P)}));function F(){return j.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-1"}},"pivot-table-demo-2":{component:Object(B.dynamic)({loader:function(){var j=Object(K.a)(g.a.mark(function P(){var f,s,v,b,E,i,p;return g.a.wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return i=function(a,r){if(!r&&a&&a.__esModule)return a;if(a===null||typeof a!="object"&&typeof a!="function")return{default:a};var u=E(r);if(u&&u.has(a))return u.get(a);var c={},t=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var h in a)if(h!=="default"&&Object.prototype.hasOwnProperty.call(a,h)){var d=t?Object.getOwnPropertyDescriptor(a,h):null;d&&(d.get||d.set)?Object.defineProperty(c,h,d):c[h]=a[h]}return c.default=a,u&&u.set(a,c),c},E=function(a){if(typeof WeakMap!="function")return null;var r=new WeakMap,u=new WeakMap;return(E=function(t){return t?u:r})(a)},f=e("K+nK"),A.t0=f,A.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return A.t1=A.sent,s=(0,A.t0)(A.t1),A.t2=i,A.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return A.t3=A.sent,v=(0,A.t2)(A.t3),A.next=15,Promise.all([e.e(0),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 15:return b=A.sent,p=function(){var a=(0,v.useState)(!1),r=(0,s.default)(a,2),u=r[0],c=r[1];return v.default.createElement(v.default.Fragment,null,v.default.createElement("label",null,"\u53EF\u5C55\u5F00/\u6536\u7F29\uFF1A",v.default.createElement("input",{type:"checkbox",value:u,onChange:function(){return c(!u)}})),v.default.createElement(b.PivotTable,{leftExpandable:u,showSubtotal:!1,meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]}))},A.abrupt("return",p);case 18:case"end":return A.stop()}},P)}));function F(){return j.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-2"}},"OldSchemaTransformer-demo":{component:Object(B.dynamic)({loader:function(){var j=Object(K.a)(g.a.mark(function P(){var f,s,v,b,E,i,p,o,A,w,a,r,u;return g.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return A=function(d,C){if(!C&&d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var D=o(C);if(D&&D.has(d))return D.get(d);var I={},$=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var x in d)if(x!=="default"&&Object.prototype.hasOwnProperty.call(d,x)){var Z=$?Object.getOwnPropertyDescriptor(d,x):null;Z&&(Z.get||Z.set)?Object.defineProperty(I,x,Z):I[x]=d[x]}return I.default=d,D&&D.set(d,I),I},o=function(d){if(typeof WeakMap!="function")return null;var C=new WeakMap,D=new WeakMap;return(o=function($){return $?D:C})(d)},f=e("K+nK"),t.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return t.t0=f,t.next=8,e.e(7).then(e.t.bind(null,"4IMT",7));case 8:return t.t1=t.sent,s=(0,t.t0)(t.t1),t.t2=f,t.next=13,Promise.resolve().then(e.bind(null,"tJVT"));case 13:return t.t3=t.sent,v=(0,t.t2)(t.t3),t.next=17,Promise.all([e.e(3),e.e(18)]).then(e.t.bind(null,"cUip",7));case 17:return t.t4=f,t.next=20,Promise.all([e.e(0),e.e(7),e.e(17),e.e(19)]).then(e.t.bind(null,"iJl9",7));case 20:return t.t5=t.sent,b=(0,t.t4)(t.t5),t.t6=A,t.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return t.t7=t.sent,E=(0,t.t6)(t.t7),t.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(8),e.e(9)]).then(e.bind(null,"gdfu"));case 29:return i=t.sent,t.next=32,Promise.all([e.e(76),e.e(83)]).then(e.bind(null,"Ejlu"));case 32:return p=t.sent,w=b.default.TextArea,a={type:"object",properties:{number:{title:"\u6570\u5B57\u8F93\u5165\u6846",type:"number","ui:disabled":!0},checkbox:{title:"\u662F\u5426\u9009\u62E9",type:"boolean","ui:widget":"switch"}},required:["number"]},r=function(){var d=(0,E.useState)(JSON.stringify(a)),C=(0,v.default)(d,2),D=C[0],I=C[1],$=(0,E.useState)({}),x=(0,v.default)($,2),Z=x[0],Le=x[1],Ue=function(){try{var bn=(0,p.updateSchemaToNewVersion)(JSON.parse(D));Le(bn)}catch(ut){console.log(ut)}},rn=function(bn){I(bn.target.value)},_e=function(){I(JSON.stringify(JSON.parse(D),null,2))};return E.default.createElement("div",null,E.default.createElement("div",null,"\u586B\u5165\u65E7\u7248schema\uFF1A"),E.default.createElement(w,{style:{minHeight:400,marginTop:12,marginBottom:12},value:D,onChange:rn}),E.default.createElement(s.default,{style:{marginRight:12},onClick:_e},"\u683C\u5F0F\u5316\u65E7schema"),E.default.createElement(s.default,{type:"primary",onClick:Ue},"\u751F\u6210\u65B0\u7248schema"),E.default.createElement(w,{style:{minHeight:400,marginTop:12},value:JSON.stringify(Z,null,2)}))},u=r,t.abrupt("return",u);case 38:case"end":return t.stop()}},P)}));function F(){return j.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
import { Input, Button } from 'antd';
import { updateSchemaToNewVersion } from '../../packages/form-render-core/src/utils.js';
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

export default Translator;`},"packages/form-render-core/src/utils.js":{import:"../../packages/form-render-core/src/utils.js",content:V}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"},"lodash-es":{version:"4.17.21"}},identifier:"OldSchemaTransformer-demo"}},"form-render-demo":{component:Object(B.dynamic)({loader:function(){var j=Object(K.a)(g.a.mark(function P(){var f,s,v,b,E,i,p,o,A,w;return g.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return p=function(c,t){if(!t&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var h=i(t);if(h&&h.has(c))return h.get(c);var d={},C=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var D in c)if(D!=="default"&&Object.prototype.hasOwnProperty.call(c,D)){var I=C?Object.getOwnPropertyDescriptor(c,D):null;I&&(I.get||I.set)?Object.defineProperty(d,D,I):d[D]=c[D]}return d.default=c,h&&h.set(c,d),d},i=function(c){if(typeof WeakMap!="function")return null;var t=new WeakMap,h=new WeakMap;return(i=function(C){return C?h:t})(c)},f=e("K+nK"),r.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return r.t0=f,r.next=8,e.e(7).then(e.t.bind(null,"4IMT",7));case 8:return r.t1=r.sent,s=(0,r.t0)(r.t1),r.t2=f,r.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return r.t3=r.sent,v=(0,r.t2)(r.t3),r.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(8),e.e(9)]).then(e.bind(null,"gdfu"));case 17:return b=r.sent,r.t4=p,r.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 21:return r.t5=r.sent,E=(0,r.t4)(r.t5),o={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},A=function(){var c=(0,E.useForm)(),t=function(d,C){console.log("formData:",d,"errors",C)};return v.default.createElement("div",null,v.default.createElement(E.default,{form:c,schema:o,onFinish:t}),v.default.createElement(s.default,{type:"primary",onClick:c.submit},"\u63D0\u4EA4"))},w=A,r.abrupt("return",w);case 27:case"end":return r.stop()}},P)}));function F(){return j.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo"}},"form-render-demo-1":{component:Object(B.dynamic)({loader:function(){var j=Object(K.a)(g.a.mark(function P(){var f,s,v,b,E,i,p,o,A,w,a,r,u,c;return g.a.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return a=function(C,D){if(!D&&C&&C.__esModule)return C;if(C===null||typeof C!="object"&&typeof C!="function")return{default:C};var I=w(D);if(I&&I.has(C))return I.get(C);var $={},x=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var Z in C)if(Z!=="default"&&Object.prototype.hasOwnProperty.call(C,Z)){var Le=x?Object.getOwnPropertyDescriptor(C,Z):null;Le&&(Le.get||Le.set)?Object.defineProperty($,Z,Le):$[Z]=C[Z]}return $.default=C,I&&I.set(C,$),$},w=function(C){if(typeof WeakMap!="function")return null;var D=new WeakMap,I=new WeakMap;return(w=function(x){return x?I:D})(C)},f=e("K+nK"),h.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return h.t0=f,h.next=8,e.e(7).then(e.t.bind(null,"4IMT",7));case 8:return h.t1=h.sent,s=(0,h.t0)(h.t1),h.t2=f,h.next=13,e.e(85).then(e.bind(null,"fWQN"));case 13:return h.t3=h.sent,v=(0,h.t2)(h.t3),h.t4=f,h.next=18,e.e(86).then(e.bind(null,"mtLc"));case 18:return h.t5=h.sent,b=(0,h.t4)(h.t5),h.t6=f,h.next=23,e.e(78).then(e.bind(null,"yKVA"));case 23:return h.t7=h.sent,E=(0,h.t6)(h.t7),h.t8=f,h.next=28,e.e(77).then(e.bind(null,"879j"));case 28:return h.t9=h.sent,i=(0,h.t8)(h.t9),h.t10=f,h.next=33,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 33:return h.t11=h.sent,p=(0,h.t10)(h.t11),h.next=37,Promise.all([e.e(0),e.e(1),e.e(2),e.e(8),e.e(9)]).then(e.bind(null,"gdfu"));case 37:return o=h.sent,h.t12=a,h.next=41,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 41:return h.t13=h.sent,A=(0,h.t12)(h.t13),r={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},u=function(d){(0,E.default)(D,d);var C=(0,i.default)(D);function D(){var I;(0,v.default)(this,D);for(var $=arguments.length,x=new Array($),Z=0;Z<$;Z++)x[Z]=arguments[Z];return I=C.call.apply(C,[this].concat(x)),I.onFinish=function(Le,Ue){console.log("formData:",Le,"errors",Ue)},I}return(0,b.default)(D,[{key:"render",value:function(){var $=this.props.form;return p.default.createElement("div",null,p.default.createElement(A.default,{form:$,schema:r,onFinish:this.onFinish}),p.default.createElement(s.default,{type:"primary",onClick:$.submit},"\u63D0\u4EA4"))}}]),D}(p.default.Component),c=(0,A.connectForm)(u),h.abrupt("return",c);case 47:case"end":return h.stop()}},P)}));function F(){return j.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default connectForm(Demo);`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo-1"}},"form-render-demo-2":{component:Object(B.dynamic)({loader:function(){var j=Object(K.a)(g.a.mark(function P(){var f,s,v,b,E,i,p,o,A,w;return g.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return p=function(c,t){if(!t&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var h=i(t);if(h&&h.has(c))return h.get(c);var d={},C=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var D in c)if(D!=="default"&&Object.prototype.hasOwnProperty.call(c,D)){var I=C?Object.getOwnPropertyDescriptor(c,D):null;I&&(I.get||I.set)?Object.defineProperty(d,D,I):d[D]=c[D]}return d.default=c,h&&h.set(c,d),d},i=function(c){if(typeof WeakMap!="function")return null;var t=new WeakMap,h=new WeakMap;return(i=function(C){return C?h:t})(c)},f=e("K+nK"),r.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return r.t0=f,r.next=8,e.e(7).then(e.t.bind(null,"4IMT",7));case 8:return r.t1=r.sent,s=(0,r.t0)(r.t1),r.t2=f,r.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return r.t3=r.sent,v=(0,r.t2)(r.t3),r.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(8),e.e(9)]).then(e.bind(null,"gdfu"));case 17:return b=r.sent,r.t4=p,r.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 21:return r.t5=r.sent,E=(0,r.t4)(r.t5),o={displayType:"row",labelWidth:60,type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F",type:"range",format:"date"},showSetting:{title:"\u662F\u5426\u5C55\u793A\u7F51\u5740",type:"boolean"},siteUrl:{title:"\u7F51\u5740",type:"string",placeholder:"\u6B64\u5904\u5FC5\u586B",hidden:"{{formData.showSetting !== true}}",required:!0,props:{addonBefore:"https://",addonAfter:".com"}}}},A=function(){var c=(0,E.useForm)(),t=function(d,C){C.length>0?alert("errors:"+JSON.stringify(C)):alert("formData:"+JSON.stringify(d,null,2))};return v.default.createElement("div",null,v.default.createElement(E.default,{form:c,schema:o,onFinish:t}),v.default.createElement(s.default,{type:"primary",onClick:c.submit},"\u63D0\u4EA4"))},w=A,r.abrupt("return",w);case 27:case"end":return r.stop()}},P)}));function F(){return j.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-demo-2"}},"display-demo":{component:Object(B.dynamic)({loader:function(){var j=Object(K.a)(g.a.mark(function P(){var f,s,v,b,E;return g.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return f=e("K+nK"),p.t0=f,p.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return p.t1=p.sent,s=(0,p.t0)(p.t1),p.t2=f,p.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return p.t3=p.sent,v=(0,p.t2)(p.t3),b=function(A){return{type:"object",displayType:A,properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},objectName:{title:"\u5BF9\u8C61",bind:"obj",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},E=function(){return s.default.createElement("div",null,s.default.createElement("h2",null,"display: row"),s.default.createElement(v.default,{schema:b("row")}),s.default.createElement("h2",null,"display: column"),s.default.createElement(v.default,{schema:b("column")}))},p.abrupt("return",E);case 14:case"end":return p.stop()}},P)}));function F(){return j.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`},"demo/display.js":{import:"../demo/display",content:Re}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo"}},"display-demo-1":{component:Object(B.dynamic)({loader:function(){var j=Object(K.a)(g.a.mark(function P(){var f,s,v,b,E;return g.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return f=e("K+nK"),p.t0=f,p.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return p.t1=p.sent,s=(0,p.t0)(p.t1),p.t2=f,p.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return p.t3=p.sent,v=(0,p.t2)(p.t3),b={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0},check:{title:"box",type:"boolean",default:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},E=function(){return s.default.createElement(v.default,{readOnly:!0,schema:b})},p.abrupt("return",E);case 14:case"end":return p.stop()}},P)}));function F(){return j.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form readOnly schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:Re}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-1"}},"display-demo-2":{component:Object(B.dynamic)({loader:function(){var j=Object(K.a)(g.a.mark(function P(){var f,s,v,b,E;return g.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return f=e("K+nK"),p.t0=f,p.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return p.t1=p.sent,s=(0,p.t0)(p.t1),p.t2=f,p.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return p.t3=p.sent,v=(0,p.t2)(p.t3),b={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0,width:"50%"},check:{title:"box",type:"boolean",default:!0,width:"50%",labelWidth:6},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},E=function(){return s.default.createElement(v.default,{labelWidth:"200",schema:b})},p.abrupt("return",E);case 14:case"end":return p.stop()}},P)}));function F(){return j.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form labelWidth="200" schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:Re}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-2"}},"display-demo-3":{component:Object(B.dynamic)({loader:function(){var j=Object(K.a)(g.a.mark(function P(){var f,s,v,b,E,i;return g.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,s=(0,o.t0)(o.t1),o.t2=f,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,v=(0,o.t2)(o.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},E=function(){return s.default.createElement(v.default,{schema:b})},i=E,o.abrupt("return",i);case 15:case"end":return o.stop()}},P)}));function F(){return j.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      // widget: 'cardList',
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Re}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-3"}},"display-demo-4":{component:Object(B.dynamic)({loader:function(){var j=Object(K.a)(g.a.mark(function P(){var f,s,v,b,E,i;return g.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,s=(0,o.t0)(o.t1),o.t2=f,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,v=(0,o.t2)(o.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"simpleList",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},E=function(){return s.default.createElement(v.default,{schema:b})},i=E,o.abrupt("return",i);case 15:case"end":return o.stop()}},P)}));function F(){return j.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      widget: 'simpleList',
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Re}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-4"}},"display-demo-5":{component:Object(B.dynamic)({loader:function(){var j=Object(K.a)(g.a.mark(function P(){var f,s,v,b,E,i;return g.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,s=(0,o.t0)(o.t1),o.t2=f,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,v=(0,o.t2)(o.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"tableList",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},E=function(){return s.default.createElement(v.default,{schema:b})},i=E,o.abrupt("return",i);case 15:case"end":return o.stop()}},P)}));function F(){return j.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      widget: 'tableList',
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Re}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-5"}},"display-demo-6":{component:Object(B.dynamic)({loader:function(){var j=Object(K.a)(g.a.mark(function P(){var f,s,v,b,E,i;return g.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,s=(0,o.t0)(o.t1),o.t2=f,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,v=(0,o.t2)(o.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"drawerList",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"simpleList",props:{hideMove:!0},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},E=function(){return s.default.createElement(v.default,{schema:b})},i=E,o.abrupt("return",i);case 15:case"end":return o.stop()}},P)}));function F(){return j.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      widget: 'drawerList',
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
            widget: 'simpleList',
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Re}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-6"}},"form-methods-demo":{component:Object(B.dynamic)({loader:function(){var j=Object(K.a)(g.a.mark(function P(){var f,s,v,b,E,i,p,o,A,w,a,r,u;return g.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=function(d,C){if(!C&&d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var D=w(C);if(D&&D.has(d))return D.get(d);var I={},$=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var x in d)if(x!=="default"&&Object.prototype.hasOwnProperty.call(d,x)){var Z=$?Object.getOwnPropertyDescriptor(d,x):null;Z&&(Z.get||Z.set)?Object.defineProperty(I,x,Z):I[x]=d[x]}return I.default=d,D&&D.set(d,I),I},w=function(d){if(typeof WeakMap!="function")return null;var C=new WeakMap,D=new WeakMap;return(w=function($){return $?D:C})(d)},f=e("K+nK"),t.next=5,e.e(21).then(e.t.bind(null,"lfLe",7));case 5:return t.t0=f,t.next=8,e.e(22).then(e.t.bind(null,"Cp9S",7));case 8:return t.t1=t.sent,s=(0,t.t0)(t.t1),t.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return t.t2=f,t.next=15,e.e(7).then(e.t.bind(null,"4IMT",7));case 15:return t.t3=t.sent,v=(0,t.t2)(t.t3),t.next=19,e.e(14).then(e.t.bind(null,"tL+A",7));case 19:return t.t4=f,t.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return t.t5=t.sent,b=(0,t.t4)(t.t5),t.t6=f,t.next=27,Promise.resolve().then(e.bind(null,"tJVT"));case 27:return t.t7=t.sent,E=(0,t.t6)(t.t7),t.t8=a,t.next=32,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 32:return t.t9=t.sent,i=(0,t.t8)(t.t9),t.next=36,Promise.all([e.e(0),e.e(1),e.e(2),e.e(8),e.e(9)]).then(e.bind(null,"gdfu"));case 36:return p=t.sent,t.t10=a,t.next=40,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 40:return t.t11=t.sent,o=(0,t.t10)(t.t11),t.next=44,e.e(15).then(e.bind(null,"OH0R"));case 44:return A=t.sent,r=function(){var d=(0,o.useForm)(),C=(0,i.useState)({}),D=(0,E.default)(C,2),I=D[0],$=D[1],x=function(){(0,A.fakeApi)("xxx/getForm").then(function(Ue){d.setValues({input1:"hello world",select1:"c"})})};(0,i.useEffect)(function(){(0,A.delay)(1e3).then(function(Le){$({type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}})})},[]);var Z=function(Ue,rn){rn.length>0?b.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(rn.map(function(_e){return _e.name}))):(0,A.fakeApi)("xxx/submit",Ue).then(function(_e){return b.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})};return i.default.createElement("div",{style:{width:"400px"}},i.default.createElement(o.default,{form:d,schema:I,onFinish:Z}),i.default.createElement(s.default,null,i.default.createElement(v.default,{onClick:x},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),i.default.createElement(v.default,{type:"primary",onClick:d.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},u=r,t.abrupt("return",u);case 48:case"end":return t.stop()}},P)}));function F(){return j.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Oe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo"}},"form-methods-demo-1":{component:Object(B.dynamic)({loader:function(){var j=Object(K.a)(g.a.mark(function P(){var f,s,v,b,E,i,p,o,A,w,a,r,u;return g.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return w=function(d,C){if(!C&&d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var D=A(C);if(D&&D.has(d))return D.get(d);var I={},$=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var x in d)if(x!=="default"&&Object.prototype.hasOwnProperty.call(d,x)){var Z=$?Object.getOwnPropertyDescriptor(d,x):null;Z&&(Z.get||Z.set)?Object.defineProperty(I,x,Z):I[x]=d[x]}return I.default=d,D&&D.set(d,I),I},A=function(d){if(typeof WeakMap!="function")return null;var C=new WeakMap,D=new WeakMap;return(A=function($){return $?D:C})(d)},f=e("K+nK"),t.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return t.t0=f,t.next=8,e.e(7).then(e.t.bind(null,"4IMT",7));case 8:return t.t1=t.sent,s=(0,t.t0)(t.t1),t.t2=f,t.next=13,Promise.resolve().then(e.bind(null,"PpiC"));case 13:return t.t3=t.sent,v=(0,t.t2)(t.t3),t.next=17,e.e(14).then(e.t.bind(null,"tL+A",7));case 17:return t.t4=f,t.next=20,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 20:return t.t5=t.sent,b=(0,t.t4)(t.t5),t.t6=f,t.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return t.t7=t.sent,E=(0,t.t6)(t.t7),t.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(8),e.e(9)]).then(e.bind(null,"gdfu"));case 29:return i=t.sent,t.t8=w,t.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 33:return t.t9=t.sent,p=(0,t.t8)(t.t9),t.next=37,e.e(15).then(e.bind(null,"OH0R"));case 37:return o=t.sent,a={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},r=function(){var d=(0,p.useForm)(),C=function($,x){x.length>0?b.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(x.map(function(Z){return Z.name}))):(0,o.fakeApi)("xxx/submit",$).then(function(Z){return b.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},D=function($){var x=$.data,Z=$.errors,Le=$.schema,Ue=(0,v.default)($,["data","errors","schema"]);return(0,o.fakeApi)("xxx/validation").then(function(rn){return{name:"select1",error:["\u5916\u90E8\u6821\u9A8C\u9519\u8BEF"]}})};return E.default.createElement("div",{style:{width:"400px"}},E.default.createElement(p.default,{form:d,schema:a,beforeFinish:D,onFinish:C}),E.default.createElement(s.default,{type:"primary",onClick:d.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},u=r,t.abrupt("return",u);case 42:case"end":return t.stop()}},P)}));function F(){return j.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Oe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-1"}},"form-methods-demo-2":{component:Object(B.dynamic)({loader:function(){var j=Object(K.a)(g.a.mark(function P(){var f,s,v,b,E,i,p,o,A,w,a,r,u;return g.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return w=function(d,C){if(!C&&d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var D=A(C);if(D&&D.has(d))return D.get(d);var I={},$=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var x in d)if(x!=="default"&&Object.prototype.hasOwnProperty.call(d,x)){var Z=$?Object.getOwnPropertyDescriptor(d,x):null;Z&&(Z.get||Z.set)?Object.defineProperty(I,x,Z):I[x]=d[x]}return I.default=d,D&&D.set(d,I),I},A=function(d){if(typeof WeakMap!="function")return null;var C=new WeakMap,D=new WeakMap;return(A=function($){return $?D:C})(d)},f=e("K+nK"),t.next=5,e.e(21).then(e.t.bind(null,"lfLe",7));case 5:return t.t0=f,t.next=8,e.e(22).then(e.t.bind(null,"Cp9S",7));case 8:return t.t1=t.sent,s=(0,t.t0)(t.t1),t.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return t.t2=f,t.next=15,e.e(7).then(e.t.bind(null,"4IMT",7));case 15:return t.t3=t.sent,v=(0,t.t2)(t.t3),t.next=19,e.e(14).then(e.t.bind(null,"tL+A",7));case 19:return t.t4=f,t.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return t.t5=t.sent,b=(0,t.t4)(t.t5),t.t6=f,t.next=27,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 27:return t.t7=t.sent,E=(0,t.t6)(t.t7),t.next=31,Promise.all([e.e(0),e.e(1),e.e(2),e.e(8),e.e(9)]).then(e.bind(null,"gdfu"));case 31:return i=t.sent,t.t8=w,t.next=35,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 35:return t.t9=t.sent,p=(0,t.t8)(t.t9),t.next=39,e.e(15).then(e.bind(null,"OH0R"));case 39:return o=t.sent,a={type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F\u8303\u56F4",type:"range",format:"date"}}},r=function(){var d=(0,p.useForm)(),C=function($,x){x.length>0?b.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(x.map(function(Z){return Z.name}))):(0,o.fakeApi)("xxx/submit",$).then(function(Z){return b.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},D=function(){(0,o.fakeApi)("xxx/getForm").then(function($){d.setValues({startDate:"2020-04-04",endDate:"2020-04-24"})})};return E.default.createElement("div",{style:{width:"400px"}},E.default.createElement(p.default,{form:d,schema:a,onFinish:C}),E.default.createElement(s.default,null,E.default.createElement(v.default,{onClick:D},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),E.default.createElement(v.default,{type:"primary",onClick:d.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},u=r,t.abrupt("return",u);case 44:case"end":return t.stop()}},P)}));function F(){return j.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Oe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-2"}},"form-methods-demo-3":{component:Object(B.dynamic)({loader:function(){var j=Object(K.a)(g.a.mark(function P(){var f,s,v,b,E,i,p,o,A,w,a,r;return g.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return A=function(h,d){if(!d&&h&&h.__esModule)return h;if(h===null||typeof h!="object"&&typeof h!="function")return{default:h};var C=o(d);if(C&&C.has(h))return C.get(h);var D={},I=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var $ in h)if($!=="default"&&Object.prototype.hasOwnProperty.call(h,$)){var x=I?Object.getOwnPropertyDescriptor(h,$):null;x&&(x.get||x.set)?Object.defineProperty(D,$,x):D[$]=h[$]}return D.default=h,C&&C.set(h,D),D},o=function(h){if(typeof WeakMap!="function")return null;var d=new WeakMap,C=new WeakMap;return(o=function(I){return I?C:d})(h)},f=e("K+nK"),c.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return c.t0=f,c.next=8,e.e(7).then(e.t.bind(null,"4IMT",7));case 8:return c.t1=c.sent,s=(0,c.t0)(c.t1),c.next=12,e.e(14).then(e.t.bind(null,"tL+A",7));case 12:return c.t2=f,c.next=15,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 15:return c.t3=c.sent,v=(0,c.t2)(c.t3),c.t4=A,c.next=20,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 20:return c.t5=c.sent,b=(0,c.t4)(c.t5),c.next=24,Promise.all([e.e(0),e.e(1),e.e(2),e.e(8),e.e(9)]).then(e.bind(null,"gdfu"));case 24:return E=c.sent,c.t6=A,c.next=28,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 28:return c.t7=c.sent,i=(0,c.t6)(c.t7),c.next=32,e.e(15).then(e.bind(null,"OH0R"));case 32:return p=c.sent,w={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select1:{title:"\u5355\u9009",type:"string",widget:"select"}}}}},a=function(){var h=(0,i.useForm)(),d=function(){h.setSchemaByPath("obj1.select1",{enum:["east","south","west","north"],enumNames:["\u4E1C","\u5357","\u897F","\u5317"]})},C=function(I,$){$.length>0?v.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify($.map(function(x){return x.name}))):v.default.info(JSON.stringify(I))};return b.default.createElement("div",{style:{width:"400px"}},b.default.createElement(i.default,{form:h,schema:w,onMount:d,onFinish:C}),b.default.createElement(s.default,{type:"primary",onClick:h.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},r=a,c.abrupt("return",r);case 37:case"end":return c.stop()}},P)}));function F(){return j.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Oe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-3"}},"function-demo":{component:Object(B.dynamic)({loader:function(){var j=Object(K.a)(g.a.mark(function P(){var f,s,v,b,E,i,p,o;return g.a.wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return E=function(r,u){if(!u&&r&&r.__esModule)return r;if(r===null||typeof r!="object"&&typeof r!="function")return{default:r};var c=b(u);if(c&&c.has(r))return c.get(r);var t={},h=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in r)if(d!=="default"&&Object.prototype.hasOwnProperty.call(r,d)){var C=h?Object.getOwnPropertyDescriptor(r,d):null;C&&(C.get||C.set)?Object.defineProperty(t,d,C):t[d]=r[d]}return t.default=r,c&&c.set(r,t),t},b=function(r){if(typeof WeakMap!="function")return null;var u=new WeakMap,c=new WeakMap;return(b=function(h){return h?c:u})(r)},f=e("K+nK"),w.t0=f,w.next=6,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 6:return w.t1=w.sent,s=(0,w.t0)(w.t1),w.t2=E,w.next=11,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 11:return w.t3=w.sent,v=(0,w.t2)(w.t3),i={type:"object",properties:{checkbox1:{title:"\u5C55\u793A\u66F4\u591A\u5185\u5BB9",type:"boolean"},select1:{title:"\u8BF7\u5047\u539F\u56E0",type:"string",enum:["a","b","c"],enumNames:["\u75C5\u5047","\u6709\u4E8B","\u5176\u5B83 (\u9700\u6CE8\u660E\u5177\u4F53\u539F\u56E0)"],hidden:"{{formData.checkbox1 !== true}}",widget:"radio"},input1:{title:"\u5177\u4F53\u539F\u56E0",type:"string",format:"textarea",hidden:'{{rootValue.checkbox1 !== true || formData.select1 !== "c"}}'}}},p=function(){var r=(0,v.useForm)();return s.default.createElement(v.default,{form:r,schema:i})},o=p,w.abrupt("return",o);case 17:case"end":return w.stop()}},P)}));function F(){return j.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo1;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo"}},"function-demo-1":{component:Object(B.dynamic)({loader:function(){var j=Object(K.a)(g.a.mark(function P(){var f,s,v,b,E;return g.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return f=e("K+nK"),p.t0=f,p.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return p.t1=p.sent,s=(0,p.t0)(p.t1),p.t2=f,p.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return p.t3=p.sent,v=(0,p.t2)(p.t3),p.next=13,e.e(20).then(e.bind(null,"8iYR"));case 13:return b=p.sent,E=function(){return s.default.createElement(v.default,{schema:b.expression})},p.abrupt("return",E);case 16:case"end":return p.stop()}},P)}));function F(){return j.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { expression } from '../json/schema';

export default () => <FR schema={expression} />;`},"demo/FR.jsx":{import:"../demo/FR",content:oe},"json/schema.js":{import:"../json/schema",content:zn}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo-1"}},"lifeCycle-demo":{component:Object(B.dynamic)({loader:function(){var j=Object(K.a)(g.a.mark(function P(){var f,s,v,b,E,i,p,o,A;return g.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return E=function(u,c){if(!c&&u&&u.__esModule)return u;if(u===null||typeof u!="object"&&typeof u!="function")return{default:u};var t=b(c);if(t&&t.has(u))return t.get(u);var h={},d=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var C in u)if(C!=="default"&&Object.prototype.hasOwnProperty.call(u,C)){var D=d?Object.getOwnPropertyDescriptor(u,C):null;D&&(D.get||D.set)?Object.defineProperty(h,C,D):h[C]=u[C]}return h.default=u,t&&t.set(u,h),h},b=function(u){if(typeof WeakMap!="function")return null;var c=new WeakMap,t=new WeakMap;return(b=function(d){return d?t:c})(u)},a.t0=E,a.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return a.t1=a.sent,f=(0,a.t0)(a.t1),a.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(8),e.e(9)]).then(e.bind(null,"gdfu"));case 9:return s=a.sent,a.t2=E,a.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 13:return a.t3=a.sent,v=(0,a.t2)(a.t3),i=function(u){return new Promise(function(c){return setTimeout(c,u)})},p={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u9009\u62E9\u6846",description:"\u52A0\u8F7D\u4E2D...",type:"string",enum:[],widget:"radio"}}},o=function(){var u=(0,v.useForm)(),c=function(){u.setValues({input1:"hello world"}),i(3e3).then(function(h){u.setSchemaByPath("select1",{description:"",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]})})};return f.default.createElement(v.default,{form:u,schema:p,onMount:c})},A=o,a.abrupt("return",A);case 20:case"end":return a.stop()}},P)}));function F(){return j.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.8.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"lifeCycle-demo"}},"listDisplay-demo":{component:Object(B.dynamic)({loader:function(){var j=Object(K.a)(g.a.mark(function P(){var f,s,v,b,E,i;return g.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,s=(0,o.t0)(o.t1),o.t2=f,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,v=(0,o.t2)(o.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},E=function(){return s.default.createElement(v.default,{schema:b})},i=E,o.abrupt("return",i);case 15:case"end":return o.stop()}},P)}));function F(){return j.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      // widget: 'cardList',
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Re}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo"}},"listDisplay-demo-1":{component:Object(B.dynamic)({loader:function(){var j=Object(K.a)(g.a.mark(function P(){var f,s,v,b,E,i;return g.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,s=(0,o.t0)(o.t1),o.t2=f,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,v=(0,o.t2)(o.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"simpleList",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},E=function(){return s.default.createElement(v.default,{schema:b})},i=E,o.abrupt("return",i);case 15:case"end":return o.stop()}},P)}));function F(){return j.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      widget: 'simpleList',
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Re}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-1"}},"listDisplay-demo-2":{component:Object(B.dynamic)({loader:function(){var j=Object(K.a)(g.a.mark(function P(){var f,s,v,b,E,i;return g.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,s=(0,o.t0)(o.t1),o.t2=f,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,v=(0,o.t2)(o.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"tableList",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},E=function(){return s.default.createElement(v.default,{schema:b})},i=E,o.abrupt("return",i);case 15:case"end":return o.stop()}},P)}));function F(){return j.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      widget: 'tableList',
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Re}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-2"}},"listDisplay-demo-3":{component:Object(B.dynamic)({loader:function(){var j=Object(K.a)(g.a.mark(function P(){var f,s,v,b,E,i;return g.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,s=(0,o.t0)(o.t1),o.t2=f,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,v=(0,o.t2)(o.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"drawerList",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"simpleList",props:{hideMove:!0},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},E=function(){return s.default.createElement(v.default,{schema:b})},i=E,o.abrupt("return",i);case 15:case"end":return o.stop()}},P)}));function F(){return j.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      widget: 'drawerList',
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
            widget: 'simpleList',
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Re}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-3"}},"listDisplay-demo-4":{component:Object(B.dynamic)({loader:function(){var j=Object(K.a)(g.a.mark(function P(){var f,s,v,b,E,i;return g.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,s=(0,o.t0)(o.t1),o.t2=f,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,v=(0,o.t2)(o.t3),window.hello=function(A){var w=A.value;console.log(w)},b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",type:"array",widget:"tabList",props:{tabName:"\u9879\u76EE"},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},E=function(){return s.default.createElement(v.default,{schema:b})},i=E,o.abrupt("return",i);case 16:case"end":return o.stop()}},P)}));function F(){return j.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

window.hello = ({ value }) => {
  console.log(value);
};

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      type: 'array',
      widget: 'tabList',
      props: {
        tabName: '\u9879\u76EE',
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Re}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-4"}},"listDisplay-demo-5":{component:Object(B.dynamic)({loader:function(){var j=Object(K.a)(g.a.mark(function P(){var f,s,v,b,E,i;return g.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,s=(0,o.t0)(o.t1),o.t2=f,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,v=(0,o.t2)(o.t3),b={type:"object",properties:{tabsName1:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"tabList",props:{type:"editable-card",tabName:"\u9879\u76EE"},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName1:{title:"\u5BF9\u8C61\u6570\u7EC4",type:"array",widget:"list1",props:{hideMove:!0},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},E=function(){return s.default.createElement(v.default,{schema:b})},i=E,o.abrupt("return",i);case 15:case"end":return o.stop()}},P)}));function F(){return j.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    tabsName1: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      widget: 'tabList',
      props: {
        type: 'editable-card',
        tabName: '\u9879\u76EE', // \u9009\u9879\u5361\u5934\u663E\u793A\u6587\u5B57\uFF0C\u5BF9\u5E94antd\u4E2DTabs\u7684tab\u5C5E\u6027\u3002
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
          listName1: {
            title: '\u5BF9\u8C61\u6570\u7EC4',
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

const Demo = () => <Form schema={schema} />;
export default Demo;`},"demo/display.js":{import:"../demo/display",content:Re}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-5"}},"listDisplay-demo-6":{component:Object(B.dynamic)({loader:function(){var j=Object(K.a)(g.a.mark(function P(){var f,s,v,b,E,i;return g.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,s=(0,o.t0)(o.t1),o.t2=f,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,v=(0,o.t2)(o.t3),window.hello=function(A){var w=A.value;console.log(w)},b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"virtualList",itemProps:{buttons:[{callback:"hello",text:"\u590D\u5236"}]},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},E=function(){return s.default.createElement(v.default,{schema:b})},i=E,o.abrupt("return",i);case 16:case"end":return o.stop()}},P)}));function F(){return j.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
      widget: 'virtualList',
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Re}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-6"}},"mapping-demo":{component:Object(B.dynamic)({loader:function(){var j=Object(K.a)(g.a.mark(function P(){var f,s,v,b,E,i,p,o,A,w,a;return g.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return p=function(t,h){if(!h&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var d=i(h);if(d&&d.has(t))return d.get(t);var C={},D=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var I in t)if(I!=="default"&&Object.prototype.hasOwnProperty.call(t,I)){var $=D?Object.getOwnPropertyDescriptor(t,I):null;$&&($.get||$.set)?Object.defineProperty(C,I,$):C[I]=t[I]}return C.default=t,d&&d.set(t,C),C},i=function(t){if(typeof WeakMap!="function")return null;var h=new WeakMap,d=new WeakMap;return(i=function(D){return D?d:h})(t)},f=e("K+nK"),u.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return u.t0=f,u.next=8,e.e(7).then(e.t.bind(null,"4IMT",7));case 8:return u.t1=u.sent,s=(0,u.t0)(u.t1),u.t2=f,u.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return u.t3=u.sent,v=(0,u.t2)(u.t3),u.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(8),e.e(9)]).then(e.bind(null,"gdfu"));case 17:return b=u.sent,u.t4=p,u.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 21:return u.t5=u.sent,E=(0,u.t4)(u.t5),o=function(t){var h=t.schema;return h.$id==="#"?v.default.createElement("div",null,t.children):v.default.createElement("div",null,"my custom object:",t.children)},A={type:"object",properties:{object2:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u8F93\u5165\u6846",type:"string"}}}},labelWidth:120,displayType:"row"},w=function(){var t=(0,E.useForm)(),h=function(C,D){console.log("formData:",C,"errors",D)};return v.default.createElement("div",null,v.default.createElement(E.default,{form:t,schema:A,onFinish:h,mapping:{object:"CustomComA"},widgets:{CustomComA:o}}),v.default.createElement(s.default,{type:"primary",onClick:t.submit},"\u63D0\u4EA4"))},a=w,u.abrupt("return",a);case 28:case"end":return u.stop()}},P)}));function F(){return j.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},"react-dom":{version:">=16.8.0"}},identifier:"mapping-demo"}},"watch-demo":{component:Object(B.dynamic)({loader:function(){var j=Object(K.a)(g.a.mark(function P(){var f,s,v,b,E,i,p,o;return g.a.wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return E=function(r,u){if(!u&&r&&r.__esModule)return r;if(r===null||typeof r!="object"&&typeof r!="function")return{default:r};var c=b(u);if(c&&c.has(r))return c.get(r);var t={},h=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in r)if(d!=="default"&&Object.prototype.hasOwnProperty.call(r,d)){var C=h?Object.getOwnPropertyDescriptor(r,d):null;C&&(C.get||C.set)?Object.defineProperty(t,d,C):t[d]=r[d]}return t.default=r,c&&c.set(r,t),t},b=function(r){if(typeof WeakMap!="function")return null;var u=new WeakMap,c=new WeakMap;return(b=function(h){return h?c:u})(r)},w.t0=E,w.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return w.t1=w.sent,f=(0,w.t0)(w.t1),w.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(8),e.e(9)]).then(e.bind(null,"gdfu"));case 9:return s=w.sent,w.t2=E,w.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 13:return w.t3=w.sent,v=(0,w.t2)(w.t3),i={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"}}},p=function(){var r=(0,v.useForm)(),u={"#":function(t){console.log("\u8868\u5355\u7684\u65F6\u65F6\u6570\u636E\u4E3A\uFF1A",t)},input1:function(t){r.setValueByPath("input2",t)}};return f.default.createElement(v.default,{form:r,schema:i,watch:u})},o=p,w.abrupt("return",o);case 19:case"end":return w.stop()}},P)}));function F(){return j.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.8.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo"}},"watch-demo-1":{component:Object(B.dynamic)({loader:function(){var j=Object(K.a)(g.a.mark(function P(){var f,s,v,b,E,i,p,o,A,w;return g.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return p=function(c,t){if(!t&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var h=i(t);if(h&&h.has(c))return h.get(c);var d={},C=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var D in c)if(D!=="default"&&Object.prototype.hasOwnProperty.call(c,D)){var I=C?Object.getOwnPropertyDescriptor(c,D):null;I&&(I.get||I.set)?Object.defineProperty(d,D,I):d[D]=c[D]}return d.default=c,h&&h.set(c,d),d},i=function(c){if(typeof WeakMap!="function")return null;var t=new WeakMap,h=new WeakMap;return(i=function(C){return C?h:t})(c)},f=e("K+nK"),r.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return r.t0=f,r.next=8,e.e(7).then(e.t.bind(null,"4IMT",7));case 8:return r.t1=r.sent,s=(0,r.t0)(r.t1),r.t2=p,r.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return r.t3=r.sent,v=(0,r.t2)(r.t3),r.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(8),e.e(9)]).then(e.bind(null,"gdfu"));case 17:return b=r.sent,r.t4=p,r.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 21:return r.t5=r.sent,E=(0,r.t4)(r.t5),o={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"radio"}}}}},A=function(){var c=(0,E.useForm)(),t=function(C,D){D.length>0?alert("errorFields:"+JSON.stringify(D)):alert("formData:"+JSON.stringify(C,null,2))},h={input1:function(C){C&&C.length>2?c.setSchemaByPath("obj1.select",function(D){var I=D.enumNames;return{enumNames:I.map(function($){return $+"a"})}}):c.setSchemaByPath("obj1.select",{enumNames:["\u65E9","\u4E2D","\u665A"]})}};return v.default.createElement("div",null,v.default.createElement(E.default,{form:c,schema:o,onFinish:t,watch:h}),v.default.createElement(s.default,{type:"",style:{marginRight:8},onClick:function(){return c.setSchemaByPath("input2",{title:"\u7F16\u8F91\u6846",format:"textarea"})}},"\u5C06 input \u6539\u4E3A textarea"),v.default.createElement(s.default,{type:"primary",onClick:c.submit},"\u63D0\u4EA4"))},w=A,r.abrupt("return",w);case 27:case"end":return r.stop()}},P)}));function F(){return j.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo-1"}},"widget-demo":{component:Object(B.dynamic)({loader:function(){var j=Object(K.a)(g.a.mark(function P(){var f,s,v,b,E,i,p,o,A,w,a,r,u;return g.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return A=function(d,C){if(!C&&d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var D=o(C);if(D&&D.has(d))return D.get(d);var I={},$=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var x in d)if(x!=="default"&&Object.prototype.hasOwnProperty.call(d,x)){var Z=$?Object.getOwnPropertyDescriptor(d,x):null;Z&&(Z.get||Z.set)?Object.defineProperty(I,x,Z):I[x]=d[x]}return I.default=d,D&&D.set(d,I),I},o=function(d){if(typeof WeakMap!="function")return null;var C=new WeakMap,D=new WeakMap;return(o=function($){return $?D:C})(d)},f=e("K+nK"),t.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return t.t0=f,t.next=8,e.e(7).then(e.t.bind(null,"4IMT",7));case 8:return t.t1=t.sent,s=(0,t.t0)(t.t1),t.next=12,Promise.all([e.e(3),e.e(18)]).then(e.t.bind(null,"cUip",7));case 12:return t.t2=f,t.next=15,Promise.all([e.e(0),e.e(7),e.e(17),e.e(19)]).then(e.t.bind(null,"iJl9",7));case 15:return t.t3=t.sent,v=(0,t.t2)(t.t3),t.t4=f,t.next=20,e.e(87).then(e.bind(null,"0Owb"));case 20:return t.t5=t.sent,b=(0,t.t4)(t.t5),t.t6=f,t.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return t.t7=t.sent,E=(0,t.t6)(t.t7),t.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(8),e.e(9)]).then(e.bind(null,"gdfu"));case 29:return i=t.sent,t.t8=A,t.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 33:return t.t9=t.sent,p=(0,t.t8)(t.t9),w={type:"object",properties:{string:{title:"\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6",type:"string",widget:"site"},select:{title:"\u5355\u9009",type:"number",enum:[1,2,3],enumNames:["\u9009\u98791","\u9009\u98792","\u9009\u98793"]}}},a=function(d){return console.log("widget props:",d),E.default.createElement(v.default,(0,b.default)({addonBefore:"https://",addonAfter:".com"},d))},r=function(){var d=(0,p.useForm)();return E.default.createElement("div",null,E.default.createElement(p.default,{form:d,schema:w,widgets:{site:a},onFinish:function(D){return alert(JSON.stringify(D,null,2))}}),E.default.createElement(s.default,{type:"primary",onClick:d.submit},"\u63D0\u4EA4"))},u=r,t.abrupt("return",u);case 40:case"end":return t.stop()}},P)}));function F(){return j.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},"react-dom":{version:">=16.8.0"}},identifier:"widget-demo"}},"form-render-dependencies":{component:Object(B.dynamic)({loader:function(){var j=Object(K.a)(g.a.mark(function P(){return g.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(25)]).then(e.bind(null,"ODQR"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},P)}));function F(){return j.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:Se}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-dependencies"}},"form-render-listexpression":{component:Object(B.dynamic)({loader:function(){var j=Object(K.a)(g.a.mark(function P(){return g.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(25)]).then(e.bind(null,"5OWw"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},P)}));function F(){return j.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:Pn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-listexpression"}},"form-render-doublebind":{component:Object(B.dynamic)({loader:function(){var j=Object(K.a)(g.a.mark(function P(){return g.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(25)]).then(e.bind(null,"Xjjr"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},P)}));function F(){return j.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:Tn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-doublebind"}},"form-render-rightpath":{component:Object(B.dynamic)({loader:function(){var j=Object(K.a)(g.a.mark(function P(){return g.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(25)]).then(e.bind(null,"bD0a"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},P)}));function F(){return j.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:gn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-rightpath"}},"form-render-custommessage":{component:Object(B.dynamic)({loader:function(){var j=Object(K.a)(g.a.mark(function P(){return g.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(25)]).then(e.bind(null,"yBrT"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},P)}));function F(){return j.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:on}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-custommessage"}},"measure-demo":{component:Object(B.dynamic)({loader:function(){var j=Object(K.a)(g.a.mark(function P(){var f,s,v,b,E,i,p,o,A,w;return g.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return o=function(c,t){if(!t&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var h=p(t);if(h&&h.has(c))return h.get(c);var d={},C=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var D in c)if(D!=="default"&&Object.prototype.hasOwnProperty.call(c,D)){var I=C?Object.getOwnPropertyDescriptor(c,D):null;I&&(I.get||I.set)?Object.defineProperty(d,D,I):d[D]=c[D]}return d.default=c,h&&h.set(c,d),d},p=function(c){if(typeof WeakMap!="function")return null;var t=new WeakMap,h=new WeakMap;return(p=function(C){return C?h:t})(c)},f=e("K+nK"),r.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return r.t0=f,r.next=8,e.e(7).then(e.t.bind(null,"4IMT",7));case 8:return r.t1=r.sent,s=(0,r.t0)(r.t1),r.next=12,e.e(14).then(e.t.bind(null,"tL+A",7));case 12:return r.t2=f,r.next=15,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 15:return r.t3=r.sent,v=(0,r.t2)(r.t3),r.t4=o,r.next=20,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 20:return r.t5=r.sent,b=(0,r.t4)(r.t5),r.next=24,Promise.all([e.e(0),e.e(1),e.e(2),e.e(8),e.e(9)]).then(e.bind(null,"gdfu"));case 24:return E=r.sent,r.t6=o,r.next=28,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 28:return r.t7=r.sent,i=(0,r.t6)(r.t7),A=function(){var c=(0,i.useForm)({logOnMount:function(C){console.log("onMount",C)},logOnSubmit:function(C){console.log("onSubmit",C)}}),t={type:"object",properties:{input1:{title:"\u8F93\u5165\u6846",required:!0,type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u5DE6","\u4E2D","\u53F3"],widget:"radio"}}},h=function(C,D){D.length>0?v.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(D.map(function(I){return I.name}))):v.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")};return b.default.createElement("div",null,b.default.createElement(i.default,{id:"my-demo-form",form:c,schema:t,onFinish:h}),b.default.createElement(s.default,{type:"primary",onClick:c.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},w=A,r.abrupt("return",w);case 33:case"end":return r.stop()}},P)}));function F(){return j.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"measure-demo"}},"migrate-demo":{component:Object(B.dynamic)({loader:function(){var j=Object(K.a)(g.a.mark(function P(){var f,s,v,b,E,i,p,o;return g.a.wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return p=function(){var r=(0,v.useForm)(),u=function(t,h){h.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(h))):alert(JSON.stringify(t))};return s.default.createElement("div",null,s.default.createElement(v.default,{form:r,schema:i,onFinish:u}),s.default.createElement("button",{onClick:r.submit},"\u63D0\u4EA4"))},E=function(r,u){if(!u&&r&&r.__esModule)return r;if(r===null||typeof r!="object"&&typeof r!="function")return{default:r};var c=b(u);if(c&&c.has(r))return c.get(r);var t={},h=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in r)if(d!=="default"&&Object.prototype.hasOwnProperty.call(r,d)){var C=h?Object.getOwnPropertyDescriptor(r,d):null;C&&(C.get||C.set)?Object.defineProperty(t,d,C):t[d]=r[d]}return t.default=r,c&&c.set(r,t),t},b=function(r){if(typeof WeakMap!="function")return null;var u=new WeakMap,c=new WeakMap;return(b=function(h){return h?c:u})(r)},f=e("K+nK"),w.t0=f,w.next=7,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 7:return w.t1=w.sent,s=(0,w.t0)(w.t1),w.t2=E,w.next=12,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 12:return w.t3=w.sent,v=(0,w.t2)(w.t3),i={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}},o=p,w.abrupt("return",o);case 17:case"end":return w.stop()}},P)}));function F(){return j.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate-demo"}},"migrate-demo-1":{component:Object(B.dynamic)({loader:function(){var j=Object(K.a)(g.a.mark(function P(){var f,s,v,b,E,i,p,o,A,w,a,r,u;return g.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return A=function(d,C){if(!C&&d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var D=o(C);if(D&&D.has(d))return D.get(d);var I={},$=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var x in d)if(x!=="default"&&Object.prototype.hasOwnProperty.call(d,x)){var Z=$?Object.getOwnPropertyDescriptor(d,x):null;Z&&(Z.get||Z.set)?Object.defineProperty(I,x,Z):I[x]=d[x]}return I.default=d,D&&D.set(d,I),I},o=function(d){if(typeof WeakMap!="function")return null;var C=new WeakMap,D=new WeakMap;return(o=function($){return $?D:C})(d)},f=e("K+nK"),t.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return t.t0=f,t.next=8,e.e(7).then(e.t.bind(null,"4IMT",7));case 8:return t.t1=t.sent,s=(0,t.t0)(t.t1),t.t2=f,t.next=13,Promise.resolve().then(e.bind(null,"tJVT"));case 13:return t.t3=t.sent,v=(0,t.t2)(t.t3),t.next=17,Promise.all([e.e(3),e.e(18)]).then(e.t.bind(null,"cUip",7));case 17:return t.t4=f,t.next=20,Promise.all([e.e(0),e.e(7),e.e(17),e.e(19)]).then(e.t.bind(null,"iJl9",7));case 20:return t.t5=t.sent,b=(0,t.t4)(t.t5),t.t6=A,t.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return t.t7=t.sent,E=(0,t.t6)(t.t7),t.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(8),e.e(9)]).then(e.bind(null,"gdfu"));case 29:return i=t.sent,t.next=32,e.e(84).then(e.bind(null,"7t+U"));case 32:return p=t.sent,w=b.default.TextArea,a={type:"object",properties:{number:{title:"\u6570\u5B57\u8F93\u5165\u6846",type:"number","ui:disabled":!0},checkbox:{title:"\u662F\u5426\u9009\u62E9",type:"boolean","ui:widget":"switch"}},required:["number"]},r=function(){var d=(0,E.useState)(JSON.stringify(a)),C=(0,v.default)(d,2),D=C[0],I=C[1],$=(0,E.useState)({}),x=(0,v.default)($,2),Z=x[0],Le=x[1],Ue=function(){try{var bn=(0,p.updateSchemaToNewVersion)(JSON.parse(D));Le(bn)}catch(ut){console.log(ut)}},rn=function(bn){I(bn.target.value)},_e=function(){I(JSON.stringify(JSON.parse(D),null,2))};return E.default.createElement("div",null,E.default.createElement("div",null,"\u586B\u5165\u65E7\u7248schema\uFF1A"),E.default.createElement(w,{style:{minHeight:400,marginTop:12,marginBottom:12},value:D,onChange:rn}),E.default.createElement(s.default,{style:{marginRight:12},onClick:_e},"\u683C\u5F0F\u5316\u65E7schema"),E.default.createElement(s.default,{type:"primary",onClick:Ue},"\u751F\u6210\u65B0\u7248schema"),E.default.createElement(w,{style:{minHeight:400,marginTop:12},value:JSON.stringify(Z,null,2)}))},u=r,t.abrupt("return",u);case 38:case"end":return t.stop()}},P)}));function F(){return j.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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

export default Translator;`},"packages/form-render/src/utils.js":{import:"../../../packages/form-render/src/utils.js",content:$e}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"}},identifier:"migrate-demo-1"}},"migrate2-demo":{component:Object(B.dynamic)({loader:function(){var j=Object(K.a)(g.a.mark(function P(){var f,s,v,b,E,i,p,o,A;return g.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return o=function(){var u=(0,v.useState)({}),c=(0,s.default)(u,2),t=c[0],h=c[1],d=(0,v.useState)([]),C=(0,s.default)(d,2),D=C[0],I=C[1],$=(0,v.useState)(!1),x=(0,s.default)($,2),Z=x[0],Le=x[1],Ue=(0,b.useForm)({formData:t,onChange:h,onValidate:I,showValidate:Z});(0,v.useEffect)(function(){Ue.init()},[]);var rn=function(){Le(!0),D.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(D))):alert(JSON.stringify(t))};return v.default.createElement("div",null,v.default.createElement(b.default,{form:Ue,schema:p}),v.default.createElement("button",{onClick:rn},"\u63D0\u4EA4"))},i=function(u,c){if(!c&&u&&u.__esModule)return u;if(u===null||typeof u!="object"&&typeof u!="function")return{default:u};var t=E(c);if(t&&t.has(u))return t.get(u);var h={},d=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var C in u)if(C!=="default"&&Object.prototype.hasOwnProperty.call(u,C)){var D=d?Object.getOwnPropertyDescriptor(u,C):null;D&&(D.get||D.set)?Object.defineProperty(h,C,D):h[C]=u[C]}return h.default=u,t&&t.set(u,h),h},E=function(u){if(typeof WeakMap!="function")return null;var c=new WeakMap,t=new WeakMap;return(E=function(d){return d?t:c})(u)},f=e("K+nK"),a.t0=f,a.next=7,Promise.resolve().then(e.bind(null,"tJVT"));case 7:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.t2=i,a.next=12,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 12:return a.t3=a.sent,v=(0,a.t2)(a.t3),a.t4=i,a.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 17:return a.t5=a.sent,b=(0,a.t4)(a.t5),p={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}},A=o,a.abrupt("return",A);case 22:case"end":return a.stop()}},P)}));function F(){return j.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
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
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate2-demo"}},"schema-demo":{component:Object(B.dynamic)({loader:function(){var j=Object(K.a)(g.a.mark(function P(){var f,s,v,b,E;return g.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return f=e("K+nK"),p.t0=f,p.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return p.t1=p.sent,s=(0,p.t0)(p.t1),p.t2=f,p.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return p.t3=p.sent,v=(0,p.t2)(p.t3),p.next=13,e.e(20).then(e.bind(null,"8iYR"));case 13:return b=p.sent,E=function(){return s.default.createElement(v.default,{schema:b.basic})},p.abrupt("return",E);case 16:case"end":return p.stop()}},P)}));function F(){return j.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { basic } from '../json/schema';

export default () => <FR schema={basic} />;`},"demo/FR.jsx":{import:"../demo/FR",content:oe},"json/schema.js":{import:"../json/schema",content:zn}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo"}},"schema-demo-1":{component:Object(B.dynamic)({loader:function(){var j=Object(K.a)(g.a.mark(function P(){var f,s,v,b,E;return g.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return f=e("K+nK"),p.t0=f,p.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return p.t1=p.sent,s=(0,p.t0)(p.t1),p.t2=f,p.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return p.t3=p.sent,v=(0,p.t2)(p.t3),p.next=13,e.e(20).then(e.bind(null,"8iYR"));case 13:return b=p.sent,E=function(){return s.default.createElement(v.default,{schema:b.titleTrick})},p.abrupt("return",E);case 16:case"end":return p.stop()}},P)}));function F(){return j.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { titleTrick } from '../json/schema';

export default () => <FR schema={titleTrick} />;`},"demo/FR.jsx":{import:"../demo/FR",content:oe},"json/schema.js":{import:"../json/schema",content:zn}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo-1"}},"docs-playground":{component:Object(B.dynamic)({loader:function(){var j=Object(K.a)(g.a.mark(function P(){return g.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(25)]).then(e.bind(null,"BASV"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},P)}));function F(){return j.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:Bn},"main.js":{import:"./main",content:An},"json/simplest.json":{import:"./json/simplest.json",content:yn},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:Te},"monaco/index.js":{import:"./monaco",content:rt},"theme.css":{import:"./theme.css",content:Mn},"index.css":{import:"./index.css",content:at}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:"^16.0.0"},"react-dom":{version:"^16.0.0"},"deep-equal":{version:"2.0.5"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.8.1"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-simple-code-editor":{version:"0.11.0"},prismjs:{version:"1.23.0"}},identifier:"docs-playground"}},"docs-playground1":{component:Object(B.dynamic)({loader:function(){var j=Object(K.a)(g.a.mark(function P(){return g.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(25)]).then(e.bind(null,"Wrpt"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},P)}));function F(){return j.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:pt},"main.js":{import:"./main",content:st},"json/simplest.json":{import:"./json/simplest.json",content:ft},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:Kn},"monaco/index.js":{import:"./monaco",content:it},"suggestionsMap.js":{import:"./suggestionsMap",content:Jn},"index.css":{import:"./index.css",content:ht}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:"^17.x"},"react-dom":{version:">=16.9.0"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.8.1"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-monaco-editor":{version:"0.44.0"},"@types/react":{version:"^17.x"}},identifier:"docs-playground1"}},"table-render-advanced":{component:Object(B.dynamic)({loader:function(){var j=Object(K.a)(g.a.mark(function P(){return g.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(25)]).then(e.bind(null,"7ZP+"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},P)}));function F(){return j.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{tsx:Wn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.5"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!0,identifier:"table-render-advanced"}},"table-render-nosearch":{component:Object(B.dynamic)({loader:function(){var j=Object(K.a)(g.a.mark(function P(){return g.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(25)]).then(e.bind(null,"CfUQ"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},P)}));function F(){return j.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{tsx:Ln}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.5"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!0,identifier:"table-render-nosearch"}},"table-render-notitle":{component:Object(B.dynamic)({loader:function(){var j=Object(K.a)(g.a.mark(function P(){return g.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(25)]).then(e.bind(null,"/usH"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},P)}));function F(){return j.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{tsx:Un}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.5"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!0,identifier:"table-render-notitle"}},"table-render-paramtable":{component:Object(B.dynamic)({loader:function(){var j=Object(K.a)(g.a.mark(function P(){return g.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(25)]).then(e.bind(null,"48jF"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},P)}));function F(){return j.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{tsx:ot}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.5"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},umi:{version:"3.4.19"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!0,identifier:"table-render-paramtable"}},"table-render-demo":{component:Object(B.dynamic)({loader:function(){var j=Object(K.a)(g.a.mark(function P(){var f,s,v,b,E,i,p,o,A;return g.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return f=e("K+nK"),a.t0=f,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(74)]).then(e.bind(null,"P2DI"));case 8:for(v=a.sent,b=[],E=0;E<6;E++)b.push({id:E.toString(),title:"\u6807\u9898".concat(E+1),created_at:new Date().getTime()});return i={type:"object",properties:{title:{title:"\u6807\u9898",type:"string",width:"30%"},created_at:{title:"\u521B\u5EFA\u65F6\u95F4",type:"string",format:"date",width:"30%"}}},p=[{title:"\u6807\u9898",dataIndex:"title"},{title:"\u521B\u5EFA\u65F6\u95F4",key:"since",dataIndex:"created_at",valueType:"date"},{title:"\u64CD\u4F5C",render:function(u,c){return s.default.createElement("a",{onClick:function(){return alert(u.title)}},"\u7F16\u8F91")}}],o=function(){var u=function(){return{rows:b,total:b.length}};return s.default.createElement(s.default.Fragment,null,s.default.createElement(v.Search,{schema:i,api:u}),s.default.createElement(v.Table,{headerTitle:"\u6700\u7B80\u8868\u683C",columns:p,rowKey:"id"}))},A=(0,v.withTable)(o),a.abrupt("return",A);case 16:case"end":return a.stop()}},P)}));function F(){return j.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default withTable(Wrapper);`}},dependencies:{react:{version:">=16.8.0"},"table-render":{version:"1.1.5"},antd:{version:"4.x",css:"antd/dist/antd.css"}},transform:!0,defaultShowCode:!0,identifier:"table-render-demo"}},"table-render-test1":{component:Object(B.dynamic)({loader:function(){var j=Object(K.a)(g.a.mark(function P(){return g.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(25)]).then(e.bind(null,"aMwh"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},P)}));function F(){return j.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:xn}},dependencies:{react:{version:">=16.8.0"},"table-render":{version:"1.1.5"},antd:{version:"4.x",css:"antd/dist/antd.css"}},identifier:"table-render-test1"}},"generator-demo":{component:Object(B.dynamic)({loader:function(){var j=Object(K.a)(g.a.mark(function P(){var f,s,v,b,E,i;return g.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,s=(0,o.t0)(o.t1),o.t2=f,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(75)]).then(e.bind(null,"nYSz"));case 9:return o.t3=o.sent,v=(0,o.t2)(o.t3),b={type:"object",properties:{inputName:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string"}}},E=function(){return s.default.createElement("div",{style:{height:"80vh"}},s.default.createElement(v.default,{defaultValue:b}))},i=E,o.abrupt("return",i);case 15:case"end":return o.stop()}},P)}));function F(){return j.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.14.0"},"fr-generator":{version:"2.5.8"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.14.0"}},transform:!0,defaultShowCode:!0,identifier:"generator-demo"}},"generator-modal":{component:Object(B.dynamic)({loader:function(){var j=Object(K.a)(g.a.mark(function P(){return g.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(25)]).then(e.bind(null,"PPgD"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},P)}));function F(){return j.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:lt}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.5.8"},"react-dom":{version:">=16.9.0"}},identifier:"generator-modal"}},"generator-settings":{component:Object(B.dynamic)({loader:function(){var j=Object(K.a)(g.a.mark(function P(){return g.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(25)]).then(e.bind(null,"M63W"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},P)}));function F(){return j.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:mn}},dependencies:{react:{version:">=16.14.0"},"fr-generator":{version:"2.5.8"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.14.0"}},identifier:"generator-settings"}},"generator-layout":{component:Object(B.dynamic)({loader:function(){var j=Object(K.a)(g.a.mark(function P(){return g.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(25)]).then(e.bind(null,"SOdT"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},P)}));function F(){return j.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:Yn},"index.less":{import:"./index.less",content:Hn}},dependencies:{react:{version:">=16.14.0"},"fr-generator":{version:"2.5.8"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.14.0"}},identifier:"generator-layout"}},"generator-transformer":{component:Object(B.dynamic)({loader:function(){var j=Object(K.a)(g.a.mark(function P(){return g.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(25)]).then(e.bind(null,"jktF"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},P)}));function F(){return j.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:ln}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.5.8"},"react-dom":{version:">=16.9.0"}},identifier:"generator-transformer"}},"generator-playground":{component:Object(B.dynamic)({loader:function(){var j=Object(K.a)(g.a.mark(function P(){return g.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(25)]).then(e.bind(null,"TYW4"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},P)}));function F(){return j.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:vt},"index.less":{import:"./index.less",content:Hn}},dependencies:{react:{version:">=16.14.0"},umi:{version:"3.4.19"},"fr-generator":{version:"2.5.8"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.14.0"}},identifier:"generator-playground"}}}},PbZa:function(jn,cn,e){"use strict";e.r(cn);var K=e("q1tI"),n=e.n(K),g=e("dEAq"),B=e.n(g),ue=e("0zqC"),V=e("ZpkN"),Re=e("JjdP"),Oe=n.a.memo(Re.default["table-render-demo"].component);cn.default=oe=>(n.a.useEffect(()=>{oe!=null&&oe.location.hash&&g.AnchorLink.scrollToAnchor(decodeURIComponent(oe.location.hash.slice(1)))},[]),n.a.createElement(n.a.Fragment,null,n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"markdown"},n.a.createElement("div",{style:{display:"flex",alignItems:"center",marginBottom:"24px"}},n.a.createElement("img",{src:"https://img.alicdn.com/tfs/TB17UtINiLaK1RjSZFxXXamPFXa-606-643.png",alt:"logo",width:"48px"}),n.a.createElement("span",{style:{fontSize:"30px",fontWeight:"600",display:"inline-block",marginLeft:"12px"}},"TableRender")),n.a.createElement("p",{style:{display:"flex",justifyContent:"space-between",width:"440px"}},n.a.createElement(g.Link,{to:"https://www.npmjs.com/package/table-render?_blank"},n.a.createElement("img",{alt:"npm",src:"https://img.shields.io/npm/v/table-render.svg?maxAge=3600&style=flat-square"})),n.a.createElement(g.Link,{to:"https://npmjs.org/package/table-render"},n.a.createElement("img",{alt:"NPM downloads",src:"https://img.shields.io/npm/dm/table-render.svg?style=flat-square"})),n.a.createElement(g.Link,{to:"https://npmjs.org/package/table-render"},n.a.createElement("img",{alt:"NPM all downloads",src:"https://img.shields.io/npm/dt/table-render.svg?style=flat-square"})),n.a.createElement("a",null,n.a.createElement("img",{alt:"PRs Welcome",src:"https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square"}))),n.a.createElement("blockquote",null,n.a.createElement("p",null,"\u6613\u7528\u4E14\u8F7B\u91CF\u7684\u4E2D\u540E\u53F0",n.a.createElement("strong",null,"\u5217\u8868\u89E3\u51B3\u65B9\u6848"),"\uFF0C\u5E38\u7528\u4E8E",n.a.createElement("strong",null,"\u641C\u7D22\u5217\u8868\u9875"),"\u5FEB\u901F\u751F\u6210")),n.a.createElement("h2",{id:"\u4F18\u52BF"},n.a.createElement(g.AnchorLink,{to:"#\u4F18\u52BF","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u4F18\u52BF"),n.a.createElement("ol",null,n.a.createElement("li",null,n.a.createElement("strong",null,"\u771F\u6B63\u5F00\u7BB1\u5373\u7528"),"\uFF1A\u4EE5\u6700\u7B80\u5355\u7684 API \u914D\u7F6E\u8BF7\u6C42\u548C\u8868\u5934\u7684\u5B57\u6BB5\uFF0C\u5C31\u80FD\u751F\u6210\u4E00\u4E2A\u597D\u7528\u641C\u7D22\u5217\u8868\u3002"),n.a.createElement("li",null,n.a.createElement("strong",null,"XRender \u751F\u6001"),"\uFF1A\u641C\u7D22\u7B5B\u9009\u80FD\u529B\u7528 FormRender \u6765\u63D0\u4F9B\uFF0C\u4EE5\u6700\u5C0F\u6210\u672C\u5FEB\u901F\u751F\u6210\u4E0A\u4FA7\u641C\u7D22\u9762\u677F\u3002"),n.a.createElement("li",null,n.a.createElement("strong",null,"\u65E0\u7F1D\u4E60\u60EF\u4F7F\u7528"),"\uFF1A\u8868\u683C\u80FD\u7528 Ant Design Table \u6765\u63D0\u4F9B\uFF0C\u964D\u4F4E\u7528\u6237\u4F7F\u7528\u6210\u672C\u3002")),n.a.createElement("h2",{id:"\u4F55\u65F6\u4F7F\u7528"},n.a.createElement(g.AnchorLink,{to:"#\u4F55\u65F6\u4F7F\u7528","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u4F55\u65F6\u4F7F\u7528"),n.a.createElement("ol",null,n.a.createElement("li",null,"\u7528\u4E8E\u67E5\u770B\u548C\u5904\u7406\u591A\u6761\u7ED3\u6784\u7C7B\u4F3C\u7684\u6570\u636E\uFF0C\u53EF\u5BF9\u6570\u636E\u8FDB\u884C\u6392\u5E8F\u3001\u7B5B\u9009\u3001\u5BF9\u6BD4\u6216\u5176\u4ED6\u81EA\u5B9A\u4E49\u64CD\u4F5C\uFF0C\u5E38\u6709\u5BFC\u822A\u5230\u8BE6\u60C5\u9875\u9762\u7684\u4F5C\u7528\u3002"),n.a.createElement("li",null,"\u8868\u683C\u5217\u8868\u5EFA\u8BAE\u5C06\u91CD\u8981\u4FE1\u606F\u548C\u64CD\u4F5C\u5C55\u793A\u51FA\u6765\uFF0C\u4E0D\u91CD\u8981\u4FE1\u606F\u76F4\u63A5\u6536\u8D77\uFF0C\u53EF\u4EE5\u5E2E\u52A9\u7528\u6237\u66F4\u9AD8\u6548\u7684\u67E5\u770B\u3001\u5904\u7406\u3001\u67E5\u627E\u6570\u636E\u3002")),n.a.createElement("h2",{id:"\u5982\u4F55\u4F7F\u7528"},n.a.createElement(g.AnchorLink,{to:"#\u5982\u4F55\u4F7F\u7528","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u5982\u4F55\u4F7F\u7528"),n.a.createElement("h3",{id:"\u5B89\u88C5"},n.a.createElement(g.AnchorLink,{to:"#\u5B89\u88C5","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u5B89\u88C5"),n.a.createElement("p",null,"table-render \u4F9D\u8D56 ant design\uFF0C\u5355\u72EC\u4F7F\u7528\u4E0D\u8981\u5FD8\u8BB0\u5B89\u88C5\uFF5E"),n.a.createElement(V.a,{code:"npm i table-render --save",lang:"sh"}),n.a.createElement("h3",{id:"\u4EE3\u7801\u6F14\u793A"},n.a.createElement(g.AnchorLink,{to:"#\u4EE3\u7801\u6F14\u793A","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u4EE3\u7801\u6F14\u793A")),n.a.createElement(ue.default,Re.default["table-render-demo"].previewerProps,n.a.createElement(Oe,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h2",{id:"api"},n.a.createElement(g.AnchorLink,{to:"#api","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"API"),n.a.createElement("h3",{id:"withtable"},n.a.createElement(g.AnchorLink,{to:"#withtable","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),n.a.createElement("code",null,"withTable")),n.a.createElement("p",null,"TableRender \u7684\u4E66\u5199\u80FD\u591F\u5F88\u7B80\u6D01\uFF0C\u5728\u5E95\u5C42\u4F7F\u7528\u4E86 Context\uFF0CwithTable \u5219\u662F Context Provider \u9AD8\u9636\u7EC4\u4EF6\u5F62\u5F0F\u7684\u8BED\u6CD5\u7CD6\u3002\u4E66\u5199\u4E0A\u7528\u6237\u4E0D\u518D\u9700\u8981\u989D\u5916\u6DFB\u52A0 Provider \u5305\u88F9\u8868\u683C\u7EC4\u4EF6\uFF0C\u6240\u6709\u8868\u683C\u4EE3\u7801\u901A\u8FC7 ",n.a.createElement("code",null,"withTable")," \u5305\u4E00\u4E0B\u5373\u53EF\uFF1A"),n.a.createElement("p",null,"\u4F7F\u7528 withTable \u7684\u5199\u6CD5"),n.a.createElement(V.a,{code:`import { withTable\uFF0CuseTable } from 'table-render';

const Page = () => {
  const { refresh } = useTable();
}

export default withTable(Page)`,lang:"js"}),n.a.createElement("h3",{id:"search-\u53C2\u6570"},n.a.createElement(g.AnchorLink,{to:"#search-\u53C2\u6570","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),n.a.createElement("code",null,"<Search>")," \u53C2\u6570"),n.a.createElement("p",null,n.a.createElement("strong",null,"\u6211\u4EEC\u5C06\u641C\u7D22\u76F8\u5173\u7684\u80FD\u529B\u653E\u5230 ",n.a.createElement("code",null,"<Search>")," \u4E0A\u9762\u914D\u7F6E\uFF0C\u5305\u62EC\u5BF9\u5E94\u7684\u641C\u7D22\u7B5B\u9009\u8868\u5355\u7684\u6E32\u67D3")),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u5C5E\u6027"),n.a.createElement("th",null,"\u63CF\u8FF0"),n.a.createElement("th",null,"\u7C7B\u578B"),n.a.createElement("th",null,"\u9ED8\u8BA4\u503C"),n.a.createElement("th",null,"\u5FC5\u586B"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"schema"),n.a.createElement("td",null,"\u7528\u4E8E\u6E32\u67D3\u8868\u5355\u7684 schema\uFF0C\u5177\u4F53\u7684 api \u53C2\u8003 ",n.a.createElement(g.Link,{to:"/form-render/config/schema"},"form-render \u6587\u6863")),n.a.createElement("td",null,n.a.createElement("code",null,"object")),n.a.createElement("td",null,"-"),n.a.createElement("td",null,"\u662F")),n.a.createElement("tr",null,n.a.createElement("td",null,"api"),n.a.createElement("td",null,"\u521D\u59CB\u5316&\u70B9\u51FB\u67E5\u8BE2\u65F6\u6267\u884C\u7684\u51FD\u6570"),n.a.createElement("td",null,n.a.createElement("code",null,"Function")," or ",n.a.createElement("code",null,"Array")),n.a.createElement("td",null,"-"),n.a.createElement("td",null,"\u662F")),n.a.createElement("tr",null,n.a.createElement("td",null,"onSearch"),n.a.createElement("td",null,"\u5728\u8868\u683C\u67E5\u8BE2\u65F6\u6267\u884C\u4E00\u4E9B\u989D\u5916\u7684\u64CD\u4F5C"),n.a.createElement("td",null,n.a.createElement("code",null,"Function")),n.a.createElement("td",null,"-"),n.a.createElement("td",null,"\u5426")),n.a.createElement("tr",null,n.a.createElement("td",null,"afterSearch"),n.a.createElement("td",null,"\u5728\u8868\u683C\u67E5\u8BE2\u7ED3\u675F\u540E\u6267\u884C\u4E00\u4E9B\u989D\u5916\u7684\u64CD\u4F5C"),n.a.createElement("td",null,n.a.createElement("code",null,"Function")),n.a.createElement("td",null,"-"),n.a.createElement("td",null,"\u5426")),n.a.createElement("tr",null,n.a.createElement("td",null,"searchOnMount"),n.a.createElement("td",null,"\u7EC4\u4EF6\u521D\u6B21\u6302\u8F7D\u65F6\uFF0C\u662F\u5426\u9ED8\u8BA4\u6267\u884C\u67E5\u8BE2\u52A8\u4F5C"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"true")),n.a.createElement("td",null,"\u5426")),n.a.createElement("tr",null,n.a.createElement("td",null,"hidden"),n.a.createElement("td",null,"\u662F\u5426\u9690\u85CF",n.a.createElement("code",null,"<Search />"),"\u7EC4\u4EF6"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"false")),n.a.createElement("td",null,"\u5426")),n.a.createElement("tr",null,n.a.createElement("td",null,"searchBtnRender"),n.a.createElement("td",null,"\u81EA\u5B9A\u4E49\u8868\u5355\u67E5\u8BE2\u6309\u94AE"),n.a.createElement("td",null,n.a.createElement("code",null,"(refresh,clearSearch) => ReactNode[]")),n.a.createElement("td",null,"-"),n.a.createElement("td",null,"\u5426")),n.a.createElement("tr",null,n.a.createElement("td",null,"searchBtnStyle"),n.a.createElement("td",null,"\u81EA\u5B9A\u4E49\u8868\u5355\u64CD\u4F5C\u6309\u94AE\u7EC4\u7684\u6837\u5F0F"),n.a.createElement("td",null,n.a.createElement("code",null,"React.CSSProperties")),n.a.createElement("td",null,"{","}"),n.a.createElement("td",null,"\u5426")),n.a.createElement("tr",null,n.a.createElement("td",null,"searchBtnClassName"),n.a.createElement("td",null,"\u81EA\u5B9A\u4E49\u8868\u5355\u64CD\u4F5C\u6309\u94AE\u7EC4\u7684 ClassName"),n.a.createElement("td",null,n.a.createElement("code",null,"string")),n.a.createElement("td",null,"''"),n.a.createElement("td",null,"\u5426")),n.a.createElement("tr",null,n.a.createElement("td",null,"debug"),n.a.createElement("td",null,"\u5F00\u542F debug \u6A21\u5F0F\uFF0C\u65F6\u65F6\u663E\u793A\u5185\u90E8\u72B6\u6001\uFF0C",n.a.createElement("strong",null,"\u5F00\u53D1\u7684\u65F6\u5019\u5F3A\u70C8\u5EFA\u8BAE\u6253\u5F00")),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"false")),n.a.createElement("td",null,"\u5426")))),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("strong",null,"api"),"\uFF1A ",n.a.createElement("code",null,"api")," \u662F ",n.a.createElement("code",null,"<Search />")," \u6700\u91CD\u8981\u7684 \u5C5E\u6027\uFF0C",n.a.createElement("code",null,"api")," \u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u6709\u4E24\u4E2A\u5165\u53C2\uFF1A",n.a.createElement("code",null,"params"),"\u3001",n.a.createElement("code",null,"sorter"),"\uFF0C\u5206\u522B\u662F\u8868\u5355\u7B5B\u9009\u9879\u7684\u503C\u3001\u6392\u5E8F\u53C2\u6570\u3002\u5B83\u7684\u8FD4\u56DE\u503C\u662F\u4E00\u4E2A",n.a.createElement("code",null,"Object"),"\uFF0C\u6B64",n.a.createElement("code",null,"Object"),"\u4E2D\u5FC5\u987B\u8981\u6709 rows \u548C total\uFF0C\u5176\u4E2Drows\u5373",n.a.createElement("code",null,"dataSource")," \uFF0Ctotal \u7528\u4E8E\u5206\u9875\u3002",n.a.createElement("code",null,"api")," \u4F1A\u63A5\u7BA1 loading \u7684\u8BBE\u7F6E\uFF0C\u540C\u65F6\u5728\u8868\u5355\u67E5\u8BE2\u548C params \u53C2\u6570\u53D1\u751F\u4FEE\u6539\u65F6\u91CD\u65B0\u6267\u884C\u3002\u540C\u65F6 \u67E5\u8BE2\u8868\u5355\u7684\u503C\u548C params \u53C2\u6570\u4E5F\u4F1A\u5E26\u5165\u3002")),n.a.createElement("h3",{id:"table-\u53C2\u6570"},n.a.createElement(g.AnchorLink,{to:"#table-\u53C2\u6570","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),n.a.createElement("code",null,"<Table>")," \u53C2\u6570"),n.a.createElement("p",null,n.a.createElement("strong",null,"\u652F\u6301\u6240\u6709 antd table \u7684 props\uFF0C\u4F46\u662F",n.a.createElement("code",null,"dataSource"),", ",n.a.createElement("code",null,"loading"),", ",n.a.createElement("code",null,"pagination"),"\u8FD9\u51E0\u4E2A\u53C2\u6570\u662F\u5185\u90E8\u72B6\u6001\uFF0C\u4E0D\u9700\u8981\u586B\u5199\uFF0C\u6700\u57FA\u672C\u7684\u4F7F\u7528\u5C31\u9700\u8981\u586B\u5199",n.a.createElement("code",null,"columns"))),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u5C5E\u6027"),n.a.createElement("th",null,"\u63CF\u8FF0"),n.a.createElement("th",null,"\u7C7B\u578B"),n.a.createElement("th",null,"\u9ED8\u8BA4\u503C"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"headerTitle"),n.a.createElement("td",null,"\u8868\u683C\u6807\u9898"),n.a.createElement("td",null,n.a.createElement("code",null,"string")),n.a.createElement("td",null,n.a.createElement("code",null,"ReactNode"))),n.a.createElement("tr",null,n.a.createElement("td",null,"toolbarRender"),n.a.createElement("td",null,"\u8868\u683C\u4E3B\u4F53\u53F3\u4E0A\u65B9\u7684\u63A7\u4EF6\uFF0C\u4F8B\u5982\u201C\u6DFB\u52A0\u201D\u6309\u94AE"),n.a.createElement("td",null,n.a.createElement("code",null,"() => ReactNode[]")),n.a.createElement("td",null,n.a.createElement("code",null,"false"))),n.a.createElement("tr",null,n.a.createElement("td",null,"toolbarAction"),n.a.createElement("td",null,"\u663E\u793A\u5728\u8868\u683C\u4E3B\u4F53\u53F3\u4E0A\u65B9\u7684 Icon \u5217\u8868\uFF0C\u5185\u7F6E\u4E86",n.a.createElement("code",null,"\u5237\u65B0\u3001\u8C03\u6574\u5BC6\u5EA6\u3001\u5168\u5C4F\u663E\u793A")," \u7B49\u529F\u80FD"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"false"))),n.a.createElement("tr",null,n.a.createElement("td",null,"pageChangeWithRequest"),n.a.createElement("td",null,"\u5207\u6362\u5206\u9875\u65F6\u662F\u5426\u9700\u8981\u8BF7\u6C42\u63A5\u53E3"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"true"))),n.a.createElement("tr",null,n.a.createElement("td",null,"columns"),n.a.createElement("td",null,"\u5217\u5B9A\u4E49"),n.a.createElement("td",null,n.a.createElement("code",null,"object")),n.a.createElement("td",null,n.a.createElement("code",null,"false"))),n.a.createElement("tr",null,n.a.createElement("td",null,"debug"),n.a.createElement("td",null,"\u5F00\u542F debug \u6A21\u5F0F\uFF0C\u65F6\u65F6\u663E\u793A\u5185\u90E8\u72B6\u6001\uFF0C",n.a.createElement("strong",null,"\u5F00\u53D1\u7684\u65F6\u5019\u5F3A\u70C8\u5EFA\u8BAE\u6253\u5F00")),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"false"))))),n.a.createElement("h4",{id:"table-\u53C2\u6570-\u4E2D-columns-\u5217\u5B9A\u4E49"},n.a.createElement(g.AnchorLink,{to:"#table-\u53C2\u6570-\u4E2D-columns-\u5217\u5B9A\u4E49","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),n.a.createElement("code",null,"<Table>")," \u53C2\u6570 \u4E2D Columns \u5217\u5B9A\u4E49"),n.a.createElement("p",null,n.a.createElement("strong",null,"columns \u4E3A antd \u5DF2\u6709\u7684 props\uFF0C\u6240\u4EE5\u652F\u6301 antd \u6240\u6709\u7684\u652F\u6301\u7684 ",n.a.createElement(g.Link,{to:"https://ant.design/components/table-cn/#Column"},"columns")," \u7684\u914D\u7F6E\uFF0C\u540C\u65F6\u4E5F\u63D0\u4F9B\u4E86\u4E00\u4E9B\u66F4\u65B9\u4FBF\u7684 api\uFF0C\u52A0\u5FEB\u4E66\u5199")),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u5C5E\u6027"),n.a.createElement("th",null,"\u63CF\u8FF0"),n.a.createElement("th",null,"\u7C7B\u578B"),n.a.createElement("th",null,"\u9ED8\u8BA4\u503C"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"ellipsis"),n.a.createElement("td",null,"\u662F\u5426\u81EA\u52A8\u7F29\u7565"),n.a.createElement("td",null,"boolean"),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"copyable"),n.a.createElement("td",null,"\u662F\u5426\u652F\u6301\u590D\u5236"),n.a.createElement("td",null,"boolean"),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"valueType"),n.a.createElement("td",null,"\u503C\u7684\u7C7B\u578B\uFF0C\u8BE6\u89C1\u4E0B\u65B9 ",n.a.createElement("code",null,"valueType \u914D\u7F6E")),n.a.createElement("td",null,n.a.createElement("code",null,"string"),"\uFF08",n.a.createElement("code",null,"text")," | ",n.a.createElement("code",null,"money")," | ",n.a.createElement("code",null,"date")," | ",n.a.createElement("code",null,"dateTime"),"\uFF09"),n.a.createElement("td",null,n.a.createElement("code",null,"text"))),n.a.createElement("tr",null,n.a.createElement("td",null,"enum"),n.a.createElement("td",null,"\u5F53\u524D\u5217\u503C\u7684\u679A\u4E3E\uFF0C\u8BE6\u89C1",n.a.createElement(g.Link,{to:"./table-render/demo"},"\u9AD8\u7EA7\u7528\u6CD5")),n.a.createElement("td",null,n.a.createElement("code",null,"object")),n.a.createElement("td",null,"-")))),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement("strong",null,"valueType \u503C\u7C7B\u578B"),"\uFF1ATableRender \u5C01\u88C5\u4E86\u4E00\u4E9B\u5E38\u7528\u7684\u503C\u7C7B\u578B\u6765\u51CF\u5C11\u91CD\u590D\u7684 render \u64CD\u4F5C\uFF0C\u914D\u7F6E\u4E00\u4E2A valueType \u5373\u53EF\u5C55\u793A\u683C\u5F0F\u5316\u54CD\u5E94\u7684\u6570\u636E\uFF0C\u5177\u4F53\u4F7F\u7528\u53EF\u53C2\u8003 ",n.a.createElement(g.Link,{to:"./table-render/demo"},"\u6848\u4F8B\u4EE3\u7801"),"\uFF1A"),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u5C5E\u6027"),n.a.createElement("th",null,"\u63CF\u8FF0"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"text"),n.a.createElement("td",null,"\u666E\u901A\u7684\u6587\u672C\u7C7B\u578B")),n.a.createElement("tr",null,n.a.createElement("td",null,"date"),n.a.createElement("td",null,"\u5F53\u6570\u636E\u662F\u65E5\u671F\u7C7B\u578B\u7684\u8FD4\u56DE\u65F6\uFF0C\u4F1A\u81EA\u52A8\u5C06\u683C\u5F0F\u8F6C\u6362\u4E3A '2020-10-20'")),n.a.createElement("tr",null,n.a.createElement("td",null,"dateTime"),n.a.createElement("td",null,"\u5F53\u6570\u636E\u662F\u65E5\u671F\u7C7B\u578B\u7684\u8FD4\u56DE\u65F6\uFF0C\u4F1A\u81EA\u52A8\u5C06\u683C\u5F0F\u8F6C\u6362\u4E3A '2020-10-20 19:30:00'")),n.a.createElement("tr",null,n.a.createElement("td",null,"money"),n.a.createElement("td",null,"\u5F53\u6570\u636E\u662F\u91D1\u989D\u65F6\uFF0C\u4F1A\u81EA\u52A8\u5C06\u683C\u5F0F\u8F6C\u6362\u4E3A '\xA5999,999,999.99'")))))),n.a.createElement("h3",{id:"context-\u4E0A\u4E0B\u6587"},n.a.createElement(g.AnchorLink,{to:"#context-\u4E0A\u4E0B\u6587","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Context \u4E0A\u4E0B\u6587"),n.a.createElement("p",null,n.a.createElement("strong",null,"\u53EF\u901A\u8FC7 ",n.a.createElement("code",null,"useTable")," \u83B7\u53D6 ",n.a.createElement("code",null,"table-render")," \u7684 context\uFF0C\u4F8B\u5982: ",n.a.createElement("code",null,"refresh"),"\u3001",n.a.createElement("code",null,"tableState"),"\u3001",n.a.createElement("code",null,"setTable")," \u7B49\u5C5E\u6027")),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u5C5E\u6027"),n.a.createElement("th",null,"\u63CF\u8FF0"),n.a.createElement("th",null,"\u7C7B\u578B"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"tableState"),n.a.createElement("td",null,"\u8FD9\u4E9B\u662F\u5168\u5C40\u7684\u72B6\u6001\uFF0C\u6839\u636E\u9700\u8981\u4F7F\u7528"),n.a.createElement("td",null,n.a.createElement("code",null,"object"))),n.a.createElement("tr",null,n.a.createElement("td",null,"refresh"),n.a.createElement("td",null,"\u5237\u65B0\u8868\u683C\u6570\u636E"),n.a.createElement("td",null,n.a.createElement("code",null,"function"))),n.a.createElement("tr",null,n.a.createElement("td",null,"setTable"),n.a.createElement("td",null,"\u7528\u4E8E\u4FEE\u6539\u5168\u5C40\u72B6\u6001\u7684\u5DE5\u5177\u51FD\u6570\uFF0CsetTable \u4E4B\u4E8E tableState\uFF0C\u7B49\u540C setState \u4E4B\u4E8E state"),n.a.createElement("td",null,n.a.createElement("code",null,"function"))),n.a.createElement("tr",null,n.a.createElement("td",null,"changeTab"),n.a.createElement("td",null,"\u624B\u52A8\u5207\u6362 tab \u7684\u51FD\u6570\uFF0C\u4F8B\u5982\u76EE\u524D\u4E24\u4E2A\u641C\u7D22 tab\uFF1A \u201C\u6211\u7684\u6D3B\u52A8\u201D\uFF0C\u201C\u5168\u90E8\u6D3B\u52A8\u201D \uFF08\u5206\u522B\u5BF9\u5E94 tab \u503C\u4E3A 0 \u548C 1\uFF09"),n.a.createElement("td",null,n.a.createElement("code",null,"function"))),n.a.createElement("tr",null,n.a.createElement("td",null,"form"),n.a.createElement("td",null,"Search \u7EC4\u4EF6\u662F form-render \u751F\u6210\u7684\uFF0C\u53EF\u4EE5\u53D6\u5230\u641C\u7D22\u8868\u5355\u7684 form \u5B9E\u4F8B\u4EE5\u53CA\u6302\u5728\u4E0A\u9762\u7684\u65B9\u6CD5\uFF0C\u4F8B\u5982 ",n.a.createElement("code",null,"form.resetFields")," \u6E05\u7A7A\u641C\u7D22\u9879"),n.a.createElement("td",null,n.a.createElement("code",null,"object"))))),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement("strong",null,"\u5BFC\u51FA useTable \u4EE5\u53CA\u5BF9\u5E94\u7684\u65B9\u6CD5")),n.a.createElement(V.a,{code:`import { useTable } from 'table-render';
const { refresh, tableState, setTable } = useTable();`,lang:"js"})),n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement("strong",null,"\u5176\u4E2D tableState \u7684\u6570\u636E\u683C\u5F0F\u5982\u4E0B\uFF1A")),n.a.createElement(V.a,{code:`{
  loading: false, // \u8868\u5355\u662F\u5426\u5728\u52A0\u8F7D\u4E2D
  search: {}, // \u9009\u9879\u6570\u636E
  searchApi, // \u641C\u7D22\u7528\u7684api
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
};`,lang:"js"})))))))},TIsu:function(jn,cn,e){},Zs1V:function(jn){jn.exports=JSON.parse("{}")},p8sG:function(jn,cn,e){"use strict";jn.exports=e("80pN")}}]);
