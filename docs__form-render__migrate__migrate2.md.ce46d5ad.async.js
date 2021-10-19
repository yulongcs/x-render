(window.webpackJsonp=window.webpackJsonp||[]).push([[52,13],{"0zqC":function(Pn,cn,e){"use strict";e.r(cn);var K=e("tJVT"),i=e("q1tI"),g=e.n(i),B=e("wx14"),ue=e("rePB"),z=e("ODXe"),je=e("U8pU"),Se=e("Ff2n"),oe=e("VTBJ"),Jn=e("TSYQ"),Re=e.n(Jn),Fn=e("Zm9Q"),Tn=e("5Z9U"),gn=e("6cGi"),on=e("KQm4"),$e=e("wgJM"),Bn=e("t23M");function Nn(l){var m=Object(i.useRef)(),y=Object(i.useRef)(!1);function R(){for(var j=arguments.length,S=new Array(j),T=0;T<j;T++)S[T]=arguments[T];y.current||($e.a.cancel(m.current),m.current=Object($e.a)(function(){l.apply(void 0,S)}))}return Object(i.useEffect)(function(){return function(){y.current=!0,$e.a.cancel(m.current)}},[]),R}function yn(l){var m=Object(i.useRef)([]),y=Object(i.useState)({}),R=Object(z.a)(y,2),j=R[1],S=Object(i.useRef)(typeof l=="function"?l():l),T=Nn(function(){var M=S.current;m.current.forEach(function(W){M=W(M)}),m.current=[],S.current=M,j({})});function w(M){m.current.push(M),T()}return[S.current,w]}var Te=e("4IlW");function rt(l,m){var y,R=l.prefixCls,j=l.id,S=l.active,T=l.rtl,w=l.tab,M=w.key,W=w.tab,L=w.disabled,U=w.closeIcon,J=l.tabBarGutter,re=l.tabPosition,H=l.closable,G=l.renderWrapper,se=l.removeAriaLabel,V=l.editable,q=l.onClick,ne=l.onRemove,Q=l.onFocus,ae="".concat(R,"-tab");i.useEffect(function(){return ne},[]);var k={};re==="top"||re==="bottom"?k[T?"marginLeft":"marginRight"]=J:k.marginBottom=J;var fe=V&&H!==!1&&!L;function _(te){L||q(te)}function le(te){te.preventDefault(),te.stopPropagation(),V.onEdit("remove",{key:M,event:te})}var de=i.createElement("div",{key:M,ref:m,className:Re()(ae,(y={},Object(ue.a)(y,"".concat(ae,"-with-remove"),fe),Object(ue.a)(y,"".concat(ae,"-active"),S),Object(ue.a)(y,"".concat(ae,"-disabled"),L),y)),style:k,onClick:_},i.createElement("div",{role:"tab","aria-selected":S,id:j&&"".concat(j,"-tab-").concat(M),className:"".concat(ae,"-btn"),"aria-controls":j&&"".concat(j,"-panel-").concat(M),"aria-disabled":L,tabIndex:L?null:0,onClick:function(Y){Y.stopPropagation(),_(Y)},onKeyDown:function(Y){[Te.a.SPACE,Te.a.ENTER].includes(Y.which)&&(Y.preventDefault(),_(Y))},onFocus:Q},W),fe&&i.createElement("button",{type:"button","aria-label":se||"remove",tabIndex:0,className:"".concat(ae,"-remove"),onClick:function(Y){Y.stopPropagation(),le(Y)}},U||V.removeIcon||"\xD7"));return G&&(de=G(de)),de}var Mn=i.forwardRef(rt),at={width:0,height:0,left:0,top:0};function pt(l,m,y){return Object(i.useMemo)(function(){for(var R,j=new Map,S=m.get((R=l[0])===null||R===void 0?void 0:R.key)||at,T=S.left+S.width,w=0;w<l.length;w+=1){var M=l[w].key,W=m.get(M);if(!W){var L;W=m.get((L=l[w-1])===null||L===void 0?void 0:L.key)||at}var U=j.get(M)||Object(oe.a)({},W);U.right=T-U.left-U.width,j.set(M,U)}return j},[l.map(function(R){return R.key}).join("_"),m,y])}var st={width:0,height:0,left:0,top:0,right:0};function ft(l,m,y,R,j){var S=j.tabs,T=j.tabPosition,w=j.rtl,M,W,L;["top","bottom"].includes(T)?(M="width",W=w?"right":"left",L=Math.abs(m.left)):(M="height",W="top",L=-m.top);var U=m[M],J=y[M],re=R[M],H=U;return J+re>U&&(H=U-re),Object(i.useMemo)(function(){if(!S.length)return[0,0];for(var G=S.length,se=G,V=0;V<G;V+=1){var q=l.get(S[V].key)||st;if(q[W]+q[M]>L+H){se=V-1;break}}for(var ne=0,Q=G-1;Q>=0;Q-=1){var ae=l.get(S[Q].key)||st;if(ae[W]<L){ne=Q+1;break}}return[ne,se]},[l,L,H,T,S.map(function(G){return G.key}).join("_"),w])}var Kn=e("Gytx"),it=e.n(Kn),zn=e("Kwbf");function ht(l,m){var y=l.prefixCls,R=l.invalidate,j=l.item,S=l.renderItem,T=l.responsive,w=l.registerSize,M=l.itemKey,W=l.className,L=l.style,U=l.children,J=l.display,re=l.order,H=l.component,G=H===void 0?"div":H,se=Object(Se.a)(l,["prefixCls","invalidate","item","renderItem","responsive","registerSize","itemKey","className","style","children","display","order","component"]),V=T&&!J;function q(fe){w(M,fe)}i.useEffect(function(){return function(){q(null)}},[]);var ne=S&&j!==void 0?S(j):U,Q;R||(Q={opacity:V?0:1,height:V?0:void 0,overflowY:V?"hidden":void 0,order:T?re:void 0,pointerEvents:V?"none":void 0});var ae={};V&&(ae["aria-hidden"]=!0);var k=i.createElement(G,Object(B.a)({className:Re()(!R&&y,W),style:Object(oe.a)(Object(oe.a)({},Q),L)},ae,se,{ref:m}),ne);return T&&(k=i.createElement(Bn.default,{onResize:function(_){var le=_.offsetWidth;q(le)}},k)),k}var Wn=i.forwardRef(ht);Wn.displayName="Item";var Ln=Wn;function Un(){var l=Object(i.useState)({}),m=Object(z.a)(l,2),y=m[1],R=Object(i.useRef)([]),j=Object(i.useRef)(!1),S=0,T=0;Object(i.useEffect)(function(){return function(){j.current=!0}},[]);function w(M){var W=S;S+=1,R.current.length<W+1&&(R.current[W]=M);var L=R.current[W];function U(J){R.current[W]=typeof J=="function"?J(R.current[W]):J,$e.a.cancel(T),T=Object($e.a)(function(){j.current||y({})})}return[L,U]}return w}var ot=function(m,y){var R=i.useContext(mn);if(!R){var j=m.component,S=j===void 0?"div":j,T=Object(Se.a)(m,["component"]);return i.createElement(S,Object(B.a)({},T,{ref:y}))}var w=R.className,M=Object(Se.a)(R,["className"]),W=m.className,L=Object(Se.a)(m,["className"]);return i.createElement(mn.Provider,{value:null},i.createElement(Ln,Object(B.a)({ref:y,className:Re()(w,W)},M,L)))},xn=i.forwardRef(ot);xn.displayName="RawItem";var lt=xn,mn=i.createContext(null),Yn="responsive",Hn="invalidate";function ln(l){return"+ ".concat(l.length," ...")}function vt(l,m){var y=l.prefixCls,R=y===void 0?"rc-overflow":y,j=l.data,S=j===void 0?[]:j,T=l.renderItem,w=l.renderRawItem,M=l.itemKey,W=l.itemWidth,L=W===void 0?10:W,U=l.ssr,J=l.style,re=l.className,H=l.maxCount,G=l.renderRest,se=l.renderRawRest,V=l.suffix,q=l.component,ne=q===void 0?"div":q,Q=l.itemComponent,ae=l.onVisibleChange,k=Object(Se.a)(l,["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"]),fe=Un(),_=U==="full",le=fe(null),de=Object(z.a)(le,2),te=de[0],Y=de[1],ie=te||0,pe=fe(new Map),me=Object(z.a)(pe,2),ye=me[0],Ne=me[1],he=fe(0),ge=Object(z.a)(he,2),Pe=ge[0],De=ge[1],Ce=fe(0),Oe=Object(z.a)(Ce,2),Ie=Oe[0],Ye=Oe[1],Ae=fe(0),Be=Object(z.a)(Ae,2),xe=Be[0],we=Be[1],On=Object(i.useState)(null),Xe=Object(z.a)(On,2),Ve=Xe[0],en=Xe[1],pn=Object(i.useState)(null),fn=Object(z.a)(pn,2),Ee=fn[0],Ke=fn[1],He=i.useMemo(function(){return Ee===null&&_?Number.MAX_SAFE_INTEGER:Ee||0},[Ee,te]),Je=Object(i.useState)(!1),In=Object(z.a)(Je,2),Qn=In[0],An=In[1],Ze="".concat(R,"-item"),Cn=Math.max(Pe,Ie),nn=S.length&&H===Yn,Sn=H===Hn,Ge=nn||typeof H=="number"&&S.length>H,ke=Object(i.useMemo)(function(){var ce=S;return nn?te===null&&_?ce=S:ce=S.slice(0,Math.min(S.length,ie/L)):typeof H=="number"&&(ce=S.slice(0,H)),ce},[S,L,te,H,nn]),Rn=Object(i.useMemo)(function(){return nn?S.slice(He+1):S.slice(ke.length)},[S,ke,nn,He]),an=Object(i.useCallback)(function(ce,be){var Fe;return typeof M=="function"?M(ce):(Fe=M&&(ce==null?void 0:ce[M]))!==null&&Fe!==void 0?Fe:be},[M]),ze=Object(i.useCallback)(T||function(ce){return ce},[T]);function We(ce,be){Ke(ce),be||(An(ce<S.length-1),ae==null||ae(ce))}function Xn(ce,be){Y(be.clientWidth)}function Zn(ce,be){Ne(function(Fe){var Qe=new Map(Fe);return be===null?Qe.delete(ce):Qe.set(ce,be),Qe})}function dt(ce,be){Ye(be),De(Ie)}function hn(ce,be){we(be)}function dn(ce){return ye.get(an(ke[ce],ce))}i.useLayoutEffect(function(){if(ie&&Cn&&ke){var ce=xe,be=ke.length,Fe=be-1;if(!be){We(0),en(null);return}for(var Qe=0;Qe<be;Qe+=1){var et=dn(Qe);if(et===void 0){We(Qe-1,!0);break}if(ce+=et,Qe===Fe-1&&ce+dn(Fe)<=ie){We(Fe),en(null);break}else if(ce+Cn>ie){We(Qe-1),en(ce-et-xe+Ie);break}else if(Qe===Fe){We(Fe),en(ce-xe);break}}V&&dn(0)+xe>ie&&en(null)}},[ie,ye,Ie,xe,an,ke]);var kn=Qn&&!!Rn.length,vn={};Ve!==null&&nn&&(vn={position:"absolute",left:Ve,top:0});var sn={prefixCls:Ze,responsive:nn,component:Q,invalidate:Sn},qn=w?function(ce,be){var Fe=an(ce,be);return i.createElement(mn.Provider,{key:Fe,value:Object(oe.a)(Object(oe.a)({},sn),{},{order:be,item:ce,itemKey:Fe,registerSize:Zn,display:be<=He})},w(ce,be))}:function(ce,be){var Fe=an(ce,be);return i.createElement(Ln,Object(B.a)({},sn,{order:be,key:Fe,item:ce,renderItem:ze,itemKey:Fe,registerSize:Zn,display:be<=He}))},En,_n={order:kn?He:Number.MAX_SAFE_INTEGER,className:"".concat(Ze,"-rest"),registerSize:dt,display:kn};if(se)se&&(En=i.createElement(mn.Provider,{value:Object(oe.a)(Object(oe.a)({},sn),_n)},se(Rn)));else{var tn=G||ln;En=i.createElement(Ln,Object(B.a)({},sn,_n),typeof tn=="function"?tn(Rn):tn)}var jn=i.createElement(ne,Object(B.a)({className:Re()(!Sn&&R,re),style:J,ref:m},k),ke.map(qn),Ge?En:null,V&&i.createElement(Ln,Object(B.a)({},sn,{order:He,className:"".concat(Ze,"-suffix"),registerSize:hn,display:!0,style:vn}),V));return nn&&(jn=i.createElement(Bn.default,{onResize:Xn},jn)),jn}var wn=i.forwardRef(vt);wn.displayName="Overflow",wn.Item=lt,wn.RESPONSIVE=Yn,wn.INVALIDATE=Hn;var P=wn,E=P,F=e("1OyB"),f=e("vuIU"),a=e("Ji7U"),v=e("LK+K"),b=e("bT9E"),O=e("YrtM"),s=i.createContext(null);function p(l,m){var y=Object(oe.a)({},l);return Object.keys(m).forEach(function(R){var j=m[R];j!==void 0&&(y[R]=j)}),y}function o(l){var m=l.children,y=l.locked,R=Object(Se.a)(l,["children","locked"]),j=i.useContext(s),S=Object(O.a)(function(){return p(j,R)},[j,R],function(T,w){return!y&&(T[0]!==w[0]||!it()(T[1],w[1]))});return i.createElement(s.Provider,{value:S},m)}function N(l,m,y,R){var j=i.useContext(s),S=j.activeKey,T=j.onActive,w=j.onInactive,M={active:S===l};return m||(M.onMouseEnter=function(W){y==null||y({key:l,domEvent:W}),T(l)},M.onMouseLeave=function(W){R==null||R({key:l,domEvent:W}),w(l)}),M}function I(l){var m=l.item,y=Object(Se.a)(l,["item"]);return Object.defineProperty(y,"item",{get:function(){return Object(zn.a)(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),m}}),y}function r(l){var m=l.icon,y=l.props,R=l.children,j;return typeof m=="function"?j=i.createElement(m,Object(oe.a)({},y)):j=m,j||R||null}function t(l){var m=i.useContext(s),y=m.mode,R=m.rtl,j=m.inlineIndent;if(y!=="inline")return null;var S=l;return R?{paddingRight:S*j}:{paddingLeft:S*j}}var u=[],c=i.createContext(null);function n(){return i.useContext(c)}var h=i.createContext(u);function d(l){var m=i.useContext(h);return i.useMemo(function(){return l!==void 0?[].concat(Object(on.a)(m),[l]):m},[m,l])}var C=i.createContext(null),D=i.createContext(null);function A(l,m){return l===void 0?null:"".concat(l,"-").concat(m)}function $(l){var m=i.useContext(D);return A(m,l)}var x=function(l){Object(a.a)(y,l);var m=Object(v.a)(y);function y(){return Object(F.a)(this,y),m.apply(this,arguments)}return Object(f.a)(y,[{key:"render",value:function(){var j=this.props,S=j.title,T=j.attribute,w=j.elementRef,M=Object(Se.a)(j,["title","attribute","elementRef"]),W=Object(b.a)(M,["eventKey"]);return Object(zn.a)(!T,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),i.createElement(E.Item,Object(B.a)({},T,{title:typeof S=="string"?S:void 0},W,{ref:w}))}}]),y}(i.Component),Z=function(m){var y,R=m.style,j=m.className,S=m.eventKey,T=m.disabled,w=m.itemIcon,M=m.children,W=m.role,L=m.onMouseEnter,U=m.onMouseLeave,J=m.onClick,re=m.onKeyDown,H=m.onFocus,G=Object(Se.a)(m,["style","className","eventKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"]),se=$(S),V=i.useContext(s),q=V.prefixCls,ne=V.onItemClick,Q=V.disabled,ae=V.overflowDisabled,k=V.itemIcon,fe=V.selectedKeys,_=V.onActive,le="".concat(q,"-item"),de=i.useRef(),te=i.useRef(),Y=Q||T,ie=d(S),pe=function(Ae){return{key:S,keyPath:ie,item:de.current,domEvent:Ae}},me=w||k,ye=N(S,Y,L,U),Ne=ye.active,he=Object(Se.a)(ye,["active"]),ge=fe.includes(S),Pe=t(ie.length),De=function(Ae){if(!Y){var Be=pe(Ae);J==null||J(I(Be)),ne(Be)}},Ce=function(Ae){if(re==null||re(Ae),Ae.which===Te.a.ENTER){var Be=pe(Ae);J==null||J(I(Be)),ne(Be)}},Oe=function(Ae){_(S),H==null||H(Ae)},Ie={};return m.role==="option"&&(Ie["aria-selected"]=ge),i.createElement(x,Object(B.a)({ref:de,elementRef:te,role:W===null?"none":W||"menuitem",tabIndex:T?null:-1,"data-menu-id":ae&&se?null:se},G,he,Ie,{component:"li","aria-disabled":T,style:Object(oe.a)(Object(oe.a)({},Pe),R),className:Re()(le,(y={},Object(ue.a)(y,"".concat(le,"-active"),Ne),Object(ue.a)(y,"".concat(le,"-selected"),ge),Object(ue.a)(y,"".concat(le,"-disabled"),Y),y),j),onClick:De,onKeyDown:Ce,onFocus:Oe}),M,i.createElement(r,{props:Object(oe.a)(Object(oe.a)({},m),{},{isSelected:ge}),icon:me}))};function Le(l){var m=l.eventKey,y=n(),R=d(m);return i.useEffect(function(){if(y)return y.registerPath(m,R),function(){y.unregisterPath(m,R)}},[R]),y?null:i.createElement(Z,l)}var Ue=Le;function rn(l,m){return Object(Fn.a)(l).map(function(y,R){if(i.isValidElement(y)){var j=y.key;return j==null&&(j="tmp_key-".concat([].concat(Object(on.a)(m),[R]).join("-"))),i.cloneElement(y,{key:j,eventKey:j})}return y})}function _e(l){var m=i.useRef(l);m.current=l;var y=i.useCallback(function(){for(var R,j=arguments.length,S=new Array(j),T=0;T<j;T++)S[T]=arguments[T];return(R=m.current)===null||R===void 0?void 0:R.call.apply(R,[m].concat(S))},[]);return l?y:void 0}var Gn=function(m,y){var R=m.className,j=m.children,S=Object(Se.a)(m,["className","children"]),T=i.useContext(s),w=T.prefixCls,M=T.mode;return i.createElement("ul",Object(B.a)({className:Re()(w,"".concat(w,"-sub"),"".concat(w,"-").concat(M==="inline"?"inline":"vertical"),R)},S,{"data-menu-list":!0,ref:y}),j)},bn=i.forwardRef(Gn);bn.displayName="SubMenuList";var ut=bn,Rr=e("uciX"),$n={adjustX:1,adjustY:1},kt={topLeft:{points:["bl","tl"],overflow:$n,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:$n,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:$n,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:$n,offset:[4,0]}},Er={topLeft:{points:["bl","tl"],overflow:$n,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:$n,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:$n,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:$n,offset:[4,0]}},pa=kt;function qt(l,m,y){if(m)return m;if(y)return y[l]||y.other}var jr={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function Dr(l){var m=l.prefixCls,y=l.visible,R=l.children,j=l.popup,S=l.popupClassName,T=l.popupOffset,w=l.disabled,M=l.mode,W=l.onVisibleChange,L=i.useContext(s),U=L.getPopupContainer,J=L.rtl,re=L.subMenuOpenDelay,H=L.subMenuCloseDelay,G=L.builtinPlacements,se=L.triggerSubMenuAction,V=L.forceSubMenuRender,q=L.motion,ne=L.defaultMotions,Q=i.useState(!1),ae=Object(z.a)(Q,2),k=ae[0],fe=ae[1],_=J?Object(oe.a)(Object(oe.a)({},Er),G):Object(oe.a)(Object(oe.a)({},kt),G),le=jr[M],de=qt(M,q,ne),te=Object(oe.a)(Object(oe.a)({},de),{},{leavedClassName:"".concat(m,"-hidden"),removeOnLeave:!1,motionAppear:!0}),Y=i.useRef();return i.useEffect(function(){return Y.current=Object($e.a)(function(){fe(y)}),function(){$e.a.cancel(Y.current)}},[y]),i.createElement(Rr.a,{prefixCls:m,popupClassName:Re()("".concat(m,"-popup"),Object(ue.a)({},"".concat(m,"-rtl"),J),S),stretch:M==="horizontal"?"minWidth":null,getPopupContainer:U,builtinPlacements:_,popupPlacement:le,popupVisible:k,popup:j,popupAlign:T&&{offset:T},action:w?[]:[se],mouseEnterDelay:re,mouseLeaveDelay:H,onPopupVisibleChange:W,forceRender:V,popupMotion:te},R)}var Pr=e("8XRh");function Fr(l){var m=l.id,y=l.open,R=l.keyPath,j=l.children,S="inline",T=i.useContext(s),w=T.prefixCls,M=T.forceSubMenuRender,W=T.motion,L=T.defaultMotions,U=T.mode,J=i.useRef(!1);J.current=U===S;var re=i.useState(!J.current),H=Object(z.a)(re,2),G=H[0],se=H[1],V=J.current?y:!1;i.useEffect(function(){J.current&&se(!1)},[U]);var q=Object(oe.a)({},qt(S,W,L));R.length>1&&(q.motionAppear=!1);var ne=q.onVisibleChanged;return q.onVisibleChanged=function(Q){return!J.current&&!Q&&se(!0),ne==null?void 0:ne(Q)},G?null:i.createElement(o,{mode:S,locked:!J.current},i.createElement(Pr.default,Object(B.a)({visible:V},q,{forceRender:M,removeOnLeave:!1,leavedClassName:"".concat(w,"-hidden")}),function(Q){var ae=Q.className,k=Q.style;return i.createElement(ut,{id:m,className:ae,style:k},j)}))}var Tr=function(m){var y,R=m.style,j=m.className,S=m.title,T=m.eventKey,w=m.disabled,M=m.internalPopupClose,W=m.children,L=m.itemIcon,U=m.expandIcon,J=m.popupClassName,re=m.popupOffset,H=m.onClick,G=m.onMouseEnter,se=m.onMouseLeave,V=m.onTitleClick,q=m.onTitleMouseEnter,ne=m.onTitleMouseLeave,Q=Object(Se.a)(m,["style","className","title","eventKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"]),ae=$(T),k=i.useContext(s),fe=k.prefixCls,_=k.mode,le=k.openKeys,de=k.disabled,te=k.overflowDisabled,Y=k.activeKey,ie=k.selectedKeys,pe=k.itemIcon,me=k.expandIcon,ye=k.onItemClick,Ne=k.onOpenChange,he=k.onActive,ge=i.useContext(C),Pe=ge.isSubPathKey,De=d(),Ce="".concat(fe,"-submenu"),Oe=de||w,Ie=i.useRef(),Ye=i.useRef(),Ae=L||pe,Be=U||me,xe=le.includes(T),we=!te&&xe,On=Pe(ie,T),Xe=N(T,Oe,q,ne),Ve=Xe.active,en=Object(Se.a)(Xe,["active"]),pn=i.useState(!1),fn=Object(z.a)(pn,2),Ee=fn[0],Ke=fn[1],He=function(We){Oe||Ke(We)},Je=function(We){He(!0),G==null||G({key:T,domEvent:We})},In=function(We){He(!1),se==null||se({key:T,domEvent:We})},Qn=i.useMemo(function(){return Ve||(_!=="inline"?Ee||Pe([Y],T):!1)},[_,Ve,Y,Ee,T,Pe]),An=t(De.length),Ze=function(We){Oe||(V==null||V({key:T,domEvent:We}),_==="inline"&&Ne(T,!xe))},Cn=_e(function(ze){H==null||H(I(ze)),ye(ze)}),nn=function(We){_!=="inline"&&Ne(T,We)},Sn=function(){he(T)},Ge=ae&&"".concat(ae,"-popup"),ke=i.createElement("div",Object(B.a)({role:"menuitem",style:An,className:"".concat(Ce,"-title"),tabIndex:Oe?null:-1,ref:Ie,title:typeof S=="string"?S:null,"data-menu-id":te&&ae?null:ae,"aria-expanded":we,"aria-haspopup":!0,"aria-controls":Ge,"aria-disabled":Oe,onClick:Ze,onFocus:Sn},en),S,i.createElement(r,{icon:_!=="horizontal"?Be:null,props:Object(oe.a)(Object(oe.a)({},m),{},{isOpen:we,isSubMenu:!0})},i.createElement("i",{className:"".concat(Ce,"-arrow")}))),Rn=i.useRef(_);if(_!=="inline"&&(Rn.current=De.length>1?"vertical":_),!te){var an=Rn.current;ke=i.createElement(Dr,{mode:an,prefixCls:Ce,visible:!M&&we&&_!=="inline",popupClassName:J,popupOffset:re,popup:i.createElement(o,{mode:an},i.createElement(ut,{id:Ge,ref:Ye},W)),disabled:Oe,onVisibleChange:nn},ke)}return i.createElement(o,{onItemClick:Cn,mode:_==="horizontal"?"vertical":_,itemIcon:Ae,expandIcon:Be},i.createElement(E.Item,Object(B.a)({role:"none"},Q,{component:"li",style:R,className:Re()(Ce,"".concat(Ce,"-").concat(_),j,(y={},Object(ue.a)(y,"".concat(Ce,"-open"),we),Object(ue.a)(y,"".concat(Ce,"-active"),Qn),Object(ue.a)(y,"".concat(Ce,"-selected"),On),Object(ue.a)(y,"".concat(Ce,"-disabled"),Oe),y)),onMouseEnter:Je,onMouseLeave:In}),ke,!te&&i.createElement(Fr,{id:Ge,open:we,keyPath:De},W)))};function _t(l){var m=l.eventKey,y=l.children,R=d(m),j=rn(y,R),S=n();i.useEffect(function(){if(S)return S.registerPath(m,R),function(){S.unregisterPath(m,R)}},[R]);var T;return S?T=j:T=i.createElement(Tr,l,j),i.createElement(h.Provider,{value:R},T)}var Nr=e("x/xZ");function er(l){var m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Object(Nr.a)(l)){var y=l.nodeName.toLowerCase(),R=["input","select","textarea","button"].includes(y)||l.isContentEditable||y==="a"&&!!l.getAttribute("href"),j=l.getAttribute("tabindex"),S=Number(j),T=null;return j&&!Number.isNaN(S)?T=S:R&&T===null&&(T=0),R&&l.disabled&&(T=null),T!==null&&(T>=0||m&&T<0)}return!1}function nr(l){var m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,y=Object(on.a)(l.querySelectorAll("*")).filter(function(R){return er(R,m)});return er(l,m)&&y.unshift(l),y}var Rt=null;function fa(){Rt=document.activeElement}function ha(){Rt=null}function va(){if(Rt)try{Rt.focus()}catch(l){}}function ga(l,m){if(m.keyCode===9){var y=nr(l),R=y[m.shiftKey?0:y.length-1],j=R===document.activeElement||l===document.activeElement;if(j){var S=y[m.shiftKey?y.length-1:0];S.focus(),m.preventDefault()}}}var Wt=Te.a.LEFT,Lt=Te.a.RIGHT,xt=Te.a.UP,Et=Te.a.DOWN,jt=Te.a.ENTER,tr=Te.a.ESC,rr=[xt,Et,Wt,Lt];function wr(l,m,y,R){var j,S,T,w,M="prev",W="next",L="children",U="parent";if(l==="inline"&&R===jt)return{inlineTrigger:!0};var J=(j={},Object(ue.a)(j,xt,M),Object(ue.a)(j,Et,W),j),re=(S={},Object(ue.a)(S,Wt,y?W:M),Object(ue.a)(S,Lt,y?M:W),Object(ue.a)(S,Et,L),Object(ue.a)(S,jt,L),S),H=(T={},Object(ue.a)(T,xt,M),Object(ue.a)(T,Et,W),Object(ue.a)(T,jt,L),Object(ue.a)(T,tr,U),Object(ue.a)(T,Wt,y?L:U),Object(ue.a)(T,Lt,y?U:L),T),G={inline:J,horizontal:re,vertical:H,inlineSub:J,horizontalSub:H,verticalSub:H},se=(w=G["".concat(l).concat(m?"":"Sub")])===null||w===void 0?void 0:w[R];switch(se){case M:return{offset:-1,sibling:!0};case W:return{offset:1,sibling:!0};case U:return{offset:-1,sibling:!1};case L:return{offset:1,sibling:!1};default:return null}}function Ir(l){for(var m=l;m;){if(m.getAttribute("data-menu-list"))return m;m=m.parentElement}return null}function Ar(l,m){for(var y=l||document.activeElement;y;){if(m.has(y))return y;y=y.parentElement}return null}function Br(l,m){var y=nr(l,!0);return y.filter(function(R){return m.has(R)})}function ar(l,m,y){var R=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!l)return null;var j=Br(l,m),S=j.length,T=j.findIndex(function(w){return y===w});return R<0?T===-1?T=S-1:T-=1:R>0&&(T+=1),T=(T+S)%S,j[T]}function Mr(l,m,y,R,j,S,T,w,M,W){var L=i.useRef(),U=i.useRef();U.current=m;var J=function(){$e.a.cancel(L.current)};return i.useEffect(function(){return function(){J()}},[]),function(re){var H=re.which;if([].concat(rr,[jt,tr]).includes(H)){var G,se,V,q=function(){G=new Set,se=new Map,V=new Map;var pe=S();return pe.forEach(function(me){var ye=document.querySelector("[data-menu-id='".concat(A(R,me),"']"));ye&&(G.add(ye),V.set(ye,me),se.set(me,ye))}),G};q();var ne=se.get(m),Q=Ar(ne,G),ae=V.get(Q),k=wr(l,T(ae,!0).length===1,y,H);if(!k)return;rr.includes(H)&&re.preventDefault();var fe=function(pe){if(pe){var me=pe,ye=pe.querySelector("a");(ye==null?void 0:ye.getAttribute("href"))&&(me=ye);var Ne=V.get(pe);w(Ne),J(),L.current=Object($e.a)(function(){U.current===Ne&&me.focus()})}};if(k.sibling||!Q){var _;!Q||l==="inline"?_=j.current:_=Ir(Q);var le=ar(_,G,Q,k.offset);fe(le)}else if(k.inlineTrigger)M(ae);else if(k.offset>0)M(ae,!0),J(),L.current=Object($e.a)(function(){q();var ie=Q.getAttribute("aria-controls"),pe=document.getElementById(ie),me=ar(pe,G);fe(me)},5);else if(k.offset<0){var de=T(ae,!0),te=de[de.length-2],Y=se.get(te);M(te,!1),fe(Y)}}W==null||W(re)}}var Kr=Math.random().toFixed(5).toString().slice(2),sr=0;function Wr(l){var m=Object(gn.a)(l,{value:l}),y=Object(z.a)(m,2),R=y[0],j=y[1];return i.useEffect(function(){sr+=1;var S="".concat(Kr,"-").concat(sr);j("rc-menu-uuid-".concat(S))},[]),R}var ya=e("p8sG");function Lr(l){Promise.resolve().then(l)}var $t="__RC_UTIL_PATH_SPLIT__",ir=function(m){return m.join($t)},xr=function(m){return m.split($t)},Vt="rc-menu-more";function $r(){var l=i.useState({}),m=Object(z.a)(l,2),y=m[1],R=Object(i.useRef)(new Map),j=Object(i.useRef)(new Map),S=i.useState([]),T=Object(z.a)(S,2),w=T[0],M=T[1],W=Object(i.useRef)(0),L=Object(i.useCallback)(function(V,q){var ne=ir(q);j.current.set(ne,V),R.current.set(V,ne),W.current+=1;var Q=W.current;Lr(function(){Q===W.current&&y({})})},[]),U=Object(i.useCallback)(function(V,q){var ne=ir(q);j.current.delete(ne),R.current.delete(V)},[]),J=Object(i.useCallback)(function(V){M(V)},[]),re=Object(i.useCallback)(function(V,q){var ne=R.current.get(V)||"",Q=xr(ne);return q&&w.includes(Q[0])&&Q.unshift(Vt),Q},[w]),H=Object(i.useCallback)(function(V,q){return V.some(function(ne){var Q=re(ne,!0);return Q.includes(q)})},[re]),G=function(){var q=Object(on.a)(R.current.keys());return w.length&&q.push(Vt),q},se=Object(i.useCallback)(function(V){var q="".concat(R.current.get(V)).concat($t),ne=new Set;return Object(on.a)(j.current.keys()).forEach(function(Q){Q.startsWith(q)&&ne.add(j.current.get(Q))}),ne},[]);return{registerPath:L,unregisterPath:U,refreshOverflowKeys:J,isSubPathKey:H,getKeyPath:re,getKeys:G,getSubPathKeys:se}}var Dt=[],Vr=function(m){var y,R,j=m.prefixCls,S=j===void 0?"rc-menu":j,T=m.style,w=m.className,M=m.tabIndex,W=M===void 0?0:M,L=m.children,U=m.direction,J=m.id,re=m.mode,H=re===void 0?"vertical":re,G=m.inlineCollapsed,se=m.disabled,V=m.disabledOverflow,q=m.subMenuOpenDelay,ne=q===void 0?.1:q,Q=m.subMenuCloseDelay,ae=Q===void 0?.1:Q,k=m.forceSubMenuRender,fe=m.defaultOpenKeys,_=m.openKeys,le=m.activeKey,de=m.defaultActiveFirst,te=m.selectable,Y=te===void 0?!0:te,ie=m.multiple,pe=ie===void 0?!1:ie,me=m.defaultSelectedKeys,ye=m.selectedKeys,Ne=m.onSelect,he=m.onDeselect,ge=m.inlineIndent,Pe=ge===void 0?24:ge,De=m.motion,Ce=m.defaultMotions,Oe=m.triggerSubMenuAction,Ie=Oe===void 0?"hover":Oe,Ye=m.builtinPlacements,Ae=m.itemIcon,Be=m.expandIcon,xe=m.overflowedIndicator,we=xe===void 0?"...":xe,On=m.getPopupContainer,Xe=m.onClick,Ve=m.onOpenChange,en=m.onKeyDown,pn=m.openAnimation,fn=m.openTransitionName,Ee=Object(Se.a)(m,["prefixCls","style","className","tabIndex","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName"]),Ke=rn(L,Dt),He=i.useState(!1),Je=Object(z.a)(He,2),In=Je[0],Qn=Je[1],An=i.useRef(),Ze=Wr(J),Cn=U==="rtl",nn=i.useMemo(function(){return H==="inline"&&G?["vertical",G]:[H,!1]},[H,G]),Sn=Object(z.a)(nn,2),Ge=Sn[0],ke=Sn[1],Rn=i.useState(0),an=Object(z.a)(Rn,2),ze=an[0],We=an[1],Xn=ze>=Ke.length-1||Ge!=="horizontal"||V,Zn=Object(gn.a)(fe,{value:_,postState:function(X){return X||Dt}}),dt=Object(z.a)(Zn,2),hn=dt[0],dn=dt[1],kn=i.useState(hn),vn=Object(z.a)(kn,2),sn=vn[0],qn=vn[1],En=Ge==="inline",_n=i.useRef(!1);i.useEffect(function(){En&&qn(hn)},[hn]),i.useEffect(function(){if(!_n.current){_n.current=!0;return}if(En)dn(sn);else{var ee=[];dn(ee),Ve==null||Ve(ee)}},[En]);var tn=$r(),jn=tn.registerPath,ce=tn.unregisterPath,be=tn.refreshOverflowKeys,Fe=tn.isSubPathKey,Qe=tn.getKeyPath,et=tn.getKeys,Ft=tn.getSubPathKeys,Yt=i.useMemo(function(){return{registerPath:jn,unregisterPath:ce}},[jn,ce]),Ht=i.useMemo(function(){return{isSubPathKey:Fe}},[Fe]);i.useEffect(function(){be(Xn?Dt:Ke.slice(ze+1).map(function(ee){return ee.key}))},[ze,Xn]);var Gt=Object(gn.a)(le||de&&((y=Ke[0])===null||y===void 0?void 0:y.key),{value:le}),ct=Object(z.a)(Gt,2),Tt=ct[0],yt=ct[1],Nt=_e(function(ee){yt(ee)}),Qt=_e(function(){yt(void 0)}),wt=Object(gn.a)(me||[],{value:ye,postState:function(X){return Array.isArray(X)?X:X==null?Dt:[X]}}),It=Object(z.a)(wt,2),mt=It[0],Dn=It[1],At=function(X){if(!!Y){var ve=X.key,Me=mt.includes(ve),qe;Me?qe=mt.filter(function(tt){return tt!==ve}):pe?qe=[].concat(Object(on.a)(mt),[ve]):qe=[ve],Dn(qe);var Vn=Object(oe.a)(Object(oe.a)({},X),{},{selectedKeys:qe});Me?he==null||he(Vn):Ne==null||Ne(Vn)}},Bt=_e(function(ee){Xe==null||Xe(I(ee)),At(ee)}),bt=_e(function(ee,X){var ve=hn.filter(function(qe){return qe!==ee});if(X)ve.push(ee);else if(Ge!=="inline"){var Me=Ft(ee);ve=ve.filter(function(qe){return!Me.has(qe)})}it()(hn,ve)||(dn(ve),Ve==null||Ve(ve))}),nt=_e(On),Ot=function(X,ve){var Me=ve!=null?ve:!hn.includes(X);bt(X,Me)},Ct=Mr(Ge,Tt,Cn,Ze,An,et,Qe,yt,Ot,en);i.useEffect(function(){Qn(!0)},[]);var Mt=Ge!=="horizontal"||V?Ke:Ke.map(function(ee,X){return i.createElement(o,{key:ee.key,overflowDisabled:X>ze},ee)}),Kt=i.createElement(E,Object(B.a)({id:J,ref:An,prefixCls:"".concat(S,"-overflow"),component:"ul",itemComponent:Ue,className:Re()(S,"".concat(S,"-root"),"".concat(S,"-").concat(Ge),w,(R={},Object(ue.a)(R,"".concat(S,"-inline-collapsed"),ke),Object(ue.a)(R,"".concat(S,"-rtl"),Cn),R)),dir:U,style:T,role:"menu",tabIndex:W,data:Mt,renderRawItem:function(X){return X},renderRawRest:function(X){var ve=X.length,Me=ve?Ke.slice(-ve):null;return i.createElement(_t,{eventKey:Vt,title:we,disabled:Xn,internalPopupClose:ve===0},Me)},maxCount:Ge!=="horizontal"||V?E.INVALIDATE:E.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(X){We(X)},onKeyDown:Ct},Ee));return i.createElement(D.Provider,{value:Ze},i.createElement(o,{prefixCls:S,mode:Ge,openKeys:hn,rtl:Cn,disabled:se,motion:In?De:null,defaultMotions:In?Ce:null,activeKey:Tt,onActive:Nt,onInactive:Qt,selectedKeys:mt,inlineIndent:Pe,subMenuOpenDelay:ne,subMenuCloseDelay:ae,forceSubMenuRender:k,builtinPlacements:Ye,triggerSubMenuAction:Ie,getPopupContainer:nt,itemIcon:Ae,expandIcon:Be,onItemClick:Bt,onOpenChange:bt},i.createElement(C.Provider,{value:Ht},Kt),i.createElement(c.Provider,{value:Yt},Ke)))},Jr=Vr,zr=function(m){var y=m.className,R=m.title,j=m.eventKey,S=m.children,T=Object(Se.a)(m,["className","title","eventKey","children"]),w=i.useContext(s),M=w.prefixCls,W="".concat(M,"-item-group");return i.createElement("li",Object(B.a)({},T,{onClick:function(U){return U.stopPropagation()},className:Re()(W,y)}),i.createElement("div",{className:"".concat(W,"-title"),title:typeof R=="string"?R:void 0},R),i.createElement("ul",{className:"".concat(W,"-list")},S))};function Ur(l){var m=l.children,y=Object(Se.a)(l,["children"]),R=d(y.eventKey),j=rn(m,R),S=n();return S?j:i.createElement(zr,y,j)}function Yr(l){var m=l.className,y=l.style,R=i.useContext(s),j=R.prefixCls,S=n();return S?null:i.createElement("li",{className:Re()("".concat(j,"-item-divider"),m),style:y})}var gt=Jr;gt.Item=Ue,gt.SubMenu=_t,gt.ItemGroup=Ur,gt.Divider=Yr;var Hr=gt,Gr=e("eDIo");function Qr(l,m){var y=l.prefixCls,R=l.editable,j=l.locale,S=l.style;return!R||R.showAdd===!1?null:i.createElement("button",{ref:m,type:"button",className:"".concat(y,"-nav-add"),style:S,"aria-label":(j==null?void 0:j.addAriaLabel)||"Add tab",onClick:function(w){R.onEdit("add",{event:w})}},R.addIcon||"+")}var or=i.forwardRef(Qr);function Xr(l,m){var y=l.prefixCls,R=l.id,j=l.tabs,S=l.locale,T=l.mobile,w=l.moreIcon,M=w===void 0?"More":w,W=l.moreTransitionName,L=l.style,U=l.className,J=l.editable,re=l.tabBarGutter,H=l.rtl,G=l.onTabClick,se=Object(i.useState)(!1),V=Object(z.a)(se,2),q=V[0],ne=V[1],Q=Object(i.useState)(null),ae=Object(z.a)(Q,2),k=ae[0],fe=ae[1],_="".concat(R,"-more-popup"),le="".concat(y,"-dropdown"),de=k!==null?"".concat(_,"-").concat(k):null,te=S==null?void 0:S.dropdownAriaLabel,Y=i.createElement(Hr,{onClick:function(ge){var Pe=ge.key,De=ge.domEvent;G(Pe,De),ne(!1)},id:_,tabIndex:-1,role:"listbox","aria-activedescendant":de,selectedKeys:[k],"aria-label":te!==void 0?te:"expanded dropdown"},j.map(function(he){return i.createElement(Ue,{key:he.key,id:"".concat(_,"-").concat(he.key),role:"option","aria-controls":R&&"".concat(R,"-panel-").concat(he.key),disabled:he.disabled},he.tab)}));function ie(he){for(var ge=j.filter(function(Ie){return!Ie.disabled}),Pe=ge.findIndex(function(Ie){return Ie.key===k})||0,De=ge.length,Ce=0;Ce<De;Ce+=1){Pe=(Pe+he+De)%De;var Oe=ge[Pe];if(!Oe.disabled){fe(Oe.key);return}}}function pe(he){var ge=he.which;if(!q){[Te.a.DOWN,Te.a.SPACE,Te.a.ENTER].includes(ge)&&(ne(!0),he.preventDefault());return}switch(ge){case Te.a.UP:ie(-1),he.preventDefault();break;case Te.a.DOWN:ie(1),he.preventDefault();break;case Te.a.ESC:ne(!1);break;case Te.a.SPACE:case Te.a.ENTER:k!==null&&G(k,he);break}}Object(i.useEffect)(function(){var he=document.getElementById(de);he&&he.scrollIntoView&&he.scrollIntoView(!1)},[k]),Object(i.useEffect)(function(){q||fe(null)},[q]);var me=Object(ue.a)({},H?"marginLeft":"marginRight",re);j.length||(me.visibility="hidden",me.order=1);var ye=Re()(Object(ue.a)({},"".concat(le,"-rtl"),H)),Ne=T?null:i.createElement(Gr.default,{prefixCls:le,overlay:Y,trigger:["hover"],visible:q,transitionName:W,onVisibleChange:ne,overlayClassName:ye,mouseEnterDelay:.1,mouseLeaveDelay:.1},i.createElement("button",{type:"button",className:"".concat(y,"-nav-more"),style:me,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":_,id:"".concat(R,"-more"),"aria-expanded":q,onKeyDown:pe},M));return i.createElement("div",{className:Re()("".concat(y,"-nav-operations"),U),style:L,ref:m},Ne,i.createElement(or,{prefixCls:y,locale:S,editable:J}))}var Zr=i.forwardRef(Xr),Jt=Object(i.createContext)(null),kr=.1,lr=.01,Pt=20,ur=Math.pow(.995,Pt);function qr(l,m){var y=Object(i.useState)(),R=Object(z.a)(y,2),j=R[0],S=R[1],T=Object(i.useState)(0),w=Object(z.a)(T,2),M=w[0],W=w[1],L=Object(i.useState)(0),U=Object(z.a)(L,2),J=U[0],re=U[1],H=Object(i.useState)(),G=Object(z.a)(H,2),se=G[0],V=G[1],q=Object(i.useRef)();function ne(le){var de=le.touches[0],te=de.screenX,Y=de.screenY;S({x:te,y:Y}),window.clearInterval(q.current)}function Q(le){if(!!j){le.preventDefault();var de=le.touches[0],te=de.screenX,Y=de.screenY;S({x:te,y:Y});var ie=te-j.x,pe=Y-j.y;m(ie,pe);var me=Date.now();W(me),re(me-M),V({x:ie,y:pe})}}function ae(){if(!!j&&(S(null),V(null),se)){var le=se.x/J,de=se.y/J,te=Math.abs(le),Y=Math.abs(de);if(Math.max(te,Y)<kr)return;var ie=le,pe=de;q.current=window.setInterval(function(){if(Math.abs(ie)<lr&&Math.abs(pe)<lr){window.clearInterval(q.current);return}ie*=ur,pe*=ur,m(ie*Pt,pe*Pt)},Pt)}}var k=Object(i.useRef)();function fe(le){var de=le.deltaX,te=le.deltaY,Y=0,ie=Math.abs(de),pe=Math.abs(te);ie===pe?Y=k.current==="x"?de:te:ie>pe?(Y=de,k.current="x"):(Y=te,k.current="y"),m(-Y,-Y)&&le.preventDefault()}var _=Object(i.useRef)(null);_.current={onTouchStart:ne,onTouchMove:Q,onTouchEnd:ae,onWheel:fe},i.useEffect(function(){function le(ie){_.current.onTouchStart(ie)}function de(ie){_.current.onTouchMove(ie)}function te(ie){_.current.onTouchEnd(ie)}function Y(ie){_.current.onWheel(ie)}return document.addEventListener("touchmove",de,{passive:!1}),document.addEventListener("touchend",te,{passive:!1}),l.current.addEventListener("touchstart",le,{passive:!1}),l.current.addEventListener("wheel",Y),function(){document.removeEventListener("touchmove",de),document.removeEventListener("touchend",te)}},[])}function _r(){var l=Object(i.useRef)(new Map);function m(R){return l.current.has(R)||l.current.set(R,i.createRef()),l.current.get(R)}function y(R){l.current.delete(R)}return[m,y]}function dr(l,m){var y=i.useRef(l),R=i.useState({}),j=Object(z.a)(R,2),S=j[1];function T(w){var M=typeof w=="function"?w(y.current):w;M!==y.current&&m(M,y.current),y.current=M,S({})}return[y.current,T]}var cr=function(m){var y=m.position,R=m.prefixCls,j=m.extra;if(!j)return null;var S,T=j;return y==="right"&&(S=T.right||!T.left&&T||null),y==="left"&&(S=T.left||null),S?i.createElement("div",{className:"".concat(R,"-extra-content")},S):null};function ea(l,m){var y,R=i.useContext(Jt),j=R.prefixCls,S=R.tabs,T=l.className,w=l.style,M=l.id,W=l.animated,L=l.activeKey,U=l.rtl,J=l.extra,re=l.editable,H=l.locale,G=l.tabPosition,se=l.tabBarGutter,V=l.children,q=l.onTabClick,ne=l.onTabScroll,Q=Object(i.useRef)(),ae=Object(i.useRef)(),k=Object(i.useRef)(),fe=Object(i.useRef)(),_=_r(),le=Object(z.a)(_,2),de=le[0],te=le[1],Y=G==="top"||G==="bottom",ie=dr(0,function(ee,X){Y&&ne&&ne({direction:ee>X?"left":"right"})}),pe=Object(z.a)(ie,2),me=pe[0],ye=pe[1],Ne=dr(0,function(ee,X){!Y&&ne&&ne({direction:ee>X?"top":"bottom"})}),he=Object(z.a)(Ne,2),ge=he[0],Pe=he[1],De=Object(i.useState)(0),Ce=Object(z.a)(De,2),Oe=Ce[0],Ie=Ce[1],Ye=Object(i.useState)(0),Ae=Object(z.a)(Ye,2),Be=Ae[0],xe=Ae[1],we=Object(i.useState)(0),On=Object(z.a)(we,2),Xe=On[0],Ve=On[1],en=Object(i.useState)(0),pn=Object(z.a)(en,2),fn=pn[0],Ee=pn[1],Ke=Object(i.useState)(null),He=Object(z.a)(Ke,2),Je=He[0],In=He[1],Qn=Object(i.useState)(null),An=Object(z.a)(Qn,2),Ze=An[0],Cn=An[1],nn=Object(i.useState)(0),Sn=Object(z.a)(nn,2),Ge=Sn[0],ke=Sn[1],Rn=Object(i.useState)(0),an=Object(z.a)(Rn,2),ze=an[0],We=an[1],Xn=yn(new Map),Zn=Object(z.a)(Xn,2),dt=Zn[0],hn=Zn[1],dn=pt(S,dt,Oe),kn="".concat(j,"-nav-operations-hidden"),vn=0,sn=0;Y?U?(vn=0,sn=Math.max(0,Oe-Je)):(vn=Math.min(0,Je-Oe),sn=0):(vn=Math.min(0,Ze-Be),sn=0);function qn(ee){return ee<vn?vn:ee>sn?sn:ee}var En=Object(i.useRef)(),_n=Object(i.useState)(),tn=Object(z.a)(_n,2),jn=tn[0],ce=tn[1];function be(){ce(Date.now())}function Fe(){window.clearTimeout(En.current)}qr(Q,function(ee,X){function ve(Me,qe){Me(function(Vn){var tt=qn(Vn+qe);return tt})}if(Y){if(Je>=Oe)return!1;ve(ye,ee)}else{if(Ze>=Be)return!1;ve(Pe,X)}return Fe(),be(),!0}),Object(i.useEffect)(function(){return Fe(),jn&&(En.current=window.setTimeout(function(){ce(0)},100)),Fe},[jn]);function Qe(){var ee=arguments.length>0&&arguments[0]!==void 0?arguments[0]:L,X=dn.get(ee)||{width:0,height:0,left:0,right:0,top:0};if(Y){var ve=me;U?X.right<me?ve=X.right:X.right+X.width>me+Je&&(ve=X.right+X.width-Je):X.left<-me?ve=-X.left:X.left+X.width>-me+Je&&(ve=-(X.left+X.width-Je)),Pe(0),ye(qn(ve))}else{var Me=ge;X.top<-ge?Me=-X.top:X.top+X.height>-ge+Ze&&(Me=-(X.top+X.height-Ze)),ye(0),Pe(qn(Me))}}var et=ft(dn,{width:Je,height:Ze,left:me,top:ge},{width:Xe,height:fn},{width:Ge,height:ze},Object(oe.a)(Object(oe.a)({},l),{},{tabs:S})),Ft=Object(z.a)(et,2),Yt=Ft[0],Ht=Ft[1],Gt=S.map(function(ee){var X=ee.key;return i.createElement(Mn,{id:M,prefixCls:j,key:X,rtl:U,tab:ee,closable:ee.closable,editable:re,active:X===L,tabPosition:G,tabBarGutter:se,renderWrapper:V,removeAriaLabel:H==null?void 0:H.removeAriaLabel,ref:de(X),onClick:function(Me){q(X,Me)},onRemove:function(){te(X)},onFocus:function(){Qe(X),be(),U||(Q.current.scrollLeft=0),Q.current.scrollTop=0}})}),ct=Nn(function(){var ee,X,ve,Me,qe,Vn,tt,Xt,Zt,la=((ee=Q.current)===null||ee===void 0?void 0:ee.offsetWidth)||0,ua=((X=Q.current)===null||X===void 0?void 0:X.offsetHeight)||0,vr=((ve=fe.current)===null||ve===void 0?void 0:ve.offsetWidth)||0,gr=((Me=fe.current)===null||Me===void 0?void 0:Me.offsetHeight)||0,da=((qe=k.current)===null||qe===void 0?void 0:qe.offsetWidth)||0,ca=((Vn=k.current)===null||Vn===void 0?void 0:Vn.offsetHeight)||0;In(la),Cn(ua),ke(vr),We(gr);var yr=(((tt=ae.current)===null||tt===void 0?void 0:tt.offsetWidth)||0)-vr,br=(((Xt=ae.current)===null||Xt===void 0?void 0:Xt.offsetHeight)||0)-gr;Ie(yr),xe(br);var Or=(Zt=k.current)===null||Zt===void 0?void 0:Zt.className.includes(kn);Ve(yr-(Or?0:da)),Ee(br-(Or?0:ca)),hn(function(){var Cr=new Map;return S.forEach(function(ma){var Sr=ma.key,St=de(Sr).current;St&&Cr.set(Sr,{width:St.offsetWidth,height:St.offsetHeight,left:St.offsetLeft,top:St.offsetTop})}),Cr})}),Tt=S.slice(0,Yt),yt=S.slice(Ht+1),Nt=[].concat(Object(on.a)(Tt),Object(on.a)(yt)),Qt=Object(i.useState)(),wt=Object(z.a)(Qt,2),It=wt[0],mt=wt[1],Dn=dn.get(L),At=Object(i.useRef)();function Bt(){$e.a.cancel(At.current)}Object(i.useEffect)(function(){var ee={};return Dn&&(Y?(U?ee.right=Dn.right:ee.left=Dn.left,ee.width=Dn.width):(ee.top=Dn.top,ee.height=Dn.height)),Bt(),At.current=Object($e.a)(function(){mt(ee)}),Bt},[Dn,Y,U]),Object(i.useEffect)(function(){Qe()},[L,Dn,dn,Y]),Object(i.useEffect)(function(){ct()},[U,se,L,S.map(function(ee){return ee.key}).join("_")]);var bt=!!Nt.length,nt="".concat(j,"-nav-wrap"),Ot,Ct,Mt,Kt;return Y?U?(Ct=me>0,Ot=me+Je<Oe):(Ot=me<0,Ct=-me+Je<Oe):(Mt=ge<0,Kt=-ge+Ze<Be),i.createElement("div",{ref:m,role:"tablist",className:Re()("".concat(j,"-nav"),T),style:w,onKeyDown:function(){be()}},i.createElement(cr,{position:"left",extra:J,prefixCls:j}),i.createElement(Bn.default,{onResize:ct},i.createElement("div",{className:Re()(nt,(y={},Object(ue.a)(y,"".concat(nt,"-ping-left"),Ot),Object(ue.a)(y,"".concat(nt,"-ping-right"),Ct),Object(ue.a)(y,"".concat(nt,"-ping-top"),Mt),Object(ue.a)(y,"".concat(nt,"-ping-bottom"),Kt),y)),ref:Q},i.createElement(Bn.default,{onResize:ct},i.createElement("div",{ref:ae,className:"".concat(j,"-nav-list"),style:{transform:"translate(".concat(me,"px, ").concat(ge,"px)"),transition:jn?"none":void 0}},Gt,i.createElement(or,{ref:fe,prefixCls:j,locale:H,editable:re,style:{visibility:bt?"hidden":null}}),i.createElement("div",{className:Re()("".concat(j,"-ink-bar"),Object(ue.a)({},"".concat(j,"-ink-bar-animated"),W.inkBar)),style:It}))))),i.createElement(Zr,Object(B.a)({},l,{ref:k,prefixCls:j,tabs:Nt,className:!bt&&kn})),i.createElement(cr,{position:"right",extra:J,prefixCls:j}))}var mr=i.forwardRef(ea);function na(l){var m=l.id,y=l.activeKey,R=l.animated,j=l.tabPosition,S=l.rtl,T=l.destroyInactiveTabPane,w=i.useContext(Jt),M=w.prefixCls,W=w.tabs,L=R.tabPane,U=W.findIndex(function(J){return J.key===y});return i.createElement("div",{className:Re()("".concat(M,"-content-holder"))},i.createElement("div",{className:Re()("".concat(M,"-content"),"".concat(M,"-content-").concat(j),Object(ue.a)({},"".concat(M,"-content-animated"),L)),style:U&&L?Object(ue.a)({},S?"marginRight":"marginLeft","-".concat(U,"00%")):null},W.map(function(J){return i.cloneElement(J.node,{key:J.key,prefixCls:M,tabKey:J.key,id:m,animated:L,active:J.key===y,destroyInactiveTabPane:T})})))}function pr(l){var m=l.prefixCls,y=l.forceRender,R=l.className,j=l.style,S=l.id,T=l.active,w=l.animated,M=l.destroyInactiveTabPane,W=l.tabKey,L=l.children,U=i.useState(y),J=Object(z.a)(U,2),re=J[0],H=J[1];i.useEffect(function(){T?H(!0):M&&H(!1)},[T,M]);var G={};return T||(w?(G.visibility="hidden",G.height=0,G.overflowY="hidden"):G.display="none"),i.createElement("div",{id:S&&"".concat(S,"-panel-").concat(W),role:"tabpanel",tabIndex:T?0:-1,"aria-labelledby":S&&"".concat(S,"-tab-").concat(W),"aria-hidden":!T,style:Object(oe.a)(Object(oe.a)({},G),j),className:Re()("".concat(m,"-tabpane"),T&&"".concat(m,"-tabpane-active"),R)},(T||re||y)&&L)}var fr=0;function ta(l){return Object(Fn.a)(l).map(function(m){if(i.isValidElement(m)){var y=m.key!==void 0?String(m.key):void 0;return Object(oe.a)(Object(oe.a)({key:y},m.props),{},{node:m})}return null}).filter(function(m){return m})}function ra(l,m){var y,R=l.id,j=l.prefixCls,S=j===void 0?"rc-tabs":j,T=l.className,w=l.children,M=l.direction,W=l.activeKey,L=l.defaultActiveKey,U=l.editable,J=l.animated,re=J===void 0?{inkBar:!0,tabPane:!1}:J,H=l.tabPosition,G=H===void 0?"top":H,se=l.tabBarGutter,V=l.tabBarStyle,q=l.tabBarExtraContent,ne=l.locale,Q=l.moreIcon,ae=l.moreTransitionName,k=l.destroyInactiveTabPane,fe=l.renderTabBar,_=l.onChange,le=l.onTabClick,de=l.onTabScroll,te=Object(Se.a)(l,["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"]),Y=ta(w),ie=M==="rtl",pe;re===!1?pe={inkBar:!1,tabPane:!1}:re===!0?pe={inkBar:!0,tabPane:!0}:pe=Object(oe.a)({inkBar:!0,tabPane:!1},Object(je.a)(re)==="object"?re:{});var me=Object(i.useState)(!1),ye=Object(z.a)(me,2),Ne=ye[0],he=ye[1];Object(i.useEffect)(function(){he(Object(Tn.a)())},[]);var ge=Object(gn.a)(function(){var Ee;return(Ee=Y[0])===null||Ee===void 0?void 0:Ee.key},{value:W,defaultValue:L}),Pe=Object(z.a)(ge,2),De=Pe[0],Ce=Pe[1],Oe=Object(i.useState)(function(){return Y.findIndex(function(Ee){return Ee.key===De})}),Ie=Object(z.a)(Oe,2),Ye=Ie[0],Ae=Ie[1];Object(i.useEffect)(function(){var Ee=Y.findIndex(function(He){return He.key===De});if(Ee===-1){var Ke;Ee=Math.max(0,Math.min(Ye,Y.length-1)),Ce((Ke=Y[Ee])===null||Ke===void 0?void 0:Ke.key)}Ae(Ee)},[Y.map(function(Ee){return Ee.key}).join("_"),De,Ye]);var Be=Object(gn.a)(null,{value:R}),xe=Object(z.a)(Be,2),we=xe[0],On=xe[1],Xe=G;Ne&&!["left","right"].includes(G)&&(Xe="top"),Object(i.useEffect)(function(){R||(On("rc-tabs-".concat(fr)),fr+=1)},[]);function Ve(Ee,Ke){le==null||le(Ee,Ke),Ce(Ee),_==null||_(Ee)}var en={id:we,activeKey:De,animated:pe,tabPosition:Xe,rtl:ie,mobile:Ne},pn,fn=Object(oe.a)(Object(oe.a)({},en),{},{editable:U,locale:ne,moreIcon:Q,moreTransitionName:ae,tabBarGutter:se,onTabClick:Ve,onTabScroll:de,extra:q,style:V,panes:w});return fe?pn=fe(fn,mr):pn=i.createElement(mr,fn),i.createElement(Jt.Provider,{value:{tabs:Y,prefixCls:S}},i.createElement("div",Object(B.a)({ref:m,id:R,className:Re()(S,"".concat(S,"-").concat(Xe),(y={},Object(ue.a)(y,"".concat(S,"-mobile"),Ne),Object(ue.a)(y,"".concat(S,"-editable"),U),Object(ue.a)(y,"".concat(S,"-rtl"),ie),y),T)},te),pn,i.createElement(na,Object(B.a)({destroyInactiveTabPane:k},en,{animated:pe}))))}var hr=i.forwardRef(ra);hr.TabPane=pr;var aa=hr,sa=aa,zt=e("MZF8"),un=e("dEAq"),ia=e("ZpkN"),ba=e("TIsu");function Ut(l,m){var y,R=(y=l.match(/\.(\w+)$/))===null||y===void 0?void 0:y[1];return R||(R=m.tsx?"tsx":"jsx"),R}var oa=l=>{var m,y,R,j=Object(i.useRef)(),S=Object(i.useContext)(un.context),T=S.locale,w=Object(un.useLocaleProps)(T,l),M=Object(un.useDemoUrl)(w.identifier),W=w.demoUrl||M,L=(zt.a===null||zt.a===void 0?void 0:zt.a.location.hash)==="#".concat(w.identifier),U=Object.keys(w.sources).length===1,J=Object(un.useCodeSandbox)((m=w.hideActions)!==null&&m!==void 0&&m.includes("CSB")?null:w),re=Object(un.useRiddle)((y=w.hideActions)!==null&&y!==void 0&&y.includes("RIDDLE")?null:w),H=Object(un.useMotions)(w.motions||[],j.current),G=Object(K.default)(H,2),se=G[0],V=G[1],q=Object(un.useCopy)(),ne=Object(K.default)(q,2),Q=ne[0],ae=ne[1],k=Object(i.useState)("_"),fe=Object(K.default)(k,2),_=fe[0],le=fe[1],de=Object(i.useState)(Ut(_,w.sources[_])),te=Object(K.default)(de,2),Y=te[0],ie=te[1],pe=Object(i.useState)(Boolean(w.defaultShowCode)),me=Object(K.default)(pe,2),ye=me[0],Ne=me[1],he=Object(i.useState)(Math.random()),ge=Object(K.default)(he,2),Pe=ge[0],De=ge[1],Ce=w.sources[_][Y]||w.sources[_].content,Oe=Object(un.useTSPlaygroundUrl)(T,Ce),Ie=Object(i.useRef)(),Ye=Object(un.usePrefersColor)(),Ae=Object(K.default)(Ye,1),Be=Ae[0];Object(i.useEffect)(()=>{De(Math.random())},[Be]);function xe(we){le(we),ie(Ut(we,w.sources[we]))}return g.a.createElement("div",{style:w.style,className:[w.className,"__dumi-default-previewer",L?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:w.identifier,"data-debug":w.debug||void 0,"data-iframe":w.iframe||void 0},w.iframe&&g.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),g.a.createElement("div",{ref:j,className:"__dumi-default-previewer-demo",style:{transform:w.transform?"translate(0, 0)":void 0,padding:w.compact||w.iframe&&w.compact!==!1?"0":void 0,background:w.background}},w.iframe?g.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(w.iframe).replace(/(\d)$/,"$1px")},key:Pe,src:W,ref:Ie}):w.children),g.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":w.title},w.title&&g.a.createElement(un.AnchorLink,{to:"#".concat(w.identifier)},w.title),w.description&&g.a.createElement("div",{dangerouslySetInnerHTML:{__html:w.description}})),g.a.createElement("div",{className:"__dumi-default-previewer-actions"},J&&g.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:J}),re&&g.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:re}),w.motions&&g.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:V,onClick:()=>se()}),w.iframe&&g.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:()=>De(Math.random())}),!((R=w.hideActions)!==null&&R!==void 0&&R.includes("EXTERNAL"))&&g.a.createElement(un.Link,{target:"_blank",to:W},g.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),g.a.createElement("span",null),g.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":ae,onClick:()=>Q(Ce)}),Y==="tsx"&&ye&&g.a.createElement(un.Link,{target:"_blank",to:Oe},g.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),g.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(ye?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:()=>Ne(!ye)})),ye&&g.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!U&&g.a.createElement(sa,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xB7\xB7\xB7",defaultActiveKey:_,onChange:xe},Object.keys(w.sources).map(we=>g.a.createElement(pr,{tab:we==="_"?"index.".concat(Ut(we,w.sources[we])):we,key:we}))),g.a.createElement("div",{className:"__dumi-default-previewer-source"},g.a.createElement(ia.a,{code:Ce,lang:Y,showCopy:!1}))))},Oa=cn.default=oa},"80pN":function(Pn,cn,e){"use strict";(function(K){/** @license React v16.14.0
* react-dom-test-utils.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var i=e("MgzW"),g=e("q1tI"),B=e("i8i4"),ue=e("QCnb");function z(r){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+r,u=1;u<arguments.length;u++)t+="&args[]="+encodeURIComponent(arguments[u]);return"Minified React error #"+r+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var je=g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;je.hasOwnProperty("ReactCurrentDispatcher")||(je.ReactCurrentDispatcher={current:null}),je.hasOwnProperty("ReactCurrentBatchConfig")||(je.ReactCurrentBatchConfig={suspense:null});function Se(r){var t=r,u=r;if(r.alternate)for(;t.return;)t=t.return;else{r=t;do t=r,(t.effectTag&1026)!=0&&(u=t.return),r=t.return;while(r)}return t.tag===3?u:null}function oe(r){if(Se(r)!==r)throw Error(z(188))}function Jn(r){var t=r.alternate;if(!t){if(t=Se(r),t===null)throw Error(z(188));return t!==r?null:r}for(var u=r,c=t;;){var n=u.return;if(n===null)break;var h=n.alternate;if(h===null){if(c=n.return,c!==null){u=c;continue}break}if(n.child===h.child){for(h=n.child;h;){if(h===u)return oe(n),r;if(h===c)return oe(n),t;h=h.sibling}throw Error(z(188))}if(u.return!==c.return)u=n,c=h;else{for(var d=!1,C=n.child;C;){if(C===u){d=!0,u=n,c=h;break}if(C===c){d=!0,c=n,u=h;break}C=C.sibling}if(!d){for(C=h.child;C;){if(C===u){d=!0,u=h,c=n;break}if(C===c){d=!0,c=h,u=n;break}C=C.sibling}if(!d)throw Error(z(189))}}if(u.alternate!==c)throw Error(z(190))}if(u.tag!==3)throw Error(z(188));return u.stateNode.current===u?r:t}function Re(){return!0}function Fn(){return!1}function Tn(r,t,u,c){this.dispatchConfig=r,this._targetInst=t,this.nativeEvent=u,r=this.constructor.Interface;for(var n in r)r.hasOwnProperty(n)&&((t=r[n])?this[n]=t(u):n==="target"?this.target=c:this[n]=u[n]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Re:Fn,this.isPropagationStopped=Fn,this}i(Tn.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Re)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Re)},persist:function(){this.isPersistent=Re},isPersistent:Fn,destructor:function(){var r=this.constructor.Interface,t;for(t in r)this[t]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=Fn,this._dispatchInstances=this._dispatchListeners=null}}),Tn.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null},Tn.extend=function(r){function t(){}function u(){return c.apply(this,arguments)}var c=this;t.prototype=c.prototype;var n=new t;return i(n,u.prototype),u.prototype=n,u.prototype.constructor=u,u.Interface=i({},c.Interface,r),u.extend=c.extend,$e(u),u},$e(Tn);function gn(r,t,u,c){if(this.eventPool.length){var n=this.eventPool.pop();return this.call(n,r,t,u,c),n}return new this(r,t,u,c)}function on(r){if(!(r instanceof this))throw Error(z(279));r.destructor(),10>this.eventPool.length&&this.eventPool.push(r)}function $e(r){r.eventPool=[],r.getPooled=gn,r.release=on}var Bn=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined");function Nn(r,t){var u={};return u[r.toLowerCase()]=t.toLowerCase(),u["Webkit"+r]="webkit"+t,u["Moz"+r]="moz"+t,u}var yn={animationend:Nn("Animation","AnimationEnd"),animationiteration:Nn("Animation","AnimationIteration"),animationstart:Nn("Animation","AnimationStart"),transitionend:Nn("Transition","TransitionEnd")},Te={},rt={};Bn&&(rt=document.createElement("div").style,"AnimationEvent"in window||(delete yn.animationend.animation,delete yn.animationiteration.animation,delete yn.animationstart.animation),"TransitionEvent"in window||delete yn.transitionend.transition);function Mn(r){if(Te[r])return Te[r];if(!yn[r])return r;var t=yn[r],u;for(u in t)if(t.hasOwnProperty(u)&&u in rt)return Te[r]=t[u];return r}var at=Mn("animationend"),pt=Mn("animationiteration"),st=Mn("animationstart"),ft=Mn("transitionend"),Kn=null;function it(r){if(Kn===null)try{var t=("require"+Math.random()).slice(0,7);Kn=(K&&K[t])("timers").setImmediate}catch(u){Kn=function(c){var n=new MessageChannel;n.port1.onmessage=c,n.port2.postMessage(void 0)}}return Kn(r)}var zn=B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,ht=zn[11],Wn=zn[12],Ln=B.unstable_batchedUpdates,Un=je.IsSomeRendererActing,ot=typeof ue.unstable_flushAllWithoutAsserting=="function",xn=ue.unstable_flushAllWithoutAsserting||function(){for(var r=!1;ht();)r=!0;return r};function lt(r){try{xn(),it(function(){xn()?lt(r):r()})}catch(t){r(t)}}var mn=0,Yn=!1,Hn=B.findDOMNode,ln=B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,vt=ln[0],wn=ln[4],P=ln[5],E=ln[6],F=ln[7],f=ln[8],a=ln[9],v=ln[10];function b(){}function O(r,t){if(!r)return[];if(r=Jn(r),!r)return[];for(var u=r,c=[];;){if(u.tag===5||u.tag===6||u.tag===1||u.tag===0){var n=u.stateNode;t(n)&&c.push(n)}if(u.child)u.child.return=u,u=u.child;else{if(u===r)return c;for(;!u.sibling;){if(!u.return||u.return===r)return c;u=u.return}u.sibling.return=u.return,u=u.sibling}}}function s(r,t){if(r&&!r._reactInternalFiber){var u=""+r;throw r=Array.isArray(r)?"an array":r&&r.nodeType===1&&r.tagName?"a DOM node":u==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":u,Error(z(286,t,r))}}var p={renderIntoDocument:function(r){var t=document.createElement("div");return B.render(r,t)},isElement:function(r){return g.isValidElement(r)},isElementOfType:function(r,t){return g.isValidElement(r)&&r.type===t},isDOMComponent:function(r){return!(!r||r.nodeType!==1||!r.tagName)},isDOMComponentElement:function(r){return!!(r&&g.isValidElement(r)&&r.tagName)},isCompositeComponent:function(r){return p.isDOMComponent(r)?!1:r!=null&&typeof r.render=="function"&&typeof r.setState=="function"},isCompositeComponentWithType:function(r,t){return p.isCompositeComponent(r)?r._reactInternalFiber.type===t:!1},findAllInRenderedTree:function(r,t){return s(r,"findAllInRenderedTree"),r?O(r._reactInternalFiber,t):[]},scryRenderedDOMComponentsWithClass:function(r,t){return s(r,"scryRenderedDOMComponentsWithClass"),p.findAllInRenderedTree(r,function(u){if(p.isDOMComponent(u)){var c=u.className;typeof c!="string"&&(c=u.getAttribute("class")||"");var n=c.split(/\s+/);if(!Array.isArray(t)){if(t===void 0)throw Error(z(11));t=t.split(/\s+/)}return t.every(function(h){return n.indexOf(h)!==-1})}return!1})},findRenderedDOMComponentWithClass:function(r,t){if(s(r,"findRenderedDOMComponentWithClass"),r=p.scryRenderedDOMComponentsWithClass(r,t),r.length!==1)throw Error("Did not find exactly one match (found: "+r.length+") for class:"+t);return r[0]},scryRenderedDOMComponentsWithTag:function(r,t){return s(r,"scryRenderedDOMComponentsWithTag"),p.findAllInRenderedTree(r,function(u){return p.isDOMComponent(u)&&u.tagName.toUpperCase()===t.toUpperCase()})},findRenderedDOMComponentWithTag:function(r,t){if(s(r,"findRenderedDOMComponentWithTag"),r=p.scryRenderedDOMComponentsWithTag(r,t),r.length!==1)throw Error("Did not find exactly one match (found: "+r.length+") for tag:"+t);return r[0]},scryRenderedComponentsWithType:function(r,t){return s(r,"scryRenderedComponentsWithType"),p.findAllInRenderedTree(r,function(u){return p.isCompositeComponentWithType(u,t)})},findRenderedComponentWithType:function(r,t){if(s(r,"findRenderedComponentWithType"),r=p.scryRenderedComponentsWithType(r,t),r.length!==1)throw Error("Did not find exactly one match (found: "+r.length+") for componentType:"+t);return r[0]},mockComponent:function(r,t){return t=t||r.mockTagName||"div",r.prototype.render.mockImplementation(function(){return g.createElement(t,null,this.props.children)}),this},nativeTouchData:function(r,t){return{touches:[{pageX:r,pageY:t}]}},Simulate:null,SimulateNative:{},act:function(r){function t(){mn--,Un.current=u,Wn.current=c}Yn===!1&&(Yn=!0,console.error("act(...) is not supported in production builds of React, and might not behave as expected.")),mn++;var u=Un.current,c=Wn.current;Un.current=!0,Wn.current=!0;try{var n=Ln(r)}catch(h){throw t(),h}if(n!==null&&typeof n=="object"&&typeof n.then=="function")return{then:function(h,d){n.then(function(){1<mn||ot===!0&&u===!0?(t(),h()):lt(function(C){t(),C?d(C):h()})},function(C){t(),d(C)})}};try{mn!==1||ot!==!1&&u!==!1||xn(),t()}catch(h){throw t(),h}return{then:function(h){h()}}}};function o(r){return function(t,u){if(g.isValidElement(t))throw Error(z(228));if(p.isCompositeComponent(t))throw Error(z(229));var c=wn[r],n=new b;n.target=t,n.type=r.toLowerCase();var h=vt(t),d=new Tn(c,h,n,t);d.persist(),i(d,u),c.phasedRegistrationNames?P(d):E(d),B.unstable_batchedUpdates(function(){F(t),v(d)}),f()}}p.Simulate={};for(var N in wn)p.Simulate[N]=o(N);function I(r,t){return function(u,c){var n=new b(r);i(n,c),p.isDOMComponent(u)?(u=Hn(u),n.target=u,a(t,1,document,n)):u.tagName&&(n.target=u,a(t,1,document,n))}}[["abort","abort"],[at,"animationEnd"],[pt,"animationIteration"],[st,"animationStart"],["blur","blur"],["canplaythrough","canPlayThrough"],["canplay","canPlay"],["cancel","cancel"],["change","change"],["click","click"],["close","close"],["compositionend","compositionEnd"],["compositionstart","compositionStart"],["compositionupdate","compositionUpdate"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["dragstart","dragStart"],["drag","drag"],["drop","drop"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],["ended","ended"],["error","error"],["focus","focus"],["input","input"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["loadstart","loadStart"],["loadstart","loadStart"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["mousedown","mouseDown"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["playing","playing"],["progress","progress"],["ratechange","rateChange"],["scroll","scroll"],["seeked","seeked"],["seeking","seeking"],["selectionchange","selectionChange"],["stalled","stalled"],["suspend","suspend"],["textInput","textInput"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchmove","touchMove"],["touchstart","touchStart"],[ft,"transitionEnd"],["volumechange","volumeChange"],["waiting","waiting"],["wheel","wheel"]].forEach(function(r){var t=r[1];p.SimulateNative[t]=I(t,r[0])}),K.exports=p.default||p}).call(this,e("hOG+")(Pn))},Etlz:function(Pn,cn,e){"use strict";e.r(cn);var K=e("q1tI"),i=e.n(K),g=e("dEAq"),B=e.n(g),ue=e("0zqC"),z=e("ZpkN"),je=e("JjdP"),Se=i.a.memo(je.default["migrate2-demo"].component);cn.default=oe=>(i.a.useEffect(()=>{oe!=null&&oe.location.hash&&g.AnchorLink.scrollToAnchor(decodeURIComponent(oe.location.hash.slice(1)))},[]),i.a.createElement(i.a.Fragment,null,i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"markdown"},i.a.createElement("h2",{id:"\u6298\u4E2D\u5347\u7EA7\u65B9\u6848"},i.a.createElement(g.AnchorLink,{to:"#\u6298\u4E2D\u5347\u7EA7\u65B9\u6848","aria-hidden":"true",tabIndex:-1},i.a.createElement("span",{className:"icon icon-link"})),"\u6298\u4E2D\u5347\u7EA7\u65B9\u6848"),i.a.createElement("h3",{id:"\u80CC\u666F\u7B80\u8FF0"},i.a.createElement(g.AnchorLink,{to:"#\u80CC\u666F\u7B80\u8FF0","aria-hidden":"true",tabIndex:-1},i.a.createElement("span",{className:"icon icon-link"})),"\u80CC\u666F\u7B80\u8FF0"),i.a.createElement("p",null,"0.x \u5230 1.x \u7248\u672C\u7684\u5347\u7EA7\u6700\u5927\u7684\u6539\u52A8\u662F formData \u4ECE\u5916\u7F6E\u53D8\u6210\u4E86\u5185\u7F6E\uFF0C\u597D\u5904\u662F\uFF1A"),i.a.createElement("ol",null,i.a.createElement("li",null,i.a.createElement("p",null,"\u8868\u5355\u63D0\u4EA4\u6536\u675F\u5230\u4E86 FR \u5185\u90E8\uFF0C\u786E\u4FDD\u670D\u52A1\u7AEF\u6821\u9A8C\u3001\u5F02\u6B65\u64CD\u4F5C\u3001\u63D0\u4EA4\u524D\u7684\u6570\u636E\u5904\u7406\u548C\u6027\u80FD\u4F18\u5316\u7B49\u4E00\u7CFB\u5217\u4E8B\u6210\u4E3A\u53EF\u80FD\uFF0C\u4E4B\u524D\u7684\u6784\u5EFA FR \u5B8C\u5168\u65E0\u6CD5\u611F\u77E5\u7528\u6237\u4F55\u65F6\u63D0\u4EA4\u4E86\u8868\u5355\uFF0C\u6240\u4EE5\u5B8C\u5168\u65E0\u6CD5\u5E72\u6D89")),i.a.createElement("li",null,i.a.createElement("p",null,"\u7528\u6237\u4E0D\u7528\u6BCF\u6B21\u90FD\u6A21\u677F\u5316\u5730\u53BB\u5199 formData\u3001onChange\u3001onValidate \u7B49 props\uFF0CshowValidate \u8FD9\u7C7B\u4E0D\u81EA\u7136\u7684 props \u4E5F\u76F4\u63A5\u6210\u4E3A\u5185\u90E8\u903B\u8F91\uFF0C\u800C\u4E0D\u9700\u8981\u7528\u6237\u64CD\u5FC3\u3002\u540C\u65F6\u4E5F\u907F\u514D\u4E86\u5BF9 onChange \u7684\u8BEF\u7528\uFF0C\u6709\u4E0D\u5C11 case \u7528\u6237\u5728 onChange \u91CC\u5199\u4E86\u975E\u5E38\u590D\u6742\u7684\u903B\u8F91\uFF0C\u6CE8\u610F\u8FD9\u4F1A\u5728\u6BCF\u6B21\u8868\u5355\u8F93\u5165\u65F6\u90FD\u89E6\u53D1\uFF0C\u662F\u975E\u5E38\u5F71\u54CD\u6027\u80FD\u7684")),i.a.createElement("li",null,i.a.createElement("p",null,"\u6709\u5F88\u591A\u7EC6\u8282\u4E0A\u7684\u8001\u5927\u96BE\u95EE\u9898\u5728\u65E7\u6A21\u5F0F\u4E0B\u662F\u65E0\u6CD5\u5904\u7406\u7684\uFF0C\u4F8B\u5982\u81EA\u7136\u5224\u65AD\u662F\u5426\u663E\u793A\u6821\u9A8C\u4FE1\u606F\uFF08\u56E0\u4E3A FR \u4E0D\u77E5\u9053\u5408\u9002\u63D0\u4EA4\u4E86\uFF09\uFF0C\u4F8B\u5982\u9690\u85CF\u503C\u3001\u7A7A\u503C\u5728\u63D0\u4EA4\u65F6\u53BB\u9664\uFF0C\u4F8B\u5982\u8F93\u5165\u5B57\u7B26\u4E32\u5E26\u524D\u540E\u7A7A\u683C\u63D0\u4EA4\u65F6 trim \u6389\uFF0C\u7B49\u7B49"))),i.a.createElement("h3",{id:"\u5F7B\u5E95\u8FC1\u79FB\u5728\u6709\u4E9B\u9879\u76EE\u4F1A\u5F88\u56F0\u96BE"},i.a.createElement(g.AnchorLink,{to:"#\u5F7B\u5E95\u8FC1\u79FB\u5728\u6709\u4E9B\u9879\u76EE\u4F1A\u5F88\u56F0\u96BE","aria-hidden":"true",tabIndex:-1},i.a.createElement("span",{className:"icon icon-link"})),"\u5F7B\u5E95\u8FC1\u79FB\u5728\u6709\u4E9B\u9879\u76EE\u4F1A\u5F88\u56F0\u96BE"),i.a.createElement("p",null,"\u5F7B\u5E95\u8FC1\u79FB\u5C31\u662F\u5C06\u66B4\u9732\u5728\u5916\u90E8\u7684 formData/onChange/onValidate \u65B9\u6CD5\u6536\u675F\u5230\u8868\u5355\u5185\u90E8\u81EA\u884C\u5904\u7406\uFF0C\u800C\u5728\u5916\u90E8\u7EDF\u4E00\u4F7F\u7528 form.getValues() \u548C form.setValues() \u6765\u66FF\u6362\u3002\u5F53\u66B4\u9732\u5728\u5916\u90E8\u7684 formData \u5B58\u653E\u5728 context/redux/dva \u91CC\u65F6\uFF0C\u8981\u627E\u5230\u6240\u6709\u5728\u5916\u90E8\u5BF9 formData \u7684\u4F7F\u7528\u548C\u64CD\u4F5C\u4F1A\u53D8\u6210\u8DE8\u591A\u4E2A\u6587\u4EF6\u7684\u201C\u5927\u5DE5\u7A0B\u201D\u3002\u6240\u4EE5\u5BF9\u4E8E\u6B64\u7C7B\u60C5\u51B5\u6211\u4EEC\u9700\u8981\u4E00\u4E2A"),i.a.createElement("h3",{id:"\u6298\u4E2D\u65B9\u6848"},i.a.createElement(g.AnchorLink,{to:"#\u6298\u4E2D\u65B9\u6848","aria-hidden":"true",tabIndex:-1},i.a.createElement("span",{className:"icon icon-link"})),"\u6298\u4E2D\u65B9\u6848"),i.a.createElement("p",null,"\u7B14\u8005\u63D0\u4F9B\u4E86\u4EE5\u4E0B\u7684\u6298\u4E2D\u5347\u7EA7\u65B9\u6848\uFF0C\u80FD\u591F\u5728\u6781\u5C0F\u7684\u6539\u52A8\u4E0B\u201C\u517C\u5BB9\u201D\u5B8C\u6210\u5347\u7EA7\uFF1A"),i.a.createElement("p",null,i.a.createElement("strong",null,"FormRender v0.x \u7684\u4EE3\u7801\u5982\u4E0B\uFF1A")),i.a.createElement(z.a,{code:`import React, { useState } from 'react';
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
  const [showValidate, setShowValidate] = useState(false);

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
        schema={schema}
        formData={formData}
        onChange={setData}
        onValidate={setValid}
        showValidate={showValidate}
      />
      <button onClick={onSubmit}>\u63D0\u4EA4</button>
    </div>
  );
}

export default Demo;`,lang:"js"}),i.a.createElement("p",null,"\u8FC1\u79FB\u540E\u7684\u4EE3\u7801\u5982\u4E0B\uFF1A")),i.a.createElement(ue.default,je.default["migrate2-demo"].previewerProps,i.a.createElement(Se,null)),i.a.createElement("div",{className:"markdown"},i.a.createElement("p",null,"\u6211\u4EEC\u770B\u5230\u57FA\u672C\u6539\u52A8\u5206\u4E24\u6B65"),i.a.createElement("ol",null,i.a.createElement("li",null,"formData/onChange/onValidate/showValidate \u4ECE FR \u7684 props \u53D8\u4E3A useForm \u7684\u5165\u53C2"),i.a.createElement("li",null,"\u5728\u7EC4\u4EF6\u52A0\u8F7D\u65F6\uFF0C\u8C03\u7528 form.init() \u65B9\u6CD5\u521D\u59CB\u5316")),i.a.createElement("h3",{id:"\u7ED3\u8BBA"},i.a.createElement(g.AnchorLink,{to:"#\u7ED3\u8BBA","aria-hidden":"true",tabIndex:-1},i.a.createElement("span",{className:"icon icon-link"})),"\u7ED3\u8BBA"),i.a.createElement("p",null,"\u6298\u4E2D\u7684\u5347\u7EA7\u65B9\u6848\u4EE5\u7528\u65B0\u7248 FormRender \u4E3A\u58F3\uFF0C\u7EE7\u7EED\u8D70\u4E86 0.x \u7248\u7684\u72B6\u6001\u5916\u7F6E\u7684\u6A21\u5F0F\uFF0C\u6240\u4EE5\u5347\u7EA7\u6210\u672C\u5F88\u5C0F\uFF0C\u4F46\u540C\u65F6\u4E5F\u65E0\u6CD5\u4EAB\u53D7\u5230 100% \u7684\u65B0\u529F\u80FD\u3002\u6240\u4EE5\u7B14\u8005\u5EFA\u8BAE\u7684\u4F7F\u7528\u573A\u666F\u662F\u5927\u9762\u79EF\u7684\u65E7\u9879\u76EE\u5FEB\u901F\u5347\u7EA7\uFF0C\u4E14\u5F7B\u5E95\u5347\u7EA7\u65B9\u6848\u5F00\u9500\u8F83\u5927\u7684\u60C5\u51B5\u3002")))))},JjdP:function(Pn,cn,e){"use strict";e.r(cn);var K=e("9og8"),i=e("WmNS"),g=e.n(i),B=e("LtsZ"),ue=`import React, { useRef } from 'react';
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
};`,je=`import React from 'react';
import FormRender, { useForm } from 'form-render';

const Demo = props => {
  const form = useForm();
  return <FormRender form={form} {...props} />;
};

export default Demo;`,Se=`export const delay = ms => new Promise(res => setTimeout(res, ms));

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

export default Demo;`,Jn=`export const basic = {
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

export default Demo;`,Fn=`import React, { useState, useEffect } from 'react';
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

export default Root;`,Nn=`import React, { useState, useEffect } from 'react';
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

export default Demo;`,wn=cn.default={"guide-card":{component:Object(B.dynamic)({loader:function(){var P=Object(K.a)(g.a.mark(function F(){return g.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(25)]).then(e.bind(null,"oLxE"));case 2:return a.abrupt("return",a.sent.default);case 3:case"end":return a.stop()}},F)}));function E(){return P.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:ue}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"card-render":{version:"0.1.2"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"0.x"}},identifier:"guide-card"}},"chart-render-demo":{component:Object(B.dynamic)({loader:function(){var P=Object(K.a)(g.a.mark(function F(){var f,a,v,b,O,s,p;return g.a.wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return s=function(r,t){if(!t&&r&&r.__esModule)return r;if(r===null||typeof r!="object"&&typeof r!="function")return{default:r};var u=O(t);if(u&&u.has(r))return u.get(r);var c={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var h in r)if(h!=="default"&&Object.prototype.hasOwnProperty.call(r,h)){var d=n?Object.getOwnPropertyDescriptor(r,h):null;d&&(d.get||d.set)?Object.defineProperty(c,h,d):c[h]=r[h]}return c.default=r,u&&u.set(r,c),c},O=function(r){if(typeof WeakMap!="function")return null;var t=new WeakMap,u=new WeakMap;return(O=function(n){return n?u:t})(r)},f=e("K+nK"),N.t0=f,N.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return N.t1=N.sent,a=(0,N.t0)(N.t1),N.t2=s,N.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return N.t3=N.sent,v=(0,N.t2)(N.t3),N.next=15,Promise.all([e.e(0),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 15:return b=N.sent,p=function(){var r=(0,v.useState)("Line"),t=(0,a.default)(r,2),u=t[0],c=t[1],n={Line:b.Line,Column:b.Column,PivotTable:b.PivotTable}[u];return v.default.createElement("div",null,v.default.createElement("div",{style:{marginBottom:10}},v.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return c("Line")}},"\u6298\u7EBF\u56FE"),v.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return c("Column")}},"\u67F1\u72B6\u56FE"),v.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return c("PivotTable")}},"\u4EA4\u53C9\u8868")),v.default.createElement(n,{meta:[{id:"date",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF",isDim:!1},{id:"uv",name:"\u8BBF\u5BA2\u6570",isDim:!1}],data:[{date:"20200101",pv:100,uv:50},{date:"20200102",pv:120,uv:60},{date:"20200103",pv:140,uv:70},{date:"20200104",pv:160,uv:80}]}))},N.abrupt("return",p);case 18:case"end":return N.stop()}},F)}));function E(){return P.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"chart-render-demo"}},"column-demo":{component:Object(B.dynamic)({loader:function(){var P=Object(K.a)(g.a.mark(function F(){var f,a,v,b;return g.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return f=e("K+nK"),s.t0=f,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,a=(0,s.t0)(s.t1),s.next=8,Promise.all([e.e(0),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return v=s.sent,b=function(){return a.default.createElement(v.Column,{meta:[{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{pv:50,uv:20}]})},s.abrupt("return",b);case 11:case"end":return s.stop()}},F)}));function E(){return P.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[{ pv: 50, uv: 20 }]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo"}},"column-demo-1":{component:Object(B.dynamic)({loader:function(){var P=Object(K.a)(g.a.mark(function F(){var f,a,v,b;return g.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return f=e("K+nK"),s.t0=f,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,a=(0,s.t0)(s.t1),s.next=8,Promise.all([e.e(0),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return v=s.sent,b=function(){return a.default.createElement(v.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},s.abrupt("return",b);case 11:case"end":return s.stop()}},F)}));function E(){return P.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-1"}},"column-demo-2":{component:Object(B.dynamic)({loader:function(){var P=Object(K.a)(g.a.mark(function F(){var f,a,v,b;return g.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return f=e("K+nK"),s.t0=f,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,a=(0,s.t0)(s.t1),s.next=8,Promise.all([e.e(0),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return v=s.sent,b=function(){return a.default.createElement(v.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},s.abrupt("return",b);case 11:case"end":return s.stop()}},F)}));function E(){return P.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-2"}},"column-demo-3":{component:Object(B.dynamic)({loader:function(){var P=Object(K.a)(g.a.mark(function F(){var f,a,v,b;return g.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return f=e("K+nK"),s.t0=f,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,a=(0,s.t0)(s.t1),s.next=8,Promise.all([e.e(0),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return v=s.sent,b=function(){return a.default.createElement(v.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},s.abrupt("return",b);case 11:case"end":return s.stop()}},F)}));function E(){return P.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-3"}},"column-demo-4":{component:Object(B.dynamic)({loader:function(){var P=Object(K.a)(g.a.mark(function F(){var f,a,v,b;return g.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return f=e("K+nK"),s.t0=f,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,a=(0,s.t0)(s.t1),s.next=8,Promise.all([e.e(0),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return v=s.sent,b=function(){return a.default.createElement(v.Column,{inverted:!0,label:{position:"middle",layout:[{type:"interval-adjust-position"},{type:"interval-hide-overlap"},{type:"adjust-color"}]},meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},s.abrupt("return",b);case 11:case"end":return s.stop()}},F)}));function E(){return P.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-4"}},"line-demo":{component:Object(B.dynamic)({loader:function(){var P=Object(K.a)(g.a.mark(function F(){var f,a,v,b;return g.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return f=e("K+nK"),s.t0=f,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,a=(0,s.t0)(s.t1),s.next=8,Promise.all([e.e(0),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return v=s.sent,b=function(){return a.default.createElement(v.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},s.abrupt("return",b);case 11:case"end":return s.stop()}},F)}));function E(){return P.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo"}},"line-demo-1":{component:Object(B.dynamic)({loader:function(){var P=Object(K.a)(g.a.mark(function F(){var f,a,v,b;return g.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return f=e("K+nK"),s.t0=f,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,a=(0,s.t0)(s.t1),s.next=8,Promise.all([e.e(0),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return v=s.sent,b=function(){return a.default.createElement(v.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},s.abrupt("return",b);case 11:case"end":return s.stop()}},F)}));function E(){return P.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-1"}},"line-demo-2":{component:Object(B.dynamic)({loader:function(){var P=Object(K.a)(g.a.mark(function F(){var f,a,v,b;return g.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return f=e("K+nK"),s.t0=f,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,a=(0,s.t0)(s.t1),s.next=8,Promise.all([e.e(0),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return v=s.sent,b=function(){return a.default.createElement(v.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"},{id:"pv",name:"\u8BBF\u95EE\u91CF"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20,pv:120},{ds:"2020-12-31",page:"\u9996\u9875",uv:120,pv:1120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21,pv:121},{ds:"2021-01-01",page:"\u9996\u9875",uv:121,pv:1121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15,pv:115},{ds:"2021-01-02",page:"\u9996\u9875",uv:115,pv:1115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40,pv:140},{ds:"2021-01-03",page:"\u9996\u9875",uv:140,pv:1140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31,pv:131},{ds:"2021-01-04",page:"\u9996\u9875",uv:131,pv:1131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32,pv:132},{ds:"2021-01-05",page:"\u9996\u9875",uv:132,pv:1132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30,pv:130},{ds:"2021-01-06",page:"\u9996\u9875",uv:130,pv:1130}]})},s.abrupt("return",b);case 11:case"end":return s.stop()}},F)}));function E(){return P.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-2"}},"line-demo-3":{component:Object(B.dynamic)({loader:function(){var P=Object(K.a)(g.a.mark(function F(){var f,a,v,b;return g.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return f=e("K+nK"),s.t0=f,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,a=(0,s.t0)(s.t1),s.next=8,Promise.all([e.e(0),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return v=s.sent,b=function(){return a.default.createElement(v.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},s.abrupt("return",b);case 11:case"end":return s.stop()}},F)}));function E(){return P.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-3"}},"line-demo-4":{component:Object(B.dynamic)({loader:function(){var P=Object(K.a)(g.a.mark(function F(){var f,a,v,b;return g.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return f=e("K+nK"),s.t0=f,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,a=(0,s.t0)(s.t1),s.next=8,Promise.all([e.e(0),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return v=s.sent,b=function(){return a.default.createElement(v.Line,{withArea:!0,isStack:!0,isPercent:!0,meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},s.abrupt("return",b);case 11:case"end":return s.stop()}},F)}));function E(){return P.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-4"}},"pivot-table-demo":{component:Object(B.dynamic)({loader:function(){var P=Object(K.a)(g.a.mark(function F(){var f,a,v,b;return g.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return f=e("K+nK"),s.t0=f,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,a=(0,s.t0)(s.t1),s.next=8,Promise.all([e.e(0),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return v=s.sent,b=function(){return a.default.createElement(v.PivotTable,{style:{maxHeight:400,overflow:"auto"},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},s.abrupt("return",b);case 11:case"end":return s.stop()}},F)}));function E(){return P.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo"}},"pivot-table-demo-1":{component:Object(B.dynamic)({loader:function(){var P=Object(K.a)(g.a.mark(function F(){var f,a,v,b;return g.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return f=e("K+nK"),s.t0=f,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,a=(0,s.t0)(s.t1),s.next=8,Promise.all([e.e(0),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 8:return v=s.sent,b=function(){return a.default.createElement(v.PivotTable,{style:{maxHeight:400,overflow:"auto"},cellRender:function(N,I,r){return a.default.createElement("div",null,a.default.createElement("p",null,"\u53C2\u6570\u8868\uFF1A"),a.default.createElement("p",{style:{color:["red","orange","yellow","green","blue"][Object.keys(I).length]}},N),a.default.createElement("p",null,JSON.stringify(I)),a.default.createElement("p",null,JSON.stringify(r)))},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},s.abrupt("return",b);case 11:case"end":return s.stop()}},F)}));function E(){return P.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-1"}},"pivot-table-demo-2":{component:Object(B.dynamic)({loader:function(){var P=Object(K.a)(g.a.mark(function F(){var f,a,v,b,O,s,p;return g.a.wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return s=function(r,t){if(!t&&r&&r.__esModule)return r;if(r===null||typeof r!="object"&&typeof r!="function")return{default:r};var u=O(t);if(u&&u.has(r))return u.get(r);var c={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var h in r)if(h!=="default"&&Object.prototype.hasOwnProperty.call(r,h)){var d=n?Object.getOwnPropertyDescriptor(r,h):null;d&&(d.get||d.set)?Object.defineProperty(c,h,d):c[h]=r[h]}return c.default=r,u&&u.set(r,c),c},O=function(r){if(typeof WeakMap!="function")return null;var t=new WeakMap,u=new WeakMap;return(O=function(n){return n?u:t})(r)},f=e("K+nK"),N.t0=f,N.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return N.t1=N.sent,a=(0,N.t0)(N.t1),N.t2=s,N.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return N.t3=N.sent,v=(0,N.t2)(N.t3),N.next=15,Promise.all([e.e(0),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"36SN"));case 15:return b=N.sent,p=function(){var r=(0,v.useState)(!1),t=(0,a.default)(r,2),u=t[0],c=t[1];return v.default.createElement(v.default.Fragment,null,v.default.createElement("label",null,"\u53EF\u5C55\u5F00/\u6536\u7F29\uFF1A",v.default.createElement("input",{type:"checkbox",value:u,onChange:function(){return c(!u)}})),v.default.createElement(b.PivotTable,{leftExpandable:u,showSubtotal:!1,meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]}))},N.abrupt("return",p);case 18:case"end":return N.stop()}},F)}));function E(){return P.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-2"}},"OldSchemaTransformer-demo":{component:Object(B.dynamic)({loader:function(){var P=Object(K.a)(g.a.mark(function F(){var f,a,v,b,O,s,p,o,N,I,r,t,u;return g.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return N=function(d,C){if(!C&&d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var D=o(C);if(D&&D.has(d))return D.get(d);var A={},$=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var x in d)if(x!=="default"&&Object.prototype.hasOwnProperty.call(d,x)){var Z=$?Object.getOwnPropertyDescriptor(d,x):null;Z&&(Z.get||Z.set)?Object.defineProperty(A,x,Z):A[x]=d[x]}return A.default=d,D&&D.set(d,A),A},o=function(d){if(typeof WeakMap!="function")return null;var C=new WeakMap,D=new WeakMap;return(o=function($){return $?D:C})(d)},f=e("K+nK"),n.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return n.t0=f,n.next=8,e.e(7).then(e.t.bind(null,"4IMT",7));case 8:return n.t1=n.sent,a=(0,n.t0)(n.t1),n.t2=f,n.next=13,Promise.resolve().then(e.bind(null,"tJVT"));case 13:return n.t3=n.sent,v=(0,n.t2)(n.t3),n.next=17,Promise.all([e.e(3),e.e(18)]).then(e.t.bind(null,"cUip",7));case 17:return n.t4=f,n.next=20,Promise.all([e.e(0),e.e(7),e.e(17),e.e(19)]).then(e.t.bind(null,"iJl9",7));case 20:return n.t5=n.sent,b=(0,n.t4)(n.t5),n.t6=N,n.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return n.t7=n.sent,O=(0,n.t6)(n.t7),n.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(8),e.e(9)]).then(e.bind(null,"gdfu"));case 29:return s=n.sent,n.next=32,Promise.all([e.e(76),e.e(83)]).then(e.bind(null,"Ejlu"));case 32:return p=n.sent,I=b.default.TextArea,r={type:"object",properties:{number:{title:"\u6570\u5B57\u8F93\u5165\u6846",type:"number","ui:disabled":!0},checkbox:{title:"\u662F\u5426\u9009\u62E9",type:"boolean","ui:widget":"switch"}},required:["number"]},t=function(){var d=(0,O.useState)(JSON.stringify(r)),C=(0,v.default)(d,2),D=C[0],A=C[1],$=(0,O.useState)({}),x=(0,v.default)($,2),Z=x[0],Le=x[1],Ue=function(){try{var bn=(0,p.updateSchemaToNewVersion)(JSON.parse(D));Le(bn)}catch(ut){console.log(ut)}},rn=function(bn){A(bn.target.value)},_e=function(){A(JSON.stringify(JSON.parse(D),null,2))};return O.default.createElement("div",null,O.default.createElement("div",null,"\u586B\u5165\u65E7\u7248schema\uFF1A"),O.default.createElement(I,{style:{minHeight:400,marginTop:12,marginBottom:12},value:D,onChange:rn}),O.default.createElement(a.default,{style:{marginRight:12},onClick:_e},"\u683C\u5F0F\u5316\u65E7schema"),O.default.createElement(a.default,{type:"primary",onClick:Ue},"\u751F\u6210\u65B0\u7248schema"),O.default.createElement(I,{style:{minHeight:400,marginTop:12},value:JSON.stringify(Z,null,2)}))},u=t,n.abrupt("return",u);case 38:case"end":return n.stop()}},F)}));function E(){return P.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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

export default Translator;`},"packages/form-render-core/src/utils.js":{import:"../../packages/form-render-core/src/utils.js",content:z}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"},"lodash-es":{version:"4.17.21"}},identifier:"OldSchemaTransformer-demo"}},"form-render-demo":{component:Object(B.dynamic)({loader:function(){var P=Object(K.a)(g.a.mark(function F(){var f,a,v,b,O,s,p,o,N,I;return g.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return p=function(c,n){if(!n&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var h=s(n);if(h&&h.has(c))return h.get(c);var d={},C=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var D in c)if(D!=="default"&&Object.prototype.hasOwnProperty.call(c,D)){var A=C?Object.getOwnPropertyDescriptor(c,D):null;A&&(A.get||A.set)?Object.defineProperty(d,D,A):d[D]=c[D]}return d.default=c,h&&h.set(c,d),d},s=function(c){if(typeof WeakMap!="function")return null;var n=new WeakMap,h=new WeakMap;return(s=function(C){return C?h:n})(c)},f=e("K+nK"),t.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return t.t0=f,t.next=8,e.e(7).then(e.t.bind(null,"4IMT",7));case 8:return t.t1=t.sent,a=(0,t.t0)(t.t1),t.t2=f,t.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return t.t3=t.sent,v=(0,t.t2)(t.t3),t.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(8),e.e(9)]).then(e.bind(null,"gdfu"));case 17:return b=t.sent,t.t4=p,t.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 21:return t.t5=t.sent,O=(0,t.t4)(t.t5),o={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},N=function(){var c=(0,O.useForm)(),n=function(d,C){console.log("formData:",d,"errors",C)};return v.default.createElement("div",null,v.default.createElement(O.default,{form:c,schema:o,onFinish:n}),v.default.createElement(a.default,{type:"primary",onClick:c.submit},"\u63D0\u4EA4"))},I=N,t.abrupt("return",I);case 27:case"end":return t.stop()}},F)}));function E(){return P.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo"}},"form-render-demo-1":{component:Object(B.dynamic)({loader:function(){var P=Object(K.a)(g.a.mark(function F(){var f,a,v,b,O,s,p,o,N,I,r,t,u,c;return g.a.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return r=function(C,D){if(!D&&C&&C.__esModule)return C;if(C===null||typeof C!="object"&&typeof C!="function")return{default:C};var A=I(D);if(A&&A.has(C))return A.get(C);var $={},x=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var Z in C)if(Z!=="default"&&Object.prototype.hasOwnProperty.call(C,Z)){var Le=x?Object.getOwnPropertyDescriptor(C,Z):null;Le&&(Le.get||Le.set)?Object.defineProperty($,Z,Le):$[Z]=C[Z]}return $.default=C,A&&A.set(C,$),$},I=function(C){if(typeof WeakMap!="function")return null;var D=new WeakMap,A=new WeakMap;return(I=function(x){return x?A:D})(C)},f=e("K+nK"),h.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return h.t0=f,h.next=8,e.e(7).then(e.t.bind(null,"4IMT",7));case 8:return h.t1=h.sent,a=(0,h.t0)(h.t1),h.t2=f,h.next=13,e.e(85).then(e.bind(null,"fWQN"));case 13:return h.t3=h.sent,v=(0,h.t2)(h.t3),h.t4=f,h.next=18,e.e(86).then(e.bind(null,"mtLc"));case 18:return h.t5=h.sent,b=(0,h.t4)(h.t5),h.t6=f,h.next=23,e.e(78).then(e.bind(null,"yKVA"));case 23:return h.t7=h.sent,O=(0,h.t6)(h.t7),h.t8=f,h.next=28,e.e(77).then(e.bind(null,"879j"));case 28:return h.t9=h.sent,s=(0,h.t8)(h.t9),h.t10=f,h.next=33,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 33:return h.t11=h.sent,p=(0,h.t10)(h.t11),h.next=37,Promise.all([e.e(0),e.e(1),e.e(2),e.e(8),e.e(9)]).then(e.bind(null,"gdfu"));case 37:return o=h.sent,h.t12=r,h.next=41,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 41:return h.t13=h.sent,N=(0,h.t12)(h.t13),t={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},u=function(d){(0,O.default)(D,d);var C=(0,s.default)(D);function D(){var A;(0,v.default)(this,D);for(var $=arguments.length,x=new Array($),Z=0;Z<$;Z++)x[Z]=arguments[Z];return A=C.call.apply(C,[this].concat(x)),A.onFinish=function(Le,Ue){console.log("formData:",Le,"errors",Ue)},A}return(0,b.default)(D,[{key:"render",value:function(){var $=this.props.form;return p.default.createElement("div",null,p.default.createElement(N.default,{form:$,schema:t,onFinish:this.onFinish}),p.default.createElement(a.default,{type:"primary",onClick:$.submit},"\u63D0\u4EA4"))}}]),D}(p.default.Component),c=(0,N.connectForm)(u),h.abrupt("return",c);case 47:case"end":return h.stop()}},F)}));function E(){return P.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default connectForm(Demo);`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo-1"}},"form-render-demo-2":{component:Object(B.dynamic)({loader:function(){var P=Object(K.a)(g.a.mark(function F(){var f,a,v,b,O,s,p,o,N,I;return g.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return p=function(c,n){if(!n&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var h=s(n);if(h&&h.has(c))return h.get(c);var d={},C=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var D in c)if(D!=="default"&&Object.prototype.hasOwnProperty.call(c,D)){var A=C?Object.getOwnPropertyDescriptor(c,D):null;A&&(A.get||A.set)?Object.defineProperty(d,D,A):d[D]=c[D]}return d.default=c,h&&h.set(c,d),d},s=function(c){if(typeof WeakMap!="function")return null;var n=new WeakMap,h=new WeakMap;return(s=function(C){return C?h:n})(c)},f=e("K+nK"),t.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return t.t0=f,t.next=8,e.e(7).then(e.t.bind(null,"4IMT",7));case 8:return t.t1=t.sent,a=(0,t.t0)(t.t1),t.t2=f,t.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return t.t3=t.sent,v=(0,t.t2)(t.t3),t.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(8),e.e(9)]).then(e.bind(null,"gdfu"));case 17:return b=t.sent,t.t4=p,t.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 21:return t.t5=t.sent,O=(0,t.t4)(t.t5),o={displayType:"row",labelWidth:60,type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F",type:"range",format:"date"},showSetting:{title:"\u662F\u5426\u5C55\u793A\u7F51\u5740",type:"boolean"},siteUrl:{title:"\u7F51\u5740",type:"string",placeholder:"\u6B64\u5904\u5FC5\u586B",hidden:"{{formData.showSetting !== true}}",required:!0,props:{addonBefore:"https://",addonAfter:".com"}}}},N=function(){var c=(0,O.useForm)(),n=function(d,C){C.length>0?alert("errors:"+JSON.stringify(C)):alert("formData:"+JSON.stringify(d,null,2))};return v.default.createElement("div",null,v.default.createElement(O.default,{form:c,schema:o,onFinish:n}),v.default.createElement(a.default,{type:"primary",onClick:c.submit},"\u63D0\u4EA4"))},I=N,t.abrupt("return",I);case 27:case"end":return t.stop()}},F)}));function E(){return P.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-demo-2"}},"display-demo":{component:Object(B.dynamic)({loader:function(){var P=Object(K.a)(g.a.mark(function F(){var f,a,v,b,O;return g.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return f=e("K+nK"),p.t0=f,p.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return p.t1=p.sent,a=(0,p.t0)(p.t1),p.t2=f,p.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return p.t3=p.sent,v=(0,p.t2)(p.t3),b=function(N){return{type:"object",displayType:N,properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},objectName:{title:"\u5BF9\u8C61",bind:"obj",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},O=function(){return a.default.createElement("div",null,a.default.createElement("h2",null,"display: row"),a.default.createElement(v.default,{schema:b("row")}),a.default.createElement("h2",null,"display: column"),a.default.createElement(v.default,{schema:b("column")}))},p.abrupt("return",O);case 14:case"end":return p.stop()}},F)}));function E(){return P.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`},"demo/display.js":{import:"../demo/display",content:je}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo"}},"display-demo-1":{component:Object(B.dynamic)({loader:function(){var P=Object(K.a)(g.a.mark(function F(){var f,a,v,b,O;return g.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return f=e("K+nK"),p.t0=f,p.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return p.t1=p.sent,a=(0,p.t0)(p.t1),p.t2=f,p.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return p.t3=p.sent,v=(0,p.t2)(p.t3),b={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0},check:{title:"box",type:"boolean",default:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},O=function(){return a.default.createElement(v.default,{readOnly:!0,schema:b})},p.abrupt("return",O);case 14:case"end":return p.stop()}},F)}));function E(){return P.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form readOnly schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:je}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-1"}},"display-demo-2":{component:Object(B.dynamic)({loader:function(){var P=Object(K.a)(g.a.mark(function F(){var f,a,v,b,O;return g.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return f=e("K+nK"),p.t0=f,p.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return p.t1=p.sent,a=(0,p.t0)(p.t1),p.t2=f,p.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return p.t3=p.sent,v=(0,p.t2)(p.t3),b={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0,width:"50%"},check:{title:"box",type:"boolean",default:!0,width:"50%",labelWidth:6},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},O=function(){return a.default.createElement(v.default,{labelWidth:"200",schema:b})},p.abrupt("return",O);case 14:case"end":return p.stop()}},F)}));function E(){return P.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form labelWidth="200" schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:je}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-2"}},"display-demo-3":{component:Object(B.dynamic)({loader:function(){var P=Object(K.a)(g.a.mark(function F(){var f,a,v,b,O,s;return g.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,a=(0,o.t0)(o.t1),o.t2=f,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,v=(0,o.t2)(o.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},O=function(){return a.default.createElement(v.default,{schema:b})},s=O,o.abrupt("return",s);case 15:case"end":return o.stop()}},F)}));function E(){return P.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:je}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-3"}},"display-demo-4":{component:Object(B.dynamic)({loader:function(){var P=Object(K.a)(g.a.mark(function F(){var f,a,v,b,O,s;return g.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,a=(0,o.t0)(o.t1),o.t2=f,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,v=(0,o.t2)(o.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"simpleList",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},O=function(){return a.default.createElement(v.default,{schema:b})},s=O,o.abrupt("return",s);case 15:case"end":return o.stop()}},F)}));function E(){return P.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:je}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-4"}},"display-demo-5":{component:Object(B.dynamic)({loader:function(){var P=Object(K.a)(g.a.mark(function F(){var f,a,v,b,O,s;return g.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,a=(0,o.t0)(o.t1),o.t2=f,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,v=(0,o.t2)(o.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"tableList",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},O=function(){return a.default.createElement(v.default,{schema:b})},s=O,o.abrupt("return",s);case 15:case"end":return o.stop()}},F)}));function E(){return P.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:je}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-5"}},"display-demo-6":{component:Object(B.dynamic)({loader:function(){var P=Object(K.a)(g.a.mark(function F(){var f,a,v,b,O,s;return g.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,a=(0,o.t0)(o.t1),o.t2=f,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,v=(0,o.t2)(o.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"drawerList",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"simpleList",props:{hideMove:!0},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},O=function(){return a.default.createElement(v.default,{schema:b})},s=O,o.abrupt("return",s);case 15:case"end":return o.stop()}},F)}));function E(){return P.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:je}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-6"}},"form-methods-demo":{component:Object(B.dynamic)({loader:function(){var P=Object(K.a)(g.a.mark(function F(){var f,a,v,b,O,s,p,o,N,I,r,t,u;return g.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=function(d,C){if(!C&&d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var D=I(C);if(D&&D.has(d))return D.get(d);var A={},$=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var x in d)if(x!=="default"&&Object.prototype.hasOwnProperty.call(d,x)){var Z=$?Object.getOwnPropertyDescriptor(d,x):null;Z&&(Z.get||Z.set)?Object.defineProperty(A,x,Z):A[x]=d[x]}return A.default=d,D&&D.set(d,A),A},I=function(d){if(typeof WeakMap!="function")return null;var C=new WeakMap,D=new WeakMap;return(I=function($){return $?D:C})(d)},f=e("K+nK"),n.next=5,e.e(21).then(e.t.bind(null,"lfLe",7));case 5:return n.t0=f,n.next=8,e.e(22).then(e.t.bind(null,"Cp9S",7));case 8:return n.t1=n.sent,a=(0,n.t0)(n.t1),n.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return n.t2=f,n.next=15,e.e(7).then(e.t.bind(null,"4IMT",7));case 15:return n.t3=n.sent,v=(0,n.t2)(n.t3),n.next=19,e.e(14).then(e.t.bind(null,"tL+A",7));case 19:return n.t4=f,n.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return n.t5=n.sent,b=(0,n.t4)(n.t5),n.t6=f,n.next=27,Promise.resolve().then(e.bind(null,"tJVT"));case 27:return n.t7=n.sent,O=(0,n.t6)(n.t7),n.t8=r,n.next=32,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 32:return n.t9=n.sent,s=(0,n.t8)(n.t9),n.next=36,Promise.all([e.e(0),e.e(1),e.e(2),e.e(8),e.e(9)]).then(e.bind(null,"gdfu"));case 36:return p=n.sent,n.t10=r,n.next=40,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 40:return n.t11=n.sent,o=(0,n.t10)(n.t11),n.next=44,e.e(15).then(e.bind(null,"OH0R"));case 44:return N=n.sent,t=function(){var d=(0,o.useForm)(),C=(0,s.useState)({}),D=(0,O.default)(C,2),A=D[0],$=D[1],x=function(){(0,N.fakeApi)("xxx/getForm").then(function(Ue){d.setValues({input1:"hello world",select1:"c"})})};(0,s.useEffect)(function(){(0,N.delay)(1e3).then(function(Le){$({type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}})})},[]);var Z=function(Ue,rn){rn.length>0?b.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(rn.map(function(_e){return _e.name}))):(0,N.fakeApi)("xxx/submit",Ue).then(function(_e){return b.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})};return s.default.createElement("div",{style:{width:"400px"}},s.default.createElement(o.default,{form:d,schema:A,onFinish:Z}),s.default.createElement(a.default,null,s.default.createElement(v.default,{onClick:x},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),s.default.createElement(v.default,{type:"primary",onClick:d.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},u=t,n.abrupt("return",u);case 48:case"end":return n.stop()}},F)}));function E(){return P.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Se}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo"}},"form-methods-demo-1":{component:Object(B.dynamic)({loader:function(){var P=Object(K.a)(g.a.mark(function F(){var f,a,v,b,O,s,p,o,N,I,r,t,u;return g.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return I=function(d,C){if(!C&&d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var D=N(C);if(D&&D.has(d))return D.get(d);var A={},$=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var x in d)if(x!=="default"&&Object.prototype.hasOwnProperty.call(d,x)){var Z=$?Object.getOwnPropertyDescriptor(d,x):null;Z&&(Z.get||Z.set)?Object.defineProperty(A,x,Z):A[x]=d[x]}return A.default=d,D&&D.set(d,A),A},N=function(d){if(typeof WeakMap!="function")return null;var C=new WeakMap,D=new WeakMap;return(N=function($){return $?D:C})(d)},f=e("K+nK"),n.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return n.t0=f,n.next=8,e.e(7).then(e.t.bind(null,"4IMT",7));case 8:return n.t1=n.sent,a=(0,n.t0)(n.t1),n.t2=f,n.next=13,Promise.resolve().then(e.bind(null,"PpiC"));case 13:return n.t3=n.sent,v=(0,n.t2)(n.t3),n.next=17,e.e(14).then(e.t.bind(null,"tL+A",7));case 17:return n.t4=f,n.next=20,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 20:return n.t5=n.sent,b=(0,n.t4)(n.t5),n.t6=f,n.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return n.t7=n.sent,O=(0,n.t6)(n.t7),n.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(8),e.e(9)]).then(e.bind(null,"gdfu"));case 29:return s=n.sent,n.t8=I,n.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 33:return n.t9=n.sent,p=(0,n.t8)(n.t9),n.next=37,e.e(15).then(e.bind(null,"OH0R"));case 37:return o=n.sent,r={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},t=function(){var d=(0,p.useForm)(),C=function($,x){x.length>0?b.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(x.map(function(Z){return Z.name}))):(0,o.fakeApi)("xxx/submit",$).then(function(Z){return b.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},D=function($){var x=$.data,Z=$.errors,Le=$.schema,Ue=(0,v.default)($,["data","errors","schema"]);return(0,o.fakeApi)("xxx/validation").then(function(rn){return{name:"select1",error:["\u5916\u90E8\u6821\u9A8C\u9519\u8BEF"]}})};return O.default.createElement("div",{style:{width:"400px"}},O.default.createElement(p.default,{form:d,schema:r,beforeFinish:D,onFinish:C}),O.default.createElement(a.default,{type:"primary",onClick:d.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},u=t,n.abrupt("return",u);case 42:case"end":return n.stop()}},F)}));function E(){return P.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Se}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-1"}},"form-methods-demo-2":{component:Object(B.dynamic)({loader:function(){var P=Object(K.a)(g.a.mark(function F(){var f,a,v,b,O,s,p,o,N,I,r,t,u;return g.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return I=function(d,C){if(!C&&d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var D=N(C);if(D&&D.has(d))return D.get(d);var A={},$=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var x in d)if(x!=="default"&&Object.prototype.hasOwnProperty.call(d,x)){var Z=$?Object.getOwnPropertyDescriptor(d,x):null;Z&&(Z.get||Z.set)?Object.defineProperty(A,x,Z):A[x]=d[x]}return A.default=d,D&&D.set(d,A),A},N=function(d){if(typeof WeakMap!="function")return null;var C=new WeakMap,D=new WeakMap;return(N=function($){return $?D:C})(d)},f=e("K+nK"),n.next=5,e.e(21).then(e.t.bind(null,"lfLe",7));case 5:return n.t0=f,n.next=8,e.e(22).then(e.t.bind(null,"Cp9S",7));case 8:return n.t1=n.sent,a=(0,n.t0)(n.t1),n.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return n.t2=f,n.next=15,e.e(7).then(e.t.bind(null,"4IMT",7));case 15:return n.t3=n.sent,v=(0,n.t2)(n.t3),n.next=19,e.e(14).then(e.t.bind(null,"tL+A",7));case 19:return n.t4=f,n.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return n.t5=n.sent,b=(0,n.t4)(n.t5),n.t6=f,n.next=27,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 27:return n.t7=n.sent,O=(0,n.t6)(n.t7),n.next=31,Promise.all([e.e(0),e.e(1),e.e(2),e.e(8),e.e(9)]).then(e.bind(null,"gdfu"));case 31:return s=n.sent,n.t8=I,n.next=35,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 35:return n.t9=n.sent,p=(0,n.t8)(n.t9),n.next=39,e.e(15).then(e.bind(null,"OH0R"));case 39:return o=n.sent,r={type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F\u8303\u56F4",type:"range",format:"date"}}},t=function(){var d=(0,p.useForm)(),C=function($,x){x.length>0?b.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(x.map(function(Z){return Z.name}))):(0,o.fakeApi)("xxx/submit",$).then(function(Z){return b.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},D=function(){(0,o.fakeApi)("xxx/getForm").then(function($){d.setValues({startDate:"2020-04-04",endDate:"2020-04-24"})})};return O.default.createElement("div",{style:{width:"400px"}},O.default.createElement(p.default,{form:d,schema:r,onFinish:C}),O.default.createElement(a.default,null,O.default.createElement(v.default,{onClick:D},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),O.default.createElement(v.default,{type:"primary",onClick:d.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},u=t,n.abrupt("return",u);case 44:case"end":return n.stop()}},F)}));function E(){return P.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Se}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-2"}},"form-methods-demo-3":{component:Object(B.dynamic)({loader:function(){var P=Object(K.a)(g.a.mark(function F(){var f,a,v,b,O,s,p,o,N,I,r,t;return g.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return N=function(h,d){if(!d&&h&&h.__esModule)return h;if(h===null||typeof h!="object"&&typeof h!="function")return{default:h};var C=o(d);if(C&&C.has(h))return C.get(h);var D={},A=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var $ in h)if($!=="default"&&Object.prototype.hasOwnProperty.call(h,$)){var x=A?Object.getOwnPropertyDescriptor(h,$):null;x&&(x.get||x.set)?Object.defineProperty(D,$,x):D[$]=h[$]}return D.default=h,C&&C.set(h,D),D},o=function(h){if(typeof WeakMap!="function")return null;var d=new WeakMap,C=new WeakMap;return(o=function(A){return A?C:d})(h)},f=e("K+nK"),c.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return c.t0=f,c.next=8,e.e(7).then(e.t.bind(null,"4IMT",7));case 8:return c.t1=c.sent,a=(0,c.t0)(c.t1),c.next=12,e.e(14).then(e.t.bind(null,"tL+A",7));case 12:return c.t2=f,c.next=15,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 15:return c.t3=c.sent,v=(0,c.t2)(c.t3),c.t4=N,c.next=20,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 20:return c.t5=c.sent,b=(0,c.t4)(c.t5),c.next=24,Promise.all([e.e(0),e.e(1),e.e(2),e.e(8),e.e(9)]).then(e.bind(null,"gdfu"));case 24:return O=c.sent,c.t6=N,c.next=28,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 28:return c.t7=c.sent,s=(0,c.t6)(c.t7),c.next=32,e.e(15).then(e.bind(null,"OH0R"));case 32:return p=c.sent,I={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select1:{title:"\u5355\u9009",type:"string",widget:"select"}}}}},r=function(){var h=(0,s.useForm)(),d=function(){h.setSchemaByPath("obj1.select1",{enum:["east","south","west","north"],enumNames:["\u4E1C","\u5357","\u897F","\u5317"]})},C=function(A,$){$.length>0?v.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify($.map(function(x){return x.name}))):v.default.info(JSON.stringify(A))};return b.default.createElement("div",{style:{width:"400px"}},b.default.createElement(s.default,{form:h,schema:I,onMount:d,onFinish:C}),b.default.createElement(a.default,{type:"primary",onClick:h.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},t=r,c.abrupt("return",t);case 37:case"end":return c.stop()}},F)}));function E(){return P.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Se}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-3"}},"function-demo":{component:Object(B.dynamic)({loader:function(){var P=Object(K.a)(g.a.mark(function F(){var f,a,v,b,O,s,p,o;return g.a.wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return O=function(t,u){if(!u&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var c=b(u);if(c&&c.has(t))return c.get(t);var n={},h=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in t)if(d!=="default"&&Object.prototype.hasOwnProperty.call(t,d)){var C=h?Object.getOwnPropertyDescriptor(t,d):null;C&&(C.get||C.set)?Object.defineProperty(n,d,C):n[d]=t[d]}return n.default=t,c&&c.set(t,n),n},b=function(t){if(typeof WeakMap!="function")return null;var u=new WeakMap,c=new WeakMap;return(b=function(h){return h?c:u})(t)},f=e("K+nK"),I.t0=f,I.next=6,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 6:return I.t1=I.sent,a=(0,I.t0)(I.t1),I.t2=O,I.next=11,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 11:return I.t3=I.sent,v=(0,I.t2)(I.t3),s={type:"object",properties:{checkbox1:{title:"\u5C55\u793A\u66F4\u591A\u5185\u5BB9",type:"boolean"},select1:{title:"\u8BF7\u5047\u539F\u56E0",type:"string",enum:["a","b","c"],enumNames:["\u75C5\u5047","\u6709\u4E8B","\u5176\u5B83 (\u9700\u6CE8\u660E\u5177\u4F53\u539F\u56E0)"],hidden:"{{formData.checkbox1 !== true}}",widget:"radio"},input1:{title:"\u5177\u4F53\u539F\u56E0",type:"string",format:"textarea",hidden:'{{rootValue.checkbox1 !== true || formData.select1 !== "c"}}'}}},p=function(){var t=(0,v.useForm)();return a.default.createElement(v.default,{form:t,schema:s})},o=p,I.abrupt("return",o);case 17:case"end":return I.stop()}},F)}));function E(){return P.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo1;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo"}},"function-demo-1":{component:Object(B.dynamic)({loader:function(){var P=Object(K.a)(g.a.mark(function F(){var f,a,v,b,O;return g.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return f=e("K+nK"),p.t0=f,p.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return p.t1=p.sent,a=(0,p.t0)(p.t1),p.t2=f,p.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return p.t3=p.sent,v=(0,p.t2)(p.t3),p.next=13,e.e(20).then(e.bind(null,"8iYR"));case 13:return b=p.sent,O=function(){return a.default.createElement(v.default,{schema:b.expression})},p.abrupt("return",O);case 16:case"end":return p.stop()}},F)}));function E(){return P.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { expression } from '../json/schema';

export default () => <FR schema={expression} />;`},"demo/FR.jsx":{import:"../demo/FR",content:oe},"json/schema.js":{import:"../json/schema",content:Jn}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo-1"}},"lifeCycle-demo":{component:Object(B.dynamic)({loader:function(){var P=Object(K.a)(g.a.mark(function F(){var f,a,v,b,O,s,p,o,N;return g.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return O=function(u,c){if(!c&&u&&u.__esModule)return u;if(u===null||typeof u!="object"&&typeof u!="function")return{default:u};var n=b(c);if(n&&n.has(u))return n.get(u);var h={},d=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var C in u)if(C!=="default"&&Object.prototype.hasOwnProperty.call(u,C)){var D=d?Object.getOwnPropertyDescriptor(u,C):null;D&&(D.get||D.set)?Object.defineProperty(h,C,D):h[C]=u[C]}return h.default=u,n&&n.set(u,h),h},b=function(u){if(typeof WeakMap!="function")return null;var c=new WeakMap,n=new WeakMap;return(b=function(d){return d?n:c})(u)},r.t0=O,r.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return r.t1=r.sent,f=(0,r.t0)(r.t1),r.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(8),e.e(9)]).then(e.bind(null,"gdfu"));case 9:return a=r.sent,r.t2=O,r.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 13:return r.t3=r.sent,v=(0,r.t2)(r.t3),s=function(u){return new Promise(function(c){return setTimeout(c,u)})},p={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u9009\u62E9\u6846",description:"\u52A0\u8F7D\u4E2D...",type:"string",enum:[],widget:"radio"}}},o=function(){var u=(0,v.useForm)(),c=function(){u.setValues({input1:"hello world"}),s(3e3).then(function(h){u.setSchemaByPath("select1",{description:"",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]})})};return f.default.createElement(v.default,{form:u,schema:p,onMount:c})},N=o,r.abrupt("return",N);case 20:case"end":return r.stop()}},F)}));function E(){return P.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.8.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"lifeCycle-demo"}},"listDisplay-demo":{component:Object(B.dynamic)({loader:function(){var P=Object(K.a)(g.a.mark(function F(){var f,a,v,b,O,s;return g.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,a=(0,o.t0)(o.t1),o.t2=f,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,v=(0,o.t2)(o.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},O=function(){return a.default.createElement(v.default,{schema:b})},s=O,o.abrupt("return",s);case 15:case"end":return o.stop()}},F)}));function E(){return P.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:je}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo"}},"listDisplay-demo-1":{component:Object(B.dynamic)({loader:function(){var P=Object(K.a)(g.a.mark(function F(){var f,a,v,b,O,s;return g.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,a=(0,o.t0)(o.t1),o.t2=f,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,v=(0,o.t2)(o.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"simpleList",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},O=function(){return a.default.createElement(v.default,{schema:b})},s=O,o.abrupt("return",s);case 15:case"end":return o.stop()}},F)}));function E(){return P.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:je}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-1"}},"listDisplay-demo-2":{component:Object(B.dynamic)({loader:function(){var P=Object(K.a)(g.a.mark(function F(){var f,a,v,b,O,s;return g.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,a=(0,o.t0)(o.t1),o.t2=f,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,v=(0,o.t2)(o.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"tableList",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},O=function(){return a.default.createElement(v.default,{schema:b})},s=O,o.abrupt("return",s);case 15:case"end":return o.stop()}},F)}));function E(){return P.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:je}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-2"}},"listDisplay-demo-3":{component:Object(B.dynamic)({loader:function(){var P=Object(K.a)(g.a.mark(function F(){var f,a,v,b,O,s;return g.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,a=(0,o.t0)(o.t1),o.t2=f,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,v=(0,o.t2)(o.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"drawerList",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"simpleList",props:{hideMove:!0},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},O=function(){return a.default.createElement(v.default,{schema:b})},s=O,o.abrupt("return",s);case 15:case"end":return o.stop()}},F)}));function E(){return P.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:je}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-3"}},"listDisplay-demo-4":{component:Object(B.dynamic)({loader:function(){var P=Object(K.a)(g.a.mark(function F(){var f,a,v,b,O,s;return g.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,a=(0,o.t0)(o.t1),o.t2=f,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,v=(0,o.t2)(o.t3),window.hello=function(N){var I=N.value;console.log(I)},b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",type:"array",widget:"tabList",props:{tabName:"\u9879\u76EE"},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},O=function(){return a.default.createElement(v.default,{schema:b})},s=O,o.abrupt("return",s);case 16:case"end":return o.stop()}},F)}));function E(){return P.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:je}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-4"}},"listDisplay-demo-5":{component:Object(B.dynamic)({loader:function(){var P=Object(K.a)(g.a.mark(function F(){var f,a,v,b,O,s;return g.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,a=(0,o.t0)(o.t1),o.t2=f,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,v=(0,o.t2)(o.t3),b={type:"object",properties:{tabsName1:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"tabList",props:{type:"editable-card",tabName:"\u9879\u76EE"},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName1:{title:"\u5BF9\u8C61\u6570\u7EC4",type:"array",widget:"list1",props:{hideMove:!0},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},O=function(){return a.default.createElement(v.default,{schema:b})},s=O,o.abrupt("return",s);case 15:case"end":return o.stop()}},F)}));function E(){return P.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
export default Demo;`},"demo/display.js":{import:"../demo/display",content:je}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-5"}},"listDisplay-demo-6":{component:Object(B.dynamic)({loader:function(){var P=Object(K.a)(g.a.mark(function F(){var f,a,v,b,O,s;return g.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,a=(0,o.t0)(o.t1),o.t2=f,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,v=(0,o.t2)(o.t3),window.hello=function(N){var I=N.value;console.log(I)},b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"virtualList",itemProps:{buttons:[{callback:"hello",text:"\u590D\u5236"}]},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},O=function(){return a.default.createElement(v.default,{schema:b})},s=O,o.abrupt("return",s);case 16:case"end":return o.stop()}},F)}));function E(){return P.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:je}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-6"}},"mapping-demo":{component:Object(B.dynamic)({loader:function(){var P=Object(K.a)(g.a.mark(function F(){var f,a,v,b,O,s,p,o,N,I,r;return g.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return p=function(n,h){if(!h&&n&&n.__esModule)return n;if(n===null||typeof n!="object"&&typeof n!="function")return{default:n};var d=s(h);if(d&&d.has(n))return d.get(n);var C={},D=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var A in n)if(A!=="default"&&Object.prototype.hasOwnProperty.call(n,A)){var $=D?Object.getOwnPropertyDescriptor(n,A):null;$&&($.get||$.set)?Object.defineProperty(C,A,$):C[A]=n[A]}return C.default=n,d&&d.set(n,C),C},s=function(n){if(typeof WeakMap!="function")return null;var h=new WeakMap,d=new WeakMap;return(s=function(D){return D?d:h})(n)},f=e("K+nK"),u.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return u.t0=f,u.next=8,e.e(7).then(e.t.bind(null,"4IMT",7));case 8:return u.t1=u.sent,a=(0,u.t0)(u.t1),u.t2=f,u.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return u.t3=u.sent,v=(0,u.t2)(u.t3),u.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(8),e.e(9)]).then(e.bind(null,"gdfu"));case 17:return b=u.sent,u.t4=p,u.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 21:return u.t5=u.sent,O=(0,u.t4)(u.t5),o=function(n){var h=n.schema;return h.$id==="#"?v.default.createElement("div",null,n.children):v.default.createElement("div",null,"my custom object:",n.children)},N={type:"object",properties:{object2:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u8F93\u5165\u6846",type:"string"}}}},labelWidth:120,displayType:"row"},I=function(){var n=(0,O.useForm)(),h=function(C,D){console.log("formData:",C,"errors",D)};return v.default.createElement("div",null,v.default.createElement(O.default,{form:n,schema:N,onFinish:h,mapping:{object:"CustomComA"},widgets:{CustomComA:o}}),v.default.createElement(a.default,{type:"primary",onClick:n.submit},"\u63D0\u4EA4"))},r=I,u.abrupt("return",r);case 28:case"end":return u.stop()}},F)}));function E(){return P.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},"react-dom":{version:">=16.8.0"}},identifier:"mapping-demo"}},"watch-demo":{component:Object(B.dynamic)({loader:function(){var P=Object(K.a)(g.a.mark(function F(){var f,a,v,b,O,s,p,o;return g.a.wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return O=function(t,u){if(!u&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var c=b(u);if(c&&c.has(t))return c.get(t);var n={},h=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in t)if(d!=="default"&&Object.prototype.hasOwnProperty.call(t,d)){var C=h?Object.getOwnPropertyDescriptor(t,d):null;C&&(C.get||C.set)?Object.defineProperty(n,d,C):n[d]=t[d]}return n.default=t,c&&c.set(t,n),n},b=function(t){if(typeof WeakMap!="function")return null;var u=new WeakMap,c=new WeakMap;return(b=function(h){return h?c:u})(t)},I.t0=O,I.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return I.t1=I.sent,f=(0,I.t0)(I.t1),I.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(8),e.e(9)]).then(e.bind(null,"gdfu"));case 9:return a=I.sent,I.t2=O,I.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 13:return I.t3=I.sent,v=(0,I.t2)(I.t3),s={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"}}},p=function(){var t=(0,v.useForm)(),u={"#":function(n){console.log("\u8868\u5355\u7684\u65F6\u65F6\u6570\u636E\u4E3A\uFF1A",n)},input1:function(n){t.setValueByPath("input2",n)}};return f.default.createElement(v.default,{form:t,schema:s,watch:u})},o=p,I.abrupt("return",o);case 19:case"end":return I.stop()}},F)}));function E(){return P.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.8.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo"}},"watch-demo-1":{component:Object(B.dynamic)({loader:function(){var P=Object(K.a)(g.a.mark(function F(){var f,a,v,b,O,s,p,o,N,I;return g.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return p=function(c,n){if(!n&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var h=s(n);if(h&&h.has(c))return h.get(c);var d={},C=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var D in c)if(D!=="default"&&Object.prototype.hasOwnProperty.call(c,D)){var A=C?Object.getOwnPropertyDescriptor(c,D):null;A&&(A.get||A.set)?Object.defineProperty(d,D,A):d[D]=c[D]}return d.default=c,h&&h.set(c,d),d},s=function(c){if(typeof WeakMap!="function")return null;var n=new WeakMap,h=new WeakMap;return(s=function(C){return C?h:n})(c)},f=e("K+nK"),t.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return t.t0=f,t.next=8,e.e(7).then(e.t.bind(null,"4IMT",7));case 8:return t.t1=t.sent,a=(0,t.t0)(t.t1),t.t2=p,t.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return t.t3=t.sent,v=(0,t.t2)(t.t3),t.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(8),e.e(9)]).then(e.bind(null,"gdfu"));case 17:return b=t.sent,t.t4=p,t.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 21:return t.t5=t.sent,O=(0,t.t4)(t.t5),o={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"radio"}}}}},N=function(){var c=(0,O.useForm)(),n=function(C,D){D.length>0?alert("errorFields:"+JSON.stringify(D)):alert("formData:"+JSON.stringify(C,null,2))},h={input1:function(C){C&&C.length>2?c.setSchemaByPath("obj1.select",function(D){var A=D.enumNames;return{enumNames:A.map(function($){return $+"a"})}}):c.setSchemaByPath("obj1.select",{enumNames:["\u65E9","\u4E2D","\u665A"]})}};return v.default.createElement("div",null,v.default.createElement(O.default,{form:c,schema:o,onFinish:n,watch:h}),v.default.createElement(a.default,{type:"",style:{marginRight:8},onClick:function(){return c.setSchemaByPath("input2",{title:"\u7F16\u8F91\u6846",format:"textarea"})}},"\u5C06 input \u6539\u4E3A textarea"),v.default.createElement(a.default,{type:"primary",onClick:c.submit},"\u63D0\u4EA4"))},I=N,t.abrupt("return",I);case 27:case"end":return t.stop()}},F)}));function E(){return P.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo-1"}},"widget-demo":{component:Object(B.dynamic)({loader:function(){var P=Object(K.a)(g.a.mark(function F(){var f,a,v,b,O,s,p,o,N,I,r,t,u;return g.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return N=function(d,C){if(!C&&d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var D=o(C);if(D&&D.has(d))return D.get(d);var A={},$=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var x in d)if(x!=="default"&&Object.prototype.hasOwnProperty.call(d,x)){var Z=$?Object.getOwnPropertyDescriptor(d,x):null;Z&&(Z.get||Z.set)?Object.defineProperty(A,x,Z):A[x]=d[x]}return A.default=d,D&&D.set(d,A),A},o=function(d){if(typeof WeakMap!="function")return null;var C=new WeakMap,D=new WeakMap;return(o=function($){return $?D:C})(d)},f=e("K+nK"),n.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return n.t0=f,n.next=8,e.e(7).then(e.t.bind(null,"4IMT",7));case 8:return n.t1=n.sent,a=(0,n.t0)(n.t1),n.next=12,Promise.all([e.e(3),e.e(18)]).then(e.t.bind(null,"cUip",7));case 12:return n.t2=f,n.next=15,Promise.all([e.e(0),e.e(7),e.e(17),e.e(19)]).then(e.t.bind(null,"iJl9",7));case 15:return n.t3=n.sent,v=(0,n.t2)(n.t3),n.t4=f,n.next=20,e.e(87).then(e.bind(null,"0Owb"));case 20:return n.t5=n.sent,b=(0,n.t4)(n.t5),n.t6=f,n.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return n.t7=n.sent,O=(0,n.t6)(n.t7),n.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(8),e.e(9)]).then(e.bind(null,"gdfu"));case 29:return s=n.sent,n.t8=N,n.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 33:return n.t9=n.sent,p=(0,n.t8)(n.t9),I={type:"object",properties:{string:{title:"\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6",type:"string",widget:"site"},select:{title:"\u5355\u9009",type:"number",enum:[1,2,3],enumNames:["\u9009\u98791","\u9009\u98792","\u9009\u98793"]}}},r=function(d){return console.log("widget props:",d),O.default.createElement(v.default,(0,b.default)({addonBefore:"https://",addonAfter:".com"},d))},t=function(){var d=(0,p.useForm)();return O.default.createElement("div",null,O.default.createElement(p.default,{form:d,schema:I,widgets:{site:r},onFinish:function(D){return alert(JSON.stringify(D,null,2))}}),O.default.createElement(a.default,{type:"primary",onClick:d.submit},"\u63D0\u4EA4"))},u=t,n.abrupt("return",u);case 40:case"end":return n.stop()}},F)}));function E(){return P.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},"react-dom":{version:">=16.8.0"}},identifier:"widget-demo"}},"form-render-dependencies":{component:Object(B.dynamic)({loader:function(){var P=Object(K.a)(g.a.mark(function F(){return g.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(25)]).then(e.bind(null,"ODQR"));case 2:return a.abrupt("return",a.sent.default);case 3:case"end":return a.stop()}},F)}));function E(){return P.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:Re}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-dependencies"}},"form-render-listexpression":{component:Object(B.dynamic)({loader:function(){var P=Object(K.a)(g.a.mark(function F(){return g.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(25)]).then(e.bind(null,"5OWw"));case 2:return a.abrupt("return",a.sent.default);case 3:case"end":return a.stop()}},F)}));function E(){return P.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:Fn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-listexpression"}},"form-render-doublebind":{component:Object(B.dynamic)({loader:function(){var P=Object(K.a)(g.a.mark(function F(){return g.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(25)]).then(e.bind(null,"Xjjr"));case 2:return a.abrupt("return",a.sent.default);case 3:case"end":return a.stop()}},F)}));function E(){return P.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:Tn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-doublebind"}},"form-render-rightpath":{component:Object(B.dynamic)({loader:function(){var P=Object(K.a)(g.a.mark(function F(){return g.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(25)]).then(e.bind(null,"bD0a"));case 2:return a.abrupt("return",a.sent.default);case 3:case"end":return a.stop()}},F)}));function E(){return P.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:gn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-rightpath"}},"form-render-custommessage":{component:Object(B.dynamic)({loader:function(){var P=Object(K.a)(g.a.mark(function F(){return g.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(25)]).then(e.bind(null,"yBrT"));case 2:return a.abrupt("return",a.sent.default);case 3:case"end":return a.stop()}},F)}));function E(){return P.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:on}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-custommessage"}},"measure-demo":{component:Object(B.dynamic)({loader:function(){var P=Object(K.a)(g.a.mark(function F(){var f,a,v,b,O,s,p,o,N,I;return g.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o=function(c,n){if(!n&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var h=p(n);if(h&&h.has(c))return h.get(c);var d={},C=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var D in c)if(D!=="default"&&Object.prototype.hasOwnProperty.call(c,D)){var A=C?Object.getOwnPropertyDescriptor(c,D):null;A&&(A.get||A.set)?Object.defineProperty(d,D,A):d[D]=c[D]}return d.default=c,h&&h.set(c,d),d},p=function(c){if(typeof WeakMap!="function")return null;var n=new WeakMap,h=new WeakMap;return(p=function(C){return C?h:n})(c)},f=e("K+nK"),t.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return t.t0=f,t.next=8,e.e(7).then(e.t.bind(null,"4IMT",7));case 8:return t.t1=t.sent,a=(0,t.t0)(t.t1),t.next=12,e.e(14).then(e.t.bind(null,"tL+A",7));case 12:return t.t2=f,t.next=15,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 15:return t.t3=t.sent,v=(0,t.t2)(t.t3),t.t4=o,t.next=20,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 20:return t.t5=t.sent,b=(0,t.t4)(t.t5),t.next=24,Promise.all([e.e(0),e.e(1),e.e(2),e.e(8),e.e(9)]).then(e.bind(null,"gdfu"));case 24:return O=t.sent,t.t6=o,t.next=28,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 28:return t.t7=t.sent,s=(0,t.t6)(t.t7),N=function(){var c=(0,s.useForm)({logOnMount:function(C){console.log("onMount",C)},logOnSubmit:function(C){console.log("onSubmit",C)}}),n={type:"object",properties:{input1:{title:"\u8F93\u5165\u6846",required:!0,type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u5DE6","\u4E2D","\u53F3"],widget:"radio"}}},h=function(C,D){D.length>0?v.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(D.map(function(A){return A.name}))):v.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")};return b.default.createElement("div",null,b.default.createElement(s.default,{id:"my-demo-form",form:c,schema:n,onFinish:h}),b.default.createElement(a.default,{type:"primary",onClick:c.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},I=N,t.abrupt("return",I);case 33:case"end":return t.stop()}},F)}));function E(){return P.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"measure-demo"}},"migrate-demo":{component:Object(B.dynamic)({loader:function(){var P=Object(K.a)(g.a.mark(function F(){var f,a,v,b,O,s,p,o;return g.a.wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return p=function(){var t=(0,v.useForm)(),u=function(n,h){h.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(h))):alert(JSON.stringify(n))};return a.default.createElement("div",null,a.default.createElement(v.default,{form:t,schema:s,onFinish:u}),a.default.createElement("button",{onClick:t.submit},"\u63D0\u4EA4"))},O=function(t,u){if(!u&&t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var c=b(u);if(c&&c.has(t))return c.get(t);var n={},h=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in t)if(d!=="default"&&Object.prototype.hasOwnProperty.call(t,d)){var C=h?Object.getOwnPropertyDescriptor(t,d):null;C&&(C.get||C.set)?Object.defineProperty(n,d,C):n[d]=t[d]}return n.default=t,c&&c.set(t,n),n},b=function(t){if(typeof WeakMap!="function")return null;var u=new WeakMap,c=new WeakMap;return(b=function(h){return h?c:u})(t)},f=e("K+nK"),I.t0=f,I.next=7,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 7:return I.t1=I.sent,a=(0,I.t0)(I.t1),I.t2=O,I.next=12,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 12:return I.t3=I.sent,v=(0,I.t2)(I.t3),s={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}},o=p,I.abrupt("return",o);case 17:case"end":return I.stop()}},F)}));function E(){return P.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate-demo"}},"migrate-demo-1":{component:Object(B.dynamic)({loader:function(){var P=Object(K.a)(g.a.mark(function F(){var f,a,v,b,O,s,p,o,N,I,r,t,u;return g.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return N=function(d,C){if(!C&&d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var D=o(C);if(D&&D.has(d))return D.get(d);var A={},$=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var x in d)if(x!=="default"&&Object.prototype.hasOwnProperty.call(d,x)){var Z=$?Object.getOwnPropertyDescriptor(d,x):null;Z&&(Z.get||Z.set)?Object.defineProperty(A,x,Z):A[x]=d[x]}return A.default=d,D&&D.set(d,A),A},o=function(d){if(typeof WeakMap!="function")return null;var C=new WeakMap,D=new WeakMap;return(o=function($){return $?D:C})(d)},f=e("K+nK"),n.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return n.t0=f,n.next=8,e.e(7).then(e.t.bind(null,"4IMT",7));case 8:return n.t1=n.sent,a=(0,n.t0)(n.t1),n.t2=f,n.next=13,Promise.resolve().then(e.bind(null,"tJVT"));case 13:return n.t3=n.sent,v=(0,n.t2)(n.t3),n.next=17,Promise.all([e.e(3),e.e(18)]).then(e.t.bind(null,"cUip",7));case 17:return n.t4=f,n.next=20,Promise.all([e.e(0),e.e(7),e.e(17),e.e(19)]).then(e.t.bind(null,"iJl9",7));case 20:return n.t5=n.sent,b=(0,n.t4)(n.t5),n.t6=N,n.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return n.t7=n.sent,O=(0,n.t6)(n.t7),n.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(8),e.e(9)]).then(e.bind(null,"gdfu"));case 29:return s=n.sent,n.next=32,e.e(84).then(e.bind(null,"7t+U"));case 32:return p=n.sent,I=b.default.TextArea,r={type:"object",properties:{number:{title:"\u6570\u5B57\u8F93\u5165\u6846",type:"number","ui:disabled":!0},checkbox:{title:"\u662F\u5426\u9009\u62E9",type:"boolean","ui:widget":"switch"}},required:["number"]},t=function(){var d=(0,O.useState)(JSON.stringify(r)),C=(0,v.default)(d,2),D=C[0],A=C[1],$=(0,O.useState)({}),x=(0,v.default)($,2),Z=x[0],Le=x[1],Ue=function(){try{var bn=(0,p.updateSchemaToNewVersion)(JSON.parse(D));Le(bn)}catch(ut){console.log(ut)}},rn=function(bn){A(bn.target.value)},_e=function(){A(JSON.stringify(JSON.parse(D),null,2))};return O.default.createElement("div",null,O.default.createElement("div",null,"\u586B\u5165\u65E7\u7248schema\uFF1A"),O.default.createElement(I,{style:{minHeight:400,marginTop:12,marginBottom:12},value:D,onChange:rn}),O.default.createElement(a.default,{style:{marginRight:12},onClick:_e},"\u683C\u5F0F\u5316\u65E7schema"),O.default.createElement(a.default,{type:"primary",onClick:Ue},"\u751F\u6210\u65B0\u7248schema"),O.default.createElement(I,{style:{minHeight:400,marginTop:12},value:JSON.stringify(Z,null,2)}))},u=t,n.abrupt("return",u);case 38:case"end":return n.stop()}},F)}));function E(){return P.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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

export default Translator;`},"packages/form-render/src/utils.js":{import:"../../../packages/form-render/src/utils.js",content:$e}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"}},identifier:"migrate-demo-1"}},"migrate2-demo":{component:Object(B.dynamic)({loader:function(){var P=Object(K.a)(g.a.mark(function F(){var f,a,v,b,O,s,p,o,N;return g.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return o=function(){var u=(0,v.useState)({}),c=(0,a.default)(u,2),n=c[0],h=c[1],d=(0,v.useState)([]),C=(0,a.default)(d,2),D=C[0],A=C[1],$=(0,v.useState)(!1),x=(0,a.default)($,2),Z=x[0],Le=x[1],Ue=(0,b.useForm)({formData:n,onChange:h,onValidate:A,showValidate:Z});(0,v.useEffect)(function(){Ue.init()},[]);var rn=function(){Le(!0),D.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(D))):alert(JSON.stringify(n))};return v.default.createElement("div",null,v.default.createElement(b.default,{form:Ue,schema:p}),v.default.createElement("button",{onClick:rn},"\u63D0\u4EA4"))},s=function(u,c){if(!c&&u&&u.__esModule)return u;if(u===null||typeof u!="object"&&typeof u!="function")return{default:u};var n=O(c);if(n&&n.has(u))return n.get(u);var h={},d=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var C in u)if(C!=="default"&&Object.prototype.hasOwnProperty.call(u,C)){var D=d?Object.getOwnPropertyDescriptor(u,C):null;D&&(D.get||D.set)?Object.defineProperty(h,C,D):h[C]=u[C]}return h.default=u,n&&n.set(u,h),h},O=function(u){if(typeof WeakMap!="function")return null;var c=new WeakMap,n=new WeakMap;return(O=function(d){return d?n:c})(u)},f=e("K+nK"),r.t0=f,r.next=7,Promise.resolve().then(e.bind(null,"tJVT"));case 7:return r.t1=r.sent,a=(0,r.t0)(r.t1),r.t2=s,r.next=12,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 12:return r.t3=r.sent,v=(0,r.t2)(r.t3),r.t4=s,r.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(6)]).then(e.bind(null,"refC"));case 17:return r.t5=r.sent,b=(0,r.t4)(r.t5),p={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}},N=o,r.abrupt("return",N);case 22:case"end":return r.stop()}},F)}));function E(){return P.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
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
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate2-demo"}},"schema-demo":{component:Object(B.dynamic)({loader:function(){var P=Object(K.a)(g.a.mark(function F(){var f,a,v,b,O;return g.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return f=e("K+nK"),p.t0=f,p.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return p.t1=p.sent,a=(0,p.t0)(p.t1),p.t2=f,p.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return p.t3=p.sent,v=(0,p.t2)(p.t3),p.next=13,e.e(20).then(e.bind(null,"8iYR"));case 13:return b=p.sent,O=function(){return a.default.createElement(v.default,{schema:b.basic})},p.abrupt("return",O);case 16:case"end":return p.stop()}},F)}));function E(){return P.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { basic } from '../json/schema';

export default () => <FR schema={basic} />;`},"demo/FR.jsx":{import:"../demo/FR",content:oe},"json/schema.js":{import:"../json/schema",content:Jn}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo"}},"schema-demo-1":{component:Object(B.dynamic)({loader:function(){var P=Object(K.a)(g.a.mark(function F(){var f,a,v,b,O;return g.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return f=e("K+nK"),p.t0=f,p.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return p.t1=p.sent,a=(0,p.t0)(p.t1),p.t2=f,p.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return p.t3=p.sent,v=(0,p.t2)(p.t3),p.next=13,e.e(20).then(e.bind(null,"8iYR"));case 13:return b=p.sent,O=function(){return a.default.createElement(v.default,{schema:b.titleTrick})},p.abrupt("return",O);case 16:case"end":return p.stop()}},F)}));function E(){return P.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { titleTrick } from '../json/schema';

export default () => <FR schema={titleTrick} />;`},"demo/FR.jsx":{import:"../demo/FR",content:oe},"json/schema.js":{import:"../json/schema",content:Jn}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.8.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo-1"}},"docs-playground":{component:Object(B.dynamic)({loader:function(){var P=Object(K.a)(g.a.mark(function F(){return g.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(25)]).then(e.bind(null,"BASV"));case 2:return a.abrupt("return",a.sent.default);case 3:case"end":return a.stop()}},F)}));function E(){return P.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:Bn},"main.js":{import:"./main",content:Nn},"json/simplest.json":{import:"./json/simplest.json",content:yn},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:Te},"monaco/index.js":{import:"./monaco",content:rt},"theme.css":{import:"./theme.css",content:Mn},"index.css":{import:"./index.css",content:at}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:"^16.0.0"},"react-dom":{version:"^16.0.0"},"deep-equal":{version:"2.0.5"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.8.1"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-simple-code-editor":{version:"0.11.0"},prismjs:{version:"1.23.0"}},identifier:"docs-playground"}},"docs-playground1":{component:Object(B.dynamic)({loader:function(){var P=Object(K.a)(g.a.mark(function F(){return g.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(25)]).then(e.bind(null,"Wrpt"));case 2:return a.abrupt("return",a.sent.default);case 3:case"end":return a.stop()}},F)}));function E(){return P.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:pt},"main.js":{import:"./main",content:st},"json/simplest.json":{import:"./json/simplest.json",content:ft},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:Kn},"monaco/index.js":{import:"./monaco",content:it},"suggestionsMap.js":{import:"./suggestionsMap",content:zn},"index.css":{import:"./index.css",content:ht}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:"^17.x"},"react-dom":{version:">=16.9.0"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.8.1"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-monaco-editor":{version:"0.44.0"},"@types/react":{version:"^17.x"}},identifier:"docs-playground1"}},"table-render-advanced":{component:Object(B.dynamic)({loader:function(){var P=Object(K.a)(g.a.mark(function F(){return g.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(25)]).then(e.bind(null,"7ZP+"));case 2:return a.abrupt("return",a.sent.default);case 3:case"end":return a.stop()}},F)}));function E(){return P.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{tsx:Wn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.5"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!0,identifier:"table-render-advanced"}},"table-render-nosearch":{component:Object(B.dynamic)({loader:function(){var P=Object(K.a)(g.a.mark(function F(){return g.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(25)]).then(e.bind(null,"CfUQ"));case 2:return a.abrupt("return",a.sent.default);case 3:case"end":return a.stop()}},F)}));function E(){return P.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{tsx:Ln}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.5"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!0,identifier:"table-render-nosearch"}},"table-render-notitle":{component:Object(B.dynamic)({loader:function(){var P=Object(K.a)(g.a.mark(function F(){return g.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(25)]).then(e.bind(null,"/usH"));case 2:return a.abrupt("return",a.sent.default);case 3:case"end":return a.stop()}},F)}));function E(){return P.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{tsx:Un}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.5"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!0,identifier:"table-render-notitle"}},"table-render-paramtable":{component:Object(B.dynamic)({loader:function(){var P=Object(K.a)(g.a.mark(function F(){return g.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(25)]).then(e.bind(null,"48jF"));case 2:return a.abrupt("return",a.sent.default);case 3:case"end":return a.stop()}},F)}));function E(){return P.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{tsx:ot}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.5"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},umi:{version:"3.4.19"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!0,identifier:"table-render-paramtable"}},"table-render-demo":{component:Object(B.dynamic)({loader:function(){var P=Object(K.a)(g.a.mark(function F(){var f,a,v,b,O,s,p,o,N;return g.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return f=e("K+nK"),r.t0=f,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,a=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(74)]).then(e.bind(null,"P2DI"));case 8:for(v=r.sent,b=[],O=0;O<6;O++)b.push({id:O.toString(),title:"\u6807\u9898".concat(O+1),created_at:new Date().getTime()});return s={type:"object",properties:{title:{title:"\u6807\u9898",type:"string",width:"30%"},created_at:{title:"\u521B\u5EFA\u65F6\u95F4",type:"string",format:"date",width:"30%"}}},p=[{title:"\u6807\u9898",dataIndex:"title"},{title:"\u521B\u5EFA\u65F6\u95F4",key:"since",dataIndex:"created_at",valueType:"date"},{title:"\u64CD\u4F5C",render:function(u,c){return a.default.createElement("a",{onClick:function(){return alert(u.title)}},"\u7F16\u8F91")}}],o=function(){var u=function(){return{rows:b,total:b.length}};return a.default.createElement(a.default.Fragment,null,a.default.createElement(v.Search,{schema:s,api:u}),a.default.createElement(v.Table,{headerTitle:"\u6700\u7B80\u8868\u683C",columns:p,rowKey:"id"}))},N=(0,v.withTable)(o),r.abrupt("return",N);case 16:case"end":return r.stop()}},F)}));function E(){return P.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default withTable(Wrapper);`}},dependencies:{react:{version:">=16.8.0"},"table-render":{version:"1.1.5"},antd:{version:"4.x",css:"antd/dist/antd.css"}},transform:!0,defaultShowCode:!0,identifier:"table-render-demo"}},"table-render-test1":{component:Object(B.dynamic)({loader:function(){var P=Object(K.a)(g.a.mark(function F(){return g.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(25)]).then(e.bind(null,"aMwh"));case 2:return a.abrupt("return",a.sent.default);case 3:case"end":return a.stop()}},F)}));function E(){return P.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:xn}},dependencies:{react:{version:">=16.8.0"},"table-render":{version:"1.1.5"},antd:{version:"4.x",css:"antd/dist/antd.css"}},identifier:"table-render-test1"}},"generator-demo":{component:Object(B.dynamic)({loader:function(){var P=Object(K.a)(g.a.mark(function F(){var f,a,v,b,O,s;return g.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,a=(0,o.t0)(o.t1),o.t2=f,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(75)]).then(e.bind(null,"nYSz"));case 9:return o.t3=o.sent,v=(0,o.t2)(o.t3),b={type:"object",properties:{inputName:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string"}}},O=function(){return a.default.createElement("div",{style:{height:"80vh"}},a.default.createElement(v.default,{defaultValue:b}))},s=O,o.abrupt("return",s);case 15:case"end":return o.stop()}},F)}));function E(){return P.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.14.0"},"fr-generator":{version:"2.5.8"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.14.0"}},transform:!0,defaultShowCode:!0,identifier:"generator-demo"}},"generator-modal":{component:Object(B.dynamic)({loader:function(){var P=Object(K.a)(g.a.mark(function F(){return g.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(25)]).then(e.bind(null,"PPgD"));case 2:return a.abrupt("return",a.sent.default);case 3:case"end":return a.stop()}},F)}));function E(){return P.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:lt}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.5.8"},"react-dom":{version:">=16.9.0"}},identifier:"generator-modal"}},"generator-settings":{component:Object(B.dynamic)({loader:function(){var P=Object(K.a)(g.a.mark(function F(){return g.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(25)]).then(e.bind(null,"M63W"));case 2:return a.abrupt("return",a.sent.default);case 3:case"end":return a.stop()}},F)}));function E(){return P.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:mn}},dependencies:{react:{version:">=16.14.0"},"fr-generator":{version:"2.5.8"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.14.0"}},identifier:"generator-settings"}},"generator-layout":{component:Object(B.dynamic)({loader:function(){var P=Object(K.a)(g.a.mark(function F(){return g.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(25)]).then(e.bind(null,"SOdT"));case 2:return a.abrupt("return",a.sent.default);case 3:case"end":return a.stop()}},F)}));function E(){return P.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:Yn},"index.less":{import:"./index.less",content:Hn}},dependencies:{react:{version:">=16.14.0"},"fr-generator":{version:"2.5.8"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.14.0"}},identifier:"generator-layout"}},"generator-transformer":{component:Object(B.dynamic)({loader:function(){var P=Object(K.a)(g.a.mark(function F(){return g.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(25)]).then(e.bind(null,"jktF"));case 2:return a.abrupt("return",a.sent.default);case 3:case"end":return a.stop()}},F)}));function E(){return P.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:ln}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.5.8"},"react-dom":{version:">=16.9.0"}},identifier:"generator-transformer"}},"generator-playground":{component:Object(B.dynamic)({loader:function(){var P=Object(K.a)(g.a.mark(function F(){return g.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(25)]).then(e.bind(null,"TYW4"));case 2:return a.abrupt("return",a.sent.default);case 3:case"end":return a.stop()}},F)}));function E(){return P.apply(this,arguments)}return E}()}),previewerProps:{sources:{_:{jsx:vt},"index.less":{import:"./index.less",content:Hn}},dependencies:{react:{version:">=16.14.0"},umi:{version:"3.4.19"},"fr-generator":{version:"2.5.8"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.14.0"}},identifier:"generator-playground"}}}},TIsu:function(Pn,cn,e){},Zs1V:function(Pn){Pn.exports=JSON.parse("{}")},p8sG:function(Pn,cn,e){"use strict";Pn.exports=e("80pN")}}]);
