(window.webpackJsonp=window.webpackJsonp||[]).push([[30,10],{"0zqC":function(Nn,hn,e){"use strict";e.r(hn);var x=e("tJVT"),n=e("q1tI"),h=e.n(n),W=e("wx14"),me=e("rePB"),L=e("ODXe"),tn=e("U8pU"),Ne=e("Ff2n"),de=e("VTBJ"),rt=e("TSYQ"),Ie=e.n(rt),Bn=e("Zm9Q"),Tn=e("5Z9U"),On=e("6cGi"),fn=e("KQm4"),Qe=e("wgJM"),Wn=e("t23M");function Kn(t){var i=Object(n.useRef)(),c=Object(n.useRef)(!1);function E(){for(var C=arguments.length,y=new Array(C),R=0;R<C;R++)y[R]=arguments[R];c.current||(Qe.a.cancel(i.current),i.current=Object(Qe.a)(function(){t.apply(void 0,y)}))}return Object(n.useEffect)(function(){return function(){c.current=!0,Qe.a.cancel(i.current)}},[]),E}function Rn(t){var i=Object(n.useRef)([]),c=Object(n.useState)({}),E=Object(L.a)(c,2),C=E[1],y=Object(n.useRef)(typeof t=="function"?t():t),R=Kn(function(){var w=y.current;i.current.forEach(function($){w=$(w)}),i.current=[],y.current=w,C({})});function S(w){i.current.push(w),R()}return[y.current,S]}var we=e("4IlW");function zn(t,i){var c,E=t.prefixCls,C=t.id,y=t.active,R=t.rtl,S=t.tab,w=S.key,$=S.tab,V=S.disabled,J=S.closeIcon,G=t.tabBarGutter,se=t.tabPosition,X=t.closable,Q=t.renderWrapper,oe=t.removeAriaLabel,z=t.editable,q=t.onClick,re=t.onRemove,Y=t.onFocus,le="".concat(E,"-tab");n.useEffect(function(){return re},[]);var k={};se==="top"||se==="bottom"?k[R?"marginLeft":"marginRight"]=G:k.marginBottom=G;var be=z&&X!==!1&&!V;function ee(ie){V||q(ie)}function ce(ie){ie.preventDefault(),ie.stopPropagation(),z.onEdit("remove",{key:w,event:ie})}var fe=n.createElement("div",{key:w,ref:i,className:Ie()(le,(c={},Object(me.a)(c,"".concat(le,"-with-remove"),be),Object(me.a)(c,"".concat(le,"-active"),y),Object(me.a)(c,"".concat(le,"-disabled"),V),c)),style:k,onClick:ee},n.createElement("div",{role:"tab","aria-selected":y,id:C&&"".concat(C,"-tab-").concat(w),className:"".concat(le,"-btn"),"aria-controls":C&&"".concat(C,"-panel-").concat(w),"aria-disabled":V,tabIndex:V?null:0,onClick:function(H){H.stopPropagation(),ee(H)},onKeyDown:function(H){[we.a.SPACE,we.a.ENTER].includes(H.which)&&(H.preventDefault(),ee(H))},onFocus:Y},$),be&&n.createElement("button",{type:"button","aria-label":oe||"remove",tabIndex:0,className:"".concat(le,"-remove"),onClick:function(H){H.stopPropagation(),ce(H)}},J||z.removeIcon||"\xD7"));return Q&&(fe=Q(fe)),fe}var Ln=n.forwardRef(zn),qn={width:0,height:0,left:0,top:0};function ct(t,i,c){return Object(n.useMemo)(function(){for(var E,C=new Map,y=i.get((E=t[0])===null||E===void 0?void 0:E.key)||qn,R=y.left+y.width,S=0;S<t.length;S+=1){var w=t[S].key,$=i.get(w);if(!$){var V;$=i.get((V=t[S-1])===null||V===void 0?void 0:V.key)||qn}var J=C.get(w)||Object(de.a)({},$);J.right=R-J.left-J.width,C.set(w,J)}return C},[t.map(function(E){return E.key}).join("_"),i,c])}var P={width:0,height:0,left:0,top:0,right:0};function D(t,i,c,E,C){var y=C.tabs,R=C.tabPosition,S=C.rtl,w,$,V;["top","bottom"].includes(R)?(w="width",$=S?"right":"left",V=Math.abs(i.left)):(w="height",$="top",V=-i.top);var J=i[w],G=c[w],se=E[w],X=J;return G+se>J&&(X=J-se),Object(n.useMemo)(function(){if(!y.length)return[0,0];for(var Q=y.length,oe=Q,z=0;z<Q;z+=1){var q=t.get(y[z].key)||P;if(q[$]+q[w]>V+X){oe=z-1;break}}for(var re=0,Y=Q-1;Y>=0;Y-=1){var le=t.get(y[Y].key)||P;if(le[$]<V){re=Y+1;break}}return[re,oe]},[t,V,X,R,y.map(function(Q){return Q.key}).join("_"),S])}var F=e("Gytx"),d=e.n(F),l=e("Kwbf");function v(t,i){var c=t.prefixCls,E=t.invalidate,C=t.item,y=t.renderItem,R=t.responsive,S=t.registerSize,w=t.itemKey,$=t.className,V=t.style,J=t.children,G=t.display,se=t.order,X=t.component,Q=X===void 0?"div":X,oe=Object(Ne.a)(t,["prefixCls","invalidate","item","renderItem","responsive","registerSize","itemKey","className","style","children","display","order","component"]),z=R&&!G;function q(be){S(w,be)}n.useEffect(function(){return function(){q(null)}},[]);var re=y&&C!==void 0?y(C):J,Y;E||(Y={opacity:z?0:1,height:z?0:void 0,overflowY:z?"hidden":void 0,order:R?se:void 0,pointerEvents:z?"none":void 0});var le={};z&&(le["aria-hidden"]=!0);var k=n.createElement(Q,Object(W.a)({className:Ie()(!E&&c,$),style:Object(de.a)(Object(de.a)({},Y),V)},le,oe,{ref:i}),re);return R&&(k=n.createElement(Wn.default,{onResize:function(ee){var ce=ee.offsetWidth;q(ce)}},k)),k}var b=n.forwardRef(v);b.displayName="Item";var O=b;function a(){var t=Object(n.useState)({}),i=Object(L.a)(t,2),c=i[1],E=Object(n.useRef)([]),C=Object(n.useRef)(!1),y=0,R=0;Object(n.useEffect)(function(){return function(){C.current=!0}},[]);function S(w){var $=y;y+=1,E.current.length<$+1&&(E.current[$]=w);var V=E.current[$];function J(G){E.current[$]=typeof G=="function"?G(E.current[$]):G,Qe.a.cancel(R),R=Object(Qe.a)(function(){C.current||c({})})}return[V,J]}return S}var o=function(i,c){var E=n.useContext(A);if(!E){var C=i.component,y=C===void 0?"div":C,R=Object(Ne.a)(i,["component"]);return n.createElement(y,Object(W.a)({},R,{ref:c}))}var S=E.className,w=Object(Ne.a)(E,["className"]),$=i.className,V=Object(Ne.a)(i,["className"]);return n.createElement(A.Provider,{value:null},n.createElement(O,Object(W.a)({ref:c,className:Ie()(S,$)},w,V)))},s=n.forwardRef(o);s.displayName="RawItem";var B=s,A=n.createContext(null),j="responsive",u="invalidate";function N(t){return"+ ".concat(t.length," ...")}function f(t,i){var c=t.prefixCls,E=c===void 0?"rc-overflow":c,C=t.data,y=C===void 0?[]:C,R=t.renderItem,S=t.renderRawItem,w=t.itemKey,$=t.itemWidth,V=$===void 0?10:$,J=t.ssr,G=t.style,se=t.className,X=t.maxCount,Q=t.renderRest,oe=t.renderRawRest,z=t.suffix,q=t.component,re=q===void 0?"div":q,Y=t.itemComponent,le=t.onVisibleChange,k=Object(Ne.a)(t,["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"]),be=a(),ee=J==="full",ce=be(null),fe=Object(L.a)(ce,2),ie=fe[0],H=fe[1],ue=ie||0,ge=be(new Map),he=Object(L.a)(ge,2),Re=he[0],We=he[1],Ee=be(0),Oe=Object(L.a)(Ee,2),Ke=Oe[0],Be=Oe[1],De=be(0),Pe=Object(L.a)(De,2),$e=Pe[0],qe=Pe[1],Ve=be(0),ze=Object(L.a)(Ve,2),Xe=ze[0],Le=ze[1],Sn=Object(n.useState)(null),an=Object(L.a)(Sn,2),Ye=an[0],on=an[1],yn=Object(n.useState)(null),bn=Object(L.a)(yn,2),Ae=bn[0],Je=bn[1],_e=n.useMemo(function(){return Ae===null&&ee?Number.MAX_SAFE_INTEGER:Ae||0},[Ae,ie]),Ze=Object(n.useState)(!1),Mn=Object(L.a)(Ze,2),xn=Mn[0],wn=Mn[1],rn="".concat(E,"-item"),Fn=Math.max(Ke,$e),un=y.length&&X===j,Pn=X===u,en=un||typeof X=="number"&&y.length>X,sn=Object(n.useMemo)(function(){var ve=y;return un?ie===null&&ee?ve=y:ve=y.slice(0,Math.min(y.length,ue/V)):typeof X=="number"&&(ve=y.slice(0,X)),ve},[y,V,ie,X,un]),jn=Object(n.useMemo)(function(){return un?y.slice(_e+1):y.slice(sn.length)},[y,sn,un,_e]),cn=Object(n.useCallback)(function(ve,Se){var Me;return typeof w=="function"?w(ve):(Me=w&&(ve==null?void 0:ve[w]))!==null&&Me!==void 0?Me:Se},[w]),ke=Object(n.useCallback)(R||function(ve){return ve},[R]);function He(ve,Se){Je(ve),Se||(wn(ve<y.length-1),le==null||le(ve))}function Gn(ve,Se){H(Se.clientWidth)}function Jn(ve,Se){We(function(Me){var nn=new Map(Me);return Se===null?nn.delete(ve):nn.set(ve,Se),nn})}function nt(ve,Se){qe(Se),Be($e)}function En(ve,Se){Le(Se)}function vn(ve){return Re.get(cn(sn[ve],ve))}n.useLayoutEffect(function(){if(ue&&Fn&&sn){var ve=Xe,Se=sn.length,Me=Se-1;if(!Se){He(0),on(null);return}for(var nn=0;nn<Se;nn+=1){var Yn=vn(nn);if(Yn===void 0){He(nn-1,!0);break}if(ve+=Yn,nn===Me-1&&ve+vn(Me)<=ue){He(Me),on(null);break}else if(ve+Fn>ue){He(nn-1),on(ve-Yn-Xe+$e);break}else if(nn===Me){He(Me),on(ve-Xe);break}}z&&vn(0)+Xe>ue&&on(null)}},[ue,Re,$e,Xe,cn,sn]);var Hn=xn&&!!jn.length,Cn={};Ye!==null&&un&&(Cn={position:"absolute",left:Ye,top:0});var mn={prefixCls:rn,responsive:un,component:Y,invalidate:Pn},Xn=S?function(ve,Se){var Me=cn(ve,Se);return n.createElement(A.Provider,{key:Me,value:Object(de.a)(Object(de.a)({},mn),{},{order:Se,item:ve,itemKey:Me,registerSize:Jn,display:Se<=_e})},S(ve,Se))}:function(ve,Se){var Me=cn(ve,Se);return n.createElement(O,Object(W.a)({},mn,{order:Se,key:Me,item:ve,renderItem:ke,itemKey:Me,registerSize:Jn,display:Se<=_e}))},Dn,Qn={order:Hn?_e:Number.MAX_SAFE_INTEGER,className:"".concat(rn,"-rest"),registerSize:nt,display:Hn};if(oe)oe&&(Dn=n.createElement(A.Provider,{value:Object(de.a)(Object(de.a)({},mn),Qn)},oe(jn)));else{var dn=Q||N;Dn=n.createElement(O,Object(W.a)({},mn,Qn),typeof dn=="function"?dn(jn):dn)}var In=n.createElement(re,Object(W.a)({className:Ie()(!Pn&&E,se),style:G,ref:i},k),sn.map(Xn),en?Dn:null,z&&n.createElement(O,Object(W.a)({},mn,{order:_e,className:"".concat(rn,"-suffix"),registerSize:En,display:!0,style:Cn}),z));return un&&(In=n.createElement(Wn.default,{onResize:Gn},In)),In}var r=n.forwardRef(f);r.displayName="Overflow",r.Item=B,r.RESPONSIVE=j,r.INVALIDATE=u;var g=r,p=g,T=e("1OyB"),M=e("vuIU"),U=e("Ji7U"),ne=e("LK+K"),ae=e("bT9E"),ye=e("YrtM"),je=n.createContext(null);function Te(t,i){var c=Object(de.a)({},t);return Object.keys(i).forEach(function(E){var C=i[E];C!==void 0&&(c[E]=C)}),c}function gn(t){var i=t.children,c=t.locked,E=Object(Ne.a)(t,["children","locked"]),C=n.useContext(je),y=Object(ye.a)(function(){return Te(C,E)},[C,E],function(R,S){return!c&&(R[0]!==S[0]||!d()(R[1],S[1]))});return n.createElement(je.Provider,{value:y},i)}function $n(t,i,c,E){var C=n.useContext(je),y=C.activeKey,R=C.onActive,S=C.onInactive,w={active:y===t};return i||(w.onMouseEnter=function($){c==null||c({key:t,domEvent:$}),R(t)},w.onMouseLeave=function($){E==null||E({key:t,domEvent:$}),S(t)}),w}function _n(t){var i=t.item,c=Object(Ne.a)(t,["item"]);return Object.defineProperty(c,"item",{get:function(){return Object(l.a)(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),i}}),c}function m(t){var i=t.icon,c=t.props,E=t.children,C;return typeof i=="function"?C=n.createElement(i,Object(de.a)({},c)):C=i,C||E||null}function I(t){var i=n.useContext(je),c=i.mode,E=i.rtl,C=i.inlineIndent;if(c!=="inline")return null;var y=t;return E?{paddingRight:y*C}:{paddingLeft:y*C}}var K=[],pe=n.createContext(null);function _(){return n.useContext(pe)}var Fe=n.createContext(K);function Ue(t){var i=n.useContext(Fe);return n.useMemo(function(){return t!==void 0?[].concat(Object(fn.a)(i),[t]):i},[i,t])}var Ge=n.createContext(null),zt=n.createContext(null);function xt(t,i){return t===void 0?null:"".concat(t,"-").concat(i)}function Gt(t){var i=n.useContext(zt);return xt(i,t)}var ba=function(t){Object(U.a)(c,t);var i=Object(ne.a)(c);function c(){return Object(T.a)(this,c),i.apply(this,arguments)}return Object(M.a)(c,[{key:"render",value:function(){var C=this.props,y=C.title,R=C.attribute,S=C.elementRef,w=Object(Ne.a)(C,["title","attribute","elementRef"]),$=Object(ae.a)(w,["eventKey"]);return Object(l.a)(!R,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),n.createElement(p.Item,Object(W.a)({},R,{title:typeof y=="string"?y:void 0},$,{ref:S}))}}]),c}(n.Component),Ea=function(i){var c,E=i.style,C=i.className,y=i.eventKey,R=i.disabled,S=i.itemIcon,w=i.children,$=i.role,V=i.onMouseEnter,J=i.onMouseLeave,G=i.onClick,se=i.onKeyDown,X=i.onFocus,Q=Object(Ne.a)(i,["style","className","eventKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"]),oe=Gt(y),z=n.useContext(je),q=z.prefixCls,re=z.onItemClick,Y=z.disabled,le=z.overflowDisabled,k=z.itemIcon,be=z.selectedKeys,ee=z.onActive,ce="".concat(q,"-item"),fe=n.useRef(),ie=n.useRef(),H=Y||R,ue=Ue(y),ge=function(Ve){return{key:y,keyPath:ue,item:fe.current,domEvent:Ve}},he=S||k,Re=$n(y,H,V,J),We=Re.active,Ee=Object(Ne.a)(Re,["active"]),Oe=be.includes(y),Ke=I(ue.length),Be=function(Ve){if(!H){var ze=ge(Ve);G==null||G(_n(ze)),re(ze)}},De=function(Ve){if(se==null||se(Ve),Ve.which===we.a.ENTER){var ze=ge(Ve);G==null||G(_n(ze)),re(ze)}},Pe=function(Ve){ee(y),X==null||X(Ve)},$e={};return i.role==="option"&&($e["aria-selected"]=Oe),n.createElement(ba,Object(W.a)({ref:fe,elementRef:ie,role:$===null?"none":$||"menuitem",tabIndex:R?null:-1,"data-menu-id":le&&oe?null:oe},Q,Ee,$e,{component:"li","aria-disabled":R,style:Object(de.a)(Object(de.a)({},Ke),E),className:Ie()(ce,(c={},Object(me.a)(c,"".concat(ce,"-active"),We),Object(me.a)(c,"".concat(ce,"-selected"),Oe),Object(me.a)(c,"".concat(ce,"-disabled"),H),c),C),onClick:Be,onKeyDown:De,onFocus:Pe}),w,n.createElement(m,{props:Object(de.a)(Object(de.a)({},i),{},{isSelected:Oe}),icon:he}))};function Ca(t){var i=t.eventKey,c=_(),E=Ue(i);return n.useEffect(function(){if(c)return c.registerPath(i,E),function(){c.unregisterPath(i,E)}},[E]),c?null:n.createElement(Ea,t)}var Pt=Ca;function jt(t,i){return Object(Bn.a)(t).map(function(c,E){if(n.isValidElement(c)){var C=c.key;return C==null&&(C="tmp_key-".concat([].concat(Object(fn.a)(i),[E]).join("-"))),n.cloneElement(c,{key:C,eventKey:C})}return c})}function et(t){var i=n.useRef(t);i.current=t;var c=n.useCallback(function(){for(var E,C=arguments.length,y=new Array(C),R=0;R<C;R++)y[R]=arguments[R];return(E=i.current)===null||E===void 0?void 0:E.call.apply(E,[i].concat(y))},[]);return t?c:void 0}var Oa=function(i,c){var E=i.className,C=i.children,y=Object(Ne.a)(i,["className","children"]),R=n.useContext(je),S=R.prefixCls,w=R.mode;return n.createElement("ul",Object(W.a)({className:Ie()(S,"".concat(S,"-sub"),"".concat(S,"-").concat(w==="inline"?"inline":"vertical"),E)},y,{"data-menu-list":!0,ref:c}),C)},Jt=n.forwardRef(Oa);Jt.displayName="SubMenuList";var Ht=Jt,Ra=e("uciX"),Vn={adjustX:1,adjustY:1},Xt={topLeft:{points:["bl","tl"],overflow:Vn,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Vn,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:Vn,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:Vn,offset:[4,0]}},Sa={topLeft:{points:["bl","tl"],overflow:Vn,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Vn,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:Vn,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:Vn,offset:[4,0]}},fr=Xt;function Qt(t,i,c){if(i)return i;if(c)return c[t]||c.other}var Fa={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function Pa(t){var i=t.prefixCls,c=t.visible,E=t.children,C=t.popup,y=t.popupClassName,R=t.popupOffset,S=t.disabled,w=t.mode,$=t.onVisibleChange,V=n.useContext(je),J=V.getPopupContainer,G=V.rtl,se=V.subMenuOpenDelay,X=V.subMenuCloseDelay,Q=V.builtinPlacements,oe=V.triggerSubMenuAction,z=V.forceSubMenuRender,q=V.motion,re=V.defaultMotions,Y=n.useState(!1),le=Object(L.a)(Y,2),k=le[0],be=le[1],ee=G?Object(de.a)(Object(de.a)({},Sa),Q):Object(de.a)(Object(de.a)({},Xt),Q),ce=Fa[w],fe=Qt(w,q,re),ie=Object(de.a)(Object(de.a)({},fe),{},{leavedClassName:"".concat(i,"-hidden"),removeOnLeave:!1,motionAppear:!0}),H=n.useRef();return n.useEffect(function(){return H.current=Object(Qe.a)(function(){be(c)}),function(){Qe.a.cancel(H.current)}},[c]),n.createElement(Ra.a,{prefixCls:i,popupClassName:Ie()("".concat(i,"-popup"),Object(me.a)({},"".concat(i,"-rtl"),G),y),stretch:w==="horizontal"?"minWidth":null,getPopupContainer:J,builtinPlacements:ee,popupPlacement:ce,popupVisible:k,popup:C,popupAlign:R&&{offset:R},action:S?[]:[oe],mouseEnterDelay:se,mouseLeaveDelay:X,onPopupVisibleChange:$,forceRender:z,popupMotion:ie},E)}var ja=e("8XRh");function Da(t){var i=t.id,c=t.open,E=t.keyPath,C=t.children,y="inline",R=n.useContext(je),S=R.prefixCls,w=R.forceSubMenuRender,$=R.motion,V=R.defaultMotions,J=R.mode,G=n.useRef(!1);G.current=J===y;var se=n.useState(!G.current),X=Object(L.a)(se,2),Q=X[0],oe=X[1],z=G.current?c:!1;n.useEffect(function(){G.current&&oe(!1)},[J]);var q=Object(de.a)({},Qt(y,$,V));E.length>1&&(q.motionAppear=!1);var re=q.onVisibleChanged;return q.onVisibleChanged=function(Y){return!G.current&&!Y&&oe(!0),re==null?void 0:re(Y)},Q?null:n.createElement(gn,{mode:y,locked:!G.current},n.createElement(ja.default,Object(W.a)({visible:z},q,{forceRender:w,removeOnLeave:!1,leavedClassName:"".concat(S,"-hidden")}),function(Y){var le=Y.className,k=Y.style;return n.createElement(Ht,{id:i,className:le,style:k},C)}))}var Ia=function(i){var c,E=i.style,C=i.className,y=i.title,R=i.eventKey,S=i.disabled,w=i.internalPopupClose,$=i.children,V=i.itemIcon,J=i.expandIcon,G=i.popupClassName,se=i.popupOffset,X=i.onClick,Q=i.onMouseEnter,oe=i.onMouseLeave,z=i.onTitleClick,q=i.onTitleMouseEnter,re=i.onTitleMouseLeave,Y=Object(Ne.a)(i,["style","className","title","eventKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"]),le=Gt(R),k=n.useContext(je),be=k.prefixCls,ee=k.mode,ce=k.openKeys,fe=k.disabled,ie=k.overflowDisabled,H=k.activeKey,ue=k.selectedKeys,ge=k.itemIcon,he=k.expandIcon,Re=k.onItemClick,We=k.onOpenChange,Ee=k.onActive,Oe=n.useContext(Ge),Ke=Oe.isSubPathKey,Be=Ue(),De="".concat(be,"-submenu"),Pe=fe||S,$e=n.useRef(),qe=n.useRef(),Ve=V||ge,ze=J||he,Xe=ce.includes(R),Le=!ie&&Xe,Sn=Ke(ue,R),an=$n(R,Pe,q,re),Ye=an.active,on=Object(Ne.a)(an,["active"]),yn=n.useState(!1),bn=Object(L.a)(yn,2),Ae=bn[0],Je=bn[1],_e=function(He){Pe||Je(He)},Ze=function(He){_e(!0),Q==null||Q({key:R,domEvent:He})},Mn=function(He){_e(!1),oe==null||oe({key:R,domEvent:He})},xn=n.useMemo(function(){return Ye||(ee!=="inline"?Ae||Ke([H],R):!1)},[ee,Ye,H,Ae,R,Ke]),wn=I(Be.length),rn=function(He){Pe||(z==null||z({key:R,domEvent:He}),ee==="inline"&&We(R,!Xe))},Fn=et(function(ke){X==null||X(_n(ke)),Re(ke)}),un=function(He){ee!=="inline"&&We(R,He)},Pn=function(){Ee(R)},en=le&&"".concat(le,"-popup"),sn=n.createElement("div",Object(W.a)({role:"menuitem",style:wn,className:"".concat(De,"-title"),tabIndex:Pe?null:-1,ref:$e,title:typeof y=="string"?y:null,"data-menu-id":ie&&le?null:le,"aria-expanded":Le,"aria-haspopup":!0,"aria-controls":en,"aria-disabled":Pe,onClick:rn,onFocus:Pn},on),y,n.createElement(m,{icon:ee!=="horizontal"?ze:null,props:Object(de.a)(Object(de.a)({},i),{},{isOpen:Le,isSubMenu:!0})},n.createElement("i",{className:"".concat(De,"-arrow")}))),jn=n.useRef(ee);if(ee!=="inline"&&(jn.current=Be.length>1?"vertical":ee),!ie){var cn=jn.current;sn=n.createElement(Pa,{mode:cn,prefixCls:De,visible:!w&&Le&&ee!=="inline",popupClassName:G,popupOffset:se,popup:n.createElement(gn,{mode:cn},n.createElement(Ht,{id:en,ref:qe},$)),disabled:Pe,onVisibleChange:un},sn)}return n.createElement(gn,{onItemClick:Fn,mode:ee==="horizontal"?"vertical":ee,itemIcon:Ve,expandIcon:ze},n.createElement(p.Item,Object(W.a)({role:"none"},Y,{component:"li",style:E,className:Ie()(De,"".concat(De,"-").concat(ee),C,(c={},Object(me.a)(c,"".concat(De,"-open"),Le),Object(me.a)(c,"".concat(De,"-active"),xn),Object(me.a)(c,"".concat(De,"-selected"),Sn),Object(me.a)(c,"".concat(De,"-disabled"),Pe),c)),onMouseEnter:Ze,onMouseLeave:Mn}),sn,!ie&&n.createElement(Da,{id:en,open:Le,keyPath:Be},$)))};function Yt(t){var i=t.eventKey,c=t.children,E=Ue(i),C=jt(c,E),y=_();n.useEffect(function(){if(y)return y.registerPath(i,E),function(){y.unregisterPath(i,E)}},[E]);var R;return y?R=C:R=n.createElement(Ia,t,C),n.createElement(Fe.Provider,{value:E},R)}var Aa=e("x/xZ");function Zt(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Object(Aa.a)(t)){var c=t.nodeName.toLowerCase(),E=["input","select","textarea","button"].includes(c)||t.isContentEditable||c==="a"&&!!t.getAttribute("href"),C=t.getAttribute("tabindex"),y=Number(C),R=null;return C&&!Number.isNaN(y)?R=y:E&&R===null&&(R=0),E&&t.disabled&&(R=null),R!==null&&(R>=0||i&&R<0)}return!1}function kt(t){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,c=Object(fn.a)(t.querySelectorAll("*")).filter(function(E){return Zt(E,i)});return Zt(t,i)&&c.unshift(t),c}var mt=null;function pr(){mt=document.activeElement}function vr(){mt=null}function hr(){if(mt)try{mt.focus()}catch(t){}}function gr(t,i){if(i.keyCode===9){var c=kt(t),E=c[i.shiftKey?0:c.length-1],C=E===document.activeElement||t===document.activeElement;if(C){var y=c[i.shiftKey?c.length-1:0];y.focus(),i.preventDefault()}}}var Dt=we.a.LEFT,It=we.a.RIGHT,At=we.a.UP,ft=we.a.DOWN,pt=we.a.ENTER,qt=we.a.ESC,_t=[At,ft,Dt,It];function Na(t,i,c,E){var C,y,R,S,w="prev",$="next",V="children",J="parent";if(t==="inline"&&E===pt)return{inlineTrigger:!0};var G=(C={},Object(me.a)(C,At,w),Object(me.a)(C,ft,$),C),se=(y={},Object(me.a)(y,Dt,c?$:w),Object(me.a)(y,It,c?w:$),Object(me.a)(y,ft,V),Object(me.a)(y,pt,V),y),X=(R={},Object(me.a)(R,At,w),Object(me.a)(R,ft,$),Object(me.a)(R,pt,V),Object(me.a)(R,qt,J),Object(me.a)(R,Dt,c?V:J),Object(me.a)(R,It,c?J:V),R),Q={inline:G,horizontal:se,vertical:X,inlineSub:G,horizontalSub:X,verticalSub:X},oe=(S=Q["".concat(t).concat(i?"":"Sub")])===null||S===void 0?void 0:S[E];switch(oe){case w:return{offset:-1,sibling:!0};case $:return{offset:1,sibling:!0};case J:return{offset:-1,sibling:!1};case V:return{offset:1,sibling:!1};default:return null}}function Ba(t){for(var i=t;i;){if(i.getAttribute("data-menu-list"))return i;i=i.parentElement}return null}function Ta(t,i){for(var c=t||document.activeElement;c;){if(i.has(c))return c;c=c.parentElement}return null}function Ka(t,i){var c=kt(t,!0);return c.filter(function(E){return i.has(E)})}function ea(t,i,c){var E=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!t)return null;var C=Ka(t,i),y=C.length,R=C.findIndex(function(S){return c===S});return E<0?R===-1?R=y-1:R-=1:E>0&&(R+=1),R=(R+y)%y,C[R]}function Ma(t,i,c,E,C,y,R,S,w,$){var V=n.useRef(),J=n.useRef();J.current=i;var G=function(){Qe.a.cancel(V.current)};return n.useEffect(function(){return function(){G()}},[]),function(se){var X=se.which;if([].concat(_t,[pt,qt]).includes(X)){var Q,oe,z,q=function(){Q=new Set,oe=new Map,z=new Map;var ge=y();return ge.forEach(function(he){var Re=document.querySelector("[data-menu-id='".concat(xt(E,he),"']"));Re&&(Q.add(Re),z.set(Re,he),oe.set(he,Re))}),Q};q();var re=oe.get(i),Y=Ta(re,Q),le=z.get(Y),k=Na(t,R(le,!0).length===1,c,X);if(!k)return;_t.includes(X)&&se.preventDefault();var be=function(ge){if(ge){var he=ge,Re=ge.querySelector("a");(Re==null?void 0:Re.getAttribute("href"))&&(he=Re);var We=z.get(ge);S(We),G(),V.current=Object(Qe.a)(function(){J.current===We&&he.focus()})}};if(k.sibling||!Y){var ee;!Y||t==="inline"?ee=C.current:ee=Ba(Y);var ce=ea(ee,Q,Y,k.offset);be(ce)}else if(k.inlineTrigger)w(le);else if(k.offset>0)w(le,!0),G(),V.current=Object(Qe.a)(function(){q();var ue=Y.getAttribute("aria-controls"),ge=document.getElementById(ue),he=ea(ge,Q);be(he)},5);else if(k.offset<0){var fe=R(le,!0),ie=fe[fe.length-2],H=oe.get(ie);w(ie,!1),be(H)}}$==null||$(se)}}var wa=Math.random().toFixed(5).toString().slice(2),na=0;function Wa(t){var i=Object(On.a)(t,{value:t}),c=Object(L.a)(i,2),E=c[0],C=c[1];return n.useEffect(function(){na+=1;var y="".concat(wa,"-").concat(na);C("rc-menu-uuid-".concat(y))},[]),E}var yr=e("p8sG");function La(t){Promise.resolve().then(t)}var Nt="__RC_UTIL_PATH_SPLIT__",ta=function(i){return i.join(Nt)},$a=function(i){return i.split(Nt)},Bt="rc-menu-more";function Va(){var t=n.useState({}),i=Object(L.a)(t,2),c=i[1],E=Object(n.useRef)(new Map),C=Object(n.useRef)(new Map),y=n.useState([]),R=Object(L.a)(y,2),S=R[0],w=R[1],$=Object(n.useRef)(0),V=Object(n.useCallback)(function(z,q){var re=ta(q);C.current.set(re,z),E.current.set(z,re),$.current+=1;var Y=$.current;La(function(){Y===$.current&&c({})})},[]),J=Object(n.useCallback)(function(z,q){var re=ta(q);C.current.delete(re),E.current.delete(z)},[]),G=Object(n.useCallback)(function(z){w(z)},[]),se=Object(n.useCallback)(function(z,q){var re=E.current.get(z)||"",Y=$a(re);return q&&S.includes(Y[0])&&Y.unshift(Bt),Y},[S]),X=Object(n.useCallback)(function(z,q){return z.some(function(re){var Y=se(re,!0);return Y.includes(q)})},[se]),Q=function(){var q=Object(fn.a)(E.current.keys());return S.length&&q.push(Bt),q},oe=Object(n.useCallback)(function(z){var q="".concat(E.current.get(z)).concat(Nt),re=new Set;return Object(fn.a)(C.current.keys()).forEach(function(Y){Y.startsWith(q)&&re.add(C.current.get(Y))}),re},[]);return{registerPath:V,unregisterPath:J,refreshOverflowKeys:G,isSubPathKey:X,getKeyPath:se,getKeys:Q,getSubPathKeys:oe}}var vt=[],Ua=function(i){var c,E,C=i.prefixCls,y=C===void 0?"rc-menu":C,R=i.style,S=i.className,w=i.tabIndex,$=w===void 0?0:w,V=i.children,J=i.direction,G=i.id,se=i.mode,X=se===void 0?"vertical":se,Q=i.inlineCollapsed,oe=i.disabled,z=i.disabledOverflow,q=i.subMenuOpenDelay,re=q===void 0?.1:q,Y=i.subMenuCloseDelay,le=Y===void 0?.1:Y,k=i.forceSubMenuRender,be=i.defaultOpenKeys,ee=i.openKeys,ce=i.activeKey,fe=i.defaultActiveFirst,ie=i.selectable,H=ie===void 0?!0:ie,ue=i.multiple,ge=ue===void 0?!1:ue,he=i.defaultSelectedKeys,Re=i.selectedKeys,We=i.onSelect,Ee=i.onDeselect,Oe=i.inlineIndent,Ke=Oe===void 0?24:Oe,Be=i.motion,De=i.defaultMotions,Pe=i.triggerSubMenuAction,$e=Pe===void 0?"hover":Pe,qe=i.builtinPlacements,Ve=i.itemIcon,ze=i.expandIcon,Xe=i.overflowedIndicator,Le=Xe===void 0?"...":Xe,Sn=i.getPopupContainer,an=i.onClick,Ye=i.onOpenChange,on=i.onKeyDown,yn=i.openAnimation,bn=i.openTransitionName,Ae=Object(Ne.a)(i,["prefixCls","style","className","tabIndex","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName"]),Je=jt(V,vt),_e=n.useState(!1),Ze=Object(L.a)(_e,2),Mn=Ze[0],xn=Ze[1],wn=n.useRef(),rn=Wa(G),Fn=J==="rtl",un=n.useMemo(function(){return X==="inline"&&Q?["vertical",Q]:[X,!1]},[X,Q]),Pn=Object(L.a)(un,2),en=Pn[0],sn=Pn[1],jn=n.useState(0),cn=Object(L.a)(jn,2),ke=cn[0],He=cn[1],Gn=ke>=Je.length-1||en!=="horizontal"||z,Jn=Object(On.a)(be,{value:ee,postState:function(Z){return Z||vt}}),nt=Object(L.a)(Jn,2),En=nt[0],vn=nt[1],Hn=n.useState(En),Cn=Object(L.a)(Hn,2),mn=Cn[0],Xn=Cn[1],Dn=en==="inline",Qn=n.useRef(!1);n.useEffect(function(){Dn&&Xn(En)},[En]),n.useEffect(function(){if(!Qn.current){Qn.current=!0;return}if(Dn)vn(mn);else{var te=[];vn(te),Ye==null||Ye(te)}},[Dn]);var dn=Va(),In=dn.registerPath,ve=dn.unregisterPath,Se=dn.refreshOverflowKeys,Me=dn.isSubPathKey,nn=dn.getKeyPath,Yn=dn.getKeys,gt=dn.getSubPathKeys,wt=n.useMemo(function(){return{registerPath:In,unregisterPath:ve}},[In,ve]),Wt=n.useMemo(function(){return{isSubPathKey:Me}},[Me]);n.useEffect(function(){Se(Gn?vt:Je.slice(ke+1).map(function(te){return te.key}))},[ke,Gn]);var Lt=Object(On.a)(ce||fe&&((c=Je[0])===null||c===void 0?void 0:c.key),{value:ce}),tt=Object(L.a)(Lt,2),yt=tt[0],st=tt[1],bt=et(function(te){st(te)}),$t=et(function(){st(void 0)}),Et=Object(On.a)(he||[],{value:Re,postState:function(Z){return Array.isArray(Z)?Z:Z==null?vt:[Z]}}),Ct=Object(L.a)(Et,2),at=Ct[0],An=Ct[1],Ot=function(Z){if(!!H){var Ce=Z.key,xe=at.includes(Ce),ln;xe?ln=at.filter(function(kn){return kn!==Ce}):ge?ln=[].concat(Object(fn.a)(at),[Ce]):ln=[Ce],An(ln);var Un=Object(de.a)(Object(de.a)({},Z),{},{selectedKeys:ln});xe?Ee==null||Ee(Un):We==null||We(Un)}},Rt=et(function(te){an==null||an(_n(te)),Ot(te)}),lt=et(function(te,Z){var Ce=En.filter(function(ln){return ln!==te});if(Z)Ce.push(te);else if(en!=="inline"){var xe=gt(te);Ce=Ce.filter(function(ln){return!xe.has(ln)})}d()(En,Ce)||(vn(Ce),Ye==null||Ye(Ce))}),Zn=et(Sn),ot=function(Z,Ce){var xe=Ce!=null?Ce:!En.includes(Z);lt(Z,xe)},ut=Ma(en,yt,Fn,rn,wn,Yn,nn,st,ot,on);n.useEffect(function(){xn(!0)},[]);var St=en!=="horizontal"||z?Je:Je.map(function(te,Z){return n.createElement(gn,{key:te.key,overflowDisabled:Z>ke},te)}),Ft=n.createElement(p,Object(W.a)({id:G,ref:wn,prefixCls:"".concat(y,"-overflow"),component:"ul",itemComponent:Pt,className:Ie()(y,"".concat(y,"-root"),"".concat(y,"-").concat(en),S,(E={},Object(me.a)(E,"".concat(y,"-inline-collapsed"),sn),Object(me.a)(E,"".concat(y,"-rtl"),Fn),E)),dir:J,style:R,role:"menu",tabIndex:$,data:St,renderRawItem:function(Z){return Z},renderRawRest:function(Z){var Ce=Z.length,xe=Ce?Je.slice(-Ce):null;return n.createElement(Yt,{eventKey:Bt,title:Le,disabled:Gn,internalPopupClose:Ce===0},xe)},maxCount:en!=="horizontal"||z?p.INVALIDATE:p.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(Z){He(Z)},onKeyDown:ut},Ae));return n.createElement(zt.Provider,{value:rn},n.createElement(gn,{prefixCls:y,mode:en,openKeys:En,rtl:Fn,disabled:oe,motion:Mn?Be:null,defaultMotions:Mn?De:null,activeKey:yt,onActive:bt,onInactive:$t,selectedKeys:at,inlineIndent:Ke,subMenuOpenDelay:re,subMenuCloseDelay:le,forceSubMenuRender:k,builtinPlacements:qe,triggerSubMenuAction:$e,getPopupContainer:Zn,itemIcon:Ve,expandIcon:ze,onItemClick:Rt,onOpenChange:lt},n.createElement(Ge.Provider,{value:Wt},Ft),n.createElement(pe.Provider,{value:wt},Je)))},za=Ua,xa=function(i){var c=i.className,E=i.title,C=i.eventKey,y=i.children,R=Object(Ne.a)(i,["className","title","eventKey","children"]),S=n.useContext(je),w=S.prefixCls,$="".concat(w,"-item-group");return n.createElement("li",Object(W.a)({},R,{onClick:function(J){return J.stopPropagation()},className:Ie()($,c)}),n.createElement("div",{className:"".concat($,"-title"),title:typeof E=="string"?E:void 0},E),n.createElement("ul",{className:"".concat($,"-list")},y))};function Ga(t){var i=t.children,c=Object(Ne.a)(t,["children"]),E=Ue(c.eventKey),C=jt(i,E),y=_();return y?C:n.createElement(xa,c,C)}function Ja(t){var i=t.className,c=t.style,E=n.useContext(je),C=E.prefixCls,y=_();return y?null:n.createElement("li",{className:Ie()("".concat(C,"-item-divider"),i),style:c})}var it=za;it.Item=Pt,it.SubMenu=Yt,it.ItemGroup=Ga,it.Divider=Ja;var Ha=it,Xa=e("eDIo");function Qa(t,i){var c=t.prefixCls,E=t.editable,C=t.locale,y=t.style;return!E||E.showAdd===!1?null:n.createElement("button",{ref:i,type:"button",className:"".concat(c,"-nav-add"),style:y,"aria-label":(C==null?void 0:C.addAriaLabel)||"Add tab",onClick:function(S){E.onEdit("add",{event:S})}},E.addIcon||"+")}var aa=n.forwardRef(Qa);function Ya(t,i){var c=t.prefixCls,E=t.id,C=t.tabs,y=t.locale,R=t.mobile,S=t.moreIcon,w=S===void 0?"More":S,$=t.moreTransitionName,V=t.style,J=t.className,G=t.editable,se=t.tabBarGutter,X=t.rtl,Q=t.onTabClick,oe=Object(n.useState)(!1),z=Object(L.a)(oe,2),q=z[0],re=z[1],Y=Object(n.useState)(null),le=Object(L.a)(Y,2),k=le[0],be=le[1],ee="".concat(E,"-more-popup"),ce="".concat(c,"-dropdown"),fe=k!==null?"".concat(ee,"-").concat(k):null,ie=y==null?void 0:y.dropdownAriaLabel,H=n.createElement(Ha,{onClick:function(Oe){var Ke=Oe.key,Be=Oe.domEvent;Q(Ke,Be),re(!1)},id:ee,tabIndex:-1,role:"listbox","aria-activedescendant":fe,selectedKeys:[k],"aria-label":ie!==void 0?ie:"expanded dropdown"},C.map(function(Ee){return n.createElement(Pt,{key:Ee.key,id:"".concat(ee,"-").concat(Ee.key),role:"option","aria-controls":E&&"".concat(E,"-panel-").concat(Ee.key),disabled:Ee.disabled},Ee.tab)}));function ue(Ee){for(var Oe=C.filter(function($e){return!$e.disabled}),Ke=Oe.findIndex(function($e){return $e.key===k})||0,Be=Oe.length,De=0;De<Be;De+=1){Ke=(Ke+Ee+Be)%Be;var Pe=Oe[Ke];if(!Pe.disabled){be(Pe.key);return}}}function ge(Ee){var Oe=Ee.which;if(!q){[we.a.DOWN,we.a.SPACE,we.a.ENTER].includes(Oe)&&(re(!0),Ee.preventDefault());return}switch(Oe){case we.a.UP:ue(-1),Ee.preventDefault();break;case we.a.DOWN:ue(1),Ee.preventDefault();break;case we.a.ESC:re(!1);break;case we.a.SPACE:case we.a.ENTER:k!==null&&Q(k,Ee);break}}Object(n.useEffect)(function(){var Ee=document.getElementById(fe);Ee&&Ee.scrollIntoView&&Ee.scrollIntoView(!1)},[k]),Object(n.useEffect)(function(){q||be(null)},[q]);var he=Object(me.a)({},X?"marginLeft":"marginRight",se);C.length||(he.visibility="hidden",he.order=1);var Re=Ie()(Object(me.a)({},"".concat(ce,"-rtl"),X)),We=R?null:n.createElement(Xa.default,{prefixCls:ce,overlay:H,trigger:["hover"],visible:q,transitionName:$,onVisibleChange:re,overlayClassName:Re,mouseEnterDelay:.1,mouseLeaveDelay:.1},n.createElement("button",{type:"button",className:"".concat(c,"-nav-more"),style:he,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":ee,id:"".concat(E,"-more"),"aria-expanded":q,onKeyDown:ge},w));return n.createElement("div",{className:Ie()("".concat(c,"-nav-operations"),J),style:V,ref:i},We,n.createElement(aa,{prefixCls:c,locale:y,editable:G}))}var Za=n.forwardRef(Ya),Tt=Object(n.createContext)(null),ka=.1,ra=.01,ht=20,ia=Math.pow(.995,ht);function qa(t,i){var c=Object(n.useState)(),E=Object(L.a)(c,2),C=E[0],y=E[1],R=Object(n.useState)(0),S=Object(L.a)(R,2),w=S[0],$=S[1],V=Object(n.useState)(0),J=Object(L.a)(V,2),G=J[0],se=J[1],X=Object(n.useState)(),Q=Object(L.a)(X,2),oe=Q[0],z=Q[1],q=Object(n.useRef)();function re(ce){var fe=ce.touches[0],ie=fe.screenX,H=fe.screenY;y({x:ie,y:H}),window.clearInterval(q.current)}function Y(ce){if(!!C){ce.preventDefault();var fe=ce.touches[0],ie=fe.screenX,H=fe.screenY;y({x:ie,y:H});var ue=ie-C.x,ge=H-C.y;i(ue,ge);var he=Date.now();$(he),se(he-w),z({x:ue,y:ge})}}function le(){if(!!C&&(y(null),z(null),oe)){var ce=oe.x/G,fe=oe.y/G,ie=Math.abs(ce),H=Math.abs(fe);if(Math.max(ie,H)<ka)return;var ue=ce,ge=fe;q.current=window.setInterval(function(){if(Math.abs(ue)<ra&&Math.abs(ge)<ra){window.clearInterval(q.current);return}ue*=ia,ge*=ia,i(ue*ht,ge*ht)},ht)}}var k=Object(n.useRef)();function be(ce){var fe=ce.deltaX,ie=ce.deltaY,H=0,ue=Math.abs(fe),ge=Math.abs(ie);ue===ge?H=k.current==="x"?fe:ie:ue>ge?(H=fe,k.current="x"):(H=ie,k.current="y"),i(-H,-H)&&ce.preventDefault()}var ee=Object(n.useRef)(null);ee.current={onTouchStart:re,onTouchMove:Y,onTouchEnd:le,onWheel:be},n.useEffect(function(){function ce(ue){ee.current.onTouchStart(ue)}function fe(ue){ee.current.onTouchMove(ue)}function ie(ue){ee.current.onTouchEnd(ue)}function H(ue){ee.current.onWheel(ue)}return document.addEventListener("touchmove",fe,{passive:!1}),document.addEventListener("touchend",ie,{passive:!1}),t.current.addEventListener("touchstart",ce,{passive:!1}),t.current.addEventListener("wheel",H),function(){document.removeEventListener("touchmove",fe),document.removeEventListener("touchend",ie)}},[])}function _a(){var t=Object(n.useRef)(new Map);function i(E){return t.current.has(E)||t.current.set(E,n.createRef()),t.current.get(E)}function c(E){t.current.delete(E)}return[i,c]}function sa(t,i){var c=n.useRef(t),E=n.useState({}),C=Object(L.a)(E,2),y=C[1];function R(S){var w=typeof S=="function"?S(c.current):S;w!==c.current&&i(w,c.current),c.current=w,y({})}return[c.current,R]}var la=function(i){var c=i.position,E=i.prefixCls,C=i.extra;if(!C)return null;var y,R=C;return c==="right"&&(y=R.right||!R.left&&R||null),c==="left"&&(y=R.left||null),y?n.createElement("div",{className:"".concat(E,"-extra-content")},y):null};function er(t,i){var c,E=n.useContext(Tt),C=E.prefixCls,y=E.tabs,R=t.className,S=t.style,w=t.id,$=t.animated,V=t.activeKey,J=t.rtl,G=t.extra,se=t.editable,X=t.locale,Q=t.tabPosition,oe=t.tabBarGutter,z=t.children,q=t.onTabClick,re=t.onTabScroll,Y=Object(n.useRef)(),le=Object(n.useRef)(),k=Object(n.useRef)(),be=Object(n.useRef)(),ee=_a(),ce=Object(L.a)(ee,2),fe=ce[0],ie=ce[1],H=Q==="top"||Q==="bottom",ue=sa(0,function(te,Z){H&&re&&re({direction:te>Z?"left":"right"})}),ge=Object(L.a)(ue,2),he=ge[0],Re=ge[1],We=sa(0,function(te,Z){!H&&re&&re({direction:te>Z?"top":"bottom"})}),Ee=Object(L.a)(We,2),Oe=Ee[0],Ke=Ee[1],Be=Object(n.useState)(0),De=Object(L.a)(Be,2),Pe=De[0],$e=De[1],qe=Object(n.useState)(0),Ve=Object(L.a)(qe,2),ze=Ve[0],Xe=Ve[1],Le=Object(n.useState)(0),Sn=Object(L.a)(Le,2),an=Sn[0],Ye=Sn[1],on=Object(n.useState)(0),yn=Object(L.a)(on,2),bn=yn[0],Ae=yn[1],Je=Object(n.useState)(null),_e=Object(L.a)(Je,2),Ze=_e[0],Mn=_e[1],xn=Object(n.useState)(null),wn=Object(L.a)(xn,2),rn=wn[0],Fn=wn[1],un=Object(n.useState)(0),Pn=Object(L.a)(un,2),en=Pn[0],sn=Pn[1],jn=Object(n.useState)(0),cn=Object(L.a)(jn,2),ke=cn[0],He=cn[1],Gn=Rn(new Map),Jn=Object(L.a)(Gn,2),nt=Jn[0],En=Jn[1],vn=ct(y,nt,Pe),Hn="".concat(C,"-nav-operations-hidden"),Cn=0,mn=0;H?J?(Cn=0,mn=Math.max(0,Pe-Ze)):(Cn=Math.min(0,Ze-Pe),mn=0):(Cn=Math.min(0,rn-ze),mn=0);function Xn(te){return te<Cn?Cn:te>mn?mn:te}var Dn=Object(n.useRef)(),Qn=Object(n.useState)(),dn=Object(L.a)(Qn,2),In=dn[0],ve=dn[1];function Se(){ve(Date.now())}function Me(){window.clearTimeout(Dn.current)}qa(Y,function(te,Z){function Ce(xe,ln){xe(function(Un){var kn=Xn(Un+ln);return kn})}if(H){if(Ze>=Pe)return!1;Ce(Re,te)}else{if(rn>=ze)return!1;Ce(Ke,Z)}return Me(),Se(),!0}),Object(n.useEffect)(function(){return Me(),In&&(Dn.current=window.setTimeout(function(){ve(0)},100)),Me},[In]);function nn(){var te=arguments.length>0&&arguments[0]!==void 0?arguments[0]:V,Z=vn.get(te)||{width:0,height:0,left:0,right:0,top:0};if(H){var Ce=he;J?Z.right<he?Ce=Z.right:Z.right+Z.width>he+Ze&&(Ce=Z.right+Z.width-Ze):Z.left<-he?Ce=-Z.left:Z.left+Z.width>-he+Ze&&(Ce=-(Z.left+Z.width-Ze)),Ke(0),Re(Xn(Ce))}else{var xe=Oe;Z.top<-Oe?xe=-Z.top:Z.top+Z.height>-Oe+rn&&(xe=-(Z.top+Z.height-rn)),Re(0),Ke(Xn(xe))}}var Yn=D(vn,{width:Ze,height:rn,left:he,top:Oe},{width:an,height:bn},{width:en,height:ke},Object(de.a)(Object(de.a)({},t),{},{tabs:y})),gt=Object(L.a)(Yn,2),wt=gt[0],Wt=gt[1],Lt=y.map(function(te){var Z=te.key;return n.createElement(Ln,{id:w,prefixCls:C,key:Z,rtl:J,tab:te,closable:te.closable,editable:se,active:Z===V,tabPosition:Q,tabBarGutter:oe,renderWrapper:z,removeAriaLabel:X==null?void 0:X.removeAriaLabel,ref:fe(Z),onClick:function(xe){q(Z,xe)},onRemove:function(){ie(Z)},onFocus:function(){nn(Z),Se(),J||(Y.current.scrollLeft=0),Y.current.scrollTop=0}})}),tt=Kn(function(){var te,Z,Ce,xe,ln,Un,kn,Vt,Ut,or=((te=Y.current)===null||te===void 0?void 0:te.offsetWidth)||0,ur=((Z=Y.current)===null||Z===void 0?void 0:Z.offsetHeight)||0,ma=((Ce=be.current)===null||Ce===void 0?void 0:Ce.offsetWidth)||0,fa=((xe=be.current)===null||xe===void 0?void 0:xe.offsetHeight)||0,dr=((ln=k.current)===null||ln===void 0?void 0:ln.offsetWidth)||0,cr=((Un=k.current)===null||Un===void 0?void 0:Un.offsetHeight)||0;Mn(or),Fn(ur),sn(ma),He(fa);var pa=(((kn=le.current)===null||kn===void 0?void 0:kn.offsetWidth)||0)-ma,va=(((Vt=le.current)===null||Vt===void 0?void 0:Vt.offsetHeight)||0)-fa;$e(pa),Xe(va);var ha=(Ut=k.current)===null||Ut===void 0?void 0:Ut.className.includes(Hn);Ye(pa-(ha?0:dr)),Ae(va-(ha?0:cr)),En(function(){var ga=new Map;return y.forEach(function(mr){var ya=mr.key,dt=fe(ya).current;dt&&ga.set(ya,{width:dt.offsetWidth,height:dt.offsetHeight,left:dt.offsetLeft,top:dt.offsetTop})}),ga})}),yt=y.slice(0,wt),st=y.slice(Wt+1),bt=[].concat(Object(fn.a)(yt),Object(fn.a)(st)),$t=Object(n.useState)(),Et=Object(L.a)($t,2),Ct=Et[0],at=Et[1],An=vn.get(V),Ot=Object(n.useRef)();function Rt(){Qe.a.cancel(Ot.current)}Object(n.useEffect)(function(){var te={};return An&&(H?(J?te.right=An.right:te.left=An.left,te.width=An.width):(te.top=An.top,te.height=An.height)),Rt(),Ot.current=Object(Qe.a)(function(){at(te)}),Rt},[An,H,J]),Object(n.useEffect)(function(){nn()},[V,An,vn,H]),Object(n.useEffect)(function(){tt()},[J,oe,V,y.map(function(te){return te.key}).join("_")]);var lt=!!bt.length,Zn="".concat(C,"-nav-wrap"),ot,ut,St,Ft;return H?J?(ut=he>0,ot=he+Ze<Pe):(ot=he<0,ut=-he+Ze<Pe):(St=Oe<0,Ft=-Oe+rn<ze),n.createElement("div",{ref:i,role:"tablist",className:Ie()("".concat(C,"-nav"),R),style:S,onKeyDown:function(){Se()}},n.createElement(la,{position:"left",extra:G,prefixCls:C}),n.createElement(Wn.default,{onResize:tt},n.createElement("div",{className:Ie()(Zn,(c={},Object(me.a)(c,"".concat(Zn,"-ping-left"),ot),Object(me.a)(c,"".concat(Zn,"-ping-right"),ut),Object(me.a)(c,"".concat(Zn,"-ping-top"),St),Object(me.a)(c,"".concat(Zn,"-ping-bottom"),Ft),c)),ref:Y},n.createElement(Wn.default,{onResize:tt},n.createElement("div",{ref:le,className:"".concat(C,"-nav-list"),style:{transform:"translate(".concat(he,"px, ").concat(Oe,"px)"),transition:In?"none":void 0}},Lt,n.createElement(aa,{ref:be,prefixCls:C,locale:X,editable:se,style:{visibility:lt?"hidden":null}}),n.createElement("div",{className:Ie()("".concat(C,"-ink-bar"),Object(me.a)({},"".concat(C,"-ink-bar-animated"),$.inkBar)),style:Ct}))))),n.createElement(Za,Object(W.a)({},t,{ref:k,prefixCls:C,tabs:bt,className:!lt&&Hn})),n.createElement(la,{position:"right",extra:G,prefixCls:C}))}var oa=n.forwardRef(er);function nr(t){var i=t.id,c=t.activeKey,E=t.animated,C=t.tabPosition,y=t.rtl,R=t.destroyInactiveTabPane,S=n.useContext(Tt),w=S.prefixCls,$=S.tabs,V=E.tabPane,J=$.findIndex(function(G){return G.key===c});return n.createElement("div",{className:Ie()("".concat(w,"-content-holder"))},n.createElement("div",{className:Ie()("".concat(w,"-content"),"".concat(w,"-content-").concat(C),Object(me.a)({},"".concat(w,"-content-animated"),V)),style:J&&V?Object(me.a)({},y?"marginRight":"marginLeft","-".concat(J,"00%")):null},$.map(function(G){return n.cloneElement(G.node,{key:G.key,prefixCls:w,tabKey:G.key,id:i,animated:V,active:G.key===c,destroyInactiveTabPane:R})})))}function ua(t){var i=t.prefixCls,c=t.forceRender,E=t.className,C=t.style,y=t.id,R=t.active,S=t.animated,w=t.destroyInactiveTabPane,$=t.tabKey,V=t.children,J=n.useState(c),G=Object(L.a)(J,2),se=G[0],X=G[1];n.useEffect(function(){R?X(!0):w&&X(!1)},[R,w]);var Q={};return R||(S?(Q.visibility="hidden",Q.height=0,Q.overflowY="hidden"):Q.display="none"),n.createElement("div",{id:y&&"".concat(y,"-panel-").concat($),role:"tabpanel",tabIndex:R?0:-1,"aria-labelledby":y&&"".concat(y,"-tab-").concat($),"aria-hidden":!R,style:Object(de.a)(Object(de.a)({},Q),C),className:Ie()("".concat(i,"-tabpane"),R&&"".concat(i,"-tabpane-active"),E)},(R||se||c)&&V)}var da=0;function tr(t){return Object(Bn.a)(t).map(function(i){if(n.isValidElement(i)){var c=i.key!==void 0?String(i.key):void 0;return Object(de.a)(Object(de.a)({key:c},i.props),{},{node:i})}return null}).filter(function(i){return i})}function ar(t,i){var c,E=t.id,C=t.prefixCls,y=C===void 0?"rc-tabs":C,R=t.className,S=t.children,w=t.direction,$=t.activeKey,V=t.defaultActiveKey,J=t.editable,G=t.animated,se=G===void 0?{inkBar:!0,tabPane:!1}:G,X=t.tabPosition,Q=X===void 0?"top":X,oe=t.tabBarGutter,z=t.tabBarStyle,q=t.tabBarExtraContent,re=t.locale,Y=t.moreIcon,le=t.moreTransitionName,k=t.destroyInactiveTabPane,be=t.renderTabBar,ee=t.onChange,ce=t.onTabClick,fe=t.onTabScroll,ie=Object(Ne.a)(t,["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"]),H=tr(S),ue=w==="rtl",ge;se===!1?ge={inkBar:!1,tabPane:!1}:se===!0?ge={inkBar:!0,tabPane:!0}:ge=Object(de.a)({inkBar:!0,tabPane:!1},Object(tn.a)(se)==="object"?se:{});var he=Object(n.useState)(!1),Re=Object(L.a)(he,2),We=Re[0],Ee=Re[1];Object(n.useEffect)(function(){Ee(Object(Tn.a)())},[]);var Oe=Object(On.a)(function(){var Ae;return(Ae=H[0])===null||Ae===void 0?void 0:Ae.key},{value:$,defaultValue:V}),Ke=Object(L.a)(Oe,2),Be=Ke[0],De=Ke[1],Pe=Object(n.useState)(function(){return H.findIndex(function(Ae){return Ae.key===Be})}),$e=Object(L.a)(Pe,2),qe=$e[0],Ve=$e[1];Object(n.useEffect)(function(){var Ae=H.findIndex(function(_e){return _e.key===Be});if(Ae===-1){var Je;Ae=Math.max(0,Math.min(qe,H.length-1)),De((Je=H[Ae])===null||Je===void 0?void 0:Je.key)}Ve(Ae)},[H.map(function(Ae){return Ae.key}).join("_"),Be,qe]);var ze=Object(On.a)(null,{value:E}),Xe=Object(L.a)(ze,2),Le=Xe[0],Sn=Xe[1],an=Q;We&&!["left","right"].includes(Q)&&(an="top"),Object(n.useEffect)(function(){E||(Sn("rc-tabs-".concat(da)),da+=1)},[]);function Ye(Ae,Je){ce==null||ce(Ae,Je),De(Ae),ee==null||ee(Ae)}var on={id:Le,activeKey:Be,animated:ge,tabPosition:an,rtl:ue,mobile:We},yn,bn=Object(de.a)(Object(de.a)({},on),{},{editable:J,locale:re,moreIcon:Y,moreTransitionName:le,tabBarGutter:oe,onTabClick:Ye,onTabScroll:fe,extra:q,style:z,panes:S});return be?yn=be(bn,oa):yn=n.createElement(oa,bn),n.createElement(Tt.Provider,{value:{tabs:H,prefixCls:y}},n.createElement("div",Object(W.a)({ref:i,id:E,className:Ie()(y,"".concat(y,"-").concat(an),(c={},Object(me.a)(c,"".concat(y,"-mobile"),We),Object(me.a)(c,"".concat(y,"-editable"),J),Object(me.a)(c,"".concat(y,"-rtl"),ue),c),R)},ie),yn,n.createElement(nr,Object(W.a)({destroyInactiveTabPane:k},on,{animated:ge}))))}var ca=n.forwardRef(ar);ca.TabPane=ua;var rr=ca,ir=rr,Kt=e("MZF8"),pn=e("dEAq"),sr=e("ZpkN"),br=e("TIsu");function Mt(t,i){var c,E=(c=t.match(/\.(\w+)$/))===null||c===void 0?void 0:c[1];return E||(E=i.tsx?"tsx":"jsx"),E}var lr=t=>{var i,c,E,C=Object(n.useRef)(),y=Object(n.useContext)(pn.context),R=y.locale,S=Object(pn.useLocaleProps)(R,t),w=Object(pn.useDemoUrl)(S.identifier),$=S.demoUrl||w,V=(Kt.a===null||Kt.a===void 0?void 0:Kt.a.location.hash)==="#".concat(S.identifier),J=Object.keys(S.sources).length===1,G=Object(pn.useCodeSandbox)((i=S.hideActions)!==null&&i!==void 0&&i.includes("CSB")?null:S),se=Object(pn.useRiddle)((c=S.hideActions)!==null&&c!==void 0&&c.includes("RIDDLE")?null:S),X=Object(pn.useMotions)(S.motions||[],C.current),Q=Object(x.default)(X,2),oe=Q[0],z=Q[1],q=Object(pn.useCopy)(),re=Object(x.default)(q,2),Y=re[0],le=re[1],k=Object(n.useState)("_"),be=Object(x.default)(k,2),ee=be[0],ce=be[1],fe=Object(n.useState)(Mt(ee,S.sources[ee])),ie=Object(x.default)(fe,2),H=ie[0],ue=ie[1],ge=Object(n.useState)(Boolean(S.defaultShowCode)),he=Object(x.default)(ge,2),Re=he[0],We=he[1],Ee=Object(n.useState)(Math.random()),Oe=Object(x.default)(Ee,2),Ke=Oe[0],Be=Oe[1],De=S.sources[ee][H]||S.sources[ee].content,Pe=Object(pn.useTSPlaygroundUrl)(R,De),$e=Object(n.useRef)(),qe=Object(pn.usePrefersColor)(),Ve=Object(x.default)(qe,1),ze=Ve[0];Object(n.useEffect)(()=>{Be(Math.random())},[ze]);function Xe(Le){ce(Le),ue(Mt(Le,S.sources[Le]))}return h.a.createElement("div",{style:S.style,className:[S.className,"__dumi-default-previewer",V?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:S.identifier,"data-debug":S.debug||void 0,"data-iframe":S.iframe||void 0},S.iframe&&h.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),h.a.createElement("div",{ref:C,className:"__dumi-default-previewer-demo",style:{transform:S.transform?"translate(0, 0)":void 0,padding:S.compact||S.iframe&&S.compact!==!1?"0":void 0,background:S.background}},S.iframe?h.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(S.iframe).replace(/(\d)$/,"$1px")},key:Ke,src:$,ref:$e}):S.children),h.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":S.title},S.title&&h.a.createElement(pn.AnchorLink,{to:"#".concat(S.identifier)},S.title),S.description&&h.a.createElement("div",{dangerouslySetInnerHTML:{__html:S.description}})),h.a.createElement("div",{className:"__dumi-default-previewer-actions"},G&&h.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:G}),se&&h.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:se}),S.motions&&h.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:z,onClick:()=>oe()}),S.iframe&&h.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:()=>Be(Math.random())}),!((E=S.hideActions)!==null&&E!==void 0&&E.includes("EXTERNAL"))&&h.a.createElement(pn.Link,{target:"_blank",to:$},h.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),h.a.createElement("span",null),h.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":le,onClick:()=>Y(De)}),H==="tsx"&&Re&&h.a.createElement(pn.Link,{target:"_blank",to:Pe},h.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),h.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(Re?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:()=>We(!Re)})),Re&&h.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!J&&h.a.createElement(ir,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xB7\xB7\xB7",defaultActiveKey:ee,onChange:Xe},Object.keys(S.sources).map(Le=>h.a.createElement(ua,{tab:Le==="_"?"index.".concat(Mt(Le,S.sources[Le])):Le,key:Le}))),h.a.createElement("div",{className:"__dumi-default-previewer-source"},h.a.createElement(sr.a,{code:De,lang:H,showCopy:!1}))))},Er=hn.default=lr},"2XY2":function(Nn,hn,e){"use strict";e.r(hn);var x=e("q1tI"),n=e.n(x),h=e("dEAq"),W=e.n(h),me=e("0zqC"),L=e("ZpkN"),tn=e("JjdP"),Ne=n.a.memo(tn.default["chart-render-demo"].component);hn.default=de=>(n.a.useEffect(()=>{de!=null&&de.location.hash&&h.AnchorLink.scrollToAnchor(decodeURIComponent(de.location.hash.slice(1)))},[]),n.a.createElement(n.a.Fragment,null,n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"markdown"},n.a.createElement("div",{style:{display:"flex",alignItems:"center",marginBottom:"24px"}},n.a.createElement("img",{src:"https://img.alicdn.com/tfs/TB17UtINiLaK1RjSZFxXXamPFXa-606-643.png",alt:"logo",width:"48px"}),n.a.createElement("span",{style:{fontSize:"30px",fontWeight:"600",display:"inline-block",marginLeft:"12px"}},"ChartRender")),n.a.createElement("p",{style:{display:"flex",justifyContent:"space-between",width:"440px"}},n.a.createElement(h.Link,{to:"https://www.npmjs.com/package/chart-render?_blank"},n.a.createElement("img",{alt:"npm",src:"https://img.shields.io/npm/v/chart-render.svg?maxAge=3600&style=flat-square"})),n.a.createElement(h.Link,{to:"https://npmjs.org/package/chart-render"},n.a.createElement("img",{alt:"NPM downloads",src:"https://img.shields.io/npm/dm/chart-render.svg?style=flat-square"})),n.a.createElement(h.Link,{to:"https://npmjs.org/package/chart-render"},n.a.createElement("img",{alt:"NPM all downloads",src:"https://img.shields.io/npm/dt/chart-render.svg?style=flat-square"})),n.a.createElement("a",null,n.a.createElement("img",{alt:"PRs Welcome",src:"https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square"}))),n.a.createElement("blockquote",null,n.a.createElement("p",null,"\u6613\u7528\u7684\u4E2D\u540E\u53F0",n.a.createElement("strong",null,"\u56FE\u8868\u89E3\u51B3\u65B9\u6848"),"\uFF0C\u5E38\u7528\u4E8E",n.a.createElement("strong",null,"\u56FE\u8868\u5C55\u793A\u9875"),"\u5FEB\u901F\u751F\u6210")),n.a.createElement("h2",{id:"\u4F18\u52BF"},n.a.createElement(h.AnchorLink,{to:"#\u4F18\u52BF","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u4F18\u52BF"),n.a.createElement("ol",null,n.a.createElement("li",null,n.a.createElement("strong",null,"\u771F\u6B63\u5F00\u7BB1\u5373\u7528"),"\uFF1A\u53EA\u9700\u8981\u5173\u5FC3\u4F60\u7684\u6570\u636E\uFF0C\u4F20\u5165 ",n.a.createElement("code",null,"meta"),"\u3001",n.a.createElement("code",null,"data")," \u5373\u53EF\u51FA\u56FE\u3002"),n.a.createElement("li",null,n.a.createElement("strong",null,"\u5F00\u53D1\u4F53\u9A8C\u8212\u9002"),"\uFF1A\u4F7F\u7528 TypeScript \u5F00\u53D1\uFF0C\u63D0\u4F9B\u5B8C\u6574\u7684\u7C7B\u578B\u5B9A\u4E49\u6587\u4EF6\u3002"),n.a.createElement("li",null,n.a.createElement("strong",null,"\u65E0\u7F1D\u4E60\u60EF\u4F7F\u7528"),"\uFF1A\u56FE\u8868\u7528 Ant Design Charts \u6765\u63D0\u4F9B\uFF0C\u81EA\u5B9A\u4E49\u7684\u6837\u5F0F\u652F\u6301\u53C2\u6570\u900F\u4F20\u3002")),n.a.createElement("h2",{id:"\u4F55\u65F6\u4F7F\u7528"},n.a.createElement(h.AnchorLink,{to:"#\u4F55\u65F6\u4F7F\u7528","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u4F55\u65F6\u4F7F\u7528"),n.a.createElement("ol",null,n.a.createElement("li",null,"\u9700\u8981\u9488\u5BF9\u4E00\u5806\u6570\u636E\u5FEB\u901F\u5EFA\u7ACB\u53EF\u89C6\u5316\u56FE\u8868\uFF0C\u5E76\u4E14\u9700\u8981 ",n.a.createElement("strong",null,"\u6298\u7EBF\u56FE/\u67F1\u72B6\u56FE/\u4EA4\u53C9\u8868")," \u9891\u7E41\u5207\u6362\u67E5\u770B\u3002"),n.a.createElement("li",null,"\u524D\u7AEF\u5C0F\u767D\uFF0C\u53EA\u5173\u5FC3\u624B\u91CC\u7684\u6570\u636E\uFF0C\u4E0D\u60F3\u770B\u957F\u7BC7\u5927\u8BBA\u4E86\u89E3\u90A3\u4E9B\u56FE\u8868\u5E93\u8BE5\u600E\u4E48\u4F7F\u7528\uFF0C\u53EA\u60F3\u642D\u4E2A\u56FE\u8868\u770B\u3002"),n.a.createElement("li",null,"\u63D0\u4F9B\u6298\u7EBF\u56FE\u3001\u67F1\u72B6\u56FE\u3001\u4EA4\u53C9\u8868\u4E09\u7C7B\u7EC4\u4EF6\u8FDB\u884C\u56FE\u8868\u7ED8\u5236\uFF1A",n.a.createElement("ul",null,n.a.createElement("li",null,"\u6298\u7EBF\u56FE\uFF1A\u5E38\u7528\u6765\u89C2\u5BDF\u8D44\u6599\u5728\u4E00\u6BB5\u7EF4\u5EA6\u4E4B\u5185\u7684\u53D8\u5316\uFF0C\u5982\u679C X \u8F74\u4E3A\u65F6\u95F4\uFF0C\u8FD9\u79CD\u6298\u7EBF\u56FE\u53C8\u79F0\u4E3A\u8D8B\u52BF\u56FE\u3002"),n.a.createElement("li",null,"\u67F1\u72B6\u56FE\uFF1A\u63CF\u8FF0\u7684\u662F\u5206\u7C7B\u6570\u636E\uFF0C\u5E38\u7528\u6765\u56DE\u7B54\u7684\u662F\u6BCF\u4E00\u4E2A\u5206\u7C7B\u4E2D\u300C\u6709\u591A\u5C11\uFF1F\u300D\u8FD9\u4E2A\u95EE\u9898\u3002"),n.a.createElement("li",null,"\u4EA4\u53C9\u8868\uFF1A\u662F\u4E00\u79CD\u77E9\u9635\u5F62\u5F0F\u7684\u8868\u683C\uFF0C\u62E5\u6709\u6700\u5F3A\u5927\u7684\u6570\u636E\u5206\u6790\u80FD\u529B\uFF0C\u53EF\u4EE5\u5C55\u793A\u65E0\u9650\u6307\u6807\u548C\u65E0\u9650\u7EF4\u5EA6\u95F4\u7684\u5173\u7CFB\u3002")))),n.a.createElement("h2",{id:"\u5982\u4F55\u4F7F\u7528"},n.a.createElement(h.AnchorLink,{to:"#\u5982\u4F55\u4F7F\u7528","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u5982\u4F55\u4F7F\u7528"),n.a.createElement("h3",{id:"\u5B89\u88C5"},n.a.createElement(h.AnchorLink,{to:"#\u5B89\u88C5","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u5B89\u88C5"),n.a.createElement("p",null,"chart-render \u4F9D\u8D56 ant design\uFF0C\u5355\u72EC\u4F7F\u7528\u4E0D\u8981\u5FD8\u8BB0\u5B89\u88C5\uFF5E"),n.a.createElement(L.a,{code:"$ npm install chart-render --save",lang:"bash"}),n.a.createElement("h3",{id:"\u4EE3\u7801\u6F14\u793A"},n.a.createElement(h.AnchorLink,{to:"#\u4EE3\u7801\u6F14\u793A","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u4EE3\u7801\u6F14\u793A")),n.a.createElement(me.default,tn.default["chart-render-demo"].previewerProps,n.a.createElement(Ne,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h2",{id:"api"},n.a.createElement(h.AnchorLink,{to:"#api","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"API"),n.a.createElement("h3",{id:"\u901A\u7528\u53C2\u6570"},n.a.createElement(h.AnchorLink,{to:"#\u901A\u7528\u53C2\u6570","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u901A\u7528\u53C2\u6570"),n.a.createElement("p",null,"\u6240\u6709\u7684\u56FE\u8868\u7EC4\u4EF6\u90FD\u6709\u4EE5\u4E0B 4 \u4E2A\u5165\u53C2\uFF08",n.a.createElement("strong",null,n.a.createElement("code",null,"data")," \u548C ",n.a.createElement("code",null,"meta")," \u662F\u5FC5\u4F20\u7684\u53C2\u6570"),"\uFF0C\u8BF7\u52A1\u5FC5\u6CE8\u610F\uFF09\uFF1A"),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u53C2\u6570"),n.a.createElement("th",null,"\u8BF4\u660E"),n.a.createElement("th",null,"\u7C7B\u578B"),n.a.createElement("th",null,"\u662F\u5426\u5FC5\u586B"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"style"),n.a.createElement("td",null,"\u6700\u5916\u5C42\u5BB9\u5668\u7684\u6837\u5F0F"),n.a.createElement("td",null,n.a.createElement("code",null,"React.CSSProperties")),n.a.createElement("td",null,"\u5426")),n.a.createElement("tr",null,n.a.createElement("td",null,"className"),n.a.createElement("td",null,"\u6700\u5916\u5C42\u5BB9\u5668\u7684\u7C7B\u540D"),n.a.createElement("td",null,n.a.createElement("code",null,"string")),n.a.createElement("td",null,"\u5426")),n.a.createElement("tr",null,n.a.createElement("td",null,"data"),n.a.createElement("td",null,"\u6570\u636E\u914D\u7F6E\u9879 ",n.a.createElement("code",null,"\u6CE81")),n.a.createElement("td",null,n.a.createElement("code",null,"IDataItem[]")),n.a.createElement("td",null,"\u662F")),n.a.createElement("tr",null,n.a.createElement("td",null,"meta"),n.a.createElement("td",null,"\u5143\u6570\u636E\u914D\u7F6E\u9879 ",n.a.createElement("code",null,"\u6CE82")),n.a.createElement("td",null,n.a.createElement("code",null,"IMetaItem[]")),n.a.createElement("td",null,"\u662F")))),n.a.createElement("h5",{id:"\u6CE8-1\uFF1A\u901A\u7528\u53C2\u6570---data-\u6570\u636E\u914D\u7F6E\u9879"},n.a.createElement(h.AnchorLink,{to:"#\u6CE8-1\uFF1A\u901A\u7528\u53C2\u6570---data-\u6570\u636E\u914D\u7F6E\u9879","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u6CE8 1\uFF1A\u901A\u7528\u53C2\u6570 - data \u6570\u636E\u914D\u7F6E\u9879"),n.a.createElement("p",null,"\u662F\u666E\u901A\u7684\u5BF9\u8C61\u6570\u7EC4\uFF0C\u5F62\u5982\uFF1A"),n.a.createElement(L.a,{code:`[
  { date: '20200101', pv: 100, uv: 50 },
  { date: '20200102', pv: 120, uv: 60 },
  { date: '20200103', pv: 140, uv: 70 },
  { date: '20200104', pv: 160, uv: 80 },
];`,lang:"js"}),n.a.createElement("h5",{id:"\u6CE8-2\uFF1A\u901A\u7528\u53C2\u6570---meta-\u5143\u6570\u636E\u914D\u7F6E\u9879"},n.a.createElement(h.AnchorLink,{to:"#\u6CE8-2\uFF1A\u901A\u7528\u53C2\u6570---meta-\u5143\u6570\u636E\u914D\u7F6E\u9879","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u6CE8 2\uFF1A\u901A\u7528\u53C2\u6570 - meta \u5143\u6570\u636E\u914D\u7F6E\u9879"),n.a.createElement("p",null,"\u7528\u6765\u63CF\u8FF0 data \u7684\u5404\u4E2A\u5B57\u6BB5\u7684\u4E1C\u897F\uFF0C\u5F62\u5982\uFF1A"),n.a.createElement(L.a,{code:`/**
 * id: \u5BF9\u5E94\u5355\u6761\u6570\u636E\u9879\u7684 key \u540D
 * name: \u5BF9\u5E94\u5355\u6761\u6570\u636E\u9879\u7684 key \u7684\u63CF\u8FF0
 * isDim: \u662F\u5426\u662F\u7EF4\u5EA6\uFF0C\`true\`-\u7EF4\u5EA6\uFF0C\`false\`-\u6307\u6807
 * isRate: \u662F\u5426\u662F\u767E\u5206\u6570\uFF0C\u4EC5\u9650\u6307\u6807\u4F7F\u7528\uFF0C\u542F\u7528\u540E\uFF0C\u6570\u503C \`0.5\` \u4F1A\u4EE5 \`50%\` \u6765\u8F93\u51FA\u6E32\u67D3
 */
[
  { id: 'date', name: '\u65E5\u671F', isDim: true, isRate: false },
  { id: 'pv', name: '\u8BBF\u95EE\u91CF', isDim: false, isRate: false },
  { id: 'uv', name: '\u8BBF\u5BA2\u6570', isDim: false, isRate: false },
];`,lang:"js"}),n.a.createElement("h3",{id:"line-\u6298\u7EBF\u56FE\u7684\u989D\u5916\u53C2\u6570"},n.a.createElement(h.AnchorLink,{to:"#line-\u6298\u7EBF\u56FE\u7684\u989D\u5916\u53C2\u6570","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Line \u6298\u7EBF\u56FE\u7684\u989D\u5916\u53C2\u6570"),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u53C2\u6570"),n.a.createElement("th",null,"\u8BF4\u660E"),n.a.createElement("th",null,"\u7C7B\u578B"),n.a.createElement("th",null,"\u9ED8\u8BA4\u503C"),n.a.createElement("th",null,"\u662F\u5426\u5FC5\u586B"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"withArea"),n.a.createElement("td",null,"\u662F\u5426\u4EE5\u9762\u79EF\u56FE\u5C55\u793A",n.a.createElement("br",null)," - \u6CE8\u610F\u9762\u79EF\u56FE\u9ED8\u8BA4\u5806\u53E0\u5C55\u793A\uFF0C\u5982\u4E0D\u9700\u8981\u53EF\u4EE5\u4F20\u5165 ",n.a.createElement("code",null,"isStack=","{","false","}")," \u8986\u76D6",n.a.createElement("br",null)," - \u5F00\u542F\u9762\u79EF\u56FE\u540E\u65B9\u53EF\u4F7F\u7528 ",n.a.createElement("code",null,"areaStyle")," ",n.a.createElement("code",null,"startOnZero")," ",n.a.createElement("code",null,"isPercent")," \u5C5E\u6027"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"false")),n.a.createElement("td",null,"\u5426")))),n.a.createElement("p",null,"\u5982\u679C\u4F60\u9700\u8981\u4FEE\u6539\u70B9\u3001\u7EBF\u7B49\u6837\u5F0F\uFF0C\u53EF\u4EE5\u53C2\u8003\u53C2\u6570\u8868\uFF1A",n.a.createElement(h.Link,{to:"https://charts.ant.design/zh-CN/demos/line?type=api"},"\u6298\u7EBF\u56FE\u53C2\u6570\u8868")," ",n.a.createElement(h.Link,{to:"https://charts.ant.design/zh-CN/demos/area?type=api"},"\u9762\u79EF\u56FE\u53C2\u6570\u8868"),"\uFF0C\u9664\u4E86 ",n.a.createElement("code",null,"yField"),"\u3001",n.a.createElement("code",null,"xField"),"\u3001",n.a.createElement("code",null,"seriesField")," \u4E09\u4E2A\u5B57\u6BB5\u4E0D\u505A\u900F\u4F20\uFF0C\u5176\u4ED6\u5B57\u6BB5\u5747\u505A\u900F\u4F20\u5904\u7406\u3002"),n.a.createElement("h3",{id:"column-\u67F1\u72B6\u56FE\u7684\u989D\u5916\u53C2\u6570"},n.a.createElement(h.AnchorLink,{to:"#column-\u67F1\u72B6\u56FE\u7684\u989D\u5916\u53C2\u6570","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Column \u67F1\u72B6\u56FE\u7684\u989D\u5916\u53C2\u6570"),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u53C2\u6570"),n.a.createElement("th",null,"\u8BF4\u660E"),n.a.createElement("th",null,"\u7C7B\u578B"),n.a.createElement("th",null,"\u9ED8\u8BA4\u503C"),n.a.createElement("th",null,"\u662F\u5426\u5FC5\u586B"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"inverted"),n.a.createElement("td",null,"\u662F\u5426\u4EE5\u6761\u5F62\u56FE\u5C55\u793A"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"false")),n.a.createElement("td",null,"\u5426")))),n.a.createElement("p",null,"\u5982\u679C\u4F60\u9700\u8981\u4FEE\u6539\u989C\u8272\u3001\u67F1\u7B49\u6837\u5F0F\uFF0C\u53EF\u4EE5\u53C2\u8003\u53C2\u6570\u8868\uFF1A",n.a.createElement(h.Link,{to:"https://charts.ant.design/zh-CN/demos/column?type=api"},"\u67F1\u72B6\u56FE\u53C2\u6570\u8868"),"\uFF0C\u9664\u4E86 ",n.a.createElement("code",null,"yField"),"\u3001",n.a.createElement("code",null,"xField"),"\u3001",n.a.createElement("code",null,"seriesField")," \u4E09\u4E2A\u5B57\u6BB5\u4E0D\u505A\u900F\u4F20\uFF0C\u5176\u4ED6\u5B57\u6BB5\u5747\u505A\u900F\u4F20\u5904\u7406\u3002"),n.a.createElement("h3",{id:"pivottable-\u4EA4\u53C9\u8868\u7684\u989D\u5916\u53C2\u6570"},n.a.createElement(h.AnchorLink,{to:"#pivottable-\u4EA4\u53C9\u8868\u7684\u989D\u5916\u53C2\u6570","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"PivotTable \u4EA4\u53C9\u8868\u7684\u989D\u5916\u53C2\u6570"),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u53C2\u6570"),n.a.createElement("th",null,"\u8BF4\u660E"),n.a.createElement("th",null,"\u7C7B\u578B"),n.a.createElement("th",null,"\u9ED8\u8BA4\u503C"),n.a.createElement("th",null,"\u662F\u5426\u5FC5\u586B"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"showSubtotal"),n.a.createElement("td",null,"\u662F\u5426\u5C55\u793A\u603B\u8BA1\u5C0F\u8BA1"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"true")),n.a.createElement("td",null,"\u5426")),n.a.createElement("tr",null,n.a.createElement("td",null,"subtotalText"),n.a.createElement("td",null,"\u603B\u8BA1\u5C0F\u8BA1\u7684\u6587\u6848"),n.a.createElement("td",null,n.a.createElement("code",null,"[string, string]")),n.a.createElement("td",null,n.a.createElement("code",null,"['\u603B\u8BA1', '\u5C0F\u8BA1']")),n.a.createElement("td",null,"\u5426")),n.a.createElement("tr",null,n.a.createElement("td",null,"indicatorSide"),n.a.createElement("td",null,"\u6307\u6807\u7684\u5C55\u793A\u4F4D\u7F6E"),n.a.createElement("td",null,n.a.createElement("code",null,"'left' | 'top'")),n.a.createElement("td",null,n.a.createElement("code",null,"'top'")),n.a.createElement("td",null,"\u5426")),n.a.createElement("tr",null,n.a.createElement("td",null,"size"),n.a.createElement("td",null,"\u8868\u683C\u5C3A\u5BF8"),n.a.createElement("td",null,n.a.createElement("code",null,"'small' | 'middle' | 'large'")),n.a.createElement("td",null,n.a.createElement("code",null,"'middle'")),n.a.createElement("td",null,"\u5426")),n.a.createElement("tr",null,n.a.createElement("td",null,"leftDimensionLength"),n.a.createElement("td",null,"\u5DE6\u4FA7\u7EF4\u5EA6\u653E\u591A\u5C11\u4E2A\uFF0C\u8D85\u51FA\u7684\u7EF4\u5EA6\u4F1A\u653E\u5230\u8868\u683C\u9876\u90E8"),n.a.createElement("td",null,n.a.createElement("code",null,"number")),n.a.createElement("td",null,"-"),n.a.createElement("td",null,"\u5426")),n.a.createElement("tr",null,n.a.createElement("td",null,"leftExpandable"),n.a.createElement("td",null,"\u5DE6\u4FA7\u7EF4\u5EA6\u5141\u8BB8\u5C55\u5F00/\u6536\u8D77"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"false")),n.a.createElement("td",null,"\u5426")),n.a.createElement("tr",null,n.a.createElement("td",null,"topExpandable"),n.a.createElement("td",null,"\u9876\u90E8\u7EF4\u5EA6\u5141\u8BB8\u5C55\u5F00/\u6536\u8D77"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"false")),n.a.createElement("td",null,"\u5426")),n.a.createElement("tr",null,n.a.createElement("td",null,"cellRender"),n.a.createElement("td",null,"\u5355\u5143\u683C\u81EA\u5B9A\u4E49\u6E32\u67D3\u51FD\u6570\uFF0C\u53EF\u89C1",n.a.createElement(h.AnchorLink,{to:"./demo/pivot-table#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%8D%95%E5%85%83%E6%A0%BC%E6%B8%B2%E6%9F%93"},"\u4EA4\u53C9\u8868\u6848\u4F8B - \u9AD8\u7EA7\u6848\u4F8B - \u81EA\u5B9A\u4E49\u5355\u5143\u683C\u6E32\u67D3")),n.a.createElement("td",null,n.a.createElement("code",null,"(value: any, dimRecord: IDataItem, indId: string ) => React.ReactNode")),n.a.createElement("td",null,"-"),n.a.createElement("td",null,"\u5426"))))))))},"80pN":function(Nn,hn,e){"use strict";(function(x){/** @license React v16.14.0
* react-dom-test-utils.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var n=e("MgzW"),h=e("q1tI"),W=e("i8i4"),me=e("QCnb");function L(m){for(var I="https://reactjs.org/docs/error-decoder.html?invariant="+m,K=1;K<arguments.length;K++)I+="&args[]="+encodeURIComponent(arguments[K]);return"Minified React error #"+m+"; visit "+I+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var tn=h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;tn.hasOwnProperty("ReactCurrentDispatcher")||(tn.ReactCurrentDispatcher={current:null}),tn.hasOwnProperty("ReactCurrentBatchConfig")||(tn.ReactCurrentBatchConfig={suspense:null});function Ne(m){var I=m,K=m;if(m.alternate)for(;I.return;)I=I.return;else{m=I;do I=m,(I.effectTag&1026)!=0&&(K=I.return),m=I.return;while(m)}return I.tag===3?K:null}function de(m){if(Ne(m)!==m)throw Error(L(188))}function rt(m){var I=m.alternate;if(!I){if(I=Ne(m),I===null)throw Error(L(188));return I!==m?null:m}for(var K=m,pe=I;;){var _=K.return;if(_===null)break;var Fe=_.alternate;if(Fe===null){if(pe=_.return,pe!==null){K=pe;continue}break}if(_.child===Fe.child){for(Fe=_.child;Fe;){if(Fe===K)return de(_),m;if(Fe===pe)return de(_),I;Fe=Fe.sibling}throw Error(L(188))}if(K.return!==pe.return)K=_,pe=Fe;else{for(var Ue=!1,Ge=_.child;Ge;){if(Ge===K){Ue=!0,K=_,pe=Fe;break}if(Ge===pe){Ue=!0,pe=_,K=Fe;break}Ge=Ge.sibling}if(!Ue){for(Ge=Fe.child;Ge;){if(Ge===K){Ue=!0,K=Fe,pe=_;break}if(Ge===pe){Ue=!0,pe=Fe,K=_;break}Ge=Ge.sibling}if(!Ue)throw Error(L(189))}}if(K.alternate!==pe)throw Error(L(190))}if(K.tag!==3)throw Error(L(188));return K.stateNode.current===K?m:I}function Ie(){return!0}function Bn(){return!1}function Tn(m,I,K,pe){this.dispatchConfig=m,this._targetInst=I,this.nativeEvent=K,m=this.constructor.Interface;for(var _ in m)m.hasOwnProperty(_)&&((I=m[_])?this[_]=I(K):_==="target"?this.target=pe:this[_]=K[_]);return this.isDefaultPrevented=(K.defaultPrevented!=null?K.defaultPrevented:K.returnValue===!1)?Ie:Bn,this.isPropagationStopped=Bn,this}n(Tn.prototype,{preventDefault:function(){this.defaultPrevented=!0;var m=this.nativeEvent;m&&(m.preventDefault?m.preventDefault():typeof m.returnValue!="unknown"&&(m.returnValue=!1),this.isDefaultPrevented=Ie)},stopPropagation:function(){var m=this.nativeEvent;m&&(m.stopPropagation?m.stopPropagation():typeof m.cancelBubble!="unknown"&&(m.cancelBubble=!0),this.isPropagationStopped=Ie)},persist:function(){this.isPersistent=Ie},isPersistent:Bn,destructor:function(){var m=this.constructor.Interface,I;for(I in m)this[I]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=Bn,this._dispatchInstances=this._dispatchListeners=null}}),Tn.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(m){return m.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null},Tn.extend=function(m){function I(){}function K(){return pe.apply(this,arguments)}var pe=this;I.prototype=pe.prototype;var _=new I;return n(_,K.prototype),K.prototype=_,K.prototype.constructor=K,K.Interface=n({},pe.Interface,m),K.extend=pe.extend,Qe(K),K},Qe(Tn);function On(m,I,K,pe){if(this.eventPool.length){var _=this.eventPool.pop();return this.call(_,m,I,K,pe),_}return new this(m,I,K,pe)}function fn(m){if(!(m instanceof this))throw Error(L(279));m.destructor(),10>this.eventPool.length&&this.eventPool.push(m)}function Qe(m){m.eventPool=[],m.getPooled=On,m.release=fn}var Wn=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined");function Kn(m,I){var K={};return K[m.toLowerCase()]=I.toLowerCase(),K["Webkit"+m]="webkit"+I,K["Moz"+m]="moz"+I,K}var Rn={animationend:Kn("Animation","AnimationEnd"),animationiteration:Kn("Animation","AnimationIteration"),animationstart:Kn("Animation","AnimationStart"),transitionend:Kn("Transition","TransitionEnd")},we={},zn={};Wn&&(zn=document.createElement("div").style,"AnimationEvent"in window||(delete Rn.animationend.animation,delete Rn.animationiteration.animation,delete Rn.animationstart.animation),"TransitionEvent"in window||delete Rn.transitionend.transition);function Ln(m){if(we[m])return we[m];if(!Rn[m])return m;var I=Rn[m],K;for(K in I)if(I.hasOwnProperty(K)&&K in zn)return we[m]=I[K];return m}var qn=Ln("animationend"),ct=Ln("animationiteration"),P=Ln("animationstart"),D=Ln("transitionend"),F=null;function d(m){if(F===null)try{var I=("require"+Math.random()).slice(0,7);F=(x&&x[I])("timers").setImmediate}catch(K){F=function(pe){var _=new MessageChannel;_.port1.onmessage=pe,_.port2.postMessage(void 0)}}return F(m)}var l=W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,v=l[11],b=l[12],O=W.unstable_batchedUpdates,a=tn.IsSomeRendererActing,o=typeof me.unstable_flushAllWithoutAsserting=="function",s=me.unstable_flushAllWithoutAsserting||function(){for(var m=!1;v();)m=!0;return m};function B(m){try{s(),d(function(){s()?B(m):m()})}catch(I){m(I)}}var A=0,j=!1,u=W.findDOMNode,N=W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,f=N[0],r=N[4],g=N[5],p=N[6],T=N[7],M=N[8],U=N[9],ne=N[10];function ae(){}function ye(m,I){if(!m)return[];if(m=rt(m),!m)return[];for(var K=m,pe=[];;){if(K.tag===5||K.tag===6||K.tag===1||K.tag===0){var _=K.stateNode;I(_)&&pe.push(_)}if(K.child)K.child.return=K,K=K.child;else{if(K===m)return pe;for(;!K.sibling;){if(!K.return||K.return===m)return pe;K=K.return}K.sibling.return=K.return,K=K.sibling}}}function je(m,I){if(m&&!m._reactInternalFiber){var K=""+m;throw m=Array.isArray(m)?"an array":m&&m.nodeType===1&&m.tagName?"a DOM node":K==="[object Object]"?"object with keys {"+Object.keys(m).join(", ")+"}":K,Error(L(286,I,m))}}var Te={renderIntoDocument:function(m){var I=document.createElement("div");return W.render(m,I)},isElement:function(m){return h.isValidElement(m)},isElementOfType:function(m,I){return h.isValidElement(m)&&m.type===I},isDOMComponent:function(m){return!(!m||m.nodeType!==1||!m.tagName)},isDOMComponentElement:function(m){return!!(m&&h.isValidElement(m)&&m.tagName)},isCompositeComponent:function(m){return Te.isDOMComponent(m)?!1:m!=null&&typeof m.render=="function"&&typeof m.setState=="function"},isCompositeComponentWithType:function(m,I){return Te.isCompositeComponent(m)?m._reactInternalFiber.type===I:!1},findAllInRenderedTree:function(m,I){return je(m,"findAllInRenderedTree"),m?ye(m._reactInternalFiber,I):[]},scryRenderedDOMComponentsWithClass:function(m,I){return je(m,"scryRenderedDOMComponentsWithClass"),Te.findAllInRenderedTree(m,function(K){if(Te.isDOMComponent(K)){var pe=K.className;typeof pe!="string"&&(pe=K.getAttribute("class")||"");var _=pe.split(/\s+/);if(!Array.isArray(I)){if(I===void 0)throw Error(L(11));I=I.split(/\s+/)}return I.every(function(Fe){return _.indexOf(Fe)!==-1})}return!1})},findRenderedDOMComponentWithClass:function(m,I){if(je(m,"findRenderedDOMComponentWithClass"),m=Te.scryRenderedDOMComponentsWithClass(m,I),m.length!==1)throw Error("Did not find exactly one match (found: "+m.length+") for class:"+I);return m[0]},scryRenderedDOMComponentsWithTag:function(m,I){return je(m,"scryRenderedDOMComponentsWithTag"),Te.findAllInRenderedTree(m,function(K){return Te.isDOMComponent(K)&&K.tagName.toUpperCase()===I.toUpperCase()})},findRenderedDOMComponentWithTag:function(m,I){if(je(m,"findRenderedDOMComponentWithTag"),m=Te.scryRenderedDOMComponentsWithTag(m,I),m.length!==1)throw Error("Did not find exactly one match (found: "+m.length+") for tag:"+I);return m[0]},scryRenderedComponentsWithType:function(m,I){return je(m,"scryRenderedComponentsWithType"),Te.findAllInRenderedTree(m,function(K){return Te.isCompositeComponentWithType(K,I)})},findRenderedComponentWithType:function(m,I){if(je(m,"findRenderedComponentWithType"),m=Te.scryRenderedComponentsWithType(m,I),m.length!==1)throw Error("Did not find exactly one match (found: "+m.length+") for componentType:"+I);return m[0]},mockComponent:function(m,I){return I=I||m.mockTagName||"div",m.prototype.render.mockImplementation(function(){return h.createElement(I,null,this.props.children)}),this},nativeTouchData:function(m,I){return{touches:[{pageX:m,pageY:I}]}},Simulate:null,SimulateNative:{},act:function(m){function I(){A--,a.current=K,b.current=pe}j===!1&&(j=!0,console.error("act(...) is not supported in production builds of React, and might not behave as expected.")),A++;var K=a.current,pe=b.current;a.current=!0,b.current=!0;try{var _=O(m)}catch(Fe){throw I(),Fe}if(_!==null&&typeof _=="object"&&typeof _.then=="function")return{then:function(Fe,Ue){_.then(function(){1<A||o===!0&&K===!0?(I(),Fe()):B(function(Ge){I(),Ge?Ue(Ge):Fe()})},function(Ge){I(),Ue(Ge)})}};try{A!==1||o!==!1&&K!==!1||s(),I()}catch(Fe){throw I(),Fe}return{then:function(Fe){Fe()}}}};function gn(m){return function(I,K){if(h.isValidElement(I))throw Error(L(228));if(Te.isCompositeComponent(I))throw Error(L(229));var pe=r[m],_=new ae;_.target=I,_.type=m.toLowerCase();var Fe=f(I),Ue=new Tn(pe,Fe,_,I);Ue.persist(),n(Ue,K),pe.phasedRegistrationNames?g(Ue):p(Ue),W.unstable_batchedUpdates(function(){T(I),ne(Ue)}),M()}}Te.Simulate={};for(var $n in r)Te.Simulate[$n]=gn($n);function _n(m,I){return function(K,pe){var _=new ae(m);n(_,pe),Te.isDOMComponent(K)?(K=u(K),_.target=K,U(I,1,document,_)):K.tagName&&(_.target=K,U(I,1,document,_))}}[["abort","abort"],[qn,"animationEnd"],[ct,"animationIteration"],[P,"animationStart"],["blur","blur"],["canplaythrough","canPlayThrough"],["canplay","canPlay"],["cancel","cancel"],["change","change"],["click","click"],["close","close"],["compositionend","compositionEnd"],["compositionstart","compositionStart"],["compositionupdate","compositionUpdate"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["dragstart","dragStart"],["drag","drag"],["drop","drop"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],["ended","ended"],["error","error"],["focus","focus"],["input","input"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["loadstart","loadStart"],["loadstart","loadStart"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["mousedown","mouseDown"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["playing","playing"],["progress","progress"],["ratechange","rateChange"],["scroll","scroll"],["seeked","seeked"],["seeking","seeking"],["selectionchange","selectionChange"],["stalled","stalled"],["suspend","suspend"],["textInput","textInput"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchmove","touchMove"],["touchstart","touchStart"],[D,"transitionEnd"],["volumechange","volumeChange"],["waiting","waiting"],["wheel","wheel"]].forEach(function(m){var I=m[1];Te.SimulateNative[I]=_n(I,m[0])}),x.exports=Te.default||Te}).call(this,e("hOG+")(Nn))},JjdP:function(Nn,hn,e){"use strict";e.r(hn);var x=e("9og8"),n=e("WmNS"),h=e.n(n),W=e("LtsZ"),me=`import React, { useRef } from 'react';
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

export default Demo;`,Rn=`import React from 'react';
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

export default Demo;`,ct=hn.default={"guide-card":{component:Object(W.dynamic)({loader:function(){var P=Object(x.a)(h.a.mark(function F(){return h.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(22)]).then(e.bind(null,"oLxE"));case 2:return l.abrupt("return",l.sent.default);case 3:case"end":return l.stop()}},F)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:me}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"card-render":{version:"0.1.2"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"0.x"}},identifier:"guide-card"}},"chart-render-demo":{component:Object(W.dynamic)({loader:function(){var P=Object(x.a)(h.a.mark(function F(){var d,l,v,b,O,a,o;return h.a.wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return a=function(j,u){if(!u&&j&&j.__esModule)return j;if(j===null||typeof j!="object"&&typeof j!="function")return{default:j};var N=O(u);if(N&&N.has(j))return N.get(j);var f={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var g in j)if(g!=="default"&&Object.prototype.hasOwnProperty.call(j,g)){var p=r?Object.getOwnPropertyDescriptor(j,g):null;p&&(p.get||p.set)?Object.defineProperty(f,g,p):f[g]=j[g]}return f.default=j,N&&N.set(j,f),f},O=function(j){if(typeof WeakMap!="function")return null;var u=new WeakMap,N=new WeakMap;return(O=function(r){return r?N:u})(j)},d=e("K+nK"),B.t0=d,B.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return B.t1=B.sent,l=(0,B.t0)(B.t1),B.t2=a,B.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return B.t3=B.sent,v=(0,B.t2)(B.t3),B.next=15,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 15:return b=B.sent,o=function(){var j=(0,v.useState)("Line"),u=(0,l.default)(j,2),N=u[0],f=u[1],r={Line:b.Line,Column:b.Column,PivotTable:b.PivotTable}[N];return v.default.createElement("div",null,v.default.createElement("div",{style:{marginBottom:10}},v.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return f("Line")}},"\u6298\u7EBF\u56FE"),v.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return f("Column")}},"\u67F1\u72B6\u56FE"),v.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return f("PivotTable")}},"\u4EA4\u53C9\u8868")),v.default.createElement(r,{meta:[{id:"date",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF",isDim:!1},{id:"uv",name:"\u8BBF\u5BA2\u6570",isDim:!1}],data:[{date:"20200101",pv:100,uv:50},{date:"20200102",pv:120,uv:60},{date:"20200103",pv:140,uv:70},{date:"20200104",pv:160,uv:80}]}))},B.abrupt("return",o);case 18:case"end":return B.stop()}},F)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"chart-render-demo"}},"column-demo":{component:Object(W.dynamic)({loader:function(){var P=Object(x.a)(h.a.mark(function F(){var d,l,v,b;return h.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,l=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=a.sent,b=function(){return l.default.createElement(v.Column,{meta:[{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{pv:50,uv:20}]})},a.abrupt("return",b);case 11:case"end":return a.stop()}},F)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: 'pv', name: '\u8BBF\u95EE\u91CF' },
      { id: 'uv', name: '\u8BBF\u5BA2\u6570' },
    ]}
    data={[{ pv: 50, uv: 20 }]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo"}},"column-demo-1":{component:Object(W.dynamic)({loader:function(){var P=Object(x.a)(h.a.mark(function F(){var d,l,v,b;return h.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,l=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=a.sent,b=function(){return l.default.createElement(v.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},a.abrupt("return",b);case 11:case"end":return a.stop()}},F)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-1"}},"column-demo-2":{component:Object(W.dynamic)({loader:function(){var P=Object(x.a)(h.a.mark(function F(){var d,l,v,b;return h.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,l=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=a.sent,b=function(){return l.default.createElement(v.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},a.abrupt("return",b);case 11:case"end":return a.stop()}},F)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-2"}},"column-demo-3":{component:Object(W.dynamic)({loader:function(){var P=Object(x.a)(h.a.mark(function F(){var d,l,v,b;return h.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,l=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=a.sent,b=function(){return l.default.createElement(v.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},a.abrupt("return",b);case 11:case"end":return a.stop()}},F)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-3"}},"column-demo-4":{component:Object(W.dynamic)({loader:function(){var P=Object(x.a)(h.a.mark(function F(){var d,l,v,b;return h.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,l=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=a.sent,b=function(){return l.default.createElement(v.Column,{inverted:!0,label:{position:"middle",layout:[{type:"interval-adjust-position"},{type:"interval-hide-overlap"},{type:"adjust-color"}]},meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},a.abrupt("return",b);case 11:case"end":return a.stop()}},F)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-4"}},"line-demo":{component:Object(W.dynamic)({loader:function(){var P=Object(x.a)(h.a.mark(function F(){var d,l,v,b;return h.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,l=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=a.sent,b=function(){return l.default.createElement(v.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},a.abrupt("return",b);case 11:case"end":return a.stop()}},F)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo"}},"line-demo-1":{component:Object(W.dynamic)({loader:function(){var P=Object(x.a)(h.a.mark(function F(){var d,l,v,b;return h.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,l=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=a.sent,b=function(){return l.default.createElement(v.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},a.abrupt("return",b);case 11:case"end":return a.stop()}},F)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-1"}},"line-demo-2":{component:Object(W.dynamic)({loader:function(){var P=Object(x.a)(h.a.mark(function F(){var d,l,v,b;return h.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,l=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=a.sent,b=function(){return l.default.createElement(v.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"},{id:"pv",name:"\u8BBF\u95EE\u91CF"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20,pv:120},{ds:"2020-12-31",page:"\u9996\u9875",uv:120,pv:1120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21,pv:121},{ds:"2021-01-01",page:"\u9996\u9875",uv:121,pv:1121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15,pv:115},{ds:"2021-01-02",page:"\u9996\u9875",uv:115,pv:1115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40,pv:140},{ds:"2021-01-03",page:"\u9996\u9875",uv:140,pv:1140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31,pv:131},{ds:"2021-01-04",page:"\u9996\u9875",uv:131,pv:1131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32,pv:132},{ds:"2021-01-05",page:"\u9996\u9875",uv:132,pv:1132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30,pv:130},{ds:"2021-01-06",page:"\u9996\u9875",uv:130,pv:1130}]})},a.abrupt("return",b);case 11:case"end":return a.stop()}},F)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-2"}},"line-demo-3":{component:Object(W.dynamic)({loader:function(){var P=Object(x.a)(h.a.mark(function F(){var d,l,v,b;return h.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,l=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=a.sent,b=function(){return l.default.createElement(v.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},a.abrupt("return",b);case 11:case"end":return a.stop()}},F)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-3"}},"line-demo-4":{component:Object(W.dynamic)({loader:function(){var P=Object(x.a)(h.a.mark(function F(){var d,l,v,b;return h.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,l=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=a.sent,b=function(){return l.default.createElement(v.Line,{withArea:!0,isStack:!0,isPercent:!0,meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},a.abrupt("return",b);case 11:case"end":return a.stop()}},F)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-4"}},"pivot-table-demo":{component:Object(W.dynamic)({loader:function(){var P=Object(x.a)(h.a.mark(function F(){var d,l,v,b;return h.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,l=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=a.sent,b=function(){return l.default.createElement(v.PivotTable,{style:{maxHeight:400,overflow:"auto"},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},a.abrupt("return",b);case 11:case"end":return a.stop()}},F)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo"}},"pivot-table-demo-1":{component:Object(W.dynamic)({loader:function(){var P=Object(x.a)(h.a.mark(function F(){var d,l,v,b;return h.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=e("K+nK"),a.t0=d,a.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return a.t1=a.sent,l=(0,a.t0)(a.t1),a.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return v=a.sent,b=function(){return l.default.createElement(v.PivotTable,{style:{maxHeight:400,overflow:"auto"},cellRender:function(B,A,j){return l.default.createElement("div",null,l.default.createElement("p",null,"\u53C2\u6570\u8868\uFF1A"),l.default.createElement("p",{style:{color:["red","orange","yellow","green","blue"][Object.keys(A).length]}},B),l.default.createElement("p",null,JSON.stringify(A)),l.default.createElement("p",null,JSON.stringify(j)))},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},a.abrupt("return",b);case 11:case"end":return a.stop()}},F)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-1"}},"pivot-table-demo-2":{component:Object(W.dynamic)({loader:function(){var P=Object(x.a)(h.a.mark(function F(){var d,l,v,b,O,a,o;return h.a.wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return a=function(j,u){if(!u&&j&&j.__esModule)return j;if(j===null||typeof j!="object"&&typeof j!="function")return{default:j};var N=O(u);if(N&&N.has(j))return N.get(j);var f={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var g in j)if(g!=="default"&&Object.prototype.hasOwnProperty.call(j,g)){var p=r?Object.getOwnPropertyDescriptor(j,g):null;p&&(p.get||p.set)?Object.defineProperty(f,g,p):f[g]=j[g]}return f.default=j,N&&N.set(j,f),f},O=function(j){if(typeof WeakMap!="function")return null;var u=new WeakMap,N=new WeakMap;return(O=function(r){return r?N:u})(j)},d=e("K+nK"),B.t0=d,B.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return B.t1=B.sent,l=(0,B.t0)(B.t1),B.t2=a,B.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return B.t3=B.sent,v=(0,B.t2)(B.t3),B.next=15,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 15:return b=B.sent,o=function(){var j=(0,v.useState)(!1),u=(0,l.default)(j,2),N=u[0],f=u[1];return v.default.createElement(v.default.Fragment,null,v.default.createElement("label",null,"\u53EF\u5C55\u5F00/\u6536\u7F29\uFF1A",v.default.createElement("input",{type:"checkbox",value:N,onChange:function(){return f(!N)}})),v.default.createElement(b.PivotTable,{leftExpandable:N,showSubtotal:!1,meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]}))},B.abrupt("return",o);case 18:case"end":return B.stop()}},F)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-2"}},"form-render-demo":{component:Object(W.dynamic)({loader:function(){var P=Object(x.a)(h.a.mark(function F(){var d,l,v,b,O,a,o,s,B,A,j,u,N,f;return h.a.wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return j=function(T,M){if(!M&&T&&T.__esModule)return T;if(T===null||typeof T!="object"&&typeof T!="function")return{default:T};var U=A(M);if(U&&U.has(T))return U.get(T);var ne={},ae=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ye in T)if(ye!=="default"&&Object.prototype.hasOwnProperty.call(T,ye)){var je=ae?Object.getOwnPropertyDescriptor(T,ye):null;je&&(je.get||je.set)?Object.defineProperty(ne,ye,je):ne[ye]=T[ye]}return ne.default=T,U&&U.set(T,ne),ne},A=function(T){if(typeof WeakMap!="function")return null;var M=new WeakMap,U=new WeakMap;return(A=function(ae){return ae?U:M})(T)},d=e("K+nK"),g.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return g.t0=d,g.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return g.t1=g.sent,l=(0,g.t0)(g.t1),g.t2=d,g.next=13,e.e(70).then(e.bind(null,"fWQN"));case 13:return g.t3=g.sent,v=(0,g.t2)(g.t3),g.t4=d,g.next=18,e.e(71).then(e.bind(null,"mtLc"));case 18:return g.t5=g.sent,b=(0,g.t4)(g.t5),g.t6=d,g.next=23,e.e(64).then(e.bind(null,"yKVA"));case 23:return g.t7=g.sent,O=(0,g.t6)(g.t7),g.t8=d,g.next=28,e.e(62).then(e.bind(null,"879j"));case 28:return g.t9=g.sent,a=(0,g.t8)(g.t9),g.t10=d,g.next=33,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 33:return g.t11=g.sent,o=(0,g.t10)(g.t11),g.next=37,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 37:return s=g.sent,g.t12=j,g.next=41,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 41:return g.t13=g.sent,B=(0,g.t12)(g.t13),u={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},N=function(p){(0,O.default)(M,p);var T=(0,a.default)(M);function M(){return(0,v.default)(this,M),T.apply(this,arguments)}return(0,b.default)(M,[{key:"render",value:function(){var ne=this.props.form;return o.default.createElement("div",null,o.default.createElement(B.default,{form:ne,schema:u}),o.default.createElement(l.default,{type:"primary",onClick:ne.submit},"\u63D0\u4EA4"))}}]),M}(o.default.Component),f=(0,B.connectForm)(N),g.abrupt("return",f);case 47:case"end":return g.stop()}},F)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default connectForm(Demo);`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo"}},"form-render-demo-1":{component:Object(W.dynamic)({loader:function(){var P=Object(x.a)(h.a.mark(function F(){var d,l,v,b,O,a,o,s,B,A;return h.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return o=function(f,r){if(!r&&f&&f.__esModule)return f;if(f===null||typeof f!="object"&&typeof f!="function")return{default:f};var g=a(r);if(g&&g.has(f))return g.get(f);var p={},T=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var M in f)if(M!=="default"&&Object.prototype.hasOwnProperty.call(f,M)){var U=T?Object.getOwnPropertyDescriptor(f,M):null;U&&(U.get||U.set)?Object.defineProperty(p,M,U):p[M]=f[M]}return p.default=f,g&&g.set(f,p),p},a=function(f){if(typeof WeakMap!="function")return null;var r=new WeakMap,g=new WeakMap;return(a=function(T){return T?g:r})(f)},d=e("K+nK"),u.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return u.t0=d,u.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return u.t1=u.sent,l=(0,u.t0)(u.t1),u.t2=d,u.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return u.t3=u.sent,v=(0,u.t2)(u.t3),u.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 17:return b=u.sent,u.t4=o,u.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 21:return u.t5=u.sent,O=(0,u.t4)(u.t5),s={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},B=function(){var f=(0,O.useForm)();return v.default.createElement("div",null,v.default.createElement(O.default,{form:f,schema:s}),v.default.createElement(l.default,{type:"primary",onClick:f.submit},"\u63D0\u4EA4"))},A=B,u.abrupt("return",A);case 27:case"end":return u.stop()}},F)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo-1"}},"form-render-demo-2":{component:Object(W.dynamic)({loader:function(){var P=Object(x.a)(h.a.mark(function F(){var d,l,v,b,O,a,o,s,B,A;return h.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return o=function(f,r){if(!r&&f&&f.__esModule)return f;if(f===null||typeof f!="object"&&typeof f!="function")return{default:f};var g=a(r);if(g&&g.has(f))return g.get(f);var p={},T=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var M in f)if(M!=="default"&&Object.prototype.hasOwnProperty.call(f,M)){var U=T?Object.getOwnPropertyDescriptor(f,M):null;U&&(U.get||U.set)?Object.defineProperty(p,M,U):p[M]=f[M]}return p.default=f,g&&g.set(f,p),p},a=function(f){if(typeof WeakMap!="function")return null;var r=new WeakMap,g=new WeakMap;return(a=function(T){return T?g:r})(f)},d=e("K+nK"),u.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return u.t0=d,u.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return u.t1=u.sent,l=(0,u.t0)(u.t1),u.t2=d,u.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return u.t3=u.sent,v=(0,u.t2)(u.t3),u.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 17:return b=u.sent,u.t4=o,u.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 21:return u.t5=u.sent,O=(0,u.t4)(u.t5),s={displayType:"row",labelWidth:60,type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F",type:"range",format:"date"},siteUrl:{title:"\u7F51\u5740",type:"string",placeholder:"\u6B64\u5904\u5FC5\u586B",required:!0,props:{addonBefore:"https://",addonAfter:".com"}}}},B=function(){var f=(0,O.useForm)(),r=function(p,T){T.length>0?alert("errors:"+JSON.stringify(T)):alert("formData:"+JSON.stringify(p,null,2))};return v.default.createElement("div",null,v.default.createElement(O.default,{form:f,schema:s,onFinish:r}),v.default.createElement(l.default,{type:"primary",onClick:f.submit},"\u63D0\u4EA4"))},A=B,u.abrupt("return",A);case 27:case"end":return u.stop()}},F)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-demo-2"}},"migrate-demo":{component:Object(W.dynamic)({loader:function(){var P=Object(x.a)(h.a.mark(function F(){var d,l,v,b,O,a,o,s;return h.a.wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return o=function(){var u=(0,v.useForm)(),N=function(r,g){g.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(g))):alert(JSON.stringify(r))};return l.default.createElement("div",null,l.default.createElement(v.default,{form:u,schema:a,onFinish:N}),l.default.createElement("button",{onClick:u.submit},"\u63D0\u4EA4"))},O=function(u,N){if(!N&&u&&u.__esModule)return u;if(u===null||typeof u!="object"&&typeof u!="function")return{default:u};var f=b(N);if(f&&f.has(u))return f.get(u);var r={},g=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var p in u)if(p!=="default"&&Object.prototype.hasOwnProperty.call(u,p)){var T=g?Object.getOwnPropertyDescriptor(u,p):null;T&&(T.get||T.set)?Object.defineProperty(r,p,T):r[p]=u[p]}return r.default=u,f&&f.set(u,r),r},b=function(u){if(typeof WeakMap!="function")return null;var N=new WeakMap,f=new WeakMap;return(b=function(g){return g?f:N})(u)},d=e("K+nK"),A.t0=d,A.next=7,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 7:return A.t1=A.sent,l=(0,A.t0)(A.t1),A.t2=O,A.next=12,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 12:return A.t3=A.sent,v=(0,A.t2)(A.t3),a={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}},s=o,A.abrupt("return",s);case 17:case"end":return A.stop()}},F)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate-demo"}},"display-demo":{component:Object(W.dynamic)({loader:function(){var P=Object(x.a)(h.a.mark(function F(){var d,l,v,b,O;return h.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return d=e("K+nK"),o.t0=d,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,l=(0,o.t0)(o.t1),o.t2=d,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,v=(0,o.t2)(o.t3),b=function(B){return{type:"object",displayType:B,properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},objectName:{title:"\u5BF9\u8C61",bind:"obj",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},O=function(){return l.default.createElement("div",null,l.default.createElement("h2",null,"display: row"),l.default.createElement(v.default,{schema:b("row")}),l.default.createElement("h2",null,"display: column"),l.default.createElement(v.default,{schema:b("column")}))},o.abrupt("return",O);case 14:case"end":return o.stop()}},F)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo"}},"display-demo-1":{component:Object(W.dynamic)({loader:function(){var P=Object(x.a)(h.a.mark(function F(){var d,l,v,b,O;return h.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return d=e("K+nK"),o.t0=d,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,l=(0,o.t0)(o.t1),o.t2=d,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,v=(0,o.t2)(o.t3),b={type:"object",displayType:"inline",properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},O=function(){return l.default.createElement(v.default,{schema:b})},o.abrupt("return",O);case 14:case"end":return o.stop()}},F)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-1"}},"display-demo-2":{component:Object(W.dynamic)({loader:function(){var P=Object(x.a)(h.a.mark(function F(){var d,l,v,b,O;return h.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return d=e("K+nK"),o.t0=d,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,l=(0,o.t0)(o.t1),o.t2=d,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,v=(0,o.t2)(o.t3),b={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0},check:{title:"box",type:"boolean",default:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},O=function(){return l.default.createElement(v.default,{readOnly:!0,schema:b})},o.abrupt("return",O);case 14:case"end":return o.stop()}},F)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form readOnly schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-2"}},"display-demo-3":{component:Object(W.dynamic)({loader:function(){var P=Object(x.a)(h.a.mark(function F(){var d,l,v,b,O;return h.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return d=e("K+nK"),o.t0=d,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,l=(0,o.t0)(o.t1),o.t2=d,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,v=(0,o.t2)(o.t3),b={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0,width:"50%"},check:{title:"box",type:"boolean",default:!0,width:"50%",labelWidth:6},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},O=function(){return l.default.createElement(v.default,{labelWidth:"200",schema:b})},o.abrupt("return",O);case 14:case"end":return o.stop()}},F)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form labelWidth="200" schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-3"}},"display-demo-4":{component:Object(W.dynamic)({loader:function(){var P=Object(x.a)(h.a.mark(function F(){var d,l,v,b,O,a;return h.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,l=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,v=(0,s.t2)(s.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},O=function(){return l.default.createElement(v.default,{schema:b})},a=O,s.abrupt("return",a);case 15:case"end":return s.stop()}},F)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-4"}},"display-demo-5":{component:Object(W.dynamic)({loader:function(){var P=Object(x.a)(h.a.mark(function F(){var d,l,v,b,O,a;return h.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,l=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,v=(0,s.t2)(s.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},O=function(){return l.default.createElement(v.default,{schema:b})},a=O,s.abrupt("return",a);case 15:case"end":return s.stop()}},F)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-5"}},"display-demo-6":{component:Object(W.dynamic)({loader:function(){var P=Object(x.a)(h.a.mark(function F(){var d,l,v,b,O,a;return h.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,l=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,v=(0,s.t2)(s.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},O=function(){return l.default.createElement(v.default,{schema:b})},a=O,s.abrupt("return",a);case 15:case"end":return s.stop()}},F)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-6"}},"display-demo-7":{component:Object(W.dynamic)({loader:function(){var P=Object(x.a)(h.a.mark(function F(){var d,l,v,b,O,a;return h.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,l=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,v=(0,s.t2)(s.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},O=function(){return l.default.createElement(v.default,{schema:b})},a=O,s.abrupt("return",a);case 15:case"end":return s.stop()}},F)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-7"}},"form-methods-demo":{component:Object(W.dynamic)({loader:function(){var P=Object(x.a)(h.a.mark(function F(){var d,l,v,b,O,a,o,s,B,A,j,u,N;return h.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return j=function(p,T){if(!T&&p&&p.__esModule)return p;if(p===null||typeof p!="object"&&typeof p!="function")return{default:p};var M=A(T);if(M&&M.has(p))return M.get(p);var U={},ne=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ae in p)if(ae!=="default"&&Object.prototype.hasOwnProperty.call(p,ae)){var ye=ne?Object.getOwnPropertyDescriptor(p,ae):null;ye&&(ye.get||ye.set)?Object.defineProperty(U,ae,ye):U[ae]=p[ae]}return U.default=p,M&&M.set(p,U),U},A=function(p){if(typeof WeakMap!="function")return null;var T=new WeakMap,M=new WeakMap;return(A=function(ne){return ne?M:T})(p)},d=e("K+nK"),r.next=5,e.e(18).then(e.t.bind(null,"lfLe",7));case 5:return r.t0=d,r.next=8,e.e(19).then(e.t.bind(null,"Cp9S",7));case 8:return r.t1=r.sent,l=(0,r.t0)(r.t1),r.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return r.t2=d,r.next=15,e.e(13).then(e.t.bind(null,"4IMT",7));case 15:return r.t3=r.sent,v=(0,r.t2)(r.t3),r.next=19,e.e(14).then(e.t.bind(null,"tL+A",7));case 19:return r.t4=d,r.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return r.t5=r.sent,b=(0,r.t4)(r.t5),r.t6=d,r.next=27,Promise.resolve().then(e.bind(null,"tJVT"));case 27:return r.t7=r.sent,O=(0,r.t6)(r.t7),r.t8=j,r.next=32,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 32:return r.t9=r.sent,a=(0,r.t8)(r.t9),r.next=36,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 36:return o=r.sent,r.t10=j,r.next=40,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 40:return r.t11=r.sent,s=(0,r.t10)(r.t11),r.next=44,e.e(15).then(e.bind(null,"OH0R"));case 44:return B=r.sent,u=function(){var p=(0,s.useForm)(),T=(0,a.useState)({}),M=(0,O.default)(T,2),U=M[0],ne=M[1],ae=function(){(0,B.fakeApi)("xxx/getForm").then(function(Te){p.setValues({input1:"hello world",select1:"c"})})};(0,a.useEffect)(function(){(0,B.delay)(1e3).then(function(je){ne({type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}})})},[]);var ye=function(Te,gn){gn.length>0?b.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(gn.map(function($n){return $n.name}))):(0,B.fakeApi)("xxx/submit",Te).then(function($n){return b.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})};return a.default.createElement("div",{style:{width:"400px"}},a.default.createElement(s.default,{form:p,schema:U,onFinish:ye}),a.default.createElement(l.default,null,a.default.createElement(v.default,{onClick:ae},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),a.default.createElement(v.default,{type:"primary",onClick:p.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},N=u,r.abrupt("return",N);case 48:case"end":return r.stop()}},F)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:tn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo"}},"form-methods-demo-1":{component:Object(W.dynamic)({loader:function(){var P=Object(x.a)(h.a.mark(function F(){var d,l,v,b,O,a,o,s,B,A,j,u,N;return h.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return A=function(p,T){if(!T&&p&&p.__esModule)return p;if(p===null||typeof p!="object"&&typeof p!="function")return{default:p};var M=B(T);if(M&&M.has(p))return M.get(p);var U={},ne=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ae in p)if(ae!=="default"&&Object.prototype.hasOwnProperty.call(p,ae)){var ye=ne?Object.getOwnPropertyDescriptor(p,ae):null;ye&&(ye.get||ye.set)?Object.defineProperty(U,ae,ye):U[ae]=p[ae]}return U.default=p,M&&M.set(p,U),U},B=function(p){if(typeof WeakMap!="function")return null;var T=new WeakMap,M=new WeakMap;return(B=function(ne){return ne?M:T})(p)},d=e("K+nK"),r.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return r.t0=d,r.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return r.t1=r.sent,l=(0,r.t0)(r.t1),r.t2=d,r.next=13,Promise.resolve().then(e.bind(null,"PpiC"));case 13:return r.t3=r.sent,v=(0,r.t2)(r.t3),r.next=17,e.e(14).then(e.t.bind(null,"tL+A",7));case 17:return r.t4=d,r.next=20,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 20:return r.t5=r.sent,b=(0,r.t4)(r.t5),r.t6=d,r.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return r.t7=r.sent,O=(0,r.t6)(r.t7),r.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 29:return a=r.sent,r.t8=A,r.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 33:return r.t9=r.sent,o=(0,r.t8)(r.t9),r.next=37,e.e(15).then(e.bind(null,"OH0R"));case 37:return s=r.sent,j={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},u=function(){var p=(0,o.useForm)(),T=function(ne,ae){ae.length>0?b.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(ae.map(function(ye){return ye.name}))):(0,s.fakeApi)("xxx/submit",ne).then(function(ye){return b.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},M=function(ne){var ae=ne.data,ye=ne.errors,je=ne.schema,Te=(0,v.default)(ne,["data","errors","schema"]);return(0,s.fakeApi)("xxx/validation").then(function(gn){return{name:"select1",error:["\u5916\u90E8\u6821\u9A8C\u9519\u8BEF"]}})};return O.default.createElement("div",{style:{width:"400px"}},O.default.createElement(o.default,{form:p,schema:j,beforeFinish:M,onFinish:T}),O.default.createElement(l.default,{type:"primary",onClick:p.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},N=u,r.abrupt("return",N);case 42:case"end":return r.stop()}},F)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:tn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-1"}},"form-methods-demo-2":{component:Object(W.dynamic)({loader:function(){var P=Object(x.a)(h.a.mark(function F(){var d,l,v,b,O,a,o,s,B,A,j,u,N;return h.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return A=function(p,T){if(!T&&p&&p.__esModule)return p;if(p===null||typeof p!="object"&&typeof p!="function")return{default:p};var M=B(T);if(M&&M.has(p))return M.get(p);var U={},ne=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ae in p)if(ae!=="default"&&Object.prototype.hasOwnProperty.call(p,ae)){var ye=ne?Object.getOwnPropertyDescriptor(p,ae):null;ye&&(ye.get||ye.set)?Object.defineProperty(U,ae,ye):U[ae]=p[ae]}return U.default=p,M&&M.set(p,U),U},B=function(p){if(typeof WeakMap!="function")return null;var T=new WeakMap,M=new WeakMap;return(B=function(ne){return ne?M:T})(p)},d=e("K+nK"),r.next=5,e.e(18).then(e.t.bind(null,"lfLe",7));case 5:return r.t0=d,r.next=8,e.e(19).then(e.t.bind(null,"Cp9S",7));case 8:return r.t1=r.sent,l=(0,r.t0)(r.t1),r.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return r.t2=d,r.next=15,e.e(13).then(e.t.bind(null,"4IMT",7));case 15:return r.t3=r.sent,v=(0,r.t2)(r.t3),r.next=19,e.e(14).then(e.t.bind(null,"tL+A",7));case 19:return r.t4=d,r.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return r.t5=r.sent,b=(0,r.t4)(r.t5),r.t6=d,r.next=27,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 27:return r.t7=r.sent,O=(0,r.t6)(r.t7),r.next=31,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 31:return a=r.sent,r.t8=A,r.next=35,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 35:return r.t9=r.sent,o=(0,r.t8)(r.t9),r.next=39,e.e(15).then(e.bind(null,"OH0R"));case 39:return s=r.sent,j={type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F\u8303\u56F4",type:"range",format:"date"}}},u=function(){var p=(0,o.useForm)(),T=function(ne,ae){ae.length>0?b.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(ae.map(function(ye){return ye.name}))):(0,s.fakeApi)("xxx/submit",ne).then(function(ye){return b.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},M=function(){(0,s.fakeApi)("xxx/getForm").then(function(ne){p.setValues({startDate:"2020-04-04",endDate:"2020-04-24"})})};return O.default.createElement("div",{style:{width:"400px"}},O.default.createElement(o.default,{form:p,schema:j,onFinish:T}),O.default.createElement(l.default,null,O.default.createElement(v.default,{onClick:M},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),O.default.createElement(v.default,{type:"primary",onClick:p.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},N=u,r.abrupt("return",N);case 44:case"end":return r.stop()}},F)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:tn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-2"}},"form-methods-demo-3":{component:Object(W.dynamic)({loader:function(){var P=Object(x.a)(h.a.mark(function F(){var d,l,v,b,O,a,o,s,B,A,j,u;return h.a.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return B=function(g,p){if(!p&&g&&g.__esModule)return g;if(g===null||typeof g!="object"&&typeof g!="function")return{default:g};var T=s(p);if(T&&T.has(g))return T.get(g);var M={},U=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ne in g)if(ne!=="default"&&Object.prototype.hasOwnProperty.call(g,ne)){var ae=U?Object.getOwnPropertyDescriptor(g,ne):null;ae&&(ae.get||ae.set)?Object.defineProperty(M,ne,ae):M[ne]=g[ne]}return M.default=g,T&&T.set(g,M),M},s=function(g){if(typeof WeakMap!="function")return null;var p=new WeakMap,T=new WeakMap;return(s=function(U){return U?T:p})(g)},d=e("K+nK"),f.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return f.t0=d,f.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return f.t1=f.sent,l=(0,f.t0)(f.t1),f.next=12,e.e(14).then(e.t.bind(null,"tL+A",7));case 12:return f.t2=d,f.next=15,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 15:return f.t3=f.sent,v=(0,f.t2)(f.t3),f.t4=B,f.next=20,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 20:return f.t5=f.sent,b=(0,f.t4)(f.t5),f.next=24,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 24:return O=f.sent,f.t6=B,f.next=28,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 28:return f.t7=f.sent,a=(0,f.t6)(f.t7),f.next=32,e.e(15).then(e.bind(null,"OH0R"));case 32:return o=f.sent,A={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select1:{title:"\u5355\u9009",type:"string",widget:"select"}}}}},j=function(){var g=(0,a.useForm)(),p=function(){g.setSchemaByPath("obj1.select1",{enum:["east","south","west","north"],enumNames:["\u4E1C","\u5357","\u897F","\u5317"]})},T=function(U,ne){ne.length>0?v.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(ne.map(function(ae){return ae.name}))):v.default.info(JSON.stringify(U))};return b.default.createElement("div",{style:{width:"400px"}},b.default.createElement(a.default,{form:g,schema:A,onMount:p,onFinish:T}),b.default.createElement(l.default,{type:"primary",onClick:g.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},u=j,f.abrupt("return",u);case 37:case"end":return f.stop()}},F)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:tn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-3"}},"function-demo":{component:Object(W.dynamic)({loader:function(){var P=Object(x.a)(h.a.mark(function F(){var d,l,v,b,O,a,o,s;return h.a.wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return O=function(u,N){if(!N&&u&&u.__esModule)return u;if(u===null||typeof u!="object"&&typeof u!="function")return{default:u};var f=b(N);if(f&&f.has(u))return f.get(u);var r={},g=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var p in u)if(p!=="default"&&Object.prototype.hasOwnProperty.call(u,p)){var T=g?Object.getOwnPropertyDescriptor(u,p):null;T&&(T.get||T.set)?Object.defineProperty(r,p,T):r[p]=u[p]}return r.default=u,f&&f.set(u,r),r},b=function(u){if(typeof WeakMap!="function")return null;var N=new WeakMap,f=new WeakMap;return(b=function(g){return g?f:N})(u)},d=e("K+nK"),A.t0=d,A.next=6,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 6:return A.t1=A.sent,l=(0,A.t0)(A.t1),A.t2=O,A.next=11,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 11:return A.t3=A.sent,v=(0,A.t2)(A.t3),a={type:"object",properties:{select1:{title:"\u5355\u9009",description:"\u5C1D\u8BD5\u9009\u62E9\u201C\u663E\u793A\u8F93\u5165\u6846\u201D",type:"string",enum:["a","b"],enumNames:["\u9690\u85CF\u8F93\u5165\u6846","\u663E\u793A\u8F93\u5165\u6846"],disabled:"{{rootValue.input1.length > 5}}",default:"a"},input1:{title:"\u8F93\u5165\u6846",description:"\u5C1D\u8BD5\u8F93\u5165\u8D85\u8FC75\u4E2A\u5B57\u7B26",type:"string",hidden:'{{formData.select1 == "a"}}'}}},o=function(){var u=(0,v.useForm)();return l.default.createElement(v.default,{form:u,schema:a})},s=o,A.abrupt("return",s);case 17:case"end":return A.stop()}},F)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo1;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo"}},"function-demo-1":{component:Object(W.dynamic)({loader:function(){var P=Object(x.a)(h.a.mark(function F(){var d,l,v,b,O;return h.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return d=e("K+nK"),o.t0=d,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,l=(0,o.t0)(o.t1),o.t2=d,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return o.t3=o.sent,v=(0,o.t2)(o.t3),o.next=13,e.e(17).then(e.bind(null,"8iYR"));case 13:return b=o.sent,O=function(){return l.default.createElement(v.default,{schema:b.expression})},o.abrupt("return",O);case 16:case"end":return o.stop()}},F)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { expression } from '../json/schema';

export default () => <FR schema={expression} />;`},"demo/FR.jsx":{import:"../demo/FR",content:Ne},"json/schema.js":{import:"../json/schema",content:de}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo-1"}},"lifeCycle-demo":{component:Object(W.dynamic)({loader:function(){var P=Object(x.a)(h.a.mark(function F(){var d,l,v,b,O,a,o,s,B;return h.a.wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return O=function(N,f){if(!f&&N&&N.__esModule)return N;if(N===null||typeof N!="object"&&typeof N!="function")return{default:N};var r=b(f);if(r&&r.has(N))return r.get(N);var g={},p=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var T in N)if(T!=="default"&&Object.prototype.hasOwnProperty.call(N,T)){var M=p?Object.getOwnPropertyDescriptor(N,T):null;M&&(M.get||M.set)?Object.defineProperty(g,T,M):g[T]=N[T]}return g.default=N,r&&r.set(N,g),g},b=function(N){if(typeof WeakMap!="function")return null;var f=new WeakMap,r=new WeakMap;return(b=function(p){return p?r:f})(N)},j.t0=O,j.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return j.t1=j.sent,d=(0,j.t0)(j.t1),j.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 9:return l=j.sent,j.t2=O,j.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 13:return j.t3=j.sent,v=(0,j.t2)(j.t3),a=function(N){return new Promise(function(f){return setTimeout(f,N)})},o={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u4E0B\u62C9\u9009\u6846",description:"\u52A0\u8F7D\u4E2D...",type:"string",enum:[],widget:"select"}}},s=function(){var N=(0,v.useForm)(),f=function(){N.setValues({input1:"hello world"}),a(3e3).then(function(g){N.setSchemaByPath("select1",{description:"",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]})})};return d.default.createElement(v.default,{form:N,schema:o,onMount:f})},B=s,j.abrupt("return",B);case 20:case"end":return j.stop()}},F)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"lifeCycle-demo"}},"listDisplay-demo":{component:Object(W.dynamic)({loader:function(){var P=Object(x.a)(h.a.mark(function F(){var d,l,v,b,O,a;return h.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,l=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,v=(0,s.t2)(s.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},O=function(){return l.default.createElement(v.default,{schema:b})},a=O,s.abrupt("return",a);case 15:case"end":return s.stop()}},F)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo"}},"listDisplay-demo-1":{component:Object(W.dynamic)({loader:function(){var P=Object(x.a)(h.a.mark(function F(){var d,l,v,b,O,a;return h.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,l=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,v=(0,s.t2)(s.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},O=function(){return l.default.createElement(v.default,{schema:b})},a=O,s.abrupt("return",a);case 15:case"end":return s.stop()}},F)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-1"}},"listDisplay-demo-2":{component:Object(W.dynamic)({loader:function(){var P=Object(x.a)(h.a.mark(function F(){var d,l,v,b,O,a;return h.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,l=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,v=(0,s.t2)(s.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},O=function(){return l.default.createElement(v.default,{schema:b})},a=O,s.abrupt("return",a);case 15:case"end":return s.stop()}},F)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-2"}},"listDisplay-demo-3":{component:Object(W.dynamic)({loader:function(){var P=Object(x.a)(h.a.mark(function F(){var d,l,v,b,O,a;return h.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,l=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,v=(0,s.t2)(s.t3),b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},O=function(){return l.default.createElement(v.default,{schema:b})},a=O,s.abrupt("return",a);case 15:case"end":return s.stop()}},F)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-3"}},"listDisplay-demo-4":{component:Object(W.dynamic)({loader:function(){var P=Object(x.a)(h.a.mark(function F(){var d,l,v,b,O,a;return h.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,l=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"bQjt"));case 9:return s.t3=s.sent,v=(0,s.t2)(s.t3),window.hello=function(B){var A=B.value;console.log(A)},b={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list4",itemProps:{buttons:[{callback:"hello",text:"\u590D\u5236"}]},items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},O=function(){return l.default.createElement(v.default,{schema:b})},a=O,s.abrupt("return",a);case 16:case"end":return s.stop()}},F)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"listDisplay-demo-4"}},"watch-demo":{component:Object(W.dynamic)({loader:function(){var P=Object(x.a)(h.a.mark(function F(){var d,l,v,b,O,a,o,s;return h.a.wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return O=function(u,N){if(!N&&u&&u.__esModule)return u;if(u===null||typeof u!="object"&&typeof u!="function")return{default:u};var f=b(N);if(f&&f.has(u))return f.get(u);var r={},g=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var p in u)if(p!=="default"&&Object.prototype.hasOwnProperty.call(u,p)){var T=g?Object.getOwnPropertyDescriptor(u,p):null;T&&(T.get||T.set)?Object.defineProperty(r,p,T):r[p]=u[p]}return r.default=u,f&&f.set(u,r),r},b=function(u){if(typeof WeakMap!="function")return null;var N=new WeakMap,f=new WeakMap;return(b=function(g){return g?f:N})(u)},A.t0=O,A.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return A.t1=A.sent,d=(0,A.t0)(A.t1),A.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 9:return l=A.sent,A.t2=O,A.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 13:return A.t3=A.sent,v=(0,A.t2)(A.t3),a={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"}}},o=function(){var u=(0,v.useForm)(),N={"#":function(r){console.log("\u8868\u5355\u7684\u65F6\u65F6\u6570\u636E\u4E3A\uFF1A",r)},input1:function(r){u.setValueByPath("input2",r)}};return d.default.createElement(v.default,{form:u,schema:a,watch:N})},s=o,A.abrupt("return",s);case 19:case"end":return A.stop()}},F)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo"}},"watch-demo-1":{component:Object(W.dynamic)({loader:function(){var P=Object(x.a)(h.a.mark(function F(){var d,l,v,b,O,a,o,s,B,A;return h.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return o=function(f,r){if(!r&&f&&f.__esModule)return f;if(f===null||typeof f!="object"&&typeof f!="function")return{default:f};var g=a(r);if(g&&g.has(f))return g.get(f);var p={},T=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var M in f)if(M!=="default"&&Object.prototype.hasOwnProperty.call(f,M)){var U=T?Object.getOwnPropertyDescriptor(f,M):null;U&&(U.get||U.set)?Object.defineProperty(p,M,U):p[M]=f[M]}return p.default=f,g&&g.set(f,p),p},a=function(f){if(typeof WeakMap!="function")return null;var r=new WeakMap,g=new WeakMap;return(a=function(T){return T?g:r})(f)},d=e("K+nK"),u.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return u.t0=d,u.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return u.t1=u.sent,l=(0,u.t0)(u.t1),u.t2=o,u.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return u.t3=u.sent,v=(0,u.t2)(u.t3),u.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 17:return b=u.sent,u.t4=o,u.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 21:return u.t5=u.sent,O=(0,u.t4)(u.t5),s={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"radio"}}}}},B=function(){var f=(0,O.useForm)(),r=function(T,M){M.length>0?alert("errorFields:"+JSON.stringify(M)):alert("formData:"+JSON.stringify(T,null,2))},g={input1:function(T){T.length>2?f.setSchemaByPath("obj1.select",function(M){var U=M.enumNames;return{enumNames:U.map(function(ne){return ne+"a"})}}):f.setSchemaByPath("obj1.select",{enumNames:["\u65E9","\u4E2D","\u665A"]})}};return v.default.createElement("div",null,v.default.createElement(O.default,{form:f,schema:s,onFinish:r,watch:g}),v.default.createElement(l.default,{type:"",style:{marginRight:8},onClick:function(){return f.setSchemaByPath("input2",{title:"\u7F16\u8F91\u6846",format:"textarea"})}},"\u5C06 input \u6539\u4E3A textarea"),v.default.createElement(l.default,{type:"primary",onClick:f.submit},"\u63D0\u4EA4"))},A=B,u.abrupt("return",A);case 27:case"end":return u.stop()}},F)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo-1"}},"widget-demo":{component:Object(W.dynamic)({loader:function(){var P=Object(x.a)(h.a.mark(function F(){var d,l,v,b,O,a,o,s,B,A,j,u,N;return h.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return B=function(p,T){if(!T&&p&&p.__esModule)return p;if(p===null||typeof p!="object"&&typeof p!="function")return{default:p};var M=s(T);if(M&&M.has(p))return M.get(p);var U={},ne=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ae in p)if(ae!=="default"&&Object.prototype.hasOwnProperty.call(p,ae)){var ye=ne?Object.getOwnPropertyDescriptor(p,ae):null;ye&&(ye.get||ye.set)?Object.defineProperty(U,ae,ye):U[ae]=p[ae]}return U.default=p,M&&M.set(p,U),U},s=function(p){if(typeof WeakMap!="function")return null;var T=new WeakMap,M=new WeakMap;return(s=function(ne){return ne?M:T})(p)},d=e("K+nK"),r.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return r.t0=d,r.next=8,e.e(13).then(e.t.bind(null,"4IMT",7));case 8:return r.t1=r.sent,l=(0,r.t0)(r.t1),r.next=12,Promise.all([e.e(3),e.e(63)]).then(e.t.bind(null,"cUip",7));case 12:return r.t2=d,r.next=15,Promise.all([e.e(0),e.e(13),e.e(61),e.e(69)]).then(e.t.bind(null,"iJl9",7));case 15:return r.t3=r.sent,v=(0,r.t2)(r.t3),r.t4=d,r.next=20,e.e(72).then(e.bind(null,"0Owb"));case 20:return r.t5=r.sent,b=(0,r.t4)(r.t5),r.t6=B,r.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return r.t7=r.sent,O=(0,r.t6)(r.t7),r.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(11),e.e(12)]).then(e.bind(null,"gdfu"));case 29:return a=r.sent,r.t8=B,r.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(9)]).then(e.bind(null,"refC"));case 33:return r.t9=r.sent,o=(0,r.t8)(r.t9),A={type:"object",properties:{string:{title:"\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6",type:"string",widget:"site"},select:{title:"\u5355\u9009",type:"number",enum:[1,2,3],enumNames:["\u9009\u98791","\u9009\u98792","\u9009\u98793"]}}},j=function(p){return console.log("widget props:",p),O.default.createElement(v.default,(0,b.default)({addonBefore:"http://",addonAfter:".com"},p))},u=function(){var p=(0,o.useForm)(),T=function(){};return O.default.createElement("div",null,O.default.createElement(o.default,{readOnly:!0,form:p,schema:A,widgets:{site:j},onFinish:function(U){return alert(JSON.stringify(U,null,2))}}),O.default.createElement(l.default,{type:"primary",onClick:p.submit},"\u63D0\u4EA4"))},N=u,r.abrupt("return",N);case 40:case"end":return r.stop()}},F)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},"react-dom":{version:">=16.8.0"}},identifier:"widget-demo"}},"schema-demo":{component:Object(W.dynamic)({loader:function(){var P=Object(x.a)(h.a.mark(function F(){var d,l,v,b,O;return h.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return d=e("K+nK"),o.t0=d,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,l=(0,o.t0)(o.t1),o.t2=d,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return o.t3=o.sent,v=(0,o.t2)(o.t3),o.next=13,e.e(17).then(e.bind(null,"8iYR"));case 13:return b=o.sent,O=function(){return l.default.createElement(v.default,{schema:b.basic})},o.abrupt("return",O);case 16:case"end":return o.stop()}},F)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { basic } from '../json/schema';

export default () => <FR schema={basic} />;`},"demo/FR.jsx":{import:"../demo/FR",content:Ne},"json/schema.js":{import:"../json/schema",content:de}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo"}},"schema-demo-1":{component:Object(W.dynamic)({loader:function(){var P=Object(x.a)(h.a.mark(function F(){var d,l,v,b,O;return h.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return d=e("K+nK"),o.t0=d,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,l=(0,o.t0)(o.t1),o.t2=d,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return o.t3=o.sent,v=(0,o.t2)(o.t3),o.next=13,e.e(17).then(e.bind(null,"8iYR"));case 13:return b=o.sent,O=function(){return l.default.createElement(v.default,{schema:b.titleTrick})},o.abrupt("return",O);case 16:case"end":return o.stop()}},F)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { titleTrick } from '../json/schema';

export default () => <FR schema={titleTrick} />;`},"demo/FR.jsx":{import:"../demo/FR",content:Ne},"json/schema.js":{import:"../json/schema",content:de}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.4.5-beta.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo-1"}},"docs-playground":{component:Object(W.dynamic)({loader:function(){var P=Object(x.a)(h.a.mark(function F(){return h.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(22)]).then(e.bind(null,"BASV"));case 2:return l.abrupt("return",l.sent.default);case 3:case"end":return l.stop()}},F)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:rt},"main.js":{import:"./main",content:Ie},"json/simplest.json":{import:"./json/simplest.json",content:Bn},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:Tn},"monaco/index.js":{import:"./monaco",content:On},"suggestionsMap.js":{import:"./suggestionsMap",content:fn},"index.css":{import:"./index.css",content:Qe}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:"^17.x"},"react-dom":{version:">=16.9.0"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.4.5-beta.0"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-monaco-editor":{version:"0.43.0"},"@types/react":{version:"^17.x"}},identifier:"docs-playground"}},"table-render-advanced":{component:Object(W.dynamic)({loader:function(){var P=Object(x.a)(h.a.mark(function F(){return h.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(22)]).then(e.bind(null,"7ZP+"));case 2:return l.abrupt("return",l.sent.default);case 3:case"end":return l.stop()}},F)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{tsx:Wn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.0"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"1.x"}},transform:!0,defaultShowCode:!0,identifier:"table-render-advanced"}},"table-render-demo":{component:Object(W.dynamic)({loader:function(){var P=Object(x.a)(h.a.mark(function F(){var d,l,v,b,O,a,o,s,B;return h.a.wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return d=e("K+nK"),j.t0=d,j.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return j.t1=j.sent,l=(0,j.t0)(j.t1),j.next=8,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(59)]).then(e.bind(null,"P2DI"));case 8:for(v=j.sent,b=[],O=0;O<6;O++)b.push({id:O.toString(),title:"\u6807\u9898".concat(O+1),created_at:new Date().getTime()});return a={type:"object",properties:{string:{title:"\u6807\u9898",type:"string","ui:width":"30%"},created_at:{title:"\u521B\u5EFA\u65F6\u95F4",type:"string",format:"date","ui:width":"30%"}}},o=[{title:"\u6807\u9898",dataIndex:"title"},{title:"\u521B\u5EFA\u65F6\u95F4",key:"since",dataIndex:"created_at",valueType:"date"},{title:"\u64CD\u4F5C",render:function(N,f){return l.default.createElement("a",{onClick:function(){return alert(N.title)}},"\u7F16\u8F91")}}],s=function(){var N=function(){return{rows:b,total:b.length}};return l.default.createElement(v.TableProvider,null,l.default.createElement(v.Search,{schema:a,api:N}),l.default.createElement(v.Table,{headerTitle:"\u6700\u7B80\u8868\u683C",columns:o,rowKey:"id"}))},B=s,j.abrupt("return",B);case 16:case"end":return j.stop()}},F)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Wrapper;`}},dependencies:{react:{version:">=16.8.0"},"table-render":{version:"1.1.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.x"}},transform:!0,defaultShowCode:!0,identifier:"table-render-demo"}},"generator-demo":{component:Object(W.dynamic)({loader:function(){var P=Object(x.a)(h.a.mark(function F(){var d,l,v,b,O,a;return h.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return d=e("K+nK"),s.t0=d,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,l=(0,s.t0)(s.t1),s.t2=d,s.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(60)]).then(e.bind(null,"nYSz"));case 9:return s.t3=s.sent,v=(0,s.t2)(s.t3),b={type:"object",properties:{inputName:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string"}}},O=function(){return l.default.createElement("div",{style:{height:"80vh"}},l.default.createElement(v.default,{defaultValue:b}))},a=O,s.abrupt("return",a);case 15:case"end":return s.stop()}},F)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"generator-demo"}},"generator-modal":{component:Object(W.dynamic)({loader:function(){var P=Object(x.a)(h.a.mark(function F(){return h.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(22)]).then(e.bind(null,"PPgD"));case 2:return l.abrupt("return",l.sent.default);case 3:case"end":return l.stop()}},F)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:Kn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.4.0"},"react-dom":{version:">=16.9.0"}},identifier:"generator-modal"}},"generator-settings":{component:Object(W.dynamic)({loader:function(){var P=Object(x.a)(h.a.mark(function F(){return h.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(22)]).then(e.bind(null,"M63W"));case 2:return l.abrupt("return",l.sent.default);case 3:case"end":return l.stop()}},F)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:Rn}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-settings"}},"generator-layout":{component:Object(W.dynamic)({loader:function(){var P=Object(x.a)(h.a.mark(function F(){return h.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(22)]).then(e.bind(null,"SOdT"));case 2:return l.abrupt("return",l.sent.default);case 3:case"end":return l.stop()}},F)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:we},"index.less":{import:"./index.less",content:zn}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-layout"}},"generator-transformer":{component:Object(W.dynamic)({loader:function(){var P=Object(x.a)(h.a.mark(function F(){return h.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(22)]).then(e.bind(null,"jktF"));case 2:return l.abrupt("return",l.sent.default);case 3:case"end":return l.stop()}},F)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:Ln}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.4.0"},"react-dom":{version:">=16.9.0"}},identifier:"generator-transformer"}},"generator-playground":{component:Object(W.dynamic)({loader:function(){var P=Object(x.a)(h.a.mark(function F(){return h.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(22)]).then(e.bind(null,"TYW4"));case 2:return l.abrupt("return",l.sent.default);case 3:case"end":return l.stop()}},F)}));function D(){return P.apply(this,arguments)}return D}()}),previewerProps:{sources:{_:{jsx:qn},"index.less":{import:"./index.less",content:zn}},dependencies:{react:{version:">=16.8.0"},umi:{version:"3.4.20"},"fr-generator":{version:"2.4.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-playground"}}}},TIsu:function(Nn,hn,e){},Zs1V:function(Nn){Nn.exports=JSON.parse("{}")},p8sG:function(Nn,hn,e){"use strict";Nn.exports=e("80pN")}}]);
