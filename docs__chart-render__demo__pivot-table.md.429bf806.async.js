(window.webpackJsonp=window.webpackJsonp||[]).push([[26,9],{"0zqC":function(Fn,gn,e){"use strict";e.r(gn);var Y=e("tJVT"),n=e("q1tI"),C=e.n(n),V=e("wx14"),le=e("rePB"),K=e("ODXe"),on=e("U8pU"),Ae=e("Ff2n"),ve=e("VTBJ"),Rn=e("TSYQ"),Ie=e.n(Rn),Bn=e("Zm9Q"),wn=e("5Z9U"),Sn=e("6cGi"),fn=e("KQm4"),Qe=e("wgJM"),$n=e("t23M");function Wn(t){var a=Object(n.useRef)(),u=Object(n.useRef)(!1);function h(){for(var b=arguments.length,v=new Array(b),O=0;O<b;O++)v[O]=arguments[O];u.current||(Qe.a.cancel(a.current),a.current=Object(Qe.a)(function(){t.apply(void 0,v)}))}return Object(n.useEffect)(function(){return function(){u.current=!0,Qe.a.cancel(a.current)}},[]),h}function Pn(t){var a=Object(n.useRef)([]),u=Object(n.useState)({}),h=Object(K.a)(u,2),b=h[1],v=Object(n.useRef)(typeof t=="function"?t():t),O=Wn(function(){var W=v.current;a.current.forEach(function(L){W=L(W)}),a.current=[],v.current=W,b({})});function S(W){a.current.push(W),O()}return[v.current,S]}var we=e("4IlW");function qn(t,a){var u,h=t.prefixCls,b=t.id,v=t.active,O=t.rtl,S=t.tab,W=S.key,L=S.tab,$=S.disabled,G=S.closeIcon,J=t.tabBarGutter,se=t.tabPosition,X=t.closable,Q=t.renderWrapper,ue=t.removeAriaLabel,U=t.editable,q=t.onClick,re=t.onRemove,Z=t.onFocus,oe="".concat(h,"-tab");n.useEffect(function(){return re},[]);var k={};se==="top"||se==="bottom"?k[O?"marginLeft":"marginRight"]=J:k.marginBottom=J;var be=U&&X!==!1&&!$;function ne(ae){$||q(ae)}function ce(ae){ae.preventDefault(),ae.stopPropagation(),U.onEdit("remove",{key:W,event:ae})}var me=n.createElement("div",{key:W,ref:a,className:Ie()(oe,(u={},Object(le.a)(u,"".concat(oe,"-with-remove"),be),Object(le.a)(u,"".concat(oe,"-active"),v),Object(le.a)(u,"".concat(oe,"-disabled"),$),u)),style:k,onClick:ne},n.createElement("div",{role:"tab","aria-selected":v,id:b&&"".concat(b,"-tab-").concat(W),className:"".concat(oe,"-btn"),"aria-controls":b&&"".concat(b,"-panel-").concat(W),"aria-disabled":$,tabIndex:$?null:0,onClick:function(H){H.stopPropagation(),ne(H)},onKeyDown:function(H){[we.a.SPACE,we.a.ENTER].includes(H.which)&&(H.preventDefault(),ne(H))},onFocus:Z},L),be&&n.createElement("button",{type:"button","aria-label":ue||"remove",tabIndex:0,className:"".concat(oe,"-remove"),onClick:function(H){H.stopPropagation(),ce(H)}},G||U.removeIcon||"\xD7"));return Q&&(me=Q(me)),me}var Vn=n.forwardRef(qn),at={width:0,height:0,left:0,top:0};function F(t,a,u){return Object(n.useMemo)(function(){for(var h,b=new Map,v=a.get((h=t[0])===null||h===void 0?void 0:h.key)||at,O=v.left+v.width,S=0;S<t.length;S+=1){var W=t[S].key,L=a.get(W);if(!L){var $;L=a.get(($=t[S-1])===null||$===void 0?void 0:$.key)||at}var G=b.get(W)||Object(ve.a)({},L);G.right=O-G.left-G.width,b.set(W,G)}return b},[t.map(function(h){return h.key}).join("_"),a,u])}var M={width:0,height:0,left:0,top:0,right:0};function B(t,a,u,h,b){var v=b.tabs,O=b.tabPosition,S=b.rtl,W,L,$;["top","bottom"].includes(O)?(W="width",L=S?"right":"left",$=Math.abs(a.left)):(W="height",L="top",$=-a.top);var G=a[W],J=u[W],se=h[W],X=G;return J+se>G&&(X=G-se),Object(n.useMemo)(function(){if(!v.length)return[0,0];for(var Q=v.length,ue=Q,U=0;U<Q;U+=1){var q=t.get(v[U].key)||M;if(q[L]+q[W]>$+X){ue=U-1;break}}for(var re=0,Z=Q-1;Z>=0;Z-=1){var oe=t.get(v[Z].key)||M;if(oe[L]<$){re=Z+1;break}}return[re,ue]},[t,$,X,O,v.map(function(Q){return Q.key}).join("_"),S])}var f=e("Gytx"),o=e.n(f),g=e("Kwbf");function R(t,a){var u=t.prefixCls,h=t.invalidate,b=t.item,v=t.renderItem,O=t.responsive,S=t.registerSize,W=t.itemKey,L=t.className,$=t.style,G=t.children,J=t.display,se=t.order,X=t.component,Q=X===void 0?"div":X,ue=Object(Ae.a)(t,["prefixCls","invalidate","item","renderItem","responsive","registerSize","itemKey","className","style","children","display","order","component"]),U=O&&!J;function q(be){S(W,be)}n.useEffect(function(){return function(){q(null)}},[]);var re=v&&b!==void 0?v(b):G,Z;h||(Z={opacity:U?0:1,height:U?0:void 0,overflowY:U?"hidden":void 0,order:O?se:void 0,pointerEvents:U?"none":void 0});var oe={};U&&(oe["aria-hidden"]=!0);var k=n.createElement(Q,Object(V.a)({className:Ie()(!h&&u,L),style:Object(ve.a)(Object(ve.a)({},Z),$)},oe,ue,{ref:a}),re);return O&&(k=n.createElement($n.default,{onResize:function(ne){var ce=ne.offsetWidth;q(ce)}},k)),k}var P=n.forwardRef(R);P.displayName="Item";var i=P;function l(){var t=Object(n.useState)({}),a=Object(K.a)(t,2),u=a[1],h=Object(n.useRef)([]),b=Object(n.useRef)(!1),v=0,O=0;Object(n.useEffect)(function(){return function(){b.current=!0}},[]);function S(W){var L=v;v+=1,h.current.length<L+1&&(h.current[L]=W);var $=h.current[L];function G(J){h.current[L]=typeof J=="function"?J(h.current[L]):J,Qe.a.cancel(O),O=Object(Qe.a)(function(){b.current||u({})})}return[$,G]}return S}var y=function(a,u){var h=n.useContext(E);if(!h){var b=a.component,v=b===void 0?"div":b,O=Object(Ae.a)(a,["component"]);return n.createElement(v,Object(V.a)({},O,{ref:u}))}var S=h.className,W=Object(Ae.a)(h,["className"]),L=a.className,$=Object(Ae.a)(a,["className"]);return n.createElement(E.Provider,{value:null},n.createElement(i,Object(V.a)({ref:u,className:Ie()(S,L)},W,$)))},T=n.forwardRef(y);T.displayName="RawItem";var A=T,E=n.createContext(null),s="responsive",N="invalidate";function d(t){return"+ ".concat(t.length," ...")}function r(t,a){var u=t.prefixCls,h=u===void 0?"rc-overflow":u,b=t.data,v=b===void 0?[]:b,O=t.renderItem,S=t.renderRawItem,W=t.itemKey,L=t.itemWidth,$=L===void 0?10:L,G=t.ssr,J=t.style,se=t.className,X=t.maxCount,Q=t.renderRest,ue=t.renderRawRest,U=t.suffix,q=t.component,re=q===void 0?"div":q,Z=t.itemComponent,oe=t.onVisibleChange,k=Object(Ae.a)(t,["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"]),be=l(),ne=G==="full",ce=be(null),me=Object(K.a)(ce,2),ae=me[0],H=me[1],de=ae||0,ye=be(new Map),he=Object(K.a)(ye,2),Se=he[0],Ke=he[1],Oe=be(0),Re=Object(K.a)(Oe,2),Fe=Re[0],Me=Re[1],De=be(0),je=Object(K.a)(De,2),$e=je[0],qe=je[1],Ve=be(0),Ue=Object(K.a)(Ve,2),Ye=Ue[0],Le=Ue[1],jn=Object(n.useState)(null),tn=Object(K.a)(jn,2),Ze=tn[0],ln=tn[1],yn=Object(n.useState)(null),bn=Object(K.a)(yn,2),Ne=bn[0],He=bn[1],_e=n.useMemo(function(){return Ne===null&&ne?Number.MAX_SAFE_INTEGER:Ne||0},[Ne,ae]),xe=Object(n.useState)(!1),Kn=Object(K.a)(xe,2),Jn=Kn[0],Ln=Kn[1],rn="".concat(h,"-item"),Dn=Math.max(Fe,$e),un=v.length&&X===s,In=X===N,en=un||typeof X=="number"&&v.length>X,an=Object(n.useMemo)(function(){var pe=v;return un?ae===null&&ne?pe=v:pe=v.slice(0,Math.min(v.length,de/$)):typeof X=="number"&&(pe=v.slice(0,X)),pe},[v,$,ae,X,un]),Nn=Object(n.useMemo)(function(){return un?v.slice(_e+1):v.slice(an.length)},[v,an,un,_e]),cn=Object(n.useCallback)(function(pe,Pe){var Be;return typeof W=="function"?W(pe):(Be=W&&(pe==null?void 0:pe[W]))!==null&&Be!==void 0?Be:Pe},[W]),ke=Object(n.useCallback)(O||function(pe){return pe},[O]);function Xe(pe,Pe){He(pe),Pe||(Ln(pe<v.length-1),oe==null||oe(pe))}function Gn(pe,Pe){H(Pe.clientWidth)}function Hn(pe,Pe){Ke(function(Be){var nn=new Map(Be);return Pe===null?nn.delete(pe):nn.set(pe,Pe),nn})}function nt(pe,Pe){qe(Pe),Me($e)}function On(pe,Pe){Le(Pe)}function hn(pe){return Se.get(cn(an[pe],pe))}n.useLayoutEffect(function(){if(de&&Dn&&an){var pe=Ye,Pe=an.length,Be=Pe-1;if(!Pe){Xe(0),ln(null);return}for(var nn=0;nn<Pe;nn+=1){var Zn=hn(nn);if(Zn===void 0){Xe(nn-1,!0);break}if(pe+=Zn,nn===Be-1&&pe+hn(Be)<=de){Xe(Be),ln(null);break}else if(pe+Dn>de){Xe(nn-1),ln(pe-Zn-Ye+$e);break}else if(nn===Be){Xe(Be),ln(pe-Ye);break}}U&&hn(0)+Ye>de&&ln(null)}},[de,Se,$e,Ye,cn,an]);var Xn=Jn&&!!Nn.length,Cn={};Ze!==null&&un&&(Cn={position:"absolute",left:Ze,top:0});var mn={prefixCls:rn,responsive:un,component:Z,invalidate:In},Yn=S?function(pe,Pe){var Be=cn(pe,Pe);return n.createElement(E.Provider,{key:Be,value:Object(ve.a)(Object(ve.a)({},mn),{},{order:Pe,item:pe,itemKey:Be,registerSize:Hn,display:Pe<=_e})},S(pe,Pe))}:function(pe,Pe){var Be=cn(pe,Pe);return n.createElement(i,Object(V.a)({},mn,{order:Pe,key:Be,item:pe,renderItem:ke,itemKey:Be,registerSize:Hn,display:Pe<=_e}))},An,Qn={order:Xn?_e:Number.MAX_SAFE_INTEGER,className:"".concat(rn,"-rest"),registerSize:nt,display:Xn};if(ue)ue&&(An=n.createElement(E.Provider,{value:Object(ve.a)(Object(ve.a)({},mn),Qn)},ue(Nn)));else{var dn=Q||d;An=n.createElement(i,Object(V.a)({},mn,Qn),typeof dn=="function"?dn(Nn):dn)}var Mn=n.createElement(re,Object(V.a)({className:Ie()(!In&&h,se),style:J,ref:a},k),an.map(Yn),en?An:null,U&&n.createElement(i,Object(V.a)({},mn,{order:_e,className:"".concat(rn,"-suffix"),registerSize:On,display:!0,style:Cn}),U));return un&&(Mn=n.createElement($n.default,{onResize:Gn},Mn)),Mn}var p=n.forwardRef(r);p.displayName="Overflow",p.Item=A,p.RESPONSIVE=s,p.INVALIDATE=N;var m=p,j=m,w=e("1OyB"),z=e("vuIU"),_=e("Ji7U"),ie=e("LK+K"),ge=e("bT9E"),pn=e("YrtM"),We=n.createContext(null);function Te(t,a){var u=Object(ve.a)({},t);return Object.keys(a).forEach(function(h){var b=a[h];b!==void 0&&(u[h]=b)}),u}function En(t){var a=t.children,u=t.locked,h=Object(Ae.a)(t,["children","locked"]),b=n.useContext(We),v=Object(pn.a)(function(){return Te(b,h)},[b,h],function(O,S){return!u&&(O[0]!==S[0]||!o()(O[1],S[1]))});return n.createElement(We.Provider,{value:v},a)}function it(t,a,u,h){var b=n.useContext(We),v=b.activeKey,O=b.onActive,S=b.onInactive,W={active:v===t};return a||(W.onMouseEnter=function(L){u==null||u({key:t,domEvent:L}),O(t)},W.onMouseLeave=function(L){h==null||h({key:t,domEvent:L}),S(t)}),W}function _n(t){var a=t.item,u=Object(Ae.a)(t,["item"]);return Object.defineProperty(u,"item",{get:function(){return Object(g.a)(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),a}}),u}function c(t){var a=t.icon,u=t.props,h=t.children,b;return typeof a=="function"?b=n.createElement(a,Object(ve.a)({},u)):b=a,b||h||null}function D(t){var a=n.useContext(We),u=a.mode,h=a.rtl,b=a.inlineIndent;if(u!=="inline")return null;var v=t;return h?{paddingRight:v*b}:{paddingLeft:v*b}}var I=[],fe=n.createContext(null);function ee(){return n.useContext(fe)}var Ee=n.createContext(I);function ze(t){var a=n.useContext(Ee);return n.useMemo(function(){return t!==void 0?[].concat(Object(fn.a)(a),[t]):a},[a,t])}var Ge=n.createContext(null),Ut=n.createContext(null);function Jt(t,a){return t===void 0?null:"".concat(t,"-").concat(a)}function Gt(t){var a=n.useContext(Ut);return Jt(a,t)}var br=function(t){Object(_.a)(u,t);var a=Object(ie.a)(u);function u(){return Object(w.a)(this,u),a.apply(this,arguments)}return Object(z.a)(u,[{key:"render",value:function(){var b=this.props,v=b.title,O=b.attribute,S=b.elementRef,W=Object(Ae.a)(b,["title","attribute","elementRef"]),L=Object(ge.a)(W,["eventKey"]);return Object(g.a)(!O,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),n.createElement(j.Item,Object(V.a)({},O,{title:typeof v=="string"?v:void 0},L,{ref:S}))}}]),u}(n.Component),Or=function(a){var u,h=a.style,b=a.className,v=a.eventKey,O=a.disabled,S=a.itemIcon,W=a.children,L=a.role,$=a.onMouseEnter,G=a.onMouseLeave,J=a.onClick,se=a.onKeyDown,X=a.onFocus,Q=Object(Ae.a)(a,["style","className","eventKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"]),ue=Gt(v),U=n.useContext(We),q=U.prefixCls,re=U.onItemClick,Z=U.disabled,oe=U.overflowDisabled,k=U.itemIcon,be=U.selectedKeys,ne=U.onActive,ce="".concat(q,"-item"),me=n.useRef(),ae=n.useRef(),H=Z||O,de=ze(v),ye=function(Ve){return{key:v,keyPath:de,item:me.current,domEvent:Ve}},he=S||k,Se=it(v,H,$,G),Ke=Se.active,Oe=Object(Ae.a)(Se,["active"]),Re=be.includes(v),Fe=D(de.length),Me=function(Ve){if(!H){var Ue=ye(Ve);J==null||J(_n(Ue)),re(Ue)}},De=function(Ve){if(se==null||se(Ve),Ve.which===we.a.ENTER){var Ue=ye(Ve);J==null||J(_n(Ue)),re(Ue)}},je=function(Ve){ne(v),X==null||X(Ve)},$e={};return a.role==="option"&&($e["aria-selected"]=Re),n.createElement(br,Object(V.a)({ref:me,elementRef:ae,role:L===null?"none":L||"menuitem",tabIndex:O?null:-1,"data-menu-id":oe&&ue?null:ue},Q,Oe,$e,{component:"li","aria-disabled":O,style:Object(ve.a)(Object(ve.a)({},Fe),h),className:Ie()(ce,(u={},Object(le.a)(u,"".concat(ce,"-active"),Ke),Object(le.a)(u,"".concat(ce,"-selected"),Re),Object(le.a)(u,"".concat(ce,"-disabled"),H),u),b),onClick:Me,onKeyDown:De,onFocus:je}),W,n.createElement(c,{props:Object(ve.a)(Object(ve.a)({},a),{},{isSelected:Re}),icon:he}))};function Cr(t){var a=t.eventKey,u=ee(),h=ze(a);return n.useEffect(function(){if(u)return u.registerPath(a,h),function(){u.unregisterPath(a,h)}},[h]),u?null:n.createElement(Or,t)}var jt=Cr;function Dt(t,a){return Object(Bn.a)(t).map(function(u,h){if(n.isValidElement(u)){var b=u.key;return b==null&&(b="tmp_key-".concat([].concat(Object(fn.a)(a),[h]).join("-"))),n.cloneElement(u,{key:b,eventKey:b})}return u})}function et(t){var a=n.useRef(t);a.current=t;var u=n.useCallback(function(){for(var h,b=arguments.length,v=new Array(b),O=0;O<b;O++)v[O]=arguments[O];return(h=a.current)===null||h===void 0?void 0:h.call.apply(h,[a].concat(v))},[]);return t?u:void 0}var Rr=function(a,u){var h=a.className,b=a.children,v=Object(Ae.a)(a,["className","children"]),O=n.useContext(We),S=O.prefixCls,W=O.mode;return n.createElement("ul",Object(V.a)({className:Ie()(S,"".concat(S,"-sub"),"".concat(S,"-").concat(W==="inline"?"inline":"vertical"),h)},v,{"data-menu-list":!0,ref:u}),b)},Ht=n.forwardRef(Rr);Ht.displayName="SubMenuList";var Xt=Ht,Sr=e("uciX"),zn={adjustX:1,adjustY:1},Yt={topLeft:{points:["bl","tl"],overflow:zn,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:zn,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:zn,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:zn,offset:[4,0]}},Pr={topLeft:{points:["bl","tl"],overflow:zn,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:zn,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:zn,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:zn,offset:[4,0]}},fa=Yt;function Qt(t,a,u){if(a)return a;if(u)return u[t]||u.other}var Er={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function jr(t){var a=t.prefixCls,u=t.visible,h=t.children,b=t.popup,v=t.popupClassName,O=t.popupOffset,S=t.disabled,W=t.mode,L=t.onVisibleChange,$=n.useContext(We),G=$.getPopupContainer,J=$.rtl,se=$.subMenuOpenDelay,X=$.subMenuCloseDelay,Q=$.builtinPlacements,ue=$.triggerSubMenuAction,U=$.forceSubMenuRender,q=$.motion,re=$.defaultMotions,Z=n.useState(!1),oe=Object(K.a)(Z,2),k=oe[0],be=oe[1],ne=J?Object(ve.a)(Object(ve.a)({},Pr),Q):Object(ve.a)(Object(ve.a)({},Yt),Q),ce=Er[W],me=Qt(W,q,re),ae=Object(ve.a)(Object(ve.a)({},me),{},{leavedClassName:"".concat(a,"-hidden"),removeOnLeave:!1,motionAppear:!0}),H=n.useRef();return n.useEffect(function(){return H.current=Object(Qe.a)(function(){be(u)}),function(){Qe.a.cancel(H.current)}},[u]),n.createElement(Sr.a,{prefixCls:a,popupClassName:Ie()("".concat(a,"-popup"),Object(le.a)({},"".concat(a,"-rtl"),J),v),stretch:W==="horizontal"?"minWidth":null,getPopupContainer:G,builtinPlacements:ne,popupPlacement:ce,popupVisible:k,popup:b,popupAlign:O&&{offset:O},action:S?[]:[ue],mouseEnterDelay:se,mouseLeaveDelay:X,onPopupVisibleChange:L,forceRender:U,popupMotion:ae},h)}var Dr=e("8XRh");function Ir(t){var a=t.id,u=t.open,h=t.keyPath,b=t.children,v="inline",O=n.useContext(We),S=O.prefixCls,W=O.forceSubMenuRender,L=O.motion,$=O.defaultMotions,G=O.mode,J=n.useRef(!1);J.current=G===v;var se=n.useState(!J.current),X=Object(K.a)(se,2),Q=X[0],ue=X[1],U=J.current?u:!1;n.useEffect(function(){J.current&&ue(!1)},[G]);var q=Object(ve.a)({},Qt(v,L,$));h.length>1&&(q.motionAppear=!1);var re=q.onVisibleChanged;return q.onVisibleChanged=function(Z){return!J.current&&!Z&&ue(!0),re==null?void 0:re(Z)},Q?null:n.createElement(En,{mode:v,locked:!J.current},n.createElement(Dr.default,Object(V.a)({visible:U},q,{forceRender:W,removeOnLeave:!1,leavedClassName:"".concat(S,"-hidden")}),function(Z){var oe=Z.className,k=Z.style;return n.createElement(Xt,{id:a,className:oe,style:k},b)}))}var Nr=function(a){var u,h=a.style,b=a.className,v=a.title,O=a.eventKey,S=a.disabled,W=a.internalPopupClose,L=a.children,$=a.itemIcon,G=a.expandIcon,J=a.popupClassName,se=a.popupOffset,X=a.onClick,Q=a.onMouseEnter,ue=a.onMouseLeave,U=a.onTitleClick,q=a.onTitleMouseEnter,re=a.onTitleMouseLeave,Z=Object(Ae.a)(a,["style","className","title","eventKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"]),oe=Gt(O),k=n.useContext(We),be=k.prefixCls,ne=k.mode,ce=k.openKeys,me=k.disabled,ae=k.overflowDisabled,H=k.activeKey,de=k.selectedKeys,ye=k.itemIcon,he=k.expandIcon,Se=k.onItemClick,Ke=k.onOpenChange,Oe=k.onActive,Re=n.useContext(Ge),Fe=Re.isSubPathKey,Me=ze(),De="".concat(be,"-submenu"),je=me||S,$e=n.useRef(),qe=n.useRef(),Ve=$||ye,Ue=G||he,Ye=ce.includes(O),Le=!ae&&Ye,jn=Fe(de,O),tn=it(O,je,q,re),Ze=tn.active,ln=Object(Ae.a)(tn,["active"]),yn=n.useState(!1),bn=Object(K.a)(yn,2),Ne=bn[0],He=bn[1],_e=function(Xe){je||He(Xe)},xe=function(Xe){_e(!0),Q==null||Q({key:O,domEvent:Xe})},Kn=function(Xe){_e(!1),ue==null||ue({key:O,domEvent:Xe})},Jn=n.useMemo(function(){return Ze||(ne!=="inline"?Ne||Fe([H],O):!1)},[ne,Ze,H,Ne,O,Fe]),Ln=D(Me.length),rn=function(Xe){je||(U==null||U({key:O,domEvent:Xe}),ne==="inline"&&Ke(O,!Ye))},Dn=et(function(ke){X==null||X(_n(ke)),Se(ke)}),un=function(Xe){ne!=="inline"&&Ke(O,Xe)},In=function(){Oe(O)},en=oe&&"".concat(oe,"-popup"),an=n.createElement("div",Object(V.a)({role:"menuitem",style:Ln,className:"".concat(De,"-title"),tabIndex:je?null:-1,ref:$e,title:typeof v=="string"?v:null,"data-menu-id":ae&&oe?null:oe,"aria-expanded":Le,"aria-haspopup":!0,"aria-controls":en,"aria-disabled":je,onClick:rn,onFocus:In},ln),v,n.createElement(c,{icon:ne!=="horizontal"?Ue:null,props:Object(ve.a)(Object(ve.a)({},a),{},{isOpen:Le,isSubMenu:!0})},n.createElement("i",{className:"".concat(De,"-arrow")}))),Nn=n.useRef(ne);if(ne!=="inline"&&(Nn.current=Me.length>1?"vertical":ne),!ae){var cn=Nn.current;an=n.createElement(jr,{mode:cn,prefixCls:De,visible:!W&&Le&&ne!=="inline",popupClassName:J,popupOffset:se,popup:n.createElement(En,{mode:cn},n.createElement(Xt,{id:en,ref:qe},L)),disabled:je,onVisibleChange:un},an)}return n.createElement(En,{onItemClick:Dn,mode:ne==="horizontal"?"vertical":ne,itemIcon:Ve,expandIcon:Ue},n.createElement(j.Item,Object(V.a)({role:"none"},Z,{component:"li",style:h,className:Ie()(De,"".concat(De,"-").concat(ne),b,(u={},Object(le.a)(u,"".concat(De,"-open"),Le),Object(le.a)(u,"".concat(De,"-active"),Jn),Object(le.a)(u,"".concat(De,"-selected"),jn),Object(le.a)(u,"".concat(De,"-disabled"),je),u)),onMouseEnter:xe,onMouseLeave:Kn}),an,!ae&&n.createElement(Ir,{id:en,open:Le,keyPath:Me},L)))};function Zt(t){var a=t.eventKey,u=t.children,h=ze(a),b=Dt(u,h),v=ee();n.useEffect(function(){if(v)return v.registerPath(a,h),function(){v.unregisterPath(a,h)}},[h]);var O;return v?O=b:O=n.createElement(Nr,t,b),n.createElement(Ee.Provider,{value:h},O)}var Ar=e("x/xZ");function xt(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Object(Ar.a)(t)){var u=t.nodeName.toLowerCase(),h=["input","select","textarea","button"].includes(u)||t.isContentEditable||u==="a"&&!!t.getAttribute("href"),b=t.getAttribute("tabindex"),v=Number(b),O=null;return b&&!Number.isNaN(v)?O=v:h&&O===null&&(O=0),h&&t.disabled&&(O=null),O!==null&&(O>=0||a&&O<0)}return!1}function kt(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,u=Object(fn.a)(t.querySelectorAll("*")).filter(function(h){return xt(h,a)});return xt(t,a)&&u.unshift(t),u}var mt=null;function pa(){mt=document.activeElement}function va(){mt=null}function ha(){if(mt)try{mt.focus()}catch(t){}}function ga(t,a){if(a.keyCode===9){var u=kt(t),h=u[a.shiftKey?0:u.length-1],b=h===document.activeElement||t===document.activeElement;if(b){var v=u[a.shiftKey?u.length-1:0];v.focus(),a.preventDefault()}}}var It=we.a.LEFT,Nt=we.a.RIGHT,At=we.a.UP,ft=we.a.DOWN,pt=we.a.ENTER,qt=we.a.ESC,_t=[At,ft,It,Nt];function Mr(t,a,u,h){var b,v,O,S,W="prev",L="next",$="children",G="parent";if(t==="inline"&&h===pt)return{inlineTrigger:!0};var J=(b={},Object(le.a)(b,At,W),Object(le.a)(b,ft,L),b),se=(v={},Object(le.a)(v,It,u?L:W),Object(le.a)(v,Nt,u?W:L),Object(le.a)(v,ft,$),Object(le.a)(v,pt,$),v),X=(O={},Object(le.a)(O,At,W),Object(le.a)(O,ft,L),Object(le.a)(O,pt,$),Object(le.a)(O,qt,G),Object(le.a)(O,It,u?$:G),Object(le.a)(O,Nt,u?G:$),O),Q={inline:J,horizontal:se,vertical:X,inlineSub:J,horizontalSub:X,verticalSub:X},ue=(S=Q["".concat(t).concat(a?"":"Sub")])===null||S===void 0?void 0:S[h];switch(ue){case W:return{offset:-1,sibling:!0};case L:return{offset:1,sibling:!0};case G:return{offset:-1,sibling:!1};case $:return{offset:1,sibling:!1};default:return null}}function Tr(t){for(var a=t;a;){if(a.getAttribute("data-menu-list"))return a;a=a.parentElement}return null}function Fr(t,a){for(var u=t||document.activeElement;u;){if(a.has(u))return u;u=u.parentElement}return null}function Br(t,a){var u=kt(t,!0);return u.filter(function(h){return a.has(h)})}function er(t,a,u){var h=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!t)return null;var b=Br(t,a),v=b.length,O=b.findIndex(function(S){return u===S});return h<0?O===-1?O=v-1:O-=1:h>0&&(O+=1),O=(O+v)%v,b[O]}function wr(t,a,u,h,b,v,O,S,W,L){var $=n.useRef(),G=n.useRef();G.current=a;var J=function(){Qe.a.cancel($.current)};return n.useEffect(function(){return function(){J()}},[]),function(se){var X=se.which;if([].concat(_t,[pt,qt]).includes(X)){var Q,ue,U,q=function(){Q=new Set,ue=new Map,U=new Map;var ye=v();return ye.forEach(function(he){var Se=document.querySelector("[data-menu-id='".concat(Jt(h,he),"']"));Se&&(Q.add(Se),U.set(Se,he),ue.set(he,Se))}),Q};q();var re=ue.get(a),Z=Fr(re,Q),oe=U.get(Z),k=Mr(t,O(oe,!0).length===1,u,X);if(!k)return;_t.includes(X)&&se.preventDefault();var be=function(ye){if(ye){var he=ye,Se=ye.querySelector("a");(Se==null?void 0:Se.getAttribute("href"))&&(he=Se);var Ke=U.get(ye);S(Ke),J(),$.current=Object(Qe.a)(function(){G.current===Ke&&he.focus()})}};if(k.sibling||!Z){var ne;!Z||t==="inline"?ne=b.current:ne=Tr(Z);var ce=er(ne,Q,Z,k.offset);be(ce)}else if(k.inlineTrigger)W(oe);else if(k.offset>0)W(oe,!0),J(),$.current=Object(Qe.a)(function(){q();var de=Z.getAttribute("aria-controls"),ye=document.getElementById(de),he=er(ye,Q);be(he)},5);else if(k.offset<0){var me=O(oe,!0),ae=me[me.length-2],H=ue.get(ae);W(ae,!1),be(H)}}L==null||L(se)}}var Wr=Math.random().toFixed(5).toString().slice(2),nr=0;function Kr(t){var a=Object(Sn.a)(t,{value:t}),u=Object(K.a)(a,2),h=u[0],b=u[1];return n.useEffect(function(){nr+=1;var v="".concat(Wr,"-").concat(nr);b("rc-menu-uuid-".concat(v))},[]),h}var ya=e("p8sG");function Lr(t){Promise.resolve().then(t)}var Mt="__RC_UTIL_PATH_SPLIT__",tr=function(a){return a.join(Mt)},$r=function(a){return a.split(Mt)},Tt="rc-menu-more";function Vr(){var t=n.useState({}),a=Object(K.a)(t,2),u=a[1],h=Object(n.useRef)(new Map),b=Object(n.useRef)(new Map),v=n.useState([]),O=Object(K.a)(v,2),S=O[0],W=O[1],L=Object(n.useRef)(0),$=Object(n.useCallback)(function(U,q){var re=tr(q);b.current.set(re,U),h.current.set(U,re),L.current+=1;var Z=L.current;Lr(function(){Z===L.current&&u({})})},[]),G=Object(n.useCallback)(function(U,q){var re=tr(q);b.current.delete(re),h.current.delete(U)},[]),J=Object(n.useCallback)(function(U){W(U)},[]),se=Object(n.useCallback)(function(U,q){var re=h.current.get(U)||"",Z=$r(re);return q&&S.includes(Z[0])&&Z.unshift(Tt),Z},[S]),X=Object(n.useCallback)(function(U,q){return U.some(function(re){var Z=se(re,!0);return Z.includes(q)})},[se]),Q=function(){var q=Object(fn.a)(h.current.keys());return S.length&&q.push(Tt),q},ue=Object(n.useCallback)(function(U){var q="".concat(h.current.get(U)).concat(Mt),re=new Set;return Object(fn.a)(b.current.keys()).forEach(function(Z){Z.startsWith(q)&&re.add(b.current.get(Z))}),re},[]);return{registerPath:$,unregisterPath:G,refreshOverflowKeys:J,isSubPathKey:X,getKeyPath:se,getKeys:Q,getSubPathKeys:ue}}var vt=[],zr=function(a){var u,h,b=a.prefixCls,v=b===void 0?"rc-menu":b,O=a.style,S=a.className,W=a.tabIndex,L=W===void 0?0:W,$=a.children,G=a.direction,J=a.id,se=a.mode,X=se===void 0?"vertical":se,Q=a.inlineCollapsed,ue=a.disabled,U=a.disabledOverflow,q=a.subMenuOpenDelay,re=q===void 0?.1:q,Z=a.subMenuCloseDelay,oe=Z===void 0?.1:Z,k=a.forceSubMenuRender,be=a.defaultOpenKeys,ne=a.openKeys,ce=a.activeKey,me=a.defaultActiveFirst,ae=a.selectable,H=ae===void 0?!0:ae,de=a.multiple,ye=de===void 0?!1:de,he=a.defaultSelectedKeys,Se=a.selectedKeys,Ke=a.onSelect,Oe=a.onDeselect,Re=a.inlineIndent,Fe=Re===void 0?24:Re,Me=a.motion,De=a.defaultMotions,je=a.triggerSubMenuAction,$e=je===void 0?"hover":je,qe=a.builtinPlacements,Ve=a.itemIcon,Ue=a.expandIcon,Ye=a.overflowedIndicator,Le=Ye===void 0?"...":Ye,jn=a.getPopupContainer,tn=a.onClick,Ze=a.onOpenChange,ln=a.onKeyDown,yn=a.openAnimation,bn=a.openTransitionName,Ne=Object(Ae.a)(a,["prefixCls","style","className","tabIndex","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName"]),He=Dt($,vt),_e=n.useState(!1),xe=Object(K.a)(_e,2),Kn=xe[0],Jn=xe[1],Ln=n.useRef(),rn=Kr(J),Dn=G==="rtl",un=n.useMemo(function(){return X==="inline"&&Q?["vertical",Q]:[X,!1]},[X,Q]),In=Object(K.a)(un,2),en=In[0],an=In[1],Nn=n.useState(0),cn=Object(K.a)(Nn,2),ke=cn[0],Xe=cn[1],Gn=ke>=He.length-1||en!=="horizontal"||U,Hn=Object(Sn.a)(be,{value:ne,postState:function(x){return x||vt}}),nt=Object(K.a)(Hn,2),On=nt[0],hn=nt[1],Xn=n.useState(On),Cn=Object(K.a)(Xn,2),mn=Cn[0],Yn=Cn[1],An=en==="inline",Qn=n.useRef(!1);n.useEffect(function(){An&&Yn(On)},[On]),n.useEffect(function(){if(!Qn.current){Qn.current=!0;return}if(An)hn(mn);else{var te=[];hn(te),Ze==null||Ze(te)}},[An]);var dn=Vr(),Mn=dn.registerPath,pe=dn.unregisterPath,Pe=dn.refreshOverflowKeys,Be=dn.isSubPathKey,nn=dn.getKeyPath,Zn=dn.getKeys,gt=dn.getSubPathKeys,Wt=n.useMemo(function(){return{registerPath:Mn,unregisterPath:pe}},[Mn,pe]),Kt=n.useMemo(function(){return{isSubPathKey:Be}},[Be]);n.useEffect(function(){Pe(Gn?vt:He.slice(ke+1).map(function(te){return te.key}))},[ke,Gn]);var Lt=Object(Sn.a)(ce||me&&((u=He[0])===null||u===void 0?void 0:u.key),{value:ce}),tt=Object(K.a)(Lt,2),yt=tt[0],ot=tt[1],bt=et(function(te){ot(te)}),$t=et(function(){ot(void 0)}),Ot=Object(Sn.a)(he||[],{value:Se,postState:function(x){return Array.isArray(x)?x:x==null?vt:[x]}}),Ct=Object(K.a)(Ot,2),rt=Ct[0],Tn=Ct[1],Rt=function(x){if(!!H){var Ce=x.key,Je=rt.includes(Ce),sn;Je?sn=rt.filter(function(kn){return kn!==Ce}):ye?sn=[].concat(Object(fn.a)(rt),[Ce]):sn=[Ce],Tn(sn);var Un=Object(ve.a)(Object(ve.a)({},x),{},{selectedKeys:sn});Je?Oe==null||Oe(Un):Ke==null||Ke(Un)}},St=et(function(te){tn==null||tn(_n(te)),Rt(te)}),lt=et(function(te,x){var Ce=On.filter(function(sn){return sn!==te});if(x)Ce.push(te);else if(en!=="inline"){var Je=gt(te);Ce=Ce.filter(function(sn){return!Je.has(sn)})}o()(On,Ce)||(hn(Ce),Ze==null||Ze(Ce))}),xn=et(jn),ut=function(x,Ce){var Je=Ce!=null?Ce:!On.includes(x);lt(x,Je)},dt=wr(en,yt,Dn,rn,Ln,Zn,nn,ot,ut,ln);n.useEffect(function(){Jn(!0)},[]);var Pt=en!=="horizontal"||U?He:He.map(function(te,x){return n.createElement(En,{key:te.key,overflowDisabled:x>ke},te)}),Et=n.createElement(j,Object(V.a)({id:J,ref:Ln,prefixCls:"".concat(v,"-overflow"),component:"ul",itemComponent:jt,className:Ie()(v,"".concat(v,"-root"),"".concat(v,"-").concat(en),S,(h={},Object(le.a)(h,"".concat(v,"-inline-collapsed"),an),Object(le.a)(h,"".concat(v,"-rtl"),Dn),h)),dir:G,style:O,role:"menu",tabIndex:L,data:Pt,renderRawItem:function(x){return x},renderRawRest:function(x){var Ce=x.length,Je=Ce?He.slice(-Ce):null;return n.createElement(Zt,{eventKey:Tt,title:Le,disabled:Gn,internalPopupClose:Ce===0},Je)},maxCount:en!=="horizontal"||U?j.INVALIDATE:j.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(x){Xe(x)},onKeyDown:dt},Ne));return n.createElement(Ut.Provider,{value:rn},n.createElement(En,{prefixCls:v,mode:en,openKeys:On,rtl:Dn,disabled:ue,motion:Kn?Me:null,defaultMotions:Kn?De:null,activeKey:yt,onActive:bt,onInactive:$t,selectedKeys:rt,inlineIndent:Fe,subMenuOpenDelay:re,subMenuCloseDelay:oe,forceSubMenuRender:k,builtinPlacements:qe,triggerSubMenuAction:$e,getPopupContainer:xn,itemIcon:Ve,expandIcon:Ue,onItemClick:St,onOpenChange:lt},n.createElement(Ge.Provider,{value:Kt},Et),n.createElement(fe.Provider,{value:Wt},He)))},Ur=zr,Jr=function(a){var u=a.className,h=a.title,b=a.eventKey,v=a.children,O=Object(Ae.a)(a,["className","title","eventKey","children"]),S=n.useContext(We),W=S.prefixCls,L="".concat(W,"-item-group");return n.createElement("li",Object(V.a)({},O,{onClick:function(G){return G.stopPropagation()},className:Ie()(L,u)}),n.createElement("div",{className:"".concat(L,"-title"),title:typeof h=="string"?h:void 0},h),n.createElement("ul",{className:"".concat(L,"-list")},v))};function Gr(t){var a=t.children,u=Object(Ae.a)(t,["children"]),h=ze(u.eventKey),b=Dt(a,h),v=ee();return v?b:n.createElement(Jr,u,b)}function Hr(t){var a=t.className,u=t.style,h=n.useContext(We),b=h.prefixCls,v=ee();return v?null:n.createElement("li",{className:Ie()("".concat(b,"-item-divider"),a),style:u})}var st=Ur;st.Item=jt,st.SubMenu=Zt,st.ItemGroup=Gr,st.Divider=Hr;var Xr=st,Yr=e("eDIo");function Qr(t,a){var u=t.prefixCls,h=t.editable,b=t.locale,v=t.style;return!h||h.showAdd===!1?null:n.createElement("button",{ref:a,type:"button",className:"".concat(u,"-nav-add"),style:v,"aria-label":(b==null?void 0:b.addAriaLabel)||"Add tab",onClick:function(S){h.onEdit("add",{event:S})}},h.addIcon||"+")}var rr=n.forwardRef(Qr);function Zr(t,a){var u=t.prefixCls,h=t.id,b=t.tabs,v=t.locale,O=t.mobile,S=t.moreIcon,W=S===void 0?"More":S,L=t.moreTransitionName,$=t.style,G=t.className,J=t.editable,se=t.tabBarGutter,X=t.rtl,Q=t.onTabClick,ue=Object(n.useState)(!1),U=Object(K.a)(ue,2),q=U[0],re=U[1],Z=Object(n.useState)(null),oe=Object(K.a)(Z,2),k=oe[0],be=oe[1],ne="".concat(h,"-more-popup"),ce="".concat(u,"-dropdown"),me=k!==null?"".concat(ne,"-").concat(k):null,ae=v==null?void 0:v.dropdownAriaLabel,H=n.createElement(Xr,{onClick:function(Re){var Fe=Re.key,Me=Re.domEvent;Q(Fe,Me),re(!1)},id:ne,tabIndex:-1,role:"listbox","aria-activedescendant":me,selectedKeys:[k],"aria-label":ae!==void 0?ae:"expanded dropdown"},b.map(function(Oe){return n.createElement(jt,{key:Oe.key,id:"".concat(ne,"-").concat(Oe.key),role:"option","aria-controls":h&&"".concat(h,"-panel-").concat(Oe.key),disabled:Oe.disabled},Oe.tab)}));function de(Oe){for(var Re=b.filter(function($e){return!$e.disabled}),Fe=Re.findIndex(function($e){return $e.key===k})||0,Me=Re.length,De=0;De<Me;De+=1){Fe=(Fe+Oe+Me)%Me;var je=Re[Fe];if(!je.disabled){be(je.key);return}}}function ye(Oe){var Re=Oe.which;if(!q){[we.a.DOWN,we.a.SPACE,we.a.ENTER].includes(Re)&&(re(!0),Oe.preventDefault());return}switch(Re){case we.a.UP:de(-1),Oe.preventDefault();break;case we.a.DOWN:de(1),Oe.preventDefault();break;case we.a.ESC:re(!1);break;case we.a.SPACE:case we.a.ENTER:k!==null&&Q(k,Oe);break}}Object(n.useEffect)(function(){var Oe=document.getElementById(me);Oe&&Oe.scrollIntoView&&Oe.scrollIntoView(!1)},[k]),Object(n.useEffect)(function(){q||be(null)},[q]);var he=Object(le.a)({},X?"marginLeft":"marginRight",se);b.length||(he.visibility="hidden",he.order=1);var Se=Ie()(Object(le.a)({},"".concat(ce,"-rtl"),X)),Ke=O?null:n.createElement(Yr.default,{prefixCls:ce,overlay:H,trigger:["hover"],visible:q,transitionName:L,onVisibleChange:re,overlayClassName:Se,mouseEnterDelay:.1,mouseLeaveDelay:.1},n.createElement("button",{type:"button",className:"".concat(u,"-nav-more"),style:he,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":ne,id:"".concat(h,"-more"),"aria-expanded":q,onKeyDown:ye},W));return n.createElement("div",{className:Ie()("".concat(u,"-nav-operations"),G),style:$,ref:a},Ke,n.createElement(rr,{prefixCls:u,locale:v,editable:J}))}var xr=n.forwardRef(Zr),Ft=Object(n.createContext)(null),kr=.1,ar=.01,ht=20,ir=Math.pow(.995,ht);function qr(t,a){var u=Object(n.useState)(),h=Object(K.a)(u,2),b=h[0],v=h[1],O=Object(n.useState)(0),S=Object(K.a)(O,2),W=S[0],L=S[1],$=Object(n.useState)(0),G=Object(K.a)($,2),J=G[0],se=G[1],X=Object(n.useState)(),Q=Object(K.a)(X,2),ue=Q[0],U=Q[1],q=Object(n.useRef)();function re(ce){var me=ce.touches[0],ae=me.screenX,H=me.screenY;v({x:ae,y:H}),window.clearInterval(q.current)}function Z(ce){if(!!b){ce.preventDefault();var me=ce.touches[0],ae=me.screenX,H=me.screenY;v({x:ae,y:H});var de=ae-b.x,ye=H-b.y;a(de,ye);var he=Date.now();L(he),se(he-W),U({x:de,y:ye})}}function oe(){if(!!b&&(v(null),U(null),ue)){var ce=ue.x/J,me=ue.y/J,ae=Math.abs(ce),H=Math.abs(me);if(Math.max(ae,H)<kr)return;var de=ce,ye=me;q.current=window.setInterval(function(){if(Math.abs(de)<ar&&Math.abs(ye)<ar){window.clearInterval(q.current);return}de*=ir,ye*=ir,a(de*ht,ye*ht)},ht)}}var k=Object(n.useRef)();function be(ce){var me=ce.deltaX,ae=ce.deltaY,H=0,de=Math.abs(me),ye=Math.abs(ae);de===ye?H=k.current==="x"?me:ae:de>ye?(H=me,k.current="x"):(H=ae,k.current="y"),a(-H,-H)&&ce.preventDefault()}var ne=Object(n.useRef)(null);ne.current={onTouchStart:re,onTouchMove:Z,onTouchEnd:oe,onWheel:be},n.useEffect(function(){function ce(de){ne.current.onTouchStart(de)}function me(de){ne.current.onTouchMove(de)}function ae(de){ne.current.onTouchEnd(de)}function H(de){ne.current.onWheel(de)}return document.addEventListener("touchmove",me,{passive:!1}),document.addEventListener("touchend",ae,{passive:!1}),t.current.addEventListener("touchstart",ce,{passive:!1}),t.current.addEventListener("wheel",H),function(){document.removeEventListener("touchmove",me),document.removeEventListener("touchend",ae)}},[])}function _r(){var t=Object(n.useRef)(new Map);function a(h){return t.current.has(h)||t.current.set(h,n.createRef()),t.current.get(h)}function u(h){t.current.delete(h)}return[a,u]}function sr(t,a){var u=n.useRef(t),h=n.useState({}),b=Object(K.a)(h,2),v=b[1];function O(S){var W=typeof S=="function"?S(u.current):S;W!==u.current&&a(W,u.current),u.current=W,v({})}return[u.current,O]}var or=function(a){var u=a.position,h=a.prefixCls,b=a.extra;if(!b)return null;var v,O=b;return u==="right"&&(v=O.right||!O.left&&O||null),u==="left"&&(v=O.left||null),v?n.createElement("div",{className:"".concat(h,"-extra-content")},v):null};function ea(t,a){var u,h=n.useContext(Ft),b=h.prefixCls,v=h.tabs,O=t.className,S=t.style,W=t.id,L=t.animated,$=t.activeKey,G=t.rtl,J=t.extra,se=t.editable,X=t.locale,Q=t.tabPosition,ue=t.tabBarGutter,U=t.children,q=t.onTabClick,re=t.onTabScroll,Z=Object(n.useRef)(),oe=Object(n.useRef)(),k=Object(n.useRef)(),be=Object(n.useRef)(),ne=_r(),ce=Object(K.a)(ne,2),me=ce[0],ae=ce[1],H=Q==="top"||Q==="bottom",de=sr(0,function(te,x){H&&re&&re({direction:te>x?"left":"right"})}),ye=Object(K.a)(de,2),he=ye[0],Se=ye[1],Ke=sr(0,function(te,x){!H&&re&&re({direction:te>x?"top":"bottom"})}),Oe=Object(K.a)(Ke,2),Re=Oe[0],Fe=Oe[1],Me=Object(n.useState)(0),De=Object(K.a)(Me,2),je=De[0],$e=De[1],qe=Object(n.useState)(0),Ve=Object(K.a)(qe,2),Ue=Ve[0],Ye=Ve[1],Le=Object(n.useState)(0),jn=Object(K.a)(Le,2),tn=jn[0],Ze=jn[1],ln=Object(n.useState)(0),yn=Object(K.a)(ln,2),bn=yn[0],Ne=yn[1],He=Object(n.useState)(null),_e=Object(K.a)(He,2),xe=_e[0],Kn=_e[1],Jn=Object(n.useState)(null),Ln=Object(K.a)(Jn,2),rn=Ln[0],Dn=Ln[1],un=Object(n.useState)(0),In=Object(K.a)(un,2),en=In[0],an=In[1],Nn=Object(n.useState)(0),cn=Object(K.a)(Nn,2),ke=cn[0],Xe=cn[1],Gn=Pn(new Map),Hn=Object(K.a)(Gn,2),nt=Hn[0],On=Hn[1],hn=F(v,nt,je),Xn="".concat(b,"-nav-operations-hidden"),Cn=0,mn=0;H?G?(Cn=0,mn=Math.max(0,je-xe)):(Cn=Math.min(0,xe-je),mn=0):(Cn=Math.min(0,rn-Ue),mn=0);function Yn(te){return te<Cn?Cn:te>mn?mn:te}var An=Object(n.useRef)(),Qn=Object(n.useState)(),dn=Object(K.a)(Qn,2),Mn=dn[0],pe=dn[1];function Pe(){pe(Date.now())}function Be(){window.clearTimeout(An.current)}qr(Z,function(te,x){function Ce(Je,sn){Je(function(Un){var kn=Yn(Un+sn);return kn})}if(H){if(xe>=je)return!1;Ce(Se,te)}else{if(rn>=Ue)return!1;Ce(Fe,x)}return Be(),Pe(),!0}),Object(n.useEffect)(function(){return Be(),Mn&&(An.current=window.setTimeout(function(){pe(0)},100)),Be},[Mn]);function nn(){var te=arguments.length>0&&arguments[0]!==void 0?arguments[0]:$,x=hn.get(te)||{width:0,height:0,left:0,right:0,top:0};if(H){var Ce=he;G?x.right<he?Ce=x.right:x.right+x.width>he+xe&&(Ce=x.right+x.width-xe):x.left<-he?Ce=-x.left:x.left+x.width>-he+xe&&(Ce=-(x.left+x.width-xe)),Fe(0),Se(Yn(Ce))}else{var Je=Re;x.top<-Re?Je=-x.top:x.top+x.height>-Re+rn&&(Je=-(x.top+x.height-rn)),Se(0),Fe(Yn(Je))}}var Zn=B(hn,{width:xe,height:rn,left:he,top:Re},{width:tn,height:bn},{width:en,height:ke},Object(ve.a)(Object(ve.a)({},t),{},{tabs:v})),gt=Object(K.a)(Zn,2),Wt=gt[0],Kt=gt[1],Lt=v.map(function(te){var x=te.key;return n.createElement(Vn,{id:W,prefixCls:b,key:x,rtl:G,tab:te,closable:te.closable,editable:se,active:x===$,tabPosition:Q,tabBarGutter:ue,renderWrapper:U,removeAriaLabel:X==null?void 0:X.removeAriaLabel,ref:me(x),onClick:function(Je){q(x,Je)},onRemove:function(){ae(x)},onFocus:function(){nn(x),Pe(),G||(Z.current.scrollLeft=0),Z.current.scrollTop=0}})}),tt=Wn(function(){var te,x,Ce,Je,sn,Un,kn,Vt,zt,la=((te=Z.current)===null||te===void 0?void 0:te.offsetWidth)||0,ua=((x=Z.current)===null||x===void 0?void 0:x.offsetHeight)||0,mr=((Ce=be.current)===null||Ce===void 0?void 0:Ce.offsetWidth)||0,fr=((Je=be.current)===null||Je===void 0?void 0:Je.offsetHeight)||0,da=((sn=k.current)===null||sn===void 0?void 0:sn.offsetWidth)||0,ca=((Un=k.current)===null||Un===void 0?void 0:Un.offsetHeight)||0;Kn(la),Dn(ua),an(mr),Xe(fr);var pr=(((kn=oe.current)===null||kn===void 0?void 0:kn.offsetWidth)||0)-mr,vr=(((Vt=oe.current)===null||Vt===void 0?void 0:Vt.offsetHeight)||0)-fr;$e(pr),Ye(vr);var hr=(zt=k.current)===null||zt===void 0?void 0:zt.className.includes(Xn);Ze(pr-(hr?0:da)),Ne(vr-(hr?0:ca)),On(function(){var gr=new Map;return v.forEach(function(ma){var yr=ma.key,ct=me(yr).current;ct&&gr.set(yr,{width:ct.offsetWidth,height:ct.offsetHeight,left:ct.offsetLeft,top:ct.offsetTop})}),gr})}),yt=v.slice(0,Wt),ot=v.slice(Kt+1),bt=[].concat(Object(fn.a)(yt),Object(fn.a)(ot)),$t=Object(n.useState)(),Ot=Object(K.a)($t,2),Ct=Ot[0],rt=Ot[1],Tn=hn.get($),Rt=Object(n.useRef)();function St(){Qe.a.cancel(Rt.current)}Object(n.useEffect)(function(){var te={};return Tn&&(H?(G?te.right=Tn.right:te.left=Tn.left,te.width=Tn.width):(te.top=Tn.top,te.height=Tn.height)),St(),Rt.current=Object(Qe.a)(function(){rt(te)}),St},[Tn,H,G]),Object(n.useEffect)(function(){nn()},[$,Tn,hn,H]),Object(n.useEffect)(function(){tt()},[G,ue,$,v.map(function(te){return te.key}).join("_")]);var lt=!!bt.length,xn="".concat(b,"-nav-wrap"),ut,dt,Pt,Et;return H?G?(dt=he>0,ut=he+xe<je):(ut=he<0,dt=-he+xe<je):(Pt=Re<0,Et=-Re+rn<Ue),n.createElement("div",{ref:a,role:"tablist",className:Ie()("".concat(b,"-nav"),O),style:S,onKeyDown:function(){Pe()}},n.createElement(or,{position:"left",extra:J,prefixCls:b}),n.createElement($n.default,{onResize:tt},n.createElement("div",{className:Ie()(xn,(u={},Object(le.a)(u,"".concat(xn,"-ping-left"),ut),Object(le.a)(u,"".concat(xn,"-ping-right"),dt),Object(le.a)(u,"".concat(xn,"-ping-top"),Pt),Object(le.a)(u,"".concat(xn,"-ping-bottom"),Et),u)),ref:Z},n.createElement($n.default,{onResize:tt},n.createElement("div",{ref:oe,className:"".concat(b,"-nav-list"),style:{transform:"translate(".concat(he,"px, ").concat(Re,"px)"),transition:Mn?"none":void 0}},Lt,n.createElement(rr,{ref:be,prefixCls:b,locale:X,editable:se,style:{visibility:lt?"hidden":null}}),n.createElement("div",{className:Ie()("".concat(b,"-ink-bar"),Object(le.a)({},"".concat(b,"-ink-bar-animated"),L.inkBar)),style:Ct}))))),n.createElement(xr,Object(V.a)({},t,{ref:k,prefixCls:b,tabs:bt,className:!lt&&Xn})),n.createElement(or,{position:"right",extra:J,prefixCls:b}))}var lr=n.forwardRef(ea);function na(t){var a=t.id,u=t.activeKey,h=t.animated,b=t.tabPosition,v=t.rtl,O=t.destroyInactiveTabPane,S=n.useContext(Ft),W=S.prefixCls,L=S.tabs,$=h.tabPane,G=L.findIndex(function(J){return J.key===u});return n.createElement("div",{className:Ie()("".concat(W,"-content-holder"))},n.createElement("div",{className:Ie()("".concat(W,"-content"),"".concat(W,"-content-").concat(b),Object(le.a)({},"".concat(W,"-content-animated"),$)),style:G&&$?Object(le.a)({},v?"marginRight":"marginLeft","-".concat(G,"00%")):null},L.map(function(J){return n.cloneElement(J.node,{key:J.key,prefixCls:W,tabKey:J.key,id:a,animated:$,active:J.key===u,destroyInactiveTabPane:O})})))}function ur(t){var a=t.prefixCls,u=t.forceRender,h=t.className,b=t.style,v=t.id,O=t.active,S=t.animated,W=t.destroyInactiveTabPane,L=t.tabKey,$=t.children,G=n.useState(u),J=Object(K.a)(G,2),se=J[0],X=J[1];n.useEffect(function(){O?X(!0):W&&X(!1)},[O,W]);var Q={};return O||(S?(Q.visibility="hidden",Q.height=0,Q.overflowY="hidden"):Q.display="none"),n.createElement("div",{id:v&&"".concat(v,"-panel-").concat(L),role:"tabpanel",tabIndex:O?0:-1,"aria-labelledby":v&&"".concat(v,"-tab-").concat(L),"aria-hidden":!O,style:Object(ve.a)(Object(ve.a)({},Q),b),className:Ie()("".concat(a,"-tabpane"),O&&"".concat(a,"-tabpane-active"),h)},(O||se||u)&&$)}var dr=0;function ta(t){return Object(Bn.a)(t).map(function(a){if(n.isValidElement(a)){var u=a.key!==void 0?String(a.key):void 0;return Object(ve.a)(Object(ve.a)({key:u},a.props),{},{node:a})}return null}).filter(function(a){return a})}function ra(t,a){var u,h=t.id,b=t.prefixCls,v=b===void 0?"rc-tabs":b,O=t.className,S=t.children,W=t.direction,L=t.activeKey,$=t.defaultActiveKey,G=t.editable,J=t.animated,se=J===void 0?{inkBar:!0,tabPane:!1}:J,X=t.tabPosition,Q=X===void 0?"top":X,ue=t.tabBarGutter,U=t.tabBarStyle,q=t.tabBarExtraContent,re=t.locale,Z=t.moreIcon,oe=t.moreTransitionName,k=t.destroyInactiveTabPane,be=t.renderTabBar,ne=t.onChange,ce=t.onTabClick,me=t.onTabScroll,ae=Object(Ae.a)(t,["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"]),H=ta(S),de=W==="rtl",ye;se===!1?ye={inkBar:!1,tabPane:!1}:se===!0?ye={inkBar:!0,tabPane:!0}:ye=Object(ve.a)({inkBar:!0,tabPane:!1},Object(on.a)(se)==="object"?se:{});var he=Object(n.useState)(!1),Se=Object(K.a)(he,2),Ke=Se[0],Oe=Se[1];Object(n.useEffect)(function(){Oe(Object(wn.a)())},[]);var Re=Object(Sn.a)(function(){var Ne;return(Ne=H[0])===null||Ne===void 0?void 0:Ne.key},{value:L,defaultValue:$}),Fe=Object(K.a)(Re,2),Me=Fe[0],De=Fe[1],je=Object(n.useState)(function(){return H.findIndex(function(Ne){return Ne.key===Me})}),$e=Object(K.a)(je,2),qe=$e[0],Ve=$e[1];Object(n.useEffect)(function(){var Ne=H.findIndex(function(_e){return _e.key===Me});if(Ne===-1){var He;Ne=Math.max(0,Math.min(qe,H.length-1)),De((He=H[Ne])===null||He===void 0?void 0:He.key)}Ve(Ne)},[H.map(function(Ne){return Ne.key}).join("_"),Me,qe]);var Ue=Object(Sn.a)(null,{value:h}),Ye=Object(K.a)(Ue,2),Le=Ye[0],jn=Ye[1],tn=Q;Ke&&!["left","right"].includes(Q)&&(tn="top"),Object(n.useEffect)(function(){h||(jn("rc-tabs-".concat(dr)),dr+=1)},[]);function Ze(Ne,He){ce==null||ce(Ne,He),De(Ne),ne==null||ne(Ne)}var ln={id:Le,activeKey:Me,animated:ye,tabPosition:tn,rtl:de,mobile:Ke},yn,bn=Object(ve.a)(Object(ve.a)({},ln),{},{editable:G,locale:re,moreIcon:Z,moreTransitionName:oe,tabBarGutter:ue,onTabClick:Ze,onTabScroll:me,extra:q,style:U,panes:S});return be?yn=be(bn,lr):yn=n.createElement(lr,bn),n.createElement(Ft.Provider,{value:{tabs:H,prefixCls:v}},n.createElement("div",Object(V.a)({ref:a,id:h,className:Ie()(v,"".concat(v,"-").concat(tn),(u={},Object(le.a)(u,"".concat(v,"-mobile"),Ke),Object(le.a)(u,"".concat(v,"-editable"),G),Object(le.a)(u,"".concat(v,"-rtl"),de),u),O)},ae),yn,n.createElement(na,Object(V.a)({destroyInactiveTabPane:k},ln,{animated:ye}))))}var cr=n.forwardRef(ra);cr.TabPane=ur;var aa=cr,ia=aa,Bt=e("MZF8"),vn=e("dEAq"),sa=e("ZpkN"),ba=e("TIsu");function wt(t,a){var u,h=(u=t.match(/\.(\w+)$/))===null||u===void 0?void 0:u[1];return h||(h=a.tsx?"tsx":"jsx"),h}var oa=t=>{var a,u,h,b=Object(n.useRef)(),v=Object(n.useContext)(vn.context),O=v.locale,S=Object(vn.useLocaleProps)(O,t),W=Object(vn.useDemoUrl)(S.identifier),L=S.demoUrl||W,$=(Bt.a===null||Bt.a===void 0?void 0:Bt.a.location.hash)==="#".concat(S.identifier),G=Object.keys(S.sources).length===1,J=Object(vn.useCodeSandbox)((a=S.hideActions)!==null&&a!==void 0&&a.includes("CSB")?null:S),se=Object(vn.useRiddle)((u=S.hideActions)!==null&&u!==void 0&&u.includes("RIDDLE")?null:S),X=Object(vn.useMotions)(S.motions||[],b.current),Q=Object(Y.default)(X,2),ue=Q[0],U=Q[1],q=Object(vn.useCopy)(),re=Object(Y.default)(q,2),Z=re[0],oe=re[1],k=Object(n.useState)("_"),be=Object(Y.default)(k,2),ne=be[0],ce=be[1],me=Object(n.useState)(wt(ne,S.sources[ne])),ae=Object(Y.default)(me,2),H=ae[0],de=ae[1],ye=Object(n.useState)(Boolean(S.defaultShowCode)),he=Object(Y.default)(ye,2),Se=he[0],Ke=he[1],Oe=Object(n.useState)(Math.random()),Re=Object(Y.default)(Oe,2),Fe=Re[0],Me=Re[1],De=S.sources[ne][H]||S.sources[ne].content,je=Object(vn.useTSPlaygroundUrl)(O,De),$e=Object(n.useRef)(),qe=Object(vn.usePrefersColor)(),Ve=Object(Y.default)(qe,1),Ue=Ve[0];Object(n.useEffect)(()=>{Me(Math.random())},[Ue]);function Ye(Le){ce(Le),de(wt(Le,S.sources[Le]))}return C.a.createElement("div",{style:S.style,className:[S.className,"__dumi-default-previewer",$?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:S.identifier,"data-debug":S.debug||void 0,"data-iframe":S.iframe||void 0},S.iframe&&C.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),C.a.createElement("div",{ref:b,className:"__dumi-default-previewer-demo",style:{transform:S.transform?"translate(0, 0)":void 0,padding:S.compact||S.iframe&&S.compact!==!1?"0":void 0,background:S.background}},S.iframe?C.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(S.iframe).replace(/(\d)$/,"$1px")},key:Fe,src:L,ref:$e}):S.children),C.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":S.title},S.title&&C.a.createElement(vn.AnchorLink,{to:"#".concat(S.identifier)},S.title),S.description&&C.a.createElement("div",{dangerouslySetInnerHTML:{__html:S.description}})),C.a.createElement("div",{className:"__dumi-default-previewer-actions"},J&&C.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:J}),se&&C.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:se}),S.motions&&C.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:U,onClick:()=>ue()}),S.iframe&&C.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:()=>Me(Math.random())}),!((h=S.hideActions)!==null&&h!==void 0&&h.includes("EXTERNAL"))&&C.a.createElement(vn.Link,{target:"_blank",to:L},C.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),C.a.createElement("span",null),C.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":oe,onClick:()=>Z(De)}),H==="tsx"&&Se&&C.a.createElement(vn.Link,{target:"_blank",to:je},C.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),C.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(Se?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:()=>Ke(!Se)})),Se&&C.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!G&&C.a.createElement(ia,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xB7\xB7\xB7",defaultActiveKey:ne,onChange:Ye},Object.keys(S.sources).map(Le=>C.a.createElement(ur,{tab:Le==="_"?"index.".concat(wt(Le,S.sources[Le])):Le,key:Le}))),C.a.createElement("div",{className:"__dumi-default-previewer-source"},C.a.createElement(sa.a,{code:De,lang:H,showCopy:!1}))))},Oa=gn.default=oa},"80pN":function(Fn,gn,e){"use strict";(function(Y){/** @license React v16.14.0
* react-dom-test-utils.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var n=e("MgzW"),C=e("q1tI"),V=e("i8i4"),le=e("QCnb");function K(c){for(var D="https://reactjs.org/docs/error-decoder.html?invariant="+c,I=1;I<arguments.length;I++)D+="&args[]="+encodeURIComponent(arguments[I]);return"Minified React error #"+c+"; visit "+D+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var on=C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;on.hasOwnProperty("ReactCurrentDispatcher")||(on.ReactCurrentDispatcher={current:null}),on.hasOwnProperty("ReactCurrentBatchConfig")||(on.ReactCurrentBatchConfig={suspense:null});function Ae(c){var D=c,I=c;if(c.alternate)for(;D.return;)D=D.return;else{c=D;do D=c,(D.effectTag&1026)!=0&&(I=D.return),c=D.return;while(c)}return D.tag===3?I:null}function ve(c){if(Ae(c)!==c)throw Error(K(188))}function Rn(c){var D=c.alternate;if(!D){if(D=Ae(c),D===null)throw Error(K(188));return D!==c?null:c}for(var I=c,fe=D;;){var ee=I.return;if(ee===null)break;var Ee=ee.alternate;if(Ee===null){if(fe=ee.return,fe!==null){I=fe;continue}break}if(ee.child===Ee.child){for(Ee=ee.child;Ee;){if(Ee===I)return ve(ee),c;if(Ee===fe)return ve(ee),D;Ee=Ee.sibling}throw Error(K(188))}if(I.return!==fe.return)I=ee,fe=Ee;else{for(var ze=!1,Ge=ee.child;Ge;){if(Ge===I){ze=!0,I=ee,fe=Ee;break}if(Ge===fe){ze=!0,fe=ee,I=Ee;break}Ge=Ge.sibling}if(!ze){for(Ge=Ee.child;Ge;){if(Ge===I){ze=!0,I=Ee,fe=ee;break}if(Ge===fe){ze=!0,fe=Ee,I=ee;break}Ge=Ge.sibling}if(!ze)throw Error(K(189))}}if(I.alternate!==fe)throw Error(K(190))}if(I.tag!==3)throw Error(K(188));return I.stateNode.current===I?c:D}function Ie(){return!0}function Bn(){return!1}function wn(c,D,I,fe){this.dispatchConfig=c,this._targetInst=D,this.nativeEvent=I,c=this.constructor.Interface;for(var ee in c)c.hasOwnProperty(ee)&&((D=c[ee])?this[ee]=D(I):ee==="target"?this.target=fe:this[ee]=I[ee]);return this.isDefaultPrevented=(I.defaultPrevented!=null?I.defaultPrevented:I.returnValue===!1)?Ie:Bn,this.isPropagationStopped=Bn,this}n(wn.prototype,{preventDefault:function(){this.defaultPrevented=!0;var c=this.nativeEvent;c&&(c.preventDefault?c.preventDefault():typeof c.returnValue!="unknown"&&(c.returnValue=!1),this.isDefaultPrevented=Ie)},stopPropagation:function(){var c=this.nativeEvent;c&&(c.stopPropagation?c.stopPropagation():typeof c.cancelBubble!="unknown"&&(c.cancelBubble=!0),this.isPropagationStopped=Ie)},persist:function(){this.isPersistent=Ie},isPersistent:Bn,destructor:function(){var c=this.constructor.Interface,D;for(D in c)this[D]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=Bn,this._dispatchInstances=this._dispatchListeners=null}}),wn.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(c){return c.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null},wn.extend=function(c){function D(){}function I(){return fe.apply(this,arguments)}var fe=this;D.prototype=fe.prototype;var ee=new D;return n(ee,I.prototype),I.prototype=ee,I.prototype.constructor=I,I.Interface=n({},fe.Interface,c),I.extend=fe.extend,Qe(I),I},Qe(wn);function Sn(c,D,I,fe){if(this.eventPool.length){var ee=this.eventPool.pop();return this.call(ee,c,D,I,fe),ee}return new this(c,D,I,fe)}function fn(c){if(!(c instanceof this))throw Error(K(279));c.destructor(),10>this.eventPool.length&&this.eventPool.push(c)}function Qe(c){c.eventPool=[],c.getPooled=Sn,c.release=fn}var $n=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined");function Wn(c,D){var I={};return I[c.toLowerCase()]=D.toLowerCase(),I["Webkit"+c]="webkit"+D,I["Moz"+c]="moz"+D,I}var Pn={animationend:Wn("Animation","AnimationEnd"),animationiteration:Wn("Animation","AnimationIteration"),animationstart:Wn("Animation","AnimationStart"),transitionend:Wn("Transition","TransitionEnd")},we={},qn={};$n&&(qn=document.createElement("div").style,"AnimationEvent"in window||(delete Pn.animationend.animation,delete Pn.animationiteration.animation,delete Pn.animationstart.animation),"TransitionEvent"in window||delete Pn.transitionend.transition);function Vn(c){if(we[c])return we[c];if(!Pn[c])return c;var D=Pn[c],I;for(I in D)if(D.hasOwnProperty(I)&&I in qn)return we[c]=D[I];return c}var at=Vn("animationend"),F=Vn("animationiteration"),M=Vn("animationstart"),B=Vn("transitionend"),f=null;function o(c){if(f===null)try{var D=("require"+Math.random()).slice(0,7);f=(Y&&Y[D])("timers").setImmediate}catch(I){f=function(fe){var ee=new MessageChannel;ee.port1.onmessage=fe,ee.port2.postMessage(void 0)}}return f(c)}var g=V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,R=g[11],P=g[12],i=V.unstable_batchedUpdates,l=on.IsSomeRendererActing,y=typeof le.unstable_flushAllWithoutAsserting=="function",T=le.unstable_flushAllWithoutAsserting||function(){for(var c=!1;R();)c=!0;return c};function A(c){try{T(),o(function(){T()?A(c):c()})}catch(D){c(D)}}var E=0,s=!1,N=V.findDOMNode,d=V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,r=d[0],p=d[4],m=d[5],j=d[6],w=d[7],z=d[8],_=d[9],ie=d[10];function ge(){}function pn(c,D){if(!c)return[];if(c=Rn(c),!c)return[];for(var I=c,fe=[];;){if(I.tag===5||I.tag===6||I.tag===1||I.tag===0){var ee=I.stateNode;D(ee)&&fe.push(ee)}if(I.child)I.child.return=I,I=I.child;else{if(I===c)return fe;for(;!I.sibling;){if(!I.return||I.return===c)return fe;I=I.return}I.sibling.return=I.return,I=I.sibling}}}function We(c,D){if(c&&!c._reactInternalFiber){var I=""+c;throw c=Array.isArray(c)?"an array":c&&c.nodeType===1&&c.tagName?"a DOM node":I==="[object Object]"?"object with keys {"+Object.keys(c).join(", ")+"}":I,Error(K(286,D,c))}}var Te={renderIntoDocument:function(c){var D=document.createElement("div");return V.render(c,D)},isElement:function(c){return C.isValidElement(c)},isElementOfType:function(c,D){return C.isValidElement(c)&&c.type===D},isDOMComponent:function(c){return!(!c||c.nodeType!==1||!c.tagName)},isDOMComponentElement:function(c){return!!(c&&C.isValidElement(c)&&c.tagName)},isCompositeComponent:function(c){return Te.isDOMComponent(c)?!1:c!=null&&typeof c.render=="function"&&typeof c.setState=="function"},isCompositeComponentWithType:function(c,D){return Te.isCompositeComponent(c)?c._reactInternalFiber.type===D:!1},findAllInRenderedTree:function(c,D){return We(c,"findAllInRenderedTree"),c?pn(c._reactInternalFiber,D):[]},scryRenderedDOMComponentsWithClass:function(c,D){return We(c,"scryRenderedDOMComponentsWithClass"),Te.findAllInRenderedTree(c,function(I){if(Te.isDOMComponent(I)){var fe=I.className;typeof fe!="string"&&(fe=I.getAttribute("class")||"");var ee=fe.split(/\s+/);if(!Array.isArray(D)){if(D===void 0)throw Error(K(11));D=D.split(/\s+/)}return D.every(function(Ee){return ee.indexOf(Ee)!==-1})}return!1})},findRenderedDOMComponentWithClass:function(c,D){if(We(c,"findRenderedDOMComponentWithClass"),c=Te.scryRenderedDOMComponentsWithClass(c,D),c.length!==1)throw Error("Did not find exactly one match (found: "+c.length+") for class:"+D);return c[0]},scryRenderedDOMComponentsWithTag:function(c,D){return We(c,"scryRenderedDOMComponentsWithTag"),Te.findAllInRenderedTree(c,function(I){return Te.isDOMComponent(I)&&I.tagName.toUpperCase()===D.toUpperCase()})},findRenderedDOMComponentWithTag:function(c,D){if(We(c,"findRenderedDOMComponentWithTag"),c=Te.scryRenderedDOMComponentsWithTag(c,D),c.length!==1)throw Error("Did not find exactly one match (found: "+c.length+") for tag:"+D);return c[0]},scryRenderedComponentsWithType:function(c,D){return We(c,"scryRenderedComponentsWithType"),Te.findAllInRenderedTree(c,function(I){return Te.isCompositeComponentWithType(I,D)})},findRenderedComponentWithType:function(c,D){if(We(c,"findRenderedComponentWithType"),c=Te.scryRenderedComponentsWithType(c,D),c.length!==1)throw Error("Did not find exactly one match (found: "+c.length+") for componentType:"+D);return c[0]},mockComponent:function(c,D){return D=D||c.mockTagName||"div",c.prototype.render.mockImplementation(function(){return C.createElement(D,null,this.props.children)}),this},nativeTouchData:function(c,D){return{touches:[{pageX:c,pageY:D}]}},Simulate:null,SimulateNative:{},act:function(c){function D(){E--,l.current=I,P.current=fe}s===!1&&(s=!0,console.error("act(...) is not supported in production builds of React, and might not behave as expected.")),E++;var I=l.current,fe=P.current;l.current=!0,P.current=!0;try{var ee=i(c)}catch(Ee){throw D(),Ee}if(ee!==null&&typeof ee=="object"&&typeof ee.then=="function")return{then:function(Ee,ze){ee.then(function(){1<E||y===!0&&I===!0?(D(),Ee()):A(function(Ge){D(),Ge?ze(Ge):Ee()})},function(Ge){D(),ze(Ge)})}};try{E!==1||y!==!1&&I!==!1||T(),D()}catch(Ee){throw D(),Ee}return{then:function(Ee){Ee()}}}};function En(c){return function(D,I){if(C.isValidElement(D))throw Error(K(228));if(Te.isCompositeComponent(D))throw Error(K(229));var fe=p[c],ee=new ge;ee.target=D,ee.type=c.toLowerCase();var Ee=r(D),ze=new wn(fe,Ee,ee,D);ze.persist(),n(ze,I),fe.phasedRegistrationNames?m(ze):j(ze),V.unstable_batchedUpdates(function(){w(D),ie(ze)}),z()}}Te.Simulate={};for(var it in p)Te.Simulate[it]=En(it);function _n(c,D){return function(I,fe){var ee=new ge(c);n(ee,fe),Te.isDOMComponent(I)?(I=N(I),ee.target=I,_(D,1,document,ee)):I.tagName&&(ee.target=I,_(D,1,document,ee))}}[["abort","abort"],[at,"animationEnd"],[F,"animationIteration"],[M,"animationStart"],["blur","blur"],["canplaythrough","canPlayThrough"],["canplay","canPlay"],["cancel","cancel"],["change","change"],["click","click"],["close","close"],["compositionend","compositionEnd"],["compositionstart","compositionStart"],["compositionupdate","compositionUpdate"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["dragstart","dragStart"],["drag","drag"],["drop","drop"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],["ended","ended"],["error","error"],["focus","focus"],["input","input"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["loadstart","loadStart"],["loadstart","loadStart"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["mousedown","mouseDown"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["playing","playing"],["progress","progress"],["ratechange","rateChange"],["scroll","scroll"],["seeked","seeked"],["seeking","seeking"],["selectionchange","selectionChange"],["stalled","stalled"],["suspend","suspend"],["textInput","textInput"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchmove","touchMove"],["touchstart","touchStart"],[B,"transitionEnd"],["volumechange","volumeChange"],["waiting","waiting"],["wheel","wheel"]].forEach(function(c){var D=c[1];Te.SimulateNative[D]=_n(D,c[0])}),Y.exports=Te.default||Te}).call(this,e("hOG+")(Fn))},Jd6f:function(Fn,gn,e){"use strict";e.r(gn);var Y=e("q1tI"),n=e.n(Y),C=e("dEAq"),V=e.n(C),le=e("0zqC"),K=e("JjdP"),on=n.a.memo(K.default["pivot-table-demo"].component),Ae=n.a.memo(K.default["pivot-table-demo-1"].component),ve=n.a.memo(K.default["pivot-table-demo-2"].component);gn.default=Rn=>(n.a.useEffect(()=>{Rn!=null&&Rn.location.hash&&C.AnchorLink.scrollToAnchor(decodeURIComponent(Rn.location.hash.slice(1)))},[]),n.a.createElement(n.a.Fragment,null,n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"markdown"},n.a.createElement("h2",{id:"\u57FA\u672C\u7528\u6CD5"},n.a.createElement(C.AnchorLink,{to:"#\u57FA\u672C\u7528\u6CD5","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u57FA\u672C\u7528\u6CD5"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u8868\u683C\u6E32\u67D3\u4E0A\uFF0C\u7EF4\u5EA6\u4F5C\u4E3A ",n.a.createElement("code",null,"\u5DE6\u8868\u5934"),"\uFF0C\u6307\u6807\u4F5C\u4E3A ",n.a.createElement("code",null,"\u9876\u8868\u5934"),"\u3002"))),n.a.createElement(le.default,K.default["pivot-table-demo"].previewerProps,n.a.createElement(on,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h2",{id:"\u9AD8\u7EA7\u7528\u6CD5"},n.a.createElement(C.AnchorLink,{to:"#\u9AD8\u7EA7\u7528\u6CD5","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u9AD8\u7EA7\u7528\u6CD5"),n.a.createElement("h3",{id:"\u81EA\u5B9A\u4E49\u5355\u5143\u683C\u6E32\u67D3"},n.a.createElement(C.AnchorLink,{to:"#\u81EA\u5B9A\u4E49\u5355\u5143\u683C\u6E32\u67D3","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u81EA\u5B9A\u4E49\u5355\u5143\u683C\u6E32\u67D3")),n.a.createElement(le.default,K.default["pivot-table-demo-1"].previewerProps,n.a.createElement(Ae,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h3",{id:"\u53EF\u5C55\u5F00\u6536\u8D77"},n.a.createElement(C.AnchorLink,{to:"#\u53EF\u5C55\u5F00\u6536\u8D77","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u53EF\u5C55\u5F00/\u6536\u8D77")),n.a.createElement(le.default,K.default["pivot-table-demo-2"].previewerProps,n.a.createElement(ve,null)))))},JjdP:function(Fn,gn,e){"use strict";e.r(gn);var Y=e("9og8"),n=e("WmNS"),C=e.n(n),V=e("LtsZ"),le=`import React, { useRef } from 'react';
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

export default Demo;`,on=`export const delay = ms => new Promise(res => setTimeout(res, ms));

export const fakeApi = (url, data) => {
  console.group('request:', url);
  console.log('params:', data);
  console.groupEnd();
  return delay(500);
};`,Ae=`import React from 'react';
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
};`,Rn=`import React, { Component } from 'react';
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
}`,wn=`import { Select } from 'antd';
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

export default SearchInput;`,Sn=`import React from 'react';
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
}`,$n=`import React from 'react';
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

export default Demo;`,Wn=`import React, { useState, useRef } from 'react';
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

export default Demo;`,Pn=`import React, { useState, useRef } from 'react';
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

export default Demo;`,qn=`import React, { useState, useRef } from 'react';
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

export default Demo;`,Vn=`.fr-generator-playground {
  margin: 0 -24px;

  .hide-demo {
    display: none;
  }
}`,at=gn.default={"guide-card":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(C.a.mark(function B(){return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"oLxE"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},B)}));function M(){return F.apply(this,arguments)}return M}()}),previewerProps:{sources:{_:{jsx:le}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"card-render":{version:"0.1.2"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"0.x"}},identifier:"guide-card"}},"chart-render-demo":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(C.a.mark(function B(){var f,o,g,R,P,i,l;return C.a.wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return i=function(E,s){if(!s&&E&&E.__esModule)return E;if(E===null||typeof E!="object"&&typeof E!="function")return{default:E};var N=P(s);if(N&&N.has(E))return N.get(E);var d={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var p in E)if(p!=="default"&&Object.prototype.hasOwnProperty.call(E,p)){var m=r?Object.getOwnPropertyDescriptor(E,p):null;m&&(m.get||m.set)?Object.defineProperty(d,p,m):d[p]=E[p]}return d.default=E,N&&N.set(E,d),d},P=function(E){if(typeof WeakMap!="function")return null;var s=new WeakMap,N=new WeakMap;return(P=function(r){return r?N:s})(E)},f=e("K+nK"),T.t0=f,T.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return T.t1=T.sent,o=(0,T.t0)(T.t1),T.t2=i,T.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return T.t3=T.sent,g=(0,T.t2)(T.t3),T.next=15,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 15:return R=T.sent,l=function(){var E=(0,g.useState)("Line"),s=(0,o.default)(E,2),N=s[0],d=s[1],r={Line:R.Line,Column:R.Column,PivotTable:R.PivotTable}[N];return g.default.createElement("div",null,g.default.createElement("div",{style:{marginBottom:10}},g.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return d("Line")}},"\u6298\u7EBF\u56FE"),g.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return d("Column")}},"\u67F1\u72B6\u56FE"),g.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return d("PivotTable")}},"\u4EA4\u53C9\u8868")),g.default.createElement(r,{meta:[{id:"date",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF",isDim:!1},{id:"uv",name:"\u8BBF\u5BA2\u6570",isDim:!1}],data:[{date:"20200101",pv:100,uv:50},{date:"20200102",pv:120,uv:60},{date:"20200103",pv:140,uv:70},{date:"20200104",pv:160,uv:80}]}))},T.abrupt("return",l);case 18:case"end":return T.stop()}},B)}));function M(){return F.apply(this,arguments)}return M}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"chart-render-demo"}},"column-demo":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(C.a.mark(function B(){var f,o,g,R;return C.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=e("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=i.sent,R=function(){return o.default.createElement(g.Column,{meta:[{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{pv:50,uv:20}]})},i.abrupt("return",R);case 11:case"end":return i.stop()}},B)}));function M(){return F.apply(this,arguments)}return M}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo"}},"column-demo-1":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(C.a.mark(function B(){var f,o,g,R;return C.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=e("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=i.sent,R=function(){return o.default.createElement(g.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},i.abrupt("return",R);case 11:case"end":return i.stop()}},B)}));function M(){return F.apply(this,arguments)}return M}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-1"}},"column-demo-2":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(C.a.mark(function B(){var f,o,g,R;return C.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=e("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=i.sent,R=function(){return o.default.createElement(g.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},i.abrupt("return",R);case 11:case"end":return i.stop()}},B)}));function M(){return F.apply(this,arguments)}return M}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-2"}},"column-demo-3":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(C.a.mark(function B(){var f,o,g,R;return C.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=e("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=i.sent,R=function(){return o.default.createElement(g.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},i.abrupt("return",R);case 11:case"end":return i.stop()}},B)}));function M(){return F.apply(this,arguments)}return M}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-3"}},"column-demo-4":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(C.a.mark(function B(){var f,o,g,R;return C.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=e("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=i.sent,R=function(){return o.default.createElement(g.Column,{inverted:!0,label:{position:"middle",layout:[{type:"interval-adjust-position"},{type:"interval-hide-overlap"},{type:"adjust-color"}]},meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},i.abrupt("return",R);case 11:case"end":return i.stop()}},B)}));function M(){return F.apply(this,arguments)}return M}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-4"}},"line-demo":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(C.a.mark(function B(){var f,o,g,R;return C.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=e("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=i.sent,R=function(){return o.default.createElement(g.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},i.abrupt("return",R);case 11:case"end":return i.stop()}},B)}));function M(){return F.apply(this,arguments)}return M}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo"}},"line-demo-1":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(C.a.mark(function B(){var f,o,g,R;return C.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=e("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=i.sent,R=function(){return o.default.createElement(g.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},i.abrupt("return",R);case 11:case"end":return i.stop()}},B)}));function M(){return F.apply(this,arguments)}return M}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-1"}},"line-demo-2":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(C.a.mark(function B(){var f,o,g,R;return C.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=e("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=i.sent,R=function(){return o.default.createElement(g.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"},{id:"pv",name:"\u8BBF\u95EE\u91CF"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20,pv:120},{ds:"2020-12-31",page:"\u9996\u9875",uv:120,pv:1120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21,pv:121},{ds:"2021-01-01",page:"\u9996\u9875",uv:121,pv:1121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15,pv:115},{ds:"2021-01-02",page:"\u9996\u9875",uv:115,pv:1115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40,pv:140},{ds:"2021-01-03",page:"\u9996\u9875",uv:140,pv:1140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31,pv:131},{ds:"2021-01-04",page:"\u9996\u9875",uv:131,pv:1131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32,pv:132},{ds:"2021-01-05",page:"\u9996\u9875",uv:132,pv:1132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30,pv:130},{ds:"2021-01-06",page:"\u9996\u9875",uv:130,pv:1130}]})},i.abrupt("return",R);case 11:case"end":return i.stop()}},B)}));function M(){return F.apply(this,arguments)}return M}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-2"}},"line-demo-3":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(C.a.mark(function B(){var f,o,g,R;return C.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=e("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=i.sent,R=function(){return o.default.createElement(g.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},i.abrupt("return",R);case 11:case"end":return i.stop()}},B)}));function M(){return F.apply(this,arguments)}return M}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-3"}},"line-demo-4":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(C.a.mark(function B(){var f,o,g,R;return C.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=e("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=i.sent,R=function(){return o.default.createElement(g.Line,{withArea:!0,isStack:!0,isPercent:!0,meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},i.abrupt("return",R);case 11:case"end":return i.stop()}},B)}));function M(){return F.apply(this,arguments)}return M}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-4"}},"pivot-table-demo":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(C.a.mark(function B(){var f,o,g,R;return C.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=e("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=i.sent,R=function(){return o.default.createElement(g.PivotTable,{style:{maxHeight:400,overflow:"auto"},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},i.abrupt("return",R);case 11:case"end":return i.stop()}},B)}));function M(){return F.apply(this,arguments)}return M}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo"}},"pivot-table-demo-1":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(C.a.mark(function B(){var f,o,g,R;return C.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=e("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=i.sent,R=function(){return o.default.createElement(g.PivotTable,{style:{maxHeight:400,overflow:"auto"},cellRender:function(T,A,E){return o.default.createElement("div",null,o.default.createElement("p",null,"\u53C2\u6570\u8868\uFF1A"),o.default.createElement("p",{style:{color:["red","orange","yellow","green","blue"][Object.keys(A).length]}},T),o.default.createElement("p",null,JSON.stringify(A)),o.default.createElement("p",null,JSON.stringify(E)))},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},i.abrupt("return",R);case 11:case"end":return i.stop()}},B)}));function M(){return F.apply(this,arguments)}return M}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-1"}},"pivot-table-demo-2":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(C.a.mark(function B(){var f,o,g,R,P,i,l;return C.a.wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return i=function(E,s){if(!s&&E&&E.__esModule)return E;if(E===null||typeof E!="object"&&typeof E!="function")return{default:E};var N=P(s);if(N&&N.has(E))return N.get(E);var d={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var p in E)if(p!=="default"&&Object.prototype.hasOwnProperty.call(E,p)){var m=r?Object.getOwnPropertyDescriptor(E,p):null;m&&(m.get||m.set)?Object.defineProperty(d,p,m):d[p]=E[p]}return d.default=E,N&&N.set(E,d),d},P=function(E){if(typeof WeakMap!="function")return null;var s=new WeakMap,N=new WeakMap;return(P=function(r){return r?N:s})(E)},f=e("K+nK"),T.t0=f,T.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return T.t1=T.sent,o=(0,T.t0)(T.t1),T.t2=i,T.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return T.t3=T.sent,g=(0,T.t2)(T.t3),T.next=15,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 15:return R=T.sent,l=function(){var E=(0,g.useState)(!1),s=(0,o.default)(E,2),N=s[0],d=s[1];return g.default.createElement(g.default.Fragment,null,g.default.createElement("label",null,"\u53EF\u5C55\u5F00/\u6536\u7F29\uFF1A",g.default.createElement("input",{type:"checkbox",value:N,onChange:function(){return d(!N)}})),g.default.createElement(R.PivotTable,{leftExpandable:N,showSubtotal:!1,meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]}))},T.abrupt("return",l);case 18:case"end":return T.stop()}},B)}));function M(){return F.apply(this,arguments)}return M}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-2"}},"form-render-demo":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(C.a.mark(function B(){var f,o,g,R,P,i,l,y,T,A,E,s,N,d;return C.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return E=function(j,w){if(!w&&j&&j.__esModule)return j;if(j===null||typeof j!="object"&&typeof j!="function")return{default:j};var z=A(w);if(z&&z.has(j))return z.get(j);var _={},ie=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ge in j)if(ge!=="default"&&Object.prototype.hasOwnProperty.call(j,ge)){var pn=ie?Object.getOwnPropertyDescriptor(j,ge):null;pn&&(pn.get||pn.set)?Object.defineProperty(_,ge,pn):_[ge]=j[ge]}return _.default=j,z&&z.set(j,_),_},A=function(j){if(typeof WeakMap!="function")return null;var w=new WeakMap,z=new WeakMap;return(A=function(ie){return ie?z:w})(j)},f=e("K+nK"),p.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return p.t0=f,p.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return p.t1=p.sent,o=(0,p.t0)(p.t1),p.t2=f,p.next=13,e.e(62).then(e.bind(null,"fWQN"));case 13:return p.t3=p.sent,g=(0,p.t2)(p.t3),p.t4=f,p.next=18,e.e(63).then(e.bind(null,"mtLc"));case 18:return p.t5=p.sent,R=(0,p.t4)(p.t5),p.t6=f,p.next=23,e.e(65).then(e.bind(null,"yKVA"));case 23:return p.t7=p.sent,P=(0,p.t6)(p.t7),p.t8=f,p.next=28,e.e(59).then(e.bind(null,"879j"));case 28:return p.t9=p.sent,i=(0,p.t8)(p.t9),p.t10=f,p.next=33,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 33:return p.t11=p.sent,l=(0,p.t10)(p.t11),p.next=37,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 37:return y=p.sent,p.t12=E,p.next=41,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 41:return p.t13=p.sent,T=(0,p.t12)(p.t13),s={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},N=function(m){(0,P.default)(w,m);var j=(0,i.default)(w);function w(){return(0,g.default)(this,w),j.apply(this,arguments)}return(0,R.default)(w,[{key:"render",value:function(){var _=this.props.form;return l.default.createElement("div",null,l.default.createElement(T.default,{form:_,schema:s}),l.default.createElement(o.default,{type:"primary",onClick:_.submit},"\u63D0\u4EA4"))}}]),w}(l.default.Component),d=(0,T.connectForm)(N),p.abrupt("return",d);case 47:case"end":return p.stop()}},B)}));function M(){return F.apply(this,arguments)}return M}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default connectForm(Demo);`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo"}},"form-render-demo-1":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(C.a.mark(function B(){var f,o,g,R,P,i,l,y,T,A;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return l=function(d,r){if(!r&&d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var p=i(r);if(p&&p.has(d))return p.get(d);var m={},j=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var w in d)if(w!=="default"&&Object.prototype.hasOwnProperty.call(d,w)){var z=j?Object.getOwnPropertyDescriptor(d,w):null;z&&(z.get||z.set)?Object.defineProperty(m,w,z):m[w]=d[w]}return m.default=d,p&&p.set(d,m),m},i=function(d){if(typeof WeakMap!="function")return null;var r=new WeakMap,p=new WeakMap;return(i=function(j){return j?p:r})(d)},f=e("K+nK"),s.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return s.t0=f,s.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=f,s.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return s.t3=s.sent,g=(0,s.t2)(s.t3),s.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 17:return R=s.sent,s.t4=l,s.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 21:return s.t5=s.sent,P=(0,s.t4)(s.t5),y={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},T=function(){var d=(0,P.useForm)();return g.default.createElement("div",null,g.default.createElement(P.default,{form:d,schema:y}),g.default.createElement(o.default,{type:"primary",onClick:d.submit},"\u63D0\u4EA4"))},A=T,s.abrupt("return",A);case 27:case"end":return s.stop()}},B)}));function M(){return F.apply(this,arguments)}return M}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo-1"}},"form-render-demo-2":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(C.a.mark(function B(){var f,o,g,R,P,i,l,y,T,A;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return l=function(d,r){if(!r&&d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var p=i(r);if(p&&p.has(d))return p.get(d);var m={},j=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var w in d)if(w!=="default"&&Object.prototype.hasOwnProperty.call(d,w)){var z=j?Object.getOwnPropertyDescriptor(d,w):null;z&&(z.get||z.set)?Object.defineProperty(m,w,z):m[w]=d[w]}return m.default=d,p&&p.set(d,m),m},i=function(d){if(typeof WeakMap!="function")return null;var r=new WeakMap,p=new WeakMap;return(i=function(j){return j?p:r})(d)},f=e("K+nK"),s.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return s.t0=f,s.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=f,s.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return s.t3=s.sent,g=(0,s.t2)(s.t3),s.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 17:return R=s.sent,s.t4=l,s.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 21:return s.t5=s.sent,P=(0,s.t4)(s.t5),y={displayType:"row",labelWidth:60,type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F",type:"range",format:"date"},siteUrl:{title:"\u7F51\u5740",type:"string",placeholder:"\u6B64\u5904\u5FC5\u586B",required:!0,props:{addonBefore:"https://",addonAfter:".com"}}}},T=function(){var d=(0,P.useForm)(),r=function(m,j){j.length>0?alert("errors:"+JSON.stringify(j)):alert("formData:"+JSON.stringify(m,null,2))};return g.default.createElement("div",null,g.default.createElement(P.default,{form:d,schema:y,onFinish:r}),g.default.createElement(o.default,{type:"primary",onClick:d.submit},"\u63D0\u4EA4"))},A=T,s.abrupt("return",A);case 27:case"end":return s.stop()}},B)}));function M(){return F.apply(this,arguments)}return M}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-demo-2"}},"migrate-demo":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(C.a.mark(function B(){var f,o,g,R,P,i,l,y;return C.a.wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return l=function(){var s=(0,g.useForm)(),N=function(r,p){p.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(p))):alert(JSON.stringify(r))};return o.default.createElement("div",null,o.default.createElement(g.default,{form:s,schema:i,onFinish:N}),o.default.createElement("button",{onClick:s.submit},"\u63D0\u4EA4"))},P=function(s,N){if(!N&&s&&s.__esModule)return s;if(s===null||typeof s!="object"&&typeof s!="function")return{default:s};var d=R(N);if(d&&d.has(s))return d.get(s);var r={},p=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var m in s)if(m!=="default"&&Object.prototype.hasOwnProperty.call(s,m)){var j=p?Object.getOwnPropertyDescriptor(s,m):null;j&&(j.get||j.set)?Object.defineProperty(r,m,j):r[m]=s[m]}return r.default=s,d&&d.set(s,r),r},R=function(s){if(typeof WeakMap!="function")return null;var N=new WeakMap,d=new WeakMap;return(R=function(p){return p?d:N})(s)},f=e("K+nK"),A.t0=f,A.next=7,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 7:return A.t1=A.sent,o=(0,A.t0)(A.t1),A.t2=P,A.next=12,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 12:return A.t3=A.sent,g=(0,A.t2)(A.t3),i={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}},y=l,A.abrupt("return",y);case 17:case"end":return A.stop()}},B)}));function M(){return F.apply(this,arguments)}return M}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate-demo"}},"display-demo":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(C.a.mark(function B(){var f,o,g,R,P;return C.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return f=e("K+nK"),l.t0=f,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=f,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,g=(0,l.t2)(l.t3),R=function(T){return{type:"object",displayType:T,properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},objectName:{title:"\u5BF9\u8C61",bind:"obj",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},P=function(){return o.default.createElement("div",null,o.default.createElement("h2",null,"display: row"),o.default.createElement(g.default,{schema:R("row")}),o.default.createElement("h2",null,"display: column"),o.default.createElement(g.default,{schema:R("column")}))},l.abrupt("return",P);case 14:case"end":return l.stop()}},B)}));function M(){return F.apply(this,arguments)}return M}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`},"demo/display.js":{import:"../demo/display",content:K}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo"}},"display-demo-1":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(C.a.mark(function B(){var f,o,g,R,P;return C.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return f=e("K+nK"),l.t0=f,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=f,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,g=(0,l.t2)(l.t3),R={type:"object",displayType:"inline",properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},P=function(){return o.default.createElement(g.default,{schema:R})},l.abrupt("return",P);case 14:case"end":return l.stop()}},B)}));function M(){return F.apply(this,arguments)}return M}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:K}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-1"}},"display-demo-2":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(C.a.mark(function B(){var f,o,g,R,P;return C.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return f=e("K+nK"),l.t0=f,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=f,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,g=(0,l.t2)(l.t3),R={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0},check:{title:"box",type:"boolean",default:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},P=function(){return o.default.createElement(g.default,{readOnly:!0,schema:R})},l.abrupt("return",P);case 14:case"end":return l.stop()}},B)}));function M(){return F.apply(this,arguments)}return M}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form readOnly schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:K}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-2"}},"display-demo-3":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(C.a.mark(function B(){var f,o,g,R,P;return C.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return f=e("K+nK"),l.t0=f,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=f,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,g=(0,l.t2)(l.t3),R={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0,width:"50%"},check:{title:"box",type:"boolean",default:!0,width:"50%",labelWidth:6},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},P=function(){return o.default.createElement(g.default,{labelWidth:"200",schema:R})},l.abrupt("return",P);case 14:case"end":return l.stop()}},B)}));function M(){return F.apply(this,arguments)}return M}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form labelWidth="200" schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:K}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-3"}},"display-demo-4":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(C.a.mark(function B(){var f,o,g,R,P,i;return C.a.wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return f=e("K+nK"),y.t0=f,y.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return y.t1=y.sent,o=(0,y.t0)(y.t1),y.t2=f,y.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return y.t3=y.sent,g=(0,y.t2)(y.t3),R={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},P=function(){return o.default.createElement(g.default,{schema:R})},i=P,y.abrupt("return",i);case 15:case"end":return y.stop()}},B)}));function M(){return F.apply(this,arguments)}return M}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:K}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-4"}},"display-demo-5":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(C.a.mark(function B(){var f,o,g,R,P,i;return C.a.wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return f=e("K+nK"),y.t0=f,y.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return y.t1=y.sent,o=(0,y.t0)(y.t1),y.t2=f,y.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return y.t3=y.sent,g=(0,y.t2)(y.t3),R={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},P=function(){return o.default.createElement(g.default,{schema:R})},i=P,y.abrupt("return",i);case 15:case"end":return y.stop()}},B)}));function M(){return F.apply(this,arguments)}return M}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:K}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-5"}},"display-demo-6":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(C.a.mark(function B(){var f,o,g,R,P,i;return C.a.wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return f=e("K+nK"),y.t0=f,y.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return y.t1=y.sent,o=(0,y.t0)(y.t1),y.t2=f,y.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return y.t3=y.sent,g=(0,y.t2)(y.t3),R={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},P=function(){return o.default.createElement(g.default,{schema:R})},i=P,y.abrupt("return",i);case 15:case"end":return y.stop()}},B)}));function M(){return F.apply(this,arguments)}return M}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:K}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-6"}},"display-demo-7":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(C.a.mark(function B(){var f,o,g,R,P,i;return C.a.wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return f=e("K+nK"),y.t0=f,y.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return y.t1=y.sent,o=(0,y.t0)(y.t1),y.t2=f,y.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return y.t3=y.sent,g=(0,y.t2)(y.t3),R={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},P=function(){return o.default.createElement(g.default,{schema:R})},i=P,y.abrupt("return",i);case 15:case"end":return y.stop()}},B)}));function M(){return F.apply(this,arguments)}return M}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:K}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-7"}},"form-methods-demo":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(C.a.mark(function B(){var f,o,g,R,P,i,l,y,T,A,E,s,N;return C.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return E=function(m,j){if(!j&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var w=A(j);if(w&&w.has(m))return w.get(m);var z={},_=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ie in m)if(ie!=="default"&&Object.prototype.hasOwnProperty.call(m,ie)){var ge=_?Object.getOwnPropertyDescriptor(m,ie):null;ge&&(ge.get||ge.set)?Object.defineProperty(z,ie,ge):z[ie]=m[ie]}return z.default=m,w&&w.set(m,z),z},A=function(m){if(typeof WeakMap!="function")return null;var j=new WeakMap,w=new WeakMap;return(A=function(_){return _?w:j})(m)},f=e("K+nK"),r.next=5,e.e(17).then(e.t.bind(null,"lfLe",7));case 5:return r.t0=f,r.next=8,e.e(18).then(e.t.bind(null,"Cp9S",7));case 8:return r.t1=r.sent,o=(0,r.t0)(r.t1),r.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return r.t2=f,r.next=15,e.e(12).then(e.t.bind(null,"4IMT",7));case 15:return r.t3=r.sent,g=(0,r.t2)(r.t3),r.next=19,e.e(14).then(e.t.bind(null,"tL+A",7));case 19:return r.t4=f,r.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return r.t5=r.sent,R=(0,r.t4)(r.t5),r.t6=f,r.next=27,Promise.resolve().then(e.bind(null,"tJVT"));case 27:return r.t7=r.sent,P=(0,r.t6)(r.t7),r.t8=E,r.next=32,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 32:return r.t9=r.sent,i=(0,r.t8)(r.t9),r.next=36,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 36:return l=r.sent,r.t10=E,r.next=40,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 40:return r.t11=r.sent,y=(0,r.t10)(r.t11),r.next=44,e.e(15).then(e.bind(null,"OH0R"));case 44:return T=r.sent,s=function(){var m=(0,y.useForm)(),j=(0,i.useState)({}),w=(0,P.default)(j,2),z=w[0],_=w[1],ie=function(){(0,T.fakeApi)("xxx/getForm").then(function(We){m.setValues({input1:"hello world",select1:"c"})})};(0,i.useEffect)(function(){(0,T.delay)(1e3).then(function(pn){_({type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}})})},[]);var ge=function(We,Te){Te.length>0?R.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(Te.map(function(En){return En.name}))):(0,T.fakeApi)("xxx/submit",We).then(function(En){return R.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})};return i.default.createElement("div",{style:{width:"400px"}},i.default.createElement(y.default,{form:m,schema:z,onFinish:ge}),i.default.createElement(o.default,null,i.default.createElement(g.default,{onClick:ie},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),i.default.createElement(g.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},N=s,r.abrupt("return",N);case 48:case"end":return r.stop()}},B)}));function M(){return F.apply(this,arguments)}return M}()}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:on}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo"}},"form-methods-demo-1":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(C.a.mark(function B(){var f,o,g,R,P,i,l,y,T,A,E,s,N;return C.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return A=function(m,j){if(!j&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var w=T(j);if(w&&w.has(m))return w.get(m);var z={},_=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ie in m)if(ie!=="default"&&Object.prototype.hasOwnProperty.call(m,ie)){var ge=_?Object.getOwnPropertyDescriptor(m,ie):null;ge&&(ge.get||ge.set)?Object.defineProperty(z,ie,ge):z[ie]=m[ie]}return z.default=m,w&&w.set(m,z),z},T=function(m){if(typeof WeakMap!="function")return null;var j=new WeakMap,w=new WeakMap;return(T=function(_){return _?w:j})(m)},f=e("K+nK"),r.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return r.t0=f,r.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return r.t1=r.sent,o=(0,r.t0)(r.t1),r.t2=f,r.next=13,Promise.resolve().then(e.bind(null,"PpiC"));case 13:return r.t3=r.sent,g=(0,r.t2)(r.t3),r.next=17,e.e(14).then(e.t.bind(null,"tL+A",7));case 17:return r.t4=f,r.next=20,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 20:return r.t5=r.sent,R=(0,r.t4)(r.t5),r.t6=f,r.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return r.t7=r.sent,P=(0,r.t6)(r.t7),r.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 29:return i=r.sent,r.t8=A,r.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 33:return r.t9=r.sent,l=(0,r.t8)(r.t9),r.next=37,e.e(15).then(e.bind(null,"OH0R"));case 37:return y=r.sent,E={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},s=function(){var m=(0,l.useForm)(),j=function(_,ie){ie.length>0?R.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(ie.map(function(ge){return ge.name}))):(0,y.fakeApi)("xxx/submit",_).then(function(ge){return R.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},w=function(_){var ie=_.data,ge=_.errors,pn=_.schema,We=(0,g.default)(_,["data","errors","schema"]);return(0,y.fakeApi)("xxx/validation").then(function(Te){return{name:"select1",error:["\u5916\u90E8\u6821\u9A8C\u9519\u8BEF"]}})};return P.default.createElement("div",{style:{width:"400px"}},P.default.createElement(l.default,{form:m,schema:E,beforeFinish:w,onFinish:j}),P.default.createElement(o.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},N=s,r.abrupt("return",N);case 42:case"end":return r.stop()}},B)}));function M(){return F.apply(this,arguments)}return M}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:on}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-1"}},"form-methods-demo-2":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(C.a.mark(function B(){var f,o,g,R,P,i,l,y,T,A,E,s,N;return C.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return A=function(m,j){if(!j&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var w=T(j);if(w&&w.has(m))return w.get(m);var z={},_=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ie in m)if(ie!=="default"&&Object.prototype.hasOwnProperty.call(m,ie)){var ge=_?Object.getOwnPropertyDescriptor(m,ie):null;ge&&(ge.get||ge.set)?Object.defineProperty(z,ie,ge):z[ie]=m[ie]}return z.default=m,w&&w.set(m,z),z},T=function(m){if(typeof WeakMap!="function")return null;var j=new WeakMap,w=new WeakMap;return(T=function(_){return _?w:j})(m)},f=e("K+nK"),r.next=5,e.e(17).then(e.t.bind(null,"lfLe",7));case 5:return r.t0=f,r.next=8,e.e(18).then(e.t.bind(null,"Cp9S",7));case 8:return r.t1=r.sent,o=(0,r.t0)(r.t1),r.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return r.t2=f,r.next=15,e.e(12).then(e.t.bind(null,"4IMT",7));case 15:return r.t3=r.sent,g=(0,r.t2)(r.t3),r.next=19,e.e(14).then(e.t.bind(null,"tL+A",7));case 19:return r.t4=f,r.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return r.t5=r.sent,R=(0,r.t4)(r.t5),r.t6=f,r.next=27,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 27:return r.t7=r.sent,P=(0,r.t6)(r.t7),r.next=31,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 31:return i=r.sent,r.t8=A,r.next=35,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 35:return r.t9=r.sent,l=(0,r.t8)(r.t9),r.next=39,e.e(15).then(e.bind(null,"OH0R"));case 39:return y=r.sent,E={type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F\u8303\u56F4",type:"range",format:"date"}}},s=function(){var m=(0,l.useForm)(),j=function(_,ie){ie.length>0?R.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(ie.map(function(ge){return ge.name}))):(0,y.fakeApi)("xxx/submit",_).then(function(ge){return R.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},w=function(){(0,y.fakeApi)("xxx/getForm").then(function(_){m.setValues({startDate:"2020-04-04",endDate:"2020-04-24"})})};return P.default.createElement("div",{style:{width:"400px"}},P.default.createElement(l.default,{form:m,schema:E,onFinish:j}),P.default.createElement(o.default,null,P.default.createElement(g.default,{onClick:w},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),P.default.createElement(g.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},N=s,r.abrupt("return",N);case 44:case"end":return r.stop()}},B)}));function M(){return F.apply(this,arguments)}return M}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:on}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-2"}},"form-methods-demo-3":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(C.a.mark(function B(){var f,o,g,R,P,i,l,y,T,A,E,s;return C.a.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return T=function(p,m){if(!m&&p&&p.__esModule)return p;if(p===null||typeof p!="object"&&typeof p!="function")return{default:p};var j=y(m);if(j&&j.has(p))return j.get(p);var w={},z=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var _ in p)if(_!=="default"&&Object.prototype.hasOwnProperty.call(p,_)){var ie=z?Object.getOwnPropertyDescriptor(p,_):null;ie&&(ie.get||ie.set)?Object.defineProperty(w,_,ie):w[_]=p[_]}return w.default=p,j&&j.set(p,w),w},y=function(p){if(typeof WeakMap!="function")return null;var m=new WeakMap,j=new WeakMap;return(y=function(z){return z?j:m})(p)},f=e("K+nK"),d.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return d.t0=f,d.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return d.t1=d.sent,o=(0,d.t0)(d.t1),d.next=12,e.e(14).then(e.t.bind(null,"tL+A",7));case 12:return d.t2=f,d.next=15,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 15:return d.t3=d.sent,g=(0,d.t2)(d.t3),d.t4=T,d.next=20,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 20:return d.t5=d.sent,R=(0,d.t4)(d.t5),d.next=24,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 24:return P=d.sent,d.t6=T,d.next=28,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 28:return d.t7=d.sent,i=(0,d.t6)(d.t7),d.next=32,e.e(15).then(e.bind(null,"OH0R"));case 32:return l=d.sent,A={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select1:{title:"\u5355\u9009",type:"string",widget:"select"}}}}},E=function(){var p=(0,i.useForm)(),m=function(){p.setSchemaByPath("obj1.select1",{enum:["nouth","south","east","west"],enumNames:["\u4E1C","\u5357","\u897F","\u5317"]})},j=function(z,_){_.length>0?g.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(_.map(function(ie){return ie.name}))):g.default.info(JSON.stringify(z))};return R.default.createElement("div",{style:{width:"400px"}},R.default.createElement(i.default,{form:p,schema:A,onMount:m,onFinish:j}),R.default.createElement(o.default,{type:"primary",onClick:p.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},s=E,d.abrupt("return",s);case 37:case"end":return d.stop()}},B)}));function M(){return F.apply(this,arguments)}return M}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:on}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-3"}},"function-demo":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(C.a.mark(function B(){var f,o,g,R,P,i,l,y;return C.a.wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return P=function(s,N){if(!N&&s&&s.__esModule)return s;if(s===null||typeof s!="object"&&typeof s!="function")return{default:s};var d=R(N);if(d&&d.has(s))return d.get(s);var r={},p=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var m in s)if(m!=="default"&&Object.prototype.hasOwnProperty.call(s,m)){var j=p?Object.getOwnPropertyDescriptor(s,m):null;j&&(j.get||j.set)?Object.defineProperty(r,m,j):r[m]=s[m]}return r.default=s,d&&d.set(s,r),r},R=function(s){if(typeof WeakMap!="function")return null;var N=new WeakMap,d=new WeakMap;return(R=function(p){return p?d:N})(s)},f=e("K+nK"),A.t0=f,A.next=6,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 6:return A.t1=A.sent,o=(0,A.t0)(A.t1),A.t2=P,A.next=11,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 11:return A.t3=A.sent,g=(0,A.t2)(A.t3),i={type:"object",properties:{select1:{title:"\u5355\u9009",description:"\u5C1D\u8BD5\u9009\u62E9\u201C\u663E\u793A\u8F93\u5165\u6846\u201D",type:"string",enum:["a","b"],enumNames:["\u9690\u85CF\u8F93\u5165\u6846","\u663E\u793A\u8F93\u5165\u6846"],disabled:"{{rootValue.input1.length > 5}}",default:"a"},input1:{title:"\u8F93\u5165\u6846",description:"\u5C1D\u8BD5\u8F93\u5165\u8D85\u8FC75\u4E2A\u5B57\u7B26",type:"string",hidden:'{{formData.select1 == "a"}}'}}},l=function(){var s=(0,g.useForm)();return o.default.createElement(g.default,{form:s,schema:i})},y=l,A.abrupt("return",y);case 17:case"end":return A.stop()}},B)}));function M(){return F.apply(this,arguments)}return M}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo1;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo"}},"function-demo-1":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(C.a.mark(function B(){var f,o,g,R,P;return C.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return f=e("K+nK"),l.t0=f,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=f,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return l.t3=l.sent,g=(0,l.t2)(l.t3),l.next=13,e.e(19).then(e.bind(null,"8iYR"));case 13:return R=l.sent,P=function(){return o.default.createElement(g.default,{schema:R.expression})},l.abrupt("return",P);case 16:case"end":return l.stop()}},B)}));function M(){return F.apply(this,arguments)}return M}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { expression } from '../json/schema';

export default () => <FR schema={expression} />;`},"demo/FR.jsx":{import:"../demo/FR",content:Ae},"json/schema.js":{import:"../json/schema",content:ve}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo-1"}},"lifeCycle-demo":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(C.a.mark(function B(){var f,o,g,R,P,i,l,y,T;return C.a.wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return P=function(N,d){if(!d&&N&&N.__esModule)return N;if(N===null||typeof N!="object"&&typeof N!="function")return{default:N};var r=R(d);if(r&&r.has(N))return r.get(N);var p={},m=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var j in N)if(j!=="default"&&Object.prototype.hasOwnProperty.call(N,j)){var w=m?Object.getOwnPropertyDescriptor(N,j):null;w&&(w.get||w.set)?Object.defineProperty(p,j,w):p[j]=N[j]}return p.default=N,r&&r.set(N,p),p},R=function(N){if(typeof WeakMap!="function")return null;var d=new WeakMap,r=new WeakMap;return(R=function(m){return m?r:d})(N)},E.t0=P,E.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return E.t1=E.sent,f=(0,E.t0)(E.t1),E.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 9:return o=E.sent,E.t2=P,E.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 13:return E.t3=E.sent,g=(0,E.t2)(E.t3),i=function(N){return new Promise(function(d){return setTimeout(d,N)})},l={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u4E0B\u62C9\u9009\u6846",description:"\u52A0\u8F7D\u4E2D...",type:"string",enum:[],widget:"select"}}},y=function(){var N=(0,g.useForm)(),d=function(){N.setValues({input1:"hello world"}),i(3e3).then(function(p){N.setSchemaByPath("select1",{description:"",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]})})};return f.default.createElement(g.default,{form:N,schema:l,onMount:d})},T=y,E.abrupt("return",T);case 20:case"end":return E.stop()}},B)}));function M(){return F.apply(this,arguments)}return M}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"lifeCycle-demo"}},"watch-demo":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(C.a.mark(function B(){var f,o,g,R,P,i,l,y;return C.a.wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return P=function(s,N){if(!N&&s&&s.__esModule)return s;if(s===null||typeof s!="object"&&typeof s!="function")return{default:s};var d=R(N);if(d&&d.has(s))return d.get(s);var r={},p=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var m in s)if(m!=="default"&&Object.prototype.hasOwnProperty.call(s,m)){var j=p?Object.getOwnPropertyDescriptor(s,m):null;j&&(j.get||j.set)?Object.defineProperty(r,m,j):r[m]=s[m]}return r.default=s,d&&d.set(s,r),r},R=function(s){if(typeof WeakMap!="function")return null;var N=new WeakMap,d=new WeakMap;return(R=function(p){return p?d:N})(s)},A.t0=P,A.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return A.t1=A.sent,f=(0,A.t0)(A.t1),A.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 9:return o=A.sent,A.t2=P,A.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 13:return A.t3=A.sent,g=(0,A.t2)(A.t3),i={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"}}},l=function(){var s=(0,g.useForm)(),N={"#":function(r){console.log("\u8868\u5355\u7684\u65F6\u65F6\u6570\u636E\u4E3A\uFF1A",r)},input1:function(r){s.setValueByPath("input2",r)}};return f.default.createElement(g.default,{form:s,schema:i,watch:N})},y=l,A.abrupt("return",y);case 19:case"end":return A.stop()}},B)}));function M(){return F.apply(this,arguments)}return M}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo"}},"watch-demo-1":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(C.a.mark(function B(){var f,o,g,R,P,i,l,y,T,A;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return l=function(d,r){if(!r&&d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var p=i(r);if(p&&p.has(d))return p.get(d);var m={},j=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var w in d)if(w!=="default"&&Object.prototype.hasOwnProperty.call(d,w)){var z=j?Object.getOwnPropertyDescriptor(d,w):null;z&&(z.get||z.set)?Object.defineProperty(m,w,z):m[w]=d[w]}return m.default=d,p&&p.set(d,m),m},i=function(d){if(typeof WeakMap!="function")return null;var r=new WeakMap,p=new WeakMap;return(i=function(j){return j?p:r})(d)},f=e("K+nK"),s.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return s.t0=f,s.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=l,s.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return s.t3=s.sent,g=(0,s.t2)(s.t3),s.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 17:return R=s.sent,s.t4=l,s.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 21:return s.t5=s.sent,P=(0,s.t4)(s.t5),y={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"radio"}}}}},T=function(){var d=(0,P.useForm)(),r=function(j,w){w.length>0?alert("errorFields:"+JSON.stringify(w)):alert("formData:"+JSON.stringify(j,null,2))},p={input1:function(j){j.length>2?d.setSchemaByPath("obj1.select",function(w){var z=w.enumNames;return{enumNames:z.map(function(_){return _+"a"})}}):d.setSchemaByPath("obj1.select",{enumNames:["\u65E9","\u4E2D","\u665A"]})}};return g.default.createElement("div",null,g.default.createElement(P.default,{form:d,schema:y,onFinish:r,watch:p}),g.default.createElement(o.default,{type:"",style:{marginRight:8},onClick:function(){return d.setSchemaByPath("input2",{title:"\u7F16\u8F91\u6846",format:"textarea"})}},"\u5C06 input \u6539\u4E3A textarea"),g.default.createElement(o.default,{type:"primary",onClick:d.submit},"\u63D0\u4EA4"))},A=T,s.abrupt("return",A);case 27:case"end":return s.stop()}},B)}));function M(){return F.apply(this,arguments)}return M}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo-1"}},"widget-demo":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(C.a.mark(function B(){var f,o,g,R,P,i,l,y,T,A,E,s,N;return C.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return T=function(m,j){if(!j&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var w=y(j);if(w&&w.has(m))return w.get(m);var z={},_=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ie in m)if(ie!=="default"&&Object.prototype.hasOwnProperty.call(m,ie)){var ge=_?Object.getOwnPropertyDescriptor(m,ie):null;ge&&(ge.get||ge.set)?Object.defineProperty(z,ie,ge):z[ie]=m[ie]}return z.default=m,w&&w.set(m,z),z},y=function(m){if(typeof WeakMap!="function")return null;var j=new WeakMap,w=new WeakMap;return(y=function(_){return _?w:j})(m)},f=e("K+nK"),r.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return r.t0=f,r.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return r.t1=r.sent,o=(0,r.t0)(r.t1),r.next=12,Promise.all([e.e(3),e.e(60)]).then(e.t.bind(null,"cUip",7));case 12:return r.t2=f,r.next=15,Promise.all([e.e(0),e.e(12),e.e(58),e.e(61)]).then(e.t.bind(null,"iJl9",7));case 15:return r.t3=r.sent,g=(0,r.t2)(r.t3),r.t4=f,r.next=20,e.e(64).then(e.bind(null,"0Owb"));case 20:return r.t5=r.sent,R=(0,r.t4)(r.t5),r.t6=T,r.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return r.t7=r.sent,P=(0,r.t6)(r.t7),r.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 29:return i=r.sent,r.t8=T,r.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 33:return r.t9=r.sent,l=(0,r.t8)(r.t9),A={type:"object",properties:{string:{title:"\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6",type:"string",widget:"site"},select:{title:"\u5355\u9009",type:"number",enum:[1,2,3],enumNames:["\u9009\u98791","\u9009\u98792","\u9009\u98793"]}}},E=function(m){return P.default.createElement(g.default,(0,R.default)({addonBefore:"http://",addonAfter:".com"},m))},s=function(){var m=(0,l.useForm)(),j=function(){};return P.default.createElement("div",null,P.default.createElement(l.default,{form:m,schema:A,widgets:{site:E},onFinish:function(z){return alert(JSON.stringify(z,null,2))}}),P.default.createElement(o.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4"))},N=s,r.abrupt("return",N);case 40:case"end":return r.stop()}},B)}));function M(){return F.apply(this,arguments)}return M}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},identifier:"widget-demo"}},"schema-demo":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(C.a.mark(function B(){var f,o,g,R,P;return C.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return f=e("K+nK"),l.t0=f,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=f,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return l.t3=l.sent,g=(0,l.t2)(l.t3),l.next=13,e.e(19).then(e.bind(null,"8iYR"));case 13:return R=l.sent,P=function(){return o.default.createElement(g.default,{schema:R.basic})},l.abrupt("return",P);case 16:case"end":return l.stop()}},B)}));function M(){return F.apply(this,arguments)}return M}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { basic } from '../json/schema';

export default () => <FR schema={basic} />;`},"demo/FR.jsx":{import:"../demo/FR",content:Ae},"json/schema.js":{import:"../json/schema",content:ve}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo"}},"docs-playground":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(C.a.mark(function B(){return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"BASV"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},B)}));function M(){return F.apply(this,arguments)}return M}()}),previewerProps:{sources:{_:{jsx:Rn},"main.js":{import:"./main",content:Ie},"json/simplest.json":{import:"./json/simplest.json",content:Bn},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:wn},"monaco/index.js":{import:"./monaco",content:Sn},"theme.css":{import:"./theme.css",content:fn},"index.css":{import:"./index.css",content:Qe}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:"^16.0.0"},"react-dom":{version:"^16.0.0"},"deep-equal":{version:"2.0.5"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.3.2"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-simple-code-editor":{version:"0.11.0"},prismjs:{version:"1.23.0"}},identifier:"docs-playground"}},"table-render-advanced":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(C.a.mark(function B(){return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"7ZP+"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},B)}));function M(){return F.apply(this,arguments)}return M}()}),previewerProps:{sources:{_:{tsx:$n}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.0"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"1.x"}},transform:!0,defaultShowCode:!0,identifier:"table-render-advanced"}},"table-render-demo":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(C.a.mark(function B(){var f,o,g,R,P,i,l,y,T;return C.a.wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return f=e("K+nK"),E.t0=f,E.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return E.t1=E.sent,o=(0,E.t0)(E.t1),E.next=8,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(57)]).then(e.bind(null,"P2DI"));case 8:for(g=E.sent,R=[],P=0;P<6;P++)R.push({id:P.toString(),title:"\u6807\u9898".concat(P+1),created_at:new Date().getTime()});return i={type:"object",properties:{string:{title:"\u6807\u9898",type:"string","ui:width":"30%"},created_at:{title:"\u521B\u5EFA\u65F6\u95F4",type:"string",format:"date","ui:width":"30%"}}},l=[{title:"\u6807\u9898",dataIndex:"title"},{title:"\u521B\u5EFA\u65F6\u95F4",key:"since",dataIndex:"created_at",valueType:"date"},{title:"\u64CD\u4F5C",render:function(N,d){return o.default.createElement("a",{onClick:function(){return alert(N.title)}},"\u7F16\u8F91")}}],y=function(){var N=function(){return{rows:R,total:R.length}};return o.default.createElement(g.TableProvider,null,o.default.createElement(g.Search,{schema:i,api:N}),o.default.createElement(g.Table,{headerTitle:"\u6700\u7B80\u8868\u683C",columns:l,rowKey:"id"}))},T=y,E.abrupt("return",T);case 16:case"end":return E.stop()}},B)}));function M(){return F.apply(this,arguments)}return M}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Wrapper;`}},dependencies:{react:{version:">=16.8.0"},"table-render":{version:"1.1.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.x"}},transform:!0,defaultShowCode:!0,identifier:"table-render-demo"}},"generator-demo":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(C.a.mark(function B(){var f,o,g,R,P,i;return C.a.wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return f=e("K+nK"),y.t0=f,y.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return y.t1=y.sent,o=(0,y.t0)(y.t1),y.t2=f,y.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(56)]).then(e.bind(null,"nYSz"));case 9:return y.t3=y.sent,g=(0,y.t2)(y.t3),R={type:"object",properties:{inputName:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string"}}},P=function(){return o.default.createElement("div",{style:{height:"80vh"}},o.default.createElement(g.default,{defaultValue:R}))},i=P,y.abrupt("return",i);case 15:case"end":return y.stop()}},B)}));function M(){return F.apply(this,arguments)}return M}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.0.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"generator-demo"}},"generator-modal":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(C.a.mark(function B(){return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"PPgD"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},B)}));function M(){return F.apply(this,arguments)}return M}()}),previewerProps:{sources:{_:{jsx:Wn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.0.2"},"react-dom":{version:">=16.9.0"}},identifier:"generator-modal"}},"generator-transformer":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(C.a.mark(function B(){return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"jktF"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},B)}));function M(){return F.apply(this,arguments)}return M}()}),previewerProps:{sources:{_:{jsx:Pn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.0.2"},"react-dom":{version:">=16.9.0"}},identifier:"generator-transformer"}},"generator-settings":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(C.a.mark(function B(){return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"M63W"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},B)}));function M(){return F.apply(this,arguments)}return M}()}),previewerProps:{sources:{_:{jsx:we}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.0.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-settings"}},"generator-playground":{component:Object(V.dynamic)({loader:function(){var F=Object(Y.a)(C.a.mark(function B(){return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"TYW4"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},B)}));function M(){return F.apply(this,arguments)}return M}()}),previewerProps:{sources:{_:{jsx:qn},"index.less":{import:"./index.less",content:Vn}},dependencies:{react:{version:">=16.8.0"},umi:{version:"3.4.20"},"fr-generator":{version:"2.0.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-playground"}}}},TIsu:function(Fn,gn,e){},Zs1V:function(Fn){Fn.exports=JSON.parse("{}")},p8sG:function(Fn,gn,e){"use strict";Fn.exports=e("80pN")}}]);
