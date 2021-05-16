(window.webpackJsonp=window.webpackJsonp||[]).push([[43,9],{"0zqC":function(Tn,gn,e){"use strict";e.r(gn);var Y=e("tJVT"),t=e("q1tI"),R=e.n(t),V=e("wx14"),ce=e("rePB"),$=e("ODXe"),on=e("U8pU"),De=e("Ff2n"),ye=e("VTBJ"),rt=e("TSYQ"),Ne=e.n(rt),Fn=e("Zm9Q"),Bn=e("5Z9U"),Rn=e("6cGi"),fn=e("KQm4"),Qe=e("wgJM"),Ln=e("t23M");function wn(n){var a=Object(t.useRef)(),u=Object(t.useRef)(!1);function h(){for(var b=arguments.length,v=new Array(b),O=0;O<b;O++)v[O]=arguments[O];u.current||(Qe.a.cancel(a.current),a.current=Object(Qe.a)(function(){n.apply(void 0,v)}))}return Object(t.useEffect)(function(){return function(){u.current=!0,Qe.a.cancel(a.current)}},[]),h}function Sn(n){var a=Object(t.useRef)([]),u=Object(t.useState)({}),h=Object($.a)(u,2),b=h[1],v=Object(t.useRef)(typeof n=="function"?n():n),O=wn(function(){var W=v.current;a.current.forEach(function(K){W=K(W)}),a.current=[],v.current=W,b({})});function S(W){a.current.push(W),O()}return[v.current,S]}var we=e("4IlW");function kn(n,a){var u,h=n.prefixCls,b=n.id,v=n.active,O=n.rtl,S=n.tab,W=S.key,K=S.tab,L=S.disabled,G=S.closeIcon,J=n.tabBarGutter,ie=n.tabPosition,X=n.closable,Q=n.renderWrapper,le=n.removeAriaLabel,U=n.editable,q=n.onClick,re=n.onRemove,Z=n.onFocus,oe="".concat(h,"-tab");t.useEffect(function(){return re},[]);var k={};ie==="top"||ie==="bottom"?k[O?"marginLeft":"marginRight"]=J:k.marginBottom=J;var be=U&&X!==!1&&!L;function ne(ae){L||q(ae)}function de(ae){ae.preventDefault(),ae.stopPropagation(),U.onEdit("remove",{key:W,event:ae})}var me=t.createElement("div",{key:W,ref:a,className:Ne()(oe,(u={},Object(ce.a)(u,"".concat(oe,"-with-remove"),be),Object(ce.a)(u,"".concat(oe,"-active"),v),Object(ce.a)(u,"".concat(oe,"-disabled"),L),u)),style:k,onClick:ne},t.createElement("div",{role:"tab","aria-selected":v,id:b&&"".concat(b,"-tab-").concat(W),className:"".concat(oe,"-btn"),"aria-controls":b&&"".concat(b,"-panel-").concat(W),"aria-disabled":L,tabIndex:L?null:0,onClick:function(H){H.stopPropagation(),ne(H)},onKeyDown:function(H){[we.a.SPACE,we.a.ENTER].includes(H.which)&&(H.preventDefault(),ne(H))},onFocus:Z},K),be&&t.createElement("button",{type:"button","aria-label":le||"remove",tabIndex:0,className:"".concat(oe,"-remove"),onClick:function(H){H.stopPropagation(),de(H)}},G||U.removeIcon||"\xD7"));return Q&&(me=Q(me)),me}var $n=t.forwardRef(kn),at={width:0,height:0,left:0,top:0};function F(n,a,u){return Object(t.useMemo)(function(){for(var h,b=new Map,v=a.get((h=n[0])===null||h===void 0?void 0:h.key)||at,O=v.left+v.width,S=0;S<n.length;S+=1){var W=n[S].key,K=a.get(W);if(!K){var L;K=a.get((L=n[S-1])===null||L===void 0?void 0:L.key)||at}var G=b.get(W)||Object(ye.a)({},K);G.right=O-G.left-G.width,b.set(W,G)}return b},[n.map(function(h){return h.key}).join("_"),a,u])}var A={width:0,height:0,left:0,top:0,right:0};function B(n,a,u,h,b){var v=b.tabs,O=b.tabPosition,S=b.rtl,W,K,L;["top","bottom"].includes(O)?(W="width",K=S?"right":"left",L=Math.abs(a.left)):(W="height",K="top",L=-a.top);var G=a[W],J=u[W],ie=h[W],X=G;return J+ie>G&&(X=G-ie),Object(t.useMemo)(function(){if(!v.length)return[0,0];for(var Q=v.length,le=Q,U=0;U<Q;U+=1){var q=n.get(v[U].key)||A;if(q[K]+q[W]>L+X){le=U-1;break}}for(var re=0,Z=Q-1;Z>=0;Z-=1){var oe=n.get(v[Z].key)||A;if(oe[K]<L){re=Z+1;break}}return[re,le]},[n,L,X,O,v.map(function(Q){return Q.key}).join("_"),S])}var f=e("Gytx"),o=e.n(f),g=e("Kwbf");function C(n,a){var u=n.prefixCls,h=n.invalidate,b=n.item,v=n.renderItem,O=n.responsive,S=n.registerSize,W=n.itemKey,K=n.className,L=n.style,G=n.children,J=n.display,ie=n.order,X=n.component,Q=X===void 0?"div":X,le=Object(De.a)(n,["prefixCls","invalidate","item","renderItem","responsive","registerSize","itemKey","className","style","children","display","order","component"]),U=O&&!J;function q(be){S(W,be)}t.useEffect(function(){return function(){q(null)}},[]);var re=v&&b!==void 0?v(b):G,Z;h||(Z={opacity:U?0:1,height:U?0:void 0,overflowY:U?"hidden":void 0,order:O?ie:void 0,pointerEvents:U?"none":void 0});var oe={};U&&(oe["aria-hidden"]=!0);var k=t.createElement(Q,Object(V.a)({className:Ne()(!h&&u,K),style:Object(ye.a)(Object(ye.a)({},Z),L)},oe,le,{ref:a}),re);return O&&(k=t.createElement(Ln.default,{onResize:function(ne){var de=ne.offsetWidth;q(de)}},k)),k}var P=t.forwardRef(C);P.displayName="Item";var s=P;function l(){var n=Object(t.useState)({}),a=Object($.a)(n,2),u=a[1],h=Object(t.useRef)([]),b=Object(t.useRef)(!1),v=0,O=0;Object(t.useEffect)(function(){return function(){b.current=!0}},[]);function S(W){var K=v;v+=1,h.current.length<K+1&&(h.current[K]=W);var L=h.current[K];function G(J){h.current[K]=typeof J=="function"?J(h.current[K]):J,Qe.a.cancel(O),O=Object(Qe.a)(function(){b.current||u({})})}return[L,G]}return S}var y=function(a,u){var h=t.useContext(j);if(!h){var b=a.component,v=b===void 0?"div":b,O=Object(De.a)(a,["component"]);return t.createElement(v,Object(V.a)({},O,{ref:u}))}var S=h.className,W=Object(De.a)(h,["className"]),K=a.className,L=Object(De.a)(a,["className"]);return t.createElement(j.Provider,{value:null},t.createElement(s,Object(V.a)({ref:u,className:Ne()(S,K)},W,L)))},T=t.forwardRef(y);T.displayName="RawItem";var M=T,j=t.createContext(null),i="responsive",N="invalidate";function d(n){return"+ ".concat(n.length," ...")}function r(n,a){var u=n.prefixCls,h=u===void 0?"rc-overflow":u,b=n.data,v=b===void 0?[]:b,O=n.renderItem,S=n.renderRawItem,W=n.itemKey,K=n.itemWidth,L=K===void 0?10:K,G=n.ssr,J=n.style,ie=n.className,X=n.maxCount,Q=n.renderRest,le=n.renderRawRest,U=n.suffix,q=n.component,re=q===void 0?"div":q,Z=n.itemComponent,oe=n.onVisibleChange,k=Object(De.a)(n,["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"]),be=l(),ne=G==="full",de=be(null),me=Object($.a)(de,2),ae=me[0],H=me[1],ue=ae||0,ge=be(new Map),ve=Object($.a)(ge,2),Se=ve[0],Ke=ve[1],Oe=be(0),Re=Object($.a)(Oe,2),Fe=Re[0],Ae=Re[1],Ie=be(0),Ee=Object($.a)(Ie,2),$e=Ee[0],qe=Ee[1],Ve=be(0),Ue=Object($.a)(Ve,2),Ye=Ue[0],Le=Ue[1],jn=Object(t.useState)(null),tn=Object($.a)(jn,2),Ze=tn[0],ln=tn[1],yn=Object(t.useState)(null),bn=Object($.a)(yn,2),Me=bn[0],He=bn[1],_e=t.useMemo(function(){return Me===null&&ne?Number.MAX_SAFE_INTEGER:Me||0},[Me,ae]),xe=Object(t.useState)(!1),Wn=Object($.a)(xe,2),Un=Wn[0],Kn=Wn[1],rn="".concat(h,"-item"),En=Math.max(Fe,$e),un=v.length&&X===i,Dn=X===N,en=un||typeof X=="number"&&v.length>X,an=Object(t.useMemo)(function(){var pe=v;return un?ae===null&&ne?pe=v:pe=v.slice(0,Math.min(v.length,ue/L)):typeof X=="number"&&(pe=v.slice(0,X)),pe},[v,L,ae,X,un]),In=Object(t.useMemo)(function(){return un?v.slice(_e+1):v.slice(an.length)},[v,an,un,_e]),cn=Object(t.useCallback)(function(pe,Pe){var Be;return typeof W=="function"?W(pe):(Be=W&&(pe==null?void 0:pe[W]))!==null&&Be!==void 0?Be:Pe},[W]),ke=Object(t.useCallback)(O||function(pe){return pe},[O]);function Xe(pe,Pe){He(pe),Pe||(Kn(pe<v.length-1),oe==null||oe(pe))}function Jn(pe,Pe){H(Pe.clientWidth)}function Gn(pe,Pe){Ke(function(Be){var nn=new Map(Be);return Pe===null?nn.delete(pe):nn.set(pe,Pe),nn})}function et(pe,Pe){qe(Pe),Ae($e)}function On(pe,Pe){Le(Pe)}function hn(pe){return Se.get(cn(an[pe],pe))}t.useLayoutEffect(function(){if(ue&&En&&an){var pe=Ye,Pe=an.length,Be=Pe-1;if(!Pe){Xe(0),ln(null);return}for(var nn=0;nn<Pe;nn+=1){var Qn=hn(nn);if(Qn===void 0){Xe(nn-1,!0);break}if(pe+=Qn,nn===Be-1&&pe+hn(Be)<=ue){Xe(Be),ln(null);break}else if(pe+En>ue){Xe(nn-1),ln(pe-Qn-Ye+$e);break}else if(nn===Be){Xe(Be),ln(pe-Ye);break}}U&&hn(0)+Ye>ue&&ln(null)}},[ue,Se,$e,Ye,cn,an]);var Hn=Un&&!!In.length,Cn={};Ze!==null&&un&&(Cn={position:"absolute",left:Ze,top:0});var mn={prefixCls:rn,responsive:un,component:Z,invalidate:Dn},Xn=S?function(pe,Pe){var Be=cn(pe,Pe);return t.createElement(j.Provider,{key:Be,value:Object(ye.a)(Object(ye.a)({},mn),{},{order:Pe,item:pe,itemKey:Be,registerSize:Gn,display:Pe<=_e})},S(pe,Pe))}:function(pe,Pe){var Be=cn(pe,Pe);return t.createElement(s,Object(V.a)({},mn,{order:Pe,key:Be,item:pe,renderItem:ke,itemKey:Be,registerSize:Gn,display:Pe<=_e}))},Nn,Yn={order:Hn?_e:Number.MAX_SAFE_INTEGER,className:"".concat(rn,"-rest"),registerSize:et,display:Hn};if(le)le&&(Nn=t.createElement(j.Provider,{value:Object(ye.a)(Object(ye.a)({},mn),Yn)},le(In)));else{var dn=Q||d;Nn=t.createElement(s,Object(V.a)({},mn,Yn),typeof dn=="function"?dn(In):dn)}var Mn=t.createElement(re,Object(V.a)({className:Ne()(!Dn&&h,ie),style:J,ref:a},k),an.map(Xn),en?Nn:null,U&&t.createElement(s,Object(V.a)({},mn,{order:_e,className:"".concat(rn,"-suffix"),registerSize:On,display:!0,style:Cn}),U));return un&&(Mn=t.createElement(Ln.default,{onResize:Jn},Mn)),Mn}var p=t.forwardRef(r);p.displayName="Overflow",p.Item=M,p.RESPONSIVE=i,p.INVALIDATE=N;var m=p,E=m,w=e("1OyB"),z=e("vuIU"),_=e("Ji7U"),se=e("LK+K"),he=e("bT9E"),pn=e("YrtM"),We=t.createContext(null);function Te(n,a){var u=Object(ye.a)({},n);return Object.keys(a).forEach(function(h){var b=a[h];b!==void 0&&(u[h]=b)}),u}function Pn(n){var a=n.children,u=n.locked,h=Object(De.a)(n,["children","locked"]),b=t.useContext(We),v=Object(pn.a)(function(){return Te(b,h)},[b,h],function(O,S){return!u&&(O[0]!==S[0]||!o()(O[1],S[1]))});return t.createElement(We.Provider,{value:v},a)}function st(n,a,u,h){var b=t.useContext(We),v=b.activeKey,O=b.onActive,S=b.onInactive,W={active:v===n};return a||(W.onMouseEnter=function(K){u==null||u({key:n,domEvent:K}),O(n)},W.onMouseLeave=function(K){h==null||h({key:n,domEvent:K}),S(n)}),W}function qn(n){var a=n.item,u=Object(De.a)(n,["item"]);return Object.defineProperty(u,"item",{get:function(){return Object(g.a)(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),a}}),u}function c(n){var a=n.icon,u=n.props,h=n.children,b;return typeof a=="function"?b=t.createElement(a,Object(ye.a)({},u)):b=a,b||h||null}function D(n){var a=t.useContext(We),u=a.mode,h=a.rtl,b=a.inlineIndent;if(u!=="inline")return null;var v=n;return h?{paddingRight:v*b}:{paddingLeft:v*b}}var I=[],fe=t.createContext(null);function ee(){return t.useContext(fe)}var je=t.createContext(I);function ze(n){var a=t.useContext(je);return t.useMemo(function(){return n!==void 0?[].concat(Object(fn.a)(a),[n]):a},[a,n])}var Ge=t.createContext(null),Ut=t.createContext(null);function Jt(n,a){return n===void 0?null:"".concat(n,"-").concat(a)}function Gt(n){var a=t.useContext(Ut);return Jt(a,n)}var br=function(n){Object(_.a)(u,n);var a=Object(se.a)(u);function u(){return Object(w.a)(this,u),a.apply(this,arguments)}return Object(z.a)(u,[{key:"render",value:function(){var b=this.props,v=b.title,O=b.attribute,S=b.elementRef,W=Object(De.a)(b,["title","attribute","elementRef"]),K=Object(he.a)(W,["eventKey"]);return Object(g.a)(!O,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),t.createElement(E.Item,Object(V.a)({},O,{title:typeof v=="string"?v:void 0},K,{ref:S}))}}]),u}(t.Component),Or=function(a){var u,h=a.style,b=a.className,v=a.eventKey,O=a.disabled,S=a.itemIcon,W=a.children,K=a.role,L=a.onMouseEnter,G=a.onMouseLeave,J=a.onClick,ie=a.onKeyDown,X=a.onFocus,Q=Object(De.a)(a,["style","className","eventKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"]),le=Gt(v),U=t.useContext(We),q=U.prefixCls,re=U.onItemClick,Z=U.disabled,oe=U.overflowDisabled,k=U.itemIcon,be=U.selectedKeys,ne=U.onActive,de="".concat(q,"-item"),me=t.useRef(),ae=t.useRef(),H=Z||O,ue=ze(v),ge=function(Ve){return{key:v,keyPath:ue,item:me.current,domEvent:Ve}},ve=S||k,Se=st(v,H,L,G),Ke=Se.active,Oe=Object(De.a)(Se,["active"]),Re=be.includes(v),Fe=D(ue.length),Ae=function(Ve){if(!H){var Ue=ge(Ve);J==null||J(qn(Ue)),re(Ue)}},Ie=function(Ve){if(ie==null||ie(Ve),Ve.which===we.a.ENTER){var Ue=ge(Ve);J==null||J(qn(Ue)),re(Ue)}},Ee=function(Ve){ne(v),X==null||X(Ve)},$e={};return a.role==="option"&&($e["aria-selected"]=Re),t.createElement(br,Object(V.a)({ref:me,elementRef:ae,role:K===null?"none":K||"menuitem",tabIndex:O?null:-1,"data-menu-id":oe&&le?null:le},Q,Oe,$e,{component:"li","aria-disabled":O,style:Object(ye.a)(Object(ye.a)({},Fe),h),className:Ne()(de,(u={},Object(ce.a)(u,"".concat(de,"-active"),Ke),Object(ce.a)(u,"".concat(de,"-selected"),Re),Object(ce.a)(u,"".concat(de,"-disabled"),H),u),b),onClick:Ae,onKeyDown:Ie,onFocus:Ee}),W,t.createElement(c,{props:Object(ye.a)(Object(ye.a)({},a),{},{isSelected:Re}),icon:ve}))};function Cr(n){var a=n.eventKey,u=ee(),h=ze(a);return t.useEffect(function(){if(u)return u.registerPath(a,h),function(){u.unregisterPath(a,h)}},[h]),u?null:t.createElement(Or,n)}var Et=Cr;function Dt(n,a){return Object(Fn.a)(n).map(function(u,h){if(t.isValidElement(u)){var b=u.key;return b==null&&(b="tmp_key-".concat([].concat(Object(fn.a)(a),[h]).join("-"))),t.cloneElement(u,{key:b,eventKey:b})}return u})}function _n(n){var a=t.useRef(n);a.current=n;var u=t.useCallback(function(){for(var h,b=arguments.length,v=new Array(b),O=0;O<b;O++)v[O]=arguments[O];return(h=a.current)===null||h===void 0?void 0:h.call.apply(h,[a].concat(v))},[]);return n?u:void 0}var Rr=function(a,u){var h=a.className,b=a.children,v=Object(De.a)(a,["className","children"]),O=t.useContext(We),S=O.prefixCls,W=O.mode;return t.createElement("ul",Object(V.a)({className:Ne()(S,"".concat(S,"-sub"),"".concat(S,"-").concat(W==="inline"?"inline":"vertical"),h)},v,{"data-menu-list":!0,ref:u}),b)},Ht=t.forwardRef(Rr);Ht.displayName="SubMenuList";var Xt=Ht,Sr=e("uciX"),Vn={adjustX:1,adjustY:1},Yt={topLeft:{points:["bl","tl"],overflow:Vn,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Vn,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:Vn,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:Vn,offset:[4,0]}},Pr={topLeft:{points:["bl","tl"],overflow:Vn,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Vn,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:Vn,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:Vn,offset:[4,0]}},fa=Yt;function Qt(n,a,u){if(a)return a;if(u)return u[n]||u.other}var jr={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function Er(n){var a=n.prefixCls,u=n.visible,h=n.children,b=n.popup,v=n.popupClassName,O=n.popupOffset,S=n.disabled,W=n.mode,K=n.onVisibleChange,L=t.useContext(We),G=L.getPopupContainer,J=L.rtl,ie=L.subMenuOpenDelay,X=L.subMenuCloseDelay,Q=L.builtinPlacements,le=L.triggerSubMenuAction,U=L.forceSubMenuRender,q=L.motion,re=L.defaultMotions,Z=t.useState(!1),oe=Object($.a)(Z,2),k=oe[0],be=oe[1],ne=J?Object(ye.a)(Object(ye.a)({},Pr),Q):Object(ye.a)(Object(ye.a)({},Yt),Q),de=jr[W],me=Qt(W,q,re),ae=Object(ye.a)(Object(ye.a)({},me),{},{leavedClassName:"".concat(a,"-hidden"),removeOnLeave:!1,motionAppear:!0}),H=t.useRef();return t.useEffect(function(){return H.current=Object(Qe.a)(function(){be(u)}),function(){Qe.a.cancel(H.current)}},[u]),t.createElement(Sr.a,{prefixCls:a,popupClassName:Ne()("".concat(a,"-popup"),Object(ce.a)({},"".concat(a,"-rtl"),J),v),stretch:W==="horizontal"?"minWidth":null,getPopupContainer:G,builtinPlacements:ne,popupPlacement:de,popupVisible:k,popup:b,popupAlign:O&&{offset:O},action:S?[]:[le],mouseEnterDelay:ie,mouseLeaveDelay:X,onPopupVisibleChange:K,forceRender:U,popupMotion:ae},h)}var Dr=e("8XRh");function Ir(n){var a=n.id,u=n.open,h=n.keyPath,b=n.children,v="inline",O=t.useContext(We),S=O.prefixCls,W=O.forceSubMenuRender,K=O.motion,L=O.defaultMotions,G=O.mode,J=t.useRef(!1);J.current=G===v;var ie=t.useState(!J.current),X=Object($.a)(ie,2),Q=X[0],le=X[1],U=J.current?u:!1;t.useEffect(function(){J.current&&le(!1)},[G]);var q=Object(ye.a)({},Qt(v,K,L));h.length>1&&(q.motionAppear=!1);var re=q.onVisibleChanged;return q.onVisibleChanged=function(Z){return!J.current&&!Z&&le(!0),re==null?void 0:re(Z)},Q?null:t.createElement(Pn,{mode:v,locked:!J.current},t.createElement(Dr.default,Object(V.a)({visible:U},q,{forceRender:W,removeOnLeave:!1,leavedClassName:"".concat(S,"-hidden")}),function(Z){var oe=Z.className,k=Z.style;return t.createElement(Xt,{id:a,className:oe,style:k},b)}))}var Nr=function(a){var u,h=a.style,b=a.className,v=a.title,O=a.eventKey,S=a.disabled,W=a.internalPopupClose,K=a.children,L=a.itemIcon,G=a.expandIcon,J=a.popupClassName,ie=a.popupOffset,X=a.onClick,Q=a.onMouseEnter,le=a.onMouseLeave,U=a.onTitleClick,q=a.onTitleMouseEnter,re=a.onTitleMouseLeave,Z=Object(De.a)(a,["style","className","title","eventKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"]),oe=Gt(O),k=t.useContext(We),be=k.prefixCls,ne=k.mode,de=k.openKeys,me=k.disabled,ae=k.overflowDisabled,H=k.activeKey,ue=k.selectedKeys,ge=k.itemIcon,ve=k.expandIcon,Se=k.onItemClick,Ke=k.onOpenChange,Oe=k.onActive,Re=t.useContext(Ge),Fe=Re.isSubPathKey,Ae=ze(),Ie="".concat(be,"-submenu"),Ee=me||S,$e=t.useRef(),qe=t.useRef(),Ve=L||ge,Ue=G||ve,Ye=de.includes(O),Le=!ae&&Ye,jn=Fe(ue,O),tn=st(O,Ee,q,re),Ze=tn.active,ln=Object(De.a)(tn,["active"]),yn=t.useState(!1),bn=Object($.a)(yn,2),Me=bn[0],He=bn[1],_e=function(Xe){Ee||He(Xe)},xe=function(Xe){_e(!0),Q==null||Q({key:O,domEvent:Xe})},Wn=function(Xe){_e(!1),le==null||le({key:O,domEvent:Xe})},Un=t.useMemo(function(){return Ze||(ne!=="inline"?Me||Fe([H],O):!1)},[ne,Ze,H,Me,O,Fe]),Kn=D(Ae.length),rn=function(Xe){Ee||(U==null||U({key:O,domEvent:Xe}),ne==="inline"&&Ke(O,!Ye))},En=_n(function(ke){X==null||X(qn(ke)),Se(ke)}),un=function(Xe){ne!=="inline"&&Ke(O,Xe)},Dn=function(){Oe(O)},en=oe&&"".concat(oe,"-popup"),an=t.createElement("div",Object(V.a)({role:"menuitem",style:Kn,className:"".concat(Ie,"-title"),tabIndex:Ee?null:-1,ref:$e,title:typeof v=="string"?v:null,"data-menu-id":ae&&oe?null:oe,"aria-expanded":Le,"aria-haspopup":!0,"aria-controls":en,"aria-disabled":Ee,onClick:rn,onFocus:Dn},ln),v,t.createElement(c,{icon:ne!=="horizontal"?Ue:null,props:Object(ye.a)(Object(ye.a)({},a),{},{isOpen:Le,isSubMenu:!0})},t.createElement("i",{className:"".concat(Ie,"-arrow")}))),In=t.useRef(ne);if(ne!=="inline"&&(In.current=Ae.length>1?"vertical":ne),!ae){var cn=In.current;an=t.createElement(Er,{mode:cn,prefixCls:Ie,visible:!W&&Le&&ne!=="inline",popupClassName:J,popupOffset:ie,popup:t.createElement(Pn,{mode:cn},t.createElement(Xt,{id:en,ref:qe},K)),disabled:Ee,onVisibleChange:un},an)}return t.createElement(Pn,{onItemClick:En,mode:ne==="horizontal"?"vertical":ne,itemIcon:Ve,expandIcon:Ue},t.createElement(E.Item,Object(V.a)({role:"none"},Z,{component:"li",style:h,className:Ne()(Ie,"".concat(Ie,"-").concat(ne),b,(u={},Object(ce.a)(u,"".concat(Ie,"-open"),Le),Object(ce.a)(u,"".concat(Ie,"-active"),Un),Object(ce.a)(u,"".concat(Ie,"-selected"),jn),Object(ce.a)(u,"".concat(Ie,"-disabled"),Ee),u)),onMouseEnter:xe,onMouseLeave:Wn}),an,!ae&&t.createElement(Ir,{id:en,open:Le,keyPath:Ae},K)))};function Zt(n){var a=n.eventKey,u=n.children,h=ze(a),b=Dt(u,h),v=ee();t.useEffect(function(){if(v)return v.registerPath(a,h),function(){v.unregisterPath(a,h)}},[h]);var O;return v?O=b:O=t.createElement(Nr,n,b),t.createElement(je.Provider,{value:h},O)}var Mr=e("x/xZ");function xt(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Object(Mr.a)(n)){var u=n.nodeName.toLowerCase(),h=["input","select","textarea","button"].includes(u)||n.isContentEditable||u==="a"&&!!n.getAttribute("href"),b=n.getAttribute("tabindex"),v=Number(b),O=null;return b&&!Number.isNaN(v)?O=v:h&&O===null&&(O=0),h&&n.disabled&&(O=null),O!==null&&(O>=0||a&&O<0)}return!1}function kt(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,u=Object(fn.a)(n.querySelectorAll("*")).filter(function(h){return xt(h,a)});return xt(n,a)&&u.unshift(n),u}var mt=null;function pa(){mt=document.activeElement}function va(){mt=null}function ha(){if(mt)try{mt.focus()}catch(n){}}function ga(n,a){if(a.keyCode===9){var u=kt(n),h=u[a.shiftKey?0:u.length-1],b=h===document.activeElement||n===document.activeElement;if(b){var v=u[a.shiftKey?u.length-1:0];v.focus(),a.preventDefault()}}}var It=we.a.LEFT,Nt=we.a.RIGHT,Mt=we.a.UP,ft=we.a.DOWN,pt=we.a.ENTER,qt=we.a.ESC,_t=[Mt,ft,It,Nt];function Ar(n,a,u,h){var b,v,O,S,W="prev",K="next",L="children",G="parent";if(n==="inline"&&h===pt)return{inlineTrigger:!0};var J=(b={},Object(ce.a)(b,Mt,W),Object(ce.a)(b,ft,K),b),ie=(v={},Object(ce.a)(v,It,u?K:W),Object(ce.a)(v,Nt,u?W:K),Object(ce.a)(v,ft,L),Object(ce.a)(v,pt,L),v),X=(O={},Object(ce.a)(O,Mt,W),Object(ce.a)(O,ft,K),Object(ce.a)(O,pt,L),Object(ce.a)(O,qt,G),Object(ce.a)(O,It,u?L:G),Object(ce.a)(O,Nt,u?G:L),O),Q={inline:J,horizontal:ie,vertical:X,inlineSub:J,horizontalSub:X,verticalSub:X},le=(S=Q["".concat(n).concat(a?"":"Sub")])===null||S===void 0?void 0:S[h];switch(le){case W:return{offset:-1,sibling:!0};case K:return{offset:1,sibling:!0};case G:return{offset:-1,sibling:!1};case L:return{offset:1,sibling:!1};default:return null}}function Tr(n){for(var a=n;a;){if(a.getAttribute("data-menu-list"))return a;a=a.parentElement}return null}function Fr(n,a){for(var u=n||document.activeElement;u;){if(a.has(u))return u;u=u.parentElement}return null}function Br(n,a){var u=kt(n,!0);return u.filter(function(h){return a.has(h)})}function er(n,a,u){var h=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!n)return null;var b=Br(n,a),v=b.length,O=b.findIndex(function(S){return u===S});return h<0?O===-1?O=v-1:O-=1:h>0&&(O+=1),O=(O+v)%v,b[O]}function wr(n,a,u,h,b,v,O,S,W,K){var L=t.useRef(),G=t.useRef();G.current=a;var J=function(){Qe.a.cancel(L.current)};return t.useEffect(function(){return function(){J()}},[]),function(ie){var X=ie.which;if([].concat(_t,[pt,qt]).includes(X)){var Q,le,U,q=function(){Q=new Set,le=new Map,U=new Map;var ge=v();return ge.forEach(function(ve){var Se=document.querySelector("[data-menu-id='".concat(Jt(h,ve),"']"));Se&&(Q.add(Se),U.set(Se,ve),le.set(ve,Se))}),Q};q();var re=le.get(a),Z=Fr(re,Q),oe=U.get(Z),k=Ar(n,O(oe,!0).length===1,u,X);if(!k)return;_t.includes(X)&&ie.preventDefault();var be=function(ge){if(ge){var ve=ge,Se=ge.querySelector("a");(Se==null?void 0:Se.getAttribute("href"))&&(ve=Se);var Ke=U.get(ge);S(Ke),J(),L.current=Object(Qe.a)(function(){G.current===Ke&&ve.focus()})}};if(k.sibling||!Z){var ne;!Z||n==="inline"?ne=b.current:ne=Tr(Z);var de=er(ne,Q,Z,k.offset);be(de)}else if(k.inlineTrigger)W(oe);else if(k.offset>0)W(oe,!0),J(),L.current=Object(Qe.a)(function(){q();var ue=Z.getAttribute("aria-controls"),ge=document.getElementById(ue),ve=er(ge,Q);be(ve)},5);else if(k.offset<0){var me=O(oe,!0),ae=me[me.length-2],H=le.get(ae);W(ae,!1),be(H)}}K==null||K(ie)}}var Wr=Math.random().toFixed(5).toString().slice(2),nr=0;function Kr(n){var a=Object(Rn.a)(n,{value:n}),u=Object($.a)(a,2),h=u[0],b=u[1];return t.useEffect(function(){nr+=1;var v="".concat(Wr,"-").concat(nr);b("rc-menu-uuid-".concat(v))},[]),h}var ya=e("p8sG");function Lr(n){Promise.resolve().then(n)}var At="__RC_UTIL_PATH_SPLIT__",tr=function(a){return a.join(At)},$r=function(a){return a.split(At)},Tt="rc-menu-more";function Vr(){var n=t.useState({}),a=Object($.a)(n,2),u=a[1],h=Object(t.useRef)(new Map),b=Object(t.useRef)(new Map),v=t.useState([]),O=Object($.a)(v,2),S=O[0],W=O[1],K=Object(t.useRef)(0),L=Object(t.useCallback)(function(U,q){var re=tr(q);b.current.set(re,U),h.current.set(U,re),K.current+=1;var Z=K.current;Lr(function(){Z===K.current&&u({})})},[]),G=Object(t.useCallback)(function(U,q){var re=tr(q);b.current.delete(re),h.current.delete(U)},[]),J=Object(t.useCallback)(function(U){W(U)},[]),ie=Object(t.useCallback)(function(U,q){var re=h.current.get(U)||"",Z=$r(re);return q&&S.includes(Z[0])&&Z.unshift(Tt),Z},[S]),X=Object(t.useCallback)(function(U,q){return U.some(function(re){var Z=ie(re,!0);return Z.includes(q)})},[ie]),Q=function(){var q=Object(fn.a)(h.current.keys());return S.length&&q.push(Tt),q},le=Object(t.useCallback)(function(U){var q="".concat(h.current.get(U)).concat(At),re=new Set;return Object(fn.a)(b.current.keys()).forEach(function(Z){Z.startsWith(q)&&re.add(b.current.get(Z))}),re},[]);return{registerPath:L,unregisterPath:G,refreshOverflowKeys:J,isSubPathKey:X,getKeyPath:ie,getKeys:Q,getSubPathKeys:le}}var vt=[],zr=function(a){var u,h,b=a.prefixCls,v=b===void 0?"rc-menu":b,O=a.style,S=a.className,W=a.tabIndex,K=W===void 0?0:W,L=a.children,G=a.direction,J=a.id,ie=a.mode,X=ie===void 0?"vertical":ie,Q=a.inlineCollapsed,le=a.disabled,U=a.disabledOverflow,q=a.subMenuOpenDelay,re=q===void 0?.1:q,Z=a.subMenuCloseDelay,oe=Z===void 0?.1:Z,k=a.forceSubMenuRender,be=a.defaultOpenKeys,ne=a.openKeys,de=a.activeKey,me=a.defaultActiveFirst,ae=a.selectable,H=ae===void 0?!0:ae,ue=a.multiple,ge=ue===void 0?!1:ue,ve=a.defaultSelectedKeys,Se=a.selectedKeys,Ke=a.onSelect,Oe=a.onDeselect,Re=a.inlineIndent,Fe=Re===void 0?24:Re,Ae=a.motion,Ie=a.defaultMotions,Ee=a.triggerSubMenuAction,$e=Ee===void 0?"hover":Ee,qe=a.builtinPlacements,Ve=a.itemIcon,Ue=a.expandIcon,Ye=a.overflowedIndicator,Le=Ye===void 0?"...":Ye,jn=a.getPopupContainer,tn=a.onClick,Ze=a.onOpenChange,ln=a.onKeyDown,yn=a.openAnimation,bn=a.openTransitionName,Me=Object(De.a)(a,["prefixCls","style","className","tabIndex","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName"]),He=Dt(L,vt),_e=t.useState(!1),xe=Object($.a)(_e,2),Wn=xe[0],Un=xe[1],Kn=t.useRef(),rn=Kr(J),En=G==="rtl",un=t.useMemo(function(){return X==="inline"&&Q?["vertical",Q]:[X,!1]},[X,Q]),Dn=Object($.a)(un,2),en=Dn[0],an=Dn[1],In=t.useState(0),cn=Object($.a)(In,2),ke=cn[0],Xe=cn[1],Jn=ke>=He.length-1||en!=="horizontal"||U,Gn=Object(Rn.a)(be,{value:ne,postState:function(x){return x||vt}}),et=Object($.a)(Gn,2),On=et[0],hn=et[1],Hn=t.useState(On),Cn=Object($.a)(Hn,2),mn=Cn[0],Xn=Cn[1],Nn=en==="inline",Yn=t.useRef(!1);t.useEffect(function(){Nn&&Xn(On)},[On]),t.useEffect(function(){if(!Yn.current){Yn.current=!0;return}if(Nn)hn(mn);else{var te=[];hn(te),Ze==null||Ze(te)}},[Nn]);var dn=Vr(),Mn=dn.registerPath,pe=dn.unregisterPath,Pe=dn.refreshOverflowKeys,Be=dn.isSubPathKey,nn=dn.getKeyPath,Qn=dn.getKeys,gt=dn.getSubPathKeys,Wt=t.useMemo(function(){return{registerPath:Mn,unregisterPath:pe}},[Mn,pe]),Kt=t.useMemo(function(){return{isSubPathKey:Be}},[Be]);t.useEffect(function(){Pe(Jn?vt:He.slice(ke+1).map(function(te){return te.key}))},[ke,Jn]);var Lt=Object(Rn.a)(de||me&&((u=He[0])===null||u===void 0?void 0:u.key),{value:de}),nt=Object($.a)(Lt,2),yt=nt[0],ot=nt[1],bt=_n(function(te){ot(te)}),$t=_n(function(){ot(void 0)}),Ot=Object(Rn.a)(ve||[],{value:Se,postState:function(x){return Array.isArray(x)?x:x==null?vt:[x]}}),Ct=Object($.a)(Ot,2),tt=Ct[0],An=Ct[1],Rt=function(x){if(!!H){var Ce=x.key,Je=tt.includes(Ce),sn;Je?sn=tt.filter(function(xn){return xn!==Ce}):ge?sn=[].concat(Object(fn.a)(tt),[Ce]):sn=[Ce],An(sn);var zn=Object(ye.a)(Object(ye.a)({},x),{},{selectedKeys:sn});Je?Oe==null||Oe(zn):Ke==null||Ke(zn)}},St=_n(function(te){tn==null||tn(qn(te)),Rt(te)}),lt=_n(function(te,x){var Ce=On.filter(function(sn){return sn!==te});if(x)Ce.push(te);else if(en!=="inline"){var Je=gt(te);Ce=Ce.filter(function(sn){return!Je.has(sn)})}o()(On,Ce)||(hn(Ce),Ze==null||Ze(Ce))}),Zn=_n(jn),ut=function(x,Ce){var Je=Ce!=null?Ce:!On.includes(x);lt(x,Je)},dt=wr(en,yt,En,rn,Kn,Qn,nn,ot,ut,ln);t.useEffect(function(){Un(!0)},[]);var Pt=en!=="horizontal"||U?He:He.map(function(te,x){return t.createElement(Pn,{key:te.key,overflowDisabled:x>ke},te)}),jt=t.createElement(E,Object(V.a)({id:J,ref:Kn,prefixCls:"".concat(v,"-overflow"),component:"ul",itemComponent:Et,className:Ne()(v,"".concat(v,"-root"),"".concat(v,"-").concat(en),S,(h={},Object(ce.a)(h,"".concat(v,"-inline-collapsed"),an),Object(ce.a)(h,"".concat(v,"-rtl"),En),h)),dir:G,style:O,role:"menu",tabIndex:K,data:Pt,renderRawItem:function(x){return x},renderRawRest:function(x){var Ce=x.length,Je=Ce?He.slice(-Ce):null;return t.createElement(Zt,{eventKey:Tt,title:Le,disabled:Jn,internalPopupClose:Ce===0},Je)},maxCount:en!=="horizontal"||U?E.INVALIDATE:E.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(x){Xe(x)},onKeyDown:dt},Me));return t.createElement(Ut.Provider,{value:rn},t.createElement(Pn,{prefixCls:v,mode:en,openKeys:On,rtl:En,disabled:le,motion:Wn?Ae:null,defaultMotions:Wn?Ie:null,activeKey:yt,onActive:bt,onInactive:$t,selectedKeys:tt,inlineIndent:Fe,subMenuOpenDelay:re,subMenuCloseDelay:oe,forceSubMenuRender:k,builtinPlacements:qe,triggerSubMenuAction:$e,getPopupContainer:Zn,itemIcon:Ve,expandIcon:Ue,onItemClick:St,onOpenChange:lt},t.createElement(Ge.Provider,{value:Kt},jt),t.createElement(fe.Provider,{value:Wt},He)))},Ur=zr,Jr=function(a){var u=a.className,h=a.title,b=a.eventKey,v=a.children,O=Object(De.a)(a,["className","title","eventKey","children"]),S=t.useContext(We),W=S.prefixCls,K="".concat(W,"-item-group");return t.createElement("li",Object(V.a)({},O,{onClick:function(G){return G.stopPropagation()},className:Ne()(K,u)}),t.createElement("div",{className:"".concat(K,"-title"),title:typeof h=="string"?h:void 0},h),t.createElement("ul",{className:"".concat(K,"-list")},v))};function Gr(n){var a=n.children,u=Object(De.a)(n,["children"]),h=ze(u.eventKey),b=Dt(a,h),v=ee();return v?b:t.createElement(Jr,u,b)}function Hr(n){var a=n.className,u=n.style,h=t.useContext(We),b=h.prefixCls,v=ee();return v?null:t.createElement("li",{className:Ne()("".concat(b,"-item-divider"),a),style:u})}var it=Ur;it.Item=Et,it.SubMenu=Zt,it.ItemGroup=Gr,it.Divider=Hr;var Xr=it,Yr=e("eDIo");function Qr(n,a){var u=n.prefixCls,h=n.editable,b=n.locale,v=n.style;return!h||h.showAdd===!1?null:t.createElement("button",{ref:a,type:"button",className:"".concat(u,"-nav-add"),style:v,"aria-label":(b==null?void 0:b.addAriaLabel)||"Add tab",onClick:function(S){h.onEdit("add",{event:S})}},h.addIcon||"+")}var rr=t.forwardRef(Qr);function Zr(n,a){var u=n.prefixCls,h=n.id,b=n.tabs,v=n.locale,O=n.mobile,S=n.moreIcon,W=S===void 0?"More":S,K=n.moreTransitionName,L=n.style,G=n.className,J=n.editable,ie=n.tabBarGutter,X=n.rtl,Q=n.onTabClick,le=Object(t.useState)(!1),U=Object($.a)(le,2),q=U[0],re=U[1],Z=Object(t.useState)(null),oe=Object($.a)(Z,2),k=oe[0],be=oe[1],ne="".concat(h,"-more-popup"),de="".concat(u,"-dropdown"),me=k!==null?"".concat(ne,"-").concat(k):null,ae=v==null?void 0:v.dropdownAriaLabel,H=t.createElement(Xr,{onClick:function(Re){var Fe=Re.key,Ae=Re.domEvent;Q(Fe,Ae),re(!1)},id:ne,tabIndex:-1,role:"listbox","aria-activedescendant":me,selectedKeys:[k],"aria-label":ae!==void 0?ae:"expanded dropdown"},b.map(function(Oe){return t.createElement(Et,{key:Oe.key,id:"".concat(ne,"-").concat(Oe.key),role:"option","aria-controls":h&&"".concat(h,"-panel-").concat(Oe.key),disabled:Oe.disabled},Oe.tab)}));function ue(Oe){for(var Re=b.filter(function($e){return!$e.disabled}),Fe=Re.findIndex(function($e){return $e.key===k})||0,Ae=Re.length,Ie=0;Ie<Ae;Ie+=1){Fe=(Fe+Oe+Ae)%Ae;var Ee=Re[Fe];if(!Ee.disabled){be(Ee.key);return}}}function ge(Oe){var Re=Oe.which;if(!q){[we.a.DOWN,we.a.SPACE,we.a.ENTER].includes(Re)&&(re(!0),Oe.preventDefault());return}switch(Re){case we.a.UP:ue(-1),Oe.preventDefault();break;case we.a.DOWN:ue(1),Oe.preventDefault();break;case we.a.ESC:re(!1);break;case we.a.SPACE:case we.a.ENTER:k!==null&&Q(k,Oe);break}}Object(t.useEffect)(function(){var Oe=document.getElementById(me);Oe&&Oe.scrollIntoView&&Oe.scrollIntoView(!1)},[k]),Object(t.useEffect)(function(){q||be(null)},[q]);var ve=Object(ce.a)({},X?"marginLeft":"marginRight",ie);b.length||(ve.visibility="hidden",ve.order=1);var Se=Ne()(Object(ce.a)({},"".concat(de,"-rtl"),X)),Ke=O?null:t.createElement(Yr.default,{prefixCls:de,overlay:H,trigger:["hover"],visible:q,transitionName:K,onVisibleChange:re,overlayClassName:Se,mouseEnterDelay:.1,mouseLeaveDelay:.1},t.createElement("button",{type:"button",className:"".concat(u,"-nav-more"),style:ve,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":ne,id:"".concat(h,"-more"),"aria-expanded":q,onKeyDown:ge},W));return t.createElement("div",{className:Ne()("".concat(u,"-nav-operations"),G),style:L,ref:a},Ke,t.createElement(rr,{prefixCls:u,locale:v,editable:J}))}var xr=t.forwardRef(Zr),Ft=Object(t.createContext)(null),kr=.1,ar=.01,ht=20,sr=Math.pow(.995,ht);function qr(n,a){var u=Object(t.useState)(),h=Object($.a)(u,2),b=h[0],v=h[1],O=Object(t.useState)(0),S=Object($.a)(O,2),W=S[0],K=S[1],L=Object(t.useState)(0),G=Object($.a)(L,2),J=G[0],ie=G[1],X=Object(t.useState)(),Q=Object($.a)(X,2),le=Q[0],U=Q[1],q=Object(t.useRef)();function re(de){var me=de.touches[0],ae=me.screenX,H=me.screenY;v({x:ae,y:H}),window.clearInterval(q.current)}function Z(de){if(!!b){de.preventDefault();var me=de.touches[0],ae=me.screenX,H=me.screenY;v({x:ae,y:H});var ue=ae-b.x,ge=H-b.y;a(ue,ge);var ve=Date.now();K(ve),ie(ve-W),U({x:ue,y:ge})}}function oe(){if(!!b&&(v(null),U(null),le)){var de=le.x/J,me=le.y/J,ae=Math.abs(de),H=Math.abs(me);if(Math.max(ae,H)<kr)return;var ue=de,ge=me;q.current=window.setInterval(function(){if(Math.abs(ue)<ar&&Math.abs(ge)<ar){window.clearInterval(q.current);return}ue*=sr,ge*=sr,a(ue*ht,ge*ht)},ht)}}var k=Object(t.useRef)();function be(de){var me=de.deltaX,ae=de.deltaY,H=0,ue=Math.abs(me),ge=Math.abs(ae);ue===ge?H=k.current==="x"?me:ae:ue>ge?(H=me,k.current="x"):(H=ae,k.current="y"),a(-H,-H)&&de.preventDefault()}var ne=Object(t.useRef)(null);ne.current={onTouchStart:re,onTouchMove:Z,onTouchEnd:oe,onWheel:be},t.useEffect(function(){function de(ue){ne.current.onTouchStart(ue)}function me(ue){ne.current.onTouchMove(ue)}function ae(ue){ne.current.onTouchEnd(ue)}function H(ue){ne.current.onWheel(ue)}return document.addEventListener("touchmove",me,{passive:!1}),document.addEventListener("touchend",ae,{passive:!1}),n.current.addEventListener("touchstart",de,{passive:!1}),n.current.addEventListener("wheel",H),function(){document.removeEventListener("touchmove",me),document.removeEventListener("touchend",ae)}},[])}function _r(){var n=Object(t.useRef)(new Map);function a(h){return n.current.has(h)||n.current.set(h,t.createRef()),n.current.get(h)}function u(h){n.current.delete(h)}return[a,u]}function ir(n,a){var u=t.useRef(n),h=t.useState({}),b=Object($.a)(h,2),v=b[1];function O(S){var W=typeof S=="function"?S(u.current):S;W!==u.current&&a(W,u.current),u.current=W,v({})}return[u.current,O]}var or=function(a){var u=a.position,h=a.prefixCls,b=a.extra;if(!b)return null;var v,O=b;return u==="right"&&(v=O.right||!O.left&&O||null),u==="left"&&(v=O.left||null),v?t.createElement("div",{className:"".concat(h,"-extra-content")},v):null};function ea(n,a){var u,h=t.useContext(Ft),b=h.prefixCls,v=h.tabs,O=n.className,S=n.style,W=n.id,K=n.animated,L=n.activeKey,G=n.rtl,J=n.extra,ie=n.editable,X=n.locale,Q=n.tabPosition,le=n.tabBarGutter,U=n.children,q=n.onTabClick,re=n.onTabScroll,Z=Object(t.useRef)(),oe=Object(t.useRef)(),k=Object(t.useRef)(),be=Object(t.useRef)(),ne=_r(),de=Object($.a)(ne,2),me=de[0],ae=de[1],H=Q==="top"||Q==="bottom",ue=ir(0,function(te,x){H&&re&&re({direction:te>x?"left":"right"})}),ge=Object($.a)(ue,2),ve=ge[0],Se=ge[1],Ke=ir(0,function(te,x){!H&&re&&re({direction:te>x?"top":"bottom"})}),Oe=Object($.a)(Ke,2),Re=Oe[0],Fe=Oe[1],Ae=Object(t.useState)(0),Ie=Object($.a)(Ae,2),Ee=Ie[0],$e=Ie[1],qe=Object(t.useState)(0),Ve=Object($.a)(qe,2),Ue=Ve[0],Ye=Ve[1],Le=Object(t.useState)(0),jn=Object($.a)(Le,2),tn=jn[0],Ze=jn[1],ln=Object(t.useState)(0),yn=Object($.a)(ln,2),bn=yn[0],Me=yn[1],He=Object(t.useState)(null),_e=Object($.a)(He,2),xe=_e[0],Wn=_e[1],Un=Object(t.useState)(null),Kn=Object($.a)(Un,2),rn=Kn[0],En=Kn[1],un=Object(t.useState)(0),Dn=Object($.a)(un,2),en=Dn[0],an=Dn[1],In=Object(t.useState)(0),cn=Object($.a)(In,2),ke=cn[0],Xe=cn[1],Jn=Sn(new Map),Gn=Object($.a)(Jn,2),et=Gn[0],On=Gn[1],hn=F(v,et,Ee),Hn="".concat(b,"-nav-operations-hidden"),Cn=0,mn=0;H?G?(Cn=0,mn=Math.max(0,Ee-xe)):(Cn=Math.min(0,xe-Ee),mn=0):(Cn=Math.min(0,rn-Ue),mn=0);function Xn(te){return te<Cn?Cn:te>mn?mn:te}var Nn=Object(t.useRef)(),Yn=Object(t.useState)(),dn=Object($.a)(Yn,2),Mn=dn[0],pe=dn[1];function Pe(){pe(Date.now())}function Be(){window.clearTimeout(Nn.current)}qr(Z,function(te,x){function Ce(Je,sn){Je(function(zn){var xn=Xn(zn+sn);return xn})}if(H){if(xe>=Ee)return!1;Ce(Se,te)}else{if(rn>=Ue)return!1;Ce(Fe,x)}return Be(),Pe(),!0}),Object(t.useEffect)(function(){return Be(),Mn&&(Nn.current=window.setTimeout(function(){pe(0)},100)),Be},[Mn]);function nn(){var te=arguments.length>0&&arguments[0]!==void 0?arguments[0]:L,x=hn.get(te)||{width:0,height:0,left:0,right:0,top:0};if(H){var Ce=ve;G?x.right<ve?Ce=x.right:x.right+x.width>ve+xe&&(Ce=x.right+x.width-xe):x.left<-ve?Ce=-x.left:x.left+x.width>-ve+xe&&(Ce=-(x.left+x.width-xe)),Fe(0),Se(Xn(Ce))}else{var Je=Re;x.top<-Re?Je=-x.top:x.top+x.height>-Re+rn&&(Je=-(x.top+x.height-rn)),Se(0),Fe(Xn(Je))}}var Qn=B(hn,{width:xe,height:rn,left:ve,top:Re},{width:tn,height:bn},{width:en,height:ke},Object(ye.a)(Object(ye.a)({},n),{},{tabs:v})),gt=Object($.a)(Qn,2),Wt=gt[0],Kt=gt[1],Lt=v.map(function(te){var x=te.key;return t.createElement($n,{id:W,prefixCls:b,key:x,rtl:G,tab:te,closable:te.closable,editable:ie,active:x===L,tabPosition:Q,tabBarGutter:le,renderWrapper:U,removeAriaLabel:X==null?void 0:X.removeAriaLabel,ref:me(x),onClick:function(Je){q(x,Je)},onRemove:function(){ae(x)},onFocus:function(){nn(x),Pe(),G||(Z.current.scrollLeft=0),Z.current.scrollTop=0}})}),nt=wn(function(){var te,x,Ce,Je,sn,zn,xn,Vt,zt,la=((te=Z.current)===null||te===void 0?void 0:te.offsetWidth)||0,ua=((x=Z.current)===null||x===void 0?void 0:x.offsetHeight)||0,mr=((Ce=be.current)===null||Ce===void 0?void 0:Ce.offsetWidth)||0,fr=((Je=be.current)===null||Je===void 0?void 0:Je.offsetHeight)||0,da=((sn=k.current)===null||sn===void 0?void 0:sn.offsetWidth)||0,ca=((zn=k.current)===null||zn===void 0?void 0:zn.offsetHeight)||0;Wn(la),En(ua),an(mr),Xe(fr);var pr=(((xn=oe.current)===null||xn===void 0?void 0:xn.offsetWidth)||0)-mr,vr=(((Vt=oe.current)===null||Vt===void 0?void 0:Vt.offsetHeight)||0)-fr;$e(pr),Ye(vr);var hr=(zt=k.current)===null||zt===void 0?void 0:zt.className.includes(Hn);Ze(pr-(hr?0:da)),Me(vr-(hr?0:ca)),On(function(){var gr=new Map;return v.forEach(function(ma){var yr=ma.key,ct=me(yr).current;ct&&gr.set(yr,{width:ct.offsetWidth,height:ct.offsetHeight,left:ct.offsetLeft,top:ct.offsetTop})}),gr})}),yt=v.slice(0,Wt),ot=v.slice(Kt+1),bt=[].concat(Object(fn.a)(yt),Object(fn.a)(ot)),$t=Object(t.useState)(),Ot=Object($.a)($t,2),Ct=Ot[0],tt=Ot[1],An=hn.get(L),Rt=Object(t.useRef)();function St(){Qe.a.cancel(Rt.current)}Object(t.useEffect)(function(){var te={};return An&&(H?(G?te.right=An.right:te.left=An.left,te.width=An.width):(te.top=An.top,te.height=An.height)),St(),Rt.current=Object(Qe.a)(function(){tt(te)}),St},[An,H,G]),Object(t.useEffect)(function(){nn()},[L,An,hn,H]),Object(t.useEffect)(function(){nt()},[G,le,L,v.map(function(te){return te.key}).join("_")]);var lt=!!bt.length,Zn="".concat(b,"-nav-wrap"),ut,dt,Pt,jt;return H?G?(dt=ve>0,ut=ve+xe<Ee):(ut=ve<0,dt=-ve+xe<Ee):(Pt=Re<0,jt=-Re+rn<Ue),t.createElement("div",{ref:a,role:"tablist",className:Ne()("".concat(b,"-nav"),O),style:S,onKeyDown:function(){Pe()}},t.createElement(or,{position:"left",extra:J,prefixCls:b}),t.createElement(Ln.default,{onResize:nt},t.createElement("div",{className:Ne()(Zn,(u={},Object(ce.a)(u,"".concat(Zn,"-ping-left"),ut),Object(ce.a)(u,"".concat(Zn,"-ping-right"),dt),Object(ce.a)(u,"".concat(Zn,"-ping-top"),Pt),Object(ce.a)(u,"".concat(Zn,"-ping-bottom"),jt),u)),ref:Z},t.createElement(Ln.default,{onResize:nt},t.createElement("div",{ref:oe,className:"".concat(b,"-nav-list"),style:{transform:"translate(".concat(ve,"px, ").concat(Re,"px)"),transition:Mn?"none":void 0}},Lt,t.createElement(rr,{ref:be,prefixCls:b,locale:X,editable:ie,style:{visibility:lt?"hidden":null}}),t.createElement("div",{className:Ne()("".concat(b,"-ink-bar"),Object(ce.a)({},"".concat(b,"-ink-bar-animated"),K.inkBar)),style:Ct}))))),t.createElement(xr,Object(V.a)({},n,{ref:k,prefixCls:b,tabs:bt,className:!lt&&Hn})),t.createElement(or,{position:"right",extra:J,prefixCls:b}))}var lr=t.forwardRef(ea);function na(n){var a=n.id,u=n.activeKey,h=n.animated,b=n.tabPosition,v=n.rtl,O=n.destroyInactiveTabPane,S=t.useContext(Ft),W=S.prefixCls,K=S.tabs,L=h.tabPane,G=K.findIndex(function(J){return J.key===u});return t.createElement("div",{className:Ne()("".concat(W,"-content-holder"))},t.createElement("div",{className:Ne()("".concat(W,"-content"),"".concat(W,"-content-").concat(b),Object(ce.a)({},"".concat(W,"-content-animated"),L)),style:G&&L?Object(ce.a)({},v?"marginRight":"marginLeft","-".concat(G,"00%")):null},K.map(function(J){return t.cloneElement(J.node,{key:J.key,prefixCls:W,tabKey:J.key,id:a,animated:L,active:J.key===u,destroyInactiveTabPane:O})})))}function ur(n){var a=n.prefixCls,u=n.forceRender,h=n.className,b=n.style,v=n.id,O=n.active,S=n.animated,W=n.destroyInactiveTabPane,K=n.tabKey,L=n.children,G=t.useState(u),J=Object($.a)(G,2),ie=J[0],X=J[1];t.useEffect(function(){O?X(!0):W&&X(!1)},[O,W]);var Q={};return O||(S?(Q.visibility="hidden",Q.height=0,Q.overflowY="hidden"):Q.display="none"),t.createElement("div",{id:v&&"".concat(v,"-panel-").concat(K),role:"tabpanel",tabIndex:O?0:-1,"aria-labelledby":v&&"".concat(v,"-tab-").concat(K),"aria-hidden":!O,style:Object(ye.a)(Object(ye.a)({},Q),b),className:Ne()("".concat(a,"-tabpane"),O&&"".concat(a,"-tabpane-active"),h)},(O||ie||u)&&L)}var dr=0;function ta(n){return Object(Fn.a)(n).map(function(a){if(t.isValidElement(a)){var u=a.key!==void 0?String(a.key):void 0;return Object(ye.a)(Object(ye.a)({key:u},a.props),{},{node:a})}return null}).filter(function(a){return a})}function ra(n,a){var u,h=n.id,b=n.prefixCls,v=b===void 0?"rc-tabs":b,O=n.className,S=n.children,W=n.direction,K=n.activeKey,L=n.defaultActiveKey,G=n.editable,J=n.animated,ie=J===void 0?{inkBar:!0,tabPane:!1}:J,X=n.tabPosition,Q=X===void 0?"top":X,le=n.tabBarGutter,U=n.tabBarStyle,q=n.tabBarExtraContent,re=n.locale,Z=n.moreIcon,oe=n.moreTransitionName,k=n.destroyInactiveTabPane,be=n.renderTabBar,ne=n.onChange,de=n.onTabClick,me=n.onTabScroll,ae=Object(De.a)(n,["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"]),H=ta(S),ue=W==="rtl",ge;ie===!1?ge={inkBar:!1,tabPane:!1}:ie===!0?ge={inkBar:!0,tabPane:!0}:ge=Object(ye.a)({inkBar:!0,tabPane:!1},Object(on.a)(ie)==="object"?ie:{});var ve=Object(t.useState)(!1),Se=Object($.a)(ve,2),Ke=Se[0],Oe=Se[1];Object(t.useEffect)(function(){Oe(Object(Bn.a)())},[]);var Re=Object(Rn.a)(function(){var Me;return(Me=H[0])===null||Me===void 0?void 0:Me.key},{value:K,defaultValue:L}),Fe=Object($.a)(Re,2),Ae=Fe[0],Ie=Fe[1],Ee=Object(t.useState)(function(){return H.findIndex(function(Me){return Me.key===Ae})}),$e=Object($.a)(Ee,2),qe=$e[0],Ve=$e[1];Object(t.useEffect)(function(){var Me=H.findIndex(function(_e){return _e.key===Ae});if(Me===-1){var He;Me=Math.max(0,Math.min(qe,H.length-1)),Ie((He=H[Me])===null||He===void 0?void 0:He.key)}Ve(Me)},[H.map(function(Me){return Me.key}).join("_"),Ae,qe]);var Ue=Object(Rn.a)(null,{value:h}),Ye=Object($.a)(Ue,2),Le=Ye[0],jn=Ye[1],tn=Q;Ke&&!["left","right"].includes(Q)&&(tn="top"),Object(t.useEffect)(function(){h||(jn("rc-tabs-".concat(dr)),dr+=1)},[]);function Ze(Me,He){de==null||de(Me,He),Ie(Me),ne==null||ne(Me)}var ln={id:Le,activeKey:Ae,animated:ge,tabPosition:tn,rtl:ue,mobile:Ke},yn,bn=Object(ye.a)(Object(ye.a)({},ln),{},{editable:G,locale:re,moreIcon:Z,moreTransitionName:oe,tabBarGutter:le,onTabClick:Ze,onTabScroll:me,extra:q,style:U,panes:S});return be?yn=be(bn,lr):yn=t.createElement(lr,bn),t.createElement(Ft.Provider,{value:{tabs:H,prefixCls:v}},t.createElement("div",Object(V.a)({ref:a,id:h,className:Ne()(v,"".concat(v,"-").concat(tn),(u={},Object(ce.a)(u,"".concat(v,"-mobile"),Ke),Object(ce.a)(u,"".concat(v,"-editable"),G),Object(ce.a)(u,"".concat(v,"-rtl"),ue),u),O)},ae),yn,t.createElement(na,Object(V.a)({destroyInactiveTabPane:k},ln,{animated:ge}))))}var cr=t.forwardRef(ra);cr.TabPane=ur;var aa=cr,sa=aa,Bt=e("MZF8"),vn=e("dEAq"),ia=e("ZpkN"),ba=e("TIsu");function wt(n,a){var u,h=(u=n.match(/\.(\w+)$/))===null||u===void 0?void 0:u[1];return h||(h=a.tsx?"tsx":"jsx"),h}var oa=n=>{var a,u,h,b=Object(t.useRef)(),v=Object(t.useContext)(vn.context),O=v.locale,S=Object(vn.useLocaleProps)(O,n),W=Object(vn.useDemoUrl)(S.identifier),K=S.demoUrl||W,L=(Bt.a===null||Bt.a===void 0?void 0:Bt.a.location.hash)==="#".concat(S.identifier),G=Object.keys(S.sources).length===1,J=Object(vn.useCodeSandbox)((a=S.hideActions)!==null&&a!==void 0&&a.includes("CSB")?null:S),ie=Object(vn.useRiddle)((u=S.hideActions)!==null&&u!==void 0&&u.includes("RIDDLE")?null:S),X=Object(vn.useMotions)(S.motions||[],b.current),Q=Object(Y.default)(X,2),le=Q[0],U=Q[1],q=Object(vn.useCopy)(),re=Object(Y.default)(q,2),Z=re[0],oe=re[1],k=Object(t.useState)("_"),be=Object(Y.default)(k,2),ne=be[0],de=be[1],me=Object(t.useState)(wt(ne,S.sources[ne])),ae=Object(Y.default)(me,2),H=ae[0],ue=ae[1],ge=Object(t.useState)(Boolean(S.defaultShowCode)),ve=Object(Y.default)(ge,2),Se=ve[0],Ke=ve[1],Oe=Object(t.useState)(Math.random()),Re=Object(Y.default)(Oe,2),Fe=Re[0],Ae=Re[1],Ie=S.sources[ne][H]||S.sources[ne].content,Ee=Object(vn.useTSPlaygroundUrl)(O,Ie),$e=Object(t.useRef)(),qe=Object(vn.usePrefersColor)(),Ve=Object(Y.default)(qe,1),Ue=Ve[0];Object(t.useEffect)(()=>{Ae(Math.random())},[Ue]);function Ye(Le){de(Le),ue(wt(Le,S.sources[Le]))}return R.a.createElement("div",{style:S.style,className:[S.className,"__dumi-default-previewer",L?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:S.identifier,"data-debug":S.debug||void 0,"data-iframe":S.iframe||void 0},S.iframe&&R.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),R.a.createElement("div",{ref:b,className:"__dumi-default-previewer-demo",style:{transform:S.transform?"translate(0, 0)":void 0,padding:S.compact||S.iframe&&S.compact!==!1?"0":void 0,background:S.background}},S.iframe?R.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(S.iframe).replace(/(\d)$/,"$1px")},key:Fe,src:K,ref:$e}):S.children),R.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":S.title},S.title&&R.a.createElement(vn.AnchorLink,{to:"#".concat(S.identifier)},S.title),S.description&&R.a.createElement("div",{dangerouslySetInnerHTML:{__html:S.description}})),R.a.createElement("div",{className:"__dumi-default-previewer-actions"},J&&R.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:J}),ie&&R.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:ie}),S.motions&&R.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:U,onClick:()=>le()}),S.iframe&&R.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:()=>Ae(Math.random())}),!((h=S.hideActions)!==null&&h!==void 0&&h.includes("EXTERNAL"))&&R.a.createElement(vn.Link,{target:"_blank",to:K},R.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),R.a.createElement("span",null),R.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":oe,onClick:()=>Z(Ie)}),H==="tsx"&&Se&&R.a.createElement(vn.Link,{target:"_blank",to:Ee},R.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),R.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(Se?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:()=>Ke(!Se)})),Se&&R.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!G&&R.a.createElement(sa,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xB7\xB7\xB7",defaultActiveKey:ne,onChange:Ye},Object.keys(S.sources).map(Le=>R.a.createElement(ur,{tab:Le==="_"?"index.".concat(wt(Le,S.sources[Le])):Le,key:Le}))),R.a.createElement("div",{className:"__dumi-default-previewer-source"},R.a.createElement(ia.a,{code:Ie,lang:H,showCopy:!1}))))},Oa=gn.default=oa},"80pN":function(Tn,gn,e){"use strict";(function(Y){/** @license React v16.14.0
* react-dom-test-utils.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var t=e("MgzW"),R=e("q1tI"),V=e("i8i4"),ce=e("QCnb");function $(c){for(var D="https://reactjs.org/docs/error-decoder.html?invariant="+c,I=1;I<arguments.length;I++)D+="&args[]="+encodeURIComponent(arguments[I]);return"Minified React error #"+c+"; visit "+D+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var on=R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;on.hasOwnProperty("ReactCurrentDispatcher")||(on.ReactCurrentDispatcher={current:null}),on.hasOwnProperty("ReactCurrentBatchConfig")||(on.ReactCurrentBatchConfig={suspense:null});function De(c){var D=c,I=c;if(c.alternate)for(;D.return;)D=D.return;else{c=D;do D=c,(D.effectTag&1026)!=0&&(I=D.return),c=D.return;while(c)}return D.tag===3?I:null}function ye(c){if(De(c)!==c)throw Error($(188))}function rt(c){var D=c.alternate;if(!D){if(D=De(c),D===null)throw Error($(188));return D!==c?null:c}for(var I=c,fe=D;;){var ee=I.return;if(ee===null)break;var je=ee.alternate;if(je===null){if(fe=ee.return,fe!==null){I=fe;continue}break}if(ee.child===je.child){for(je=ee.child;je;){if(je===I)return ye(ee),c;if(je===fe)return ye(ee),D;je=je.sibling}throw Error($(188))}if(I.return!==fe.return)I=ee,fe=je;else{for(var ze=!1,Ge=ee.child;Ge;){if(Ge===I){ze=!0,I=ee,fe=je;break}if(Ge===fe){ze=!0,fe=ee,I=je;break}Ge=Ge.sibling}if(!ze){for(Ge=je.child;Ge;){if(Ge===I){ze=!0,I=je,fe=ee;break}if(Ge===fe){ze=!0,fe=je,I=ee;break}Ge=Ge.sibling}if(!ze)throw Error($(189))}}if(I.alternate!==fe)throw Error($(190))}if(I.tag!==3)throw Error($(188));return I.stateNode.current===I?c:D}function Ne(){return!0}function Fn(){return!1}function Bn(c,D,I,fe){this.dispatchConfig=c,this._targetInst=D,this.nativeEvent=I,c=this.constructor.Interface;for(var ee in c)c.hasOwnProperty(ee)&&((D=c[ee])?this[ee]=D(I):ee==="target"?this.target=fe:this[ee]=I[ee]);return this.isDefaultPrevented=(I.defaultPrevented!=null?I.defaultPrevented:I.returnValue===!1)?Ne:Fn,this.isPropagationStopped=Fn,this}t(Bn.prototype,{preventDefault:function(){this.defaultPrevented=!0;var c=this.nativeEvent;c&&(c.preventDefault?c.preventDefault():typeof c.returnValue!="unknown"&&(c.returnValue=!1),this.isDefaultPrevented=Ne)},stopPropagation:function(){var c=this.nativeEvent;c&&(c.stopPropagation?c.stopPropagation():typeof c.cancelBubble!="unknown"&&(c.cancelBubble=!0),this.isPropagationStopped=Ne)},persist:function(){this.isPersistent=Ne},isPersistent:Fn,destructor:function(){var c=this.constructor.Interface,D;for(D in c)this[D]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=Fn,this._dispatchInstances=this._dispatchListeners=null}}),Bn.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(c){return c.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null},Bn.extend=function(c){function D(){}function I(){return fe.apply(this,arguments)}var fe=this;D.prototype=fe.prototype;var ee=new D;return t(ee,I.prototype),I.prototype=ee,I.prototype.constructor=I,I.Interface=t({},fe.Interface,c),I.extend=fe.extend,Qe(I),I},Qe(Bn);function Rn(c,D,I,fe){if(this.eventPool.length){var ee=this.eventPool.pop();return this.call(ee,c,D,I,fe),ee}return new this(c,D,I,fe)}function fn(c){if(!(c instanceof this))throw Error($(279));c.destructor(),10>this.eventPool.length&&this.eventPool.push(c)}function Qe(c){c.eventPool=[],c.getPooled=Rn,c.release=fn}var Ln=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined");function wn(c,D){var I={};return I[c.toLowerCase()]=D.toLowerCase(),I["Webkit"+c]="webkit"+D,I["Moz"+c]="moz"+D,I}var Sn={animationend:wn("Animation","AnimationEnd"),animationiteration:wn("Animation","AnimationIteration"),animationstart:wn("Animation","AnimationStart"),transitionend:wn("Transition","TransitionEnd")},we={},kn={};Ln&&(kn=document.createElement("div").style,"AnimationEvent"in window||(delete Sn.animationend.animation,delete Sn.animationiteration.animation,delete Sn.animationstart.animation),"TransitionEvent"in window||delete Sn.transitionend.transition);function $n(c){if(we[c])return we[c];if(!Sn[c])return c;var D=Sn[c],I;for(I in D)if(D.hasOwnProperty(I)&&I in kn)return we[c]=D[I];return c}var at=$n("animationend"),F=$n("animationiteration"),A=$n("animationstart"),B=$n("transitionend"),f=null;function o(c){if(f===null)try{var D=("require"+Math.random()).slice(0,7);f=(Y&&Y[D])("timers").setImmediate}catch(I){f=function(fe){var ee=new MessageChannel;ee.port1.onmessage=fe,ee.port2.postMessage(void 0)}}return f(c)}var g=V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,C=g[11],P=g[12],s=V.unstable_batchedUpdates,l=on.IsSomeRendererActing,y=typeof ce.unstable_flushAllWithoutAsserting=="function",T=ce.unstable_flushAllWithoutAsserting||function(){for(var c=!1;C();)c=!0;return c};function M(c){try{T(),o(function(){T()?M(c):c()})}catch(D){c(D)}}var j=0,i=!1,N=V.findDOMNode,d=V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,r=d[0],p=d[4],m=d[5],E=d[6],w=d[7],z=d[8],_=d[9],se=d[10];function he(){}function pn(c,D){if(!c)return[];if(c=rt(c),!c)return[];for(var I=c,fe=[];;){if(I.tag===5||I.tag===6||I.tag===1||I.tag===0){var ee=I.stateNode;D(ee)&&fe.push(ee)}if(I.child)I.child.return=I,I=I.child;else{if(I===c)return fe;for(;!I.sibling;){if(!I.return||I.return===c)return fe;I=I.return}I.sibling.return=I.return,I=I.sibling}}}function We(c,D){if(c&&!c._reactInternalFiber){var I=""+c;throw c=Array.isArray(c)?"an array":c&&c.nodeType===1&&c.tagName?"a DOM node":I==="[object Object]"?"object with keys {"+Object.keys(c).join(", ")+"}":I,Error($(286,D,c))}}var Te={renderIntoDocument:function(c){var D=document.createElement("div");return V.render(c,D)},isElement:function(c){return R.isValidElement(c)},isElementOfType:function(c,D){return R.isValidElement(c)&&c.type===D},isDOMComponent:function(c){return!(!c||c.nodeType!==1||!c.tagName)},isDOMComponentElement:function(c){return!!(c&&R.isValidElement(c)&&c.tagName)},isCompositeComponent:function(c){return Te.isDOMComponent(c)?!1:c!=null&&typeof c.render=="function"&&typeof c.setState=="function"},isCompositeComponentWithType:function(c,D){return Te.isCompositeComponent(c)?c._reactInternalFiber.type===D:!1},findAllInRenderedTree:function(c,D){return We(c,"findAllInRenderedTree"),c?pn(c._reactInternalFiber,D):[]},scryRenderedDOMComponentsWithClass:function(c,D){return We(c,"scryRenderedDOMComponentsWithClass"),Te.findAllInRenderedTree(c,function(I){if(Te.isDOMComponent(I)){var fe=I.className;typeof fe!="string"&&(fe=I.getAttribute("class")||"");var ee=fe.split(/\s+/);if(!Array.isArray(D)){if(D===void 0)throw Error($(11));D=D.split(/\s+/)}return D.every(function(je){return ee.indexOf(je)!==-1})}return!1})},findRenderedDOMComponentWithClass:function(c,D){if(We(c,"findRenderedDOMComponentWithClass"),c=Te.scryRenderedDOMComponentsWithClass(c,D),c.length!==1)throw Error("Did not find exactly one match (found: "+c.length+") for class:"+D);return c[0]},scryRenderedDOMComponentsWithTag:function(c,D){return We(c,"scryRenderedDOMComponentsWithTag"),Te.findAllInRenderedTree(c,function(I){return Te.isDOMComponent(I)&&I.tagName.toUpperCase()===D.toUpperCase()})},findRenderedDOMComponentWithTag:function(c,D){if(We(c,"findRenderedDOMComponentWithTag"),c=Te.scryRenderedDOMComponentsWithTag(c,D),c.length!==1)throw Error("Did not find exactly one match (found: "+c.length+") for tag:"+D);return c[0]},scryRenderedComponentsWithType:function(c,D){return We(c,"scryRenderedComponentsWithType"),Te.findAllInRenderedTree(c,function(I){return Te.isCompositeComponentWithType(I,D)})},findRenderedComponentWithType:function(c,D){if(We(c,"findRenderedComponentWithType"),c=Te.scryRenderedComponentsWithType(c,D),c.length!==1)throw Error("Did not find exactly one match (found: "+c.length+") for componentType:"+D);return c[0]},mockComponent:function(c,D){return D=D||c.mockTagName||"div",c.prototype.render.mockImplementation(function(){return R.createElement(D,null,this.props.children)}),this},nativeTouchData:function(c,D){return{touches:[{pageX:c,pageY:D}]}},Simulate:null,SimulateNative:{},act:function(c){function D(){j--,l.current=I,P.current=fe}i===!1&&(i=!0,console.error("act(...) is not supported in production builds of React, and might not behave as expected.")),j++;var I=l.current,fe=P.current;l.current=!0,P.current=!0;try{var ee=s(c)}catch(je){throw D(),je}if(ee!==null&&typeof ee=="object"&&typeof ee.then=="function")return{then:function(je,ze){ee.then(function(){1<j||y===!0&&I===!0?(D(),je()):M(function(Ge){D(),Ge?ze(Ge):je()})},function(Ge){D(),ze(Ge)})}};try{j!==1||y!==!1&&I!==!1||T(),D()}catch(je){throw D(),je}return{then:function(je){je()}}}};function Pn(c){return function(D,I){if(R.isValidElement(D))throw Error($(228));if(Te.isCompositeComponent(D))throw Error($(229));var fe=p[c],ee=new he;ee.target=D,ee.type=c.toLowerCase();var je=r(D),ze=new Bn(fe,je,ee,D);ze.persist(),t(ze,I),fe.phasedRegistrationNames?m(ze):E(ze),V.unstable_batchedUpdates(function(){w(D),se(ze)}),z()}}Te.Simulate={};for(var st in p)Te.Simulate[st]=Pn(st);function qn(c,D){return function(I,fe){var ee=new he(c);t(ee,fe),Te.isDOMComponent(I)?(I=N(I),ee.target=I,_(D,1,document,ee)):I.tagName&&(ee.target=I,_(D,1,document,ee))}}[["abort","abort"],[at,"animationEnd"],[F,"animationIteration"],[A,"animationStart"],["blur","blur"],["canplaythrough","canPlayThrough"],["canplay","canPlay"],["cancel","cancel"],["change","change"],["click","click"],["close","close"],["compositionend","compositionEnd"],["compositionstart","compositionStart"],["compositionupdate","compositionUpdate"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["dragstart","dragStart"],["drag","drag"],["drop","drop"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],["ended","ended"],["error","error"],["focus","focus"],["input","input"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["loadstart","loadStart"],["loadstart","loadStart"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["mousedown","mouseDown"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["playing","playing"],["progress","progress"],["ratechange","rateChange"],["scroll","scroll"],["seeked","seeked"],["seeking","seeking"],["selectionchange","selectionChange"],["stalled","stalled"],["suspend","suspend"],["textInput","textInput"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchmove","touchMove"],["touchstart","touchStart"],[B,"transitionEnd"],["volumechange","volumeChange"],["waiting","waiting"],["wheel","wheel"]].forEach(function(c){var D=c[1];Te.SimulateNative[D]=qn(D,c[0])}),Y.exports=Te.default||Te}).call(this,e("hOG+")(Tn))},JjdP:function(Tn,gn,e){"use strict";e.r(gn);var Y=e("9og8"),t=e("WmNS"),R=e.n(t),V=e("LtsZ"),ce=`import React, { useRef } from 'react';
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

export default Demo;`,on=`export const delay = ms => new Promise(res => setTimeout(res, ms));

export const fakeApi = (url, data) => {
  console.group('request:', url);
  console.log('params:', data);
  console.groupEnd();
  return delay(500);
};`,De=`import React from 'react';
import FormRender, { useForm } from 'form-render';

const Demo = ({ schema }) => {
  const form = useForm();
  return (
    <div>
      <FormRender form={form} schema={schema} />
    </div>
  );
};

export default Demo;`,ye=`export const basic = {
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

export default Root;`,Ne=`import React, { useState, useEffect } from 'react';
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

export default Demo;`,Fn=`{
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
}`,Bn=`import { Select } from 'antd';
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
}`,Qe=`.markdown p {
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

export default Demo;`,Sn=`import React, { useState, useRef } from 'react';
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
}`,at=gn.default={"guide-card":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(R.a.mark(function B(){return R.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"oLxE"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:ce}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"card-render":{version:"0.1.2"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"0.x"}},identifier:"guide-card"}},"chart-render-demo":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(R.a.mark(function B(){var f,o,g,C,P,s,l;return R.a.wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return s=function(j,i){if(!i&&j&&j.__esModule)return j;if(j===null||typeof j!="object"&&typeof j!="function")return{default:j};var N=P(i);if(N&&N.has(j))return N.get(j);var d={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var p in j)if(p!=="default"&&Object.prototype.hasOwnProperty.call(j,p)){var m=r?Object.getOwnPropertyDescriptor(j,p):null;m&&(m.get||m.set)?Object.defineProperty(d,p,m):d[p]=j[p]}return d.default=j,N&&N.set(j,d),d},P=function(j){if(typeof WeakMap!="function")return null;var i=new WeakMap,N=new WeakMap;return(P=function(r){return r?N:i})(j)},f=e("K+nK"),T.t0=f,T.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return T.t1=T.sent,o=(0,T.t0)(T.t1),T.t2=s,T.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return T.t3=T.sent,g=(0,T.t2)(T.t3),T.next=15,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 15:return C=T.sent,l=function(){var j=(0,g.useState)("Line"),i=(0,o.default)(j,2),N=i[0],d=i[1],r={Line:C.Line,Column:C.Column,PivotTable:C.PivotTable}[N];return g.default.createElement("div",null,g.default.createElement("div",{style:{marginBottom:10}},g.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return d("Line")}},"\u6298\u7EBF\u56FE"),g.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return d("Column")}},"\u67F1\u72B6\u56FE"),g.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return d("PivotTable")}},"\u4EA4\u53C9\u8868")),g.default.createElement(r,{meta:[{id:"date",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF",isDim:!1},{id:"uv",name:"\u8BBF\u5BA2\u6570",isDim:!1}],data:[{date:"20200101",pv:100,uv:50},{date:"20200102",pv:120,uv:60},{date:"20200103",pv:140,uv:70},{date:"20200104",pv:160,uv:80}]}))},T.abrupt("return",l);case 18:case"end":return T.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"chart-render-demo"}},"column-demo":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(R.a.mark(function B(){var f,o,g,C;return R.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return f=e("K+nK"),s.t0=f,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=s.sent,C=function(){return o.default.createElement(g.Column,{meta:[{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{pv:50,uv:20}]})},s.abrupt("return",C);case 11:case"end":return s.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo"}},"column-demo-1":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(R.a.mark(function B(){var f,o,g,C;return R.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return f=e("K+nK"),s.t0=f,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=s.sent,C=function(){return o.default.createElement(g.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},s.abrupt("return",C);case 11:case"end":return s.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-1"}},"column-demo-2":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(R.a.mark(function B(){var f,o,g,C;return R.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return f=e("K+nK"),s.t0=f,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=s.sent,C=function(){return o.default.createElement(g.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},s.abrupt("return",C);case 11:case"end":return s.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-2"}},"column-demo-3":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(R.a.mark(function B(){var f,o,g,C;return R.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return f=e("K+nK"),s.t0=f,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=s.sent,C=function(){return o.default.createElement(g.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},s.abrupt("return",C);case 11:case"end":return s.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-3"}},"column-demo-4":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(R.a.mark(function B(){var f,o,g,C;return R.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return f=e("K+nK"),s.t0=f,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=s.sent,C=function(){return o.default.createElement(g.Column,{inverted:!0,label:{position:"middle",layout:[{type:"interval-adjust-position"},{type:"interval-hide-overlap"},{type:"adjust-color"}]},meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},s.abrupt("return",C);case 11:case"end":return s.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-4"}},"line-demo":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(R.a.mark(function B(){var f,o,g,C;return R.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return f=e("K+nK"),s.t0=f,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=s.sent,C=function(){return o.default.createElement(g.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},s.abrupt("return",C);case 11:case"end":return s.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo"}},"line-demo-1":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(R.a.mark(function B(){var f,o,g,C;return R.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return f=e("K+nK"),s.t0=f,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=s.sent,C=function(){return o.default.createElement(g.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},s.abrupt("return",C);case 11:case"end":return s.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-1"}},"line-demo-2":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(R.a.mark(function B(){var f,o,g,C;return R.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return f=e("K+nK"),s.t0=f,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=s.sent,C=function(){return o.default.createElement(g.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"},{id:"pv",name:"\u8BBF\u95EE\u91CF"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20,pv:120},{ds:"2020-12-31",page:"\u9996\u9875",uv:120,pv:1120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21,pv:121},{ds:"2021-01-01",page:"\u9996\u9875",uv:121,pv:1121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15,pv:115},{ds:"2021-01-02",page:"\u9996\u9875",uv:115,pv:1115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40,pv:140},{ds:"2021-01-03",page:"\u9996\u9875",uv:140,pv:1140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31,pv:131},{ds:"2021-01-04",page:"\u9996\u9875",uv:131,pv:1131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32,pv:132},{ds:"2021-01-05",page:"\u9996\u9875",uv:132,pv:1132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30,pv:130},{ds:"2021-01-06",page:"\u9996\u9875",uv:130,pv:1130}]})},s.abrupt("return",C);case 11:case"end":return s.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-2"}},"line-demo-3":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(R.a.mark(function B(){var f,o,g,C;return R.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return f=e("K+nK"),s.t0=f,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=s.sent,C=function(){return o.default.createElement(g.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},s.abrupt("return",C);case 11:case"end":return s.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-3"}},"line-demo-4":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(R.a.mark(function B(){var f,o,g,C;return R.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return f=e("K+nK"),s.t0=f,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=s.sent,C=function(){return o.default.createElement(g.Line,{withArea:!0,isStack:!0,isPercent:!0,meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},s.abrupt("return",C);case 11:case"end":return s.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-4"}},"pivot-table-demo":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(R.a.mark(function B(){var f,o,g,C;return R.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return f=e("K+nK"),s.t0=f,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=s.sent,C=function(){return o.default.createElement(g.PivotTable,{style:{maxHeight:400,overflow:"auto"},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},s.abrupt("return",C);case 11:case"end":return s.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo"}},"pivot-table-demo-1":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(R.a.mark(function B(){var f,o,g,C;return R.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return f=e("K+nK"),s.t0=f,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=s.sent,C=function(){return o.default.createElement(g.PivotTable,{style:{maxHeight:400,overflow:"auto"},cellRender:function(T,M,j){return o.default.createElement("div",null,o.default.createElement("p",null,"\u53C2\u6570\u8868\uFF1A"),o.default.createElement("p",{style:{color:["red","orange","yellow","green","blue"][Object.keys(M).length]}},T),o.default.createElement("p",null,JSON.stringify(M)),o.default.createElement("p",null,JSON.stringify(j)))},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},s.abrupt("return",C);case 11:case"end":return s.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-1"}},"pivot-table-demo-2":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(R.a.mark(function B(){var f,o,g,C,P,s,l;return R.a.wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return s=function(j,i){if(!i&&j&&j.__esModule)return j;if(j===null||typeof j!="object"&&typeof j!="function")return{default:j};var N=P(i);if(N&&N.has(j))return N.get(j);var d={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var p in j)if(p!=="default"&&Object.prototype.hasOwnProperty.call(j,p)){var m=r?Object.getOwnPropertyDescriptor(j,p):null;m&&(m.get||m.set)?Object.defineProperty(d,p,m):d[p]=j[p]}return d.default=j,N&&N.set(j,d),d},P=function(j){if(typeof WeakMap!="function")return null;var i=new WeakMap,N=new WeakMap;return(P=function(r){return r?N:i})(j)},f=e("K+nK"),T.t0=f,T.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return T.t1=T.sent,o=(0,T.t0)(T.t1),T.t2=s,T.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return T.t3=T.sent,g=(0,T.t2)(T.t3),T.next=15,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 15:return C=T.sent,l=function(){var j=(0,g.useState)(!1),i=(0,o.default)(j,2),N=i[0],d=i[1];return g.default.createElement(g.default.Fragment,null,g.default.createElement("label",null,"\u53EF\u5C55\u5F00/\u6536\u7F29\uFF1A",g.default.createElement("input",{type:"checkbox",value:N,onChange:function(){return d(!N)}})),g.default.createElement(C.PivotTable,{leftExpandable:N,showSubtotal:!1,meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]}))},T.abrupt("return",l);case 18:case"end":return T.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-2"}},"form-render-demo":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(R.a.mark(function B(){var f,o,g,C,P,s,l,y,T,M,j,i,N,d;return R.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return j=function(E,w){if(!w&&E&&E.__esModule)return E;if(E===null||typeof E!="object"&&typeof E!="function")return{default:E};var z=M(w);if(z&&z.has(E))return z.get(E);var _={},se=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var he in E)if(he!=="default"&&Object.prototype.hasOwnProperty.call(E,he)){var pn=se?Object.getOwnPropertyDescriptor(E,he):null;pn&&(pn.get||pn.set)?Object.defineProperty(_,he,pn):_[he]=E[he]}return _.default=E,z&&z.set(E,_),_},M=function(E){if(typeof WeakMap!="function")return null;var w=new WeakMap,z=new WeakMap;return(M=function(se){return se?z:w})(E)},f=e("K+nK"),p.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return p.t0=f,p.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return p.t1=p.sent,o=(0,p.t0)(p.t1),p.t2=f,p.next=13,e.e(62).then(e.bind(null,"fWQN"));case 13:return p.t3=p.sent,g=(0,p.t2)(p.t3),p.t4=f,p.next=18,e.e(63).then(e.bind(null,"mtLc"));case 18:return p.t5=p.sent,C=(0,p.t4)(p.t5),p.t6=f,p.next=23,e.e(65).then(e.bind(null,"yKVA"));case 23:return p.t7=p.sent,P=(0,p.t6)(p.t7),p.t8=f,p.next=28,e.e(59).then(e.bind(null,"879j"));case 28:return p.t9=p.sent,s=(0,p.t8)(p.t9),p.t10=f,p.next=33,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 33:return p.t11=p.sent,l=(0,p.t10)(p.t11),p.next=37,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 37:return y=p.sent,p.t12=j,p.next=41,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 41:return p.t13=p.sent,T=(0,p.t12)(p.t13),i={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},N=function(m){(0,P.default)(w,m);var E=(0,s.default)(w);function w(){return(0,g.default)(this,w),E.apply(this,arguments)}return(0,C.default)(w,[{key:"render",value:function(){var _=this.props.form;return l.default.createElement("div",null,l.default.createElement(T.default,{form:_,schema:i}),l.default.createElement(o.default,{type:"primary",onClick:_.submit},"\u63D0\u4EA4"))}}]),w}(l.default.Component),d=(0,T.connectForm)(N),p.abrupt("return",d);case 47:case"end":return p.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default connectForm(Demo);`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo"}},"form-render-demo-1":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(R.a.mark(function B(){var f,o,g,C,P,s,l,y,T,M;return R.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return l=function(d,r){if(!r&&d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var p=s(r);if(p&&p.has(d))return p.get(d);var m={},E=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var w in d)if(w!=="default"&&Object.prototype.hasOwnProperty.call(d,w)){var z=E?Object.getOwnPropertyDescriptor(d,w):null;z&&(z.get||z.set)?Object.defineProperty(m,w,z):m[w]=d[w]}return m.default=d,p&&p.set(d,m),m},s=function(d){if(typeof WeakMap!="function")return null;var r=new WeakMap,p=new WeakMap;return(s=function(E){return E?p:r})(d)},f=e("K+nK"),i.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return i.t0=f,i.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.t2=f,i.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return i.t3=i.sent,g=(0,i.t2)(i.t3),i.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 17:return C=i.sent,i.t4=l,i.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 21:return i.t5=i.sent,P=(0,i.t4)(i.t5),y={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},T=function(){var d=(0,P.useForm)();return g.default.createElement("div",null,g.default.createElement(P.default,{form:d,schema:y}),g.default.createElement(o.default,{type:"primary",onClick:d.submit},"\u63D0\u4EA4"))},M=T,i.abrupt("return",M);case 27:case"end":return i.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo-1"}},"form-render-demo-2":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(R.a.mark(function B(){var f,o,g,C,P,s,l,y,T,M;return R.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return l=function(d,r){if(!r&&d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var p=s(r);if(p&&p.has(d))return p.get(d);var m={},E=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var w in d)if(w!=="default"&&Object.prototype.hasOwnProperty.call(d,w)){var z=E?Object.getOwnPropertyDescriptor(d,w):null;z&&(z.get||z.set)?Object.defineProperty(m,w,z):m[w]=d[w]}return m.default=d,p&&p.set(d,m),m},s=function(d){if(typeof WeakMap!="function")return null;var r=new WeakMap,p=new WeakMap;return(s=function(E){return E?p:r})(d)},f=e("K+nK"),i.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return i.t0=f,i.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.t2=f,i.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return i.t3=i.sent,g=(0,i.t2)(i.t3),i.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 17:return C=i.sent,i.t4=l,i.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 21:return i.t5=i.sent,P=(0,i.t4)(i.t5),y={displayType:"row",labelWidth:60,type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F",type:"range",format:"date"},siteUrl:{title:"\u7F51\u5740",type:"string",placeholder:"\u6B64\u5904\u5FC5\u586B",required:!0,props:{addonBefore:"https://",addonAfter:".com"}}}},T=function(){var d=(0,P.useForm)(),r=function(m,E){E.length>0?alert("errors:"+JSON.stringify(E)):alert("formData:"+JSON.stringify(m,null,2))};return g.default.createElement("div",null,g.default.createElement(P.default,{form:d,schema:y,onFinish:r}),g.default.createElement(o.default,{type:"primary",onClick:d.submit},"\u63D0\u4EA4"))},M=T,i.abrupt("return",M);case 27:case"end":return i.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-demo-2"}},"migrate-demo":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(R.a.mark(function B(){var f,o,g,C,P,s,l,y;return R.a.wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return l=function(){var i=(0,g.useForm)(),N=function(r,p){p.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(p))):alert(JSON.stringify(r))};return o.default.createElement("div",null,o.default.createElement(g.default,{form:i,schema:s,onFinish:N}),o.default.createElement("button",{onClick:i.submit},"\u63D0\u4EA4"))},P=function(i,N){if(!N&&i&&i.__esModule)return i;if(i===null||typeof i!="object"&&typeof i!="function")return{default:i};var d=C(N);if(d&&d.has(i))return d.get(i);var r={},p=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var m in i)if(m!=="default"&&Object.prototype.hasOwnProperty.call(i,m)){var E=p?Object.getOwnPropertyDescriptor(i,m):null;E&&(E.get||E.set)?Object.defineProperty(r,m,E):r[m]=i[m]}return r.default=i,d&&d.set(i,r),r},C=function(i){if(typeof WeakMap!="function")return null;var N=new WeakMap,d=new WeakMap;return(C=function(p){return p?d:N})(i)},f=e("K+nK"),M.t0=f,M.next=7,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 7:return M.t1=M.sent,o=(0,M.t0)(M.t1),M.t2=P,M.next=12,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 12:return M.t3=M.sent,g=(0,M.t2)(M.t3),s={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}},y=l,M.abrupt("return",y);case 17:case"end":return M.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate-demo"}},"display-demo":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(R.a.mark(function B(){var f,o,g,C,P;return R.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return f=e("K+nK"),l.t0=f,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=f,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,g=(0,l.t2)(l.t3),C=function(T){return{type:"object",displayType:T,properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},objectName:{title:"\u5BF9\u8C61",bind:"obj",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},P=function(){return o.default.createElement("div",null,o.default.createElement("h2",null,"display: row"),o.default.createElement(g.default,{schema:C("row")}),o.default.createElement("h2",null,"display: column"),o.default.createElement(g.default,{schema:C("column")}))},l.abrupt("return",P);case 14:case"end":return l.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`},"demo/display.js":{import:"../demo/display",content:$}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo"}},"display-demo-1":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(R.a.mark(function B(){var f,o,g,C,P;return R.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return f=e("K+nK"),l.t0=f,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=f,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,g=(0,l.t2)(l.t3),C={type:"object",displayType:"inline",properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},P=function(){return o.default.createElement(g.default,{schema:C})},l.abrupt("return",P);case 14:case"end":return l.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:$}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-1"}},"display-demo-2":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(R.a.mark(function B(){var f,o,g,C,P;return R.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return f=e("K+nK"),l.t0=f,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=f,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,g=(0,l.t2)(l.t3),C={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0},check:{title:"box",type:"boolean",default:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},P=function(){return o.default.createElement(g.default,{readOnly:!0,schema:C})},l.abrupt("return",P);case 14:case"end":return l.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form readOnly schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:$}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-2"}},"display-demo-3":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(R.a.mark(function B(){var f,o,g,C,P;return R.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return f=e("K+nK"),l.t0=f,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=f,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,g=(0,l.t2)(l.t3),C={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0,width:"50%"},check:{title:"box",type:"boolean",default:!0,width:"50%",labelWidth:6},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},P=function(){return o.default.createElement(g.default,{labelWidth:"200",schema:C})},l.abrupt("return",P);case 14:case"end":return l.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form labelWidth="200" schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:$}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-3"}},"display-demo-4":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(R.a.mark(function B(){var f,o,g,C,P,s;return R.a.wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return f=e("K+nK"),y.t0=f,y.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return y.t1=y.sent,o=(0,y.t0)(y.t1),y.t2=f,y.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return y.t3=y.sent,g=(0,y.t2)(y.t3),C={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},P=function(){return o.default.createElement(g.default,{schema:C})},s=P,y.abrupt("return",s);case 15:case"end":return y.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:$}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-4"}},"display-demo-5":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(R.a.mark(function B(){var f,o,g,C,P,s;return R.a.wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return f=e("K+nK"),y.t0=f,y.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return y.t1=y.sent,o=(0,y.t0)(y.t1),y.t2=f,y.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return y.t3=y.sent,g=(0,y.t2)(y.t3),C={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},P=function(){return o.default.createElement(g.default,{schema:C})},s=P,y.abrupt("return",s);case 15:case"end":return y.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:$}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-5"}},"display-demo-6":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(R.a.mark(function B(){var f,o,g,C,P,s;return R.a.wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return f=e("K+nK"),y.t0=f,y.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return y.t1=y.sent,o=(0,y.t0)(y.t1),y.t2=f,y.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return y.t3=y.sent,g=(0,y.t2)(y.t3),C={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},P=function(){return o.default.createElement(g.default,{schema:C})},s=P,y.abrupt("return",s);case 15:case"end":return y.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:$}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-6"}},"display-demo-7":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(R.a.mark(function B(){var f,o,g,C,P,s;return R.a.wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return f=e("K+nK"),y.t0=f,y.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return y.t1=y.sent,o=(0,y.t0)(y.t1),y.t2=f,y.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return y.t3=y.sent,g=(0,y.t2)(y.t3),C={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},P=function(){return o.default.createElement(g.default,{schema:C})},s=P,y.abrupt("return",s);case 15:case"end":return y.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:$}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-7"}},"form-methods-demo":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(R.a.mark(function B(){var f,o,g,C,P,s,l,y,T,M,j,i,N;return R.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return j=function(m,E){if(!E&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var w=M(E);if(w&&w.has(m))return w.get(m);var z={},_=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var se in m)if(se!=="default"&&Object.prototype.hasOwnProperty.call(m,se)){var he=_?Object.getOwnPropertyDescriptor(m,se):null;he&&(he.get||he.set)?Object.defineProperty(z,se,he):z[se]=m[se]}return z.default=m,w&&w.set(m,z),z},M=function(m){if(typeof WeakMap!="function")return null;var E=new WeakMap,w=new WeakMap;return(M=function(_){return _?w:E})(m)},f=e("K+nK"),r.next=5,e.e(17).then(e.t.bind(null,"lfLe",7));case 5:return r.t0=f,r.next=8,e.e(18).then(e.t.bind(null,"Cp9S",7));case 8:return r.t1=r.sent,o=(0,r.t0)(r.t1),r.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return r.t2=f,r.next=15,e.e(12).then(e.t.bind(null,"4IMT",7));case 15:return r.t3=r.sent,g=(0,r.t2)(r.t3),r.next=19,e.e(14).then(e.t.bind(null,"tL+A",7));case 19:return r.t4=f,r.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return r.t5=r.sent,C=(0,r.t4)(r.t5),r.t6=f,r.next=27,Promise.resolve().then(e.bind(null,"tJVT"));case 27:return r.t7=r.sent,P=(0,r.t6)(r.t7),r.t8=j,r.next=32,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 32:return r.t9=r.sent,s=(0,r.t8)(r.t9),r.next=36,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 36:return l=r.sent,r.t10=j,r.next=40,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 40:return r.t11=r.sent,y=(0,r.t10)(r.t11),r.next=44,e.e(15).then(e.bind(null,"OH0R"));case 44:return T=r.sent,i=function(){var m=(0,y.useForm)(),E=(0,s.useState)({}),w=(0,P.default)(E,2),z=w[0],_=w[1],se=function(){(0,T.fakeApi)("xxx/getForm").then(function(We){m.setValues({input1:"hello world",select1:"c"})})};(0,s.useEffect)(function(){(0,T.delay)(1e3).then(function(pn){_({type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}})})},[]);var he=function(We,Te){Te.length>0?C.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(Te.map(function(Pn){return Pn.name}))):(0,T.fakeApi)("xxx/submit",We).then(function(Pn){return C.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})};return s.default.createElement("div",{style:{width:"400px"}},s.default.createElement(y.default,{form:m,schema:z,onFinish:he}),s.default.createElement(o.default,null,s.default.createElement(g.default,{onClick:se},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),s.default.createElement(g.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},N=i,r.abrupt("return",N);case 48:case"end":return r.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:on}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo"}},"form-methods-demo-1":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(R.a.mark(function B(){var f,o,g,C,P,s,l,y,T,M,j,i,N;return R.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return M=function(m,E){if(!E&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var w=T(E);if(w&&w.has(m))return w.get(m);var z={},_=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var se in m)if(se!=="default"&&Object.prototype.hasOwnProperty.call(m,se)){var he=_?Object.getOwnPropertyDescriptor(m,se):null;he&&(he.get||he.set)?Object.defineProperty(z,se,he):z[se]=m[se]}return z.default=m,w&&w.set(m,z),z},T=function(m){if(typeof WeakMap!="function")return null;var E=new WeakMap,w=new WeakMap;return(T=function(_){return _?w:E})(m)},f=e("K+nK"),r.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return r.t0=f,r.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return r.t1=r.sent,o=(0,r.t0)(r.t1),r.t2=f,r.next=13,Promise.resolve().then(e.bind(null,"PpiC"));case 13:return r.t3=r.sent,g=(0,r.t2)(r.t3),r.next=17,e.e(14).then(e.t.bind(null,"tL+A",7));case 17:return r.t4=f,r.next=20,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 20:return r.t5=r.sent,C=(0,r.t4)(r.t5),r.t6=f,r.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return r.t7=r.sent,P=(0,r.t6)(r.t7),r.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 29:return s=r.sent,r.t8=M,r.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 33:return r.t9=r.sent,l=(0,r.t8)(r.t9),r.next=37,e.e(15).then(e.bind(null,"OH0R"));case 37:return y=r.sent,j={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},i=function(){var m=(0,l.useForm)(),E=function(_,se){se.length>0?C.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(se.map(function(he){return he.name}))):(0,y.fakeApi)("xxx/submit",_).then(function(he){return C.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},w=function(_){var se=_.data,he=_.errors,pn=_.schema,We=(0,g.default)(_,["data","errors","schema"]);return(0,y.fakeApi)("xxx/validation").then(function(Te){return{name:"select1",error:["\u5916\u90E8\u6821\u9A8C\u9519\u8BEF"]}})};return P.default.createElement("div",{style:{width:"400px"}},P.default.createElement(l.default,{form:m,schema:j,beforeFinish:w,onFinish:E}),P.default.createElement(o.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},N=i,r.abrupt("return",N);case 42:case"end":return r.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:on}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-1"}},"form-methods-demo-2":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(R.a.mark(function B(){var f,o,g,C,P,s,l,y,T,M,j,i,N;return R.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return M=function(m,E){if(!E&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var w=T(E);if(w&&w.has(m))return w.get(m);var z={},_=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var se in m)if(se!=="default"&&Object.prototype.hasOwnProperty.call(m,se)){var he=_?Object.getOwnPropertyDescriptor(m,se):null;he&&(he.get||he.set)?Object.defineProperty(z,se,he):z[se]=m[se]}return z.default=m,w&&w.set(m,z),z},T=function(m){if(typeof WeakMap!="function")return null;var E=new WeakMap,w=new WeakMap;return(T=function(_){return _?w:E})(m)},f=e("K+nK"),r.next=5,e.e(17).then(e.t.bind(null,"lfLe",7));case 5:return r.t0=f,r.next=8,e.e(18).then(e.t.bind(null,"Cp9S",7));case 8:return r.t1=r.sent,o=(0,r.t0)(r.t1),r.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return r.t2=f,r.next=15,e.e(12).then(e.t.bind(null,"4IMT",7));case 15:return r.t3=r.sent,g=(0,r.t2)(r.t3),r.next=19,e.e(14).then(e.t.bind(null,"tL+A",7));case 19:return r.t4=f,r.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return r.t5=r.sent,C=(0,r.t4)(r.t5),r.t6=f,r.next=27,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 27:return r.t7=r.sent,P=(0,r.t6)(r.t7),r.next=31,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 31:return s=r.sent,r.t8=M,r.next=35,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 35:return r.t9=r.sent,l=(0,r.t8)(r.t9),r.next=39,e.e(15).then(e.bind(null,"OH0R"));case 39:return y=r.sent,j={type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F\u8303\u56F4",type:"range",format:"date"}}},i=function(){var m=(0,l.useForm)(),E=function(_,se){se.length>0?C.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(se.map(function(he){return he.name}))):(0,y.fakeApi)("xxx/submit",_).then(function(he){return C.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},w=function(){(0,y.fakeApi)("xxx/getForm").then(function(_){m.setValues({startDate:"2020-04-04",endDate:"2020-04-24"})})};return P.default.createElement("div",{style:{width:"400px"}},P.default.createElement(l.default,{form:m,schema:j,onFinish:E}),P.default.createElement(o.default,null,P.default.createElement(g.default,{onClick:w},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),P.default.createElement(g.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},N=i,r.abrupt("return",N);case 44:case"end":return r.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:on}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-2"}},"form-methods-demo-3":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(R.a.mark(function B(){var f,o,g,C,P,s,l,y,T,M,j,i;return R.a.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return T=function(p,m){if(!m&&p&&p.__esModule)return p;if(p===null||typeof p!="object"&&typeof p!="function")return{default:p};var E=y(m);if(E&&E.has(p))return E.get(p);var w={},z=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var _ in p)if(_!=="default"&&Object.prototype.hasOwnProperty.call(p,_)){var se=z?Object.getOwnPropertyDescriptor(p,_):null;se&&(se.get||se.set)?Object.defineProperty(w,_,se):w[_]=p[_]}return w.default=p,E&&E.set(p,w),w},y=function(p){if(typeof WeakMap!="function")return null;var m=new WeakMap,E=new WeakMap;return(y=function(z){return z?E:m})(p)},f=e("K+nK"),d.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return d.t0=f,d.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return d.t1=d.sent,o=(0,d.t0)(d.t1),d.next=12,e.e(14).then(e.t.bind(null,"tL+A",7));case 12:return d.t2=f,d.next=15,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 15:return d.t3=d.sent,g=(0,d.t2)(d.t3),d.t4=T,d.next=20,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 20:return d.t5=d.sent,C=(0,d.t4)(d.t5),d.next=24,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 24:return P=d.sent,d.t6=T,d.next=28,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 28:return d.t7=d.sent,s=(0,d.t6)(d.t7),d.next=32,e.e(15).then(e.bind(null,"OH0R"));case 32:return l=d.sent,M={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select1:{title:"\u5355\u9009",type:"string",widget:"select"}}}}},j=function(){var p=(0,s.useForm)(),m=function(){p.setSchemaByPath("obj1.select1",{enum:["nouth","south","east","west"],enumNames:["\u4E1C","\u5357","\u897F","\u5317"]})},E=function(z,_){_.length>0?g.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(_.map(function(se){return se.name}))):g.default.info(JSON.stringify(z))};return C.default.createElement("div",{style:{width:"400px"}},C.default.createElement(s.default,{form:p,schema:M,onMount:m,onFinish:E}),C.default.createElement(o.default,{type:"primary",onClick:p.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},i=j,d.abrupt("return",i);case 37:case"end":return d.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:on}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-3"}},"function-demo":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(R.a.mark(function B(){var f,o,g,C,P,s,l,y;return R.a.wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return P=function(i,N){if(!N&&i&&i.__esModule)return i;if(i===null||typeof i!="object"&&typeof i!="function")return{default:i};var d=C(N);if(d&&d.has(i))return d.get(i);var r={},p=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var m in i)if(m!=="default"&&Object.prototype.hasOwnProperty.call(i,m)){var E=p?Object.getOwnPropertyDescriptor(i,m):null;E&&(E.get||E.set)?Object.defineProperty(r,m,E):r[m]=i[m]}return r.default=i,d&&d.set(i,r),r},C=function(i){if(typeof WeakMap!="function")return null;var N=new WeakMap,d=new WeakMap;return(C=function(p){return p?d:N})(i)},f=e("K+nK"),M.t0=f,M.next=6,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 6:return M.t1=M.sent,o=(0,M.t0)(M.t1),M.t2=P,M.next=11,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 11:return M.t3=M.sent,g=(0,M.t2)(M.t3),s={type:"object",properties:{select1:{title:"\u5355\u9009",description:"\u5C1D\u8BD5\u9009\u62E9\u201C\u663E\u793A\u8F93\u5165\u6846\u201D",type:"string",enum:["a","b"],enumNames:["\u9690\u85CF\u8F93\u5165\u6846","\u663E\u793A\u8F93\u5165\u6846"],disabled:"{{rootValue.input1.length > 5}}",default:"a"},input1:{title:"\u8F93\u5165\u6846",description:"\u5C1D\u8BD5\u8F93\u5165\u8D85\u8FC75\u4E2A\u5B57\u7B26",type:"string",hidden:'{{formData.select1 == "a"}}'}}},l=function(){var i=(0,g.useForm)();return o.default.createElement(g.default,{form:i,schema:s})},y=l,M.abrupt("return",y);case 17:case"end":return M.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo1;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo"}},"function-demo-1":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(R.a.mark(function B(){var f,o,g,C,P;return R.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return f=e("K+nK"),l.t0=f,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=f,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return l.t3=l.sent,g=(0,l.t2)(l.t3),l.next=13,e.e(19).then(e.bind(null,"8iYR"));case 13:return C=l.sent,P=function(){return o.default.createElement(g.default,{schema:C.expression})},l.abrupt("return",P);case 16:case"end":return l.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { expression } from '../json/schema';

export default () => <FR schema={expression} />;`},"demo/FR.jsx":{import:"../demo/FR",content:De},"json/schema.js":{import:"../json/schema",content:ye}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo-1"}},"lifeCycle-demo":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(R.a.mark(function B(){var f,o,g,C,P,s,l,y,T;return R.a.wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return P=function(N,d){if(!d&&N&&N.__esModule)return N;if(N===null||typeof N!="object"&&typeof N!="function")return{default:N};var r=C(d);if(r&&r.has(N))return r.get(N);var p={},m=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var E in N)if(E!=="default"&&Object.prototype.hasOwnProperty.call(N,E)){var w=m?Object.getOwnPropertyDescriptor(N,E):null;w&&(w.get||w.set)?Object.defineProperty(p,E,w):p[E]=N[E]}return p.default=N,r&&r.set(N,p),p},C=function(N){if(typeof WeakMap!="function")return null;var d=new WeakMap,r=new WeakMap;return(C=function(m){return m?r:d})(N)},j.t0=P,j.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return j.t1=j.sent,f=(0,j.t0)(j.t1),j.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 9:return o=j.sent,j.t2=P,j.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 13:return j.t3=j.sent,g=(0,j.t2)(j.t3),s=function(N){return new Promise(function(d){return setTimeout(d,N)})},l={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u4E0B\u62C9\u9009\u6846",description:"\u52A0\u8F7D\u4E2D...",type:"string",enum:[],widget:"select"}}},y=function(){var N=(0,g.useForm)(),d=function(){N.setValues({input1:"hello world"}),s(3e3).then(function(p){N.setSchemaByPath("select1",{description:"",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]})})};return f.default.createElement(g.default,{form:N,schema:l,onMount:d})},T=y,j.abrupt("return",T);case 20:case"end":return j.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"lifeCycle-demo"}},"watch-demo":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(R.a.mark(function B(){var f,o,g,C,P,s,l,y;return R.a.wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return P=function(i,N){if(!N&&i&&i.__esModule)return i;if(i===null||typeof i!="object"&&typeof i!="function")return{default:i};var d=C(N);if(d&&d.has(i))return d.get(i);var r={},p=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var m in i)if(m!=="default"&&Object.prototype.hasOwnProperty.call(i,m)){var E=p?Object.getOwnPropertyDescriptor(i,m):null;E&&(E.get||E.set)?Object.defineProperty(r,m,E):r[m]=i[m]}return r.default=i,d&&d.set(i,r),r},C=function(i){if(typeof WeakMap!="function")return null;var N=new WeakMap,d=new WeakMap;return(C=function(p){return p?d:N})(i)},M.t0=P,M.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return M.t1=M.sent,f=(0,M.t0)(M.t1),M.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 9:return o=M.sent,M.t2=P,M.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 13:return M.t3=M.sent,g=(0,M.t2)(M.t3),s={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"}}},l=function(){var i=(0,g.useForm)(),N={"#":function(r){console.log("\u8868\u5355\u7684\u65F6\u65F6\u6570\u636E\u4E3A\uFF1A",r)},input1:function(r){i.setValueByPath("input2",r)}};return f.default.createElement(g.default,{form:i,schema:s,watch:N})},y=l,M.abrupt("return",y);case 19:case"end":return M.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo"}},"watch-demo-1":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(R.a.mark(function B(){var f,o,g,C,P,s,l,y,T,M;return R.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return l=function(d,r){if(!r&&d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var p=s(r);if(p&&p.has(d))return p.get(d);var m={},E=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var w in d)if(w!=="default"&&Object.prototype.hasOwnProperty.call(d,w)){var z=E?Object.getOwnPropertyDescriptor(d,w):null;z&&(z.get||z.set)?Object.defineProperty(m,w,z):m[w]=d[w]}return m.default=d,p&&p.set(d,m),m},s=function(d){if(typeof WeakMap!="function")return null;var r=new WeakMap,p=new WeakMap;return(s=function(E){return E?p:r})(d)},f=e("K+nK"),i.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return i.t0=f,i.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.t2=l,i.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return i.t3=i.sent,g=(0,i.t2)(i.t3),i.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 17:return C=i.sent,i.t4=l,i.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 21:return i.t5=i.sent,P=(0,i.t4)(i.t5),y={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"radio"}}}}},T=function(){var d=(0,P.useForm)(),r=function(E,w){w.length>0?alert("errorFields:"+JSON.stringify(w)):alert("formData:"+JSON.stringify(E,null,2))},p={input1:function(E){E.length>2?d.setSchemaByPath("obj1.select",function(w){var z=w.enumNames;return{enumNames:z.map(function(_){return _+"a"})}}):d.setSchemaByPath("obj1.select",{enumNames:["\u65E9","\u4E2D","\u665A"]})}};return g.default.createElement("div",null,g.default.createElement(P.default,{form:d,schema:y,onFinish:r,watch:p}),g.default.createElement(o.default,{type:"",style:{marginRight:8},onClick:function(){return d.setSchemaByPath("input2",{title:"\u7F16\u8F91\u6846",format:"textarea"})}},"\u5C06 input \u6539\u4E3A textarea"),g.default.createElement(o.default,{type:"primary",onClick:d.submit},"\u63D0\u4EA4"))},M=T,i.abrupt("return",M);case 27:case"end":return i.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo-1"}},"widget-demo":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(R.a.mark(function B(){var f,o,g,C,P,s,l,y,T,M,j,i,N;return R.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return T=function(m,E){if(!E&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var w=y(E);if(w&&w.has(m))return w.get(m);var z={},_=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var se in m)if(se!=="default"&&Object.prototype.hasOwnProperty.call(m,se)){var he=_?Object.getOwnPropertyDescriptor(m,se):null;he&&(he.get||he.set)?Object.defineProperty(z,se,he):z[se]=m[se]}return z.default=m,w&&w.set(m,z),z},y=function(m){if(typeof WeakMap!="function")return null;var E=new WeakMap,w=new WeakMap;return(y=function(_){return _?w:E})(m)},f=e("K+nK"),r.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return r.t0=f,r.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return r.t1=r.sent,o=(0,r.t0)(r.t1),r.next=12,Promise.all([e.e(3),e.e(60)]).then(e.t.bind(null,"cUip",7));case 12:return r.t2=f,r.next=15,Promise.all([e.e(0),e.e(12),e.e(58),e.e(61)]).then(e.t.bind(null,"iJl9",7));case 15:return r.t3=r.sent,g=(0,r.t2)(r.t3),r.t4=f,r.next=20,e.e(64).then(e.bind(null,"0Owb"));case 20:return r.t5=r.sent,C=(0,r.t4)(r.t5),r.t6=T,r.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return r.t7=r.sent,P=(0,r.t6)(r.t7),r.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 29:return s=r.sent,r.t8=T,r.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 33:return r.t9=r.sent,l=(0,r.t8)(r.t9),M={type:"object",properties:{string:{title:"\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6",type:"string",widget:"site"},select:{title:"\u5355\u9009",type:"number",enum:[1,2,3],enumNames:["\u9009\u98791","\u9009\u98792","\u9009\u98793"]}}},j=function(m){return P.default.createElement(g.default,(0,C.default)({addonBefore:"http://",addonAfter:".com"},m))},i=function(){var m=(0,l.useForm)(),E=function(){};return P.default.createElement("div",null,P.default.createElement(l.default,{form:m,schema:M,widgets:{site:j},onFinish:function(z){return alert(JSON.stringify(z,null,2))}}),P.default.createElement(o.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4"))},N=i,r.abrupt("return",N);case 40:case"end":return r.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},identifier:"widget-demo"}},"schema-demo":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(R.a.mark(function B(){var f,o,g,C,P;return R.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return f=e("K+nK"),l.t0=f,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=f,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return l.t3=l.sent,g=(0,l.t2)(l.t3),l.next=13,e.e(19).then(e.bind(null,"8iYR"));case 13:return C=l.sent,P=function(){return o.default.createElement(g.default,{schema:C.basic})},l.abrupt("return",P);case 16:case"end":return l.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { basic } from '../json/schema';

export default () => <FR schema={basic} />;`},"demo/FR.jsx":{import:"../demo/FR",content:De},"json/schema.js":{import:"../json/schema",content:ye}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo"}},"docs-playground":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(R.a.mark(function B(){return R.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"BASV"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:rt},"main.js":{import:"./main",content:Ne},"json/simplest.json":{import:"./json/simplest.json",content:Fn},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:Bn},"monaco/index.js":{import:"./monaco",content:Rn},"theme.css":{import:"./theme.css",content:fn},"index.css":{import:"./index.css",content:Qe}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:"^16.0.0"},"react-dom":{version:"^16.0.0"},"deep-equal":{version:"2.0.5"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.3.2"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-simple-code-editor":{version:"0.11.0"},prismjs:{version:"1.23.0"}},identifier:"docs-playground"}},"table-render-advanced":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(R.a.mark(function B(){return R.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"7ZP+"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{tsx:Ln}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.0"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"1.x"}},transform:!0,defaultShowCode:!0,identifier:"table-render-advanced"}},"table-render-demo":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(R.a.mark(function B(){var f,o,g,C,P,s,l,y,T;return R.a.wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return f=e("K+nK"),j.t0=f,j.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return j.t1=j.sent,o=(0,j.t0)(j.t1),j.next=8,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(57)]).then(e.bind(null,"P2DI"));case 8:for(g=j.sent,C=[],P=0;P<6;P++)C.push({id:P.toString(),title:"\u6807\u9898".concat(P+1),created_at:new Date().getTime()});return s={type:"object",properties:{string:{title:"\u6807\u9898",type:"string","ui:width":"30%"},created_at:{title:"\u521B\u5EFA\u65F6\u95F4",type:"string",format:"date","ui:width":"30%"}}},l=[{title:"\u6807\u9898",dataIndex:"title"},{title:"\u521B\u5EFA\u65F6\u95F4",key:"since",dataIndex:"created_at",valueType:"date"},{title:"\u64CD\u4F5C",render:function(N,d){return o.default.createElement("a",{onClick:function(){return alert(N.title)}},"\u7F16\u8F91")}}],y=function(){var N=function(){return{rows:C,total:C.length}};return o.default.createElement(g.TableProvider,null,o.default.createElement(g.Search,{schema:s,api:N}),o.default.createElement(g.Table,{headerTitle:"\u6700\u7B80\u8868\u683C",columns:l,rowKey:"id"}))},T=y,j.abrupt("return",T);case 16:case"end":return j.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Wrapper;`}},dependencies:{react:{version:">=16.8.0"},"table-render":{version:"1.1.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.x"}},transform:!0,defaultShowCode:!0,identifier:"table-render-demo"}},"generator-demo":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(R.a.mark(function B(){var f,o,g,C,P,s;return R.a.wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return f=e("K+nK"),y.t0=f,y.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return y.t1=y.sent,o=(0,y.t0)(y.t1),y.t2=f,y.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(56)]).then(e.bind(null,"nYSz"));case 9:return y.t3=y.sent,g=(0,y.t2)(y.t3),C={type:"object",properties:{inputName:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string"}}},P=function(){return o.default.createElement("div",{style:{height:"80vh"}},o.default.createElement(g.default,{defaultValue:C}))},s=P,y.abrupt("return",s);case 15:case"end":return y.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.0.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"generator-demo"}},"generator-modal":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(R.a.mark(function B(){return R.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"PPgD"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:wn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.0.2"},"react-dom":{version:">=16.9.0"}},identifier:"generator-modal"}},"generator-transformer":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(R.a.mark(function B(){return R.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"jktF"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:Sn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.0.2"},"react-dom":{version:">=16.9.0"}},identifier:"generator-transformer"}},"generator-settings":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(R.a.mark(function B(){return R.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"M63W"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:we}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.0.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-settings"}},"generator-playground":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(R.a.mark(function B(){return R.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"TYW4"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:kn},"index.less":{import:"./index.less",content:$n}},dependencies:{react:{version:">=16.8.0"},umi:{version:"3.4.20"},"fr-generator":{version:"2.0.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-playground"}}}},TIsu:function(Tn,gn,e){},Zs1V:function(Tn){Tn.exports=JSON.parse("{}")},f3kx:function(Tn,gn,e){"use strict";e.r(gn);var Y=e("q1tI"),t=e.n(Y),R=e("dEAq"),V=e.n(R),ce=e("0zqC"),$=e("JjdP"),on=t.a.memo($.default["docs-playground"].component);gn.default=De=>(t.a.useEffect(()=>{De!=null&&De.location.hash&&R.AnchorLink.scrollToAnchor(decodeURIComponent(De.location.hash.slice(1)))},[]),t.a.createElement(t.a.Fragment,null,t.a.createElement(t.a.Fragment,null,t.a.createElement("div",{className:"markdown"}),t.a.createElement(ce.default,$.default["docs-playground"].previewerProps,t.a.createElement(on,null)))))},p8sG:function(Tn,gn,e){"use strict";Tn.exports=e("80pN")}}]);
