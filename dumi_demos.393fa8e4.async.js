(window.webpackJsonp=window.webpackJsonp||[]).push([[60,12],{"0zqC":function(Fn,yn,e){"use strict";e.r(yn);var V=e("tJVT"),a=e("q1tI"),S=e.n(a),W=e("wx14"),fe=e("rePB"),z=e("ODXe"),Be=e("U8pU"),oe=e("Ff2n"),_=e("VTBJ"),xe=e("TSYQ"),ye=e.n(xe),pn=e("Zm9Q"),Cn=e("5Z9U"),nn=e("6cGi"),Ye=e("KQm4"),Ge=e("wgJM"),xn=e("t23M");function Bn(t){var i=Object(a.useRef)(),m=Object(a.useRef)(!1);function b(){for(var C=arguments.length,y=new Array(C),R=0;R<C;R++)y[R]=arguments[R];m.current||(Ge.a.cancel(i.current),i.current=Object(Ge.a)(function(){t.apply(void 0,y)}))}return Object(a.useEffect)(function(){return function(){m.current=!0,Ge.a.cancel(i.current)}},[]),b}function Dn(t){var i=Object(a.useRef)([]),m=Object(a.useState)({}),b=Object(z.a)(m,2),C=b[1],y=Object(a.useRef)(typeof t=="function"?t():t),R=Bn(function(){var B=y.current;i.current.forEach(function($){B=$(B)}),i.current=[],y.current=B,C({})});function j(B){i.current.push(B),R()}return[y.current,j]}var We=e("4IlW");function _n(t,i){var m,b=t.prefixCls,C=t.id,y=t.active,R=t.rtl,j=t.tab,B=j.key,$=j.tab,x=j.disabled,Y=j.closeIcon,U=t.tabBarGutter,le=t.tabPosition,Q=t.closable,X=t.renderWrapper,ce=t.removeAriaLabel,J=t.editable,ne=t.onClick,ie=t.onRemove,k=t.onFocus,ue="".concat(b,"-tab");a.useEffect(function(){return ie},[]);var ee={};le==="top"||le==="bottom"?ee[R?"marginLeft":"marginRight"]=U:ee.marginBottom=U;var Ce=J&&Q!==!1&&!x;function re(se){x||ne(se)}function pe(se){se.preventDefault(),se.stopPropagation(),J.onEdit("remove",{key:B,event:se})}var he=a.createElement("div",{key:B,ref:i,className:ye()(ue,(m={},Object(fe.a)(m,"".concat(ue,"-with-remove"),Ce),Object(fe.a)(m,"".concat(ue,"-active"),y),Object(fe.a)(m,"".concat(ue,"-disabled"),x),m)),style:ee,onClick:re},a.createElement("div",{role:"tab","aria-selected":y,id:C&&"".concat(C,"-tab-").concat(B),className:"".concat(ue,"-btn"),"aria-controls":C&&"".concat(C,"-panel-").concat(B),"aria-disabled":x,tabIndex:x?null:0,onClick:function(H){H.stopPropagation(),re(H)},onKeyDown:function(H){[We.a.SPACE,We.a.ENTER].includes(H.which)&&(H.preventDefault(),re(H))},onFocus:k},$),Ce&&a.createElement("button",{type:"button","aria-label":ce||"remove",tabIndex:0,className:"".concat(ue,"-remove"),onClick:function(H){H.stopPropagation(),pe(H)}},Y||J.removeIcon||"\xD7"));return X&&(he=X(he)),he}var Vn=a.forwardRef(_n),et={width:0,height:0,left:0,top:0};function ct(t,i,m){return Object(a.useMemo)(function(){for(var b,C=new Map,y=i.get((b=t[0])===null||b===void 0?void 0:b.key)||et,R=y.left+y.width,j=0;j<t.length;j+=1){var B=t[j].key,$=i.get(B);if(!$){var x;$=i.get((x=t[j-1])===null||x===void 0?void 0:x.key)||et}var Y=C.get(B)||Object(_.a)({},$);Y.right=R-Y.left-Y.width,C.set(B,Y)}return C},[t.map(function(b){return b.key}).join("_"),i,m])}var E={width:0,height:0,left:0,top:0,right:0};function I(t,i,m,b,C){var y=C.tabs,R=C.tabPosition,j=C.rtl,B,$,x;["top","bottom"].includes(R)?(B="width",$=j?"right":"left",x=Math.abs(i.left)):(B="height",$="top",x=-i.top);var Y=i[B],U=m[B],le=b[B],Q=Y;return U+le>Y&&(Q=Y-le),Object(a.useMemo)(function(){if(!y.length)return[0,0];for(var X=y.length,ce=X,J=0;J<X;J+=1){var ne=t.get(y[J].key)||E;if(ne[$]+ne[B]>x+Q){ce=J-1;break}}for(var ie=0,k=X-1;k>=0;k-=1){var ue=t.get(y[k].key)||E;if(ue[$]<x){ie=k+1;break}}return[ie,ce]},[t,x,Q,R,y.map(function(X){return X.key}).join("_"),j])}var D=e("Gytx"),d=e.n(D),o=e("Kwbf");function p(t,i){var m=t.prefixCls,b=t.invalidate,C=t.item,y=t.renderItem,R=t.responsive,j=t.registerSize,B=t.itemKey,$=t.className,x=t.style,Y=t.children,U=t.display,le=t.order,Q=t.component,X=Q===void 0?"div":Q,ce=Object(oe.a)(t,["prefixCls","invalidate","item","renderItem","responsive","registerSize","itemKey","className","style","children","display","order","component"]),J=R&&!U;function ne(Ce){j(B,Ce)}a.useEffect(function(){return function(){ne(null)}},[]);var ie=y&&C!==void 0?y(C):Y,k;b||(k={opacity:J?0:1,height:J?0:void 0,overflowY:J?"hidden":void 0,order:R?le:void 0,pointerEvents:J?"none":void 0});var ue={};J&&(ue["aria-hidden"]=!0);var ee=a.createElement(X,Object(W.a)({className:ye()(!b&&m,$),style:Object(_.a)(Object(_.a)({},k),x)},ue,ce,{ref:i}),ie);return R&&(ee=a.createElement(xn.default,{onResize:function(re){var pe=re.offsetWidth;ne(pe)}},ee)),ee}var g=a.forwardRef(p);g.displayName="Item";var O=g;function r(){var t=Object(a.useState)({}),i=Object(z.a)(t,2),m=i[1],b=Object(a.useRef)([]),C=Object(a.useRef)(!1),y=0,R=0;Object(a.useEffect)(function(){return function(){C.current=!0}},[]);function j(B){var $=y;y+=1,b.current.length<$+1&&(b.current[$]=B);var x=b.current[$];function Y(U){b.current[$]=typeof U=="function"?U(b.current[$]):U,Ge.a.cancel(R),R=Object(Ge.a)(function(){C.current||m({})})}return[x,Y]}return j}var l=function(i,m){var b=a.useContext(T);if(!b){var C=i.component,y=C===void 0?"div":C,R=Object(oe.a)(i,["component"]);return a.createElement(y,Object(W.a)({},R,{ref:m}))}var j=b.className,B=Object(oe.a)(b,["className"]),$=i.className,x=Object(oe.a)(i,["className"]);return a.createElement(T.Provider,{value:null},a.createElement(O,Object(W.a)({ref:m,className:ye()(j,$)},B,x)))},s=a.forwardRef(l);s.displayName="RawItem";var w=s,T=a.createContext(null),P="responsive",c="invalidate";function A(t){return"+ ".concat(t.length," ...")}function h(t,i){var m=t.prefixCls,b=m===void 0?"rc-overflow":m,C=t.data,y=C===void 0?[]:C,R=t.renderItem,j=t.renderRawItem,B=t.itemKey,$=t.itemWidth,x=$===void 0?10:$,Y=t.ssr,U=t.style,le=t.className,Q=t.maxCount,X=t.renderRest,ce=t.renderRawRest,J=t.suffix,ne=t.component,ie=ne===void 0?"div":ne,k=t.itemComponent,ue=t.onVisibleChange,ee=Object(oe.a)(t,["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"]),Ce=r(),re=Y==="full",pe=Ce(null),he=Object(z.a)(pe,2),se=he[0],H=he[1],me=se||0,Oe=Ce(new Map),be=Object(z.a)(Oe,2),Pe=be[0],Le=be[1],Se=Ce(0),je=Object(z.a)(Se,2),we=je[0],Me=je[1],Te=Ce(0),Ne=Object(z.a)(Te,2),Ve=Ne[0],tn=Ne[1],Je=Ce(0),ze=Object(z.a)(Je,2),ke=ze[0],$e=ze[1],In=Object(a.useState)(null),on=Object(z.a)(In,2),qe=on[0],cn=on[1],Sn=Object(a.useState)(null),Rn=Object(z.a)(Sn,2),Ae=Rn[0],Xe=Rn[1],rn=a.useMemo(function(){return Ae===null&&re?Number.MAX_SAFE_INTEGER:Ae||0},[Ae,se]),_e=Object(a.useState)(!1),Ln=Object(z.a)(_e,2),zn=Ln[0],$n=Ln[1],ln="".concat(b,"-item"),Nn=Math.max(we,Ve),mn=y.length&&Q===P,Tn=Q===c,an=mn||typeof Q=="number"&&y.length>Q,un=Object(a.useMemo)(function(){var ge=y;return mn?se===null&&re?ge=y:ge=y.slice(0,Math.min(y.length,me/x)):typeof Q=="number"&&(ge=y.slice(0,Q)),ge},[y,x,se,Q,mn]),An=Object(a.useMemo)(function(){return mn?y.slice(rn+1):y.slice(un.length)},[y,un,mn,rn]),vn=Object(a.useCallback)(function(ge,De){var Fe;return typeof B=="function"?B(ge):(Fe=B&&(ge==null?void 0:ge[B]))!==null&&Fe!==void 0?Fe:De},[B]),en=Object(a.useCallback)(R||function(ge){return ge},[R]);function Ze(ge,De){Xe(ge),De||($n(ge<y.length-1),ue==null||ue(ge))}function Yn(ge,De){H(De.clientWidth)}function Hn(ge,De){Le(function(Fe){var sn=new Map(Fe);return De===null?sn.delete(ge):sn.set(ge,De),sn})}function tt(ge,De){tn(De),Me(Ve)}function jn(ge,De){$e(De)}function On(ge){return Pe.get(vn(un[ge],ge))}a.useLayoutEffect(function(){if(me&&Nn&&un){var ge=ke,De=un.length,Fe=De-1;if(!De){Ze(0),cn(null);return}for(var sn=0;sn<De;sn+=1){var Zn=On(sn);if(Zn===void 0){Ze(sn-1,!0);break}if(ge+=Zn,sn===Fe-1&&ge+On(Fe)<=me){Ze(Fe),cn(null);break}else if(ge+Nn>me){Ze(sn-1),cn(ge-Zn-ke+Ve);break}else if(sn===Fe){Ze(Fe),cn(ge-ke);break}}J&&On(0)+ke>me&&cn(null)}},[me,Pe,Ve,ke,vn,un]);var Gn=zn&&!!An.length,Pn={};qe!==null&&mn&&(Pn={position:"absolute",left:qe,top:0});var gn={prefixCls:ln,responsive:mn,component:k,invalidate:Tn},Qn=j?function(ge,De){var Fe=vn(ge,De);return a.createElement(T.Provider,{key:Fe,value:Object(_.a)(Object(_.a)({},gn),{},{order:De,item:ge,itemKey:Fe,registerSize:Hn,display:De<=rn})},j(ge,De))}:function(ge,De){var Fe=vn(ge,De);return a.createElement(O,Object(W.a)({},gn,{order:De,key:Fe,item:ge,renderItem:en,itemKey:Fe,registerSize:Hn,display:De<=rn}))},Kn,Xn={order:Gn?rn:Number.MAX_SAFE_INTEGER,className:"".concat(ln,"-rest"),registerSize:tt,display:Gn};if(ce)ce&&(Kn=a.createElement(T.Provider,{value:Object(_.a)(Object(_.a)({},gn),Xn)},ce(An)));else{var fn=X||A;Kn=a.createElement(O,Object(W.a)({},gn,Xn),typeof fn=="function"?fn(An):fn)}var Mn=a.createElement(ie,Object(W.a)({className:ye()(!Tn&&b,le),style:U,ref:i},ee),un.map(Qn),an?Kn:null,J&&a.createElement(O,Object(W.a)({},gn,{order:rn,className:"".concat(ln,"-suffix"),registerSize:jn,display:!0,style:Pn}),J));return mn&&(Mn=a.createElement(xn.default,{onResize:Yn},Mn)),Mn}var n=a.forwardRef(h);n.displayName="Overflow",n.Item=w,n.RESPONSIVE=P,n.INVALIDATE=c;var v=n,u=v,N=e("1OyB"),K=e("vuIU"),L=e("Ji7U"),Z=e("LK+K"),G=e("bT9E"),de=e("YrtM"),Ee=a.createContext(null);function Ke(t,i){var m=Object(_.a)({},t);return Object.keys(i).forEach(function(b){var C=i[b];C!==void 0&&(m[b]=C)}),m}function hn(t){var i=t.children,m=t.locked,b=Object(oe.a)(t,["children","locked"]),C=a.useContext(Ee),y=Object(de.a)(function(){return Ke(C,b)},[C,b],function(R,j){return!m&&(R[0]!==j[0]||!d()(R[1],j[1]))});return a.createElement(Ee.Provider,{value:y},i)}function En(t,i,m,b){var C=a.useContext(Ee),y=C.activeKey,R=C.onActive,j=C.onInactive,B={active:y===t};return i||(B.onMouseEnter=function($){m==null||m({key:t,domEvent:$}),R(t)},B.onMouseLeave=function($){b==null||b({key:t,domEvent:$}),j(t)}),B}function Wn(t){var i=t.item,m=Object(oe.a)(t,["item"]);return Object.defineProperty(m,"item",{get:function(){return Object(o.a)(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),i}}),m}function f(t){var i=t.icon,m=t.props,b=t.children,C;return typeof i=="function"?C=a.createElement(i,Object(_.a)({},m)):C=i,C||b||null}function M(t){var i=a.useContext(Ee),m=i.mode,b=i.rtl,C=i.inlineIndent;if(m!=="inline")return null;var y=t;return b?{paddingRight:y*C}:{paddingLeft:y*C}}var F=[],ve=a.createContext(null);function te(){return a.useContext(ve)}var Ie=a.createContext(F);function Ue(t){var i=a.useContext(Ie);return a.useMemo(function(){return t!==void 0?[].concat(Object(Ye.a)(i),[t]):i},[i,t])}var Qe=a.createContext(null),Jt=a.createContext(null);function Ut(t,i){return t===void 0?null:"".concat(t,"-").concat(i)}function zt(t){var i=a.useContext(Jt);return Ut(i,t)}var br=function(t){Object(L.a)(m,t);var i=Object(Z.a)(m);function m(){return Object(N.a)(this,m),i.apply(this,arguments)}return Object(K.a)(m,[{key:"render",value:function(){var C=this.props,y=C.title,R=C.attribute,j=C.elementRef,B=Object(oe.a)(C,["title","attribute","elementRef"]),$=Object(G.a)(B,["eventKey"]);return Object(o.a)(!R,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),a.createElement(u.Item,Object(W.a)({},R,{title:typeof y=="string"?y:void 0},$,{ref:j}))}}]),m}(a.Component),Or=function(i){var m,b=i.style,C=i.className,y=i.eventKey,R=i.disabled,j=i.itemIcon,B=i.children,$=i.role,x=i.onMouseEnter,Y=i.onMouseLeave,U=i.onClick,le=i.onKeyDown,Q=i.onFocus,X=Object(oe.a)(i,["style","className","eventKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"]),ce=zt(y),J=a.useContext(Ee),ne=J.prefixCls,ie=J.onItemClick,k=J.disabled,ue=J.overflowDisabled,ee=J.itemIcon,Ce=J.selectedKeys,re=J.onActive,pe="".concat(ne,"-item"),he=a.useRef(),se=a.useRef(),H=k||R,me=Ue(y),Oe=function(Je){return{key:y,keyPath:me,item:he.current,domEvent:Je}},be=j||ee,Pe=En(y,H,x,Y),Le=Pe.active,Se=Object(oe.a)(Pe,["active"]),je=Ce.includes(y),we=M(me.length),Me=function(Je){if(!H){var ze=Oe(Je);U==null||U(Wn(ze)),ie(ze)}},Te=function(Je){if(le==null||le(Je),Je.which===We.a.ENTER){var ze=Oe(Je);U==null||U(Wn(ze)),ie(ze)}},Ne=function(Je){re(y),Q==null||Q(Je)},Ve={};return i.role==="option"&&(Ve["aria-selected"]=je),a.createElement(br,Object(W.a)({ref:he,elementRef:se,role:$===null?"none":$||"menuitem",tabIndex:R?null:-1,"data-menu-id":ue&&ce?null:ce},X,Se,Ve,{component:"li","aria-disabled":R,style:Object(_.a)(Object(_.a)({},we),b),className:ye()(pe,(m={},Object(fe.a)(m,"".concat(pe,"-active"),Le),Object(fe.a)(m,"".concat(pe,"-selected"),je),Object(fe.a)(m,"".concat(pe,"-disabled"),H),m),C),onClick:Me,onKeyDown:Te,onFocus:Ne}),B,a.createElement(f,{props:Object(_.a)(Object(_.a)({},i),{},{isSelected:je}),icon:be}))};function Cr(t){var i=t.eventKey,m=te(),b=Ue(i);return a.useEffect(function(){if(m)return m.registerPath(i,b),function(){m.unregisterPath(i,b)}},[b]),m?null:a.createElement(Or,t)}var Dt=Cr;function Et(t,i){return Object(pn.a)(t).map(function(m,b){if(a.isValidElement(m)){var C=m.key;return C==null&&(C="tmp_key-".concat([].concat(Object(Ye.a)(i),[b]).join("-"))),a.cloneElement(m,{key:C,eventKey:C})}return m})}function nt(t){var i=a.useRef(t);i.current=t;var m=a.useCallback(function(){for(var b,C=arguments.length,y=new Array(C),R=0;R<C;R++)y[R]=arguments[R];return(b=i.current)===null||b===void 0?void 0:b.call.apply(b,[i].concat(y))},[]);return t?m:void 0}var Sr=function(i,m){var b=i.className,C=i.children,y=Object(oe.a)(i,["className","children"]),R=a.useContext(Ee),j=R.prefixCls,B=R.mode;return a.createElement("ul",Object(W.a)({className:ye()(j,"".concat(j,"-sub"),"".concat(j,"-").concat(B==="inline"?"inline":"vertical"),b)},y,{"data-menu-list":!0,ref:m}),C)},Yt=a.forwardRef(Sr);Yt.displayName="SubMenuList";var Ht=Yt,Rr=e("uciX"),Jn={adjustX:1,adjustY:1},Gt={topLeft:{points:["bl","tl"],overflow:Jn,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Jn,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:Jn,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:Jn,offset:[4,0]}},jr={topLeft:{points:["bl","tl"],overflow:Jn,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Jn,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:Jn,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:Jn,offset:[4,0]}},fa=Gt;function Qt(t,i,m){if(i)return i;if(m)return m[t]||m.other}var Pr={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function Dr(t){var i=t.prefixCls,m=t.visible,b=t.children,C=t.popup,y=t.popupClassName,R=t.popupOffset,j=t.disabled,B=t.mode,$=t.onVisibleChange,x=a.useContext(Ee),Y=x.getPopupContainer,U=x.rtl,le=x.subMenuOpenDelay,Q=x.subMenuCloseDelay,X=x.builtinPlacements,ce=x.triggerSubMenuAction,J=x.forceSubMenuRender,ne=x.motion,ie=x.defaultMotions,k=a.useState(!1),ue=Object(z.a)(k,2),ee=ue[0],Ce=ue[1],re=U?Object(_.a)(Object(_.a)({},jr),X):Object(_.a)(Object(_.a)({},Gt),X),pe=Pr[B],he=Qt(B,ne,ie),se=Object(_.a)(Object(_.a)({},he),{},{leavedClassName:"".concat(i,"-hidden"),removeOnLeave:!1,motionAppear:!0}),H=a.useRef();return a.useEffect(function(){return H.current=Object(Ge.a)(function(){Ce(m)}),function(){Ge.a.cancel(H.current)}},[m]),a.createElement(Rr.a,{prefixCls:i,popupClassName:ye()("".concat(i,"-popup"),Object(fe.a)({},"".concat(i,"-rtl"),U),y),stretch:B==="horizontal"?"minWidth":null,getPopupContainer:Y,builtinPlacements:re,popupPlacement:pe,popupVisible:ee,popup:C,popupAlign:R&&{offset:R},action:j?[]:[ce],mouseEnterDelay:le,mouseLeaveDelay:Q,onPopupVisibleChange:$,forceRender:J,popupMotion:se},b)}var Er=e("8XRh");function Ir(t){var i=t.id,m=t.open,b=t.keyPath,C=t.children,y="inline",R=a.useContext(Ee),j=R.prefixCls,B=R.forceSubMenuRender,$=R.motion,x=R.defaultMotions,Y=R.mode,U=a.useRef(!1);U.current=Y===y;var le=a.useState(!U.current),Q=Object(z.a)(le,2),X=Q[0],ce=Q[1],J=U.current?m:!1;a.useEffect(function(){U.current&&ce(!1)},[Y]);var ne=Object(_.a)({},Qt(y,$,x));b.length>1&&(ne.motionAppear=!1);var ie=ne.onVisibleChanged;return ne.onVisibleChanged=function(k){return!U.current&&!k&&ce(!0),ie==null?void 0:ie(k)},X?null:a.createElement(hn,{mode:y,locked:!U.current},a.createElement(Er.default,Object(W.a)({visible:J},ne,{forceRender:B,removeOnLeave:!1,leavedClassName:"".concat(j,"-hidden")}),function(k){var ue=k.className,ee=k.style;return a.createElement(Ht,{id:i,className:ue,style:ee},C)}))}var Nr=function(i){var m,b=i.style,C=i.className,y=i.title,R=i.eventKey,j=i.disabled,B=i.internalPopupClose,$=i.children,x=i.itemIcon,Y=i.expandIcon,U=i.popupClassName,le=i.popupOffset,Q=i.onClick,X=i.onMouseEnter,ce=i.onMouseLeave,J=i.onTitleClick,ne=i.onTitleMouseEnter,ie=i.onTitleMouseLeave,k=Object(oe.a)(i,["style","className","title","eventKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"]),ue=zt(R),ee=a.useContext(Ee),Ce=ee.prefixCls,re=ee.mode,pe=ee.openKeys,he=ee.disabled,se=ee.overflowDisabled,H=ee.activeKey,me=ee.selectedKeys,Oe=ee.itemIcon,be=ee.expandIcon,Pe=ee.onItemClick,Le=ee.onOpenChange,Se=ee.onActive,je=a.useContext(Qe),we=je.isSubPathKey,Me=Ue(),Te="".concat(Ce,"-submenu"),Ne=he||j,Ve=a.useRef(),tn=a.useRef(),Je=x||Oe,ze=Y||be,ke=pe.includes(R),$e=!se&&ke,In=we(me,R),on=En(R,Ne,ne,ie),qe=on.active,cn=Object(oe.a)(on,["active"]),Sn=a.useState(!1),Rn=Object(z.a)(Sn,2),Ae=Rn[0],Xe=Rn[1],rn=function(Ze){Ne||Xe(Ze)},_e=function(Ze){rn(!0),X==null||X({key:R,domEvent:Ze})},Ln=function(Ze){rn(!1),ce==null||ce({key:R,domEvent:Ze})},zn=a.useMemo(function(){return qe||(re!=="inline"?Ae||we([H],R):!1)},[re,qe,H,Ae,R,we]),$n=M(Me.length),ln=function(Ze){Ne||(J==null||J({key:R,domEvent:Ze}),re==="inline"&&Le(R,!ke))},Nn=nt(function(en){Q==null||Q(Wn(en)),Pe(en)}),mn=function(Ze){re!=="inline"&&Le(R,Ze)},Tn=function(){Se(R)},an=ue&&"".concat(ue,"-popup"),un=a.createElement("div",Object(W.a)({role:"menuitem",style:$n,className:"".concat(Te,"-title"),tabIndex:Ne?null:-1,ref:Ve,title:typeof y=="string"?y:null,"data-menu-id":se&&ue?null:ue,"aria-expanded":$e,"aria-haspopup":!0,"aria-controls":an,"aria-disabled":Ne,onClick:ln,onFocus:Tn},cn),y,a.createElement(f,{icon:re!=="horizontal"?ze:null,props:Object(_.a)(Object(_.a)({},i),{},{isOpen:$e,isSubMenu:!0})},a.createElement("i",{className:"".concat(Te,"-arrow")}))),An=a.useRef(re);if(re!=="inline"&&(An.current=Me.length>1?"vertical":re),!se){var vn=An.current;un=a.createElement(Dr,{mode:vn,prefixCls:Te,visible:!B&&$e&&re!=="inline",popupClassName:U,popupOffset:le,popup:a.createElement(hn,{mode:vn},a.createElement(Ht,{id:an,ref:tn},$)),disabled:Ne,onVisibleChange:mn},un)}return a.createElement(hn,{onItemClick:Nn,mode:re==="horizontal"?"vertical":re,itemIcon:Je,expandIcon:ze},a.createElement(u.Item,Object(W.a)({role:"none"},k,{component:"li",style:b,className:ye()(Te,"".concat(Te,"-").concat(re),C,(m={},Object(fe.a)(m,"".concat(Te,"-open"),$e),Object(fe.a)(m,"".concat(Te,"-active"),zn),Object(fe.a)(m,"".concat(Te,"-selected"),In),Object(fe.a)(m,"".concat(Te,"-disabled"),Ne),m)),onMouseEnter:_e,onMouseLeave:Ln}),un,!se&&a.createElement(Ir,{id:an,open:$e,keyPath:Me},$)))};function Xt(t){var i=t.eventKey,m=t.children,b=Ue(i),C=Et(m,b),y=te();a.useEffect(function(){if(y)return y.registerPath(i,b),function(){y.unregisterPath(i,b)}},[b]);var R;return y?R=C:R=a.createElement(Nr,t,C),a.createElement(Ie.Provider,{value:b},R)}var Tr=e("x/xZ");function Zt(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Object(Tr.a)(t)){var m=t.nodeName.toLowerCase(),b=["input","select","textarea","button"].includes(m)||t.isContentEditable||m==="a"&&!!t.getAttribute("href"),C=t.getAttribute("tabindex"),y=Number(C),R=null;return C&&!Number.isNaN(y)?R=y:b&&R===null&&(R=0),b&&t.disabled&&(R=null),R!==null&&(R>=0||i&&R<0)}return!1}function kt(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,m=Object(Ye.a)(t.querySelectorAll("*")).filter(function(b){return Zt(b,i)});return Zt(t,i)&&m.unshift(t),m}var mt=null;function pa(){mt=document.activeElement}function ha(){mt=null}function va(){if(mt)try{mt.focus()}catch(t){}}function ga(t,i){if(i.keyCode===9){var m=kt(t),b=m[i.shiftKey?0:m.length-1],C=b===document.activeElement||t===document.activeElement;if(C){var y=m[i.shiftKey?m.length-1:0];y.focus(),i.preventDefault()}}}var It=We.a.LEFT,Nt=We.a.RIGHT,Tt=We.a.UP,ft=We.a.DOWN,pt=We.a.ENTER,qt=We.a.ESC,_t=[Tt,ft,It,Nt];function Ar(t,i,m,b){var C,y,R,j,B="prev",$="next",x="children",Y="parent";if(t==="inline"&&b===pt)return{inlineTrigger:!0};var U=(C={},Object(fe.a)(C,Tt,B),Object(fe.a)(C,ft,$),C),le=(y={},Object(fe.a)(y,It,m?$:B),Object(fe.a)(y,Nt,m?B:$),Object(fe.a)(y,ft,x),Object(fe.a)(y,pt,x),y),Q=(R={},Object(fe.a)(R,Tt,B),Object(fe.a)(R,ft,$),Object(fe.a)(R,pt,x),Object(fe.a)(R,qt,Y),Object(fe.a)(R,It,m?x:Y),Object(fe.a)(R,Nt,m?Y:x),R),X={inline:U,horizontal:le,vertical:Q,inlineSub:U,horizontalSub:Q,verticalSub:Q},ce=(j=X["".concat(t).concat(i?"":"Sub")])===null||j===void 0?void 0:j[b];switch(ce){case B:return{offset:-1,sibling:!0};case $:return{offset:1,sibling:!0};case Y:return{offset:-1,sibling:!1};case x:return{offset:1,sibling:!1};default:return null}}function Kr(t){for(var i=t;i;){if(i.getAttribute("data-menu-list"))return i;i=i.parentElement}return null}function Mr(t,i){for(var m=t||document.activeElement;m;){if(i.has(m))return m;m=m.parentElement}return null}function wr(t,i){var m=kt(t,!0);return m.filter(function(b){return i.has(b)})}function er(t,i,m){var b=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!t)return null;var C=wr(t,i),y=C.length,R=C.findIndex(function(j){return m===j});return b<0?R===-1?R=y-1:R-=1:b>0&&(R+=1),R=(R+y)%y,C[R]}function Fr(t,i,m,b,C,y,R,j,B,$){var x=a.useRef(),Y=a.useRef();Y.current=i;var U=function(){Ge.a.cancel(x.current)};return a.useEffect(function(){return function(){U()}},[]),function(le){var Q=le.which;if([].concat(_t,[pt,qt]).includes(Q)){var X,ce,J,ne=function(){X=new Set,ce=new Map,J=new Map;var Oe=y();return Oe.forEach(function(be){var Pe=document.querySelector("[data-menu-id='".concat(Ut(b,be),"']"));Pe&&(X.add(Pe),J.set(Pe,be),ce.set(be,Pe))}),X};ne();var ie=ce.get(i),k=Mr(ie,X),ue=J.get(k),ee=Ar(t,R(ue,!0).length===1,m,Q);if(!ee)return;_t.includes(Q)&&le.preventDefault();var Ce=function(Oe){if(Oe){var be=Oe,Pe=Oe.querySelector("a");(Pe==null?void 0:Pe.getAttribute("href"))&&(be=Pe);var Le=J.get(Oe);j(Le),U(),x.current=Object(Ge.a)(function(){Y.current===Le&&be.focus()})}};if(ee.sibling||!k){var re;!k||t==="inline"?re=C.current:re=Kr(k);var pe=er(re,X,k,ee.offset);Ce(pe)}else if(ee.inlineTrigger)B(ue);else if(ee.offset>0)B(ue,!0),U(),x.current=Object(Ge.a)(function(){ne();var me=k.getAttribute("aria-controls"),Oe=document.getElementById(me),be=er(Oe,X);Ce(be)},5);else if(ee.offset<0){var he=R(ue,!0),se=he[he.length-2],H=ce.get(se);B(se,!1),Ce(H)}}$==null||$(le)}}var Br=Math.random().toFixed(5).toString().slice(2),nr=0;function Wr(t){var i=Object(nn.a)(t,{value:t}),m=Object(z.a)(i,2),b=m[0],C=m[1];return a.useEffect(function(){nr+=1;var y="".concat(Br,"-").concat(nr);C("rc-menu-uuid-".concat(y))},[]),b}var ya=e("p8sG");function Lr(t){Promise.resolve().then(t)}var At="__RC_UTIL_PATH_SPLIT__",tr=function(i){return i.join(At)},$r=function(i){return i.split(At)},Kt="rc-menu-more";function xr(){var t=a.useState({}),i=Object(z.a)(t,2),m=i[1],b=Object(a.useRef)(new Map),C=Object(a.useRef)(new Map),y=a.useState([]),R=Object(z.a)(y,2),j=R[0],B=R[1],$=Object(a.useRef)(0),x=Object(a.useCallback)(function(J,ne){var ie=tr(ne);C.current.set(ie,J),b.current.set(J,ie),$.current+=1;var k=$.current;Lr(function(){k===$.current&&m({})})},[]),Y=Object(a.useCallback)(function(J,ne){var ie=tr(ne);C.current.delete(ie),b.current.delete(J)},[]),U=Object(a.useCallback)(function(J){B(J)},[]),le=Object(a.useCallback)(function(J,ne){var ie=b.current.get(J)||"",k=$r(ie);return ne&&j.includes(k[0])&&k.unshift(Kt),k},[j]),Q=Object(a.useCallback)(function(J,ne){return J.some(function(ie){var k=le(ie,!0);return k.includes(ne)})},[le]),X=function(){var ne=Object(Ye.a)(b.current.keys());return j.length&&ne.push(Kt),ne},ce=Object(a.useCallback)(function(J){var ne="".concat(b.current.get(J)).concat(At),ie=new Set;return Object(Ye.a)(C.current.keys()).forEach(function(k){k.startsWith(ne)&&ie.add(C.current.get(k))}),ie},[]);return{registerPath:x,unregisterPath:Y,refreshOverflowKeys:U,isSubPathKey:Q,getKeyPath:le,getKeys:X,getSubPathKeys:ce}}var ht=[],Vr=function(i){var m,b,C=i.prefixCls,y=C===void 0?"rc-menu":C,R=i.style,j=i.className,B=i.tabIndex,$=B===void 0?0:B,x=i.children,Y=i.direction,U=i.id,le=i.mode,Q=le===void 0?"vertical":le,X=i.inlineCollapsed,ce=i.disabled,J=i.disabledOverflow,ne=i.subMenuOpenDelay,ie=ne===void 0?.1:ne,k=i.subMenuCloseDelay,ue=k===void 0?.1:k,ee=i.forceSubMenuRender,Ce=i.defaultOpenKeys,re=i.openKeys,pe=i.activeKey,he=i.defaultActiveFirst,se=i.selectable,H=se===void 0?!0:se,me=i.multiple,Oe=me===void 0?!1:me,be=i.defaultSelectedKeys,Pe=i.selectedKeys,Le=i.onSelect,Se=i.onDeselect,je=i.inlineIndent,we=je===void 0?24:je,Me=i.motion,Te=i.defaultMotions,Ne=i.triggerSubMenuAction,Ve=Ne===void 0?"hover":Ne,tn=i.builtinPlacements,Je=i.itemIcon,ze=i.expandIcon,ke=i.overflowedIndicator,$e=ke===void 0?"...":ke,In=i.getPopupContainer,on=i.onClick,qe=i.onOpenChange,cn=i.onKeyDown,Sn=i.openAnimation,Rn=i.openTransitionName,Ae=Object(oe.a)(i,["prefixCls","style","className","tabIndex","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName"]),Xe=Et(x,ht),rn=a.useState(!1),_e=Object(z.a)(rn,2),Ln=_e[0],zn=_e[1],$n=a.useRef(),ln=Wr(U),Nn=Y==="rtl",mn=a.useMemo(function(){return Q==="inline"&&X?["vertical",X]:[Q,!1]},[Q,X]),Tn=Object(z.a)(mn,2),an=Tn[0],un=Tn[1],An=a.useState(0),vn=Object(z.a)(An,2),en=vn[0],Ze=vn[1],Yn=en>=Xe.length-1||an!=="horizontal"||J,Hn=Object(nn.a)(Ce,{value:re,postState:function(q){return q||ht}}),tt=Object(z.a)(Hn,2),jn=tt[0],On=tt[1],Gn=a.useState(jn),Pn=Object(z.a)(Gn,2),gn=Pn[0],Qn=Pn[1],Kn=an==="inline",Xn=a.useRef(!1);a.useEffect(function(){Kn&&Qn(jn)},[jn]),a.useEffect(function(){if(!Xn.current){Xn.current=!0;return}if(Kn)On(gn);else{var ae=[];On(ae),qe==null||qe(ae)}},[Kn]);var fn=xr(),Mn=fn.registerPath,ge=fn.unregisterPath,De=fn.refreshOverflowKeys,Fe=fn.isSubPathKey,sn=fn.getKeyPath,Zn=fn.getKeys,gt=fn.getSubPathKeys,Bt=a.useMemo(function(){return{registerPath:Mn,unregisterPath:ge}},[Mn,ge]),Wt=a.useMemo(function(){return{isSubPathKey:Fe}},[Fe]);a.useEffect(function(){De(Yn?ht:Xe.slice(en+1).map(function(ae){return ae.key}))},[en,Yn]);var Lt=Object(nn.a)(pe||he&&((m=Xe[0])===null||m===void 0?void 0:m.key),{value:pe}),rt=Object(z.a)(Lt,2),yt=rt[0],st=rt[1],bt=nt(function(ae){st(ae)}),$t=nt(function(){st(void 0)}),Ot=Object(nn.a)(be||[],{value:Pe,postState:function(q){return Array.isArray(q)?q:q==null?ht:[q]}}),Ct=Object(z.a)(Ot,2),at=Ct[0],wn=Ct[1],St=function(q){if(!!H){var Re=q.key,He=at.includes(Re),dn;He?dn=at.filter(function(qn){return qn!==Re}):Oe?dn=[].concat(Object(Ye.a)(at),[Re]):dn=[Re],wn(dn);var Un=Object(_.a)(Object(_.a)({},q),{},{selectedKeys:dn});He?Se==null||Se(Un):Le==null||Le(Un)}},Rt=nt(function(ae){on==null||on(Wn(ae)),St(ae)}),ot=nt(function(ae,q){var Re=jn.filter(function(dn){return dn!==ae});if(q)Re.push(ae);else if(an!=="inline"){var He=gt(ae);Re=Re.filter(function(dn){return!He.has(dn)})}d()(jn,Re)||(On(Re),qe==null||qe(Re))}),kn=nt(In),lt=function(q,Re){var He=Re!=null?Re:!jn.includes(q);ot(q,He)},ut=Fr(an,yt,Nn,ln,$n,Zn,sn,st,lt,cn);a.useEffect(function(){zn(!0)},[]);var jt=an!=="horizontal"||J?Xe:Xe.map(function(ae,q){return a.createElement(hn,{key:ae.key,overflowDisabled:q>en},ae)}),Pt=a.createElement(u,Object(W.a)({id:U,ref:$n,prefixCls:"".concat(y,"-overflow"),component:"ul",itemComponent:Dt,className:ye()(y,"".concat(y,"-root"),"".concat(y,"-").concat(an),j,(b={},Object(fe.a)(b,"".concat(y,"-inline-collapsed"),un),Object(fe.a)(b,"".concat(y,"-rtl"),Nn),b)),dir:Y,style:R,role:"menu",tabIndex:$,data:jt,renderRawItem:function(q){return q},renderRawRest:function(q){var Re=q.length,He=Re?Xe.slice(-Re):null;return a.createElement(Xt,{eventKey:Kt,title:$e,disabled:Yn,internalPopupClose:Re===0},He)},maxCount:an!=="horizontal"||J?u.INVALIDATE:u.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(q){Ze(q)},onKeyDown:ut},Ae));return a.createElement(Jt.Provider,{value:ln},a.createElement(hn,{prefixCls:y,mode:an,openKeys:jn,rtl:Nn,disabled:ce,motion:Ln?Me:null,defaultMotions:Ln?Te:null,activeKey:yt,onActive:bt,onInactive:$t,selectedKeys:at,inlineIndent:we,subMenuOpenDelay:ie,subMenuCloseDelay:ue,forceSubMenuRender:ee,builtinPlacements:tn,triggerSubMenuAction:Ve,getPopupContainer:kn,itemIcon:Je,expandIcon:ze,onItemClick:Rt,onOpenChange:ot},a.createElement(Qe.Provider,{value:Wt},Pt),a.createElement(ve.Provider,{value:Bt},Xe)))},Jr=Vr,Ur=function(i){var m=i.className,b=i.title,C=i.eventKey,y=i.children,R=Object(oe.a)(i,["className","title","eventKey","children"]),j=a.useContext(Ee),B=j.prefixCls,$="".concat(B,"-item-group");return a.createElement("li",Object(W.a)({},R,{onClick:function(Y){return Y.stopPropagation()},className:ye()($,m)}),a.createElement("div",{className:"".concat($,"-title"),title:typeof b=="string"?b:void 0},b),a.createElement("ul",{className:"".concat($,"-list")},y))};function zr(t){var i=t.children,m=Object(oe.a)(t,["children"]),b=Ue(m.eventKey),C=Et(i,b),y=te();return y?C:a.createElement(Ur,m,C)}function Yr(t){var i=t.className,m=t.style,b=a.useContext(Ee),C=b.prefixCls,y=te();return y?null:a.createElement("li",{className:ye()("".concat(C,"-item-divider"),i),style:m})}var it=Jr;it.Item=Dt,it.SubMenu=Xt,it.ItemGroup=zr,it.Divider=Yr;var Hr=it,Gr=e("eDIo");function Qr(t,i){var m=t.prefixCls,b=t.editable,C=t.locale,y=t.style;return!b||b.showAdd===!1?null:a.createElement("button",{ref:i,type:"button",className:"".concat(m,"-nav-add"),style:y,"aria-label":(C==null?void 0:C.addAriaLabel)||"Add tab",onClick:function(j){b.onEdit("add",{event:j})}},b.addIcon||"+")}var rr=a.forwardRef(Qr);function Xr(t,i){var m=t.prefixCls,b=t.id,C=t.tabs,y=t.locale,R=t.mobile,j=t.moreIcon,B=j===void 0?"More":j,$=t.moreTransitionName,x=t.style,Y=t.className,U=t.editable,le=t.tabBarGutter,Q=t.rtl,X=t.onTabClick,ce=Object(a.useState)(!1),J=Object(z.a)(ce,2),ne=J[0],ie=J[1],k=Object(a.useState)(null),ue=Object(z.a)(k,2),ee=ue[0],Ce=ue[1],re="".concat(b,"-more-popup"),pe="".concat(m,"-dropdown"),he=ee!==null?"".concat(re,"-").concat(ee):null,se=y==null?void 0:y.dropdownAriaLabel,H=a.createElement(Hr,{onClick:function(je){var we=je.key,Me=je.domEvent;X(we,Me),ie(!1)},id:re,tabIndex:-1,role:"listbox","aria-activedescendant":he,selectedKeys:[ee],"aria-label":se!==void 0?se:"expanded dropdown"},C.map(function(Se){return a.createElement(Dt,{key:Se.key,id:"".concat(re,"-").concat(Se.key),role:"option","aria-controls":b&&"".concat(b,"-panel-").concat(Se.key),disabled:Se.disabled},Se.tab)}));function me(Se){for(var je=C.filter(function(Ve){return!Ve.disabled}),we=je.findIndex(function(Ve){return Ve.key===ee})||0,Me=je.length,Te=0;Te<Me;Te+=1){we=(we+Se+Me)%Me;var Ne=je[we];if(!Ne.disabled){Ce(Ne.key);return}}}function Oe(Se){var je=Se.which;if(!ne){[We.a.DOWN,We.a.SPACE,We.a.ENTER].includes(je)&&(ie(!0),Se.preventDefault());return}switch(je){case We.a.UP:me(-1),Se.preventDefault();break;case We.a.DOWN:me(1),Se.preventDefault();break;case We.a.ESC:ie(!1);break;case We.a.SPACE:case We.a.ENTER:ee!==null&&X(ee,Se);break}}Object(a.useEffect)(function(){var Se=document.getElementById(he);Se&&Se.scrollIntoView&&Se.scrollIntoView(!1)},[ee]),Object(a.useEffect)(function(){ne||Ce(null)},[ne]);var be=Object(fe.a)({},Q?"marginLeft":"marginRight",le);C.length||(be.visibility="hidden",be.order=1);var Pe=ye()(Object(fe.a)({},"".concat(pe,"-rtl"),Q)),Le=R?null:a.createElement(Gr.default,{prefixCls:pe,overlay:H,trigger:["hover"],visible:ne,transitionName:$,onVisibleChange:ie,overlayClassName:Pe,mouseEnterDelay:.1,mouseLeaveDelay:.1},a.createElement("button",{type:"button",className:"".concat(m,"-nav-more"),style:be,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":re,id:"".concat(b,"-more"),"aria-expanded":ne,onKeyDown:Oe},B));return a.createElement("div",{className:ye()("".concat(m,"-nav-operations"),Y),style:x,ref:i},Le,a.createElement(rr,{prefixCls:m,locale:y,editable:U}))}var Zr=a.forwardRef(Xr),Mt=Object(a.createContext)(null),kr=.1,ar=.01,vt=20,ir=Math.pow(.995,vt);function qr(t,i){var m=Object(a.useState)(),b=Object(z.a)(m,2),C=b[0],y=b[1],R=Object(a.useState)(0),j=Object(z.a)(R,2),B=j[0],$=j[1],x=Object(a.useState)(0),Y=Object(z.a)(x,2),U=Y[0],le=Y[1],Q=Object(a.useState)(),X=Object(z.a)(Q,2),ce=X[0],J=X[1],ne=Object(a.useRef)();function ie(pe){var he=pe.touches[0],se=he.screenX,H=he.screenY;y({x:se,y:H}),window.clearInterval(ne.current)}function k(pe){if(!!C){pe.preventDefault();var he=pe.touches[0],se=he.screenX,H=he.screenY;y({x:se,y:H});var me=se-C.x,Oe=H-C.y;i(me,Oe);var be=Date.now();$(be),le(be-B),J({x:me,y:Oe})}}function ue(){if(!!C&&(y(null),J(null),ce)){var pe=ce.x/U,he=ce.y/U,se=Math.abs(pe),H=Math.abs(he);if(Math.max(se,H)<kr)return;var me=pe,Oe=he;ne.current=window.setInterval(function(){if(Math.abs(me)<ar&&Math.abs(Oe)<ar){window.clearInterval(ne.current);return}me*=ir,Oe*=ir,i(me*vt,Oe*vt)},vt)}}var ee=Object(a.useRef)();function Ce(pe){var he=pe.deltaX,se=pe.deltaY,H=0,me=Math.abs(he),Oe=Math.abs(se);me===Oe?H=ee.current==="x"?he:se:me>Oe?(H=he,ee.current="x"):(H=se,ee.current="y"),i(-H,-H)&&pe.preventDefault()}var re=Object(a.useRef)(null);re.current={onTouchStart:ie,onTouchMove:k,onTouchEnd:ue,onWheel:Ce},a.useEffect(function(){function pe(me){re.current.onTouchStart(me)}function he(me){re.current.onTouchMove(me)}function se(me){re.current.onTouchEnd(me)}function H(me){re.current.onWheel(me)}return document.addEventListener("touchmove",he,{passive:!1}),document.addEventListener("touchend",se,{passive:!1}),t.current.addEventListener("touchstart",pe,{passive:!1}),t.current.addEventListener("wheel",H),function(){document.removeEventListener("touchmove",he),document.removeEventListener("touchend",se)}},[])}function _r(){var t=Object(a.useRef)(new Map);function i(b){return t.current.has(b)||t.current.set(b,a.createRef()),t.current.get(b)}function m(b){t.current.delete(b)}return[i,m]}function sr(t,i){var m=a.useRef(t),b=a.useState({}),C=Object(z.a)(b,2),y=C[1];function R(j){var B=typeof j=="function"?j(m.current):j;B!==m.current&&i(B,m.current),m.current=B,y({})}return[m.current,R]}var or=function(i){var m=i.position,b=i.prefixCls,C=i.extra;if(!C)return null;var y,R=C;return m==="right"&&(y=R.right||!R.left&&R||null),m==="left"&&(y=R.left||null),y?a.createElement("div",{className:"".concat(b,"-extra-content")},y):null};function ea(t,i){var m,b=a.useContext(Mt),C=b.prefixCls,y=b.tabs,R=t.className,j=t.style,B=t.id,$=t.animated,x=t.activeKey,Y=t.rtl,U=t.extra,le=t.editable,Q=t.locale,X=t.tabPosition,ce=t.tabBarGutter,J=t.children,ne=t.onTabClick,ie=t.onTabScroll,k=Object(a.useRef)(),ue=Object(a.useRef)(),ee=Object(a.useRef)(),Ce=Object(a.useRef)(),re=_r(),pe=Object(z.a)(re,2),he=pe[0],se=pe[1],H=X==="top"||X==="bottom",me=sr(0,function(ae,q){H&&ie&&ie({direction:ae>q?"left":"right"})}),Oe=Object(z.a)(me,2),be=Oe[0],Pe=Oe[1],Le=sr(0,function(ae,q){!H&&ie&&ie({direction:ae>q?"top":"bottom"})}),Se=Object(z.a)(Le,2),je=Se[0],we=Se[1],Me=Object(a.useState)(0),Te=Object(z.a)(Me,2),Ne=Te[0],Ve=Te[1],tn=Object(a.useState)(0),Je=Object(z.a)(tn,2),ze=Je[0],ke=Je[1],$e=Object(a.useState)(0),In=Object(z.a)($e,2),on=In[0],qe=In[1],cn=Object(a.useState)(0),Sn=Object(z.a)(cn,2),Rn=Sn[0],Ae=Sn[1],Xe=Object(a.useState)(null),rn=Object(z.a)(Xe,2),_e=rn[0],Ln=rn[1],zn=Object(a.useState)(null),$n=Object(z.a)(zn,2),ln=$n[0],Nn=$n[1],mn=Object(a.useState)(0),Tn=Object(z.a)(mn,2),an=Tn[0],un=Tn[1],An=Object(a.useState)(0),vn=Object(z.a)(An,2),en=vn[0],Ze=vn[1],Yn=Dn(new Map),Hn=Object(z.a)(Yn,2),tt=Hn[0],jn=Hn[1],On=ct(y,tt,Ne),Gn="".concat(C,"-nav-operations-hidden"),Pn=0,gn=0;H?Y?(Pn=0,gn=Math.max(0,Ne-_e)):(Pn=Math.min(0,_e-Ne),gn=0):(Pn=Math.min(0,ln-ze),gn=0);function Qn(ae){return ae<Pn?Pn:ae>gn?gn:ae}var Kn=Object(a.useRef)(),Xn=Object(a.useState)(),fn=Object(z.a)(Xn,2),Mn=fn[0],ge=fn[1];function De(){ge(Date.now())}function Fe(){window.clearTimeout(Kn.current)}qr(k,function(ae,q){function Re(He,dn){He(function(Un){var qn=Qn(Un+dn);return qn})}if(H){if(_e>=Ne)return!1;Re(Pe,ae)}else{if(ln>=ze)return!1;Re(we,q)}return Fe(),De(),!0}),Object(a.useEffect)(function(){return Fe(),Mn&&(Kn.current=window.setTimeout(function(){ge(0)},100)),Fe},[Mn]);function sn(){var ae=arguments.length>0&&arguments[0]!==void 0?arguments[0]:x,q=On.get(ae)||{width:0,height:0,left:0,right:0,top:0};if(H){var Re=be;Y?q.right<be?Re=q.right:q.right+q.width>be+_e&&(Re=q.right+q.width-_e):q.left<-be?Re=-q.left:q.left+q.width>-be+_e&&(Re=-(q.left+q.width-_e)),we(0),Pe(Qn(Re))}else{var He=je;q.top<-je?He=-q.top:q.top+q.height>-je+ln&&(He=-(q.top+q.height-ln)),Pe(0),we(Qn(He))}}var Zn=I(On,{width:_e,height:ln,left:be,top:je},{width:on,height:Rn},{width:an,height:en},Object(_.a)(Object(_.a)({},t),{},{tabs:y})),gt=Object(z.a)(Zn,2),Bt=gt[0],Wt=gt[1],Lt=y.map(function(ae){var q=ae.key;return a.createElement(Vn,{id:B,prefixCls:C,key:q,rtl:Y,tab:ae,closable:ae.closable,editable:le,active:q===x,tabPosition:X,tabBarGutter:ce,renderWrapper:J,removeAriaLabel:Q==null?void 0:Q.removeAriaLabel,ref:he(q),onClick:function(He){ne(q,He)},onRemove:function(){se(q)},onFocus:function(){sn(q),De(),Y||(k.current.scrollLeft=0),k.current.scrollTop=0}})}),rt=Bn(function(){var ae,q,Re,He,dn,Un,qn,xt,Vt,la=((ae=k.current)===null||ae===void 0?void 0:ae.offsetWidth)||0,ua=((q=k.current)===null||q===void 0?void 0:q.offsetHeight)||0,mr=((Re=Ce.current)===null||Re===void 0?void 0:Re.offsetWidth)||0,fr=((He=Ce.current)===null||He===void 0?void 0:He.offsetHeight)||0,da=((dn=ee.current)===null||dn===void 0?void 0:dn.offsetWidth)||0,ca=((Un=ee.current)===null||Un===void 0?void 0:Un.offsetHeight)||0;Ln(la),Nn(ua),un(mr),Ze(fr);var pr=(((qn=ue.current)===null||qn===void 0?void 0:qn.offsetWidth)||0)-mr,hr=(((xt=ue.current)===null||xt===void 0?void 0:xt.offsetHeight)||0)-fr;Ve(pr),ke(hr);var vr=(Vt=ee.current)===null||Vt===void 0?void 0:Vt.className.includes(Gn);qe(pr-(vr?0:da)),Ae(hr-(vr?0:ca)),jn(function(){var gr=new Map;return y.forEach(function(ma){var yr=ma.key,dt=he(yr).current;dt&&gr.set(yr,{width:dt.offsetWidth,height:dt.offsetHeight,left:dt.offsetLeft,top:dt.offsetTop})}),gr})}),yt=y.slice(0,Bt),st=y.slice(Wt+1),bt=[].concat(Object(Ye.a)(yt),Object(Ye.a)(st)),$t=Object(a.useState)(),Ot=Object(z.a)($t,2),Ct=Ot[0],at=Ot[1],wn=On.get(x),St=Object(a.useRef)();function Rt(){Ge.a.cancel(St.current)}Object(a.useEffect)(function(){var ae={};return wn&&(H?(Y?ae.right=wn.right:ae.left=wn.left,ae.width=wn.width):(ae.top=wn.top,ae.height=wn.height)),Rt(),St.current=Object(Ge.a)(function(){at(ae)}),Rt},[wn,H,Y]),Object(a.useEffect)(function(){sn()},[x,wn,On,H]),Object(a.useEffect)(function(){rt()},[Y,ce,x,y.map(function(ae){return ae.key}).join("_")]);var ot=!!bt.length,kn="".concat(C,"-nav-wrap"),lt,ut,jt,Pt;return H?Y?(ut=be>0,lt=be+_e<Ne):(lt=be<0,ut=-be+_e<Ne):(jt=je<0,Pt=-je+ln<ze),a.createElement("div",{ref:i,role:"tablist",className:ye()("".concat(C,"-nav"),R),style:j,onKeyDown:function(){De()}},a.createElement(or,{position:"left",extra:U,prefixCls:C}),a.createElement(xn.default,{onResize:rt},a.createElement("div",{className:ye()(kn,(m={},Object(fe.a)(m,"".concat(kn,"-ping-left"),lt),Object(fe.a)(m,"".concat(kn,"-ping-right"),ut),Object(fe.a)(m,"".concat(kn,"-ping-top"),jt),Object(fe.a)(m,"".concat(kn,"-ping-bottom"),Pt),m)),ref:k},a.createElement(xn.default,{onResize:rt},a.createElement("div",{ref:ue,className:"".concat(C,"-nav-list"),style:{transform:"translate(".concat(be,"px, ").concat(je,"px)"),transition:Mn?"none":void 0}},Lt,a.createElement(rr,{ref:Ce,prefixCls:C,locale:Q,editable:le,style:{visibility:ot?"hidden":null}}),a.createElement("div",{className:ye()("".concat(C,"-ink-bar"),Object(fe.a)({},"".concat(C,"-ink-bar-animated"),$.inkBar)),style:Ct}))))),a.createElement(Zr,Object(W.a)({},t,{ref:ee,prefixCls:C,tabs:bt,className:!ot&&Gn})),a.createElement(or,{position:"right",extra:U,prefixCls:C}))}var lr=a.forwardRef(ea);function na(t){var i=t.id,m=t.activeKey,b=t.animated,C=t.tabPosition,y=t.rtl,R=t.destroyInactiveTabPane,j=a.useContext(Mt),B=j.prefixCls,$=j.tabs,x=b.tabPane,Y=$.findIndex(function(U){return U.key===m});return a.createElement("div",{className:ye()("".concat(B,"-content-holder"))},a.createElement("div",{className:ye()("".concat(B,"-content"),"".concat(B,"-content-").concat(C),Object(fe.a)({},"".concat(B,"-content-animated"),x)),style:Y&&x?Object(fe.a)({},y?"marginRight":"marginLeft","-".concat(Y,"00%")):null},$.map(function(U){return a.cloneElement(U.node,{key:U.key,prefixCls:B,tabKey:U.key,id:i,animated:x,active:U.key===m,destroyInactiveTabPane:R})})))}function ur(t){var i=t.prefixCls,m=t.forceRender,b=t.className,C=t.style,y=t.id,R=t.active,j=t.animated,B=t.destroyInactiveTabPane,$=t.tabKey,x=t.children,Y=a.useState(m),U=Object(z.a)(Y,2),le=U[0],Q=U[1];a.useEffect(function(){R?Q(!0):B&&Q(!1)},[R,B]);var X={};return R||(j?(X.visibility="hidden",X.height=0,X.overflowY="hidden"):X.display="none"),a.createElement("div",{id:y&&"".concat(y,"-panel-").concat($),role:"tabpanel",tabIndex:R?0:-1,"aria-labelledby":y&&"".concat(y,"-tab-").concat($),"aria-hidden":!R,style:Object(_.a)(Object(_.a)({},X),C),className:ye()("".concat(i,"-tabpane"),R&&"".concat(i,"-tabpane-active"),b)},(R||le||m)&&x)}var dr=0;function ta(t){return Object(pn.a)(t).map(function(i){if(a.isValidElement(i)){var m=i.key!==void 0?String(i.key):void 0;return Object(_.a)(Object(_.a)({key:m},i.props),{},{node:i})}return null}).filter(function(i){return i})}function ra(t,i){var m,b=t.id,C=t.prefixCls,y=C===void 0?"rc-tabs":C,R=t.className,j=t.children,B=t.direction,$=t.activeKey,x=t.defaultActiveKey,Y=t.editable,U=t.animated,le=U===void 0?{inkBar:!0,tabPane:!1}:U,Q=t.tabPosition,X=Q===void 0?"top":Q,ce=t.tabBarGutter,J=t.tabBarStyle,ne=t.tabBarExtraContent,ie=t.locale,k=t.moreIcon,ue=t.moreTransitionName,ee=t.destroyInactiveTabPane,Ce=t.renderTabBar,re=t.onChange,pe=t.onTabClick,he=t.onTabScroll,se=Object(oe.a)(t,["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"]),H=ta(j),me=B==="rtl",Oe;le===!1?Oe={inkBar:!1,tabPane:!1}:le===!0?Oe={inkBar:!0,tabPane:!0}:Oe=Object(_.a)({inkBar:!0,tabPane:!1},Object(Be.a)(le)==="object"?le:{});var be=Object(a.useState)(!1),Pe=Object(z.a)(be,2),Le=Pe[0],Se=Pe[1];Object(a.useEffect)(function(){Se(Object(Cn.a)())},[]);var je=Object(nn.a)(function(){var Ae;return(Ae=H[0])===null||Ae===void 0?void 0:Ae.key},{value:$,defaultValue:x}),we=Object(z.a)(je,2),Me=we[0],Te=we[1],Ne=Object(a.useState)(function(){return H.findIndex(function(Ae){return Ae.key===Me})}),Ve=Object(z.a)(Ne,2),tn=Ve[0],Je=Ve[1];Object(a.useEffect)(function(){var Ae=H.findIndex(function(rn){return rn.key===Me});if(Ae===-1){var Xe;Ae=Math.max(0,Math.min(tn,H.length-1)),Te((Xe=H[Ae])===null||Xe===void 0?void 0:Xe.key)}Je(Ae)},[H.map(function(Ae){return Ae.key}).join("_"),Me,tn]);var ze=Object(nn.a)(null,{value:b}),ke=Object(z.a)(ze,2),$e=ke[0],In=ke[1],on=X;Le&&!["left","right"].includes(X)&&(on="top"),Object(a.useEffect)(function(){b||(In("rc-tabs-".concat(dr)),dr+=1)},[]);function qe(Ae,Xe){pe==null||pe(Ae,Xe),Te(Ae),re==null||re(Ae)}var cn={id:$e,activeKey:Me,animated:Oe,tabPosition:on,rtl:me,mobile:Le},Sn,Rn=Object(_.a)(Object(_.a)({},cn),{},{editable:Y,locale:ie,moreIcon:k,moreTransitionName:ue,tabBarGutter:ce,onTabClick:qe,onTabScroll:he,extra:ne,style:J,panes:j});return Ce?Sn=Ce(Rn,lr):Sn=a.createElement(lr,Rn),a.createElement(Mt.Provider,{value:{tabs:H,prefixCls:y}},a.createElement("div",Object(W.a)({ref:i,id:b,className:ye()(y,"".concat(y,"-").concat(on),(m={},Object(fe.a)(m,"".concat(y,"-mobile"),Le),Object(fe.a)(m,"".concat(y,"-editable"),Y),Object(fe.a)(m,"".concat(y,"-rtl"),me),m),R)},se),Sn,a.createElement(na,Object(W.a)({destroyInactiveTabPane:ee},cn,{animated:Oe}))))}var cr=a.forwardRef(ra);cr.TabPane=ur;var aa=cr,ia=aa,wt=e("MZF8"),bn=e("dEAq"),sa=e("ZpkN"),ba=e("TIsu");function Ft(t,i){var m,b=(m=t.match(/\.(\w+)$/))===null||m===void 0?void 0:m[1];return b||(b=i.tsx?"tsx":"jsx"),b}var oa=t=>{var i,m,b,C=Object(a.useRef)(),y=Object(a.useContext)(bn.context),R=y.locale,j=Object(bn.useLocaleProps)(R,t),B=Object(bn.useDemoUrl)(j.identifier),$=j.demoUrl||B,x=(wt.a===null||wt.a===void 0?void 0:wt.a.location.hash)==="#".concat(j.identifier),Y=Object.keys(j.sources).length===1,U=Object(bn.useCodeSandbox)((i=j.hideActions)!==null&&i!==void 0&&i.includes("CSB")?null:j),le=Object(bn.useRiddle)((m=j.hideActions)!==null&&m!==void 0&&m.includes("RIDDLE")?null:j),Q=Object(bn.useMotions)(j.motions||[],C.current),X=Object(V.default)(Q,2),ce=X[0],J=X[1],ne=Object(bn.useCopy)(),ie=Object(V.default)(ne,2),k=ie[0],ue=ie[1],ee=Object(a.useState)("_"),Ce=Object(V.default)(ee,2),re=Ce[0],pe=Ce[1],he=Object(a.useState)(Ft(re,j.sources[re])),se=Object(V.default)(he,2),H=se[0],me=se[1],Oe=Object(a.useState)(Boolean(j.defaultShowCode)),be=Object(V.default)(Oe,2),Pe=be[0],Le=be[1],Se=Object(a.useState)(Math.random()),je=Object(V.default)(Se,2),we=je[0],Me=je[1],Te=j.sources[re][H]||j.sources[re].content,Ne=Object(bn.useTSPlaygroundUrl)(R,Te),Ve=Object(a.useRef)(),tn=Object(bn.usePrefersColor)(),Je=Object(V.default)(tn,1),ze=Je[0];Object(a.useEffect)(()=>{Me(Math.random())},[ze]);function ke($e){pe($e),me(Ft($e,j.sources[$e]))}return S.a.createElement("div",{style:j.style,className:[j.className,"__dumi-default-previewer",x?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:j.identifier,"data-debug":j.debug||void 0,"data-iframe":j.iframe||void 0},j.iframe&&S.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),S.a.createElement("div",{ref:C,className:"__dumi-default-previewer-demo",style:{transform:j.transform?"translate(0, 0)":void 0,padding:j.compact||j.iframe&&j.compact!==!1?"0":void 0,background:j.background}},j.iframe?S.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(j.iframe).replace(/(\d)$/,"$1px")},key:we,src:$,ref:Ve}):j.children),S.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":j.title},j.title&&S.a.createElement(bn.AnchorLink,{to:"#".concat(j.identifier)},j.title),j.description&&S.a.createElement("div",{dangerouslySetInnerHTML:{__html:j.description}})),S.a.createElement("div",{className:"__dumi-default-previewer-actions"},U&&S.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:U}),le&&S.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:le}),j.motions&&S.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:J,onClick:()=>ce()}),j.iframe&&S.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:()=>Me(Math.random())}),!((b=j.hideActions)!==null&&b!==void 0&&b.includes("EXTERNAL"))&&S.a.createElement(bn.Link,{target:"_blank",to:$},S.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),S.a.createElement("span",null),S.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":ue,onClick:()=>k(Te)}),H==="tsx"&&Pe&&S.a.createElement(bn.Link,{target:"_blank",to:Ne},S.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),S.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(Pe?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:()=>Le(!Pe)})),Pe&&S.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!Y&&S.a.createElement(ia,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xB7\xB7\xB7",defaultActiveKey:re,onChange:ke},Object.keys(j.sources).map($e=>S.a.createElement(ur,{tab:$e==="_"?"index.".concat(Ft($e,j.sources[$e])):$e,key:$e}))),S.a.createElement("div",{className:"__dumi-default-previewer-source"},S.a.createElement(sa.a,{code:Te,lang:H,showCopy:!1}))))},Oa=yn.default=oa},"80pN":function(Fn,yn,e){"use strict";(function(V){/** @license React v16.14.0
* react-dom-test-utils.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var a=e("MgzW"),S=e("q1tI"),W=e("i8i4"),fe=e("QCnb");function z(f){for(var M="https://reactjs.org/docs/error-decoder.html?invariant="+f,F=1;F<arguments.length;F++)M+="&args[]="+encodeURIComponent(arguments[F]);return"Minified React error #"+f+"; visit "+M+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Be=S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;Be.hasOwnProperty("ReactCurrentDispatcher")||(Be.ReactCurrentDispatcher={current:null}),Be.hasOwnProperty("ReactCurrentBatchConfig")||(Be.ReactCurrentBatchConfig={suspense:null});function oe(f){var M=f,F=f;if(f.alternate)for(;M.return;)M=M.return;else{f=M;do M=f,(M.effectTag&1026)!=0&&(F=M.return),f=M.return;while(f)}return M.tag===3?F:null}function _(f){if(oe(f)!==f)throw Error(z(188))}function xe(f){var M=f.alternate;if(!M){if(M=oe(f),M===null)throw Error(z(188));return M!==f?null:f}for(var F=f,ve=M;;){var te=F.return;if(te===null)break;var Ie=te.alternate;if(Ie===null){if(ve=te.return,ve!==null){F=ve;continue}break}if(te.child===Ie.child){for(Ie=te.child;Ie;){if(Ie===F)return _(te),f;if(Ie===ve)return _(te),M;Ie=Ie.sibling}throw Error(z(188))}if(F.return!==ve.return)F=te,ve=Ie;else{for(var Ue=!1,Qe=te.child;Qe;){if(Qe===F){Ue=!0,F=te,ve=Ie;break}if(Qe===ve){Ue=!0,ve=te,F=Ie;break}Qe=Qe.sibling}if(!Ue){for(Qe=Ie.child;Qe;){if(Qe===F){Ue=!0,F=Ie,ve=te;break}if(Qe===ve){Ue=!0,ve=Ie,F=te;break}Qe=Qe.sibling}if(!Ue)throw Error(z(189))}}if(F.alternate!==ve)throw Error(z(190))}if(F.tag!==3)throw Error(z(188));return F.stateNode.current===F?f:M}function ye(){return!0}function pn(){return!1}function Cn(f,M,F,ve){this.dispatchConfig=f,this._targetInst=M,this.nativeEvent=F,f=this.constructor.Interface;for(var te in f)f.hasOwnProperty(te)&&((M=f[te])?this[te]=M(F):te==="target"?this.target=ve:this[te]=F[te]);return this.isDefaultPrevented=(F.defaultPrevented!=null?F.defaultPrevented:F.returnValue===!1)?ye:pn,this.isPropagationStopped=pn,this}a(Cn.prototype,{preventDefault:function(){this.defaultPrevented=!0;var f=this.nativeEvent;f&&(f.preventDefault?f.preventDefault():typeof f.returnValue!="unknown"&&(f.returnValue=!1),this.isDefaultPrevented=ye)},stopPropagation:function(){var f=this.nativeEvent;f&&(f.stopPropagation?f.stopPropagation():typeof f.cancelBubble!="unknown"&&(f.cancelBubble=!0),this.isPropagationStopped=ye)},persist:function(){this.isPersistent=ye},isPersistent:pn,destructor:function(){var f=this.constructor.Interface,M;for(M in f)this[M]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=pn,this._dispatchInstances=this._dispatchListeners=null}}),Cn.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(f){return f.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null},Cn.extend=function(f){function M(){}function F(){return ve.apply(this,arguments)}var ve=this;M.prototype=ve.prototype;var te=new M;return a(te,F.prototype),F.prototype=te,F.prototype.constructor=F,F.Interface=a({},ve.Interface,f),F.extend=ve.extend,Ge(F),F},Ge(Cn);function nn(f,M,F,ve){if(this.eventPool.length){var te=this.eventPool.pop();return this.call(te,f,M,F,ve),te}return new this(f,M,F,ve)}function Ye(f){if(!(f instanceof this))throw Error(z(279));f.destructor(),10>this.eventPool.length&&this.eventPool.push(f)}function Ge(f){f.eventPool=[],f.getPooled=nn,f.release=Ye}var xn=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined");function Bn(f,M){var F={};return F[f.toLowerCase()]=M.toLowerCase(),F["Webkit"+f]="webkit"+M,F["Moz"+f]="moz"+M,F}var Dn={animationend:Bn("Animation","AnimationEnd"),animationiteration:Bn("Animation","AnimationIteration"),animationstart:Bn("Animation","AnimationStart"),transitionend:Bn("Transition","TransitionEnd")},We={},_n={};xn&&(_n=document.createElement("div").style,"AnimationEvent"in window||(delete Dn.animationend.animation,delete Dn.animationiteration.animation,delete Dn.animationstart.animation),"TransitionEvent"in window||delete Dn.transitionend.transition);function Vn(f){if(We[f])return We[f];if(!Dn[f])return f;var M=Dn[f],F;for(F in M)if(M.hasOwnProperty(F)&&F in _n)return We[f]=M[F];return f}var et=Vn("animationend"),ct=Vn("animationiteration"),E=Vn("animationstart"),I=Vn("transitionend"),D=null;function d(f){if(D===null)try{var M=("require"+Math.random()).slice(0,7);D=(V&&V[M])("timers").setImmediate}catch(F){D=function(ve){var te=new MessageChannel;te.port1.onmessage=ve,te.port2.postMessage(void 0)}}return D(f)}var o=W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,p=o[11],g=o[12],O=W.unstable_batchedUpdates,r=Be.IsSomeRendererActing,l=typeof fe.unstable_flushAllWithoutAsserting=="function",s=fe.unstable_flushAllWithoutAsserting||function(){for(var f=!1;p();)f=!0;return f};function w(f){try{s(),d(function(){s()?w(f):f()})}catch(M){f(M)}}var T=0,P=!1,c=W.findDOMNode,A=W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,h=A[0],n=A[4],v=A[5],u=A[6],N=A[7],K=A[8],L=A[9],Z=A[10];function G(){}function de(f,M){if(!f)return[];if(f=xe(f),!f)return[];for(var F=f,ve=[];;){if(F.tag===5||F.tag===6||F.tag===1||F.tag===0){var te=F.stateNode;M(te)&&ve.push(te)}if(F.child)F.child.return=F,F=F.child;else{if(F===f)return ve;for(;!F.sibling;){if(!F.return||F.return===f)return ve;F=F.return}F.sibling.return=F.return,F=F.sibling}}}function Ee(f,M){if(f&&!f._reactInternalFiber){var F=""+f;throw f=Array.isArray(f)?"an array":f&&f.nodeType===1&&f.tagName?"a DOM node":F==="[object Object]"?"object with keys {"+Object.keys(f).join(", ")+"}":F,Error(z(286,M,f))}}var Ke={renderIntoDocument:function(f){var M=document.createElement("div");return W.render(f,M)},isElement:function(f){return S.isValidElement(f)},isElementOfType:function(f,M){return S.isValidElement(f)&&f.type===M},isDOMComponent:function(f){return!(!f||f.nodeType!==1||!f.tagName)},isDOMComponentElement:function(f){return!!(f&&S.isValidElement(f)&&f.tagName)},isCompositeComponent:function(f){return Ke.isDOMComponent(f)?!1:f!=null&&typeof f.render=="function"&&typeof f.setState=="function"},isCompositeComponentWithType:function(f,M){return Ke.isCompositeComponent(f)?f._reactInternalFiber.type===M:!1},findAllInRenderedTree:function(f,M){return Ee(f,"findAllInRenderedTree"),f?de(f._reactInternalFiber,M):[]},scryRenderedDOMComponentsWithClass:function(f,M){return Ee(f,"scryRenderedDOMComponentsWithClass"),Ke.findAllInRenderedTree(f,function(F){if(Ke.isDOMComponent(F)){var ve=F.className;typeof ve!="string"&&(ve=F.getAttribute("class")||"");var te=ve.split(/\s+/);if(!Array.isArray(M)){if(M===void 0)throw Error(z(11));M=M.split(/\s+/)}return M.every(function(Ie){return te.indexOf(Ie)!==-1})}return!1})},findRenderedDOMComponentWithClass:function(f,M){if(Ee(f,"findRenderedDOMComponentWithClass"),f=Ke.scryRenderedDOMComponentsWithClass(f,M),f.length!==1)throw Error("Did not find exactly one match (found: "+f.length+") for class:"+M);return f[0]},scryRenderedDOMComponentsWithTag:function(f,M){return Ee(f,"scryRenderedDOMComponentsWithTag"),Ke.findAllInRenderedTree(f,function(F){return Ke.isDOMComponent(F)&&F.tagName.toUpperCase()===M.toUpperCase()})},findRenderedDOMComponentWithTag:function(f,M){if(Ee(f,"findRenderedDOMComponentWithTag"),f=Ke.scryRenderedDOMComponentsWithTag(f,M),f.length!==1)throw Error("Did not find exactly one match (found: "+f.length+") for tag:"+M);return f[0]},scryRenderedComponentsWithType:function(f,M){return Ee(f,"scryRenderedComponentsWithType"),Ke.findAllInRenderedTree(f,function(F){return Ke.isCompositeComponentWithType(F,M)})},findRenderedComponentWithType:function(f,M){if(Ee(f,"findRenderedComponentWithType"),f=Ke.scryRenderedComponentsWithType(f,M),f.length!==1)throw Error("Did not find exactly one match (found: "+f.length+") for componentType:"+M);return f[0]},mockComponent:function(f,M){return M=M||f.mockTagName||"div",f.prototype.render.mockImplementation(function(){return S.createElement(M,null,this.props.children)}),this},nativeTouchData:function(f,M){return{touches:[{pageX:f,pageY:M}]}},Simulate:null,SimulateNative:{},act:function(f){function M(){T--,r.current=F,g.current=ve}P===!1&&(P=!0,console.error("act(...) is not supported in production builds of React, and might not behave as expected.")),T++;var F=r.current,ve=g.current;r.current=!0,g.current=!0;try{var te=O(f)}catch(Ie){throw M(),Ie}if(te!==null&&typeof te=="object"&&typeof te.then=="function")return{then:function(Ie,Ue){te.then(function(){1<T||l===!0&&F===!0?(M(),Ie()):w(function(Qe){M(),Qe?Ue(Qe):Ie()})},function(Qe){M(),Ue(Qe)})}};try{T!==1||l!==!1&&F!==!1||s(),M()}catch(Ie){throw M(),Ie}return{then:function(Ie){Ie()}}}};function hn(f){return function(M,F){if(S.isValidElement(M))throw Error(z(228));if(Ke.isCompositeComponent(M))throw Error(z(229));var ve=n[f],te=new G;te.target=M,te.type=f.toLowerCase();var Ie=h(M),Ue=new Cn(ve,Ie,te,M);Ue.persist(),a(Ue,F),ve.phasedRegistrationNames?v(Ue):u(Ue),W.unstable_batchedUpdates(function(){N(M),Z(Ue)}),K()}}Ke.Simulate={};for(var En in n)Ke.Simulate[En]=hn(En);function Wn(f,M){return function(F,ve){var te=new G(f);a(te,ve),Ke.isDOMComponent(F)?(F=c(F),te.target=F,L(M,1,document,te)):F.tagName&&(te.target=F,L(M,1,document,te))}}[["abort","abort"],[et,"animationEnd"],[ct,"animationIteration"],[E,"animationStart"],["blur","blur"],["canplaythrough","canPlayThrough"],["canplay","canPlay"],["cancel","cancel"],["change","change"],["click","click"],["close","close"],["compositionend","compositionEnd"],["compositionstart","compositionStart"],["compositionupdate","compositionUpdate"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["dragstart","dragStart"],["drag","drag"],["drop","drop"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],["ended","ended"],["error","error"],["focus","focus"],["input","input"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["loadstart","loadStart"],["loadstart","loadStart"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["mousedown","mouseDown"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["playing","playing"],["progress","progress"],["ratechange","rateChange"],["scroll","scroll"],["seeked","seeked"],["seeking","seeking"],["selectionchange","selectionChange"],["stalled","stalled"],["suspend","suspend"],["textInput","textInput"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchmove","touchMove"],["touchstart","touchStart"],[I,"transitionEnd"],["volumechange","volumeChange"],["waiting","waiting"],["wheel","wheel"]].forEach(function(f){var M=f[1];Ke.SimulateNative[M]=Wn(M,f[0])}),V.exports=Ke.default||Ke}).call(this,e("hOG+")(Fn))},F4QJ:function(Fn,yn,e){"use strict";Object.defineProperty(yn,"__esModule",{value:!0}),yn.default=void 0;function V(){var oe=S(e("q1tI"));return V=function(){return oe},oe}function a(){var oe=e("dEAq");return a=function(){return oe},oe}function S(oe){return oe&&oe.__esModule?oe:{default:oe}}function W(oe,_){var xe=Object.keys(oe);if(Object.getOwnPropertySymbols){var ye=Object.getOwnPropertySymbols(oe);_&&(ye=ye.filter(function(pn){return Object.getOwnPropertyDescriptor(oe,pn).enumerable})),xe.push.apply(xe,ye)}return xe}function fe(oe){for(var _=1;_<arguments.length;_++){var xe=arguments[_]!=null?arguments[_]:{};_%2?W(Object(xe),!0).forEach(function(ye){z(oe,ye,xe[ye])}):Object.getOwnPropertyDescriptors?Object.defineProperties(oe,Object.getOwnPropertyDescriptors(xe)):W(Object(xe)).forEach(function(ye){Object.defineProperty(oe,ye,Object.getOwnPropertyDescriptor(xe,ye))})}return oe}function z(oe,_,xe){return _ in oe?Object.defineProperty(oe,_,{value:xe,enumerable:!0,configurable:!0,writable:!0}):oe[_]=xe,oe}var Be=function(_,xe){var ye=[],pn=_.match.params.uuid,Cn=_.location.query.wrapper===void 0,nn=xe[pn];if(nn){var Ye=fe(fe({},nn.previewerProps),{},{hideActions:(nn.previewerProps.hideActions||[]).concat(["EXTERNAL"])});_.location.query.capture!==void 0&&(Ye.motions=(Ye.motions||[]).slice(),Ye.motions.unshift("autoplay"),Ye.motions.every(function(Ge){return!Ge.startsWith("capture")})&&Ye.motions.push("capture:[id|=root]")),Cn?ye=[V().default.createElement(function(){return(0,a().useMotions)(Ye.motions||[],document.documentElement),V().default.createElement("div",{},V().default.createElement(nn.component))})]:ye=[Ye,V().default.createElement(nn.component)]}return ye};yn.default=Be},JjdP:function(Fn,yn,e){"use strict";e.r(yn);var V=e("9og8"),a=e("WmNS"),S=e.n(a),W=e("LtsZ"),fe=`import React, { useRef } from 'react';
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
      'ui:width': '25%',
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
        const rangeValidator = {
          validator: (rule, value) => {
            if (!value) return true;
            if (Array.isArray(value)) {
              // range\u7EC4\u4EF6\u70B9\u51FBclear\uFF0C\u4F1A\u53D8\u6210 ['','']
              if (
                typeof value[0] === 'string' &&
                typeof value[1] === 'string'
              ) {
                return true;
              }
              return false;
            }
            return false;
          },
          type: 'array',
          message: '\${title}\u5FC5\u586B',
        };
        singleResult = rangeValidator;
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
  if (isObjType(schema)) {
    if (_formData === undefined || typeof _formData !== 'object') {
      _formData = {};
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
    result = clone(_formData);
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
};`,Be=`import React from 'react';
import FormRender, { useForm } from 'form-render';

const Demo = props => {
  const form = useForm();
  return <FormRender form={form} {...props} />;
};

export default Demo;`,oe=`export const delay = ms => new Promise(res => setTimeout(res, ms));

export const fakeApi = (url, data) => {
  console.group('request:', url);
  console.log('params:', data);
  console.groupEnd();
  return delay(500);
};`,_=`import React from 'react';
import FormRender, { useForm } from 'form-render';

const Demo = ({ schema }) => {
  const form = useForm();
  return (
    <div>
      <FormRender form={form} schema={schema} />
    </div>
  );
};

export default Demo;`,xe=`export const basic = {
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
};`,ye=`import React, { Component } from 'react';
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

export default Root;`,pn=`import React, { useState, useEffect } from 'react';
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

export default Demo;`,Cn=`{
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
}`,nn=`import { Select } from 'antd';
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

export default SearchInput;`,Ye=`import React from 'react';
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

export default Demo;`,Ge=`import { monaco } from 'react-monaco-editor'

const valueMap = (range) => {
  return {
    widget: [
      {
        label: 'input',
        insertText: 'input',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u8F93\u5165\u6846'
      },
      {
        label: 'textarea',
        insertText: 'textarea',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u591A\u884C\u8F93\u5165\u6846'
      },
      {
        label: 'date',
        insertText: 'date',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u65E5\u671F\u7EC4\u4EF6'
      },
      {
        label: 'time',
        insertText: 'time',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u65F6\u95F4\u7EC4\u4EF6'
      },
      {
        label: 'dateRange',
        insertText: 'dateRange',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u65E5\u671F\u8303\u56F4'
      },
      {
        label: 'timeRange',
        insertText: 'timeRange',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u65F6\u95F4\u8303\u56F4'
      },
      {
        label: 'checkbox',
        insertText: 'checkbox',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u662F\u5426\u9009\u62E9'
      },
      {
        label: 'select',
        insertText: 'select',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u4E0B\u62C9\u5355\u9009'
      },
      {
        label: 'radio',
        insertText: 'radio',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u70B9\u51FB\u5355\u9009'
      },
      {
        label: 'multiSelect',
        insertText: 'multiSelect',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u4E0B\u62C9\u591A\u9009\u6846'
      },
      {
        label: 'checkboxes',
        insertText: 'checkboxes',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u70B9\u51FB\u591A\u9009\u6846'
      },
      {
        label: 'cascader',
        insertText: 'cascader',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u7EA7\u8054\u9009\u62E9'
      },
      {
        label: 'treeSelect',
        insertText: 'treeSelect',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u6811\u5F62\u9009\u62E9'
      },
      {
        label: 'color',
        insertText: 'color',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u989C\u8272\u9009\u62E9'
      },
      {
        label: 'upload',
        insertText: 'upload',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u4E0A\u4F20\u7EC4\u4EF6'
      },
      {
        label: 'html',
        insertText: 'html',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u6587\u672C\uFF08\u53EA\u8BFB\u5C55\u793A\uFF09'
      },
      {
        label: 'slider',
        insertText: 'slider',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u6ED1\u52A8\u8F93\u5165\u6761'
      },
      {
        label: 'rate',
        insertText: 'rate',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u4E94\u661F\u8BC4\u5206'
      },
      {
        label: 'map',
        insertText: 'map',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u5BF9\u8C61'
      },
      {
        label: 'list0',
        insertText: 'list0',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u5217\u8868(\u590D\u6742\u7ED3\u6784\uFF0C\u4F46item\u6570\u91CF\u4E0D\u5927)'
      },
      {
        label: 'list1',
        insertText: 'list1',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u5217\u8868(\u6BCF\u4E2Aitem\u67091-2\u6761\u6570\u636E\uFF0C\u6CA1\u6709\u590D\u6742\u7ED3\u6784)'
      },
      {
        label: 'list2',
        insertText: 'list2',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u5217\u8868(\u6BCF\u4E2Aitem\u67093-5\u6761\u6570\u636E\uFF0C\u6CA1\u6709\u590D\u6742\u7ED3\u6784)'
      },
      {
        label: 'list3',
        insertText: 'list3',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u5217\u8868(\u6BCF\u4E2Aitem\u6570\u636E\u91CF\u5927\uFF0C\u6216\u8005\u7ED3\u6784\u590D\u6742)'
      },
    ],
    type: [
      {
        label: 'string',
        insertText: 'string',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'string'
      },
      {
        label: 'number',
        insertText: 'number',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'number'
      },
      {
        label: 'boolean',
        insertText: 'boolean',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'boolean'
      },
      {
        label: 'array',
        insertText: 'array',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'array'
      },
      {
        label: 'object',
        insertText: 'object',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'object'
      },
      {
        label: 'range',
        insertText: 'range',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'range'
      },
      {
        label: 'html',
        insertText: 'html',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'html'
      },
    ],
    format: [
      {
        label: 'image',
        insertText: 'image',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'image'
      },
      {
        label: 'textarea',
        insertText: 'textarea',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'textarea'
      },
      {
        label: 'color',
        insertText: 'color',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'color'
      },
      {
        label: 'email',
        insertText: 'email',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'email'
      },
      {
        label: 'url',
        insertText: 'url',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'url'
      },
      {
        label: 'dateTime',
        insertText: 'dateTime',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'dateTime'
      },
      {
        label: 'date',
        insertText: 'date',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'date'
      },
      {
        label: 'time',
        insertText: 'time',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'time'
      },
      {
        label: 'upload',
        insertText: 'upload',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: 'upload'
      },
    ],
    displayType: [
      {
        label: 'row',
        insertText: 'row',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u5E76\u6392\u5C55\u793A'
      },
      {
        label: 'column',
        insertText: 'column',
        kind: monaco.languages.CompletionItemKind['Keyword'],
        range,
        detail: '\u4E24\u6392\u5C55\u793A'
      },
    ]
  }
}

const keySuggestions =(range) => [
  {
    label: 'title',
    insertText: 'title',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u8868\u5355\u7684\u6807\u9898\u4FE1\u606F'
  },
  {
    label: 'description',
    insertText: 'description',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u8868\u5355\u7684\u63CF\u8FF0\u4FE1\u606F'
  },
  {
    label: 'type',
    insertText: 'type',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u7EC4\u4EF6\u503C\u7684\u6570\u636E\u7C7B\u578B'
  },
  {
    label: 'format',
    insertText: 'format',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u8F93\u5165\u6846\u7684\u683C\u5F0F'
  },
  {
    label: 'default',
    insertText: 'default',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u7EC4\u4EF6\u7684\u9ED8\u8BA4\u503C'
  },
  {
    label: 'required',
    insertText: 'required',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u662F\u5426\u5FC5\u586B'
  },
  {
    label: 'placeholder',
    insertText: 'placeholder',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: 'placeholder'
  },
  {
    label: 'bind',
    insertText: 'bind',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: 'bind'
  },
  {
    label: 'min',
    insertText: 'min',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u6700\u5C0F\u503C'
  },
  {
    label: 'max',
    insertText: 'max',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u6700\u5927\u503C'
  },
  {
    label: 'disabled',
    insertText: 'disabled',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u662F\u5426\u7981\u7528'
  },
  {
    label: 'readOnly',
    insertText: 'readOnly',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u662F\u5426\u53EA\u8BFB'
  },
  {
    label: 'hidden',
    insertText: 'hidden',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u662F\u5426\u9690\u85CF'
  },
  {
    label: 'displayType',
    insertText: 'displayType',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u8868\u5355\u5E03\u5C40'
  },
  {
    label: 'width',
    insertText: 'width',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u5355\u4E2A\u5143\u7D20\u7684\u5C55\u793A\u5BBD\u5EA6'
  },
  {
    label: 'labelWidth',
    insertText: 'labelWidth',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: 'label \u7684\u5BBD\u5EA6'
  },
  {
    label: 'className',
    insertText: 'className',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: 'className'
  },
  {
    label: 'widget',
    insertText: 'widget',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u6307\u5B9A\u4F7F\u7528\u54EA\u4E2A\u7EC4\u4EF6\u6E32\u67D3'
  },
  {
    label: 'readOnlyWidget',
    insertText: 'readOnlyWidget',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u6307\u5B9A\u53EA\u8BFB\u6A21\u5F0F\u4E0B\u7528\u54EA\u4E2A\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u6E32\u67D3'
  },
  {
    label: 'extra',
    insertText: 'extra',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u5C55\u793A\u66F4\u591A\u8BF4\u660E\u4FE1\u606F'
  },
  {
    label: 'properties',
    insertText: 'properties',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u5305\u88F9\u5BF9\u8C61\u7684\u5B50\u5C5E\u6027(\u53EA\u5728\u5BF9\u8C61\u7EC4\u4EF6\u4E2D\u4F7F\u7528)'
  },
  {
    label: 'items',
    insertText: 'items',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u63CF\u8FF0\u5217\u8868\u4E2D\u6BCF\u4E2Aitem\u7684\u7ED3\u6784(\u53EA\u5728\u5217\u8868\u4E2D\u4F7F\u7528)'
  },
  {
    label: 'enum',
    insertText: 'enum',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u63CF\u8FF0\u679A\u4E3E\u503C\u7684\u503C'
  },
  {
    label: 'enumNames',
    insertText: 'enumNames',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u63CF\u8FF0\u679A\u4E3E\u503C\u7684\u6587\u6848'
  },
  {
    label: 'rules',
    insertText: 'rules',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u6821\u9A8Crules'
  },
  {
    label: 'props',
    insertText: 'enumNames',
    kind: monaco.languages.CompletionItemKind['Keyword'],
    range,
    detail: '\u989D\u5916\u7EC4\u4EF6\u5C5E\u6027'
  },
]

export { valueMap, keySuggestions }`,xn=`.markdown p {
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
import { Table, Search, TableProvider, useTable } from 'table-render';
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
      'ui:width': '25%',
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
  return (
    <TableProvider>
      <TableBody />
    </TableProvider>
  );
};

const TableBody = () => {
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

export default Demo;`,Dn=`import React, { useState, useRef } from 'react';
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

export default Demo;`,We=`import React, { useState, useRef } from 'react';
import Generator, { fromFormily, toFormily } from 'fr-generator';
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

// const b = {
//   schema: {
//     type: 'object',
//     properties: {
//       array: {
//         type: 'array',
//         title: 'Name',
//         items: {
//           type: 'object',
//           properties: {
//             aa: {
//               type: 'string',
//               title: '\u63A7\u5236\u76F8\u90BB\u5B57\u6BB5\u663E\u793A\u9690\u85CF',
//               enum: [true, false],
//               'ui:widget': 'input',
//               enumNames: ['\u663E\u793A', '\u9690\u85CF'],
//             },
//             bb: { type: 'string', title: 'BB', 'ui:widget': 'input' },
//           },
//         },
//       },
//       cc: {
//         type: 'string',
//         title: 'CC',
//         'ui:widget': 'input',
//         'ui:options': { min: 1 },
//       },
//     },
//   },
// };

// console.log(toFormily(b));

export default Demo;`,_n=`import React from 'react';
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

export default Demo;`,Vn=`import React, { useState, useRef } from 'react';
import { useHistory } from 'umi';
import Generator, { toFormily, fromFormily } from 'fr-generator';
import './index.less';

const Demo = () => {
  const ref = useRef();
  const { location, replace } = useHistory();
  const [isFormily, setIsFormily] = useState(location.query.type === 'formily');

  const goToFrPlayground = () => {
    ref.current.copyValue();
    window.open('/playground');
  };

  const switchMode = () => {
    if (isFormily) {
      setIsFormily(false);
      replace('/tools/generator/playground');
    } else {
      setIsFormily(true);
      replace('/tools/generator/playground?type=formily');
    }
  };

  return (
    <div className="fr-generator-playground" style={{ height: '80vh' }}>
      <Generator
        ref={ref}
        transformer={isFormily && { to: toFormily, from: fromFormily }}
        extraButtons={[
          { text: '\u53BBplayground\u9A8C\u8BC1', onClick: goToFrPlayground },
          {
            text: 'Formily',
            shape: 'round',
            type: isFormily && 'primary',
            onClick: switchMode,
          },
        ]}
        onChange={data => console.log('data:change', data)}
        onSchemaChange={schema => console.log('schema:change', schema)}
      />
    </div>
  );
};

export default Demo;`,et=`.fr-generator-playground {
  margin: 0 -24px;

  .hide-demo {
    display: none;
  }
}`,ct=yn.default={"guide-card":{component:Object(W.dynamic)({loader:function(){var E=Object(V.a)(S.a.mark(function D(){return S.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(27)]).then(e.bind(null,"oLxE"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:fe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"card-render":{version:"0.1.2"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"0.x"}},identifier:"guide-card"}},"chart-render-demo":{component:Object(W.dynamic)({loader:function(){var E=Object(V.a)(S.a.mark(function D(){var d,o,p,g,O,r,l;return S.a.wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return r=function(P,c){if(!c&&P&&P.__esModule)return P;if(P===null||typeof P!="object"&&typeof P!="function")return{default:P};var A=O(c);if(A&&A.has(P))return A.get(P);var h={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in P)if(v!=="default"&&Object.prototype.hasOwnProperty.call(P,v)){var u=n?Object.getOwnPropertyDescriptor(P,v):null;u&&(u.get||u.set)?Object.defineProperty(h,v,u):h[v]=P[v]}return h.default=P,A&&A.set(P,h),h},O=function(P){if(typeof WeakMap!="function")return null;var c=new WeakMap,A=new WeakMap;return(O=function(n){return n?A:c})(P)},d=e("K+nK"),w.t0=d,w.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return w.t1=w.sent,o=(0,w.t0)(w.t1),w.t2=r,w.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return w.t3=w.sent,p=(0,w.t2)(w.t3),w.next=15,Promise.all([e.e(0),e.e(2),e.e(7),e.e(8),e.e(9)]).then(e.bind(null,"36SN"));case 15:return g=w.sent,l=function(){var P=(0,p.useState)("Line"),c=(0,o.default)(P,2),A=c[0],h=c[1],n={Line:g.Line,Column:g.Column,PivotTable:g.PivotTable}[A];return p.default.createElement("div",null,p.default.createElement("div",{style:{marginBottom:10}},p.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return h("Line")}},"\u6298\u7EBF\u56FE"),p.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return h("Column")}},"\u67F1\u72B6\u56FE"),p.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return h("PivotTable")}},"\u4EA4\u53C9\u8868")),p.default.createElement(n,{meta:[{id:"date",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF",isDim:!1},{id:"uv",name:"\u8BBF\u5BA2\u6570",isDim:!1}],data:[{date:"20200101",pv:100,uv:50},{date:"20200102",pv:120,uv:60},{date:"20200103",pv:140,uv:70},{date:"20200104",pv:160,uv:80}]}))},w.abrupt("return",l);case 18:case"end":return w.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"chart-render-demo"}},"column-demo":{component:Object(W.dynamic)({loader:function(){var E=Object(V.a)(S.a.mark(function D(){var d,o,p,g;return S.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,o=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(7),e.e(8),e.e(9)]).then(e.bind(null,"36SN"));case 8:return p=r.sent,g=function(){return o.default.createElement(p.Column,{meta:[{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{pv:50,uv:20}]})},r.abrupt("return",g);case 11:case"end":return r.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[{ pv: 50, uv: 20 }]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo"}},"column-demo-1":{component:Object(W.dynamic)({loader:function(){var E=Object(V.a)(S.a.mark(function D(){var d,o,p,g;return S.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,o=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(7),e.e(8),e.e(9)]).then(e.bind(null,"36SN"));case 8:return p=r.sent,g=function(){return o.default.createElement(p.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},r.abrupt("return",g);case 11:case"end":return r.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-1"}},"column-demo-2":{component:Object(W.dynamic)({loader:function(){var E=Object(V.a)(S.a.mark(function D(){var d,o,p,g;return S.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,o=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(7),e.e(8),e.e(9)]).then(e.bind(null,"36SN"));case 8:return p=r.sent,g=function(){return o.default.createElement(p.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},r.abrupt("return",g);case 11:case"end":return r.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-2"}},"column-demo-3":{component:Object(W.dynamic)({loader:function(){var E=Object(V.a)(S.a.mark(function D(){var d,o,p,g;return S.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,o=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(7),e.e(8),e.e(9)]).then(e.bind(null,"36SN"));case 8:return p=r.sent,g=function(){return o.default.createElement(p.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},r.abrupt("return",g);case 11:case"end":return r.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-3"}},"column-demo-4":{component:Object(W.dynamic)({loader:function(){var E=Object(V.a)(S.a.mark(function D(){var d,o,p,g;return S.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,o=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(7),e.e(8),e.e(9)]).then(e.bind(null,"36SN"));case 8:return p=r.sent,g=function(){return o.default.createElement(p.Column,{inverted:!0,label:{position:"middle",layout:[{type:"interval-adjust-position"},{type:"interval-hide-overlap"},{type:"adjust-color"}]},meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},r.abrupt("return",g);case 11:case"end":return r.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-4"}},"line-demo":{component:Object(W.dynamic)({loader:function(){var E=Object(V.a)(S.a.mark(function D(){var d,o,p,g;return S.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,o=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(7),e.e(8),e.e(9)]).then(e.bind(null,"36SN"));case 8:return p=r.sent,g=function(){return o.default.createElement(p.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},r.abrupt("return",g);case 11:case"end":return r.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo"}},"line-demo-1":{component:Object(W.dynamic)({loader:function(){var E=Object(V.a)(S.a.mark(function D(){var d,o,p,g;return S.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,o=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(7),e.e(8),e.e(9)]).then(e.bind(null,"36SN"));case 8:return p=r.sent,g=function(){return o.default.createElement(p.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},r.abrupt("return",g);case 11:case"end":return r.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-1"}},"line-demo-2":{component:Object(W.dynamic)({loader:function(){var E=Object(V.a)(S.a.mark(function D(){var d,o,p,g;return S.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,o=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(7),e.e(8),e.e(9)]).then(e.bind(null,"36SN"));case 8:return p=r.sent,g=function(){return o.default.createElement(p.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"},{id:"pv",name:"\u8BBF\u95EE\u91CF"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20,pv:120},{ds:"2020-12-31",page:"\u9996\u9875",uv:120,pv:1120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21,pv:121},{ds:"2021-01-01",page:"\u9996\u9875",uv:121,pv:1121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15,pv:115},{ds:"2021-01-02",page:"\u9996\u9875",uv:115,pv:1115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40,pv:140},{ds:"2021-01-03",page:"\u9996\u9875",uv:140,pv:1140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31,pv:131},{ds:"2021-01-04",page:"\u9996\u9875",uv:131,pv:1131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32,pv:132},{ds:"2021-01-05",page:"\u9996\u9875",uv:132,pv:1132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30,pv:130},{ds:"2021-01-06",page:"\u9996\u9875",uv:130,pv:1130}]})},r.abrupt("return",g);case 11:case"end":return r.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-2"}},"line-demo-3":{component:Object(W.dynamic)({loader:function(){var E=Object(V.a)(S.a.mark(function D(){var d,o,p,g;return S.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,o=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(7),e.e(8),e.e(9)]).then(e.bind(null,"36SN"));case 8:return p=r.sent,g=function(){return o.default.createElement(p.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},r.abrupt("return",g);case 11:case"end":return r.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-3"}},"line-demo-4":{component:Object(W.dynamic)({loader:function(){var E=Object(V.a)(S.a.mark(function D(){var d,o,p,g;return S.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,o=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(7),e.e(8),e.e(9)]).then(e.bind(null,"36SN"));case 8:return p=r.sent,g=function(){return o.default.createElement(p.Line,{withArea:!0,isStack:!0,isPercent:!0,meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},r.abrupt("return",g);case 11:case"end":return r.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-4"}},"pivot-table-demo":{component:Object(W.dynamic)({loader:function(){var E=Object(V.a)(S.a.mark(function D(){var d,o,p,g;return S.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,o=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(7),e.e(8),e.e(9)]).then(e.bind(null,"36SN"));case 8:return p=r.sent,g=function(){return o.default.createElement(p.PivotTable,{style:{maxHeight:400,overflow:"auto"},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},r.abrupt("return",g);case 11:case"end":return r.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo"}},"pivot-table-demo-1":{component:Object(W.dynamic)({loader:function(){var E=Object(V.a)(S.a.mark(function D(){var d,o,p,g;return S.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return d=e("K+nK"),r.t0=d,r.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return r.t1=r.sent,o=(0,r.t0)(r.t1),r.next=8,Promise.all([e.e(0),e.e(2),e.e(7),e.e(8),e.e(9)]).then(e.bind(null,"36SN"));case 8:return p=r.sent,g=function(){return o.default.createElement(p.PivotTable,{style:{maxHeight:400,overflow:"auto"},cellRender:function(w,T,P){return o.default.createElement("div",null,o.default.createElement("p",null,"\u53C2\u6570\u8868\uFF1A"),o.default.createElement("p",{style:{color:["red","orange","yellow","green","blue"][Object.keys(T).length]}},w),o.default.createElement("p",null,JSON.stringify(T)),o.default.createElement("p",null,JSON.stringify(P)))},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},r.abrupt("return",g);case 11:case"end":return r.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-1"}},"pivot-table-demo-2":{component:Object(W.dynamic)({loader:function(){var E=Object(V.a)(S.a.mark(function D(){var d,o,p,g,O,r,l;return S.a.wrap(function(w){for(;;)switch(w.prev=w.next){case 0:return r=function(P,c){if(!c&&P&&P.__esModule)return P;if(P===null||typeof P!="object"&&typeof P!="function")return{default:P};var A=O(c);if(A&&A.has(P))return A.get(P);var h={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in P)if(v!=="default"&&Object.prototype.hasOwnProperty.call(P,v)){var u=n?Object.getOwnPropertyDescriptor(P,v):null;u&&(u.get||u.set)?Object.defineProperty(h,v,u):h[v]=P[v]}return h.default=P,A&&A.set(P,h),h},O=function(P){if(typeof WeakMap!="function")return null;var c=new WeakMap,A=new WeakMap;return(O=function(n){return n?A:c})(P)},d=e("K+nK"),w.t0=d,w.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return w.t1=w.sent,o=(0,w.t0)(w.t1),w.t2=r,w.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return w.t3=w.sent,p=(0,w.t2)(w.t3),w.next=15,Promise.all([e.e(0),e.e(2),e.e(7),e.e(8),e.e(9)]).then(e.bind(null,"36SN"));case 15:return g=w.sent,l=function(){var P=(0,p.useState)(!1),c=(0,o.default)(P,2),A=c[0],h=c[1];return p.default.createElement(p.default.Fragment,null,p.default.createElement("label",null,"\u53EF\u5C55\u5F00/\u6536\u7F29\uFF1A",p.default.createElement("input",{type:"checkbox",value:A,onChange:function(){return h(!A)}})),p.default.createElement(g.PivotTable,{leftExpandable:A,showSubtotal:!1,meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]}))},w.abrupt("return",l);case 18:case"end":return w.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-2"}},"form-render-demo":{component:Object(W.dynamic)({loader:function(){var E=Object(V.a)(S.a.mark(function D(){var d,o,p,g,O,r,l,s,w,T,P,c,A,h;return S.a.wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return P=function(N,K){if(!K&&N&&N.__esModule)return N;if(N===null||typeof N!="object"&&typeof N!="function")return{default:N};var L=T(K);if(L&&L.has(N))return L.get(N);var Z={},G=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var de in N)if(de!=="default"&&Object.prototype.hasOwnProperty.call(N,de)){var Ee=G?Object.getOwnPropertyDescriptor(N,de):null;Ee&&(Ee.get||Ee.set)?Object.defineProperty(Z,de,Ee):Z[de]=N[de]}return Z.default=N,L&&L.set(N,Z),Z},T=function(N){if(typeof WeakMap!="function")return null;var K=new WeakMap,L=new WeakMap;return(T=function(G){return G?L:K})(N)},d=e("K+nK"),v.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return v.t0=d,v.next=8,e.e(14).then(e.t.bind(null,"4IMT",7));case 8:return v.t1=v.sent,o=(0,v.t0)(v.t1),v.t2=d,v.next=13,e.e(89).then(e.bind(null,"fWQN"));case 13:return v.t3=v.sent,p=(0,v.t2)(v.t3),v.t4=d,v.next=18,e.e(90).then(e.bind(null,"mtLc"));case 18:return v.t5=v.sent,g=(0,v.t4)(v.t5),v.t6=d,v.next=23,e.e(78).then(e.bind(null,"yKVA"));case 23:return v.t7=v.sent,O=(0,v.t6)(v.t7),v.t8=d,v.next=28,e.e(74).then(e.bind(null,"879j"));case 28:return v.t9=v.sent,r=(0,v.t8)(v.t9),v.t10=d,v.next=33,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 33:return v.t11=v.sent,l=(0,v.t10)(v.t11),v.next=37,Promise.all([e.e(0),e.e(1),e.e(2),e.e(6),e.e(13)]).then(e.bind(null,"gdfu"));case 37:return s=v.sent,v.t12=P,v.next=41,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(11)]).then(e.bind(null,"refC"));case 41:return v.t13=v.sent,w=(0,v.t12)(v.t13),c={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},A=function(u){(0,O.default)(K,u);var N=(0,r.default)(K);function K(){return(0,p.default)(this,K),N.apply(this,arguments)}return(0,g.default)(K,[{key:"render",value:function(){var Z=this.props.form;return l.default.createElement("div",null,l.default.createElement(w.default,{form:Z,schema:c}),l.default.createElement(o.default,{type:"primary",onClick:Z.submit},"\u63D0\u4EA4"))}}]),K}(l.default.Component),h=(0,w.connectForm)(A),v.abrupt("return",h);case 47:case"end":return v.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default connectForm(Demo);`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.19"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo"}},"form-render-demo-1":{component:Object(W.dynamic)({loader:function(){var E=Object(V.a)(S.a.mark(function D(){var d,o,p,g,O,r,l,s,w,T;return S.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return l=function(h,n){if(!n&&h&&h.__esModule)return h;if(h===null||typeof h!="object"&&typeof h!="function")return{default:h};var v=r(n);if(v&&v.has(h))return v.get(h);var u={},N=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var K in h)if(K!=="default"&&Object.prototype.hasOwnProperty.call(h,K)){var L=N?Object.getOwnPropertyDescriptor(h,K):null;L&&(L.get||L.set)?Object.defineProperty(u,K,L):u[K]=h[K]}return u.default=h,v&&v.set(h,u),u},r=function(h){if(typeof WeakMap!="function")return null;var n=new WeakMap,v=new WeakMap;return(r=function(N){return N?v:n})(h)},d=e("K+nK"),c.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return c.t0=d,c.next=8,e.e(14).then(e.t.bind(null,"4IMT",7));case 8:return c.t1=c.sent,o=(0,c.t0)(c.t1),c.t2=d,c.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return c.t3=c.sent,p=(0,c.t2)(c.t3),c.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(6),e.e(13)]).then(e.bind(null,"gdfu"));case 17:return g=c.sent,c.t4=l,c.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(11)]).then(e.bind(null,"refC"));case 21:return c.t5=c.sent,O=(0,c.t4)(c.t5),s={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},w=function(){var h=(0,O.useForm)();return p.default.createElement("div",null,p.default.createElement(O.default,{form:h,schema:s}),p.default.createElement(o.default,{type:"primary",onClick:h.submit},"\u63D0\u4EA4"))},T=w,c.abrupt("return",T);case 27:case"end":return c.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.19"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo-1"}},"form-render-demo-2":{component:Object(W.dynamic)({loader:function(){var E=Object(V.a)(S.a.mark(function D(){var d,o,p,g,O,r,l,s,w,T;return S.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return l=function(h,n){if(!n&&h&&h.__esModule)return h;if(h===null||typeof h!="object"&&typeof h!="function")return{default:h};var v=r(n);if(v&&v.has(h))return v.get(h);var u={},N=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var K in h)if(K!=="default"&&Object.prototype.hasOwnProperty.call(h,K)){var L=N?Object.getOwnPropertyDescriptor(h,K):null;L&&(L.get||L.set)?Object.defineProperty(u,K,L):u[K]=h[K]}return u.default=h,v&&v.set(h,u),u},r=function(h){if(typeof WeakMap!="function")return null;var n=new WeakMap,v=new WeakMap;return(r=function(N){return N?v:n})(h)},d=e("K+nK"),c.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return c.t0=d,c.next=8,e.e(14).then(e.t.bind(null,"4IMT",7));case 8:return c.t1=c.sent,o=(0,c.t0)(c.t1),c.t2=d,c.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return c.t3=c.sent,p=(0,c.t2)(c.t3),c.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(6),e.e(13)]).then(e.bind(null,"gdfu"));case 17:return g=c.sent,c.t4=l,c.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(11)]).then(e.bind(null,"refC"));case 21:return c.t5=c.sent,O=(0,c.t4)(c.t5),s={displayType:"row",labelWidth:60,type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F",type:"range",format:"date"},siteUrl:{title:"\u7F51\u5740",type:"string",placeholder:"\u6B64\u5904\u5FC5\u586B",required:!0,props:{addonBefore:"https://",addonAfter:".com"}}}},w=function(){var h=(0,O.useForm)(),n=function(u,N){N.length>0?alert("errors:"+JSON.stringify(N)):alert("formData:"+JSON.stringify(u,null,2))};return p.default.createElement("div",null,p.default.createElement(O.default,{form:h,schema:s,onFinish:n}),p.default.createElement(o.default,{type:"primary",onClick:h.submit},"\u63D0\u4EA4"))},T=w,c.abrupt("return",T);case 27:case"end":return c.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.19"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-demo-2"}},"migrate-demo":{component:Object(W.dynamic)({loader:function(){var E=Object(V.a)(S.a.mark(function D(){var d,o,p,g,O,r,l,s;return S.a.wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return l=function(){var c=(0,p.useForm)(),A=function(n,v){v.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(v))):alert(JSON.stringify(n))};return o.default.createElement("div",null,o.default.createElement(p.default,{form:c,schema:r,onFinish:A}),o.default.createElement("button",{onClick:c.submit},"\u63D0\u4EA4"))},O=function(c,A){if(!A&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var h=g(A);if(h&&h.has(c))return h.get(c);var n={},v=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in c)if(u!=="default"&&Object.prototype.hasOwnProperty.call(c,u)){var N=v?Object.getOwnPropertyDescriptor(c,u):null;N&&(N.get||N.set)?Object.defineProperty(n,u,N):n[u]=c[u]}return n.default=c,h&&h.set(c,n),n},g=function(c){if(typeof WeakMap!="function")return null;var A=new WeakMap,h=new WeakMap;return(g=function(v){return v?h:A})(c)},d=e("K+nK"),T.t0=d,T.next=7,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 7:return T.t1=T.sent,o=(0,T.t0)(T.t1),T.t2=O,T.next=12,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(11)]).then(e.bind(null,"refC"));case 12:return T.t3=T.sent,p=(0,T.t2)(T.t3),r={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}},s=l,T.abrupt("return",s);case 17:case"end":return T.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.19"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate-demo"}},"migrate-demo-1":{component:Object(W.dynamic)({loader:function(){var E=Object(V.a)(S.a.mark(function D(){var d,o,p,g,O,r,l,s,w,T,P,c,A;return S.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return w=function(u,N){if(!N&&u&&u.__esModule)return u;if(u===null||typeof u!="object"&&typeof u!="function")return{default:u};var K=s(N);if(K&&K.has(u))return K.get(u);var L={},Z=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var G in u)if(G!=="default"&&Object.prototype.hasOwnProperty.call(u,G)){var de=Z?Object.getOwnPropertyDescriptor(u,G):null;de&&(de.get||de.set)?Object.defineProperty(L,G,de):L[G]=u[G]}return L.default=u,K&&K.set(u,L),L},s=function(u){if(typeof WeakMap!="function")return null;var N=new WeakMap,K=new WeakMap;return(s=function(Z){return Z?K:N})(u)},d=e("K+nK"),n.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return n.t0=d,n.next=8,e.e(14).then(e.t.bind(null,"4IMT",7));case 8:return n.t1=n.sent,o=(0,n.t0)(n.t1),n.t2=d,n.next=13,Promise.resolve().then(e.bind(null,"tJVT"));case 13:return n.t3=n.sent,p=(0,n.t2)(n.t3),n.next=17,Promise.all([e.e(3),e.e(21)]).then(e.t.bind(null,"cUip",7));case 17:return n.t4=d,n.next=20,Promise.all([e.e(0),e.e(14),e.e(20),e.e(24)]).then(e.t.bind(null,"iJl9",7));case 20:return n.t5=n.sent,g=(0,n.t4)(n.t5),n.t6=w,n.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return n.t7=n.sent,O=(0,n.t6)(n.t7),n.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(6),e.e(13)]).then(e.bind(null,"gdfu"));case 29:return r=n.sent,n.next=32,Promise.all([e.e(67),e.e(83)]).then(e.bind(null,"7t+U"));case 32:return l=n.sent,T=g.default.TextArea,P={type:"object",properties:{number:{title:"\u6570\u5B57\u8F93\u5165\u6846",type:"number","ui:disabled":!0},checkbox:{title:"\u662F\u5426\u9009\u62E9",type:"boolean","ui:widget":"switch"}},required:["number"]},c=function(){var u=(0,O.useState)(JSON.stringify(P)),N=(0,p.default)(u,2),K=N[0],L=N[1],Z=(0,O.useState)({}),G=(0,p.default)(Z,2),de=G[0],Ee=G[1],Ke=function(){try{var f=(0,l.updateSchemaToNewVersion)(K);Ee(f)}catch(M){console.log(M)}},hn=function(f){L(f.target.value)},En=function(){L(JSON.stringify(JSON.parse(K),null,2))};return O.default.createElement("div",null,O.default.createElement("div",null,"\u586B\u5165\u65E7\u7248schema\uFF1A"),O.default.createElement(T,{style:{minHeight:400,marginTop:12,marginBottom:12},value:K,onChange:hn}),O.default.createElement(o.default,{style:{marginRight:12},onClick:En},"\u683C\u5F0F\u5316\u65E7schema"),O.default.createElement(o.default,{type:"primary",onClick:Ke},"\u751F\u6210\u65B0\u7248schema"),O.default.createElement(T,{style:{minHeight:400,marginTop:12},value:JSON.stringify(de,null,2)}))},A=c,n.abrupt("return",A);case 38:case"end":return n.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
      const _newSchema = updateSchemaToNewVersion(oldSchema);
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

export default Translator;`},"packages/form-render/src/utils.js":{import:"../../packages/form-render/src/utils.js",content:z}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"react-dom":{version:">=16.9.0"},"lodash-es":{version:"4.17.21"}},identifier:"migrate-demo-1"}},"display-demo":{component:Object(W.dynamic)({loader:function(){var E=Object(V.a)(S.a.mark(function D(){var d,o,p,g,O;return S.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,p=(0,l.t2)(l.t3),g=function(w){return{type:"object",displayType:w,properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},objectName:{title:"\u5BF9\u8C61",bind:"obj",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},O=function(){return o.default.createElement("div",null,o.default.createElement("h2",null,"display: row"),o.default.createElement(p.default,{schema:g("row")}),o.default.createElement("h2",null,"display: column"),o.default.createElement(p.default,{schema:g("column")}))},l.abrupt("return",O);case 14:case"end":return l.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`},"demo/display.js":{import:"../demo/display",content:Be}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.19"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo"}},"display-demo-1":{component:Object(W.dynamic)({loader:function(){var E=Object(V.a)(S.a.mark(function D(){var d,o,p,g,O;return S.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,p=(0,l.t2)(l.t3),g={type:"object",displayType:"inline",properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},O=function(){return o.default.createElement(p.default,{schema:g})},l.abrupt("return",O);case 14:case"end":return l.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  displayType: 'inline',
  properties: {
    range1: {
      title: '\u65E5\u671F',
      type: 'range',
      format: 'date',
    },
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

export default () => <Form schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:Be}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.19"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-1"}},"display-demo-2":{component:Object(W.dynamic)({loader:function(){var E=Object(V.a)(S.a.mark(function D(){var d,o,p,g,O;return S.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,p=(0,l.t2)(l.t3),g={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0},check:{title:"box",type:"boolean",default:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},O=function(){return o.default.createElement(p.default,{readOnly:!0,schema:g})},l.abrupt("return",O);case 14:case"end":return l.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form readOnly schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:Be}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.19"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-2"}},"display-demo-3":{component:Object(W.dynamic)({loader:function(){var E=Object(V.a)(S.a.mark(function D(){var d,o,p,g,O;return S.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,p=(0,l.t2)(l.t3),g={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0,width:"50%"},check:{title:"box",type:"boolean",default:!0,width:"50%",labelWidth:6},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},O=function(){return o.default.createElement(p.default,{labelWidth:"200",schema:g})},l.abrupt("return",O);case 14:case"end":return l.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form labelWidth="200" schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:Be}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.19"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-3"}},"display-demo-4":{component:Object(W.dynamic)({loader:function(){var E=Object(V.a)(S.a.mark(function D(){var d,o,p,g,O,r;return S.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,p=(0,s.t2)(s.t3),g={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},O=function(){return o.default.createElement(p.default,{schema:g})},r=O,s.abrupt("return",r);case 15:case"end":return s.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Be}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.19"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-4"}},"display-demo-5":{component:Object(W.dynamic)({loader:function(){var E=Object(V.a)(S.a.mark(function D(){var d,o,p,g,O,r;return S.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,p=(0,s.t2)(s.t3),g={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},O=function(){return o.default.createElement(p.default,{schema:g})},r=O,s.abrupt("return",r);case 15:case"end":return s.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Be}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.19"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-5"}},"display-demo-6":{component:Object(W.dynamic)({loader:function(){var E=Object(V.a)(S.a.mark(function D(){var d,o,p,g,O,r;return S.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,p=(0,s.t2)(s.t3),g={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},O=function(){return o.default.createElement(p.default,{schema:g})},r=O,s.abrupt("return",r);case 15:case"end":return s.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Be}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.19"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-6"}},"display-demo-7":{component:Object(W.dynamic)({loader:function(){var E=Object(V.a)(S.a.mark(function D(){var d,o,p,g,O,r;return S.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,p=(0,s.t2)(s.t3),g={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},O=function(){return o.default.createElement(p.default,{schema:g})},r=O,s.abrupt("return",r);case 15:case"end":return s.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Be}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.19"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-7"}},"form-methods-demo":{component:Object(W.dynamic)({loader:function(){var E=Object(V.a)(S.a.mark(function D(){var d,o,p,g,O,r,l,s,w,T,P,c,A;return S.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return P=function(u,N){if(!N&&u&&u.__esModule)return u;if(u===null||typeof u!="object"&&typeof u!="function")return{default:u};var K=T(N);if(K&&K.has(u))return K.get(u);var L={},Z=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var G in u)if(G!=="default"&&Object.prototype.hasOwnProperty.call(u,G)){var de=Z?Object.getOwnPropertyDescriptor(u,G):null;de&&(de.get||de.set)?Object.defineProperty(L,G,de):L[G]=u[G]}return L.default=u,K&&K.set(u,L),L},T=function(u){if(typeof WeakMap!="function")return null;var N=new WeakMap,K=new WeakMap;return(T=function(Z){return Z?K:N})(u)},d=e("K+nK"),n.next=5,e.e(22).then(e.t.bind(null,"lfLe",7));case 5:return n.t0=d,n.next=8,e.e(23).then(e.t.bind(null,"Cp9S",7));case 8:return n.t1=n.sent,o=(0,n.t0)(n.t1),n.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return n.t2=d,n.next=15,e.e(14).then(e.t.bind(null,"4IMT",7));case 15:return n.t3=n.sent,p=(0,n.t2)(n.t3),n.next=19,e.e(16).then(e.t.bind(null,"tL+A",7));case 19:return n.t4=d,n.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return n.t5=n.sent,g=(0,n.t4)(n.t5),n.t6=d,n.next=27,Promise.resolve().then(e.bind(null,"tJVT"));case 27:return n.t7=n.sent,O=(0,n.t6)(n.t7),n.t8=P,n.next=32,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 32:return n.t9=n.sent,r=(0,n.t8)(n.t9),n.next=36,Promise.all([e.e(0),e.e(1),e.e(2),e.e(6),e.e(13)]).then(e.bind(null,"gdfu"));case 36:return l=n.sent,n.t10=P,n.next=40,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(11)]).then(e.bind(null,"refC"));case 40:return n.t11=n.sent,s=(0,n.t10)(n.t11),n.next=44,e.e(17).then(e.bind(null,"OH0R"));case 44:return w=n.sent,c=function(){var u=(0,s.useForm)(),N=(0,r.useState)({}),K=(0,O.default)(N,2),L=K[0],Z=K[1],G=function(){(0,w.fakeApi)("xxx/getForm").then(function(Ke){u.setValues({input1:"hello world",select1:"c"})})};(0,r.useEffect)(function(){(0,w.delay)(1e3).then(function(Ee){Z({type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}})})},[]);var de=function(Ke,hn){hn.length>0?g.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(hn.map(function(En){return En.name}))):(0,w.fakeApi)("xxx/submit",Ke).then(function(En){return g.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})};return r.default.createElement("div",{style:{width:"400px"}},r.default.createElement(s.default,{form:u,schema:L,onFinish:de}),r.default.createElement(o.default,null,r.default.createElement(p.default,{onClick:G},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),r.default.createElement(p.default,{type:"primary",onClick:u.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},A=c,n.abrupt("return",A);case 48:case"end":return n.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:oe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.19"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo"}},"form-methods-demo-1":{component:Object(W.dynamic)({loader:function(){var E=Object(V.a)(S.a.mark(function D(){var d,o,p,g,O,r,l,s,w,T,P,c,A;return S.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return T=function(u,N){if(!N&&u&&u.__esModule)return u;if(u===null||typeof u!="object"&&typeof u!="function")return{default:u};var K=w(N);if(K&&K.has(u))return K.get(u);var L={},Z=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var G in u)if(G!=="default"&&Object.prototype.hasOwnProperty.call(u,G)){var de=Z?Object.getOwnPropertyDescriptor(u,G):null;de&&(de.get||de.set)?Object.defineProperty(L,G,de):L[G]=u[G]}return L.default=u,K&&K.set(u,L),L},w=function(u){if(typeof WeakMap!="function")return null;var N=new WeakMap,K=new WeakMap;return(w=function(Z){return Z?K:N})(u)},d=e("K+nK"),n.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return n.t0=d,n.next=8,e.e(14).then(e.t.bind(null,"4IMT",7));case 8:return n.t1=n.sent,o=(0,n.t0)(n.t1),n.t2=d,n.next=13,Promise.resolve().then(e.bind(null,"PpiC"));case 13:return n.t3=n.sent,p=(0,n.t2)(n.t3),n.next=17,e.e(16).then(e.t.bind(null,"tL+A",7));case 17:return n.t4=d,n.next=20,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 20:return n.t5=n.sent,g=(0,n.t4)(n.t5),n.t6=d,n.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return n.t7=n.sent,O=(0,n.t6)(n.t7),n.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(6),e.e(13)]).then(e.bind(null,"gdfu"));case 29:return r=n.sent,n.t8=T,n.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(11)]).then(e.bind(null,"refC"));case 33:return n.t9=n.sent,l=(0,n.t8)(n.t9),n.next=37,e.e(17).then(e.bind(null,"OH0R"));case 37:return s=n.sent,P={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},c=function(){var u=(0,l.useForm)(),N=function(Z,G){G.length>0?g.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(G.map(function(de){return de.name}))):(0,s.fakeApi)("xxx/submit",Z).then(function(de){return g.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},K=function(Z){var G=Z.data,de=Z.errors,Ee=Z.schema,Ke=(0,p.default)(Z,["data","errors","schema"]);return(0,s.fakeApi)("xxx/validation").then(function(hn){return{name:"select1",error:["\u5916\u90E8\u6821\u9A8C\u9519\u8BEF"]}})};return O.default.createElement("div",{style:{width:"400px"}},O.default.createElement(l.default,{form:u,schema:P,beforeFinish:K,onFinish:N}),O.default.createElement(o.default,{type:"primary",onClick:u.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},A=c,n.abrupt("return",A);case 42:case"end":return n.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:oe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.19"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-1"}},"form-methods-demo-2":{component:Object(W.dynamic)({loader:function(){var E=Object(V.a)(S.a.mark(function D(){var d,o,p,g,O,r,l,s,w,T,P,c,A;return S.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return T=function(u,N){if(!N&&u&&u.__esModule)return u;if(u===null||typeof u!="object"&&typeof u!="function")return{default:u};var K=w(N);if(K&&K.has(u))return K.get(u);var L={},Z=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var G in u)if(G!=="default"&&Object.prototype.hasOwnProperty.call(u,G)){var de=Z?Object.getOwnPropertyDescriptor(u,G):null;de&&(de.get||de.set)?Object.defineProperty(L,G,de):L[G]=u[G]}return L.default=u,K&&K.set(u,L),L},w=function(u){if(typeof WeakMap!="function")return null;var N=new WeakMap,K=new WeakMap;return(w=function(Z){return Z?K:N})(u)},d=e("K+nK"),n.next=5,e.e(22).then(e.t.bind(null,"lfLe",7));case 5:return n.t0=d,n.next=8,e.e(23).then(e.t.bind(null,"Cp9S",7));case 8:return n.t1=n.sent,o=(0,n.t0)(n.t1),n.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return n.t2=d,n.next=15,e.e(14).then(e.t.bind(null,"4IMT",7));case 15:return n.t3=n.sent,p=(0,n.t2)(n.t3),n.next=19,e.e(16).then(e.t.bind(null,"tL+A",7));case 19:return n.t4=d,n.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return n.t5=n.sent,g=(0,n.t4)(n.t5),n.t6=d,n.next=27,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 27:return n.t7=n.sent,O=(0,n.t6)(n.t7),n.next=31,Promise.all([e.e(0),e.e(1),e.e(2),e.e(6),e.e(13)]).then(e.bind(null,"gdfu"));case 31:return r=n.sent,n.t8=T,n.next=35,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(11)]).then(e.bind(null,"refC"));case 35:return n.t9=n.sent,l=(0,n.t8)(n.t9),n.next=39,e.e(17).then(e.bind(null,"OH0R"));case 39:return s=n.sent,P={type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F\u8303\u56F4",type:"range",format:"date"}}},c=function(){var u=(0,l.useForm)(),N=function(Z,G){G.length>0?g.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(G.map(function(de){return de.name}))):(0,s.fakeApi)("xxx/submit",Z).then(function(de){return g.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},K=function(){(0,s.fakeApi)("xxx/getForm").then(function(Z){u.setValues({startDate:"2020-04-04",endDate:"2020-04-24"})})};return O.default.createElement("div",{style:{width:"400px"}},O.default.createElement(l.default,{form:u,schema:P,onFinish:N}),O.default.createElement(o.default,null,O.default.createElement(p.default,{onClick:K},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),O.default.createElement(p.default,{type:"primary",onClick:u.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},A=c,n.abrupt("return",A);case 44:case"end":return n.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:oe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.19"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-2"}},"form-methods-demo-3":{component:Object(W.dynamic)({loader:function(){var E=Object(V.a)(S.a.mark(function D(){var d,o,p,g,O,r,l,s,w,T,P,c;return S.a.wrap(function(h){for(;;)switch(h.prev=h.next){case 0:return w=function(v,u){if(!u&&v&&v.__esModule)return v;if(v===null||typeof v!="object"&&typeof v!="function")return{default:v};var N=s(u);if(N&&N.has(v))return N.get(v);var K={},L=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var Z in v)if(Z!=="default"&&Object.prototype.hasOwnProperty.call(v,Z)){var G=L?Object.getOwnPropertyDescriptor(v,Z):null;G&&(G.get||G.set)?Object.defineProperty(K,Z,G):K[Z]=v[Z]}return K.default=v,N&&N.set(v,K),K},s=function(v){if(typeof WeakMap!="function")return null;var u=new WeakMap,N=new WeakMap;return(s=function(L){return L?N:u})(v)},d=e("K+nK"),h.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return h.t0=d,h.next=8,e.e(14).then(e.t.bind(null,"4IMT",7));case 8:return h.t1=h.sent,o=(0,h.t0)(h.t1),h.next=12,e.e(16).then(e.t.bind(null,"tL+A",7));case 12:return h.t2=d,h.next=15,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 15:return h.t3=h.sent,p=(0,h.t2)(h.t3),h.t4=w,h.next=20,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 20:return h.t5=h.sent,g=(0,h.t4)(h.t5),h.next=24,Promise.all([e.e(0),e.e(1),e.e(2),e.e(6),e.e(13)]).then(e.bind(null,"gdfu"));case 24:return O=h.sent,h.t6=w,h.next=28,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(11)]).then(e.bind(null,"refC"));case 28:return h.t7=h.sent,r=(0,h.t6)(h.t7),h.next=32,e.e(17).then(e.bind(null,"OH0R"));case 32:return l=h.sent,T={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select1:{title:"\u5355\u9009",type:"string",widget:"select"}}}}},P=function(){var v=(0,r.useForm)(),u=function(){v.setSchemaByPath("obj1.select1",{enum:["east","south","west","north"],enumNames:["\u4E1C","\u5357","\u897F","\u5317"]})},N=function(L,Z){Z.length>0?p.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(Z.map(function(G){return G.name}))):p.default.info(JSON.stringify(L))};return g.default.createElement("div",{style:{width:"400px"}},g.default.createElement(r.default,{form:v,schema:T,onMount:u,onFinish:N}),g.default.createElement(o.default,{type:"primary",onClick:v.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},c=P,h.abrupt("return",c);case 37:case"end":return h.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:oe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.19"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-3"}},"function-demo":{component:Object(W.dynamic)({loader:function(){var E=Object(V.a)(S.a.mark(function D(){var d,o,p,g,O,r,l,s;return S.a.wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return O=function(c,A){if(!A&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var h=g(A);if(h&&h.has(c))return h.get(c);var n={},v=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in c)if(u!=="default"&&Object.prototype.hasOwnProperty.call(c,u)){var N=v?Object.getOwnPropertyDescriptor(c,u):null;N&&(N.get||N.set)?Object.defineProperty(n,u,N):n[u]=c[u]}return n.default=c,h&&h.set(c,n),n},g=function(c){if(typeof WeakMap!="function")return null;var A=new WeakMap,h=new WeakMap;return(g=function(v){return v?h:A})(c)},d=e("K+nK"),T.t0=d,T.next=6,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 6:return T.t1=T.sent,o=(0,T.t0)(T.t1),T.t2=O,T.next=11,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(11)]).then(e.bind(null,"refC"));case 11:return T.t3=T.sent,p=(0,T.t2)(T.t3),r={type:"object",properties:{select1:{title:"\u5355\u9009",description:"\u5C1D\u8BD5\u9009\u62E9\u201C\u663E\u793A\u8F93\u5165\u6846\u201D",type:"string",enum:["a","b"],enumNames:["\u9690\u85CF\u8F93\u5165\u6846","\u663E\u793A\u8F93\u5165\u6846"],disabled:"{{rootValue.input1.length > 5}}",default:"a"},input1:{title:"\u8F93\u5165\u6846",description:"\u5C1D\u8BD5\u8F93\u5165\u8D85\u8FC75\u4E2A\u5B57\u7B26",type:"string",hidden:'{{formData.select1 == "a"}}'}}},l=function(){var c=(0,p.useForm)();return o.default.createElement(p.default,{form:c,schema:r})},s=l,T.abrupt("return",s);case 17:case"end":return T.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',
  properties: {
    select1: {
      title: '\u5355\u9009',
      description: '\u5C1D\u8BD5\u9009\u62E9\u201C\u663E\u793A\u8F93\u5165\u6846\u201D',
      type: 'string',
      enum: ['a', 'b'],
      enumNames: ['\u9690\u85CF\u8F93\u5165\u6846', '\u663E\u793A\u8F93\u5165\u6846'],
      disabled: '{{rootValue.input1.length > 5}}',
      default: 'a',
    },
    input1: {
      title: '\u8F93\u5165\u6846',
      description: '\u5C1D\u8BD5\u8F93\u5165\u8D85\u8FC75\u4E2A\u5B57\u7B26',
      type: 'string',
      hidden: '{{formData.select1 == "a"}}',
    },
  },
};

const Demo1 = () => {
  const form = useForm();
  return <FormRender form={form} schema={schema} />;
};

export default Demo1;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.19"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo"}},"function-demo-1":{component:Object(W.dynamic)({loader:function(){var E=Object(V.a)(S.a.mark(function D(){var d,o,p,g,O;return S.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(18)]).then(e.bind(null,"c2mQ"));case 9:return l.t3=l.sent,p=(0,l.t2)(l.t3),l.next=13,e.e(19).then(e.bind(null,"8iYR"));case 13:return g=l.sent,O=function(){return o.default.createElement(p.default,{schema:g.expression})},l.abrupt("return",O);case 16:case"end":return l.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { expression } from '../json/schema';

export default () => <FR schema={expression} />;`},"demo/FR.jsx":{import:"../demo/FR",content:_},"json/schema.js":{import:"../json/schema",content:xe}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.19"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo-1"}},"lifeCycle-demo":{component:Object(W.dynamic)({loader:function(){var E=Object(V.a)(S.a.mark(function D(){var d,o,p,g,O,r,l,s,w;return S.a.wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return O=function(A,h){if(!h&&A&&A.__esModule)return A;if(A===null||typeof A!="object"&&typeof A!="function")return{default:A};var n=g(h);if(n&&n.has(A))return n.get(A);var v={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var N in A)if(N!=="default"&&Object.prototype.hasOwnProperty.call(A,N)){var K=u?Object.getOwnPropertyDescriptor(A,N):null;K&&(K.get||K.set)?Object.defineProperty(v,N,K):v[N]=A[N]}return v.default=A,n&&n.set(A,v),v},g=function(A){if(typeof WeakMap!="function")return null;var h=new WeakMap,n=new WeakMap;return(g=function(u){return u?n:h})(A)},P.t0=O,P.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return P.t1=P.sent,d=(0,P.t0)(P.t1),P.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(6),e.e(13)]).then(e.bind(null,"gdfu"));case 9:return o=P.sent,P.t2=O,P.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(11)]).then(e.bind(null,"refC"));case 13:return P.t3=P.sent,p=(0,P.t2)(P.t3),r=function(A){return new Promise(function(h){return setTimeout(h,A)})},l={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u4E0B\u62C9\u9009\u6846",description:"\u52A0\u8F7D\u4E2D...",type:"string",enum:[],widget:"select"}}},s=function(){var A=(0,p.useForm)(),h=function(){A.setValues({input1:"hello world"}),r(3e3).then(function(v){A.setSchemaByPath("select1",{description:"",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]})})};return d.default.createElement(p.default,{form:A,schema:l,onMount:h})},w=s,P.abrupt("return",w);case 20:case"end":return P.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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
      title: '\u4E0B\u62C9\u9009\u6846',
      description: '\u52A0\u8F7D\u4E2D...',
      type: 'string',
      enum: [],
      widget: 'select',
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.4.5-beta.19"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"lifeCycle-demo"}},"listDisplay-demo":{component:Object(W.dynamic)({loader:function(){var E=Object(V.a)(S.a.mark(function D(){var d,o,p,g,O,r;return S.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,p=(0,s.t2)(s.t3),g={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},O=function(){return o.default.createElement(p.default,{schema:g})},r=O,s.abrupt("return",r);case 15:case"end":return s.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Be}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.19"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo"}},"listDisplay-demo-1":{component:Object(W.dynamic)({loader:function(){var E=Object(V.a)(S.a.mark(function D(){var d,o,p,g,O,r;return S.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,p=(0,s.t2)(s.t3),g={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},O=function(){return o.default.createElement(p.default,{schema:g})},r=O,s.abrupt("return",r);case 15:case"end":return s.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Be}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.19"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-1"}},"listDisplay-demo-2":{component:Object(W.dynamic)({loader:function(){var E=Object(V.a)(S.a.mark(function D(){var d,o,p,g,O,r;return S.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,p=(0,s.t2)(s.t3),g={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},O=function(){return o.default.createElement(p.default,{schema:g})},r=O,s.abrupt("return",r);case 15:case"end":return s.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Be}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.19"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-2"}},"listDisplay-demo-3":{component:Object(W.dynamic)({loader:function(){var E=Object(V.a)(S.a.mark(function D(){var d,o,p,g,O,r;return S.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,p=(0,s.t2)(s.t3),g={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},O=function(){return o.default.createElement(p.default,{schema:g})},r=O,s.abrupt("return",r);case 15:case"end":return s.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Be}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.19"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-3"}},"listDisplay-demo-4":{component:Object(W.dynamic)({loader:function(){var E=Object(V.a)(S.a.mark(function D(){var d,o,p,g,O,r;return S.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(10)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,p=(0,s.t2)(s.t3),window.hello=function(w){var T=w.value;console.log(T)},g={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list4",itemProps:{buttons:[{callback:"hello",text:"\u590D\u5236"}]},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},O=function(){return o.default.createElement(p.default,{schema:g})},r=O,s.abrupt("return",r);case 16:case"end":return s.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:Be}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.19"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-4"}},"watch-demo":{component:Object(W.dynamic)({loader:function(){var E=Object(V.a)(S.a.mark(function D(){var d,o,p,g,O,r,l,s;return S.a.wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return O=function(c,A){if(!A&&c&&c.__esModule)return c;if(c===null||typeof c!="object"&&typeof c!="function")return{default:c};var h=g(A);if(h&&h.has(c))return h.get(c);var n={},v=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in c)if(u!=="default"&&Object.prototype.hasOwnProperty.call(c,u)){var N=v?Object.getOwnPropertyDescriptor(c,u):null;N&&(N.get||N.set)?Object.defineProperty(n,u,N):n[u]=c[u]}return n.default=c,h&&h.set(c,n),n},g=function(c){if(typeof WeakMap!="function")return null;var A=new WeakMap,h=new WeakMap;return(g=function(v){return v?h:A})(c)},T.t0=O,T.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return T.t1=T.sent,d=(0,T.t0)(T.t1),T.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(6),e.e(13)]).then(e.bind(null,"gdfu"));case 9:return o=T.sent,T.t2=O,T.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(11)]).then(e.bind(null,"refC"));case 13:return T.t3=T.sent,p=(0,T.t2)(T.t3),r={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"}}},l=function(){var c=(0,p.useForm)(),A={"#":function(n){console.log("\u8868\u5355\u7684\u65F6\u65F6\u6570\u636E\u4E3A\uFF1A",n)},input1:function(n){c.setValueByPath("input2",n)}};return d.default.createElement(p.default,{form:c,schema:r,watch:A})},s=l,T.abrupt("return",s);case 19:case"end":return T.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.4.5-beta.19"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo"}},"watch-demo-1":{component:Object(W.dynamic)({loader:function(){var E=Object(V.a)(S.a.mark(function D(){var d,o,p,g,O,r,l,s,w,T;return S.a.wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return l=function(h,n){if(!n&&h&&h.__esModule)return h;if(h===null||typeof h!="object"&&typeof h!="function")return{default:h};var v=r(n);if(v&&v.has(h))return v.get(h);var u={},N=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var K in h)if(K!=="default"&&Object.prototype.hasOwnProperty.call(h,K)){var L=N?Object.getOwnPropertyDescriptor(h,K):null;L&&(L.get||L.set)?Object.defineProperty(u,K,L):u[K]=h[K]}return u.default=h,v&&v.set(h,u),u},r=function(h){if(typeof WeakMap!="function")return null;var n=new WeakMap,v=new WeakMap;return(r=function(N){return N?v:n})(h)},d=e("K+nK"),c.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return c.t0=d,c.next=8,e.e(14).then(e.t.bind(null,"4IMT",7));case 8:return c.t1=c.sent,o=(0,c.t0)(c.t1),c.t2=l,c.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return c.t3=c.sent,p=(0,c.t2)(c.t3),c.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(6),e.e(13)]).then(e.bind(null,"gdfu"));case 17:return g=c.sent,c.t4=l,c.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(11)]).then(e.bind(null,"refC"));case 21:return c.t5=c.sent,O=(0,c.t4)(c.t5),s={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"radio"}}}}},w=function(){var h=(0,O.useForm)(),n=function(N,K){K.length>0?alert("errorFields:"+JSON.stringify(K)):alert("formData:"+JSON.stringify(N,null,2))},v={input1:function(N){N.length>2?h.setSchemaByPath("obj1.select",function(K){var L=K.enumNames;return{enumNames:L.map(function(Z){return Z+"a"})}}):h.setSchemaByPath("obj1.select",{enumNames:["\u65E9","\u4E2D","\u665A"]})}};return p.default.createElement("div",null,p.default.createElement(O.default,{form:h,schema:s,onFinish:n,watch:v}),p.default.createElement(o.default,{type:"",style:{marginRight:8},onClick:function(){return h.setSchemaByPath("input2",{title:"\u7F16\u8F91\u6846",format:"textarea"})}},"\u5C06 input \u6539\u4E3A textarea"),p.default.createElement(o.default,{type:"primary",onClick:h.submit},"\u63D0\u4EA4"))},T=w,c.abrupt("return",T);case 27:case"end":return c.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.19"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo-1"}},"widget-demo":{component:Object(W.dynamic)({loader:function(){var E=Object(V.a)(S.a.mark(function D(){var d,o,p,g,O,r,l,s,w,T,P,c,A;return S.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return w=function(u,N){if(!N&&u&&u.__esModule)return u;if(u===null||typeof u!="object"&&typeof u!="function")return{default:u};var K=s(N);if(K&&K.has(u))return K.get(u);var L={},Z=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var G in u)if(G!=="default"&&Object.prototype.hasOwnProperty.call(u,G)){var de=Z?Object.getOwnPropertyDescriptor(u,G):null;de&&(de.get||de.set)?Object.defineProperty(L,G,de):L[G]=u[G]}return L.default=u,K&&K.set(u,L),L},s=function(u){if(typeof WeakMap!="function")return null;var N=new WeakMap,K=new WeakMap;return(s=function(Z){return Z?K:N})(u)},d=e("K+nK"),n.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return n.t0=d,n.next=8,e.e(14).then(e.t.bind(null,"4IMT",7));case 8:return n.t1=n.sent,o=(0,n.t0)(n.t1),n.next=12,Promise.all([e.e(3),e.e(21)]).then(e.t.bind(null,"cUip",7));case 12:return n.t2=d,n.next=15,Promise.all([e.e(0),e.e(14),e.e(20),e.e(24)]).then(e.t.bind(null,"iJl9",7));case 15:return n.t3=n.sent,p=(0,n.t2)(n.t3),n.t4=d,n.next=20,e.e(91).then(e.bind(null,"0Owb"));case 20:return n.t5=n.sent,g=(0,n.t4)(n.t5),n.t6=w,n.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return n.t7=n.sent,O=(0,n.t6)(n.t7),n.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(6),e.e(13)]).then(e.bind(null,"gdfu"));case 29:return r=n.sent,n.t8=w,n.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(11)]).then(e.bind(null,"refC"));case 33:return n.t9=n.sent,l=(0,n.t8)(n.t9),T={type:"object",properties:{string:{title:"\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6",type:"string",widget:"site"},select:{title:"\u5355\u9009",type:"number",enum:[1,2,3],enumNames:["\u9009\u98791","\u9009\u98792","\u9009\u98793"]}}},P=function(u){return console.log("widget props:",u),O.default.createElement(p.default,(0,g.default)({addonBefore:"http://",addonAfter:".com"},u))},c=function(){var u=(0,l.useForm)(),N=function(){};return O.default.createElement("div",null,O.default.createElement(l.default,{readOnly:!0,form:u,schema:T,widgets:{site:P},onFinish:function(L){return alert(JSON.stringify(L,null,2))}}),O.default.createElement(o.default,{type:"primary",onClick:u.submit},"\u63D0\u4EA4"))},A=c,n.abrupt("return",A);case 40:case"end":return n.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
  return <Input addonBefore="http://" addonAfter=".com" {...props} />;
};

const Demo = () => {
  const form = useForm();
  const handleSubmit = () => {};
  return (
    <div>
      <Form
        readOnly
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.19"},"react-dom":{version:">=16.8.0"}},identifier:"widget-demo"}},"schema-demo":{component:Object(W.dynamic)({loader:function(){var E=Object(V.a)(S.a.mark(function D(){var d,o,p,g,O;return S.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(18)]).then(e.bind(null,"c2mQ"));case 9:return l.t3=l.sent,p=(0,l.t2)(l.t3),l.next=13,e.e(19).then(e.bind(null,"8iYR"));case 13:return g=l.sent,O=function(){return o.default.createElement(p.default,{schema:g.basic})},l.abrupt("return",O);case 16:case"end":return l.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { basic } from '../json/schema';

export default () => <FR schema={basic} />;`},"demo/FR.jsx":{import:"../demo/FR",content:_},"json/schema.js":{import:"../json/schema",content:xe}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.19"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo"}},"schema-demo-1":{component:Object(W.dynamic)({loader:function(){var E=Object(V.a)(S.a.mark(function D(){var d,o,p,g,O;return S.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(18)]).then(e.bind(null,"c2mQ"));case 9:return l.t3=l.sent,p=(0,l.t2)(l.t3),l.next=13,e.e(19).then(e.bind(null,"8iYR"));case 13:return g=l.sent,O=function(){return o.default.createElement(p.default,{schema:g.titleTrick})},l.abrupt("return",O);case 16:case"end":return l.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { titleTrick } from '../json/schema';

export default () => <FR schema={titleTrick} />;`},"demo/FR.jsx":{import:"../demo/FR",content:_},"json/schema.js":{import:"../json/schema",content:xe}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.19"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo-1"}},"docs-playground":{component:Object(W.dynamic)({loader:function(){var E=Object(V.a)(S.a.mark(function D(){return S.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(27)]).then(e.bind(null,"BASV"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:ye},"main.js":{import:"./main",content:pn},"json/simplest.json":{import:"./json/simplest.json",content:Cn},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:nn},"monaco/index.js":{import:"./monaco",content:Ye},"suggestionsMap.js":{import:"./suggestionsMap",content:Ge},"index.css":{import:"./index.css",content:xn}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:"^17.x"},"react-dom":{version:">=16.9.0"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.4.5-beta.19"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-monaco-editor":{version:"0.43.0"},"@types/react":{version:"^17.x"}},identifier:"docs-playground"}},"table-render-advanced":{component:Object(W.dynamic)({loader:function(){var E=Object(V.a)(S.a.mark(function D(){return S.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(27)]).then(e.bind(null,"7ZP+"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{tsx:Bn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.1"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"}},transform:!0,defaultShowCode:!0,identifier:"table-render-advanced"}},"table-render-demo":{component:Object(W.dynamic)({loader:function(){var E=Object(V.a)(S.a.mark(function D(){var d,o,p,g,O,r,l,s,w;return S.a.wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return d=e("K+nK"),P.t0=d,P.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return P.t1=P.sent,o=(0,P.t0)(P.t1),P.next=8,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(65)]).then(e.bind(null,"P2DI"));case 8:for(p=P.sent,g=[],O=0;O<6;O++)g.push({id:O.toString(),title:"\u6807\u9898".concat(O+1),created_at:new Date().getTime()});return r={type:"object",properties:{string:{title:"\u6807\u9898",type:"string","ui:width":"30%"},created_at:{title:"\u521B\u5EFA\u65F6\u95F4",type:"string",format:"date","ui:width":"30%"}}},l=[{title:"\u6807\u9898",dataIndex:"title"},{title:"\u521B\u5EFA\u65F6\u95F4",key:"since",dataIndex:"created_at",valueType:"date"},{title:"\u64CD\u4F5C",render:function(A,h){return o.default.createElement("a",{onClick:function(){return alert(A.title)}},"\u7F16\u8F91")}}],s=function(){var A=function(){return{rows:g,total:g.length}};return o.default.createElement(p.TableProvider,null,o.default.createElement(p.Search,{schema:r,api:A}),o.default.createElement(p.Table,{headerTitle:"\u6700\u7B80\u8868\u683C",columns:l,rowKey:"id"}))},w=s,P.abrupt("return",w);case 16:case"end":return P.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Table, Search, TableProvider } from 'table-render';

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
      'ui:width': '30%',
    },
    created_at: {
      title: '\u521B\u5EFA\u65F6\u95F4',
      type: 'string',
      format: 'date',
      'ui:width': '30%',
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
    <TableProvider>
      <Search schema={schema} api={searchApi} />
      <Table headerTitle="\u6700\u7B80\u8868\u683C" columns={columns} rowKey="id" />
    </TableProvider>
  );
};

export default Wrapper;`}},dependencies:{react:{version:">=16.8.0"},"table-render":{version:"1.1.1"},antd:{version:"4.x",css:"antd/dist/antd.css"}},transform:!0,defaultShowCode:!0,identifier:"table-render-demo"}},"generator-demo":{component:Object(W.dynamic)({loader:function(){var E=Object(V.a)(S.a.mark(function D(){var d,o,p,g,O,r;return S.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(64)]).then(e.bind(null,"nYSz"));case 9:return s.t3=s.sent,p=(0,s.t2)(s.t3),g={type:"object",properties:{inputName:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string"}}},O=function(){return o.default.createElement("div",{style:{height:"80vh"}},o.default.createElement(p.default,{defaultValue:g}))},r=O,s.abrupt("return",r);case 15:case"end":return s.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.1.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"generator-demo"}},"generator-modal":{component:Object(W.dynamic)({loader:function(){var E=Object(V.a)(S.a.mark(function D(){return S.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(27)]).then(e.bind(null,"PPgD"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:Dn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.1.2"},"react-dom":{version:">=16.9.0"}},identifier:"generator-modal"}},"generator-transformer":{component:Object(W.dynamic)({loader:function(){var E=Object(V.a)(S.a.mark(function D(){return S.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(27)]).then(e.bind(null,"jktF"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:We}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.1.2"},"react-dom":{version:">=16.9.0"}},identifier:"generator-transformer"}},"generator-settings":{component:Object(W.dynamic)({loader:function(){var E=Object(V.a)(S.a.mark(function D(){return S.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(27)]).then(e.bind(null,"M63W"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:_n}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.1.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-settings"}},"generator-playground":{component:Object(W.dynamic)({loader:function(){var E=Object(V.a)(S.a.mark(function D(){return S.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(27)]).then(e.bind(null,"TYW4"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},D)}));function I(){return E.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:Vn},"index.less":{import:"./index.less",content:et}},dependencies:{react:{version:">=16.8.0"},umi:{version:"3.4.19"},"fr-generator":{version:"2.1.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-playground"}}}},TIsu:function(Fn,yn,e){},Zs1V:function(Fn){Fn.exports=JSON.parse("{}")},p8sG:function(Fn,yn,e){"use strict";Fn.exports=e("80pN")}}]);
