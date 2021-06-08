(window.webpackJsonp=window.webpackJsonp||[]).push([[51,10],{"0zqC":function(Kn,gn,e){"use strict";e.r(gn);var z=e("tJVT"),n=e("q1tI"),h=e.n(n),W=e("wx14"),oe=e("rePB"),L=e("ODXe"),we=e("U8pU"),Fe=e("Ff2n"),ve=e("VTBJ"),xn=e("TSYQ"),Pe=e.n(xn),yn=e("Zm9Q"),ln=e("5Z9U"),Rn=e("6cGi"),pn=e("KQm4"),Ye=e("wgJM"),Wn=e("t23M");function Mn(t){var i=Object(n.useRef)(),c=Object(n.useRef)(!1);function E(){for(var C=arguments.length,y=new Array(C),S=0;S<C;S++)y[S]=arguments[S];c.current||(Ye.a.cancel(i.current),i.current=Object(Ye.a)(function(){t.apply(void 0,y)}))}return Object(n.useEffect)(function(){return function(){c.current=!0,Ye.a.cancel(i.current)}},[]),E}function jn(t){var i=Object(n.useRef)([]),c=Object(n.useState)({}),E=Object(L.a)(c,2),C=E[1],y=Object(n.useRef)(typeof t=="function"?t():t),S=Mn(function(){var w=y.current;i.current.forEach(function($){w=$(w)}),i.current=[],y.current=w,C({})});function R(w){i.current.push(w),S()}return[y.current,R]}var We=e("4IlW");function zn(t,i){var c,E=t.prefixCls,C=t.id,y=t.active,S=t.rtl,R=t.tab,w=R.key,$=R.tab,V=R.disabled,J=R.closeIcon,G=t.tabBarGutter,se=t.tabPosition,Q=t.closable,X=t.renderWrapper,ue=t.removeAriaLabel,x=t.editable,q=t.onClick,re=t.onRemove,Y=t.onFocus,le="".concat(E,"-tab");n.useEffect(function(){return re},[]);var k={};se==="top"||se==="bottom"?k[S?"marginLeft":"marginRight"]=G:k.marginBottom=G;var be=x&&Q!==!1&&!V;function ee(ie){V||q(ie)}function ce(ie){ie.preventDefault(),ie.stopPropagation(),x.onEdit("remove",{key:w,event:ie})}var me=n.createElement("div",{key:w,ref:i,className:Pe()(le,(c={},Object(oe.a)(c,"".concat(le,"-with-remove"),be),Object(oe.a)(c,"".concat(le,"-active"),y),Object(oe.a)(c,"".concat(le,"-disabled"),V),c)),style:k,onClick:ee},n.createElement("div",{role:"tab","aria-selected":y,id:C&&"".concat(C,"-tab-").concat(w),className:"".concat(le,"-btn"),"aria-controls":C&&"".concat(C,"-panel-").concat(w),"aria-disabled":V,tabIndex:V?null:0,onClick:function(H){H.stopPropagation(),ee(H)},onKeyDown:function(H){[We.a.SPACE,We.a.ENTER].includes(H.which)&&(H.preventDefault(),ee(H))},onFocus:Y},$),be&&n.createElement("button",{type:"button","aria-label":ue||"remove",tabIndex:0,className:"".concat(le,"-remove"),onClick:function(H){H.stopPropagation(),ce(H)}},J||x.removeIcon||"\xD7"));return X&&(me=X(me)),me}var Ln=n.forwardRef(zn),_n={width:0,height:0,left:0,top:0};function ct(t,i,c){return Object(n.useMemo)(function(){for(var E,C=new Map,y=i.get((E=t[0])===null||E===void 0?void 0:E.key)||_n,S=y.left+y.width,R=0;R<t.length;R+=1){var w=t[R].key,$=i.get(w);if(!$){var V;$=i.get((V=t[R-1])===null||V===void 0?void 0:V.key)||_n}var J=C.get(w)||Object(ve.a)({},$);J.right=S-J.left-J.width,C.set(w,J)}return C},[t.map(function(E){return E.key}).join("_"),i,c])}var P={width:0,height:0,left:0,top:0,right:0};function I(t,i,c,E,C){var y=C.tabs,S=C.tabPosition,R=C.rtl,w,$,V;["top","bottom"].includes(S)?(w="width",$=R?"right":"left",V=Math.abs(i.left)):(w="height",$="top",V=-i.top);var J=i[w],G=c[w],se=E[w],Q=J;return G+se>J&&(Q=J-se),Object(n.useMemo)(function(){if(!y.length)return[0,0];for(var X=y.length,ue=X,x=0;x<X;x+=1){var q=t.get(y[x].key)||P;if(q[$]+q[w]>V+Q){ue=x-1;break}}for(var re=0,Y=X-1;Y>=0;Y-=1){var le=t.get(y[Y].key)||P;if(le[$]<V){re=Y+1;break}}return[re,ue]},[t,V,Q,S,y.map(function(X){return X.key}).join("_"),R])}var j=e("Gytx"),d=e.n(j),o=e("Kwbf");function v(t,i){var c=t.prefixCls,E=t.invalidate,C=t.item,y=t.renderItem,S=t.responsive,R=t.registerSize,w=t.itemKey,$=t.className,V=t.style,J=t.children,G=t.display,se=t.order,Q=t.component,X=Q===void 0?"div":Q,ue=Object(Fe.a)(t,["prefixCls","invalidate","item","renderItem","responsive","registerSize","itemKey","className","style","children","display","order","component"]),x=S&&!G;function q(be){R(w,be)}n.useEffect(function(){return function(){q(null)}},[]);var re=y&&C!==void 0?y(C):J,Y;E||(Y={opacity:x?0:1,height:x?0:void 0,overflowY:x?"hidden":void 0,order:S?se:void 0,pointerEvents:x?"none":void 0});var le={};x&&(le["aria-hidden"]=!0);var k=n.createElement(X,Object(W.a)({className:Pe()(!E&&c,$),style:Object(ve.a)(Object(ve.a)({},Y),V)},le,ue,{ref:i}),re);return S&&(k=n.createElement(Wn.default,{onResize:function(ee){var ce=ee.offsetWidth;q(ce)}},k)),k}var b=n.forwardRef(v);b.displayName="Item";var O=b;function a(){var t=Object(n.useState)({}),i=Object(L.a)(t,2),c=i[1],E=Object(n.useRef)([]),C=Object(n.useRef)(!1),y=0,S=0;Object(n.useEffect)(function(){return function(){C.current=!0}},[]);function R(w){var $=y;y+=1,E.current.length<$+1&&(E.current[$]=w);var V=E.current[$];function J(G){E.current[$]=typeof G=="function"?G(E.current[$]):G,Ye.a.cancel(S),S=Object(Ye.a)(function(){C.current||c({})})}return[V,J]}return R}var l=function(i,c){var E=n.useContext(A);if(!E){var C=i.component,y=C===void 0?"div":C,S=Object(Fe.a)(i,["component"]);return n.createElement(y,Object(W.a)({},S,{ref:c}))}var R=E.className,w=Object(Fe.a)(E,["className"]),$=i.className,V=Object(Fe.a)(i,["className"]);return n.createElement(A.Provider,{value:null},n.createElement(O,Object(W.a)({ref:c,className:Pe()(R,$)},w,V)))},s=n.forwardRef(l);s.displayName="RawItem";var T=s,A=n.createContext(null),D="responsive",u="invalidate";function F(t){return"+ ".concat(t.length," ...")}function f(t,i){var c=t.prefixCls,E=c===void 0?"rc-overflow":c,C=t.data,y=C===void 0?[]:C,S=t.renderItem,R=t.renderRawItem,w=t.itemKey,$=t.itemWidth,V=$===void 0?10:$,J=t.ssr,G=t.style,se=t.className,Q=t.maxCount,X=t.renderRest,ue=t.renderRawRest,x=t.suffix,q=t.component,re=q===void 0?"div":q,Y=t.itemComponent,le=t.onVisibleChange,k=Object(Fe.a)(t,["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"]),be=a(),ee=J==="full",ce=be(null),me=Object(L.a)(ce,2),ie=me[0],H=me[1],de=ie||0,ge=be(new Map),he=Object(L.a)(ge,2),Se=he[0],Le=he[1],Ee=be(0),Oe=Object(L.a)(Ee,2),Me=Oe[0],Te=Oe[1],Ne=be(0),De=Object(L.a)(Ne,2),Ve=De[0],_e=De[1],Ue=be(0),ze=Object(L.a)(Ue,2),Xe=ze[0],$e=ze[1],Pn=Object(n.useState)(null),an=Object(L.a)(Pn,2),Ze=an[0],un=an[1],En=Object(n.useState)(null),Cn=Object(L.a)(En,2),Ae=Cn[0],He=Cn[1],en=n.useMemo(function(){return Ae===null&&ee?Number.MAX_SAFE_INTEGER:Ae||0},[Ae,ie]),ke=Object(n.useState)(!1),Bn=Object(L.a)(ke,2),Gn=Bn[0],wn=Bn[1],rn="".concat(E,"-item"),Dn=Math.max(Me,Ve),dn=y.length&&Q===D,In=Q===u,nn=dn||typeof Q=="number"&&y.length>Q,sn=Object(n.useMemo)(function(){var pe=y;return dn?ie===null&&ee?pe=y:pe=y.slice(0,Math.min(y.length,de/V)):typeof Q=="number"&&(pe=y.slice(0,Q)),pe},[y,V,ie,Q,dn]),Nn=Object(n.useMemo)(function(){return dn?y.slice(en+1):y.slice(sn.length)},[y,sn,dn,en]),mn=Object(n.useCallback)(function(pe,Re){var Be;return typeof w=="function"?w(pe):(Be=w&&(pe==null?void 0:pe[w]))!==null&&Be!==void 0?Be:Re},[w]),qe=Object(n.useCallback)(S||function(pe){return pe},[S]);function Qe(pe,Re){He(pe),Re||(wn(pe<y.length-1),le==null||le(pe))}function Jn(pe,Re){H(Re.clientWidth)}function Hn(pe,Re){Le(function(Be){var tn=new Map(Be);return Re===null?tn.delete(pe):tn.set(pe,Re),tn})}function tt(pe,Re){_e(Re),Te(Ve)}function On(pe,Re){$e(Re)}function hn(pe){return Se.get(mn(sn[pe],pe))}n.useLayoutEffect(function(){if(de&&Dn&&sn){var pe=Xe,Re=sn.length,Be=Re-1;if(!Re){Qe(0),un(null);return}for(var tn=0;tn<Re;tn+=1){var Zn=hn(tn);if(Zn===void 0){Qe(tn-1,!0);break}if(pe+=Zn,tn===Be-1&&pe+hn(Be)<=de){Qe(Be),un(null);break}else if(pe+Dn>de){Qe(tn-1),un(pe-Zn-Xe+Ve);break}else if(tn===Be){Qe(Be),un(pe-Xe);break}}x&&hn(0)+Xe>de&&un(null)}},[de,Se,Ve,Xe,mn,sn]);var Qn=Gn&&!!Nn.length,Sn={};Ze!==null&&dn&&(Sn={position:"absolute",left:Ze,top:0});var fn={prefixCls:rn,responsive:dn,component:Y,invalidate:In},Xn=R?function(pe,Re){var Be=mn(pe,Re);return n.createElement(A.Provider,{key:Be,value:Object(ve.a)(Object(ve.a)({},fn),{},{order:Re,item:pe,itemKey:Be,registerSize:Hn,display:Re<=en})},R(pe,Re))}:function(pe,Re){var Be=mn(pe,Re);return n.createElement(O,Object(W.a)({},fn,{order:Re,key:Be,item:pe,renderItem:qe,itemKey:Be,registerSize:Hn,display:Re<=en}))},An,Yn={order:Qn?en:Number.MAX_SAFE_INTEGER,className:"".concat(rn,"-rest"),registerSize:tt,display:Qn};if(ue)ue&&(An=n.createElement(A.Provider,{value:Object(ve.a)(Object(ve.a)({},fn),Yn)},ue(Nn)));else{var cn=X||F;An=n.createElement(O,Object(W.a)({},fn,Yn),typeof cn=="function"?cn(Nn):cn)}var Fn=n.createElement(re,Object(W.a)({className:Pe()(!In&&E,se),style:G,ref:i},k),sn.map(Xn),nn?An:null,x&&n.createElement(O,Object(W.a)({},fn,{order:en,className:"".concat(rn,"-suffix"),registerSize:On,display:!0,style:Sn}),x));return dn&&(Fn=n.createElement(Wn.default,{onResize:Jn},Fn)),Fn}var r=n.forwardRef(f);r.displayName="Overflow",r.Item=T,r.RESPONSIVE=D,r.INVALIDATE=u;var g=r,p=g,K=e("1OyB"),B=e("vuIU"),U=e("Ji7U"),ne=e("LK+K"),ae=e("bT9E"),ye=e("YrtM"),Ie=n.createContext(null);function Ke(t,i){var c=Object(ve.a)({},t);return Object.keys(i).forEach(function(E){var C=i[E];C!==void 0&&(c[E]=C)}),c}function bn(t){var i=t.children,c=t.locked,E=Object(Fe.a)(t,["children","locked"]),C=n.useContext(Ie),y=Object(ye.a)(function(){return Ke(C,E)},[C,E],function(S,R){return!c&&(S[0]!==R[0]||!d()(S[1],R[1]))});return n.createElement(Ie.Provider,{value:y},i)}function $n(t,i,c,E){var C=n.useContext(Ie),y=C.activeKey,S=C.onActive,R=C.onInactive,w={active:y===t};return i||(w.onMouseEnter=function($){c==null||c({key:t,domEvent:$}),S(t)},w.onMouseLeave=function($){E==null||E({key:t,domEvent:$}),R(t)}),w}function et(t){var i=t.item,c=Object(Fe.a)(t,["item"]);return Object.defineProperty(c,"item",{get:function(){return Object(o.a)(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),i}}),c}function m(t){var i=t.icon,c=t.props,E=t.children,C;return typeof i=="function"?C=n.createElement(i,Object(ve.a)({},c)):C=i,C||E||null}function N(t){var i=n.useContext(Ie),c=i.mode,E=i.rtl,C=i.inlineIndent;if(c!=="inline")return null;var y=t;return E?{paddingRight:y*C}:{paddingLeft:y*C}}var M=[],fe=n.createContext(null);function _(){return n.useContext(fe)}var je=n.createContext(M);function xe(t){var i=n.useContext(je);return n.useMemo(function(){return t!==void 0?[].concat(Object(pn.a)(i),[t]):i},[i,t])}var Je=n.createContext(null),xt=n.createContext(null);function zt(t,i){return t===void 0?null:"".concat(t,"-").concat(i)}function Gt(t){var i=n.useContext(xt);return zt(i,t)}var ba=function(t){Object(U.a)(c,t);var i=Object(ne.a)(c);function c(){return Object(K.a)(this,c),i.apply(this,arguments)}return Object(B.a)(c,[{key:"render",value:function(){var C=this.props,y=C.title,S=C.attribute,R=C.elementRef,w=Object(Fe.a)(C,["title","attribute","elementRef"]),$=Object(ae.a)(w,["eventKey"]);return Object(o.a)(!S,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),n.createElement(p.Item,Object(W.a)({},S,{title:typeof y=="string"?y:void 0},$,{ref:R}))}}]),c}(n.Component),Ea=function(i){var c,E=i.style,C=i.className,y=i.eventKey,S=i.disabled,R=i.itemIcon,w=i.children,$=i.role,V=i.onMouseEnter,J=i.onMouseLeave,G=i.onClick,se=i.onKeyDown,Q=i.onFocus,X=Object(Fe.a)(i,["style","className","eventKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"]),ue=Gt(y),x=n.useContext(Ie),q=x.prefixCls,re=x.onItemClick,Y=x.disabled,le=x.overflowDisabled,k=x.itemIcon,be=x.selectedKeys,ee=x.onActive,ce="".concat(q,"-item"),me=n.useRef(),ie=n.useRef(),H=Y||S,de=xe(y),ge=function(Ue){return{key:y,keyPath:de,item:me.current,domEvent:Ue}},he=R||k,Se=$n(y,H,V,J),Le=Se.active,Ee=Object(Fe.a)(Se,["active"]),Oe=be.includes(y),Me=N(de.length),Te=function(Ue){if(!H){var ze=ge(Ue);G==null||G(et(ze)),re(ze)}},Ne=function(Ue){if(se==null||se(Ue),Ue.which===We.a.ENTER){var ze=ge(Ue);G==null||G(et(ze)),re(ze)}},De=function(Ue){ee(y),Q==null||Q(Ue)},Ve={};return i.role==="option"&&(Ve["aria-selected"]=Oe),n.createElement(ba,Object(W.a)({ref:me,elementRef:ie,role:$===null?"none":$||"menuitem",tabIndex:S?null:-1,"data-menu-id":le&&ue?null:ue},X,Ee,Ve,{component:"li","aria-disabled":S,style:Object(ve.a)(Object(ve.a)({},Me),E),className:Pe()(ce,(c={},Object(oe.a)(c,"".concat(ce,"-active"),Le),Object(oe.a)(c,"".concat(ce,"-selected"),Oe),Object(oe.a)(c,"".concat(ce,"-disabled"),H),c),C),onClick:Te,onKeyDown:Ne,onFocus:De}),w,n.createElement(m,{props:Object(ve.a)(Object(ve.a)({},i),{},{isSelected:Oe}),icon:he}))};function Ca(t){var i=t.eventKey,c=_(),E=xe(i);return n.useEffect(function(){if(c)return c.registerPath(i,E),function(){c.unregisterPath(i,E)}},[E]),c?null:n.createElement(Ea,t)}var Pt=Ca;function Dt(t,i){return Object(yn.a)(t).map(function(c,E){if(n.isValidElement(c)){var C=c.key;return C==null&&(C="tmp_key-".concat([].concat(Object(pn.a)(i),[E]).join("-"))),n.cloneElement(c,{key:C,eventKey:C})}return c})}function nt(t){var i=n.useRef(t);i.current=t;var c=n.useCallback(function(){for(var E,C=arguments.length,y=new Array(C),S=0;S<C;S++)y[S]=arguments[S];return(E=i.current)===null||E===void 0?void 0:E.call.apply(E,[i].concat(y))},[]);return t?c:void 0}var Oa=function(i,c){var E=i.className,C=i.children,y=Object(Fe.a)(i,["className","children"]),S=n.useContext(Ie),R=S.prefixCls,w=S.mode;return n.createElement("ul",Object(W.a)({className:Pe()(R,"".concat(R,"-sub"),"".concat(R,"-").concat(w==="inline"?"inline":"vertical"),E)},y,{"data-menu-list":!0,ref:c}),C)},Jt=n.forwardRef(Oa);Jt.displayName="SubMenuList";var Ht=Jt,Sa=e("uciX"),Vn={adjustX:1,adjustY:1},Qt={topLeft:{points:["bl","tl"],overflow:Vn,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Vn,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:Vn,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:Vn,offset:[4,0]}},Ra={topLeft:{points:["bl","tl"],overflow:Vn,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Vn,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:Vn,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:Vn,offset:[4,0]}},fr=Qt;function Xt(t,i,c){if(i)return i;if(c)return c[t]||c.other}var ja={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function Pa(t){var i=t.prefixCls,c=t.visible,E=t.children,C=t.popup,y=t.popupClassName,S=t.popupOffset,R=t.disabled,w=t.mode,$=t.onVisibleChange,V=n.useContext(Ie),J=V.getPopupContainer,G=V.rtl,se=V.subMenuOpenDelay,Q=V.subMenuCloseDelay,X=V.builtinPlacements,ue=V.triggerSubMenuAction,x=V.forceSubMenuRender,q=V.motion,re=V.defaultMotions,Y=n.useState(!1),le=Object(L.a)(Y,2),k=le[0],be=le[1],ee=G?Object(ve.a)(Object(ve.a)({},Ra),X):Object(ve.a)(Object(ve.a)({},Qt),X),ce=ja[w],me=Xt(w,q,re),ie=Object(ve.a)(Object(ve.a)({},me),{},{leavedClassName:"".concat(i,"-hidden"),removeOnLeave:!1,motionAppear:!0}),H=n.useRef();return n.useEffect(function(){return H.current=Object(Ye.a)(function(){be(c)}),function(){Ye.a.cancel(H.current)}},[c]),n.createElement(Sa.a,{prefixCls:i,popupClassName:Pe()("".concat(i,"-popup"),Object(oe.a)({},"".concat(i,"-rtl"),G),y),stretch:w==="horizontal"?"minWidth":null,getPopupContainer:J,builtinPlacements:ee,popupPlacement:ce,popupVisible:k,popup:C,popupAlign:S&&{offset:S},action:R?[]:[ue],mouseEnterDelay:se,mouseLeaveDelay:Q,onPopupVisibleChange:$,forceRender:x,popupMotion:ie},E)}var Da=e("8XRh");function Ia(t){var i=t.id,c=t.open,E=t.keyPath,C=t.children,y="inline",S=n.useContext(Ie),R=S.prefixCls,w=S.forceSubMenuRender,$=S.motion,V=S.defaultMotions,J=S.mode,G=n.useRef(!1);G.current=J===y;var se=n.useState(!G.current),Q=Object(L.a)(se,2),X=Q[0],ue=Q[1],x=G.current?c:!1;n.useEffect(function(){G.current&&ue(!1)},[J]);var q=Object(ve.a)({},Xt(y,$,V));E.length>1&&(q.motionAppear=!1);var re=q.onVisibleChanged;return q.onVisibleChanged=function(Y){return!G.current&&!Y&&ue(!0),re==null?void 0:re(Y)},X?null:n.createElement(bn,{mode:y,locked:!G.current},n.createElement(Da.default,Object(W.a)({visible:x},q,{forceRender:w,removeOnLeave:!1,leavedClassName:"".concat(R,"-hidden")}),function(Y){var le=Y.className,k=Y.style;return n.createElement(Ht,{id:i,className:le,style:k},C)}))}var Na=function(i){var c,E=i.style,C=i.className,y=i.title,S=i.eventKey,R=i.disabled,w=i.internalPopupClose,$=i.children,V=i.itemIcon,J=i.expandIcon,G=i.popupClassName,se=i.popupOffset,Q=i.onClick,X=i.onMouseEnter,ue=i.onMouseLeave,x=i.onTitleClick,q=i.onTitleMouseEnter,re=i.onTitleMouseLeave,Y=Object(Fe.a)(i,["style","className","title","eventKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"]),le=Gt(S),k=n.useContext(Ie),be=k.prefixCls,ee=k.mode,ce=k.openKeys,me=k.disabled,ie=k.overflowDisabled,H=k.activeKey,de=k.selectedKeys,ge=k.itemIcon,he=k.expandIcon,Se=k.onItemClick,Le=k.onOpenChange,Ee=k.onActive,Oe=n.useContext(Je),Me=Oe.isSubPathKey,Te=xe(),Ne="".concat(be,"-submenu"),De=me||R,Ve=n.useRef(),_e=n.useRef(),Ue=V||ge,ze=J||he,Xe=ce.includes(S),$e=!ie&&Xe,Pn=Me(de,S),an=$n(S,De,q,re),Ze=an.active,un=Object(Fe.a)(an,["active"]),En=n.useState(!1),Cn=Object(L.a)(En,2),Ae=Cn[0],He=Cn[1],en=function(Qe){De||He(Qe)},ke=function(Qe){en(!0),X==null||X({key:S,domEvent:Qe})},Bn=function(Qe){en(!1),ue==null||ue({key:S,domEvent:Qe})},Gn=n.useMemo(function(){return Ze||(ee!=="inline"?Ae||Me([H],S):!1)},[ee,Ze,H,Ae,S,Me]),wn=N(Te.length),rn=function(Qe){De||(x==null||x({key:S,domEvent:Qe}),ee==="inline"&&Le(S,!Xe))},Dn=nt(function(qe){Q==null||Q(et(qe)),Se(qe)}),dn=function(Qe){ee!=="inline"&&Le(S,Qe)},In=function(){Ee(S)},nn=le&&"".concat(le,"-popup"),sn=n.createElement("div",Object(W.a)({role:"menuitem",style:wn,className:"".concat(Ne,"-title"),tabIndex:De?null:-1,ref:Ve,title:typeof y=="string"?y:null,"data-menu-id":ie&&le?null:le,"aria-expanded":$e,"aria-haspopup":!0,"aria-controls":nn,"aria-disabled":De,onClick:rn,onFocus:In},un),y,n.createElement(m,{icon:ee!=="horizontal"?ze:null,props:Object(ve.a)(Object(ve.a)({},i),{},{isOpen:$e,isSubMenu:!0})},n.createElement("i",{className:"".concat(Ne,"-arrow")}))),Nn=n.useRef(ee);if(ee!=="inline"&&(Nn.current=Te.length>1?"vertical":ee),!ie){var mn=Nn.current;sn=n.createElement(Pa,{mode:mn,prefixCls:Ne,visible:!w&&$e&&ee!=="inline",popupClassName:G,popupOffset:se,popup:n.createElement(bn,{mode:mn},n.createElement(Ht,{id:nn,ref:_e},$)),disabled:De,onVisibleChange:dn},sn)}return n.createElement(bn,{onItemClick:Dn,mode:ee==="horizontal"?"vertical":ee,itemIcon:Ue,expandIcon:ze},n.createElement(p.Item,Object(W.a)({role:"none"},Y,{component:"li",style:E,className:Pe()(Ne,"".concat(Ne,"-").concat(ee),C,(c={},Object(oe.a)(c,"".concat(Ne,"-open"),$e),Object(oe.a)(c,"".concat(Ne,"-active"),Gn),Object(oe.a)(c,"".concat(Ne,"-selected"),Pn),Object(oe.a)(c,"".concat(Ne,"-disabled"),De),c)),onMouseEnter:ke,onMouseLeave:Bn}),sn,!ie&&n.createElement(Ia,{id:nn,open:$e,keyPath:Te},$)))};function Yt(t){var i=t.eventKey,c=t.children,E=xe(i),C=Dt(c,E),y=_();n.useEffect(function(){if(y)return y.registerPath(i,E),function(){y.unregisterPath(i,E)}},[E]);var S;return y?S=C:S=n.createElement(Na,t,C),n.createElement(je.Provider,{value:E},S)}var Aa=e("x/xZ");function Zt(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Object(Aa.a)(t)){var c=t.nodeName.toLowerCase(),E=["input","select","textarea","button"].includes(c)||t.isContentEditable||c==="a"&&!!t.getAttribute("href"),C=t.getAttribute("tabindex"),y=Number(C),S=null;return C&&!Number.isNaN(y)?S=y:E&&S===null&&(S=0),E&&t.disabled&&(S=null),S!==null&&(S>=0||i&&S<0)}return!1}function kt(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,c=Object(pn.a)(t.querySelectorAll("*")).filter(function(E){return Zt(E,i)});return Zt(t,i)&&c.unshift(t),c}var mt=null;function pr(){mt=document.activeElement}function vr(){mt=null}function hr(){if(mt)try{mt.focus()}catch(t){}}function gr(t,i){if(i.keyCode===9){var c=kt(t),E=c[i.shiftKey?0:c.length-1],C=E===document.activeElement||t===document.activeElement;if(C){var y=c[i.shiftKey?c.length-1:0];y.focus(),i.preventDefault()}}}var It=We.a.LEFT,Nt=We.a.RIGHT,At=We.a.UP,ft=We.a.DOWN,pt=We.a.ENTER,qt=We.a.ESC,_t=[At,ft,It,Nt];function Fa(t,i,c,E){var C,y,S,R,w="prev",$="next",V="children",J="parent";if(t==="inline"&&E===pt)return{inlineTrigger:!0};var G=(C={},Object(oe.a)(C,At,w),Object(oe.a)(C,ft,$),C),se=(y={},Object(oe.a)(y,It,c?$:w),Object(oe.a)(y,Nt,c?w:$),Object(oe.a)(y,ft,V),Object(oe.a)(y,pt,V),y),Q=(S={},Object(oe.a)(S,At,w),Object(oe.a)(S,ft,$),Object(oe.a)(S,pt,V),Object(oe.a)(S,qt,J),Object(oe.a)(S,It,c?V:J),Object(oe.a)(S,Nt,c?J:V),S),X={inline:G,horizontal:se,vertical:Q,inlineSub:G,horizontalSub:Q,verticalSub:Q},ue=(R=X["".concat(t).concat(i?"":"Sub")])===null||R===void 0?void 0:R[E];switch(ue){case w:return{offset:-1,sibling:!0};case $:return{offset:1,sibling:!0};case J:return{offset:-1,sibling:!1};case V:return{offset:1,sibling:!1};default:return null}}function Ta(t){for(var i=t;i;){if(i.getAttribute("data-menu-list"))return i;i=i.parentElement}return null}function Ka(t,i){for(var c=t||document.activeElement;c;){if(i.has(c))return c;c=c.parentElement}return null}function Ma(t,i){var c=kt(t,!0);return c.filter(function(E){return i.has(E)})}function ea(t,i,c){var E=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!t)return null;var C=Ma(t,i),y=C.length,S=C.findIndex(function(R){return c===R});return E<0?S===-1?S=y-1:S-=1:E>0&&(S+=1),S=(S+y)%y,C[S]}function Ba(t,i,c,E,C,y,S,R,w,$){var V=n.useRef(),J=n.useRef();J.current=i;var G=function(){Ye.a.cancel(V.current)};return n.useEffect(function(){return function(){G()}},[]),function(se){var Q=se.which;if([].concat(_t,[pt,qt]).includes(Q)){var X,ue,x,q=function(){X=new Set,ue=new Map,x=new Map;var ge=y();return ge.forEach(function(he){var Se=document.querySelector("[data-menu-id='".concat(zt(E,he),"']"));Se&&(X.add(Se),x.set(Se,he),ue.set(he,Se))}),X};q();var re=ue.get(i),Y=Ka(re,X),le=x.get(Y),k=Fa(t,S(le,!0).length===1,c,Q);if(!k)return;_t.includes(Q)&&se.preventDefault();var be=function(ge){if(ge){var he=ge,Se=ge.querySelector("a");(Se==null?void 0:Se.getAttribute("href"))&&(he=Se);var Le=x.get(ge);R(Le),G(),V.current=Object(Ye.a)(function(){J.current===Le&&he.focus()})}};if(k.sibling||!Y){var ee;!Y||t==="inline"?ee=C.current:ee=Ta(Y);var ce=ea(ee,X,Y,k.offset);be(ce)}else if(k.inlineTrigger)w(le);else if(k.offset>0)w(le,!0),G(),V.current=Object(Ye.a)(function(){q();var de=Y.getAttribute("aria-controls"),ge=document.getElementById(de),he=ea(ge,X);be(he)},5);else if(k.offset<0){var me=S(le,!0),ie=me[me.length-2],H=ue.get(ie);w(ie,!1),be(H)}}$==null||$(se)}}var wa=Math.random().toFixed(5).toString().slice(2),na=0;function Wa(t){var i=Object(Rn.a)(t,{value:t}),c=Object(L.a)(i,2),E=c[0],C=c[1];return n.useEffect(function(){na+=1;var y="".concat(wa,"-").concat(na);C("rc-menu-uuid-".concat(y))},[]),E}var yr=e("p8sG");function La(t){Promise.resolve().then(t)}var Ft="__RC_UTIL_PATH_SPLIT__",ta=function(i){return i.join(Ft)},$a=function(i){return i.split(Ft)},Tt="rc-menu-more";function Va(){var t=n.useState({}),i=Object(L.a)(t,2),c=i[1],E=Object(n.useRef)(new Map),C=Object(n.useRef)(new Map),y=n.useState([]),S=Object(L.a)(y,2),R=S[0],w=S[1],$=Object(n.useRef)(0),V=Object(n.useCallback)(function(x,q){var re=ta(q);C.current.set(re,x),E.current.set(x,re),$.current+=1;var Y=$.current;La(function(){Y===$.current&&c({})})},[]),J=Object(n.useCallback)(function(x,q){var re=ta(q);C.current.delete(re),E.current.delete(x)},[]),G=Object(n.useCallback)(function(x){w(x)},[]),se=Object(n.useCallback)(function(x,q){var re=E.current.get(x)||"",Y=$a(re);return q&&R.includes(Y[0])&&Y.unshift(Tt),Y},[R]),Q=Object(n.useCallback)(function(x,q){return x.some(function(re){var Y=se(re,!0);return Y.includes(q)})},[se]),X=function(){var q=Object(pn.a)(E.current.keys());return R.length&&q.push(Tt),q},ue=Object(n.useCallback)(function(x){var q="".concat(E.current.get(x)).concat(Ft),re=new Set;return Object(pn.a)(C.current.keys()).forEach(function(Y){Y.startsWith(q)&&re.add(C.current.get(Y))}),re},[]);return{registerPath:V,unregisterPath:J,refreshOverflowKeys:G,isSubPathKey:Q,getKeyPath:se,getKeys:X,getSubPathKeys:ue}}var vt=[],Ua=function(i){var c,E,C=i.prefixCls,y=C===void 0?"rc-menu":C,S=i.style,R=i.className,w=i.tabIndex,$=w===void 0?0:w,V=i.children,J=i.direction,G=i.id,se=i.mode,Q=se===void 0?"vertical":se,X=i.inlineCollapsed,ue=i.disabled,x=i.disabledOverflow,q=i.subMenuOpenDelay,re=q===void 0?.1:q,Y=i.subMenuCloseDelay,le=Y===void 0?.1:Y,k=i.forceSubMenuRender,be=i.defaultOpenKeys,ee=i.openKeys,ce=i.activeKey,me=i.defaultActiveFirst,ie=i.selectable,H=ie===void 0?!0:ie,de=i.multiple,ge=de===void 0?!1:de,he=i.defaultSelectedKeys,Se=i.selectedKeys,Le=i.onSelect,Ee=i.onDeselect,Oe=i.inlineIndent,Me=Oe===void 0?24:Oe,Te=i.motion,Ne=i.defaultMotions,De=i.triggerSubMenuAction,Ve=De===void 0?"hover":De,_e=i.builtinPlacements,Ue=i.itemIcon,ze=i.expandIcon,Xe=i.overflowedIndicator,$e=Xe===void 0?"...":Xe,Pn=i.getPopupContainer,an=i.onClick,Ze=i.onOpenChange,un=i.onKeyDown,En=i.openAnimation,Cn=i.openTransitionName,Ae=Object(Fe.a)(i,["prefixCls","style","className","tabIndex","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName"]),He=Dt(V,vt),en=n.useState(!1),ke=Object(L.a)(en,2),Bn=ke[0],Gn=ke[1],wn=n.useRef(),rn=Wa(G),Dn=J==="rtl",dn=n.useMemo(function(){return Q==="inline"&&X?["vertical",X]:[Q,!1]},[Q,X]),In=Object(L.a)(dn,2),nn=In[0],sn=In[1],Nn=n.useState(0),mn=Object(L.a)(Nn,2),qe=mn[0],Qe=mn[1],Jn=qe>=He.length-1||nn!=="horizontal"||x,Hn=Object(Rn.a)(be,{value:ee,postState:function(Z){return Z||vt}}),tt=Object(L.a)(Hn,2),On=tt[0],hn=tt[1],Qn=n.useState(On),Sn=Object(L.a)(Qn,2),fn=Sn[0],Xn=Sn[1],An=nn==="inline",Yn=n.useRef(!1);n.useEffect(function(){An&&Xn(On)},[On]),n.useEffect(function(){if(!Yn.current){Yn.current=!0;return}if(An)hn(fn);else{var te=[];hn(te),Ze==null||Ze(te)}},[An]);var cn=Va(),Fn=cn.registerPath,pe=cn.unregisterPath,Re=cn.refreshOverflowKeys,Be=cn.isSubPathKey,tn=cn.getKeyPath,Zn=cn.getKeys,gt=cn.getSubPathKeys,wt=n.useMemo(function(){return{registerPath:Fn,unregisterPath:pe}},[Fn,pe]),Wt=n.useMemo(function(){return{isSubPathKey:Be}},[Be]);n.useEffect(function(){Re(Jn?vt:He.slice(qe+1).map(function(te){return te.key}))},[qe,Jn]);var Lt=Object(Rn.a)(ce||me&&((c=He[0])===null||c===void 0?void 0:c.key),{value:ce}),at=Object(L.a)(Lt,2),yt=at[0],st=at[1],bt=nt(function(te){st(te)}),$t=nt(function(){st(void 0)}),Et=Object(Rn.a)(he||[],{value:Se,postState:function(Z){return Array.isArray(Z)?Z:Z==null?vt:[Z]}}),Ct=Object(L.a)(Et,2),rt=Ct[0],Tn=Ct[1],Ot=function(Z){if(!!H){var Ce=Z.key,Ge=rt.includes(Ce),on;Ge?on=rt.filter(function(qn){return qn!==Ce}):ge?on=[].concat(Object(pn.a)(rt),[Ce]):on=[Ce],Tn(on);var Un=Object(ve.a)(Object(ve.a)({},Z),{},{selectedKeys:on});Ge?Ee==null||Ee(Un):Le==null||Le(Un)}},St=nt(function(te){an==null||an(et(te)),Ot(te)}),ot=nt(function(te,Z){var Ce=On.filter(function(on){return on!==te});if(Z)Ce.push(te);else if(nn!=="inline"){var Ge=gt(te);Ce=Ce.filter(function(on){return!Ge.has(on)})}d()(On,Ce)||(hn(Ce),Ze==null||Ze(Ce))}),kn=nt(Pn),lt=function(Z,Ce){var Ge=Ce!=null?Ce:!On.includes(Z);ot(Z,Ge)},ut=Ba(nn,yt,Dn,rn,wn,Zn,tn,st,lt,un);n.useEffect(function(){Gn(!0)},[]);var Rt=nn!=="horizontal"||x?He:He.map(function(te,Z){return n.createElement(bn,{key:te.key,overflowDisabled:Z>qe},te)}),jt=n.createElement(p,Object(W.a)({id:G,ref:wn,prefixCls:"".concat(y,"-overflow"),component:"ul",itemComponent:Pt,className:Pe()(y,"".concat(y,"-root"),"".concat(y,"-").concat(nn),R,(E={},Object(oe.a)(E,"".concat(y,"-inline-collapsed"),sn),Object(oe.a)(E,"".concat(y,"-rtl"),Dn),E)),dir:J,style:S,role:"menu",tabIndex:$,data:Rt,renderRawItem:function(Z){return Z},renderRawRest:function(Z){var Ce=Z.length,Ge=Ce?He.slice(-Ce):null;return n.createElement(Yt,{eventKey:Tt,title:$e,disabled:Jn,internalPopupClose:Ce===0},Ge)},maxCount:nn!=="horizontal"||x?p.INVALIDATE:p.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(Z){Qe(Z)},onKeyDown:ut},Ae));return n.createElement(xt.Provider,{value:rn},n.createElement(bn,{prefixCls:y,mode:nn,openKeys:On,rtl:Dn,disabled:ue,motion:Bn?Te:null,defaultMotions:Bn?Ne:null,activeKey:yt,onActive:bt,onInactive:$t,selectedKeys:rt,inlineIndent:Me,subMenuOpenDelay:re,subMenuCloseDelay:le,forceSubMenuRender:k,builtinPlacements:_e,triggerSubMenuAction:Ve,getPopupContainer:kn,itemIcon:Ue,expandIcon:ze,onItemClick:St,onOpenChange:ot},n.createElement(Je.Provider,{value:Wt},jt),n.createElement(fe.Provider,{value:wt},He)))},xa=Ua,za=function(i){var c=i.className,E=i.title,C=i.eventKey,y=i.children,S=Object(Fe.a)(i,["className","title","eventKey","children"]),R=n.useContext(Ie),w=R.prefixCls,$="".concat(w,"-item-group");return n.createElement("li",Object(W.a)({},S,{onClick:function(J){return J.stopPropagation()},className:Pe()($,c)}),n.createElement("div",{className:"".concat($,"-title"),title:typeof E=="string"?E:void 0},E),n.createElement("ul",{className:"".concat($,"-list")},y))};function Ga(t){var i=t.children,c=Object(Fe.a)(t,["children"]),E=xe(c.eventKey),C=Dt(i,E),y=_();return y?C:n.createElement(za,c,C)}function Ja(t){var i=t.className,c=t.style,E=n.useContext(Ie),C=E.prefixCls,y=_();return y?null:n.createElement("li",{className:Pe()("".concat(C,"-item-divider"),i),style:c})}var it=xa;it.Item=Pt,it.SubMenu=Yt,it.ItemGroup=Ga,it.Divider=Ja;var Ha=it,Qa=e("eDIo");function Xa(t,i){var c=t.prefixCls,E=t.editable,C=t.locale,y=t.style;return!E||E.showAdd===!1?null:n.createElement("button",{ref:i,type:"button",className:"".concat(c,"-nav-add"),style:y,"aria-label":(C==null?void 0:C.addAriaLabel)||"Add tab",onClick:function(R){E.onEdit("add",{event:R})}},E.addIcon||"+")}var aa=n.forwardRef(Xa);function Ya(t,i){var c=t.prefixCls,E=t.id,C=t.tabs,y=t.locale,S=t.mobile,R=t.moreIcon,w=R===void 0?"More":R,$=t.moreTransitionName,V=t.style,J=t.className,G=t.editable,se=t.tabBarGutter,Q=t.rtl,X=t.onTabClick,ue=Object(n.useState)(!1),x=Object(L.a)(ue,2),q=x[0],re=x[1],Y=Object(n.useState)(null),le=Object(L.a)(Y,2),k=le[0],be=le[1],ee="".concat(E,"-more-popup"),ce="".concat(c,"-dropdown"),me=k!==null?"".concat(ee,"-").concat(k):null,ie=y==null?void 0:y.dropdownAriaLabel,H=n.createElement(Ha,{onClick:function(Oe){var Me=Oe.key,Te=Oe.domEvent;X(Me,Te),re(!1)},id:ee,tabIndex:-1,role:"listbox","aria-activedescendant":me,selectedKeys:[k],"aria-label":ie!==void 0?ie:"expanded dropdown"},C.map(function(Ee){return n.createElement(Pt,{key:Ee.key,id:"".concat(ee,"-").concat(Ee.key),role:"option","aria-controls":E&&"".concat(E,"-panel-").concat(Ee.key),disabled:Ee.disabled},Ee.tab)}));function de(Ee){for(var Oe=C.filter(function(Ve){return!Ve.disabled}),Me=Oe.findIndex(function(Ve){return Ve.key===k})||0,Te=Oe.length,Ne=0;Ne<Te;Ne+=1){Me=(Me+Ee+Te)%Te;var De=Oe[Me];if(!De.disabled){be(De.key);return}}}function ge(Ee){var Oe=Ee.which;if(!q){[We.a.DOWN,We.a.SPACE,We.a.ENTER].includes(Oe)&&(re(!0),Ee.preventDefault());return}switch(Oe){case We.a.UP:de(-1),Ee.preventDefault();break;case We.a.DOWN:de(1),Ee.preventDefault();break;case We.a.ESC:re(!1);break;case We.a.SPACE:case We.a.ENTER:k!==null&&X(k,Ee);break}}Object(n.useEffect)(function(){var Ee=document.getElementById(me);Ee&&Ee.scrollIntoView&&Ee.scrollIntoView(!1)},[k]),Object(n.useEffect)(function(){q||be(null)},[q]);var he=Object(oe.a)({},Q?"marginLeft":"marginRight",se);C.length||(he.visibility="hidden",he.order=1);var Se=Pe()(Object(oe.a)({},"".concat(ce,"-rtl"),Q)),Le=S?null:n.createElement(Qa.default,{prefixCls:ce,overlay:H,trigger:["hover"],visible:q,transitionName:$,onVisibleChange:re,overlayClassName:Se,mouseEnterDelay:.1,mouseLeaveDelay:.1},n.createElement("button",{type:"button",className:"".concat(c,"-nav-more"),style:he,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":ee,id:"".concat(E,"-more"),"aria-expanded":q,onKeyDown:ge},w));return n.createElement("div",{className:Pe()("".concat(c,"-nav-operations"),J),style:V,ref:i},Le,n.createElement(aa,{prefixCls:c,locale:y,editable:G}))}var Za=n.forwardRef(Ya),Kt=Object(n.createContext)(null),ka=.1,ra=.01,ht=20,ia=Math.pow(.995,ht);function qa(t,i){var c=Object(n.useState)(),E=Object(L.a)(c,2),C=E[0],y=E[1],S=Object(n.useState)(0),R=Object(L.a)(S,2),w=R[0],$=R[1],V=Object(n.useState)(0),J=Object(L.a)(V,2),G=J[0],se=J[1],Q=Object(n.useState)(),X=Object(L.a)(Q,2),ue=X[0],x=X[1],q=Object(n.useRef)();function re(ce){var me=ce.touches[0],ie=me.screenX,H=me.screenY;y({x:ie,y:H}),window.clearInterval(q.current)}function Y(ce){if(!!C){ce.preventDefault();var me=ce.touches[0],ie=me.screenX,H=me.screenY;y({x:ie,y:H});var de=ie-C.x,ge=H-C.y;i(de,ge);var he=Date.now();$(he),se(he-w),x({x:de,y:ge})}}function le(){if(!!C&&(y(null),x(null),ue)){var ce=ue.x/G,me=ue.y/G,ie=Math.abs(ce),H=Math.abs(me);if(Math.max(ie,H)<ka)return;var de=ce,ge=me;q.current=window.setInterval(function(){if(Math.abs(de)<ra&&Math.abs(ge)<ra){window.clearInterval(q.current);return}de*=ia,ge*=ia,i(de*ht,ge*ht)},ht)}}var k=Object(n.useRef)();function be(ce){var me=ce.deltaX,ie=ce.deltaY,H=0,de=Math.abs(me),ge=Math.abs(ie);de===ge?H=k.current==="x"?me:ie:de>ge?(H=me,k.current="x"):(H=ie,k.current="y"),i(-H,-H)&&ce.preventDefault()}var ee=Object(n.useRef)(null);ee.current={onTouchStart:re,onTouchMove:Y,onTouchEnd:le,onWheel:be},n.useEffect(function(){function ce(de){ee.current.onTouchStart(de)}function me(de){ee.current.onTouchMove(de)}function ie(de){ee.current.onTouchEnd(de)}function H(de){ee.current.onWheel(de)}return document.addEventListener("touchmove",me,{passive:!1}),document.addEventListener("touchend",ie,{passive:!1}),t.current.addEventListener("touchstart",ce,{passive:!1}),t.current.addEventListener("wheel",H),function(){document.removeEventListener("touchmove",me),document.removeEventListener("touchend",ie)}},[])}function _a(){var t=Object(n.useRef)(new Map);function i(E){return t.current.has(E)||t.current.set(E,n.createRef()),t.current.get(E)}function c(E){t.current.delete(E)}return[i,c]}function sa(t,i){var c=n.useRef(t),E=n.useState({}),C=Object(L.a)(E,2),y=C[1];function S(R){var w=typeof R=="function"?R(c.current):R;w!==c.current&&i(w,c.current),c.current=w,y({})}return[c.current,S]}var oa=function(i){var c=i.position,E=i.prefixCls,C=i.extra;if(!C)return null;var y,S=C;return c==="right"&&(y=S.right||!S.left&&S||null),c==="left"&&(y=S.left||null),y?n.createElement("div",{className:"".concat(E,"-extra-content")},y):null};function er(t,i){var c,E=n.useContext(Kt),C=E.prefixCls,y=E.tabs,S=t.className,R=t.style,w=t.id,$=t.animated,V=t.activeKey,J=t.rtl,G=t.extra,se=t.editable,Q=t.locale,X=t.tabPosition,ue=t.tabBarGutter,x=t.children,q=t.onTabClick,re=t.onTabScroll,Y=Object(n.useRef)(),le=Object(n.useRef)(),k=Object(n.useRef)(),be=Object(n.useRef)(),ee=_a(),ce=Object(L.a)(ee,2),me=ce[0],ie=ce[1],H=X==="top"||X==="bottom",de=sa(0,function(te,Z){H&&re&&re({direction:te>Z?"left":"right"})}),ge=Object(L.a)(de,2),he=ge[0],Se=ge[1],Le=sa(0,function(te,Z){!H&&re&&re({direction:te>Z?"top":"bottom"})}),Ee=Object(L.a)(Le,2),Oe=Ee[0],Me=Ee[1],Te=Object(n.useState)(0),Ne=Object(L.a)(Te,2),De=Ne[0],Ve=Ne[1],_e=Object(n.useState)(0),Ue=Object(L.a)(_e,2),ze=Ue[0],Xe=Ue[1],$e=Object(n.useState)(0),Pn=Object(L.a)($e,2),an=Pn[0],Ze=Pn[1],un=Object(n.useState)(0),En=Object(L.a)(un,2),Cn=En[0],Ae=En[1],He=Object(n.useState)(null),en=Object(L.a)(He,2),ke=en[0],Bn=en[1],Gn=Object(n.useState)(null),wn=Object(L.a)(Gn,2),rn=wn[0],Dn=wn[1],dn=Object(n.useState)(0),In=Object(L.a)(dn,2),nn=In[0],sn=In[1],Nn=Object(n.useState)(0),mn=Object(L.a)(Nn,2),qe=mn[0],Qe=mn[1],Jn=jn(new Map),Hn=Object(L.a)(Jn,2),tt=Hn[0],On=Hn[1],hn=ct(y,tt,De),Qn="".concat(C,"-nav-operations-hidden"),Sn=0,fn=0;H?J?(Sn=0,fn=Math.max(0,De-ke)):(Sn=Math.min(0,ke-De),fn=0):(Sn=Math.min(0,rn-ze),fn=0);function Xn(te){return te<Sn?Sn:te>fn?fn:te}var An=Object(n.useRef)(),Yn=Object(n.useState)(),cn=Object(L.a)(Yn,2),Fn=cn[0],pe=cn[1];function Re(){pe(Date.now())}function Be(){window.clearTimeout(An.current)}qa(Y,function(te,Z){function Ce(Ge,on){Ge(function(Un){var qn=Xn(Un+on);return qn})}if(H){if(ke>=De)return!1;Ce(Se,te)}else{if(rn>=ze)return!1;Ce(Me,Z)}return Be(),Re(),!0}),Object(n.useEffect)(function(){return Be(),Fn&&(An.current=window.setTimeout(function(){pe(0)},100)),Be},[Fn]);function tn(){var te=arguments.length>0&&arguments[0]!==void 0?arguments[0]:V,Z=hn.get(te)||{width:0,height:0,left:0,right:0,top:0};if(H){var Ce=he;J?Z.right<he?Ce=Z.right:Z.right+Z.width>he+ke&&(Ce=Z.right+Z.width-ke):Z.left<-he?Ce=-Z.left:Z.left+Z.width>-he+ke&&(Ce=-(Z.left+Z.width-ke)),Me(0),Se(Xn(Ce))}else{var Ge=Oe;Z.top<-Oe?Ge=-Z.top:Z.top+Z.height>-Oe+rn&&(Ge=-(Z.top+Z.height-rn)),Se(0),Me(Xn(Ge))}}var Zn=I(hn,{width:ke,height:rn,left:he,top:Oe},{width:an,height:Cn},{width:nn,height:qe},Object(ve.a)(Object(ve.a)({},t),{},{tabs:y})),gt=Object(L.a)(Zn,2),wt=gt[0],Wt=gt[1],Lt=y.map(function(te){var Z=te.key;return n.createElement(Ln,{id:w,prefixCls:C,key:Z,rtl:J,tab:te,closable:te.closable,editable:se,active:Z===V,tabPosition:X,tabBarGutter:ue,renderWrapper:x,removeAriaLabel:Q==null?void 0:Q.removeAriaLabel,ref:me(Z),onClick:function(Ge){q(Z,Ge)},onRemove:function(){ie(Z)},onFocus:function(){tn(Z),Re(),J||(Y.current.scrollLeft=0),Y.current.scrollTop=0}})}),at=Mn(function(){var te,Z,Ce,Ge,on,Un,qn,Vt,Ut,lr=((te=Y.current)===null||te===void 0?void 0:te.offsetWidth)||0,ur=((Z=Y.current)===null||Z===void 0?void 0:Z.offsetHeight)||0,ma=((Ce=be.current)===null||Ce===void 0?void 0:Ce.offsetWidth)||0,fa=((Ge=be.current)===null||Ge===void 0?void 0:Ge.offsetHeight)||0,dr=((on=k.current)===null||on===void 0?void 0:on.offsetWidth)||0,cr=((Un=k.current)===null||Un===void 0?void 0:Un.offsetHeight)||0;Bn(lr),Dn(ur),sn(ma),Qe(fa);var pa=(((qn=le.current)===null||qn===void 0?void 0:qn.offsetWidth)||0)-ma,va=(((Vt=le.current)===null||Vt===void 0?void 0:Vt.offsetHeight)||0)-fa;Ve(pa),Xe(va);var ha=(Ut=k.current)===null||Ut===void 0?void 0:Ut.className.includes(Qn);Ze(pa-(ha?0:dr)),Ae(va-(ha?0:cr)),On(function(){var ga=new Map;return y.forEach(function(mr){var ya=mr.key,dt=me(ya).current;dt&&ga.set(ya,{width:dt.offsetWidth,height:dt.offsetHeight,left:dt.offsetLeft,top:dt.offsetTop})}),ga})}),yt=y.slice(0,wt),st=y.slice(Wt+1),bt=[].concat(Object(pn.a)(yt),Object(pn.a)(st)),$t=Object(n.useState)(),Et=Object(L.a)($t,2),Ct=Et[0],rt=Et[1],Tn=hn.get(V),Ot=Object(n.useRef)();function St(){Ye.a.cancel(Ot.current)}Object(n.useEffect)(function(){var te={};return Tn&&(H?(J?te.right=Tn.right:te.left=Tn.left,te.width=Tn.width):(te.top=Tn.top,te.height=Tn.height)),St(),Ot.current=Object(Ye.a)(function(){rt(te)}),St},[Tn,H,J]),Object(n.useEffect)(function(){tn()},[V,Tn,hn,H]),Object(n.useEffect)(function(){at()},[J,ue,V,y.map(function(te){return te.key}).join("_")]);var ot=!!bt.length,kn="".concat(C,"-nav-wrap"),lt,ut,Rt,jt;return H?J?(ut=he>0,lt=he+ke<De):(lt=he<0,ut=-he+ke<De):(Rt=Oe<0,jt=-Oe+rn<ze),n.createElement("div",{ref:i,role:"tablist",className:Pe()("".concat(C,"-nav"),S),style:R,onKeyDown:function(){Re()}},n.createElement(oa,{position:"left",extra:G,prefixCls:C}),n.createElement(Wn.default,{onResize:at},n.createElement("div",{className:Pe()(kn,(c={},Object(oe.a)(c,"".concat(kn,"-ping-left"),lt),Object(oe.a)(c,"".concat(kn,"-ping-right"),ut),Object(oe.a)(c,"".concat(kn,"-ping-top"),Rt),Object(oe.a)(c,"".concat(kn,"-ping-bottom"),jt),c)),ref:Y},n.createElement(Wn.default,{onResize:at},n.createElement("div",{ref:le,className:"".concat(C,"-nav-list"),style:{transform:"translate(".concat(he,"px, ").concat(Oe,"px)"),transition:Fn?"none":void 0}},Lt,n.createElement(aa,{ref:be,prefixCls:C,locale:Q,editable:se,style:{visibility:ot?"hidden":null}}),n.createElement("div",{className:Pe()("".concat(C,"-ink-bar"),Object(oe.a)({},"".concat(C,"-ink-bar-animated"),$.inkBar)),style:Ct}))))),n.createElement(Za,Object(W.a)({},t,{ref:k,prefixCls:C,tabs:bt,className:!ot&&Qn})),n.createElement(oa,{position:"right",extra:G,prefixCls:C}))}var la=n.forwardRef(er);function nr(t){var i=t.id,c=t.activeKey,E=t.animated,C=t.tabPosition,y=t.rtl,S=t.destroyInactiveTabPane,R=n.useContext(Kt),w=R.prefixCls,$=R.tabs,V=E.tabPane,J=$.findIndex(function(G){return G.key===c});return n.createElement("div",{className:Pe()("".concat(w,"-content-holder"))},n.createElement("div",{className:Pe()("".concat(w,"-content"),"".concat(w,"-content-").concat(C),Object(oe.a)({},"".concat(w,"-content-animated"),V)),style:J&&V?Object(oe.a)({},y?"marginRight":"marginLeft","-".concat(J,"00%")):null},$.map(function(G){return n.cloneElement(G.node,{key:G.key,prefixCls:w,tabKey:G.key,id:i,animated:V,active:G.key===c,destroyInactiveTabPane:S})})))}function ua(t){var i=t.prefixCls,c=t.forceRender,E=t.className,C=t.style,y=t.id,S=t.active,R=t.animated,w=t.destroyInactiveTabPane,$=t.tabKey,V=t.children,J=n.useState(c),G=Object(L.a)(J,2),se=G[0],Q=G[1];n.useEffect(function(){S?Q(!0):w&&Q(!1)},[S,w]);var X={};return S||(R?(X.visibility="hidden",X.height=0,X.overflowY="hidden"):X.display="none"),n.createElement("div",{id:y&&"".concat(y,"-panel-").concat($),role:"tabpanel",tabIndex:S?0:-1,"aria-labelledby":y&&"".concat(y,"-tab-").concat($),"aria-hidden":!S,style:Object(ve.a)(Object(ve.a)({},X),C),className:Pe()("".concat(i,"-tabpane"),S&&"".concat(i,"-tabpane-active"),E)},(S||se||c)&&V)}var da=0;function tr(t){return Object(yn.a)(t).map(function(i){if(n.isValidElement(i)){var c=i.key!==void 0?String(i.key):void 0;return Object(ve.a)(Object(ve.a)({key:c},i.props),{},{node:i})}return null}).filter(function(i){return i})}function ar(t,i){var c,E=t.id,C=t.prefixCls,y=C===void 0?"rc-tabs":C,S=t.className,R=t.children,w=t.direction,$=t.activeKey,V=t.defaultActiveKey,J=t.editable,G=t.animated,se=G===void 0?{inkBar:!0,tabPane:!1}:G,Q=t.tabPosition,X=Q===void 0?"top":Q,ue=t.tabBarGutter,x=t.tabBarStyle,q=t.tabBarExtraContent,re=t.locale,Y=t.moreIcon,le=t.moreTransitionName,k=t.destroyInactiveTabPane,be=t.renderTabBar,ee=t.onChange,ce=t.onTabClick,me=t.onTabScroll,ie=Object(Fe.a)(t,["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"]),H=tr(R),de=w==="rtl",ge;se===!1?ge={inkBar:!1,tabPane:!1}:se===!0?ge={inkBar:!0,tabPane:!0}:ge=Object(ve.a)({inkBar:!0,tabPane:!1},Object(we.a)(se)==="object"?se:{});var he=Object(n.useState)(!1),Se=Object(L.a)(he,2),Le=Se[0],Ee=Se[1];Object(n.useEffect)(function(){Ee(Object(ln.a)())},[]);var Oe=Object(Rn.a)(function(){var Ae;return(Ae=H[0])===null||Ae===void 0?void 0:Ae.key},{value:$,defaultValue:V}),Me=Object(L.a)(Oe,2),Te=Me[0],Ne=Me[1],De=Object(n.useState)(function(){return H.findIndex(function(Ae){return Ae.key===Te})}),Ve=Object(L.a)(De,2),_e=Ve[0],Ue=Ve[1];Object(n.useEffect)(function(){var Ae=H.findIndex(function(en){return en.key===Te});if(Ae===-1){var He;Ae=Math.max(0,Math.min(_e,H.length-1)),Ne((He=H[Ae])===null||He===void 0?void 0:He.key)}Ue(Ae)},[H.map(function(Ae){return Ae.key}).join("_"),Te,_e]);var ze=Object(Rn.a)(null,{value:E}),Xe=Object(L.a)(ze,2),$e=Xe[0],Pn=Xe[1],an=X;Le&&!["left","right"].includes(X)&&(an="top"),Object(n.useEffect)(function(){E||(Pn("rc-tabs-".concat(da)),da+=1)},[]);function Ze(Ae,He){ce==null||ce(Ae,He),Ne(Ae),ee==null||ee(Ae)}var un={id:$e,activeKey:Te,animated:ge,tabPosition:an,rtl:de,mobile:Le},En,Cn=Object(ve.a)(Object(ve.a)({},un),{},{editable:J,locale:re,moreIcon:Y,moreTransitionName:le,tabBarGutter:ue,onTabClick:Ze,onTabScroll:me,extra:q,style:x,panes:R});return be?En=be(Cn,la):En=n.createElement(la,Cn),n.createElement(Kt.Provider,{value:{tabs:H,prefixCls:y}},n.createElement("div",Object(W.a)({ref:i,id:E,className:Pe()(y,"".concat(y,"-").concat(an),(c={},Object(oe.a)(c,"".concat(y,"-mobile"),Le),Object(oe.a)(c,"".concat(y,"-editable"),J),Object(oe.a)(c,"".concat(y,"-rtl"),de),c),S)},ie),En,n.createElement(nr,Object(W.a)({destroyInactiveTabPane:k},un,{animated:ge}))))}var ca=n.forwardRef(ar);ca.TabPane=ua;var rr=ca,ir=rr,Mt=e("MZF8"),vn=e("dEAq"),sr=e("ZpkN"),br=e("TIsu");function Bt(t,i){var c,E=(c=t.match(/\.(\w+)$/))===null||c===void 0?void 0:c[1];return E||(E=i.tsx?"tsx":"jsx"),E}var or=t=>{var i,c,E,C=Object(n.useRef)(),y=Object(n.useContext)(vn.context),S=y.locale,R=Object(vn.useLocaleProps)(S,t),w=Object(vn.useDemoUrl)(R.identifier),$=R.demoUrl||w,V=(Mt.a===null||Mt.a===void 0?void 0:Mt.a.location.hash)==="#".concat(R.identifier),J=Object.keys(R.sources).length===1,G=Object(vn.useCodeSandbox)((i=R.hideActions)!==null&&i!==void 0&&i.includes("CSB")?null:R),se=Object(vn.useRiddle)((c=R.hideActions)!==null&&c!==void 0&&c.includes("RIDDLE")?null:R),Q=Object(vn.useMotions)(R.motions||[],C.current),X=Object(z.default)(Q,2),ue=X[0],x=X[1],q=Object(vn.useCopy)(),re=Object(z.default)(q,2),Y=re[0],le=re[1],k=Object(n.useState)("_"),be=Object(z.default)(k,2),ee=be[0],ce=be[1],me=Object(n.useState)(Bt(ee,R.sources[ee])),ie=Object(z.default)(me,2),H=ie[0],de=ie[1],ge=Object(n.useState)(Boolean(R.defaultShowCode)),he=Object(z.default)(ge,2),Se=he[0],Le=he[1],Ee=Object(n.useState)(Math.random()),Oe=Object(z.default)(Ee,2),Me=Oe[0],Te=Oe[1],Ne=R.sources[ee][H]||R.sources[ee].content,De=Object(vn.useTSPlaygroundUrl)(S,Ne),Ve=Object(n.useRef)(),_e=Object(vn.usePrefersColor)(),Ue=Object(z.default)(_e,1),ze=Ue[0];Object(n.useEffect)(()=>{Te(Math.random())},[ze]);function Xe($e){ce($e),de(Bt($e,R.sources[$e]))}return h.a.createElement("div",{style:R.style,className:[R.className,"__dumi-default-previewer",V?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:R.identifier,"data-debug":R.debug||void 0,"data-iframe":R.iframe||void 0},R.iframe&&h.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),h.a.createElement("div",{ref:C,className:"__dumi-default-previewer-demo",style:{transform:R.transform?"translate(0, 0)":void 0,padding:R.compact||R.iframe&&R.compact!==!1?"0":void 0,background:R.background}},R.iframe?h.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(R.iframe).replace(/(\d)$/,"$1px")},key:Me,src:$,ref:Ve}):R.children),h.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":R.title},R.title&&h.a.createElement(vn.AnchorLink,{to:"#".concat(R.identifier)},R.title),R.description&&h.a.createElement("div",{dangerouslySetInnerHTML:{__html:R.description}})),h.a.createElement("div",{className:"__dumi-default-previewer-actions"},G&&h.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:G}),se&&h.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:se}),R.motions&&h.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:x,onClick:()=>ue()}),R.iframe&&h.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:()=>Te(Math.random())}),!((E=R.hideActions)!==null&&E!==void 0&&E.includes("EXTERNAL"))&&h.a.createElement(vn.Link,{target:"_blank",to:$},h.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),h.a.createElement("span",null),h.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":le,onClick:()=>Y(Ne)}),H==="tsx"&&Se&&h.a.createElement(vn.Link,{target:"_blank",to:De},h.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),h.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(Se?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:()=>Le(!Se)})),Se&&h.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!J&&h.a.createElement(ir,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xB7\xB7\xB7",defaultActiveKey:ee,onChange:Xe},Object.keys(R.sources).map($e=>h.a.createElement(ua,{tab:$e==="_"?"index.".concat(Bt($e,R.sources[$e])):$e,key:$e}))),h.a.createElement("div",{className:"__dumi-default-previewer-source"},h.a.createElement(sr.a,{code:Ne,lang:H,showCopy:!1}))))},Er=gn.default=or},"80pN":function(Kn,gn,e){"use strict";(function(z){/** @license React v16.14.0
* react-dom-test-utils.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var n=e("MgzW"),h=e("q1tI"),W=e("i8i4"),oe=e("QCnb");function L(m){for(var N="https://reactjs.org/docs/error-decoder.html?invariant="+m,M=1;M<arguments.length;M++)N+="&args[]="+encodeURIComponent(arguments[M]);return"Minified React error #"+m+"; visit "+N+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var we=h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;we.hasOwnProperty("ReactCurrentDispatcher")||(we.ReactCurrentDispatcher={current:null}),we.hasOwnProperty("ReactCurrentBatchConfig")||(we.ReactCurrentBatchConfig={suspense:null});function Fe(m){var N=m,M=m;if(m.alternate)for(;N.return;)N=N.return;else{m=N;do N=m,(N.effectTag&1026)!=0&&(M=N.return),m=N.return;while(m)}return N.tag===3?M:null}function ve(m){if(Fe(m)!==m)throw Error(L(188))}function xn(m){var N=m.alternate;if(!N){if(N=Fe(m),N===null)throw Error(L(188));return N!==m?null:m}for(var M=m,fe=N;;){var _=M.return;if(_===null)break;var je=_.alternate;if(je===null){if(fe=_.return,fe!==null){M=fe;continue}break}if(_.child===je.child){for(je=_.child;je;){if(je===M)return ve(_),m;if(je===fe)return ve(_),N;je=je.sibling}throw Error(L(188))}if(M.return!==fe.return)M=_,fe=je;else{for(var xe=!1,Je=_.child;Je;){if(Je===M){xe=!0,M=_,fe=je;break}if(Je===fe){xe=!0,fe=_,M=je;break}Je=Je.sibling}if(!xe){for(Je=je.child;Je;){if(Je===M){xe=!0,M=je,fe=_;break}if(Je===fe){xe=!0,fe=je,M=_;break}Je=Je.sibling}if(!xe)throw Error(L(189))}}if(M.alternate!==fe)throw Error(L(190))}if(M.tag!==3)throw Error(L(188));return M.stateNode.current===M?m:N}function Pe(){return!0}function yn(){return!1}function ln(m,N,M,fe){this.dispatchConfig=m,this._targetInst=N,this.nativeEvent=M,m=this.constructor.Interface;for(var _ in m)m.hasOwnProperty(_)&&((N=m[_])?this[_]=N(M):_==="target"?this.target=fe:this[_]=M[_]);return this.isDefaultPrevented=(M.defaultPrevented!=null?M.defaultPrevented:M.returnValue===!1)?Pe:yn,this.isPropagationStopped=yn,this}n(ln.prototype,{preventDefault:function(){this.defaultPrevented=!0;var m=this.nativeEvent;m&&(m.preventDefault?m.preventDefault():typeof m.returnValue!="unknown"&&(m.returnValue=!1),this.isDefaultPrevented=Pe)},stopPropagation:function(){var m=this.nativeEvent;m&&(m.stopPropagation?m.stopPropagation():typeof m.cancelBubble!="unknown"&&(m.cancelBubble=!0),this.isPropagationStopped=Pe)},persist:function(){this.isPersistent=Pe},isPersistent:yn,destructor:function(){var m=this.constructor.Interface,N;for(N in m)this[N]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=yn,this._dispatchInstances=this._dispatchListeners=null}}),ln.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(m){return m.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null},ln.extend=function(m){function N(){}function M(){return fe.apply(this,arguments)}var fe=this;N.prototype=fe.prototype;var _=new N;return n(_,M.prototype),M.prototype=_,M.prototype.constructor=M,M.Interface=n({},fe.Interface,m),M.extend=fe.extend,Ye(M),M},Ye(ln);function Rn(m,N,M,fe){if(this.eventPool.length){var _=this.eventPool.pop();return this.call(_,m,N,M,fe),_}return new this(m,N,M,fe)}function pn(m){if(!(m instanceof this))throw Error(L(279));m.destructor(),10>this.eventPool.length&&this.eventPool.push(m)}function Ye(m){m.eventPool=[],m.getPooled=Rn,m.release=pn}var Wn=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined");function Mn(m,N){var M={};return M[m.toLowerCase()]=N.toLowerCase(),M["Webkit"+m]="webkit"+N,M["Moz"+m]="moz"+N,M}var jn={animationend:Mn("Animation","AnimationEnd"),animationiteration:Mn("Animation","AnimationIteration"),animationstart:Mn("Animation","AnimationStart"),transitionend:Mn("Transition","TransitionEnd")},We={},zn={};Wn&&(zn=document.createElement("div").style,"AnimationEvent"in window||(delete jn.animationend.animation,delete jn.animationiteration.animation,delete jn.animationstart.animation),"TransitionEvent"in window||delete jn.transitionend.transition);function Ln(m){if(We[m])return We[m];if(!jn[m])return m;var N=jn[m],M;for(M in N)if(N.hasOwnProperty(M)&&M in zn)return We[m]=N[M];return m}var _n=Ln("animationend"),ct=Ln("animationiteration"),P=Ln("animationstart"),I=Ln("transitionend"),j=null;function d(m){if(j===null)try{var N=("require"+Math.random()).slice(0,7);j=(z&&z[N])("timers").setImmediate}catch(M){j=function(fe){var _=new MessageChannel;_.port1.onmessage=fe,_.port2.postMessage(void 0)}}return j(m)}var o=W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,v=o[11],b=o[12],O=W.unstable_batchedUpdates,a=we.IsSomeRendererActing,l=typeof oe.unstable_flushAllWithoutAsserting=="function",s=oe.unstable_flushAllWithoutAsserting||function(){for(var m=!1;v();)m=!0;return m};function T(m){try{s(),d(function(){s()?T(m):m()})}catch(N){m(N)}}var A=0,D=!1,u=W.findDOMNode,F=W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,f=F[0],r=F[4],g=F[5],p=F[6],K=F[7],B=F[8],U=F[9],ne=F[10];function ae(){}function ye(m,N){if(!m)return[];if(m=xn(m),!m)return[];for(var M=m,fe=[];;){if(M.tag===5||M.tag===6||M.tag===1||M.tag===0){var _=M.stateNode;N(_)&&fe.push(_)}if(M.child)M.child.return=M,M=M.child;else{if(M===m)return fe;for(;!M.sibling;){if(!M.return||M.return===m)return fe;M=M.return}M.sibling.return=M.return,M=M.sibling}}}function Ie(m,N){if(m&&!m._reactInternalFiber){var M=""+m;throw m=Array.isArray(m)?"an array":m&&m.nodeType===1&&m.tagName?"a DOM node":M==="[object Object]"?"object with keys {"+Object.keys(m).join(", ")+"}":M,Error(L(286,N,m))}}var Ke={renderIntoDocument:function(m){var N=document.createElement("div");return W.render(m,N)},isElement:function(m){return h.isValidElement(m)},isElementOfType:function(m,N){return h.isValidElement(m)&&m.type===N},isDOMComponent:function(m){return!(!m||m.nodeType!==1||!m.tagName)},isDOMComponentElement:function(m){return!!(m&&h.isValidElement(m)&&m.tagName)},isCompositeComponent:function(m){return Ke.isDOMComponent(m)?!1:m!=null&&typeof m.render=="function"&&typeof m.setState=="function"},isCompositeComponentWithType:function(m,N){return Ke.isCompositeComponent(m)?m._reactInternalFiber.type===N:!1},findAllInRenderedTree:function(m,N){return Ie(m,"findAllInRenderedTree"),m?ye(m._reactInternalFiber,N):[]},scryRenderedDOMComponentsWithClass:function(m,N){return Ie(m,"scryRenderedDOMComponentsWithClass"),Ke.findAllInRenderedTree(m,function(M){if(Ke.isDOMComponent(M)){var fe=M.className;typeof fe!="string"&&(fe=M.getAttribute("class")||"");var _=fe.split(/\s+/);if(!Array.isArray(N)){if(N===void 0)throw Error(L(11));N=N.split(/\s+/)}return N.every(function(je){return _.indexOf(je)!==-1})}return!1})},findRenderedDOMComponentWithClass:function(m,N){if(Ie(m,"findRenderedDOMComponentWithClass"),m=Ke.scryRenderedDOMComponentsWithClass(m,N),m.length!==1)throw Error("Did not find exactly one match (found: "+m.length+") for class:"+N);return m[0]},scryRenderedDOMComponentsWithTag:function(m,N){return Ie(m,"scryRenderedDOMComponentsWithTag"),Ke.findAllInRenderedTree(m,function(M){return Ke.isDOMComponent(M)&&M.tagName.toUpperCase()===N.toUpperCase()})},findRenderedDOMComponentWithTag:function(m,N){if(Ie(m,"findRenderedDOMComponentWithTag"),m=Ke.scryRenderedDOMComponentsWithTag(m,N),m.length!==1)throw Error("Did not find exactly one match (found: "+m.length+") for tag:"+N);return m[0]},scryRenderedComponentsWithType:function(m,N){return Ie(m,"scryRenderedComponentsWithType"),Ke.findAllInRenderedTree(m,function(M){return Ke.isCompositeComponentWithType(M,N)})},findRenderedComponentWithType:function(m,N){if(Ie(m,"findRenderedComponentWithType"),m=Ke.scryRenderedComponentsWithType(m,N),m.length!==1)throw Error("Did not find exactly one match (found: "+m.length+") for componentType:"+N);return m[0]},mockComponent:function(m,N){return N=N||m.mockTagName||"div",m.prototype.render.mockImplementation(function(){return h.createElement(N,null,this.props.children)}),this},nativeTouchData:function(m,N){return{touches:[{pageX:m,pageY:N}]}},Simulate:null,SimulateNative:{},act:function(m){function N(){A--,a.current=M,b.current=fe}D===!1&&(D=!0,console.error("act(...) is not supported in production builds of React, and might not behave as expected.")),A++;var M=a.current,fe=b.current;a.current=!0,b.current=!0;try{var _=O(m)}catch(je){throw N(),je}if(_!==null&&typeof _=="object"&&typeof _.then=="function")return{then:function(je,xe){_.then(function(){1<A||l===!0&&M===!0?(N(),je()):T(function(Je){N(),Je?xe(Je):je()})},function(Je){N(),xe(Je)})}};try{A!==1||l!==!1&&M!==!1||s(),N()}catch(je){throw N(),je}return{then:function(je){je()}}}};function bn(m){return function(N,M){if(h.isValidElement(N))throw Error(L(228));if(Ke.isCompositeComponent(N))throw Error(L(229));var fe=r[m],_=new ae;_.target=N,_.type=m.toLowerCase();var je=f(N),xe=new ln(fe,je,_,N);xe.persist(),n(xe,M),fe.phasedRegistrationNames?g(xe):p(xe),W.unstable_batchedUpdates(function(){K(N),ne(xe)}),B()}}Ke.Simulate={};for(var $n in r)Ke.Simulate[$n]=bn($n);function et(m,N){return function(M,fe){var _=new ae(m);n(_,fe),Ke.isDOMComponent(M)?(M=u(M),_.target=M,U(N,1,document,_)):M.tagName&&(_.target=M,U(N,1,document,_))}}[["abort","abort"],[_n,"animationEnd"],[ct,"animationIteration"],[P,"animationStart"],["blur","blur"],["canplaythrough","canPlayThrough"],["canplay","canPlay"],["cancel","cancel"],["change","change"],["click","click"],["close","close"],["compositionend","compositionEnd"],["compositionstart","compositionStart"],["compositionupdate","compositionUpdate"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["dragstart","dragStart"],["drag","drag"],["drop","drop"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],["ended","ended"],["error","error"],["focus","focus"],["input","input"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["loadstart","loadStart"],["loadstart","loadStart"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["mousedown","mouseDown"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["playing","playing"],["progress","progress"],["ratechange","rateChange"],["scroll","scroll"],["seeked","seeked"],["seeking","seeking"],["selectionchange","selectionChange"],["stalled","stalled"],["suspend","suspend"],["textInput","textInput"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchmove","touchMove"],["touchstart","touchStart"],[I,"transitionEnd"],["volumechange","volumeChange"],["waiting","waiting"],["wheel","wheel"]].forEach(function(m){var N=m[1];Ke.SimulateNative[N]=et(N,m[0])}),z.exports=Ke.default||Ke}).call(this,e("hOG+")(Kn))},JjdP:function(Kn,gn,e){"use strict";e.r(gn);var z=e("9og8"),n=e("WmNS"),h=e.n(n),W=e("LtsZ"),oe=`import React, { useRef } from 'react';
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

export default Demo;`,L=`import React from 'react';
import FormRender, { useForm } from 'form-render';

const Demo = props => {
  const form = useForm();
  return <FormRender form={form} {...props} />;
};

export default Demo;`,we=`export const delay = ms => new Promise(res => setTimeout(res, ms));

export const fakeApi = (url, data) => {
  console.group('request:', url);
  console.log('params:', data);
  console.groupEnd();
  return delay(500);
};`,Fe=`import React from 'react';
import FormRender, { useForm } from 'form-render';

const Demo = ({ schema }) => {
  const form = useForm();
  return (
    <div>
      <FormRender form={form} schema={schema} />
    </div>
  );
};

export default Demo;`,ve=`export const basic = {
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
};`,xn=`import React, { Component } from 'react';
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

export default Root;`,Pe=`import React, { useState, useEffect } from 'react';
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
}`,ln=`import { Select } from 'antd';
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

export default SearchInput;`,Rn=`import React from 'react';
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

export default Demo;`,pn=`import { monaco } from 'react-monaco-editor'

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

export { valueMap, keySuggestions }`,Ye=`.markdown p {
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

export default Demo;`,Mn=`import React, { useState, useRef } from 'react';
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

export default Demo;`,jn=`import React from 'react';
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

export default Demo;`,We=`import React from 'react';
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

export default Demo;`,zn=`.fr-generator-playground {
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

export default Demo;`,_n=`import React, { useState, useRef } from 'react';
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

export default Demo;`,ct=gn.default={"guide-card":{component:Object(W.dynamic)({loader:function(){var P=Object(z.a)(h.a.mark(function j(){return h.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(22)]).then(e.bind(null,"oLxE"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},j)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:oe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"card-render":{version:"0.1.2"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"0.x"}},identifier:"guide-card"}},"chart-render-demo":{component:Object(W.dynamic)({loader:function(){var P=Object(z.a)(h.a.mark(function j(){var d,o,v,b,O,a,l;return h.a.wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return a=function(D,u){if(!u&&D&&D.__esModule)return D;if(D===null||typeof D!="object"&&typeof D!="function")return{default:D};var F=O(u);if(F&&F.has(D))return F.get(D);var f={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var g in D)if(g!=="default"&&Object.prototype.hasOwnProperty.call(D,g)){var p=r?Object.getOwnPropertyDescriptor(D,g):null;p&&(p.get||p.set)?Object.defineProperty(f,g,p):f[g]=D[g]}return f.default=D,F&&F.set(D,f),f},O=function(D){if(typeof WeakMap!="function")return null;var u=new WeakMap,F=new WeakMap;return(O=function(r){return r?F:u})(D)},d=e("K+nK"),T.t0=d,T.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return T.t1=T.sent,o=(0,T.t0)(T.t1),T.t2=a,T.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return T.t3=T.sent,v=(0,T.t2)(T.t3),T.next=15,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 15:return b=T.sent,l=function(){var D=(0,v.useState)("Line"),u=(0,o.default)(D,2),F=u[0],f=u[1],r={Line:b.Line,Column:b.Column,PivotTable:b.PivotTable}[F];return v.default.createElement("div",null,v.default.createElement("div",{style:{marginBottom:10}},v.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return f("Line")}},"\u6298\u7EBF\u56FE"),v.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return f("Column")}},"\u67F1\u72B6\u56FE"),v.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return f("PivotTable")}},"\u4EA4\u53C9\u8868")),v.default.createElement(r,{meta:[{id:"date",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF",isDim:!1},{id:"uv",name:"\u8BBF\u5BA2\u6570",isDim:!1}],data:[{date:"20200101",pv:100,uv:50},{date:"20200102",pv:120,uv:60},{date:"20200103",pv:140,uv:70},{date:"20200104",pv:160,uv:80}]}))},T.abrupt("return",l);case 18:case"end":return T.stop()}},j)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"chart-render-demo"}},"column-demo":{component:Object(W.dynamic)({loader:function(){var P=Object(z.a)(h.a.mark(function j(){var d,o,v,b;return h.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=a.sent,b=function(){return o.default.createElement(v.Column,{meta:[{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{pv:50,uv:20}]})},a.abrupt("return",b);case 11:case"end":return a.stop()}},j)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[{ pv: 50, uv: 20 }]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo"}},"column-demo-1":{component:Object(W.dynamic)({loader:function(){var P=Object(z.a)(h.a.mark(function j(){var d,o,v,b;return h.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=a.sent,b=function(){return o.default.createElement(v.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},a.abrupt("return",b);case 11:case"end":return a.stop()}},j)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-1"}},"column-demo-2":{component:Object(W.dynamic)({loader:function(){var P=Object(z.a)(h.a.mark(function j(){var d,o,v,b;return h.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=a.sent,b=function(){return o.default.createElement(v.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},a.abrupt("return",b);case 11:case"end":return a.stop()}},j)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-2"}},"column-demo-3":{component:Object(W.dynamic)({loader:function(){var P=Object(z.a)(h.a.mark(function j(){var d,o,v,b;return h.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=a.sent,b=function(){return o.default.createElement(v.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},a.abrupt("return",b);case 11:case"end":return a.stop()}},j)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-3"}},"column-demo-4":{component:Object(W.dynamic)({loader:function(){var P=Object(z.a)(h.a.mark(function j(){var d,o,v,b;return h.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=a.sent,b=function(){return o.default.createElement(v.Column,{inverted:!0,label:{position:"middle",layout:[{type:"interval-adjust-position"},{type:"interval-hide-overlap"},{type:"adjust-color"}]},meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},a.abrupt("return",b);case 11:case"end":return a.stop()}},j)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-4"}},"line-demo":{component:Object(W.dynamic)({loader:function(){var P=Object(z.a)(h.a.mark(function j(){var d,o,v,b;return h.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=a.sent,b=function(){return o.default.createElement(v.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},a.abrupt("return",b);case 11:case"end":return a.stop()}},j)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo"}},"line-demo-1":{component:Object(W.dynamic)({loader:function(){var P=Object(z.a)(h.a.mark(function j(){var d,o,v,b;return h.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=a.sent,b=function(){return o.default.createElement(v.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},a.abrupt("return",b);case 11:case"end":return a.stop()}},j)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-1"}},"line-demo-2":{component:Object(W.dynamic)({loader:function(){var P=Object(z.a)(h.a.mark(function j(){var d,o,v,b;return h.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=a.sent,b=function(){return o.default.createElement(v.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"},{id:"pv",name:"\u8BBF\u95EE\u91CF"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20,pv:120},{ds:"2020-12-31",page:"\u9996\u9875",uv:120,pv:1120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21,pv:121},{ds:"2021-01-01",page:"\u9996\u9875",uv:121,pv:1121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15,pv:115},{ds:"2021-01-02",page:"\u9996\u9875",uv:115,pv:1115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40,pv:140},{ds:"2021-01-03",page:"\u9996\u9875",uv:140,pv:1140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31,pv:131},{ds:"2021-01-04",page:"\u9996\u9875",uv:131,pv:1131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32,pv:132},{ds:"2021-01-05",page:"\u9996\u9875",uv:132,pv:1132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30,pv:130},{ds:"2021-01-06",page:"\u9996\u9875",uv:130,pv:1130}]})},a.abrupt("return",b);case 11:case"end":return a.stop()}},j)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-2"}},"line-demo-3":{component:Object(W.dynamic)({loader:function(){var P=Object(z.a)(h.a.mark(function j(){var d,o,v,b;return h.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=a.sent,b=function(){return o.default.createElement(v.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},a.abrupt("return",b);case 11:case"end":return a.stop()}},j)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-3"}},"line-demo-4":{component:Object(W.dynamic)({loader:function(){var P=Object(z.a)(h.a.mark(function j(){var d,o,v,b;return h.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=a.sent,b=function(){return o.default.createElement(v.Line,{withArea:!0,isStack:!0,isPercent:!0,meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},a.abrupt("return",b);case 11:case"end":return a.stop()}},j)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-4"}},"pivot-table-demo":{component:Object(W.dynamic)({loader:function(){var P=Object(z.a)(h.a.mark(function j(){var d,o,v,b;return h.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=a.sent,b=function(){return o.default.createElement(v.PivotTable,{style:{maxHeight:400,overflow:"auto"},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},a.abrupt("return",b);case 11:case"end":return a.stop()}},j)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo"}},"pivot-table-demo-1":{component:Object(W.dynamic)({loader:function(){var P=Object(z.a)(h.a.mark(function j(){var d,o,v,b;return h.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=a.sent,b=function(){return o.default.createElement(v.PivotTable,{style:{maxHeight:400,overflow:"auto"},cellRender:function(T,A,D){return o.default.createElement("div",null,o.default.createElement("p",null,"\u53C2\u6570\u8868\uFF1A"),o.default.createElement("p",{style:{color:["red","orange","yellow","green","blue"][Object.keys(A).length]}},T),o.default.createElement("p",null,JSON.stringify(A)),o.default.createElement("p",null,JSON.stringify(D)))},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},a.abrupt("return",b);case 11:case"end":return a.stop()}},j)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-1"}},"pivot-table-demo-2":{component:Object(W.dynamic)({loader:function(){var P=Object(z.a)(h.a.mark(function j(){var d,o,v,b,O,a,l;return h.a.wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return a=function(D,u){if(!u&&D&&D.__esModule)return D;if(D===null||typeof D!="object"&&typeof D!="function")return{default:D};var F=O(u);if(F&&F.has(D))return F.get(D);var f={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var g in D)if(g!=="default"&&Object.prototype.hasOwnProperty.call(D,g)){var p=r?Object.getOwnPropertyDescriptor(D,g):null;p&&(p.get||p.set)?Object.defineProperty(f,g,p):f[g]=D[g]}return f.default=D,F&&F.set(D,f),f},O=function(D){if(typeof WeakMap!="function")return null;var u=new WeakMap,F=new WeakMap;return(O=function(r){return r?F:u})(D)},d=e("K+nK"),T.t0=d,T.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return T.t1=T.sent,o=(0,T.t0)(T.t1),T.t2=a,T.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return T.t3=T.sent,v=(0,T.t2)(T.t3),T.next=15,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 15:return b=T.sent,l=function(){var D=(0,v.useState)(!1),u=(0,o.default)(D,2),F=u[0],f=u[1];return v.default.createElement(v.default.Fragment,null,v.default.createElement("label",null,"\u53EF\u5C55\u5F00/\u6536\u7F29\uFF1A",v.default.createElement("input",{type:"checkbox",value:F,onChange:function(){return f(!F)}})),v.default.createElement(b.PivotTable,{leftExpandable:F,showSubtotal:!1,meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]}))},T.abrupt("return",l);case 18:case"end":return T.stop()}},j)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-2"}},"form-render-demo":{component:Object(W.dynamic)({loader:function(){var P=Object(z.a)(h.a.mark(function j(){var d,o,v,b,O,a,l,s,T,A,D,u,F,f;return h.a.wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return D=function(K,B){if(!B&&K&&K.__esModule)return K;if(K===null||typeof K!="object"&&typeof K!="function")return{default:K};var U=A(B);if(U&&U.has(K))return U.get(K);var ne={},ae=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ye in K)if(ye!=="default"&&Object.prototype.hasOwnProperty.call(K,ye)){var Ie=ae?Object.getOwnPropertyDescriptor(K,ye):null;Ie&&(Ie.get||Ie.set)?Object.defineProperty(ne,ye,Ie):ne[ye]=K[ye]}return ne.default=K,U&&U.set(K,ne),ne},A=function(K){if(typeof WeakMap!="function")return null;var B=new WeakMap,U=new WeakMap;return(A=function(ae){return ae?U:B})(K)},d=e("K+nK"),g.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return g.t0=d,g.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return g.t1=g.sent,o=(0,g.t0)(g.t1),g.t2=d,g.next=13,e.e(70).then(e.bind(null,"fWQN"));case 13:return g.t3=g.sent,v=(0,g.t2)(g.t3),g.t4=d,g.next=18,e.e(71).then(e.bind(null,"mtLc"));case 18:return g.t5=g.sent,b=(0,g.t4)(g.t5),g.t6=d,g.next=23,e.e(64).then(e.bind(null,"yKVA"));case 23:return g.t7=g.sent,O=(0,g.t6)(g.t7),g.t8=d,g.next=28,e.e(62).then(e.bind(null,"879j"));case 28:return g.t9=g.sent,a=(0,g.t8)(g.t9),g.t10=d,g.next=33,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 33:return g.t11=g.sent,l=(0,g.t10)(g.t11),g.next=37,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 37:return s=g.sent,g.t12=D,g.next=41,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 41:return g.t13=g.sent,T=(0,g.t12)(g.t13),u={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},F=function(p){(0,O.default)(B,p);var K=(0,a.default)(B);function B(){return(0,v.default)(this,B),K.apply(this,arguments)}return(0,b.default)(B,[{key:"render",value:function(){var ne=this.props.form;return l.default.createElement("div",null,l.default.createElement(T.default,{form:ne,schema:u}),l.default.createElement(o.default,{type:"primary",onClick:ne.submit},"\u63D0\u4EA4"))}}]),B}(l.default.Component),f=(0,T.connectForm)(F),g.abrupt("return",f);case 47:case"end":return g.stop()}},j)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default connectForm(Demo);`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo"}},"form-render-demo-1":{component:Object(W.dynamic)({loader:function(){var P=Object(z.a)(h.a.mark(function j(){var d,o,v,b,O,a,l,s,T,A;return h.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return l=function(f,r){if(!r&&f&&f.__esModule)return f;if(f===null||typeof f!="object"&&typeof f!="function")return{default:f};var g=a(r);if(g&&g.has(f))return g.get(f);var p={},K=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var B in f)if(B!=="default"&&Object.prototype.hasOwnProperty.call(f,B)){var U=K?Object.getOwnPropertyDescriptor(f,B):null;U&&(U.get||U.set)?Object.defineProperty(p,B,U):p[B]=f[B]}return p.default=f,g&&g.set(f,p),p},a=function(f){if(typeof WeakMap!="function")return null;var r=new WeakMap,g=new WeakMap;return(a=function(K){return K?g:r})(f)},d=e("K+nK"),u.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return u.t0=d,u.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return u.t1=u.sent,o=(0,u.t0)(u.t1),u.t2=d,u.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return u.t3=u.sent,v=(0,u.t2)(u.t3),u.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 17:return b=u.sent,u.t4=l,u.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 21:return u.t5=u.sent,O=(0,u.t4)(u.t5),s={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},T=function(){var f=(0,O.useForm)();return v.default.createElement("div",null,v.default.createElement(O.default,{form:f,schema:s}),v.default.createElement(o.default,{type:"primary",onClick:f.submit},"\u63D0\u4EA4"))},A=T,u.abrupt("return",A);case 27:case"end":return u.stop()}},j)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo-1"}},"form-render-demo-2":{component:Object(W.dynamic)({loader:function(){var P=Object(z.a)(h.a.mark(function j(){var d,o,v,b,O,a,l,s,T,A;return h.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return l=function(f,r){if(!r&&f&&f.__esModule)return f;if(f===null||typeof f!="object"&&typeof f!="function")return{default:f};var g=a(r);if(g&&g.has(f))return g.get(f);var p={},K=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var B in f)if(B!=="default"&&Object.prototype.hasOwnProperty.call(f,B)){var U=K?Object.getOwnPropertyDescriptor(f,B):null;U&&(U.get||U.set)?Object.defineProperty(p,B,U):p[B]=f[B]}return p.default=f,g&&g.set(f,p),p},a=function(f){if(typeof WeakMap!="function")return null;var r=new WeakMap,g=new WeakMap;return(a=function(K){return K?g:r})(f)},d=e("K+nK"),u.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return u.t0=d,u.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return u.t1=u.sent,o=(0,u.t0)(u.t1),u.t2=d,u.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return u.t3=u.sent,v=(0,u.t2)(u.t3),u.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 17:return b=u.sent,u.t4=l,u.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 21:return u.t5=u.sent,O=(0,u.t4)(u.t5),s={displayType:"row",labelWidth:60,type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F",type:"range",format:"date"},siteUrl:{title:"\u7F51\u5740",type:"string",placeholder:"\u6B64\u5904\u5FC5\u586B",required:!0,props:{addonBefore:"https://",addonAfter:".com"}}}},T=function(){var f=(0,O.useForm)(),r=function(p,K){K.length>0?alert("errors:"+JSON.stringify(K)):alert("formData:"+JSON.stringify(p,null,2))};return v.default.createElement("div",null,v.default.createElement(O.default,{form:f,schema:s,onFinish:r}),v.default.createElement(o.default,{type:"primary",onClick:f.submit},"\u63D0\u4EA4"))},A=T,u.abrupt("return",A);case 27:case"end":return u.stop()}},j)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-demo-2"}},"migrate-demo":{component:Object(W.dynamic)({loader:function(){var P=Object(z.a)(h.a.mark(function j(){var d,o,v,b,O,a,l,s;return h.a.wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return l=function(){var u=(0,v.useForm)(),F=function(r,g){g.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(g))):alert(JSON.stringify(r))};return o.default.createElement("div",null,o.default.createElement(v.default,{form:u,schema:a,onFinish:F}),o.default.createElement("button",{onClick:u.submit},"\u63D0\u4EA4"))},O=function(u,F){if(!F&&u&&u.__esModule)return u;if(u===null||typeof u!="object"&&typeof u!="function")return{default:u};var f=b(F);if(f&&f.has(u))return f.get(u);var r={},g=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var p in u)if(p!=="default"&&Object.prototype.hasOwnProperty.call(u,p)){var K=g?Object.getOwnPropertyDescriptor(u,p):null;K&&(K.get||K.set)?Object.defineProperty(r,p,K):r[p]=u[p]}return r.default=u,f&&f.set(u,r),r},b=function(u){if(typeof WeakMap!="function")return null;var F=new WeakMap,f=new WeakMap;return(b=function(g){return g?f:F})(u)},d=e("K+nK"),A.t0=d,A.next=7,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 7:return A.t1=A.sent,o=(0,A.t0)(A.t1),A.t2=O,A.next=12,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 12:return A.t3=A.sent,v=(0,A.t2)(A.t3),a={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}},s=l,A.abrupt("return",s);case 17:case"end":return A.stop()}},j)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate-demo"}},"display-demo":{component:Object(W.dynamic)({loader:function(){var P=Object(z.a)(h.a.mark(function j(){var d,o,v,b,O;return h.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,v=(0,l.t2)(l.t3),b=function(T){return{type:"object",displayType:T,properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},objectName:{title:"\u5BF9\u8C61",bind:"obj",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},O=function(){return o.default.createElement("div",null,o.default.createElement("h2",null,"display: row"),o.default.createElement(v.default,{schema:b("row")}),o.default.createElement("h2",null,"display: column"),o.default.createElement(v.default,{schema:b("column")}))},l.abrupt("return",O);case 14:case"end":return l.stop()}},j)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo"}},"display-demo-1":{component:Object(W.dynamic)({loader:function(){var P=Object(z.a)(h.a.mark(function j(){var d,o,v,b,O;return h.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,v=(0,l.t2)(l.t3),b={type:"object",displayType:"inline",properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},O=function(){return o.default.createElement(v.default,{schema:b})},l.abrupt("return",O);case 14:case"end":return l.stop()}},j)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-1"}},"display-demo-2":{component:Object(W.dynamic)({loader:function(){var P=Object(z.a)(h.a.mark(function j(){var d,o,v,b,O;return h.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,v=(0,l.t2)(l.t3),b={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0},check:{title:"box",type:"boolean",default:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},O=function(){return o.default.createElement(v.default,{readOnly:!0,schema:b})},l.abrupt("return",O);case 14:case"end":return l.stop()}},j)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form readOnly schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-2"}},"display-demo-3":{component:Object(W.dynamic)({loader:function(){var P=Object(z.a)(h.a.mark(function j(){var d,o,v,b,O;return h.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,v=(0,l.t2)(l.t3),b={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0,width:"50%"},check:{title:"box",type:"boolean",default:!0,width:"50%",labelWidth:6},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},O=function(){return o.default.createElement(v.default,{labelWidth:"200",schema:b})},l.abrupt("return",O);case 14:case"end":return l.stop()}},j)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form labelWidth="200" schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-3"}},"display-demo-4":{component:Object(W.dynamic)({loader:function(){var P=Object(z.a)(h.a.mark(function j(){var d,o,v,b,O,a;return h.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,v=(0,s.t2)(s.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},O=function(){return o.default.createElement(v.default,{schema:b})},a=O,s.abrupt("return",a);case 15:case"end":return s.stop()}},j)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-4"}},"display-demo-5":{component:Object(W.dynamic)({loader:function(){var P=Object(z.a)(h.a.mark(function j(){var d,o,v,b,O,a;return h.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,v=(0,s.t2)(s.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},O=function(){return o.default.createElement(v.default,{schema:b})},a=O,s.abrupt("return",a);case 15:case"end":return s.stop()}},j)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-5"}},"display-demo-6":{component:Object(W.dynamic)({loader:function(){var P=Object(z.a)(h.a.mark(function j(){var d,o,v,b,O,a;return h.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,v=(0,s.t2)(s.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},O=function(){return o.default.createElement(v.default,{schema:b})},a=O,s.abrupt("return",a);case 15:case"end":return s.stop()}},j)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-6"}},"display-demo-7":{component:Object(W.dynamic)({loader:function(){var P=Object(z.a)(h.a.mark(function j(){var d,o,v,b,O,a;return h.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,v=(0,s.t2)(s.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},O=function(){return o.default.createElement(v.default,{schema:b})},a=O,s.abrupt("return",a);case 15:case"end":return s.stop()}},j)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-7"}},"form-methods-demo":{component:Object(W.dynamic)({loader:function(){var P=Object(z.a)(h.a.mark(function j(){var d,o,v,b,O,a,l,s,T,A,D,u,F;return h.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return D=function(p,K){if(!K&&p&&p.__esModule)return p;if(p===null||typeof p!="object"&&typeof p!="function")return{default:p};var B=A(K);if(B&&B.has(p))return B.get(p);var U={},ne=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ae in p)if(ae!=="default"&&Object.prototype.hasOwnProperty.call(p,ae)){var ye=ne?Object.getOwnPropertyDescriptor(p,ae):null;ye&&(ye.get||ye.set)?Object.defineProperty(U,ae,ye):U[ae]=p[ae]}return U.default=p,B&&B.set(p,U),U},A=function(p){if(typeof WeakMap!="function")return null;var K=new WeakMap,B=new WeakMap;return(A=function(ne){return ne?B:K})(p)},d=e("K+nK"),r.next=5,e.e(18).then(e.t.bind(null,"lfLe",7));case 5:return r.t0=d,r.next=8,e.e(19).then(e.t.bind(null,"Cp9S",7));case 8:return r.t1=r.sent,o=(0,r.t0)(r.t1),r.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return r.t2=d,r.next=15,e.e(13).then(e.t.bind(null,"4IMT",7));case 15:return r.t3=r.sent,v=(0,r.t2)(r.t3),r.next=19,e.e(14).then(e.t.bind(null,"tL+A",7));case 19:return r.t4=d,r.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return r.t5=r.sent,b=(0,r.t4)(r.t5),r.t6=d,r.next=27,Promise.resolve().then(e.bind(null,"tJVT"));case 27:return r.t7=r.sent,O=(0,r.t6)(r.t7),r.t8=D,r.next=32,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 32:return r.t9=r.sent,a=(0,r.t8)(r.t9),r.next=36,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 36:return l=r.sent,r.t10=D,r.next=40,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 40:return r.t11=r.sent,s=(0,r.t10)(r.t11),r.next=44,e.e(15).then(e.bind(null,"OH0R"));case 44:return T=r.sent,u=function(){var p=(0,s.useForm)(),K=(0,a.useState)({}),B=(0,O.default)(K,2),U=B[0],ne=B[1],ae=function(){(0,T.fakeApi)("xxx/getForm").then(function(Ke){p.setValues({input1:"hello world",select1:"c"})})};(0,a.useEffect)(function(){(0,T.delay)(1e3).then(function(Ie){ne({type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}})})},[]);var ye=function(Ke,bn){bn.length>0?b.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(bn.map(function($n){return $n.name}))):(0,T.fakeApi)("xxx/submit",Ke).then(function($n){return b.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})};return a.default.createElement("div",{style:{width:"400px"}},a.default.createElement(s.default,{form:p,schema:U,onFinish:ye}),a.default.createElement(o.default,null,a.default.createElement(v.default,{onClick:ae},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),a.default.createElement(v.default,{type:"primary",onClick:p.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},F=u,r.abrupt("return",F);case 48:case"end":return r.stop()}},j)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:we}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo"}},"form-methods-demo-1":{component:Object(W.dynamic)({loader:function(){var P=Object(z.a)(h.a.mark(function j(){var d,o,v,b,O,a,l,s,T,A,D,u,F;return h.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return A=function(p,K){if(!K&&p&&p.__esModule)return p;if(p===null||typeof p!="object"&&typeof p!="function")return{default:p};var B=T(K);if(B&&B.has(p))return B.get(p);var U={},ne=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ae in p)if(ae!=="default"&&Object.prototype.hasOwnProperty.call(p,ae)){var ye=ne?Object.getOwnPropertyDescriptor(p,ae):null;ye&&(ye.get||ye.set)?Object.defineProperty(U,ae,ye):U[ae]=p[ae]}return U.default=p,B&&B.set(p,U),U},T=function(p){if(typeof WeakMap!="function")return null;var K=new WeakMap,B=new WeakMap;return(T=function(ne){return ne?B:K})(p)},d=e("K+nK"),r.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return r.t0=d,r.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return r.t1=r.sent,o=(0,r.t0)(r.t1),r.t2=d,r.next=13,Promise.resolve().then(e.bind(null,"PpiC"));case 13:return r.t3=r.sent,v=(0,r.t2)(r.t3),r.next=17,e.e(14).then(e.t.bind(null,"tL+A",7));case 17:return r.t4=d,r.next=20,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 20:return r.t5=r.sent,b=(0,r.t4)(r.t5),r.t6=d,r.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return r.t7=r.sent,O=(0,r.t6)(r.t7),r.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 29:return a=r.sent,r.t8=A,r.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 33:return r.t9=r.sent,l=(0,r.t8)(r.t9),r.next=37,e.e(15).then(e.bind(null,"OH0R"));case 37:return s=r.sent,D={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},u=function(){var p=(0,l.useForm)(),K=function(ne,ae){ae.length>0?b.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(ae.map(function(ye){return ye.name}))):(0,s.fakeApi)("xxx/submit",ne).then(function(ye){return b.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},B=function(ne){var ae=ne.data,ye=ne.errors,Ie=ne.schema,Ke=(0,v.default)(ne,["data","errors","schema"]);return(0,s.fakeApi)("xxx/validation").then(function(bn){return{name:"select1",error:["\u5916\u90E8\u6821\u9A8C\u9519\u8BEF"]}})};return O.default.createElement("div",{style:{width:"400px"}},O.default.createElement(l.default,{form:p,schema:D,beforeFinish:B,onFinish:K}),O.default.createElement(o.default,{type:"primary",onClick:p.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},F=u,r.abrupt("return",F);case 42:case"end":return r.stop()}},j)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:we}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-1"}},"form-methods-demo-2":{component:Object(W.dynamic)({loader:function(){var P=Object(z.a)(h.a.mark(function j(){var d,o,v,b,O,a,l,s,T,A,D,u,F;return h.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return A=function(p,K){if(!K&&p&&p.__esModule)return p;if(p===null||typeof p!="object"&&typeof p!="function")return{default:p};var B=T(K);if(B&&B.has(p))return B.get(p);var U={},ne=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ae in p)if(ae!=="default"&&Object.prototype.hasOwnProperty.call(p,ae)){var ye=ne?Object.getOwnPropertyDescriptor(p,ae):null;ye&&(ye.get||ye.set)?Object.defineProperty(U,ae,ye):U[ae]=p[ae]}return U.default=p,B&&B.set(p,U),U},T=function(p){if(typeof WeakMap!="function")return null;var K=new WeakMap,B=new WeakMap;return(T=function(ne){return ne?B:K})(p)},d=e("K+nK"),r.next=5,e.e(18).then(e.t.bind(null,"lfLe",7));case 5:return r.t0=d,r.next=8,e.e(19).then(e.t.bind(null,"Cp9S",7));case 8:return r.t1=r.sent,o=(0,r.t0)(r.t1),r.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return r.t2=d,r.next=15,e.e(13).then(e.t.bind(null,"4IMT",7));case 15:return r.t3=r.sent,v=(0,r.t2)(r.t3),r.next=19,e.e(14).then(e.t.bind(null,"tL+A",7));case 19:return r.t4=d,r.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return r.t5=r.sent,b=(0,r.t4)(r.t5),r.t6=d,r.next=27,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 27:return r.t7=r.sent,O=(0,r.t6)(r.t7),r.next=31,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 31:return a=r.sent,r.t8=A,r.next=35,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 35:return r.t9=r.sent,l=(0,r.t8)(r.t9),r.next=39,e.e(15).then(e.bind(null,"OH0R"));case 39:return s=r.sent,D={type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F\u8303\u56F4",type:"range",format:"date"}}},u=function(){var p=(0,l.useForm)(),K=function(ne,ae){ae.length>0?b.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(ae.map(function(ye){return ye.name}))):(0,s.fakeApi)("xxx/submit",ne).then(function(ye){return b.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},B=function(){(0,s.fakeApi)("xxx/getForm").then(function(ne){p.setValues({startDate:"2020-04-04",endDate:"2020-04-24"})})};return O.default.createElement("div",{style:{width:"400px"}},O.default.createElement(l.default,{form:p,schema:D,onFinish:K}),O.default.createElement(o.default,null,O.default.createElement(v.default,{onClick:B},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),O.default.createElement(v.default,{type:"primary",onClick:p.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},F=u,r.abrupt("return",F);case 44:case"end":return r.stop()}},j)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:we}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-2"}},"form-methods-demo-3":{component:Object(W.dynamic)({loader:function(){var P=Object(z.a)(h.a.mark(function j(){var d,o,v,b,O,a,l,s,T,A,D,u;return h.a.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return T=function(g,p){if(!p&&g&&g.__esModule)return g;if(g===null||typeof g!="object"&&typeof g!="function")return{default:g};var K=s(p);if(K&&K.has(g))return K.get(g);var B={},U=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ne in g)if(ne!=="default"&&Object.prototype.hasOwnProperty.call(g,ne)){var ae=U?Object.getOwnPropertyDescriptor(g,ne):null;ae&&(ae.get||ae.set)?Object.defineProperty(B,ne,ae):B[ne]=g[ne]}return B.default=g,K&&K.set(g,B),B},s=function(g){if(typeof WeakMap!="function")return null;var p=new WeakMap,K=new WeakMap;return(s=function(U){return U?K:p})(g)},d=e("K+nK"),f.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return f.t0=d,f.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return f.t1=f.sent,o=(0,f.t0)(f.t1),f.next=12,e.e(14).then(e.t.bind(null,"tL+A",7));case 12:return f.t2=d,f.next=15,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 15:return f.t3=f.sent,v=(0,f.t2)(f.t3),f.t4=T,f.next=20,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 20:return f.t5=f.sent,b=(0,f.t4)(f.t5),f.next=24,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 24:return O=f.sent,f.t6=T,f.next=28,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 28:return f.t7=f.sent,a=(0,f.t6)(f.t7),f.next=32,e.e(15).then(e.bind(null,"OH0R"));case 32:return l=f.sent,A={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select1:{title:"\u5355\u9009",type:"string",widget:"select"}}}}},D=function(){var g=(0,a.useForm)(),p=function(){g.setSchemaByPath("obj1.select1",{enum:["east","south","west","north"],enumNames:["\u4E1C","\u5357","\u897F","\u5317"]})},K=function(U,ne){ne.length>0?v.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(ne.map(function(ae){return ae.name}))):v.default.info(JSON.stringify(U))};return b.default.createElement("div",{style:{width:"400px"}},b.default.createElement(a.default,{form:g,schema:A,onMount:p,onFinish:K}),b.default.createElement(o.default,{type:"primary",onClick:g.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},u=D,f.abrupt("return",u);case 37:case"end":return f.stop()}},j)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:we}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-3"}},"function-demo":{component:Object(W.dynamic)({loader:function(){var P=Object(z.a)(h.a.mark(function j(){var d,o,v,b,O,a,l,s;return h.a.wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return O=function(u,F){if(!F&&u&&u.__esModule)return u;if(u===null||typeof u!="object"&&typeof u!="function")return{default:u};var f=b(F);if(f&&f.has(u))return f.get(u);var r={},g=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var p in u)if(p!=="default"&&Object.prototype.hasOwnProperty.call(u,p)){var K=g?Object.getOwnPropertyDescriptor(u,p):null;K&&(K.get||K.set)?Object.defineProperty(r,p,K):r[p]=u[p]}return r.default=u,f&&f.set(u,r),r},b=function(u){if(typeof WeakMap!="function")return null;var F=new WeakMap,f=new WeakMap;return(b=function(g){return g?f:F})(u)},d=e("K+nK"),A.t0=d,A.next=6,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 6:return A.t1=A.sent,o=(0,A.t0)(A.t1),A.t2=O,A.next=11,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 11:return A.t3=A.sent,v=(0,A.t2)(A.t3),a={type:"object",properties:{select1:{title:"\u5355\u9009",description:"\u5C1D\u8BD5\u9009\u62E9\u201C\u663E\u793A\u8F93\u5165\u6846\u201D",type:"string",enum:["a","b"],enumNames:["\u9690\u85CF\u8F93\u5165\u6846","\u663E\u793A\u8F93\u5165\u6846"],disabled:"{{rootValue.input1.length > 5}}",default:"a"},input1:{title:"\u8F93\u5165\u6846",description:"\u5C1D\u8BD5\u8F93\u5165\u8D85\u8FC75\u4E2A\u5B57\u7B26",type:"string",hidden:'{{formData.select1 == "a"}}'}}},l=function(){var u=(0,v.useForm)();return o.default.createElement(v.default,{form:u,schema:a})},s=l,A.abrupt("return",s);case 17:case"end":return A.stop()}},j)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo1;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo"}},"function-demo-1":{component:Object(W.dynamic)({loader:function(){var P=Object(z.a)(h.a.mark(function j(){var d,o,v,b,O;return h.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return l.t3=l.sent,v=(0,l.t2)(l.t3),l.next=13,e.e(17).then(e.bind(null,"8iYR"));case 13:return b=l.sent,O=function(){return o.default.createElement(v.default,{schema:b.expression})},l.abrupt("return",O);case 16:case"end":return l.stop()}},j)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { expression } from '../json/schema';

export default () => <FR schema={expression} />;`},"demo/FR.jsx":{import:"../demo/FR",content:Fe},"json/schema.js":{import:"../json/schema",content:ve}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo-1"}},"lifeCycle-demo":{component:Object(W.dynamic)({loader:function(){var P=Object(z.a)(h.a.mark(function j(){var d,o,v,b,O,a,l,s,T;return h.a.wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return O=function(F,f){if(!f&&F&&F.__esModule)return F;if(F===null||typeof F!="object"&&typeof F!="function")return{default:F};var r=b(f);if(r&&r.has(F))return r.get(F);var g={},p=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var K in F)if(K!=="default"&&Object.prototype.hasOwnProperty.call(F,K)){var B=p?Object.getOwnPropertyDescriptor(F,K):null;B&&(B.get||B.set)?Object.defineProperty(g,K,B):g[K]=F[K]}return g.default=F,r&&r.set(F,g),g},b=function(F){if(typeof WeakMap!="function")return null;var f=new WeakMap,r=new WeakMap;return(b=function(p){return p?r:f})(F)},D.t0=O,D.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return D.t1=D.sent,d=(0,D.t0)(D.t1),D.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 9:return o=D.sent,D.t2=O,D.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 13:return D.t3=D.sent,v=(0,D.t2)(D.t3),a=function(F){return new Promise(function(f){return setTimeout(f,F)})},l={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u4E0B\u62C9\u9009\u6846",description:"\u52A0\u8F7D\u4E2D...",type:"string",enum:[],widget:"select"}}},s=function(){var F=(0,v.useForm)(),f=function(){F.setValues({input1:"hello world"}),a(3e3).then(function(g){F.setSchemaByPath("select1",{description:"",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]})})};return d.default.createElement(v.default,{form:F,schema:l,onMount:f})},T=s,D.abrupt("return",T);case 20:case"end":return D.stop()}},j)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"lifeCycle-demo"}},"listDisplay-demo":{component:Object(W.dynamic)({loader:function(){var P=Object(z.a)(h.a.mark(function j(){var d,o,v,b,O,a;return h.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,v=(0,s.t2)(s.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},O=function(){return o.default.createElement(v.default,{schema:b})},a=O,s.abrupt("return",a);case 15:case"end":return s.stop()}},j)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo"}},"listDisplay-demo-1":{component:Object(W.dynamic)({loader:function(){var P=Object(z.a)(h.a.mark(function j(){var d,o,v,b,O,a;return h.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,v=(0,s.t2)(s.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},O=function(){return o.default.createElement(v.default,{schema:b})},a=O,s.abrupt("return",a);case 15:case"end":return s.stop()}},j)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-1"}},"listDisplay-demo-2":{component:Object(W.dynamic)({loader:function(){var P=Object(z.a)(h.a.mark(function j(){var d,o,v,b,O,a;return h.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,v=(0,s.t2)(s.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},O=function(){return o.default.createElement(v.default,{schema:b})},a=O,s.abrupt("return",a);case 15:case"end":return s.stop()}},j)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-2"}},"listDisplay-demo-3":{component:Object(W.dynamic)({loader:function(){var P=Object(z.a)(h.a.mark(function j(){var d,o,v,b,O,a;return h.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,v=(0,s.t2)(s.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},O=function(){return o.default.createElement(v.default,{schema:b})},a=O,s.abrupt("return",a);case 15:case"end":return s.stop()}},j)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-3"}},"listDisplay-demo-4":{component:Object(W.dynamic)({loader:function(){var P=Object(z.a)(h.a.mark(function j(){var d,o,v,b,O,a;return h.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,v=(0,s.t2)(s.t3),window.hello=function(T){var A=T.value;console.log(A)},b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list4",itemProps:{buttons:[{callback:"hello",text:"\u590D\u5236"}]},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},O=function(){return o.default.createElement(v.default,{schema:b})},a=O,s.abrupt("return",a);case 16:case"end":return s.stop()}},j)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-4"}},"watch-demo":{component:Object(W.dynamic)({loader:function(){var P=Object(z.a)(h.a.mark(function j(){var d,o,v,b,O,a,l,s;return h.a.wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return O=function(u,F){if(!F&&u&&u.__esModule)return u;if(u===null||typeof u!="object"&&typeof u!="function")return{default:u};var f=b(F);if(f&&f.has(u))return f.get(u);var r={},g=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var p in u)if(p!=="default"&&Object.prototype.hasOwnProperty.call(u,p)){var K=g?Object.getOwnPropertyDescriptor(u,p):null;K&&(K.get||K.set)?Object.defineProperty(r,p,K):r[p]=u[p]}return r.default=u,f&&f.set(u,r),r},b=function(u){if(typeof WeakMap!="function")return null;var F=new WeakMap,f=new WeakMap;return(b=function(g){return g?f:F})(u)},A.t0=O,A.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return A.t1=A.sent,d=(0,A.t0)(A.t1),A.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 9:return o=A.sent,A.t2=O,A.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 13:return A.t3=A.sent,v=(0,A.t2)(A.t3),a={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"}}},l=function(){var u=(0,v.useForm)(),F={"#":function(r){console.log("\u8868\u5355\u7684\u65F6\u65F6\u6570\u636E\u4E3A\uFF1A",r)},input1:function(r){u.setValueByPath("input2",r)}};return d.default.createElement(v.default,{form:u,schema:a,watch:F})},s=l,A.abrupt("return",s);case 19:case"end":return A.stop()}},j)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo"}},"watch-demo-1":{component:Object(W.dynamic)({loader:function(){var P=Object(z.a)(h.a.mark(function j(){var d,o,v,b,O,a,l,s,T,A;return h.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return l=function(f,r){if(!r&&f&&f.__esModule)return f;if(f===null||typeof f!="object"&&typeof f!="function")return{default:f};var g=a(r);if(g&&g.has(f))return g.get(f);var p={},K=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var B in f)if(B!=="default"&&Object.prototype.hasOwnProperty.call(f,B)){var U=K?Object.getOwnPropertyDescriptor(f,B):null;U&&(U.get||U.set)?Object.defineProperty(p,B,U):p[B]=f[B]}return p.default=f,g&&g.set(f,p),p},a=function(f){if(typeof WeakMap!="function")return null;var r=new WeakMap,g=new WeakMap;return(a=function(K){return K?g:r})(f)},d=e("K+nK"),u.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return u.t0=d,u.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return u.t1=u.sent,o=(0,u.t0)(u.t1),u.t2=l,u.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return u.t3=u.sent,v=(0,u.t2)(u.t3),u.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 17:return b=u.sent,u.t4=l,u.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 21:return u.t5=u.sent,O=(0,u.t4)(u.t5),s={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"radio"}}}}},T=function(){var f=(0,O.useForm)(),r=function(K,B){B.length>0?alert("errorFields:"+JSON.stringify(B)):alert("formData:"+JSON.stringify(K,null,2))},g={input1:function(K){K.length>2?f.setSchemaByPath("obj1.select",function(B){var U=B.enumNames;return{enumNames:U.map(function(ne){return ne+"a"})}}):f.setSchemaByPath("obj1.select",{enumNames:["\u65E9","\u4E2D","\u665A"]})}};return v.default.createElement("div",null,v.default.createElement(O.default,{form:f,schema:s,onFinish:r,watch:g}),v.default.createElement(o.default,{type:"",style:{marginRight:8},onClick:function(){return f.setSchemaByPath("input2",{title:"\u7F16\u8F91\u6846",format:"textarea"})}},"\u5C06 input \u6539\u4E3A textarea"),v.default.createElement(o.default,{type:"primary",onClick:f.submit},"\u63D0\u4EA4"))},A=T,u.abrupt("return",A);case 27:case"end":return u.stop()}},j)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo-1"}},"widget-demo":{component:Object(W.dynamic)({loader:function(){var P=Object(z.a)(h.a.mark(function j(){var d,o,v,b,O,a,l,s,T,A,D,u,F;return h.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return T=function(p,K){if(!K&&p&&p.__esModule)return p;if(p===null||typeof p!="object"&&typeof p!="function")return{default:p};var B=s(K);if(B&&B.has(p))return B.get(p);var U={},ne=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ae in p)if(ae!=="default"&&Object.prototype.hasOwnProperty.call(p,ae)){var ye=ne?Object.getOwnPropertyDescriptor(p,ae):null;ye&&(ye.get||ye.set)?Object.defineProperty(U,ae,ye):U[ae]=p[ae]}return U.default=p,B&&B.set(p,U),U},s=function(p){if(typeof WeakMap!="function")return null;var K=new WeakMap,B=new WeakMap;return(s=function(ne){return ne?B:K})(p)},d=e("K+nK"),r.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return r.t0=d,r.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return r.t1=r.sent,o=(0,r.t0)(r.t1),r.next=12,Promise.all([e.e(3),e.e(63)]).then(e.t.bind(null,"cUip",7));case 12:return r.t2=d,r.next=15,Promise.all([e.e(0),e.e(13),e.e(61),e.e(69)]).then(e.t.bind(null,"iJl9",7));case 15:return r.t3=r.sent,v=(0,r.t2)(r.t3),r.t4=d,r.next=20,e.e(72).then(e.bind(null,"0Owb"));case 20:return r.t5=r.sent,b=(0,r.t4)(r.t5),r.t6=T,r.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return r.t7=r.sent,O=(0,r.t6)(r.t7),r.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 29:return a=r.sent,r.t8=T,r.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 33:return r.t9=r.sent,l=(0,r.t8)(r.t9),A={type:"object",properties:{string:{title:"\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6",type:"string",widget:"site"},select:{title:"\u5355\u9009",type:"number",enum:[1,2,3],enumNames:["\u9009\u98791","\u9009\u98792","\u9009\u98793"]}}},D=function(p){return console.log("widget props:",p),O.default.createElement(v.default,(0,b.default)({addonBefore:"http://",addonAfter:".com"},p))},u=function(){var p=(0,l.useForm)(),K=function(){};return O.default.createElement("div",null,O.default.createElement(l.default,{readOnly:!0,form:p,schema:A,widgets:{site:D},onFinish:function(U){return alert(JSON.stringify(U,null,2))}}),O.default.createElement(o.default,{type:"primary",onClick:p.submit},"\u63D0\u4EA4"))},F=u,r.abrupt("return",F);case 40:case"end":return r.stop()}},j)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},identifier:"widget-demo"}},"schema-demo":{component:Object(W.dynamic)({loader:function(){var P=Object(z.a)(h.a.mark(function j(){var d,o,v,b,O;return h.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return l.t3=l.sent,v=(0,l.t2)(l.t3),l.next=13,e.e(17).then(e.bind(null,"8iYR"));case 13:return b=l.sent,O=function(){return o.default.createElement(v.default,{schema:b.basic})},l.abrupt("return",O);case 16:case"end":return l.stop()}},j)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { basic } from '../json/schema';

export default () => <FR schema={basic} />;`},"demo/FR.jsx":{import:"../demo/FR",content:Fe},"json/schema.js":{import:"../json/schema",content:ve}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo"}},"schema-demo-1":{component:Object(W.dynamic)({loader:function(){var P=Object(z.a)(h.a.mark(function j(){var d,o,v,b,O;return h.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return d=e("K+nK"),l.t0=d,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=d,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return l.t3=l.sent,v=(0,l.t2)(l.t3),l.next=13,e.e(17).then(e.bind(null,"8iYR"));case 13:return b=l.sent,O=function(){return o.default.createElement(v.default,{schema:b.titleTrick})},l.abrupt("return",O);case 16:case"end":return l.stop()}},j)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { titleTrick } from '../json/schema';

export default () => <FR schema={titleTrick} />;`},"demo/FR.jsx":{import:"../demo/FR",content:Fe},"json/schema.js":{import:"../json/schema",content:ve}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo-1"}},"docs-playground":{component:Object(W.dynamic)({loader:function(){var P=Object(z.a)(h.a.mark(function j(){return h.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(22)]).then(e.bind(null,"BASV"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},j)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:xn},"main.js":{import:"./main",content:Pe},"json/simplest.json":{import:"./json/simplest.json",content:yn},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:ln},"monaco/index.js":{import:"./monaco",content:Rn},"suggestionsMap.js":{import:"./suggestionsMap",content:pn},"index.css":{import:"./index.css",content:Ye}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:"^17.x"},"react-dom":{version:">=16.9.0"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.4.5-beta.0"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-monaco-editor":{version:"0.43.0"},"@types/react":{version:"^17.x"}},identifier:"docs-playground"}},"table-render-advanced":{component:Object(W.dynamic)({loader:function(){var P=Object(z.a)(h.a.mark(function j(){return h.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(22)]).then(e.bind(null,"7ZP+"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},j)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{tsx:Wn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.0"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"1.x"}},transform:!0,defaultShowCode:!0,identifier:"table-render-advanced"}},"table-render-demo":{component:Object(W.dynamic)({loader:function(){var P=Object(z.a)(h.a.mark(function j(){var d,o,v,b,O,a,l,s,T;return h.a.wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return d=e("K+nK"),D.t0=d,D.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return D.t1=D.sent,o=(0,D.t0)(D.t1),D.next=8,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(59)]).then(e.bind(null,"P2DI"));case 8:for(v=D.sent,b=[],O=0;O<6;O++)b.push({id:O.toString(),title:"\u6807\u9898".concat(O+1),created_at:new Date().getTime()});return a={type:"object",properties:{string:{title:"\u6807\u9898",type:"string","ui:width":"30%"},created_at:{title:"\u521B\u5EFA\u65F6\u95F4",type:"string",format:"date","ui:width":"30%"}}},l=[{title:"\u6807\u9898",dataIndex:"title"},{title:"\u521B\u5EFA\u65F6\u95F4",key:"since",dataIndex:"created_at",valueType:"date"},{title:"\u64CD\u4F5C",render:function(F,f){return o.default.createElement("a",{onClick:function(){return alert(F.title)}},"\u7F16\u8F91")}}],s=function(){var F=function(){return{rows:b,total:b.length}};return o.default.createElement(v.TableProvider,null,o.default.createElement(v.Search,{schema:a,api:F}),o.default.createElement(v.Table,{headerTitle:"\u6700\u7B80\u8868\u683C",columns:l,rowKey:"id"}))},T=s,D.abrupt("return",T);case 16:case"end":return D.stop()}},j)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Wrapper;`}},dependencies:{react:{version:">=16.8.0"},"table-render":{version:"1.1.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.x"}},transform:!0,defaultShowCode:!0,identifier:"table-render-demo"}},"generator-demo":{component:Object(W.dynamic)({loader:function(){var P=Object(z.a)(h.a.mark(function j(){var d,o,v,b,O,a;return h.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(60)]).then(e.bind(null,"nYSz"));case 9:return s.t3=s.sent,v=(0,s.t2)(s.t3),b={type:"object",properties:{inputName:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string"}}},O=function(){return o.default.createElement("div",{style:{height:"80vh"}},o.default.createElement(v.default,{defaultValue:b}))},a=O,s.abrupt("return",a);case 15:case"end":return s.stop()}},j)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"generator-demo"}},"generator-modal":{component:Object(W.dynamic)({loader:function(){var P=Object(z.a)(h.a.mark(function j(){return h.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(22)]).then(e.bind(null,"PPgD"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},j)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:Mn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.4.0"},"react-dom":{version:">=16.9.0"}},identifier:"generator-modal"}},"generator-settings":{component:Object(W.dynamic)({loader:function(){var P=Object(z.a)(h.a.mark(function j(){return h.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(22)]).then(e.bind(null,"M63W"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},j)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:jn}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-settings"}},"generator-layout":{component:Object(W.dynamic)({loader:function(){var P=Object(z.a)(h.a.mark(function j(){return h.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(22)]).then(e.bind(null,"SOdT"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},j)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:We},"index.less":{import:"./index.less",content:zn}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-layout"}},"generator-transformer":{component:Object(W.dynamic)({loader:function(){var P=Object(z.a)(h.a.mark(function j(){return h.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(22)]).then(e.bind(null,"jktF"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},j)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:Ln}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.4.0"},"react-dom":{version:">=16.9.0"}},identifier:"generator-transformer"}},"generator-playground":{component:Object(W.dynamic)({loader:function(){var P=Object(z.a)(h.a.mark(function j(){return h.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(22)]).then(e.bind(null,"TYW4"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},j)}));function I(){return P.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:_n},"index.less":{import:"./index.less",content:zn}},dependencies:{react:{version:">=16.8.0"},umi:{version:"3.4.20"},"fr-generator":{version:"2.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-playground"}}}},Jn06:function(Kn,gn,e){"use strict";e.r(gn);var z=e("q1tI"),n=e.n(z),h=e("dEAq"),W=e.n(h),oe=e("0zqC"),L=e("ZpkN"),we=e("JjdP"),Fe=n.a.memo(we.default["generator-demo"].component),ve=n.a.memo(we.default["generator-modal"].component),xn=n.a.memo(we.default["generator-settings"].component),Pe=n.a.memo(we.default["generator-layout"].component),yn=n.a.memo(we.default["generator-transformer"].component);gn.default=ln=>(n.a.useEffect(()=>{ln!=null&&ln.location.hash&&h.AnchorLink.scrollToAnchor(decodeURIComponent(ln.location.hash.slice(1)))},[]),n.a.createElement(n.a.Fragment,null,n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"markdown"},n.a.createElement("h2",{id:"\u5982\u4F55\u4F7F\u7528"},n.a.createElement(h.AnchorLink,{to:"#\u5982\u4F55\u4F7F\u7528","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u5982\u4F55\u4F7F\u7528"),n.a.createElement("h3",{id:"\u5B89\u88C5"},n.a.createElement(h.AnchorLink,{to:"#\u5B89\u88C5","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u5B89\u88C5"),n.a.createElement(L.a,{code:"npm i fr-generator",lang:"bash"}),n.a.createElement("h3",{id:"\u4EE3\u7801\u6F14\u793A"},n.a.createElement(h.AnchorLink,{to:"#\u4EE3\u7801\u6F14\u793A","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u4EE3\u7801\u6F14\u793A")),n.a.createElement(oe.default,we.default["generator-demo"].previewerProps,n.a.createElement(Fe,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h2",{id:"api"},n.a.createElement(h.AnchorLink,{to:"#api","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"API"),n.a.createElement("h3",{id:"props"},n.a.createElement(h.AnchorLink,{to:"#props","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Props"),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u53C2\u6570"),n.a.createElement("th",null,"\u8BF4\u660E"),n.a.createElement("th",null,"\u7C7B\u578B"),n.a.createElement("th",null,"\u9ED8\u8BA4\u503C"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"hideId"),n.a.createElement("td",null,"\u9690\u85CF\u7EC4\u4EF6 ID"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"false"))),n.a.createElement("tr",null,n.a.createElement("td",null,"defaultValue"),n.a.createElement("td",null,"\u9ED8\u8BA4\u8868\u5355 schema"),n.a.createElement("td",null,n.a.createElement("code",null,"object")),n.a.createElement("td",null,n.a.createElement("code",null,"DEFAULT_SCHEMA"))),n.a.createElement("tr",null,n.a.createElement("td",null,"transformer"),n.a.createElement("td",null,"schema \u53CC\u5411\u8F6C\u6362"),n.a.createElement("td",null,n.a.createElement("code",null,"object")),n.a.createElement("td",null,n.a.createElement("code",null,"{"," fromFormRender, toFormRender ","}"))),n.a.createElement("tr",null,n.a.createElement("td",null,"extraButtons"),n.a.createElement("td",null,"\u64CD\u4F5C\u680F\u6309\u94AE"),n.a.createElement("td",null,n.a.createElement("code",null,"array")),n.a.createElement("td",null,n.a.createElement("code",null,"extraButton[]"))),n.a.createElement("tr",null,n.a.createElement("td",null,"controlButtons"),n.a.createElement("td",null,"\u9009\u4E2D\u9879\u64CD\u4F5C\u6309\u94AE"),n.a.createElement("td",null,n.a.createElement("code",null,"array")),n.a.createElement("td",null,n.a.createElement("code",null,"controlButton[]"))),n.a.createElement("tr",null,n.a.createElement("td",null,"settings"),n.a.createElement("td",null,"\u5DE6\u53F3\u4FA7\u680F\u914D\u7F6E"),n.a.createElement("td",null,n.a.createElement("code",null,"array")),n.a.createElement("td",null,n.a.createElement(h.Link,{to:"https://github.com/alibaba/form-render/blob/master/tools/schema-generator/src/Settings/index.js#L651"},n.a.createElement("code",null,"defaultSettings")))),n.a.createElement("tr",null,n.a.createElement("td",null,"commonSettings"),n.a.createElement("td",null,"\u901A\u7528\u914D\u7F6E"),n.a.createElement("td",null,n.a.createElement("code",null,"object")),n.a.createElement("td",null,n.a.createElement(h.Link,{to:"https://github.com/alibaba/form-render/blob/master/tools/schema-generator/src/Settings/index.js#L2"},n.a.createElement("code",null,"defaultCommonSettings")))),n.a.createElement("tr",null,n.a.createElement("td",null,"globalSettings"),n.a.createElement("td",null,"\u5168\u5C40\u914D\u7F6E"),n.a.createElement("td",null,n.a.createElement("code",null,"object")),n.a.createElement("td",null,n.a.createElement(h.Link,{to:"https://github.com/alibaba/form-render/blob/master/tools/schema-generator/src/Settings/index.js#L672"},n.a.createElement("code",null,"defaultGlobalSettings")))),n.a.createElement("tr",null,n.a.createElement("td",null,"widgets"),n.a.createElement("td",null,"\u81EA\u5B9A\u4E49\u7EC4\u4EF6"),n.a.createElement("td",null,n.a.createElement("code",null,"object")),n.a.createElement("td",null,n.a.createElement("code",null,"{","}"))),n.a.createElement("tr",null,n.a.createElement("td",null,"mapping"),n.a.createElement("td",null,"\u7EC4\u4EF6\u548C schema \u7684\u6620\u5C04\u89C4\u5219"),n.a.createElement("td",null,n.a.createElement("code",null,"object")),n.a.createElement("td",null,n.a.createElement("code",null,"{","}"))))),n.a.createElement("h4",{id:"extrabutton"},n.a.createElement(h.AnchorLink,{to:"#extrabutton","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"extraButton"),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u5C5E\u6027"),n.a.createElement("th",null,"\u8BF4\u660E"),n.a.createElement("th",null,"\u7C7B\u578B"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"text"),n.a.createElement("td",null,"\u6309\u94AE\u6587\u6848"),n.a.createElement("td",null,n.a.createElement("code",null,"string"))),n.a.createElement("tr",null,n.a.createElement("td",null,"onClick"),n.a.createElement("td",null,"\u6309\u94AE\u70B9\u51FB\u56DE\u8C03\u51FD\u6570"),n.a.createElement("td",null,n.a.createElement("code",null,"(event) => void"))))),n.a.createElement("p",null,"\u6570\u7EC4\u524D\u56DB\u9879\u4E3A\u5E03\u5C14\u503C\uFF0C\u51B3\u5B9A\u9ED8\u8BA4\u6309\u94AE\u662F\u5426\u5C55\u793A\u3002 \u652F\u6301 antd \u6309\u94AE\u7EC4\u4EF6\u7684\u6240\u6709\u5176\u4ED6\u5C5E\u6027 ",n.a.createElement(h.Link,{to:"https://ant.design/components/button-cn/#API"},"https://ant.design/components/button-cn/#API")),n.a.createElement("h4",{id:"controlbutton"},n.a.createElement(h.AnchorLink,{to:"#controlbutton","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"controlButton"),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u5C5E\u6027"),n.a.createElement("th",null,"\u8BF4\u660E"),n.a.createElement("th",null,"\u7C7B\u578B"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"text"),n.a.createElement("td",null,"\u6309\u94AE\u6587\u6848"),n.a.createElement("td",null,n.a.createElement("code",null,"string"))),n.a.createElement("tr",null,n.a.createElement("td",null,"onClick"),n.a.createElement("td",null,"\u6309\u94AE\u70B9\u51FB\u56DE\u8C03\u51FD\u6570"),n.a.createElement("td",null,n.a.createElement("code",null,"(event, schema) => void"))))),n.a.createElement("p",null,"\u6570\u7EC4\u524D\u4E24\u9879\u4E3A\u5E03\u5C14\u503C\u6216\u51FD\u6570\uFF0C\u51B3\u5B9A\u9ED8\u8BA4\u6309\u94AE\u662F\u5426\u5C55\u793A\uFF0C\u51FD\u6570\u5165\u53C2\u4E3A\u9009\u4E2D\u9879 schema\u3002"),n.a.createElement("h3",{id:"events"},n.a.createElement(h.AnchorLink,{to:"#events","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Events"),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u4E8B\u4EF6\u540D"),n.a.createElement("th",null,"\u8BF4\u660E"),n.a.createElement("th",null,"\u56DE\u8C03\u53C2\u6570"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"onChange"),n.a.createElement("td",null,"\u8868\u5355 data \u53D8\u5316\u56DE\u8C03"),n.a.createElement("td",null,"\u8868\u5355\u7684 data")),n.a.createElement("tr",null,n.a.createElement("td",null,"onSchemaChange"),n.a.createElement("td",null,"\u8868\u5355 schema \u53D8\u5316\u56DE\u8C03"),n.a.createElement("td",null,"\u5BFC\u51FA\u7684 schema")))),n.a.createElement("h3",{id:"methods"},n.a.createElement(h.AnchorLink,{to:"#methods","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Methods"),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u4E8B\u4EF6\u540D"),n.a.createElement("th",null,"\u8BF4\u660E"),n.a.createElement("th",null,"\u5165\u53C2"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"getValue"),n.a.createElement("td",null,"\u83B7\u53D6\u5BFC\u51FA\u7684 schema \u503C"),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"setValue"),n.a.createElement("td",null,"\u4ECE\u5916\u90E8\u5F3A\u5236\u4FEE\u6539 schema"),n.a.createElement("td",null,n.a.createElement("code",null,"schema"))),n.a.createElement("tr",null,n.a.createElement("td",null,"copyValue"),n.a.createElement("td",null,"\u5C06\u73B0\u6709 schema \u62F7\u8D1D\u5230\u526A\u8D34\u677F"),n.a.createElement("td",null,"-")))),n.a.createElement("h2",{id:"\u6848\u4F8B\u6F14\u793A"},n.a.createElement(h.AnchorLink,{to:"#\u6848\u4F8B\u6F14\u793A","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u6848\u4F8B\u6F14\u793A"),n.a.createElement("h3",{id:"\u6D6E\u7A97\u63A5\u5165"},n.a.createElement(h.AnchorLink,{to:"#\u6D6E\u7A97\u63A5\u5165","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u6D6E\u7A97\u63A5\u5165"),n.a.createElement("p",null,"\u7528\u4E8E schema \u7684\u53EF\u89C6\u5316\u4FEE\u6539")),n.a.createElement(oe.default,we.default["generator-modal"].previewerProps,n.a.createElement(ve,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h3",{id:"\u4FA7\u680F\u914D\u7F6E"},n.a.createElement(h.AnchorLink,{to:"#\u4FA7\u680F\u914D\u7F6E","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u4FA7\u680F\u914D\u7F6E"),n.a.createElement("p",null,"\u4F7F\u7528 settings/commonSettings \u81EA\u7531\u914D\u7F6E\u5DE6\u53F3\u4FA7\u680F\u5185\u5BB9\uFF0C\u5E76\u4F7F\u7528 widgets \u6CE8\u5165\u548C\u4F7F\u7528\u81EA\u5B9A\u4E49\u7EC4\u4EF6"),n.a.createElement("p",null,"\u201C\u8BA1\u6570\u5668\u201D\u662F\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u3002")),n.a.createElement(oe.default,we.default["generator-settings"].previewerProps,n.a.createElement(xn,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h3",{id:"\u81EA\u5B9A\u4E49\u5E03\u5C40"},n.a.createElement(h.AnchorLink,{to:"#\u81EA\u5B9A\u4E49\u5E03\u5C40","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u81EA\u5B9A\u4E49\u5E03\u5C40")),n.a.createElement(oe.default,we.default["generator-layout"].previewerProps,n.a.createElement(Pe,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h3",{id:"schema-\u4E92\u8F6C"},n.a.createElement(h.AnchorLink,{to:"#schema-\u4E92\u8F6C","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Schema \u4E92\u8F6C"),n.a.createElement("p",null,"\u4F7F\u7528 ",n.a.createElement("code",null,"transformer")," \u8FD9\u4E2A props\uFF0C\u8FDB\u884C schema \u7684\u4E92\u8F6C")),n.a.createElement(oe.default,we.default["generator-transformer"].previewerProps,n.a.createElement(yn,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h2",{id:"\u5E38\u89C1\u95EE\u9898"},n.a.createElement(h.AnchorLink,{to:"#\u5E38\u89C1\u95EE\u9898","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u5E38\u89C1\u95EE\u9898"),n.a.createElement("p",null,n.a.createElement("strong",null,"1\u3001\u5982\u4F55\u63A7\u5236\u7F16\u8F91\u5668\u9AD8\u5EA6")),n.a.createElement("p",null,"\u7ED9\u7EC4\u4EF6\u5916\u5C42\u8981\u5305\u88F9\u7684 div \u8BBE\u7F6E\u9AD8\u5EA6\u5373\u53EF\uFF0C\u5426\u5219\u4E3A\u9ED8\u8BA4\u503C min-height: 30vh")))))},TIsu:function(Kn,gn,e){},Zs1V:function(Kn){Kn.exports=JSON.parse("{}")},p8sG:function(Kn,gn,e){"use strict";Kn.exports=e("80pN")}}]);
