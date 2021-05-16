(window.webpackJsonp=window.webpackJsonp||[]).push([[31,9],{"0zqC":function(Mn,gn,e){"use strict";e.r(gn);var Y=e("tJVT"),n=e("q1tI"),C=e.n(n),$=e("wx14"),de=e("rePB"),V=e("ODXe"),Qe=e("U8pU"),Ae=e("Ff2n"),ve=e("VTBJ"),En=e("TSYQ"),Fe=e.n(En),Tn=e("Zm9Q"),wn=e("5Z9U"),Rn=e("6cGi"),fn=e("KQm4"),Ze=e("wgJM"),$n=e("t23M");function Wn(t){var a=Object(n.useRef)(),l=Object(n.useRef)(!1);function h(){for(var b=arguments.length,v=new Array(b),O=0;O<b;O++)v[O]=arguments[O];l.current||(Ze.a.cancel(a.current),a.current=Object(Ze.a)(function(){t.apply(void 0,v)}))}return Object(n.useEffect)(function(){return function(){l.current=!0,Ze.a.cancel(a.current)}},[]),h}function Sn(t){var a=Object(n.useRef)([]),l=Object(n.useState)({}),h=Object(V.a)(l,2),b=h[1],v=Object(n.useRef)(typeof t=="function"?t():t),O=Wn(function(){var W=v.current;a.current.forEach(function(K){W=K(W)}),a.current=[],v.current=W,b({})});function R(W){a.current.push(W),O()}return[v.current,R]}var we=e("4IlW");function qn(t,a){var l,h=t.prefixCls,b=t.id,v=t.active,O=t.rtl,R=t.tab,W=R.key,K=R.tab,L=R.disabled,G=R.closeIcon,J=t.tabBarGutter,se=t.tabPosition,X=t.closable,Q=t.renderWrapper,ue=t.removeAriaLabel,U=t.editable,q=t.onClick,re=t.onRemove,Z=t.onFocus,oe="".concat(h,"-tab");n.useEffect(function(){return re},[]);var k={};se==="top"||se==="bottom"?k[O?"marginLeft":"marginRight"]=J:k.marginBottom=J;var be=U&&X!==!1&&!L;function ne(ae){L||q(ae)}function ce(ae){ae.preventDefault(),ae.stopPropagation(),U.onEdit("remove",{key:W,event:ae})}var me=n.createElement("div",{key:W,ref:a,className:Fe()(oe,(l={},Object(de.a)(l,"".concat(oe,"-with-remove"),be),Object(de.a)(l,"".concat(oe,"-active"),v),Object(de.a)(l,"".concat(oe,"-disabled"),L),l)),style:k,onClick:ne},n.createElement("div",{role:"tab","aria-selected":v,id:b&&"".concat(b,"-tab-").concat(W),className:"".concat(oe,"-btn"),"aria-controls":b&&"".concat(b,"-panel-").concat(W),"aria-disabled":L,tabIndex:L?null:0,onClick:function(H){H.stopPropagation(),ne(H)},onKeyDown:function(H){[we.a.SPACE,we.a.ENTER].includes(H.which)&&(H.preventDefault(),ne(H))},onFocus:Z},K),be&&n.createElement("button",{type:"button","aria-label":ue||"remove",tabIndex:0,className:"".concat(oe,"-remove"),onClick:function(H){H.stopPropagation(),ce(H)}},G||U.removeIcon||"\xD7"));return Q&&(me=Q(me)),me}var Vn=n.forwardRef(qn),at={width:0,height:0,left:0,top:0};function M(t,a,l){return Object(n.useMemo)(function(){for(var h,b=new Map,v=a.get((h=t[0])===null||h===void 0?void 0:h.key)||at,O=v.left+v.width,R=0;R<t.length;R+=1){var W=t[R].key,K=a.get(W);if(!K){var L;K=a.get((L=t[R-1])===null||L===void 0?void 0:L.key)||at}var G=b.get(W)||Object(ve.a)({},K);G.right=O-G.left-G.width,b.set(W,G)}return b},[t.map(function(h){return h.key}).join("_"),a,l])}var N={width:0,height:0,left:0,top:0,right:0};function T(t,a,l,h,b){var v=b.tabs,O=b.tabPosition,R=b.rtl,W,K,L;["top","bottom"].includes(O)?(W="width",K=R?"right":"left",L=Math.abs(a.left)):(W="height",K="top",L=-a.top);var G=a[W],J=l[W],se=h[W],X=G;return J+se>G&&(X=G-se),Object(n.useMemo)(function(){if(!v.length)return[0,0];for(var Q=v.length,ue=Q,U=0;U<Q;U+=1){var q=t.get(v[U].key)||N;if(q[K]+q[W]>L+X){ue=U-1;break}}for(var re=0,Z=Q-1;Z>=0;Z-=1){var oe=t.get(v[Z].key)||N;if(oe[K]<L){re=Z+1;break}}return[re,ue]},[t,L,X,O,v.map(function(Q){return Q.key}).join("_"),R])}var f=e("Gytx"),o=e.n(f),g=e("Kwbf");function E(t,a){var l=t.prefixCls,h=t.invalidate,b=t.item,v=t.renderItem,O=t.responsive,R=t.registerSize,W=t.itemKey,K=t.className,L=t.style,G=t.children,J=t.display,se=t.order,X=t.component,Q=X===void 0?"div":X,ue=Object(Ae.a)(t,["prefixCls","invalidate","item","renderItem","responsive","registerSize","itemKey","className","style","children","display","order","component"]),U=O&&!J;function q(be){R(W,be)}n.useEffect(function(){return function(){q(null)}},[]);var re=v&&b!==void 0?v(b):G,Z;h||(Z={opacity:U?0:1,height:U?0:void 0,overflowY:U?"hidden":void 0,order:O?se:void 0,pointerEvents:U?"none":void 0});var oe={};U&&(oe["aria-hidden"]=!0);var k=n.createElement(Q,Object($.a)({className:Fe()(!h&&l,K),style:Object(ve.a)(Object(ve.a)({},Z),L)},oe,ue,{ref:a}),re);return O&&(k=n.createElement($n.default,{onResize:function(ne){var ce=ne.offsetWidth;q(ce)}},k)),k}var S=n.forwardRef(E);S.displayName="Item";var i=S;function u(){var t=Object(n.useState)({}),a=Object(V.a)(t,2),l=a[1],h=Object(n.useRef)([]),b=Object(n.useRef)(!1),v=0,O=0;Object(n.useEffect)(function(){return function(){b.current=!0}},[]);function R(W){var K=v;v+=1,h.current.length<K+1&&(h.current[K]=W);var L=h.current[K];function G(J){h.current[K]=typeof J=="function"?J(h.current[K]):J,Ze.a.cancel(O),O=Object(Ze.a)(function(){b.current||l({})})}return[L,G]}return R}var y=function(a,l){var h=n.useContext(P);if(!h){var b=a.component,v=b===void 0?"div":b,O=Object(Ae.a)(a,["component"]);return n.createElement(v,Object($.a)({},O,{ref:l}))}var R=h.className,W=Object(Ae.a)(h,["className"]),K=a.className,L=Object(Ae.a)(a,["className"]);return n.createElement(P.Provider,{value:null},n.createElement(i,Object($.a)({ref:l,className:Fe()(R,K)},W,L)))},B=n.forwardRef(y);B.displayName="RawItem";var A=B,P=n.createContext(null),s="responsive",I="invalidate";function d(t){return"+ ".concat(t.length," ...")}function r(t,a){var l=t.prefixCls,h=l===void 0?"rc-overflow":l,b=t.data,v=b===void 0?[]:b,O=t.renderItem,R=t.renderRawItem,W=t.itemKey,K=t.itemWidth,L=K===void 0?10:K,G=t.ssr,J=t.style,se=t.className,X=t.maxCount,Q=t.renderRest,ue=t.renderRawRest,U=t.suffix,q=t.component,re=q===void 0?"div":q,Z=t.itemComponent,oe=t.onVisibleChange,k=Object(Ae.a)(t,["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"]),be=u(),ne=G==="full",ce=be(null),me=Object(V.a)(ce,2),ae=me[0],H=me[1],le=ae||0,ye=be(new Map),he=Object(V.a)(ye,2),Re=he[0],Ke=he[1],Ce=be(0),Ee=Object(V.a)(Ce,2),Me=Ee[0],Ne=Ee[1],je=be(0),De=Object(V.a)(je,2),$e=De[0],_e=De[1],Ve=be(0),Ue=Object(V.a)(Ve,2),Ye=Ue[0],Le=Ue[1],Dn=Object(n.useState)(null),rn=Object(V.a)(Dn,2),xe=rn[0],un=rn[1],yn=Object(n.useState)(null),bn=Object(V.a)(yn,2),Ie=bn[0],He=bn[1],en=n.useMemo(function(){return Ie===null&&ne?Number.MAX_SAFE_INTEGER:Ie||0},[Ie,ae]),ke=Object(n.useState)(!1),Kn=Object(V.a)(ke,2),Jn=Kn[0],Ln=Kn[1],an="".concat(h,"-item"),jn=Math.max(Me,$e),ln=v.length&&X===s,Fn=X===I,nn=ln||typeof X=="number"&&v.length>X,sn=Object(n.useMemo)(function(){var pe=v;return ln?ae===null&&ne?pe=v:pe=v.slice(0,Math.min(v.length,le/L)):typeof X=="number"&&(pe=v.slice(0,X)),pe},[v,L,ae,X,ln]),In=Object(n.useMemo)(function(){return ln?v.slice(en+1):v.slice(sn.length)},[v,sn,ln,en]),cn=Object(n.useCallback)(function(pe,Se){var Te;return typeof W=="function"?W(pe):(Te=W&&(pe==null?void 0:pe[W]))!==null&&Te!==void 0?Te:Se},[W]),qe=Object(n.useCallback)(O||function(pe){return pe},[O]);function Xe(pe,Se){He(pe),Se||(Ln(pe<v.length-1),oe==null||oe(pe))}function Gn(pe,Se){H(Se.clientWidth)}function Hn(pe,Se){Ke(function(Te){var tn=new Map(Te);return Se===null?tn.delete(pe):tn.set(pe,Se),tn})}function nt(pe,Se){_e(Se),Ne($e)}function Cn(pe,Se){Le(Se)}function hn(pe){return Re.get(cn(sn[pe],pe))}n.useLayoutEffect(function(){if(le&&jn&&sn){var pe=Ye,Se=sn.length,Te=Se-1;if(!Se){Xe(0),un(null);return}for(var tn=0;tn<Se;tn+=1){var Zn=hn(tn);if(Zn===void 0){Xe(tn-1,!0);break}if(pe+=Zn,tn===Te-1&&pe+hn(Te)<=le){Xe(Te),un(null);break}else if(pe+jn>le){Xe(tn-1),un(pe-Zn-Ye+$e);break}else if(tn===Te){Xe(Te),un(pe-Ye);break}}U&&hn(0)+Ye>le&&un(null)}},[le,Re,$e,Ye,cn,sn]);var Xn=Jn&&!!In.length,On={};xe!==null&&ln&&(On={position:"absolute",left:xe,top:0});var mn={prefixCls:an,responsive:ln,component:Z,invalidate:Fn},Yn=R?function(pe,Se){var Te=cn(pe,Se);return n.createElement(P.Provider,{key:Te,value:Object(ve.a)(Object(ve.a)({},mn),{},{order:Se,item:pe,itemKey:Te,registerSize:Hn,display:Se<=en})},R(pe,Se))}:function(pe,Se){var Te=cn(pe,Se);return n.createElement(i,Object($.a)({},mn,{order:Se,key:Te,item:pe,renderItem:qe,itemKey:Te,registerSize:Hn,display:Se<=en}))},An,Qn={order:Xn?en:Number.MAX_SAFE_INTEGER,className:"".concat(an,"-rest"),registerSize:nt,display:Xn};if(ue)ue&&(An=n.createElement(P.Provider,{value:Object(ve.a)(Object(ve.a)({},mn),Qn)},ue(In)));else{var dn=Q||d;An=n.createElement(i,Object($.a)({},mn,Qn),typeof dn=="function"?dn(In):dn)}var Nn=n.createElement(re,Object($.a)({className:Fe()(!Fn&&h,se),style:J,ref:a},k),sn.map(Yn),nn?An:null,U&&n.createElement(i,Object($.a)({},mn,{order:en,className:"".concat(an,"-suffix"),registerSize:Cn,display:!0,style:On}),U));return ln&&(Nn=n.createElement($n.default,{onResize:Gn},Nn)),Nn}var p=n.forwardRef(r);p.displayName="Overflow",p.Item=A,p.RESPONSIVE=s,p.INVALIDATE=I;var m=p,D=m,w=e("1OyB"),z=e("vuIU"),_=e("Ji7U"),ie=e("LK+K"),ge=e("bT9E"),pn=e("YrtM"),We=n.createContext(null);function Be(t,a){var l=Object(ve.a)({},t);return Object.keys(a).forEach(function(h){var b=a[h];b!==void 0&&(l[h]=b)}),l}function Pn(t){var a=t.children,l=t.locked,h=Object(Ae.a)(t,["children","locked"]),b=n.useContext(We),v=Object(pn.a)(function(){return Be(b,h)},[b,h],function(O,R){return!l&&(O[0]!==R[0]||!o()(O[1],R[1]))});return n.createElement(We.Provider,{value:v},a)}function it(t,a,l,h){var b=n.useContext(We),v=b.activeKey,O=b.onActive,R=b.onInactive,W={active:v===t};return a||(W.onMouseEnter=function(K){l==null||l({key:t,domEvent:K}),O(t)},W.onMouseLeave=function(K){h==null||h({key:t,domEvent:K}),R(t)}),W}function _n(t){var a=t.item,l=Object(Ae.a)(t,["item"]);return Object.defineProperty(l,"item",{get:function(){return Object(g.a)(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),a}}),l}function c(t){var a=t.icon,l=t.props,h=t.children,b;return typeof a=="function"?b=n.createElement(a,Object(ve.a)({},l)):b=a,b||h||null}function j(t){var a=n.useContext(We),l=a.mode,h=a.rtl,b=a.inlineIndent;if(l!=="inline")return null;var v=t;return h?{paddingRight:v*b}:{paddingLeft:v*b}}var F=[],fe=n.createContext(null);function ee(){return n.useContext(fe)}var Pe=n.createContext(F);function ze(t){var a=n.useContext(Pe);return n.useMemo(function(){return t!==void 0?[].concat(Object(fn.a)(a),[t]):a},[a,t])}var Ge=n.createContext(null),Ut=n.createContext(null);function Jt(t,a){return t===void 0?null:"".concat(t,"-").concat(a)}function Gt(t){var a=n.useContext(Ut);return Jt(a,t)}var br=function(t){Object(_.a)(l,t);var a=Object(ie.a)(l);function l(){return Object(w.a)(this,l),a.apply(this,arguments)}return Object(z.a)(l,[{key:"render",value:function(){var b=this.props,v=b.title,O=b.attribute,R=b.elementRef,W=Object(Ae.a)(b,["title","attribute","elementRef"]),K=Object(ge.a)(W,["eventKey"]);return Object(g.a)(!O,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),n.createElement(D.Item,Object($.a)({},O,{title:typeof v=="string"?v:void 0},K,{ref:R}))}}]),l}(n.Component),Cr=function(a){var l,h=a.style,b=a.className,v=a.eventKey,O=a.disabled,R=a.itemIcon,W=a.children,K=a.role,L=a.onMouseEnter,G=a.onMouseLeave,J=a.onClick,se=a.onKeyDown,X=a.onFocus,Q=Object(Ae.a)(a,["style","className","eventKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"]),ue=Gt(v),U=n.useContext(We),q=U.prefixCls,re=U.onItemClick,Z=U.disabled,oe=U.overflowDisabled,k=U.itemIcon,be=U.selectedKeys,ne=U.onActive,ce="".concat(q,"-item"),me=n.useRef(),ae=n.useRef(),H=Z||O,le=ze(v),ye=function(Ve){return{key:v,keyPath:le,item:me.current,domEvent:Ve}},he=R||k,Re=it(v,H,L,G),Ke=Re.active,Ce=Object(Ae.a)(Re,["active"]),Ee=be.includes(v),Me=j(le.length),Ne=function(Ve){if(!H){var Ue=ye(Ve);J==null||J(_n(Ue)),re(Ue)}},je=function(Ve){if(se==null||se(Ve),Ve.which===we.a.ENTER){var Ue=ye(Ve);J==null||J(_n(Ue)),re(Ue)}},De=function(Ve){ne(v),X==null||X(Ve)},$e={};return a.role==="option"&&($e["aria-selected"]=Ee),n.createElement(br,Object($.a)({ref:me,elementRef:ae,role:K===null?"none":K||"menuitem",tabIndex:O?null:-1,"data-menu-id":oe&&ue?null:ue},Q,Ce,$e,{component:"li","aria-disabled":O,style:Object(ve.a)(Object(ve.a)({},Me),h),className:Fe()(ce,(l={},Object(de.a)(l,"".concat(ce,"-active"),Ke),Object(de.a)(l,"".concat(ce,"-selected"),Ee),Object(de.a)(l,"".concat(ce,"-disabled"),H),l),b),onClick:Ne,onKeyDown:je,onFocus:De}),W,n.createElement(c,{props:Object(ve.a)(Object(ve.a)({},a),{},{isSelected:Ee}),icon:he}))};function Or(t){var a=t.eventKey,l=ee(),h=ze(a);return n.useEffect(function(){if(l)return l.registerPath(a,h),function(){l.unregisterPath(a,h)}},[h]),l?null:n.createElement(Cr,t)}var Dt=Or;function jt(t,a){return Object(Tn.a)(t).map(function(l,h){if(n.isValidElement(l)){var b=l.key;return b==null&&(b="tmp_key-".concat([].concat(Object(fn.a)(a),[h]).join("-"))),n.cloneElement(l,{key:b,eventKey:b})}return l})}function et(t){var a=n.useRef(t);a.current=t;var l=n.useCallback(function(){for(var h,b=arguments.length,v=new Array(b),O=0;O<b;O++)v[O]=arguments[O];return(h=a.current)===null||h===void 0?void 0:h.call.apply(h,[a].concat(v))},[]);return t?l:void 0}var Er=function(a,l){var h=a.className,b=a.children,v=Object(Ae.a)(a,["className","children"]),O=n.useContext(We),R=O.prefixCls,W=O.mode;return n.createElement("ul",Object($.a)({className:Fe()(R,"".concat(R,"-sub"),"".concat(R,"-").concat(W==="inline"?"inline":"vertical"),h)},v,{"data-menu-list":!0,ref:l}),b)},Ht=n.forwardRef(Er);Ht.displayName="SubMenuList";var Xt=Ht,Rr=e("uciX"),zn={adjustX:1,adjustY:1},Yt={topLeft:{points:["bl","tl"],overflow:zn,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:zn,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:zn,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:zn,offset:[4,0]}},Sr={topLeft:{points:["bl","tl"],overflow:zn,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:zn,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:zn,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:zn,offset:[4,0]}},fa=Yt;function Qt(t,a,l){if(a)return a;if(l)return l[t]||l.other}var Pr={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function Dr(t){var a=t.prefixCls,l=t.visible,h=t.children,b=t.popup,v=t.popupClassName,O=t.popupOffset,R=t.disabled,W=t.mode,K=t.onVisibleChange,L=n.useContext(We),G=L.getPopupContainer,J=L.rtl,se=L.subMenuOpenDelay,X=L.subMenuCloseDelay,Q=L.builtinPlacements,ue=L.triggerSubMenuAction,U=L.forceSubMenuRender,q=L.motion,re=L.defaultMotions,Z=n.useState(!1),oe=Object(V.a)(Z,2),k=oe[0],be=oe[1],ne=J?Object(ve.a)(Object(ve.a)({},Sr),Q):Object(ve.a)(Object(ve.a)({},Yt),Q),ce=Pr[W],me=Qt(W,q,re),ae=Object(ve.a)(Object(ve.a)({},me),{},{leavedClassName:"".concat(a,"-hidden"),removeOnLeave:!1,motionAppear:!0}),H=n.useRef();return n.useEffect(function(){return H.current=Object(Ze.a)(function(){be(l)}),function(){Ze.a.cancel(H.current)}},[l]),n.createElement(Rr.a,{prefixCls:a,popupClassName:Fe()("".concat(a,"-popup"),Object(de.a)({},"".concat(a,"-rtl"),J),v),stretch:W==="horizontal"?"minWidth":null,getPopupContainer:G,builtinPlacements:ne,popupPlacement:ce,popupVisible:k,popup:b,popupAlign:O&&{offset:O},action:R?[]:[ue],mouseEnterDelay:se,mouseLeaveDelay:X,onPopupVisibleChange:K,forceRender:U,popupMotion:ae},h)}var jr=e("8XRh");function Fr(t){var a=t.id,l=t.open,h=t.keyPath,b=t.children,v="inline",O=n.useContext(We),R=O.prefixCls,W=O.forceSubMenuRender,K=O.motion,L=O.defaultMotions,G=O.mode,J=n.useRef(!1);J.current=G===v;var se=n.useState(!J.current),X=Object(V.a)(se,2),Q=X[0],ue=X[1],U=J.current?l:!1;n.useEffect(function(){J.current&&ue(!1)},[G]);var q=Object(ve.a)({},Qt(v,K,L));h.length>1&&(q.motionAppear=!1);var re=q.onVisibleChanged;return q.onVisibleChanged=function(Z){return!J.current&&!Z&&ue(!0),re==null?void 0:re(Z)},Q?null:n.createElement(Pn,{mode:v,locked:!J.current},n.createElement(jr.default,Object($.a)({visible:U},q,{forceRender:W,removeOnLeave:!1,leavedClassName:"".concat(R,"-hidden")}),function(Z){var oe=Z.className,k=Z.style;return n.createElement(Xt,{id:a,className:oe,style:k},b)}))}var Ir=function(a){var l,h=a.style,b=a.className,v=a.title,O=a.eventKey,R=a.disabled,W=a.internalPopupClose,K=a.children,L=a.itemIcon,G=a.expandIcon,J=a.popupClassName,se=a.popupOffset,X=a.onClick,Q=a.onMouseEnter,ue=a.onMouseLeave,U=a.onTitleClick,q=a.onTitleMouseEnter,re=a.onTitleMouseLeave,Z=Object(Ae.a)(a,["style","className","title","eventKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"]),oe=Gt(O),k=n.useContext(We),be=k.prefixCls,ne=k.mode,ce=k.openKeys,me=k.disabled,ae=k.overflowDisabled,H=k.activeKey,le=k.selectedKeys,ye=k.itemIcon,he=k.expandIcon,Re=k.onItemClick,Ke=k.onOpenChange,Ce=k.onActive,Ee=n.useContext(Ge),Me=Ee.isSubPathKey,Ne=ze(),je="".concat(be,"-submenu"),De=me||R,$e=n.useRef(),_e=n.useRef(),Ve=L||ye,Ue=G||he,Ye=ce.includes(O),Le=!ae&&Ye,Dn=Me(le,O),rn=it(O,De,q,re),xe=rn.active,un=Object(Ae.a)(rn,["active"]),yn=n.useState(!1),bn=Object(V.a)(yn,2),Ie=bn[0],He=bn[1],en=function(Xe){De||He(Xe)},ke=function(Xe){en(!0),Q==null||Q({key:O,domEvent:Xe})},Kn=function(Xe){en(!1),ue==null||ue({key:O,domEvent:Xe})},Jn=n.useMemo(function(){return xe||(ne!=="inline"?Ie||Me([H],O):!1)},[ne,xe,H,Ie,O,Me]),Ln=j(Ne.length),an=function(Xe){De||(U==null||U({key:O,domEvent:Xe}),ne==="inline"&&Ke(O,!Ye))},jn=et(function(qe){X==null||X(_n(qe)),Re(qe)}),ln=function(Xe){ne!=="inline"&&Ke(O,Xe)},Fn=function(){Ce(O)},nn=oe&&"".concat(oe,"-popup"),sn=n.createElement("div",Object($.a)({role:"menuitem",style:Ln,className:"".concat(je,"-title"),tabIndex:De?null:-1,ref:$e,title:typeof v=="string"?v:null,"data-menu-id":ae&&oe?null:oe,"aria-expanded":Le,"aria-haspopup":!0,"aria-controls":nn,"aria-disabled":De,onClick:an,onFocus:Fn},un),v,n.createElement(c,{icon:ne!=="horizontal"?Ue:null,props:Object(ve.a)(Object(ve.a)({},a),{},{isOpen:Le,isSubMenu:!0})},n.createElement("i",{className:"".concat(je,"-arrow")}))),In=n.useRef(ne);if(ne!=="inline"&&(In.current=Ne.length>1?"vertical":ne),!ae){var cn=In.current;sn=n.createElement(Dr,{mode:cn,prefixCls:je,visible:!W&&Le&&ne!=="inline",popupClassName:J,popupOffset:se,popup:n.createElement(Pn,{mode:cn},n.createElement(Xt,{id:nn,ref:_e},K)),disabled:De,onVisibleChange:ln},sn)}return n.createElement(Pn,{onItemClick:jn,mode:ne==="horizontal"?"vertical":ne,itemIcon:Ve,expandIcon:Ue},n.createElement(D.Item,Object($.a)({role:"none"},Z,{component:"li",style:h,className:Fe()(je,"".concat(je,"-").concat(ne),b,(l={},Object(de.a)(l,"".concat(je,"-open"),Le),Object(de.a)(l,"".concat(je,"-active"),Jn),Object(de.a)(l,"".concat(je,"-selected"),Dn),Object(de.a)(l,"".concat(je,"-disabled"),De),l)),onMouseEnter:ke,onMouseLeave:Kn}),sn,!ae&&n.createElement(Fr,{id:nn,open:Le,keyPath:Ne},K)))};function Zt(t){var a=t.eventKey,l=t.children,h=ze(a),b=jt(l,h),v=ee();n.useEffect(function(){if(v)return v.registerPath(a,h),function(){v.unregisterPath(a,h)}},[h]);var O;return v?O=b:O=n.createElement(Ir,t,b),n.createElement(Pe.Provider,{value:h},O)}var Ar=e("x/xZ");function xt(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Object(Ar.a)(t)){var l=t.nodeName.toLowerCase(),h=["input","select","textarea","button"].includes(l)||t.isContentEditable||l==="a"&&!!t.getAttribute("href"),b=t.getAttribute("tabindex"),v=Number(b),O=null;return b&&!Number.isNaN(v)?O=v:h&&O===null&&(O=0),h&&t.disabled&&(O=null),O!==null&&(O>=0||a&&O<0)}return!1}function kt(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,l=Object(fn.a)(t.querySelectorAll("*")).filter(function(h){return xt(h,a)});return xt(t,a)&&l.unshift(t),l}var mt=null;function pa(){mt=document.activeElement}function va(){mt=null}function ha(){if(mt)try{mt.focus()}catch(t){}}function ga(t,a){if(a.keyCode===9){var l=kt(t),h=l[a.shiftKey?0:l.length-1],b=h===document.activeElement||t===document.activeElement;if(b){var v=l[a.shiftKey?l.length-1:0];v.focus(),a.preventDefault()}}}var Ft=we.a.LEFT,It=we.a.RIGHT,At=we.a.UP,ft=we.a.DOWN,pt=we.a.ENTER,qt=we.a.ESC,_t=[At,ft,Ft,It];function Nr(t,a,l,h){var b,v,O,R,W="prev",K="next",L="children",G="parent";if(t==="inline"&&h===pt)return{inlineTrigger:!0};var J=(b={},Object(de.a)(b,At,W),Object(de.a)(b,ft,K),b),se=(v={},Object(de.a)(v,Ft,l?K:W),Object(de.a)(v,It,l?W:K),Object(de.a)(v,ft,L),Object(de.a)(v,pt,L),v),X=(O={},Object(de.a)(O,At,W),Object(de.a)(O,ft,K),Object(de.a)(O,pt,L),Object(de.a)(O,qt,G),Object(de.a)(O,Ft,l?L:G),Object(de.a)(O,It,l?G:L),O),Q={inline:J,horizontal:se,vertical:X,inlineSub:J,horizontalSub:X,verticalSub:X},ue=(R=Q["".concat(t).concat(a?"":"Sub")])===null||R===void 0?void 0:R[h];switch(ue){case W:return{offset:-1,sibling:!0};case K:return{offset:1,sibling:!0};case G:return{offset:-1,sibling:!1};case L:return{offset:1,sibling:!1};default:return null}}function Br(t){for(var a=t;a;){if(a.getAttribute("data-menu-list"))return a;a=a.parentElement}return null}function Mr(t,a){for(var l=t||document.activeElement;l;){if(a.has(l))return l;l=l.parentElement}return null}function Tr(t,a){var l=kt(t,!0);return l.filter(function(h){return a.has(h)})}function er(t,a,l){var h=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!t)return null;var b=Tr(t,a),v=b.length,O=b.findIndex(function(R){return l===R});return h<0?O===-1?O=v-1:O-=1:h>0&&(O+=1),O=(O+v)%v,b[O]}function wr(t,a,l,h,b,v,O,R,W,K){var L=n.useRef(),G=n.useRef();G.current=a;var J=function(){Ze.a.cancel(L.current)};return n.useEffect(function(){return function(){J()}},[]),function(se){var X=se.which;if([].concat(_t,[pt,qt]).includes(X)){var Q,ue,U,q=function(){Q=new Set,ue=new Map,U=new Map;var ye=v();return ye.forEach(function(he){var Re=document.querySelector("[data-menu-id='".concat(Jt(h,he),"']"));Re&&(Q.add(Re),U.set(Re,he),ue.set(he,Re))}),Q};q();var re=ue.get(a),Z=Mr(re,Q),oe=U.get(Z),k=Nr(t,O(oe,!0).length===1,l,X);if(!k)return;_t.includes(X)&&se.preventDefault();var be=function(ye){if(ye){var he=ye,Re=ye.querySelector("a");(Re==null?void 0:Re.getAttribute("href"))&&(he=Re);var Ke=U.get(ye);R(Ke),J(),L.current=Object(Ze.a)(function(){G.current===Ke&&he.focus()})}};if(k.sibling||!Z){var ne;!Z||t==="inline"?ne=b.current:ne=Br(Z);var ce=er(ne,Q,Z,k.offset);be(ce)}else if(k.inlineTrigger)W(oe);else if(k.offset>0)W(oe,!0),J(),L.current=Object(Ze.a)(function(){q();var le=Z.getAttribute("aria-controls"),ye=document.getElementById(le),he=er(ye,Q);be(he)},5);else if(k.offset<0){var me=O(oe,!0),ae=me[me.length-2],H=ue.get(ae);W(ae,!1),be(H)}}K==null||K(se)}}var Wr=Math.random().toFixed(5).toString().slice(2),nr=0;function Kr(t){var a=Object(Rn.a)(t,{value:t}),l=Object(V.a)(a,2),h=l[0],b=l[1];return n.useEffect(function(){nr+=1;var v="".concat(Wr,"-").concat(nr);b("rc-menu-uuid-".concat(v))},[]),h}var ya=e("p8sG");function Lr(t){Promise.resolve().then(t)}var Nt="__RC_UTIL_PATH_SPLIT__",tr=function(a){return a.join(Nt)},$r=function(a){return a.split(Nt)},Bt="rc-menu-more";function Vr(){var t=n.useState({}),a=Object(V.a)(t,2),l=a[1],h=Object(n.useRef)(new Map),b=Object(n.useRef)(new Map),v=n.useState([]),O=Object(V.a)(v,2),R=O[0],W=O[1],K=Object(n.useRef)(0),L=Object(n.useCallback)(function(U,q){var re=tr(q);b.current.set(re,U),h.current.set(U,re),K.current+=1;var Z=K.current;Lr(function(){Z===K.current&&l({})})},[]),G=Object(n.useCallback)(function(U,q){var re=tr(q);b.current.delete(re),h.current.delete(U)},[]),J=Object(n.useCallback)(function(U){W(U)},[]),se=Object(n.useCallback)(function(U,q){var re=h.current.get(U)||"",Z=$r(re);return q&&R.includes(Z[0])&&Z.unshift(Bt),Z},[R]),X=Object(n.useCallback)(function(U,q){return U.some(function(re){var Z=se(re,!0);return Z.includes(q)})},[se]),Q=function(){var q=Object(fn.a)(h.current.keys());return R.length&&q.push(Bt),q},ue=Object(n.useCallback)(function(U){var q="".concat(h.current.get(U)).concat(Nt),re=new Set;return Object(fn.a)(b.current.keys()).forEach(function(Z){Z.startsWith(q)&&re.add(b.current.get(Z))}),re},[]);return{registerPath:L,unregisterPath:G,refreshOverflowKeys:J,isSubPathKey:X,getKeyPath:se,getKeys:Q,getSubPathKeys:ue}}var vt=[],zr=function(a){var l,h,b=a.prefixCls,v=b===void 0?"rc-menu":b,O=a.style,R=a.className,W=a.tabIndex,K=W===void 0?0:W,L=a.children,G=a.direction,J=a.id,se=a.mode,X=se===void 0?"vertical":se,Q=a.inlineCollapsed,ue=a.disabled,U=a.disabledOverflow,q=a.subMenuOpenDelay,re=q===void 0?.1:q,Z=a.subMenuCloseDelay,oe=Z===void 0?.1:Z,k=a.forceSubMenuRender,be=a.defaultOpenKeys,ne=a.openKeys,ce=a.activeKey,me=a.defaultActiveFirst,ae=a.selectable,H=ae===void 0?!0:ae,le=a.multiple,ye=le===void 0?!1:le,he=a.defaultSelectedKeys,Re=a.selectedKeys,Ke=a.onSelect,Ce=a.onDeselect,Ee=a.inlineIndent,Me=Ee===void 0?24:Ee,Ne=a.motion,je=a.defaultMotions,De=a.triggerSubMenuAction,$e=De===void 0?"hover":De,_e=a.builtinPlacements,Ve=a.itemIcon,Ue=a.expandIcon,Ye=a.overflowedIndicator,Le=Ye===void 0?"...":Ye,Dn=a.getPopupContainer,rn=a.onClick,xe=a.onOpenChange,un=a.onKeyDown,yn=a.openAnimation,bn=a.openTransitionName,Ie=Object(Ae.a)(a,["prefixCls","style","className","tabIndex","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName"]),He=jt(L,vt),en=n.useState(!1),ke=Object(V.a)(en,2),Kn=ke[0],Jn=ke[1],Ln=n.useRef(),an=Kr(J),jn=G==="rtl",ln=n.useMemo(function(){return X==="inline"&&Q?["vertical",Q]:[X,!1]},[X,Q]),Fn=Object(V.a)(ln,2),nn=Fn[0],sn=Fn[1],In=n.useState(0),cn=Object(V.a)(In,2),qe=cn[0],Xe=cn[1],Gn=qe>=He.length-1||nn!=="horizontal"||U,Hn=Object(Rn.a)(be,{value:ne,postState:function(x){return x||vt}}),nt=Object(V.a)(Hn,2),Cn=nt[0],hn=nt[1],Xn=n.useState(Cn),On=Object(V.a)(Xn,2),mn=On[0],Yn=On[1],An=nn==="inline",Qn=n.useRef(!1);n.useEffect(function(){An&&Yn(Cn)},[Cn]),n.useEffect(function(){if(!Qn.current){Qn.current=!0;return}if(An)hn(mn);else{var te=[];hn(te),xe==null||xe(te)}},[An]);var dn=Vr(),Nn=dn.registerPath,pe=dn.unregisterPath,Se=dn.refreshOverflowKeys,Te=dn.isSubPathKey,tn=dn.getKeyPath,Zn=dn.getKeys,gt=dn.getSubPathKeys,Wt=n.useMemo(function(){return{registerPath:Nn,unregisterPath:pe}},[Nn,pe]),Kt=n.useMemo(function(){return{isSubPathKey:Te}},[Te]);n.useEffect(function(){Se(Gn?vt:He.slice(qe+1).map(function(te){return te.key}))},[qe,Gn]);var Lt=Object(Rn.a)(ce||me&&((l=He[0])===null||l===void 0?void 0:l.key),{value:ce}),tt=Object(V.a)(Lt,2),yt=tt[0],ot=tt[1],bt=et(function(te){ot(te)}),$t=et(function(){ot(void 0)}),Ct=Object(Rn.a)(he||[],{value:Re,postState:function(x){return Array.isArray(x)?x:x==null?vt:[x]}}),Ot=Object(V.a)(Ct,2),rt=Ot[0],Bn=Ot[1],Et=function(x){if(!!H){var Oe=x.key,Je=rt.includes(Oe),on;Je?on=rt.filter(function(kn){return kn!==Oe}):ye?on=[].concat(Object(fn.a)(rt),[Oe]):on=[Oe],Bn(on);var Un=Object(ve.a)(Object(ve.a)({},x),{},{selectedKeys:on});Je?Ce==null||Ce(Un):Ke==null||Ke(Un)}},Rt=et(function(te){rn==null||rn(_n(te)),Et(te)}),ut=et(function(te,x){var Oe=Cn.filter(function(on){return on!==te});if(x)Oe.push(te);else if(nn!=="inline"){var Je=gt(te);Oe=Oe.filter(function(on){return!Je.has(on)})}o()(Cn,Oe)||(hn(Oe),xe==null||xe(Oe))}),xn=et(Dn),lt=function(x,Oe){var Je=Oe!=null?Oe:!Cn.includes(x);ut(x,Je)},dt=wr(nn,yt,jn,an,Ln,Zn,tn,ot,lt,un);n.useEffect(function(){Jn(!0)},[]);var St=nn!=="horizontal"||U?He:He.map(function(te,x){return n.createElement(Pn,{key:te.key,overflowDisabled:x>qe},te)}),Pt=n.createElement(D,Object($.a)({id:J,ref:Ln,prefixCls:"".concat(v,"-overflow"),component:"ul",itemComponent:Dt,className:Fe()(v,"".concat(v,"-root"),"".concat(v,"-").concat(nn),R,(h={},Object(de.a)(h,"".concat(v,"-inline-collapsed"),sn),Object(de.a)(h,"".concat(v,"-rtl"),jn),h)),dir:G,style:O,role:"menu",tabIndex:K,data:St,renderRawItem:function(x){return x},renderRawRest:function(x){var Oe=x.length,Je=Oe?He.slice(-Oe):null;return n.createElement(Zt,{eventKey:Bt,title:Le,disabled:Gn,internalPopupClose:Oe===0},Je)},maxCount:nn!=="horizontal"||U?D.INVALIDATE:D.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(x){Xe(x)},onKeyDown:dt},Ie));return n.createElement(Ut.Provider,{value:an},n.createElement(Pn,{prefixCls:v,mode:nn,openKeys:Cn,rtl:jn,disabled:ue,motion:Kn?Ne:null,defaultMotions:Kn?je:null,activeKey:yt,onActive:bt,onInactive:$t,selectedKeys:rt,inlineIndent:Me,subMenuOpenDelay:re,subMenuCloseDelay:oe,forceSubMenuRender:k,builtinPlacements:_e,triggerSubMenuAction:$e,getPopupContainer:xn,itemIcon:Ve,expandIcon:Ue,onItemClick:Rt,onOpenChange:ut},n.createElement(Ge.Provider,{value:Kt},Pt),n.createElement(fe.Provider,{value:Wt},He)))},Ur=zr,Jr=function(a){var l=a.className,h=a.title,b=a.eventKey,v=a.children,O=Object(Ae.a)(a,["className","title","eventKey","children"]),R=n.useContext(We),W=R.prefixCls,K="".concat(W,"-item-group");return n.createElement("li",Object($.a)({},O,{onClick:function(G){return G.stopPropagation()},className:Fe()(K,l)}),n.createElement("div",{className:"".concat(K,"-title"),title:typeof h=="string"?h:void 0},h),n.createElement("ul",{className:"".concat(K,"-list")},v))};function Gr(t){var a=t.children,l=Object(Ae.a)(t,["children"]),h=ze(l.eventKey),b=jt(a,h),v=ee();return v?b:n.createElement(Jr,l,b)}function Hr(t){var a=t.className,l=t.style,h=n.useContext(We),b=h.prefixCls,v=ee();return v?null:n.createElement("li",{className:Fe()("".concat(b,"-item-divider"),a),style:l})}var st=Ur;st.Item=Dt,st.SubMenu=Zt,st.ItemGroup=Gr,st.Divider=Hr;var Xr=st,Yr=e("eDIo");function Qr(t,a){var l=t.prefixCls,h=t.editable,b=t.locale,v=t.style;return!h||h.showAdd===!1?null:n.createElement("button",{ref:a,type:"button",className:"".concat(l,"-nav-add"),style:v,"aria-label":(b==null?void 0:b.addAriaLabel)||"Add tab",onClick:function(R){h.onEdit("add",{event:R})}},h.addIcon||"+")}var rr=n.forwardRef(Qr);function Zr(t,a){var l=t.prefixCls,h=t.id,b=t.tabs,v=t.locale,O=t.mobile,R=t.moreIcon,W=R===void 0?"More":R,K=t.moreTransitionName,L=t.style,G=t.className,J=t.editable,se=t.tabBarGutter,X=t.rtl,Q=t.onTabClick,ue=Object(n.useState)(!1),U=Object(V.a)(ue,2),q=U[0],re=U[1],Z=Object(n.useState)(null),oe=Object(V.a)(Z,2),k=oe[0],be=oe[1],ne="".concat(h,"-more-popup"),ce="".concat(l,"-dropdown"),me=k!==null?"".concat(ne,"-").concat(k):null,ae=v==null?void 0:v.dropdownAriaLabel,H=n.createElement(Xr,{onClick:function(Ee){var Me=Ee.key,Ne=Ee.domEvent;Q(Me,Ne),re(!1)},id:ne,tabIndex:-1,role:"listbox","aria-activedescendant":me,selectedKeys:[k],"aria-label":ae!==void 0?ae:"expanded dropdown"},b.map(function(Ce){return n.createElement(Dt,{key:Ce.key,id:"".concat(ne,"-").concat(Ce.key),role:"option","aria-controls":h&&"".concat(h,"-panel-").concat(Ce.key),disabled:Ce.disabled},Ce.tab)}));function le(Ce){for(var Ee=b.filter(function($e){return!$e.disabled}),Me=Ee.findIndex(function($e){return $e.key===k})||0,Ne=Ee.length,je=0;je<Ne;je+=1){Me=(Me+Ce+Ne)%Ne;var De=Ee[Me];if(!De.disabled){be(De.key);return}}}function ye(Ce){var Ee=Ce.which;if(!q){[we.a.DOWN,we.a.SPACE,we.a.ENTER].includes(Ee)&&(re(!0),Ce.preventDefault());return}switch(Ee){case we.a.UP:le(-1),Ce.preventDefault();break;case we.a.DOWN:le(1),Ce.preventDefault();break;case we.a.ESC:re(!1);break;case we.a.SPACE:case we.a.ENTER:k!==null&&Q(k,Ce);break}}Object(n.useEffect)(function(){var Ce=document.getElementById(me);Ce&&Ce.scrollIntoView&&Ce.scrollIntoView(!1)},[k]),Object(n.useEffect)(function(){q||be(null)},[q]);var he=Object(de.a)({},X?"marginLeft":"marginRight",se);b.length||(he.visibility="hidden",he.order=1);var Re=Fe()(Object(de.a)({},"".concat(ce,"-rtl"),X)),Ke=O?null:n.createElement(Yr.default,{prefixCls:ce,overlay:H,trigger:["hover"],visible:q,transitionName:K,onVisibleChange:re,overlayClassName:Re,mouseEnterDelay:.1,mouseLeaveDelay:.1},n.createElement("button",{type:"button",className:"".concat(l,"-nav-more"),style:he,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":ne,id:"".concat(h,"-more"),"aria-expanded":q,onKeyDown:ye},W));return n.createElement("div",{className:Fe()("".concat(l,"-nav-operations"),G),style:L,ref:a},Ke,n.createElement(rr,{prefixCls:l,locale:v,editable:J}))}var xr=n.forwardRef(Zr),Mt=Object(n.createContext)(null),kr=.1,ar=.01,ht=20,ir=Math.pow(.995,ht);function qr(t,a){var l=Object(n.useState)(),h=Object(V.a)(l,2),b=h[0],v=h[1],O=Object(n.useState)(0),R=Object(V.a)(O,2),W=R[0],K=R[1],L=Object(n.useState)(0),G=Object(V.a)(L,2),J=G[0],se=G[1],X=Object(n.useState)(),Q=Object(V.a)(X,2),ue=Q[0],U=Q[1],q=Object(n.useRef)();function re(ce){var me=ce.touches[0],ae=me.screenX,H=me.screenY;v({x:ae,y:H}),window.clearInterval(q.current)}function Z(ce){if(!!b){ce.preventDefault();var me=ce.touches[0],ae=me.screenX,H=me.screenY;v({x:ae,y:H});var le=ae-b.x,ye=H-b.y;a(le,ye);var he=Date.now();K(he),se(he-W),U({x:le,y:ye})}}function oe(){if(!!b&&(v(null),U(null),ue)){var ce=ue.x/J,me=ue.y/J,ae=Math.abs(ce),H=Math.abs(me);if(Math.max(ae,H)<kr)return;var le=ce,ye=me;q.current=window.setInterval(function(){if(Math.abs(le)<ar&&Math.abs(ye)<ar){window.clearInterval(q.current);return}le*=ir,ye*=ir,a(le*ht,ye*ht)},ht)}}var k=Object(n.useRef)();function be(ce){var me=ce.deltaX,ae=ce.deltaY,H=0,le=Math.abs(me),ye=Math.abs(ae);le===ye?H=k.current==="x"?me:ae:le>ye?(H=me,k.current="x"):(H=ae,k.current="y"),a(-H,-H)&&ce.preventDefault()}var ne=Object(n.useRef)(null);ne.current={onTouchStart:re,onTouchMove:Z,onTouchEnd:oe,onWheel:be},n.useEffect(function(){function ce(le){ne.current.onTouchStart(le)}function me(le){ne.current.onTouchMove(le)}function ae(le){ne.current.onTouchEnd(le)}function H(le){ne.current.onWheel(le)}return document.addEventListener("touchmove",me,{passive:!1}),document.addEventListener("touchend",ae,{passive:!1}),t.current.addEventListener("touchstart",ce,{passive:!1}),t.current.addEventListener("wheel",H),function(){document.removeEventListener("touchmove",me),document.removeEventListener("touchend",ae)}},[])}function _r(){var t=Object(n.useRef)(new Map);function a(h){return t.current.has(h)||t.current.set(h,n.createRef()),t.current.get(h)}function l(h){t.current.delete(h)}return[a,l]}function sr(t,a){var l=n.useRef(t),h=n.useState({}),b=Object(V.a)(h,2),v=b[1];function O(R){var W=typeof R=="function"?R(l.current):R;W!==l.current&&a(W,l.current),l.current=W,v({})}return[l.current,O]}var or=function(a){var l=a.position,h=a.prefixCls,b=a.extra;if(!b)return null;var v,O=b;return l==="right"&&(v=O.right||!O.left&&O||null),l==="left"&&(v=O.left||null),v?n.createElement("div",{className:"".concat(h,"-extra-content")},v):null};function ea(t,a){var l,h=n.useContext(Mt),b=h.prefixCls,v=h.tabs,O=t.className,R=t.style,W=t.id,K=t.animated,L=t.activeKey,G=t.rtl,J=t.extra,se=t.editable,X=t.locale,Q=t.tabPosition,ue=t.tabBarGutter,U=t.children,q=t.onTabClick,re=t.onTabScroll,Z=Object(n.useRef)(),oe=Object(n.useRef)(),k=Object(n.useRef)(),be=Object(n.useRef)(),ne=_r(),ce=Object(V.a)(ne,2),me=ce[0],ae=ce[1],H=Q==="top"||Q==="bottom",le=sr(0,function(te,x){H&&re&&re({direction:te>x?"left":"right"})}),ye=Object(V.a)(le,2),he=ye[0],Re=ye[1],Ke=sr(0,function(te,x){!H&&re&&re({direction:te>x?"top":"bottom"})}),Ce=Object(V.a)(Ke,2),Ee=Ce[0],Me=Ce[1],Ne=Object(n.useState)(0),je=Object(V.a)(Ne,2),De=je[0],$e=je[1],_e=Object(n.useState)(0),Ve=Object(V.a)(_e,2),Ue=Ve[0],Ye=Ve[1],Le=Object(n.useState)(0),Dn=Object(V.a)(Le,2),rn=Dn[0],xe=Dn[1],un=Object(n.useState)(0),yn=Object(V.a)(un,2),bn=yn[0],Ie=yn[1],He=Object(n.useState)(null),en=Object(V.a)(He,2),ke=en[0],Kn=en[1],Jn=Object(n.useState)(null),Ln=Object(V.a)(Jn,2),an=Ln[0],jn=Ln[1],ln=Object(n.useState)(0),Fn=Object(V.a)(ln,2),nn=Fn[0],sn=Fn[1],In=Object(n.useState)(0),cn=Object(V.a)(In,2),qe=cn[0],Xe=cn[1],Gn=Sn(new Map),Hn=Object(V.a)(Gn,2),nt=Hn[0],Cn=Hn[1],hn=M(v,nt,De),Xn="".concat(b,"-nav-operations-hidden"),On=0,mn=0;H?G?(On=0,mn=Math.max(0,De-ke)):(On=Math.min(0,ke-De),mn=0):(On=Math.min(0,an-Ue),mn=0);function Yn(te){return te<On?On:te>mn?mn:te}var An=Object(n.useRef)(),Qn=Object(n.useState)(),dn=Object(V.a)(Qn,2),Nn=dn[0],pe=dn[1];function Se(){pe(Date.now())}function Te(){window.clearTimeout(An.current)}qr(Z,function(te,x){function Oe(Je,on){Je(function(Un){var kn=Yn(Un+on);return kn})}if(H){if(ke>=De)return!1;Oe(Re,te)}else{if(an>=Ue)return!1;Oe(Me,x)}return Te(),Se(),!0}),Object(n.useEffect)(function(){return Te(),Nn&&(An.current=window.setTimeout(function(){pe(0)},100)),Te},[Nn]);function tn(){var te=arguments.length>0&&arguments[0]!==void 0?arguments[0]:L,x=hn.get(te)||{width:0,height:0,left:0,right:0,top:0};if(H){var Oe=he;G?x.right<he?Oe=x.right:x.right+x.width>he+ke&&(Oe=x.right+x.width-ke):x.left<-he?Oe=-x.left:x.left+x.width>-he+ke&&(Oe=-(x.left+x.width-ke)),Me(0),Re(Yn(Oe))}else{var Je=Ee;x.top<-Ee?Je=-x.top:x.top+x.height>-Ee+an&&(Je=-(x.top+x.height-an)),Re(0),Me(Yn(Je))}}var Zn=T(hn,{width:ke,height:an,left:he,top:Ee},{width:rn,height:bn},{width:nn,height:qe},Object(ve.a)(Object(ve.a)({},t),{},{tabs:v})),gt=Object(V.a)(Zn,2),Wt=gt[0],Kt=gt[1],Lt=v.map(function(te){var x=te.key;return n.createElement(Vn,{id:W,prefixCls:b,key:x,rtl:G,tab:te,closable:te.closable,editable:se,active:x===L,tabPosition:Q,tabBarGutter:ue,renderWrapper:U,removeAriaLabel:X==null?void 0:X.removeAriaLabel,ref:me(x),onClick:function(Je){q(x,Je)},onRemove:function(){ae(x)},onFocus:function(){tn(x),Se(),G||(Z.current.scrollLeft=0),Z.current.scrollTop=0}})}),tt=Wn(function(){var te,x,Oe,Je,on,Un,kn,Vt,zt,ua=((te=Z.current)===null||te===void 0?void 0:te.offsetWidth)||0,la=((x=Z.current)===null||x===void 0?void 0:x.offsetHeight)||0,mr=((Oe=be.current)===null||Oe===void 0?void 0:Oe.offsetWidth)||0,fr=((Je=be.current)===null||Je===void 0?void 0:Je.offsetHeight)||0,da=((on=k.current)===null||on===void 0?void 0:on.offsetWidth)||0,ca=((Un=k.current)===null||Un===void 0?void 0:Un.offsetHeight)||0;Kn(ua),jn(la),sn(mr),Xe(fr);var pr=(((kn=oe.current)===null||kn===void 0?void 0:kn.offsetWidth)||0)-mr,vr=(((Vt=oe.current)===null||Vt===void 0?void 0:Vt.offsetHeight)||0)-fr;$e(pr),Ye(vr);var hr=(zt=k.current)===null||zt===void 0?void 0:zt.className.includes(Xn);xe(pr-(hr?0:da)),Ie(vr-(hr?0:ca)),Cn(function(){var gr=new Map;return v.forEach(function(ma){var yr=ma.key,ct=me(yr).current;ct&&gr.set(yr,{width:ct.offsetWidth,height:ct.offsetHeight,left:ct.offsetLeft,top:ct.offsetTop})}),gr})}),yt=v.slice(0,Wt),ot=v.slice(Kt+1),bt=[].concat(Object(fn.a)(yt),Object(fn.a)(ot)),$t=Object(n.useState)(),Ct=Object(V.a)($t,2),Ot=Ct[0],rt=Ct[1],Bn=hn.get(L),Et=Object(n.useRef)();function Rt(){Ze.a.cancel(Et.current)}Object(n.useEffect)(function(){var te={};return Bn&&(H?(G?te.right=Bn.right:te.left=Bn.left,te.width=Bn.width):(te.top=Bn.top,te.height=Bn.height)),Rt(),Et.current=Object(Ze.a)(function(){rt(te)}),Rt},[Bn,H,G]),Object(n.useEffect)(function(){tn()},[L,Bn,hn,H]),Object(n.useEffect)(function(){tt()},[G,ue,L,v.map(function(te){return te.key}).join("_")]);var ut=!!bt.length,xn="".concat(b,"-nav-wrap"),lt,dt,St,Pt;return H?G?(dt=he>0,lt=he+ke<De):(lt=he<0,dt=-he+ke<De):(St=Ee<0,Pt=-Ee+an<Ue),n.createElement("div",{ref:a,role:"tablist",className:Fe()("".concat(b,"-nav"),O),style:R,onKeyDown:function(){Se()}},n.createElement(or,{position:"left",extra:J,prefixCls:b}),n.createElement($n.default,{onResize:tt},n.createElement("div",{className:Fe()(xn,(l={},Object(de.a)(l,"".concat(xn,"-ping-left"),lt),Object(de.a)(l,"".concat(xn,"-ping-right"),dt),Object(de.a)(l,"".concat(xn,"-ping-top"),St),Object(de.a)(l,"".concat(xn,"-ping-bottom"),Pt),l)),ref:Z},n.createElement($n.default,{onResize:tt},n.createElement("div",{ref:oe,className:"".concat(b,"-nav-list"),style:{transform:"translate(".concat(he,"px, ").concat(Ee,"px)"),transition:Nn?"none":void 0}},Lt,n.createElement(rr,{ref:be,prefixCls:b,locale:X,editable:se,style:{visibility:ut?"hidden":null}}),n.createElement("div",{className:Fe()("".concat(b,"-ink-bar"),Object(de.a)({},"".concat(b,"-ink-bar-animated"),K.inkBar)),style:Ot}))))),n.createElement(xr,Object($.a)({},t,{ref:k,prefixCls:b,tabs:bt,className:!ut&&Xn})),n.createElement(or,{position:"right",extra:J,prefixCls:b}))}var ur=n.forwardRef(ea);function na(t){var a=t.id,l=t.activeKey,h=t.animated,b=t.tabPosition,v=t.rtl,O=t.destroyInactiveTabPane,R=n.useContext(Mt),W=R.prefixCls,K=R.tabs,L=h.tabPane,G=K.findIndex(function(J){return J.key===l});return n.createElement("div",{className:Fe()("".concat(W,"-content-holder"))},n.createElement("div",{className:Fe()("".concat(W,"-content"),"".concat(W,"-content-").concat(b),Object(de.a)({},"".concat(W,"-content-animated"),L)),style:G&&L?Object(de.a)({},v?"marginRight":"marginLeft","-".concat(G,"00%")):null},K.map(function(J){return n.cloneElement(J.node,{key:J.key,prefixCls:W,tabKey:J.key,id:a,animated:L,active:J.key===l,destroyInactiveTabPane:O})})))}function lr(t){var a=t.prefixCls,l=t.forceRender,h=t.className,b=t.style,v=t.id,O=t.active,R=t.animated,W=t.destroyInactiveTabPane,K=t.tabKey,L=t.children,G=n.useState(l),J=Object(V.a)(G,2),se=J[0],X=J[1];n.useEffect(function(){O?X(!0):W&&X(!1)},[O,W]);var Q={};return O||(R?(Q.visibility="hidden",Q.height=0,Q.overflowY="hidden"):Q.display="none"),n.createElement("div",{id:v&&"".concat(v,"-panel-").concat(K),role:"tabpanel",tabIndex:O?0:-1,"aria-labelledby":v&&"".concat(v,"-tab-").concat(K),"aria-hidden":!O,style:Object(ve.a)(Object(ve.a)({},Q),b),className:Fe()("".concat(a,"-tabpane"),O&&"".concat(a,"-tabpane-active"),h)},(O||se||l)&&L)}var dr=0;function ta(t){return Object(Tn.a)(t).map(function(a){if(n.isValidElement(a)){var l=a.key!==void 0?String(a.key):void 0;return Object(ve.a)(Object(ve.a)({key:l},a.props),{},{node:a})}return null}).filter(function(a){return a})}function ra(t,a){var l,h=t.id,b=t.prefixCls,v=b===void 0?"rc-tabs":b,O=t.className,R=t.children,W=t.direction,K=t.activeKey,L=t.defaultActiveKey,G=t.editable,J=t.animated,se=J===void 0?{inkBar:!0,tabPane:!1}:J,X=t.tabPosition,Q=X===void 0?"top":X,ue=t.tabBarGutter,U=t.tabBarStyle,q=t.tabBarExtraContent,re=t.locale,Z=t.moreIcon,oe=t.moreTransitionName,k=t.destroyInactiveTabPane,be=t.renderTabBar,ne=t.onChange,ce=t.onTabClick,me=t.onTabScroll,ae=Object(Ae.a)(t,["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"]),H=ta(R),le=W==="rtl",ye;se===!1?ye={inkBar:!1,tabPane:!1}:se===!0?ye={inkBar:!0,tabPane:!0}:ye=Object(ve.a)({inkBar:!0,tabPane:!1},Object(Qe.a)(se)==="object"?se:{});var he=Object(n.useState)(!1),Re=Object(V.a)(he,2),Ke=Re[0],Ce=Re[1];Object(n.useEffect)(function(){Ce(Object(wn.a)())},[]);var Ee=Object(Rn.a)(function(){var Ie;return(Ie=H[0])===null||Ie===void 0?void 0:Ie.key},{value:K,defaultValue:L}),Me=Object(V.a)(Ee,2),Ne=Me[0],je=Me[1],De=Object(n.useState)(function(){return H.findIndex(function(Ie){return Ie.key===Ne})}),$e=Object(V.a)(De,2),_e=$e[0],Ve=$e[1];Object(n.useEffect)(function(){var Ie=H.findIndex(function(en){return en.key===Ne});if(Ie===-1){var He;Ie=Math.max(0,Math.min(_e,H.length-1)),je((He=H[Ie])===null||He===void 0?void 0:He.key)}Ve(Ie)},[H.map(function(Ie){return Ie.key}).join("_"),Ne,_e]);var Ue=Object(Rn.a)(null,{value:h}),Ye=Object(V.a)(Ue,2),Le=Ye[0],Dn=Ye[1],rn=Q;Ke&&!["left","right"].includes(Q)&&(rn="top"),Object(n.useEffect)(function(){h||(Dn("rc-tabs-".concat(dr)),dr+=1)},[]);function xe(Ie,He){ce==null||ce(Ie,He),je(Ie),ne==null||ne(Ie)}var un={id:Le,activeKey:Ne,animated:ye,tabPosition:rn,rtl:le,mobile:Ke},yn,bn=Object(ve.a)(Object(ve.a)({},un),{},{editable:G,locale:re,moreIcon:Z,moreTransitionName:oe,tabBarGutter:ue,onTabClick:xe,onTabScroll:me,extra:q,style:U,panes:R});return be?yn=be(bn,ur):yn=n.createElement(ur,bn),n.createElement(Mt.Provider,{value:{tabs:H,prefixCls:v}},n.createElement("div",Object($.a)({ref:a,id:h,className:Fe()(v,"".concat(v,"-").concat(rn),(l={},Object(de.a)(l,"".concat(v,"-mobile"),Ke),Object(de.a)(l,"".concat(v,"-editable"),G),Object(de.a)(l,"".concat(v,"-rtl"),le),l),O)},ae),yn,n.createElement(na,Object($.a)({destroyInactiveTabPane:k},un,{animated:ye}))))}var cr=n.forwardRef(ra);cr.TabPane=lr;var aa=cr,ia=aa,Tt=e("MZF8"),vn=e("dEAq"),sa=e("ZpkN"),ba=e("TIsu");function wt(t,a){var l,h=(l=t.match(/\.(\w+)$/))===null||l===void 0?void 0:l[1];return h||(h=a.tsx?"tsx":"jsx"),h}var oa=t=>{var a,l,h,b=Object(n.useRef)(),v=Object(n.useContext)(vn.context),O=v.locale,R=Object(vn.useLocaleProps)(O,t),W=Object(vn.useDemoUrl)(R.identifier),K=R.demoUrl||W,L=(Tt.a===null||Tt.a===void 0?void 0:Tt.a.location.hash)==="#".concat(R.identifier),G=Object.keys(R.sources).length===1,J=Object(vn.useCodeSandbox)((a=R.hideActions)!==null&&a!==void 0&&a.includes("CSB")?null:R),se=Object(vn.useRiddle)((l=R.hideActions)!==null&&l!==void 0&&l.includes("RIDDLE")?null:R),X=Object(vn.useMotions)(R.motions||[],b.current),Q=Object(Y.default)(X,2),ue=Q[0],U=Q[1],q=Object(vn.useCopy)(),re=Object(Y.default)(q,2),Z=re[0],oe=re[1],k=Object(n.useState)("_"),be=Object(Y.default)(k,2),ne=be[0],ce=be[1],me=Object(n.useState)(wt(ne,R.sources[ne])),ae=Object(Y.default)(me,2),H=ae[0],le=ae[1],ye=Object(n.useState)(Boolean(R.defaultShowCode)),he=Object(Y.default)(ye,2),Re=he[0],Ke=he[1],Ce=Object(n.useState)(Math.random()),Ee=Object(Y.default)(Ce,2),Me=Ee[0],Ne=Ee[1],je=R.sources[ne][H]||R.sources[ne].content,De=Object(vn.useTSPlaygroundUrl)(O,je),$e=Object(n.useRef)(),_e=Object(vn.usePrefersColor)(),Ve=Object(Y.default)(_e,1),Ue=Ve[0];Object(n.useEffect)(()=>{Ne(Math.random())},[Ue]);function Ye(Le){ce(Le),le(wt(Le,R.sources[Le]))}return C.a.createElement("div",{style:R.style,className:[R.className,"__dumi-default-previewer",L?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:R.identifier,"data-debug":R.debug||void 0,"data-iframe":R.iframe||void 0},R.iframe&&C.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),C.a.createElement("div",{ref:b,className:"__dumi-default-previewer-demo",style:{transform:R.transform?"translate(0, 0)":void 0,padding:R.compact||R.iframe&&R.compact!==!1?"0":void 0,background:R.background}},R.iframe?C.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(R.iframe).replace(/(\d)$/,"$1px")},key:Me,src:K,ref:$e}):R.children),C.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":R.title},R.title&&C.a.createElement(vn.AnchorLink,{to:"#".concat(R.identifier)},R.title),R.description&&C.a.createElement("div",{dangerouslySetInnerHTML:{__html:R.description}})),C.a.createElement("div",{className:"__dumi-default-previewer-actions"},J&&C.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:J}),se&&C.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:se}),R.motions&&C.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:U,onClick:()=>ue()}),R.iframe&&C.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:()=>Ne(Math.random())}),!((h=R.hideActions)!==null&&h!==void 0&&h.includes("EXTERNAL"))&&C.a.createElement(vn.Link,{target:"_blank",to:K},C.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),C.a.createElement("span",null),C.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":oe,onClick:()=>Z(je)}),H==="tsx"&&Re&&C.a.createElement(vn.Link,{target:"_blank",to:De},C.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),C.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(Re?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:()=>Ke(!Re)})),Re&&C.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!G&&C.a.createElement(ia,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xB7\xB7\xB7",defaultActiveKey:ne,onChange:Ye},Object.keys(R.sources).map(Le=>C.a.createElement(lr,{tab:Le==="_"?"index.".concat(wt(Le,R.sources[Le])):Le,key:Le}))),C.a.createElement("div",{className:"__dumi-default-previewer-source"},C.a.createElement(sa.a,{code:je,lang:H,showCopy:!1}))))},Ca=gn.default=oa},"80pN":function(Mn,gn,e){"use strict";(function(Y){/** @license React v16.14.0
* react-dom-test-utils.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var n=e("MgzW"),C=e("q1tI"),$=e("i8i4"),de=e("QCnb");function V(c){for(var j="https://reactjs.org/docs/error-decoder.html?invariant="+c,F=1;F<arguments.length;F++)j+="&args[]="+encodeURIComponent(arguments[F]);return"Minified React error #"+c+"; visit "+j+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Qe=C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;Qe.hasOwnProperty("ReactCurrentDispatcher")||(Qe.ReactCurrentDispatcher={current:null}),Qe.hasOwnProperty("ReactCurrentBatchConfig")||(Qe.ReactCurrentBatchConfig={suspense:null});function Ae(c){var j=c,F=c;if(c.alternate)for(;j.return;)j=j.return;else{c=j;do j=c,(j.effectTag&1026)!=0&&(F=j.return),c=j.return;while(c)}return j.tag===3?F:null}function ve(c){if(Ae(c)!==c)throw Error(V(188))}function En(c){var j=c.alternate;if(!j){if(j=Ae(c),j===null)throw Error(V(188));return j!==c?null:c}for(var F=c,fe=j;;){var ee=F.return;if(ee===null)break;var Pe=ee.alternate;if(Pe===null){if(fe=ee.return,fe!==null){F=fe;continue}break}if(ee.child===Pe.child){for(Pe=ee.child;Pe;){if(Pe===F)return ve(ee),c;if(Pe===fe)return ve(ee),j;Pe=Pe.sibling}throw Error(V(188))}if(F.return!==fe.return)F=ee,fe=Pe;else{for(var ze=!1,Ge=ee.child;Ge;){if(Ge===F){ze=!0,F=ee,fe=Pe;break}if(Ge===fe){ze=!0,fe=ee,F=Pe;break}Ge=Ge.sibling}if(!ze){for(Ge=Pe.child;Ge;){if(Ge===F){ze=!0,F=Pe,fe=ee;break}if(Ge===fe){ze=!0,fe=Pe,F=ee;break}Ge=Ge.sibling}if(!ze)throw Error(V(189))}}if(F.alternate!==fe)throw Error(V(190))}if(F.tag!==3)throw Error(V(188));return F.stateNode.current===F?c:j}function Fe(){return!0}function Tn(){return!1}function wn(c,j,F,fe){this.dispatchConfig=c,this._targetInst=j,this.nativeEvent=F,c=this.constructor.Interface;for(var ee in c)c.hasOwnProperty(ee)&&((j=c[ee])?this[ee]=j(F):ee==="target"?this.target=fe:this[ee]=F[ee]);return this.isDefaultPrevented=(F.defaultPrevented!=null?F.defaultPrevented:F.returnValue===!1)?Fe:Tn,this.isPropagationStopped=Tn,this}n(wn.prototype,{preventDefault:function(){this.defaultPrevented=!0;var c=this.nativeEvent;c&&(c.preventDefault?c.preventDefault():typeof c.returnValue!="unknown"&&(c.returnValue=!1),this.isDefaultPrevented=Fe)},stopPropagation:function(){var c=this.nativeEvent;c&&(c.stopPropagation?c.stopPropagation():typeof c.cancelBubble!="unknown"&&(c.cancelBubble=!0),this.isPropagationStopped=Fe)},persist:function(){this.isPersistent=Fe},isPersistent:Tn,destructor:function(){var c=this.constructor.Interface,j;for(j in c)this[j]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=Tn,this._dispatchInstances=this._dispatchListeners=null}}),wn.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(c){return c.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null},wn.extend=function(c){function j(){}function F(){return fe.apply(this,arguments)}var fe=this;j.prototype=fe.prototype;var ee=new j;return n(ee,F.prototype),F.prototype=ee,F.prototype.constructor=F,F.Interface=n({},fe.Interface,c),F.extend=fe.extend,Ze(F),F},Ze(wn);function Rn(c,j,F,fe){if(this.eventPool.length){var ee=this.eventPool.pop();return this.call(ee,c,j,F,fe),ee}return new this(c,j,F,fe)}function fn(c){if(!(c instanceof this))throw Error(V(279));c.destructor(),10>this.eventPool.length&&this.eventPool.push(c)}function Ze(c){c.eventPool=[],c.getPooled=Rn,c.release=fn}var $n=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined");function Wn(c,j){var F={};return F[c.toLowerCase()]=j.toLowerCase(),F["Webkit"+c]="webkit"+j,F["Moz"+c]="moz"+j,F}var Sn={animationend:Wn("Animation","AnimationEnd"),animationiteration:Wn("Animation","AnimationIteration"),animationstart:Wn("Animation","AnimationStart"),transitionend:Wn("Transition","TransitionEnd")},we={},qn={};$n&&(qn=document.createElement("div").style,"AnimationEvent"in window||(delete Sn.animationend.animation,delete Sn.animationiteration.animation,delete Sn.animationstart.animation),"TransitionEvent"in window||delete Sn.transitionend.transition);function Vn(c){if(we[c])return we[c];if(!Sn[c])return c;var j=Sn[c],F;for(F in j)if(j.hasOwnProperty(F)&&F in qn)return we[c]=j[F];return c}var at=Vn("animationend"),M=Vn("animationiteration"),N=Vn("animationstart"),T=Vn("transitionend"),f=null;function o(c){if(f===null)try{var j=("require"+Math.random()).slice(0,7);f=(Y&&Y[j])("timers").setImmediate}catch(F){f=function(fe){var ee=new MessageChannel;ee.port1.onmessage=fe,ee.port2.postMessage(void 0)}}return f(c)}var g=$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,E=g[11],S=g[12],i=$.unstable_batchedUpdates,u=Qe.IsSomeRendererActing,y=typeof de.unstable_flushAllWithoutAsserting=="function",B=de.unstable_flushAllWithoutAsserting||function(){for(var c=!1;E();)c=!0;return c};function A(c){try{B(),o(function(){B()?A(c):c()})}catch(j){c(j)}}var P=0,s=!1,I=$.findDOMNode,d=$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,r=d[0],p=d[4],m=d[5],D=d[6],w=d[7],z=d[8],_=d[9],ie=d[10];function ge(){}function pn(c,j){if(!c)return[];if(c=En(c),!c)return[];for(var F=c,fe=[];;){if(F.tag===5||F.tag===6||F.tag===1||F.tag===0){var ee=F.stateNode;j(ee)&&fe.push(ee)}if(F.child)F.child.return=F,F=F.child;else{if(F===c)return fe;for(;!F.sibling;){if(!F.return||F.return===c)return fe;F=F.return}F.sibling.return=F.return,F=F.sibling}}}function We(c,j){if(c&&!c._reactInternalFiber){var F=""+c;throw c=Array.isArray(c)?"an array":c&&c.nodeType===1&&c.tagName?"a DOM node":F==="[object Object]"?"object with keys {"+Object.keys(c).join(", ")+"}":F,Error(V(286,j,c))}}var Be={renderIntoDocument:function(c){var j=document.createElement("div");return $.render(c,j)},isElement:function(c){return C.isValidElement(c)},isElementOfType:function(c,j){return C.isValidElement(c)&&c.type===j},isDOMComponent:function(c){return!(!c||c.nodeType!==1||!c.tagName)},isDOMComponentElement:function(c){return!!(c&&C.isValidElement(c)&&c.tagName)},isCompositeComponent:function(c){return Be.isDOMComponent(c)?!1:c!=null&&typeof c.render=="function"&&typeof c.setState=="function"},isCompositeComponentWithType:function(c,j){return Be.isCompositeComponent(c)?c._reactInternalFiber.type===j:!1},findAllInRenderedTree:function(c,j){return We(c,"findAllInRenderedTree"),c?pn(c._reactInternalFiber,j):[]},scryRenderedDOMComponentsWithClass:function(c,j){return We(c,"scryRenderedDOMComponentsWithClass"),Be.findAllInRenderedTree(c,function(F){if(Be.isDOMComponent(F)){var fe=F.className;typeof fe!="string"&&(fe=F.getAttribute("class")||"");var ee=fe.split(/\s+/);if(!Array.isArray(j)){if(j===void 0)throw Error(V(11));j=j.split(/\s+/)}return j.every(function(Pe){return ee.indexOf(Pe)!==-1})}return!1})},findRenderedDOMComponentWithClass:function(c,j){if(We(c,"findRenderedDOMComponentWithClass"),c=Be.scryRenderedDOMComponentsWithClass(c,j),c.length!==1)throw Error("Did not find exactly one match (found: "+c.length+") for class:"+j);return c[0]},scryRenderedDOMComponentsWithTag:function(c,j){return We(c,"scryRenderedDOMComponentsWithTag"),Be.findAllInRenderedTree(c,function(F){return Be.isDOMComponent(F)&&F.tagName.toUpperCase()===j.toUpperCase()})},findRenderedDOMComponentWithTag:function(c,j){if(We(c,"findRenderedDOMComponentWithTag"),c=Be.scryRenderedDOMComponentsWithTag(c,j),c.length!==1)throw Error("Did not find exactly one match (found: "+c.length+") for tag:"+j);return c[0]},scryRenderedComponentsWithType:function(c,j){return We(c,"scryRenderedComponentsWithType"),Be.findAllInRenderedTree(c,function(F){return Be.isCompositeComponentWithType(F,j)})},findRenderedComponentWithType:function(c,j){if(We(c,"findRenderedComponentWithType"),c=Be.scryRenderedComponentsWithType(c,j),c.length!==1)throw Error("Did not find exactly one match (found: "+c.length+") for componentType:"+j);return c[0]},mockComponent:function(c,j){return j=j||c.mockTagName||"div",c.prototype.render.mockImplementation(function(){return C.createElement(j,null,this.props.children)}),this},nativeTouchData:function(c,j){return{touches:[{pageX:c,pageY:j}]}},Simulate:null,SimulateNative:{},act:function(c){function j(){P--,u.current=F,S.current=fe}s===!1&&(s=!0,console.error("act(...) is not supported in production builds of React, and might not behave as expected.")),P++;var F=u.current,fe=S.current;u.current=!0,S.current=!0;try{var ee=i(c)}catch(Pe){throw j(),Pe}if(ee!==null&&typeof ee=="object"&&typeof ee.then=="function")return{then:function(Pe,ze){ee.then(function(){1<P||y===!0&&F===!0?(j(),Pe()):A(function(Ge){j(),Ge?ze(Ge):Pe()})},function(Ge){j(),ze(Ge)})}};try{P!==1||y!==!1&&F!==!1||B(),j()}catch(Pe){throw j(),Pe}return{then:function(Pe){Pe()}}}};function Pn(c){return function(j,F){if(C.isValidElement(j))throw Error(V(228));if(Be.isCompositeComponent(j))throw Error(V(229));var fe=p[c],ee=new ge;ee.target=j,ee.type=c.toLowerCase();var Pe=r(j),ze=new wn(fe,Pe,ee,j);ze.persist(),n(ze,F),fe.phasedRegistrationNames?m(ze):D(ze),$.unstable_batchedUpdates(function(){w(j),ie(ze)}),z()}}Be.Simulate={};for(var it in p)Be.Simulate[it]=Pn(it);function _n(c,j){return function(F,fe){var ee=new ge(c);n(ee,fe),Be.isDOMComponent(F)?(F=I(F),ee.target=F,_(j,1,document,ee)):F.tagName&&(ee.target=F,_(j,1,document,ee))}}[["abort","abort"],[at,"animationEnd"],[M,"animationIteration"],[N,"animationStart"],["blur","blur"],["canplaythrough","canPlayThrough"],["canplay","canPlay"],["cancel","cancel"],["change","change"],["click","click"],["close","close"],["compositionend","compositionEnd"],["compositionstart","compositionStart"],["compositionupdate","compositionUpdate"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["dragstart","dragStart"],["drag","drag"],["drop","drop"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],["ended","ended"],["error","error"],["focus","focus"],["input","input"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["loadstart","loadStart"],["loadstart","loadStart"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["mousedown","mouseDown"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["playing","playing"],["progress","progress"],["ratechange","rateChange"],["scroll","scroll"],["seeked","seeked"],["seeking","seeking"],["selectionchange","selectionChange"],["stalled","stalled"],["suspend","suspend"],["textInput","textInput"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchmove","touchMove"],["touchstart","touchStart"],[T,"transitionEnd"],["volumechange","volumeChange"],["waiting","waiting"],["wheel","wheel"]].forEach(function(c){var j=c[1];Be.SimulateNative[j]=_n(j,c[0])}),Y.exports=Be.default||Be}).call(this,e("hOG+")(Mn))},IfXp:function(Mn,gn,e){"use strict";e.r(gn);var Y=e("q1tI"),n=e.n(Y),C=e("dEAq"),$=e.n(C),de=e("0zqC"),V=e("ZpkN"),Qe=e("JjdP"),Ae=n.a.memo(Qe.default["function-demo"].component),ve=n.a.memo(Qe.default["function-demo-1"].component);gn.default=En=>(n.a.useEffect(()=>{En!=null&&En.location.hash&&C.AnchorLink.scrollToAnchor(decodeURIComponent(En.location.hash.slice(1)))},[]),n.a.createElement(n.a.Fragment,null,n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"markdown"},n.a.createElement("h1",{id:"\u8868\u5355\u8054\u52A8"},n.a.createElement(C.AnchorLink,{to:"#\u8868\u5355\u8054\u52A8","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u8868\u5355\u8054\u52A8"),n.a.createElement("p",null,"\u8868\u5355\u7EC4\u4EF6\u95F4\u7684\u8054\u52A8\u662F\u5F00\u53D1\u4E2D\u666E\u904D\u7684\u95EE\u9898\uFF0CFormRender \u5E0C\u671B\u80FD\u4FDD\u6301\u7B80\u6D01\u6613\u7528\u7684 api \u7684\u540C\u65F6\u652F\u6301\u8054\u52A8\u3002\u4E3A\u6B64\u6211\u4EEC\u63D0\u4F9B\u4E86\u201C\u51FD\u6570\u8868\u8FBE\u5F0F\u201D\u3002"),n.a.createElement("h3",{id:"\u51FD\u6570\u8868\u8FBE\u5F0F"},n.a.createElement(C.AnchorLink,{to:"#\u51FD\u6570\u8868\u8FBE\u5F0F","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u51FD\u6570\u8868\u8FBE\u5F0F"),n.a.createElement("p",null,"\u51FD\u6570\u8868\u8FBE\u5F0F\u4E3A\u5B57\u7B26\u4E32\uFF0C\u5E76\u4EE5\u53CC\u62EC\u53F7",n.a.createElement("code",null,'"',"{","{","...","}","}",'"'),"\u4E3A\u8BED\u6CD5\u7279\u5F81\u3002schema \u91CC\u9664\u4E86 default (\u9ED8\u8BA4\u503C) / rules \u5B57\u6BB5(\u6821\u9A8C\u4FE1\u606F) \u4EE5\u5916\uFF0C\u6240\u6709\u5B57\u6BB5\u90FD\u652F\u6301\u51FD\u6570\u8868\u8FBE\u5F0F\uFF0C\u4F8B\u5982"),n.a.createElement(V.a,{code:`{
  "title": "{{formData.x.y === 'us' ? '\u7F8E\u5143':'\u4EBA\u6C11\u5E01'}}",
  "type": "string"
}`,lang:"json"}),n.a.createElement("p",null,"\u6CE8 1\uFF1Arules \u5B57\u6BB5\u6682\u4E0D\u652F\u6301\u8868\u8FBE\u5F0F\uFF0C\u800C\u662F\u7528 ",n.a.createElement("code",null,"validator")," \u65B9\u6CD5\u5199\u590D\u6742\u6821\u9A8C\uFF0C\u8BE6\u89C1 ",n.a.createElement(C.Link,{to:"https://github.com/yiminghe/async-validator#type"},"async-validator \u6587\u6863"),"\u3002",n.a.createElement("br",null),"\u6CE8 2\uFF1Adefault \u5B57\u6BB5\u5BF9\u5E94\u7684\u662F <Input /> \u7684 defaultValue\uFF0CdefaultValue \u662F\u4E0D\u4F1A\u6839\u636E\u503C\u7684\u540E\u7EED\u53D8\u5316\u800C\u53D8\u5316\u7684\uFF0C\u6240\u4EE5\u6211\u4EEC\u4E5F\u4E0D\u5141\u8BB8 default \u5B57\u6BB5\u4F7F\u7528\u51FD\u6570\u8868\u8FBE\u5F0F\uFF0C\u9047\u5230\u4E00\u4E2A\u7EC4\u4EF6\u9700\u8981\u4FEE\u6539\u53E6\u4E00\u4E2A\u7EC4\u4EF6\u7684\u503C\u7684\u60C5\u51B5\uFF0C\u8BF7\u4F7F\u7528\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u5185\u7F6E\u7684 ",n.a.createElement("code",null,"addons.onItemChange")," \u65B9\u6CD5\u3002"),n.a.createElement("p",null,"\u51FD\u6570\u8868\u8FBE\u5F0F\u53EF\u4F7F\u7528\u4EE5\u4E0B 2 \u5173\u952E\u5B57\uFF1A"),n.a.createElement("table",null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u540D\u79F0"),n.a.createElement("th",{align:"center"},"\u8BF4\u660E"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"formData"),n.a.createElement("td",{align:"center"},"\u6574\u4E2A form \u7684\u503C \uFF08\u6700\u5E38\u7528\uFF0C\u5F53\u4E24\u4E2A\u5173\u8054\u7EC4\u4EF6\u8DDD\u79BB\u8F83\u8FDC\u65F6\uFF0C\u53EF\u4EE5\u4ECE\u9876\u5C42\u7684 formData \u91CC\u83B7\u53D6\uFF09")),n.a.createElement("tr",null,n.a.createElement("td",null,"rootValue"),n.a.createElement("td",{align:"center"},"\u7236\u7EC4\u4EF6\u7684\u503C \uFF08\u4E0A\u4E00\u7EA7\u7684\u503C\uFF0C\u4E00\u822C\u5728\u5217\u8868\u573A\u666F\u4E2D\u7684\u5B50\u5143\u7D20\u83B7\u53D6\u5BF9\u5E94 index \u7684 item \u65F6\u4F7F\u7528\uFF09")))),n.a.createElement("h3",{id:"\u4F7F\u7528"},n.a.createElement(C.AnchorLink,{to:"#\u4F7F\u7528","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u4F7F\u7528")),n.a.createElement(de.default,Qe.default["function-demo"].previewerProps,n.a.createElement(Ae,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("ol",null,n.a.createElement("li",null,"\u5728\u4EE5\u4E0A\u573A\u666F\uFF0C",n.a.createElement("code",null,"formData.select1"),"\u7684\u7236\u7EA7\u5C31\u662F formData\uFF0C\u6240\u4EE5",n.a.createElement("code",null,"rootValue"),"\u5B57\u6BB5\u4E0E",n.a.createElement("code",null,"formData"),"\u5B57\u6BB5\u4F7F\u7528\u8D77\u6765\u6CA1\u6709\u533A\u522B\u3002"),n.a.createElement("li",null,"\u5199\u8868\u8FBE\u5F0F\u7684\u65F6\u5019\uFF0C\u9700\u8981\u6CE8\u610F\u7684\u662F\u9996\u6B21\u6E32\u67D3\u65F6\uFF0C\u6240\u6709\u6CA1\u6709\u6307\u660E default \u503C\u7684\u5143\u7D20\u7684\u503C\u90FD\u662F undefined\u3002\u6240\u4EE5\u4F8B\u5982 checkbox \u7684\u521D\u59CB\u503C\u5E76\u4E0D\u662F false\uFF0C\u800C\u662F undefined\u3002\u5199\u7C7B\u4F3C\u4E8E ",n.a.createElement("code",null,'"',"{","{","formData.checkbox === false","}","}",'"')," \u7684\u8868\u8FBE\u5F0F\u5728\u9996\u6B21\u6E32\u67D3\u4E2D\u662F\u65E0\u6548\u7684\uFF0C\u66F4\u597D\u7684\u5904\u7406\u65B9\u5F0F\u662F\u66F2\u7EBF\u6551\u56FD\u7684 ",n.a.createElement("code",null,'"',"{","{","formData.checkbox !== true","}","}",'"'))),n.a.createElement("h3",{id:"\u66F4\u591A\u5C5E\u6027\u7684-demo"},n.a.createElement(C.AnchorLink,{to:"#\u66F4\u591A\u5C5E\u6027\u7684-demo","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u66F4\u591A\u5C5E\u6027\u7684 demo")),n.a.createElement(de.default,Qe.default["function-demo-1"].previewerProps,n.a.createElement(ve,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h3",{id:"\u6700\u540E"},n.a.createElement(C.AnchorLink,{to:"#\u6700\u540E","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u6700\u540E"),n.a.createElement("ol",null,n.a.createElement("li",null,"\u5982\u679C\u6D89\u53CA\u5230\u503C\u7684\u8054\u52A8\uFF0C\u6216\u8005\u6781\u5176\u590D\u6742\u7684\u8868\u5355\u5C55\u793A\u8054\u52A8\uFF0C\u53EF\u4EE5\u4F7F\u7528 ",n.a.createElement(C.Link,{to:"/form-render/advanced/watch"},"watch")),n.a.createElement("li",null,"\u66F4\u590D\u6742\u548C\u5B9A\u5236\u5316\u7684\u8868\u5355\u9700\u6C42\u5EFA\u8BAE\u4F7F\u7528\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u3002FormRender \u7684\u8BBE\u8BA1\u7406\u5FF5\u975E\u5E38\u63A8\u5D07\u7EC4\u4EF6\u7684\u5373\u63D2\u5373\u7528\uFF0C\u8BE6\u89C1",n.a.createElement(C.Link,{to:"/form-render/advanced/widget"},"\u81EA\u5B9A\u4E49\u7EC4\u4EF6"),"\u7AE0\u8282\u3002"))))))},JjdP:function(Mn,gn,e){"use strict";e.r(gn);var Y=e("9og8"),n=e("WmNS"),C=e.n(n),$=e("LtsZ"),de=`import React, { useRef } from 'react';
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

export default Demo;`,Qe=`export const delay = ms => new Promise(res => setTimeout(res, ms));

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
};`,En=`import React, { Component } from 'react';
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

export default Root;`,Fe=`import React, { useState, useEffect } from 'react';
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
}`,Ze=`.markdown p {
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
}`,at=gn.default={"guide-card":{component:Object($.dynamic)({loader:function(){var M=Object(Y.a)(C.a.mark(function T(){return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"oLxE"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:de}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"card-render":{version:"0.1.2"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"0.x"}},identifier:"guide-card"}},"chart-render-demo":{component:Object($.dynamic)({loader:function(){var M=Object(Y.a)(C.a.mark(function T(){var f,o,g,E,S,i,u;return C.a.wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return i=function(P,s){if(!s&&P&&P.__esModule)return P;if(P===null||typeof P!="object"&&typeof P!="function")return{default:P};var I=S(s);if(I&&I.has(P))return I.get(P);var d={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var p in P)if(p!=="default"&&Object.prototype.hasOwnProperty.call(P,p)){var m=r?Object.getOwnPropertyDescriptor(P,p):null;m&&(m.get||m.set)?Object.defineProperty(d,p,m):d[p]=P[p]}return d.default=P,I&&I.set(P,d),d},S=function(P){if(typeof WeakMap!="function")return null;var s=new WeakMap,I=new WeakMap;return(S=function(r){return r?I:s})(P)},f=e("K+nK"),B.t0=f,B.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return B.t1=B.sent,o=(0,B.t0)(B.t1),B.t2=i,B.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return B.t3=B.sent,g=(0,B.t2)(B.t3),B.next=15,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 15:return E=B.sent,u=function(){var P=(0,g.useState)("Line"),s=(0,o.default)(P,2),I=s[0],d=s[1],r={Line:E.Line,Column:E.Column,PivotTable:E.PivotTable}[I];return g.default.createElement("div",null,g.default.createElement("div",{style:{marginBottom:10}},g.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return d("Line")}},"\u6298\u7EBF\u56FE"),g.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return d("Column")}},"\u67F1\u72B6\u56FE"),g.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return d("PivotTable")}},"\u4EA4\u53C9\u8868")),g.default.createElement(r,{meta:[{id:"date",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF",isDim:!1},{id:"uv",name:"\u8BBF\u5BA2\u6570",isDim:!1}],data:[{date:"20200101",pv:100,uv:50},{date:"20200102",pv:120,uv:60},{date:"20200103",pv:140,uv:70},{date:"20200104",pv:160,uv:80}]}))},B.abrupt("return",u);case 18:case"end":return B.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"chart-render-demo"}},"column-demo":{component:Object($.dynamic)({loader:function(){var M=Object(Y.a)(C.a.mark(function T(){var f,o,g,E;return C.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=e("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=i.sent,E=function(){return o.default.createElement(g.Column,{meta:[{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{pv:50,uv:20}]})},i.abrupt("return",E);case 11:case"end":return i.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo"}},"column-demo-1":{component:Object($.dynamic)({loader:function(){var M=Object(Y.a)(C.a.mark(function T(){var f,o,g,E;return C.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=e("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=i.sent,E=function(){return o.default.createElement(g.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},i.abrupt("return",E);case 11:case"end":return i.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-1"}},"column-demo-2":{component:Object($.dynamic)({loader:function(){var M=Object(Y.a)(C.a.mark(function T(){var f,o,g,E;return C.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=e("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=i.sent,E=function(){return o.default.createElement(g.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},i.abrupt("return",E);case 11:case"end":return i.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-2"}},"column-demo-3":{component:Object($.dynamic)({loader:function(){var M=Object(Y.a)(C.a.mark(function T(){var f,o,g,E;return C.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=e("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=i.sent,E=function(){return o.default.createElement(g.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},i.abrupt("return",E);case 11:case"end":return i.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-3"}},"column-demo-4":{component:Object($.dynamic)({loader:function(){var M=Object(Y.a)(C.a.mark(function T(){var f,o,g,E;return C.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=e("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=i.sent,E=function(){return o.default.createElement(g.Column,{inverted:!0,label:{position:"middle",layout:[{type:"interval-adjust-position"},{type:"interval-hide-overlap"},{type:"adjust-color"}]},meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},i.abrupt("return",E);case 11:case"end":return i.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-4"}},"line-demo":{component:Object($.dynamic)({loader:function(){var M=Object(Y.a)(C.a.mark(function T(){var f,o,g,E;return C.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=e("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=i.sent,E=function(){return o.default.createElement(g.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},i.abrupt("return",E);case 11:case"end":return i.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo"}},"line-demo-1":{component:Object($.dynamic)({loader:function(){var M=Object(Y.a)(C.a.mark(function T(){var f,o,g,E;return C.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=e("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=i.sent,E=function(){return o.default.createElement(g.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},i.abrupt("return",E);case 11:case"end":return i.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-1"}},"line-demo-2":{component:Object($.dynamic)({loader:function(){var M=Object(Y.a)(C.a.mark(function T(){var f,o,g,E;return C.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=e("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=i.sent,E=function(){return o.default.createElement(g.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"},{id:"pv",name:"\u8BBF\u95EE\u91CF"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20,pv:120},{ds:"2020-12-31",page:"\u9996\u9875",uv:120,pv:1120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21,pv:121},{ds:"2021-01-01",page:"\u9996\u9875",uv:121,pv:1121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15,pv:115},{ds:"2021-01-02",page:"\u9996\u9875",uv:115,pv:1115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40,pv:140},{ds:"2021-01-03",page:"\u9996\u9875",uv:140,pv:1140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31,pv:131},{ds:"2021-01-04",page:"\u9996\u9875",uv:131,pv:1131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32,pv:132},{ds:"2021-01-05",page:"\u9996\u9875",uv:132,pv:1132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30,pv:130},{ds:"2021-01-06",page:"\u9996\u9875",uv:130,pv:1130}]})},i.abrupt("return",E);case 11:case"end":return i.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-2"}},"line-demo-3":{component:Object($.dynamic)({loader:function(){var M=Object(Y.a)(C.a.mark(function T(){var f,o,g,E;return C.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=e("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=i.sent,E=function(){return o.default.createElement(g.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},i.abrupt("return",E);case 11:case"end":return i.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-3"}},"line-demo-4":{component:Object($.dynamic)({loader:function(){var M=Object(Y.a)(C.a.mark(function T(){var f,o,g,E;return C.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=e("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=i.sent,E=function(){return o.default.createElement(g.Line,{withArea:!0,isStack:!0,isPercent:!0,meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},i.abrupt("return",E);case 11:case"end":return i.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-4"}},"pivot-table-demo":{component:Object($.dynamic)({loader:function(){var M=Object(Y.a)(C.a.mark(function T(){var f,o,g,E;return C.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=e("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=i.sent,E=function(){return o.default.createElement(g.PivotTable,{style:{maxHeight:400,overflow:"auto"},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},i.abrupt("return",E);case 11:case"end":return i.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo"}},"pivot-table-demo-1":{component:Object($.dynamic)({loader:function(){var M=Object(Y.a)(C.a.mark(function T(){var f,o,g,E;return C.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=e("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=i.sent,E=function(){return o.default.createElement(g.PivotTable,{style:{maxHeight:400,overflow:"auto"},cellRender:function(B,A,P){return o.default.createElement("div",null,o.default.createElement("p",null,"\u53C2\u6570\u8868\uFF1A"),o.default.createElement("p",{style:{color:["red","orange","yellow","green","blue"][Object.keys(A).length]}},B),o.default.createElement("p",null,JSON.stringify(A)),o.default.createElement("p",null,JSON.stringify(P)))},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},i.abrupt("return",E);case 11:case"end":return i.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-1"}},"pivot-table-demo-2":{component:Object($.dynamic)({loader:function(){var M=Object(Y.a)(C.a.mark(function T(){var f,o,g,E,S,i,u;return C.a.wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return i=function(P,s){if(!s&&P&&P.__esModule)return P;if(P===null||typeof P!="object"&&typeof P!="function")return{default:P};var I=S(s);if(I&&I.has(P))return I.get(P);var d={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var p in P)if(p!=="default"&&Object.prototype.hasOwnProperty.call(P,p)){var m=r?Object.getOwnPropertyDescriptor(P,p):null;m&&(m.get||m.set)?Object.defineProperty(d,p,m):d[p]=P[p]}return d.default=P,I&&I.set(P,d),d},S=function(P){if(typeof WeakMap!="function")return null;var s=new WeakMap,I=new WeakMap;return(S=function(r){return r?I:s})(P)},f=e("K+nK"),B.t0=f,B.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return B.t1=B.sent,o=(0,B.t0)(B.t1),B.t2=i,B.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return B.t3=B.sent,g=(0,B.t2)(B.t3),B.next=15,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 15:return E=B.sent,u=function(){var P=(0,g.useState)(!1),s=(0,o.default)(P,2),I=s[0],d=s[1];return g.default.createElement(g.default.Fragment,null,g.default.createElement("label",null,"\u53EF\u5C55\u5F00/\u6536\u7F29\uFF1A",g.default.createElement("input",{type:"checkbox",value:I,onChange:function(){return d(!I)}})),g.default.createElement(E.PivotTable,{leftExpandable:I,showSubtotal:!1,meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]}))},B.abrupt("return",u);case 18:case"end":return B.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-2"}},"form-render-demo":{component:Object($.dynamic)({loader:function(){var M=Object(Y.a)(C.a.mark(function T(){var f,o,g,E,S,i,u,y,B,A,P,s,I,d;return C.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return P=function(D,w){if(!w&&D&&D.__esModule)return D;if(D===null||typeof D!="object"&&typeof D!="function")return{default:D};var z=A(w);if(z&&z.has(D))return z.get(D);var _={},ie=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ge in D)if(ge!=="default"&&Object.prototype.hasOwnProperty.call(D,ge)){var pn=ie?Object.getOwnPropertyDescriptor(D,ge):null;pn&&(pn.get||pn.set)?Object.defineProperty(_,ge,pn):_[ge]=D[ge]}return _.default=D,z&&z.set(D,_),_},A=function(D){if(typeof WeakMap!="function")return null;var w=new WeakMap,z=new WeakMap;return(A=function(ie){return ie?z:w})(D)},f=e("K+nK"),p.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return p.t0=f,p.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return p.t1=p.sent,o=(0,p.t0)(p.t1),p.t2=f,p.next=13,e.e(62).then(e.bind(null,"fWQN"));case 13:return p.t3=p.sent,g=(0,p.t2)(p.t3),p.t4=f,p.next=18,e.e(63).then(e.bind(null,"mtLc"));case 18:return p.t5=p.sent,E=(0,p.t4)(p.t5),p.t6=f,p.next=23,e.e(65).then(e.bind(null,"yKVA"));case 23:return p.t7=p.sent,S=(0,p.t6)(p.t7),p.t8=f,p.next=28,e.e(59).then(e.bind(null,"879j"));case 28:return p.t9=p.sent,i=(0,p.t8)(p.t9),p.t10=f,p.next=33,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 33:return p.t11=p.sent,u=(0,p.t10)(p.t11),p.next=37,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 37:return y=p.sent,p.t12=P,p.next=41,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 41:return p.t13=p.sent,B=(0,p.t12)(p.t13),s={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},I=function(m){(0,S.default)(w,m);var D=(0,i.default)(w);function w(){return(0,g.default)(this,w),D.apply(this,arguments)}return(0,E.default)(w,[{key:"render",value:function(){var _=this.props.form;return u.default.createElement("div",null,u.default.createElement(B.default,{form:_,schema:s}),u.default.createElement(o.default,{type:"primary",onClick:_.submit},"\u63D0\u4EA4"))}}]),w}(u.default.Component),d=(0,B.connectForm)(I),p.abrupt("return",d);case 47:case"end":return p.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default connectForm(Demo);`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo"}},"form-render-demo-1":{component:Object($.dynamic)({loader:function(){var M=Object(Y.a)(C.a.mark(function T(){var f,o,g,E,S,i,u,y,B,A;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return u=function(d,r){if(!r&&d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var p=i(r);if(p&&p.has(d))return p.get(d);var m={},D=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var w in d)if(w!=="default"&&Object.prototype.hasOwnProperty.call(d,w)){var z=D?Object.getOwnPropertyDescriptor(d,w):null;z&&(z.get||z.set)?Object.defineProperty(m,w,z):m[w]=d[w]}return m.default=d,p&&p.set(d,m),m},i=function(d){if(typeof WeakMap!="function")return null;var r=new WeakMap,p=new WeakMap;return(i=function(D){return D?p:r})(d)},f=e("K+nK"),s.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return s.t0=f,s.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=f,s.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return s.t3=s.sent,g=(0,s.t2)(s.t3),s.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 17:return E=s.sent,s.t4=u,s.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 21:return s.t5=s.sent,S=(0,s.t4)(s.t5),y={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},B=function(){var d=(0,S.useForm)();return g.default.createElement("div",null,g.default.createElement(S.default,{form:d,schema:y}),g.default.createElement(o.default,{type:"primary",onClick:d.submit},"\u63D0\u4EA4"))},A=B,s.abrupt("return",A);case 27:case"end":return s.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo-1"}},"form-render-demo-2":{component:Object($.dynamic)({loader:function(){var M=Object(Y.a)(C.a.mark(function T(){var f,o,g,E,S,i,u,y,B,A;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return u=function(d,r){if(!r&&d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var p=i(r);if(p&&p.has(d))return p.get(d);var m={},D=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var w in d)if(w!=="default"&&Object.prototype.hasOwnProperty.call(d,w)){var z=D?Object.getOwnPropertyDescriptor(d,w):null;z&&(z.get||z.set)?Object.defineProperty(m,w,z):m[w]=d[w]}return m.default=d,p&&p.set(d,m),m},i=function(d){if(typeof WeakMap!="function")return null;var r=new WeakMap,p=new WeakMap;return(i=function(D){return D?p:r})(d)},f=e("K+nK"),s.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return s.t0=f,s.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=f,s.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return s.t3=s.sent,g=(0,s.t2)(s.t3),s.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 17:return E=s.sent,s.t4=u,s.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 21:return s.t5=s.sent,S=(0,s.t4)(s.t5),y={displayType:"row",labelWidth:60,type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F",type:"range",format:"date"},siteUrl:{title:"\u7F51\u5740",type:"string",placeholder:"\u6B64\u5904\u5FC5\u586B",required:!0,props:{addonBefore:"https://",addonAfter:".com"}}}},B=function(){var d=(0,S.useForm)(),r=function(m,D){D.length>0?alert("errors:"+JSON.stringify(D)):alert("formData:"+JSON.stringify(m,null,2))};return g.default.createElement("div",null,g.default.createElement(S.default,{form:d,schema:y,onFinish:r}),g.default.createElement(o.default,{type:"primary",onClick:d.submit},"\u63D0\u4EA4"))},A=B,s.abrupt("return",A);case 27:case"end":return s.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-demo-2"}},"migrate-demo":{component:Object($.dynamic)({loader:function(){var M=Object(Y.a)(C.a.mark(function T(){var f,o,g,E,S,i,u,y;return C.a.wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return u=function(){var s=(0,g.useForm)(),I=function(r,p){p.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(p))):alert(JSON.stringify(r))};return o.default.createElement("div",null,o.default.createElement(g.default,{form:s,schema:i,onFinish:I}),o.default.createElement("button",{onClick:s.submit},"\u63D0\u4EA4"))},S=function(s,I){if(!I&&s&&s.__esModule)return s;if(s===null||typeof s!="object"&&typeof s!="function")return{default:s};var d=E(I);if(d&&d.has(s))return d.get(s);var r={},p=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var m in s)if(m!=="default"&&Object.prototype.hasOwnProperty.call(s,m)){var D=p?Object.getOwnPropertyDescriptor(s,m):null;D&&(D.get||D.set)?Object.defineProperty(r,m,D):r[m]=s[m]}return r.default=s,d&&d.set(s,r),r},E=function(s){if(typeof WeakMap!="function")return null;var I=new WeakMap,d=new WeakMap;return(E=function(p){return p?d:I})(s)},f=e("K+nK"),A.t0=f,A.next=7,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 7:return A.t1=A.sent,o=(0,A.t0)(A.t1),A.t2=S,A.next=12,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 12:return A.t3=A.sent,g=(0,A.t2)(A.t3),i={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}},y=u,A.abrupt("return",y);case 17:case"end":return A.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate-demo"}},"display-demo":{component:Object($.dynamic)({loader:function(){var M=Object(Y.a)(C.a.mark(function T(){var f,o,g,E,S;return C.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return f=e("K+nK"),u.t0=f,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,o=(0,u.t0)(u.t1),u.t2=f,u.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return u.t3=u.sent,g=(0,u.t2)(u.t3),E=function(B){return{type:"object",displayType:B,properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},objectName:{title:"\u5BF9\u8C61",bind:"obj",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},S=function(){return o.default.createElement("div",null,o.default.createElement("h2",null,"display: row"),o.default.createElement(g.default,{schema:E("row")}),o.default.createElement("h2",null,"display: column"),o.default.createElement(g.default,{schema:E("column")}))},u.abrupt("return",S);case 14:case"end":return u.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`},"demo/display.js":{import:"../demo/display",content:V}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo"}},"display-demo-1":{component:Object($.dynamic)({loader:function(){var M=Object(Y.a)(C.a.mark(function T(){var f,o,g,E,S;return C.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return f=e("K+nK"),u.t0=f,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,o=(0,u.t0)(u.t1),u.t2=f,u.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return u.t3=u.sent,g=(0,u.t2)(u.t3),E={type:"object",displayType:"inline",properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},S=function(){return o.default.createElement(g.default,{schema:E})},u.abrupt("return",S);case 14:case"end":return u.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:V}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-1"}},"display-demo-2":{component:Object($.dynamic)({loader:function(){var M=Object(Y.a)(C.a.mark(function T(){var f,o,g,E,S;return C.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return f=e("K+nK"),u.t0=f,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,o=(0,u.t0)(u.t1),u.t2=f,u.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return u.t3=u.sent,g=(0,u.t2)(u.t3),E={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0},check:{title:"box",type:"boolean",default:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},S=function(){return o.default.createElement(g.default,{readOnly:!0,schema:E})},u.abrupt("return",S);case 14:case"end":return u.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form readOnly schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:V}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-2"}},"display-demo-3":{component:Object($.dynamic)({loader:function(){var M=Object(Y.a)(C.a.mark(function T(){var f,o,g,E,S;return C.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return f=e("K+nK"),u.t0=f,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,o=(0,u.t0)(u.t1),u.t2=f,u.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return u.t3=u.sent,g=(0,u.t2)(u.t3),E={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0,width:"50%"},check:{title:"box",type:"boolean",default:!0,width:"50%",labelWidth:6},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},S=function(){return o.default.createElement(g.default,{labelWidth:"200",schema:E})},u.abrupt("return",S);case 14:case"end":return u.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form labelWidth="200" schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:V}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-3"}},"display-demo-4":{component:Object($.dynamic)({loader:function(){var M=Object(Y.a)(C.a.mark(function T(){var f,o,g,E,S,i;return C.a.wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return f=e("K+nK"),y.t0=f,y.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return y.t1=y.sent,o=(0,y.t0)(y.t1),y.t2=f,y.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return y.t3=y.sent,g=(0,y.t2)(y.t3),E={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},S=function(){return o.default.createElement(g.default,{schema:E})},i=S,y.abrupt("return",i);case 15:case"end":return y.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:V}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-4"}},"display-demo-5":{component:Object($.dynamic)({loader:function(){var M=Object(Y.a)(C.a.mark(function T(){var f,o,g,E,S,i;return C.a.wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return f=e("K+nK"),y.t0=f,y.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return y.t1=y.sent,o=(0,y.t0)(y.t1),y.t2=f,y.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return y.t3=y.sent,g=(0,y.t2)(y.t3),E={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},S=function(){return o.default.createElement(g.default,{schema:E})},i=S,y.abrupt("return",i);case 15:case"end":return y.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:V}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-5"}},"display-demo-6":{component:Object($.dynamic)({loader:function(){var M=Object(Y.a)(C.a.mark(function T(){var f,o,g,E,S,i;return C.a.wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return f=e("K+nK"),y.t0=f,y.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return y.t1=y.sent,o=(0,y.t0)(y.t1),y.t2=f,y.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return y.t3=y.sent,g=(0,y.t2)(y.t3),E={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},S=function(){return o.default.createElement(g.default,{schema:E})},i=S,y.abrupt("return",i);case 15:case"end":return y.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:V}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-6"}},"display-demo-7":{component:Object($.dynamic)({loader:function(){var M=Object(Y.a)(C.a.mark(function T(){var f,o,g,E,S,i;return C.a.wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return f=e("K+nK"),y.t0=f,y.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return y.t1=y.sent,o=(0,y.t0)(y.t1),y.t2=f,y.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return y.t3=y.sent,g=(0,y.t2)(y.t3),E={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},S=function(){return o.default.createElement(g.default,{schema:E})},i=S,y.abrupt("return",i);case 15:case"end":return y.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:V}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-7"}},"form-methods-demo":{component:Object($.dynamic)({loader:function(){var M=Object(Y.a)(C.a.mark(function T(){var f,o,g,E,S,i,u,y,B,A,P,s,I;return C.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return P=function(m,D){if(!D&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var w=A(D);if(w&&w.has(m))return w.get(m);var z={},_=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ie in m)if(ie!=="default"&&Object.prototype.hasOwnProperty.call(m,ie)){var ge=_?Object.getOwnPropertyDescriptor(m,ie):null;ge&&(ge.get||ge.set)?Object.defineProperty(z,ie,ge):z[ie]=m[ie]}return z.default=m,w&&w.set(m,z),z},A=function(m){if(typeof WeakMap!="function")return null;var D=new WeakMap,w=new WeakMap;return(A=function(_){return _?w:D})(m)},f=e("K+nK"),r.next=5,e.e(17).then(e.t.bind(null,"lfLe",7));case 5:return r.t0=f,r.next=8,e.e(18).then(e.t.bind(null,"Cp9S",7));case 8:return r.t1=r.sent,o=(0,r.t0)(r.t1),r.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return r.t2=f,r.next=15,e.e(12).then(e.t.bind(null,"4IMT",7));case 15:return r.t3=r.sent,g=(0,r.t2)(r.t3),r.next=19,e.e(14).then(e.t.bind(null,"tL+A",7));case 19:return r.t4=f,r.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return r.t5=r.sent,E=(0,r.t4)(r.t5),r.t6=f,r.next=27,Promise.resolve().then(e.bind(null,"tJVT"));case 27:return r.t7=r.sent,S=(0,r.t6)(r.t7),r.t8=P,r.next=32,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 32:return r.t9=r.sent,i=(0,r.t8)(r.t9),r.next=36,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 36:return u=r.sent,r.t10=P,r.next=40,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 40:return r.t11=r.sent,y=(0,r.t10)(r.t11),r.next=44,e.e(15).then(e.bind(null,"OH0R"));case 44:return B=r.sent,s=function(){var m=(0,y.useForm)(),D=(0,i.useState)({}),w=(0,S.default)(D,2),z=w[0],_=w[1],ie=function(){(0,B.fakeApi)("xxx/getForm").then(function(We){m.setValues({input1:"hello world",select1:"c"})})};(0,i.useEffect)(function(){(0,B.delay)(1e3).then(function(pn){_({type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}})})},[]);var ge=function(We,Be){Be.length>0?E.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(Be.map(function(Pn){return Pn.name}))):(0,B.fakeApi)("xxx/submit",We).then(function(Pn){return E.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})};return i.default.createElement("div",{style:{width:"400px"}},i.default.createElement(y.default,{form:m,schema:z,onFinish:ge}),i.default.createElement(o.default,null,i.default.createElement(g.default,{onClick:ie},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),i.default.createElement(g.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},I=s,r.abrupt("return",I);case 48:case"end":return r.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Qe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo"}},"form-methods-demo-1":{component:Object($.dynamic)({loader:function(){var M=Object(Y.a)(C.a.mark(function T(){var f,o,g,E,S,i,u,y,B,A,P,s,I;return C.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return A=function(m,D){if(!D&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var w=B(D);if(w&&w.has(m))return w.get(m);var z={},_=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ie in m)if(ie!=="default"&&Object.prototype.hasOwnProperty.call(m,ie)){var ge=_?Object.getOwnPropertyDescriptor(m,ie):null;ge&&(ge.get||ge.set)?Object.defineProperty(z,ie,ge):z[ie]=m[ie]}return z.default=m,w&&w.set(m,z),z},B=function(m){if(typeof WeakMap!="function")return null;var D=new WeakMap,w=new WeakMap;return(B=function(_){return _?w:D})(m)},f=e("K+nK"),r.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return r.t0=f,r.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return r.t1=r.sent,o=(0,r.t0)(r.t1),r.t2=f,r.next=13,Promise.resolve().then(e.bind(null,"PpiC"));case 13:return r.t3=r.sent,g=(0,r.t2)(r.t3),r.next=17,e.e(14).then(e.t.bind(null,"tL+A",7));case 17:return r.t4=f,r.next=20,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 20:return r.t5=r.sent,E=(0,r.t4)(r.t5),r.t6=f,r.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return r.t7=r.sent,S=(0,r.t6)(r.t7),r.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 29:return i=r.sent,r.t8=A,r.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 33:return r.t9=r.sent,u=(0,r.t8)(r.t9),r.next=37,e.e(15).then(e.bind(null,"OH0R"));case 37:return y=r.sent,P={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},s=function(){var m=(0,u.useForm)(),D=function(_,ie){ie.length>0?E.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(ie.map(function(ge){return ge.name}))):(0,y.fakeApi)("xxx/submit",_).then(function(ge){return E.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},w=function(_){var ie=_.data,ge=_.errors,pn=_.schema,We=(0,g.default)(_,["data","errors","schema"]);return(0,y.fakeApi)("xxx/validation").then(function(Be){return{name:"select1",error:["\u5916\u90E8\u6821\u9A8C\u9519\u8BEF"]}})};return S.default.createElement("div",{style:{width:"400px"}},S.default.createElement(u.default,{form:m,schema:P,beforeFinish:w,onFinish:D}),S.default.createElement(o.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},I=s,r.abrupt("return",I);case 42:case"end":return r.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Qe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-1"}},"form-methods-demo-2":{component:Object($.dynamic)({loader:function(){var M=Object(Y.a)(C.a.mark(function T(){var f,o,g,E,S,i,u,y,B,A,P,s,I;return C.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return A=function(m,D){if(!D&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var w=B(D);if(w&&w.has(m))return w.get(m);var z={},_=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ie in m)if(ie!=="default"&&Object.prototype.hasOwnProperty.call(m,ie)){var ge=_?Object.getOwnPropertyDescriptor(m,ie):null;ge&&(ge.get||ge.set)?Object.defineProperty(z,ie,ge):z[ie]=m[ie]}return z.default=m,w&&w.set(m,z),z},B=function(m){if(typeof WeakMap!="function")return null;var D=new WeakMap,w=new WeakMap;return(B=function(_){return _?w:D})(m)},f=e("K+nK"),r.next=5,e.e(17).then(e.t.bind(null,"lfLe",7));case 5:return r.t0=f,r.next=8,e.e(18).then(e.t.bind(null,"Cp9S",7));case 8:return r.t1=r.sent,o=(0,r.t0)(r.t1),r.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return r.t2=f,r.next=15,e.e(12).then(e.t.bind(null,"4IMT",7));case 15:return r.t3=r.sent,g=(0,r.t2)(r.t3),r.next=19,e.e(14).then(e.t.bind(null,"tL+A",7));case 19:return r.t4=f,r.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return r.t5=r.sent,E=(0,r.t4)(r.t5),r.t6=f,r.next=27,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 27:return r.t7=r.sent,S=(0,r.t6)(r.t7),r.next=31,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 31:return i=r.sent,r.t8=A,r.next=35,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 35:return r.t9=r.sent,u=(0,r.t8)(r.t9),r.next=39,e.e(15).then(e.bind(null,"OH0R"));case 39:return y=r.sent,P={type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F\u8303\u56F4",type:"range",format:"date"}}},s=function(){var m=(0,u.useForm)(),D=function(_,ie){ie.length>0?E.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(ie.map(function(ge){return ge.name}))):(0,y.fakeApi)("xxx/submit",_).then(function(ge){return E.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},w=function(){(0,y.fakeApi)("xxx/getForm").then(function(_){m.setValues({startDate:"2020-04-04",endDate:"2020-04-24"})})};return S.default.createElement("div",{style:{width:"400px"}},S.default.createElement(u.default,{form:m,schema:P,onFinish:D}),S.default.createElement(o.default,null,S.default.createElement(g.default,{onClick:w},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),S.default.createElement(g.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},I=s,r.abrupt("return",I);case 44:case"end":return r.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Qe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-2"}},"form-methods-demo-3":{component:Object($.dynamic)({loader:function(){var M=Object(Y.a)(C.a.mark(function T(){var f,o,g,E,S,i,u,y,B,A,P,s;return C.a.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return B=function(p,m){if(!m&&p&&p.__esModule)return p;if(p===null||typeof p!="object"&&typeof p!="function")return{default:p};var D=y(m);if(D&&D.has(p))return D.get(p);var w={},z=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var _ in p)if(_!=="default"&&Object.prototype.hasOwnProperty.call(p,_)){var ie=z?Object.getOwnPropertyDescriptor(p,_):null;ie&&(ie.get||ie.set)?Object.defineProperty(w,_,ie):w[_]=p[_]}return w.default=p,D&&D.set(p,w),w},y=function(p){if(typeof WeakMap!="function")return null;var m=new WeakMap,D=new WeakMap;return(y=function(z){return z?D:m})(p)},f=e("K+nK"),d.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return d.t0=f,d.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return d.t1=d.sent,o=(0,d.t0)(d.t1),d.next=12,e.e(14).then(e.t.bind(null,"tL+A",7));case 12:return d.t2=f,d.next=15,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 15:return d.t3=d.sent,g=(0,d.t2)(d.t3),d.t4=B,d.next=20,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 20:return d.t5=d.sent,E=(0,d.t4)(d.t5),d.next=24,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 24:return S=d.sent,d.t6=B,d.next=28,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 28:return d.t7=d.sent,i=(0,d.t6)(d.t7),d.next=32,e.e(15).then(e.bind(null,"OH0R"));case 32:return u=d.sent,A={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select1:{title:"\u5355\u9009",type:"string",widget:"select"}}}}},P=function(){var p=(0,i.useForm)(),m=function(){p.setSchemaByPath("obj1.select1",{enum:["nouth","south","east","west"],enumNames:["\u4E1C","\u5357","\u897F","\u5317"]})},D=function(z,_){_.length>0?g.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(_.map(function(ie){return ie.name}))):g.default.info(JSON.stringify(z))};return E.default.createElement("div",{style:{width:"400px"}},E.default.createElement(i.default,{form:p,schema:A,onMount:m,onFinish:D}),E.default.createElement(o.default,{type:"primary",onClick:p.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},s=P,d.abrupt("return",s);case 37:case"end":return d.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:Qe}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-3"}},"function-demo":{component:Object($.dynamic)({loader:function(){var M=Object(Y.a)(C.a.mark(function T(){var f,o,g,E,S,i,u,y;return C.a.wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return S=function(s,I){if(!I&&s&&s.__esModule)return s;if(s===null||typeof s!="object"&&typeof s!="function")return{default:s};var d=E(I);if(d&&d.has(s))return d.get(s);var r={},p=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var m in s)if(m!=="default"&&Object.prototype.hasOwnProperty.call(s,m)){var D=p?Object.getOwnPropertyDescriptor(s,m):null;D&&(D.get||D.set)?Object.defineProperty(r,m,D):r[m]=s[m]}return r.default=s,d&&d.set(s,r),r},E=function(s){if(typeof WeakMap!="function")return null;var I=new WeakMap,d=new WeakMap;return(E=function(p){return p?d:I})(s)},f=e("K+nK"),A.t0=f,A.next=6,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 6:return A.t1=A.sent,o=(0,A.t0)(A.t1),A.t2=S,A.next=11,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 11:return A.t3=A.sent,g=(0,A.t2)(A.t3),i={type:"object",properties:{select1:{title:"\u5355\u9009",description:"\u5C1D\u8BD5\u9009\u62E9\u201C\u663E\u793A\u8F93\u5165\u6846\u201D",type:"string",enum:["a","b"],enumNames:["\u9690\u85CF\u8F93\u5165\u6846","\u663E\u793A\u8F93\u5165\u6846"],disabled:"{{rootValue.input1.length > 5}}",default:"a"},input1:{title:"\u8F93\u5165\u6846",description:"\u5C1D\u8BD5\u8F93\u5165\u8D85\u8FC75\u4E2A\u5B57\u7B26",type:"string",hidden:'{{formData.select1 == "a"}}'}}},u=function(){var s=(0,g.useForm)();return o.default.createElement(g.default,{form:s,schema:i})},y=u,A.abrupt("return",y);case 17:case"end":return A.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo1;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo"}},"function-demo-1":{component:Object($.dynamic)({loader:function(){var M=Object(Y.a)(C.a.mark(function T(){var f,o,g,E,S;return C.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return f=e("K+nK"),u.t0=f,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,o=(0,u.t0)(u.t1),u.t2=f,u.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return u.t3=u.sent,g=(0,u.t2)(u.t3),u.next=13,e.e(19).then(e.bind(null,"8iYR"));case 13:return E=u.sent,S=function(){return o.default.createElement(g.default,{schema:E.expression})},u.abrupt("return",S);case 16:case"end":return u.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { expression } from '../json/schema';

export default () => <FR schema={expression} />;`},"demo/FR.jsx":{import:"../demo/FR",content:Ae},"json/schema.js":{import:"../json/schema",content:ve}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo-1"}},"lifeCycle-demo":{component:Object($.dynamic)({loader:function(){var M=Object(Y.a)(C.a.mark(function T(){var f,o,g,E,S,i,u,y,B;return C.a.wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return S=function(I,d){if(!d&&I&&I.__esModule)return I;if(I===null||typeof I!="object"&&typeof I!="function")return{default:I};var r=E(d);if(r&&r.has(I))return r.get(I);var p={},m=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var D in I)if(D!=="default"&&Object.prototype.hasOwnProperty.call(I,D)){var w=m?Object.getOwnPropertyDescriptor(I,D):null;w&&(w.get||w.set)?Object.defineProperty(p,D,w):p[D]=I[D]}return p.default=I,r&&r.set(I,p),p},E=function(I){if(typeof WeakMap!="function")return null;var d=new WeakMap,r=new WeakMap;return(E=function(m){return m?r:d})(I)},P.t0=S,P.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return P.t1=P.sent,f=(0,P.t0)(P.t1),P.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 9:return o=P.sent,P.t2=S,P.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 13:return P.t3=P.sent,g=(0,P.t2)(P.t3),i=function(I){return new Promise(function(d){return setTimeout(d,I)})},u={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u4E0B\u62C9\u9009\u6846",description:"\u52A0\u8F7D\u4E2D...",type:"string",enum:[],widget:"select"}}},y=function(){var I=(0,g.useForm)(),d=function(){I.setValues({input1:"hello world"}),i(3e3).then(function(p){I.setSchemaByPath("select1",{description:"",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]})})};return f.default.createElement(g.default,{form:I,schema:u,onMount:d})},B=y,P.abrupt("return",B);case 20:case"end":return P.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"lifeCycle-demo"}},"watch-demo":{component:Object($.dynamic)({loader:function(){var M=Object(Y.a)(C.a.mark(function T(){var f,o,g,E,S,i,u,y;return C.a.wrap(function(A){for(;;)switch(A.prev=A.next){case 0:return S=function(s,I){if(!I&&s&&s.__esModule)return s;if(s===null||typeof s!="object"&&typeof s!="function")return{default:s};var d=E(I);if(d&&d.has(s))return d.get(s);var r={},p=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var m in s)if(m!=="default"&&Object.prototype.hasOwnProperty.call(s,m)){var D=p?Object.getOwnPropertyDescriptor(s,m):null;D&&(D.get||D.set)?Object.defineProperty(r,m,D):r[m]=s[m]}return r.default=s,d&&d.set(s,r),r},E=function(s){if(typeof WeakMap!="function")return null;var I=new WeakMap,d=new WeakMap;return(E=function(p){return p?d:I})(s)},A.t0=S,A.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return A.t1=A.sent,f=(0,A.t0)(A.t1),A.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 9:return o=A.sent,A.t2=S,A.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 13:return A.t3=A.sent,g=(0,A.t2)(A.t3),i={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"}}},u=function(){var s=(0,g.useForm)(),I={"#":function(r){console.log("\u8868\u5355\u7684\u65F6\u65F6\u6570\u636E\u4E3A\uFF1A",r)},input1:function(r){s.setValueByPath("input2",r)}};return f.default.createElement(g.default,{form:s,schema:i,watch:I})},y=u,A.abrupt("return",y);case 19:case"end":return A.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo"}},"watch-demo-1":{component:Object($.dynamic)({loader:function(){var M=Object(Y.a)(C.a.mark(function T(){var f,o,g,E,S,i,u,y,B,A;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return u=function(d,r){if(!r&&d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var p=i(r);if(p&&p.has(d))return p.get(d);var m={},D=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var w in d)if(w!=="default"&&Object.prototype.hasOwnProperty.call(d,w)){var z=D?Object.getOwnPropertyDescriptor(d,w):null;z&&(z.get||z.set)?Object.defineProperty(m,w,z):m[w]=d[w]}return m.default=d,p&&p.set(d,m),m},i=function(d){if(typeof WeakMap!="function")return null;var r=new WeakMap,p=new WeakMap;return(i=function(D){return D?p:r})(d)},f=e("K+nK"),s.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return s.t0=f,s.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=u,s.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return s.t3=s.sent,g=(0,s.t2)(s.t3),s.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 17:return E=s.sent,s.t4=u,s.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 21:return s.t5=s.sent,S=(0,s.t4)(s.t5),y={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"radio"}}}}},B=function(){var d=(0,S.useForm)(),r=function(D,w){w.length>0?alert("errorFields:"+JSON.stringify(w)):alert("formData:"+JSON.stringify(D,null,2))},p={input1:function(D){D.length>2?d.setSchemaByPath("obj1.select",function(w){var z=w.enumNames;return{enumNames:z.map(function(_){return _+"a"})}}):d.setSchemaByPath("obj1.select",{enumNames:["\u65E9","\u4E2D","\u665A"]})}};return g.default.createElement("div",null,g.default.createElement(S.default,{form:d,schema:y,onFinish:r,watch:p}),g.default.createElement(o.default,{type:"",style:{marginRight:8},onClick:function(){return d.setSchemaByPath("input2",{title:"\u7F16\u8F91\u6846",format:"textarea"})}},"\u5C06 input \u6539\u4E3A textarea"),g.default.createElement(o.default,{type:"primary",onClick:d.submit},"\u63D0\u4EA4"))},A=B,s.abrupt("return",A);case 27:case"end":return s.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo-1"}},"widget-demo":{component:Object($.dynamic)({loader:function(){var M=Object(Y.a)(C.a.mark(function T(){var f,o,g,E,S,i,u,y,B,A,P,s,I;return C.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return B=function(m,D){if(!D&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var w=y(D);if(w&&w.has(m))return w.get(m);var z={},_=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ie in m)if(ie!=="default"&&Object.prototype.hasOwnProperty.call(m,ie)){var ge=_?Object.getOwnPropertyDescriptor(m,ie):null;ge&&(ge.get||ge.set)?Object.defineProperty(z,ie,ge):z[ie]=m[ie]}return z.default=m,w&&w.set(m,z),z},y=function(m){if(typeof WeakMap!="function")return null;var D=new WeakMap,w=new WeakMap;return(y=function(_){return _?w:D})(m)},f=e("K+nK"),r.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return r.t0=f,r.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return r.t1=r.sent,o=(0,r.t0)(r.t1),r.next=12,Promise.all([e.e(3),e.e(60)]).then(e.t.bind(null,"cUip",7));case 12:return r.t2=f,r.next=15,Promise.all([e.e(0),e.e(12),e.e(58),e.e(61)]).then(e.t.bind(null,"iJl9",7));case 15:return r.t3=r.sent,g=(0,r.t2)(r.t3),r.t4=f,r.next=20,e.e(64).then(e.bind(null,"0Owb"));case 20:return r.t5=r.sent,E=(0,r.t4)(r.t5),r.t6=B,r.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return r.t7=r.sent,S=(0,r.t6)(r.t7),r.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 29:return i=r.sent,r.t8=B,r.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 33:return r.t9=r.sent,u=(0,r.t8)(r.t9),A={type:"object",properties:{string:{title:"\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6",type:"string",widget:"site"},select:{title:"\u5355\u9009",type:"number",enum:[1,2,3],enumNames:["\u9009\u98791","\u9009\u98792","\u9009\u98793"]}}},P=function(m){return S.default.createElement(g.default,(0,E.default)({addonBefore:"http://",addonAfter:".com"},m))},s=function(){var m=(0,u.useForm)(),D=function(){};return S.default.createElement("div",null,S.default.createElement(u.default,{form:m,schema:A,widgets:{site:P},onFinish:function(z){return alert(JSON.stringify(z,null,2))}}),S.default.createElement(o.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4"))},I=s,r.abrupt("return",I);case 40:case"end":return r.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},identifier:"widget-demo"}},"schema-demo":{component:Object($.dynamic)({loader:function(){var M=Object(Y.a)(C.a.mark(function T(){var f,o,g,E,S;return C.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return f=e("K+nK"),u.t0=f,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,o=(0,u.t0)(u.t1),u.t2=f,u.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return u.t3=u.sent,g=(0,u.t2)(u.t3),u.next=13,e.e(19).then(e.bind(null,"8iYR"));case 13:return E=u.sent,S=function(){return o.default.createElement(g.default,{schema:E.basic})},u.abrupt("return",S);case 16:case"end":return u.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { basic } from '../json/schema';

export default () => <FR schema={basic} />;`},"demo/FR.jsx":{import:"../demo/FR",content:Ae},"json/schema.js":{import:"../json/schema",content:ve}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo"}},"docs-playground":{component:Object($.dynamic)({loader:function(){var M=Object(Y.a)(C.a.mark(function T(){return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"BASV"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:En},"main.js":{import:"./main",content:Fe},"json/simplest.json":{import:"./json/simplest.json",content:Tn},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:wn},"monaco/index.js":{import:"./monaco",content:Rn},"theme.css":{import:"./theme.css",content:fn},"index.css":{import:"./index.css",content:Ze}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:"^16.0.0"},"react-dom":{version:"^16.0.0"},"deep-equal":{version:"2.0.5"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.3.2"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-simple-code-editor":{version:"0.11.0"},prismjs:{version:"1.23.0"}},identifier:"docs-playground"}},"table-render-advanced":{component:Object($.dynamic)({loader:function(){var M=Object(Y.a)(C.a.mark(function T(){return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"7ZP+"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{tsx:$n}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.0"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"1.x"}},transform:!0,defaultShowCode:!0,identifier:"table-render-advanced"}},"table-render-demo":{component:Object($.dynamic)({loader:function(){var M=Object(Y.a)(C.a.mark(function T(){var f,o,g,E,S,i,u,y,B;return C.a.wrap(function(P){for(;;)switch(P.prev=P.next){case 0:return f=e("K+nK"),P.t0=f,P.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return P.t1=P.sent,o=(0,P.t0)(P.t1),P.next=8,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(57)]).then(e.bind(null,"P2DI"));case 8:for(g=P.sent,E=[],S=0;S<6;S++)E.push({id:S.toString(),title:"\u6807\u9898".concat(S+1),created_at:new Date().getTime()});return i={type:"object",properties:{string:{title:"\u6807\u9898",type:"string","ui:width":"30%"},created_at:{title:"\u521B\u5EFA\u65F6\u95F4",type:"string",format:"date","ui:width":"30%"}}},u=[{title:"\u6807\u9898",dataIndex:"title"},{title:"\u521B\u5EFA\u65F6\u95F4",key:"since",dataIndex:"created_at",valueType:"date"},{title:"\u64CD\u4F5C",render:function(I,d){return o.default.createElement("a",{onClick:function(){return alert(I.title)}},"\u7F16\u8F91")}}],y=function(){var I=function(){return{rows:E,total:E.length}};return o.default.createElement(g.TableProvider,null,o.default.createElement(g.Search,{schema:i,api:I}),o.default.createElement(g.Table,{headerTitle:"\u6700\u7B80\u8868\u683C",columns:u,rowKey:"id"}))},B=y,P.abrupt("return",B);case 16:case"end":return P.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Wrapper;`}},dependencies:{react:{version:">=16.8.0"},"table-render":{version:"1.1.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.x"}},transform:!0,defaultShowCode:!0,identifier:"table-render-demo"}},"generator-demo":{component:Object($.dynamic)({loader:function(){var M=Object(Y.a)(C.a.mark(function T(){var f,o,g,E,S,i;return C.a.wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return f=e("K+nK"),y.t0=f,y.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return y.t1=y.sent,o=(0,y.t0)(y.t1),y.t2=f,y.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(56)]).then(e.bind(null,"nYSz"));case 9:return y.t3=y.sent,g=(0,y.t2)(y.t3),E={type:"object",properties:{inputName:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string"}}},S=function(){return o.default.createElement("div",{style:{height:"80vh"}},o.default.createElement(g.default,{defaultValue:E}))},i=S,y.abrupt("return",i);case 15:case"end":return y.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.0.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"generator-demo"}},"generator-modal":{component:Object($.dynamic)({loader:function(){var M=Object(Y.a)(C.a.mark(function T(){return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"PPgD"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:Wn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.0.2"},"react-dom":{version:">=16.9.0"}},identifier:"generator-modal"}},"generator-transformer":{component:Object($.dynamic)({loader:function(){var M=Object(Y.a)(C.a.mark(function T(){return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"jktF"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:Sn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.0.2"},"react-dom":{version:">=16.9.0"}},identifier:"generator-transformer"}},"generator-settings":{component:Object($.dynamic)({loader:function(){var M=Object(Y.a)(C.a.mark(function T(){return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"M63W"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:we}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.0.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-settings"}},"generator-playground":{component:Object($.dynamic)({loader:function(){var M=Object(Y.a)(C.a.mark(function T(){return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"TYW4"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:qn},"index.less":{import:"./index.less",content:Vn}},dependencies:{react:{version:">=16.8.0"},umi:{version:"3.4.20"},"fr-generator":{version:"2.0.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-playground"}}}},TIsu:function(Mn,gn,e){},Zs1V:function(Mn){Mn.exports=JSON.parse("{}")},p8sG:function(Mn,gn,e){"use strict";Mn.exports=e("80pN")}}]);
