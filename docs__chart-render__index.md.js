(window.webpackJsonp=window.webpackJsonp||[]).push([[28,9],{"0zqC":function(Nn,gn,e){"use strict";e.r(gn);var x=e("tJVT"),n=e("q1tI"),y=e.n(n),V=e("wx14"),ce=e("rePB"),$=e("ODXe"),tn=e("U8pU"),Ie=e("Ff2n"),me=e("VTBJ"),at=e("TSYQ"),je=e.n(at),Mn=e("Zm9Q"),Tn=e("5Z9U"),On=e("6cGi"),fn=e("KQm4"),Ye=e("wgJM"),Ln=e("t23M");function wn(t){var r=Object(n.useRef)(),o=Object(n.useRef)(!1);function h(){for(var E=arguments.length,v=new Array(E),C=0;C<E;C++)v[C]=arguments[C];o.current||(Ye.a.cancel(r.current),r.current=Object(Ye.a)(function(){t.apply(void 0,v)}))}return Object(n.useEffect)(function(){return function(){o.current=!0,Ye.a.cancel(r.current)}},[]),h}function Rn(t){var r=Object(n.useRef)([]),o=Object(n.useState)({}),h=Object($.a)(o,2),E=h[1],v=Object(n.useRef)(typeof t=="function"?t():t),C=wn(function(){var W=v.current;r.current.forEach(function(K){W=K(W)}),r.current=[],v.current=W,E({})});function R(W){r.current.push(W),C()}return[v.current,R]}var we=e("4IlW");function kn(t,r){var o,h=t.prefixCls,E=t.id,v=t.active,C=t.rtl,R=t.tab,W=R.key,K=R.tab,L=R.disabled,G=R.closeIcon,J=t.tabBarGutter,se=t.tabPosition,X=t.closable,Y=t.renderWrapper,le=t.removeAriaLabel,U=t.editable,q=t.onClick,ae=t.onRemove,Q=t.onFocus,ue="".concat(h,"-tab");n.useEffect(function(){return ae},[]);var k={};se==="top"||se==="bottom"?k[C?"marginLeft":"marginRight"]=J:k.marginBottom=J;var be=U&&X!==!1&&!L;function ne(re){L||q(re)}function de(re){re.preventDefault(),re.stopPropagation(),U.onEdit("remove",{key:W,event:re})}var fe=n.createElement("div",{key:W,ref:r,className:je()(ue,(o={},Object(ce.a)(o,"".concat(ue,"-with-remove"),be),Object(ce.a)(o,"".concat(ue,"-active"),v),Object(ce.a)(o,"".concat(ue,"-disabled"),L),o)),style:k,onClick:ne},n.createElement("div",{role:"tab","aria-selected":v,id:E&&"".concat(E,"-tab-").concat(W),className:"".concat(ue,"-btn"),"aria-controls":E&&"".concat(E,"-panel-").concat(W),"aria-disabled":L,tabIndex:L?null:0,onClick:function(H){H.stopPropagation(),ne(H)},onKeyDown:function(H){[we.a.SPACE,we.a.ENTER].includes(H.which)&&(H.preventDefault(),ne(H))},onFocus:Q},K),be&&n.createElement("button",{type:"button","aria-label":le||"remove",tabIndex:0,className:"".concat(ue,"-remove"),onClick:function(H){H.stopPropagation(),de(H)}},G||U.removeIcon||"\xD7"));return Y&&(fe=Y(fe)),fe}var $n=n.forwardRef(kn),rt={width:0,height:0,left:0,top:0};function M(t,r,o){return Object(n.useMemo)(function(){for(var h,E=new Map,v=r.get((h=t[0])===null||h===void 0?void 0:h.key)||rt,C=v.left+v.width,R=0;R<t.length;R+=1){var W=t[R].key,K=r.get(W);if(!K){var L;K=r.get((L=t[R-1])===null||L===void 0?void 0:L.key)||rt}var G=E.get(W)||Object(me.a)({},K);G.right=C-G.left-G.width,E.set(W,G)}return E},[t.map(function(h){return h.key}).join("_"),r,o])}var B={width:0,height:0,left:0,top:0,right:0};function T(t,r,o,h,E){var v=E.tabs,C=E.tabPosition,R=E.rtl,W,K,L;["top","bottom"].includes(C)?(W="width",K=R?"right":"left",L=Math.abs(r.left)):(W="height",K="top",L=-r.top);var G=r[W],J=o[W],se=h[W],X=G;return J+se>G&&(X=G-se),Object(n.useMemo)(function(){if(!v.length)return[0,0];for(var Y=v.length,le=Y,U=0;U<Y;U+=1){var q=t.get(v[U].key)||B;if(q[K]+q[W]>L+X){le=U-1;break}}for(var ae=0,Q=Y-1;Q>=0;Q-=1){var ue=t.get(v[Q].key)||B;if(ue[K]<L){ae=Q+1;break}}return[ae,le]},[t,L,X,C,v.map(function(Y){return Y.key}).join("_"),R])}var f=e("Gytx"),u=e.n(f),g=e("Kwbf");function O(t,r){var o=t.prefixCls,h=t.invalidate,E=t.item,v=t.renderItem,C=t.responsive,R=t.registerSize,W=t.itemKey,K=t.className,L=t.style,G=t.children,J=t.display,se=t.order,X=t.component,Y=X===void 0?"div":X,le=Object(Ie.a)(t,["prefixCls","invalidate","item","renderItem","responsive","registerSize","itemKey","className","style","children","display","order","component"]),U=C&&!J;function q(be){R(W,be)}n.useEffect(function(){return function(){q(null)}},[]);var ae=v&&E!==void 0?v(E):G,Q;h||(Q={opacity:U?0:1,height:U?0:void 0,overflowY:U?"hidden":void 0,order:C?se:void 0,pointerEvents:U?"none":void 0});var ue={};U&&(ue["aria-hidden"]=!0);var k=n.createElement(Y,Object(V.a)({className:je()(!h&&o,K),style:Object(me.a)(Object(me.a)({},Q),L)},ue,le,{ref:r}),ae);return C&&(k=n.createElement(Ln.default,{onResize:function(ne){var de=ne.offsetWidth;q(de)}},k)),k}var F=n.forwardRef(O);F.displayName="Item";var i=F;function l(){var t=Object(n.useState)({}),r=Object($.a)(t,2),o=r[1],h=Object(n.useRef)([]),E=Object(n.useRef)(!1),v=0,C=0;Object(n.useEffect)(function(){return function(){E.current=!0}},[]);function R(W){var K=v;v+=1,h.current.length<K+1&&(h.current[K]=W);var L=h.current[K];function G(J){h.current[K]=typeof J=="function"?J(h.current[K]):J,Ye.a.cancel(C),C=Object(Ye.a)(function(){E.current||o({})})}return[L,G]}return R}var b=function(r,o){var h=n.useContext(S);if(!h){var E=r.component,v=E===void 0?"div":E,C=Object(Ie.a)(r,["component"]);return n.createElement(v,Object(V.a)({},C,{ref:o}))}var R=h.className,W=Object(Ie.a)(h,["className"]),K=r.className,L=Object(Ie.a)(r,["className"]);return n.createElement(S.Provider,{value:null},n.createElement(i,Object(V.a)({ref:o,className:je()(R,K)},W,L)))},N=n.forwardRef(b);N.displayName="RawItem";var I=N,S=n.createContext(null),s="responsive",A="invalidate";function d(t){return"+ ".concat(t.length," ...")}function a(t,r){var o=t.prefixCls,h=o===void 0?"rc-overflow":o,E=t.data,v=E===void 0?[]:E,C=t.renderItem,R=t.renderRawItem,W=t.itemKey,K=t.itemWidth,L=K===void 0?10:K,G=t.ssr,J=t.style,se=t.className,X=t.maxCount,Y=t.renderRest,le=t.renderRawRest,U=t.suffix,q=t.component,ae=q===void 0?"div":q,Q=t.itemComponent,ue=t.onVisibleChange,k=Object(Ie.a)(t,["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"]),be=l(),ne=G==="full",de=be(null),fe=Object($.a)(de,2),re=fe[0],H=fe[1],oe=re||0,ye=be(new Map),he=Object($.a)(ye,2),Re=he[0],Ke=he[1],Ee=be(0),Oe=Object($.a)(Ee,2),Me=Oe[0],Be=Oe[1],De=be(0),Pe=Object($.a)(De,2),$e=Pe[0],qe=Pe[1],Ve=be(0),Ue=Object($.a)(Ve,2),xe=Ue[0],Le=Ue[1],Sn=Object(n.useState)(null),an=Object($.a)(Sn,2),Qe=an[0],ln=an[1],yn=Object(n.useState)(null),bn=Object($.a)(yn,2),Ae=bn[0],He=bn[1],_e=n.useMemo(function(){return Ae===null&&ne?Number.MAX_SAFE_INTEGER:Ae||0},[Ae,re]),Ze=Object(n.useState)(!1),Wn=Object($.a)(Ze,2),Un=Wn[0],Kn=Wn[1],rn="".concat(h,"-item"),Pn=Math.max(Me,$e),on=v.length&&X===s,Dn=X===A,en=on||typeof X=="number"&&v.length>X,sn=Object(n.useMemo)(function(){var ve=v;return on?re===null&&ne?ve=v:ve=v.slice(0,Math.min(v.length,oe/L)):typeof X=="number"&&(ve=v.slice(0,X)),ve},[v,L,re,X,on]),jn=Object(n.useMemo)(function(){return on?v.slice(_e+1):v.slice(sn.length)},[v,sn,on,_e]),cn=Object(n.useCallback)(function(ve,Fe){var Te;return typeof W=="function"?W(ve):(Te=W&&(ve==null?void 0:ve[W]))!==null&&Te!==void 0?Te:Fe},[W]),ke=Object(n.useCallback)(C||function(ve){return ve},[C]);function Xe(ve,Fe){He(ve),Fe||(Kn(ve<v.length-1),ue==null||ue(ve))}function Jn(ve,Fe){H(Fe.clientWidth)}function Gn(ve,Fe){Ke(function(Te){var nn=new Map(Te);return Fe===null?nn.delete(ve):nn.set(ve,Fe),nn})}function et(ve,Fe){qe(Fe),Be($e)}function En(ve,Fe){Le(Fe)}function hn(ve){return Re.get(cn(sn[ve],ve))}n.useLayoutEffect(function(){if(oe&&Pn&&sn){var ve=xe,Fe=sn.length,Te=Fe-1;if(!Fe){Xe(0),ln(null);return}for(var nn=0;nn<Fe;nn+=1){var Yn=hn(nn);if(Yn===void 0){Xe(nn-1,!0);break}if(ve+=Yn,nn===Te-1&&ve+hn(Te)<=oe){Xe(Te),ln(null);break}else if(ve+Pn>oe){Xe(nn-1),ln(ve-Yn-xe+$e);break}else if(nn===Te){Xe(Te),ln(ve-xe);break}}U&&hn(0)+xe>oe&&ln(null)}},[oe,Re,$e,xe,cn,sn]);var Hn=Un&&!!jn.length,Cn={};Qe!==null&&on&&(Cn={position:"absolute",left:Qe,top:0});var mn={prefixCls:rn,responsive:on,component:Q,invalidate:Dn},Xn=R?function(ve,Fe){var Te=cn(ve,Fe);return n.createElement(S.Provider,{key:Te,value:Object(me.a)(Object(me.a)({},mn),{},{order:Fe,item:ve,itemKey:Te,registerSize:Gn,display:Fe<=_e})},R(ve,Fe))}:function(ve,Fe){var Te=cn(ve,Fe);return n.createElement(i,Object(V.a)({},mn,{order:Fe,key:Te,item:ve,renderItem:ke,itemKey:Te,registerSize:Gn,display:Fe<=_e}))},An,xn={order:Hn?_e:Number.MAX_SAFE_INTEGER,className:"".concat(rn,"-rest"),registerSize:et,display:Hn};if(le)le&&(An=n.createElement(S.Provider,{value:Object(me.a)(Object(me.a)({},mn),xn)},le(jn)));else{var dn=Y||d;An=n.createElement(i,Object(V.a)({},mn,xn),typeof dn=="function"?dn(jn):dn)}var In=n.createElement(ae,Object(V.a)({className:je()(!Dn&&h,se),style:J,ref:r},k),sn.map(Xn),en?An:null,U&&n.createElement(i,Object(V.a)({},mn,{order:_e,className:"".concat(rn,"-suffix"),registerSize:En,display:!0,style:Cn}),U));return on&&(In=n.createElement(Ln.default,{onResize:Jn},In)),In}var p=n.forwardRef(a);p.displayName="Overflow",p.Item=I,p.RESPONSIVE=s,p.INVALIDATE=A;var m=p,P=m,w=e("1OyB"),z=e("vuIU"),_=e("Ji7U"),ie=e("LK+K"),ge=e("bT9E"),pn=e("YrtM"),We=n.createContext(null);function Ne(t,r){var o=Object(me.a)({},t);return Object.keys(r).forEach(function(h){var E=r[h];E!==void 0&&(o[h]=E)}),o}function Fn(t){var r=t.children,o=t.locked,h=Object(Ie.a)(t,["children","locked"]),E=n.useContext(We),v=Object(pn.a)(function(){return Ne(E,h)},[E,h],function(C,R){return!o&&(C[0]!==R[0]||!u()(C[1],R[1]))});return n.createElement(We.Provider,{value:v},r)}function it(t,r,o,h){var E=n.useContext(We),v=E.activeKey,C=E.onActive,R=E.onInactive,W={active:v===t};return r||(W.onMouseEnter=function(K){o==null||o({key:t,domEvent:K}),C(t)},W.onMouseLeave=function(K){h==null||h({key:t,domEvent:K}),R(t)}),W}function qn(t){var r=t.item,o=Object(Ie.a)(t,["item"]);return Object.defineProperty(o,"item",{get:function(){return Object(g.a)(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),r}}),o}function c(t){var r=t.icon,o=t.props,h=t.children,E;return typeof r=="function"?E=n.createElement(r,Object(me.a)({},o)):E=r,E||h||null}function D(t){var r=n.useContext(We),o=r.mode,h=r.rtl,E=r.inlineIndent;if(o!=="inline")return null;var v=t;return h?{paddingRight:v*E}:{paddingLeft:v*E}}var j=[],pe=n.createContext(null);function ee(){return n.useContext(pe)}var Se=n.createContext(j);function ze(t){var r=n.useContext(Se);return n.useMemo(function(){return t!==void 0?[].concat(Object(fn.a)(r),[t]):r},[r,t])}var Ge=n.createContext(null),Ut=n.createContext(null);function Jt(t,r){return t===void 0?null:"".concat(t,"-").concat(r)}function Gt(t){var r=n.useContext(Ut);return Jt(r,t)}var ba=function(t){Object(_.a)(o,t);var r=Object(ie.a)(o);function o(){return Object(w.a)(this,o),r.apply(this,arguments)}return Object(z.a)(o,[{key:"render",value:function(){var E=this.props,v=E.title,C=E.attribute,R=E.elementRef,W=Object(Ie.a)(E,["title","attribute","elementRef"]),K=Object(ge.a)(W,["eventKey"]);return Object(g.a)(!C,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),n.createElement(P.Item,Object(V.a)({},C,{title:typeof v=="string"?v:void 0},K,{ref:R}))}}]),o}(n.Component),Ea=function(r){var o,h=r.style,E=r.className,v=r.eventKey,C=r.disabled,R=r.itemIcon,W=r.children,K=r.role,L=r.onMouseEnter,G=r.onMouseLeave,J=r.onClick,se=r.onKeyDown,X=r.onFocus,Y=Object(Ie.a)(r,["style","className","eventKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"]),le=Gt(v),U=n.useContext(We),q=U.prefixCls,ae=U.onItemClick,Q=U.disabled,ue=U.overflowDisabled,k=U.itemIcon,be=U.selectedKeys,ne=U.onActive,de="".concat(q,"-item"),fe=n.useRef(),re=n.useRef(),H=Q||C,oe=ze(v),ye=function(Ve){return{key:v,keyPath:oe,item:fe.current,domEvent:Ve}},he=R||k,Re=it(v,H,L,G),Ke=Re.active,Ee=Object(Ie.a)(Re,["active"]),Oe=be.includes(v),Me=D(oe.length),Be=function(Ve){if(!H){var Ue=ye(Ve);J==null||J(qn(Ue)),ae(Ue)}},De=function(Ve){if(se==null||se(Ve),Ve.which===we.a.ENTER){var Ue=ye(Ve);J==null||J(qn(Ue)),ae(Ue)}},Pe=function(Ve){ne(v),X==null||X(Ve)},$e={};return r.role==="option"&&($e["aria-selected"]=Oe),n.createElement(ba,Object(V.a)({ref:fe,elementRef:re,role:K===null?"none":K||"menuitem",tabIndex:C?null:-1,"data-menu-id":ue&&le?null:le},Y,Ee,$e,{component:"li","aria-disabled":C,style:Object(me.a)(Object(me.a)({},Me),h),className:je()(de,(o={},Object(ce.a)(o,"".concat(de,"-active"),Ke),Object(ce.a)(o,"".concat(de,"-selected"),Oe),Object(ce.a)(o,"".concat(de,"-disabled"),H),o),E),onClick:Be,onKeyDown:De,onFocus:Pe}),W,n.createElement(c,{props:Object(me.a)(Object(me.a)({},r),{},{isSelected:Oe}),icon:he}))};function Ca(t){var r=t.eventKey,o=ee(),h=ze(r);return n.useEffect(function(){if(o)return o.registerPath(r,h),function(){o.unregisterPath(r,h)}},[h]),o?null:n.createElement(Ea,t)}var Pt=Ca;function Dt(t,r){return Object(Mn.a)(t).map(function(o,h){if(n.isValidElement(o)){var E=o.key;return E==null&&(E="tmp_key-".concat([].concat(Object(fn.a)(r),[h]).join("-"))),n.cloneElement(o,{key:E,eventKey:E})}return o})}function _n(t){var r=n.useRef(t);r.current=t;var o=n.useCallback(function(){for(var h,E=arguments.length,v=new Array(E),C=0;C<E;C++)v[C]=arguments[C];return(h=r.current)===null||h===void 0?void 0:h.call.apply(h,[r].concat(v))},[]);return t?o:void 0}var Oa=function(r,o){var h=r.className,E=r.children,v=Object(Ie.a)(r,["className","children"]),C=n.useContext(We),R=C.prefixCls,W=C.mode;return n.createElement("ul",Object(V.a)({className:je()(R,"".concat(R,"-sub"),"".concat(R,"-").concat(W==="inline"?"inline":"vertical"),h)},v,{"data-menu-list":!0,ref:o}),E)},Ht=n.forwardRef(Oa);Ht.displayName="SubMenuList";var Xt=Ht,Ra=e("uciX"),Vn={adjustX:1,adjustY:1},xt={topLeft:{points:["bl","tl"],overflow:Vn,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Vn,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:Vn,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:Vn,offset:[4,0]}},Fa={topLeft:{points:["bl","tl"],overflow:Vn,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Vn,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:Vn,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:Vn,offset:[4,0]}},fr=xt;function Yt(t,r,o){if(r)return r;if(o)return o[t]||o.other}var Sa={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function Pa(t){var r=t.prefixCls,o=t.visible,h=t.children,E=t.popup,v=t.popupClassName,C=t.popupOffset,R=t.disabled,W=t.mode,K=t.onVisibleChange,L=n.useContext(We),G=L.getPopupContainer,J=L.rtl,se=L.subMenuOpenDelay,X=L.subMenuCloseDelay,Y=L.builtinPlacements,le=L.triggerSubMenuAction,U=L.forceSubMenuRender,q=L.motion,ae=L.defaultMotions,Q=n.useState(!1),ue=Object($.a)(Q,2),k=ue[0],be=ue[1],ne=J?Object(me.a)(Object(me.a)({},Fa),Y):Object(me.a)(Object(me.a)({},xt),Y),de=Sa[W],fe=Yt(W,q,ae),re=Object(me.a)(Object(me.a)({},fe),{},{leavedClassName:"".concat(r,"-hidden"),removeOnLeave:!1,motionAppear:!0}),H=n.useRef();return n.useEffect(function(){return H.current=Object(Ye.a)(function(){be(o)}),function(){Ye.a.cancel(H.current)}},[o]),n.createElement(Ra.a,{prefixCls:r,popupClassName:je()("".concat(r,"-popup"),Object(ce.a)({},"".concat(r,"-rtl"),J),v),stretch:W==="horizontal"?"minWidth":null,getPopupContainer:G,builtinPlacements:ne,popupPlacement:de,popupVisible:k,popup:E,popupAlign:C&&{offset:C},action:R?[]:[le],mouseEnterDelay:se,mouseLeaveDelay:X,onPopupVisibleChange:K,forceRender:U,popupMotion:re},h)}var Da=e("8XRh");function ja(t){var r=t.id,o=t.open,h=t.keyPath,E=t.children,v="inline",C=n.useContext(We),R=C.prefixCls,W=C.forceSubMenuRender,K=C.motion,L=C.defaultMotions,G=C.mode,J=n.useRef(!1);J.current=G===v;var se=n.useState(!J.current),X=Object($.a)(se,2),Y=X[0],le=X[1],U=J.current?o:!1;n.useEffect(function(){J.current&&le(!1)},[G]);var q=Object(me.a)({},Yt(v,K,L));h.length>1&&(q.motionAppear=!1);var ae=q.onVisibleChanged;return q.onVisibleChanged=function(Q){return!J.current&&!Q&&le(!0),ae==null?void 0:ae(Q)},Y?null:n.createElement(Fn,{mode:v,locked:!J.current},n.createElement(Da.default,Object(V.a)({visible:U},q,{forceRender:W,removeOnLeave:!1,leavedClassName:"".concat(R,"-hidden")}),function(Q){var ue=Q.className,k=Q.style;return n.createElement(Xt,{id:r,className:ue,style:k},E)}))}var Aa=function(r){var o,h=r.style,E=r.className,v=r.title,C=r.eventKey,R=r.disabled,W=r.internalPopupClose,K=r.children,L=r.itemIcon,G=r.expandIcon,J=r.popupClassName,se=r.popupOffset,X=r.onClick,Y=r.onMouseEnter,le=r.onMouseLeave,U=r.onTitleClick,q=r.onTitleMouseEnter,ae=r.onTitleMouseLeave,Q=Object(Ie.a)(r,["style","className","title","eventKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"]),ue=Gt(C),k=n.useContext(We),be=k.prefixCls,ne=k.mode,de=k.openKeys,fe=k.disabled,re=k.overflowDisabled,H=k.activeKey,oe=k.selectedKeys,ye=k.itemIcon,he=k.expandIcon,Re=k.onItemClick,Ke=k.onOpenChange,Ee=k.onActive,Oe=n.useContext(Ge),Me=Oe.isSubPathKey,Be=ze(),De="".concat(be,"-submenu"),Pe=fe||R,$e=n.useRef(),qe=n.useRef(),Ve=L||ye,Ue=G||he,xe=de.includes(C),Le=!re&&xe,Sn=Me(oe,C),an=it(C,Pe,q,ae),Qe=an.active,ln=Object(Ie.a)(an,["active"]),yn=n.useState(!1),bn=Object($.a)(yn,2),Ae=bn[0],He=bn[1],_e=function(Xe){Pe||He(Xe)},Ze=function(Xe){_e(!0),Y==null||Y({key:C,domEvent:Xe})},Wn=function(Xe){_e(!1),le==null||le({key:C,domEvent:Xe})},Un=n.useMemo(function(){return Qe||(ne!=="inline"?Ae||Me([H],C):!1)},[ne,Qe,H,Ae,C,Me]),Kn=D(Be.length),rn=function(Xe){Pe||(U==null||U({key:C,domEvent:Xe}),ne==="inline"&&Ke(C,!xe))},Pn=_n(function(ke){X==null||X(qn(ke)),Re(ke)}),on=function(Xe){ne!=="inline"&&Ke(C,Xe)},Dn=function(){Ee(C)},en=ue&&"".concat(ue,"-popup"),sn=n.createElement("div",Object(V.a)({role:"menuitem",style:Kn,className:"".concat(De,"-title"),tabIndex:Pe?null:-1,ref:$e,title:typeof v=="string"?v:null,"data-menu-id":re&&ue?null:ue,"aria-expanded":Le,"aria-haspopup":!0,"aria-controls":en,"aria-disabled":Pe,onClick:rn,onFocus:Dn},ln),v,n.createElement(c,{icon:ne!=="horizontal"?Ue:null,props:Object(me.a)(Object(me.a)({},r),{},{isOpen:Le,isSubMenu:!0})},n.createElement("i",{className:"".concat(De,"-arrow")}))),jn=n.useRef(ne);if(ne!=="inline"&&(jn.current=Be.length>1?"vertical":ne),!re){var cn=jn.current;sn=n.createElement(Pa,{mode:cn,prefixCls:De,visible:!W&&Le&&ne!=="inline",popupClassName:J,popupOffset:se,popup:n.createElement(Fn,{mode:cn},n.createElement(Xt,{id:en,ref:qe},K)),disabled:Pe,onVisibleChange:on},sn)}return n.createElement(Fn,{onItemClick:Pn,mode:ne==="horizontal"?"vertical":ne,itemIcon:Ve,expandIcon:Ue},n.createElement(P.Item,Object(V.a)({role:"none"},Q,{component:"li",style:h,className:je()(De,"".concat(De,"-").concat(ne),E,(o={},Object(ce.a)(o,"".concat(De,"-open"),Le),Object(ce.a)(o,"".concat(De,"-active"),Un),Object(ce.a)(o,"".concat(De,"-selected"),Sn),Object(ce.a)(o,"".concat(De,"-disabled"),Pe),o)),onMouseEnter:Ze,onMouseLeave:Wn}),sn,!re&&n.createElement(ja,{id:en,open:Le,keyPath:Be},K)))};function Qt(t){var r=t.eventKey,o=t.children,h=ze(r),E=Dt(o,h),v=ee();n.useEffect(function(){if(v)return v.registerPath(r,h),function(){v.unregisterPath(r,h)}},[h]);var C;return v?C=E:C=n.createElement(Aa,t,E),n.createElement(Se.Provider,{value:h},C)}var Ia=e("x/xZ");function Zt(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Object(Ia.a)(t)){var o=t.nodeName.toLowerCase(),h=["input","select","textarea","button"].includes(o)||t.isContentEditable||o==="a"&&!!t.getAttribute("href"),E=t.getAttribute("tabindex"),v=Number(E),C=null;return E&&!Number.isNaN(v)?C=v:h&&C===null&&(C=0),h&&t.disabled&&(C=null),C!==null&&(C>=0||r&&C<0)}return!1}function kt(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,o=Object(fn.a)(t.querySelectorAll("*")).filter(function(h){return Zt(h,r)});return Zt(t,r)&&o.unshift(t),o}var mt=null;function pr(){mt=document.activeElement}function vr(){mt=null}function hr(){if(mt)try{mt.focus()}catch(t){}}function gr(t,r){if(r.keyCode===9){var o=kt(t),h=o[r.shiftKey?0:o.length-1],E=h===document.activeElement||t===document.activeElement;if(E){var v=o[r.shiftKey?o.length-1:0];v.focus(),r.preventDefault()}}}var jt=we.a.LEFT,At=we.a.RIGHT,It=we.a.UP,ft=we.a.DOWN,pt=we.a.ENTER,qt=we.a.ESC,_t=[It,ft,jt,At];function Ba(t,r,o,h){var E,v,C,R,W="prev",K="next",L="children",G="parent";if(t==="inline"&&h===pt)return{inlineTrigger:!0};var J=(E={},Object(ce.a)(E,It,W),Object(ce.a)(E,ft,K),E),se=(v={},Object(ce.a)(v,jt,o?K:W),Object(ce.a)(v,At,o?W:K),Object(ce.a)(v,ft,L),Object(ce.a)(v,pt,L),v),X=(C={},Object(ce.a)(C,It,W),Object(ce.a)(C,ft,K),Object(ce.a)(C,pt,L),Object(ce.a)(C,qt,G),Object(ce.a)(C,jt,o?L:G),Object(ce.a)(C,At,o?G:L),C),Y={inline:J,horizontal:se,vertical:X,inlineSub:J,horizontalSub:X,verticalSub:X},le=(R=Y["".concat(t).concat(r?"":"Sub")])===null||R===void 0?void 0:R[h];switch(le){case W:return{offset:-1,sibling:!0};case K:return{offset:1,sibling:!0};case G:return{offset:-1,sibling:!1};case L:return{offset:1,sibling:!1};default:return null}}function Na(t){for(var r=t;r;){if(r.getAttribute("data-menu-list"))return r;r=r.parentElement}return null}function Ma(t,r){for(var o=t||document.activeElement;o;){if(r.has(o))return o;o=o.parentElement}return null}function Ta(t,r){var o=kt(t,!0);return o.filter(function(h){return r.has(h)})}function ea(t,r,o){var h=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!t)return null;var E=Ta(t,r),v=E.length,C=E.findIndex(function(R){return o===R});return h<0?C===-1?C=v-1:C-=1:h>0&&(C+=1),C=(C+v)%v,E[C]}function wa(t,r,o,h,E,v,C,R,W,K){var L=n.useRef(),G=n.useRef();G.current=r;var J=function(){Ye.a.cancel(L.current)};return n.useEffect(function(){return function(){J()}},[]),function(se){var X=se.which;if([].concat(_t,[pt,qt]).includes(X)){var Y,le,U,q=function(){Y=new Set,le=new Map,U=new Map;var ye=v();return ye.forEach(function(he){var Re=document.querySelector("[data-menu-id='".concat(Jt(h,he),"']"));Re&&(Y.add(Re),U.set(Re,he),le.set(he,Re))}),Y};q();var ae=le.get(r),Q=Ma(ae,Y),ue=U.get(Q),k=Ba(t,C(ue,!0).length===1,o,X);if(!k)return;_t.includes(X)&&se.preventDefault();var be=function(ye){if(ye){var he=ye,Re=ye.querySelector("a");(Re==null?void 0:Re.getAttribute("href"))&&(he=Re);var Ke=U.get(ye);R(Ke),J(),L.current=Object(Ye.a)(function(){G.current===Ke&&he.focus()})}};if(k.sibling||!Q){var ne;!Q||t==="inline"?ne=E.current:ne=Na(Q);var de=ea(ne,Y,Q,k.offset);be(de)}else if(k.inlineTrigger)W(ue);else if(k.offset>0)W(ue,!0),J(),L.current=Object(Ye.a)(function(){q();var oe=Q.getAttribute("aria-controls"),ye=document.getElementById(oe),he=ea(ye,Y);be(he)},5);else if(k.offset<0){var fe=C(ue,!0),re=fe[fe.length-2],H=le.get(re);W(re,!1),be(H)}}K==null||K(se)}}var Wa=Math.random().toFixed(5).toString().slice(2),na=0;function Ka(t){var r=Object(On.a)(t,{value:t}),o=Object($.a)(r,2),h=o[0],E=o[1];return n.useEffect(function(){na+=1;var v="".concat(Wa,"-").concat(na);E("rc-menu-uuid-".concat(v))},[]),h}var yr=e("p8sG");function La(t){Promise.resolve().then(t)}var Bt="__RC_UTIL_PATH_SPLIT__",ta=function(r){return r.join(Bt)},$a=function(r){return r.split(Bt)},Nt="rc-menu-more";function Va(){var t=n.useState({}),r=Object($.a)(t,2),o=r[1],h=Object(n.useRef)(new Map),E=Object(n.useRef)(new Map),v=n.useState([]),C=Object($.a)(v,2),R=C[0],W=C[1],K=Object(n.useRef)(0),L=Object(n.useCallback)(function(U,q){var ae=ta(q);E.current.set(ae,U),h.current.set(U,ae),K.current+=1;var Q=K.current;La(function(){Q===K.current&&o({})})},[]),G=Object(n.useCallback)(function(U,q){var ae=ta(q);E.current.delete(ae),h.current.delete(U)},[]),J=Object(n.useCallback)(function(U){W(U)},[]),se=Object(n.useCallback)(function(U,q){var ae=h.current.get(U)||"",Q=$a(ae);return q&&R.includes(Q[0])&&Q.unshift(Nt),Q},[R]),X=Object(n.useCallback)(function(U,q){return U.some(function(ae){var Q=se(ae,!0);return Q.includes(q)})},[se]),Y=function(){var q=Object(fn.a)(h.current.keys());return R.length&&q.push(Nt),q},le=Object(n.useCallback)(function(U){var q="".concat(h.current.get(U)).concat(Bt),ae=new Set;return Object(fn.a)(E.current.keys()).forEach(function(Q){Q.startsWith(q)&&ae.add(E.current.get(Q))}),ae},[]);return{registerPath:L,unregisterPath:G,refreshOverflowKeys:J,isSubPathKey:X,getKeyPath:se,getKeys:Y,getSubPathKeys:le}}var vt=[],za=function(r){var o,h,E=r.prefixCls,v=E===void 0?"rc-menu":E,C=r.style,R=r.className,W=r.tabIndex,K=W===void 0?0:W,L=r.children,G=r.direction,J=r.id,se=r.mode,X=se===void 0?"vertical":se,Y=r.inlineCollapsed,le=r.disabled,U=r.disabledOverflow,q=r.subMenuOpenDelay,ae=q===void 0?.1:q,Q=r.subMenuCloseDelay,ue=Q===void 0?.1:Q,k=r.forceSubMenuRender,be=r.defaultOpenKeys,ne=r.openKeys,de=r.activeKey,fe=r.defaultActiveFirst,re=r.selectable,H=re===void 0?!0:re,oe=r.multiple,ye=oe===void 0?!1:oe,he=r.defaultSelectedKeys,Re=r.selectedKeys,Ke=r.onSelect,Ee=r.onDeselect,Oe=r.inlineIndent,Me=Oe===void 0?24:Oe,Be=r.motion,De=r.defaultMotions,Pe=r.triggerSubMenuAction,$e=Pe===void 0?"hover":Pe,qe=r.builtinPlacements,Ve=r.itemIcon,Ue=r.expandIcon,xe=r.overflowedIndicator,Le=xe===void 0?"...":xe,Sn=r.getPopupContainer,an=r.onClick,Qe=r.onOpenChange,ln=r.onKeyDown,yn=r.openAnimation,bn=r.openTransitionName,Ae=Object(Ie.a)(r,["prefixCls","style","className","tabIndex","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName"]),He=Dt(L,vt),_e=n.useState(!1),Ze=Object($.a)(_e,2),Wn=Ze[0],Un=Ze[1],Kn=n.useRef(),rn=Ka(J),Pn=G==="rtl",on=n.useMemo(function(){return X==="inline"&&Y?["vertical",Y]:[X,!1]},[X,Y]),Dn=Object($.a)(on,2),en=Dn[0],sn=Dn[1],jn=n.useState(0),cn=Object($.a)(jn,2),ke=cn[0],Xe=cn[1],Jn=ke>=He.length-1||en!=="horizontal"||U,Gn=Object(On.a)(be,{value:ne,postState:function(Z){return Z||vt}}),et=Object($.a)(Gn,2),En=et[0],hn=et[1],Hn=n.useState(En),Cn=Object($.a)(Hn,2),mn=Cn[0],Xn=Cn[1],An=en==="inline",xn=n.useRef(!1);n.useEffect(function(){An&&Xn(En)},[En]),n.useEffect(function(){if(!xn.current){xn.current=!0;return}if(An)hn(mn);else{var te=[];hn(te),Qe==null||Qe(te)}},[An]);var dn=Va(),In=dn.registerPath,ve=dn.unregisterPath,Fe=dn.refreshOverflowKeys,Te=dn.isSubPathKey,nn=dn.getKeyPath,Yn=dn.getKeys,gt=dn.getSubPathKeys,Wt=n.useMemo(function(){return{registerPath:In,unregisterPath:ve}},[In,ve]),Kt=n.useMemo(function(){return{isSubPathKey:Te}},[Te]);n.useEffect(function(){Fe(Jn?vt:He.slice(ke+1).map(function(te){return te.key}))},[ke,Jn]);var Lt=Object(On.a)(de||fe&&((o=He[0])===null||o===void 0?void 0:o.key),{value:de}),nt=Object($.a)(Lt,2),yt=nt[0],ut=nt[1],bt=_n(function(te){ut(te)}),$t=_n(function(){ut(void 0)}),Et=Object(On.a)(he||[],{value:Re,postState:function(Z){return Array.isArray(Z)?Z:Z==null?vt:[Z]}}),Ct=Object($.a)(Et,2),tt=Ct[0],Bn=Ct[1],Ot=function(Z){if(!!H){var Ce=Z.key,Je=tt.includes(Ce),un;Je?un=tt.filter(function(Zn){return Zn!==Ce}):ye?un=[].concat(Object(fn.a)(tt),[Ce]):un=[Ce],Bn(un);var zn=Object(me.a)(Object(me.a)({},Z),{},{selectedKeys:un});Je?Ee==null||Ee(zn):Ke==null||Ke(zn)}},Rt=_n(function(te){an==null||an(qn(te)),Ot(te)}),lt=_n(function(te,Z){var Ce=En.filter(function(un){return un!==te});if(Z)Ce.push(te);else if(en!=="inline"){var Je=gt(te);Ce=Ce.filter(function(un){return!Je.has(un)})}u()(En,Ce)||(hn(Ce),Qe==null||Qe(Ce))}),Qn=_n(Sn),ot=function(Z,Ce){var Je=Ce!=null?Ce:!En.includes(Z);lt(Z,Je)},dt=wa(en,yt,Pn,rn,Kn,Yn,nn,ut,ot,ln);n.useEffect(function(){Un(!0)},[]);var Ft=en!=="horizontal"||U?He:He.map(function(te,Z){return n.createElement(Fn,{key:te.key,overflowDisabled:Z>ke},te)}),St=n.createElement(P,Object(V.a)({id:J,ref:Kn,prefixCls:"".concat(v,"-overflow"),component:"ul",itemComponent:Pt,className:je()(v,"".concat(v,"-root"),"".concat(v,"-").concat(en),R,(h={},Object(ce.a)(h,"".concat(v,"-inline-collapsed"),sn),Object(ce.a)(h,"".concat(v,"-rtl"),Pn),h)),dir:G,style:C,role:"menu",tabIndex:K,data:Ft,renderRawItem:function(Z){return Z},renderRawRest:function(Z){var Ce=Z.length,Je=Ce?He.slice(-Ce):null;return n.createElement(Qt,{eventKey:Nt,title:Le,disabled:Jn,internalPopupClose:Ce===0},Je)},maxCount:en!=="horizontal"||U?P.INVALIDATE:P.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(Z){Xe(Z)},onKeyDown:dt},Ae));return n.createElement(Ut.Provider,{value:rn},n.createElement(Fn,{prefixCls:v,mode:en,openKeys:En,rtl:Pn,disabled:le,motion:Wn?Be:null,defaultMotions:Wn?De:null,activeKey:yt,onActive:bt,onInactive:$t,selectedKeys:tt,inlineIndent:Me,subMenuOpenDelay:ae,subMenuCloseDelay:ue,forceSubMenuRender:k,builtinPlacements:qe,triggerSubMenuAction:$e,getPopupContainer:Qn,itemIcon:Ve,expandIcon:Ue,onItemClick:Rt,onOpenChange:lt},n.createElement(Ge.Provider,{value:Kt},St),n.createElement(pe.Provider,{value:Wt},He)))},Ua=za,Ja=function(r){var o=r.className,h=r.title,E=r.eventKey,v=r.children,C=Object(Ie.a)(r,["className","title","eventKey","children"]),R=n.useContext(We),W=R.prefixCls,K="".concat(W,"-item-group");return n.createElement("li",Object(V.a)({},C,{onClick:function(G){return G.stopPropagation()},className:je()(K,o)}),n.createElement("div",{className:"".concat(K,"-title"),title:typeof h=="string"?h:void 0},h),n.createElement("ul",{className:"".concat(K,"-list")},v))};function Ga(t){var r=t.children,o=Object(Ie.a)(t,["children"]),h=ze(o.eventKey),E=Dt(r,h),v=ee();return v?E:n.createElement(Ja,o,E)}function Ha(t){var r=t.className,o=t.style,h=n.useContext(We),E=h.prefixCls,v=ee();return v?null:n.createElement("li",{className:je()("".concat(E,"-item-divider"),r),style:o})}var st=Ua;st.Item=Pt,st.SubMenu=Qt,st.ItemGroup=Ga,st.Divider=Ha;var Xa=st,xa=e("eDIo");function Ya(t,r){var o=t.prefixCls,h=t.editable,E=t.locale,v=t.style;return!h||h.showAdd===!1?null:n.createElement("button",{ref:r,type:"button",className:"".concat(o,"-nav-add"),style:v,"aria-label":(E==null?void 0:E.addAriaLabel)||"Add tab",onClick:function(R){h.onEdit("add",{event:R})}},h.addIcon||"+")}var aa=n.forwardRef(Ya);function Qa(t,r){var o=t.prefixCls,h=t.id,E=t.tabs,v=t.locale,C=t.mobile,R=t.moreIcon,W=R===void 0?"More":R,K=t.moreTransitionName,L=t.style,G=t.className,J=t.editable,se=t.tabBarGutter,X=t.rtl,Y=t.onTabClick,le=Object(n.useState)(!1),U=Object($.a)(le,2),q=U[0],ae=U[1],Q=Object(n.useState)(null),ue=Object($.a)(Q,2),k=ue[0],be=ue[1],ne="".concat(h,"-more-popup"),de="".concat(o,"-dropdown"),fe=k!==null?"".concat(ne,"-").concat(k):null,re=v==null?void 0:v.dropdownAriaLabel,H=n.createElement(Xa,{onClick:function(Oe){var Me=Oe.key,Be=Oe.domEvent;Y(Me,Be),ae(!1)},id:ne,tabIndex:-1,role:"listbox","aria-activedescendant":fe,selectedKeys:[k],"aria-label":re!==void 0?re:"expanded dropdown"},E.map(function(Ee){return n.createElement(Pt,{key:Ee.key,id:"".concat(ne,"-").concat(Ee.key),role:"option","aria-controls":h&&"".concat(h,"-panel-").concat(Ee.key),disabled:Ee.disabled},Ee.tab)}));function oe(Ee){for(var Oe=E.filter(function($e){return!$e.disabled}),Me=Oe.findIndex(function($e){return $e.key===k})||0,Be=Oe.length,De=0;De<Be;De+=1){Me=(Me+Ee+Be)%Be;var Pe=Oe[Me];if(!Pe.disabled){be(Pe.key);return}}}function ye(Ee){var Oe=Ee.which;if(!q){[we.a.DOWN,we.a.SPACE,we.a.ENTER].includes(Oe)&&(ae(!0),Ee.preventDefault());return}switch(Oe){case we.a.UP:oe(-1),Ee.preventDefault();break;case we.a.DOWN:oe(1),Ee.preventDefault();break;case we.a.ESC:ae(!1);break;case we.a.SPACE:case we.a.ENTER:k!==null&&Y(k,Ee);break}}Object(n.useEffect)(function(){var Ee=document.getElementById(fe);Ee&&Ee.scrollIntoView&&Ee.scrollIntoView(!1)},[k]),Object(n.useEffect)(function(){q||be(null)},[q]);var he=Object(ce.a)({},X?"marginLeft":"marginRight",se);E.length||(he.visibility="hidden",he.order=1);var Re=je()(Object(ce.a)({},"".concat(de,"-rtl"),X)),Ke=C?null:n.createElement(xa.default,{prefixCls:de,overlay:H,trigger:["hover"],visible:q,transitionName:K,onVisibleChange:ae,overlayClassName:Re,mouseEnterDelay:.1,mouseLeaveDelay:.1},n.createElement("button",{type:"button",className:"".concat(o,"-nav-more"),style:he,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":ne,id:"".concat(h,"-more"),"aria-expanded":q,onKeyDown:ye},W));return n.createElement("div",{className:je()("".concat(o,"-nav-operations"),G),style:L,ref:r},Ke,n.createElement(aa,{prefixCls:o,locale:v,editable:J}))}var Za=n.forwardRef(Qa),Mt=Object(n.createContext)(null),ka=.1,ra=.01,ht=20,ia=Math.pow(.995,ht);function qa(t,r){var o=Object(n.useState)(),h=Object($.a)(o,2),E=h[0],v=h[1],C=Object(n.useState)(0),R=Object($.a)(C,2),W=R[0],K=R[1],L=Object(n.useState)(0),G=Object($.a)(L,2),J=G[0],se=G[1],X=Object(n.useState)(),Y=Object($.a)(X,2),le=Y[0],U=Y[1],q=Object(n.useRef)();function ae(de){var fe=de.touches[0],re=fe.screenX,H=fe.screenY;v({x:re,y:H}),window.clearInterval(q.current)}function Q(de){if(!!E){de.preventDefault();var fe=de.touches[0],re=fe.screenX,H=fe.screenY;v({x:re,y:H});var oe=re-E.x,ye=H-E.y;r(oe,ye);var he=Date.now();K(he),se(he-W),U({x:oe,y:ye})}}function ue(){if(!!E&&(v(null),U(null),le)){var de=le.x/J,fe=le.y/J,re=Math.abs(de),H=Math.abs(fe);if(Math.max(re,H)<ka)return;var oe=de,ye=fe;q.current=window.setInterval(function(){if(Math.abs(oe)<ra&&Math.abs(ye)<ra){window.clearInterval(q.current);return}oe*=ia,ye*=ia,r(oe*ht,ye*ht)},ht)}}var k=Object(n.useRef)();function be(de){var fe=de.deltaX,re=de.deltaY,H=0,oe=Math.abs(fe),ye=Math.abs(re);oe===ye?H=k.current==="x"?fe:re:oe>ye?(H=fe,k.current="x"):(H=re,k.current="y"),r(-H,-H)&&de.preventDefault()}var ne=Object(n.useRef)(null);ne.current={onTouchStart:ae,onTouchMove:Q,onTouchEnd:ue,onWheel:be},n.useEffect(function(){function de(oe){ne.current.onTouchStart(oe)}function fe(oe){ne.current.onTouchMove(oe)}function re(oe){ne.current.onTouchEnd(oe)}function H(oe){ne.current.onWheel(oe)}return document.addEventListener("touchmove",fe,{passive:!1}),document.addEventListener("touchend",re,{passive:!1}),t.current.addEventListener("touchstart",de,{passive:!1}),t.current.addEventListener("wheel",H),function(){document.removeEventListener("touchmove",fe),document.removeEventListener("touchend",re)}},[])}function _a(){var t=Object(n.useRef)(new Map);function r(h){return t.current.has(h)||t.current.set(h,n.createRef()),t.current.get(h)}function o(h){t.current.delete(h)}return[r,o]}function sa(t,r){var o=n.useRef(t),h=n.useState({}),E=Object($.a)(h,2),v=E[1];function C(R){var W=typeof R=="function"?R(o.current):R;W!==o.current&&r(W,o.current),o.current=W,v({})}return[o.current,C]}var ua=function(r){var o=r.position,h=r.prefixCls,E=r.extra;if(!E)return null;var v,C=E;return o==="right"&&(v=C.right||!C.left&&C||null),o==="left"&&(v=C.left||null),v?n.createElement("div",{className:"".concat(h,"-extra-content")},v):null};function er(t,r){var o,h=n.useContext(Mt),E=h.prefixCls,v=h.tabs,C=t.className,R=t.style,W=t.id,K=t.animated,L=t.activeKey,G=t.rtl,J=t.extra,se=t.editable,X=t.locale,Y=t.tabPosition,le=t.tabBarGutter,U=t.children,q=t.onTabClick,ae=t.onTabScroll,Q=Object(n.useRef)(),ue=Object(n.useRef)(),k=Object(n.useRef)(),be=Object(n.useRef)(),ne=_a(),de=Object($.a)(ne,2),fe=de[0],re=de[1],H=Y==="top"||Y==="bottom",oe=sa(0,function(te,Z){H&&ae&&ae({direction:te>Z?"left":"right"})}),ye=Object($.a)(oe,2),he=ye[0],Re=ye[1],Ke=sa(0,function(te,Z){!H&&ae&&ae({direction:te>Z?"top":"bottom"})}),Ee=Object($.a)(Ke,2),Oe=Ee[0],Me=Ee[1],Be=Object(n.useState)(0),De=Object($.a)(Be,2),Pe=De[0],$e=De[1],qe=Object(n.useState)(0),Ve=Object($.a)(qe,2),Ue=Ve[0],xe=Ve[1],Le=Object(n.useState)(0),Sn=Object($.a)(Le,2),an=Sn[0],Qe=Sn[1],ln=Object(n.useState)(0),yn=Object($.a)(ln,2),bn=yn[0],Ae=yn[1],He=Object(n.useState)(null),_e=Object($.a)(He,2),Ze=_e[0],Wn=_e[1],Un=Object(n.useState)(null),Kn=Object($.a)(Un,2),rn=Kn[0],Pn=Kn[1],on=Object(n.useState)(0),Dn=Object($.a)(on,2),en=Dn[0],sn=Dn[1],jn=Object(n.useState)(0),cn=Object($.a)(jn,2),ke=cn[0],Xe=cn[1],Jn=Rn(new Map),Gn=Object($.a)(Jn,2),et=Gn[0],En=Gn[1],hn=M(v,et,Pe),Hn="".concat(E,"-nav-operations-hidden"),Cn=0,mn=0;H?G?(Cn=0,mn=Math.max(0,Pe-Ze)):(Cn=Math.min(0,Ze-Pe),mn=0):(Cn=Math.min(0,rn-Ue),mn=0);function Xn(te){return te<Cn?Cn:te>mn?mn:te}var An=Object(n.useRef)(),xn=Object(n.useState)(),dn=Object($.a)(xn,2),In=dn[0],ve=dn[1];function Fe(){ve(Date.now())}function Te(){window.clearTimeout(An.current)}qa(Q,function(te,Z){function Ce(Je,un){Je(function(zn){var Zn=Xn(zn+un);return Zn})}if(H){if(Ze>=Pe)return!1;Ce(Re,te)}else{if(rn>=Ue)return!1;Ce(Me,Z)}return Te(),Fe(),!0}),Object(n.useEffect)(function(){return Te(),In&&(An.current=window.setTimeout(function(){ve(0)},100)),Te},[In]);function nn(){var te=arguments.length>0&&arguments[0]!==void 0?arguments[0]:L,Z=hn.get(te)||{width:0,height:0,left:0,right:0,top:0};if(H){var Ce=he;G?Z.right<he?Ce=Z.right:Z.right+Z.width>he+Ze&&(Ce=Z.right+Z.width-Ze):Z.left<-he?Ce=-Z.left:Z.left+Z.width>-he+Ze&&(Ce=-(Z.left+Z.width-Ze)),Me(0),Re(Xn(Ce))}else{var Je=Oe;Z.top<-Oe?Je=-Z.top:Z.top+Z.height>-Oe+rn&&(Je=-(Z.top+Z.height-rn)),Re(0),Me(Xn(Je))}}var Yn=T(hn,{width:Ze,height:rn,left:he,top:Oe},{width:an,height:bn},{width:en,height:ke},Object(me.a)(Object(me.a)({},t),{},{tabs:v})),gt=Object($.a)(Yn,2),Wt=gt[0],Kt=gt[1],Lt=v.map(function(te){var Z=te.key;return n.createElement($n,{id:W,prefixCls:E,key:Z,rtl:G,tab:te,closable:te.closable,editable:se,active:Z===L,tabPosition:Y,tabBarGutter:le,renderWrapper:U,removeAriaLabel:X==null?void 0:X.removeAriaLabel,ref:fe(Z),onClick:function(Je){q(Z,Je)},onRemove:function(){re(Z)},onFocus:function(){nn(Z),Fe(),G||(Q.current.scrollLeft=0),Q.current.scrollTop=0}})}),nt=wn(function(){var te,Z,Ce,Je,un,zn,Zn,Vt,zt,lr=((te=Q.current)===null||te===void 0?void 0:te.offsetWidth)||0,or=((Z=Q.current)===null||Z===void 0?void 0:Z.offsetHeight)||0,ma=((Ce=be.current)===null||Ce===void 0?void 0:Ce.offsetWidth)||0,fa=((Je=be.current)===null||Je===void 0?void 0:Je.offsetHeight)||0,dr=((un=k.current)===null||un===void 0?void 0:un.offsetWidth)||0,cr=((zn=k.current)===null||zn===void 0?void 0:zn.offsetHeight)||0;Wn(lr),Pn(or),sn(ma),Xe(fa);var pa=(((Zn=ue.current)===null||Zn===void 0?void 0:Zn.offsetWidth)||0)-ma,va=(((Vt=ue.current)===null||Vt===void 0?void 0:Vt.offsetHeight)||0)-fa;$e(pa),xe(va);var ha=(zt=k.current)===null||zt===void 0?void 0:zt.className.includes(Hn);Qe(pa-(ha?0:dr)),Ae(va-(ha?0:cr)),En(function(){var ga=new Map;return v.forEach(function(mr){var ya=mr.key,ct=fe(ya).current;ct&&ga.set(ya,{width:ct.offsetWidth,height:ct.offsetHeight,left:ct.offsetLeft,top:ct.offsetTop})}),ga})}),yt=v.slice(0,Wt),ut=v.slice(Kt+1),bt=[].concat(Object(fn.a)(yt),Object(fn.a)(ut)),$t=Object(n.useState)(),Et=Object($.a)($t,2),Ct=Et[0],tt=Et[1],Bn=hn.get(L),Ot=Object(n.useRef)();function Rt(){Ye.a.cancel(Ot.current)}Object(n.useEffect)(function(){var te={};return Bn&&(H?(G?te.right=Bn.right:te.left=Bn.left,te.width=Bn.width):(te.top=Bn.top,te.height=Bn.height)),Rt(),Ot.current=Object(Ye.a)(function(){tt(te)}),Rt},[Bn,H,G]),Object(n.useEffect)(function(){nn()},[L,Bn,hn,H]),Object(n.useEffect)(function(){nt()},[G,le,L,v.map(function(te){return te.key}).join("_")]);var lt=!!bt.length,Qn="".concat(E,"-nav-wrap"),ot,dt,Ft,St;return H?G?(dt=he>0,ot=he+Ze<Pe):(ot=he<0,dt=-he+Ze<Pe):(Ft=Oe<0,St=-Oe+rn<Ue),n.createElement("div",{ref:r,role:"tablist",className:je()("".concat(E,"-nav"),C),style:R,onKeyDown:function(){Fe()}},n.createElement(ua,{position:"left",extra:J,prefixCls:E}),n.createElement(Ln.default,{onResize:nt},n.createElement("div",{className:je()(Qn,(o={},Object(ce.a)(o,"".concat(Qn,"-ping-left"),ot),Object(ce.a)(o,"".concat(Qn,"-ping-right"),dt),Object(ce.a)(o,"".concat(Qn,"-ping-top"),Ft),Object(ce.a)(o,"".concat(Qn,"-ping-bottom"),St),o)),ref:Q},n.createElement(Ln.default,{onResize:nt},n.createElement("div",{ref:ue,className:"".concat(E,"-nav-list"),style:{transform:"translate(".concat(he,"px, ").concat(Oe,"px)"),transition:In?"none":void 0}},Lt,n.createElement(aa,{ref:be,prefixCls:E,locale:X,editable:se,style:{visibility:lt?"hidden":null}}),n.createElement("div",{className:je()("".concat(E,"-ink-bar"),Object(ce.a)({},"".concat(E,"-ink-bar-animated"),K.inkBar)),style:Ct}))))),n.createElement(Za,Object(V.a)({},t,{ref:k,prefixCls:E,tabs:bt,className:!lt&&Hn})),n.createElement(ua,{position:"right",extra:J,prefixCls:E}))}var la=n.forwardRef(er);function nr(t){var r=t.id,o=t.activeKey,h=t.animated,E=t.tabPosition,v=t.rtl,C=t.destroyInactiveTabPane,R=n.useContext(Mt),W=R.prefixCls,K=R.tabs,L=h.tabPane,G=K.findIndex(function(J){return J.key===o});return n.createElement("div",{className:je()("".concat(W,"-content-holder"))},n.createElement("div",{className:je()("".concat(W,"-content"),"".concat(W,"-content-").concat(E),Object(ce.a)({},"".concat(W,"-content-animated"),L)),style:G&&L?Object(ce.a)({},v?"marginRight":"marginLeft","-".concat(G,"00%")):null},K.map(function(J){return n.cloneElement(J.node,{key:J.key,prefixCls:W,tabKey:J.key,id:r,animated:L,active:J.key===o,destroyInactiveTabPane:C})})))}function oa(t){var r=t.prefixCls,o=t.forceRender,h=t.className,E=t.style,v=t.id,C=t.active,R=t.animated,W=t.destroyInactiveTabPane,K=t.tabKey,L=t.children,G=n.useState(o),J=Object($.a)(G,2),se=J[0],X=J[1];n.useEffect(function(){C?X(!0):W&&X(!1)},[C,W]);var Y={};return C||(R?(Y.visibility="hidden",Y.height=0,Y.overflowY="hidden"):Y.display="none"),n.createElement("div",{id:v&&"".concat(v,"-panel-").concat(K),role:"tabpanel",tabIndex:C?0:-1,"aria-labelledby":v&&"".concat(v,"-tab-").concat(K),"aria-hidden":!C,style:Object(me.a)(Object(me.a)({},Y),E),className:je()("".concat(r,"-tabpane"),C&&"".concat(r,"-tabpane-active"),h)},(C||se||o)&&L)}var da=0;function tr(t){return Object(Mn.a)(t).map(function(r){if(n.isValidElement(r)){var o=r.key!==void 0?String(r.key):void 0;return Object(me.a)(Object(me.a)({key:o},r.props),{},{node:r})}return null}).filter(function(r){return r})}function ar(t,r){var o,h=t.id,E=t.prefixCls,v=E===void 0?"rc-tabs":E,C=t.className,R=t.children,W=t.direction,K=t.activeKey,L=t.defaultActiveKey,G=t.editable,J=t.animated,se=J===void 0?{inkBar:!0,tabPane:!1}:J,X=t.tabPosition,Y=X===void 0?"top":X,le=t.tabBarGutter,U=t.tabBarStyle,q=t.tabBarExtraContent,ae=t.locale,Q=t.moreIcon,ue=t.moreTransitionName,k=t.destroyInactiveTabPane,be=t.renderTabBar,ne=t.onChange,de=t.onTabClick,fe=t.onTabScroll,re=Object(Ie.a)(t,["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"]),H=tr(R),oe=W==="rtl",ye;se===!1?ye={inkBar:!1,tabPane:!1}:se===!0?ye={inkBar:!0,tabPane:!0}:ye=Object(me.a)({inkBar:!0,tabPane:!1},Object(tn.a)(se)==="object"?se:{});var he=Object(n.useState)(!1),Re=Object($.a)(he,2),Ke=Re[0],Ee=Re[1];Object(n.useEffect)(function(){Ee(Object(Tn.a)())},[]);var Oe=Object(On.a)(function(){var Ae;return(Ae=H[0])===null||Ae===void 0?void 0:Ae.key},{value:K,defaultValue:L}),Me=Object($.a)(Oe,2),Be=Me[0],De=Me[1],Pe=Object(n.useState)(function(){return H.findIndex(function(Ae){return Ae.key===Be})}),$e=Object($.a)(Pe,2),qe=$e[0],Ve=$e[1];Object(n.useEffect)(function(){var Ae=H.findIndex(function(_e){return _e.key===Be});if(Ae===-1){var He;Ae=Math.max(0,Math.min(qe,H.length-1)),De((He=H[Ae])===null||He===void 0?void 0:He.key)}Ve(Ae)},[H.map(function(Ae){return Ae.key}).join("_"),Be,qe]);var Ue=Object(On.a)(null,{value:h}),xe=Object($.a)(Ue,2),Le=xe[0],Sn=xe[1],an=Y;Ke&&!["left","right"].includes(Y)&&(an="top"),Object(n.useEffect)(function(){h||(Sn("rc-tabs-".concat(da)),da+=1)},[]);function Qe(Ae,He){de==null||de(Ae,He),De(Ae),ne==null||ne(Ae)}var ln={id:Le,activeKey:Be,animated:ye,tabPosition:an,rtl:oe,mobile:Ke},yn,bn=Object(me.a)(Object(me.a)({},ln),{},{editable:G,locale:ae,moreIcon:Q,moreTransitionName:ue,tabBarGutter:le,onTabClick:Qe,onTabScroll:fe,extra:q,style:U,panes:R});return be?yn=be(bn,la):yn=n.createElement(la,bn),n.createElement(Mt.Provider,{value:{tabs:H,prefixCls:v}},n.createElement("div",Object(V.a)({ref:r,id:h,className:je()(v,"".concat(v,"-").concat(an),(o={},Object(ce.a)(o,"".concat(v,"-mobile"),Ke),Object(ce.a)(o,"".concat(v,"-editable"),G),Object(ce.a)(o,"".concat(v,"-rtl"),oe),o),C)},re),yn,n.createElement(nr,Object(V.a)({destroyInactiveTabPane:k},ln,{animated:ye}))))}var ca=n.forwardRef(ar);ca.TabPane=oa;var rr=ca,ir=rr,Tt=e("MZF8"),vn=e("dEAq"),sr=e("ZpkN"),br=e("TIsu");function wt(t,r){var o,h=(o=t.match(/\.(\w+)$/))===null||o===void 0?void 0:o[1];return h||(h=r.tsx?"tsx":"jsx"),h}var ur=t=>{var r,o,h,E=Object(n.useRef)(),v=Object(n.useContext)(vn.context),C=v.locale,R=Object(vn.useLocaleProps)(C,t),W=Object(vn.useDemoUrl)(R.identifier),K=R.demoUrl||W,L=(Tt.a===null||Tt.a===void 0?void 0:Tt.a.location.hash)==="#".concat(R.identifier),G=Object.keys(R.sources).length===1,J=Object(vn.useCodeSandbox)((r=R.hideActions)!==null&&r!==void 0&&r.includes("CSB")?null:R),se=Object(vn.useRiddle)((o=R.hideActions)!==null&&o!==void 0&&o.includes("RIDDLE")?null:R),X=Object(vn.useMotions)(R.motions||[],E.current),Y=Object(x.default)(X,2),le=Y[0],U=Y[1],q=Object(vn.useCopy)(),ae=Object(x.default)(q,2),Q=ae[0],ue=ae[1],k=Object(n.useState)("_"),be=Object(x.default)(k,2),ne=be[0],de=be[1],fe=Object(n.useState)(wt(ne,R.sources[ne])),re=Object(x.default)(fe,2),H=re[0],oe=re[1],ye=Object(n.useState)(Boolean(R.defaultShowCode)),he=Object(x.default)(ye,2),Re=he[0],Ke=he[1],Ee=Object(n.useState)(Math.random()),Oe=Object(x.default)(Ee,2),Me=Oe[0],Be=Oe[1],De=R.sources[ne][H]||R.sources[ne].content,Pe=Object(vn.useTSPlaygroundUrl)(C,De),$e=Object(n.useRef)(),qe=Object(vn.usePrefersColor)(),Ve=Object(x.default)(qe,1),Ue=Ve[0];Object(n.useEffect)(()=>{Be(Math.random())},[Ue]);function xe(Le){de(Le),oe(wt(Le,R.sources[Le]))}return y.a.createElement("div",{style:R.style,className:[R.className,"__dumi-default-previewer",L?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:R.identifier,"data-debug":R.debug||void 0,"data-iframe":R.iframe||void 0},R.iframe&&y.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),y.a.createElement("div",{ref:E,className:"__dumi-default-previewer-demo",style:{transform:R.transform?"translate(0, 0)":void 0,padding:R.compact||R.iframe&&R.compact!==!1?"0":void 0,background:R.background}},R.iframe?y.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(R.iframe).replace(/(\d)$/,"$1px")},key:Me,src:K,ref:$e}):R.children),y.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":R.title},R.title&&y.a.createElement(vn.AnchorLink,{to:"#".concat(R.identifier)},R.title),R.description&&y.a.createElement("div",{dangerouslySetInnerHTML:{__html:R.description}})),y.a.createElement("div",{className:"__dumi-default-previewer-actions"},J&&y.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:J}),se&&y.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:se}),R.motions&&y.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:U,onClick:()=>le()}),R.iframe&&y.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:()=>Be(Math.random())}),!((h=R.hideActions)!==null&&h!==void 0&&h.includes("EXTERNAL"))&&y.a.createElement(vn.Link,{target:"_blank",to:K},y.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),y.a.createElement("span",null),y.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":ue,onClick:()=>Q(De)}),H==="tsx"&&Re&&y.a.createElement(vn.Link,{target:"_blank",to:Pe},y.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),y.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(Re?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:()=>Ke(!Re)})),Re&&y.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!G&&y.a.createElement(ir,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xB7\xB7\xB7",defaultActiveKey:ne,onChange:xe},Object.keys(R.sources).map(Le=>y.a.createElement(oa,{tab:Le==="_"?"index.".concat(wt(Le,R.sources[Le])):Le,key:Le}))),y.a.createElement("div",{className:"__dumi-default-previewer-source"},y.a.createElement(sr.a,{code:De,lang:H,showCopy:!1}))))},Er=gn.default=ur},"2XY2":function(Nn,gn,e){"use strict";e.r(gn);var x=e("q1tI"),n=e.n(x),y=e("dEAq"),V=e.n(y),ce=e("0zqC"),$=e("ZpkN"),tn=e("JjdP"),Ie=n.a.memo(tn.default["chart-render-demo"].component);gn.default=me=>(n.a.useEffect(()=>{me!=null&&me.location.hash&&y.AnchorLink.scrollToAnchor(decodeURIComponent(me.location.hash.slice(1)))},[]),n.a.createElement(n.a.Fragment,null,n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"markdown"},n.a.createElement("div",{style:{display:"flex",alignItems:"center",marginBottom:"24px"}},n.a.createElement("img",{src:"https://img.alicdn.com/tfs/TB17UtINiLaK1RjSZFxXXamPFXa-606-643.png",alt:"logo",width:"48px"}),n.a.createElement("span",{style:{fontSize:"30px",fontWeight:"600",display:"inline-block",marginLeft:"12px"}},"ChartRender")),n.a.createElement("p",{style:{display:"flex",justifyContent:"space-between",width:"440px"}},n.a.createElement(y.Link,{to:"https://www.npmjs.com/package/chart-render?_blank"},n.a.createElement("img",{alt:"npm",src:"https://img.shields.io/npm/v/chart-render.svg?maxAge=3600&style=flat-square"})),n.a.createElement(y.Link,{to:"https://npmjs.org/package/chart-render"},n.a.createElement("img",{alt:"NPM downloads",src:"https://img.shields.io/npm/dm/chart-render.svg?style=flat-square"})),n.a.createElement(y.Link,{to:"https://npmjs.org/package/chart-render"},n.a.createElement("img",{alt:"NPM all downloads",src:"https://img.shields.io/npm/dt/chart-render.svg?style=flat-square"})),n.a.createElement("a",null,n.a.createElement("img",{alt:"PRs Welcome",src:"https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square"}))),n.a.createElement("blockquote",null,n.a.createElement("p",null,"\u6613\u7528\u7684\u4E2D\u540E\u53F0",n.a.createElement("strong",null,"\u56FE\u8868\u89E3\u51B3\u65B9\u6848"),"\uFF0C\u5E38\u7528\u4E8E",n.a.createElement("strong",null,"\u56FE\u8868\u5C55\u793A\u9875"),"\u5FEB\u901F\u751F\u6210")),n.a.createElement("h2",{id:"\u4F18\u52BF"},n.a.createElement(y.AnchorLink,{to:"#\u4F18\u52BF","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u4F18\u52BF"),n.a.createElement("ol",null,n.a.createElement("li",null,n.a.createElement("strong",null,"\u771F\u6B63\u5F00\u7BB1\u5373\u7528"),"\uFF1A\u53EA\u9700\u8981\u5173\u5FC3\u4F60\u7684\u6570\u636E\uFF0C\u4F20\u5165 ",n.a.createElement("code",null,"meta"),"\u3001",n.a.createElement("code",null,"data")," \u5373\u53EF\u51FA\u56FE\u3002"),n.a.createElement("li",null,n.a.createElement("strong",null,"\u5F00\u53D1\u4F53\u9A8C\u8212\u9002"),"\uFF1A\u4F7F\u7528 TypeScript \u5F00\u53D1\uFF0C\u63D0\u4F9B\u5B8C\u6574\u7684\u7C7B\u578B\u5B9A\u4E49\u6587\u4EF6\u3002"),n.a.createElement("li",null,n.a.createElement("strong",null,"\u65E0\u7F1D\u4E60\u60EF\u4F7F\u7528"),"\uFF1A\u56FE\u8868\u7528 Ant Design Charts \u6765\u63D0\u4F9B\uFF0C\u81EA\u5B9A\u4E49\u7684\u6837\u5F0F\u652F\u6301\u53C2\u6570\u900F\u4F20\u3002")),n.a.createElement("h2",{id:"\u4F55\u65F6\u4F7F\u7528"},n.a.createElement(y.AnchorLink,{to:"#\u4F55\u65F6\u4F7F\u7528","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u4F55\u65F6\u4F7F\u7528"),n.a.createElement("ol",null,n.a.createElement("li",null,"\u9700\u8981\u9488\u5BF9\u4E00\u5806\u6570\u636E\u5FEB\u901F\u5EFA\u7ACB\u53EF\u89C6\u5316\u56FE\u8868\uFF0C\u5E76\u4E14\u9700\u8981 ",n.a.createElement("strong",null,"\u6298\u7EBF\u56FE/\u67F1\u72B6\u56FE/\u4EA4\u53C9\u8868")," \u9891\u7E41\u5207\u6362\u67E5\u770B\u3002"),n.a.createElement("li",null,"\u524D\u7AEF\u5C0F\u767D\uFF0C\u53EA\u5173\u5FC3\u624B\u91CC\u7684\u6570\u636E\uFF0C\u4E0D\u60F3\u770B\u957F\u7BC7\u5927\u8BBA\u4E86\u89E3\u90A3\u4E9B\u56FE\u8868\u5E93\u8BE5\u600E\u4E48\u4F7F\u7528\uFF0C\u53EA\u60F3\u642D\u4E2A\u56FE\u8868\u770B\u3002"),n.a.createElement("li",null,"\u63D0\u4F9B\u6298\u7EBF\u56FE\u3001\u67F1\u72B6\u56FE\u3001\u4EA4\u53C9\u8868\u4E09\u7C7B\u7EC4\u4EF6\u8FDB\u884C\u56FE\u8868\u7ED8\u5236\uFF1A",n.a.createElement("ul",null,n.a.createElement("li",null,"\u6298\u7EBF\u56FE\uFF1A\u5E38\u7528\u6765\u89C2\u5BDF\u8D44\u6599\u5728\u4E00\u6BB5\u7EF4\u5EA6\u4E4B\u5185\u7684\u53D8\u5316\uFF0C\u5982\u679CX\u8F74\u4E3A\u65F6\u95F4\uFF0C\u8FD9\u79CD\u6298\u7EBF\u56FE\u53C8\u79F0\u4E3A\u8D8B\u52BF\u56FE\u3002"),n.a.createElement("li",null,"\u67F1\u72B6\u56FE\uFF1A\u63CF\u8FF0\u7684\u662F\u5206\u7C7B\u6570\u636E\uFF0C\u5E38\u7528\u6765\u56DE\u7B54\u7684\u662F\u6BCF\u4E00\u4E2A\u5206\u7C7B\u4E2D\u300C\u6709\u591A\u5C11\uFF1F\u300D\u8FD9\u4E2A\u95EE\u9898\u3002"),n.a.createElement("li",null,"\u4EA4\u53C9\u8868\uFF1A\u662F\u4E00\u79CD\u77E9\u9635\u5F62\u5F0F\u7684\u8868\u683C\uFF0C\u62E5\u6709\u6700\u5F3A\u5927\u7684\u6570\u636E\u5206\u6790\u80FD\u529B\uFF0C\u53EF\u4EE5\u5C55\u793A\u65E0\u9650\u6307\u6807\u548C\u65E0\u9650\u7EF4\u5EA6\u95F4\u7684\u5173\u7CFB\u3002")))),n.a.createElement("h2",{id:"\u5982\u4F55\u4F7F\u7528"},n.a.createElement(y.AnchorLink,{to:"#\u5982\u4F55\u4F7F\u7528","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u5982\u4F55\u4F7F\u7528"),n.a.createElement("h3",{id:"\u5B89\u88C5"},n.a.createElement(y.AnchorLink,{to:"#\u5B89\u88C5","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u5B89\u88C5"),n.a.createElement("p",null,"chart-render \u4F9D\u8D56 ant design\uFF0C\u5355\u72EC\u4F7F\u7528\u4E0D\u8981\u5FD8\u8BB0\u5B89\u88C5\uFF5E"),n.a.createElement($.a,{code:"$ npm install chart-render --save",lang:"bash"}),n.a.createElement("h3",{id:"\u4EE3\u7801\u6F14\u793A"},n.a.createElement(y.AnchorLink,{to:"#\u4EE3\u7801\u6F14\u793A","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u4EE3\u7801\u6F14\u793A")),n.a.createElement(ce.default,tn.default["chart-render-demo"].previewerProps,n.a.createElement(Ie,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h2",{id:"api"},n.a.createElement(y.AnchorLink,{to:"#api","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"API"),n.a.createElement("h3",{id:"\u901A\u7528\u53C2\u6570"},n.a.createElement(y.AnchorLink,{to:"#\u901A\u7528\u53C2\u6570","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u901A\u7528\u53C2\u6570"),n.a.createElement("p",null,"\u6240\u6709\u7684\u56FE\u8868\u7EC4\u4EF6\u90FD\u6709\u4EE5\u4E0B 4 \u4E2A\u5165\u53C2\uFF08",n.a.createElement("strong",null,n.a.createElement("code",null,"data")," \u548C ",n.a.createElement("code",null,"meta")," \u662F\u5FC5\u4F20\u7684\u53C2\u6570"),"\uFF0C\u8BF7\u52A1\u5FC5\u6CE8\u610F\uFF09\uFF1A"),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u53C2\u6570"),n.a.createElement("th",null,"\u8BF4\u660E"),n.a.createElement("th",null,"\u7C7B\u578B"),n.a.createElement("th",null,"\u662F\u5426\u5FC5\u586B"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"style"),n.a.createElement("td",null,"\u6700\u5916\u5C42\u5BB9\u5668\u7684\u6837\u5F0F"),n.a.createElement("td",null,n.a.createElement("code",null,"React.CSSProperties")),n.a.createElement("td",null,"\u5426")),n.a.createElement("tr",null,n.a.createElement("td",null,"className"),n.a.createElement("td",null,"\u6700\u5916\u5C42\u5BB9\u5668\u7684\u7C7B\u540D"),n.a.createElement("td",null,n.a.createElement("code",null,"string")),n.a.createElement("td",null,"\u5426")),n.a.createElement("tr",null,n.a.createElement("td",null,"data"),n.a.createElement("td",null,"\u6570\u636E\u914D\u7F6E\u9879 ",n.a.createElement("code",null,"\u6CE81")),n.a.createElement("td",null,n.a.createElement("code",null,"IDataItem[]")),n.a.createElement("td",null,"\u662F")),n.a.createElement("tr",null,n.a.createElement("td",null,"meta"),n.a.createElement("td",null,"\u5143\u6570\u636E\u914D\u7F6E\u9879 ",n.a.createElement("code",null,"\u6CE82")),n.a.createElement("td",null,n.a.createElement("code",null,"IMetaItem[]")),n.a.createElement("td",null,"\u662F")))),n.a.createElement("h5",{id:"\u6CE81\uFF1A\u901A\u7528\u53C2\u6570---data-\u6570\u636E\u914D\u7F6E\u9879"},n.a.createElement(y.AnchorLink,{to:"#\u6CE81\uFF1A\u901A\u7528\u53C2\u6570---data-\u6570\u636E\u914D\u7F6E\u9879","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u6CE81\uFF1A\u901A\u7528\u53C2\u6570 - data \u6570\u636E\u914D\u7F6E\u9879"),n.a.createElement("p",null,"\u662F\u666E\u901A\u7684\u5BF9\u8C61\u6570\u7EC4\uFF0C\u5F62\u5982\uFF1A"),n.a.createElement($.a,{code:`[
  { date: '20200101', pv: 100, uv: 50 },
  { date: '20200102', pv: 120, uv: 60 },
  { date: '20200103', pv: 140, uv: 70 },
  { date: '20200104', pv: 160, uv: 80 },
]`,lang:"js"}),n.a.createElement("h5",{id:"\u6CE82\uFF1A\u901A\u7528\u53C2\u6570---meta-\u5143\u6570\u636E\u914D\u7F6E\u9879"},n.a.createElement(y.AnchorLink,{to:"#\u6CE82\uFF1A\u901A\u7528\u53C2\u6570---meta-\u5143\u6570\u636E\u914D\u7F6E\u9879","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u6CE82\uFF1A\u901A\u7528\u53C2\u6570 - meta \u5143\u6570\u636E\u914D\u7F6E\u9879"),n.a.createElement("p",null,"\u7528\u6765\u63CF\u8FF0 data \u7684\u5404\u4E2A\u5B57\u6BB5\u7684\u4E1C\u897F\uFF0C\u5F62\u5982\uFF1A"),n.a.createElement($.a,{code:`/**
 * id: \u5BF9\u5E94\u5355\u6761\u6570\u636E\u9879\u7684 key \u540D
 * name: \u5BF9\u5E94\u5355\u6761\u6570\u636E\u9879\u7684 key \u7684\u63CF\u8FF0
 * isDim: \u662F\u5426\u662F\u7EF4\u5EA6\uFF0C\`true\`-\u7EF4\u5EA6\uFF0C\`false\`-\u6307\u6807
 * isRate: \u662F\u5426\u662F\u767E\u5206\u6570\uFF0C\u4EC5\u9650\u6307\u6807\u4F7F\u7528\uFF0C\u542F\u7528\u540E\uFF0C\u6570\u503C \`0.5\` \u4F1A\u4EE5 \`50%\` \u6765\u8F93\u51FA\u6E32\u67D3
 */
[
  { id: 'date', name: '\u65E5\u671F', isDim: true, isRate: false },
  { id: 'pv', name: '\u8BBF\u95EE\u91CF', isDim: false, isRate: false },
  { id: 'uv', name: '\u8BBF\u5BA2\u6570', isDim: false, isRate: false },
]`,lang:"js"}),n.a.createElement("h3",{id:"line-\u6298\u7EBF\u56FE\u7684\u989D\u5916\u53C2\u6570"},n.a.createElement(y.AnchorLink,{to:"#line-\u6298\u7EBF\u56FE\u7684\u989D\u5916\u53C2\u6570","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Line \u6298\u7EBF\u56FE\u7684\u989D\u5916\u53C2\u6570"),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u53C2\u6570"),n.a.createElement("th",null,"\u8BF4\u660E"),n.a.createElement("th",null,"\u7C7B\u578B"),n.a.createElement("th",null,"\u9ED8\u8BA4\u503C"),n.a.createElement("th",null,"\u662F\u5426\u5FC5\u586B"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"withArea"),n.a.createElement("td",null,"\u662F\u5426\u4EE5\u9762\u79EF\u56FE\u5C55\u793A",n.a.createElement("br",null)," - \u6CE8\u610F\u9762\u79EF\u56FE\u9ED8\u8BA4\u5806\u53E0\u5C55\u793A\uFF0C\u5982\u4E0D\u9700\u8981\u53EF\u4EE5\u4F20\u5165 ",n.a.createElement("code",null,"isStack=","{","false","}")," \u8986\u76D6",n.a.createElement("br",null)," - \u5F00\u542F\u9762\u79EF\u56FE\u540E\u65B9\u53EF\u4F7F\u7528 ",n.a.createElement("code",null,"areaStyle")," ",n.a.createElement("code",null,"startOnZero")," ",n.a.createElement("code",null,"isPercent")," \u5C5E\u6027"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"false")),n.a.createElement("td",null,"\u5426")))),n.a.createElement("p",null,"\u5982\u679C\u4F60\u9700\u8981\u4FEE\u6539\u70B9\u3001\u7EBF\u7B49\u6837\u5F0F\uFF0C\u53EF\u4EE5\u53C2\u8003\u53C2\u6570\u8868\uFF1A",n.a.createElement(y.Link,{to:"https://charts.ant.design/zh-CN/demos/line?type=api"},"\u6298\u7EBF\u56FE\u53C2\u6570\u8868")," ",n.a.createElement(y.Link,{to:"https://charts.ant.design/zh-CN/demos/area?type=api"},"\u9762\u79EF\u56FE\u53C2\u6570\u8868"),"\uFF0C\u9664\u4E86 ",n.a.createElement("code",null,"yField"),"\u3001",n.a.createElement("code",null,"xField"),"\u3001",n.a.createElement("code",null,"seriesField")," \u4E09\u4E2A\u5B57\u6BB5\u4E0D\u505A\u900F\u4F20\uFF0C\u5176\u4ED6\u5B57\u6BB5\u5747\u505A\u900F\u4F20\u5904\u7406\u3002"),n.a.createElement("h3",{id:"column-\u67F1\u72B6\u56FE\u7684\u989D\u5916\u53C2\u6570"},n.a.createElement(y.AnchorLink,{to:"#column-\u67F1\u72B6\u56FE\u7684\u989D\u5916\u53C2\u6570","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Column \u67F1\u72B6\u56FE\u7684\u989D\u5916\u53C2\u6570"),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u53C2\u6570"),n.a.createElement("th",null,"\u8BF4\u660E"),n.a.createElement("th",null,"\u7C7B\u578B"),n.a.createElement("th",null,"\u9ED8\u8BA4\u503C"),n.a.createElement("th",null,"\u662F\u5426\u5FC5\u586B"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"inverted"),n.a.createElement("td",null,"\u662F\u5426\u4EE5\u6761\u5F62\u56FE\u5C55\u793A"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"false")),n.a.createElement("td",null,"\u5426")))),n.a.createElement("p",null,"\u5982\u679C\u4F60\u9700\u8981\u4FEE\u6539\u989C\u8272\u3001\u67F1\u7B49\u6837\u5F0F\uFF0C\u53EF\u4EE5\u53C2\u8003\u53C2\u6570\u8868\uFF1A",n.a.createElement(y.Link,{to:"https://charts.ant.design/zh-CN/demos/column?type=api"},"\u67F1\u72B6\u56FE\u53C2\u6570\u8868"),"\uFF0C\u9664\u4E86 ",n.a.createElement("code",null,"yField"),"\u3001",n.a.createElement("code",null,"xField"),"\u3001",n.a.createElement("code",null,"seriesField")," \u4E09\u4E2A\u5B57\u6BB5\u4E0D\u505A\u900F\u4F20\uFF0C\u5176\u4ED6\u5B57\u6BB5\u5747\u505A\u900F\u4F20\u5904\u7406\u3002"),n.a.createElement("h3",{id:"pivottable-\u4EA4\u53C9\u8868\u7684\u989D\u5916\u53C2\u6570"},n.a.createElement(y.AnchorLink,{to:"#pivottable-\u4EA4\u53C9\u8868\u7684\u989D\u5916\u53C2\u6570","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"PivotTable \u4EA4\u53C9\u8868\u7684\u989D\u5916\u53C2\u6570"),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u53C2\u6570"),n.a.createElement("th",null,"\u8BF4\u660E"),n.a.createElement("th",null,"\u7C7B\u578B"),n.a.createElement("th",null,"\u9ED8\u8BA4\u503C"),n.a.createElement("th",null,"\u662F\u5426\u5FC5\u586B"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"showSubtotal"),n.a.createElement("td",null,"\u662F\u5426\u5C55\u793A\u603B\u8BA1\u5C0F\u8BA1"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"true")),n.a.createElement("td",null,"\u5426")),n.a.createElement("tr",null,n.a.createElement("td",null,"subtotalText"),n.a.createElement("td",null,"\u603B\u8BA1\u5C0F\u8BA1\u7684\u6587\u6848"),n.a.createElement("td",null,n.a.createElement("code",null,"[string, string]")),n.a.createElement("td",null,n.a.createElement("code",null,"['\u603B\u8BA1', '\u5C0F\u8BA1']")),n.a.createElement("td",null,"\u5426")),n.a.createElement("tr",null,n.a.createElement("td",null,"indicatorSide"),n.a.createElement("td",null,"\u6307\u6807\u7684\u5C55\u793A\u4F4D\u7F6E"),n.a.createElement("td",null,n.a.createElement("code",null,"'left' | 'top'")),n.a.createElement("td",null,n.a.createElement("code",null,"'top'")),n.a.createElement("td",null,"\u5426")),n.a.createElement("tr",null,n.a.createElement("td",null,"size"),n.a.createElement("td",null,"\u8868\u683C\u5C3A\u5BF8"),n.a.createElement("td",null,n.a.createElement("code",null,"'small' | 'middle' | 'large'")),n.a.createElement("td",null,n.a.createElement("code",null,"'middle'")),n.a.createElement("td",null,"\u5426")),n.a.createElement("tr",null,n.a.createElement("td",null,"leftDimensionLength"),n.a.createElement("td",null,"\u5DE6\u4FA7\u7EF4\u5EA6\u653E\u591A\u5C11\u4E2A\uFF0C\u8D85\u51FA\u7684\u7EF4\u5EA6\u4F1A\u653E\u5230\u8868\u683C\u9876\u90E8"),n.a.createElement("td",null,n.a.createElement("code",null,"number")),n.a.createElement("td",null,"-"),n.a.createElement("td",null,"\u5426")),n.a.createElement("tr",null,n.a.createElement("td",null,"leftExpandable"),n.a.createElement("td",null,"\u5DE6\u4FA7\u7EF4\u5EA6\u5141\u8BB8\u5C55\u5F00/\u6536\u8D77"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"false")),n.a.createElement("td",null,"\u5426")),n.a.createElement("tr",null,n.a.createElement("td",null,"topExpandable"),n.a.createElement("td",null,"\u9876\u90E8\u7EF4\u5EA6\u5141\u8BB8\u5C55\u5F00/\u6536\u8D77"),n.a.createElement("td",null,n.a.createElement("code",null,"boolean")),n.a.createElement("td",null,n.a.createElement("code",null,"false")),n.a.createElement("td",null,"\u5426")),n.a.createElement("tr",null,n.a.createElement("td",null,"cellRender"),n.a.createElement("td",null,"\u5355\u5143\u683C\u81EA\u5B9A\u4E49\u6E32\u67D3\u51FD\u6570\uFF0C\u53EF\u89C1",n.a.createElement(y.AnchorLink,{to:"./demo/pivot-table#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%8D%95%E5%85%83%E6%A0%BC%E6%B8%B2%E6%9F%93"},"\u4EA4\u53C9\u8868\u6848\u4F8B - \u9AD8\u7EA7\u6848\u4F8B - \u81EA\u5B9A\u4E49\u5355\u5143\u683C\u6E32\u67D3")),n.a.createElement("td",null,n.a.createElement("code",null,"(value: any, dimRecord: IDataItem, indId: string ) => React.ReactNode")),n.a.createElement("td",null,"-"),n.a.createElement("td",null,"\u5426"))))))))},"80pN":function(Nn,gn,e){"use strict";(function(x){/** @license React v16.14.0
* react-dom-test-utils.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var n=e("MgzW"),y=e("q1tI"),V=e("i8i4"),ce=e("QCnb");function $(c){for(var D="https://reactjs.org/docs/error-decoder.html?invariant="+c,j=1;j<arguments.length;j++)D+="&args[]="+encodeURIComponent(arguments[j]);return"Minified React error #"+c+"; visit "+D+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var tn=y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;tn.hasOwnProperty("ReactCurrentDispatcher")||(tn.ReactCurrentDispatcher={current:null}),tn.hasOwnProperty("ReactCurrentBatchConfig")||(tn.ReactCurrentBatchConfig={suspense:null});function Ie(c){var D=c,j=c;if(c.alternate)for(;D.return;)D=D.return;else{c=D;do D=c,(D.effectTag&1026)!=0&&(j=D.return),c=D.return;while(c)}return D.tag===3?j:null}function me(c){if(Ie(c)!==c)throw Error($(188))}function at(c){var D=c.alternate;if(!D){if(D=Ie(c),D===null)throw Error($(188));return D!==c?null:c}for(var j=c,pe=D;;){var ee=j.return;if(ee===null)break;var Se=ee.alternate;if(Se===null){if(pe=ee.return,pe!==null){j=pe;continue}break}if(ee.child===Se.child){for(Se=ee.child;Se;){if(Se===j)return me(ee),c;if(Se===pe)return me(ee),D;Se=Se.sibling}throw Error($(188))}if(j.return!==pe.return)j=ee,pe=Se;else{for(var ze=!1,Ge=ee.child;Ge;){if(Ge===j){ze=!0,j=ee,pe=Se;break}if(Ge===pe){ze=!0,pe=ee,j=Se;break}Ge=Ge.sibling}if(!ze){for(Ge=Se.child;Ge;){if(Ge===j){ze=!0,j=Se,pe=ee;break}if(Ge===pe){ze=!0,pe=Se,j=ee;break}Ge=Ge.sibling}if(!ze)throw Error($(189))}}if(j.alternate!==pe)throw Error($(190))}if(j.tag!==3)throw Error($(188));return j.stateNode.current===j?c:D}function je(){return!0}function Mn(){return!1}function Tn(c,D,j,pe){this.dispatchConfig=c,this._targetInst=D,this.nativeEvent=j,c=this.constructor.Interface;for(var ee in c)c.hasOwnProperty(ee)&&((D=c[ee])?this[ee]=D(j):ee==="target"?this.target=pe:this[ee]=j[ee]);return this.isDefaultPrevented=(j.defaultPrevented!=null?j.defaultPrevented:j.returnValue===!1)?je:Mn,this.isPropagationStopped=Mn,this}n(Tn.prototype,{preventDefault:function(){this.defaultPrevented=!0;var c=this.nativeEvent;c&&(c.preventDefault?c.preventDefault():typeof c.returnValue!="unknown"&&(c.returnValue=!1),this.isDefaultPrevented=je)},stopPropagation:function(){var c=this.nativeEvent;c&&(c.stopPropagation?c.stopPropagation():typeof c.cancelBubble!="unknown"&&(c.cancelBubble=!0),this.isPropagationStopped=je)},persist:function(){this.isPersistent=je},isPersistent:Mn,destructor:function(){var c=this.constructor.Interface,D;for(D in c)this[D]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=Mn,this._dispatchInstances=this._dispatchListeners=null}}),Tn.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(c){return c.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null},Tn.extend=function(c){function D(){}function j(){return pe.apply(this,arguments)}var pe=this;D.prototype=pe.prototype;var ee=new D;return n(ee,j.prototype),j.prototype=ee,j.prototype.constructor=j,j.Interface=n({},pe.Interface,c),j.extend=pe.extend,Ye(j),j},Ye(Tn);function On(c,D,j,pe){if(this.eventPool.length){var ee=this.eventPool.pop();return this.call(ee,c,D,j,pe),ee}return new this(c,D,j,pe)}function fn(c){if(!(c instanceof this))throw Error($(279));c.destructor(),10>this.eventPool.length&&this.eventPool.push(c)}function Ye(c){c.eventPool=[],c.getPooled=On,c.release=fn}var Ln=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined");function wn(c,D){var j={};return j[c.toLowerCase()]=D.toLowerCase(),j["Webkit"+c]="webkit"+D,j["Moz"+c]="moz"+D,j}var Rn={animationend:wn("Animation","AnimationEnd"),animationiteration:wn("Animation","AnimationIteration"),animationstart:wn("Animation","AnimationStart"),transitionend:wn("Transition","TransitionEnd")},we={},kn={};Ln&&(kn=document.createElement("div").style,"AnimationEvent"in window||(delete Rn.animationend.animation,delete Rn.animationiteration.animation,delete Rn.animationstart.animation),"TransitionEvent"in window||delete Rn.transitionend.transition);function $n(c){if(we[c])return we[c];if(!Rn[c])return c;var D=Rn[c],j;for(j in D)if(D.hasOwnProperty(j)&&j in kn)return we[c]=D[j];return c}var rt=$n("animationend"),M=$n("animationiteration"),B=$n("animationstart"),T=$n("transitionend"),f=null;function u(c){if(f===null)try{var D=("require"+Math.random()).slice(0,7);f=(x&&x[D])("timers").setImmediate}catch(j){f=function(pe){var ee=new MessageChannel;ee.port1.onmessage=pe,ee.port2.postMessage(void 0)}}return f(c)}var g=V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,O=g[11],F=g[12],i=V.unstable_batchedUpdates,l=tn.IsSomeRendererActing,b=typeof ce.unstable_flushAllWithoutAsserting=="function",N=ce.unstable_flushAllWithoutAsserting||function(){for(var c=!1;O();)c=!0;return c};function I(c){try{N(),u(function(){N()?I(c):c()})}catch(D){c(D)}}var S=0,s=!1,A=V.findDOMNode,d=V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,a=d[0],p=d[4],m=d[5],P=d[6],w=d[7],z=d[8],_=d[9],ie=d[10];function ge(){}function pn(c,D){if(!c)return[];if(c=at(c),!c)return[];for(var j=c,pe=[];;){if(j.tag===5||j.tag===6||j.tag===1||j.tag===0){var ee=j.stateNode;D(ee)&&pe.push(ee)}if(j.child)j.child.return=j,j=j.child;else{if(j===c)return pe;for(;!j.sibling;){if(!j.return||j.return===c)return pe;j=j.return}j.sibling.return=j.return,j=j.sibling}}}function We(c,D){if(c&&!c._reactInternalFiber){var j=""+c;throw c=Array.isArray(c)?"an array":c&&c.nodeType===1&&c.tagName?"a DOM node":j==="[object Object]"?"object with keys {"+Object.keys(c).join(", ")+"}":j,Error($(286,D,c))}}var Ne={renderIntoDocument:function(c){var D=document.createElement("div");return V.render(c,D)},isElement:function(c){return y.isValidElement(c)},isElementOfType:function(c,D){return y.isValidElement(c)&&c.type===D},isDOMComponent:function(c){return!(!c||c.nodeType!==1||!c.tagName)},isDOMComponentElement:function(c){return!!(c&&y.isValidElement(c)&&c.tagName)},isCompositeComponent:function(c){return Ne.isDOMComponent(c)?!1:c!=null&&typeof c.render=="function"&&typeof c.setState=="function"},isCompositeComponentWithType:function(c,D){return Ne.isCompositeComponent(c)?c._reactInternalFiber.type===D:!1},findAllInRenderedTree:function(c,D){return We(c,"findAllInRenderedTree"),c?pn(c._reactInternalFiber,D):[]},scryRenderedDOMComponentsWithClass:function(c,D){return We(c,"scryRenderedDOMComponentsWithClass"),Ne.findAllInRenderedTree(c,function(j){if(Ne.isDOMComponent(j)){var pe=j.className;typeof pe!="string"&&(pe=j.getAttribute("class")||"");var ee=pe.split(/\s+/);if(!Array.isArray(D)){if(D===void 0)throw Error($(11));D=D.split(/\s+/)}return D.every(function(Se){return ee.indexOf(Se)!==-1})}return!1})},findRenderedDOMComponentWithClass:function(c,D){if(We(c,"findRenderedDOMComponentWithClass"),c=Ne.scryRenderedDOMComponentsWithClass(c,D),c.length!==1)throw Error("Did not find exactly one match (found: "+c.length+") for class:"+D);return c[0]},scryRenderedDOMComponentsWithTag:function(c,D){return We(c,"scryRenderedDOMComponentsWithTag"),Ne.findAllInRenderedTree(c,function(j){return Ne.isDOMComponent(j)&&j.tagName.toUpperCase()===D.toUpperCase()})},findRenderedDOMComponentWithTag:function(c,D){if(We(c,"findRenderedDOMComponentWithTag"),c=Ne.scryRenderedDOMComponentsWithTag(c,D),c.length!==1)throw Error("Did not find exactly one match (found: "+c.length+") for tag:"+D);return c[0]},scryRenderedComponentsWithType:function(c,D){return We(c,"scryRenderedComponentsWithType"),Ne.findAllInRenderedTree(c,function(j){return Ne.isCompositeComponentWithType(j,D)})},findRenderedComponentWithType:function(c,D){if(We(c,"findRenderedComponentWithType"),c=Ne.scryRenderedComponentsWithType(c,D),c.length!==1)throw Error("Did not find exactly one match (found: "+c.length+") for componentType:"+D);return c[0]},mockComponent:function(c,D){return D=D||c.mockTagName||"div",c.prototype.render.mockImplementation(function(){return y.createElement(D,null,this.props.children)}),this},nativeTouchData:function(c,D){return{touches:[{pageX:c,pageY:D}]}},Simulate:null,SimulateNative:{},act:function(c){function D(){S--,l.current=j,F.current=pe}s===!1&&(s=!0,console.error("act(...) is not supported in production builds of React, and might not behave as expected.")),S++;var j=l.current,pe=F.current;l.current=!0,F.current=!0;try{var ee=i(c)}catch(Se){throw D(),Se}if(ee!==null&&typeof ee=="object"&&typeof ee.then=="function")return{then:function(Se,ze){ee.then(function(){1<S||b===!0&&j===!0?(D(),Se()):I(function(Ge){D(),Ge?ze(Ge):Se()})},function(Ge){D(),ze(Ge)})}};try{S!==1||b!==!1&&j!==!1||N(),D()}catch(Se){throw D(),Se}return{then:function(Se){Se()}}}};function Fn(c){return function(D,j){if(y.isValidElement(D))throw Error($(228));if(Ne.isCompositeComponent(D))throw Error($(229));var pe=p[c],ee=new ge;ee.target=D,ee.type=c.toLowerCase();var Se=a(D),ze=new Tn(pe,Se,ee,D);ze.persist(),n(ze,j),pe.phasedRegistrationNames?m(ze):P(ze),V.unstable_batchedUpdates(function(){w(D),ie(ze)}),z()}}Ne.Simulate={};for(var it in p)Ne.Simulate[it]=Fn(it);function qn(c,D){return function(j,pe){var ee=new ge(c);n(ee,pe),Ne.isDOMComponent(j)?(j=A(j),ee.target=j,_(D,1,document,ee)):j.tagName&&(ee.target=j,_(D,1,document,ee))}}[["abort","abort"],[rt,"animationEnd"],[M,"animationIteration"],[B,"animationStart"],["blur","blur"],["canplaythrough","canPlayThrough"],["canplay","canPlay"],["cancel","cancel"],["change","change"],["click","click"],["close","close"],["compositionend","compositionEnd"],["compositionstart","compositionStart"],["compositionupdate","compositionUpdate"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["dragstart","dragStart"],["drag","drag"],["drop","drop"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],["ended","ended"],["error","error"],["focus","focus"],["input","input"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["loadstart","loadStart"],["loadstart","loadStart"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["mousedown","mouseDown"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["playing","playing"],["progress","progress"],["ratechange","rateChange"],["scroll","scroll"],["seeked","seeked"],["seeking","seeking"],["selectionchange","selectionChange"],["stalled","stalled"],["suspend","suspend"],["textInput","textInput"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchmove","touchMove"],["touchstart","touchStart"],[T,"transitionEnd"],["volumechange","volumeChange"],["waiting","waiting"],["wheel","wheel"]].forEach(function(c){var D=c[1];Ne.SimulateNative[D]=qn(D,c[0])}),x.exports=Ne.default||Ne}).call(this,e("hOG+")(Nn))},JjdP:function(Nn,gn,e){"use strict";e.r(gn);var x=e("9og8"),n=e("WmNS"),y=e.n(n),V=e("LtsZ"),ce=`import React, { useRef } from 'react';
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

export default Demo;`,$=`import React from 'react';
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
};`,Ie=`import React from 'react';
import FormRender, { useForm } from 'form-render';

const Demo = ({ schema }) => {
  const form = useForm();
  return (
    <div>
      <FormRender form={form} schema={schema} />
    </div>
  );
};

export default Demo;`,me=`export const basic = {
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
};`,at=`import React, { Component } from 'react';
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

export default Root;`,je=`import React, { useState, useEffect } from 'react';
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

export default Demo;`,Mn=`{
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

export default Demo;`,fn=`/* PrismJS 1.16.0
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
}`,Ye=`.markdown p {
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

export default Demo;`,wn=`import React, { useState, useRef } from 'react';
import Generator from 'fr-generator';
import { Button, Modal, Input } from 'antd';
const { TextArea } = Input;

const defaultValue = {
  schema: {
    type: 'object',
    properties: {
      inputName: {
        title: '\u7B80\u5355\u8F93\u5165\u6846',
        type: 'string',
      },
    },
  },
  displayType: 'row',
  showDescIcon: true,
  labelWidth: 120,
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

export default Demo;`,Rn=`import React, { useState, useRef } from 'react';
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

export default Demo;`,we=`import React from 'react';
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
                text: '\u670D\u52A1\u7AEF\u4E0B\u62C9\u9009\u6846',
                name: 'asyncSelect',
                schema: {
                  title: '\u6765\u81EA\u670D\u52A1\u7AEF',
                  type: 'string',
                  'ui:widget': 'NewWidget',
                },
                widget: 'NewWidget',
                setting: {
                  api: { title: 'api', type: 'string' },
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
                widget: 'map',
                setting: {},
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

export default Demo;`,kn=`import React, { useState, useRef } from 'react';
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
          }
        ]}
        onChange={data => console.log('data:change', data)}
        onSchemaChange={schema => console.log('schema:change', schema)}
      />
    </div>
  );
};

export default Demo;`,$n=`.fr-generator-playground {
  margin: 0 -24px;

  .hide-demo {
    display: none;
  }
}`,rt=gn.default={"guide-card":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(y.a.mark(function T(){return y.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"oLxE"));case 2:return u.abrupt("return",u.sent.default);case 3:case"end":return u.stop()}},T)}));function B(){return M.apply(this,arguments)}return B}()}),previewerProps:{sources:{_:{jsx:ce}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"card-render":{version:"0.1.2"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"0.x"}},identifier:"guide-card"}},"chart-render-demo":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(y.a.mark(function T(){var f,u,g,O,F,i,l;return y.a.wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return i=function(S,s){if(!s&&S&&S.__esModule)return S;if(S===null||typeof S!="object"&&typeof S!="function")return{default:S};var A=F(s);if(A&&A.has(S))return A.get(S);var d={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var p in S)if(p!=="default"&&Object.prototype.hasOwnProperty.call(S,p)){var m=a?Object.getOwnPropertyDescriptor(S,p):null;m&&(m.get||m.set)?Object.defineProperty(d,p,m):d[p]=S[p]}return d.default=S,A&&A.set(S,d),d},F=function(S){if(typeof WeakMap!="function")return null;var s=new WeakMap,A=new WeakMap;return(F=function(a){return a?A:s})(S)},f=e("K+nK"),N.t0=f,N.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return N.t1=N.sent,u=(0,N.t0)(N.t1),N.t2=i,N.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return N.t3=N.sent,g=(0,N.t2)(N.t3),N.next=15,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 15:return O=N.sent,l=function(){var S=(0,g.useState)("Line"),s=(0,u.default)(S,2),A=s[0],d=s[1],a={Line:O.Line,Column:O.Column,PivotTable:O.PivotTable}[A];return g.default.createElement("div",null,g.default.createElement("div",{style:{marginBottom:10}},g.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return d("Line")}},"\u6298\u7EBF\u56FE"),g.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return d("Column")}},"\u67F1\u72B6\u56FE"),g.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return d("PivotTable")}},"\u4EA4\u53C9\u8868")),g.default.createElement(a,{meta:[{id:"date",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF",isDim:!1},{id:"uv",name:"\u8BBF\u5BA2\u6570",isDim:!1}],data:[{date:"20200101",pv:100,uv:50},{date:"20200102",pv:120,uv:60},{date:"20200103",pv:140,uv:70},{date:"20200104",pv:160,uv:80}]}))},N.abrupt("return",l);case 18:case"end":return N.stop()}},T)}));function B(){return M.apply(this,arguments)}return B}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
import { Line, Column, PivotTable, } from 'chart-render';

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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"chart-render-demo"}},"column-demo":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(y.a.mark(function T(){var f,u,g,O;return y.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=e("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,u=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=i.sent,O=function(){return u.default.createElement(g.Column,{meta:[{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{pv:50,uv:20}]})},i.abrupt("return",O);case 11:case"end":return i.stop()}},T)}));function B(){return M.apply(this,arguments)}return B}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: "pv", name: "\u8BBF\u95EE\u91CF" },
      { id: "uv", name: "\u8BBF\u5BA2\u6570" },
    ]}
    data={[
      { pv: 50, uv: 20 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo"}},"column-demo-1":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(y.a.mark(function T(){var f,u,g,O;return y.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=e("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,u=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=i.sent,O=function(){return u.default.createElement(g.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},i.abrupt("return",O);case 11:case"end":return i.stop()}},T)}));function B(){return M.apply(this,arguments)}return B}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: "ds", name: "\u65E5\u671F", isDim: true },
      { id: "uv", name: "\u8BBF\u5BA2\u6570" },
    ]}
    data={[
      { ds: "2020-12-31", uv: 20 },
      { ds: "2021-01-01", uv: 21 },
      { ds: "2021-01-02", uv: 15 },
      { ds: "2021-01-03", uv: 40 },
      { ds: "2021-01-04", uv: 31 },
      { ds: "2021-01-05", uv: 32 },
      { ds: "2021-01-06", uv: 30 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-1"}},"column-demo-2":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(y.a.mark(function T(){var f,u,g,O;return y.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=e("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,u=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=i.sent,O=function(){return u.default.createElement(g.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},i.abrupt("return",O);case 11:case"end":return i.stop()}},T)}));function B(){return M.apply(this,arguments)}return B}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: "ds", name: "\u65E5\u671F", isDim: true },
      { id: "page", name: "\u9875\u9762\u540D\u79F0", isDim: true },
      { id: "uv", name: "\u8BBF\u5BA2\u6570" },
    ]}
    data={[
      { ds: "2020-12-31", page: "\u767B\u5F55\u9875", uv: 20 },
      { ds: "2020-12-31", page: "\u9996\u9875", uv: 120 },
      { ds: "2021-01-01", page: "\u767B\u5F55\u9875", uv: 21 },
      { ds: "2021-01-01", page: "\u9996\u9875", uv: 121 },
      { ds: "2021-01-02", page: "\u767B\u5F55\u9875", uv: 15 },
      { ds: "2021-01-02", page: "\u9996\u9875", uv: 115 },
      { ds: "2021-01-03", page: "\u767B\u5F55\u9875", uv: 40 },
      { ds: "2021-01-03", page: "\u9996\u9875", uv: 140 },
      { ds: "2021-01-04", page: "\u767B\u5F55\u9875", uv: 31 },
      { ds: "2021-01-04", page: "\u9996\u9875", uv: 131 },
      { ds: "2021-01-05", page: "\u767B\u5F55\u9875", uv: 32 },
      { ds: "2021-01-05", page: "\u9996\u9875", uv: 132 },
      { ds: "2021-01-06", page: "\u767B\u5F55\u9875", uv: 30 },
      { ds: "2021-01-06", page: "\u9996\u9875", uv: 130 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-2"}},"column-demo-3":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(y.a.mark(function T(){var f,u,g,O;return y.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=e("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,u=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=i.sent,O=function(){return u.default.createElement(g.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},i.abrupt("return",O);case 11:case"end":return i.stop()}},T)}));function B(){return M.apply(this,arguments)}return B}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: "ds", name: "\u65E5\u671F", "isDim": true },
      { id: "pv", name: "\u8BBF\u95EE\u91CF" },
      { id: "uv", name: "\u8BBF\u5BA2\u6570" }
    ]}
    data={[
      { ds: "2020-12-31", pv: 50, uv: 20 },
      { ds: "2021-01-01", pv: 76, uv: 21 },
      { ds: "2021-01-02", pv: 46, uv: 15 },
      { ds: "2021-01-03", pv: 89, uv: 40 },
      { ds: "2021-01-04", pv: 66, uv: 31 },
      { ds: "2021-01-05", pv: 46, uv: 32 },
      { ds: "2021-01-06", pv: 45, uv: 30 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-3"}},"column-demo-4":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(y.a.mark(function T(){var f,u,g,O;return y.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=e("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,u=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=i.sent,O=function(){return u.default.createElement(g.Column,{inverted:!0,label:{position:"middle",layout:[{type:"interval-adjust-position"},{type:"interval-hide-overlap"},{type:"adjust-color"}]},meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},i.abrupt("return",O);case 11:case"end":return i.stop()}},T)}));function B(){return M.apply(this,arguments)}return B}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
      { id: "ds", name: "\u65E5\u671F", "isDim": true },
      { id: "pv", name: "\u8BBF\u95EE\u91CF" },
      { id: "uv", name: "\u8BBF\u5BA2\u6570" }
    ]}
    data={[
      { ds: "2020-12-31", pv: 50, uv: 20 },
      { ds: "2021-01-01", pv: 76, uv: 21 },
      { ds: "2021-01-02", pv: 46, uv: 15 },
      { ds: "2021-01-03", pv: 89, uv: 40 },
      { ds: "2021-01-04", pv: 66, uv: 31 },
      { ds: "2021-01-05", pv: 46, uv: 32 },
      { ds: "2021-01-06", pv: 45, uv: 30 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-4"}},"line-demo":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(y.a.mark(function T(){var f,u,g,O;return y.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=e("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,u=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=i.sent,O=function(){return u.default.createElement(g.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},i.abrupt("return",O);case 11:case"end":return i.stop()}},T)}));function B(){return M.apply(this,arguments)}return B}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Line } from 'chart-render';

export default () => (
  <Line
    meta={[
      { id: "ds", name: "\u65E5\u671F", isDim: true },
      { id: "uv", name: "\u8BBF\u5BA2\u6570" },
    ]}
    data={[
      { ds: "2020-12-31", uv: 20 },
      { ds: "2021-01-01", uv: 21 },
      { ds: "2021-01-02", uv: 15 },
      { ds: "2021-01-03", uv: 40 },
      { ds: "2021-01-04", uv: 31 },
      { ds: "2021-01-05", uv: 32 },
      { ds: "2021-01-06", uv: 30 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo"}},"line-demo-1":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(y.a.mark(function T(){var f,u,g,O;return y.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=e("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,u=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=i.sent,O=function(){return u.default.createElement(g.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},i.abrupt("return",O);case 11:case"end":return i.stop()}},T)}));function B(){return M.apply(this,arguments)}return B}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Line } from 'chart-render';

export default () => (
  <Line
    meta={[
      { id: "ds", name: "\u65E5\u671F", isDim: true },
      { id: "page", name: "\u9875\u9762\u540D\u79F0", isDim: true },
      { id: "uv", name: "\u8BBF\u5BA2\u6570" },
    ]}
    data={[
      { ds: "2020-12-31", page: "\u767B\u5F55\u9875", uv: 20 },
      { ds: "2020-12-31", page: "\u9996\u9875", uv: 120 },
      { ds: "2021-01-01", page: "\u767B\u5F55\u9875", uv: 21 },
      { ds: "2021-01-01", page: "\u9996\u9875", uv: 121 },
      { ds: "2021-01-02", page: "\u767B\u5F55\u9875", uv: 15 },
      { ds: "2021-01-02", page: "\u9996\u9875", uv: 115 },
      { ds: "2021-01-03", page: "\u767B\u5F55\u9875", uv: 40 },
      { ds: "2021-01-03", page: "\u9996\u9875", uv: 140 },
      { ds: "2021-01-04", page: "\u767B\u5F55\u9875", uv: 31 },
      { ds: "2021-01-04", page: "\u9996\u9875", uv: 131 },
      { ds: "2021-01-05", page: "\u767B\u5F55\u9875", uv: 32 },
      { ds: "2021-01-05", page: "\u9996\u9875", uv: 132 },
      { ds: "2021-01-06", page: "\u767B\u5F55\u9875", uv: 30 },
      { ds: "2021-01-06", page: "\u9996\u9875", uv: 130 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-1"}},"line-demo-2":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(y.a.mark(function T(){var f,u,g,O;return y.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=e("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,u=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=i.sent,O=function(){return u.default.createElement(g.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"},{id:"pv",name:"\u8BBF\u95EE\u91CF"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20,pv:120},{ds:"2020-12-31",page:"\u9996\u9875",uv:120,pv:1120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21,pv:121},{ds:"2021-01-01",page:"\u9996\u9875",uv:121,pv:1121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15,pv:115},{ds:"2021-01-02",page:"\u9996\u9875",uv:115,pv:1115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40,pv:140},{ds:"2021-01-03",page:"\u9996\u9875",uv:140,pv:1140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31,pv:131},{ds:"2021-01-04",page:"\u9996\u9875",uv:131,pv:1131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32,pv:132},{ds:"2021-01-05",page:"\u9996\u9875",uv:132,pv:1132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30,pv:130},{ds:"2021-01-06",page:"\u9996\u9875",uv:130,pv:1130}]})},i.abrupt("return",O);case 11:case"end":return i.stop()}},T)}));function B(){return M.apply(this,arguments)}return B}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Line } from 'chart-render';

export default () => (
  <Line
    meta={[
      { id: "ds", name: "\u65E5\u671F", isDim: true },
      { id: "page", name: "\u9875\u9762\u540D\u79F0", isDim: true },
      { id: "uv", name: "\u8BBF\u5BA2\u6570" },
      { id: "pv", name: "\u8BBF\u95EE\u91CF" },
    ]}
    data={[
      { ds: "2020-12-31", page: "\u767B\u5F55\u9875", uv: 20, pv: 120 },
      { ds: "2020-12-31", page: "\u9996\u9875", uv: 120, pv: 1120 },
      { ds: "2021-01-01", page: "\u767B\u5F55\u9875", uv: 21, pv: 121 },
      { ds: "2021-01-01", page: "\u9996\u9875", uv: 121, pv: 1121 },
      { ds: "2021-01-02", page: "\u767B\u5F55\u9875", uv: 15, pv: 115 },
      { ds: "2021-01-02", page: "\u9996\u9875", uv: 115, pv: 1115 },
      { ds: "2021-01-03", page: "\u767B\u5F55\u9875", uv: 40, pv: 140 },
      { ds: "2021-01-03", page: "\u9996\u9875", uv: 140, pv: 1140 },
      { ds: "2021-01-04", page: "\u767B\u5F55\u9875", uv: 31, pv: 131 },
      { ds: "2021-01-04", page: "\u9996\u9875", uv: 131, pv: 1131 },
      { ds: "2021-01-05", page: "\u767B\u5F55\u9875", uv: 32, pv: 132 },
      { ds: "2021-01-05", page: "\u9996\u9875", uv: 132, pv: 1132 },
      { ds: "2021-01-06", page: "\u767B\u5F55\u9875", uv: 30, pv: 130 },
      { ds: "2021-01-06", page: "\u9996\u9875", uv: 130, pv: 1130 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-2"}},"line-demo-3":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(y.a.mark(function T(){var f,u,g,O;return y.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=e("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,u=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=i.sent,O=function(){return u.default.createElement(g.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},i.abrupt("return",O);case 11:case"end":return i.stop()}},T)}));function B(){return M.apply(this,arguments)}return B}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Line } from 'chart-render';

export default () => (
  <Line
    meta={[
      { id: "ds", name: "\u65E5\u671F", "isDim": true },
      { id: "pv", name: "\u8BBF\u95EE\u91CF" },
      { id: "uv", name: "\u8BBF\u5BA2\u6570" }
    ]}
    data={[
      { ds: "2020-12-31", pv: 50, uv: 20 },
      { ds: "2021-01-01", pv: 76, uv: 21 },
      { ds: "2021-01-02", pv: 46, uv: 15 },
      { ds: "2021-01-03", pv: 89, uv: 40 },
      { ds: "2021-01-04", pv: 66, uv: 31 },
      { ds: "2021-01-05", pv: 46, uv: 32 },
      { ds: "2021-01-06", pv: 45, uv: 30 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-3"}},"line-demo-4":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(y.a.mark(function T(){var f,u,g,O;return y.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=e("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,u=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=i.sent,O=function(){return u.default.createElement(g.Line,{withArea:!0,isStack:!0,isPercent:!0,meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},i.abrupt("return",O);case 11:case"end":return i.stop()}},T)}));function B(){return M.apply(this,arguments)}return B}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Line } from 'chart-render';

export default () => (
  <Line
    withArea // \u5F00\u542F\u9762\u79EF\u56FE
    isStack // \u5806\u53E0\u5C55\u793A
    isPercent // \u767E\u5206\u6BD4\u9762\u79EF\u56FE
    meta={[
      { id: "ds", name: "\u65E5\u671F", "isDim": true },
      { id: "pv", name: "\u8BBF\u95EE\u91CF" },
      { id: "uv", name: "\u8BBF\u5BA2\u6570" }
    ]}
    data={[
      { ds: "2020-12-31", pv: 50, uv: 20 },
      { ds: "2021-01-01", pv: 76, uv: 21 },
      { ds: "2021-01-02", pv: 46, uv: 15 },
      { ds: "2021-01-03", pv: 89, uv: 40 },
      { ds: "2021-01-04", pv: 66, uv: 31 },
      { ds: "2021-01-05", pv: 46, uv: 32 },
      { ds: "2021-01-06", pv: 45, uv: 30 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-4"}},"pivot-table-demo":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(y.a.mark(function T(){var f,u,g,O;return y.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=e("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,u=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=i.sent,O=function(){return u.default.createElement(g.PivotTable,{style:{maxHeight:400,overflow:"auto"},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},i.abrupt("return",O);case 11:case"end":return i.stop()}},T)}));function B(){return M.apply(this,arguments)}return B}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u5927\u5B81\u5E97', season: '\u4E00\u5B63\u5EA6', month: '2022-01', valueA: 782, valueB: 0.566 },
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u5927\u5B81\u5E97', season: '\u4E00\u5B63\u5EA6', month: '2022-02', valueA: 856, valueB: 0.403 },
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u5927\u5B81\u5E97', season: '\u4E00\u5B63\u5EA6', month: '2022-03', valueA: 886, valueB: 0.555 },
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u5927\u5B81\u5E97', season: '\u4E8C\u5B63\u5EA6', month: '2022-04', valueA: 555, valueB: 0.444 },
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u5927\u5B81\u5E97', season: '\u4E8C\u5B63\u5EA6', month: '2022-05', valueA: 444, valueB: 0.333 },
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97', season: '\u4E00\u5B63\u5EA6', month: '2022-01', valueA: 922, valueB: 0.778 },
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97', season: '\u4E00\u5B63\u5EA6', month: '2022-02', valueA: 888, valueB: 0.887 },
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97', season: '\u4E00\u5B63\u5EA6', month: '2022-03', valueA: 879, valueB: 0.870 },
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97', season: '\u4E8C\u5B63\u5EA6', month: '2022-04', valueA: 800, valueB: 0.723 },
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97', season: '\u4E8C\u5B63\u5EA6', month: '2022-05', valueA: 813, valueB: 0.789 },
      { subs: '\u6D59\u6C5F\u5B50\u516C\u53F8', shop: '\u4EB2\u6A59\u91CC', season: '\u4E00\u5B63\u5EA6', month: '2022-01', valueA: 500, valueB: 0.463 },
      { subs: '\u6D59\u6C5F\u5B50\u516C\u53F8', shop: '\u4EB2\u6A59\u91CC', season: '\u4E00\u5B63\u5EA6', month: '2022-02', valueA: 833, valueB: 0.456 },
      { subs: '\u6D59\u6C5F\u5B50\u516C\u53F8', shop: '\u4EB2\u6A59\u91CC', season: '\u4E00\u5B63\u5EA6', month: '2022-03', valueA: 821, valueB: 0.442 },
      { subs: '\u6D59\u6C5F\u5B50\u516C\u53F8', shop: '\u4EB2\u6A59\u91CC', season: '\u4E8C\u5B63\u5EA6', month: '2022-04', valueA: 834, valueB: 0.456 },
      { subs: '\u6D59\u6C5F\u5B50\u516C\u53F8', shop: '\u4EB2\u6A59\u91CC', season: '\u4E8C\u5B63\u5EA6', month: '2022-05', valueA: 803, valueB: 0.700 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo"}},"pivot-table-demo-1":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(y.a.mark(function T(){var f,u,g,O;return y.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=e("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,u=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=i.sent,O=function(){return u.default.createElement(g.PivotTable,{style:{maxHeight:400,overflow:"auto"},cellRender:function(N,I,S){return u.default.createElement("div",null,u.default.createElement("p",null,"\u53C2\u6570\u8868\uFF1A"),u.default.createElement("p",{style:{color:["red","orange","yellow","green","blue"][Object.keys(I).length]}},N),u.default.createElement("p",null,JSON.stringify(I)),u.default.createElement("p",null,JSON.stringify(S)))},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},i.abrupt("return",O);case 11:case"end":return i.stop()}},T)}));function B(){return M.apply(this,arguments)}return B}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { PivotTable } from 'chart-render';

export default () => (
  <PivotTable
    style={{ maxHeight: 400, overflow: 'auto' }}
    cellRender={(val, dimRecord, indId) => (
      <div>
        <p>\u53C2\u6570\u8868\uFF1A</p>
        <p style={{
          color: ['red', 'orange', 'yellow', 'green', 'blue'][Object.keys(dimRecord).length],
        }}>{val}</p>
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
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u5927\u5B81\u5E97', season: '\u4E00\u5B63\u5EA6', month: '2022-01', valueA: 782, valueB: 0.566 },
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u5927\u5B81\u5E97', season: '\u4E00\u5B63\u5EA6', month: '2022-02', valueA: 856, valueB: 0.403 },
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u5927\u5B81\u5E97', season: '\u4E00\u5B63\u5EA6', month: '2022-03', valueA: 886, valueB: 0.555 },
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u5927\u5B81\u5E97', season: '\u4E8C\u5B63\u5EA6', month: '2022-04', valueA: 555, valueB: 0.444 },
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u5927\u5B81\u5E97', season: '\u4E8C\u5B63\u5EA6', month: '2022-05', valueA: 444, valueB: 0.333 },
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97', season: '\u4E00\u5B63\u5EA6', month: '2022-01', valueA: 922, valueB: 0.778 },
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97', season: '\u4E00\u5B63\u5EA6', month: '2022-02', valueA: 888, valueB: 0.887 },
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97', season: '\u4E00\u5B63\u5EA6', month: '2022-03', valueA: 879, valueB: 0.870 },
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97', season: '\u4E8C\u5B63\u5EA6', month: '2022-04', valueA: 800, valueB: 0.723 },
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97', season: '\u4E8C\u5B63\u5EA6', month: '2022-05', valueA: 813, valueB: 0.789 },
      { subs: '\u6D59\u6C5F\u5B50\u516C\u53F8', shop: '\u4EB2\u6A59\u91CC', season: '\u4E00\u5B63\u5EA6', month: '2022-01', valueA: 500, valueB: 0.463 },
      { subs: '\u6D59\u6C5F\u5B50\u516C\u53F8', shop: '\u4EB2\u6A59\u91CC', season: '\u4E00\u5B63\u5EA6', month: '2022-02', valueA: 833, valueB: 0.456 },
      { subs: '\u6D59\u6C5F\u5B50\u516C\u53F8', shop: '\u4EB2\u6A59\u91CC', season: '\u4E00\u5B63\u5EA6', month: '2022-03', valueA: 821, valueB: 0.442 },
      { subs: '\u6D59\u6C5F\u5B50\u516C\u53F8', shop: '\u4EB2\u6A59\u91CC', season: '\u4E8C\u5B63\u5EA6', month: '2022-04', valueA: 834, valueB: 0.456 },
      { subs: '\u6D59\u6C5F\u5B50\u516C\u53F8', shop: '\u4EB2\u6A59\u91CC', season: '\u4E8C\u5B63\u5EA6', month: '2022-05', valueA: 803, valueB: 0.700 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-1"}},"pivot-table-demo-2":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(y.a.mark(function T(){var f,u,g,O,F,i,l;return y.a.wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return i=function(S,s){if(!s&&S&&S.__esModule)return S;if(S===null||typeof S!="object"&&typeof S!="function")return{default:S};var A=F(s);if(A&&A.has(S))return A.get(S);var d={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var p in S)if(p!=="default"&&Object.prototype.hasOwnProperty.call(S,p)){var m=a?Object.getOwnPropertyDescriptor(S,p):null;m&&(m.get||m.set)?Object.defineProperty(d,p,m):d[p]=S[p]}return d.default=S,A&&A.set(S,d),d},F=function(S){if(typeof WeakMap!="function")return null;var s=new WeakMap,A=new WeakMap;return(F=function(a){return a?A:s})(S)},f=e("K+nK"),N.t0=f,N.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return N.t1=N.sent,u=(0,N.t0)(N.t1),N.t2=i,N.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return N.t3=N.sent,g=(0,N.t2)(N.t3),N.next=15,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 15:return O=N.sent,l=function(){var S=(0,g.useState)(!1),s=(0,u.default)(S,2),A=s[0],d=s[1];return g.default.createElement(g.default.Fragment,null,g.default.createElement("label",null,"\u53EF\u5C55\u5F00/\u6536\u7F29\uFF1A",g.default.createElement("input",{type:"checkbox",value:A,onChange:function(){return d(!A)}})),g.default.createElement(O.PivotTable,{leftExpandable:A,showSubtotal:!1,meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]}))},N.abrupt("return",l);case 18:case"end":return N.stop()}},T)}));function B(){return M.apply(this,arguments)}return B}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
import { PivotTable } from 'chart-render';

export default () => {
  const [expandable, setExpandable] = useState(false);

  return (
    <>
      <label>\u53EF\u5C55\u5F00/\u6536\u7F29\uFF1A<input type="checkbox" value={expandable} onChange={() => setExpandable(!expandable)} /></label>
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
          { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u5927\u5B81\u5E97', season: '\u4E00\u5B63\u5EA6', month: '2022-01', valueA: 782, valueB: 0.566 },
          { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u5927\u5B81\u5E97', season: '\u4E00\u5B63\u5EA6', month: '2022-02', valueA: 856, valueB: 0.403 },
          { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u5927\u5B81\u5E97', season: '\u4E00\u5B63\u5EA6', month: '2022-03', valueA: 886, valueB: 0.555 },
          { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u5927\u5B81\u5E97', season: '\u4E8C\u5B63\u5EA6', month: '2022-04', valueA: 555, valueB: 0.444 },
          { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u5927\u5B81\u5E97', season: '\u4E8C\u5B63\u5EA6', month: '2022-05', valueA: 444, valueB: 0.333 },
          { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97', season: '\u4E00\u5B63\u5EA6', month: '2022-01', valueA: 922, valueB: 0.778 },
          { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97', season: '\u4E00\u5B63\u5EA6', month: '2022-02', valueA: 888, valueB: 0.887 },
          { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97', season: '\u4E00\u5B63\u5EA6', month: '2022-03', valueA: 879, valueB: 0.870 },
          { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97', season: '\u4E8C\u5B63\u5EA6', month: '2022-04', valueA: 800, valueB: 0.723 },
          { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97', season: '\u4E8C\u5B63\u5EA6', month: '2022-05', valueA: 813, valueB: 0.789 },
          { subs: '\u6D59\u6C5F\u5B50\u516C\u53F8', shop: '\u4EB2\u6A59\u91CC', season: '\u4E00\u5B63\u5EA6', month: '2022-01', valueA: 500, valueB: 0.463 },
          { subs: '\u6D59\u6C5F\u5B50\u516C\u53F8', shop: '\u4EB2\u6A59\u91CC', season: '\u4E00\u5B63\u5EA6', month: '2022-02', valueA: 833, valueB: 0.456 },
          { subs: '\u6D59\u6C5F\u5B50\u516C\u53F8', shop: '\u4EB2\u6A59\u91CC', season: '\u4E00\u5B63\u5EA6', month: '2022-03', valueA: 821, valueB: 0.442 },
          { subs: '\u6D59\u6C5F\u5B50\u516C\u53F8', shop: '\u4EB2\u6A59\u91CC', season: '\u4E8C\u5B63\u5EA6', month: '2022-04', valueA: 834, valueB: 0.456 },
          { subs: '\u6D59\u6C5F\u5B50\u516C\u53F8', shop: '\u4EB2\u6A59\u91CC', season: '\u4E8C\u5B63\u5EA6', month: '2022-05', valueA: 803, valueB: 0.700 },
        ]}
      />
    </>
  );
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-2"}},"form-render-demo":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(y.a.mark(function T(){var f,u,g,O,F,i,l,b,N,I,S,s,A,d;return y.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return S=function(P,w){if(!w&&P&&P.__esModule)return P;if(P===null||typeof P!="object"&&typeof P!="function")return{default:P};var z=I(w);if(z&&z.has(P))return z.get(P);var _={},ie=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ge in P)if(ge!=="default"&&Object.prototype.hasOwnProperty.call(P,ge)){var pn=ie?Object.getOwnPropertyDescriptor(P,ge):null;pn&&(pn.get||pn.set)?Object.defineProperty(_,ge,pn):_[ge]=P[ge]}return _.default=P,z&&z.set(P,_),_},I=function(P){if(typeof WeakMap!="function")return null;var w=new WeakMap,z=new WeakMap;return(I=function(ie){return ie?z:w})(P)},f=e("K+nK"),p.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return p.t0=f,p.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return p.t1=p.sent,u=(0,p.t0)(p.t1),p.t2=f,p.next=13,e.e(62).then(e.bind(null,"fWQN"));case 13:return p.t3=p.sent,g=(0,p.t2)(p.t3),p.t4=f,p.next=18,e.e(63).then(e.bind(null,"mtLc"));case 18:return p.t5=p.sent,O=(0,p.t4)(p.t5),p.t6=f,p.next=23,e.e(65).then(e.bind(null,"yKVA"));case 23:return p.t7=p.sent,F=(0,p.t6)(p.t7),p.t8=f,p.next=28,e.e(59).then(e.bind(null,"879j"));case 28:return p.t9=p.sent,i=(0,p.t8)(p.t9),p.t10=f,p.next=33,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 33:return p.t11=p.sent,l=(0,p.t10)(p.t11),p.next=37,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 37:return b=p.sent,p.t12=S,p.next=41,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 41:return p.t13=p.sent,N=(0,p.t12)(p.t13),s={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},A=function(m){(0,F.default)(w,m);var P=(0,i.default)(w);function w(){return(0,g.default)(this,w),P.apply(this,arguments)}return(0,O.default)(w,[{key:"render",value:function(){var _=this.props.form;return l.default.createElement("div",null,l.default.createElement(N.default,{form:_,schema:s}),l.default.createElement(u.default,{type:"primary",onClick:_.submit},"\u63D0\u4EA4"))}}]),w}(l.default.Component),d=(0,N.connectForm)(A),p.abrupt("return",d);case 47:case"end":return p.stop()}},T)}));function B(){return M.apply(this,arguments)}return B}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default connectForm(Demo);`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo"}},"form-render-demo-1":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(y.a.mark(function T(){var f,u,g,O,F,i,l,b,N,I;return y.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return l=function(d,a){if(!a&&d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var p=i(a);if(p&&p.has(d))return p.get(d);var m={},P=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var w in d)if(w!=="default"&&Object.prototype.hasOwnProperty.call(d,w)){var z=P?Object.getOwnPropertyDescriptor(d,w):null;z&&(z.get||z.set)?Object.defineProperty(m,w,z):m[w]=d[w]}return m.default=d,p&&p.set(d,m),m},i=function(d){if(typeof WeakMap!="function")return null;var a=new WeakMap,p=new WeakMap;return(i=function(P){return P?p:a})(d)},f=e("K+nK"),s.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return s.t0=f,s.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return s.t1=s.sent,u=(0,s.t0)(s.t1),s.t2=f,s.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return s.t3=s.sent,g=(0,s.t2)(s.t3),s.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 17:return O=s.sent,s.t4=l,s.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 21:return s.t5=s.sent,F=(0,s.t4)(s.t5),b={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},N=function(){var d=(0,F.useForm)();return g.default.createElement("div",null,g.default.createElement(F.default,{form:d,schema:b}),g.default.createElement(u.default,{type:"primary",onClick:d.submit},"\u63D0\u4EA4"))},I=N,s.abrupt("return",I);case 27:case"end":return s.stop()}},T)}));function B(){return M.apply(this,arguments)}return B}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo-1"}},"form-render-demo-2":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(y.a.mark(function T(){var f,u,g,O,F,i,l,b,N,I;return y.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return l=function(d,a){if(!a&&d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var p=i(a);if(p&&p.has(d))return p.get(d);var m={},P=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var w in d)if(w!=="default"&&Object.prototype.hasOwnProperty.call(d,w)){var z=P?Object.getOwnPropertyDescriptor(d,w):null;z&&(z.get||z.set)?Object.defineProperty(m,w,z):m[w]=d[w]}return m.default=d,p&&p.set(d,m),m},i=function(d){if(typeof WeakMap!="function")return null;var a=new WeakMap,p=new WeakMap;return(i=function(P){return P?p:a})(d)},f=e("K+nK"),s.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return s.t0=f,s.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return s.t1=s.sent,u=(0,s.t0)(s.t1),s.t2=f,s.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return s.t3=s.sent,g=(0,s.t2)(s.t3),s.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 17:return O=s.sent,s.t4=l,s.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 21:return s.t5=s.sent,F=(0,s.t4)(s.t5),b={displayType:"row",labelWidth:60,type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F",type:"range",format:"date"},siteUrl:{title:"\u7F51\u5740",type:"string",placeholder:"\u6B64\u5904\u5FC5\u586B",required:!0,props:{addonBefore:"https://",addonAfter:".com"}}}},N=function(){var d=(0,F.useForm)(),a=function(m,P){P.length>0?alert("errors:"+JSON.stringify(P)):alert("formData:"+JSON.stringify(m,null,2))};return g.default.createElement("div",null,g.default.createElement(F.default,{form:d,schema:b,onFinish:a}),g.default.createElement(u.default,{type:"primary",onClick:d.submit},"\u63D0\u4EA4"))},I=N,s.abrupt("return",I);case 27:case"end":return s.stop()}},T)}));function B(){return M.apply(this,arguments)}return B}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-demo-2"}},"migrate-demo":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(y.a.mark(function T(){var f,u,g,O,F,i,l,b;return y.a.wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return l=function(){var s=(0,g.useForm)(),A=function(a,p){p.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(p))):alert(JSON.stringify(a))};return u.default.createElement("div",null,u.default.createElement(g.default,{form:s,schema:i,onFinish:A}),u.default.createElement("button",{onClick:s.submit},"\u63D0\u4EA4"))},F=function(s,A){if(!A&&s&&s.__esModule)return s;if(s===null||typeof s!="object"&&typeof s!="function")return{default:s};var d=O(A);if(d&&d.has(s))return d.get(s);var a={},p=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var m in s)if(m!=="default"&&Object.prototype.hasOwnProperty.call(s,m)){var P=p?Object.getOwnPropertyDescriptor(s,m):null;P&&(P.get||P.set)?Object.defineProperty(a,m,P):a[m]=s[m]}return a.default=s,d&&d.set(s,a),a},O=function(s){if(typeof WeakMap!="function")return null;var A=new WeakMap,d=new WeakMap;return(O=function(p){return p?d:A})(s)},f=e("K+nK"),I.t0=f,I.next=7,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 7:return I.t1=I.sent,u=(0,I.t0)(I.t1),I.t2=F,I.next=12,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 12:return I.t3=I.sent,g=(0,I.t2)(I.t3),i={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}},b=l,I.abrupt("return",b);case 17:case"end":return I.stop()}},T)}));function B(){return M.apply(this,arguments)}return B}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate-demo"}},"display-demo":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(y.a.mark(function T(){var f,u,g,O,F;return y.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return f=e("K+nK"),l.t0=f,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,u=(0,l.t0)(l.t1),l.t2=f,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,g=(0,l.t2)(l.t3),O=function(N){return{type:"object",displayType:N,properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},objectName:{title:"\u5BF9\u8C61",bind:"obj",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},F=function(){return u.default.createElement("div",null,u.default.createElement("h2",null,"display: row"),u.default.createElement(g.default,{schema:O("row")}),u.default.createElement("h2",null,"display: column"),u.default.createElement(g.default,{schema:O("column")}))},l.abrupt("return",F);case 14:case"end":return l.stop()}},T)}));function B(){return M.apply(this,arguments)}return B}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`},"demo/display.js":{import:"../demo/display",content:$}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo"}},"display-demo-1":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(y.a.mark(function T(){var f,u,g,O,F;return y.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return f=e("K+nK"),l.t0=f,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,u=(0,l.t0)(l.t1),l.t2=f,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,g=(0,l.t2)(l.t3),O={type:"object",displayType:"inline",properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},F=function(){return u.default.createElement(g.default,{schema:O})},l.abrupt("return",F);case 14:case"end":return l.stop()}},T)}));function B(){return M.apply(this,arguments)}return B}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:$}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-1"}},"display-demo-2":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(y.a.mark(function T(){var f,u,g,O,F;return y.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return f=e("K+nK"),l.t0=f,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,u=(0,l.t0)(l.t1),l.t2=f,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,g=(0,l.t2)(l.t3),O={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0},check:{title:"box",type:"boolean",default:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},F=function(){return u.default.createElement(g.default,{readOnly:!0,schema:O})},l.abrupt("return",F);case 14:case"end":return l.stop()}},T)}));function B(){return M.apply(this,arguments)}return B}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form readOnly schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:$}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-2"}},"display-demo-3":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(y.a.mark(function T(){var f,u,g,O,F;return y.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return f=e("K+nK"),l.t0=f,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,u=(0,l.t0)(l.t1),l.t2=f,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,g=(0,l.t2)(l.t3),O={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0,width:"50%"},check:{title:"box",type:"boolean",default:!0,width:"50%",labelWidth:6},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},F=function(){return u.default.createElement(g.default,{labelWidth:"200",schema:O})},l.abrupt("return",F);case 14:case"end":return l.stop()}},T)}));function B(){return M.apply(this,arguments)}return B}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form labelWidth="200" schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:$}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-3"}},"display-demo-4":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(y.a.mark(function T(){var f,u,g,O,F,i;return y.a.wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return f=e("K+nK"),b.t0=f,b.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return b.t1=b.sent,u=(0,b.t0)(b.t1),b.t2=f,b.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return b.t3=b.sent,g=(0,b.t2)(b.t3),O={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},F=function(){return u.default.createElement(g.default,{schema:O})},i=F,b.abrupt("return",i);case 15:case"end":return b.stop()}},T)}));function B(){return M.apply(this,arguments)}return B}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:$}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-4"}},"display-demo-5":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(y.a.mark(function T(){var f,u,g,O,F,i;return y.a.wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return f=e("K+nK"),b.t0=f,b.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return b.t1=b.sent,u=(0,b.t0)(b.t1),b.t2=f,b.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return b.t3=b.sent,g=(0,b.t2)(b.t3),O={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},F=function(){return u.default.createElement(g.default,{schema:O})},i=F,b.abrupt("return",i);case 15:case"end":return b.stop()}},T)}));function B(){return M.apply(this,arguments)}return B}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:$}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-5"}},"display-demo-6":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(y.a.mark(function T(){var f,u,g,O,F,i;return y.a.wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return f=e("K+nK"),b.t0=f,b.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return b.t1=b.sent,u=(0,b.t0)(b.t1),b.t2=f,b.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return b.t3=b.sent,g=(0,b.t2)(b.t3),O={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},F=function(){return u.default.createElement(g.default,{schema:O})},i=F,b.abrupt("return",i);case 15:case"end":return b.stop()}},T)}));function B(){return M.apply(this,arguments)}return B}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:$}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-6"}},"display-demo-7":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(y.a.mark(function T(){var f,u,g,O,F,i;return y.a.wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return f=e("K+nK"),b.t0=f,b.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return b.t1=b.sent,u=(0,b.t0)(b.t1),b.t2=f,b.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return b.t3=b.sent,g=(0,b.t2)(b.t3),O={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},F=function(){return u.default.createElement(g.default,{schema:O})},i=F,b.abrupt("return",i);case 15:case"end":return b.stop()}},T)}));function B(){return M.apply(this,arguments)}return B}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:$}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-7"}},"form-methods-demo":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(y.a.mark(function T(){var f,u,g,O,F,i,l,b,N,I,S,s,A;return y.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return S=function(m,P){if(!P&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var w=I(P);if(w&&w.has(m))return w.get(m);var z={},_=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ie in m)if(ie!=="default"&&Object.prototype.hasOwnProperty.call(m,ie)){var ge=_?Object.getOwnPropertyDescriptor(m,ie):null;ge&&(ge.get||ge.set)?Object.defineProperty(z,ie,ge):z[ie]=m[ie]}return z.default=m,w&&w.set(m,z),z},I=function(m){if(typeof WeakMap!="function")return null;var P=new WeakMap,w=new WeakMap;return(I=function(_){return _?w:P})(m)},f=e("K+nK"),a.next=5,e.e(17).then(e.t.bind(null,"lfLe",7));case 5:return a.t0=f,a.next=8,e.e(18).then(e.t.bind(null,"Cp9S",7));case 8:return a.t1=a.sent,u=(0,a.t0)(a.t1),a.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return a.t2=f,a.next=15,e.e(12).then(e.t.bind(null,"4IMT",7));case 15:return a.t3=a.sent,g=(0,a.t2)(a.t3),a.next=19,e.e(14).then(e.t.bind(null,"tL+A",7));case 19:return a.t4=f,a.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return a.t5=a.sent,O=(0,a.t4)(a.t5),a.t6=f,a.next=27,Promise.resolve().then(e.bind(null,"tJVT"));case 27:return a.t7=a.sent,F=(0,a.t6)(a.t7),a.t8=S,a.next=32,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 32:return a.t9=a.sent,i=(0,a.t8)(a.t9),a.next=36,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 36:return l=a.sent,a.t10=S,a.next=40,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 40:return a.t11=a.sent,b=(0,a.t10)(a.t11),a.next=44,e.e(15).then(e.bind(null,"OH0R"));case 44:return N=a.sent,s=function(){var m=(0,b.useForm)(),P=(0,i.useState)({}),w=(0,F.default)(P,2),z=w[0],_=w[1],ie=function(){(0,N.fakeApi)("xxx/getForm").then(function(We){m.setValues({input1:"hello world",select1:"c"})})};(0,i.useEffect)(function(){(0,N.delay)(1e3).then(function(pn){_({type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}})})},[]);var ge=function(We,Ne){Ne.length>0?O.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(Ne.map(function(Fn){return Fn.name}))):(0,N.fakeApi)("xxx/submit",We).then(function(Fn){return O.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})};return i.default.createElement("div",{style:{width:"400px"}},i.default.createElement(b.default,{form:m,schema:z,onFinish:ge}),i.default.createElement(u.default,null,i.default.createElement(g.default,{onClick:ie},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),i.default.createElement(g.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},A=s,a.abrupt("return",A);case 48:case"end":return a.stop()}},T)}));function B(){return M.apply(this,arguments)}return B}()}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:tn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo"}},"form-methods-demo-1":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(y.a.mark(function T(){var f,u,g,O,F,i,l,b,N,I,S,s,A;return y.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return I=function(m,P){if(!P&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var w=N(P);if(w&&w.has(m))return w.get(m);var z={},_=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ie in m)if(ie!=="default"&&Object.prototype.hasOwnProperty.call(m,ie)){var ge=_?Object.getOwnPropertyDescriptor(m,ie):null;ge&&(ge.get||ge.set)?Object.defineProperty(z,ie,ge):z[ie]=m[ie]}return z.default=m,w&&w.set(m,z),z},N=function(m){if(typeof WeakMap!="function")return null;var P=new WeakMap,w=new WeakMap;return(N=function(_){return _?w:P})(m)},f=e("K+nK"),a.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return a.t0=f,a.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return a.t1=a.sent,u=(0,a.t0)(a.t1),a.t2=f,a.next=13,Promise.resolve().then(e.bind(null,"PpiC"));case 13:return a.t3=a.sent,g=(0,a.t2)(a.t3),a.next=17,e.e(14).then(e.t.bind(null,"tL+A",7));case 17:return a.t4=f,a.next=20,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 20:return a.t5=a.sent,O=(0,a.t4)(a.t5),a.t6=f,a.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return a.t7=a.sent,F=(0,a.t6)(a.t7),a.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 29:return i=a.sent,a.t8=I,a.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 33:return a.t9=a.sent,l=(0,a.t8)(a.t9),a.next=37,e.e(15).then(e.bind(null,"OH0R"));case 37:return b=a.sent,S={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},s=function(){var m=(0,l.useForm)(),P=function(_,ie){ie.length>0?O.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(ie.map(function(ge){return ge.name}))):(0,b.fakeApi)("xxx/submit",_).then(function(ge){return O.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},w=function(_){var ie=_.data,ge=_.errors,pn=_.schema,We=(0,g.default)(_,["data","errors","schema"]);return(0,b.fakeApi)("xxx/validation").then(function(Ne){return{name:"select1",error:["\u5916\u90E8\u6821\u9A8C\u9519\u8BEF"]}})};return F.default.createElement("div",{style:{width:"400px"}},F.default.createElement(l.default,{form:m,schema:S,beforeFinish:w,onFinish:P}),F.default.createElement(u.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},A=s,a.abrupt("return",A);case 42:case"end":return a.stop()}},T)}));function B(){return M.apply(this,arguments)}return B}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:tn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-1"}},"form-methods-demo-2":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(y.a.mark(function T(){var f,u,g,O,F,i,l,b,N,I,S,s,A;return y.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return I=function(m,P){if(!P&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var w=N(P);if(w&&w.has(m))return w.get(m);var z={},_=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ie in m)if(ie!=="default"&&Object.prototype.hasOwnProperty.call(m,ie)){var ge=_?Object.getOwnPropertyDescriptor(m,ie):null;ge&&(ge.get||ge.set)?Object.defineProperty(z,ie,ge):z[ie]=m[ie]}return z.default=m,w&&w.set(m,z),z},N=function(m){if(typeof WeakMap!="function")return null;var P=new WeakMap,w=new WeakMap;return(N=function(_){return _?w:P})(m)},f=e("K+nK"),a.next=5,e.e(17).then(e.t.bind(null,"lfLe",7));case 5:return a.t0=f,a.next=8,e.e(18).then(e.t.bind(null,"Cp9S",7));case 8:return a.t1=a.sent,u=(0,a.t0)(a.t1),a.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return a.t2=f,a.next=15,e.e(12).then(e.t.bind(null,"4IMT",7));case 15:return a.t3=a.sent,g=(0,a.t2)(a.t3),a.next=19,e.e(14).then(e.t.bind(null,"tL+A",7));case 19:return a.t4=f,a.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return a.t5=a.sent,O=(0,a.t4)(a.t5),a.t6=f,a.next=27,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 27:return a.t7=a.sent,F=(0,a.t6)(a.t7),a.next=31,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 31:return i=a.sent,a.t8=I,a.next=35,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 35:return a.t9=a.sent,l=(0,a.t8)(a.t9),a.next=39,e.e(15).then(e.bind(null,"OH0R"));case 39:return b=a.sent,S={type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F\u8303\u56F4",type:"range",format:"date"}}},s=function(){var m=(0,l.useForm)(),P=function(_,ie){ie.length>0?O.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(ie.map(function(ge){return ge.name}))):(0,b.fakeApi)("xxx/submit",_).then(function(ge){return O.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},w=function(){(0,b.fakeApi)("xxx/getForm").then(function(_){m.setValues({startDate:"2020-04-04",endDate:"2020-04-24"})})};return F.default.createElement("div",{style:{width:"400px"}},F.default.createElement(l.default,{form:m,schema:S,onFinish:P}),F.default.createElement(u.default,null,F.default.createElement(g.default,{onClick:w},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),F.default.createElement(g.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},A=s,a.abrupt("return",A);case 44:case"end":return a.stop()}},T)}));function B(){return M.apply(this,arguments)}return B}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:tn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-2"}},"form-methods-demo-3":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(y.a.mark(function T(){var f,u,g,O,F,i,l,b,N,I,S,s;return y.a.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return N=function(p,m){if(!m&&p&&p.__esModule)return p;if(p===null||typeof p!="object"&&typeof p!="function")return{default:p};var P=b(m);if(P&&P.has(p))return P.get(p);var w={},z=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var _ in p)if(_!=="default"&&Object.prototype.hasOwnProperty.call(p,_)){var ie=z?Object.getOwnPropertyDescriptor(p,_):null;ie&&(ie.get||ie.set)?Object.defineProperty(w,_,ie):w[_]=p[_]}return w.default=p,P&&P.set(p,w),w},b=function(p){if(typeof WeakMap!="function")return null;var m=new WeakMap,P=new WeakMap;return(b=function(z){return z?P:m})(p)},f=e("K+nK"),d.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return d.t0=f,d.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return d.t1=d.sent,u=(0,d.t0)(d.t1),d.next=12,e.e(14).then(e.t.bind(null,"tL+A",7));case 12:return d.t2=f,d.next=15,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 15:return d.t3=d.sent,g=(0,d.t2)(d.t3),d.t4=N,d.next=20,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 20:return d.t5=d.sent,O=(0,d.t4)(d.t5),d.next=24,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 24:return F=d.sent,d.t6=N,d.next=28,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 28:return d.t7=d.sent,i=(0,d.t6)(d.t7),d.next=32,e.e(15).then(e.bind(null,"OH0R"));case 32:return l=d.sent,I={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select1:{title:"\u5355\u9009",type:"string",widget:"select"}}}}},S=function(){var p=(0,i.useForm)(),m=function(){p.setSchemaByPath("obj1.select1",{enum:["nouth","south","east","west"],enumNames:["\u4E1C","\u5357","\u897F","\u5317"]})},P=function(z,_){_.length>0?g.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(_.map(function(ie){return ie.name}))):g.default.info(JSON.stringify(z))};return O.default.createElement("div",{style:{width:"400px"}},O.default.createElement(i.default,{form:p,schema:I,onMount:m,onFinish:P}),O.default.createElement(u.default,{type:"primary",onClick:p.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},s=S,d.abrupt("return",s);case 37:case"end":return d.stop()}},T)}));function B(){return M.apply(this,arguments)}return B}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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
      enum: ['nouth', 'south', 'east', 'west'],
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

export default Demo;`},"utils/index.js":{import:"./utils",content:tn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-3"}},"function-demo":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(y.a.mark(function T(){var f,u,g,O,F,i,l,b;return y.a.wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return F=function(s,A){if(!A&&s&&s.__esModule)return s;if(s===null||typeof s!="object"&&typeof s!="function")return{default:s};var d=O(A);if(d&&d.has(s))return d.get(s);var a={},p=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var m in s)if(m!=="default"&&Object.prototype.hasOwnProperty.call(s,m)){var P=p?Object.getOwnPropertyDescriptor(s,m):null;P&&(P.get||P.set)?Object.defineProperty(a,m,P):a[m]=s[m]}return a.default=s,d&&d.set(s,a),a},O=function(s){if(typeof WeakMap!="function")return null;var A=new WeakMap,d=new WeakMap;return(O=function(p){return p?d:A})(s)},f=e("K+nK"),I.t0=f,I.next=6,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 6:return I.t1=I.sent,u=(0,I.t0)(I.t1),I.t2=F,I.next=11,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 11:return I.t3=I.sent,g=(0,I.t2)(I.t3),i={type:"object",properties:{select1:{title:"\u5355\u9009",description:"\u5C1D\u8BD5\u9009\u62E9\u201C\u663E\u793A\u8F93\u5165\u6846\u201D",type:"string",enum:["a","b"],enumNames:["\u9690\u85CF\u8F93\u5165\u6846","\u663E\u793A\u8F93\u5165\u6846"],disabled:"{{rootValue.input1.length > 5}}",default:"a"},input1:{title:"\u8F93\u5165\u6846",description:"\u5C1D\u8BD5\u8F93\u5165\u8D85\u8FC75\u4E2A\u5B57\u7B26",type:"string",hidden:'{{formData.select1 == "a"}}'}}},l=function(){var s=(0,g.useForm)();return u.default.createElement(g.default,{form:s,schema:i})},b=l,I.abrupt("return",b);case 17:case"end":return I.stop()}},T)}));function B(){return M.apply(this,arguments)}return B}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo1;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo"}},"function-demo-1":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(y.a.mark(function T(){var f,u,g,O,F;return y.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return f=e("K+nK"),l.t0=f,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,u=(0,l.t0)(l.t1),l.t2=f,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return l.t3=l.sent,g=(0,l.t2)(l.t3),l.next=13,e.e(19).then(e.bind(null,"8iYR"));case 13:return O=l.sent,F=function(){return u.default.createElement(g.default,{schema:O.expression})},l.abrupt("return",F);case 16:case"end":return l.stop()}},T)}));function B(){return M.apply(this,arguments)}return B}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { expression } from '../json/schema';

export default () => <FR schema={expression} />;`},"demo/FR.jsx":{import:"../demo/FR",content:Ie},"json/schema.js":{import:"../json/schema",content:me}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo-1"}},"lifeCycle-demo":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(y.a.mark(function T(){var f,u,g,O,F,i,l,b,N;return y.a.wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return F=function(A,d){if(!d&&A&&A.__esModule)return A;if(A===null||typeof A!="object"&&typeof A!="function")return{default:A};var a=O(d);if(a&&a.has(A))return a.get(A);var p={},m=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var P in A)if(P!=="default"&&Object.prototype.hasOwnProperty.call(A,P)){var w=m?Object.getOwnPropertyDescriptor(A,P):null;w&&(w.get||w.set)?Object.defineProperty(p,P,w):p[P]=A[P]}return p.default=A,a&&a.set(A,p),p},O=function(A){if(typeof WeakMap!="function")return null;var d=new WeakMap,a=new WeakMap;return(O=function(m){return m?a:d})(A)},S.t0=F,S.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return S.t1=S.sent,f=(0,S.t0)(S.t1),S.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 9:return u=S.sent,S.t2=F,S.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 13:return S.t3=S.sent,g=(0,S.t2)(S.t3),i=function(A){return new Promise(function(d){return setTimeout(d,A)})},l={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u4E0B\u62C9\u9009\u6846",description:"\u52A0\u8F7D\u4E2D...",type:"string",enum:[],widget:"select"}}},b=function(){var A=(0,g.useForm)(),d=function(){A.setValues({input1:"hello world"}),i(3e3).then(function(p){A.setSchemaByPath("select1",{description:"",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]})})};return f.default.createElement(g.default,{form:A,schema:l,onMount:d})},N=b,S.abrupt("return",N);case 20:case"end":return S.stop()}},T)}));function B(){return M.apply(this,arguments)}return B}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"lifeCycle-demo"}},"watch-demo":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(y.a.mark(function T(){var f,u,g,O,F,i,l,b;return y.a.wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return F=function(s,A){if(!A&&s&&s.__esModule)return s;if(s===null||typeof s!="object"&&typeof s!="function")return{default:s};var d=O(A);if(d&&d.has(s))return d.get(s);var a={},p=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var m in s)if(m!=="default"&&Object.prototype.hasOwnProperty.call(s,m)){var P=p?Object.getOwnPropertyDescriptor(s,m):null;P&&(P.get||P.set)?Object.defineProperty(a,m,P):a[m]=s[m]}return a.default=s,d&&d.set(s,a),a},O=function(s){if(typeof WeakMap!="function")return null;var A=new WeakMap,d=new WeakMap;return(O=function(p){return p?d:A})(s)},I.t0=F,I.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return I.t1=I.sent,f=(0,I.t0)(I.t1),I.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 9:return u=I.sent,I.t2=F,I.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 13:return I.t3=I.sent,g=(0,I.t2)(I.t3),i={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"}}},l=function(){var s=(0,g.useForm)(),A={"#":function(a){console.log("\u8868\u5355\u7684\u65F6\u65F6\u6570\u636E\u4E3A\uFF1A",a)},input1:function(a){s.setValueByPath("input2",a)}};return f.default.createElement(g.default,{form:s,schema:i,watch:A})},b=l,I.abrupt("return",b);case 19:case"end":return I.stop()}},T)}));function B(){return M.apply(this,arguments)}return B}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo"}},"watch-demo-1":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(y.a.mark(function T(){var f,u,g,O,F,i,l,b,N,I;return y.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return l=function(d,a){if(!a&&d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var p=i(a);if(p&&p.has(d))return p.get(d);var m={},P=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var w in d)if(w!=="default"&&Object.prototype.hasOwnProperty.call(d,w)){var z=P?Object.getOwnPropertyDescriptor(d,w):null;z&&(z.get||z.set)?Object.defineProperty(m,w,z):m[w]=d[w]}return m.default=d,p&&p.set(d,m),m},i=function(d){if(typeof WeakMap!="function")return null;var a=new WeakMap,p=new WeakMap;return(i=function(P){return P?p:a})(d)},f=e("K+nK"),s.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return s.t0=f,s.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return s.t1=s.sent,u=(0,s.t0)(s.t1),s.t2=l,s.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return s.t3=s.sent,g=(0,s.t2)(s.t3),s.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 17:return O=s.sent,s.t4=l,s.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 21:return s.t5=s.sent,F=(0,s.t4)(s.t5),b={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"radio"}}}}},N=function(){var d=(0,F.useForm)(),a=function(P,w){w.length>0?alert("errorFields:"+JSON.stringify(w)):alert("formData:"+JSON.stringify(P,null,2))},p={input1:function(P){P.length>2?d.setSchemaByPath("obj1.select",function(w){var z=w.enumNames;return{enumNames:z.map(function(_){return _+"a"})}}):d.setSchemaByPath("obj1.select",{enumNames:["\u65E9","\u4E2D","\u665A"]})}};return g.default.createElement("div",null,g.default.createElement(F.default,{form:d,schema:b,onFinish:a,watch:p}),g.default.createElement(u.default,{type:"",style:{marginRight:8},onClick:function(){return d.setSchemaByPath("input2",{title:"\u7F16\u8F91\u6846",format:"textarea"})}},"\u5C06 input \u6539\u4E3A textarea"),g.default.createElement(u.default,{type:"primary",onClick:d.submit},"\u63D0\u4EA4"))},I=N,s.abrupt("return",I);case 27:case"end":return s.stop()}},T)}));function B(){return M.apply(this,arguments)}return B}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo-1"}},"widget-demo":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(y.a.mark(function T(){var f,u,g,O,F,i,l,b,N,I,S,s,A;return y.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return N=function(m,P){if(!P&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var w=b(P);if(w&&w.has(m))return w.get(m);var z={},_=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ie in m)if(ie!=="default"&&Object.prototype.hasOwnProperty.call(m,ie)){var ge=_?Object.getOwnPropertyDescriptor(m,ie):null;ge&&(ge.get||ge.set)?Object.defineProperty(z,ie,ge):z[ie]=m[ie]}return z.default=m,w&&w.set(m,z),z},b=function(m){if(typeof WeakMap!="function")return null;var P=new WeakMap,w=new WeakMap;return(b=function(_){return _?w:P})(m)},f=e("K+nK"),a.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return a.t0=f,a.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return a.t1=a.sent,u=(0,a.t0)(a.t1),a.next=12,Promise.all([e.e(3),e.e(60)]).then(e.t.bind(null,"cUip",7));case 12:return a.t2=f,a.next=15,Promise.all([e.e(0),e.e(12),e.e(58),e.e(61)]).then(e.t.bind(null,"iJl9",7));case 15:return a.t3=a.sent,g=(0,a.t2)(a.t3),a.t4=f,a.next=20,e.e(64).then(e.bind(null,"0Owb"));case 20:return a.t5=a.sent,O=(0,a.t4)(a.t5),a.t6=N,a.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return a.t7=a.sent,F=(0,a.t6)(a.t7),a.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 29:return i=a.sent,a.t8=N,a.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 33:return a.t9=a.sent,l=(0,a.t8)(a.t9),I={type:"object",properties:{string:{title:"\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6",type:"string",widget:"site"},select:{title:"\u5355\u9009",type:"number",enum:[1,2,3],enumNames:["\u9009\u98791","\u9009\u98792","\u9009\u98793"]}}},S=function(m){return F.default.createElement(g.default,(0,O.default)({addonBefore:"http://",addonAfter:".com"},m))},s=function(){var m=(0,l.useForm)(),P=function(){};return F.default.createElement("div",null,F.default.createElement(l.default,{form:m,schema:I,widgets:{site:S},onFinish:function(z){return alert(JSON.stringify(z,null,2))}}),F.default.createElement(u.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4"))},A=s,a.abrupt("return",A);case 40:case"end":return a.stop()}},T)}));function B(){return M.apply(this,arguments)}return B}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
  return <Input addonBefore="http://" addonAfter=".com" {...props} />;
};

const Demo = () => {
  const form = useForm();
  const handleSubmit = () => {};
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},identifier:"widget-demo"}},"schema-demo":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(y.a.mark(function T(){var f,u,g,O,F;return y.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return f=e("K+nK"),l.t0=f,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,u=(0,l.t0)(l.t1),l.t2=f,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return l.t3=l.sent,g=(0,l.t2)(l.t3),l.next=13,e.e(19).then(e.bind(null,"8iYR"));case 13:return O=l.sent,F=function(){return u.default.createElement(g.default,{schema:O.basic})},l.abrupt("return",F);case 16:case"end":return l.stop()}},T)}));function B(){return M.apply(this,arguments)}return B}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { basic } from '../json/schema';

export default () => <FR schema={basic} />;`},"demo/FR.jsx":{import:"../demo/FR",content:Ie},"json/schema.js":{import:"../json/schema",content:me}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo"}},"docs-playground":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(y.a.mark(function T(){return y.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"BASV"));case 2:return u.abrupt("return",u.sent.default);case 3:case"end":return u.stop()}},T)}));function B(){return M.apply(this,arguments)}return B}()}),previewerProps:{sources:{_:{jsx:at},"main.js":{import:"./main",content:je},"json/simplest.json":{import:"./json/simplest.json",content:Mn},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:Tn},"monaco/index.js":{import:"./monaco",content:On},"theme.css":{import:"./theme.css",content:fn},"index.css":{import:"./index.css",content:Ye}},dependencies:{antd:{version:"4.15.4",css:"antd/dist/antd.css"},react:{version:"^16.0.0"},"react-dom":{version:"^16.0.0"},"deep-equal":{version:"2.0.5"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.3.2"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-simple-code-editor":{version:"0.11.0"},prismjs:{version:"1.23.0"}},identifier:"docs-playground"}},"table-render-advanced":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(y.a.mark(function T(){return y.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"7ZP+"));case 2:return u.abrupt("return",u.sent.default);case 3:case"end":return u.stop()}},T)}));function B(){return M.apply(this,arguments)}return B}()}),previewerProps:{sources:{_:{tsx:Ln}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.0.5"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"1.x"}},transform:!0,defaultShowCode:!0,identifier:"table-render-advanced"}},"table-render-demo":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(y.a.mark(function T(){var f,u,g,O,F,i,l,b,N;return y.a.wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return f=e("K+nK"),S.t0=f,S.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return S.t1=S.sent,u=(0,S.t0)(S.t1),S.next=8,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(57)]).then(e.bind(null,"P2DI"));case 8:for(g=S.sent,O=[],F=0;F<6;F++)O.push({id:F.toString(),title:"\u6807\u9898".concat(F+1),created_at:new Date().getTime()});return i={type:"object",properties:{string:{title:"\u6807\u9898",type:"string","ui:width":"30%"},created_at:{title:"\u521B\u5EFA\u65F6\u95F4",type:"string",format:"date","ui:width":"30%"}}},l=[{title:"\u6807\u9898",dataIndex:"title"},{title:"\u521B\u5EFA\u65F6\u95F4",key:"since",dataIndex:"created_at",valueType:"date"},{title:"\u64CD\u4F5C",render:function(A,d){return u.default.createElement("a",{onClick:function(){return alert(A.title)}},"\u7F16\u8F91")}}],b=function(){var A=function(){return{rows:O,total:O.length}};return u.default.createElement(g.TableProvider,null,u.default.createElement(g.Search,{schema:i,api:A}),u.default.createElement(g.Table,{headerTitle:"\u6700\u7B80\u8868\u683C",columns:l,rowKey:"id"}))},N=b,S.abrupt("return",N);case 16:case"end":return S.stop()}},T)}));function B(){return M.apply(this,arguments)}return B}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
  }
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
    render: (row, record) => (
     <a onClick={()=>alert(row.title)}>\u7F16\u8F91</a>
    ),
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

export default Wrapper;`}},dependencies:{react:{version:">=16.8.0"},"table-render":{version:"1.0.5"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.x"}},transform:!0,defaultShowCode:!0,identifier:"table-render-demo"}},"generator-demo":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(y.a.mark(function T(){var f,u,g,O,F,i;return y.a.wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return f=e("K+nK"),b.t0=f,b.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return b.t1=b.sent,u=(0,b.t0)(b.t1),b.t2=f,b.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(56)]).then(e.bind(null,"nYSz"));case 9:return b.t3=b.sent,g=(0,b.t2)(b.t3),O={schema:{type:"object",properties:{inputName:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string"}}},displayType:"row",showDescIcon:!0,labelWidth:120},F=function(){return u.default.createElement("div",{style:{height:"80vh"}},u.default.createElement(g.default,{defaultValue:O}))},i=F,b.abrupt("return",i);case 15:case"end":return b.stop()}},T)}));function B(){return M.apply(this,arguments)}return B}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Generator from 'fr-generator';

const defaultValue = {
  schema: {
    type: 'object',
    properties: {
      inputName: {
        title: '\u7B80\u5355\u8F93\u5165\u6846',
        type: 'string',
      },
    },
  },
  displayType: 'row',
  showDescIcon: true,
  labelWidth: 120,
};

const Demo = () => {
  return (
    <div style={{ height: '80vh' }}>
      <Generator defaultValue={defaultValue} />
    </div>
  );
};

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.0.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"generator-demo"}},"generator-modal":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(y.a.mark(function T(){return y.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"PPgD"));case 2:return u.abrupt("return",u.sent.default);case 3:case"end":return u.stop()}},T)}));function B(){return M.apply(this,arguments)}return B}()}),previewerProps:{sources:{_:{jsx:wn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.0.0"},"react-dom":{version:">=16.9.0"}},identifier:"generator-modal"}},"generator-transformer":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(y.a.mark(function T(){return y.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"jktF"));case 2:return u.abrupt("return",u.sent.default);case 3:case"end":return u.stop()}},T)}));function B(){return M.apply(this,arguments)}return B}()}),previewerProps:{sources:{_:{jsx:Rn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.0.0"},"react-dom":{version:">=16.9.0"}},identifier:"generator-transformer"}},"generator-settings":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(y.a.mark(function T(){return y.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"M63W"));case 2:return u.abrupt("return",u.sent.default);case 3:case"end":return u.stop()}},T)}));function B(){return M.apply(this,arguments)}return B}()}),previewerProps:{sources:{_:{jsx:we}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.0.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-settings"}},"generator-playground":{component:Object(V.dynamic)({loader:function(){var M=Object(x.a)(y.a.mark(function T(){return y.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"TYW4"));case 2:return u.abrupt("return",u.sent.default);case 3:case"end":return u.stop()}},T)}));function B(){return M.apply(this,arguments)}return B}()}),previewerProps:{sources:{_:{jsx:kn},"index.less":{import:"./index.less",content:$n}},dependencies:{react:{version:">=16.8.0"},umi:{version:"3.4.15"},"fr-generator":{version:"2.0.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-playground"}}}},TIsu:function(Nn,gn,e){},Zs1V:function(Nn){Nn.exports=JSON.parse("{}")},p8sG:function(Nn,gn,e){"use strict";Nn.exports=e("80pN")}}]);
