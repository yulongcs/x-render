(window.webpackJsonp=window.webpackJsonp||[]).push([[34,9],{"0zqC":function(Bn,gn,e){"use strict";e.r(gn);var X=e("tJVT"),n=e("q1tI"),C=e.n(n),V=e("wx14"),ce=e("rePB"),L=e("ODXe"),tn=e("U8pU"),Ie=e("Ff2n"),me=e("VTBJ"),rt=e("TSYQ"),je=e.n(rt),Mn=e("Zm9Q"),Tn=e("5Z9U"),On=e("6cGi"),fn=e("KQm4"),Ye=e("wgJM"),Ln=e("t23M");function wn(t){var a=Object(n.useRef)(),l=Object(n.useRef)(!1);function h(){for(var b=arguments.length,v=new Array(b),E=0;E<b;E++)v[E]=arguments[E];l.current||(Ye.a.cancel(a.current),a.current=Object(Ye.a)(function(){t.apply(void 0,v)}))}return Object(n.useEffect)(function(){return function(){l.current=!0,Ye.a.cancel(a.current)}},[]),h}function Rn(t){var a=Object(n.useRef)([]),l=Object(n.useState)({}),h=Object(L.a)(l,2),b=h[1],v=Object(n.useRef)(typeof t=="function"?t():t),E=wn(function(){var W=v.current;a.current.forEach(function(K){W=K(W)}),a.current=[],v.current=W,b({})});function R(W){a.current.push(W),E()}return[v.current,R]}var we=e("4IlW");function kn(t,a){var l,h=t.prefixCls,b=t.id,v=t.active,E=t.rtl,R=t.tab,W=R.key,K=R.tab,$=R.disabled,G=R.closeIcon,J=t.tabBarGutter,ie=t.tabPosition,x=t.closable,Y=t.renderWrapper,ue=t.removeAriaLabel,U=t.editable,q=t.onClick,re=t.onRemove,Q=t.onFocus,oe="".concat(h,"-tab");n.useEffect(function(){return re},[]);var k={};ie==="top"||ie==="bottom"?k[E?"marginLeft":"marginRight"]=J:k.marginBottom=J;var be=U&&x!==!1&&!$;function ne(ae){$||q(ae)}function de(ae){ae.preventDefault(),ae.stopPropagation(),U.onEdit("remove",{key:W,event:ae})}var fe=n.createElement("div",{key:W,ref:a,className:je()(oe,(l={},Object(ce.a)(l,"".concat(oe,"-with-remove"),be),Object(ce.a)(l,"".concat(oe,"-active"),v),Object(ce.a)(l,"".concat(oe,"-disabled"),$),l)),style:k,onClick:ne},n.createElement("div",{role:"tab","aria-selected":v,id:b&&"".concat(b,"-tab-").concat(W),className:"".concat(oe,"-btn"),"aria-controls":b&&"".concat(b,"-panel-").concat(W),"aria-disabled":$,tabIndex:$?null:0,onClick:function(H){H.stopPropagation(),ne(H)},onKeyDown:function(H){[we.a.SPACE,we.a.ENTER].includes(H.which)&&(H.preventDefault(),ne(H))},onFocus:Q},K),be&&n.createElement("button",{type:"button","aria-label":ue||"remove",tabIndex:0,className:"".concat(oe,"-remove"),onClick:function(H){H.stopPropagation(),de(H)}},G||U.removeIcon||"\xD7"));return Y&&(fe=Y(fe)),fe}var $n=n.forwardRef(kn),at={width:0,height:0,left:0,top:0};function M(t,a,l){return Object(n.useMemo)(function(){for(var h,b=new Map,v=a.get((h=t[0])===null||h===void 0?void 0:h.key)||at,E=v.left+v.width,R=0;R<t.length;R+=1){var W=t[R].key,K=a.get(W);if(!K){var $;K=a.get(($=t[R-1])===null||$===void 0?void 0:$.key)||at}var G=b.get(W)||Object(me.a)({},K);G.right=E-G.left-G.width,b.set(W,G)}return b},[t.map(function(h){return h.key}).join("_"),a,l])}var N={width:0,height:0,left:0,top:0,right:0};function T(t,a,l,h,b){var v=b.tabs,E=b.tabPosition,R=b.rtl,W,K,$;["top","bottom"].includes(E)?(W="width",K=R?"right":"left",$=Math.abs(a.left)):(W="height",K="top",$=-a.top);var G=a[W],J=l[W],ie=h[W],x=G;return J+ie>G&&(x=G-ie),Object(n.useMemo)(function(){if(!v.length)return[0,0];for(var Y=v.length,ue=Y,U=0;U<Y;U+=1){var q=t.get(v[U].key)||N;if(q[K]+q[W]>$+x){ue=U-1;break}}for(var re=0,Q=Y-1;Q>=0;Q-=1){var oe=t.get(v[Q].key)||N;if(oe[K]<$){re=Q+1;break}}return[re,ue]},[t,$,x,E,v.map(function(Y){return Y.key}).join("_"),R])}var f=e("Gytx"),o=e.n(f),g=e("Kwbf");function O(t,a){var l=t.prefixCls,h=t.invalidate,b=t.item,v=t.renderItem,E=t.responsive,R=t.registerSize,W=t.itemKey,K=t.className,$=t.style,G=t.children,J=t.display,ie=t.order,x=t.component,Y=x===void 0?"div":x,ue=Object(Ie.a)(t,["prefixCls","invalidate","item","renderItem","responsive","registerSize","itemKey","className","style","children","display","order","component"]),U=E&&!J;function q(be){R(W,be)}n.useEffect(function(){return function(){q(null)}},[]);var re=v&&b!==void 0?v(b):G,Q;h||(Q={opacity:U?0:1,height:U?0:void 0,overflowY:U?"hidden":void 0,order:E?ie:void 0,pointerEvents:U?"none":void 0});var oe={};U&&(oe["aria-hidden"]=!0);var k=n.createElement(Y,Object(V.a)({className:je()(!h&&l,K),style:Object(me.a)(Object(me.a)({},Q),$)},oe,ue,{ref:a}),re);return E&&(k=n.createElement(Ln.default,{onResize:function(ne){var de=ne.offsetWidth;q(de)}},k)),k}var S=n.forwardRef(O);S.displayName="Item";var s=S;function u(){var t=Object(n.useState)({}),a=Object(L.a)(t,2),l=a[1],h=Object(n.useRef)([]),b=Object(n.useRef)(!1),v=0,E=0;Object(n.useEffect)(function(){return function(){b.current=!0}},[]);function R(W){var K=v;v+=1,h.current.length<K+1&&(h.current[K]=W);var $=h.current[K];function G(J){h.current[K]=typeof J=="function"?J(h.current[K]):J,Ye.a.cancel(E),E=Object(Ye.a)(function(){b.current||l({})})}return[$,G]}return R}var y=function(a,l){var h=n.useContext(F);if(!h){var b=a.component,v=b===void 0?"div":b,E=Object(Ie.a)(a,["component"]);return n.createElement(v,Object(V.a)({},E,{ref:l}))}var R=h.className,W=Object(Ie.a)(h,["className"]),K=a.className,$=Object(Ie.a)(a,["className"]);return n.createElement(F.Provider,{value:null},n.createElement(s,Object(V.a)({ref:l,className:je()(R,K)},W,$)))},B=n.forwardRef(y);B.displayName="RawItem";var I=B,F=n.createContext(null),i="responsive",A="invalidate";function d(t){return"+ ".concat(t.length," ...")}function r(t,a){var l=t.prefixCls,h=l===void 0?"rc-overflow":l,b=t.data,v=b===void 0?[]:b,E=t.renderItem,R=t.renderRawItem,W=t.itemKey,K=t.itemWidth,$=K===void 0?10:K,G=t.ssr,J=t.style,ie=t.className,x=t.maxCount,Y=t.renderRest,ue=t.renderRawRest,U=t.suffix,q=t.component,re=q===void 0?"div":q,Q=t.itemComponent,oe=t.onVisibleChange,k=Object(Ie.a)(t,["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"]),be=u(),ne=G==="full",de=be(null),fe=Object(L.a)(de,2),ae=fe[0],H=fe[1],le=ae||0,ye=be(new Map),he=Object(L.a)(ye,2),Re=he[0],Ke=he[1],Ee=be(0),Oe=Object(L.a)(Ee,2),Me=Oe[0],Ne=Oe[1],De=be(0),Pe=Object(L.a)(De,2),$e=Pe[0],qe=Pe[1],Ve=be(0),Ue=Object(L.a)(Ve,2),Xe=Ue[0],Le=Ue[1],Fn=Object(n.useState)(null),rn=Object(L.a)(Fn,2),Qe=rn[0],un=rn[1],yn=Object(n.useState)(null),bn=Object(L.a)(yn,2),Ae=bn[0],He=bn[1],_e=n.useMemo(function(){return Ae===null&&ne?Number.MAX_SAFE_INTEGER:Ae||0},[Ae,ae]),Ze=Object(n.useState)(!1),Wn=Object(L.a)(Ze,2),Un=Wn[0],Kn=Wn[1],an="".concat(h,"-item"),Pn=Math.max(Me,$e),ln=v.length&&x===i,Dn=x===A,en=ln||typeof x=="number"&&v.length>x,sn=Object(n.useMemo)(function(){var ve=v;return ln?ae===null&&ne?ve=v:ve=v.slice(0,Math.min(v.length,le/$)):typeof x=="number"&&(ve=v.slice(0,x)),ve},[v,$,ae,x,ln]),jn=Object(n.useMemo)(function(){return ln?v.slice(_e+1):v.slice(sn.length)},[v,sn,ln,_e]),cn=Object(n.useCallback)(function(ve,Se){var Te;return typeof W=="function"?W(ve):(Te=W&&(ve==null?void 0:ve[W]))!==null&&Te!==void 0?Te:Se},[W]),ke=Object(n.useCallback)(E||function(ve){return ve},[E]);function xe(ve,Se){He(ve),Se||(Kn(ve<v.length-1),oe==null||oe(ve))}function Jn(ve,Se){H(Se.clientWidth)}function Gn(ve,Se){Ke(function(Te){var nn=new Map(Te);return Se===null?nn.delete(ve):nn.set(ve,Se),nn})}function et(ve,Se){qe(Se),Ne($e)}function En(ve,Se){Le(Se)}function hn(ve){return Re.get(cn(sn[ve],ve))}n.useLayoutEffect(function(){if(le&&Pn&&sn){var ve=Xe,Se=sn.length,Te=Se-1;if(!Se){xe(0),un(null);return}for(var nn=0;nn<Se;nn+=1){var Yn=hn(nn);if(Yn===void 0){xe(nn-1,!0);break}if(ve+=Yn,nn===Te-1&&ve+hn(Te)<=le){xe(Te),un(null);break}else if(ve+Pn>le){xe(nn-1),un(ve-Yn-Xe+$e);break}else if(nn===Te){xe(Te),un(ve-Xe);break}}U&&hn(0)+Xe>le&&un(null)}},[le,Re,$e,Xe,cn,sn]);var Hn=Un&&!!jn.length,Cn={};Qe!==null&&ln&&(Cn={position:"absolute",left:Qe,top:0});var mn={prefixCls:an,responsive:ln,component:Q,invalidate:Dn},xn=R?function(ve,Se){var Te=cn(ve,Se);return n.createElement(F.Provider,{key:Te,value:Object(me.a)(Object(me.a)({},mn),{},{order:Se,item:ve,itemKey:Te,registerSize:Gn,display:Se<=_e})},R(ve,Se))}:function(ve,Se){var Te=cn(ve,Se);return n.createElement(s,Object(V.a)({},mn,{order:Se,key:Te,item:ve,renderItem:ke,itemKey:Te,registerSize:Gn,display:Se<=_e}))},An,Xn={order:Hn?_e:Number.MAX_SAFE_INTEGER,className:"".concat(an,"-rest"),registerSize:et,display:Hn};if(ue)ue&&(An=n.createElement(F.Provider,{value:Object(me.a)(Object(me.a)({},mn),Xn)},ue(jn)));else{var dn=Y||d;An=n.createElement(s,Object(V.a)({},mn,Xn),typeof dn=="function"?dn(jn):dn)}var In=n.createElement(re,Object(V.a)({className:je()(!Dn&&h,ie),style:J,ref:a},k),sn.map(xn),en?An:null,U&&n.createElement(s,Object(V.a)({},mn,{order:_e,className:"".concat(an,"-suffix"),registerSize:En,display:!0,style:Cn}),U));return ln&&(In=n.createElement(Ln.default,{onResize:Jn},In)),In}var p=n.forwardRef(r);p.displayName="Overflow",p.Item=I,p.RESPONSIVE=i,p.INVALIDATE=A;var m=p,P=m,w=e("1OyB"),z=e("vuIU"),_=e("Ji7U"),se=e("LK+K"),ge=e("bT9E"),pn=e("YrtM"),We=n.createContext(null);function Be(t,a){var l=Object(me.a)({},t);return Object.keys(a).forEach(function(h){var b=a[h];b!==void 0&&(l[h]=b)}),l}function Sn(t){var a=t.children,l=t.locked,h=Object(Ie.a)(t,["children","locked"]),b=n.useContext(We),v=Object(pn.a)(function(){return Be(b,h)},[b,h],function(E,R){return!l&&(E[0]!==R[0]||!o()(E[1],R[1]))});return n.createElement(We.Provider,{value:v},a)}function st(t,a,l,h){var b=n.useContext(We),v=b.activeKey,E=b.onActive,R=b.onInactive,W={active:v===t};return a||(W.onMouseEnter=function(K){l==null||l({key:t,domEvent:K}),E(t)},W.onMouseLeave=function(K){h==null||h({key:t,domEvent:K}),R(t)}),W}function qn(t){var a=t.item,l=Object(Ie.a)(t,["item"]);return Object.defineProperty(l,"item",{get:function(){return Object(g.a)(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),a}}),l}function c(t){var a=t.icon,l=t.props,h=t.children,b;return typeof a=="function"?b=n.createElement(a,Object(me.a)({},l)):b=a,b||h||null}function D(t){var a=n.useContext(We),l=a.mode,h=a.rtl,b=a.inlineIndent;if(l!=="inline")return null;var v=t;return h?{paddingRight:v*b}:{paddingLeft:v*b}}var j=[],pe=n.createContext(null);function ee(){return n.useContext(pe)}var Fe=n.createContext(j);function ze(t){var a=n.useContext(Fe);return n.useMemo(function(){return t!==void 0?[].concat(Object(fn.a)(a),[t]):a},[a,t])}var Ge=n.createContext(null),Ut=n.createContext(null);function Jt(t,a){return t===void 0?null:"".concat(t,"-").concat(a)}function Gt(t){var a=n.useContext(Ut);return Jt(a,t)}var br=function(t){Object(_.a)(l,t);var a=Object(se.a)(l);function l(){return Object(w.a)(this,l),a.apply(this,arguments)}return Object(z.a)(l,[{key:"render",value:function(){var b=this.props,v=b.title,E=b.attribute,R=b.elementRef,W=Object(Ie.a)(b,["title","attribute","elementRef"]),K=Object(ge.a)(W,["eventKey"]);return Object(g.a)(!E,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),n.createElement(P.Item,Object(V.a)({},E,{title:typeof v=="string"?v:void 0},K,{ref:R}))}}]),l}(n.Component),Er=function(a){var l,h=a.style,b=a.className,v=a.eventKey,E=a.disabled,R=a.itemIcon,W=a.children,K=a.role,$=a.onMouseEnter,G=a.onMouseLeave,J=a.onClick,ie=a.onKeyDown,x=a.onFocus,Y=Object(Ie.a)(a,["style","className","eventKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"]),ue=Gt(v),U=n.useContext(We),q=U.prefixCls,re=U.onItemClick,Q=U.disabled,oe=U.overflowDisabled,k=U.itemIcon,be=U.selectedKeys,ne=U.onActive,de="".concat(q,"-item"),fe=n.useRef(),ae=n.useRef(),H=Q||E,le=ze(v),ye=function(Ve){return{key:v,keyPath:le,item:fe.current,domEvent:Ve}},he=R||k,Re=st(v,H,$,G),Ke=Re.active,Ee=Object(Ie.a)(Re,["active"]),Oe=be.includes(v),Me=D(le.length),Ne=function(Ve){if(!H){var Ue=ye(Ve);J==null||J(qn(Ue)),re(Ue)}},De=function(Ve){if(ie==null||ie(Ve),Ve.which===we.a.ENTER){var Ue=ye(Ve);J==null||J(qn(Ue)),re(Ue)}},Pe=function(Ve){ne(v),x==null||x(Ve)},$e={};return a.role==="option"&&($e["aria-selected"]=Oe),n.createElement(br,Object(V.a)({ref:fe,elementRef:ae,role:K===null?"none":K||"menuitem",tabIndex:E?null:-1,"data-menu-id":oe&&ue?null:ue},Y,Ee,$e,{component:"li","aria-disabled":E,style:Object(me.a)(Object(me.a)({},Me),h),className:je()(de,(l={},Object(ce.a)(l,"".concat(de,"-active"),Ke),Object(ce.a)(l,"".concat(de,"-selected"),Oe),Object(ce.a)(l,"".concat(de,"-disabled"),H),l),b),onClick:Ne,onKeyDown:De,onFocus:Pe}),W,n.createElement(c,{props:Object(me.a)(Object(me.a)({},a),{},{isSelected:Oe}),icon:he}))};function Cr(t){var a=t.eventKey,l=ee(),h=ze(a);return n.useEffect(function(){if(l)return l.registerPath(a,h),function(){l.unregisterPath(a,h)}},[h]),l?null:n.createElement(Er,t)}var Pt=Cr;function Dt(t,a){return Object(Mn.a)(t).map(function(l,h){if(n.isValidElement(l)){var b=l.key;return b==null&&(b="tmp_key-".concat([].concat(Object(fn.a)(a),[h]).join("-"))),n.cloneElement(l,{key:b,eventKey:b})}return l})}function _n(t){var a=n.useRef(t);a.current=t;var l=n.useCallback(function(){for(var h,b=arguments.length,v=new Array(b),E=0;E<b;E++)v[E]=arguments[E];return(h=a.current)===null||h===void 0?void 0:h.call.apply(h,[a].concat(v))},[]);return t?l:void 0}var Or=function(a,l){var h=a.className,b=a.children,v=Object(Ie.a)(a,["className","children"]),E=n.useContext(We),R=E.prefixCls,W=E.mode;return n.createElement("ul",Object(V.a)({className:je()(R,"".concat(R,"-sub"),"".concat(R,"-").concat(W==="inline"?"inline":"vertical"),h)},v,{"data-menu-list":!0,ref:l}),b)},Ht=n.forwardRef(Or);Ht.displayName="SubMenuList";var xt=Ht,Rr=e("uciX"),Vn={adjustX:1,adjustY:1},Xt={topLeft:{points:["bl","tl"],overflow:Vn,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Vn,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:Vn,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:Vn,offset:[4,0]}},Sr={topLeft:{points:["bl","tl"],overflow:Vn,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:Vn,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:Vn,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:Vn,offset:[4,0]}},fa=Xt;function Yt(t,a,l){if(a)return a;if(l)return l[t]||l.other}var Fr={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function Pr(t){var a=t.prefixCls,l=t.visible,h=t.children,b=t.popup,v=t.popupClassName,E=t.popupOffset,R=t.disabled,W=t.mode,K=t.onVisibleChange,$=n.useContext(We),G=$.getPopupContainer,J=$.rtl,ie=$.subMenuOpenDelay,x=$.subMenuCloseDelay,Y=$.builtinPlacements,ue=$.triggerSubMenuAction,U=$.forceSubMenuRender,q=$.motion,re=$.defaultMotions,Q=n.useState(!1),oe=Object(L.a)(Q,2),k=oe[0],be=oe[1],ne=J?Object(me.a)(Object(me.a)({},Sr),Y):Object(me.a)(Object(me.a)({},Xt),Y),de=Fr[W],fe=Yt(W,q,re),ae=Object(me.a)(Object(me.a)({},fe),{},{leavedClassName:"".concat(a,"-hidden"),removeOnLeave:!1,motionAppear:!0}),H=n.useRef();return n.useEffect(function(){return H.current=Object(Ye.a)(function(){be(l)}),function(){Ye.a.cancel(H.current)}},[l]),n.createElement(Rr.a,{prefixCls:a,popupClassName:je()("".concat(a,"-popup"),Object(ce.a)({},"".concat(a,"-rtl"),J),v),stretch:W==="horizontal"?"minWidth":null,getPopupContainer:G,builtinPlacements:ne,popupPlacement:de,popupVisible:k,popup:b,popupAlign:E&&{offset:E},action:R?[]:[ue],mouseEnterDelay:ie,mouseLeaveDelay:x,onPopupVisibleChange:K,forceRender:U,popupMotion:ae},h)}var Dr=e("8XRh");function jr(t){var a=t.id,l=t.open,h=t.keyPath,b=t.children,v="inline",E=n.useContext(We),R=E.prefixCls,W=E.forceSubMenuRender,K=E.motion,$=E.defaultMotions,G=E.mode,J=n.useRef(!1);J.current=G===v;var ie=n.useState(!J.current),x=Object(L.a)(ie,2),Y=x[0],ue=x[1],U=J.current?l:!1;n.useEffect(function(){J.current&&ue(!1)},[G]);var q=Object(me.a)({},Yt(v,K,$));h.length>1&&(q.motionAppear=!1);var re=q.onVisibleChanged;return q.onVisibleChanged=function(Q){return!J.current&&!Q&&ue(!0),re==null?void 0:re(Q)},Y?null:n.createElement(Sn,{mode:v,locked:!J.current},n.createElement(Dr.default,Object(V.a)({visible:U},q,{forceRender:W,removeOnLeave:!1,leavedClassName:"".concat(R,"-hidden")}),function(Q){var oe=Q.className,k=Q.style;return n.createElement(xt,{id:a,className:oe,style:k},b)}))}var Ar=function(a){var l,h=a.style,b=a.className,v=a.title,E=a.eventKey,R=a.disabled,W=a.internalPopupClose,K=a.children,$=a.itemIcon,G=a.expandIcon,J=a.popupClassName,ie=a.popupOffset,x=a.onClick,Y=a.onMouseEnter,ue=a.onMouseLeave,U=a.onTitleClick,q=a.onTitleMouseEnter,re=a.onTitleMouseLeave,Q=Object(Ie.a)(a,["style","className","title","eventKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"]),oe=Gt(E),k=n.useContext(We),be=k.prefixCls,ne=k.mode,de=k.openKeys,fe=k.disabled,ae=k.overflowDisabled,H=k.activeKey,le=k.selectedKeys,ye=k.itemIcon,he=k.expandIcon,Re=k.onItemClick,Ke=k.onOpenChange,Ee=k.onActive,Oe=n.useContext(Ge),Me=Oe.isSubPathKey,Ne=ze(),De="".concat(be,"-submenu"),Pe=fe||R,$e=n.useRef(),qe=n.useRef(),Ve=$||ye,Ue=G||he,Xe=de.includes(E),Le=!ae&&Xe,Fn=Me(le,E),rn=st(E,Pe,q,re),Qe=rn.active,un=Object(Ie.a)(rn,["active"]),yn=n.useState(!1),bn=Object(L.a)(yn,2),Ae=bn[0],He=bn[1],_e=function(xe){Pe||He(xe)},Ze=function(xe){_e(!0),Y==null||Y({key:E,domEvent:xe})},Wn=function(xe){_e(!1),ue==null||ue({key:E,domEvent:xe})},Un=n.useMemo(function(){return Qe||(ne!=="inline"?Ae||Me([H],E):!1)},[ne,Qe,H,Ae,E,Me]),Kn=D(Ne.length),an=function(xe){Pe||(U==null||U({key:E,domEvent:xe}),ne==="inline"&&Ke(E,!Xe))},Pn=_n(function(ke){x==null||x(qn(ke)),Re(ke)}),ln=function(xe){ne!=="inline"&&Ke(E,xe)},Dn=function(){Ee(E)},en=oe&&"".concat(oe,"-popup"),sn=n.createElement("div",Object(V.a)({role:"menuitem",style:Kn,className:"".concat(De,"-title"),tabIndex:Pe?null:-1,ref:$e,title:typeof v=="string"?v:null,"data-menu-id":ae&&oe?null:oe,"aria-expanded":Le,"aria-haspopup":!0,"aria-controls":en,"aria-disabled":Pe,onClick:an,onFocus:Dn},un),v,n.createElement(c,{icon:ne!=="horizontal"?Ue:null,props:Object(me.a)(Object(me.a)({},a),{},{isOpen:Le,isSubMenu:!0})},n.createElement("i",{className:"".concat(De,"-arrow")}))),jn=n.useRef(ne);if(ne!=="inline"&&(jn.current=Ne.length>1?"vertical":ne),!ae){var cn=jn.current;sn=n.createElement(Pr,{mode:cn,prefixCls:De,visible:!W&&Le&&ne!=="inline",popupClassName:J,popupOffset:ie,popup:n.createElement(Sn,{mode:cn},n.createElement(xt,{id:en,ref:qe},K)),disabled:Pe,onVisibleChange:ln},sn)}return n.createElement(Sn,{onItemClick:Pn,mode:ne==="horizontal"?"vertical":ne,itemIcon:Ve,expandIcon:Ue},n.createElement(P.Item,Object(V.a)({role:"none"},Q,{component:"li",style:h,className:je()(De,"".concat(De,"-").concat(ne),b,(l={},Object(ce.a)(l,"".concat(De,"-open"),Le),Object(ce.a)(l,"".concat(De,"-active"),Un),Object(ce.a)(l,"".concat(De,"-selected"),Fn),Object(ce.a)(l,"".concat(De,"-disabled"),Pe),l)),onMouseEnter:Ze,onMouseLeave:Wn}),sn,!ae&&n.createElement(jr,{id:en,open:Le,keyPath:Ne},K)))};function Qt(t){var a=t.eventKey,l=t.children,h=ze(a),b=Dt(l,h),v=ee();n.useEffect(function(){if(v)return v.registerPath(a,h),function(){v.unregisterPath(a,h)}},[h]);var E;return v?E=b:E=n.createElement(Ar,t,b),n.createElement(Fe.Provider,{value:h},E)}var Ir=e("x/xZ");function Zt(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Object(Ir.a)(t)){var l=t.nodeName.toLowerCase(),h=["input","select","textarea","button"].includes(l)||t.isContentEditable||l==="a"&&!!t.getAttribute("href"),b=t.getAttribute("tabindex"),v=Number(b),E=null;return b&&!Number.isNaN(v)?E=v:h&&E===null&&(E=0),h&&t.disabled&&(E=null),E!==null&&(E>=0||a&&E<0)}return!1}function kt(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,l=Object(fn.a)(t.querySelectorAll("*")).filter(function(h){return Zt(h,a)});return Zt(t,a)&&l.unshift(t),l}var mt=null;function pa(){mt=document.activeElement}function va(){mt=null}function ha(){if(mt)try{mt.focus()}catch(t){}}function ga(t,a){if(a.keyCode===9){var l=kt(t),h=l[a.shiftKey?0:l.length-1],b=h===document.activeElement||t===document.activeElement;if(b){var v=l[a.shiftKey?l.length-1:0];v.focus(),a.preventDefault()}}}var jt=we.a.LEFT,At=we.a.RIGHT,It=we.a.UP,ft=we.a.DOWN,pt=we.a.ENTER,qt=we.a.ESC,_t=[It,ft,jt,At];function Nr(t,a,l,h){var b,v,E,R,W="prev",K="next",$="children",G="parent";if(t==="inline"&&h===pt)return{inlineTrigger:!0};var J=(b={},Object(ce.a)(b,It,W),Object(ce.a)(b,ft,K),b),ie=(v={},Object(ce.a)(v,jt,l?K:W),Object(ce.a)(v,At,l?W:K),Object(ce.a)(v,ft,$),Object(ce.a)(v,pt,$),v),x=(E={},Object(ce.a)(E,It,W),Object(ce.a)(E,ft,K),Object(ce.a)(E,pt,$),Object(ce.a)(E,qt,G),Object(ce.a)(E,jt,l?$:G),Object(ce.a)(E,At,l?G:$),E),Y={inline:J,horizontal:ie,vertical:x,inlineSub:J,horizontalSub:x,verticalSub:x},ue=(R=Y["".concat(t).concat(a?"":"Sub")])===null||R===void 0?void 0:R[h];switch(ue){case W:return{offset:-1,sibling:!0};case K:return{offset:1,sibling:!0};case G:return{offset:-1,sibling:!1};case $:return{offset:1,sibling:!1};default:return null}}function Br(t){for(var a=t;a;){if(a.getAttribute("data-menu-list"))return a;a=a.parentElement}return null}function Mr(t,a){for(var l=t||document.activeElement;l;){if(a.has(l))return l;l=l.parentElement}return null}function Tr(t,a){var l=kt(t,!0);return l.filter(function(h){return a.has(h)})}function er(t,a,l){var h=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!t)return null;var b=Tr(t,a),v=b.length,E=b.findIndex(function(R){return l===R});return h<0?E===-1?E=v-1:E-=1:h>0&&(E+=1),E=(E+v)%v,b[E]}function wr(t,a,l,h,b,v,E,R,W,K){var $=n.useRef(),G=n.useRef();G.current=a;var J=function(){Ye.a.cancel($.current)};return n.useEffect(function(){return function(){J()}},[]),function(ie){var x=ie.which;if([].concat(_t,[pt,qt]).includes(x)){var Y,ue,U,q=function(){Y=new Set,ue=new Map,U=new Map;var ye=v();return ye.forEach(function(he){var Re=document.querySelector("[data-menu-id='".concat(Jt(h,he),"']"));Re&&(Y.add(Re),U.set(Re,he),ue.set(he,Re))}),Y};q();var re=ue.get(a),Q=Mr(re,Y),oe=U.get(Q),k=Nr(t,E(oe,!0).length===1,l,x);if(!k)return;_t.includes(x)&&ie.preventDefault();var be=function(ye){if(ye){var he=ye,Re=ye.querySelector("a");(Re==null?void 0:Re.getAttribute("href"))&&(he=Re);var Ke=U.get(ye);R(Ke),J(),$.current=Object(Ye.a)(function(){G.current===Ke&&he.focus()})}};if(k.sibling||!Q){var ne;!Q||t==="inline"?ne=b.current:ne=Br(Q);var de=er(ne,Y,Q,k.offset);be(de)}else if(k.inlineTrigger)W(oe);else if(k.offset>0)W(oe,!0),J(),$.current=Object(Ye.a)(function(){q();var le=Q.getAttribute("aria-controls"),ye=document.getElementById(le),he=er(ye,Y);be(he)},5);else if(k.offset<0){var fe=E(oe,!0),ae=fe[fe.length-2],H=ue.get(ae);W(ae,!1),be(H)}}K==null||K(ie)}}var Wr=Math.random().toFixed(5).toString().slice(2),nr=0;function Kr(t){var a=Object(On.a)(t,{value:t}),l=Object(L.a)(a,2),h=l[0],b=l[1];return n.useEffect(function(){nr+=1;var v="".concat(Wr,"-").concat(nr);b("rc-menu-uuid-".concat(v))},[]),h}var ya=e("p8sG");function Lr(t){Promise.resolve().then(t)}var Nt="__RC_UTIL_PATH_SPLIT__",tr=function(a){return a.join(Nt)},$r=function(a){return a.split(Nt)},Bt="rc-menu-more";function Vr(){var t=n.useState({}),a=Object(L.a)(t,2),l=a[1],h=Object(n.useRef)(new Map),b=Object(n.useRef)(new Map),v=n.useState([]),E=Object(L.a)(v,2),R=E[0],W=E[1],K=Object(n.useRef)(0),$=Object(n.useCallback)(function(U,q){var re=tr(q);b.current.set(re,U),h.current.set(U,re),K.current+=1;var Q=K.current;Lr(function(){Q===K.current&&l({})})},[]),G=Object(n.useCallback)(function(U,q){var re=tr(q);b.current.delete(re),h.current.delete(U)},[]),J=Object(n.useCallback)(function(U){W(U)},[]),ie=Object(n.useCallback)(function(U,q){var re=h.current.get(U)||"",Q=$r(re);return q&&R.includes(Q[0])&&Q.unshift(Bt),Q},[R]),x=Object(n.useCallback)(function(U,q){return U.some(function(re){var Q=ie(re,!0);return Q.includes(q)})},[ie]),Y=function(){var q=Object(fn.a)(h.current.keys());return R.length&&q.push(Bt),q},ue=Object(n.useCallback)(function(U){var q="".concat(h.current.get(U)).concat(Nt),re=new Set;return Object(fn.a)(b.current.keys()).forEach(function(Q){Q.startsWith(q)&&re.add(b.current.get(Q))}),re},[]);return{registerPath:$,unregisterPath:G,refreshOverflowKeys:J,isSubPathKey:x,getKeyPath:ie,getKeys:Y,getSubPathKeys:ue}}var vt=[],zr=function(a){var l,h,b=a.prefixCls,v=b===void 0?"rc-menu":b,E=a.style,R=a.className,W=a.tabIndex,K=W===void 0?0:W,$=a.children,G=a.direction,J=a.id,ie=a.mode,x=ie===void 0?"vertical":ie,Y=a.inlineCollapsed,ue=a.disabled,U=a.disabledOverflow,q=a.subMenuOpenDelay,re=q===void 0?.1:q,Q=a.subMenuCloseDelay,oe=Q===void 0?.1:Q,k=a.forceSubMenuRender,be=a.defaultOpenKeys,ne=a.openKeys,de=a.activeKey,fe=a.defaultActiveFirst,ae=a.selectable,H=ae===void 0?!0:ae,le=a.multiple,ye=le===void 0?!1:le,he=a.defaultSelectedKeys,Re=a.selectedKeys,Ke=a.onSelect,Ee=a.onDeselect,Oe=a.inlineIndent,Me=Oe===void 0?24:Oe,Ne=a.motion,De=a.defaultMotions,Pe=a.triggerSubMenuAction,$e=Pe===void 0?"hover":Pe,qe=a.builtinPlacements,Ve=a.itemIcon,Ue=a.expandIcon,Xe=a.overflowedIndicator,Le=Xe===void 0?"...":Xe,Fn=a.getPopupContainer,rn=a.onClick,Qe=a.onOpenChange,un=a.onKeyDown,yn=a.openAnimation,bn=a.openTransitionName,Ae=Object(Ie.a)(a,["prefixCls","style","className","tabIndex","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName"]),He=Dt($,vt),_e=n.useState(!1),Ze=Object(L.a)(_e,2),Wn=Ze[0],Un=Ze[1],Kn=n.useRef(),an=Kr(J),Pn=G==="rtl",ln=n.useMemo(function(){return x==="inline"&&Y?["vertical",Y]:[x,!1]},[x,Y]),Dn=Object(L.a)(ln,2),en=Dn[0],sn=Dn[1],jn=n.useState(0),cn=Object(L.a)(jn,2),ke=cn[0],xe=cn[1],Jn=ke>=He.length-1||en!=="horizontal"||U,Gn=Object(On.a)(be,{value:ne,postState:function(Z){return Z||vt}}),et=Object(L.a)(Gn,2),En=et[0],hn=et[1],Hn=n.useState(En),Cn=Object(L.a)(Hn,2),mn=Cn[0],xn=Cn[1],An=en==="inline",Xn=n.useRef(!1);n.useEffect(function(){An&&xn(En)},[En]),n.useEffect(function(){if(!Xn.current){Xn.current=!0;return}if(An)hn(mn);else{var te=[];hn(te),Qe==null||Qe(te)}},[An]);var dn=Vr(),In=dn.registerPath,ve=dn.unregisterPath,Se=dn.refreshOverflowKeys,Te=dn.isSubPathKey,nn=dn.getKeyPath,Yn=dn.getKeys,gt=dn.getSubPathKeys,Wt=n.useMemo(function(){return{registerPath:In,unregisterPath:ve}},[In,ve]),Kt=n.useMemo(function(){return{isSubPathKey:Te}},[Te]);n.useEffect(function(){Se(Jn?vt:He.slice(ke+1).map(function(te){return te.key}))},[ke,Jn]);var Lt=Object(On.a)(de||fe&&((l=He[0])===null||l===void 0?void 0:l.key),{value:de}),nt=Object(L.a)(Lt,2),yt=nt[0],ot=nt[1],bt=_n(function(te){ot(te)}),$t=_n(function(){ot(void 0)}),Et=Object(On.a)(he||[],{value:Re,postState:function(Z){return Array.isArray(Z)?Z:Z==null?vt:[Z]}}),Ct=Object(L.a)(Et,2),tt=Ct[0],Nn=Ct[1],Ot=function(Z){if(!!H){var Ce=Z.key,Je=tt.includes(Ce),on;Je?on=tt.filter(function(Zn){return Zn!==Ce}):ye?on=[].concat(Object(fn.a)(tt),[Ce]):on=[Ce],Nn(on);var zn=Object(me.a)(Object(me.a)({},Z),{},{selectedKeys:on});Je?Ee==null||Ee(zn):Ke==null||Ke(zn)}},Rt=_n(function(te){rn==null||rn(qn(te)),Ot(te)}),ut=_n(function(te,Z){var Ce=En.filter(function(on){return on!==te});if(Z)Ce.push(te);else if(en!=="inline"){var Je=gt(te);Ce=Ce.filter(function(on){return!Je.has(on)})}o()(En,Ce)||(hn(Ce),Qe==null||Qe(Ce))}),Qn=_n(Fn),lt=function(Z,Ce){var Je=Ce!=null?Ce:!En.includes(Z);ut(Z,Je)},dt=wr(en,yt,Pn,an,Kn,Yn,nn,ot,lt,un);n.useEffect(function(){Un(!0)},[]);var St=en!=="horizontal"||U?He:He.map(function(te,Z){return n.createElement(Sn,{key:te.key,overflowDisabled:Z>ke},te)}),Ft=n.createElement(P,Object(V.a)({id:J,ref:Kn,prefixCls:"".concat(v,"-overflow"),component:"ul",itemComponent:Pt,className:je()(v,"".concat(v,"-root"),"".concat(v,"-").concat(en),R,(h={},Object(ce.a)(h,"".concat(v,"-inline-collapsed"),sn),Object(ce.a)(h,"".concat(v,"-rtl"),Pn),h)),dir:G,style:E,role:"menu",tabIndex:K,data:St,renderRawItem:function(Z){return Z},renderRawRest:function(Z){var Ce=Z.length,Je=Ce?He.slice(-Ce):null;return n.createElement(Qt,{eventKey:Bt,title:Le,disabled:Jn,internalPopupClose:Ce===0},Je)},maxCount:en!=="horizontal"||U?P.INVALIDATE:P.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(Z){xe(Z)},onKeyDown:dt},Ae));return n.createElement(Ut.Provider,{value:an},n.createElement(Sn,{prefixCls:v,mode:en,openKeys:En,rtl:Pn,disabled:ue,motion:Wn?Ne:null,defaultMotions:Wn?De:null,activeKey:yt,onActive:bt,onInactive:$t,selectedKeys:tt,inlineIndent:Me,subMenuOpenDelay:re,subMenuCloseDelay:oe,forceSubMenuRender:k,builtinPlacements:qe,triggerSubMenuAction:$e,getPopupContainer:Qn,itemIcon:Ve,expandIcon:Ue,onItemClick:Rt,onOpenChange:ut},n.createElement(Ge.Provider,{value:Kt},Ft),n.createElement(pe.Provider,{value:Wt},He)))},Ur=zr,Jr=function(a){var l=a.className,h=a.title,b=a.eventKey,v=a.children,E=Object(Ie.a)(a,["className","title","eventKey","children"]),R=n.useContext(We),W=R.prefixCls,K="".concat(W,"-item-group");return n.createElement("li",Object(V.a)({},E,{onClick:function(G){return G.stopPropagation()},className:je()(K,l)}),n.createElement("div",{className:"".concat(K,"-title"),title:typeof h=="string"?h:void 0},h),n.createElement("ul",{className:"".concat(K,"-list")},v))};function Gr(t){var a=t.children,l=Object(Ie.a)(t,["children"]),h=ze(l.eventKey),b=Dt(a,h),v=ee();return v?b:n.createElement(Jr,l,b)}function Hr(t){var a=t.className,l=t.style,h=n.useContext(We),b=h.prefixCls,v=ee();return v?null:n.createElement("li",{className:je()("".concat(b,"-item-divider"),a),style:l})}var it=Ur;it.Item=Pt,it.SubMenu=Qt,it.ItemGroup=Gr,it.Divider=Hr;var xr=it,Xr=e("eDIo");function Yr(t,a){var l=t.prefixCls,h=t.editable,b=t.locale,v=t.style;return!h||h.showAdd===!1?null:n.createElement("button",{ref:a,type:"button",className:"".concat(l,"-nav-add"),style:v,"aria-label":(b==null?void 0:b.addAriaLabel)||"Add tab",onClick:function(R){h.onEdit("add",{event:R})}},h.addIcon||"+")}var rr=n.forwardRef(Yr);function Qr(t,a){var l=t.prefixCls,h=t.id,b=t.tabs,v=t.locale,E=t.mobile,R=t.moreIcon,W=R===void 0?"More":R,K=t.moreTransitionName,$=t.style,G=t.className,J=t.editable,ie=t.tabBarGutter,x=t.rtl,Y=t.onTabClick,ue=Object(n.useState)(!1),U=Object(L.a)(ue,2),q=U[0],re=U[1],Q=Object(n.useState)(null),oe=Object(L.a)(Q,2),k=oe[0],be=oe[1],ne="".concat(h,"-more-popup"),de="".concat(l,"-dropdown"),fe=k!==null?"".concat(ne,"-").concat(k):null,ae=v==null?void 0:v.dropdownAriaLabel,H=n.createElement(xr,{onClick:function(Oe){var Me=Oe.key,Ne=Oe.domEvent;Y(Me,Ne),re(!1)},id:ne,tabIndex:-1,role:"listbox","aria-activedescendant":fe,selectedKeys:[k],"aria-label":ae!==void 0?ae:"expanded dropdown"},b.map(function(Ee){return n.createElement(Pt,{key:Ee.key,id:"".concat(ne,"-").concat(Ee.key),role:"option","aria-controls":h&&"".concat(h,"-panel-").concat(Ee.key),disabled:Ee.disabled},Ee.tab)}));function le(Ee){for(var Oe=b.filter(function($e){return!$e.disabled}),Me=Oe.findIndex(function($e){return $e.key===k})||0,Ne=Oe.length,De=0;De<Ne;De+=1){Me=(Me+Ee+Ne)%Ne;var Pe=Oe[Me];if(!Pe.disabled){be(Pe.key);return}}}function ye(Ee){var Oe=Ee.which;if(!q){[we.a.DOWN,we.a.SPACE,we.a.ENTER].includes(Oe)&&(re(!0),Ee.preventDefault());return}switch(Oe){case we.a.UP:le(-1),Ee.preventDefault();break;case we.a.DOWN:le(1),Ee.preventDefault();break;case we.a.ESC:re(!1);break;case we.a.SPACE:case we.a.ENTER:k!==null&&Y(k,Ee);break}}Object(n.useEffect)(function(){var Ee=document.getElementById(fe);Ee&&Ee.scrollIntoView&&Ee.scrollIntoView(!1)},[k]),Object(n.useEffect)(function(){q||be(null)},[q]);var he=Object(ce.a)({},x?"marginLeft":"marginRight",ie);b.length||(he.visibility="hidden",he.order=1);var Re=je()(Object(ce.a)({},"".concat(de,"-rtl"),x)),Ke=E?null:n.createElement(Xr.default,{prefixCls:de,overlay:H,trigger:["hover"],visible:q,transitionName:K,onVisibleChange:re,overlayClassName:Re,mouseEnterDelay:.1,mouseLeaveDelay:.1},n.createElement("button",{type:"button",className:"".concat(l,"-nav-more"),style:he,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":ne,id:"".concat(h,"-more"),"aria-expanded":q,onKeyDown:ye},W));return n.createElement("div",{className:je()("".concat(l,"-nav-operations"),G),style:$,ref:a},Ke,n.createElement(rr,{prefixCls:l,locale:v,editable:J}))}var Zr=n.forwardRef(Qr),Mt=Object(n.createContext)(null),kr=.1,ar=.01,ht=20,sr=Math.pow(.995,ht);function qr(t,a){var l=Object(n.useState)(),h=Object(L.a)(l,2),b=h[0],v=h[1],E=Object(n.useState)(0),R=Object(L.a)(E,2),W=R[0],K=R[1],$=Object(n.useState)(0),G=Object(L.a)($,2),J=G[0],ie=G[1],x=Object(n.useState)(),Y=Object(L.a)(x,2),ue=Y[0],U=Y[1],q=Object(n.useRef)();function re(de){var fe=de.touches[0],ae=fe.screenX,H=fe.screenY;v({x:ae,y:H}),window.clearInterval(q.current)}function Q(de){if(!!b){de.preventDefault();var fe=de.touches[0],ae=fe.screenX,H=fe.screenY;v({x:ae,y:H});var le=ae-b.x,ye=H-b.y;a(le,ye);var he=Date.now();K(he),ie(he-W),U({x:le,y:ye})}}function oe(){if(!!b&&(v(null),U(null),ue)){var de=ue.x/J,fe=ue.y/J,ae=Math.abs(de),H=Math.abs(fe);if(Math.max(ae,H)<kr)return;var le=de,ye=fe;q.current=window.setInterval(function(){if(Math.abs(le)<ar&&Math.abs(ye)<ar){window.clearInterval(q.current);return}le*=sr,ye*=sr,a(le*ht,ye*ht)},ht)}}var k=Object(n.useRef)();function be(de){var fe=de.deltaX,ae=de.deltaY,H=0,le=Math.abs(fe),ye=Math.abs(ae);le===ye?H=k.current==="x"?fe:ae:le>ye?(H=fe,k.current="x"):(H=ae,k.current="y"),a(-H,-H)&&de.preventDefault()}var ne=Object(n.useRef)(null);ne.current={onTouchStart:re,onTouchMove:Q,onTouchEnd:oe,onWheel:be},n.useEffect(function(){function de(le){ne.current.onTouchStart(le)}function fe(le){ne.current.onTouchMove(le)}function ae(le){ne.current.onTouchEnd(le)}function H(le){ne.current.onWheel(le)}return document.addEventListener("touchmove",fe,{passive:!1}),document.addEventListener("touchend",ae,{passive:!1}),t.current.addEventListener("touchstart",de,{passive:!1}),t.current.addEventListener("wheel",H),function(){document.removeEventListener("touchmove",fe),document.removeEventListener("touchend",ae)}},[])}function _r(){var t=Object(n.useRef)(new Map);function a(h){return t.current.has(h)||t.current.set(h,n.createRef()),t.current.get(h)}function l(h){t.current.delete(h)}return[a,l]}function ir(t,a){var l=n.useRef(t),h=n.useState({}),b=Object(L.a)(h,2),v=b[1];function E(R){var W=typeof R=="function"?R(l.current):R;W!==l.current&&a(W,l.current),l.current=W,v({})}return[l.current,E]}var or=function(a){var l=a.position,h=a.prefixCls,b=a.extra;if(!b)return null;var v,E=b;return l==="right"&&(v=E.right||!E.left&&E||null),l==="left"&&(v=E.left||null),v?n.createElement("div",{className:"".concat(h,"-extra-content")},v):null};function ea(t,a){var l,h=n.useContext(Mt),b=h.prefixCls,v=h.tabs,E=t.className,R=t.style,W=t.id,K=t.animated,$=t.activeKey,G=t.rtl,J=t.extra,ie=t.editable,x=t.locale,Y=t.tabPosition,ue=t.tabBarGutter,U=t.children,q=t.onTabClick,re=t.onTabScroll,Q=Object(n.useRef)(),oe=Object(n.useRef)(),k=Object(n.useRef)(),be=Object(n.useRef)(),ne=_r(),de=Object(L.a)(ne,2),fe=de[0],ae=de[1],H=Y==="top"||Y==="bottom",le=ir(0,function(te,Z){H&&re&&re({direction:te>Z?"left":"right"})}),ye=Object(L.a)(le,2),he=ye[0],Re=ye[1],Ke=ir(0,function(te,Z){!H&&re&&re({direction:te>Z?"top":"bottom"})}),Ee=Object(L.a)(Ke,2),Oe=Ee[0],Me=Ee[1],Ne=Object(n.useState)(0),De=Object(L.a)(Ne,2),Pe=De[0],$e=De[1],qe=Object(n.useState)(0),Ve=Object(L.a)(qe,2),Ue=Ve[0],Xe=Ve[1],Le=Object(n.useState)(0),Fn=Object(L.a)(Le,2),rn=Fn[0],Qe=Fn[1],un=Object(n.useState)(0),yn=Object(L.a)(un,2),bn=yn[0],Ae=yn[1],He=Object(n.useState)(null),_e=Object(L.a)(He,2),Ze=_e[0],Wn=_e[1],Un=Object(n.useState)(null),Kn=Object(L.a)(Un,2),an=Kn[0],Pn=Kn[1],ln=Object(n.useState)(0),Dn=Object(L.a)(ln,2),en=Dn[0],sn=Dn[1],jn=Object(n.useState)(0),cn=Object(L.a)(jn,2),ke=cn[0],xe=cn[1],Jn=Rn(new Map),Gn=Object(L.a)(Jn,2),et=Gn[0],En=Gn[1],hn=M(v,et,Pe),Hn="".concat(b,"-nav-operations-hidden"),Cn=0,mn=0;H?G?(Cn=0,mn=Math.max(0,Pe-Ze)):(Cn=Math.min(0,Ze-Pe),mn=0):(Cn=Math.min(0,an-Ue),mn=0);function xn(te){return te<Cn?Cn:te>mn?mn:te}var An=Object(n.useRef)(),Xn=Object(n.useState)(),dn=Object(L.a)(Xn,2),In=dn[0],ve=dn[1];function Se(){ve(Date.now())}function Te(){window.clearTimeout(An.current)}qr(Q,function(te,Z){function Ce(Je,on){Je(function(zn){var Zn=xn(zn+on);return Zn})}if(H){if(Ze>=Pe)return!1;Ce(Re,te)}else{if(an>=Ue)return!1;Ce(Me,Z)}return Te(),Se(),!0}),Object(n.useEffect)(function(){return Te(),In&&(An.current=window.setTimeout(function(){ve(0)},100)),Te},[In]);function nn(){var te=arguments.length>0&&arguments[0]!==void 0?arguments[0]:$,Z=hn.get(te)||{width:0,height:0,left:0,right:0,top:0};if(H){var Ce=he;G?Z.right<he?Ce=Z.right:Z.right+Z.width>he+Ze&&(Ce=Z.right+Z.width-Ze):Z.left<-he?Ce=-Z.left:Z.left+Z.width>-he+Ze&&(Ce=-(Z.left+Z.width-Ze)),Me(0),Re(xn(Ce))}else{var Je=Oe;Z.top<-Oe?Je=-Z.top:Z.top+Z.height>-Oe+an&&(Je=-(Z.top+Z.height-an)),Re(0),Me(xn(Je))}}var Yn=T(hn,{width:Ze,height:an,left:he,top:Oe},{width:rn,height:bn},{width:en,height:ke},Object(me.a)(Object(me.a)({},t),{},{tabs:v})),gt=Object(L.a)(Yn,2),Wt=gt[0],Kt=gt[1],Lt=v.map(function(te){var Z=te.key;return n.createElement($n,{id:W,prefixCls:b,key:Z,rtl:G,tab:te,closable:te.closable,editable:ie,active:Z===$,tabPosition:Y,tabBarGutter:ue,renderWrapper:U,removeAriaLabel:x==null?void 0:x.removeAriaLabel,ref:fe(Z),onClick:function(Je){q(Z,Je)},onRemove:function(){ae(Z)},onFocus:function(){nn(Z),Se(),G||(Q.current.scrollLeft=0),Q.current.scrollTop=0}})}),nt=wn(function(){var te,Z,Ce,Je,on,zn,Zn,Vt,zt,ua=((te=Q.current)===null||te===void 0?void 0:te.offsetWidth)||0,la=((Z=Q.current)===null||Z===void 0?void 0:Z.offsetHeight)||0,mr=((Ce=be.current)===null||Ce===void 0?void 0:Ce.offsetWidth)||0,fr=((Je=be.current)===null||Je===void 0?void 0:Je.offsetHeight)||0,da=((on=k.current)===null||on===void 0?void 0:on.offsetWidth)||0,ca=((zn=k.current)===null||zn===void 0?void 0:zn.offsetHeight)||0;Wn(ua),Pn(la),sn(mr),xe(fr);var pr=(((Zn=oe.current)===null||Zn===void 0?void 0:Zn.offsetWidth)||0)-mr,vr=(((Vt=oe.current)===null||Vt===void 0?void 0:Vt.offsetHeight)||0)-fr;$e(pr),Xe(vr);var hr=(zt=k.current)===null||zt===void 0?void 0:zt.className.includes(Hn);Qe(pr-(hr?0:da)),Ae(vr-(hr?0:ca)),En(function(){var gr=new Map;return v.forEach(function(ma){var yr=ma.key,ct=fe(yr).current;ct&&gr.set(yr,{width:ct.offsetWidth,height:ct.offsetHeight,left:ct.offsetLeft,top:ct.offsetTop})}),gr})}),yt=v.slice(0,Wt),ot=v.slice(Kt+1),bt=[].concat(Object(fn.a)(yt),Object(fn.a)(ot)),$t=Object(n.useState)(),Et=Object(L.a)($t,2),Ct=Et[0],tt=Et[1],Nn=hn.get($),Ot=Object(n.useRef)();function Rt(){Ye.a.cancel(Ot.current)}Object(n.useEffect)(function(){var te={};return Nn&&(H?(G?te.right=Nn.right:te.left=Nn.left,te.width=Nn.width):(te.top=Nn.top,te.height=Nn.height)),Rt(),Ot.current=Object(Ye.a)(function(){tt(te)}),Rt},[Nn,H,G]),Object(n.useEffect)(function(){nn()},[$,Nn,hn,H]),Object(n.useEffect)(function(){nt()},[G,ue,$,v.map(function(te){return te.key}).join("_")]);var ut=!!bt.length,Qn="".concat(b,"-nav-wrap"),lt,dt,St,Ft;return H?G?(dt=he>0,lt=he+Ze<Pe):(lt=he<0,dt=-he+Ze<Pe):(St=Oe<0,Ft=-Oe+an<Ue),n.createElement("div",{ref:a,role:"tablist",className:je()("".concat(b,"-nav"),E),style:R,onKeyDown:function(){Se()}},n.createElement(or,{position:"left",extra:J,prefixCls:b}),n.createElement(Ln.default,{onResize:nt},n.createElement("div",{className:je()(Qn,(l={},Object(ce.a)(l,"".concat(Qn,"-ping-left"),lt),Object(ce.a)(l,"".concat(Qn,"-ping-right"),dt),Object(ce.a)(l,"".concat(Qn,"-ping-top"),St),Object(ce.a)(l,"".concat(Qn,"-ping-bottom"),Ft),l)),ref:Q},n.createElement(Ln.default,{onResize:nt},n.createElement("div",{ref:oe,className:"".concat(b,"-nav-list"),style:{transform:"translate(".concat(he,"px, ").concat(Oe,"px)"),transition:In?"none":void 0}},Lt,n.createElement(rr,{ref:be,prefixCls:b,locale:x,editable:ie,style:{visibility:ut?"hidden":null}}),n.createElement("div",{className:je()("".concat(b,"-ink-bar"),Object(ce.a)({},"".concat(b,"-ink-bar-animated"),K.inkBar)),style:Ct}))))),n.createElement(Zr,Object(V.a)({},t,{ref:k,prefixCls:b,tabs:bt,className:!ut&&Hn})),n.createElement(or,{position:"right",extra:J,prefixCls:b}))}var ur=n.forwardRef(ea);function na(t){var a=t.id,l=t.activeKey,h=t.animated,b=t.tabPosition,v=t.rtl,E=t.destroyInactiveTabPane,R=n.useContext(Mt),W=R.prefixCls,K=R.tabs,$=h.tabPane,G=K.findIndex(function(J){return J.key===l});return n.createElement("div",{className:je()("".concat(W,"-content-holder"))},n.createElement("div",{className:je()("".concat(W,"-content"),"".concat(W,"-content-").concat(b),Object(ce.a)({},"".concat(W,"-content-animated"),$)),style:G&&$?Object(ce.a)({},v?"marginRight":"marginLeft","-".concat(G,"00%")):null},K.map(function(J){return n.cloneElement(J.node,{key:J.key,prefixCls:W,tabKey:J.key,id:a,animated:$,active:J.key===l,destroyInactiveTabPane:E})})))}function lr(t){var a=t.prefixCls,l=t.forceRender,h=t.className,b=t.style,v=t.id,E=t.active,R=t.animated,W=t.destroyInactiveTabPane,K=t.tabKey,$=t.children,G=n.useState(l),J=Object(L.a)(G,2),ie=J[0],x=J[1];n.useEffect(function(){E?x(!0):W&&x(!1)},[E,W]);var Y={};return E||(R?(Y.visibility="hidden",Y.height=0,Y.overflowY="hidden"):Y.display="none"),n.createElement("div",{id:v&&"".concat(v,"-panel-").concat(K),role:"tabpanel",tabIndex:E?0:-1,"aria-labelledby":v&&"".concat(v,"-tab-").concat(K),"aria-hidden":!E,style:Object(me.a)(Object(me.a)({},Y),b),className:je()("".concat(a,"-tabpane"),E&&"".concat(a,"-tabpane-active"),h)},(E||ie||l)&&$)}var dr=0;function ta(t){return Object(Mn.a)(t).map(function(a){if(n.isValidElement(a)){var l=a.key!==void 0?String(a.key):void 0;return Object(me.a)(Object(me.a)({key:l},a.props),{},{node:a})}return null}).filter(function(a){return a})}function ra(t,a){var l,h=t.id,b=t.prefixCls,v=b===void 0?"rc-tabs":b,E=t.className,R=t.children,W=t.direction,K=t.activeKey,$=t.defaultActiveKey,G=t.editable,J=t.animated,ie=J===void 0?{inkBar:!0,tabPane:!1}:J,x=t.tabPosition,Y=x===void 0?"top":x,ue=t.tabBarGutter,U=t.tabBarStyle,q=t.tabBarExtraContent,re=t.locale,Q=t.moreIcon,oe=t.moreTransitionName,k=t.destroyInactiveTabPane,be=t.renderTabBar,ne=t.onChange,de=t.onTabClick,fe=t.onTabScroll,ae=Object(Ie.a)(t,["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"]),H=ta(R),le=W==="rtl",ye;ie===!1?ye={inkBar:!1,tabPane:!1}:ie===!0?ye={inkBar:!0,tabPane:!0}:ye=Object(me.a)({inkBar:!0,tabPane:!1},Object(tn.a)(ie)==="object"?ie:{});var he=Object(n.useState)(!1),Re=Object(L.a)(he,2),Ke=Re[0],Ee=Re[1];Object(n.useEffect)(function(){Ee(Object(Tn.a)())},[]);var Oe=Object(On.a)(function(){var Ae;return(Ae=H[0])===null||Ae===void 0?void 0:Ae.key},{value:K,defaultValue:$}),Me=Object(L.a)(Oe,2),Ne=Me[0],De=Me[1],Pe=Object(n.useState)(function(){return H.findIndex(function(Ae){return Ae.key===Ne})}),$e=Object(L.a)(Pe,2),qe=$e[0],Ve=$e[1];Object(n.useEffect)(function(){var Ae=H.findIndex(function(_e){return _e.key===Ne});if(Ae===-1){var He;Ae=Math.max(0,Math.min(qe,H.length-1)),De((He=H[Ae])===null||He===void 0?void 0:He.key)}Ve(Ae)},[H.map(function(Ae){return Ae.key}).join("_"),Ne,qe]);var Ue=Object(On.a)(null,{value:h}),Xe=Object(L.a)(Ue,2),Le=Xe[0],Fn=Xe[1],rn=Y;Ke&&!["left","right"].includes(Y)&&(rn="top"),Object(n.useEffect)(function(){h||(Fn("rc-tabs-".concat(dr)),dr+=1)},[]);function Qe(Ae,He){de==null||de(Ae,He),De(Ae),ne==null||ne(Ae)}var un={id:Le,activeKey:Ne,animated:ye,tabPosition:rn,rtl:le,mobile:Ke},yn,bn=Object(me.a)(Object(me.a)({},un),{},{editable:G,locale:re,moreIcon:Q,moreTransitionName:oe,tabBarGutter:ue,onTabClick:Qe,onTabScroll:fe,extra:q,style:U,panes:R});return be?yn=be(bn,ur):yn=n.createElement(ur,bn),n.createElement(Mt.Provider,{value:{tabs:H,prefixCls:v}},n.createElement("div",Object(V.a)({ref:a,id:h,className:je()(v,"".concat(v,"-").concat(rn),(l={},Object(ce.a)(l,"".concat(v,"-mobile"),Ke),Object(ce.a)(l,"".concat(v,"-editable"),G),Object(ce.a)(l,"".concat(v,"-rtl"),le),l),E)},ae),yn,n.createElement(na,Object(V.a)({destroyInactiveTabPane:k},un,{animated:ye}))))}var cr=n.forwardRef(ra);cr.TabPane=lr;var aa=cr,sa=aa,Tt=e("MZF8"),vn=e("dEAq"),ia=e("ZpkN"),ba=e("TIsu");function wt(t,a){var l,h=(l=t.match(/\.(\w+)$/))===null||l===void 0?void 0:l[1];return h||(h=a.tsx?"tsx":"jsx"),h}var oa=t=>{var a,l,h,b=Object(n.useRef)(),v=Object(n.useContext)(vn.context),E=v.locale,R=Object(vn.useLocaleProps)(E,t),W=Object(vn.useDemoUrl)(R.identifier),K=R.demoUrl||W,$=(Tt.a===null||Tt.a===void 0?void 0:Tt.a.location.hash)==="#".concat(R.identifier),G=Object.keys(R.sources).length===1,J=Object(vn.useCodeSandbox)((a=R.hideActions)!==null&&a!==void 0&&a.includes("CSB")?null:R),ie=Object(vn.useRiddle)((l=R.hideActions)!==null&&l!==void 0&&l.includes("RIDDLE")?null:R),x=Object(vn.useMotions)(R.motions||[],b.current),Y=Object(X.default)(x,2),ue=Y[0],U=Y[1],q=Object(vn.useCopy)(),re=Object(X.default)(q,2),Q=re[0],oe=re[1],k=Object(n.useState)("_"),be=Object(X.default)(k,2),ne=be[0],de=be[1],fe=Object(n.useState)(wt(ne,R.sources[ne])),ae=Object(X.default)(fe,2),H=ae[0],le=ae[1],ye=Object(n.useState)(Boolean(R.defaultShowCode)),he=Object(X.default)(ye,2),Re=he[0],Ke=he[1],Ee=Object(n.useState)(Math.random()),Oe=Object(X.default)(Ee,2),Me=Oe[0],Ne=Oe[1],De=R.sources[ne][H]||R.sources[ne].content,Pe=Object(vn.useTSPlaygroundUrl)(E,De),$e=Object(n.useRef)(),qe=Object(vn.usePrefersColor)(),Ve=Object(X.default)(qe,1),Ue=Ve[0];Object(n.useEffect)(()=>{Ne(Math.random())},[Ue]);function Xe(Le){de(Le),le(wt(Le,R.sources[Le]))}return C.a.createElement("div",{style:R.style,className:[R.className,"__dumi-default-previewer",$?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:R.identifier,"data-debug":R.debug||void 0,"data-iframe":R.iframe||void 0},R.iframe&&C.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),C.a.createElement("div",{ref:b,className:"__dumi-default-previewer-demo",style:{transform:R.transform?"translate(0, 0)":void 0,padding:R.compact||R.iframe&&R.compact!==!1?"0":void 0,background:R.background}},R.iframe?C.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(R.iframe).replace(/(\d)$/,"$1px")},key:Me,src:K,ref:$e}):R.children),C.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":R.title},R.title&&C.a.createElement(vn.AnchorLink,{to:"#".concat(R.identifier)},R.title),R.description&&C.a.createElement("div",{dangerouslySetInnerHTML:{__html:R.description}})),C.a.createElement("div",{className:"__dumi-default-previewer-actions"},J&&C.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:J}),ie&&C.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:ie}),R.motions&&C.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:U,onClick:()=>ue()}),R.iframe&&C.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:()=>Ne(Math.random())}),!((h=R.hideActions)!==null&&h!==void 0&&h.includes("EXTERNAL"))&&C.a.createElement(vn.Link,{target:"_blank",to:K},C.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),C.a.createElement("span",null),C.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":oe,onClick:()=>Q(De)}),H==="tsx"&&Re&&C.a.createElement(vn.Link,{target:"_blank",to:Pe},C.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),C.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(Re?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:()=>Ke(!Re)})),Re&&C.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!G&&C.a.createElement(sa,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xB7\xB7\xB7",defaultActiveKey:ne,onChange:Xe},Object.keys(R.sources).map(Le=>C.a.createElement(lr,{tab:Le==="_"?"index.".concat(wt(Le,R.sources[Le])):Le,key:Le}))),C.a.createElement("div",{className:"__dumi-default-previewer-source"},C.a.createElement(ia.a,{code:De,lang:H,showCopy:!1}))))},Ea=gn.default=oa},"80pN":function(Bn,gn,e){"use strict";(function(X){/** @license React v16.14.0
* react-dom-test-utils.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var n=e("MgzW"),C=e("q1tI"),V=e("i8i4"),ce=e("QCnb");function L(c){for(var D="https://reactjs.org/docs/error-decoder.html?invariant="+c,j=1;j<arguments.length;j++)D+="&args[]="+encodeURIComponent(arguments[j]);return"Minified React error #"+c+"; visit "+D+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var tn=C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;tn.hasOwnProperty("ReactCurrentDispatcher")||(tn.ReactCurrentDispatcher={current:null}),tn.hasOwnProperty("ReactCurrentBatchConfig")||(tn.ReactCurrentBatchConfig={suspense:null});function Ie(c){var D=c,j=c;if(c.alternate)for(;D.return;)D=D.return;else{c=D;do D=c,(D.effectTag&1026)!=0&&(j=D.return),c=D.return;while(c)}return D.tag===3?j:null}function me(c){if(Ie(c)!==c)throw Error(L(188))}function rt(c){var D=c.alternate;if(!D){if(D=Ie(c),D===null)throw Error(L(188));return D!==c?null:c}for(var j=c,pe=D;;){var ee=j.return;if(ee===null)break;var Fe=ee.alternate;if(Fe===null){if(pe=ee.return,pe!==null){j=pe;continue}break}if(ee.child===Fe.child){for(Fe=ee.child;Fe;){if(Fe===j)return me(ee),c;if(Fe===pe)return me(ee),D;Fe=Fe.sibling}throw Error(L(188))}if(j.return!==pe.return)j=ee,pe=Fe;else{for(var ze=!1,Ge=ee.child;Ge;){if(Ge===j){ze=!0,j=ee,pe=Fe;break}if(Ge===pe){ze=!0,pe=ee,j=Fe;break}Ge=Ge.sibling}if(!ze){for(Ge=Fe.child;Ge;){if(Ge===j){ze=!0,j=Fe,pe=ee;break}if(Ge===pe){ze=!0,pe=Fe,j=ee;break}Ge=Ge.sibling}if(!ze)throw Error(L(189))}}if(j.alternate!==pe)throw Error(L(190))}if(j.tag!==3)throw Error(L(188));return j.stateNode.current===j?c:D}function je(){return!0}function Mn(){return!1}function Tn(c,D,j,pe){this.dispatchConfig=c,this._targetInst=D,this.nativeEvent=j,c=this.constructor.Interface;for(var ee in c)c.hasOwnProperty(ee)&&((D=c[ee])?this[ee]=D(j):ee==="target"?this.target=pe:this[ee]=j[ee]);return this.isDefaultPrevented=(j.defaultPrevented!=null?j.defaultPrevented:j.returnValue===!1)?je:Mn,this.isPropagationStopped=Mn,this}n(Tn.prototype,{preventDefault:function(){this.defaultPrevented=!0;var c=this.nativeEvent;c&&(c.preventDefault?c.preventDefault():typeof c.returnValue!="unknown"&&(c.returnValue=!1),this.isDefaultPrevented=je)},stopPropagation:function(){var c=this.nativeEvent;c&&(c.stopPropagation?c.stopPropagation():typeof c.cancelBubble!="unknown"&&(c.cancelBubble=!0),this.isPropagationStopped=je)},persist:function(){this.isPersistent=je},isPersistent:Mn,destructor:function(){var c=this.constructor.Interface,D;for(D in c)this[D]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=Mn,this._dispatchInstances=this._dispatchListeners=null}}),Tn.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(c){return c.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null},Tn.extend=function(c){function D(){}function j(){return pe.apply(this,arguments)}var pe=this;D.prototype=pe.prototype;var ee=new D;return n(ee,j.prototype),j.prototype=ee,j.prototype.constructor=j,j.Interface=n({},pe.Interface,c),j.extend=pe.extend,Ye(j),j},Ye(Tn);function On(c,D,j,pe){if(this.eventPool.length){var ee=this.eventPool.pop();return this.call(ee,c,D,j,pe),ee}return new this(c,D,j,pe)}function fn(c){if(!(c instanceof this))throw Error(L(279));c.destructor(),10>this.eventPool.length&&this.eventPool.push(c)}function Ye(c){c.eventPool=[],c.getPooled=On,c.release=fn}var Ln=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined");function wn(c,D){var j={};return j[c.toLowerCase()]=D.toLowerCase(),j["Webkit"+c]="webkit"+D,j["Moz"+c]="moz"+D,j}var Rn={animationend:wn("Animation","AnimationEnd"),animationiteration:wn("Animation","AnimationIteration"),animationstart:wn("Animation","AnimationStart"),transitionend:wn("Transition","TransitionEnd")},we={},kn={};Ln&&(kn=document.createElement("div").style,"AnimationEvent"in window||(delete Rn.animationend.animation,delete Rn.animationiteration.animation,delete Rn.animationstart.animation),"TransitionEvent"in window||delete Rn.transitionend.transition);function $n(c){if(we[c])return we[c];if(!Rn[c])return c;var D=Rn[c],j;for(j in D)if(D.hasOwnProperty(j)&&j in kn)return we[c]=D[j];return c}var at=$n("animationend"),M=$n("animationiteration"),N=$n("animationstart"),T=$n("transitionend"),f=null;function o(c){if(f===null)try{var D=("require"+Math.random()).slice(0,7);f=(X&&X[D])("timers").setImmediate}catch(j){f=function(pe){var ee=new MessageChannel;ee.port1.onmessage=pe,ee.port2.postMessage(void 0)}}return f(c)}var g=V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,O=g[11],S=g[12],s=V.unstable_batchedUpdates,u=tn.IsSomeRendererActing,y=typeof ce.unstable_flushAllWithoutAsserting=="function",B=ce.unstable_flushAllWithoutAsserting||function(){for(var c=!1;O();)c=!0;return c};function I(c){try{B(),o(function(){B()?I(c):c()})}catch(D){c(D)}}var F=0,i=!1,A=V.findDOMNode,d=V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,r=d[0],p=d[4],m=d[5],P=d[6],w=d[7],z=d[8],_=d[9],se=d[10];function ge(){}function pn(c,D){if(!c)return[];if(c=rt(c),!c)return[];for(var j=c,pe=[];;){if(j.tag===5||j.tag===6||j.tag===1||j.tag===0){var ee=j.stateNode;D(ee)&&pe.push(ee)}if(j.child)j.child.return=j,j=j.child;else{if(j===c)return pe;for(;!j.sibling;){if(!j.return||j.return===c)return pe;j=j.return}j.sibling.return=j.return,j=j.sibling}}}function We(c,D){if(c&&!c._reactInternalFiber){var j=""+c;throw c=Array.isArray(c)?"an array":c&&c.nodeType===1&&c.tagName?"a DOM node":j==="[object Object]"?"object with keys {"+Object.keys(c).join(", ")+"}":j,Error(L(286,D,c))}}var Be={renderIntoDocument:function(c){var D=document.createElement("div");return V.render(c,D)},isElement:function(c){return C.isValidElement(c)},isElementOfType:function(c,D){return C.isValidElement(c)&&c.type===D},isDOMComponent:function(c){return!(!c||c.nodeType!==1||!c.tagName)},isDOMComponentElement:function(c){return!!(c&&C.isValidElement(c)&&c.tagName)},isCompositeComponent:function(c){return Be.isDOMComponent(c)?!1:c!=null&&typeof c.render=="function"&&typeof c.setState=="function"},isCompositeComponentWithType:function(c,D){return Be.isCompositeComponent(c)?c._reactInternalFiber.type===D:!1},findAllInRenderedTree:function(c,D){return We(c,"findAllInRenderedTree"),c?pn(c._reactInternalFiber,D):[]},scryRenderedDOMComponentsWithClass:function(c,D){return We(c,"scryRenderedDOMComponentsWithClass"),Be.findAllInRenderedTree(c,function(j){if(Be.isDOMComponent(j)){var pe=j.className;typeof pe!="string"&&(pe=j.getAttribute("class")||"");var ee=pe.split(/\s+/);if(!Array.isArray(D)){if(D===void 0)throw Error(L(11));D=D.split(/\s+/)}return D.every(function(Fe){return ee.indexOf(Fe)!==-1})}return!1})},findRenderedDOMComponentWithClass:function(c,D){if(We(c,"findRenderedDOMComponentWithClass"),c=Be.scryRenderedDOMComponentsWithClass(c,D),c.length!==1)throw Error("Did not find exactly one match (found: "+c.length+") for class:"+D);return c[0]},scryRenderedDOMComponentsWithTag:function(c,D){return We(c,"scryRenderedDOMComponentsWithTag"),Be.findAllInRenderedTree(c,function(j){return Be.isDOMComponent(j)&&j.tagName.toUpperCase()===D.toUpperCase()})},findRenderedDOMComponentWithTag:function(c,D){if(We(c,"findRenderedDOMComponentWithTag"),c=Be.scryRenderedDOMComponentsWithTag(c,D),c.length!==1)throw Error("Did not find exactly one match (found: "+c.length+") for tag:"+D);return c[0]},scryRenderedComponentsWithType:function(c,D){return We(c,"scryRenderedComponentsWithType"),Be.findAllInRenderedTree(c,function(j){return Be.isCompositeComponentWithType(j,D)})},findRenderedComponentWithType:function(c,D){if(We(c,"findRenderedComponentWithType"),c=Be.scryRenderedComponentsWithType(c,D),c.length!==1)throw Error("Did not find exactly one match (found: "+c.length+") for componentType:"+D);return c[0]},mockComponent:function(c,D){return D=D||c.mockTagName||"div",c.prototype.render.mockImplementation(function(){return C.createElement(D,null,this.props.children)}),this},nativeTouchData:function(c,D){return{touches:[{pageX:c,pageY:D}]}},Simulate:null,SimulateNative:{},act:function(c){function D(){F--,u.current=j,S.current=pe}i===!1&&(i=!0,console.error("act(...) is not supported in production builds of React, and might not behave as expected.")),F++;var j=u.current,pe=S.current;u.current=!0,S.current=!0;try{var ee=s(c)}catch(Fe){throw D(),Fe}if(ee!==null&&typeof ee=="object"&&typeof ee.then=="function")return{then:function(Fe,ze){ee.then(function(){1<F||y===!0&&j===!0?(D(),Fe()):I(function(Ge){D(),Ge?ze(Ge):Fe()})},function(Ge){D(),ze(Ge)})}};try{F!==1||y!==!1&&j!==!1||B(),D()}catch(Fe){throw D(),Fe}return{then:function(Fe){Fe()}}}};function Sn(c){return function(D,j){if(C.isValidElement(D))throw Error(L(228));if(Be.isCompositeComponent(D))throw Error(L(229));var pe=p[c],ee=new ge;ee.target=D,ee.type=c.toLowerCase();var Fe=r(D),ze=new Tn(pe,Fe,ee,D);ze.persist(),n(ze,j),pe.phasedRegistrationNames?m(ze):P(ze),V.unstable_batchedUpdates(function(){w(D),se(ze)}),z()}}Be.Simulate={};for(var st in p)Be.Simulate[st]=Sn(st);function qn(c,D){return function(j,pe){var ee=new ge(c);n(ee,pe),Be.isDOMComponent(j)?(j=A(j),ee.target=j,_(D,1,document,ee)):j.tagName&&(ee.target=j,_(D,1,document,ee))}}[["abort","abort"],[at,"animationEnd"],[M,"animationIteration"],[N,"animationStart"],["blur","blur"],["canplaythrough","canPlayThrough"],["canplay","canPlay"],["cancel","cancel"],["change","change"],["click","click"],["close","close"],["compositionend","compositionEnd"],["compositionstart","compositionStart"],["compositionupdate","compositionUpdate"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["dragstart","dragStart"],["drag","drag"],["drop","drop"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],["ended","ended"],["error","error"],["focus","focus"],["input","input"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["loadstart","loadStart"],["loadstart","loadStart"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["mousedown","mouseDown"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["playing","playing"],["progress","progress"],["ratechange","rateChange"],["scroll","scroll"],["seeked","seeked"],["seeking","seeking"],["selectionchange","selectionChange"],["stalled","stalled"],["suspend","suspend"],["textInput","textInput"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchmove","touchMove"],["touchstart","touchStart"],[T,"transitionEnd"],["volumechange","volumeChange"],["waiting","waiting"],["wheel","wheel"]].forEach(function(c){var D=c[1];Be.SimulateNative[D]=qn(D,c[0])}),X.exports=Be.default||Be}).call(this,e("hOG+")(Bn))},JjdP:function(Bn,gn,e){"use strict";e.r(gn);var X=e("9og8"),n=e("WmNS"),C=e.n(n),V=e("LtsZ"),ce=`import React, { useRef } from 'react';
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
}`,at=gn.default={"guide-card":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(C.a.mark(function T(){return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"oLxE"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:ce}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"card-render":{version:"0.1.2"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"0.x"}},identifier:"guide-card"}},"chart-render-demo":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(C.a.mark(function T(){var f,o,g,O,S,s,u;return C.a.wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return s=function(F,i){if(!i&&F&&F.__esModule)return F;if(F===null||typeof F!="object"&&typeof F!="function")return{default:F};var A=S(i);if(A&&A.has(F))return A.get(F);var d={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var p in F)if(p!=="default"&&Object.prototype.hasOwnProperty.call(F,p)){var m=r?Object.getOwnPropertyDescriptor(F,p):null;m&&(m.get||m.set)?Object.defineProperty(d,p,m):d[p]=F[p]}return d.default=F,A&&A.set(F,d),d},S=function(F){if(typeof WeakMap!="function")return null;var i=new WeakMap,A=new WeakMap;return(S=function(r){return r?A:i})(F)},f=e("K+nK"),B.t0=f,B.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return B.t1=B.sent,o=(0,B.t0)(B.t1),B.t2=s,B.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return B.t3=B.sent,g=(0,B.t2)(B.t3),B.next=15,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 15:return O=B.sent,u=function(){var F=(0,g.useState)("Line"),i=(0,o.default)(F,2),A=i[0],d=i[1],r={Line:O.Line,Column:O.Column,PivotTable:O.PivotTable}[A];return g.default.createElement("div",null,g.default.createElement("div",{style:{marginBottom:10}},g.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return d("Line")}},"\u6298\u7EBF\u56FE"),g.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return d("Column")}},"\u67F1\u72B6\u56FE"),g.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return d("PivotTable")}},"\u4EA4\u53C9\u8868")),g.default.createElement(r,{meta:[{id:"date",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF",isDim:!1},{id:"uv",name:"\u8BBF\u5BA2\u6570",isDim:!1}],data:[{date:"20200101",pv:100,uv:50},{date:"20200102",pv:120,uv:60},{date:"20200103",pv:140,uv:70},{date:"20200104",pv:160,uv:80}]}))},B.abrupt("return",u);case 18:case"end":return B.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"chart-render-demo"}},"column-demo":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(C.a.mark(function T(){var f,o,g,O;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return f=e("K+nK"),s.t0=f,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=s.sent,O=function(){return o.default.createElement(g.Column,{meta:[{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{pv:50,uv:20}]})},s.abrupt("return",O);case 11:case"end":return s.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo"}},"column-demo-1":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(C.a.mark(function T(){var f,o,g,O;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return f=e("K+nK"),s.t0=f,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=s.sent,O=function(){return o.default.createElement(g.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},s.abrupt("return",O);case 11:case"end":return s.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-1"}},"column-demo-2":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(C.a.mark(function T(){var f,o,g,O;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return f=e("K+nK"),s.t0=f,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=s.sent,O=function(){return o.default.createElement(g.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},s.abrupt("return",O);case 11:case"end":return s.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-2"}},"column-demo-3":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(C.a.mark(function T(){var f,o,g,O;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return f=e("K+nK"),s.t0=f,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=s.sent,O=function(){return o.default.createElement(g.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},s.abrupt("return",O);case 11:case"end":return s.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-3"}},"column-demo-4":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(C.a.mark(function T(){var f,o,g,O;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return f=e("K+nK"),s.t0=f,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=s.sent,O=function(){return o.default.createElement(g.Column,{inverted:!0,label:{position:"middle",layout:[{type:"interval-adjust-position"},{type:"interval-hide-overlap"},{type:"adjust-color"}]},meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},s.abrupt("return",O);case 11:case"end":return s.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-4"}},"line-demo":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(C.a.mark(function T(){var f,o,g,O;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return f=e("K+nK"),s.t0=f,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=s.sent,O=function(){return o.default.createElement(g.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},s.abrupt("return",O);case 11:case"end":return s.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo"}},"line-demo-1":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(C.a.mark(function T(){var f,o,g,O;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return f=e("K+nK"),s.t0=f,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=s.sent,O=function(){return o.default.createElement(g.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},s.abrupt("return",O);case 11:case"end":return s.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-1"}},"line-demo-2":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(C.a.mark(function T(){var f,o,g,O;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return f=e("K+nK"),s.t0=f,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=s.sent,O=function(){return o.default.createElement(g.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"},{id:"pv",name:"\u8BBF\u95EE\u91CF"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20,pv:120},{ds:"2020-12-31",page:"\u9996\u9875",uv:120,pv:1120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21,pv:121},{ds:"2021-01-01",page:"\u9996\u9875",uv:121,pv:1121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15,pv:115},{ds:"2021-01-02",page:"\u9996\u9875",uv:115,pv:1115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40,pv:140},{ds:"2021-01-03",page:"\u9996\u9875",uv:140,pv:1140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31,pv:131},{ds:"2021-01-04",page:"\u9996\u9875",uv:131,pv:1131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32,pv:132},{ds:"2021-01-05",page:"\u9996\u9875",uv:132,pv:1132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30,pv:130},{ds:"2021-01-06",page:"\u9996\u9875",uv:130,pv:1130}]})},s.abrupt("return",O);case 11:case"end":return s.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-2"}},"line-demo-3":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(C.a.mark(function T(){var f,o,g,O;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return f=e("K+nK"),s.t0=f,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=s.sent,O=function(){return o.default.createElement(g.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},s.abrupt("return",O);case 11:case"end":return s.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-3"}},"line-demo-4":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(C.a.mark(function T(){var f,o,g,O;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return f=e("K+nK"),s.t0=f,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=s.sent,O=function(){return o.default.createElement(g.Line,{withArea:!0,isStack:!0,isPercent:!0,meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},s.abrupt("return",O);case 11:case"end":return s.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-4"}},"pivot-table-demo":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(C.a.mark(function T(){var f,o,g,O;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return f=e("K+nK"),s.t0=f,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=s.sent,O=function(){return o.default.createElement(g.PivotTable,{style:{maxHeight:400,overflow:"auto"},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},s.abrupt("return",O);case 11:case"end":return s.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo"}},"pivot-table-demo-1":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(C.a.mark(function T(){var f,o,g,O;return C.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return f=e("K+nK"),s.t0=f,s.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=s.sent,O=function(){return o.default.createElement(g.PivotTable,{style:{maxHeight:400,overflow:"auto"},cellRender:function(B,I,F){return o.default.createElement("div",null,o.default.createElement("p",null,"\u53C2\u6570\u8868\uFF1A"),o.default.createElement("p",{style:{color:["red","orange","yellow","green","blue"][Object.keys(I).length]}},B),o.default.createElement("p",null,JSON.stringify(I)),o.default.createElement("p",null,JSON.stringify(F)))},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},s.abrupt("return",O);case 11:case"end":return s.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-1"}},"pivot-table-demo-2":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(C.a.mark(function T(){var f,o,g,O,S,s,u;return C.a.wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return s=function(F,i){if(!i&&F&&F.__esModule)return F;if(F===null||typeof F!="object"&&typeof F!="function")return{default:F};var A=S(i);if(A&&A.has(F))return A.get(F);var d={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var p in F)if(p!=="default"&&Object.prototype.hasOwnProperty.call(F,p)){var m=r?Object.getOwnPropertyDescriptor(F,p):null;m&&(m.get||m.set)?Object.defineProperty(d,p,m):d[p]=F[p]}return d.default=F,A&&A.set(F,d),d},S=function(F){if(typeof WeakMap!="function")return null;var i=new WeakMap,A=new WeakMap;return(S=function(r){return r?A:i})(F)},f=e("K+nK"),B.t0=f,B.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return B.t1=B.sent,o=(0,B.t0)(B.t1),B.t2=s,B.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return B.t3=B.sent,g=(0,B.t2)(B.t3),B.next=15,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 15:return O=B.sent,u=function(){var F=(0,g.useState)(!1),i=(0,o.default)(F,2),A=i[0],d=i[1];return g.default.createElement(g.default.Fragment,null,g.default.createElement("label",null,"\u53EF\u5C55\u5F00/\u6536\u7F29\uFF1A",g.default.createElement("input",{type:"checkbox",value:A,onChange:function(){return d(!A)}})),g.default.createElement(O.PivotTable,{leftExpandable:A,showSubtotal:!1,meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]}))},B.abrupt("return",u);case 18:case"end":return B.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-2"}},"form-render-demo":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(C.a.mark(function T(){var f,o,g,O,S,s,u,y,B,I,F,i,A,d;return C.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return F=function(P,w){if(!w&&P&&P.__esModule)return P;if(P===null||typeof P!="object"&&typeof P!="function")return{default:P};var z=I(w);if(z&&z.has(P))return z.get(P);var _={},se=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ge in P)if(ge!=="default"&&Object.prototype.hasOwnProperty.call(P,ge)){var pn=se?Object.getOwnPropertyDescriptor(P,ge):null;pn&&(pn.get||pn.set)?Object.defineProperty(_,ge,pn):_[ge]=P[ge]}return _.default=P,z&&z.set(P,_),_},I=function(P){if(typeof WeakMap!="function")return null;var w=new WeakMap,z=new WeakMap;return(I=function(se){return se?z:w})(P)},f=e("K+nK"),p.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return p.t0=f,p.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return p.t1=p.sent,o=(0,p.t0)(p.t1),p.t2=f,p.next=13,e.e(62).then(e.bind(null,"fWQN"));case 13:return p.t3=p.sent,g=(0,p.t2)(p.t3),p.t4=f,p.next=18,e.e(63).then(e.bind(null,"mtLc"));case 18:return p.t5=p.sent,O=(0,p.t4)(p.t5),p.t6=f,p.next=23,e.e(65).then(e.bind(null,"yKVA"));case 23:return p.t7=p.sent,S=(0,p.t6)(p.t7),p.t8=f,p.next=28,e.e(59).then(e.bind(null,"879j"));case 28:return p.t9=p.sent,s=(0,p.t8)(p.t9),p.t10=f,p.next=33,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 33:return p.t11=p.sent,u=(0,p.t10)(p.t11),p.next=37,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 37:return y=p.sent,p.t12=F,p.next=41,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 41:return p.t13=p.sent,B=(0,p.t12)(p.t13),i={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},A=function(m){(0,S.default)(w,m);var P=(0,s.default)(w);function w(){return(0,g.default)(this,w),P.apply(this,arguments)}return(0,O.default)(w,[{key:"render",value:function(){var _=this.props.form;return u.default.createElement("div",null,u.default.createElement(B.default,{form:_,schema:i}),u.default.createElement(o.default,{type:"primary",onClick:_.submit},"\u63D0\u4EA4"))}}]),w}(u.default.Component),d=(0,B.connectForm)(A),p.abrupt("return",d);case 47:case"end":return p.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default connectForm(Demo);`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo"}},"form-render-demo-1":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(C.a.mark(function T(){var f,o,g,O,S,s,u,y,B,I;return C.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return u=function(d,r){if(!r&&d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var p=s(r);if(p&&p.has(d))return p.get(d);var m={},P=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var w in d)if(w!=="default"&&Object.prototype.hasOwnProperty.call(d,w)){var z=P?Object.getOwnPropertyDescriptor(d,w):null;z&&(z.get||z.set)?Object.defineProperty(m,w,z):m[w]=d[w]}return m.default=d,p&&p.set(d,m),m},s=function(d){if(typeof WeakMap!="function")return null;var r=new WeakMap,p=new WeakMap;return(s=function(P){return P?p:r})(d)},f=e("K+nK"),i.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return i.t0=f,i.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.t2=f,i.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return i.t3=i.sent,g=(0,i.t2)(i.t3),i.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 17:return O=i.sent,i.t4=u,i.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 21:return i.t5=i.sent,S=(0,i.t4)(i.t5),y={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},B=function(){var d=(0,S.useForm)();return g.default.createElement("div",null,g.default.createElement(S.default,{form:d,schema:y}),g.default.createElement(o.default,{type:"primary",onClick:d.submit},"\u63D0\u4EA4"))},I=B,i.abrupt("return",I);case 27:case"end":return i.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo-1"}},"form-render-demo-2":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(C.a.mark(function T(){var f,o,g,O,S,s,u,y,B,I;return C.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return u=function(d,r){if(!r&&d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var p=s(r);if(p&&p.has(d))return p.get(d);var m={},P=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var w in d)if(w!=="default"&&Object.prototype.hasOwnProperty.call(d,w)){var z=P?Object.getOwnPropertyDescriptor(d,w):null;z&&(z.get||z.set)?Object.defineProperty(m,w,z):m[w]=d[w]}return m.default=d,p&&p.set(d,m),m},s=function(d){if(typeof WeakMap!="function")return null;var r=new WeakMap,p=new WeakMap;return(s=function(P){return P?p:r})(d)},f=e("K+nK"),i.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return i.t0=f,i.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.t2=f,i.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return i.t3=i.sent,g=(0,i.t2)(i.t3),i.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 17:return O=i.sent,i.t4=u,i.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 21:return i.t5=i.sent,S=(0,i.t4)(i.t5),y={displayType:"row",labelWidth:60,type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F",type:"range",format:"date"},siteUrl:{title:"\u7F51\u5740",type:"string",placeholder:"\u6B64\u5904\u5FC5\u586B",required:!0,props:{addonBefore:"https://",addonAfter:".com"}}}},B=function(){var d=(0,S.useForm)(),r=function(m,P){P.length>0?alert("errors:"+JSON.stringify(P)):alert("formData:"+JSON.stringify(m,null,2))};return g.default.createElement("div",null,g.default.createElement(S.default,{form:d,schema:y,onFinish:r}),g.default.createElement(o.default,{type:"primary",onClick:d.submit},"\u63D0\u4EA4"))},I=B,i.abrupt("return",I);case 27:case"end":return i.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-demo-2"}},"migrate-demo":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(C.a.mark(function T(){var f,o,g,O,S,s,u,y;return C.a.wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return u=function(){var i=(0,g.useForm)(),A=function(r,p){p.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(p))):alert(JSON.stringify(r))};return o.default.createElement("div",null,o.default.createElement(g.default,{form:i,schema:s,onFinish:A}),o.default.createElement("button",{onClick:i.submit},"\u63D0\u4EA4"))},S=function(i,A){if(!A&&i&&i.__esModule)return i;if(i===null||typeof i!="object"&&typeof i!="function")return{default:i};var d=O(A);if(d&&d.has(i))return d.get(i);var r={},p=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var m in i)if(m!=="default"&&Object.prototype.hasOwnProperty.call(i,m)){var P=p?Object.getOwnPropertyDescriptor(i,m):null;P&&(P.get||P.set)?Object.defineProperty(r,m,P):r[m]=i[m]}return r.default=i,d&&d.set(i,r),r},O=function(i){if(typeof WeakMap!="function")return null;var A=new WeakMap,d=new WeakMap;return(O=function(p){return p?d:A})(i)},f=e("K+nK"),I.t0=f,I.next=7,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 7:return I.t1=I.sent,o=(0,I.t0)(I.t1),I.t2=S,I.next=12,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 12:return I.t3=I.sent,g=(0,I.t2)(I.t3),s={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}},y=u,I.abrupt("return",y);case 17:case"end":return I.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate-demo"}},"display-demo":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(C.a.mark(function T(){var f,o,g,O,S;return C.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return f=e("K+nK"),u.t0=f,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,o=(0,u.t0)(u.t1),u.t2=f,u.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return u.t3=u.sent,g=(0,u.t2)(u.t3),O=function(B){return{type:"object",displayType:B,properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},objectName:{title:"\u5BF9\u8C61",bind:"obj",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},S=function(){return o.default.createElement("div",null,o.default.createElement("h2",null,"display: row"),o.default.createElement(g.default,{schema:O("row")}),o.default.createElement("h2",null,"display: column"),o.default.createElement(g.default,{schema:O("column")}))},u.abrupt("return",S);case 14:case"end":return u.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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
);`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo"}},"display-demo-1":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(C.a.mark(function T(){var f,o,g,O,S;return C.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return f=e("K+nK"),u.t0=f,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,o=(0,u.t0)(u.t1),u.t2=f,u.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return u.t3=u.sent,g=(0,u.t2)(u.t3),O={type:"object",displayType:"inline",properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},S=function(){return o.default.createElement(g.default,{schema:O})},u.abrupt("return",S);case 14:case"end":return u.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-1"}},"display-demo-2":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(C.a.mark(function T(){var f,o,g,O,S;return C.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return f=e("K+nK"),u.t0=f,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,o=(0,u.t0)(u.t1),u.t2=f,u.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return u.t3=u.sent,g=(0,u.t2)(u.t3),O={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0},check:{title:"box",type:"boolean",default:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},S=function(){return o.default.createElement(g.default,{readOnly:!0,schema:O})},u.abrupt("return",S);case 14:case"end":return u.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form readOnly schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-2"}},"display-demo-3":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(C.a.mark(function T(){var f,o,g,O,S;return C.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return f=e("K+nK"),u.t0=f,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,o=(0,u.t0)(u.t1),u.t2=f,u.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return u.t3=u.sent,g=(0,u.t2)(u.t3),O={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0,width:"50%"},check:{title:"box",type:"boolean",default:!0,width:"50%",labelWidth:6},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},S=function(){return o.default.createElement(g.default,{labelWidth:"200",schema:O})},u.abrupt("return",S);case 14:case"end":return u.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default () => <Form labelWidth="200" schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-3"}},"display-demo-4":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(C.a.mark(function T(){var f,o,g,O,S,s;return C.a.wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return f=e("K+nK"),y.t0=f,y.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return y.t1=y.sent,o=(0,y.t0)(y.t1),y.t2=f,y.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return y.t3=y.sent,g=(0,y.t2)(y.t3),O={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},S=function(){return o.default.createElement(g.default,{schema:O})},s=S,y.abrupt("return",s);case 15:case"end":return y.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-4"}},"display-demo-5":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(C.a.mark(function T(){var f,o,g,O,S,s;return C.a.wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return f=e("K+nK"),y.t0=f,y.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return y.t1=y.sent,o=(0,y.t0)(y.t1),y.t2=f,y.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return y.t3=y.sent,g=(0,y.t2)(y.t3),O={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},S=function(){return o.default.createElement(g.default,{schema:O})},s=S,y.abrupt("return",s);case 15:case"end":return y.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-5"}},"display-demo-6":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(C.a.mark(function T(){var f,o,g,O,S,s;return C.a.wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return f=e("K+nK"),y.t0=f,y.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return y.t1=y.sent,o=(0,y.t0)(y.t1),y.t2=f,y.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return y.t3=y.sent,g=(0,y.t2)(y.t3),O={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},S=function(){return o.default.createElement(g.default,{schema:O})},s=S,y.abrupt("return",s);case 15:case"end":return y.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-6"}},"display-demo-7":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(C.a.mark(function T(){var f,o,g,O,S,s;return C.a.wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return f=e("K+nK"),y.t0=f,y.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return y.t1=y.sent,o=(0,y.t0)(y.t1),y.t2=f,y.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return y.t3=y.sent,g=(0,y.t2)(y.t3),O={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},S=function(){return o.default.createElement(g.default,{schema:O})},s=S,y.abrupt("return",s);case 15:case"end":return y.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"demo/display.js":{import:"../demo/display",content:L}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-7"}},"form-methods-demo":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(C.a.mark(function T(){var f,o,g,O,S,s,u,y,B,I,F,i,A;return C.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return F=function(m,P){if(!P&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var w=I(P);if(w&&w.has(m))return w.get(m);var z={},_=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var se in m)if(se!=="default"&&Object.prototype.hasOwnProperty.call(m,se)){var ge=_?Object.getOwnPropertyDescriptor(m,se):null;ge&&(ge.get||ge.set)?Object.defineProperty(z,se,ge):z[se]=m[se]}return z.default=m,w&&w.set(m,z),z},I=function(m){if(typeof WeakMap!="function")return null;var P=new WeakMap,w=new WeakMap;return(I=function(_){return _?w:P})(m)},f=e("K+nK"),r.next=5,e.e(17).then(e.t.bind(null,"lfLe",7));case 5:return r.t0=f,r.next=8,e.e(18).then(e.t.bind(null,"Cp9S",7));case 8:return r.t1=r.sent,o=(0,r.t0)(r.t1),r.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return r.t2=f,r.next=15,e.e(12).then(e.t.bind(null,"4IMT",7));case 15:return r.t3=r.sent,g=(0,r.t2)(r.t3),r.next=19,e.e(14).then(e.t.bind(null,"tL+A",7));case 19:return r.t4=f,r.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return r.t5=r.sent,O=(0,r.t4)(r.t5),r.t6=f,r.next=27,Promise.resolve().then(e.bind(null,"tJVT"));case 27:return r.t7=r.sent,S=(0,r.t6)(r.t7),r.t8=F,r.next=32,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 32:return r.t9=r.sent,s=(0,r.t8)(r.t9),r.next=36,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 36:return u=r.sent,r.t10=F,r.next=40,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 40:return r.t11=r.sent,y=(0,r.t10)(r.t11),r.next=44,e.e(15).then(e.bind(null,"OH0R"));case 44:return B=r.sent,i=function(){var m=(0,y.useForm)(),P=(0,s.useState)({}),w=(0,S.default)(P,2),z=w[0],_=w[1],se=function(){(0,B.fakeApi)("xxx/getForm").then(function(We){m.setValues({input1:"hello world",select1:"c"})})};(0,s.useEffect)(function(){(0,B.delay)(1e3).then(function(pn){_({type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}})})},[]);var ge=function(We,Be){Be.length>0?O.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(Be.map(function(Sn){return Sn.name}))):(0,B.fakeApi)("xxx/submit",We).then(function(Sn){return O.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})};return s.default.createElement("div",{style:{width:"400px"}},s.default.createElement(y.default,{form:m,schema:z,onFinish:ge}),s.default.createElement(o.default,null,s.default.createElement(g.default,{onClick:se},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),s.default.createElement(g.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},A=i,r.abrupt("return",A);case 48:case"end":return r.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:tn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo"}},"form-methods-demo-1":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(C.a.mark(function T(){var f,o,g,O,S,s,u,y,B,I,F,i,A;return C.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return I=function(m,P){if(!P&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var w=B(P);if(w&&w.has(m))return w.get(m);var z={},_=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var se in m)if(se!=="default"&&Object.prototype.hasOwnProperty.call(m,se)){var ge=_?Object.getOwnPropertyDescriptor(m,se):null;ge&&(ge.get||ge.set)?Object.defineProperty(z,se,ge):z[se]=m[se]}return z.default=m,w&&w.set(m,z),z},B=function(m){if(typeof WeakMap!="function")return null;var P=new WeakMap,w=new WeakMap;return(B=function(_){return _?w:P})(m)},f=e("K+nK"),r.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return r.t0=f,r.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return r.t1=r.sent,o=(0,r.t0)(r.t1),r.t2=f,r.next=13,Promise.resolve().then(e.bind(null,"PpiC"));case 13:return r.t3=r.sent,g=(0,r.t2)(r.t3),r.next=17,e.e(14).then(e.t.bind(null,"tL+A",7));case 17:return r.t4=f,r.next=20,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 20:return r.t5=r.sent,O=(0,r.t4)(r.t5),r.t6=f,r.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return r.t7=r.sent,S=(0,r.t6)(r.t7),r.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 29:return s=r.sent,r.t8=I,r.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 33:return r.t9=r.sent,u=(0,r.t8)(r.t9),r.next=37,e.e(15).then(e.bind(null,"OH0R"));case 37:return y=r.sent,F={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},i=function(){var m=(0,u.useForm)(),P=function(_,se){se.length>0?O.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(se.map(function(ge){return ge.name}))):(0,y.fakeApi)("xxx/submit",_).then(function(ge){return O.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},w=function(_){var se=_.data,ge=_.errors,pn=_.schema,We=(0,g.default)(_,["data","errors","schema"]);return(0,y.fakeApi)("xxx/validation").then(function(Be){return{name:"select1",error:["\u5916\u90E8\u6821\u9A8C\u9519\u8BEF"]}})};return S.default.createElement("div",{style:{width:"400px"}},S.default.createElement(u.default,{form:m,schema:F,beforeFinish:w,onFinish:P}),S.default.createElement(o.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},A=i,r.abrupt("return",A);case 42:case"end":return r.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:tn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-1"}},"form-methods-demo-2":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(C.a.mark(function T(){var f,o,g,O,S,s,u,y,B,I,F,i,A;return C.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return I=function(m,P){if(!P&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var w=B(P);if(w&&w.has(m))return w.get(m);var z={},_=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var se in m)if(se!=="default"&&Object.prototype.hasOwnProperty.call(m,se)){var ge=_?Object.getOwnPropertyDescriptor(m,se):null;ge&&(ge.get||ge.set)?Object.defineProperty(z,se,ge):z[se]=m[se]}return z.default=m,w&&w.set(m,z),z},B=function(m){if(typeof WeakMap!="function")return null;var P=new WeakMap,w=new WeakMap;return(B=function(_){return _?w:P})(m)},f=e("K+nK"),r.next=5,e.e(17).then(e.t.bind(null,"lfLe",7));case 5:return r.t0=f,r.next=8,e.e(18).then(e.t.bind(null,"Cp9S",7));case 8:return r.t1=r.sent,o=(0,r.t0)(r.t1),r.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return r.t2=f,r.next=15,e.e(12).then(e.t.bind(null,"4IMT",7));case 15:return r.t3=r.sent,g=(0,r.t2)(r.t3),r.next=19,e.e(14).then(e.t.bind(null,"tL+A",7));case 19:return r.t4=f,r.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return r.t5=r.sent,O=(0,r.t4)(r.t5),r.t6=f,r.next=27,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 27:return r.t7=r.sent,S=(0,r.t6)(r.t7),r.next=31,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 31:return s=r.sent,r.t8=I,r.next=35,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 35:return r.t9=r.sent,u=(0,r.t8)(r.t9),r.next=39,e.e(15).then(e.bind(null,"OH0R"));case 39:return y=r.sent,F={type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F\u8303\u56F4",type:"range",format:"date"}}},i=function(){var m=(0,u.useForm)(),P=function(_,se){se.length>0?O.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(se.map(function(ge){return ge.name}))):(0,y.fakeApi)("xxx/submit",_).then(function(ge){return O.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},w=function(){(0,y.fakeApi)("xxx/getForm").then(function(_){m.setValues({startDate:"2020-04-04",endDate:"2020-04-24"})})};return S.default.createElement("div",{style:{width:"400px"}},S.default.createElement(u.default,{form:m,schema:F,onFinish:P}),S.default.createElement(o.default,null,S.default.createElement(g.default,{onClick:w},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),S.default.createElement(g.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},A=i,r.abrupt("return",A);case 44:case"end":return r.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:tn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-2"}},"form-methods-demo-3":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(C.a.mark(function T(){var f,o,g,O,S,s,u,y,B,I,F,i;return C.a.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return B=function(p,m){if(!m&&p&&p.__esModule)return p;if(p===null||typeof p!="object"&&typeof p!="function")return{default:p};var P=y(m);if(P&&P.has(p))return P.get(p);var w={},z=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var _ in p)if(_!=="default"&&Object.prototype.hasOwnProperty.call(p,_)){var se=z?Object.getOwnPropertyDescriptor(p,_):null;se&&(se.get||se.set)?Object.defineProperty(w,_,se):w[_]=p[_]}return w.default=p,P&&P.set(p,w),w},y=function(p){if(typeof WeakMap!="function")return null;var m=new WeakMap,P=new WeakMap;return(y=function(z){return z?P:m})(p)},f=e("K+nK"),d.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return d.t0=f,d.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return d.t1=d.sent,o=(0,d.t0)(d.t1),d.next=12,e.e(14).then(e.t.bind(null,"tL+A",7));case 12:return d.t2=f,d.next=15,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 15:return d.t3=d.sent,g=(0,d.t2)(d.t3),d.t4=B,d.next=20,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 20:return d.t5=d.sent,O=(0,d.t4)(d.t5),d.next=24,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 24:return S=d.sent,d.t6=B,d.next=28,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 28:return d.t7=d.sent,s=(0,d.t6)(d.t7),d.next=32,e.e(15).then(e.bind(null,"OH0R"));case 32:return u=d.sent,I={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select1:{title:"\u5355\u9009",type:"string",widget:"select"}}}}},F=function(){var p=(0,s.useForm)(),m=function(){p.setSchemaByPath("obj1.select1",{enum:["nouth","south","east","west"],enumNames:["\u4E1C","\u5357","\u897F","\u5317"]})},P=function(z,_){_.length>0?g.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(_.map(function(se){return se.name}))):g.default.info(JSON.stringify(z))};return O.default.createElement("div",{style:{width:"400px"}},O.default.createElement(s.default,{form:p,schema:I,onMount:m,onFinish:P}),O.default.createElement(o.default,{type:"primary",onClick:p.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},i=F,d.abrupt("return",i);case 37:case"end":return d.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`},"utils/index.js":{import:"./utils",content:tn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-3"}},"function-demo":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(C.a.mark(function T(){var f,o,g,O,S,s,u,y;return C.a.wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return S=function(i,A){if(!A&&i&&i.__esModule)return i;if(i===null||typeof i!="object"&&typeof i!="function")return{default:i};var d=O(A);if(d&&d.has(i))return d.get(i);var r={},p=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var m in i)if(m!=="default"&&Object.prototype.hasOwnProperty.call(i,m)){var P=p?Object.getOwnPropertyDescriptor(i,m):null;P&&(P.get||P.set)?Object.defineProperty(r,m,P):r[m]=i[m]}return r.default=i,d&&d.set(i,r),r},O=function(i){if(typeof WeakMap!="function")return null;var A=new WeakMap,d=new WeakMap;return(O=function(p){return p?d:A})(i)},f=e("K+nK"),I.t0=f,I.next=6,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 6:return I.t1=I.sent,o=(0,I.t0)(I.t1),I.t2=S,I.next=11,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 11:return I.t3=I.sent,g=(0,I.t2)(I.t3),s={type:"object",properties:{select1:{title:"\u5355\u9009",description:"\u5C1D\u8BD5\u9009\u62E9\u201C\u663E\u793A\u8F93\u5165\u6846\u201D",type:"string",enum:["a","b"],enumNames:["\u9690\u85CF\u8F93\u5165\u6846","\u663E\u793A\u8F93\u5165\u6846"],disabled:"{{rootValue.input1.length > 5}}",default:"a"},input1:{title:"\u8F93\u5165\u6846",description:"\u5C1D\u8BD5\u8F93\u5165\u8D85\u8FC75\u4E2A\u5B57\u7B26",type:"string",hidden:'{{formData.select1 == "a"}}'}}},u=function(){var i=(0,g.useForm)();return o.default.createElement(g.default,{form:i,schema:s})},y=u,I.abrupt("return",y);case 17:case"end":return I.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo1;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo"}},"function-demo-1":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(C.a.mark(function T(){var f,o,g,O,S;return C.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return f=e("K+nK"),u.t0=f,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,o=(0,u.t0)(u.t1),u.t2=f,u.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return u.t3=u.sent,g=(0,u.t2)(u.t3),u.next=13,e.e(19).then(e.bind(null,"8iYR"));case 13:return O=u.sent,S=function(){return o.default.createElement(g.default,{schema:O.expression})},u.abrupt("return",S);case 16:case"end":return u.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { expression } from '../json/schema';

export default () => <FR schema={expression} />;`},"demo/FR.jsx":{import:"../demo/FR",content:Ie},"json/schema.js":{import:"../json/schema",content:me}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo-1"}},"lifeCycle-demo":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(C.a.mark(function T(){var f,o,g,O,S,s,u,y,B;return C.a.wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return S=function(A,d){if(!d&&A&&A.__esModule)return A;if(A===null||typeof A!="object"&&typeof A!="function")return{default:A};var r=O(d);if(r&&r.has(A))return r.get(A);var p={},m=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var P in A)if(P!=="default"&&Object.prototype.hasOwnProperty.call(A,P)){var w=m?Object.getOwnPropertyDescriptor(A,P):null;w&&(w.get||w.set)?Object.defineProperty(p,P,w):p[P]=A[P]}return p.default=A,r&&r.set(A,p),p},O=function(A){if(typeof WeakMap!="function")return null;var d=new WeakMap,r=new WeakMap;return(O=function(m){return m?r:d})(A)},F.t0=S,F.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return F.t1=F.sent,f=(0,F.t0)(F.t1),F.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 9:return o=F.sent,F.t2=S,F.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 13:return F.t3=F.sent,g=(0,F.t2)(F.t3),s=function(A){return new Promise(function(d){return setTimeout(d,A)})},u={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u4E0B\u62C9\u9009\u6846",description:"\u52A0\u8F7D\u4E2D...",type:"string",enum:[],widget:"select"}}},y=function(){var A=(0,g.useForm)(),d=function(){A.setValues({input1:"hello world"}),s(3e3).then(function(p){A.setSchemaByPath("select1",{description:"",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]})})};return f.default.createElement(g.default,{form:A,schema:u,onMount:d})},B=y,F.abrupt("return",B);case 20:case"end":return F.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"lifeCycle-demo"}},"watch-demo":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(C.a.mark(function T(){var f,o,g,O,S,s,u,y;return C.a.wrap(function(I){for(;;)switch(I.prev=I.next){case 0:return S=function(i,A){if(!A&&i&&i.__esModule)return i;if(i===null||typeof i!="object"&&typeof i!="function")return{default:i};var d=O(A);if(d&&d.has(i))return d.get(i);var r={},p=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var m in i)if(m!=="default"&&Object.prototype.hasOwnProperty.call(i,m)){var P=p?Object.getOwnPropertyDescriptor(i,m):null;P&&(P.get||P.set)?Object.defineProperty(r,m,P):r[m]=i[m]}return r.default=i,d&&d.set(i,r),r},O=function(i){if(typeof WeakMap!="function")return null;var A=new WeakMap,d=new WeakMap;return(O=function(p){return p?d:A})(i)},I.t0=S,I.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return I.t1=I.sent,f=(0,I.t0)(I.t1),I.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 9:return o=I.sent,I.t2=S,I.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 13:return I.t3=I.sent,g=(0,I.t2)(I.t3),s={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"}}},u=function(){var i=(0,g.useForm)(),A={"#":function(r){console.log("\u8868\u5355\u7684\u65F6\u65F6\u6570\u636E\u4E3A\uFF1A",r)},input1:function(r){i.setValueByPath("input2",r)}};return f.default.createElement(g.default,{form:i,schema:s,watch:A})},y=u,I.abrupt("return",y);case 19:case"end":return I.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo"}},"watch-demo-1":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(C.a.mark(function T(){var f,o,g,O,S,s,u,y,B,I;return C.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return u=function(d,r){if(!r&&d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var p=s(r);if(p&&p.has(d))return p.get(d);var m={},P=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var w in d)if(w!=="default"&&Object.prototype.hasOwnProperty.call(d,w)){var z=P?Object.getOwnPropertyDescriptor(d,w):null;z&&(z.get||z.set)?Object.defineProperty(m,w,z):m[w]=d[w]}return m.default=d,p&&p.set(d,m),m},s=function(d){if(typeof WeakMap!="function")return null;var r=new WeakMap,p=new WeakMap;return(s=function(P){return P?p:r})(d)},f=e("K+nK"),i.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return i.t0=f,i.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.t2=u,i.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return i.t3=i.sent,g=(0,i.t2)(i.t3),i.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 17:return O=i.sent,i.t4=u,i.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 21:return i.t5=i.sent,S=(0,i.t4)(i.t5),y={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"radio"}}}}},B=function(){var d=(0,S.useForm)(),r=function(P,w){w.length>0?alert("errorFields:"+JSON.stringify(w)):alert("formData:"+JSON.stringify(P,null,2))},p={input1:function(P){P.length>2?d.setSchemaByPath("obj1.select",function(w){var z=w.enumNames;return{enumNames:z.map(function(_){return _+"a"})}}):d.setSchemaByPath("obj1.select",{enumNames:["\u65E9","\u4E2D","\u665A"]})}};return g.default.createElement("div",null,g.default.createElement(S.default,{form:d,schema:y,onFinish:r,watch:p}),g.default.createElement(o.default,{type:"",style:{marginRight:8},onClick:function(){return d.setSchemaByPath("input2",{title:"\u7F16\u8F91\u6846",format:"textarea"})}},"\u5C06 input \u6539\u4E3A textarea"),g.default.createElement(o.default,{type:"primary",onClick:d.submit},"\u63D0\u4EA4"))},I=B,i.abrupt("return",I);case 27:case"end":return i.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo-1"}},"widget-demo":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(C.a.mark(function T(){var f,o,g,O,S,s,u,y,B,I,F,i,A;return C.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return B=function(m,P){if(!P&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var w=y(P);if(w&&w.has(m))return w.get(m);var z={},_=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var se in m)if(se!=="default"&&Object.prototype.hasOwnProperty.call(m,se)){var ge=_?Object.getOwnPropertyDescriptor(m,se):null;ge&&(ge.get||ge.set)?Object.defineProperty(z,se,ge):z[se]=m[se]}return z.default=m,w&&w.set(m,z),z},y=function(m){if(typeof WeakMap!="function")return null;var P=new WeakMap,w=new WeakMap;return(y=function(_){return _?w:P})(m)},f=e("K+nK"),r.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return r.t0=f,r.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return r.t1=r.sent,o=(0,r.t0)(r.t1),r.next=12,Promise.all([e.e(3),e.e(60)]).then(e.t.bind(null,"cUip",7));case 12:return r.t2=f,r.next=15,Promise.all([e.e(0),e.e(12),e.e(58),e.e(61)]).then(e.t.bind(null,"iJl9",7));case 15:return r.t3=r.sent,g=(0,r.t2)(r.t3),r.t4=f,r.next=20,e.e(64).then(e.bind(null,"0Owb"));case 20:return r.t5=r.sent,O=(0,r.t4)(r.t5),r.t6=B,r.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return r.t7=r.sent,S=(0,r.t6)(r.t7),r.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 29:return s=r.sent,r.t8=B,r.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 33:return r.t9=r.sent,u=(0,r.t8)(r.t9),I={type:"object",properties:{string:{title:"\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6",type:"string",widget:"site"},select:{title:"\u5355\u9009",type:"number",enum:[1,2,3],enumNames:["\u9009\u98791","\u9009\u98792","\u9009\u98793"]}}},F=function(m){return S.default.createElement(g.default,(0,O.default)({addonBefore:"http://",addonAfter:".com"},m))},i=function(){var m=(0,u.useForm)(),P=function(){};return S.default.createElement("div",null,S.default.createElement(u.default,{form:m,schema:I,widgets:{site:F},onFinish:function(z){return alert(JSON.stringify(z,null,2))}}),S.default.createElement(o.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4"))},A=i,r.abrupt("return",A);case 40:case"end":return r.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
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

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},identifier:"widget-demo"}},"schema-demo":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(C.a.mark(function T(){var f,o,g,O,S;return C.a.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return f=e("K+nK"),u.t0=f,u.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return u.t1=u.sent,o=(0,u.t0)(u.t1),u.t2=f,u.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return u.t3=u.sent,g=(0,u.t2)(u.t3),u.next=13,e.e(19).then(e.bind(null,"8iYR"));case 13:return O=u.sent,S=function(){return o.default.createElement(g.default,{schema:O.basic})},u.abrupt("return",S);case 16:case"end":return u.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { basic } from '../json/schema';

export default () => <FR schema={basic} />;`},"demo/FR.jsx":{import:"../demo/FR",content:Ie},"json/schema.js":{import:"../json/schema",content:me}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo"}},"docs-playground":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(C.a.mark(function T(){return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"BASV"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:rt},"main.js":{import:"./main",content:je},"json/simplest.json":{import:"./json/simplest.json",content:Mn},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:Tn},"monaco/index.js":{import:"./monaco",content:On},"theme.css":{import:"./theme.css",content:fn},"index.css":{import:"./index.css",content:Ye}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:"^16.0.0"},"react-dom":{version:"^16.0.0"},"deep-equal":{version:"2.0.5"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.3.2"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-simple-code-editor":{version:"0.11.0"},prismjs:{version:"1.23.0"}},identifier:"docs-playground"}},"table-render-advanced":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(C.a.mark(function T(){return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"7ZP+"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{tsx:Ln}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.1.0"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"1.x"}},transform:!0,defaultShowCode:!0,identifier:"table-render-advanced"}},"table-render-demo":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(C.a.mark(function T(){var f,o,g,O,S,s,u,y,B;return C.a.wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return f=e("K+nK"),F.t0=f,F.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return F.t1=F.sent,o=(0,F.t0)(F.t1),F.next=8,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(57)]).then(e.bind(null,"P2DI"));case 8:for(g=F.sent,O=[],S=0;S<6;S++)O.push({id:S.toString(),title:"\u6807\u9898".concat(S+1),created_at:new Date().getTime()});return s={type:"object",properties:{string:{title:"\u6807\u9898",type:"string","ui:width":"30%"},created_at:{title:"\u521B\u5EFA\u65F6\u95F4",type:"string",format:"date","ui:width":"30%"}}},u=[{title:"\u6807\u9898",dataIndex:"title"},{title:"\u521B\u5EFA\u65F6\u95F4",key:"since",dataIndex:"created_at",valueType:"date"},{title:"\u64CD\u4F5C",render:function(A,d){return o.default.createElement("a",{onClick:function(){return alert(A.title)}},"\u7F16\u8F91")}}],y=function(){var A=function(){return{rows:O,total:O.length}};return o.default.createElement(g.TableProvider,null,o.default.createElement(g.Search,{schema:s,api:A}),o.default.createElement(g.Table,{headerTitle:"\u6700\u7B80\u8868\u683C",columns:u,rowKey:"id"}))},B=y,F.abrupt("return",B);case 16:case"end":return F.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Wrapper;`}},dependencies:{react:{version:">=16.8.0"},"table-render":{version:"1.1.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.x"}},transform:!0,defaultShowCode:!0,identifier:"table-render-demo"}},"generator-demo":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(C.a.mark(function T(){var f,o,g,O,S,s;return C.a.wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return f=e("K+nK"),y.t0=f,y.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return y.t1=y.sent,o=(0,y.t0)(y.t1),y.t2=f,y.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(56)]).then(e.bind(null,"nYSz"));case 9:return y.t3=y.sent,g=(0,y.t2)(y.t3),O={schema:{type:"object",properties:{inputName:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string"}}},displayType:"row",showDescIcon:!0,labelWidth:120},S=function(){return o.default.createElement("div",{style:{height:"80vh"}},o.default.createElement(g.default,{defaultValue:O}))},s=S,y.abrupt("return",s);case 15:case"end":return y.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
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

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.0.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"generator-demo"}},"generator-modal":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(C.a.mark(function T(){return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"PPgD"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:wn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.0.1"},"react-dom":{version:">=16.9.0"}},identifier:"generator-modal"}},"generator-transformer":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(C.a.mark(function T(){return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"jktF"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:Rn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.0.1"},"react-dom":{version:">=16.9.0"}},identifier:"generator-transformer"}},"generator-settings":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(C.a.mark(function T(){return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"M63W"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:we}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.0.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-settings"}},"generator-playground":{component:Object(V.dynamic)({loader:function(){var M=Object(X.a)(C.a.mark(function T(){return C.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"TYW4"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},T)}));function N(){return M.apply(this,arguments)}return N}()}),previewerProps:{sources:{_:{jsx:kn},"index.less":{import:"./index.less",content:$n}},dependencies:{react:{version:">=16.8.0"},umi:{version:"3.4.19"},"fr-generator":{version:"2.0.1"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-playground"}}}},TIsu:function(Bn,gn,e){},Zs1V:function(Bn){Bn.exports=JSON.parse("{}")},j57V:function(Bn,gn,e){"use strict";e.r(gn);var X=e("q1tI"),n=e.n(X),C=e("dEAq"),V=e.n(C),ce=e("0zqC"),L=e("ZpkN"),tn=e("JjdP"),Ie=n.a.memo(tn.default["widget-demo"].component);gn.default=me=>(n.a.useEffect(()=>{me!=null&&me.location.hash&&C.AnchorLink.scrollToAnchor(decodeURIComponent(me.location.hash.slice(1)))},[]),n.a.createElement(n.a.Fragment,null,n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"markdown"},n.a.createElement("h1",{id:"\u81EA\u5B9A\u4E49\u7EC4\u4EF6"},n.a.createElement(C.AnchorLink,{to:"#\u81EA\u5B9A\u4E49\u7EC4\u4EF6","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u81EA\u5B9A\u4E49\u7EC4\u4EF6"),n.a.createElement("p",null,"\u5F53 FormRender \u63D0\u4F9B\u7684\u7EC4\u4EF6\u65E0\u6CD5 100%\u6EE1\u8DB3\u7528\u6237\u9700\u6C42\u65F6\uFF0C\u53EF\u4EE5\u8003\u8651\u81EA\u5DF1\u5199\u4E00\u4E2A\u3002\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u529F\u80FD\u4F7F FormRender \u62E5\u6709\u5F88\u597D\u6269\u5C55\u6027\uFF0C\u53EF\u80FD\u7684\u5E94\u7528\u573A\u666F\u5982\u4E0B\uFF1A"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u6211\u9700\u8981\u5199\u4E00\u4E2A\u5F02\u6B65\u52A0\u8F7D\u7684\u641C\u7D22\u8F93\u5165\u6846\uFF08\u666E\u9002\u6027\u4E0D\u9AD8/\u96BE\u4EE5\u7528 schema \u63CF\u8FF0\u7684\u7EC4\u4EF6\uFF09"),n.a.createElement("li",null,"\u6211\u4EEC\u56E2\u961F\u4F7F\u7528 xxx ui\uFF0C\u4E0E antd \u4E0D\u642D\uFF0C\u5E0C\u671B\u80FD\u9002\u914D\u4E00\u5957 xxx ui \u7EC4\u4EF6\u7684 FormRender\uFF08\u6B22\u8FCE Pull Request\uFF09"),n.a.createElement("li",null,"\u6211\u9700\u8981\u5728\u8868\u5355\u5185\u90E8\u5199\u4E00\u4E2A excel \u4E0A\u4F20\u6309\u94AE\uFF08\u5B8C\u5168\u5B9A\u5236\u5316\u7684\u9700\u6C42\uFF09")),n.a.createElement("p",null,"\u6CE8\uFF1A\u5982\u679C\u662F\u65B0\u589E\u4E00\u4E2A\u5E38\u7528\u7EC4\u4EF6\uFF0C\u5EFA\u8BAE\u7ED9 FormRender \u7EF4\u62A4\u7684\u540C\u5B66\u6765\u63D0 Pull Request\uFF0C\u8FD9\u6837\u53EF\u4EE5\u66F4\u597D\u6269\u5C55\u5176\u751F\u6001\uFF0CFormRender \u7684\u793E\u533A\u4EE5\u53CA\u63D0\u4F9B\u4E86\u90E8\u5206 ",n.a.createElement(C.Link,{to:"/widgets"},"\u5E38\u7528\u81EA\u5B9A\u4E49\u7EC4\u4EF6"),"\u3002"),n.a.createElement("h2",{id:"\u4F7F\u7528"},n.a.createElement(C.AnchorLink,{to:"#\u4F7F\u7528","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u4F7F\u7528"),n.a.createElement("p",null,"\u7B80\u5355\u7684\u8BF4\uFF0C\u5728 Form \u7EC4\u4EF6\u5C42\u4F7F\u7528 widgets \u5B57\u6BB5\u6CE8\u518C\u81EA\u5B9A\u4E49\u7EC4\u4EF6\uFF0C\u5E76\u5728 schema \u5185\u4F7F\u7528 widget \u5B57\u6BB5\u6307\u660E\u4F7F\u7528\u7684\u7EC4\u4EF6 key \u503C\u5373\u53EF\uFF1A"),n.a.createElement(L.a,{code:`const schema = {
  type: 'object',
  properties: {
    string: {
      title: '\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6',
      type: 'string',
      widget: 'site',
    },
    //...
  },
};

<Form
  schema={schema}
  widgets={{ site: SiteInput }}
  //...
/>;`,lang:"js"}),n.a.createElement("p",null,"\u5B9E\u9645\u4EE3\u7801\u5982\u4E0B\uFF1A")),n.a.createElement(ce.default,tn.default["widget-demo"].previewerProps,n.a.createElement(Ie,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("p",null,"\u53EF\u4EE5\u770B\u5230\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7684\u5199\u6CD5\u5341\u5206\u76F4\u89C2\uFF0C\u4E8B\u5B9E\u4E0A\u5F88\u591A antd \u7684\u7EC4\u4EF6\u90FD\u662F\u53EF\u4EE5\u76F4\u63A5\u62FF\u6765\u4F5C\u4E3A\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u4F7F\u7528\uFF08\u5185\u7F6E\u7EC4\u4EF6\u4E2D\u5C31\u6709 Input, InputNumber, Checkbox \u548C Switch\uFF09"),n.a.createElement("h2",{id:"createwidget"},n.a.createElement(C.AnchorLink,{to:"#createwidget","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"createWidget"),n.a.createElement("p",null,"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u63A5\u6536\u4EE5\u4E0B Props\uFF1A"),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("strong",null,"disabled"),"\uFF1A\u662F\u5426\u7981\u6B62\u8F93\u5165"),n.a.createElement("li",null,n.a.createElement("strong",null,"readOnly"),"\uFF1A\u662F\u5426\u53EA\u8BFB"),n.a.createElement("li",null,n.a.createElement("strong",null,"value"),"\uFF1A\u7EC4\u4EF6\u73B0\u5728\u7684\u503C"),n.a.createElement("li",null,n.a.createElement("strong",null,"onChange"),"\uFF1A\u51FD\u6570\uFF0C\u63A5\u6536 value \u4E3A\u5165\u53C2\uFF0C\u7528\u4E8E\u5C06\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7684\u8FD4\u56DE\u503C\u540C\u6B65\u7ED9 Form"),n.a.createElement("li",null,n.a.createElement("strong",null,"schema"),"\uFF1A\u7EC4\u4EF6\u5BF9\u5E94\u7684\u5B50 schema"),n.a.createElement("li",null,n.a.createElement("strong",null,"addons.onItemChange"),": \u6CE8\u610F\u6302\u5728 addons \u4E0B\u9762\u3002\u7528\u4E8E\u5728\u672C\u7EC4\u4EF6\u5185\u4FEE\u6539\u5176\u4ED6\u7EC4\u4EF6\u7684\u503C onItemChange(value, path)"),n.a.createElement("li",null,n.a.createElement("strong",null,"addons.getValue"),": \u7528\u4E8E\u901A\u8FC7\u8DEF\u5F84\u5B57\u7B26\u4E32\u83B7\u53D6\u503C getValue(path)\u3002\u4F8B\u5982 ",n.a.createElement("code",null,"getValue('a.b[2].c')"),"\u3002getValue() \u83B7\u53D6 formData"),n.a.createElement("li",null,n.a.createElement("strong",null,"addons.formData"),": \u8868\u5355\u5F53\u524D\u7684\u6570\u636E\u3002\u5176\u5B9E\u53EF\u4EE5\u901A\u8FC7 getValue \u83B7\u53D6\uFF0C\u4F46\u6211\u4E5F\u4F20\u4E0B\u6765\u4E86\u3002"),n.a.createElement("li",null,n.a.createElement("strong",null,"addons.dataPath"),': \u76EE\u524D\u6570\u636E\u6240\u5728\u7684 path\uFF0C\u4F8B\u5982"a.b[2].c[0].d"\uFF0Cstring \u7C7B\u578B\u3002'),n.a.createElement("li",null,n.a.createElement("strong",null,"addons.dataIndex"),': \u5982\u679C dataPath \u4E0D\u5305\u542B\u6570\u7EC4\uFF0C\u5219\u4E3A [], \u5982\u679C dataPath \u5305\u542B\u6570\u7EC4\uFF0C\u4F8B\u5982"a.b[2].c[0].d"\uFF0C\u5219\u4E3A [2,0]\u3002\u662F\u81EA\u4E0A\u5230\u4E0B\u6240\u6709\u7ECF\u8FC7\u7684\u6570\u7EC4\u7684 index \u6309\u987A\u5E8F\u5B58\u653E\u7684\u4E00\u4E2A\u6570\u7EC4\u7C7B\u578B')),n.a.createElement("p",null,"\u5BF9\u9AD8\u9636\u7EC4\u4EF6\u719F\u6089\u7684\u540C\u5B66\uFF0C",n.a.createElement("code",null,"form-render")," \u5185\u7F6E\u4E86 ",n.a.createElement("code",null,"createWidget")," \u65B9\u6CD5\uFF0C\u652F\u6301\u7528\u7C7B\u4F3C\u4E8E ",n.a.createElement("code",null,"redux")," \u7684 ",n.a.createElement("code",null,"connect")," \u7684\u8BED\u6CD5\u5FEB\u901F\u751F\u4EA7\u81EA\u5B9A\u4E49\u7EC4\u4EF6\uFF1A"),n.a.createElement(L.a,{code:`import { Checkbox } from 'antd';
import { createWidget } from 'form-render';

const MyCheckBox = createWidget(({ value }) => {
  return {
    checked: value,
  };
})(Checkbox);`,lang:"js"}),n.a.createElement("p",null,n.a.createElement("code",null,"createWidget")," \u662F\u4E00\u4E2A\u9AD8\u9636\u7EC4\u4EF6\uFF0C\u5B83\u63A5\u6536\u7EC4\u4EF6 props\uFF0C\u5141\u8BB8\u7528\u6237\u5BF9\u9F50\u505A\u4FEE\u6539\u5E76\u8FD4\u56DE\u771F\u6B63\u9700\u8981\u7684 props\u3002\u4F7F\u7528 ",n.a.createElement("code",null,"createWidget")," \u4E0E\u76F4\u63A5\u5199\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7684\u5DE5\u4F5C\u91CF\u57FA\u672C\u662F\u4E00\u6837\u7684\uFF0C\u53EA\u662F\u4E00\u4E2A\u8BED\u6CD5\u7CD6\uFF0C\u559C\u6B22\u7684\u540C\u5B66\u53EF\u4EE5\u4F7F\u7528"),n.a.createElement("h2",{id:"\u6700\u4F73\u5B9E\u8DF5"},n.a.createElement(C.AnchorLink,{to:"#\u6700\u4F73\u5B9E\u8DF5","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u6700\u4F73\u5B9E\u8DF5"),n.a.createElement("p",null,"\u540C\u4E00\u4E2A\u9879\u76EE\u4E0B\u4E0D\u540C\u7684 form \u91CC\uFF0C\u4F7F\u7528\u5230\u7684\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u53EF\u80FD\u5927\u81F4\u76F8\u540C\uFF0C\u4F46\u4E5F\u6709\u53EF\u80FD\u4E92\u76F8\u4E0D\u540C\uFF0C\u7B14\u8005\u5EFA\u8BAE\u662F\u4E2D\u5FC3\u5316\u4E00\u4E2A Form \u7EC4\u4EF6\uFF0C\u5E76\u4E00\u6B21\u6027\u5C06\u6240\u6709\u9700\u8981\u7684\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u6CE8\u5165\u5176\u4E2D\u3002\u5728\u9879\u76EE\u7684\u5404\u5904\u5F15\u5165\u5BF9\u5E94\u7EC4\u4EF6\uFF1A"),n.a.createElement(L.a,{code:`//  /Component/FormRender.js
import Form from 'form-render';
import Cascade from './Cascade';
import Percentage from './Percentage';
import MyCheckBox from './MyCheckBox';
import ExcelUploader from './ExcelUploader';

const FormRender = props => {
  return (
    <Form
      widgets={{
        percentage: Percentage,
        cascade: Cascade,
        myCheck: MyCheckBox,
        excelUpload: ExcelUploader,
      }}
      {...props}
    />
  );
};`,lang:"js"}),n.a.createElement("p",null,"\u7136\u540E\u5728\u6BCF\u4E2A form \u9875\u9762\u7EDF\u4E00\u5F15\u5165\u4F7F\u7528"),n.a.createElement(L.a,{code:`import { useForm } from 'form-render';
import FormRender from './Component/FormRender';
const Demo1 = props => {
  const form = useForm();
  return <FormRender form={form} onFinish={() => {}} />;
};`,lang:"js"}),n.a.createElement("h2",{id:"\u5185\u7F6E\u7EC4\u4EF6"},n.a.createElement(C.AnchorLink,{to:"#\u5185\u7F6E\u7EC4\u4EF6","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u5185\u7F6E\u7EC4\u4EF6"),n.a.createElement("p",null,"\u4F7F\u7528\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u524D\uFF0C\u4E5F\u8BB8\u5DF2\u7ECF\u6709\u5185\u7F6E\u7EC4\u4EF6\u652F\u6301\u3002\u5177\u4F53\u89C1",n.a.createElement(C.Link,{to:"/form-render/schema/inner-widget"},"schema \u4E0E\u5185\u7F6E\u7EC4\u4EF6"))))))},p8sG:function(Bn,gn,e){"use strict";Bn.exports=e("80pN")}}]);
