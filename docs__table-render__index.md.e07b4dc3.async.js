(window.webpackJsonp=window.webpackJsonp||[]).push([[46,9],{"0zqC":function(Nn,gn,n){"use strict";n.r(gn);var X=n("tJVT"),e=n("q1tI"),y=n.n(e),V=n("wx14"),ce=n("rePB"),L=n("ODXe"),tn=n("U8pU"),Be=n("Ff2n"),me=n("VTBJ"),at=n("TSYQ"),je=n.n(at),Tn=n("Zm9Q"),Mn=n("5Z9U"),On=n("6cGi"),fn=n("KQm4"),Ye=n("wgJM"),Ln=n("t23M");function wn(t){var r=Object(e.useRef)(),o=Object(e.useRef)(!1);function h(){for(var E=arguments.length,v=new Array(E),C=0;C<E;C++)v[C]=arguments[C];o.current||(Ye.a.cancel(r.current),r.current=Object(Ye.a)(function(){t.apply(void 0,v)}))}return Object(e.useEffect)(function(){return function(){o.current=!0,Ye.a.cancel(r.current)}},[]),h}function Rn(t){var r=Object(e.useRef)([]),o=Object(e.useState)({}),h=Object(L.a)(o,2),E=h[1],v=Object(e.useRef)(typeof t=="function"?t():t),C=wn(function(){var W=v.current;r.current.forEach(function(K){W=K(W)}),r.current=[],v.current=W,E({})});function R(W){r.current.push(W),C()}return[v.current,R]}var we=n("4IlW");function kn(t,r){var o,h=t.prefixCls,E=t.id,v=t.active,C=t.rtl,R=t.tab,W=R.key,K=R.tab,$=R.disabled,G=R.closeIcon,J=t.tabBarGutter,ue=t.tabPosition,x=t.closable,Y=t.renderWrapper,ie=t.removeAriaLabel,U=t.editable,q=t.onClick,ae=t.onRemove,Q=t.onFocus,se="".concat(h,"-tab");e.useEffect(function(){return ae},[]);var k={};ue==="top"||ue==="bottom"?k[C?"marginLeft":"marginRight"]=J:k.marginBottom=J;var be=U&&x!==!1&&!$;function ne(re){$||q(re)}function de(re){re.preventDefault(),re.stopPropagation(),U.onEdit("remove",{key:W,event:re})}var fe=e.createElement("div",{key:W,ref:r,className:je()(se,(o={},Object(ce.a)(o,"".concat(se,"-with-remove"),be),Object(ce.a)(o,"".concat(se,"-active"),v),Object(ce.a)(o,"".concat(se,"-disabled"),$),o)),style:k,onClick:ne},e.createElement("div",{role:"tab","aria-selected":v,id:E&&"".concat(E,"-tab-").concat(W),className:"".concat(se,"-btn"),"aria-controls":E&&"".concat(E,"-panel-").concat(W),"aria-disabled":$,tabIndex:$?null:0,onClick:function(H){H.stopPropagation(),ne(H)},onKeyDown:function(H){[we.a.SPACE,we.a.ENTER].includes(H.which)&&(H.preventDefault(),ne(H))},onFocus:Q},K),be&&e.createElement("button",{type:"button","aria-label":ie||"remove",tabIndex:0,className:"".concat(se,"-remove"),onClick:function(H){H.stopPropagation(),de(H)}},G||U.removeIcon||"\xD7"));return Y&&(fe=Y(fe)),fe}var $n=e.forwardRef(kn),rt={width:0,height:0,left:0,top:0};function T(t,r,o){return Object(e.useMemo)(function(){for(var h,E=new Map,v=r.get((h=t[0])===null||h===void 0?void 0:h.key)||rt,C=v.left+v.width,R=0;R<t.length;R+=1){var W=t[R].key,K=r.get(W);if(!K){var $;K=r.get(($=t[R-1])===null||$===void 0?void 0:$.key)||rt}var G=E.get(W)||Object(me.a)({},K);G.right=C-G.left-G.width,E.set(W,G)}return E},[t.map(function(h){return h.key}).join("_"),r,o])}var I={width:0,height:0,left:0,top:0,right:0};function M(t,r,o,h,E){var v=E.tabs,C=E.tabPosition,R=E.rtl,W,K,$;["top","bottom"].includes(C)?(W="width",K=R?"right":"left",$=Math.abs(r.left)):(W="height",K="top",$=-r.top);var G=r[W],J=o[W],ue=h[W],x=G;return J+ue>G&&(x=G-ue),Object(e.useMemo)(function(){if(!v.length)return[0,0];for(var Y=v.length,ie=Y,U=0;U<Y;U+=1){var q=t.get(v[U].key)||I;if(q[K]+q[W]>$+x){ie=U-1;break}}for(var ae=0,Q=Y-1;Q>=0;Q-=1){var se=t.get(v[Q].key)||I;if(se[K]<$){ae=Q+1;break}}return[ae,ie]},[t,$,x,C,v.map(function(Y){return Y.key}).join("_"),R])}var f=n("Gytx"),s=n.n(f),g=n("Kwbf");function O(t,r){var o=t.prefixCls,h=t.invalidate,E=t.item,v=t.renderItem,C=t.responsive,R=t.registerSize,W=t.itemKey,K=t.className,$=t.style,G=t.children,J=t.display,ue=t.order,x=t.component,Y=x===void 0?"div":x,ie=Object(Be.a)(t,["prefixCls","invalidate","item","renderItem","responsive","registerSize","itemKey","className","style","children","display","order","component"]),U=C&&!J;function q(be){R(W,be)}e.useEffect(function(){return function(){q(null)}},[]);var ae=v&&E!==void 0?v(E):G,Q;h||(Q={opacity:U?0:1,height:U?0:void 0,overflowY:U?"hidden":void 0,order:C?ue:void 0,pointerEvents:U?"none":void 0});var se={};U&&(se["aria-hidden"]=!0);var k=e.createElement(Y,Object(V.a)({className:je()(!h&&o,K),style:Object(me.a)(Object(me.a)({},Q),$)},se,ie,{ref:r}),ae);return C&&(k=e.createElement(Ln.default,{onResize:function(ne){var de=ne.offsetWidth;q(de)}},k)),k}var F=e.forwardRef(O);F.displayName="Item";var l=F;function i(){var t=Object(e.useState)({}),r=Object(L.a)(t,2),o=r[1],h=Object(e.useRef)([]),E=Object(e.useRef)(!1),v=0,C=0;Object(e.useEffect)(function(){return function(){E.current=!0}},[]);function R(W){var K=v;v+=1,h.current.length<K+1&&(h.current[K]=W);var $=h.current[K];function G(J){h.current[K]=typeof J=="function"?J(h.current[K]):J,Ye.a.cancel(C),C=Object(Ye.a)(function(){E.current||o({})})}return[$,G]}return R}var b=function(r,o){var h=e.useContext(S);if(!h){var E=r.component,v=E===void 0?"div":E,C=Object(Be.a)(r,["component"]);return e.createElement(v,Object(V.a)({},C,{ref:o}))}var R=h.className,W=Object(Be.a)(h,["className"]),K=r.className,$=Object(Be.a)(r,["className"]);return e.createElement(S.Provider,{value:null},e.createElement(l,Object(V.a)({ref:o,className:je()(R,K)},W,$)))},N=e.forwardRef(b);N.displayName="RawItem";var B=N,S=e.createContext(null),u="responsive",A="invalidate";function d(t){return"+ ".concat(t.length," ...")}function a(t,r){var o=t.prefixCls,h=o===void 0?"rc-overflow":o,E=t.data,v=E===void 0?[]:E,C=t.renderItem,R=t.renderRawItem,W=t.itemKey,K=t.itemWidth,$=K===void 0?10:K,G=t.ssr,J=t.style,ue=t.className,x=t.maxCount,Y=t.renderRest,ie=t.renderRawRest,U=t.suffix,q=t.component,ae=q===void 0?"div":q,Q=t.itemComponent,se=t.onVisibleChange,k=Object(Be.a)(t,["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"]),be=i(),ne=G==="full",de=be(null),fe=Object(L.a)(de,2),re=fe[0],H=fe[1],oe=re||0,ye=be(new Map),he=Object(L.a)(ye,2),Re=he[0],Ke=he[1],Ee=be(0),Oe=Object(L.a)(Ee,2),Te=Oe[0],Ie=Oe[1],Pe=be(0),De=Object(L.a)(Pe,2),$e=De[0],qe=De[1],Ve=be(0),Ue=Object(L.a)(Ve,2),Xe=Ue[0],Le=Ue[1],Sn=Object(e.useState)(null),an=Object(L.a)(Sn,2),Qe=an[0],sn=an[1],yn=Object(e.useState)(null),bn=Object(L.a)(yn,2),Ae=bn[0],He=bn[1],_e=e.useMemo(function(){return Ae===null&&ne?Number.MAX_SAFE_INTEGER:Ae||0},[Ae,re]),Ze=Object(e.useState)(!1),Wn=Object(L.a)(Ze,2),Un=Wn[0],Kn=Wn[1],rn="".concat(h,"-item"),Dn=Math.max(Te,$e),on=v.length&&x===u,Pn=x===A,en=on||typeof x=="number"&&v.length>x,ln=Object(e.useMemo)(function(){var ve=v;return on?re===null&&ne?ve=v:ve=v.slice(0,Math.min(v.length,oe/$)):typeof x=="number"&&(ve=v.slice(0,x)),ve},[v,$,re,x,on]),jn=Object(e.useMemo)(function(){return on?v.slice(_e+1):v.slice(ln.length)},[v,ln,on,_e]),cn=Object(e.useCallback)(function(ve,Fe){var Me;return typeof W=="function"?W(ve):(Me=W&&(ve==null?void 0:ve[W]))!==null&&Me!==void 0?Me:Fe},[W]),ke=Object(e.useCallback)(C||function(ve){return ve},[C]);function xe(ve,Fe){He(ve),Fe||(Kn(ve<v.length-1),se==null||se(ve))}function Jn(ve,Fe){H(Fe.clientWidth)}function Gn(ve,Fe){Ke(function(Me){var nn=new Map(Me);return Fe===null?nn.delete(ve):nn.set(ve,Fe),nn})}function et(ve,Fe){qe(Fe),Ie($e)}function En(ve,Fe){Le(Fe)}function hn(ve){return Re.get(cn(ln[ve],ve))}e.useLayoutEffect(function(){if(oe&&Dn&&ln){var ve=Xe,Fe=ln.length,Me=Fe-1;if(!Fe){xe(0),sn(null);return}for(var nn=0;nn<Fe;nn+=1){var Yn=hn(nn);if(Yn===void 0){xe(nn-1,!0);break}if(ve+=Yn,nn===Me-1&&ve+hn(Me)<=oe){xe(Me),sn(null);break}else if(ve+Dn>oe){xe(nn-1),sn(ve-Yn-Xe+$e);break}else if(nn===Me){xe(Me),sn(ve-Xe);break}}U&&hn(0)+Xe>oe&&sn(null)}},[oe,Re,$e,Xe,cn,ln]);var Hn=Un&&!!jn.length,Cn={};Qe!==null&&on&&(Cn={position:"absolute",left:Qe,top:0});var mn={prefixCls:rn,responsive:on,component:Q,invalidate:Pn},xn=R?function(ve,Fe){var Me=cn(ve,Fe);return e.createElement(S.Provider,{key:Me,value:Object(me.a)(Object(me.a)({},mn),{},{order:Fe,item:ve,itemKey:Me,registerSize:Gn,display:Fe<=_e})},R(ve,Fe))}:function(ve,Fe){var Me=cn(ve,Fe);return e.createElement(l,Object(V.a)({},mn,{order:Fe,key:Me,item:ve,renderItem:ke,itemKey:Me,registerSize:Gn,display:Fe<=_e}))},An,Xn={order:Hn?_e:Number.MAX_SAFE_INTEGER,className:"".concat(rn,"-rest"),registerSize:et,display:Hn};if(ie)ie&&(An=e.createElement(S.Provider,{value:Object(me.a)(Object(me.a)({},mn),Xn)},ie(jn)));else{var dn=Y||d;An=e.createElement(l,Object(V.a)({},mn,Xn),typeof dn=="function"?dn(jn):dn)}var Bn=e.createElement(ae,Object(V.a)({className:je()(!Pn&&h,ue),style:J,ref:r},k),ln.map(xn),en?An:null,U&&e.createElement(l,Object(V.a)({},mn,{order:_e,className:"".concat(rn,"-suffix"),registerSize:En,display:!0,style:Cn}),U));return on&&(Bn=e.createElement(Ln.default,{onResize:Jn},Bn)),Bn}var p=e.forwardRef(a);p.displayName="Overflow",p.Item=B,p.RESPONSIVE=u,p.INVALIDATE=A;var m=p,D=m,w=n("1OyB"),z=n("vuIU"),_=n("Ji7U"),le=n("LK+K"),ge=n("bT9E"),pn=n("YrtM"),We=e.createContext(null);function Ne(t,r){var o=Object(me.a)({},t);return Object.keys(r).forEach(function(h){var E=r[h];E!==void 0&&(o[h]=E)}),o}function Fn(t){var r=t.children,o=t.locked,h=Object(Be.a)(t,["children","locked"]),E=e.useContext(We),v=Object(pn.a)(function(){return Ne(E,h)},[E,h],function(C,R){return!o&&(C[0]!==R[0]||!s()(C[1],R[1]))});return e.createElement(We.Provider,{value:v},r)}function lt(t,r,o,h){var E=e.useContext(We),v=E.activeKey,C=E.onActive,R=E.onInactive,W={active:v===t};return r||(W.onMouseEnter=function(K){o==null||o({key:t,domEvent:K}),C(t)},W.onMouseLeave=function(K){h==null||h({key:t,domEvent:K}),R(t)}),W}function qn(t){var r=t.item,o=Object(Be.a)(t,["item"]);return Object.defineProperty(o,"item",{get:function(){return Object(g.a)(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),r}}),o}function c(t){var r=t.icon,o=t.props,h=t.children,E;return typeof r=="function"?E=e.createElement(r,Object(me.a)({},o)):E=r,E||h||null}function P(t){var r=e.useContext(We),o=r.mode,h=r.rtl,E=r.inlineIndent;if(o!=="inline")return null;var v=t;return h?{paddingRight:v*E}:{paddingLeft:v*E}}var j=[],pe=e.createContext(null);function ee(){return e.useContext(pe)}var Se=e.createContext(j);function ze(t){var r=e.useContext(Se);return e.useMemo(function(){return t!==void 0?[].concat(Object(fn.a)(r),[t]):r},[r,t])}var Ge=e.createContext(null),Ut=e.createContext(null);function Jt(t,r){return t===void 0?null:"".concat(t,"-").concat(r)}function Gt(t){var r=e.useContext(Ut);return Jt(r,t)}var ba=function(t){Object(_.a)(o,t);var r=Object(le.a)(o);function o(){return Object(w.a)(this,o),r.apply(this,arguments)}return Object(z.a)(o,[{key:"render",value:function(){var E=this.props,v=E.title,C=E.attribute,R=E.elementRef,W=Object(Be.a)(E,["title","attribute","elementRef"]),K=Object(ge.a)(W,["eventKey"]);return Object(g.a)(!C,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),e.createElement(D.Item,Object(V.a)({},C,{title:typeof v=="string"?v:void 0},K,{ref:R}))}}]),o}(e.Component),Ea=function(r){var o,h=r.style,E=r.className,v=r.eventKey,C=r.disabled,R=r.itemIcon,W=r.children,K=r.role,$=r.onMouseEnter,G=r.onMouseLeave,J=r.onClick,ue=r.onKeyDown,x=r.onFocus,Y=Object(Be.a)(r,["style","className","eventKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"]),ie=Gt(v),U=e.useContext(We),q=U.prefixCls,ae=U.onItemClick,Q=U.disabled,se=U.overflowDisabled,k=U.itemIcon,be=U.selectedKeys,ne=U.onActive,de="".concat(q,"-item"),fe=e.useRef(),re=e.useRef(),H=Q||C,oe=ze(v),ye=function(Ve){return{key:v,keyPath:oe,item:fe.current,domEvent:Ve}},he=R||k,Re=lt(v,H,$,G),Ke=Re.active,Ee=Object(Be.a)(Re,["active"]),Oe=be.includes(v),Te=P(oe.length),Ie=function(Ve){if(!H){var Ue=ye(Ve);J==null||J(qn(Ue)),ae(Ue)}},Pe=function(Ve){if(ue==null||ue(Ve),Ve.which===we.a.ENTER){var Ue=ye(Ve);J==null||J(qn(Ue)),ae(Ue)}},De=function(Ve){ne(v),x==null||x(Ve)},$e={};return r.role==="option"&&($e["aria-selected"]=Oe),e.createElement(ba,Object(V.a)({ref:fe,elementRef:re,role:K===null?"none":K||"menuitem",tabIndex:C?null:-1,"data-menu-id":se&&ie?null:ie},Y,Ee,$e,{component:"li","aria-disabled":C,style:Object(me.a)(Object(me.a)({},Te),h),className:je()(de,(o={},Object(ce.a)(o,"".concat(de,"-active"),Ke),Object(ce.a)(o,"".concat(de,"-selected"),Oe),Object(ce.a)(o,"".concat(de,"-disabled"),H),o),E),onClick:Ie,onKeyDown:Pe,onFocus:De}),W,e.createElement(c,{props:Object(me.a)(Object(me.a)({},r),{},{isSelected:Oe}),icon:he}))};function Ca(t){var r=t.eventKey,o=ee(),h=ze(r);return e.useEffect(function(){if(o)return o.registerPath(r,h),function(){o.unregisterPath(r,h)}},[h]),o?null:e.createElement(Ea,t)}var Dt=Ca;function Pt(t,r){return Object(Tn.a)(t).map(function(o,h){if(e.isValidElement(o)){var E=o.key;return E==null&&(E="tmp_key-".concat([].concat(Object(fn.a)(r),[h]).join("-"))),e.cloneElement(o,{key:E,eventKey:E})}return o})}function _n(t){var r=e.useRef(t);r.current=t;var o=e.useCallback(function(){for(var h,E=arguments.length,v=new Array(E),C=0;C<E;C++)v[C]=arguments[C];return(h=r.current)===null||h===void 0?void 0:h.call.apply(h,[r].concat(v))},[]);return t?o:void 0}var Oa=function(r,o){var h=r.className,E=r.children,v=Object(Be.a)(r,["className","children"]),C=e.useContext(We),R=C.prefixCls,W=C.mode;return e.createElement("ul",Object(V.a)({className:je()(R,"".concat(R,"-sub"),"".concat(R,"-").concat(W==="inline"?"inline":"vertical"),h)},v,{"data-menu-list":!0,ref:o}),E)},Ht=e.forwardRef(Oa);Ht.displayName="SubMenuList";var xt=Ht,Ra=n("uciX"),Vn={adjustX:1,adjustY:1},Xt={topLeft:{points:["bl","tl"],overflow:Vn,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Vn,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:Vn,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:Vn,offset:[4,0]}},Fa={topLeft:{points:["bl","tl"],overflow:Vn,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Vn,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:Vn,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:Vn,offset:[4,0]}},fr=Xt;function Yt(t,r,o){if(r)return r;if(o)return o[t]||o.other}var Sa={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function Da(t){var r=t.prefixCls,o=t.visible,h=t.children,E=t.popup,v=t.popupClassName,C=t.popupOffset,R=t.disabled,W=t.mode,K=t.onVisibleChange,$=e.useContext(We),G=$.getPopupContainer,J=$.rtl,ue=$.subMenuOpenDelay,x=$.subMenuCloseDelay,Y=$.builtinPlacements,ie=$.triggerSubMenuAction,U=$.forceSubMenuRender,q=$.motion,ae=$.defaultMotions,Q=e.useState(!1),se=Object(L.a)(Q,2),k=se[0],be=se[1],ne=J?Object(me.a)(Object(me.a)({},Fa),Y):Object(me.a)(Object(me.a)({},Xt),Y),de=Sa[W],fe=Yt(W,q,ae),re=Object(me.a)(Object(me.a)({},fe),{},{leavedClassName:"".concat(r,"-hidden"),removeOnLeave:!1,motionAppear:!0}),H=e.useRef();return e.useEffect(function(){return H.current=Object(Ye.a)(function(){be(o)}),function(){Ye.a.cancel(H.current)}},[o]),e.createElement(Ra.a,{prefixCls:r,popupClassName:je()("".concat(r,"-popup"),Object(ce.a)({},"".concat(r,"-rtl"),J),v),stretch:W==="horizontal"?"minWidth":null,getPopupContainer:G,builtinPlacements:ne,popupPlacement:de,popupVisible:k,popup:E,popupAlign:C&&{offset:C},action:R?[]:[ie],mouseEnterDelay:ue,mouseLeaveDelay:x,onPopupVisibleChange:K,forceRender:U,popupMotion:re},h)}var Pa=n("8XRh");function ja(t){var r=t.id,o=t.open,h=t.keyPath,E=t.children,v="inline",C=e.useContext(We),R=C.prefixCls,W=C.forceSubMenuRender,K=C.motion,$=C.defaultMotions,G=C.mode,J=e.useRef(!1);J.current=G===v;var ue=e.useState(!J.current),x=Object(L.a)(ue,2),Y=x[0],ie=x[1],U=J.current?o:!1;e.useEffect(function(){J.current&&ie(!1)},[G]);var q=Object(me.a)({},Yt(v,K,$));h.length>1&&(q.motionAppear=!1);var ae=q.onVisibleChanged;return q.onVisibleChanged=function(Q){return!J.current&&!Q&&ie(!0),ae==null?void 0:ae(Q)},Y?null:e.createElement(Fn,{mode:v,locked:!J.current},e.createElement(Pa.default,Object(V.a)({visible:U},q,{forceRender:W,removeOnLeave:!1,leavedClassName:"".concat(R,"-hidden")}),function(Q){var se=Q.className,k=Q.style;return e.createElement(xt,{id:r,className:se,style:k},E)}))}var Aa=function(r){var o,h=r.style,E=r.className,v=r.title,C=r.eventKey,R=r.disabled,W=r.internalPopupClose,K=r.children,$=r.itemIcon,G=r.expandIcon,J=r.popupClassName,ue=r.popupOffset,x=r.onClick,Y=r.onMouseEnter,ie=r.onMouseLeave,U=r.onTitleClick,q=r.onTitleMouseEnter,ae=r.onTitleMouseLeave,Q=Object(Be.a)(r,["style","className","title","eventKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"]),se=Gt(C),k=e.useContext(We),be=k.prefixCls,ne=k.mode,de=k.openKeys,fe=k.disabled,re=k.overflowDisabled,H=k.activeKey,oe=k.selectedKeys,ye=k.itemIcon,he=k.expandIcon,Re=k.onItemClick,Ke=k.onOpenChange,Ee=k.onActive,Oe=e.useContext(Ge),Te=Oe.isSubPathKey,Ie=ze(),Pe="".concat(be,"-submenu"),De=fe||R,$e=e.useRef(),qe=e.useRef(),Ve=$||ye,Ue=G||he,Xe=de.includes(C),Le=!re&&Xe,Sn=Te(oe,C),an=lt(C,De,q,ae),Qe=an.active,sn=Object(Be.a)(an,["active"]),yn=e.useState(!1),bn=Object(L.a)(yn,2),Ae=bn[0],He=bn[1],_e=function(xe){De||He(xe)},Ze=function(xe){_e(!0),Y==null||Y({key:C,domEvent:xe})},Wn=function(xe){_e(!1),ie==null||ie({key:C,domEvent:xe})},Un=e.useMemo(function(){return Qe||(ne!=="inline"?Ae||Te([H],C):!1)},[ne,Qe,H,Ae,C,Te]),Kn=P(Ie.length),rn=function(xe){De||(U==null||U({key:C,domEvent:xe}),ne==="inline"&&Ke(C,!Xe))},Dn=_n(function(ke){x==null||x(qn(ke)),Re(ke)}),on=function(xe){ne!=="inline"&&Ke(C,xe)},Pn=function(){Ee(C)},en=se&&"".concat(se,"-popup"),ln=e.createElement("div",Object(V.a)({role:"menuitem",style:Kn,className:"".concat(Pe,"-title"),tabIndex:De?null:-1,ref:$e,title:typeof v=="string"?v:null,"data-menu-id":re&&se?null:se,"aria-expanded":Le,"aria-haspopup":!0,"aria-controls":en,"aria-disabled":De,onClick:rn,onFocus:Pn},sn),v,e.createElement(c,{icon:ne!=="horizontal"?Ue:null,props:Object(me.a)(Object(me.a)({},r),{},{isOpen:Le,isSubMenu:!0})},e.createElement("i",{className:"".concat(Pe,"-arrow")}))),jn=e.useRef(ne);if(ne!=="inline"&&(jn.current=Ie.length>1?"vertical":ne),!re){var cn=jn.current;ln=e.createElement(Da,{mode:cn,prefixCls:Pe,visible:!W&&Le&&ne!=="inline",popupClassName:J,popupOffset:ue,popup:e.createElement(Fn,{mode:cn},e.createElement(xt,{id:en,ref:qe},K)),disabled:De,onVisibleChange:on},ln)}return e.createElement(Fn,{onItemClick:Dn,mode:ne==="horizontal"?"vertical":ne,itemIcon:Ve,expandIcon:Ue},e.createElement(D.Item,Object(V.a)({role:"none"},Q,{component:"li",style:h,className:je()(Pe,"".concat(Pe,"-").concat(ne),E,(o={},Object(ce.a)(o,"".concat(Pe,"-open"),Le),Object(ce.a)(o,"".concat(Pe,"-active"),Un),Object(ce.a)(o,"".concat(Pe,"-selected"),Sn),Object(ce.a)(o,"".concat(Pe,"-disabled"),De),o)),onMouseEnter:Ze,onMouseLeave:Wn}),ln,!re&&e.createElement(ja,{id:en,open:Le,keyPath:Ie},K)))};function Qt(t){var r=t.eventKey,o=t.children,h=ze(r),E=Pt(o,h),v=ee();e.useEffect(function(){if(v)return v.registerPath(r,h),function(){v.unregisterPath(r,h)}},[h]);var C;return v?C=E:C=e.createElement(Aa,t,E),e.createElement(Se.Provider,{value:h},C)}var Ba=n("x/xZ");function Zt(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Object(Ba.a)(t)){var o=t.nodeName.toLowerCase(),h=["input","select","textarea","button"].includes(o)||t.isContentEditable||o==="a"&&!!t.getAttribute("href"),E=t.getAttribute("tabindex"),v=Number(E),C=null;return E&&!Number.isNaN(v)?C=v:h&&C===null&&(C=0),h&&t.disabled&&(C=null),C!==null&&(C>=0||r&&C<0)}return!1}function kt(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,o=Object(fn.a)(t.querySelectorAll("*")).filter(function(h){return Zt(h,r)});return Zt(t,r)&&o.unshift(t),o}var mt=null;function pr(){mt=document.activeElement}function vr(){mt=null}function hr(){if(mt)try{mt.focus()}catch(t){}}function gr(t,r){if(r.keyCode===9){var o=kt(t),h=o[r.shiftKey?0:o.length-1],E=h===document.activeElement||t===document.activeElement;if(E){var v=o[r.shiftKey?o.length-1:0];v.focus(),r.preventDefault()}}}var jt=we.a.LEFT,At=we.a.RIGHT,Bt=we.a.UP,ft=we.a.DOWN,pt=we.a.ENTER,qt=we.a.ESC,_t=[Bt,ft,jt,At];function Ia(t,r,o,h){var E,v,C,R,W="prev",K="next",$="children",G="parent";if(t==="inline"&&h===pt)return{inlineTrigger:!0};var J=(E={},Object(ce.a)(E,Bt,W),Object(ce.a)(E,ft,K),E),ue=(v={},Object(ce.a)(v,jt,o?K:W),Object(ce.a)(v,At,o?W:K),Object(ce.a)(v,ft,$),Object(ce.a)(v,pt,$),v),x=(C={},Object(ce.a)(C,Bt,W),Object(ce.a)(C,ft,K),Object(ce.a)(C,pt,$),Object(ce.a)(C,qt,G),Object(ce.a)(C,jt,o?$:G),Object(ce.a)(C,At,o?G:$),C),Y={inline:J,horizontal:ue,vertical:x,inlineSub:J,horizontalSub:x,verticalSub:x},ie=(R=Y["".concat(t).concat(r?"":"Sub")])===null||R===void 0?void 0:R[h];switch(ie){case W:return{offset:-1,sibling:!0};case K:return{offset:1,sibling:!0};case G:return{offset:-1,sibling:!1};case $:return{offset:1,sibling:!1};default:return null}}function Na(t){for(var r=t;r;){if(r.getAttribute("data-menu-list"))return r;r=r.parentElement}return null}function Ta(t,r){for(var o=t||document.activeElement;o;){if(r.has(o))return o;o=o.parentElement}return null}function Ma(t,r){var o=kt(t,!0);return o.filter(function(h){return r.has(h)})}function ea(t,r,o){var h=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!t)return null;var E=Ma(t,r),v=E.length,C=E.findIndex(function(R){return o===R});return h<0?C===-1?C=v-1:C-=1:h>0&&(C+=1),C=(C+v)%v,E[C]}function wa(t,r,o,h,E,v,C,R,W,K){var $=e.useRef(),G=e.useRef();G.current=r;var J=function(){Ye.a.cancel($.current)};return e.useEffect(function(){return function(){J()}},[]),function(ue){var x=ue.which;if([].concat(_t,[pt,qt]).includes(x)){var Y,ie,U,q=function(){Y=new Set,ie=new Map,U=new Map;var ye=v();return ye.forEach(function(he){var Re=document.querySelector("[data-menu-id='".concat(Jt(h,he),"']"));Re&&(Y.add(Re),U.set(Re,he),ie.set(he,Re))}),Y};q();var ae=ie.get(r),Q=Ta(ae,Y),se=U.get(Q),k=Ia(t,C(se,!0).length===1,o,x);if(!k)return;_t.includes(x)&&ue.preventDefault();var be=function(ye){if(ye){var he=ye,Re=ye.querySelector("a");(Re==null?void 0:Re.getAttribute("href"))&&(he=Re);var Ke=U.get(ye);R(Ke),J(),$.current=Object(Ye.a)(function(){G.current===Ke&&he.focus()})}};if(k.sibling||!Q){var ne;!Q||t==="inline"?ne=E.current:ne=Na(Q);var de=ea(ne,Y,Q,k.offset);be(de)}else if(k.inlineTrigger)W(se);else if(k.offset>0)W(se,!0),J(),$.current=Object(Ye.a)(function(){q();var oe=Q.getAttribute("aria-controls"),ye=document.getElementById(oe),he=ea(ye,Y);be(he)},5);else if(k.offset<0){var fe=C(se,!0),re=fe[fe.length-2],H=ie.get(re);W(re,!1),be(H)}}K==null||K(ue)}}var Wa=Math.random().toFixed(5).toString().slice(2),na=0;function Ka(t){var r=Object(On.a)(t,{value:t}),o=Object(L.a)(r,2),h=o[0],E=o[1];return e.useEffect(function(){na+=1;var v="".concat(Wa,"-").concat(na);E("rc-menu-uuid-".concat(v))},[]),h}var yr=n("p8sG");function La(t){Promise.resolve().then(t)}var It="__RC_UTIL_PATH_SPLIT__",ta=function(r){return r.join(It)},$a=function(r){return r.split(It)},Nt="rc-menu-more";function Va(){var t=e.useState({}),r=Object(L.a)(t,2),o=r[1],h=Object(e.useRef)(new Map),E=Object(e.useRef)(new Map),v=e.useState([]),C=Object(L.a)(v,2),R=C[0],W=C[1],K=Object(e.useRef)(0),$=Object(e.useCallback)(function(U,q){var ae=ta(q);E.current.set(ae,U),h.current.set(U,ae),K.current+=1;var Q=K.current;La(function(){Q===K.current&&o({})})},[]),G=Object(e.useCallback)(function(U,q){var ae=ta(q);E.current.delete(ae),h.current.delete(U)},[]),J=Object(e.useCallback)(function(U){W(U)},[]),ue=Object(e.useCallback)(function(U,q){var ae=h.current.get(U)||"",Q=$a(ae);return q&&R.includes(Q[0])&&Q.unshift(Nt),Q},[R]),x=Object(e.useCallback)(function(U,q){return U.some(function(ae){var Q=ue(ae,!0);return Q.includes(q)})},[ue]),Y=function(){var q=Object(fn.a)(h.current.keys());return R.length&&q.push(Nt),q},ie=Object(e.useCallback)(function(U){var q="".concat(h.current.get(U)).concat(It),ae=new Set;return Object(fn.a)(E.current.keys()).forEach(function(Q){Q.startsWith(q)&&ae.add(E.current.get(Q))}),ae},[]);return{registerPath:$,unregisterPath:G,refreshOverflowKeys:J,isSubPathKey:x,getKeyPath:ue,getKeys:Y,getSubPathKeys:ie}}var vt=[],za=function(r){var o,h,E=r.prefixCls,v=E===void 0?"rc-menu":E,C=r.style,R=r.className,W=r.tabIndex,K=W===void 0?0:W,$=r.children,G=r.direction,J=r.id,ue=r.mode,x=ue===void 0?"vertical":ue,Y=r.inlineCollapsed,ie=r.disabled,U=r.disabledOverflow,q=r.subMenuOpenDelay,ae=q===void 0?.1:q,Q=r.subMenuCloseDelay,se=Q===void 0?.1:Q,k=r.forceSubMenuRender,be=r.defaultOpenKeys,ne=r.openKeys,de=r.activeKey,fe=r.defaultActiveFirst,re=r.selectable,H=re===void 0?!0:re,oe=r.multiple,ye=oe===void 0?!1:oe,he=r.defaultSelectedKeys,Re=r.selectedKeys,Ke=r.onSelect,Ee=r.onDeselect,Oe=r.inlineIndent,Te=Oe===void 0?24:Oe,Ie=r.motion,Pe=r.defaultMotions,De=r.triggerSubMenuAction,$e=De===void 0?"hover":De,qe=r.builtinPlacements,Ve=r.itemIcon,Ue=r.expandIcon,Xe=r.overflowedIndicator,Le=Xe===void 0?"...":Xe,Sn=r.getPopupContainer,an=r.onClick,Qe=r.onOpenChange,sn=r.onKeyDown,yn=r.openAnimation,bn=r.openTransitionName,Ae=Object(Be.a)(r,["prefixCls","style","className","tabIndex","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName"]),He=Pt($,vt),_e=e.useState(!1),Ze=Object(L.a)(_e,2),Wn=Ze[0],Un=Ze[1],Kn=e.useRef(),rn=Ka(J),Dn=G==="rtl",on=e.useMemo(function(){return x==="inline"&&Y?["vertical",Y]:[x,!1]},[x,Y]),Pn=Object(L.a)(on,2),en=Pn[0],ln=Pn[1],jn=e.useState(0),cn=Object(L.a)(jn,2),ke=cn[0],xe=cn[1],Jn=ke>=He.length-1||en!=="horizontal"||U,Gn=Object(On.a)(be,{value:ne,postState:function(Z){return Z||vt}}),et=Object(L.a)(Gn,2),En=et[0],hn=et[1],Hn=e.useState(En),Cn=Object(L.a)(Hn,2),mn=Cn[0],xn=Cn[1],An=en==="inline",Xn=e.useRef(!1);e.useEffect(function(){An&&xn(En)},[En]),e.useEffect(function(){if(!Xn.current){Xn.current=!0;return}if(An)hn(mn);else{var te=[];hn(te),Qe==null||Qe(te)}},[An]);var dn=Va(),Bn=dn.registerPath,ve=dn.unregisterPath,Fe=dn.refreshOverflowKeys,Me=dn.isSubPathKey,nn=dn.getKeyPath,Yn=dn.getKeys,gt=dn.getSubPathKeys,Wt=e.useMemo(function(){return{registerPath:Bn,unregisterPath:ve}},[Bn,ve]),Kt=e.useMemo(function(){return{isSubPathKey:Me}},[Me]);e.useEffect(function(){Fe(Jn?vt:He.slice(ke+1).map(function(te){return te.key}))},[ke,Jn]);var Lt=Object(On.a)(de||fe&&((o=He[0])===null||o===void 0?void 0:o.key),{value:de}),nt=Object(L.a)(Lt,2),yt=nt[0],st=nt[1],bt=_n(function(te){st(te)}),$t=_n(function(){st(void 0)}),Et=Object(On.a)(he||[],{value:Re,postState:function(Z){return Array.isArray(Z)?Z:Z==null?vt:[Z]}}),Ct=Object(L.a)(Et,2),tt=Ct[0],In=Ct[1],Ot=function(Z){if(!!H){var Ce=Z.key,Je=tt.includes(Ce),un;Je?un=tt.filter(function(Zn){return Zn!==Ce}):ye?un=[].concat(Object(fn.a)(tt),[Ce]):un=[Ce],In(un);var zn=Object(me.a)(Object(me.a)({},Z),{},{selectedKeys:un});Je?Ee==null||Ee(zn):Ke==null||Ke(zn)}},Rt=_n(function(te){an==null||an(qn(te)),Ot(te)}),it=_n(function(te,Z){var Ce=En.filter(function(un){return un!==te});if(Z)Ce.push(te);else if(en!=="inline"){var Je=gt(te);Ce=Ce.filter(function(un){return!Je.has(un)})}s()(En,Ce)||(hn(Ce),Qe==null||Qe(Ce))}),Qn=_n(Sn),ot=function(Z,Ce){var Je=Ce!=null?Ce:!En.includes(Z);it(Z,Je)},dt=wa(en,yt,Dn,rn,Kn,Yn,nn,st,ot,sn);e.useEffect(function(){Un(!0)},[]);var Ft=en!=="horizontal"||U?He:He.map(function(te,Z){return e.createElement(Fn,{key:te.key,overflowDisabled:Z>ke},te)}),St=e.createElement(D,Object(V.a)({id:J,ref:Kn,prefixCls:"".concat(v,"-overflow"),component:"ul",itemComponent:Dt,className:je()(v,"".concat(v,"-root"),"".concat(v,"-").concat(en),R,(h={},Object(ce.a)(h,"".concat(v,"-inline-collapsed"),ln),Object(ce.a)(h,"".concat(v,"-rtl"),Dn),h)),dir:G,style:C,role:"menu",tabIndex:K,data:Ft,renderRawItem:function(Z){return Z},renderRawRest:function(Z){var Ce=Z.length,Je=Ce?He.slice(-Ce):null;return e.createElement(Qt,{eventKey:Nt,title:Le,disabled:Jn,internalPopupClose:Ce===0},Je)},maxCount:en!=="horizontal"||U?D.INVALIDATE:D.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(Z){xe(Z)},onKeyDown:dt},Ae));return e.createElement(Ut.Provider,{value:rn},e.createElement(Fn,{prefixCls:v,mode:en,openKeys:En,rtl:Dn,disabled:ie,motion:Wn?Ie:null,defaultMotions:Wn?Pe:null,activeKey:yt,onActive:bt,onInactive:$t,selectedKeys:tt,inlineIndent:Te,subMenuOpenDelay:ae,subMenuCloseDelay:se,forceSubMenuRender:k,builtinPlacements:qe,triggerSubMenuAction:$e,getPopupContainer:Qn,itemIcon:Ve,expandIcon:Ue,onItemClick:Rt,onOpenChange:it},e.createElement(Ge.Provider,{value:Kt},St),e.createElement(pe.Provider,{value:Wt},He)))},Ua=za,Ja=function(r){var o=r.className,h=r.title,E=r.eventKey,v=r.children,C=Object(Be.a)(r,["className","title","eventKey","children"]),R=e.useContext(We),W=R.prefixCls,K="".concat(W,"-item-group");return e.createElement("li",Object(V.a)({},C,{onClick:function(G){return G.stopPropagation()},className:je()(K,o)}),e.createElement("div",{className:"".concat(K,"-title"),title:typeof h=="string"?h:void 0},h),e.createElement("ul",{className:"".concat(K,"-list")},v))};function Ga(t){var r=t.children,o=Object(Be.a)(t,["children"]),h=ze(o.eventKey),E=Pt(r,h),v=ee();return v?E:e.createElement(Ja,o,E)}function Ha(t){var r=t.className,o=t.style,h=e.useContext(We),E=h.prefixCls,v=ee();return v?null:e.createElement("li",{className:je()("".concat(E,"-item-divider"),r),style:o})}var ut=Ua;ut.Item=Dt,ut.SubMenu=Qt,ut.ItemGroup=Ga,ut.Divider=Ha;var xa=ut,Xa=n("eDIo");function Ya(t,r){var o=t.prefixCls,h=t.editable,E=t.locale,v=t.style;return!h||h.showAdd===!1?null:e.createElement("button",{ref:r,type:"button",className:"".concat(o,"-nav-add"),style:v,"aria-label":(E==null?void 0:E.addAriaLabel)||"Add tab",onClick:function(R){h.onEdit("add",{event:R})}},h.addIcon||"+")}var aa=e.forwardRef(Ya);function Qa(t,r){var o=t.prefixCls,h=t.id,E=t.tabs,v=t.locale,C=t.mobile,R=t.moreIcon,W=R===void 0?"More":R,K=t.moreTransitionName,$=t.style,G=t.className,J=t.editable,ue=t.tabBarGutter,x=t.rtl,Y=t.onTabClick,ie=Object(e.useState)(!1),U=Object(L.a)(ie,2),q=U[0],ae=U[1],Q=Object(e.useState)(null),se=Object(L.a)(Q,2),k=se[0],be=se[1],ne="".concat(h,"-more-popup"),de="".concat(o,"-dropdown"),fe=k!==null?"".concat(ne,"-").concat(k):null,re=v==null?void 0:v.dropdownAriaLabel,H=e.createElement(xa,{onClick:function(Oe){var Te=Oe.key,Ie=Oe.domEvent;Y(Te,Ie),ae(!1)},id:ne,tabIndex:-1,role:"listbox","aria-activedescendant":fe,selectedKeys:[k],"aria-label":re!==void 0?re:"expanded dropdown"},E.map(function(Ee){return e.createElement(Dt,{key:Ee.key,id:"".concat(ne,"-").concat(Ee.key),role:"option","aria-controls":h&&"".concat(h,"-panel-").concat(Ee.key),disabled:Ee.disabled},Ee.tab)}));function oe(Ee){for(var Oe=E.filter(function($e){return!$e.disabled}),Te=Oe.findIndex(function($e){return $e.key===k})||0,Ie=Oe.length,Pe=0;Pe<Ie;Pe+=1){Te=(Te+Ee+Ie)%Ie;var De=Oe[Te];if(!De.disabled){be(De.key);return}}}function ye(Ee){var Oe=Ee.which;if(!q){[we.a.DOWN,we.a.SPACE,we.a.ENTER].includes(Oe)&&(ae(!0),Ee.preventDefault());return}switch(Oe){case we.a.UP:oe(-1),Ee.preventDefault();break;case we.a.DOWN:oe(1),Ee.preventDefault();break;case we.a.ESC:ae(!1);break;case we.a.SPACE:case we.a.ENTER:k!==null&&Y(k,Ee);break}}Object(e.useEffect)(function(){var Ee=document.getElementById(fe);Ee&&Ee.scrollIntoView&&Ee.scrollIntoView(!1)},[k]),Object(e.useEffect)(function(){q||be(null)},[q]);var he=Object(ce.a)({},x?"marginLeft":"marginRight",ue);E.length||(he.visibility="hidden",he.order=1);var Re=je()(Object(ce.a)({},"".concat(de,"-rtl"),x)),Ke=C?null:e.createElement(Xa.default,{prefixCls:de,overlay:H,trigger:["hover"],visible:q,transitionName:K,onVisibleChange:ae,overlayClassName:Re,mouseEnterDelay:.1,mouseLeaveDelay:.1},e.createElement("button",{type:"button",className:"".concat(o,"-nav-more"),style:he,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":ne,id:"".concat(h,"-more"),"aria-expanded":q,onKeyDown:ye},W));return e.createElement("div",{className:je()("".concat(o,"-nav-operations"),G),style:$,ref:r},Ke,e.createElement(aa,{prefixCls:o,locale:v,editable:J}))}var Za=e.forwardRef(Qa),Tt=Object(e.createContext)(null),ka=.1,ra=.01,ht=20,la=Math.pow(.995,ht);function qa(t,r){var o=Object(e.useState)(),h=Object(L.a)(o,2),E=h[0],v=h[1],C=Object(e.useState)(0),R=Object(L.a)(C,2),W=R[0],K=R[1],$=Object(e.useState)(0),G=Object(L.a)($,2),J=G[0],ue=G[1],x=Object(e.useState)(),Y=Object(L.a)(x,2),ie=Y[0],U=Y[1],q=Object(e.useRef)();function ae(de){var fe=de.touches[0],re=fe.screenX,H=fe.screenY;v({x:re,y:H}),window.clearInterval(q.current)}function Q(de){if(!!E){de.preventDefault();var fe=de.touches[0],re=fe.screenX,H=fe.screenY;v({x:re,y:H});var oe=re-E.x,ye=H-E.y;r(oe,ye);var he=Date.now();K(he),ue(he-W),U({x:oe,y:ye})}}function se(){if(!!E&&(v(null),U(null),ie)){var de=ie.x/J,fe=ie.y/J,re=Math.abs(de),H=Math.abs(fe);if(Math.max(re,H)<ka)return;var oe=de,ye=fe;q.current=window.setInterval(function(){if(Math.abs(oe)<ra&&Math.abs(ye)<ra){window.clearInterval(q.current);return}oe*=la,ye*=la,r(oe*ht,ye*ht)},ht)}}var k=Object(e.useRef)();function be(de){var fe=de.deltaX,re=de.deltaY,H=0,oe=Math.abs(fe),ye=Math.abs(re);oe===ye?H=k.current==="x"?fe:re:oe>ye?(H=fe,k.current="x"):(H=re,k.current="y"),r(-H,-H)&&de.preventDefault()}var ne=Object(e.useRef)(null);ne.current={onTouchStart:ae,onTouchMove:Q,onTouchEnd:se,onWheel:be},e.useEffect(function(){function de(oe){ne.current.onTouchStart(oe)}function fe(oe){ne.current.onTouchMove(oe)}function re(oe){ne.current.onTouchEnd(oe)}function H(oe){ne.current.onWheel(oe)}return document.addEventListener("touchmove",fe,{passive:!1}),document.addEventListener("touchend",re,{passive:!1}),t.current.addEventListener("touchstart",de,{passive:!1}),t.current.addEventListener("wheel",H),function(){document.removeEventListener("touchmove",fe),document.removeEventListener("touchend",re)}},[])}function _a(){var t=Object(e.useRef)(new Map);function r(h){return t.current.has(h)||t.current.set(h,e.createRef()),t.current.get(h)}function o(h){t.current.delete(h)}return[r,o]}function ua(t,r){var o=e.useRef(t),h=e.useState({}),E=Object(L.a)(h,2),v=E[1];function C(R){var W=typeof R=="function"?R(o.current):R;W!==o.current&&r(W,o.current),o.current=W,v({})}return[o.current,C]}var sa=function(r){var o=r.position,h=r.prefixCls,E=r.extra;if(!E)return null;var v,C=E;return o==="right"&&(v=C.right||!C.left&&C||null),o==="left"&&(v=C.left||null),v?e.createElement("div",{className:"".concat(h,"-extra-content")},v):null};function er(t,r){var o,h=e.useContext(Tt),E=h.prefixCls,v=h.tabs,C=t.className,R=t.style,W=t.id,K=t.animated,$=t.activeKey,G=t.rtl,J=t.extra,ue=t.editable,x=t.locale,Y=t.tabPosition,ie=t.tabBarGutter,U=t.children,q=t.onTabClick,ae=t.onTabScroll,Q=Object(e.useRef)(),se=Object(e.useRef)(),k=Object(e.useRef)(),be=Object(e.useRef)(),ne=_a(),de=Object(L.a)(ne,2),fe=de[0],re=de[1],H=Y==="top"||Y==="bottom",oe=ua(0,function(te,Z){H&&ae&&ae({direction:te>Z?"left":"right"})}),ye=Object(L.a)(oe,2),he=ye[0],Re=ye[1],Ke=ua(0,function(te,Z){!H&&ae&&ae({direction:te>Z?"top":"bottom"})}),Ee=Object(L.a)(Ke,2),Oe=Ee[0],Te=Ee[1],Ie=Object(e.useState)(0),Pe=Object(L.a)(Ie,2),De=Pe[0],$e=Pe[1],qe=Object(e.useState)(0),Ve=Object(L.a)(qe,2),Ue=Ve[0],Xe=Ve[1],Le=Object(e.useState)(0),Sn=Object(L.a)(Le,2),an=Sn[0],Qe=Sn[1],sn=Object(e.useState)(0),yn=Object(L.a)(sn,2),bn=yn[0],Ae=yn[1],He=Object(e.useState)(null),_e=Object(L.a)(He,2),Ze=_e[0],Wn=_e[1],Un=Object(e.useState)(null),Kn=Object(L.a)(Un,2),rn=Kn[0],Dn=Kn[1],on=Object(e.useState)(0),Pn=Object(L.a)(on,2),en=Pn[0],ln=Pn[1],jn=Object(e.useState)(0),cn=Object(L.a)(jn,2),ke=cn[0],xe=cn[1],Jn=Rn(new Map),Gn=Object(L.a)(Jn,2),et=Gn[0],En=Gn[1],hn=T(v,et,De),Hn="".concat(E,"-nav-operations-hidden"),Cn=0,mn=0;H?G?(Cn=0,mn=Math.max(0,De-Ze)):(Cn=Math.min(0,Ze-De),mn=0):(Cn=Math.min(0,rn-Ue),mn=0);function xn(te){return te<Cn?Cn:te>mn?mn:te}var An=Object(e.useRef)(),Xn=Object(e.useState)(),dn=Object(L.a)(Xn,2),Bn=dn[0],ve=dn[1];function Fe(){ve(Date.now())}function Me(){window.clearTimeout(An.current)}qa(Q,function(te,Z){function Ce(Je,un){Je(function(zn){var Zn=xn(zn+un);return Zn})}if(H){if(Ze>=De)return!1;Ce(Re,te)}else{if(rn>=Ue)return!1;Ce(Te,Z)}return Me(),Fe(),!0}),Object(e.useEffect)(function(){return Me(),Bn&&(An.current=window.setTimeout(function(){ve(0)},100)),Me},[Bn]);function nn(){var te=arguments.length>0&&arguments[0]!==void 0?arguments[0]:$,Z=hn.get(te)||{width:0,height:0,left:0,right:0,top:0};if(H){var Ce=he;G?Z.right<he?Ce=Z.right:Z.right+Z.width>he+Ze&&(Ce=Z.right+Z.width-Ze):Z.left<-he?Ce=-Z.left:Z.left+Z.width>-he+Ze&&(Ce=-(Z.left+Z.width-Ze)),Te(0),Re(xn(Ce))}else{var Je=Oe;Z.top<-Oe?Je=-Z.top:Z.top+Z.height>-Oe+rn&&(Je=-(Z.top+Z.height-rn)),Re(0),Te(xn(Je))}}var Yn=M(hn,{width:Ze,height:rn,left:he,top:Oe},{width:an,height:bn},{width:en,height:ke},Object(me.a)(Object(me.a)({},t),{},{tabs:v})),gt=Object(L.a)(Yn,2),Wt=gt[0],Kt=gt[1],Lt=v.map(function(te){var Z=te.key;return e.createElement($n,{id:W,prefixCls:E,key:Z,rtl:G,tab:te,closable:te.closable,editable:ue,active:Z===$,tabPosition:Y,tabBarGutter:ie,renderWrapper:U,removeAriaLabel:x==null?void 0:x.removeAriaLabel,ref:fe(Z),onClick:function(Je){q(Z,Je)},onRemove:function(){re(Z)},onFocus:function(){nn(Z),Fe(),G||(Q.current.scrollLeft=0),Q.current.scrollTop=0}})}),nt=wn(function(){var te,Z,Ce,Je,un,zn,Zn,Vt,zt,ir=((te=Q.current)===null||te===void 0?void 0:te.offsetWidth)||0,or=((Z=Q.current)===null||Z===void 0?void 0:Z.offsetHeight)||0,ma=((Ce=be.current)===null||Ce===void 0?void 0:Ce.offsetWidth)||0,fa=((Je=be.current)===null||Je===void 0?void 0:Je.offsetHeight)||0,dr=((un=k.current)===null||un===void 0?void 0:un.offsetWidth)||0,cr=((zn=k.current)===null||zn===void 0?void 0:zn.offsetHeight)||0;Wn(ir),Dn(or),ln(ma),xe(fa);var pa=(((Zn=se.current)===null||Zn===void 0?void 0:Zn.offsetWidth)||0)-ma,va=(((Vt=se.current)===null||Vt===void 0?void 0:Vt.offsetHeight)||0)-fa;$e(pa),Xe(va);var ha=(zt=k.current)===null||zt===void 0?void 0:zt.className.includes(Hn);Qe(pa-(ha?0:dr)),Ae(va-(ha?0:cr)),En(function(){var ga=new Map;return v.forEach(function(mr){var ya=mr.key,ct=fe(ya).current;ct&&ga.set(ya,{width:ct.offsetWidth,height:ct.offsetHeight,left:ct.offsetLeft,top:ct.offsetTop})}),ga})}),yt=v.slice(0,Wt),st=v.slice(Kt+1),bt=[].concat(Object(fn.a)(yt),Object(fn.a)(st)),$t=Object(e.useState)(),Et=Object(L.a)($t,2),Ct=Et[0],tt=Et[1],In=hn.get($),Ot=Object(e.useRef)();function Rt(){Ye.a.cancel(Ot.current)}Object(e.useEffect)(function(){var te={};return In&&(H?(G?te.right=In.right:te.left=In.left,te.width=In.width):(te.top=In.top,te.height=In.height)),Rt(),Ot.current=Object(Ye.a)(function(){tt(te)}),Rt},[In,H,G]),Object(e.useEffect)(function(){nn()},[$,In,hn,H]),Object(e.useEffect)(function(){nt()},[G,ie,$,v.map(function(te){return te.key}).join("_")]);var it=!!bt.length,Qn="".concat(E,"-nav-wrap"),ot,dt,Ft,St;return H?G?(dt=he>0,ot=he+Ze<De):(ot=he<0,dt=-he+Ze<De):(Ft=Oe<0,St=-Oe+rn<Ue),e.createElement("div",{ref:r,role:"tablist",className:je()("".concat(E,"-nav"),C),style:R,onKeyDown:function(){Fe()}},e.createElement(sa,{position:"left",extra:J,prefixCls:E}),e.createElement(Ln.default,{onResize:nt},e.createElement("div",{className:je()(Qn,(o={},Object(ce.a)(o,"".concat(Qn,"-ping-left"),ot),Object(ce.a)(o,"".concat(Qn,"-ping-right"),dt),Object(ce.a)(o,"".concat(Qn,"-ping-top"),Ft),Object(ce.a)(o,"".concat(Qn,"-ping-bottom"),St),o)),ref:Q},e.createElement(Ln.default,{onResize:nt},e.createElement("div",{ref:se,className:"".concat(E,"-nav-list"),style:{transform:"translate(".concat(he,"px, ").concat(Oe,"px)"),transition:Bn?"none":void 0}},Lt,e.createElement(aa,{ref:be,prefixCls:E,locale:x,editable:ue,style:{visibility:it?"hidden":null}}),e.createElement("div",{className:je()("".concat(E,"-ink-bar"),Object(ce.a)({},"".concat(E,"-ink-bar-animated"),K.inkBar)),style:Ct}))))),e.createElement(Za,Object(V.a)({},t,{ref:k,prefixCls:E,tabs:bt,className:!it&&Hn})),e.createElement(sa,{position:"right",extra:J,prefixCls:E}))}var ia=e.forwardRef(er);function nr(t){var r=t.id,o=t.activeKey,h=t.animated,E=t.tabPosition,v=t.rtl,C=t.destroyInactiveTabPane,R=e.useContext(Tt),W=R.prefixCls,K=R.tabs,$=h.tabPane,G=K.findIndex(function(J){return J.key===o});return e.createElement("div",{className:je()("".concat(W,"-content-holder"))},e.createElement("div",{className:je()("".concat(W,"-content"),"".concat(W,"-content-").concat(E),Object(ce.a)({},"".concat(W,"-content-animated"),$)),style:G&&$?Object(ce.a)({},v?"marginRight":"marginLeft","-".concat(G,"00%")):null},K.map(function(J){return e.cloneElement(J.node,{key:J.key,prefixCls:W,tabKey:J.key,id:r,animated:$,active:J.key===o,destroyInactiveTabPane:C})})))}function oa(t){var r=t.prefixCls,o=t.forceRender,h=t.className,E=t.style,v=t.id,C=t.active,R=t.animated,W=t.destroyInactiveTabPane,K=t.tabKey,$=t.children,G=e.useState(o),J=Object(L.a)(G,2),ue=J[0],x=J[1];e.useEffect(function(){C?x(!0):W&&x(!1)},[C,W]);var Y={};return C||(R?(Y.visibility="hidden",Y.height=0,Y.overflowY="hidden"):Y.display="none"),e.createElement("div",{id:v&&"".concat(v,"-panel-").concat(K),role:"tabpanel",tabIndex:C?0:-1,"aria-labelledby":v&&"".concat(v,"-tab-").concat(K),"aria-hidden":!C,style:Object(me.a)(Object(me.a)({},Y),E),className:je()("".concat(r,"-tabpane"),C&&"".concat(r,"-tabpane-active"),h)},(C||ue||o)&&$)}var da=0;function tr(t){return Object(Tn.a)(t).map(function(r){if(e.isValidElement(r)){var o=r.key!==void 0?String(r.key):void 0;return Object(me.a)(Object(me.a)({key:o},r.props),{},{node:r})}return null}).filter(function(r){return r})}function ar(t,r){var o,h=t.id,E=t.prefixCls,v=E===void 0?"rc-tabs":E,C=t.className,R=t.children,W=t.direction,K=t.activeKey,$=t.defaultActiveKey,G=t.editable,J=t.animated,ue=J===void 0?{inkBar:!0,tabPane:!1}:J,x=t.tabPosition,Y=x===void 0?"top":x,ie=t.tabBarGutter,U=t.tabBarStyle,q=t.tabBarExtraContent,ae=t.locale,Q=t.moreIcon,se=t.moreTransitionName,k=t.destroyInactiveTabPane,be=t.renderTabBar,ne=t.onChange,de=t.onTabClick,fe=t.onTabScroll,re=Object(Be.a)(t,["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"]),H=tr(R),oe=W==="rtl",ye;ue===!1?ye={inkBar:!1,tabPane:!1}:ue===!0?ye={inkBar:!0,tabPane:!0}:ye=Object(me.a)({inkBar:!0,tabPane:!1},Object(tn.a)(ue)==="object"?ue:{});var he=Object(e.useState)(!1),Re=Object(L.a)(he,2),Ke=Re[0],Ee=Re[1];Object(e.useEffect)(function(){Ee(Object(Mn.a)())},[]);var Oe=Object(On.a)(function(){var Ae;return(Ae=H[0])===null||Ae===void 0?void 0:Ae.key},{value:K,defaultValue:$}),Te=Object(L.a)(Oe,2),Ie=Te[0],Pe=Te[1],De=Object(e.useState)(function(){return H.findIndex(function(Ae){return Ae.key===Ie})}),$e=Object(L.a)(De,2),qe=$e[0],Ve=$e[1];Object(e.useEffect)(function(){var Ae=H.findIndex(function(_e){return _e.key===Ie});if(Ae===-1){var He;Ae=Math.max(0,Math.min(qe,H.length-1)),Pe((He=H[Ae])===null||He===void 0?void 0:He.key)}Ve(Ae)},[H.map(function(Ae){return Ae.key}).join("_"),Ie,qe]);var Ue=Object(On.a)(null,{value:h}),Xe=Object(L.a)(Ue,2),Le=Xe[0],Sn=Xe[1],an=Y;Ke&&!["left","right"].includes(Y)&&(an="top"),Object(e.useEffect)(function(){h||(Sn("rc-tabs-".concat(da)),da+=1)},[]);function Qe(Ae,He){de==null||de(Ae,He),Pe(Ae),ne==null||ne(Ae)}var sn={id:Le,activeKey:Ie,animated:ye,tabPosition:an,rtl:oe,mobile:Ke},yn,bn=Object(me.a)(Object(me.a)({},sn),{},{editable:G,locale:ae,moreIcon:Q,moreTransitionName:se,tabBarGutter:ie,onTabClick:Qe,onTabScroll:fe,extra:q,style:U,panes:R});return be?yn=be(bn,ia):yn=e.createElement(ia,bn),e.createElement(Tt.Provider,{value:{tabs:H,prefixCls:v}},e.createElement("div",Object(V.a)({ref:r,id:h,className:je()(v,"".concat(v,"-").concat(an),(o={},Object(ce.a)(o,"".concat(v,"-mobile"),Ke),Object(ce.a)(o,"".concat(v,"-editable"),G),Object(ce.a)(o,"".concat(v,"-rtl"),oe),o),C)},re),yn,e.createElement(nr,Object(V.a)({destroyInactiveTabPane:k},sn,{animated:ye}))))}var ca=e.forwardRef(ar);ca.TabPane=oa;var rr=ca,lr=rr,Mt=n("MZF8"),vn=n("dEAq"),ur=n("ZpkN"),br=n("TIsu");function wt(t,r){var o,h=(o=t.match(/\.(\w+)$/))===null||o===void 0?void 0:o[1];return h||(h=r.tsx?"tsx":"jsx"),h}var sr=t=>{var r,o,h,E=Object(e.useRef)(),v=Object(e.useContext)(vn.context),C=v.locale,R=Object(vn.useLocaleProps)(C,t),W=Object(vn.useDemoUrl)(R.identifier),K=R.demoUrl||W,$=(Mt.a===null||Mt.a===void 0?void 0:Mt.a.location.hash)==="#".concat(R.identifier),G=Object.keys(R.sources).length===1,J=Object(vn.useCodeSandbox)((r=R.hideActions)!==null&&r!==void 0&&r.includes("CSB")?null:R),ue=Object(vn.useRiddle)((o=R.hideActions)!==null&&o!==void 0&&o.includes("RIDDLE")?null:R),x=Object(vn.useMotions)(R.motions||[],E.current),Y=Object(X.default)(x,2),ie=Y[0],U=Y[1],q=Object(vn.useCopy)(),ae=Object(X.default)(q,2),Q=ae[0],se=ae[1],k=Object(e.useState)("_"),be=Object(X.default)(k,2),ne=be[0],de=be[1],fe=Object(e.useState)(wt(ne,R.sources[ne])),re=Object(X.default)(fe,2),H=re[0],oe=re[1],ye=Object(e.useState)(Boolean(R.defaultShowCode)),he=Object(X.default)(ye,2),Re=he[0],Ke=he[1],Ee=Object(e.useState)(Math.random()),Oe=Object(X.default)(Ee,2),Te=Oe[0],Ie=Oe[1],Pe=R.sources[ne][H]||R.sources[ne].content,De=Object(vn.useTSPlaygroundUrl)(C,Pe),$e=Object(e.useRef)(),qe=Object(vn.usePrefersColor)(),Ve=Object(X.default)(qe,1),Ue=Ve[0];Object(e.useEffect)(()=>{Ie(Math.random())},[Ue]);function Xe(Le){de(Le),oe(wt(Le,R.sources[Le]))}return y.a.createElement("div",{style:R.style,className:[R.className,"__dumi-default-previewer",$?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:R.identifier,"data-debug":R.debug||void 0,"data-iframe":R.iframe||void 0},R.iframe&&y.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),y.a.createElement("div",{ref:E,className:"__dumi-default-previewer-demo",style:{transform:R.transform?"translate(0, 0)":void 0,padding:R.compact||R.iframe&&R.compact!==!1?"0":void 0,background:R.background}},R.iframe?y.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(R.iframe).replace(/(\d)$/,"$1px")},key:Te,src:K,ref:$e}):R.children),y.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":R.title},R.title&&y.a.createElement(vn.AnchorLink,{to:"#".concat(R.identifier)},R.title),R.description&&y.a.createElement("div",{dangerouslySetInnerHTML:{__html:R.description}})),y.a.createElement("div",{className:"__dumi-default-previewer-actions"},J&&y.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:J}),ue&&y.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:ue}),R.motions&&y.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:U,onClick:()=>ie()}),R.iframe&&y.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:()=>Ie(Math.random())}),!((h=R.hideActions)!==null&&h!==void 0&&h.includes("EXTERNAL"))&&y.a.createElement(vn.Link,{target:"_blank",to:K},y.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),y.a.createElement("span",null),y.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":se,onClick:()=>Q(Pe)}),H==="tsx"&&Re&&y.a.createElement(vn.Link,{target:"_blank",to:De},y.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),y.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(Re?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:()=>Ke(!Re)})),Re&&y.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!G&&y.a.createElement(lr,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xB7\xB7\xB7",defaultActiveKey:ne,onChange:Xe},Object.keys(R.sources).map(Le=>y.a.createElement(oa,{tab:Le==="_"?"index.".concat(wt(Le,R.sources[Le])):Le,key:Le}))),y.a.createElement("div",{className:"__dumi-default-previewer-source"},y.a.createElement(ur.a,{code:Pe,lang:H,showCopy:!1}))))},Er=gn.default=sr},"80pN":function(Nn,gn,n){"use strict";(function(X){/** @license React v16.14.0
* react-dom-test-utils.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var e=n("MgzW"),y=n("q1tI"),V=n("i8i4"),ce=n("QCnb");function L(c){for(var P="https://reactjs.org/docs/error-decoder.html?invariant="+c,j=1;j<arguments.length;j++)P+="&args[]="+encodeURIComponent(arguments[j]);return"Minified React error #"+c+"; visit "+P+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var tn=y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;tn.hasOwnProperty("ReactCurrentDispatcher")||(tn.ReactCurrentDispatcher={current:null}),tn.hasOwnProperty("ReactCurrentBatchConfig")||(tn.ReactCurrentBatchConfig={suspense:null});function Be(c){var P=c,j=c;if(c.alternate)for(;P.return;)P=P.return;else{c=P;do P=c,(P.effectTag&1026)!=0&&(j=P.return),c=P.return;while(c)}return P.tag===3?j:null}function me(c){if(Be(c)!==c)throw Error(L(188))}function at(c){var P=c.alternate;if(!P){if(P=Be(c),P===null)throw Error(L(188));return P!==c?null:c}for(var j=c,pe=P;;){var ee=j.return;if(ee===null)break;var Se=ee.alternate;if(Se===null){if(pe=ee.return,pe!==null){j=pe;continue}break}if(ee.child===Se.child){for(Se=ee.child;Se;){if(Se===j)return me(ee),c;if(Se===pe)return me(ee),P;Se=Se.sibling}throw Error(L(188))}if(j.return!==pe.return)j=ee,pe=Se;else{for(var ze=!1,Ge=ee.child;Ge;){if(Ge===j){ze=!0,j=ee,pe=Se;break}if(Ge===pe){ze=!0,pe=ee,j=Se;break}Ge=Ge.sibling}if(!ze){for(Ge=Se.child;Ge;){if(Ge===j){ze=!0,j=Se,pe=ee;break}if(Ge===pe){ze=!0,pe=Se,j=ee;break}Ge=Ge.sibling}if(!ze)throw Error(L(189))}}if(j.alternate!==pe)throw Error(L(190))}if(j.tag!==3)throw Error(L(188));return j.stateNode.current===j?c:P}function je(){return!0}function Tn(){return!1}function Mn(c,P,j,pe){this.dispatchConfig=c,this._targetInst=P,this.nativeEvent=j,c=this.constructor.Interface;for(var ee in c)c.hasOwnProperty(ee)&&((P=c[ee])?this[ee]=P(j):ee==="target"?this.target=pe:this[ee]=j[ee]);return this.isDefaultPrevented=(j.defaultPrevented!=null?j.defaultPrevented:j.returnValue===!1)?je:Tn,this.isPropagationStopped=Tn,this}e(Mn.prototype,{preventDefault:function(){this.defaultPrevented=!0;var c=this.nativeEvent;c&&(c.preventDefault?c.preventDefault():typeof c.returnValue!="unknown"&&(c.returnValue=!1),this.isDefaultPrevented=je)},stopPropagation:function(){var c=this.nativeEvent;c&&(c.stopPropagation?c.stopPropagation():typeof c.cancelBubble!="unknown"&&(c.cancelBubble=!0),this.isPropagationStopped=je)},persist:function(){this.isPersistent=je},isPersistent:Tn,destructor:function(){var c=this.constructor.Interface,P;for(P in c)this[P]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=Tn,this._dispatchInstances=this._dispatchListeners=null}}),Mn.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(c){return c.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null},Mn.extend=function(c){function P(){}function j(){return pe.apply(this,arguments)}var pe=this;P.prototype=pe.prototype;var ee=new P;return e(ee,j.prototype),j.prototype=ee,j.prototype.constructor=j,j.Interface=e({},pe.Interface,c),j.extend=pe.extend,Ye(j),j},Ye(Mn);function On(c,P,j,pe){if(this.eventPool.length){var ee=this.eventPool.pop();return this.call(ee,c,P,j,pe),ee}return new this(c,P,j,pe)}function fn(c){if(!(c instanceof this))throw Error(L(279));c.destructor(),10>this.eventPool.length&&this.eventPool.push(c)}function Ye(c){c.eventPool=[],c.getPooled=On,c.release=fn}var Ln=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined");function wn(c,P){var j={};return j[c.toLowerCase()]=P.toLowerCase(),j["Webkit"+c]="webkit"+P,j["Moz"+c]="moz"+P,j}var Rn={animationend:wn("Animation","AnimationEnd"),animationiteration:wn("Animation","AnimationIteration"),animationstart:wn("Animation","AnimationStart"),transitionend:wn("Transition","TransitionEnd")},we={},kn={};Ln&&(kn=document.createElement("div").style,"AnimationEvent"in window||(delete Rn.animationend.animation,delete Rn.animationiteration.animation,delete Rn.animationstart.animation),"TransitionEvent"in window||delete Rn.transitionend.transition);function $n(c){if(we[c])return we[c];if(!Rn[c])return c;var P=Rn[c],j;for(j in P)if(P.hasOwnProperty(j)&&j in kn)return we[c]=P[j];return c}var rt=$n("animationend"),T=$n("animationiteration"),I=$n("animationstart"),M=$n("transitionend"),f=null;function s(c){if(f===null)try{var P=("require"+Math.random()).slice(0,7);f=(X&&X[P])("timers").setImmediate}catch(j){f=function(pe){var ee=new MessageChannel;ee.port1.onmessage=pe,ee.port2.postMessage(void 0)}}return f(c)}var g=V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,O=g[11],F=g[12],l=V.unstable_batchedUpdates,i=tn.IsSomeRendererActing,b=typeof ce.unstable_flushAllWithoutAsserting=="function",N=ce.unstable_flushAllWithoutAsserting||function(){for(var c=!1;O();)c=!0;return c};function B(c){try{N(),s(function(){N()?B(c):c()})}catch(P){c(P)}}var S=0,u=!1,A=V.findDOMNode,d=V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,a=d[0],p=d[4],m=d[5],D=d[6],w=d[7],z=d[8],_=d[9],le=d[10];function ge(){}function pn(c,P){if(!c)return[];if(c=at(c),!c)return[];for(var j=c,pe=[];;){if(j.tag===5||j.tag===6||j.tag===1||j.tag===0){var ee=j.stateNode;P(ee)&&pe.push(ee)}if(j.child)j.child.return=j,j=j.child;else{if(j===c)return pe;for(;!j.sibling;){if(!j.return||j.return===c)return pe;j=j.return}j.sibling.return=j.return,j=j.sibling}}}function We(c,P){if(c&&!c._reactInternalFiber){var j=""+c;throw c=Array.isArray(c)?"an array":c&&c.nodeType===1&&c.tagName?"a DOM node":j==="[object Object]"?"object with keys {"+Object.keys(c).join(", ")+"}":j,Error(L(286,P,c))}}var Ne={renderIntoDocument:function(c){var P=document.createElement("div");return V.render(c,P)},isElement:function(c){return y.isValidElement(c)},isElementOfType:function(c,P){return y.isValidElement(c)&&c.type===P},isDOMComponent:function(c){return!(!c||c.nodeType!==1||!c.tagName)},isDOMComponentElement:function(c){return!!(c&&y.isValidElement(c)&&c.tagName)},isCompositeComponent:function(c){return Ne.isDOMComponent(c)?!1:c!=null&&typeof c.render=="function"&&typeof c.setState=="function"},isCompositeComponentWithType:function(c,P){return Ne.isCompositeComponent(c)?c._reactInternalFiber.type===P:!1},findAllInRenderedTree:function(c,P){return We(c,"findAllInRenderedTree"),c?pn(c._reactInternalFiber,P):[]},scryRenderedDOMComponentsWithClass:function(c,P){return We(c,"scryRenderedDOMComponentsWithClass"),Ne.findAllInRenderedTree(c,function(j){if(Ne.isDOMComponent(j)){var pe=j.className;typeof pe!="string"&&(pe=j.getAttribute("class")||"");var ee=pe.split(/\s+/);if(!Array.isArray(P)){if(P===void 0)throw Error(L(11));P=P.split(/\s+/)}return P.every(function(Se){return ee.indexOf(Se)!==-1})}return!1})},findRenderedDOMComponentWithClass:function(c,P){if(We(c,"findRenderedDOMComponentWithClass"),c=Ne.scryRenderedDOMComponentsWithClass(c,P),c.length!==1)throw Error("Did not find exactly one match (found: "+c.length+") for class:"+P);return c[0]},scryRenderedDOMComponentsWithTag:function(c,P){return We(c,"scryRenderedDOMComponentsWithTag"),Ne.findAllInRenderedTree(c,function(j){return Ne.isDOMComponent(j)&&j.tagName.toUpperCase()===P.toUpperCase()})},findRenderedDOMComponentWithTag:function(c,P){if(We(c,"findRenderedDOMComponentWithTag"),c=Ne.scryRenderedDOMComponentsWithTag(c,P),c.length!==1)throw Error("Did not find exactly one match (found: "+c.length+") for tag:"+P);return c[0]},scryRenderedComponentsWithType:function(c,P){return We(c,"scryRenderedComponentsWithType"),Ne.findAllInRenderedTree(c,function(j){return Ne.isCompositeComponentWithType(j,P)})},findRenderedComponentWithType:function(c,P){if(We(c,"findRenderedComponentWithType"),c=Ne.scryRenderedComponentsWithType(c,P),c.length!==1)throw Error("Did not find exactly one match (found: "+c.length+") for componentType:"+P);return c[0]},mockComponent:function(c,P){return P=P||c.mockTagName||"div",c.prototype.render.mockImplementation(function(){return y.createElement(P,null,this.props.children)}),this},nativeTouchData:function(c,P){return{touches:[{pageX:c,pageY:P}]}},Simulate:null,SimulateNative:{},act:function(c){function P(){S--,i.current=j,F.current=pe}u===!1&&(u=!0,console.error("act(...) is not supported in production builds of React, and might not behave as expected.")),S++;var j=i.current,pe=F.current;i.current=!0,F.current=!0;try{var ee=l(c)}catch(Se){throw P(),Se}if(ee!==null&&typeof ee=="object"&&typeof ee.then=="function")return{then:function(Se,ze){ee.then(function(){1<S||b===!0&&j===!0?(P(),Se()):B(function(Ge){P(),Ge?ze(Ge):Se()})},function(Ge){P(),ze(Ge)})}};try{S!==1||b!==!1&&j!==!1||N(),P()}catch(Se){throw P(),Se}return{then:function(Se){Se()}}}};function Fn(c){return function(P,j){if(y.isValidElement(P))throw Error(L(228));if(Ne.isCompositeComponent(P))throw Error(L(229));var pe=p[c],ee=new ge;ee.target=P,ee.type=c.toLowerCase();var Se=a(P),ze=new Mn(pe,Se,ee,P);ze.persist(),e(ze,j),pe.phasedRegistrationNames?m(ze):D(ze),V.unstable_batchedUpdates(function(){w(P),le(ze)}),z()}}Ne.Simulate={};for(var lt in p)Ne.Simulate[lt]=Fn(lt);function qn(c,P){return function(j,pe){var ee=new ge(c);e(ee,pe),Ne.isDOMComponent(j)?(j=A(j),ee.target=j,_(P,1,document,ee)):j.tagName&&(ee.target=j,_(P,1,document,ee))}}[["abort","abort"],[rt,"animationEnd"],[T,"animationIteration"],[I,"animationStart"],["blur","blur"],["canplaythrough","canPlayThrough"],["canplay","canPlay"],["cancel","cancel"],["change","change"],["click","click"],["close","close"],["compositionend","compositionEnd"],["compositionstart","compositionStart"],["compositionupdate","compositionUpdate"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["dragstart","dragStart"],["drag","drag"],["drop","drop"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],["ended","ended"],["error","error"],["focus","focus"],["input","input"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["loadstart","loadStart"],["loadstart","loadStart"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["mousedown","mouseDown"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["playing","playing"],["progress","progress"],["ratechange","rateChange"],["scroll","scroll"],["seeked","seeked"],["seeking","seeking"],["selectionchange","selectionChange"],["stalled","stalled"],["suspend","suspend"],["textInput","textInput"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchmove","touchMove"],["touchstart","touchStart"],[M,"transitionEnd"],["volumechange","volumeChange"],["waiting","waiting"],["wheel","wheel"]].forEach(function(c){var P=c[1];Ne.SimulateNative[P]=qn(P,c[0])}),X.exports=Ne.default||Ne}).call(this,n("hOG+")(Nn))},JjdP:function(Nn,gn,n){"use strict";n.r(gn);var X=n("9og8"),e=n("WmNS"),y=n.n(e),V=n("LtsZ"),ce=`import React, { useRef } from 'react';
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
};`,Be=`import React from 'react';
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

export default Demo;`,Tn=`{
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
}`,Mn=`import { Select } from 'antd';
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
}`,rt=gn.default={"guide-card":{component:Object(V.dynamic)({loader:function(){var T=Object(X.a)(y.a.mark(function M(){return y.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(20)]).then(n.bind(null,"oLxE"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},M)}));function I(){return T.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:ce}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"card-render":{version:"0.1.2"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"0.x"}},identifier:"guide-card"}},"chart-render-demo":{component:Object(V.dynamic)({loader:function(){var T=Object(X.a)(y.a.mark(function M(){var f,s,g,O,F,l,i;return y.a.wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return l=function(S,u){if(!u&&S&&S.__esModule)return S;if(S===null||typeof S!="object"&&typeof S!="function")return{default:S};var A=F(u);if(A&&A.has(S))return A.get(S);var d={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var p in S)if(p!=="default"&&Object.prototype.hasOwnProperty.call(S,p)){var m=a?Object.getOwnPropertyDescriptor(S,p):null;m&&(m.get||m.set)?Object.defineProperty(d,p,m):d[p]=S[p]}return d.default=S,A&&A.set(S,d),d},F=function(S){if(typeof WeakMap!="function")return null;var u=new WeakMap,A=new WeakMap;return(F=function(a){return a?A:u})(S)},f=n("K+nK"),N.t0=f,N.next=6,Promise.resolve().then(n.bind(null,"tJVT"));case 6:return N.t1=N.sent,s=(0,N.t0)(N.t1),N.t2=l,N.next=11,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 11:return N.t3=N.sent,g=(0,N.t2)(N.t3),N.next=15,Promise.all([n.e(0),n.e(2),n.e(6),n.e(7)]).then(n.bind(null,"36SN"));case 15:return O=N.sent,i=function(){var S=(0,g.useState)("Line"),u=(0,s.default)(S,2),A=u[0],d=u[1],a={Line:O.Line,Column:O.Column,PivotTable:O.PivotTable}[A];return g.default.createElement("div",null,g.default.createElement("div",{style:{marginBottom:10}},g.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return d("Line")}},"\u6298\u7EBF\u56FE"),g.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return d("Column")}},"\u67F1\u72B6\u56FE"),g.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return d("PivotTable")}},"\u4EA4\u53C9\u8868")),g.default.createElement(a,{meta:[{id:"date",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF",isDim:!1},{id:"uv",name:"\u8BBF\u5BA2\u6570",isDim:!1}],data:[{date:"20200101",pv:100,uv:50},{date:"20200102",pv:120,uv:60},{date:"20200103",pv:140,uv:70},{date:"20200104",pv:160,uv:80}]}))},N.abrupt("return",i);case 18:case"end":return N.stop()}},M)}));function I(){return T.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"chart-render-demo"}},"column-demo":{component:Object(V.dynamic)({loader:function(){var T=Object(X.a)(y.a.mark(function M(){var f,s,g,O;return y.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return f=n("K+nK"),l.t0=f,l.next=4,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,s=(0,l.t0)(l.t1),l.next=8,Promise.all([n.e(0),n.e(2),n.e(6),n.e(7)]).then(n.bind(null,"36SN"));case 8:return g=l.sent,O=function(){return s.default.createElement(g.Column,{meta:[{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{pv:50,uv:20}]})},l.abrupt("return",O);case 11:case"end":return l.stop()}},M)}));function I(){return T.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo"}},"column-demo-1":{component:Object(V.dynamic)({loader:function(){var T=Object(X.a)(y.a.mark(function M(){var f,s,g,O;return y.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return f=n("K+nK"),l.t0=f,l.next=4,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,s=(0,l.t0)(l.t1),l.next=8,Promise.all([n.e(0),n.e(2),n.e(6),n.e(7)]).then(n.bind(null,"36SN"));case 8:return g=l.sent,O=function(){return s.default.createElement(g.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},l.abrupt("return",O);case 11:case"end":return l.stop()}},M)}));function I(){return T.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-1"}},"column-demo-2":{component:Object(V.dynamic)({loader:function(){var T=Object(X.a)(y.a.mark(function M(){var f,s,g,O;return y.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return f=n("K+nK"),l.t0=f,l.next=4,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,s=(0,l.t0)(l.t1),l.next=8,Promise.all([n.e(0),n.e(2),n.e(6),n.e(7)]).then(n.bind(null,"36SN"));case 8:return g=l.sent,O=function(){return s.default.createElement(g.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},l.abrupt("return",O);case 11:case"end":return l.stop()}},M)}));function I(){return T.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-2"}},"column-demo-3":{component:Object(V.dynamic)({loader:function(){var T=Object(X.a)(y.a.mark(function M(){var f,s,g,O;return y.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return f=n("K+nK"),l.t0=f,l.next=4,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,s=(0,l.t0)(l.t1),l.next=8,Promise.all([n.e(0),n.e(2),n.e(6),n.e(7)]).then(n.bind(null,"36SN"));case 8:return g=l.sent,O=function(){return s.default.createElement(g.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},l.abrupt("return",O);case 11:case"end":return l.stop()}},M)}));function I(){return T.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-3"}},"column-demo-4":{component:Object(V.dynamic)({loader:function(){var T=Object(X.a)(y.a.mark(function M(){var f,s,g,O;return y.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return f=n("K+nK"),l.t0=f,l.next=4,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,s=(0,l.t0)(l.t1),l.next=8,Promise.all([n.e(0),n.e(2),n.e(6),n.e(7)]).then(n.bind(null,"36SN"));case 8:return g=l.sent,O=function(){return s.default.createElement(g.Column,{inverted:!0,label:{position:"middle",layout:[{type:"interval-adjust-position"},{type:"interval-hide-overlap"},{type:"adjust-color"}]},meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},l.abrupt("return",O);case 11:case"end":return l.stop()}},M)}));function I(){return T.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-4"}},"line-demo":{component:Object(V.dynamic)({loader:function(){var T=Object(X.a)(y.a.mark(function M(){var f,s,g,O;return y.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return f=n("K+nK"),l.t0=f,l.next=4,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,s=(0,l.t0)(l.t1),l.next=8,Promise.all([n.e(0),n.e(2),n.e(6),n.e(7)]).then(n.bind(null,"36SN"));case 8:return g=l.sent,O=function(){return s.default.createElement(g.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},l.abrupt("return",O);case 11:case"end":return l.stop()}},M)}));function I(){return T.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo"}},"line-demo-1":{component:Object(V.dynamic)({loader:function(){var T=Object(X.a)(y.a.mark(function M(){var f,s,g,O;return y.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return f=n("K+nK"),l.t0=f,l.next=4,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,s=(0,l.t0)(l.t1),l.next=8,Promise.all([n.e(0),n.e(2),n.e(6),n.e(7)]).then(n.bind(null,"36SN"));case 8:return g=l.sent,O=function(){return s.default.createElement(g.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},l.abrupt("return",O);case 11:case"end":return l.stop()}},M)}));function I(){return T.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-1"}},"line-demo-2":{component:Object(V.dynamic)({loader:function(){var T=Object(X.a)(y.a.mark(function M(){var f,s,g,O;return y.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return f=n("K+nK"),l.t0=f,l.next=4,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,s=(0,l.t0)(l.t1),l.next=8,Promise.all([n.e(0),n.e(2),n.e(6),n.e(7)]).then(n.bind(null,"36SN"));case 8:return g=l.sent,O=function(){return s.default.createElement(g.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"},{id:"pv",name:"\u8BBF\u95EE\u91CF"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20,pv:120},{ds:"2020-12-31",page:"\u9996\u9875",uv:120,pv:1120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21,pv:121},{ds:"2021-01-01",page:"\u9996\u9875",uv:121,pv:1121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15,pv:115},{ds:"2021-01-02",page:"\u9996\u9875",uv:115,pv:1115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40,pv:140},{ds:"2021-01-03",page:"\u9996\u9875",uv:140,pv:1140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31,pv:131},{ds:"2021-01-04",page:"\u9996\u9875",uv:131,pv:1131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32,pv:132},{ds:"2021-01-05",page:"\u9996\u9875",uv:132,pv:1132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30,pv:130},{ds:"2021-01-06",page:"\u9996\u9875",uv:130,pv:1130}]})},l.abrupt("return",O);case 11:case"end":return l.stop()}},M)}));function I(){return T.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-2"}},"line-demo-3":{component:Object(V.dynamic)({loader:function(){var T=Object(X.a)(y.a.mark(function M(){var f,s,g,O;return y.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return f=n("K+nK"),l.t0=f,l.next=4,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,s=(0,l.t0)(l.t1),l.next=8,Promise.all([n.e(0),n.e(2),n.e(6),n.e(7)]).then(n.bind(null,"36SN"));case 8:return g=l.sent,O=function(){return s.default.createElement(g.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},l.abrupt("return",O);case 11:case"end":return l.stop()}},M)}));function I(){return T.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-3"}},"line-demo-4":{component:Object(V.dynamic)({loader:function(){var T=Object(X.a)(y.a.mark(function M(){var f,s,g,O;return y.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return f=n("K+nK"),l.t0=f,l.next=4,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,s=(0,l.t0)(l.t1),l.next=8,Promise.all([n.e(0),n.e(2),n.e(6),n.e(7)]).then(n.bind(null,"36SN"));case 8:return g=l.sent,O=function(){return s.default.createElement(g.Line,{withArea:!0,isStack:!0,isPercent:!0,meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},l.abrupt("return",O);case 11:case"end":return l.stop()}},M)}));function I(){return T.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-4"}},"pivot-table-demo":{component:Object(V.dynamic)({loader:function(){var T=Object(X.a)(y.a.mark(function M(){var f,s,g,O;return y.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return f=n("K+nK"),l.t0=f,l.next=4,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,s=(0,l.t0)(l.t1),l.next=8,Promise.all([n.e(0),n.e(2),n.e(6),n.e(7)]).then(n.bind(null,"36SN"));case 8:return g=l.sent,O=function(){return s.default.createElement(g.PivotTable,{style:{maxHeight:400,overflow:"auto"},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},l.abrupt("return",O);case 11:case"end":return l.stop()}},M)}));function I(){return T.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo"}},"pivot-table-demo-1":{component:Object(V.dynamic)({loader:function(){var T=Object(X.a)(y.a.mark(function M(){var f,s,g,O;return y.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return f=n("K+nK"),l.t0=f,l.next=4,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,s=(0,l.t0)(l.t1),l.next=8,Promise.all([n.e(0),n.e(2),n.e(6),n.e(7)]).then(n.bind(null,"36SN"));case 8:return g=l.sent,O=function(){return s.default.createElement(g.PivotTable,{style:{maxHeight:400,overflow:"auto"},cellRender:function(N,B,S){return s.default.createElement("div",null,s.default.createElement("p",null,"\u53C2\u6570\u8868\uFF1A"),s.default.createElement("p",{style:{color:["red","orange","yellow","green","blue"][Object.keys(B).length]}},N),s.default.createElement("p",null,JSON.stringify(B)),s.default.createElement("p",null,JSON.stringify(S)))},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},l.abrupt("return",O);case 11:case"end":return l.stop()}},M)}));function I(){return T.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-1"}},"pivot-table-demo-2":{component:Object(V.dynamic)({loader:function(){var T=Object(X.a)(y.a.mark(function M(){var f,s,g,O,F,l,i;return y.a.wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return l=function(S,u){if(!u&&S&&S.__esModule)return S;if(S===null||typeof S!="object"&&typeof S!="function")return{default:S};var A=F(u);if(A&&A.has(S))return A.get(S);var d={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var p in S)if(p!=="default"&&Object.prototype.hasOwnProperty.call(S,p)){var m=a?Object.getOwnPropertyDescriptor(S,p):null;m&&(m.get||m.set)?Object.defineProperty(d,p,m):d[p]=S[p]}return d.default=S,A&&A.set(S,d),d},F=function(S){if(typeof WeakMap!="function")return null;var u=new WeakMap,A=new WeakMap;return(F=function(a){return a?A:u})(S)},f=n("K+nK"),N.t0=f,N.next=6,Promise.resolve().then(n.bind(null,"tJVT"));case 6:return N.t1=N.sent,s=(0,N.t0)(N.t1),N.t2=l,N.next=11,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 11:return N.t3=N.sent,g=(0,N.t2)(N.t3),N.next=15,Promise.all([n.e(0),n.e(2),n.e(6),n.e(7)]).then(n.bind(null,"36SN"));case 15:return O=N.sent,i=function(){var S=(0,g.useState)(!1),u=(0,s.default)(S,2),A=u[0],d=u[1];return g.default.createElement(g.default.Fragment,null,g.default.createElement("label",null,"\u53EF\u5C55\u5F00/\u6536\u7F29\uFF1A",g.default.createElement("input",{type:"checkbox",value:A,onChange:function(){return d(!A)}})),g.default.createElement(O.PivotTable,{leftExpandable:A,showSubtotal:!1,meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]}))},N.abrupt("return",i);case 18:case"end":return N.stop()}},M)}));function I(){return T.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-2"}},"form-render-demo":{component:Object(V.dynamic)({loader:function(){var T=Object(X.a)(y.a.mark(function M(){var f,s,g,O,F,l,i,b,N,B,S,u,A,d;return y.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return S=function(D,w){if(!w&&D&&D.__esModule)return D;if(D===null||typeof D!="object"&&typeof D!="function")return{default:D};var z=B(w);if(z&&z.has(D))return z.get(D);var _={},le=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ge in D)if(ge!=="default"&&Object.prototype.hasOwnProperty.call(D,ge)){var pn=le?Object.getOwnPropertyDescriptor(D,ge):null;pn&&(pn.get||pn.set)?Object.defineProperty(_,ge,pn):_[ge]=D[ge]}return _.default=D,z&&z.set(D,_),_},B=function(D){if(typeof WeakMap!="function")return null;var w=new WeakMap,z=new WeakMap;return(B=function(le){return le?z:w})(D)},f=n("K+nK"),p.next=5,n.e(3).then(n.t.bind(null,"MaXC",7));case 5:return p.t0=f,p.next=8,n.e(12).then(n.t.bind(null,"4IMT",7));case 8:return p.t1=p.sent,s=(0,p.t0)(p.t1),p.t2=f,p.next=13,n.e(62).then(n.bind(null,"fWQN"));case 13:return p.t3=p.sent,g=(0,p.t2)(p.t3),p.t4=f,p.next=18,n.e(63).then(n.bind(null,"mtLc"));case 18:return p.t5=p.sent,O=(0,p.t4)(p.t5),p.t6=f,p.next=23,n.e(65).then(n.bind(null,"yKVA"));case 23:return p.t7=p.sent,F=(0,p.t6)(p.t7),p.t8=f,p.next=28,n.e(59).then(n.bind(null,"879j"));case 28:return p.t9=p.sent,l=(0,p.t8)(p.t9),p.t10=f,p.next=33,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 33:return p.t11=p.sent,i=(0,p.t10)(p.t11),p.next=37,Promise.all([n.e(0),n.e(1),n.e(2),n.e(10),n.e(11)]).then(n.bind(null,"gdfu"));case 37:return b=p.sent,p.t12=S,p.next=41,Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(8)]).then(n.bind(null,"refC"));case 41:return p.t13=p.sent,N=(0,p.t12)(p.t13),u={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},A=function(m){(0,F.default)(w,m);var D=(0,l.default)(w);function w(){return(0,g.default)(this,w),D.apply(this,arguments)}return(0,O.default)(w,[{key:"render",value:function(){var _=this.props.form;return i.default.createElement("div",null,i.default.createElement(N.default,{form:_,schema:u}),i.default.createElement(s.default,{type:"primary",onClick:_.submit},"\u63D0\u4EA4"))}}]),w}(i.default.Component),d=(0,N.connectForm)(A),p.abrupt("return",d);case 47:case"end":return p.stop()}},M)}));function I(){return T.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default connectForm(Demo);`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo"}},"form-render-demo-1":{component:Object(V.dynamic)({loader:function(){var T=Object(X.a)(y.a.mark(function M(){var f,s,g,O,F,l,i,b,N,B;return y.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return i=function(d,a){if(!a&&d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var p=l(a);if(p&&p.has(d))return p.get(d);var m={},D=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var w in d)if(w!=="default"&&Object.prototype.hasOwnProperty.call(d,w)){var z=D?Object.getOwnPropertyDescriptor(d,w):null;z&&(z.get||z.set)?Object.defineProperty(m,w,z):m[w]=d[w]}return m.default=d,p&&p.set(d,m),m},l=function(d){if(typeof WeakMap!="function")return null;var a=new WeakMap,p=new WeakMap;return(l=function(D){return D?p:a})(d)},f=n("K+nK"),u.next=5,n.e(3).then(n.t.bind(null,"MaXC",7));case 5:return u.t0=f,u.next=8,n.e(12).then(n.t.bind(null,"4IMT",7));case 8:return u.t1=u.sent,s=(0,u.t0)(u.t1),u.t2=f,u.next=13,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 13:return u.t3=u.sent,g=(0,u.t2)(u.t3),u.next=17,Promise.all([n.e(0),n.e(1),n.e(2),n.e(10),n.e(11)]).then(n.bind(null,"gdfu"));case 17:return O=u.sent,u.t4=i,u.next=21,Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(8)]).then(n.bind(null,"refC"));case 21:return u.t5=u.sent,F=(0,u.t4)(u.t5),b={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},N=function(){var d=(0,F.useForm)();return g.default.createElement("div",null,g.default.createElement(F.default,{form:d,schema:b}),g.default.createElement(s.default,{type:"primary",onClick:d.submit},"\u63D0\u4EA4"))},B=N,u.abrupt("return",B);case 27:case"end":return u.stop()}},M)}));function I(){return T.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo-1"}},"form-render-demo-2":{component:Object(V.dynamic)({loader:function(){var T=Object(X.a)(y.a.mark(function M(){var f,s,g,O,F,l,i,b,N,B;return y.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return i=function(d,a){if(!a&&d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var p=l(a);if(p&&p.has(d))return p.get(d);var m={},D=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var w in d)if(w!=="default"&&Object.prototype.hasOwnProperty.call(d,w)){var z=D?Object.getOwnPropertyDescriptor(d,w):null;z&&(z.get||z.set)?Object.defineProperty(m,w,z):m[w]=d[w]}return m.default=d,p&&p.set(d,m),m},l=function(d){if(typeof WeakMap!="function")return null;var a=new WeakMap,p=new WeakMap;return(l=function(D){return D?p:a})(d)},f=n("K+nK"),u.next=5,n.e(3).then(n.t.bind(null,"MaXC",7));case 5:return u.t0=f,u.next=8,n.e(12).then(n.t.bind(null,"4IMT",7));case 8:return u.t1=u.sent,s=(0,u.t0)(u.t1),u.t2=f,u.next=13,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 13:return u.t3=u.sent,g=(0,u.t2)(u.t3),u.next=17,Promise.all([n.e(0),n.e(1),n.e(2),n.e(10),n.e(11)]).then(n.bind(null,"gdfu"));case 17:return O=u.sent,u.t4=i,u.next=21,Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(8)]).then(n.bind(null,"refC"));case 21:return u.t5=u.sent,F=(0,u.t4)(u.t5),b={displayType:"row",labelWidth:60,type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F",type:"range",format:"date"},siteUrl:{title:"\u7F51\u5740",type:"string",placeholder:"\u6B64\u5904\u5FC5\u586B",required:!0,props:{addonBefore:"https://",addonAfter:".com"}}}},N=function(){var d=(0,F.useForm)(),a=function(m,D){D.length>0?alert("errors:"+JSON.stringify(D)):alert("formData:"+JSON.stringify(m,null,2))};return g.default.createElement("div",null,g.default.createElement(F.default,{form:d,schema:b,onFinish:a}),g.default.createElement(s.default,{type:"primary",onClick:d.submit},"\u63D0\u4EA4"))},B=N,u.abrupt("return",B);case 27:case"end":return u.stop()}},M)}));function I(){return T.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-demo-2"}},"migrate-demo":{component:Object(V.dynamic)({loader:function(){var T=Object(X.a)(y.a.mark(function M(){var f,s,g,O,F,l,i,b;return y.a.wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return i=function(){var u=(0,g.useForm)(),A=function(a,p){p.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(p))):alert(JSON.stringify(a))};return s.default.createElement("div",null,s.default.createElement(g.default,{form:u,schema:l,onFinish:A}),s.default.createElement("button",{onClick:u.submit},"\u63D0\u4EA4"))},F=function(u,A){if(!A&&u&&u.__esModule)return u;if(u===null||typeof u!="object"&&typeof u!="function")return{default:u};var d=O(A);if(d&&d.has(u))return d.get(u);var a={},p=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var m in u)if(m!=="default"&&Object.prototype.hasOwnProperty.call(u,m)){var D=p?Object.getOwnPropertyDescriptor(u,m):null;D&&(D.get||D.set)?Object.defineProperty(a,m,D):a[m]=u[m]}return a.default=u,d&&d.set(u,a),a},O=function(u){if(typeof WeakMap!="function")return null;var A=new WeakMap,d=new WeakMap;return(O=function(p){return p?d:A})(u)},f=n("K+nK"),B.t0=f,B.next=7,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 7:return B.t1=B.sent,s=(0,B.t0)(B.t1),B.t2=F,B.next=12,Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(8)]).then(n.bind(null,"refC"));case 12:return B.t3=B.sent,g=(0,B.t2)(B.t3),l={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}},b=i,B.abrupt("return",b);case 17:case"end":return B.stop()}},M)}));function I(){return T.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate-demo"}},"display-demo":{component:Object(V.dynamic)({loader:function(){var T=Object(X.a)(y.a.mark(function M(){var f,s,g,O,F;return y.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=n("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,s=(0,i.t0)(i.t1),i.t2=f,i.next=9,Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(13)]).then(n.bind(null,"bQjt"));case 9:return i.t3=i.sent,g=(0,i.t2)(i.t3),O=function(N){return{type:"object",displayType:N,properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},objectName:{title:"\u5BF9\u8C61",bind:"obj",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},F=function(){return s.default.createElement("div",null,s.default.createElement("h2",null,"display: row"),s.default.createElement(g.default,{schema:O("row")}),s.default.createElement("h2",null,"display: column"),s.default.createElement(g.default,{schema:O("column")}))},i.abrupt("return",F);case 14:case"end":return i.stop()}},M)}));function I(){return T.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo"}},"display-demo-1":{component:Object(V.dynamic)({loader:function(){var T=Object(X.a)(y.a.mark(function M(){var f,s,g,O,F;return y.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=n("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,s=(0,i.t0)(i.t1),i.t2=f,i.next=9,Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(13)]).then(n.bind(null,"bQjt"));case 9:return i.t3=i.sent,g=(0,i.t2)(i.t3),O={type:"object",displayType:"inline",properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},F=function(){return s.default.createElement(g.default,{schema:O})},i.abrupt("return",F);case 14:case"end":return i.stop()}},M)}));function I(){return T.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-1"}},"display-demo-2":{component:Object(V.dynamic)({loader:function(){var T=Object(X.a)(y.a.mark(function M(){var f,s,g,O,F;return y.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=n("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,s=(0,i.t0)(i.t1),i.t2=f,i.next=9,Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(13)]).then(n.bind(null,"bQjt"));case 9:return i.t3=i.sent,g=(0,i.t2)(i.t3),O={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0},check:{title:"box",type:"boolean",default:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},F=function(){return s.default.createElement(g.default,{readOnly:!0,schema:O})},i.abrupt("return",F);case 14:case"end":return i.stop()}},M)}));function I(){return T.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form readOnly schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-2"}},"display-demo-3":{component:Object(V.dynamic)({loader:function(){var T=Object(X.a)(y.a.mark(function M(){var f,s,g,O,F;return y.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=n("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,s=(0,i.t0)(i.t1),i.t2=f,i.next=9,Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(13)]).then(n.bind(null,"bQjt"));case 9:return i.t3=i.sent,g=(0,i.t2)(i.t3),O={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0,width:"50%"},check:{title:"box",type:"boolean",default:!0,width:"50%",labelWidth:6},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},F=function(){return s.default.createElement(g.default,{labelWidth:"200",schema:O})},i.abrupt("return",F);case 14:case"end":return i.stop()}},M)}));function I(){return T.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form labelWidth="200" schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-3"}},"display-demo-4":{component:Object(V.dynamic)({loader:function(){var T=Object(X.a)(y.a.mark(function M(){var f,s,g,O,F,l;return y.a.wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return f=n("K+nK"),b.t0=f,b.next=4,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 4:return b.t1=b.sent,s=(0,b.t0)(b.t1),b.t2=f,b.next=9,Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(13)]).then(n.bind(null,"bQjt"));case 9:return b.t3=b.sent,g=(0,b.t2)(b.t3),O={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},F=function(){return s.default.createElement(g.default,{schema:O})},l=F,b.abrupt("return",l);case 15:case"end":return b.stop()}},M)}));function I(){return T.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-4"}},"display-demo-5":{component:Object(V.dynamic)({loader:function(){var T=Object(X.a)(y.a.mark(function M(){var f,s,g,O,F,l;return y.a.wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return f=n("K+nK"),b.t0=f,b.next=4,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 4:return b.t1=b.sent,s=(0,b.t0)(b.t1),b.t2=f,b.next=9,Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(13)]).then(n.bind(null,"bQjt"));case 9:return b.t3=b.sent,g=(0,b.t2)(b.t3),O={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},F=function(){return s.default.createElement(g.default,{schema:O})},l=F,b.abrupt("return",l);case 15:case"end":return b.stop()}},M)}));function I(){return T.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-5"}},"display-demo-6":{component:Object(V.dynamic)({loader:function(){var T=Object(X.a)(y.a.mark(function M(){var f,s,g,O,F,l;return y.a.wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return f=n("K+nK"),b.t0=f,b.next=4,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 4:return b.t1=b.sent,s=(0,b.t0)(b.t1),b.t2=f,b.next=9,Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(13)]).then(n.bind(null,"bQjt"));case 9:return b.t3=b.sent,g=(0,b.t2)(b.t3),O={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},F=function(){return s.default.createElement(g.default,{schema:O})},l=F,b.abrupt("return",l);case 15:case"end":return b.stop()}},M)}));function I(){return T.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-6"}},"display-demo-7":{component:Object(V.dynamic)({loader:function(){var T=Object(X.a)(y.a.mark(function M(){var f,s,g,O,F,l;return y.a.wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return f=n("K+nK"),b.t0=f,b.next=4,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 4:return b.t1=b.sent,s=(0,b.t0)(b.t1),b.t2=f,b.next=9,Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(13)]).then(n.bind(null,"bQjt"));case 9:return b.t3=b.sent,g=(0,b.t2)(b.t3),O={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},F=function(){return s.default.createElement(g.default,{schema:O})},l=F,b.abrupt("return",l);case 15:case"end":return b.stop()}},M)}));function I(){return T.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-7"}},"form-methods-demo":{component:Object(V.dynamic)({loader:function(){var T=Object(X.a)(y.a.mark(function M(){var f,s,g,O,F,l,i,b,N,B,S,u,A;return y.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return S=function(m,D){if(!D&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var w=B(D);if(w&&w.has(m))return w.get(m);var z={},_=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var le in m)if(le!=="default"&&Object.prototype.hasOwnProperty.call(m,le)){var ge=_?Object.getOwnPropertyDescriptor(m,le):null;ge&&(ge.get||ge.set)?Object.defineProperty(z,le,ge):z[le]=m[le]}return z.default=m,w&&w.set(m,z),z},B=function(m){if(typeof WeakMap!="function")return null;var D=new WeakMap,w=new WeakMap;return(B=function(_){return _?w:D})(m)},f=n("K+nK"),a.next=5,n.e(17).then(n.t.bind(null,"lfLe",7));case 5:return a.t0=f,a.next=8,n.e(18).then(n.t.bind(null,"Cp9S",7));case 8:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=12,n.e(3).then(n.t.bind(null,"MaXC",7));case 12:return a.t2=f,a.next=15,n.e(12).then(n.t.bind(null,"4IMT",7));case 15:return a.t3=a.sent,g=(0,a.t2)(a.t3),a.next=19,n.e(14).then(n.t.bind(null,"tL+A",7));case 19:return a.t4=f,a.next=22,Promise.resolve().then(n.t.bind(null,"QpBz",7));case 22:return a.t5=a.sent,O=(0,a.t4)(a.t5),a.t6=f,a.next=27,Promise.resolve().then(n.bind(null,"tJVT"));case 27:return a.t7=a.sent,F=(0,a.t6)(a.t7),a.t8=S,a.next=32,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 32:return a.t9=a.sent,l=(0,a.t8)(a.t9),a.next=36,Promise.all([n.e(0),n.e(1),n.e(2),n.e(10),n.e(11)]).then(n.bind(null,"gdfu"));case 36:return i=a.sent,a.t10=S,a.next=40,Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(8)]).then(n.bind(null,"refC"));case 40:return a.t11=a.sent,b=(0,a.t10)(a.t11),a.next=44,n.e(15).then(n.bind(null,"OH0R"));case 44:return N=a.sent,u=function(){var m=(0,b.useForm)(),D=(0,l.useState)({}),w=(0,F.default)(D,2),z=w[0],_=w[1],le=function(){(0,N.fakeApi)("xxx/getForm").then(function(We){m.setValues({input1:"hello world",select1:"c"})})};(0,l.useEffect)(function(){(0,N.delay)(1e3).then(function(pn){_({type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}})})},[]);var ge=function(We,Ne){Ne.length>0?O.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(Ne.map(function(Fn){return Fn.name}))):(0,N.fakeApi)("xxx/submit",We).then(function(Fn){return O.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})};return l.default.createElement("div",{style:{width:"400px"}},l.default.createElement(b.default,{form:m,schema:z,onFinish:ge}),l.default.createElement(s.default,null,l.default.createElement(g.default,{onClick:le},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),l.default.createElement(g.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},A=u,a.abrupt("return",A);case 48:case"end":return a.stop()}},M)}));function I(){return T.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:tn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo"}},"form-methods-demo-1":{component:Object(V.dynamic)({loader:function(){var T=Object(X.a)(y.a.mark(function M(){var f,s,g,O,F,l,i,b,N,B,S,u,A;return y.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return B=function(m,D){if(!D&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var w=N(D);if(w&&w.has(m))return w.get(m);var z={},_=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var le in m)if(le!=="default"&&Object.prototype.hasOwnProperty.call(m,le)){var ge=_?Object.getOwnPropertyDescriptor(m,le):null;ge&&(ge.get||ge.set)?Object.defineProperty(z,le,ge):z[le]=m[le]}return z.default=m,w&&w.set(m,z),z},N=function(m){if(typeof WeakMap!="function")return null;var D=new WeakMap,w=new WeakMap;return(N=function(_){return _?w:D})(m)},f=n("K+nK"),a.next=5,n.e(3).then(n.t.bind(null,"MaXC",7));case 5:return a.t0=f,a.next=8,n.e(12).then(n.t.bind(null,"4IMT",7));case 8:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.t2=f,a.next=13,Promise.resolve().then(n.bind(null,"PpiC"));case 13:return a.t3=a.sent,g=(0,a.t2)(a.t3),a.next=17,n.e(14).then(n.t.bind(null,"tL+A",7));case 17:return a.t4=f,a.next=20,Promise.resolve().then(n.t.bind(null,"QpBz",7));case 20:return a.t5=a.sent,O=(0,a.t4)(a.t5),a.t6=f,a.next=25,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 25:return a.t7=a.sent,F=(0,a.t6)(a.t7),a.next=29,Promise.all([n.e(0),n.e(1),n.e(2),n.e(10),n.e(11)]).then(n.bind(null,"gdfu"));case 29:return l=a.sent,a.t8=B,a.next=33,Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(8)]).then(n.bind(null,"refC"));case 33:return a.t9=a.sent,i=(0,a.t8)(a.t9),a.next=37,n.e(15).then(n.bind(null,"OH0R"));case 37:return b=a.sent,S={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},u=function(){var m=(0,i.useForm)(),D=function(_,le){le.length>0?O.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(le.map(function(ge){return ge.name}))):(0,b.fakeApi)("xxx/submit",_).then(function(ge){return O.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},w=function(_){var le=_.data,ge=_.errors,pn=_.schema,We=(0,g.default)(_,["data","errors","schema"]);return(0,b.fakeApi)("xxx/validation").then(function(Ne){return{name:"select1",error:["\u5916\u90E8\u6821\u9A8C\u9519\u8BEF"]}})};return F.default.createElement("div",{style:{width:"400px"}},F.default.createElement(i.default,{form:m,schema:S,beforeFinish:w,onFinish:D}),F.default.createElement(s.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},A=u,a.abrupt("return",A);case 42:case"end":return a.stop()}},M)}));function I(){return T.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:tn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-1"}},"form-methods-demo-2":{component:Object(V.dynamic)({loader:function(){var T=Object(X.a)(y.a.mark(function M(){var f,s,g,O,F,l,i,b,N,B,S,u,A;return y.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return B=function(m,D){if(!D&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var w=N(D);if(w&&w.has(m))return w.get(m);var z={},_=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var le in m)if(le!=="default"&&Object.prototype.hasOwnProperty.call(m,le)){var ge=_?Object.getOwnPropertyDescriptor(m,le):null;ge&&(ge.get||ge.set)?Object.defineProperty(z,le,ge):z[le]=m[le]}return z.default=m,w&&w.set(m,z),z},N=function(m){if(typeof WeakMap!="function")return null;var D=new WeakMap,w=new WeakMap;return(N=function(_){return _?w:D})(m)},f=n("K+nK"),a.next=5,n.e(17).then(n.t.bind(null,"lfLe",7));case 5:return a.t0=f,a.next=8,n.e(18).then(n.t.bind(null,"Cp9S",7));case 8:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=12,n.e(3).then(n.t.bind(null,"MaXC",7));case 12:return a.t2=f,a.next=15,n.e(12).then(n.t.bind(null,"4IMT",7));case 15:return a.t3=a.sent,g=(0,a.t2)(a.t3),a.next=19,n.e(14).then(n.t.bind(null,"tL+A",7));case 19:return a.t4=f,a.next=22,Promise.resolve().then(n.t.bind(null,"QpBz",7));case 22:return a.t5=a.sent,O=(0,a.t4)(a.t5),a.t6=f,a.next=27,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 27:return a.t7=a.sent,F=(0,a.t6)(a.t7),a.next=31,Promise.all([n.e(0),n.e(1),n.e(2),n.e(10),n.e(11)]).then(n.bind(null,"gdfu"));case 31:return l=a.sent,a.t8=B,a.next=35,Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(8)]).then(n.bind(null,"refC"));case 35:return a.t9=a.sent,i=(0,a.t8)(a.t9),a.next=39,n.e(15).then(n.bind(null,"OH0R"));case 39:return b=a.sent,S={type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F\u8303\u56F4",type:"range",format:"date"}}},u=function(){var m=(0,i.useForm)(),D=function(_,le){le.length>0?O.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(le.map(function(ge){return ge.name}))):(0,b.fakeApi)("xxx/submit",_).then(function(ge){return O.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},w=function(){(0,b.fakeApi)("xxx/getForm").then(function(_){m.setValues({startDate:"2020-04-04",endDate:"2020-04-24"})})};return F.default.createElement("div",{style:{width:"400px"}},F.default.createElement(i.default,{form:m,schema:S,onFinish:D}),F.default.createElement(s.default,null,F.default.createElement(g.default,{onClick:w},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),F.default.createElement(g.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},A=u,a.abrupt("return",A);case 44:case"end":return a.stop()}},M)}));function I(){return T.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:tn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-2"}},"form-methods-demo-3":{component:Object(V.dynamic)({loader:function(){var T=Object(X.a)(y.a.mark(function M(){var f,s,g,O,F,l,i,b,N,B,S,u;return y.a.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return N=function(p,m){if(!m&&p&&p.__esModule)return p;if(p===null||typeof p!="object"&&typeof p!="function")return{default:p};var D=b(m);if(D&&D.has(p))return D.get(p);var w={},z=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var _ in p)if(_!=="default"&&Object.prototype.hasOwnProperty.call(p,_)){var le=z?Object.getOwnPropertyDescriptor(p,_):null;le&&(le.get||le.set)?Object.defineProperty(w,_,le):w[_]=p[_]}return w.default=p,D&&D.set(p,w),w},b=function(p){if(typeof WeakMap!="function")return null;var m=new WeakMap,D=new WeakMap;return(b=function(z){return z?D:m})(p)},f=n("K+nK"),d.next=5,n.e(3).then(n.t.bind(null,"MaXC",7));case 5:return d.t0=f,d.next=8,n.e(12).then(n.t.bind(null,"4IMT",7));case 8:return d.t1=d.sent,s=(0,d.t0)(d.t1),d.next=12,n.e(14).then(n.t.bind(null,"tL+A",7));case 12:return d.t2=f,d.next=15,Promise.resolve().then(n.t.bind(null,"QpBz",7));case 15:return d.t3=d.sent,g=(0,d.t2)(d.t3),d.t4=N,d.next=20,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 20:return d.t5=d.sent,O=(0,d.t4)(d.t5),d.next=24,Promise.all([n.e(0),n.e(1),n.e(2),n.e(10),n.e(11)]).then(n.bind(null,"gdfu"));case 24:return F=d.sent,d.t6=N,d.next=28,Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(8)]).then(n.bind(null,"refC"));case 28:return d.t7=d.sent,l=(0,d.t6)(d.t7),d.next=32,n.e(15).then(n.bind(null,"OH0R"));case 32:return i=d.sent,B={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select1:{title:"\u5355\u9009",type:"string",widget:"select"}}}}},S=function(){var p=(0,l.useForm)(),m=function(){p.setSchemaByPath("obj1.select1",{enum:["nouth","south","east","west"],enumNames:["\u4E1C","\u5357","\u897F","\u5317"]})},D=function(z,_){_.length>0?g.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(_.map(function(le){return le.name}))):g.default.info(JSON.stringify(z))};return O.default.createElement("div",{style:{width:"400px"}},O.default.createElement(l.default,{form:p,schema:B,onMount:m,onFinish:D}),O.default.createElement(s.default,{type:"primary",onClick:p.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},u=S,d.abrupt("return",u);case 37:case"end":return d.stop()}},M)}));function I(){return T.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:tn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-3"}},"function-demo":{component:Object(V.dynamic)({loader:function(){var T=Object(X.a)(y.a.mark(function M(){var f,s,g,O,F,l,i,b;return y.a.wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return F=function(u,A){if(!A&&u&&u.__esModule)return u;if(u===null||typeof u!="object"&&typeof u!="function")return{default:u};var d=O(A);if(d&&d.has(u))return d.get(u);var a={},p=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var m in u)if(m!=="default"&&Object.prototype.hasOwnProperty.call(u,m)){var D=p?Object.getOwnPropertyDescriptor(u,m):null;D&&(D.get||D.set)?Object.defineProperty(a,m,D):a[m]=u[m]}return a.default=u,d&&d.set(u,a),a},O=function(u){if(typeof WeakMap!="function")return null;var A=new WeakMap,d=new WeakMap;return(O=function(p){return p?d:A})(u)},f=n("K+nK"),B.t0=f,B.next=6,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 6:return B.t1=B.sent,s=(0,B.t0)(B.t1),B.t2=F,B.next=11,Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(8)]).then(n.bind(null,"refC"));case 11:return B.t3=B.sent,g=(0,B.t2)(B.t3),l={type:"object",properties:{select1:{title:"\u5355\u9009",description:"\u5C1D\u8BD5\u9009\u62E9\u201C\u663E\u793A\u8F93\u5165\u6846\u201D",type:"string",enum:["a","b"],enumNames:["\u9690\u85CF\u8F93\u5165\u6846","\u663E\u793A\u8F93\u5165\u6846"],disabled:"{{rootValue.input1.length > 5}}",default:"a"},input1:{title:"\u8F93\u5165\u6846",description:"\u5C1D\u8BD5\u8F93\u5165\u8D85\u8FC75\u4E2A\u5B57\u7B26",type:"string",hidden:'{{formData.select1 == "a"}}'}}},i=function(){var u=(0,g.useForm)();return s.default.createElement(g.default,{form:u,schema:l})},b=i,B.abrupt("return",b);case 17:case"end":return B.stop()}},M)}));function I(){return T.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo1;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo"}},"function-demo-1":{component:Object(V.dynamic)({loader:function(){var T=Object(X.a)(y.a.mark(function M(){var f,s,g,O,F;return y.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=n("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,s=(0,i.t0)(i.t1),i.t2=f,i.next=9,Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(16)]).then(n.bind(null,"c2mQ"));case 9:return i.t3=i.sent,g=(0,i.t2)(i.t3),i.next=13,n.e(19).then(n.bind(null,"8iYR"));case 13:return O=i.sent,F=function(){return s.default.createElement(g.default,{schema:O.expression})},i.abrupt("return",F);case 16:case"end":return i.stop()}},M)}));function I(){return T.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { expression } from '../json/schema';

export default () => <FR schema={expression} />;`},"demo/FR.jsx":{import:"../demo/FR",content:Be},"json/schema.js":{import:"../json/schema",content:me}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo-1"}},"lifeCycle-demo":{component:Object(V.dynamic)({loader:function(){var T=Object(X.a)(y.a.mark(function M(){var f,s,g,O,F,l,i,b,N;return y.a.wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return F=function(A,d){if(!d&&A&&A.__esModule)return A;if(A===null||typeof A!="object"&&typeof A!="function")return{default:A};var a=O(d);if(a&&a.has(A))return a.get(A);var p={},m=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var D in A)if(D!=="default"&&Object.prototype.hasOwnProperty.call(A,D)){var w=m?Object.getOwnPropertyDescriptor(A,D):null;w&&(w.get||w.set)?Object.defineProperty(p,D,w):p[D]=A[D]}return p.default=A,a&&a.set(A,p),p},O=function(A){if(typeof WeakMap!="function")return null;var d=new WeakMap,a=new WeakMap;return(O=function(m){return m?a:d})(A)},S.t0=F,S.next=5,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 5:return S.t1=S.sent,f=(0,S.t0)(S.t1),S.next=9,Promise.all([n.e(0),n.e(1),n.e(2),n.e(10),n.e(11)]).then(n.bind(null,"gdfu"));case 9:return s=S.sent,S.t2=F,S.next=13,Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(8)]).then(n.bind(null,"refC"));case 13:return S.t3=S.sent,g=(0,S.t2)(S.t3),l=function(A){return new Promise(function(d){return setTimeout(d,A)})},i={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u4E0B\u62C9\u9009\u6846",description:"\u52A0\u8F7D\u4E2D...",type:"string",enum:[],widget:"select"}}},b=function(){var A=(0,g.useForm)(),d=function(){A.setValues({input1:"hello world"}),l(3e3).then(function(p){A.setSchemaByPath("select1",{description:"",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]})})};return f.default.createElement(g.default,{form:A,schema:i,onMount:d})},N=b,S.abrupt("return",N);case 20:case"end":return S.stop()}},M)}));function I(){return T.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"lifeCycle-demo"}},"watch-demo":{component:Object(V.dynamic)({loader:function(){var T=Object(X.a)(y.a.mark(function M(){var f,s,g,O,F,l,i,b;return y.a.wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return F=function(u,A){if(!A&&u&&u.__esModule)return u;if(u===null||typeof u!="object"&&typeof u!="function")return{default:u};var d=O(A);if(d&&d.has(u))return d.get(u);var a={},p=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var m in u)if(m!=="default"&&Object.prototype.hasOwnProperty.call(u,m)){var D=p?Object.getOwnPropertyDescriptor(u,m):null;D&&(D.get||D.set)?Object.defineProperty(a,m,D):a[m]=u[m]}return a.default=u,d&&d.set(u,a),a},O=function(u){if(typeof WeakMap!="function")return null;var A=new WeakMap,d=new WeakMap;return(O=function(p){return p?d:A})(u)},B.t0=F,B.next=5,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 5:return B.t1=B.sent,f=(0,B.t0)(B.t1),B.next=9,Promise.all([n.e(0),n.e(1),n.e(2),n.e(10),n.e(11)]).then(n.bind(null,"gdfu"));case 9:return s=B.sent,B.t2=F,B.next=13,Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(8)]).then(n.bind(null,"refC"));case 13:return B.t3=B.sent,g=(0,B.t2)(B.t3),l={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"}}},i=function(){var u=(0,g.useForm)(),A={"#":function(a){console.log("\u8868\u5355\u7684\u65F6\u65F6\u6570\u636E\u4E3A\uFF1A",a)},input1:function(a){u.setValueByPath("input2",a)}};return f.default.createElement(g.default,{form:u,schema:l,watch:A})},b=i,B.abrupt("return",b);case 19:case"end":return B.stop()}},M)}));function I(){return T.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo"}},"watch-demo-1":{component:Object(V.dynamic)({loader:function(){var T=Object(X.a)(y.a.mark(function M(){var f,s,g,O,F,l,i,b,N,B;return y.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return i=function(d,a){if(!a&&d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var p=l(a);if(p&&p.has(d))return p.get(d);var m={},D=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var w in d)if(w!=="default"&&Object.prototype.hasOwnProperty.call(d,w)){var z=D?Object.getOwnPropertyDescriptor(d,w):null;z&&(z.get||z.set)?Object.defineProperty(m,w,z):m[w]=d[w]}return m.default=d,p&&p.set(d,m),m},l=function(d){if(typeof WeakMap!="function")return null;var a=new WeakMap,p=new WeakMap;return(l=function(D){return D?p:a})(d)},f=n("K+nK"),u.next=5,n.e(3).then(n.t.bind(null,"MaXC",7));case 5:return u.t0=f,u.next=8,n.e(12).then(n.t.bind(null,"4IMT",7));case 8:return u.t1=u.sent,s=(0,u.t0)(u.t1),u.t2=i,u.next=13,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 13:return u.t3=u.sent,g=(0,u.t2)(u.t3),u.next=17,Promise.all([n.e(0),n.e(1),n.e(2),n.e(10),n.e(11)]).then(n.bind(null,"gdfu"));case 17:return O=u.sent,u.t4=i,u.next=21,Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(8)]).then(n.bind(null,"refC"));case 21:return u.t5=u.sent,F=(0,u.t4)(u.t5),b={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"radio"}}}}},N=function(){var d=(0,F.useForm)(),a=function(D,w){w.length>0?alert("errorFields:"+JSON.stringify(w)):alert("formData:"+JSON.stringify(D,null,2))},p={input1:function(D){D.length>2?d.setSchemaByPath("obj1.select",function(w){var z=w.enumNames;return{enumNames:z.map(function(_){return _+"a"})}}):d.setSchemaByPath("obj1.select",{enumNames:["\u65E9","\u4E2D","\u665A"]})}};return g.default.createElement("div",null,g.default.createElement(F.default,{form:d,schema:b,onFinish:a,watch:p}),g.default.createElement(s.default,{type:"",style:{marginRight:8},onClick:function(){return d.setSchemaByPath("input2",{title:"\u7F16\u8F91\u6846",format:"textarea"})}},"\u5C06 input \u6539\u4E3A textarea"),g.default.createElement(s.default,{type:"primary",onClick:d.submit},"\u63D0\u4EA4"))},B=N,u.abrupt("return",B);case 27:case"end":return u.stop()}},M)}));function I(){return T.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo-1"}},"widget-demo":{component:Object(V.dynamic)({loader:function(){var T=Object(X.a)(y.a.mark(function M(){var f,s,g,O,F,l,i,b,N,B,S,u,A;return y.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return N=function(m,D){if(!D&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var w=b(D);if(w&&w.has(m))return w.get(m);var z={},_=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var le in m)if(le!=="default"&&Object.prototype.hasOwnProperty.call(m,le)){var ge=_?Object.getOwnPropertyDescriptor(m,le):null;ge&&(ge.get||ge.set)?Object.defineProperty(z,le,ge):z[le]=m[le]}return z.default=m,w&&w.set(m,z),z},b=function(m){if(typeof WeakMap!="function")return null;var D=new WeakMap,w=new WeakMap;return(b=function(_){return _?w:D})(m)},f=n("K+nK"),a.next=5,n.e(3).then(n.t.bind(null,"MaXC",7));case 5:return a.t0=f,a.next=8,n.e(12).then(n.t.bind(null,"4IMT",7));case 8:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=12,Promise.all([n.e(3),n.e(60)]).then(n.t.bind(null,"cUip",7));case 12:return a.t2=f,a.next=15,Promise.all([n.e(0),n.e(12),n.e(58),n.e(61)]).then(n.t.bind(null,"iJl9",7));case 15:return a.t3=a.sent,g=(0,a.t2)(a.t3),a.t4=f,a.next=20,n.e(64).then(n.bind(null,"0Owb"));case 20:return a.t5=a.sent,O=(0,a.t4)(a.t5),a.t6=N,a.next=25,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 25:return a.t7=a.sent,F=(0,a.t6)(a.t7),a.next=29,Promise.all([n.e(0),n.e(1),n.e(2),n.e(10),n.e(11)]).then(n.bind(null,"gdfu"));case 29:return l=a.sent,a.t8=N,a.next=33,Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(8)]).then(n.bind(null,"refC"));case 33:return a.t9=a.sent,i=(0,a.t8)(a.t9),B={type:"object",properties:{string:{title:"\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6",type:"string",widget:"site"},select:{title:"\u5355\u9009",type:"number",enum:[1,2,3],enumNames:["\u9009\u98791","\u9009\u98792","\u9009\u98793"]}}},S=function(m){return F.default.createElement(g.default,(0,O.default)({addonBefore:"http://",addonAfter:".com"},m))},u=function(){var m=(0,i.useForm)(),D=function(){};return F.default.createElement("div",null,F.default.createElement(i.default,{form:m,schema:B,widgets:{site:S},onFinish:function(z){return alert(JSON.stringify(z,null,2))}}),F.default.createElement(s.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4"))},A=u,a.abrupt("return",A);case 40:case"end":return a.stop()}},M)}));function I(){return T.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},identifier:"widget-demo"}},"schema-demo":{component:Object(V.dynamic)({loader:function(){var T=Object(X.a)(y.a.mark(function M(){var f,s,g,O,F;return y.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=n("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,s=(0,i.t0)(i.t1),i.t2=f,i.next=9,Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(16)]).then(n.bind(null,"c2mQ"));case 9:return i.t3=i.sent,g=(0,i.t2)(i.t3),i.next=13,n.e(19).then(n.bind(null,"8iYR"));case 13:return O=i.sent,F=function(){return s.default.createElement(g.default,{schema:O.basic})},i.abrupt("return",F);case 16:case"end":return i.stop()}},M)}));function I(){return T.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { basic } from '../json/schema';

export default () => <FR schema={basic} />;`},"demo/FR.jsx":{import:"../demo/FR",content:Be},"json/schema.js":{import:"../json/schema",content:me}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo"}},"docs-playground":{component:Object(V.dynamic)({loader:function(){var T=Object(X.a)(y.a.mark(function M(){return y.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(20)]).then(n.bind(null,"BASV"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},M)}));function I(){return T.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:at},"main.js":{import:"./main",content:je},"json/simplest.json":{import:"./json/simplest.json",content:Tn},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:Mn},"monaco/index.js":{import:"./monaco",content:On},"theme.css":{import:"./theme.css",content:fn},"index.css":{import:"./index.css",content:Ye}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:"^16.0.0"},"react-dom":{version:"^16.0.0"},"deep-equal":{version:"2.0.5"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.3.2"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-simple-code-editor":{version:"0.11.0"},prismjs:{version:"1.23.0"}},identifier:"docs-playground"}},"table-render-advanced":{component:Object(V.dynamic)({loader:function(){var T=Object(X.a)(y.a.mark(function M(){return y.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(20)]).then(n.bind(null,"7ZP+"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},M)}));function I(){return T.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{tsx:Ln}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.0"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"1.x"}},transform:!0,defaultShowCode:!0,identifier:"table-render-advanced"}},"table-render-demo":{component:Object(V.dynamic)({loader:function(){var T=Object(X.a)(y.a.mark(function M(){var f,s,g,O,F,l,i,b,N;return y.a.wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return f=n("K+nK"),S.t0=f,S.next=4,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 4:return S.t1=S.sent,s=(0,S.t0)(S.t1),S.next=8,Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(57)]).then(n.bind(null,"P2DI"));case 8:for(g=S.sent,O=[],F=0;F<6;F++)O.push({id:F.toString(),title:"\u6807\u9898".concat(F+1),created_at:new Date().getTime()});return l={type:"object",properties:{string:{title:"\u6807\u9898",type:"string","ui:width":"30%"},created_at:{title:"\u521B\u5EFA\u65F6\u95F4",type:"string",format:"date","ui:width":"30%"}}},i=[{title:"\u6807\u9898",dataIndex:"title"},{title:"\u521B\u5EFA\u65F6\u95F4",key:"since",dataIndex:"created_at",valueType:"date"},{title:"\u64CD\u4F5C",render:function(A,d){return s.default.createElement("a",{onClick:function(){return alert(A.title)}},"\u7F16\u8F91")}}],b=function(){var A=function(){return{rows:O,total:O.length}};return s.default.createElement(g.TableProvider,null,s.default.createElement(g.Search,{schema:l,api:A}),s.default.createElement(g.Table,{headerTitle:"\u6700\u7B80\u8868\u683C",columns:i,rowKey:"id"}))},N=b,S.abrupt("return",N);case 16:case"end":return S.stop()}},M)}));function I(){return T.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Wrapper;`}},dependencies:{react:{version:">=16.8.0"},"table-render":{version:"1.1.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.x"}},transform:!0,defaultShowCode:!0,identifier:"table-render-demo"}},"generator-demo":{component:Object(V.dynamic)({loader:function(){var T=Object(X.a)(y.a.mark(function M(){var f,s,g,O,F,l;return y.a.wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return f=n("K+nK"),b.t0=f,b.next=4,Promise.resolve().then(n.t.bind(null,"q1tI",7));case 4:return b.t1=b.sent,s=(0,b.t0)(b.t1),b.t2=f,b.next=9,Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(56)]).then(n.bind(null,"nYSz"));case 9:return b.t3=b.sent,g=(0,b.t2)(b.t3),O={schema:{type:"object",properties:{inputName:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string"}}},displayType:"row",showDescIcon:!0,labelWidth:120},F=function(){return s.default.createElement("div",{style:{height:"80vh"}},s.default.createElement(g.default,{defaultValue:O}))},l=F,b.abrupt("return",l);case 15:case"end":return b.stop()}},M)}));function I(){return T.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.0.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"generator-demo"}},"generator-modal":{component:Object(V.dynamic)({loader:function(){var T=Object(X.a)(y.a.mark(function M(){return y.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(20)]).then(n.bind(null,"PPgD"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},M)}));function I(){return T.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:wn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.0.1"},"react-dom":{version:">=16.9.0"}},identifier:"generator-modal"}},"generator-transformer":{component:Object(V.dynamic)({loader:function(){var T=Object(X.a)(y.a.mark(function M(){return y.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(20)]).then(n.bind(null,"jktF"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},M)}));function I(){return T.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:Rn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.0.1"},"react-dom":{version:">=16.9.0"}},identifier:"generator-transformer"}},"generator-settings":{component:Object(V.dynamic)({loader:function(){var T=Object(X.a)(y.a.mark(function M(){return y.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(20)]).then(n.bind(null,"M63W"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},M)}));function I(){return T.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:we}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.0.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-settings"}},"generator-playground":{component:Object(V.dynamic)({loader:function(){var T=Object(X.a)(y.a.mark(function M(){return y.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(20)]).then(n.bind(null,"TYW4"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},M)}));function I(){return T.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:kn},"index.less":{import:"./index.less",content:$n}},dependencies:{react:{version:">=16.8.0"},umi:{version:"3.4.19"},"fr-generator":{version:"2.0.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-playground"}}}},PbZa:function(Nn,gn,n){"use strict";n.r(gn);var X=n("q1tI"),e=n.n(X),y=n("dEAq"),V=n.n(y),ce=n("0zqC"),L=n("ZpkN"),tn=n("JjdP"),Be=e.a.memo(tn.default["table-render-demo"].component);gn.default=me=>(e.a.useEffect(()=>{me!=null&&me.location.hash&&y.AnchorLink.scrollToAnchor(decodeURIComponent(me.location.hash.slice(1)))},[]),e.a.createElement(e.a.Fragment,null,e.a.createElement(e.a.Fragment,null,e.a.createElement("div",{className:"markdown"},e.a.createElement("div",{style:{display:"flex",alignItems:"center",marginBottom:"24px"}},e.a.createElement("img",{src:"https://img.alicdn.com/tfs/TB17UtINiLaK1RjSZFxXXamPFXa-606-643.png",alt:"logo",width:"48px"}),e.a.createElement("span",{style:{fontSize:"30px",fontWeight:"600",display:"inline-block",marginLeft:"12px"}},"TableRender")),e.a.createElement("p",{style:{display:"flex",justifyContent:"space-between",width:"440px"}},e.a.createElement(y.Link,{to:"https://www.npmjs.com/package/table-render?_blank"},e.a.createElement("img",{alt:"npm",src:"https://img.shields.io/npm/v/table-render.svg?maxAge=3600&style=flat-square"})),e.a.createElement(y.Link,{to:"https://npmjs.org/package/table-render"},e.a.createElement("img",{alt:"NPM downloads",src:"https://img.shields.io/npm/dm/table-render.svg?style=flat-square"})),e.a.createElement(y.Link,{to:"https://npmjs.org/package/table-render"},e.a.createElement("img",{alt:"NPM all downloads",src:"https://img.shields.io/npm/dt/table-render.svg?style=flat-square"})),e.a.createElement("a",null,e.a.createElement("img",{alt:"PRs Welcome",src:"https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square"}))),e.a.createElement("blockquote",null,e.a.createElement("p",null,"\u6613\u7528\u4E14\u8F7B\u91CF\u7684\u4E2D\u540E\u53F0",e.a.createElement("strong",null,"\u5217\u8868\u89E3\u51B3\u65B9\u6848"),"\uFF0C\u5E38\u7528\u4E8E",e.a.createElement("strong",null,"\u641C\u7D22\u5217\u8868\u9875"),"\u5FEB\u901F\u751F\u6210")),e.a.createElement("h2",{id:"\u4F18\u52BF"},e.a.createElement(y.AnchorLink,{to:"#\u4F18\u52BF","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u4F18\u52BF"),e.a.createElement("ol",null,e.a.createElement("li",null,e.a.createElement("strong",null,"\u771F\u6B63\u5F00\u7BB1\u5373\u7528"),"\uFF1A\u4EE5\u6700\u7B80\u5355\u7684 API \u914D\u7F6E\u8BF7\u6C42\u548C\u8868\u5934\u7684\u5B57\u6BB5\uFF0C\u5C31\u80FD\u751F\u6210\u4E00\u4E2A\u597D\u7528\u641C\u7D22\u5217\u8868\u3002"),e.a.createElement("li",null,e.a.createElement("strong",null,"XRender \u751F\u6001"),"\uFF1A\u641C\u7D22\u7B5B\u9009\u80FD\u529B\u7528 FormRender \u6765\u63D0\u4F9B\uFF0C\u4EE5\u6700\u5C0F\u6210\u672C\u5FEB\u901F\u751F\u6210\u4E0A\u4FA7\u641C\u7D22\u9762\u677F\u3002"),e.a.createElement("li",null,e.a.createElement("strong",null,"\u65E0\u7F1D\u4E60\u60EF\u4F7F\u7528"),"\uFF1A\u8868\u683C\u80FD\u7528 Ant Design Table \u6765\u63D0\u4F9B\uFF0C\u964D\u4F4E\u7528\u6237\u4F7F\u7528\u6210\u672C\u3002")),e.a.createElement("h2",{id:"\u4F55\u65F6\u4F7F\u7528"},e.a.createElement(y.AnchorLink,{to:"#\u4F55\u65F6\u4F7F\u7528","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u4F55\u65F6\u4F7F\u7528"),e.a.createElement("ol",null,e.a.createElement("li",null,"\u7528\u4E8E\u67E5\u770B\u548C\u5904\u7406\u591A\u6761\u7ED3\u6784\u7C7B\u4F3C\u7684\u6570\u636E\uFF0C\u53EF\u5BF9\u6570\u636E\u8FDB\u884C\u6392\u5E8F\u3001\u7B5B\u9009\u3001\u5BF9\u6BD4\u6216\u5176\u4ED6\u81EA\u5B9A\u4E49\u64CD\u4F5C\uFF0C\u5E38\u6709\u5BFC\u822A\u5230\u8BE6\u60C5\u9875\u9762\u7684\u4F5C\u7528\u3002"),e.a.createElement("li",null,"\u8868\u683C\u5217\u8868\u5EFA\u8BAE\u5C06\u91CD\u8981\u4FE1\u606F\u548C\u64CD\u4F5C\u5C55\u793A\u51FA\u6765\uFF0C\u4E0D\u91CD\u8981\u4FE1\u606F\u76F4\u63A5\u6536\u8D77\uFF0C\u53EF\u4EE5\u5E2E\u52A9\u7528\u6237\u66F4\u9AD8\u6548\u7684\u67E5\u770B\u3001\u5904\u7406\u3001\u67E5\u627E\u6570\u636E\u3002")),e.a.createElement("h2",{id:"\u5982\u4F55\u4F7F\u7528"},e.a.createElement(y.AnchorLink,{to:"#\u5982\u4F55\u4F7F\u7528","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u5982\u4F55\u4F7F\u7528"),e.a.createElement("h3",{id:"\u5B89\u88C5"},e.a.createElement(y.AnchorLink,{to:"#\u5B89\u88C5","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u5B89\u88C5"),e.a.createElement("p",null,"table-render \u4F9D\u8D56 ant design\uFF0C\u5355\u72EC\u4F7F\u7528\u4E0D\u8981\u5FD8\u8BB0\u5B89\u88C5\uFF5E"),e.a.createElement(L.a,{code:"npm i table-render --save",lang:"sh"}),e.a.createElement("h3",{id:"\u4EE3\u7801\u6F14\u793A"},e.a.createElement(y.AnchorLink,{to:"#\u4EE3\u7801\u6F14\u793A","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"\u4EE3\u7801\u6F14\u793A")),e.a.createElement(ce.default,tn.default["table-render-demo"].previewerProps,e.a.createElement(Be,null)),e.a.createElement("div",{className:"markdown"},e.a.createElement("h2",{id:"api"},e.a.createElement(y.AnchorLink,{to:"#api","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"API"),e.a.createElement("h3",{id:"tableprovider-\u53C2\u6570"},e.a.createElement(y.AnchorLink,{to:"#tableprovider-\u53C2\u6570","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),e.a.createElement("code",null,"<TableProvider>")," \u53C2\u6570"),e.a.createElement("p",null,e.a.createElement("strong",null,"TableProvider \u672C\u8D28\u5C31\u662F\u4E00\u4E2A React Context\uFF0C\u5C06\u5BF9\u5E94\u7684 ",e.a.createElement("code",null,"<Search>")," \u548C ",e.a.createElement("code",null,"<Table>")," \u5305\u88F9\u8D77\u6765\uFF0C\u53EF\u4EE5\u5F88\u65B9\u4FBF\u5728\u91CC\u9762\u63D2\u5165\u4E00\u4E9B\u5176\u4ED6\u4E1C\u897F\uFF0C\u4E0D\u9700\u8981\u4EFB\u4F55\u5165\u53C2")),e.a.createElement("h3",{id:"search-\u53C2\u6570"},e.a.createElement(y.AnchorLink,{to:"#search-\u53C2\u6570","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),e.a.createElement("code",null,"<Search>")," \u53C2\u6570"),e.a.createElement("p",null,e.a.createElement("strong",null,"\u6211\u4EEC\u5C06\u641C\u7D22\u76F8\u5173\u7684\u80FD\u529B\u653E\u5230 ",e.a.createElement("code",null,"<Search>")," \u4E0A\u9762\u914D\u7F6E\uFF0C\u5305\u62EC\u5BF9\u5E94\u7684\u641C\u7D22\u7B5B\u9009\u8868\u5355\u7684\u6E32\u67D3")),e.a.createElement("table",null,e.a.createElement("thead",null,e.a.createElement("tr",null,e.a.createElement("th",null,"\u5C5E\u6027"),e.a.createElement("th",null,"\u63CF\u8FF0"),e.a.createElement("th",null,"\u7C7B\u578B"),e.a.createElement("th",null,"\u9ED8\u8BA4\u503C"),e.a.createElement("th",null,"\u5FC5\u586B"))),e.a.createElement("tbody",null,e.a.createElement("tr",null,e.a.createElement("td",null,"schema"),e.a.createElement("td",null,"\u7528\u4E8E\u6E32\u67D3\u8868\u5355\u7684 schema\uFF0C\u5177\u4F53\u7684 api \u53C2\u8003 ",e.a.createElement(y.Link,{to:"/form-render/config/schema"},"form-render \u6587\u6863")),e.a.createElement("td",null,e.a.createElement("code",null,"object")),e.a.createElement("td",null,"-"),e.a.createElement("td",null,"\u662F")),e.a.createElement("tr",null,e.a.createElement("td",null,"api"),e.a.createElement("td",null,"\u521D\u59CB\u5316&\u70B9\u51FB\u67E5\u8BE2\u65F6\u6267\u884C\u7684\u51FD\u6570"),e.a.createElement("td",null,e.a.createElement("code",null,"Function")," or ",e.a.createElement("code",null,"Array")),e.a.createElement("td",null,"-"),e.a.createElement("td",null,"\u662F")),e.a.createElement("tr",null,e.a.createElement("td",null,"onSearch"),e.a.createElement("td",null,"\u5728\u8868\u683C\u67E5\u8BE2\u65F6\u6267\u884C\u4E00\u4E9B\u989D\u5916\u7684\u64CD\u4F5C"),e.a.createElement("td",null,e.a.createElement("code",null,"Function")),e.a.createElement("td",null,"-"),e.a.createElement("td",null,"\u5426")),e.a.createElement("tr",null,e.a.createElement("td",null,"afterSearch"),e.a.createElement("td",null,"\u5728\u8868\u683C\u67E5\u8BE2\u7ED3\u675F\u540E\u6267\u884C\u4E00\u4E9B\u989D\u5916\u7684\u64CD\u4F5C"),e.a.createElement("td",null,e.a.createElement("code",null,"Function")),e.a.createElement("td",null,"-"),e.a.createElement("td",null,"\u5426")),e.a.createElement("tr",null,e.a.createElement("td",null,"searchOnMount"),e.a.createElement("td",null,"\u7EC4\u4EF6\u521D\u6B21\u6302\u8F7D\u65F6\uFF0C\u662F\u5426\u9ED8\u8BA4\u6267\u884C\u67E5\u8BE2\u52A8\u4F5C"),e.a.createElement("td",null,e.a.createElement("code",null,"boolean")),e.a.createElement("td",null,e.a.createElement("code",null,"true")),e.a.createElement("td",null,"\u5426")),e.a.createElement("tr",null,e.a.createElement("td",null,"hidden"),e.a.createElement("td",null,"\u662F\u5426\u9690\u85CF",e.a.createElement("code",null,"<Search />"),"\u7EC4\u4EF6"),e.a.createElement("td",null,e.a.createElement("code",null,"boolean")),e.a.createElement("td",null,e.a.createElement("code",null,"false")),e.a.createElement("td",null,"\u5426")),e.a.createElement("tr",null,e.a.createElement("td",null,"searchBtnRender"),e.a.createElement("td",null,"\u81EA\u5B9A\u4E49\u8868\u5355\u67E5\u8BE2\u6309\u94AE"),e.a.createElement("td",null,e.a.createElement("code",null,"(refresh,clearSearch) => ReactNode[]")),e.a.createElement("td",null,"-"),e.a.createElement("td",null,"\u5426")),e.a.createElement("tr",null,e.a.createElement("td",null,"searchBtnStyle"),e.a.createElement("td",null,"\u81EA\u5B9A\u4E49\u8868\u5355\u64CD\u4F5C\u6309\u94AE\u7EC4\u7684\u6837\u5F0F"),e.a.createElement("td",null,e.a.createElement("code",null,"React.CSSProperties")),e.a.createElement("td",null,"{","}"),e.a.createElement("td",null,"\u5426")),e.a.createElement("tr",null,e.a.createElement("td",null,"searchBtnClassName"),e.a.createElement("td",null,"\u81EA\u5B9A\u4E49\u8868\u5355\u64CD\u4F5C\u6309\u94AE\u7EC4\u7684 ClassName"),e.a.createElement("td",null,e.a.createElement("code",null,"string")),e.a.createElement("td",null,"''"),e.a.createElement("td",null,"\u5426")))),e.a.createElement("h3",{id:"table-\u53C2\u6570"},e.a.createElement(y.AnchorLink,{to:"#table-\u53C2\u6570","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),e.a.createElement("code",null,"<Table>")," \u53C2\u6570"),e.a.createElement("p",null,e.a.createElement("strong",null,"\u652F\u6301\u6240\u6709 antd table \u7684 props\uFF0C\u4F46\u662F",e.a.createElement("code",null,"dataSource"),", ",e.a.createElement("code",null,"loading"),", ",e.a.createElement("code",null,"pagination"),"\u8FD9\u51E0\u4E2A\u53C2\u6570\u662F\u5185\u90E8\u72B6\u6001\uFF0C\u4E0D\u9700\u8981\u586B\u5199\uFF0C\u6700\u57FA\u672C\u7684\u4F7F\u7528\u5C31\u9700\u8981\u586B\u5199",e.a.createElement("code",null,"columns"))),e.a.createElement("table",null,e.a.createElement("thead",null,e.a.createElement("tr",null,e.a.createElement("th",null,"\u5C5E\u6027"),e.a.createElement("th",null,"\u63CF\u8FF0"),e.a.createElement("th",null,"\u7C7B\u578B"),e.a.createElement("th",null,"\u9ED8\u8BA4\u503C"))),e.a.createElement("tbody",null,e.a.createElement("tr",null,e.a.createElement("td",null,"headerTitle"),e.a.createElement("td",null,"\u8868\u683C\u6807\u9898"),e.a.createElement("td",null,e.a.createElement("code",null,"string")),e.a.createElement("td",null,e.a.createElement("code",null,"ReactNode"))),e.a.createElement("tr",null,e.a.createElement("td",null,"toolbarRender"),e.a.createElement("td",null,"\u8868\u683C\u4E3B\u4F53\u53F3\u4E0A\u65B9\u7684\u63A7\u4EF6\uFF0C\u4F8B\u5982\u201C\u6DFB\u52A0\u201D\u6309\u94AE"),e.a.createElement("td",null,e.a.createElement("code",null,"() => ReactNode[]")),e.a.createElement("td",null,e.a.createElement("code",null,"false"))),e.a.createElement("tr",null,e.a.createElement("td",null,"toolbarAction"),e.a.createElement("td",null,"\u663E\u793A\u5728\u8868\u683C\u4E3B\u4F53\u53F3\u4E0A\u65B9\u7684 Icon \u5217\u8868\uFF0C\u5185\u7F6E\u4E86",e.a.createElement("code",null,"\u5237\u65B0\u3001\u8C03\u6574\u5BC6\u5EA6\u3001\u5168\u5C4F\u663E\u793A")," \u7B49\u529F\u80FD"),e.a.createElement("td",null,e.a.createElement("code",null,"boolean")),e.a.createElement("td",null,e.a.createElement("code",null,"false"))),e.a.createElement("tr",null,e.a.createElement("td",null,"pageChangeWithRequest"),e.a.createElement("td",null,"\u5207\u6362\u5206\u9875\u65F6\u662F\u5426\u9700\u8981\u8BF7\u6C42\u63A5\u53E3"),e.a.createElement("td",null,e.a.createElement("code",null,"boolean")),e.a.createElement("td",null,e.a.createElement("code",null,"true"))),e.a.createElement("tr",null,e.a.createElement("td",null,"columns"),e.a.createElement("td",null,"\u5217\u5B9A\u4E49"),e.a.createElement("td",null,e.a.createElement("code",null,"object")),e.a.createElement("td",null,e.a.createElement("code",null,"false"))))),e.a.createElement("h4",{id:"table-\u53C2\u6570-\u4E2D-columns-\u5217\u5B9A\u4E49"},e.a.createElement(y.AnchorLink,{to:"#table-\u53C2\u6570-\u4E2D-columns-\u5217\u5B9A\u4E49","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),e.a.createElement("code",null,"<Table>")," \u53C2\u6570 \u4E2D Columns \u5217\u5B9A\u4E49"),e.a.createElement("p",null,e.a.createElement("strong",null,"columns \u4E3A antd \u5DF2\u6709\u7684 props\uFF0C\u6240\u4EE5\u652F\u6301 antd \u6240\u6709\u7684\u652F\u6301\u7684 ",e.a.createElement(y.Link,{to:"https://ant.design/components/table-cn/#Column"},"columns")," \u7684\u914D\u7F6E\uFF0C\u540C\u65F6\u4E5F\u63D0\u4F9B\u4E86\u4E00\u4E9B\u66F4\u65B9\u4FBF\u7684 api\uFF0C\u52A0\u5FEB\u4E66\u5199")),e.a.createElement("table",null,e.a.createElement("thead",null,e.a.createElement("tr",null,e.a.createElement("th",null,"\u5C5E\u6027"),e.a.createElement("th",null,"\u63CF\u8FF0"),e.a.createElement("th",null,"\u7C7B\u578B"),e.a.createElement("th",null,"\u9ED8\u8BA4\u503C"))),e.a.createElement("tbody",null,e.a.createElement("tr",null,e.a.createElement("td",null,"ellipsis"),e.a.createElement("td",null,"\u662F\u5426\u81EA\u52A8\u7F29\u7565"),e.a.createElement("td",null,"boolean"),e.a.createElement("td",null,"-")),e.a.createElement("tr",null,e.a.createElement("td",null,"copyable"),e.a.createElement("td",null,"\u662F\u5426\u652F\u6301\u590D\u5236"),e.a.createElement("td",null,"boolean"),e.a.createElement("td",null,"-")),e.a.createElement("tr",null,e.a.createElement("td",null,"valueType"),e.a.createElement("td",null,"\u503C\u7684\u7C7B\u578B\uFF0C\u8BE6\u89C1\u4E0B\u65B9 ",e.a.createElement("code",null,"valueType \u914D\u7F6E")),e.a.createElement("td",null,e.a.createElement("code",null,"string"),"\uFF08",e.a.createElement("code",null,"text")," | ",e.a.createElement("code",null,"money")," | ",e.a.createElement("code",null,"date")," | ",e.a.createElement("code",null,"dateTime"),"\uFF09"),e.a.createElement("td",null,e.a.createElement("code",null,"text"))),e.a.createElement("tr",null,e.a.createElement("td",null,"enum"),e.a.createElement("td",null,"\u5F53\u524D\u5217\u503C\u7684\u679A\u4E3E\uFF0C\u8BE6\u89C1",e.a.createElement(y.Link,{to:"./table-render/demo"},"\u9AD8\u7EA7\u7528\u6CD5")),e.a.createElement("td",null,e.a.createElement("code",null,"object")),e.a.createElement("td",null,"-")))),e.a.createElement("ul",null,e.a.createElement("li",null,e.a.createElement("p",null,e.a.createElement("strong",null,"valueType \u503C\u7C7B\u578B"),"\uFF1ATableRender \u5C01\u88C5\u4E86\u4E00\u4E9B\u5E38\u7528\u7684\u503C\u7C7B\u578B\u6765\u51CF\u5C11\u91CD\u590D\u7684 render \u64CD\u4F5C\uFF0C\u914D\u7F6E\u4E00\u4E2A valueType \u5373\u53EF\u5C55\u793A\u683C\u5F0F\u5316\u54CD\u5E94\u7684\u6570\u636E\uFF0C\u5177\u4F53\u4F7F\u7528\u53EF\u53C2\u8003 ",e.a.createElement(y.Link,{to:"./table-render/demo"},"\u6848\u4F8B\u4EE3\u7801"),"\uFF1A"),e.a.createElement("table",null,e.a.createElement("thead",null,e.a.createElement("tr",null,e.a.createElement("th",null,"\u5C5E\u6027"),e.a.createElement("th",null,"\u63CF\u8FF0"))),e.a.createElement("tbody",null,e.a.createElement("tr",null,e.a.createElement("td",null,"text"),e.a.createElement("td",null,"\u666E\u901A\u7684\u6587\u672C\u7C7B\u578B")),e.a.createElement("tr",null,e.a.createElement("td",null,"date"),e.a.createElement("td",null,"\u5F53\u6570\u636E\u662F\u65E5\u671F\u7C7B\u578B\u7684\u8FD4\u56DE\u65F6\uFF0C\u4F1A\u81EA\u52A8\u5C06\u683C\u5F0F\u8F6C\u6362\u4E3A '2020-10-20'")),e.a.createElement("tr",null,e.a.createElement("td",null,"dateTime"),e.a.createElement("td",null,"\u5F53\u6570\u636E\u662F\u65E5\u671F\u7C7B\u578B\u7684\u8FD4\u56DE\u65F6\uFF0C\u4F1A\u81EA\u52A8\u5C06\u683C\u5F0F\u8F6C\u6362\u4E3A '2020-10-20 19:30:00'")),e.a.createElement("tr",null,e.a.createElement("td",null,"money"),e.a.createElement("td",null,"\u5F53\u6570\u636E\u662F\u91D1\u989D\u65F6\uFF0C\u4F1A\u81EA\u52A8\u5C06\u683C\u5F0F\u8F6C\u6362\u4E3A '\xA5999,999,999.99'")))))),e.a.createElement("h3",{id:"context-\u4E0A\u4E0B\u6587"},e.a.createElement(y.AnchorLink,{to:"#context-\u4E0A\u4E0B\u6587","aria-hidden":"true",tabIndex:-1},e.a.createElement("span",{className:"icon icon-link"})),"Context \u4E0A\u4E0B\u6587"),e.a.createElement("p",null,e.a.createElement("strong",null,"\u53EF\u901A\u8FC7 ",e.a.createElement("code",null,"useTable")," \u83B7\u53D6 ",e.a.createElement("code",null,"table-render")," \u7684 context\uFF0C\u4F8B\u5982: ",e.a.createElement("code",null,"refresh"),"\u3001",e.a.createElement("code",null,"tableState"),"\u3001",e.a.createElement("code",null,"setTable")," \u7B49\u5C5E\u6027")),e.a.createElement("table",null,e.a.createElement("thead",null,e.a.createElement("tr",null,e.a.createElement("th",null,"\u5C5E\u6027"),e.a.createElement("th",null,"\u63CF\u8FF0"),e.a.createElement("th",null,"\u7C7B\u578B"))),e.a.createElement("tbody",null,e.a.createElement("tr",null,e.a.createElement("td",null,"tableState"),e.a.createElement("td",null,"\u8FD9\u4E9B\u662F\u5168\u5C40\u7684\u72B6\u6001\uFF0C\u6839\u636E\u9700\u8981\u4F7F\u7528"),e.a.createElement("td",null,e.a.createElement("code",null,"object"))),e.a.createElement("tr",null,e.a.createElement("td",null,"refresh"),e.a.createElement("td",null,"\u5237\u65B0\u8868\u683C\u6570\u636E"),e.a.createElement("td",null,e.a.createElement("code",null,"function"))),e.a.createElement("tr",null,e.a.createElement("td",null,"setTable"),e.a.createElement("td",null,"\u7528\u4E8E\u4FEE\u6539\u5168\u5C40\u72B6\u6001\u7684\u5DE5\u5177\u51FD\u6570\uFF0CsetTable \u4E4B\u4E8E tableState\uFF0C\u7B49\u540C setState \u4E4B\u4E8E state"),e.a.createElement("td",null,e.a.createElement("code",null,"function"))),e.a.createElement("tr",null,e.a.createElement("td",null,"changeTab"),e.a.createElement("td",null,"\u624B\u52A8\u5207\u6362 tab \u7684\u51FD\u6570\uFF0C\u4F8B\u5982\u76EE\u524D\u4E24\u4E2A\u641C\u7D22 tab\uFF1A \u201C\u6211\u7684\u6D3B\u52A8\u201D\uFF0C\u201C\u5168\u90E8\u6D3B\u52A8\u201D \uFF08\u5206\u522B\u5BF9\u5E94 tab \u503C\u4E3A 0 \u548C 1\uFF09"),e.a.createElement("td",null,e.a.createElement("code",null,"function"))),e.a.createElement("tr",null,e.a.createElement("td",null,"form"),e.a.createElement("td",null,"Search \u7EC4\u4EF6\u662F form-render \u751F\u6210\u7684\uFF0C\u53EF\u4EE5\u53D6\u5230\u641C\u7D22\u8868\u5355\u7684 form \u5B9E\u4F8B\u4EE5\u53CA\u6302\u5728\u4E0A\u9762\u7684\u65B9\u6CD5\uFF0C\u4F8B\u5982 ",e.a.createElement("code",null,"form.resetFields")," \u6E05\u7A7A\u641C\u7D22\u9879"),e.a.createElement("td",null,e.a.createElement("code",null,"object"))))),e.a.createElement("ul",null,e.a.createElement("li",null,e.a.createElement("p",null,e.a.createElement("strong",null,"\u5BFC\u51FA useTable \u4EE5\u53CA\u5BF9\u5E94\u7684\u65B9\u6CD5")),e.a.createElement(L.a,{code:`import { useTable } from 'table-render';
const { refresh, tableState, setTable } = useTable();`,lang:"js"})),e.a.createElement("li",null,e.a.createElement("p",null,e.a.createElement("strong",null,"\u5176\u4E2D tableState \u7684\u6570\u636E\u683C\u5F0F\u5982\u4E0B\uFF1A")),e.a.createElement(L.a,{code:`{
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
}`,lang:"js"})),e.a.createElement("li",null,e.a.createElement("p",null,e.a.createElement("strong",null,"refresh \u7528\u6CD5")),e.a.createElement("table",null,e.a.createElement("thead",null,e.a.createElement("tr",null,e.a.createElement("th",null,"\u5165\u53C2"),e.a.createElement("th",null,"\u7C7B\u578B"),e.a.createElement("th",null,"\u8BF4\u660E"))),e.a.createElement("tbody",null,e.a.createElement("tr",null,e.a.createElement("td",null,"stay"),e.a.createElement("td",null,e.a.createElement("code",null,"boolean")),e.a.createElement("td",null,"\u5237\u65B0\u662F\u5426\u4FDD\u7559\u5728\u73B0\u5728\u7684\u9875\u7801\u4E0A\uFF0C\u9ED8\u8BA4 false\uFF0C\u56DE\u5230\u7B2C\u4E00\u9875")),e.a.createElement("tr",null,e.a.createElement("td",null,"tab"),e.a.createElement("td",null,e.a.createElement("code",null,"number")),e.a.createElement("td",null,"0,1,2.. \u5982\u679C searchApi \u662F\u6570\u7EC4\u4F1A\u51FA\u73B0\u7684\u641C\u7D22\u9009\u62E9 tab\uFF0C\u7528\u4E8E\u5F3A\u5236\u641C\u7D22\u67D0\u4E2A tab\uFF0C\u4E0D\u5E38\u7528")))),e.a.createElement("ol",null,e.a.createElement("li",null,"\u76F4\u63A5\u7528\uFF1Arefresh()"),e.a.createElement("li",null,"\u5237\u65B0\u6570\u636E\uFF0C\u4F46\u505C\u7559\u5728\u73B0\u6709\u7684\u9875\u7801\uFF1Arefresh(","{"," stay: true ","}",")"))),e.a.createElement("li",null,e.a.createElement("p",null,e.a.createElement("strong",null,"changeTab \u7528\u6CD5")),e.a.createElement(L.a,{code:`//\u4EE5\u4E0B\u4EE3\u7801\u5C06\u624B\u52A8\u5207\u6362\u5230\u201C\u5168\u90E8\u6D3B\u52A8\u201D\uFF08tab = 1\uFF09
const { changeTab } = useTable();
//...
const onClick = () => {
  changeTab(1);
};`,lang:"js"})))))))},TIsu:function(Nn,gn,n){},Zs1V:function(Nn){Nn.exports=JSON.parse("{}")},p8sG:function(Nn,gn,n){"use strict";Nn.exports=n("80pN")}}]);
