(window.webpackJsonp=window.webpackJsonp||[]).push([[48,9],{"0zqC":function(Tn,yn,e){"use strict";e.r(yn);var x=e("tJVT"),n=e("q1tI"),E=e.n(n),$=e("wx14"),oe=e("rePB"),V=e("ODXe"),ze=e("U8pU"),Ne=e("Ff2n"),ve=e("VTBJ"),Un=e("TSYQ"),je=e.n(Un),ln=e("Zm9Q"),Bn=e("5Z9U"),Rn=e("6cGi"),pn=e("KQm4"),Qe=e("wgJM"),Ln=e("t23M");function wn(t){var r=Object(n.useRef)(),u=Object(n.useRef)(!1);function h(){for(var b=arguments.length,v=new Array(b),O=0;O<b;O++)v[O]=arguments[O];u.current||(Qe.a.cancel(r.current),r.current=Object(Qe.a)(function(){t.apply(void 0,v)}))}return Object(n.useEffect)(function(){return function(){u.current=!0,Qe.a.cancel(r.current)}},[]),h}function Sn(t){var r=Object(n.useRef)([]),u=Object(n.useState)({}),h=Object(V.a)(u,2),b=h[1],v=Object(n.useRef)(typeof t=="function"?t():t),O=wn(function(){var W=v.current;r.current.forEach(function(K){W=K(W)}),r.current=[],v.current=W,b({})});function R(W){r.current.push(W),O()}return[v.current,R]}var we=e("4IlW");function qn(t,r){var u,h=t.prefixCls,b=t.id,v=t.active,O=t.rtl,R=t.tab,W=R.key,K=R.tab,L=R.disabled,G=R.closeIcon,J=t.tabBarGutter,se=t.tabPosition,X=t.closable,Y=t.renderWrapper,ue=t.removeAriaLabel,U=t.editable,q=t.onClick,ae=t.onRemove,Q=t.onFocus,le="".concat(h,"-tab");n.useEffect(function(){return ae},[]);var k={};se==="top"||se==="bottom"?k[O?"marginLeft":"marginRight"]=J:k.marginBottom=J;var be=U&&X!==!1&&!L;function ne(re){L||q(re)}function ce(re){re.preventDefault(),re.stopPropagation(),U.onEdit("remove",{key:W,event:re})}var me=n.createElement("div",{key:W,ref:r,className:je()(le,(u={},Object(oe.a)(u,"".concat(le,"-with-remove"),be),Object(oe.a)(u,"".concat(le,"-active"),v),Object(oe.a)(u,"".concat(le,"-disabled"),L),u)),style:k,onClick:ne},n.createElement("div",{role:"tab","aria-selected":v,id:b&&"".concat(b,"-tab-").concat(W),className:"".concat(le,"-btn"),"aria-controls":b&&"".concat(b,"-panel-").concat(W),"aria-disabled":L,tabIndex:L?null:0,onClick:function(H){H.stopPropagation(),ne(H)},onKeyDown:function(H){[we.a.SPACE,we.a.ENTER].includes(H.which)&&(H.preventDefault(),ne(H))},onFocus:Q},K),be&&n.createElement("button",{type:"button","aria-label":ue||"remove",tabIndex:0,className:"".concat(le,"-remove"),onClick:function(H){H.stopPropagation(),ce(H)}},G||U.removeIcon||"\xD7"));return Y&&(me=Y(me)),me}var $n=n.forwardRef(qn),rt={width:0,height:0,left:0,top:0};function T(t,r,u){return Object(n.useMemo)(function(){for(var h,b=new Map,v=r.get((h=t[0])===null||h===void 0?void 0:h.key)||rt,O=v.left+v.width,R=0;R<t.length;R+=1){var W=t[R].key,K=r.get(W);if(!K){var L;K=r.get((L=t[R-1])===null||L===void 0?void 0:L.key)||rt}var G=b.get(W)||Object(ve.a)({},K);G.right=O-G.left-G.width,b.set(W,G)}return b},[t.map(function(h){return h.key}).join("_"),r,u])}var F={width:0,height:0,left:0,top:0,right:0};function B(t,r,u,h,b){var v=b.tabs,O=b.tabPosition,R=b.rtl,W,K,L;["top","bottom"].includes(O)?(W="width",K=R?"right":"left",L=Math.abs(r.left)):(W="height",K="top",L=-r.top);var G=r[W],J=u[W],se=h[W],X=G;return J+se>G&&(X=G-se),Object(n.useMemo)(function(){if(!v.length)return[0,0];for(var Y=v.length,ue=Y,U=0;U<Y;U+=1){var q=t.get(v[U].key)||F;if(q[K]+q[W]>L+X){ue=U-1;break}}for(var ae=0,Q=Y-1;Q>=0;Q-=1){var le=t.get(v[Q].key)||F;if(le[K]<L){ae=Q+1;break}}return[ae,ue]},[t,L,X,O,v.map(function(Y){return Y.key}).join("_"),R])}var f=e("Gytx"),o=e.n(f),g=e("Kwbf");function C(t,r){var u=t.prefixCls,h=t.invalidate,b=t.item,v=t.renderItem,O=t.responsive,R=t.registerSize,W=t.itemKey,K=t.className,L=t.style,G=t.children,J=t.display,se=t.order,X=t.component,Y=X===void 0?"div":X,ue=Object(Ne.a)(t,["prefixCls","invalidate","item","renderItem","responsive","registerSize","itemKey","className","style","children","display","order","component"]),U=O&&!J;function q(be){R(W,be)}n.useEffect(function(){return function(){q(null)}},[]);var ae=v&&b!==void 0?v(b):G,Q;h||(Q={opacity:U?0:1,height:U?0:void 0,overflowY:U?"hidden":void 0,order:O?se:void 0,pointerEvents:U?"none":void 0});var le={};U&&(le["aria-hidden"]=!0);var k=n.createElement(Y,Object($.a)({className:je()(!h&&u,K),style:Object(ve.a)(Object(ve.a)({},Q),L)},le,ue,{ref:r}),ae);return O&&(k=n.createElement(Ln.default,{onResize:function(ne){var ce=ne.offsetWidth;q(ce)}},k)),k}var S=n.forwardRef(C);S.displayName="Item";var i=S;function l(){var t=Object(n.useState)({}),r=Object(V.a)(t,2),u=r[1],h=Object(n.useRef)([]),b=Object(n.useRef)(!1),v=0,O=0;Object(n.useEffect)(function(){return function(){b.current=!0}},[]);function R(W){var K=v;v+=1,h.current.length<K+1&&(h.current[K]=W);var L=h.current[K];function G(J){h.current[K]=typeof J=="function"?J(h.current[K]):J,Qe.a.cancel(O),O=Object(Qe.a)(function(){b.current||u({})})}return[L,G]}return R}var y=function(r,u){var h=n.useContext(P);if(!h){var b=r.component,v=b===void 0?"div":b,O=Object(Ne.a)(r,["component"]);return n.createElement(v,Object($.a)({},O,{ref:u}))}var R=h.className,W=Object(Ne.a)(h,["className"]),K=r.className,L=Object(Ne.a)(r,["className"]);return n.createElement(P.Provider,{value:null},n.createElement(i,Object($.a)({ref:u,className:je()(R,K)},W,L)))},M=n.forwardRef(y);M.displayName="RawItem";var N=M,P=n.createContext(null),s="responsive",A="invalidate";function d(t){return"+ ".concat(t.length," ...")}function a(t,r){var u=t.prefixCls,h=u===void 0?"rc-overflow":u,b=t.data,v=b===void 0?[]:b,O=t.renderItem,R=t.renderRawItem,W=t.itemKey,K=t.itemWidth,L=K===void 0?10:K,G=t.ssr,J=t.style,se=t.className,X=t.maxCount,Y=t.renderRest,ue=t.renderRawRest,U=t.suffix,q=t.component,ae=q===void 0?"div":q,Q=t.itemComponent,le=t.onVisibleChange,k=Object(Ne.a)(t,["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"]),be=l(),ne=G==="full",ce=be(null),me=Object(V.a)(ce,2),re=me[0],H=me[1],de=re||0,ye=be(new Map),he=Object(V.a)(ye,2),Re=he[0],Ke=he[1],Ee=be(0),Ce=Object(V.a)(Ee,2),Te=Ce[0],Fe=Ce[1],Ie=be(0),De=Object(V.a)(Ie,2),$e=De[0],_e=De[1],Ve=be(0),Je=Object(V.a)(Ve,2),Ye=Je[0],Le=Je[1],jn=Object(n.useState)(null),an=Object(V.a)(jn,2),Ze=an[0],un=an[1],bn=Object(n.useState)(null),En=Object(V.a)(bn,2),Ae=En[0],Xe=En[1],en=n.useMemo(function(){return Ae===null&&ne?Number.MAX_SAFE_INTEGER:Ae||0},[Ae,re]),ke=Object(n.useState)(!1),Wn=Object(V.a)(ke,2),Jn=Wn[0],Kn=Wn[1],rn="".concat(h,"-item"),Dn=Math.max(Te,$e),dn=v.length&&X===s,In=X===A,nn=dn||typeof X=="number"&&v.length>X,sn=Object(n.useMemo)(function(){var pe=v;return dn?re===null&&ne?pe=v:pe=v.slice(0,Math.min(v.length,de/L)):typeof X=="number"&&(pe=v.slice(0,X)),pe},[v,L,re,X,dn]),An=Object(n.useMemo)(function(){return dn?v.slice(en+1):v.slice(sn.length)},[v,sn,dn,en]),mn=Object(n.useCallback)(function(pe,Se){var Be;return typeof W=="function"?W(pe):(Be=W&&(pe==null?void 0:pe[W]))!==null&&Be!==void 0?Be:Se},[W]),qe=Object(n.useCallback)(O||function(pe){return pe},[O]);function xe(pe,Se){Xe(pe),Se||(Kn(pe<v.length-1),le==null||le(pe))}function Gn(pe,Se){H(Se.clientWidth)}function Hn(pe,Se){Ke(function(Be){var tn=new Map(Be);return Se===null?tn.delete(pe):tn.set(pe,Se),tn})}function nt(pe,Se){_e(Se),Fe($e)}function On(pe,Se){Le(Se)}function gn(pe){return Re.get(mn(sn[pe],pe))}n.useLayoutEffect(function(){if(de&&Dn&&sn){var pe=Ye,Se=sn.length,Be=Se-1;if(!Se){xe(0),un(null);return}for(var tn=0;tn<Se;tn+=1){var Qn=gn(tn);if(Qn===void 0){xe(tn-1,!0);break}if(pe+=Qn,tn===Be-1&&pe+gn(Be)<=de){xe(Be),un(null);break}else if(pe+Dn>de){xe(tn-1),un(pe-Qn-Ye+$e);break}else if(tn===Be){xe(Be),un(pe-Ye);break}}U&&gn(0)+Ye>de&&un(null)}},[de,Re,$e,Ye,mn,sn]);var Xn=Jn&&!!An.length,Cn={};Ze!==null&&dn&&(Cn={position:"absolute",left:Ze,top:0});var fn={prefixCls:rn,responsive:dn,component:Q,invalidate:In},xn=R?function(pe,Se){var Be=mn(pe,Se);return n.createElement(P.Provider,{key:Be,value:Object(ve.a)(Object(ve.a)({},fn),{},{order:Se,item:pe,itemKey:Be,registerSize:Hn,display:Se<=en})},R(pe,Se))}:function(pe,Se){var Be=mn(pe,Se);return n.createElement(i,Object($.a)({},fn,{order:Se,key:Be,item:pe,renderItem:qe,itemKey:Be,registerSize:Hn,display:Se<=en}))},Nn,Yn={order:Xn?en:Number.MAX_SAFE_INTEGER,className:"".concat(rn,"-rest"),registerSize:nt,display:Xn};if(ue)ue&&(Nn=n.createElement(P.Provider,{value:Object(ve.a)(Object(ve.a)({},fn),Yn)},ue(An)));else{var cn=Y||d;Nn=n.createElement(i,Object($.a)({},fn,Yn),typeof cn=="function"?cn(An):cn)}var Fn=n.createElement(ae,Object($.a)({className:je()(!In&&h,se),style:J,ref:r},k),sn.map(xn),nn?Nn:null,U&&n.createElement(i,Object($.a)({},fn,{order:en,className:"".concat(rn,"-suffix"),registerSize:On,display:!0,style:Cn}),U));return dn&&(Fn=n.createElement(Ln.default,{onResize:Gn},Fn)),Fn}var p=n.forwardRef(a);p.displayName="Overflow",p.Item=N,p.RESPONSIVE=s,p.INVALIDATE=A;var m=p,j=m,w=e("1OyB"),z=e("vuIU"),_=e("Ji7U"),ie=e("LK+K"),ge=e("bT9E"),vn=e("YrtM"),We=n.createContext(null);function Me(t,r){var u=Object(ve.a)({},t);return Object.keys(r).forEach(function(h){var b=r[h];b!==void 0&&(u[h]=b)}),u}function Pn(t){var r=t.children,u=t.locked,h=Object(Ne.a)(t,["children","locked"]),b=n.useContext(We),v=Object(vn.a)(function(){return Me(b,h)},[b,h],function(O,R){return!u&&(O[0]!==R[0]||!o()(O[1],R[1]))});return n.createElement(We.Provider,{value:v},r)}function it(t,r,u,h){var b=n.useContext(We),v=b.activeKey,O=b.onActive,R=b.onInactive,W={active:v===t};return r||(W.onMouseEnter=function(K){u==null||u({key:t,domEvent:K}),O(t)},W.onMouseLeave=function(K){h==null||h({key:t,domEvent:K}),R(t)}),W}function _n(t){var r=t.item,u=Object(Ne.a)(t,["item"]);return Object.defineProperty(u,"item",{get:function(){return Object(g.a)(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),r}}),u}function c(t){var r=t.icon,u=t.props,h=t.children,b;return typeof r=="function"?b=n.createElement(r,Object(ve.a)({},u)):b=r,b||h||null}function D(t){var r=n.useContext(We),u=r.mode,h=r.rtl,b=r.inlineIndent;if(u!=="inline")return null;var v=t;return h?{paddingRight:v*b}:{paddingLeft:v*b}}var I=[],fe=n.createContext(null);function ee(){return n.useContext(fe)}var Pe=n.createContext(I);function Ue(t){var r=n.useContext(Pe);return n.useMemo(function(){return t!==void 0?[].concat(Object(pn.a)(r),[t]):r},[r,t])}var He=n.createContext(null),Ut=n.createContext(null);function Jt(t,r){return t===void 0?null:"".concat(t,"-").concat(r)}function Gt(t){var r=n.useContext(Ut);return Jt(r,t)}var ba=function(t){Object(_.a)(u,t);var r=Object(ie.a)(u);function u(){return Object(w.a)(this,u),r.apply(this,arguments)}return Object(z.a)(u,[{key:"render",value:function(){var b=this.props,v=b.title,O=b.attribute,R=b.elementRef,W=Object(Ne.a)(b,["title","attribute","elementRef"]),K=Object(ge.a)(W,["eventKey"]);return Object(g.a)(!O,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),n.createElement(j.Item,Object($.a)({},O,{title:typeof v=="string"?v:void 0},K,{ref:R}))}}]),u}(n.Component),Ea=function(r){var u,h=r.style,b=r.className,v=r.eventKey,O=r.disabled,R=r.itemIcon,W=r.children,K=r.role,L=r.onMouseEnter,G=r.onMouseLeave,J=r.onClick,se=r.onKeyDown,X=r.onFocus,Y=Object(Ne.a)(r,["style","className","eventKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"]),ue=Gt(v),U=n.useContext(We),q=U.prefixCls,ae=U.onItemClick,Q=U.disabled,le=U.overflowDisabled,k=U.itemIcon,be=U.selectedKeys,ne=U.onActive,ce="".concat(q,"-item"),me=n.useRef(),re=n.useRef(),H=Q||O,de=Ue(v),ye=function(Ve){return{key:v,keyPath:de,item:me.current,domEvent:Ve}},he=R||k,Re=it(v,H,L,G),Ke=Re.active,Ee=Object(Ne.a)(Re,["active"]),Ce=be.includes(v),Te=D(de.length),Fe=function(Ve){if(!H){var Je=ye(Ve);J==null||J(_n(Je)),ae(Je)}},Ie=function(Ve){if(se==null||se(Ve),Ve.which===we.a.ENTER){var Je=ye(Ve);J==null||J(_n(Je)),ae(Je)}},De=function(Ve){ne(v),X==null||X(Ve)},$e={};return r.role==="option"&&($e["aria-selected"]=Ce),n.createElement(ba,Object($.a)({ref:me,elementRef:re,role:K===null?"none":K||"menuitem",tabIndex:O?null:-1,"data-menu-id":le&&ue?null:ue},Y,Ee,$e,{component:"li","aria-disabled":O,style:Object(ve.a)(Object(ve.a)({},Te),h),className:je()(ce,(u={},Object(oe.a)(u,"".concat(ce,"-active"),Ke),Object(oe.a)(u,"".concat(ce,"-selected"),Ce),Object(oe.a)(u,"".concat(ce,"-disabled"),H),u),b),onClick:Fe,onKeyDown:Ie,onFocus:De}),W,n.createElement(c,{props:Object(ve.a)(Object(ve.a)({},r),{},{isSelected:Ce}),icon:he}))};function Oa(t){var r=t.eventKey,u=ee(),h=Ue(r);return n.useEffect(function(){if(u)return u.registerPath(r,h),function(){u.unregisterPath(r,h)}},[h]),u?null:n.createElement(Ea,t)}var jt=Oa;function Dt(t,r){return Object(ln.a)(t).map(function(u,h){if(n.isValidElement(u)){var b=u.key;return b==null&&(b="tmp_key-".concat([].concat(Object(pn.a)(r),[h]).join("-"))),n.cloneElement(u,{key:b,eventKey:b})}return u})}function et(t){var r=n.useRef(t);r.current=t;var u=n.useCallback(function(){for(var h,b=arguments.length,v=new Array(b),O=0;O<b;O++)v[O]=arguments[O];return(h=r.current)===null||h===void 0?void 0:h.call.apply(h,[r].concat(v))},[]);return t?u:void 0}var Ca=function(r,u){var h=r.className,b=r.children,v=Object(Ne.a)(r,["className","children"]),O=n.useContext(We),R=O.prefixCls,W=O.mode;return n.createElement("ul",Object($.a)({className:je()(R,"".concat(R,"-sub"),"".concat(R,"-").concat(W==="inline"?"inline":"vertical"),h)},v,{"data-menu-list":!0,ref:u}),b)},Ht=n.forwardRef(Ca);Ht.displayName="SubMenuList";var Xt=Ht,Ra=e("uciX"),Vn={adjustX:1,adjustY:1},xt={topLeft:{points:["bl","tl"],overflow:Vn,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Vn,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:Vn,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:Vn,offset:[4,0]}},Sa={topLeft:{points:["bl","tl"],overflow:Vn,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Vn,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:Vn,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:Vn,offset:[4,0]}},fr=xt;function Yt(t,r,u){if(r)return r;if(u)return u[t]||u.other}var Pa={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function ja(t){var r=t.prefixCls,u=t.visible,h=t.children,b=t.popup,v=t.popupClassName,O=t.popupOffset,R=t.disabled,W=t.mode,K=t.onVisibleChange,L=n.useContext(We),G=L.getPopupContainer,J=L.rtl,se=L.subMenuOpenDelay,X=L.subMenuCloseDelay,Y=L.builtinPlacements,ue=L.triggerSubMenuAction,U=L.forceSubMenuRender,q=L.motion,ae=L.defaultMotions,Q=n.useState(!1),le=Object(V.a)(Q,2),k=le[0],be=le[1],ne=J?Object(ve.a)(Object(ve.a)({},Sa),Y):Object(ve.a)(Object(ve.a)({},xt),Y),ce=Pa[W],me=Yt(W,q,ae),re=Object(ve.a)(Object(ve.a)({},me),{},{leavedClassName:"".concat(r,"-hidden"),removeOnLeave:!1,motionAppear:!0}),H=n.useRef();return n.useEffect(function(){return H.current=Object(Qe.a)(function(){be(u)}),function(){Qe.a.cancel(H.current)}},[u]),n.createElement(Ra.a,{prefixCls:r,popupClassName:je()("".concat(r,"-popup"),Object(oe.a)({},"".concat(r,"-rtl"),J),v),stretch:W==="horizontal"?"minWidth":null,getPopupContainer:G,builtinPlacements:ne,popupPlacement:ce,popupVisible:k,popup:b,popupAlign:O&&{offset:O},action:R?[]:[ue],mouseEnterDelay:se,mouseLeaveDelay:X,onPopupVisibleChange:K,forceRender:U,popupMotion:re},h)}var Da=e("8XRh");function Ia(t){var r=t.id,u=t.open,h=t.keyPath,b=t.children,v="inline",O=n.useContext(We),R=O.prefixCls,W=O.forceSubMenuRender,K=O.motion,L=O.defaultMotions,G=O.mode,J=n.useRef(!1);J.current=G===v;var se=n.useState(!J.current),X=Object(V.a)(se,2),Y=X[0],ue=X[1],U=J.current?u:!1;n.useEffect(function(){J.current&&ue(!1)},[G]);var q=Object(ve.a)({},Yt(v,K,L));h.length>1&&(q.motionAppear=!1);var ae=q.onVisibleChanged;return q.onVisibleChanged=function(Q){return!J.current&&!Q&&ue(!0),ae==null?void 0:ae(Q)},Y?null:n.createElement(Pn,{mode:v,locked:!J.current},n.createElement(Da.default,Object($.a)({visible:U},q,{forceRender:W,removeOnLeave:!1,leavedClassName:"".concat(R,"-hidden")}),function(Q){var le=Q.className,k=Q.style;return n.createElement(Xt,{id:r,className:le,style:k},b)}))}var Aa=function(r){var u,h=r.style,b=r.className,v=r.title,O=r.eventKey,R=r.disabled,W=r.internalPopupClose,K=r.children,L=r.itemIcon,G=r.expandIcon,J=r.popupClassName,se=r.popupOffset,X=r.onClick,Y=r.onMouseEnter,ue=r.onMouseLeave,U=r.onTitleClick,q=r.onTitleMouseEnter,ae=r.onTitleMouseLeave,Q=Object(Ne.a)(r,["style","className","title","eventKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"]),le=Gt(O),k=n.useContext(We),be=k.prefixCls,ne=k.mode,ce=k.openKeys,me=k.disabled,re=k.overflowDisabled,H=k.activeKey,de=k.selectedKeys,ye=k.itemIcon,he=k.expandIcon,Re=k.onItemClick,Ke=k.onOpenChange,Ee=k.onActive,Ce=n.useContext(He),Te=Ce.isSubPathKey,Fe=Ue(),Ie="".concat(be,"-submenu"),De=me||R,$e=n.useRef(),_e=n.useRef(),Ve=L||ye,Je=G||he,Ye=ce.includes(O),Le=!re&&Ye,jn=Te(de,O),an=it(O,De,q,ae),Ze=an.active,un=Object(Ne.a)(an,["active"]),bn=n.useState(!1),En=Object(V.a)(bn,2),Ae=En[0],Xe=En[1],en=function(xe){De||Xe(xe)},ke=function(xe){en(!0),Y==null||Y({key:O,domEvent:xe})},Wn=function(xe){en(!1),ue==null||ue({key:O,domEvent:xe})},Jn=n.useMemo(function(){return Ze||(ne!=="inline"?Ae||Te([H],O):!1)},[ne,Ze,H,Ae,O,Te]),Kn=D(Fe.length),rn=function(xe){De||(U==null||U({key:O,domEvent:xe}),ne==="inline"&&Ke(O,!Ye))},Dn=et(function(qe){X==null||X(_n(qe)),Re(qe)}),dn=function(xe){ne!=="inline"&&Ke(O,xe)},In=function(){Ee(O)},nn=le&&"".concat(le,"-popup"),sn=n.createElement("div",Object($.a)({role:"menuitem",style:Kn,className:"".concat(Ie,"-title"),tabIndex:De?null:-1,ref:$e,title:typeof v=="string"?v:null,"data-menu-id":re&&le?null:le,"aria-expanded":Le,"aria-haspopup":!0,"aria-controls":nn,"aria-disabled":De,onClick:rn,onFocus:In},un),v,n.createElement(c,{icon:ne!=="horizontal"?Je:null,props:Object(ve.a)(Object(ve.a)({},r),{},{isOpen:Le,isSubMenu:!0})},n.createElement("i",{className:"".concat(Ie,"-arrow")}))),An=n.useRef(ne);if(ne!=="inline"&&(An.current=Fe.length>1?"vertical":ne),!re){var mn=An.current;sn=n.createElement(ja,{mode:mn,prefixCls:Ie,visible:!W&&Le&&ne!=="inline",popupClassName:J,popupOffset:se,popup:n.createElement(Pn,{mode:mn},n.createElement(Xt,{id:nn,ref:_e},K)),disabled:De,onVisibleChange:dn},sn)}return n.createElement(Pn,{onItemClick:Dn,mode:ne==="horizontal"?"vertical":ne,itemIcon:Ve,expandIcon:Je},n.createElement(j.Item,Object($.a)({role:"none"},Q,{component:"li",style:h,className:je()(Ie,"".concat(Ie,"-").concat(ne),b,(u={},Object(oe.a)(u,"".concat(Ie,"-open"),Le),Object(oe.a)(u,"".concat(Ie,"-active"),Jn),Object(oe.a)(u,"".concat(Ie,"-selected"),jn),Object(oe.a)(u,"".concat(Ie,"-disabled"),De),u)),onMouseEnter:ke,onMouseLeave:Wn}),sn,!re&&n.createElement(Ia,{id:nn,open:Le,keyPath:Fe},K)))};function Qt(t){var r=t.eventKey,u=t.children,h=Ue(r),b=Dt(u,h),v=ee();n.useEffect(function(){if(v)return v.registerPath(r,h),function(){v.unregisterPath(r,h)}},[h]);var O;return v?O=b:O=n.createElement(Aa,t,b),n.createElement(Pe.Provider,{value:h},O)}var Na=e("x/xZ");function Zt(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Object(Na.a)(t)){var u=t.nodeName.toLowerCase(),h=["input","select","textarea","button"].includes(u)||t.isContentEditable||u==="a"&&!!t.getAttribute("href"),b=t.getAttribute("tabindex"),v=Number(b),O=null;return b&&!Number.isNaN(v)?O=v:h&&O===null&&(O=0),h&&t.disabled&&(O=null),O!==null&&(O>=0||r&&O<0)}return!1}function kt(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,u=Object(pn.a)(t.querySelectorAll("*")).filter(function(h){return Zt(h,r)});return Zt(t,r)&&u.unshift(t),u}var mt=null;function pr(){mt=document.activeElement}function vr(){mt=null}function hr(){if(mt)try{mt.focus()}catch(t){}}function gr(t,r){if(r.keyCode===9){var u=kt(t),h=u[r.shiftKey?0:u.length-1],b=h===document.activeElement||t===document.activeElement;if(b){var v=u[r.shiftKey?u.length-1:0];v.focus(),r.preventDefault()}}}var It=we.a.LEFT,At=we.a.RIGHT,Nt=we.a.UP,ft=we.a.DOWN,pt=we.a.ENTER,qt=we.a.ESC,_t=[Nt,ft,It,At];function Fa(t,r,u,h){var b,v,O,R,W="prev",K="next",L="children",G="parent";if(t==="inline"&&h===pt)return{inlineTrigger:!0};var J=(b={},Object(oe.a)(b,Nt,W),Object(oe.a)(b,ft,K),b),se=(v={},Object(oe.a)(v,It,u?K:W),Object(oe.a)(v,At,u?W:K),Object(oe.a)(v,ft,L),Object(oe.a)(v,pt,L),v),X=(O={},Object(oe.a)(O,Nt,W),Object(oe.a)(O,ft,K),Object(oe.a)(O,pt,L),Object(oe.a)(O,qt,G),Object(oe.a)(O,It,u?L:G),Object(oe.a)(O,At,u?G:L),O),Y={inline:J,horizontal:se,vertical:X,inlineSub:J,horizontalSub:X,verticalSub:X},ue=(R=Y["".concat(t).concat(r?"":"Sub")])===null||R===void 0?void 0:R[h];switch(ue){case W:return{offset:-1,sibling:!0};case K:return{offset:1,sibling:!0};case G:return{offset:-1,sibling:!1};case L:return{offset:1,sibling:!1};default:return null}}function Ma(t){for(var r=t;r;){if(r.getAttribute("data-menu-list"))return r;r=r.parentElement}return null}function Ta(t,r){for(var u=t||document.activeElement;u;){if(r.has(u))return u;u=u.parentElement}return null}function Ba(t,r){var u=kt(t,!0);return u.filter(function(h){return r.has(h)})}function ea(t,r,u){var h=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!t)return null;var b=Ba(t,r),v=b.length,O=b.findIndex(function(R){return u===R});return h<0?O===-1?O=v-1:O-=1:h>0&&(O+=1),O=(O+v)%v,b[O]}function wa(t,r,u,h,b,v,O,R,W,K){var L=n.useRef(),G=n.useRef();G.current=r;var J=function(){Qe.a.cancel(L.current)};return n.useEffect(function(){return function(){J()}},[]),function(se){var X=se.which;if([].concat(_t,[pt,qt]).includes(X)){var Y,ue,U,q=function(){Y=new Set,ue=new Map,U=new Map;var ye=v();return ye.forEach(function(he){var Re=document.querySelector("[data-menu-id='".concat(Jt(h,he),"']"));Re&&(Y.add(Re),U.set(Re,he),ue.set(he,Re))}),Y};q();var ae=ue.get(r),Q=Ta(ae,Y),le=U.get(Q),k=Fa(t,O(le,!0).length===1,u,X);if(!k)return;_t.includes(X)&&se.preventDefault();var be=function(ye){if(ye){var he=ye,Re=ye.querySelector("a");(Re==null?void 0:Re.getAttribute("href"))&&(he=Re);var Ke=U.get(ye);R(Ke),J(),L.current=Object(Qe.a)(function(){G.current===Ke&&he.focus()})}};if(k.sibling||!Q){var ne;!Q||t==="inline"?ne=b.current:ne=Ma(Q);var ce=ea(ne,Y,Q,k.offset);be(ce)}else if(k.inlineTrigger)W(le);else if(k.offset>0)W(le,!0),J(),L.current=Object(Qe.a)(function(){q();var de=Q.getAttribute("aria-controls"),ye=document.getElementById(de),he=ea(ye,Y);be(he)},5);else if(k.offset<0){var me=O(le,!0),re=me[me.length-2],H=ue.get(re);W(re,!1),be(H)}}K==null||K(se)}}var Wa=Math.random().toFixed(5).toString().slice(2),na=0;function Ka(t){var r=Object(Rn.a)(t,{value:t}),u=Object(V.a)(r,2),h=u[0],b=u[1];return n.useEffect(function(){na+=1;var v="".concat(Wa,"-").concat(na);b("rc-menu-uuid-".concat(v))},[]),h}var yr=e("p8sG");function La(t){Promise.resolve().then(t)}var Ft="__RC_UTIL_PATH_SPLIT__",ta=function(r){return r.join(Ft)},$a=function(r){return r.split(Ft)},Mt="rc-menu-more";function Va(){var t=n.useState({}),r=Object(V.a)(t,2),u=r[1],h=Object(n.useRef)(new Map),b=Object(n.useRef)(new Map),v=n.useState([]),O=Object(V.a)(v,2),R=O[0],W=O[1],K=Object(n.useRef)(0),L=Object(n.useCallback)(function(U,q){var ae=ta(q);b.current.set(ae,U),h.current.set(U,ae),K.current+=1;var Q=K.current;La(function(){Q===K.current&&u({})})},[]),G=Object(n.useCallback)(function(U,q){var ae=ta(q);b.current.delete(ae),h.current.delete(U)},[]),J=Object(n.useCallback)(function(U){W(U)},[]),se=Object(n.useCallback)(function(U,q){var ae=h.current.get(U)||"",Q=$a(ae);return q&&R.includes(Q[0])&&Q.unshift(Mt),Q},[R]),X=Object(n.useCallback)(function(U,q){return U.some(function(ae){var Q=se(ae,!0);return Q.includes(q)})},[se]),Y=function(){var q=Object(pn.a)(h.current.keys());return R.length&&q.push(Mt),q},ue=Object(n.useCallback)(function(U){var q="".concat(h.current.get(U)).concat(Ft),ae=new Set;return Object(pn.a)(b.current.keys()).forEach(function(Q){Q.startsWith(q)&&ae.add(b.current.get(Q))}),ae},[]);return{registerPath:L,unregisterPath:G,refreshOverflowKeys:J,isSubPathKey:X,getKeyPath:se,getKeys:Y,getSubPathKeys:ue}}var vt=[],za=function(r){var u,h,b=r.prefixCls,v=b===void 0?"rc-menu":b,O=r.style,R=r.className,W=r.tabIndex,K=W===void 0?0:W,L=r.children,G=r.direction,J=r.id,se=r.mode,X=se===void 0?"vertical":se,Y=r.inlineCollapsed,ue=r.disabled,U=r.disabledOverflow,q=r.subMenuOpenDelay,ae=q===void 0?.1:q,Q=r.subMenuCloseDelay,le=Q===void 0?.1:Q,k=r.forceSubMenuRender,be=r.defaultOpenKeys,ne=r.openKeys,ce=r.activeKey,me=r.defaultActiveFirst,re=r.selectable,H=re===void 0?!0:re,de=r.multiple,ye=de===void 0?!1:de,he=r.defaultSelectedKeys,Re=r.selectedKeys,Ke=r.onSelect,Ee=r.onDeselect,Ce=r.inlineIndent,Te=Ce===void 0?24:Ce,Fe=r.motion,Ie=r.defaultMotions,De=r.triggerSubMenuAction,$e=De===void 0?"hover":De,_e=r.builtinPlacements,Ve=r.itemIcon,Je=r.expandIcon,Ye=r.overflowedIndicator,Le=Ye===void 0?"...":Ye,jn=r.getPopupContainer,an=r.onClick,Ze=r.onOpenChange,un=r.onKeyDown,bn=r.openAnimation,En=r.openTransitionName,Ae=Object(Ne.a)(r,["prefixCls","style","className","tabIndex","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName"]),Xe=Dt(L,vt),en=n.useState(!1),ke=Object(V.a)(en,2),Wn=ke[0],Jn=ke[1],Kn=n.useRef(),rn=Ka(J),Dn=G==="rtl",dn=n.useMemo(function(){return X==="inline"&&Y?["vertical",Y]:[X,!1]},[X,Y]),In=Object(V.a)(dn,2),nn=In[0],sn=In[1],An=n.useState(0),mn=Object(V.a)(An,2),qe=mn[0],xe=mn[1],Gn=qe>=Xe.length-1||nn!=="horizontal"||U,Hn=Object(Rn.a)(be,{value:ne,postState:function(Z){return Z||vt}}),nt=Object(V.a)(Hn,2),On=nt[0],gn=nt[1],Xn=n.useState(On),Cn=Object(V.a)(Xn,2),fn=Cn[0],xn=Cn[1],Nn=nn==="inline",Yn=n.useRef(!1);n.useEffect(function(){Nn&&xn(On)},[On]),n.useEffect(function(){if(!Yn.current){Yn.current=!0;return}if(Nn)gn(fn);else{var te=[];gn(te),Ze==null||Ze(te)}},[Nn]);var cn=Va(),Fn=cn.registerPath,pe=cn.unregisterPath,Se=cn.refreshOverflowKeys,Be=cn.isSubPathKey,tn=cn.getKeyPath,Qn=cn.getKeys,gt=cn.getSubPathKeys,Wt=n.useMemo(function(){return{registerPath:Fn,unregisterPath:pe}},[Fn,pe]),Kt=n.useMemo(function(){return{isSubPathKey:Be}},[Be]);n.useEffect(function(){Se(Gn?vt:Xe.slice(qe+1).map(function(te){return te.key}))},[qe,Gn]);var Lt=Object(Rn.a)(ce||me&&((u=Xe[0])===null||u===void 0?void 0:u.key),{value:ce}),tt=Object(V.a)(Lt,2),yt=tt[0],ot=tt[1],bt=et(function(te){ot(te)}),$t=et(function(){ot(void 0)}),Et=Object(Rn.a)(he||[],{value:Re,postState:function(Z){return Array.isArray(Z)?Z:Z==null?vt:[Z]}}),Ot=Object(V.a)(Et,2),at=Ot[0],Mn=Ot[1],Ct=function(Z){if(!!H){var Oe=Z.key,Ge=at.includes(Oe),on;Ge?on=at.filter(function(kn){return kn!==Oe}):ye?on=[].concat(Object(pn.a)(at),[Oe]):on=[Oe],Mn(on);var zn=Object(ve.a)(Object(ve.a)({},Z),{},{selectedKeys:on});Ge?Ee==null||Ee(zn):Ke==null||Ke(zn)}},Rt=et(function(te){an==null||an(_n(te)),Ct(te)}),lt=et(function(te,Z){var Oe=On.filter(function(on){return on!==te});if(Z)Oe.push(te);else if(nn!=="inline"){var Ge=gt(te);Oe=Oe.filter(function(on){return!Ge.has(on)})}o()(On,Oe)||(gn(Oe),Ze==null||Ze(Oe))}),Zn=et(jn),ut=function(Z,Oe){var Ge=Oe!=null?Oe:!On.includes(Z);lt(Z,Ge)},dt=wa(nn,yt,Dn,rn,Kn,Qn,tn,ot,ut,un);n.useEffect(function(){Jn(!0)},[]);var St=nn!=="horizontal"||U?Xe:Xe.map(function(te,Z){return n.createElement(Pn,{key:te.key,overflowDisabled:Z>qe},te)}),Pt=n.createElement(j,Object($.a)({id:J,ref:Kn,prefixCls:"".concat(v,"-overflow"),component:"ul",itemComponent:jt,className:je()(v,"".concat(v,"-root"),"".concat(v,"-").concat(nn),R,(h={},Object(oe.a)(h,"".concat(v,"-inline-collapsed"),sn),Object(oe.a)(h,"".concat(v,"-rtl"),Dn),h)),dir:G,style:O,role:"menu",tabIndex:K,data:St,renderRawItem:function(Z){return Z},renderRawRest:function(Z){var Oe=Z.length,Ge=Oe?Xe.slice(-Oe):null;return n.createElement(Qt,{eventKey:Mt,title:Le,disabled:Gn,internalPopupClose:Oe===0},Ge)},maxCount:nn!=="horizontal"||U?j.INVALIDATE:j.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(Z){xe(Z)},onKeyDown:dt},Ae));return n.createElement(Ut.Provider,{value:rn},n.createElement(Pn,{prefixCls:v,mode:nn,openKeys:On,rtl:Dn,disabled:ue,motion:Wn?Fe:null,defaultMotions:Wn?Ie:null,activeKey:yt,onActive:bt,onInactive:$t,selectedKeys:at,inlineIndent:Te,subMenuOpenDelay:ae,subMenuCloseDelay:le,forceSubMenuRender:k,builtinPlacements:_e,triggerSubMenuAction:$e,getPopupContainer:Zn,itemIcon:Ve,expandIcon:Je,onItemClick:Rt,onOpenChange:lt},n.createElement(He.Provider,{value:Kt},Pt),n.createElement(fe.Provider,{value:Wt},Xe)))},Ua=za,Ja=function(r){var u=r.className,h=r.title,b=r.eventKey,v=r.children,O=Object(Ne.a)(r,["className","title","eventKey","children"]),R=n.useContext(We),W=R.prefixCls,K="".concat(W,"-item-group");return n.createElement("li",Object($.a)({},O,{onClick:function(G){return G.stopPropagation()},className:je()(K,u)}),n.createElement("div",{className:"".concat(K,"-title"),title:typeof h=="string"?h:void 0},h),n.createElement("ul",{className:"".concat(K,"-list")},v))};function Ga(t){var r=t.children,u=Object(Ne.a)(t,["children"]),h=Ue(u.eventKey),b=Dt(r,h),v=ee();return v?b:n.createElement(Ja,u,b)}function Ha(t){var r=t.className,u=t.style,h=n.useContext(We),b=h.prefixCls,v=ee();return v?null:n.createElement("li",{className:je()("".concat(b,"-item-divider"),r),style:u})}var st=Ua;st.Item=jt,st.SubMenu=Qt,st.ItemGroup=Ga,st.Divider=Ha;var Xa=st,xa=e("eDIo");function Ya(t,r){var u=t.prefixCls,h=t.editable,b=t.locale,v=t.style;return!h||h.showAdd===!1?null:n.createElement("button",{ref:r,type:"button",className:"".concat(u,"-nav-add"),style:v,"aria-label":(b==null?void 0:b.addAriaLabel)||"Add tab",onClick:function(R){h.onEdit("add",{event:R})}},h.addIcon||"+")}var aa=n.forwardRef(Ya);function Qa(t,r){var u=t.prefixCls,h=t.id,b=t.tabs,v=t.locale,O=t.mobile,R=t.moreIcon,W=R===void 0?"More":R,K=t.moreTransitionName,L=t.style,G=t.className,J=t.editable,se=t.tabBarGutter,X=t.rtl,Y=t.onTabClick,ue=Object(n.useState)(!1),U=Object(V.a)(ue,2),q=U[0],ae=U[1],Q=Object(n.useState)(null),le=Object(V.a)(Q,2),k=le[0],be=le[1],ne="".concat(h,"-more-popup"),ce="".concat(u,"-dropdown"),me=k!==null?"".concat(ne,"-").concat(k):null,re=v==null?void 0:v.dropdownAriaLabel,H=n.createElement(Xa,{onClick:function(Ce){var Te=Ce.key,Fe=Ce.domEvent;Y(Te,Fe),ae(!1)},id:ne,tabIndex:-1,role:"listbox","aria-activedescendant":me,selectedKeys:[k],"aria-label":re!==void 0?re:"expanded dropdown"},b.map(function(Ee){return n.createElement(jt,{key:Ee.key,id:"".concat(ne,"-").concat(Ee.key),role:"option","aria-controls":h&&"".concat(h,"-panel-").concat(Ee.key),disabled:Ee.disabled},Ee.tab)}));function de(Ee){for(var Ce=b.filter(function($e){return!$e.disabled}),Te=Ce.findIndex(function($e){return $e.key===k})||0,Fe=Ce.length,Ie=0;Ie<Fe;Ie+=1){Te=(Te+Ee+Fe)%Fe;var De=Ce[Te];if(!De.disabled){be(De.key);return}}}function ye(Ee){var Ce=Ee.which;if(!q){[we.a.DOWN,we.a.SPACE,we.a.ENTER].includes(Ce)&&(ae(!0),Ee.preventDefault());return}switch(Ce){case we.a.UP:de(-1),Ee.preventDefault();break;case we.a.DOWN:de(1),Ee.preventDefault();break;case we.a.ESC:ae(!1);break;case we.a.SPACE:case we.a.ENTER:k!==null&&Y(k,Ee);break}}Object(n.useEffect)(function(){var Ee=document.getElementById(me);Ee&&Ee.scrollIntoView&&Ee.scrollIntoView(!1)},[k]),Object(n.useEffect)(function(){q||be(null)},[q]);var he=Object(oe.a)({},X?"marginLeft":"marginRight",se);b.length||(he.visibility="hidden",he.order=1);var Re=je()(Object(oe.a)({},"".concat(ce,"-rtl"),X)),Ke=O?null:n.createElement(xa.default,{prefixCls:ce,overlay:H,trigger:["hover"],visible:q,transitionName:K,onVisibleChange:ae,overlayClassName:Re,mouseEnterDelay:.1,mouseLeaveDelay:.1},n.createElement("button",{type:"button",className:"".concat(u,"-nav-more"),style:he,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":ne,id:"".concat(h,"-more"),"aria-expanded":q,onKeyDown:ye},W));return n.createElement("div",{className:je()("".concat(u,"-nav-operations"),G),style:L,ref:r},Ke,n.createElement(aa,{prefixCls:u,locale:v,editable:J}))}var Za=n.forwardRef(Qa),Tt=Object(n.createContext)(null),ka=.1,ra=.01,ht=20,ia=Math.pow(.995,ht);function qa(t,r){var u=Object(n.useState)(),h=Object(V.a)(u,2),b=h[0],v=h[1],O=Object(n.useState)(0),R=Object(V.a)(O,2),W=R[0],K=R[1],L=Object(n.useState)(0),G=Object(V.a)(L,2),J=G[0],se=G[1],X=Object(n.useState)(),Y=Object(V.a)(X,2),ue=Y[0],U=Y[1],q=Object(n.useRef)();function ae(ce){var me=ce.touches[0],re=me.screenX,H=me.screenY;v({x:re,y:H}),window.clearInterval(q.current)}function Q(ce){if(!!b){ce.preventDefault();var me=ce.touches[0],re=me.screenX,H=me.screenY;v({x:re,y:H});var de=re-b.x,ye=H-b.y;r(de,ye);var he=Date.now();K(he),se(he-W),U({x:de,y:ye})}}function le(){if(!!b&&(v(null),U(null),ue)){var ce=ue.x/J,me=ue.y/J,re=Math.abs(ce),H=Math.abs(me);if(Math.max(re,H)<ka)return;var de=ce,ye=me;q.current=window.setInterval(function(){if(Math.abs(de)<ra&&Math.abs(ye)<ra){window.clearInterval(q.current);return}de*=ia,ye*=ia,r(de*ht,ye*ht)},ht)}}var k=Object(n.useRef)();function be(ce){var me=ce.deltaX,re=ce.deltaY,H=0,de=Math.abs(me),ye=Math.abs(re);de===ye?H=k.current==="x"?me:re:de>ye?(H=me,k.current="x"):(H=re,k.current="y"),r(-H,-H)&&ce.preventDefault()}var ne=Object(n.useRef)(null);ne.current={onTouchStart:ae,onTouchMove:Q,onTouchEnd:le,onWheel:be},n.useEffect(function(){function ce(de){ne.current.onTouchStart(de)}function me(de){ne.current.onTouchMove(de)}function re(de){ne.current.onTouchEnd(de)}function H(de){ne.current.onWheel(de)}return document.addEventListener("touchmove",me,{passive:!1}),document.addEventListener("touchend",re,{passive:!1}),t.current.addEventListener("touchstart",ce,{passive:!1}),t.current.addEventListener("wheel",H),function(){document.removeEventListener("touchmove",me),document.removeEventListener("touchend",re)}},[])}function _a(){var t=Object(n.useRef)(new Map);function r(h){return t.current.has(h)||t.current.set(h,n.createRef()),t.current.get(h)}function u(h){t.current.delete(h)}return[r,u]}function sa(t,r){var u=n.useRef(t),h=n.useState({}),b=Object(V.a)(h,2),v=b[1];function O(R){var W=typeof R=="function"?R(u.current):R;W!==u.current&&r(W,u.current),u.current=W,v({})}return[u.current,O]}var oa=function(r){var u=r.position,h=r.prefixCls,b=r.extra;if(!b)return null;var v,O=b;return u==="right"&&(v=O.right||!O.left&&O||null),u==="left"&&(v=O.left||null),v?n.createElement("div",{className:"".concat(h,"-extra-content")},v):null};function er(t,r){var u,h=n.useContext(Tt),b=h.prefixCls,v=h.tabs,O=t.className,R=t.style,W=t.id,K=t.animated,L=t.activeKey,G=t.rtl,J=t.extra,se=t.editable,X=t.locale,Y=t.tabPosition,ue=t.tabBarGutter,U=t.children,q=t.onTabClick,ae=t.onTabScroll,Q=Object(n.useRef)(),le=Object(n.useRef)(),k=Object(n.useRef)(),be=Object(n.useRef)(),ne=_a(),ce=Object(V.a)(ne,2),me=ce[0],re=ce[1],H=Y==="top"||Y==="bottom",de=sa(0,function(te,Z){H&&ae&&ae({direction:te>Z?"left":"right"})}),ye=Object(V.a)(de,2),he=ye[0],Re=ye[1],Ke=sa(0,function(te,Z){!H&&ae&&ae({direction:te>Z?"top":"bottom"})}),Ee=Object(V.a)(Ke,2),Ce=Ee[0],Te=Ee[1],Fe=Object(n.useState)(0),Ie=Object(V.a)(Fe,2),De=Ie[0],$e=Ie[1],_e=Object(n.useState)(0),Ve=Object(V.a)(_e,2),Je=Ve[0],Ye=Ve[1],Le=Object(n.useState)(0),jn=Object(V.a)(Le,2),an=jn[0],Ze=jn[1],un=Object(n.useState)(0),bn=Object(V.a)(un,2),En=bn[0],Ae=bn[1],Xe=Object(n.useState)(null),en=Object(V.a)(Xe,2),ke=en[0],Wn=en[1],Jn=Object(n.useState)(null),Kn=Object(V.a)(Jn,2),rn=Kn[0],Dn=Kn[1],dn=Object(n.useState)(0),In=Object(V.a)(dn,2),nn=In[0],sn=In[1],An=Object(n.useState)(0),mn=Object(V.a)(An,2),qe=mn[0],xe=mn[1],Gn=Sn(new Map),Hn=Object(V.a)(Gn,2),nt=Hn[0],On=Hn[1],gn=T(v,nt,De),Xn="".concat(b,"-nav-operations-hidden"),Cn=0,fn=0;H?G?(Cn=0,fn=Math.max(0,De-ke)):(Cn=Math.min(0,ke-De),fn=0):(Cn=Math.min(0,rn-Je),fn=0);function xn(te){return te<Cn?Cn:te>fn?fn:te}var Nn=Object(n.useRef)(),Yn=Object(n.useState)(),cn=Object(V.a)(Yn,2),Fn=cn[0],pe=cn[1];function Se(){pe(Date.now())}function Be(){window.clearTimeout(Nn.current)}qa(Q,function(te,Z){function Oe(Ge,on){Ge(function(zn){var kn=xn(zn+on);return kn})}if(H){if(ke>=De)return!1;Oe(Re,te)}else{if(rn>=Je)return!1;Oe(Te,Z)}return Be(),Se(),!0}),Object(n.useEffect)(function(){return Be(),Fn&&(Nn.current=window.setTimeout(function(){pe(0)},100)),Be},[Fn]);function tn(){var te=arguments.length>0&&arguments[0]!==void 0?arguments[0]:L,Z=gn.get(te)||{width:0,height:0,left:0,right:0,top:0};if(H){var Oe=he;G?Z.right<he?Oe=Z.right:Z.right+Z.width>he+ke&&(Oe=Z.right+Z.width-ke):Z.left<-he?Oe=-Z.left:Z.left+Z.width>-he+ke&&(Oe=-(Z.left+Z.width-ke)),Te(0),Re(xn(Oe))}else{var Ge=Ce;Z.top<-Ce?Ge=-Z.top:Z.top+Z.height>-Ce+rn&&(Ge=-(Z.top+Z.height-rn)),Re(0),Te(xn(Ge))}}var Qn=B(gn,{width:ke,height:rn,left:he,top:Ce},{width:an,height:En},{width:nn,height:qe},Object(ve.a)(Object(ve.a)({},t),{},{tabs:v})),gt=Object(V.a)(Qn,2),Wt=gt[0],Kt=gt[1],Lt=v.map(function(te){var Z=te.key;return n.createElement($n,{id:W,prefixCls:b,key:Z,rtl:G,tab:te,closable:te.closable,editable:se,active:Z===L,tabPosition:Y,tabBarGutter:ue,renderWrapper:U,removeAriaLabel:X==null?void 0:X.removeAriaLabel,ref:me(Z),onClick:function(Ge){q(Z,Ge)},onRemove:function(){re(Z)},onFocus:function(){tn(Z),Se(),G||(Q.current.scrollLeft=0),Q.current.scrollTop=0}})}),tt=wn(function(){var te,Z,Oe,Ge,on,zn,kn,Vt,zt,lr=((te=Q.current)===null||te===void 0?void 0:te.offsetWidth)||0,ur=((Z=Q.current)===null||Z===void 0?void 0:Z.offsetHeight)||0,ma=((Oe=be.current)===null||Oe===void 0?void 0:Oe.offsetWidth)||0,fa=((Ge=be.current)===null||Ge===void 0?void 0:Ge.offsetHeight)||0,dr=((on=k.current)===null||on===void 0?void 0:on.offsetWidth)||0,cr=((zn=k.current)===null||zn===void 0?void 0:zn.offsetHeight)||0;Wn(lr),Dn(ur),sn(ma),xe(fa);var pa=(((kn=le.current)===null||kn===void 0?void 0:kn.offsetWidth)||0)-ma,va=(((Vt=le.current)===null||Vt===void 0?void 0:Vt.offsetHeight)||0)-fa;$e(pa),Ye(va);var ha=(zt=k.current)===null||zt===void 0?void 0:zt.className.includes(Xn);Ze(pa-(ha?0:dr)),Ae(va-(ha?0:cr)),On(function(){var ga=new Map;return v.forEach(function(mr){var ya=mr.key,ct=me(ya).current;ct&&ga.set(ya,{width:ct.offsetWidth,height:ct.offsetHeight,left:ct.offsetLeft,top:ct.offsetTop})}),ga})}),yt=v.slice(0,Wt),ot=v.slice(Kt+1),bt=[].concat(Object(pn.a)(yt),Object(pn.a)(ot)),$t=Object(n.useState)(),Et=Object(V.a)($t,2),Ot=Et[0],at=Et[1],Mn=gn.get(L),Ct=Object(n.useRef)();function Rt(){Qe.a.cancel(Ct.current)}Object(n.useEffect)(function(){var te={};return Mn&&(H?(G?te.right=Mn.right:te.left=Mn.left,te.width=Mn.width):(te.top=Mn.top,te.height=Mn.height)),Rt(),Ct.current=Object(Qe.a)(function(){at(te)}),Rt},[Mn,H,G]),Object(n.useEffect)(function(){tn()},[L,Mn,gn,H]),Object(n.useEffect)(function(){tt()},[G,ue,L,v.map(function(te){return te.key}).join("_")]);var lt=!!bt.length,Zn="".concat(b,"-nav-wrap"),ut,dt,St,Pt;return H?G?(dt=he>0,ut=he+ke<De):(ut=he<0,dt=-he+ke<De):(St=Ce<0,Pt=-Ce+rn<Je),n.createElement("div",{ref:r,role:"tablist",className:je()("".concat(b,"-nav"),O),style:R,onKeyDown:function(){Se()}},n.createElement(oa,{position:"left",extra:J,prefixCls:b}),n.createElement(Ln.default,{onResize:tt},n.createElement("div",{className:je()(Zn,(u={},Object(oe.a)(u,"".concat(Zn,"-ping-left"),ut),Object(oe.a)(u,"".concat(Zn,"-ping-right"),dt),Object(oe.a)(u,"".concat(Zn,"-ping-top"),St),Object(oe.a)(u,"".concat(Zn,"-ping-bottom"),Pt),u)),ref:Q},n.createElement(Ln.default,{onResize:tt},n.createElement("div",{ref:le,className:"".concat(b,"-nav-list"),style:{transform:"translate(".concat(he,"px, ").concat(Ce,"px)"),transition:Fn?"none":void 0}},Lt,n.createElement(aa,{ref:be,prefixCls:b,locale:X,editable:se,style:{visibility:lt?"hidden":null}}),n.createElement("div",{className:je()("".concat(b,"-ink-bar"),Object(oe.a)({},"".concat(b,"-ink-bar-animated"),K.inkBar)),style:Ot}))))),n.createElement(Za,Object($.a)({},t,{ref:k,prefixCls:b,tabs:bt,className:!lt&&Xn})),n.createElement(oa,{position:"right",extra:J,prefixCls:b}))}var la=n.forwardRef(er);function nr(t){var r=t.id,u=t.activeKey,h=t.animated,b=t.tabPosition,v=t.rtl,O=t.destroyInactiveTabPane,R=n.useContext(Tt),W=R.prefixCls,K=R.tabs,L=h.tabPane,G=K.findIndex(function(J){return J.key===u});return n.createElement("div",{className:je()("".concat(W,"-content-holder"))},n.createElement("div",{className:je()("".concat(W,"-content"),"".concat(W,"-content-").concat(b),Object(oe.a)({},"".concat(W,"-content-animated"),L)),style:G&&L?Object(oe.a)({},v?"marginRight":"marginLeft","-".concat(G,"00%")):null},K.map(function(J){return n.cloneElement(J.node,{key:J.key,prefixCls:W,tabKey:J.key,id:r,animated:L,active:J.key===u,destroyInactiveTabPane:O})})))}function ua(t){var r=t.prefixCls,u=t.forceRender,h=t.className,b=t.style,v=t.id,O=t.active,R=t.animated,W=t.destroyInactiveTabPane,K=t.tabKey,L=t.children,G=n.useState(u),J=Object(V.a)(G,2),se=J[0],X=J[1];n.useEffect(function(){O?X(!0):W&&X(!1)},[O,W]);var Y={};return O||(R?(Y.visibility="hidden",Y.height=0,Y.overflowY="hidden"):Y.display="none"),n.createElement("div",{id:v&&"".concat(v,"-panel-").concat(K),role:"tabpanel",tabIndex:O?0:-1,"aria-labelledby":v&&"".concat(v,"-tab-").concat(K),"aria-hidden":!O,style:Object(ve.a)(Object(ve.a)({},Y),b),className:je()("".concat(r,"-tabpane"),O&&"".concat(r,"-tabpane-active"),h)},(O||se||u)&&L)}var da=0;function tr(t){return Object(ln.a)(t).map(function(r){if(n.isValidElement(r)){var u=r.key!==void 0?String(r.key):void 0;return Object(ve.a)(Object(ve.a)({key:u},r.props),{},{node:r})}return null}).filter(function(r){return r})}function ar(t,r){var u,h=t.id,b=t.prefixCls,v=b===void 0?"rc-tabs":b,O=t.className,R=t.children,W=t.direction,K=t.activeKey,L=t.defaultActiveKey,G=t.editable,J=t.animated,se=J===void 0?{inkBar:!0,tabPane:!1}:J,X=t.tabPosition,Y=X===void 0?"top":X,ue=t.tabBarGutter,U=t.tabBarStyle,q=t.tabBarExtraContent,ae=t.locale,Q=t.moreIcon,le=t.moreTransitionName,k=t.destroyInactiveTabPane,be=t.renderTabBar,ne=t.onChange,ce=t.onTabClick,me=t.onTabScroll,re=Object(Ne.a)(t,["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"]),H=tr(R),de=W==="rtl",ye;se===!1?ye={inkBar:!1,tabPane:!1}:se===!0?ye={inkBar:!0,tabPane:!0}:ye=Object(ve.a)({inkBar:!0,tabPane:!1},Object(ze.a)(se)==="object"?se:{});var he=Object(n.useState)(!1),Re=Object(V.a)(he,2),Ke=Re[0],Ee=Re[1];Object(n.useEffect)(function(){Ee(Object(Bn.a)())},[]);var Ce=Object(Rn.a)(function(){var Ae;return(Ae=H[0])===null||Ae===void 0?void 0:Ae.key},{value:K,defaultValue:L}),Te=Object(V.a)(Ce,2),Fe=Te[0],Ie=Te[1],De=Object(n.useState)(function(){return H.findIndex(function(Ae){return Ae.key===Fe})}),$e=Object(V.a)(De,2),_e=$e[0],Ve=$e[1];Object(n.useEffect)(function(){var Ae=H.findIndex(function(en){return en.key===Fe});if(Ae===-1){var Xe;Ae=Math.max(0,Math.min(_e,H.length-1)),Ie((Xe=H[Ae])===null||Xe===void 0?void 0:Xe.key)}Ve(Ae)},[H.map(function(Ae){return Ae.key}).join("_"),Fe,_e]);var Je=Object(Rn.a)(null,{value:h}),Ye=Object(V.a)(Je,2),Le=Ye[0],jn=Ye[1],an=Y;Ke&&!["left","right"].includes(Y)&&(an="top"),Object(n.useEffect)(function(){h||(jn("rc-tabs-".concat(da)),da+=1)},[]);function Ze(Ae,Xe){ce==null||ce(Ae,Xe),Ie(Ae),ne==null||ne(Ae)}var un={id:Le,activeKey:Fe,animated:ye,tabPosition:an,rtl:de,mobile:Ke},bn,En=Object(ve.a)(Object(ve.a)({},un),{},{editable:G,locale:ae,moreIcon:Q,moreTransitionName:le,tabBarGutter:ue,onTabClick:Ze,onTabScroll:me,extra:q,style:U,panes:R});return be?bn=be(En,la):bn=n.createElement(la,En),n.createElement(Tt.Provider,{value:{tabs:H,prefixCls:v}},n.createElement("div",Object($.a)({ref:r,id:h,className:je()(v,"".concat(v,"-").concat(an),(u={},Object(oe.a)(u,"".concat(v,"-mobile"),Ke),Object(oe.a)(u,"".concat(v,"-editable"),G),Object(oe.a)(u,"".concat(v,"-rtl"),de),u),O)},re),bn,n.createElement(nr,Object($.a)({destroyInactiveTabPane:k},un,{animated:ye}))))}var ca=n.forwardRef(ar);ca.TabPane=ua;var rr=ca,ir=rr,Bt=e("MZF8"),hn=e("dEAq"),sr=e("ZpkN"),br=e("TIsu");function wt(t,r){var u,h=(u=t.match(/\.(\w+)$/))===null||u===void 0?void 0:u[1];return h||(h=r.tsx?"tsx":"jsx"),h}var or=t=>{var r,u,h,b=Object(n.useRef)(),v=Object(n.useContext)(hn.context),O=v.locale,R=Object(hn.useLocaleProps)(O,t),W=Object(hn.useDemoUrl)(R.identifier),K=R.demoUrl||W,L=(Bt.a===null||Bt.a===void 0?void 0:Bt.a.location.hash)==="#".concat(R.identifier),G=Object.keys(R.sources).length===1,J=Object(hn.useCodeSandbox)((r=R.hideActions)!==null&&r!==void 0&&r.includes("CSB")?null:R),se=Object(hn.useRiddle)((u=R.hideActions)!==null&&u!==void 0&&u.includes("RIDDLE")?null:R),X=Object(hn.useMotions)(R.motions||[],b.current),Y=Object(x.default)(X,2),ue=Y[0],U=Y[1],q=Object(hn.useCopy)(),ae=Object(x.default)(q,2),Q=ae[0],le=ae[1],k=Object(n.useState)("_"),be=Object(x.default)(k,2),ne=be[0],ce=be[1],me=Object(n.useState)(wt(ne,R.sources[ne])),re=Object(x.default)(me,2),H=re[0],de=re[1],ye=Object(n.useState)(Boolean(R.defaultShowCode)),he=Object(x.default)(ye,2),Re=he[0],Ke=he[1],Ee=Object(n.useState)(Math.random()),Ce=Object(x.default)(Ee,2),Te=Ce[0],Fe=Ce[1],Ie=R.sources[ne][H]||R.sources[ne].content,De=Object(hn.useTSPlaygroundUrl)(O,Ie),$e=Object(n.useRef)(),_e=Object(hn.usePrefersColor)(),Ve=Object(x.default)(_e,1),Je=Ve[0];Object(n.useEffect)(()=>{Fe(Math.random())},[Je]);function Ye(Le){ce(Le),de(wt(Le,R.sources[Le]))}return E.a.createElement("div",{style:R.style,className:[R.className,"__dumi-default-previewer",L?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:R.identifier,"data-debug":R.debug||void 0,"data-iframe":R.iframe||void 0},R.iframe&&E.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),E.a.createElement("div",{ref:b,className:"__dumi-default-previewer-demo",style:{transform:R.transform?"translate(0, 0)":void 0,padding:R.compact||R.iframe&&R.compact!==!1?"0":void 0,background:R.background}},R.iframe?E.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(R.iframe).replace(/(\d)$/,"$1px")},key:Te,src:K,ref:$e}):R.children),E.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":R.title},R.title&&E.a.createElement(hn.AnchorLink,{to:"#".concat(R.identifier)},R.title),R.description&&E.a.createElement("div",{dangerouslySetInnerHTML:{__html:R.description}})),E.a.createElement("div",{className:"__dumi-default-previewer-actions"},J&&E.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:J}),se&&E.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:se}),R.motions&&E.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:U,onClick:()=>ue()}),R.iframe&&E.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:()=>Fe(Math.random())}),!((h=R.hideActions)!==null&&h!==void 0&&h.includes("EXTERNAL"))&&E.a.createElement(hn.Link,{target:"_blank",to:K},E.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),E.a.createElement("span",null),E.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":le,onClick:()=>Q(Ie)}),H==="tsx"&&Re&&E.a.createElement(hn.Link,{target:"_blank",to:De},E.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),E.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(Re?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:()=>Ke(!Re)})),Re&&E.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!G&&E.a.createElement(ir,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xB7\xB7\xB7",defaultActiveKey:ne,onChange:Ye},Object.keys(R.sources).map(Le=>E.a.createElement(ua,{tab:Le==="_"?"index.".concat(wt(Le,R.sources[Le])):Le,key:Le}))),E.a.createElement("div",{className:"__dumi-default-previewer-source"},E.a.createElement(sr.a,{code:Ie,lang:H,showCopy:!1}))))},Er=yn.default=or},"80pN":function(Tn,yn,e){"use strict";(function(x){/** @license React v16.14.0
* react-dom-test-utils.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var n=e("MgzW"),E=e("q1tI"),$=e("i8i4"),oe=e("QCnb");function V(c){for(var D="https://reactjs.org/docs/error-decoder.html?invariant="+c,I=1;I<arguments.length;I++)D+="&args[]="+encodeURIComponent(arguments[I]);return"Minified React error #"+c+"; visit "+D+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ze=E.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;ze.hasOwnProperty("ReactCurrentDispatcher")||(ze.ReactCurrentDispatcher={current:null}),ze.hasOwnProperty("ReactCurrentBatchConfig")||(ze.ReactCurrentBatchConfig={suspense:null});function Ne(c){var D=c,I=c;if(c.alternate)for(;D.return;)D=D.return;else{c=D;do D=c,(D.effectTag&1026)!=0&&(I=D.return),c=D.return;while(c)}return D.tag===3?I:null}function ve(c){if(Ne(c)!==c)throw Error(V(188))}function Un(c){var D=c.alternate;if(!D){if(D=Ne(c),D===null)throw Error(V(188));return D!==c?null:c}for(var I=c,fe=D;;){var ee=I.return;if(ee===null)break;var Pe=ee.alternate;if(Pe===null){if(fe=ee.return,fe!==null){I=fe;continue}break}if(ee.child===Pe.child){for(Pe=ee.child;Pe;){if(Pe===I)return ve(ee),c;if(Pe===fe)return ve(ee),D;Pe=Pe.sibling}throw Error(V(188))}if(I.return!==fe.return)I=ee,fe=Pe;else{for(var Ue=!1,He=ee.child;He;){if(He===I){Ue=!0,I=ee,fe=Pe;break}if(He===fe){Ue=!0,fe=ee,I=Pe;break}He=He.sibling}if(!Ue){for(He=Pe.child;He;){if(He===I){Ue=!0,I=Pe,fe=ee;break}if(He===fe){Ue=!0,fe=Pe,I=ee;break}He=He.sibling}if(!Ue)throw Error(V(189))}}if(I.alternate!==fe)throw Error(V(190))}if(I.tag!==3)throw Error(V(188));return I.stateNode.current===I?c:D}function je(){return!0}function ln(){return!1}function Bn(c,D,I,fe){this.dispatchConfig=c,this._targetInst=D,this.nativeEvent=I,c=this.constructor.Interface;for(var ee in c)c.hasOwnProperty(ee)&&((D=c[ee])?this[ee]=D(I):ee==="target"?this.target=fe:this[ee]=I[ee]);return this.isDefaultPrevented=(I.defaultPrevented!=null?I.defaultPrevented:I.returnValue===!1)?je:ln,this.isPropagationStopped=ln,this}n(Bn.prototype,{preventDefault:function(){this.defaultPrevented=!0;var c=this.nativeEvent;c&&(c.preventDefault?c.preventDefault():typeof c.returnValue!="unknown"&&(c.returnValue=!1),this.isDefaultPrevented=je)},stopPropagation:function(){var c=this.nativeEvent;c&&(c.stopPropagation?c.stopPropagation():typeof c.cancelBubble!="unknown"&&(c.cancelBubble=!0),this.isPropagationStopped=je)},persist:function(){this.isPersistent=je},isPersistent:ln,destructor:function(){var c=this.constructor.Interface,D;for(D in c)this[D]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=ln,this._dispatchInstances=this._dispatchListeners=null}}),Bn.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(c){return c.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null},Bn.extend=function(c){function D(){}function I(){return fe.apply(this,arguments)}var fe=this;D.prototype=fe.prototype;var ee=new D;return n(ee,I.prototype),I.prototype=ee,I.prototype.constructor=I,I.Interface=n({},fe.Interface,c),I.extend=fe.extend,Qe(I),I},Qe(Bn);function Rn(c,D,I,fe){if(this.eventPool.length){var ee=this.eventPool.pop();return this.call(ee,c,D,I,fe),ee}return new this(c,D,I,fe)}function pn(c){if(!(c instanceof this))throw Error(V(279));c.destructor(),10>this.eventPool.length&&this.eventPool.push(c)}function Qe(c){c.eventPool=[],c.getPooled=Rn,c.release=pn}var Ln=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined");function wn(c,D){var I={};return I[c.toLowerCase()]=D.toLowerCase(),I["Webkit"+c]="webkit"+D,I["Moz"+c]="moz"+D,I}var Sn={animationend:wn("Animation","AnimationEnd"),animationiteration:wn("Animation","AnimationIteration"),animationstart:wn("Animation","AnimationStart"),transitionend:wn("Transition","TransitionEnd")},we={},qn={};Ln&&(qn=document.createElement("div").style,"AnimationEvent"in window||(delete Sn.animationend.animation,delete Sn.animationiteration.animation,delete Sn.animationstart.animation),"TransitionEvent"in window||delete Sn.transitionend.transition);function $n(c){if(we[c])return we[c];if(!Sn[c])return c;var D=Sn[c],I;for(I in D)if(D.hasOwnProperty(I)&&I in qn)return we[c]=D[I];return c}var rt=$n("animationend"),T=$n("animationiteration"),F=$n("animationstart"),B=$n("transitionend"),f=null;function o(c){if(f===null)try{var D=("require"+Math.random()).slice(0,7);f=(x&&x[D])("timers").setImmediate}catch(I){f=function(fe){var ee=new MessageChannel;ee.port1.onmessage=fe,ee.port2.postMessage(void 0)}}return f(c)}var g=$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,C=g[11],S=g[12],i=$.unstable_batchedUpdates,l=ze.IsSomeRendererActing,y=typeof oe.unstable_flushAllWithoutAsserting=="function",M=oe.unstable_flushAllWithoutAsserting||function(){for(var c=!1;C();)c=!0;return c};function N(c){try{M(),o(function(){M()?N(c):c()})}catch(D){c(D)}}var P=0,s=!1,A=$.findDOMNode,d=$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,a=d[0],p=d[4],m=d[5],j=d[6],w=d[7],z=d[8],_=d[9],ie=d[10];function ge(){}function vn(c,D){if(!c)return[];if(c=Un(c),!c)return[];for(var I=c,fe=[];;){if(I.tag===5||I.tag===6||I.tag===1||I.tag===0){var ee=I.stateNode;D(ee)&&fe.push(ee)}if(I.child)I.child.return=I,I=I.child;else{if(I===c)return fe;for(;!I.sibling;){if(!I.return||I.return===c)return fe;I=I.return}I.sibling.return=I.return,I=I.sibling}}}function We(c,D){if(c&&!c._reactInternalFiber){var I=""+c;throw c=Array.isArray(c)?"an array":c&&c.nodeType===1&&c.tagName?"a DOM node":I==="[object Object]"?"object with keys {"+Object.keys(c).join(", ")+"}":I,Error(V(286,D,c))}}var Me={renderIntoDocument:function(c){var D=document.createElement("div");return $.render(c,D)},isElement:function(c){return E.isValidElement(c)},isElementOfType:function(c,D){return E.isValidElement(c)&&c.type===D},isDOMComponent:function(c){return!(!c||c.nodeType!==1||!c.tagName)},isDOMComponentElement:function(c){return!!(c&&E.isValidElement(c)&&c.tagName)},isCompositeComponent:function(c){return Me.isDOMComponent(c)?!1:c!=null&&typeof c.render=="function"&&typeof c.setState=="function"},isCompositeComponentWithType:function(c,D){return Me.isCompositeComponent(c)?c._reactInternalFiber.type===D:!1},findAllInRenderedTree:function(c,D){return We(c,"findAllInRenderedTree"),c?vn(c._reactInternalFiber,D):[]},scryRenderedDOMComponentsWithClass:function(c,D){return We(c,"scryRenderedDOMComponentsWithClass"),Me.findAllInRenderedTree(c,function(I){if(Me.isDOMComponent(I)){var fe=I.className;typeof fe!="string"&&(fe=I.getAttribute("class")||"");var ee=fe.split(/\s+/);if(!Array.isArray(D)){if(D===void 0)throw Error(V(11));D=D.split(/\s+/)}return D.every(function(Pe){return ee.indexOf(Pe)!==-1})}return!1})},findRenderedDOMComponentWithClass:function(c,D){if(We(c,"findRenderedDOMComponentWithClass"),c=Me.scryRenderedDOMComponentsWithClass(c,D),c.length!==1)throw Error("Did not find exactly one match (found: "+c.length+") for class:"+D);return c[0]},scryRenderedDOMComponentsWithTag:function(c,D){return We(c,"scryRenderedDOMComponentsWithTag"),Me.findAllInRenderedTree(c,function(I){return Me.isDOMComponent(I)&&I.tagName.toUpperCase()===D.toUpperCase()})},findRenderedDOMComponentWithTag:function(c,D){if(We(c,"findRenderedDOMComponentWithTag"),c=Me.scryRenderedDOMComponentsWithTag(c,D),c.length!==1)throw Error("Did not find exactly one match (found: "+c.length+") for tag:"+D);return c[0]},scryRenderedComponentsWithType:function(c,D){return We(c,"scryRenderedComponentsWithType"),Me.findAllInRenderedTree(c,function(I){return Me.isCompositeComponentWithType(I,D)})},findRenderedComponentWithType:function(c,D){if(We(c,"findRenderedComponentWithType"),c=Me.scryRenderedComponentsWithType(c,D),c.length!==1)throw Error("Did not find exactly one match (found: "+c.length+") for componentType:"+D);return c[0]},mockComponent:function(c,D){return D=D||c.mockTagName||"div",c.prototype.render.mockImplementation(function(){return E.createElement(D,null,this.props.children)}),this},nativeTouchData:function(c,D){return{touches:[{pageX:c,pageY:D}]}},Simulate:null,SimulateNative:{},act:function(c){function D(){P--,l.current=I,S.current=fe}s===!1&&(s=!0,console.error("act(...) is not supported in production builds of React, and might not behave as expected.")),P++;var I=l.current,fe=S.current;l.current=!0,S.current=!0;try{var ee=i(c)}catch(Pe){throw D(),Pe}if(ee!==null&&typeof ee=="object"&&typeof ee.then=="function")return{then:function(Pe,Ue){ee.then(function(){1<P||y===!0&&I===!0?(D(),Pe()):N(function(He){D(),He?Ue(He):Pe()})},function(He){D(),Ue(He)})}};try{P!==1||y!==!1&&I!==!1||M(),D()}catch(Pe){throw D(),Pe}return{then:function(Pe){Pe()}}}};function Pn(c){return function(D,I){if(E.isValidElement(D))throw Error(V(228));if(Me.isCompositeComponent(D))throw Error(V(229));var fe=p[c],ee=new ge;ee.target=D,ee.type=c.toLowerCase();var Pe=a(D),Ue=new Bn(fe,Pe,ee,D);Ue.persist(),n(Ue,I),fe.phasedRegistrationNames?m(Ue):j(Ue),$.unstable_batchedUpdates(function(){w(D),ie(Ue)}),z()}}Me.Simulate={};for(var it in p)Me.Simulate[it]=Pn(it);function _n(c,D){return function(I,fe){var ee=new ge(c);n(ee,fe),Me.isDOMComponent(I)?(I=A(I),ee.target=I,_(D,1,document,ee)):I.tagName&&(ee.target=I,_(D,1,document,ee))}}[["abort","abort"],[rt,"animationEnd"],[T,"animationIteration"],[F,"animationStart"],["blur","blur"],["canplaythrough","canPlayThrough"],["canplay","canPlay"],["cancel","cancel"],["change","change"],["click","click"],["close","close"],["compositionend","compositionEnd"],["compositionstart","compositionStart"],["compositionupdate","compositionUpdate"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["dragstart","dragStart"],["drag","drag"],["drop","drop"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],["ended","ended"],["error","error"],["focus","focus"],["input","input"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["loadstart","loadStart"],["loadstart","loadStart"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["mousedown","mouseDown"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["playing","playing"],["progress","progress"],["ratechange","rateChange"],["scroll","scroll"],["seeked","seeked"],["seeking","seeking"],["selectionchange","selectionChange"],["stalled","stalled"],["suspend","suspend"],["textInput","textInput"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchmove","touchMove"],["touchstart","touchStart"],[B,"transitionEnd"],["volumechange","volumeChange"],["waiting","waiting"],["wheel","wheel"]].forEach(function(c){var D=c[1];Me.SimulateNative[D]=_n(D,c[0])}),x.exports=Me.default||Me}).call(this,e("hOG+")(Tn))},JjdP:function(Tn,yn,e){"use strict";e.r(yn);var x=e("9og8"),n=e("WmNS"),E=e.n(n),$=e("LtsZ"),oe=`import React, { useRef } from 'react';
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

export default Demo;`,V=`import React from 'react';
import FormRender, { useForm } from 'form-render';

const Demo = props => {
  const form = useForm();
  return <FormRender form={form} {...props} />;
};

export default Demo;`,ze=`export const delay = ms => new Promise(res => setTimeout(res, ms));

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
};`,Un=`import React, { Component } from 'react';
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

export default Demo;`,ln=`{
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

export default Demo;`,pn=`/* PrismJS 1.16.0
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

export default Demo;`,$n=`.fr-generator-playground {
  margin: 0 -24px;

  .hide-demo {
    display: none;
  }
}`,rt=yn.default={"guide-card":{component:Object($.dynamic)({loader:function(){var T=Object(x.a)(E.a.mark(function B(){return E.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"oLxE"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},B)}));function F(){return T.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:oe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"card-render":{version:"0.1.2"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"0.x"}},identifier:"guide-card"}},"chart-render-demo":{component:Object($.dynamic)({loader:function(){var T=Object(x.a)(E.a.mark(function B(){var f,o,g,C,S,i,l;return E.a.wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return i=function(P,s){if(!s&&P&&P.__esModule)return P;if(P===null||typeof P!="object"&&typeof P!="function")return{default:P};var A=S(s);if(A&&A.has(P))return A.get(P);var d={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var p in P)if(p!=="default"&&Object.prototype.hasOwnProperty.call(P,p)){var m=a?Object.getOwnPropertyDescriptor(P,p):null;m&&(m.get||m.set)?Object.defineProperty(d,p,m):d[p]=P[p]}return d.default=P,A&&A.set(P,d),d},S=function(P){if(typeof WeakMap!="function")return null;var s=new WeakMap,A=new WeakMap;return(S=function(a){return a?A:s})(P)},f=e("K+nK"),M.t0=f,M.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return M.t1=M.sent,o=(0,M.t0)(M.t1),M.t2=i,M.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return M.t3=M.sent,g=(0,M.t2)(M.t3),M.next=15,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 15:return C=M.sent,l=function(){var P=(0,g.useState)("Line"),s=(0,o.default)(P,2),A=s[0],d=s[1],a={Line:C.Line,Column:C.Column,PivotTable:C.PivotTable}[A];return g.default.createElement("div",null,g.default.createElement("div",{style:{marginBottom:10}},g.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return d("Line")}},"\u6298\u7EBF\u56FE"),g.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return d("Column")}},"\u67F1\u72B6\u56FE"),g.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return d("PivotTable")}},"\u4EA4\u53C9\u8868")),g.default.createElement(a,{meta:[{id:"date",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF",isDim:!1},{id:"uv",name:"\u8BBF\u5BA2\u6570",isDim:!1}],data:[{date:"20200101",pv:100,uv:50},{date:"20200102",pv:120,uv:60},{date:"20200103",pv:140,uv:70},{date:"20200104",pv:160,uv:80}]}))},M.abrupt("return",l);case 18:case"end":return M.stop()}},B)}));function F(){return T.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"chart-render-demo"}},"column-demo":{component:Object($.dynamic)({loader:function(){var T=Object(x.a)(E.a.mark(function B(){var f,o,g,C;return E.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=e("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=i.sent,C=function(){return o.default.createElement(g.Column,{meta:[{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{pv:50,uv:20}]})},i.abrupt("return",C);case 11:case"end":return i.stop()}},B)}));function F(){return T.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo"}},"column-demo-1":{component:Object($.dynamic)({loader:function(){var T=Object(x.a)(E.a.mark(function B(){var f,o,g,C;return E.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=e("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=i.sent,C=function(){return o.default.createElement(g.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},i.abrupt("return",C);case 11:case"end":return i.stop()}},B)}));function F(){return T.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-1"}},"column-demo-2":{component:Object($.dynamic)({loader:function(){var T=Object(x.a)(E.a.mark(function B(){var f,o,g,C;return E.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=e("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=i.sent,C=function(){return o.default.createElement(g.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},i.abrupt("return",C);case 11:case"end":return i.stop()}},B)}));function F(){return T.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-2"}},"column-demo-3":{component:Object($.dynamic)({loader:function(){var T=Object(x.a)(E.a.mark(function B(){var f,o,g,C;return E.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=e("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=i.sent,C=function(){return o.default.createElement(g.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},i.abrupt("return",C);case 11:case"end":return i.stop()}},B)}));function F(){return T.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-3"}},"column-demo-4":{component:Object($.dynamic)({loader:function(){var T=Object(x.a)(E.a.mark(function B(){var f,o,g,C;return E.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=e("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=i.sent,C=function(){return o.default.createElement(g.Column,{inverted:!0,label:{position:"middle",layout:[{type:"interval-adjust-position"},{type:"interval-hide-overlap"},{type:"adjust-color"}]},meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},i.abrupt("return",C);case 11:case"end":return i.stop()}},B)}));function F(){return T.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-4"}},"line-demo":{component:Object($.dynamic)({loader:function(){var T=Object(x.a)(E.a.mark(function B(){var f,o,g,C;return E.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=e("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=i.sent,C=function(){return o.default.createElement(g.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},i.abrupt("return",C);case 11:case"end":return i.stop()}},B)}));function F(){return T.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo"}},"line-demo-1":{component:Object($.dynamic)({loader:function(){var T=Object(x.a)(E.a.mark(function B(){var f,o,g,C;return E.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=e("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=i.sent,C=function(){return o.default.createElement(g.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},i.abrupt("return",C);case 11:case"end":return i.stop()}},B)}));function F(){return T.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-1"}},"line-demo-2":{component:Object($.dynamic)({loader:function(){var T=Object(x.a)(E.a.mark(function B(){var f,o,g,C;return E.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=e("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=i.sent,C=function(){return o.default.createElement(g.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"},{id:"pv",name:"\u8BBF\u95EE\u91CF"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20,pv:120},{ds:"2020-12-31",page:"\u9996\u9875",uv:120,pv:1120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21,pv:121},{ds:"2021-01-01",page:"\u9996\u9875",uv:121,pv:1121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15,pv:115},{ds:"2021-01-02",page:"\u9996\u9875",uv:115,pv:1115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40,pv:140},{ds:"2021-01-03",page:"\u9996\u9875",uv:140,pv:1140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31,pv:131},{ds:"2021-01-04",page:"\u9996\u9875",uv:131,pv:1131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32,pv:132},{ds:"2021-01-05",page:"\u9996\u9875",uv:132,pv:1132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30,pv:130},{ds:"2021-01-06",page:"\u9996\u9875",uv:130,pv:1130}]})},i.abrupt("return",C);case 11:case"end":return i.stop()}},B)}));function F(){return T.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-2"}},"line-demo-3":{component:Object($.dynamic)({loader:function(){var T=Object(x.a)(E.a.mark(function B(){var f,o,g,C;return E.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=e("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=i.sent,C=function(){return o.default.createElement(g.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},i.abrupt("return",C);case 11:case"end":return i.stop()}},B)}));function F(){return T.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-3"}},"line-demo-4":{component:Object($.dynamic)({loader:function(){var T=Object(x.a)(E.a.mark(function B(){var f,o,g,C;return E.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=e("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=i.sent,C=function(){return o.default.createElement(g.Line,{withArea:!0,isStack:!0,isPercent:!0,meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},i.abrupt("return",C);case 11:case"end":return i.stop()}},B)}));function F(){return T.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-4"}},"pivot-table-demo":{component:Object($.dynamic)({loader:function(){var T=Object(x.a)(E.a.mark(function B(){var f,o,g,C;return E.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=e("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=i.sent,C=function(){return o.default.createElement(g.PivotTable,{style:{maxHeight:400,overflow:"auto"},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},i.abrupt("return",C);case 11:case"end":return i.stop()}},B)}));function F(){return T.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo"}},"pivot-table-demo-1":{component:Object($.dynamic)({loader:function(){var T=Object(x.a)(E.a.mark(function B(){var f,o,g,C;return E.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=e("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=i.sent,C=function(){return o.default.createElement(g.PivotTable,{style:{maxHeight:400,overflow:"auto"},cellRender:function(M,N,P){return o.default.createElement("div",null,o.default.createElement("p",null,"\u53C2\u6570\u8868\uFF1A"),o.default.createElement("p",{style:{color:["red","orange","yellow","green","blue"][Object.keys(N).length]}},M),o.default.createElement("p",null,JSON.stringify(N)),o.default.createElement("p",null,JSON.stringify(P)))},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},i.abrupt("return",C);case 11:case"end":return i.stop()}},B)}));function F(){return T.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-1"}},"pivot-table-demo-2":{component:Object($.dynamic)({loader:function(){var T=Object(x.a)(E.a.mark(function B(){var f,o,g,C,S,i,l;return E.a.wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return i=function(P,s){if(!s&&P&&P.__esModule)return P;if(P===null||typeof P!="object"&&typeof P!="function")return{default:P};var A=S(s);if(A&&A.has(P))return A.get(P);var d={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var p in P)if(p!=="default"&&Object.prototype.hasOwnProperty.call(P,p)){var m=a?Object.getOwnPropertyDescriptor(P,p):null;m&&(m.get||m.set)?Object.defineProperty(d,p,m):d[p]=P[p]}return d.default=P,A&&A.set(P,d),d},S=function(P){if(typeof WeakMap!="function")return null;var s=new WeakMap,A=new WeakMap;return(S=function(a){return a?A:s})(P)},f=e("K+nK"),M.t0=f,M.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return M.t1=M.sent,o=(0,M.t0)(M.t1),M.t2=i,M.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return M.t3=M.sent,g=(0,M.t2)(M.t3),M.next=15,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 15:return C=M.sent,l=function(){var P=(0,g.useState)(!1),s=(0,o.default)(P,2),A=s[0],d=s[1];return g.default.createElement(g.default.Fragment,null,g.default.createElement("label",null,"\u53EF\u5C55\u5F00/\u6536\u7F29\uFF1A",g.default.createElement("input",{type:"checkbox",value:A,onChange:function(){return d(!A)}})),g.default.createElement(C.PivotTable,{leftExpandable:A,showSubtotal:!1,meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]}))},M.abrupt("return",l);case 18:case"end":return M.stop()}},B)}));function F(){return T.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-2"}},"form-render-demo":{component:Object($.dynamic)({loader:function(){var T=Object(x.a)(E.a.mark(function B(){var f,o,g,C,S,i,l,y,M,N,P,s,A,d;return E.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return P=function(j,w){if(!w&&j&&j.__esModule)return j;if(j===null||typeof j!="object"&&typeof j!="function")return{default:j};var z=N(w);if(z&&z.has(j))return z.get(j);var _={},ie=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ge in j)if(ge!=="default"&&Object.prototype.hasOwnProperty.call(j,ge)){var vn=ie?Object.getOwnPropertyDescriptor(j,ge):null;vn&&(vn.get||vn.set)?Object.defineProperty(_,ge,vn):_[ge]=j[ge]}return _.default=j,z&&z.set(j,_),_},N=function(j){if(typeof WeakMap!="function")return null;var w=new WeakMap,z=new WeakMap;return(N=function(ie){return ie?z:w})(j)},f=e("K+nK"),p.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return p.t0=f,p.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return p.t1=p.sent,o=(0,p.t0)(p.t1),p.t2=f,p.next=13,e.e(62).then(e.bind(null,"fWQN"));case 13:return p.t3=p.sent,g=(0,p.t2)(p.t3),p.t4=f,p.next=18,e.e(63).then(e.bind(null,"mtLc"));case 18:return p.t5=p.sent,C=(0,p.t4)(p.t5),p.t6=f,p.next=23,e.e(65).then(e.bind(null,"yKVA"));case 23:return p.t7=p.sent,S=(0,p.t6)(p.t7),p.t8=f,p.next=28,e.e(59).then(e.bind(null,"879j"));case 28:return p.t9=p.sent,i=(0,p.t8)(p.t9),p.t10=f,p.next=33,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 33:return p.t11=p.sent,l=(0,p.t10)(p.t11),p.next=37,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 37:return y=p.sent,p.t12=P,p.next=41,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 41:return p.t13=p.sent,M=(0,p.t12)(p.t13),s={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},A=function(m){(0,S.default)(w,m);var j=(0,i.default)(w);function w(){return(0,g.default)(this,w),j.apply(this,arguments)}return(0,C.default)(w,[{key:"render",value:function(){var _=this.props.form;return l.default.createElement("div",null,l.default.createElement(M.default,{form:_,schema:s}),l.default.createElement(o.default,{type:"primary",onClick:_.submit},"\u63D0\u4EA4"))}}]),w}(l.default.Component),d=(0,M.connectForm)(A),p.abrupt("return",d);case 47:case"end":return p.stop()}},B)}));function F(){return T.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default connectForm(Demo);`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo"}},"form-render-demo-1":{component:Object($.dynamic)({loader:function(){var T=Object(x.a)(E.a.mark(function B(){var f,o,g,C,S,i,l,y,M,N;return E.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return l=function(d,a){if(!a&&d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var p=i(a);if(p&&p.has(d))return p.get(d);var m={},j=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var w in d)if(w!=="default"&&Object.prototype.hasOwnProperty.call(d,w)){var z=j?Object.getOwnPropertyDescriptor(d,w):null;z&&(z.get||z.set)?Object.defineProperty(m,w,z):m[w]=d[w]}return m.default=d,p&&p.set(d,m),m},i=function(d){if(typeof WeakMap!="function")return null;var a=new WeakMap,p=new WeakMap;return(i=function(j){return j?p:a})(d)},f=e("K+nK"),s.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return s.t0=f,s.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=f,s.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return s.t3=s.sent,g=(0,s.t2)(s.t3),s.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 17:return C=s.sent,s.t4=l,s.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 21:return s.t5=s.sent,S=(0,s.t4)(s.t5),y={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},M=function(){var d=(0,S.useForm)();return g.default.createElement("div",null,g.default.createElement(S.default,{form:d,schema:y}),g.default.createElement(o.default,{type:"primary",onClick:d.submit},"\u63D0\u4EA4"))},N=M,s.abrupt("return",N);case 27:case"end":return s.stop()}},B)}));function F(){return T.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo-1"}},"form-render-demo-2":{component:Object($.dynamic)({loader:function(){var T=Object(x.a)(E.a.mark(function B(){var f,o,g,C,S,i,l,y,M,N;return E.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return l=function(d,a){if(!a&&d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var p=i(a);if(p&&p.has(d))return p.get(d);var m={},j=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var w in d)if(w!=="default"&&Object.prototype.hasOwnProperty.call(d,w)){var z=j?Object.getOwnPropertyDescriptor(d,w):null;z&&(z.get||z.set)?Object.defineProperty(m,w,z):m[w]=d[w]}return m.default=d,p&&p.set(d,m),m},i=function(d){if(typeof WeakMap!="function")return null;var a=new WeakMap,p=new WeakMap;return(i=function(j){return j?p:a})(d)},f=e("K+nK"),s.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return s.t0=f,s.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=f,s.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return s.t3=s.sent,g=(0,s.t2)(s.t3),s.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 17:return C=s.sent,s.t4=l,s.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 21:return s.t5=s.sent,S=(0,s.t4)(s.t5),y={displayType:"row",labelWidth:60,type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F",type:"range",format:"date"},siteUrl:{title:"\u7F51\u5740",type:"string",placeholder:"\u6B64\u5904\u5FC5\u586B",required:!0,props:{addonBefore:"https://",addonAfter:".com"}}}},M=function(){var d=(0,S.useForm)(),a=function(m,j){j.length>0?alert("errors:"+JSON.stringify(j)):alert("formData:"+JSON.stringify(m,null,2))};return g.default.createElement("div",null,g.default.createElement(S.default,{form:d,schema:y,onFinish:a}),g.default.createElement(o.default,{type:"primary",onClick:d.submit},"\u63D0\u4EA4"))},N=M,s.abrupt("return",N);case 27:case"end":return s.stop()}},B)}));function F(){return T.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-demo-2"}},"migrate-demo":{component:Object($.dynamic)({loader:function(){var T=Object(x.a)(E.a.mark(function B(){var f,o,g,C,S,i,l,y;return E.a.wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return l=function(){var s=(0,g.useForm)(),A=function(a,p){p.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(p))):alert(JSON.stringify(a))};return o.default.createElement("div",null,o.default.createElement(g.default,{form:s,schema:i,onFinish:A}),o.default.createElement("button",{onClick:s.submit},"\u63D0\u4EA4"))},S=function(s,A){if(!A&&s&&s.__esModule)return s;if(s===null||typeof s!="object"&&typeof s!="function")return{default:s};var d=C(A);if(d&&d.has(s))return d.get(s);var a={},p=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var m in s)if(m!=="default"&&Object.prototype.hasOwnProperty.call(s,m)){var j=p?Object.getOwnPropertyDescriptor(s,m):null;j&&(j.get||j.set)?Object.defineProperty(a,m,j):a[m]=s[m]}return a.default=s,d&&d.set(s,a),a},C=function(s){if(typeof WeakMap!="function")return null;var A=new WeakMap,d=new WeakMap;return(C=function(p){return p?d:A})(s)},f=e("K+nK"),N.t0=f,N.next=7,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 7:return N.t1=N.sent,o=(0,N.t0)(N.t1),N.t2=S,N.next=12,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 12:return N.t3=N.sent,g=(0,N.t2)(N.t3),i={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}},y=l,N.abrupt("return",y);case 17:case"end":return N.stop()}},B)}));function F(){return T.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate-demo"}},"display-demo":{component:Object($.dynamic)({loader:function(){var T=Object(x.a)(E.a.mark(function B(){var f,o,g,C,S;return E.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return f=e("K+nK"),l.t0=f,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=f,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,g=(0,l.t2)(l.t3),C=function(M){return{type:"object",displayType:M,properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},objectName:{title:"\u5BF9\u8C61",bind:"obj",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},S=function(){return o.default.createElement("div",null,o.default.createElement("h2",null,"display: row"),o.default.createElement(g.default,{schema:C("row")}),o.default.createElement("h2",null,"display: column"),o.default.createElement(g.default,{schema:C("column")}))},l.abrupt("return",S);case 14:case"end":return l.stop()}},B)}));function F(){return T.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`},"demo/display.js":{import:"../demo/display",content:V}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo"}},"display-demo-1":{component:Object($.dynamic)({loader:function(){var T=Object(x.a)(E.a.mark(function B(){var f,o,g,C,S;return E.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return f=e("K+nK"),l.t0=f,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=f,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,g=(0,l.t2)(l.t3),C={type:"object",displayType:"inline",properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},S=function(){return o.default.createElement(g.default,{schema:C})},l.abrupt("return",S);case 14:case"end":return l.stop()}},B)}));function F(){return T.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:V}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-1"}},"display-demo-2":{component:Object($.dynamic)({loader:function(){var T=Object(x.a)(E.a.mark(function B(){var f,o,g,C,S;return E.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return f=e("K+nK"),l.t0=f,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=f,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,g=(0,l.t2)(l.t3),C={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0},check:{title:"box",type:"boolean",default:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},S=function(){return o.default.createElement(g.default,{readOnly:!0,schema:C})},l.abrupt("return",S);case 14:case"end":return l.stop()}},B)}));function F(){return T.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form readOnly schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:V}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-2"}},"display-demo-3":{component:Object($.dynamic)({loader:function(){var T=Object(x.a)(E.a.mark(function B(){var f,o,g,C,S;return E.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return f=e("K+nK"),l.t0=f,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=f,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,g=(0,l.t2)(l.t3),C={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0,width:"50%"},check:{title:"box",type:"boolean",default:!0,width:"50%",labelWidth:6},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},S=function(){return o.default.createElement(g.default,{labelWidth:"200",schema:C})},l.abrupt("return",S);case 14:case"end":return l.stop()}},B)}));function F(){return T.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form labelWidth="200" schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:V}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-3"}},"display-demo-4":{component:Object($.dynamic)({loader:function(){var T=Object(x.a)(E.a.mark(function B(){var f,o,g,C,S,i;return E.a.wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return f=e("K+nK"),y.t0=f,y.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return y.t1=y.sent,o=(0,y.t0)(y.t1),y.t2=f,y.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return y.t3=y.sent,g=(0,y.t2)(y.t3),C={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},S=function(){return o.default.createElement(g.default,{schema:C})},i=S,y.abrupt("return",i);case 15:case"end":return y.stop()}},B)}));function F(){return T.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:V}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-4"}},"display-demo-5":{component:Object($.dynamic)({loader:function(){var T=Object(x.a)(E.a.mark(function B(){var f,o,g,C,S,i;return E.a.wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return f=e("K+nK"),y.t0=f,y.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return y.t1=y.sent,o=(0,y.t0)(y.t1),y.t2=f,y.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return y.t3=y.sent,g=(0,y.t2)(y.t3),C={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},S=function(){return o.default.createElement(g.default,{schema:C})},i=S,y.abrupt("return",i);case 15:case"end":return y.stop()}},B)}));function F(){return T.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:V}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-5"}},"display-demo-6":{component:Object($.dynamic)({loader:function(){var T=Object(x.a)(E.a.mark(function B(){var f,o,g,C,S,i;return E.a.wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return f=e("K+nK"),y.t0=f,y.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return y.t1=y.sent,o=(0,y.t0)(y.t1),y.t2=f,y.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return y.t3=y.sent,g=(0,y.t2)(y.t3),C={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},S=function(){return o.default.createElement(g.default,{schema:C})},i=S,y.abrupt("return",i);case 15:case"end":return y.stop()}},B)}));function F(){return T.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:V}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-6"}},"display-demo-7":{component:Object($.dynamic)({loader:function(){var T=Object(x.a)(E.a.mark(function B(){var f,o,g,C,S,i;return E.a.wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return f=e("K+nK"),y.t0=f,y.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return y.t1=y.sent,o=(0,y.t0)(y.t1),y.t2=f,y.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return y.t3=y.sent,g=(0,y.t2)(y.t3),C={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},S=function(){return o.default.createElement(g.default,{schema:C})},i=S,y.abrupt("return",i);case 15:case"end":return y.stop()}},B)}));function F(){return T.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:V}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-7"}},"form-methods-demo":{component:Object($.dynamic)({loader:function(){var T=Object(x.a)(E.a.mark(function B(){var f,o,g,C,S,i,l,y,M,N,P,s,A;return E.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return P=function(m,j){if(!j&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var w=N(j);if(w&&w.has(m))return w.get(m);var z={},_=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ie in m)if(ie!=="default"&&Object.prototype.hasOwnProperty.call(m,ie)){var ge=_?Object.getOwnPropertyDescriptor(m,ie):null;ge&&(ge.get||ge.set)?Object.defineProperty(z,ie,ge):z[ie]=m[ie]}return z.default=m,w&&w.set(m,z),z},N=function(m){if(typeof WeakMap!="function")return null;var j=new WeakMap,w=new WeakMap;return(N=function(_){return _?w:j})(m)},f=e("K+nK"),a.next=5,e.e(17).then(e.t.bind(null,"lfLe",7));case 5:return a.t0=f,a.next=8,e.e(18).then(e.t.bind(null,"Cp9S",7));case 8:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return a.t2=f,a.next=15,e.e(12).then(e.t.bind(null,"4IMT",7));case 15:return a.t3=a.sent,g=(0,a.t2)(a.t3),a.next=19,e.e(14).then(e.t.bind(null,"tL+A",7));case 19:return a.t4=f,a.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return a.t5=a.sent,C=(0,a.t4)(a.t5),a.t6=f,a.next=27,Promise.resolve().then(e.bind(null,"tJVT"));case 27:return a.t7=a.sent,S=(0,a.t6)(a.t7),a.t8=P,a.next=32,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 32:return a.t9=a.sent,i=(0,a.t8)(a.t9),a.next=36,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 36:return l=a.sent,a.t10=P,a.next=40,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 40:return a.t11=a.sent,y=(0,a.t10)(a.t11),a.next=44,e.e(15).then(e.bind(null,"OH0R"));case 44:return M=a.sent,s=function(){var m=(0,y.useForm)(),j=(0,i.useState)({}),w=(0,S.default)(j,2),z=w[0],_=w[1],ie=function(){(0,M.fakeApi)("xxx/getForm").then(function(We){m.setValues({input1:"hello world",select1:"c"})})};(0,i.useEffect)(function(){(0,M.delay)(1e3).then(function(vn){_({type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}})})},[]);var ge=function(We,Me){Me.length>0?C.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(Me.map(function(Pn){return Pn.name}))):(0,M.fakeApi)("xxx/submit",We).then(function(Pn){return C.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})};return i.default.createElement("div",{style:{width:"400px"}},i.default.createElement(y.default,{form:m,schema:z,onFinish:ge}),i.default.createElement(o.default,null,i.default.createElement(g.default,{onClick:ie},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),i.default.createElement(g.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},A=s,a.abrupt("return",A);case 48:case"end":return a.stop()}},B)}));function F(){return T.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:ze}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo"}},"form-methods-demo-1":{component:Object($.dynamic)({loader:function(){var T=Object(x.a)(E.a.mark(function B(){var f,o,g,C,S,i,l,y,M,N,P,s,A;return E.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return N=function(m,j){if(!j&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var w=M(j);if(w&&w.has(m))return w.get(m);var z={},_=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ie in m)if(ie!=="default"&&Object.prototype.hasOwnProperty.call(m,ie)){var ge=_?Object.getOwnPropertyDescriptor(m,ie):null;ge&&(ge.get||ge.set)?Object.defineProperty(z,ie,ge):z[ie]=m[ie]}return z.default=m,w&&w.set(m,z),z},M=function(m){if(typeof WeakMap!="function")return null;var j=new WeakMap,w=new WeakMap;return(M=function(_){return _?w:j})(m)},f=e("K+nK"),a.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return a.t0=f,a.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.t2=f,a.next=13,Promise.resolve().then(e.bind(null,"PpiC"));case 13:return a.t3=a.sent,g=(0,a.t2)(a.t3),a.next=17,e.e(14).then(e.t.bind(null,"tL+A",7));case 17:return a.t4=f,a.next=20,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 20:return a.t5=a.sent,C=(0,a.t4)(a.t5),a.t6=f,a.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return a.t7=a.sent,S=(0,a.t6)(a.t7),a.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 29:return i=a.sent,a.t8=N,a.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 33:return a.t9=a.sent,l=(0,a.t8)(a.t9),a.next=37,e.e(15).then(e.bind(null,"OH0R"));case 37:return y=a.sent,P={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},s=function(){var m=(0,l.useForm)(),j=function(_,ie){ie.length>0?C.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(ie.map(function(ge){return ge.name}))):(0,y.fakeApi)("xxx/submit",_).then(function(ge){return C.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},w=function(_){var ie=_.data,ge=_.errors,vn=_.schema,We=(0,g.default)(_,["data","errors","schema"]);return(0,y.fakeApi)("xxx/validation").then(function(Me){return{name:"select1",error:["\u5916\u90E8\u6821\u9A8C\u9519\u8BEF"]}})};return S.default.createElement("div",{style:{width:"400px"}},S.default.createElement(l.default,{form:m,schema:P,beforeFinish:w,onFinish:j}),S.default.createElement(o.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},A=s,a.abrupt("return",A);case 42:case"end":return a.stop()}},B)}));function F(){return T.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:ze}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-1"}},"form-methods-demo-2":{component:Object($.dynamic)({loader:function(){var T=Object(x.a)(E.a.mark(function B(){var f,o,g,C,S,i,l,y,M,N,P,s,A;return E.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return N=function(m,j){if(!j&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var w=M(j);if(w&&w.has(m))return w.get(m);var z={},_=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ie in m)if(ie!=="default"&&Object.prototype.hasOwnProperty.call(m,ie)){var ge=_?Object.getOwnPropertyDescriptor(m,ie):null;ge&&(ge.get||ge.set)?Object.defineProperty(z,ie,ge):z[ie]=m[ie]}return z.default=m,w&&w.set(m,z),z},M=function(m){if(typeof WeakMap!="function")return null;var j=new WeakMap,w=new WeakMap;return(M=function(_){return _?w:j})(m)},f=e("K+nK"),a.next=5,e.e(17).then(e.t.bind(null,"lfLe",7));case 5:return a.t0=f,a.next=8,e.e(18).then(e.t.bind(null,"Cp9S",7));case 8:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return a.t2=f,a.next=15,e.e(12).then(e.t.bind(null,"4IMT",7));case 15:return a.t3=a.sent,g=(0,a.t2)(a.t3),a.next=19,e.e(14).then(e.t.bind(null,"tL+A",7));case 19:return a.t4=f,a.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return a.t5=a.sent,C=(0,a.t4)(a.t5),a.t6=f,a.next=27,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 27:return a.t7=a.sent,S=(0,a.t6)(a.t7),a.next=31,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 31:return i=a.sent,a.t8=N,a.next=35,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 35:return a.t9=a.sent,l=(0,a.t8)(a.t9),a.next=39,e.e(15).then(e.bind(null,"OH0R"));case 39:return y=a.sent,P={type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F\u8303\u56F4",type:"range",format:"date"}}},s=function(){var m=(0,l.useForm)(),j=function(_,ie){ie.length>0?C.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(ie.map(function(ge){return ge.name}))):(0,y.fakeApi)("xxx/submit",_).then(function(ge){return C.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},w=function(){(0,y.fakeApi)("xxx/getForm").then(function(_){m.setValues({startDate:"2020-04-04",endDate:"2020-04-24"})})};return S.default.createElement("div",{style:{width:"400px"}},S.default.createElement(l.default,{form:m,schema:P,onFinish:j}),S.default.createElement(o.default,null,S.default.createElement(g.default,{onClick:w},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),S.default.createElement(g.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},A=s,a.abrupt("return",A);case 44:case"end":return a.stop()}},B)}));function F(){return T.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:ze}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-2"}},"form-methods-demo-3":{component:Object($.dynamic)({loader:function(){var T=Object(x.a)(E.a.mark(function B(){var f,o,g,C,S,i,l,y,M,N,P,s;return E.a.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return M=function(p,m){if(!m&&p&&p.__esModule)return p;if(p===null||typeof p!="object"&&typeof p!="function")return{default:p};var j=y(m);if(j&&j.has(p))return j.get(p);var w={},z=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var _ in p)if(_!=="default"&&Object.prototype.hasOwnProperty.call(p,_)){var ie=z?Object.getOwnPropertyDescriptor(p,_):null;ie&&(ie.get||ie.set)?Object.defineProperty(w,_,ie):w[_]=p[_]}return w.default=p,j&&j.set(p,w),w},y=function(p){if(typeof WeakMap!="function")return null;var m=new WeakMap,j=new WeakMap;return(y=function(z){return z?j:m})(p)},f=e("K+nK"),d.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return d.t0=f,d.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return d.t1=d.sent,o=(0,d.t0)(d.t1),d.next=12,e.e(14).then(e.t.bind(null,"tL+A",7));case 12:return d.t2=f,d.next=15,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 15:return d.t3=d.sent,g=(0,d.t2)(d.t3),d.t4=M,d.next=20,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 20:return d.t5=d.sent,C=(0,d.t4)(d.t5),d.next=24,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 24:return S=d.sent,d.t6=M,d.next=28,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 28:return d.t7=d.sent,i=(0,d.t6)(d.t7),d.next=32,e.e(15).then(e.bind(null,"OH0R"));case 32:return l=d.sent,N={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select1:{title:"\u5355\u9009",type:"string",widget:"select"}}}}},P=function(){var p=(0,i.useForm)(),m=function(){p.setSchemaByPath("obj1.select1",{enum:["nouth","south","east","west"],enumNames:["\u4E1C","\u5357","\u897F","\u5317"]})},j=function(z,_){_.length>0?g.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(_.map(function(ie){return ie.name}))):g.default.info(JSON.stringify(z))};return C.default.createElement("div",{style:{width:"400px"}},C.default.createElement(i.default,{form:p,schema:N,onMount:m,onFinish:j}),C.default.createElement(o.default,{type:"primary",onClick:p.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},s=P,d.abrupt("return",s);case 37:case"end":return d.stop()}},B)}));function F(){return T.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:ze}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-3"}},"function-demo":{component:Object($.dynamic)({loader:function(){var T=Object(x.a)(E.a.mark(function B(){var f,o,g,C,S,i,l,y;return E.a.wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return S=function(s,A){if(!A&&s&&s.__esModule)return s;if(s===null||typeof s!="object"&&typeof s!="function")return{default:s};var d=C(A);if(d&&d.has(s))return d.get(s);var a={},p=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var m in s)if(m!=="default"&&Object.prototype.hasOwnProperty.call(s,m)){var j=p?Object.getOwnPropertyDescriptor(s,m):null;j&&(j.get||j.set)?Object.defineProperty(a,m,j):a[m]=s[m]}return a.default=s,d&&d.set(s,a),a},C=function(s){if(typeof WeakMap!="function")return null;var A=new WeakMap,d=new WeakMap;return(C=function(p){return p?d:A})(s)},f=e("K+nK"),N.t0=f,N.next=6,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 6:return N.t1=N.sent,o=(0,N.t0)(N.t1),N.t2=S,N.next=11,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 11:return N.t3=N.sent,g=(0,N.t2)(N.t3),i={type:"object",properties:{select1:{title:"\u5355\u9009",description:"\u5C1D\u8BD5\u9009\u62E9\u201C\u663E\u793A\u8F93\u5165\u6846\u201D",type:"string",enum:["a","b"],enumNames:["\u9690\u85CF\u8F93\u5165\u6846","\u663E\u793A\u8F93\u5165\u6846"],disabled:"{{rootValue.input1.length > 5}}",default:"a"},input1:{title:"\u8F93\u5165\u6846",description:"\u5C1D\u8BD5\u8F93\u5165\u8D85\u8FC75\u4E2A\u5B57\u7B26",type:"string",hidden:'{{formData.select1 == "a"}}'}}},l=function(){var s=(0,g.useForm)();return o.default.createElement(g.default,{form:s,schema:i})},y=l,N.abrupt("return",y);case 17:case"end":return N.stop()}},B)}));function F(){return T.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo1;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo"}},"function-demo-1":{component:Object($.dynamic)({loader:function(){var T=Object(x.a)(E.a.mark(function B(){var f,o,g,C,S;return E.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return f=e("K+nK"),l.t0=f,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=f,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return l.t3=l.sent,g=(0,l.t2)(l.t3),l.next=13,e.e(19).then(e.bind(null,"8iYR"));case 13:return C=l.sent,S=function(){return o.default.createElement(g.default,{schema:C.expression})},l.abrupt("return",S);case 16:case"end":return l.stop()}},B)}));function F(){return T.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { expression } from '../json/schema';

export default () => <FR schema={expression} />;`},"demo/FR.jsx":{import:"../demo/FR",content:Ne},"json/schema.js":{import:"../json/schema",content:ve}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo-1"}},"lifeCycle-demo":{component:Object($.dynamic)({loader:function(){var T=Object(x.a)(E.a.mark(function B(){var f,o,g,C,S,i,l,y,M;return E.a.wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return S=function(A,d){if(!d&&A&&A.__esModule)return A;if(A===null||typeof A!="object"&&typeof A!="function")return{default:A};var a=C(d);if(a&&a.has(A))return a.get(A);var p={},m=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var j in A)if(j!=="default"&&Object.prototype.hasOwnProperty.call(A,j)){var w=m?Object.getOwnPropertyDescriptor(A,j):null;w&&(w.get||w.set)?Object.defineProperty(p,j,w):p[j]=A[j]}return p.default=A,a&&a.set(A,p),p},C=function(A){if(typeof WeakMap!="function")return null;var d=new WeakMap,a=new WeakMap;return(C=function(m){return m?a:d})(A)},P.t0=S,P.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return P.t1=P.sent,f=(0,P.t0)(P.t1),P.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 9:return o=P.sent,P.t2=S,P.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 13:return P.t3=P.sent,g=(0,P.t2)(P.t3),i=function(A){return new Promise(function(d){return setTimeout(d,A)})},l={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u4E0B\u62C9\u9009\u6846",description:"\u52A0\u8F7D\u4E2D...",type:"string",enum:[],widget:"select"}}},y=function(){var A=(0,g.useForm)(),d=function(){A.setValues({input1:"hello world"}),i(3e3).then(function(p){A.setSchemaByPath("select1",{description:"",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]})})};return f.default.createElement(g.default,{form:A,schema:l,onMount:d})},M=y,P.abrupt("return",M);case 20:case"end":return P.stop()}},B)}));function F(){return T.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"lifeCycle-demo"}},"watch-demo":{component:Object($.dynamic)({loader:function(){var T=Object(x.a)(E.a.mark(function B(){var f,o,g,C,S,i,l,y;return E.a.wrap(function(N){for(;;)switch(N.prev=N.next){case 0:return S=function(s,A){if(!A&&s&&s.__esModule)return s;if(s===null||typeof s!="object"&&typeof s!="function")return{default:s};var d=C(A);if(d&&d.has(s))return d.get(s);var a={},p=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var m in s)if(m!=="default"&&Object.prototype.hasOwnProperty.call(s,m)){var j=p?Object.getOwnPropertyDescriptor(s,m):null;j&&(j.get||j.set)?Object.defineProperty(a,m,j):a[m]=s[m]}return a.default=s,d&&d.set(s,a),a},C=function(s){if(typeof WeakMap!="function")return null;var A=new WeakMap,d=new WeakMap;return(C=function(p){return p?d:A})(s)},N.t0=S,N.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return N.t1=N.sent,f=(0,N.t0)(N.t1),N.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 9:return o=N.sent,N.t2=S,N.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 13:return N.t3=N.sent,g=(0,N.t2)(N.t3),i={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"}}},l=function(){var s=(0,g.useForm)(),A={"#":function(a){console.log("\u8868\u5355\u7684\u65F6\u65F6\u6570\u636E\u4E3A\uFF1A",a)},input1:function(a){s.setValueByPath("input2",a)}};return f.default.createElement(g.default,{form:s,schema:i,watch:A})},y=l,N.abrupt("return",y);case 19:case"end":return N.stop()}},B)}));function F(){return T.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo"}},"watch-demo-1":{component:Object($.dynamic)({loader:function(){var T=Object(x.a)(E.a.mark(function B(){var f,o,g,C,S,i,l,y,M,N;return E.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return l=function(d,a){if(!a&&d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var p=i(a);if(p&&p.has(d))return p.get(d);var m={},j=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var w in d)if(w!=="default"&&Object.prototype.hasOwnProperty.call(d,w)){var z=j?Object.getOwnPropertyDescriptor(d,w):null;z&&(z.get||z.set)?Object.defineProperty(m,w,z):m[w]=d[w]}return m.default=d,p&&p.set(d,m),m},i=function(d){if(typeof WeakMap!="function")return null;var a=new WeakMap,p=new WeakMap;return(i=function(j){return j?p:a})(d)},f=e("K+nK"),s.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return s.t0=f,s.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=l,s.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return s.t3=s.sent,g=(0,s.t2)(s.t3),s.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 17:return C=s.sent,s.t4=l,s.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 21:return s.t5=s.sent,S=(0,s.t4)(s.t5),y={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"radio"}}}}},M=function(){var d=(0,S.useForm)(),a=function(j,w){w.length>0?alert("errorFields:"+JSON.stringify(w)):alert("formData:"+JSON.stringify(j,null,2))},p={input1:function(j){j.length>2?d.setSchemaByPath("obj1.select",function(w){var z=w.enumNames;return{enumNames:z.map(function(_){return _+"a"})}}):d.setSchemaByPath("obj1.select",{enumNames:["\u65E9","\u4E2D","\u665A"]})}};return g.default.createElement("div",null,g.default.createElement(S.default,{form:d,schema:y,onFinish:a,watch:p}),g.default.createElement(o.default,{type:"",style:{marginRight:8},onClick:function(){return d.setSchemaByPath("input2",{title:"\u7F16\u8F91\u6846",format:"textarea"})}},"\u5C06 input \u6539\u4E3A textarea"),g.default.createElement(o.default,{type:"primary",onClick:d.submit},"\u63D0\u4EA4"))},N=M,s.abrupt("return",N);case 27:case"end":return s.stop()}},B)}));function F(){return T.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo-1"}},"widget-demo":{component:Object($.dynamic)({loader:function(){var T=Object(x.a)(E.a.mark(function B(){var f,o,g,C,S,i,l,y,M,N,P,s,A;return E.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return M=function(m,j){if(!j&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var w=y(j);if(w&&w.has(m))return w.get(m);var z={},_=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ie in m)if(ie!=="default"&&Object.prototype.hasOwnProperty.call(m,ie)){var ge=_?Object.getOwnPropertyDescriptor(m,ie):null;ge&&(ge.get||ge.set)?Object.defineProperty(z,ie,ge):z[ie]=m[ie]}return z.default=m,w&&w.set(m,z),z},y=function(m){if(typeof WeakMap!="function")return null;var j=new WeakMap,w=new WeakMap;return(y=function(_){return _?w:j})(m)},f=e("K+nK"),a.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return a.t0=f,a.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return a.t1=a.sent,o=(0,a.t0)(a.t1),a.next=12,Promise.all([e.e(3),e.e(60)]).then(e.t.bind(null,"cUip",7));case 12:return a.t2=f,a.next=15,Promise.all([e.e(0),e.e(12),e.e(58),e.e(61)]).then(e.t.bind(null,"iJl9",7));case 15:return a.t3=a.sent,g=(0,a.t2)(a.t3),a.t4=f,a.next=20,e.e(64).then(e.bind(null,"0Owb"));case 20:return a.t5=a.sent,C=(0,a.t4)(a.t5),a.t6=M,a.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return a.t7=a.sent,S=(0,a.t6)(a.t7),a.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 29:return i=a.sent,a.t8=M,a.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 33:return a.t9=a.sent,l=(0,a.t8)(a.t9),N={type:"object",properties:{string:{title:"\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6",type:"string",widget:"site"},select:{title:"\u5355\u9009",type:"number",enum:[1,2,3],enumNames:["\u9009\u98791","\u9009\u98792","\u9009\u98793"]}}},P=function(m){return S.default.createElement(g.default,(0,C.default)({addonBefore:"http://",addonAfter:".com"},m))},s=function(){var m=(0,l.useForm)(),j=function(){};return S.default.createElement("div",null,S.default.createElement(l.default,{form:m,schema:N,widgets:{site:P},onFinish:function(z){return alert(JSON.stringify(z,null,2))}}),S.default.createElement(o.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4"))},A=s,a.abrupt("return",A);case 40:case"end":return a.stop()}},B)}));function F(){return T.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},identifier:"widget-demo"}},"schema-demo":{component:Object($.dynamic)({loader:function(){var T=Object(x.a)(E.a.mark(function B(){var f,o,g,C,S;return E.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return f=e("K+nK"),l.t0=f,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=f,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return l.t3=l.sent,g=(0,l.t2)(l.t3),l.next=13,e.e(19).then(e.bind(null,"8iYR"));case 13:return C=l.sent,S=function(){return o.default.createElement(g.default,{schema:C.basic})},l.abrupt("return",S);case 16:case"end":return l.stop()}},B)}));function F(){return T.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { basic } from '../json/schema';

export default () => <FR schema={basic} />;`},"demo/FR.jsx":{import:"../demo/FR",content:Ne},"json/schema.js":{import:"../json/schema",content:ve}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo"}},"docs-playground":{component:Object($.dynamic)({loader:function(){var T=Object(x.a)(E.a.mark(function B(){return E.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"BASV"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},B)}));function F(){return T.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:Un},"main.js":{import:"./main",content:je},"json/simplest.json":{import:"./json/simplest.json",content:ln},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:Bn},"monaco/index.js":{import:"./monaco",content:Rn},"theme.css":{import:"./theme.css",content:pn},"index.css":{import:"./index.css",content:Qe}},dependencies:{antd:{version:"4.15.4",css:"antd/dist/antd.css"},react:{version:"^16.0.0"},"react-dom":{version:"^16.0.0"},"deep-equal":{version:"2.0.5"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.3.2"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-simple-code-editor":{version:"0.11.0"},prismjs:{version:"1.23.0"}},identifier:"docs-playground"}},"table-render-advanced":{component:Object($.dynamic)({loader:function(){var T=Object(x.a)(E.a.mark(function B(){return E.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"7ZP+"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},B)}));function F(){return T.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{tsx:Ln}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.0.5"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"1.x"}},transform:!0,defaultShowCode:!0,identifier:"table-render-advanced"}},"table-render-demo":{component:Object($.dynamic)({loader:function(){var T=Object(x.a)(E.a.mark(function B(){var f,o,g,C,S,i,l,y,M;return E.a.wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return f=e("K+nK"),P.t0=f,P.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return P.t1=P.sent,o=(0,P.t0)(P.t1),P.next=8,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(57)]).then(e.bind(null,"P2DI"));case 8:for(g=P.sent,C=[],S=0;S<6;S++)C.push({id:S.toString(),title:"\u6807\u9898".concat(S+1),created_at:new Date().getTime()});return i={type:"object",properties:{string:{title:"\u6807\u9898",type:"string","ui:width":"30%"},created_at:{title:"\u521B\u5EFA\u65F6\u95F4",type:"string",format:"date","ui:width":"30%"}}},l=[{title:"\u6807\u9898",dataIndex:"title"},{title:"\u521B\u5EFA\u65F6\u95F4",key:"since",dataIndex:"created_at",valueType:"date"},{title:"\u64CD\u4F5C",render:function(A,d){return o.default.createElement("a",{onClick:function(){return alert(A.title)}},"\u7F16\u8F91")}}],y=function(){var A=function(){return{rows:C,total:C.length}};return o.default.createElement(g.TableProvider,null,o.default.createElement(g.Search,{schema:i,api:A}),o.default.createElement(g.Table,{headerTitle:"\u6700\u7B80\u8868\u683C",columns:l,rowKey:"id"}))},M=y,P.abrupt("return",M);case 16:case"end":return P.stop()}},B)}));function F(){return T.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Wrapper;`}},dependencies:{react:{version:">=16.8.0"},"table-render":{version:"1.0.5"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.x"}},transform:!0,defaultShowCode:!0,identifier:"table-render-demo"}},"generator-demo":{component:Object($.dynamic)({loader:function(){var T=Object(x.a)(E.a.mark(function B(){var f,o,g,C,S,i;return E.a.wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return f=e("K+nK"),y.t0=f,y.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return y.t1=y.sent,o=(0,y.t0)(y.t1),y.t2=f,y.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(56)]).then(e.bind(null,"nYSz"));case 9:return y.t3=y.sent,g=(0,y.t2)(y.t3),C={schema:{type:"object",properties:{inputName:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string"}}},displayType:"row",showDescIcon:!0,labelWidth:120},S=function(){return o.default.createElement("div",{style:{height:"80vh"}},o.default.createElement(g.default,{defaultValue:C}))},i=S,y.abrupt("return",i);case 15:case"end":return y.stop()}},B)}));function F(){return T.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.0.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"generator-demo"}},"generator-modal":{component:Object($.dynamic)({loader:function(){var T=Object(x.a)(E.a.mark(function B(){return E.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"PPgD"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},B)}));function F(){return T.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:wn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.0.0"},"react-dom":{version:">=16.9.0"}},identifier:"generator-modal"}},"generator-transformer":{component:Object($.dynamic)({loader:function(){var T=Object(x.a)(E.a.mark(function B(){return E.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"jktF"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},B)}));function F(){return T.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:Sn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.0.0"},"react-dom":{version:">=16.9.0"}},identifier:"generator-transformer"}},"generator-settings":{component:Object($.dynamic)({loader:function(){var T=Object(x.a)(E.a.mark(function B(){return E.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"M63W"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},B)}));function F(){return T.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:we}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.0.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-settings"}},"generator-playground":{component:Object($.dynamic)({loader:function(){var T=Object(x.a)(E.a.mark(function B(){return E.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"TYW4"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},B)}));function F(){return T.apply(this,arguments)}return F}()}),previewerProps:{sources:{_:{jsx:qn},"index.less":{import:"./index.less",content:$n}},dependencies:{react:{version:">=16.8.0"},umi:{version:"3.4.15"},"fr-generator":{version:"2.0.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-playground"}}}},Jn06:function(Tn,yn,e){"use strict";e.r(yn);var x=e("q1tI"),n=e.n(x),E=e("dEAq"),$=e.n(E),oe=e("0zqC"),V=e("ZpkN"),ze=e("JjdP"),Ne=n.a.memo(ze.default["generator-demo"].component),ve=n.a.memo(ze.default["generator-modal"].component),Un=n.a.memo(ze.default["generator-transformer"].component),je=n.a.memo(ze.default["generator-settings"].component);yn.default=ln=>(n.a.useEffect(()=>{ln!=null&&ln.location.hash&&E.AnchorLink.scrollToAnchor(decodeURIComponent(ln.location.hash.slice(1)))},[]),n.a.createElement(n.a.Fragment,null,n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"markdown"},n.a.createElement("h2",{id:"\u5982\u4F55\u4F7F\u7528"},n.a.createElement(E.AnchorLink,{to:"#\u5982\u4F55\u4F7F\u7528","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u5982\u4F55\u4F7F\u7528"),n.a.createElement("h3",{id:"\u5B89\u88C5"},n.a.createElement(E.AnchorLink,{to:"#\u5B89\u88C5","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u5B89\u88C5"),n.a.createElement(V.a,{code:"npm i fr-generator",lang:"bash"}),n.a.createElement("h3",{id:"\u4EE3\u7801\u6F14\u793A"},n.a.createElement(E.AnchorLink,{to:"#\u4EE3\u7801\u6F14\u793A","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u4EE3\u7801\u6F14\u793A")),n.a.createElement(oe.default,ze.default["generator-demo"].previewerProps,n.a.createElement(Ne,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h2",{id:"api"},n.a.createElement(E.AnchorLink,{to:"#api","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"API"),n.a.createElement("h3",{id:"props"},n.a.createElement(E.AnchorLink,{to:"#props","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Props"),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u53C2\u6570"),n.a.createElement("th",null,"\u8BF4\u660E"),n.a.createElement("th",null,"\u7C7B\u578B"),n.a.createElement("th",null,"\u9ED8\u8BA4\u503C"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"defaultValue"),n.a.createElement("td",null,"\u9ED8\u8BA4\u8868\u5355 schema"),n.a.createElement("td",null,n.a.createElement("code",null,"object")),n.a.createElement("td",null,n.a.createElement("code",null,"DEFAULT_SCHEMA"))),n.a.createElement("tr",null,n.a.createElement("td",null,"transformer"),n.a.createElement("td",null,"schema \u53CC\u5411\u8F6C\u6362"),n.a.createElement("td",null,n.a.createElement("code",null,"object")),n.a.createElement("td",null,n.a.createElement("code",null,"{"," fromFormRender, toFormRender ","}"))),n.a.createElement("tr",null,n.a.createElement("td",null,"extraButtons"),n.a.createElement("td",null,"\u64CD\u4F5C\u680F\u6309\u94AE"),n.a.createElement("td",null,n.a.createElement("code",null,"array")),n.a.createElement("td",null,n.a.createElement("code",null,"extraButton[]"))),n.a.createElement("tr",null,n.a.createElement("td",null,"settings"),n.a.createElement("td",null,"\u5DE6\u53F3\u4FA7\u680F\u914D\u7F6E"),n.a.createElement("td",null,n.a.createElement("code",null,"array")),n.a.createElement("td",null,n.a.createElement(E.Link,{to:"https://github.com/alibaba/form-render/blob/master/tools/schema-generator/src/Settings/index.js#L513"},n.a.createElement("code",null,"defaultSettings")))),n.a.createElement("tr",null,n.a.createElement("td",null,"commonSettings"),n.a.createElement("td",null,"\u901A\u7528\u914D\u7F6E"),n.a.createElement("td",null,n.a.createElement("code",null,"object")),n.a.createElement("td",null,n.a.createElement(E.Link,{to:"https://github.com/alibaba/form-render/blob/master/tools/schema-generator/src/Settings/index.js#L2"},n.a.createElement("code",null,"defaultCommonSettings")))),n.a.createElement("tr",null,n.a.createElement("td",null,"globalSettings"),n.a.createElement("td",null,"\u5168\u5C40\u914D\u7F6E"),n.a.createElement("td",null,n.a.createElement("code",null,"object")),n.a.createElement("td",null,n.a.createElement(E.Link,{to:"https://github.com/alibaba/form-render/blob/master/tools/schema-generator/src/Settings/index.js#L513"},n.a.createElement("code",null,"defaultGlobalSettings")))),n.a.createElement("tr",null,n.a.createElement("td",null,"widgets"),n.a.createElement("td",null,"\u81EA\u5B9A\u4E49\u7EC4\u4EF6"),n.a.createElement("td",null,n.a.createElement("code",null,"object")),n.a.createElement("td",null,n.a.createElement("code",null,"{","}"))))),n.a.createElement("h4",{id:"extrabutton"},n.a.createElement(E.AnchorLink,{to:"#extrabutton","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"extraButton"),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u5C5E\u6027"),n.a.createElement("th",null,"\u8BF4\u660E"),n.a.createElement("th",null,"\u7C7B\u578B"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"text"),n.a.createElement("td",null,"\u6309\u94AE\u6587\u6848"),n.a.createElement("td",null,n.a.createElement("code",null,"string"))),n.a.createElement("tr",null,n.a.createElement("td",null,"onClick"),n.a.createElement("td",null,"\u6309\u94AE\u70B9\u51FB\u56DE\u8C03\u51FD\u6570"),n.a.createElement("td",null,n.a.createElement("code",null,"(event) => void"))))),n.a.createElement("p",null,"\u652F\u6301 antd \u6309\u94AE\u7EC4\u4EF6\u7684\u6240\u6709\u5176\u4ED6\u5C5E\u6027 ",n.a.createElement(E.Link,{to:"https://ant.design/components/button-cn/#API"},"https://ant.design/components/button-cn/#API")),n.a.createElement("h3",{id:"events"},n.a.createElement(E.AnchorLink,{to:"#events","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Events"),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u4E8B\u4EF6\u540D"),n.a.createElement("th",null,"\u8BF4\u660E"),n.a.createElement("th",null,"\u56DE\u8C03\u53C2\u6570"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"onChange"),n.a.createElement("td",null,"\u8868\u5355 data \u53D8\u5316\u56DE\u8C03"),n.a.createElement("td",null,"\u8868\u5355\u7684 data")),n.a.createElement("tr",null,n.a.createElement("td",null,"onSchemaChange"),n.a.createElement("td",null,"\u8868\u5355 schema \u53D8\u5316\u56DE\u8C03"),n.a.createElement("td",null,"\u5BFC\u51FA\u7684 schema")))),n.a.createElement("h3",{id:"methods"},n.a.createElement(E.AnchorLink,{to:"#methods","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Methods"),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u4E8B\u4EF6\u540D"),n.a.createElement("th",null,"\u8BF4\u660E"),n.a.createElement("th",null,"\u5165\u53C2"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"getValue"),n.a.createElement("td",null,"\u83B7\u53D6\u5BFC\u51FA\u7684 schema \u503C"),n.a.createElement("td",null,"-")),n.a.createElement("tr",null,n.a.createElement("td",null,"setValue"),n.a.createElement("td",null,"\u4ECE\u5916\u90E8\u5F3A\u5236\u4FEE\u6539 schema"),n.a.createElement("td",null,n.a.createElement("code",null,"schema"))),n.a.createElement("tr",null,n.a.createElement("td",null,"copyValue"),n.a.createElement("td",null,"\u5C06\u73B0\u6709 schema \u62F7\u8D1D\u5230\u526A\u8D34\u677F"),n.a.createElement("td",null,"-")))),n.a.createElement("h2",{id:"\u6848\u4F8B\u6F14\u793A"},n.a.createElement(E.AnchorLink,{to:"#\u6848\u4F8B\u6F14\u793A","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u6848\u4F8B\u6F14\u793A"),n.a.createElement("h3",{id:"\u6D6E\u7A97\u63A5\u5165"},n.a.createElement(E.AnchorLink,{to:"#\u6D6E\u7A97\u63A5\u5165","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u6D6E\u7A97\u63A5\u5165"),n.a.createElement("p",null,"\u7528\u4E8E schema \u7684\u53EF\u89C6\u5316\u4FEE\u6539")),n.a.createElement(oe.default,ze.default["generator-modal"].previewerProps,n.a.createElement(ve,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h3",{id:"schema-\u4E92\u8F6C"},n.a.createElement(E.AnchorLink,{to:"#schema-\u4E92\u8F6C","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"Schema \u4E92\u8F6C"),n.a.createElement("p",null,"\u4F7F\u7528 ",n.a.createElement("code",null,"transformer")," \u8FD9\u4E2A props\uFF0C\u8FDB\u884C schema \u7684\u4E92\u8F6C")),n.a.createElement(oe.default,ze.default["generator-transformer"].previewerProps,n.a.createElement(Un,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h3",{id:"\u4FA7\u680F\u914D\u7F6E"},n.a.createElement(E.AnchorLink,{to:"#\u4FA7\u680F\u914D\u7F6E","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u4FA7\u680F\u914D\u7F6E"),n.a.createElement("p",null,"\u4F7F\u7528 settings/commonSettings \u81EA\u7531\u914D\u7F6E\u5DE6\u53F3\u4FA7\u680F\u5185\u5BB9\uFF0C\u5E76\u4F7F\u7528 widgets \u6CE8\u5165\u548C\u4F7F\u7528\u81EA\u5B9A\u4E49\u7EC4\u4EF6"),n.a.createElement("p",null,"\u201C\u670D\u52A1\u7AEF\u4E0B\u62C9\u9009\u6846\u201D\u662F\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u3002")),n.a.createElement(oe.default,ze.default["generator-settings"].previewerProps,n.a.createElement(je,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h2",{id:"\u5E38\u89C1\u95EE\u9898"},n.a.createElement(E.AnchorLink,{to:"#\u5E38\u89C1\u95EE\u9898","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u5E38\u89C1\u95EE\u9898"),n.a.createElement("p",null,n.a.createElement("strong",null,"1\u3001\u5982\u4F55\u63A7\u5236\u7F16\u8F91\u5668\u9AD8\u5EA6")),n.a.createElement("p",null,"\u7ED9\u7EC4\u4EF6\u5916\u5C42\u8981\u5305\u88F9\u7684 div \u8BBE\u7F6E\u9AD8\u5EA6\u5373\u53EF\uFF0C\u5426\u5219\u4E3A\u9ED8\u8BA4\u503C min-height: 30vh")))))},TIsu:function(Tn,yn,e){},Zs1V:function(Tn){Tn.exports=JSON.parse("{}")},p8sG:function(Tn,yn,e){"use strict";Tn.exports=e("80pN")}}]);
