(window.webpackJsonp=window.webpackJsonp||[]).push([[38,13],{"0zqC":function(Dn,dn,e){"use strict";e.r(dn);var J=e("tJVT"),r=e("q1tI"),S=e.n(r),W=e("wx14"),re=e("rePB"),x=e("ODXe"),Fe=e("U8pU"),Ee=e("Ff2n"),ce=e("VTBJ"),Pn=e("TSYQ"),Ce=e.n(Pn),cn=e("Zm9Q"),mn=e("5Z9U"),Qe=e("6cGi"),sn=e("KQm4"),Ve=e("wgJM"),Fn=e("t23M");function Tn(a){var u=Object(r.useRef)(),y=Object(r.useRef)(!1);function j(){for(var E=arguments.length,R=new Array(E),P=0;P<E;P++)R[P]=arguments[P];y.current||(Ve.a.cancel(u.current),u.current=Object(Ve.a)(function(){a.apply(void 0,R)}))}return Object(r.useEffect)(function(){return function(){y.current=!0,Ve.a.cancel(u.current)}},[]),j}function gn(a){var u=Object(r.useRef)([]),y=Object(r.useState)({}),j=Object(x.a)(y,2),E=j[1],R=Object(r.useRef)(typeof a=="function"?a():a),P=Tn(function(){var B=R.current;u.current.forEach(function($){B=$(B)}),u.current=[],R.current=B,E({})});function A(B){u.current.push(B),P()}return[R.current,A]}var Ie=e("4IlW");function qn(a,u){var y,j=a.prefixCls,E=a.id,R=a.active,P=a.rtl,A=a.tab,B=A.key,$=A.tab,V=A.disabled,G=A.closeIcon,U=a.tabBarGutter,ae=a.tabPosition,Y=a.closable,X=a.renderWrapper,ie=a.removeAriaLabel,z=a.editable,q=a.onClick,ne=a.onRemove,Q=a.onFocus,se="".concat(j,"-tab");r.useEffect(function(){return ne},[]);var k={};ae==="top"||ae==="bottom"?k[P?"marginLeft":"marginRight"]=U:k.marginBottom=U;var he=z&&Y!==!1&&!V;function _(te){V||q(te)}function le(te){te.preventDefault(),te.stopPropagation(),z.onEdit("remove",{key:B,event:te})}var ue=r.createElement("div",{key:B,ref:u,className:Ce()(se,(y={},Object(re.a)(y,"".concat(se,"-with-remove"),he),Object(re.a)(y,"".concat(se,"-active"),R),Object(re.a)(y,"".concat(se,"-disabled"),V),y)),style:k,onClick:_},r.createElement("div",{role:"tab","aria-selected":R,id:E&&"".concat(E,"-tab-").concat(B),className:"".concat(se,"-btn"),"aria-controls":E&&"".concat(E,"-panel-").concat(B),"aria-disabled":V,tabIndex:V?null:0,onClick:function(H){H.stopPropagation(),_(H)},onKeyDown:function(H){[Ie.a.SPACE,Ie.a.ENTER].includes(H.which)&&(H.preventDefault(),_(H))},onFocus:Q},$),he&&r.createElement("button",{type:"button","aria-label":ie||"remove",tabIndex:0,className:"".concat(se,"-remove"),onClick:function(H){H.stopPropagation(),le(H)}},G||z.removeIcon||"\xD7"));return X&&(ue=X(ue)),ue}var Mn=r.forwardRef(qn),_n={width:0,height:0,left:0,top:0};function ot(a,u,y){return Object(r.useMemo)(function(){for(var j,E=new Map,R=u.get((j=a[0])===null||j===void 0?void 0:j.key)||_n,P=R.left+R.width,A=0;A<a.length;A+=1){var B=a[A].key,$=u.get(B);if(!$){var V;$=u.get((V=a[A-1])===null||V===void 0?void 0:V.key)||_n}var G=E.get(B)||Object(ce.a)({},$);G.right=P-G.left-G.width,E.set(B,G)}return E},[a.map(function(j){return j.key}).join("_"),u,y])}var et={width:0,height:0,left:0,top:0,right:0};function lt(a,u,y,j,E){var R=E.tabs,P=E.tabPosition,A=E.rtl,B,$,V;["top","bottom"].includes(P)?(B="width",$=A?"right":"left",V=Math.abs(u.left)):(B="height",$="top",V=-u.top);var G=u[B],U=y[B],ae=j[B],Y=G;return U+ae>G&&(Y=G-ae),Object(r.useMemo)(function(){if(!R.length)return[0,0];for(var X=R.length,ie=X,z=0;z<X;z+=1){var q=a.get(R[z].key)||et;if(q[$]+q[B]>V+Y){ie=z-1;break}}for(var ne=0,Q=X-1;Q>=0;Q-=1){var se=a.get(R[Q].key)||et;if(se[$]<V){ne=Q+1;break}}return[ne,ie]},[a,V,Y,P,R.map(function(X){return X.key}).join("_"),A])}var Kn=e("Gytx"),nt=e.n(Kn),$n=e("Kwbf");function ut(a,u){var y=a.prefixCls,j=a.invalidate,E=a.item,R=a.renderItem,P=a.responsive,A=a.registerSize,B=a.itemKey,$=a.className,V=a.style,G=a.children,U=a.display,ae=a.order,Y=a.component,X=Y===void 0?"div":Y,ie=Object(Ee.a)(a,["prefixCls","invalidate","item","renderItem","responsive","registerSize","itemKey","className","style","children","display","order","component"]),z=P&&!U;function q(he){A(B,he)}r.useEffect(function(){return function(){q(null)}},[]);var ne=R&&E!==void 0?R(E):G,Q;j||(Q={opacity:z?0:1,height:z?0:void 0,overflowY:z?"hidden":void 0,order:P?ae:void 0,pointerEvents:z?"none":void 0});var se={};z&&(se["aria-hidden"]=!0);var k=r.createElement(X,Object(W.a)({className:Ce()(!j&&y,$),style:Object(ce.a)(Object(ce.a)({},Q),V)},se,ie,{ref:u}),ne);return P&&(k=r.createElement(Fn.default,{onResize:function(_){var le=_.offsetWidth;q(le)}},k)),k}var Bn=r.forwardRef(ut);Bn.displayName="Item";var Nn=Bn;function Vn(){var a=Object(r.useState)({}),u=Object(x.a)(a,2),y=u[1],j=Object(r.useRef)([]),E=Object(r.useRef)(!1),R=0,P=0;Object(r.useEffect)(function(){return function(){E.current=!0}},[]);function A(B){var $=R;R+=1,j.current.length<$+1&&(j.current[$]=B);var V=j.current[$];function G(U){j.current[$]=typeof U=="function"?U(j.current[$]):U,Ve.a.cancel(P),P=Object(Ve.a)(function(){E.current||y({})})}return[V,G]}return A}var tt=function(u,y){var j=r.useContext(T);if(!j){var E=u.component,R=E===void 0?"div":E,P=Object(Ee.a)(u,["component"]);return r.createElement(R,Object(W.a)({},P,{ref:y}))}var A=j.className,B=Object(Ee.a)(j,["className"]),$=u.className,V=Object(Ee.a)(u,["className"]);return r.createElement(T.Provider,{value:null},r.createElement(Nn,Object(W.a)({ref:y,className:Ce()(A,$)},B,V)))},Jn=r.forwardRef(tt);Jn.displayName="RawItem";var w=Jn,T=r.createContext(null),I="responsive",p="invalidate";function i(a){return"+ ".concat(a.length," ...")}function g(a,u){var y=a.prefixCls,j=y===void 0?"rc-overflow":y,E=a.data,R=E===void 0?[]:E,P=a.renderItem,A=a.renderRawItem,B=a.itemKey,$=a.itemWidth,V=$===void 0?10:$,G=a.ssr,U=a.style,ae=a.className,Y=a.maxCount,X=a.renderRest,ie=a.renderRawRest,z=a.suffix,q=a.component,ne=q===void 0?"div":q,Q=a.itemComponent,se=a.onVisibleChange,k=Object(Ee.a)(a,["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"]),he=Vn(),_=G==="full",le=he(null),ue=Object(x.a)(le,2),te=ue[0],H=ue[1],oe=te||0,fe=he(new Map),me=Object(x.a)(fe,2),be=me[0],we=me[1],ve=he(0),ye=Object(x.a)(ve,2),Te=ye[0],Pe=ye[1],je=he(0),Re=Object(x.a)(je,2),Me=Re[0],Ge=Re[1],Ke=he(0),Be=Object(x.a)(Ke,2),$e=Be[0],Ae=Be[1],bn=Object(r.useState)(null),Ze=Object(x.a)(bn,2),Je=Ze[0],en=Ze[1],fn=Object(r.useState)(null),pn=Object(x.a)(fn,2),De=pn[0],Le=pn[1],He=r.useMemo(function(){return De===null&&_?Number.MAX_SAFE_INTEGER:De||0},[De,te]),ze=Object(r.useState)(!1),wn=Object(x.a)(ze,2),zn=wn[0],An=wn[1],ke="".concat(j,"-item"),On=Math.max(Te,Me),nn=R.length&&Y===I,Sn=Y===p,Ye=nn||typeof Y=="number"&&R.length>Y,qe=Object(r.useMemo)(function(){var de=R;return nn?te===null&&_?de=R:de=R.slice(0,Math.min(R.length,oe/V)):typeof Y=="number"&&(de=R.slice(0,Y)),de},[R,V,te,Y,nn]),Cn=Object(r.useMemo)(function(){return nn?R.slice(He+1):R.slice(qe.length)},[R,qe,nn,He]),rn=Object(r.useCallback)(function(de,Se){var Ne;return typeof B=="function"?B(de):(Ne=B&&(de==null?void 0:de[B]))!==null&&Ne!==void 0?Ne:Se},[B]),Ue=Object(r.useCallback)(P||function(de){return de},[P]);function xe(de,Se){Le(de),Se||(An(de<R.length-1),se==null||se(de))}function Un(de,Se){H(Se.clientWidth)}function Gn(de,Se){we(function(Ne){var Xe=new Map(Ne);return Se===null?Xe.delete(de):Xe.set(de,Se),Xe})}function at(de,Se){Ge(Se),Pe(Me)}function hn(de,Se){Ae(Se)}function un(de){return be.get(rn(qe[de],de))}r.useLayoutEffect(function(){if(oe&&On&&qe){var de=$e,Se=qe.length,Ne=Se-1;if(!Se){xe(0),en(null);return}for(var Xe=0;Xe<Se;Xe+=1){var Qn=un(Xe);if(Qn===void 0){xe(Xe-1,!0);break}if(de+=Qn,Xe===Ne-1&&de+un(Ne)<=oe){xe(Ne),en(null);break}else if(de+On>oe){xe(Xe-1),en(de-Qn-$e+Me);break}else if(Xe===Ne){xe(Ne),en(de-$e);break}}z&&un(0)+$e>oe&&en(null)}},[oe,be,Me,$e,rn,qe]);var Hn=zn&&!!Cn.length,vn={};Je!==null&&nn&&(vn={position:"absolute",left:Je,top:0});var an={prefixCls:ke,responsive:nn,component:Q,invalidate:Sn},Yn=A?function(de,Se){var Ne=rn(de,Se);return r.createElement(T.Provider,{key:Ne,value:Object(ce.a)(Object(ce.a)({},an),{},{order:Se,item:de,itemKey:Ne,registerSize:Gn,display:Se<=He})},A(de,Se))}:function(de,Se){var Ne=rn(de,Se);return r.createElement(Nn,Object(W.a)({},an,{order:Se,key:Ne,item:de,renderItem:Ue,itemKey:Ne,registerSize:Gn,display:Se<=He}))},Rn,Xn={order:Hn?He:Number.MAX_SAFE_INTEGER,className:"".concat(ke,"-rest"),registerSize:at,display:Hn};if(ie)ie&&(Rn=r.createElement(T.Provider,{value:Object(ce.a)(Object(ce.a)({},an),Xn)},ie(Cn)));else{var tn=X||i;Rn=r.createElement(Nn,Object(W.a)({},an,Xn),typeof tn=="function"?tn(Cn):tn)}var jn=r.createElement(ne,Object(W.a)({className:Ce()(!Sn&&j,ae),style:U,ref:u},k),qe.map(Yn),Ye?Rn:null,z&&r.createElement(Nn,Object(W.a)({},an,{order:He,className:"".concat(ke,"-suffix"),registerSize:hn,display:!0,style:vn}),z));return nn&&(jn=r.createElement(Fn.default,{onResize:Un},jn)),jn}var b=r.forwardRef(g);b.displayName="Overflow",b.Item=w,b.RESPONSIVE=I,b.INVALIDATE=p;var C=b,s=C,h=e("1OyB"),o=e("vuIU"),F=e("Ji7U"),K=e("LK+K"),D=e("bT9E"),c=e("YrtM"),O=r.createContext(null);function m(a,u){var y=Object(ce.a)({},a);return Object.keys(u).forEach(function(j){var E=u[j];E!==void 0&&(y[j]=E)}),y}function n(a){var u=a.children,y=a.locked,j=Object(Ee.a)(a,["children","locked"]),E=r.useContext(O),R=Object(c.a)(function(){return m(E,j)},[E,j],function(P,A){return!y&&(P[0]!==A[0]||!nt()(P[1],A[1]))});return r.createElement(O.Provider,{value:R},u)}function v(a,u,y,j){var E=r.useContext(O),R=E.activeKey,P=E.onActive,A=E.onInactive,B={active:R===a};return u||(B.onMouseEnter=function($){y==null||y({key:a,domEvent:$}),P(a)},B.onMouseLeave=function($){j==null||j({key:a,domEvent:$}),A(a)}),B}function d(a){var u=a.item,y=Object(Ee.a)(a,["item"]);return Object.defineProperty(y,"item",{get:function(){return Object($n.a)(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),u}}),y}function t(a){var u=a.icon,y=a.props,j=a.children,E;return typeof u=="function"?E=r.createElement(u,Object(ce.a)({},y)):E=u,E||j||null}function l(a){var u=r.useContext(O),y=u.mode,j=u.rtl,E=u.inlineIndent;if(y!=="inline")return null;var R=a;return j?{paddingRight:R*E}:{paddingLeft:R*E}}var f=[],M=r.createContext(null);function N(){return r.useContext(M)}var L=r.createContext(f);function pe(a){var u=r.useContext(L);return r.useMemo(function(){return a!==void 0?[].concat(Object(sn.a)(u),[a]):u},[u,a])}var Oe=r.createContext(null),on=r.createContext(null);function yn(a,u){return a===void 0?null:"".concat(a,"-").concat(u)}function Wn(a){var u=r.useContext(on);return yn(u,a)}var In=function(a){Object(F.a)(y,a);var u=Object(K.a)(y);function y(){return Object(h.a)(this,y),u.apply(this,arguments)}return Object(o.a)(y,[{key:"render",value:function(){var E=this.props,R=E.title,P=E.attribute,A=E.elementRef,B=Object(Ee.a)(E,["title","attribute","elementRef"]),$=Object(D.a)(B,["eventKey"]);return Object($n.a)(!P,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),r.createElement(s.Item,Object(W.a)({},P,{title:typeof R=="string"?R:void 0},$,{ref:A}))}}]),y}(r.Component),dt=function(u){var y,j=u.style,E=u.className,R=u.eventKey,P=u.disabled,A=u.itemIcon,B=u.children,$=u.role,V=u.onMouseEnter,G=u.onMouseLeave,U=u.onClick,ae=u.onKeyDown,Y=u.onFocus,X=Object(Ee.a)(u,["style","className","eventKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"]),ie=Wn(R),z=r.useContext(O),q=z.prefixCls,ne=z.onItemClick,Q=z.disabled,se=z.overflowDisabled,k=z.itemIcon,he=z.selectedKeys,_=z.onActive,le="".concat(q,"-item"),ue=r.useRef(),te=r.useRef(),H=Q||P,oe=pe(R),fe=function(Ke){return{key:R,keyPath:oe,item:ue.current,domEvent:Ke}},me=A||k,be=v(R,H,V,G),we=be.active,ve=Object(Ee.a)(be,["active"]),ye=he.includes(R),Te=l(oe.length),Pe=function(Ke){if(!H){var Be=fe(Ke);U==null||U(d(Be)),ne(Be)}},je=function(Ke){if(ae==null||ae(Ke),Ke.which===Ie.a.ENTER){var Be=fe(Ke);U==null||U(d(Be)),ne(Be)}},Re=function(Ke){_(R),Y==null||Y(Ke)},Me={};return u.role==="option"&&(Me["aria-selected"]=ye),r.createElement(In,Object(W.a)({ref:ue,elementRef:te,role:$===null?"none":$||"menuitem",tabIndex:P?null:-1,"data-menu-id":se&&ie?null:ie},X,ve,Me,{component:"li","aria-disabled":P,style:Object(ce.a)(Object(ce.a)({},Te),j),className:Ce()(le,(y={},Object(re.a)(y,"".concat(le,"-active"),we),Object(re.a)(y,"".concat(le,"-selected"),ye),Object(re.a)(y,"".concat(le,"-disabled"),H),y),E),onClick:Pe,onKeyDown:je,onFocus:Re}),B,r.createElement(t,{props:Object(ce.a)(Object(ce.a)({},u),{},{isSelected:ye}),icon:me}))};function Sr(a){var u=a.eventKey,y=N(),j=pe(u);return r.useEffect(function(){if(y)return y.registerPath(u,j),function(){y.unregisterPath(u,j)}},[j]),y?null:r.createElement(dt,a)}var wt=Sr;function At(a,u){return Object(cn.a)(a).map(function(y,j){if(r.isValidElement(y)){var E=y.key;return E==null&&(E="tmp_key-".concat([].concat(Object(sn.a)(u),[j]).join("-"))),r.cloneElement(y,{key:E,eventKey:E})}return y})}function rt(a){var u=r.useRef(a);u.current=a;var y=r.useCallback(function(){for(var j,E=arguments.length,R=new Array(E),P=0;P<E;P++)R[P]=arguments[P];return(j=u.current)===null||j===void 0?void 0:j.call.apply(j,[u].concat(R))},[]);return a?y:void 0}var Cr=function(u,y){var j=u.className,E=u.children,R=Object(Ee.a)(u,["className","children"]),P=r.useContext(O),A=P.prefixCls,B=P.mode;return r.createElement("ul",Object(W.a)({className:Ce()(A,"".concat(A,"-sub"),"".concat(A,"-").concat(B==="inline"?"inline":"vertical"),j)},R,{"data-menu-list":!0,ref:y}),E)},Yt=r.forwardRef(Cr);Yt.displayName="SubMenuList";var Xt=Yt,Rr=e("uciX"),Ln={adjustX:1,adjustY:1},Qt={topLeft:{points:["bl","tl"],overflow:Ln,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Ln,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:Ln,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:Ln,offset:[4,0]}},jr={topLeft:{points:["bl","tl"],overflow:Ln,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Ln,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:Ln,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:Ln,offset:[4,0]}},fa=Qt;function Zt(a,u,y){if(u)return u;if(y)return y[a]||y.other}var Er={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function Dr(a){var u=a.prefixCls,y=a.visible,j=a.children,E=a.popup,R=a.popupClassName,P=a.popupOffset,A=a.disabled,B=a.mode,$=a.onVisibleChange,V=r.useContext(O),G=V.getPopupContainer,U=V.rtl,ae=V.subMenuOpenDelay,Y=V.subMenuCloseDelay,X=V.builtinPlacements,ie=V.triggerSubMenuAction,z=V.forceSubMenuRender,q=V.motion,ne=V.defaultMotions,Q=r.useState(!1),se=Object(x.a)(Q,2),k=se[0],he=se[1],_=U?Object(ce.a)(Object(ce.a)({},jr),X):Object(ce.a)(Object(ce.a)({},Qt),X),le=Er[B],ue=Zt(B,q,ne),te=Object(ce.a)(Object(ce.a)({},ue),{},{leavedClassName:"".concat(u,"-hidden"),removeOnLeave:!1,motionAppear:!0}),H=r.useRef();return r.useEffect(function(){return H.current=Object(Ve.a)(function(){he(y)}),function(){Ve.a.cancel(H.current)}},[y]),r.createElement(Rr.a,{prefixCls:u,popupClassName:Ce()("".concat(u,"-popup"),Object(re.a)({},"".concat(u,"-rtl"),U),R),stretch:B==="horizontal"?"minWidth":null,getPopupContainer:G,builtinPlacements:_,popupPlacement:le,popupVisible:k,popup:E,popupAlign:P&&{offset:P},action:A?[]:[ie],mouseEnterDelay:ae,mouseLeaveDelay:Y,onPopupVisibleChange:$,forceRender:z,popupMotion:te},j)}var Pr=e("8XRh");function Tr(a){var u=a.id,y=a.open,j=a.keyPath,E=a.children,R="inline",P=r.useContext(O),A=P.prefixCls,B=P.forceSubMenuRender,$=P.motion,V=P.defaultMotions,G=P.mode,U=r.useRef(!1);U.current=G===R;var ae=r.useState(!U.current),Y=Object(x.a)(ae,2),X=Y[0],ie=Y[1],z=U.current?y:!1;r.useEffect(function(){U.current&&ie(!1)},[G]);var q=Object(ce.a)({},Zt(R,$,V));j.length>1&&(q.motionAppear=!1);var ne=q.onVisibleChanged;return q.onVisibleChanged=function(Q){return!U.current&&!Q&&ie(!0),ne==null?void 0:ne(Q)},X?null:r.createElement(n,{mode:R,locked:!U.current},r.createElement(Pr.default,Object(W.a)({visible:z},q,{forceRender:B,removeOnLeave:!1,leavedClassName:"".concat(A,"-hidden")}),function(Q){var se=Q.className,k=Q.style;return r.createElement(Xt,{id:u,className:se,style:k},E)}))}var Nr=function(u){var y,j=u.style,E=u.className,R=u.title,P=u.eventKey,A=u.disabled,B=u.internalPopupClose,$=u.children,V=u.itemIcon,G=u.expandIcon,U=u.popupClassName,ae=u.popupOffset,Y=u.onClick,X=u.onMouseEnter,ie=u.onMouseLeave,z=u.onTitleClick,q=u.onTitleMouseEnter,ne=u.onTitleMouseLeave,Q=Object(Ee.a)(u,["style","className","title","eventKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"]),se=Wn(P),k=r.useContext(O),he=k.prefixCls,_=k.mode,le=k.openKeys,ue=k.disabled,te=k.overflowDisabled,H=k.activeKey,oe=k.selectedKeys,fe=k.itemIcon,me=k.expandIcon,be=k.onItemClick,we=k.onOpenChange,ve=k.onActive,ye=r.useContext(Oe),Te=ye.isSubPathKey,Pe=pe(),je="".concat(he,"-submenu"),Re=ue||A,Me=r.useRef(),Ge=r.useRef(),Ke=V||fe,Be=G||me,$e=le.includes(P),Ae=!te&&$e,bn=Te(oe,P),Ze=v(P,Re,q,ne),Je=Ze.active,en=Object(Ee.a)(Ze,["active"]),fn=r.useState(!1),pn=Object(x.a)(fn,2),De=pn[0],Le=pn[1],He=function(xe){Re||Le(xe)},ze=function(xe){He(!0),X==null||X({key:P,domEvent:xe})},wn=function(xe){He(!1),ie==null||ie({key:P,domEvent:xe})},zn=r.useMemo(function(){return Je||(_!=="inline"?De||Te([H],P):!1)},[_,Je,H,De,P,Te]),An=l(Pe.length),ke=function(xe){Re||(z==null||z({key:P,domEvent:xe}),_==="inline"&&we(P,!$e))},On=rt(function(Ue){Y==null||Y(d(Ue)),be(Ue)}),nn=function(xe){_!=="inline"&&we(P,xe)},Sn=function(){ve(P)},Ye=se&&"".concat(se,"-popup"),qe=r.createElement("div",Object(W.a)({role:"menuitem",style:An,className:"".concat(je,"-title"),tabIndex:Re?null:-1,ref:Me,title:typeof R=="string"?R:null,"data-menu-id":te&&se?null:se,"aria-expanded":Ae,"aria-haspopup":!0,"aria-controls":Ye,"aria-disabled":Re,onClick:ke,onFocus:Sn},en),R,r.createElement(t,{icon:_!=="horizontal"?Be:null,props:Object(ce.a)(Object(ce.a)({},u),{},{isOpen:Ae,isSubMenu:!0})},r.createElement("i",{className:"".concat(je,"-arrow")}))),Cn=r.useRef(_);if(_!=="inline"&&(Cn.current=Pe.length>1?"vertical":_),!te){var rn=Cn.current;qe=r.createElement(Dr,{mode:rn,prefixCls:je,visible:!B&&Ae&&_!=="inline",popupClassName:U,popupOffset:ae,popup:r.createElement(n,{mode:rn},r.createElement(Xt,{id:Ye,ref:Ge},$)),disabled:Re,onVisibleChange:nn},qe)}return r.createElement(n,{onItemClick:On,mode:_==="horizontal"?"vertical":_,itemIcon:Ke,expandIcon:Be},r.createElement(s.Item,Object(W.a)({role:"none"},Q,{component:"li",style:j,className:Ce()(je,"".concat(je,"-").concat(_),E,(y={},Object(re.a)(y,"".concat(je,"-open"),Ae),Object(re.a)(y,"".concat(je,"-active"),zn),Object(re.a)(y,"".concat(je,"-selected"),bn),Object(re.a)(y,"".concat(je,"-disabled"),Re),y)),onMouseEnter:ze,onMouseLeave:wn}),qe,!te&&r.createElement(Tr,{id:Ye,open:Ae,keyPath:Pe},$)))};function kt(a){var u=a.eventKey,y=a.children,j=pe(u),E=At(y,j),R=N();r.useEffect(function(){if(R)return R.registerPath(u,j),function(){R.unregisterPath(u,j)}},[j]);var P;return R?P=E:P=r.createElement(Nr,a,E),r.createElement(L.Provider,{value:j},P)}var Ir=e("x/xZ");function qt(a){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Object(Ir.a)(a)){var y=a.nodeName.toLowerCase(),j=["input","select","textarea","button"].includes(y)||a.isContentEditable||y==="a"&&!!a.getAttribute("href"),E=a.getAttribute("tabindex"),R=Number(E),P=null;return E&&!Number.isNaN(R)?P=R:j&&P===null&&(P=0),j&&a.disabled&&(P=null),P!==null&&(P>=0||u&&P<0)}return!1}function _t(a){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,y=Object(sn.a)(a.querySelectorAll("*")).filter(function(j){return qt(j,u)});return qt(a,u)&&y.unshift(a),y}var gt=null;function pa(){gt=document.activeElement}function ha(){gt=null}function va(){if(gt)try{gt.focus()}catch(a){}}function ga(a,u){if(u.keyCode===9){var y=_t(a),j=y[u.shiftKey?0:y.length-1],E=j===document.activeElement||a===document.activeElement;if(E){var R=y[u.shiftKey?y.length-1:0];R.focus(),u.preventDefault()}}}var Ft=Ie.a.LEFT,Mt=Ie.a.RIGHT,Kt=Ie.a.UP,yt=Ie.a.DOWN,bt=Ie.a.ENTER,er=Ie.a.ESC,nr=[Kt,yt,Ft,Mt];function wr(a,u,y,j){var E,R,P,A,B="prev",$="next",V="children",G="parent";if(a==="inline"&&j===bt)return{inlineTrigger:!0};var U=(E={},Object(re.a)(E,Kt,B),Object(re.a)(E,yt,$),E),ae=(R={},Object(re.a)(R,Ft,y?$:B),Object(re.a)(R,Mt,y?B:$),Object(re.a)(R,yt,V),Object(re.a)(R,bt,V),R),Y=(P={},Object(re.a)(P,Kt,B),Object(re.a)(P,yt,$),Object(re.a)(P,bt,V),Object(re.a)(P,er,G),Object(re.a)(P,Ft,y?V:G),Object(re.a)(P,Mt,y?G:V),P),X={inline:U,horizontal:ae,vertical:Y,inlineSub:U,horizontalSub:Y,verticalSub:Y},ie=(A=X["".concat(a).concat(u?"":"Sub")])===null||A===void 0?void 0:A[j];switch(ie){case B:return{offset:-1,sibling:!0};case $:return{offset:1,sibling:!0};case G:return{offset:-1,sibling:!1};case V:return{offset:1,sibling:!1};default:return null}}function Ar(a){for(var u=a;u;){if(u.getAttribute("data-menu-list"))return u;u=u.parentElement}return null}function Fr(a,u){for(var y=a||document.activeElement;y;){if(u.has(y))return y;y=y.parentElement}return null}function Mr(a,u){var y=_t(a,!0);return y.filter(function(j){return u.has(j)})}function tr(a,u,y){var j=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!a)return null;var E=Mr(a,u),R=E.length,P=E.findIndex(function(A){return y===A});return j<0?P===-1?P=R-1:P-=1:j>0&&(P+=1),P=(P+R)%R,E[P]}function Kr(a,u,y,j,E,R,P,A,B,$){var V=r.useRef(),G=r.useRef();G.current=u;var U=function(){Ve.a.cancel(V.current)};return r.useEffect(function(){return function(){U()}},[]),function(ae){var Y=ae.which;if([].concat(nr,[bt,er]).includes(Y)){var X,ie,z,q=function(){X=new Set,ie=new Map,z=new Map;var fe=R();return fe.forEach(function(me){var be=document.querySelector("[data-menu-id='".concat(yn(j,me),"']"));be&&(X.add(be),z.set(be,me),ie.set(me,be))}),X};q();var ne=ie.get(u),Q=Fr(ne,X),se=z.get(Q),k=wr(a,P(se,!0).length===1,y,Y);if(!k)return;nr.includes(Y)&&ae.preventDefault();var he=function(fe){if(fe){var me=fe,be=fe.querySelector("a");(be==null?void 0:be.getAttribute("href"))&&(me=be);var we=z.get(fe);A(we),U(),V.current=Object(Ve.a)(function(){G.current===we&&me.focus()})}};if(k.sibling||!Q){var _;!Q||a==="inline"?_=E.current:_=Ar(Q);var le=tr(_,X,Q,k.offset);he(le)}else if(k.inlineTrigger)B(se);else if(k.offset>0)B(se,!0),U(),V.current=Object(Ve.a)(function(){q();var oe=Q.getAttribute("aria-controls"),fe=document.getElementById(oe),me=tr(fe,X);he(me)},5);else if(k.offset<0){var ue=P(se,!0),te=ue[ue.length-2],H=ie.get(te);B(te,!1),he(H)}}$==null||$(ae)}}var Br=Math.random().toFixed(5).toString().slice(2),rr=0;function Wr(a){var u=Object(Qe.a)(a,{value:a}),y=Object(x.a)(u,2),j=y[0],E=y[1];return r.useEffect(function(){rr+=1;var R="".concat(Br,"-").concat(rr);E("rc-menu-uuid-".concat(R))},[]),j}var ya=e("p8sG");function Lr(a){Promise.resolve().then(a)}var Bt="__RC_UTIL_PATH_SPLIT__",ar=function(u){return u.join(Bt)},xr=function(u){return u.split(Bt)},Wt="rc-menu-more";function $r(){var a=r.useState({}),u=Object(x.a)(a,2),y=u[1],j=Object(r.useRef)(new Map),E=Object(r.useRef)(new Map),R=r.useState([]),P=Object(x.a)(R,2),A=P[0],B=P[1],$=Object(r.useRef)(0),V=Object(r.useCallback)(function(z,q){var ne=ar(q);E.current.set(ne,z),j.current.set(z,ne),$.current+=1;var Q=$.current;Lr(function(){Q===$.current&&y({})})},[]),G=Object(r.useCallback)(function(z,q){var ne=ar(q);E.current.delete(ne),j.current.delete(z)},[]),U=Object(r.useCallback)(function(z){B(z)},[]),ae=Object(r.useCallback)(function(z,q){var ne=j.current.get(z)||"",Q=xr(ne);return q&&A.includes(Q[0])&&Q.unshift(Wt),Q},[A]),Y=Object(r.useCallback)(function(z,q){return z.some(function(ne){var Q=ae(ne,!0);return Q.includes(q)})},[ae]),X=function(){var q=Object(sn.a)(j.current.keys());return A.length&&q.push(Wt),q},ie=Object(r.useCallback)(function(z){var q="".concat(j.current.get(z)).concat(Bt),ne=new Set;return Object(sn.a)(E.current.keys()).forEach(function(Q){Q.startsWith(q)&&ne.add(E.current.get(Q))}),ne},[]);return{registerPath:V,unregisterPath:G,refreshOverflowKeys:U,isSubPathKey:Y,getKeyPath:ae,getKeys:X,getSubPathKeys:ie}}var Ot=[],Vr=function(u){var y,j,E=u.prefixCls,R=E===void 0?"rc-menu":E,P=u.style,A=u.className,B=u.tabIndex,$=B===void 0?0:B,V=u.children,G=u.direction,U=u.id,ae=u.mode,Y=ae===void 0?"vertical":ae,X=u.inlineCollapsed,ie=u.disabled,z=u.disabledOverflow,q=u.subMenuOpenDelay,ne=q===void 0?.1:q,Q=u.subMenuCloseDelay,se=Q===void 0?.1:Q,k=u.forceSubMenuRender,he=u.defaultOpenKeys,_=u.openKeys,le=u.activeKey,ue=u.defaultActiveFirst,te=u.selectable,H=te===void 0?!0:te,oe=u.multiple,fe=oe===void 0?!1:oe,me=u.defaultSelectedKeys,be=u.selectedKeys,we=u.onSelect,ve=u.onDeselect,ye=u.inlineIndent,Te=ye===void 0?24:ye,Pe=u.motion,je=u.defaultMotions,Re=u.triggerSubMenuAction,Me=Re===void 0?"hover":Re,Ge=u.builtinPlacements,Ke=u.itemIcon,Be=u.expandIcon,$e=u.overflowedIndicator,Ae=$e===void 0?"...":$e,bn=u.getPopupContainer,Ze=u.onClick,Je=u.onOpenChange,en=u.onKeyDown,fn=u.openAnimation,pn=u.openTransitionName,De=Object(Ee.a)(u,["prefixCls","style","className","tabIndex","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName"]),Le=At(V,Ot),He=r.useState(!1),ze=Object(x.a)(He,2),wn=ze[0],zn=ze[1],An=r.useRef(),ke=Wr(U),On=G==="rtl",nn=r.useMemo(function(){return Y==="inline"&&X?["vertical",X]:[Y,!1]},[Y,X]),Sn=Object(x.a)(nn,2),Ye=Sn[0],qe=Sn[1],Cn=r.useState(0),rn=Object(x.a)(Cn,2),Ue=rn[0],xe=rn[1],Un=Ue>=Le.length-1||Ye!=="horizontal"||z,Gn=Object(Qe.a)(he,{value:_,postState:function(Z){return Z||Ot}}),at=Object(x.a)(Gn,2),hn=at[0],un=at[1],Hn=r.useState(hn),vn=Object(x.a)(Hn,2),an=vn[0],Yn=vn[1],Rn=Ye==="inline",Xn=r.useRef(!1);r.useEffect(function(){Rn&&Yn(hn)},[hn]),r.useEffect(function(){if(!Xn.current){Xn.current=!0;return}if(Rn)un(an);else{var ee=[];un(ee),Je==null||Je(ee)}},[Rn]);var tn=$r(),jn=tn.registerPath,de=tn.unregisterPath,Se=tn.refreshOverflowKeys,Ne=tn.isSubPathKey,Xe=tn.getKeyPath,Qn=tn.getKeys,Ct=tn.getSubPathKeys,Vt=r.useMemo(function(){return{registerPath:jn,unregisterPath:de}},[jn,de]),Jt=r.useMemo(function(){return{isSubPathKey:Ne}},[Ne]);r.useEffect(function(){Se(Un?Ot:Le.slice(Ue+1).map(function(ee){return ee.key}))},[Ue,Un]);var zt=Object(Qe.a)(le||ue&&((y=Le[0])===null||y===void 0?void 0:y.key),{value:le}),st=Object(x.a)(zt,2),Rt=st[0],mt=st[1],jt=rt(function(ee){mt(ee)}),Ut=rt(function(){mt(void 0)}),Et=Object(Qe.a)(me||[],{value:be,postState:function(Z){return Array.isArray(Z)?Z:Z==null?Ot:[Z]}}),Dt=Object(x.a)(Et,2),it=Dt[0],En=Dt[1],Pt=function(Z){if(!!H){var ge=Z.key,We=it.includes(ge),_e;We?_e=it.filter(function(kn){return kn!==ge}):fe?_e=[].concat(Object(sn.a)(it),[ge]):_e=[ge],En(_e);var xn=Object(ce.a)(Object(ce.a)({},Z),{},{selectedKeys:_e});We?ve==null||ve(xn):we==null||we(xn)}},Tt=rt(function(ee){Ze==null||Ze(d(ee)),Pt(ee)}),ft=rt(function(ee,Z){var ge=hn.filter(function(_e){return _e!==ee});if(Z)ge.push(ee);else if(Ye!=="inline"){var We=Ct(ee);ge=ge.filter(function(_e){return!We.has(_e)})}nt()(hn,ge)||(un(ge),Je==null||Je(ge))}),Zn=rt(bn),pt=function(Z,ge){var We=ge!=null?ge:!hn.includes(Z);ft(Z,We)},ht=Kr(Ye,Rt,On,ke,An,Qn,Xe,mt,pt,en);r.useEffect(function(){zn(!0)},[]);var Nt=Ye!=="horizontal"||z?Le:Le.map(function(ee,Z){return r.createElement(n,{key:ee.key,overflowDisabled:Z>Ue},ee)}),It=r.createElement(s,Object(W.a)({id:U,ref:An,prefixCls:"".concat(R,"-overflow"),component:"ul",itemComponent:wt,className:Ce()(R,"".concat(R,"-root"),"".concat(R,"-").concat(Ye),A,(j={},Object(re.a)(j,"".concat(R,"-inline-collapsed"),qe),Object(re.a)(j,"".concat(R,"-rtl"),On),j)),dir:G,style:P,role:"menu",tabIndex:$,data:Nt,renderRawItem:function(Z){return Z},renderRawRest:function(Z){var ge=Z.length,We=ge?Le.slice(-ge):null;return r.createElement(kt,{eventKey:Wt,title:Ae,disabled:Un,internalPopupClose:ge===0},We)},maxCount:Ye!=="horizontal"||z?s.INVALIDATE:s.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(Z){xe(Z)},onKeyDown:ht},De));return r.createElement(on.Provider,{value:ke},r.createElement(n,{prefixCls:R,mode:Ye,openKeys:hn,rtl:On,disabled:ie,motion:wn?Pe:null,defaultMotions:wn?je:null,activeKey:Rt,onActive:jt,onInactive:Ut,selectedKeys:it,inlineIndent:Te,subMenuOpenDelay:ne,subMenuCloseDelay:se,forceSubMenuRender:k,builtinPlacements:Ge,triggerSubMenuAction:Me,getPopupContainer:Zn,itemIcon:Ke,expandIcon:Be,onItemClick:Tt,onOpenChange:ft},r.createElement(Oe.Provider,{value:Jt},It),r.createElement(M.Provider,{value:Vt},Le)))},Jr=Vr,zr=function(u){var y=u.className,j=u.title,E=u.eventKey,R=u.children,P=Object(Ee.a)(u,["className","title","eventKey","children"]),A=r.useContext(O),B=A.prefixCls,$="".concat(B,"-item-group");return r.createElement("li",Object(W.a)({},P,{onClick:function(G){return G.stopPropagation()},className:Ce()($,y)}),r.createElement("div",{className:"".concat($,"-title"),title:typeof j=="string"?j:void 0},j),r.createElement("ul",{className:"".concat($,"-list")},R))};function Ur(a){var u=a.children,y=Object(Ee.a)(a,["children"]),j=pe(y.eventKey),E=At(u,j),R=N();return R?E:r.createElement(zr,y,E)}function Gr(a){var u=a.className,y=a.style,j=r.useContext(O),E=j.prefixCls,R=N();return R?null:r.createElement("li",{className:Ce()("".concat(E,"-item-divider"),u),style:y})}var ct=Jr;ct.Item=wt,ct.SubMenu=kt,ct.ItemGroup=Ur,ct.Divider=Gr;var Hr=ct,Yr=e("eDIo");function Xr(a,u){var y=a.prefixCls,j=a.editable,E=a.locale,R=a.style;return!j||j.showAdd===!1?null:r.createElement("button",{ref:u,type:"button",className:"".concat(y,"-nav-add"),style:R,"aria-label":(E==null?void 0:E.addAriaLabel)||"Add tab",onClick:function(A){j.onEdit("add",{event:A})}},j.addIcon||"+")}var sr=r.forwardRef(Xr);function Qr(a,u){var y=a.prefixCls,j=a.id,E=a.tabs,R=a.locale,P=a.mobile,A=a.moreIcon,B=A===void 0?"More":A,$=a.moreTransitionName,V=a.style,G=a.className,U=a.editable,ae=a.tabBarGutter,Y=a.rtl,X=a.onTabClick,ie=Object(r.useState)(!1),z=Object(x.a)(ie,2),q=z[0],ne=z[1],Q=Object(r.useState)(null),se=Object(x.a)(Q,2),k=se[0],he=se[1],_="".concat(j,"-more-popup"),le="".concat(y,"-dropdown"),ue=k!==null?"".concat(_,"-").concat(k):null,te=R==null?void 0:R.dropdownAriaLabel,H=r.createElement(Hr,{onClick:function(ye){var Te=ye.key,Pe=ye.domEvent;X(Te,Pe),ne(!1)},id:_,tabIndex:-1,role:"listbox","aria-activedescendant":ue,selectedKeys:[k],"aria-label":te!==void 0?te:"expanded dropdown"},E.map(function(ve){return r.createElement(wt,{key:ve.key,id:"".concat(_,"-").concat(ve.key),role:"option","aria-controls":j&&"".concat(j,"-panel-").concat(ve.key),disabled:ve.disabled},ve.tab)}));function oe(ve){for(var ye=E.filter(function(Me){return!Me.disabled}),Te=ye.findIndex(function(Me){return Me.key===k})||0,Pe=ye.length,je=0;je<Pe;je+=1){Te=(Te+ve+Pe)%Pe;var Re=ye[Te];if(!Re.disabled){he(Re.key);return}}}function fe(ve){var ye=ve.which;if(!q){[Ie.a.DOWN,Ie.a.SPACE,Ie.a.ENTER].includes(ye)&&(ne(!0),ve.preventDefault());return}switch(ye){case Ie.a.UP:oe(-1),ve.preventDefault();break;case Ie.a.DOWN:oe(1),ve.preventDefault();break;case Ie.a.ESC:ne(!1);break;case Ie.a.SPACE:case Ie.a.ENTER:k!==null&&X(k,ve);break}}Object(r.useEffect)(function(){var ve=document.getElementById(ue);ve&&ve.scrollIntoView&&ve.scrollIntoView(!1)},[k]),Object(r.useEffect)(function(){q||he(null)},[q]);var me=Object(re.a)({},Y?"marginLeft":"marginRight",ae);E.length||(me.visibility="hidden",me.order=1);var be=Ce()(Object(re.a)({},"".concat(le,"-rtl"),Y)),we=P?null:r.createElement(Yr.default,{prefixCls:le,overlay:H,trigger:["hover"],visible:q,transitionName:$,onVisibleChange:ne,overlayClassName:be,mouseEnterDelay:.1,mouseLeaveDelay:.1},r.createElement("button",{type:"button",className:"".concat(y,"-nav-more"),style:me,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":_,id:"".concat(j,"-more"),"aria-expanded":q,onKeyDown:fe},B));return r.createElement("div",{className:Ce()("".concat(y,"-nav-operations"),G),style:V,ref:u},we,r.createElement(sr,{prefixCls:y,locale:R,editable:U}))}var Zr=r.forwardRef(Qr),Lt=Object(r.createContext)(null),kr=.1,ir=.01,St=20,or=Math.pow(.995,St);function qr(a,u){var y=Object(r.useState)(),j=Object(x.a)(y,2),E=j[0],R=j[1],P=Object(r.useState)(0),A=Object(x.a)(P,2),B=A[0],$=A[1],V=Object(r.useState)(0),G=Object(x.a)(V,2),U=G[0],ae=G[1],Y=Object(r.useState)(),X=Object(x.a)(Y,2),ie=X[0],z=X[1],q=Object(r.useRef)();function ne(le){var ue=le.touches[0],te=ue.screenX,H=ue.screenY;R({x:te,y:H}),window.clearInterval(q.current)}function Q(le){if(!!E){le.preventDefault();var ue=le.touches[0],te=ue.screenX,H=ue.screenY;R({x:te,y:H});var oe=te-E.x,fe=H-E.y;u(oe,fe);var me=Date.now();$(me),ae(me-B),z({x:oe,y:fe})}}function se(){if(!!E&&(R(null),z(null),ie)){var le=ie.x/U,ue=ie.y/U,te=Math.abs(le),H=Math.abs(ue);if(Math.max(te,H)<kr)return;var oe=le,fe=ue;q.current=window.setInterval(function(){if(Math.abs(oe)<ir&&Math.abs(fe)<ir){window.clearInterval(q.current);return}oe*=or,fe*=or,u(oe*St,fe*St)},St)}}var k=Object(r.useRef)();function he(le){var ue=le.deltaX,te=le.deltaY,H=0,oe=Math.abs(ue),fe=Math.abs(te);oe===fe?H=k.current==="x"?ue:te:oe>fe?(H=ue,k.current="x"):(H=te,k.current="y"),u(-H,-H)&&le.preventDefault()}var _=Object(r.useRef)(null);_.current={onTouchStart:ne,onTouchMove:Q,onTouchEnd:se,onWheel:he},r.useEffect(function(){function le(oe){_.current.onTouchStart(oe)}function ue(oe){_.current.onTouchMove(oe)}function te(oe){_.current.onTouchEnd(oe)}function H(oe){_.current.onWheel(oe)}return document.addEventListener("touchmove",ue,{passive:!1}),document.addEventListener("touchend",te,{passive:!1}),a.current.addEventListener("touchstart",le,{passive:!1}),a.current.addEventListener("wheel",H),function(){document.removeEventListener("touchmove",ue),document.removeEventListener("touchend",te)}},[])}function _r(){var a=Object(r.useRef)(new Map);function u(j){return a.current.has(j)||a.current.set(j,r.createRef()),a.current.get(j)}function y(j){a.current.delete(j)}return[u,y]}function lr(a,u){var y=r.useRef(a),j=r.useState({}),E=Object(x.a)(j,2),R=E[1];function P(A){var B=typeof A=="function"?A(y.current):A;B!==y.current&&u(B,y.current),y.current=B,R({})}return[y.current,P]}var ur=function(u){var y=u.position,j=u.prefixCls,E=u.extra;if(!E)return null;var R,P=E;return y==="right"&&(R=P.right||!P.left&&P||null),y==="left"&&(R=P.left||null),R?r.createElement("div",{className:"".concat(j,"-extra-content")},R):null};function ea(a,u){var y,j=r.useContext(Lt),E=j.prefixCls,R=j.tabs,P=a.className,A=a.style,B=a.id,$=a.animated,V=a.activeKey,G=a.rtl,U=a.extra,ae=a.editable,Y=a.locale,X=a.tabPosition,ie=a.tabBarGutter,z=a.children,q=a.onTabClick,ne=a.onTabScroll,Q=Object(r.useRef)(),se=Object(r.useRef)(),k=Object(r.useRef)(),he=Object(r.useRef)(),_=_r(),le=Object(x.a)(_,2),ue=le[0],te=le[1],H=X==="top"||X==="bottom",oe=lr(0,function(ee,Z){H&&ne&&ne({direction:ee>Z?"left":"right"})}),fe=Object(x.a)(oe,2),me=fe[0],be=fe[1],we=lr(0,function(ee,Z){!H&&ne&&ne({direction:ee>Z?"top":"bottom"})}),ve=Object(x.a)(we,2),ye=ve[0],Te=ve[1],Pe=Object(r.useState)(0),je=Object(x.a)(Pe,2),Re=je[0],Me=je[1],Ge=Object(r.useState)(0),Ke=Object(x.a)(Ge,2),Be=Ke[0],$e=Ke[1],Ae=Object(r.useState)(0),bn=Object(x.a)(Ae,2),Ze=bn[0],Je=bn[1],en=Object(r.useState)(0),fn=Object(x.a)(en,2),pn=fn[0],De=fn[1],Le=Object(r.useState)(null),He=Object(x.a)(Le,2),ze=He[0],wn=He[1],zn=Object(r.useState)(null),An=Object(x.a)(zn,2),ke=An[0],On=An[1],nn=Object(r.useState)(0),Sn=Object(x.a)(nn,2),Ye=Sn[0],qe=Sn[1],Cn=Object(r.useState)(0),rn=Object(x.a)(Cn,2),Ue=rn[0],xe=rn[1],Un=gn(new Map),Gn=Object(x.a)(Un,2),at=Gn[0],hn=Gn[1],un=ot(R,at,Re),Hn="".concat(E,"-nav-operations-hidden"),vn=0,an=0;H?G?(vn=0,an=Math.max(0,Re-ze)):(vn=Math.min(0,ze-Re),an=0):(vn=Math.min(0,ke-Be),an=0);function Yn(ee){return ee<vn?vn:ee>an?an:ee}var Rn=Object(r.useRef)(),Xn=Object(r.useState)(),tn=Object(x.a)(Xn,2),jn=tn[0],de=tn[1];function Se(){de(Date.now())}function Ne(){window.clearTimeout(Rn.current)}qr(Q,function(ee,Z){function ge(We,_e){We(function(xn){var kn=Yn(xn+_e);return kn})}if(H){if(ze>=Re)return!1;ge(be,ee)}else{if(ke>=Be)return!1;ge(Te,Z)}return Ne(),Se(),!0}),Object(r.useEffect)(function(){return Ne(),jn&&(Rn.current=window.setTimeout(function(){de(0)},100)),Ne},[jn]);function Xe(){var ee=arguments.length>0&&arguments[0]!==void 0?arguments[0]:V,Z=un.get(ee)||{width:0,height:0,left:0,right:0,top:0};if(H){var ge=me;G?Z.right<me?ge=Z.right:Z.right+Z.width>me+ze&&(ge=Z.right+Z.width-ze):Z.left<-me?ge=-Z.left:Z.left+Z.width>-me+ze&&(ge=-(Z.left+Z.width-ze)),Te(0),be(Yn(ge))}else{var We=ye;Z.top<-ye?We=-Z.top:Z.top+Z.height>-ye+ke&&(We=-(Z.top+Z.height-ke)),be(0),Te(Yn(We))}}var Qn=lt(un,{width:ze,height:ke,left:me,top:ye},{width:Ze,height:pn},{width:Ye,height:Ue},Object(ce.a)(Object(ce.a)({},a),{},{tabs:R})),Ct=Object(x.a)(Qn,2),Vt=Ct[0],Jt=Ct[1],zt=R.map(function(ee){var Z=ee.key;return r.createElement(Mn,{id:B,prefixCls:E,key:Z,rtl:G,tab:ee,closable:ee.closable,editable:ae,active:Z===V,tabPosition:X,tabBarGutter:ie,renderWrapper:z,removeAriaLabel:Y==null?void 0:Y.removeAriaLabel,ref:ue(Z),onClick:function(We){q(Z,We)},onRemove:function(){te(Z)},onFocus:function(){Xe(Z),Se(),G||(Q.current.scrollLeft=0),Q.current.scrollTop=0}})}),st=Tn(function(){var ee,Z,ge,We,_e,xn,kn,Gt,Ht,la=((ee=Q.current)===null||ee===void 0?void 0:ee.offsetWidth)||0,ua=((Z=Q.current)===null||Z===void 0?void 0:Z.offsetHeight)||0,pr=((ge=he.current)===null||ge===void 0?void 0:ge.offsetWidth)||0,hr=((We=he.current)===null||We===void 0?void 0:We.offsetHeight)||0,da=((_e=k.current)===null||_e===void 0?void 0:_e.offsetWidth)||0,ca=((xn=k.current)===null||xn===void 0?void 0:xn.offsetHeight)||0;wn(la),On(ua),qe(pr),xe(hr);var vr=(((kn=se.current)===null||kn===void 0?void 0:kn.offsetWidth)||0)-pr,gr=(((Gt=se.current)===null||Gt===void 0?void 0:Gt.offsetHeight)||0)-hr;Me(vr),$e(gr);var yr=(Ht=k.current)===null||Ht===void 0?void 0:Ht.className.includes(Hn);Je(vr-(yr?0:da)),De(gr-(yr?0:ca)),hn(function(){var br=new Map;return R.forEach(function(ma){var Or=ma.key,vt=ue(Or).current;vt&&br.set(Or,{width:vt.offsetWidth,height:vt.offsetHeight,left:vt.offsetLeft,top:vt.offsetTop})}),br})}),Rt=R.slice(0,Vt),mt=R.slice(Jt+1),jt=[].concat(Object(sn.a)(Rt),Object(sn.a)(mt)),Ut=Object(r.useState)(),Et=Object(x.a)(Ut,2),Dt=Et[0],it=Et[1],En=un.get(V),Pt=Object(r.useRef)();function Tt(){Ve.a.cancel(Pt.current)}Object(r.useEffect)(function(){var ee={};return En&&(H?(G?ee.right=En.right:ee.left=En.left,ee.width=En.width):(ee.top=En.top,ee.height=En.height)),Tt(),Pt.current=Object(Ve.a)(function(){it(ee)}),Tt},[En,H,G]),Object(r.useEffect)(function(){Xe()},[V,En,un,H]),Object(r.useEffect)(function(){st()},[G,ie,V,R.map(function(ee){return ee.key}).join("_")]);var ft=!!jt.length,Zn="".concat(E,"-nav-wrap"),pt,ht,Nt,It;return H?G?(ht=me>0,pt=me+ze<Re):(pt=me<0,ht=-me+ze<Re):(Nt=ye<0,It=-ye+ke<Be),r.createElement("div",{ref:u,role:"tablist",className:Ce()("".concat(E,"-nav"),P),style:A,onKeyDown:function(){Se()}},r.createElement(ur,{position:"left",extra:U,prefixCls:E}),r.createElement(Fn.default,{onResize:st},r.createElement("div",{className:Ce()(Zn,(y={},Object(re.a)(y,"".concat(Zn,"-ping-left"),pt),Object(re.a)(y,"".concat(Zn,"-ping-right"),ht),Object(re.a)(y,"".concat(Zn,"-ping-top"),Nt),Object(re.a)(y,"".concat(Zn,"-ping-bottom"),It),y)),ref:Q},r.createElement(Fn.default,{onResize:st},r.createElement("div",{ref:se,className:"".concat(E,"-nav-list"),style:{transform:"translate(".concat(me,"px, ").concat(ye,"px)"),transition:jn?"none":void 0}},zt,r.createElement(sr,{ref:he,prefixCls:E,locale:Y,editable:ae,style:{visibility:ft?"hidden":null}}),r.createElement("div",{className:Ce()("".concat(E,"-ink-bar"),Object(re.a)({},"".concat(E,"-ink-bar-animated"),$.inkBar)),style:Dt}))))),r.createElement(Zr,Object(W.a)({},a,{ref:k,prefixCls:E,tabs:jt,className:!ft&&Hn})),r.createElement(ur,{position:"right",extra:U,prefixCls:E}))}var dr=r.forwardRef(ea);function na(a){var u=a.id,y=a.activeKey,j=a.animated,E=a.tabPosition,R=a.rtl,P=a.destroyInactiveTabPane,A=r.useContext(Lt),B=A.prefixCls,$=A.tabs,V=j.tabPane,G=$.findIndex(function(U){return U.key===y});return r.createElement("div",{className:Ce()("".concat(B,"-content-holder"))},r.createElement("div",{className:Ce()("".concat(B,"-content"),"".concat(B,"-content-").concat(E),Object(re.a)({},"".concat(B,"-content-animated"),V)),style:G&&V?Object(re.a)({},R?"marginRight":"marginLeft","-".concat(G,"00%")):null},$.map(function(U){return r.cloneElement(U.node,{key:U.key,prefixCls:B,tabKey:U.key,id:u,animated:V,active:U.key===y,destroyInactiveTabPane:P})})))}function cr(a){var u=a.prefixCls,y=a.forceRender,j=a.className,E=a.style,R=a.id,P=a.active,A=a.animated,B=a.destroyInactiveTabPane,$=a.tabKey,V=a.children,G=r.useState(y),U=Object(x.a)(G,2),ae=U[0],Y=U[1];r.useEffect(function(){P?Y(!0):B&&Y(!1)},[P,B]);var X={};return P||(A?(X.visibility="hidden",X.height=0,X.overflowY="hidden"):X.display="none"),r.createElement("div",{id:R&&"".concat(R,"-panel-").concat($),role:"tabpanel",tabIndex:P?0:-1,"aria-labelledby":R&&"".concat(R,"-tab-").concat($),"aria-hidden":!P,style:Object(ce.a)(Object(ce.a)({},X),E),className:Ce()("".concat(u,"-tabpane"),P&&"".concat(u,"-tabpane-active"),j)},(P||ae||y)&&V)}var mr=0;function ta(a){return Object(cn.a)(a).map(function(u){if(r.isValidElement(u)){var y=u.key!==void 0?String(u.key):void 0;return Object(ce.a)(Object(ce.a)({key:y},u.props),{},{node:u})}return null}).filter(function(u){return u})}function ra(a,u){var y,j=a.id,E=a.prefixCls,R=E===void 0?"rc-tabs":E,P=a.className,A=a.children,B=a.direction,$=a.activeKey,V=a.defaultActiveKey,G=a.editable,U=a.animated,ae=U===void 0?{inkBar:!0,tabPane:!1}:U,Y=a.tabPosition,X=Y===void 0?"top":Y,ie=a.tabBarGutter,z=a.tabBarStyle,q=a.tabBarExtraContent,ne=a.locale,Q=a.moreIcon,se=a.moreTransitionName,k=a.destroyInactiveTabPane,he=a.renderTabBar,_=a.onChange,le=a.onTabClick,ue=a.onTabScroll,te=Object(Ee.a)(a,["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"]),H=ta(A),oe=B==="rtl",fe;ae===!1?fe={inkBar:!1,tabPane:!1}:ae===!0?fe={inkBar:!0,tabPane:!0}:fe=Object(ce.a)({inkBar:!0,tabPane:!1},Object(Fe.a)(ae)==="object"?ae:{});var me=Object(r.useState)(!1),be=Object(x.a)(me,2),we=be[0],ve=be[1];Object(r.useEffect)(function(){ve(Object(mn.a)())},[]);var ye=Object(Qe.a)(function(){var De;return(De=H[0])===null||De===void 0?void 0:De.key},{value:$,defaultValue:V}),Te=Object(x.a)(ye,2),Pe=Te[0],je=Te[1],Re=Object(r.useState)(function(){return H.findIndex(function(De){return De.key===Pe})}),Me=Object(x.a)(Re,2),Ge=Me[0],Ke=Me[1];Object(r.useEffect)(function(){var De=H.findIndex(function(He){return He.key===Pe});if(De===-1){var Le;De=Math.max(0,Math.min(Ge,H.length-1)),je((Le=H[De])===null||Le===void 0?void 0:Le.key)}Ke(De)},[H.map(function(De){return De.key}).join("_"),Pe,Ge]);var Be=Object(Qe.a)(null,{value:j}),$e=Object(x.a)(Be,2),Ae=$e[0],bn=$e[1],Ze=X;we&&!["left","right"].includes(X)&&(Ze="top"),Object(r.useEffect)(function(){j||(bn("rc-tabs-".concat(mr)),mr+=1)},[]);function Je(De,Le){le==null||le(De,Le),je(De),_==null||_(De)}var en={id:Ae,activeKey:Pe,animated:fe,tabPosition:Ze,rtl:oe,mobile:we},fn,pn=Object(ce.a)(Object(ce.a)({},en),{},{editable:G,locale:ne,moreIcon:Q,moreTransitionName:se,tabBarGutter:ie,onTabClick:Je,onTabScroll:ue,extra:q,style:z,panes:A});return he?fn=he(pn,dr):fn=r.createElement(dr,pn),r.createElement(Lt.Provider,{value:{tabs:H,prefixCls:R}},r.createElement("div",Object(W.a)({ref:u,id:j,className:Ce()(R,"".concat(R,"-").concat(Ze),(y={},Object(re.a)(y,"".concat(R,"-mobile"),we),Object(re.a)(y,"".concat(R,"-editable"),G),Object(re.a)(y,"".concat(R,"-rtl"),oe),y),P)},te),fn,r.createElement(na,Object(W.a)({destroyInactiveTabPane:k},en,{animated:fe}))))}var fr=r.forwardRef(ra);fr.TabPane=cr;var aa=fr,sa=aa,xt=e("MZF8"),ln=e("dEAq"),ia=e("ZpkN"),ba=e("TIsu");function $t(a,u){var y,j=(y=a.match(/\.(\w+)$/))===null||y===void 0?void 0:y[1];return j||(j=u.tsx?"tsx":"jsx"),j}var oa=a=>{var u,y,j,E=Object(r.useRef)(),R=Object(r.useContext)(ln.context),P=R.locale,A=Object(ln.useLocaleProps)(P,a),B=Object(ln.useDemoUrl)(A.identifier),$=A.demoUrl||B,V=(xt.a===null||xt.a===void 0?void 0:xt.a.location.hash)==="#".concat(A.identifier),G=Object.keys(A.sources).length===1,U=Object(ln.useCodeSandbox)((u=A.hideActions)!==null&&u!==void 0&&u.includes("CSB")?null:A),ae=Object(ln.useRiddle)((y=A.hideActions)!==null&&y!==void 0&&y.includes("RIDDLE")?null:A),Y=Object(ln.useMotions)(A.motions||[],E.current),X=Object(J.default)(Y,2),ie=X[0],z=X[1],q=Object(ln.useCopy)(),ne=Object(J.default)(q,2),Q=ne[0],se=ne[1],k=Object(r.useState)("_"),he=Object(J.default)(k,2),_=he[0],le=he[1],ue=Object(r.useState)($t(_,A.sources[_])),te=Object(J.default)(ue,2),H=te[0],oe=te[1],fe=Object(r.useState)(Boolean(A.defaultShowCode)),me=Object(J.default)(fe,2),be=me[0],we=me[1],ve=Object(r.useState)(Math.random()),ye=Object(J.default)(ve,2),Te=ye[0],Pe=ye[1],je=A.sources[_][H]||A.sources[_].content,Re=Object(ln.useTSPlaygroundUrl)(P,je),Me=Object(r.useRef)(),Ge=Object(ln.usePrefersColor)(),Ke=Object(J.default)(Ge,1),Be=Ke[0];Object(r.useEffect)(()=>{Pe(Math.random())},[Be]);function $e(Ae){le(Ae),oe($t(Ae,A.sources[Ae]))}return S.a.createElement("div",{style:A.style,className:[A.className,"__dumi-default-previewer",V?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:A.identifier,"data-debug":A.debug||void 0,"data-iframe":A.iframe||void 0},A.iframe&&S.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),S.a.createElement("div",{ref:E,className:"__dumi-default-previewer-demo",style:{transform:A.transform?"translate(0, 0)":void 0,padding:A.compact||A.iframe&&A.compact!==!1?"0":void 0,background:A.background}},A.iframe?S.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(A.iframe).replace(/(\d)$/,"$1px")},key:Te,src:$,ref:Me}):A.children),S.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":A.title},A.title&&S.a.createElement(ln.AnchorLink,{to:"#".concat(A.identifier)},A.title),A.description&&S.a.createElement("div",{dangerouslySetInnerHTML:{__html:A.description}})),S.a.createElement("div",{className:"__dumi-default-previewer-actions"},U&&S.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:U}),ae&&S.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:ae}),A.motions&&S.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:z,onClick:()=>ie()}),A.iframe&&S.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:()=>Pe(Math.random())}),!((j=A.hideActions)!==null&&j!==void 0&&j.includes("EXTERNAL"))&&S.a.createElement(ln.Link,{target:"_blank",to:$},S.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),S.a.createElement("span",null),S.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":se,onClick:()=>Q(je)}),H==="tsx"&&be&&S.a.createElement(ln.Link,{target:"_blank",to:Re},S.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),S.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(be?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:()=>we(!be)})),be&&S.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!G&&S.a.createElement(sa,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xB7\xB7\xB7",defaultActiveKey:_,onChange:$e},Object.keys(A.sources).map(Ae=>S.a.createElement(cr,{tab:Ae==="_"?"index.".concat($t(Ae,A.sources[Ae])):Ae,key:Ae}))),S.a.createElement("div",{className:"__dumi-default-previewer-source"},S.a.createElement(ia.a,{code:je,lang:H,showCopy:!1}))))},Oa=dn.default=oa},"80pN":function(Dn,dn,e){"use strict";(function(J){/** @license React v16.14.0
* react-dom-test-utils.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var r=e("MgzW"),S=e("q1tI"),W=e("i8i4"),re=e("QCnb");function x(t){for(var l="https://reactjs.org/docs/error-decoder.html?invariant="+t,f=1;f<arguments.length;f++)l+="&args[]="+encodeURIComponent(arguments[f]);return"Minified React error #"+t+"; visit "+l+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Fe=S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;Fe.hasOwnProperty("ReactCurrentDispatcher")||(Fe.ReactCurrentDispatcher={current:null}),Fe.hasOwnProperty("ReactCurrentBatchConfig")||(Fe.ReactCurrentBatchConfig={suspense:null});function Ee(t){var l=t,f=t;if(t.alternate)for(;l.return;)l=l.return;else{t=l;do l=t,(l.effectTag&1026)!=0&&(f=l.return),t=l.return;while(t)}return l.tag===3?f:null}function ce(t){if(Ee(t)!==t)throw Error(x(188))}function Pn(t){var l=t.alternate;if(!l){if(l=Ee(t),l===null)throw Error(x(188));return l!==t?null:t}for(var f=t,M=l;;){var N=f.return;if(N===null)break;var L=N.alternate;if(L===null){if(M=N.return,M!==null){f=M;continue}break}if(N.child===L.child){for(L=N.child;L;){if(L===f)return ce(N),t;if(L===M)return ce(N),l;L=L.sibling}throw Error(x(188))}if(f.return!==M.return)f=N,M=L;else{for(var pe=!1,Oe=N.child;Oe;){if(Oe===f){pe=!0,f=N,M=L;break}if(Oe===M){pe=!0,M=N,f=L;break}Oe=Oe.sibling}if(!pe){for(Oe=L.child;Oe;){if(Oe===f){pe=!0,f=L,M=N;break}if(Oe===M){pe=!0,M=L,f=N;break}Oe=Oe.sibling}if(!pe)throw Error(x(189))}}if(f.alternate!==M)throw Error(x(190))}if(f.tag!==3)throw Error(x(188));return f.stateNode.current===f?t:l}function Ce(){return!0}function cn(){return!1}function mn(t,l,f,M){this.dispatchConfig=t,this._targetInst=l,this.nativeEvent=f,t=this.constructor.Interface;for(var N in t)t.hasOwnProperty(N)&&((l=t[N])?this[N]=l(f):N==="target"?this.target=M:this[N]=f[N]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Ce:cn,this.isPropagationStopped=cn,this}r(mn.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Ce)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Ce)},persist:function(){this.isPersistent=Ce},isPersistent:cn,destructor:function(){var t=this.constructor.Interface,l;for(l in t)this[l]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=cn,this._dispatchInstances=this._dispatchListeners=null}}),mn.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null},mn.extend=function(t){function l(){}function f(){return M.apply(this,arguments)}var M=this;l.prototype=M.prototype;var N=new l;return r(N,f.prototype),f.prototype=N,f.prototype.constructor=f,f.Interface=r({},M.Interface,t),f.extend=M.extend,Ve(f),f},Ve(mn);function Qe(t,l,f,M){if(this.eventPool.length){var N=this.eventPool.pop();return this.call(N,t,l,f,M),N}return new this(t,l,f,M)}function sn(t){if(!(t instanceof this))throw Error(x(279));t.destructor(),10>this.eventPool.length&&this.eventPool.push(t)}function Ve(t){t.eventPool=[],t.getPooled=Qe,t.release=sn}var Fn=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined");function Tn(t,l){var f={};return f[t.toLowerCase()]=l.toLowerCase(),f["Webkit"+t]="webkit"+l,f["Moz"+t]="moz"+l,f}var gn={animationend:Tn("Animation","AnimationEnd"),animationiteration:Tn("Animation","AnimationIteration"),animationstart:Tn("Animation","AnimationStart"),transitionend:Tn("Transition","TransitionEnd")},Ie={},qn={};Fn&&(qn=document.createElement("div").style,"AnimationEvent"in window||(delete gn.animationend.animation,delete gn.animationiteration.animation,delete gn.animationstart.animation),"TransitionEvent"in window||delete gn.transitionend.transition);function Mn(t){if(Ie[t])return Ie[t];if(!gn[t])return t;var l=gn[t],f;for(f in l)if(l.hasOwnProperty(f)&&f in qn)return Ie[t]=l[f];return t}var _n=Mn("animationend"),ot=Mn("animationiteration"),et=Mn("animationstart"),lt=Mn("transitionend"),Kn=null;function nt(t){if(Kn===null)try{var l=("require"+Math.random()).slice(0,7);Kn=(J&&J[l])("timers").setImmediate}catch(f){Kn=function(M){var N=new MessageChannel;N.port1.onmessage=M,N.port2.postMessage(void 0)}}return Kn(t)}var $n=W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,ut=$n[11],Bn=$n[12],Nn=W.unstable_batchedUpdates,Vn=Fe.IsSomeRendererActing,tt=typeof re.unstable_flushAllWithoutAsserting=="function",Jn=re.unstable_flushAllWithoutAsserting||function(){for(var t=!1;ut();)t=!0;return t};function w(t){try{Jn(),nt(function(){Jn()?w(t):t()})}catch(l){t(l)}}var T=0,I=!1,p=W.findDOMNode,i=W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,g=i[0],b=i[4],C=i[5],s=i[6],h=i[7],o=i[8],F=i[9],K=i[10];function D(){}function c(t,l){if(!t)return[];if(t=Pn(t),!t)return[];for(var f=t,M=[];;){if(f.tag===5||f.tag===6||f.tag===1||f.tag===0){var N=f.stateNode;l(N)&&M.push(N)}if(f.child)f.child.return=f,f=f.child;else{if(f===t)return M;for(;!f.sibling;){if(!f.return||f.return===t)return M;f=f.return}f.sibling.return=f.return,f=f.sibling}}}function O(t,l){if(t&&!t._reactInternalFiber){var f=""+t;throw t=Array.isArray(t)?"an array":t&&t.nodeType===1&&t.tagName?"a DOM node":f==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":f,Error(x(286,l,t))}}var m={renderIntoDocument:function(t){var l=document.createElement("div");return W.render(t,l)},isElement:function(t){return S.isValidElement(t)},isElementOfType:function(t,l){return S.isValidElement(t)&&t.type===l},isDOMComponent:function(t){return!(!t||t.nodeType!==1||!t.tagName)},isDOMComponentElement:function(t){return!!(t&&S.isValidElement(t)&&t.tagName)},isCompositeComponent:function(t){return m.isDOMComponent(t)?!1:t!=null&&typeof t.render=="function"&&typeof t.setState=="function"},isCompositeComponentWithType:function(t,l){return m.isCompositeComponent(t)?t._reactInternalFiber.type===l:!1},findAllInRenderedTree:function(t,l){return O(t,"findAllInRenderedTree"),t?c(t._reactInternalFiber,l):[]},scryRenderedDOMComponentsWithClass:function(t,l){return O(t,"scryRenderedDOMComponentsWithClass"),m.findAllInRenderedTree(t,function(f){if(m.isDOMComponent(f)){var M=f.className;typeof M!="string"&&(M=f.getAttribute("class")||"");var N=M.split(/\s+/);if(!Array.isArray(l)){if(l===void 0)throw Error(x(11));l=l.split(/\s+/)}return l.every(function(L){return N.indexOf(L)!==-1})}return!1})},findRenderedDOMComponentWithClass:function(t,l){if(O(t,"findRenderedDOMComponentWithClass"),t=m.scryRenderedDOMComponentsWithClass(t,l),t.length!==1)throw Error("Did not find exactly one match (found: "+t.length+") for class:"+l);return t[0]},scryRenderedDOMComponentsWithTag:function(t,l){return O(t,"scryRenderedDOMComponentsWithTag"),m.findAllInRenderedTree(t,function(f){return m.isDOMComponent(f)&&f.tagName.toUpperCase()===l.toUpperCase()})},findRenderedDOMComponentWithTag:function(t,l){if(O(t,"findRenderedDOMComponentWithTag"),t=m.scryRenderedDOMComponentsWithTag(t,l),t.length!==1)throw Error("Did not find exactly one match (found: "+t.length+") for tag:"+l);return t[0]},scryRenderedComponentsWithType:function(t,l){return O(t,"scryRenderedComponentsWithType"),m.findAllInRenderedTree(t,function(f){return m.isCompositeComponentWithType(f,l)})},findRenderedComponentWithType:function(t,l){if(O(t,"findRenderedComponentWithType"),t=m.scryRenderedComponentsWithType(t,l),t.length!==1)throw Error("Did not find exactly one match (found: "+t.length+") for componentType:"+l);return t[0]},mockComponent:function(t,l){return l=l||t.mockTagName||"div",t.prototype.render.mockImplementation(function(){return S.createElement(l,null,this.props.children)}),this},nativeTouchData:function(t,l){return{touches:[{pageX:t,pageY:l}]}},Simulate:null,SimulateNative:{},act:function(t){function l(){T--,Vn.current=f,Bn.current=M}I===!1&&(I=!0,console.error("act(...) is not supported in production builds of React, and might not behave as expected.")),T++;var f=Vn.current,M=Bn.current;Vn.current=!0,Bn.current=!0;try{var N=Nn(t)}catch(L){throw l(),L}if(N!==null&&typeof N=="object"&&typeof N.then=="function")return{then:function(L,pe){N.then(function(){1<T||tt===!0&&f===!0?(l(),L()):w(function(Oe){l(),Oe?pe(Oe):L()})},function(Oe){l(),pe(Oe)})}};try{T!==1||tt!==!1&&f!==!1||Jn(),l()}catch(L){throw l(),L}return{then:function(L){L()}}}};function n(t){return function(l,f){if(S.isValidElement(l))throw Error(x(228));if(m.isCompositeComponent(l))throw Error(x(229));var M=b[t],N=new D;N.target=l,N.type=t.toLowerCase();var L=g(l),pe=new mn(M,L,N,l);pe.persist(),r(pe,f),M.phasedRegistrationNames?C(pe):s(pe),W.unstable_batchedUpdates(function(){h(l),K(pe)}),o()}}m.Simulate={};for(var v in b)m.Simulate[v]=n(v);function d(t,l){return function(f,M){var N=new D(t);r(N,M),m.isDOMComponent(f)?(f=p(f),N.target=f,F(l,1,document,N)):f.tagName&&(N.target=f,F(l,1,document,N))}}[["abort","abort"],[_n,"animationEnd"],[ot,"animationIteration"],[et,"animationStart"],["blur","blur"],["canplaythrough","canPlayThrough"],["canplay","canPlay"],["cancel","cancel"],["change","change"],["click","click"],["close","close"],["compositionend","compositionEnd"],["compositionstart","compositionStart"],["compositionupdate","compositionUpdate"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["dragstart","dragStart"],["drag","drag"],["drop","drop"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],["ended","ended"],["error","error"],["focus","focus"],["input","input"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["loadstart","loadStart"],["loadstart","loadStart"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["mousedown","mouseDown"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["playing","playing"],["progress","progress"],["ratechange","rateChange"],["scroll","scroll"],["seeked","seeked"],["seeking","seeking"],["selectionchange","selectionChange"],["stalled","stalled"],["suspend","suspend"],["textInput","textInput"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchmove","touchMove"],["touchstart","touchStart"],[lt,"transitionEnd"],["volumechange","volumeChange"],["waiting","waiting"],["wheel","wheel"]].forEach(function(t){var l=t[1];m.SimulateNative[l]=d(l,t[0])}),J.exports=m.default||m}).call(this,e("hOG+")(Dn))},JjdP:function(Dn,dn,e){"use strict";e.r(dn);var J=e("9og8"),r=e("WmNS"),S=e.n(r),W=e("LtsZ"),re=`import React, { useRef } from 'react';
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

export default Demo;`,x=`import { get, set, cloneDeep } from 'lodash-es';

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
}`,Fe=`import React from 'react';
import FormRender, { useForm } from 'form-render';

const Demo = props => {
  const form = useForm();
  return <FormRender form={form} {...props} />;
};

export default Demo;`,Ee=`export const delay = ms => new Promise(res => setTimeout(res, ms));

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

export default Demo;`,Pn=`export const basic = {
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
};`,Ce=`import React, { Component } from 'react';
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

export default Root;`,cn=`import React, { useState, useEffect } from 'react';
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

export default Demo;`,mn=`{
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
}`,Qe=`import { Select } from 'antd';
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

export default SearchInput;`,sn=`import React from 'react';
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
}`,Fn=`.debug * {
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
}`,Tn=`import React, { Component } from 'react';
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

export default Root;`,gn=`import React, { useState, useEffect } from 'react';
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

export default SearchInput;`,Mn=`import React from 'react';
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

export default withTable(Demo);`,Kn=`import React from 'react';
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

export default Demo;`,Bn=`import React from 'react';
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

export default Demo;`,Nn=`.fr-generator-playground {
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

export default Demo;`,Jn=dn.default={"guide-card":{component:Object(W.dynamic)({loader:function(){var w=Object(J.a)(S.a.mark(function I(){return S.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"oLxE"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},I)}));function T(){return w.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:re}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"card-render":{version:"0.1.2"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"0.x"}},identifier:"guide-card"}},"chart-render-demo":{component:Object(W.dynamic)({loader:function(){var w=Object(J.a)(S.a.mark(function I(){var p,i,g,b,C,s,h;return S.a.wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return s=function(D,c){if(!c&&D&&D.__esModule)return D;if(D===null||typeof D!="object"&&typeof D!="function")return{default:D};var O=C(c);if(O&&O.has(D))return O.get(D);var m={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in D)if(v!=="default"&&Object.prototype.hasOwnProperty.call(D,v)){var d=n?Object.getOwnPropertyDescriptor(D,v):null;d&&(d.get||d.set)?Object.defineProperty(m,v,d):m[v]=D[v]}return m.default=D,O&&O.set(D,m),m},C=function(D){if(typeof WeakMap!="function")return null;var c=new WeakMap,O=new WeakMap;return(C=function(n){return n?O:c})(D)},p=e("K+nK"),F.t0=p,F.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return F.t1=F.sent,i=(0,F.t0)(F.t1),F.t2=s,F.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return F.t3=F.sent,g=(0,F.t2)(F.t3),F.next=15,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 15:return b=F.sent,h=function(){var D=(0,g.useState)("Line"),c=(0,i.default)(D,2),O=c[0],m=c[1],n={Line:b.Line,Column:b.Column,PivotTable:b.PivotTable}[O];return g.default.createElement("div",null,g.default.createElement("div",{style:{marginBottom:10}},g.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return m("Line")}},"\u6298\u7EBF\u56FE"),g.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return m("Column")}},"\u67F1\u72B6\u56FE"),g.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return m("PivotTable")}},"\u4EA4\u53C9\u8868")),g.default.createElement(n,{meta:[{id:"date",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF",isDim:!1},{id:"uv",name:"\u8BBF\u5BA2\u6570",isDim:!1}],data:[{date:"20200101",pv:100,uv:50},{date:"20200102",pv:120,uv:60},{date:"20200103",pv:140,uv:70},{date:"20200104",pv:160,uv:80}]}))},F.abrupt("return",h);case 18:case"end":return F.stop()}},I)}));function T(){return w.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"chart-render-demo"}},"column-demo":{component:Object(W.dynamic)({loader:function(){var w=Object(J.a)(S.a.mark(function I(){var p,i,g,b;return S.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return p=e("K+nK"),s.t0=p,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,i=(0,s.t0)(s.t1),s.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return g=s.sent,b=function(){return i.default.createElement(g.Column,{meta:[{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{pv:50,uv:20}]})},s.abrupt("return",b);case 11:case"end":return s.stop()}},I)}));function T(){return w.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[{ pv: 50, uv: 20 }]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo"}},"column-demo-1":{component:Object(W.dynamic)({loader:function(){var w=Object(J.a)(S.a.mark(function I(){var p,i,g,b;return S.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return p=e("K+nK"),s.t0=p,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,i=(0,s.t0)(s.t1),s.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return g=s.sent,b=function(){return i.default.createElement(g.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},s.abrupt("return",b);case 11:case"end":return s.stop()}},I)}));function T(){return w.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-1"}},"column-demo-2":{component:Object(W.dynamic)({loader:function(){var w=Object(J.a)(S.a.mark(function I(){var p,i,g,b;return S.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return p=e("K+nK"),s.t0=p,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,i=(0,s.t0)(s.t1),s.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return g=s.sent,b=function(){return i.default.createElement(g.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},s.abrupt("return",b);case 11:case"end":return s.stop()}},I)}));function T(){return w.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-2"}},"column-demo-3":{component:Object(W.dynamic)({loader:function(){var w=Object(J.a)(S.a.mark(function I(){var p,i,g,b;return S.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return p=e("K+nK"),s.t0=p,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,i=(0,s.t0)(s.t1),s.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return g=s.sent,b=function(){return i.default.createElement(g.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},s.abrupt("return",b);case 11:case"end":return s.stop()}},I)}));function T(){return w.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-3"}},"column-demo-4":{component:Object(W.dynamic)({loader:function(){var w=Object(J.a)(S.a.mark(function I(){var p,i,g,b;return S.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return p=e("K+nK"),s.t0=p,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,i=(0,s.t0)(s.t1),s.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return g=s.sent,b=function(){return i.default.createElement(g.Column,{inverted:!0,label:{position:"middle",layout:[{type:"interval-adjust-position"},{type:"interval-hide-overlap"},{type:"adjust-color"}]},meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},s.abrupt("return",b);case 11:case"end":return s.stop()}},I)}));function T(){return w.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-4"}},"line-demo":{component:Object(W.dynamic)({loader:function(){var w=Object(J.a)(S.a.mark(function I(){var p,i,g,b;return S.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return p=e("K+nK"),s.t0=p,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,i=(0,s.t0)(s.t1),s.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return g=s.sent,b=function(){return i.default.createElement(g.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},s.abrupt("return",b);case 11:case"end":return s.stop()}},I)}));function T(){return w.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo"}},"line-demo-1":{component:Object(W.dynamic)({loader:function(){var w=Object(J.a)(S.a.mark(function I(){var p,i,g,b;return S.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return p=e("K+nK"),s.t0=p,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,i=(0,s.t0)(s.t1),s.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return g=s.sent,b=function(){return i.default.createElement(g.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},s.abrupt("return",b);case 11:case"end":return s.stop()}},I)}));function T(){return w.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-1"}},"line-demo-2":{component:Object(W.dynamic)({loader:function(){var w=Object(J.a)(S.a.mark(function I(){var p,i,g,b;return S.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return p=e("K+nK"),s.t0=p,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,i=(0,s.t0)(s.t1),s.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return g=s.sent,b=function(){return i.default.createElement(g.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"},{id:"pv",name:"\u8BBF\u95EE\u91CF"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20,pv:120},{ds:"2020-12-31",page:"\u9996\u9875",uv:120,pv:1120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21,pv:121},{ds:"2021-01-01",page:"\u9996\u9875",uv:121,pv:1121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15,pv:115},{ds:"2021-01-02",page:"\u9996\u9875",uv:115,pv:1115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40,pv:140},{ds:"2021-01-03",page:"\u9996\u9875",uv:140,pv:1140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31,pv:131},{ds:"2021-01-04",page:"\u9996\u9875",uv:131,pv:1131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32,pv:132},{ds:"2021-01-05",page:"\u9996\u9875",uv:132,pv:1132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30,pv:130},{ds:"2021-01-06",page:"\u9996\u9875",uv:130,pv:1130}]})},s.abrupt("return",b);case 11:case"end":return s.stop()}},I)}));function T(){return w.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-2"}},"line-demo-3":{component:Object(W.dynamic)({loader:function(){var w=Object(J.a)(S.a.mark(function I(){var p,i,g,b;return S.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return p=e("K+nK"),s.t0=p,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,i=(0,s.t0)(s.t1),s.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return g=s.sent,b=function(){return i.default.createElement(g.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},s.abrupt("return",b);case 11:case"end":return s.stop()}},I)}));function T(){return w.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-3"}},"line-demo-4":{component:Object(W.dynamic)({loader:function(){var w=Object(J.a)(S.a.mark(function I(){var p,i,g,b;return S.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return p=e("K+nK"),s.t0=p,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,i=(0,s.t0)(s.t1),s.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return g=s.sent,b=function(){return i.default.createElement(g.Line,{withArea:!0,isStack:!0,isPercent:!0,meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},s.abrupt("return",b);case 11:case"end":return s.stop()}},I)}));function T(){return w.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-4"}},"pivot-table-demo":{component:Object(W.dynamic)({loader:function(){var w=Object(J.a)(S.a.mark(function I(){var p,i,g,b;return S.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return p=e("K+nK"),s.t0=p,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,i=(0,s.t0)(s.t1),s.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return g=s.sent,b=function(){return i.default.createElement(g.PivotTable,{style:{maxHeight:400,overflow:"auto"},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},s.abrupt("return",b);case 11:case"end":return s.stop()}},I)}));function T(){return w.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo"}},"pivot-table-demo-1":{component:Object(W.dynamic)({loader:function(){var w=Object(J.a)(S.a.mark(function I(){var p,i,g,b;return S.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return p=e("K+nK"),s.t0=p,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,i=(0,s.t0)(s.t1),s.next=8,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return g=s.sent,b=function(){return i.default.createElement(g.PivotTable,{style:{maxHeight:400,overflow:"auto"},cellRender:function(F,K,D){return i.default.createElement("div",null,i.default.createElement("p",null,"\u53C2\u6570\u8868\uFF1A"),i.default.createElement("p",{style:{color:["red","orange","yellow","green","blue"][Object.keys(K).length]}},F),i.default.createElement("p",null,JSON.stringify(K)),i.default.createElement("p",null,JSON.stringify(D)))},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},s.abrupt("return",b);case 11:case"end":return s.stop()}},I)}));function T(){return w.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-1"}},"pivot-table-demo-2":{component:Object(W.dynamic)({loader:function(){var w=Object(J.a)(S.a.mark(function I(){var p,i,g,b,C,s,h;return S.a.wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return s=function(D,c){if(!c&&D&&D.__esModule)return D;if(D===null||typeof D!="object"&&typeof D!="function")return{default:D};var O=C(c);if(O&&O.has(D))return O.get(D);var m={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in D)if(v!=="default"&&Object.prototype.hasOwnProperty.call(D,v)){var d=n?Object.getOwnPropertyDescriptor(D,v):null;d&&(d.get||d.set)?Object.defineProperty(m,v,d):m[v]=D[v]}return m.default=D,O&&O.set(D,m),m},C=function(D){if(typeof WeakMap!="function")return null;var c=new WeakMap,O=new WeakMap;return(C=function(n){return n?O:c})(D)},p=e("K+nK"),F.t0=p,F.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return F.t1=F.sent,i=(0,F.t0)(F.t1),F.t2=s,F.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return F.t3=F.sent,g=(0,F.t2)(F.t3),F.next=15,Promise.all([e.e(0),e.e(2),e.e(10),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 15:return b=F.sent,h=function(){var D=(0,g.useState)(!1),c=(0,i.default)(D,2),O=c[0],m=c[1];return g.default.createElement(g.default.Fragment,null,g.default.createElement("label",null,"\u53EF\u5C55\u5F00/\u6536\u7F29\uFF1A",g.default.createElement("input",{type:"checkbox",value:O,onChange:function(){return m(!O)}})),g.default.createElement(b.PivotTable,{leftExpandable:O,showSubtotal:!1,meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]}))},F.abrupt("return",h);case 18:case"end":return F.stop()}},I)}));function T(){return w.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-2"}},"OldSchemaTransformer-demo":{component:Object(W.dynamic)({loader:function(){var w=Object(J.a)(S.a.mark(function I(){var p,i,g,b,C,s,h,o,F,K,D,c,O;return S.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return F=function(d,t){if(!t&&d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var l=o(t);if(l&&l.has(d))return l.get(d);var f={},M=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var N in d)if(N!=="default"&&Object.prototype.hasOwnProperty.call(d,N)){var L=M?Object.getOwnPropertyDescriptor(d,N):null;L&&(L.get||L.set)?Object.defineProperty(f,N,L):f[N]=d[N]}return f.default=d,l&&l.set(d,f),f},o=function(d){if(typeof WeakMap!="function")return null;var t=new WeakMap,l=new WeakMap;return(o=function(M){return M?l:t})(d)},p=e("K+nK"),n.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return n.t0=p,n.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return n.t1=n.sent,i=(0,n.t0)(n.t1),n.t2=p,n.next=13,Promise.resolve().then(e.bind(null,"tJVT"));case 13:return n.t3=n.sent,g=(0,n.t2)(n.t3),n.next=17,Promise.all([e.e(3),e.e(19)]).then(e.t.bind(null,"cUip",7));case 17:return n.t4=p,n.next=20,Promise.all([e.e(0),e.e(8),e.e(18),e.e(20)]).then(e.t.bind(null,"iJl9",7));case 20:return n.t5=n.sent,b=(0,n.t4)(n.t5),n.t6=F,n.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return n.t7=n.sent,C=(0,n.t6)(n.t7),n.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 29:return s=n.sent,n.next=32,Promise.all([e.e(22),e.e(25)]).then(e.bind(null,"7t+U"));case 32:return h=n.sent,K=b.default.TextArea,D={type:"object",properties:{number:{title:"\u6570\u5B57\u8F93\u5165\u6846",type:"number","ui:disabled":!0},checkbox:{title:"\u662F\u5426\u9009\u62E9",type:"boolean","ui:widget":"switch"}},required:["number"]},c=function(){var d=(0,C.useState)(JSON.stringify(D)),t=(0,g.default)(d,2),l=t[0],f=t[1],M=(0,C.useState)({}),N=(0,g.default)(M,2),L=N[0],pe=N[1],Oe=function(){try{var In=(0,h.updateSchemaToNewVersion)(JSON.parse(l));pe(In)}catch(dt){console.log(dt)}},on=function(In){f(In.target.value)},yn=function(){f(JSON.stringify(JSON.parse(l),null,2))};return C.default.createElement("div",null,C.default.createElement("div",null,"\u586B\u5165\u65E7\u7248schema\uFF1A"),C.default.createElement(K,{style:{minHeight:400,marginTop:12,marginBottom:12},value:l,onChange:on}),C.default.createElement(i.default,{style:{marginRight:12},onClick:yn},"\u683C\u5F0F\u5316\u65E7schema"),C.default.createElement(i.default,{type:"primary",onClick:Oe},"\u751F\u6210\u65B0\u7248schema"),C.default.createElement(K,{style:{minHeight:400,marginTop:12},value:JSON.stringify(L,null,2)}))},O=c,n.abrupt("return",O);case 38:case"end":return n.stop()}},I)}));function T(){return w.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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

export default Translator;`},"packages/form-render/src/utils.js":{import:"../../packages/form-render/src/utils.js",content:x}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"},"lodash-es":{version:"4.17.21"}},identifier:"OldSchemaTransformer-demo"}},"form-render-demo":{component:Object(W.dynamic)({loader:function(){var w=Object(J.a)(S.a.mark(function I(){var p,i,g,b,C,s,h,o,F,K;return S.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return h=function(m,n){if(!n&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var v=s(n);if(v&&v.has(m))return v.get(m);var d={},t=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in m)if(l!=="default"&&Object.prototype.hasOwnProperty.call(m,l)){var f=t?Object.getOwnPropertyDescriptor(m,l):null;f&&(f.get||f.set)?Object.defineProperty(d,l,f):d[l]=m[l]}return d.default=m,v&&v.set(m,d),d},s=function(m){if(typeof WeakMap!="function")return null;var n=new WeakMap,v=new WeakMap;return(s=function(t){return t?v:n})(m)},p=e("K+nK"),c.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return c.t0=p,c.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return c.t1=c.sent,i=(0,c.t0)(c.t1),c.t2=p,c.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return c.t3=c.sent,g=(0,c.t2)(c.t3),c.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 17:return b=c.sent,c.t4=h,c.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 21:return c.t5=c.sent,C=(0,c.t4)(c.t5),o={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},F=function(){var m=(0,C.useForm)(),n=function(d,t){console.log("formData:",d,"errors",t)};return g.default.createElement("div",null,g.default.createElement(C.default,{form:m,schema:o,onFinish:n}),g.default.createElement(i.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4"))},K=F,c.abrupt("return",K);case 27:case"end":return c.stop()}},I)}));function T(){return w.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo"}},"form-render-demo-1":{component:Object(W.dynamic)({loader:function(){var w=Object(J.a)(S.a.mark(function I(){var p,i,g,b,C,s,h,o,F,K,D,c,O,m;return S.a.wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return D=function(t,l){if(!l&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var f=K(l);if(f&&f.has(t))return f.get(t);var M={},N=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var L in t)if(L!=="default"&&Object.prototype.hasOwnProperty.call(t,L)){var pe=N?Object.getOwnPropertyDescriptor(t,L):null;pe&&(pe.get||pe.set)?Object.defineProperty(M,L,pe):M[L]=t[L]}return M.default=t,f&&f.set(t,M),M},K=function(t){if(typeof WeakMap!="function")return null;var l=new WeakMap,f=new WeakMap;return(K=function(N){return N?f:l})(t)},p=e("K+nK"),v.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return v.t0=p,v.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return v.t1=v.sent,i=(0,v.t0)(v.t1),v.t2=p,v.next=13,e.e(84).then(e.bind(null,"fWQN"));case 13:return v.t3=v.sent,g=(0,v.t2)(v.t3),v.t4=p,v.next=18,e.e(85).then(e.bind(null,"mtLc"));case 18:return v.t5=v.sent,b=(0,v.t4)(v.t5),v.t6=p,v.next=23,e.e(76).then(e.bind(null,"yKVA"));case 23:return v.t7=v.sent,C=(0,v.t6)(v.t7),v.t8=p,v.next=28,e.e(75).then(e.bind(null,"879j"));case 28:return v.t9=v.sent,s=(0,v.t8)(v.t9),v.t10=p,v.next=33,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 33:return v.t11=v.sent,h=(0,v.t10)(v.t11),v.next=37,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 37:return o=v.sent,v.t12=D,v.next=41,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 41:return v.t13=v.sent,F=(0,v.t12)(v.t13),c={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},O=function(d){(0,C.default)(l,d);var t=(0,s.default)(l);function l(){var f;(0,g.default)(this,l);for(var M=arguments.length,N=new Array(M),L=0;L<M;L++)N[L]=arguments[L];return f=t.call.apply(t,[this].concat(N)),f.onFinish=function(pe,Oe){console.log("formData:",pe,"errors",Oe)},f}return(0,b.default)(l,[{key:"render",value:function(){var M=this.props.form;return h.default.createElement("div",null,h.default.createElement(F.default,{form:M,schema:c,onFinish:this.onFinish}),h.default.createElement(i.default,{type:"primary",onClick:M.submit},"\u63D0\u4EA4"))}}]),l}(h.default.Component),m=(0,F.connectForm)(O),v.abrupt("return",m);case 47:case"end":return v.stop()}},I)}));function T(){return w.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default connectForm(Demo);`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo-1"}},"form-render-demo-2":{component:Object(W.dynamic)({loader:function(){var w=Object(J.a)(S.a.mark(function I(){var p,i,g,b,C,s,h,o,F,K;return S.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return h=function(m,n){if(!n&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var v=s(n);if(v&&v.has(m))return v.get(m);var d={},t=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in m)if(l!=="default"&&Object.prototype.hasOwnProperty.call(m,l)){var f=t?Object.getOwnPropertyDescriptor(m,l):null;f&&(f.get||f.set)?Object.defineProperty(d,l,f):d[l]=m[l]}return d.default=m,v&&v.set(m,d),d},s=function(m){if(typeof WeakMap!="function")return null;var n=new WeakMap,v=new WeakMap;return(s=function(t){return t?v:n})(m)},p=e("K+nK"),c.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return c.t0=p,c.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return c.t1=c.sent,i=(0,c.t0)(c.t1),c.t2=p,c.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return c.t3=c.sent,g=(0,c.t2)(c.t3),c.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 17:return b=c.sent,c.t4=h,c.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 21:return c.t5=c.sent,C=(0,c.t4)(c.t5),o={displayType:"row",labelWidth:60,type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F",type:"range",format:"date"},showSetting:{title:"\u662F\u5426\u5C55\u793A\u7F51\u5740",type:"boolean"},siteUrl:{title:"\u7F51\u5740",type:"string",placeholder:"\u6B64\u5904\u5FC5\u586B",hidden:"{{formData.showSetting !== true}}",required:!0,props:{addonBefore:"https://",addonAfter:".com"}}}},F=function(){var m=(0,C.useForm)(),n=function(d,t){t.length>0?alert("errors:"+JSON.stringify(t)):alert("formData:"+JSON.stringify(d,null,2))};return g.default.createElement("div",null,g.default.createElement(C.default,{form:m,schema:o,onFinish:n}),g.default.createElement(i.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4"))},K=F,c.abrupt("return",K);case 27:case"end":return c.stop()}},I)}));function T(){return w.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-demo-2"}},"display-demo":{component:Object(W.dynamic)({loader:function(){var w=Object(J.a)(S.a.mark(function I(){var p,i,g,b,C;return S.a.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return p=e("K+nK"),h.t0=p,h.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return h.t1=h.sent,i=(0,h.t0)(h.t1),h.t2=p,h.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return h.t3=h.sent,g=(0,h.t2)(h.t3),b=function(F){return{type:"object",displayType:F,properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},objectName:{title:"\u5BF9\u8C61",bind:"obj",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},C=function(){return i.default.createElement("div",null,i.default.createElement("h2",null,"display: row"),i.default.createElement(g.default,{schema:b("row")}),i.default.createElement("h2",null,"display: column"),i.default.createElement(g.default,{schema:b("column")}))},h.abrupt("return",C);case 14:case"end":return h.stop()}},I)}));function T(){return w.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`},"demo/display.js":{import:"../demo/display",content:Fe}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo"}},"display-demo-1":{component:Object(W.dynamic)({loader:function(){var w=Object(J.a)(S.a.mark(function I(){var p,i,g,b,C;return S.a.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return p=e("K+nK"),h.t0=p,h.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return h.t1=h.sent,i=(0,h.t0)(h.t1),h.t2=p,h.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return h.t3=h.sent,g=(0,h.t2)(h.t3),b={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0},check:{title:"box",type:"boolean",default:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},C=function(){return i.default.createElement(g.default,{readOnly:!0,schema:b})},h.abrupt("return",C);case 14:case"end":return h.stop()}},I)}));function T(){return w.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form readOnly schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:Fe}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-1"}},"display-demo-2":{component:Object(W.dynamic)({loader:function(){var w=Object(J.a)(S.a.mark(function I(){var p,i,g,b,C;return S.a.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return p=e("K+nK"),h.t0=p,h.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return h.t1=h.sent,i=(0,h.t0)(h.t1),h.t2=p,h.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return h.t3=h.sent,g=(0,h.t2)(h.t3),b={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0,width:"50%"},check:{title:"box",type:"boolean",default:!0,width:"50%",labelWidth:6},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},C=function(){return i.default.createElement(g.default,{labelWidth:"200",schema:b})},h.abrupt("return",C);case 14:case"end":return h.stop()}},I)}));function T(){return w.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form labelWidth="200" schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:Fe}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-2"}},"display-demo-3":{component:Object(W.dynamic)({loader:function(){var w=Object(J.a)(S.a.mark(function I(){var p,i,g,b,C,s;return S.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return p=e("K+nK"),o.t0=p,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.t2=p,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,g=(0,o.t2)(o.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},C=function(){return i.default.createElement(g.default,{schema:b})},s=C,o.abrupt("return",s);case 15:case"end":return o.stop()}},I)}));function T(){return w.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Fe}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-3"}},"display-demo-4":{component:Object(W.dynamic)({loader:function(){var w=Object(J.a)(S.a.mark(function I(){var p,i,g,b,C,s;return S.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return p=e("K+nK"),o.t0=p,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.t2=p,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,g=(0,o.t2)(o.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},C=function(){return i.default.createElement(g.default,{schema:b})},s=C,o.abrupt("return",s);case 15:case"end":return o.stop()}},I)}));function T(){return w.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Fe}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-4"}},"display-demo-5":{component:Object(W.dynamic)({loader:function(){var w=Object(J.a)(S.a.mark(function I(){var p,i,g,b,C,s;return S.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return p=e("K+nK"),o.t0=p,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.t2=p,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,g=(0,o.t2)(o.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},C=function(){return i.default.createElement(g.default,{schema:b})},s=C,o.abrupt("return",s);case 15:case"end":return o.stop()}},I)}));function T(){return w.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Fe}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-5"}},"display-demo-6":{component:Object(W.dynamic)({loader:function(){var w=Object(J.a)(S.a.mark(function I(){var p,i,g,b,C,s;return S.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return p=e("K+nK"),o.t0=p,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.t2=p,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,g=(0,o.t2)(o.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",props:{hideMove:!0},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},C=function(){return i.default.createElement(g.default,{schema:b})},s=C,o.abrupt("return",s);case 15:case"end":return o.stop()}},I)}));function T(){return w.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Fe}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-6"}},"form-methods-demo":{component:Object(W.dynamic)({loader:function(){var w=Object(J.a)(S.a.mark(function I(){var p,i,g,b,C,s,h,o,F,K,D,c,O;return S.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return D=function(d,t){if(!t&&d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var l=K(t);if(l&&l.has(d))return l.get(d);var f={},M=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var N in d)if(N!=="default"&&Object.prototype.hasOwnProperty.call(d,N)){var L=M?Object.getOwnPropertyDescriptor(d,N):null;L&&(L.get||L.set)?Object.defineProperty(f,N,L):f[N]=d[N]}return f.default=d,l&&l.set(d,f),f},K=function(d){if(typeof WeakMap!="function")return null;var t=new WeakMap,l=new WeakMap;return(K=function(M){return M?l:t})(d)},p=e("K+nK"),n.next=5,e.e(23).then(e.t.bind(null,"lfLe",7));case 5:return n.t0=p,n.next=8,e.e(24).then(e.t.bind(null,"Cp9S",7));case 8:return n.t1=n.sent,i=(0,n.t0)(n.t1),n.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return n.t2=p,n.next=15,e.e(8).then(e.t.bind(null,"4IMT",7));case 15:return n.t3=n.sent,g=(0,n.t2)(n.t3),n.next=19,e.e(15).then(e.t.bind(null,"tL+A",7));case 19:return n.t4=p,n.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return n.t5=n.sent,b=(0,n.t4)(n.t5),n.t6=p,n.next=27,Promise.resolve().then(e.bind(null,"tJVT"));case 27:return n.t7=n.sent,C=(0,n.t6)(n.t7),n.t8=D,n.next=32,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 32:return n.t9=n.sent,s=(0,n.t8)(n.t9),n.next=36,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 36:return h=n.sent,n.t10=D,n.next=40,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 40:return n.t11=n.sent,o=(0,n.t10)(n.t11),n.next=44,e.e(16).then(e.bind(null,"OH0R"));case 44:return F=n.sent,c=function(){var d=(0,o.useForm)(),t=(0,s.useState)({}),l=(0,C.default)(t,2),f=l[0],M=l[1],N=function(){(0,F.fakeApi)("xxx/getForm").then(function(Oe){d.setValues({input1:"hello world",select1:"c"})})};(0,s.useEffect)(function(){(0,F.delay)(1e3).then(function(pe){M({type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}})})},[]);var L=function(Oe,on){on.length>0?b.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(on.map(function(yn){return yn.name}))):(0,F.fakeApi)("xxx/submit",Oe).then(function(yn){return b.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})};return s.default.createElement("div",{style:{width:"400px"}},s.default.createElement(o.default,{form:d,schema:f,onFinish:L}),s.default.createElement(i.default,null,s.default.createElement(g.default,{onClick:N},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),s.default.createElement(g.default,{type:"primary",onClick:d.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},O=c,n.abrupt("return",O);case 48:case"end":return n.stop()}},I)}));function T(){return w.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Ee}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo"}},"form-methods-demo-1":{component:Object(W.dynamic)({loader:function(){var w=Object(J.a)(S.a.mark(function I(){var p,i,g,b,C,s,h,o,F,K,D,c,O;return S.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return K=function(d,t){if(!t&&d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var l=F(t);if(l&&l.has(d))return l.get(d);var f={},M=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var N in d)if(N!=="default"&&Object.prototype.hasOwnProperty.call(d,N)){var L=M?Object.getOwnPropertyDescriptor(d,N):null;L&&(L.get||L.set)?Object.defineProperty(f,N,L):f[N]=d[N]}return f.default=d,l&&l.set(d,f),f},F=function(d){if(typeof WeakMap!="function")return null;var t=new WeakMap,l=new WeakMap;return(F=function(M){return M?l:t})(d)},p=e("K+nK"),n.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return n.t0=p,n.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return n.t1=n.sent,i=(0,n.t0)(n.t1),n.t2=p,n.next=13,Promise.resolve().then(e.bind(null,"PpiC"));case 13:return n.t3=n.sent,g=(0,n.t2)(n.t3),n.next=17,e.e(15).then(e.t.bind(null,"tL+A",7));case 17:return n.t4=p,n.next=20,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 20:return n.t5=n.sent,b=(0,n.t4)(n.t5),n.t6=p,n.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return n.t7=n.sent,C=(0,n.t6)(n.t7),n.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 29:return s=n.sent,n.t8=K,n.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 33:return n.t9=n.sent,h=(0,n.t8)(n.t9),n.next=37,e.e(16).then(e.bind(null,"OH0R"));case 37:return o=n.sent,D={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},c=function(){var d=(0,h.useForm)(),t=function(M,N){N.length>0?b.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(N.map(function(L){return L.name}))):(0,o.fakeApi)("xxx/submit",M).then(function(L){return b.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},l=function(M){var N=M.data,L=M.errors,pe=M.schema,Oe=(0,g.default)(M,["data","errors","schema"]);return(0,o.fakeApi)("xxx/validation").then(function(on){return{name:"select1",error:["\u5916\u90E8\u6821\u9A8C\u9519\u8BEF"]}})};return C.default.createElement("div",{style:{width:"400px"}},C.default.createElement(h.default,{form:d,schema:D,beforeFinish:l,onFinish:t}),C.default.createElement(i.default,{type:"primary",onClick:d.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},O=c,n.abrupt("return",O);case 42:case"end":return n.stop()}},I)}));function T(){return w.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Ee}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-1"}},"form-methods-demo-2":{component:Object(W.dynamic)({loader:function(){var w=Object(J.a)(S.a.mark(function I(){var p,i,g,b,C,s,h,o,F,K,D,c,O;return S.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return K=function(d,t){if(!t&&d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var l=F(t);if(l&&l.has(d))return l.get(d);var f={},M=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var N in d)if(N!=="default"&&Object.prototype.hasOwnProperty.call(d,N)){var L=M?Object.getOwnPropertyDescriptor(d,N):null;L&&(L.get||L.set)?Object.defineProperty(f,N,L):f[N]=d[N]}return f.default=d,l&&l.set(d,f),f},F=function(d){if(typeof WeakMap!="function")return null;var t=new WeakMap,l=new WeakMap;return(F=function(M){return M?l:t})(d)},p=e("K+nK"),n.next=5,e.e(23).then(e.t.bind(null,"lfLe",7));case 5:return n.t0=p,n.next=8,e.e(24).then(e.t.bind(null,"Cp9S",7));case 8:return n.t1=n.sent,i=(0,n.t0)(n.t1),n.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return n.t2=p,n.next=15,e.e(8).then(e.t.bind(null,"4IMT",7));case 15:return n.t3=n.sent,g=(0,n.t2)(n.t3),n.next=19,e.e(15).then(e.t.bind(null,"tL+A",7));case 19:return n.t4=p,n.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return n.t5=n.sent,b=(0,n.t4)(n.t5),n.t6=p,n.next=27,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 27:return n.t7=n.sent,C=(0,n.t6)(n.t7),n.next=31,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 31:return s=n.sent,n.t8=K,n.next=35,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 35:return n.t9=n.sent,h=(0,n.t8)(n.t9),n.next=39,e.e(16).then(e.bind(null,"OH0R"));case 39:return o=n.sent,D={type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F\u8303\u56F4",type:"range",format:"date"}}},c=function(){var d=(0,h.useForm)(),t=function(M,N){N.length>0?b.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(N.map(function(L){return L.name}))):(0,o.fakeApi)("xxx/submit",M).then(function(L){return b.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},l=function(){(0,o.fakeApi)("xxx/getForm").then(function(M){d.setValues({startDate:"2020-04-04",endDate:"2020-04-24"})})};return C.default.createElement("div",{style:{width:"400px"}},C.default.createElement(h.default,{form:d,schema:D,onFinish:t}),C.default.createElement(i.default,null,C.default.createElement(g.default,{onClick:l},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),C.default.createElement(g.default,{type:"primary",onClick:d.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},O=c,n.abrupt("return",O);case 44:case"end":return n.stop()}},I)}));function T(){return w.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Ee}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-2"}},"form-methods-demo-3":{component:Object(W.dynamic)({loader:function(){var w=Object(J.a)(S.a.mark(function I(){var p,i,g,b,C,s,h,o,F,K,D,c;return S.a.wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return F=function(v,d){if(!d&&v&&v.__esModule)return v;if(v===null||typeof v!="object"&&typeof v!="function")return{default:v};var t=o(d);if(t&&t.has(v))return t.get(v);var l={},f=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var M in v)if(M!=="default"&&Object.prototype.hasOwnProperty.call(v,M)){var N=f?Object.getOwnPropertyDescriptor(v,M):null;N&&(N.get||N.set)?Object.defineProperty(l,M,N):l[M]=v[M]}return l.default=v,t&&t.set(v,l),l},o=function(v){if(typeof WeakMap!="function")return null;var d=new WeakMap,t=new WeakMap;return(o=function(f){return f?t:d})(v)},p=e("K+nK"),m.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return m.t0=p,m.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return m.t1=m.sent,i=(0,m.t0)(m.t1),m.next=12,e.e(15).then(e.t.bind(null,"tL+A",7));case 12:return m.t2=p,m.next=15,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 15:return m.t3=m.sent,g=(0,m.t2)(m.t3),m.t4=F,m.next=20,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 20:return m.t5=m.sent,b=(0,m.t4)(m.t5),m.next=24,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 24:return C=m.sent,m.t6=F,m.next=28,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 28:return m.t7=m.sent,s=(0,m.t6)(m.t7),m.next=32,e.e(16).then(e.bind(null,"OH0R"));case 32:return h=m.sent,K={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select1:{title:"\u5355\u9009",type:"string",widget:"select"}}}}},D=function(){var v=(0,s.useForm)(),d=function(){v.setSchemaByPath("obj1.select1",{enum:["east","south","west","north"],enumNames:["\u4E1C","\u5357","\u897F","\u5317"]})},t=function(f,M){M.length>0?g.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(M.map(function(N){return N.name}))):g.default.info(JSON.stringify(f))};return b.default.createElement("div",{style:{width:"400px"}},b.default.createElement(s.default,{form:v,schema:K,onMount:d,onFinish:t}),b.default.createElement(i.default,{type:"primary",onClick:v.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},c=D,m.abrupt("return",c);case 37:case"end":return m.stop()}},I)}));function T(){return w.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Ee}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-3"}},"function-demo":{component:Object(W.dynamic)({loader:function(){var w=Object(J.a)(S.a.mark(function I(){var p,i,g,b,C,s,h,o;return S.a.wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return C=function(c,O){if(!O&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var m=b(O);if(m&&m.has(c))return m.get(c);var n={},v=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in c)if(d!=="default"&&Object.prototype.hasOwnProperty.call(c,d)){var t=v?Object.getOwnPropertyDescriptor(c,d):null;t&&(t.get||t.set)?Object.defineProperty(n,d,t):n[d]=c[d]}return n.default=c,m&&m.set(c,n),n},b=function(c){if(typeof WeakMap!="function")return null;var O=new WeakMap,m=new WeakMap;return(b=function(v){return v?m:O})(c)},p=e("K+nK"),K.t0=p,K.next=6,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 6:return K.t1=K.sent,i=(0,K.t0)(K.t1),K.t2=C,K.next=11,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 11:return K.t3=K.sent,g=(0,K.t2)(K.t3),s={type:"object",properties:{checkbox1:{title:"\u5C55\u793A\u66F4\u591A\u5185\u5BB9",type:"boolean"},select1:{title:"\u8BF7\u5047\u539F\u56E0",type:"string",enum:["a","b","c"],enumNames:["\u75C5\u5047","\u6709\u4E8B","\u5176\u5B83 (\u9700\u6CE8\u660E\u5177\u4F53\u539F\u56E0)"],hidden:"{{formData.checkbox1 !== true}}",widget:"radio"},input1:{title:"\u5177\u4F53\u539F\u56E0",type:"string",format:"textarea",hidden:'{{rootValue.checkbox1 !== true || formData.select1 !== "c"}}'}}},h=function(){var c=(0,g.useForm)();return i.default.createElement(g.default,{form:c,schema:s})},o=h,K.abrupt("return",o);case 17:case"end":return K.stop()}},I)}));function T(){return w.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo1;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo"}},"function-demo-1":{component:Object(W.dynamic)({loader:function(){var w=Object(J.a)(S.a.mark(function I(){var p,i,g,b,C;return S.a.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return p=e("K+nK"),h.t0=p,h.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return h.t1=h.sent,i=(0,h.t0)(h.t1),h.t2=p,h.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(17)]).then(e.bind(null,"c2mQ"));case 9:return h.t3=h.sent,g=(0,h.t2)(h.t3),h.next=13,e.e(21).then(e.bind(null,"8iYR"));case 13:return b=h.sent,C=function(){return i.default.createElement(g.default,{schema:b.expression})},h.abrupt("return",C);case 16:case"end":return h.stop()}},I)}));function T(){return w.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { expression } from '../json/schema';

export default () => <FR schema={expression} />;`},"demo/FR.jsx":{import:"../demo/FR",content:ce},"json/schema.js":{import:"../json/schema",content:Pn}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo-1"}},"lifeCycle-demo":{component:Object(W.dynamic)({loader:function(){var w=Object(J.a)(S.a.mark(function I(){var p,i,g,b,C,s,h,o,F;return S.a.wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return C=function(O,m){if(!m&&O&&O.__esModule)return O;if(O===null||typeof O!="object"&&typeof O!="function")return{default:O};var n=b(m);if(n&&n.has(O))return n.get(O);var v={},d=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var t in O)if(t!=="default"&&Object.prototype.hasOwnProperty.call(O,t)){var l=d?Object.getOwnPropertyDescriptor(O,t):null;l&&(l.get||l.set)?Object.defineProperty(v,t,l):v[t]=O[t]}return v.default=O,n&&n.set(O,v),v},b=function(O){if(typeof WeakMap!="function")return null;var m=new WeakMap,n=new WeakMap;return(b=function(d){return d?n:m})(O)},D.t0=C,D.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return D.t1=D.sent,p=(0,D.t0)(D.t1),D.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 9:return i=D.sent,D.t2=C,D.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 13:return D.t3=D.sent,g=(0,D.t2)(D.t3),s=function(O){return new Promise(function(m){return setTimeout(m,O)})},h={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u9009\u62E9\u6846",description:"\u52A0\u8F7D\u4E2D...",type:"string",enum:[],widget:"radio"}}},o=function(){var O=(0,g.useForm)(),m=function(){O.setValues({input1:"hello world"}),s(3e3).then(function(v){O.setSchemaByPath("select1",{description:"",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]})})};return p.default.createElement(g.default,{form:O,schema:h,onMount:m})},F=o,D.abrupt("return",F);case 20:case"end":return D.stop()}},I)}));function T(){return w.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.6.9"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"lifeCycle-demo"}},"listDisplay-demo":{component:Object(W.dynamic)({loader:function(){var w=Object(J.a)(S.a.mark(function I(){var p,i,g,b,C,s;return S.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return p=e("K+nK"),o.t0=p,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.t2=p,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,g=(0,o.t2)(o.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},C=function(){return i.default.createElement(g.default,{schema:b})},s=C,o.abrupt("return",s);case 15:case"end":return o.stop()}},I)}));function T(){return w.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Fe}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo"}},"listDisplay-demo-1":{component:Object(W.dynamic)({loader:function(){var w=Object(J.a)(S.a.mark(function I(){var p,i,g,b,C,s;return S.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return p=e("K+nK"),o.t0=p,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.t2=p,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,g=(0,o.t2)(o.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},C=function(){return i.default.createElement(g.default,{schema:b})},s=C,o.abrupt("return",s);case 15:case"end":return o.stop()}},I)}));function T(){return w.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Fe}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-1"}},"listDisplay-demo-2":{component:Object(W.dynamic)({loader:function(){var w=Object(J.a)(S.a.mark(function I(){var p,i,g,b,C,s;return S.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return p=e("K+nK"),o.t0=p,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.t2=p,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,g=(0,o.t2)(o.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},C=function(){return i.default.createElement(g.default,{schema:b})},s=C,o.abrupt("return",s);case 15:case"end":return o.stop()}},I)}));function T(){return w.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Fe}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-2"}},"listDisplay-demo-3":{component:Object(W.dynamic)({loader:function(){var w=Object(J.a)(S.a.mark(function I(){var p,i,g,b,C,s;return S.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return p=e("K+nK"),o.t0=p,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.t2=p,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,g=(0,o.t2)(o.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",props:{hideMove:!0},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},C=function(){return i.default.createElement(g.default,{schema:b})},s=C,o.abrupt("return",s);case 15:case"end":return o.stop()}},I)}));function T(){return w.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Fe}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-3"}},"listDisplay-demo-4":{component:Object(W.dynamic)({loader:function(){var w=Object(J.a)(S.a.mark(function I(){var p,i,g,b,C,s;return S.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return p=e("K+nK"),o.t0=p,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.t2=p,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(14)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,g=(0,o.t2)(o.t3),window.hello=function(F){var K=F.value;console.log(K)},b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list4",itemProps:{buttons:[{callback:"hello",text:"\u590D\u5236"}]},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},C=function(){return i.default.createElement(g.default,{schema:b})},s=C,o.abrupt("return",s);case 16:case"end":return o.stop()}},I)}));function T(){return w.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Fe}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-4"}},"mapping-demo":{component:Object(W.dynamic)({loader:function(){var w=Object(J.a)(S.a.mark(function I(){var p,i,g,b,C,s,h,o,F,K,D;return S.a.wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return h=function(n,v){if(!v&&n&&n.__esModule)return n;if(n===null||typeof n!="object"&&typeof n!="function")return{default:n};var d=s(v);if(d&&d.has(n))return d.get(n);var t={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in n)if(f!=="default"&&Object.prototype.hasOwnProperty.call(n,f)){var M=l?Object.getOwnPropertyDescriptor(n,f):null;M&&(M.get||M.set)?Object.defineProperty(t,f,M):t[f]=n[f]}return t.default=n,d&&d.set(n,t),t},s=function(n){if(typeof WeakMap!="function")return null;var v=new WeakMap,d=new WeakMap;return(s=function(l){return l?d:v})(n)},p=e("K+nK"),O.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return O.t0=p,O.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return O.t1=O.sent,i=(0,O.t0)(O.t1),O.t2=p,O.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return O.t3=O.sent,g=(0,O.t2)(O.t3),O.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 17:return b=O.sent,O.t4=h,O.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 21:return O.t5=O.sent,C=(0,O.t4)(O.t5),o=function(n){var v=n.schema;return v.$id==="#"?g.default.createElement("div",null,n.children):g.default.createElement("div",null,"my custom object:",n.children)},F={type:"object",properties:{object2:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u8F93\u5165\u6846",type:"string"}}}},labelWidth:120,displayType:"row"},K=function(){var n=(0,C.useForm)(),v=function(t,l){console.log("formData:",t,"errors",l)};return g.default.createElement("div",null,g.default.createElement(C.default,{form:n,schema:F,onFinish:v,mapping:{object:"CustomComA"},widgets:{CustomComA:o}}),g.default.createElement(i.default,{type:"primary",onClick:n.submit},"\u63D0\u4EA4"))},D=K,O.abrupt("return",D);case 28:case"end":return O.stop()}},I)}));function T(){return w.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},"react-dom":{version:">=16.8.0"}},identifier:"mapping-demo"}},"watch-demo":{component:Object(W.dynamic)({loader:function(){var w=Object(J.a)(S.a.mark(function I(){var p,i,g,b,C,s,h,o;return S.a.wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return C=function(c,O){if(!O&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var m=b(O);if(m&&m.has(c))return m.get(c);var n={},v=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in c)if(d!=="default"&&Object.prototype.hasOwnProperty.call(c,d)){var t=v?Object.getOwnPropertyDescriptor(c,d):null;t&&(t.get||t.set)?Object.defineProperty(n,d,t):n[d]=c[d]}return n.default=c,m&&m.set(c,n),n},b=function(c){if(typeof WeakMap!="function")return null;var O=new WeakMap,m=new WeakMap;return(b=function(v){return v?m:O})(c)},K.t0=C,K.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return K.t1=K.sent,p=(0,K.t0)(K.t1),K.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 9:return i=K.sent,K.t2=C,K.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 13:return K.t3=K.sent,g=(0,K.t2)(K.t3),s={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"}}},h=function(){var c=(0,g.useForm)(),O={"#":function(n){console.log("\u8868\u5355\u7684\u65F6\u65F6\u6570\u636E\u4E3A\uFF1A",n)},input1:function(n){c.setValueByPath("input2",n)}};return p.default.createElement(g.default,{form:c,schema:s,watch:O})},o=h,K.abrupt("return",o);case 19:case"end":return K.stop()}},I)}));function T(){return w.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.6.9"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo"}},"watch-demo-1":{component:Object(W.dynamic)({loader:function(){var w=Object(J.a)(S.a.mark(function I(){var p,i,g,b,C,s,h,o,F,K;return S.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return h=function(m,n){if(!n&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var v=s(n);if(v&&v.has(m))return v.get(m);var d={},t=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in m)if(l!=="default"&&Object.prototype.hasOwnProperty.call(m,l)){var f=t?Object.getOwnPropertyDescriptor(m,l):null;f&&(f.get||f.set)?Object.defineProperty(d,l,f):d[l]=m[l]}return d.default=m,v&&v.set(m,d),d},s=function(m){if(typeof WeakMap!="function")return null;var n=new WeakMap,v=new WeakMap;return(s=function(t){return t?v:n})(m)},p=e("K+nK"),c.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return c.t0=p,c.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return c.t1=c.sent,i=(0,c.t0)(c.t1),c.t2=h,c.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return c.t3=c.sent,g=(0,c.t2)(c.t3),c.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 17:return b=c.sent,c.t4=h,c.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 21:return c.t5=c.sent,C=(0,c.t4)(c.t5),o={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"radio"}}}}},F=function(){var m=(0,C.useForm)(),n=function(t,l){l.length>0?alert("errorFields:"+JSON.stringify(l)):alert("formData:"+JSON.stringify(t,null,2))},v={input1:function(t){t&&t.length>2?m.setSchemaByPath("obj1.select",function(l){var f=l.enumNames;return{enumNames:f.map(function(M){return M+"a"})}}):m.setSchemaByPath("obj1.select",{enumNames:["\u65E9","\u4E2D","\u665A"]})}};return g.default.createElement("div",null,g.default.createElement(C.default,{form:m,schema:o,onFinish:n,watch:v}),g.default.createElement(i.default,{type:"",style:{marginRight:8},onClick:function(){return m.setSchemaByPath("input2",{title:"\u7F16\u8F91\u6846",format:"textarea"})}},"\u5C06 input \u6539\u4E3A textarea"),g.default.createElement(i.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4"))},K=F,c.abrupt("return",K);case 27:case"end":return c.stop()}},I)}));function T(){return w.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo-1"}},"widget-demo":{component:Object(W.dynamic)({loader:function(){var w=Object(J.a)(S.a.mark(function I(){var p,i,g,b,C,s,h,o,F,K,D,c,O;return S.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return F=function(d,t){if(!t&&d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var l=o(t);if(l&&l.has(d))return l.get(d);var f={},M=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var N in d)if(N!=="default"&&Object.prototype.hasOwnProperty.call(d,N)){var L=M?Object.getOwnPropertyDescriptor(d,N):null;L&&(L.get||L.set)?Object.defineProperty(f,N,L):f[N]=d[N]}return f.default=d,l&&l.set(d,f),f},o=function(d){if(typeof WeakMap!="function")return null;var t=new WeakMap,l=new WeakMap;return(o=function(M){return M?l:t})(d)},p=e("K+nK"),n.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return n.t0=p,n.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return n.t1=n.sent,i=(0,n.t0)(n.t1),n.next=12,Promise.all([e.e(3),e.e(19)]).then(e.t.bind(null,"cUip",7));case 12:return n.t2=p,n.next=15,Promise.all([e.e(0),e.e(8),e.e(18),e.e(20)]).then(e.t.bind(null,"iJl9",7));case 15:return n.t3=n.sent,g=(0,n.t2)(n.t3),n.t4=p,n.next=20,e.e(86).then(e.bind(null,"0Owb"));case 20:return n.t5=n.sent,b=(0,n.t4)(n.t5),n.t6=p,n.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return n.t7=n.sent,C=(0,n.t6)(n.t7),n.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 29:return s=n.sent,n.t8=F,n.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 33:return n.t9=n.sent,h=(0,n.t8)(n.t9),K={type:"object",properties:{string:{title:"\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6",type:"string",widget:"site"},select:{title:"\u5355\u9009",type:"number",enum:[1,2,3],enumNames:["\u9009\u98791","\u9009\u98792","\u9009\u98793"]}}},D=function(d){return console.log("widget props:",d),C.default.createElement(g.default,(0,b.default)({addonBefore:"https://",addonAfter:".com"},d))},c=function(){var d=(0,h.useForm)();return C.default.createElement("div",null,C.default.createElement(h.default,{form:d,schema:K,widgets:{site:D},onFinish:function(l){return alert(JSON.stringify(l,null,2))}}),C.default.createElement(i.default,{type:"primary",onClick:d.submit},"\u63D0\u4EA4"))},O=c,n.abrupt("return",O);case 40:case"end":return n.stop()}},I)}));function T(){return w.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},"react-dom":{version:">=16.8.0"}},identifier:"widget-demo"}},"measure-demo":{component:Object(W.dynamic)({loader:function(){var w=Object(J.a)(S.a.mark(function I(){var p,i,g,b,C,s,h,o,F,K;return S.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return o=function(m,n){if(!n&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var v=h(n);if(v&&v.has(m))return v.get(m);var d={},t=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in m)if(l!=="default"&&Object.prototype.hasOwnProperty.call(m,l)){var f=t?Object.getOwnPropertyDescriptor(m,l):null;f&&(f.get||f.set)?Object.defineProperty(d,l,f):d[l]=m[l]}return d.default=m,v&&v.set(m,d),d},h=function(m){if(typeof WeakMap!="function")return null;var n=new WeakMap,v=new WeakMap;return(h=function(t){return t?v:n})(m)},p=e("K+nK"),c.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return c.t0=p,c.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return c.t1=c.sent,i=(0,c.t0)(c.t1),c.next=12,e.e(15).then(e.t.bind(null,"tL+A",7));case 12:return c.t2=p,c.next=15,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 15:return c.t3=c.sent,g=(0,c.t2)(c.t3),c.t4=o,c.next=20,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 20:return c.t5=c.sent,b=(0,c.t4)(c.t5),c.next=24,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 24:return C=c.sent,c.t6=o,c.next=28,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 28:return c.t7=c.sent,s=(0,c.t6)(c.t7),F=function(){var m=(0,s.useForm)({logOnMount:function(t){console.log("onMount",t)},logOnSubmit:function(t){console.log("onSubmit",t)}}),n={type:"object",properties:{input1:{title:"\u8F93\u5165\u6846",required:!0,type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u5DE6","\u4E2D","\u53F3"],widget:"radio"}}},v=function(t,l){l.length>0?g.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(l.map(function(f){return f.name}))):g.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")};return b.default.createElement("div",null,b.default.createElement(s.default,{id:"my-demo-form",form:m,schema:n,onFinish:v}),b.default.createElement(i.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},K=F,c.abrupt("return",K);case 33:case"end":return c.stop()}},I)}));function T(){return w.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"measure-demo"}},"migrate-demo":{component:Object(W.dynamic)({loader:function(){var w=Object(J.a)(S.a.mark(function I(){var p,i,g,b,C,s,h,o;return S.a.wrap(function(K){for(;;)switch(K.prev=K.next){case 0:return h=function(){var c=(0,g.useForm)(),O=function(n,v){v.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(v))):alert(JSON.stringify(n))};return i.default.createElement("div",null,i.default.createElement(g.default,{form:c,schema:s,onFinish:O}),i.default.createElement("button",{onClick:c.submit},"\u63D0\u4EA4"))},C=function(c,O){if(!O&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var m=b(O);if(m&&m.has(c))return m.get(c);var n={},v=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in c)if(d!=="default"&&Object.prototype.hasOwnProperty.call(c,d)){var t=v?Object.getOwnPropertyDescriptor(c,d):null;t&&(t.get||t.set)?Object.defineProperty(n,d,t):n[d]=c[d]}return n.default=c,m&&m.set(c,n),n},b=function(c){if(typeof WeakMap!="function")return null;var O=new WeakMap,m=new WeakMap;return(b=function(v){return v?m:O})(c)},p=e("K+nK"),K.t0=p,K.next=7,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 7:return K.t1=K.sent,i=(0,K.t0)(K.t1),K.t2=C,K.next=12,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 12:return K.t3=K.sent,g=(0,K.t2)(K.t3),s={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}},o=h,K.abrupt("return",o);case 17:case"end":return K.stop()}},I)}));function T(){return w.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate-demo"}},"migrate-demo-1":{component:Object(W.dynamic)({loader:function(){var w=Object(J.a)(S.a.mark(function I(){var p,i,g,b,C,s,h,o,F,K,D,c,O;return S.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return F=function(d,t){if(!t&&d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var l=o(t);if(l&&l.has(d))return l.get(d);var f={},M=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var N in d)if(N!=="default"&&Object.prototype.hasOwnProperty.call(d,N)){var L=M?Object.getOwnPropertyDescriptor(d,N):null;L&&(L.get||L.set)?Object.defineProperty(f,N,L):f[N]=d[N]}return f.default=d,l&&l.set(d,f),f},o=function(d){if(typeof WeakMap!="function")return null;var t=new WeakMap,l=new WeakMap;return(o=function(M){return M?l:t})(d)},p=e("K+nK"),n.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return n.t0=p,n.next=8,e.e(8).then(e.t.bind(null,"4IMT",7));case 8:return n.t1=n.sent,i=(0,n.t0)(n.t1),n.t2=p,n.next=13,Promise.resolve().then(e.bind(null,"tJVT"));case 13:return n.t3=n.sent,g=(0,n.t2)(n.t3),n.next=17,Promise.all([e.e(3),e.e(19)]).then(e.t.bind(null,"cUip",7));case 17:return n.t4=p,n.next=20,Promise.all([e.e(0),e.e(8),e.e(18),e.e(20)]).then(e.t.bind(null,"iJl9",7));case 20:return n.t5=n.sent,b=(0,n.t4)(n.t5),n.t6=F,n.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return n.t7=n.sent,C=(0,n.t6)(n.t7),n.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(7),e.e(9)]).then(e.bind(null,"gdfu"));case 29:return s=n.sent,n.next=32,Promise.all([e.e(22),e.e(25)]).then(e.bind(null,"7t+U"));case 32:return h=n.sent,K=b.default.TextArea,D={type:"object",properties:{number:{title:"\u6570\u5B57\u8F93\u5165\u6846",type:"number","ui:disabled":!0},checkbox:{title:"\u662F\u5426\u9009\u62E9",type:"boolean","ui:widget":"switch"}},required:["number"]},c=function(){var d=(0,C.useState)(JSON.stringify(D)),t=(0,g.default)(d,2),l=t[0],f=t[1],M=(0,C.useState)({}),N=(0,g.default)(M,2),L=N[0],pe=N[1],Oe=function(){try{var In=(0,h.updateSchemaToNewVersion)(JSON.parse(l));pe(In)}catch(dt){console.log(dt)}},on=function(In){f(In.target.value)},yn=function(){f(JSON.stringify(JSON.parse(l),null,2))};return C.default.createElement("div",null,C.default.createElement("div",null,"\u586B\u5165\u65E7\u7248schema\uFF1A"),C.default.createElement(K,{style:{minHeight:400,marginTop:12,marginBottom:12},value:l,onChange:on}),C.default.createElement(i.default,{style:{marginRight:12},onClick:yn},"\u683C\u5F0F\u5316\u65E7schema"),C.default.createElement(i.default,{type:"primary",onClick:Oe},"\u751F\u6210\u65B0\u7248schema"),C.default.createElement(K,{style:{minHeight:400,marginTop:12},value:JSON.stringify(L,null,2)}))},O=c,n.abrupt("return",O);case 38:case"end":return n.stop()}},I)}));function T(){return w.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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

export default Translator;`},"packages/form-render/src/utils.js":{import:"../../packages/form-render/src/utils.js",content:x}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"},"lodash-es":{version:"4.17.21"}},identifier:"migrate-demo-1"}},"migrate2-demo":{component:Object(W.dynamic)({loader:function(){var w=Object(J.a)(S.a.mark(function I(){var p,i,g,b,C,s,h,o,F;return S.a.wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return o=function(){var O=(0,g.useState)({}),m=(0,i.default)(O,2),n=m[0],v=m[1],d=(0,g.useState)([]),t=(0,i.default)(d,2),l=t[0],f=t[1],M=(0,g.useState)(!1),N=(0,i.default)(M,2),L=N[0],pe=N[1],Oe=(0,b.useForm)({formData:n,onChange:v,onValidate:f,showValidate:L});(0,g.useEffect)(function(){Oe.init()},[]);var on=function(){pe(!0),l.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(l))):alert(JSON.stringify(n))};return g.default.createElement("div",null,g.default.createElement(b.default,{form:Oe,schema:h}),g.default.createElement("button",{onClick:on},"\u63D0\u4EA4"))},s=function(O,m){if(!m&&O&&O.__esModule)return O;if(O===null||typeof O!="object"&&typeof O!="function")return{default:O};var n=C(m);if(n&&n.has(O))return n.get(O);var v={},d=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var t in O)if(t!=="default"&&Object.prototype.hasOwnProperty.call(O,t)){var l=d?Object.getOwnPropertyDescriptor(O,t):null;l&&(l.get||l.set)?Object.defineProperty(v,t,l):v[t]=O[t]}return v.default=O,n&&n.set(O,v),v},C=function(O){if(typeof WeakMap!="function")return null;var m=new WeakMap,n=new WeakMap;return(C=function(d){return d?n:m})(O)},p=e("K+nK"),D.t0=p,D.next=7,Promise.resolve().then(e.bind(null,"tJVT"));case 7:return D.t1=D.sent,i=(0,D.t0)(D.t1),D.t2=s,D.next=12,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 12:return D.t3=D.sent,g=(0,D.t2)(D.t3),D.t4=s,D.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 17:return D.t5=D.sent,b=(0,D.t4)(D.t5),h={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}},F=o,D.abrupt("return",F);case 22:case"end":return D.stop()}},I)}));function T(){return w.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
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
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate2-demo"}},"schema-demo":{component:Object(W.dynamic)({loader:function(){var w=Object(J.a)(S.a.mark(function I(){var p,i,g,b,C;return S.a.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return p=e("K+nK"),h.t0=p,h.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return h.t1=h.sent,i=(0,h.t0)(h.t1),h.t2=p,h.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(17)]).then(e.bind(null,"c2mQ"));case 9:return h.t3=h.sent,g=(0,h.t2)(h.t3),h.next=13,e.e(21).then(e.bind(null,"8iYR"));case 13:return b=h.sent,C=function(){return i.default.createElement(g.default,{schema:b.basic})},h.abrupt("return",C);case 16:case"end":return h.stop()}},I)}));function T(){return w.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { basic } from '../json/schema';

export default () => <FR schema={basic} />;`},"demo/FR.jsx":{import:"../demo/FR",content:ce},"json/schema.js":{import:"../json/schema",content:Pn}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo"}},"schema-demo-1":{component:Object(W.dynamic)({loader:function(){var w=Object(J.a)(S.a.mark(function I(){var p,i,g,b,C;return S.a.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return p=e("K+nK"),h.t0=p,h.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return h.t1=h.sent,i=(0,h.t0)(h.t1),h.t2=p,h.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(17)]).then(e.bind(null,"c2mQ"));case 9:return h.t3=h.sent,g=(0,h.t2)(h.t3),h.next=13,e.e(21).then(e.bind(null,"8iYR"));case 13:return b=h.sent,C=function(){return i.default.createElement(g.default,{schema:b.titleTrick})},h.abrupt("return",C);case 16:case"end":return h.stop()}},I)}));function T(){return w.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { titleTrick } from '../json/schema';

export default () => <FR schema={titleTrick} />;`},"demo/FR.jsx":{import:"../demo/FR",content:ce},"json/schema.js":{import:"../json/schema",content:Pn}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.6.9"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo-1"}},"docs-playground":{component:Object(W.dynamic)({loader:function(){var w=Object(J.a)(S.a.mark(function I(){return S.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"BASV"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},I)}));function T(){return w.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:Ce},"main.js":{import:"./main",content:cn},"json/simplest.json":{import:"./json/simplest.json",content:mn},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:Qe},"monaco/index.js":{import:"./monaco",content:sn},"theme.css":{import:"./theme.css",content:Ve},"index.css":{import:"./index.css",content:Fn}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:"^16.0.0"},"react-dom":{version:"^16.0.0"},"deep-equal":{version:"2.0.5"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.6.9"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-simple-code-editor":{version:"0.11.0"},prismjs:{version:"1.23.0"}},identifier:"docs-playground"}},"docs-playground1":{component:Object(W.dynamic)({loader:function(){var w=Object(J.a)(S.a.mark(function I(){return S.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"Wrpt"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},I)}));function T(){return w.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:Tn},"main.js":{import:"./main",content:gn},"json/simplest.json":{import:"./json/simplest.json",content:Ie},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:qn},"monaco/index.js":{import:"./monaco",content:Mn},"suggestionsMap.js":{import:"./suggestionsMap",content:_n},"index.css":{import:"./index.css",content:ot}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:"^17.x"},"react-dom":{version:">=16.9.0"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.6.9"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-monaco-editor":{version:"0.44.0"},"@types/react":{version:"^17.x"}},identifier:"docs-playground1"}},"table-render-advanced":{component:Object(W.dynamic)({loader:function(){var w=Object(J.a)(S.a.mark(function I(){return S.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"7ZP+"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},I)}));function T(){return w.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{tsx:et}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.5"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!0,identifier:"table-render-advanced"}},"table-render-nosearch":{component:Object(W.dynamic)({loader:function(){var w=Object(J.a)(S.a.mark(function I(){return S.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"CfUQ"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},I)}));function T(){return w.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{tsx:lt}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.5"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!0,identifier:"table-render-nosearch"}},"table-render-notitle":{component:Object(W.dynamic)({loader:function(){var w=Object(J.a)(S.a.mark(function I(){return S.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"/usH"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},I)}));function T(){return w.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{tsx:Kn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.5"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!0,identifier:"table-render-notitle"}},"table-render-paramtable":{component:Object(W.dynamic)({loader:function(){var w=Object(J.a)(S.a.mark(function I(){return S.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"48jF"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},I)}));function T(){return w.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{tsx:nt}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.5"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},umi:{version:"3.4.19"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!0,identifier:"table-render-paramtable"}},"table-render-demo":{component:Object(W.dynamic)({loader:function(){var w=Object(J.a)(S.a.mark(function I(){var p,i,g,b,C,s,h,o,F;return S.a.wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return p=e("K+nK"),D.t0=p,D.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return D.t1=D.sent,i=(0,D.t0)(D.t1),D.next=8,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(71)]).then(e.bind(null,"P2DI"));case 8:for(g=D.sent,b=[],C=0;C<6;C++)b.push({id:C.toString(),title:"\u6807\u9898".concat(C+1),created_at:new Date().getTime()});return s={type:"object",properties:{title:{title:"\u6807\u9898",type:"string",width:"30%"},created_at:{title:"\u521B\u5EFA\u65F6\u95F4",type:"string",format:"date",width:"30%"}}},h=[{title:"\u6807\u9898",dataIndex:"title"},{title:"\u521B\u5EFA\u65F6\u95F4",key:"since",dataIndex:"created_at",valueType:"date"},{title:"\u64CD\u4F5C",render:function(O,m){return i.default.createElement("a",{onClick:function(){return alert(O.title)}},"\u7F16\u8F91")}}],o=function(){var O=function(){return{rows:b,total:b.length}};return i.default.createElement(i.default.Fragment,null,i.default.createElement(g.Search,{schema:s,api:O}),i.default.createElement(g.Table,{headerTitle:"\u6700\u7B80\u8868\u683C",columns:h,rowKey:"id"}))},F=(0,g.withTable)(o),D.abrupt("return",F);case 16:case"end":return D.stop()}},I)}));function T(){return w.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default withTable(Wrapper);`}},dependencies:{react:{version:">=16.8.0"},"table-render":{version:"1.1.5"},antd:{version:"4.x",css:"antd/dist/antd.css"}},transform:!0,defaultShowCode:!0,identifier:"table-render-demo"}},"generator-demo":{component:Object(W.dynamic)({loader:function(){var w=Object(J.a)(S.a.mark(function I(){var p,i,g,b,C,s;return S.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return p=e("K+nK"),o.t0=p,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,i=(0,o.t0)(o.t1),o.t2=p,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(70)]).then(e.bind(null,"nYSz"));case 9:return o.t3=o.sent,g=(0,o.t2)(o.t3),b={type:"object",properties:{inputName:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string"}}},C=function(){return i.default.createElement("div",{style:{height:"80vh"}},i.default.createElement(g.default,{defaultValue:b}))},s=C,o.abrupt("return",s);case 15:case"end":return o.stop()}},I)}));function T(){return w.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.4.6"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"generator-demo"}},"generator-modal":{component:Object(W.dynamic)({loader:function(){var w=Object(J.a)(S.a.mark(function I(){return S.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"PPgD"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},I)}));function T(){return w.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:$n}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.4.6"},"react-dom":{version:">=16.9.0"}},identifier:"generator-modal"}},"generator-settings":{component:Object(W.dynamic)({loader:function(){var w=Object(J.a)(S.a.mark(function I(){return S.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"M63W"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},I)}));function T(){return w.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:ut}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.4.6"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-settings"}},"generator-layout":{component:Object(W.dynamic)({loader:function(){var w=Object(J.a)(S.a.mark(function I(){return S.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"SOdT"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},I)}));function T(){return w.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:Bn},"index.less":{import:"./index.less",content:Nn}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.4.6"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-layout"}},"generator-transformer":{component:Object(W.dynamic)({loader:function(){var w=Object(J.a)(S.a.mark(function I(){return S.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"jktF"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},I)}));function T(){return w.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:Vn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.4.6"},"react-dom":{version:">=16.9.0"}},identifier:"generator-transformer"}},"generator-playground":{component:Object(W.dynamic)({loader:function(){var w=Object(J.a)(S.a.mark(function I(){return S.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(28)]).then(e.bind(null,"TYW4"));case 2:return i.abrupt("return",i.sent.default);case 3:case"end":return i.stop()}},I)}));function T(){return w.apply(this,arguments)}return T}()}),previewerProps:{sources:{_:{jsx:tt},"index.less":{import:"./index.less",content:Nn}},dependencies:{react:{version:">=16.8.0"},umi:{version:"3.4.19"},"fr-generator":{version:"2.4.6"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-playground"}}}},LiGJ:function(Dn,dn,e){"use strict";e.r(dn);var J=e("q1tI"),r=e.n(J),S=e("dEAq"),W=e.n(S),re=e("0zqC"),x=e("JjdP"),Fe=r.a.memo(x.default["display-demo"].component),Ee=r.a.memo(x.default["display-demo-1"].component),ce=r.a.memo(x.default["display-demo-2"].component),Pn=r.a.memo(x.default["display-demo-3"].component),Ce=r.a.memo(x.default["display-demo-4"].component),cn=r.a.memo(x.default["display-demo-5"].component),mn=r.a.memo(x.default["display-demo-6"].component);dn.default=Qe=>(r.a.useEffect(()=>{Qe!=null&&Qe.location.hash&&S.AnchorLink.scrollToAnchor(decodeURIComponent(Qe.location.hash.slice(1)))},[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"\u5C55\u793A\u7684\u6700\u4F73\u5B9E\u8DF5"},r.a.createElement(S.AnchorLink,{to:"#\u5C55\u793A\u7684\u6700\u4F73\u5B9E\u8DF5","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u5C55\u793A\u7684\u6700\u4F73\u5B9E\u8DF5"),r.a.createElement("h2",{id:"displaytype"},r.a.createElement(S.AnchorLink,{to:"#displaytype","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),r.a.createElement("code",null,"displayType")),r.a.createElement("ul",null,r.a.createElement("li",null,"\u7C7B\u578B\uFF1A'row' | 'column' | 'inline'"),r.a.createElement("li",null,"\u9ED8\u8BA4\u503C\uFF1A 'column'"),r.a.createElement("li",null,"\u8BF4\u660E\uFF1A\u7528\u4E8E\u63A7\u5236\u6807\u7B7E\u7684\u4F4D\u7F6E\u3002\u6CA1\u6709\u7279\u6B8A\u60C5\u51B5\uFF0C\u4E00\u822C\u5EFA\u8BAE\u4F7F\u7528\u9ED8\u8BA4\u7684 display: column\u3002\u6CE8\u610F ",r.a.createElement("code",null,"displayType")," \u65E2\u662F props\uFF0C\u53C8\u662F schema \u7684\u5B57\u6BB5\uFF0C\u53EF\u4EE5"))),r.a.createElement(re.default,x.default["display-demo"].previewerProps,r.a.createElement(Fe,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("h3",{id:"readonly"},r.a.createElement(S.AnchorLink,{to:"#readonly","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"ReadOnly"),r.a.createElement("p",null,"\u65B0\u589E\u4E86\u53EA\u8BFB\u6A21\u5F0F\uFF0C\u5728 <Form /> \u7EC4\u4EF6\u4E0A\u7528 props \u58F0\u660E")),r.a.createElement(re.default,x.default["display-demo-1"].previewerProps,r.a.createElement(Ee,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("h3",{id:"labelwidth"},r.a.createElement(S.AnchorLink,{to:"#labelwidth","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"labelWidth"),r.a.createElement("p",null,"\u6807\u7B7E\u7684\u5BBD\u5EA6\uFF0C\u53EF\u4EE5\u5728\u9876\u5C42\u7528 props \u58F0\u660E\uFF0C\u6216\u8005\u5728\u6BCF\u4E2A schema \u4E2D\u5355\u72EC\u58F0\u660E"),r.a.createElement("h3",{id:"width"},r.a.createElement(S.AnchorLink,{to:"#width","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"width"),r.a.createElement("p",null,"\u5143\u7D20\u7684\u5BBD\u5EA6\uFF0C\u5728\u6BCF\u4E2A schema \u4E2D\u5355\u72EC\u58F0\u660E\u3002\u6CA1\u6709\u7279\u522B\u60C5\u51B5\uFF0C\u5EFA\u8BAE\u4E00\u884C\u4E00\u4E2A\u5143\u7D20\uFF08\u5373\u9ED8\u8BA4\u7684 100%\uFF09\uFF0C\u7B26\u5408\u7528\u6237\u586B\u5199\u8868\u5355\u7684\u4E60\u60EF")),r.a.createElement(re.default,x.default["display-demo-2"].previewerProps,r.a.createElement(ce,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("h3",{id:"\u5217\u8868\u7684\u5C55\u793A"},r.a.createElement(S.AnchorLink,{to:"#\u5217\u8868\u7684\u5C55\u793A","aria-hidden":"true",tabIndex:-1},r.a.createElement("span",{className:"icon icon-link"})),"\u5217\u8868\u7684\u5C55\u793A"),r.a.createElement("p",null,"\u5217\u8868\u7684\u5C55\u793A\u5BF9\u4E8E\u7B80\u5355\u9700\u6C42\u5360\u4F4D\u592A\u591A\uFF0C\u590D\u6742\u9700\u6C42\u5B9A\u5236\u4E0D\u591F\u4E00\u76F4\u662F\u75DB\u70B9\u3002\u6240\u4EE5\u6211\u4EEC\u7ED9\u51FA\u4E86 5 \u79CD\u5C55\u793A\uFF0C\u5145\u5206\u6EE1\u8DB3\u4ECE\u6781\u7B80\u5230\u590D\u6742\u7684\u6240\u6709\u9700\u6C42\u3002\u8BE6\u89C1",r.a.createElement(S.Link,{to:"/advanced/listDisplay"},"\u5217\u8868\u5C55\u793A")),r.a.createElement("ol",null,r.a.createElement("li",null,"\u9ED8\u8BA4\u5C55\u793A\u4F7F\u7528 widget: 'list0'\uFF0C\u5361\u7247\u7C7B\u578B\uFF0C\u7528\u4E8E\u5C55\u793A\u6570\u91CF\u4E0D\u592A\u591A\u4F46\u7ED3\u6784\u590D\u6742\u7684 list"))),r.a.createElement(re.default,x.default["display-demo-3"].previewerProps,r.a.createElement(Pn,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("ol",{start:2},r.a.createElement("li",null,"widget: 'list1' \u7528\u4E8E\u5C55\u793A\u6BCF\u884C\u53EA\u6709 1-3 \u4E2A\u7B80\u5355\u5143\u7D20\u7684\u60C5\u51B5"))),r.a.createElement(re.default,x.default["display-demo-4"].previewerProps,r.a.createElement(Ce,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("ol",{start:3},r.a.createElement("li",null,"widget: 'list2' \u7528\u4E8E\u5C55\u793A\u6BCF\u884C\u53EA\u6709 3 - n \u4E2A\u7B80\u5355\u5143\u7D20\u7684\u60C5\u51B5\uFF0C\u7279\u522B\u662F\u6570\u636E\u91CF\u5F88\u5927\u9700\u8981\u5206\u9875\u7684"))),r.a.createElement(re.default,x.default["display-demo-5"].previewerProps,r.a.createElement(cn,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("ol",{start:4},r.a.createElement("li",null,"widget: 'list3' \u7528\u4E8E\u5C55\u793A\u5B58\u5728\u5217\u8868\u5957\u5217\u8868\uFF0C\u5217\u8868\u5957\u5BF9\u8C61\u7B49\u590D\u6742\u5143\u7D20\u7684\u60C5\u51B5"))),r.a.createElement(re.default,x.default["display-demo-6"].previewerProps,r.a.createElement(mn,null)))))},TIsu:function(Dn,dn,e){},Zs1V:function(Dn){Dn.exports=JSON.parse("{}")},p8sG:function(Dn,dn,e){"use strict";Dn.exports=e("80pN")}}]);
