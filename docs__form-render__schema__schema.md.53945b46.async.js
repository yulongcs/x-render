(window.webpackJsonp=window.webpackJsonp||[]).push([[41,9],{"0zqC":function(Nn,gn,e){"use strict";e.r(gn);var X=e("tJVT"),n=e("q1tI"),f=e.n(n),V=e("wx14"),ce=e("rePB"),K=e("ODXe"),tn=e("U8pU"),Be=e("Ff2n"),me=e("VTBJ"),at=e("TSYQ"),Pe=e.n(at),Mn=e("Zm9Q"),Tn=e("5Z9U"),Fn=e("6cGi"),fn=e("KQm4"),Ye=e("wgJM"),Ln=e("t23M");function wn(t){var r=Object(n.useRef)(),o=Object(n.useRef)(!1);function g(){for(var b=arguments.length,h=new Array(b),C=0;C<b;C++)h[C]=arguments[C];o.current||(Ye.a.cancel(r.current),r.current=Object(Ye.a)(function(){t.apply(void 0,h)}))}return Object(n.useEffect)(function(){return function(){o.current=!0,Ye.a.cancel(r.current)}},[]),g}function On(t){var r=Object(n.useRef)([]),o=Object(n.useState)({}),g=Object(K.a)(o,2),b=g[1],h=Object(n.useRef)(typeof t=="function"?t():t),C=wn(function(){var W=h.current;r.current.forEach(function(L){W=L(W)}),r.current=[],h.current=W,b({})});function O(W){r.current.push(W),C()}return[h.current,O]}var we=e("4IlW");function kn(t,r){var o,g=t.prefixCls,b=t.id,h=t.active,C=t.rtl,O=t.tab,W=O.key,L=O.tab,$=O.disabled,J=O.closeIcon,U=t.tabBarGutter,ie=t.tabPosition,H=t.closable,Y=t.renderWrapper,le=t.removeAriaLabel,z=t.editable,q=t.onClick,ae=t.onRemove,Q=t.onFocus,se="".concat(g,"-tab");n.useEffect(function(){return ae},[]);var k={};ie==="top"||ie==="bottom"?k[C?"marginLeft":"marginRight"]=U:k.marginBottom=U;var Ee=z&&H!==!1&&!$;function ne(re){$||q(re)}function de(re){re.preventDefault(),re.stopPropagation(),z.onEdit("remove",{key:W,event:re})}var fe=n.createElement("div",{key:W,ref:r,className:Pe()(se,(o={},Object(ce.a)(o,"".concat(se,"-with-remove"),Ee),Object(ce.a)(o,"".concat(se,"-active"),h),Object(ce.a)(o,"".concat(se,"-disabled"),$),o)),style:k,onClick:ne},n.createElement("div",{role:"tab","aria-selected":h,id:b&&"".concat(b,"-tab-").concat(W),className:"".concat(se,"-btn"),"aria-controls":b&&"".concat(b,"-panel-").concat(W),"aria-disabled":$,tabIndex:$?null:0,onClick:function(G){G.stopPropagation(),ne(G)},onKeyDown:function(G){[we.a.SPACE,we.a.ENTER].includes(G.which)&&(G.preventDefault(),ne(G))},onFocus:Q},L),Ee&&n.createElement("button",{type:"button","aria-label":le||"remove",tabIndex:0,className:"".concat(se,"-remove"),onClick:function(G){G.stopPropagation(),de(G)}},J||z.removeIcon||"\xD7"));return Y&&(fe=Y(fe)),fe}var $n=n.forwardRef(kn),rt={width:0,height:0,left:0,top:0};function M(t,r,o){return Object(n.useMemo)(function(){for(var g,b=new Map,h=r.get((g=t[0])===null||g===void 0?void 0:g.key)||rt,C=h.left+h.width,O=0;O<t.length;O+=1){var W=t[O].key,L=r.get(W);if(!L){var $;L=r.get(($=t[O-1])===null||$===void 0?void 0:$.key)||rt}var J=b.get(W)||Object(me.a)({},L);J.right=C-J.left-J.width,b.set(W,J)}return b},[t.map(function(g){return g.key}).join("_"),r,o])}var I={width:0,height:0,left:0,top:0,right:0};function T(t,r,o,g,b){var h=b.tabs,C=b.tabPosition,O=b.rtl,W,L,$;["top","bottom"].includes(C)?(W="width",L=O?"right":"left",$=Math.abs(r.left)):(W="height",L="top",$=-r.top);var J=r[W],U=o[W],ie=g[W],H=J;return U+ie>J&&(H=J-ie),Object(n.useMemo)(function(){if(!h.length)return[0,0];for(var Y=h.length,le=Y,z=0;z<Y;z+=1){var q=t.get(h[z].key)||I;if(q[L]+q[W]>$+H){le=z-1;break}}for(var ae=0,Q=Y-1;Q>=0;Q-=1){var se=t.get(h[Q].key)||I;if(se[L]<$){ae=Q+1;break}}return[ae,le]},[t,$,H,C,h.map(function(Y){return Y.key}).join("_"),O])}var p=e("Gytx"),s=e.n(p),y=e("Kwbf");function F(t,r){var o=t.prefixCls,g=t.invalidate,b=t.item,h=t.renderItem,C=t.responsive,O=t.registerSize,W=t.itemKey,L=t.className,$=t.style,J=t.children,U=t.display,ie=t.order,H=t.component,Y=H===void 0?"div":H,le=Object(Be.a)(t,["prefixCls","invalidate","item","renderItem","responsive","registerSize","itemKey","className","style","children","display","order","component"]),z=C&&!U;function q(Ee){O(W,Ee)}n.useEffect(function(){return function(){q(null)}},[]);var ae=h&&b!==void 0?h(b):J,Q;g||(Q={opacity:z?0:1,height:z?0:void 0,overflowY:z?"hidden":void 0,order:C?ie:void 0,pointerEvents:z?"none":void 0});var se={};z&&(se["aria-hidden"]=!0);var k=n.createElement(Y,Object(V.a)({className:Pe()(!g&&o,L),style:Object(me.a)(Object(me.a)({},Q),$)},se,le,{ref:r}),ae);return C&&(k=n.createElement(Ln.default,{onResize:function(ne){var de=ne.offsetWidth;q(de)}},k)),k}var R=n.forwardRef(F);R.displayName="Item";var u=R;function l(){var t=Object(n.useState)({}),r=Object(K.a)(t,2),o=r[1],g=Object(n.useRef)([]),b=Object(n.useRef)(!1),h=0,C=0;Object(n.useEffect)(function(){return function(){b.current=!0}},[]);function O(W){var L=h;h+=1,g.current.length<L+1&&(g.current[L]=W);var $=g.current[L];function J(U){g.current[L]=typeof U=="function"?U(g.current[L]):U,Ye.a.cancel(C),C=Object(Ye.a)(function(){b.current||o({})})}return[$,J]}return O}var E=function(r,o){var g=n.useContext(S);if(!g){var b=r.component,h=b===void 0?"div":b,C=Object(Be.a)(r,["component"]);return n.createElement(h,Object(V.a)({},C,{ref:o}))}var O=g.className,W=Object(Be.a)(g,["className"]),L=r.className,$=Object(Be.a)(r,["className"]);return n.createElement(S.Provider,{value:null},n.createElement(u,Object(V.a)({ref:o,className:Pe()(O,L)},W,$)))},N=n.forwardRef(E);N.displayName="RawItem";var B=N,S=n.createContext(null),i="responsive",j="invalidate";function d(t){return"+ ".concat(t.length," ...")}function a(t,r){var o=t.prefixCls,g=o===void 0?"rc-overflow":o,b=t.data,h=b===void 0?[]:b,C=t.renderItem,O=t.renderRawItem,W=t.itemKey,L=t.itemWidth,$=L===void 0?10:L,J=t.ssr,U=t.style,ie=t.className,H=t.maxCount,Y=t.renderRest,le=t.renderRawRest,z=t.suffix,q=t.component,ae=q===void 0?"div":q,Q=t.itemComponent,se=t.onVisibleChange,k=Object(Be.a)(t,["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"]),Ee=l(),ne=J==="full",de=Ee(null),fe=Object(K.a)(de,2),re=fe[0],G=fe[1],oe=re||0,ye=Ee(new Map),he=Object(K.a)(ye,2),Oe=he[0],Ke=he[1],be=Ee(0),Fe=Object(K.a)(be,2),Me=Fe[0],Ie=Fe[1],De=Ee(0),Ae=Object(K.a)(De,2),$e=Ae[0],qe=Ae[1],Ve=Ee(0),ze=Object(K.a)(Ve,2),Xe=ze[0],Le=ze[1],Sn=Object(n.useState)(null),an=Object(K.a)(Sn,2),Qe=an[0],ln=an[1],yn=Object(n.useState)(null),En=Object(K.a)(yn,2),je=En[0],Ge=En[1],_e=n.useMemo(function(){return je===null&&ne?Number.MAX_SAFE_INTEGER:je||0},[je,re]),Ze=Object(n.useState)(!1),Wn=Object(K.a)(Ze,2),zn=Wn[0],Kn=Wn[1],rn="".concat(g,"-item"),An=Math.max(Me,$e),on=h.length&&H===i,Dn=H===j,en=on||typeof H=="number"&&h.length>H,un=Object(n.useMemo)(function(){var ve=h;return on?re===null&&ne?ve=h:ve=h.slice(0,Math.min(h.length,oe/$)):typeof H=="number"&&(ve=h.slice(0,H)),ve},[h,$,re,H,on]),Pn=Object(n.useMemo)(function(){return on?h.slice(_e+1):h.slice(un.length)},[h,un,on,_e]),cn=Object(n.useCallback)(function(ve,Re){var Te;return typeof W=="function"?W(ve):(Te=W&&(ve==null?void 0:ve[W]))!==null&&Te!==void 0?Te:Re},[W]),ke=Object(n.useCallback)(C||function(ve){return ve},[C]);function He(ve,Re){Ge(ve),Re||(Kn(ve<h.length-1),se==null||se(ve))}function Un(ve,Re){G(Re.clientWidth)}function Jn(ve,Re){Ke(function(Te){var nn=new Map(Te);return Re===null?nn.delete(ve):nn.set(ve,Re),nn})}function et(ve,Re){qe(Re),Ie($e)}function bn(ve,Re){Le(Re)}function hn(ve){return Oe.get(cn(un[ve],ve))}n.useLayoutEffect(function(){if(oe&&An&&un){var ve=Xe,Re=un.length,Te=Re-1;if(!Re){He(0),ln(null);return}for(var nn=0;nn<Re;nn+=1){var Yn=hn(nn);if(Yn===void 0){He(nn-1,!0);break}if(ve+=Yn,nn===Te-1&&ve+hn(Te)<=oe){He(Te),ln(null);break}else if(ve+An>oe){He(nn-1),ln(ve-Yn-Xe+$e);break}else if(nn===Te){He(Te),ln(ve-Xe);break}}z&&hn(0)+Xe>oe&&ln(null)}},[oe,Oe,$e,Xe,cn,un]);var Gn=zn&&!!Pn.length,Cn={};Qe!==null&&on&&(Cn={position:"absolute",left:Qe,top:0});var mn={prefixCls:rn,responsive:on,component:Q,invalidate:Dn},Hn=O?function(ve,Re){var Te=cn(ve,Re);return n.createElement(S.Provider,{key:Te,value:Object(me.a)(Object(me.a)({},mn),{},{order:Re,item:ve,itemKey:Te,registerSize:Jn,display:Re<=_e})},O(ve,Re))}:function(ve,Re){var Te=cn(ve,Re);return n.createElement(u,Object(V.a)({},mn,{order:Re,key:Te,item:ve,renderItem:ke,itemKey:Te,registerSize:Jn,display:Re<=_e}))},jn,Xn={order:Gn?_e:Number.MAX_SAFE_INTEGER,className:"".concat(rn,"-rest"),registerSize:et,display:Gn};if(le)le&&(jn=n.createElement(S.Provider,{value:Object(me.a)(Object(me.a)({},mn),Xn)},le(Pn)));else{var dn=Y||d;jn=n.createElement(u,Object(V.a)({},mn,Xn),typeof dn=="function"?dn(Pn):dn)}var Bn=n.createElement(ae,Object(V.a)({className:Pe()(!Dn&&g,ie),style:U,ref:r},k),un.map(Hn),en?jn:null,z&&n.createElement(u,Object(V.a)({},mn,{order:_e,className:"".concat(rn,"-suffix"),registerSize:bn,display:!0,style:Cn}),z));return on&&(Bn=n.createElement(Ln.default,{onResize:Un},Bn)),Bn}var v=n.forwardRef(a);v.displayName="Overflow",v.Item=B,v.RESPONSIVE=i,v.INVALIDATE=j;var m=v,A=m,w=e("1OyB"),x=e("vuIU"),_=e("Ji7U"),ue=e("LK+K"),ge=e("bT9E"),pn=e("YrtM"),We=n.createContext(null);function Ne(t,r){var o=Object(me.a)({},t);return Object.keys(r).forEach(function(g){var b=r[g];b!==void 0&&(o[g]=b)}),o}function Rn(t){var r=t.children,o=t.locked,g=Object(Be.a)(t,["children","locked"]),b=n.useContext(We),h=Object(pn.a)(function(){return Ne(b,g)},[b,g],function(C,O){return!o&&(C[0]!==O[0]||!s()(C[1],O[1]))});return n.createElement(We.Provider,{value:h},r)}function ut(t,r,o,g){var b=n.useContext(We),h=b.activeKey,C=b.onActive,O=b.onInactive,W={active:h===t};return r||(W.onMouseEnter=function(L){o==null||o({key:t,domEvent:L}),C(t)},W.onMouseLeave=function(L){g==null||g({key:t,domEvent:L}),O(t)}),W}function qn(t){var r=t.item,o=Object(Be.a)(t,["item"]);return Object.defineProperty(o,"item",{get:function(){return Object(y.a)(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),r}}),o}function c(t){var r=t.icon,o=t.props,g=t.children,b;return typeof r=="function"?b=n.createElement(r,Object(me.a)({},o)):b=r,b||g||null}function D(t){var r=n.useContext(We),o=r.mode,g=r.rtl,b=r.inlineIndent;if(o!=="inline")return null;var h=t;return g?{paddingRight:h*b}:{paddingLeft:h*b}}var P=[],pe=n.createContext(null);function ee(){return n.useContext(pe)}var Se=n.createContext(P);function xe(t){var r=n.useContext(Se);return n.useMemo(function(){return t!==void 0?[].concat(Object(fn.a)(r),[t]):r},[r,t])}var Je=n.createContext(null),zt=n.createContext(null);function Ut(t,r){return t===void 0?null:"".concat(t,"-").concat(r)}function Jt(t){var r=n.useContext(zt);return Ut(r,t)}var Ea=function(t){Object(_.a)(o,t);var r=Object(ue.a)(o);function o(){return Object(w.a)(this,o),r.apply(this,arguments)}return Object(x.a)(o,[{key:"render",value:function(){var b=this.props,h=b.title,C=b.attribute,O=b.elementRef,W=Object(Be.a)(b,["title","attribute","elementRef"]),L=Object(ge.a)(W,["eventKey"]);return Object(y.a)(!C,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),n.createElement(A.Item,Object(V.a)({},C,{title:typeof h=="string"?h:void 0},L,{ref:O}))}}]),o}(n.Component),ba=function(r){var o,g=r.style,b=r.className,h=r.eventKey,C=r.disabled,O=r.itemIcon,W=r.children,L=r.role,$=r.onMouseEnter,J=r.onMouseLeave,U=r.onClick,ie=r.onKeyDown,H=r.onFocus,Y=Object(Be.a)(r,["style","className","eventKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"]),le=Jt(h),z=n.useContext(We),q=z.prefixCls,ae=z.onItemClick,Q=z.disabled,se=z.overflowDisabled,k=z.itemIcon,Ee=z.selectedKeys,ne=z.onActive,de="".concat(q,"-item"),fe=n.useRef(),re=n.useRef(),G=Q||C,oe=xe(h),ye=function(Ve){return{key:h,keyPath:oe,item:fe.current,domEvent:Ve}},he=O||k,Oe=ut(h,G,$,J),Ke=Oe.active,be=Object(Be.a)(Oe,["active"]),Fe=Ee.includes(h),Me=D(oe.length),Ie=function(Ve){if(!G){var ze=ye(Ve);U==null||U(qn(ze)),ae(ze)}},De=function(Ve){if(ie==null||ie(Ve),Ve.which===we.a.ENTER){var ze=ye(Ve);U==null||U(qn(ze)),ae(ze)}},Ae=function(Ve){ne(h),H==null||H(Ve)},$e={};return r.role==="option"&&($e["aria-selected"]=Fe),n.createElement(Ea,Object(V.a)({ref:fe,elementRef:re,role:L===null?"none":L||"menuitem",tabIndex:C?null:-1,"data-menu-id":se&&le?null:le},Y,be,$e,{component:"li","aria-disabled":C,style:Object(me.a)(Object(me.a)({},Me),g),className:Pe()(de,(o={},Object(ce.a)(o,"".concat(de,"-active"),Ke),Object(ce.a)(o,"".concat(de,"-selected"),Fe),Object(ce.a)(o,"".concat(de,"-disabled"),G),o),b),onClick:Ie,onKeyDown:De,onFocus:Ae}),W,n.createElement(c,{props:Object(me.a)(Object(me.a)({},r),{},{isSelected:Fe}),icon:he}))};function Ca(t){var r=t.eventKey,o=ee(),g=xe(r);return n.useEffect(function(){if(o)return o.registerPath(r,g),function(){o.unregisterPath(r,g)}},[g]),o?null:n.createElement(ba,t)}var At=Ca;function Dt(t,r){return Object(Mn.a)(t).map(function(o,g){if(n.isValidElement(o)){var b=o.key;return b==null&&(b="tmp_key-".concat([].concat(Object(fn.a)(r),[g]).join("-"))),n.cloneElement(o,{key:b,eventKey:b})}return o})}function _n(t){var r=n.useRef(t);r.current=t;var o=n.useCallback(function(){for(var g,b=arguments.length,h=new Array(b),C=0;C<b;C++)h[C]=arguments[C];return(g=r.current)===null||g===void 0?void 0:g.call.apply(g,[r].concat(h))},[]);return t?o:void 0}var Fa=function(r,o){var g=r.className,b=r.children,h=Object(Be.a)(r,["className","children"]),C=n.useContext(We),O=C.prefixCls,W=C.mode;return n.createElement("ul",Object(V.a)({className:Pe()(O,"".concat(O,"-sub"),"".concat(O,"-").concat(W==="inline"?"inline":"vertical"),g)},h,{"data-menu-list":!0,ref:o}),b)},Gt=n.forwardRef(Fa);Gt.displayName="SubMenuList";var Ht=Gt,Oa=e("uciX"),Vn={adjustX:1,adjustY:1},Xt={topLeft:{points:["bl","tl"],overflow:Vn,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Vn,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:Vn,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:Vn,offset:[4,0]}},Ra={topLeft:{points:["bl","tl"],overflow:Vn,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Vn,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:Vn,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:Vn,offset:[4,0]}},fr=Xt;function Yt(t,r,o){if(r)return r;if(o)return o[t]||o.other}var Sa={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function Aa(t){var r=t.prefixCls,o=t.visible,g=t.children,b=t.popup,h=t.popupClassName,C=t.popupOffset,O=t.disabled,W=t.mode,L=t.onVisibleChange,$=n.useContext(We),J=$.getPopupContainer,U=$.rtl,ie=$.subMenuOpenDelay,H=$.subMenuCloseDelay,Y=$.builtinPlacements,le=$.triggerSubMenuAction,z=$.forceSubMenuRender,q=$.motion,ae=$.defaultMotions,Q=n.useState(!1),se=Object(K.a)(Q,2),k=se[0],Ee=se[1],ne=U?Object(me.a)(Object(me.a)({},Ra),Y):Object(me.a)(Object(me.a)({},Xt),Y),de=Sa[W],fe=Yt(W,q,ae),re=Object(me.a)(Object(me.a)({},fe),{},{leavedClassName:"".concat(r,"-hidden"),removeOnLeave:!1,motionAppear:!0}),G=n.useRef();return n.useEffect(function(){return G.current=Object(Ye.a)(function(){Ee(o)}),function(){Ye.a.cancel(G.current)}},[o]),n.createElement(Oa.a,{prefixCls:r,popupClassName:Pe()("".concat(r,"-popup"),Object(ce.a)({},"".concat(r,"-rtl"),U),h),stretch:W==="horizontal"?"minWidth":null,getPopupContainer:J,builtinPlacements:ne,popupPlacement:de,popupVisible:k,popup:b,popupAlign:C&&{offset:C},action:O?[]:[le],mouseEnterDelay:ie,mouseLeaveDelay:H,onPopupVisibleChange:L,forceRender:z,popupMotion:re},g)}var Da=e("8XRh");function Pa(t){var r=t.id,o=t.open,g=t.keyPath,b=t.children,h="inline",C=n.useContext(We),O=C.prefixCls,W=C.forceSubMenuRender,L=C.motion,$=C.defaultMotions,J=C.mode,U=n.useRef(!1);U.current=J===h;var ie=n.useState(!U.current),H=Object(K.a)(ie,2),Y=H[0],le=H[1],z=U.current?o:!1;n.useEffect(function(){U.current&&le(!1)},[J]);var q=Object(me.a)({},Yt(h,L,$));g.length>1&&(q.motionAppear=!1);var ae=q.onVisibleChanged;return q.onVisibleChanged=function(Q){return!U.current&&!Q&&le(!0),ae==null?void 0:ae(Q)},Y?null:n.createElement(Rn,{mode:h,locked:!U.current},n.createElement(Da.default,Object(V.a)({visible:z},q,{forceRender:W,removeOnLeave:!1,leavedClassName:"".concat(O,"-hidden")}),function(Q){var se=Q.className,k=Q.style;return n.createElement(Ht,{id:r,className:se,style:k},b)}))}var ja=function(r){var o,g=r.style,b=r.className,h=r.title,C=r.eventKey,O=r.disabled,W=r.internalPopupClose,L=r.children,$=r.itemIcon,J=r.expandIcon,U=r.popupClassName,ie=r.popupOffset,H=r.onClick,Y=r.onMouseEnter,le=r.onMouseLeave,z=r.onTitleClick,q=r.onTitleMouseEnter,ae=r.onTitleMouseLeave,Q=Object(Be.a)(r,["style","className","title","eventKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"]),se=Jt(C),k=n.useContext(We),Ee=k.prefixCls,ne=k.mode,de=k.openKeys,fe=k.disabled,re=k.overflowDisabled,G=k.activeKey,oe=k.selectedKeys,ye=k.itemIcon,he=k.expandIcon,Oe=k.onItemClick,Ke=k.onOpenChange,be=k.onActive,Fe=n.useContext(Je),Me=Fe.isSubPathKey,Ie=xe(),De="".concat(Ee,"-submenu"),Ae=fe||O,$e=n.useRef(),qe=n.useRef(),Ve=$||ye,ze=J||he,Xe=de.includes(C),Le=!re&&Xe,Sn=Me(oe,C),an=ut(C,Ae,q,ae),Qe=an.active,ln=Object(Be.a)(an,["active"]),yn=n.useState(!1),En=Object(K.a)(yn,2),je=En[0],Ge=En[1],_e=function(He){Ae||Ge(He)},Ze=function(He){_e(!0),Y==null||Y({key:C,domEvent:He})},Wn=function(He){_e(!1),le==null||le({key:C,domEvent:He})},zn=n.useMemo(function(){return Qe||(ne!=="inline"?je||Me([G],C):!1)},[ne,Qe,G,je,C,Me]),Kn=D(Ie.length),rn=function(He){Ae||(z==null||z({key:C,domEvent:He}),ne==="inline"&&Ke(C,!Xe))},An=_n(function(ke){H==null||H(qn(ke)),Oe(ke)}),on=function(He){ne!=="inline"&&Ke(C,He)},Dn=function(){be(C)},en=se&&"".concat(se,"-popup"),un=n.createElement("div",Object(V.a)({role:"menuitem",style:Kn,className:"".concat(De,"-title"),tabIndex:Ae?null:-1,ref:$e,title:typeof h=="string"?h:null,"data-menu-id":re&&se?null:se,"aria-expanded":Le,"aria-haspopup":!0,"aria-controls":en,"aria-disabled":Ae,onClick:rn,onFocus:Dn},ln),h,n.createElement(c,{icon:ne!=="horizontal"?ze:null,props:Object(me.a)(Object(me.a)({},r),{},{isOpen:Le,isSubMenu:!0})},n.createElement("i",{className:"".concat(De,"-arrow")}))),Pn=n.useRef(ne);if(ne!=="inline"&&(Pn.current=Ie.length>1?"vertical":ne),!re){var cn=Pn.current;un=n.createElement(Aa,{mode:cn,prefixCls:De,visible:!W&&Le&&ne!=="inline",popupClassName:U,popupOffset:ie,popup:n.createElement(Rn,{mode:cn},n.createElement(Ht,{id:en,ref:qe},L)),disabled:Ae,onVisibleChange:on},un)}return n.createElement(Rn,{onItemClick:An,mode:ne==="horizontal"?"vertical":ne,itemIcon:Ve,expandIcon:ze},n.createElement(A.Item,Object(V.a)({role:"none"},Q,{component:"li",style:g,className:Pe()(De,"".concat(De,"-").concat(ne),b,(o={},Object(ce.a)(o,"".concat(De,"-open"),Le),Object(ce.a)(o,"".concat(De,"-active"),zn),Object(ce.a)(o,"".concat(De,"-selected"),Sn),Object(ce.a)(o,"".concat(De,"-disabled"),Ae),o)),onMouseEnter:Ze,onMouseLeave:Wn}),un,!re&&n.createElement(Pa,{id:en,open:Le,keyPath:Ie},L)))};function Qt(t){var r=t.eventKey,o=t.children,g=xe(r),b=Dt(o,g),h=ee();n.useEffect(function(){if(h)return h.registerPath(r,g),function(){h.unregisterPath(r,g)}},[g]);var C;return h?C=b:C=n.createElement(ja,t,b),n.createElement(Se.Provider,{value:g},C)}var Ba=e("x/xZ");function Zt(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Object(Ba.a)(t)){var o=t.nodeName.toLowerCase(),g=["input","select","textarea","button"].includes(o)||t.isContentEditable||o==="a"&&!!t.getAttribute("href"),b=t.getAttribute("tabindex"),h=Number(b),C=null;return b&&!Number.isNaN(h)?C=h:g&&C===null&&(C=0),g&&t.disabled&&(C=null),C!==null&&(C>=0||r&&C<0)}return!1}function kt(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,o=Object(fn.a)(t.querySelectorAll("*")).filter(function(g){return Zt(g,r)});return Zt(t,r)&&o.unshift(t),o}var mt=null;function pr(){mt=document.activeElement}function vr(){mt=null}function hr(){if(mt)try{mt.focus()}catch(t){}}function gr(t,r){if(r.keyCode===9){var o=kt(t),g=o[r.shiftKey?0:o.length-1],b=g===document.activeElement||t===document.activeElement;if(b){var h=o[r.shiftKey?o.length-1:0];h.focus(),r.preventDefault()}}}var Pt=we.a.LEFT,jt=we.a.RIGHT,Bt=we.a.UP,ft=we.a.DOWN,pt=we.a.ENTER,qt=we.a.ESC,_t=[Bt,ft,Pt,jt];function Ia(t,r,o,g){var b,h,C,O,W="prev",L="next",$="children",J="parent";if(t==="inline"&&g===pt)return{inlineTrigger:!0};var U=(b={},Object(ce.a)(b,Bt,W),Object(ce.a)(b,ft,L),b),ie=(h={},Object(ce.a)(h,Pt,o?L:W),Object(ce.a)(h,jt,o?W:L),Object(ce.a)(h,ft,$),Object(ce.a)(h,pt,$),h),H=(C={},Object(ce.a)(C,Bt,W),Object(ce.a)(C,ft,L),Object(ce.a)(C,pt,$),Object(ce.a)(C,qt,J),Object(ce.a)(C,Pt,o?$:J),Object(ce.a)(C,jt,o?J:$),C),Y={inline:U,horizontal:ie,vertical:H,inlineSub:U,horizontalSub:H,verticalSub:H},le=(O=Y["".concat(t).concat(r?"":"Sub")])===null||O===void 0?void 0:O[g];switch(le){case W:return{offset:-1,sibling:!0};case L:return{offset:1,sibling:!0};case J:return{offset:-1,sibling:!1};case $:return{offset:1,sibling:!1};default:return null}}function Na(t){for(var r=t;r;){if(r.getAttribute("data-menu-list"))return r;r=r.parentElement}return null}function Ma(t,r){for(var o=t||document.activeElement;o;){if(r.has(o))return o;o=o.parentElement}return null}function Ta(t,r){var o=kt(t,!0);return o.filter(function(g){return r.has(g)})}function ea(t,r,o){var g=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!t)return null;var b=Ta(t,r),h=b.length,C=b.findIndex(function(O){return o===O});return g<0?C===-1?C=h-1:C-=1:g>0&&(C+=1),C=(C+h)%h,b[C]}function wa(t,r,o,g,b,h,C,O,W,L){var $=n.useRef(),J=n.useRef();J.current=r;var U=function(){Ye.a.cancel($.current)};return n.useEffect(function(){return function(){U()}},[]),function(ie){var H=ie.which;if([].concat(_t,[pt,qt]).includes(H)){var Y,le,z,q=function(){Y=new Set,le=new Map,z=new Map;var ye=h();return ye.forEach(function(he){var Oe=document.querySelector("[data-menu-id='".concat(Ut(g,he),"']"));Oe&&(Y.add(Oe),z.set(Oe,he),le.set(he,Oe))}),Y};q();var ae=le.get(r),Q=Ma(ae,Y),se=z.get(Q),k=Ia(t,C(se,!0).length===1,o,H);if(!k)return;_t.includes(H)&&ie.preventDefault();var Ee=function(ye){if(ye){var he=ye,Oe=ye.querySelector("a");(Oe==null?void 0:Oe.getAttribute("href"))&&(he=Oe);var Ke=z.get(ye);O(Ke),U(),$.current=Object(Ye.a)(function(){J.current===Ke&&he.focus()})}};if(k.sibling||!Q){var ne;!Q||t==="inline"?ne=b.current:ne=Na(Q);var de=ea(ne,Y,Q,k.offset);Ee(de)}else if(k.inlineTrigger)W(se);else if(k.offset>0)W(se,!0),U(),$.current=Object(Ye.a)(function(){q();var oe=Q.getAttribute("aria-controls"),ye=document.getElementById(oe),he=ea(ye,Y);Ee(he)},5);else if(k.offset<0){var fe=C(se,!0),re=fe[fe.length-2],G=le.get(re);W(re,!1),Ee(G)}}L==null||L(ie)}}var Wa=Math.random().toFixed(5).toString().slice(2),na=0;function Ka(t){var r=Object(Fn.a)(t,{value:t}),o=Object(K.a)(r,2),g=o[0],b=o[1];return n.useEffect(function(){na+=1;var h="".concat(Wa,"-").concat(na);b("rc-menu-uuid-".concat(h))},[]),g}var yr=e("p8sG");function La(t){Promise.resolve().then(t)}var It="__RC_UTIL_PATH_SPLIT__",ta=function(r){return r.join(It)},$a=function(r){return r.split(It)},Nt="rc-menu-more";function Va(){var t=n.useState({}),r=Object(K.a)(t,2),o=r[1],g=Object(n.useRef)(new Map),b=Object(n.useRef)(new Map),h=n.useState([]),C=Object(K.a)(h,2),O=C[0],W=C[1],L=Object(n.useRef)(0),$=Object(n.useCallback)(function(z,q){var ae=ta(q);b.current.set(ae,z),g.current.set(z,ae),L.current+=1;var Q=L.current;La(function(){Q===L.current&&o({})})},[]),J=Object(n.useCallback)(function(z,q){var ae=ta(q);b.current.delete(ae),g.current.delete(z)},[]),U=Object(n.useCallback)(function(z){W(z)},[]),ie=Object(n.useCallback)(function(z,q){var ae=g.current.get(z)||"",Q=$a(ae);return q&&O.includes(Q[0])&&Q.unshift(Nt),Q},[O]),H=Object(n.useCallback)(function(z,q){return z.some(function(ae){var Q=ie(ae,!0);return Q.includes(q)})},[ie]),Y=function(){var q=Object(fn.a)(g.current.keys());return O.length&&q.push(Nt),q},le=Object(n.useCallback)(function(z){var q="".concat(g.current.get(z)).concat(It),ae=new Set;return Object(fn.a)(b.current.keys()).forEach(function(Q){Q.startsWith(q)&&ae.add(b.current.get(Q))}),ae},[]);return{registerPath:$,unregisterPath:J,refreshOverflowKeys:U,isSubPathKey:H,getKeyPath:ie,getKeys:Y,getSubPathKeys:le}}var vt=[],xa=function(r){var o,g,b=r.prefixCls,h=b===void 0?"rc-menu":b,C=r.style,O=r.className,W=r.tabIndex,L=W===void 0?0:W,$=r.children,J=r.direction,U=r.id,ie=r.mode,H=ie===void 0?"vertical":ie,Y=r.inlineCollapsed,le=r.disabled,z=r.disabledOverflow,q=r.subMenuOpenDelay,ae=q===void 0?.1:q,Q=r.subMenuCloseDelay,se=Q===void 0?.1:Q,k=r.forceSubMenuRender,Ee=r.defaultOpenKeys,ne=r.openKeys,de=r.activeKey,fe=r.defaultActiveFirst,re=r.selectable,G=re===void 0?!0:re,oe=r.multiple,ye=oe===void 0?!1:oe,he=r.defaultSelectedKeys,Oe=r.selectedKeys,Ke=r.onSelect,be=r.onDeselect,Fe=r.inlineIndent,Me=Fe===void 0?24:Fe,Ie=r.motion,De=r.defaultMotions,Ae=r.triggerSubMenuAction,$e=Ae===void 0?"hover":Ae,qe=r.builtinPlacements,Ve=r.itemIcon,ze=r.expandIcon,Xe=r.overflowedIndicator,Le=Xe===void 0?"...":Xe,Sn=r.getPopupContainer,an=r.onClick,Qe=r.onOpenChange,ln=r.onKeyDown,yn=r.openAnimation,En=r.openTransitionName,je=Object(Be.a)(r,["prefixCls","style","className","tabIndex","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName"]),Ge=Dt($,vt),_e=n.useState(!1),Ze=Object(K.a)(_e,2),Wn=Ze[0],zn=Ze[1],Kn=n.useRef(),rn=Ka(U),An=J==="rtl",on=n.useMemo(function(){return H==="inline"&&Y?["vertical",Y]:[H,!1]},[H,Y]),Dn=Object(K.a)(on,2),en=Dn[0],un=Dn[1],Pn=n.useState(0),cn=Object(K.a)(Pn,2),ke=cn[0],He=cn[1],Un=ke>=Ge.length-1||en!=="horizontal"||z,Jn=Object(Fn.a)(Ee,{value:ne,postState:function(Z){return Z||vt}}),et=Object(K.a)(Jn,2),bn=et[0],hn=et[1],Gn=n.useState(bn),Cn=Object(K.a)(Gn,2),mn=Cn[0],Hn=Cn[1],jn=en==="inline",Xn=n.useRef(!1);n.useEffect(function(){jn&&Hn(bn)},[bn]),n.useEffect(function(){if(!Xn.current){Xn.current=!0;return}if(jn)hn(mn);else{var te=[];hn(te),Qe==null||Qe(te)}},[jn]);var dn=Va(),Bn=dn.registerPath,ve=dn.unregisterPath,Re=dn.refreshOverflowKeys,Te=dn.isSubPathKey,nn=dn.getKeyPath,Yn=dn.getKeys,gt=dn.getSubPathKeys,Wt=n.useMemo(function(){return{registerPath:Bn,unregisterPath:ve}},[Bn,ve]),Kt=n.useMemo(function(){return{isSubPathKey:Te}},[Te]);n.useEffect(function(){Re(Un?vt:Ge.slice(ke+1).map(function(te){return te.key}))},[ke,Un]);var Lt=Object(Fn.a)(de||fe&&((o=Ge[0])===null||o===void 0?void 0:o.key),{value:de}),nt=Object(K.a)(Lt,2),yt=nt[0],st=nt[1],Et=_n(function(te){st(te)}),$t=_n(function(){st(void 0)}),bt=Object(Fn.a)(he||[],{value:Oe,postState:function(Z){return Array.isArray(Z)?Z:Z==null?vt:[Z]}}),Ct=Object(K.a)(bt,2),tt=Ct[0],In=Ct[1],Ft=function(Z){if(!!G){var Ce=Z.key,Ue=tt.includes(Ce),sn;Ue?sn=tt.filter(function(Zn){return Zn!==Ce}):ye?sn=[].concat(Object(fn.a)(tt),[Ce]):sn=[Ce],In(sn);var xn=Object(me.a)(Object(me.a)({},Z),{},{selectedKeys:sn});Ue?be==null||be(xn):Ke==null||Ke(xn)}},Ot=_n(function(te){an==null||an(qn(te)),Ft(te)}),lt=_n(function(te,Z){var Ce=bn.filter(function(sn){return sn!==te});if(Z)Ce.push(te);else if(en!=="inline"){var Ue=gt(te);Ce=Ce.filter(function(sn){return!Ue.has(sn)})}s()(bn,Ce)||(hn(Ce),Qe==null||Qe(Ce))}),Qn=_n(Sn),ot=function(Z,Ce){var Ue=Ce!=null?Ce:!bn.includes(Z);lt(Z,Ue)},dt=wa(en,yt,An,rn,Kn,Yn,nn,st,ot,ln);n.useEffect(function(){zn(!0)},[]);var Rt=en!=="horizontal"||z?Ge:Ge.map(function(te,Z){return n.createElement(Rn,{key:te.key,overflowDisabled:Z>ke},te)}),St=n.createElement(A,Object(V.a)({id:U,ref:Kn,prefixCls:"".concat(h,"-overflow"),component:"ul",itemComponent:At,className:Pe()(h,"".concat(h,"-root"),"".concat(h,"-").concat(en),O,(g={},Object(ce.a)(g,"".concat(h,"-inline-collapsed"),un),Object(ce.a)(g,"".concat(h,"-rtl"),An),g)),dir:J,style:C,role:"menu",tabIndex:L,data:Rt,renderRawItem:function(Z){return Z},renderRawRest:function(Z){var Ce=Z.length,Ue=Ce?Ge.slice(-Ce):null;return n.createElement(Qt,{eventKey:Nt,title:Le,disabled:Un,internalPopupClose:Ce===0},Ue)},maxCount:en!=="horizontal"||z?A.INVALIDATE:A.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(Z){He(Z)},onKeyDown:dt},je));return n.createElement(zt.Provider,{value:rn},n.createElement(Rn,{prefixCls:h,mode:en,openKeys:bn,rtl:An,disabled:le,motion:Wn?Ie:null,defaultMotions:Wn?De:null,activeKey:yt,onActive:Et,onInactive:$t,selectedKeys:tt,inlineIndent:Me,subMenuOpenDelay:ae,subMenuCloseDelay:se,forceSubMenuRender:k,builtinPlacements:qe,triggerSubMenuAction:$e,getPopupContainer:Qn,itemIcon:Ve,expandIcon:ze,onItemClick:Ot,onOpenChange:lt},n.createElement(Je.Provider,{value:Kt},St),n.createElement(pe.Provider,{value:Wt},Ge)))},za=xa,Ua=function(r){var o=r.className,g=r.title,b=r.eventKey,h=r.children,C=Object(Be.a)(r,["className","title","eventKey","children"]),O=n.useContext(We),W=O.prefixCls,L="".concat(W,"-item-group");return n.createElement("li",Object(V.a)({},C,{onClick:function(J){return J.stopPropagation()},className:Pe()(L,o)}),n.createElement("div",{className:"".concat(L,"-title"),title:typeof g=="string"?g:void 0},g),n.createElement("ul",{className:"".concat(L,"-list")},h))};function Ja(t){var r=t.children,o=Object(Be.a)(t,["children"]),g=xe(o.eventKey),b=Dt(r,g),h=ee();return h?b:n.createElement(Ua,o,b)}function Ga(t){var r=t.className,o=t.style,g=n.useContext(We),b=g.prefixCls,h=ee();return h?null:n.createElement("li",{className:Pe()("".concat(b,"-item-divider"),r),style:o})}var it=za;it.Item=At,it.SubMenu=Qt,it.ItemGroup=Ja,it.Divider=Ga;var Ha=it,Xa=e("eDIo");function Ya(t,r){var o=t.prefixCls,g=t.editable,b=t.locale,h=t.style;return!g||g.showAdd===!1?null:n.createElement("button",{ref:r,type:"button",className:"".concat(o,"-nav-add"),style:h,"aria-label":(b==null?void 0:b.addAriaLabel)||"Add tab",onClick:function(O){g.onEdit("add",{event:O})}},g.addIcon||"+")}var aa=n.forwardRef(Ya);function Qa(t,r){var o=t.prefixCls,g=t.id,b=t.tabs,h=t.locale,C=t.mobile,O=t.moreIcon,W=O===void 0?"More":O,L=t.moreTransitionName,$=t.style,J=t.className,U=t.editable,ie=t.tabBarGutter,H=t.rtl,Y=t.onTabClick,le=Object(n.useState)(!1),z=Object(K.a)(le,2),q=z[0],ae=z[1],Q=Object(n.useState)(null),se=Object(K.a)(Q,2),k=se[0],Ee=se[1],ne="".concat(g,"-more-popup"),de="".concat(o,"-dropdown"),fe=k!==null?"".concat(ne,"-").concat(k):null,re=h==null?void 0:h.dropdownAriaLabel,G=n.createElement(Ha,{onClick:function(Fe){var Me=Fe.key,Ie=Fe.domEvent;Y(Me,Ie),ae(!1)},id:ne,tabIndex:-1,role:"listbox","aria-activedescendant":fe,selectedKeys:[k],"aria-label":re!==void 0?re:"expanded dropdown"},b.map(function(be){return n.createElement(At,{key:be.key,id:"".concat(ne,"-").concat(be.key),role:"option","aria-controls":g&&"".concat(g,"-panel-").concat(be.key),disabled:be.disabled},be.tab)}));function oe(be){for(var Fe=b.filter(function($e){return!$e.disabled}),Me=Fe.findIndex(function($e){return $e.key===k})||0,Ie=Fe.length,De=0;De<Ie;De+=1){Me=(Me+be+Ie)%Ie;var Ae=Fe[Me];if(!Ae.disabled){Ee(Ae.key);return}}}function ye(be){var Fe=be.which;if(!q){[we.a.DOWN,we.a.SPACE,we.a.ENTER].includes(Fe)&&(ae(!0),be.preventDefault());return}switch(Fe){case we.a.UP:oe(-1),be.preventDefault();break;case we.a.DOWN:oe(1),be.preventDefault();break;case we.a.ESC:ae(!1);break;case we.a.SPACE:case we.a.ENTER:k!==null&&Y(k,be);break}}Object(n.useEffect)(function(){var be=document.getElementById(fe);be&&be.scrollIntoView&&be.scrollIntoView(!1)},[k]),Object(n.useEffect)(function(){q||Ee(null)},[q]);var he=Object(ce.a)({},H?"marginLeft":"marginRight",ie);b.length||(he.visibility="hidden",he.order=1);var Oe=Pe()(Object(ce.a)({},"".concat(de,"-rtl"),H)),Ke=C?null:n.createElement(Xa.default,{prefixCls:de,overlay:G,trigger:["hover"],visible:q,transitionName:L,onVisibleChange:ae,overlayClassName:Oe,mouseEnterDelay:.1,mouseLeaveDelay:.1},n.createElement("button",{type:"button",className:"".concat(o,"-nav-more"),style:he,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":ne,id:"".concat(g,"-more"),"aria-expanded":q,onKeyDown:ye},W));return n.createElement("div",{className:Pe()("".concat(o,"-nav-operations"),J),style:$,ref:r},Ke,n.createElement(aa,{prefixCls:o,locale:h,editable:U}))}var Za=n.forwardRef(Qa),Mt=Object(n.createContext)(null),ka=.1,ra=.01,ht=20,ua=Math.pow(.995,ht);function qa(t,r){var o=Object(n.useState)(),g=Object(K.a)(o,2),b=g[0],h=g[1],C=Object(n.useState)(0),O=Object(K.a)(C,2),W=O[0],L=O[1],$=Object(n.useState)(0),J=Object(K.a)($,2),U=J[0],ie=J[1],H=Object(n.useState)(),Y=Object(K.a)(H,2),le=Y[0],z=Y[1],q=Object(n.useRef)();function ae(de){var fe=de.touches[0],re=fe.screenX,G=fe.screenY;h({x:re,y:G}),window.clearInterval(q.current)}function Q(de){if(!!b){de.preventDefault();var fe=de.touches[0],re=fe.screenX,G=fe.screenY;h({x:re,y:G});var oe=re-b.x,ye=G-b.y;r(oe,ye);var he=Date.now();L(he),ie(he-W),z({x:oe,y:ye})}}function se(){if(!!b&&(h(null),z(null),le)){var de=le.x/U,fe=le.y/U,re=Math.abs(de),G=Math.abs(fe);if(Math.max(re,G)<ka)return;var oe=de,ye=fe;q.current=window.setInterval(function(){if(Math.abs(oe)<ra&&Math.abs(ye)<ra){window.clearInterval(q.current);return}oe*=ua,ye*=ua,r(oe*ht,ye*ht)},ht)}}var k=Object(n.useRef)();function Ee(de){var fe=de.deltaX,re=de.deltaY,G=0,oe=Math.abs(fe),ye=Math.abs(re);oe===ye?G=k.current==="x"?fe:re:oe>ye?(G=fe,k.current="x"):(G=re,k.current="y"),r(-G,-G)&&de.preventDefault()}var ne=Object(n.useRef)(null);ne.current={onTouchStart:ae,onTouchMove:Q,onTouchEnd:se,onWheel:Ee},n.useEffect(function(){function de(oe){ne.current.onTouchStart(oe)}function fe(oe){ne.current.onTouchMove(oe)}function re(oe){ne.current.onTouchEnd(oe)}function G(oe){ne.current.onWheel(oe)}return document.addEventListener("touchmove",fe,{passive:!1}),document.addEventListener("touchend",re,{passive:!1}),t.current.addEventListener("touchstart",de,{passive:!1}),t.current.addEventListener("wheel",G),function(){document.removeEventListener("touchmove",fe),document.removeEventListener("touchend",re)}},[])}function _a(){var t=Object(n.useRef)(new Map);function r(g){return t.current.has(g)||t.current.set(g,n.createRef()),t.current.get(g)}function o(g){t.current.delete(g)}return[r,o]}function ia(t,r){var o=n.useRef(t),g=n.useState({}),b=Object(K.a)(g,2),h=b[1];function C(O){var W=typeof O=="function"?O(o.current):O;W!==o.current&&r(W,o.current),o.current=W,h({})}return[o.current,C]}var sa=function(r){var o=r.position,g=r.prefixCls,b=r.extra;if(!b)return null;var h,C=b;return o==="right"&&(h=C.right||!C.left&&C||null),o==="left"&&(h=C.left||null),h?n.createElement("div",{className:"".concat(g,"-extra-content")},h):null};function er(t,r){var o,g=n.useContext(Mt),b=g.prefixCls,h=g.tabs,C=t.className,O=t.style,W=t.id,L=t.animated,$=t.activeKey,J=t.rtl,U=t.extra,ie=t.editable,H=t.locale,Y=t.tabPosition,le=t.tabBarGutter,z=t.children,q=t.onTabClick,ae=t.onTabScroll,Q=Object(n.useRef)(),se=Object(n.useRef)(),k=Object(n.useRef)(),Ee=Object(n.useRef)(),ne=_a(),de=Object(K.a)(ne,2),fe=de[0],re=de[1],G=Y==="top"||Y==="bottom",oe=ia(0,function(te,Z){G&&ae&&ae({direction:te>Z?"left":"right"})}),ye=Object(K.a)(oe,2),he=ye[0],Oe=ye[1],Ke=ia(0,function(te,Z){!G&&ae&&ae({direction:te>Z?"top":"bottom"})}),be=Object(K.a)(Ke,2),Fe=be[0],Me=be[1],Ie=Object(n.useState)(0),De=Object(K.a)(Ie,2),Ae=De[0],$e=De[1],qe=Object(n.useState)(0),Ve=Object(K.a)(qe,2),ze=Ve[0],Xe=Ve[1],Le=Object(n.useState)(0),Sn=Object(K.a)(Le,2),an=Sn[0],Qe=Sn[1],ln=Object(n.useState)(0),yn=Object(K.a)(ln,2),En=yn[0],je=yn[1],Ge=Object(n.useState)(null),_e=Object(K.a)(Ge,2),Ze=_e[0],Wn=_e[1],zn=Object(n.useState)(null),Kn=Object(K.a)(zn,2),rn=Kn[0],An=Kn[1],on=Object(n.useState)(0),Dn=Object(K.a)(on,2),en=Dn[0],un=Dn[1],Pn=Object(n.useState)(0),cn=Object(K.a)(Pn,2),ke=cn[0],He=cn[1],Un=On(new Map),Jn=Object(K.a)(Un,2),et=Jn[0],bn=Jn[1],hn=M(h,et,Ae),Gn="".concat(b,"-nav-operations-hidden"),Cn=0,mn=0;G?J?(Cn=0,mn=Math.max(0,Ae-Ze)):(Cn=Math.min(0,Ze-Ae),mn=0):(Cn=Math.min(0,rn-ze),mn=0);function Hn(te){return te<Cn?Cn:te>mn?mn:te}var jn=Object(n.useRef)(),Xn=Object(n.useState)(),dn=Object(K.a)(Xn,2),Bn=dn[0],ve=dn[1];function Re(){ve(Date.now())}function Te(){window.clearTimeout(jn.current)}qa(Q,function(te,Z){function Ce(Ue,sn){Ue(function(xn){var Zn=Hn(xn+sn);return Zn})}if(G){if(Ze>=Ae)return!1;Ce(Oe,te)}else{if(rn>=ze)return!1;Ce(Me,Z)}return Te(),Re(),!0}),Object(n.useEffect)(function(){return Te(),Bn&&(jn.current=window.setTimeout(function(){ve(0)},100)),Te},[Bn]);function nn(){var te=arguments.length>0&&arguments[0]!==void 0?arguments[0]:$,Z=hn.get(te)||{width:0,height:0,left:0,right:0,top:0};if(G){var Ce=he;J?Z.right<he?Ce=Z.right:Z.right+Z.width>he+Ze&&(Ce=Z.right+Z.width-Ze):Z.left<-he?Ce=-Z.left:Z.left+Z.width>-he+Ze&&(Ce=-(Z.left+Z.width-Ze)),Me(0),Oe(Hn(Ce))}else{var Ue=Fe;Z.top<-Fe?Ue=-Z.top:Z.top+Z.height>-Fe+rn&&(Ue=-(Z.top+Z.height-rn)),Oe(0),Me(Hn(Ue))}}var Yn=T(hn,{width:Ze,height:rn,left:he,top:Fe},{width:an,height:En},{width:en,height:ke},Object(me.a)(Object(me.a)({},t),{},{tabs:h})),gt=Object(K.a)(Yn,2),Wt=gt[0],Kt=gt[1],Lt=h.map(function(te){var Z=te.key;return n.createElement($n,{id:W,prefixCls:b,key:Z,rtl:J,tab:te,closable:te.closable,editable:ie,active:Z===$,tabPosition:Y,tabBarGutter:le,renderWrapper:z,removeAriaLabel:H==null?void 0:H.removeAriaLabel,ref:fe(Z),onClick:function(Ue){q(Z,Ue)},onRemove:function(){re(Z)},onFocus:function(){nn(Z),Re(),J||(Q.current.scrollLeft=0),Q.current.scrollTop=0}})}),nt=wn(function(){var te,Z,Ce,Ue,sn,xn,Zn,Vt,xt,lr=((te=Q.current)===null||te===void 0?void 0:te.offsetWidth)||0,or=((Z=Q.current)===null||Z===void 0?void 0:Z.offsetHeight)||0,ma=((Ce=Ee.current)===null||Ce===void 0?void 0:Ce.offsetWidth)||0,fa=((Ue=Ee.current)===null||Ue===void 0?void 0:Ue.offsetHeight)||0,dr=((sn=k.current)===null||sn===void 0?void 0:sn.offsetWidth)||0,cr=((xn=k.current)===null||xn===void 0?void 0:xn.offsetHeight)||0;Wn(lr),An(or),un(ma),He(fa);var pa=(((Zn=se.current)===null||Zn===void 0?void 0:Zn.offsetWidth)||0)-ma,va=(((Vt=se.current)===null||Vt===void 0?void 0:Vt.offsetHeight)||0)-fa;$e(pa),Xe(va);var ha=(xt=k.current)===null||xt===void 0?void 0:xt.className.includes(Gn);Qe(pa-(ha?0:dr)),je(va-(ha?0:cr)),bn(function(){var ga=new Map;return h.forEach(function(mr){var ya=mr.key,ct=fe(ya).current;ct&&ga.set(ya,{width:ct.offsetWidth,height:ct.offsetHeight,left:ct.offsetLeft,top:ct.offsetTop})}),ga})}),yt=h.slice(0,Wt),st=h.slice(Kt+1),Et=[].concat(Object(fn.a)(yt),Object(fn.a)(st)),$t=Object(n.useState)(),bt=Object(K.a)($t,2),Ct=bt[0],tt=bt[1],In=hn.get($),Ft=Object(n.useRef)();function Ot(){Ye.a.cancel(Ft.current)}Object(n.useEffect)(function(){var te={};return In&&(G?(J?te.right=In.right:te.left=In.left,te.width=In.width):(te.top=In.top,te.height=In.height)),Ot(),Ft.current=Object(Ye.a)(function(){tt(te)}),Ot},[In,G,J]),Object(n.useEffect)(function(){nn()},[$,In,hn,G]),Object(n.useEffect)(function(){nt()},[J,le,$,h.map(function(te){return te.key}).join("_")]);var lt=!!Et.length,Qn="".concat(b,"-nav-wrap"),ot,dt,Rt,St;return G?J?(dt=he>0,ot=he+Ze<Ae):(ot=he<0,dt=-he+Ze<Ae):(Rt=Fe<0,St=-Fe+rn<ze),n.createElement("div",{ref:r,role:"tablist",className:Pe()("".concat(b,"-nav"),C),style:O,onKeyDown:function(){Re()}},n.createElement(sa,{position:"left",extra:U,prefixCls:b}),n.createElement(Ln.default,{onResize:nt},n.createElement("div",{className:Pe()(Qn,(o={},Object(ce.a)(o,"".concat(Qn,"-ping-left"),ot),Object(ce.a)(o,"".concat(Qn,"-ping-right"),dt),Object(ce.a)(o,"".concat(Qn,"-ping-top"),Rt),Object(ce.a)(o,"".concat(Qn,"-ping-bottom"),St),o)),ref:Q},n.createElement(Ln.default,{onResize:nt},n.createElement("div",{ref:se,className:"".concat(b,"-nav-list"),style:{transform:"translate(".concat(he,"px, ").concat(Fe,"px)"),transition:Bn?"none":void 0}},Lt,n.createElement(aa,{ref:Ee,prefixCls:b,locale:H,editable:ie,style:{visibility:lt?"hidden":null}}),n.createElement("div",{className:Pe()("".concat(b,"-ink-bar"),Object(ce.a)({},"".concat(b,"-ink-bar-animated"),L.inkBar)),style:Ct}))))),n.createElement(Za,Object(V.a)({},t,{ref:k,prefixCls:b,tabs:Et,className:!lt&&Gn})),n.createElement(sa,{position:"right",extra:U,prefixCls:b}))}var la=n.forwardRef(er);function nr(t){var r=t.id,o=t.activeKey,g=t.animated,b=t.tabPosition,h=t.rtl,C=t.destroyInactiveTabPane,O=n.useContext(Mt),W=O.prefixCls,L=O.tabs,$=g.tabPane,J=L.findIndex(function(U){return U.key===o});return n.createElement("div",{className:Pe()("".concat(W,"-content-holder"))},n.createElement("div",{className:Pe()("".concat(W,"-content"),"".concat(W,"-content-").concat(b),Object(ce.a)({},"".concat(W,"-content-animated"),$)),style:J&&$?Object(ce.a)({},h?"marginRight":"marginLeft","-".concat(J,"00%")):null},L.map(function(U){return n.cloneElement(U.node,{key:U.key,prefixCls:W,tabKey:U.key,id:r,animated:$,active:U.key===o,destroyInactiveTabPane:C})})))}function oa(t){var r=t.prefixCls,o=t.forceRender,g=t.className,b=t.style,h=t.id,C=t.active,O=t.animated,W=t.destroyInactiveTabPane,L=t.tabKey,$=t.children,J=n.useState(o),U=Object(K.a)(J,2),ie=U[0],H=U[1];n.useEffect(function(){C?H(!0):W&&H(!1)},[C,W]);var Y={};return C||(O?(Y.visibility="hidden",Y.height=0,Y.overflowY="hidden"):Y.display="none"),n.createElement("div",{id:h&&"".concat(h,"-panel-").concat(L),role:"tabpanel",tabIndex:C?0:-1,"aria-labelledby":h&&"".concat(h,"-tab-").concat(L),"aria-hidden":!C,style:Object(me.a)(Object(me.a)({},Y),b),className:Pe()("".concat(r,"-tabpane"),C&&"".concat(r,"-tabpane-active"),g)},(C||ie||o)&&$)}var da=0;function tr(t){return Object(Mn.a)(t).map(function(r){if(n.isValidElement(r)){var o=r.key!==void 0?String(r.key):void 0;return Object(me.a)(Object(me.a)({key:o},r.props),{},{node:r})}return null}).filter(function(r){return r})}function ar(t,r){var o,g=t.id,b=t.prefixCls,h=b===void 0?"rc-tabs":b,C=t.className,O=t.children,W=t.direction,L=t.activeKey,$=t.defaultActiveKey,J=t.editable,U=t.animated,ie=U===void 0?{inkBar:!0,tabPane:!1}:U,H=t.tabPosition,Y=H===void 0?"top":H,le=t.tabBarGutter,z=t.tabBarStyle,q=t.tabBarExtraContent,ae=t.locale,Q=t.moreIcon,se=t.moreTransitionName,k=t.destroyInactiveTabPane,Ee=t.renderTabBar,ne=t.onChange,de=t.onTabClick,fe=t.onTabScroll,re=Object(Be.a)(t,["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"]),G=tr(O),oe=W==="rtl",ye;ie===!1?ye={inkBar:!1,tabPane:!1}:ie===!0?ye={inkBar:!0,tabPane:!0}:ye=Object(me.a)({inkBar:!0,tabPane:!1},Object(tn.a)(ie)==="object"?ie:{});var he=Object(n.useState)(!1),Oe=Object(K.a)(he,2),Ke=Oe[0],be=Oe[1];Object(n.useEffect)(function(){be(Object(Tn.a)())},[]);var Fe=Object(Fn.a)(function(){var je;return(je=G[0])===null||je===void 0?void 0:je.key},{value:L,defaultValue:$}),Me=Object(K.a)(Fe,2),Ie=Me[0],De=Me[1],Ae=Object(n.useState)(function(){return G.findIndex(function(je){return je.key===Ie})}),$e=Object(K.a)(Ae,2),qe=$e[0],Ve=$e[1];Object(n.useEffect)(function(){var je=G.findIndex(function(_e){return _e.key===Ie});if(je===-1){var Ge;je=Math.max(0,Math.min(qe,G.length-1)),De((Ge=G[je])===null||Ge===void 0?void 0:Ge.key)}Ve(je)},[G.map(function(je){return je.key}).join("_"),Ie,qe]);var ze=Object(Fn.a)(null,{value:g}),Xe=Object(K.a)(ze,2),Le=Xe[0],Sn=Xe[1],an=Y;Ke&&!["left","right"].includes(Y)&&(an="top"),Object(n.useEffect)(function(){g||(Sn("rc-tabs-".concat(da)),da+=1)},[]);function Qe(je,Ge){de==null||de(je,Ge),De(je),ne==null||ne(je)}var ln={id:Le,activeKey:Ie,animated:ye,tabPosition:an,rtl:oe,mobile:Ke},yn,En=Object(me.a)(Object(me.a)({},ln),{},{editable:J,locale:ae,moreIcon:Q,moreTransitionName:se,tabBarGutter:le,onTabClick:Qe,onTabScroll:fe,extra:q,style:z,panes:O});return Ee?yn=Ee(En,la):yn=n.createElement(la,En),n.createElement(Mt.Provider,{value:{tabs:G,prefixCls:h}},n.createElement("div",Object(V.a)({ref:r,id:g,className:Pe()(h,"".concat(h,"-").concat(an),(o={},Object(ce.a)(o,"".concat(h,"-mobile"),Ke),Object(ce.a)(o,"".concat(h,"-editable"),J),Object(ce.a)(o,"".concat(h,"-rtl"),oe),o),C)},re),yn,n.createElement(nr,Object(V.a)({destroyInactiveTabPane:k},ln,{animated:ye}))))}var ca=n.forwardRef(ar);ca.TabPane=oa;var rr=ca,ur=rr,Tt=e("MZF8"),vn=e("dEAq"),ir=e("ZpkN"),Er=e("TIsu");function wt(t,r){var o,g=(o=t.match(/\.(\w+)$/))===null||o===void 0?void 0:o[1];return g||(g=r.tsx?"tsx":"jsx"),g}var sr=t=>{var r,o,g,b=Object(n.useRef)(),h=Object(n.useContext)(vn.context),C=h.locale,O=Object(vn.useLocaleProps)(C,t),W=Object(vn.useDemoUrl)(O.identifier),L=O.demoUrl||W,$=(Tt.a===null||Tt.a===void 0?void 0:Tt.a.location.hash)==="#".concat(O.identifier),J=Object.keys(O.sources).length===1,U=Object(vn.useCodeSandbox)((r=O.hideActions)!==null&&r!==void 0&&r.includes("CSB")?null:O),ie=Object(vn.useRiddle)((o=O.hideActions)!==null&&o!==void 0&&o.includes("RIDDLE")?null:O),H=Object(vn.useMotions)(O.motions||[],b.current),Y=Object(X.default)(H,2),le=Y[0],z=Y[1],q=Object(vn.useCopy)(),ae=Object(X.default)(q,2),Q=ae[0],se=ae[1],k=Object(n.useState)("_"),Ee=Object(X.default)(k,2),ne=Ee[0],de=Ee[1],fe=Object(n.useState)(wt(ne,O.sources[ne])),re=Object(X.default)(fe,2),G=re[0],oe=re[1],ye=Object(n.useState)(Boolean(O.defaultShowCode)),he=Object(X.default)(ye,2),Oe=he[0],Ke=he[1],be=Object(n.useState)(Math.random()),Fe=Object(X.default)(be,2),Me=Fe[0],Ie=Fe[1],De=O.sources[ne][G]||O.sources[ne].content,Ae=Object(vn.useTSPlaygroundUrl)(C,De),$e=Object(n.useRef)(),qe=Object(vn.usePrefersColor)(),Ve=Object(X.default)(qe,1),ze=Ve[0];Object(n.useEffect)(()=>{Ie(Math.random())},[ze]);function Xe(Le){de(Le),oe(wt(Le,O.sources[Le]))}return f.a.createElement("div",{style:O.style,className:[O.className,"__dumi-default-previewer",$?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:O.identifier,"data-debug":O.debug||void 0,"data-iframe":O.iframe||void 0},O.iframe&&f.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),f.a.createElement("div",{ref:b,className:"__dumi-default-previewer-demo",style:{transform:O.transform?"translate(0, 0)":void 0,padding:O.compact||O.iframe&&O.compact!==!1?"0":void 0,background:O.background}},O.iframe?f.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(O.iframe).replace(/(\d)$/,"$1px")},key:Me,src:L,ref:$e}):O.children),f.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":O.title},O.title&&f.a.createElement(vn.AnchorLink,{to:"#".concat(O.identifier)},O.title),O.description&&f.a.createElement("div",{dangerouslySetInnerHTML:{__html:O.description}})),f.a.createElement("div",{className:"__dumi-default-previewer-actions"},U&&f.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:U}),ie&&f.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:ie}),O.motions&&f.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:z,onClick:()=>le()}),O.iframe&&f.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:()=>Ie(Math.random())}),!((g=O.hideActions)!==null&&g!==void 0&&g.includes("EXTERNAL"))&&f.a.createElement(vn.Link,{target:"_blank",to:L},f.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),f.a.createElement("span",null),f.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":se,onClick:()=>Q(De)}),G==="tsx"&&Oe&&f.a.createElement(vn.Link,{target:"_blank",to:Ae},f.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),f.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(Oe?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:()=>Ke(!Oe)})),Oe&&f.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!J&&f.a.createElement(ur,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xB7\xB7\xB7",defaultActiveKey:ne,onChange:Xe},Object.keys(O.sources).map(Le=>f.a.createElement(oa,{tab:Le==="_"?"index.".concat(wt(Le,O.sources[Le])):Le,key:Le}))),f.a.createElement("div",{className:"__dumi-default-previewer-source"},f.a.createElement(ir.a,{code:De,lang:G,showCopy:!1}))))},br=gn.default=sr},"80pN":function(Nn,gn,e){"use strict";(function(X){/** @license React v16.14.0
* react-dom-test-utils.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var n=e("MgzW"),f=e("q1tI"),V=e("i8i4"),ce=e("QCnb");function K(c){for(var D="https://reactjs.org/docs/error-decoder.html?invariant="+c,P=1;P<arguments.length;P++)D+="&args[]="+encodeURIComponent(arguments[P]);return"Minified React error #"+c+"; visit "+D+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var tn=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;tn.hasOwnProperty("ReactCurrentDispatcher")||(tn.ReactCurrentDispatcher={current:null}),tn.hasOwnProperty("ReactCurrentBatchConfig")||(tn.ReactCurrentBatchConfig={suspense:null});function Be(c){var D=c,P=c;if(c.alternate)for(;D.return;)D=D.return;else{c=D;do D=c,(D.effectTag&1026)!=0&&(P=D.return),c=D.return;while(c)}return D.tag===3?P:null}function me(c){if(Be(c)!==c)throw Error(K(188))}function at(c){var D=c.alternate;if(!D){if(D=Be(c),D===null)throw Error(K(188));return D!==c?null:c}for(var P=c,pe=D;;){var ee=P.return;if(ee===null)break;var Se=ee.alternate;if(Se===null){if(pe=ee.return,pe!==null){P=pe;continue}break}if(ee.child===Se.child){for(Se=ee.child;Se;){if(Se===P)return me(ee),c;if(Se===pe)return me(ee),D;Se=Se.sibling}throw Error(K(188))}if(P.return!==pe.return)P=ee,pe=Se;else{for(var xe=!1,Je=ee.child;Je;){if(Je===P){xe=!0,P=ee,pe=Se;break}if(Je===pe){xe=!0,pe=ee,P=Se;break}Je=Je.sibling}if(!xe){for(Je=Se.child;Je;){if(Je===P){xe=!0,P=Se,pe=ee;break}if(Je===pe){xe=!0,pe=Se,P=ee;break}Je=Je.sibling}if(!xe)throw Error(K(189))}}if(P.alternate!==pe)throw Error(K(190))}if(P.tag!==3)throw Error(K(188));return P.stateNode.current===P?c:D}function Pe(){return!0}function Mn(){return!1}function Tn(c,D,P,pe){this.dispatchConfig=c,this._targetInst=D,this.nativeEvent=P,c=this.constructor.Interface;for(var ee in c)c.hasOwnProperty(ee)&&((D=c[ee])?this[ee]=D(P):ee==="target"?this.target=pe:this[ee]=P[ee]);return this.isDefaultPrevented=(P.defaultPrevented!=null?P.defaultPrevented:P.returnValue===!1)?Pe:Mn,this.isPropagationStopped=Mn,this}n(Tn.prototype,{preventDefault:function(){this.defaultPrevented=!0;var c=this.nativeEvent;c&&(c.preventDefault?c.preventDefault():typeof c.returnValue!="unknown"&&(c.returnValue=!1),this.isDefaultPrevented=Pe)},stopPropagation:function(){var c=this.nativeEvent;c&&(c.stopPropagation?c.stopPropagation():typeof c.cancelBubble!="unknown"&&(c.cancelBubble=!0),this.isPropagationStopped=Pe)},persist:function(){this.isPersistent=Pe},isPersistent:Mn,destructor:function(){var c=this.constructor.Interface,D;for(D in c)this[D]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=Mn,this._dispatchInstances=this._dispatchListeners=null}}),Tn.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(c){return c.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null},Tn.extend=function(c){function D(){}function P(){return pe.apply(this,arguments)}var pe=this;D.prototype=pe.prototype;var ee=new D;return n(ee,P.prototype),P.prototype=ee,P.prototype.constructor=P,P.Interface=n({},pe.Interface,c),P.extend=pe.extend,Ye(P),P},Ye(Tn);function Fn(c,D,P,pe){if(this.eventPool.length){var ee=this.eventPool.pop();return this.call(ee,c,D,P,pe),ee}return new this(c,D,P,pe)}function fn(c){if(!(c instanceof this))throw Error(K(279));c.destructor(),10>this.eventPool.length&&this.eventPool.push(c)}function Ye(c){c.eventPool=[],c.getPooled=Fn,c.release=fn}var Ln=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined");function wn(c,D){var P={};return P[c.toLowerCase()]=D.toLowerCase(),P["Webkit"+c]="webkit"+D,P["Moz"+c]="moz"+D,P}var On={animationend:wn("Animation","AnimationEnd"),animationiteration:wn("Animation","AnimationIteration"),animationstart:wn("Animation","AnimationStart"),transitionend:wn("Transition","TransitionEnd")},we={},kn={};Ln&&(kn=document.createElement("div").style,"AnimationEvent"in window||(delete On.animationend.animation,delete On.animationiteration.animation,delete On.animationstart.animation),"TransitionEvent"in window||delete On.transitionend.transition);function $n(c){if(we[c])return we[c];if(!On[c])return c;var D=On[c],P;for(P in D)if(D.hasOwnProperty(P)&&P in kn)return we[c]=D[P];return c}var rt=$n("animationend"),M=$n("animationiteration"),I=$n("animationstart"),T=$n("transitionend"),p=null;function s(c){if(p===null)try{var D=("require"+Math.random()).slice(0,7);p=(X&&X[D])("timers").setImmediate}catch(P){p=function(pe){var ee=new MessageChannel;ee.port1.onmessage=pe,ee.port2.postMessage(void 0)}}return p(c)}var y=V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,F=y[11],R=y[12],u=V.unstable_batchedUpdates,l=tn.IsSomeRendererActing,E=typeof ce.unstable_flushAllWithoutAsserting=="function",N=ce.unstable_flushAllWithoutAsserting||function(){for(var c=!1;F();)c=!0;return c};function B(c){try{N(),s(function(){N()?B(c):c()})}catch(D){c(D)}}var S=0,i=!1,j=V.findDOMNode,d=V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,a=d[0],v=d[4],m=d[5],A=d[6],w=d[7],x=d[8],_=d[9],ue=d[10];function ge(){}function pn(c,D){if(!c)return[];if(c=at(c),!c)return[];for(var P=c,pe=[];;){if(P.tag===5||P.tag===6||P.tag===1||P.tag===0){var ee=P.stateNode;D(ee)&&pe.push(ee)}if(P.child)P.child.return=P,P=P.child;else{if(P===c)return pe;for(;!P.sibling;){if(!P.return||P.return===c)return pe;P=P.return}P.sibling.return=P.return,P=P.sibling}}}function We(c,D){if(c&&!c._reactInternalFiber){var P=""+c;throw c=Array.isArray(c)?"an array":c&&c.nodeType===1&&c.tagName?"a DOM node":P==="[object Object]"?"object with keys {"+Object.keys(c).join(", ")+"}":P,Error(K(286,D,c))}}var Ne={renderIntoDocument:function(c){var D=document.createElement("div");return V.render(c,D)},isElement:function(c){return f.isValidElement(c)},isElementOfType:function(c,D){return f.isValidElement(c)&&c.type===D},isDOMComponent:function(c){return!(!c||c.nodeType!==1||!c.tagName)},isDOMComponentElement:function(c){return!!(c&&f.isValidElement(c)&&c.tagName)},isCompositeComponent:function(c){return Ne.isDOMComponent(c)?!1:c!=null&&typeof c.render=="function"&&typeof c.setState=="function"},isCompositeComponentWithType:function(c,D){return Ne.isCompositeComponent(c)?c._reactInternalFiber.type===D:!1},findAllInRenderedTree:function(c,D){return We(c,"findAllInRenderedTree"),c?pn(c._reactInternalFiber,D):[]},scryRenderedDOMComponentsWithClass:function(c,D){return We(c,"scryRenderedDOMComponentsWithClass"),Ne.findAllInRenderedTree(c,function(P){if(Ne.isDOMComponent(P)){var pe=P.className;typeof pe!="string"&&(pe=P.getAttribute("class")||"");var ee=pe.split(/\s+/);if(!Array.isArray(D)){if(D===void 0)throw Error(K(11));D=D.split(/\s+/)}return D.every(function(Se){return ee.indexOf(Se)!==-1})}return!1})},findRenderedDOMComponentWithClass:function(c,D){if(We(c,"findRenderedDOMComponentWithClass"),c=Ne.scryRenderedDOMComponentsWithClass(c,D),c.length!==1)throw Error("Did not find exactly one match (found: "+c.length+") for class:"+D);return c[0]},scryRenderedDOMComponentsWithTag:function(c,D){return We(c,"scryRenderedDOMComponentsWithTag"),Ne.findAllInRenderedTree(c,function(P){return Ne.isDOMComponent(P)&&P.tagName.toUpperCase()===D.toUpperCase()})},findRenderedDOMComponentWithTag:function(c,D){if(We(c,"findRenderedDOMComponentWithTag"),c=Ne.scryRenderedDOMComponentsWithTag(c,D),c.length!==1)throw Error("Did not find exactly one match (found: "+c.length+") for tag:"+D);return c[0]},scryRenderedComponentsWithType:function(c,D){return We(c,"scryRenderedComponentsWithType"),Ne.findAllInRenderedTree(c,function(P){return Ne.isCompositeComponentWithType(P,D)})},findRenderedComponentWithType:function(c,D){if(We(c,"findRenderedComponentWithType"),c=Ne.scryRenderedComponentsWithType(c,D),c.length!==1)throw Error("Did not find exactly one match (found: "+c.length+") for componentType:"+D);return c[0]},mockComponent:function(c,D){return D=D||c.mockTagName||"div",c.prototype.render.mockImplementation(function(){return f.createElement(D,null,this.props.children)}),this},nativeTouchData:function(c,D){return{touches:[{pageX:c,pageY:D}]}},Simulate:null,SimulateNative:{},act:function(c){function D(){S--,l.current=P,R.current=pe}i===!1&&(i=!0,console.error("act(...) is not supported in production builds of React, and might not behave as expected.")),S++;var P=l.current,pe=R.current;l.current=!0,R.current=!0;try{var ee=u(c)}catch(Se){throw D(),Se}if(ee!==null&&typeof ee=="object"&&typeof ee.then=="function")return{then:function(Se,xe){ee.then(function(){1<S||E===!0&&P===!0?(D(),Se()):B(function(Je){D(),Je?xe(Je):Se()})},function(Je){D(),xe(Je)})}};try{S!==1||E!==!1&&P!==!1||N(),D()}catch(Se){throw D(),Se}return{then:function(Se){Se()}}}};function Rn(c){return function(D,P){if(f.isValidElement(D))throw Error(K(228));if(Ne.isCompositeComponent(D))throw Error(K(229));var pe=v[c],ee=new ge;ee.target=D,ee.type=c.toLowerCase();var Se=a(D),xe=new Tn(pe,Se,ee,D);xe.persist(),n(xe,P),pe.phasedRegistrationNames?m(xe):A(xe),V.unstable_batchedUpdates(function(){w(D),ue(xe)}),x()}}Ne.Simulate={};for(var ut in v)Ne.Simulate[ut]=Rn(ut);function qn(c,D){return function(P,pe){var ee=new ge(c);n(ee,pe),Ne.isDOMComponent(P)?(P=j(P),ee.target=P,_(D,1,document,ee)):P.tagName&&(ee.target=P,_(D,1,document,ee))}}[["abort","abort"],[rt,"animationEnd"],[M,"animationIteration"],[I,"animationStart"],["blur","blur"],["canplaythrough","canPlayThrough"],["canplay","canPlay"],["cancel","cancel"],["change","change"],["click","click"],["close","close"],["compositionend","compositionEnd"],["compositionstart","compositionStart"],["compositionupdate","compositionUpdate"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["dragstart","dragStart"],["drag","drag"],["drop","drop"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],["ended","ended"],["error","error"],["focus","focus"],["input","input"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["loadstart","loadStart"],["loadstart","loadStart"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["mousedown","mouseDown"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["playing","playing"],["progress","progress"],["ratechange","rateChange"],["scroll","scroll"],["seeked","seeked"],["seeking","seeking"],["selectionchange","selectionChange"],["stalled","stalled"],["suspend","suspend"],["textInput","textInput"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchmove","touchMove"],["touchstart","touchStart"],[T,"transitionEnd"],["volumechange","volumeChange"],["waiting","waiting"],["wheel","wheel"]].forEach(function(c){var D=c[1];Ne.SimulateNative[D]=qn(D,c[0])}),X.exports=Ne.default||Ne}).call(this,e("hOG+")(Nn))},JjdP:function(Nn,gn,e){"use strict";e.r(gn);var X=e("9og8"),n=e("WmNS"),f=e.n(n),V=e("LtsZ"),ce=`import React, { useRef } from 'react';
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

export default Demo;`,K=`import React from 'react';
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

export default Root;`,Pe=`import React, { useState, useEffect } from 'react';
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

export default SearchInput;`,Fn=`import React from 'react';
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

export default Demo;`,On=`import React, { useState, useRef } from 'react';
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
}`,rt=gn.default={"guide-card":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(f.a.mark(function T(){return f.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"oLxE"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:ce}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"card-render":{version:"0.1.2"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"0.x"}},identifier:"guide-card"}},"chart-render-demo":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(f.a.mark(function T(){var p,s,y,F,R,u,l;return f.a.wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return u=function(S,i){if(!i&&S&&S.__esModule)return S;if(S===null||typeof S!="object"&&typeof S!="function")return{default:S};var j=R(i);if(j&&j.has(S))return j.get(S);var d={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in S)if(v!=="default"&&Object.prototype.hasOwnProperty.call(S,v)){var m=a?Object.getOwnPropertyDescriptor(S,v):null;m&&(m.get||m.set)?Object.defineProperty(d,v,m):d[v]=S[v]}return d.default=S,j&&j.set(S,d),d},R=function(S){if(typeof WeakMap!="function")return null;var i=new WeakMap,j=new WeakMap;return(R=function(a){return a?j:i})(S)},p=e("K+nK"),N.t0=p,N.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return N.t1=N.sent,s=(0,N.t0)(N.t1),N.t2=u,N.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return N.t3=N.sent,y=(0,N.t2)(N.t3),N.next=15,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 15:return F=N.sent,l=function(){var S=(0,y.useState)("Line"),i=(0,s.default)(S,2),j=i[0],d=i[1],a={Line:F.Line,Column:F.Column,PivotTable:F.PivotTable}[j];return y.default.createElement("div",null,y.default.createElement("div",{style:{marginBottom:10}},y.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return d("Line")}},"\u6298\u7EBF\u56FE"),y.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return d("Column")}},"\u67F1\u72B6\u56FE"),y.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return d("PivotTable")}},"\u4EA4\u53C9\u8868")),y.default.createElement(a,{meta:[{id:"date",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF",isDim:!1},{id:"uv",name:"\u8BBF\u5BA2\u6570",isDim:!1}],data:[{date:"20200101",pv:100,uv:50},{date:"20200102",pv:120,uv:60},{date:"20200103",pv:140,uv:70},{date:"20200104",pv:160,uv:80}]}))},N.abrupt("return",l);case 18:case"end":return N.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"chart-render-demo"}},"column-demo":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(f.a.mark(function T(){var p,s,y,F;return f.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return p=e("K+nK"),u.t0=p,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,s=(0,u.t0)(u.t1),u.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return y=u.sent,F=function(){return s.default.createElement(y.Column,{meta:[{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{pv:50,uv:20}]})},u.abrupt("return",F);case 11:case"end":return u.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo"}},"column-demo-1":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(f.a.mark(function T(){var p,s,y,F;return f.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return p=e("K+nK"),u.t0=p,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,s=(0,u.t0)(u.t1),u.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return y=u.sent,F=function(){return s.default.createElement(y.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},u.abrupt("return",F);case 11:case"end":return u.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-1"}},"column-demo-2":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(f.a.mark(function T(){var p,s,y,F;return f.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return p=e("K+nK"),u.t0=p,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,s=(0,u.t0)(u.t1),u.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return y=u.sent,F=function(){return s.default.createElement(y.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},u.abrupt("return",F);case 11:case"end":return u.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-2"}},"column-demo-3":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(f.a.mark(function T(){var p,s,y,F;return f.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return p=e("K+nK"),u.t0=p,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,s=(0,u.t0)(u.t1),u.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return y=u.sent,F=function(){return s.default.createElement(y.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},u.abrupt("return",F);case 11:case"end":return u.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-3"}},"column-demo-4":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(f.a.mark(function T(){var p,s,y,F;return f.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return p=e("K+nK"),u.t0=p,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,s=(0,u.t0)(u.t1),u.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return y=u.sent,F=function(){return s.default.createElement(y.Column,{inverted:!0,label:{position:"middle",layout:[{type:"interval-adjust-position"},{type:"interval-hide-overlap"},{type:"adjust-color"}]},meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},u.abrupt("return",F);case 11:case"end":return u.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-4"}},"line-demo":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(f.a.mark(function T(){var p,s,y,F;return f.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return p=e("K+nK"),u.t0=p,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,s=(0,u.t0)(u.t1),u.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return y=u.sent,F=function(){return s.default.createElement(y.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},u.abrupt("return",F);case 11:case"end":return u.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo"}},"line-demo-1":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(f.a.mark(function T(){var p,s,y,F;return f.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return p=e("K+nK"),u.t0=p,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,s=(0,u.t0)(u.t1),u.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return y=u.sent,F=function(){return s.default.createElement(y.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},u.abrupt("return",F);case 11:case"end":return u.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-1"}},"line-demo-2":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(f.a.mark(function T(){var p,s,y,F;return f.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return p=e("K+nK"),u.t0=p,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,s=(0,u.t0)(u.t1),u.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return y=u.sent,F=function(){return s.default.createElement(y.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"},{id:"pv",name:"\u8BBF\u95EE\u91CF"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20,pv:120},{ds:"2020-12-31",page:"\u9996\u9875",uv:120,pv:1120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21,pv:121},{ds:"2021-01-01",page:"\u9996\u9875",uv:121,pv:1121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15,pv:115},{ds:"2021-01-02",page:"\u9996\u9875",uv:115,pv:1115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40,pv:140},{ds:"2021-01-03",page:"\u9996\u9875",uv:140,pv:1140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31,pv:131},{ds:"2021-01-04",page:"\u9996\u9875",uv:131,pv:1131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32,pv:132},{ds:"2021-01-05",page:"\u9996\u9875",uv:132,pv:1132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30,pv:130},{ds:"2021-01-06",page:"\u9996\u9875",uv:130,pv:1130}]})},u.abrupt("return",F);case 11:case"end":return u.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-2"}},"line-demo-3":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(f.a.mark(function T(){var p,s,y,F;return f.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return p=e("K+nK"),u.t0=p,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,s=(0,u.t0)(u.t1),u.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return y=u.sent,F=function(){return s.default.createElement(y.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},u.abrupt("return",F);case 11:case"end":return u.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-3"}},"line-demo-4":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(f.a.mark(function T(){var p,s,y,F;return f.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return p=e("K+nK"),u.t0=p,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,s=(0,u.t0)(u.t1),u.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return y=u.sent,F=function(){return s.default.createElement(y.Line,{withArea:!0,isStack:!0,isPercent:!0,meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},u.abrupt("return",F);case 11:case"end":return u.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-4"}},"pivot-table-demo":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(f.a.mark(function T(){var p,s,y,F;return f.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return p=e("K+nK"),u.t0=p,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,s=(0,u.t0)(u.t1),u.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return y=u.sent,F=function(){return s.default.createElement(y.PivotTable,{style:{maxHeight:400,overflow:"auto"},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},u.abrupt("return",F);case 11:case"end":return u.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo"}},"pivot-table-demo-1":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(f.a.mark(function T(){var p,s,y,F;return f.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return p=e("K+nK"),u.t0=p,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,s=(0,u.t0)(u.t1),u.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return y=u.sent,F=function(){return s.default.createElement(y.PivotTable,{style:{maxHeight:400,overflow:"auto"},cellRender:function(N,B,S){return s.default.createElement("div",null,s.default.createElement("p",null,"\u53C2\u6570\u8868\uFF1A"),s.default.createElement("p",{style:{color:["red","orange","yellow","green","blue"][Object.keys(B).length]}},N),s.default.createElement("p",null,JSON.stringify(B)),s.default.createElement("p",null,JSON.stringify(S)))},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},u.abrupt("return",F);case 11:case"end":return u.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-1"}},"pivot-table-demo-2":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(f.a.mark(function T(){var p,s,y,F,R,u,l;return f.a.wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return u=function(S,i){if(!i&&S&&S.__esModule)return S;if(S===null||typeof S!="object"&&typeof S!="function")return{default:S};var j=R(i);if(j&&j.has(S))return j.get(S);var d={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var v in S)if(v!=="default"&&Object.prototype.hasOwnProperty.call(S,v)){var m=a?Object.getOwnPropertyDescriptor(S,v):null;m&&(m.get||m.set)?Object.defineProperty(d,v,m):d[v]=S[v]}return d.default=S,j&&j.set(S,d),d},R=function(S){if(typeof WeakMap!="function")return null;var i=new WeakMap,j=new WeakMap;return(R=function(a){return a?j:i})(S)},p=e("K+nK"),N.t0=p,N.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return N.t1=N.sent,s=(0,N.t0)(N.t1),N.t2=u,N.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return N.t3=N.sent,y=(0,N.t2)(N.t3),N.next=15,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 15:return F=N.sent,l=function(){var S=(0,y.useState)(!1),i=(0,s.default)(S,2),j=i[0],d=i[1];return y.default.createElement(y.default.Fragment,null,y.default.createElement("label",null,"\u53EF\u5C55\u5F00/\u6536\u7F29\uFF1A",y.default.createElement("input",{type:"checkbox",value:j,onChange:function(){return d(!j)}})),y.default.createElement(F.PivotTable,{leftExpandable:j,showSubtotal:!1,meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]}))},N.abrupt("return",l);case 18:case"end":return N.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-2"}},"form-render-demo":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(f.a.mark(function T(){var p,s,y,F,R,u,l,E,N,B,S,i,j,d;return f.a.wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return S=function(A,w){if(!w&&A&&A.__esModule)return A;if(A===null||typeof A!="object"&&typeof A!="function")return{default:A};var x=B(w);if(x&&x.has(A))return x.get(A);var _={},ue=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ge in A)if(ge!=="default"&&Object.prototype.hasOwnProperty.call(A,ge)){var pn=ue?Object.getOwnPropertyDescriptor(A,ge):null;pn&&(pn.get||pn.set)?Object.defineProperty(_,ge,pn):_[ge]=A[ge]}return _.default=A,x&&x.set(A,_),_},B=function(A){if(typeof WeakMap!="function")return null;var w=new WeakMap,x=new WeakMap;return(B=function(ue){return ue?x:w})(A)},p=e("K+nK"),v.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return v.t0=p,v.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return v.t1=v.sent,s=(0,v.t0)(v.t1),v.t2=p,v.next=13,e.e(62).then(e.bind(null,"fWQN"));case 13:return v.t3=v.sent,y=(0,v.t2)(v.t3),v.t4=p,v.next=18,e.e(63).then(e.bind(null,"mtLc"));case 18:return v.t5=v.sent,F=(0,v.t4)(v.t5),v.t6=p,v.next=23,e.e(65).then(e.bind(null,"yKVA"));case 23:return v.t7=v.sent,R=(0,v.t6)(v.t7),v.t8=p,v.next=28,e.e(59).then(e.bind(null,"879j"));case 28:return v.t9=v.sent,u=(0,v.t8)(v.t9),v.t10=p,v.next=33,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 33:return v.t11=v.sent,l=(0,v.t10)(v.t11),v.next=37,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 37:return E=v.sent,v.t12=S,v.next=41,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 41:return v.t13=v.sent,N=(0,v.t12)(v.t13),i={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},j=function(m){(0,R.default)(w,m);var A=(0,u.default)(w);function w(){return(0,y.default)(this,w),A.apply(this,arguments)}return(0,F.default)(w,[{key:"render",value:function(){var _=this.props.form;return l.default.createElement("div",null,l.default.createElement(N.default,{form:_,schema:i}),l.default.createElement(s.default,{type:"primary",onClick:_.submit},"\u63D0\u4EA4"))}}]),w}(l.default.Component),d=(0,N.connectForm)(j),v.abrupt("return",d);case 47:case"end":return v.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default connectForm(Demo);`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo"}},"form-render-demo-1":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(f.a.mark(function T(){var p,s,y,F,R,u,l,E,N,B;return f.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return l=function(d,a){if(!a&&d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var v=u(a);if(v&&v.has(d))return v.get(d);var m={},A=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var w in d)if(w!=="default"&&Object.prototype.hasOwnProperty.call(d,w)){var x=A?Object.getOwnPropertyDescriptor(d,w):null;x&&(x.get||x.set)?Object.defineProperty(m,w,x):m[w]=d[w]}return m.default=d,v&&v.set(d,m),m},u=function(d){if(typeof WeakMap!="function")return null;var a=new WeakMap,v=new WeakMap;return(u=function(A){return A?v:a})(d)},p=e("K+nK"),i.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return i.t0=p,i.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return i.t1=i.sent,s=(0,i.t0)(i.t1),i.t2=p,i.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return i.t3=i.sent,y=(0,i.t2)(i.t3),i.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 17:return F=i.sent,i.t4=l,i.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 21:return i.t5=i.sent,R=(0,i.t4)(i.t5),E={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},N=function(){var d=(0,R.useForm)();return y.default.createElement("div",null,y.default.createElement(R.default,{form:d,schema:E}),y.default.createElement(s.default,{type:"primary",onClick:d.submit},"\u63D0\u4EA4"))},B=N,i.abrupt("return",B);case 27:case"end":return i.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo-1"}},"form-render-demo-2":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(f.a.mark(function T(){var p,s,y,F,R,u,l,E,N,B;return f.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return l=function(d,a){if(!a&&d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var v=u(a);if(v&&v.has(d))return v.get(d);var m={},A=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var w in d)if(w!=="default"&&Object.prototype.hasOwnProperty.call(d,w)){var x=A?Object.getOwnPropertyDescriptor(d,w):null;x&&(x.get||x.set)?Object.defineProperty(m,w,x):m[w]=d[w]}return m.default=d,v&&v.set(d,m),m},u=function(d){if(typeof WeakMap!="function")return null;var a=new WeakMap,v=new WeakMap;return(u=function(A){return A?v:a})(d)},p=e("K+nK"),i.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return i.t0=p,i.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return i.t1=i.sent,s=(0,i.t0)(i.t1),i.t2=p,i.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return i.t3=i.sent,y=(0,i.t2)(i.t3),i.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 17:return F=i.sent,i.t4=l,i.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 21:return i.t5=i.sent,R=(0,i.t4)(i.t5),E={displayType:"row",labelWidth:60,type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F",type:"range",format:"date"},siteUrl:{title:"\u7F51\u5740",type:"string",placeholder:"\u6B64\u5904\u5FC5\u586B",required:!0,props:{addonBefore:"https://",addonAfter:".com"}}}},N=function(){var d=(0,R.useForm)(),a=function(m,A){A.length>0?alert("errors:"+JSON.stringify(A)):alert("formData:"+JSON.stringify(m,null,2))};return y.default.createElement("div",null,y.default.createElement(R.default,{form:d,schema:E,onFinish:a}),y.default.createElement(s.default,{type:"primary",onClick:d.submit},"\u63D0\u4EA4"))},B=N,i.abrupt("return",B);case 27:case"end":return i.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-demo-2"}},"migrate-demo":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(f.a.mark(function T(){var p,s,y,F,R,u,l,E;return f.a.wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return l=function(){var i=(0,y.useForm)(),j=function(a,v){v.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(v))):alert(JSON.stringify(a))};return s.default.createElement("div",null,s.default.createElement(y.default,{form:i,schema:u,onFinish:j}),s.default.createElement("button",{onClick:i.submit},"\u63D0\u4EA4"))},R=function(i,j){if(!j&&i&&i.__esModule)return i;if(i===null||typeof i!="object"&&typeof i!="function")return{default:i};var d=F(j);if(d&&d.has(i))return d.get(i);var a={},v=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var m in i)if(m!=="default"&&Object.prototype.hasOwnProperty.call(i,m)){var A=v?Object.getOwnPropertyDescriptor(i,m):null;A&&(A.get||A.set)?Object.defineProperty(a,m,A):a[m]=i[m]}return a.default=i,d&&d.set(i,a),a},F=function(i){if(typeof WeakMap!="function")return null;var j=new WeakMap,d=new WeakMap;return(F=function(v){return v?d:j})(i)},p=e("K+nK"),B.t0=p,B.next=7,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 7:return B.t1=B.sent,s=(0,B.t0)(B.t1),B.t2=R,B.next=12,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 12:return B.t3=B.sent,y=(0,B.t2)(B.t3),u={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}},E=l,B.abrupt("return",E);case 17:case"end":return B.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate-demo"}},"display-demo":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(f.a.mark(function T(){var p,s,y,F,R;return f.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return p=e("K+nK"),l.t0=p,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,s=(0,l.t0)(l.t1),l.t2=p,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,y=(0,l.t2)(l.t3),F=function(N){return{type:"object",displayType:N,properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},objectName:{title:"\u5BF9\u8C61",bind:"obj",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},R=function(){return s.default.createElement("div",null,s.default.createElement("h2",null,"display: row"),s.default.createElement(y.default,{schema:F("row")}),s.default.createElement("h2",null,"display: column"),s.default.createElement(y.default,{schema:F("column")}))},l.abrupt("return",R);case 14:case"end":return l.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`},"demo/display.js":{import:"../demo/display",content:K}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo"}},"display-demo-1":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(f.a.mark(function T(){var p,s,y,F,R;return f.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return p=e("K+nK"),l.t0=p,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,s=(0,l.t0)(l.t1),l.t2=p,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,y=(0,l.t2)(l.t3),F={type:"object",displayType:"inline",properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},R=function(){return s.default.createElement(y.default,{schema:F})},l.abrupt("return",R);case 14:case"end":return l.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:K}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-1"}},"display-demo-2":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(f.a.mark(function T(){var p,s,y,F,R;return f.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return p=e("K+nK"),l.t0=p,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,s=(0,l.t0)(l.t1),l.t2=p,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,y=(0,l.t2)(l.t3),F={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0},check:{title:"box",type:"boolean",default:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},R=function(){return s.default.createElement(y.default,{readOnly:!0,schema:F})},l.abrupt("return",R);case 14:case"end":return l.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form readOnly schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:K}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-2"}},"display-demo-3":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(f.a.mark(function T(){var p,s,y,F,R;return f.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return p=e("K+nK"),l.t0=p,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,s=(0,l.t0)(l.t1),l.t2=p,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,y=(0,l.t2)(l.t3),F={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0,width:"50%"},check:{title:"box",type:"boolean",default:!0,width:"50%",labelWidth:6},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},R=function(){return s.default.createElement(y.default,{labelWidth:"200",schema:F})},l.abrupt("return",R);case 14:case"end":return l.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form labelWidth="200" schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:K}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-3"}},"display-demo-4":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(f.a.mark(function T(){var p,s,y,F,R,u;return f.a.wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return p=e("K+nK"),E.t0=p,E.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return E.t1=E.sent,s=(0,E.t0)(E.t1),E.t2=p,E.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return E.t3=E.sent,y=(0,E.t2)(E.t3),F={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},R=function(){return s.default.createElement(y.default,{schema:F})},u=R,E.abrupt("return",u);case 15:case"end":return E.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:K}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-4"}},"display-demo-5":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(f.a.mark(function T(){var p,s,y,F,R,u;return f.a.wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return p=e("K+nK"),E.t0=p,E.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return E.t1=E.sent,s=(0,E.t0)(E.t1),E.t2=p,E.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return E.t3=E.sent,y=(0,E.t2)(E.t3),F={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},R=function(){return s.default.createElement(y.default,{schema:F})},u=R,E.abrupt("return",u);case 15:case"end":return E.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:K}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-5"}},"display-demo-6":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(f.a.mark(function T(){var p,s,y,F,R,u;return f.a.wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return p=e("K+nK"),E.t0=p,E.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return E.t1=E.sent,s=(0,E.t0)(E.t1),E.t2=p,E.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return E.t3=E.sent,y=(0,E.t2)(E.t3),F={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},R=function(){return s.default.createElement(y.default,{schema:F})},u=R,E.abrupt("return",u);case 15:case"end":return E.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:K}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-6"}},"display-demo-7":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(f.a.mark(function T(){var p,s,y,F,R,u;return f.a.wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return p=e("K+nK"),E.t0=p,E.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return E.t1=E.sent,s=(0,E.t0)(E.t1),E.t2=p,E.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return E.t3=E.sent,y=(0,E.t2)(E.t3),F={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},R=function(){return s.default.createElement(y.default,{schema:F})},u=R,E.abrupt("return",u);case 15:case"end":return E.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:K}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-7"}},"form-methods-demo":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(f.a.mark(function T(){var p,s,y,F,R,u,l,E,N,B,S,i,j;return f.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return S=function(m,A){if(!A&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var w=B(A);if(w&&w.has(m))return w.get(m);var x={},_=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ue in m)if(ue!=="default"&&Object.prototype.hasOwnProperty.call(m,ue)){var ge=_?Object.getOwnPropertyDescriptor(m,ue):null;ge&&(ge.get||ge.set)?Object.defineProperty(x,ue,ge):x[ue]=m[ue]}return x.default=m,w&&w.set(m,x),x},B=function(m){if(typeof WeakMap!="function")return null;var A=new WeakMap,w=new WeakMap;return(B=function(_){return _?w:A})(m)},p=e("K+nK"),a.next=5,e.e(17).then(e.t.bind(null,"lfLe",7));case 5:return a.t0=p,a.next=8,e.e(18).then(e.t.bind(null,"Cp9S",7));case 8:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return a.t2=p,a.next=15,e.e(12).then(e.t.bind(null,"4IMT",7));case 15:return a.t3=a.sent,y=(0,a.t2)(a.t3),a.next=19,e.e(14).then(e.t.bind(null,"tL+A",7));case 19:return a.t4=p,a.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return a.t5=a.sent,F=(0,a.t4)(a.t5),a.t6=p,a.next=27,Promise.resolve().then(e.bind(null,"tJVT"));case 27:return a.t7=a.sent,R=(0,a.t6)(a.t7),a.t8=S,a.next=32,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 32:return a.t9=a.sent,u=(0,a.t8)(a.t9),a.next=36,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 36:return l=a.sent,a.t10=S,a.next=40,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 40:return a.t11=a.sent,E=(0,a.t10)(a.t11),a.next=44,e.e(15).then(e.bind(null,"OH0R"));case 44:return N=a.sent,i=function(){var m=(0,E.useForm)(),A=(0,u.useState)({}),w=(0,R.default)(A,2),x=w[0],_=w[1],ue=function(){(0,N.fakeApi)("xxx/getForm").then(function(We){m.setValues({input1:"hello world",select1:"c"})})};(0,u.useEffect)(function(){(0,N.delay)(1e3).then(function(pn){_({type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}})})},[]);var ge=function(We,Ne){Ne.length>0?F.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(Ne.map(function(Rn){return Rn.name}))):(0,N.fakeApi)("xxx/submit",We).then(function(Rn){return F.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})};return u.default.createElement("div",{style:{width:"400px"}},u.default.createElement(E.default,{form:m,schema:x,onFinish:ge}),u.default.createElement(s.default,null,u.default.createElement(y.default,{onClick:ue},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),u.default.createElement(y.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},j=i,a.abrupt("return",j);case 48:case"end":return a.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:tn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo"}},"form-methods-demo-1":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(f.a.mark(function T(){var p,s,y,F,R,u,l,E,N,B,S,i,j;return f.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return B=function(m,A){if(!A&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var w=N(A);if(w&&w.has(m))return w.get(m);var x={},_=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ue in m)if(ue!=="default"&&Object.prototype.hasOwnProperty.call(m,ue)){var ge=_?Object.getOwnPropertyDescriptor(m,ue):null;ge&&(ge.get||ge.set)?Object.defineProperty(x,ue,ge):x[ue]=m[ue]}return x.default=m,w&&w.set(m,x),x},N=function(m){if(typeof WeakMap!="function")return null;var A=new WeakMap,w=new WeakMap;return(N=function(_){return _?w:A})(m)},p=e("K+nK"),a.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return a.t0=p,a.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.t2=p,a.next=13,Promise.resolve().then(e.bind(null,"PpiC"));case 13:return a.t3=a.sent,y=(0,a.t2)(a.t3),a.next=17,e.e(14).then(e.t.bind(null,"tL+A",7));case 17:return a.t4=p,a.next=20,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 20:return a.t5=a.sent,F=(0,a.t4)(a.t5),a.t6=p,a.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return a.t7=a.sent,R=(0,a.t6)(a.t7),a.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 29:return u=a.sent,a.t8=B,a.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 33:return a.t9=a.sent,l=(0,a.t8)(a.t9),a.next=37,e.e(15).then(e.bind(null,"OH0R"));case 37:return E=a.sent,S={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},i=function(){var m=(0,l.useForm)(),A=function(_,ue){ue.length>0?F.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(ue.map(function(ge){return ge.name}))):(0,E.fakeApi)("xxx/submit",_).then(function(ge){return F.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},w=function(_){var ue=_.data,ge=_.errors,pn=_.schema,We=(0,y.default)(_,["data","errors","schema"]);return(0,E.fakeApi)("xxx/validation").then(function(Ne){return{name:"select1",error:["\u5916\u90E8\u6821\u9A8C\u9519\u8BEF"]}})};return R.default.createElement("div",{style:{width:"400px"}},R.default.createElement(l.default,{form:m,schema:S,beforeFinish:w,onFinish:A}),R.default.createElement(s.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},j=i,a.abrupt("return",j);case 42:case"end":return a.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:tn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-1"}},"form-methods-demo-2":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(f.a.mark(function T(){var p,s,y,F,R,u,l,E,N,B,S,i,j;return f.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return B=function(m,A){if(!A&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var w=N(A);if(w&&w.has(m))return w.get(m);var x={},_=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ue in m)if(ue!=="default"&&Object.prototype.hasOwnProperty.call(m,ue)){var ge=_?Object.getOwnPropertyDescriptor(m,ue):null;ge&&(ge.get||ge.set)?Object.defineProperty(x,ue,ge):x[ue]=m[ue]}return x.default=m,w&&w.set(m,x),x},N=function(m){if(typeof WeakMap!="function")return null;var A=new WeakMap,w=new WeakMap;return(N=function(_){return _?w:A})(m)},p=e("K+nK"),a.next=5,e.e(17).then(e.t.bind(null,"lfLe",7));case 5:return a.t0=p,a.next=8,e.e(18).then(e.t.bind(null,"Cp9S",7));case 8:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return a.t2=p,a.next=15,e.e(12).then(e.t.bind(null,"4IMT",7));case 15:return a.t3=a.sent,y=(0,a.t2)(a.t3),a.next=19,e.e(14).then(e.t.bind(null,"tL+A",7));case 19:return a.t4=p,a.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return a.t5=a.sent,F=(0,a.t4)(a.t5),a.t6=p,a.next=27,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 27:return a.t7=a.sent,R=(0,a.t6)(a.t7),a.next=31,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 31:return u=a.sent,a.t8=B,a.next=35,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 35:return a.t9=a.sent,l=(0,a.t8)(a.t9),a.next=39,e.e(15).then(e.bind(null,"OH0R"));case 39:return E=a.sent,S={type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F\u8303\u56F4",type:"range",format:"date"}}},i=function(){var m=(0,l.useForm)(),A=function(_,ue){ue.length>0?F.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(ue.map(function(ge){return ge.name}))):(0,E.fakeApi)("xxx/submit",_).then(function(ge){return F.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},w=function(){(0,E.fakeApi)("xxx/getForm").then(function(_){m.setValues({startDate:"2020-04-04",endDate:"2020-04-24"})})};return R.default.createElement("div",{style:{width:"400px"}},R.default.createElement(l.default,{form:m,schema:S,onFinish:A}),R.default.createElement(s.default,null,R.default.createElement(y.default,{onClick:w},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),R.default.createElement(y.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},j=i,a.abrupt("return",j);case 44:case"end":return a.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:tn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-2"}},"form-methods-demo-3":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(f.a.mark(function T(){var p,s,y,F,R,u,l,E,N,B,S,i;return f.a.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return N=function(v,m){if(!m&&v&&v.__esModule)return v;if(v===null||typeof v!="object"&&typeof v!="function")return{default:v};var A=E(m);if(A&&A.has(v))return A.get(v);var w={},x=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var _ in v)if(_!=="default"&&Object.prototype.hasOwnProperty.call(v,_)){var ue=x?Object.getOwnPropertyDescriptor(v,_):null;ue&&(ue.get||ue.set)?Object.defineProperty(w,_,ue):w[_]=v[_]}return w.default=v,A&&A.set(v,w),w},E=function(v){if(typeof WeakMap!="function")return null;var m=new WeakMap,A=new WeakMap;return(E=function(x){return x?A:m})(v)},p=e("K+nK"),d.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return d.t0=p,d.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return d.t1=d.sent,s=(0,d.t0)(d.t1),d.next=12,e.e(14).then(e.t.bind(null,"tL+A",7));case 12:return d.t2=p,d.next=15,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 15:return d.t3=d.sent,y=(0,d.t2)(d.t3),d.t4=N,d.next=20,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 20:return d.t5=d.sent,F=(0,d.t4)(d.t5),d.next=24,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 24:return R=d.sent,d.t6=N,d.next=28,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 28:return d.t7=d.sent,u=(0,d.t6)(d.t7),d.next=32,e.e(15).then(e.bind(null,"OH0R"));case 32:return l=d.sent,B={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select1:{title:"\u5355\u9009",type:"string",widget:"select"}}}}},S=function(){var v=(0,u.useForm)(),m=function(){v.setSchemaByPath("obj1.select1",{enum:["nouth","south","east","west"],enumNames:["\u4E1C","\u5357","\u897F","\u5317"]})},A=function(x,_){_.length>0?y.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(_.map(function(ue){return ue.name}))):y.default.info(JSON.stringify(x))};return F.default.createElement("div",{style:{width:"400px"}},F.default.createElement(u.default,{form:v,schema:B,onMount:m,onFinish:A}),F.default.createElement(s.default,{type:"primary",onClick:v.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},i=S,d.abrupt("return",i);case 37:case"end":return d.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:tn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-3"}},"function-demo":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(f.a.mark(function T(){var p,s,y,F,R,u,l,E;return f.a.wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return R=function(i,j){if(!j&&i&&i.__esModule)return i;if(i===null||typeof i!="object"&&typeof i!="function")return{default:i};var d=F(j);if(d&&d.has(i))return d.get(i);var a={},v=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var m in i)if(m!=="default"&&Object.prototype.hasOwnProperty.call(i,m)){var A=v?Object.getOwnPropertyDescriptor(i,m):null;A&&(A.get||A.set)?Object.defineProperty(a,m,A):a[m]=i[m]}return a.default=i,d&&d.set(i,a),a},F=function(i){if(typeof WeakMap!="function")return null;var j=new WeakMap,d=new WeakMap;return(F=function(v){return v?d:j})(i)},p=e("K+nK"),B.t0=p,B.next=6,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 6:return B.t1=B.sent,s=(0,B.t0)(B.t1),B.t2=R,B.next=11,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 11:return B.t3=B.sent,y=(0,B.t2)(B.t3),u={type:"object",properties:{select1:{title:"\u5355\u9009",description:"\u5C1D\u8BD5\u9009\u62E9\u201C\u663E\u793A\u8F93\u5165\u6846\u201D",type:"string",enum:["a","b"],enumNames:["\u9690\u85CF\u8F93\u5165\u6846","\u663E\u793A\u8F93\u5165\u6846"],disabled:"{{rootValue.input1.length > 5}}",default:"a"},input1:{title:"\u8F93\u5165\u6846",description:"\u5C1D\u8BD5\u8F93\u5165\u8D85\u8FC75\u4E2A\u5B57\u7B26",type:"string",hidden:'{{formData.select1 == "a"}}'}}},l=function(){var i=(0,y.useForm)();return s.default.createElement(y.default,{form:i,schema:u})},E=l,B.abrupt("return",E);case 17:case"end":return B.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo1;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo"}},"function-demo-1":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(f.a.mark(function T(){var p,s,y,F,R;return f.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return p=e("K+nK"),l.t0=p,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,s=(0,l.t0)(l.t1),l.t2=p,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return l.t3=l.sent,y=(0,l.t2)(l.t3),l.next=13,e.e(19).then(e.bind(null,"8iYR"));case 13:return F=l.sent,R=function(){return s.default.createElement(y.default,{schema:F.expression})},l.abrupt("return",R);case 16:case"end":return l.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { expression } from '../json/schema';

export default () => <FR schema={expression} />;`},"demo/FR.jsx":{import:"../demo/FR",content:Be},"json/schema.js":{import:"../json/schema",content:me}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo-1"}},"lifeCycle-demo":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(f.a.mark(function T(){var p,s,y,F,R,u,l,E,N;return f.a.wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return R=function(j,d){if(!d&&j&&j.__esModule)return j;if(j===null||typeof j!="object"&&typeof j!="function")return{default:j};var a=F(d);if(a&&a.has(j))return a.get(j);var v={},m=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var A in j)if(A!=="default"&&Object.prototype.hasOwnProperty.call(j,A)){var w=m?Object.getOwnPropertyDescriptor(j,A):null;w&&(w.get||w.set)?Object.defineProperty(v,A,w):v[A]=j[A]}return v.default=j,a&&a.set(j,v),v},F=function(j){if(typeof WeakMap!="function")return null;var d=new WeakMap,a=new WeakMap;return(F=function(m){return m?a:d})(j)},S.t0=R,S.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return S.t1=S.sent,p=(0,S.t0)(S.t1),S.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 9:return s=S.sent,S.t2=R,S.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 13:return S.t3=S.sent,y=(0,S.t2)(S.t3),u=function(j){return new Promise(function(d){return setTimeout(d,j)})},l={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u4E0B\u62C9\u9009\u6846",description:"\u52A0\u8F7D\u4E2D...",type:"string",enum:[],widget:"select"}}},E=function(){var j=(0,y.useForm)(),d=function(){j.setValues({input1:"hello world"}),u(3e3).then(function(v){j.setSchemaByPath("select1",{description:"",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]})})};return p.default.createElement(y.default,{form:j,schema:l,onMount:d})},N=E,S.abrupt("return",N);case 20:case"end":return S.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"lifeCycle-demo"}},"watch-demo":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(f.a.mark(function T(){var p,s,y,F,R,u,l,E;return f.a.wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return R=function(i,j){if(!j&&i&&i.__esModule)return i;if(i===null||typeof i!="object"&&typeof i!="function")return{default:i};var d=F(j);if(d&&d.has(i))return d.get(i);var a={},v=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var m in i)if(m!=="default"&&Object.prototype.hasOwnProperty.call(i,m)){var A=v?Object.getOwnPropertyDescriptor(i,m):null;A&&(A.get||A.set)?Object.defineProperty(a,m,A):a[m]=i[m]}return a.default=i,d&&d.set(i,a),a},F=function(i){if(typeof WeakMap!="function")return null;var j=new WeakMap,d=new WeakMap;return(F=function(v){return v?d:j})(i)},B.t0=R,B.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return B.t1=B.sent,p=(0,B.t0)(B.t1),B.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 9:return s=B.sent,B.t2=R,B.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 13:return B.t3=B.sent,y=(0,B.t2)(B.t3),u={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"}}},l=function(){var i=(0,y.useForm)(),j={"#":function(a){console.log("\u8868\u5355\u7684\u65F6\u65F6\u6570\u636E\u4E3A\uFF1A",a)},input1:function(a){i.setValueByPath("input2",a)}};return p.default.createElement(y.default,{form:i,schema:u,watch:j})},E=l,B.abrupt("return",E);case 19:case"end":return B.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo"}},"watch-demo-1":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(f.a.mark(function T(){var p,s,y,F,R,u,l,E,N,B;return f.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return l=function(d,a){if(!a&&d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var v=u(a);if(v&&v.has(d))return v.get(d);var m={},A=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var w in d)if(w!=="default"&&Object.prototype.hasOwnProperty.call(d,w)){var x=A?Object.getOwnPropertyDescriptor(d,w):null;x&&(x.get||x.set)?Object.defineProperty(m,w,x):m[w]=d[w]}return m.default=d,v&&v.set(d,m),m},u=function(d){if(typeof WeakMap!="function")return null;var a=new WeakMap,v=new WeakMap;return(u=function(A){return A?v:a})(d)},p=e("K+nK"),i.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return i.t0=p,i.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return i.t1=i.sent,s=(0,i.t0)(i.t1),i.t2=l,i.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return i.t3=i.sent,y=(0,i.t2)(i.t3),i.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 17:return F=i.sent,i.t4=l,i.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 21:return i.t5=i.sent,R=(0,i.t4)(i.t5),E={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"radio"}}}}},N=function(){var d=(0,R.useForm)(),a=function(A,w){w.length>0?alert("errorFields:"+JSON.stringify(w)):alert("formData:"+JSON.stringify(A,null,2))},v={input1:function(A){A.length>2?d.setSchemaByPath("obj1.select",function(w){var x=w.enumNames;return{enumNames:x.map(function(_){return _+"a"})}}):d.setSchemaByPath("obj1.select",{enumNames:["\u65E9","\u4E2D","\u665A"]})}};return y.default.createElement("div",null,y.default.createElement(R.default,{form:d,schema:E,onFinish:a,watch:v}),y.default.createElement(s.default,{type:"",style:{marginRight:8},onClick:function(){return d.setSchemaByPath("input2",{title:"\u7F16\u8F91\u6846",format:"textarea"})}},"\u5C06 input \u6539\u4E3A textarea"),y.default.createElement(s.default,{type:"primary",onClick:d.submit},"\u63D0\u4EA4"))},B=N,i.abrupt("return",B);case 27:case"end":return i.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo-1"}},"widget-demo":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(f.a.mark(function T(){var p,s,y,F,R,u,l,E,N,B,S,i,j;return f.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return N=function(m,A){if(!A&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var w=E(A);if(w&&w.has(m))return w.get(m);var x={},_=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ue in m)if(ue!=="default"&&Object.prototype.hasOwnProperty.call(m,ue)){var ge=_?Object.getOwnPropertyDescriptor(m,ue):null;ge&&(ge.get||ge.set)?Object.defineProperty(x,ue,ge):x[ue]=m[ue]}return x.default=m,w&&w.set(m,x),x},E=function(m){if(typeof WeakMap!="function")return null;var A=new WeakMap,w=new WeakMap;return(E=function(_){return _?w:A})(m)},p=e("K+nK"),a.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return a.t0=p,a.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=12,Promise.all([e.e(3),e.e(60)]).then(e.t.bind(null,"cUip",7));case 12:return a.t2=p,a.next=15,Promise.all([e.e(0),e.e(12),e.e(58),e.e(61)]).then(e.t.bind(null,"iJl9",7));case 15:return a.t3=a.sent,y=(0,a.t2)(a.t3),a.t4=p,a.next=20,e.e(64).then(e.bind(null,"0Owb"));case 20:return a.t5=a.sent,F=(0,a.t4)(a.t5),a.t6=N,a.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return a.t7=a.sent,R=(0,a.t6)(a.t7),a.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 29:return u=a.sent,a.t8=N,a.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 33:return a.t9=a.sent,l=(0,a.t8)(a.t9),B={type:"object",properties:{string:{title:"\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6",type:"string",widget:"site"},select:{title:"\u5355\u9009",type:"number",enum:[1,2,3],enumNames:["\u9009\u98791","\u9009\u98792","\u9009\u98793"]}}},S=function(m){return R.default.createElement(y.default,(0,F.default)({addonBefore:"http://",addonAfter:".com"},m))},i=function(){var m=(0,l.useForm)(),A=function(){};return R.default.createElement("div",null,R.default.createElement(l.default,{form:m,schema:B,widgets:{site:S},onFinish:function(x){return alert(JSON.stringify(x,null,2))}}),R.default.createElement(s.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4"))},j=i,a.abrupt("return",j);case 40:case"end":return a.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},identifier:"widget-demo"}},"schema-demo":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(f.a.mark(function T(){var p,s,y,F,R;return f.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return p=e("K+nK"),l.t0=p,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,s=(0,l.t0)(l.t1),l.t2=p,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return l.t3=l.sent,y=(0,l.t2)(l.t3),l.next=13,e.e(19).then(e.bind(null,"8iYR"));case 13:return F=l.sent,R=function(){return s.default.createElement(y.default,{schema:F.basic})},l.abrupt("return",R);case 16:case"end":return l.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { basic } from '../json/schema';

export default () => <FR schema={basic} />;`},"demo/FR.jsx":{import:"../demo/FR",content:Be},"json/schema.js":{import:"../json/schema",content:me}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo"}},"docs-playground":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(f.a.mark(function T(){return f.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"BASV"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:at},"main.js":{import:"./main",content:Pe},"json/simplest.json":{import:"./json/simplest.json",content:Mn},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:Tn},"monaco/index.js":{import:"./monaco",content:Fn},"theme.css":{import:"./theme.css",content:fn},"index.css":{import:"./index.css",content:Ye}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:"^16.0.0"},"react-dom":{version:"^16.0.0"},"deep-equal":{version:"2.0.5"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.3.2"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-simple-code-editor":{version:"0.11.0"},prismjs:{version:"1.23.0"}},identifier:"docs-playground"}},"table-render-advanced":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(f.a.mark(function T(){return f.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"7ZP+"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{tsx:Ln}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.0"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"1.x"}},transform:!0,defaultShowCode:!0,identifier:"table-render-advanced"}},"table-render-demo":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(f.a.mark(function T(){var p,s,y,F,R,u,l,E,N;return f.a.wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return p=e("K+nK"),S.t0=p,S.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return S.t1=S.sent,s=(0,S.t0)(S.t1),S.next=8,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(57)]).then(e.bind(null,"P2DI"));case 8:for(y=S.sent,F=[],R=0;R<6;R++)F.push({id:R.toString(),title:"\u6807\u9898".concat(R+1),created_at:new Date().getTime()});return u={type:"object",properties:{string:{title:"\u6807\u9898",type:"string","ui:width":"30%"},created_at:{title:"\u521B\u5EFA\u65F6\u95F4",type:"string",format:"date","ui:width":"30%"}}},l=[{title:"\u6807\u9898",dataIndex:"title"},{title:"\u521B\u5EFA\u65F6\u95F4",key:"since",dataIndex:"created_at",valueType:"date"},{title:"\u64CD\u4F5C",render:function(j,d){return s.default.createElement("a",{onClick:function(){return alert(j.title)}},"\u7F16\u8F91")}}],E=function(){var j=function(){return{rows:F,total:F.length}};return s.default.createElement(y.TableProvider,null,s.default.createElement(y.Search,{schema:u,api:j}),s.default.createElement(y.Table,{headerTitle:"\u6700\u7B80\u8868\u683C",columns:l,rowKey:"id"}))},N=E,S.abrupt("return",N);case 16:case"end":return S.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Wrapper;`}},dependencies:{react:{version:">=16.8.0"},"table-render":{version:"1.1.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.x"}},transform:!0,defaultShowCode:!0,identifier:"table-render-demo"}},"generator-demo":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(f.a.mark(function T(){var p,s,y,F,R,u;return f.a.wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return p=e("K+nK"),E.t0=p,E.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return E.t1=E.sent,s=(0,E.t0)(E.t1),E.t2=p,E.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(56)]).then(e.bind(null,"nYSz"));case 9:return E.t3=E.sent,y=(0,E.t2)(E.t3),F={schema:{type:"object",properties:{inputName:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string"}}},displayType:"row",showDescIcon:!0,labelWidth:120},R=function(){return s.default.createElement("div",{style:{height:"80vh"}},s.default.createElement(y.default,{defaultValue:F}))},u=R,E.abrupt("return",u);case 15:case"end":return E.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.0.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"generator-demo"}},"generator-modal":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(f.a.mark(function T(){return f.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"PPgD"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:wn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.0.1"},"react-dom":{version:">=16.9.0"}},identifier:"generator-modal"}},"generator-transformer":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(f.a.mark(function T(){return f.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"jktF"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:On}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.0.1"},"react-dom":{version:">=16.9.0"}},identifier:"generator-transformer"}},"generator-settings":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(f.a.mark(function T(){return f.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"M63W"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:we}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.0.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-settings"}},"generator-playground":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(f.a.mark(function T(){return f.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"TYW4"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:kn},"index.less":{import:"./index.less",content:$n}},dependencies:{react:{version:">=16.8.0"},umi:{version:"3.4.20"},"fr-generator":{version:"2.0.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-playground"}}}},TIsu:function(Nn,gn,e){},Zs1V:function(Nn){Nn.exports=JSON.parse("{}")},dKoY:function(Nn,gn,e){"use strict";e.r(gn);var X=e("q1tI"),n=e.n(X),f=e("dEAq"),V=e.n(f),ce=e("0zqC"),K=e("ZpkN"),tn=e("JjdP"),Be=n.a.memo(tn.default["schema-demo"].component);gn.default=me=>(n.a.useEffect(()=>{me!=null&&me.location.hash&&f.AnchorLink.scrollToAnchor(decodeURIComponent(me.location.hash.slice(1)))},[]),n.a.createElement(n.a.Fragment,null,n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"markdown"},n.a.createElement("h1",{id:"\u4E66\u5199\u89C4\u8303"},n.a.createElement(f.AnchorLink,{to:"#\u4E66\u5199\u89C4\u8303","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u4E66\u5199\u89C4\u8303"),n.a.createElement("h2",{id:"\u6982\u8FF0"},n.a.createElement(f.AnchorLink,{to:"#\u6982\u8FF0","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u6982\u8FF0"),n.a.createElement("ol",null,n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement("strong",null,n.a.createElement("code",null,"schema")," \u662F <FormRender/> \u7684\u5FC5\u586B props\uFF0C\u7528\u4E8E\u63CF\u8FF0\u8868\u5355\u7684\u57FA\u672C\u4FE1\u606F\u3001\u7ED3\u6784\u548C\u6821\u9A8C\u3002\u4ED6\u5728\u7ED3\u6784\u4E0A\u4F7F\u7528\u4E86 ",n.a.createElement("code",null,"JSON Schema")," \u56FD\u9645\u89C4\u8303(",n.a.createElement(f.Link,{to:"https://json-schema.org/understanding-json-schema/",target:"_blank"},"Understanding JSON Schema"),")\uFF0C\u4F8B\u5982\uFF1A")),n.a.createElement(K.a,{code:`// \u5BF9\u8C61\u7ED3\u6784\u5982\u4E0B:
{
  "title": "\u5BF9\u8C61",
  "type": "object",
  "properties": {
    "count": {
      "title": "\u6570\u5B57",
      "type": "number"
    }
  }
}
// \u5BF9\u8C61\u5217\u8868\u7ED3\u6784\u5982\u4E0B\uFF1A
{
  "title": "\u5BF9\u8C61\u6570\u7EC4",
  "type": "array",
  "items": {
    "type": "object",
    "properties": {
      "count": {
        "title": "\u6570\u5B57",
        "type": "number"
      }
    }
  }
}`,lang:"json"})),n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement("strong",null,"\u5355\u4E2A schema \u7684\u4E66\u5199\u5206\u4E3A",n.a.createElement("code",null,"\u57FA\u7840\u5C5E\u6027"),", ",n.a.createElement("code",null,"rules")," \u548C ",n.a.createElement("code",null,"props"),"\uFF0C",n.a.createElement("code",null,"\u57FA\u7840\u5C5E\u6027"),"\u4E3A\u5404\u4E2A\u7EC4\u4EF6\u5171\u901A\u7684\u63CF\u8FF0\uFF0C",n.a.createElement("code",null,"rules")," \u63CF\u8FF0\u6821\u9A8C\u8865\u5145\u4FE1\u606F\uFF0C",n.a.createElement("code",null,"props")," \u63CF\u8FF0\u7EC4\u4EF6 props\uFF0C\u4F8B\u5982\uFF1A")),n.a.createElement(K.a,{code:`{
  "type": "object",
  "properties": {
    "count": {
      // \u57FA\u7840\u5C5E\u6027
      "title": "\u4EE3\u53F7",
      "type": "string",
      "min": 6,
      // rules (\u8865\u5145\u6821\u9A8C\u4FE1\u606F)
      "rules": [
        {
          "pattern": "^[A-Za-z0-9]+$",
          "message": "\u53EA\u5141\u8BB8\u586B\u5199\u82F1\u6587\u5B57\u6BCD\u548C\u6570\u5B57"
        }
      ],
      // props (\u8865\u5145antd\u7EC4\u4EF6props)
      "props": {
        "allowClear": true
      }
    }
  }
}`,lang:"json"})),n.a.createElement("li",null,n.a.createElement("p",null,"\u201C\u6211\u8981\u4E00\u4E2A\u591A\u9009\u7EC4\u4EF6\uFF0C\u8BE5\u600E\u4E48\u5199\u5B83\u7684 schema\uFF1F\u201D \u5F88\u591A\u540C\u5B66\u9605\u8BFB schema \u6587\u6863\u7684\u76EE\u7684\u53EA\u662F\u5982\u6B64\uFF0C\u5EFA\u8BAE\u6253\u5F00 ",n.a.createElement(f.Link,{to:"/playground"},"playground"),", \u70B9\u51FB\u201C\u57FA\u7840\u63A7\u4EF6\u201D\u3002\u8FD9\u91CC\u6709\u6240\u6709 FormRender \u652F\u6301\u7684\u5C55\u793A\u4EE5\u53CA\u5BF9\u4E8E\u7684 schema"))),n.a.createElement("h2",{id:"\u57FA\u7840\u5C5E\u6027"},n.a.createElement(f.AnchorLink,{to:"#\u57FA\u7840\u5C5E\u6027","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u57FA\u7840\u5C5E\u6027"),n.a.createElement("p",null,"\u4E3A\u4E86\u66F4\u597D\u7406\u89E3\u57FA\u7840\u5C5E\u6027\u7684\u4F5C\u7528\uFF0C\u4ECE FormRender \u5185\u90E8\u5B9E\u73B0\u7684\u89D2\u5EA6\uFF1A"),n.a.createElement("ol",null,n.a.createElement("li",null,n.a.createElement("code",null,"type"),", ",n.a.createElement("code",null,"format"),", ",n.a.createElement("code",null,"enum")," \u548C ",n.a.createElement("code",null,"widget")," \u5B57\u6BB5\u51B3\u5B9A\u4E86\u4F7F\u7528\u54EA\u4E2A\u7EC4\u4EF6\u6765\u6E32\u67D3\u3002\u5177\u4F53\u5224\u65AD\u89C4\u5219\u89C1",n.a.createElement(f.AnchorLink,{to:"/form-render/advanced/widget#%E5%86%85%E7%BD%AE%E7%BB%84%E4%BB%B6"},"\u5185\u7F6E\u7EC4\u4EF6")),n.a.createElement("li",null,n.a.createElement("code",null,"type"),", ",n.a.createElement("code",null,"format"),", ",n.a.createElement("code",null,"min"),", ",n.a.createElement("code",null,"max"),", ",n.a.createElement("code",null,"required")," \u548C ",n.a.createElement("code",null,"rules")," \u5B57\u6BB5\u7528\u4E8E\u505A\u6821\u9A8C\u5224\u65AD"),n.a.createElement("li",null,n.a.createElement("code",null,"props")," \u5B57\u6BB5\u7528\u4E8E\u8865\u5145\u7EC4\u4EF6\u652F\u6301\u7684\u66F4\u4E3A\u7EC6\u81F4\u7684\u5C5E\u6027")),n.a.createElement("p",null,"\u4E00\u4E2A\u7B80\u5355\u7684\u4F7F\u7528\u5404\u79CD\u201C\u57FA\u7840\u5C5E\u6027\u201D\u7684\u6837\u4F8B\u5982\u4E0B\uFF1A"),n.a.createElement(K.a,{code:`export const basic = {
  displayType: 'row',
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
};`,lang:"js"})),n.a.createElement(ce.default,tn.default["schema-demo"].previewerProps,n.a.createElement(Be,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h3",{id:"title"},n.a.createElement(f.AnchorLink,{to:"#title","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"title"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1A",n.a.createElement("code",null,"string")),n.a.createElement("li",null,'\u8BE6\u7EC6\uFF1A\u8868\u5355\u7684\u6807\u9898\u4FE1\u606F\uFF0C\u4F5C\u4E3A label \u5C55\u793A\uFF0C\u6CE8\u610F title \u4E3A""\u65F6\u5360\u4F4D\uFF0Ctitle \u4E0D\u5199\u65F6\u4E0D\u5360\u4F4D')),n.a.createElement("h3",{id:"description"},n.a.createElement(f.AnchorLink,{to:"#description","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"description"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1A",n.a.createElement("code",null,"string")),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u8868\u5355\u7684\u63CF\u8FF0\u4FE1\u606F\uFF0C\u5E38\u5C06\u586B\u5199\u6CE8\u610F\u70B9\u653E\u5165\u6B64\u53C2\u6570")),n.a.createElement("h3",{id:"type"},n.a.createElement(f.AnchorLink,{to:"#type","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"type"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Aone of [",n.a.createElement("code",null,"'string'"),", ",n.a.createElement("code",null,"'number'"),", ",n.a.createElement("code",null,"'boolean'"),", ",n.a.createElement("code",null,"'array'"),", ",n.a.createElement("code",null,"'object'"),", ",n.a.createElement("code",null,"'range'"),", ",n.a.createElement("code",null,"'html'"),"]"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1Atype \u63CF\u8FF0\u91CC\u7EC4\u4EF6\u7684\u503C\u7684\u6570\u636E\u7C7B\u578B\u3002\u7528\u4E8E\u6821\u9A8C\u6570\u636E\u7C7B\u578B\uFF0C\u4E5F\u7528\u4E8E\u5224\u65AD\u4F7F\u7528\u54EA\u4E2A\u7EC4\u4EF6\u6765\u6E32\u67D3\uFF0C\u4EE5\u53CA\u6821\u9A8C\u8868\u5355\u6570\u636E\u3002")),n.a.createElement("p",null,"\u6CE8 1\uFF1Arange \u662F FormRender \u72EC\u6709\u7684\uFF0C\u7528\u4E8E\u63CF\u8FF0\u533A\u95F4\u7C7B\u7EC4\u4EF6\uFF0C\u4F8B\u5982\u65F6\u95F4\u533A\u95F4\u9009\u62E9\u3002"),n.a.createElement(K.a,{code:`{
  "title": "\u65E5\u671F\u8303\u56F4",
  "type": "range",
  "format": "dateTime",
  "placeholder": ["\u5F00\u59CB", "\u7ED3\u675F"]
}`,lang:"json"}),n.a.createElement("p",null,"\u6CE8 2\uFF1Ahtml \u662F FormRender \u72EC\u6709\u7684\uFF0C\u7528\u4E8E\u63CF\u8FF0\u6587\u672C\u7C7B\u7EC4\u4EF6"),n.a.createElement(K.a,{code:`"html": {
  "title": "\u7EAF\u5B57\u7B26\u4E32",
  "type": "html",
  "default": "hello world"
}`,lang:"json"}),n.a.createElement("h3",{id:"format"},n.a.createElement(f.AnchorLink,{to:"#format","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"format"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("p",null,"\u7C7B\u578B\uFF1Aone of [",n.a.createElement("code",null,"'image'"),", ",n.a.createElement("code",null,"'textarea'"),", ",n.a.createElement("code",null,"'color'"),", ",n.a.createElement("code",null,"'email'"),", ",n.a.createElement("code",null,"'url'"),", ",n.a.createElement("code",null,"'dateTime'"),", ",n.a.createElement("code",null,"'date'"),", ",n.a.createElement("code",null,"'time'"),", ",n.a.createElement("code",null,"'upload'"),"]")),n.a.createElement("li",null,n.a.createElement("p",null,"\u8BE6\u7EC6\uFF1A\u7528\u6765\u63CF\u8FF0\u8F93\u5165\u6846\u7684\u683C\u5F0F\uFF0C\u8F85\u52A9 type \u4E00\u540C\u7528\u4E8E\u5224\u65AD\u4F7F\u7528\u54EA\u4E2A\u7EC4\u4EF6\u6765\u6E32\u67D3\uFF0C\u4EE5\u53CA\u6821\u9A8C\u8868\u5355\u6570\u636E"),n.a.createElement(K.a,{code:`// \u9ED8\u8BA4 input
"input": {
  "title": "\u7B80\u5355\u8F93\u5165\u6846",
  "type": "string",
}
// textarea
"textarea": {
  "title": "\u7B80\u5355\u6587\u672C\u7F16\u8F91\u6846",
  "type": "string",
  "format": "textarea"
}
// \u989C\u8272\u7EC4\u4EF6
"color": {
  "title": "\u989C\u8272\u9009\u62E9",
  "type": "string",
  "format": "color"
}
// \u65E5\u671F\u7EC4\u4EF6
"date": {
  "title": "\u65E5\u671F\u9009\u62E9",
  "type": "string",
  "format": "date" // "dateTime"
}
// \u65F6\u95F4\u7EC4\u4EF6
"time": {
  "title": "\u65F6\u95F4\u9009\u62E9",
  "type": "string",
  "format": "time"
}
// \u56FE\u7247\u94FE\u63A5\u7EC4\u4EF6
"image": {
  "title": "\u56FE\u7247\u5C55\u793A",
  "type": "string",
  "format": "image"
}`,lang:"json"}))),n.a.createElement("h3",{id:"default"},n.a.createElement(f.AnchorLink,{to:"#default","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"default"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("p",null,"\u7C7B\u578B\uFF1Aany")),n.a.createElement("li",null,n.a.createElement("p",null,"\u8BE6\u7EC6\uFF1A\u7EC4\u4EF6\u7684\u9ED8\u8BA4\u503C\uFF0C\u6CE8\u610F\u9ED8\u8BA4\u7684\u5BF9\u8C61\u7EC4\u4EF6\u4F7F\u7528 default \u65E0\u6548\uFF08\u5176\u503C\u4F1A\u7531\u5B50\u5143\u7D20\u503C\u51B3\u5B9A\uFF09\uFF0C\u5176\u4ED6\u7C7B\u578B\u5305\u62EC array \u90FD\u53EF\u4EE5\u4F7F\u7528 default\uFF1A"),n.a.createElement(K.a,{code:`"list": {
  "type": "array",
  "items": {
    "type": "object",
    "properties": {
      "x": {
        "type": "string",
      }
    }
  },
  "default": [{ "x": "a" }, { "x": "b" }]
}`,lang:"json"}))),n.a.createElement("h3",{id:"required"},n.a.createElement(f.AnchorLink,{to:"#required","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"required"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Aboolean"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u7528\u4E8E\u5224\u65AD\u662F\u5426\u5FC5\u586B")),n.a.createElement(K.a,{code:`"requiredInput": {
  "title": "\u8F93\u5165\u6846",
  "type": "string",
  "required": true
}`,lang:"json"}),n.a.createElement("h3",{id:"placeholder"},n.a.createElement(f.AnchorLink,{to:"#placeholder","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"placeholder"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Astring"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1AInput \u7B49\u5143\u7D20\u7684 placeholder\u3002\u8FD9\u4E2A\u5C5E\u6027\u592A\u5E38\u7528\u4E86\uFF0C\u867D\u7136\u4E0D\u662F\u6BCF\u4E2A\u7EC4\u4EF6\u90FD\u6709\uFF0C\u4F46 80%\u4EE5\u4E0A\u90FD\u6709\uFF0C\u6240\u4EE5\u51B3\u5B9A\u653E\u5728\u201C\u57FA\u7840\u5C5E\u6027\u201D\u3002\u6CE8\u610F placeholder \u7684\u503C\u9075\u5FAA\u5E95\u5C42\u5BF9\u5E94\u7EC4\u4EF6\u6240\u9700\u8981\u7684\u503C\u7684\u4E66\u5199\u89C4\u8303\uFF1A")),n.a.createElement(K.a,{code:`"dateRange": {
  "title": "\u65E5\u671F\u8303\u56F4",
  "type": "range",
  "format": "dateTime",
  "placeholder": ["\u5F00\u59CB", "\u7ED3\u675F"]
}`,lang:"js"}),n.a.createElement("h3",{id:"bind"},n.a.createElement(f.AnchorLink,{to:"#bind","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"bind"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Astring | string[] | false"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A")),n.a.createElement("ol",null,n.a.createElement("li",null,"\u5F53\u670D\u52A1\u7AEF\u63A5\u53E3\u83B7\u53D6\u7684\u5B57\u6BB5\u4E0E\u4F60\u5E0C\u671B\u7684\u8868\u5355\u5C55\u793A\u7ED3\u6784\u4E0D\u540C\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7 bind \u5B57\u6BB5\u7ED1\u5B9A\u7684\u65B9\u5F0F\u6307\u660E\u8868\u5355\u7684\u67D0\u4E2A\u5B57\u6BB5\u5BF9\u5E94\u7684\u662F\u5916\u90E8\u6570\u636E\u7684\u53E6\u4E00\u4E2A\u5B57\u6BB5\u3002\u8BE6\u7EC6\u4F8B\u5B50\u89C1 ",n.a.createElement(f.Link,{to:"/form-render/advanced/form-methods"},"\u201C\u8868\u5355\u4E0E\u5916\u754C\u7684\u4EA4\u4E92\u201D")," \u7684\u4F8B 3"),n.a.createElement("li",null,"\u7528\u6237\u5E76\u4E0D\u5E0C\u671B\u7EAF\u5C55\u793A\u7684\u5B57\u6BB5\u4E5F\u51FA\u73B0\u5728\u8868\u5355\u4E2D\uFF0C\u6B64\u65F6\uFF0C\u4F7F\u7528 bind: ",n.a.createElement("code",null,"false")," \u53EF\u907F\u514D\u5B57\u6BB5\u5728\u63D0\u4EA4\u65F6\u51FA\u73B0"),n.a.createElement("li",null,"\u6CE8\u610F\uFF1A\u8BF7\u4E0D\u8981 bind \u4E00\u4E2A\u6570\u7EC4\u7ED3\u6784\u4E0B\u9762\u7684\u5B57\u6BB5\uFF0C\u76EE\u524D\u6CA1\u6709\u5BF9\u6B64\u8FDB\u884C\u5904\u7406\uFF0C\u6240\u4EE5\u4F1A\u65E0\u6548\uFF08\u5728\u672A\u6765\u8FD9\u4E2A\u9650\u5236\u4F1A\u89E3\u9664\uFF09")),n.a.createElement("h3",{id:"min-0x-\u7248\u672C-minminitem-\u548C-minlength-\u7EDF\u4E00\u5230-min"},n.a.createElement(f.AnchorLink,{to:"#min-0x-\u7248\u672C-minminitem-\u548C-minlength-\u7EDF\u4E00\u5230-min","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"min (0.x \u7248\u672C ",n.a.createElement("code",null,"min"),",",n.a.createElement("code",null,"minItem")," \u548C ",n.a.createElement("code",null,"minLength")," \u7EDF\u4E00\u5230 ",n.a.createElement("code",null,"min"),")"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Aint"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u6700\u5C0F\u503C\u3002type:string/array \u65F6\u4EE3\u8868\u6700\u5C0F\u957F\u5EA6\uFF0Ctype:number \u65F6\u4EE3\u8868\u6700\u5C0F\u503C")),n.a.createElement("h3",{id:"max-0x-\u7248\u672C-maxmaxitem-\u548C-maxlength-\u7EDF\u4E00\u5230-max"},n.a.createElement(f.AnchorLink,{to:"#max-0x-\u7248\u672C-maxmaxitem-\u548C-maxlength-\u7EDF\u4E00\u5230-max","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"max (0.x \u7248\u672C ",n.a.createElement("code",null,"max"),",",n.a.createElement("code",null,"maxItem")," \u548C ",n.a.createElement("code",null,"maxLength")," \u7EDF\u4E00\u5230 ",n.a.createElement("code",null,"max"),")"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Aint"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u6700\u5927\u503C\u3002type:string/array \u65F6\u4EE3\u8868\u6700\u5927\u957F\u5EA6\uFF0Ctype:number \u65F6\u4EE3\u8868\u6700\u5927\u503C")),n.a.createElement("h3",{id:"disabled-0x-\u7248\u672C-uidisabled"},n.a.createElement(f.AnchorLink,{to:"#disabled-0x-\u7248\u672C-uidisabled","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"disabled (0.x \u7248\u672C ",n.a.createElement("code",null,"ui:disabled"),")"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Aboolean"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u7EC4\u4EF6\u662F\u5426\u7981\u7528\u72B6\u6001")),n.a.createElement("h3",{id:"readonly-0x-\u7248\u672C-uireadonly"},n.a.createElement(f.AnchorLink,{to:"#readonly-0x-\u7248\u672C-uireadonly","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"readOnly (0.x \u7248\u672C ",n.a.createElement("code",null,"ui:readonly"),")"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Aboolean"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u7EC4\u4EF6\u662F\u5426\u53EA\u8BFB\u72B6\u6001")),n.a.createElement("h3",{id:"hidden-0x-\u7248\u672C-uihidden"},n.a.createElement(f.AnchorLink,{to:"#hidden-0x-\u7248\u672C-uihidden","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"hidden (0.x \u7248\u672C ",n.a.createElement("code",null,"ui:hidden"),")"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Aboolean"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u7EC4\u4EF6\u662F\u5426\u9690\u85CF\u72B6\u6001")),n.a.createElement("h3",{id:"displaytype-0x-\u7248\u672C-uidisplaytype"},n.a.createElement(f.AnchorLink,{to:"#displaytype-0x-\u7248\u672C-uidisplaytype","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"displayType (0.x \u7248\u672C ",n.a.createElement("code",null,"ui:displayType"),")"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1A",n.a.createElement("code",null,"'row'")," | ",n.a.createElement("code",null,"'column'")),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1ALabel \u4E0E Field \u7684\u5C55\u793A\u5173\u7CFB\uFF0Crow \u8868\u793A\u5E76\u6392\u5C55\u793A\uFF0Ccolumn \u8868\u793A\u4E24\u6392\u5C55\u793A")),n.a.createElement("h3",{id:"width-0x-\u7248\u672C-uiwidth"},n.a.createElement(f.AnchorLink,{to:"#width-0x-\u7248\u672C-uiwidth","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"width (0.x \u7248\u672C ",n.a.createElement("code",null,"ui:width"),")"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Astring"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u5355\u4E2A\u5143\u7D20\u7684\u5C55\u793A\u5BBD\u5EA6\uFF08\u5E26 label \u4E00\u8D77\uFF09\uFF0C\u4F8B\u5982 '20%'")),n.a.createElement("h3",{id:"labelwidth-0x-\u7248\u672C-uilabelwidth"},n.a.createElement(f.AnchorLink,{to:"#labelwidth-0x-\u7248\u672C-uilabelwidth","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"labelWidth (0.x \u7248\u672C ",n.a.createElement("code",null,"ui:labelWidth"),")"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Anumber | string"),n.a.createElement("li",null,"\u9ED8\u8BA4\u503C\uFF1A110"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1Alabel \u7684\u5BBD\u5EA6\uFF0C\u6570\u5B57\u503C\u5355\u4F4D\u4E3A px\uFF0C\u4E5F\u53EF\u4F7F\u7528'20%'/'2rem'\u7B49")),n.a.createElement("h3",{id:"classname-0x-\u7248\u672C-uiclassname"},n.a.createElement(f.AnchorLink,{to:"#classname-0x-\u7248\u672C-uiclassname","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"className (0.x \u7248\u672C ",n.a.createElement("code",null,"ui:className"),")"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Astring"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u6307\u660E\u5355\u4E2A\u8868\u5355\u5143\u7D20\u7684 className\uFF0C\u65B9\u4FBF\u81EA\u5B9A\u4E49\u6837\u5F0F")),n.a.createElement("p",null,"\u4F8B\u5982\u5982\u4E0B\u7684 schema \u4F1A\u5728\u751F\u6210\u5143\u7D20\u7684 ",n.a.createElement("code",null,"fr-field")," \u8FD9\u5C42\u6DFB\u52A0\u4E0A\u7528\u6237\u5B9A\u4E49\u7684 ",n.a.createElement("code",null,"my-className")),n.a.createElement(K.a,{code:`audio_on_mic_limit: {
  className: 'my-className',
  title: '\u540C\u65F6\u652F\u6301\u8FDE\u9EA6\u4EBA\u6570',
  default: '1',
  enum: ['1', '2', '3'],
  enumNames: ['1\u4EBA', '2\u4EBA', '3\u4EBA'],
  type: 'string',
  widget: 'radio',
  labelWidth: 145,
}`,lang:"js"}),n.a.createElement("img",{src:"https://img.alicdn.com/imgextra/i2/O1CN01iUmLkw1pyzJYsV2fM_!!6000000005430-2-tps-541-119.png",width:"600px"}),n.a.createElement("h3",{id:"widget-0x-\u7248\u672C-uiwidget"},n.a.createElement(f.AnchorLink,{to:"#widget-0x-\u7248\u672C-uiwidget","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"widget (0.x \u7248\u672C ",n.a.createElement("code",null,"ui:widget"),")"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Astring"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u6307\u5B9A\u4F7F\u7528\u54EA\u4E2A\u7EC4\u4EF6\u6765\u6E32\u67D3\uFF0C\u662F\u4F18\u5148\u7EA7\u6700\u9AD8\u7684\u4E00\u4E2A\u5B57\u6BB5\u3002\u7528\u4E8E\u660E\u786E\u6307\u5B9A\u4F7F\u7528\u67D0\u4E2A\u201C\u5185\u7F6E\u7EC4\u4EF6\u201D\u6216\u201C\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u201D\u3002\u4F8B\u5982\uFF1A")),n.a.createElement(K.a,{code:`{
  "title": "\u5355\u9009",
  "type": "string",
  "enum": ["hz", "wh", "gy"],
  "enumNames": ["\u676D\u5DDE", "\u6B66\u6C49", "\u8D35\u9633"],
  "widget": "select" // \u660E\u786E\u6307\u660E\u4F7F\u7528\u4E0B\u62C9\u9009\u62E9\u7EC4\u4EF6
}`,lang:"json"}),n.a.createElement("p",null,"FR \u9ED8\u8BA4\u652F\u6301\u7684\u5185\u7F6E\u7EC4\u4EF6\uFF0C\u4EE5\u53CA\u8BE6\u7EC6\u5339\u914D\u89C4\u5219\u89C1",n.a.createElement(f.Link,{to:"/form-render/schema/inner-widget"},"\u5185\u7F6E\u7EC4\u4EF6"),"\u3002"),n.a.createElement("p",null,n.a.createElement("code",null,"widget"),"\u4E5F\u53EF\u4EE5\u7528\u4E8E\u5339\u914D\u201C\u81EA\u5B9A\u4E49\u201D\u7684\u7EC4\u4EF6\uFF0C\u5982\u4F55\u4F7F\u7528 ",n.a.createElement("code",null,"widget")," \u5B57\u6BB5\u548C ",n.a.createElement("code",null,"widgets")," props \u6765\u505A\u5B9A\u5236\u5316\u8868\u5355\u5143\u7D20\u6E32\u67D3\uFF0C\u53C2\u89C1",n.a.createElement(f.Link,{to:"/form-render/advanced/widget"},"\u81EA\u5B9A\u4E49\u7EC4\u4EF6")),n.a.createElement("h3",{id:"properties"},n.a.createElement(f.AnchorLink,{to:"#properties","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"properties"),n.a.createElement("p",null,"\u53EA\u5728\u5BF9\u8C61\u7EC4\u4EF6\uFF08type: object\uFF09\u4E2D\u4F7F\u7528\uFF0C",n.a.createElement("code",null,"properties")," \u7528\u4E8E\u5305\u88F9\u5BF9\u8C61\u7684\u5B50\u5C5E\u6027\uFF1A"),n.a.createElement(K.a,{code:`{
  "title": "\u5BF9\u8C61",
  "type": "object",
  "properties": {
    "tickets": {
      "title": "\u95E8\u7968\u6570",
      "type": "number"
    }
  }
}`,lang:"json"}),n.a.createElement("h3",{id:"items"},n.a.createElement(f.AnchorLink,{to:"#items","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"items"),n.a.createElement("p",null,"\u53EA\u5728\u5217\u8868\u7C7B\u7EC4\u4EF6\u4E2D\u4F7F\u7528\uFF0C\u63CF\u8FF0 Array \u4E2D\u6BCF\u4E2A item \u7684\u7ED3\u6784\u3002item \u76EE\u524D\u53EA\u652F\u6301\u662F\u5BF9\u8C61"),n.a.createElement(K.a,{code:`{
  "title": "\u5BF9\u8C61\u6570\u7EC4",
  "type": "array",
  "min": 1,
  "max": 3,
  "widget": "list0",
  "items": {
    "type": "object",
    "properties": {
      "tickets": {
        "title": "\u95E8\u7968\u6570",
        "type": "number"
      }
    }
  }
}`,lang:"json"}),n.a.createElement("h3",{id:"enum--enumnames"},n.a.createElement(f.AnchorLink,{to:"#enum--enumnames","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"enum & enumNames"),n.a.createElement("p",null,"\u53EA\u5728\u9009\u62E9\u7C7B\u7EC4\u4EF6\u4E2D\u4F7F\u7528\uFF0C\u7528\u4E8E\u63CF\u8FF0\u679A\u4E3E\u503C\u7684\u503C\u548C\u6587\u6848"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Astring | number"),n.a.createElement("li",null,"\u8BE6\u7EC6\uFF1A\u9009\u9879\u503C & \u9009\u9879\u7684\u6587\u6848")),n.a.createElement(K.a,{code:`// \u5355\u9009
{
  "title": "\u5355\u9009",
  "type": "string",
  "enum": ["hz", "wh", "gy"],
  "enumNames": ["\u676D\u5DDE", "\u6B66\u6C49", "\u8D35\u9633"],
  "default": "hz"
}
// \u591A\u9009
{
  "title": "\u591A\u9009",
  "type": "array",
  "items": {
    "type": "string"
  },
  "enum": ["hz", "wh", "gy"],
  "enumNames": ["\u676D\u5DDE", "\u6B66\u6C49", "\u8D35\u9633"]
}`,lang:"json"}),n.a.createElement("p",null,"\u6CE8: \u65E7\u7248 form-render \u4F1A\u9ED8\u8BA4\u9009\u4E2D\u7B2C\u4E00\u9879\uFF0C\u4F46\u662F\u65B0\u7248\u9664\u975E\u901A\u8FC7 default \u6307\u660E\uFF0C\u5426\u5219\u4E0D\u4F1A\u9009\u4E2D\u4EFB\u4F55\u4E00\u9879\uFF0C\u4E14\u521D\u59CB\u503C\u662F undefined"),n.a.createElement("h3",{id:"rules"},n.a.createElement(f.AnchorLink,{to:"#rules","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"rules"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1A\u6570\u7EC4"),n.a.createElement("li",null,"\u8BE6\u7EC6\u8BF4\u660E\uFF1A\u6240\u6709\u9664\u4E86\u5FC5\u586B\u4EE5\u5916\u7684\u8868\u5355\u6821\u9A8C\u63CF\u8FF0\u901A\u8FC7 ",n.a.createElement("code",null,"rules")," \u5B57\u6BB5\uFF0C\u8BE6\u89C1 ",n.a.createElement(f.Link,{to:"/form-render/schema/rules"},"rules \u4E66\u5199\u89C4\u8303"))),n.a.createElement("h3",{id:"props-0x-\u7248\u672C-uioptions"},n.a.createElement(f.AnchorLink,{to:"#props-0x-\u7248\u672C-uioptions","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"props (0.x \u7248\u672C ",n.a.createElement("code",null,"ui:options"),")"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u7C7B\u578B\uFF1Aobject"),n.a.createElement("li",null,"\u8BE6\u7EC6\u8BF4\u660E\uFF1A\u5F53\u57FA\u7840\u5B57\u6BB5\u4E0D\u591F\u63CF\u8FF0\u7EC4\u4EF6\u7684\u5C55\u793A\u65F6\uFF0C\u4F7F\u7528 ",n.a.createElement("code",null,"props")," \u5B57\u6BB5\u4F5C\u4E3A\u6269\u5C55\u3002",n.a.createElement("code",null,"props")," \u7684\u5177\u4F53\u5C5E\u6027\u53EF\u4EE5\u67E5\u8BE2 antd \u7684\u7EC4\u4EF6\u6587\u6863\u3002\u6240\u6709 ",n.a.createElement("code",null,"props")," \u4E2D\u7684\u5C5E\u6027\u90FD\u4F1A\u76F4\u63A5\u900F\u4F20\u7ED9\u7EC4\u4EF6\uFF0C\u6240\u4EE5\u7406\u8BBA\u4E0A FormRender \u652F\u6301\u6240\u6709 antd \u7EC4\u4EF6\u5E93\u652F\u6301\u7684\u5C55\u793A\uFF0C\u4F8B\u5982")),n.a.createElement(K.a,{code:`url: {
  title: "\u7F51\u5740",
  type: "string",
  props: {
    prefix: 'https://',
    suffix: '.com'
  }
}`,lang:"js"}),n.a.createElement("p",null,"\u8BE6\u89C1 ",n.a.createElement(f.Link,{to:"/form-render/schema/props"},"props \u4E66\u5199\u89C4\u8303"))))))},p8sG:function(Nn,gn,e){"use strict";Nn.exports=e("80pN")}}]);
