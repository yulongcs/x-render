(window.webpackJsonp=window.webpackJsonp||[]).push([[49,10],{"0zqC":function(Nn,hn,e){"use strict";e.r(hn);var z=e("tJVT"),n=e("q1tI"),h=e.n(n),L=e("wx14"),me=e("rePB"),W=e("ODXe"),tn=e("U8pU"),Ne=e("Ff2n"),de=e("VTBJ"),rt=e("TSYQ"),Ie=e.n(rt),Bn=e("Zm9Q"),Tn=e("5Z9U"),On=e("6cGi"),fn=e("KQm4"),Qe=e("wgJM"),Wn=e("t23M");function Kn(t){var i=Object(n.useRef)(),c=Object(n.useRef)(!1);function E(){for(var C=arguments.length,y=new Array(C),S=0;S<C;S++)y[S]=arguments[S];c.current||(Qe.a.cancel(i.current),i.current=Object(Qe.a)(function(){t.apply(void 0,y)}))}return Object(n.useEffect)(function(){return function(){c.current=!0,Qe.a.cancel(i.current)}},[]),E}function Sn(t){var i=Object(n.useRef)([]),c=Object(n.useState)({}),E=Object(W.a)(c,2),C=E[1],y=Object(n.useRef)(typeof t=="function"?t():t),S=Kn(function(){var w=y.current;i.current.forEach(function($){w=$(w)}),i.current=[],y.current=w,C({})});function R(w){i.current.push(w),S()}return[y.current,R]}var we=e("4IlW");function xn(t,i){var c,E=t.prefixCls,C=t.id,y=t.active,S=t.rtl,R=t.tab,w=R.key,$=R.tab,V=R.disabled,J=R.closeIcon,G=t.tabBarGutter,le=t.tabPosition,X=t.closable,Q=t.renderWrapper,oe=t.removeAriaLabel,x=t.editable,q=t.onClick,re=t.onRemove,Y=t.onFocus,se="".concat(E,"-tab");n.useEffect(function(){return re},[]);var k={};le==="top"||le==="bottom"?k[S?"marginLeft":"marginRight"]=G:k.marginBottom=G;var be=x&&X!==!1&&!V;function ee(ie){V||q(ie)}function ce(ie){ie.preventDefault(),ie.stopPropagation(),x.onEdit("remove",{key:w,event:ie})}var fe=n.createElement("div",{key:w,ref:i,className:Ie()(se,(c={},Object(me.a)(c,"".concat(se,"-with-remove"),be),Object(me.a)(c,"".concat(se,"-active"),y),Object(me.a)(c,"".concat(se,"-disabled"),V),c)),style:k,onClick:ee},n.createElement("div",{role:"tab","aria-selected":y,id:C&&"".concat(C,"-tab-").concat(w),className:"".concat(se,"-btn"),"aria-controls":C&&"".concat(C,"-panel-").concat(w),"aria-disabled":V,tabIndex:V?null:0,onClick:function(H){H.stopPropagation(),ee(H)},onKeyDown:function(H){[we.a.SPACE,we.a.ENTER].includes(H.which)&&(H.preventDefault(),ee(H))},onFocus:Y},$),be&&n.createElement("button",{type:"button","aria-label":oe||"remove",tabIndex:0,className:"".concat(se,"-remove"),onClick:function(H){H.stopPropagation(),ce(H)}},J||x.removeIcon||"\xD7"));return Q&&(fe=Q(fe)),fe}var Ln=n.forwardRef(xn),qn={width:0,height:0,left:0,top:0};function ct(t,i,c){return Object(n.useMemo)(function(){for(var E,C=new Map,y=i.get((E=t[0])===null||E===void 0?void 0:E.key)||qn,S=y.left+y.width,R=0;R<t.length;R+=1){var w=t[R].key,$=i.get(w);if(!$){var V;$=i.get((V=t[R-1])===null||V===void 0?void 0:V.key)||qn}var J=C.get(w)||Object(de.a)({},$);J.right=S-J.left-J.width,C.set(w,J)}return C},[t.map(function(E){return E.key}).join("_"),i,c])}var D={width:0,height:0,left:0,top:0,right:0};function P(t,i,c,E,C){var y=C.tabs,S=C.tabPosition,R=C.rtl,w,$,V;["top","bottom"].includes(S)?(w="width",$=R?"right":"left",V=Math.abs(i.left)):(w="height",$="top",V=-i.top);var J=i[w],G=c[w],le=E[w],X=J;return G+le>J&&(X=J-le),Object(n.useMemo)(function(){if(!y.length)return[0,0];for(var Q=y.length,oe=Q,x=0;x<Q;x+=1){var q=t.get(y[x].key)||D;if(q[$]+q[w]>V+X){oe=x-1;break}}for(var re=0,Y=Q-1;Y>=0;Y-=1){var se=t.get(y[Y].key)||D;if(se[$]<V){re=Y+1;break}}return[re,oe]},[t,V,X,S,y.map(function(Q){return Q.key}).join("_"),R])}var F=e("Gytx"),d=e.n(F),s=e("Kwbf");function v(t,i){var c=t.prefixCls,E=t.invalidate,C=t.item,y=t.renderItem,S=t.responsive,R=t.registerSize,w=t.itemKey,$=t.className,V=t.style,J=t.children,G=t.display,le=t.order,X=t.component,Q=X===void 0?"div":X,oe=Object(Ne.a)(t,["prefixCls","invalidate","item","renderItem","responsive","registerSize","itemKey","className","style","children","display","order","component"]),x=S&&!G;function q(be){R(w,be)}n.useEffect(function(){return function(){q(null)}},[]);var re=y&&C!==void 0?y(C):J,Y;E||(Y={opacity:x?0:1,height:x?0:void 0,overflowY:x?"hidden":void 0,order:S?le:void 0,pointerEvents:x?"none":void 0});var se={};x&&(se["aria-hidden"]=!0);var k=n.createElement(Q,Object(L.a)({className:Ie()(!E&&c,$),style:Object(de.a)(Object(de.a)({},Y),V)},se,oe,{ref:i}),re);return S&&(k=n.createElement(Wn.default,{onResize:function(ee){var ce=ee.offsetWidth;q(ce)}},k)),k}var b=n.forwardRef(v);b.displayName="Item";var O=b;function a(){var t=Object(n.useState)({}),i=Object(W.a)(t,2),c=i[1],E=Object(n.useRef)([]),C=Object(n.useRef)(!1),y=0,S=0;Object(n.useEffect)(function(){return function(){C.current=!0}},[]);function R(w){var $=y;y+=1,E.current.length<$+1&&(E.current[$]=w);var V=E.current[$];function J(G){E.current[$]=typeof G=="function"?G(E.current[$]):G,Qe.a.cancel(S),S=Object(Qe.a)(function(){C.current||c({})})}return[V,J]}return R}var o=function(i,c){var E=n.useContext(A);if(!E){var C=i.component,y=C===void 0?"div":C,S=Object(Ne.a)(i,["component"]);return n.createElement(y,Object(L.a)({},S,{ref:c}))}var R=E.className,w=Object(Ne.a)(E,["className"]),$=i.className,V=Object(Ne.a)(i,["className"]);return n.createElement(A.Provider,{value:null},n.createElement(O,Object(L.a)({ref:c,className:Ie()(R,$)},w,V)))},l=n.forwardRef(o);l.displayName="RawItem";var B=l,A=n.createContext(null),j="responsive",u="invalidate";function N(t){return"+ ".concat(t.length," ...")}function f(t,i){var c=t.prefixCls,E=c===void 0?"rc-overflow":c,C=t.data,y=C===void 0?[]:C,S=t.renderItem,R=t.renderRawItem,w=t.itemKey,$=t.itemWidth,V=$===void 0?10:$,J=t.ssr,G=t.style,le=t.className,X=t.maxCount,Q=t.renderRest,oe=t.renderRawRest,x=t.suffix,q=t.component,re=q===void 0?"div":q,Y=t.itemComponent,se=t.onVisibleChange,k=Object(Ne.a)(t,["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"]),be=a(),ee=J==="full",ce=be(null),fe=Object(W.a)(ce,2),ie=fe[0],H=fe[1],ue=ie||0,ge=be(new Map),he=Object(W.a)(ge,2),Se=he[0],We=he[1],Ee=be(0),Oe=Object(W.a)(Ee,2),Ke=Oe[0],Be=Oe[1],Pe=be(0),De=Object(W.a)(Pe,2),$e=De[0],qe=De[1],Ve=be(0),xe=Object(W.a)(Ve,2),Xe=xe[0],Le=xe[1],Rn=Object(n.useState)(null),an=Object(W.a)(Rn,2),Ye=an[0],on=an[1],yn=Object(n.useState)(null),bn=Object(W.a)(yn,2),Ae=bn[0],Je=bn[1],_e=n.useMemo(function(){return Ae===null&&ee?Number.MAX_SAFE_INTEGER:Ae||0},[Ae,ie]),Ze=Object(n.useState)(!1),Mn=Object(W.a)(Ze,2),zn=Mn[0],wn=Mn[1],rn="".concat(E,"-item"),Fn=Math.max(Ke,$e),un=y.length&&X===j,Dn=X===u,en=un||typeof X=="number"&&y.length>X,ln=Object(n.useMemo)(function(){var ve=y;return un?ie===null&&ee?ve=y:ve=y.slice(0,Math.min(y.length,ue/V)):typeof X=="number"&&(ve=y.slice(0,X)),ve},[y,V,ie,X,un]),jn=Object(n.useMemo)(function(){return un?y.slice(_e+1):y.slice(ln.length)},[y,ln,un,_e]),cn=Object(n.useCallback)(function(ve,Re){var Me;return typeof w=="function"?w(ve):(Me=w&&(ve==null?void 0:ve[w]))!==null&&Me!==void 0?Me:Re},[w]),ke=Object(n.useCallback)(S||function(ve){return ve},[S]);function He(ve,Re){Je(ve),Re||(wn(ve<y.length-1),se==null||se(ve))}function Gn(ve,Re){H(Re.clientWidth)}function Jn(ve,Re){We(function(Me){var nn=new Map(Me);return Re===null?nn.delete(ve):nn.set(ve,Re),nn})}function nt(ve,Re){qe(Re),Be($e)}function En(ve,Re){Le(Re)}function vn(ve){return Se.get(cn(ln[ve],ve))}n.useLayoutEffect(function(){if(ue&&Fn&&ln){var ve=Xe,Re=ln.length,Me=Re-1;if(!Re){He(0),on(null);return}for(var nn=0;nn<Re;nn+=1){var Yn=vn(nn);if(Yn===void 0){He(nn-1,!0);break}if(ve+=Yn,nn===Me-1&&ve+vn(Me)<=ue){He(Me),on(null);break}else if(ve+Fn>ue){He(nn-1),on(ve-Yn-Xe+$e);break}else if(nn===Me){He(Me),on(ve-Xe);break}}x&&vn(0)+Xe>ue&&on(null)}},[ue,Se,$e,Xe,cn,ln]);var Hn=zn&&!!jn.length,Cn={};Ye!==null&&un&&(Cn={position:"absolute",left:Ye,top:0});var mn={prefixCls:rn,responsive:un,component:Y,invalidate:Dn},Xn=R?function(ve,Re){var Me=cn(ve,Re);return n.createElement(A.Provider,{key:Me,value:Object(de.a)(Object(de.a)({},mn),{},{order:Re,item:ve,itemKey:Me,registerSize:Jn,display:Re<=_e})},R(ve,Re))}:function(ve,Re){var Me=cn(ve,Re);return n.createElement(O,Object(L.a)({},mn,{order:Re,key:Me,item:ve,renderItem:ke,itemKey:Me,registerSize:Jn,display:Re<=_e}))},Pn,Qn={order:Hn?_e:Number.MAX_SAFE_INTEGER,className:"".concat(rn,"-rest"),registerSize:nt,display:Hn};if(oe)oe&&(Pn=n.createElement(A.Provider,{value:Object(de.a)(Object(de.a)({},mn),Qn)},oe(jn)));else{var dn=Q||N;Pn=n.createElement(O,Object(L.a)({},mn,Qn),typeof dn=="function"?dn(jn):dn)}var In=n.createElement(re,Object(L.a)({className:Ie()(!Dn&&E,le),style:G,ref:i},k),ln.map(Xn),en?Pn:null,x&&n.createElement(O,Object(L.a)({},mn,{order:_e,className:"".concat(rn,"-suffix"),registerSize:En,display:!0,style:Cn}),x));return un&&(In=n.createElement(Wn.default,{onResize:Gn},In)),In}var r=n.forwardRef(f);r.displayName="Overflow",r.Item=B,r.RESPONSIVE=j,r.INVALIDATE=u;var g=r,p=g,T=e("1OyB"),M=e("vuIU"),U=e("Ji7U"),ne=e("LK+K"),ae=e("bT9E"),ye=e("YrtM"),je=n.createContext(null);function Te(t,i){var c=Object(de.a)({},t);return Object.keys(i).forEach(function(E){var C=i[E];C!==void 0&&(c[E]=C)}),c}function gn(t){var i=t.children,c=t.locked,E=Object(Ne.a)(t,["children","locked"]),C=n.useContext(je),y=Object(ye.a)(function(){return Te(C,E)},[C,E],function(S,R){return!c&&(S[0]!==R[0]||!d()(S[1],R[1]))});return n.createElement(je.Provider,{value:y},i)}function $n(t,i,c,E){var C=n.useContext(je),y=C.activeKey,S=C.onActive,R=C.onInactive,w={active:y===t};return i||(w.onMouseEnter=function($){c==null||c({key:t,domEvent:$}),S(t)},w.onMouseLeave=function($){E==null||E({key:t,domEvent:$}),R(t)}),w}function _n(t){var i=t.item,c=Object(Ne.a)(t,["item"]);return Object.defineProperty(c,"item",{get:function(){return Object(s.a)(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),i}}),c}function m(t){var i=t.icon,c=t.props,E=t.children,C;return typeof i=="function"?C=n.createElement(i,Object(de.a)({},c)):C=i,C||E||null}function I(t){var i=n.useContext(je),c=i.mode,E=i.rtl,C=i.inlineIndent;if(c!=="inline")return null;var y=t;return E?{paddingRight:y*C}:{paddingLeft:y*C}}var K=[],pe=n.createContext(null);function _(){return n.useContext(pe)}var Fe=n.createContext(K);function Ue(t){var i=n.useContext(Fe);return n.useMemo(function(){return t!==void 0?[].concat(Object(fn.a)(i),[t]):i},[i,t])}var Ge=n.createContext(null),xt=n.createContext(null);function zt(t,i){return t===void 0?null:"".concat(t,"-").concat(i)}function Gt(t){var i=n.useContext(xt);return zt(i,t)}var ba=function(t){Object(U.a)(c,t);var i=Object(ne.a)(c);function c(){return Object(T.a)(this,c),i.apply(this,arguments)}return Object(M.a)(c,[{key:"render",value:function(){var C=this.props,y=C.title,S=C.attribute,R=C.elementRef,w=Object(Ne.a)(C,["title","attribute","elementRef"]),$=Object(ae.a)(w,["eventKey"]);return Object(s.a)(!S,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),n.createElement(p.Item,Object(L.a)({},S,{title:typeof y=="string"?y:void 0},$,{ref:R}))}}]),c}(n.Component),Ea=function(i){var c,E=i.style,C=i.className,y=i.eventKey,S=i.disabled,R=i.itemIcon,w=i.children,$=i.role,V=i.onMouseEnter,J=i.onMouseLeave,G=i.onClick,le=i.onKeyDown,X=i.onFocus,Q=Object(Ne.a)(i,["style","className","eventKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"]),oe=Gt(y),x=n.useContext(je),q=x.prefixCls,re=x.onItemClick,Y=x.disabled,se=x.overflowDisabled,k=x.itemIcon,be=x.selectedKeys,ee=x.onActive,ce="".concat(q,"-item"),fe=n.useRef(),ie=n.useRef(),H=Y||S,ue=Ue(y),ge=function(Ve){return{key:y,keyPath:ue,item:fe.current,domEvent:Ve}},he=R||k,Se=$n(y,H,V,J),We=Se.active,Ee=Object(Ne.a)(Se,["active"]),Oe=be.includes(y),Ke=I(ue.length),Be=function(Ve){if(!H){var xe=ge(Ve);G==null||G(_n(xe)),re(xe)}},Pe=function(Ve){if(le==null||le(Ve),Ve.which===we.a.ENTER){var xe=ge(Ve);G==null||G(_n(xe)),re(xe)}},De=function(Ve){ee(y),X==null||X(Ve)},$e={};return i.role==="option"&&($e["aria-selected"]=Oe),n.createElement(ba,Object(L.a)({ref:fe,elementRef:ie,role:$===null?"none":$||"menuitem",tabIndex:S?null:-1,"data-menu-id":se&&oe?null:oe},Q,Ee,$e,{component:"li","aria-disabled":S,style:Object(de.a)(Object(de.a)({},Ke),E),className:Ie()(ce,(c={},Object(me.a)(c,"".concat(ce,"-active"),We),Object(me.a)(c,"".concat(ce,"-selected"),Oe),Object(me.a)(c,"".concat(ce,"-disabled"),H),c),C),onClick:Be,onKeyDown:Pe,onFocus:De}),w,n.createElement(m,{props:Object(de.a)(Object(de.a)({},i),{},{isSelected:Oe}),icon:he}))};function Ca(t){var i=t.eventKey,c=_(),E=Ue(i);return n.useEffect(function(){if(c)return c.registerPath(i,E),function(){c.unregisterPath(i,E)}},[E]),c?null:n.createElement(Ea,t)}var Dt=Ca;function jt(t,i){return Object(Bn.a)(t).map(function(c,E){if(n.isValidElement(c)){var C=c.key;return C==null&&(C="tmp_key-".concat([].concat(Object(fn.a)(i),[E]).join("-"))),n.cloneElement(c,{key:C,eventKey:C})}return c})}function et(t){var i=n.useRef(t);i.current=t;var c=n.useCallback(function(){for(var E,C=arguments.length,y=new Array(C),S=0;S<C;S++)y[S]=arguments[S];return(E=i.current)===null||E===void 0?void 0:E.call.apply(E,[i].concat(y))},[]);return t?c:void 0}var Oa=function(i,c){var E=i.className,C=i.children,y=Object(Ne.a)(i,["className","children"]),S=n.useContext(je),R=S.prefixCls,w=S.mode;return n.createElement("ul",Object(L.a)({className:Ie()(R,"".concat(R,"-sub"),"".concat(R,"-").concat(w==="inline"?"inline":"vertical"),E)},y,{"data-menu-list":!0,ref:c}),C)},Jt=n.forwardRef(Oa);Jt.displayName="SubMenuList";var Ht=Jt,Sa=e("uciX"),Vn={adjustX:1,adjustY:1},Xt={topLeft:{points:["bl","tl"],overflow:Vn,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Vn,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:Vn,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:Vn,offset:[4,0]}},Ra={topLeft:{points:["bl","tl"],overflow:Vn,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Vn,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:Vn,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:Vn,offset:[4,0]}},fr=Xt;function Qt(t,i,c){if(i)return i;if(c)return c[t]||c.other}var Fa={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function Da(t){var i=t.prefixCls,c=t.visible,E=t.children,C=t.popup,y=t.popupClassName,S=t.popupOffset,R=t.disabled,w=t.mode,$=t.onVisibleChange,V=n.useContext(je),J=V.getPopupContainer,G=V.rtl,le=V.subMenuOpenDelay,X=V.subMenuCloseDelay,Q=V.builtinPlacements,oe=V.triggerSubMenuAction,x=V.forceSubMenuRender,q=V.motion,re=V.defaultMotions,Y=n.useState(!1),se=Object(W.a)(Y,2),k=se[0],be=se[1],ee=G?Object(de.a)(Object(de.a)({},Ra),Q):Object(de.a)(Object(de.a)({},Xt),Q),ce=Fa[w],fe=Qt(w,q,re),ie=Object(de.a)(Object(de.a)({},fe),{},{leavedClassName:"".concat(i,"-hidden"),removeOnLeave:!1,motionAppear:!0}),H=n.useRef();return n.useEffect(function(){return H.current=Object(Qe.a)(function(){be(c)}),function(){Qe.a.cancel(H.current)}},[c]),n.createElement(Sa.a,{prefixCls:i,popupClassName:Ie()("".concat(i,"-popup"),Object(me.a)({},"".concat(i,"-rtl"),G),y),stretch:w==="horizontal"?"minWidth":null,getPopupContainer:J,builtinPlacements:ee,popupPlacement:ce,popupVisible:k,popup:C,popupAlign:S&&{offset:S},action:R?[]:[oe],mouseEnterDelay:le,mouseLeaveDelay:X,onPopupVisibleChange:$,forceRender:x,popupMotion:ie},E)}var ja=e("8XRh");function Pa(t){var i=t.id,c=t.open,E=t.keyPath,C=t.children,y="inline",S=n.useContext(je),R=S.prefixCls,w=S.forceSubMenuRender,$=S.motion,V=S.defaultMotions,J=S.mode,G=n.useRef(!1);G.current=J===y;var le=n.useState(!G.current),X=Object(W.a)(le,2),Q=X[0],oe=X[1],x=G.current?c:!1;n.useEffect(function(){G.current&&oe(!1)},[J]);var q=Object(de.a)({},Qt(y,$,V));E.length>1&&(q.motionAppear=!1);var re=q.onVisibleChanged;return q.onVisibleChanged=function(Y){return!G.current&&!Y&&oe(!0),re==null?void 0:re(Y)},Q?null:n.createElement(gn,{mode:y,locked:!G.current},n.createElement(ja.default,Object(L.a)({visible:x},q,{forceRender:w,removeOnLeave:!1,leavedClassName:"".concat(R,"-hidden")}),function(Y){var se=Y.className,k=Y.style;return n.createElement(Ht,{id:i,className:se,style:k},C)}))}var Ia=function(i){var c,E=i.style,C=i.className,y=i.title,S=i.eventKey,R=i.disabled,w=i.internalPopupClose,$=i.children,V=i.itemIcon,J=i.expandIcon,G=i.popupClassName,le=i.popupOffset,X=i.onClick,Q=i.onMouseEnter,oe=i.onMouseLeave,x=i.onTitleClick,q=i.onTitleMouseEnter,re=i.onTitleMouseLeave,Y=Object(Ne.a)(i,["style","className","title","eventKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"]),se=Gt(S),k=n.useContext(je),be=k.prefixCls,ee=k.mode,ce=k.openKeys,fe=k.disabled,ie=k.overflowDisabled,H=k.activeKey,ue=k.selectedKeys,ge=k.itemIcon,he=k.expandIcon,Se=k.onItemClick,We=k.onOpenChange,Ee=k.onActive,Oe=n.useContext(Ge),Ke=Oe.isSubPathKey,Be=Ue(),Pe="".concat(be,"-submenu"),De=fe||R,$e=n.useRef(),qe=n.useRef(),Ve=V||ge,xe=J||he,Xe=ce.includes(S),Le=!ie&&Xe,Rn=Ke(ue,S),an=$n(S,De,q,re),Ye=an.active,on=Object(Ne.a)(an,["active"]),yn=n.useState(!1),bn=Object(W.a)(yn,2),Ae=bn[0],Je=bn[1],_e=function(He){De||Je(He)},Ze=function(He){_e(!0),Q==null||Q({key:S,domEvent:He})},Mn=function(He){_e(!1),oe==null||oe({key:S,domEvent:He})},zn=n.useMemo(function(){return Ye||(ee!=="inline"?Ae||Ke([H],S):!1)},[ee,Ye,H,Ae,S,Ke]),wn=I(Be.length),rn=function(He){De||(x==null||x({key:S,domEvent:He}),ee==="inline"&&We(S,!Xe))},Fn=et(function(ke){X==null||X(_n(ke)),Se(ke)}),un=function(He){ee!=="inline"&&We(S,He)},Dn=function(){Ee(S)},en=se&&"".concat(se,"-popup"),ln=n.createElement("div",Object(L.a)({role:"menuitem",style:wn,className:"".concat(Pe,"-title"),tabIndex:De?null:-1,ref:$e,title:typeof y=="string"?y:null,"data-menu-id":ie&&se?null:se,"aria-expanded":Le,"aria-haspopup":!0,"aria-controls":en,"aria-disabled":De,onClick:rn,onFocus:Dn},on),y,n.createElement(m,{icon:ee!=="horizontal"?xe:null,props:Object(de.a)(Object(de.a)({},i),{},{isOpen:Le,isSubMenu:!0})},n.createElement("i",{className:"".concat(Pe,"-arrow")}))),jn=n.useRef(ee);if(ee!=="inline"&&(jn.current=Be.length>1?"vertical":ee),!ie){var cn=jn.current;ln=n.createElement(Da,{mode:cn,prefixCls:Pe,visible:!w&&Le&&ee!=="inline",popupClassName:G,popupOffset:le,popup:n.createElement(gn,{mode:cn},n.createElement(Ht,{id:en,ref:qe},$)),disabled:De,onVisibleChange:un},ln)}return n.createElement(gn,{onItemClick:Fn,mode:ee==="horizontal"?"vertical":ee,itemIcon:Ve,expandIcon:xe},n.createElement(p.Item,Object(L.a)({role:"none"},Y,{component:"li",style:E,className:Ie()(Pe,"".concat(Pe,"-").concat(ee),C,(c={},Object(me.a)(c,"".concat(Pe,"-open"),Le),Object(me.a)(c,"".concat(Pe,"-active"),zn),Object(me.a)(c,"".concat(Pe,"-selected"),Rn),Object(me.a)(c,"".concat(Pe,"-disabled"),De),c)),onMouseEnter:Ze,onMouseLeave:Mn}),ln,!ie&&n.createElement(Pa,{id:en,open:Le,keyPath:Be},$)))};function Yt(t){var i=t.eventKey,c=t.children,E=Ue(i),C=jt(c,E),y=_();n.useEffect(function(){if(y)return y.registerPath(i,E),function(){y.unregisterPath(i,E)}},[E]);var S;return y?S=C:S=n.createElement(Ia,t,C),n.createElement(Fe.Provider,{value:E},S)}var Aa=e("x/xZ");function Zt(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Object(Aa.a)(t)){var c=t.nodeName.toLowerCase(),E=["input","select","textarea","button"].includes(c)||t.isContentEditable||c==="a"&&!!t.getAttribute("href"),C=t.getAttribute("tabindex"),y=Number(C),S=null;return C&&!Number.isNaN(y)?S=y:E&&S===null&&(S=0),E&&t.disabled&&(S=null),S!==null&&(S>=0||i&&S<0)}return!1}function kt(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,c=Object(fn.a)(t.querySelectorAll("*")).filter(function(E){return Zt(E,i)});return Zt(t,i)&&c.unshift(t),c}var mt=null;function pr(){mt=document.activeElement}function vr(){mt=null}function hr(){if(mt)try{mt.focus()}catch(t){}}function gr(t,i){if(i.keyCode===9){var c=kt(t),E=c[i.shiftKey?0:c.length-1],C=E===document.activeElement||t===document.activeElement;if(C){var y=c[i.shiftKey?c.length-1:0];y.focus(),i.preventDefault()}}}var Pt=we.a.LEFT,It=we.a.RIGHT,At=we.a.UP,ft=we.a.DOWN,pt=we.a.ENTER,qt=we.a.ESC,_t=[At,ft,Pt,It];function Na(t,i,c,E){var C,y,S,R,w="prev",$="next",V="children",J="parent";if(t==="inline"&&E===pt)return{inlineTrigger:!0};var G=(C={},Object(me.a)(C,At,w),Object(me.a)(C,ft,$),C),le=(y={},Object(me.a)(y,Pt,c?$:w),Object(me.a)(y,It,c?w:$),Object(me.a)(y,ft,V),Object(me.a)(y,pt,V),y),X=(S={},Object(me.a)(S,At,w),Object(me.a)(S,ft,$),Object(me.a)(S,pt,V),Object(me.a)(S,qt,J),Object(me.a)(S,Pt,c?V:J),Object(me.a)(S,It,c?J:V),S),Q={inline:G,horizontal:le,vertical:X,inlineSub:G,horizontalSub:X,verticalSub:X},oe=(R=Q["".concat(t).concat(i?"":"Sub")])===null||R===void 0?void 0:R[E];switch(oe){case w:return{offset:-1,sibling:!0};case $:return{offset:1,sibling:!0};case J:return{offset:-1,sibling:!1};case V:return{offset:1,sibling:!1};default:return null}}function Ba(t){for(var i=t;i;){if(i.getAttribute("data-menu-list"))return i;i=i.parentElement}return null}function Ta(t,i){for(var c=t||document.activeElement;c;){if(i.has(c))return c;c=c.parentElement}return null}function Ka(t,i){var c=kt(t,!0);return c.filter(function(E){return i.has(E)})}function ea(t,i,c){var E=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!t)return null;var C=Ka(t,i),y=C.length,S=C.findIndex(function(R){return c===R});return E<0?S===-1?S=y-1:S-=1:E>0&&(S+=1),S=(S+y)%y,C[S]}function Ma(t,i,c,E,C,y,S,R,w,$){var V=n.useRef(),J=n.useRef();J.current=i;var G=function(){Qe.a.cancel(V.current)};return n.useEffect(function(){return function(){G()}},[]),function(le){var X=le.which;if([].concat(_t,[pt,qt]).includes(X)){var Q,oe,x,q=function(){Q=new Set,oe=new Map,x=new Map;var ge=y();return ge.forEach(function(he){var Se=document.querySelector("[data-menu-id='".concat(zt(E,he),"']"));Se&&(Q.add(Se),x.set(Se,he),oe.set(he,Se))}),Q};q();var re=oe.get(i),Y=Ta(re,Q),se=x.get(Y),k=Na(t,S(se,!0).length===1,c,X);if(!k)return;_t.includes(X)&&le.preventDefault();var be=function(ge){if(ge){var he=ge,Se=ge.querySelector("a");(Se==null?void 0:Se.getAttribute("href"))&&(he=Se);var We=x.get(ge);R(We),G(),V.current=Object(Qe.a)(function(){J.current===We&&he.focus()})}};if(k.sibling||!Y){var ee;!Y||t==="inline"?ee=C.current:ee=Ba(Y);var ce=ea(ee,Q,Y,k.offset);be(ce)}else if(k.inlineTrigger)w(se);else if(k.offset>0)w(se,!0),G(),V.current=Object(Qe.a)(function(){q();var ue=Y.getAttribute("aria-controls"),ge=document.getElementById(ue),he=ea(ge,Q);be(he)},5);else if(k.offset<0){var fe=S(se,!0),ie=fe[fe.length-2],H=oe.get(ie);w(ie,!1),be(H)}}$==null||$(le)}}var wa=Math.random().toFixed(5).toString().slice(2),na=0;function Wa(t){var i=Object(On.a)(t,{value:t}),c=Object(W.a)(i,2),E=c[0],C=c[1];return n.useEffect(function(){na+=1;var y="".concat(wa,"-").concat(na);C("rc-menu-uuid-".concat(y))},[]),E}var yr=e("p8sG");function La(t){Promise.resolve().then(t)}var Nt="__RC_UTIL_PATH_SPLIT__",ta=function(i){return i.join(Nt)},$a=function(i){return i.split(Nt)},Bt="rc-menu-more";function Va(){var t=n.useState({}),i=Object(W.a)(t,2),c=i[1],E=Object(n.useRef)(new Map),C=Object(n.useRef)(new Map),y=n.useState([]),S=Object(W.a)(y,2),R=S[0],w=S[1],$=Object(n.useRef)(0),V=Object(n.useCallback)(function(x,q){var re=ta(q);C.current.set(re,x),E.current.set(x,re),$.current+=1;var Y=$.current;La(function(){Y===$.current&&c({})})},[]),J=Object(n.useCallback)(function(x,q){var re=ta(q);C.current.delete(re),E.current.delete(x)},[]),G=Object(n.useCallback)(function(x){w(x)},[]),le=Object(n.useCallback)(function(x,q){var re=E.current.get(x)||"",Y=$a(re);return q&&R.includes(Y[0])&&Y.unshift(Bt),Y},[R]),X=Object(n.useCallback)(function(x,q){return x.some(function(re){var Y=le(re,!0);return Y.includes(q)})},[le]),Q=function(){var q=Object(fn.a)(E.current.keys());return R.length&&q.push(Bt),q},oe=Object(n.useCallback)(function(x){var q="".concat(E.current.get(x)).concat(Nt),re=new Set;return Object(fn.a)(C.current.keys()).forEach(function(Y){Y.startsWith(q)&&re.add(C.current.get(Y))}),re},[]);return{registerPath:V,unregisterPath:J,refreshOverflowKeys:G,isSubPathKey:X,getKeyPath:le,getKeys:Q,getSubPathKeys:oe}}var vt=[],Ua=function(i){var c,E,C=i.prefixCls,y=C===void 0?"rc-menu":C,S=i.style,R=i.className,w=i.tabIndex,$=w===void 0?0:w,V=i.children,J=i.direction,G=i.id,le=i.mode,X=le===void 0?"vertical":le,Q=i.inlineCollapsed,oe=i.disabled,x=i.disabledOverflow,q=i.subMenuOpenDelay,re=q===void 0?.1:q,Y=i.subMenuCloseDelay,se=Y===void 0?.1:Y,k=i.forceSubMenuRender,be=i.defaultOpenKeys,ee=i.openKeys,ce=i.activeKey,fe=i.defaultActiveFirst,ie=i.selectable,H=ie===void 0?!0:ie,ue=i.multiple,ge=ue===void 0?!1:ue,he=i.defaultSelectedKeys,Se=i.selectedKeys,We=i.onSelect,Ee=i.onDeselect,Oe=i.inlineIndent,Ke=Oe===void 0?24:Oe,Be=i.motion,Pe=i.defaultMotions,De=i.triggerSubMenuAction,$e=De===void 0?"hover":De,qe=i.builtinPlacements,Ve=i.itemIcon,xe=i.expandIcon,Xe=i.overflowedIndicator,Le=Xe===void 0?"...":Xe,Rn=i.getPopupContainer,an=i.onClick,Ye=i.onOpenChange,on=i.onKeyDown,yn=i.openAnimation,bn=i.openTransitionName,Ae=Object(Ne.a)(i,["prefixCls","style","className","tabIndex","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName"]),Je=jt(V,vt),_e=n.useState(!1),Ze=Object(W.a)(_e,2),Mn=Ze[0],zn=Ze[1],wn=n.useRef(),rn=Wa(G),Fn=J==="rtl",un=n.useMemo(function(){return X==="inline"&&Q?["vertical",Q]:[X,!1]},[X,Q]),Dn=Object(W.a)(un,2),en=Dn[0],ln=Dn[1],jn=n.useState(0),cn=Object(W.a)(jn,2),ke=cn[0],He=cn[1],Gn=ke>=Je.length-1||en!=="horizontal"||x,Jn=Object(On.a)(be,{value:ee,postState:function(Z){return Z||vt}}),nt=Object(W.a)(Jn,2),En=nt[0],vn=nt[1],Hn=n.useState(En),Cn=Object(W.a)(Hn,2),mn=Cn[0],Xn=Cn[1],Pn=en==="inline",Qn=n.useRef(!1);n.useEffect(function(){Pn&&Xn(En)},[En]),n.useEffect(function(){if(!Qn.current){Qn.current=!0;return}if(Pn)vn(mn);else{var te=[];vn(te),Ye==null||Ye(te)}},[Pn]);var dn=Va(),In=dn.registerPath,ve=dn.unregisterPath,Re=dn.refreshOverflowKeys,Me=dn.isSubPathKey,nn=dn.getKeyPath,Yn=dn.getKeys,gt=dn.getSubPathKeys,wt=n.useMemo(function(){return{registerPath:In,unregisterPath:ve}},[In,ve]),Wt=n.useMemo(function(){return{isSubPathKey:Me}},[Me]);n.useEffect(function(){Re(Gn?vt:Je.slice(ke+1).map(function(te){return te.key}))},[ke,Gn]);var Lt=Object(On.a)(ce||fe&&((c=Je[0])===null||c===void 0?void 0:c.key),{value:ce}),tt=Object(W.a)(Lt,2),yt=tt[0],lt=tt[1],bt=et(function(te){lt(te)}),$t=et(function(){lt(void 0)}),Et=Object(On.a)(he||[],{value:Se,postState:function(Z){return Array.isArray(Z)?Z:Z==null?vt:[Z]}}),Ct=Object(W.a)(Et,2),at=Ct[0],An=Ct[1],Ot=function(Z){if(!!H){var Ce=Z.key,ze=at.includes(Ce),sn;ze?sn=at.filter(function(kn){return kn!==Ce}):ge?sn=[].concat(Object(fn.a)(at),[Ce]):sn=[Ce],An(sn);var Un=Object(de.a)(Object(de.a)({},Z),{},{selectedKeys:sn});ze?Ee==null||Ee(Un):We==null||We(Un)}},St=et(function(te){an==null||an(_n(te)),Ot(te)}),st=et(function(te,Z){var Ce=En.filter(function(sn){return sn!==te});if(Z)Ce.push(te);else if(en!=="inline"){var ze=gt(te);Ce=Ce.filter(function(sn){return!ze.has(sn)})}d()(En,Ce)||(vn(Ce),Ye==null||Ye(Ce))}),Zn=et(Rn),ot=function(Z,Ce){var ze=Ce!=null?Ce:!En.includes(Z);st(Z,ze)},ut=Ma(en,yt,Fn,rn,wn,Yn,nn,lt,ot,on);n.useEffect(function(){zn(!0)},[]);var Rt=en!=="horizontal"||x?Je:Je.map(function(te,Z){return n.createElement(gn,{key:te.key,overflowDisabled:Z>ke},te)}),Ft=n.createElement(p,Object(L.a)({id:G,ref:wn,prefixCls:"".concat(y,"-overflow"),component:"ul",itemComponent:Dt,className:Ie()(y,"".concat(y,"-root"),"".concat(y,"-").concat(en),R,(E={},Object(me.a)(E,"".concat(y,"-inline-collapsed"),ln),Object(me.a)(E,"".concat(y,"-rtl"),Fn),E)),dir:J,style:S,role:"menu",tabIndex:$,data:Rt,renderRawItem:function(Z){return Z},renderRawRest:function(Z){var Ce=Z.length,ze=Ce?Je.slice(-Ce):null;return n.createElement(Yt,{eventKey:Bt,title:Le,disabled:Gn,internalPopupClose:Ce===0},ze)},maxCount:en!=="horizontal"||x?p.INVALIDATE:p.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(Z){He(Z)},onKeyDown:ut},Ae));return n.createElement(xt.Provider,{value:rn},n.createElement(gn,{prefixCls:y,mode:en,openKeys:En,rtl:Fn,disabled:oe,motion:Mn?Be:null,defaultMotions:Mn?Pe:null,activeKey:yt,onActive:bt,onInactive:$t,selectedKeys:at,inlineIndent:Ke,subMenuOpenDelay:re,subMenuCloseDelay:se,forceSubMenuRender:k,builtinPlacements:qe,triggerSubMenuAction:$e,getPopupContainer:Zn,itemIcon:Ve,expandIcon:xe,onItemClick:St,onOpenChange:st},n.createElement(Ge.Provider,{value:Wt},Ft),n.createElement(pe.Provider,{value:wt},Je)))},xa=Ua,za=function(i){var c=i.className,E=i.title,C=i.eventKey,y=i.children,S=Object(Ne.a)(i,["className","title","eventKey","children"]),R=n.useContext(je),w=R.prefixCls,$="".concat(w,"-item-group");return n.createElement("li",Object(L.a)({},S,{onClick:function(J){return J.stopPropagation()},className:Ie()($,c)}),n.createElement("div",{className:"".concat($,"-title"),title:typeof E=="string"?E:void 0},E),n.createElement("ul",{className:"".concat($,"-list")},y))};function Ga(t){var i=t.children,c=Object(Ne.a)(t,["children"]),E=Ue(c.eventKey),C=jt(i,E),y=_();return y?C:n.createElement(za,c,C)}function Ja(t){var i=t.className,c=t.style,E=n.useContext(je),C=E.prefixCls,y=_();return y?null:n.createElement("li",{className:Ie()("".concat(C,"-item-divider"),i),style:c})}var it=xa;it.Item=Dt,it.SubMenu=Yt,it.ItemGroup=Ga,it.Divider=Ja;var Ha=it,Xa=e("eDIo");function Qa(t,i){var c=t.prefixCls,E=t.editable,C=t.locale,y=t.style;return!E||E.showAdd===!1?null:n.createElement("button",{ref:i,type:"button",className:"".concat(c,"-nav-add"),style:y,"aria-label":(C==null?void 0:C.addAriaLabel)||"Add tab",onClick:function(R){E.onEdit("add",{event:R})}},E.addIcon||"+")}var aa=n.forwardRef(Qa);function Ya(t,i){var c=t.prefixCls,E=t.id,C=t.tabs,y=t.locale,S=t.mobile,R=t.moreIcon,w=R===void 0?"More":R,$=t.moreTransitionName,V=t.style,J=t.className,G=t.editable,le=t.tabBarGutter,X=t.rtl,Q=t.onTabClick,oe=Object(n.useState)(!1),x=Object(W.a)(oe,2),q=x[0],re=x[1],Y=Object(n.useState)(null),se=Object(W.a)(Y,2),k=se[0],be=se[1],ee="".concat(E,"-more-popup"),ce="".concat(c,"-dropdown"),fe=k!==null?"".concat(ee,"-").concat(k):null,ie=y==null?void 0:y.dropdownAriaLabel,H=n.createElement(Ha,{onClick:function(Oe){var Ke=Oe.key,Be=Oe.domEvent;Q(Ke,Be),re(!1)},id:ee,tabIndex:-1,role:"listbox","aria-activedescendant":fe,selectedKeys:[k],"aria-label":ie!==void 0?ie:"expanded dropdown"},C.map(function(Ee){return n.createElement(Dt,{key:Ee.key,id:"".concat(ee,"-").concat(Ee.key),role:"option","aria-controls":E&&"".concat(E,"-panel-").concat(Ee.key),disabled:Ee.disabled},Ee.tab)}));function ue(Ee){for(var Oe=C.filter(function($e){return!$e.disabled}),Ke=Oe.findIndex(function($e){return $e.key===k})||0,Be=Oe.length,Pe=0;Pe<Be;Pe+=1){Ke=(Ke+Ee+Be)%Be;var De=Oe[Ke];if(!De.disabled){be(De.key);return}}}function ge(Ee){var Oe=Ee.which;if(!q){[we.a.DOWN,we.a.SPACE,we.a.ENTER].includes(Oe)&&(re(!0),Ee.preventDefault());return}switch(Oe){case we.a.UP:ue(-1),Ee.preventDefault();break;case we.a.DOWN:ue(1),Ee.preventDefault();break;case we.a.ESC:re(!1);break;case we.a.SPACE:case we.a.ENTER:k!==null&&Q(k,Ee);break}}Object(n.useEffect)(function(){var Ee=document.getElementById(fe);Ee&&Ee.scrollIntoView&&Ee.scrollIntoView(!1)},[k]),Object(n.useEffect)(function(){q||be(null)},[q]);var he=Object(me.a)({},X?"marginLeft":"marginRight",le);C.length||(he.visibility="hidden",he.order=1);var Se=Ie()(Object(me.a)({},"".concat(ce,"-rtl"),X)),We=S?null:n.createElement(Xa.default,{prefixCls:ce,overlay:H,trigger:["hover"],visible:q,transitionName:$,onVisibleChange:re,overlayClassName:Se,mouseEnterDelay:.1,mouseLeaveDelay:.1},n.createElement("button",{type:"button",className:"".concat(c,"-nav-more"),style:he,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":ee,id:"".concat(E,"-more"),"aria-expanded":q,onKeyDown:ge},w));return n.createElement("div",{className:Ie()("".concat(c,"-nav-operations"),J),style:V,ref:i},We,n.createElement(aa,{prefixCls:c,locale:y,editable:G}))}var Za=n.forwardRef(Ya),Tt=Object(n.createContext)(null),ka=.1,ra=.01,ht=20,ia=Math.pow(.995,ht);function qa(t,i){var c=Object(n.useState)(),E=Object(W.a)(c,2),C=E[0],y=E[1],S=Object(n.useState)(0),R=Object(W.a)(S,2),w=R[0],$=R[1],V=Object(n.useState)(0),J=Object(W.a)(V,2),G=J[0],le=J[1],X=Object(n.useState)(),Q=Object(W.a)(X,2),oe=Q[0],x=Q[1],q=Object(n.useRef)();function re(ce){var fe=ce.touches[0],ie=fe.screenX,H=fe.screenY;y({x:ie,y:H}),window.clearInterval(q.current)}function Y(ce){if(!!C){ce.preventDefault();var fe=ce.touches[0],ie=fe.screenX,H=fe.screenY;y({x:ie,y:H});var ue=ie-C.x,ge=H-C.y;i(ue,ge);var he=Date.now();$(he),le(he-w),x({x:ue,y:ge})}}function se(){if(!!C&&(y(null),x(null),oe)){var ce=oe.x/G,fe=oe.y/G,ie=Math.abs(ce),H=Math.abs(fe);if(Math.max(ie,H)<ka)return;var ue=ce,ge=fe;q.current=window.setInterval(function(){if(Math.abs(ue)<ra&&Math.abs(ge)<ra){window.clearInterval(q.current);return}ue*=ia,ge*=ia,i(ue*ht,ge*ht)},ht)}}var k=Object(n.useRef)();function be(ce){var fe=ce.deltaX,ie=ce.deltaY,H=0,ue=Math.abs(fe),ge=Math.abs(ie);ue===ge?H=k.current==="x"?fe:ie:ue>ge?(H=fe,k.current="x"):(H=ie,k.current="y"),i(-H,-H)&&ce.preventDefault()}var ee=Object(n.useRef)(null);ee.current={onTouchStart:re,onTouchMove:Y,onTouchEnd:se,onWheel:be},n.useEffect(function(){function ce(ue){ee.current.onTouchStart(ue)}function fe(ue){ee.current.onTouchMove(ue)}function ie(ue){ee.current.onTouchEnd(ue)}function H(ue){ee.current.onWheel(ue)}return document.addEventListener("touchmove",fe,{passive:!1}),document.addEventListener("touchend",ie,{passive:!1}),t.current.addEventListener("touchstart",ce,{passive:!1}),t.current.addEventListener("wheel",H),function(){document.removeEventListener("touchmove",fe),document.removeEventListener("touchend",ie)}},[])}function _a(){var t=Object(n.useRef)(new Map);function i(E){return t.current.has(E)||t.current.set(E,n.createRef()),t.current.get(E)}function c(E){t.current.delete(E)}return[i,c]}function la(t,i){var c=n.useRef(t),E=n.useState({}),C=Object(W.a)(E,2),y=C[1];function S(R){var w=typeof R=="function"?R(c.current):R;w!==c.current&&i(w,c.current),c.current=w,y({})}return[c.current,S]}var sa=function(i){var c=i.position,E=i.prefixCls,C=i.extra;if(!C)return null;var y,S=C;return c==="right"&&(y=S.right||!S.left&&S||null),c==="left"&&(y=S.left||null),y?n.createElement("div",{className:"".concat(E,"-extra-content")},y):null};function er(t,i){var c,E=n.useContext(Tt),C=E.prefixCls,y=E.tabs,S=t.className,R=t.style,w=t.id,$=t.animated,V=t.activeKey,J=t.rtl,G=t.extra,le=t.editable,X=t.locale,Q=t.tabPosition,oe=t.tabBarGutter,x=t.children,q=t.onTabClick,re=t.onTabScroll,Y=Object(n.useRef)(),se=Object(n.useRef)(),k=Object(n.useRef)(),be=Object(n.useRef)(),ee=_a(),ce=Object(W.a)(ee,2),fe=ce[0],ie=ce[1],H=Q==="top"||Q==="bottom",ue=la(0,function(te,Z){H&&re&&re({direction:te>Z?"left":"right"})}),ge=Object(W.a)(ue,2),he=ge[0],Se=ge[1],We=la(0,function(te,Z){!H&&re&&re({direction:te>Z?"top":"bottom"})}),Ee=Object(W.a)(We,2),Oe=Ee[0],Ke=Ee[1],Be=Object(n.useState)(0),Pe=Object(W.a)(Be,2),De=Pe[0],$e=Pe[1],qe=Object(n.useState)(0),Ve=Object(W.a)(qe,2),xe=Ve[0],Xe=Ve[1],Le=Object(n.useState)(0),Rn=Object(W.a)(Le,2),an=Rn[0],Ye=Rn[1],on=Object(n.useState)(0),yn=Object(W.a)(on,2),bn=yn[0],Ae=yn[1],Je=Object(n.useState)(null),_e=Object(W.a)(Je,2),Ze=_e[0],Mn=_e[1],zn=Object(n.useState)(null),wn=Object(W.a)(zn,2),rn=wn[0],Fn=wn[1],un=Object(n.useState)(0),Dn=Object(W.a)(un,2),en=Dn[0],ln=Dn[1],jn=Object(n.useState)(0),cn=Object(W.a)(jn,2),ke=cn[0],He=cn[1],Gn=Sn(new Map),Jn=Object(W.a)(Gn,2),nt=Jn[0],En=Jn[1],vn=ct(y,nt,De),Hn="".concat(C,"-nav-operations-hidden"),Cn=0,mn=0;H?J?(Cn=0,mn=Math.max(0,De-Ze)):(Cn=Math.min(0,Ze-De),mn=0):(Cn=Math.min(0,rn-xe),mn=0);function Xn(te){return te<Cn?Cn:te>mn?mn:te}var Pn=Object(n.useRef)(),Qn=Object(n.useState)(),dn=Object(W.a)(Qn,2),In=dn[0],ve=dn[1];function Re(){ve(Date.now())}function Me(){window.clearTimeout(Pn.current)}qa(Y,function(te,Z){function Ce(ze,sn){ze(function(Un){var kn=Xn(Un+sn);return kn})}if(H){if(Ze>=De)return!1;Ce(Se,te)}else{if(rn>=xe)return!1;Ce(Ke,Z)}return Me(),Re(),!0}),Object(n.useEffect)(function(){return Me(),In&&(Pn.current=window.setTimeout(function(){ve(0)},100)),Me},[In]);function nn(){var te=arguments.length>0&&arguments[0]!==void 0?arguments[0]:V,Z=vn.get(te)||{width:0,height:0,left:0,right:0,top:0};if(H){var Ce=he;J?Z.right<he?Ce=Z.right:Z.right+Z.width>he+Ze&&(Ce=Z.right+Z.width-Ze):Z.left<-he?Ce=-Z.left:Z.left+Z.width>-he+Ze&&(Ce=-(Z.left+Z.width-Ze)),Ke(0),Se(Xn(Ce))}else{var ze=Oe;Z.top<-Oe?ze=-Z.top:Z.top+Z.height>-Oe+rn&&(ze=-(Z.top+Z.height-rn)),Se(0),Ke(Xn(ze))}}var Yn=P(vn,{width:Ze,height:rn,left:he,top:Oe},{width:an,height:bn},{width:en,height:ke},Object(de.a)(Object(de.a)({},t),{},{tabs:y})),gt=Object(W.a)(Yn,2),wt=gt[0],Wt=gt[1],Lt=y.map(function(te){var Z=te.key;return n.createElement(Ln,{id:w,prefixCls:C,key:Z,rtl:J,tab:te,closable:te.closable,editable:le,active:Z===V,tabPosition:Q,tabBarGutter:oe,renderWrapper:x,removeAriaLabel:X==null?void 0:X.removeAriaLabel,ref:fe(Z),onClick:function(ze){q(Z,ze)},onRemove:function(){ie(Z)},onFocus:function(){nn(Z),Re(),J||(Y.current.scrollLeft=0),Y.current.scrollTop=0}})}),tt=Kn(function(){var te,Z,Ce,ze,sn,Un,kn,Vt,Ut,or=((te=Y.current)===null||te===void 0?void 0:te.offsetWidth)||0,ur=((Z=Y.current)===null||Z===void 0?void 0:Z.offsetHeight)||0,ma=((Ce=be.current)===null||Ce===void 0?void 0:Ce.offsetWidth)||0,fa=((ze=be.current)===null||ze===void 0?void 0:ze.offsetHeight)||0,dr=((sn=k.current)===null||sn===void 0?void 0:sn.offsetWidth)||0,cr=((Un=k.current)===null||Un===void 0?void 0:Un.offsetHeight)||0;Mn(or),Fn(ur),ln(ma),He(fa);var pa=(((kn=se.current)===null||kn===void 0?void 0:kn.offsetWidth)||0)-ma,va=(((Vt=se.current)===null||Vt===void 0?void 0:Vt.offsetHeight)||0)-fa;$e(pa),Xe(va);var ha=(Ut=k.current)===null||Ut===void 0?void 0:Ut.className.includes(Hn);Ye(pa-(ha?0:dr)),Ae(va-(ha?0:cr)),En(function(){var ga=new Map;return y.forEach(function(mr){var ya=mr.key,dt=fe(ya).current;dt&&ga.set(ya,{width:dt.offsetWidth,height:dt.offsetHeight,left:dt.offsetLeft,top:dt.offsetTop})}),ga})}),yt=y.slice(0,wt),lt=y.slice(Wt+1),bt=[].concat(Object(fn.a)(yt),Object(fn.a)(lt)),$t=Object(n.useState)(),Et=Object(W.a)($t,2),Ct=Et[0],at=Et[1],An=vn.get(V),Ot=Object(n.useRef)();function St(){Qe.a.cancel(Ot.current)}Object(n.useEffect)(function(){var te={};return An&&(H?(J?te.right=An.right:te.left=An.left,te.width=An.width):(te.top=An.top,te.height=An.height)),St(),Ot.current=Object(Qe.a)(function(){at(te)}),St},[An,H,J]),Object(n.useEffect)(function(){nn()},[V,An,vn,H]),Object(n.useEffect)(function(){tt()},[J,oe,V,y.map(function(te){return te.key}).join("_")]);var st=!!bt.length,Zn="".concat(C,"-nav-wrap"),ot,ut,Rt,Ft;return H?J?(ut=he>0,ot=he+Ze<De):(ot=he<0,ut=-he+Ze<De):(Rt=Oe<0,Ft=-Oe+rn<xe),n.createElement("div",{ref:i,role:"tablist",className:Ie()("".concat(C,"-nav"),S),style:R,onKeyDown:function(){Re()}},n.createElement(sa,{position:"left",extra:G,prefixCls:C}),n.createElement(Wn.default,{onResize:tt},n.createElement("div",{className:Ie()(Zn,(c={},Object(me.a)(c,"".concat(Zn,"-ping-left"),ot),Object(me.a)(c,"".concat(Zn,"-ping-right"),ut),Object(me.a)(c,"".concat(Zn,"-ping-top"),Rt),Object(me.a)(c,"".concat(Zn,"-ping-bottom"),Ft),c)),ref:Y},n.createElement(Wn.default,{onResize:tt},n.createElement("div",{ref:se,className:"".concat(C,"-nav-list"),style:{transform:"translate(".concat(he,"px, ").concat(Oe,"px)"),transition:In?"none":void 0}},Lt,n.createElement(aa,{ref:be,prefixCls:C,locale:X,editable:le,style:{visibility:st?"hidden":null}}),n.createElement("div",{className:Ie()("".concat(C,"-ink-bar"),Object(me.a)({},"".concat(C,"-ink-bar-animated"),$.inkBar)),style:Ct}))))),n.createElement(Za,Object(L.a)({},t,{ref:k,prefixCls:C,tabs:bt,className:!st&&Hn})),n.createElement(sa,{position:"right",extra:G,prefixCls:C}))}var oa=n.forwardRef(er);function nr(t){var i=t.id,c=t.activeKey,E=t.animated,C=t.tabPosition,y=t.rtl,S=t.destroyInactiveTabPane,R=n.useContext(Tt),w=R.prefixCls,$=R.tabs,V=E.tabPane,J=$.findIndex(function(G){return G.key===c});return n.createElement("div",{className:Ie()("".concat(w,"-content-holder"))},n.createElement("div",{className:Ie()("".concat(w,"-content"),"".concat(w,"-content-").concat(C),Object(me.a)({},"".concat(w,"-content-animated"),V)),style:J&&V?Object(me.a)({},y?"marginRight":"marginLeft","-".concat(J,"00%")):null},$.map(function(G){return n.cloneElement(G.node,{key:G.key,prefixCls:w,tabKey:G.key,id:i,animated:V,active:G.key===c,destroyInactiveTabPane:S})})))}function ua(t){var i=t.prefixCls,c=t.forceRender,E=t.className,C=t.style,y=t.id,S=t.active,R=t.animated,w=t.destroyInactiveTabPane,$=t.tabKey,V=t.children,J=n.useState(c),G=Object(W.a)(J,2),le=G[0],X=G[1];n.useEffect(function(){S?X(!0):w&&X(!1)},[S,w]);var Q={};return S||(R?(Q.visibility="hidden",Q.height=0,Q.overflowY="hidden"):Q.display="none"),n.createElement("div",{id:y&&"".concat(y,"-panel-").concat($),role:"tabpanel",tabIndex:S?0:-1,"aria-labelledby":y&&"".concat(y,"-tab-").concat($),"aria-hidden":!S,style:Object(de.a)(Object(de.a)({},Q),C),className:Ie()("".concat(i,"-tabpane"),S&&"".concat(i,"-tabpane-active"),E)},(S||le||c)&&V)}var da=0;function tr(t){return Object(Bn.a)(t).map(function(i){if(n.isValidElement(i)){var c=i.key!==void 0?String(i.key):void 0;return Object(de.a)(Object(de.a)({key:c},i.props),{},{node:i})}return null}).filter(function(i){return i})}function ar(t,i){var c,E=t.id,C=t.prefixCls,y=C===void 0?"rc-tabs":C,S=t.className,R=t.children,w=t.direction,$=t.activeKey,V=t.defaultActiveKey,J=t.editable,G=t.animated,le=G===void 0?{inkBar:!0,tabPane:!1}:G,X=t.tabPosition,Q=X===void 0?"top":X,oe=t.tabBarGutter,x=t.tabBarStyle,q=t.tabBarExtraContent,re=t.locale,Y=t.moreIcon,se=t.moreTransitionName,k=t.destroyInactiveTabPane,be=t.renderTabBar,ee=t.onChange,ce=t.onTabClick,fe=t.onTabScroll,ie=Object(Ne.a)(t,["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"]),H=tr(R),ue=w==="rtl",ge;le===!1?ge={inkBar:!1,tabPane:!1}:le===!0?ge={inkBar:!0,tabPane:!0}:ge=Object(de.a)({inkBar:!0,tabPane:!1},Object(tn.a)(le)==="object"?le:{});var he=Object(n.useState)(!1),Se=Object(W.a)(he,2),We=Se[0],Ee=Se[1];Object(n.useEffect)(function(){Ee(Object(Tn.a)())},[]);var Oe=Object(On.a)(function(){var Ae;return(Ae=H[0])===null||Ae===void 0?void 0:Ae.key},{value:$,defaultValue:V}),Ke=Object(W.a)(Oe,2),Be=Ke[0],Pe=Ke[1],De=Object(n.useState)(function(){return H.findIndex(function(Ae){return Ae.key===Be})}),$e=Object(W.a)(De,2),qe=$e[0],Ve=$e[1];Object(n.useEffect)(function(){var Ae=H.findIndex(function(_e){return _e.key===Be});if(Ae===-1){var Je;Ae=Math.max(0,Math.min(qe,H.length-1)),Pe((Je=H[Ae])===null||Je===void 0?void 0:Je.key)}Ve(Ae)},[H.map(function(Ae){return Ae.key}).join("_"),Be,qe]);var xe=Object(On.a)(null,{value:E}),Xe=Object(W.a)(xe,2),Le=Xe[0],Rn=Xe[1],an=Q;We&&!["left","right"].includes(Q)&&(an="top"),Object(n.useEffect)(function(){E||(Rn("rc-tabs-".concat(da)),da+=1)},[]);function Ye(Ae,Je){ce==null||ce(Ae,Je),Pe(Ae),ee==null||ee(Ae)}var on={id:Le,activeKey:Be,animated:ge,tabPosition:an,rtl:ue,mobile:We},yn,bn=Object(de.a)(Object(de.a)({},on),{},{editable:J,locale:re,moreIcon:Y,moreTransitionName:se,tabBarGutter:oe,onTabClick:Ye,onTabScroll:fe,extra:q,style:x,panes:R});return be?yn=be(bn,oa):yn=n.createElement(oa,bn),n.createElement(Tt.Provider,{value:{tabs:H,prefixCls:y}},n.createElement("div",Object(L.a)({ref:i,id:E,className:Ie()(y,"".concat(y,"-").concat(an),(c={},Object(me.a)(c,"".concat(y,"-mobile"),We),Object(me.a)(c,"".concat(y,"-editable"),J),Object(me.a)(c,"".concat(y,"-rtl"),ue),c),S)},ie),yn,n.createElement(nr,Object(L.a)({destroyInactiveTabPane:k},on,{animated:ge}))))}var ca=n.forwardRef(ar);ca.TabPane=ua;var rr=ca,ir=rr,Kt=e("MZF8"),pn=e("dEAq"),lr=e("ZpkN"),br=e("TIsu");function Mt(t,i){var c,E=(c=t.match(/\.(\w+)$/))===null||c===void 0?void 0:c[1];return E||(E=i.tsx?"tsx":"jsx"),E}var sr=t=>{var i,c,E,C=Object(n.useRef)(),y=Object(n.useContext)(pn.context),S=y.locale,R=Object(pn.useLocaleProps)(S,t),w=Object(pn.useDemoUrl)(R.identifier),$=R.demoUrl||w,V=(Kt.a===null||Kt.a===void 0?void 0:Kt.a.location.hash)==="#".concat(R.identifier),J=Object.keys(R.sources).length===1,G=Object(pn.useCodeSandbox)((i=R.hideActions)!==null&&i!==void 0&&i.includes("CSB")?null:R),le=Object(pn.useRiddle)((c=R.hideActions)!==null&&c!==void 0&&c.includes("RIDDLE")?null:R),X=Object(pn.useMotions)(R.motions||[],C.current),Q=Object(z.default)(X,2),oe=Q[0],x=Q[1],q=Object(pn.useCopy)(),re=Object(z.default)(q,2),Y=re[0],se=re[1],k=Object(n.useState)("_"),be=Object(z.default)(k,2),ee=be[0],ce=be[1],fe=Object(n.useState)(Mt(ee,R.sources[ee])),ie=Object(z.default)(fe,2),H=ie[0],ue=ie[1],ge=Object(n.useState)(Boolean(R.defaultShowCode)),he=Object(z.default)(ge,2),Se=he[0],We=he[1],Ee=Object(n.useState)(Math.random()),Oe=Object(z.default)(Ee,2),Ke=Oe[0],Be=Oe[1],Pe=R.sources[ee][H]||R.sources[ee].content,De=Object(pn.useTSPlaygroundUrl)(S,Pe),$e=Object(n.useRef)(),qe=Object(pn.usePrefersColor)(),Ve=Object(z.default)(qe,1),xe=Ve[0];Object(n.useEffect)(()=>{Be(Math.random())},[xe]);function Xe(Le){ce(Le),ue(Mt(Le,R.sources[Le]))}return h.a.createElement("div",{style:R.style,className:[R.className,"__dumi-default-previewer",V?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:R.identifier,"data-debug":R.debug||void 0,"data-iframe":R.iframe||void 0},R.iframe&&h.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),h.a.createElement("div",{ref:C,className:"__dumi-default-previewer-demo",style:{transform:R.transform?"translate(0, 0)":void 0,padding:R.compact||R.iframe&&R.compact!==!1?"0":void 0,background:R.background}},R.iframe?h.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(R.iframe).replace(/(\d)$/,"$1px")},key:Ke,src:$,ref:$e}):R.children),h.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":R.title},R.title&&h.a.createElement(pn.AnchorLink,{to:"#".concat(R.identifier)},R.title),R.description&&h.a.createElement("div",{dangerouslySetInnerHTML:{__html:R.description}})),h.a.createElement("div",{className:"__dumi-default-previewer-actions"},G&&h.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:G}),le&&h.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:le}),R.motions&&h.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:x,onClick:()=>oe()}),R.iframe&&h.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:()=>Be(Math.random())}),!((E=R.hideActions)!==null&&E!==void 0&&E.includes("EXTERNAL"))&&h.a.createElement(pn.Link,{target:"_blank",to:$},h.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),h.a.createElement("span",null),h.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":se,onClick:()=>Y(Pe)}),H==="tsx"&&Se&&h.a.createElement(pn.Link,{target:"_blank",to:De},h.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),h.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(Se?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:()=>We(!Se)})),Se&&h.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!J&&h.a.createElement(ir,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xB7\xB7\xB7",defaultActiveKey:ee,onChange:Xe},Object.keys(R.sources).map(Le=>h.a.createElement(ua,{tab:Le==="_"?"index.".concat(Mt(Le,R.sources[Le])):Le,key:Le}))),h.a.createElement("div",{className:"__dumi-default-previewer-source"},h.a.createElement(lr.a,{code:Pe,lang:H,showCopy:!1}))))},Er=hn.default=sr},"80pN":function(Nn,hn,e){"use strict";(function(z){/** @license React v16.14.0
* react-dom-test-utils.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var n=e("MgzW"),h=e("q1tI"),L=e("i8i4"),me=e("QCnb");function W(m){for(var I="https://reactjs.org/docs/error-decoder.html?invariant="+m,K=1;K<arguments.length;K++)I+="&args[]="+encodeURIComponent(arguments[K]);return"Minified React error #"+m+"; visit "+I+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var tn=h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;tn.hasOwnProperty("ReactCurrentDispatcher")||(tn.ReactCurrentDispatcher={current:null}),tn.hasOwnProperty("ReactCurrentBatchConfig")||(tn.ReactCurrentBatchConfig={suspense:null});function Ne(m){var I=m,K=m;if(m.alternate)for(;I.return;)I=I.return;else{m=I;do I=m,(I.effectTag&1026)!=0&&(K=I.return),m=I.return;while(m)}return I.tag===3?K:null}function de(m){if(Ne(m)!==m)throw Error(W(188))}function rt(m){var I=m.alternate;if(!I){if(I=Ne(m),I===null)throw Error(W(188));return I!==m?null:m}for(var K=m,pe=I;;){var _=K.return;if(_===null)break;var Fe=_.alternate;if(Fe===null){if(pe=_.return,pe!==null){K=pe;continue}break}if(_.child===Fe.child){for(Fe=_.child;Fe;){if(Fe===K)return de(_),m;if(Fe===pe)return de(_),I;Fe=Fe.sibling}throw Error(W(188))}if(K.return!==pe.return)K=_,pe=Fe;else{for(var Ue=!1,Ge=_.child;Ge;){if(Ge===K){Ue=!0,K=_,pe=Fe;break}if(Ge===pe){Ue=!0,pe=_,K=Fe;break}Ge=Ge.sibling}if(!Ue){for(Ge=Fe.child;Ge;){if(Ge===K){Ue=!0,K=Fe,pe=_;break}if(Ge===pe){Ue=!0,pe=Fe,K=_;break}Ge=Ge.sibling}if(!Ue)throw Error(W(189))}}if(K.alternate!==pe)throw Error(W(190))}if(K.tag!==3)throw Error(W(188));return K.stateNode.current===K?m:I}function Ie(){return!0}function Bn(){return!1}function Tn(m,I,K,pe){this.dispatchConfig=m,this._targetInst=I,this.nativeEvent=K,m=this.constructor.Interface;for(var _ in m)m.hasOwnProperty(_)&&((I=m[_])?this[_]=I(K):_==="target"?this.target=pe:this[_]=K[_]);return this.isDefaultPrevented=(K.defaultPrevented!=null?K.defaultPrevented:K.returnValue===!1)?Ie:Bn,this.isPropagationStopped=Bn,this}n(Tn.prototype,{preventDefault:function(){this.defaultPrevented=!0;var m=this.nativeEvent;m&&(m.preventDefault?m.preventDefault():typeof m.returnValue!="unknown"&&(m.returnValue=!1),this.isDefaultPrevented=Ie)},stopPropagation:function(){var m=this.nativeEvent;m&&(m.stopPropagation?m.stopPropagation():typeof m.cancelBubble!="unknown"&&(m.cancelBubble=!0),this.isPropagationStopped=Ie)},persist:function(){this.isPersistent=Ie},isPersistent:Bn,destructor:function(){var m=this.constructor.Interface,I;for(I in m)this[I]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=Bn,this._dispatchInstances=this._dispatchListeners=null}}),Tn.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(m){return m.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null},Tn.extend=function(m){function I(){}function K(){return pe.apply(this,arguments)}var pe=this;I.prototype=pe.prototype;var _=new I;return n(_,K.prototype),K.prototype=_,K.prototype.constructor=K,K.Interface=n({},pe.Interface,m),K.extend=pe.extend,Qe(K),K},Qe(Tn);function On(m,I,K,pe){if(this.eventPool.length){var _=this.eventPool.pop();return this.call(_,m,I,K,pe),_}return new this(m,I,K,pe)}function fn(m){if(!(m instanceof this))throw Error(W(279));m.destructor(),10>this.eventPool.length&&this.eventPool.push(m)}function Qe(m){m.eventPool=[],m.getPooled=On,m.release=fn}var Wn=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined");function Kn(m,I){var K={};return K[m.toLowerCase()]=I.toLowerCase(),K["Webkit"+m]="webkit"+I,K["Moz"+m]="moz"+I,K}var Sn={animationend:Kn("Animation","AnimationEnd"),animationiteration:Kn("Animation","AnimationIteration"),animationstart:Kn("Animation","AnimationStart"),transitionend:Kn("Transition","TransitionEnd")},we={},xn={};Wn&&(xn=document.createElement("div").style,"AnimationEvent"in window||(delete Sn.animationend.animation,delete Sn.animationiteration.animation,delete Sn.animationstart.animation),"TransitionEvent"in window||delete Sn.transitionend.transition);function Ln(m){if(we[m])return we[m];if(!Sn[m])return m;var I=Sn[m],K;for(K in I)if(I.hasOwnProperty(K)&&K in xn)return we[m]=I[K];return m}var qn=Ln("animationend"),ct=Ln("animationiteration"),D=Ln("animationstart"),P=Ln("transitionend"),F=null;function d(m){if(F===null)try{var I=("require"+Math.random()).slice(0,7);F=(z&&z[I])("timers").setImmediate}catch(K){F=function(pe){var _=new MessageChannel;_.port1.onmessage=pe,_.port2.postMessage(void 0)}}return F(m)}var s=L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,v=s[11],b=s[12],O=L.unstable_batchedUpdates,a=tn.IsSomeRendererActing,o=typeof me.unstable_flushAllWithoutAsserting=="function",l=me.unstable_flushAllWithoutAsserting||function(){for(var m=!1;v();)m=!0;return m};function B(m){try{l(),d(function(){l()?B(m):m()})}catch(I){m(I)}}var A=0,j=!1,u=L.findDOMNode,N=L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,f=N[0],r=N[4],g=N[5],p=N[6],T=N[7],M=N[8],U=N[9],ne=N[10];function ae(){}function ye(m,I){if(!m)return[];if(m=rt(m),!m)return[];for(var K=m,pe=[];;){if(K.tag===5||K.tag===6||K.tag===1||K.tag===0){var _=K.stateNode;I(_)&&pe.push(_)}if(K.child)K.child.return=K,K=K.child;else{if(K===m)return pe;for(;!K.sibling;){if(!K.return||K.return===m)return pe;K=K.return}K.sibling.return=K.return,K=K.sibling}}}function je(m,I){if(m&&!m._reactInternalFiber){var K=""+m;throw m=Array.isArray(m)?"an array":m&&m.nodeType===1&&m.tagName?"a DOM node":K==="[object Object]"?"object with keys {"+Object.keys(m).join(", ")+"}":K,Error(W(286,I,m))}}var Te={renderIntoDocument:function(m){var I=document.createElement("div");return L.render(m,I)},isElement:function(m){return h.isValidElement(m)},isElementOfType:function(m,I){return h.isValidElement(m)&&m.type===I},isDOMComponent:function(m){return!(!m||m.nodeType!==1||!m.tagName)},isDOMComponentElement:function(m){return!!(m&&h.isValidElement(m)&&m.tagName)},isCompositeComponent:function(m){return Te.isDOMComponent(m)?!1:m!=null&&typeof m.render=="function"&&typeof m.setState=="function"},isCompositeComponentWithType:function(m,I){return Te.isCompositeComponent(m)?m._reactInternalFiber.type===I:!1},findAllInRenderedTree:function(m,I){return je(m,"findAllInRenderedTree"),m?ye(m._reactInternalFiber,I):[]},scryRenderedDOMComponentsWithClass:function(m,I){return je(m,"scryRenderedDOMComponentsWithClass"),Te.findAllInRenderedTree(m,function(K){if(Te.isDOMComponent(K)){var pe=K.className;typeof pe!="string"&&(pe=K.getAttribute("class")||"");var _=pe.split(/\s+/);if(!Array.isArray(I)){if(I===void 0)throw Error(W(11));I=I.split(/\s+/)}return I.every(function(Fe){return _.indexOf(Fe)!==-1})}return!1})},findRenderedDOMComponentWithClass:function(m,I){if(je(m,"findRenderedDOMComponentWithClass"),m=Te.scryRenderedDOMComponentsWithClass(m,I),m.length!==1)throw Error("Did not find exactly one match (found: "+m.length+") for class:"+I);return m[0]},scryRenderedDOMComponentsWithTag:function(m,I){return je(m,"scryRenderedDOMComponentsWithTag"),Te.findAllInRenderedTree(m,function(K){return Te.isDOMComponent(K)&&K.tagName.toUpperCase()===I.toUpperCase()})},findRenderedDOMComponentWithTag:function(m,I){if(je(m,"findRenderedDOMComponentWithTag"),m=Te.scryRenderedDOMComponentsWithTag(m,I),m.length!==1)throw Error("Did not find exactly one match (found: "+m.length+") for tag:"+I);return m[0]},scryRenderedComponentsWithType:function(m,I){return je(m,"scryRenderedComponentsWithType"),Te.findAllInRenderedTree(m,function(K){return Te.isCompositeComponentWithType(K,I)})},findRenderedComponentWithType:function(m,I){if(je(m,"findRenderedComponentWithType"),m=Te.scryRenderedComponentsWithType(m,I),m.length!==1)throw Error("Did not find exactly one match (found: "+m.length+") for componentType:"+I);return m[0]},mockComponent:function(m,I){return I=I||m.mockTagName||"div",m.prototype.render.mockImplementation(function(){return h.createElement(I,null,this.props.children)}),this},nativeTouchData:function(m,I){return{touches:[{pageX:m,pageY:I}]}},Simulate:null,SimulateNative:{},act:function(m){function I(){A--,a.current=K,b.current=pe}j===!1&&(j=!0,console.error("act(...) is not supported in production builds of React, and might not behave as expected.")),A++;var K=a.current,pe=b.current;a.current=!0,b.current=!0;try{var _=O(m)}catch(Fe){throw I(),Fe}if(_!==null&&typeof _=="object"&&typeof _.then=="function")return{then:function(Fe,Ue){_.then(function(){1<A||o===!0&&K===!0?(I(),Fe()):B(function(Ge){I(),Ge?Ue(Ge):Fe()})},function(Ge){I(),Ue(Ge)})}};try{A!==1||o!==!1&&K!==!1||l(),I()}catch(Fe){throw I(),Fe}return{then:function(Fe){Fe()}}}};function gn(m){return function(I,K){if(h.isValidElement(I))throw Error(W(228));if(Te.isCompositeComponent(I))throw Error(W(229));var pe=r[m],_=new ae;_.target=I,_.type=m.toLowerCase();var Fe=f(I),Ue=new Tn(pe,Fe,_,I);Ue.persist(),n(Ue,K),pe.phasedRegistrationNames?g(Ue):p(Ue),L.unstable_batchedUpdates(function(){T(I),ne(Ue)}),M()}}Te.Simulate={};for(var $n in r)Te.Simulate[$n]=gn($n);function _n(m,I){return function(K,pe){var _=new ae(m);n(_,pe),Te.isDOMComponent(K)?(K=u(K),_.target=K,U(I,1,document,_)):K.tagName&&(_.target=K,U(I,1,document,_))}}[["abort","abort"],[qn,"animationEnd"],[ct,"animationIteration"],[D,"animationStart"],["blur","blur"],["canplaythrough","canPlayThrough"],["canplay","canPlay"],["cancel","cancel"],["change","change"],["click","click"],["close","close"],["compositionend","compositionEnd"],["compositionstart","compositionStart"],["compositionupdate","compositionUpdate"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["dragstart","dragStart"],["drag","drag"],["drop","drop"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],["ended","ended"],["error","error"],["focus","focus"],["input","input"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["loadstart","loadStart"],["loadstart","loadStart"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["mousedown","mouseDown"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["playing","playing"],["progress","progress"],["ratechange","rateChange"],["scroll","scroll"],["seeked","seeked"],["seeking","seeking"],["selectionchange","selectionChange"],["stalled","stalled"],["suspend","suspend"],["textInput","textInput"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchmove","touchMove"],["touchstart","touchStart"],[P,"transitionEnd"],["volumechange","volumeChange"],["waiting","waiting"],["wheel","wheel"]].forEach(function(m){var I=m[1];Te.SimulateNative[I]=_n(I,m[0])}),z.exports=Te.default||Te}).call(this,e("hOG+")(Nn))},JjdP:function(Nn,hn,e){"use strict";e.r(hn);var z=e("9og8"),n=e("WmNS"),h=e.n(n),L=e("LtsZ"),me=`import React, { useRef } from 'react';
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

export default Demo;`,W=`import React from 'react';
import FormRender, { useForm } from 'form-render';

const Demo = props => {
  const form = useForm();
  return <FormRender form={form} {...props} />;
};

export default Demo;`,tn=`export const delay = ms => new Promise(res => setTimeout(res, ms));

export const fakeApi = (url, data) => {
  console.group('request:', url);
  console.log('params:', data);
  console.groupEnd();
  return delay(500);
};`,Ne=`import React from 'react';
import FormRender, { useForm } from 'form-render';

const Demo = ({ schema }) => {
  const form = useForm();
  return (
    <div>
      <FormRender form={form} schema={schema} />
    </div>
  );
};

export default Demo;`,de=`export const basic = {
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
};`,rt=`import React, { Component } from 'react';
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

export default Root;`,Ie=`import React, { useState, useEffect } from 'react';
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
}`,Tn=`import { Select } from 'antd';
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

export default SearchInput;`,On=`import React from 'react';
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

export default Demo;`,fn=`import { monaco } from 'react-monaco-editor'

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

export { valueMap, keySuggestions }`,Qe=`.markdown p {
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

export default Demo;`,Kn=`import React, { useState, useRef } from 'react';
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

export default Demo;`,Sn=`import React from 'react';
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

export default Demo;`,we=`import React from 'react';
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
          <Sidebar />
        </div>
      </Provider>
    </div>
  );
};

export default Demo;`,xn=`.fr-generator-playground {
  margin: 0 -24px;

  .hide-demo {
    display: none;
  }
}`,Ln=`import React, { useState, useRef } from 'react';
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

export default Demo;`,qn=`import React, { useState, useRef } from 'react';
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
        extraButtons={[
          { text: '\u53BBplayground\u9A8C\u8BC1', onClick: goToFrPlayground },
        ]}
        onChange={data => console.log('data:change', data)}
        onSchemaChange={schema => console.log('schema:change', schema)}
      />
    </div>
  );
};

export default Demo;`,ct=hn.default={"guide-card":{component:Object(L.dynamic)({loader:function(){var D=Object(z.a)(h.a.mark(function F(){return h.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(22)]).then(e.bind(null,"oLxE"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},F)}));function P(){return D.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:me}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"card-render":{version:"0.1.2"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"0.x"}},identifier:"guide-card"}},"chart-render-demo":{component:Object(L.dynamic)({loader:function(){var D=Object(z.a)(h.a.mark(function F(){var d,s,v,b,O,a,o;return h.a.wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return a=function(j,u){if(!u&&j&&j.__esModule)return j;if(j===null||typeof j!="object"&&typeof j!="function")return{default:j};var N=O(u);if(N&&N.has(j))return N.get(j);var f={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var g in j)if(g!=="default"&&Object.prototype.hasOwnProperty.call(j,g)){var p=r?Object.getOwnPropertyDescriptor(j,g):null;p&&(p.get||p.set)?Object.defineProperty(f,g,p):f[g]=j[g]}return f.default=j,N&&N.set(j,f),f},O=function(j){if(typeof WeakMap!="function")return null;var u=new WeakMap,N=new WeakMap;return(O=function(r){return r?N:u})(j)},d=e("K+nK"),B.t0=d,B.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return B.t1=B.sent,s=(0,B.t0)(B.t1),B.t2=a,B.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return B.t3=B.sent,v=(0,B.t2)(B.t3),B.next=15,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 15:return b=B.sent,o=function(){var j=(0,v.useState)("Line"),u=(0,s.default)(j,2),N=u[0],f=u[1],r={Line:b.Line,Column:b.Column,PivotTable:b.PivotTable}[N];return v.default.createElement("div",null,v.default.createElement("div",{style:{marginBottom:10}},v.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return f("Line")}},"\u6298\u7EBF\u56FE"),v.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return f("Column")}},"\u67F1\u72B6\u56FE"),v.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return f("PivotTable")}},"\u4EA4\u53C9\u8868")),v.default.createElement(r,{meta:[{id:"date",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF",isDim:!1},{id:"uv",name:"\u8BBF\u5BA2\u6570",isDim:!1}],data:[{date:"20200101",pv:100,uv:50},{date:"20200102",pv:120,uv:60},{date:"20200103",pv:140,uv:70},{date:"20200104",pv:160,uv:80}]}))},B.abrupt("return",o);case 18:case"end":return B.stop()}},F)}));function P(){return D.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"chart-render-demo"}},"column-demo":{component:Object(L.dynamic)({loader:function(){var D=Object(z.a)(h.a.mark(function F(){var d,s,v,b;return h.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=a.sent,b=function(){return s.default.createElement(v.Column,{meta:[{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{pv:50,uv:20}]})},a.abrupt("return",b);case 11:case"end":return a.stop()}},F)}));function P(){return D.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[{ pv: 50, uv: 20 }]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo"}},"column-demo-1":{component:Object(L.dynamic)({loader:function(){var D=Object(z.a)(h.a.mark(function F(){var d,s,v,b;return h.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=a.sent,b=function(){return s.default.createElement(v.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},a.abrupt("return",b);case 11:case"end":return a.stop()}},F)}));function P(){return D.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-1"}},"column-demo-2":{component:Object(L.dynamic)({loader:function(){var D=Object(z.a)(h.a.mark(function F(){var d,s,v,b;return h.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=a.sent,b=function(){return s.default.createElement(v.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},a.abrupt("return",b);case 11:case"end":return a.stop()}},F)}));function P(){return D.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-2"}},"column-demo-3":{component:Object(L.dynamic)({loader:function(){var D=Object(z.a)(h.a.mark(function F(){var d,s,v,b;return h.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=a.sent,b=function(){return s.default.createElement(v.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},a.abrupt("return",b);case 11:case"end":return a.stop()}},F)}));function P(){return D.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-3"}},"column-demo-4":{component:Object(L.dynamic)({loader:function(){var D=Object(z.a)(h.a.mark(function F(){var d,s,v,b;return h.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=a.sent,b=function(){return s.default.createElement(v.Column,{inverted:!0,label:{position:"middle",layout:[{type:"interval-adjust-position"},{type:"interval-hide-overlap"},{type:"adjust-color"}]},meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},a.abrupt("return",b);case 11:case"end":return a.stop()}},F)}));function P(){return D.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-4"}},"line-demo":{component:Object(L.dynamic)({loader:function(){var D=Object(z.a)(h.a.mark(function F(){var d,s,v,b;return h.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=a.sent,b=function(){return s.default.createElement(v.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},a.abrupt("return",b);case 11:case"end":return a.stop()}},F)}));function P(){return D.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo"}},"line-demo-1":{component:Object(L.dynamic)({loader:function(){var D=Object(z.a)(h.a.mark(function F(){var d,s,v,b;return h.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=a.sent,b=function(){return s.default.createElement(v.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},a.abrupt("return",b);case 11:case"end":return a.stop()}},F)}));function P(){return D.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-1"}},"line-demo-2":{component:Object(L.dynamic)({loader:function(){var D=Object(z.a)(h.a.mark(function F(){var d,s,v,b;return h.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=a.sent,b=function(){return s.default.createElement(v.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"},{id:"pv",name:"\u8BBF\u95EE\u91CF"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20,pv:120},{ds:"2020-12-31",page:"\u9996\u9875",uv:120,pv:1120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21,pv:121},{ds:"2021-01-01",page:"\u9996\u9875",uv:121,pv:1121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15,pv:115},{ds:"2021-01-02",page:"\u9996\u9875",uv:115,pv:1115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40,pv:140},{ds:"2021-01-03",page:"\u9996\u9875",uv:140,pv:1140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31,pv:131},{ds:"2021-01-04",page:"\u9996\u9875",uv:131,pv:1131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32,pv:132},{ds:"2021-01-05",page:"\u9996\u9875",uv:132,pv:1132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30,pv:130},{ds:"2021-01-06",page:"\u9996\u9875",uv:130,pv:1130}]})},a.abrupt("return",b);case 11:case"end":return a.stop()}},F)}));function P(){return D.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-2"}},"line-demo-3":{component:Object(L.dynamic)({loader:function(){var D=Object(z.a)(h.a.mark(function F(){var d,s,v,b;return h.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=a.sent,b=function(){return s.default.createElement(v.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},a.abrupt("return",b);case 11:case"end":return a.stop()}},F)}));function P(){return D.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-3"}},"line-demo-4":{component:Object(L.dynamic)({loader:function(){var D=Object(z.a)(h.a.mark(function F(){var d,s,v,b;return h.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=a.sent,b=function(){return s.default.createElement(v.Line,{withArea:!0,isStack:!0,isPercent:!0,meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},a.abrupt("return",b);case 11:case"end":return a.stop()}},F)}));function P(){return D.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-4"}},"pivot-table-demo":{component:Object(L.dynamic)({loader:function(){var D=Object(z.a)(h.a.mark(function F(){var d,s,v,b;return h.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=a.sent,b=function(){return s.default.createElement(v.PivotTable,{style:{maxHeight:400,overflow:"auto"},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},a.abrupt("return",b);case 11:case"end":return a.stop()}},F)}));function P(){return D.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo"}},"pivot-table-demo-1":{component:Object(L.dynamic)({loader:function(){var D=Object(z.a)(h.a.mark(function F(){var d,s,v,b;return h.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=a.sent,b=function(){return s.default.createElement(v.PivotTable,{style:{maxHeight:400,overflow:"auto"},cellRender:function(B,A,j){return s.default.createElement("div",null,s.default.createElement("p",null,"\u53C2\u6570\u8868\uFF1A"),s.default.createElement("p",{style:{color:["red","orange","yellow","green","blue"][Object.keys(A).length]}},B),s.default.createElement("p",null,JSON.stringify(A)),s.default.createElement("p",null,JSON.stringify(j)))},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},a.abrupt("return",b);case 11:case"end":return a.stop()}},F)}));function P(){return D.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-1"}},"pivot-table-demo-2":{component:Object(L.dynamic)({loader:function(){var D=Object(z.a)(h.a.mark(function F(){var d,s,v,b,O,a,o;return h.a.wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return a=function(j,u){if(!u&&j&&j.__esModule)return j;if(j===null||typeof j!="object"&&typeof j!="function")return{default:j};var N=O(u);if(N&&N.has(j))return N.get(j);var f={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var g in j)if(g!=="default"&&Object.prototype.hasOwnProperty.call(j,g)){var p=r?Object.getOwnPropertyDescriptor(j,g):null;p&&(p.get||p.set)?Object.defineProperty(f,g,p):f[g]=j[g]}return f.default=j,N&&N.set(j,f),f},O=function(j){if(typeof WeakMap!="function")return null;var u=new WeakMap,N=new WeakMap;return(O=function(r){return r?N:u})(j)},d=e("K+nK"),B.t0=d,B.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return B.t1=B.sent,s=(0,B.t0)(B.t1),B.t2=a,B.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return B.t3=B.sent,v=(0,B.t2)(B.t3),B.next=15,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 15:return b=B.sent,o=function(){var j=(0,v.useState)(!1),u=(0,s.default)(j,2),N=u[0],f=u[1];return v.default.createElement(v.default.Fragment,null,v.default.createElement("label",null,"\u53EF\u5C55\u5F00/\u6536\u7F29\uFF1A",v.default.createElement("input",{type:"checkbox",value:N,onChange:function(){return f(!N)}})),v.default.createElement(b.PivotTable,{leftExpandable:N,showSubtotal:!1,meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]}))},B.abrupt("return",o);case 18:case"end":return B.stop()}},F)}));function P(){return D.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-2"}},"form-render-demo":{component:Object(L.dynamic)({loader:function(){var D=Object(z.a)(h.a.mark(function F(){var d,s,v,b,O,a,o,l,B,A,j,u,N,f;return h.a.wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return j=function(T,M){if(!M&&T&&T.__esModule)return T;if(T===null||typeof T!="object"&&typeof T!="function")return{default:T};var U=A(M);if(U&&U.has(T))return U.get(T);var ne={},ae=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ye in T)if(ye!=="default"&&Object.prototype.hasOwnProperty.call(T,ye)){var je=ae?Object.getOwnPropertyDescriptor(T,ye):null;je&&(je.get||je.set)?Object.defineProperty(ne,ye,je):ne[ye]=T[ye]}return ne.default=T,U&&U.set(T,ne),ne},A=function(T){if(typeof WeakMap!="function")return null;var M=new WeakMap,U=new WeakMap;return(A=function(ae){return ae?U:M})(T)},d=e("K+nK"),g.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return g.t0=d,g.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return g.t1=g.sent,s=(0,g.t0)(g.t1),g.t2=d,g.next=13,e.e(70).then(e.bind(null,"fWQN"));case 13:return g.t3=g.sent,v=(0,g.t2)(g.t3),g.t4=d,g.next=18,e.e(71).then(e.bind(null,"mtLc"));case 18:return g.t5=g.sent,b=(0,g.t4)(g.t5),g.t6=d,g.next=23,e.e(64).then(e.bind(null,"yKVA"));case 23:return g.t7=g.sent,O=(0,g.t6)(g.t7),g.t8=d,g.next=28,e.e(62).then(e.bind(null,"879j"));case 28:return g.t9=g.sent,a=(0,g.t8)(g.t9),g.t10=d,g.next=33,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 33:return g.t11=g.sent,o=(0,g.t10)(g.t11),g.next=37,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 37:return l=g.sent,g.t12=j,g.next=41,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 41:return g.t13=g.sent,B=(0,g.t12)(g.t13),u={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},N=function(p){(0,O.default)(M,p);var T=(0,a.default)(M);function M(){return(0,v.default)(this,M),T.apply(this,arguments)}return(0,b.default)(M,[{key:"render",value:function(){var ne=this.props.form;return o.default.createElement("div",null,o.default.createElement(B.default,{form:ne,schema:u}),o.default.createElement(s.default,{type:"primary",onClick:ne.submit},"\u63D0\u4EA4"))}}]),M}(o.default.Component),f=(0,B.connectForm)(N),g.abrupt("return",f);case 47:case"end":return g.stop()}},F)}));function P(){return D.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default connectForm(Demo);`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo"}},"form-render-demo-1":{component:Object(L.dynamic)({loader:function(){var D=Object(z.a)(h.a.mark(function F(){var d,s,v,b,O,a,o,l,B,A;return h.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return o=function(f,r){if(!r&&f&&f.__esModule)return f;if(f===null||typeof f!="object"&&typeof f!="function")return{default:f};var g=a(r);if(g&&g.has(f))return g.get(f);var p={},T=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var M in f)if(M!=="default"&&Object.prototype.hasOwnProperty.call(f,M)){var U=T?Object.getOwnPropertyDescriptor(f,M):null;U&&(U.get||U.set)?Object.defineProperty(p,M,U):p[M]=f[M]}return p.default=f,g&&g.set(f,p),p},a=function(f){if(typeof WeakMap!="function")return null;var r=new WeakMap,g=new WeakMap;return(a=function(T){return T?g:r})(f)},d=e("K+nK"),u.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return u.t0=d,u.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return u.t1=u.sent,s=(0,u.t0)(u.t1),u.t2=d,u.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return u.t3=u.sent,v=(0,u.t2)(u.t3),u.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 17:return b=u.sent,u.t4=o,u.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 21:return u.t5=u.sent,O=(0,u.t4)(u.t5),l={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},B=function(){var f=(0,O.useForm)();return v.default.createElement("div",null,v.default.createElement(O.default,{form:f,schema:l}),v.default.createElement(s.default,{type:"primary",onClick:f.submit},"\u63D0\u4EA4"))},A=B,u.abrupt("return",A);case 27:case"end":return u.stop()}},F)}));function P(){return D.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo-1"}},"form-render-demo-2":{component:Object(L.dynamic)({loader:function(){var D=Object(z.a)(h.a.mark(function F(){var d,s,v,b,O,a,o,l,B,A;return h.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return o=function(f,r){if(!r&&f&&f.__esModule)return f;if(f===null||typeof f!="object"&&typeof f!="function")return{default:f};var g=a(r);if(g&&g.has(f))return g.get(f);var p={},T=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var M in f)if(M!=="default"&&Object.prototype.hasOwnProperty.call(f,M)){var U=T?Object.getOwnPropertyDescriptor(f,M):null;U&&(U.get||U.set)?Object.defineProperty(p,M,U):p[M]=f[M]}return p.default=f,g&&g.set(f,p),p},a=function(f){if(typeof WeakMap!="function")return null;var r=new WeakMap,g=new WeakMap;return(a=function(T){return T?g:r})(f)},d=e("K+nK"),u.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return u.t0=d,u.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return u.t1=u.sent,s=(0,u.t0)(u.t1),u.t2=d,u.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return u.t3=u.sent,v=(0,u.t2)(u.t3),u.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 17:return b=u.sent,u.t4=o,u.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 21:return u.t5=u.sent,O=(0,u.t4)(u.t5),l={displayType:"row",labelWidth:60,type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F",type:"range",format:"date"},siteUrl:{title:"\u7F51\u5740",type:"string",placeholder:"\u6B64\u5904\u5FC5\u586B",required:!0,props:{addonBefore:"https://",addonAfter:".com"}}}},B=function(){var f=(0,O.useForm)(),r=function(p,T){T.length>0?alert("errors:"+JSON.stringify(T)):alert("formData:"+JSON.stringify(p,null,2))};return v.default.createElement("div",null,v.default.createElement(O.default,{form:f,schema:l,onFinish:r}),v.default.createElement(s.default,{type:"primary",onClick:f.submit},"\u63D0\u4EA4"))},A=B,u.abrupt("return",A);case 27:case"end":return u.stop()}},F)}));function P(){return D.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-demo-2"}},"migrate-demo":{component:Object(L.dynamic)({loader:function(){var D=Object(z.a)(h.a.mark(function F(){var d,s,v,b,O,a,o,l;return h.a.wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return o=function(){var u=(0,v.useForm)(),N=function(r,g){g.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(g))):alert(JSON.stringify(r))};return s.default.createElement("div",null,s.default.createElement(v.default,{form:u,schema:a,onFinish:N}),s.default.createElement("button",{onClick:u.submit},"\u63D0\u4EA4"))},O=function(u,N){if(!N&&u&&u.__esModule)return u;if(u===null||typeof u!="object"&&typeof u!="function")return{default:u};var f=b(N);if(f&&f.has(u))return f.get(u);var r={},g=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var p in u)if(p!=="default"&&Object.prototype.hasOwnProperty.call(u,p)){var T=g?Object.getOwnPropertyDescriptor(u,p):null;T&&(T.get||T.set)?Object.defineProperty(r,p,T):r[p]=u[p]}return r.default=u,f&&f.set(u,r),r},b=function(u){if(typeof WeakMap!="function")return null;var N=new WeakMap,f=new WeakMap;return(b=function(g){return g?f:N})(u)},d=e("K+nK"),A.t0=d,A.next=7,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 7:return A.t1=A.sent,s=(0,A.t0)(A.t1),A.t2=O,A.next=12,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 12:return A.t3=A.sent,v=(0,A.t2)(A.t3),a={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}},l=o,A.abrupt("return",l);case 17:case"end":return A.stop()}},F)}));function P(){return D.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate-demo"}},"display-demo":{component:Object(L.dynamic)({loader:function(){var D=Object(z.a)(h.a.mark(function F(){var d,s,v,b,O;return h.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return d=e("K+nK"),o.t0=d,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,s=(0,o.t0)(o.t1),o.t2=d,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,v=(0,o.t2)(o.t3),b=function(B){return{type:"object",displayType:B,properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},objectName:{title:"\u5BF9\u8C61",bind:"obj",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},O=function(){return s.default.createElement("div",null,s.default.createElement("h2",null,"display: row"),s.default.createElement(v.default,{schema:b("row")}),s.default.createElement("h2",null,"display: column"),s.default.createElement(v.default,{schema:b("column")}))},o.abrupt("return",O);case 14:case"end":return o.stop()}},F)}));function P(){return D.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`},"demo/display.js":{import:"../demo/display",content:W}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo"}},"display-demo-1":{component:Object(L.dynamic)({loader:function(){var D=Object(z.a)(h.a.mark(function F(){var d,s,v,b,O;return h.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return d=e("K+nK"),o.t0=d,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,s=(0,o.t0)(o.t1),o.t2=d,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,v=(0,o.t2)(o.t3),b={type:"object",displayType:"inline",properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},O=function(){return s.default.createElement(v.default,{schema:b})},o.abrupt("return",O);case 14:case"end":return o.stop()}},F)}));function P(){return D.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:W}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-1"}},"display-demo-2":{component:Object(L.dynamic)({loader:function(){var D=Object(z.a)(h.a.mark(function F(){var d,s,v,b,O;return h.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return d=e("K+nK"),o.t0=d,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,s=(0,o.t0)(o.t1),o.t2=d,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,v=(0,o.t2)(o.t3),b={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0},check:{title:"box",type:"boolean",default:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},O=function(){return s.default.createElement(v.default,{readOnly:!0,schema:b})},o.abrupt("return",O);case 14:case"end":return o.stop()}},F)}));function P(){return D.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form readOnly schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:W}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-2"}},"display-demo-3":{component:Object(L.dynamic)({loader:function(){var D=Object(z.a)(h.a.mark(function F(){var d,s,v,b,O;return h.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return d=e("K+nK"),o.t0=d,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,s=(0,o.t0)(o.t1),o.t2=d,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,v=(0,o.t2)(o.t3),b={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0,width:"50%"},check:{title:"box",type:"boolean",default:!0,width:"50%",labelWidth:6},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},O=function(){return s.default.createElement(v.default,{labelWidth:"200",schema:b})},o.abrupt("return",O);case 14:case"end":return o.stop()}},F)}));function P(){return D.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form labelWidth="200" schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:W}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-3"}},"display-demo-4":{component:Object(L.dynamic)({loader:function(){var D=Object(z.a)(h.a.mark(function F(){var d,s,v,b,O,a;return h.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,s=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,v=(0,l.t2)(l.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},O=function(){return s.default.createElement(v.default,{schema:b})},a=O,l.abrupt("return",a);case 15:case"end":return l.stop()}},F)}));function P(){return D.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:W}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-4"}},"display-demo-5":{component:Object(L.dynamic)({loader:function(){var D=Object(z.a)(h.a.mark(function F(){var d,s,v,b,O,a;return h.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,s=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,v=(0,l.t2)(l.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},O=function(){return s.default.createElement(v.default,{schema:b})},a=O,l.abrupt("return",a);case 15:case"end":return l.stop()}},F)}));function P(){return D.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:W}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-5"}},"display-demo-6":{component:Object(L.dynamic)({loader:function(){var D=Object(z.a)(h.a.mark(function F(){var d,s,v,b,O,a;return h.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,s=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,v=(0,l.t2)(l.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},O=function(){return s.default.createElement(v.default,{schema:b})},a=O,l.abrupt("return",a);case 15:case"end":return l.stop()}},F)}));function P(){return D.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:W}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-6"}},"display-demo-7":{component:Object(L.dynamic)({loader:function(){var D=Object(z.a)(h.a.mark(function F(){var d,s,v,b,O,a;return h.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,s=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,v=(0,l.t2)(l.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},O=function(){return s.default.createElement(v.default,{schema:b})},a=O,l.abrupt("return",a);case 15:case"end":return l.stop()}},F)}));function P(){return D.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:W}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-7"}},"form-methods-demo":{component:Object(L.dynamic)({loader:function(){var D=Object(z.a)(h.a.mark(function F(){var d,s,v,b,O,a,o,l,B,A,j,u,N;return h.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return j=function(p,T){if(!T&&p&&p.__esModule)return p;if(p===null||typeof p!="object"&&typeof p!="function")return{default:p};var M=A(T);if(M&&M.has(p))return M.get(p);var U={},ne=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ae in p)if(ae!=="default"&&Object.prototype.hasOwnProperty.call(p,ae)){var ye=ne?Object.getOwnPropertyDescriptor(p,ae):null;ye&&(ye.get||ye.set)?Object.defineProperty(U,ae,ye):U[ae]=p[ae]}return U.default=p,M&&M.set(p,U),U},A=function(p){if(typeof WeakMap!="function")return null;var T=new WeakMap,M=new WeakMap;return(A=function(ne){return ne?M:T})(p)},d=e("K+nK"),r.next=5,e.e(18).then(e.t.bind(null,"lfLe",7));case 5:return r.t0=d,r.next=8,e.e(19).then(e.t.bind(null,"Cp9S",7));case 8:return r.t1=r.sent,s=(0,r.t0)(r.t1),r.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return r.t2=d,r.next=15,e.e(13).then(e.t.bind(null,"4IMT",7));case 15:return r.t3=r.sent,v=(0,r.t2)(r.t3),r.next=19,e.e(14).then(e.t.bind(null,"tL+A",7));case 19:return r.t4=d,r.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return r.t5=r.sent,b=(0,r.t4)(r.t5),r.t6=d,r.next=27,Promise.resolve().then(e.bind(null,"tJVT"));case 27:return r.t7=r.sent,O=(0,r.t6)(r.t7),r.t8=j,r.next=32,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 32:return r.t9=r.sent,a=(0,r.t8)(r.t9),r.next=36,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 36:return o=r.sent,r.t10=j,r.next=40,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 40:return r.t11=r.sent,l=(0,r.t10)(r.t11),r.next=44,e.e(15).then(e.bind(null,"OH0R"));case 44:return B=r.sent,u=function(){var p=(0,l.useForm)(),T=(0,a.useState)({}),M=(0,O.default)(T,2),U=M[0],ne=M[1],ae=function(){(0,B.fakeApi)("xxx/getForm").then(function(Te){p.setValues({input1:"hello world",select1:"c"})})};(0,a.useEffect)(function(){(0,B.delay)(1e3).then(function(je){ne({type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}})})},[]);var ye=function(Te,gn){gn.length>0?b.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(gn.map(function($n){return $n.name}))):(0,B.fakeApi)("xxx/submit",Te).then(function($n){return b.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})};return a.default.createElement("div",{style:{width:"400px"}},a.default.createElement(l.default,{form:p,schema:U,onFinish:ye}),a.default.createElement(s.default,null,a.default.createElement(v.default,{onClick:ae},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),a.default.createElement(v.default,{type:"primary",onClick:p.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},N=u,r.abrupt("return",N);case 48:case"end":return r.stop()}},F)}));function P(){return D.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:tn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo"}},"form-methods-demo-1":{component:Object(L.dynamic)({loader:function(){var D=Object(z.a)(h.a.mark(function F(){var d,s,v,b,O,a,o,l,B,A,j,u,N;return h.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return A=function(p,T){if(!T&&p&&p.__esModule)return p;if(p===null||typeof p!="object"&&typeof p!="function")return{default:p};var M=B(T);if(M&&M.has(p))return M.get(p);var U={},ne=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ae in p)if(ae!=="default"&&Object.prototype.hasOwnProperty.call(p,ae)){var ye=ne?Object.getOwnPropertyDescriptor(p,ae):null;ye&&(ye.get||ye.set)?Object.defineProperty(U,ae,ye):U[ae]=p[ae]}return U.default=p,M&&M.set(p,U),U},B=function(p){if(typeof WeakMap!="function")return null;var T=new WeakMap,M=new WeakMap;return(B=function(ne){return ne?M:T})(p)},d=e("K+nK"),r.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return r.t0=d,r.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return r.t1=r.sent,s=(0,r.t0)(r.t1),r.t2=d,r.next=13,Promise.resolve().then(e.bind(null,"PpiC"));case 13:return r.t3=r.sent,v=(0,r.t2)(r.t3),r.next=17,e.e(14).then(e.t.bind(null,"tL+A",7));case 17:return r.t4=d,r.next=20,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 20:return r.t5=r.sent,b=(0,r.t4)(r.t5),r.t6=d,r.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return r.t7=r.sent,O=(0,r.t6)(r.t7),r.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 29:return a=r.sent,r.t8=A,r.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 33:return r.t9=r.sent,o=(0,r.t8)(r.t9),r.next=37,e.e(15).then(e.bind(null,"OH0R"));case 37:return l=r.sent,j={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},u=function(){var p=(0,o.useForm)(),T=function(ne,ae){ae.length>0?b.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(ae.map(function(ye){return ye.name}))):(0,l.fakeApi)("xxx/submit",ne).then(function(ye){return b.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},M=function(ne){var ae=ne.data,ye=ne.errors,je=ne.schema,Te=(0,v.default)(ne,["data","errors","schema"]);return(0,l.fakeApi)("xxx/validation").then(function(gn){return{name:"select1",error:["\u5916\u90E8\u6821\u9A8C\u9519\u8BEF"]}})};return O.default.createElement("div",{style:{width:"400px"}},O.default.createElement(o.default,{form:p,schema:j,beforeFinish:M,onFinish:T}),O.default.createElement(s.default,{type:"primary",onClick:p.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},N=u,r.abrupt("return",N);case 42:case"end":return r.stop()}},F)}));function P(){return D.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:tn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-1"}},"form-methods-demo-2":{component:Object(L.dynamic)({loader:function(){var D=Object(z.a)(h.a.mark(function F(){var d,s,v,b,O,a,o,l,B,A,j,u,N;return h.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return A=function(p,T){if(!T&&p&&p.__esModule)return p;if(p===null||typeof p!="object"&&typeof p!="function")return{default:p};var M=B(T);if(M&&M.has(p))return M.get(p);var U={},ne=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ae in p)if(ae!=="default"&&Object.prototype.hasOwnProperty.call(p,ae)){var ye=ne?Object.getOwnPropertyDescriptor(p,ae):null;ye&&(ye.get||ye.set)?Object.defineProperty(U,ae,ye):U[ae]=p[ae]}return U.default=p,M&&M.set(p,U),U},B=function(p){if(typeof WeakMap!="function")return null;var T=new WeakMap,M=new WeakMap;return(B=function(ne){return ne?M:T})(p)},d=e("K+nK"),r.next=5,e.e(18).then(e.t.bind(null,"lfLe",7));case 5:return r.t0=d,r.next=8,e.e(19).then(e.t.bind(null,"Cp9S",7));case 8:return r.t1=r.sent,s=(0,r.t0)(r.t1),r.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return r.t2=d,r.next=15,e.e(13).then(e.t.bind(null,"4IMT",7));case 15:return r.t3=r.sent,v=(0,r.t2)(r.t3),r.next=19,e.e(14).then(e.t.bind(null,"tL+A",7));case 19:return r.t4=d,r.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return r.t5=r.sent,b=(0,r.t4)(r.t5),r.t6=d,r.next=27,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 27:return r.t7=r.sent,O=(0,r.t6)(r.t7),r.next=31,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 31:return a=r.sent,r.t8=A,r.next=35,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 35:return r.t9=r.sent,o=(0,r.t8)(r.t9),r.next=39,e.e(15).then(e.bind(null,"OH0R"));case 39:return l=r.sent,j={type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F\u8303\u56F4",type:"range",format:"date"}}},u=function(){var p=(0,o.useForm)(),T=function(ne,ae){ae.length>0?b.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(ae.map(function(ye){return ye.name}))):(0,l.fakeApi)("xxx/submit",ne).then(function(ye){return b.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},M=function(){(0,l.fakeApi)("xxx/getForm").then(function(ne){p.setValues({startDate:"2020-04-04",endDate:"2020-04-24"})})};return O.default.createElement("div",{style:{width:"400px"}},O.default.createElement(o.default,{form:p,schema:j,onFinish:T}),O.default.createElement(s.default,null,O.default.createElement(v.default,{onClick:M},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),O.default.createElement(v.default,{type:"primary",onClick:p.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},N=u,r.abrupt("return",N);case 44:case"end":return r.stop()}},F)}));function P(){return D.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:tn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-2"}},"form-methods-demo-3":{component:Object(L.dynamic)({loader:function(){var D=Object(z.a)(h.a.mark(function F(){var d,s,v,b,O,a,o,l,B,A,j,u;return h.a.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return B=function(g,p){if(!p&&g&&g.__esModule)return g;if(g===null||typeof g!="object"&&typeof g!="function")return{default:g};var T=l(p);if(T&&T.has(g))return T.get(g);var M={},U=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ne in g)if(ne!=="default"&&Object.prototype.hasOwnProperty.call(g,ne)){var ae=U?Object.getOwnPropertyDescriptor(g,ne):null;ae&&(ae.get||ae.set)?Object.defineProperty(M,ne,ae):M[ne]=g[ne]}return M.default=g,T&&T.set(g,M),M},l=function(g){if(typeof WeakMap!="function")return null;var p=new WeakMap,T=new WeakMap;return(l=function(U){return U?T:p})(g)},d=e("K+nK"),f.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return f.t0=d,f.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return f.t1=f.sent,s=(0,f.t0)(f.t1),f.next=12,e.e(14).then(e.t.bind(null,"tL+A",7));case 12:return f.t2=d,f.next=15,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 15:return f.t3=f.sent,v=(0,f.t2)(f.t3),f.t4=B,f.next=20,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 20:return f.t5=f.sent,b=(0,f.t4)(f.t5),f.next=24,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 24:return O=f.sent,f.t6=B,f.next=28,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 28:return f.t7=f.sent,a=(0,f.t6)(f.t7),f.next=32,e.e(15).then(e.bind(null,"OH0R"));case 32:return o=f.sent,A={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select1:{title:"\u5355\u9009",type:"string",widget:"select"}}}}},j=function(){var g=(0,a.useForm)(),p=function(){g.setSchemaByPath("obj1.select1",{enum:["east","south","west","north"],enumNames:["\u4E1C","\u5357","\u897F","\u5317"]})},T=function(U,ne){ne.length>0?v.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(ne.map(function(ae){return ae.name}))):v.default.info(JSON.stringify(U))};return b.default.createElement("div",{style:{width:"400px"}},b.default.createElement(a.default,{form:g,schema:A,onMount:p,onFinish:T}),b.default.createElement(s.default,{type:"primary",onClick:g.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},u=j,f.abrupt("return",u);case 37:case"end":return f.stop()}},F)}));function P(){return D.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:tn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-3"}},"function-demo":{component:Object(L.dynamic)({loader:function(){var D=Object(z.a)(h.a.mark(function F(){var d,s,v,b,O,a,o,l;return h.a.wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return O=function(u,N){if(!N&&u&&u.__esModule)return u;if(u===null||typeof u!="object"&&typeof u!="function")return{default:u};var f=b(N);if(f&&f.has(u))return f.get(u);var r={},g=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var p in u)if(p!=="default"&&Object.prototype.hasOwnProperty.call(u,p)){var T=g?Object.getOwnPropertyDescriptor(u,p):null;T&&(T.get||T.set)?Object.defineProperty(r,p,T):r[p]=u[p]}return r.default=u,f&&f.set(u,r),r},b=function(u){if(typeof WeakMap!="function")return null;var N=new WeakMap,f=new WeakMap;return(b=function(g){return g?f:N})(u)},d=e("K+nK"),A.t0=d,A.next=6,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 6:return A.t1=A.sent,s=(0,A.t0)(A.t1),A.t2=O,A.next=11,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 11:return A.t3=A.sent,v=(0,A.t2)(A.t3),a={type:"object",properties:{select1:{title:"\u5355\u9009",description:"\u5C1D\u8BD5\u9009\u62E9\u201C\u663E\u793A\u8F93\u5165\u6846\u201D",type:"string",enum:["a","b"],enumNames:["\u9690\u85CF\u8F93\u5165\u6846","\u663E\u793A\u8F93\u5165\u6846"],disabled:"{{rootValue.input1.length > 5}}",default:"a"},input1:{title:"\u8F93\u5165\u6846",description:"\u5C1D\u8BD5\u8F93\u5165\u8D85\u8FC75\u4E2A\u5B57\u7B26",type:"string",hidden:'{{formData.select1 == "a"}}'}}},o=function(){var u=(0,v.useForm)();return s.default.createElement(v.default,{form:u,schema:a})},l=o,A.abrupt("return",l);case 17:case"end":return A.stop()}},F)}));function P(){return D.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo1;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo"}},"function-demo-1":{component:Object(L.dynamic)({loader:function(){var D=Object(z.a)(h.a.mark(function F(){var d,s,v,b,O;return h.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return d=e("K+nK"),o.t0=d,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,s=(0,o.t0)(o.t1),o.t2=d,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return o.t3=o.sent,v=(0,o.t2)(o.t3),o.next=13,e.e(17).then(e.bind(null,"8iYR"));case 13:return b=o.sent,O=function(){return s.default.createElement(v.default,{schema:b.expression})},o.abrupt("return",O);case 16:case"end":return o.stop()}},F)}));function P(){return D.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { expression } from '../json/schema';

export default () => <FR schema={expression} />;`},"demo/FR.jsx":{import:"../demo/FR",content:Ne},"json/schema.js":{import:"../json/schema",content:de}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo-1"}},"lifeCycle-demo":{component:Object(L.dynamic)({loader:function(){var D=Object(z.a)(h.a.mark(function F(){var d,s,v,b,O,a,o,l,B;return h.a.wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return O=function(N,f){if(!f&&N&&N.__esModule)return N;if(N===null||typeof N!="object"&&typeof N!="function")return{default:N};var r=b(f);if(r&&r.has(N))return r.get(N);var g={},p=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var T in N)if(T!=="default"&&Object.prototype.hasOwnProperty.call(N,T)){var M=p?Object.getOwnPropertyDescriptor(N,T):null;M&&(M.get||M.set)?Object.defineProperty(g,T,M):g[T]=N[T]}return g.default=N,r&&r.set(N,g),g},b=function(N){if(typeof WeakMap!="function")return null;var f=new WeakMap,r=new WeakMap;return(b=function(p){return p?r:f})(N)},j.t0=O,j.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return j.t1=j.sent,d=(0,j.t0)(j.t1),j.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 9:return s=j.sent,j.t2=O,j.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 13:return j.t3=j.sent,v=(0,j.t2)(j.t3),a=function(N){return new Promise(function(f){return setTimeout(f,N)})},o={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u4E0B\u62C9\u9009\u6846",description:"\u52A0\u8F7D\u4E2D...",type:"string",enum:[],widget:"select"}}},l=function(){var N=(0,v.useForm)(),f=function(){N.setValues({input1:"hello world"}),a(3e3).then(function(g){N.setSchemaByPath("select1",{description:"",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]})})};return d.default.createElement(v.default,{form:N,schema:o,onMount:f})},B=l,j.abrupt("return",B);case 20:case"end":return j.stop()}},F)}));function P(){return D.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"lifeCycle-demo"}},"listDisplay-demo":{component:Object(L.dynamic)({loader:function(){var D=Object(z.a)(h.a.mark(function F(){var d,s,v,b,O,a;return h.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,s=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,v=(0,l.t2)(l.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},O=function(){return s.default.createElement(v.default,{schema:b})},a=O,l.abrupt("return",a);case 15:case"end":return l.stop()}},F)}));function P(){return D.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:W}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo"}},"listDisplay-demo-1":{component:Object(L.dynamic)({loader:function(){var D=Object(z.a)(h.a.mark(function F(){var d,s,v,b,O,a;return h.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,s=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,v=(0,l.t2)(l.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},O=function(){return s.default.createElement(v.default,{schema:b})},a=O,l.abrupt("return",a);case 15:case"end":return l.stop()}},F)}));function P(){return D.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:W}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-1"}},"listDisplay-demo-2":{component:Object(L.dynamic)({loader:function(){var D=Object(z.a)(h.a.mark(function F(){var d,s,v,b,O,a;return h.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,s=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,v=(0,l.t2)(l.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},O=function(){return s.default.createElement(v.default,{schema:b})},a=O,l.abrupt("return",a);case 15:case"end":return l.stop()}},F)}));function P(){return D.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:W}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-2"}},"listDisplay-demo-3":{component:Object(L.dynamic)({loader:function(){var D=Object(z.a)(h.a.mark(function F(){var d,s,v,b,O,a;return h.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,s=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,v=(0,l.t2)(l.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},O=function(){return s.default.createElement(v.default,{schema:b})},a=O,l.abrupt("return",a);case 15:case"end":return l.stop()}},F)}));function P(){return D.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:W}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-3"}},"listDisplay-demo-4":{component:Object(L.dynamic)({loader:function(){var D=Object(z.a)(h.a.mark(function F(){var d,s,v,b,O,a;return h.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,s=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,v=(0,l.t2)(l.t3),window.hello=function(B){var A=B.value;console.log(A)},b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list4",itemProps:{buttons:[{callback:"hello",text:"\u590D\u5236"}]},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},O=function(){return s.default.createElement(v.default,{schema:b})},a=O,l.abrupt("return",a);case 16:case"end":return l.stop()}},F)}));function P(){return D.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:W}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-4"}},"watch-demo":{component:Object(L.dynamic)({loader:function(){var D=Object(z.a)(h.a.mark(function F(){var d,s,v,b,O,a,o,l;return h.a.wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return O=function(u,N){if(!N&&u&&u.__esModule)return u;if(u===null||typeof u!="object"&&typeof u!="function")return{default:u};var f=b(N);if(f&&f.has(u))return f.get(u);var r={},g=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var p in u)if(p!=="default"&&Object.prototype.hasOwnProperty.call(u,p)){var T=g?Object.getOwnPropertyDescriptor(u,p):null;T&&(T.get||T.set)?Object.defineProperty(r,p,T):r[p]=u[p]}return r.default=u,f&&f.set(u,r),r},b=function(u){if(typeof WeakMap!="function")return null;var N=new WeakMap,f=new WeakMap;return(b=function(g){return g?f:N})(u)},A.t0=O,A.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return A.t1=A.sent,d=(0,A.t0)(A.t1),A.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 9:return s=A.sent,A.t2=O,A.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 13:return A.t3=A.sent,v=(0,A.t2)(A.t3),a={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"}}},o=function(){var u=(0,v.useForm)(),N={"#":function(r){console.log("\u8868\u5355\u7684\u65F6\u65F6\u6570\u636E\u4E3A\uFF1A",r)},input1:function(r){u.setValueByPath("input2",r)}};return d.default.createElement(v.default,{form:u,schema:a,watch:N})},l=o,A.abrupt("return",l);case 19:case"end":return A.stop()}},F)}));function P(){return D.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo"}},"watch-demo-1":{component:Object(L.dynamic)({loader:function(){var D=Object(z.a)(h.a.mark(function F(){var d,s,v,b,O,a,o,l,B,A;return h.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return o=function(f,r){if(!r&&f&&f.__esModule)return f;if(f===null||typeof f!="object"&&typeof f!="function")return{default:f};var g=a(r);if(g&&g.has(f))return g.get(f);var p={},T=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var M in f)if(M!=="default"&&Object.prototype.hasOwnProperty.call(f,M)){var U=T?Object.getOwnPropertyDescriptor(f,M):null;U&&(U.get||U.set)?Object.defineProperty(p,M,U):p[M]=f[M]}return p.default=f,g&&g.set(f,p),p},a=function(f){if(typeof WeakMap!="function")return null;var r=new WeakMap,g=new WeakMap;return(a=function(T){return T?g:r})(f)},d=e("K+nK"),u.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return u.t0=d,u.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return u.t1=u.sent,s=(0,u.t0)(u.t1),u.t2=o,u.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return u.t3=u.sent,v=(0,u.t2)(u.t3),u.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 17:return b=u.sent,u.t4=o,u.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 21:return u.t5=u.sent,O=(0,u.t4)(u.t5),l={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"radio"}}}}},B=function(){var f=(0,O.useForm)(),r=function(T,M){M.length>0?alert("errorFields:"+JSON.stringify(M)):alert("formData:"+JSON.stringify(T,null,2))},g={input1:function(T){T.length>2?f.setSchemaByPath("obj1.select",function(M){var U=M.enumNames;return{enumNames:U.map(function(ne){return ne+"a"})}}):f.setSchemaByPath("obj1.select",{enumNames:["\u65E9","\u4E2D","\u665A"]})}};return v.default.createElement("div",null,v.default.createElement(O.default,{form:f,schema:l,onFinish:r,watch:g}),v.default.createElement(s.default,{type:"",style:{marginRight:8},onClick:function(){return f.setSchemaByPath("input2",{title:"\u7F16\u8F91\u6846",format:"textarea"})}},"\u5C06 input \u6539\u4E3A textarea"),v.default.createElement(s.default,{type:"primary",onClick:f.submit},"\u63D0\u4EA4"))},A=B,u.abrupt("return",A);case 27:case"end":return u.stop()}},F)}));function P(){return D.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo-1"}},"widget-demo":{component:Object(L.dynamic)({loader:function(){var D=Object(z.a)(h.a.mark(function F(){var d,s,v,b,O,a,o,l,B,A,j,u,N;return h.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return B=function(p,T){if(!T&&p&&p.__esModule)return p;if(p===null||typeof p!="object"&&typeof p!="function")return{default:p};var M=l(T);if(M&&M.has(p))return M.get(p);var U={},ne=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ae in p)if(ae!=="default"&&Object.prototype.hasOwnProperty.call(p,ae)){var ye=ne?Object.getOwnPropertyDescriptor(p,ae):null;ye&&(ye.get||ye.set)?Object.defineProperty(U,ae,ye):U[ae]=p[ae]}return U.default=p,M&&M.set(p,U),U},l=function(p){if(typeof WeakMap!="function")return null;var T=new WeakMap,M=new WeakMap;return(l=function(ne){return ne?M:T})(p)},d=e("K+nK"),r.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return r.t0=d,r.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return r.t1=r.sent,s=(0,r.t0)(r.t1),r.next=12,Promise.all([e.e(3),e.e(63)]).then(e.t.bind(null,"cUip",7));case 12:return r.t2=d,r.next=15,Promise.all([e.e(0),e.e(13),e.e(61),e.e(69)]).then(e.t.bind(null,"iJl9",7));case 15:return r.t3=r.sent,v=(0,r.t2)(r.t3),r.t4=d,r.next=20,e.e(72).then(e.bind(null,"0Owb"));case 20:return r.t5=r.sent,b=(0,r.t4)(r.t5),r.t6=B,r.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return r.t7=r.sent,O=(0,r.t6)(r.t7),r.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 29:return a=r.sent,r.t8=B,r.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 33:return r.t9=r.sent,o=(0,r.t8)(r.t9),A={type:"object",properties:{string:{title:"\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6",type:"string",widget:"site"},select:{title:"\u5355\u9009",type:"number",enum:[1,2,3],enumNames:["\u9009\u98791","\u9009\u98792","\u9009\u98793"]}}},j=function(p){return console.log("widget props:",p),O.default.createElement(v.default,(0,b.default)({addonBefore:"http://",addonAfter:".com"},p))},u=function(){var p=(0,o.useForm)(),T=function(){};return O.default.createElement("div",null,O.default.createElement(o.default,{readOnly:!0,form:p,schema:A,widgets:{site:j},onFinish:function(U){return alert(JSON.stringify(U,null,2))}}),O.default.createElement(s.default,{type:"primary",onClick:p.submit},"\u63D0\u4EA4"))},N=u,r.abrupt("return",N);case 40:case"end":return r.stop()}},F)}));function P(){return D.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},identifier:"widget-demo"}},"schema-demo":{component:Object(L.dynamic)({loader:function(){var D=Object(z.a)(h.a.mark(function F(){var d,s,v,b,O;return h.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return d=e("K+nK"),o.t0=d,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,s=(0,o.t0)(o.t1),o.t2=d,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return o.t3=o.sent,v=(0,o.t2)(o.t3),o.next=13,e.e(17).then(e.bind(null,"8iYR"));case 13:return b=o.sent,O=function(){return s.default.createElement(v.default,{schema:b.basic})},o.abrupt("return",O);case 16:case"end":return o.stop()}},F)}));function P(){return D.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { basic } from '../json/schema';

export default () => <FR schema={basic} />;`},"demo/FR.jsx":{import:"../demo/FR",content:Ne},"json/schema.js":{import:"../json/schema",content:de}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo"}},"schema-demo-1":{component:Object(L.dynamic)({loader:function(){var D=Object(z.a)(h.a.mark(function F(){var d,s,v,b,O;return h.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return d=e("K+nK"),o.t0=d,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,s=(0,o.t0)(o.t1),o.t2=d,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return o.t3=o.sent,v=(0,o.t2)(o.t3),o.next=13,e.e(17).then(e.bind(null,"8iYR"));case 13:return b=o.sent,O=function(){return s.default.createElement(v.default,{schema:b.titleTrick})},o.abrupt("return",O);case 16:case"end":return o.stop()}},F)}));function P(){return D.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { titleTrick } from '../json/schema';

export default () => <FR schema={titleTrick} />;`},"demo/FR.jsx":{import:"../demo/FR",content:Ne},"json/schema.js":{import:"../json/schema",content:de}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo-1"}},"docs-playground":{component:Object(L.dynamic)({loader:function(){var D=Object(z.a)(h.a.mark(function F(){return h.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(22)]).then(e.bind(null,"BASV"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},F)}));function P(){return D.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:rt},"main.js":{import:"./main",content:Ie},"json/simplest.json":{import:"./json/simplest.json",content:Bn},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:Tn},"monaco/index.js":{import:"./monaco",content:On},"suggestionsMap.js":{import:"./suggestionsMap",content:fn},"index.css":{import:"./index.css",content:Qe}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:"^17.x"},"react-dom":{version:">=16.9.0"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.4.5-beta.0"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-monaco-editor":{version:"0.43.0"},"@types/react":{version:"^17.x"}},identifier:"docs-playground"}},"table-render-advanced":{component:Object(L.dynamic)({loader:function(){var D=Object(z.a)(h.a.mark(function F(){return h.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(22)]).then(e.bind(null,"7ZP+"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},F)}));function P(){return D.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{tsx:Wn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.0"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"1.x"}},transform:!0,defaultShowCode:!0,identifier:"table-render-advanced"}},"table-render-demo":{component:Object(L.dynamic)({loader:function(){var D=Object(z.a)(h.a.mark(function F(){var d,s,v,b,O,a,o,l,B;return h.a.wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return d=e("K+nK"),j.t0=d,j.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return j.t1=j.sent,s=(0,j.t0)(j.t1),j.next=8,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(59)]).then(e.bind(null,"P2DI"));case 8:for(v=j.sent,b=[],O=0;O<6;O++)b.push({id:O.toString(),title:"\u6807\u9898".concat(O+1),created_at:new Date().getTime()});return a={type:"object",properties:{string:{title:"\u6807\u9898",type:"string","ui:width":"30%"},created_at:{title:"\u521B\u5EFA\u65F6\u95F4",type:"string",format:"date","ui:width":"30%"}}},o=[{title:"\u6807\u9898",dataIndex:"title"},{title:"\u521B\u5EFA\u65F6\u95F4",key:"since",dataIndex:"created_at",valueType:"date"},{title:"\u64CD\u4F5C",render:function(N,f){return s.default.createElement("a",{onClick:function(){return alert(N.title)}},"\u7F16\u8F91")}}],l=function(){var N=function(){return{rows:b,total:b.length}};return s.default.createElement(v.TableProvider,null,s.default.createElement(v.Search,{schema:a,api:N}),s.default.createElement(v.Table,{headerTitle:"\u6700\u7B80\u8868\u683C",columns:o,rowKey:"id"}))},B=l,j.abrupt("return",B);case 16:case"end":return j.stop()}},F)}));function P(){return D.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Wrapper;`}},dependencies:{react:{version:">=16.8.0"},"table-render":{version:"1.1.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.x"}},transform:!0,defaultShowCode:!0,identifier:"table-render-demo"}},"generator-demo":{component:Object(L.dynamic)({loader:function(){var D=Object(z.a)(h.a.mark(function F(){var d,s,v,b,O,a;return h.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,s=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(60)]).then(e.bind(null,"nYSz"));case 9:return l.t3=l.sent,v=(0,l.t2)(l.t3),b={type:"object",properties:{inputName:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string"}}},O=function(){return s.default.createElement("div",{style:{height:"80vh"}},s.default.createElement(v.default,{defaultValue:b}))},a=O,l.abrupt("return",a);case 15:case"end":return l.stop()}},F)}));function P(){return D.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"generator-demo"}},"generator-modal":{component:Object(L.dynamic)({loader:function(){var D=Object(z.a)(h.a.mark(function F(){return h.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(22)]).then(e.bind(null,"PPgD"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},F)}));function P(){return D.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:Kn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.4.0"},"react-dom":{version:">=16.9.0"}},identifier:"generator-modal"}},"generator-settings":{component:Object(L.dynamic)({loader:function(){var D=Object(z.a)(h.a.mark(function F(){return h.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(22)]).then(e.bind(null,"M63W"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},F)}));function P(){return D.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:Sn}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-settings"}},"generator-layout":{component:Object(L.dynamic)({loader:function(){var D=Object(z.a)(h.a.mark(function F(){return h.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(22)]).then(e.bind(null,"SOdT"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},F)}));function P(){return D.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:we},"index.less":{import:"./index.less",content:xn}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-layout"}},"generator-transformer":{component:Object(L.dynamic)({loader:function(){var D=Object(z.a)(h.a.mark(function F(){return h.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(22)]).then(e.bind(null,"jktF"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},F)}));function P(){return D.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:Ln}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.4.0"},"react-dom":{version:">=16.9.0"}},identifier:"generator-transformer"}},"generator-playground":{component:Object(L.dynamic)({loader:function(){var D=Object(z.a)(h.a.mark(function F(){return h.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(22)]).then(e.bind(null,"TYW4"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},F)}));function P(){return D.apply(this,arguments)}return P}()}),previewerProps:{sources:{_:{jsx:qn},"index.less":{import:"./index.less",content:xn}},dependencies:{react:{version:">=16.8.0"},umi:{version:"3.4.20"},"fr-generator":{version:"2.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-playground"}}}},PbZa:function(Nn,hn,e){"use strict";e.r(hn);var z=e("q1tI"),n=e.n(z),h=e("dEAq"),L=e.n(h),me=e("0zqC"),W=e("ZpkN"),tn=e("JjdP"),Ne=n.a.memo(tn.default["table-render-demo"].component);hn.default=de=>(n.a.useEffect(()=>{de!=null&&de.location.hash&&h.AnchorLink.scrollToAnchor(decodeURIComponent(de.location.hash.slice(1)))},[]),n.a.createElement(n.a.Fragment,null,n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"markdown"},n.a.createElement("div",{style:{display:"flex",alignItems:"center",marginBottom:"24px"}},n.a.createElement("img",{src:"https://img.alicdn.com/tfs/TB17UtINiLaK1RjSZFxXXamPFXa-606-643.png",alt:"logo",width:"48px"}),n.a.createElement("span",{style:{fontSize:"30px",fontWeight:"600",display:"inline-block",marginLeft:"12px"}},"TableRender")),n.a.createElement("p",{style:{display:"flex",justifyContent:"space-between",width:"440px"}},n.a.createElement(h.Link,{to:"https://www.npmjs.com/package/table-render?_blank"},n.a.createElement("img",{alt:"npm",src:"https://img.shields.io/npm/v/table-render.svg?maxAge=3600&style=flat-square"})),n.a.createElement(h.Link,{to:"https://npmjs.org/package/table-render"},n.a.createElement("img",{alt:"NPM downloads",src:"https://img.shields.io/npm/dm/table-render.svg?style=flat-square"})),n.a.createElement(h.Link,{to:"https://npmjs.org/package/table-render"},n.a.createElement("img",{alt:"NPM all downloads",src:"https://img.shields.io/npm/dt/table-render.svg?style=flat-square"})),n.a.createElement("a",null,n.a.createElement("img",{alt:"PRs Welcome",src:"https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square"}))),n.a.createElement("blockquote",null,n.a.createElement("p",null,"\u6613\u7528\u4E14\u8F7B\u91CF\u7684\u4E2D\u540E\u53F0",n.a.createElement("strong",null,"\u5217\u8868\u89E3\u51B3\u65B9\u6848"),"\uFF0C\u5E38\u7528\u4E8E",n.a.createElement("strong",null,"\u641C\u7D22\u5217\u8868\u9875"),"\u5FEB\u901F\u751F\u6210")),n.a.createElement("h2",{id:"\u4F18\u52BF"},n.a.createElement(h.AnchorLink,{to:"#\u4F18\u52BF","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u4F18\u52BF"),n.a.createElement("ol",null,n.a.createElement("li",null,n.a.createElement("strong",null,"\u771F\u6B63\u5F00\u7BB1\u5373\u7528"),"\uFF1A\u4EE5\u6700\u7B80\u5355\u7684 API \u914D\u7F6E\u8BF7\u6C42\u548C\u8868\u5934\u7684\u5B57\u6BB5\uFF0C\u5C31\u80FD\u751F\u6210\u4E00\u4E2A\u597D\u7528\u641C\u7D22\u5217\u8868\u3002"),n.a.createElement("li",null,n.a.createElement("strong",null,"XRender \u751F\u6001"),"\uFF1A\u641C\u7D22\u7B5B\u9009\u80FD\u529B\u7528 FormRender \u6765\u63D0\u4F9B\uFF0C\u4EE5\u6700\u5C0F\u6210\u672C\u5FEB\u901F\u751F\u6210\u4E0A\u4FA7\u641C\u7D22\u9762\u677F\u3002"),n.a.createElement("li",null,n.a.createElement("strong",null,"\u65E0\u7F1D\u4E60\u60EF\u4F7F\u7528"),"\uFF1A\u8868\u683C\u80FD\u7528 Ant Design Table \u6765\u63D0\u4F9B\uFF0C\u964D\u4F4E\u7528\u6237\u4F7F\u7528\u6210\u672C\u3002")),n.a.createElement("h2",{id:"\u4F55\u65F6\u4F7F\u7528"},n.a.createElement(h.AnchorLink,{to:"#\u4F55\u65F6\u4F7F\u7528","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u4F55\u65F6\u4F7F\u7528"),n.a.createElement("ol",null,n.a.createElement("li",null,"\u7528\u4E8E\u67E5\u770B\u548C\u5904\u7406\u591A\u6761\u7ED3\u6784\u7C7B\u4F3C\u7684\u6570\u636E\uFF0C\u53EF\u5BF9\u6570\u636E\u8FDB\u884C\u6392\u5E8F\u3001\u7B5B\u9009\u3001\u5BF9\u6BD4\u6216\u5176\u4ED6\u81EA\u5B9A\u4E49\u64CD\u4F5C\uFF0C\u5E38\u6709\u5BFC\u822A\u5230\u8BE6\u60C5\u9875\u9762\u7684\u4F5C\u7528\u3002"),n.a.createElement("li",null,"\u8868\u683C\u5217\u8868\u5EFA\u8BAE\u5C06\u91CD\u8981\u4FE1\u606F\u548C\u64CD\u4F5C\u5C55\u793A\u51FA\u6765\uFF0C\u4E0D\u91CD\u8981\u4FE1\u606F\u76F4\u63A5\u6536\u8D77\uFF0C\u53EF\u4EE5\u5E2E\u52A9\u7528\u6237\u66F4\u9AD8\u6548\u7684\u67E5\u770B\u3001\u5904\u7406\u3001\u67E5\u627E\u6570\u636E\u3002")),n.a.createElement("h2",{id:"\u5982\u4F55\u4F7F\u7528"},n.a.createElement(h.AnchorLink,{to:"#\u5982\u4F55\u4F7F\u7528","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u5982\u4F55\u4F7F\u7528"),n.a.createElement("h3",{id:"\u5B89\u88C5"},n.a.createElement(h.AnchorLink,{to:"#\u5B89\u88C5","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u5B89\u88C5"),n.a.createElement("p",null,"table-render \u4F9D\u8D56 ant design\uFF0C\u5355\u72EC\u4F7F\u7528\u4E0D\u8981\u5FD8\u8BB0\u5B89\u88C5\uFF5E"),n.a.createElement(W.a,{code:"npm i table-render --save",lang:"sh"}),n.a.createElement("h3",{id:"\u4EE3\u7801\u6F14\u793A"},n.a.createElement(h.AnchorLink,{to:"#\u4EE3\u7801\u6F14\u793A","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u4EE3\u7801\u6F14\u793A")),n.a.createElement(me.default,tn.default["table-render-demo"].previewerProps,n.a.createElement(Ne,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h2",{id:"api"},n.a.createElement(h.AnchorLink,{to:"#api","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"API"),n.a.createElement("h3",{id:"tableprovider-\u53C2\u6570"},n.a.createElement(h.AnchorLink,{to:"#tableprovider-\u53C2\u6570","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),n.a.createElement("code",null,"<TableProvider>")," \u53C2\u6570"),n.a.createElement("p",null,n.a.createElement("strong",null,"TableProvider \u672C\u8D28\u5C31\u662F\u4E00\u4E2A React Context\uFF0C\u5C06\u5BF9\u5E94\u7684 ",n.a.createElement("code",null,"<Search>")," \u548C ",n.a.createElement("code",null,"<Table>")," \u5305\u88F9\u8D77\u6765\uFF0C\u53EF\u4EE5\u5F88\u65B9\u4FBF\u5728\u91CC\u9762\u63D2\u5165\u4E00\u4E9B\u5176\u4ED6\u4E1C\u897F\uFF0C\u4E0D\u9700\u8981\u4EFB\u4F55\u5165\u53C2")),n.a.createElement("h3",{id:"search-\u53C2\u6570"},n.a.createElement(h.AnchorLink,{to:"#search-\u53C2\u6570","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),n.a.createElement("code",null,"<Search>")," \u53C2\u6570"),n.a.createElement("p",null,n.a.createElement("strong",null,"\u6211\u4EEC\u5C06\u641C\u7D22\u76F8\u5173\u7684\u80FD\u529B\u653E\u5230 ",n.a.createElement("code",null,"<Search>")," \u4E0A\u9762\u914D\u7F6E\uFF0C\u5305\u62EC\u5BF9\u5E94\u7684\u641C\u7D22\u7B5B\u9009\u8868\u5355\u7684\u6E32\u67D3")),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u5C5E\u6027"),n.a.createElement("th",null,"\u63CF\u8FF0"),n.a.createElement("th",null,"\u7C7B\u578B"),n.a.createElement("th",null,"\u9ED8\u8BA4\u503C"),n.a.createElement("th",null,"\u5FC5\u586B"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"schema"),n.a.createElement("td",null,"\u7528\u4E8E\u6E32\u67D3\u8868\u5355\u7684 schema\uFF0C\u5177\u4F53\u7684 api \u53C2\u8003 ",n.a.createElement(h.Link,{to:"/form-render/config/schema"},"form-render \u6587\u6863")),n.a.createElement("td",null,n.a.createElement("code",null,"object")),n.a.createElement("td",null,"-"),n.a.createElement("td",null,"\u662F")),n.a.createElement("tr",null,n.a.createElement("td",null,"api"),n.a.createElement("td",null,"\u521D\u59CB\u5316&\u70B9\u51FB\u67E5\u8BE2\u65F6\u6267\u884C\u7684\u51FD\u6570"),n.a.createElement("td",null,n.a.createElement("code",null,"Function")," or ",n.a.createElement("code",null,"Array")),n.a.createElement("td",null,"-"),n.a.createElement("td",null,"\u662F")),n.a.createElement("tr",null,n.a.createElement("td",null,"onSearch"),n.a.createElement("td",null,"\u5728\u8868\u683C\u67E5\u8BE2\u65F6\u6267\u884C\u4E00\u4E9B\u989D\u5916\u7684\u64CD\u4F5C"),n.a.createElement("td",null,n.a.createElement("code",null,"Function")),n.a.createElement("td",null,"-"),n.a.createElement("td",null,"\u5426")),n.a.createElement("tr",null,n.a.createElement("td",null,"afterSearch"),n.a.createElement("td",null,"\u5728\u8868\u683C\u67E5\u8BE2\u7ED3\u675F\u540E\u6267\u884C\u4E00\u4E9B\u989D\u5916\u7684\u64CD\u4F5C"),n.a.createElement("td",null,n.a.createElement("code",null,"Function")),n.a.createElement("td",null,"-"),n.a.createElement("td",null,"\u5426")),n.a.createElement("tr",null,n.a.createElement("td",null,"searchOnMount"),n.a.createElement("td",null,"\u7EC4\u4EF6\u521D\u6B21\u6302\u8F7D\u65F6\uFF0C\u662F\u5426\u9ED8\u8BA4\u6267\u884C\u67E5\u8BE2\u52A8\u4F5C"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"true")),n.a.createElement("td",null,"\u5426")),n.a.createElement("tr",null,n.a.createElement("td",null,"hidden"),n.a.createElement("td",null,"\u662F\u5426\u9690\u85CF",n.a.createElement("code",null,"<Search />"),"\u7EC4\u4EF6"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"false")),n.a.createElement("td",null,"\u5426")),n.a.createElement("tr",null,n.a.createElement("td",null,"searchBtnRender"),n.a.createElement("td",null,"\u81EA\u5B9A\u4E49\u8868\u5355\u67E5\u8BE2\u6309\u94AE"),n.a.createElement("td",null,n.a.createElement("code",null,"(refresh,clearSearch) => ReactNode[]")),n.a.createElement("td",null,"-"),n.a.createElement("td",null,"\u5426")),n.a.createElement("tr",null,n.a.createElement("td",null,"searchBtnStyle"),n.a.createElement("td",null,"\u81EA\u5B9A\u4E49\u8868\u5355\u64CD\u4F5C\u6309\u94AE\u7EC4\u7684\u6837\u5F0F"),n.a.createElement("td",null,n.a.createElement("code",null,"React.CSSProperties")),n.a.createElement("td",null,"{","}"),n.a.createElement("td",null,"\u5426")),n.a.createElement("tr",null,n.a.createElement("td",null,"searchBtnClassName"),n.a.createElement("td",null,"\u81EA\u5B9A\u4E49\u8868\u5355\u64CD\u4F5C\u6309\u94AE\u7EC4\u7684 ClassName"),n.a.createElement("td",null,n.a.createElement("code",null,"string")),n.a.createElement("td",null,"''"),n.a.createElement("td",null,"\u5426")))),n.a.createElement("h3",{id:"table-\u53C2\u6570"},n.a.createElement(h.AnchorLink,{to:"#table-\u53C2\u6570","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),n.a.createElement("code",null,"<Table>")," \u53C2\u6570"),n.a.createElement("p",null,n.a.createElement("strong",null,"\u652F\u6301\u6240\u6709 antd table \u7684 props\uFF0C\u4F46\u662F",n.a.createElement("code",null,"dataSource"),", ",n.a.createElement("code",null,"loading"),", ",n.a.createElement("code",null,"pagination"),"\u8FD9\u51E0\u4E2A\u53C2\u6570\u662F\u5185\u90E8\u72B6\u6001\uFF0C\u4E0D\u9700\u8981\u586B\u5199\uFF0C\u6700\u57FA\u672C\u7684\u4F7F\u7528\u5C31\u9700\u8981\u586B\u5199",n.a.createElement("code",null,"columns"))),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u5C5E\u6027"),n.a.createElement("th",null,"\u63CF\u8FF0"),n.a.createElement("th",null,"\u7C7B\u578B"),n.a.createElement("th",null,"\u9ED8\u8BA4\u503C"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"headerTitle"),n.a.createElement("td",null,"\u8868\u683C\u6807\u9898"),n.a.createElement("td",null,n.a.createElement("code",null,"string")),n.a.createElement("td",null,n.a.createElement("code",null,"ReactNode"))),n.a.createElement("tr",null,n.a.createElement("td",null,"toolbarRender"),n.a.createElement("td",null,"\u8868\u683C\u4E3B\u4F53\u53F3\u4E0A\u65B9\u7684\u63A7\u4EF6\uFF0C\u4F8B\u5982\u201C\u6DFB\u52A0\u201D\u6309\u94AE"),n.a.createElement("td",null,n.a.createElement("code",null,"() => ReactNode[]")),n.a.createElement("td",null,n.a.createElement("code",null,"false"))),n.a.createElement("tr",null,n.a.createElement("td",null,"toolbarAction"),n.a.createElement("td",null,"\u663E\u793A\u5728\u8868\u683C\u4E3B\u4F53\u53F3\u4E0A\u65B9\u7684 Icon \u5217\u8868\uFF0C\u5185\u7F6E\u4E86",n.a.createElement("code",null,"\u5237\u65B0\u3001\u8C03\u6574\u5BC6\u5EA6\u3001\u5168\u5C4F\u663E\u793A")," \u7B49\u529F\u80FD"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"false"))),n.a.createElement("tr",null,n.a.createElement("td",null,"pageChangeWithRequest"),n.a.createElement("td",null,"\u5207\u6362\u5206\u9875\u65F6\u662F\u5426\u9700\u8981\u8BF7\u6C42\u63A5\u53E3"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"true"))),n.a.createElement("tr",null,n.a.createElement("td",null,"columns"),n.a.createElement("td",null,"\u5217\u5B9A\u4E49"),n.a.createElement("td",null,n.a.createElement("code",null,"object")),n.a.createElement("td",null,n.a.createElement("code",null,"false"))))),n.a.createElement("h4",{id:"table-\u53C2\u6570-\u4E2D-columns-\u5217\u5B9A\u4E49"},n.a.createElement(h.AnchorLink,{to:"#table-\u53C2\u6570-\u4E2D-columns-\u5217\u5B9A\u4E49","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),n.a.createElement("code",null,"<Table>")," \u53C2\u6570 \u4E2D Columns \u5217\u5B9A\u4E49"),n.a.createElement("p",null,n.a.createElement("strong",null,"columns \u4E3A antd \u5DF2\u6709\u7684 props\uFF0C\u6240\u4EE5\u652F\u6301 antd \u6240\u6709\u7684\u652F\u6301\u7684 ",n.a.createElement(h.Link,{to:"https://ant.design/components/table-cn/#Column"},"columns")," \u7684\u914D\u7F6E\uFF0C\u540C\u65F6\u4E5F\u63D0\u4F9B\u4E86\u4E00\u4E9B\u66F4\u65B9\u4FBF\u7684 api\uFF0C\u52A0\u5FEB\u4E66\u5199")),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u5C5E\u6027"),n.a.createElement("th",null,"\u63CF\u8FF0"),n.a.createElement("th",null,"\u7C7B\u578B"),n.a.createElement("th",null,"\u9ED8\u8BA4\u503C"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"ellipsis"),n.a.createElement("td",null,"\u662F\u5426\u81EA\u52A8\u7F29\u7565"),n.a.createElement("td",null,"boolean"),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"copyable"),n.a.createElement("td",null,"\u662F\u5426\u652F\u6301\u590D\u5236"),n.a.createElement("td",null,"boolean"),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"valueType"),n.a.createElement("td",null,"\u503C\u7684\u7C7B\u578B\uFF0C\u8BE6\u89C1\u4E0B\u65B9 ",n.a.createElement("code",null,"valueType \u914D\u7F6E")),n.a.createElement("td",null,n.a.createElement("code",null,"string"),"\uFF08",n.a.createElement("code",null,"text")," | ",n.a.createElement("code",null,"money")," | ",n.a.createElement("code",null,"date")," | ",n.a.createElement("code",null,"dateTime"),"\uFF09"),n.a.createElement("td",null,n.a.createElement("code",null,"text"))),n.a.createElement("tr",null,n.a.createElement("td",null,"enum"),n.a.createElement("td",null,"\u5F53\u524D\u5217\u503C\u7684\u679A\u4E3E\uFF0C\u8BE6\u89C1",n.a.createElement(h.Link,{to:"./table-render/demo"},"\u9AD8\u7EA7\u7528\u6CD5")),n.a.createElement("td",null,n.a.createElement("code",null,"object")),n.a.createElement("td",null,"-")))),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement("strong",null,"valueType \u503C\u7C7B\u578B"),"\uFF1ATableRender \u5C01\u88C5\u4E86\u4E00\u4E9B\u5E38\u7528\u7684\u503C\u7C7B\u578B\u6765\u51CF\u5C11\u91CD\u590D\u7684 render \u64CD\u4F5C\uFF0C\u914D\u7F6E\u4E00\u4E2A valueType \u5373\u53EF\u5C55\u793A\u683C\u5F0F\u5316\u54CD\u5E94\u7684\u6570\u636E\uFF0C\u5177\u4F53\u4F7F\u7528\u53EF\u53C2\u8003 ",n.a.createElement(h.Link,{to:"./table-render/demo"},"\u6848\u4F8B\u4EE3\u7801"),"\uFF1A"),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u5C5E\u6027"),n.a.createElement("th",null,"\u63CF\u8FF0"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"text"),n.a.createElement("td",null,"\u666E\u901A\u7684\u6587\u672C\u7C7B\u578B")),n.a.createElement("tr",null,n.a.createElement("td",null,"date"),n.a.createElement("td",null,"\u5F53\u6570\u636E\u662F\u65E5\u671F\u7C7B\u578B\u7684\u8FD4\u56DE\u65F6\uFF0C\u4F1A\u81EA\u52A8\u5C06\u683C\u5F0F\u8F6C\u6362\u4E3A '2020-10-20'")),n.a.createElement("tr",null,n.a.createElement("td",null,"dateTime"),n.a.createElement("td",null,"\u5F53\u6570\u636E\u662F\u65E5\u671F\u7C7B\u578B\u7684\u8FD4\u56DE\u65F6\uFF0C\u4F1A\u81EA\u52A8\u5C06\u683C\u5F0F\u8F6C\u6362\u4E3A '2020-10-20 19:30:00'")),n.a.createElement("tr",null,n.a.createElement("td",null,"money"),n.a.createElement("td",null,"\u5F53\u6570\u636E\u662F\u91D1\u989D\u65F6\uFF0C\u4F1A\u81EA\u52A8\u5C06\u683C\u5F0F\u8F6C\u6362\u4E3A '\xA5999,999,999.99'")))))),n.a.createElement("h3",{id:"context-\u4E0A\u4E0B\u6587"},n.a.createElement(h.AnchorLink,{to:"#context-\u4E0A\u4E0B\u6587","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Context \u4E0A\u4E0B\u6587"),n.a.createElement("p",null,n.a.createElement("strong",null,"\u53EF\u901A\u8FC7 ",n.a.createElement("code",null,"useTable")," \u83B7\u53D6 ",n.a.createElement("code",null,"table-render")," \u7684 context\uFF0C\u4F8B\u5982: ",n.a.createElement("code",null,"refresh"),"\u3001",n.a.createElement("code",null,"tableState"),"\u3001",n.a.createElement("code",null,"setTable")," \u7B49\u5C5E\u6027")),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u5C5E\u6027"),n.a.createElement("th",null,"\u63CF\u8FF0"),n.a.createElement("th",null,"\u7C7B\u578B"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"tableState"),n.a.createElement("td",null,"\u8FD9\u4E9B\u662F\u5168\u5C40\u7684\u72B6\u6001\uFF0C\u6839\u636E\u9700\u8981\u4F7F\u7528"),n.a.createElement("td",null,n.a.createElement("code",null,"object"))),n.a.createElement("tr",null,n.a.createElement("td",null,"refresh"),n.a.createElement("td",null,"\u5237\u65B0\u8868\u683C\u6570\u636E"),n.a.createElement("td",null,n.a.createElement("code",null,"function"))),n.a.createElement("tr",null,n.a.createElement("td",null,"setTable"),n.a.createElement("td",null,"\u7528\u4E8E\u4FEE\u6539\u5168\u5C40\u72B6\u6001\u7684\u5DE5\u5177\u51FD\u6570\uFF0CsetTable \u4E4B\u4E8E tableState\uFF0C\u7B49\u540C setState \u4E4B\u4E8E state"),n.a.createElement("td",null,n.a.createElement("code",null,"function"))),n.a.createElement("tr",null,n.a.createElement("td",null,"changeTab"),n.a.createElement("td",null,"\u624B\u52A8\u5207\u6362 tab \u7684\u51FD\u6570\uFF0C\u4F8B\u5982\u76EE\u524D\u4E24\u4E2A\u641C\u7D22 tab\uFF1A \u201C\u6211\u7684\u6D3B\u52A8\u201D\uFF0C\u201C\u5168\u90E8\u6D3B\u52A8\u201D \uFF08\u5206\u522B\u5BF9\u5E94 tab \u503C\u4E3A 0 \u548C 1\uFF09"),n.a.createElement("td",null,n.a.createElement("code",null,"function"))),n.a.createElement("tr",null,n.a.createElement("td",null,"form"),n.a.createElement("td",null,"Search \u7EC4\u4EF6\u662F form-render \u751F\u6210\u7684\uFF0C\u53EF\u4EE5\u53D6\u5230\u641C\u7D22\u8868\u5355\u7684 form \u5B9E\u4F8B\u4EE5\u53CA\u6302\u5728\u4E0A\u9762\u7684\u65B9\u6CD5\uFF0C\u4F8B\u5982 ",n.a.createElement("code",null,"form.resetFields")," \u6E05\u7A7A\u641C\u7D22\u9879"),n.a.createElement("td",null,n.a.createElement("code",null,"object"))))),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement("strong",null,"\u5BFC\u51FA useTable \u4EE5\u53CA\u5BF9\u5E94\u7684\u65B9\u6CD5")),n.a.createElement(W.a,{code:`import { useTable } from 'table-render';
const { refresh, tableState, setTable } = useTable();`,lang:"js"})),n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement("strong",null,"\u5176\u4E2D tableState \u7684\u6570\u636E\u683C\u5F0F\u5982\u4E0B\uFF1A")),n.a.createElement(W.a,{code:`{
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
}`,lang:"js"})),n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement("strong",null,"refresh \u7528\u6CD5")),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u5165\u53C2"),n.a.createElement("th",null,"\u7C7B\u578B"),n.a.createElement("th",null,"\u8BF4\u660E"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"stay"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,"\u5237\u65B0\u662F\u5426\u4FDD\u7559\u5728\u73B0\u5728\u7684\u9875\u7801\u4E0A\uFF0C\u9ED8\u8BA4 false\uFF0C\u56DE\u5230\u7B2C\u4E00\u9875")),n.a.createElement("tr",null,n.a.createElement("td",null,"tab"),n.a.createElement("td",null,n.a.createElement("code",null,"number")),n.a.createElement("td",null,"0,1,2.. \u5982\u679C searchApi \u662F\u6570\u7EC4\u4F1A\u51FA\u73B0\u7684\u641C\u7D22\u9009\u62E9 tab\uFF0C\u7528\u4E8E\u5F3A\u5236\u641C\u7D22\u67D0\u4E2A tab\uFF0C\u4E0D\u5E38\u7528")))),n.a.createElement("ol",null,n.a.createElement("li",null,"\u76F4\u63A5\u7528\uFF1Arefresh()"),n.a.createElement("li",null,"\u5237\u65B0\u6570\u636E\uFF0C\u4F46\u505C\u7559\u5728\u73B0\u6709\u7684\u9875\u7801\uFF1Arefresh(","{"," stay: true ","}",")"))),n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement("strong",null,"changeTab \u7528\u6CD5")),n.a.createElement(W.a,{code:`//\u4EE5\u4E0B\u4EE3\u7801\u5C06\u624B\u52A8\u5207\u6362\u5230\u201C\u5168\u90E8\u6D3B\u52A8\u201D\uFF08tab = 1\uFF09
const { changeTab } = useTable();
//...
const onClick = () => {
  changeTab(1);
};`,lang:"js"})))))))},TIsu:function(Nn,hn,e){},Zs1V:function(Nn){Nn.exports=JSON.parse("{}")},p8sG:function(Nn,hn,e){"use strict";Nn.exports=e("80pN")}}]);
