(window.webpackJsonp=window.webpackJsonp||[]).push([[49,13],{"0zqC":function(pn,_e,e){"use strict";e.r(_e);var K=e("tJVT"),n=e("q1tI"),v=e.n(n),I=e("wx14"),oe=e("rePB"),V=e("ODXe"),Oe=e("U8pU"),be=e("Ff2n"),ce=e("VTBJ"),An=e("TSYQ"),Ce=e.n(An),en=e("Zm9Q"),Bn=e("5Z9U"),bn=e("6cGi"),un=e("KQm4"),$e=e("wgJM"),Mn=e("t23M");function Tn(l){var m=Object(n.useRef)(),y=Object(n.useRef)(!1);function O(){for(var D=arguments.length,F=new Array(D),A=0;A<D;A++)F[A]=arguments[A];y.current||($e.a.cancel(m.current),m.current=Object($e.a)(function(){l.apply(void 0,F)}))}return Object(n.useEffect)(function(){return function(){y.current=!0,$e.a.cancel(m.current)}},[]),O}function En(l){var m=Object(n.useRef)([]),y=Object(n.useState)({}),O=Object(V.a)(y,2),D=O[1],F=Object(n.useRef)(typeof l=="function"?l():l),A=Tn(function(){var M=F.current;m.current.forEach(function(W){M=W(M)}),m.current=[],F.current=M,D({})});function T(M){m.current.push(M),A()}return[F.current,T]}var Ae=e("4IlW");function rt(l,m){var y,O=l.prefixCls,D=l.id,F=l.active,A=l.rtl,T=l.tab,M=T.key,W=T.tab,L=T.disabled,U=T.closeIcon,z=l.tabBarGutter,re=l.tabPosition,H=l.closable,G=l.renderWrapper,se=l.removeAriaLabel,J=l.editable,q=l.onClick,ne=l.onRemove,Q=l.onFocus,ae="".concat(O,"-tab");n.useEffect(function(){return ne},[]);var Z={};re==="top"||re==="bottom"?Z[A?"marginLeft":"marginRight"]=z:Z.marginBottom=z;var fe=J&&H!==!1&&!L;function _(te){L||q(te)}function le(te){te.preventDefault(),te.stopPropagation(),J.onEdit("remove",{key:M,event:te})}var ue=n.createElement("div",{key:M,ref:m,className:Ce()(ae,(y={},Object(oe.a)(y,"".concat(ae,"-with-remove"),fe),Object(oe.a)(y,"".concat(ae,"-active"),F),Object(oe.a)(y,"".concat(ae,"-disabled"),L),y)),style:Z,onClick:_},n.createElement("div",{role:"tab","aria-selected":F,id:D&&"".concat(D,"-tab-").concat(M),className:"".concat(ae,"-btn"),"aria-controls":D&&"".concat(D,"-panel-").concat(M),"aria-disabled":L,tabIndex:L?null:0,onClick:function(Y){Y.stopPropagation(),_(Y)},onKeyDown:function(Y){[Ae.a.SPACE,Ae.a.ENTER].includes(Y.which)&&(Y.preventDefault(),_(Y))},onFocus:Q},W),fe&&n.createElement("button",{type:"button","aria-label":se||"remove",tabIndex:0,className:"".concat(ae,"-remove"),onClick:function(Y){Y.stopPropagation(),le(Y)}},U||J.removeIcon||"\xD7"));return G&&(ue=G(ue)),ue}var Kn=n.forwardRef(rt),at={width:0,height:0,left:0,top:0};function pt(l,m,y){return Object(n.useMemo)(function(){for(var O,D=new Map,F=m.get((O=l[0])===null||O===void 0?void 0:O.key)||at,A=F.left+F.width,T=0;T<l.length;T+=1){var M=l[T].key,W=m.get(M);if(!W){var L;W=m.get((L=l[T-1])===null||L===void 0?void 0:L.key)||at}var U=D.get(M)||Object(ce.a)({},W);U.right=A-U.left-U.width,D.set(M,U)}return D},[l.map(function(O){return O.key}).join("_"),m,y])}var st={width:0,height:0,left:0,top:0,right:0};function ft(l,m,y,O,D){var F=D.tabs,A=D.tabPosition,T=D.rtl,M,W,L;["top","bottom"].includes(A)?(M="width",W=T?"right":"left",L=Math.abs(m.left)):(M="height",W="top",L=-m.top);var U=m[M],z=y[M],re=O[M],H=U;return z+re>U&&(H=U-re),Object(n.useMemo)(function(){if(!F.length)return[0,0];for(var G=F.length,se=G,J=0;J<G;J+=1){var q=l.get(F[J].key)||st;if(q[W]+q[M]>L+H){se=J-1;break}}for(var ne=0,Q=G-1;Q>=0;Q-=1){var ae=l.get(F[Q].key)||st;if(ae[W]<L){ne=Q+1;break}}return[ne,se]},[l,L,H,A,F.map(function(G){return G.key}).join("_"),T])}var Wn=e("Gytx"),it=e.n(Wn),zn=e("Kwbf");function ht(l,m){var y=l.prefixCls,O=l.invalidate,D=l.item,F=l.renderItem,A=l.responsive,T=l.registerSize,M=l.itemKey,W=l.className,L=l.style,U=l.children,z=l.display,re=l.order,H=l.component,G=H===void 0?"div":H,se=Object(be.a)(l,["prefixCls","invalidate","item","renderItem","responsive","registerSize","itemKey","className","style","children","display","order","component"]),J=A&&!z;function q(fe){T(M,fe)}n.useEffect(function(){return function(){q(null)}},[]);var ne=F&&D!==void 0?F(D):U,Q;O||(Q={opacity:J?0:1,height:J?0:void 0,overflowY:J?"hidden":void 0,order:A?re:void 0,pointerEvents:J?"none":void 0});var ae={};J&&(ae["aria-hidden"]=!0);var Z=n.createElement(G,Object(I.a)({className:Ce()(!O&&y,W),style:Object(ce.a)(Object(ce.a)({},Q),L)},ae,se,{ref:m}),ne);return A&&(Z=n.createElement(Mn.default,{onResize:function(_){var le=_.offsetWidth;q(le)}},Z)),Z}var Ln=n.forwardRef(ht);Ln.displayName="Item";var xn=Ln;function Un(){var l=Object(n.useState)({}),m=Object(V.a)(l,2),y=m[1],O=Object(n.useRef)([]),D=Object(n.useRef)(!1),F=0,A=0;Object(n.useEffect)(function(){return function(){D.current=!0}},[]);function T(M){var W=F;F+=1,O.current.length<W+1&&(O.current[W]=M);var L=O.current[W];function U(z){O.current[W]=typeof z=="function"?z(O.current[W]):z,$e.a.cancel(A),A=Object($e.a)(function(){D.current||y({})})}return[L,U]}return T}var ot=function(m,y){var O=n.useContext(fn);if(!O){var D=m.component,F=D===void 0?"div":D,A=Object(be.a)(m,["component"]);return n.createElement(F,Object(I.a)({},A,{ref:y}))}var T=O.className,M=Object(be.a)(O,["className"]),W=m.className,L=Object(be.a)(m,["className"]);return n.createElement(fn.Provider,{value:null},n.createElement(xn,Object(I.a)({ref:y,className:Ce()(T,W)},M,L)))},$n=n.forwardRef(ot);$n.displayName="RawItem";var lt=$n,fn=n.createContext(null),Yn="responsive",Hn="invalidate";function dn(l){return"+ ".concat(l.length," ...")}function vt(l,m){var y=l.prefixCls,O=y===void 0?"rc-overflow":y,D=l.data,F=D===void 0?[]:D,A=l.renderItem,T=l.renderRawItem,M=l.itemKey,W=l.itemWidth,L=W===void 0?10:W,U=l.ssr,z=l.style,re=l.className,H=l.maxCount,G=l.renderRest,se=l.renderRawRest,J=l.suffix,q=l.component,ne=q===void 0?"div":q,Q=l.itemComponent,ae=l.onVisibleChange,Z=Object(be.a)(l,["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"]),fe=Un(),_=U==="full",le=fe(null),ue=Object(V.a)(le,2),te=ue[0],Y=ue[1],ie=te||0,pe=fe(new Map),me=Object(V.a)(pe,2),ye=me[0],Be=me[1],he=fe(0),ge=Object(V.a)(he,2),je=ge[0],Re=ge[1],Se=fe(0),Fe=Object(V.a)(Se,2),Ne=Fe[0],Ye=Fe[1],we=fe(0),Ie=Object(V.a)(we,2),xe=Ie[0],Te=Ie[1],Fn=Object(n.useState)(null),Xe=Object(V.a)(Fn,2),Ve=Xe[0],tn=Xe[1],hn=Object(n.useState)(null),vn=Object(V.a)(hn,2),De=vn[0],Ke=vn[1],He=n.useMemo(function(){return De===null&&_?Number.MAX_SAFE_INTEGER:De||0},[De,te]),Je=Object(n.useState)(!1),wn=Object(V.a)(Je,2),Qn=wn[0],In=wn[1],ke="".concat(O,"-item"),On=Math.max(je,Ne),rn=F.length&&H===Yn,Sn=H===Hn,Ge=rn||typeof H=="number"&&F.length>H,Ze=Object(n.useMemo)(function(){var de=F;return rn?te===null&&_?de=F:de=F.slice(0,Math.min(F.length,ie/L)):typeof H=="number"&&(de=F.slice(0,H)),de},[F,L,te,H,rn]),Dn=Object(n.useMemo)(function(){return rn?F.slice(He+1):F.slice(Ze.length)},[F,Ze,rn,He]),on=Object(n.useCallback)(function(de,Ee){var Pe;return typeof M=="function"?M(de):(Pe=M&&(de==null?void 0:de[M]))!==null&&Pe!==void 0?Pe:Ee},[M]),ze=Object(n.useCallback)(A||function(de){return de},[A]);function We(de,Ee){Ke(de),Ee||(In(de<F.length-1),ae==null||ae(de))}function Xn(de,Ee){Y(Ee.clientWidth)}function kn(de,Ee){Be(function(Pe){var Qe=new Map(Pe);return Ee===null?Qe.delete(de):Qe.set(de,Ee),Qe})}function dt(de,Ee){Ye(Ee),Re(Ne)}function gn(de,Ee){Te(Ee)}function mn(de){return ye.get(on(Ze[de],de))}n.useLayoutEffect(function(){if(ie&&On&&Ze){var de=xe,Ee=Ze.length,Pe=Ee-1;if(!Ee){We(0),tn(null);return}for(var Qe=0;Qe<Ee;Qe+=1){var et=mn(Qe);if(et===void 0){We(Qe-1,!0);break}if(de+=et,Qe===Pe-1&&de+mn(Pe)<=ie){We(Pe),tn(null);break}else if(de+On>ie){We(Qe-1),tn(de-et-xe+Ne);break}else if(Qe===Pe){We(Pe),tn(de-xe);break}}J&&mn(0)+xe>ie&&tn(null)}},[ie,ye,Ne,xe,on,Ze]);var Zn=Qn&&!!Dn.length,yn={};Ve!==null&&rn&&(yn={position:"absolute",left:Ve,top:0});var ln={prefixCls:ke,responsive:rn,component:Q,invalidate:Sn},qn=T?function(de,Ee){var Pe=on(de,Ee);return n.createElement(fn.Provider,{key:Pe,value:Object(ce.a)(Object(ce.a)({},ln),{},{order:Ee,item:de,itemKey:Pe,registerSize:kn,display:Ee<=He})},T(de,Ee))}:function(de,Ee){var Pe=on(de,Ee);return n.createElement(xn,Object(I.a)({},ln,{order:Ee,key:Pe,item:de,renderItem:ze,itemKey:Pe,registerSize:kn,display:Ee<=He}))},Rn,_n={order:Zn?He:Number.MAX_SAFE_INTEGER,className:"".concat(ke,"-rest"),registerSize:dt,display:Zn};if(se)se&&(Rn=n.createElement(fn.Provider,{value:Object(ce.a)(Object(ce.a)({},ln),_n)},se(Dn)));else{var an=G||dn;Rn=n.createElement(xn,Object(I.a)({},ln,_n),typeof an=="function"?an(Dn):an)}var jn=n.createElement(ne,Object(I.a)({className:Ce()(!Sn&&O,re),style:z,ref:m},Z),Ze.map(qn),Ge?Rn:null,J&&n.createElement(xn,Object(I.a)({},ln,{order:He,className:"".concat(ke,"-suffix"),registerSize:gn,display:!0,style:yn}),J));return rn&&(jn=n.createElement(Mn.default,{onResize:Xn},jn)),jn}var Nn=n.forwardRef(vt);Nn.displayName="Overflow",Nn.Item=lt,Nn.RESPONSIVE=Yn,Nn.INVALIDATE=Hn;var j=Nn,S=j,P=e("1OyB"),f=e("vuIU"),s=e("Ji7U"),g=e("LK+K"),b=e("bT9E"),E=e("YrtM"),i=n.createContext(null);function p(l,m){var y=Object(ce.a)({},l);return Object.keys(m).forEach(function(O){var D=m[O];D!==void 0&&(y[O]=D)}),y}function o(l){var m=l.children,y=l.locked,O=Object(be.a)(l,["children","locked"]),D=n.useContext(i),F=Object(E.a)(function(){return p(D,O)},[D,O],function(A,T){return!y&&(A[0]!==T[0]||!it()(A[1],T[1]))});return n.createElement(i.Provider,{value:F},m)}function B(l,m,y,O){var D=n.useContext(i),F=D.activeKey,A=D.onActive,T=D.onInactive,M={active:F===l};return m||(M.onMouseEnter=function(W){y==null||y({key:l,domEvent:W}),A(l)},M.onMouseLeave=function(W){O==null||O({key:l,domEvent:W}),T(l)}),M}function N(l){var m=l.item,y=Object(be.a)(l,["item"]);return Object.defineProperty(y,"item",{get:function(){return Object(zn.a)(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),m}}),y}function a(l){var m=l.icon,y=l.props,O=l.children,D;return typeof m=="function"?D=n.createElement(m,Object(ce.a)({},y)):D=m,D||O||null}function r(l){var m=n.useContext(i),y=m.mode,O=m.rtl,D=m.inlineIndent;if(y!=="inline")return null;var F=l;return O?{paddingRight:F*D}:{paddingLeft:F*D}}var u=[],c=n.createContext(null);function t(){return n.useContext(c)}var h=n.createContext(u);function d(l){var m=n.useContext(h);return n.useMemo(function(){return l!==void 0?[].concat(Object(un.a)(m),[l]):m},[m,l])}var C=n.createContext(null),R=n.createContext(null);function w(l,m){return l===void 0?null:"".concat(l,"-").concat(m)}function $(l){var m=n.useContext(R);return w(m,l)}var x=function(l){Object(s.a)(y,l);var m=Object(g.a)(y);function y(){return Object(P.a)(this,y),m.apply(this,arguments)}return Object(f.a)(y,[{key:"render",value:function(){var D=this.props,F=D.title,A=D.attribute,T=D.elementRef,M=Object(be.a)(D,["title","attribute","elementRef"]),W=Object(b.a)(M,["eventKey"]);return Object(zn.a)(!A,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),n.createElement(S.Item,Object(I.a)({},A,{title:typeof F=="string"?F:void 0},W,{ref:T}))}}]),y}(n.Component),k=function(m){var y,O=m.style,D=m.className,F=m.eventKey,A=m.disabled,T=m.itemIcon,M=m.children,W=m.role,L=m.onMouseEnter,U=m.onMouseLeave,z=m.onClick,re=m.onKeyDown,H=m.onFocus,G=Object(be.a)(m,["style","className","eventKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"]),se=$(F),J=n.useContext(i),q=J.prefixCls,ne=J.onItemClick,Q=J.disabled,ae=J.overflowDisabled,Z=J.itemIcon,fe=J.selectedKeys,_=J.onActive,le="".concat(q,"-item"),ue=n.useRef(),te=n.useRef(),Y=Q||A,ie=d(F),pe=function(we){return{key:F,keyPath:ie,item:ue.current,domEvent:we}},me=T||Z,ye=B(F,Y,L,U),Be=ye.active,he=Object(be.a)(ye,["active"]),ge=fe.includes(F),je=r(ie.length),Re=function(we){if(!Y){var Ie=pe(we);z==null||z(N(Ie)),ne(Ie)}},Se=function(we){if(re==null||re(we),we.which===Ae.a.ENTER){var Ie=pe(we);z==null||z(N(Ie)),ne(Ie)}},Fe=function(we){_(F),H==null||H(we)},Ne={};return m.role==="option"&&(Ne["aria-selected"]=ge),n.createElement(x,Object(I.a)({ref:ue,elementRef:te,role:W===null?"none":W||"menuitem",tabIndex:A?null:-1,"data-menu-id":ae&&se?null:se},G,he,Ne,{component:"li","aria-disabled":A,style:Object(ce.a)(Object(ce.a)({},je),O),className:Ce()(le,(y={},Object(oe.a)(y,"".concat(le,"-active"),Be),Object(oe.a)(y,"".concat(le,"-selected"),ge),Object(oe.a)(y,"".concat(le,"-disabled"),Y),y),D),onClick:Re,onKeyDown:Se,onFocus:Fe}),M,n.createElement(a,{props:Object(ce.a)(Object(ce.a)({},m),{},{isSelected:ge}),icon:me}))};function Le(l){var m=l.eventKey,y=t(),O=d(m);return n.useEffect(function(){if(y)return y.registerPath(m,O),function(){y.unregisterPath(m,O)}},[O]),y?null:n.createElement(k,l)}var Ue=Le;function sn(l,m){return Object(en.a)(l).map(function(y,O){if(n.isValidElement(y)){var D=y.key;return D==null&&(D="tmp_key-".concat([].concat(Object(un.a)(m),[O]).join("-"))),n.cloneElement(y,{key:D,eventKey:D})}return y})}function nn(l){var m=n.useRef(l);m.current=l;var y=n.useCallback(function(){for(var O,D=arguments.length,F=new Array(D),A=0;A<D;A++)F[A]=arguments[A];return(O=m.current)===null||O===void 0?void 0:O.call.apply(O,[m].concat(F))},[]);return l?y:void 0}var Gn=function(m,y){var O=m.className,D=m.children,F=Object(be.a)(m,["className","children"]),A=n.useContext(i),T=A.prefixCls,M=A.mode;return n.createElement("ul",Object(I.a)({className:Ce()(T,"".concat(T,"-sub"),"".concat(T,"-").concat(M==="inline"?"inline":"vertical"),O)},F,{"data-menu-list":!0,ref:y}),D)},Cn=n.forwardRef(Gn);Cn.displayName="SubMenuList";var ut=Cn,Or=e("uciX"),Vn={adjustX:1,adjustY:1},Zt={topLeft:{points:["bl","tl"],overflow:Vn,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Vn,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:Vn,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:Vn,offset:[4,0]}},Sr={topLeft:{points:["bl","tl"],overflow:Vn,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Vn,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:Vn,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:Vn,offset:[4,0]}},pa=Zt;function qt(l,m,y){if(m)return m;if(y)return y[l]||y.other}var Dr={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function Rr(l){var m=l.prefixCls,y=l.visible,O=l.children,D=l.popup,F=l.popupClassName,A=l.popupOffset,T=l.disabled,M=l.mode,W=l.onVisibleChange,L=n.useContext(i),U=L.getPopupContainer,z=L.rtl,re=L.subMenuOpenDelay,H=L.subMenuCloseDelay,G=L.builtinPlacements,se=L.triggerSubMenuAction,J=L.forceSubMenuRender,q=L.motion,ne=L.defaultMotions,Q=n.useState(!1),ae=Object(V.a)(Q,2),Z=ae[0],fe=ae[1],_=z?Object(ce.a)(Object(ce.a)({},Sr),G):Object(ce.a)(Object(ce.a)({},Zt),G),le=Dr[M],ue=qt(M,q,ne),te=Object(ce.a)(Object(ce.a)({},ue),{},{leavedClassName:"".concat(m,"-hidden"),removeOnLeave:!1,motionAppear:!0}),Y=n.useRef();return n.useEffect(function(){return Y.current=Object($e.a)(function(){fe(y)}),function(){$e.a.cancel(Y.current)}},[y]),n.createElement(Or.a,{prefixCls:m,popupClassName:Ce()("".concat(m,"-popup"),Object(oe.a)({},"".concat(m,"-rtl"),z),F),stretch:M==="horizontal"?"minWidth":null,getPopupContainer:U,builtinPlacements:_,popupPlacement:le,popupVisible:Z,popup:D,popupAlign:A&&{offset:A},action:T?[]:[se],mouseEnterDelay:re,mouseLeaveDelay:H,onPopupVisibleChange:W,forceRender:J,popupMotion:te},O)}var jr=e("8XRh");function Pr(l){var m=l.id,y=l.open,O=l.keyPath,D=l.children,F="inline",A=n.useContext(i),T=A.prefixCls,M=A.forceSubMenuRender,W=A.motion,L=A.defaultMotions,U=A.mode,z=n.useRef(!1);z.current=U===F;var re=n.useState(!z.current),H=Object(V.a)(re,2),G=H[0],se=H[1],J=z.current?y:!1;n.useEffect(function(){z.current&&se(!1)},[U]);var q=Object(ce.a)({},qt(F,W,L));O.length>1&&(q.motionAppear=!1);var ne=q.onVisibleChanged;return q.onVisibleChanged=function(Q){return!z.current&&!Q&&se(!0),ne==null?void 0:ne(Q)},G?null:n.createElement(o,{mode:F,locked:!z.current},n.createElement(jr.default,Object(I.a)({visible:J},q,{forceRender:M,removeOnLeave:!1,leavedClassName:"".concat(T,"-hidden")}),function(Q){var ae=Q.className,Z=Q.style;return n.createElement(ut,{id:m,className:ae,style:Z},D)}))}var Ar=function(m){var y,O=m.style,D=m.className,F=m.title,A=m.eventKey,T=m.disabled,M=m.internalPopupClose,W=m.children,L=m.itemIcon,U=m.expandIcon,z=m.popupClassName,re=m.popupOffset,H=m.onClick,G=m.onMouseEnter,se=m.onMouseLeave,J=m.onTitleClick,q=m.onTitleMouseEnter,ne=m.onTitleMouseLeave,Q=Object(be.a)(m,["style","className","title","eventKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"]),ae=$(A),Z=n.useContext(i),fe=Z.prefixCls,_=Z.mode,le=Z.openKeys,ue=Z.disabled,te=Z.overflowDisabled,Y=Z.activeKey,ie=Z.selectedKeys,pe=Z.itemIcon,me=Z.expandIcon,ye=Z.onItemClick,Be=Z.onOpenChange,he=Z.onActive,ge=n.useContext(C),je=ge.isSubPathKey,Re=d(),Se="".concat(fe,"-submenu"),Fe=ue||T,Ne=n.useRef(),Ye=n.useRef(),we=L||pe,Ie=U||me,xe=le.includes(A),Te=!te&&xe,Fn=je(ie,A),Xe=B(A,Fe,q,ne),Ve=Xe.active,tn=Object(be.a)(Xe,["active"]),hn=n.useState(!1),vn=Object(V.a)(hn,2),De=vn[0],Ke=vn[1],He=function(We){Fe||Ke(We)},Je=function(We){He(!0),G==null||G({key:A,domEvent:We})},wn=function(We){He(!1),se==null||se({key:A,domEvent:We})},Qn=n.useMemo(function(){return Ve||(_!=="inline"?De||je([Y],A):!1)},[_,Ve,Y,De,A,je]),In=r(Re.length),ke=function(We){Fe||(J==null||J({key:A,domEvent:We}),_==="inline"&&Be(A,!xe))},On=nn(function(ze){H==null||H(N(ze)),ye(ze)}),rn=function(We){_!=="inline"&&Be(A,We)},Sn=function(){he(A)},Ge=ae&&"".concat(ae,"-popup"),Ze=n.createElement("div",Object(I.a)({role:"menuitem",style:In,className:"".concat(Se,"-title"),tabIndex:Fe?null:-1,ref:Ne,title:typeof F=="string"?F:null,"data-menu-id":te&&ae?null:ae,"aria-expanded":Te,"aria-haspopup":!0,"aria-controls":Ge,"aria-disabled":Fe,onClick:ke,onFocus:Sn},tn),F,n.createElement(a,{icon:_!=="horizontal"?Ie:null,props:Object(ce.a)(Object(ce.a)({},m),{},{isOpen:Te,isSubMenu:!0})},n.createElement("i",{className:"".concat(Se,"-arrow")}))),Dn=n.useRef(_);if(_!=="inline"&&(Dn.current=Re.length>1?"vertical":_),!te){var on=Dn.current;Ze=n.createElement(Rr,{mode:on,prefixCls:Se,visible:!M&&Te&&_!=="inline",popupClassName:z,popupOffset:re,popup:n.createElement(o,{mode:on},n.createElement(ut,{id:Ge,ref:Ye},W)),disabled:Fe,onVisibleChange:rn},Ze)}return n.createElement(o,{onItemClick:On,mode:_==="horizontal"?"vertical":_,itemIcon:we,expandIcon:Ie},n.createElement(S.Item,Object(I.a)({role:"none"},Q,{component:"li",style:O,className:Ce()(Se,"".concat(Se,"-").concat(_),D,(y={},Object(oe.a)(y,"".concat(Se,"-open"),Te),Object(oe.a)(y,"".concat(Se,"-active"),Qn),Object(oe.a)(y,"".concat(Se,"-selected"),Fn),Object(oe.a)(y,"".concat(Se,"-disabled"),Fe),y)),onMouseEnter:Je,onMouseLeave:wn}),Ze,!te&&n.createElement(Pr,{id:Ge,open:Te,keyPath:Re},W)))};function _t(l){var m=l.eventKey,y=l.children,O=d(m),D=sn(y,O),F=t();n.useEffect(function(){if(F)return F.registerPath(m,O),function(){F.unregisterPath(m,O)}},[O]);var A;return F?A=D:A=n.createElement(Ar,l,D),n.createElement(h.Provider,{value:O},A)}var Br=e("x/xZ");function er(l){var m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Object(Br.a)(l)){var y=l.nodeName.toLowerCase(),O=["input","select","textarea","button"].includes(y)||l.isContentEditable||y==="a"&&!!l.getAttribute("href"),D=l.getAttribute("tabindex"),F=Number(D),A=null;return D&&!Number.isNaN(F)?A=F:O&&A===null&&(A=0),O&&l.disabled&&(A=null),A!==null&&(A>=0||m&&A<0)}return!1}function nr(l){var m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,y=Object(un.a)(l.querySelectorAll("*")).filter(function(O){return er(O,m)});return er(l,m)&&y.unshift(l),y}var Ot=null;function fa(){Ot=document.activeElement}function ha(){Ot=null}function va(){if(Ot)try{Ot.focus()}catch(l){}}function ga(l,m){if(m.keyCode===9){var y=nr(l),O=y[m.shiftKey?0:y.length-1],D=O===document.activeElement||l===document.activeElement;if(D){var F=y[m.shiftKey?y.length-1:0];F.focus(),m.preventDefault()}}}var Wt=Ae.a.LEFT,Lt=Ae.a.RIGHT,xt=Ae.a.UP,St=Ae.a.DOWN,Dt=Ae.a.ENTER,tr=Ae.a.ESC,rr=[xt,St,Wt,Lt];function Tr(l,m,y,O){var D,F,A,T,M="prev",W="next",L="children",U="parent";if(l==="inline"&&O===Dt)return{inlineTrigger:!0};var z=(D={},Object(oe.a)(D,xt,M),Object(oe.a)(D,St,W),D),re=(F={},Object(oe.a)(F,Wt,y?W:M),Object(oe.a)(F,Lt,y?M:W),Object(oe.a)(F,St,L),Object(oe.a)(F,Dt,L),F),H=(A={},Object(oe.a)(A,xt,M),Object(oe.a)(A,St,W),Object(oe.a)(A,Dt,L),Object(oe.a)(A,tr,U),Object(oe.a)(A,Wt,y?L:U),Object(oe.a)(A,Lt,y?U:L),A),G={inline:z,horizontal:re,vertical:H,inlineSub:z,horizontalSub:H,verticalSub:H},se=(T=G["".concat(l).concat(m?"":"Sub")])===null||T===void 0?void 0:T[O];switch(se){case M:return{offset:-1,sibling:!0};case W:return{offset:1,sibling:!0};case U:return{offset:-1,sibling:!1};case L:return{offset:1,sibling:!1};default:return null}}function Nr(l){for(var m=l;m;){if(m.getAttribute("data-menu-list"))return m;m=m.parentElement}return null}function wr(l,m){for(var y=l||document.activeElement;y;){if(m.has(y))return y;y=y.parentElement}return null}function Ir(l,m){var y=nr(l,!0);return y.filter(function(O){return m.has(O)})}function ar(l,m,y){var O=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!l)return null;var D=Ir(l,m),F=D.length,A=D.findIndex(function(T){return y===T});return O<0?A===-1?A=F-1:A-=1:O>0&&(A+=1),A=(A+F)%F,D[A]}function Mr(l,m,y,O,D,F,A,T,M,W){var L=n.useRef(),U=n.useRef();U.current=m;var z=function(){$e.a.cancel(L.current)};return n.useEffect(function(){return function(){z()}},[]),function(re){var H=re.which;if([].concat(rr,[Dt,tr]).includes(H)){var G,se,J,q=function(){G=new Set,se=new Map,J=new Map;var pe=F();return pe.forEach(function(me){var ye=document.querySelector("[data-menu-id='".concat(w(O,me),"']"));ye&&(G.add(ye),J.set(ye,me),se.set(me,ye))}),G};q();var ne=se.get(m),Q=wr(ne,G),ae=J.get(Q),Z=Tr(l,A(ae,!0).length===1,y,H);if(!Z)return;rr.includes(H)&&re.preventDefault();var fe=function(pe){if(pe){var me=pe,ye=pe.querySelector("a");(ye==null?void 0:ye.getAttribute("href"))&&(me=ye);var Be=J.get(pe);T(Be),z(),L.current=Object($e.a)(function(){U.current===Be&&me.focus()})}};if(Z.sibling||!Q){var _;!Q||l==="inline"?_=D.current:_=Nr(Q);var le=ar(_,G,Q,Z.offset);fe(le)}else if(Z.inlineTrigger)M(ae);else if(Z.offset>0)M(ae,!0),z(),L.current=Object($e.a)(function(){q();var ie=Q.getAttribute("aria-controls"),pe=document.getElementById(ie),me=ar(pe,G);fe(me)},5);else if(Z.offset<0){var ue=A(ae,!0),te=ue[ue.length-2],Y=se.get(te);M(te,!1),fe(Y)}}W==null||W(re)}}var Kr=Math.random().toFixed(5).toString().slice(2),sr=0;function Wr(l){var m=Object(bn.a)(l,{value:l}),y=Object(V.a)(m,2),O=y[0],D=y[1];return n.useEffect(function(){sr+=1;var F="".concat(Kr,"-").concat(sr);D("rc-menu-uuid-".concat(F))},[]),O}var ya=e("p8sG");function Lr(l){Promise.resolve().then(l)}var $t="__RC_UTIL_PATH_SPLIT__",ir=function(m){return m.join($t)},xr=function(m){return m.split($t)},Vt="rc-menu-more";function $r(){var l=n.useState({}),m=Object(V.a)(l,2),y=m[1],O=Object(n.useRef)(new Map),D=Object(n.useRef)(new Map),F=n.useState([]),A=Object(V.a)(F,2),T=A[0],M=A[1],W=Object(n.useRef)(0),L=Object(n.useCallback)(function(J,q){var ne=ir(q);D.current.set(ne,J),O.current.set(J,ne),W.current+=1;var Q=W.current;Lr(function(){Q===W.current&&y({})})},[]),U=Object(n.useCallback)(function(J,q){var ne=ir(q);D.current.delete(ne),O.current.delete(J)},[]),z=Object(n.useCallback)(function(J){M(J)},[]),re=Object(n.useCallback)(function(J,q){var ne=O.current.get(J)||"",Q=xr(ne);return q&&T.includes(Q[0])&&Q.unshift(Vt),Q},[T]),H=Object(n.useCallback)(function(J,q){return J.some(function(ne){var Q=re(ne,!0);return Q.includes(q)})},[re]),G=function(){var q=Object(un.a)(O.current.keys());return T.length&&q.push(Vt),q},se=Object(n.useCallback)(function(J){var q="".concat(O.current.get(J)).concat($t),ne=new Set;return Object(un.a)(D.current.keys()).forEach(function(Q){Q.startsWith(q)&&ne.add(D.current.get(Q))}),ne},[]);return{registerPath:L,unregisterPath:U,refreshOverflowKeys:z,isSubPathKey:H,getKeyPath:re,getKeys:G,getSubPathKeys:se}}var Rt=[],Vr=function(m){var y,O,D=m.prefixCls,F=D===void 0?"rc-menu":D,A=m.style,T=m.className,M=m.tabIndex,W=M===void 0?0:M,L=m.children,U=m.direction,z=m.id,re=m.mode,H=re===void 0?"vertical":re,G=m.inlineCollapsed,se=m.disabled,J=m.disabledOverflow,q=m.subMenuOpenDelay,ne=q===void 0?.1:q,Q=m.subMenuCloseDelay,ae=Q===void 0?.1:Q,Z=m.forceSubMenuRender,fe=m.defaultOpenKeys,_=m.openKeys,le=m.activeKey,ue=m.defaultActiveFirst,te=m.selectable,Y=te===void 0?!0:te,ie=m.multiple,pe=ie===void 0?!1:ie,me=m.defaultSelectedKeys,ye=m.selectedKeys,Be=m.onSelect,he=m.onDeselect,ge=m.inlineIndent,je=ge===void 0?24:ge,Re=m.motion,Se=m.defaultMotions,Fe=m.triggerSubMenuAction,Ne=Fe===void 0?"hover":Fe,Ye=m.builtinPlacements,we=m.itemIcon,Ie=m.expandIcon,xe=m.overflowedIndicator,Te=xe===void 0?"...":xe,Fn=m.getPopupContainer,Xe=m.onClick,Ve=m.onOpenChange,tn=m.onKeyDown,hn=m.openAnimation,vn=m.openTransitionName,De=Object(be.a)(m,["prefixCls","style","className","tabIndex","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName"]),Ke=sn(L,Rt),He=n.useState(!1),Je=Object(V.a)(He,2),wn=Je[0],Qn=Je[1],In=n.useRef(),ke=Wr(z),On=U==="rtl",rn=n.useMemo(function(){return H==="inline"&&G?["vertical",G]:[H,!1]},[H,G]),Sn=Object(V.a)(rn,2),Ge=Sn[0],Ze=Sn[1],Dn=n.useState(0),on=Object(V.a)(Dn,2),ze=on[0],We=on[1],Xn=ze>=Ke.length-1||Ge!=="horizontal"||J,kn=Object(bn.a)(fe,{value:_,postState:function(X){return X||Rt}}),dt=Object(V.a)(kn,2),gn=dt[0],mn=dt[1],Zn=n.useState(gn),yn=Object(V.a)(Zn,2),ln=yn[0],qn=yn[1],Rn=Ge==="inline",_n=n.useRef(!1);n.useEffect(function(){Rn&&qn(gn)},[gn]),n.useEffect(function(){if(!_n.current){_n.current=!0;return}if(Rn)mn(ln);else{var ee=[];mn(ee),Ve==null||Ve(ee)}},[Rn]);var an=$r(),jn=an.registerPath,de=an.unregisterPath,Ee=an.refreshOverflowKeys,Pe=an.isSubPathKey,Qe=an.getKeyPath,et=an.getKeys,Pt=an.getSubPathKeys,Yt=n.useMemo(function(){return{registerPath:jn,unregisterPath:de}},[jn,de]),Ht=n.useMemo(function(){return{isSubPathKey:Pe}},[Pe]);n.useEffect(function(){Ee(Xn?Rt:Ke.slice(ze+1).map(function(ee){return ee.key}))},[ze,Xn]);var Gt=Object(bn.a)(le||ue&&((y=Ke[0])===null||y===void 0?void 0:y.key),{value:le}),ct=Object(V.a)(Gt,2),At=ct[0],yt=ct[1],Bt=nn(function(ee){yt(ee)}),Qt=nn(function(){yt(void 0)}),Tt=Object(bn.a)(me||[],{value:ye,postState:function(X){return Array.isArray(X)?X:X==null?Rt:[X]}}),Nt=Object(V.a)(Tt,2),mt=Nt[0],Pn=Nt[1],wt=function(X){if(!!Y){var ve=X.key,Me=mt.includes(ve),qe;Me?qe=mt.filter(function(tt){return tt!==ve}):pe?qe=[].concat(Object(un.a)(mt),[ve]):qe=[ve],Pn(qe);var Jn=Object(ce.a)(Object(ce.a)({},X),{},{selectedKeys:qe});Me?he==null||he(Jn):Be==null||Be(Jn)}},It=nn(function(ee){Xe==null||Xe(N(ee)),wt(ee)}),bt=nn(function(ee,X){var ve=gn.filter(function(qe){return qe!==ee});if(X)ve.push(ee);else if(Ge!=="inline"){var Me=Pt(ee);ve=ve.filter(function(qe){return!Me.has(qe)})}it()(gn,ve)||(mn(ve),Ve==null||Ve(ve))}),nt=nn(Fn),Et=function(X,ve){var Me=ve!=null?ve:!gn.includes(X);bt(X,Me)},Ct=Mr(Ge,At,On,ke,In,et,Qe,yt,Et,tn);n.useEffect(function(){Qn(!0)},[]);var Mt=Ge!=="horizontal"||J?Ke:Ke.map(function(ee,X){return n.createElement(o,{key:ee.key,overflowDisabled:X>ze},ee)}),Kt=n.createElement(S,Object(I.a)({id:z,ref:In,prefixCls:"".concat(F,"-overflow"),component:"ul",itemComponent:Ue,className:Ce()(F,"".concat(F,"-root"),"".concat(F,"-").concat(Ge),T,(O={},Object(oe.a)(O,"".concat(F,"-inline-collapsed"),Ze),Object(oe.a)(O,"".concat(F,"-rtl"),On),O)),dir:U,style:A,role:"menu",tabIndex:W,data:Mt,renderRawItem:function(X){return X},renderRawRest:function(X){var ve=X.length,Me=ve?Ke.slice(-ve):null;return n.createElement(_t,{eventKey:Vt,title:Te,disabled:Xn,internalPopupClose:ve===0},Me)},maxCount:Ge!=="horizontal"||J?S.INVALIDATE:S.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(X){We(X)},onKeyDown:Ct},De));return n.createElement(R.Provider,{value:ke},n.createElement(o,{prefixCls:F,mode:Ge,openKeys:gn,rtl:On,disabled:se,motion:wn?Re:null,defaultMotions:wn?Se:null,activeKey:At,onActive:Bt,onInactive:Qt,selectedKeys:mt,inlineIndent:je,subMenuOpenDelay:ne,subMenuCloseDelay:ae,forceSubMenuRender:Z,builtinPlacements:Ye,triggerSubMenuAction:Ne,getPopupContainer:nt,itemIcon:we,expandIcon:Ie,onItemClick:It,onOpenChange:bt},n.createElement(C.Provider,{value:Ht},Kt),n.createElement(c.Provider,{value:Yt},Ke)))},Jr=Vr,zr=function(m){var y=m.className,O=m.title,D=m.eventKey,F=m.children,A=Object(be.a)(m,["className","title","eventKey","children"]),T=n.useContext(i),M=T.prefixCls,W="".concat(M,"-item-group");return n.createElement("li",Object(I.a)({},A,{onClick:function(U){return U.stopPropagation()},className:Ce()(W,y)}),n.createElement("div",{className:"".concat(W,"-title"),title:typeof O=="string"?O:void 0},O),n.createElement("ul",{className:"".concat(W,"-list")},F))};function Ur(l){var m=l.children,y=Object(be.a)(l,["children"]),O=d(y.eventKey),D=sn(m,O),F=t();return F?D:n.createElement(zr,y,D)}function Yr(l){var m=l.className,y=l.style,O=n.useContext(i),D=O.prefixCls,F=t();return F?null:n.createElement("li",{className:Ce()("".concat(D,"-item-divider"),m),style:y})}var gt=Jr;gt.Item=Ue,gt.SubMenu=_t,gt.ItemGroup=Ur,gt.Divider=Yr;var Hr=gt,Gr=e("eDIo");function Qr(l,m){var y=l.prefixCls,O=l.editable,D=l.locale,F=l.style;return!O||O.showAdd===!1?null:n.createElement("button",{ref:m,type:"button",className:"".concat(y,"-nav-add"),style:F,"aria-label":(D==null?void 0:D.addAriaLabel)||"Add tab",onClick:function(T){O.onEdit("add",{event:T})}},O.addIcon||"+")}var or=n.forwardRef(Qr);function Xr(l,m){var y=l.prefixCls,O=l.id,D=l.tabs,F=l.locale,A=l.mobile,T=l.moreIcon,M=T===void 0?"More":T,W=l.moreTransitionName,L=l.style,U=l.className,z=l.editable,re=l.tabBarGutter,H=l.rtl,G=l.onTabClick,se=Object(n.useState)(!1),J=Object(V.a)(se,2),q=J[0],ne=J[1],Q=Object(n.useState)(null),ae=Object(V.a)(Q,2),Z=ae[0],fe=ae[1],_="".concat(O,"-more-popup"),le="".concat(y,"-dropdown"),ue=Z!==null?"".concat(_,"-").concat(Z):null,te=F==null?void 0:F.dropdownAriaLabel,Y=n.createElement(Hr,{onClick:function(ge){var je=ge.key,Re=ge.domEvent;G(je,Re),ne(!1)},id:_,tabIndex:-1,role:"listbox","aria-activedescendant":ue,selectedKeys:[Z],"aria-label":te!==void 0?te:"expanded dropdown"},D.map(function(he){return n.createElement(Ue,{key:he.key,id:"".concat(_,"-").concat(he.key),role:"option","aria-controls":O&&"".concat(O,"-panel-").concat(he.key),disabled:he.disabled},he.tab)}));function ie(he){for(var ge=D.filter(function(Ne){return!Ne.disabled}),je=ge.findIndex(function(Ne){return Ne.key===Z})||0,Re=ge.length,Se=0;Se<Re;Se+=1){je=(je+he+Re)%Re;var Fe=ge[je];if(!Fe.disabled){fe(Fe.key);return}}}function pe(he){var ge=he.which;if(!q){[Ae.a.DOWN,Ae.a.SPACE,Ae.a.ENTER].includes(ge)&&(ne(!0),he.preventDefault());return}switch(ge){case Ae.a.UP:ie(-1),he.preventDefault();break;case Ae.a.DOWN:ie(1),he.preventDefault();break;case Ae.a.ESC:ne(!1);break;case Ae.a.SPACE:case Ae.a.ENTER:Z!==null&&G(Z,he);break}}Object(n.useEffect)(function(){var he=document.getElementById(ue);he&&he.scrollIntoView&&he.scrollIntoView(!1)},[Z]),Object(n.useEffect)(function(){q||fe(null)},[q]);var me=Object(oe.a)({},H?"marginLeft":"marginRight",re);D.length||(me.visibility="hidden",me.order=1);var ye=Ce()(Object(oe.a)({},"".concat(le,"-rtl"),H)),Be=A?null:n.createElement(Gr.default,{prefixCls:le,overlay:Y,trigger:["hover"],visible:q,transitionName:W,onVisibleChange:ne,overlayClassName:ye,mouseEnterDelay:.1,mouseLeaveDelay:.1},n.createElement("button",{type:"button",className:"".concat(y,"-nav-more"),style:me,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":_,id:"".concat(O,"-more"),"aria-expanded":q,onKeyDown:pe},M));return n.createElement("div",{className:Ce()("".concat(y,"-nav-operations"),U),style:L,ref:m},Be,n.createElement(or,{prefixCls:y,locale:F,editable:z}))}var kr=n.forwardRef(Xr),Jt=Object(n.createContext)(null),Zr=.1,lr=.01,jt=20,ur=Math.pow(.995,jt);function qr(l,m){var y=Object(n.useState)(),O=Object(V.a)(y,2),D=O[0],F=O[1],A=Object(n.useState)(0),T=Object(V.a)(A,2),M=T[0],W=T[1],L=Object(n.useState)(0),U=Object(V.a)(L,2),z=U[0],re=U[1],H=Object(n.useState)(),G=Object(V.a)(H,2),se=G[0],J=G[1],q=Object(n.useRef)();function ne(le){var ue=le.touches[0],te=ue.screenX,Y=ue.screenY;F({x:te,y:Y}),window.clearInterval(q.current)}function Q(le){if(!!D){le.preventDefault();var ue=le.touches[0],te=ue.screenX,Y=ue.screenY;F({x:te,y:Y});var ie=te-D.x,pe=Y-D.y;m(ie,pe);var me=Date.now();W(me),re(me-M),J({x:ie,y:pe})}}function ae(){if(!!D&&(F(null),J(null),se)){var le=se.x/z,ue=se.y/z,te=Math.abs(le),Y=Math.abs(ue);if(Math.max(te,Y)<Zr)return;var ie=le,pe=ue;q.current=window.setInterval(function(){if(Math.abs(ie)<lr&&Math.abs(pe)<lr){window.clearInterval(q.current);return}ie*=ur,pe*=ur,m(ie*jt,pe*jt)},jt)}}var Z=Object(n.useRef)();function fe(le){var ue=le.deltaX,te=le.deltaY,Y=0,ie=Math.abs(ue),pe=Math.abs(te);ie===pe?Y=Z.current==="x"?ue:te:ie>pe?(Y=ue,Z.current="x"):(Y=te,Z.current="y"),m(-Y,-Y)&&le.preventDefault()}var _=Object(n.useRef)(null);_.current={onTouchStart:ne,onTouchMove:Q,onTouchEnd:ae,onWheel:fe},n.useEffect(function(){function le(ie){_.current.onTouchStart(ie)}function ue(ie){_.current.onTouchMove(ie)}function te(ie){_.current.onTouchEnd(ie)}function Y(ie){_.current.onWheel(ie)}return document.addEventListener("touchmove",ue,{passive:!1}),document.addEventListener("touchend",te,{passive:!1}),l.current.addEventListener("touchstart",le,{passive:!1}),l.current.addEventListener("wheel",Y),function(){document.removeEventListener("touchmove",ue),document.removeEventListener("touchend",te)}},[])}function _r(){var l=Object(n.useRef)(new Map);function m(O){return l.current.has(O)||l.current.set(O,n.createRef()),l.current.get(O)}function y(O){l.current.delete(O)}return[m,y]}function dr(l,m){var y=n.useRef(l),O=n.useState({}),D=Object(V.a)(O,2),F=D[1];function A(T){var M=typeof T=="function"?T(y.current):T;M!==y.current&&m(M,y.current),y.current=M,F({})}return[y.current,A]}var cr=function(m){var y=m.position,O=m.prefixCls,D=m.extra;if(!D)return null;var F,A=D;return y==="right"&&(F=A.right||!A.left&&A||null),y==="left"&&(F=A.left||null),F?n.createElement("div",{className:"".concat(O,"-extra-content")},F):null};function ea(l,m){var y,O=n.useContext(Jt),D=O.prefixCls,F=O.tabs,A=l.className,T=l.style,M=l.id,W=l.animated,L=l.activeKey,U=l.rtl,z=l.extra,re=l.editable,H=l.locale,G=l.tabPosition,se=l.tabBarGutter,J=l.children,q=l.onTabClick,ne=l.onTabScroll,Q=Object(n.useRef)(),ae=Object(n.useRef)(),Z=Object(n.useRef)(),fe=Object(n.useRef)(),_=_r(),le=Object(V.a)(_,2),ue=le[0],te=le[1],Y=G==="top"||G==="bottom",ie=dr(0,function(ee,X){Y&&ne&&ne({direction:ee>X?"left":"right"})}),pe=Object(V.a)(ie,2),me=pe[0],ye=pe[1],Be=dr(0,function(ee,X){!Y&&ne&&ne({direction:ee>X?"top":"bottom"})}),he=Object(V.a)(Be,2),ge=he[0],je=he[1],Re=Object(n.useState)(0),Se=Object(V.a)(Re,2),Fe=Se[0],Ne=Se[1],Ye=Object(n.useState)(0),we=Object(V.a)(Ye,2),Ie=we[0],xe=we[1],Te=Object(n.useState)(0),Fn=Object(V.a)(Te,2),Xe=Fn[0],Ve=Fn[1],tn=Object(n.useState)(0),hn=Object(V.a)(tn,2),vn=hn[0],De=hn[1],Ke=Object(n.useState)(null),He=Object(V.a)(Ke,2),Je=He[0],wn=He[1],Qn=Object(n.useState)(null),In=Object(V.a)(Qn,2),ke=In[0],On=In[1],rn=Object(n.useState)(0),Sn=Object(V.a)(rn,2),Ge=Sn[0],Ze=Sn[1],Dn=Object(n.useState)(0),on=Object(V.a)(Dn,2),ze=on[0],We=on[1],Xn=En(new Map),kn=Object(V.a)(Xn,2),dt=kn[0],gn=kn[1],mn=pt(F,dt,Fe),Zn="".concat(D,"-nav-operations-hidden"),yn=0,ln=0;Y?U?(yn=0,ln=Math.max(0,Fe-Je)):(yn=Math.min(0,Je-Fe),ln=0):(yn=Math.min(0,ke-Ie),ln=0);function qn(ee){return ee<yn?yn:ee>ln?ln:ee}var Rn=Object(n.useRef)(),_n=Object(n.useState)(),an=Object(V.a)(_n,2),jn=an[0],de=an[1];function Ee(){de(Date.now())}function Pe(){window.clearTimeout(Rn.current)}qr(Q,function(ee,X){function ve(Me,qe){Me(function(Jn){var tt=qn(Jn+qe);return tt})}if(Y){if(Je>=Fe)return!1;ve(ye,ee)}else{if(ke>=Ie)return!1;ve(je,X)}return Pe(),Ee(),!0}),Object(n.useEffect)(function(){return Pe(),jn&&(Rn.current=window.setTimeout(function(){de(0)},100)),Pe},[jn]);function Qe(){var ee=arguments.length>0&&arguments[0]!==void 0?arguments[0]:L,X=mn.get(ee)||{width:0,height:0,left:0,right:0,top:0};if(Y){var ve=me;U?X.right<me?ve=X.right:X.right+X.width>me+Je&&(ve=X.right+X.width-Je):X.left<-me?ve=-X.left:X.left+X.width>-me+Je&&(ve=-(X.left+X.width-Je)),je(0),ye(qn(ve))}else{var Me=ge;X.top<-ge?Me=-X.top:X.top+X.height>-ge+ke&&(Me=-(X.top+X.height-ke)),ye(0),je(qn(Me))}}var et=ft(mn,{width:Je,height:ke,left:me,top:ge},{width:Xe,height:vn},{width:Ge,height:ze},Object(ce.a)(Object(ce.a)({},l),{},{tabs:F})),Pt=Object(V.a)(et,2),Yt=Pt[0],Ht=Pt[1],Gt=F.map(function(ee){var X=ee.key;return n.createElement(Kn,{id:M,prefixCls:D,key:X,rtl:U,tab:ee,closable:ee.closable,editable:re,active:X===L,tabPosition:G,tabBarGutter:se,renderWrapper:J,removeAriaLabel:H==null?void 0:H.removeAriaLabel,ref:ue(X),onClick:function(Me){q(X,Me)},onRemove:function(){te(X)},onFocus:function(){Qe(X),Ee(),U||(Q.current.scrollLeft=0),Q.current.scrollTop=0}})}),ct=Tn(function(){var ee,X,ve,Me,qe,Jn,tt,Xt,kt,la=((ee=Q.current)===null||ee===void 0?void 0:ee.offsetWidth)||0,ua=((X=Q.current)===null||X===void 0?void 0:X.offsetHeight)||0,vr=((ve=fe.current)===null||ve===void 0?void 0:ve.offsetWidth)||0,gr=((Me=fe.current)===null||Me===void 0?void 0:Me.offsetHeight)||0,da=((qe=Z.current)===null||qe===void 0?void 0:qe.offsetWidth)||0,ca=((Jn=Z.current)===null||Jn===void 0?void 0:Jn.offsetHeight)||0;wn(la),On(ua),Ze(vr),We(gr);var yr=(((tt=ae.current)===null||tt===void 0?void 0:tt.offsetWidth)||0)-vr,br=(((Xt=ae.current)===null||Xt===void 0?void 0:Xt.offsetHeight)||0)-gr;Ne(yr),xe(br);var Er=(kt=Z.current)===null||kt===void 0?void 0:kt.className.includes(Zn);Ve(yr-(Er?0:da)),De(br-(Er?0:ca)),gn(function(){var Cr=new Map;return F.forEach(function(ma){var Fr=ma.key,Ft=ue(Fr).current;Ft&&Cr.set(Fr,{width:Ft.offsetWidth,height:Ft.offsetHeight,left:Ft.offsetLeft,top:Ft.offsetTop})}),Cr})}),At=F.slice(0,Yt),yt=F.slice(Ht+1),Bt=[].concat(Object(un.a)(At),Object(un.a)(yt)),Qt=Object(n.useState)(),Tt=Object(V.a)(Qt,2),Nt=Tt[0],mt=Tt[1],Pn=mn.get(L),wt=Object(n.useRef)();function It(){$e.a.cancel(wt.current)}Object(n.useEffect)(function(){var ee={};return Pn&&(Y?(U?ee.right=Pn.right:ee.left=Pn.left,ee.width=Pn.width):(ee.top=Pn.top,ee.height=Pn.height)),It(),wt.current=Object($e.a)(function(){mt(ee)}),It},[Pn,Y,U]),Object(n.useEffect)(function(){Qe()},[L,Pn,mn,Y]),Object(n.useEffect)(function(){ct()},[U,se,L,F.map(function(ee){return ee.key}).join("_")]);var bt=!!Bt.length,nt="".concat(D,"-nav-wrap"),Et,Ct,Mt,Kt;return Y?U?(Ct=me>0,Et=me+Je<Fe):(Et=me<0,Ct=-me+Je<Fe):(Mt=ge<0,Kt=-ge+ke<Ie),n.createElement("div",{ref:m,role:"tablist",className:Ce()("".concat(D,"-nav"),A),style:T,onKeyDown:function(){Ee()}},n.createElement(cr,{position:"left",extra:z,prefixCls:D}),n.createElement(Mn.default,{onResize:ct},n.createElement("div",{className:Ce()(nt,(y={},Object(oe.a)(y,"".concat(nt,"-ping-left"),Et),Object(oe.a)(y,"".concat(nt,"-ping-right"),Ct),Object(oe.a)(y,"".concat(nt,"-ping-top"),Mt),Object(oe.a)(y,"".concat(nt,"-ping-bottom"),Kt),y)),ref:Q},n.createElement(Mn.default,{onResize:ct},n.createElement("div",{ref:ae,className:"".concat(D,"-nav-list"),style:{transform:"translate(".concat(me,"px, ").concat(ge,"px)"),transition:jn?"none":void 0}},Gt,n.createElement(or,{ref:fe,prefixCls:D,locale:H,editable:re,style:{visibility:bt?"hidden":null}}),n.createElement("div",{className:Ce()("".concat(D,"-ink-bar"),Object(oe.a)({},"".concat(D,"-ink-bar-animated"),W.inkBar)),style:Nt}))))),n.createElement(kr,Object(I.a)({},l,{ref:Z,prefixCls:D,tabs:Bt,className:!bt&&Zn})),n.createElement(cr,{position:"right",extra:z,prefixCls:D}))}var mr=n.forwardRef(ea);function na(l){var m=l.id,y=l.activeKey,O=l.animated,D=l.tabPosition,F=l.rtl,A=l.destroyInactiveTabPane,T=n.useContext(Jt),M=T.prefixCls,W=T.tabs,L=O.tabPane,U=W.findIndex(function(z){return z.key===y});return n.createElement("div",{className:Ce()("".concat(M,"-content-holder"))},n.createElement("div",{className:Ce()("".concat(M,"-content"),"".concat(M,"-content-").concat(D),Object(oe.a)({},"".concat(M,"-content-animated"),L)),style:U&&L?Object(oe.a)({},F?"marginRight":"marginLeft","-".concat(U,"00%")):null},W.map(function(z){return n.cloneElement(z.node,{key:z.key,prefixCls:M,tabKey:z.key,id:m,animated:L,active:z.key===y,destroyInactiveTabPane:A})})))}function pr(l){var m=l.prefixCls,y=l.forceRender,O=l.className,D=l.style,F=l.id,A=l.active,T=l.animated,M=l.destroyInactiveTabPane,W=l.tabKey,L=l.children,U=n.useState(y),z=Object(V.a)(U,2),re=z[0],H=z[1];n.useEffect(function(){A?H(!0):M&&H(!1)},[A,M]);var G={};return A||(T?(G.visibility="hidden",G.height=0,G.overflowY="hidden"):G.display="none"),n.createElement("div",{id:F&&"".concat(F,"-panel-").concat(W),role:"tabpanel",tabIndex:A?0:-1,"aria-labelledby":F&&"".concat(F,"-tab-").concat(W),"aria-hidden":!A,style:Object(ce.a)(Object(ce.a)({},G),D),className:Ce()("".concat(m,"-tabpane"),A&&"".concat(m,"-tabpane-active"),O)},(A||re||y)&&L)}var fr=0;function ta(l){return Object(en.a)(l).map(function(m){if(n.isValidElement(m)){var y=m.key!==void 0?String(m.key):void 0;return Object(ce.a)(Object(ce.a)({key:y},m.props),{},{node:m})}return null}).filter(function(m){return m})}function ra(l,m){var y,O=l.id,D=l.prefixCls,F=D===void 0?"rc-tabs":D,A=l.className,T=l.children,M=l.direction,W=l.activeKey,L=l.defaultActiveKey,U=l.editable,z=l.animated,re=z===void 0?{inkBar:!0,tabPane:!1}:z,H=l.tabPosition,G=H===void 0?"top":H,se=l.tabBarGutter,J=l.tabBarStyle,q=l.tabBarExtraContent,ne=l.locale,Q=l.moreIcon,ae=l.moreTransitionName,Z=l.destroyInactiveTabPane,fe=l.renderTabBar,_=l.onChange,le=l.onTabClick,ue=l.onTabScroll,te=Object(be.a)(l,["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"]),Y=ta(T),ie=M==="rtl",pe;re===!1?pe={inkBar:!1,tabPane:!1}:re===!0?pe={inkBar:!0,tabPane:!0}:pe=Object(ce.a)({inkBar:!0,tabPane:!1},Object(Oe.a)(re)==="object"?re:{});var me=Object(n.useState)(!1),ye=Object(V.a)(me,2),Be=ye[0],he=ye[1];Object(n.useEffect)(function(){he(Object(Bn.a)())},[]);var ge=Object(bn.a)(function(){var De;return(De=Y[0])===null||De===void 0?void 0:De.key},{value:W,defaultValue:L}),je=Object(V.a)(ge,2),Re=je[0],Se=je[1],Fe=Object(n.useState)(function(){return Y.findIndex(function(De){return De.key===Re})}),Ne=Object(V.a)(Fe,2),Ye=Ne[0],we=Ne[1];Object(n.useEffect)(function(){var De=Y.findIndex(function(He){return He.key===Re});if(De===-1){var Ke;De=Math.max(0,Math.min(Ye,Y.length-1)),Se((Ke=Y[De])===null||Ke===void 0?void 0:Ke.key)}we(De)},[Y.map(function(De){return De.key}).join("_"),Re,Ye]);var Ie=Object(bn.a)(null,{value:O}),xe=Object(V.a)(Ie,2),Te=xe[0],Fn=xe[1],Xe=G;Be&&!["left","right"].includes(G)&&(Xe="top"),Object(n.useEffect)(function(){O||(Fn("rc-tabs-".concat(fr)),fr+=1)},[]);function Ve(De,Ke){le==null||le(De,Ke),Se(De),_==null||_(De)}var tn={id:Te,activeKey:Re,animated:pe,tabPosition:Xe,rtl:ie,mobile:Be},hn,vn=Object(ce.a)(Object(ce.a)({},tn),{},{editable:U,locale:ne,moreIcon:Q,moreTransitionName:ae,tabBarGutter:se,onTabClick:Ve,onTabScroll:ue,extra:q,style:J,panes:T});return fe?hn=fe(vn,mr):hn=n.createElement(mr,vn),n.createElement(Jt.Provider,{value:{tabs:Y,prefixCls:F}},n.createElement("div",Object(I.a)({ref:m,id:O,className:Ce()(F,"".concat(F,"-").concat(Xe),(y={},Object(oe.a)(y,"".concat(F,"-mobile"),Be),Object(oe.a)(y,"".concat(F,"-editable"),U),Object(oe.a)(y,"".concat(F,"-rtl"),ie),y),A)},te),hn,n.createElement(na,Object(I.a)({destroyInactiveTabPane:Z},tn,{animated:pe}))))}var hr=n.forwardRef(ra);hr.TabPane=pr;var aa=hr,sa=aa,zt=e("MZF8"),cn=e("dEAq"),ia=e("ZpkN"),ba=e("TIsu");function Ut(l,m){var y,O=(y=l.match(/\.(\w+)$/))===null||y===void 0?void 0:y[1];return O||(O=m.tsx?"tsx":"jsx"),O}var oa=l=>{var m,y,O,D=Object(n.useRef)(),F=Object(n.useContext)(cn.context),A=F.locale,T=Object(cn.useLocaleProps)(A,l),M=Object(cn.useDemoUrl)(T.identifier),W=T.demoUrl||M,L=(zt.a===null||zt.a===void 0?void 0:zt.a.location.hash)==="#".concat(T.identifier),U=Object.keys(T.sources).length===1,z=Object(cn.useCodeSandbox)((m=T.hideActions)!==null&&m!==void 0&&m.includes("CSB")?null:T),re=Object(cn.useRiddle)((y=T.hideActions)!==null&&y!==void 0&&y.includes("RIDDLE")?null:T),H=Object(cn.useMotions)(T.motions||[],D.current),G=Object(K.default)(H,2),se=G[0],J=G[1],q=Object(cn.useCopy)(),ne=Object(K.default)(q,2),Q=ne[0],ae=ne[1],Z=Object(n.useState)("_"),fe=Object(K.default)(Z,2),_=fe[0],le=fe[1],ue=Object(n.useState)(Ut(_,T.sources[_])),te=Object(K.default)(ue,2),Y=te[0],ie=te[1],pe=Object(n.useState)(Boolean(T.defaultShowCode)),me=Object(K.default)(pe,2),ye=me[0],Be=me[1],he=Object(n.useState)(Math.random()),ge=Object(K.default)(he,2),je=ge[0],Re=ge[1],Se=T.sources[_][Y]||T.sources[_].content,Fe=Object(cn.useTSPlaygroundUrl)(A,Se),Ne=Object(n.useRef)(),Ye=Object(cn.usePrefersColor)(),we=Object(K.default)(Ye,1),Ie=we[0];Object(n.useEffect)(()=>{Re(Math.random())},[Ie]);function xe(Te){le(Te),ie(Ut(Te,T.sources[Te]))}return v.a.createElement("div",{style:T.style,className:[T.className,"__dumi-default-previewer",L?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:T.identifier,"data-debug":T.debug||void 0,"data-iframe":T.iframe||void 0},T.iframe&&v.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),v.a.createElement("div",{ref:D,className:"__dumi-default-previewer-demo",style:{transform:T.transform?"translate(0, 0)":void 0,padding:T.compact||T.iframe&&T.compact!==!1?"0":void 0,background:T.background}},T.iframe?v.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(T.iframe).replace(/(\d)$/,"$1px")},key:je,src:W,ref:Ne}):T.children),v.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":T.title},T.title&&v.a.createElement(cn.AnchorLink,{to:"#".concat(T.identifier)},T.title),T.description&&v.a.createElement("div",{dangerouslySetInnerHTML:{__html:T.description}})),v.a.createElement("div",{className:"__dumi-default-previewer-actions"},z&&v.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:z}),re&&v.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:re}),T.motions&&v.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:J,onClick:()=>se()}),T.iframe&&v.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:()=>Re(Math.random())}),!((O=T.hideActions)!==null&&O!==void 0&&O.includes("EXTERNAL"))&&v.a.createElement(cn.Link,{target:"_blank",to:W},v.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),v.a.createElement("span",null),v.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":ae,onClick:()=>Q(Se)}),Y==="tsx"&&ye&&v.a.createElement(cn.Link,{target:"_blank",to:Fe},v.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),v.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(ye?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:()=>Be(!ye)})),ye&&v.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!U&&v.a.createElement(sa,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xB7\xB7\xB7",defaultActiveKey:_,onChange:xe},Object.keys(T.sources).map(Te=>v.a.createElement(pr,{tab:Te==="_"?"index.".concat(Ut(Te,T.sources[Te])):Te,key:Te}))),v.a.createElement("div",{className:"__dumi-default-previewer-source"},v.a.createElement(ia.a,{code:Se,lang:Y,showCopy:!1}))))},Ea=_e.default=oa},"80pN":function(pn,_e,e){"use strict";(function(K){/** @license React v16.14.0
* react-dom-test-utils.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var n=e("MgzW"),v=e("q1tI"),I=e("i8i4"),oe=e("QCnb");function V(a){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+a,u=1;u<arguments.length;u++)r+="&args[]="+encodeURIComponent(arguments[u]);return"Minified React error #"+a+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Oe=v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;Oe.hasOwnProperty("ReactCurrentDispatcher")||(Oe.ReactCurrentDispatcher={current:null}),Oe.hasOwnProperty("ReactCurrentBatchConfig")||(Oe.ReactCurrentBatchConfig={suspense:null});function be(a){var r=a,u=a;if(a.alternate)for(;r.return;)r=r.return;else{a=r;do r=a,(r.effectTag&1026)!=0&&(u=r.return),a=r.return;while(a)}return r.tag===3?u:null}function ce(a){if(be(a)!==a)throw Error(V(188))}function An(a){var r=a.alternate;if(!r){if(r=be(a),r===null)throw Error(V(188));return r!==a?null:a}for(var u=a,c=r;;){var t=u.return;if(t===null)break;var h=t.alternate;if(h===null){if(c=t.return,c!==null){u=c;continue}break}if(t.child===h.child){for(h=t.child;h;){if(h===u)return ce(t),a;if(h===c)return ce(t),r;h=h.sibling}throw Error(V(188))}if(u.return!==c.return)u=t,c=h;else{for(var d=!1,C=t.child;C;){if(C===u){d=!0,u=t,c=h;break}if(C===c){d=!0,c=t,u=h;break}C=C.sibling}if(!d){for(C=h.child;C;){if(C===u){d=!0,u=h,c=t;break}if(C===c){d=!0,c=h,u=t;break}C=C.sibling}if(!d)throw Error(V(189))}}if(u.alternate!==c)throw Error(V(190))}if(u.tag!==3)throw Error(V(188));return u.stateNode.current===u?a:r}function Ce(){return!0}function en(){return!1}function Bn(a,r,u,c){this.dispatchConfig=a,this._targetInst=r,this.nativeEvent=u,a=this.constructor.Interface;for(var t in a)a.hasOwnProperty(t)&&((r=a[t])?this[t]=r(u):t==="target"?this.target=c:this[t]=u[t]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Ce:en,this.isPropagationStopped=en,this}n(Bn.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ce)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ce)},persist:function(){this.isPersistent=Ce},isPersistent:en,destructor:function(){var a=this.constructor.Interface,r;for(r in a)this[r]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=en,this._dispatchInstances=this._dispatchListeners=null}}),Bn.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null},Bn.extend=function(a){function r(){}function u(){return c.apply(this,arguments)}var c=this;r.prototype=c.prototype;var t=new r;return n(t,u.prototype),u.prototype=t,u.prototype.constructor=u,u.Interface=n({},c.Interface,a),u.extend=c.extend,$e(u),u},$e(Bn);function bn(a,r,u,c){if(this.eventPool.length){var t=this.eventPool.pop();return this.call(t,a,r,u,c),t}return new this(a,r,u,c)}function un(a){if(!(a instanceof this))throw Error(V(279));a.destructor(),10>this.eventPool.length&&this.eventPool.push(a)}function $e(a){a.eventPool=[],a.getPooled=bn,a.release=un}var Mn=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined");function Tn(a,r){var u={};return u[a.toLowerCase()]=r.toLowerCase(),u["Webkit"+a]="webkit"+r,u["Moz"+a]="moz"+r,u}var En={animationend:Tn("Animation","AnimationEnd"),animationiteration:Tn("Animation","AnimationIteration"),animationstart:Tn("Animation","AnimationStart"),transitionend:Tn("Transition","TransitionEnd")},Ae={},rt={};Mn&&(rt=document.createElement("div").style,"AnimationEvent"in window||(delete En.animationend.animation,delete En.animationiteration.animation,delete En.animationstart.animation),"TransitionEvent"in window||delete En.transitionend.transition);function Kn(a){if(Ae[a])return Ae[a];if(!En[a])return a;var r=En[a],u;for(u in r)if(r.hasOwnProperty(u)&&u in rt)return Ae[a]=r[u];return a}var at=Kn("animationend"),pt=Kn("animationiteration"),st=Kn("animationstart"),ft=Kn("transitionend"),Wn=null;function it(a){if(Wn===null)try{var r=("require"+Math.random()).slice(0,7);Wn=(K&&K[r])("timers").setImmediate}catch(u){Wn=function(c){var t=new MessageChannel;t.port1.onmessage=c,t.port2.postMessage(void 0)}}return Wn(a)}var zn=I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,ht=zn[11],Ln=zn[12],xn=I.unstable_batchedUpdates,Un=Oe.IsSomeRendererActing,ot=typeof oe.unstable_flushAllWithoutAsserting=="function",$n=oe.unstable_flushAllWithoutAsserting||function(){for(var a=!1;ht();)a=!0;return a};function lt(a){try{$n(),it(function(){$n()?lt(a):a()})}catch(r){a(r)}}var fn=0,Yn=!1,Hn=I.findDOMNode,dn=I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,vt=dn[0],Nn=dn[4],j=dn[5],S=dn[6],P=dn[7],f=dn[8],s=dn[9],g=dn[10];function b(){}function E(a,r){if(!a)return[];if(a=An(a),!a)return[];for(var u=a,c=[];;){if(u.tag===5||u.tag===6||u.tag===1||u.tag===0){var t=u.stateNode;r(t)&&c.push(t)}if(u.child)u.child.return=u,u=u.child;else{if(u===a)return c;for(;!u.sibling;){if(!u.return||u.return===a)return c;u=u.return}u.sibling.return=u.return,u=u.sibling}}}function i(a,r){if(a&&!a._reactInternalFiber){var u=""+a;throw a=Array.isArray(a)?"an array":a&&a.nodeType===1&&a.tagName?"a DOM node":u==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":u,Error(V(286,r,a))}}var p={renderIntoDocument:function(a){var r=document.createElement("div");return I.render(a,r)},isElement:function(a){return v.isValidElement(a)},isElementOfType:function(a,r){return v.isValidElement(a)&&a.type===r},isDOMComponent:function(a){return!(!a||a.nodeType!==1||!a.tagName)},isDOMComponentElement:function(a){return!!(a&&v.isValidElement(a)&&a.tagName)},isCompositeComponent:function(a){return p.isDOMComponent(a)?!1:a!=null&&typeof a.render=="function"&&typeof a.setState=="function"},isCompositeComponentWithType:function(a,r){return p.isCompositeComponent(a)?a._reactInternalFiber.type===r:!1},findAllInRenderedTree:function(a,r){return i(a,"findAllInRenderedTree"),a?E(a._reactInternalFiber,r):[]},scryRenderedDOMComponentsWithClass:function(a,r){return i(a,"scryRenderedDOMComponentsWithClass"),p.findAllInRenderedTree(a,function(u){if(p.isDOMComponent(u)){var c=u.className;typeof c!="string"&&(c=u.getAttribute("class")||"");var t=c.split(/\s+/);if(!Array.isArray(r)){if(r===void 0)throw Error(V(11));r=r.split(/\s+/)}return r.every(function(h){return t.indexOf(h)!==-1})}return!1})},findRenderedDOMComponentWithClass:function(a,r){if(i(a,"findRenderedDOMComponentWithClass"),a=p.scryRenderedDOMComponentsWithClass(a,r),a.length!==1)throw Error("Did not find exactly one match (found: "+a.length+") for class:"+r);return a[0]},scryRenderedDOMComponentsWithTag:function(a,r){return i(a,"scryRenderedDOMComponentsWithTag"),p.findAllInRenderedTree(a,function(u){return p.isDOMComponent(u)&&u.tagName.toUpperCase()===r.toUpperCase()})},findRenderedDOMComponentWithTag:function(a,r){if(i(a,"findRenderedDOMComponentWithTag"),a=p.scryRenderedDOMComponentsWithTag(a,r),a.length!==1)throw Error("Did not find exactly one match (found: "+a.length+") for tag:"+r);return a[0]},scryRenderedComponentsWithType:function(a,r){return i(a,"scryRenderedComponentsWithType"),p.findAllInRenderedTree(a,function(u){return p.isCompositeComponentWithType(u,r)})},findRenderedComponentWithType:function(a,r){if(i(a,"findRenderedComponentWithType"),a=p.scryRenderedComponentsWithType(a,r),a.length!==1)throw Error("Did not find exactly one match (found: "+a.length+") for componentType:"+r);return a[0]},mockComponent:function(a,r){return r=r||a.mockTagName||"div",a.prototype.render.mockImplementation(function(){return v.createElement(r,null,this.props.children)}),this},nativeTouchData:function(a,r){return{touches:[{pageX:a,pageY:r}]}},Simulate:null,SimulateNative:{},act:function(a){function r(){fn--,Un.current=u,Ln.current=c}Yn===!1&&(Yn=!0,console.error("act(...) is not supported in production builds of React, and might not behave as expected.")),fn++;var u=Un.current,c=Ln.current;Un.current=!0,Ln.current=!0;try{var t=xn(a)}catch(h){throw r(),h}if(t!==null&&typeof t=="object"&&typeof t.then=="function")return{then:function(h,d){t.then(function(){1<fn||ot===!0&&u===!0?(r(),h()):lt(function(C){r(),C?d(C):h()})},function(C){r(),d(C)})}};try{fn!==1||ot!==!1&&u!==!1||$n(),r()}catch(h){throw r(),h}return{then:function(h){h()}}}};function o(a){return function(r,u){if(v.isValidElement(r))throw Error(V(228));if(p.isCompositeComponent(r))throw Error(V(229));var c=Nn[a],t=new b;t.target=r,t.type=a.toLowerCase();var h=vt(r),d=new Bn(c,h,t,r);d.persist(),n(d,u),c.phasedRegistrationNames?j(d):S(d),I.unstable_batchedUpdates(function(){P(r),g(d)}),f()}}p.Simulate={};for(var B in Nn)p.Simulate[B]=o(B);function N(a,r){return function(u,c){var t=new b(a);n(t,c),p.isDOMComponent(u)?(u=Hn(u),t.target=u,s(r,1,document,t)):u.tagName&&(t.target=u,s(r,1,document,t))}}[["abort","abort"],[at,"animationEnd"],[pt,"animationIteration"],[st,"animationStart"],["blur","blur"],["canplaythrough","canPlayThrough"],["canplay","canPlay"],["cancel","cancel"],["change","change"],["click","click"],["close","close"],["compositionend","compositionEnd"],["compositionstart","compositionStart"],["compositionupdate","compositionUpdate"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["dragstart","dragStart"],["drag","drag"],["drop","drop"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],["ended","ended"],["error","error"],["focus","focus"],["input","input"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["loadstart","loadStart"],["loadstart","loadStart"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["mousedown","mouseDown"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["playing","playing"],["progress","progress"],["ratechange","rateChange"],["scroll","scroll"],["seeked","seeked"],["seeking","seeking"],["selectionchange","selectionChange"],["stalled","stalled"],["suspend","suspend"],["textInput","textInput"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchmove","touchMove"],["touchstart","touchStart"],[ft,"transitionEnd"],["volumechange","volumeChange"],["waiting","waiting"],["wheel","wheel"]].forEach(function(a){var r=a[1];p.SimulateNative[r]=N(r,a[0])}),K.exports=p.default||p}).call(this,e("hOG+")(pn))},JjdP:function(pn,_e,e){"use strict";e.r(_e);var K=e("9og8"),n=e("WmNS"),v=e.n(n),I=e("LtsZ"),oe=`import React, { useRef } from 'react';
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
};`,Oe=`import React from 'react';
import FormRender, { useForm } from 'form-render';

const Demo = props => {
  const form = useForm();
  return <FormRender form={form} {...props} />;
};

export default Demo;`,be=`export const delay = ms => new Promise(res => setTimeout(res, ms));

export const fakeApi = (url, data) => {
  console.group('request:', url);
  console.log('params:', data);
  console.groupEnd();
  return delay(500);
};`,ce=`import React from 'react';
import FormRender, { useForm } from 'form-render';

const Demo = ({ schema }) => {
  const form = useForm();
  return (
    <div>
      <FormRender form={form} schema={schema} />
    </div>
  );
};

export default Demo;`,An=`export const basic = {
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
};`,Ce=`import React from 'react';
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

export default Demo;`,en=`import React, { useState, useEffect } from 'react';
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

export default Demo;`,Bn=`import React, { useState, useEffect } from 'react';
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

export default Demo;`,bn=`import React, { useState, useEffect } from 'react';
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

export default Demo;`,un=`import React, { useState, useEffect } from 'react';
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
}`,Mn=`import React, { Component } from 'react';
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

export default Root;`,Tn=`import React, { useState, useEffect } from 'react';
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

export default Demo;`,En=`{
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
}`,Ae=`import { Select } from 'antd';
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

export default Demo;`,Kn=`/* PrismJS 1.16.0
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
}`,Wn=`import { Select } from 'antd';
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

export default Demo;`,zn=`import { monaco } from 'react-monaco-editor';

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
}`,Ln=`import React from 'react';
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

export default withTable(Demo);`,xn=`import React from 'react';
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

export default withTable(Demo);`,$n=`import React from 'react';
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

export default Demo;`,fn=`import React from 'react';
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
}`,dn=`import React, { useState, useRef } from 'react';
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

export default Demo;`,Nn=_e.default={"guide-card":{component:Object(I.dynamic)({loader:function(){var j=Object(K.a)(v.a.mark(function P(){return v.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(25)]).then(e.bind(null,"oLxE"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},P)}));function S(){return j.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:oe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"card-render":{version:"0.1.2"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"0.x"}},identifier:"guide-card"}},"chart-render-demo":{component:Object(I.dynamic)({loader:function(){var j=Object(K.a)(v.a.mark(function P(){var f,s,g,b,E,i,p;return v.a.wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return i=function(a,r){if(!r&&a&&a.__esModule)return a;if(a===null||typeof a!="object"&&typeof a!="function")return{default:a};var u=E(r);if(u&&u.has(a))return u.get(a);var c={},t=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var h in a)if(h!=="default"&&Object.prototype.hasOwnProperty.call(a,h)){var d=t?Object.getOwnPropertyDescriptor(a,h):null;d&&(d.get||d.set)?Object.defineProperty(c,h,d):c[h]=a[h]}return c.default=a,u&&u.set(a,c),c},E=function(a){if(typeof WeakMap!="function")return null;var r=new WeakMap,u=new WeakMap;return(E=function(t){return t?u:r})(a)},f=e("K+nK"),B.t0=f,B.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return B.t1=B.sent,s=(0,B.t0)(B.t1),B.t2=i,B.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return B.t3=B.sent,g=(0,B.t2)(B.t3),B.next=15,Promise.all([e.e(0),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 15:return b=B.sent,p=function(){var a=(0,g.useState)("Line"),r=(0,s.default)(a,2),u=r[0],c=r[1],t={Line:b.Line,Column:b.Column,PivotTable:b.PivotTable}[u];return g.default.createElement("div",null,g.default.createElement("div",{style:{marginBottom:10}},g.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return c("Line")}},"\u6298\u7EBF\u56FE"),g.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return c("Column")}},"\u67F1\u72B6\u56FE"),g.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return c("PivotTable")}},"\u4EA4\u53C9\u8868")),g.default.createElement(t,{meta:[{id:"date",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF",isDim:!1},{id:"uv",name:"\u8BBF\u5BA2\u6570",isDim:!1}],data:[{date:"20200101",pv:100,uv:50},{date:"20200102",pv:120,uv:60},{date:"20200103",pv:140,uv:70},{date:"20200104",pv:160,uv:80}]}))},B.abrupt("return",p);case 18:case"end":return B.stop()}},P)}));function S(){return j.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"chart-render-demo"}},"column-demo":{component:Object(I.dynamic)({loader:function(){var j=Object(K.a)(v.a.mark(function P(){var f,s,g,b;return v.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=e("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,s=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return g=i.sent,b=function(){return s.default.createElement(g.Column,{meta:[{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{pv:50,uv:20}]})},i.abrupt("return",b);case 11:case"end":return i.stop()}},P)}));function S(){return j.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[{ pv: 50, uv: 20 }]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo"}},"column-demo-1":{component:Object(I.dynamic)({loader:function(){var j=Object(K.a)(v.a.mark(function P(){var f,s,g,b;return v.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=e("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,s=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return g=i.sent,b=function(){return s.default.createElement(g.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},i.abrupt("return",b);case 11:case"end":return i.stop()}},P)}));function S(){return j.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-1"}},"column-demo-2":{component:Object(I.dynamic)({loader:function(){var j=Object(K.a)(v.a.mark(function P(){var f,s,g,b;return v.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=e("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,s=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return g=i.sent,b=function(){return s.default.createElement(g.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},i.abrupt("return",b);case 11:case"end":return i.stop()}},P)}));function S(){return j.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-2"}},"column-demo-3":{component:Object(I.dynamic)({loader:function(){var j=Object(K.a)(v.a.mark(function P(){var f,s,g,b;return v.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=e("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,s=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return g=i.sent,b=function(){return s.default.createElement(g.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},i.abrupt("return",b);case 11:case"end":return i.stop()}},P)}));function S(){return j.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-3"}},"column-demo-4":{component:Object(I.dynamic)({loader:function(){var j=Object(K.a)(v.a.mark(function P(){var f,s,g,b;return v.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=e("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,s=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return g=i.sent,b=function(){return s.default.createElement(g.Column,{inverted:!0,label:{position:"middle",layout:[{type:"interval-adjust-position"},{type:"interval-hide-overlap"},{type:"adjust-color"}]},meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},i.abrupt("return",b);case 11:case"end":return i.stop()}},P)}));function S(){return j.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-4"}},"line-demo":{component:Object(I.dynamic)({loader:function(){var j=Object(K.a)(v.a.mark(function P(){var f,s,g,b;return v.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=e("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,s=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return g=i.sent,b=function(){return s.default.createElement(g.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},i.abrupt("return",b);case 11:case"end":return i.stop()}},P)}));function S(){return j.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo"}},"line-demo-1":{component:Object(I.dynamic)({loader:function(){var j=Object(K.a)(v.a.mark(function P(){var f,s,g,b;return v.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=e("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,s=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return g=i.sent,b=function(){return s.default.createElement(g.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},i.abrupt("return",b);case 11:case"end":return i.stop()}},P)}));function S(){return j.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-1"}},"line-demo-2":{component:Object(I.dynamic)({loader:function(){var j=Object(K.a)(v.a.mark(function P(){var f,s,g,b;return v.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=e("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,s=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return g=i.sent,b=function(){return s.default.createElement(g.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"},{id:"pv",name:"\u8BBF\u95EE\u91CF"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20,pv:120},{ds:"2020-12-31",page:"\u9996\u9875",uv:120,pv:1120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21,pv:121},{ds:"2021-01-01",page:"\u9996\u9875",uv:121,pv:1121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15,pv:115},{ds:"2021-01-02",page:"\u9996\u9875",uv:115,pv:1115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40,pv:140},{ds:"2021-01-03",page:"\u9996\u9875",uv:140,pv:1140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31,pv:131},{ds:"2021-01-04",page:"\u9996\u9875",uv:131,pv:1131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32,pv:132},{ds:"2021-01-05",page:"\u9996\u9875",uv:132,pv:1132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30,pv:130},{ds:"2021-01-06",page:"\u9996\u9875",uv:130,pv:1130}]})},i.abrupt("return",b);case 11:case"end":return i.stop()}},P)}));function S(){return j.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-2"}},"line-demo-3":{component:Object(I.dynamic)({loader:function(){var j=Object(K.a)(v.a.mark(function P(){var f,s,g,b;return v.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=e("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,s=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return g=i.sent,b=function(){return s.default.createElement(g.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},i.abrupt("return",b);case 11:case"end":return i.stop()}},P)}));function S(){return j.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-3"}},"line-demo-4":{component:Object(I.dynamic)({loader:function(){var j=Object(K.a)(v.a.mark(function P(){var f,s,g,b;return v.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=e("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,s=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return g=i.sent,b=function(){return s.default.createElement(g.Line,{withArea:!0,isStack:!0,isPercent:!0,meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},i.abrupt("return",b);case 11:case"end":return i.stop()}},P)}));function S(){return j.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-4"}},"pivot-table-demo":{component:Object(I.dynamic)({loader:function(){var j=Object(K.a)(v.a.mark(function P(){var f,s,g,b;return v.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=e("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,s=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return g=i.sent,b=function(){return s.default.createElement(g.PivotTable,{style:{maxHeight:400,overflow:"auto"},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},i.abrupt("return",b);case 11:case"end":return i.stop()}},P)}));function S(){return j.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo"}},"pivot-table-demo-1":{component:Object(I.dynamic)({loader:function(){var j=Object(K.a)(v.a.mark(function P(){var f,s,g,b;return v.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=e("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,s=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return g=i.sent,b=function(){return s.default.createElement(g.PivotTable,{style:{maxHeight:400,overflow:"auto"},cellRender:function(B,N,a){return s.default.createElement("div",null,s.default.createElement("p",null,"\u53C2\u6570\u8868\uFF1A"),s.default.createElement("p",{style:{color:["red","orange","yellow","green","blue"][Object.keys(N).length]}},B),s.default.createElement("p",null,JSON.stringify(N)),s.default.createElement("p",null,JSON.stringify(a)))},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},i.abrupt("return",b);case 11:case"end":return i.stop()}},P)}));function S(){return j.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-1"}},"pivot-table-demo-2":{component:Object(I.dynamic)({loader:function(){var j=Object(K.a)(v.a.mark(function P(){var f,s,g,b,E,i,p;return v.a.wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return i=function(a,r){if(!r&&a&&a.__esModule)return a;if(a===null||typeof a!="object"&&typeof a!="function")return{default:a};var u=E(r);if(u&&u.has(a))return u.get(a);var c={},t=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var h in a)if(h!=="default"&&Object.prototype.hasOwnProperty.call(a,h)){var d=t?Object.getOwnPropertyDescriptor(a,h):null;d&&(d.get||d.set)?Object.defineProperty(c,h,d):c[h]=a[h]}return c.default=a,u&&u.set(a,c),c},E=function(a){if(typeof WeakMap!="function")return null;var r=new WeakMap,u=new WeakMap;return(E=function(t){return t?u:r})(a)},f=e("K+nK"),B.t0=f,B.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return B.t1=B.sent,s=(0,B.t0)(B.t1),B.t2=i,B.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return B.t3=B.sent,g=(0,B.t2)(B.t3),B.next=15,Promise.all([e.e(0),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 15:return b=B.sent,p=function(){var a=(0,g.useState)(!1),r=(0,s.default)(a,2),u=r[0],c=r[1];return g.default.createElement(g.default.Fragment,null,g.default.createElement("label",null,"\u53EF\u5C55\u5F00/\u6536\u7F29\uFF1A",g.default.createElement("input",{type:"checkbox",value:u,onChange:function(){return c(!u)}})),g.default.createElement(b.PivotTable,{leftExpandable:u,showSubtotal:!1,meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]}))},B.abrupt("return",p);case 18:case"end":return B.stop()}},P)}));function S(){return j.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-2"}},"OldSchemaTransformer-demo":{component:Object(I.dynamic)({loader:function(){var j=Object(K.a)(v.a.mark(function P(){var f,s,g,b,E,i,p,o,B,N,a,r,u;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return B=function(d,C){if(!C&&d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var R=o(C);if(R&&R.has(d))return R.get(d);var w={},$=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var x in d)if(x!=="default"&&Object.prototype.hasOwnProperty.call(d,x)){var k=$?Object.getOwnPropertyDescriptor(d,x):null;k&&(k.get||k.set)?Object.defineProperty(w,x,k):w[x]=d[x]}return w.default=d,R&&R.set(d,w),w},o=function(d){if(typeof WeakMap!="function")return null;var C=new WeakMap,R=new WeakMap;return(o=function($){return $?R:C})(d)},f=e("K+nK"),t.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return t.t0=f,t.next=8,e.e(7).then(e.t.bind(null,"4IMT",7));case 8:return t.t1=t.sent,s=(0,t.t0)(t.t1),t.t2=f,t.next=13,Promise.resolve().then(e.bind(null,"tJVT"));case 13:return t.t3=t.sent,g=(0,t.t2)(t.t3),t.next=17,Promise.all([e.e(3),e.e(18)]).then(e.t.bind(null,"cUip",7));case 17:return t.t4=f,t.next=20,Promise.all([e.e(0),e.e(7),e.e(17),e.e(19)]).then(e.t.bind(null,"iJl9",7));case 20:return t.t5=t.sent,b=(0,t.t4)(t.t5),t.t6=B,t.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return t.t7=t.sent,E=(0,t.t6)(t.t7),t.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(8),e.e(9)]).then(e.bind(null,"gdfu"));case 29:return i=t.sent,t.next=32,Promise.all([e.e(76),e.e(83)]).then(e.bind(null,"Ejlu"));case 32:return p=t.sent,N=b.default.TextArea,a={type:"object",properties:{number:{title:"\u6570\u5B57\u8F93\u5165\u6846",type:"number","ui:disabled":!0},checkbox:{title:"\u662F\u5426\u9009\u62E9",type:"boolean","ui:widget":"switch"}},required:["number"]},r=function(){var d=(0,E.useState)(JSON.stringify(a)),C=(0,g.default)(d,2),R=C[0],w=C[1],$=(0,E.useState)({}),x=(0,g.default)($,2),k=x[0],Le=x[1],Ue=function(){try{var Cn=(0,p.updateSchemaToNewVersion)(JSON.parse(R));Le(Cn)}catch(ut){console.log(ut)}},sn=function(Cn){w(Cn.target.value)},nn=function(){w(JSON.stringify(JSON.parse(R),null,2))};return E.default.createElement("div",null,E.default.createElement("div",null,"\u586B\u5165\u65E7\u7248schema\uFF1A"),E.default.createElement(N,{style:{minHeight:400,marginTop:12,marginBottom:12},value:R,onChange:sn}),E.default.createElement(s.default,{style:{marginRight:12},onClick:nn},"\u683C\u5F0F\u5316\u65E7schema"),E.default.createElement(s.default,{type:"primary",onClick:Ue},"\u751F\u6210\u65B0\u7248schema"),E.default.createElement(N,{style:{minHeight:400,marginTop:12},value:JSON.stringify(k,null,2)}))},u=r,t.abrupt("return",u);case 38:case"end":return t.stop()}},P)}));function S(){return j.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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

export default Translator;`},"packages/form-render-core/src/utils.js":{import:"../../packages/form-render-core/src/utils.js",content:V}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"},"lodash-es":{version:"4.17.21"}},identifier:"OldSchemaTransformer-demo"}},"form-render-demo":{component:Object(I.dynamic)({loader:function(){var j=Object(K.a)(v.a.mark(function P(){var f,s,g,b,E,i,p,o,B,N;return v.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return p=function(c,t){if(!t&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var h=i(t);if(h&&h.has(c))return h.get(c);var d={},C=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var R in c)if(R!=="default"&&Object.prototype.hasOwnProperty.call(c,R)){var w=C?Object.getOwnPropertyDescriptor(c,R):null;w&&(w.get||w.set)?Object.defineProperty(d,R,w):d[R]=c[R]}return d.default=c,h&&h.set(c,d),d},i=function(c){if(typeof WeakMap!="function")return null;var t=new WeakMap,h=new WeakMap;return(i=function(C){return C?h:t})(c)},f=e("K+nK"),r.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return r.t0=f,r.next=8,e.e(7).then(e.t.bind(null,"4IMT",7));case 8:return r.t1=r.sent,s=(0,r.t0)(r.t1),r.t2=f,r.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return r.t3=r.sent,g=(0,r.t2)(r.t3),r.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(8),e.e(9)]).then(e.bind(null,"gdfu"));case 17:return b=r.sent,r.t4=p,r.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 21:return r.t5=r.sent,E=(0,r.t4)(r.t5),o={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},B=function(){var c=(0,E.useForm)(),t=function(d,C){console.log("formData:",d,"errors",C)};return g.default.createElement("div",null,g.default.createElement(E.default,{form:c,schema:o,onFinish:t}),g.default.createElement(s.default,{type:"primary",onClick:c.submit},"\u63D0\u4EA4"))},N=B,r.abrupt("return",N);case 27:case"end":return r.stop()}},P)}));function S(){return j.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo"}},"form-render-demo-1":{component:Object(I.dynamic)({loader:function(){var j=Object(K.a)(v.a.mark(function P(){var f,s,g,b,E,i,p,o,B,N,a,r,u,c;return v.a.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return a=function(C,R){if(!R&&C&&C.__esModule)return C;if(C===null||typeof C!="object"&&typeof C!="function")return{default:C};var w=N(R);if(w&&w.has(C))return w.get(C);var $={},x=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var k in C)if(k!=="default"&&Object.prototype.hasOwnProperty.call(C,k)){var Le=x?Object.getOwnPropertyDescriptor(C,k):null;Le&&(Le.get||Le.set)?Object.defineProperty($,k,Le):$[k]=C[k]}return $.default=C,w&&w.set(C,$),$},N=function(C){if(typeof WeakMap!="function")return null;var R=new WeakMap,w=new WeakMap;return(N=function(x){return x?w:R})(C)},f=e("K+nK"),h.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return h.t0=f,h.next=8,e.e(7).then(e.t.bind(null,"4IMT",7));case 8:return h.t1=h.sent,s=(0,h.t0)(h.t1),h.t2=f,h.next=13,e.e(85).then(e.bind(null,"fWQN"));case 13:return h.t3=h.sent,g=(0,h.t2)(h.t3),h.t4=f,h.next=18,e.e(86).then(e.bind(null,"mtLc"));case 18:return h.t5=h.sent,b=(0,h.t4)(h.t5),h.t6=f,h.next=23,e.e(78).then(e.bind(null,"yKVA"));case 23:return h.t7=h.sent,E=(0,h.t6)(h.t7),h.t8=f,h.next=28,e.e(77).then(e.bind(null,"879j"));case 28:return h.t9=h.sent,i=(0,h.t8)(h.t9),h.t10=f,h.next=33,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 33:return h.t11=h.sent,p=(0,h.t10)(h.t11),h.next=37,Promise.all([e.e(0),e.e(1),e.e(2),e.e(8),e.e(9)]).then(e.bind(null,"gdfu"));case 37:return o=h.sent,h.t12=a,h.next=41,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 41:return h.t13=h.sent,B=(0,h.t12)(h.t13),r={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},u=function(d){(0,E.default)(R,d);var C=(0,i.default)(R);function R(){var w;(0,g.default)(this,R);for(var $=arguments.length,x=new Array($),k=0;k<$;k++)x[k]=arguments[k];return w=C.call.apply(C,[this].concat(x)),w.onFinish=function(Le,Ue){console.log("formData:",Le,"errors",Ue)},w}return(0,b.default)(R,[{key:"render",value:function(){var $=this.props.form;return p.default.createElement("div",null,p.default.createElement(B.default,{form:$,schema:r,onFinish:this.onFinish}),p.default.createElement(s.default,{type:"primary",onClick:$.submit},"\u63D0\u4EA4"))}}]),R}(p.default.Component),c=(0,B.connectForm)(u),h.abrupt("return",c);case 47:case"end":return h.stop()}},P)}));function S(){return j.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default connectForm(Demo);`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo-1"}},"form-render-demo-2":{component:Object(I.dynamic)({loader:function(){var j=Object(K.a)(v.a.mark(function P(){var f,s,g,b,E,i,p,o,B,N;return v.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return p=function(c,t){if(!t&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var h=i(t);if(h&&h.has(c))return h.get(c);var d={},C=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var R in c)if(R!=="default"&&Object.prototype.hasOwnProperty.call(c,R)){var w=C?Object.getOwnPropertyDescriptor(c,R):null;w&&(w.get||w.set)?Object.defineProperty(d,R,w):d[R]=c[R]}return d.default=c,h&&h.set(c,d),d},i=function(c){if(typeof WeakMap!="function")return null;var t=new WeakMap,h=new WeakMap;return(i=function(C){return C?h:t})(c)},f=e("K+nK"),r.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return r.t0=f,r.next=8,e.e(7).then(e.t.bind(null,"4IMT",7));case 8:return r.t1=r.sent,s=(0,r.t0)(r.t1),r.t2=f,r.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return r.t3=r.sent,g=(0,r.t2)(r.t3),r.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(8),e.e(9)]).then(e.bind(null,"gdfu"));case 17:return b=r.sent,r.t4=p,r.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 21:return r.t5=r.sent,E=(0,r.t4)(r.t5),o={displayType:"row",labelWidth:60,type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F",type:"range",format:"date"},showSetting:{title:"\u662F\u5426\u5C55\u793A\u7F51\u5740",type:"boolean"},siteUrl:{title:"\u7F51\u5740",type:"string",placeholder:"\u6B64\u5904\u5FC5\u586B",hidden:"{{formData.showSetting !== true}}",required:!0,props:{addonBefore:"https://",addonAfter:".com"}}}},B=function(){var c=(0,E.useForm)(),t=function(d,C){C.length>0?alert("errors:"+JSON.stringify(C)):alert("formData:"+JSON.stringify(d,null,2))};return g.default.createElement("div",null,g.default.createElement(E.default,{form:c,schema:o,onFinish:t}),g.default.createElement(s.default,{type:"primary",onClick:c.submit},"\u63D0\u4EA4"))},N=B,r.abrupt("return",N);case 27:case"end":return r.stop()}},P)}));function S(){return j.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-demo-2"}},"display-demo":{component:Object(I.dynamic)({loader:function(){var j=Object(K.a)(v.a.mark(function P(){var f,s,g,b,E;return v.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return f=e("K+nK"),p.t0=f,p.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return p.t1=p.sent,s=(0,p.t0)(p.t1),p.t2=f,p.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return p.t3=p.sent,g=(0,p.t2)(p.t3),b=function(B){return{type:"object",displayType:B,properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},objectName:{title:"\u5BF9\u8C61",bind:"obj",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},E=function(){return s.default.createElement("div",null,s.default.createElement("h2",null,"display: row"),s.default.createElement(g.default,{schema:b("row")}),s.default.createElement("h2",null,"display: column"),s.default.createElement(g.default,{schema:b("column")}))},p.abrupt("return",E);case 14:case"end":return p.stop()}},P)}));function S(){return j.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`},"demo/display.js":{import:"../demo/display",content:Oe}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo"}},"display-demo-1":{component:Object(I.dynamic)({loader:function(){var j=Object(K.a)(v.a.mark(function P(){var f,s,g,b,E;return v.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return f=e("K+nK"),p.t0=f,p.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return p.t1=p.sent,s=(0,p.t0)(p.t1),p.t2=f,p.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return p.t3=p.sent,g=(0,p.t2)(p.t3),b={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0},check:{title:"box",type:"boolean",default:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},E=function(){return s.default.createElement(g.default,{readOnly:!0,schema:b})},p.abrupt("return",E);case 14:case"end":return p.stop()}},P)}));function S(){return j.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form readOnly schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:Oe}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-1"}},"display-demo-2":{component:Object(I.dynamic)({loader:function(){var j=Object(K.a)(v.a.mark(function P(){var f,s,g,b,E;return v.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return f=e("K+nK"),p.t0=f,p.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return p.t1=p.sent,s=(0,p.t0)(p.t1),p.t2=f,p.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return p.t3=p.sent,g=(0,p.t2)(p.t3),b={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0,width:"50%"},check:{title:"box",type:"boolean",default:!0,width:"50%",labelWidth:6},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},E=function(){return s.default.createElement(g.default,{labelWidth:"200",schema:b})},p.abrupt("return",E);case 14:case"end":return p.stop()}},P)}));function S(){return j.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form labelWidth="200" schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:Oe}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-2"}},"display-demo-3":{component:Object(I.dynamic)({loader:function(){var j=Object(K.a)(v.a.mark(function P(){var f,s,g,b,E,i;return v.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,s=(0,o.t0)(o.t1),o.t2=f,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,g=(0,o.t2)(o.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},E=function(){return s.default.createElement(g.default,{schema:b})},i=E,o.abrupt("return",i);case 15:case"end":return o.stop()}},P)}));function S(){return j.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Oe}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-3"}},"display-demo-4":{component:Object(I.dynamic)({loader:function(){var j=Object(K.a)(v.a.mark(function P(){var f,s,g,b,E,i;return v.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,s=(0,o.t0)(o.t1),o.t2=f,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,g=(0,o.t2)(o.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"simpleList",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},E=function(){return s.default.createElement(g.default,{schema:b})},i=E,o.abrupt("return",i);case 15:case"end":return o.stop()}},P)}));function S(){return j.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Oe}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-4"}},"display-demo-5":{component:Object(I.dynamic)({loader:function(){var j=Object(K.a)(v.a.mark(function P(){var f,s,g,b,E,i;return v.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,s=(0,o.t0)(o.t1),o.t2=f,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,g=(0,o.t2)(o.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"tableList",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},E=function(){return s.default.createElement(g.default,{schema:b})},i=E,o.abrupt("return",i);case 15:case"end":return o.stop()}},P)}));function S(){return j.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Oe}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-5"}},"display-demo-6":{component:Object(I.dynamic)({loader:function(){var j=Object(K.a)(v.a.mark(function P(){var f,s,g,b,E,i;return v.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,s=(0,o.t0)(o.t1),o.t2=f,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,g=(0,o.t2)(o.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"drawerList",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"simpleList",props:{hideMove:!0},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},E=function(){return s.default.createElement(g.default,{schema:b})},i=E,o.abrupt("return",i);case 15:case"end":return o.stop()}},P)}));function S(){return j.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Oe}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-6"}},"form-methods-demo":{component:Object(I.dynamic)({loader:function(){var j=Object(K.a)(v.a.mark(function P(){var f,s,g,b,E,i,p,o,B,N,a,r,u;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=function(d,C){if(!C&&d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var R=N(C);if(R&&R.has(d))return R.get(d);var w={},$=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var x in d)if(x!=="default"&&Object.prototype.hasOwnProperty.call(d,x)){var k=$?Object.getOwnPropertyDescriptor(d,x):null;k&&(k.get||k.set)?Object.defineProperty(w,x,k):w[x]=d[x]}return w.default=d,R&&R.set(d,w),w},N=function(d){if(typeof WeakMap!="function")return null;var C=new WeakMap,R=new WeakMap;return(N=function($){return $?R:C})(d)},f=e("K+nK"),t.next=5,e.e(21).then(e.t.bind(null,"lfLe",7));case 5:return t.t0=f,t.next=8,e.e(22).then(e.t.bind(null,"Cp9S",7));case 8:return t.t1=t.sent,s=(0,t.t0)(t.t1),t.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return t.t2=f,t.next=15,e.e(7).then(e.t.bind(null,"4IMT",7));case 15:return t.t3=t.sent,g=(0,t.t2)(t.t3),t.next=19,e.e(14).then(e.t.bind(null,"tL+A",7));case 19:return t.t4=f,t.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return t.t5=t.sent,b=(0,t.t4)(t.t5),t.t6=f,t.next=27,Promise.resolve().then(e.bind(null,"tJVT"));case 27:return t.t7=t.sent,E=(0,t.t6)(t.t7),t.t8=a,t.next=32,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 32:return t.t9=t.sent,i=(0,t.t8)(t.t9),t.next=36,Promise.all([e.e(0),e.e(1),e.e(2),e.e(8),e.e(9)]).then(e.bind(null,"gdfu"));case 36:return p=t.sent,t.t10=a,t.next=40,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 40:return t.t11=t.sent,o=(0,t.t10)(t.t11),t.next=44,e.e(15).then(e.bind(null,"OH0R"));case 44:return B=t.sent,r=function(){var d=(0,o.useForm)(),C=(0,i.useState)({}),R=(0,E.default)(C,2),w=R[0],$=R[1],x=function(){(0,B.fakeApi)("xxx/getForm").then(function(Ue){d.setValues({input1:"hello world",select1:"c"})})};(0,i.useEffect)(function(){(0,B.delay)(1e3).then(function(Le){$({type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}})})},[]);var k=function(Ue,sn){sn.length>0?b.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(sn.map(function(nn){return nn.name}))):(0,B.fakeApi)("xxx/submit",Ue).then(function(nn){return b.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})};return i.default.createElement("div",{style:{width:"400px"}},i.default.createElement(o.default,{form:d,schema:w,onFinish:k}),i.default.createElement(s.default,null,i.default.createElement(g.default,{onClick:x},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),i.default.createElement(g.default,{type:"primary",onClick:d.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},u=r,t.abrupt("return",u);case 48:case"end":return t.stop()}},P)}));function S(){return j.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:be}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo"}},"form-methods-demo-1":{component:Object(I.dynamic)({loader:function(){var j=Object(K.a)(v.a.mark(function P(){var f,s,g,b,E,i,p,o,B,N,a,r,u;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return N=function(d,C){if(!C&&d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var R=B(C);if(R&&R.has(d))return R.get(d);var w={},$=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var x in d)if(x!=="default"&&Object.prototype.hasOwnProperty.call(d,x)){var k=$?Object.getOwnPropertyDescriptor(d,x):null;k&&(k.get||k.set)?Object.defineProperty(w,x,k):w[x]=d[x]}return w.default=d,R&&R.set(d,w),w},B=function(d){if(typeof WeakMap!="function")return null;var C=new WeakMap,R=new WeakMap;return(B=function($){return $?R:C})(d)},f=e("K+nK"),t.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return t.t0=f,t.next=8,e.e(7).then(e.t.bind(null,"4IMT",7));case 8:return t.t1=t.sent,s=(0,t.t0)(t.t1),t.t2=f,t.next=13,Promise.resolve().then(e.bind(null,"PpiC"));case 13:return t.t3=t.sent,g=(0,t.t2)(t.t3),t.next=17,e.e(14).then(e.t.bind(null,"tL+A",7));case 17:return t.t4=f,t.next=20,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 20:return t.t5=t.sent,b=(0,t.t4)(t.t5),t.t6=f,t.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return t.t7=t.sent,E=(0,t.t6)(t.t7),t.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(8),e.e(9)]).then(e.bind(null,"gdfu"));case 29:return i=t.sent,t.t8=N,t.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 33:return t.t9=t.sent,p=(0,t.t8)(t.t9),t.next=37,e.e(15).then(e.bind(null,"OH0R"));case 37:return o=t.sent,a={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},r=function(){var d=(0,p.useForm)(),C=function($,x){x.length>0?b.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(x.map(function(k){return k.name}))):(0,o.fakeApi)("xxx/submit",$).then(function(k){return b.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},R=function($){var x=$.data,k=$.errors,Le=$.schema,Ue=(0,g.default)($,["data","errors","schema"]);return(0,o.fakeApi)("xxx/validation").then(function(sn){return{name:"select1",error:["\u5916\u90E8\u6821\u9A8C\u9519\u8BEF"]}})};return E.default.createElement("div",{style:{width:"400px"}},E.default.createElement(p.default,{form:d,schema:a,beforeFinish:R,onFinish:C}),E.default.createElement(s.default,{type:"primary",onClick:d.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},u=r,t.abrupt("return",u);case 42:case"end":return t.stop()}},P)}));function S(){return j.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:be}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-1"}},"form-methods-demo-2":{component:Object(I.dynamic)({loader:function(){var j=Object(K.a)(v.a.mark(function P(){var f,s,g,b,E,i,p,o,B,N,a,r,u;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return N=function(d,C){if(!C&&d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var R=B(C);if(R&&R.has(d))return R.get(d);var w={},$=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var x in d)if(x!=="default"&&Object.prototype.hasOwnProperty.call(d,x)){var k=$?Object.getOwnPropertyDescriptor(d,x):null;k&&(k.get||k.set)?Object.defineProperty(w,x,k):w[x]=d[x]}return w.default=d,R&&R.set(d,w),w},B=function(d){if(typeof WeakMap!="function")return null;var C=new WeakMap,R=new WeakMap;return(B=function($){return $?R:C})(d)},f=e("K+nK"),t.next=5,e.e(21).then(e.t.bind(null,"lfLe",7));case 5:return t.t0=f,t.next=8,e.e(22).then(e.t.bind(null,"Cp9S",7));case 8:return t.t1=t.sent,s=(0,t.t0)(t.t1),t.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return t.t2=f,t.next=15,e.e(7).then(e.t.bind(null,"4IMT",7));case 15:return t.t3=t.sent,g=(0,t.t2)(t.t3),t.next=19,e.e(14).then(e.t.bind(null,"tL+A",7));case 19:return t.t4=f,t.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return t.t5=t.sent,b=(0,t.t4)(t.t5),t.t6=f,t.next=27,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 27:return t.t7=t.sent,E=(0,t.t6)(t.t7),t.next=31,Promise.all([e.e(0),e.e(1),e.e(2),e.e(8),e.e(9)]).then(e.bind(null,"gdfu"));case 31:return i=t.sent,t.t8=N,t.next=35,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 35:return t.t9=t.sent,p=(0,t.t8)(t.t9),t.next=39,e.e(15).then(e.bind(null,"OH0R"));case 39:return o=t.sent,a={type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F\u8303\u56F4",type:"range",format:"date"}}},r=function(){var d=(0,p.useForm)(),C=function($,x){x.length>0?b.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(x.map(function(k){return k.name}))):(0,o.fakeApi)("xxx/submit",$).then(function(k){return b.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},R=function(){(0,o.fakeApi)("xxx/getForm").then(function($){d.setValues({startDate:"2020-04-04",endDate:"2020-04-24"})})};return E.default.createElement("div",{style:{width:"400px"}},E.default.createElement(p.default,{form:d,schema:a,onFinish:C}),E.default.createElement(s.default,null,E.default.createElement(g.default,{onClick:R},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),E.default.createElement(g.default,{type:"primary",onClick:d.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},u=r,t.abrupt("return",u);case 44:case"end":return t.stop()}},P)}));function S(){return j.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:be}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-2"}},"form-methods-demo-3":{component:Object(I.dynamic)({loader:function(){var j=Object(K.a)(v.a.mark(function P(){var f,s,g,b,E,i,p,o,B,N,a,r;return v.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return B=function(h,d){if(!d&&h&&h.__esModule)return h;if(h===null||typeof h!="object"&&typeof h!="function")return{default:h};var C=o(d);if(C&&C.has(h))return C.get(h);var R={},w=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var $ in h)if($!=="default"&&Object.prototype.hasOwnProperty.call(h,$)){var x=w?Object.getOwnPropertyDescriptor(h,$):null;x&&(x.get||x.set)?Object.defineProperty(R,$,x):R[$]=h[$]}return R.default=h,C&&C.set(h,R),R},o=function(h){if(typeof WeakMap!="function")return null;var d=new WeakMap,C=new WeakMap;return(o=function(w){return w?C:d})(h)},f=e("K+nK"),c.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return c.t0=f,c.next=8,e.e(7).then(e.t.bind(null,"4IMT",7));case 8:return c.t1=c.sent,s=(0,c.t0)(c.t1),c.next=12,e.e(14).then(e.t.bind(null,"tL+A",7));case 12:return c.t2=f,c.next=15,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 15:return c.t3=c.sent,g=(0,c.t2)(c.t3),c.t4=B,c.next=20,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 20:return c.t5=c.sent,b=(0,c.t4)(c.t5),c.next=24,Promise.all([e.e(0),e.e(1),e.e(2),e.e(8),e.e(9)]).then(e.bind(null,"gdfu"));case 24:return E=c.sent,c.t6=B,c.next=28,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 28:return c.t7=c.sent,i=(0,c.t6)(c.t7),c.next=32,e.e(15).then(e.bind(null,"OH0R"));case 32:return p=c.sent,N={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select1:{title:"\u5355\u9009",type:"string",widget:"select"}}}}},a=function(){var h=(0,i.useForm)(),d=function(){h.setSchemaByPath("obj1.select1",{enum:["east","south","west","north"],enumNames:["\u4E1C","\u5357","\u897F","\u5317"]})},C=function(w,$){$.length>0?g.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify($.map(function(x){return x.name}))):g.default.info(JSON.stringify(w))};return b.default.createElement("div",{style:{width:"400px"}},b.default.createElement(i.default,{form:h,schema:N,onMount:d,onFinish:C}),b.default.createElement(s.default,{type:"primary",onClick:h.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},r=a,c.abrupt("return",r);case 37:case"end":return c.stop()}},P)}));function S(){return j.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:be}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-3"}},"function-demo":{component:Object(I.dynamic)({loader:function(){var j=Object(K.a)(v.a.mark(function P(){var f,s,g,b,E,i,p,o;return v.a.wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return E=function(r,u){if(!u&&r&&r.__esModule)return r;if(r===null||typeof r!="object"&&typeof r!="function")return{default:r};var c=b(u);if(c&&c.has(r))return c.get(r);var t={},h=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in r)if(d!=="default"&&Object.prototype.hasOwnProperty.call(r,d)){var C=h?Object.getOwnPropertyDescriptor(r,d):null;C&&(C.get||C.set)?Object.defineProperty(t,d,C):t[d]=r[d]}return t.default=r,c&&c.set(r,t),t},b=function(r){if(typeof WeakMap!="function")return null;var u=new WeakMap,c=new WeakMap;return(b=function(h){return h?c:u})(r)},f=e("K+nK"),N.t0=f,N.next=6,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 6:return N.t1=N.sent,s=(0,N.t0)(N.t1),N.t2=E,N.next=11,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 11:return N.t3=N.sent,g=(0,N.t2)(N.t3),i={type:"object",properties:{checkbox1:{title:"\u5C55\u793A\u66F4\u591A\u5185\u5BB9",type:"boolean"},select1:{title:"\u8BF7\u5047\u539F\u56E0",type:"string",enum:["a","b","c"],enumNames:["\u75C5\u5047","\u6709\u4E8B","\u5176\u5B83 (\u9700\u6CE8\u660E\u5177\u4F53\u539F\u56E0)"],hidden:"{{formData.checkbox1 !== true}}",widget:"radio"},input1:{title:"\u5177\u4F53\u539F\u56E0",type:"string",format:"textarea",hidden:'{{rootValue.checkbox1 !== true || formData.select1 !== "c"}}'}}},p=function(){var r=(0,g.useForm)();return s.default.createElement(g.default,{form:r,schema:i})},o=p,N.abrupt("return",o);case 17:case"end":return N.stop()}},P)}));function S(){return j.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo1;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo"}},"function-demo-1":{component:Object(I.dynamic)({loader:function(){var j=Object(K.a)(v.a.mark(function P(){var f,s,g,b,E;return v.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return f=e("K+nK"),p.t0=f,p.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return p.t1=p.sent,s=(0,p.t0)(p.t1),p.t2=f,p.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return p.t3=p.sent,g=(0,p.t2)(p.t3),p.next=13,e.e(20).then(e.bind(null,"8iYR"));case 13:return b=p.sent,E=function(){return s.default.createElement(g.default,{schema:b.expression})},p.abrupt("return",E);case 16:case"end":return p.stop()}},P)}));function S(){return j.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { expression } from '../json/schema';

export default () => <FR schema={expression} />;`},"demo/FR.jsx":{import:"../demo/FR",content:ce},"json/schema.js":{import:"../json/schema",content:An}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo-1"}},"lifeCycle-demo":{component:Object(I.dynamic)({loader:function(){var j=Object(K.a)(v.a.mark(function P(){var f,s,g,b,E,i,p,o,B;return v.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return E=function(u,c){if(!c&&u&&u.__esModule)return u;if(u===null||typeof u!="object"&&typeof u!="function")return{default:u};var t=b(c);if(t&&t.has(u))return t.get(u);var h={},d=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var C in u)if(C!=="default"&&Object.prototype.hasOwnProperty.call(u,C)){var R=d?Object.getOwnPropertyDescriptor(u,C):null;R&&(R.get||R.set)?Object.defineProperty(h,C,R):h[C]=u[C]}return h.default=u,t&&t.set(u,h),h},b=function(u){if(typeof WeakMap!="function")return null;var c=new WeakMap,t=new WeakMap;return(b=function(d){return d?t:c})(u)},a.t0=E,a.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return a.t1=a.sent,f=(0,a.t0)(a.t1),a.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(8),e.e(9)]).then(e.bind(null,"gdfu"));case 9:return s=a.sent,a.t2=E,a.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 13:return a.t3=a.sent,g=(0,a.t2)(a.t3),i=function(u){return new Promise(function(c){return setTimeout(c,u)})},p={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u9009\u62E9\u6846",description:"\u52A0\u8F7D\u4E2D...",type:"string",enum:[],widget:"radio"}}},o=function(){var u=(0,g.useForm)(),c=function(){u.setValues({input1:"hello world"}),i(3e3).then(function(h){u.setSchemaByPath("select1",{description:"",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]})})};return f.default.createElement(g.default,{form:u,schema:p,onMount:c})},B=o,a.abrupt("return",B);case 20:case"end":return a.stop()}},P)}));function S(){return j.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.8.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"lifeCycle-demo"}},"listDisplay-demo":{component:Object(I.dynamic)({loader:function(){var j=Object(K.a)(v.a.mark(function P(){var f,s,g,b,E,i;return v.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,s=(0,o.t0)(o.t1),o.t2=f,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,g=(0,o.t2)(o.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},E=function(){return s.default.createElement(g.default,{schema:b})},i=E,o.abrupt("return",i);case 15:case"end":return o.stop()}},P)}));function S(){return j.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Oe}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo"}},"listDisplay-demo-1":{component:Object(I.dynamic)({loader:function(){var j=Object(K.a)(v.a.mark(function P(){var f,s,g,b,E,i;return v.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,s=(0,o.t0)(o.t1),o.t2=f,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,g=(0,o.t2)(o.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"simpleList",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},E=function(){return s.default.createElement(g.default,{schema:b})},i=E,o.abrupt("return",i);case 15:case"end":return o.stop()}},P)}));function S(){return j.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Oe}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-1"}},"listDisplay-demo-2":{component:Object(I.dynamic)({loader:function(){var j=Object(K.a)(v.a.mark(function P(){var f,s,g,b,E,i;return v.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,s=(0,o.t0)(o.t1),o.t2=f,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,g=(0,o.t2)(o.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"tableList",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},E=function(){return s.default.createElement(g.default,{schema:b})},i=E,o.abrupt("return",i);case 15:case"end":return o.stop()}},P)}));function S(){return j.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Oe}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-2"}},"listDisplay-demo-3":{component:Object(I.dynamic)({loader:function(){var j=Object(K.a)(v.a.mark(function P(){var f,s,g,b,E,i;return v.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,s=(0,o.t0)(o.t1),o.t2=f,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,g=(0,o.t2)(o.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"drawerList",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"simpleList",props:{hideMove:!0},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},E=function(){return s.default.createElement(g.default,{schema:b})},i=E,o.abrupt("return",i);case 15:case"end":return o.stop()}},P)}));function S(){return j.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Oe}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-3"}},"listDisplay-demo-4":{component:Object(I.dynamic)({loader:function(){var j=Object(K.a)(v.a.mark(function P(){var f,s,g,b,E,i;return v.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,s=(0,o.t0)(o.t1),o.t2=f,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,g=(0,o.t2)(o.t3),window.hello=function(B){var N=B.value;console.log(N)},b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",type:"array",widget:"tabList",props:{tabName:"\u9879\u76EE"},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},E=function(){return s.default.createElement(g.default,{schema:b})},i=E,o.abrupt("return",i);case 16:case"end":return o.stop()}},P)}));function S(){return j.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Oe}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-4"}},"listDisplay-demo-5":{component:Object(I.dynamic)({loader:function(){var j=Object(K.a)(v.a.mark(function P(){var f,s,g,b,E,i;return v.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,s=(0,o.t0)(o.t1),o.t2=f,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,g=(0,o.t2)(o.t3),b={type:"object",properties:{tabsName1:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"tabList",props:{type:"editable-card",tabName:"\u9879\u76EE"},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName1:{title:"\u5BF9\u8C61\u6570\u7EC4",type:"array",widget:"list1",props:{hideMove:!0},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},E=function(){return s.default.createElement(g.default,{schema:b})},i=E,o.abrupt("return",i);case 15:case"end":return o.stop()}},P)}));function S(){return j.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
export default Demo;`},"demo/display.js":{import:"../demo/display",content:Oe}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-5"}},"listDisplay-demo-6":{component:Object(I.dynamic)({loader:function(){var j=Object(K.a)(v.a.mark(function P(){var f,s,g,b,E,i;return v.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,s=(0,o.t0)(o.t1),o.t2=f,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,g=(0,o.t2)(o.t3),window.hello=function(B){var N=B.value;console.log(N)},b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"virtualList",itemProps:{buttons:[{callback:"hello",text:"\u590D\u5236"}]},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},E=function(){return s.default.createElement(g.default,{schema:b})},i=E,o.abrupt("return",i);case 16:case"end":return o.stop()}},P)}));function S(){return j.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Oe}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-6"}},"mapping-demo":{component:Object(I.dynamic)({loader:function(){var j=Object(K.a)(v.a.mark(function P(){var f,s,g,b,E,i,p,o,B,N,a;return v.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return p=function(t,h){if(!h&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var d=i(h);if(d&&d.has(t))return d.get(t);var C={},R=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var w in t)if(w!=="default"&&Object.prototype.hasOwnProperty.call(t,w)){var $=R?Object.getOwnPropertyDescriptor(t,w):null;$&&($.get||$.set)?Object.defineProperty(C,w,$):C[w]=t[w]}return C.default=t,d&&d.set(t,C),C},i=function(t){if(typeof WeakMap!="function")return null;var h=new WeakMap,d=new WeakMap;return(i=function(R){return R?d:h})(t)},f=e("K+nK"),u.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return u.t0=f,u.next=8,e.e(7).then(e.t.bind(null,"4IMT",7));case 8:return u.t1=u.sent,s=(0,u.t0)(u.t1),u.t2=f,u.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return u.t3=u.sent,g=(0,u.t2)(u.t3),u.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(8),e.e(9)]).then(e.bind(null,"gdfu"));case 17:return b=u.sent,u.t4=p,u.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 21:return u.t5=u.sent,E=(0,u.t4)(u.t5),o=function(t){var h=t.schema;return h.$id==="#"?g.default.createElement("div",null,t.children):g.default.createElement("div",null,"my custom object:",t.children)},B={type:"object",properties:{object2:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u8F93\u5165\u6846",type:"string"}}}},labelWidth:120,displayType:"row"},N=function(){var t=(0,E.useForm)(),h=function(C,R){console.log("formData:",C,"errors",R)};return g.default.createElement("div",null,g.default.createElement(E.default,{form:t,schema:B,onFinish:h,mapping:{object:"CustomComA"},widgets:{CustomComA:o}}),g.default.createElement(s.default,{type:"primary",onClick:t.submit},"\u63D0\u4EA4"))},a=N,u.abrupt("return",a);case 28:case"end":return u.stop()}},P)}));function S(){return j.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},"react-dom":{version:">=16.8.0"}},identifier:"mapping-demo"}},"watch-demo":{component:Object(I.dynamic)({loader:function(){var j=Object(K.a)(v.a.mark(function P(){var f,s,g,b,E,i,p,o;return v.a.wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return E=function(r,u){if(!u&&r&&r.__esModule)return r;if(r===null||typeof r!="object"&&typeof r!="function")return{default:r};var c=b(u);if(c&&c.has(r))return c.get(r);var t={},h=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in r)if(d!=="default"&&Object.prototype.hasOwnProperty.call(r,d)){var C=h?Object.getOwnPropertyDescriptor(r,d):null;C&&(C.get||C.set)?Object.defineProperty(t,d,C):t[d]=r[d]}return t.default=r,c&&c.set(r,t),t},b=function(r){if(typeof WeakMap!="function")return null;var u=new WeakMap,c=new WeakMap;return(b=function(h){return h?c:u})(r)},N.t0=E,N.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return N.t1=N.sent,f=(0,N.t0)(N.t1),N.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(8),e.e(9)]).then(e.bind(null,"gdfu"));case 9:return s=N.sent,N.t2=E,N.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 13:return N.t3=N.sent,g=(0,N.t2)(N.t3),i={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"}}},p=function(){var r=(0,g.useForm)(),u={"#":function(t){console.log("\u8868\u5355\u7684\u65F6\u65F6\u6570\u636E\u4E3A\uFF1A",t)},input1:function(t){r.setValueByPath("input2",t)}};return f.default.createElement(g.default,{form:r,schema:i,watch:u})},o=p,N.abrupt("return",o);case 19:case"end":return N.stop()}},P)}));function S(){return j.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.8.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo"}},"watch-demo-1":{component:Object(I.dynamic)({loader:function(){var j=Object(K.a)(v.a.mark(function P(){var f,s,g,b,E,i,p,o,B,N;return v.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return p=function(c,t){if(!t&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var h=i(t);if(h&&h.has(c))return h.get(c);var d={},C=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var R in c)if(R!=="default"&&Object.prototype.hasOwnProperty.call(c,R)){var w=C?Object.getOwnPropertyDescriptor(c,R):null;w&&(w.get||w.set)?Object.defineProperty(d,R,w):d[R]=c[R]}return d.default=c,h&&h.set(c,d),d},i=function(c){if(typeof WeakMap!="function")return null;var t=new WeakMap,h=new WeakMap;return(i=function(C){return C?h:t})(c)},f=e("K+nK"),r.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return r.t0=f,r.next=8,e.e(7).then(e.t.bind(null,"4IMT",7));case 8:return r.t1=r.sent,s=(0,r.t0)(r.t1),r.t2=p,r.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return r.t3=r.sent,g=(0,r.t2)(r.t3),r.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(8),e.e(9)]).then(e.bind(null,"gdfu"));case 17:return b=r.sent,r.t4=p,r.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 21:return r.t5=r.sent,E=(0,r.t4)(r.t5),o={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"radio"}}}}},B=function(){var c=(0,E.useForm)(),t=function(C,R){R.length>0?alert("errorFields:"+JSON.stringify(R)):alert("formData:"+JSON.stringify(C,null,2))},h={input1:function(C){C&&C.length>2?c.setSchemaByPath("obj1.select",function(R){var w=R.enumNames;return{enumNames:w.map(function($){return $+"a"})}}):c.setSchemaByPath("obj1.select",{enumNames:["\u65E9","\u4E2D","\u665A"]})}};return g.default.createElement("div",null,g.default.createElement(E.default,{form:c,schema:o,onFinish:t,watch:h}),g.default.createElement(s.default,{type:"",style:{marginRight:8},onClick:function(){return c.setSchemaByPath("input2",{title:"\u7F16\u8F91\u6846",format:"textarea"})}},"\u5C06 input \u6539\u4E3A textarea"),g.default.createElement(s.default,{type:"primary",onClick:c.submit},"\u63D0\u4EA4"))},N=B,r.abrupt("return",N);case 27:case"end":return r.stop()}},P)}));function S(){return j.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo-1"}},"widget-demo":{component:Object(I.dynamic)({loader:function(){var j=Object(K.a)(v.a.mark(function P(){var f,s,g,b,E,i,p,o,B,N,a,r,u;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return B=function(d,C){if(!C&&d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var R=o(C);if(R&&R.has(d))return R.get(d);var w={},$=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var x in d)if(x!=="default"&&Object.prototype.hasOwnProperty.call(d,x)){var k=$?Object.getOwnPropertyDescriptor(d,x):null;k&&(k.get||k.set)?Object.defineProperty(w,x,k):w[x]=d[x]}return w.default=d,R&&R.set(d,w),w},o=function(d){if(typeof WeakMap!="function")return null;var C=new WeakMap,R=new WeakMap;return(o=function($){return $?R:C})(d)},f=e("K+nK"),t.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return t.t0=f,t.next=8,e.e(7).then(e.t.bind(null,"4IMT",7));case 8:return t.t1=t.sent,s=(0,t.t0)(t.t1),t.next=12,Promise.all([e.e(3),e.e(18)]).then(e.t.bind(null,"cUip",7));case 12:return t.t2=f,t.next=15,Promise.all([e.e(0),e.e(7),e.e(17),e.e(19)]).then(e.t.bind(null,"iJl9",7));case 15:return t.t3=t.sent,g=(0,t.t2)(t.t3),t.t4=f,t.next=20,e.e(87).then(e.bind(null,"0Owb"));case 20:return t.t5=t.sent,b=(0,t.t4)(t.t5),t.t6=f,t.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return t.t7=t.sent,E=(0,t.t6)(t.t7),t.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(8),e.e(9)]).then(e.bind(null,"gdfu"));case 29:return i=t.sent,t.t8=B,t.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 33:return t.t9=t.sent,p=(0,t.t8)(t.t9),N={type:"object",properties:{string:{title:"\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6",type:"string",widget:"site"},select:{title:"\u5355\u9009",type:"number",enum:[1,2,3],enumNames:["\u9009\u98791","\u9009\u98792","\u9009\u98793"]}}},a=function(d){return console.log("widget props:",d),E.default.createElement(g.default,(0,b.default)({addonBefore:"https://",addonAfter:".com"},d))},r=function(){var d=(0,p.useForm)();return E.default.createElement("div",null,E.default.createElement(p.default,{form:d,schema:N,widgets:{site:a},onFinish:function(R){return alert(JSON.stringify(R,null,2))}}),E.default.createElement(s.default,{type:"primary",onClick:d.submit},"\u63D0\u4EA4"))},u=r,t.abrupt("return",u);case 40:case"end":return t.stop()}},P)}));function S(){return j.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},"react-dom":{version:">=16.8.0"}},identifier:"widget-demo"}},"form-render-dependencies":{component:Object(I.dynamic)({loader:function(){var j=Object(K.a)(v.a.mark(function P(){return v.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(25)]).then(e.bind(null,"ODQR"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},P)}));function S(){return j.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:Ce}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-dependencies"}},"form-render-listexpression":{component:Object(I.dynamic)({loader:function(){var j=Object(K.a)(v.a.mark(function P(){return v.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(25)]).then(e.bind(null,"5OWw"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},P)}));function S(){return j.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:en}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-listexpression"}},"form-render-doublebind":{component:Object(I.dynamic)({loader:function(){var j=Object(K.a)(v.a.mark(function P(){return v.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(25)]).then(e.bind(null,"Xjjr"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},P)}));function S(){return j.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:Bn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-doublebind"}},"form-render-rightpath":{component:Object(I.dynamic)({loader:function(){var j=Object(K.a)(v.a.mark(function P(){return v.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(25)]).then(e.bind(null,"bD0a"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},P)}));function S(){return j.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:bn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-rightpath"}},"form-render-custommessage":{component:Object(I.dynamic)({loader:function(){var j=Object(K.a)(v.a.mark(function P(){return v.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(25)]).then(e.bind(null,"yBrT"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},P)}));function S(){return j.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:un}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-custommessage"}},"measure-demo":{component:Object(I.dynamic)({loader:function(){var j=Object(K.a)(v.a.mark(function P(){var f,s,g,b,E,i,p,o,B,N;return v.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return o=function(c,t){if(!t&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var h=p(t);if(h&&h.has(c))return h.get(c);var d={},C=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var R in c)if(R!=="default"&&Object.prototype.hasOwnProperty.call(c,R)){var w=C?Object.getOwnPropertyDescriptor(c,R):null;w&&(w.get||w.set)?Object.defineProperty(d,R,w):d[R]=c[R]}return d.default=c,h&&h.set(c,d),d},p=function(c){if(typeof WeakMap!="function")return null;var t=new WeakMap,h=new WeakMap;return(p=function(C){return C?h:t})(c)},f=e("K+nK"),r.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return r.t0=f,r.next=8,e.e(7).then(e.t.bind(null,"4IMT",7));case 8:return r.t1=r.sent,s=(0,r.t0)(r.t1),r.next=12,e.e(14).then(e.t.bind(null,"tL+A",7));case 12:return r.t2=f,r.next=15,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 15:return r.t3=r.sent,g=(0,r.t2)(r.t3),r.t4=o,r.next=20,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 20:return r.t5=r.sent,b=(0,r.t4)(r.t5),r.next=24,Promise.all([e.e(0),e.e(1),e.e(2),e.e(8),e.e(9)]).then(e.bind(null,"gdfu"));case 24:return E=r.sent,r.t6=o,r.next=28,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 28:return r.t7=r.sent,i=(0,r.t6)(r.t7),B=function(){var c=(0,i.useForm)({logOnMount:function(C){console.log("onMount",C)},logOnSubmit:function(C){console.log("onSubmit",C)}}),t={type:"object",properties:{input1:{title:"\u8F93\u5165\u6846",required:!0,type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u5DE6","\u4E2D","\u53F3"],widget:"radio"}}},h=function(C,R){R.length>0?g.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(R.map(function(w){return w.name}))):g.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")};return b.default.createElement("div",null,b.default.createElement(i.default,{id:"my-demo-form",form:c,schema:t,onFinish:h}),b.default.createElement(s.default,{type:"primary",onClick:c.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},N=B,r.abrupt("return",N);case 33:case"end":return r.stop()}},P)}));function S(){return j.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"measure-demo"}},"migrate-demo":{component:Object(I.dynamic)({loader:function(){var j=Object(K.a)(v.a.mark(function P(){var f,s,g,b,E,i,p,o;return v.a.wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return p=function(){var r=(0,g.useForm)(),u=function(t,h){h.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(h))):alert(JSON.stringify(t))};return s.default.createElement("div",null,s.default.createElement(g.default,{form:r,schema:i,onFinish:u}),s.default.createElement("button",{onClick:r.submit},"\u63D0\u4EA4"))},E=function(r,u){if(!u&&r&&r.__esModule)return r;if(r===null||typeof r!="object"&&typeof r!="function")return{default:r};var c=b(u);if(c&&c.has(r))return c.get(r);var t={},h=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in r)if(d!=="default"&&Object.prototype.hasOwnProperty.call(r,d)){var C=h?Object.getOwnPropertyDescriptor(r,d):null;C&&(C.get||C.set)?Object.defineProperty(t,d,C):t[d]=r[d]}return t.default=r,c&&c.set(r,t),t},b=function(r){if(typeof WeakMap!="function")return null;var u=new WeakMap,c=new WeakMap;return(b=function(h){return h?c:u})(r)},f=e("K+nK"),N.t0=f,N.next=7,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 7:return N.t1=N.sent,s=(0,N.t0)(N.t1),N.t2=E,N.next=12,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 12:return N.t3=N.sent,g=(0,N.t2)(N.t3),i={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}},o=p,N.abrupt("return",o);case 17:case"end":return N.stop()}},P)}));function S(){return j.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate-demo"}},"migrate-demo-1":{component:Object(I.dynamic)({loader:function(){var j=Object(K.a)(v.a.mark(function P(){var f,s,g,b,E,i,p,o,B,N,a,r,u;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return B=function(d,C){if(!C&&d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var R=o(C);if(R&&R.has(d))return R.get(d);var w={},$=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var x in d)if(x!=="default"&&Object.prototype.hasOwnProperty.call(d,x)){var k=$?Object.getOwnPropertyDescriptor(d,x):null;k&&(k.get||k.set)?Object.defineProperty(w,x,k):w[x]=d[x]}return w.default=d,R&&R.set(d,w),w},o=function(d){if(typeof WeakMap!="function")return null;var C=new WeakMap,R=new WeakMap;return(o=function($){return $?R:C})(d)},f=e("K+nK"),t.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return t.t0=f,t.next=8,e.e(7).then(e.t.bind(null,"4IMT",7));case 8:return t.t1=t.sent,s=(0,t.t0)(t.t1),t.t2=f,t.next=13,Promise.resolve().then(e.bind(null,"tJVT"));case 13:return t.t3=t.sent,g=(0,t.t2)(t.t3),t.next=17,Promise.all([e.e(3),e.e(18)]).then(e.t.bind(null,"cUip",7));case 17:return t.t4=f,t.next=20,Promise.all([e.e(0),e.e(7),e.e(17),e.e(19)]).then(e.t.bind(null,"iJl9",7));case 20:return t.t5=t.sent,b=(0,t.t4)(t.t5),t.t6=B,t.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return t.t7=t.sent,E=(0,t.t6)(t.t7),t.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(8),e.e(9)]).then(e.bind(null,"gdfu"));case 29:return i=t.sent,t.next=32,e.e(84).then(e.bind(null,"7t+U"));case 32:return p=t.sent,N=b.default.TextArea,a={type:"object",properties:{number:{title:"\u6570\u5B57\u8F93\u5165\u6846",type:"number","ui:disabled":!0},checkbox:{title:"\u662F\u5426\u9009\u62E9",type:"boolean","ui:widget":"switch"}},required:["number"]},r=function(){var d=(0,E.useState)(JSON.stringify(a)),C=(0,g.default)(d,2),R=C[0],w=C[1],$=(0,E.useState)({}),x=(0,g.default)($,2),k=x[0],Le=x[1],Ue=function(){try{var Cn=(0,p.updateSchemaToNewVersion)(JSON.parse(R));Le(Cn)}catch(ut){console.log(ut)}},sn=function(Cn){w(Cn.target.value)},nn=function(){w(JSON.stringify(JSON.parse(R),null,2))};return E.default.createElement("div",null,E.default.createElement("div",null,"\u586B\u5165\u65E7\u7248schema\uFF1A"),E.default.createElement(N,{style:{minHeight:400,marginTop:12,marginBottom:12},value:R,onChange:sn}),E.default.createElement(s.default,{style:{marginRight:12},onClick:nn},"\u683C\u5F0F\u5316\u65E7schema"),E.default.createElement(s.default,{type:"primary",onClick:Ue},"\u751F\u6210\u65B0\u7248schema"),E.default.createElement(N,{style:{minHeight:400,marginTop:12},value:JSON.stringify(k,null,2)}))},u=r,t.abrupt("return",u);case 38:case"end":return t.stop()}},P)}));function S(){return j.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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

export default Translator;`},"packages/form-render/src/utils.js":{import:"../../../packages/form-render/src/utils.js",content:$e}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"}},identifier:"migrate-demo-1"}},"migrate2-demo":{component:Object(I.dynamic)({loader:function(){var j=Object(K.a)(v.a.mark(function P(){var f,s,g,b,E,i,p,o,B;return v.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return o=function(){var u=(0,g.useState)({}),c=(0,s.default)(u,2),t=c[0],h=c[1],d=(0,g.useState)([]),C=(0,s.default)(d,2),R=C[0],w=C[1],$=(0,g.useState)(!1),x=(0,s.default)($,2),k=x[0],Le=x[1],Ue=(0,b.useForm)({formData:t,onChange:h,onValidate:w,showValidate:k});(0,g.useEffect)(function(){Ue.init()},[]);var sn=function(){Le(!0),R.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(R))):alert(JSON.stringify(t))};return g.default.createElement("div",null,g.default.createElement(b.default,{form:Ue,schema:p}),g.default.createElement("button",{onClick:sn},"\u63D0\u4EA4"))},i=function(u,c){if(!c&&u&&u.__esModule)return u;if(u===null||typeof u!="object"&&typeof u!="function")return{default:u};var t=E(c);if(t&&t.has(u))return t.get(u);var h={},d=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var C in u)if(C!=="default"&&Object.prototype.hasOwnProperty.call(u,C)){var R=d?Object.getOwnPropertyDescriptor(u,C):null;R&&(R.get||R.set)?Object.defineProperty(h,C,R):h[C]=u[C]}return h.default=u,t&&t.set(u,h),h},E=function(u){if(typeof WeakMap!="function")return null;var c=new WeakMap,t=new WeakMap;return(E=function(d){return d?t:c})(u)},f=e("K+nK"),a.t0=f,a.next=7,Promise.resolve().then(e.bind(null,"tJVT"));case 7:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.t2=i,a.next=12,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 12:return a.t3=a.sent,g=(0,a.t2)(a.t3),a.t4=i,a.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 17:return a.t5=a.sent,b=(0,a.t4)(a.t5),p={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}},B=o,a.abrupt("return",B);case 22:case"end":return a.stop()}},P)}));function S(){return j.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
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
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate2-demo"}},"schema-demo":{component:Object(I.dynamic)({loader:function(){var j=Object(K.a)(v.a.mark(function P(){var f,s,g,b,E;return v.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return f=e("K+nK"),p.t0=f,p.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return p.t1=p.sent,s=(0,p.t0)(p.t1),p.t2=f,p.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return p.t3=p.sent,g=(0,p.t2)(p.t3),p.next=13,e.e(20).then(e.bind(null,"8iYR"));case 13:return b=p.sent,E=function(){return s.default.createElement(g.default,{schema:b.basic})},p.abrupt("return",E);case 16:case"end":return p.stop()}},P)}));function S(){return j.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { basic } from '../json/schema';

export default () => <FR schema={basic} />;`},"demo/FR.jsx":{import:"../demo/FR",content:ce},"json/schema.js":{import:"../json/schema",content:An}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo"}},"schema-demo-1":{component:Object(I.dynamic)({loader:function(){var j=Object(K.a)(v.a.mark(function P(){var f,s,g,b,E;return v.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return f=e("K+nK"),p.t0=f,p.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return p.t1=p.sent,s=(0,p.t0)(p.t1),p.t2=f,p.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return p.t3=p.sent,g=(0,p.t2)(p.t3),p.next=13,e.e(20).then(e.bind(null,"8iYR"));case 13:return b=p.sent,E=function(){return s.default.createElement(g.default,{schema:b.titleTrick})},p.abrupt("return",E);case 16:case"end":return p.stop()}},P)}));function S(){return j.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { titleTrick } from '../json/schema';

export default () => <FR schema={titleTrick} />;`},"demo/FR.jsx":{import:"../demo/FR",content:ce},"json/schema.js":{import:"../json/schema",content:An}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo-1"}},"docs-playground":{component:Object(I.dynamic)({loader:function(){var j=Object(K.a)(v.a.mark(function P(){return v.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(25)]).then(e.bind(null,"BASV"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},P)}));function S(){return j.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:Mn},"main.js":{import:"./main",content:Tn},"json/simplest.json":{import:"./json/simplest.json",content:En},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:Ae},"monaco/index.js":{import:"./monaco",content:rt},"theme.css":{import:"./theme.css",content:Kn},"index.css":{import:"./index.css",content:at}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:"^16.0.0"},"react-dom":{version:"^16.0.0"},"deep-equal":{version:"2.0.5"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.8.1"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-simple-code-editor":{version:"0.11.0"},prismjs:{version:"1.23.0"}},identifier:"docs-playground"}},"docs-playground1":{component:Object(I.dynamic)({loader:function(){var j=Object(K.a)(v.a.mark(function P(){return v.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(25)]).then(e.bind(null,"Wrpt"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},P)}));function S(){return j.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:pt},"main.js":{import:"./main",content:st},"json/simplest.json":{import:"./json/simplest.json",content:ft},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:Wn},"monaco/index.js":{import:"./monaco",content:it},"suggestionsMap.js":{import:"./suggestionsMap",content:zn},"index.css":{import:"./index.css",content:ht}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:"^17.x"},"react-dom":{version:">=16.9.0"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.8.1"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-monaco-editor":{version:"0.44.0"},"@types/react":{version:"^17.x"}},identifier:"docs-playground1"}},"table-render-advanced":{component:Object(I.dynamic)({loader:function(){var j=Object(K.a)(v.a.mark(function P(){return v.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(25)]).then(e.bind(null,"7ZP+"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},P)}));function S(){return j.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{tsx:Ln}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.5"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!0,identifier:"table-render-advanced"}},"table-render-nosearch":{component:Object(I.dynamic)({loader:function(){var j=Object(K.a)(v.a.mark(function P(){return v.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(25)]).then(e.bind(null,"CfUQ"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},P)}));function S(){return j.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{tsx:xn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.5"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!0,identifier:"table-render-nosearch"}},"table-render-notitle":{component:Object(I.dynamic)({loader:function(){var j=Object(K.a)(v.a.mark(function P(){return v.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(25)]).then(e.bind(null,"/usH"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},P)}));function S(){return j.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{tsx:Un}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.5"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!0,identifier:"table-render-notitle"}},"table-render-paramtable":{component:Object(I.dynamic)({loader:function(){var j=Object(K.a)(v.a.mark(function P(){return v.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(25)]).then(e.bind(null,"48jF"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},P)}));function S(){return j.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{tsx:ot}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.5"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},umi:{version:"3.4.19"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!0,identifier:"table-render-paramtable"}},"table-render-demo":{component:Object(I.dynamic)({loader:function(){var j=Object(K.a)(v.a.mark(function P(){var f,s,g,b,E,i,p,o,B;return v.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return f=e("K+nK"),a.t0=f,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(74)]).then(e.bind(null,"P2DI"));case 8:for(g=a.sent,b=[],E=0;E<6;E++)b.push({id:E.toString(),title:"\u6807\u9898".concat(E+1),created_at:new Date().getTime()});return i={type:"object",properties:{title:{title:"\u6807\u9898",type:"string",width:"30%"},created_at:{title:"\u521B\u5EFA\u65F6\u95F4",type:"string",format:"date",width:"30%"}}},p=[{title:"\u6807\u9898",dataIndex:"title"},{title:"\u521B\u5EFA\u65F6\u95F4",key:"since",dataIndex:"created_at",valueType:"date"},{title:"\u64CD\u4F5C",render:function(u,c){return s.default.createElement("a",{onClick:function(){return alert(u.title)}},"\u7F16\u8F91")}}],o=function(){var u=function(){return{rows:b,total:b.length}};return s.default.createElement(s.default.Fragment,null,s.default.createElement(g.Search,{schema:i,api:u}),s.default.createElement(g.Table,{headerTitle:"\u6700\u7B80\u8868\u683C",columns:p,rowKey:"id"}))},B=(0,g.withTable)(o),a.abrupt("return",B);case 16:case"end":return a.stop()}},P)}));function S(){return j.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default withTable(Wrapper);`}},dependencies:{react:{version:">=16.8.0"},"table-render":{version:"1.1.5"},antd:{version:"4.x",css:"antd/dist/antd.css"}},transform:!0,defaultShowCode:!0,identifier:"table-render-demo"}},"table-render-test1":{component:Object(I.dynamic)({loader:function(){var j=Object(K.a)(v.a.mark(function P(){return v.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(25)]).then(e.bind(null,"aMwh"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},P)}));function S(){return j.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:$n}},dependencies:{react:{version:">=16.8.0"},"table-render":{version:"1.1.5"},antd:{version:"4.x",css:"antd/dist/antd.css"}},identifier:"table-render-test1"}},"generator-demo":{component:Object(I.dynamic)({loader:function(){var j=Object(K.a)(v.a.mark(function P(){var f,s,g,b,E,i;return v.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,s=(0,o.t0)(o.t1),o.t2=f,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(75)]).then(e.bind(null,"nYSz"));case 9:return o.t3=o.sent,g=(0,o.t2)(o.t3),b={type:"object",properties:{inputName:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string"}}},E=function(){return s.default.createElement("div",{style:{height:"80vh"}},s.default.createElement(g.default,{defaultValue:b}))},i=E,o.abrupt("return",i);case 15:case"end":return o.stop()}},P)}));function S(){return j.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.14.0"},"fr-generator":{version:"2.5.8"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.14.0"}},transform:!0,defaultShowCode:!0,identifier:"generator-demo"}},"generator-modal":{component:Object(I.dynamic)({loader:function(){var j=Object(K.a)(v.a.mark(function P(){return v.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(25)]).then(e.bind(null,"PPgD"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},P)}));function S(){return j.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:lt}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.5.8"},"react-dom":{version:">=16.9.0"}},identifier:"generator-modal"}},"generator-settings":{component:Object(I.dynamic)({loader:function(){var j=Object(K.a)(v.a.mark(function P(){return v.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(25)]).then(e.bind(null,"M63W"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},P)}));function S(){return j.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:fn}},dependencies:{react:{version:">=16.14.0"},"fr-generator":{version:"2.5.8"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.14.0"}},identifier:"generator-settings"}},"generator-layout":{component:Object(I.dynamic)({loader:function(){var j=Object(K.a)(v.a.mark(function P(){return v.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(25)]).then(e.bind(null,"SOdT"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},P)}));function S(){return j.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:Yn},"index.less":{import:"./index.less",content:Hn}},dependencies:{react:{version:">=16.14.0"},"fr-generator":{version:"2.5.8"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.14.0"}},identifier:"generator-layout"}},"generator-transformer":{component:Object(I.dynamic)({loader:function(){var j=Object(K.a)(v.a.mark(function P(){return v.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(25)]).then(e.bind(null,"jktF"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},P)}));function S(){return j.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:dn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.5.8"},"react-dom":{version:">=16.9.0"}},identifier:"generator-transformer"}},"generator-playground":{component:Object(I.dynamic)({loader:function(){var j=Object(K.a)(v.a.mark(function P(){return v.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(25)]).then(e.bind(null,"TYW4"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},P)}));function S(){return j.apply(this,arguments)}return S}()}),previewerProps:{sources:{_:{jsx:vt},"index.less":{import:"./index.less",content:Hn}},dependencies:{react:{version:">=16.14.0"},umi:{version:"3.4.19"},"fr-generator":{version:"2.5.8"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.14.0"}},identifier:"generator-playground"}}}},TIsu:function(pn,_e,e){},"TN5+":function(pn,_e,e){"use strict";var K=e("0Owb"),n=e("q1tI"),v=e.n(n),I=e("kERV"),oe=e.n(I);_e.a=V=>v.a.createElement("div",Object(K.default)({className:"__dumi-default-alert"},V))},Zs1V:function(pn){pn.exports=JSON.parse("{}")},kERV:function(pn,_e,e){},p8sG:function(pn,_e,e){"use strict";pn.exports=e("80pN")},"unS/":function(pn,_e,e){"use strict";e.r(_e);var K=e("q1tI"),n=e.n(K),v=e("dEAq"),I=e.n(v),oe=e("TN5+"),V=e("0zqC"),Oe=e("ZpkN"),be=e("JjdP"),ce=n.a.memo(be.default["form-render-demo"].component),An=n.a.memo(be.default["form-render-demo-1"].component),Ce=n.a.memo(be.default["form-render-demo-2"].component);_e.default=en=>(n.a.useEffect(()=>{en!=null&&en.location.hash&&v.AnchorLink.scrollToAnchor(decodeURIComponent(en.location.hash.slice(1)))},[]),n.a.createElement(n.a.Fragment,null,n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"markdown"},n.a.createElement("div",{style:{display:"flex",alignItems:"center",marginBottom:"24px"}},n.a.createElement("img",{src:"https://img.alicdn.com/tfs/TB17UtINiLaK1RjSZFxXXamPFXa-606-643.png",alt:"logo",width:"48px"}),n.a.createElement("span",{style:{fontSize:"30px",fontWeight:"600",display:"inline-block",marginLeft:"12px"}},"FormRender")),n.a.createElement("p",{style:{display:"flex",justifyContent:"space-between",width:"440px"}},n.a.createElement(v.Link,{to:"https://www.npmjs.com/package/form-render?_blank"},n.a.createElement("img",{alt:"npm",src:"https://img.shields.io/npm/v/form-render.svg?maxAge=3600&style=flat-square"})),n.a.createElement(v.Link,{to:"https://npmjs.org/package/form-render"},n.a.createElement("img",{alt:"NPM downloads",src:"https://img.shields.io/npm/dm/form-render.svg?style=flat-square"})),n.a.createElement(v.Link,{to:"https://npmjs.org/package/form-render"},n.a.createElement("img",{alt:"NPM all downloads",src:"https://img.shields.io/npm/dt/form-render.svg?style=flat-square"})),n.a.createElement("a",null,n.a.createElement("img",{alt:"PRs Welcome",src:"https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square"}))),n.a.createElement("blockquote",null,n.a.createElement("p",null,"\u4E00\u7AD9\u5F0F\u4E2D\u540E\u53F0",n.a.createElement("strong",null,"\u8868\u5355\u89E3\u51B3\u65B9\u6848"))),n.a.createElement("p",null,"FormRender 1.0 \u662F\u4E0B\u4E00\u4EE3\u7684 ",n.a.createElement("code",null,"React.js")," \u8868\u5355\u89E3\u51B3\u65B9\u6848\u3002\u9879\u76EE\u4ECE\u5185\u6838\u7EA7\u522B\u8FDB\u884C\u4E86\u91CD\u5199\uFF0C\u4E3A\u4E86\u80FD\u5207\u5B9E\u627F\u63A5\u65E5\u76CA\u590D\u6742\u7684\u8868\u5355\u573A\u666F\u9700\u6C42\u3002\u6211\u4EEC\u7684\u76EE\u6807\u662F\u4EE5\u5F3A\u5927\u7684\u6269\u5C55\u80FD\u529B\u5BF9\u8868\u5355\u573A\u666F 100%\u7684\u8986\u76D6\u652F\u6301\uFF0C\u540C\u65F6\u4FDD\u6301\u5F00\u53D1\u8005\u80FD\u5FEB\u901F\u4E0A\u624B\uFF0C\u5E76\u4EE5\u8868\u5355\u7F16\u8F91\u5668\u3001\u63D2\u4EF6\u3001\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7B49\u4E00\u7CFB\u5217\u5468\u8FB9\u4EA7\u54C1\u5E26\u6765\u6781\u81F4\u7684\u5F00\u53D1\u4F53\u9A8C\u3002\u5728\u5F00\u53D1 1.0 \u7684\u9053\u8DEF\u4E0A\uFF0C\u6211\u4EEC\u505A\u4E86\u4E00\u7CFB\u5217\u7684\u53D6\u820D\uFF0C\u8BE6\u89C1",n.a.createElement(v.Link,{to:"/form-render/migrate"},"0.x - 1.0 \u8FC1\u79FB\u6587\u6863")),n.a.createElement(oe.a,null,n.a.createElement("span",null,"FormRender \u5DF2\u5347\u7EA7\u5230 v1.x \u7248\u672C\uFF0C\u5E76\u5BF9\u5916\u63D0\u4F9B\u4E2D\u540E\u53F0\u5F00\u7BB1\u5373\u7528 XRender \u8868\u5355 / \u8868\u683C / \u56FE\u8868\u65B9\u6848\uFF0C\u5982\u9700\u4F7F\u7528\u8001\u7248\u672C(v0.x)\uFF0C\u8BF7\u70B9\u51FB\u53F3\u4E0A\u89D2 ",n.a.createElement(v.Link,{to:"http://x-components.gitee.io/form-render/",target:"_blank_"}," \u65E7\u6587\u6863 "))),n.a.createElement("h2",{id:"\u5B89\u88C5"},n.a.createElement(v.AnchorLink,{to:"#\u5B89\u88C5","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u5B89\u88C5"),n.a.createElement("p",null,"FormRender \u4F9D\u8D56 ant design\uFF0C\u5355\u72EC\u4F7F\u7528\u4E0D\u8981\u5FD8\u8BB0\u540C\u65F6\u5B89\u88C5 ",n.a.createElement("code",null,"antd")),n.a.createElement(Oe.a,{code:"npm i form-render --save",lang:"shell"}),n.a.createElement("h2",{id:"\u4F7F\u7528"},n.a.createElement(v.AnchorLink,{to:"#\u4F7F\u7528","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u4F7F\u7528"),n.a.createElement("p",null,n.a.createElement("strong",null,"\u6700\u7B80\u4F7F\u7528 demo\uFF1A"))),n.a.createElement(V.default,be.default["form-render-demo"].previewerProps,n.a.createElement(ce,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("p",null,"\u5BF9\u4E8E\u4F7F\u7528\u7C7B\u7EC4\u4EF6\u7684\u540C\u5B66\uFF0C\u53EF\u4EE5\u4F7F\u7528 ",n.a.createElement("code",null,"connectForm")," \u66FF\u4EE3 ",n.a.createElement("code",null,"useForm")," hooks\uFF1A")),n.a.createElement(V.default,be.default["form-render-demo-1"].previewerProps,n.a.createElement(An,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("p",null,n.a.createElement("strong",null,"\u6362\u4E00\u4E2A\u66F4\u590D\u6742\u4E00\u70B9\u7684 schema\uFF0CFR \u652F\u6301\u6570\u636E\u7ED1\u5B9A\u3001antd \u7684 props \u900F\u4F20\u3001\u8868\u5355\u8054\u52A8\u7B49\u4E00\u7CFB\u5217\u529F\u80FD\uFF1A"))),n.a.createElement(V.default,be.default["form-render-demo-2"].previewerProps,n.a.createElement(Ce,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("p",null,n.a.createElement("strong",null,"\u4ECE demo \u4E2D\u6211\u4EEC\u4E0D\u96BE\u53D1\u73B0 FormRender \u7684\u4E00\u4E9B\u8BBE\u8BA1\uFF1A")),n.a.createElement("ol",null,n.a.createElement("li",null,"\u4EE5 schema \u6765\u63CF\u8FF0\u8868\u5355\u5C55\u793A\uFF0C\u63D0\u4EA4\u65B9\u5F0F\u4E0E antd v4 \u7684\u65B9\u5F0F\u7C7B\u4F3C"),n.a.createElement("li",null,"schema \u4EE5\u56FD\u9645\u6807\u51C6\u7684 JSON schema \u4E3A\u57FA\u7840\uFF0C\u540C\u65F6\u80FD\u591F\u65B9\u4FBF\u4F7F\u7528\u4EFB\u4F55 antd \u7684 props"),n.a.createElement("li",null,"\u901A\u8FC7 bind \u5B57\u6BB5\uFF0C\u6211\u4EEC\u5141\u8BB8\u6570\u636E\u7684\u53CC\u5411\u7ED1\u5B9A\uFF0C\u6570\u636E\u5C55\u793A\u548C\u771F\u5B9E\u63D0\u4EA4\u7684\u6570\u636E\u53EF\u4EE5\u6839\u636E\u5F00\u53D1\u9700\u6C42\u4E0D\u540C\uFF08\u4F8B\u5982\u4ECE\u670D\u52A1\u7AEF\u63A5\u53E3\u62FF\u5230\u4E0D\u89C4\u5219\u6570\u636E\u65F6\uFF0C\u4E5F\u80FD\u76F4\u63A5\u4F7F\u7528\uFF09"),n.a.createElement("li",null,'\u4F7F\u7528"',"{","{","...","}","}",'"\u4E66\u5199\u8868\u8FBE\u5F0F\u6765\u5B8C\u6210\u7B80\u5355\u7684\u8054\u52A8\uFF0C\u503C\u5F97\u4E00\u63D0\u7684\u662F\uFF0C\u8FD9\u91CC\u8868\u8FBE\u5F0F\u652F\u6301\u6240\u6709 js \u8BED\u6CD5\u3002FR \u8FD8\u63D0\u4F9B\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u3001dependencies \u58F0\u660E\u3001watch \u7B49\u5DE5\u5177\u7528\u4E8E\u66F4\u52A0\u590D\u6742\u7684\u5B9A\u5236'),n.a.createElement("li",null,"\u53EF\u4EE5\u901A\u8FC7",n.a.createElement("code",null,"displayType"),",",n.a.createElement("code",null,"labelWidth"),"\u7B49\u5B57\u6BB5\u8F7B\u6613\u4FEE\u6539\u5C55\u793A")),n.a.createElement("h2",{id:"\u9AD8\u7EA7\u7528\u6CD5"},n.a.createElement(v.AnchorLink,{to:"#\u9AD8\u7EA7\u7528\u6CD5","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u9AD8\u7EA7\u7528\u6CD5"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement(v.Link,{to:"/form-render/advanced/function"},"\u5982\u4F55\u5199\u8868\u5355\u95F4\u7684\u7B80\u5355\u8054\u52A8\u5173\u7CFB\uFF1F"))),n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement(v.Link,{to:"/form-render/advanced/watch"},"\u5982\u4F55\u901A\u8FC7\u76D1\u542C\u5B9E\u73B0\u590D\u6742\u8054\u52A8\uFF1F"))),n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement(v.Link,{to:"/form-render/advanced/widget"},"\u5982\u4F55\u7528\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u5B8C\u6210\u5B9A\u5236\u5143\u7D20\u7684\u5C55\u793A\uFF1F"))),n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement(v.Link,{to:"/form-render/advanced/form-methods"},"\u5982\u4F55\u5199\u4E00\u4E2A\u5B8C\u6574\u7684\u670D\u52A1\u7AEF\u6570\u636E\u8868\u5355\u52A0\u8F7D\u548C\u63D0\u4EA4\uFF1F"))),n.a.createElement("li",null,n.a.createElement("p",null,"\u60F3\u8981\u4E00\u4E2A\u591A\u9009\u7EC4\u4EF6\uFF0C\u8BE5\u600E\u4E48\u5199\u5B83\u7684 schema\uFF1F"),n.a.createElement("p",null,"\u5F88\u591A\u540C\u5B66\u9605\u8BFB schema \u6587\u6863\u7684\u76EE\u7684\u53EA\u662F\u5982\u6B64\uFF0C\u5EFA\u8BAE\u6253\u5F00 ",n.a.createElement(v.Link,{to:"/playground"},"playground"),", \u70B9\u51FB\u201C\u57FA\u7840\u63A7\u4EF6\u201D\u3002\u8FD9\u91CC\u6709\u6240\u6709 FormRender \u652F\u6301\u7684\u5C55\u793A\u4EE5\u53CA\u5BF9\u4E8E\u7684 schema")),n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement(v.Link,{to:"/form-render/faq"},"\u5176\u4ED6\u5E38\u89C1\u95EE\u9898 FAQ")))),n.a.createElement("h2",{id:"\u7EC4\u4EF6-props"},n.a.createElement(v.AnchorLink,{to:"#\u7EC4\u4EF6-props","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u7EC4\u4EF6 Props"),n.a.createElement(Oe.a,{code:"import Form, { useForm, connectForm } from 'form-render';",lang:"js"}),n.a.createElement("h3",{id:"form--\u5E38\u7528-props"},n.a.createElement(v.AnchorLink,{to:"#form--\u5E38\u7528-props","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"<Form /> \u5E38\u7528 props"),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u53C2\u6570"),n.a.createElement("th",null,"\u63CF\u8FF0"),n.a.createElement("th",null,"\u7C7B\u578B"),n.a.createElement("th",null,"\u662F\u5426\u5FC5\u586B"),n.a.createElement("th",null,"\u9ED8\u8BA4\u503C"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"id"),n.a.createElement("td",null,"\u8868\u5355\u7684 id\uFF0C\u4E00\u822C\u7528\u4E8E\u6807\u8BC6\u4E00\u4E2A\u8868\u5355\u7684\u8BED\u4E49\u5316\u540D\u79F0"),n.a.createElement("td",null,n.a.createElement("code",null,"string"),"/",n.a.createElement("code",null,"number")),n.a.createElement("td",null,"\u5426"),n.a.createElement("td",null)),n.a.createElement("tr",null,n.a.createElement("td",null,"schema"),n.a.createElement("td",null,"\u63CF\u8FF0\u8868\u5355\u7684 schema\uFF0C\u8BE6\u89C1"),n.a.createElement("td",null,n.a.createElement("code",null,"object")),n.a.createElement("td",null,"\u662F"),n.a.createElement("td",null)),n.a.createElement("tr",null,n.a.createElement("td",null,"form"),n.a.createElement("td",null,n.a.createElement("code",null,"useForm"),"\u521B\u5EFA\u7684\u8868\u5355\u5B9E\u4F8B\uFF0C\u4E0E Form \u4E00\u5BF9\u4E00\u7ED1\u5B9A"),n.a.createElement("td",null,n.a.createElement("code",null,"FormInstance")),n.a.createElement("td",null,"\u662F"),n.a.createElement("td",null)),n.a.createElement("tr",null,n.a.createElement("td",null,"onFinish"),n.a.createElement("td",null,"\u63D0\u4EA4\u540E\u7684\u56DE\u8C03\uFF0C\u6267\u884C form.submit() \u540E\u89E6\u53D1"),n.a.createElement("td",null,n.a.createElement("code",null,"(data, errors: Error[]) => void")),n.a.createElement("td",null,"\u5426"),n.a.createElement("td",null,"() => ","{","}")),n.a.createElement("tr",null,n.a.createElement("td",null,"beforeFinish"),n.a.createElement("td",null,"\u5728 onFinish \u524D\u89E6\u53D1\uFF0C\u4E00\u822C\u7528\u4E8E\u5916\u90E8\u6821\u9A8C\u903B\u8F91\u7684\u56DE\u586B\uFF0C\u5165\u53C2\u662F\u4E2A\u5BF9\u8C61\uFF0C\u4FBF\u4E8E\u6269\u5C55"),n.a.createElement("td",null,n.a.createElement("code",null,"(","{"," data, errors, schema, ...rest ","}",") => Error[] \u6216 Promise<Error[]>")),n.a.createElement("td",null,"\u5426"),n.a.createElement("td",null,"() => ","{","}")),n.a.createElement("tr",null,n.a.createElement("td",null,"onMount"),n.a.createElement("td",null,"\u8868\u5355\u9996\u6B21\u52A0\u8F7D\u65F6\u89E6\u53D1\uFF0C\u8BE6\u89C1",n.a.createElement(v.Link,{to:"/form-render/advanced/life-cycle"},"\u751F\u547D\u5468\u671F")),n.a.createElement("td",null,n.a.createElement("code",null,"() => void")),n.a.createElement("td",null,"\u5426"),n.a.createElement("td",null,"() => ","{","}")),n.a.createElement("tr",null,n.a.createElement("td",null,"displayType"),n.a.createElement("td",null,"\u8868\u5355\u5143\u7D20\u4E0E label \u540C\u884C or \u5206\u4E24\u884C\u5C55\u793A, inline \u5219\u6574\u4E2A\u5C55\u793A\u81EA\u7136\u987A\u6392"),n.a.createElement("td",null,n.a.createElement("code",null,"string('column' / 'row' / 'inline')")),n.a.createElement("td",null,"\u5426"),n.a.createElement("td",null,"'column'")),n.a.createElement("tr",null,n.a.createElement("td",null,"widgets"),n.a.createElement("td",null,"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\uFF0C\u5F53\u5185\u7F6E\u7EC4\u4EF6\u65E0\u6CD5\u6EE1\u8DB3\u65F6\u4F7F\u7528"),n.a.createElement("td",null,n.a.createElement("code",null,"object")),n.a.createElement("td",null,"\u5426"),n.a.createElement("td",null,"{","}")),n.a.createElement("tr",null,n.a.createElement("td",null,"watch"),n.a.createElement("td",null,"\u7C7B\u4F3C\u4E8E vue \u7684 watch \u7684\u7528\u6CD5\uFF0C\u8BE6\u89C1",n.a.createElement(v.Link,{to:"/form-render/advanced/watch"},"\u8868\u5355\u76D1\u542C & \u56DE\u8C03")),n.a.createElement("td",null,n.a.createElement("code",null,"object")),n.a.createElement("td",null,"\u5426"),n.a.createElement("td",null,"{","}")),n.a.createElement("tr",null,n.a.createElement("td",null,"removeHiddenData"),n.a.createElement("td",null,"\u63D0\u4EA4\u6570\u636E\u7684\u65F6\u5019\u662F\u5426\u53BB\u6389\u5DF2\u7ECF\u88AB\u9690\u85CF\u7684\u5143\u7D20\u7684\u6570\u636E\uFF0C\u9ED8\u8BA4\u4E0D\u9690\u85CF"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,"\u5426"),n.a.createElement("td",null,"false")),n.a.createElement("tr",null,n.a.createElement("td",null,"debug"),n.a.createElement("td",null,"\u5F00\u542F debug \u6A21\u5F0F\uFF0C\u65F6\u65F6\u663E\u793A\u8868\u5355\u5185\u90E8\u72B6\u6001\uFF0C",n.a.createElement("strong",null,"\u5F00\u53D1\u7684\u65F6\u5019\u5F3A\u70C8\u5EFA\u8BAE\u6253\u5F00")),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,"\u5426"),n.a.createElement("td",null,"false")),n.a.createElement("tr",null,n.a.createElement("td",null,"readOnly"),n.a.createElement("td",null,"\u53EA\u8BFB\u6A21\u5F0F\uFF0C\u4E00\u822C\u7528\u4E8E\u9884\u89C8\u5C55\u793A\uFF0C\u5168\u6587 text \u5C55\u793A"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,"\u5426"),n.a.createElement("td",null,"false")))),n.a.createElement("h3",{id:"form--\u4E0D\u5E38\u7528-props"},n.a.createElement(v.AnchorLink,{to:"#form--\u4E0D\u5E38\u7528-props","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"<Form /> \u4E0D\u5E38\u7528 props"),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u53C2\u6570"),n.a.createElement("th",null,"\u63CF\u8FF0"),n.a.createElement("th",null,"\u7C7B\u578B"),n.a.createElement("th",null,"\u9ED8\u8BA4\u503C"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"className (v.1.6.12)"),n.a.createElement("td",null,"\u9876\u5C42 className"),n.a.createElement("td",null,n.a.createElement("code",null,"string")),n.a.createElement("td",null,"''")),n.a.createElement("tr",null,n.a.createElement("td",null,"style (v.1.6.12)"),n.a.createElement("td",null,"\u9876\u5C42 style"),n.a.createElement("td",null,n.a.createElement("code",null,"object")),n.a.createElement("td",null,"{","}")),n.a.createElement("tr",null,n.a.createElement("td",null,"column"),n.a.createElement("td",null,"\u4E00\u884C\u5C55\u793A\u591A\u5C11\u5217"),n.a.createElement("td",null,n.a.createElement("code",null,"number")),n.a.createElement("td",null,"1")),n.a.createElement("tr",null,n.a.createElement("td",null,"mapping"),n.a.createElement("td",null,"schema \u4E0E\u7EC4\u4EF6\u7684\u6620\u5C04\u5173\u7CFB\u8868\uFF0C\u5F53\u5185\u7F6E\u7684\u8868\u4E0D\u6EE1\u8DB3\u65F6\u4F7F\u7528"),n.a.createElement("td",null,n.a.createElement("code",null,"object")),n.a.createElement("td",null,"{","}")),n.a.createElement("tr",null,n.a.createElement("td",null,"disabled"),n.a.createElement("td",null,"\u7981\u7528\u6A21\u5F0F\uFF0C\u5168\u90E8\u8868\u5355\u5143\u7D20\u7981\u7528"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,"false")),n.a.createElement("tr",null,n.a.createElement("td",null,"debugCss"),n.a.createElement("td",null,"\u7528\u4E8E css \u95EE\u9898\u7684\u8C03\u6574\uFF0C\u663E\u793A css \u5E03\u5C40\u63D0\u793A\u7EBF"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,"false")),n.a.createElement("tr",null,n.a.createElement("td",null,"locale"),n.a.createElement("td",null,"\u5C55\u793A\u8BED\u8A00\uFF0C\u76EE\u524D\u53EA\u652F\u6301\u4E2D\u6587\u3001\u82F1\u6587"),n.a.createElement("td",null,n.a.createElement("code",null,"string('cn'/'en')")),n.a.createElement("td",null,"'cn'")),n.a.createElement("tr",null,n.a.createElement("td",null,"configProvider"),n.a.createElement("td",null,"antd \u7684 configProvider\uFF0C\u914D\u7F6E\u900F\u4F20"),n.a.createElement("td",null,n.a.createElement("code",null,"object")),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"allCollapsed"),n.a.createElement("td",null,"\u5BF9\u8C61\u7EC4\u4EF6\u662F\u5426\u9ED8\u8BA4\u6298\u53E0\uFF08\u5168\u5C40\uFF09"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,"false")),n.a.createElement("tr",null,n.a.createElement("td",null,"debounceInput"),n.a.createElement("td",null,"\u662F\u5426\u5F00\u542F\u8F93\u5165\u65F6\u4F7F\u7528\u5FEB\u7167\u6A21\u5F0F\u3002\u4EC5\u5EFA\u8BAE\u5728\u8868\u5355\u5DE8\u5927\u4E14\u8868\u8FBE\u5F0F\u975E\u5E38\u591A\u65F6\u5F00\u542F"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,"false")),n.a.createElement("tr",null,n.a.createElement("td",null,"validateMessages"),n.a.createElement("td",null,"\u4FEE\u6539\u9ED8\u8BA4\u7684\u6821\u9A8C\u63D0\u793A\u4FE1\u606F\u3002\u8BE6\u89C1\u4E0B"),n.a.createElement("td",null,n.a.createElement("code",null,"object")),n.a.createElement("td",null,"{","}")))),n.a.createElement("h4",{id:"validatemessages"},n.a.createElement(v.AnchorLink,{to:"#validatemessages","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"validateMessages"),n.a.createElement("p",null,n.a.createElement("code",null,"Form")," \u4E3A\u9A8C\u8BC1\u63D0\u4F9B\u4E86",n.a.createElement(v.Link,{to:"https://github.com/alibaba/x-render/blob/master/packages/form-render/src/validateMessageCN.js"},"\u9ED8\u8BA4\u7684\u9519\u8BEF\u63D0\u793A\u4FE1\u606F"),"\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7\u914D\u7F6E ",n.a.createElement("code",null,"validateMessages")," \u5C5E\u6027\uFF0C\u4FEE\u6539\u5BF9\u5E94\u7684\u63D0\u793A\u6A21\u677F\u3002\u4E00\u79CD\u5E38\u89C1\u7684\u4F7F\u7528\u65B9\u5F0F\uFF0C\u662F\u914D\u7F6E\u56FD\u9645\u5316\u63D0\u793A\u4FE1\u606F\uFF1A"),n.a.createElement(Oe.a,{code:`const validateMessages = {
  required: '\${title}\u662F\u5FC5\u9009\u5B57\u6BB5',
  // ...
};

<Form validateMessages={validateMessages} />;`,lang:"js"}),n.a.createElement("p",null,"\u76EE\u524D\u53EF\u4EE5\u7528\u7684\u8F6C\u4E49\u5B57\u6BB5\u4E3A ",n.a.createElement("code",null,"$","{","title","}"),"/",n.a.createElement("code",null,"$","{","min","}"),"/",n.a.createElement("code",null,"$","{","max","}"),"/",n.a.createElement("code",null,"$","{","len","}"),"/",n.a.createElement("code",null,"$","{","pattern","}"),", \u5982\u679C\u6709\u66F4\u591A\u9700\u6C42\u8BF7\u63D0 ",n.a.createElement(v.Link,{to:"https://github.com/alibaba/x-render/issues/new/choose"},"issue")),n.a.createElement("h3",{id:"useform--connectform"},n.a.createElement(v.AnchorLink,{to:"#useform--connectform","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"useForm / connectForm"),n.a.createElement("p",null,n.a.createElement("code",null,"useForm")," / ",n.a.createElement("code",null,"connectForm")," \u7528\u4E8E\u521B\u5EFA\u8868\u5355\u5B9E\u4F8B\uFF0C\u6240\u6709\u5BF9\u8868\u5355\u7684\u5916\u90E8\u64CD\u4F5C\u548C\u56DE\u8C03\u51FD\u6570\u5168\u6302\u5728\u5176\u751F\u4EA7\u7684\u5B9E\u4F8B\u4E0A,\u4F8B\u5982\u8868\u5355\u63D0\u4EA4\u662F ",n.a.createElement("code",null,"form.submit"),"\u3002\u6CE8\u610F ",n.a.createElement("code",null,"useForm")," \u662F hooks\uFF0C\u800C ",n.a.createElement("code",null,"connectForm")," \u662F\u9AD8\u9636\u7EC4\u4EF6\uFF0C\u6240\u4EE5\u524D\u8005\u53EA\u80FD\u5728\u51FD\u6570\u7EC4\u4EF6\u4F7F\u7528\uFF0C\u540E\u8005\u53EF\u7528\u4E8E class \u7EC4\u4EF6\u3002\u4E24\u8005\u65E0\u5176\u4ED6\u533A\u522B\u3002\u4F7F\u7528\u65F6\u9700\u8981\u521B\u5EFA\u5B9E\u4F8B\uFF0C\u5E76\u901A\u8FC7 props \u6302\u94A9\u5230\u4E0E\u5176\u5BF9\u5E94\u7684\u8868\u5355\u4E0A\uFF1A"),n.a.createElement(Oe.a,{code:`import Form, { useForm } from 'form-render';

const Demo = () => {
  const form = useForm();
  return <Form form={form} schema={...} />;
};`,lang:"js"}),n.a.createElement(Oe.a,{code:`import Form, { connectForm } from 'form-render';

const Demo = ({ form }) => {
  return <Form form={form} schema={...} />;
};

export default connectForm(Demo);`,lang:"js"}),n.a.createElement("p",null,n.a.createElement("strong",null,"useForm \u5165\u53C2")),n.a.createElement("p",null,"\u4EE5\u4E0B\u5165\u53C2\u7684\u5177\u4F53\u610F\u4E49\u53CA\u7528\u6CD5\uFF0C\u8BE6\u89C1",n.a.createElement(v.Link,{to:"/form-render/measure"},"\u8868\u5355\u5065\u5EB7\u5EA6 & \u63D0\u6548")),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u53C2\u6570"),n.a.createElement("th",null,"\u63CF\u8FF0"),n.a.createElement("th",null,"\u7C7B\u578B"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"logOnMount"),n.a.createElement("td",null,"\u4F1A\u5728\u8868\u5355\u9996\u6B21\u52A0\u8F7D\u65F6\u89E6\u53D1, \u83B7\u53D6\u8868\u5355\u4FE1\u606F"),n.a.createElement("td",null,"function")),n.a.createElement("tr",null,n.a.createElement("td",null,"logOnSubmit"),n.a.createElement("td",null,"\u4F1A\u5728 form.submit \u65F6\u89E6\u53D1\uFF0C\u83B7\u53D6\u8868\u5355\u4FE1\u606F\uFF08\u5982\u586B\u5199\u65F6\u957F\u3001\u62A5\u9519\u4FE1\u606F\u7B49\uFF09"),n.a.createElement("td",null,"function")))),n.a.createElement("p",null,n.a.createElement("strong",null,"form \u65B9\u6CD5")),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u53C2\u6570"),n.a.createElement("th",null,"\u63CF\u8FF0"),n.a.createElement("th",null,"\u7C7B\u578B"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"submit"),n.a.createElement("td",null,"\u89E6\u53D1\u63D0\u4EA4\u6D41\u7A0B\uFF0C\u4E00\u822C\u5728\u63D0\u4EA4\u6309\u94AE\u4E0A\u4F7F\u7528"),n.a.createElement("td",null,n.a.createElement("code",null,"() => void"))),n.a.createElement("tr",null,n.a.createElement("td",null,"resetFields"),n.a.createElement("td",null,"\u6E05\u7A7A\u8868\u5355\uFF08\u4E5F\u4F1A\u6E05\u7A7A\u4E00\u4E9B\u5185\u7F6E\u72B6\u6001\uFF0C\u4F8B\u5982\u6821\u9A8C\uFF09"),n.a.createElement("td",null,n.a.createElement("code",null,"() => void"))),n.a.createElement("tr",null,n.a.createElement("td",null,"errorFields"),n.a.createElement("td",null,"\u8868\u5355\u6821\u9A8C\u9519\u8BEF\u7684\u6570\u7EC4"),n.a.createElement("td",null,n.a.createElement("code",null,"array,[","{","name, error: []","}","]"))),n.a.createElement("tr",null,n.a.createElement("td",null,"setErrorFields"),n.a.createElement("td",null,"\u5916\u90E8\u624B\u52A8\u4FEE\u6539 errorFields \u6821\u9A8C\u4FE1\u606F\uFF0C\u7528\u4E8E\u5916\u90E8\u6821\u9A8C\u56DE\u586B"),n.a.createElement("td",null,"`(error: Error")),n.a.createElement("tr",null,n.a.createElement("td",null,"setValues"),n.a.createElement("td",null,"\u5916\u90E8\u624B\u52A8\u4FEE\u6539 formData\uFF0C\u7528\u4E8E\u5DF2\u586B\u5199\u7684\u8868\u5355\u7684\u6570\u636E\u56DE\u586B"),n.a.createElement("td",null,n.a.createElement("code",null,"(formData: any) => void"))),n.a.createElement("tr",null,n.a.createElement("td",null,"setValueByPath"),n.a.createElement("td",null,"\u5916\u90E8\u4FEE\u6539\u6307\u5B9A\u5355\u4E2A field \u7684\u6570\u636E(\u539F\u540D onItemChange)"),n.a.createElement("td",null,n.a.createElement("code",null,"(path: string, value: any) => void"))),n.a.createElement("tr",null,n.a.createElement("td",null,"setSchemaByPath"),n.a.createElement("td",null,"\u6307\u5B9A\u8DEF\u5F84\u4FEE\u6539 schema"),n.a.createElement("td",null,n.a.createElement("code",null,"(path: string, value: any) => void"))),n.a.createElement("tr",null,n.a.createElement("td",null,"setSchema"),n.a.createElement("td",null,"\u6307\u5B9A",n.a.createElement("strong",null,"\u591A\u4E2A"),"\u8DEF\u5F84\u4FEE\u6539 schema\u3002\u6CE8 1"),n.a.createElement("td",null,n.a.createElement("code",null,"(","{"," path1: value1, path2: value2 ","}",") => void"))),n.a.createElement("tr",null,n.a.createElement("td",null,"getValues"),n.a.createElement("td",null,"\u83B7\u53D6\u8868\u5355\u5185\u90E8\u7EF4\u62A4\u7684\u6570\u636E formData"),n.a.createElement("td",null,n.a.createElement("code",null,"() => void"))),n.a.createElement("tr",null,n.a.createElement("td",null,"schema"),n.a.createElement("td",null,"\u8868\u5355\u7684 schema"),n.a.createElement("td",null,"object")),n.a.createElement("tr",null,n.a.createElement("td",null,"touchedKeys"),n.a.createElement("td",null,"\u5DF2\u7ECF\u89E6\u78B0\u8FC7\u7684 field \u7684\u6570\u636E\u8DEF\u5F84"),n.a.createElement("td",null,n.a.createElement("code",null,"string[]"))),n.a.createElement("tr",null,n.a.createElement("td",null,"removeErrorField"),n.a.createElement("td",null,"\u5916\u90E8\u624B\u52A8\u5220\u9664\u67D0\u4E00\u4E2A path \u4E0B\u6240\u6709\u7684\u6821\u9A8C\u4FE1\u606F"),n.a.createElement("td",null,n.a.createElement("code",null,"(path: string) => void"))),n.a.createElement("tr",null,n.a.createElement("td",null,"formData"),n.a.createElement("td",null,"\u8868\u5355\u5185\u90E8\u7EF4\u62A4\u7684\u6570\u636E\uFF0C\u5EFA\u8BAE\u4F7F\u7528 getValues/setValues"),n.a.createElement("td",null,n.a.createElement("code",null,"object"))))),n.a.createElement("p",null,"\u6CE8 1\uFF1A react \u66F4\u65B0\u673A\u5236\u5BFC\u81F4\uFF0C\u540C\u65F6\u591A\u6B21\u8C03\u7528 ",n.a.createElement("code",null,"setSchemaByPath")," \u65E0\u6548\uFF0C\u6240\u4EE5\u8BF7\u4F7F\u7528 ",n.a.createElement("code",null,"setSchema"),"\uFF0C\u4E8B\u5B9E\u4E0A",n.a.createElement("code",null,"setSchema")," \u80FD\u5B8C\u5168\u8986\u76D6 ",n.a.createElement("code",null,"setSchemaByPath")," \u7684\u573A\u666F"),n.a.createElement("h2",{id:"\u5982\u4F55\u901F\u5199-schema"},n.a.createElement(v.AnchorLink,{to:"#\u5982\u4F55\u901F\u5199-schema","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u5982\u4F55\u901F\u5199 Schema"),n.a.createElement("p",null,n.a.createElement("strong",null,"\u5BF9\u4E8E\u521D\u5B66\u8005\u6765\u8BF4\u8BB0\u4F4F schema \u6240\u6709\u7684\u5B57\u6BB5\u548C\u4F7F\u7528\u65B9\u5F0F\u5E76\u975E\u6613\u4E8B\u3002\u4E3A\u4E86\u8BA9\u5927\u5BB6\u80FD\u591F\u5FEB\u901F\u4E0A\u624B\uFF0C\u5EFA\u8BAE\u4EE5\u4EE5\u4E0B\u7684\u987A\u5E8F\u5C1D\u8BD5\uFF1A")),n.a.createElement("ol",null,n.a.createElement("li",null,n.a.createElement("p",null,"\u53BB ",n.a.createElement(v.Link,{to:"/playground"},"Playground")," \u901B\u901B\uFF0C\u90A3\u91CC\u6709\u4ECE\u57FA\u7840\u73A9\u6CD5\u3001\u9AD8\u7EA7\u529F\u80FD\u5230\u5B8C\u6574\u6837\u4F8B\u7684\u6240\u6709 schema \u6837\u4F8B")),n.a.createElement("li",null,n.a.createElement("p",null,"\u73A9\u8F6C\u4E00\u4E0B ",n.a.createElement(v.Link,{to:"https://x-render.gitee.io/tools/generator"},"\u8868\u5355\u8BBE\u8BA1\u5668"),"\uFF0C\u62D6\u62D6\u62FD\u62FD\u5BFC\u51FA schema\uFF0C\u4E22\u5230\u4EE3\u7801\u91CC\u751F\u6210\u53EF\u7528\u8868\u5355\u3002\u672C\u8D28\u4E0A\u8FD9\u662F\u4E00\u4E2A\u53EF\u89C6\u5316\u7684 schema \u751F\u6210\u5668\uFF0C\u652F\u6301 schema \u7684\u5BFC\u5165 & \u5BFC\u51FA"),n.a.createElement("div",null,n.a.createElement("img",{src:"https://gw.alipayobjects.com/mdn/rms_e18934/afts/img/A*4QYNTbKU6xAAAAAAAAAAAABkARQnAQ?raw=true",width:"500px"}),n.a.createElement("img",{src:"https://gw.alipayobjects.com/mdn/rms_e18934/afts/img/A*FfTuRYjRd1AAAAAAAAAAAABkARQnAQ?raw=true",alt:"schema\u7F16\u8F91\u5668",width:"500px"}))),n.a.createElement("li",null,n.a.createElement("p",null,"\u8BE6\u7EC6\u7684 schema \u89C4\u8303\u89C1 ",n.a.createElement(v.Link,{to:"/form-render/schema"},"schema \u7684\u6587\u6863"),"\u3002\u540C\u65F6\u5728 vscode \u4E0A\u641C\u7D22 ",n.a.createElement("code",null,"formrender")," \u53EF\u4EE5\u627E\u5230 snippets \u63D2\u4EF6\uFF0C\u624B\u719F\u8D77\u6765\u4E00\u6574\u9875\u8868\u5355\u7684 schema \u5F39\u6307\u95F4\u5B8C\u6210")))))))}}]);
