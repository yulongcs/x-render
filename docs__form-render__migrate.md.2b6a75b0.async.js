(window.webpackJsonp=window.webpackJsonp||[]).push([[37,9],{"0zqC":function(Nn,gn,e){"use strict";e.r(gn);var X=e("tJVT"),n=e("q1tI"),E=e.n(n),V=e("wx14"),ce=e("rePB"),K=e("ODXe"),tn=e("U8pU"),Be=e("Ff2n"),me=e("VTBJ"),at=e("TSYQ"),Ae=e.n(at),Mn=e("Zm9Q"),Tn=e("5Z9U"),Fn=e("6cGi"),fn=e("KQm4"),Ye=e("wgJM"),Ln=e("t23M");function wn(t){var r=Object(n.useRef)(),l=Object(n.useRef)(!1);function h(){for(var b=arguments.length,v=new Array(b),C=0;C<b;C++)v[C]=arguments[C];l.current||(Ye.a.cancel(r.current),r.current=Object(Ye.a)(function(){t.apply(void 0,v)}))}return Object(n.useEffect)(function(){return function(){l.current=!0,Ye.a.cancel(r.current)}},[]),h}function On(t){var r=Object(n.useRef)([]),l=Object(n.useState)({}),h=Object(K.a)(l,2),b=h[1],v=Object(n.useRef)(typeof t=="function"?t():t),C=wn(function(){var W=v.current;r.current.forEach(function(L){W=L(W)}),r.current=[],v.current=W,b({})});function O(W){r.current.push(W),C()}return[v.current,O]}var we=e("4IlW");function kn(t,r){var l,h=t.prefixCls,b=t.id,v=t.active,C=t.rtl,O=t.tab,W=O.key,L=O.tab,$=O.disabled,G=O.closeIcon,J=t.tabBarGutter,ie=t.tabPosition,x=t.closable,Y=t.renderWrapper,oe=t.removeAriaLabel,U=t.editable,q=t.onClick,ae=t.onRemove,Q=t.onFocus,se="".concat(h,"-tab");n.useEffect(function(){return ae},[]);var k={};ie==="top"||ie==="bottom"?k[C?"marginLeft":"marginRight"]=J:k.marginBottom=J;var be=U&&x!==!1&&!$;function ne(re){$||q(re)}function de(re){re.preventDefault(),re.stopPropagation(),U.onEdit("remove",{key:W,event:re})}var fe=n.createElement("div",{key:W,ref:r,className:Ae()(se,(l={},Object(ce.a)(l,"".concat(se,"-with-remove"),be),Object(ce.a)(l,"".concat(se,"-active"),v),Object(ce.a)(l,"".concat(se,"-disabled"),$),l)),style:k,onClick:ne},n.createElement("div",{role:"tab","aria-selected":v,id:b&&"".concat(b,"-tab-").concat(W),className:"".concat(se,"-btn"),"aria-controls":b&&"".concat(b,"-panel-").concat(W),"aria-disabled":$,tabIndex:$?null:0,onClick:function(H){H.stopPropagation(),ne(H)},onKeyDown:function(H){[we.a.SPACE,we.a.ENTER].includes(H.which)&&(H.preventDefault(),ne(H))},onFocus:Q},L),be&&n.createElement("button",{type:"button","aria-label":oe||"remove",tabIndex:0,className:"".concat(se,"-remove"),onClick:function(H){H.stopPropagation(),de(H)}},G||U.removeIcon||"\xD7"));return Y&&(fe=Y(fe)),fe}var $n=n.forwardRef(kn),rt={width:0,height:0,left:0,top:0};function M(t,r,l){return Object(n.useMemo)(function(){for(var h,b=new Map,v=r.get((h=t[0])===null||h===void 0?void 0:h.key)||rt,C=v.left+v.width,O=0;O<t.length;O+=1){var W=t[O].key,L=r.get(W);if(!L){var $;L=r.get(($=t[O-1])===null||$===void 0?void 0:$.key)||rt}var G=b.get(W)||Object(me.a)({},L);G.right=C-G.left-G.width,b.set(W,G)}return b},[t.map(function(h){return h.key}).join("_"),r,l])}var I={width:0,height:0,left:0,top:0,right:0};function T(t,r,l,h,b){var v=b.tabs,C=b.tabPosition,O=b.rtl,W,L,$;["top","bottom"].includes(C)?(W="width",L=O?"right":"left",$=Math.abs(r.left)):(W="height",L="top",$=-r.top);var G=r[W],J=l[W],ie=h[W],x=G;return J+ie>G&&(x=G-ie),Object(n.useMemo)(function(){if(!v.length)return[0,0];for(var Y=v.length,oe=Y,U=0;U<Y;U+=1){var q=t.get(v[U].key)||I;if(q[L]+q[W]>$+x){oe=U-1;break}}for(var ae=0,Q=Y-1;Q>=0;Q-=1){var se=t.get(v[Q].key)||I;if(se[L]<$){ae=Q+1;break}}return[ae,oe]},[t,$,x,C,v.map(function(Y){return Y.key}).join("_"),O])}var f=e("Gytx"),s=e.n(f),g=e("Kwbf");function F(t,r){var l=t.prefixCls,h=t.invalidate,b=t.item,v=t.renderItem,C=t.responsive,O=t.registerSize,W=t.itemKey,L=t.className,$=t.style,G=t.children,J=t.display,ie=t.order,x=t.component,Y=x===void 0?"div":x,oe=Object(Be.a)(t,["prefixCls","invalidate","item","renderItem","responsive","registerSize","itemKey","className","style","children","display","order","component"]),U=C&&!J;function q(be){O(W,be)}n.useEffect(function(){return function(){q(null)}},[]);var ae=v&&b!==void 0?v(b):G,Q;h||(Q={opacity:U?0:1,height:U?0:void 0,overflowY:U?"hidden":void 0,order:C?ie:void 0,pointerEvents:U?"none":void 0});var se={};U&&(se["aria-hidden"]=!0);var k=n.createElement(Y,Object(V.a)({className:Ae()(!h&&l,L),style:Object(me.a)(Object(me.a)({},Q),$)},se,oe,{ref:r}),ae);return C&&(k=n.createElement(Ln.default,{onResize:function(ne){var de=ne.offsetWidth;q(de)}},k)),k}var R=n.forwardRef(F);R.displayName="Item";var u=R;function o(){var t=Object(n.useState)({}),r=Object(K.a)(t,2),l=r[1],h=Object(n.useRef)([]),b=Object(n.useRef)(!1),v=0,C=0;Object(n.useEffect)(function(){return function(){b.current=!0}},[]);function O(W){var L=v;v+=1,h.current.length<L+1&&(h.current[L]=W);var $=h.current[L];function G(J){h.current[L]=typeof J=="function"?J(h.current[L]):J,Ye.a.cancel(C),C=Object(Ye.a)(function(){b.current||l({})})}return[$,G]}return O}var y=function(r,l){var h=n.useContext(D);if(!h){var b=r.component,v=b===void 0?"div":b,C=Object(Be.a)(r,["component"]);return n.createElement(v,Object(V.a)({},C,{ref:l}))}var O=h.className,W=Object(Be.a)(h,["className"]),L=r.className,$=Object(Be.a)(r,["className"]);return n.createElement(D.Provider,{value:null},n.createElement(u,Object(V.a)({ref:l,className:Ae()(O,L)},W,$)))},N=n.forwardRef(y);N.displayName="RawItem";var B=N,D=n.createContext(null),i="responsive",j="invalidate";function d(t){return"+ ".concat(t.length," ...")}function a(t,r){var l=t.prefixCls,h=l===void 0?"rc-overflow":l,b=t.data,v=b===void 0?[]:b,C=t.renderItem,O=t.renderRawItem,W=t.itemKey,L=t.itemWidth,$=L===void 0?10:L,G=t.ssr,J=t.style,ie=t.className,x=t.maxCount,Y=t.renderRest,oe=t.renderRawRest,U=t.suffix,q=t.component,ae=q===void 0?"div":q,Q=t.itemComponent,se=t.onVisibleChange,k=Object(Be.a)(t,["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"]),be=o(),ne=G==="full",de=be(null),fe=Object(K.a)(de,2),re=fe[0],H=fe[1],le=re||0,ye=be(new Map),he=Object(K.a)(ye,2),Oe=he[0],Ke=he[1],Ee=be(0),Fe=Object(K.a)(Ee,2),Me=Fe[0],Ie=Fe[1],Pe=be(0),Se=Object(K.a)(Pe,2),$e=Se[0],qe=Se[1],Ve=be(0),Ue=Object(K.a)(Ve,2),Xe=Ue[0],Le=Ue[1],Dn=Object(n.useState)(null),an=Object(K.a)(Dn,2),Qe=an[0],on=an[1],yn=Object(n.useState)(null),bn=Object(K.a)(yn,2),je=bn[0],He=bn[1],_e=n.useMemo(function(){return je===null&&ne?Number.MAX_SAFE_INTEGER:je||0},[je,re]),Ze=Object(n.useState)(!1),Wn=Object(K.a)(Ze,2),Un=Wn[0],Kn=Wn[1],rn="".concat(h,"-item"),Sn=Math.max(Me,$e),ln=v.length&&x===i,Pn=x===j,en=ln||typeof x=="number"&&v.length>x,un=Object(n.useMemo)(function(){var ve=v;return ln?re===null&&ne?ve=v:ve=v.slice(0,Math.min(v.length,le/$)):typeof x=="number"&&(ve=v.slice(0,x)),ve},[v,$,re,x,ln]),An=Object(n.useMemo)(function(){return ln?v.slice(_e+1):v.slice(un.length)},[v,un,ln,_e]),cn=Object(n.useCallback)(function(ve,Re){var Te;return typeof W=="function"?W(ve):(Te=W&&(ve==null?void 0:ve[W]))!==null&&Te!==void 0?Te:Re},[W]),ke=Object(n.useCallback)(C||function(ve){return ve},[C]);function xe(ve,Re){He(ve),Re||(Kn(ve<v.length-1),se==null||se(ve))}function Jn(ve,Re){H(Re.clientWidth)}function Gn(ve,Re){Ke(function(Te){var nn=new Map(Te);return Re===null?nn.delete(ve):nn.set(ve,Re),nn})}function et(ve,Re){qe(Re),Ie($e)}function En(ve,Re){Le(Re)}function hn(ve){return Oe.get(cn(un[ve],ve))}n.useLayoutEffect(function(){if(le&&Sn&&un){var ve=Xe,Re=un.length,Te=Re-1;if(!Re){xe(0),on(null);return}for(var nn=0;nn<Re;nn+=1){var Yn=hn(nn);if(Yn===void 0){xe(nn-1,!0);break}if(ve+=Yn,nn===Te-1&&ve+hn(Te)<=le){xe(Te),on(null);break}else if(ve+Sn>le){xe(nn-1),on(ve-Yn-Xe+$e);break}else if(nn===Te){xe(Te),on(ve-Xe);break}}U&&hn(0)+Xe>le&&on(null)}},[le,Oe,$e,Xe,cn,un]);var Hn=Un&&!!An.length,Cn={};Qe!==null&&ln&&(Cn={position:"absolute",left:Qe,top:0});var mn={prefixCls:rn,responsive:ln,component:Q,invalidate:Pn},xn=O?function(ve,Re){var Te=cn(ve,Re);return n.createElement(D.Provider,{key:Te,value:Object(me.a)(Object(me.a)({},mn),{},{order:Re,item:ve,itemKey:Te,registerSize:Gn,display:Re<=_e})},O(ve,Re))}:function(ve,Re){var Te=cn(ve,Re);return n.createElement(u,Object(V.a)({},mn,{order:Re,key:Te,item:ve,renderItem:ke,itemKey:Te,registerSize:Gn,display:Re<=_e}))},jn,Xn={order:Hn?_e:Number.MAX_SAFE_INTEGER,className:"".concat(rn,"-rest"),registerSize:et,display:Hn};if(oe)oe&&(jn=n.createElement(D.Provider,{value:Object(me.a)(Object(me.a)({},mn),Xn)},oe(An)));else{var dn=Y||d;jn=n.createElement(u,Object(V.a)({},mn,Xn),typeof dn=="function"?dn(An):dn)}var Bn=n.createElement(ae,Object(V.a)({className:Ae()(!Pn&&h,ie),style:J,ref:r},k),un.map(xn),en?jn:null,U&&n.createElement(u,Object(V.a)({},mn,{order:_e,className:"".concat(rn,"-suffix"),registerSize:En,display:!0,style:Cn}),U));return ln&&(Bn=n.createElement(Ln.default,{onResize:Jn},Bn)),Bn}var p=n.forwardRef(a);p.displayName="Overflow",p.Item=B,p.RESPONSIVE=i,p.INVALIDATE=j;var m=p,S=m,w=e("1OyB"),z=e("vuIU"),_=e("Ji7U"),ue=e("LK+K"),ge=e("bT9E"),pn=e("YrtM"),We=n.createContext(null);function Ne(t,r){var l=Object(me.a)({},t);return Object.keys(r).forEach(function(h){var b=r[h];b!==void 0&&(l[h]=b)}),l}function Rn(t){var r=t.children,l=t.locked,h=Object(Be.a)(t,["children","locked"]),b=n.useContext(We),v=Object(pn.a)(function(){return Ne(b,h)},[b,h],function(C,O){return!l&&(C[0]!==O[0]||!s()(C[1],O[1]))});return n.createElement(We.Provider,{value:v},r)}function ut(t,r,l,h){var b=n.useContext(We),v=b.activeKey,C=b.onActive,O=b.onInactive,W={active:v===t};return r||(W.onMouseEnter=function(L){l==null||l({key:t,domEvent:L}),C(t)},W.onMouseLeave=function(L){h==null||h({key:t,domEvent:L}),O(t)}),W}function qn(t){var r=t.item,l=Object(Be.a)(t,["item"]);return Object.defineProperty(l,"item",{get:function(){return Object(g.a)(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),r}}),l}function c(t){var r=t.icon,l=t.props,h=t.children,b;return typeof r=="function"?b=n.createElement(r,Object(me.a)({},l)):b=r,b||h||null}function P(t){var r=n.useContext(We),l=r.mode,h=r.rtl,b=r.inlineIndent;if(l!=="inline")return null;var v=t;return h?{paddingRight:v*b}:{paddingLeft:v*b}}var A=[],pe=n.createContext(null);function ee(){return n.useContext(pe)}var De=n.createContext(A);function ze(t){var r=n.useContext(De);return n.useMemo(function(){return t!==void 0?[].concat(Object(fn.a)(r),[t]):r},[r,t])}var Ge=n.createContext(null),Ut=n.createContext(null);function Jt(t,r){return t===void 0?null:"".concat(t,"-").concat(r)}function Gt(t){var r=n.useContext(Ut);return Jt(r,t)}var ba=function(t){Object(_.a)(l,t);var r=Object(ue.a)(l);function l(){return Object(w.a)(this,l),r.apply(this,arguments)}return Object(z.a)(l,[{key:"render",value:function(){var b=this.props,v=b.title,C=b.attribute,O=b.elementRef,W=Object(Be.a)(b,["title","attribute","elementRef"]),L=Object(ge.a)(W,["eventKey"]);return Object(g.a)(!C,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),n.createElement(S.Item,Object(V.a)({},C,{title:typeof v=="string"?v:void 0},L,{ref:O}))}}]),l}(n.Component),Ea=function(r){var l,h=r.style,b=r.className,v=r.eventKey,C=r.disabled,O=r.itemIcon,W=r.children,L=r.role,$=r.onMouseEnter,G=r.onMouseLeave,J=r.onClick,ie=r.onKeyDown,x=r.onFocus,Y=Object(Be.a)(r,["style","className","eventKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"]),oe=Gt(v),U=n.useContext(We),q=U.prefixCls,ae=U.onItemClick,Q=U.disabled,se=U.overflowDisabled,k=U.itemIcon,be=U.selectedKeys,ne=U.onActive,de="".concat(q,"-item"),fe=n.useRef(),re=n.useRef(),H=Q||C,le=ze(v),ye=function(Ve){return{key:v,keyPath:le,item:fe.current,domEvent:Ve}},he=O||k,Oe=ut(v,H,$,G),Ke=Oe.active,Ee=Object(Be.a)(Oe,["active"]),Fe=be.includes(v),Me=P(le.length),Ie=function(Ve){if(!H){var Ue=ye(Ve);J==null||J(qn(Ue)),ae(Ue)}},Pe=function(Ve){if(ie==null||ie(Ve),Ve.which===we.a.ENTER){var Ue=ye(Ve);J==null||J(qn(Ue)),ae(Ue)}},Se=function(Ve){ne(v),x==null||x(Ve)},$e={};return r.role==="option"&&($e["aria-selected"]=Fe),n.createElement(ba,Object(V.a)({ref:fe,elementRef:re,role:L===null?"none":L||"menuitem",tabIndex:C?null:-1,"data-menu-id":se&&oe?null:oe},Y,Ee,$e,{component:"li","aria-disabled":C,style:Object(me.a)(Object(me.a)({},Me),h),className:Ae()(de,(l={},Object(ce.a)(l,"".concat(de,"-active"),Ke),Object(ce.a)(l,"".concat(de,"-selected"),Fe),Object(ce.a)(l,"".concat(de,"-disabled"),H),l),b),onClick:Ie,onKeyDown:Pe,onFocus:Se}),W,n.createElement(c,{props:Object(me.a)(Object(me.a)({},r),{},{isSelected:Fe}),icon:he}))};function Ca(t){var r=t.eventKey,l=ee(),h=ze(r);return n.useEffect(function(){if(l)return l.registerPath(r,h),function(){l.unregisterPath(r,h)}},[h]),l?null:n.createElement(Ea,t)}var St=Ca;function Pt(t,r){return Object(Mn.a)(t).map(function(l,h){if(n.isValidElement(l)){var b=l.key;return b==null&&(b="tmp_key-".concat([].concat(Object(fn.a)(r),[h]).join("-"))),n.cloneElement(l,{key:b,eventKey:b})}return l})}function _n(t){var r=n.useRef(t);r.current=t;var l=n.useCallback(function(){for(var h,b=arguments.length,v=new Array(b),C=0;C<b;C++)v[C]=arguments[C];return(h=r.current)===null||h===void 0?void 0:h.call.apply(h,[r].concat(v))},[]);return t?l:void 0}var Fa=function(r,l){var h=r.className,b=r.children,v=Object(Be.a)(r,["className","children"]),C=n.useContext(We),O=C.prefixCls,W=C.mode;return n.createElement("ul",Object(V.a)({className:Ae()(O,"".concat(O,"-sub"),"".concat(O,"-").concat(W==="inline"?"inline":"vertical"),h)},v,{"data-menu-list":!0,ref:l}),b)},Ht=n.forwardRef(Fa);Ht.displayName="SubMenuList";var xt=Ht,Oa=e("uciX"),Vn={adjustX:1,adjustY:1},Xt={topLeft:{points:["bl","tl"],overflow:Vn,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Vn,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:Vn,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:Vn,offset:[4,0]}},Ra={topLeft:{points:["bl","tl"],overflow:Vn,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Vn,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:Vn,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:Vn,offset:[4,0]}},fr=Xt;function Yt(t,r,l){if(r)return r;if(l)return l[t]||l.other}var Da={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function Sa(t){var r=t.prefixCls,l=t.visible,h=t.children,b=t.popup,v=t.popupClassName,C=t.popupOffset,O=t.disabled,W=t.mode,L=t.onVisibleChange,$=n.useContext(We),G=$.getPopupContainer,J=$.rtl,ie=$.subMenuOpenDelay,x=$.subMenuCloseDelay,Y=$.builtinPlacements,oe=$.triggerSubMenuAction,U=$.forceSubMenuRender,q=$.motion,ae=$.defaultMotions,Q=n.useState(!1),se=Object(K.a)(Q,2),k=se[0],be=se[1],ne=J?Object(me.a)(Object(me.a)({},Ra),Y):Object(me.a)(Object(me.a)({},Xt),Y),de=Da[W],fe=Yt(W,q,ae),re=Object(me.a)(Object(me.a)({},fe),{},{leavedClassName:"".concat(r,"-hidden"),removeOnLeave:!1,motionAppear:!0}),H=n.useRef();return n.useEffect(function(){return H.current=Object(Ye.a)(function(){be(l)}),function(){Ye.a.cancel(H.current)}},[l]),n.createElement(Oa.a,{prefixCls:r,popupClassName:Ae()("".concat(r,"-popup"),Object(ce.a)({},"".concat(r,"-rtl"),J),v),stretch:W==="horizontal"?"minWidth":null,getPopupContainer:G,builtinPlacements:ne,popupPlacement:de,popupVisible:k,popup:b,popupAlign:C&&{offset:C},action:O?[]:[oe],mouseEnterDelay:ie,mouseLeaveDelay:x,onPopupVisibleChange:L,forceRender:U,popupMotion:re},h)}var Pa=e("8XRh");function Aa(t){var r=t.id,l=t.open,h=t.keyPath,b=t.children,v="inline",C=n.useContext(We),O=C.prefixCls,W=C.forceSubMenuRender,L=C.motion,$=C.defaultMotions,G=C.mode,J=n.useRef(!1);J.current=G===v;var ie=n.useState(!J.current),x=Object(K.a)(ie,2),Y=x[0],oe=x[1],U=J.current?l:!1;n.useEffect(function(){J.current&&oe(!1)},[G]);var q=Object(me.a)({},Yt(v,L,$));h.length>1&&(q.motionAppear=!1);var ae=q.onVisibleChanged;return q.onVisibleChanged=function(Q){return!J.current&&!Q&&oe(!0),ae==null?void 0:ae(Q)},Y?null:n.createElement(Rn,{mode:v,locked:!J.current},n.createElement(Pa.default,Object(V.a)({visible:U},q,{forceRender:W,removeOnLeave:!1,leavedClassName:"".concat(O,"-hidden")}),function(Q){var se=Q.className,k=Q.style;return n.createElement(xt,{id:r,className:se,style:k},b)}))}var ja=function(r){var l,h=r.style,b=r.className,v=r.title,C=r.eventKey,O=r.disabled,W=r.internalPopupClose,L=r.children,$=r.itemIcon,G=r.expandIcon,J=r.popupClassName,ie=r.popupOffset,x=r.onClick,Y=r.onMouseEnter,oe=r.onMouseLeave,U=r.onTitleClick,q=r.onTitleMouseEnter,ae=r.onTitleMouseLeave,Q=Object(Be.a)(r,["style","className","title","eventKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"]),se=Gt(C),k=n.useContext(We),be=k.prefixCls,ne=k.mode,de=k.openKeys,fe=k.disabled,re=k.overflowDisabled,H=k.activeKey,le=k.selectedKeys,ye=k.itemIcon,he=k.expandIcon,Oe=k.onItemClick,Ke=k.onOpenChange,Ee=k.onActive,Fe=n.useContext(Ge),Me=Fe.isSubPathKey,Ie=ze(),Pe="".concat(be,"-submenu"),Se=fe||O,$e=n.useRef(),qe=n.useRef(),Ve=$||ye,Ue=G||he,Xe=de.includes(C),Le=!re&&Xe,Dn=Me(le,C),an=ut(C,Se,q,ae),Qe=an.active,on=Object(Be.a)(an,["active"]),yn=n.useState(!1),bn=Object(K.a)(yn,2),je=bn[0],He=bn[1],_e=function(xe){Se||He(xe)},Ze=function(xe){_e(!0),Y==null||Y({key:C,domEvent:xe})},Wn=function(xe){_e(!1),oe==null||oe({key:C,domEvent:xe})},Un=n.useMemo(function(){return Qe||(ne!=="inline"?je||Me([H],C):!1)},[ne,Qe,H,je,C,Me]),Kn=P(Ie.length),rn=function(xe){Se||(U==null||U({key:C,domEvent:xe}),ne==="inline"&&Ke(C,!Xe))},Sn=_n(function(ke){x==null||x(qn(ke)),Oe(ke)}),ln=function(xe){ne!=="inline"&&Ke(C,xe)},Pn=function(){Ee(C)},en=se&&"".concat(se,"-popup"),un=n.createElement("div",Object(V.a)({role:"menuitem",style:Kn,className:"".concat(Pe,"-title"),tabIndex:Se?null:-1,ref:$e,title:typeof v=="string"?v:null,"data-menu-id":re&&se?null:se,"aria-expanded":Le,"aria-haspopup":!0,"aria-controls":en,"aria-disabled":Se,onClick:rn,onFocus:Pn},on),v,n.createElement(c,{icon:ne!=="horizontal"?Ue:null,props:Object(me.a)(Object(me.a)({},r),{},{isOpen:Le,isSubMenu:!0})},n.createElement("i",{className:"".concat(Pe,"-arrow")}))),An=n.useRef(ne);if(ne!=="inline"&&(An.current=Ie.length>1?"vertical":ne),!re){var cn=An.current;un=n.createElement(Sa,{mode:cn,prefixCls:Pe,visible:!W&&Le&&ne!=="inline",popupClassName:J,popupOffset:ie,popup:n.createElement(Rn,{mode:cn},n.createElement(xt,{id:en,ref:qe},L)),disabled:Se,onVisibleChange:ln},un)}return n.createElement(Rn,{onItemClick:Sn,mode:ne==="horizontal"?"vertical":ne,itemIcon:Ve,expandIcon:Ue},n.createElement(S.Item,Object(V.a)({role:"none"},Q,{component:"li",style:h,className:Ae()(Pe,"".concat(Pe,"-").concat(ne),b,(l={},Object(ce.a)(l,"".concat(Pe,"-open"),Le),Object(ce.a)(l,"".concat(Pe,"-active"),Un),Object(ce.a)(l,"".concat(Pe,"-selected"),Dn),Object(ce.a)(l,"".concat(Pe,"-disabled"),Se),l)),onMouseEnter:Ze,onMouseLeave:Wn}),un,!re&&n.createElement(Aa,{id:en,open:Le,keyPath:Ie},L)))};function Qt(t){var r=t.eventKey,l=t.children,h=ze(r),b=Pt(l,h),v=ee();n.useEffect(function(){if(v)return v.registerPath(r,h),function(){v.unregisterPath(r,h)}},[h]);var C;return v?C=b:C=n.createElement(ja,t,b),n.createElement(De.Provider,{value:h},C)}var Ba=e("x/xZ");function Zt(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Object(Ba.a)(t)){var l=t.nodeName.toLowerCase(),h=["input","select","textarea","button"].includes(l)||t.isContentEditable||l==="a"&&!!t.getAttribute("href"),b=t.getAttribute("tabindex"),v=Number(b),C=null;return b&&!Number.isNaN(v)?C=v:h&&C===null&&(C=0),h&&t.disabled&&(C=null),C!==null&&(C>=0||r&&C<0)}return!1}function kt(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,l=Object(fn.a)(t.querySelectorAll("*")).filter(function(h){return Zt(h,r)});return Zt(t,r)&&l.unshift(t),l}var mt=null;function pr(){mt=document.activeElement}function vr(){mt=null}function hr(){if(mt)try{mt.focus()}catch(t){}}function gr(t,r){if(r.keyCode===9){var l=kt(t),h=l[r.shiftKey?0:l.length-1],b=h===document.activeElement||t===document.activeElement;if(b){var v=l[r.shiftKey?l.length-1:0];v.focus(),r.preventDefault()}}}var At=we.a.LEFT,jt=we.a.RIGHT,Bt=we.a.UP,ft=we.a.DOWN,pt=we.a.ENTER,qt=we.a.ESC,_t=[Bt,ft,At,jt];function Ia(t,r,l,h){var b,v,C,O,W="prev",L="next",$="children",G="parent";if(t==="inline"&&h===pt)return{inlineTrigger:!0};var J=(b={},Object(ce.a)(b,Bt,W),Object(ce.a)(b,ft,L),b),ie=(v={},Object(ce.a)(v,At,l?L:W),Object(ce.a)(v,jt,l?W:L),Object(ce.a)(v,ft,$),Object(ce.a)(v,pt,$),v),x=(C={},Object(ce.a)(C,Bt,W),Object(ce.a)(C,ft,L),Object(ce.a)(C,pt,$),Object(ce.a)(C,qt,G),Object(ce.a)(C,At,l?$:G),Object(ce.a)(C,jt,l?G:$),C),Y={inline:J,horizontal:ie,vertical:x,inlineSub:J,horizontalSub:x,verticalSub:x},oe=(O=Y["".concat(t).concat(r?"":"Sub")])===null||O===void 0?void 0:O[h];switch(oe){case W:return{offset:-1,sibling:!0};case L:return{offset:1,sibling:!0};case G:return{offset:-1,sibling:!1};case $:return{offset:1,sibling:!1};default:return null}}function Na(t){for(var r=t;r;){if(r.getAttribute("data-menu-list"))return r;r=r.parentElement}return null}function Ma(t,r){for(var l=t||document.activeElement;l;){if(r.has(l))return l;l=l.parentElement}return null}function Ta(t,r){var l=kt(t,!0);return l.filter(function(h){return r.has(h)})}function ea(t,r,l){var h=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!t)return null;var b=Ta(t,r),v=b.length,C=b.findIndex(function(O){return l===O});return h<0?C===-1?C=v-1:C-=1:h>0&&(C+=1),C=(C+v)%v,b[C]}function wa(t,r,l,h,b,v,C,O,W,L){var $=n.useRef(),G=n.useRef();G.current=r;var J=function(){Ye.a.cancel($.current)};return n.useEffect(function(){return function(){J()}},[]),function(ie){var x=ie.which;if([].concat(_t,[pt,qt]).includes(x)){var Y,oe,U,q=function(){Y=new Set,oe=new Map,U=new Map;var ye=v();return ye.forEach(function(he){var Oe=document.querySelector("[data-menu-id='".concat(Jt(h,he),"']"));Oe&&(Y.add(Oe),U.set(Oe,he),oe.set(he,Oe))}),Y};q();var ae=oe.get(r),Q=Ma(ae,Y),se=U.get(Q),k=Ia(t,C(se,!0).length===1,l,x);if(!k)return;_t.includes(x)&&ie.preventDefault();var be=function(ye){if(ye){var he=ye,Oe=ye.querySelector("a");(Oe==null?void 0:Oe.getAttribute("href"))&&(he=Oe);var Ke=U.get(ye);O(Ke),J(),$.current=Object(Ye.a)(function(){G.current===Ke&&he.focus()})}};if(k.sibling||!Q){var ne;!Q||t==="inline"?ne=b.current:ne=Na(Q);var de=ea(ne,Y,Q,k.offset);be(de)}else if(k.inlineTrigger)W(se);else if(k.offset>0)W(se,!0),J(),$.current=Object(Ye.a)(function(){q();var le=Q.getAttribute("aria-controls"),ye=document.getElementById(le),he=ea(ye,Y);be(he)},5);else if(k.offset<0){var fe=C(se,!0),re=fe[fe.length-2],H=oe.get(re);W(re,!1),be(H)}}L==null||L(ie)}}var Wa=Math.random().toFixed(5).toString().slice(2),na=0;function Ka(t){var r=Object(Fn.a)(t,{value:t}),l=Object(K.a)(r,2),h=l[0],b=l[1];return n.useEffect(function(){na+=1;var v="".concat(Wa,"-").concat(na);b("rc-menu-uuid-".concat(v))},[]),h}var yr=e("p8sG");function La(t){Promise.resolve().then(t)}var It="__RC_UTIL_PATH_SPLIT__",ta=function(r){return r.join(It)},$a=function(r){return r.split(It)},Nt="rc-menu-more";function Va(){var t=n.useState({}),r=Object(K.a)(t,2),l=r[1],h=Object(n.useRef)(new Map),b=Object(n.useRef)(new Map),v=n.useState([]),C=Object(K.a)(v,2),O=C[0],W=C[1],L=Object(n.useRef)(0),$=Object(n.useCallback)(function(U,q){var ae=ta(q);b.current.set(ae,U),h.current.set(U,ae),L.current+=1;var Q=L.current;La(function(){Q===L.current&&l({})})},[]),G=Object(n.useCallback)(function(U,q){var ae=ta(q);b.current.delete(ae),h.current.delete(U)},[]),J=Object(n.useCallback)(function(U){W(U)},[]),ie=Object(n.useCallback)(function(U,q){var ae=h.current.get(U)||"",Q=$a(ae);return q&&O.includes(Q[0])&&Q.unshift(Nt),Q},[O]),x=Object(n.useCallback)(function(U,q){return U.some(function(ae){var Q=ie(ae,!0);return Q.includes(q)})},[ie]),Y=function(){var q=Object(fn.a)(h.current.keys());return O.length&&q.push(Nt),q},oe=Object(n.useCallback)(function(U){var q="".concat(h.current.get(U)).concat(It),ae=new Set;return Object(fn.a)(b.current.keys()).forEach(function(Q){Q.startsWith(q)&&ae.add(b.current.get(Q))}),ae},[]);return{registerPath:$,unregisterPath:G,refreshOverflowKeys:J,isSubPathKey:x,getKeyPath:ie,getKeys:Y,getSubPathKeys:oe}}var vt=[],za=function(r){var l,h,b=r.prefixCls,v=b===void 0?"rc-menu":b,C=r.style,O=r.className,W=r.tabIndex,L=W===void 0?0:W,$=r.children,G=r.direction,J=r.id,ie=r.mode,x=ie===void 0?"vertical":ie,Y=r.inlineCollapsed,oe=r.disabled,U=r.disabledOverflow,q=r.subMenuOpenDelay,ae=q===void 0?.1:q,Q=r.subMenuCloseDelay,se=Q===void 0?.1:Q,k=r.forceSubMenuRender,be=r.defaultOpenKeys,ne=r.openKeys,de=r.activeKey,fe=r.defaultActiveFirst,re=r.selectable,H=re===void 0?!0:re,le=r.multiple,ye=le===void 0?!1:le,he=r.defaultSelectedKeys,Oe=r.selectedKeys,Ke=r.onSelect,Ee=r.onDeselect,Fe=r.inlineIndent,Me=Fe===void 0?24:Fe,Ie=r.motion,Pe=r.defaultMotions,Se=r.triggerSubMenuAction,$e=Se===void 0?"hover":Se,qe=r.builtinPlacements,Ve=r.itemIcon,Ue=r.expandIcon,Xe=r.overflowedIndicator,Le=Xe===void 0?"...":Xe,Dn=r.getPopupContainer,an=r.onClick,Qe=r.onOpenChange,on=r.onKeyDown,yn=r.openAnimation,bn=r.openTransitionName,je=Object(Be.a)(r,["prefixCls","style","className","tabIndex","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName"]),He=Pt($,vt),_e=n.useState(!1),Ze=Object(K.a)(_e,2),Wn=Ze[0],Un=Ze[1],Kn=n.useRef(),rn=Ka(J),Sn=G==="rtl",ln=n.useMemo(function(){return x==="inline"&&Y?["vertical",Y]:[x,!1]},[x,Y]),Pn=Object(K.a)(ln,2),en=Pn[0],un=Pn[1],An=n.useState(0),cn=Object(K.a)(An,2),ke=cn[0],xe=cn[1],Jn=ke>=He.length-1||en!=="horizontal"||U,Gn=Object(Fn.a)(be,{value:ne,postState:function(Z){return Z||vt}}),et=Object(K.a)(Gn,2),En=et[0],hn=et[1],Hn=n.useState(En),Cn=Object(K.a)(Hn,2),mn=Cn[0],xn=Cn[1],jn=en==="inline",Xn=n.useRef(!1);n.useEffect(function(){jn&&xn(En)},[En]),n.useEffect(function(){if(!Xn.current){Xn.current=!0;return}if(jn)hn(mn);else{var te=[];hn(te),Qe==null||Qe(te)}},[jn]);var dn=Va(),Bn=dn.registerPath,ve=dn.unregisterPath,Re=dn.refreshOverflowKeys,Te=dn.isSubPathKey,nn=dn.getKeyPath,Yn=dn.getKeys,gt=dn.getSubPathKeys,Wt=n.useMemo(function(){return{registerPath:Bn,unregisterPath:ve}},[Bn,ve]),Kt=n.useMemo(function(){return{isSubPathKey:Te}},[Te]);n.useEffect(function(){Re(Jn?vt:He.slice(ke+1).map(function(te){return te.key}))},[ke,Jn]);var Lt=Object(Fn.a)(de||fe&&((l=He[0])===null||l===void 0?void 0:l.key),{value:de}),nt=Object(K.a)(Lt,2),yt=nt[0],st=nt[1],bt=_n(function(te){st(te)}),$t=_n(function(){st(void 0)}),Et=Object(Fn.a)(he||[],{value:Oe,postState:function(Z){return Array.isArray(Z)?Z:Z==null?vt:[Z]}}),Ct=Object(K.a)(Et,2),tt=Ct[0],In=Ct[1],Ft=function(Z){if(!!H){var Ce=Z.key,Je=tt.includes(Ce),sn;Je?sn=tt.filter(function(Zn){return Zn!==Ce}):ye?sn=[].concat(Object(fn.a)(tt),[Ce]):sn=[Ce],In(sn);var zn=Object(me.a)(Object(me.a)({},Z),{},{selectedKeys:sn});Je?Ee==null||Ee(zn):Ke==null||Ke(zn)}},Ot=_n(function(te){an==null||an(qn(te)),Ft(te)}),ot=_n(function(te,Z){var Ce=En.filter(function(sn){return sn!==te});if(Z)Ce.push(te);else if(en!=="inline"){var Je=gt(te);Ce=Ce.filter(function(sn){return!Je.has(sn)})}s()(En,Ce)||(hn(Ce),Qe==null||Qe(Ce))}),Qn=_n(Dn),lt=function(Z,Ce){var Je=Ce!=null?Ce:!En.includes(Z);ot(Z,Je)},dt=wa(en,yt,Sn,rn,Kn,Yn,nn,st,lt,on);n.useEffect(function(){Un(!0)},[]);var Rt=en!=="horizontal"||U?He:He.map(function(te,Z){return n.createElement(Rn,{key:te.key,overflowDisabled:Z>ke},te)}),Dt=n.createElement(S,Object(V.a)({id:J,ref:Kn,prefixCls:"".concat(v,"-overflow"),component:"ul",itemComponent:St,className:Ae()(v,"".concat(v,"-root"),"".concat(v,"-").concat(en),O,(h={},Object(ce.a)(h,"".concat(v,"-inline-collapsed"),un),Object(ce.a)(h,"".concat(v,"-rtl"),Sn),h)),dir:G,style:C,role:"menu",tabIndex:L,data:Rt,renderRawItem:function(Z){return Z},renderRawRest:function(Z){var Ce=Z.length,Je=Ce?He.slice(-Ce):null;return n.createElement(Qt,{eventKey:Nt,title:Le,disabled:Jn,internalPopupClose:Ce===0},Je)},maxCount:en!=="horizontal"||U?S.INVALIDATE:S.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(Z){xe(Z)},onKeyDown:dt},je));return n.createElement(Ut.Provider,{value:rn},n.createElement(Rn,{prefixCls:v,mode:en,openKeys:En,rtl:Sn,disabled:oe,motion:Wn?Ie:null,defaultMotions:Wn?Pe:null,activeKey:yt,onActive:bt,onInactive:$t,selectedKeys:tt,inlineIndent:Me,subMenuOpenDelay:ae,subMenuCloseDelay:se,forceSubMenuRender:k,builtinPlacements:qe,triggerSubMenuAction:$e,getPopupContainer:Qn,itemIcon:Ve,expandIcon:Ue,onItemClick:Ot,onOpenChange:ot},n.createElement(Ge.Provider,{value:Kt},Dt),n.createElement(pe.Provider,{value:Wt},He)))},Ua=za,Ja=function(r){var l=r.className,h=r.title,b=r.eventKey,v=r.children,C=Object(Be.a)(r,["className","title","eventKey","children"]),O=n.useContext(We),W=O.prefixCls,L="".concat(W,"-item-group");return n.createElement("li",Object(V.a)({},C,{onClick:function(G){return G.stopPropagation()},className:Ae()(L,l)}),n.createElement("div",{className:"".concat(L,"-title"),title:typeof h=="string"?h:void 0},h),n.createElement("ul",{className:"".concat(L,"-list")},v))};function Ga(t){var r=t.children,l=Object(Be.a)(t,["children"]),h=ze(l.eventKey),b=Pt(r,h),v=ee();return v?b:n.createElement(Ja,l,b)}function Ha(t){var r=t.className,l=t.style,h=n.useContext(We),b=h.prefixCls,v=ee();return v?null:n.createElement("li",{className:Ae()("".concat(b,"-item-divider"),r),style:l})}var it=Ua;it.Item=St,it.SubMenu=Qt,it.ItemGroup=Ga,it.Divider=Ha;var xa=it,Xa=e("eDIo");function Ya(t,r){var l=t.prefixCls,h=t.editable,b=t.locale,v=t.style;return!h||h.showAdd===!1?null:n.createElement("button",{ref:r,type:"button",className:"".concat(l,"-nav-add"),style:v,"aria-label":(b==null?void 0:b.addAriaLabel)||"Add tab",onClick:function(O){h.onEdit("add",{event:O})}},h.addIcon||"+")}var aa=n.forwardRef(Ya);function Qa(t,r){var l=t.prefixCls,h=t.id,b=t.tabs,v=t.locale,C=t.mobile,O=t.moreIcon,W=O===void 0?"More":O,L=t.moreTransitionName,$=t.style,G=t.className,J=t.editable,ie=t.tabBarGutter,x=t.rtl,Y=t.onTabClick,oe=Object(n.useState)(!1),U=Object(K.a)(oe,2),q=U[0],ae=U[1],Q=Object(n.useState)(null),se=Object(K.a)(Q,2),k=se[0],be=se[1],ne="".concat(h,"-more-popup"),de="".concat(l,"-dropdown"),fe=k!==null?"".concat(ne,"-").concat(k):null,re=v==null?void 0:v.dropdownAriaLabel,H=n.createElement(xa,{onClick:function(Fe){var Me=Fe.key,Ie=Fe.domEvent;Y(Me,Ie),ae(!1)},id:ne,tabIndex:-1,role:"listbox","aria-activedescendant":fe,selectedKeys:[k],"aria-label":re!==void 0?re:"expanded dropdown"},b.map(function(Ee){return n.createElement(St,{key:Ee.key,id:"".concat(ne,"-").concat(Ee.key),role:"option","aria-controls":h&&"".concat(h,"-panel-").concat(Ee.key),disabled:Ee.disabled},Ee.tab)}));function le(Ee){for(var Fe=b.filter(function($e){return!$e.disabled}),Me=Fe.findIndex(function($e){return $e.key===k})||0,Ie=Fe.length,Pe=0;Pe<Ie;Pe+=1){Me=(Me+Ee+Ie)%Ie;var Se=Fe[Me];if(!Se.disabled){be(Se.key);return}}}function ye(Ee){var Fe=Ee.which;if(!q){[we.a.DOWN,we.a.SPACE,we.a.ENTER].includes(Fe)&&(ae(!0),Ee.preventDefault());return}switch(Fe){case we.a.UP:le(-1),Ee.preventDefault();break;case we.a.DOWN:le(1),Ee.preventDefault();break;case we.a.ESC:ae(!1);break;case we.a.SPACE:case we.a.ENTER:k!==null&&Y(k,Ee);break}}Object(n.useEffect)(function(){var Ee=document.getElementById(fe);Ee&&Ee.scrollIntoView&&Ee.scrollIntoView(!1)},[k]),Object(n.useEffect)(function(){q||be(null)},[q]);var he=Object(ce.a)({},x?"marginLeft":"marginRight",ie);b.length||(he.visibility="hidden",he.order=1);var Oe=Ae()(Object(ce.a)({},"".concat(de,"-rtl"),x)),Ke=C?null:n.createElement(Xa.default,{prefixCls:de,overlay:H,trigger:["hover"],visible:q,transitionName:L,onVisibleChange:ae,overlayClassName:Oe,mouseEnterDelay:.1,mouseLeaveDelay:.1},n.createElement("button",{type:"button",className:"".concat(l,"-nav-more"),style:he,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":ne,id:"".concat(h,"-more"),"aria-expanded":q,onKeyDown:ye},W));return n.createElement("div",{className:Ae()("".concat(l,"-nav-operations"),G),style:$,ref:r},Ke,n.createElement(aa,{prefixCls:l,locale:v,editable:J}))}var Za=n.forwardRef(Qa),Mt=Object(n.createContext)(null),ka=.1,ra=.01,ht=20,ua=Math.pow(.995,ht);function qa(t,r){var l=Object(n.useState)(),h=Object(K.a)(l,2),b=h[0],v=h[1],C=Object(n.useState)(0),O=Object(K.a)(C,2),W=O[0],L=O[1],$=Object(n.useState)(0),G=Object(K.a)($,2),J=G[0],ie=G[1],x=Object(n.useState)(),Y=Object(K.a)(x,2),oe=Y[0],U=Y[1],q=Object(n.useRef)();function ae(de){var fe=de.touches[0],re=fe.screenX,H=fe.screenY;v({x:re,y:H}),window.clearInterval(q.current)}function Q(de){if(!!b){de.preventDefault();var fe=de.touches[0],re=fe.screenX,H=fe.screenY;v({x:re,y:H});var le=re-b.x,ye=H-b.y;r(le,ye);var he=Date.now();L(he),ie(he-W),U({x:le,y:ye})}}function se(){if(!!b&&(v(null),U(null),oe)){var de=oe.x/J,fe=oe.y/J,re=Math.abs(de),H=Math.abs(fe);if(Math.max(re,H)<ka)return;var le=de,ye=fe;q.current=window.setInterval(function(){if(Math.abs(le)<ra&&Math.abs(ye)<ra){window.clearInterval(q.current);return}le*=ua,ye*=ua,r(le*ht,ye*ht)},ht)}}var k=Object(n.useRef)();function be(de){var fe=de.deltaX,re=de.deltaY,H=0,le=Math.abs(fe),ye=Math.abs(re);le===ye?H=k.current==="x"?fe:re:le>ye?(H=fe,k.current="x"):(H=re,k.current="y"),r(-H,-H)&&de.preventDefault()}var ne=Object(n.useRef)(null);ne.current={onTouchStart:ae,onTouchMove:Q,onTouchEnd:se,onWheel:be},n.useEffect(function(){function de(le){ne.current.onTouchStart(le)}function fe(le){ne.current.onTouchMove(le)}function re(le){ne.current.onTouchEnd(le)}function H(le){ne.current.onWheel(le)}return document.addEventListener("touchmove",fe,{passive:!1}),document.addEventListener("touchend",re,{passive:!1}),t.current.addEventListener("touchstart",de,{passive:!1}),t.current.addEventListener("wheel",H),function(){document.removeEventListener("touchmove",fe),document.removeEventListener("touchend",re)}},[])}function _a(){var t=Object(n.useRef)(new Map);function r(h){return t.current.has(h)||t.current.set(h,n.createRef()),t.current.get(h)}function l(h){t.current.delete(h)}return[r,l]}function ia(t,r){var l=n.useRef(t),h=n.useState({}),b=Object(K.a)(h,2),v=b[1];function C(O){var W=typeof O=="function"?O(l.current):O;W!==l.current&&r(W,l.current),l.current=W,v({})}return[l.current,C]}var sa=function(r){var l=r.position,h=r.prefixCls,b=r.extra;if(!b)return null;var v,C=b;return l==="right"&&(v=C.right||!C.left&&C||null),l==="left"&&(v=C.left||null),v?n.createElement("div",{className:"".concat(h,"-extra-content")},v):null};function er(t,r){var l,h=n.useContext(Mt),b=h.prefixCls,v=h.tabs,C=t.className,O=t.style,W=t.id,L=t.animated,$=t.activeKey,G=t.rtl,J=t.extra,ie=t.editable,x=t.locale,Y=t.tabPosition,oe=t.tabBarGutter,U=t.children,q=t.onTabClick,ae=t.onTabScroll,Q=Object(n.useRef)(),se=Object(n.useRef)(),k=Object(n.useRef)(),be=Object(n.useRef)(),ne=_a(),de=Object(K.a)(ne,2),fe=de[0],re=de[1],H=Y==="top"||Y==="bottom",le=ia(0,function(te,Z){H&&ae&&ae({direction:te>Z?"left":"right"})}),ye=Object(K.a)(le,2),he=ye[0],Oe=ye[1],Ke=ia(0,function(te,Z){!H&&ae&&ae({direction:te>Z?"top":"bottom"})}),Ee=Object(K.a)(Ke,2),Fe=Ee[0],Me=Ee[1],Ie=Object(n.useState)(0),Pe=Object(K.a)(Ie,2),Se=Pe[0],$e=Pe[1],qe=Object(n.useState)(0),Ve=Object(K.a)(qe,2),Ue=Ve[0],Xe=Ve[1],Le=Object(n.useState)(0),Dn=Object(K.a)(Le,2),an=Dn[0],Qe=Dn[1],on=Object(n.useState)(0),yn=Object(K.a)(on,2),bn=yn[0],je=yn[1],He=Object(n.useState)(null),_e=Object(K.a)(He,2),Ze=_e[0],Wn=_e[1],Un=Object(n.useState)(null),Kn=Object(K.a)(Un,2),rn=Kn[0],Sn=Kn[1],ln=Object(n.useState)(0),Pn=Object(K.a)(ln,2),en=Pn[0],un=Pn[1],An=Object(n.useState)(0),cn=Object(K.a)(An,2),ke=cn[0],xe=cn[1],Jn=On(new Map),Gn=Object(K.a)(Jn,2),et=Gn[0],En=Gn[1],hn=M(v,et,Se),Hn="".concat(b,"-nav-operations-hidden"),Cn=0,mn=0;H?G?(Cn=0,mn=Math.max(0,Se-Ze)):(Cn=Math.min(0,Ze-Se),mn=0):(Cn=Math.min(0,rn-Ue),mn=0);function xn(te){return te<Cn?Cn:te>mn?mn:te}var jn=Object(n.useRef)(),Xn=Object(n.useState)(),dn=Object(K.a)(Xn,2),Bn=dn[0],ve=dn[1];function Re(){ve(Date.now())}function Te(){window.clearTimeout(jn.current)}qa(Q,function(te,Z){function Ce(Je,sn){Je(function(zn){var Zn=xn(zn+sn);return Zn})}if(H){if(Ze>=Se)return!1;Ce(Oe,te)}else{if(rn>=Ue)return!1;Ce(Me,Z)}return Te(),Re(),!0}),Object(n.useEffect)(function(){return Te(),Bn&&(jn.current=window.setTimeout(function(){ve(0)},100)),Te},[Bn]);function nn(){var te=arguments.length>0&&arguments[0]!==void 0?arguments[0]:$,Z=hn.get(te)||{width:0,height:0,left:0,right:0,top:0};if(H){var Ce=he;G?Z.right<he?Ce=Z.right:Z.right+Z.width>he+Ze&&(Ce=Z.right+Z.width-Ze):Z.left<-he?Ce=-Z.left:Z.left+Z.width>-he+Ze&&(Ce=-(Z.left+Z.width-Ze)),Me(0),Oe(xn(Ce))}else{var Je=Fe;Z.top<-Fe?Je=-Z.top:Z.top+Z.height>-Fe+rn&&(Je=-(Z.top+Z.height-rn)),Oe(0),Me(xn(Je))}}var Yn=T(hn,{width:Ze,height:rn,left:he,top:Fe},{width:an,height:bn},{width:en,height:ke},Object(me.a)(Object(me.a)({},t),{},{tabs:v})),gt=Object(K.a)(Yn,2),Wt=gt[0],Kt=gt[1],Lt=v.map(function(te){var Z=te.key;return n.createElement($n,{id:W,prefixCls:b,key:Z,rtl:G,tab:te,closable:te.closable,editable:ie,active:Z===$,tabPosition:Y,tabBarGutter:oe,renderWrapper:U,removeAriaLabel:x==null?void 0:x.removeAriaLabel,ref:fe(Z),onClick:function(Je){q(Z,Je)},onRemove:function(){re(Z)},onFocus:function(){nn(Z),Re(),G||(Q.current.scrollLeft=0),Q.current.scrollTop=0}})}),nt=wn(function(){var te,Z,Ce,Je,sn,zn,Zn,Vt,zt,or=((te=Q.current)===null||te===void 0?void 0:te.offsetWidth)||0,lr=((Z=Q.current)===null||Z===void 0?void 0:Z.offsetHeight)||0,ma=((Ce=be.current)===null||Ce===void 0?void 0:Ce.offsetWidth)||0,fa=((Je=be.current)===null||Je===void 0?void 0:Je.offsetHeight)||0,dr=((sn=k.current)===null||sn===void 0?void 0:sn.offsetWidth)||0,cr=((zn=k.current)===null||zn===void 0?void 0:zn.offsetHeight)||0;Wn(or),Sn(lr),un(ma),xe(fa);var pa=(((Zn=se.current)===null||Zn===void 0?void 0:Zn.offsetWidth)||0)-ma,va=(((Vt=se.current)===null||Vt===void 0?void 0:Vt.offsetHeight)||0)-fa;$e(pa),Xe(va);var ha=(zt=k.current)===null||zt===void 0?void 0:zt.className.includes(Hn);Qe(pa-(ha?0:dr)),je(va-(ha?0:cr)),En(function(){var ga=new Map;return v.forEach(function(mr){var ya=mr.key,ct=fe(ya).current;ct&&ga.set(ya,{width:ct.offsetWidth,height:ct.offsetHeight,left:ct.offsetLeft,top:ct.offsetTop})}),ga})}),yt=v.slice(0,Wt),st=v.slice(Kt+1),bt=[].concat(Object(fn.a)(yt),Object(fn.a)(st)),$t=Object(n.useState)(),Et=Object(K.a)($t,2),Ct=Et[0],tt=Et[1],In=hn.get($),Ft=Object(n.useRef)();function Ot(){Ye.a.cancel(Ft.current)}Object(n.useEffect)(function(){var te={};return In&&(H?(G?te.right=In.right:te.left=In.left,te.width=In.width):(te.top=In.top,te.height=In.height)),Ot(),Ft.current=Object(Ye.a)(function(){tt(te)}),Ot},[In,H,G]),Object(n.useEffect)(function(){nn()},[$,In,hn,H]),Object(n.useEffect)(function(){nt()},[G,oe,$,v.map(function(te){return te.key}).join("_")]);var ot=!!bt.length,Qn="".concat(b,"-nav-wrap"),lt,dt,Rt,Dt;return H?G?(dt=he>0,lt=he+Ze<Se):(lt=he<0,dt=-he+Ze<Se):(Rt=Fe<0,Dt=-Fe+rn<Ue),n.createElement("div",{ref:r,role:"tablist",className:Ae()("".concat(b,"-nav"),C),style:O,onKeyDown:function(){Re()}},n.createElement(sa,{position:"left",extra:J,prefixCls:b}),n.createElement(Ln.default,{onResize:nt},n.createElement("div",{className:Ae()(Qn,(l={},Object(ce.a)(l,"".concat(Qn,"-ping-left"),lt),Object(ce.a)(l,"".concat(Qn,"-ping-right"),dt),Object(ce.a)(l,"".concat(Qn,"-ping-top"),Rt),Object(ce.a)(l,"".concat(Qn,"-ping-bottom"),Dt),l)),ref:Q},n.createElement(Ln.default,{onResize:nt},n.createElement("div",{ref:se,className:"".concat(b,"-nav-list"),style:{transform:"translate(".concat(he,"px, ").concat(Fe,"px)"),transition:Bn?"none":void 0}},Lt,n.createElement(aa,{ref:be,prefixCls:b,locale:x,editable:ie,style:{visibility:ot?"hidden":null}}),n.createElement("div",{className:Ae()("".concat(b,"-ink-bar"),Object(ce.a)({},"".concat(b,"-ink-bar-animated"),L.inkBar)),style:Ct}))))),n.createElement(Za,Object(V.a)({},t,{ref:k,prefixCls:b,tabs:bt,className:!ot&&Hn})),n.createElement(sa,{position:"right",extra:J,prefixCls:b}))}var oa=n.forwardRef(er);function nr(t){var r=t.id,l=t.activeKey,h=t.animated,b=t.tabPosition,v=t.rtl,C=t.destroyInactiveTabPane,O=n.useContext(Mt),W=O.prefixCls,L=O.tabs,$=h.tabPane,G=L.findIndex(function(J){return J.key===l});return n.createElement("div",{className:Ae()("".concat(W,"-content-holder"))},n.createElement("div",{className:Ae()("".concat(W,"-content"),"".concat(W,"-content-").concat(b),Object(ce.a)({},"".concat(W,"-content-animated"),$)),style:G&&$?Object(ce.a)({},v?"marginRight":"marginLeft","-".concat(G,"00%")):null},L.map(function(J){return n.cloneElement(J.node,{key:J.key,prefixCls:W,tabKey:J.key,id:r,animated:$,active:J.key===l,destroyInactiveTabPane:C})})))}function la(t){var r=t.prefixCls,l=t.forceRender,h=t.className,b=t.style,v=t.id,C=t.active,O=t.animated,W=t.destroyInactiveTabPane,L=t.tabKey,$=t.children,G=n.useState(l),J=Object(K.a)(G,2),ie=J[0],x=J[1];n.useEffect(function(){C?x(!0):W&&x(!1)},[C,W]);var Y={};return C||(O?(Y.visibility="hidden",Y.height=0,Y.overflowY="hidden"):Y.display="none"),n.createElement("div",{id:v&&"".concat(v,"-panel-").concat(L),role:"tabpanel",tabIndex:C?0:-1,"aria-labelledby":v&&"".concat(v,"-tab-").concat(L),"aria-hidden":!C,style:Object(me.a)(Object(me.a)({},Y),b),className:Ae()("".concat(r,"-tabpane"),C&&"".concat(r,"-tabpane-active"),h)},(C||ie||l)&&$)}var da=0;function tr(t){return Object(Mn.a)(t).map(function(r){if(n.isValidElement(r)){var l=r.key!==void 0?String(r.key):void 0;return Object(me.a)(Object(me.a)({key:l},r.props),{},{node:r})}return null}).filter(function(r){return r})}function ar(t,r){var l,h=t.id,b=t.prefixCls,v=b===void 0?"rc-tabs":b,C=t.className,O=t.children,W=t.direction,L=t.activeKey,$=t.defaultActiveKey,G=t.editable,J=t.animated,ie=J===void 0?{inkBar:!0,tabPane:!1}:J,x=t.tabPosition,Y=x===void 0?"top":x,oe=t.tabBarGutter,U=t.tabBarStyle,q=t.tabBarExtraContent,ae=t.locale,Q=t.moreIcon,se=t.moreTransitionName,k=t.destroyInactiveTabPane,be=t.renderTabBar,ne=t.onChange,de=t.onTabClick,fe=t.onTabScroll,re=Object(Be.a)(t,["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"]),H=tr(O),le=W==="rtl",ye;ie===!1?ye={inkBar:!1,tabPane:!1}:ie===!0?ye={inkBar:!0,tabPane:!0}:ye=Object(me.a)({inkBar:!0,tabPane:!1},Object(tn.a)(ie)==="object"?ie:{});var he=Object(n.useState)(!1),Oe=Object(K.a)(he,2),Ke=Oe[0],Ee=Oe[1];Object(n.useEffect)(function(){Ee(Object(Tn.a)())},[]);var Fe=Object(Fn.a)(function(){var je;return(je=H[0])===null||je===void 0?void 0:je.key},{value:L,defaultValue:$}),Me=Object(K.a)(Fe,2),Ie=Me[0],Pe=Me[1],Se=Object(n.useState)(function(){return H.findIndex(function(je){return je.key===Ie})}),$e=Object(K.a)(Se,2),qe=$e[0],Ve=$e[1];Object(n.useEffect)(function(){var je=H.findIndex(function(_e){return _e.key===Ie});if(je===-1){var He;je=Math.max(0,Math.min(qe,H.length-1)),Pe((He=H[je])===null||He===void 0?void 0:He.key)}Ve(je)},[H.map(function(je){return je.key}).join("_"),Ie,qe]);var Ue=Object(Fn.a)(null,{value:h}),Xe=Object(K.a)(Ue,2),Le=Xe[0],Dn=Xe[1],an=Y;Ke&&!["left","right"].includes(Y)&&(an="top"),Object(n.useEffect)(function(){h||(Dn("rc-tabs-".concat(da)),da+=1)},[]);function Qe(je,He){de==null||de(je,He),Pe(je),ne==null||ne(je)}var on={id:Le,activeKey:Ie,animated:ye,tabPosition:an,rtl:le,mobile:Ke},yn,bn=Object(me.a)(Object(me.a)({},on),{},{editable:G,locale:ae,moreIcon:Q,moreTransitionName:se,tabBarGutter:oe,onTabClick:Qe,onTabScroll:fe,extra:q,style:U,panes:O});return be?yn=be(bn,oa):yn=n.createElement(oa,bn),n.createElement(Mt.Provider,{value:{tabs:H,prefixCls:v}},n.createElement("div",Object(V.a)({ref:r,id:h,className:Ae()(v,"".concat(v,"-").concat(an),(l={},Object(ce.a)(l,"".concat(v,"-mobile"),Ke),Object(ce.a)(l,"".concat(v,"-editable"),G),Object(ce.a)(l,"".concat(v,"-rtl"),le),l),C)},re),yn,n.createElement(nr,Object(V.a)({destroyInactiveTabPane:k},on,{animated:ye}))))}var ca=n.forwardRef(ar);ca.TabPane=la;var rr=ca,ur=rr,Tt=e("MZF8"),vn=e("dEAq"),ir=e("ZpkN"),br=e("TIsu");function wt(t,r){var l,h=(l=t.match(/\.(\w+)$/))===null||l===void 0?void 0:l[1];return h||(h=r.tsx?"tsx":"jsx"),h}var sr=t=>{var r,l,h,b=Object(n.useRef)(),v=Object(n.useContext)(vn.context),C=v.locale,O=Object(vn.useLocaleProps)(C,t),W=Object(vn.useDemoUrl)(O.identifier),L=O.demoUrl||W,$=(Tt.a===null||Tt.a===void 0?void 0:Tt.a.location.hash)==="#".concat(O.identifier),G=Object.keys(O.sources).length===1,J=Object(vn.useCodeSandbox)((r=O.hideActions)!==null&&r!==void 0&&r.includes("CSB")?null:O),ie=Object(vn.useRiddle)((l=O.hideActions)!==null&&l!==void 0&&l.includes("RIDDLE")?null:O),x=Object(vn.useMotions)(O.motions||[],b.current),Y=Object(X.default)(x,2),oe=Y[0],U=Y[1],q=Object(vn.useCopy)(),ae=Object(X.default)(q,2),Q=ae[0],se=ae[1],k=Object(n.useState)("_"),be=Object(X.default)(k,2),ne=be[0],de=be[1],fe=Object(n.useState)(wt(ne,O.sources[ne])),re=Object(X.default)(fe,2),H=re[0],le=re[1],ye=Object(n.useState)(Boolean(O.defaultShowCode)),he=Object(X.default)(ye,2),Oe=he[0],Ke=he[1],Ee=Object(n.useState)(Math.random()),Fe=Object(X.default)(Ee,2),Me=Fe[0],Ie=Fe[1],Pe=O.sources[ne][H]||O.sources[ne].content,Se=Object(vn.useTSPlaygroundUrl)(C,Pe),$e=Object(n.useRef)(),qe=Object(vn.usePrefersColor)(),Ve=Object(X.default)(qe,1),Ue=Ve[0];Object(n.useEffect)(()=>{Ie(Math.random())},[Ue]);function Xe(Le){de(Le),le(wt(Le,O.sources[Le]))}return E.a.createElement("div",{style:O.style,className:[O.className,"__dumi-default-previewer",$?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:O.identifier,"data-debug":O.debug||void 0,"data-iframe":O.iframe||void 0},O.iframe&&E.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),E.a.createElement("div",{ref:b,className:"__dumi-default-previewer-demo",style:{transform:O.transform?"translate(0, 0)":void 0,padding:O.compact||O.iframe&&O.compact!==!1?"0":void 0,background:O.background}},O.iframe?E.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(O.iframe).replace(/(\d)$/,"$1px")},key:Me,src:L,ref:$e}):O.children),E.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":O.title},O.title&&E.a.createElement(vn.AnchorLink,{to:"#".concat(O.identifier)},O.title),O.description&&E.a.createElement("div",{dangerouslySetInnerHTML:{__html:O.description}})),E.a.createElement("div",{className:"__dumi-default-previewer-actions"},J&&E.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:J}),ie&&E.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:ie}),O.motions&&E.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:U,onClick:()=>oe()}),O.iframe&&E.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:()=>Ie(Math.random())}),!((h=O.hideActions)!==null&&h!==void 0&&h.includes("EXTERNAL"))&&E.a.createElement(vn.Link,{target:"_blank",to:L},E.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),E.a.createElement("span",null),E.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":se,onClick:()=>Q(Pe)}),H==="tsx"&&Oe&&E.a.createElement(vn.Link,{target:"_blank",to:Se},E.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),E.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(Oe?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:()=>Ke(!Oe)})),Oe&&E.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!G&&E.a.createElement(ur,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xB7\xB7\xB7",defaultActiveKey:ne,onChange:Xe},Object.keys(O.sources).map(Le=>E.a.createElement(la,{tab:Le==="_"?"index.".concat(wt(Le,O.sources[Le])):Le,key:Le}))),E.a.createElement("div",{className:"__dumi-default-previewer-source"},E.a.createElement(ir.a,{code:Pe,lang:H,showCopy:!1}))))},Er=gn.default=sr},"80pN":function(Nn,gn,e){"use strict";(function(X){/** @license React v16.14.0
* react-dom-test-utils.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var n=e("MgzW"),E=e("q1tI"),V=e("i8i4"),ce=e("QCnb");function K(c){for(var P="https://reactjs.org/docs/error-decoder.html?invariant="+c,A=1;A<arguments.length;A++)P+="&args[]="+encodeURIComponent(arguments[A]);return"Minified React error #"+c+"; visit "+P+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var tn=E.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;tn.hasOwnProperty("ReactCurrentDispatcher")||(tn.ReactCurrentDispatcher={current:null}),tn.hasOwnProperty("ReactCurrentBatchConfig")||(tn.ReactCurrentBatchConfig={suspense:null});function Be(c){var P=c,A=c;if(c.alternate)for(;P.return;)P=P.return;else{c=P;do P=c,(P.effectTag&1026)!=0&&(A=P.return),c=P.return;while(c)}return P.tag===3?A:null}function me(c){if(Be(c)!==c)throw Error(K(188))}function at(c){var P=c.alternate;if(!P){if(P=Be(c),P===null)throw Error(K(188));return P!==c?null:c}for(var A=c,pe=P;;){var ee=A.return;if(ee===null)break;var De=ee.alternate;if(De===null){if(pe=ee.return,pe!==null){A=pe;continue}break}if(ee.child===De.child){for(De=ee.child;De;){if(De===A)return me(ee),c;if(De===pe)return me(ee),P;De=De.sibling}throw Error(K(188))}if(A.return!==pe.return)A=ee,pe=De;else{for(var ze=!1,Ge=ee.child;Ge;){if(Ge===A){ze=!0,A=ee,pe=De;break}if(Ge===pe){ze=!0,pe=ee,A=De;break}Ge=Ge.sibling}if(!ze){for(Ge=De.child;Ge;){if(Ge===A){ze=!0,A=De,pe=ee;break}if(Ge===pe){ze=!0,pe=De,A=ee;break}Ge=Ge.sibling}if(!ze)throw Error(K(189))}}if(A.alternate!==pe)throw Error(K(190))}if(A.tag!==3)throw Error(K(188));return A.stateNode.current===A?c:P}function Ae(){return!0}function Mn(){return!1}function Tn(c,P,A,pe){this.dispatchConfig=c,this._targetInst=P,this.nativeEvent=A,c=this.constructor.Interface;for(var ee in c)c.hasOwnProperty(ee)&&((P=c[ee])?this[ee]=P(A):ee==="target"?this.target=pe:this[ee]=A[ee]);return this.isDefaultPrevented=(A.defaultPrevented!=null?A.defaultPrevented:A.returnValue===!1)?Ae:Mn,this.isPropagationStopped=Mn,this}n(Tn.prototype,{preventDefault:function(){this.defaultPrevented=!0;var c=this.nativeEvent;c&&(c.preventDefault?c.preventDefault():typeof c.returnValue!="unknown"&&(c.returnValue=!1),this.isDefaultPrevented=Ae)},stopPropagation:function(){var c=this.nativeEvent;c&&(c.stopPropagation?c.stopPropagation():typeof c.cancelBubble!="unknown"&&(c.cancelBubble=!0),this.isPropagationStopped=Ae)},persist:function(){this.isPersistent=Ae},isPersistent:Mn,destructor:function(){var c=this.constructor.Interface,P;for(P in c)this[P]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=Mn,this._dispatchInstances=this._dispatchListeners=null}}),Tn.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(c){return c.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null},Tn.extend=function(c){function P(){}function A(){return pe.apply(this,arguments)}var pe=this;P.prototype=pe.prototype;var ee=new P;return n(ee,A.prototype),A.prototype=ee,A.prototype.constructor=A,A.Interface=n({},pe.Interface,c),A.extend=pe.extend,Ye(A),A},Ye(Tn);function Fn(c,P,A,pe){if(this.eventPool.length){var ee=this.eventPool.pop();return this.call(ee,c,P,A,pe),ee}return new this(c,P,A,pe)}function fn(c){if(!(c instanceof this))throw Error(K(279));c.destructor(),10>this.eventPool.length&&this.eventPool.push(c)}function Ye(c){c.eventPool=[],c.getPooled=Fn,c.release=fn}var Ln=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined");function wn(c,P){var A={};return A[c.toLowerCase()]=P.toLowerCase(),A["Webkit"+c]="webkit"+P,A["Moz"+c]="moz"+P,A}var On={animationend:wn("Animation","AnimationEnd"),animationiteration:wn("Animation","AnimationIteration"),animationstart:wn("Animation","AnimationStart"),transitionend:wn("Transition","TransitionEnd")},we={},kn={};Ln&&(kn=document.createElement("div").style,"AnimationEvent"in window||(delete On.animationend.animation,delete On.animationiteration.animation,delete On.animationstart.animation),"TransitionEvent"in window||delete On.transitionend.transition);function $n(c){if(we[c])return we[c];if(!On[c])return c;var P=On[c],A;for(A in P)if(P.hasOwnProperty(A)&&A in kn)return we[c]=P[A];return c}var rt=$n("animationend"),M=$n("animationiteration"),I=$n("animationstart"),T=$n("transitionend"),f=null;function s(c){if(f===null)try{var P=("require"+Math.random()).slice(0,7);f=(X&&X[P])("timers").setImmediate}catch(A){f=function(pe){var ee=new MessageChannel;ee.port1.onmessage=pe,ee.port2.postMessage(void 0)}}return f(c)}var g=V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,F=g[11],R=g[12],u=V.unstable_batchedUpdates,o=tn.IsSomeRendererActing,y=typeof ce.unstable_flushAllWithoutAsserting=="function",N=ce.unstable_flushAllWithoutAsserting||function(){for(var c=!1;F();)c=!0;return c};function B(c){try{N(),s(function(){N()?B(c):c()})}catch(P){c(P)}}var D=0,i=!1,j=V.findDOMNode,d=V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,a=d[0],p=d[4],m=d[5],S=d[6],w=d[7],z=d[8],_=d[9],ue=d[10];function ge(){}function pn(c,P){if(!c)return[];if(c=at(c),!c)return[];for(var A=c,pe=[];;){if(A.tag===5||A.tag===6||A.tag===1||A.tag===0){var ee=A.stateNode;P(ee)&&pe.push(ee)}if(A.child)A.child.return=A,A=A.child;else{if(A===c)return pe;for(;!A.sibling;){if(!A.return||A.return===c)return pe;A=A.return}A.sibling.return=A.return,A=A.sibling}}}function We(c,P){if(c&&!c._reactInternalFiber){var A=""+c;throw c=Array.isArray(c)?"an array":c&&c.nodeType===1&&c.tagName?"a DOM node":A==="[object Object]"?"object with keys {"+Object.keys(c).join(", ")+"}":A,Error(K(286,P,c))}}var Ne={renderIntoDocument:function(c){var P=document.createElement("div");return V.render(c,P)},isElement:function(c){return E.isValidElement(c)},isElementOfType:function(c,P){return E.isValidElement(c)&&c.type===P},isDOMComponent:function(c){return!(!c||c.nodeType!==1||!c.tagName)},isDOMComponentElement:function(c){return!!(c&&E.isValidElement(c)&&c.tagName)},isCompositeComponent:function(c){return Ne.isDOMComponent(c)?!1:c!=null&&typeof c.render=="function"&&typeof c.setState=="function"},isCompositeComponentWithType:function(c,P){return Ne.isCompositeComponent(c)?c._reactInternalFiber.type===P:!1},findAllInRenderedTree:function(c,P){return We(c,"findAllInRenderedTree"),c?pn(c._reactInternalFiber,P):[]},scryRenderedDOMComponentsWithClass:function(c,P){return We(c,"scryRenderedDOMComponentsWithClass"),Ne.findAllInRenderedTree(c,function(A){if(Ne.isDOMComponent(A)){var pe=A.className;typeof pe!="string"&&(pe=A.getAttribute("class")||"");var ee=pe.split(/\s+/);if(!Array.isArray(P)){if(P===void 0)throw Error(K(11));P=P.split(/\s+/)}return P.every(function(De){return ee.indexOf(De)!==-1})}return!1})},findRenderedDOMComponentWithClass:function(c,P){if(We(c,"findRenderedDOMComponentWithClass"),c=Ne.scryRenderedDOMComponentsWithClass(c,P),c.length!==1)throw Error("Did not find exactly one match (found: "+c.length+") for class:"+P);return c[0]},scryRenderedDOMComponentsWithTag:function(c,P){return We(c,"scryRenderedDOMComponentsWithTag"),Ne.findAllInRenderedTree(c,function(A){return Ne.isDOMComponent(A)&&A.tagName.toUpperCase()===P.toUpperCase()})},findRenderedDOMComponentWithTag:function(c,P){if(We(c,"findRenderedDOMComponentWithTag"),c=Ne.scryRenderedDOMComponentsWithTag(c,P),c.length!==1)throw Error("Did not find exactly one match (found: "+c.length+") for tag:"+P);return c[0]},scryRenderedComponentsWithType:function(c,P){return We(c,"scryRenderedComponentsWithType"),Ne.findAllInRenderedTree(c,function(A){return Ne.isCompositeComponentWithType(A,P)})},findRenderedComponentWithType:function(c,P){if(We(c,"findRenderedComponentWithType"),c=Ne.scryRenderedComponentsWithType(c,P),c.length!==1)throw Error("Did not find exactly one match (found: "+c.length+") for componentType:"+P);return c[0]},mockComponent:function(c,P){return P=P||c.mockTagName||"div",c.prototype.render.mockImplementation(function(){return E.createElement(P,null,this.props.children)}),this},nativeTouchData:function(c,P){return{touches:[{pageX:c,pageY:P}]}},Simulate:null,SimulateNative:{},act:function(c){function P(){D--,o.current=A,R.current=pe}i===!1&&(i=!0,console.error("act(...) is not supported in production builds of React, and might not behave as expected.")),D++;var A=o.current,pe=R.current;o.current=!0,R.current=!0;try{var ee=u(c)}catch(De){throw P(),De}if(ee!==null&&typeof ee=="object"&&typeof ee.then=="function")return{then:function(De,ze){ee.then(function(){1<D||y===!0&&A===!0?(P(),De()):B(function(Ge){P(),Ge?ze(Ge):De()})},function(Ge){P(),ze(Ge)})}};try{D!==1||y!==!1&&A!==!1||N(),P()}catch(De){throw P(),De}return{then:function(De){De()}}}};function Rn(c){return function(P,A){if(E.isValidElement(P))throw Error(K(228));if(Ne.isCompositeComponent(P))throw Error(K(229));var pe=p[c],ee=new ge;ee.target=P,ee.type=c.toLowerCase();var De=a(P),ze=new Tn(pe,De,ee,P);ze.persist(),n(ze,A),pe.phasedRegistrationNames?m(ze):S(ze),V.unstable_batchedUpdates(function(){w(P),ue(ze)}),z()}}Ne.Simulate={};for(var ut in p)Ne.Simulate[ut]=Rn(ut);function qn(c,P){return function(A,pe){var ee=new ge(c);n(ee,pe),Ne.isDOMComponent(A)?(A=j(A),ee.target=A,_(P,1,document,ee)):A.tagName&&(ee.target=A,_(P,1,document,ee))}}[["abort","abort"],[rt,"animationEnd"],[M,"animationIteration"],[I,"animationStart"],["blur","blur"],["canplaythrough","canPlayThrough"],["canplay","canPlay"],["cancel","cancel"],["change","change"],["click","click"],["close","close"],["compositionend","compositionEnd"],["compositionstart","compositionStart"],["compositionupdate","compositionUpdate"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["dragstart","dragStart"],["drag","drag"],["drop","drop"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],["ended","ended"],["error","error"],["focus","focus"],["input","input"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["loadstart","loadStart"],["loadstart","loadStart"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["mousedown","mouseDown"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["playing","playing"],["progress","progress"],["ratechange","rateChange"],["scroll","scroll"],["seeked","seeked"],["seeking","seeking"],["selectionchange","selectionChange"],["stalled","stalled"],["suspend","suspend"],["textInput","textInput"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchmove","touchMove"],["touchstart","touchStart"],[T,"transitionEnd"],["volumechange","volumeChange"],["waiting","waiting"],["wheel","wheel"]].forEach(function(c){var P=c[1];Ne.SimulateNative[P]=qn(P,c[0])}),X.exports=Ne.default||Ne}).call(this,e("hOG+")(Nn))},JjdP:function(Nn,gn,e){"use strict";e.r(gn);var X=e("9og8"),n=e("WmNS"),E=e.n(n),V=e("LtsZ"),ce=`import React, { useRef } from 'react';
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

export default Root;`,Ae=`import React, { useState, useEffect } from 'react';
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
}`,rt=gn.default={"guide-card":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(E.a.mark(function T(){return E.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"oLxE"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:ce}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"card-render":{version:"0.1.2"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"0.x"}},identifier:"guide-card"}},"chart-render-demo":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(E.a.mark(function T(){var f,s,g,F,R,u,o;return E.a.wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return u=function(D,i){if(!i&&D&&D.__esModule)return D;if(D===null||typeof D!="object"&&typeof D!="function")return{default:D};var j=R(i);if(j&&j.has(D))return j.get(D);var d={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var p in D)if(p!=="default"&&Object.prototype.hasOwnProperty.call(D,p)){var m=a?Object.getOwnPropertyDescriptor(D,p):null;m&&(m.get||m.set)?Object.defineProperty(d,p,m):d[p]=D[p]}return d.default=D,j&&j.set(D,d),d},R=function(D){if(typeof WeakMap!="function")return null;var i=new WeakMap,j=new WeakMap;return(R=function(a){return a?j:i})(D)},f=e("K+nK"),N.t0=f,N.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return N.t1=N.sent,s=(0,N.t0)(N.t1),N.t2=u,N.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return N.t3=N.sent,g=(0,N.t2)(N.t3),N.next=15,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 15:return F=N.sent,o=function(){var D=(0,g.useState)("Line"),i=(0,s.default)(D,2),j=i[0],d=i[1],a={Line:F.Line,Column:F.Column,PivotTable:F.PivotTable}[j];return g.default.createElement("div",null,g.default.createElement("div",{style:{marginBottom:10}},g.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return d("Line")}},"\u6298\u7EBF\u56FE"),g.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return d("Column")}},"\u67F1\u72B6\u56FE"),g.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return d("PivotTable")}},"\u4EA4\u53C9\u8868")),g.default.createElement(a,{meta:[{id:"date",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF",isDim:!1},{id:"uv",name:"\u8BBF\u5BA2\u6570",isDim:!1}],data:[{date:"20200101",pv:100,uv:50},{date:"20200102",pv:120,uv:60},{date:"20200103",pv:140,uv:70},{date:"20200104",pv:160,uv:80}]}))},N.abrupt("return",o);case 18:case"end":return N.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"chart-render-demo"}},"column-demo":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(E.a.mark(function T(){var f,s,g,F;return E.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return f=e("K+nK"),u.t0=f,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,s=(0,u.t0)(u.t1),u.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=u.sent,F=function(){return s.default.createElement(g.Column,{meta:[{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{pv:50,uv:20}]})},u.abrupt("return",F);case 11:case"end":return u.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo"}},"column-demo-1":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(E.a.mark(function T(){var f,s,g,F;return E.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return f=e("K+nK"),u.t0=f,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,s=(0,u.t0)(u.t1),u.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=u.sent,F=function(){return s.default.createElement(g.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},u.abrupt("return",F);case 11:case"end":return u.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-1"}},"column-demo-2":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(E.a.mark(function T(){var f,s,g,F;return E.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return f=e("K+nK"),u.t0=f,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,s=(0,u.t0)(u.t1),u.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=u.sent,F=function(){return s.default.createElement(g.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},u.abrupt("return",F);case 11:case"end":return u.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-2"}},"column-demo-3":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(E.a.mark(function T(){var f,s,g,F;return E.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return f=e("K+nK"),u.t0=f,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,s=(0,u.t0)(u.t1),u.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=u.sent,F=function(){return s.default.createElement(g.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},u.abrupt("return",F);case 11:case"end":return u.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-3"}},"column-demo-4":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(E.a.mark(function T(){var f,s,g,F;return E.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return f=e("K+nK"),u.t0=f,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,s=(0,u.t0)(u.t1),u.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=u.sent,F=function(){return s.default.createElement(g.Column,{inverted:!0,label:{position:"middle",layout:[{type:"interval-adjust-position"},{type:"interval-hide-overlap"},{type:"adjust-color"}]},meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},u.abrupt("return",F);case 11:case"end":return u.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-4"}},"line-demo":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(E.a.mark(function T(){var f,s,g,F;return E.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return f=e("K+nK"),u.t0=f,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,s=(0,u.t0)(u.t1),u.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=u.sent,F=function(){return s.default.createElement(g.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},u.abrupt("return",F);case 11:case"end":return u.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo"}},"line-demo-1":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(E.a.mark(function T(){var f,s,g,F;return E.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return f=e("K+nK"),u.t0=f,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,s=(0,u.t0)(u.t1),u.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=u.sent,F=function(){return s.default.createElement(g.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},u.abrupt("return",F);case 11:case"end":return u.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-1"}},"line-demo-2":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(E.a.mark(function T(){var f,s,g,F;return E.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return f=e("K+nK"),u.t0=f,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,s=(0,u.t0)(u.t1),u.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=u.sent,F=function(){return s.default.createElement(g.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"},{id:"pv",name:"\u8BBF\u95EE\u91CF"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20,pv:120},{ds:"2020-12-31",page:"\u9996\u9875",uv:120,pv:1120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21,pv:121},{ds:"2021-01-01",page:"\u9996\u9875",uv:121,pv:1121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15,pv:115},{ds:"2021-01-02",page:"\u9996\u9875",uv:115,pv:1115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40,pv:140},{ds:"2021-01-03",page:"\u9996\u9875",uv:140,pv:1140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31,pv:131},{ds:"2021-01-04",page:"\u9996\u9875",uv:131,pv:1131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32,pv:132},{ds:"2021-01-05",page:"\u9996\u9875",uv:132,pv:1132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30,pv:130},{ds:"2021-01-06",page:"\u9996\u9875",uv:130,pv:1130}]})},u.abrupt("return",F);case 11:case"end":return u.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-2"}},"line-demo-3":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(E.a.mark(function T(){var f,s,g,F;return E.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return f=e("K+nK"),u.t0=f,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,s=(0,u.t0)(u.t1),u.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=u.sent,F=function(){return s.default.createElement(g.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},u.abrupt("return",F);case 11:case"end":return u.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-3"}},"line-demo-4":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(E.a.mark(function T(){var f,s,g,F;return E.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return f=e("K+nK"),u.t0=f,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,s=(0,u.t0)(u.t1),u.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=u.sent,F=function(){return s.default.createElement(g.Line,{withArea:!0,isStack:!0,isPercent:!0,meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},u.abrupt("return",F);case 11:case"end":return u.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-4"}},"pivot-table-demo":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(E.a.mark(function T(){var f,s,g,F;return E.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return f=e("K+nK"),u.t0=f,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,s=(0,u.t0)(u.t1),u.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=u.sent,F=function(){return s.default.createElement(g.PivotTable,{style:{maxHeight:400,overflow:"auto"},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},u.abrupt("return",F);case 11:case"end":return u.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo"}},"pivot-table-demo-1":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(E.a.mark(function T(){var f,s,g,F;return E.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return f=e("K+nK"),u.t0=f,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,s=(0,u.t0)(u.t1),u.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=u.sent,F=function(){return s.default.createElement(g.PivotTable,{style:{maxHeight:400,overflow:"auto"},cellRender:function(N,B,D){return s.default.createElement("div",null,s.default.createElement("p",null,"\u53C2\u6570\u8868\uFF1A"),s.default.createElement("p",{style:{color:["red","orange","yellow","green","blue"][Object.keys(B).length]}},N),s.default.createElement("p",null,JSON.stringify(B)),s.default.createElement("p",null,JSON.stringify(D)))},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},u.abrupt("return",F);case 11:case"end":return u.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-1"}},"pivot-table-demo-2":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(E.a.mark(function T(){var f,s,g,F,R,u,o;return E.a.wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return u=function(D,i){if(!i&&D&&D.__esModule)return D;if(D===null||typeof D!="object"&&typeof D!="function")return{default:D};var j=R(i);if(j&&j.has(D))return j.get(D);var d={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var p in D)if(p!=="default"&&Object.prototype.hasOwnProperty.call(D,p)){var m=a?Object.getOwnPropertyDescriptor(D,p):null;m&&(m.get||m.set)?Object.defineProperty(d,p,m):d[p]=D[p]}return d.default=D,j&&j.set(D,d),d},R=function(D){if(typeof WeakMap!="function")return null;var i=new WeakMap,j=new WeakMap;return(R=function(a){return a?j:i})(D)},f=e("K+nK"),N.t0=f,N.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return N.t1=N.sent,s=(0,N.t0)(N.t1),N.t2=u,N.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return N.t3=N.sent,g=(0,N.t2)(N.t3),N.next=15,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 15:return F=N.sent,o=function(){var D=(0,g.useState)(!1),i=(0,s.default)(D,2),j=i[0],d=i[1];return g.default.createElement(g.default.Fragment,null,g.default.createElement("label",null,"\u53EF\u5C55\u5F00/\u6536\u7F29\uFF1A",g.default.createElement("input",{type:"checkbox",value:j,onChange:function(){return d(!j)}})),g.default.createElement(F.PivotTable,{leftExpandable:j,showSubtotal:!1,meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]}))},N.abrupt("return",o);case 18:case"end":return N.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-2"}},"form-render-demo":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(E.a.mark(function T(){var f,s,g,F,R,u,o,y,N,B,D,i,j,d;return E.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return D=function(S,w){if(!w&&S&&S.__esModule)return S;if(S===null||typeof S!="object"&&typeof S!="function")return{default:S};var z=B(w);if(z&&z.has(S))return z.get(S);var _={},ue=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ge in S)if(ge!=="default"&&Object.prototype.hasOwnProperty.call(S,ge)){var pn=ue?Object.getOwnPropertyDescriptor(S,ge):null;pn&&(pn.get||pn.set)?Object.defineProperty(_,ge,pn):_[ge]=S[ge]}return _.default=S,z&&z.set(S,_),_},B=function(S){if(typeof WeakMap!="function")return null;var w=new WeakMap,z=new WeakMap;return(B=function(ue){return ue?z:w})(S)},f=e("K+nK"),p.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return p.t0=f,p.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return p.t1=p.sent,s=(0,p.t0)(p.t1),p.t2=f,p.next=13,e.e(62).then(e.bind(null,"fWQN"));case 13:return p.t3=p.sent,g=(0,p.t2)(p.t3),p.t4=f,p.next=18,e.e(63).then(e.bind(null,"mtLc"));case 18:return p.t5=p.sent,F=(0,p.t4)(p.t5),p.t6=f,p.next=23,e.e(65).then(e.bind(null,"yKVA"));case 23:return p.t7=p.sent,R=(0,p.t6)(p.t7),p.t8=f,p.next=28,e.e(59).then(e.bind(null,"879j"));case 28:return p.t9=p.sent,u=(0,p.t8)(p.t9),p.t10=f,p.next=33,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 33:return p.t11=p.sent,o=(0,p.t10)(p.t11),p.next=37,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 37:return y=p.sent,p.t12=D,p.next=41,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 41:return p.t13=p.sent,N=(0,p.t12)(p.t13),i={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},j=function(m){(0,R.default)(w,m);var S=(0,u.default)(w);function w(){return(0,g.default)(this,w),S.apply(this,arguments)}return(0,F.default)(w,[{key:"render",value:function(){var _=this.props.form;return o.default.createElement("div",null,o.default.createElement(N.default,{form:_,schema:i}),o.default.createElement(s.default,{type:"primary",onClick:_.submit},"\u63D0\u4EA4"))}}]),w}(o.default.Component),d=(0,N.connectForm)(j),p.abrupt("return",d);case 47:case"end":return p.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default connectForm(Demo);`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo"}},"form-render-demo-1":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(E.a.mark(function T(){var f,s,g,F,R,u,o,y,N,B;return E.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return o=function(d,a){if(!a&&d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var p=u(a);if(p&&p.has(d))return p.get(d);var m={},S=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var w in d)if(w!=="default"&&Object.prototype.hasOwnProperty.call(d,w)){var z=S?Object.getOwnPropertyDescriptor(d,w):null;z&&(z.get||z.set)?Object.defineProperty(m,w,z):m[w]=d[w]}return m.default=d,p&&p.set(d,m),m},u=function(d){if(typeof WeakMap!="function")return null;var a=new WeakMap,p=new WeakMap;return(u=function(S){return S?p:a})(d)},f=e("K+nK"),i.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return i.t0=f,i.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return i.t1=i.sent,s=(0,i.t0)(i.t1),i.t2=f,i.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return i.t3=i.sent,g=(0,i.t2)(i.t3),i.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 17:return F=i.sent,i.t4=o,i.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 21:return i.t5=i.sent,R=(0,i.t4)(i.t5),y={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},N=function(){var d=(0,R.useForm)();return g.default.createElement("div",null,g.default.createElement(R.default,{form:d,schema:y}),g.default.createElement(s.default,{type:"primary",onClick:d.submit},"\u63D0\u4EA4"))},B=N,i.abrupt("return",B);case 27:case"end":return i.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo-1"}},"form-render-demo-2":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(E.a.mark(function T(){var f,s,g,F,R,u,o,y,N,B;return E.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return o=function(d,a){if(!a&&d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var p=u(a);if(p&&p.has(d))return p.get(d);var m={},S=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var w in d)if(w!=="default"&&Object.prototype.hasOwnProperty.call(d,w)){var z=S?Object.getOwnPropertyDescriptor(d,w):null;z&&(z.get||z.set)?Object.defineProperty(m,w,z):m[w]=d[w]}return m.default=d,p&&p.set(d,m),m},u=function(d){if(typeof WeakMap!="function")return null;var a=new WeakMap,p=new WeakMap;return(u=function(S){return S?p:a})(d)},f=e("K+nK"),i.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return i.t0=f,i.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return i.t1=i.sent,s=(0,i.t0)(i.t1),i.t2=f,i.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return i.t3=i.sent,g=(0,i.t2)(i.t3),i.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 17:return F=i.sent,i.t4=o,i.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 21:return i.t5=i.sent,R=(0,i.t4)(i.t5),y={displayType:"row",labelWidth:60,type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F",type:"range",format:"date"},siteUrl:{title:"\u7F51\u5740",type:"string",placeholder:"\u6B64\u5904\u5FC5\u586B",required:!0,props:{addonBefore:"https://",addonAfter:".com"}}}},N=function(){var d=(0,R.useForm)(),a=function(m,S){S.length>0?alert("errors:"+JSON.stringify(S)):alert("formData:"+JSON.stringify(m,null,2))};return g.default.createElement("div",null,g.default.createElement(R.default,{form:d,schema:y,onFinish:a}),g.default.createElement(s.default,{type:"primary",onClick:d.submit},"\u63D0\u4EA4"))},B=N,i.abrupt("return",B);case 27:case"end":return i.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-demo-2"}},"migrate-demo":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(E.a.mark(function T(){var f,s,g,F,R,u,o,y;return E.a.wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return o=function(){var i=(0,g.useForm)(),j=function(a,p){p.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(p))):alert(JSON.stringify(a))};return s.default.createElement("div",null,s.default.createElement(g.default,{form:i,schema:u,onFinish:j}),s.default.createElement("button",{onClick:i.submit},"\u63D0\u4EA4"))},R=function(i,j){if(!j&&i&&i.__esModule)return i;if(i===null||typeof i!="object"&&typeof i!="function")return{default:i};var d=F(j);if(d&&d.has(i))return d.get(i);var a={},p=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var m in i)if(m!=="default"&&Object.prototype.hasOwnProperty.call(i,m)){var S=p?Object.getOwnPropertyDescriptor(i,m):null;S&&(S.get||S.set)?Object.defineProperty(a,m,S):a[m]=i[m]}return a.default=i,d&&d.set(i,a),a},F=function(i){if(typeof WeakMap!="function")return null;var j=new WeakMap,d=new WeakMap;return(F=function(p){return p?d:j})(i)},f=e("K+nK"),B.t0=f,B.next=7,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 7:return B.t1=B.sent,s=(0,B.t0)(B.t1),B.t2=R,B.next=12,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 12:return B.t3=B.sent,g=(0,B.t2)(B.t3),u={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}},y=o,B.abrupt("return",y);case 17:case"end":return B.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate-demo"}},"display-demo":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(E.a.mark(function T(){var f,s,g,F,R;return E.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,s=(0,o.t0)(o.t1),o.t2=f,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,g=(0,o.t2)(o.t3),F=function(N){return{type:"object",displayType:N,properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},objectName:{title:"\u5BF9\u8C61",bind:"obj",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},R=function(){return s.default.createElement("div",null,s.default.createElement("h2",null,"display: row"),s.default.createElement(g.default,{schema:F("row")}),s.default.createElement("h2",null,"display: column"),s.default.createElement(g.default,{schema:F("column")}))},o.abrupt("return",R);case 14:case"end":return o.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`},"demo/display.js":{import:"../demo/display",content:K}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo"}},"display-demo-1":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(E.a.mark(function T(){var f,s,g,F,R;return E.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,s=(0,o.t0)(o.t1),o.t2=f,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,g=(0,o.t2)(o.t3),F={type:"object",displayType:"inline",properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},R=function(){return s.default.createElement(g.default,{schema:F})},o.abrupt("return",R);case 14:case"end":return o.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:K}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-1"}},"display-demo-2":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(E.a.mark(function T(){var f,s,g,F,R;return E.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,s=(0,o.t0)(o.t1),o.t2=f,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,g=(0,o.t2)(o.t3),F={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0},check:{title:"box",type:"boolean",default:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},R=function(){return s.default.createElement(g.default,{readOnly:!0,schema:F})},o.abrupt("return",R);case 14:case"end":return o.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form readOnly schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:K}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-2"}},"display-demo-3":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(E.a.mark(function T(){var f,s,g,F,R;return E.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,s=(0,o.t0)(o.t1),o.t2=f,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return o.t3=o.sent,g=(0,o.t2)(o.t3),F={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0,width:"50%"},check:{title:"box",type:"boolean",default:!0,width:"50%",labelWidth:6},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},R=function(){return s.default.createElement(g.default,{labelWidth:"200",schema:F})},o.abrupt("return",R);case 14:case"end":return o.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form labelWidth="200" schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:K}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-3"}},"display-demo-4":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(E.a.mark(function T(){var f,s,g,F,R,u;return E.a.wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return f=e("K+nK"),y.t0=f,y.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return y.t1=y.sent,s=(0,y.t0)(y.t1),y.t2=f,y.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return y.t3=y.sent,g=(0,y.t2)(y.t3),F={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},R=function(){return s.default.createElement(g.default,{schema:F})},u=R,y.abrupt("return",u);case 15:case"end":return y.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:K}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-4"}},"display-demo-5":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(E.a.mark(function T(){var f,s,g,F,R,u;return E.a.wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return f=e("K+nK"),y.t0=f,y.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return y.t1=y.sent,s=(0,y.t0)(y.t1),y.t2=f,y.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return y.t3=y.sent,g=(0,y.t2)(y.t3),F={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},R=function(){return s.default.createElement(g.default,{schema:F})},u=R,y.abrupt("return",u);case 15:case"end":return y.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:K}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-5"}},"display-demo-6":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(E.a.mark(function T(){var f,s,g,F,R,u;return E.a.wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return f=e("K+nK"),y.t0=f,y.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return y.t1=y.sent,s=(0,y.t0)(y.t1),y.t2=f,y.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return y.t3=y.sent,g=(0,y.t2)(y.t3),F={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},R=function(){return s.default.createElement(g.default,{schema:F})},u=R,y.abrupt("return",u);case 15:case"end":return y.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:K}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-6"}},"display-demo-7":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(E.a.mark(function T(){var f,s,g,F,R,u;return E.a.wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return f=e("K+nK"),y.t0=f,y.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return y.t1=y.sent,s=(0,y.t0)(y.t1),y.t2=f,y.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return y.t3=y.sent,g=(0,y.t2)(y.t3),F={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},R=function(){return s.default.createElement(g.default,{schema:F})},u=R,y.abrupt("return",u);case 15:case"end":return y.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:K}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-7"}},"form-methods-demo":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(E.a.mark(function T(){var f,s,g,F,R,u,o,y,N,B,D,i,j;return E.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return D=function(m,S){if(!S&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var w=B(S);if(w&&w.has(m))return w.get(m);var z={},_=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ue in m)if(ue!=="default"&&Object.prototype.hasOwnProperty.call(m,ue)){var ge=_?Object.getOwnPropertyDescriptor(m,ue):null;ge&&(ge.get||ge.set)?Object.defineProperty(z,ue,ge):z[ue]=m[ue]}return z.default=m,w&&w.set(m,z),z},B=function(m){if(typeof WeakMap!="function")return null;var S=new WeakMap,w=new WeakMap;return(B=function(_){return _?w:S})(m)},f=e("K+nK"),a.next=5,e.e(17).then(e.t.bind(null,"lfLe",7));case 5:return a.t0=f,a.next=8,e.e(18).then(e.t.bind(null,"Cp9S",7));case 8:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return a.t2=f,a.next=15,e.e(12).then(e.t.bind(null,"4IMT",7));case 15:return a.t3=a.sent,g=(0,a.t2)(a.t3),a.next=19,e.e(14).then(e.t.bind(null,"tL+A",7));case 19:return a.t4=f,a.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return a.t5=a.sent,F=(0,a.t4)(a.t5),a.t6=f,a.next=27,Promise.resolve().then(e.bind(null,"tJVT"));case 27:return a.t7=a.sent,R=(0,a.t6)(a.t7),a.t8=D,a.next=32,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 32:return a.t9=a.sent,u=(0,a.t8)(a.t9),a.next=36,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 36:return o=a.sent,a.t10=D,a.next=40,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 40:return a.t11=a.sent,y=(0,a.t10)(a.t11),a.next=44,e.e(15).then(e.bind(null,"OH0R"));case 44:return N=a.sent,i=function(){var m=(0,y.useForm)(),S=(0,u.useState)({}),w=(0,R.default)(S,2),z=w[0],_=w[1],ue=function(){(0,N.fakeApi)("xxx/getForm").then(function(We){m.setValues({input1:"hello world",select1:"c"})})};(0,u.useEffect)(function(){(0,N.delay)(1e3).then(function(pn){_({type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}})})},[]);var ge=function(We,Ne){Ne.length>0?F.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(Ne.map(function(Rn){return Rn.name}))):(0,N.fakeApi)("xxx/submit",We).then(function(Rn){return F.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})};return u.default.createElement("div",{style:{width:"400px"}},u.default.createElement(y.default,{form:m,schema:z,onFinish:ge}),u.default.createElement(s.default,null,u.default.createElement(g.default,{onClick:ue},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),u.default.createElement(g.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},j=i,a.abrupt("return",j);case 48:case"end":return a.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:tn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo"}},"form-methods-demo-1":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(E.a.mark(function T(){var f,s,g,F,R,u,o,y,N,B,D,i,j;return E.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return B=function(m,S){if(!S&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var w=N(S);if(w&&w.has(m))return w.get(m);var z={},_=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ue in m)if(ue!=="default"&&Object.prototype.hasOwnProperty.call(m,ue)){var ge=_?Object.getOwnPropertyDescriptor(m,ue):null;ge&&(ge.get||ge.set)?Object.defineProperty(z,ue,ge):z[ue]=m[ue]}return z.default=m,w&&w.set(m,z),z},N=function(m){if(typeof WeakMap!="function")return null;var S=new WeakMap,w=new WeakMap;return(N=function(_){return _?w:S})(m)},f=e("K+nK"),a.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return a.t0=f,a.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.t2=f,a.next=13,Promise.resolve().then(e.bind(null,"PpiC"));case 13:return a.t3=a.sent,g=(0,a.t2)(a.t3),a.next=17,e.e(14).then(e.t.bind(null,"tL+A",7));case 17:return a.t4=f,a.next=20,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 20:return a.t5=a.sent,F=(0,a.t4)(a.t5),a.t6=f,a.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return a.t7=a.sent,R=(0,a.t6)(a.t7),a.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 29:return u=a.sent,a.t8=B,a.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 33:return a.t9=a.sent,o=(0,a.t8)(a.t9),a.next=37,e.e(15).then(e.bind(null,"OH0R"));case 37:return y=a.sent,D={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},i=function(){var m=(0,o.useForm)(),S=function(_,ue){ue.length>0?F.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(ue.map(function(ge){return ge.name}))):(0,y.fakeApi)("xxx/submit",_).then(function(ge){return F.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},w=function(_){var ue=_.data,ge=_.errors,pn=_.schema,We=(0,g.default)(_,["data","errors","schema"]);return(0,y.fakeApi)("xxx/validation").then(function(Ne){return{name:"select1",error:["\u5916\u90E8\u6821\u9A8C\u9519\u8BEF"]}})};return R.default.createElement("div",{style:{width:"400px"}},R.default.createElement(o.default,{form:m,schema:D,beforeFinish:w,onFinish:S}),R.default.createElement(s.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},j=i,a.abrupt("return",j);case 42:case"end":return a.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:tn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-1"}},"form-methods-demo-2":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(E.a.mark(function T(){var f,s,g,F,R,u,o,y,N,B,D,i,j;return E.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return B=function(m,S){if(!S&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var w=N(S);if(w&&w.has(m))return w.get(m);var z={},_=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ue in m)if(ue!=="default"&&Object.prototype.hasOwnProperty.call(m,ue)){var ge=_?Object.getOwnPropertyDescriptor(m,ue):null;ge&&(ge.get||ge.set)?Object.defineProperty(z,ue,ge):z[ue]=m[ue]}return z.default=m,w&&w.set(m,z),z},N=function(m){if(typeof WeakMap!="function")return null;var S=new WeakMap,w=new WeakMap;return(N=function(_){return _?w:S})(m)},f=e("K+nK"),a.next=5,e.e(17).then(e.t.bind(null,"lfLe",7));case 5:return a.t0=f,a.next=8,e.e(18).then(e.t.bind(null,"Cp9S",7));case 8:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return a.t2=f,a.next=15,e.e(12).then(e.t.bind(null,"4IMT",7));case 15:return a.t3=a.sent,g=(0,a.t2)(a.t3),a.next=19,e.e(14).then(e.t.bind(null,"tL+A",7));case 19:return a.t4=f,a.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return a.t5=a.sent,F=(0,a.t4)(a.t5),a.t6=f,a.next=27,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 27:return a.t7=a.sent,R=(0,a.t6)(a.t7),a.next=31,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 31:return u=a.sent,a.t8=B,a.next=35,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 35:return a.t9=a.sent,o=(0,a.t8)(a.t9),a.next=39,e.e(15).then(e.bind(null,"OH0R"));case 39:return y=a.sent,D={type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F\u8303\u56F4",type:"range",format:"date"}}},i=function(){var m=(0,o.useForm)(),S=function(_,ue){ue.length>0?F.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(ue.map(function(ge){return ge.name}))):(0,y.fakeApi)("xxx/submit",_).then(function(ge){return F.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},w=function(){(0,y.fakeApi)("xxx/getForm").then(function(_){m.setValues({startDate:"2020-04-04",endDate:"2020-04-24"})})};return R.default.createElement("div",{style:{width:"400px"}},R.default.createElement(o.default,{form:m,schema:D,onFinish:S}),R.default.createElement(s.default,null,R.default.createElement(g.default,{onClick:w},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),R.default.createElement(g.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},j=i,a.abrupt("return",j);case 44:case"end":return a.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:tn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-2"}},"form-methods-demo-3":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(E.a.mark(function T(){var f,s,g,F,R,u,o,y,N,B,D,i;return E.a.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return N=function(p,m){if(!m&&p&&p.__esModule)return p;if(p===null||typeof p!="object"&&typeof p!="function")return{default:p};var S=y(m);if(S&&S.has(p))return S.get(p);var w={},z=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var _ in p)if(_!=="default"&&Object.prototype.hasOwnProperty.call(p,_)){var ue=z?Object.getOwnPropertyDescriptor(p,_):null;ue&&(ue.get||ue.set)?Object.defineProperty(w,_,ue):w[_]=p[_]}return w.default=p,S&&S.set(p,w),w},y=function(p){if(typeof WeakMap!="function")return null;var m=new WeakMap,S=new WeakMap;return(y=function(z){return z?S:m})(p)},f=e("K+nK"),d.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return d.t0=f,d.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return d.t1=d.sent,s=(0,d.t0)(d.t1),d.next=12,e.e(14).then(e.t.bind(null,"tL+A",7));case 12:return d.t2=f,d.next=15,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 15:return d.t3=d.sent,g=(0,d.t2)(d.t3),d.t4=N,d.next=20,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 20:return d.t5=d.sent,F=(0,d.t4)(d.t5),d.next=24,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 24:return R=d.sent,d.t6=N,d.next=28,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 28:return d.t7=d.sent,u=(0,d.t6)(d.t7),d.next=32,e.e(15).then(e.bind(null,"OH0R"));case 32:return o=d.sent,B={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select1:{title:"\u5355\u9009",type:"string",widget:"select"}}}}},D=function(){var p=(0,u.useForm)(),m=function(){p.setSchemaByPath("obj1.select1",{enum:["nouth","south","east","west"],enumNames:["\u4E1C","\u5357","\u897F","\u5317"]})},S=function(z,_){_.length>0?g.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(_.map(function(ue){return ue.name}))):g.default.info(JSON.stringify(z))};return F.default.createElement("div",{style:{width:"400px"}},F.default.createElement(u.default,{form:p,schema:B,onMount:m,onFinish:S}),F.default.createElement(s.default,{type:"primary",onClick:p.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},i=D,d.abrupt("return",i);case 37:case"end":return d.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:tn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-3"}},"function-demo":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(E.a.mark(function T(){var f,s,g,F,R,u,o,y;return E.a.wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return R=function(i,j){if(!j&&i&&i.__esModule)return i;if(i===null||typeof i!="object"&&typeof i!="function")return{default:i};var d=F(j);if(d&&d.has(i))return d.get(i);var a={},p=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var m in i)if(m!=="default"&&Object.prototype.hasOwnProperty.call(i,m)){var S=p?Object.getOwnPropertyDescriptor(i,m):null;S&&(S.get||S.set)?Object.defineProperty(a,m,S):a[m]=i[m]}return a.default=i,d&&d.set(i,a),a},F=function(i){if(typeof WeakMap!="function")return null;var j=new WeakMap,d=new WeakMap;return(F=function(p){return p?d:j})(i)},f=e("K+nK"),B.t0=f,B.next=6,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 6:return B.t1=B.sent,s=(0,B.t0)(B.t1),B.t2=R,B.next=11,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 11:return B.t3=B.sent,g=(0,B.t2)(B.t3),u={type:"object",properties:{select1:{title:"\u5355\u9009",description:"\u5C1D\u8BD5\u9009\u62E9\u201C\u663E\u793A\u8F93\u5165\u6846\u201D",type:"string",enum:["a","b"],enumNames:["\u9690\u85CF\u8F93\u5165\u6846","\u663E\u793A\u8F93\u5165\u6846"],disabled:"{{rootValue.input1.length > 5}}",default:"a"},input1:{title:"\u8F93\u5165\u6846",description:"\u5C1D\u8BD5\u8F93\u5165\u8D85\u8FC75\u4E2A\u5B57\u7B26",type:"string",hidden:'{{formData.select1 == "a"}}'}}},o=function(){var i=(0,g.useForm)();return s.default.createElement(g.default,{form:i,schema:u})},y=o,B.abrupt("return",y);case 17:case"end":return B.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo1;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo"}},"function-demo-1":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(E.a.mark(function T(){var f,s,g,F,R;return E.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,s=(0,o.t0)(o.t1),o.t2=f,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return o.t3=o.sent,g=(0,o.t2)(o.t3),o.next=13,e.e(19).then(e.bind(null,"8iYR"));case 13:return F=o.sent,R=function(){return s.default.createElement(g.default,{schema:F.expression})},o.abrupt("return",R);case 16:case"end":return o.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { expression } from '../json/schema';

export default () => <FR schema={expression} />;`},"demo/FR.jsx":{import:"../demo/FR",content:Be},"json/schema.js":{import:"../json/schema",content:me}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo-1"}},"lifeCycle-demo":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(E.a.mark(function T(){var f,s,g,F,R,u,o,y,N;return E.a.wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return R=function(j,d){if(!d&&j&&j.__esModule)return j;if(j===null||typeof j!="object"&&typeof j!="function")return{default:j};var a=F(d);if(a&&a.has(j))return a.get(j);var p={},m=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var S in j)if(S!=="default"&&Object.prototype.hasOwnProperty.call(j,S)){var w=m?Object.getOwnPropertyDescriptor(j,S):null;w&&(w.get||w.set)?Object.defineProperty(p,S,w):p[S]=j[S]}return p.default=j,a&&a.set(j,p),p},F=function(j){if(typeof WeakMap!="function")return null;var d=new WeakMap,a=new WeakMap;return(F=function(m){return m?a:d})(j)},D.t0=R,D.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return D.t1=D.sent,f=(0,D.t0)(D.t1),D.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 9:return s=D.sent,D.t2=R,D.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 13:return D.t3=D.sent,g=(0,D.t2)(D.t3),u=function(j){return new Promise(function(d){return setTimeout(d,j)})},o={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u4E0B\u62C9\u9009\u6846",description:"\u52A0\u8F7D\u4E2D...",type:"string",enum:[],widget:"select"}}},y=function(){var j=(0,g.useForm)(),d=function(){j.setValues({input1:"hello world"}),u(3e3).then(function(p){j.setSchemaByPath("select1",{description:"",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]})})};return f.default.createElement(g.default,{form:j,schema:o,onMount:d})},N=y,D.abrupt("return",N);case 20:case"end":return D.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"lifeCycle-demo"}},"watch-demo":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(E.a.mark(function T(){var f,s,g,F,R,u,o,y;return E.a.wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return R=function(i,j){if(!j&&i&&i.__esModule)return i;if(i===null||typeof i!="object"&&typeof i!="function")return{default:i};var d=F(j);if(d&&d.has(i))return d.get(i);var a={},p=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var m in i)if(m!=="default"&&Object.prototype.hasOwnProperty.call(i,m)){var S=p?Object.getOwnPropertyDescriptor(i,m):null;S&&(S.get||S.set)?Object.defineProperty(a,m,S):a[m]=i[m]}return a.default=i,d&&d.set(i,a),a},F=function(i){if(typeof WeakMap!="function")return null;var j=new WeakMap,d=new WeakMap;return(F=function(p){return p?d:j})(i)},B.t0=R,B.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return B.t1=B.sent,f=(0,B.t0)(B.t1),B.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 9:return s=B.sent,B.t2=R,B.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 13:return B.t3=B.sent,g=(0,B.t2)(B.t3),u={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"}}},o=function(){var i=(0,g.useForm)(),j={"#":function(a){console.log("\u8868\u5355\u7684\u65F6\u65F6\u6570\u636E\u4E3A\uFF1A",a)},input1:function(a){i.setValueByPath("input2",a)}};return f.default.createElement(g.default,{form:i,schema:u,watch:j})},y=o,B.abrupt("return",y);case 19:case"end":return B.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo"}},"watch-demo-1":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(E.a.mark(function T(){var f,s,g,F,R,u,o,y,N,B;return E.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return o=function(d,a){if(!a&&d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var p=u(a);if(p&&p.has(d))return p.get(d);var m={},S=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var w in d)if(w!=="default"&&Object.prototype.hasOwnProperty.call(d,w)){var z=S?Object.getOwnPropertyDescriptor(d,w):null;z&&(z.get||z.set)?Object.defineProperty(m,w,z):m[w]=d[w]}return m.default=d,p&&p.set(d,m),m},u=function(d){if(typeof WeakMap!="function")return null;var a=new WeakMap,p=new WeakMap;return(u=function(S){return S?p:a})(d)},f=e("K+nK"),i.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return i.t0=f,i.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return i.t1=i.sent,s=(0,i.t0)(i.t1),i.t2=o,i.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return i.t3=i.sent,g=(0,i.t2)(i.t3),i.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 17:return F=i.sent,i.t4=o,i.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 21:return i.t5=i.sent,R=(0,i.t4)(i.t5),y={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"radio"}}}}},N=function(){var d=(0,R.useForm)(),a=function(S,w){w.length>0?alert("errorFields:"+JSON.stringify(w)):alert("formData:"+JSON.stringify(S,null,2))},p={input1:function(S){S.length>2?d.setSchemaByPath("obj1.select",function(w){var z=w.enumNames;return{enumNames:z.map(function(_){return _+"a"})}}):d.setSchemaByPath("obj1.select",{enumNames:["\u65E9","\u4E2D","\u665A"]})}};return g.default.createElement("div",null,g.default.createElement(R.default,{form:d,schema:y,onFinish:a,watch:p}),g.default.createElement(s.default,{type:"",style:{marginRight:8},onClick:function(){return d.setSchemaByPath("input2",{title:"\u7F16\u8F91\u6846",format:"textarea"})}},"\u5C06 input \u6539\u4E3A textarea"),g.default.createElement(s.default,{type:"primary",onClick:d.submit},"\u63D0\u4EA4"))},B=N,i.abrupt("return",B);case 27:case"end":return i.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo-1"}},"widget-demo":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(E.a.mark(function T(){var f,s,g,F,R,u,o,y,N,B,D,i,j;return E.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return N=function(m,S){if(!S&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var w=y(S);if(w&&w.has(m))return w.get(m);var z={},_=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ue in m)if(ue!=="default"&&Object.prototype.hasOwnProperty.call(m,ue)){var ge=_?Object.getOwnPropertyDescriptor(m,ue):null;ge&&(ge.get||ge.set)?Object.defineProperty(z,ue,ge):z[ue]=m[ue]}return z.default=m,w&&w.set(m,z),z},y=function(m){if(typeof WeakMap!="function")return null;var S=new WeakMap,w=new WeakMap;return(y=function(_){return _?w:S})(m)},f=e("K+nK"),a.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return a.t0=f,a.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return a.t1=a.sent,s=(0,a.t0)(a.t1),a.next=12,Promise.all([e.e(3),e.e(60)]).then(e.t.bind(null,"cUip",7));case 12:return a.t2=f,a.next=15,Promise.all([e.e(0),e.e(12),e.e(58),e.e(61)]).then(e.t.bind(null,"iJl9",7));case 15:return a.t3=a.sent,g=(0,a.t2)(a.t3),a.t4=f,a.next=20,e.e(64).then(e.bind(null,"0Owb"));case 20:return a.t5=a.sent,F=(0,a.t4)(a.t5),a.t6=N,a.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return a.t7=a.sent,R=(0,a.t6)(a.t7),a.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 29:return u=a.sent,a.t8=N,a.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 33:return a.t9=a.sent,o=(0,a.t8)(a.t9),B={type:"object",properties:{string:{title:"\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6",type:"string",widget:"site"},select:{title:"\u5355\u9009",type:"number",enum:[1,2,3],enumNames:["\u9009\u98791","\u9009\u98792","\u9009\u98793"]}}},D=function(m){return R.default.createElement(g.default,(0,F.default)({addonBefore:"http://",addonAfter:".com"},m))},i=function(){var m=(0,o.useForm)(),S=function(){};return R.default.createElement("div",null,R.default.createElement(o.default,{form:m,schema:B,widgets:{site:D},onFinish:function(z){return alert(JSON.stringify(z,null,2))}}),R.default.createElement(s.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4"))},j=i,a.abrupt("return",j);case 40:case"end":return a.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},identifier:"widget-demo"}},"schema-demo":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(E.a.mark(function T(){var f,s,g,F,R;return E.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return f=e("K+nK"),o.t0=f,o.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return o.t1=o.sent,s=(0,o.t0)(o.t1),o.t2=f,o.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return o.t3=o.sent,g=(0,o.t2)(o.t3),o.next=13,e.e(19).then(e.bind(null,"8iYR"));case 13:return F=o.sent,R=function(){return s.default.createElement(g.default,{schema:F.basic})},o.abrupt("return",R);case 16:case"end":return o.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { basic } from '../json/schema';

export default () => <FR schema={basic} />;`},"demo/FR.jsx":{import:"../demo/FR",content:Be},"json/schema.js":{import:"../json/schema",content:me}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo"}},"docs-playground":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(E.a.mark(function T(){return E.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"BASV"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:at},"main.js":{import:"./main",content:Ae},"json/simplest.json":{import:"./json/simplest.json",content:Mn},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:Tn},"monaco/index.js":{import:"./monaco",content:Fn},"theme.css":{import:"./theme.css",content:fn},"index.css":{import:"./index.css",content:Ye}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:"^16.0.0"},"react-dom":{version:"^16.0.0"},"deep-equal":{version:"2.0.5"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.3.2"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-simple-code-editor":{version:"0.11.0"},prismjs:{version:"1.23.0"}},identifier:"docs-playground"}},"table-render-advanced":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(E.a.mark(function T(){return E.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"7ZP+"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{tsx:Ln}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.0"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"1.x"}},transform:!0,defaultShowCode:!0,identifier:"table-render-advanced"}},"table-render-demo":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(E.a.mark(function T(){var f,s,g,F,R,u,o,y,N;return E.a.wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return f=e("K+nK"),D.t0=f,D.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return D.t1=D.sent,s=(0,D.t0)(D.t1),D.next=8,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(57)]).then(e.bind(null,"P2DI"));case 8:for(g=D.sent,F=[],R=0;R<6;R++)F.push({id:R.toString(),title:"\u6807\u9898".concat(R+1),created_at:new Date().getTime()});return u={type:"object",properties:{string:{title:"\u6807\u9898",type:"string","ui:width":"30%"},created_at:{title:"\u521B\u5EFA\u65F6\u95F4",type:"string",format:"date","ui:width":"30%"}}},o=[{title:"\u6807\u9898",dataIndex:"title"},{title:"\u521B\u5EFA\u65F6\u95F4",key:"since",dataIndex:"created_at",valueType:"date"},{title:"\u64CD\u4F5C",render:function(j,d){return s.default.createElement("a",{onClick:function(){return alert(j.title)}},"\u7F16\u8F91")}}],y=function(){var j=function(){return{rows:F,total:F.length}};return s.default.createElement(g.TableProvider,null,s.default.createElement(g.Search,{schema:u,api:j}),s.default.createElement(g.Table,{headerTitle:"\u6700\u7B80\u8868\u683C",columns:o,rowKey:"id"}))},N=y,D.abrupt("return",N);case 16:case"end":return D.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Wrapper;`}},dependencies:{react:{version:">=16.8.0"},"table-render":{version:"1.1.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.x"}},transform:!0,defaultShowCode:!0,identifier:"table-render-demo"}},"generator-demo":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(E.a.mark(function T(){var f,s,g,F,R,u;return E.a.wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return f=e("K+nK"),y.t0=f,y.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return y.t1=y.sent,s=(0,y.t0)(y.t1),y.t2=f,y.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(56)]).then(e.bind(null,"nYSz"));case 9:return y.t3=y.sent,g=(0,y.t2)(y.t3),F={schema:{type:"object",properties:{inputName:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string"}}},displayType:"row",showDescIcon:!0,labelWidth:120},R=function(){return s.default.createElement("div",{style:{height:"80vh"}},s.default.createElement(g.default,{defaultValue:F}))},u=R,y.abrupt("return",u);case 15:case"end":return y.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.0.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"generator-demo"}},"generator-modal":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(E.a.mark(function T(){return E.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"PPgD"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:wn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.0.1"},"react-dom":{version:">=16.9.0"}},identifier:"generator-modal"}},"generator-transformer":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(E.a.mark(function T(){return E.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"jktF"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:On}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.0.1"},"react-dom":{version:">=16.9.0"}},identifier:"generator-transformer"}},"generator-settings":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(E.a.mark(function T(){return E.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"M63W"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:we}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.0.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-settings"}},"generator-playground":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(E.a.mark(function T(){return E.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"TYW4"));case 2:return s.abrupt("return",s.sent.default);case 3:case"end":return s.stop()}},T)}));function I(){return M.apply(this,arguments)}return I}()}),previewerProps:{sources:{_:{jsx:kn},"index.less":{import:"./index.less",content:$n}},dependencies:{react:{version:">=16.8.0"},umi:{version:"3.4.19"},"fr-generator":{version:"2.0.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-playground"}}}},TIsu:function(Nn,gn,e){},Zs1V:function(Nn){Nn.exports=JSON.parse("{}")},p8sG:function(Nn,gn,e){"use strict";Nn.exports=e("80pN")},pz0r:function(Nn,gn,e){"use strict";e.r(gn);var X=e("q1tI"),n=e.n(X),E=e("dEAq"),V=e.n(E),ce=e("0zqC"),K=e("ZpkN"),tn=e("JjdP"),Be=n.a.memo(tn.default["migrate-demo"].component);gn.default=me=>(n.a.useEffect(()=>{me!=null&&me.location.hash&&E.AnchorLink.scrollToAnchor(decodeURIComponent(me.location.hash.slice(1)))},[]),n.a.createElement(n.a.Fragment,null,n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"markdown"},n.a.createElement("h1",{id:"0x-\u5230-1x"},n.a.createElement(E.AnchorLink,{to:"#0x-\u5230-1x","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"0.x \u5230 1.x"),n.a.createElement("h2",{id:"\u4E09\u4E2A\u6539\u53D8"},n.a.createElement(E.AnchorLink,{to:"#\u4E09\u4E2A\u6539\u53D8","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u4E09\u4E2A\u6539\u53D8"),n.a.createElement("p",null,n.a.createElement("strong",null,"FormRender v1.0.0 \u7684\u5347\u7EA7\uFF0C\u4ECE\u4F7F\u7528\u65B9\u89C6\u89D2\u6765\u770B\uFF0C\u6700\u4E3B\u8981\u7684\u53D8\u52A8\u5F52\u7ED3\u4E3A\u4E09\u6761\uFF1A")),n.a.createElement("ol",null,n.a.createElement("li",null,n.a.createElement("p",null,"\u63D0\u4EA4\u7684\u65B9\u6CD5\u6536\u675F\uFF08\u5373\u7EDF\u4E00\u63D0\u4F9B submit \u65B9\u6CD5\uFF09\uFF0CformData \u548C\u6821\u9A8C\u4FE1\u606F\u5185\u7F6E")),n.a.createElement("li",null,n.a.createElement("p",null,"Schema \u4E66\u5199\u89C4\u5219\u66F4\u52A0\u6E05\u6670\uFF0C\u66F4\u52A0\u8D34\u8FD1\u7EC4\u4EF6 props")),n.a.createElement("li",null,n.a.createElement("p",null,"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u4E0D\u518D\u8981\u201C\u5957\u58F3\u201D\uFF0C\u5F88\u591A antd \u7EC4\u4EF6\u76F4\u63A5\u62FF\u6765\u80FD\u7528"))),n.a.createElement("p",null,"\u7B2C 1 \u6761\u662F\u4E3A\u4E86\u66F4\u52A0\u5F3A\u5927\u7684\u529F\u80FD\uFF0C\u540E\u4E24\u6761\u5219\u4E3A\u4E86\u66F4\u52A0\u5FEB\u6377\u548C\u8212\u9002\u7684\u5F00\u53D1\u4F53\u9A8C\u3002FormRender 1.0 \u5E26\u6765\u4E86\u54EA\u4E9B\u65B0\u529F\u80FD\uFF0C\u8BE6\u89C1\u6587\u7AE0\u5E95\u90E8 ",n.a.createElement("code",null,"Changelog \u601D\u8003")),n.a.createElement("h2",{id:"\u8FC1\u79FB\u65B9\u6848\u5982\u4E0B"},n.a.createElement(E.AnchorLink,{to:"#\u8FC1\u79FB\u65B9\u6848\u5982\u4E0B","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u8FC1\u79FB\u65B9\u6848\u5982\u4E0B"),n.a.createElement("p",null,n.a.createElement("strong",null,"FormRender v0.x \u7684\u4EE3\u7801\u5982\u4E0B\uFF1A")),n.a.createElement(K.a,{code:`import React, { useState } from 'react';
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
  const onSubmit = () => {
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
      />
      <button onClick={onSubmit}>\u63D0\u4EA4</button>
    </div>
  );
}

export default Demo;`,lang:"js"}),n.a.createElement("h3",{id:"\u65B0\u7248\u672C\u5347\u7EA7\u6539\u52A8"},n.a.createElement(E.AnchorLink,{to:"#\u65B0\u7248\u672C\u5347\u7EA7\u6539\u52A8","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u65B0\u7248\u672C\u5347\u7EA7\u6539\u52A8"),n.a.createElement("p",null,"\u5B8C\u5168\u4F7F\u7528\u65B0 api\uFF0CformData \u548C onChange \u8FD9\u4E9B\u539F\u672C\u66B4\u9732\u5728\u5916\u7684\u5C5E\u6027\u6536\u675F\uFF0Csubmit \u65B9\u6CD5\u7531 form \u5B9E\u4F8B\u63D0\u4F9B\uFF0C\u4E00\u822C\u60C5\u51B5\u4E0B\u8FC1\u79FB\u4E5F\u5FEB\u7684\uFF0C\u53EA\u662F\u8981\u6CE8\u610F\u6240\u6709\u5728\u5916\u90E8\u4F7F\u7528\u5230 formData \u7684\u573A\u666F\uFF0C\u9700\u8981\u66FF\u6362\u4E3A ",n.a.createElement("code",null,"form.getValues()"),"\uFF0C\u6240\u6709\u4F7F\u7528\u5230 onChange \u7684\u5730\u65B9\u9700\u8981\u4FEE\u6539\u4E3A ",n.a.createElement("code",null,"form.setValues()"))),n.a.createElement(ce.default,tn.default["migrate-demo"].previewerProps,n.a.createElement(Be,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("p",null,"\u7531\u4E8E\u65B0\u7248\u7684 formData/onChange/validate/onValidate \u5168\u90E8\u5185\u7F6E\u4E86\uFF0C\u6240\u4EE5\u5728\u8FC1\u79FB\u65F6\uFF0C\u5916\u90E8\u6240\u6709\u4F7F\u7528\u5230\u4E09\u8005\u7684\u5730\u65B9\u4E00\u5F8B\u4F7F\u7528 form \u65B9\u6CD5\u66FF\u6362\uFF1A"),n.a.createElement(K.a,{code:`formData  ->  form.getValues()
onChange  ->  form.setValues(data)
validate  ->  form.errorFields
onValidate  ->  \u76F4\u63A5\u53BB\u6389`,lang:"js"}),n.a.createElement("p",null,"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u4FA7\u7684 0.x \u4E0E 1.x \u7684\u4F7F\u7528\u5BF9\u6BD4\uFF1A"),n.a.createElement(K.a,{code:`// 0.x
const schema = {
  title: '\u81EA\u5B9A\u4E49',
  type: 'string',
  'ui:widget': 'myWidget',
  'ui:options': {
    prefix: 'hello',
  },
};

const MyWidget = ({ name, value, onChange, options }) => {
  const handleChange = e => {
    onChange(name, e.target.value);
  };
  return (
    <div>
      <Input value={value} onChange={handleChange} {...options} />
      <span>\u6CE8\u610F\u4E8B\u9879</span>
    </div>
  );
};
// 1.x
const schema = {
  title: '\u81EA\u5B9A\u4E49',
  type: 'string',
  widget: 'myWidget',
  props: {
    prefix: 'hello',
  },
};

const MyWidget = props => {
  return (
    <div>
      <Input {...props} />
      <span>\u6CE8\u610F\u4E8B\u9879</span>
    </div>
  );
};`,lang:"js"}),n.a.createElement("ol",null,n.a.createElement("li",null,n.a.createElement("code",null,"onChange")," \u4E0D\u518D\u63A5\u6536 name \u4F5C\u4E3A\u7B2C\u4E00\u4E2A\u5165\u53C2\uFF0C\u800C\u6539\u4E3A\u66F4\u4E3A\u81EA\u7136\u7684\u53EA\u6709\u4E00\u4E2A\u5165\u53C2 value"),n.a.createElement("li",null,"\u6240\u6709",n.a.createElement("code",null,"ui:options"),"\u7684\u5185\u5BB9\u4F1A\u76F4\u63A5\u5728 props \u91CC\u62FF\u5230\uFF0C\u800C\u4E0D\u9700\u8981\u518D\u4ECE props.options \u91CC\u83B7\u53D6 \uFF08ui:options \u5DF2\u66F4\u540D\u4E3A props\uFF0C\u4E0D\u8FC7\u5728\u9876\u5C42\u505A\u4E86 schema \u5B57\u6BB5\u7684\u517C\u5BB9\uFF09")),n.a.createElement("h2",{id:"schema-\u7EC6\u8282\u4E0A\u7684\u6539\u52A8"},n.a.createElement(E.AnchorLink,{to:"#schema-\u7EC6\u8282\u4E0A\u7684\u6539\u52A8","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"schema \u7EC6\u8282\u4E0A\u7684\u6539\u52A8"),n.a.createElement("p",null,"\u5355\u9009\u7EC4\u4EF6\u4E0D\u518D\u9ED8\u8BA4\u9009\u4E2D\u7B2C\u4E00\u9879\uFF0C\u9ED8\u8BA4\u503C\u4E3A undefined\uFF0C\u9664\u975E\u901A\u8FC7 default \u5B57\u6BB5\u6307\u660E\u3002"),n.a.createElement(K.a,{code:`// \u5355\u9009
{
  "title": "\u5355\u9009",
  "type": "string",
  "enum": ["hz", "wh", "gy"],
  "enumNames": ["\u676D\u5DDE", "\u6B66\u6C49", "\u8D35\u9633"],
  "default": "hz"
}`,lang:"js"}),n.a.createElement("h2",{id:"changelog-\u601D\u8003"},n.a.createElement(E.AnchorLink,{to:"#changelog-\u601D\u8003","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Changelog \u601D\u8003"),n.a.createElement("p",null,"\u5728\u6700\u540E\u7F57\u5217\u4E00\u4E0B\u7EC6\u8282\u4E0A FormRender 0.x -> 1.0 \u7EC6\u8282\u4E0A\u7684\u6539\u52A8 & \u601D\u8003"),n.a.createElement("h3",{id:"\u529F\u80FD\u589E\u5F3A"},n.a.createElement(E.AnchorLink,{to:"#\u529F\u80FD\u589E\u5F3A","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u529F\u80FD\u589E\u5F3A"),n.a.createElement("ol",null,n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement("strong",null,"\u5C55\u793A\u5347\u7EA7")),n.a.createElement("ul",null,n.a.createElement("li",null,"\u5217\u8868\u7684\u5C55\u793A\u652F\u6301\u4E09\u79CD\u6A21\u5F0F\uFF0C\u5206\u522B\u652F\u6301\u6BCF\u4E2A item 1-2 \u4E2A\u5143\u7D20\uFF0C3-5 \u4E2A\u5143\u7D20\u548C\u590D\u6742\u7ED3\u6784"),n.a.createElement("li",null,"\u5BF9\u8C61\u7684\u5C55\u793A\u652F\u6301\u4E8C\u79CD\u6A21\u5F0F"),n.a.createElement("li",null,"\u6821\u9A8C\u7684\u5C55\u793A\u548C antd \u6548\u679C\u4E00\u81F4"),n.a.createElement("li",null,"\u5C55\u793A\u7C7B\u578B\u9664\u4E86\u57FA\u7840\u7684 column \u548C row\uFF0C\u8FD8\u652F\u6301\u4E86 inline \u6A21\u5F0F"))),n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement("strong",null,"\u5185\u7F6E\u7EC4\u4EF6\u66F4\u4E30\u5BCC")),n.a.createElement("ul",null,n.a.createElement("li",null,"\u65B0\u589E\u4E86 rate\uFF0CtreeSelect, cascader \u7B49\u7EC4\u4EF6\u7684\u5185\u7F6E\u652F\u6301"))),n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement("strong",null,"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u5F00\u53D1\u66F4\u4FBF\u6377\uFF0C\u529F\u80FD\u66F4\u5F3A\u5927")),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("p",null,"props \u76F4\u63A5\u900F\u4F20\u4E86\uFF0C\u4E0D\u518D\u9700\u8981\u4ECE options \u5B57\u6BB5\u91CC\u53BB\u53D6\u5F97")),n.a.createElement("li",null,n.a.createElement("p",null,"onChange \u65B9\u6CD5\u7684\u5165\u53C2\u4E0D\u518D\u9700\u8981\u4F20 name \u4F5C\u4E3A\u7B2C\u4E00\u4E2A\u53C2\u6570\uFF08\u8FD9\u4E2A\u8BBE\u8BA1\u5176\u5B9E\u5F88\u4E0D\u81EA\u7136\u548C\u6CA1\u6709\u5FC5\u8981\uFF09\uFF0C\u540C\u65F6\u5982\u679C\u539F\u751F\u7EC4\u4EF6\u7684 onChange \u8FD4\u56DE\u7684\u662F event\uFF0C\u4E5F\u4F1A\u5904\u7406\u4E00\u6B65\u81EA\u52A8\u80FD\u62FF\u5230 value \u503C")),n.a.createElement("li",null,n.a.createElement("p",null,"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u5185\u7F6E\u4E86 onItemChange(namePath, value) \u65B9\u6CD5\uFF0C\u53EF\u4EE5\u65B9\u4FBF\u7684\u5728\u4E00\u4E2A\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u4E2D\u4FEE\u6539\u8868\u5355\u4EFB\u4F55\u6570\u636E\u7684\u503C")),n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement("strong",null,"\u8FD9\u4E9B\u7EC6\u8282\u7684\u76EE\u6807\uFF0C\u662F\u8BA9\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7684\u4E66\u5199\u8D34\u8FD1\u62FF\u6765\u4E00\u4E2A\u7EC4\u4EF6\u76F4\u63A5\u80FD\u7528\uFF0C\u800C\u4E0D\u662F\u50CF\u4E4B\u524D\u4E00\u6837\u518D\u7B80\u5355\u7684\u573A\u666F\u4E5F\u9700\u8981\u505A\u4E00\u6B65\u5305\u88C5\u5904\u7406\uFF0C\u4ECE\u539F\u672C\u7684\uFF1A")),n.a.createElement(K.a,{code:`const schema = {
  title: '\u81EA\u5B9A\u4E49',
  type: 'string',
  'ui:widget': 'myWidget',
  'ui:options': {
    prefix: 'hello',
  },
};

const MyWidget = ({ name, value, onChange, options }) => {
  const handleChange = e => {
    onChange(name, e.target.value);
  };
  return (
    <div>
      <Input value={value} onChange={handleChange} {...options} />
      <span>\u6CE8\u610F\u4E8B\u9879</span>
    </div>
  );
};`,lang:"js"})),n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement("strong",null,"\u53D8\u4E3A\uFF1A")),n.a.createElement(K.a,{code:`const schema = {
  title: '\u81EA\u5B9A\u4E49',
  type: 'string',
  widget: 'myWidget',
  props: {
    prefix: 'hello',
  },
};

const MyWidget = props => {
  return (
    <div>
      <Input {...props} />
      <span>\u6CE8\u610F\u4E8B\u9879</span>
    </div>
  );
};`,lang:"js"})))),n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement("strong",null,"\u6821\u9A8C\u4E30\u5BCC\u5EA6\u548C\u4F53\u9A8C\u5927\u5E45\u5347\u7EA7")),n.a.createElement("ul",null,n.a.createElement("li",null,"\u6821\u9A8C\u7684\u5C55\u793A & \u5C55\u793A\u5B9E\u9645\u7EC8\u4E8E\u7B26\u5408\u7528\u6237\u4E60\u60EF\u4E86"),n.a.createElement("li",null,"\u4E0D\u518D\u53EA\u652F\u6301 pattern \u6821\u9A8C\u4E86\uFF0C\u73B0\u5728\u652F\u6301\u5305\u62EC\u81EA\u5B9A\u4E49 validator \u7684\u6240\u6709 antd form \u652F\u6301\u7684\u6821\u9A8C"),n.a.createElement("li",null,"\u6821\u9A8C\u652F\u6301\u5F02\u6B65\u4E86"),n.a.createElement("li",null,"\u6821\u9A8C\u652F\u6301\u5916\u90E8\u6821\u9A8C\u7ED3\u679C\u56DE\u586B\u5C55\u793A\u4E86"))),n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement("strong",null,"\u5176\u4ED6")),n.a.createElement("ul",null,n.a.createElement("li",null,"\u672A\u538B\u7F29\u7684\u5305\u4F53\u79EF\u4ECE 76k -> 11k"),n.a.createElement("li",null,"\u5BF9 typescript \u7684\u5185\u7F6E\u652F\u6301"),n.a.createElement("li",null,"\u6E32\u67D3\u4F1A\u6839\u636E schema \u7684\u7ED3\u6784\u6765\u6E32\u67D3\uFF0C\u4E0D\u518D\u4F1A\u56E0\u4E3A formData \u503C\u7684\u987A\u5E8F\u53D8\u5316\u5F71\u54CD\u5230\u5C55\u793A"),n.a.createElement("li",null,"\u63D0\u4EA4\u7684 formData\uFF0C\u4E0D\u5C55\u793A\u7684 key \u4E0D\u4F1A\u8FD4\u56DE")))),n.a.createElement("h3",{id:"\u8BBE\u8BA1\u53D6\u820D"},n.a.createElement(E.AnchorLink,{to:"#\u8BBE\u8BA1\u53D6\u820D","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u8BBE\u8BA1\u53D6\u820D"),n.a.createElement("ol",null,n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement("strong",null,"\u6682\u65F6\u4E0D\u652F\u6301 fusion \u4E86"),"\uFF1Afusion \u4E0E antd \u5C55\u793A\u4E0A\u975E\u5E38\u7C7B\u4F3C\uFF0C\u4F46\u7EC4\u4EF6 api \u672C\u8EAB\u4EE5\u53CA\u6784\u5EFA\u5C42\u9762\u7684\u914D\u7F6E\u4E0A\u8FD8\u662F\u6709\u4E0D\u5C11\u4E0D\u540C\u7684\uFF0C\u5BF9\u4E24\u8005\u7684\u540C\u65F6\u652F\u6301\u82B1\u4E86\u5927\u91CF\u7684\u7CBE\u529B\u3002FormRender \u9009\u62E9\u6682\u65F6\u653E\u5F03 fusion\uFF0C\u66F4\u52A0\u8D34\u5408 antd\uFF0C\u5728\u529F\u80FD\u6DF1\u5165\u5B9E\u73B0\u548C\u8FED\u4EE3\u6548\u7387\u4E0A\u90FD\u4F1A\u6709\u5F88\u5927\u7684\u63D0\u9AD8\u3002\u4F46\u7EC4\u4EF6\u5E93\u7684\u5165\u53E3\u662F\u4E00\u76F4\u5F00\u653E\u7740\u7684\uFF08widgets props\uFF09\uFF0C\u6B22\u8FCE pr \u652F\u6301 fusion \u4FA7\u7684\u7EC4\u4EF6\u7684\u72EC\u7ACB\u652F\u6301\u3002")),n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement("strong",null,"\u53EA\u5141\u8BB8\u4F7F\u7528\u5B57\u7B26\u4E32\u7C7B\u578B\u7684\u51FD\u6570\u8868\u8FBE\u5F0F"),"\uFF1A\u7531\u4E8E schema \u53EF\u4EE5\u662F js \u5BF9\u8C61\uFF0C\u6240\u4EE5\u4E4B\u524D\u652F\u6301 schema \u91CC\u6709\u51FD\u6570\u7C7B\u578B\u7684\u8868\u8FBE\u5F0F\uFF0C\u4F1A\u5728\u6E32\u67D3\u524D\u8BA1\u7B97\u51FA\u51FD\u6570\u7684 return \u4F5C\u4E3A\u6E32\u67D3\u503C\u3002\u4F46\u7EC4\u4EF6\u7684 props \u4EE5\u53CA\u6821\u9A8C\u51FD\u6570\u53EF\u80FD\u672C\u8EAB\u5C31\u662F\u51FD\u6570\uFF0C\u8FD9\u4E9B\u51FD\u6570\u662F\u4E0D\u5E0C\u671B\u88AB\u63D0\u524D\u8BA1\u7B97\u7684\uFF0C\u800C\u53EA\u662F\u4F5C\u4E3A props \u4F20\u5165\u3002FR \u5E76\u6CA1\u6709\u5F88\u597D\u7684\u529E\u6CD5\u533A\u5206\u4E00\u4E2A\u51FD\u6570\u662F\u9700\u8981\u88AB\u76F4\u63A5\u6267\u884C\u8FD8\u662F\u539F\u6837\u4F5C\u4E3A\u51FD\u6570\u900F\u4F20\uFF0C\u6240\u4EE5\u8FD9\u91CC\u7684\u53D6\u820D\u662F\uFF0C\u4E0D\u5141\u8BB8\u51FD\u6570 props \u6216\u8005\u4E0D\u5141\u8BB8\u51FD\u6570\u5F0F\u7684\u8868\u8FBE\u5F0F\u3002\u7531\u4E8E\u8868\u8FBE\u5F0F\u5DF2\u7ECF\u6709\u5B57\u7B26\u4E32\u7684\u4E66\u5199\u65B9\u5F0F\uFF0C\u529F\u80FD\u662F\u5B8C\u5168\u7B49\u4EF7\u7684\uFF0C\u6240\u4EE5\u4E3A\u4E86\u5141\u8BB8\u51FD\u6570\u4F5C\u4E3A props\uFF0C\u6211\u4EEC\u4E0D\u518D\u652F\u6301\u51FD\u6570\u4F5C\u4E3A\u8868\u8FBE\u5F0F\u3002"),n.a.createElement(K.a,{code:`showMore: {
  title: "\u663E\u793A\u66F4\u591A",
  type: "boolean"
},
input1: {
  title: '\u8F93\u5165\u68461',
  type: 'string',
  'ui:hidden': (formData) => !formData.showMore
}

// \u8BF7\u8F6C\u6362\u4E3A\uFF1A
showMore: {
  title: "\u663E\u793A\u66F4\u591A",
  type: "boolean"
},
input1: {
  title: '\u8F93\u5165\u68461',
  type: 'string',
  'ui:hidden': '{{!formData.showMore}}',
}`,lang:"js"})),n.a.createElement("li",null,n.a.createElement("p",null,n.a.createElement("strong",null,"\u4E0D\u518D\u8BA1\u7B97\u521D\u59CB\u503C"),"\uFF1A\u8FD9\u662F\u4E00\u4E2A\u5185\u90E8\u7684\u6539\u52A8\u3002\u65B0\u7684 FormRender\uFF0C\u4E0D\u4F1A\u6BCF\u6B21 onChange \u540E\u90FD\u6267\u884C resolve \u751F\u6210\u4E00\u4EFD formData \u7684\u9AA8\u67B6\uFF0C\u6CA1\u6709\u586B\u7684\u6846\u7684\u503C\u5C31\u662F undefined\u3002\u800C\u53EA\u5728\u63D0\u4EA4\u548C\u6821\u9A8C\u65F6\u4F1A\u751F\u6210\u9AA8\u67B6\u3002\u8FD9\u907F\u514D\u4E86\u5F88\u591A\u5728\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u4E2D\u5C1D\u8BD5\u4FEE\u6539 formData \u65F6\u5BB9\u6613\u4EA7\u751F\u6B7B\u5FAA\u73AF\u6216\u8005\u4FEE\u6539\u65E0\u6548\u7684\u95EE\u9898\uFF0C\u4E5F\u907F\u514D\u4E86\u5916\u90E8\u6CA1\u6709\u5F88\u597D\u7684\u65B9\u6CD5\u62FF\u5230\u9ED1\u7BB1\u7684 resolve \u540E\u7684\u6570\u636E\u3002")))))))}}]);
